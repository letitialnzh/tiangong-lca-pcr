---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-sheep-or-lambs
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw hides and skins of sheep or lambs

## 1. Scope and Applicability

This PCR covers untanned fresh or first-stage preserved sheep/lamb raw skins at the actual removal or hide-curing handover. Declare adult/lamb class, fleece attachment, source legality, grade, preservation state, moisture and adhering salt, net mass and gate. Fleece still attached is part of the skin; detached wool is another product. Exclude goat skin, tanned fleece-on sheepskin, manufactured leather, further preparation and post-gate freight. Lawfully recovered, quality-acceptable fallen animals may yield skin without fictional meat co-products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-sheep-or-lambs |
| classification_refs | CPC 3.0 02953 |
| covered_products | Fresh or first-stage preserved untanned sheep/lamb raw skins, fleece potentially attached. |
| excluded_products | Detached wool, goat skins, tanned fleece-on sheepskins, leather and further prepared goods. |
| representative_product | Accepted raw skin weighed as sold at actual handover. |
| production_route | Actual husbandry and slaughter or lawful fallen recovery; independent flaying, first conditioning, grading, optional preservation and handover. |
| market_state | Untanned raw skin with age, fleece, grade and condition declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted untanned sheep/lamb skin at actual gate. |
| How much | 1 kg net as-sold skin excluding package and free salt/brine. |
| How well | Record age, source legality, fleece, grade, preservation, moisture/salt and gate. |
| How long or cycle | Attribute once by animal cohort, slaughter/recovery event and service period. |
| reference_flow_link | `raw_skin_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Condition- and gate-qualified sheep/lamb raw skin |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | adult or lamb; slaughter or lawful fallen recovery; fleece; grade; preserved state; moisture/salt; net mass; gate; period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | relevant lots | Mass | kg | Record calibrated gross/tare; exclude package and separable free salt/brine from net skin. |
| m_state | relevant lots | Mass, moisture and salt fractions | kg; kg/kg | Convert fresh and preserved states only using lot-measured mass, moisture and salt; no universal factor. |
| m_balance | relevant lots | Mass | kg | Reconcile accepted, downgraded, rejected, trim and moisture loss by source lot. |
| m_period | relevant lots | Time and service measure | period; service unit | Link animal phases, output events and shared service to actual periods without duplicate burden. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable cohort and actual slaughter, or lawful fallen-animal recovery event. |
| starting_condition_role | Prefer compatible upstream husbandry through live-animal arrival with actual slaughter/dressing foreground here. If an upstream dataset already includes slaughter, the source node is only a traceable interface/allocation record and repeats no slaughter exchanges. Fallen-animal recovery starts from documented lawful source and separately accounts for its actual terminal treatment. Purchased materials/services are Product inputs only where used. |
| product_classification_scope | Fresh or first-stage preserved, not further prepared sheep/lamb raw skin. |
| recursive_input_rule | Purchased same-category raw skin retains upstream burden, not recounted as newly flayed. |
| upstream_dataset_requirement | Traceable husbandry, slaughter or recovery and actual material/service data; no automatic zero-burden hide. |
| disclosure | Age, fleece, source legality, state, grade, gate, periods, allocation and shared services. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | animal source | Include traceable husbandry and actual slaughter/dressing, including real meat, detached wool and milk at distinct phases; do not duplicate slaughter exchanges already covered by an upstream dataset. Lawful fallen-animal recovery follows actual terminal-treatment route, not fictional meat. Only a quality-accepted recovered skin-bearing material exits the source interface as Product; nonaccepted recovered carcass material follows its actual waste/treatment path, not the Product card. | fao-hides-statistics;fao-hides-skins |
| b_remove | removal | Independent flaying hands intact untanned skin to first preparation; separate incidental tissue and damage. | fao-small-ruminant-slaughter |
| b_condition | first handling | Include actual cleaning, fleshing and trimming before sorting; exclude dehairing, liming and tanning. | fao-small-ruminant-slaughter |
| b_preserve | preserved lots | Fresh lots bypass treatment. For preserved lots measure method, energy, salt/brine, before/after state and residues without universal recipe. | fao-hides-skins |
| b_gate | handover | Protect raw skin to actual removal-site or curing handover; exclude tannery transformation and downstream transport. | un-cpc-3-notes;unido-leather-framework |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| source | Animal source, slaughter or lawful recovery | required | relevant lots | Actual upstream animal and co-product interface; fallen route uses lawful recovery without fictional meat. | kg source event |
| remove | Independent raw skin removal | required | relevant lots | Separate flaying from source event and first preparation. | kg node output |
| condition | First raw-skin conditioning | required | relevant lots | Clean, flesh and trim only as performed before grading. | kg node output |
| grade | Raw-skin grading and sorting | required | relevant lots | Separate accepted, downgraded sale and rejected destinations. | kg node output |
| preserve | Optional raw-skin preservation | conditional | preserved lots only | Stabilize by actual chilling, drying, salt or brine method; fresh lots bypass. | kg node output |
| handover | Protective presentation and handover | required | relevant lots | Protect accepted raw skin to declared removal or curing gate. | kg node output |

Husbandry may span breeding, lactation, shearing and finishing periods. Real saleable co-products are attributed by their own period and gate; attached fleece cannot also be detached wool. Flaying is independent of source and first conditioning. Grading separates accepted, saleable downgrade and reject destinations. Fresh lots bypass preservation. Shared slaughter floor, flaying bench, cleaning, cold room and curing assets are charged once to actual nodes and periods.

### Process: Animal source, slaughter or lawful recovery (`source`)

#### Inputs

##### Product flows

###### Traceable sheep or lamb (`source_animal`)

Only slaughter route; trace prior breeding, wool and milk periods and supplier burden.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Live sheep or lamb received for actual slaughter (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Skin-bearing sheep/lamb material (`source_skinbearing`)

From actual slaughter or lawful fallen-animal recovery only after quality acceptance as a raw-skin source. Rejected recovered carcass remains in the separately documented waste/treatment route; do not invent meat on fallen route.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Sheep/lamb carcass or portion with raw skin attached (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual separate animal products (`source_coproduct`)

Record only existing outputs at their own phase and gate; attached fleece is not detached wool.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Actually marketable meat, detached wool, milk and other goods (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Independent raw skin removal (`remove`)

#### Inputs

##### Product flows

###### Skin-bearing material for flaying (`remove_input`)

Transfer from source once; flaying is independent of animal production and first cleaning.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Skin-bearing sheep/lamb carcass or portion (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_remove`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh raw skin after flaying (`remove_skin`)

Measure adult/lamb class, intactness and fleece-on status.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Untanned sheep/lamb raw skin immediately after removal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_remove`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Flaying damage and incidental tissue (`remove_residue`)

Separate intended skin from loss, tissue and damaged rejected skin.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Nonsaleable flaying residue by actual destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First raw-skin conditioning (`condition`)

#### Inputs

##### Product flows

###### Fresh skin entering first preparation (`condition_in`)

Match removal ticket and retain lot/fleece identity.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Fresh untanned sheep/lamb skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### First cleaning water (`condition_water`)

Use only when actual cleaning is performed; meter by node and period.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Supplied process water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared still-raw skin (`condition_out`)

Hand to grading after actual cleaning, fleshing or trim; no dehairing or tanning.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: First-conditioned untanned sheep/lamb skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### First-preparation residue (`condition_residue`)

Identify separately marketed material, waste and measured loss.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Tissue and nonsaleable trim by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Raw-skin grading and sorting (`grade`)

#### Inputs

##### Product flows

###### Prepared skin for grading (`grade_in`)

Inspect age, fleece, defects and buyer criteria.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: First-conditioned sheep/lamb raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted and downgraded sale grades (`grade_sale`)

Name every saleable grade and handover; downgraded sale product is not waste.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Raw sheep/lamb skin by actual marketable grade (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected raw skin (`grade_reject`)

Record actual treatment destination, distinct from marketable downgrade.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Unsaleable rejected sheep/lamb skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Optional raw-skin preservation (`preserve`)

#### Inputs

##### Product flows

###### Fresh skin entering preservation (`preserve_in`)

Fresh-sale lots bypass this node entirely.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Saleable fresh sheep/lamb raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual curing materials (`preserve_salt`)

Record only for relevant salted/brined batches and actual concentration; no default dose.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Actual salt or brine constituent (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation energy (`preserve_energy`)

Meter by carrier, preservation node and service period.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Actual energy carrier for chilling, drying or curing (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: MJ/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved still-raw skin (`preserve_out`)

Measure post-treatment mass, moisture, adhering salt and free media separately.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Method-specific preserved untanned sheep/lamb skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Spent curing media and rejected skin (`preserve_residue`)

Distinguish waste from evaporated water and incorporated salt.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Spent salt/brine and rejected skin by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective presentation and handover (`handover`)

#### Inputs

##### Product flows

###### Accepted fresh or preserved skin (`handover_in`)

Receive one lot from grading or preservation, not twice.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Raw sheep/lamb skin in declared incoming state (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective package (`handover_package`)

Record material and reuse; exclude later freight service.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Actual wrap, crate or pallet material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net raw sheep/lamb skin at actual gate (`raw_skin_product`)

Reference output excludes packaging and separable free salt/brine.

Raw reference-output records: Measure actual lot and reconcile node inputs, outputs and destinations. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Condition- and gate-qualified sheep/lamb raw skin
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per 1 kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Damaged package and final rejects (`handover_reject`)

Keep product and package rejects distinct with disposal destinations.

Denominator and scope requirements：per kg node output

Raw quantity and calculation requirements: Measure actual lot and reconcile node inputs, outputs and destinations. Original collection denominator kind: process_output.

- Selected flow: Rejected skin or packaging by actual destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Lot completeness screen, not a default factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg node output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_slaughter | slaughter route | Enumerate each genuinely marketable meat, skin, detached wool, milk or other output at its real phase and gate. Use documented causal physical attribution if defensible; otherwise document economic allocation with period-specific prices and sensitivity. Never assign all animal burden to the skin or automatic zero burden. | fao-hides-skins |
| a_fallen | fallen route | Document pre-existing animal burden, lawful recovery and terminal-treatment counterfactual; justify burden attribution and any separately reported avoided-treatment credit without invented meat. | fao-hides-statistics |
| a_grade | grades and cure | Count every saleable grade at one handover only; separately sold trim requires its own product decision. Moisture/salt mass changes do not create extra skin. | fao-hides-skins |
| a_period | phases and shared assets | Index breeding, lactation, shearing, finishing, slaughter/recovery and replacement across actual periods. Charge shared slaughter floor, cleaning, cold room and curing assets once using evidenced service time, throughput or other causal driver. | fao-hides-skins |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | source | cohort, actual slaughter or lawful recovery, independently marketable outputs by phase | lot ledger | cohort, actual slaughter or lawful recovery, independently marketable outputs by phase | calibrated scale, meter and tickets; Raw aggregation requirements: sum once by lot and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each lot/period | all relevant events | actual site | per reference flow | calibration, source and dispatch record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_remove | remove | source event, intact raw skin, fleece and loss | lot ledger | source event, intact raw skin, fleece and loss | calibrated scale, meter and tickets; Raw aggregation requirements: sum once by lot and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each lot/period | all relevant events | actual site | per reference flow | calibration, source and dispatch record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_condition | condition | incoming, water, prepared skin, trim | lot ledger | incoming, water, prepared skin, trim | calibrated scale, meter and tickets; Raw aggregation requirements: sum once by lot and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each lot/period | all relevant events | actual site | per reference flow | calibration, source and dispatch record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_grade | grade | accepted, downgraded, rejected grades and destination | lot ledger | accepted, downgraded, rejected grades and destination | calibrated scale, meter and tickets; Raw aggregation requirements: sum once by lot and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each lot/period | all relevant events | actual site | per reference flow | calibration, source and dispatch record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_preserve | preserve | method, input/output mass, salt/brine, moisture, energy | lot ledger | method, input/output mass, salt/brine, moisture, energy | calibrated scale, meter and tickets; Raw aggregation requirements: sum once by lot and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each lot/period | all relevant events | actual site | per reference flow | calibration, source and dispatch record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_utilities | condition;preserve;handover | carrier, meter, node, asset and service period | lot ledger | carrier, meter, node, asset and service period | calibrated scale, meter and tickets; Raw aggregation requirements: sum once by lot and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each lot/period | all relevant events | actual site | per reference flow | calibration, source and dispatch record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_handover | handover | net/gross, package tare, state and gate | lot ledger | net/gross, package tare, state and gate | calibrated scale, meter and tickets; Raw aggregation requirements: sum once by lot and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each lot/period | all relevant events | actual site | per reference flow | calibration, source and dispatch record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_residues | source;remove;condition;grade;preserve;handover | material, mass, reason and actual destination | lot ledger | material, mass, reason and actual destination | calibrated scale, meter and tickets; Raw aggregation requirements: sum once by lot and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;period | each lot/period | all relevant events | actual site | per reference flow | calibration, source and dispatch record; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | final lot | net skin = gross minus package tare and separable free salt/brine; disclose retained moisture/salt | cp_handover;cp_preserve | kg net skin | fao-hides-skins |
| c_balance | all operations | inputs plus added cure = sale grades plus rejects/residue plus water/stock change and residual | cp_remove;cp_condition;cp_grade;cp_preserve | kg residual | fao-small-ruminant-slaughter |
| c_period | animal and shared services | attribute each phase/service burden once across actual outputs and consuming nodes | cp_source;cp_utilities | burden/kg | fao-hides-skins |
| c_norm | reference lot | attributable measured quantity divided by positive net skin at same state and gate | cp_handover;cp_source | quantity/kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | relevant lots | Confirm sheep/lamb, age, fleece, raw status, source legality, state, grade and gate. | source, batch and review records |
| q_mass | relevant lots | Calibrate net/tare and measure moisture/salt and batch residual; no assumed state conversion. | source, batch and review records |
| q_attribution | relevant lots | Retain actual outputs/phases, allocation basis, periods and shared-service driver worksheet. | source, batch and review records |
| q_uuid | relevant lots | Resolve state/gate-compatible concrete UUID before final TIDAS exchange construction. | source, batch and review records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference lot | Reject non-sheep/lamb, tanned or further prepared goods or missing age, fleece, state, gate or net mass. | un-cpc-3-notes |
| v_route | source and removal | Require an independent skin-removal handoff; slaughter route lists real co-products; fallen route has lawful recovery and no invented meat. | fao-hides-statistics;fao-small-ruminant-slaughter |
| v_balance | each batch | Reconcile accepted, downgraded and rejected skin, residue, stock and moisture/salt change, investigating residual against site measurement uncertainty. | fao-hides-skins |
| v_attribution | products, phases and shared services | Reject unsupported zero-burden skin, duplicated attached fleece/detached wool, repeated animal phase or shared plant burden, or absent allocation evidence. | fao-hides-skins |
| v_uuid | concrete dataset exchanges | Unresolved cards cannot become final exchanges; CPC label alone cannot make tanned sheepskin or manufactured leather an exact raw Mass flow. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Age-, fleece-, route-, state- and gate-qualified raw sheep/lamb skin foreground dataset. |
| downstream_use | Candidate secondary_dataset or background_dataset only after concrete exchange identity, review and publication. |
| allowed_use | Like-state/gate comparison or measured lot-specific salt/moisture conversion. |
| excluded_use | Goat skin, detached wool, tanned fleece-on skin, leather, universal fresh conversion or unsupported zero burden. |
| required_metadata | Age, source event/legal status, fleece, grade, state, net/tare, salt/moisture, gate, periods and allocation. |
| required_quality_disclosure | Co-product and period attribution, mass balance, cure recipe, rejects, shared services and unresolved UUID. |
| update_trigger | Exact raw-skin flow verification, changed route/gate or new measured state/allocation evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-notes` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | species and raw-skin product boundary |
| `fao-hides-skins` | official_guidance | [FAO Hides and Skins](https://www.fao.org/4/i0523e/i0523e.pdf) | source and preservation route |
| `fao-small-ruminant-slaughter` | official_guidance | [FAO small-ruminant slaughter and curing](https://www.fao.org/4/X6552E/X6552E10.htm) | flaying and first conditioning |
| `fao-hides-statistics` | official_guidance | [FAO hide production definitions](https://www.fao.org/4/x9892e/X9892e06.htm) | fallen-animal source |
| `unido-leather-framework` | official_guidance | [UNIDO leather framework](https://downloads.unido.org/ot/46/70/4670793/KRAL_AGR_AIT_URT_2015_100228_001.pdf) | pre-tannery boundary |
