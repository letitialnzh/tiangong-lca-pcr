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
| reference_flow_link | Final `farm_gate_hatching_eggs` only for a matching farm gate; other actual gates retain an unresolved reference identity; internal egg states are not extra sales |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh in-shell hatching eggs of birds other than hens (UUID unresolved for broad multi-gate reference) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/strain; flock/cohort; actual producer gate; egg count and kg; shell grade; hatching acceptance/test evidence; collection/holding period and conditions; rejected and downgraded destinations; package reuse |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `egg_count_mass` | final and internal egg lots | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and count | Measure shell-on mass and count by lot; convert count through measured lot mean mass, never universal cross-species weight. |
| `egg_balance_unit` | egg state transfers | Mass | kg shell-on | Reconcile collected, selected, downgraded, rejected, stored and dispatched mass with measured stock change. |
| `service_period` | breeders and shared inputs | Carrier-specific property | kg, L, MJ, kWh | Link each input, asset and output to the flock or egg period before reference normalization. |

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

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder_laying` | Managed non-hen breeder laying | `required` | Every farm route | Produce gross laid shell eggs, distinguish marketed birds/manure and residual waste | flock period and gross kg |
| `egg_collection` | Independent egg collection | `required` | Every route | Capture eggs from nest/house context, record breakage and handoff | gross and collected kg |
| `hatching_grade` | Hatching selection and destination grading | `required` | Every route | Split accepted, safely marketed downgrade and rejected states | collected kg |
| `egg_presentation` | Producer protection and handover | `required` | Direct or held lots | Record package, storage, loss and one final output gate | accepted kg |

### Process: Managed non-hen breeder laying (`breeder_laying`)

#### Inputs

##### Product flows

###### Received non-hen breeder stock (`breeder_stock`)

Record source, species, count, live mass and productive cohort.

- Selected flow: Non-hen breeder birds (UUID unresolved)
- Flow property / unit: Mass / kg liveweight
- Amount rule: Record purchased replacement mass once by cohort.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Breeder feed ingredients (UUID unresolved)
- Flow property / unit: Mass / kg as-fed
- Amount rule: Receipts plus opening stock minus closing stock and diversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Supplied breeder-house water
- Flow property / unit: Volume / L
- Amount rule: Record actual supply by function.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Provisional broad QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: L/kg reference
  - Basis: broad initial screen; replace with species- and lot-specific measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder-house energy carriers (`house_energy`)

Measure ventilation, lighting and heating carriers separately.

- Selected flow: Energy carriers and utilities
- Flow property / unit: Energy / MJ or kWh by carrier
- Amount rule: Record each carrier and documented conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
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

###### Laid shell eggs before collection (`laid_eggs`)

Gross internal egg state handed to independent collection; not a second sale.

- Selected flow: Newly laid non-hen shell eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Weigh or calculate from count and measured lot mean mass, with loss reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Spent non-hen breeders (UUID unresolved)
- Flow property / unit: Mass / kg liveweight
- Amount rule: Record independent sale mass, gate and cohort.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Sold non-hen breeder manure (UUID unresolved)
- Flow property / unit: Mass / kg wet and dry
- Amount rule: Record sold mass and moisture; do not also count as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Farm residues by material and destination (UUID unresolved)
- Flow property / unit: Mass / kg wet and dry
- Amount rule: Record generation and transfer by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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


### Process: Independent egg collection (`egg_collection`)

#### Inputs

##### Product flows

###### Laid eggs received for collection (`laid_eggs_in`)

Same cohort transferred from laying; no new purchased-egg burden.

- Selected flow: Laid shell eggs internal transfer (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Reconcile with laid_eggs by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Collected unsorted non-hen eggs (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Weigh by species, route and collection time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Broken shell egg waste by destination (UUID unresolved)
- Flow property / unit: Mass / kg shell-on equivalent
- Amount rule: Record count, mass and treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Collected egg internal transfer (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Reconcile with collected_eggs and stock change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Selected non-hen hatching eggs internal state (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Record accepted count and measured mass by species and grade.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Fresh non-hatching non-hen eggs at actual gate (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Record count, mass, buyer and safety status.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Rejected egg and shell waste (UUID unresolved)
- Flow property / unit: Mass / kg wet
- Amount rule: Record count, mass and rejection reason.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Selected hatching eggs internal transfer (UUID unresolved)
- Flow property / unit: Mass / kg shell-on
- Amount rule: Reconcile with selected_eggs and measured stock change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Protective egg package materials
- Flow property / unit: Mass or count / kg or items by material
- Amount rule: Record new inputs, losses and reuse-cycle share.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Energy for protected holding
- Flow property / unit: Energy / MJ or kWh by carrier
- Amount rule: Meter carrier and period before handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Eggs from other birds in shell, fresh, for hatching `3ee29323-915c-4635-b8a2-8942a155e806`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Record measured accepted shell-on mass and count at matching gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Pre-gate egg or package waste (UUID unresolved)
- Flow property / unit: Mass / kg by material
- Amount rule: Record observed breakage, rejection and package loss separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh shell-on hatching eggs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_partition` | breeder flock and grading | Enumerate separately handed-over hatching eggs, safely marketed non-hatching eggs, spent breeders and sold manure. Internal states and waste are not co-products. Record each actual gate, mass and period. | `fao-goose-production` |
| `causal_attribution` | joint breeder burden | Attribute separable grading and presentation to the causing output. For inseparable flock burden, document a consistent measured driver and sensitivity to an alternative; no universal mass/economic ratio is imposed. | `fao-animal-genetic-resources` |
| `period_attribution` | flock years and egg lots | Link replacement, laying, collection, assets and losses to actual service/production periods; no assumed universal flock life or double attribution at replacement/exit. | `fao-animal-genetic-resources` |
| `shared_asset_attribution` | house, collection room, grader and trays | List breeder, collection, grading and presentation consumers and service periods; use observed service, throughput or reuse trips to charge each asset only once. | `fao-animal-genetic-resources` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock` | `breeder_laying` | breeder receipts and exits | flock and sales register | species, strain, count, live kg, dates, flock age, mortality, sale | reconcile register to invoices and weighing | count, kg | each event | full productive flock | farm and cohort | link stock and sale to service period | invoices, scale check, mortality log |
| `cp_inputs` | `breeder_laying` | feed, water, energy | supply ledger and meter | feed receipt/stock, water function, carrier and readings | receipts, inventory and meter reconciliation | kg, L, MJ, kWh | monthly and flock period | productive flock | house | net use by cohort and function | invoices, meter and stock count |
| `cp_residues` | `breeder_laying` | manure and mortality | removal log | wet/dry kg, moisture, destination, buyer, mortality | weigh transfer and record sale/treatment | kg, count | each transfer | full flock period | house and destination | split product and waste once | transfer docket and buyer acceptance |
| `cp_eggs` | `egg_collection` | laid, collected and lost eggs | nest/collection log | flock, time, count, lot kg, breakage | calibrated scale and count reconciliation | kg, count | each collection | collection period | farm nest route | balance gross, collected and loss | scale check and collection log |
| `cp_grade` | `hatching_grade` | selected, downgraded, rejected | grading/test log | shell condition, test, count, kg, grade, buyer or waste | inspection and calibrated weighing | kg, count | each lot | collection-to-grade | grading node | one destination per egg | test, buyer and rejection record |
| `cp_handover` | `egg_presentation` | holding, packaging and final egg lot | storage/dispatch log | hold time/condition, material/reuse, energy, count/kg, loss, gate | meter, material and lot-scale records | kg, count, time, temperature, MJ | each lot | grade-to-gate | producer store/gate | balance stock, loss and one output | calibration, store log, receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `count_to_mass` | egg lots | If individual mass is unavailable, sampled shell-on kg divided by sample count gives lot mean mass; multiply by full lot count. Keep species, grade and sample size. | sample kg, sample count, full count | shell-on kg of actual lot | `fao-goose-production` |
| `egg_balance` | collection through handover | Opening stock + laid/collected input = accepted output + independently downgraded + waste + closing stock, with internal transfers counted once. | mass/count by lot and state | mass-balance residual | `fao-goose-production` |
| `reference_normalization` | all cards | Divide attributed foreground amount by measured accepted kg at declared gate; retain independent output handovers. | attributed amount, accepted kg | amount per kg reference | `fao-goose-production` |

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
