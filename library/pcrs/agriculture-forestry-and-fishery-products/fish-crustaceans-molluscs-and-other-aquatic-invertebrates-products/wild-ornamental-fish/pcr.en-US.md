---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-ornamental-fish
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wild ornamental fish

## 1. Scope and Applicability

This PCR covers live finfish collected from wild freshwater, brackish or marine populations for ornamental sale. The foreground package extends from collection through bounded holding and the collector or first consolidator dispatch handover. Temporary acclimation does not change wild origin. Species and actual routes are declared individually; a marine collection example does not prescribe a freshwater boat route.

Exclude controlled captive breeding/grow-out, food fish, non-ornamental stocking seed or bait, ornamental invertebrates and preserved specimens. The kg reference supports an inventory and does not establish equivalent aquarium service among species or sizes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-ornamental-fish |
| classification_refs | CPC 3.0 04111 |
| covered_products | Live wild-caught ornamental finfish; declared freshwater, brackish or marine origin |
| excluded_products | Farm-grown fish; food/seed/bait for other purposes; non-fish ornamental animals; preserved specimens |
| representative_product | A species-defined live wild freshwater ornamental lot collected with nets, acclimated and accepted at first consolidator dispatch |
| production_route | Wild collection; actual pre-gate consolidation/transfer; bounded live holding and grading; actual dispatch preparation |
| market_state | Viable live whole fish, species/size/grade identified, unprocessed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted live wild ornamental fish at collector or first consolidator dispatch |
| How much | 1 kg net whole-fish live biomass |
| How well | Species/size/grade and healthy live acceptance declared; retain count and measured mass, with water, oxygen and containers excluded |
| How long or cycle | Matched collection campaign, holding period and dispatch date; identify carryover stock and asset service periods |
| reference_flow_link | `wild_ornamental_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live wild ornamental fish at collector or first consolidator dispatch |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wild origin; species; habitat/salinity; collection location/date/gear; lot count and net biomass; size/grade; live health/survival acceptance; holding duration; actual dispatch gate/site/time; reporting campaign and carryover stock |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_fish_mass` | reference product; all fish rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated humane tared/drained batch weighing, excluding carrier water, oxygen, ice and packaging. Retain count separately. A count-to-mass conversion needs measured representative species/size/lot mass and sampling uncertainty; no universal fish weight. |
| `common_basis` | normalization denominator for all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The denominator is accepted final live-fish mass; each measured or calculated numerator is attributed and reported per 1 kg reference flow, preserving actual intermediate quantities and their actual flow properties and numerator units. The final product amount is 1 kg. Do not fix upstream live lots to the reference quantity. |
| `energy_units` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve metered electrical energy in kWh; the supported energy unit group defines 1 kWh = 3.6 MJ. Fuel kg is not electricity kWh; record fuel-specific heating values only when independently evidenced. |
| `water_material_basis` | water; consumables; emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep water source and density conversion, supplied/product water versus elementary abstraction, and substance/product/active-ingredient basis explicit. Concentration without matching water mass and chemical species does not establish an emission exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Natural wild fish population; or an actual purchased collector lot with upstream collection evidence |
| starting_condition_role | Natural resource entry for own capture; documented upstream technosphere handover for purchased collector fish |
| product_classification_scope | Wild ornamental live finfish, CPC 3.0 04111 context, not classification-created identity |
| recursive_input_rule | Record same-category bought fish at its real upstream gate once; reference its completed capture dataset, disclose missing burdens and do not recursively invent another burden-free stock |
| upstream_dataset_requirement | Capture supply plus actual fuel/electricity/material/oxygen/feed/treatment suppliers and evidenced waste treatment; site-specific boundary and completeness disclosure |
| disclosure | Species/habitat, collection and gate locations, included movements, holding duration, water topology, live stock/losses, reporting periods, shared assets and cut-offs |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_capture` | wild_capture | Start with natural wild populations and account for retained and dead removed catch by species and habitat. Natural growth is not managed farming; record releases and habitat impacts separately without asserting an unsupported depletion factor. | `un-cpc-3-2025` |
| `boundary_chain` | all processes | Include collection, actual movement to the first holding/consolidation site, stabilization, grading and dispatch preparation through the declared collector or first consolidator dispatch gate. Capture removes the fish; conditioning preserves the already captured live state and does not repeat capture. | `fao-live-fish-handling` |
| `boundary_suppliers` | purchased collector fish | Retain a documented upstream capture dataset or disclose an unresolved upstream burden for purchased wild fish. Record supplier starting state, species, capture location and previous losses; buying a live lot is not a burden-free stock initialization. Do not repeat supplier capture/resource withdrawal as another foreground capture; preserve the actual upstream-to-receiving-node handover. |  |
| `boundary_water` | live_conditioning; dispatch_handover | Distinguish actual external water supply and its measured salinity/quality, natural abstraction, internal recirculation and carrier water shipped. No industrial-treatment grade is assumed. Report treatment handover as waste; direct environmental discharge requires medium-specific returned water and substance-specific inventories. Treat actual discharge monitoring gaps as incomplete coverage. |  |
| `boundary_assets` | all processes | Identify included boats, nets, pumps, tanks and premises, all consuming nodes and service/reporting periods. Link replacement, cleaning and end-of-service events to periods and disclose capital cut-offs; record actual fuel combustion and any fugitive gear/material loss without double-counting a supplied service inventory. |  |
| `boundary_exclusions` | dispatch gate | Exclude distribution after dispatch, retail display, aquarium operation, food processing and consumer use. This inventory reference makes no equivalence claim across ornamental species, sizes or aquarium lifetime. |  |

## 6. Process Inventory Structure

This section contains only cards representing one actual physical or chemical exchange. Species, life stage, product state and grade must match the actual modelled lot; do not combine distinct identities on one card. The per-flow completion requirements in section 8 are mandatory collection obligations, not executable exchanges. Resolve them into concrete input, output or emission cards before dataset completion; omission, assumed zero and generic substitute UUIDs are prohibited.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wild_capture` | Wild collection | `required` | Declared lawful wild collection, including recorded purchased collection supply | capture | Retained live lot |
| `internal_consolidation` | Pre-gate consolidation and transfer | `conditional` | Actual movement from collection location to holding before dispatch | internal logistics | Delivered live lot |
| `live_conditioning` | Live holding acclimation and grading | `required` | Bounded stabilization and acceptance before dispatch; disclose duration and actual interventions | conditioning | Viable graded lot |
| `dispatch_handover` | Dispatch preparation and handover | `required` | Actual dispatch handover; packing inputs apply only when actually packed inside gate | delivery | 1 kg accepted live net fish biomass |

Index the chain by capture trip/campaign and holding run; continuous holding reports an explicit period with opening/closing stock. Cleaning, changeover and shared tank/boat/pump burdens attach to those runs once. If no consolidation movement occurs, bypass that conditional node with evidence. Dispatch remains the final handover even when packing is absent.

### Process: Wild collection (`wild_capture`)

#### Inputs

##### Product flows

###### Electricity supplied to capture equipment (`capture_electricity`)

Conditional on electrically powered capture equipment; record supplier, voltage, geography and period.

- Selected flow: Electricity supplied to capture equipment
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_capture_resources`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Wild fish biomass removed from the natural population (`natural_fish_removal`)

For own foreground capture only, record species and freshwater, brackish or marine habitat of retained and dead removed catch. For bought collector fish, retain its upstream resource-removal evidence without repeating that withdrawal as a new foreground input. Live incidental releases are catch-log observations and are reconciled separately; this resource input is neither farm seed nor purchased fish.

- Selected flow: Wild fish biomass removed from the natural population
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_catch`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Live wild ornamental fish before conditioning (`captured_live_lot`)

For own capture, measure the live retained species/grade lot actually handed to consolidation or conditioning; it is not the final dispatch output. A purchased collector lot is received at its documented upstream gate with its capture burdens, not created by another capture event.

- Selected flow: Live wild ornamental fish before conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_catch`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Dead captured fish transferred to actual disposal (`capture_mortality`)

Record non-viable whole fish crossing to the evidenced waste receiver and treatment/disposal route. Do not combine live releases or viable rejected fish with this waste; those actual destinations require independent records.

- Selected flow: Dead captured fish transferred to actual disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_losses_capture`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Pre-gate consolidation and transfer (`internal_consolidation`)

#### Inputs

##### Product flows

###### Live wild ornamental fish entering internal consolidation (`transfer_lot`)

Measured captured lot; preserve upstream collection burdens for bought collector fish and track actual origin.

- Selected flow: Live wild ornamental fish entering internal consolidation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer_transfer`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Electricity used for pre-gate live transfer support (`transfer_electricity`)

Conditional measured pump/aeration or electric vehicle energy, with actual supply identity.

- Selected flow: Electricity used for pre-gate live transfer support
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer_transfer`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live wild ornamental fish delivered to holding (`transferred_lot`)

Measure surviving biomass and preserve trip-to-holding lot links; no second final output credit.

- Selected flow: Live wild ornamental fish delivered to holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer_transfer`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Fish dying during internal transfer sent to disposal (`transfer_mortality`)

Record non-viable whole fish with actual receiver, treatment/disposal destination and receipt; losses retain collection and transfer burdens. Live releases and viable downgraded sales are separate dispositions, not this waste.

- Selected flow: Fish dying during internal transfer sent to disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_losses_transfer`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Live holding acclimation and grading (`live_conditioning`)

#### Inputs

##### Product flows

###### Live wild ornamental fish received for conditioning (`conditioning_lot`)

Actual captured or consolidated lot net biomass, maintaining wild origin through short holding; no managed grow-out credit.

- Selected flow: Live wild ornamental fish received for conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer_holding`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Externally supplied water for live-fish holding (`holding_water`)

Conditional actual external water supply to holding, with one declared source, salinity, composition and treatment grade suitable for the actual fish lot. Distinct supplied water grades/sources require separate cards and quantities. Do not infer industrial process-water quality or treatment. Self-abstraction is a separate elementary input at the actual abstracting node; recirculation is not new supply.

- Selected flow: Externally supplied water for live-fish holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_holding`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Electricity supplied to live holding and grading (`holding_electricity`)

Meter actual pumping, aeration, heating or cooling and grade handling; identify supplier, voltage, geography and time.

- Selected flow: Electricity supplied to live holding and grading
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Purchased compressed gaseous oxygen dosed to holding (`holding_oxygen`)

Conditional on actual dosing; retain purity, pressure form, supplier and cylinder tare/refill evidence, not an unqualified volume identity.

- Selected flow: Purchased compressed gaseous oxygen dosed to holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables_holding`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Viable graded wild ornamental fish before dispatch (`conditioned_lot`)

Record actual viable net biomass and species/size/grade after bounded acclimation and grading, handed to dispatch.

- Selected flow: Viable graded wild ornamental fish before dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Dead and rejected holding fish sent to disposal (`holding_mortality`)

Measure and distinguish mortality from saleable downgraded fish and released organisms; retain actual lawful destination evidence.

- Selected flow: Non-viable whole ornamental fish waste from holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_losses_holding`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Holding wastewater transferred to actual wastewater treatment (`holding_effluent`)

Conditional sewer or off-site treatment handover; record mass, salinity/composition, operator and actual receiving treatment route. Different effluent qualities or destinations require independent exchanges. This is not a direct nutrient emission; actual environmental releases require separate returned-water and substance-specific cards with receiving media.

- Selected flow: Holding wastewater transferred to actual wastewater treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_holding`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Dispatch preparation and handover (`dispatch_handover`)

#### Inputs

##### Product flows

###### Viable graded wild ornamental fish entering dispatch (`packing_lot`)

Measure actual incoming lot, including any final rejection; do not set internal feed to the 1 kg final reference.

- Selected flow: Viable graded wild ornamental fish entering dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dispatch`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Externally supplied carrier water for live-fish dispatch (`packing_water`)

Conditional actual new external carrier-water supply, with one documented source, salinity, composition and treatment grade suitable for the fish lot. Distinct grades/sources require independent cards and measurements; industrial process-water quality is not assumed. Internally transferred holding water is a paired transfer in the shared ledger, not repeated external supply. Record actual direct abstraction and each wastewater/returned-water outlet at its owning node under the dispatch-water completion requirement.

- Selected flow: Externally supplied carrier water for live-fish dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_dispatch`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Purchased compressed gaseous oxygen used at dispatch (`packing_oxygen`)

Conditional actual measured fill; distinguish purchased oxygen from air supplied by powered aeration. Record oxygen supplier and form.

- Selected flow: Purchased compressed gaseous oxygen used at dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables_dispatch`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live wild ornamental fish at collector or first consolidator dispatch (`wild_ornamental_dispatch`)

Accepted net whole-fish live biomass after the included collection, internal transfer and conditioning chain, at the explicitly located dispatch gate. Water, oxygen and containers are separate exchanges.

- Selected flow: Live wild ornamental fish at collector or first consolidator dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Sources: `reference-normalization`
- Collection protocol: `cp_dispatch`
- Range: Defined reference normalization
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `reference-normalization`

##### Waste flows

###### Dead or rejected fish at dispatch sent to actual disposal (`dispatch_mortality`)

Record final fish losses separately from packaging rejects and reconcile incoming lot against accepted dispatch biomass.

- Selected flow: Non-viable whole ornamental fish waste at dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual unallocated fish mass, reported per 1 kg reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_losses_dispatch`
- Range: Replaceable provisional screening estimate; review values outside the screen, never truncate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocate_subdivision` | species; grade lots | Subdivide independently metered species/grade and route lots and directly assign identifiable collection, transfer, holding and packing resources before allocating shared residual burdens. | `ghg-product-standard-2011` |
| `allocate_residual` | all intended outputs | Enumerate every sold species/grade, buyer purpose and handover. Use a documented causal allocation basis where supported; otherwise disclose economic allocation using contemporaneous grade/species prices, the complete output set and sensitivity. No universal mass fraction is supplied. | `ghg-product-standard-2011` |
| `allocate_losses` | mortality; release; internal lots | Keep collection and preservation burdens of mortality in the output-system accounting. Dead or rejected fish are not saleable co-products without an evidenced lawful product destination; live releases are neither sales credits nor waste-treatment exchanges. Internal lots cancel across nodes. |  |
| `allocate_period` | campaigns; standing holding stock | Index capture trips and holding runs, including cleaning/changeover, opening and closing live stock and delayed dispatch. Assign inputs and losses to the matched campaign/period; allocate cross-period assets by documented use and replacements once without universal lifetimes. |  |
| `allocate_shared` | boats; tanks; pumps; facility | For shared infrastructure enumerate consumers, service periods, allocation key and underlying meter/use evidence. Apply a documented key such as metered runtime or occupation where causal, then disclose residual economic allocation if used; never include the full shared load at every node. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_catch` | wild_capture | capture and natural removal | catch log | trip; species; habitat; gear; location; caught count/mass; retained; released; dead; handover |Record matched catch counts and calibrated net-biomass weights; retain representative lot weighing evidence; Reconcile unallocated physical catch disposition and report each actual fish mass per 1 kg reference flow; output allocation applies only to shared LCA burden numerators | kg | each trip and lot | whole collection campaign | collector and capture waterbody | per 1 kg reference flow | catch log; scale/tare record; species identification |
| `cp_capture_resources` | wild_capture | fuel and electricity | meter and purchase log | trip; fuel identity; engine; opening/closing fuel; supplied electricity; voltage; meter |Meter actual engine fuel and equipment electricity; reconcile supplier invoices and trip consumption; Assign actual trip resources once and report per 1 kg reference flow | kg; kWh | each trip | matched campaign | actual collector equipment | per 1 kg reference flow | meter calibration; invoice; engine record |
| `cp_transfer_transfer` | internal_consolidation | live transfers and internal transport | lot and trip log | lot ids; source/destination; departure/arrival; count; mass; survival; vehicle; distance; load; fuel; electricity; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key; carried fish, water, oxygen and container masses; empty return; purchased transport service coverage | Weigh linked live lots using tared humane method and log actual pre-gate vehicle/energy movements; Cancel internal fish transfers; assign transport resources once per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg; kWh | every movement | capture to holding campaign | Actual internal_consolidation site and its owned events | per 1 kg reference flow | transfer receipts; net weights; fuel records |
| `cp_transfer_holding` | live_conditioning | live transfers and internal transport | lot and trip log | lot ids; source/destination; departure/arrival; count; mass; survival; vehicle; distance; load; fuel; electricity; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Weigh linked live lots using tared humane method and log actual pre-gate vehicle/energy movements; Cancel internal fish transfers; assign transport resources once per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg; kWh | every movement | capture to holding campaign | Actual live_conditioning site and its owned events | per 1 kg reference flow | transfer receipts; net weights; fuel records |
| `cp_water_holding` | live_conditioning | supplied abstracted discharged and carrier water | water ledger | source; basin; salinity; supply; abstraction; circulation; treatment; returned water; shipped carrier water; density; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Meter each new water source and outlet; distinguish internal transfers and measure conversion density where needed; Reconcile nonduplicated new supply and outlets per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each lot and daily meter interval | whole holding and dispatch period | Actual live_conditioning site and its owned events | per 1 kg reference flow | water meters; density evidence; quality and treatment receipt |
| `cp_water_dispatch` | dispatch_handover | supplied abstracted discharged and carrier water | water ledger | source; basin; salinity; supply; abstraction; circulation; treatment; returned water; shipped carrier water; density; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Meter each new water source and outlet; distinguish internal transfers and measure conversion density where needed; Reconcile nonduplicated new supply and outlets per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each lot and daily meter interval | whole holding and dispatch period | Actual dispatch_handover site and its owned events | per 1 kg reference flow | water meters; density evidence; quality and treatment receipt |
| `cp_energy` | live_conditioning | holding electricity and actual fuel | meter log | meter; supplier; voltage; geography; time; pump/aeration/heating/cooling; run; shared users; fuel identity; engine/boiler; actual fuel use | Meter electricity and actual heating/on-site-generation fuel and assign shared loads using documented operation evidence | kWh; kg | run or meter interval | matched campaign and reporting period | actual holding site | per 1 kg reference flow | meter calibration; electricity invoice; runtime records |
| `cp_consumables_holding` | live_conditioning | oxygen feed treatment | consumable ledger | material identity; composition; supplier; purity; form; dose; stock movement; lot; product/active basis; authorization; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Reconcile measured purchases and opening/closing inventory to actual dosing/feeding; distinguish compressed oxygen from aeration; Attributed actual consumables per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each use and lot | matched holding/dispatch campaign | Actual live_conditioning site and its owned events | per 1 kg reference flow | invoice; cylinder tare/refill; treatment log; authorization |
| `cp_consumables_dispatch` | dispatch_handover | oxygen feed treatment | consumable ledger | material identity; composition; supplier; purity; form; dose; stock movement; lot; product/active basis; authorization; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Reconcile measured purchases and opening/closing inventory to actual dosing/feeding; distinguish compressed oxygen from aeration; Attributed actual consumables per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each use and lot | matched holding/dispatch campaign | Actual dispatch_handover site and its owned events | per 1 kg reference flow | invoice; cylinder tare/refill; treatment log; authorization |
| `cp_stock` | live_conditioning | viable grade outputs and stock | stock and sales log | species; size; grade; count; net mass; health acceptance; holding duration; opening/closing stock; buyer; price |Weigh viable grade lots and link all sales, held stock and rejection records; Reconcile stock and all grade outputs; report per 1 kg reference flow | kg | each grade lot and period end | complete campaign plus carryover periods | first conditioning site | per 1 kg reference flow | calibrated scale; acceptance; stock ledger; sales invoice |
| `cp_dispatch` | dispatch_handover | fish acceptance and packaging | dispatch record | lot; species/grade; count; net accepted biomass; weighing tare; gate; time; packaging component; reuse; rejects |Use humane tared batch weighing or measured representative count-to-mass evidence; record actual packing components and gate handover; Accepted output and attributable materials per 1 kg reference flow | kg | every dispatched lot | matched campaign through dispatch | explicit collector/first consolidator gate | per 1 kg reference flow | scale/tare/calibration; sample conversion; dispatch receipt |
| `cp_losses_capture` | wild_capture | mortality and actual waste disposition | waste ledger | lot; dead/rejected count and mass; packaging composition; destination; operator; disposal receipt; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Weigh actual removed waste and record each lawful destination; distinguish live release and viable downgraded sale; Attribute actual losses and waste per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each event | whole campaign | Actual wild_capture site and its owned events | per 1 kg reference flow | waste receipt; matched mortality log |
| `cp_losses_transfer` | internal_consolidation | mortality and actual waste disposition | waste ledger | lot; dead/rejected count and mass; packaging composition; destination; operator; disposal receipt; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Weigh actual removed waste and record each lawful destination; distinguish live release and viable downgraded sale; Attribute actual losses and waste per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each event | whole campaign | Actual internal_consolidation site and its owned events | per 1 kg reference flow | waste receipt; matched mortality log |
| `cp_losses_holding` | live_conditioning | mortality and actual waste disposition | waste ledger | lot; dead/rejected count and mass; packaging composition; destination; operator; disposal receipt; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Weigh actual removed waste and record each lawful destination; distinguish live release and viable downgraded sale; Attribute actual losses and waste per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each event | whole campaign | Actual live_conditioning site and its owned events | per 1 kg reference flow | waste receipt; matched mortality log |
| `cp_losses_dispatch` | dispatch_handover | mortality and actual waste disposition | waste ledger | lot; dead/rejected count and mass; packaging composition; destination; operator; disposal receipt; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Weigh actual removed waste and record each lawful destination; distinguish live release and viable downgraded sale; Attribute actual losses and waste per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each event | whole campaign | Actual dispatch_handover site and its owned events | per 1 kg reference flow | waste receipt; matched mortality log |
| `cp_emissions_capture` | wild_capture | actual environmental emissions | monitoring or supported-factor record | node; pollutant species; fossil/biogenic basis; air/water compartment; fuel/engine; monitored mass; concentration; discharged water; factor scope; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Monitor substances and media or apply an explicitly disclosed supported engine/substance model; no invented universal mixtures; Report each concrete emitted substance and returned water per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each monitoring interval or matched operation | matched capture/transfer/holding period | Actual wild_capture site and its owned events | per 1 kg reference flow | monitoring QA; factor citation/applicability; mass balance |
| `cp_emissions_transfer` | internal_consolidation | actual environmental emissions | monitoring or supported-factor record | node; pollutant species; fossil/biogenic basis; air/water compartment; fuel/engine; monitored mass; concentration; discharged water; factor scope; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Monitor substances and media or apply an explicitly disclosed supported engine/substance model; no invented universal mixtures; Report each concrete emitted substance and returned water per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each monitoring interval or matched operation | matched capture/transfer/holding period | Actual internal_consolidation site and its owned events | per 1 kg reference flow | monitoring QA; factor citation/applicability; mass balance |
| `cp_emissions_holding` | live_conditioning | actual environmental emissions | monitoring or supported-factor record | node; pollutant species; fossil/biogenic basis; air/water compartment; fuel/engine; monitored mass; concentration; discharged water; factor scope; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Monitor substances and media or apply an explicitly disclosed supported engine/substance model; no invented universal mixtures; Report each concrete emitted substance and returned water per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | each monitoring interval or matched operation | matched capture/transfer/holding period | Actual live_conditioning site and its owned events | per 1 kg reference flow | monitoring QA; factor citation/applicability; mass balance |
| `cp_assets_capture` | wild_capture | gear and shared infrastructure | asset service ledger | asset; material; amount; lifetime/use; replacement; cleaning; end-of-service; consumers; periods; attribution key; exclusions; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Record included material stocks and documented service periods; attribute only included assets once using actual use evidence; Attributed material/service burdens per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | replacement/service event and reporting period | all relevant service periods | Actual wild_capture site and its owned events | per 1 kg reference flow | asset ledger; use logs; replacement/end-of-service evidence |
| `cp_assets_holding` | live_conditioning | gear and shared infrastructure | asset service ledger | asset; material; amount; lifetime/use; replacement; cleaning; end-of-service; consumers; periods; attribution key; exclusions; event_id; shared ledger id; owning node; raw numerator; accepted final Q; attribution key | Record included material stocks and documented service periods; attribute only included assets once using actual use evidence; Attributed material/service burdens per 1 kg reference flow; collect only events owned by this node, cross-reference shared records and paired transfers without copying totals | kg | replacement/service event and reporting period | all relevant service periods | Actual live_conditioning site and its owned events | per 1 kg reference flow | asset ledger; use logs; replacement/end-of-service evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_normalization` | all inventory rows | Retain a single raw campaign ledger and positive measured accepted final live net biomass Q at the declared dispatch gate. If no accepted dispatch occurs, retain raw/carryover records and do not manufacture a per-kg dataset with a zero or assumed denominator. Report each physical fish transfer, loss and stock movement as its actual unallocated mass q/Q per 1 kg reference flow, with paired handover records and measured biological mass change. Apply the declared output allocation only to shared LCA resource/burden numerators, not to physical fish masses; divide the attributable numerator by the same Q. Preserve raw measurements, units and intermediate yields; no internal flow is fixed to 1 kg. | campaign exchange totals; allocation record; accepted net biomass; cp_dispatch | attributable exchanges per 1 kg reference flow | `reference-normalization` |
| `stock_reconciliation` | all fish rows | Reconcile opening live stock and arriving lots with final dispatch, other sales, closing stock, mortality and documented releases by species/grade; disclose measured mass changes and unexplained differences. | cp_catch; cp_transfer_transfer; cp_transfer_holding; cp_stock; cp_losses_capture; cp_losses_transfer; cp_losses_holding; cp_losses_dispatch; cp_dispatch | species/grade balance and unresolved differences |  |
| `emission_calculation` | actual emitting rows | Use monitored emitted mass or a named externally supported factor matched to fuel, engine, substance and receiving medium; disclose source, applicability and uncertainty. Calculate waterborne substance mass only with matched discharged water and concentration/speciation records. | cp_emissions_capture; cp_emissions_transfer; cp_emissions_holding; cp_capture_resources; cp_transfer_transfer; cp_transfer_holding; cp_water_holding; cp_water_dispatch | each actual substance emission per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and concrete flows | Trace species, wild origin, habitat, state, intended use and actual gate; verify each concrete identity before downstream exchange publication. | origin/lot documents and identity verification |
| `dq_measurement` | all measurements | Retain calibration, tare, humane method, representative conversion sample, units, density and uncertainty; no unmeasured generic fish weight. | scale/meter records and sampling report |
| `dq_completeness` | campaign and included services | Match all nodes, loss/sales/stock destinations, water pathways, energy, actual chemicals, cleaning, packaging and included assets; disclose gaps, cut-offs, estimated emissions and background representativeness. | coverage ledger; invoices; disposal receipts; period balances |
| `dq_range` | all provisional ranges | Ranges marked reasoned_estimate are replaceable broad author screens, not empirical distributions, measured upper bounds, default compliance limits or evidence of lawful collection. Each important atomic exchange requires its own observed range or justified uncertainty evidence, denominator and applicability review; collect missing evidence before the final data-package assessment. Validate actual extreme values rather than excluding, clipping or treating them as zero. | foreground records and documented review |
| `dq_inventory_completion` | all completion requirements | Create a separate card for every actual physical/chemical identity, with its process, direction and flow type; collect its own quantity, unit, final-reference denominator, sources, applicability, fate and available range/uncertainty evidence. Never copy a family total, a grouped screening interval or one UUID onto every child. Use evidenced not_applicable only for demonstrated absence; unknown is not zero. Any unfulfilled applicable requirement blocks a completeness claim and final dataset validation. | per-flow coverage ledger, measurements, identity and fate evidence |
| `dq_complete_capture_fuel` | `wild_capture`; inputs; product | Identify and separately inventory every actual exchange covered by “Fuel actually burned during wild collection”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_capture_resources`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_capture_gear` | `wild_capture`; inputs; product | Identify and separately inventory every actual exchange covered by “Attributed replacement fishing gear materials”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_assets_capture`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_capture_other_sales` | `wild_capture`; outputs; product | Identify and separately inventory every actual exchange covered by “Other retained catch sold at collection handover”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_catch`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_capture_exhaust` | `wild_capture`; outputs; elementary | Identify and separately inventory every actual exchange covered by “Reported combustion substances emitted to air during capture”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_emissions_capture`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_transfer_fuel` | `internal_consolidation`; inputs; product | Identify and separately inventory every actual exchange covered by “Fuel burned in transport before the declared dispatch gate”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_transfer_transfer`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_transfer_exhaust` | `internal_consolidation`; outputs; elementary | Identify and separately inventory every actual exchange covered by “Reported combustion substances emitted to air in pre-gate transfer”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_emissions_transfer`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_holding_fuel` | `live_conditioning`; inputs; product | Identify and separately inventory every actual exchange covered by “Fuel actually burned for holding heat or on-site power”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_energy`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_holding_feed` | `live_conditioning`; inputs; product | Identify and separately inventory every actual exchange covered by “Actual feed supplied during short wild-fish holding”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_consumables_holding`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_holding_treatment` | `live_conditioning`; inputs; product | Identify and separately inventory every actual exchange covered by “Actual treatment materials used during conditioning”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_consumables_holding`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_shared_asset_materials` | `live_conditioning`; inputs; product | Identify and separately inventory every actual exchange covered by “Attributed shared tank pump and facility materials”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_assets_holding`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_holding_water_abstraction` | `live_conditioning`; inputs; elementary | Identify and separately inventory every actual exchange covered by “Water directly abstracted from the declared natural source”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_water_holding`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_other_live_sales` | `live_conditioning`; outputs; product | Identify and separately inventory every actual exchange covered by “Other viable grades sold from conditioning”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_stock`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_holding_direct_discharge` | `live_conditioning`; outputs; elementary | Identify and separately inventory every actual exchange covered by “Measured water and reported substances directly released to declared water medium”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_emissions_holding`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_holding_combustion` | `live_conditioning`; outputs; elementary | Identify and separately inventory every actual exchange covered by “Reported holding combustion substances emitted to air”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_emissions_holding`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_packing_materials` | `dispatch_handover`; inputs; product | Identify and separately inventory every actual exchange covered by “Actual dispatch bag box and reusable tank materials”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_dispatch`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_complete_packing_rejects` | `dispatch_handover`; outputs; waste | Identify and separately inventory every actual exchange covered by “Rejected dispatch packaging sent to actual disposal”; retain these collection and normalization obligations: Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; Amount rule: Measured actual amount, attributed and reported per 1 kg reference flow; Normalization basis: per 1 kg reference flow; Collection protocol: `cp_losses_dispatch`. Establish applicable units and range evidence independently for each actual child. Grouped screening bounds are not child quantities, defaults or permission to omit collection. | per-flow original records under the linked protocol, actual identity and fate |
| `dq_shared_ledger` | all protocols and nodes | All node-specific protocols reference one physical event/asset/water ledger with unique event IDs, owning node, raw quantity/unit, paired transfer links, campaign/stock periods and the same measured final Q. Split only attributable shares using supported keys; never copy a common supply, meter total, fuel consumption or asset total to every protocol. Internal water recirculation is not new supply and is not subtracted again from external intake. Pre-gate freight includes actual carried fish, water, oxygen and containers; include evidenced empty-return burdens and do not duplicate purchased transport-service coverage with owned fuel. | event ledger; node ownership; calibrated totals; transfer reconciliation; freight and allocation records |
| `dq_complete_dispatch_water_pathways` | `dispatch_handover`; actual water inputs and outlets | Identify each actual directly abstracted water source, wastewater treatment handover and direct returned-water/substance release during dispatch as independent concrete exchanges with its own direction/type, quantity, native unit, salinity/composition, receiver/medium and identity. Use `cp_water_dispatch`, retain raw meter/lot records and normalize each quantity by actual final Q. Paired holding-water transfers are not new external supply; internal recirculation cannot be deducted again from intake. Establish each range/uncertainty independently; missing applicability, quantity or fate blocks data-package completion and validation. | dispatch water-source/outlet ledger; quality/density evidence; receiving operator/medium; independent identity and quantity records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_origin` | reference product | Require wild-capture origin, ornamental purpose, live finfish state, declared habitat/species/grade, actual collector/consolidator dispatch gate and lot acceptance. Exclude farm-grown fish, food or stocking/bait products, ornamental non-fish and preserved specimens. | `un-cpc-3-2025` |
| `validate_mass` | all fish cards | Require documented humane net-biomass measurement and auxiliary counts. Exclude water, oxygen, ice and containers; counted lots require measured species/size/lot conversion evidence. Check all internal transfers against the same lot and prohibit fixed 1 kg internal inputs. |  |
| `validate_balance` | campaign; stock; co-products | Reconcile caught/retained/released/dead biomass, surviving transfers, grade sales, final dispatch and opening/closing stock. Enumerate intended output handovers and residual allocation. Record unexplained differences; never truncate measurements to provisional screens. |  |
| `validate_resources` | capture; transfer; holding; dispatch | Demonstrate actual route-specific fuel/combustion, electricity, water, oxygen, feed, treatment, packaging and asset coverage including evidenced zero-use states. Distinguish purchased treatment from direct discharge; identify substances and media before concrete emission binding. |  |
| `validate_identity` | all concrete exchanges | Each implemented exchange requires a verified exact flow UUID and compatible property/unit, state, gate, provider/geography and receiving medium. A landing fish UUID does not establish a later consolidator output; generic marine identities cannot stand for freshwater. Report identity gaps and review limits. |  |
| `validate_period_assets` | reporting periods; shared assets | Match run/period boundaries, replacement and cleaning events, live stock carryover and delayed sales. Check all shared consumers and asset allocation keys, omitted services and duplicate loads. Unknown replacement or termination treatment blocks final data-package completion. |  |
| `validate_inventory_completion` | all concrete exchanges and section 8 obligations | Read back the coverage ledger and confirm every applicable dq_complete requirement has concrete separately measured and identity-verified cards. Check dimensions, normalization, receiving medium, waste fate and non-duplication. Any unfulfilled obligation or unknown identity/quantity fails final dataset validation; static PCR checking is not a substitute. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package first; process and lifecyclemodel are downstream projections |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared species/habitat/route/period live wild ornamental supply through the matching collector/first-consolidator dispatch gate, with verified concrete exchanges and disclosed upstream coverage |
| excluded_use | Farmed or food fish; ornamental non-fish; retailer/export destination after gate; aquarium service; incompatible location/species/size/gate without explicit representativeness review |
| required_metadata | Origin, species, habitat/salinity, gear, collection/holding/gate sites and dates, grade/count/net biomass, survival/losses, water/energy topology, campaign/stock period, allocation, assets and upstream datasets |
| required_quality_disclosure | Measurement and sampling uncertainty, survival and balance residuals, inventory/identity/monitoring gaps, exclusions, provisional range evidence, allocation sensitivity, temporal/geographic/technology representativeness |
| update_trigger | Changed species/grade/origin, gear or route, dispatch gate, holding/survival, water source or discharge, power mix, treatments, shared assets, stock period or material new evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, pp. 40–41. Retrieved 2026-10-09. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official classification boundary for wild ornamental fish and adjacent categories; not a quantity source |
| `nfrdi-ornamental-industry-2019` | `literature` | Muyot et al. (2019), Status of Ornamental Fish Industry in the Philippines: Prospects for Development. The Philippine Journal of Fisheries 26(2):82–97. DOI:10.31398/tpjf/26.2.2019A0011. Retrieved 2026-10-09. | Qualitative evidence of distinct wild marine and captive freshwater supply chains and live ornamental trade; historical national figures do not define this category's inventory |
| `fao-live-fish-handling` | `handbook` | FAO, T8389E, section 6, Transport of live fish. Retrieved 2026-10-09. https://www.fao.org/4/T8389E/T8389E06.htm | Qualitative live-state stabilization, handling, water/oxygen and dispatch interface questions only; historical drugs, densities and mortality factors are not prescribed |
| `reference-normalization` | `method_factor` | PCR definition: each reference lot is normalized to 1 kg accepted net live whole-fish biomass at declared dispatch | Defined final output 1–1 kg and campaign normalization; no empirical yield or loss claim |
| `ghg-product-standard-2011` | `standard` | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9, pp. 63–70. Retrieved 2026-10-09. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Method basis for subdivision, underlying physical/causal relationships and disclosed economic allocation when unavailable; no fish inventory quantity or claim of complete GHG conformance |
