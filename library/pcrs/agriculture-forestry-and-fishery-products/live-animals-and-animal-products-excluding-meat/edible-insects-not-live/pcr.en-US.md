---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.edible-insects-not-live
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Edible insects, not live

## 1. Scope and Applicability

Covers non-living edible whole insects or parts, fresh, chilled, frozen, dried, smoked, salted or in brine, and insect flour or meal fit for human consumption. Every dataset fixes one species, life stage, form, food qualification, moisture state, lawful source and handover gate. Managed rearing, lawful wild collection and purchased-dead sourcing are distinct. Exclude live insects, feed-only insects, otherwise prepared or preserved finished foods, purified extracts, and unsafe or untraceable material. A wet whole-insect kilogram is not a dried-meal kilogram.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.edible-insects-not-live |
| classification_refs | CPC 3.0 02931 |
| covered_products | Non-living edible whole insects, parts, flour and meal in eligible fresh or first-preserved states. |
| excluded_products | Live or feed-only insects; finished foods; extracts; unqualified or contaminated material. |
| representative_product | One species-, stage- and form-qualified edible insect product at its actual first handover. |
| production_route | Managed rearing or lawful wild source, independent collection and killing, first hygiene preparation, grading, optional preservation or milling, protective handover; purchased-dead input retains upstream burden. |
| market_state | Actual whole, part, flour or meal state, with moisture and preservation declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One declared food-eligible non-living insect product, not a mixed-species or mixed-state average. |
| How much | 1 kg net saleable product as sold, excluding package and separately removable free brine. |
| How well | Species, life stage, whole/part/flour/meal form, moisture, food status, lawful source and gate. |
| How long or cycle | Link real cohort or wild season, processing batch, shared assets and replacement to nonoverlapping periods. |
| reference_flow_link | `accepted_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species-, stage-, form- and gate-qualified non-living edible insects |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; life stage; food eligibility; whole/part/flour/meal; preservation; moisture; lawful source; net mass; gate; period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | all lots | Mass | kg | Weigh gross and tare; report homogeneous as-sold net mass without package or separately removable free brine. |
| m_moisture | drying or brining | Mass and moisture fraction | kg and kg/kg | Measure before and after states; calculate only lot-specific conversions, never universal wet/dry or whole/meal factors. |
| m_fraction | parts and meal | Mass | kg | Measure edible input, accepted output and rejects separately; reconcile one physical lot without counting successive states as extra production. |
| m_period | cohort and shared service | Time | reporting period | Link actual inputs, outputs and service to unique periods. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented farm cohort, lawful wild source, or purchased already-dead insects with upstream dataset. |
| starting_condition_role | Farm and wild source duties are exclusive; purchased-dead supply bypasses rearing and killing but not upstream burdens. |
| product_classification_scope | Food-grade dead whole insects or parts and qualifying flour or meal, in one declared state. |
| recursive_input_rule | Purchased same-category insects retain supplier burden and enter the actual first performed node, with no recreated harvest. |
| upstream_dataset_requirement | Species-specific source/feed and legal collection evidence or purchased-input burden; no zero-burden shortcut. |
| disclosure | Species; stage; food and legal evidence; source route; form; moisture; interventions; co-products; shared service; periods; gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | source | Separate managed rearing, lawful wild collection and purchased dead input; no fictional husbandry or repeated upstream harvest. | un-cpc-02931;fao-edible-insects-2013 |
| b_collect | collection | Independent removal and killing has living source, non-living collected handoff, incidental material and loss; purchased dead bypasses. | fao-edible-insects-2013 |
| b_condition | first preparation | Raw dead material becomes prepared only through actual hygiene sorting, cleaning or trimming; reject destination is recorded. | fao-edible-insects-2013 |
| b_grade | grade | Separate accepted food, genuinely sold food downgrade and non-food reject with distinct handoffs. | fao-edible-insects-2013 |
| b_preserve | preservation | Fresh lots bypass; actual chilling, freezing, drying, smoking, salting or brining records input, output, moisture and residue. | un-cpc-02931;fao-edible-insects-2013 |
| b_mill | meal | Food-grade flour or meal grinding is conditional; formulated foods and extracts remain outside. | un-cpc-02931 |
| b_pack | handover | Protect one eligible form to actual first gate, not downstream distribution. | fao-edible-insects-2013 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rear | Managed insect rearing | conditional | Farmed route only; wild or purchased-dead lots bypass | Raise declared species and life stage with recorded substrate, water and cohort; hand off living harvestable biomass. | per kg node output |
| collect | Independent collection and killing | conditional | Farmed or lawful wild source; purchased-dead input bypasses | Remove insects from cohort or lawful wild site, record killing and hand off non-living collected material. | per kg node output |
| condition | First hygienic conditioning | required | Every lot; if no intervention, transfer ledger only | Identify raw dead input including purchased material, remove contamination, and hand off first prepared edible material. | per kg node output |
| grade | Food-grade sorting | required | Every lot | Separate accepted food grade, separately sold downgraded food grade if any, and non-food reject, each with a handoff. | per kg node output |
| preserve | Optional preservation | conditional | Only actual chilled, frozen, dried, smoked, salted or brined route | Record the selected stabilization intervention, before/after moisture and product state; fresh lots bypass. | per kg node output |
| mill | Conditional milling to flour or meal | conditional | Only flour or meal actually produced | Grind eligible dead insects into food-grade flour or meal; exclude formulated foods and extracts. | per kg node output |
| pack | Protective packing and handover | required | Every sold lot | Pack the one declared accepted form for the actual farm, collection or first-processing gate without downstream distribution. | per kg node output |

Each actual cohort/season, rearing room, collection implement, cold room, mill or packer is attributed to consuming nodes and periods once. Nodes are modelling responsibilities, not a claim that every facility performs every node.

### Process: Managed insect rearing (`rear`)

#### Inputs

##### Product flows

###### Rearing substrate (`feed`)

Actual species-compatible feed or substrate including supplier burdens; classify food-grade eligibility.

Denominator and scope requirements：per kg Managed insect rearing output

Raw quantity and calculation requirements: Actual species-compatible feed or substrate including supplier burdens; classify food-grade eligibility. Original collection denominator kind: process_output.

- Selected flow: Actual rearing feed or substrate (UUID unresolved)
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
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Managed insect rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing water (`water`)

Meter consumed supplied water; wild route has no fabricated rearing use.

Denominator and scope requirements：per kg Managed insect rearing output

Raw quantity and calculation requirements: Meter consumed supplied water; wild route has no fabricated rearing use. Original collection denominator kind: process_output.

- Selected flow: Water supply
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
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Managed insect rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvestable living cohort (`living_biomass`)

One intermediate cohort output to collection, not the 02931 marketed product.

Denominator and scope requirements：per kg Managed insect rearing output

Raw quantity and calculation requirements: One intermediate cohort output to collection, not the 02931 marketed product. Original collection denominator kind: process_output.

- Selected flow: Species-qualified living insect biomass (UUID unresolved)
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
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Managed insect rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold frass-derived material (`sold_fertilizer`)

Only where separately qualified and sold; record own handoff without counting same frass as Waste.

Denominator and scope requirements：per kg Managed insect rearing output

Raw quantity and calculation requirements: Only where separately qualified and sold; record own handoff without counting same frass as Waste. Original collection denominator kind: process_output.

- Selected flow: Actual saleable frass-derived co-product (UUID unresolved)
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
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Managed insect rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Nonmarketed frass or spent substrate (`rearing_residue`)

Classify actual residue destination; independently sold fertilizer is a separate Product, not Waste.

Denominator and scope requirements：per kg Managed insect rearing output

Raw quantity and calculation requirements: Classify actual residue destination; independently sold fertilizer is a separate Product, not Waste. Original collection denominator kind: process_output.

- Selected flow: Actual rearing residue to treatment (UUID unresolved)
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
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Managed insect rearing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Independent collection and killing (`collect`)

#### Inputs

##### Product flows

###### Living insects entering collection (`collect_living`)

Farmed output only; wild capture is recorded as an elementary resource input, while purchased-dead lots bypass collection.

Denominator and scope requirements：per kg Independent collection and killing output

Raw quantity and calculation requirements: Farmed output only; wild capture is recorded as an elementary resource input, while purchased-dead lots bypass collection. Original collection denominator kind: process_output.

- Selected flow: Species-qualified farmed living insects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collect`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Independent collection and killing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Living wild edible insects removed from habitat (`wild_resource`)

Wild route only: record lawful species, site and removal; no farmed Product input for this biomass.

Denominator and scope requirements：per kg Independent collection and killing output

Raw quantity and calculation requirements: Wild route only: record lawful species, site and removal; no farmed Product input for this biomass. Original collection denominator kind: process_output.

- Selected flow: Species-qualified wild insect biological resource (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collect`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Independent collection and killing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Collected non-living insects (`collected_dead`)

Weigh dead whole insects or parts at collection handoff, with species and life stage.

Denominator and scope requirements：per kg Independent collection and killing output

Raw quantity and calculation requirements: Weigh dead whole insects or parts at collection handoff, with species and life stage. Original collection denominator kind: process_output.

- Selected flow: Species-qualified killed insects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collect`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Independent collection and killing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Collection incidental and rejected material (`collection_loss`)

Measure incidental material, inedible species and deaths/losses not accepted for food.

Denominator and scope requirements：per kg Independent collection and killing output

Raw quantity and calculation requirements: Measure incidental material, inedible species and deaths/losses not accepted for food. Original collection denominator kind: process_output.

- Selected flow: Collection residue to actual treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collect`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Independent collection and killing output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First hygienic conditioning (`condition`)

#### Inputs

##### Product flows

###### Raw dead insects for first preparation (`condition_raw`)

Purchased dead insects retain upstream burden; sourced insects transfer once from collection.

Denominator and scope requirements：per kg First hygienic conditioning output

Raw quantity and calculation requirements: Purchased dead insects retain upstream burden; sourced insects transfer once from collection. Original collection denominator kind: process_output.

- Selected flow: Species-qualified raw non-living insects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg First hygienic conditioning output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hygienic water when used (`wash_water`)

Meter actual wash or sanitation water by lot; no default wash step.

Denominator and scope requirements：per kg First hygienic conditioning output

Raw quantity and calculation requirements: Meter actual wash or sanitation water by lot; no default wash step. Original collection denominator kind: process_output.

- Selected flow: Water supply
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg First hygienic conditioning output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-prepared edible insect material (`prepared`)

Record accepted mass after actual cleaning, sorting or trimming before independent grade handoff.

Denominator and scope requirements：per kg First hygienic conditioning output

Raw quantity and calculation requirements: Record accepted mass after actual cleaning, sorting or trimming before independent grade handoff. Original collection denominator kind: process_output.

- Selected flow: Species-qualified first-prepared edible insects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg First hygienic conditioning output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Hygiene reject or removed foreign matter (`conditioning_reject`)

Document treatment of inedible parts and contaminated rejects; do not count as a food co-product.

Denominator and scope requirements：per kg First hygienic conditioning output

Raw quantity and calculation requirements: Document treatment of inedible parts and contaminated rejects; do not count as a food co-product. Original collection denominator kind: process_output.

- Selected flow: Actual conditioning rejects to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg First hygienic conditioning output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Food-grade sorting (`grade`)

#### Inputs

##### Product flows

###### Prepared insects entering grade (`grade_input`)

Maintain source, species, life stage and form trace.

Denominator and scope requirements：per kg Food-grade sorting output

Raw quantity and calculation requirements: Maintain source, species, life stage and form trace. Original collection denominator kind: process_output.

- Selected flow: First-prepared edible insects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Food-grade sorting output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted edible grade (`grade_accepted`)

Transfer to actual preservation, milling or packing route exactly once.

Denominator and scope requirements：per kg Food-grade sorting output

Raw quantity and calculation requirements: Transfer to actual preservation, milling or packing route exactly once. Original collection denominator kind: process_output.

- Selected flow: Accepted species-qualified edible insects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Food-grade sorting output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separately sold lower edible grade (`grade_downgrade`)

Include only genuinely food-grade, independently marketed downgrade with own destination.

Denominator and scope requirements：per kg Food-grade sorting output

Raw quantity and calculation requirements: Include only genuinely food-grade, independently marketed downgrade with own destination. Original collection denominator kind: process_output.

- Selected flow: Lower-grade edible insects if marketed (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Food-grade sorting output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Non-food grade reject (`grade_reject`)

Record destination and keep animal-feed or contaminated rejects outside reference product.

Denominator and scope requirements：per kg Food-grade sorting output

Raw quantity and calculation requirements: Record destination and keep animal-feed or contaminated rejects outside reference product. Original collection denominator kind: process_output.

- Selected flow: Non-food grade rejects to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Food-grade sorting output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Optional preservation (`preserve`)

#### Inputs

##### Product flows

###### Salt or smoke material actually consumed (`preservation_medium`)

Only salted, brined or smoked routes: weigh the actual preservation medium and record its supplier burden; cold and dry routes do not invent this input.

Denominator and scope requirements：per kg Optional preservation output

Raw quantity and calculation requirements: Only salted, brined or smoked routes: weigh the actual preservation medium and record its supplier burden; cold and dry routes do not invent this input. Original collection denominator kind: process_output.

- Selected flow: Actual food-grade salt or smoking medium (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Optional preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Accepted insects before preservation (`preserve_input`)

Transfer accepted grade once; identify actual whole or part state.

Denominator and scope requirements：per kg Optional preservation output

Raw quantity and calculation requirements: Transfer accepted grade once; identify actual whole or part state. Original collection denominator kind: process_output.

- Selected flow: Accepted edible insects before preservation (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Optional preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy for actual preservation (`preserve_energy`)

Select carrier from actual records for cooling, freezing, drying or smoking; no universal recipe.

Denominator and scope requirements：per kg Optional preservation output

Raw quantity and calculation requirements: Select carrier from actual records for cooling, freezing, drying or smoking; no universal recipe. Original collection denominator kind: process_output.

- Selected flow: Energy carrier for preservation
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Optional preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized insects in declared state (`preserved`)

Record actual eligible chilled/frozen/dried/smoked/salted/brined form and measured net mass.

Denominator and scope requirements：per kg Optional preservation output

Raw quantity and calculation requirements: Record actual eligible chilled/frozen/dried/smoked/salted/brined form and measured net mass. Original collection denominator kind: process_output.

- Selected flow: State-qualified preserved edible insects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Optional preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation reject and residue (`preserve_loss`)

Reconcile moisture loss separately from solid rejects and wastewater.

Denominator and scope requirements：per kg Optional preservation output

Raw quantity and calculation requirements: Reconcile moisture loss separately from solid rejects and wastewater. Original collection denominator kind: process_output.

- Selected flow: Actual preservation reject to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Optional preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Conditional milling to flour or meal (`mill`)

#### Inputs

##### Product flows

###### Eligible material entering mill (`mill_input`)

Transfer one graded or preserved lot; document input form and moisture.

Denominator and scope requirements：per kg Conditional milling to flour or meal output

Raw quantity and calculation requirements: Transfer one graded or preserved lot; document input form and moisture. Original collection denominator kind: process_output.

- Selected flow: Eligible edible insects before milling (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mill`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Conditional milling to flour or meal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Food-grade insect flour or meal (`flour_meal`)

Weigh actual milled output, classify fineness and human-food suitability.

Denominator and scope requirements：per kg Conditional milling to flour or meal output

Raw quantity and calculation requirements: Weigh actual milled output, classify fineness and human-food suitability. Original collection denominator kind: process_output.

- Selected flow: Species-qualified edible insect flour or meal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mill`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Conditional milling to flour or meal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Milling loss or non-food oversize (`mill_reject`)

Record actual reject treatment; remilled material is internal rework, not another product.

Denominator and scope requirements：per kg Conditional milling to flour or meal output

Raw quantity and calculation requirements: Record actual reject treatment; remilled material is internal rework, not another product. Original collection denominator kind: process_output.

- Selected flow: Actual milling reject to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mill`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Conditional milling to flour or meal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective packing and handover (`pack`)

#### Inputs

##### Product flows

###### One eligible form entering packing (`pack_input`)

Choose fresh graded, preserved or flour/meal lot; do not sum successive forms of one physical lot.

Denominator and scope requirements：per kg Protective packing and handover output

Raw quantity and calculation requirements: Choose fresh graded, preserved or flour/meal lot; do not sum successive forms of one physical lot. Original collection denominator kind: process_output.

- Selected flow: Declared edible insect form before packing (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Protective packing and handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective food-contact pack (`pack_material`)

Record single-use mass or actual reusable turns and food-contact suitability.

Denominator and scope requirements：per kg Protective packing and handover output

Raw quantity and calculation requirements: Record single-use mass or actual reusable turns and food-contact suitability. Original collection denominator kind: process_output.

- Selected flow: Food-contact packaging function
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Protective packing and handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Declared edible insect product at gate (`accepted_product`)

One kg net of one species, stage, form and moisture at actual handover; exclude package tare.

Raw reference-output records: One kg net of one species, stage, form and moisture at actual handover; exclude package tare. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Species-, stage-, form- and gate-qualified non-living edible insects
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Protective packing and handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected product or package (`pack_reject`)

Record spoiled or rejected material and package disposition, without counting saleable downgrade twice.

Denominator and scope requirements：per kg Protective packing and handover output

Raw quantity and calculation requirements: Record spoiled or rejected material and package disposition, without counting saleable downgrade twice. Original collection denominator kind: process_output.

- Selected flow: Actual rejected material to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Range: Broad provisional lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Protective packing and handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_outputs | rear, grade and all saleable routes | Enumerate living intermediate, accepted food grade, any independently sold lower food grade and genuine sold frass-derived product at their own handoffs. Successive states are transfers, not extra saleable products. Subdivide measurable operations first; attribute inseparable joint burden by defensible physical causality or, if unavailable, contemporaneous net economic value with sensitivity analysis. Never classify marketed material as Waste. | fao-edible-insects-2013 |
| a_period | cohort and wild source | Tie feed, cohort, collection, preservation, asset replacement and marketed outputs to actual nonoverlapping periods; no universal cycle or feed conversion. | fao-edible-insects-2013 |
| a_shared | shared rooms, traps, chillers, mills and packers | Identify every consuming node and service period. Use metered service, else documented hours or throughput, once without duplicate supplier burden. | fao-edible-insects-2013 |
| a_form | wet, preserved and meal states | Attribute preservation and milling only to lots that undergo them; one physical lot has one marketed form at a time. | un-cpc-02931 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rear | rear | cohort and management | cohort log | species; stage; feed; water; living_mass; frass; coproduct; loss; service; period | feed tickets, meters and scale; Raw aggregation requirements: link products and residues once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; m3; period | each cohort | actual cohort phases | farm | per reference flow | purchase, meter and batch records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_collect | collect | killing and collection | event log | source; legal_id; stage; live_mass; dead_mass; loss; method; period | permit and scale; Raw aggregation requirements: reconcile captured and dead material. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each event | collection season | farm or wild site | per reference flow | permit, scale and event record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_condition | condition | first preparation | hygiene batch | source; raw_mass; water; prepared_mass; reject; method | batch scale and cleaning log; Raw aggregation requirements: actual intervention only. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; m3 | each lot | batch period | preparation site | per reference flow | hygiene and scale record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_grade | grade | food grades | grade ledger | prepared_mass; accepted; downgrade; reject; food_qualification; destinations | grade and sale tickets; Raw aggregation requirements: reconcile destinations. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | batch period | grading site | per reference flow | grade, sale and reject record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_preserve | preserve | before/after state | treatment log | input; output; moisture_before; moisture_after; state; energy; preservation_medium; residue | scale, moisture test and meter; Raw aggregation requirements: treated lots only. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kg/kg; kWh | treated lot | treatment period | treatment site | per reference flow | test and meter record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_mill | mill | flour or meal | milling log | input; product; fineness; moisture; reject; rework | scale and quality record; Raw aggregation requirements: one output and rework loop. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kg/kg | milled lot | milling period | mill | per reference flow | scale and food release; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_pack | pack | net sold product | handover log | species; stage; form; state; gross; tare; free_brine; package; reuse; gate | scale and handover ticket; Raw aggregation requirements: one marketed lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; turn | each sale | sale period | gate | per reference flow | qualification and ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | reference | Net sold mass = measured gross less package tare and separable free brine. | gross; tare; free brine | kg net as sold | fao-edible-insects-2013 |
| c_state | drying or milling | Actual matched input/output mass and moisture; no default wet/dry or whole/meal factor. | before/after mass; moisture | lot-specific balance | fao-edible-insects-2013 |
| c_balance | every node | Reconcile input, products, sold downgrade, reject and measured state change; investigate gaps. | input; outputs; residues; moisture | kg ledger | fao-edible-insects-2013 |
| c_shared | shared assets | Assign measured service or documented hours/throughput to unique node and period. | burden; use; period | allocated burden | fao-edible-insects-2013 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every lot | Verify species, stage, human-food qualification, lawful source, form, moisture and market state. | permit, food release, batch and sale records |
| dq_safety | source and output | Check source/substrate contamination, hygiene and applicable jurisdictional food requirements; no invented universal numeric limits. | supplier, inspection and test records |
| dq_mass | material | Calibrated net mass, state-specific moisture and destination balance; no default conversion. | scale, test and balance |
| dq_period | cohort and assets | Actual periods, replacement and consuming nodes without double attribution. | cohort and asset ledger |
| dq_uuid | final exchange | Resolve compatible concrete identity and property/unit support; unresolved candidate is not exchange permission. | detail and support-row review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | marketed lot | Reject live, feed-only, formulated, extracted or unsafe product; verify permitted species, stage, form and food eligibility. | un-cpc-02931;fao-edible-insects-2013 |
| v_route | source lot | Farm, lawful wild and purchased-dead routes are exclusive; purchase retains supplier burden and skips invented source nodes. | fao-edible-insects-2013 |
| v_balance | every node | Reconcile input, accepted output, sold downgrade, waste, moisture change and sale without counting successive states twice. | fao-edible-insects-2013 |
| v_safety | edible output | Require source legality and applicable hygiene/contamination evidence before food-grade release. | fao-edible-insects-2013 |
| v_period | shared service | Each event and asset service has one period and one attributed share; replacement does not duplicate prior burden. | fao-edible-insects-2013 |
| v_binding | all cards | conditional product inputs require actual concrete selection; other identities need matching detail/property/unit-group evidence before exchange publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species-, stage-, source-, form- and state-qualified edible-insect foreground package. |
| downstream_use | `secondary_dataset` or `background_dataset` only after method and identity review. |
| allowed_use | One documented qualifying non-living food insect product at actual gate. |
| excluded_use | Live insects, animal feed, prepared snacks, mixed wet/dry average or unverified UUID exchange. |
| required_metadata | Species; stage; route; legal and food status; form; moisture; interventions; package; gate; period; co-products; attribution. |
| required_quality_disclosure | Source and safety gaps, measured yield/moisture, balance, shared service, uncertainty and unresolved UUIDs. |
| update_trigger | Species/legal status, processing boundary, route, gate, source rule or platform identity change. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-02931 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/02931 | Category states and exclusions. |
| fao-edible-insects-2013 | official_guidance | https://www.fao.org/docrep/018/i3253e/i3253e.pdf | Farm/wild routes, safety and first-processing questions. |
