---
pcr_id: pcr.wild-live-whole-caribbean-spiny-lobsters
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wild live whole native-shell Panulirus argus at first producer handover

## 1. Scope and Applicability

Applies only to wild Panulirus argus intended for food, alive and whole with native shell and declared actual limb/shell condition, at first producer handover. Short producer live maintenance is conditional handling, not intentional growth. Capture technology is declared from actual records, never a sustainability ranking. This boundary is narrower than CPC04321.

Excludes all other spiny/rock lobsters, Homarus, Nephrops and freshwater crawfish; aquaculture, intentional growout/fattening, ornamental supply, tail-only or meat, dead fresh/chilled product as reference, freezing, thawing, cooking or other processing, and buyer distribution or buyer live holding. A non-reference raw product may leave for actual external processing only with state/recipient acceptance; that processing is not included. No universal regulatory, welfare, temperature, duration, mortality, yield, lifespan or food-safety assurance is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-whole-caribbean-spiny-lobsters |
| classification_refs | CPC3.0:04321 (narrower) |
| covered_products | Wild live whole native-shell Panulirus argus at first producer handover |
| excluded_products | Other taxa; farmed/grown/fattened; ornamental; dead reference; tails/meat; processed or buyer-gate supply. |
| representative_product | Wild live whole native-shell Panulirus argus at first producer handover |
| production_route | Wild trap/diver/bullynet capture under capture parent; actual conditional grading/live maintenance/protection in event order; first producer live acceptance. |
| market_state | Live whole native-shell food animal; actual injuries/grade and gate disclosed, not an export-survival guarantee. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Wild live whole native-shell Panulirus argus at first producer handover |
| How much | 1 kg accepted net animal mass |
| How well | Actual species/origin/life, shell/limb state, declared food use and actual applicable acceptance criteria; neither visual grade nor modelled survival is certification. |
| How long or cycle | Declared lot/trip and complete attributable seasonal/reporting and asset/service periods; no fixed holding time or life. |
| reference_flow_link | `live_argus_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wild live whole native-shell Panulirus argus at first producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Panulirus argus verification; wild origin/area and capture date; lot/trip/event/period; actual trap/diver/bullynet and service boundary; alive/whole/native shell with limb/shell condition; grade/use acceptance; onshore/offshore first physical gate and ownership; actual pre-gate holding/protection and bypasses; calibrated net animal mass, detached-water/package tare; actual byproduct/waste/release/stock fates; complete shared service/period and once-only attribution. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use a calibrated traceable weighing of the same accepted lot at first physical producer gate, removing separable water/container/protective tare, retaining native shell, limbs and body water. Declare draining/tare procedure and uncertainty; do not convert a generic count to1 kg. |
| native_numerator | all inventory rows | actual numerator property | recorded unit | Keep each concrete material mass, fuel mass or separately evidenced fuel energy, electricity energy and service quantity in its own property/unit; preserve supplier concentration, density/calorific or meter conversion evidence when used. MJ electricity conversion, if needed:1 kWh=3.6 MJ, not heat or fuel double counting. Count/grade/effort/time remain auxiliary unless a separately evidenced conversion is needed; no generic count-to-mass factor. |
| unallocated_basis | all inventory rows | actual property | numerator unit per 1 kg reference | Every card is on per 1 kg reference flow after complete unallocated physical reconciliation and unique node/service ownership. Only final accepted output is1 kg by normalization; internal transfers, water, losses and other outputs stay actual positive-final-denominator ratios, not fixed yield. The separately labelled LCA allocation view does not replace physical quantities. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Observed wild marine Panulirus argus removal, actual capture context and initial fate; no managed growth. |
| starting_condition_role | Wild harvest/capture boundary with collection records, not same-category upstream exemption. |
| product_classification_scope | CPC3.0:04321; narrower live whole Panulirus argus |
| recursive_input_rule | Any purchased/transferred same-category animal or live attractant keeps its actual upstream/carried burden, source, state and transfer identity. Never restart as a new zero-burden wild removal; within-node stock recirculation is not another exchange. |
| upstream_dataset_requirement | Compatible concrete purchased-material/service and shared asset supply datasets with actual geography/state, scope and unit; subdivide inclusive service only with evidence, never both inclusive and component burdens. |
| disclosure | Species, wild source, actual event topology and alternatives, gate, exclusions, complete service periods, stocks/fates, allocation choice, evidence-envelope limits and actual quality uncertainty. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `wild_start` | capture | Start with actual wild marine removal, not a purchased/farmed seed or invented zero-burden same-category supply. Record capture area/time, species and gear; natural stock growth is not a foreground growout activity. | `noaa-caribbean-spiny-lobster` |
| `gate_complete` | all nodes | End each animal chain at first evidenced producer physical acceptance, onshore/offshore stated. Include necessary producer outbound/return travel, idle, cleaning, maintenance and replacements through complete attributable trip/asset/service periods even if performed after an offshore animal handover. Exclude buyer distribution and later buyer holding/processing. Declare any cut-off quantitatively rather than erasing return burdens. |  |
| `events_states` | all nodes | The process list indexes responsibilities, not mandatory chronology. Use actual event ids, node/pass, time, state, life status, owner and paired transfers. Optional nodes may bypass or recur; grading can precede/follow holding or presentation, but every physical event has one owner. Incoming live-only nodes reject dead state. Unaccepted pre-gate animals remain at the actual event owner as retained stock or an evidenced alternative accepted output, release or waste; they are not an assumed upstream rework loop. Any upstream rework/return route requires separate scope and module review. Accepted buyer returns are outside scope. Never force internal animal feed to1 kg or duplicate the same animal as reference and another fate. |  |
| `technology_delta` | capture | Capture is the parent. Trap events require actual trap/line/buoy deployment, retrieval, bait/attractant and lost/retired-gear records; diver events require actual dive equipment/gas/compressor or contracted dive-service evidence; bullynet events require actual shallow-water net/lighting event evidence. These are qualitative requirement categories, not mandatory resource quantities. At each event choose actual technology; mixed trips may coexist only with disjoint event/effort and uniquely owned shared vessel burden. Do not model all alternatives as simultaneous default burdens. | `noaa-caribbean-spiny-lobster` |
| `bait_lifecycle` | capture | Maintain a separate animal attractant ledger by species/state/lot: opening live stocks plus actual external purchases, wild designation and inter-node/period receipts reconcile with closing live stocks, actual live transfers, release, death/material fate and verified losses. Same-node reuse is an event, not new purchase or extra biomass. Separate live attractants from consumed material bait, native/carrier water and food reference animals. When a target animal is designated attractant it cannot also be food output at that event. Any later food handoff needs actual state/use acceptance, full carried burden and unique fate. No local bait practice establishes universal legality or a fixed mortality. | `noaa-caribbean-spiny-lobster` |
| `water_materials` | all nodes | Supplied materials, environmental abstraction, internal circulation, carried water and actual receiving destinations remain distinct. Animal body water is part of net animal mass; detachable water/package is not. Record uptake, exudate, fragments, molt or other actual stock/loss terms with evidence; short holding does not justify assuming exact constant wet mass or managed growth. No compulsory washing/conditioning node is inferred; an independent material-changing operation requires scope review before use. |  |
| `service_period` | all nodes | Identify shared vessel, tanks, pumps, diver equipment, lighting, scales and containers as actually used, their consuming nodes/events and complete periods. Keep acquisition, operation, cleaning, maintenance, replacement and retirement evidence; no default lifespan. Opening/closing animals, bait, packages and carried burdens bridge periods. A zero-reference-output period retains its actual output/waste/service ledger and supported carry-forward/other-product treatment; never divide by zero or discard its burdens. |  |
| `two_views` | all inventory rows | First retain unallocated physical receipts, events, products, losses, waste and stock with uncertainty; match transfers once and normalize reconciled node-assigned amounts by positive final accepted net kg. This physical view is not co-product allocation. Only then attach the separate once-only LCA attribution view described in section 7. Physical biomass balance is never closed with economic shares or by clipping unknown values. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Wild capture and producer trip responsibility | required | Actual commercial capture; declare trap, diver or bullynet events | Foreground responsibility indexed by actual event/pass | per 1 kg reference flow; measured internal amounts |
| `grading` | Commercial grading and destination sorting | conditional | A separate pre-gate decision creates grade or destination states | Foreground responsibility indexed by actual event/pass | per 1 kg reference flow; measured internal amounts |
| `holding` | Short pre-gate live maintenance | conditional | Producer performs a bounded live-maintenance intervention before first handover | Foreground responsibility indexed by actual event/pass | per 1 kg reference flow; measured internal amounts |
| `presentation` | Pre-gate protection and presentation | conditional | Producer encloses, protects, labels or presents animals separately before handover | Foreground responsibility indexed by actual event/pass | per 1 kg reference flow; measured internal amounts |
| `handover` | First producer physical handover and acceptance | required | One evidenced first producer acceptance event for each final reference lot | Foreground responsibility indexed by actual event/pass | per 1 kg reference flow; measured internal amounts |

All cards retain the unallocated physical view first, with paired transfer and independent stock ledger; a separate once-only LCA attribution view may later assign genuinely common burdens. Every conditional umbrella expands into zero, one or multiple actual identities, not one universal exchange; inactive means evidenced non-operation, not unknown quantity forced to zero. Every node owns its actual resources/losses even if optional presentation is bypassed.

Production mode is discrete capture events and traceable trip/lot batches, not an assumed continuous processing line. Declare actual lot mixing, trip boundaries, holding runs, cleaning and changeover events and their unique owners; never derive yield from merely changing a grade label. Aggregate only compatible state/gate strata over declared reporting and shared-service periods, retaining each batch ledger and actual zero-output periods.

### Process: Wild capture and producer trip responsibility (`capture`)

Independent removal from the wild marine context, with initial selection and real capture-state handoffs. This is not managed biological production. Gear alternatives implement this parent, not additional successive capture nodes.

#### Inputs

##### Product flows

###### Actual electricity supplied or generated (`capture_electricity`)

Declare actual geography, voltage, provider and purchased versus generated boundary. Meter node use or uniquely assign shared use; do not add generated electricity as an upstream purchase on top of its fuel and generation burdens.

- Selected flow: Actual electricity supplied or generated
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_energy. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_capture_energy`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_capture_electricity
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

###### Wild Panulirus argus removed from the environment (`capture_wild_animals`)

Record observed capture and initial removal with species, condition, effort, location, time and fate; this unallocated biological-removal ledger is not an upstream farmed product or a universal LCIA characterization. Unobserved mortality remains a disclosed evidence gap.

- Selected flow: Wild Panulirus argus removed from the environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_capture_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_capture_wild_animals
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual direct water abstraction (`capture_water_abstraction`)

Only actual water crossing from the environment; specify marine/fresh source and volume-to-mass evidence when needed. Recirculation stays an internal loop, not repeated withdrawal. Purchased water is recorded separately and cannot be the same quantity.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_capture_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_capture_water_abstraction
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Collected whole animals transferred for live-food preparation (`capture_food_transfer`)

Pair each real transfer with its next node receipt, transfer id, lot, event, actual state and measured net mass. Not 1 kg by definition; collected live output is not yet final accepted reference. A dead animal cannot enter the live-only holding or presentation feed.

- Selected flow: Collected whole animals transferred for live-food preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_capture_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_capture_food_transfer
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual effluent transferred for treatment (`capture_effluent_treatment`)

Record water plus carried substances and actual offsite treatment receipt, or subdivide declared foreground treatment once. Do not also record the same untreated stream as direct discharge; water mass is not dissolved pollutant mass.

- Selected flow: Actual effluent transferred for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_capture_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_capture_effluent_treatment
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Foreground fossil carbon dioxide to unspecified air (`capture_fossil_co2`)

Only actual foreground fossil CO2 supported by source, carbon/fuel activity and compatible unspecified-air compartment. Not animal respiration, biogenic CO2, all exhaust or an emission factor; distinguish supplier-inclusive service emissions to avoid duplication.

- Selected flow: Foreground fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_capture_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_capture_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Commercial grading and destination sorting (`grading`)

Receives actual whole animals in the recorded live/dead and shell/limb state, and independently sorts into two or more declared grade or destination states when activated; record each actual accepted, alternative-use, rejected, release, waste or retained state and its handoff. An inspection result is not a mortality prediction or product authorization.

#### Inputs

##### Product flows

###### Actual incoming whole animals (`grading_animals_receipt`)

Receive only the preceding real event state, with paired transfer id and measured net mass; holding and presentation receive live animals only. Do not assume the printed process order or collect final reference mass at every internal handoff.

- Selected flow: Actual incoming whole animals
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_grading_mass`
- Sources: `ross-live-argus-grading-2024`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_grading_animals_receipt
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual electricity supplied or generated (`grading_electricity`)

Declare actual geography, voltage, provider and purchased versus generated boundary. Meter node use or uniquely assign shared use; do not add generated electricity as an upstream purchase on top of its fuel and generation burdens.

- Selected flow: Actual electricity supplied or generated
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_energy. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_grading_energy`
- Sources: `ross-live-argus-grading-2024`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_grading_electricity
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`grading_water_abstraction`)

Only actual water crossing from the environment; specify marine/fresh source and volume-to-mass evidence when needed. Recirculation stays an internal loop, not repeated withdrawal. Purchased water is recorded separately and cannot be the same quantity.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_grading_mass`
- Sources: `ross-live-argus-grading-2024`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_grading_water_abstraction
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Measured live whole animals to the next real event (`grading_live_transfer`)

State, grade, shell/limb condition and actual next recipient belong to a paired transfer; repeat passes only with separate ids. Packaging mass or external holding water is separate. Retained closing stock is not an extra exchange and is not yet final reference.

- Selected flow: Measured live whole animals to the next real event
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_grading_mass`
- Sources: `ross-live-argus-grading-2024`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_grading_live_transfer
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual effluent transferred for treatment (`grading_effluent_treatment`)

Record water plus carried substances and actual offsite treatment receipt, or subdivide declared foreground treatment once. Do not also record the same untreated stream as direct discharge; water mass is not dissolved pollutant mass.

- Selected flow: Actual effluent transferred for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_grading_mass`
- Sources: `ross-live-argus-grading-2024`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_grading_effluent_treatment
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Foreground fossil carbon dioxide to unspecified air (`grading_fossil_co2`)

Only actual foreground fossil CO2 supported by source, carbon/fuel activity and compatible unspecified-air compartment. Not animal respiration, biogenic CO2, all exhaust or an emission factor; distinguish supplier-inclusive service emissions to avoid duplication.

- Selected flow: Foreground fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_grading_mass`
- Sources: `ross-live-argus-grading-2024`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_grading_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Short pre-gate live maintenance (`holding`)

Receives usable live animals; records duration, actual water or humid-air regime and species-suitable controls, then hands over measured post-intervention animals or actual losses. No intentional growout or fattening; no mandatory immersion, ice, oxygen supply, fasting, duration or temperature.

#### Inputs

##### Product flows

###### Actual incoming whole animals (`holding_animals_receipt`)

Receive only the preceding real event state, with paired transfer id and measured net mass; holding and presentation receive live animals only. Do not assume the printed process order or collect final reference mass at every internal handoff.

- Selected flow: Actual incoming whole animals
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_holding_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_holding_animals_receipt
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual electricity supplied or generated (`holding_electricity`)

Declare actual geography, voltage, provider and purchased versus generated boundary. Meter node use or uniquely assign shared use; do not add generated electricity as an upstream purchase on top of its fuel and generation burdens.

- Selected flow: Actual electricity supplied or generated
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_energy. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_holding_energy`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_holding_electricity
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`holding_water_abstraction`)

Only actual water crossing from the environment; specify marine/fresh source and volume-to-mass evidence when needed. Recirculation stays an internal loop, not repeated withdrawal. Purchased water is recorded separately and cannot be the same quantity.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_holding_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_holding_water_abstraction
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Measured live whole animals to the next real event (`holding_live_transfer`)

State, grade, shell/limb condition and actual next recipient belong to a paired transfer; repeat passes only with separate ids. Packaging mass or external holding water is separate. Retained closing stock is not an extra exchange and is not yet final reference.

- Selected flow: Measured live whole animals to the next real event
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_holding_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_holding_live_transfer
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual effluent transferred for treatment (`holding_effluent_treatment`)

Record water plus carried substances and actual offsite treatment receipt, or subdivide declared foreground treatment once. Do not also record the same untreated stream as direct discharge; water mass is not dissolved pollutant mass.

- Selected flow: Actual effluent transferred for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_holding_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_holding_effluent_treatment
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Foreground fossil carbon dioxide to unspecified air (`holding_fossil_co2`)

Only actual foreground fossil CO2 supported by source, carbon/fuel activity and compatible unspecified-air compartment. Not animal respiration, biogenic CO2, all exhaust or an emission factor; distinguish supplier-inclusive service emissions to avoid duplication.

- Selected flow: Foreground fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_holding_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_holding_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: Pre-gate protection and presentation (`presentation`)

Receives actual live whole animals and passes protected animals plus separately declared package roles to the next event. Actual containers, cushioning, labels and restraints only; no mandatory claw bands, and no buyer distribution inside this activity.

#### Inputs

##### Product flows

###### Actual incoming whole animals (`presentation_animals_receipt`)

Receive only the preceding real event state, with paired transfer id and measured net mass; holding and presentation receive live animals only. Do not assume the printed process order or collect final reference mass at every internal handoff.

- Selected flow: Actual incoming whole animals
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_presentation_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_presentation_animals_receipt
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual electricity supplied or generated (`presentation_electricity`)

Declare actual geography, voltage, provider and purchased versus generated boundary. Meter node use or uniquely assign shared use; do not add generated electricity as an upstream purchase on top of its fuel and generation burdens.

- Selected flow: Actual electricity supplied or generated
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_energy. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_presentation_energy`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_presentation_electricity
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`presentation_water_abstraction`)

Only actual water crossing from the environment; specify marine/fresh source and volume-to-mass evidence when needed. Recirculation stays an internal loop, not repeated withdrawal. Purchased water is recorded separately and cannot be the same quantity.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_presentation_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_presentation_water_abstraction
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Measured live whole animals to the next real event (`presentation_live_transfer`)

State, grade, shell/limb condition and actual next recipient belong to a paired transfer; repeat passes only with separate ids. Packaging mass or external holding water is separate. Retained closing stock is not an extra exchange and is not yet final reference.

- Selected flow: Measured live whole animals to the next real event
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_presentation_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_presentation_live_transfer
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

###### Actual effluent transferred for treatment (`presentation_effluent_treatment`)

Record water plus carried substances and actual offsite treatment receipt, or subdivide declared foreground treatment once. Do not also record the same untreated stream as direct discharge; water mass is not dissolved pollutant mass.

- Selected flow: Actual effluent transferred for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_presentation_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_presentation_effluent_treatment
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Foreground fossil carbon dioxide to unspecified air (`presentation_fossil_co2`)

Only actual foreground fossil CO2 supported by source, carbon/fuel activity and compatible unspecified-air compartment. Not animal respiration, biogenic CO2, all exhaust or an emission factor; distinguish supplier-inclusive service emissions to avoid duplication.

- Selected flow: Foreground fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_presentation_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_presentation_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

### Process: First producer physical handover and acceptance (`handover`)

Onshore or offshore gate declared from physical transfer and acceptance, not invoice date alone. Verify life state and net animal mass here even when optional grading, holding and packaging are bypassed. Pre-acceptance rejection remains a producer event; first acceptance ends the animal foreground chain.

#### Inputs

##### Product flows

###### Actual incoming whole animals (`handover_animals_receipt`)

Receive only the preceding real event state, with paired transfer id and measured net mass; holding and presentation receive live animals only. Do not assume the printed process order or collect final reference mass at every internal handoff.

- Selected flow: Actual incoming whole animals
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_handover_animals_receipt
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

###### Actual electricity supplied or generated (`handover_electricity`)

Declare actual geography, voltage, provider and purchased versus generated boundary. Meter node use or uniquely assign shared use; do not add generated electricity as an upstream purchase on top of its fuel and generation burdens.

- Selected flow: Actual electricity supplied or generated
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_energy. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover_energy`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_handover_electricity
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Waste flows

##### Elementary flows

###### Actual direct water abstraction (`handover_water_abstraction`)

Only actual water crossing from the environment; specify marine/fresh source and volume-to-mass evidence when needed. Recirculation stays an internal loop, not repeated withdrawal. Purchased water is recorded separately and cannot be the same quantity.

- Selected flow: Actual direct water abstraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_handover_water_abstraction
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

#### Outputs

##### Product flows

###### Wild live whole native-shell Panulirus argus at first producer handover (`live_argus_handover`)

Exactly the accepted live whole native-shell Panulirus argus food reference at evidenced first producer physical handover. Net mass excludes separable water, containers and protective materials, not the native shell, limbs or body water. Record actual limb/shell condition without inventing intactness or safety certification.

- Selected flow: Wild live whole native-shell Panulirus argus at first producer handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: `cp_handover_mass`
- Sources: `net-mass-normalization-identity`
- Range: Final net-mass normalization identity only
  - Range role: qa_guardrail
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: method_formula
  - Sources: `net-mass-normalization-identity`

##### Waste flows

###### Actual effluent transferred for treatment (`handover_effluent_treatment`)

Record water plus carried substances and actual offsite treatment receipt, or subdivide declared foreground treatment once. Do not also record the same untreated stream as direct discharge; water mass is not dissolved pollutant mass.

- Selected flow: Actual effluent transferred for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_handover_effluent_treatment
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

##### Elementary flows

###### Foreground fossil carbon dioxide to unspecified air (`handover_fossil_co2`)

Only actual foreground fossil CO2 supported by source, carbon/fuel activity and compatible unspecified-air compartment. Not animal respiration, biogenic CO2, all exhaust or an emission factor; distinguish supplier-inclusive service emissions to avoid duplication.

- Selected flow: Foreground fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_handover_mass`
- Sources: `noaa-caribbean-spiny-lobster`
- Range: Unresolved independent evidence envelope; not a default, empirical threshold or clipping limit
  - Range role: qa_guardrail
  - Lower: 0
  - Upper: U_handover_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: reference_flow
  - Evidence kind: reasoned_estimate

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `physical_first` | all nodes | Retain all unallocated physical outputs by actual node/pass and destination, including every target grade, incidental species, live attractant, non-reference accepted animal/material product, release, waste and retained stock. No lost/dead/rejected quantity disappears or becomes a co-product automatically. Internal transfers/stock are not sales; later separated products retain their evidenced share of the common upstream burden carried by their actual material stream; absent product-specific activities are not invented. |  |
| `shared_node_event` | all nodes | Assign directly metered events first; split complete common service/asset burden using documented causal activity such as engine time, measured pump load or occupancy appropriate to the asset, and enumerate consumers/periods with fractions summing to one. A claim of equal shares needs evidence; no universal proxy or life is supplied. This node/time ownership precedes and differs from cross-product LCA allocation. Inclusive supplier services and their component resources are mutually exclusive for the same boundary. |  |
| `coproduct_once` | capture; grading; holding; presentation; handover | For every genuinely accepted external intended output at its real handoff, first subdivide separately measured product-specific activities. For the remaining inseparable common burdens use a documented causal physical relationship if supported. Otherwise declare economic attribution using comparable actual gate revenues over the same representative service period, product set and currency; disclose price basis, uncertainty and physical-allocation sensitivity. If neither causal nor comparable price evidence exists, keep attribution unresolved, not an invented factor. Protect shares of products that have already left at an evidenced external handover; do not reopen those shares. If the remaining internal stream later separates into a newly accepted intended product and the continuing reference stream, split only its remaining carried upstream burden pool plus genuinely shared subsequent burdens once at that new separation, using the stated attribution precedence. Later product recognition does not make common capture burdens zero. Dedicated later burdens remain with their actual recipient; do not apply the same split again merely because the gate or grade changes. No avoided-burden credit is assumed. |  |
| `period_bridge` | all nodes | Link lot/trip, season/reporting period and actual asset service phases. Record opening and closing quantity plus attributable burden so held animals/attractants/packages do not erase or receive repeated burden across periods. Separate manufacture/repair/retirement once and disclose remaining service and termination treatment. Zero-output periods use the supported stock/other-output ledger rather than an artificial positive denominator. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_capture_mass | capture | Actual mass exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope  auxiliary conditions where relevant: temperature value and declared scale (e.g. °C), and other numeric conditions with their own declared units; event start/end timestamps and time zone; elapsed value and min/h unit; categorical life/fresh/chilled/never-frozen state and its evidence; | Calibrated traceable weighing and receipts; separate animal/package/carrier/body water, actual fates and stock; use net-gate weighing at handover and pair real transfer records.  Collect relevant temperature with a calibrated sensor and location/time record, elapsed duration from timestamped events, and categories from traceable state/history records. These auxiliary descriptors are not kg inventory amounts and supply no universal temperature/time limits. | kg | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_capture_energy | capture | Actual energy exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope | Meter/invoice/engine-tank reconciliation with actual fuel/electricity identity, units and documented conversions; disjoint shared use and complete trip/period. | MJ | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_capture_service | capture | Actual service exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope | Actual native service quantity and inclusive boundary; asset log, use/consumer period, acquisition/repair/retirement, measured causal service shares and evidence of nonduplication. | recorded-native-unit | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_grading_mass | grading | Actual mass exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope  auxiliary conditions where relevant: temperature value and declared scale (e.g. °C), and other numeric conditions with their own declared units; event start/end timestamps and time zone; elapsed value and min/h unit; categorical life/fresh/chilled/never-frozen state and its evidence; | Calibrated traceable weighing and receipts; separate animal/package/carrier/body water, actual fates and stock; use net-gate weighing at handover and pair real transfer records.  Collect relevant temperature with a calibrated sensor and location/time record, elapsed duration from timestamped events, and categories from traceable state/history records. These auxiliary descriptors are not kg inventory amounts and supply no universal temperature/time limits. | kg | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_grading_energy | grading | Actual energy exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope | Meter/invoice/engine-tank reconciliation with actual fuel/electricity identity, units and documented conversions; disjoint shared use and complete trip/period. | MJ | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_grading_service | grading | Actual service exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope | Actual native service quantity and inclusive boundary; asset log, use/consumer period, acquisition/repair/retirement, measured causal service shares and evidence of nonduplication. | recorded-native-unit | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_holding_mass | holding | Actual mass exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope  auxiliary conditions where relevant: temperature value and declared scale (e.g. °C), and other numeric conditions with their own declared units; event start/end timestamps and time zone; elapsed value and min/h unit; categorical life/fresh/chilled/never-frozen state and its evidence; | Calibrated traceable weighing and receipts; separate animal/package/carrier/body water, actual fates and stock; use net-gate weighing at handover and pair real transfer records.  Collect relevant temperature with a calibrated sensor and location/time record, elapsed duration from timestamped events, and categories from traceable state/history records. These auxiliary descriptors are not kg inventory amounts and supply no universal temperature/time limits. | kg | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_holding_energy | holding | Actual energy exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope | Meter/invoice/engine-tank reconciliation with actual fuel/electricity identity, units and documented conversions; disjoint shared use and complete trip/period. | MJ | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_holding_service | holding | Actual service exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope | Actual native service quantity and inclusive boundary; asset log, use/consumer period, acquisition/repair/retirement, measured causal service shares and evidence of nonduplication. | recorded-native-unit | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_presentation_mass | presentation | Actual mass exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope  auxiliary conditions where relevant: temperature value and declared scale (e.g. °C), and other numeric conditions with their own declared units; event start/end timestamps and time zone; elapsed value and min/h unit; categorical life/fresh/chilled/never-frozen state and its evidence; | Calibrated traceable weighing and receipts; separate animal/package/carrier/body water, actual fates and stock; use net-gate weighing at handover and pair real transfer records.  Collect relevant temperature with a calibrated sensor and location/time record, elapsed duration from timestamped events, and categories from traceable state/history records. These auxiliary descriptors are not kg inventory amounts and supply no universal temperature/time limits. | kg | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_presentation_energy | presentation | Actual energy exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope | Meter/invoice/engine-tank reconciliation with actual fuel/electricity identity, units and documented conversions; disjoint shared use and complete trip/period. | MJ | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_presentation_service | presentation | Actual service exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope | Actual native service quantity and inclusive boundary; asset log, use/consumer period, acquisition/repair/retirement, measured causal service shares and evidence of nonduplication. | recorded-native-unit | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_handover_mass | handover | Actual mass exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope  auxiliary conditions where relevant: temperature value and declared scale (e.g. °C), and other numeric conditions with their own declared units; event start/end timestamps and time zone; elapsed value and min/h unit; categorical life/fresh/chilled/never-frozen state and its evidence; | Calibrated traceable weighing and receipts; separate animal/package/carrier/body water, actual fates and stock; use net-gate weighing at handover and pair real transfer records.  Collect relevant temperature with a calibrated sensor and location/time record, elapsed duration from timestamped events, and categories from traceable state/history records. These auxiliary descriptors are not kg inventory amounts and supply no universal temperature/time limits. | kg | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_handover_energy | handover | Actual energy exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope | Meter/invoice/engine-tank reconciliation with actual fuel/electricity identity, units and documented conversions; disjoint shared use and complete trip/period. | MJ | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |
| cp_handover_service | handover | Actual service exchanges and state/stock/event ownership | foreground_record | lot; trip; event; process/pass; transfer pair; species/material/service identity; actual state/grade; source/destination; owner; opening/closing stock and carried burdens; physical receipt/output/waste/release/loss; native amount/unit; final accepted net kg; meter/tare/uncertainty; shared consumer/period; U independent evidence scope | Actual native service quantity and inclusive boundary; asset log, use/consumer period, acquisition/repair/retirement, measured causal service shares and evidence of nonduplication. | recorded-native-unit | Each real event and stock/period boundary | Complete lot/trip and attributable reporting/service periods including return, idle and zero-output periods | Actual producer vessel/site/node and paired real gate | per 1 kg reference flow | Calibration/receipts and actual use acceptance; closure uncertainty, stock/fate completeness, source limitations, native support verification and independent U provenance. Unknown is not zero. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_normalization | all inventory rows | First reconcile the unallocated real event and stock quantities; assign shared service quantities once to node/period; divide each reconciled numerator by positive final accepted net animal kg for the same attributable lot/period. Final output divided by itself is 1. Keep the separate LCA attribution result labelled and never use it to close physical mass. | actual node protocols; final handover net weighing | Unallocated native-unit quantity per 1 kg reference; separately labelled LCA attribution | net-mass-normalization-identity |
| stock_fate_reconcile | all nodes | Use opening stock plus actual receipts and evidenced uptake, against actual outgoing transfers/products/releases/waste/loss and closing stock, separately by species/material and wet basis with uncertainty. Internal circulation is not new supply; retain body-water changes and observed fragments. Bait has a parallel live/consumed-stock ledger, not an assumed consumption fraction. | actual node protocols; paired transfers; stock/fate evidence | Physical reconciliation and explicit gaps, not forced exact closure |  |
| shared_then_product | all nodes | First attribute complete shared asset/service use to documented consumers/periods by supported causal driver; then subdivide dedicated product burdens and allocate remaining common burdens once using section 7 precedence. Retain stock-carried burden and disclose uncertain prices or physical relationships. Protect earlier externally exited shares; permit a genuinely new separation of the remaining carried pool under section 7, without duplicating any previous split. | consumer/service/period ledger; accepted external product evidence | Separate once-only LCA view linked to unallocated ledger |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_representative | all nodes | Use current site/gear/season-specific primary records and complete trip/service periods; disclose sample selection, missing events, source geography/time limitations and uncertainty, not generic performance claims. | Dated logs, receipts, calibration and scoped supplier data |
| dq_facts | all nodes | Class notes constrain classification only; NOAA qualitative examples do not transfer local rules/numbers globally; live-grading study abstract supports interface only, not universal mortality prediction, survival or food-safety certification. | Explicit source-use limitations and actual acceptance/use records |
| dq_range_identity | all inventory rows | Retain independent row/identity/state/pass U evidence and native unit support; symbolic U is unresolved quantitative coverage, not observed guidance or default quantity. No near-match UUID may broaden real scope. | Independent scoped campaign/design/supplier envelope; detail/support confirmation per concrete identity |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_capture_bait_attractants` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual purchased or transferred bait and attractants”; retain all following collection, quantity and normalization obligations: Expand each actual material and live-animal identity. Separate external purchase from paired internal receipts; live short lobsters are not automatically consumed bait. Opening/closing live stocks, survival, reuse, release, death and transfer need the bait ledger; never duplicate a same-node recirculation as a purchase. No universal authorization or mortality factor is provided. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_fuel` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuels consumed by this responsibility”; retain all following collection, quantity and normalization obligations: Expand actual fuel identities and quantities using delivery, tank, engine and operator records. Own only the node-attributed part of shared equipment/service periods; exclude fuel already included in a purchased inclusive service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_materials_water` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual supplied water and operating materials”; retain all following collection, quantity and normalization obligations: Expand each separately needed supplied water, gas, cleaning agent, lubricant, gear component or other material by actual identity and constitution as kg of the supplied product. Count or volume records require actual same-material mass/density/concentration evidence; do not sum incompatible native units or supply a default conversion. No compulsory water, oxygen or live-animal icing. Keep marine water, treated product water and carrier water distinct; services below must not hide material already separately owned here. Exclude separately addressed package receipts and presentation_package_materials from this umbrella. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_services` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating and shared asset services”; retain all following collection, quantity and normalization obligations: Expand real handling, weighing, pumping, aeration, temperature control, vessel, diver equipment, lighting, storage, cleaning, maintenance or treatment services only when used. Use each concrete service native quantity and separately verify property/unit support; recorded-native-unit is a declaration slot, never a universal conversion or material kg. Shared asset and service ledgers own complete periods and replacement/retirement once; supplier-inclusive inputs/emissions are not duplicated. Flow property / unit: Actual service property / recorded-native-unit Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_service. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_service` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_package_receipt` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual accessory package and reusable-unit receipts”; retain all following collection, quantity and normalization obligations: Only actual packages received at this real event, expanded by concrete identity, measured mass, owner and destination. Pair internal receipts to the preceding actual node package-output transfer id. Separate purchases from existing/internal receipts; do not duplicate other material cards or inclusive-service manufacture. Mere stock carry across periods adds no exchange; animal net mass always excludes the package. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure and pair actual node/pass records; retain unallocated physical and stock ledgers and express per 1 kg reference flow using cp_capture_mass. Separate once-only LCA attribution never replaces physical quantity. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_incidental_removed` | `capture`; inputs; elementary | Identify and separately collect every actual exchange covered by “Observed incidental organisms removed during capture”; retain all following collection, quantity and normalization obligations: Record actual species, count, measured or justified mass, life state and disposition independently from target animals; non-mass habitat/contact observations stay auxiliary, not fabricated kg exchanges. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait_transfer` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Live attractants transferred outside this node”; retain all following collection, quantity and normalization obligations: Only an actual physical transfer to a distinct recorded capture/handling instance with paired capture_bait_attractants receipt, destination and live state; mere stock carry across periods is not an exchange. Within-node retained/reused animals remain stock/circulation records, not additional output exchange. Any actually accepted external live-attractant sale belongs only to capture_other_accepted_products, not this internal card. Animals designated as bait are excluded from live-food reference mass. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_other_accepted_products` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Other actually accepted external products”; retain all following collection, quantity and normalization obligations: Expand each real species/grade/state and recipient/use acceptance, including live animals sold to another market or raw material sold for later external processing. Rejection, death or prospective sale alone does not establish an intended product. No freezing, cooking or tail removal is modelled here; all animal fates are mutually exclusive. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_package_transfer` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Actual accessory package and reusable-unit transfers”; retain all following collection, quantity and normalization obligations: Only actual packages leaving this real event; pair internal transfers to the next node package-receipt id, or evidence the actual external recipient and ownership/service gate. A reusable package return is not automatically an independent co-product; manufacture, repair and retirement are owned once over the complete service period. Retained stock is not an output. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure and pair actual node/pass records; retain unallocated physical and stock ledgers and express per 1 kg reference flow using cp_capture_mass. Separate once-only LCA attribution never replaces physical quantity. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_animal_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual dead animals and animal material sent as waste”; retain all following collection, quantity and normalization obligations: Record actual life state, material constitution, measured mass, waste acceptance and treatment destination at this node/pass. Not a co-product by default; avoid counting the same animal under release, retained stock or accepted alternative product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_operating_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual operating, gear and presentation waste”; retain all following collection, quantity and normalization obligations: Expand spent materials, retired gear or packaging and actual treatment receipts; same asset retirement cannot be charged again through inclusive services. Animal material is in its separate card; package reuse/return is not automatic disposal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_live_release` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual living organisms returned to the environment”; retain all following collection, quantity and normalization obligations: Require actual species, time, location, life state and release record at this node/pass. Separate target animals, live attractants and incidental organisms; no assumed survival or universal legal permission. Do not rename post-handling releases as pre-capture non-catch. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_water_discharge` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct discharge, evaporation or other water destination”; retain all following collection, quantity and normalization obligations: Expand real receiving medium and identity; separately track water carrier and constituent pollutants without duplicate whole-stream water. Reconcile intake, recirculation, body exchange, carried water, treatment transfers, discharge and opening/closing stock with measured uncertainty. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_other_environmental_releases` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance or material releases”; retain all following collection, quantity and normalization obligations: Expand individually evidenced pollutant species, receiving compartment and basis, including actual refrigerant, fuel/material leakage, lost gear or biological material where applicable. Do not use one UUID for the umbrella; exclude separately recorded fossil CO2, live returns and water carrier. Non-mass ecological interactions remain auxiliary observations. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_capture_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_capture_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_fuel` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuels consumed by this responsibility”; retain all following collection, quantity and normalization obligations: Expand actual fuel identities and quantities using delivery, tank, engine and operator records. Own only the node-attributed part of shared equipment/service periods; exclude fuel already included in a purchased inclusive service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_mass` Sources: `ross-live-argus-grading-2024` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_materials_water` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Actual supplied water and operating materials”; retain all following collection, quantity and normalization obligations: Expand each separately needed supplied water, gas, cleaning agent, lubricant, gear component or other material by actual identity and constitution as kg of the supplied product. Count or volume records require actual same-material mass/density/concentration evidence; do not sum incompatible native units or supply a default conversion. No compulsory water, oxygen or live-animal icing. Keep marine water, treated product water and carrier water distinct; services below must not hide material already separately owned here. Exclude separately addressed package receipts and presentation_package_materials from this umbrella. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_mass` Sources: `ross-live-argus-grading-2024` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_services` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating and shared asset services”; retain all following collection, quantity and normalization obligations: Expand real handling, weighing, pumping, aeration, temperature control, vessel, diver equipment, lighting, storage, cleaning, maintenance or treatment services only when used. Use each concrete service native quantity and separately verify property/unit support; recorded-native-unit is a declaration slot, never a universal conversion or material kg. Shared asset and service ledgers own complete periods and replacement/retirement once; supplier-inclusive inputs/emissions are not duplicated. Flow property / unit: Actual service property / recorded-native-unit Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_service. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_service` Sources: `ross-live-argus-grading-2024` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_package_receipt` | `grading`; inputs; product | Identify and separately collect every actual exchange covered by “Actual accessory package and reusable-unit receipts”; retain all following collection, quantity and normalization obligations: Only actual packages received at this real event, expanded by concrete identity, measured mass, owner and destination. Pair internal receipts to the preceding actual node package-output transfer id. Separate purchases from existing/internal receipts; do not duplicate other material cards or inclusive-service manufacture. Mere stock carry across periods adds no exchange; animal net mass always excludes the package. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure and pair actual node/pass records; retain unallocated physical and stock ledgers and express per 1 kg reference flow using cp_grading_mass. Separate once-only LCA attribution never replaces physical quantity. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_other_accepted_products` | `grading`; outputs; product | Identify and separately collect every actual exchange covered by “Other actually accepted external products”; retain all following collection, quantity and normalization obligations: Expand each real species/grade/state and recipient/use acceptance, including live animals sold to another market or raw material sold for later external processing. Rejection, death or prospective sale alone does not establish an intended product. No freezing, cooking or tail removal is modelled here; all animal fates are mutually exclusive. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_mass` Sources: `ross-live-argus-grading-2024` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_package_transfer` | `grading`; outputs; product | Identify and separately collect every actual exchange covered by “Actual accessory package and reusable-unit transfers”; retain all following collection, quantity and normalization obligations: Only actual packages leaving this real event; pair internal transfers to the next node package-receipt id, or evidence the actual external recipient and ownership/service gate. A reusable package return is not automatically an independent co-product; manufacture, repair and retirement are owned once over the complete service period. Retained stock is not an output. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure and pair actual node/pass records; retain unallocated physical and stock ledgers and express per 1 kg reference flow using cp_grading_mass. Separate once-only LCA attribution never replaces physical quantity. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_animal_waste` | `grading`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual dead animals and animal material sent as waste”; retain all following collection, quantity and normalization obligations: Record actual life state, material constitution, measured mass, waste acceptance and treatment destination at this node/pass. Not a co-product by default; avoid counting the same animal under release, retained stock or accepted alternative product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_mass` Sources: `ross-live-argus-grading-2024` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_operating_waste` | `grading`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual operating, gear and presentation waste”; retain all following collection, quantity and normalization obligations: Expand spent materials, retired gear or packaging and actual treatment receipts; same asset retirement cannot be charged again through inclusive services. Animal material is in its separate card; package reuse/return is not automatic disposal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_mass` Sources: `ross-live-argus-grading-2024` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_live_release` | `grading`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual living organisms returned to the environment”; retain all following collection, quantity and normalization obligations: Require actual species, time, location, life state and release record at this node/pass. Separate target animals, live attractants and incidental organisms; no assumed survival or universal legal permission. Do not rename post-handling releases as pre-capture non-catch. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_mass` Sources: `ross-live-argus-grading-2024` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_water_discharge` | `grading`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct discharge, evaporation or other water destination”; retain all following collection, quantity and normalization obligations: Expand real receiving medium and identity; separately track water carrier and constituent pollutants without duplicate whole-stream water. Reconcile intake, recirculation, body exchange, carried water, treatment transfers, discharge and opening/closing stock with measured uncertainty. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_mass` Sources: `ross-live-argus-grading-2024` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grading_other_environmental_releases` | `grading`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance or material releases”; retain all following collection, quantity and normalization obligations: Expand individually evidenced pollutant species, receiving compartment and basis, including actual refrigerant, fuel/material leakage, lost gear or biological material where applicable. Do not use one UUID for the umbrella; exclude separately recorded fossil CO2, live returns and water carrier. Non-mass ecological interactions remain auxiliary observations. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_grading_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_grading_mass` Sources: `ross-live-argus-grading-2024` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_fuel` | `holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuels consumed by this responsibility”; retain all following collection, quantity and normalization obligations: Expand actual fuel identities and quantities using delivery, tank, engine and operator records. Own only the node-attributed part of shared equipment/service periods; exclude fuel already included in a purchased inclusive service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_materials_water` | `holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual supplied water and operating materials”; retain all following collection, quantity and normalization obligations: Expand each separately needed supplied water, gas, cleaning agent, lubricant, gear component or other material by actual identity and constitution as kg of the supplied product. Count or volume records require actual same-material mass/density/concentration evidence; do not sum incompatible native units or supply a default conversion. No compulsory water, oxygen or live-animal icing. Keep marine water, treated product water and carrier water distinct; services below must not hide material already separately owned here. Exclude separately addressed package receipts and presentation_package_materials from this umbrella. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_services` | `holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating and shared asset services”; retain all following collection, quantity and normalization obligations: Expand real handling, weighing, pumping, aeration, temperature control, vessel, diver equipment, lighting, storage, cleaning, maintenance or treatment services only when used. Use each concrete service native quantity and separately verify property/unit support; recorded-native-unit is a declaration slot, never a universal conversion or material kg. Shared asset and service ledgers own complete periods and replacement/retirement once; supplier-inclusive inputs/emissions are not duplicated. Flow property / unit: Actual service property / recorded-native-unit Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_service. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_service` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_package_receipt` | `holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual accessory package and reusable-unit receipts”; retain all following collection, quantity and normalization obligations: Only actual packages received at this real event, expanded by concrete identity, measured mass, owner and destination. Pair internal receipts to the preceding actual node package-output transfer id. Separate purchases from existing/internal receipts; do not duplicate other material cards or inclusive-service manufacture. Mere stock carry across periods adds no exchange; animal net mass always excludes the package. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure and pair actual node/pass records; retain unallocated physical and stock ledgers and express per 1 kg reference flow using cp_holding_mass. Separate once-only LCA attribution never replaces physical quantity. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_other_accepted_products` | `holding`; outputs; product | Identify and separately collect every actual exchange covered by “Other actually accepted external products”; retain all following collection, quantity and normalization obligations: Expand each real species/grade/state and recipient/use acceptance, including live animals sold to another market or raw material sold for later external processing. Rejection, death or prospective sale alone does not establish an intended product. No freezing, cooking or tail removal is modelled here; all animal fates are mutually exclusive. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_package_transfer` | `holding`; outputs; product | Identify and separately collect every actual exchange covered by “Actual accessory package and reusable-unit transfers”; retain all following collection, quantity and normalization obligations: Only actual packages leaving this real event; pair internal transfers to the next node package-receipt id, or evidence the actual external recipient and ownership/service gate. A reusable package return is not automatically an independent co-product; manufacture, repair and retirement are owned once over the complete service period. Retained stock is not an output. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure and pair actual node/pass records; retain unallocated physical and stock ledgers and express per 1 kg reference flow using cp_holding_mass. Separate once-only LCA attribution never replaces physical quantity. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_animal_waste` | `holding`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual dead animals and animal material sent as waste”; retain all following collection, quantity and normalization obligations: Record actual life state, material constitution, measured mass, waste acceptance and treatment destination at this node/pass. Not a co-product by default; avoid counting the same animal under release, retained stock or accepted alternative product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_operating_waste` | `holding`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual operating, gear and presentation waste”; retain all following collection, quantity and normalization obligations: Expand spent materials, retired gear or packaging and actual treatment receipts; same asset retirement cannot be charged again through inclusive services. Animal material is in its separate card; package reuse/return is not automatic disposal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_live_release` | `holding`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual living organisms returned to the environment”; retain all following collection, quantity and normalization obligations: Require actual species, time, location, life state and release record at this node/pass. Separate target animals, live attractants and incidental organisms; no assumed survival or universal legal permission. Do not rename post-handling releases as pre-capture non-catch. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_water_discharge` | `holding`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct discharge, evaporation or other water destination”; retain all following collection, quantity and normalization obligations: Expand real receiving medium and identity; separately track water carrier and constituent pollutants without duplicate whole-stream water. Reconcile intake, recirculation, body exchange, carried water, treatment transfers, discharge and opening/closing stock with measured uncertainty. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_other_environmental_releases` | `holding`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance or material releases”; retain all following collection, quantity and normalization obligations: Expand individually evidenced pollutant species, receiving compartment and basis, including actual refrigerant, fuel/material leakage, lost gear or biological material where applicable. Do not use one UUID for the umbrella; exclude separately recorded fossil CO2, live returns and water carrier. Non-mass ecological interactions remain auxiliary observations. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_holding_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_holding_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_fuel` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuels consumed by this responsibility”; retain all following collection, quantity and normalization obligations: Expand actual fuel identities and quantities using delivery, tank, engine and operator records. Own only the node-attributed part of shared equipment/service periods; exclude fuel already included in a purchased inclusive service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_materials_water` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual supplied water and operating materials”; retain all following collection, quantity and normalization obligations: Expand each separately needed supplied water, gas, cleaning agent, lubricant, gear component or other material by actual identity and constitution as kg of the supplied product. Count or volume records require actual same-material mass/density/concentration evidence; do not sum incompatible native units or supply a default conversion. No compulsory water, oxygen or live-animal icing. Keep marine water, treated product water and carrier water distinct; services below must not hide material already separately owned here. Exclude separately addressed package receipts and presentation_package_materials from this umbrella. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_services` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating and shared asset services”; retain all following collection, quantity and normalization obligations: Expand real handling, weighing, pumping, aeration, temperature control, vessel, diver equipment, lighting, storage, cleaning, maintenance or treatment services only when used. Use each concrete service native quantity and separately verify property/unit support; recorded-native-unit is a declaration slot, never a universal conversion or material kg. Shared asset and service ledgers own complete periods and replacement/retirement once; supplier-inclusive inputs/emissions are not duplicated. Flow property / unit: Actual service property / recorded-native-unit Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_service. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_service` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_package_materials` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual protective package materials and reusable units”; retain all following collection, quantity and normalization obligations: Expand actual single-use and reusable components, tare, cleaning and service cycles; retain return/deposit evidence and residual condition. This input also owns actual internal package receipts, paired to the preceding package-output transfer id; distinguish them from external purchases and opening stock. Mere stock carry is not an exchange, and the same receipt cannot also enter another material card. Do not charge entire reusable manufacture each lot, or omit manufacture/repair/retirement across its evidenced service period. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_other_accepted_products` | `presentation`; outputs; product | Identify and separately collect every actual exchange covered by “Other actually accepted external products”; retain all following collection, quantity and normalization obligations: Expand each real species/grade/state and recipient/use acceptance, including live animals sold to another market or raw material sold for later external processing. Rejection, death or prospective sale alone does not establish an intended product. No freezing, cooking or tail removal is modelled here; all animal fates are mutually exclusive. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_package_transfer` | `presentation`; outputs; product | Identify and separately collect every actual exchange covered by “Packages accompanying animals or actually returned for reuse”; retain all following collection, quantity and normalization obligations: Separate each real package destination from animal net mass. Paired internal receipt if still producer-owned, external transfer only at actual ownership/service gate; closing package stock is not a sale. Reuse burdens remain unique to the service ledger. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_animal_waste` | `presentation`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual dead animals and animal material sent as waste”; retain all following collection, quantity and normalization obligations: Record actual life state, material constitution, measured mass, waste acceptance and treatment destination at this node/pass. Not a co-product by default; avoid counting the same animal under release, retained stock or accepted alternative product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_operating_waste` | `presentation`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual operating, gear and presentation waste”; retain all following collection, quantity and normalization obligations: Expand spent materials, retired gear or packaging and actual treatment receipts; same asset retirement cannot be charged again through inclusive services. Animal material is in its separate card; package reuse/return is not automatic disposal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_live_release` | `presentation`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual living organisms returned to the environment”; retain all following collection, quantity and normalization obligations: Require actual species, time, location, life state and release record at this node/pass. Separate target animals, live attractants and incidental organisms; no assumed survival or universal legal permission. Do not rename post-handling releases as pre-capture non-catch. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_water_discharge` | `presentation`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct discharge, evaporation or other water destination”; retain all following collection, quantity and normalization obligations: Expand real receiving medium and identity; separately track water carrier and constituent pollutants without duplicate whole-stream water. Reconcile intake, recirculation, body exchange, carried water, treatment transfers, discharge and opening/closing stock with measured uncertainty. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_other_environmental_releases` | `presentation`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance or material releases”; retain all following collection, quantity and normalization obligations: Expand individually evidenced pollutant species, receiving compartment and basis, including actual refrigerant, fuel/material leakage, lost gear or biological material where applicable. Do not use one UUID for the umbrella; exclude separately recorded fossil CO2, live returns and water carrier. Non-mass ecological interactions remain auxiliary observations. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_presentation_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_presentation_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_fuel` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fuels consumed by this responsibility”; retain all following collection, quantity and normalization obligations: Expand actual fuel identities and quantities using delivery, tank, engine and operator records. Own only the node-attributed part of shared equipment/service periods; exclude fuel already included in a purchased inclusive service. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_materials_water` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual supplied water and operating materials”; retain all following collection, quantity and normalization obligations: Expand each separately needed supplied water, gas, cleaning agent, lubricant, gear component or other material by actual identity and constitution as kg of the supplied product. Count or volume records require actual same-material mass/density/concentration evidence; do not sum incompatible native units or supply a default conversion. No compulsory water, oxygen or live-animal icing. Keep marine water, treated product water and carrier water distinct; services below must not hide material already separately owned here. Exclude separately addressed package receipts and presentation_package_materials from this umbrella. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_services` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual operating and shared asset services”; retain all following collection, quantity and normalization obligations: Expand real handling, weighing, pumping, aeration, temperature control, vessel, diver equipment, lighting, storage, cleaning, maintenance or treatment services only when used. Use each concrete service native quantity and separately verify property/unit support; recorded-native-unit is a declaration slot, never a universal conversion or material kg. Shared asset and service ledgers own complete periods and replacement/retirement once; supplier-inclusive inputs/emissions are not duplicated. Flow property / unit: Actual service property / recorded-native-unit Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_service. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_service` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_package_receipt` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual accessory package and reusable-unit receipts”; retain all following collection, quantity and normalization obligations: Only actual packages received at this real event, expanded by concrete identity, measured mass, owner and destination. Pair internal receipts to the preceding actual node package-output transfer id. Separate purchases from existing/internal receipts; do not duplicate other material cards or inclusive-service manufacture. Mere stock carry across periods adds no exchange; animal net mass always excludes the package. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure and pair actual node/pass records; retain unallocated physical and stock ledgers and express per 1 kg reference flow using cp_handover_mass. Separate once-only LCA attribution never replaces physical quantity. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_other_accepted_products` | `handover`; outputs; product | Identify and separately collect every actual exchange covered by “Other actually accepted external products”; retain all following collection, quantity and normalization obligations: Expand each real species/grade/state and recipient/use acceptance, including live animals sold to another market or raw material sold for later external processing. Rejection, death or prospective sale alone does not establish an intended product. No freezing, cooking or tail removal is modelled here; all animal fates are mutually exclusive. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_package_transfer` | `handover`; outputs; product | Identify and separately collect every actual exchange covered by “Actual accessory package and reusable-unit transfers”; retain all following collection, quantity and normalization obligations: Only actual packages leaving this real event; pair internal transfers to the next node package-receipt id, or evidence the actual external recipient and ownership/service gate. A reusable package return is not automatically an independent co-product; manufacture, repair and retirement are owned once over the complete service period. Retained stock is not an output. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Measure and pair actual node/pass records; retain unallocated physical and stock ledgers and express per 1 kg reference flow using cp_handover_mass. Separate once-only LCA attribution never replaces physical quantity. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_animal_waste` | `handover`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual dead animals and animal material sent as waste”; retain all following collection, quantity and normalization obligations: Record actual life state, material constitution, measured mass, waste acceptance and treatment destination at this node/pass. Not a co-product by default; avoid counting the same animal under release, retained stock or accepted alternative product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_operating_waste` | `handover`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual operating, gear and presentation waste”; retain all following collection, quantity and normalization obligations: Expand spent materials, retired gear or packaging and actual treatment receipts; same asset retirement cannot be charged again through inclusive services. Animal material is in its separate card; package reuse/return is not automatic disposal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_live_release` | `handover`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual living organisms returned to the environment”; retain all following collection, quantity and normalization obligations: Require actual species, time, location, life state and release record at this node/pass. Separate target animals, live attractants and incidental organisms; no assumed survival or universal legal permission. Do not rename post-handling releases as pre-capture non-catch. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_water_discharge` | `handover`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual direct discharge, evaporation or other water destination”; retain all following collection, quantity and normalization obligations: Expand real receiving medium and identity; separately track water carrier and constituent pollutants without duplicate whole-stream water. Reconcile intake, recirculation, body exchange, carried water, treatment transfers, discharge and opening/closing stock with measured uncertainty. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_other_environmental_releases` | `handover`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual substance or material releases”; retain all following collection, quantity and normalization obligations: Expand individually evidenced pollutant species, receiving compartment and basis, including actual refrigerant, fuel/material leakage, lost gear or biological material where applicable. Do not use one UUID for the umbrella; exclude separately recorded fossil CO2, live returns and water carrier. Non-mass ecological interactions remain auxiliary observations. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: Recorded actual concrete exchanges, uniquely owned by this node/pass, reconciled physically and expressed per 1 kg reference flow; use cp_handover_mass. No substitution of an allocated share for physical amount. Value mode: foreground_record Specificity: site_specific Normalization basis: per 1 kg reference flow Basis kind: reference_flow Evidence kind: collected_record Collection protocol: `cp_handover_mass` Sources: `noaa-caribbean-spiny-lobster` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity_gate` | live_argus_handover | Require Panulirus argus, wild origin, alive/whole/native-shell condition, food destination, first producer acceptance evidence and positive net kg. Reject other taxa, growout/fattening, ornamental, tails/meat, dead reference, freezing/cooking/thawing and later buyer gate. All required qualifiers must be declared. | `un-cpc3-aquatic-2025` |
| `event_reconciliation` | all nodes | Check real chronology and each node/pass receipt-output-loss-stock balance by material/species and wet/other basis with uncertainty. Pair transfers once, validate live-only receipt conditions, unique external fates and physically measured reference. Changes of grade do not create mass; missing uptake/loss terms remain gaps, never forced exact closure. |  |
| `technology_events` | capture | Check actual trap/diver/bullynet parent implementation and the corresponding current deployment, equipment/service, effort, bait, lighting and fate evidence. Mixed events require disjoint ownership. No stack of all gear defaults; no borrowed universal legality, stock claim, mortality or performance. | `noaa-caribbean-spiny-lobster` |
| `attractant_balance` | capture | Reconcile separate live bait stocks, actual purchases/designation, internal transfers, reuse, releases and death/material fates. Same-node loops are not exchanges; food reference and attractants cannot double own one animal. Scope exclusions do not erase attributable live-attractant burden. | `noaa-caribbean-spiny-lobster` |
| `two_view_attribution` | all nodes | Require the unallocated physical ledger and separately labelled once-only LCA view; inspect every intended output handoff, allocation precedence, shared consumer fractions, service completeness, stock carry and zero-output periods. Never use attribution to repair physical balance or repeat common burden downstream. |  |
| `range_independence` | all inventory rows | Each non-reference 0..U is only an unresolved evidence-envelope slot in the stated numerator unit per 1 kg reference. Instantiate independent row/identity/state/pass-specific U from a reviewed distinct campaign, design capacity or supplier evidence with scope and uncertainty before QA use. Do not use the target batch maximum to validate itself, claim a universal physical limit, default unknown to zero or clip outliers. 1..1 on reference is arithmetic normalization, not yield or measured survival. |  |
| `identity_projection` | all inventory rows | Resolve each actual concrete exchange identity, geography/provider, property/unit and compartment with evidence before dataset release; expand umbrella cards without a fake fixed UUID. Keep bilingual cards, rules, protocols and projection aligned. A methodology check does not verify actual data, legal compliance, UUIDs or safety. |  |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Evidence-complete wild live whole Panulirus argus first-producer-gate modelling with declared capture technology, event topology, complete service periods and explicit once-only attribution. |
| excluded_use | Other species/routes outside declared scope, farmed/fattened, ornamental, dead/processed reference, later buyer gate, legal/welfare/safety certification or universal yield/survival factors. |
| required_metadata | All reference qualifiers, actual location/time/node/pass/state, collection protocol, complete boundary and service periods, stocks/fates, upstream links, native quantities, physical and LCA views, source/identity evidence. |
| required_quality_disclosure | Uncertainty and missing evidence, provisional envelope status, actual scope limitations, completeness and nonduplication checks; no pass implies empirical data or publication readiness. |
| update_trigger | Change to species/state/gate, independent operation or capture delta, supplier/native property, stock/service/attribution boundary, evidence or accepted recipient/use. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-aquatic-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Original UN CPC3 explanatory notes, printed pp.46–48; classification boundary only, narrower live Panulirus argus scope; accessed 2026-10-10. |
| `noaa-caribbean-spiny-lobster` | official_guidance | https://www.fisheries.noaa.gov/species/caribbean-spiny-lobster | NOAA species and qualitative trap/diver/bullynet interfaces, incidental organisms and gear fate; jurisdiction-specific regulatory/stock figures and bait mortality not imported as defaults; accessed 2026-10-10. |
| `ross-live-argus-grading-2024` | literature | https://doi.org/10.1016/j.fishres.2024.107117 | Ross et al., Fisheries Research278 (2024)107117, publisher abstract: actual live-market qualitative grading and alternative-market interface only. No predictor, quantitative performance or threshold imported; full text not used; accessed2026-10-10. |
| `net-mass-normalization-identity` | method_factor | Declared arithmetic identity: section8 physical_normalization | Division by positive accepted final net animal kg; 1 kg/1 kg identity only, not yield, allocation factor or empirical range. |
