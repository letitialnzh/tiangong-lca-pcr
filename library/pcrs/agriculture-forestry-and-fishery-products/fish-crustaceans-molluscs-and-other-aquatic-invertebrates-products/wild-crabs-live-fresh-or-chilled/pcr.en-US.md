---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-crabs-live-fresh-or-chilled
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Whole wild food crabs in shell at first producer handover

## 1. Scope and Applicability

This PCR covers wild-captured whole food crabs in native shell at one actual first producer/collector handover, with the lot declared live, fresh or nonfrozen chilled. The body retains its carapace and actual appendage condition: a missing limb does not imply an invented intact weight. Food eligibility, shell/molt state and body condition follow actual buyer and applicable jurisdiction evidence, not a species-independent minimum. The net wet whole-crab reference is neither edible meat nor a live/fresh conversion. Direct wild marine and inland capture are allowed only with their actual habitat and gear context declared.

Exclude detached legs/claws or meat, cooked/frozen/preserved product, ornamental or seed/stocking output, aquaculture, deliberate fattening, managed grow-out and induced-molt production. Bounded maintenance holding is included only without a production-growth purpose. A supplier purchase of already-marketed whole crabs cannot restart the first-producer boundary. CPC 04311 includes a wider in-shell/not-in-shell category; this methodology deliberately covers only the stated whole first-gate scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-crabs-live-fresh-or-chilled |
| classification_refs | cpc:3.0:04311 (narrower) |
| covered_products | Wild whole food crabs in native shell; actual live/fresh/chilled state at first producer gate |
| excluded_products | Detached parts/meat, cooked/frozen/processed, nonfood ornamental/seed, aquaculture/grow-out/fattening/induced molt and later merchant gates |
| representative_product | A state-qualified whole wild crab food lot with recorded actual appendage and shell condition; no default species or intact-limb reconstruction |
| production_route | capture -> actual live_hold/fresh_chill before grading if needed -> grading -> actual post-grade maintenance/chilling if needed -> presentation; each operation event has one position, state and owner; capture is the gear-delta parent |
| market_state | One actual species/state/grade/gate per lot, whole in shell, food eligible, not frozen; bulk or packaged without package mass in reference |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole wild food crabs in shell at first producer handover, actual live/fresh/chilled state declared |
| How much | 1 kg wet net whole-crab mass |
| How well | Actual whole body/carapace in native shell and appendage condition; declared species, shell/molt grade, viability/life state, temperature state and documented food acceptance; exclude extraneous water, ice and packaging |
| How long or cycle | Declared capture trips/deployments, actual pre-gate holding/handling batches and first handover dates within one reporting period; retain opening/closing stock and prior/later asset service periods |
| reference_flow_link | `crabs_first_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole wild food crabs in shell at first producer handover, actual live/fresh/chilled state declared |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/taxon; wild origin; actual marine/inland waterbody and capture area; capture and handover dates; gear method and effort; shell/molt and food grade; actual body/appendage condition; live/fresh/chilled life-temperature state; food acceptance evidence; net wet mass and tare method; first gate ownership/location; actual holding/chilling activation; reporting/stock periods |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh qualifying whole crabs on a calibrated scale after separating extraneous water/ice and taring all containers, ties and packaging. Retain native shell/body fluids and actual appendages. No assumed edible yield, count-to-mass or missing-limb factor. Use cp_presentation; final output is 1 kg. |
| `energy_metering` | actual purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Record metered kWh or MJ at the actual supply boundary; kWh to MJ uses 3.6. Fuel litres require measured supplier density at its stated condition, never a default. Gas volumes require verified pressure/temperature/purity conversion before any mass exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild crabs and incidental taxa in the declared natural waterbody before actual capture; no owned rearing/growth stage |
| starting_condition_role | Natural capture context, not a purchased zero-burden food crab |
| product_classification_scope | Whole wild in-shell food crabs only; narrower than CPC 3.0 04311 |
| recursive_input_rule | A same-category crab purchased as bait is a separately identified supplier input with prior capture burden and non-reference use, not recursive generation of this food output; already-marketed crabs for resale are outside the first-producer reference route |
| upstream_dataset_requirement | Require compatible upstream bait/feed, fuel/electricity, gear/asset, packaging, water/gas and treatment datasets or measured supplier packages at actual gate/state; unresolved inputs retain gaps, never zero burden |
| disclosure | Declare producer/operating unit, habitat/species/gear, actual node ownership/activation, first gate, time/stock boundaries, bycatch and releases, all intended outputs and attribution; no federated multisite average |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_capture` | all nodes | Start at wild resource removal, including attributable preparation, fuel supply, bait, gear and capital service; end at the actual first producer/collector handover. Owned handling and transport before that point are included wherever they occur. Already-purchased whole crabs that have passed a producer gate, retail/merchant holding, grow-out, fattening and induced molt are excluded reference routes. | `wild-crab-foreground-method` |
| `boundary_states` | grading; live_hold; fresh_chill; presentation | Actual onboard holding or chilling may precede grading. Record operation stage as pre_sort or post_sort; capture retained catch can go through live_hold/fresh_chill before grading, while only graded, food-accepted terminal lots enter presentation. Each holding/chilling event has one time/stage and appears once, even when the same node performs distinct pre-sort and post-sort events. Grading -> actual live_hold and/or fresh_chill -> presentation is not a compulsory chain. Bypass preserves the actual state and transfer record. Live cooling can coexist with prior live maintenance; dead fresh lots never enter live holding. At every loss or death event classify disposition and lawful food acceptance anew, never infer an inactive state or fresh recovery from missing information. | `wild-crab-foreground-method` |
| `boundary_gear` | capture | capture is the technology parent. Trap/pot deployment, bait, rope/buoy, soak and retrieval differ from line, dip-net or scrape effort, inventory and habitat-contact evidence. One deployment has one actual gear method; distinct methods may coexist in a trip only as separately indexed effort/catch records. Current operator and gear evidence, not a route label, establishes deltas. | `wild-crab-foreground-method` |
| `boundary_water` | live_hold; fresh_chill; presentation | Keep purchased water, direct withdrawal, internal circulation, evaporation, stock change, collected effluent and direct returns distinct. Dissolved pollutant mass and water carrier mass are not duplicate exchanges; keep direct substances separate by actual chemical basis and compartment. Cleaning is not assumed depuration or food-safety certification. | `wild-crab-foreground-method` |
| `boundary_shared` | capture; grading; live_hold; fresh_chill; presentation | Index the shared vessel/deck, tanks, dock cold room, ice maker and returnable containers by actual consuming nodes and service periods. One asset or operated service event has one burden owner and a complete allocation ledger. Meter own auxiliary power/ice inside its owner node; do not add purchased power/ice for the same own output or duplicate downstream service fuel. | `wild-crab-foreground-method` |
| `boundary_secondary_bait` | capture | Processing-by-product bait is secondary material from a prior product system, not a free wild resource. Identify the actual prior product, separation/recovery handoff, preservation/transport and present baiting gate from supplier evidence. The experimental literature supports route existence only, not the current lot composition/performance. This conditional interface is inactive where no such input occurs. | `cerbule-secondary-bait-2023`; `wild-crab-foreground-method` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Wild crab capture and retrieval | required | All included lots | Remove wild catch from the declared waterbody; retained catch goes to actual pre-sort preservation or grading | per 1 kg reference flow; retain measured node output |
| `grading` | Whole-catch sorting and destination grading | required | All retained catch is assigned an actual grade or destination | Separate qualifying whole food crabs, other intended landings, live releases and rejects | per 1 kg reference flow; retain measured node output |
| `live_hold` | Bounded live maintenance before first handover | conditional | Actual live crabs receive owned pre-gate maintenance; pre_sort retains pending grading and post_sort retains actual acceptance; no grow-out, fattening or induced molt | Maintain live state and explicitly separate survivors, eligible fresh diversion and mortality | per 1 kg reference flow; retain measured node output |
| `fresh_chill` | Fresh-food handling and nonfreezing chilling | conditional | Actual owned pre-gate fresh handling, intentional state change or nonfreezing chilling occurs for an eligible whole-food lot | Record actual live/fresh/chilled before-and-after states without freezing, cooking or meat separation | per 1 kg reference flow; retain measured node output |
| `presentation` | Producer presentation and first handover | required | All final reference lots, packaged or bulk | Present the selected actual whole-food state at one first producer/collector gate | per 1 kg reference flow; retain measured node output |

### Process: Wild crab capture and retrieval (`capture`)

Capture owns trip preparation, outward and return movement before the first gate, deployment, soak, hauling and retrieval. It is a harvest responsibility, not managed growth or a separate raw-material conditioning service. Gear dispatch logs identify pot/trap, trotline/handline, dip-net/scrape or another evidenced method. Pot effort includes deployed and retrieved units, bait charges, soak duration, strings/vertical lines/buoys, escapes and loss. Other gear requires its own effort and bottom-contact records; do not apply a pot count or bait assumption to nets or scraping. Capture may deliver live or already-dead food-eligible whole crabs; declare the actual state and handling time. Neither landed biomass nor gear-loss mass alone measures ecosystem damage.

#### Inputs

##### Product flows

###### CN grid-average AC below 1 kV delivered to user (`capture_cn_electricity`)

Only matching actual CN low-voltage supply; meter electricity attributable to this node. Inapplicable outside this exact geography/voltage/mix. Convert metered kWh to MJ using 3.6; no addition of own-generated electricity and its fuel as two purchased burdens.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average AC below 1 kV delivered to user `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_capture`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_capture_cn_electricity

  - Unit: MJ

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Other actual purchased electricity at declared supply boundary (`capture_other_electricity`)

Use only for purchased electricity not matching the CN fixed card, disaggregated by actual geography, voltage and provider/mix; not a substitute for onboard own generation. Supplier evidence is required.

- Selected flow: Other actual purchased electricity at declared supply boundary

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_capture`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_capture_other_electricity

  - Unit: MJ

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Actual supplied water for capture-gear and deck sanitation (`capture_cleaning_water`)

Only actual owned gear/deck sanitation water; record treatment, supplier and stock change, not water retained in crabs or a mandatory catch-washing step. If directly abstracted rather than supplied, instantiate a separate elementary withdrawal under its actual source and confirm that identity.

- Selected flow: Actual supplied water for capture-gear and deck sanitation

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_capture`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_capture_cleaning_water

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separately measured liquid water (`capture_internal_water_ice_transfer_water`)

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

###### Separately measured solid water ice (`capture_internal_water_ice_transfer_ice`)

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



###### Unsorted retained wild catch at grading intake (`capture_retained_catch`)

Link every retained target and incidental taxon to its actual next node using species/state, time, wet mass and transfer id. Target whole-crab portions may receive pre-sort live_hold or fresh_chill before grading; incidental non-crab material is separately routed to grading or its actual disposition. Do not call all retained catch qualifying final crab mass. Bait caught independently is separately identified, not duplicated here and as a reference product.

- Selected flow: Unsorted retained wild catch at grading intake

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_capture`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_capture_retained_catch

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to unspecified air (`capture_fossil_co2`)

Only actual owned fossil combustion with this receiving compartment. Derive mass from separately evidenced fuel composition and oxidation/emission method or measured releases, not from this identity or a universal factor. Exclude purchased electricity/service upstream emissions.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_capture`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_capture_fossil_co2

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Actual direct deck/gear cleaning water return (`capture_direct_washwater`)

Record actual carrier water mass and receiving compartment only here; record material direct substances separately in capture_dissolved_cleaning_releases. Exclude water/substances already collected as operating waste; neither absent concentration measurements nor unknown discharge is zero.

- Selected flow: Actual direct deck/gear cleaning water return

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_capture`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_capture_direct_washwater

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

### Process: Whole-catch sorting and destination grading (`grading`)

Match incoming unsorted catch to capture and actual pre_sort holding/chilling transfer ids, without duplicating its predecessor transfer. Enumerate species, shell/molt state, sex where relevant, body/appendage condition and each actual food grade. A missing limb is not reconstructed by a conversion factor: weigh the actual qualifying whole body, and retain the buyer or authority acceptance record. An undersize or prohibited animal is not automatically a downgraded food product. Each intended other-species landing or non-reference grade has an independent handoff and allocation status. Live releases return to the declared environment; dead discards and retained wastes follow their actual separate destinations. Detached legs/claws are outside the reference category, even if sold.

#### Inputs

##### Product flows

###### Separately measured liquid water (`grading_internal_water_ice_receipt_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`

###### Separately measured solid water ice (`grading_internal_water_ice_receipt_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`



###### CN grid-average AC below 1 kV delivered to user (`grading_cn_electricity`)

Only matching actual CN low-voltage supply; meter electricity attributable to this node. Inapplicable outside this exact geography/voltage/mix. Convert metered kWh to MJ using 3.6; no addition of own-generated electricity and its fuel as two purchased burdens.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average AC below 1 kV delivered to user `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_grading`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_grading_cn_electricity

  - Unit: MJ

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Other actual purchased electricity at declared supply boundary (`grading_other_electricity`)

Use only for purchased electricity not matching the CN fixed card, disaggregated by actual geography, voltage and provider/mix; not a substitute for onboard own generation. Supplier evidence is required.

- Selected flow: Other actual purchased electricity at declared supply boundary

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_grading`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_grading_other_electricity

  - Unit: MJ

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Unsorted retained wild catch received from capture (`grading_catch`)

Receive actual capture_retained_catch and/or pre_sort hold_live_survivors, hold_eligible_fresh or chill_accepted_food, each paired by transfer id and taxa/state-specific mass. Preserve the complete prior handling burden and measured losses; do not count both capture catch and its preserved successor as two grading inputs. Internal transfer has no second upstream purchase.

- Selected flow: Unsorted retained wild catch received from capture

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_grading`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_grading_catch

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Actual supplied water for grading-equipment sanitation (`grading_cleaning_water`)

Only actual owned equipment sanitation, not an invented product-washing or conditioning route. Identify source, treatment, supplier and mass; direct abstraction instead requires a separate actual elementary source withdrawal.

- Selected flow: Actual supplied water for grading-equipment sanitation

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_grading`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_grading_cleaning_water

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separately measured liquid water (`grading_internal_water_ice_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`

###### Separately measured solid water ice (`grading_internal_water_ice_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`



###### Accepted live whole food crabs at grading exit (`grading_live_food`)

Actual native-shell whole body and appendage condition, food grade and live viability; hand off to actual live_hold, fresh_chill or presentation. Keep mutually exclusive destinations by transfer and do not count this intermediate as a second final reference.

- Selected flow: Accepted live whole food crabs at grading exit

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_grading`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_grading_live_food

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Accepted already-dead fresh or chilled whole food crabs at grading exit (`grading_fresh_food`)

Only separately documented eligible food catch in actual fresh/chilled state; record death/handling history and acceptance evidence, not a default conversion from unknown live mortality. Hand off to actual fresh_chill or directly presentation.

- Selected flow: Accepted already-dead fresh or chilled whole food crabs at grading exit

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_grading`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_grading_fresh_food

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to unspecified air (`grading_fossil_co2`)

Only actual owned fossil combustion with this receiving compartment. Derive mass from separately evidenced fuel composition and oxidation/emission method or measured releases, not from this identity or a universal factor. Exclude purchased electricity/service upstream emissions.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_grading`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_grading_fossil_co2

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Actual direct grading-equipment cleaning water return (`grading_direct_washwater`)

Identify actual carrier water only here and chemical releases separately in grading_dissolved_cleaning_releases; reconcile cleaning intake, collected waste, retention and evaporation. Exclude the same quantities from operating waste and never treat water mass as chemical mass.

- Selected flow: Actual direct grading-equipment cleaning water return

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_grading`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_grading_direct_washwater

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

### Process: Bounded live maintenance before first handover (`live_hold`)

Activate only from time-stamped ownership and intervention records. Quantify incoming live mass, tank or dry-hold method, duration, temperature and actual survival; no universal time, oxygen dose, density or salinity is prescribed. Feeding solely for bounded maintenance remains an actual input and loss source; a growth/fattening/molt-production aim is excluded. Survivors retain live state; pre_sort survivors must go to grading, directly or through recorded pre_sort chilling; post_sort accepted survivors may go to presentation or actual post_sort fresh/chill. Death is never a live yield: an independently documented, legally accepted fresh-food diversion follows its pre_sort/post_sort route with a new state record and cannot skip pending grading; otherwise classify mortality as waste. Unknown viability is a data gap, not survival. When inactive, the actual capture or grading live output bypasses to its next recorded node, preserving pending-grade status where applicable; no fictitious hold input, utility or survival yield.

#### Inputs

##### Product flows

###### Separately measured liquid water (`live_hold_internal_water_ice_receipt_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_hold`

###### Separately measured solid water ice (`live_hold_internal_water_ice_receipt_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_hold`



###### CN grid-average AC below 1 kV delivered to user (`live_hold_cn_electricity`)

Only matching actual CN low-voltage supply; meter electricity attributable to this node. Inapplicable outside this exact geography/voltage/mix. Convert metered kWh to MJ using 3.6; no addition of own-generated electricity and its fuel as two purchased burdens.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average AC below 1 kV delivered to user `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_live_hold`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_live_hold_cn_electricity

  - Unit: MJ

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Other actual purchased electricity at declared supply boundary (`live_hold_other_electricity`)

Use only for purchased electricity not matching the CN fixed card, disaggregated by actual geography, voltage and provider/mix; not a substitute for onboard own generation. Supplier evidence is required.

- Selected flow: Other actual purchased electricity at declared supply boundary

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_live_hold`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_live_hold_other_electricity

  - Unit: MJ

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Live whole wild crabs at bounded maintenance intake, sorting status declared (`hold_live_crabs`)

Measure actual live whole-crab transfer from capture or an actually still-live pre_sort chill_accepted_food before grading, or grading_live_food or an actually still-live post_sort chill_accepted_food afterward, with transfer id, pre_sort/post_sort stage, arrival time, condition and wet mass. Before sorting, retain pending grade status and route all survivors/diversions to grading before the final gate; no dead/fresh lot enters a live-survival denominator.

- Selected flow: Live whole wild crabs at bounded maintenance intake, sorting status declared

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_live_hold`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_hold_live_crabs

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Actual externally supplied holding water (`hold_water_supplied`)

Disaggregate supplied freshwater, treated process water or supplied seawater by actual treatment, salinity and provider; incompatible identities are not interchanged. Do not purchase the same volume withdrawn directly in hold_water_abstracted.

- Selected flow: Actual externally supplied holding water

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_live_hold`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_hold_water_supplied

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separately measured liquid water (`live_hold_internal_water_ice_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_hold`

###### Separately measured solid water ice (`live_hold_internal_water_ice_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_hold`



###### Live whole wild crabs surviving bounded maintenance, sorting status declared (`hold_live_survivors`)

Measure live survivors retaining actual shell/appendage condition. A pre_sort output goes to grading, directly or through an actual pre_sort fresh_chill event; only a post_sort food-accepted output may go to presentation or a recorded post_sort fresh_chill event. Exclude mortality, carried stock and any growth/molt-production lot.

- Selected flow: Live whole wild crabs surviving bounded maintenance, sorting status declared

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_live_hold`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_hold_live_survivors

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Separately accepted fresh-food whole crabs diverted from live maintenance (`hold_eligible_fresh`)

Not live survivors. Require actual documented death/dispatch and separate lawful food acceptance; otherwise assign hold_mortality. A pre_sort diversion still goes to grading, optionally through pre_sort fresh_chill; only an already graded post_sort accepted diversion may go to presentation or post_sort fresh_chill. No assumed edible recovery.

- Selected flow: Separately accepted fresh-food whole crabs diverted from live maintenance

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_live_hold`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_hold_eligible_fresh

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Waste flows

###### Holding effluent collected for an external treatment recipient (`hold_effluent_collected`)

Meter actual discharged water mass, composition and recipient at the technosphere handoff; include treatment burden as declared, not an additional direct receiving-water pollutant load for the same untreated effluent.

- Selected flow: Holding effluent collected for an external treatment recipient

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_live_hold`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_hold_effluent_collected

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Elementary flows

###### Fossil carbon dioxide to unspecified air (`live_hold_fossil_co2`)

Only actual owned fossil combustion with this receiving compartment. Derive mass from separately evidenced fuel composition and oxidation/emission method or measured releases, not from this identity or a universal factor. Exclude purchased electricity/service upstream emissions.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_live_hold`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_live_hold_fossil_co2

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Water directly returned to the declared receiving environment (`hold_water_return`)

Record direct returned water mass, receiving waterbody and actual treatment; distinguish from collected effluent and consumption, retained water, evaporation and leaks. Water quantity is not a nutrient mass.

- Selected flow: Water directly returned to the declared receiving environment

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_live_hold`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_hold_water_return

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

### Process: Fresh-food handling and nonfreezing chilling (`fresh_chill`)

Keep live cooling distinct from a dead fresh/chilled food state. Record each live input, accepted already-dead input or eligible fresh diversion separately; a lawful state transition and fresh acceptance record are required where life is lost. No operation may turn an unexplained live mortality into saleable food by relabeling it chilled. No chilling is mandatory for an immediately handed-over fresh lot; if this node is inactive, such a grading lot goes directly to presentation with its actual fresh status and elapsed time. Owned ice production is an auxiliary ledger inside this node: account water, electricity/fuel, direct releases and losses, without simultaneously buying its produced ice. The fixed ice identity below is exclusively purchased capture-fishery chilling ice.

#### Inputs

##### Product flows

###### Separately measured liquid water (`fresh_chill_internal_water_ice_receipt_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_chill`

###### Separately measured solid water ice (`fresh_chill_internal_water_ice_receipt_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_chill`



###### CN grid-average AC below 1 kV delivered to user (`fresh_chill_cn_electricity`)

Only matching actual CN low-voltage supply; meter electricity attributable to this node. Inapplicable outside this exact geography/voltage/mix. Convert metered kWh to MJ using 3.6; no addition of own-generated electricity and its fuel as two purchased burdens.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average AC below 1 kV delivered to user `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_fresh_chill`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_fresh_chill_cn_electricity

  - Unit: MJ

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Other actual purchased electricity at declared supply boundary (`fresh_chill_other_electricity`)

Use only for purchased electricity not matching the CN fixed card, disaggregated by actual geography, voltage and provider/mix; not a substitute for onboard own generation. Supplier evidence is required.

- Selected flow: Other actual purchased electricity at declared supply boundary

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_fresh_chill`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_fresh_chill_other_electricity

  - Unit: MJ

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### State-qualified whole food crabs entering fresh handling or chilling (`chill_whole_food`)

Receive one actual target whole-crab transfer from capture or pre_sort live_hold before grading, or from grading/post_sort live_hold afterward. Record pre_sort/post_sort stage and actual live, separately food-accepted dead fresh or already chilled state. Retain pending grading where applicable; track intentional transition and acceptance, never pool live and dead inventories.

- Selected flow: State-qualified whole food crabs entering fresh handling or chilling

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_fresh_chill`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_chill_whole_food

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Purchased capture-fishery ice at landing-port supply gate (`chill_purchased_ice`)

Actual externally supplied onboard/landing capture chilling medium only. Meter delivered and consumed ice separately, account storage changes, and exclude extraneous ice from crab net mass. Not applicable to own-made ice or a different supplier/product context.

- Selected flow: Purchased capture-fishery ice at landing-port supply gate `084c628e-9639-41fc-90f1-ee60dd12e9c6`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_fresh_chill`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_chill_purchased_ice

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Actual externally supplied fresh-handling or own-ice-production water (`chill_water_supplied`)

Record supplier, treatment and salinity; own ice production uses actual water and utilities here, not the purchased-ice card. Food-contact use requires actual competent-authority/product acceptance evidence, not an assumed sanitary outcome.

- Selected flow: Actual externally supplied fresh-handling or own-ice-production water

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_fresh_chill`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_chill_water_supplied

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separately measured liquid water (`fresh_chill_internal_water_ice_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_chill`

###### Separately measured solid water ice (`fresh_chill_internal_water_ice_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_chill`



###### Accepted whole food crabs after actual fresh handling or nonfreezing chilling (`chill_accepted_food`)

A pre_sort whole-crab output goes to grading with actual state, species, body condition, mass and time; a post_sort food-accepted output goes to presentation; an actually still-live lot receiving subsequent holding can instead transfer to hold_live_crabs at the same grading stage. Dead or unknown-viability material cannot use that live interface; every event has a unique order and transfer id. Record live survival separately and retain the entire pre-sort handling burden. This is a measured intermediate, not automatically 1 kg, and never frozen/cooked/sectioned output.

- Selected flow: Accepted whole food crabs after actual fresh handling or nonfreezing chilling

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_fresh_chill`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_chill_accepted_food

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to unspecified air (`fresh_chill_fossil_co2`)

Only actual owned fossil combustion with this receiving compartment. Derive mass from separately evidenced fuel composition and oxidation/emission method or measured releases, not from this identity or a universal factor. Exclude purchased electricity/service upstream emissions.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_fresh_chill`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_fresh_chill_fossil_co2

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Actual direct meltwater or process-water return to the receiving environment (`chill_direct_water`)

Record actual direct water return and associated dissolved substances separately by substance if material; exclude collected waste medium and avoid treating carrier water as a pollutant.

- Selected flow: Actual direct meltwater or process-water return to the receiving environment

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_fresh_chill`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_chill_direct_water

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

### Process: Producer presentation and first handover (`presentation`)

Only after grading and food acceptance are complete, receive exactly the measured terminal qualifying state from grading, post_sort live_hold or post_sort fresh_chill, linked by transfer id; do not add all three alternatives for one lot. Preserve live viability where sold live, and preserve the declared fresh/chilled condition otherwise. Container, binding, cushioning, label and cooling-medium masses are outside the reference net crab mass. Packaging, cleaning of returnable containers and gate-associated handling are included only when owned before the first handover; a bulk route records its actual reusable-bin/handling requirement or documented absence, not an invented package. First handover may be at vessel, shore or producer collection point as actually documented; later merchant holding, retail, external processing and distribution are outside. A lot-specific final card is instantiated to one actual species/state/gate rather than a mixture of incompatible identities.

#### Inputs

##### Product flows

###### Separately measured liquid water (`presentation_internal_water_ice_receipt_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`

###### Separately measured solid water ice (`presentation_internal_water_ice_receipt_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`



###### CN grid-average AC below 1 kV delivered to user (`presentation_cn_electricity`)

Only matching actual CN low-voltage supply; meter electricity attributable to this node. Inapplicable outside this exact geography/voltage/mix. Convert metered kWh to MJ using 3.6; no addition of own-generated electricity and its fuel as two purchased burdens.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN grid-average AC below 1 kV delivered to user `50657322-939c-4829-a87b-47c093bfa6a7`

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_presentation`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_presentation_cn_electricity

  - Unit: MJ

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Other actual purchased electricity at declared supply boundary (`presentation_other_electricity`)

Use only for purchased electricity not matching the CN fixed card, disaggregated by actual geography, voltage and provider/mix; not a substitute for onboard own generation. Supplier evidence is required.

- Selected flow: Other actual purchased electricity at declared supply boundary

- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_presentation`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_presentation_other_electricity

  - Unit: MJ

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Terminal state-qualified whole food crabs for first producer handover (`presentation_whole_food`)

Accept exactly one actual terminal transfer per lot from grading or post_sort holding/fresh_chill; no pre_sort transfer can be final before grading. Disaggregate species and live/fresh/chilled state, actual body condition and intended food acceptance. Match input/output wet-mass basis; do not add package or ice mass.

- Selected flow: Terminal state-qualified whole food crabs for first producer handover

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_presentation`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_presentation_whole_food

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Actual supplied container-cleaning or gate-handling water (`presentation_water`)

Use only actual owned pre-gate cleaning/handling, with source/treatment and mass; not a fixed wash requirement or proof of depuration. Avoid repeating cleaning already performed and inventoried in the preceding node.

- Selected flow: Actual supplied container-cleaning or gate-handling water

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_presentation`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_presentation_water

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separately measured liquid water (`presentation_water_ice_handover_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`

###### Separately measured solid water ice (`presentation_water_ice_handover_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`



###### Separately measured liquid water (`presentation_internal_water_ice_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`

###### Separately measured solid water ice (`presentation_internal_water_ice_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`



###### Whole wild food crabs in shell at first producer handover, actual live/fresh/chilled state declared (`crabs_first_handover`)

The sole final reference: actual qualifying crab body in native shell and actual appendage condition, wet net mass excluding external water/ice/packaging. Instantiate one actual species, shell/molt grade, life/temperature state, food acceptance and gate per lot; do not average mixed live/dead states or use an edible-meat conversion.

- Selected flow: Whole wild food crabs in shell at first producer handover, actual live/fresh/chilled state declared

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: 1 kg

- Value mode: Fixed value (`fixed_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Method formula (`method_formula`)

- Collection protocol: `cp_presentation`

- Sources: `wild-crab-foreground-method`

- Range: Reference definition interval

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 1

  - Upper: 1

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Actual physical packaging dispatched with the accepted lot (`presentation_packaging_handover`)

Record actual disposable packaging mass/ownership crossing the gate separately from net crabs, rejects and closing stock. For returnable crates retain full physical dispatch, return and stock mass in the asset movement ledger, separately from replacement/manufacturing service shares. Do not infer a waste fate or independently allocated food co-product from dispatch. No packaging is invented for actual bulk handling.

- Selected flow: Actual physical packaging dispatched with the accepted lot

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_presentation`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_presentation_packaging_handover

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Waste flows

###### Collected container-cleaning effluent to actual recipient (`presentation_effluent`)

Record volume/mass and actual composition/treatment handoff; direct environmental discharge, if it occurs, must instead have separately identified elementary water/substance exchanges and disclosed conformity.

- Selected flow: Collected container-cleaning effluent to actual recipient

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_presentation`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_presentation_effluent

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

##### Elementary flows

###### Fossil carbon dioxide to unspecified air (`presentation_fossil_co2`)

Only actual owned fossil combustion with this receiving compartment. Derive mass from separately evidenced fuel composition and oxidation/emission method or measured releases, not from this identity or a universal factor. Exclude purchased electricity/service upstream emissions.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Binding: `fixed`

- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_presentation`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_presentation_fossil_co2

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

###### Actual direct container-cleaning water return (`presentation_direct_water`)

Only actual direct return at the gate, with receiving environment and water mass; mutually exclusive with presentation_effluent for the same quantity. Account evaporation, stock changes and retained water separately.

- Selected flow: Actual direct container-cleaning water return

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.

- Value mode: Calculated value (`calculated_value`)

- Specificity: Site-specific (`site_specific`)

- Normalization basis: per 1 kg reference flow

- Basis kind: Reference flow (`reference_flow`)

- Evidence kind: Calculated from collection (`calculated_from_collection`)

- Collection protocol: `cp_presentation`

- Sources: `wild-crab-foreground-method`

- Range: Independent-reference protocol screening interval; not a default amount

  - Range role: QA guardrail (`qa_guardrail`)

  - Lower: 0

  - Upper: U_presentation_direct_water

  - Unit: kg

  - Basis: per 1 kg reference flow

  - Basis kind: Reference flow (`reference_flow`)

  - Evidence kind: Method formula (`method_formula`)

  - Sources: `wild-crab-foreground-method`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_output` | capture; grading | Avoid attribution by separating actual dedicated efforts and downstream grade handling first. For inseparable capture joint outputs, allocate residual common effort burdens across all intended retained landings using documented landed wet mass at their first independent handoffs; treat food grades of the same reference lot once. Disclose why this physical driver represents the shared operation and test economic allocation sensitivity if values/effort strongly diverge. If a defensible driver cannot be shown, retain a joint-output package and block a single-output claim rather than silently selecting a fraction. | `wild-crab-foreground-method` |
| `allocation_losses` | all nodes | Live releases, dead discards, mortality, rejected food and waste are physical dispositions, not intended co-products merely because mass exists. Attribute their capture/handling/treatment burdens to the causative retained intended outputs, disclose actual fate, and apply no automatic substitution, ecosystem, bait-recycling or negative biomass credit. A genuinely sold non-reference output requires its separate product role and handoff record. | `wild-crab-foreground-method` |
| `allocation_periods` | all nodes | Index trips, deployments, holding batches, handling runs and reporting periods; include empty/failed trips attributable to the declared fishery. Reconcile opening/closing crab and bait stocks with dated transfers and deaths; carry their associated burdens with closing stock and release them once at later handover. Attribute vessel/gear/tank/ice-maker and crate capital from actual service history, replacement and remaining life, never a universal lifespan or a new purchase each trip. Distinguish product custody gate from resource/service accounting-period closure: an at-sea first gate is not moved to port, but actual trip-period ledgers assign necessary producer return-to-base, idling and return-cycle preparation once, with actual closure time and evidenced shares for other trips. Exclude buyer distribution and later unrelated capture; never charge the same return again to the next campaign. | `wild-crab-foreground-method` |
| `allocation_shared` | all nodes | Use measured fuel/power or operating hours and evidenced load for shared vessel, pumping and cold-room operation; use occupied mass-time or service cycles for tanks/crates only when it represents actual service. Allocate each event first across consuming nodes/periods, then intended outputs if still joint; shares must sum to one. Distinguish physical internal transfers from purchased services. Cleaning/changeover and returns have one run owner and cannot be counted again in another node. | `wild-crab-foreground-method` |
| `allocation_secondary_bait` | capture_bait | Inherit prior capture/processing shares consistently with the supplier co-product allocation, adding actual separation, recovery, preservation and transport burdens; supplier evidence must establish waste/product status and the separation gate. A supplier cut-off requires consistent supplier/receiver boundaries, explicit disclosure and alternative-inheritance sensitivity; waste status and zero burden are never defaults. Count recovery events and inherited prior-system shares once; no automatic avoided-disposal credit. | `wild-crab-foreground-method` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Declared foreground collection method: every actual node keeps a linked lot/deployment/event ledger. Weigh wet biomass and materials with calibrated scales; retain raw counters only with a representative same-species/state mass sample and its uncertainty. Meter supplied utilities and reconcile tank/asset/gear stocks. Actual mass exchanges and direct substance releases require identity-specific units and independent supplier, measurement or emission-method evidence; the qualitative route sources supply no amount factors. For the unallocated physical view, normalize measured complete-trip material partitions after matching positive state-qualified accepted final net mass is known. For the separately labelled single-output LCA view, determine co-product shares before calculating allocated burdens; do not present the whole joint-trip burden as exclusively attributable to one species. Shared-resource service ownership is not co-product allocation.

Range method: for each active nonfinal row establish U_row from an independent representative reference campaign or a documented supplier/design envelope at the same species/state/gear and measurement scope, normalized on that reference campaign's own accepted output in the same explicitly labelled physical or LCA view as the target; never compare allocated and unallocated quantities. Retain the preselected uncertainty margin, sampling design, sample size and comparability argument; do not use the target batch maximum to check that same batch. The lower value 0 means nonnegative physical amounts, not permission to fill missing data with zero. No numeric U is invented here. When an independent envelope is unavailable, the data producer records a range-evidence gap and seeks measurement; it cannot declare a quantitative guardrail pass. Out-of-envelope measurements are retained and investigated. The final 1-to-1 range follows only from the reference definition.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | All actual capture exchange roles, disaggregated by identity/state | Node-specific paired measurements, event and supplier records |trip/deployment/lot/transfer/event id; node and period; species/material/substance/state; pre_sort/post_sort stage and actual event order; mass and unit; opening/closing stock; fuel/power/water/gas/asset/gear events; recipient/medium; ownership/allocation share; accepted final net kg; independent reference campaign and U_row evidence; gear type/configuration/material; deployment and retrieval counts; soak/haul time; bait species/state charged/retrieved/lost; catch by taxon and disposition; vessel/fuel/gear stocks; ghost-fishing/entanglement/bottom-contact observations | Use calibrated wet/net weighing with separated external water and container tare; meter utilities, reconcile inventory and actual species/state transfers; sample concentrations/material composition or retain compatible supplier/factor evidence. Record gear/holding/handling conditions and loss destinations specific to this node. | kg by identity; MJ for energy; raw counts/hours/temperature/volume kept with conversions | Every actual lot, deployment, dispatch or material event; matched meters over its operating interval | Full declared trips/batches and reporting period including failed trips, closing stocks and dated replacements | One declared producer/operating unit and this node, not pooled unrelated fleets/sites | per 1 kg reference flow | Scale/meter calibration, raw logs and timestamps, food/state acceptance, traceable supplier/composition/factor records, stock/transfer reconciliation, independent U_row evidence and coverage gaps |
| `cp_grading` | `grading` | All actual grading exchange roles, disaggregated by identity/state | Node-specific paired measurements, event and supplier records |trip/deployment/lot/transfer/event id; node and period; species/material/substance/state; pre_sort/post_sort stage and actual event order; mass and unit; opening/closing stock; fuel/power/water/gas/asset/gear events; recipient/medium; ownership/allocation share; accepted final net kg; independent reference campaign and U_row evidence; actual incoming predecessor/state; shell/molt/sex where relevant; body/appendage condition; grade and food acceptance; mass by each grade/destination; released vitality and recipient; detached parts and tissue loss | Use calibrated wet/net weighing with separated external water and container tare; meter utilities, reconcile inventory and actual species/state transfers; sample concentrations/material composition or retain compatible supplier/factor evidence. Record gear/holding/handling conditions and loss destinations specific to this node. | kg by identity; MJ for energy; raw counts/hours/temperature/volume kept with conversions | Every actual lot, deployment, dispatch or material event; matched meters over its operating interval | Full declared trips/batches and reporting period including failed trips, closing stocks and dated replacements | One declared producer/operating unit and this node, not pooled unrelated fleets/sites | per 1 kg reference flow | Scale/meter calibration, raw logs and timestamps, food/state acceptance, traceable supplier/composition/factor records, stock/transfer reconciliation, independent U_row evidence and coverage gaps |
| `cp_live_hold` | `live_hold` | All actual live_hold exchange roles, disaggregated by identity/state | Node-specific paired measurements, event and supplier records |trip/deployment/lot/transfer/event id; node and period; species/material/substance/state; pre_sort/post_sort stage and actual event order; mass and unit; opening/closing stock; fuel/power/water/gas/asset/gear events; recipient/medium; ownership/allocation share; accepted final net kg; independent reference campaign and U_row evidence; pre_sort/post_sort stage; live entry/exit and arrival/departure times; tank/dry method; temperature/duration; deaths and separate fresh acceptance; maintenance feed; gas purity/pressure/temperature; makeup/return/evaporation water; inlet/outlet substance concentrations | Use calibrated wet/net weighing with separated external water and container tare; meter utilities, reconcile inventory and actual species/state transfers; sample concentrations/material composition or retain compatible supplier/factor evidence. Record gear/holding/handling conditions and loss destinations specific to this node. | kg by identity; MJ for energy; raw counts/hours/temperature/volume kept with conversions | Every actual lot, deployment, dispatch or material event; matched meters over its operating interval | Full declared trips/batches and reporting period including failed trips, closing stocks and dated replacements | One declared producer/operating unit and this node, not pooled unrelated fleets/sites | per 1 kg reference flow | Scale/meter calibration, raw logs and timestamps, food/state acceptance, traceable supplier/composition/factor records, stock/transfer reconciliation, independent U_row evidence and coverage gaps |
| `cp_fresh_chill` | `fresh_chill` | All actual fresh_chill exchange roles, disaggregated by identity/state | Node-specific paired measurements, event and supplier records |trip/deployment/lot/transfer/event id; node and period; species/material/substance/state; pre_sort/post_sort stage and actual event order; mass and unit; opening/closing stock; fuel/power/water/gas/asset/gear events; recipient/medium; ownership/allocation share; accepted final net kg; independent reference campaign and U_row evidence; pre_sort/post_sort stage; actual before/after life-temperature state; intervention and dispatch times; transition/death and food acceptance; external or own-produced ice; actual ice consumption/stock change; own ice water/power/fuel and direct releases; meltwater fate | Use calibrated wet/net weighing with separated external water and container tare; meter utilities, reconcile inventory and actual species/state transfers; sample concentrations/material composition or retain compatible supplier/factor evidence. Record gear/holding/handling conditions and loss destinations specific to this node. | kg by identity; MJ for energy; raw counts/hours/temperature/volume kept with conversions | Every actual lot, deployment, dispatch or material event; matched meters over its operating interval | Full declared trips/batches and reporting period including failed trips, closing stocks and dated replacements | One declared producer/operating unit and this node, not pooled unrelated fleets/sites | per 1 kg reference flow | Scale/meter calibration, raw logs and timestamps, food/state acceptance, traceable supplier/composition/factor records, stock/transfer reconciliation, independent U_row evidence and coverage gaps |
| `cp_presentation` | `presentation` | All actual presentation exchange roles, disaggregated by identity/state | Node-specific paired measurements, event and supplier records |trip/deployment/lot/transfer/event id; node and period; species/material/substance/state; pre_sort/post_sort stage and actual event order; mass and unit; opening/closing stock; fuel/power/water/gas/asset/gear events; recipient/medium; ownership/allocation share; accepted final net kg; independent reference campaign and U_row evidence; completed grading and actual terminal predecessor; species/whole body/appendage and food acceptance; first buyer, ownership/location/time; actual life-temperature state; gross/net crab mass; measured tare/external water/ice; container replacement/use cycles/returns and cleaning events | Use calibrated wet/net weighing with separated external water and container tare; meter utilities, reconcile inventory and actual species/state transfers; sample concentrations/material composition or retain compatible supplier/factor evidence. Record gear/holding/handling conditions and loss destinations specific to this node. | kg by identity; MJ for energy; raw counts/hours/temperature/volume kept with conversions | Every actual lot, deployment, dispatch or material event; matched meters over its operating interval | Full declared trips/batches and reporting period including failed trips, closing stocks and dated replacements | One declared producer/operating unit and this node, not pooled unrelated fleets/sites | per 1 kg reference flow | Scale/meter calibration, raw logs and timestamps, food/state acceptance, traceable supplier/composition/factor records, stock/transfer reconciliation, independent U_row evidence and coverage gaps |

Apply lot_attribution to every nonfinal row: retain raw collected values separately from allocated/normalized calculated exchanges. Derive fossil CO2 from actual fuel composition and an independently evidenced emission method, or measured release records, before attribution/final-mass normalization; method parameters require compatible composition/oxidation/measurement evidence.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_attribution` | all inventory rows | Keep two explicitly labelled views. First reconcile unallocated physical receipts, transfers, products, losses and stocks for the complete declared cohort/trip/run; pair internal transfers in the same state and unit, retaining their measured mass. Assign shared resource/service events to actual consuming nodes and periods once using evidenced service shares, without shrinking product, biomass, water or waste partitions by a co-product share. Divide this physical inventory by the matching positive accepted final net kg. Separately derive a labelled single-output LCA burden/inventory projection using section 7 co-product allocation exactly once, retaining the unallocated inventory and allocation matrix. Never test allocated exchanges against an unallocated physical balance, apply output shares again downstream, or set an internal quantity to the final 1 kg. | Node protocols; allocation ledger; accepted final net mass; stock history | Attributed exchange per 1 kg reference flow | `wild-crab-foreground-method` |
| `reference_envelope` | all nonfinal row ranges | Establish U_row separately for each actual instantiated identity/state, node and pre_sort/post_sort pass. Use the maximum normalized amount of an independent representative reference campaign times a predeclared uncertainty margin not less than 1, or a supplier design envelope in matching numerator unit and final-net-kg basis times that margin; retain raw quantities, reference net kg, sample size, scope and margin rationale. Exclude the target lot from its own envelope and never pool different substances under one umbrella bound. Without independent evidence the instance remains uninstantiated, not numerically QA-cleared or a complete quantitative data package. | Independent campaign records; scope; uncertainty margin | U_row | `wild-crab-foreground-method` |
| `conditional_interface_envelopes` | capture_internal_water_ice_transfer; grading_internal_water_ice_receipt; grading_internal_water_ice_transfer; live_hold_internal_water_ice_receipt; live_hold_internal_water_ice_transfer; fresh_chill_internal_water_ice_receipt; fresh_chill_internal_water_ice_transfer; presentation_internal_water_ice_receipt; presentation_actual_source_water; presentation_internal_water_ice_transfer; presentation_water_ice_handover; presentation_packaging_handover | For each explicitly listed conditional interface card instantiate actual identity, state, node, pass and numerator unit before establishing U_row from the same-view normalized maximum of an independent representative campaign times a predeclared margin at least 1, or a matching-unit/basis supplier design envelope. Retain samples, source, basis and uncertainty; never use the target batch to establish its own upper bound. Unverified service unit/support or absent independent envelope remains an unresolved instance, not numeric QA-cleared or zero. Reconcile physical water/ice/packaging movements separately from service-share quantities. | independent reference records; actual unit and basis | U_row | `wild-crab-foreground-method` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_scope` | reference lot | Trace wild origin, species/gear/habitat, actual food/body/life state and the first gate; do not average incompatible states or infer unknown viability. | Capture, grading, state acceptance and dispatch records |
| `quality_amounts` | all actual exchanges | Use representative temporal coverage including unsuccessful effort, measurement uncertainty and supplier scope; classify missing identity/amount/range evidence as gaps, not zero. | Calibrations, supplier/detail records and independent reference-campaign logs |
| `quality_impact` | capture and release | Retain bycatch, injury, delayed-fate uncertainty, lost gear, ghost-fishing and habitat-contact observations even when characterization lacks coverage; never report an unassessed impact as no impact. | Observer/operator records and explicit assessment limits |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_capture_fuel` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel supplied for owned capture operations”; retain all following collection, quantity and normalization obligations: Collect fuel by grade, provider and storage reconciliation, including actual vessel/generator/mobile equipment use; exclude fuel already embodied in a purchased operated service. No freshwater-vessel diesel identity is applied to a marine route. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_materials_assets` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating materials and attributed asset replacements”; retain all following collection, quantity and normalization obligations: Separate lubricant, cleaning/disinfection materials, repair parts and reusable asset materials by identity and actual input mass. This card records measured material mass and attributed replacement only, never invented kg converted from hours, trips or operated services; actual asset/service activity retains its native unit in the auxiliary ledger, and service datasets are instantiated separately in that actual unit. Fishing gear is recorded once in capture_gear, never again in capture_materials_assets. Asset events carry service life, use records and salvage destination; an operated service cannot be duplicated by its embedded materials or fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual bait at deployment gate, species and preservation state specified”; retain all following collection, quantity and normalization obligations: Pot/trap, line or other actually baited gear only. Record purchased whole bait fish, fishery co-product or manufactured bait as distinct supplier inputs with upstream production/recovery and preservation burdens. Fresh, frozen and formulated bait are not interchangeable identities. Own-caught bait is an independently inventoried capture output/input transfer with effort, not a free withdrawal or a second purchase. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_gear` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Fishing gear materials replaced or attributed to the recorded service period”; retain all following collection, quantity and normalization obligations: Inventory pots/traps, mesh or frame, ground/vertical rope, buoy, weights and release devices by material, configuration, ownership and actual service use; non-pot routes record their own distinct gear. Do not enter each deployment as a new full gear purchase. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_wild_biomass` | `capture`; inputs; elementary | Identify and separately collect every actual exchange covered by “Wild aquatic biomass captured from the declared habitat by taxon”; retain all following collection, quantity and normalization obligations: Record target and incidental captured biomass by taxon and actual wet-mass basis, including observed release/discard dispositions. Do not omit incidental biomass or invent mass from a head count without measured representative individual mass. Wild resource withdrawal is not purchased feed or a negative credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_water_abstracted` | `capture`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual directly abstracted capture equipment-cleaning water”; retain all following collection, quantity and normalization obligations: Activate only for actual direct withdrawal, with measured intake and treatment at the declared freshwater/marine source. Purchased water and internal circulation are not direct withdrawals again. Use this node-owned protocol and separately reconcile direct return, collected effluent, evaporation and stock. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_internal_water_ice_transfer` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred to another declared node”; retain all following collection, quantity and normalization obligations: Conditional actual measured water/ice transfer only, with receiving node/card and matching source, state, composition, event/pass id, quantity and unit. Preserve opening/closing stocks and melt/evaporation fates. Not an environmental return or a separately sold co-product; no repeated resource withdrawal or supplier burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_operating_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected operating and maintenance waste by actual destination”; retain all following collection, quantity and normalization obligations: Record used lubricant, spent cleaning liquid, damaged parts and contaminated materials separately, with actual waste code, composition and recipient. Never model the same mass as both collected waste and direct environmental release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_retrieved_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Retrieved bait remnants and nonfood catch sent to a waste recipient”; retain all following collection, quantity and normalization obligations: Only physically retrieved material removed from the environment and transferred to treatment; identify bait remnants separately from crab mortality, and retain waste destination/ownership. Subsequent waste treatment burden follows the declared boundary; no automatic avoided-product credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_other_air_emissions` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct air releases by substance and compartment”; retain all following collection, quantity and normalization obligations: Disaggregate fuel pollutants, refrigerant leaks or other actual direct releases by identified substance, particle size where relevant and air compartment; do not bind broad NOx/VOC/PM umbrellas to one invented species. Retain factor or analytical evidence and reconcile charge/recovery stocks. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_live_release` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Observed live release to the original aquatic habitat by taxon”; retain all following collection, quantity and normalization obligations: Record actual released taxa, wet mass or traceably converted count, vitality, place/time and capture transfer. Survival after release is not assumed certain; observed injury/unknown fate is separately disclosed, not a negative catch impact. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_dead_discard` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Dead discarded biomass returned to the declared waterbody”; retain all following collection, quantity and normalization obligations: Distinguish dead catch from live release, and distinguish retrieved waste from material discharged directly to water. Document taxa, destination and timing; no fate or biodegradation factor is supplied by this PCR. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait_release` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Unretrieved bait material released to the aquatic environment”; retain all following collection, quantity and normalization obligations: Reconcile bait charged, retrieved, retained stocks and consumed/unretrieved fractions using actual sampling or a documented loss assessment; unknown consumption/loss is not zero. This physical biomass ledger is not a surrogate dissolved nutrient emission without composition/fate evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_lost_gear` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Lost fishing-gear material remaining in the environment”; retain all following collection, quantity and normalization obligations: Disaggregate lost rope/net, plastic buoy and metal or other components by material and actual receiving environment; record retrieval later as a separate dated event with a single owner. Also retain non-mass entanglement, ghost-fishing and bottom-contact observations; mass alone does not quantify them. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_dissolved_cleaning_releases` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct capture cleaning substances, disaggregated by chemical basis and receiving compartment”; retain all following collection, quantity and normalization obligations: Each material cleaning chemical, lubricant or other directly water-released substance requires its own actual identity/mass basis and receiving water, measured concentration/flow or documented release assessment, excluding duplicate inherited inlet load. This is pollutant mass, not carrier-water mass; exclude collected treatment waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_capture` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_fuel` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel supplied for owned grading operations”; retain all following collection, quantity and normalization obligations: Collect fuel by grade, provider and storage reconciliation, including actual vessel/generator/mobile equipment use; exclude fuel already embodied in a purchased operated service. No freshwater-vessel diesel identity is applied to a marine route. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_materials_assets` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating materials and attributed asset replacements”; retain all following collection, quantity and normalization obligations: Separate lubricant, cleaning/disinfection materials, repair parts and reusable asset materials by identity and actual input mass. Asset events carry service life, use records and salvage destination; an operated service cannot be duplicated by its embedded materials or fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_internal_water_ice_receipt` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Actual internally received water or ice”; retain all following collection, quantity and normalization obligations: Only an actual transfer from another declared node activates this role. Split water/ice by actual state, source owner and transfer/event/pass id; match the sender measured quantity and composition, without another abstraction, purchase or production burden. Same-node circulation is an auxiliary stock ledger, not a new transfer. Exclude carrier already included in another material card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_water_abstracted` | `grading`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual directly abstracted grading equipment-cleaning water”; retain all following collection, quantity and normalization obligations: Activate only for actual direct withdrawal, with measured intake and treatment at the declared freshwater/marine source. Purchased water and internal circulation are not direct withdrawals again. Use this node-owned protocol and separately reconcile direct return, collected effluent, evaporation and stock. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_other_landings` | `grading`; outputs; product | Identify and separately collect every actual exchange covered by “Other intended retained products or non-reference grades at independent handover”; retain all following collection, quantity and normalization obligations: Enumerate taxa, actual food or nonfood role, detached parts if present, mass, recipient and first gate. A qualifying food crab size grade can join the reference lot only if its state, gate and product qualifiers truly match; do not also count it in other landings. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_internal_water_ice_transfer` | `grading`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred to another declared node”; retain all following collection, quantity and normalization obligations: Conditional actual measured water/ice transfer only, with receiving node/card and matching source, state, composition, event/pass id, quantity and unit. Preserve opening/closing stocks and melt/evaporation fates. Not an environmental return or a separately sold co-product; no repeated resource withdrawal or supplier burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_operating_waste` | `grading`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected operating and maintenance waste by actual destination”; retain all following collection, quantity and normalization obligations: Record used lubricant, spent cleaning liquid, damaged parts and contaminated materials separately, with actual waste code, composition and recipient. Never model the same mass as both collected waste and direct environmental release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_rejects` | `grading`; outputs; waste | Identify and separately collect every actual exchange covered by “Retained grading rejects sent to waste management”; retain all following collection, quantity and normalization obligations: Record dead/nonfood crabs, detached unsold material and other retained rejects with actual recipient. A live animal sent to waste is not automatically a legal live release; retain actual disposition. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_other_air_emissions` | `grading`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct air releases by substance and compartment”; retain all following collection, quantity and normalization obligations: Disaggregate fuel pollutants, refrigerant leaks or other actual direct releases by identified substance, particle size where relevant and air compartment; do not bind broad NOx/VOC/PM umbrellas to one invented species. Retain factor or analytical evidence and reconcile charge/recovery stocks. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_live_release` | `grading`; outputs; elementary | Identify and separately collect every actual exchange covered by “Live grading releases to the declared aquatic habitat”; retain all following collection, quantity and normalization obligations: Record releases made at this node only, matched to grading intake and excluding capture_live_release. Retain species, vitality, location/time, jurisdictional disposition and unknown delayed mortality separately. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_direct_discard` | `grading`; outputs; elementary | Identify and separately collect every actual exchange covered by “Dead grading discards released directly to the declared environment”; retain all following collection, quantity and normalization obligations: Only an actual direct environmental discharge with identified material/medium, never the same material already transferred as grading_rejects; record any prohibited disposition as a nonconformity rather than normalizing it away. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_dissolved_cleaning_releases` | `grading`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct grading cleaning substances, disaggregated by chemical basis and receiving compartment”; retain all following collection, quantity and normalization obligations: Each material cleaning chemical, lubricant or other directly water-released substance requires its own actual identity/mass basis and receiving water, measured concentration/flow or documented release assessment, excluding duplicate inherited inlet load. This is pollutant mass, not carrier-water mass; exclude collected treatment waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grading; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_grading` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_hold_fuel` | `live_hold`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel supplied for owned live_hold operations”; retain all following collection, quantity and normalization obligations: Collect fuel by grade, provider and storage reconciliation, including actual vessel/generator/mobile equipment use; exclude fuel already embodied in a purchased operated service. No freshwater-vessel diesel identity is applied to a marine route. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_hold_materials_assets` | `live_hold`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating materials and attributed asset replacements”; retain all following collection, quantity and normalization obligations: Separate lubricant, cleaning/disinfection materials, repair parts and reusable asset materials by identity and actual input mass. Asset events carry service life, use records and salvage destination; an operated service cannot be duplicated by its embedded materials or fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hold_gas` | `live_hold`; inputs; product | Identify and separately collect every actual exchange covered by “Actual delivered holding gas by substance, purity and delivery state”; retain all following collection, quantity and normalization obligations: Only if oxygen or another gas is actually delivered; require measured mass or a verified state-specific conversion. Air blown by a pump is not purchased oxygen. Factory-volume oxygen identities are not relabeled delivered compressed kg gas. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hold_feed` | `live_hold`; inputs; product | Identify and separately collect every actual exchange covered by “Actual bounded maintenance feed at feeding gate”; retain all following collection, quantity and normalization obligations: Record actual composition, supplier, wet/dry state and upstream burden; zero only with documented no-feeding operation. Include leftover and excretion pathways. Deliberate growth/fattening or induced molt means this lot is outside the capture-only reference scope. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_hold_internal_water_ice_receipt` | `live_hold`; inputs; product | Identify and separately collect every actual exchange covered by “Actual internally received water or ice”; retain all following collection, quantity and normalization obligations: Only an actual transfer from another declared node activates this role. Split water/ice by actual state, source owner and transfer/event/pass id; match the sender measured quantity and composition, without another abstraction, purchase or production burden. Same-node circulation is an auxiliary stock ledger, not a new transfer. Exclude carrier already included in another material card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hold_water_abstracted` | `live_hold`; inputs; elementary | Identify and separately collect every actual exchange covered by “Water directly abstracted from the actual freshwater or marine source”; retain all following collection, quantity and normalization obligations: Record abstraction at physical intake once, including make-up and losses; internal recirculation is a separate meter/log, not repeated resource withdrawal. Keep freshwater and seawater as distinct concrete exchanges. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_hold_internal_water_ice_transfer` | `live_hold`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred to another declared node”; retain all following collection, quantity and normalization obligations: Conditional actual measured water/ice transfer only, with receiving node/card and matching source, state, composition, event/pass id, quantity and unit. Preserve opening/closing stocks and melt/evaporation fates. Not an environmental return or a separately sold co-product; no repeated resource withdrawal or supplier burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_hold_operating_waste` | `live_hold`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected operating and maintenance waste by actual destination”; retain all following collection, quantity and normalization obligations: Record used lubricant, spent cleaning liquid, damaged parts and contaminated materials separately, with actual waste code, composition and recipient. Never model the same mass as both collected waste and direct environmental release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hold_mortality` | `live_hold`; outputs; waste | Identify and separately collect every actual exchange covered by “Nonqualifying mortality, spent feed and collected holding solids”; retain all following collection, quantity and normalization obligations: Separate crab bodies, feed remnants and sludge by composition and recipient. Dead stock cannot remain in live closing inventory or the reference output. A collected sludge/water mixture is not also a direct discharge. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_hold_other_air_emissions` | `live_hold`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct air releases by substance and compartment”; retain all following collection, quantity and normalization obligations: Disaggregate fuel pollutants, refrigerant leaks or other actual direct releases by identified substance, particle size where relevant and air compartment; do not bind broad NOx/VOC/PM umbrellas to one invented species. Retain factor or analytical evidence and reconcile charge/recovery stocks. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_hold_dissolved_releases` | `live_hold`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual dissolved substances directly released to the receiving water”; retain all following collection, quantity and normalization obligations: Disaggregate measured nutrients, salts, cleaning agents and other substances by chemical basis and receiving water; use paired inlet/outlet concentrations and volumes without double counting inherited inlet substances or water mass as pollutant. No generic N-to-ammonia conversion. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_live_hold; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_live_hold` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fresh_chill_fuel` | `fresh_chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel supplied for owned fresh_chill operations”; retain all following collection, quantity and normalization obligations: Collect fuel by grade, provider and storage reconciliation, including actual vessel/generator/mobile equipment use; exclude fuel already embodied in a purchased operated service. No freshwater-vessel diesel identity is applied to a marine route. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fresh_chill` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fresh_chill_materials_assets` | `fresh_chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating materials and attributed asset replacements”; retain all following collection, quantity and normalization obligations: Separate lubricant, cleaning/disinfection materials, repair parts and reusable asset materials by identity and actual input mass. Asset events carry service life, use records and salvage destination; an operated service cannot be duplicated by its embedded materials or fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fresh_chill` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fresh_chill_internal_water_ice_receipt` | `fresh_chill`; inputs; product | Identify and separately collect every actual exchange covered by “Actual internally received water or ice”; retain all following collection, quantity and normalization obligations: Only an actual transfer from another declared node activates this role. Split water/ice by actual state, source owner and transfer/event/pass id; match the sender measured quantity and composition, without another abstraction, purchase or production burden. Same-node circulation is an auxiliary stock ledger, not a new transfer. Exclude carrier already included in another material card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fresh_chill` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_water_abstracted` | `fresh_chill`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct water withdrawal for owned fresh handling”; retain all following collection, quantity and normalization obligations: Only actual direct source withdrawal, separate freshwater/marine sources and any treatment inputs; exclude water already purchased and internal recirculation. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fresh_chill` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fresh_chill_internal_water_ice_transfer` | `fresh_chill`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred to another declared node”; retain all following collection, quantity and normalization obligations: Conditional actual measured water/ice transfer only, with receiving node/card and matching source, state, composition, event/pass id, quantity and unit. Preserve opening/closing stocks and melt/evaporation fates. Not an environmental return or a separately sold co-product; no repeated resource withdrawal or supplier burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fresh_chill` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fresh_chill_operating_waste` | `fresh_chill`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected operating and maintenance waste by actual destination”; retain all following collection, quantity and normalization obligations: Record used lubricant, spent cleaning liquid, damaged parts and contaminated materials separately, with actual waste code, composition and recipient. Never model the same mass as both collected waste and direct environmental release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fresh_chill` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_rejects` | `fresh_chill`; outputs; waste | Identify and separately collect every actual exchange covered by “Nonqualifying food rejects, collected residues and spent chilling medium”; retain all following collection, quantity and normalization obligations: Separate nonaccepted deaths and damaged whole bodies from collected melting ice/water by actual composition/recipient. Do not call every death fresh food or count collected medium as direct water return. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fresh_chill` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_fresh_chill_other_air_emissions` | `fresh_chill`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct air releases by substance and compartment”; retain all following collection, quantity and normalization obligations: Disaggregate fuel pollutants, refrigerant leaks or other actual direct releases by identified substance, particle size where relevant and air compartment; do not bind broad NOx/VOC/PM umbrellas to one invented species. Retain factor or analytical evidence and reconcile charge/recovery stocks. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fresh_chill` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_chill_dissolved_releases` | `fresh_chill`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual dissolved substances in direct fresh-handling discharges”; retain all following collection, quantity and normalization obligations: Disaggregate each actual chemical/biomass-derived substance by composition, mass basis and receiving water. Determine loads from measured flow/concentration and inlet background; no assumed conversion from crab loss or carrier-water mass. Exclude waste transferred to treatment. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_fresh_chill; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_fresh_chill` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_fuel` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel supplied for owned presentation operations”; retain all following collection, quantity and normalization obligations: Collect fuel by grade, provider and storage reconciliation, including actual vessel/generator/mobile equipment use; exclude fuel already embodied in a purchased operated service. No freshwater-vessel diesel identity is applied to a marine route. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_materials_assets` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating materials and attributed asset replacements”; retain all following collection, quantity and normalization obligations: Separate lubricant, cleaning/disinfection materials, repair parts and reusable asset materials by identity and actual input mass. Asset events carry service life, use records and salvage destination; an operated service cannot be duplicated by its embedded materials or fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_packaging` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual primary packaging and presentation materials at producer gate”; retain all following collection, quantity and normalization obligations: Separate containers, ties, cushions and labels by material and actual new/reusable status. Reusable crates use attributable replacements or the evidenced service share, not their full mass on each trip; retain return stock, damage and cleaning responsibility. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_internal_water_ice_receipt` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual internally received water or ice”; retain all following collection, quantity and normalization obligations: Only an actual transfer from another declared node activates this role. Split water/ice by actual state, source owner and transfer/event/pass id; match the sender measured quantity and composition, without another abstraction, purchase or production burden. Same-node circulation is an auxiliary stock ledger, not a new transfer. Exclude carrier already included in another material card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_actual_source_water` | `presentation`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water withdrawn from its identified natural source”; retain all following collection, quantity and normalization obligations: Activate only for actual presentation-owned direct withdrawal, separated by freshwater/seawater source and location. Retain mass or actual-state density conversion, abstraction ownership and actual returns/evaporation/stock; never use treated-industrial-water UUID, or duplicate purchased/internal water. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_internal_water_ice_transfer` | `presentation`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred to another declared node”; retain all following collection, quantity and normalization obligations: Conditional actual measured water/ice transfer only, with receiving node/card and matching source, state, composition, event/pass id, quantity and unit. Preserve opening/closing stocks and melt/evaporation fates. Not an environmental return or a separately sold co-product; no repeated resource withdrawal or supplier burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_water_ice_handover` | `presentation`; outputs; product | Identify and separately collect every actual exchange covered by “Actual protective water or ice leaving with the accepted lot”; retain all following collection, quantity and normalization obligations: Record actual remaining protective water/ice crossing the first gate by state, source and measured mass, separately from net animal mass and packaging. Reconcile melted water, stocks, returns and supplier/own production once. This attached material is not automatically waste or an independently allocated co-product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_operating_waste` | `presentation`; outputs; waste | Identify and separately collect every actual exchange covered by “Collected operating and maintenance waste by actual destination”; retain all following collection, quantity and normalization obligations: Record used lubricant, spent cleaning liquid, damaged parts and contaminated materials separately, with actual waste code, composition and recipient. Never model the same mass as both collected waste and direct environmental release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_rejects` | `presentation`; outputs; waste | Identify and separately collect every actual exchange covered by “Rejected whole crabs and packaging at first handover”; retain all following collection, quantity and normalization obligations: Measure actual rejected crab mass separately from packaging, with viability, food/nonfood status, recipient and reason. Rejects never inflate accepted net reference mass, and returned reusable crates remain asset stocks rather than automatic waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_other_air_emissions` | `presentation`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual direct air releases by substance and compartment”; retain all following collection, quantity and normalization obligations: Disaggregate fuel pollutants, refrigerant leaks or other actual direct releases by identified substance, particle size where relevant and air compartment; do not bind broad NOx/VOC/PM umbrellas to one invented species. Retain factor or analytical evidence and reconcile charge/recovery stocks. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_dissolved_releases` | `presentation`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual substances in direct gate-cleaning discharge”; retain all following collection, quantity and normalization obligations: Each material cleaning chemical or dissolved substance requires actual identity, concentration/flow basis and receiving compartment, separate from carrier water and collected treatment waste. No sanitary or universal toxicity outcome is implied. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value (`calculated_value`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Calculated from collection (`calculated_from_collection`) Collection protocol: `cp_presentation` Sources: `wild-crab-foreground-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference lot | Verify wild provenance, actual species/habitat, whole-body/native-shell and appendage condition, shell/molt and food grade, actual live/fresh/chilled state and the first gate. Refuse detached parts, cooked/frozen meat and managed-growth/molt lots. Missing actual state/gate or food acceptance blocks the final reference, not an assumed live/default route. | `wild-crab-foreground-method` |
| `validate_balance` | all nodes | Check species/state-specific opening stock + receipts = accepted transfers + other intended outputs + actual losses/releases + closing stock, adjusted only for separately measured water or material changes. Pair internal transfers once and require nonnegative exchanges. A 1 kg final denominator does not fix upstream catch or live intake to 1 kg. | `wild-crab-foreground-method` |
| `validate_technology` | capture | Reconcile gear deployed/retrieved/lost/recovered and bait charged/retrieved/consumed/remaining by deployment. Preserve observed ghost-fishing, entanglement, bottom contact and unknown fate outside mere mass totals. Confirm every claimed non-pot delta using actual method-specific effort, catch and impact records; no borrowed stock-status, sustainable-fishery or universal no-habitat-effect claim. | `wild-crab-foreground-method` |
| `validate_hold_state` | live_hold; fresh_chill; presentation | Live survivors, eligible fresh diversions and nonqualifying mortality are disjoint. Fresh diversion requires separately documented actual death/handling history and lawful acceptance; unknown deaths remain a gap or reject. Check node activation, before/after states, lot time and bypass transfer equivalence. Neither zero-duration holding nor unobserved feed/gas/effluent may be inferred from missing logs. | `wild-crab-foreground-method` |
| `validate_ranges` | all cards | For supplied nonfinal Ranges verify the same numerator unit per 1 kg reference flow and independent U_row evidence under reference_envelope. Cards without Ranges record an unresolved independent range-evidence need, not a claim that a protocol-derived interval already exists. Before numerical QA establish the instance envelope from a separate representative campaign or supplier evidence, retaining scope, sample size and uncertainty; absent evidence is a gap, never QA-cleared, a default quantity or zero. Preserve and investigate real outliers without clipping. Final 1..1 kg is reference normalization only. | `wild-crab-foreground-method` |
| `validate_ownership` | all nodes | Check all intended outputs/handoffs, failed-trip burden, stock carryover, shared-node/period shares and packaging returns. One physical fuel, water, operating-service or asset event has one burden owner; upstream supplier burdens and actual direct releases cannot be omitted or duplicated. Check material and water ledgers separately from pollutant/species ledgers. | `wild-crab-foreground-method` |
| `validate_binding` | all exchanges | Resolve each actual exchange to a separately confirmed concrete identity, property, unit and relevant geography/state/compartment before downstream process publication. Conditional umbrella cards may instantiate multiple actual substances/materials, never a fixed generic UUID. Exact fixed electricity/ice/CO2 cards apply only to their declared conditions; quantity factors require independent evidence. Identity and measurement validation do not certify food safety or fishery sustainability. | `wild-crab-foreground-method` |
| `validate_secondary_bait` | capture_bait | Check prior system, recovery/supply handoffs, actual composition/state, inheritance/cut-off decision and duplicate burdens. Missing supplier evidence remains a gap; do not import experimental catch efficiency, sustainability assertions or negative-carbon credit. | `cerbule-secondary-bait-2023`; `wild-crab-foreground-method` |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground wild-capture whole-food-crab production package at the declared first handover |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual matching wild species/habitat/gear and whole-food state/gate as declared, with verified concrete downstream exchanges and complete amounts |
| excluded_use | Meat/parts, aquaculture/induced molt/growth, frozen/cooked product, retail gate, edible-portion conversion, sustainability or food-safety certification |
| required_metadata | All reference qualifiers; operating unit; actual node activation; transfer/state/ownership ledgers; reporting/stock/asset periods; intended outputs and allocation |
| required_quality_disclosure | Identity and range gaps, qualitative source limits, measurement/sampling uncertainty, actual upstream coverage, uncharacterized ecological effects and alternative allocation sensitivity |
| update_trigger | Changed species/gear/body-state/gate, holding/chilling route, jurisdictional acceptance, supplier/energy mix, mortality/bycatch pattern, asset service period or new quantitative/identity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 04311 wild crab broad product scope, not a route or quantity recipe |
| noaa-traps-pots | official_guidance | https://www.fisheries.noaa.gov/national/bycatch/fishing-gear-traps-and-pots | Qualitative pot/trap bait, rope/buoy, deployment and interaction questions; no universal rates or risk-reduction quantity |
| noaa-blue-crab-commercial | official_guidance | https://www.fisheries.noaa.gov/species/blue-crab/commercial | US blue-crab example of alternative capture gear and shell/molt versus edible-portion distinction; not generic species biology, legal rules or weight factors |
| wild-crab-foreground-method | method_factor | Declared foreground method in sections 4–9 of this PCR: calibrated net wet weighing; actual transfer/stock and attribution ledgers; independent reference-envelope screening | Self-contained collection, normalization, reference-definition and conditional range method, not a published empirical dataset or a source of invented numeric amounts |
| cerbule-secondary-bait-2023 | literature | Cerbule K, Grimsmo L, Herrmann B, Grimaldo E. Heliyon 9(3), e13820 (2023). https://doi.org/10.1016/j.heliyon.2023.e13820 | Actual experimental processing-by-product bait route in snow-crab pot fishing; supports origin/recovery boundary questions only, not current composition, dosage, catch efficiency or lifecycle credits. |
