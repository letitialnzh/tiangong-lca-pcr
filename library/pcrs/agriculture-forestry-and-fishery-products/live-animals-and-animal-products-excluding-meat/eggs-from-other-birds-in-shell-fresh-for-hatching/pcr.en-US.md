---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.eggs-from-other-birds-in-shell-fresh-for-hatching
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fresh in-shell hatching eggs from birds other than hens

## 1. Scope and Applicability

This PCR covers fresh intact shell-on eggs of birds other than hens, selected and handed over for hatching. Include managed breeder production, separate collection, selection by hatching suitability and producer-side protective holding/presentation when actually performed. Record species, strain, count, measured shell-on mass, quality evidence and actual gate. A hatching-purpose label does not prove fertility or hatchability. Exclude hens' eggs, non-hatching eggs as the reference, broken or processed eggs, downstream incubation and hatchlings. A vertically integrated hatchery must separate egg and bird product boundaries.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.eggs-from-other-birds-in-shell-fresh-for-hatching` |
| classification_refs | `cpc:3.0:02321` |
| covered_products | Fresh shell-on non-hen bird eggs selected for hatching at actual producer handover |
| excluded_products | Hen eggs; non-hatching eggs as reference; processed or broken eggs; incubated eggs after the egg gate; hatchlings |
| representative_product | Species- and lot-qualified fresh hatching-egg lot at the producer gate |
| production_route | Managed breeder laying is the parent activity. Species/housing alternatives are separate routes only when they change feed, water, nesting, manure, collection, holding or acceptance inventory/validation; separate measured cohorts may coexist, but cannot be averaged silently. |
| market_state | Fresh, shell-on, hatching-selected, with producer-controlled holding and package disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Intact fresh shell eggs of birds other than hens accepted for hatching at declared producer handover |
| How much | 1 kg measured shell-on egg mass, with egg count and measured lot mean mass retained |
| How well | Disclose species/strain, shell integrity, grade, collection/holding time and conditions, and any actual fertility or viability tests; do not infer hatchability |
| How long or cycle | Declared breeder-flock productive and egg collection/holding periods, including replacement cohort |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh in-shell hatching eggs of birds other than hens |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/strain; flock/cohort; actual producer gate; egg count and kg; shell grade; hatching acceptance/test evidence; collection/holding period and conditions; rejected and downgraded destinations; package reuse |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `egg_count_mass` | final and internal egg lots | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and count | Measure shell-on mass and count by lot; convert count through measured lot mean mass, never universal cross-species weight. |
| `egg_balance_unit` | egg state transfers | Mass | kg shell-on | Reconcile collected, selected, downgraded, rejected, stored and dispatched mass with measured stock change. |
| `service_period` | breeders and shared inputs | Carrier-specific property | kg, L, MJ, kWh | Link each input, asset and output to the flock or egg period before reference normalization. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased breeder birds, feed, water, energy and package materials enter at documented farm receipt; home-produced inputs require separate traced foreground. |
| starting_condition_role | Incoming breeder stock before the measured productive flock period. |
| product_classification_scope | CPC 02321 identifies the accepted fresh shell-on non-hen hatching eggs, not unsorted internal eggs or a separately sold non-hatching grade. |
| recursive_input_rule | Purchased same-category hatching eggs used to establish breeders are upstream inputs at receipt; do not credit them against resulting eggs. |
| upstream_dataset_requirement | Trace breeders, feed, energy, water and packaging upstream; farm-only records are not cradle-to-gate. |
| disclosure | Species/route, flock and egg periods, gate, count/mass, quality tests, collection and holding conditions, losses, co-product handovers and shared-asset attribution. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `producer_gate` | all routes | Include breeder laying, independent collection, grading and producer-side protection up to egg handover; exclude incubation, hatchling production and post-gate distribution. | `fao-goose-production` |
| `species_delta` | alternative breeder routes | Record parent managed production plus evidenced changes in inventory, collection, holding or acceptance; chicken storage or hatchability assumptions are not transferable to other birds. | `fao-goose-production`; `fao-animal-genetic-resources` |
| `grade_state` | selected eggs | Hatching use requires documented lot selection; intended use is not proof of fertility or realized hatchability. | `fao-goose-production` |
| `handoff_once` | egg states | Laid, collected, graded and presented states of one lot reconcile as transfers, not repeated independent products. | `fao-goose-production` |
| `shared_boundary` | house, collection room, grader and reusable trays | Identify consuming nodes and service periods; count each shared burden once with a causal driver. | `fao-animal-genetic-resources` |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder_laying` | Managed non-hen breeder laying | `required` | Every farm route | Produce gross laid shell eggs, distinguish marketed birds/manure and residual waste | flock period and gross kg |
| `egg_collection` | Independent egg collection | `required` | Every route | Capture eggs from nest/house context, record breakage and handoff | gross and collected kg |
| `hatching_grade` | Hatching selection and destination grading | `required` | Every route | Split accepted, safely marketed downgrade and rejected states | collected kg |
| `egg_presentation` | Producer protection and handover | `required` | Direct or held lots | Record package, storage, loss and one final output gate | accepted kg |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

### Process: Managed non-hen breeder laying (`breeder_laying`)

#### Inputs

##### Product flows

###### Received non-hen breeder stock (`breeder_stock`)

Record source, species, count, live mass and productive cohort.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record purchased replacement mass once by cohort. Original collection denominator kind: reference_flow.

- Selected flow: Non-hen breeder birds (UUID unresolved)
- Flow property / unit: Mass / kg liveweight
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_flock`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg liveweight/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder feed and supplements (`breeder_feed`)

Record ingredients and net feed supplied by species and cohort.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Use separate feed-supply, intake and loss ledgers under calc_feed_supply_and_intake. The quantity carrying feed-production burden includes in-boundary refusals, spoilage and uneaten feed; it is not reduced to animal intake. Retain source, species/cohort, phase and original mass/moisture basis. Calculate the final contribution with inventory_reference_normalization and stage_throughput_linkage exactly once. Original collection denominator kind: reference_flow.

- Selected flow: Breeder feed ingredients (UUID unresolved)
- Flow property / unit: Mass / kg as-fed
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg as-fed/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drinking and cleaning water (`flock_water`)

Separate functions from metered or invoiced records.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record actual supply by function. Original collection denominator kind: reference_flow.

- Selected flow: Supplied breeder-house water
- Flow property / unit: Volume / L
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inputs`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: L/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity at the equipment supply point (`house_energy_electricity`)

**Collection scope and applicability for house_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Measure ventilation, lighting and heating carriers separately.
Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs
Raw quantity and calculation requirements: Record each carrier and documented conversion. Original collection denominator kind: reference_flow.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Electricity at the equipment supply point
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `fao-agricultural-energy`

##### Waste flows

No prescribed card in this coordinate; observed exchanges require independent identity review.

##### Elementary flows

No prescribed card in this coordinate; observed exchanges require independent identity review.

#### Outputs

##### Product flows

###### Laid shell eggs before collection (`laid_eggs`)

Gross internal egg state handed to independent collection; not a second sale.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Weigh or calculate from count and measured lot mean mass, with loss reconciliation. Original collection denominator kind: reference_flow.

- Selected flow: Newly laid non-hen shell eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eggs`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently sold spent breeders (`spent_breeders`)

Include only actual marketed birds, not mortalities.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record independent sale mass, gate and cohort. Original collection denominator kind: reference_flow.

- Selected flow: Spent non-hen breeders (UUID unresolved)
- Flow property / unit: Mass / kg liveweight
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_flock`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg liveweight/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently exported manure (`sold_manure`)

Only a buyer-accepted specified product; otherwise waste.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record sold mass and moisture; do not also count as waste. Original collection denominator kind: reference_flow.

- Selected flow: Sold non-hen breeder manure (UUID unresolved)
- Flow property / unit: Mass / kg wet and dry
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg wet/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unmarketed manure and mortalities (`farm_residues`)

Expand into material- and destination-specific exchanges; never merge with sold outputs.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record generation and transfer by destination. Original collection denominator kind: reference_flow.

- Selected flow: Farm residues by material and destination (UUID unresolved)
- Flow property / unit: Mass / kg wet and dry
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg wet/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed card in this coordinate; observed exchanges require independent identity review.

###### Manure biogenic methane to air (`review_breeder_laying_manure_ch4`)

Calculate actual atmospheric release by manure system, climate, residence time and volatile-solids activity. Reconcile captured, destroyed or oxidised methane; produced methane is not automatically emitted methane. Applies only to the operated `breeder_laying` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

###### Direct manure nitrous oxide to air (`review_breeder_laying_direct_n2o`)

Use the actual manure-management nitrogen pathway. Keep storage/treatment distinct from field application and grazing deposition, which require a managed-soil method and an explicitly assigned inventory responsibility. Applies only to the operated `breeder_laying` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

###### Indirect manure nitrogen-derived nitrous oxide to air (`review_breeder_laying_indirect_n2o`)

Calculate attributable indirect N2O from documented manure N volatilisation/deposition and leaching/runoff pathways where applicable. Keep separate from direct N2O and reconcile any nitrogen-fate calculation already included downstream or in the chosen background/impact model. Applies only to the operated `breeder_laying` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

###### Manure ammonia to air (`review_breeder_laying_nh3`)

Use actual species, housing/storage conditions and a justified nitrogen-flow method. Track total N and ammoniacal N by stage; a generic volatilised-N estimate is not automatically NH3 because it may include other nitrogen species. Applies only to the operated `breeder_laying` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

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

### Process: Independent egg collection (`egg_collection`)

#### Inputs

##### Product flows

###### Laid eggs received for collection (`laid_eggs_in`)

Same cohort transferred from laying; no new purchased-egg burden.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Reconcile with laid_eggs by lot. Original collection denominator kind: reference_flow.

- Selected flow: Laid shell eggs internal transfer (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eggs`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed card in this coordinate; observed exchanges require independent identity review.

##### Elementary flows

No prescribed card in this coordinate; observed exchanges require independent identity review.

#### Outputs

##### Product flows

###### Collected unsorted shell eggs (`collected_eggs`)

Separate collection records nest retrieval, breakage and handover to grading.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Weigh by species, route and collection time. Original collection denominator kind: reference_flow.

- Selected flow: Collected unsorted non-hen eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eggs`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Broken or lost eggs at collection (`collection_loss`)

Only actually broken, lost or unsafe eggs not independently marketed.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record count, mass and treatment destination. Original collection denominator kind: reference_flow.

- Selected flow: Broken shell egg waste by destination (UUID unresolved)
- Flow property / unit: Mass / kg shell-on equivalent
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eggs`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed card in this coordinate; observed exchanges require independent identity review.


### Process: Hatching selection and destination grading (`hatching_grade`)

#### Inputs

##### Product flows

###### Unsorted eggs entering grading (`collected_eggs_in`)

Receive once and record shell condition and actual tests.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Reconcile with collected_eggs and stock change. Original collection denominator kind: reference_flow.

- Selected flow: Collected egg internal transfer (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed card in this coordinate; observed exchanges require independent identity review.

##### Elementary flows

No prescribed card in this coordinate; observed exchanges require independent identity review.

#### Outputs

##### Product flows

###### Selected hatching-grade eggs (`selected_eggs`)

Accepted fresh shell eggs pass to protection or direct handover, not another sale.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record accepted count and measured mass by species and grade. Original collection denominator kind: reference_flow.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Selected non-hen hatching eggs internal state (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently marketed non-hatching eggs (`downgraded_eggs`)

Only safe non-hatching lots accepted at their own gate; unsafe eggs remain waste.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record count, mass, buyer and safety status. Original collection denominator kind: reference_flow.

- Selected flow: Fresh non-hatching non-hen eggs at actual gate (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected unsafe or broken eggs (`grading_rejects`)

Separate from a safe marketed downgrade and disclose destination.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record count, mass and rejection reason. Original collection denominator kind: reference_flow.

- Selected flow: Rejected egg and shell waste (UUID unresolved)
- Flow property / unit: Mass / kg wet
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed card in this coordinate; observed exchanges require independent identity review.


### Process: Producer protection and handover (`egg_presentation`)

#### Inputs

##### Product flows

###### Selected eggs entering protection (`selected_eggs_in`)

One incoming selected lot; record storage entry and exit if held.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Reconcile with selected_eggs and measured stock change. Original collection denominator kind: reference_flow.

- Selected flow: Selected hatching eggs internal transfer (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective trays and packaging (`egg_packaging`)

Record new/reused materials and trips; post-gate distribution package is outside.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record new inputs, losses and reuse-cycle share. Original collection denominator kind: reference_flow.

- Selected flow: Protective egg package materials
- Flow property / unit: Mass or count / kg or items by material
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg package/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Producer-controlled holding energy (`hold_energy`)

Only pre-gate protection energy, never downstream incubator heat.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Meter carrier and period before handover. Original collection denominator kind: reference_flow.

- Selected flow: Energy for protected holding
- Flow property / unit: Energy / MJ or kWh by carrier
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed card in this coordinate; observed exchanges require independent identity review.

##### Elementary flows

No prescribed card in this coordinate; observed exchanges require independent identity review.

#### Outputs

##### Product flows

###### Fresh shell-on hatching eggs at matching farm gate (`farm_gate_hatching_eggs`)

Fixed identity only for matching other-bird hatching eggs at farm gate; other gates remain unresolved.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record measured accepted shell-on mass and count at matching gate. Original collection denominator kind: reference_flow.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Eggs from other birds in shell, fresh, for hatching `3ee29323-915c-4635-b8a2-8942a155e806`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Reference amount identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference
  - Basis: measured accepted farm-gate output normalized to itself
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-goose-production`

##### Waste flows

###### Pre-gate cracked eggs and package loss (`handover_loss`)

Expand by actual egg/package material and destination; do not hide in accepted mass.

Denominator and scope requirements：per kg accepted fresh shell-on hatching eggs

Raw quantity and calculation requirements: Record observed breakage, rejection and package loss separately. Original collection denominator kind: reference_flow.

- Selected flow: Pre-gate egg or package waste (UUID unresolved)
- Flow property / unit: Mass / kg by material
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed card in this coordinate; observed exchanges require independent identity review.

### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Fresh in-shell hatching eggs of birds other than hens for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `selected_eggs`, `farm_gate_hatching_eggs` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `selected_eggs`, `farm_gate_hatching_eggs`

Required product-instance qualifiers: species/strain; flock/cohort; actual producer gate; egg count and kg; shell grade; hatching acceptance/test evidence; collection/holding period and conditions; rejected and downgraded destinations; package reuse

- Selected flow: Fresh in-shell hatching eggs of birds other than hens for actual producer-handover linkage
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

###### Fresh in-shell hatching eggs of birds other than hens (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `selected_eggs`, `farm_gate_hatching_eggs`

Required product-instance qualifiers: species/strain; flock/cohort; actual producer gate; egg count and kg; shell grade; hatching acceptance/test evidence; collection/holding period and conditions; rejected and downgraded destinations; package reuse

- Selected flow: Fresh in-shell hatching eggs of birds other than hens
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
| `output_partition` | breeder flock and grading | Enumerate separately handed-over hatching eggs, safely marketed non-hatching eggs, spent breeders and sold manure. Internal states and waste are not co-products. Record each actual gate, mass and period. | `fao-goose-production` |
| `causal_attribution` | joint breeder burden | Attribute separable grading and presentation to the causing output. For inseparable flock burden, document a consistent measured driver and sensitivity to an alternative; no universal mass/economic ratio is imposed. | `fao-animal-genetic-resources` |
| `period_attribution` | flock years and egg lots | Link replacement, laying, collection, assets and losses to actual service/production periods; no assumed universal flock life or double attribution at replacement/exit. | `fao-animal-genetic-resources` |
| `shared_asset_attribution` | house, collection room, grader and trays | List breeder, collection, grading and presentation consumers and service periods; use observed service, throughput or reuse trips to charge each asset only once. | `fao-animal-genetic-resources` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock` | `breeder_laying` | breeder receipts and exits | flock and sales register | species, strain, count, live kg, dates, flock age, mortality, sale | reconcile register to invoices and weighing; Raw aggregation requirements: link stock and sale to service period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | count, kg | each event | full productive flock | farm and cohort | per reference flow | invoices, scale check, mortality log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_inputs` | `breeder_laying` | feed, water, energy | supply ledger and meter | feed receipt/stock, water function, carrier and readings | receipts, inventory and meter reconciliation; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | kg, L, MJ, kWh | monthly and flock period | productive flock | house | per reference flow | invoices, meter and stock count; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_residues` | `breeder_laying` | manure and mortality | removal log | wet/dry kg, moisture, destination, buyer, mortality | weigh transfer and record sale/treatment; Raw aggregation requirements: split product and waste once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, count | each transfer | full flock period | house and destination | per reference flow | transfer docket and buyer acceptance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_eggs` | `egg_collection` | laid, collected and lost eggs | nest/collection log | flock, time, count, lot kg, breakage | calibrated scale and count reconciliation; Raw aggregation requirements: balance gross, collected and loss. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, count | each collection | collection period | farm nest route | per reference flow | scale check and collection log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_grade` | `hatching_grade` | selected, downgraded, rejected | grading/test log | shell condition, test, count, kg, grade, buyer or waste | inspection and calibrated weighing; Raw aggregation requirements: one destination per egg. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, count | each lot | collection-to-grade | grading node | per reference flow | test, buyer and rejection record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_handover` | `egg_presentation` | holding, packaging and final egg lot | storage/dispatch log | hold time/condition, material/reuse, energy, count/kg, loss, gate | meter, material and lot-scale records; Raw aggregation requirements: balance stock, loss and one output. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, count, time, temperature, MJ | each lot | grade-to-gate | producer store/gate | per reference flow | calibration, store log, receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |
| `cp_pathway_emissions` | `breeder_laying` | pathway-specific gases and manure N/C | herd, feed, manure, field and method ledger | species/class; animal-days; intake/DM/digestibility; volatile solids; manure N/TAN; system shares; climate; storage time; fertiliser N; grazing; volatilisation/leaching; methane recovery; factor source/unit; final accepted output ; collected manure wet mass; dry matter; destination| collect primary activity by node and period, document parameter applicability, retain each pathway worksheet and any linked treatment/pasture dataset  Retain raw totals and normalize attributed quantities once to the measured accepted final reference output.| animal-day; kg DM; kg VS; kg N; kg CH4; kg N2O; kg NH3 | each operating period and management change | complete represented cohort and service period | actual operated nodes only | per reference flow | meter/analysis records, nitrogen cascade, method and factor evidence, no-duplication ledger |
| `cp_feed_supply_and_intake` | `breeder_laying` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `breeder_laying` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `count_to_mass` | egg lots | If individual mass is unavailable, sampled shell-on kg divided by sample count gives lot mean mass; multiply by full lot count. Keep species, grade and sample size. | sample kg, sample count, full count | shell-on kg of actual lot | `fao-goose-production` |
| `egg_balance` | collection through handover | Opening stock + laid/collected input = accepted output + independently downgraded + waste + closing stock, with internal transfers counted once. | mass/count by lot and state | mass-balance residual | `fao-goose-production` |
| `reference_normalization` | all cards | Divide attributed foreground amount by measured accepted kg at declared gate; retain independent output handovers. | attributed amount, accepted kg | amount per kg reference | `fao-goose-production` |
| `calc_pathway_emissions` | `breeder_laying` | Use species- and management-compatible methods and retain disaggregated pathway totals. Convert N2O-N to N2O by 44/28 and NH3-N to NH3 by 17/14 exactly once; already molecular masses are not reconverted. Check methane against the documented available-carbon/methane-potential balance and nitrogen losses against each stage's available N. Indirect formation from previously volatilised N is a downstream transformation, not a second source-stage N loss. Attribute and normalize once; do not duplicate linked treatment or fate-model emissions.  Use matched raw-period quantities before allocation for physical screens: CH4 mass × 12/16 must not exceed the carbon available to the represented pathway; source-stage NH3 mass × 14/17 plus direct N2O mass × 28/44 and other source N losses must not exceed that stage's available N, after accounting for stocks and transfers. Bound each indirect N2O-N calculation by its documented volatilised or leached N precursor, not by subtracting that downstream transformation again from the source ledger. These are conservation checks, not emission factors or an empirical per-product range.| `cp_pathway_emissions` | kg named compound per final reference flow | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `breeder_feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `review_breeder_laying_direct_n2o`; `review_breeder_laying_indirect_n2o` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `species_identity` | all lots | Trace species/strain, flock and hatching-use acceptance; do not combine species in an undisclosed reference. | flock and grade records |
| `mass_count_quality` | eggs | Retain count, kg, weighing calibration and lot conversion, with no universal egg-mass factor. | scale checks and lot sheets |
| `time_quality` | flock and hold | Identify production, collection, grading and holding times/conditions and disclose gaps. | dated farm and store logs |
| `output_completeness` | multi-output nodes | Record accepted, downgrade, sold birds/manure and waste destinations, including zero cases. | invoices and rejection logs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | final product | Reject hen, non-hatching, shell-less, post-incubation or hatchling flow as this reference; require species, fresh shell state, hatching use and actual gate. | `fao-goose-production` |
| `validate_balance` | all egg nodes | Reconcile count and mass through laid, collected, selected, downgraded, rejected and handed-over states with stock/loss; reject unexplained duplicate outputs. | `fao-goose-production` |
| `validate_route` | alternatives | Require managed parent, real inventory/measurement/validation delta and separately measured cohort; a route label alone is insufficient. | `fao-animal-genetic-resources` |
| `validate_attribution` | outputs, periods and assets | Require handovers, causal allocation driver, consumers and service periods; reject duplicate shared or multi-period burden. | `fao-animal-genetic-resources` |
| `validate_binding` | exchange projection | Resolve each unresolved/unresolved card to a single verified state, gate, property and destination UUID before exchange publication. | `fao-goose-production` |
| `v_pathway_emission_coverage` | `breeder_laying` | Require a pathway coverage ledger for enteric CH4 where biologically applicable, manure CH4, direct/indirect N2O, NH3 and relevant field emissions. Every pathway needs a measured/calculated value, a named linked process with matching coverage, or supported inapplicability; absent data cannot become zero. Keep wild life before capture outside managed husbandry, assess actual managed holding separately, and retain species-specific evidence. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for fresh non-hen shell-on hatching eggs at declared producer gate. |
| downstream_use | May inform `secondary_dataset` or `background_dataset` process and lifecycle-model projections only after concrete identity review. |
| allowed_use | Species-, lot-, gate- and period-qualified shell-on kg results with hatching-selection evidence. |
| excluded_use | Inferring hatchlings or hatchability from kg; substituting hen/table eggs; counting hatchery incubation or distribution as farm production. |
| required_metadata | CPC reference, species/strain, cohort, count/kg, grade, tests, gate, storage, outputs, allocation, carriers and packages. |
| required_quality_disclosure | Untested fertility, uncertain count-mass bridge, mixed routes, storage gaps, rejects and unresolved UUIDs. |
| update_trigger | New species route, gate/state, acceptance criterion, measured loss, co-product treatment, identity or evidence basis. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-goose-production` | `official_guidance` | [FAO goose production and incubation](https://www.fao.org/4/y4359e/y4359e0a.htm) | Species-specific collection, holding and hatching suitability. |
| `fao-animal-genetic-resources` | `official_guidance` | [FAO animal genetic resources, poultry egg handling](https://www.fao.org/4/X6526E/X6526E32.htm) | Avoiding cross-species chicken assumptions and declaring management periods. |
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | Species and pathway applicability; CH4 and N2O method selection, not universal emission factors |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 nitrogen-flow method; verify actual species, management and geographical applicability before adopting parameters |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Managed-soil direct and indirect nitrogen pathways and boundary reconciliation |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed supply versus intake and waste burden, not animal parameters. Applying this accounting principle to the declared taxon is this PCR's methodological choice; no pig diet or emission factor is transferred. |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
