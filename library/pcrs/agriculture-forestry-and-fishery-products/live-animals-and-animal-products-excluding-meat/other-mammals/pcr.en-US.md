---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-mammals
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other mammals, live

## 1. Scope and Applicability

This PCR covers living mammals not separately classified as bovines, other ruminants, equines, swine, rabbits or hares. It is a heterogeneous residual category, not a species-free average or a legal authorization for wild-animal trade. Every concrete lot requires taxonomic species, origin, purpose, conservation and legal status, welfare controls and actual handover gate. Captive breeding/rearing and demonstrably lawful live capture are mutually exclusive lot routes. Classification mention of cetaceans, sirenians, primates or other protected groups never authorizes contemporary capture. Without lawful-source evidence the capture route cannot be used. Dead animals, meat, fur, slaughter and post-gate transport/use are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-mammals` |
| classification_refs | CPC 3.0 `02192`, Other mammals |
| covered_products | Species-resolved living residual-class mammals of lawful captive or lawful live-capture origin |
| excluded_products | Specifically classified live mammals; dead animals; meat/fur; undocumented wildlife trade; post-gate use |
| representative_product | One declared species/class of living mammal, not a cross-species mix |
| production_route | Managed breeding/rearing followed by selection, or separately documented lawful live capture; never fictional breeding on capture route |
| market_state | Alive and unprocessed at real producer/capture handover, with count, mass and condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living mammal of a declared residual-category species at its real handover |
| How much | 1 kg measured live mass, plus individual count |
| How well | Alive, species-resolved, lawful origin and condition established |
| How long or cycle | Actual breeding/rearing cohort and service periods, or documented capture campaign |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species-qualified live other mammal at actual gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Scientific species; count/class; live condition; mass method; route; origin; protected status; permit; jurisdiction; actual gate; period |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

No species-free platform Product flow proves the concrete reference. Final exchanges require exact species/route/gate identity verification.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | Incoming and outgoing animals | Mass | kg | Weigh individuals or validate species/class sampling and reconcile with counts. |
| `count_balance` | Each lot and period | Count | head | Opening + births + purchases + captures − transfers − releases − deaths = closing; identify animals once. |
| `period_index` | Cohorts and assets | Time | days or cycle | Link inputs, outputs, replacements and assets to real benefited periods; do not assume lifespan. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented captive opening/purchased stock and prior burden, or lawful pre-capture campaign context |
| starting_condition_role | Managed biological stock or authorized wild-source context; no fictional lifetime farming on capture route |
| product_classification_scope | CPC 3.0 `02192` after exclusion of more specific live-mammal leaves |
| recursive_input_rule | Link purchased same-category animals once to preceding-gate data; internal rearing/selection transfer is not another final product. |
| upstream_dataset_requirement | Match incoming stock, feed, water, energy and materials to species, supplier, geography, unit and gate. |
| disclosure | Species, lawful source and protected status, permit, welfare, lot/cohort/campaign, asset periods, death/release, outputs and actual gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_identity` | Every lot | Species-level residual classification and lawful origin are prerequisites; CPC examples are not permits. | `un-cpc-2025`; `woah-wildlife-trade-2021` |
| `boundary_managed` | Captive route | Include actual stock, husbandry inputs, care, mortality and pre-gate selection; purchased stock carries upstream burden. | `woah-wildlife-trade-2021` |
| `boundary_capture` | Capture route | Include only authorized campaign, equipment, temporary holding, welfare and capture handover; without legal evidence this route is ineligible. | `woah-wildlife-trade-2021` |
| `boundary_gate` | Both | End at real live handover; exclude post-gate delivery, buyer use, slaughter and corpse processing. | `un-cpc-2025` |
| `boundary_shared` | Shared enclosure/equipment | Record consuming nodes and service periods; charge common burden once. |  |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed` | Managed breeding and rearing | conditional | Lawful species-resolved captive operation | Biological production, stock, feed, welfare, mortality, real co-products | per kg live mammals leaving managed rearing |
| `selection` | Live selection and handover | conditional | Captive route only | Independent health/condition screen, weighing and producer gate | per kg accepted producer-gate live mammal |
| `capture` | Lawful live capture and handover | conditional | Documented authorized campaign only | Independent capture, short holding and actual capture gate; no farm production | per kg accepted capture-gate live mammal |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

Managed and capture are mutually exclusive per lot. Selection is separate from growth because acceptance, weighing and handover follow production. Capture removes an animal from a documented lawful source, not from fictional managed stock. Death is loss/waste, not live output; release is documented in the animal ledger, not a sale or waste. Index breeding, rearing, replacement and shared-service periods as well as capture events.

### Process: Managed breeding and rearing (`managed`)

#### Inputs

##### Product flows

###### Purchased living stock (`stock`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Species-qualified live stock (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Species-appropriate feed (`feed`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Use separate feed-supply, intake and loss ledgers under calc_feed_supply_and_intake. The quantity carrying feed-production burden includes in-boundary refusals, spoilage and uneaten feed; it is not reduced to animal intake. Retain source, species/cohort, phase and original mass/moisture basis. Calculate the final contribution with inventory_reference_normalization and stage_throughput_linkage exactly once. Original collection denominator kind: process_output.

- Selected flow: Feed by actual identity (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied husbandry water (`water`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Water by actual use (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Housing energy (`energy`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Energy by actual carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shared enclosure service (`assets`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Shared asset service (UUID unresolved)
- Flow property / unit: Time / h
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: h/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live animals leaving rearing (`reared`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Species-qualified live animals (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Unit output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Real independent co-products (`other_output`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Co-product by actual identity (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pre-gate animal mortality (`death`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Dead animal material by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded collected mammal manure (`review_managed_manure_waste`)

Record collected manure actually sent to treatment or disposal, its moisture and destination. Grazing deposition is not a collected waste transfer. Useful independently transferred manure needs its own evidenced product treatment; never count the same material in both.

- Selected flow: Collected mammal manure for treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh the actual waste handoff, apply existing attribution and normalize once to accepted final reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

Range evidence need: determine wet/dry-state waste quantities from actual manure records, not a universal species-free yield.

##### Elementary flows

###### Enteric biogenic methane to air (`review_managed_enteric_ch4`)

Only for an applicable digestive pathway of the actual managed species and class; derive emissions from documented animal activity/intake and a justified method. Do not substitute a cattle factor for an uncharacterised species. Applies only to the operated `managed` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Methane, biogenic, to air (UUID unresolved)
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Manure biogenic methane to air (`review_managed_manure_ch4`)

Calculate actual atmospheric release by manure system, climate, residence time and volatile-solids activity. Reconcile captured, destroyed or oxidised methane; produced methane is not automatically emitted methane. Applies only to the operated `managed` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Methane, biogenic, to air (UUID unresolved)
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Direct manure nitrous oxide to air (`review_managed_direct_n2o`)

Use the actual manure-management nitrogen pathway. Keep storage/treatment distinct from field application and grazing deposition, which require a managed-soil method and an explicitly assigned inventory responsibility. Applies only to the operated `managed` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Indirect manure nitrogen-derived nitrous oxide to air (`review_managed_indirect_n2o`)

Calculate attributable indirect N2O from documented manure N volatilisation/deposition and leaching/runoff pathways where applicable. Keep separate from direct N2O and reconcile any nitrogen-fate calculation already included downstream or in the chosen background/impact model. Applies only to the operated `managed` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Manure ammonia to air (`review_managed_nh3`)

Use actual species, housing/storage conditions and a justified nitrogen-flow method. Track total N and ammoniacal N by stage; a generic volatilised-N estimate is not automatically NH3 because it may include other nitrogen species. Applies only to the operated `managed` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Ammonia to air (UUID unresolved)
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-eea-manure-2023`

### Process: Live selection and handover (`selection`)

#### Inputs

##### Product flows

###### Live animals entering selection (`selected_in`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Species-qualified live animals (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live animal at producer handover (`handover`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Species-qualified live mammal at producer gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Unit output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Deaths during selection (`selection_death`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Dead animal material by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Lawful live capture and handover (`capture`)

#### Inputs

##### Product flows

###### Capture and temporary holding energy (`capture_energy`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Energy by actual carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Capture and welfare materials (`capture_materials`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Actual capture consumables (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live animal at lawful capture handover (`captured_live`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Species-qualified live mammal at capture gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Unit output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Capture mortality (`capture_death`)

Record only real exchanges, resolved by species, gate, use and destination.

Denominator and scope requirements：per kg live output of this process

Raw quantity and calculation requirements: Measure the actual exchange for one process, lot and period; do not double count internal transfers. Original collection denominator kind: process_output.

- Selected flow: Dead animal material by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Species-qualified live other mammal at actual gate for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `handover`, `captured_live` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `handover`, `captured_live`

Required product-instance qualifiers: Scientific species; count/class; live condition; mass method; route; origin; protected status; permit; jurisdiction; actual gate; period

- Selected flow: Species-qualified live other mammal at actual gate for actual producer-handover linkage
- Flow property / unit: Mass / kg
- Amount rule: Use measured accepted same-lot quantity reconciled to the linked source rows; normalize once to the declared reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`

- Range: Exact identity-reconciliation check after normalization, not a production-yield default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Declared reference quantity; input and output are the same accepted physical goods under the same handover ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Species-qualified live other mammal at actual gate (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `handover`, `captured_live`

Required product-instance qualifiers: Scientific species; count/class; live condition; mass method; route; origin; protected status; permit; jurisdiction; actual gate; period

- Selected flow: Species-qualified live other mammal at actual gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`

- Range: Exact identity-reconciliation check after normalization, not a production-yield default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Declared reference quantity; input and output are the same accepted physical goods under the same handover ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_outputs` | Managed output set | Enumerate only real independent products and their handovers. Subdivide separable processes; otherwise allocate inseparable burdens by documented handover economic value, disclose prices/period and mass-allocation sensitivity. No hypothetical credit. |  |
| `allocation_capture` | Capture campaign | Attribute actual campaign burdens to lawfully transferred intended outputs; releases are non-sale and mortality follows actual disposal. |  |
| `allocation_periods` | Cohorts and replacements | Attribute inputs and replacement stock to benefited periods with opening/closing reconciliation; internal animal transfer has one burden. |  |
| `allocation_assets` | Shared enclosures/equipment | Allocate by recorded service hours/capacity across consuming nodes and periods; do not double count. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | managed; selection; capture | live stock, handover, mortality | animal ledger | species; ID; count; mass; origin; law/permit; status; gate; date; death; release | weighing and custody/health records; Raw aggregation requirements: unique event sum. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; head | each event | full cohort/campaign | site/campaign | per reference flow | scale calibration; permits; vet/transfer records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_inputs` | managed; capture | feed, water, energy, material | meter/invoice ledger | identity; carrier; amount; period; node; stock change | invoices, meters and inventory; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | kg; MJ | each receipt/meter period | full cycle/campaign | site | per reference flow | invoice; calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_assets` | managed; selection; capture | shared asset | service log | asset; node; service hours/capacity; period; burden | enclosure/equipment log; Raw aggregation requirements: once by observed use. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | h | each service period | full asset window | site/campaign | per reference flow | asset and maintenance records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_outputs` | managed | other real intended output | transfer record | identity; quantity; recipient; price; legal basis; date | actual transfer document; Raw aggregation requirements: by output and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each transfer | full cohort | site | per reference flow | sales/transfer record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |
| `cp_pathway_emissions` | `managed` | pathway-specific gases and manure N/C | herd, feed, manure, field and method ledger | species/class; animal-days; intake/DM/digestibility; volatile solids; manure N/TAN; system shares; climate; storage time; fertiliser N; grazing; volatilisation/leaching; methane recovery; factor source/unit; final accepted output ; collected manure wet mass; dry matter; destination| collect primary activity by node and period, document parameter applicability, retain each pathway worksheet and any linked treatment/pasture dataset  Retain raw totals and normalize attributed quantities once to the measured accepted final reference output.| animal-day; kg DM; kg VS; kg N; kg CH4; kg N2O; kg NH3 | each operating period and management change | complete represented cohort and service period | actual operated nodes only | per reference flow | meter/analysis records, nitrogen cascade, method and factor evidence, no-duplication ledger |
| `cp_feed_supply_and_intake` | `managed` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `managed` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | Accepted live output | Sum measured accepted live kg / 1 kg; retain head count, species and unique gate. | `cp_animals` | reference mass/count |  |
| `calc_balance` | Animal events | Reconcile opening, birth, purchase, capture, transfer, release, death and closing by species/class/period; growth mass is measured, not conserved by assumption. | `cp_animals` | balanced ledger |  |
| `calc_inputs` | Supplies | Net measured supply assigned to node/period / accepted live kg; do not combine captive and capture routes. | `cp_inputs`; `cp_animals` | card intensities |  |
| `calc_shared` | Shared asset | Asset burden × observed node/period share; shares sum to one or unused capacity is disclosed. | `cp_assets` | nonduplicate burden |  |
| `calc_allocation` | Multi-output | After subdivision allocate inseparable burden by documented handover value, with mass sensitivity. | `cp_outputs`; `cp_animals` | output burden |  |
| `calc_pathway_emissions` | `managed` | Use species- and management-compatible methods and retain disaggregated pathway totals. Convert N2O-N to N2O by 44/28 and NH3-N to NH3 by 17/14 exactly once; already molecular masses are not reconverted. Check methane against the documented available-carbon/methane-potential balance and nitrogen losses against each stage's available N. Indirect formation from previously volatilised N is a downstream transformation, not a second source-stage N loss. Attribute and normalize once; do not duplicate linked treatment or fate-model emissions.  Use matched raw-period quantities before allocation for physical screens: CH4 mass × 12/16 must not exceed the carbon available to the represented pathway; source-stage NH3 mass × 14/17 plus direct N2O mass × 28/44 and other source N losses must not exceed that stage's available N, after accounting for stocks and transfers. Bound each indirect N2O-N calculation by its documented volatilised or leached N precursor, not by subtracting that downstream transformation again from the source ledger. These are conservation checks, not emission factors or an empirical per-product range.| `cp_pathway_emissions` | kg named compound per final reference flow | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `review_managed_direct_n2o`; `review_managed_indirect_n2o` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_law` | Each lot | Species, source, conservation status, permissions and custody chain for exact date/jurisdiction must be established. | taxonomy; permits; custody |
| `dq_gate` | Live output | Alive status, count, measured mass, condition and actual gate must reconcile. | scale; transfer; veterinary records |
| `dq_completeness` | Both routes | Reconcile inputs, outputs, deaths/releases, cohorts and campaign. | ledgers; invoices; discrepancy log |
| `dq_periods` | Shared and multi-period | Link asset/cohort burden once to real service periods. | asset and cohort ledgers |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_classification` | All | Reject species-free, wrong residual classification, undocumented origin or unresolved legal/protected status. | `un-cpc-2025`; `woah-wildlife-trade-2021` |
| `validate_route` | Each lot | Exactly one captive or lawful-capture source; capture cannot claim farm stock, captive route cannot claim wild capture. |  |
| `validate_live` | Final output | Mass, count, live condition and gate reconcile; deaths/releases and post-gate animals cannot inflate output. |  |
| `validate_allocation` | Outputs/periods | Each co-product has real handover; asset/period shares and internal transfers cannot double count. |  |
| `validate_uuid` | Concrete exchanges | Before final exchange, confirm exact flow species, role, gate, property and unit; semantic unresolved cards are not executable UUIDs. |  |
| `v_pathway_emission_coverage` | `managed` | Require a pathway coverage ledger for enteric CH4 where biologically applicable, manure CH4, direct/indirect N2O, NH3 and relevant field emissions. Every pathway needs a measured/calculated value, a named linked process with matching coverage, or supported inapplicability; absent data cannot become zero. Keep wild life before capture outside managed husbandry, assess actual managed holding separately, and retain species-specific evidence. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground package for one lawful species/class, route and live gate |
| downstream_use | Compatible secondary_dataset or background_dataset |
| allowed_use | Same species, route, geography, law, class, period and gate after exact identity review |
| excluded_use | Generic mammal mix; unlicensed capture; protected trade without authority; slaughter, meat/fur or post-gate use |
| required_metadata | species; count/mass; route; protected/legal status; permits; site; cohort/campaign; gate; outputs; periods; UUID state |
| required_quality_disclosure | weighing, animal balance, welfare/legal chain, allocation, missing data, shared service and binding gaps |
| update_trigger | species, legal state, route, gate, inventory, allocation or platform identity changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | residual category and exclusions |
| `woah-wildlife-trade-2021` | official_guidance | [WOAH review of wildlife trade](https://www.woah.org/app/uploads/2022/08/a-oie-review-wildlife-trade-march2021.pdf) | legal/welfare/traceability risk questions |
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | Species and pathway applicability; CH4 and N2O method selection, not universal emission factors |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 nitrogen-flow method; verify actual species, management and geographical applicability before adopting parameters |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Managed-soil direct and indirect nitrogen pathways and boundary reconciliation |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed supply versus intake and waste burden, not animal parameters. Applying this accounting principle to the declared taxon is this PCR's methodological choice; no pig diet or emission factor is transferred. |
