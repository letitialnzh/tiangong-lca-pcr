---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.silk-worm-cocoons-suitable-for-reeling
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---
# Reelable silk-worm cocoons

## 1. Scope and Applicability

This PCR covers measured silk-worm cocoon lots demonstrated suitable for reeling at actual cocoon-producer handover. Fresh unprocessed and producer-stifled/dried reelable lots are distinct product states, never interchangeable kilograms without measured moisture normalization. Declare species/strain, grade, defect fraction, moisture, route and gate. Pierced or otherwise unreelable cocoons, live larvae, spun/raw silk, and post-handover reeling are excluded. Stifling performed only by the buyer after transfer is outside this foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.silk-worm-cocoons-suitable-for-reeling |
| classification_refs | CPC 3.0 02944 — silk-worm cocoons suitable for reeling |
| covered_products | Demonstrably reelable silk-worm cocoons handed over fresh or, when conditioned by the producer, as a separately measured stifled/dried lot. |
| excluded_products | Pierced/unreelable cocoons, live silkworms, silk fibre or yarn, raw silk, downstream cooking and reeling. |
| representative_product | Graded reelable cocoon lot with state-specific as-received mass and measured moisture. |
| production_route | Managed host-leaf feeding and cocoon spinning; independent collection; grade selection; optional producer-side stifling/drying; protected presentation. |
| market_state | Fresh unprocessed or producer-stifled/dried, separately identified; reelability and actual handover gate evidenced. |

The managed-biological parent is silkworm rearing through spinning. Host-leaf source, species, indoor climate and mounting regime are route deltas only when foreground evidence shows changed inventory, calculation or acceptance requirements. Fresh and producer-dried branches can coexist for different measured lots; the same cocoon cannot be counted at both handovers.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Reelable silk-worm cocoons at actual producer handover, with fresh and producer-dried results stratified. |
| How much | 1 kg measured as-received cocoons in the declared state, excluding container and separated rejects. |
| How well | Reelability evidence, species/strain, grade/defects, shell/pupa state and moisture at handover. |
| How long or cycle | Documented host-leaf supply, silkworm cohort, collection, grading, optional drying and handover periods; shared assets allocated across actual service periods. |
| reference_flow_link | Broad fresh-or-producer-dried reference remains UUID-unresolved because confirmed platform flow is fresh/unprocessed only. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Reelable silk-worm cocoons, state and gate qualified (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/strain; host-leaf source; cohort; fresh or producer-stifled/dried state; measured moisture; reelability/grade test and rejects; actual producer gate; package mass |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| cocoon_mass | accepted and rejected lots | Mass | kg | Weigh each lot at its own handover after tare removal; reconcile accepted, downgraded, waste and sampled quantities without counting one lot twice. |
| moisture_state | fresh and dried lots | mass fraction | kg/kg | Measure moisture on representative state-specific samples; never substitute assumed fresh-to-dry yield. To compare states calculate dry-matter mass from measured moisture and report both original as-received masses. |
| grade_fraction | collected and accepted lots | mass fraction | kg/kg | Record tested reelability/defect classification and accepted, downgraded and rejected masses on the same measured basis; no universal quality threshold is imposed. |
| period_link | cohort and shared assets | time | reporting period | Link host leaves, larvae, tray or dryer services, yield and disposal to producing cohort and period; allocate shared burdens once. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased silkworm seed/larvae and host leaves or identified on-site host crop and breeding source; identify opening cohorts and upstream burdens. |
| starting_condition_role | Purchased inputs cross the foreground boundary with upstream datasets; opening biological stock and reusable assets are separately disclosed. |
| product_classification_scope | Reelable cocoon goods only; rejected spinning-grade cocoons and raw silk are separate products. |
| recursive_input_rule | If purchased cocoons of this category are added, retain upstream burdens and purchased mass once; never claim them as newly reared output. |
| upstream_dataset_requirement | Require supplier-specific or justified secondary datasets for seed/larvae, host leaves, fuel, water, packaging and assets where applicable. |
| disclosure | Report cohort, route, state, moisture, grade, each output destination, gate, period, shared assets and treatment of purchased cocoon input. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_rearing | all cohorts | Include managed feeding, climate control, mounting and spinning through intact spun-cocoon handoff. Host-crop production is upstream unless explicitly inside this foreground system; avoid double-counting on-site leaves. | fao-cocoon-quality;fao-cocoon-characteristics |
| b_nodes | collection and grading | Collect after spinning as an independent removal node, then classify incoming cocoons into accepted reelable, independently downgraded and rejected/waste destinations; not every harvested cocoon is reelable. | fao-cocoon-quality |
| b_drying | optional producer conditioning | Include stifling/drying only when producer performs it before declared sale gate; meter heat, electricity, moisture loss and rejects. Buyer-side conditioning, cooking and reeling are downstream. | fao-cocoon-drying |
| b_gate | all outputs | Include protected packing and pre-handover handling at actual producer gate but exclude downstream distribution after ownership transfer. Fresh and dried branches require different final-output identities. | fao-cocoon-quality;fao-cocoon-drying |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rear | Managed silkworm rearing and spinning | required | Cohort produces cocoons | Managed biological parent; larvae, host leaves, climate and mounting to spun cocoon | kg spun cocoons per cohort |
| collect | Independent cocoon collection | required | Cocoon removal after spinning | Transfer intact collected cocoons to grading; separate incidental debris and loss | kg collected cocoons |
| grade | Reelability grading and destination sorting | required | Every sale lot | Incoming collected cocoons split into accepted, separately downgraded and waste states | kg graded input |
| dry | Producer-side stifling and drying | conditional | Performed before sale of a separately identified reelable dried lot | Fresh accepted cocoons to stabilized dried cocoons; water removal and rejects | kg incoming fresh accepted cocoons |
| present | Protected presentation and producer handover | required | Accepted sale lot | Package and hand over fresh or dried reelable lot at one declared gate | kg as-received accepted cocoon lot |

Rearing and collection are separate because spinning ends before physical removal from mountages. Grading records accepted, independently marketed downgraded and waste destinations; a pierced cocoon is not reelable even if sold for spinning. The dry node receives a usable fresh grade and hands a distinct stabilized grade to presentation; dehydration is mass loss, not a co-product. Fresh and dried outputs coexist only for different measured lots. Host-leaf plots, rooms, trays, mountages, sorters and dryers shared across cohorts or nodes require documented service-period attribution.

### Process: Managed silkworm rearing and spinning (`rear`)

#### Inputs

##### Product flows

###### Silkworm seed or larvae (`seed_larvae`)

Purchased eggs or larvae enter one identified cohort; opening stock is not a second purchased exchange.

- Selected flow: Silkworm seed or larvae, stage-specific (UUID unresolved)
- Flow property / unit: Mass or count / kg or item
- Amount rule: Record purchased count, stage, measured lot mass when available and stock changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg spun cocoons from identified cohort
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cohort_inputs`
- Range: Provisional completeness screen, not a default conversion
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: item/kg
  - Basis: per kg spun cocoons; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Host leaves and supplemental feed (`host_leaves`)

Record consumed purchased leaves or leaves harvested from an attributed on-site crop; do not assign zero burden to on-site leaves.

- Selected flow: Species-suitable host leaves and evidenced supplemental feed (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed issue less measured leftovers and stock change by cohort and host source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg spun cocoons from identified cohort
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cohort_inputs`
- Range: Provisional completeness screen, not a feeding default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg
  - Basis: per kg spun cocoons; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing and cleaning water (`rear_water`)

Meter supplied water crossing the foreground boundary for rearing, humidity control and cleaning.

- Selected flow: Supplied process water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Metered or logged water, net of separately measured return.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg spun cocoons from identified cohort
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional completeness screen, not a water benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg spun cocoons; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing energy supply (`rear_energy`)

Expand actual electricity, heat and fuel into concrete exchanges from records; the set is not a single energy commodity.

- Selected flow: Site-specific energy carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy by carrier, cohort, room and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg spun cocoons from identified cohort
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional completeness screen, not an efficiency factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: MJ/kg
  - Basis: per kg spun cocoons; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Tray and mountage service (`tray_service`)

Record allocated manufacture, repair and cleaning of shared rearing trays and spinning mountages.

- Selected flow: Tray and mountage asset service (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Asset burden allocated by actual cohort use and service period; retain purchase and lifetime evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg spun cocoons from identified cohort
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Range: Provisional service completeness screen, not an asset factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg spun cocoons; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Intact spun cocoons transferred to collection (`spun_cocoons`)

An internal transfer, not a final sale or second reference product.

- Selected flow: Intact spun cocoons in mountages (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconstruct transferred cocoons with cohort mass-balance evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg spun cocoons from identified cohort
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_mass`
- Range: Physical output fraction on own transfer basis
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg measured spun cocoon output of this node
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Rearing losses and spent organic material (`rear_residue`)

Expand dead larvae, uneaten leaves and litter by material and treatment; this umbrella is not one physical waste identity.

- Selected flow: Rearing residue by material and destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh each residue stream, excluding harvested cocoons and duplicate compost outputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg spun cocoons from identified cohort
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Range: Provisional waste completeness screen, not a waste factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg
  - Basis: per kg spun cocoons; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows
### Process: Independent cocoon collection (`collect`)

#### Inputs

##### Product flows

###### Spun cocoon transfer (`incoming_spun`)

Receive the same measured internal transfer from rearing, not a newly purchased input.

- Selected flow: Intact spun cocoons in mountages (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Reconcile received cocoon mass to rearing transfer by cohort.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoon mass received by collection
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_mass`
- Range: Physical transfer reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg cocoon mass received by collection
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected unsorted cocoons (`collected_unsorted`)

Physical removal from mountages creates an unsorted lot passed to grading, independently of spinning.

- Selected flow: Collected unsorted cocoons (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected lot before sorting, with collection time and cohort.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoon mass received by collection
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_mass`
- Range: Physical output fraction before sorting
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg cocoon mass received by collection
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Collection debris or crushed cocoons (`collection_loss`)

Separate mounting debris and damaged cocoon loss by material and destination; recoverable spinning-grade material becomes a Product only on independent sale.

- Selected flow: Collection reject by material and destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh material removed during collection by disposal or sale destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoon mass received by collection
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Range: Physical rejected fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg cocoon mass received by collection
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Elementary flows

### Process: Reelability grading and destination sorting (`grade`)

#### Inputs

##### Product flows

###### Unsorted collected cocoon lot (`grade_input`)

Receive the complete unsorted cocoon lot, not a presumed reelable output.

- Selected flow: Collected unsorted cocoons (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh grading-entry lot and reconcile collected mass and sample withdrawals.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoon mass received by grading
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_mass`
- Range: Physical transfer reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg cocoon mass received by grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fresh reelable grade (`accepted_fresh`)

Accepted lot goes to fresh handover or producer drying, never both for the same physical cocoons.

- Selected flow: Graded fresh reelable cocoons before final gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh accepted fresh mass after representative grade test; record moisture and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoon mass received by grading
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_state`
- Range: Physical accepted fraction, not universal yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg cocoon mass received by grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Independently marketed spinning-grade cocoons (`spinning_grade`)

Only a separately accepted and handed-over spinning-grade lot is a co-product; pierced cocoons never remain in reelable reference.

- Selected flow: Pierced or other unreelable cocoons sold for spinning (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh separate marketed lot and retain buyer/destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoon mass received by grading
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_state`
- Range: Physical separately marketed fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg cocoon mass received by grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Unsold rejected cocoons and grading waste (`grade_reject`)

Unsold damaged or contaminated lot is waste by material and treatment, not automatic co-product.

- Selected flow: Rejected cocoons by treatment destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected lot and document treatment; do not duplicate marketed spinning-grade lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cocoon mass received by grading
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_state`
- Range: Physical unsold reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg cocoon mass received by grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Elementary flows

### Process: Producer-side stifling and drying (`dry`)

#### Inputs

##### Product flows

###### Fresh reelable lot selected for producer drying (`dry_input`)

Receive measured accepted fresh lot only if drying precedes producer handover.

- Selected flow: Accepted fresh reelable cocoons before drying (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh fresh inlet, sample moisture and record batch identifier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fresh cocoon mass received by drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Range: Physical inlet reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg fresh cocoon mass received by drying
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Stifling and drying energy supply (`dry_energy`)

Record actual fuel, heat or electricity by carrier; do not infer energy from fresh-to-dry mass difference.

- Selected flow: Actual drying energy carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Meter or allocate carrier-specific energy to batch and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fresh cocoon mass received by drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional completeness screen, not a dryer factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: MJ/kg
  - Basis: per kg fresh cocoon mass received by drying; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized producer-dried reelable cocoon lot (`dried_reelable`)

Distinct conditioned state; fresh/unprocessed platform UUID is inapplicable. Retain measured moisture and reelability evidence.

- Selected flow: Producer-stifled or dried reelable cocoons (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh dried accepted lot after conditioning and sample moisture; do not equate to fresh inlet kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fresh cocoon mass received by drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Range: Physical dried output fraction requiring measured moisture
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg fresh cocoon mass received by drying
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Conditioning rejects (`dry_reject`)

Record no-longer-reelable cocoons separately from evaporated water.

- Selected flow: Conditioning reject cocoons by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh each reject destination; moisture evaporation is not cocoon waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fresh cocoon mass received by drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Range: Physical reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg fresh cocoon mass received by drying
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Elementary flows

### Process: Protected presentation and producer handover (`present`)

#### Inputs

##### Product flows

###### Accepted reelable lot for presentation (`present_input`)

One state enters: fresh from grading or producer-dried from conditioning, never both for one cocoon mass.

- Selected flow: Reelable cocoon lot in declared state (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh incoming state-specific lot and record source node and gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg as-received reelable cocoons handed over
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional balance screen; input can exceed output after pre-gate rejects
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg as-received reelable cocoons handed over
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective packaging (`protective_pack`)

Record actual baskets, bags or crates by material and reuse; expand concrete materials in foreground dataset.

- Selected flow: Cocoon protective packaging by actual material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: New material issued less returned reusable stock, allocated over verified reuse cycles.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg as-received reelable cocoons handed over
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional package screen, not a package default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg as-received reelable cocoons handed over; investigate outliers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh unprocessed farm-gate reelable cocoons (`fresh_farm_output`)

Only actually fresh, unprocessed shell-and-pupa lot at farm gate; not broad reference or dried output.

- Selected flow: Silk-worm cocoons suitable for reeling `2e62f60f-611b-4e07-bc8a-958260a9cba1`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Net fresh accepted mass at producer farm gate, with moisture and grade evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg as-received reelable cocoons handed over
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Physical fresh reference output on matching one-kg basis
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg as-received fresh reelable cocoons handed over at farm gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Producer-dried reelable cocoon output (`dried_gate_output`)

Separately measured after producer-side conditioning; exact dried-state Product UUID remains unresolved.

- Selected flow: Producer-stifled or dried reelable cocoons at actual gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net dried accepted mass at actual gate with moisture and grade evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg as-received reelable cocoons handed over
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Physical dried reference output on matching one-kg basis
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg as-received producer-dried reelable cocoons handed over
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_output | separately marketed outputs | First subdivide cohort, grade and conditioning records by physical lot. If reelable and separately marketed spinning-grade cocoons are joint outputs of an indivisible operation, document and justify physical causal allocation where supported; otherwise disclose economic allocation, price period and uncertainty. Unsold rejects and moisture loss are not co-products. | fao-cocoon-quality;fao-cocoon-drying |
| a_period | cohorts and host-crop phases | Attribute leaf inputs, rearing operations and cocoon outputs to actual cohort and reporting period; carry opening/closing stock and unfinished cohorts across calendar cut-offs. | fao-cocoon-quality |
| a_shared | shared infrastructure | Record host plots, rearing rooms, trays, mountages, graders and dryers with actual consuming nodes, cohorts and service periods; allocate manufacture, repair and utilities by observed use or justified disclosed proxy only once. | fao-cocoon-quality;fao-cocoon-drying |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cohort_inputs` | rear | seed and host feed | purchase and issue logs | cohort; species; larval stage; seed count; host species; leaf mass; stock change; supplier | count and weigh issue | item;kg | each issue | full cohort | each rearer | sum net inputs by cohort | receipt and scale ticket |
| `cp_utilities` | rear;dry | water and energy | meter and fuel log | meter; carrier; start/end reading; batch; room; period; allocation key | meter or fuel receipt | kg;MJ | batch or monthly | full active periods | every site | allocate shared meter once | meter image and invoice |
| `cp_assets` | rear;dry;present | shared service | asset register | asset; acquisition; repair; service dates; consumers; use hours or batches | asset and service log | kg;hour | each service event | service life | each site | allocate once by observed use | purchase and repair record |
| `cp_cocoon_mass` | rear;collect;grade | cocoon transfer | cohort batch ticket | cohort; transfer time; incoming mass; outgoing mass; debris; sampling | calibrated scale and lot labels | kg | each lot | harvest through grading | every lot | reconcile one transfer between nodes | calibration and tickets |
| `cp_residues` | rear;collect | loss and residue | disposal or sales ticket | cohort; material; wet mass; destination; receipt | weigh by material | kg | each removal | full cohort | each site | sum once by fate | weigh and destination receipt |
| `cp_grade_state` | grade | accepted, downgraded, waste | grade test and lot ticket | lot; defect; test; grade; accepted; downgraded; reject mass; destination | representative test and weighing | kg | each lot | collection to sale | all lots | reconcile all output states | sampling and buyer acceptance |
| `cp_drying_batch` | dry | fresh-to-dry state | dryer batch record | lot; inlet/outlet mass and moisture; energy; time; reject mass; outlet grade | weigh and moisture sample | kg;kg/kg;MJ | each batch | inlet to dry handoff | all dried lots | balance dry solids and rejects | scale, sample and dryer log |
| `cp_handover` | present | final state and pack | sale and packaging record | lot; fresh/dried; grade; moisture; gross/tare; package; reuse; gate; buyer; time | scale, pack count and receipt | kg;item | each handover | pre-gate | every sale lot | net cocoon mass by state/gate | calibration and signed receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | each handover | Net as-received cocoon mass = gross minus package tare and segregated rejects; retain state. | gross, tare, rejects, state | kg accepted lot | fao-cocoon-characteristics |
| c_dry | paired fresh/dried batch | Dry solids = state-specific wet mass × (1 - measured moisture fraction); compare states on dry solids and account for sampled and rejected solids; no assumed conversion. | inlet/outlet mass, moisture, rejects | measured dry-solids balance | fao-cocoon-characteristics;fao-cocoon-drying |
| c_grade | sorting | Accepted + separately marketed downgraded + waste + samples reconcile to graded input, allowing documented moisture timing difference. | input and output masses | lot balance and defect fractions | fao-cocoon-quality |
| c_intensity | every node | Divide attributed process quantities by its declared output mass, then normalize final dataset to one kg at one state-specific gate. | attributed inputs, output mass, state | per-kg inventory | fao-cocoon-characteristics |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each lot | Demonstrate species/strain, grade, reelability, fresh/dried condition and actual gate; never infer reelability from CPC label. | sample, grade and buyer acceptance |
| dq_moisture | state comparison | Use representative moisture and original as-received masses; report sample and balance uncertainty. | samples and scale calibration |
| dq_complete | all nodes | Report selected nodes, inputs, accepted lots, downgraded sales, waste, periods and shared burdens; justify actual zero flows. | cohort ledger and node reconciliation |
| dq_source | upstream inputs | Preserve source, quantity and quality of seed, host leaves, energy, packaging and selected upstream datasets. | invoices, host-crop ledger and metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference and final outputs | Reject pierced/unreelable cocoons as reelable or a lot without grade/state/gate evidence; never bind fresh/unprocessed farm-gate UUID to dried, stifled or other-gate lot. | fao-cocoon-quality;fao-cocoon-drying |
| v_mass | fresh and dried lots | Require measured net mass and moisture per state; reconcile collection, grading, drying and final handover with sample and water-loss terms, not assumed dry yield. | fao-cocoon-characteristics;fao-cocoon-drying |
| v_routes | route deltas | Accept host, climate or mounting variant only with changed inventory, calculation, quality or validation evidence relative to managed parent; reject label-only route. | fao-cocoon-quality |
| v_attribution | multi-output and multi-period | Verify separately marketed outputs, waste, unfinished cohorts, shared assets and service periods; one cocoon mass and shared burden may have only one attributed handover. | fao-cocoon-quality |
| v_binding | flow cards | Resolve unresolved inputs to evidenced concrete UUIDs before TIDAS process exchange; leave other UUIDs unresolved until detail-confirmed. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | State-specific foreground cocoon-production data package, not a published PCR release claim. |
| downstream_use | Secondary/background dataset for downstream silk chains; flow, process and lifecyclemodel projection after exchange identity resolution. |
| allowed_use | Compare same reelable state, species/grade and gate; compare fresh/dried only on measured moisture-normalized basis. |
| excluded_use | Proxy for raw silk, spun silk, pierced cocoon feedstock or reeling service; assumed fresh-to-dry conversion. |
| required_metadata | Cohort, species/strain, host source, grade, moisture, stifling operator/timing, reject destinations, gate, period and allocation. |
| required_quality_disclosure | Mass/moisture uncertainty, grade test, sampling, upstream data quality, unresolved identities and shared-asset allocation. |
| update_trigger | New host/strain or drying route, grade acceptance or gate change, exact UUID evidence or measured factors superseding provisional screens. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-cocoon-characteristics` | handbook | [FAO, Silk reeling and testing manual, chapter 2](https://www.fao.org/4/x2099e/x2099e03.htm) | Cocoon composition, weight/moisture states and dry-matter comparison. |
| `fao-cocoon-quality` | handbook | [FAO, Silk reeling and testing manual, chapter 3](https://www.fao.org/4/x2099e/x2099e04.htm) | Rearing/mounting quality, collection, grading and pierced/unreelable distinction. |
| `fao-cocoon-drying` | handbook | [FAO, Silk reeling and testing manual, chapter 4](https://www.fao.org/4/x2099e/x2099e05.htm) | Optional producer stifling/drying, storage and state measurement. |
