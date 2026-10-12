---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-truffles
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild edible truffles

## 1. Scope and Applicability

This PCR covers fresh whole edible hypogeal truffle fruiting bodies gathered from untended terrestrial sources and supplied at a declared primary handover. Intended cultivation, inoculated orchards, irrigation or substrate/host management for truffle production are outside scope even when commercially called wild. Source tenure or access rights alone do not prove untended origin. Species/edible-use acceptance must be evidenced; this PCR does not certify food safety or ready-to-eat use. Frozen, dried, brined, cooked, sliced/prepared or extracted products and ordinary epigeal mushrooms are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-truffles |
| classification_refs | cpc:3.0:03233 (narrower) |
| covered_products | Species-qualified fresh whole wild edible truffles at primary handover |
| excluded_products | Cultivated/inoculated-orchard goods; managed truffle production; epigeal mushrooms; processed or preserved states; soil and packaging in edible mass |
| representative_product | One declared accepted fresh wild truffle species and grade |
| production_route | Actual targeted search/extraction; conditional cleaning/grading; conditional fresh holding/cooling; primary packaging and acceptance |
| market_state | Fresh whole, measured net at the actual primary gate, not retail-ready processing |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted fresh whole wild edible truffle fruiting bodies |
| How much | 1 kg net fresh mass |
| How well | Declare species, wild/untended proof, edible-use acceptance, grade, moisture, foreign-matter exclusion, actual gate and intended downstream use |
| How long or cycle | One declared collection site-season and primary lot through actual handover; report search trips including unsuccessful trips, hold periods and asset service periods |
| reference_flow_link | `fresh_truffles_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh whole wild edible truffles at primary handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; edible-use acceptance; untended source proof; site-season; grade/maturity; moisture; soil/foreign matter exclusion; net/tare method; actual primary gate; conditioning/holding state; intended use |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted net fresh whole fruiting bodies on a calibrated scale using cp_handover; exclude tare, soil, foreign matter and rejected goods. Do not convert to dry matter without separately measured moisture. |
| `native_service_units` | service and energy rows | Actual exchange property | Native unit | Preserve native supplier quantities, including MJ/kWh, service hours, mass-distance or asset shares; document conversions separately. Service-hour screens do not justify replacing tonne-kilometres or multiplying dissimilar units. |
| `foreign_mass` | truffle and incidental matter rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Maintain paired gross/net/soil/tare records and wet-state ledger; water or soil gained or removed cannot be silently counted as edible truffle yield. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untended fruiting bodies in their natural source for self-gathering, or documented already gathered purchased fresh feed |
| starting_condition_role | Natural source to collector interface, or upstream technosphere handover; declared per source portion |
| product_classification_scope | Fresh-primary truffle subset of CPC 03233; not all states or cultivation |
| recursive_input_rule | Purchased already gathered same-category feed is a product input linked to non-overlapping upstream dataset; never regenerate its search/removal burden or truncate to zero |
| upstream_dataset_requirement | Require matching wild origin, species/state/gate and documented prior removal/preparation/transport; report missing evidence rather than infer an orchard proxy |
| disclosure | List all source sites/collectors, periods, actual node activations/bypasses, purchased fractions and inclusive suppliers; final acceptance always applies |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `source_ownership` | collection | Targeted search/extraction owns harvesting and natural removal together; do not invent managed biological production or add removal again at cleaning. Soil disturbance is documented separately from actually exported foreign matter. | `fao-truffle-harvesting` |
| `conditional_route` | all nodes | Use actual lot events to activate cleaning/grading or fresh holding/cooling. Record the input/output state and handover when bypassed. Unknown intervention is not a bypass. Pack only actual materials and reuse; downstream distribution and consumer processing remain outside the primary gate. | `fao-fresh-fungi-handling` |
| `owned_ledgers` | shared services | Declare batch/trip/season mode, each run/changeover, failed trips, source-site contributions, shared vehicles/tools/animal assistance/cold-room consumers and service periods. Record replacement and termination events. Inclusive purchased services own embedded feed, energy, care and emissions; direct ledgers cover only nonincluded responsibilities. | `fao-truffle-harvesting` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `collection` | Targeted search, extraction and source handover | `conditional` | Actual self-gathering of untended truffle fruiting bodies; bypass for already gathered purchased feed | Own search/extraction and natural removal once, before primary preparation | per 1 kg reference flow |
| `conditioning` | Primary cleaning and grade separation | `conditional` | Actual soil removal, cleaning or grade separation before fresh handover | Raw collected to prepared fresh grade, with destination ownership | per 1 kg reference flow |
| `holding` | Fresh holding and actual cooling | `conditional` | Actual holding/cooling before primary handover, without freezing or drying | Retain the fresh state and record actual residence conditions | per 1 kg reference flow |
| `handover` | Primary packaging and net acceptance | `required` | Every accepted reference lot; packaging only when actually used | Net accepted fresh whole fruiting bodies at actual primary gate | per 1 kg reference flow |

All cards use actual recorded amounts. Every nonreference Range is a deliberately broad provisional reasoned screening estimate, not a default, a legal limit, a measured yield or an enforcing ceiling. Values outside a screen prompt review but are not rejected automatically. Zero requires evidence of actual absence; missing/unknown data remain a gap. Service screens are only hours for a service-time exchange; other service units need their own declared evidence, never a guessed conversion.

### Process: Targeted search, extraction and source handover (`collection`)

#### Inputs

##### Product flows

###### Actual materials and consumables for collection (`collection_materials`)

One conditional collection-material ledger records actual supplied water, tool consumables and containers used in targeted search/extraction, plus attributable animal feed/care materials only when animal assistance occurred. Identify reuse and inclusive provider coverage; never add embedded feed/materials twice.

- Selected flow: Actual materials and consumables for collection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual energy carriers for collection (`collection_energy`)

One energy umbrella for actual fuels, electricity or supplied heat; keep original carrier/provider/state, unit and conversion evidence. Purchased service energy must not be added a second time. Unknown carrier use cannot be set to zero.

- Selected flow: Actual energy carriers for collection
- Flow property / unit: Energy / MJ
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual services and allocated shared assets for collection (`collection_services`)

One collection-service umbrella records actual access/search/extraction, attributable approach and collected-load transfer, tools/vehicles and reusable collection assets. Actual trained-animal assistance includes attributable training, care and travel only when used, with observed service periods, replacement/termination and feed/provider-inclusion linkage. Record service-native units; h is only a service-time screen, not a tonne-kilometre conversion.

- Selected flow: Actual services and allocated shared assets for collection
- Flow property / unit: Service time / h
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Untended fresh truffle fruiting bodies removed from nature (`collection_natural_truffles`)

Mass of actual targeted edible fruiting bodies at removal, excluding soil and mycelium left in place. Natural-source removal is accounted once with search/extraction; legal land ownership does not decide this environmental/technosphere interface. Purchased already gathered feed has upstream removal and must not be charged again. No automatic fungal growth carbon credit.

- Selected flow: Untended fresh truffle fruiting bodies removed from nature
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual incidental soil removed with the truffles (`collection_incidental_soil`)

Only measured incidental mineral/organic foreign matter physically crossing from the source accompanies the collected load. Record its composition and moisture; excavated soil left within the source is disturbance evidence, not an invented exported flow.

- Selected flow: Actual incidental soil removed with the truffles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Fresh wild truffles as collected at source handover (`collected_truffles`)

Species-qualified fresh collected load handed to conditioning, holding or primary acceptance; separately weigh truffle fruiting bodies and attached foreign matter so gross load is never mistaken for edible reference mass. Targeted extraction is distinct from adjacent cleaning and from intentional cultivation.

- Selected flow: Fresh wild truffles as collected at source handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual independently intended other truffle goods at collection exit (`collection_other_goods`)

Only actual intended nonreference truffle grades or species sharing the declared trip leave with their state, use, recipient and measured amount. Record the joint-search burden decision; unrelated shared-trip products have their own non-overlapping system and service share. Do not invent other goods, classify disposed incidental matter as saleable output, or count collected_truffles again as an independent sale.

- Selected flow: Actual independently intended other truffle goods at collection exit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual rejected truffles, incidental matter and service waste from collection (`collection_waste`)

Actual rejected/damaged fruiting bodies, incidental matter sent to treatment and spent collection/animal-service materials leave to named external recipients. State identity, wet mass and event. Soil actually returned to nature belongs to collection_soil_return, not this waste exit; intended other truffle goods and retained stock are separate.

- Selected flow: Actual rejected truffles, incidental matter and service waste from collection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual named direct emissions from collection (`collection_emissions`)

Conditional direct-emission umbrella: require actual substance or particle size, receiving compartment, activity and measurement or factor method. Report combustion, service leaks or identified product moisture/respiration only when attributable and established; an unexplained mass deficit is not a pollutant or automatically water vapour. Do not duplicate emissions embedded in inclusive supplier services.

- Selected flow: Actual named direct emissions from collection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual collected soil returned to the source environment (`collection_soil_return`)

Record only a documented physical return of previously measured incidental soil, with source and destination. It is not automatic harmlessness, waste-treatment credit, land-restoration credit or a generic emission substance. Do not also count the same soil in collection_waste.

- Selected flow: Actual collected soil returned to the source environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary cleaning and grade separation (`conditioning`)

#### Inputs

##### Product flows

###### Actual materials and consumables for conditioning (`conditioning_materials`)

One conditional conditioning-material ledger records actual supplied cleaning water, cleaning agents and grading/handling consumables. Record composition, wet state, dry cleaning versus actual washing and provider inclusions; no universal water-washing or chemical requirement.

- Selected flow: Actual materials and consumables for conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual energy carriers for conditioning (`conditioning_energy`)

One energy umbrella for actual fuels, electricity or supplied heat; keep original carrier/provider/state, unit and conversion evidence. Purchased service energy must not be added a second time. Unknown carrier use cannot be set to zero.

- Selected flow: Actual energy carriers for conditioning
- Flow property / unit: Energy / MJ
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual services and allocated shared assets for conditioning (`conditioning_services`)

One conditioning-service umbrella records actual cleaning/grading, relevant lot transfer and allocated brushes, sorting space, scales or reusable assets. Preserve native service units and provider inclusions; internal cleaning returns incur only incremental work and retain original lot burdens. h is only a service-time exchange screen.

- Selected flow: Actual services and allocated shared assets for conditioning
- Flow property / unit: Service time / h
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Raw collected fresh wild truffle feed (`conditioning_feed`)

Receive measured source-handover or purchased already gathered fresh loads. Supplier origin, soil/tare separation and upstream coverage are required; batch returns to recleaning retain their original burden and are identified separately.

- Selected flow: Raw collected fresh wild truffle feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh cleaned and graded wild truffles (`conditioned_truffles`)

Whole accepted fresh grade transferred to holding or primary handover; actual cleaning may be dry or use water and is not universal. Record the grade acceptance basis, species, moisture and receiving lot. Unaccepted material cannot be assumed accepted by a grade label.

- Selected flow: Fresh cleaned and graded wild truffles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-fresh-fungi-handling`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual intended other-grade truffle goods at conditioning exit (`conditioning_other_goods`)

Declare every actual independent intended grade, buyer/use and handover, including lower fresh grades sold elsewhere or feed to a disclosed downstream processed product. A grade continuing internally to the same final reference is not sold a second time. Damaged/spoiled goods without an intended use belong to waste.

- Selected flow: Actual intended other-grade truffle goods at conditioning exit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual rejected truffles, incidental matter and service waste from conditioning (`conditioning_waste`)

Record actual cleaning effluent, removed soil sent for treatment, rejected/spoiled truffles and cleaning/grading consumables at external exits. Declare liquid composition/wet state and recipient. Intended lower grades are other goods, soil returned to nature is a separate physical return, and recleaning is an internal loop.

- Selected flow: Actual rejected truffles, incidental matter and service waste from conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual named direct emissions from conditioning (`conditioning_emissions`)

Conditional direct-emission umbrella: require actual substance or particle size, receiving compartment, activity and measurement or factor method. Report combustion, service leaks or identified product moisture/respiration only when attributable and established; an unexplained mass deficit is not a pollutant or automatically water vapour. Do not duplicate emissions embedded in inclusive supplier services.

- Selected flow: Actual named direct emissions from conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual removed soil returned to a declared environment (`conditioning_soil_return`)

Weigh identified incoming foreign matter removed in cleaning and actually returned to the environment; retain receiving location and medium. Track collection_soil_return separately by event so each soil portion has only one exit. Slurry sent to treatment is conditioning_waste, not an environmental return.

- Selected flow: Actual removed soil returned to a declared environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Fresh holding and actual cooling (`holding`)

#### Inputs

##### Product flows

###### Actual materials and consumables for holding (`holding_materials`)

One fresh-holding-material ledger records actual hygiene supplies, cooling media and storage consumables while retaining whole fresh fruiting bodies. Identify supplied state, reusable containers and provider inclusions; do not introduce drying, freezing or chemical-preservation materials.

- Selected flow: Actual materials and consumables for holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual energy carriers for holding (`holding_energy`)

One energy umbrella for actual fuels, electricity or supplied heat; keep original carrier/provider/state, unit and conversion evidence. Purchased service energy must not be added a second time. Unknown carrier use cannot be set to zero.

- Selected flow: Actual energy carriers for holding
- Flow property / unit: Energy / MJ
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual services and allocated shared assets for holding (`holding_services`)

One fresh-holding-service umbrella records actual ambient/cold-room occupancy, cooling/hygiene operations and allocated storage assets. Retain residence, actual conditions and shared-room consumers/service periods; no duplicate inclusive cooling energy/materials. h is only a service-time screen; capacity-time services retain real native units.

- Selected flow: Actual services and allocated shared assets for holding
- Flow property / unit: Service time / h
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fresh wild truffles received for holding (`holding_feed`)

Actual measured fresh lot from collection or conditioning, or purchased equivalent; link sender/recipient, net state, grade and period. Bypass is permitted only when no holding/cooling occurred.

- Selected flow: Fresh wild truffles received for holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh wild truffles after actual holding (`held_truffles`)

Usable fresh whole grade exits to primary acceptance, with residence time and actual cooling/ambient conditions. No generic shelf-life, temperature, weight-loss rate, freezing, chemical preservation or drying is imposed. Opening/closing stocks and spoilage are separate.

- Selected flow: Fresh wild truffles after actual holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-fresh-fungi-handling`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual intended other-grade truffle goods at holding exit (`holding_other_goods`)

Use actual quality/destination records for intended other goods that leave holding independently; identify buyer or downstream processor and preserve preceding burdens. Not all lost freshness creates a saleable output.

- Selected flow: Actual intended other-grade truffle goods at holding exit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual rejected truffles, incidental matter and service waste from holding (`holding_waste`)

Actual spoiled/rejected fruiting bodies and discarded hygiene/cooling/storage materials leave to documented recipients. Distinguish retained stocks, independently intended other-grade goods and linked return to conditioning. Do not infer waste quantity from unmeasured moisture or respiration by subtraction.

- Selected flow: Actual rejected truffles, incidental matter and service waste from holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual named direct emissions from holding (`holding_emissions`)

Conditional direct-emission umbrella: require actual substance or particle size, receiving compartment, activity and measurement or factor method. Report combustion, service leaks or identified product moisture/respiration only when attributable and established; an unexplained mass deficit is not a pollutant or automatically water vapour. Do not duplicate emissions embedded in inclusive supplier services.

- Selected flow: Actual named direct emissions from holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary packaging and net acceptance (`handover`)

#### Inputs

##### Product flows

###### Actual materials and consumables for handover (`handover_materials`)

One primary-handover-material ledger records actual protective containers, wrapping, labels and acceptance hygiene supplies. Separate package tare from edible net mass; identify one-way versus reusable packaging and actual reuse cycles. Exclude supplier-embedded packaging.

- Selected flow: Actual materials and consumables for handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual energy carriers for handover (`handover_energy`)

One energy umbrella for actual fuels, electricity or supplied heat; keep original carrier/provider/state, unit and conversion evidence. Purchased service energy must not be added a second time. Unknown carrier use cannot be set to zero.

- Selected flow: Actual energy carriers for handover
- Flow property / unit: Energy / MJ
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual services and allocated shared assets for handover (`handover_services`)

One primary-handover-service umbrella records actual packaging, net weighing/acceptance, bounded gate transfer and reusable packing/weighing assets. Record package reuse and actual consumers/service periods. Distribution after the primary gate is excluded. Preserve native units and provider scope; h is only a service-time screen.

- Selected flow: Actual services and allocated shared assets for handover
- Flow property / unit: Service time / h
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fresh wild truffle lot presented for primary acceptance (`handover_feed`)

Measured incoming fresh whole lot from the actual previous node or documented purchased feed, with species, source and previous burden linkage. Record packaging and foreign matter separately; do not force feed quantity to the final 1 kg quantity.

- Selected flow: Fresh wild truffle lot presented for primary acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh whole wild edible truffles at primary handover (`fresh_truffles_handover`)

Net accepted species-qualified fresh whole hypogeal truffle fruiting bodies delivered at the actual primary gatherer/preparer gate. Exclude attached soil, external packaging, tools and unaccepted fruiting bodies; final acceptance is required even if cleaning, holding or packaging was bypassed.

- Selected flow: Fresh whole wild edible truffles at primary handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-fresh-fungi-handling`

- Range: Reference normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Actual independent other truffle goods at primary handover (`handover_other_goods`)

Independently intended nonreference accepted grade or downstream-use feed leaves the primary gate with its own buyer/use and burden share. Internal grade transfers represented by earlier cards are not additional final goods.

- Selected flow: Actual independent other truffle goods at primary handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual rejected truffles, incidental matter and service waste from handover (`handover_waste`)

Actual acceptance rejects, damaged packaging and hygiene wastes exit the primary boundary to named recipients. Reusable packages remain stock/service assets until actual retirement. Intended other goods and actual return to conditioning have distinct routes and retain preceding burdens.

- Selected flow: Actual rejected truffles, incidental matter and service waste from handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual named direct emissions from handover (`handover_emissions`)

Conditional direct-emission umbrella: require actual substance or particle size, receiving compartment, activity and measurement or factor method. Report combustion, service leaks or identified product moisture/respiration only when attributable and established; an unexplained mass deficit is not a pollutant or automatically water vapour. Do not duplicate emissions embedded in inclusive supplier services.

- Selected flow: Actual named direct emissions from handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_attribution` | all intended outputs | Enumerate reference and every independently intended grade/species/downstream-use output with actual handover. First subdivide separately measured trip/node services; next use a demonstrated causal physical driver (e.g. search time, load-distance, cooling occupancy) for joint burdens; only when no physical driver is defensible use disclosed revenue shares from the same site-season. Record quantities, prices/period and uncertainty. No automatic substitution credit. |  |
| `trip_period_asset` | shared services | Attribute unsuccessful trips to the declared site-season effort serving actual intended products; do not divide by zero-output trips or drop them. Link asset/feed/training/care burdens to actual consuming nodes and service periods, including replacements and termination, and retain unique event keys. Sum each burden once over outputs and periods. |  |
| `reject_loops` | all rejects and returns | Off-spec/spoiled goods exit as actual other intended goods or actual waste; record producing node and recipient. Recleaning returns link handover/holding to conditioning with retained burdens and incremental inputs only. Do not count each passage as newly removed or accepted output. Waste disposal receives its actual attributable burden, never an automatic zero or recovered credit. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_collection` | collection | Every actual card and net reference mass | Paired mass/activity ledger | event_id; node; collector; site; species; wild-origin evidence; trip including failed; lot; grade; gross; tare; soil; accepted_net_mass; opening/closing stocks; returns; recipient/use; actual energy/material/service/provider/native_unit; inclusive supplier scope; animal assistance/feed/training/care/travel; asset/service period/replacement/termination; named emission substance/particle/compartment; measured quantity or activity and factor source | Weigh accepted net fresh whole fruiting bodies on calibrated scales after separate soil/tare determination. Pair dispatch and receipt records for every node; record unsuccessful searches, residence times and actual cooling, service invoices/meters/feed records, unique asset events and named emissions via measurement or documented activity-factor method. Reconcile species/source proof with acceptance. | kg; MJ; h; actual native unit | Every trip/lot/event, including bypass evidence | Declared site-season plus actual storage and asset periods | Every source, preparing site and shared consumer | per 1 kg reference flow | Scale calibration; paired tickets; origin/species acceptance; site/trip register; meter/invoice/service-factor records; stock reconciliation |
| `cp_conditioning` | conditioning | Every actual card and net reference mass | Paired mass/activity ledger | event_id; node; collector; site; species; wild-origin evidence; trip including failed; lot; grade; gross; tare; soil; accepted_net_mass; opening/closing stocks; returns; recipient/use; actual energy/material/service/provider/native_unit; inclusive supplier scope; animal assistance/feed/training/care/travel; asset/service period/replacement/termination; named emission substance/particle/compartment; measured quantity or activity and factor source | Weigh accepted net fresh whole fruiting bodies on calibrated scales after separate soil/tare determination. Pair dispatch and receipt records for every node; record unsuccessful searches, residence times and actual cooling, service invoices/meters/feed records, unique asset events and named emissions via measurement or documented activity-factor method. Reconcile species/source proof with acceptance. | kg; MJ; h; actual native unit | Every trip/lot/event, including bypass evidence | Declared site-season plus actual storage and asset periods | Every source, preparing site and shared consumer | per 1 kg reference flow | Scale calibration; paired tickets; origin/species acceptance; site/trip register; meter/invoice/service-factor records; stock reconciliation |
| `cp_holding` | holding | Every actual card and net reference mass | Paired mass/activity ledger | event_id; node; collector; site; species; wild-origin evidence; trip including failed; lot; grade; gross; tare; soil; accepted_net_mass; opening/closing stocks; returns; recipient/use; actual energy/material/service/provider/native_unit; inclusive supplier scope; animal assistance/feed/training/care/travel; asset/service period/replacement/termination; named emission substance/particle/compartment; measured quantity or activity and factor source | Weigh accepted net fresh whole fruiting bodies on calibrated scales after separate soil/tare determination. Pair dispatch and receipt records for every node; record unsuccessful searches, residence times and actual cooling, service invoices/meters/feed records, unique asset events and named emissions via measurement or documented activity-factor method. Reconcile species/source proof with acceptance. | kg; MJ; h; actual native unit | Every trip/lot/event, including bypass evidence | Declared site-season plus actual storage and asset periods | Every source, preparing site and shared consumer | per 1 kg reference flow | Scale calibration; paired tickets; origin/species acceptance; site/trip register; meter/invoice/service-factor records; stock reconciliation |
| `cp_handover` | handover | Every actual card and net reference mass | Paired mass/activity ledger | event_id; node; collector; site; species; wild-origin evidence; trip including failed; lot; grade; gross; tare; soil; accepted_net_mass; opening/closing stocks; returns; recipient/use; actual energy/material/service/provider/native_unit; inclusive supplier scope; animal assistance/feed/training/care/travel; asset/service period/replacement/termination; named emission substance/particle/compartment; measured quantity or activity and factor source | Weigh accepted net fresh whole fruiting bodies on calibrated scales after separate soil/tare determination. Pair dispatch and receipt records for every node; record unsuccessful searches, residence times and actual cooling, service invoices/meters/feed records, unique asset events and named emissions via measurement or documented activity-factor method. Reconcile species/source proof with acceptance. | kg; MJ; h; actual native unit | Every trip/lot/event, including bypass evidence | Declared site-season plus actual storage and asset periods | Every source, preparing site and shared consumer | per 1 kg reference flow | Scale calibration; paired tickets; origin/species acceptance; site/trip register; meter/invoice/service-factor records; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `ledger_normalization` | all inventory rows | For each actual exchange divide its attributable recorded quantity by accepted net fresh truffle mass in kg. Retain native numerator units and allocation shares; final reference output is 1 kg. Reconcile opening stocks plus inputs with fresh goods, other goods, waste, named measured emissions and closing stocks without inventing missing material. | cp_collection; cp_conditioning; cp_holding; cp_handover | Exchange quantity per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `source_species` | all product lots | Evidence untended origin, accepted edible species/part and actual state/gate; ambiguous cultivation or unsafe/unidentified species blocks concrete dataset finalization. | cp_handover |
| `site_coverage` | all source sites and periods | Enumerate every collector/source/preparer and site-season contribution. Aggregate attributable numerator totals over compatible accepted net reference totals; document representativeness and exclusions. Never average intensities equally across unequal sites or omit failed efforts. | cp_handover |
| `identity_quality` | all concrete exchanges | Verify concrete identity, property/unit/provider/destination separately; energy/service units and unresolved conditional identities require actual supplier evidence. No screen substitutes for observations or unknowns. | cp_handover |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_check` | fresh_truffles_handover | Reference name/link/state/gate and net calibrated mass must agree; the final output is 1 kg per 1 kg reference flow and no internal feed is fixed to this quantity. |  |
| `route_check` | all nodes | Verify actual node activations, bypass records, all incoming/outgoing handoffs, species/site origin and batches/periods. All rejected states require their producing-node route, recipient or retained stock; returns are linked to conditioning and cannot count twice as acceptance. |  |
| `closure_check` | all inventories | Reconcile wet truffle/soil/tare balances and stocks, actual output sets and attributed source-site/period/asset shares. Check inclusive supplier boundaries, failed trips, animal service duties and unique event ownership. Unknown mass deficit/absence is a disclosed gap, not a guessed emission, yield or zero. |  |
| `identity_range_check` | all cards | Every concrete exchange requires verified exact identity and support units; each Range has matching unit/basis/evidence. Provisional screens are non-enforcing, zero requires actual absence proof, and unknown state or unresolved support prevents final concrete use. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared fresh whole wild truffle primary-route process/lifecyclemodel projection |
| excluded_use | Cultivated/inoculated orchard goods, processed states, unknown species/origin/gate, safety certification or automatic natural carbon credits |
| required_metadata | PCR identity/version; species; site-season; wild proof; grade; net/tare/soil/moisture; primary gate; route activation; suppliers; batches and failed trips; periods; output/asset attribution |
| required_quality_disclosure | Observed quantities and gaps; exact identities/support; scope of inclusive services; site/period completeness; ranges remain provisional and non-default |
| update_trigger | Changed source management, species/state/gate, service technology, output markets, measured evidence or identity support |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-wild-truffles` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03233 | Untended product classification context; not quantity defaults |
| `fao-truffle-harvesting` | official_guidance | https://www.fao.org/4/y5489e/y5489e07.htm | Targeted underground extraction, conditional trained assistance, source distinction; not current legal advice or universal practice |
| `fao-fresh-fungi-handling` | official_guidance | https://www.fao.org/4/y5489e/y5489e09.htm | Fresh handling and state distinction; no universal temperature/yield/shelf-life transferred |
