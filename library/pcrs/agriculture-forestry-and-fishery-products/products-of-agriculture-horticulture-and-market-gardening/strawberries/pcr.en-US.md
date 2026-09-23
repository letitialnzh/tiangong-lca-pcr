---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.strawberries
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Strawberries

## 1. Scope and applicability
This rule covers cultivated strawberries delivered at the farm-gate or first declared hand-off after optional primary conditioning. It covers the crop cycle, harvest, grading, conditioning, inputs, outputs, losses, rejects, and co-products. Retail, consumer use, and end-of-life are excluded unless explicitly declared.

## 2. Product category identity
The product is strawberry fruit (CPC 01354) from open-field, protected, or mixed production. State production system, site/region, crop year, cultivar/group where material, and hand-off.
| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.strawberries |
| classification_refs | CPC 3.0 / 01354 |
| covered_products | Cultivated fresh strawberries |
| excluded_products | Nursery material, processed products, retail and consumer use |
| representative_product | Marketable fresh strawberries at the declared hand-off |

## 3. Reference flow
| Field | Value |
|---|---|
| What | Marketable strawberries at the declared hand-off |
| How much | 1 kg fresh strawberries |
| How well | Grade, maturity, moisture condition, and marketability state |
| How long or cycle | One crop year or production cycle |
| reference_flow_link | One declared marketable strawberry product flow; identity unresolved |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Marketable fresh strawberries at the declared hand-off (UUID unresolved; intentionally blank) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production system; site/region; crop year; cultivar/group; harvested and marketable mass; reject/loss/rework/recovery destinations; irrigation and energy; fertilizer product and nutrient basis; conditioning; hand-off; allocation basis; reporting period and asset attribution |

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement-01` | all product and waste masses | Mass | kg | Use one declared hand-off basis and reconcile harvested, marketable, downgraded, rejected and discarded quantities. |
| `measurement-02` | fertilizer and amendments | Product and nutrient mass | kg product; kg N/P/K | Record actual product mass and declared nutrient basis; nutrient mass does not replace product mass. |
| `measurement-03` | area, time, water and energy | Activity-specific property | declared activity unit | Preserve original units and document conversions, irrigation source and energy carrier. |

## 5. System Boundary
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Managed strawberry site and crop cycle with attributable establishment inputs |
| starting_condition_role | Start of managed strawberry production |
| product_classification_scope | Cultivated fresh strawberry fruit corresponding to CPC 3.0 code 01354 |
| recursive_input_rule | Stop same-category recursion at a declared purchased input and link its upstream dataset |
| upstream_dataset_requirement | Provide suitable background datasets for purchased inputs and services crossing the boundary |
| disclosure | Declare system, site, cycle, hand-off, yields, losses, inputs, destinations, allocation and unresolved identity |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary-01` | foreground system | Start at the managed strawberry site and crop cycle, including attributable establishment inputs. | `source-02` |
| `boundary-02` | foreground system | Include planting material, soil/substrate preparation, fertilizer/amendments, crop protection, irrigation, field/greenhouse energy, attributable infrastructure services, harvest, grading, and primary conditioning to hand-off. | `source-02` |
| `boundary-03` | purchased inputs and waste | Use suitable background datasets for purchased inputs; disclose unresolved identity. Keep residues, losses, rejects, and waste in-boundary until their declared destination. | `source-02` |

## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
|---|---|---|---|---|---|
| `process-01` | Managed cultivation | required | All crop-cycle operations | managed biological production | crop cycle and saleable kg |
| `process-02` | Harvest and capture | required | All harvest operations | harvest capture | harvested and saleable kg |
| `process-03` | Grading and hand-off | required | When grading or hand-off occurs | grading and sorting | delivered kg |
| `process-04` | Primary conditioning | conditional | When washing, cooling or packing occurs before hand-off | primary conditioning | conditioned kg |

### Process: Managed cultivation (`process-01`)
#### Inputs
##### Product flows
###### Planting material (`row-01`)
Record planting material, cultivar or cultivar group, propagation form, quantity and supplier for each site or plot.
- Selected flow: Strawberry planting material (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg product
- Amount rule: supplier, invoice and planting records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`
###### Agricultural nutrient and fertilizer inputs (`process-01_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable strawberries
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product (`row-03`)
Record actual crop-protection products, active ingredient or formulation, application event and destination.
- Selected flow: Crop-protection product (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg product
- Amount rule: application log, supplier record and invoice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`
###### Irrigation water (`row-04`)
Record irrigation water source, volume and the field or production-unit application basis.
- Selected flow: Irrigation water supply (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: meter, delivery, invoice or operation log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`
###### Energy carriers (`row-18`)
Record electricity, fuel and other energy carriers used by the cultivation operation.
- Selected flow: Electricity, fuel or energy carrier (UUID unresolved; intentionally blank)
- Flow property / unit: Energy or mass / kWh, MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, delivery, invoice or operation log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`
#### Outputs
##### Product flows
###### Crop output (`row-05`)
Calculate crop output from harvested-lot records before grading.
- Selected flow: Strawberry crop output (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: crop and harvest mass records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`
##### Waste flows
###### Residues and field losses (`row-06`)
Record crop residues and field losses with quantity, destination and treatment or recovery route.
- Selected flow: Crop residues and field losses (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: field record, loss estimate and mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`

### Process: Harvest and capture (`process-02`)
#### Inputs
##### Product flows
###### Fruit available for harvest (`row-07`)
Calculate fruit available for harvest from crop records before removal and grading.
- Selected flow: Fruit available for harvest (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: crop estimate reconciled to harvest records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp-harvest`
- Sources: `source-01`
#### Outputs
##### Product flows
###### Harvested strawberries (`row-08`)
Use calibrated scale or harvest-log records for fruit sent to grading or hand-off.
- Selected flow: Harvested strawberries (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: weigh ticket or harvest log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-harvest`
- Sources: `source-01`
##### Waste flows
###### Harvest loss (`row-09`)
Record field loss or incidental material with destination.
- Selected flow: Harvest loss (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: loss record and mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-harvest`
- Sources: `source-01`

### Process: Grading and hand-off (`process-03`)
#### Inputs
##### Product flows
###### Fruit entering grading (`row-10`)
Reconcile incoming grading mass to the harvested-lot records.
- Selected flow: Strawberries entering grading (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: receiving record and harvest reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp-grading`
- Sources: `source-01`
#### Outputs
##### Product flows
###### Marketable grades (`row-11`)
Record accepted marketable grades and dispatch weight.
- Selected flow: Fresh marketable strawberries (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: grading and dispatch record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-grading`
- Sources: `source-01`
###### Downgraded or alternate-use fruit (`row-12`)
Record downgraded or alternate-use fruit separately from accepted marketable grades and disclose its destination.
- Selected flow: Downgraded or alternate-use strawberries (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: grading record and destination reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-grading`
- Sources: `source-01`
##### Waste flows
###### Rejected or discarded fruit (`row-13`)
Record rejected fruit, loss and treatment route.
- Selected flow: Strawberry reject or waste (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: reject record and mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-grading`
- Sources: `source-01`

### Process: Primary conditioning (`process-04`)
#### Inputs
##### Product flows
###### Raw fruit entering conditioning (`row-14`)
Record raw fruit received by conditioning and link it to the incoming grading or dispatch lot when conditioning applies.
- Selected flow: Raw strawberries entering conditioning (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: intake record and lot reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-conditioning`
- Sources: `source-01`
###### Conditioning water (`row-15`)
Record water used for washing or other conditioning operations when it crosses the foreground boundary.
- Selected flow: Conditioning water supply (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter, invoice and run log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-conditioning`
- Sources: `source-01`
###### Conditioning packaging materials (`row-19`)
Record packaging or presentation materials consumed by the conditioning run when they cross the foreground boundary.
- Selected flow: Conditioning packaging material (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: invoice, issue record and run log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-conditioning`
- Sources: `source-01`
###### Conditioning energy (`row-20`)
Record electricity, fuel or other energy used by washing, cooling, stabilization or packing equipment.
- Selected flow: Conditioning energy supply (UUID unresolved; intentionally blank)
- Flow property / unit: Energy or mass / kWh, MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, invoice and run log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-conditioning`
- Sources: `source-01`
#### Outputs
##### Product flows
###### Prepared strawberries at hand-off (`row-16`)
Record final prepared strawberries at the declared hand-off.
- Selected flow: Fresh strawberries at hand-off (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: dispatch record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-conditioning`
- Sources: `source-01`
##### Waste flows
###### Conditioning losses and rejects (`row-17`)
Record conditioning losses, rejects and destinations.
- Selected flow: Conditioning loss or reject (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: run mass balance and waste record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg delivered strawberries
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-conditioning`
- Sources: `source-01`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation-01` | plots, systems, runs, grades and conditioning lines | Separate units where records support it; otherwise disclose the aggregation basis. | `source-03` |
| `allocation-02` | shared burdens and co-products | Enumerate intended outputs and use one documented physical or economic basis; residues and waste are not intended products unless explicitly declared. | `source-03` |
| `allocation-03` | crop-year and multi-period assets | Link establishment and multi-period assets to crop year, phase, replacement and termination; unresolved events block finalization. | `source-03` |
| `allocation-04` | downgrade, recovery and disposal | Declare rework, recovery, downgrade and disposal paths; rejected fruit is excluded from accepted output and cannot be double-counted. | `source-03` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp-cultivation` | `process-01` | inputs and outputs | invoices, logs, meters, field book | product, nutrient, amount, water, energy, crop output | reconcile supplier and field records | kg, kg nutrient, m3, kWh | operation/monthly | full crop cycle | each site/plot | sum by site and cycle | invoices, meters and review |
| `cp-harvest` | `process-02` | harvested fruit and loss | weigh tickets and harvest logs | lot, date, mass, block, destination | weigh each lot and reconcile | kg | each lot | harvest season | each block | sum lots | calibrated scale and logs |
| `cp-grading` | `process-03` | incoming, accepted and rejected fruit | grading and dispatch records | incoming, grade, mass, destination | lot mass balance | kg | each lot | grading period | each line/site | reconcile all states | dispatch and destination records |
| `cp-conditioning` | `process-04` | conditioning input, output and waste | run log, meter, invoice | lot, input, utility, output, waste | lot-linked reconciliation | kg, m3, kWh | each run | conditioning period | conditioning unit | allocate by lot mass | meters and run records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation-01` | all normalized rows | Inventory amount / accepted strawberry mass at the declared hand-off. | row amount; accepted mass | amount per kg accepted strawberries | `source-03` |
| `calculation-02` | site or period aggregation | Aggregate by quantity-weighted results and disclose the denominator; do not average intensities unweighted. | site/period amounts; denominators | weighted intensity | `source-03` |
| `calculation-03` | fertilizer and amendments | Product mass × declared nutrient fraction; retain product mass and nutrient mass separately. | product mass; nutrient fraction | product and nutrient amounts | `source-02` |
| `calculation-04` | harvest, grading and conditioning | Reconcile incoming mass to accepted, downgraded, recovered, reworked, rejected and discarded states within documented tolerance. | all mass records | mass-balance result | `source-03` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality-01` | all foreground records | Record temporal, geographical and technological representativeness, completeness, measurement or estimation method, uncertainty and data-quality notes. | field records, logs and review |
| `quality-02` | identity and qualifiers | Record production system, site/region, crop year, cultivar/group, hand-off and unresolved identity status. | dataset metadata and source records |
| `quality-03` | mass and allocation | Use calibrated weighing or documented estimates, reconcile lots, and retain allocation and destination evidence. | weigh records, mass balance and destination records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation-01` | reference flow | Confirm the 1 kg reference basis, mass property and kg unit; unresolved reference identity remains an explicit review gap. | `source-03` |
| `validation-02` | process sequence | Confirm cultivation-to-harvest-to-grading-to-conditioning/hand-off ordering and a destination for every output, loss, reject and waste state. | `source-03` |
| `validation-03` | mass balance | Confirm incoming mass equals accepted, downgraded, recovered, reworked and discarded states within documented tolerance. | `source-03` |
| `validation-04` | products, nutrients and allocation | Confirm product/nutrient bases, units, crop-year attribution, allocation, period and rework treatment without double counting. | `source-02`, `source-03` |
| `validation-05` | dataset completeness | Missing qualifiers, identities, evidence, destinations or allocation decisions make the dataset review-required. | `source-03` |

## 10. Published dataset profile
| Field | Value |
| --- | --- |
| dataset_role | secondary foreground dataset for farm-gate strawberry LCA |
| downstream_use | Foreground process and lifecycle-model construction |
| allowed_use | Declared strawberry system, hand-off, geography and reporting cycle |
| excluded_use | Processed, retail, consumer-use or materially different systems |
| required_metadata | site, system, cultivar/group, cycle, yields, inputs, losses, destinations, allocation and identity status |
| required_quality_disclosure | completeness, representativeness, measurement, estimates, uncertainty and unresolved UUIDs |
| update_trigger | material change in technology, boundary, inputs, allocation or reporting basis |

## 11. Data Sources
| source_id | type | Reference | Use |
|---|---|---|---|
| `source-01` | dataset | Current-product route evidence and foreground records | identity, quantities, boundaries, output states and collection completeness |
| `source-02` | official_guidance | Official agronomic guidance selected during review | contextual practices, not site-specific quantities |
| `source-03` | standard | ISO 14040/14044-aligned LCA principles and program instructions | boundary, allocation, documentation and data quality |
