---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.natural-honey
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Natural honey at producer gate

## 1. Scope and Applicability

Natural bee-produced honey from managed colonies or a documented wild source, transferred at an apiary/farm or producer-controlled extraction-room gate, is included. Extracted, pressed, drained, simply strained and comb presentations are covered. Managed feeding and hive upkeep apply only to stationary or migratory managed colonies; wild harvest is a separate route. Artificial or adulterated honey, sweetener blends, industrial refining and post-gate distribution are excluded. Codex CXS 12-1981 defines natural honey and comb presentation; FAO guidance distinguishes colony management, harvest and first extraction.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.natural-honey |
| classification_refs | CPC 3.0: 02910 Natural honey |
| covered_products | Natural nectar or honeydew honey, extracted, pressed, drained, simply strained or sold in comb, from managed or documented wild harvest. |
| excluded_products | Artificial or adulterated honey, sweetener blends, industrial refinement and retail distribution. |
| representative_product | Saleable natural honey constituent at producer-controlled handover. |
| production_route | Managed-biological-production parent with stationary versus migratory route delta: actual hive transport, feeding, service periods and spatial records. Documented wild capture is mutually exclusive and omits managed-colony inputs. Independent harvest is required; first extraction is conditional; producer grading/handover is explicit. |
| market_state | Raw or simply prepared honey, liquid, crystalline or comb, with origin, moisture, grade and handover declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable natural honey constituent, excluding retained comb wax and packaging. |
| How much | 1 kg honey constituent. For comb presentation, derive honey mass from measured sale gross mass and lot-representative wax/other non-honey fractions. |
| How well | Natural honey with declared nectar/honeydew origin, moisture, authenticity, presentation, grade and producer gate. |
| How long or cycle | A declared harvest season linked to colony, carry-over store and shared-asset service periods. |
| reference_flow_link | `saleable_honey` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Natural honey at producer gate (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | managed stationary/migratory or wild route; colony/source; apiary and floral/honeydew origin; harvest season; moisture; extracted/pressed/drained/comb state; comb gross and wax masses; grade; producer gate |

The raw-honey farm-gate platform flow `fec12529-d2e9-429f-8adb-aaa39b2e88b1` is fixed only on the exactly matching output card. The broad reference UUID remains blank.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `honey_constituent_mass` | reference output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh sale lots. For comb, determine honey, retained wax and other non-honey fractions by representative separation or validated sampling; never equate sale gross mass to honey reference mass. |
| `comb_fraction_balance` | comb lots | Mass | kg | Honey constituent = sold comb gross mass minus retained wax and measured other non-honey mass; retain sample method and uncertainty. |
| `moisture_basis` | honey lots | Mass fraction | kg water/kg honey | Measure moisture by lot and state. Normalize as-sold honey constituent, not dry solids. |
| `carrier_and_freight` | utilities and migration | Energy or mass-distance | MJ, kWh, kg*km | Preserve carrier/mode; convert using recorded factors and exclude post-gate distribution. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed route: admitted colony, hive and incoming feed/materials at apiary. Wild route: identified natural colony/location and access/harvest services, without imputed managed inputs. |
| starting_condition_role | Managed production hands mature comb to independent harvest; wild capture begins at its documented natural source. Harvested comb enters optional extraction or direct comb sale, then producer grading/handover. |
| product_classification_scope | CPC 3.0 02910 natural honey; wax, propolis or queens are distinct products only on independent transfer. |
| recursive_input_rule | Purchased honey keeps its supplier dataset and is not counted as newly produced honey; disclose incoming source and mass. |
| upstream_dataset_requirement | Match feed, hive material, supplied water, energy and actual inbound freight datasets to state, provider and geography. |
| disclosure | Route, origin/colony, season, nectar/honeydew source, harvest/extraction, presentation, moisture, producer gate, comb honey/wax sampling, grades, co-products and shared-asset attribution. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `natural_boundary` | all routes | Include natural honey through producer-controlled handover; exclude sweetener addition, industrial processing and post-gate distribution. | `codex-honey-2022`; `fao-bee-products` |
| `route_delta` | managed and wild | Stationary and migratory managed colonies share a biological parent; migration adds actual hive freight and alters service/forage records. Wild capture is mutually exclusive and has no managed-colony feed, hive or replacement burdens. | `fao-bee-products`; `fao-beekeeping-2021` |
| `capture_handover` | harvest | Distinguish honey/comb in colony from physically harvested comb, incidental material and loss. Record an independent harvest handover. | `fao-bee-products` |
| `first_conditioning` | extracted presentation | Pressing, draining, centrifuging and simple straining are conditional. Record input comb, prepared honey, separated wax and rejects; comb sale bypasses this node. | `fao-bee-products`; `codex-honey-2022` |
| `grade_handover` | producer gate | If grading produces multiple quality/destination states, record accepted, downgraded and rejected handovers separately. | `codex-honey-2022` |
| `period_and_assets` | multi-season service | Link colony buildup, wintering, harvest, replacement, hive/vehicle/extractor service to consumers and periods; book each burden once. | `fao-beekeeping-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed` | Managed colony production | conditional | Managed stationary or migratory lots, never wild capture. | Produce mature comb with feed, water and multi-season asset burdens. | honey and gross comb per colony-season |
| `harvest` | Honey harvest or wild capture | required | One documented managed or wild source per lot. | Independently remove comb and classify collected, incidental and lost states. | gross comb and honey/wax fractions per lot |
| `extraction` | Primary extraction and conditioning | conditional | Only non-comb sale with pressing, draining, centrifuging or simple straining. | Split comb into raw/prepared honey, separated wax and rejects. | kg honey and wax per extraction batch |
| `grading` | Producer grading and handover | required | Handover always; grade sorting when actual destinations differ. | Declare accepted, downgraded and reject states, then reference honey. | 1 kg saleable honey constituent |

### Process: Managed colony production (`managed`)

#### Inputs

##### Product flows

###### Managed colony supplement feed (`feed`)

Feed used for managed colonies only, net of returns; natural nectar is not purchased feed.

- Selected flow: Supplementary bee feed (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_colony`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Managed colony supplied water (`water`)

Meter actual supplied water; no imputed management water for wild harvest.

- Selected flow: Supplied apiary water
- Flow property / unit: Mass / kg
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_colony`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hive and frame replacements (`hive_material`)

Allocate hive and frame replacements over observed service periods.

- Selected flow: Hive replacement materials (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow; record actual exchanges if present.

##### Elementary flows

No prescribed flow; record actual exchanges if present.

#### Outputs

##### Product flows

###### Mature honey comb at colony handover (`mature_comb`)

Transfer mature comb to independent harvest; record honey and wax fractions.

- Selected flow: Mature honey-bearing comb (UUID unresolved)
- Flow property / unit: Mass / kg gross comb
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 6
  - Unit: kg gross comb/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow; record actual exchanges if present.

##### Elementary flows

No prescribed flow; record actual exchanges if present.

### Process: Honey harvest or wild capture (`harvest`)

#### Inputs

##### Product flows

###### Managed comb entering harvest (`managed_comb_input`)

Conditional internal transfer for managed route only; wild capture has a declared natural source instead.

- Selected flow: Mature honey-bearing comb (UUID unresolved)
- Flow property / unit: Mass / kg gross comb
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6
  - Unit: kg gross comb/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual hive migration freight (`migration_freight`)

Only actual managed migratory hive freight; exclude post-gate distribution.

- Selected flow: Road freight service
- Flow property / unit: Mass / kg*km
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_migration`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg*km/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow; record actual exchanges if present.

##### Elementary flows

No prescribed flow; record actual exchanges if present.

#### Outputs

##### Product flows

###### Harvested honey-bearing comb (`harvested_comb`)

Weigh separately harvested comb and sampled honey/wax fractions; hand over for comb sale or extraction.

- Selected flow: Harvested honey-bearing comb (UUID unresolved)
- Flow property / unit: Mass / kg gross comb
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 6
  - Unit: kg gross comb/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest rejects and incidental matter (`harvest_reject`)

Record brood-contaminated or spoiled comb and actual waste destination.

- Selected flow: Rejected comb (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow; record actual exchanges if present.

### Process: Primary extraction and conditioning (`extraction`)

#### Inputs

##### Product flows

###### Comb entering first extraction (`comb_extraction_input`)

Activate pressing, draining or centrifuging only for non-comb sale.

- Selected flow: Harvested honey-bearing comb (UUID unresolved)
- Flow property / unit: Mass / kg gross comb
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 6
  - Unit: kg gross comb/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Extraction energy supply (`extraction_energy`)

Meter electricity or fuel for extraction and primary straining.

- Selected flow: Extraction energy carriers
- Flow property / unit: Mass / MJ
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Extraction-room cleaning water (`cleaning_water`)

Record actual food-contact cleaning water.

- Selected flow: Process cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow; record actual exchanges if present.

##### Elementary flows

No prescribed flow; record actual exchanges if present.

#### Outputs

##### Product flows

###### Raw extracted honey at farm gate (`raw_farm_honey`)

Fixed identity applies only to raw honey transferred at the producing farm gate, not every presentation.

- Selected flow: Raw natural honey at farm gate `fec12529-d2e9-429f-8adb-aaa39b2e88b1`
- Flow property / unit: Mass / kg honey
- Binding: Fixed (`fixed`)
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg honey/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Prepared honey at producer extraction-room hand-off (`room_prepared_honey`)

This alternative applies when the actual gate or state is not the verified raw farm-honey state. Never reuse the raw farm UUID for it.

- Selected flow: Prepared natural honey at producer extraction room (UUID unresolved)
- Flow property / unit: Mass / kg honey
- Amount rule: Weigh prepared output and account for stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg honey/kg honey constituent
  - Basis: broad first-pass screen; replace with measured batches
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separately transferred recovered beeswax (`recovered_wax`)

Only separated and independently transferred wax is a co-product; wax retained in sold comb is excluded.

- Selected flow: Recovered beeswax (UUID unresolved)
- Flow property / unit: Mass / kg wax
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg wax/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Extraction rejects and residue (`extraction_reject`)

Record spoiled honey, dirty wax and removed debris as waste unless independently accepted as a product.

- Selected flow: Honey-extraction reject waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejects and record their destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg honey constituent
  - Basis: broad first-pass screen; replace with measured batches
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow; record actual exchanges if present.

### Process: Producer grading and handover (`grading`)

#### Inputs

##### Product flows

###### Honey or comb entering grading (`grade_input`)

Declare extracted or comb presentation and reconcile input honey and wax.

- Selected flow: Natural honey before grade (UUID unresolved)
- Flow property / unit: Mass / kg honey-equivalent
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg honey-equivalent/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No prescribed flow; record actual exchanges if present.

##### Elementary flows

No prescribed flow; record actual exchanges if present.

#### Outputs

##### Product flows

###### Saleable natural honey at producer gate (`saleable_honey`)

Reference output is honey constituent. Comb gross sale weight includes wax, which is sampled separately and excluded from denominator.

- Selected flow: Saleable natural honey (reference UUID unresolved)
- Flow property / unit: Mass / kg honey
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Reference normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg honey/kg honey constituent
  - Basis: exactly 1 kg honey constituent per 1 kg reference by definition
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `codex-honey-2022`

###### Independently transferred downgraded honey (`downgraded_honey`)

Record grade, mass and independent destination; otherwise classify unsuitable matter as reject.

- Selected flow: Downgraded honey (UUID unresolved)
- Flow property / unit: Mass / kg honey
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg honey/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected honey and comb material (`grading_reject`)

Weigh spoiled or unrecoverable material and record destination.

- Selected flow: Rejected honey or comb waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Collect by lot and reconcile with actual handovers and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable honey constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Provisional replaceable screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg honey constituent
  - Basis: broad first-pass screen per kg honey constituent; replace with records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No prescribed flow; record actual exchanges if present.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_set` | colony, harvest, extraction | List every independently transferred honey, wax, propolis, queen or colony product at its actual handover. Wax retained in sold comb honey is part of the sale presentation, not independently transferred wax. Incidental matter and rejects are not products without evidence. | `fao-bee-products`; `codex-honey-2022` |
| `allocation_precedence` | genuinely joint burdens | Separate directly metered processes first. Allocate inseparable joint burdens to independently transferred outputs by measured economic value at the same gate and period; retain prices, masses and sensitivity. Do not also apply substitution or a second mass allocation. | `fao-bee-products` |
| `period_attribution` | managed colony | Assign overwintering, colony buildup, carry-over stores, replacement and termination to dated service/harvest periods based on observed service and output; no double booking across seasons. | `fao-beekeeping-2021` |
| `shared_asset` | hive, transport, extractor | Identify each consuming node and service period. Attribute shared burdens once by observed hours, trips or throughput. | `fao-beekeeping-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_colony` | `managed` | managed feed, water, comb | hive log | colony id; route; feed issue/return; water; season; mature comb | dated hive logs and invoices | kg | each event | full harvest season | apiary | sum by colony-season | hive logs and stock reconciliation |
| `cp_assets` | `managed` | hive and shared assets | asset register | asset id; mass; service life; user node; hours | invoice and service log | kg, h | purchase and annual | complete service life | all consumers | assign once by use | asset register |
| `cp_migration` | `harvest` | hive freight | trip log | hive load; origin; destination; distance; mode | dispatch/odometer | kg, km | each trip | represented season | migratory apiary | load times distance | trip evidence |
| `cp_harvest` | `harvest` | comb and rejects | lot log | managed or wild source; date; gross comb; sampled honey; wax; loss; destination | calibrated scale and sample | kg | each lot | full season | producer/source | reconcile harvested and lost | ticket and sample log |
| `cp_extraction` | `extraction` | honey, wax, utilities | batch log | comb input; honey; wax; rejects; water; energy; moisture | scales, meters and assay | kg, MJ | each batch | full season | producer room | reconcile material and utility | batch sheet/calibration |
| `cp_grading` | `grading` | reference and grade outputs | sale lot | presentation; sale gross; sampled honey/wax/other fractions; accepted; downgrade; reject; gate; prices | weighed sale plus representative destructive comb sample | kg, fraction | each lot and sample | full season | producer gate | gross less wax/other = honey constituent | sale ticket and sample method |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `comb_honey_conversion` | comb lots | Honey kg = sold comb gross kg minus retained comb wax kg minus measured other non-honey kg. Use lot-representative separation or validated sampling with uncertainty; do not assume gross comb equals honey. | gross mass; honey/wax/other sample fractions | reference honey kg | `codex-honey-2022` |
| `honey_wax_balance` | each lot | Reconcile honey into accepted, downgraded, lost and stock-change masses; separately reconcile wax retained, recovered and discarded. | harvest, extraction, grade records | mass residual | `fao-bee-products` |
| `season_asset_assignment` | shared services | Attribute each asset burden by actual node-period service share; all consumer-period shares sum to one. | asset and production logs | assigned burden | `fao-beekeeping-2021` |
| `normalization` | all exchanges | Divide attributable inventory by saleable honey constituent kg, not comb sale gross kg. | attributed inventory; honey kg | exchange per reference kg | `codex-honey-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_identity` | every lot | Identify stationary, migratory or wild source without imputing management to wild lots. | source/route log |
| `comb_fraction` | comb sale | Record sample size, separation method, honey/wax fractions and uncertainty; unsupported conversion blocks quantified comb dataset. | sample record |
| `lot_balance` | all lots | Explain honey and wax residuals, grade/reject destination and stocks. | reconciled batch sheet |
| `shared_periods` | assets/colony | Show dated service and single attribution of colony, hive, freight and extractor. | asset/season ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `natural_identity` | reference | Reject artificial/adulterated or sweetener-added product; require origin, moisture, presentation and gate. | error |
| `comb_reference_mass` | comb sale | Require sample-derived honey constituent and retained wax; gross comb mass cannot be used silently as reference. | error |
| `wax_no_double_count` | comb and wax | Reject the same wax mass retained in sold comb and independently exported as recovered wax. | error |
| `terminal_output_once` | raw farm honey and saleable honey | If the raw farm-gate output is the saleable reference lot, treat the final handover card as a reporting roll-up, not a second physical product exchange; otherwise do not activate the raw farm card. | error |
| `route_exclusivity` | all lots | One managed stationary, managed migratory or wild route per lot; wild lots cannot bear managed feed/hive/migration. | error |
| `states_and_destinations` | all outputs | Check harvested, conditioned, downgraded, rejected and saleable states plus actual gate and destination. | error |
| `period_once` | multi-season/shared | Reject duplicated colony or shared-asset burdens across periods and nodes. | error |
| `concrete_binding` | all exchanges | Expand conditional flow identities from actual records and confirm every final exchange UUID; unresolved identities remain blank. | error |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground natural-honey production dataset at producer gate. |
| downstream_use | Secondary/background use after route- and state-matched review. |
| allowed_use | Natural honey with known producer gate, presentation, constituent mass and allocation. |
| excluded_use | Artificial honey, blends, industrial refinement, unmeasured comb conversion and post-gate retail. |
| required_metadata | Route, colony/source, season, floral/honeydew origin, moisture, extraction, presentation, gate, comb gross/honey/wax masses, grade and co-product transfer. |
| required_quality_disclosure | Sampling uncertainty, mass residuals, estimated utilities, UUID gaps and shared-burden allocation. |
| update_trigger | New route, extraction technology, origin mix, presentation, co-product handover or identity evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-honey-2022` | standard | Codex CXS 12-1981 Standard for Honey, amended 2022; https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en | Natural-honey identity, presentation, quality and mass basis. |
| `fao-bee-products` | official_guidance | FAO, Value-added products from beekeeping, Ch. 2; https://www.fao.org/4/w0076e/w0076e05.htm | Colony, harvest, extraction, honey/wax outputs. |
| `fao-beekeeping-2021` | official_guidance | FAO, Good beekeeping practices for sustainable apiculture (2021); https://www.fao.org/family-farming/detail/en/c/1442505/ | Managed production, seasonal records and service attribution. |
