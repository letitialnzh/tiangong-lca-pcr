---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.fine-animal-hair-not-carded-or-combed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fine animal hair, not carded or combed

## 1. Scope and Applicability

This PCR covers detached raw fine animal hair, not textile-carded or combed, at the actual farm or first-collection handover. Declare species (cashmere goat, mohair goat, camel, yak, alpaca or Angora rabbit as applicable), fibre grade, harvest method, as-sold moisture and contamination, and gate. Species and grades are not physically interchangeable. Combing a living animal to harvest loose fibre is inside the harvest route; downstream carding or combing of detached fibre into a textile preparation is outside it. Shorn sheep wool, pulled wool, coarse hair, attached fur pelts, yarn and finished textile are excluded. First skirting, cleaning, sorting or dehairing enters only if the resulting sold material remains uncarded/uncombed fine hair and the actual operation is recorded. No universal raw-to-clean yield is imposed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.fine-animal-hair-not-carded-or-combed |
| classification_refs | CPC 3.0 02943 — fine animal hair, not carded or combed |
| covered_products | Detached uncarded/uncombed raw fine hair of a declared species and grade, including evidenced first-cleaned state still within the raw class. |
| excluded_products | Ordinary or pulled sheep wool; coarse hair; attached pelts; carded/combed textile fibre, tops, yarn and fabrics. |
| representative_product | One identified species-and-grade lot of raw fine hair, with net as-sold mass and measured state. |
| production_route | Species-specific animal husbandry upstream; actual combing, shearing or shed-fibre collection; first skirting/cleaning; grading; protective handover. |
| market_state | Detached raw fine hair, uncarded/uncombed, at actual farm or first-collection gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One declared species-and-grade lot of raw fine animal hair, uncarded/uncombed, at its actual gate. |
| How much | 1 kg net as-sold fibre, excluding container and separately removed dirt, guard hair and rejects. |
| How well | Species, fineness/length or documented grade, colour, guard-hair content, contamination and moisture declared; no assumed clean-fibre equivalence. |
| How long or cycle | Identify animal cohort, harvest event, production period, first-processing lot and handover; link shared service across actual periods. |
| reference_flow_link | `fine_hair_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw fine animal hair, uncarded/uncombed, species/state/gate qualified |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; harvest method; fibre grade/fineness/length/colour; raw or first-cleaned state; moisture; guard-hair and contamination state; actual gate; reporting period; package tare |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | reference and grade lots | Mass | kg | Weigh net fibre after package tare; separately weigh removed guard hair, debris, downgraded saleable material and waste. |
| m_moisture | raw and cleaned states | mass fraction | kg/kg | Sample moisture by lot; use measured dry solids for comparisons between states, preserving original as-sold masses. |
| m_quality | grade assignment | fibre diameter/length or documented grade | µm;mm;grade | Preserve actual test method, species and thresholds; do not equate grades across species solely by a label. |
| m_period | animal service and shared assets | time | reporting period | Link animal-care burden and actual hair, milk, meat or other outputs to the same animal, phase and reporting period. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified living fibre-producing animals and their upstream animal-service burden, or independently purchased raw fine hair with documented upstream burden and gate. |
| starting_condition_role | Animal husbandry, feed and veterinary care are supplied by compatible attributed upstream datasets; purchased raw hair enters conditioning, not a fictitious harvest. |
| product_classification_scope | Detached raw fine hair only; species, grade and condition determine actual product exchange. |
| recursive_input_rule | Purchased same-category raw fine hair may be conditioned or graded but retains its upstream burden and mass; do not claim it as newly harvested output. |
| upstream_dataset_requirement | Require compatible animal-service or purchased-hair upstream data, with allocation across actual animal outputs and periods; energy, water and package suppliers need compatible data. |
| disclosure | Report species, animal or purchased-fibre origin, harvest method, all grade/reject destinations, moisture, gate, period, allocation and shared-asset service. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_harvest | live-animal or shed-fibre route | Include actual combing, shearing or collection as an independent removal event with raw-fibre handoff; do not require every method for every species. Husbandry stays upstream unless explicitly expanded without duplicating burden. | fao-animal-fibre-harvesting |
| b_condition | first preparation | Include performed first skirting, cleaning/drying or dehairing only while the product remains raw uncarded/uncombed fine hair. Record accepted fibre, guard hair, contamination and losses; textile carding/combing is downstream. | fao-animal-fibre-harvesting;fao-animal-fibre-processing |
| b_grade | sorting and sale | Sort by species-specific fineness/length, colour and contamination into accepted, independently marketed downgraded and rejected/waste outputs with distinct destinations. Coarse hair is not re-labelled fine hair. | fao-animal-fibre-processing |
| b_gate | presentation | Include actual protective packing through farm/collection handover; exclude post-handover freight and downstream textile preparation. | fao-animal-fibre-harvesting |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| harvest | Species-specific fibre harvest or shed-fibre collection | conditional | Required for actual animal harvest; omitted for identified purchased raw hair | Attributed animal service to detached raw-fibre handoff and incidental loss | kg collected raw fibre per event |
| condition | First raw-hair conditioning | required | Skirting/foreign-matter removal; wet cleaning, drying or dehairing only when done | Raw collected fibre to prepared uncarded/uncombed input state | kg raw fibre received |
| grade | Species- and quality-specific grading | required | Every sale lot | Prepared hair to accepted, saleable downgraded and reject destinations | kg prepared fibre graded |
| present | Protective packing and handover | required | Accepted raw fine-hair lot | Accepted fibre plus packaging to declared farm/collection gate | kg net as-sold fibre |

Harvest is independent of animal production and first conditioning: animal service ends at a documented source event, harvest removes fibre, conditioning prepares detached material, and grading assigns destination states. The same fibre mass travels once between nodes. Purchased raw hair enters conditioning with upstream burden and no fictitious harvest. Cleaning water and energy are conditional, not universal. Shared shears/combs, cleaning tools, graders and storage assets identify consuming nodes and periods; attribute each service once.

### Process: Species-specific fibre harvest or shed-fibre collection (`harvest`)

#### Inputs

##### Product flows

###### Attributed animal-fibre production service (`animal_service`)

Record compatible upstream husbandry burden for identified species, cohort and period; this is an attribution link, not a fictitious kg of mixed feed and care.

Denominator and scope requirements：per kg raw fibre harvested

Raw quantity and calculation requirements: One documented share of actual upstream animal service per harvest event. Original collection denominator kind: process_output.

- Selected flow: Species- and period-specific attributed animal production service (UUID unresolved)
- Flow property / unit: Service / attributed cohort-period
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animal_service`
- Range: Attribution-share audit interval, not an animal yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: share
  - Basis: share of cohort-period upstream burden assigned to fibre
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Detached raw fine hair (`raw_hair`)

Record mass removed by actual combing, shearing or shed-fibre collection; the animal is not itself a fibre output.

Denominator and scope requirements：per kg collected raw fibre

Raw quantity and calculation requirements: Weigh collected fibre before skirting; carry lot id to conditioning. Original collection denominator kind: process_output.

- Selected flow: Detached raw fine animal hair by species and harvest event (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass`
- Range: Transfer completeness on measured output basis
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg measured collected raw fibre
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Lost or unsuitable hair and harvest debris (`harvest_reject`)

Separate unrecoverable hair and foreign matter from usable raw hair by physical material and treatment.

Denominator and scope requirements：per kg collected raw fibre

Raw quantity and calculation requirements: Weigh separately collected waste; report unmeasurable loss as uncertainty. Original collection denominator kind: process_output.

- Selected flow: Harvest loss or debris by material and destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rejects`
- Range: Provisional waste screen, not a loss factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg
  - Basis: per kg collected raw fibre
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First raw-hair conditioning (`condition`)

#### Inputs

##### Product flows

###### Incoming raw fine hair (`incoming_hair`)

This is the harvest transfer or separately purchased raw hair with upstream burden; count it once.

Denominator and scope requirements：per kg raw fibre received

Raw quantity and calculation requirements: Weigh incoming net fibre with origin, moisture and tare. Original collection denominator kind: process_output.

- Selected flow: Raw fine animal hair by species, state and supplier (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass`
- Range: Incoming lot completeness on own basis
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg raw fine hair received
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Conditional cleaning water (`cleaning_water`)

Only supplied water for performed first wet cleaning; no assumed washing for every species or lot.

Denominator and scope requirements：per kg raw fibre received

Raw quantity and calculation requirements: Meter supplied water by lot net of separately measured return. Original collection denominator kind: process_output.

- Selected flow: Supplied process water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Range: Provisional water-use screen, not a recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg raw fibre received; zero only when wet cleaning absent
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditional conditioning energy (`conditioning_energy`)

Expand actual electricity, thermal energy or fuel by carrier only for powered operations performed.

Denominator and scope requirements：per kg raw fibre received

Raw quantity and calculation requirements: Meter actual carrier; allocate shared use by service record. Original collection denominator kind: process_output.

- Selected flow: Site-specific energy carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Range: Provisional energy-use screen, not a default efficiency
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: MJ/kg
  - Basis: per kg raw fibre received; zero for documented manual operation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared uncarded fine hair (`prepared_hair`)

First-cleaned or skirted hair transfers to grade assignment without textile carding or combing.

Denominator and scope requirements：per kg raw fibre received

Raw quantity and calculation requirements: Weigh output and record moisture, guard-hair and contamination change. Original collection denominator kind: process_output.

- Selected flow: Prepared raw fine animal hair, species/state qualified (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass`
- Range: Provisional prepared-mass screen, not a clean-yield factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg raw fibre received, with separately measured moisture change
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Removed dirt and unusable guard hair (`conditioning_reject`)

Record by material and disposal destination. Independently marketed coarse guard hair is a separate product, never this waste row.

Denominator and scope requirements：per kg raw fibre received

Raw quantity and calculation requirements: Weigh removed solids; water/evaporation are separate balance terms. Original collection denominator kind: process_output.

- Selected flow: Conditioning rejects by material and fate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rejects`
- Range: Provisional solid-reject screen, not a cleaning yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg
  - Basis: per kg raw fibre received
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows
### Process: Species- and quality-specific grading (`grade`)

#### Inputs

##### Product flows

###### Prepared fine hair for grading (`grade_input`)

Receive the identified prepared lot, not a second purchase of the same fibre.

Denominator and scope requirements：per kg prepared fibre graded

Raw quantity and calculation requirements: Weigh input once at grade boundary; carry source-lot id. Original collection denominator kind: process_output.

- Selected flow: Prepared uncarded fine animal hair (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Input completeness on own measured basis
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg prepared fibre graded
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted raw fine-hair grade (`accepted_grade`)

The accepted grade transfers once to packing with measured or documented fineness/length, colour, contamination and moisture.

Denominator and scope requirements：per kg prepared fibre graded

Raw quantity and calculation requirements: Weigh accepted material, excluding downgraded and rejected masses. Original collection denominator kind: process_output.

- Selected flow: Accepted raw fine animal hair, species and grade qualified (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Physical grade share, not universal acceptance fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg prepared fibre graded, corrected for measured moisture change
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Independently saleable downgraded raw hair (`downgraded_grade`)

Record an actual separately sold lower grade only if it remains raw fine hair; coarse hair or another class needs its own identity and allocation disclosure.

Denominator and scope requirements：per kg prepared fibre graded

Raw quantity and calculation requirements: Weigh each separately marketed grade; zero when none sold. Original collection denominator kind: process_output.

- Selected flow: Downgraded saleable raw fine hair by species, grade and destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Physical downgraded share, not universal co-product ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg prepared fibre graded, corrected for measured moisture change
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Unsaleable grading reject (`grade_reject`)

Record non-marketed reject only after distinguishing saleable downgraded fibre and actual treatment fate.

Denominator and scope requirements：per kg prepared fibre graded

Raw quantity and calculation requirements: Weigh rejects and samples independently of sold products. Original collection denominator kind: process_output.

- Selected flow: Unsaleable grading reject by material and fate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rejects`
- Range: Physical reject share, not a disposal factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg prepared fibre graded, corrected for measured moisture change
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Elementary flows

### Process: Protective packing and handover (`present`)

#### Inputs

##### Product flows

###### Accepted fine hair to pack (`pack_input`)

Pack only the accepted identified grade; repacking purchased hair is not a new harvest.

Denominator and scope requirements：per kg net packed fine hair

Raw quantity and calculation requirements: Net fibre mass transferred from grading to packing. Original collection denominator kind: process_output.

- Selected flow: Accepted raw fine hair, species and grade qualified (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Input completeness on net packed-fibre basis
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg net packed fine hair
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Protective fibre package (`fibre_package`)

Select actual clean flexible sack or other documented compatible protective packaging; record reuse and avoid fibre contamination.

Denominator and scope requirements：per kg net packed fine hair

Raw quantity and calculation requirements: Weigh new package mass; allocate reusable package burden by evidenced turns. Original collection denominator kind: process_output.

- Selected flow: Flexible protective fibre packaging (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional package screen, not a sack-size default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg
  - Basis: per kg net packed fine hair
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows
#### Outputs

##### Product flows

###### Raw fine animal hair at actual handover (`fine_hair_handover`)

Sole reference handover for an identified species, grade, state and farm/collection gate; package mass excluded.

Raw reference-output records: Gross package minus measured tare and removed matter gives net as-sold fibre. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Raw fine animal hair, uncarded/uncombed, species/state/gate qualified
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Reference-output completeness on own net basis
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg net as-sold fine hair at declared gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_outputs | fibre and other animal products | Subdivide animal service by actual species, animal, phase and independently sold outputs: fine hair, coarse/guard hair if marketed, milk, offspring or meat only when actually produced. Never invent slaughter co-product for fibre-only route. Prefer measured causal service allocation; if inseparable, disclose justified physical or economic allocation, price period and sensitivity. Rejects are not automatically co-products. | fao-animal-fibre-harvesting |
| a_grades | accepted and other sold grades | Split grade-specific operations where recorded. For jointly graded saleable outputs assign shared burden by causal use if measured, otherwise disclose allocation and uncertainty. One lot has one output handover. | fao-animal-fibre-processing |
| a_period | repeat harvests and animal phases | Carry husbandry inputs, animal replacement and stock changes through actual periods; attribute one service to relevant fibre events and other actual outputs once, never using universal animal lifetime or fibre yield. | fao-animal-fibre-harvesting |
| a_shared | shears, combs, cleaning, graders and storage | Register each shared asset or utility meter, its harvest/condition/grade/present consumers and service periods; apportion by measured hours, throughput or justified proxy once. | fao-animal-fibre-harvesting |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal_service` | harvest | animal upstream service | cohort and allocation ledger | species; animal/cohort; phase; upstream source; other actual outputs; period; share | link upstream and sale ledger; Raw aggregation requirements: assign one evidenced share per event. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | share;kg | event and period | complete phases | source farms | per reference flow | dataset and output ledger; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_lot_mass` | harvest;condition | fibre transfer | tagged lot scale ticket | animal/cohort; source; method; input/output mass; moisture; guard hair; time | calibrated weighing and sample; Raw aggregation requirements: net mass by state. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;kg/kg | each lot | harvest through condition | each lot | per reference flow | calibration, samples, transfer signature; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utility` | condition | optional water and energy | meter/fuel record | lot; cleaning route; water; carrier; energy; meter; period | meter and operation log; Raw aggregation requirements: assign carrier/lot once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;MJ | each operation | conditioning period | each site | per reference flow | meter and operation ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_grade` | grade | product grades | assay and sale ticket | lot; species; fineness; length; colour; moisture; accepted; downgraded; buyer | test and calibrated weighing; Raw aggregation requirements: reconcile grades by destination. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | µm;mm;kg | each lot | grade to sale | all lots | per reference flow | test and buyer record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_rejects` | harvest;condition;grade | waste/loss | material destination log | lot; stage; material; mass; sample; treatment | segregate, weigh and retain receipt; Raw aggregation requirements: sum material by fate once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each removal | full route | all sites | per reference flow | weigh/disposal receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_handover` | present | final fibre and package | sale/pack ledger | lot; species; grade; state; gross; tare; net; package; reuse; moisture; buyer; gate | gross/tare weighing and receipt; Raw aggregation requirements: net as-sold mass. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;item | handover | grade to gate | each seller | per reference flow | pack and signed receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | each sale lot | Net fibre = measured gross minus package tare and separately removed matter; retain species, grade, state and gate. | gross, tare, removed matter | kg net fibre | fao-animal-fibre-harvesting |
| c_balance | harvest through grade | Reconcile incoming and transferred solids with accepted, downgraded, rejected and sampled solids; use measured moisture when wet masses differ. | mass/moisture by state, rejects, samples | lot and dry-solids balance | fao-animal-fibre-processing |
| c_attribution | animal and asset service | Multiply actual cohort-period upstream burden by evidenced share assigned to fibre event; apportion shared utilities/assets among consumers once. | service ledger, outputs, allocation key | attributed burden per lot | fao-animal-fibre-harvesting |
| c_intensity | final dataset | Divide attributed inventory by net as-sold fibre for declared species/grade/state/gate; do not use generic raw-to-clean factor. | attributed flows, net mass, qualifiers | inventory per 1 kg reference | fao-animal-fibre-processing |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each lot | Verify species, harvest method, absence of textile carding/combing, grade and state; animal combing alone does not imply textile-combed fibre. | animal/source and operation records |
| dq_quality | state comparison | Disclose fineness/length testing, moisture/contamination sampling and uncertainty; no universal species conversion. | test report and sample chain |
| dq_complete | all nodes | Account for source burden, transfer, marketed grade, reject, utility, package and period; justify actual zero activities. | source, lot and meter reconciliation |
| dq_source | purchased and animal-service inputs | Preserve upstream dataset scope and output attribution to avoid duplicated husbandry or missing purchased-hair burden. | supplier metadata and allocation ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference/output | Reject attached pelt, ordinary wool, coarse-only hair, textile-carded/combed fibre or species/grade/gate-free mass as reference; animal combing at harvest remains eligible. | fao-animal-fibre-harvesting;fao-animal-fibre-processing |
| v_balance | material nodes | Check lot continuity, net mass, sampled moisture and accepted/downgraded/waste destinations; one lot has one handover. | fao-animal-fibre-processing |
| v_allocation | animal periods/shared services | Check actual animal output set, period attribution and shared-asset consumers; reject missing upstream burden and duplicated service. | fao-animal-fibre-harvesting |
| v_route | optional condition | Require operation evidence for washing, dehairing or drying and class confirmation for sold state; reject default yield or obligatory processing across species. | fao-animal-fibre-processing |
| v_binding | generated exchanges | Resolve conditional product inputs to exact verified UUIDs from foreground records; other UUIDs remain unresolved until detail/property/unit-group confirmation. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species- and grade-specific fine-hair foreground data package, not a PCR release claim. |
| downstream_use | Secondary/background dataset for later textile chains and flow/process/lifecyclemodel projections after UUID resolution. |
| allowed_use | Compare lots with documented species, grade, raw state, moisture and gate; normalize differing moisture on measured dry solids only. |
| excluded_use | Proxy for sheep wool, coarse hair, attached pelts, carded/combed fibre, yarn or species-free clean-hair average. |
| required_metadata | Species, source, harvest method, animal period/outputs, grade tests, cleaning, mass/moisture, gate, package and allocation. |
| required_quality_disclosure | Species/grade comparability, measured moisture, upstream scope, balance uncertainty, unresolved identities and shared-asset allocation. |
| update_trigger | New species/harvest/processing route, grade definition, gate, supplier evidence or exact platform UUID support. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-animal-fibre-harvesting` | handbook | [FAO, Harvesting of textile animal fibres, chapter 4](https://www.fao.org/4/v9384e/v9384e09.htm) | Species-specific combing, shearing/collection, first packing and protection. |
| `fao-animal-fibre-processing` | handbook | [FAO, Harvesting of textile animal fibres, chapter 5](https://www.fao.org/4/v9384e/v9384e10.htm) | Sorting, first preparation, grade states and downstream textile-processing distinction. |
