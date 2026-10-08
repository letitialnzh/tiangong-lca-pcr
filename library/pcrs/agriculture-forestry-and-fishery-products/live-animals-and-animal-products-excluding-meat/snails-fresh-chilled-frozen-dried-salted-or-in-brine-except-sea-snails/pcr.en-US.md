---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.snails-fresh-chilled-frozen-dried-salted-or-in-brine-except-sea-snails
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Snails, fresh, chilled, frozen, dried, salted or in brine, except sea snails

## 1. Scope and Applicability

This PCR covers non-sea snail goods harvested from managed terrestrial rearing or lawful wild gathering and delivered fresh, chilled, frozen, dried, salted or in brine at a declared farm or first-processing gate. Record species, source route, intended use, whole/shelled presentation, actual sold state, applicable grade or quality criterion, moisture or brine content, and gate. The six sale states are alternatives for identified lots, not sequential mandatory steps or interchangeable kilograms; a declared batch may undergo multiple operations only if its final sold state and intermediate balances are recorded. Sea snails, other animals, goods transformed beyond these listed states, downstream retail distribution and consumer use are excluded. Food safety requirements apply when the declared use is human food, not to every snail lot. Wild-collected snails have no fictitious managed-rearing parent. [UN CPC 3.0](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) sets the product boundary; [FAO snail-farming guidance](https://www.fao.org/4/aq106e/aq106e00.pdf) and [FAO gathering guidance](https://www.fao.org/4/v6200t/v6200T0c.htm) support example production routes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.snails-fresh-chilled-frozen-dried-salted-or-in-brine-except-sea-snails |
| classification_refs | CPC 3.0 02920 |
| covered_products | Non-sea snails in one declared fresh, chilled, frozen, dried, salted or brined sale state, with intended use and applicable quality criterion disclosed. |
| excluded_products | Sea snails; other animal products; prepared or otherwise transformed goods beyond the listed states; post-gate distribution. |
| representative_product | Accepted terrestrial-snail goods lot weighed in its declared as-sold state at farm or first-processing handover. |
| production_route | Managed rearing then independent harvest, or lawful wild gathering; first handling and applicable cleaning/grade sorting; optional state-specific preservation; protective packing when used. |
| market_state | State-specific whole or shelled non-sea snail lot; packaging and any free brine are separately reported. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted non-sea snail goods in one declared sold state and intended use at the actual handover gate. |
| How much | 1 kg net snail product as sold, excluding packaging and separately reported free brine. |
| How well | Species, lawful source, whole/shelled presentation, intended use, applicable grade/quality criterion, condition/rejection, moisture/brine, and food-safety status when used as food declared. |
| How long or cycle | Identified rearing cohort or gathering event through handover; multi-period breeding stock and shared services attributed over actual service periods. |
| reference_flow_link | `pack_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Non-sea snail goods, sold state and handover-gate qualified |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; managed or lawful wild route; intended use; whole/shelled; fresh/chilled/frozen/dried/salted/brined; gross and net mass; moisture and free-brine accounting; applicable grade/quality criterion; actual gate; cohort/event; package tare |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | reference and intermediate lots | Mass | kg | Weigh net snail material after tare; record separated shell, rejected material and free brine separately. |
| m_state | preserved versus fresh lots | Mass and moisture fraction | kg; kg/kg | Record pre- and post-preservation mass, measured moisture and separately added salt/brine. Compare states only through measured solids and recipe mass balance, never a fixed universal yield. |
| m_grade | accepted and rejected lots | Mass | kg | Reconcile incoming material with accepted, downgraded, rejected and measured losses on the same lot basis. |
| m_period | rearing, shared facilities and gathering | Time and service measure | period; service unit | Link inputs, harvest, facility services and output to the relevant cohort, gathering event and reporting period exactly once. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed route: identified breeding/juvenile stock and feed source; wild route: documented lawful collection area and event, without managed breeding inputs. |
| starting_condition_role | Purchased stock, feed, salt, packaging and energy cross as upstream Product inputs; land and reusable assets use documented period/service attribution. |
| product_classification_scope | Non-sea snail goods in declared fresh, chilled, frozen, dried, salted or brined sale states; no universal food-use requirement. |
| recursive_input_rule | Purchased snails of this category entering grading or preservation retain upstream burden and are not recounted as newly reared or gathered output. |
| upstream_dataset_requirement | Require traceable upstream datasets for purchased juvenile stock/feed, salt, utility, packaging and equipment where included; no zero-burden purchased snail input. |
| disclosure | Declare species, route legality, state, gate, lot and period, rejected destinations, asset ownership and all preservation choices. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | managed or wild source | Include managed husbandry with breeding/juvenile stock, feed and enclosure care only for managed lots. Wild gathering begins at the lawful collection context; its habitat is not modelled as a farm. Harvest/gathering remains a distinct removal and handoff from production context. | fao-improved-snail-farming;fao-snail-farming-gathering |
| b_condition | collected to accepted product | Include first handling, with purging/cleaning and grade sorting when the actual route or intended use requires them. Separate accepted goods, independently marketable downgraded goods and rejected/waste destinations by the declared quality criterion. Shell and waste are not silently saleable product. | fao-improved-snail-farming |
| b_preserve | optional preserved lots | Include chill, freeze, dry, salt or brine interventions only when actually performed before handover. Record input energy, salt/brine and water, residues, moisture loss and rejection; do not require all treatments on one lot. | fao-improved-snail-farming |
| b_gate | all lots | Include protective packing and on-site handling through actual farm/first-processing handover; exclude downstream distribution, retail and cooking. Record reusable package return and shared facility services separately. | fao-improved-snail-farming |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rear | Managed terrestrial-snail rearing | conditional | Managed-production route only | Parent biological production of harvest-ready snails; not imputed to wild lots | kg harvest-ready snails per cohort |
| gather | Harvest or lawful gathering | required | Every accepted lot | Independently remove snails from enclosure or documented wild site; identify incidental material and loss | kg collected raw snails |
| prepare | First handling and applicable grade sorting | required | Every goods lot; purge/clean only when performed | Transfer collected material to an accepted state under declared intended-use criteria, with other destinations explicit | kg incoming raw snails |
| preserve | State-specific preservation | conditional | Chilled, frozen, dried, salted or brined before sale | Usable prepared snails to one documented stabilized state; residues and losses separated | kg usable prepared snails entering step |
| pack | Protective packing and handover | required | Every sale lot; package materials only when used | Accepted fresh or preserved state presented and handed over at declared gate | kg net non-sea snail goods |

Harvest is independent of managed rearing because removal occurs after production of harvest-ready animals; wild gathering uses the same removal node without a rearing parent. First handling records incoming state, actual purge/clean inputs when used, and accepted, separately marketable downgraded and rejected destinations against declared intended-use criteria. Preservation receives usable product, and the handover node receives either fresh or one measured final preserved state. Shared enclosures, washing stations, cold rooms and packaging services used by multiple cohorts, nodes or periods require one recorded service measure and one attribution.

### Process: Managed terrestrial-snail rearing (`rear`)

#### Inputs

##### Product flows

###### Purchased juvenile or breeding snails (`rear_stock`)

Record identity, count or weighed mass, cohort and opening/closing stock; this input exists only on the managed branch.

Denominator and scope requirements：per kg harvest-ready snails from managed cohort

Raw quantity and calculation requirements: Supplier receipts plus stock change by cohort. Original collection denominator kind: process_output.

- Selected flow: Terrestrial snail breeding or juvenile stock (UUID unresolved)
- Flow property / unit: Count or Mass / item or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rearing`
- Range: Completeness screen for purchased stock
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: kg purchased stock per kg harvest-ready output; provisional and never a default breeding rate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Species-appropriate feed (`rear_feed`)

Weigh consumed purchased or on-site feed; on-site cultivation is attributed upstream or inside foreground once.

Denominator and scope requirements：per kg harvest-ready managed snails

Raw quantity and calculation requirements: Issued feed less leftovers and stock change. Original collection denominator kind: process_output.

- Selected flow: Terrestrial-snail feed or crop residue, supplier-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rearing`
- Range: Provisional feed completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: consumed feed per kg harvest-ready output; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing and cleaning water (`rear_water`)

Meter water entering enclosure care and hygiene, not precipitation already outside the managed process.

Denominator and scope requirements：per kg harvest-ready managed snails

Raw quantity and calculation requirements: Metered consumption assigned to cohort and period. Original collection denominator kind: process_output.

- Selected flow: Supplied process water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional water completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: supplied water per kg harvest-ready output; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvest-ready managed snails (`rear_ready`)

Weigh the biological output available for separate physical harvest; it is an internal state, not final sold mass.

Denominator and scope requirements：per managed cohort

Raw quantity and calculation requirements: Measured ready mass by cohort. Original collection denominator kind: process_output.

- Selected flow: Harvest-ready terrestrial snails (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rearing`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/cohort
  - Basis: per managed cohort; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rearing residues and mortality (`rear_residue`)

Record spent feed, rejected animals and bedding as segregated waste destinations; separately sold material is not waste.

Denominator and scope requirements：per kg harvest-ready managed snails

Raw quantity and calculation requirements: Weigh or estimate from documented disposal records. Original collection denominator kind: process_output.

- Selected flow: Rearing organic residue and mortality, composition-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg harvest-ready managed snails; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Harvest or lawful gathering (`gather`)

#### Inputs

##### Product flows

###### Managed harvest-ready snails (`gather_managed_input`)

Use only on managed route; inherit cohort burden once from rearing.

Denominator and scope requirements：per kg collected raw snails

Raw quantity and calculation requirements: Mass transferred from rear node. Original collection denominator kind: process_output.

- Selected flow: Harvest-ready terrestrial snails (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg collected raw snails; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest or gathering energy (`gather_energy`)

Measure powered collection equipment when used; manual collection has no invented electricity demand.

Denominator and scope requirements：per kg collected raw snails

Raw quantity and calculation requirements: Metered or fuel-recorded consumption by event. Original collection denominator kind: process_output.

- Selected flow: Actual energy carrier for collection (UUID unresolved)
- Flow property / unit: Energy or Mass / kWh, MJ or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/kg
  - Basis: per kg collected raw snails; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected raw snails (`gather_raw`)

Transfer measured whole raw non-sea snails from farm or lawful wild site to first preparation; capture loss and incidental material separately.

Denominator and scope requirements：per collection event

Raw quantity and calculation requirements: Weigh collected lot and record collection context. Original collection denominator kind: process_output.

- Selected flow: Collected raw terrestrial snails (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/event
  - Basis: per collection event; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Incidental or unfit collected material (`gather_incidental`)

Separate debris, unfit animals and measured field losses by actual destination.

Denominator and scope requirements：per kg collected raw snails

Raw quantity and calculation requirements: Weighed debris and unfit quantity; record uncollected estimated loss separately. Original collection denominator kind: process_output.

- Selected flow: Incidental collection residue, identified composition (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg collected raw snails; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First handling and applicable grade sorting (`prepare`)

#### Inputs

##### Product flows

###### Raw snails entering preparation (`prepare_raw`)

Record the collected lot and any separately purchased snails, retaining upstream burdens for both.

Denominator and scope requirements：per kg preparation input

Raw quantity and calculation requirements: Weigh all incoming lots and keep source shares. Original collection denominator kind: process_output.

- Selected flow: Raw terrestrial snails (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg preparation input; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purging and washing water (`prepare_water`)

When purging or washing is actually performed, record supplied water and its wastewater destination; an unwashed route has no invented water input.

Denominator and scope requirements：per kg raw snails prepared

Raw quantity and calculation requirements: Metered water net of documented recovery. Original collection denominator kind: process_output.

- Selected flow: Supplied process water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional water-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: supplied water per kg raw snails prepared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared snails (`prepare_accepted`)

First handling assigns a goods-accepted state against the declared intended use and quality criterion; conditional cleaning and sorting are recorded before fresh handover or state-specific preservation.

Denominator and scope requirements：per kg incoming raw snails

Raw quantity and calculation requirements: Weigh accepted grade and record whole or shelled state. Original collection denominator kind: process_output.

- Selected flow: Prepared non-sea snail goods, intended-use qualified (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg incoming raw snails; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separately marketable downgraded grade (`prepare_downgraded`)

Record only when a genuine separately marketable downgraded grade exists for the declared use; otherwise classify unfit material as waste.

Denominator and scope requirements：per kg incoming raw snails

Raw quantity and calculation requirements: Weigh grade and document its independent destination. Original collection denominator kind: process_output.

- Selected flow: Downgraded non-sea snail goods lot, intended-use qualified (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg incoming raw snails; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unfit snails, shell and wash residue (`prepare_reject`)

Weigh rejected animals, separated shell, soil and other residue, with destination and any saleable shell disclosed separately.

Denominator and scope requirements：per kg incoming raw snails

Raw quantity and calculation requirements: Weigh and reconcile with incoming and accepted masses. Original collection denominator kind: process_output.

- Selected flow: Preparation reject, composition- and destination-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg incoming raw snails; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: State-specific preservation (`preserve`)

#### Inputs

##### Product flows

###### Prepared usable snails (`preserve_input`)

One accepted measured lot enters one actual chilling, freezing, drying, salting or brining route.

Denominator and scope requirements：per kg prepared input

Raw quantity and calculation requirements: Weigh incoming state before intervention. Original collection denominator kind: process_output.

- Selected flow: Prepared non-sea snail goods, intended-use qualified (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg prepared input; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation energy (`preserve_energy`)

Record metered refrigeration, freezing or drying energy only for performed intervention; record carrier and shared service period.

Denominator and scope requirements：per kg stabilized state output

Raw quantity and calculation requirements: Metered energy, apportioned once across measured service and output. Original collection denominator kind: process_output.

- Selected flow: Actual preservation energy carrier (UUID unresolved)
- Flow property / unit: Energy or Mass / kWh, MJ or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional preservation-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/kg
  - Basis: per kg stabilized output; route-specific evidence required before use as a benchmark
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salt, brine and process water (`preserve_medium`)

Measure salt and actual brine or process-water recipe only for salted or brined lots; no generic UUID covers all components.

Denominator and scope requirements：per kg stabilized output

Raw quantity and calculation requirements: Record each recipe component separately and measure retained versus drained mass. Original collection denominator kind: process_output.

- Selected flow: Recipe-specific salt and water inputs (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg stabilized output; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved non-sea snail goods (`preserve_output`)

Document the one resulting chilled, frozen, dried, salted or brined usable state and transfer its measured snail mass to packing.

Denominator and scope requirements：per kg prepared input

Raw quantity and calculation requirements: Weigh after intervention, excluding separately drained free brine and package. Original collection denominator kind: process_output.

- Selected flow: State-qualified preserved non-sea snail goods (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg prepared input; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation loss or reject (`preserve_reject`)

Record spoiled snails, drained brine and other residues; evaporation is a mass-balance loss, not a waste flow.

Denominator and scope requirements：per kg prepared input

Raw quantity and calculation requirements: Weigh segregated residuals and identify wastewater destination. Original collection denominator kind: process_output.

- Selected flow: Route-specific preservation residue (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg prepared input; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective packing and handover (`pack`)

#### Inputs

##### Product flows

###### Accepted fresh or preserved snail lot (`pack_input`)

Receive one measured accepted state from preparation or preservation; keep separate lots for each state.

Denominator and scope requirements：per kg final net snail product

Raw quantity and calculation requirements: Weigh accepted lot before packaging. Original collection denominator kind: process_output.

- Selected flow: State-qualified non-sea snail goods (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg final net snail product; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective packaging materials (`pack_material`)

When a package is used, record its actual product-contact container and protective overpack by material and reuse cycle, without assigning a generic fixed UUID; bulk handover with no package records zero material.

Denominator and scope requirements：per kg final net snail product

Raw quantity and calculation requirements: Weighed new material plus attributed reusable-package losses per delivery. Original collection denominator kind: process_output.

- Selected flow: Product-contact and transport packaging, actual material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional packaging completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: packaging mass per kg net product; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Non-sea snail goods at actual gate (`pack_product`)

Weigh one state-qualified sale lot after package tare and report product identity, grade, route and exact farm or first-processing handover gate.

Raw reference-output records: Net accepted sold snail mass; free brine and package mass separately disclosed. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Non-sea snail goods, sold state and handover-gate qualified
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Reference-output normalization equality
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per 1 kg declared reference product; investigate outliers against raw records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Damaged packaging and final rejected product (`pack_reject`)

Keep damaged packages and rejected goods lot mass separate and assign actual recovery or disposal destinations.

Denominator and scope requirements：per kg final net snail product

Raw quantity and calculation requirements: Weigh by material and reason for rejection. Original collection denominator kind: process_output.

- Selected flow: Identified packaging and product reject (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Provisional quantity-completeness screen, not a default input or acceptance threshold
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg final net snail product; investigate outliers against raw records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_mass | all route nodes | Reconcile lot inputs, accepted grade, downgraded grade, rejects, moisture change, separated shell and free brine by measured mass. A real separately sold grade or shell requires documented revenue and physical quantities; disclose any allocation basis, do not assign a universal split. | fao-improved-snail-farming |
| a_period | managed cohorts and reusable assets | Link juvenile stock, feed, enclosure maintenance and breeding-stock replacement to actual cohorts and reporting periods. Record opening/closing biological stock and termination; allocate burdens to output periods without reusing the same input in another period. | fao-improved-snail-farming |
| a_shared | enclosures, preparation, cold rooms and package reuse | Record the asset/service, consuming nodes and service periods; use measured occupancy, throughput, metered consumption or another evidenced causal driver and charge each service once. Wild routes omit non-consumed farm assets. | fao-improved-snail-farming |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rearing | rear | cohort stock, feed and output | husbandry log | species, cohort, stock receipts, feed issue/leftover, mortality, ready mass, dates | log plus calibrated scale; Raw aggregation requirements: sum net input and output by cohort. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | item;kg | each event | full managed cohort and period | actual enclosure | per reference flow | supplier records, stock book, scale calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_harvest | gather | source and raw lot | collection log | route, lawful site/permit, cohort or event, raw mass, incidental material, dates | lot scale and collection record; Raw aggregation requirements: sum raw lots without dual attribution. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each event | full gathering event | actual farm or wild site | per reference flow | collection ticket, permit, scale record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_preparation | prepare | purge, wash and grades | batch log | incoming mass, water, accepted, downgraded, rejects, shell, destination | meter, scale, grade log; Raw aggregation requirements: mass-balance per lot. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | every preparation batch | first-processing site | per reference flow | grade specification, scale and meter records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_preservation | preserve | route and state conversion | recipe and batch log | initial/final mass, temperature/time, moisture, salt, brine, rejects, energy | scale, meter, recipe, lab result; Raw aggregation requirements: state-specific batch balance. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;kWh | each performed intervention | all preserved lots | actual plant | per reference flow | recipe, moisture test, energy bill; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_utilities | rear;gather;prepare;preserve | water and energy | meter or fuel record | meter start/end, carrier, node, period, shared driver | meter and invoice reconciliation; Raw aggregation requirements: allocate once by measured driver. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg;kWh;MJ | per meter period | full cohort or service period | consuming nodes | per reference flow | calibration, bills, allocation worksheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_handover | pack | packing and final lot | dispatch record | incoming state, net mass, package tare/reuse, gate, customer handover | calibrated scale and dispatch ticket; Raw aggregation requirements: sum net accepted sale mass by state. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each lot | all accepted sale lots | actual handover site | per reference flow | weighing ticket and lot trace; traceable numerator, accepted reference-output denominator and normalization worksheet |
| cp_residues | rear;gather;prepare;preserve;pack | wastes and loss | disposal and balance log | composition, mass, destination, reason, period | weigh and disposal receipt; Raw aggregation requirements: sum each segregated destination once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each event | all foreground periods | actual node | per reference flow | receipts and mass-balance record; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | final lot | net snail mass = gross delivered mass minus package tare minus separately reported free brine; retain product-incorporated salt and moisture in as-sold mass | cp_handover;cp_preservation | kg net product | fao-improved-snail-farming |
| c_balance | prepare and preserve | incoming measured mass plus incorporated water/salt = accepted plus downgraded plus rejects plus measured loss and change in stock; report unexplained residual | cp_preparation;cp_preservation;cp_residues | kg balance residual | fao-improved-snail-farming |
| c_dry | state comparison | dry snail solids = measured snail mass times (1 minus measured moisture fraction), after identifying salt solids separately; no universal fresh/dried conversion | cp_preservation | kg dry snail solids | fao-improved-snail-farming |
| c_unit | all inputs | normalized input = attributable measured input divided by net accepted mass in same state and lot cohort; zero denominators fail | cp_rearing;cp_harvest;cp_utilities;cp_handover | input per kg reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all lots | Species, non-sea identity, managed/wild origin, legality, intended use, applicable quality criterion, whole/shelled form and actual sale state must be traceable. Food-safety evidence is required when sold for human food. | supplier, collection and batch records |
| q_mass | all nodes | Calibrated gross/tare weighing and a reported balance residual; distinguish shell, package and free brine. | calibration and batch balance |
| q_time | managed/shared nodes | Cohort, asset/service periods and replacement events linked; no duplicated shared burden. | period ledger and allocation worksheet |
| q_gap | unresolved identities | Concrete flow UUIDs and actual carrier/packaging/waste identities require foreground confirmation before dataset exchange generation. | identity-resolution log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference lot | Fail if species is sea snail, route or intended use is unrecorded, the listed sale state is absent, or actual handover gate is missing. Apply food-safety checks only to human-food lots. | un-cpc-3-notes |
| v_route | process map | Managed lots require rearing plus harvest; lawful wild lots require harvest with no artificial rearing node. Reconcile input source, prepared grades and one state-specific preservation branch if used. | fao-improved-snail-farming;fao-snail-farming-gathering |
| v_balance | every batch | Require nonnegative measured net product, explicit rejects and moisture/brine balance; investigate residual beyond site measurement tolerance instead of imposing a universal yield. | fao-improved-snail-farming |
| v_attribution | periods and shared assets | Reject duplicated cohort inputs or shared enclosure, washing, cold-room or packaging burdens; record drivers, periods and consuming nodes. | fao-improved-snail-farming |
| v_uuid | all exchanges | Do not release a concrete flow exchange from unresolved semantic cards; verify product state, gate, property and unit before final dataset use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | State-, intended-use- and route-qualified foreground product dataset for non-sea snail goods. |
| downstream_use | Candidate secondary_dataset or background_dataset after concrete exchange identities, review and publication. |
| allowed_use | Compare lots with same species/presentation/state/gate, or normalize by measured dry solids with explicit assumptions. |
| excluded_use | Sea snails; goods beyond the listed sale states; generic fresh-to-dried substitution; post-gate retail, cooking or unsupported UUID binding. |
| required_metadata | Species, route legality, intended use and applicable quality criterion, cohort/event, whole/shelled, sold state, net mass, moisture/free brine, gate, site and periods. |
| required_quality_disclosure | Mass balance, grades/rejects, foreground measurement coverage, preservation recipe, shared-asset allocation and unresolved identities. |
| update_trigger | New verified exact snail flow, changed source route, preservation technique, gate, or measured evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-notes` | official_guidance | [United Nations CPC Version 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Category definition and exclusion of sea snails. |
| `fao-improved-snail-farming` | official_guidance | [FAO, Improved Snail Farming](https://www.fao.org/4/aq106e/aq106e00.pdf) | Managed rearing, harvest, handling and product-route decomposition. |
| `fao-snail-farming-gathering` | official_guidance | [FAO, Snail Farming and Gathering](https://www.fao.org/4/v6200t/v6200T0c.htm) | Distinguish managed production from collection of wild snails. |
