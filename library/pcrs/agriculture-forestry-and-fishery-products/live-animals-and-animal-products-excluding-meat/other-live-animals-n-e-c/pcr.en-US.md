---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-live-animals-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other live animals, n.e.c.

## 1. Scope and Applicability

Legally supplied living animals not assigned to a more specific class: eligible amphibians, non-bee insects including living silkworms, spiders, scorpions, worms and leeches. Each dataset fixes one species, life stage, source route, condition and handover gate. Exclude bees, separately classified birds, mammals or reptiles, dead edible insects, silkworm cocoons, dead animals and aquatic goods assigned elsewhere. The residual class does not license capture or trade.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-live-animals-n-e-c |
| classification_refs | CPC 3.0 02199 |
| covered_products | Eligible living amphibians, non-bee insects, spiders, scorpions, worms and leeches after species-specific classification review. |
| excluded_products | Bees; separately classified live vertebrates; dead edible insects; silkworm cocoons; dead animals; aquatic goods elsewhere; illegal sources. |
| representative_product | One species- and life-stage-qualified living lot at actual source handover. |
| production_route | Managed breeding/rearing or demonstrably lawful wild live capture, then live selection and species-appropriate holding/handover; purchased stock retains upstream burden. |
| market_state | Living viable animals in declared life stage and holding condition. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One declared living species and life stage, not an undifferentiated animal mixture. |
| How much | 1 kg measured live animal biomass excluding removable water, substrate and container. |
| How well | Species, classification, life stage, count or population estimate, viability, wet-mass method, holding medium, source legality and gate. |
| How long or cycle | Actual cohort or collection event and nonoverlapping production, service and replacement periods. |
| reference_flow_link | `product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species-, stage- and gate-qualified living animal |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; classification decision; life stage; count or population estimate; viability; wet-mass method; holding medium; legal source; route; gate; period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | reference product | Mass | kg | Use calibrated net live-animal mass; exclude removable water, substrate and container. |
| m_count | each lot | Count and Mass | count and kg | Report count or documented population estimate; convert only using measured lot mass, never a universal larva/adult factor. |
| m_period | cohort and shared assets | Time | period | Link actual inputs, outputs, deaths, services and replacement to unique nonoverlapping periods. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented live breeding stock or lawful wild source; purchased live stock enters with upstream burdens. |
| starting_condition_role | Rearing and wild capture are exclusive source nodes; no fictional route. |
| product_classification_scope | Eligible living animals only, after exclusion of more specific live classes and non-live goods. |
| recursive_input_rule | Purchased same-category live animals retain supplier burden and enter only the performed downstream node; do not recreate their breeding or capture. |
| upstream_dataset_requirement | Supplier burden and provenance, species-specific input supply and legal capture evidence. |
| disclosure | Species, stage, count, net mass, holding medium, legal source, mortalities, side outputs, periods, shared services and actual gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_scope | each lot | Verify eligible living species and legal source; exclude bees, cocoons, dead edible insects and separately classified aquatic/vertebrate goods. | un-cpc-2025 |
| b_route | source | Rearing and lawful wild capture are distinct exclusive nodes; purchased live stock keeps supplier burden and enters only actual downstream work. | un-cpc-2025 |
| b_gate | handover | End after live selection and species-appropriate holding at actual source gate; exclude later transport, use and dead-goods processing. | un-cpc-2025 |
| b_period | assets and periods | Assign cohort establishment, shared room/tank and replacement once to actual consuming node and period. | mass-balance-identity |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rear | Managed species-specific rearing | conditional | Managed route only; not wild capture | Raise declared stock through actual stages; hand viable cohort to selection. | per kg node output |
| capture | Independent lawful live capture | conditional | Permitted wild route only; not rearing | Remove live animals from documented wild source; hand viable lot to selection. | per kg node output |
| select | Live selection and holding | required | Every route, actual intervention only | Check species, stage and viability; split accepted animals, independently sold outputs and loss. | per kg node output |
| gate | Contained source-gate handover | required | Every marketed live lot | Protect and hand over measured live product at the actual source gate. | per kg node output |

These are responsibilities rather than universal technologies. Amphibian aquatic/terrestrial stages, insect metamorphosis and worm substrate occur only for an actual declared species and route.

### Process: Managed species-specific rearing (`rear`)

#### Inputs

##### Product flows

###### Purchased live breeding stock (`stock`)

Actual species- and stage-qualified stock with supplier burden.

Denominator and scope requirements：per kg Managed species-specific rearing output

Raw quantity and calculation requirements: Actual species- and stage-qualified stock with supplier burden. Original collection denominator kind: process_output.

- Selected flow: Purchased live breeding stock (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rear`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Managed species-specific rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed supply (`feed`)

Record actual species-specific feed crossing the managed boundary.

Denominator and scope requirements：per kg Managed species-specific rearing output

Raw quantity and calculation requirements: Use separate feed-supply, intake and loss ledgers under calc_feed_supply_and_intake. The quantity carrying feed-production burden includes in-boundary refusals, spoilage and uneaten feed; it is not reduced to animal intake. Retain source, species/cohort, phase and original mass/moisture basis. Calculate the final contribution with inventory_reference_normalization and stage_throughput_linkage exactly once. Original collection denominator kind: process_output.

- Selected flow: Feed supply (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rear`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Managed species-specific rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biological rearing substrate (`substrate`)

Record actual species-specific biological substrate separately from feed.

Denominator and scope requirements：per kg Managed species-specific rearing output

Raw quantity and calculation requirements: Record actual species-specific biological substrate separately from feed. Original collection denominator kind: process_output.

- Selected flow: Biological rearing substrate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rear`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Managed species-specific rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied rearing water (`water`)

Meter actual supplied water; distinguish removable holding medium.

Denominator and scope requirements：per kg Managed species-specific rearing output

Raw quantity and calculation requirements: Meter actual supplied water; distinguish removable holding medium. Original collection denominator kind: process_output.

- Selected flow: Supplied rearing water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rear`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Managed species-specific rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing energy (`energy`)

Meter actual lighting, temperature, aeration or pump energy.

Denominator and scope requirements：per kg Managed species-specific rearing output

Raw quantity and calculation requirements: Meter actual lighting, temperature, aeration or pump energy. Original collection denominator kind: process_output.

- Selected flow: Rearing energy
- Flow property / unit: Energy / kWh
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rear`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/kg
  - Basis: per kg Managed species-specific rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living cohort to selection (`cohort`)

Weigh and count viable animals leaving rearing once by stage.

Denominator and scope requirements：per kg Managed species-specific rearing output

Raw quantity and calculation requirements: Weigh and count viable animals leaving rearing once by stage. Original collection denominator kind: process_output.

- Selected flow: Living cohort to selection (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rear`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Managed species-specific rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dead animals in rearing (`rear_mortality`)

Record stage-specific deaths as animal mass and actual disposal, not marketed live product.

Denominator and scope requirements：per kg Managed species-specific rearing output

Raw quantity and calculation requirements: Record stage-specific deaths as animal mass and actual disposal, not marketed live product. Original collection denominator kind: process_output.

- Selected flow: Dead animals in rearing (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rear`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Managed species-specific rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spent biological substrate (`spent_substrate`)

Measure spent substrate separately from dead animal mass and record destination.

Denominator and scope requirements：per kg Managed species-specific rearing output

Raw quantity and calculation requirements: Measure spent substrate separately from dead animal mass and record destination. Original collection denominator kind: process_output.

- Selected flow: Spent biological substrate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rear`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Managed species-specific rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Independent lawful live capture (`capture`)

#### Inputs

##### Product flows

###### Capture equipment energy (`capture_energy`)

Meter energy used in the lawful event; no fictitious husbandry.

Denominator and scope requirements：per kg Independent lawful live capture output

Raw quantity and calculation requirements: Meter energy used in the lawful event; no fictitious husbandry. Original collection denominator kind: process_output.

- Selected flow: Capture equipment energy
- Flow property / unit: Energy / kWh
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/kg
  - Basis: per kg Independent lawful live capture output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Lawfully captured living animals (`captured`)

Count and weigh viable animals at collection handoff, linked to species and permit.

Denominator and scope requirements：per kg Independent lawful live capture output

Raw quantity and calculation requirements: Count and weigh viable animals at collection handoff, linked to species and permit. Original collection denominator kind: process_output.

- Selected flow: Lawfully captured living animals (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Independent lawful live capture output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Capture mortality (`capture_loss`)

Separate dead or injured animals from viable output and record disposal.

Denominator and scope requirements：per kg Independent lawful live capture output

Raw quantity and calculation requirements: Separate dead or injured animals from viable output and record disposal. Original collection denominator kind: process_output.

- Selected flow: Capture mortality (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Independent lawful live capture output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Live selection and holding (`select`)

#### Inputs

##### Product flows

###### Live source animals (`source_live`)

Receive measured live lot from one route or upstream purchase without recreating source burdens.

Denominator and scope requirements：per kg Live selection and holding output

Raw quantity and calculation requirements: Receive measured live lot from one route or upstream purchase without recreating source burdens. Original collection denominator kind: process_output.

- Selected flow: Live source animals (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_select`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Live selection and holding output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Temporary-holding water (`holding_water`)

Meter species-appropriate water actually supplied, not animal mass.

Denominator and scope requirements：per kg Live selection and holding output

Raw quantity and calculation requirements: Meter species-appropriate water actually supplied, not animal mass. Original collection denominator kind: process_output.

- Selected flow: Temporary-holding water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_select`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Live selection and holding output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Temporary-holding energy (`holding_energy`)

Meter actual temperature, light, aeration or handling energy.

Denominator and scope requirements：per kg Live selection and holding output

Raw quantity and calculation requirements: Meter actual temperature, light, aeration or handling energy. Original collection denominator kind: process_output.

- Selected flow: Temporary-holding energy
- Flow property / unit: Energy / kWh
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_select`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/kg
  - Basis: per kg Live selection and holding output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Selected viable animals (`accepted`)

Weigh accepted species- and stage-qualified lot to gate.

Denominator and scope requirements：per kg Live selection and holding output

Raw quantity and calculation requirements: Weigh accepted species- and stage-qualified lot to gate. Original collection denominator kind: process_output.

- Selected flow: Selected viable animals (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_select`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Live selection and holding output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold lawful output (`side_output`)

Only a real separately marketed live stage or other qualified product at its own handoff; no duplicate accepted animal.

Denominator and scope requirements：per kg Live selection and holding output

Raw quantity and calculation requirements: Only a real separately marketed live stage or other qualified product at its own handoff; no duplicate accepted animal. Original collection denominator kind: process_output.

- Selected flow: Independently sold lawful output (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_select`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Live selection and holding output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dead animals in selection (`selection_mortality`)

Record animal deaths in selection and holding separately from viable output.

Denominator and scope requirements：per kg Live selection and holding output

Raw quantity and calculation requirements: Record animal deaths in selection and holding separately from viable output. Original collection denominator kind: process_output.

- Selected flow: Dead animals in selection (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_select`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Live selection and holding output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded holding medium (`discarded_medium`)

Measure discarded medium separately from animal losses and record treatment.

Denominator and scope requirements：per kg Live selection and holding output

Raw quantity and calculation requirements: Measure discarded medium separately from animal losses and record treatment. Original collection denominator kind: process_output.

- Selected flow: Discarded holding medium (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_select`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Live selection and holding output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Contained source-gate handover (`gate`)

#### Inputs

##### Product flows

###### Selected live animals (`selected_input`)

Receive accepted viable lot once from selection.

Denominator and scope requirements：per kg Contained source-gate handover output

Raw quantity and calculation requirements: Receive accepted viable lot once from selection. Original collection denominator kind: process_output.

- Selected flow: Selected live animals (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Contained source-gate handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Species-appropriate containment (`container`)

Measure protective container and removable medium separately from animal mass.

Denominator and scope requirements：per kg Contained source-gate handover output

Raw quantity and calculation requirements: Measure protective container and removable medium separately from animal mass. Original collection denominator kind: process_output.

- Selected flow: Species-appropriate containment
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Contained source-gate handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Viable live product at source gate (`product`)

Weigh net living animal biomass at actual source gate; verify count and lawful transfer.

Raw reference-output records: Weigh net living animal biomass at actual source gate; verify count and lawful transfer. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Species-, stage- and gate-qualified living animal
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Contained source-gate handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Deaths before handover (`gate_loss`)

Separate deaths during holding from sold viable animals and record treatment.

Denominator and scope requirements：per kg Contained source-gate handover output

Raw quantity and calculation requirements: Separate deaths during holding from sold viable animals and record treatment. Original collection denominator kind: process_output.

- Selected flow: Deaths before handover (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Contained source-gate handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_output | co-products and residues | Identify every independently sold output and its handover; do not turn death, spent substrate or unsold eggs into co-products. Prefer documented physical causality for shared inputs; otherwise allocate by measured net economic value for the node and period with price basis and sensitivity disclosed. Meter shared rooms, tanks, lighting and equipment where possible, else use animal-days or area-time, assigning each service once to consuming nodes and nonoverlapping periods. | mass-balance-identity |
| a_period | periods | Record each cohort stage and asset service period; assign establishment, deaths and replacement once, without repeating stock or burden across periods. | mass-balance-identity |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rear | rear | all listed flows | lot/meter/provenance ledger | species, stage, time, source, calibrated mass, count, input, death, output, destination | Weigh and count each lot; reconcile permits, invoices and meters.; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | kg;count;kWh | each lot and period | complete cohort or capture and service period | actual site | per reference flow | calibration, provenance, permit, ledger and destination evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_capture | capture | all listed flows | lot/meter/provenance ledger | species, stage, time, source, calibrated mass, count, input, death, output, destination | Weigh and count each lot; reconcile permits, invoices and meters.; Raw aggregation requirements: sum by species, stage, node and nonoverlapping period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;count;kWh | each lot and period | complete cohort or capture and service period | actual site | per reference flow | calibration, provenance, permit, ledger and destination evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_select | select | all listed flows | lot/meter/provenance ledger | species, stage, time, source, calibrated mass, count, input, death, output, destination | Weigh and count each lot; reconcile permits, invoices and meters.; Raw aggregation requirements: sum by species, stage, node and nonoverlapping period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;count;kWh | each lot and period | complete cohort or capture and service period | actual site | per reference flow | calibration, provenance, permit, ledger and destination evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_gate | gate | all listed flows | lot/meter/provenance ledger | species, stage, time, source, calibrated mass, count, input, death, output, destination | Weigh and count each lot; reconcile permits, invoices and meters.; Raw aggregation requirements: sum by species, stage, node and nonoverlapping period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;count;kWh | each lot and period | complete cohort or capture and service period | actual site | per reference flow | calibration, provenance, permit, ledger and destination evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed_supply_and_intake` | `rear` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | reference lot | Net live mass = gross weighed mass − removable medium and container tare. | calibrated gross, tare, viability | kg | mass-balance-identity |
| c_stock | cohort | Opening + additions − deaths − sales − closing = explained stage-wise balance. | stock, mortality, sale ledgers | kg;count | mass-balance-identity |
| c_shared | shared service | Node burden = total metered service × documented node-use share; shares sum to 1. | meters, animal-days or area-time, period | kg;kWh | mass-balance-identity |
| `calc_feed_supply_and_intake` | `feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `fao-feed-loss-accounting-2018` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_core | each lot | Require species/stage identity, legal provenance, calibrated net biomass, count, opening/closing stock, deaths, inputs, separate sales, shared-service ledger and period linkage. Missing lawful provenance or valid live-mass measurement blocks a dataset. | classification, permit, calibrated weighing and stock ledger |
| q_range | all flow cards | Provisional QA screens trigger review, never override measurements or define publication-allowed ranges. | raw records and exception notes |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference | Verify species, stage, legality, living state, count, net mass and gate; do not claim fixed UUID without detail and support-row verification. | un-cpc-2025 |
| v_balance | nodes and periods | Reconcile inputs, sales, deaths, waste and closing stock by stage; do not count one animal or loss at two handovers. | mass-balance-identity |
| v_alloc | outputs and shared services | Check each intended product and own handover, allocation basis, period and shared service shares summing to 1. | mass-balance-identity |
| v_route | conditional routes | Unpermitted wild collection is not a legal source; no fictitious breeding for wild route or zero upstream burden for purchased stock. | un-cpc-2025 |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `fao-feed-loss-accounting-2018` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species- and route-specific live-animal foreground package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Species- and route-specific secondary/background dataset only for the declared live source gate; do not generalize across amphibians, insects and arachnids or convert to dead goods without new data. |
| excluded_use | Other species, stages, sources, dead goods, post-gate transport and use without new data. |
| required_metadata | species; classification decision; life stage; count or population estimate; viability; wet-mass method; holding medium; legal source; route; gate; period; method, period and allocation disclosure |
| required_quality_disclosure | provenance, weighing/count, QA exceptions, mortality, shared service and unresolved identities |
| update_trigger | Species, stage, jurisdiction, route, husbandry, gate or UUID evidence change. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | category scope and exclusions |
| woah-transport-7-3 | official_guidance | https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en_chapitre_aw_land_transpt.htm | species-aware handling caution; not universal for wild or invertebrate species |
| mass-balance-identity | method_factor | Mass conservation and non-overlapping inventory accounting identity | mass, period and shared-service checks |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed supply versus intake and waste burden, not animal parameters. Applying this accounting principle to the declared taxon is this PCR's methodological choice; no pig diet or emission factor is transferred. |
