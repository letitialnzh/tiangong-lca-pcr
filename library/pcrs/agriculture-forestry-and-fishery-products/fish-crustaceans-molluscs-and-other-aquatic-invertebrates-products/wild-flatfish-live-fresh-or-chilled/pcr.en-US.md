---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-flatfish-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Whole wild food flatfish at first producer handover

## 1. Scope and Applicability

This PCR covers actual wild-caught whole food flatfish delivered live, fresh or chilled at the first producer or collector handover. Whole means unheaded and ungutted fish, not fillets, meat or roe. One declared vessel/collector operating unit and traceable trip/campaign may contain multiple actual species or gear events; it is not a federated multisite average. Managed fish production, wild seed/feed/ornamental final use, gutted or headed fish, freezing and processed products are excluded. Actual first-gate location and responsibility control inclusion, not an assumed port. The official classification is broader than this whole-food first-gate boundary. [un-cpc3-flatfish]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-flatfish-live-fresh-or-chilled |
| classification_refs | CPC 3.0 04231; narrower |
| covered_products | Whole wild food flatfish with actual species, grade and live/fresh/chilled state at first producer handover |
| excluded_products | Farmed fish; non-food seed/feed/ornamental products; headed/gutted fish; detached parts/fillets/meat/roe; frozen/cooked/processed fish |
| representative_product | One declared species/state lot of whole wild food flatfish, without a universal species example or conversion |
| production_route | Independent capture parent with evidenced gear deltas -> actual pre-sort preservation or bypass -> grade -> actual post-grade preservation or bypass -> presentation |
| market_state | Actual live, fresh or chilled whole food fish; different states remain separate lots |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted whole wild food flatfish at actual first producer handover |
| How much | 1 kg |
| How well | Food acceptance evidenced; actual species, state and grade; unheaded and ungutted; exclude extraneous water, ice and packaging |
| How long or cycle | One declared gate lot traced to trip/campaign, maintenance/idle periods, opening/closing stocks and asset service periods |
| reference_flow_link | `whole_flatfish_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole wild food flatfish at first producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | verified species/taxonomy; wild origin; actual waterbody/marine-inland context; gear events; whole unheaded ungutted condition; food grade and acceptance evidence; live/fresh/chilled state; deliberate killing/mortality history; net mass method; first gate/owner/time; trip/campaign and stock periods |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted net whole fish using a calibrated scale at the actual gate; exclude packaging, ice and extraneous water, not native organs or natural retained body fluids. Counts require same-species/state/grade measured samples, not a generic edible yield. |
| `energy_units` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter kWh and convert with 1 kWh = 3.6 MJ using the energy unit group; no kg conversion and no inferred fuel heating value. |
| `water_mass` | water and effluent rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use direct mass or actual density with measured temperature/salinity for volume records; never force seawater, saline effluent or oxygen volume to water density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild population and actual capture effort at a named waterbody; owned assets and purchased input upstream burdens included |
| starting_condition_role | Natural resource-to-catch foreground start, not managed biological production |
| product_classification_scope | CPC 3.0 04231 narrower whole-food first-gate methodology |
| recursive_input_rule | Purchased whole fish already past a first producer handover is outside this reference route and cannot be recursively relabelled own capture. Same-category fish purchased as bait is a separately identified supplier input with actual upstream capture and preservation burdens, not this reference product. |
| upstream_dataset_requirement | Compatible product supply state, location, technology and period for each purchased input or service; disclose omissions and substitutions |
| disclosure | Actual gate and ownership; capture technique/habitat; all active nodes and bypasses; state/stock transitions; asset periods; joint outputs and allocation; quantified evidence gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `capture_primary` | capture; grade; preserve; presentation | This record starts with wild resource removal by the declared single operating unit, includes upstream burdens for purchased inputs and attributed assets, and ends at the actual first producer or collector handover. Natural reproduction is not a zero-priced hatchery operation. Purchased same-category fish already beyond its first producer gate is outside the reference route; actual purchased bait retains separately identified supplier capture and preservation burdens and is not this lot's own catch. | `foreground-flatfish-method` |
| `state_chain` | all lots | Every transfer retains species, observed live/fresh/chilled state, time, net mass, lot and pass id. Pre-sort preservation routes captured_unsorted through preserve_unsorted_in/preserved_unsorted to grade_catch_in; absence uses the direct same-state capture-to-grade edge. Post-grade preservation routes graded_food through preserve_fish_in/preserved_food to presentation_fish_in; absence uses the direct same-state grade-to-presentation edge regardless of earlier preservation. One pass produces one corresponding output; the two passes are not rework of the same completed output. Assign all intervention, mortality, water/ice stocks and losses to actual pass records, with capture-owned onboard fuel recorded once. Unknown sequence, state or food eligibility blocks finalization. | `foreground-flatfish-method` |
| `gear_delta` | capture | Declare bottom trawl, stationary/pound/gillnet, line or another evidenced technique as a capture-parent delta. Trawl records require bottom-contact track, duration, gear geometry and seabed context; passive nets require deployed area/length, soak and retrieval; lines require hook effort and actual bait. Multiple gears may coexist only as separate logged events; one event cannot be classified as two competing routes. Preserve current site evidence instead of extrapolating US summer-flounder performance, regulation or stock status to all flatfish. | `noaa-summer-flounder`; `foreground-flatfish-method` |
| `pre_gate_responsibility` | all nodes | All producer-owned activity actually before the first gate is included, including pre-gate shore movement, cleaning and bounded holding. Consumer distribution, filleting, heading/gutting, freezing, managed grow-out, seed/feed/ornamental final use and processing are outside the covered final product. A transshipment gate is the gate if that is the first actual producer handover; do not automatically add a later port stage. Distinguish product custody gate from resource/service accounting-period closure: an at-sea first gate is not moved to port, but actual trip-period ledgers assign necessary producer return-to-base, idling and return-cycle preparation once, with actual closure time and evidenced shares for other trips. Exclude buyer distribution and later unrelated capture; never charge the same return again to the next campaign. | `foreground-flatfish-method` |
| `ownership_closure` | all nodes | Assign one owner to vessel fuel, shore utilities, shared service events, external water, natural abstraction, ice manufacture, wastewater treatment and gear events. Vessel fuel in capture includes onboard preservation power; own ice inputs replace purchased ice production. External treatment/service inputs carry provider resources, not duplicated direct provider emissions. Track opening/closing fish, water, fuel, gear, refrigerant and reusable-container stocks. | `foreground-flatfish-method` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Wild capture and collection | `required` | Every declared wild capture trip or collection campaign | Source-to-collected catch; one vessel or collector operating unit | `captured_unsorted` |
| `grade` | Grade and destination sorting | `required` | Classify all collected lots into actual species, food grades and destinations; disclose inspection-only lots with no rejects | Complete destination partition; not a second capture operation | `graded_food` |
| `preserve` | Bounded holding and whole-fish preservation | `conditional` | Actual owned pre-gate holding/killing/chilling before sorting and/or after grading; record independent pass ids and same-state bypass for each absent pass | Observed usable-state intervention with stock and losses | per 1 kg final reference flow; measured preserved_unsorted for pre_sort and preserved_food for post_grade, each only in its actual pass |
| `presentation` | Presentation and first producer handover | `required` | Every final reference lot, whether bulk or packaged | Actual final state and net fish acceptance at first producer gate | `whole_flatfish_handover` |

### Process: Wild capture and collection (`capture`)

Capture independently removes organisms from the declared wild source; it is not managed reproduction. Record species and initial live/fresh state with removal time. Collected whole mixed catch routes directly to grade or through the actual pre-sort preservation pass; the preservation pass, not capture biology, owns chilling and resulting state/loss. The complete attributable producer trip, including outbound travel, search, deployment, hauling, onboard equipment, actual necessary return-to-base and idling after an at-sea first gate, has one capture fuel ledger. Product custody still ends at that first handover; later unrelated capture and buyer distribution are excluded. Sorting and preservation may overlap physically but transfer/pass records separate responsibilities and never duplicate quantities.

#### Inputs

##### Product flows

###### Separately measured liquid water (`capture_internal_water_ice_receipt_water`)

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

###### Separately measured solid water ice (`capture_internal_water_ice_receipt_ice`)

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



###### Purchased shore electricity for capture preparation (`capture_shore_electricity`)

Use actual supplier, voltage, geography and meter period. Separate shore electricity from electricity generated with already recorded onboard fuel.

- Selected flow: Purchased shore electricity for capture preparation
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

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



###### Collected whole unsorted catch at sorting handoff (`captured_unsorted`)

Measure whole mixed retained catch at the capture-to-next-responsibility interface with species estimates, observed initial live/fresh state, time and transfer id. Route to preserve_unsorted_in for an actual pre-sort preservation pass, otherwise grade_catch_in directly in the same state. This is not final output or fixed one kg; any subsequent chilling state belongs to the actual preservation pass, not capture biology.

- Selected flow: Collected whole unsorted catch at sorting handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to unspecified air (`capture_fossil_co2`)

Only actual direct fossil combustion owned by the capture fuel ledger is included. Use fuel-carbon/composition evidence and an independently documented oxidation method; the flow identity provides no emission factor. More specific compartments require separate identities.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `foreground-flatfish-method`
- Binding: `fixed`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

### Process: Grade and destination sorting (`grade`)

Receive captured_unsorted directly or preserved_unsorted from actual pre-sort preservation, matched by transfer/pass id and observed state. Food-qualified flatfish of each grade proceed directly to presentation or to an actual post-grade preservation pass. Other intended species/non-food sales, live release, direct environmental discard and managed waste have separate destinations. Every umbrella expands to independently identified actual exchanges; no universal mixed-species UUID is asserted.

#### Inputs

##### Product flows

###### Separately measured liquid water (`grade_internal_water_ice_receipt_water`)

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

###### Separately measured solid water ice (`grade_internal_water_ice_receipt_ice`)

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



###### Collected whole unsorted catch received for sorting (`grade_catch_in`)

Receive exactly one measured upstream transfer: captured_unsorted on pre-sort preservation bypass, or preserved_unsorted after an actual pre-sort pass. Retain species and observed state, including chilled unsorted catch, and exclude ice, containers and extraneous water. Sorting does not imply every incoming fish is food-qualified.

- Selected flow: Collected whole unsorted catch received for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Purchased grading electricity at actual supply gate (`grade_electricity`)

Record meter or justified equipment operating allocation; vessel-powered deck grading consumes the capture-owned fuel ledger without adding purchased electricity.

- Selected flow: Purchased grading electricity at actual supply gate
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Externally supplied grading or hygiene water (`grade_water_supply`)

Record supplier and treatment state. This is not own abstracted seawater and does not imply washing or gutting of fish.

- Selected flow: Externally supplied grading or hygiene water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separately measured liquid water (`grade_internal_water_ice_transfer_water`)

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

###### Separately measured solid water ice (`grade_internal_water_ice_transfer_ice`)

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



###### Food-qualified whole flatfish by accepted or downgraded food grade (`graded_food`)

Record every accepted or downgraded food grade by species, observed live/fresh/chilled state and transfer. Send to preserve_fish_in only for an actual additional post-grade preservation pass; otherwise to presentation_fish_in directly in the same state, even if pre-sort preservation already occurred. Food acceptance is independently evidenced; incompatible state lots remain separate.

- Selected flow: Food-qualified whole flatfish by accepted or downgraded food grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

##### Waste flows

###### Grading wastewater sent to external treatment (`grade_wastewater_service`)

Record water mass, composition, service recipient and sludge handoff. If treatment is external, do not duplicate its future elementary effluent as owned direct discharge.

- Selected flow: Grading wastewater sent to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

##### Elementary flows

###### Actual grading water returned directly to receiving water (`grade_direct_water_return`)

Measure bulk water separately from individually characterized pollutant constituents. Account evaporation and stock changes; water return does not prove clean quality or zero pollutant load.

- Selected flow: Actual grading water returned directly to receiving water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Water actually evaporated to the identified air compartment (`grade_actual_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Conditional evidenced evaporation only, with measured/modelled mass, period, receiving air and uncertainty; reconcile intake, transfers, stocks and other water fates. Not an unsupported balancing plug or a duplicate vapour emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: U_grade_actual_water_evaporation
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

### Process: Bounded holding and whole-fish preservation (`preserve`)

This one preservation responsibility may have a pre-sort pass (preserve_unsorted_in -> preserved_unsorted -> grade) and a post-grade pass (preserve_fish_in -> preserved_food -> presentation). These are distinct chronological pass records, not a fictitious rework loop or both outputs for one pass. Actual timing determines which pass occurs; capture -> onboard chill -> landing grade -> dispatch is supported without inventing initial sorting. The pre-sort output is unqualified mixed catch; grade owns its eventual food acceptance or destination decision. Already fresh catch needs no invented kill. Live cooling is not death; mortality and deliberate killing are separate observations. Each pass owns all holding resources, water/ice stocks, releases and losses once, while capture owns all onboard fuel/generation. Bounded maintenance may include documented feed but excludes intentional growth/fattening. Unknown actual sequence/state/food eligibility blocks finalization.

#### Inputs

##### Product flows

###### Separately measured liquid water (`preserve_internal_water_ice_receipt_water`)

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

###### Separately measured solid water ice (`preserve_internal_water_ice_receipt_ice`)

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



###### Food-qualified whole flatfish entering bounded preservation (`preserve_fish_in`)

Only an actual post-grade preservation pass receives this measured food-qualified whole-flatfish transfer from graded_food. Preserve recorded incoming state and net biological amount, not final one kg. A pre-sort unqualified mixed-catch pass uses preserve_unsorted_in instead.

- Selected flow: Food-qualified whole flatfish entering bounded preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Ice for capture fishery onboard or landing-port chilling (`preserve_capture_ice`)

Only actual externally supplied capture chilling ice uses this identity. Record manufacture/supply boundary and purchased mass; own ice making uses owned water/energy inputs instead of a purchased ice production burden. Ice is not fish mass and live-cooling eligibility remains observed.

- Selected flow: Ice for capture fishery onboard or landing-port chilling `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Binding: `fixed`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Delivered oxygen for actual bounded live holding (`preserve_oxygen`)

Only active for actual oxygen supply; record purity, delivery state and measured kg. An oxygen factory flow with a volume reference is not automatically a delivered mass identity; any conversion needs state-specific evidence.

- Selected flow: Delivered oxygen for actual bounded live holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Externally supplied preservation or holding water (`preserve_water_supply`)

Record actual treatment state and supplier. Gross recirculating pump flow is not new supply; distinguish makeup, own abstraction and purchased water.

- Selected flow: Externally supplied preservation or holding water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Purchased electricity for owned shore holding and chilling (`preserve_electricity`)

Meter actual pumps, chillers and aeration with time and supplier qualifiers. Do not add an electricity purchase for onboard generation already represented by capture_fuel or for an external chilling service that owns this electricity.

- Selected flow: Purchased electricity for owned shore holding and chilling
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Whole unsorted captured catch entering pre-sort preservation (`preserve_unsorted_in`)

Use only for an actual pre-sort holding or chilling pass. Pair directly with captured_unsorted; food qualification and destination sorting have not yet been completed. Record every species/state, actual biological mass, pass id and time; do not substitute the post-grade preserve_fish_in card.

- Selected flow: Whole unsorted captured catch entering pre-sort preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separately measured liquid water (`preserve_internal_water_ice_transfer_water`)

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

###### Separately measured solid water ice (`preserve_internal_water_ice_transfer_ice`)

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



###### Food-qualified whole flatfish after actual preservation (`preserved_food`)

Only a post-grade preservation pass outputs this food-qualified whole-flatfish transfer to presentation. Record actual state and measured amount after losses; deliberate killing or mortality cannot remain live. Fresh/chilled food acceptance needs independent evidence. A pre-sort pass outputs preserved_unsorted to grading instead.

- Selected flow: Food-qualified whole flatfish after actual preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Whole preserved unsorted catch at grading handoff (`preserved_unsorted`)

This is an actual pre-sort preservation output to grade_catch_in, not food-qualified final fish. Preserve observed state and measured mass after pass-owned losses. Mortality stays identified for grade food acceptance or rejection; no pre-sort animal is silently certified edible.

- Selected flow: Whole preserved unsorted catch at grading handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

##### Waste flows

###### Holding water or ice melt sent to external treatment (`preserve_wastewater_service`)

Record actual mass and composition, service boundary and recipient. Melt is water from supplied or owned ice, not a second freshwater abstraction.

- Selected flow: Holding water or ice melt sent to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

##### Elementary flows

###### Actual preservation effluent water discharged directly (`preserve_direct_water_return`)

Close intake, purchased water, ice melt, evaporation and opening/closing tank storage. Recirculation is internal; direct bulk water return and constituent emissions are different measurements, not interchangeable pollutant mass.

- Selected flow: Actual preservation effluent water discharged directly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Fossil carbon dioxide from owned shore preservation to unspecified air (`preserve_fossil_co2`)

Only preservation-owned shore fuel direct emissions; capture-owned onboard emissions remain in capture. Evidence the actual fuel composition and emission calculation independently of UUID selection.

- Selected flow: Fossil carbon dioxide from owned shore preservation to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Binding: `fixed`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Water actually evaporated from owned holding and chilling (`preserve_evaporated_water`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Record measured or independently evidenced evaporation when material to water balance; exclude internal circulation and undocumented balancing plugs.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_preserve`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

### Process: Presentation and first producer handover (`presentation`)

First-gate presentation receives graded_food when post-grade preservation is absent, or preserved_food when a post-grade pass actually occurred; pre-sort preservation may still have occurred in either route. Match one last upstream source, observed state and measured quantity. No killing/chilling is silently assigned to this gate. Continuing holding resources/losses remain owned by a matched preservation pass through the actual gate; presentation does not own a duplicate holding event. Bulk or packaged presentation records actual package materials/reuse separately; distribution after first handover is outside.

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



###### Food-qualified whole flatfish at presentation entry (`presentation_fish_in`)

Receive exactly one actual last upstream transfer: graded_food where no post-grade preservation occurs, or preserved_food after an actual post-grade pass. Pre-sort preservation alone does not select preserved_food. Match species, observed state and measured mass; never fix receipt to one kg.

- Selected flow: Food-qualified whole flatfish at presentation entry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_presentation`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Purchased presentation and pre-gate shore handling electricity (`presentation_electricity`)

Use actual meter and consumption period for scales, packing equipment and owned shore handling. Chilling electricity remains with preserve through the actual gate.

- Selected flow: Purchased presentation and pre-gate shore handling electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_presentation`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Purchased reusable-container cleaning water (`presentation_water_supply`)

Record actual supplier water for owned cleaning before gate or uniquely attributed return-cycle cleaning; exclude external cleaning service resources already carried by that service.

- Selected flow: Purchased reusable-container cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_presentation`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

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



###### Whole wild food flatfish at first producer handover (`whole_flatfish_handover`)

One qualifying state/species/grade lot at the actual first handover, unheaded and ungutted. Net fish mass excludes water, ice, packaging and containers; no fillet yield or edible conversion is used. Record retained natural body fluids consistently.

- Selected flow: Whole wild food flatfish at first producer handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value `fixed_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Method formula `method_formula`
- Collection protocol: `cp_presentation`
- Sources: `foreground-flatfish-method`
- Range: Exact final reference quantity
  - Range role: Allowed range `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Method formula `method_formula`
  - Sources: `foreground-flatfish-method`

##### Waste flows

###### Presentation cleaning water sent to external treatment (`presentation_wastewater_service`)

Record actual waste composition and service receiver. If direct discharge occurs instead, separately resolve bulk water and actual constituents under direct-discharge cards; never infer an external service.

- Selected flow: Presentation cleaning water sent to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_presentation`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

##### Elementary flows

###### Actual presentation cleaning water directly returned to environment (`presentation_direct_water_return`)

Record only actual directly discharged water and receiving waterbody; close supply, storage and evaporation, excluding any quantity sent to external treatment.

- Selected flow: Actual presentation cleaning water directly returned to environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_presentation`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Fossil carbon dioxide from owned shore handling to unspecified air (`presentation_fossil_co2`)

Only actual presentation_shore_fuel direct fossil combustion; do not duplicate capture vessel, preservation fuel or external service emissions.

- Selected flow: Fossil carbon dioxide from owned shore handling to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_presentation`
- Sources: `foreground-flatfish-method`
- Binding: `fixed`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

###### Water actually evaporated to the identified air compartment (`presentation_actual_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Conditional evidenced evaporation only, with measured/modelled mass, period, receiving air and uncertainty; reconcile intake, transfers, stocks and other water fates. Not an unsupported balancing plug or a duplicate vapour emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once.
- Value mode: Calculated value `calculated_value`
- Specificity: Site-specific `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow `reference_flow`
- Evidence kind: Calculated from collection `calculated_from_collection`
- Collection protocol: `cp_presentation`
- Sources: `foreground-flatfish-method`
- Range: Provisional broad screening envelope, not an inventory default
  - Range role: QA guardrail `qa_guardrail`
  - Lower: 0
  - Upper: U_presentation_actual_water_evaporation
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow `reference_flow`
  - Evidence kind: Reasoned estimate `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide_first` | all shared burdens | First subdivide physically separable gear events, species-directed trips, node meters and independently supplied services using observed records. Do not allocate a common vessel trip twice as capture and a transport service. | `foreground-flatfish-method` |
| `intended_output_set` | grade_other_intended_products; preserve_nonfood_sale; presentation_nonfood_sale | Enumerate all independent intended species/food-grade/non-food sale outputs and actual handover gates. For irreducible joint capture burdens, use an evidenced physical causal relationship where demonstrable; otherwise disclose an economic allocation using actual same-period ex-gate net revenues of every intended output. Record rationale, prices, quantities, uncertainty and mass-based sensitivity. Do not use economic allocation when causal subdivision is evidenced. Rejects, releases and waste are not intended sale outputs merely because they have mass; treatment burdens remain with generating operations and there are no automatic substitution credits. | `foreground-flatfish-method` |
| `period_assets` | capture_assets; preserve_assets; presentation_returnable_assets | Index trips/campaigns, maintenance/idle periods, holding across cutoffs and final gate lots. Attribute assets by observed service/usage over declared build, operating, replacement and termination periods; disclose residual capacity and decommissioning. Link opening stocks to prior-period burdens and closing stocks to future outputs without charging both. Never assume a universal vessel, net or crate life. | `foreground-flatfish-method` |
| `shared_consumers` | capture; grade; preserve; presentation | Keep a shared-asset/service ledger listing the vessel or site asset, every consuming node and period, measured causal driver and shares summing to one. Vessel manufacture/fuel have capture ownership; present their allocation across all fish sale outputs rather than booking a full asset in each downstream node. Shore shared assets and cleaning/changeover events use metered or causal usage; record any fallback and sensitivity explicitly. Never add both an external service and its complete resources. | `foreground-flatfish-method` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | Source-to-collected catch; one vessel or collector operating unit | Measured records and supported derived quantities | event_id; pass_id; trip/campaign; lot/transfer_id; species; gear; live/fresh/chilled condition; food eligibility; timestamp/gate; owner; raw amount/unit; opening/closing stock; destination; meter/tank; concentration/carbon/density factors and sources; share driver; final accepted net kg | Use calibrated mass measurements, paired handover records, meters/tank stock reconciliation and representative state-specific count/density samples. Identify every actual exchange in umbrella cards. Capture additionally logs effort/bottom contact/incidental catch/gear events; grade records every destination; preserve records intervention, mortality, water and refrigerant closure; presentation verifies calibrated final net mass excluding ice/water/packaging. Derived emissions retain independently evidenced composition/factor and calculation. | kg; MJ | Every event/transfer and meter interval; reconcile each trip/campaign and cutoff | Complete declared reporting period, maintenance/idle events, opening/closing stocks and asset service phases | Only this real node within the declared single operating unit | per 1 kg reference flow | Calibration; source documents; stock/transfer closure; factor provenance; independent samples; independent held-out campaign review for replacement of provisional screens |
| `cp_grade` | `grade` | Complete destination partition; not a second capture operation | Measured records and supported derived quantities | event_id; pass_id; trip/campaign; lot/transfer_id; species; gear; live/fresh/chilled condition; food eligibility; timestamp/gate; owner; raw amount/unit; opening/closing stock; destination; meter/tank; concentration/carbon/density factors and sources; share driver; final accepted net kg | Use calibrated mass measurements, paired handover records, meters/tank stock reconciliation and representative state-specific count/density samples. Identify every actual exchange in umbrella cards. Capture additionally logs effort/bottom contact/incidental catch/gear events; grade records every destination; preserve records intervention, mortality, water and refrigerant closure; presentation verifies calibrated final net mass excluding ice/water/packaging. Derived emissions retain independently evidenced composition/factor and calculation. | kg; MJ | Every event/transfer and meter interval; reconcile each trip/campaign and cutoff | Complete declared reporting period, maintenance/idle events, opening/closing stocks and asset service phases | Only this real node within the declared single operating unit | per 1 kg reference flow | Calibration; source documents; stock/transfer closure; factor provenance; independent samples; independent held-out campaign review for replacement of provisional screens |
| `cp_preserve` | `preserve` | Observed usable-state intervention with stock and losses | Measured records and supported derived quantities | event_id; pass_id; trip/campaign; lot/transfer_id; species; gear; live/fresh/chilled condition; food eligibility; timestamp/gate; owner; raw amount/unit; opening/closing stock; destination; meter/tank; concentration/carbon/density factors and sources; share driver; final accepted net kg  actual service provider/scope/functional unit/property/unitgroup and unresolved support; water/ice source/destination and paired ids; physical packaging dispatch/return/stock;| Use calibrated mass measurements, paired handover records, meters/tank stock reconciliation and representative state-specific count/density samples. Identify every actual exchange in umbrella cards. Capture additionally logs effort/bottom contact/incidental catch/gear events; grade records every destination; preserve records intervention, mortality, water and refrigerant closure; presentation verifies calibrated final net mass excluding ice/water/packaging. Derived emissions retain independently evidenced composition/factor and calculation. | kg; MJ  collect each service separately in verified provider-native functional unit provider_service_unit, not material kg;| Every event/transfer and meter interval; reconcile each trip/campaign and cutoff | Complete declared reporting period, maintenance/idle events, opening/closing stocks and asset service phases | Only this real node within the declared single operating unit | per 1 kg reference flow | Calibration; source documents; stock/transfer closure; factor provenance; independent samples; independent held-out campaign review for replacement of provisional screens |
| `cp_presentation` | `presentation` | Actual final state and net fish acceptance at first producer gate | Measured records and supported derived quantities | event_id; pass_id; trip/campaign; lot/transfer_id; species; gear; live/fresh/chilled condition; food eligibility; timestamp/gate; owner; raw amount/unit; opening/closing stock; destination; meter/tank; concentration/carbon/density factors and sources; share driver; final accepted net kg  actual service provider/scope/functional unit/property/unitgroup and unresolved support; water/ice source/destination and paired ids; physical packaging dispatch/return/stock;| Use calibrated mass measurements, paired handover records, meters/tank stock reconciliation and representative state-specific count/density samples. Identify every actual exchange in umbrella cards. Capture additionally logs effort/bottom contact/incidental catch/gear events; grade records every destination; preserve records intervention, mortality, water and refrigerant closure; presentation verifies calibrated final net mass excluding ice/water/packaging. Derived emissions retain independently evidenced composition/factor and calculation. | kg; MJ  collect each service separately in verified provider-native functional unit provider_service_unit, not material kg;| Every event/transfer and meter interval; reconcile each trip/campaign and cutoff | Complete declared reporting period, maintenance/idle events, opening/closing stocks and asset service phases | Only this real node within the declared single operating unit | per 1 kg reference flow | Calibration; source documents; stock/transfer closure; factor provenance; independent samples; independent held-out campaign review for replacement of provisional screens |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `event_normalization` | all inventory rows | Keep two explicitly labelled views. First reconcile unallocated physical receipts, transfers, products, losses and stocks for the complete declared cohort/trip/run; pair internal transfers in the same state and unit, retaining their measured mass. Assign shared resource/service events to actual consuming nodes and periods once using evidenced service shares, without shrinking product, biomass, water or waste partitions by a co-product share. Divide this physical inventory by the matching positive accepted final net kg. Separately derive a labelled single-output LCA burden/inventory projection using section 7 co-product allocation exactly once, retaining the unallocated inventory and allocation matrix. Never test allocated exchanges against an unallocated physical balance, apply output shares again downstream, or set an internal quantity to the final 1 kg. | event records; share drivers; final accepted net kg | amount per 1 kg reference flow | `foreground-flatfish-method` |
| `quantity_derivations` | water; exhaust; count-recorded biomass | Convert counts using measured matching species/state mass samples; convert volume with actual condition-specific density; derive actual emissions from documented fuel/carbon/oxidation or equipment factors and actual activity. Record every factor, source, unit, uncertainty and intermediate calculation; no numeric factor other than verified unit conversion is supplied by this PCR. | matching samples; density/composition/factor evidence; actual activity | traceable mass/energy/emission quantities | `foreground-flatfish-method` |
| `conditional_interface_envelopes` | capture_internal_water_ice_receipt; capture_internal_water_ice_transfer; grade_internal_water_ice_receipt; grade_internal_water_ice_transfer; grade_actual_water_evaporation; preserve_internal_water_ice_receipt; preserve_external_service; preserve_internal_water_ice_transfer; presentation_internal_water_ice_receipt; presentation_external_service; presentation_actual_source_water; presentation_internal_water_ice_transfer; presentation_water_ice_handover; presentation_actual_water_evaporation | For each explicitly listed conditional interface card instantiate actual identity, state, node, pass and numerator unit before establishing U_row from the same-view normalized maximum of an independent representative campaign times a predeclared margin at least 1, or a matching-unit/basis supplier design envelope. Retain samples, source, basis and uncertainty; never use the target batch to establish its own upper bound. Unverified service unit/support or absent independent envelope remains an unresolved instance, not numeric QA-cleared or zero. Reconcile physical water/ice/packaging movements separately from service-share quantities. | independent reference records; actual unit and basis | U_row | `foreground-flatfish-method` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all lots | Species/state/food eligibility and actual first-gate ownership must be explicit; do not infer from CPC or a broad flow label. | Traceable species/catch/custody and acceptance records |
| `dq_effort` | capture | Represent complete trips, seasonal conditions, gear coexistence, return/idling and incidental catch; disclose missing observers, spatial coverage and uncharacterized ecological effects. | Trip logs; tracks; gear and species observations |
| `dq_balance` | all nodes | Document stock and transfer closure with uncertainty and non-zero unresolved residuals disclosed; no invented balancing flows. | Calibrations; matched transfers; opening/closing inventory |
| `dq_quantitative` | all amounts | Collect actual amount evidence. Provisional screening envelopes provide no factor or measured value, and held-out campaign checks cannot be substituted by testing a batch against its own maximum. | Primary measurements; independently sourced factors; held-out samples |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_capture_fuel` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual vessel or collector fuel by grade and supply gate”; retain all following collection, quantity and normalization obligations: Reconcile purchases plus opening tank stock minus closing stock and documented non-system use. Keep marine and inland capture distinct; a freshwater-capture diesel identity cannot represent marine fuel. All onboard consumers, including power for other nodes, are assigned once in the vessel ledger. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_gear_materials` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Capture gear production and replacements by material”; retain all following collection, quantity and normalization obligations: Resolve nets, doors, ground rope, floats, lines and other actual gear into material exchanges with service-life or usage shares. Do not assume a trawl for every flatfish fishery. Lost gear and recovered gear are recorded separately, without automatic replacement credits. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual line or other bait by species and source”; retain all following collection, quantity and normalization obligations: Only active for a documented bait-using technique. Record upstream production, preservation and bait not taken by catch; no bait is invented for an unbaited net. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_lubricants` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Consumed lubricants and maintenance materials”; retain all following collection, quantity and normalization obligations: Retain product composition, additions, recovered spent material and spills; distinguish consumption from opening stocks. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_assets` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Attributed vessel and capture equipment materials”; retain all following collection, quantity and normalization obligations: Record build, refit and replacement material inventories with the observed share of the vessel service period. The same vessel is not purchased anew for every node or trip. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_internal_water_ice_receipt` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual internally received water or ice”; retain all following collection, quantity and normalization obligations: Only an actual transfer from another declared node activates this role. Split water/ice by actual state, source owner and transfer/event/pass id; match the sender measured quantity and composition, without another abstraction, purchase or production burden. Same-node circulation is an auxiliary stock ledger, not a new transfer. Exclude carrier already included in another material card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_wild_biomass_removed` | `capture`; inputs; elementary | Identify and separately collect every actual exchange covered by “Wild aquatic biomass removed, resolved by species and waterbody”; retain all following collection, quantity and normalization obligations: Record organisms actually removed from the environment, including retained and subsequently released or discarded catch. A transfer back to the environment is a separate observed event, never an avoided-catch credit. The resource exchange requires an appropriate verified ecological identity before downstream publication. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_internal_water_ice_transfer` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred to another declared node”; retain all following collection, quantity and normalization obligations: Conditional actual measured water/ice transfer only, with receiving node/card and matching source, state, composition, event/pass id, quantity and unit. Preserve opening/closing stocks and melt/evaporation fates. Not an environmental return or a separately sold co-product; no repeated resource withdrawal or supplier burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_managed_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Capture rejects and spent materials sent to managed treatment”; retain all following collection, quantity and normalization obligations: Expand separate fish rejects, spent lubricants and recovered gear by actual waste composition and recipient. A managed service is not a direct elementary discharge. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait_managed_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual unused or spent bait sent to managed treatment”; retain all following collection, quantity and normalization obligations: Record collected bait waste by material and recipient, not the same bait directly lost to water. Usable bait returned to stock is closing stock, not waste or a new purchase; reconcile opening/purchased/used/returned/discarded bait by event. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_live_release` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Observed living incidental catch returned to original waterbody”; retain all following collection, quantity and normalization obligations: Resolve each species and receiving waterbody. Record mass or traceable species count-to-mass sample, condition and time; do not assume survival after release or claim a negative product burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_dead_discard` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Dead or unaccepted biomass discharged directly to water”; retain all following collection, quantity and normalization obligations: Only actual direct environmental discharge uses this role, with species, state, location and authorization recorded. Material sent to a waste handler belongs to capture_managed_waste instead, never both. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_lost_gear` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Lost capture gear released to environment by material”; retain all following collection, quantity and normalization obligations: Record losses and documented retrieval with event ids, waterbody and material. Resolve an appropriate elementary identity for each physical constituent; quantities and ecological consequences are not presumed zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_other_exhaust` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual combustion emissions resolved by substance and compartment”; retain all following collection, quantity and normalization obligations: Expand measured or evidence-calculated species, such as methane, nitrogen oxides with reported species basis, sulfur compounds and particulate size fractions. Never bind an aggregate label to a single substance UUID or reuse fossil CO2 for other gases. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_spills` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual lubricant or fuel spills to receiving medium”; retain all following collection, quantity and normalization obligations: Identify constituent and receiving water, sediment or soil from event evidence. Do not infer a generic oil emission or duplicate collected spent oil managed as waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait_direct_loss` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual bait biomass lost or discarded directly to named waterbody”; retain all following collection, quantity and normalization obligations: Record only actual bait material released to the environment, identified by bait species/material, preparation state, receiving waterbody and event. It is purchased or prepared bait, not wild biomass removed, fish bycatch, lost gear or oil. Do not duplicate later decomposition/nutrient emissions already modeled by a compatible fate model. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_capture; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_capture` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_supplies` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Consumed sorting and hygiene materials by product”; retain all following collection, quantity and normalization obligations: Expand actual gloves, disinfectant formulations and cleaning materials; identify active substance separately if required, without universal recipes or doses. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_grade` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_assets` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Attributed shore grading equipment materials”; retain all following collection, quantity and normalization obligations: Record actual shore scales, conveyors and sorting equipment materials with observed service-period shares. Vessel equipment remains in capture_assets; shared shore assets must not be repeated in preserve_assets or presentation_returnable_assets. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_grade` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_internal_water_ice_receipt` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Actual internally received water or ice”; retain all following collection, quantity and normalization obligations: Only an actual transfer from another declared node activates this role. Split water/ice by actual state, source owner and transfer/event/pass id; match the sender measured quantity and composition, without another abstraction, purchase or production burden. Same-node circulation is an auxiliary stock ledger, not a new transfer. Exclude carrier already included in another material card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_grade` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_water_abstraction` | `grade`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual grading water abstracted from named natural source”; retain all following collection, quantity and normalization obligations: Only actual own abstraction; distinguish seawater and freshwater, extraction location and return quality. Do not add a purchased-water exchange for the same abstraction. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_grade` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_other_intended_products` | `grade`; outputs; product | Identify and separately collect every actual exchange covered by “Other intentionally retained species and non-food sale products”; retain all following collection, quantity and normalization obligations: Expand independently identified outputs with actual first handover, species, use, quantity and price/physical allocation evidence. Non-food flatfish never enters the final food denominator. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_grade` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_internal_water_ice_transfer` | `grade`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred to another declared node”; retain all following collection, quantity and normalization obligations: Conditional actual measured water/ice transfer only, with receiving node/card and matching source, state, composition, event/pass id, quantity and unit. Preserve opening/closing stocks and melt/evaporation fates. Not an environmental return or a separately sold co-product; no repeated resource withdrawal or supplier burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_grade` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_managed_rejects` | `grade`; outputs; waste | Identify and separately collect every actual exchange covered by “Sorting rejects and hygiene residues sent to managed treatment”; retain all following collection, quantity and normalization obligations: Resolve each fish or non-fish material and recipient; exclude items already sold or directly discharged. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_grade` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_live_release` | `grade`; outputs; elementary | Identify and separately collect every actual exchange covered by “Live sorting rejects returned to original waterbody”; retain all following collection, quantity and normalization obligations: Record only releases owned by grade and not already recorded by capture. Pair source lot, species, body condition and actual discharge location; post-release survival requires separate evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_grade` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_direct_biomass_discard` | `grade`; outputs; elementary | Identify and separately collect every actual exchange covered by “Sorting reject biomass directly discharged to actual waterbody”; retain all following collection, quantity and normalization obligations: Separate actual direct discharge from sale and managed waste; retain reasons, state and species. No default legal permission or avoided-treatment credit is asserted. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_grade` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_direct_pollutants` | `grade`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual grading effluent constituents to declared waterbody”; retain all following collection, quantity and normalization obligations: Expand actual substances with measured concentration and flow or an evidenced method, preserving total-versus-dissolved and chemical basis; do not invent a nutrient cocktail. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_grade; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_grade` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_maintenance_feed` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Documented maintenance feed during bounded pre-gate holding”; retain all following collection, quantity and normalization obligations: Record actual feed type and unused feed fate where bounded maintenance includes feeding. Deliberate growth or fattening is outside this wild-capture PCR; no universal assumption of fed or unfed holding is made. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_shore_fuel` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuel for owned shore preservation equipment”; retain all following collection, quantity and normalization obligations: Only actual shore combustion not in capture-owned onboard fuel. Record grade, tank closure, equipment and operation hours; external service fuel belongs to the service provider. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_refrigerant_makeup` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Actual refrigerant charged or replaced by chemical identity”; retain all following collection, quantity and normalization obligations: Keep opening/closing refrigerant stock, recovery and leakage separate. Charging is not equal to leakage; use actual chemical identity and mixture composition. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_other_supplies` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Actual holding hygiene materials and service consumables”; retain all following collection, quantity and normalization obligations: Expand actual disinfectant formulations, filters and consumed materials. Do not require a universal medicine or imply food-safety efficacy from a product input. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_assets` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Attributed shore holding tanks, chillers and equipment materials”; retain all following collection, quantity and normalization obligations: Use asset service-period evidence and consumers; vessel assets remain capture_assets. Share reused tanks and equipment across lots once, not full manufacture per batch. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_internal_water_ice_receipt` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Actual internally received water or ice”; retain all following collection, quantity and normalization obligations: Only an actual transfer from another declared node activates this role. Split water/ice by actual state, source owner and transfer/event/pass id; match the sender measured quantity and composition, without another abstraction, purchase or production burden. Same-node circulation is an auxiliary stock ledger, not a new transfer. Exclude carrier already included in another material card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_external_service` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Actual externally supplied preservation or cleaning service”; retain all following collection, quantity and normalization obligations: Activate only for a real pre-gate outsourced service owned by this node. Instantiate each provider/scope/gate separately, with the actual contractual functional quantity and verified reference property/unit group. provider_service_unit is an unresolved unit variable, never kg of materials: kg-handled, occupied-hour or delivered cooling units are used only when the supplier dataset actually has that reference and a supported measured conversion. Retain native invoices/meters and separately disclose unresolved support/quantity gaps; no downstream exchange publication before verification. Include compatible provider upstream burdens and exclude the same provider utilities/direct releases already inside that service, while retaining producer-owned events outside it. Flow property / unit: Actual service reference property and unit group unresolved / provider_service_unit Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_water_abstraction` | `preserve`; inputs; elementary | Identify and separately collect every actual exchange covered by “Holding water abstracted from actual natural source”; retain all following collection, quantity and normalization obligations: Record source waterbody, salinity category, intake and discharge connection. Once-only abstraction differs from repeated circulation volume. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_nonfood_sale` | `preserve`; outputs; product | Identify and separately collect every actual exchange covered by “Actual non-food by-products sold after holding rejection”; retain all following collection, quantity and normalization obligations: Only actual intended sale with buyer, use and measured amount; classify separately from waste and from the final food denominator. No guaranteed salvage market is assumed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_internal_water_ice_transfer` | `preserve`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred to another declared node”; retain all following collection, quantity and normalization obligations: Conditional actual measured water/ice transfer only, with receiving node/card and matching source, state, composition, event/pass id, quantity and unit. Preserve opening/closing stocks and melt/evaporation fates. Not an environmental return or a separately sold co-product; no repeated resource withdrawal or supplier burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_managed_rejects` | `preserve`; outputs; waste | Identify and separately collect every actual exchange covered by “Holding mortalities and rejected materials sent to managed treatment”; retain all following collection, quantity and normalization obligations: Measure actual mortality/rejected fish, collected unused maintenance feed, spent filters and hygiene residues separately by pass, material, cause and managed recipient. Exclude direct-to-water residues, released fish, actual sale and usable returned stocks. No animal can be qualifying final food and a mortality reject at the same time. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_recovered_refrigerant` | `preserve`; outputs; waste | Identify and separately collect every actual exchange covered by “Recovered spent refrigerant sent to managed recovery”; retain all following collection, quantity and normalization obligations: Record recovered chemical and receiver; do not classify recovered charge as an atmospheric emission or assume a recycling credit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_direct_pollutants` | `preserve`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual preservation effluent substances to declared water”; retain all following collection, quantity and normalization obligations: Expand actual salt, organic or nutrient species with chemical basis, concentration and discharge mass or an evidenced estimate. Exclude pollutants already owned by an external treatment service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_refrigerant_leakage` | `preserve`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual leaked refrigerant by chemical identity to air”; retain all following collection, quantity and normalization obligations: Calculate from a documented refrigerant stock balance with recovery and additions; use measured or evidenced leakage, not all purchases, and resolve each substance or composition before exchange binding. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_other_exhaust` | `preserve`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other owned shore combustion emissions by substance and medium”; retain all following collection, quantity and normalization obligations: Resolve actual species and reported basis from measurements or documented equipment/fuel methods, retaining uncertainty. Do not infer zero because an unverified identity is unavailable. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_feed_direct_loss` | `preserve`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual maintenance-feed residues directly released to named waterbody”; retain all following collection, quantity and normalization obligations: Only actual unconsumed or wasted maintenance feed discharged directly, with pass id, source feed/material state and receiving waterbody. Collected residues sent to a handler belong in preserve_managed_rejects; retained usable feed is stock. Do not duplicate emitted constituent loads already represented by the same whole-residue fate model. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_live_release` | `preserve`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual holding-rejected live fish returned to original waterbody”; retain all following collection, quantity and normalization obligations: Record actual live releases by pass, species, condition, original waterbody, time and applicable authorization. These are not final sold food, managed waste or a repeated capture/grade release; post-release survival is not assumed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_direct_biomass_discard` | `preserve`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual rejected holding biomass discharged directly to water”; retain all following collection, quantity and normalization obligations: Only observed direct environmental discharge, with species, mortality/state, pass id, recipient waterbody and applicable permission. Distinguish from managed treatment and sale; unknown or unlawful disposal cannot be asserted as a default accepted route. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_preserve; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_preserve` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_packaging` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual disposable packaging and labels by material”; retain all following collection, quantity and normalization obligations: Expand actual materials crossing the gate with fish, with mass and upstream supply. Packaging stays outside the net fish denominator; an unpackaged bulk lot has no fictitious disposable pack. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_returnable_assets` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Attributed reusable crates and presentation assets”; retain all following collection, quantity and normalization obligations: Record owned asset material, reuse cycles, actual returns, cleaning owner, loss and termination. Reusable crate manufacture is attributed once across actual uses, not as a new full crate per lot. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_shore_fuel` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual owned pre-gate shore handling fuel”; retain all following collection, quantity and normalization obligations: Only shore handling actually before the first gate; do not add vessel return fuel again and do not include downstream customer distribution. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_cleaning_materials` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual presentation cleaning materials”; retain all following collection, quantity and normalization obligations: Resolve formulations and consumed amounts by cleaning event and lot/return cycle; no universal sanitizer concentration is set. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_internal_water_ice_receipt` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual internally received water or ice”; retain all following collection, quantity and normalization obligations: Only an actual transfer from another declared node activates this role. Split water/ice by actual state, source owner and transfer/event/pass id; match the sender measured quantity and composition, without another abstraction, purchase or production burden. Same-node circulation is an auxiliary stock ledger, not a new transfer. Exclude carrier already included in another material card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_external_service` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual externally supplied preservation or cleaning service”; retain all following collection, quantity and normalization obligations: Activate only for a real pre-gate outsourced service owned by this node. Instantiate each provider/scope/gate separately, with the actual contractual functional quantity and verified reference property/unit group. provider_service_unit is an unresolved unit variable, never kg of materials: kg-handled, occupied-hour or delivered cooling units are used only when the supplier dataset actually has that reference and a supported measured conversion. Retain native invoices/meters and separately disclose unresolved support/quantity gaps; no downstream exchange publication before verification. Include compatible provider upstream burdens and exclude the same provider utilities/direct releases already inside that service, while retaining producer-owned events outside it. Flow property / unit: Actual service reference property and unit group unresolved / provider_service_unit Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_actual_source_water` | `presentation`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual water withdrawn from its identified natural source”; retain all following collection, quantity and normalization obligations: Activate only for actual presentation-owned direct withdrawal, separated by freshwater/seawater source and location. Retain mass or actual-state density conversion, abstraction ownership and actual returns/evaporation/stock; never use treated-industrial-water UUID, or duplicate purchased/internal water. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_package_handover` | `presentation`; outputs; product | Identify and separately collect every actual exchange covered by “Actual packaging transferred with the accepted fish lot”; retain all following collection, quantity and normalization obligations: Track disposable packaging mass separately from fish reference mass. Returnable crates retain ownership and return-cycle records and are not sold as fish or automatically treated as final waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_nonfood_sale` | `presentation`; outputs; product | Identify and separately collect every actual exchange covered by “Actual presentation-stage non-food salvage sale”; retain all following collection, quantity and normalization obligations: Only documented independent sale after final food rejection; retain buyer and allocation evidence and exclude these animals from accepted food mass. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_internal_water_ice_transfer` | `presentation`; outputs; product | Identify and separately collect every actual exchange covered by “Actual water or ice transferred to another declared node”; retain all following collection, quantity and normalization obligations: Conditional actual measured water/ice transfer only, with receiving node/card and matching source, state, composition, event/pass id, quantity and unit. Preserve opening/closing stocks and melt/evaporation fates. Not an environmental return or a separately sold co-product; no repeated resource withdrawal or supplier burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_water_ice_handover` | `presentation`; outputs; product | Identify and separately collect every actual exchange covered by “Actual protective water or ice leaving with the accepted lot”; retain all following collection, quantity and normalization obligations: Record actual remaining protective water/ice crossing the first gate by state, source and measured mass, separately from net animal mass and packaging. Reconcile melted water, stocks, returns and supplier/own production once. This attached material is not automatically waste or an independently allocated co-product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_rejects` | `presentation`; outputs; waste | Identify and separately collect every actual exchange covered by “Final food rejects and packing waste to managed recipient”; retain all following collection, quantity and normalization obligations: Measure actual rejected fish and packing waste separately, with no same animal also accepted in whole_flatfish_handover. Fish held across the period boundary remains stock, not a final reject or a sold output without evidence. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_direct_pollutants` | `presentation`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual presentation cleaning constituents discharged to water”; retain all following collection, quantity and normalization obligations: Expand actual identified constituents and chemical bases from concentration and water records or justified methods; a generic wastewater label is not a substance identity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_other_exhaust` | `presentation`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual owned shore handling exhaust species”; retain all following collection, quantity and normalization obligations: Resolve chemical identity, size fractions where applicable and actual receiving compartment from direct measurement or supported equipment/fuel factors; no default emissions are supplied. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Collect actual node quantities with cp_presentation; under the section 8 two-view rule retain unallocated physical transfers, stocks and destinations, assign shared resources once, and normalize by matching accepted final net kg. Co-product LCA allocation is a separately labelled projection applied once. Value mode: Calculated value `calculated_value` Specificity: Site-specific `site_specific` Normalization basis: per 1 kg reference flow Basis kind: Reference flow `reference_flow` Evidence kind: Calculated from collection `calculated_from_collection` Collection protocol: `cp_presentation` Sources: `foreground-flatfish-method` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | reference product | Reject final lots that are not verified wild whole unheaded ungutted food flatfish at the first producer handover. Declare actual species/taxonomy, waterbody/marine-inland origin, gear, food grade, live/fresh/chilled state, intervention, time, actual gate and stock period. CPC04231 is only narrower mapping context, not proof of full code coverage. | `un-cpc3-flatfish`; `foreground-flatfish-method` |
| `v_state` | all transfers | Test capture -> pre-sort onboard chill -> landing grade -> dispatch; direct live/fresh capture -> grade -> dispatch; and post-grade preservation, including both-pass cases with unique pass ids. Match every actual transfer/state/quantity and same-state absent-pass bypass. Pre-sort output is not automatically food-qualified. Already fresh fish needs no invented kill; live output excludes dead fish. Dead fish needs independent fresh/chilled food acceptance or reject fate. No duplicated intermediate output, resource, mortality or stock between passes; internal feed is measured, never fixed to final one kg. | `foreground-flatfish-method` |
| `v_complete` | all nodes | Close species/body-mass partitions, intended outputs, releases/discards/waste, water and pollutants, fuel, gear, refrigerant and packaging stocks within documented measurement uncertainty. Retain bottom-contact/entanglement/incidental-catch condition and effort evidence even where no characterized LCA factor exists; missing characterization is disclosed, not reported as zero ecological impact. | `foreground-flatfish-method` |
| `v_range` | all flow cards | Every Range is an explicit provisional screening envelope unless it is the exact final reference quantity. Non-reference envelopes are not allowed ranges, site observations, default inventory values or evidence of plausibility. A value outside the envelope triggers investigation, not clipping; a value inside does not validate the batch. Replace provisional screens with independently held-out reviewed campaign evidence before quantitative reuse, without using the evaluated batch maximum as its own guardrail. | `foreground-flatfish-method` |
| `v_identity` | all exchange identities | Resolve each actual umbrella exchange to one verified compatible flow before downstream exchange publication. Verify direction/type, substance or product state, property/unit, geography, technology and destination independently. No UUID observation establishes an amount or emission factor. Unverified oxygen, fuel, final fish, wastes and emissions remain unresolved; do not relabel a narrower freshwater diesel or factory oxygen reference. | `foreground-flatfish-method` |
| `v_attribution` | all periods and outputs |Reconcile every intended output and revenue/physical driver across the same system period, every shared-consumer share and opening/closing stock burden. Check that outbound/return effort, onboard preservation energy, manufactured/purchased ice, purchased services and direct emissions are counted once. Missing route-specific effort, release condition, stock fate or allocation evidence prevents a complete foreground package. Check the at-sea gate case explicitly: separate product custody from completed producer return-service accounting, with return burdens assigned once without moving the product gate. | `foreground-flatfish-method` |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual declared whole wild food flatfish species/state/gate context with verified exchanges and foreground amounts |
| excluded_use | Whole-code automatic coverage; farmed/non-food/processed fish; fillet/edible yield conversion; sustainability or legal certification; universal fishery or ecological-impact claim |
| required_metadata | Species; wild waterbody; actual technology and effort; operation owner; gate/time/state/food grade; lot and stock periods; preserved or bypassed route; every intended output; assets, services and allocation |
| required_quality_disclosure | Measurement coverage, unverified identities, unresolved stock/route/food acceptance, provisional screening evidence, allocation sensitivity and uncharacterized ecological effects; no food-safety certification |
| update_trigger | Changed species/state/gate, gear or effort, boundary ownership, utility/asset service, allocation, factors or independent quantitative evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-flatfish` | `official_guidance` | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, 04231; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Wild flatfish classification context and adjacent exclusions only; not a production recipe |
| `noaa-summer-flounder` | `official_guidance` | NOAA Fisheries, Summer Flounder; https://www.fisheries.noaa.gov/species/summer-flounder | US species-specific examples of bottom trawl and net/line contexts, bottom contact and incidental catch questions; no extrapolated performance, quota or stock-status default |
| `foreground-flatfish-method` | `method_factor` | Declared whole-flatfish foreground accounting method in this PCR, sections 4–9: calibrated gate mass; event/transfer/stock ledgers; actual-condition conversions; attribution and provisional-screen review. This is a self-contained method, not a measured dataset or external empirical range. | Operational collection/calculation/quality rules and exact one-kg reference identity; no universal amount, density, emission factor or empirical bound |
