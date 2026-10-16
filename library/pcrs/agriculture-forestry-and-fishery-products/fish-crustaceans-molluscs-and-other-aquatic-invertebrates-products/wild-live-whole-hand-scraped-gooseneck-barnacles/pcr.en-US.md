---
pcr_id: pcr.wild-live-whole-hand-scraped-gooseneck-barnacles
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild whole live gooseneck barnacles from boat-supported hand scraping

## 1. Scope and Applicability

This PCR produces a foreground data package for wild Pollicipes pollicipes collected by boat-supported manual arrilhada scraping on natural rocky intertidal habitat in the Berlengas, Portugal, and delivered whole and alive to the first physical recipient of the harvester's product in Peniche. It covers actual sorting, live holding and protective presentation before that receipt. Eligibility requires lot-level species, origin, capture technique, condition and recipient evidence. Historical observations support the route; they do not establish that a particular present operation uses it. A live trader offering supports the channel only. Neither this PCR nor an inventory pass establishes legal compliance, food safety or current stock sustainability.

Exclude cultivated animals, diving/SCUBA collection, other barnacle species, edible peduncle separated from plates, cooked or frozen barnacles and operations after the declared first recipient. A first recipient may be an intermediary or consumer taking physical custody; an invoice office, checkpoint or remote buyer is not a physical gate by itself. Do not add routine washing, immersion, depuration, refrigeration or packaging technology without actual records. Cleaning or disaggregation that occurs belongs to the node doing it.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-whole-hand-scraped-gooseneck-barnacles |
| classification_refs | CPC 3.0 04391; narrower than Other wild crustaceans, live, fresh or chilled |
| covered_products | Whole live Pollicipes pollicipes from the declared wild Berlengas rocky-intertidal hand-scraping route |
| excluded_products | Other species, cultivated or dive-collected product, detached edible peduncle, cooked, frozen and downstream retail products |
| representative_product | Net whole live Pollicipes pollicipes with peduncle, capitulum and native plates at the first physical recipient of the harvester's product in Peniche |
| production_route | Boat-supported manual arrilhada scraping; actual grade/destination sorting; live holding; actual protective presentation; delivery |
| market_state | Whole live marine cirripede crustacean, not a mollusc; actual grade and container state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole live Pollicipes pollicipes accepted by the first physical recipient of the harvester's product in Peniche |
| How much | 1 kg net whole live animal mass |
| How well | Verified species and Berlengas origin; peduncle and capitulum with native plates retained; alive at physical acceptance; actual grade and presentation declared |
| How long or cycle | Declared reporting period with individually indexed trips, lots, sorting events, holding intervals, presentation and delivery; include unsuccessful trips and asset service periods |
| reference_flow_link | `accepted_live_barnacles` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole live Pollicipes pollicipes at the first physical recipient of the harvester's product in Peniche |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | accepted scientific species; wild origin and Berlengas collection location; rocky intertidal manual arrilhada route; trip and lot ids; whole peduncle/capitulum/native plates; live condition at acceptance; actual grade; net weighing and deductions; holding practice and duration; actual packaging/reuse; first physical recipient and Peniche receipt location/time; reporting period; burden ownership |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated weighing at physical acceptance. Include the whole live animal and its native plates. Deduct free water, containers, rocks, sand, non-target fouling and rejected animals; retain deduction records in cp_delivery. |
| `checkpoint_distinction` | `captured_barnacles`, `accepted_live_barnacles` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep checkpoint gross harvest and selected accepted net mass as separate observations. Neither a reported catch nor checkpoint registration substitutes for accepted product weighing. |
| `native_measurement` | all inventory rows | Actual instance property | actual native unit | Retain original kg, L, kWh, hours, item counts, service units and treatment measurements. Any conversion uses the same actual composition, density, item mass or service definition with provenance and uncertainty; no edible-yield conversion applies to whole animals. |
| `reference_denominator` | all inventory rows | Actual instance property | actual native unit per kg reference | Record attributable actual quantities divided by the accepted net reference mass for the same declared scope. A zero-acceptance trip retains burdens for period attribution; no division by zero and no substitution of gross catch. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild animals attached to natural Berlengas intertidal substrate; no hatchery, feeding or managed growout; boat, harvester and equipment provision identified before the trip |
| starting_condition_role | Natural capture context and collection observation, not a purchased zero-burden product; actual resource removals and ecological observations are disclosed |
| product_classification_scope | The eligible whole live Pollicipes pollicipes subset of other wild crustaceans |
| recursive_input_rule | Internal barnacle transfers carry measured lot mass and transfer ids; purchased barnacles from another harvester are not relabelled as own capture and require a separately bounded upstream dataset or exclusion from this route |
| upstream_dataset_requirement | Fuel, electricity, tools, boat/vehicle assets, packaging and purchased services include their attributable upstream production and supply. Complete purchased services declare included assets, energy, emissions and treatment to prevent repetition. |
| disclosure | Record trips including failed trips, harvest areas, sorting/holding sites, Peniche receipt, own versus purchased duties, reporting/asset periods, initial/final stocks, ecological fates and missing data |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_capture` | `capture` | Include boat mobilization, transit, access, scraping and return to landed handoff within capture duty. Capture separates attached wild resource from landed material; sorting and preservation do not stand in for removal. | `jacinto-berlengas-2010`, `dgrm-arrilhada` |
| `boundary_gate` | all processes | Follow each lot to actual first recipient acceptance in Peniche. Checkpoint unloading/registration records gross harvest and origin; use actual custody and weighing evidence to locate final receipt. | `portaria-berlengas-2025` |
| `boundary_conditions` | `sorting`, `live_holding`, `presentation` | Sorting creates declared accepted, alternate intended and rejected states. Activate holding only for observed bounded live-state interventions; otherwise transfer directly from sorting to presentation. Present using actual containers. Record water/materials/cleaning when used; no universal wash, depuration or temperature prescription. | |
| `boundary_fates` | all processes | Trace rock, sand, attached juveniles, non-target organisms, mortalities, spent containers, fluids and rejects to actual retention, sale, return, disposal or treatment. Habitat disturbance and unmeasured ecology remain disclosed observations/data gaps; do not invent elementary exchanges, waste labels, factors or credits. | |
| `boundary_services` | all processes | Inventory either complete purchased duty or its own operation components at each actual instance. Identify shared boat, scraper, crates, holding space, energy equipment and vehicle consumers by node and period, with one burden owner. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Boat-supported intertidal hand scraping and landing | required | Eligible natural rocky-intertidal trip | Wild removal and landed handoff to sorting; includes return vessel duty | Actual landed target animals per trip and period |
| `sorting` | Grade and destination sorting | required | Each landed lot | Split target grades, other intended destinations and genuine rejects | Actual mass of each lot destination |
| `live_holding` | Bounded live holding | conditional | Actual observed bounded intervention maintains the live state between sorting and presentation | Preserve live state using declared actual practice; bypass when no intervention occurs | Actual live lot handoff and duration |
| `presentation` | Container presentation | required | Actual presentation, including reusable or recipient-supplied container state | Protect/present product; logistics belongs to delivery | Presented live lot net mass and container ownership |
| `delivery` | Delivery and first physical receipt | required | Actual transfer to first recipient in Peniche | Pre-gate logistics, receipt and final net weighing | 1 kg accepted whole live reference flow |

The mode is trip/lot batches within a declared reporting period, not continuous production. Assign shared sailing, access, cleaning, changeover, interrupted trips, empty returns and holding events once to actual duties and period. An immediate transfer without observed live-state intervention bypasses live_holding: sorted_live_barnacles passes directly to presentation_barnacles with T_sort_present. If intervention occurs, use T_sort_hold then T_hold_present and the holding cards; do not also record the bypass receipt for the same material. Unknown actual intervention state is a data gap, not an inactive default. Recipient-owned presentation is recorded explicitly; it does not justify invented inputs. Each collection obligation requires independently identified actual exchanges, native units and instance ids before final dataset construction. A complete-service choice excludes its included operation components. Output fates determine product, waste or elementary classification before concrete exchange construction.

All non-reference ranges below are provisional unresolved evidence envelopes, not empirical defaults, allowed limits or numerical validation gates. Each U is a quantity in the stated instance's native unit per reference flow, independently established from comparable external/previous independent evidence, never the unit itself, a shared cap across different substances/services, or the maximum of the lot being checked. Actual zero requires a recorded absence. If U is unquantified, retain that gap and use collected quantities; no numerical range pass follows.

### Process: Boat-supported intertidal hand scraping and landing (`capture`)

#### Inputs

##### Product flows

#### Outputs

##### Product flows

###### Landed target animals for sorting (`captured_barnacles`)

Target whole animals removed by hand scraping and passed to sorting with transfer id T_capture_sort. Record gross landed/checkpoint observations separately; this card's target-animal quantity excludes incidental mineral material and non-target organisms. Track accompanying material separately with the same transfer id: independently weighed rock, sand, free water and non-target/attached-organism quantities, identity, destination and uncertainty. These physical accompanying quantities are observations, not automatic product, waste or elementary classifications. Both ends of T_capture_sort reconcile the same actual material inventory.

- Selected flow: Landed whole Pollicipes pollicipes for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual target-animal handoff mass from cp_capture, not fixed to final accepted mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Sources: `jacinto-berlengas-2010`, `portaria-berlengas-2025`
- Range: Provisional capture-to-acceptance evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_captured_target_lot
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from owned capture combustion (`capture_fossil_co2`)

The card is the fossil-carbon combustion product released to air by owned capture duty, conditional on actual fossil fuel use; it excludes provider-included emissions and animal respiration.

- Selected flow: Carbon dioxide, fossil, to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual fossil carbon dioxide quantified from the owned fuel duty with documented carbon basis; cp_capture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Provisional fossil-emission evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_capture_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biogenic carbon dioxide from owned capture combustion (`capture_biogenic_co2`)

This distinct air-emission card applies only to evidenced biogenic carbon in actual capture fuel; do not infer it from generic CO2 or assign a fossil UUID.

- Selected flow: Carbon dioxide, biogenic, to air `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual biogenic carbon dioxide for verified biogenic fuel fractions; record absent fraction or unknown composition explicitly in cp_capture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Provisional biogenic-emission evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_capture_biogenic_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grade and destination sorting (`sorting`)

#### Inputs

The input observation ledger below accompanies T_capture_sort and does not assign exchange type by default. Compare it with capture's outgoing ledger before interpreting sorting residues or destination quantities. If an actual material exchange is constructed, classify it from the real source and fate and verify its concrete identity rather than silently inserting it into the target-animal card.

| Incoming observation | Quantity and pairing | Destination reconciliation |
| --- | --- | --- |
| Rock and sand carried with landed animals | Actual independently measured quantities and uncertainty in cp_capture and cp_sorting, same T_capture_sort | Actual removal, retention or return, not target animal mass |
| Attached juveniles and non-target organisms | Actual species/state quantities or explicitly unresolved observation in cp_capture and cp_sorting, same T_capture_sort | Actual retained intended output, documented return, mortality or waste receiver |
| Free/carrier water and tare | Actual separately measured quantities at both handoffs with drainage/tare method | Deduct from animal mass; record real subsequent handling without automatic wastewater/pollutant exchange |

##### Product flows

###### Target animals received for sorting (`sorting_barnacles`)

Receive the actual landed whole target animals under T_capture_sort. Accompanying material is tracked in the separate paired observation ledger and excluded from animal mass.

- Selected flow: Landed whole Pollicipes pollicipes for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual received target-animal mass paired with T_capture_sort in cp_sorting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Provisional received-lot evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorting_target_lot
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorting electricity (`sorting_electricity`)

Inventory only actual attributable electrical supply to this node, with its actual provider and energy property; absence of powered sorting is evidenced rather than assumed.

- Selected flow: Electricity supplied to sorting equipment
- Flow property / unit: Electrical energy / kWh
- Amount rule: Metered attributable sorting electricity including actual cleaning/disaggregation equipment; cp_sorting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Provisional sorting-electricity evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorting_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Selected live lot leaving sorting (`sorted_live_barnacles`)

The selected whole live grades leave sorting for the observed holding intervention or direct presentation bypass, retaining measured net quantity and actual destination.

- Selected flow: Sorted whole live Pollicipes pollicipes leaving sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual selected live mass at T_sort_hold when holding is active, or T_sort_present on the bypass route, from cp_sorting; retain actual grades and deductions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Provisional selected-lot evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorted_live_lot
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual sorting wastewater to treatment (`sorting_wastewater`)

Only when water is actually used and a wastewater transfer to treatment occurs. Measure the actual transferred wastewater volume in m3. Retain original mass records where used, but convert kg to m3 only with measured density for this wastewater, its temperature/composition and conversion uncertainty; never assume kg equals m3. Direct carrier/free-water balance alone is not wastewater treatment or pollutant mass.

- Selected flow: Actual sorting wastewater transferred to specified treatment
- Flow property / unit: Volume / m3
- Amount rule: Actual treatment transfer volume in m3, composition and receiver from cp_sorting; normalize by the same measured final-gate reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Provisional sorting-effluent-instance evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorting_wastewater_instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Bounded live holding (`live_holding`)

Activate only when a real bounded intervention maintains the usable live state; document the actual before/after state, intervention and interval. A wait label or zero-duration handoff alone does not establish preservation. When no intervention occurs this process has no exchanges; use the measured sorting-to-presentation bypass once.

#### Inputs

##### Product flows

###### Selected live animals received (`holding_barnacles`)

Receive the measured selected whole live lot only on the activated holding path, paired to sorting under T_sort_hold; the bypass generates no holding receipt.

- Selected flow: Sorted whole live Pollicipes pollicipes leaving sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual received mass paired to T_sort_hold in cp_holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Provisional holding-receipt evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_input_lot
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Holding electricity (`holding_electricity`)

Actual electrical supply maintains the declared live-state intervention where powered equipment is used; meter the actual interval and shared capacity rather than prescribe a technology.

- Selected flow: Electricity supplied to actual live holding
- Flow property / unit: Electrical energy / kWh
- Amount rule: Metered attributable holding energy for actual equipment and interval, including failed holding lots; cp_holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Provisional holding-electricity evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Live lot after holding (`held_live_barnacles`)

The actual whole live lot after the declared intervention is handed to presentation under T_hold_present, with before/after losses and state evidence retained.

- Selected flow: Whole live Pollicipes pollicipes after declared holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual live net handoff mass at T_hold_present in cp_holding; retain losses and condition observations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Provisional held-lot evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_held_live_lot
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Container presentation (`presentation`)

#### Inputs

##### Product flows

###### Live lot received for presentation (`presentation_barnacles`)

Receive exactly the actual whole live lot from active holding or the sorting bypass. The actual incoming state and transfer id determine the concrete exchange; neither path is inferred or duplicated.

- Selected flow: Whole live Pollicipes pollicipes received for presentation via the actual holding or bypass path
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual net receipt paired to T_hold_present on the active holding path or T_sort_present on bypass, recorded once in cp_presentation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Provisional presentation-receipt evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_input_lot
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Presented live lot dispatched to delivery (`presented_live_barnacles`)

The protected/presented whole live animal lot passes to delivery under T_present_deliver; container mass and ownership remain separately recorded.

- Selected flow: Presented whole live Pollicipes pollicipes for delivery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual live animal net mass at T_present_deliver in cp_presentation, separately recording package tare and ownership handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Provisional presented-lot evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presented_live_lot
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Delivery and first physical receipt (`delivery`)

#### Inputs

##### Product flows

###### Presented live lot entering delivery (`delivery_barnacles`)

Receive the measured presented live lot for the actual pre-gate duty, paired with the presentation output; its quantity can differ from final accepted net mass.

- Selected flow: Presented whole live Pollicipes pollicipes for delivery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual received live animal mass paired to T_present_deliver in cp_delivery, not automatically 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Range: Provisional delivery-input evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_input_lot
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Whole live animals accepted at the reference gate (`accepted_live_barnacles`)

This is the actual accepted whole live product, including native peduncle/capitulum plates, at the first physical recipient of the harvester's product in Peniche. The final reference quantity is net animal mass after documented deductions.

- Selected flow: Whole live Pollicipes pollicipes at the first physical recipient of the harvester's product in Peniche
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Range: Same-lot accepted net mass identity A/A = 1; not yield or catch evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `accepted-net-mass-identity`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from owned delivery (`delivery_fossil_co2`)

Inventory fossil-carbon combustion emissions to air from actual owned delivery duty only, separately from biogenic carbon and from complete provider coverage.

- Selected flow: Carbon dioxide, fossil, to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual fossil carbon dioxide from owned delivery fuel with documented fuel/carbon method; cp_delivery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Range: Provisional delivery-fossil-emission evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biogenic carbon dioxide from owned delivery (`delivery_biogenic_co2`)

Inventory air emissions from the evidenced biogenic fraction of actual owned delivery fuel; absent or unknown biogenic content remains explicitly recorded.

- Selected flow: Carbon dioxide, biogenic, to air `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual biogenic carbon dioxide for verified biogenic delivery fuel fractions; record zero or unresolved carbon split in cp_delivery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Range: Provisional delivery-biogenic-emission evidence need
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_biogenic_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_output_set` | all intended outputs | Enumerate target grades, intended downgraded products and actual non-target intended products with species, net mass, state, grade, destination and physical handoff. Distinguish these from losses, residues, organisms returned and genuine waste. Do not make a sale output into burden-free waste because its price is low. | |
| `allocation_precedence` | shared trip and sorting burdens | First subdivide independently metered duties and assign output-specific handling directly. For remaining common capture/sorting duty use documented physical causality such as attributable duty time/load if defensible. When such causality cannot distinguish intended output grades, allocate by same-period first-handoff economic values; disclose quantities/prices, rationale and physical-mass sensitivity. No automatic avoided-production credit is allowed. | |
| `allocation_period` | trips and periods | Include successful, aborted and zero-catch trips and losses in the reporting period; assign directly linked failure to its actual lot/duty, and unresolved common failed duty to the declared period's intended outputs with a documented rationale. Reconcile beginning/ending live stock, pending lots, replacement and termination events; do not drop a low-yield interval or allocate the same burden again next period. | |
| `allocation_shared_assets` | shared boats, crates, tools, spaces and vehicles | Maintain asset/service ids, provision and maintenance totals, useful service and actual consumers across nodes/periods. Attribute once using observed service demand (hours, occupied capacity-time or documented turns, appropriate to the asset), with replacement/retirement and uncertainty. Use no universal lifespan or container reuse count; report sensitivity to uncertain service life and output attribution. | |
| `allocation_service_ownership` | complete purchased services and internal transfers | A purchased complete service owns its included energy/assets/releases/treatment; own operation owns uncovered components only. Internal transfers carry mass and burden once, never a second sale or a fixed 1 kg feed. Package reuse/return transport has one owner and service period. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | Capture duty, landed outputs and ecological fates | Trip log, fuel/asset/provider records and measured handoffs | trip/lot/harvester/boat ids; area/date; technique; time/distance/fuel blend and native quantity; provider coverage; asset life/service/maintenance; gross checkpoint mass; target-animal mass and deductions; T_capture_sort; intended non-target products; actual dead/returned/detached organisms/minerals and fate; pollution species/medium/factor; failed trips; stock/period ids | Weigh with calibrated scales and separated tare/mineral/non-target records; reconcile trip log to physical handoff, never use catch estimates alone. Retain actual fuel, asset and provider documents; observe ecological fates and keep unmeasured habitat effects as disclosed gaps. | kg; L; hours; actual native service/substance units | Every trip and handoff, including failures; each service/maintenance event | Complete declared reporting period and asset service periods | Berlengas capture area, supporting boat and landing | per 1 kg reference flow | calibration/tare sheets; location/technique proof; receipts/meters; provider scope; factor provenance; ecology/fate records; ownership ledger |
| `cp_sorting` | `sorting` | Received target animals, grades, incidental material and sorting support | Lot/grade/fate sheet and utility records | lot and T_capture_sort/T_sort_hold/T_sort_present; actual receipt and selected mass; every intended grade/destination/recipient; rejects and reason; mineral/non-target deduction; water/source/material/energy/service identity and native units; wastewater treatment receiver; pollutant identity/basis/medium; cleaning/changeover; time/period | Weigh every destination separately; reconcile received target and incidental material to selected products, other intended outputs, true waste, return and observed stock/loss terms. Meter actual support, inspect actual wastewater/fates; no assumed cleaning operation. | kg; kWh; actual native water/material/service/substance units | Each lot, grade split, cleaning and handoff | All sorting lots/events in declared period including rejected lots | Actual declared landing/sorting site | per 1 kg reference flow | scales/tare; transfer ids; grade/destination receipts; invoices/meters; waste/treatment records; stock reconciliation |
| `cp_holding` | `live_holding` | Live-state intervention and handoff | Holding lot/condition/utility/fate records | lot; T_sort_hold/T_hold_present; actual net mass/live condition before/after; start/end; actual method/condition; water source/native quantity/cooling/energy/space/service; asset/shared capacity-time; every intended alternate product/recipient; mortality/reject and destination; treatment transfers; direct release substance/carbon origin/medium/method; stock, failures and period | Observe live-state eligibility and weigh net lots at actual endpoints; record actual intervention and measured provision, only for activated interventions; absent intervention uses the separately recorded bypass. Separate live loss, free water and mortality from accepted mass; retain actual treatment and release methods. | kg; duration; kWh; actual native provision/service/substance units | Every holding interval, loss, provision and handoff | Complete declared period plus open-interval initial/final stock | Actual holding location/operator | per 1 kg reference flow | endpoint weights/condition records; meters; asset/service ledger; treatment receipts; methodology and uncertainty |
| `cp_presentation` | `presentation` | Container presentation and package ownership | Lot/package/cleaning/waste record | lot; T_hold_present/T_sort_present/T_present_deliver; actual incoming path; net animal mass; package material/native quantity/tare; single-use/reusable/recipient-owned; turn history and replacement; presentation equipment/support; water source/native quantity; direct release substance/carbon origin/medium/method; cleaning; every intended alternate product/recipient; package/animal rejects; treatment destination; time/period | Weigh animals separately from containers; inventory actual material and useful container turns, ownership and cleaning. Select exactly one actual incoming holding/bypass transfer. Record recipient-supplied containers and actual absence of other presentation inputs explicitly; retain package end-of-use responsibility. | kg; items; actual native utility/material/service units | Every presented lot, container turn and cleaning/replacement event | Complete reporting and container-service periods | Actual presentation location | per 1 kg reference flow | tare/item-mass evidence; issue/return records; material invoices; cleaning meters; waste receipts; asset ledger |
| `cp_delivery` | `delivery` | Pre-gate logistics, accepted reference and rejects | Delivery/receipt/weighing and provider/vehicle records | lot; T_present_deliver; route/vehicle/provider/distance/load/time; native fuel/energy/service/asset quantities; coverage ownership; receiving person/site/time; live/species/origin/whole-state evidence; gross/tare/free-water/mineral/non-target/reject deductions; accepted net mass; output grades/alternate destinations; pollutant species/carbon origin/medium/method; period/stock | Weigh accepted whole live animals on calibrated scales at first physical recipient in Peniche; retain itemized deductions, live condition and custody evidence. Reconcile invoice/checkpoint separately. Meter actual own duty or verify complete-service coverage, record rejected/alternate output fate and same-site transfer if actual. | kg; L; kWh; actual native service/substance units | Every delivery, physical receipt, rejection and own/provider duty | Complete declared reporting period and assigned asset service periods | Actual Peniche receipt and pre-gate route | per 1 kg reference flow | signed physical receipt, scale calibration/deductions, species/origin chain, trip/stock reconciliation, invoices/meters, provider scope, factor documentation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_reference_identity` | `accepted_live_barnacles` | The same-lot accepted net mass A divided by itself is 1 only where A is positive. This defines the output basis, never empirical catch yield. | cp_delivery | 1 kg accepted output per 1 kg reference flow | `accepted-net-mass-identity` |
| `instance_attribution` | all inventory rows | Preserve each actual native quantity, first apply the documented output/node/period ownership share, then divide by positive accepted net reference mass for that declared scope. Retain intermediate transfers at actual quantities; no rescaling to final mass. | cp_capture; cp_sorting; cp_holding; cp_presentation; cp_delivery | Attributed native instance quantities per 1 kg reference flow | |
| `balance_and_factors` | all processes | Reconcile initial stock plus receipts against all intended outputs, true waste, documented actual ecological/other fates, final stock and explicitly measured or unresolved mass change. Apply only disclosed composition/equipment-specific factors to actual duty; preserve uncertainty, fossil/biogenic carbon and chemical/medium basis. | cp_capture; cp_sorting; cp_holding; cp_presentation; cp_delivery | Lot balance and separately supported actual release quantities | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_eligibility` | reference and every lot | Actual scientific species, Berlengas rocky-intertidal origin, manual arrilhada route, live whole state and first Peniche physical recipient are demonstrated. Historical route/trader information alone is insufficient. | Species/origin chain; trip observations; live condition and signed receipt |
| `dq_measurement` | all nodes | Retain calibrated weights, native units, deductions, conversion evidence, transfer ids and uncertainty. No edible mass or checkpoint gross denominator. | Scales, raw records and pairwise handoffs |
| `dq_completeness` | reporting/asset periods | Cover unsuccessful trips, all intended outputs, mortality and actual fate, beginning/end stocks, shared nodes/periods, service inclusions and replaced/retired assets. | Period ledger with one physical-event owner and unexplained balance terms |
| `dq_ranges` | every instance | Independently evidence each U before numerical screening; retain unresolved status when absent. Never validate a lot with its own maximum or transfer a common cap between dissimilar outputs/services. | Independent reference evidence, composition/native-unit checks and uncertainty |
| `dq_identity` | final dataset exchanges | Verify each actual concrete exchange's UUID, property and unit before downstream TIDAS binding; umbrellas and unresolved candidate identities do not constitute final exchanges. | Actual exchange verification and support details |
| `collect_capture_fuel` | `capture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual capture boat fuel by fuel and blend. Actual zero, one or several fuel/blend instances for transit, waiting and return; distinguish the actual fossil and biogenic fractions. Manual scraping does not remove powered vessel duty. <br> - Flow property / unit: Actual fuel property / kg or L <br> - Amount rule: Attributable measured fuel for capture duty; cp_capture <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Provisional fuel-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_fuel_instance <br> - Unit: kg or L of that fuel instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_assets` | `capture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual capture asset and maintenance service instances. Each actual boat, metal arrilhada, protective equipment and maintenance/replacement instance retains its own service denominator. Include attributable upstream asset provision; human food/metabolism is not automatically industrial fuel. <br> - Flow property / unit: Actual asset service property / native service unit <br> - Amount rule: Attributable equipment service and maintenance from cp_capture; exclude components included in a complete purchased duty <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Technology-specific (`technology_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Sources: `dgrm-arrilhada` <br> - Range: Provisional asset-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_asset_instance <br> - Unit: native service unit of that asset instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_service` | `capture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual complete purchased capture-support service. Only when an external provider supplies an actual bounded boat/access duty. Record included fuel, assets, direct releases and return duty before excluding corresponding owned components. <br> - Flow property / unit: Actual service property / native service unit <br> - Amount rule: Provider's attributable service quantity and coverage in cp_capture <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Provisional purchased-duty evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_service_instance <br> - Unit: native service unit of that provider duty <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_other_products` | `capture`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual intended non-target capture product instances. Only actual separately intended retained output instances, by species, state and recipient. Incidental collection alone does not make a co-product; target grades routed through sorting are not counted here again. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual intended product handoff mass and destination from cp_capture <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Product-specific (`product_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Provisional co-output-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_other_product_instance <br> - Unit: kg of that output instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_waste` | `capture`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual capture waste by composition and receiver. Only actual material handed to a waste receiver: spent gear, retained dead animals or contaminated materials by composition and treatment. Detached rock, returned live juveniles and habitat disturbance are not automatically waste transfers; record their actual fates in cp_capture. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual waste handoff quantity and treatment record from cp_capture <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Provisional waste-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_waste_instance <br> - Unit: kg of that waste instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_other_releases` | `capture`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual capture substance and receiving-medium instances. Resolve each actual combustion pollutant or spill by chemical identity, reporting basis/particle size and receiving air/water/soil medium. Generic CO2 with unknown carbon origin cannot use a fossil-only identity. Biological removal and habitat disturbance are separate observations unless a defensible method defines concrete elementary exchanges. <br> - Flow property / unit: Substance mass / kg of actual substance <br> - Amount rule: Actual measured release or documented equipment/fuel-specific factor calculation with uncertainty and ownership in cp_capture <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Technology-specific (`technology_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_capture` <br> - Range: Provisional substance-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_release_instance <br> - Unit: kg of that substance in that medium <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_support` | `sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting material and service instances. Zero, one or several water, cleaning/disaggregation material, equipment or complete sorting-service instances. Identify supplied versus directly abstracted water and source; any actual elementary abstraction must have its own verified identity. No wash is presumed. <br> - Flow property / unit: Actual instance property / kg, L or native service unit <br> - Amount rule: Actual attributable sorting support excluding complete-service components counted elsewhere; cp_sorting <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional support-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_support_instance <br> - Unit: native unit of that support instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_water_abstraction` | `sorting`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual directly abstracted sorting water by source compartment. Only actual direct abstraction from an identified environmental source, distinct from supplied technosphere water. No cleaning or abstraction is presumed. The resource, source compartment and actual native amount must be evidenced before binding. <br> - Flow property / unit: Actual water-resource property / kg or m3 <br> - Amount rule: Actual attributable direct abstraction measured in cp_sorting <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional sorting-resource-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_abstraction_instance <br> - Unit: kg or m3 of that source-water instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_other_products` | `sorting`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternate intended sorted product instances. Enumerate each actual separately sold grade/downgrade or other intended output and physical handoff. A lower-priced sale remains an intended product; rejected/unmarketed material is classified from its real fate. Do not report target grades already included in the selected lot twice. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual mass, species, state, grade and recipient per intended output in cp_sorting <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Product-specific (`product_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional grade-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_product_instance <br> - Unit: kg of that grade/destination instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_waste` | `sorting`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorted waste by composition and treatment destination. True disposal/treatment transfers, separated by dead/rejected animals, mineral material, non-target material and packaging as actually received. Returned organisms or mineral material have documented destination and environmental treatment; they are not automatically assigned a waste or elementary-flow UUID. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual waste transfer quantity and receiver evidence in cp_sorting <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional sorting-waste-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_waste_instance <br> - Unit: kg of that waste instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_direct_flows` | `sorting`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting released substance and receiving-medium instances. Expand only actual measured/modelled release instances with concrete substance identity, property and receiving medium. Retain water-balance observations separately from pollutant quantities and treatment transfers; abstraction is an input in collect_sorting_water_abstraction. <br> - Flow property / unit: Actual released-substance property / native unit <br> - Amount rule: Actual release with receiving medium and measurement/factor basis from cp_sorting <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sorting` <br> - Range: Provisional direct-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_direct_instance <br> - Unit: native unit of that released substance in that medium <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_support` | `live_holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual live-holding material and service instances. Actual zero, one or several holding-space/asset, water, cooling medium or complete preservation-service instances with actual condition and interval. No prescribed immersion, ice, depuration or safe temperature/shelf-life is supplied. Exclude operation components covered by a complete service. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Actual attributable material/asset/service provision from cp_holding <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Technology-specific (`technology_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-support-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_support_instance <br> - Unit: native unit of that provision instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_water_abstraction` | `live_holding`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual directly abstracted holding water by source compartment. Only actual directly abstracted water, identified by environmental source compartment; distinguish supplied water and actual holding method. No immersion is prescribed. <br> - Flow property / unit: Actual water-resource property / kg or m3 <br> - Amount rule: Actual attributable direct abstraction measured in cp_holding <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-resource-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_abstraction_instance <br> - Unit: kg or m3 of that source-water instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_other_products` | `live_holding`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternate intended holding output instances. Only actual alternative sale/destination instances identified at this node, each with species/state, grade and first physical recipient. Do not duplicate grades already delivered through the main live-lot handoff or sorting's separate outputs. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual alternate product net mass and handoff from cp_holding <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Product-specific (`product_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-co-output-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_other_product_instance <br> - Unit: kg of that intended output instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_waste` | `live_holding`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual holding waste by composition and treatment receiver. Separate each actual dead/rejected animal, spent holding material and wastewater-to-treatment instance. Alternate intended sale output requires its own product identity and attribution; no discarded live lot is silently treated as accepted product. <br> - Flow property / unit: Actual waste property / kg or m3 <br> - Amount rule: Actual waste transfer and receiver quantity from cp_holding <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-waste-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_waste_instance <br> - Unit: native unit of that waste instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_direct_flows` | `live_holding`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual holding released substance and receiving-medium instances. Resolve actual refrigerant loss, fuel-combustion fossil/biogenic carbon and other substance releases separately where present. Document substance, carbon origin, mass basis and receiving medium; a carrier-water observation is not a pollutant exchange. Direct abstraction belongs to the input card collect_holding_water_abstraction. <br> - Flow property / unit: Actual released-substance property / native unit <br> - Amount rule: Actual quantity with observed equipment/medium and verified method from cp_holding <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Technology-specific (`technology_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_holding` <br> - Range: Provisional holding-direct-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_direct_instance <br> - Unit: native unit of that released-substance instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_materials` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual presentation material and reusable container instances. Each actual bag, crate, liner, label or other protective material has its own material, new/reused/recipient-owned status, native quantity and useful-turn record. Tare never enters animal reference mass. Use allocated reusable provision and actual cleaning/replacement, not a new container per turn by default. <br> - Flow property / unit: Actual material/service property / kg, items or native service unit <br> - Amount rule: Actual attributable presentation material or container service in cp_presentation <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Product-specific (`product_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional package-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_material_instance <br> - Unit: native unit of that package/service instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_support` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual presentation operation support instances. Actual equipment, electricity, water/cleaning or complete packaging service, when used. This card does not include distribution. For direct water abstraction or direct emissions use concrete elementary exchanges with actual identity/medium, retaining separate water balance and treatment receipts. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Actual attributable operation quantity excluding included complete-service components; cp_presentation <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-support-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_support_instance <br> - Unit: native unit of that support instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_water_abstraction` | `presentation`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual directly abstracted presentation water by source compartment. Only actual directly abstracted water used for presentation/cleaning, with identified environmental source compartment and actual quantity. Supplied water remains a technosphere support input; no cleaning is presumed. <br> - Flow property / unit: Actual water-resource property / kg or m3 <br> - Amount rule: Actual attributable direct abstraction measured in cp_presentation <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-resource-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_abstraction_instance <br> - Unit: kg or m3 of that source-water instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_other_products` | `presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternate intended presentation output instances. Actual independently intended products diverted at this node, separately identified by species/state, grade and physical recipient. The main presented lot and other nodes' separate sales are not duplicated. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual alternate product net mass and handoff from cp_presentation <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Product-specific (`product_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-co-output-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_other_product_instance <br> - Unit: kg of that intended output instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_waste` | `presentation`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual presentation waste by composition and treatment receiver. Actual damaged packaging, discarded animals, cleaning residues and wastewater to treatment, each separated by receiver and composition. Reusable container handoff remains a service/ownership record; a recoverable material is not credited without an explicit reviewed treatment model. <br> - Flow property / unit: Actual waste property / kg or m3 <br> - Amount rule: Actual waste/treatment transfer quantity from cp_presentation <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-waste-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_waste_instance <br> - Unit: native unit of that waste instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_direct_flows` | `presentation`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual presentation released substance and receiving-medium instances. Only actual equipment/cleaning releases, separately identified by substance, chemical reporting basis and receiving medium. Include actual fossil and biogenic combustion fractions where applicable; a provider's already included releases and carrier-water observations are not repeated as emissions. Direct abstraction belongs to the input card collect_presentation_water_abstraction. <br> - Flow property / unit: Actual released-substance property / native unit <br> - Amount rule: Actual quantity and documented equipment/composition-specific method in cp_presentation <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional presentation-direct-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_direct_instance <br> - Unit: native unit of that released-substance instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_service` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual complete pre-gate delivery service. Only actual pre-gate handling/transport provider duties; record provider scope, distance/load, actual vehicle or handling mode, waiting and return coverage. Receipt at the same site can be an observed zero-distance transfer. <br> - Flow property / unit: Actual service property / native service unit <br> - Amount rule: Attributable purchased duty from cp_delivery, excluding repeated included fuel/assets/direct releases <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Provisional delivery-service-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_service_instance <br> - Unit: native service unit of that duty <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_energy` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual owned delivery fuel and electricity instances. Actual fuel/blend or electricity instances for owned post-landing delivery/handling only; vessel return already belongs to capture. Keep energy carriers distinct by native property and quantity. <br> - Flow property / unit: Actual energy-carrier property / kg, L or kWh <br> - Amount rule: Actual attributable delivery energy in cp_delivery; exclude complete-service coverage <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Route-specific (`route_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Provisional delivery-energy-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_energy_instance <br> - Unit: native unit of that energy-carrier instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_assets` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual vehicle and handling-equipment service instances. Each actual vehicle or handling asset has its own service quantity, useful period and ownership share; components already inside purchased delivery service are excluded. <br> - Flow property / unit: Actual asset-service property / native service unit <br> - Amount rule: Attributable provision/maintenance from cp_delivery with shared-period ownership, excluding purchased-duty included assets <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Technology-specific (`technology_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Provisional delivery-asset-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_asset_instance <br> - Unit: native service unit of that asset instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_other_products` | `delivery`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternate intended delivery output instances. Actual pre-reference-gate diversions to separately intended output/recipient, with their own state, grade and first physical handoff. Do not add a second output for a rejection without evidence of intended use, or repeat the accepted reference or prior nodes' outputs. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual alternate product net mass and handoff from cp_delivery <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Product-specific (`product_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Provisional delivery-co-output-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_other_product_instance <br> - Unit: kg of that intended output instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_waste` | `delivery`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pre-acceptance waste by composition and receiver. Separate dead/unaccepted animals and damaged materials sent to real treatment/disposal; alternative intended sales retain distinct product, gate and attribution. Post-recipient waste is outside this foreground boundary, while package handoff and downstream responsibility are disclosed. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual pre-gate waste transfer quantity and receiver in cp_delivery <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Range: Provisional delivery-waste-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_waste_instance <br> - Unit: kg of that waste instance <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_other_releases` | `delivery`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual delivery substance and receiving-medium instances. Actual pollutant/spill/refrigerant instances require chemical identity, particle/reporting basis and receiving medium before binding. A complete provider duty already containing these releases is not repeated. <br> - Flow property / unit: Substance mass / kg of actual substance <br> - Amount rule: Actual measured or documented equipment/fuel-specific factor quantity and uncertainty in cp_delivery <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Technology-specific (`technology_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_delivery` <br> - Range: Provisional delivery-substance-instance evidence need <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_release_instance <br> - Unit: kg of that substance in that medium <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_eligibility` | reference flow | Require actual eligibility, whole live net mass and physical receipt qualifiers. Reject wrong species/route, cooked/frozen/de-shelled output or unsupported gate substitution. | |
| `validation_transfers` | all internal transfers | Pair T_capture_sort and T_present_deliver by actual lot mass and time. With evidenced holding intervention pair T_sort_hold and T_hold_present; otherwise pair the direct T_sort_present bypass, never both paths for the same material. Unknown intervention state remains incomplete. Investigate discrepancies, stock/mass changes and deductions; do not force internal feed to 1 kg. | |
| `validation_outputs` | output set and fates | Every intended grade/product has an explicit handoff and attribution; every true waste/treatment/direct release has actual destination or receiving medium. Disclose organisms returned, substrate disturbance and unresolved ecology without invented credits/exchanges. | |
| `validation_periods` | capture, holding and shared assets | Include failed duties, changes/cleaning, open stocks and asset replacement/termination in declared periods; require one owner for each trip/service/asset burden across nodes and periods. | |
| `validation_services` | complete provider duties | Reconcile provider coverage against own fuel/assets/releases/treatment and package return duty so no component or intended output is counted twice. | |
| `validation_uncertainty` | quantities and identities | Unquantified U, absent factors, unknown carbon split or unverified concrete UUID remains a data gap. A range/checker pass does not establish actual data completeness, legal compliance, safety or sustainability. | |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dataset; after evidence review may support secondary_dataset and background_dataset use |
| downstream_use | process or lifecyclemodel projection for the same whole live reference at the declared first Peniche recipient |
| allowed_use | Declared matching wild Berlengas manual-scraping route with actual reporting period, physical receipt and transparent attributed upstream supplies |
| excluded_use | Other species/origins/routes, cultivation, edible-only conversion, processed/frozen products, post-recipient retail, safety/legal/stock status claims or unresolved cards as final TIDAS exchanges |
| required_metadata | Species/origin/technique; route and nodes; trip/lot/period; net-mass deductions; grade/live state; physical recipient; actual holding/presentation; assets/services and ownership; all intended outputs and fates |
| required_quality_disclosure | Record coverage, weighing/conversion uncertainty, failed duty and stock balance, attribution rationale/sensitivity, ecological limitations, provisional range evidence and exchange-identity gaps |
| update_trigger | Actual species/origin/route/gate or condition change; revised measured duty/grade/stock records; asset/service scope change; improved ecological, range or identity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `jacinto-berlengas-2010` | literature | Jacinto D., Cruz T., Silva T., Castro J.J. 2010. Stalked barnacle (Pollicipes pollicipes) harvesting in the Berlengas Nature Reserve, Portugal: temporal variation and validation of logbook data. ICES Journal of Marine Science 67:19–25. https://doi.org/10.1093/icesjms/fsp226 | Qualitative Berlengas boat/landing context and need to distinguish reported from measured catch; no catch/effort/default sustainability quantities adopted |
| `dgrm-arrilhada` | official_guidance | DGRM, species/utensil table https://www.dgrm.pt/documents/20143/121101/C%C3%B3pia%2Bde%2Bapanha%2B-%2Bespecies%2Be%2Butensilios_Revisto%2Bv4.pdf/778ef739-eb46-52a0-4c1a-0025d7262856 and utensil descriptions https://www.dgrm.pt/web/guest/artes-e-utensilios-de-pesca | Pollicipes pollicipes/arrilhada association and metal hand-scraper description only; no commercial/legal limits inferred from recreational context |
| `portaria-berlengas-2025` | official_guidance | Portaria 85/2025/1, 5 March 2025, articles 2 and 4. https://diariodarepublica.pt/dr/detalhe/portaria/85-2025-909595555 | Distinction between gross checkpoint capture recording in Peniche and sale/receipt evidence; no numerical legal limit or compliance conclusion adopted |
| `conchamar-live-channel` | literature | Conchamar, Medium Live Percebes product page. https://loja.conchamar.pt/en/products/percebes-vivos-medio-pollicipes-cornucopie-1kg | Existence of a Portuguese live sale channel only; seller title is not taxonomy authority or Berlengas/foreground origin proof |
| `ec-pollicipes-identity` | official_guidance | European Commission commercial designations, Pollicipes pollicipes. https://fish-commercial-names.ec.europa.eu/fish-names/species/pollicipes-pollicipes_en | Accepted scientific name and crustacean identity context; not a foreground origin or gate record |
| `accepted-net-mass-identity` | method_factor | Same-positive-accepted-net-mass numerator and denominator identity, A/A = 1 | Reference-output normalization only; not yield, catch or empirical range evidence |
