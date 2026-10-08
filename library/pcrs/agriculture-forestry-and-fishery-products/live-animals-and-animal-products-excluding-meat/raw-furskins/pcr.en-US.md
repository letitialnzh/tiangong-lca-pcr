---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-furskins
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw furskins

## 1. Scope and Applicability

Covers undressed, untanned raw furskins suitable for furrier use: qualifying whole pelts and heads, tails, paws or cuttings. Declare actual species, lawful farm or wild source, fur-on configuration, whole/piece composition, grade, fresh or first-stage preserved state, net mass and handover gate. A lamb pelt belongs here only if its actual market identity is furrier-use furskin; an ordinary sheep/lamb raw hide remains outside. Exclude dressed or tanned fur, manufactured fur articles, detached hair, ordinary bovine/equine/sheep/goat raw hides and non-furrier other skins. Hair alone does not establish the category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-furskins |
| classification_refs | CPC 3.0 02955 |
| covered_products | Undressed furrier-suitable whole pelts and qualifying pieces, fresh or first-stage preserved. |
| excluded_products | Dressed or tanned fur, manufactured articles, detached hair, ordinary hides and non-furrier skins. |
| representative_product | Accepted species- and configuration-qualified raw furskin at actual handover. |
| production_route | Actual farm source or lawful wild capture; independent skin removal, first preparation, grading, optional preservation and protective handover. |
| market_state | Raw fur-on, undressed and untanned; actual quality and condition declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted raw furrier-suitable furskin or qualifying pieces at actual handover. |
| How much | 1 kg net as-sold raw skin excluding package and removable free preservative. |
| How well | Species, fur quality, whole/piece composition, grade, legal source, raw state and gate declared. |
| How long or cycle | Link farm cohort or wild capture event, removal, preservation and shared service to actual reporting periods. |
| reference_flow_link | `accepted_furskin` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species/state/gate-qualified raw furskin |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; lawful source; whole/piece; fur quality; grade; fresh/preserved; net mass; gate; period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | each material lot | Mass | kg | Calibrated gross and tare; exclude packaging and free preservative; reconcile each actual material destination. |
| m_piece | piece-count markets | Mass and Number of items | kg and item | Record both mass and count on one homogeneous lot; calculate observed kg/item only for that species, grade, configuration and state. |
| m_state | preserved lots | Mass and moisture fraction | kg and kg/kg | Measure before/after state; do not convert fresh to preserved using a universal factor. |
| m_period | source and shared service | Time | reporting period | Link real cohort or capture season, service, outputs and replacement/termination to nonoverlapping periods. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable farm cohort or lawful wild capture event with species and legal status. |
| starting_condition_role | Compatible upstream farm or wild-capture datasets carry actual source burdens. Foreground source event is an interface ledger when upstream already includes capture or slaughter; do not repeat exchanges. Wild route has no managed farm phase. |
| product_classification_scope | Raw, undressed and untanned furrier-suitable pelts and qualifying parts. |
| recursive_input_rule | Purchased same-category raw furskin retains supplier burden and is not newly captured here. |
| upstream_dataset_requirement | Source-specific farm or lawful capture inventory and actual slaughter/removal service; no automatic zero or whole-animal burden. |
| disclosure | Species, legality, route, actual co-products, configuration, condition, shared service, periods and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | source | Separate farm from lawful wild capture. Include actual co-products only when independently marketed; do not repeat upstream animal or capture operations. | un-cpc-3-notes |
| b_remove | skin removal | Distinct capture/source and removal events; identify raw fur-on output, incidental tissue and losses, and handoff before first cleaning. | fao-hides-skins |
| b_condition | first preparation | Include only actual fleshing, cleaning and trimming; exclude dressing, tanning and manufacturing. | fao-hides-skins;eu-raw-furskin-heading |
| b_grade | grading | Separate accepted whole/pieces, saleable downgrade and waste, each with its own destination. Ordinary sheep hide cannot become furskin by hair alone. | un-cpc-3-notes;eu-raw-furskin-heading |
| b_preserve | treated lots | Fresh lots bypass; actual cold, drying or salt stabilization records before/after state, inputs and rejected material. | fao-hides-skins |
| b_gate | handover | Include protective presentation up to actual collection/curing gate; exclude distribution and downstream fur dressing. | un-cpc-3-notes |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| source | Farm or lawful wild source | required | every lot | Trace actual source events and co-products; no fictional husbandry for wild capture. | per kg node output |
| remove | Independent skin removal | required | every lot | Remove fur-on skin independently of source event and first preparation. | per kg node output |
| condition | First raw preparation | required | actual first preparation; ledger if none | First cleaning/fleshing/trimming without dressing or tanning. | per kg node output |
| grade | Furrier-use grading | required | every lot | Separate whole/piece accepted grades, downgraded sale and rejected waste. | per kg node output |
| preserve | Optional raw preservation | conditional | preserved lots only | Stabilize a usable raw state without dressing/tanning; fresh lots bypass. | per kg node output |
| handover | Protective handover | required | every accepted lot | Present fresh or preserved accepted raw skin at actual gate, excluding distribution. | per kg node output |

Farm periods or wild-capture seasons, removal, cleaning and preservation can span periods. Attribute actual events and shared traps, tools or cold rooms to consuming nodes only once. These six nodes are responsibilities, not invented site activities.

### Process: Farm or lawful wild source (`source`)

#### Inputs

##### Product flows

###### Farm animal for actual slaughter (`farmed_animal`)

Farmed route only; trace upstream cohort and animal-service burden. Wild capture has no animal Product input.

- Selected flow: Species-qualified farmed animal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Farmed route only; trace upstream cohort and animal-service burden. Wild capture has no animal Product input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Farm or lawful wild source output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Farm or lawful wild source output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted skin-bearing source (`source_skinbearing`)

Record only legally transferable, quality-accepted skin-bearing material from actual slaughter or lawful wild capture. A captured body that cannot legally enter this material route is not a Product output and follows its documented reject/treatment route.

- Selected flow: Species-qualified skin-bearing carcass or body part (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record actual slaughter or lawful wild capture event; rejected material is not a Product output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Farm or lawful wild source output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Farm or lawful wild source output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual marketable animal output (`source_coproduct`)

This source-interface card covers only independently marketed earlier farm products, such as actual milk or detached fibre. Meat and other outputs from the same terminal body are recorded after skin removal, never here.

- Selected flow: Actual earlier-period farm product independently sold (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure only earlier-period farm outputs independently sold before the terminal event; exclude all meat and products derived from that terminal body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Farm or lawful wild source output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Farm or lawful wild source output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Independent skin removal (`remove`)

#### Inputs

##### Product flows

###### Skin-bearing material for removal (`remove_input`)

Transfer actual accepted source once; do not repeat upstream capture or slaughter exchanges.

- Selected flow: Species-qualified skin-bearing material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Transfer actual accepted source once; do not repeat upstream capture or slaughter exchanges.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Independent skin removal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_remove`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Independent skin removal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh fur-on skin after removal (`removed_skin`)

Weigh raw skin separately; retain species, whole/piece and source event.

- Selected flow: Fresh undressed fur-on skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh raw skin separately; retain species, whole/piece and source event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Independent skin removal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_remove`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Independent skin removal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual terminal-event saleable products (`terminal_coproduct`)

Only if the same slaughter or lawful wild-capture body yields independently marketed meat or other goods, record those here after skin removal. The source node must not also output them.

- Selected flow: Actual species-qualified saleable terminal product (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh each actual saleable output separately and document its own market handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Independent skin removal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_remove`
- Range: Terminal co-product mass plausibility screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg Independent skin removal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Nonmarketable removal residue (`remove_residue`)

Record nonmarketable tissue or skin loss and actual treatment, not saleable pieces.

- Selected flow: Actual removal residue to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record nonmarketable tissue or skin loss and actual treatment, not saleable pieces.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Independent skin removal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_remove`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Independent skin removal output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First raw preparation (`condition`)

#### Inputs

##### Product flows

###### Fresh skin entering preparation (`condition_input`)

Transfer measured raw skin from removal.

- Selected flow: Fresh undressed fur-on skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured raw skin from removal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg First raw preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg First raw preparation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning water where used (`condition_water`)

Meter actual water; zero when no wet cleaning.

- Selected flow: Process water for raw-skin cleaning
- Flow property / unit: Mass / kg
- Amount rule: Meter actual water; zero when no wet cleaning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg First raw preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg First raw preparation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-prepared raw skin (`prepared_skin`)

Weigh prepared output before grading; retain fur and raw state.

- Selected flow: Cleaned and trimmed undressed fur-on skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh prepared output before grading; retain fur and raw state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg First raw preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg First raw preparation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preparation residue (`condition_residue`)

Record rejected residue and actual destination separately from furrier-use pieces.

- Selected flow: Nonmarketable fleshing and trim (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record rejected residue and actual destination separately from furrier-use pieces.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg First raw preparation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg First raw preparation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Furrier-use grading (`grade`)

#### Inputs

##### Product flows

###### Raw skins entering grading (`grade_input`)

Record species, fur quality and whole/piece composition before sorting.

- Selected flow: Prepared undressed fur-on skins (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record species, fur quality and whole/piece composition before sorting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Furrier-use grading output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Furrier-use grading output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted furrier-use pelts and pieces (`grade_accepted`)

Keep each grade and destination separate; no double count of parent pelt and cuttings.

- Selected flow: Furrier-suitable whole pelts or qualifying pieces (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Keep each grade and destination separate; no double count of parent pelt and cuttings.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Furrier-use grading output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Furrier-use grading output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Saleable nonreference downgrade (`grade_downgrade`)

Use Product only for a real separate market; exclude from accepted reference.

- Selected flow: Actual downgraded saleable raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Use Product only for a real separate market; exclude from accepted reference.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Furrier-use grading output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Furrier-use grading output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected grading material (`grade_reject`)

Track nonmarketable reject and actual treatment, not downgraded sale.

- Selected flow: Actual grading waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Track nonmarketable reject and actual treatment, not downgraded sale.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Furrier-use grading output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Furrier-use grading output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Optional raw preservation (`preserve`)

#### Inputs

##### Product flows

###### Accepted skin before preservation (`preserve_input`)

Only treated lots enter; record mass and state before intervention.

- Selected flow: Accepted fresh furrier-use pelt or pieces (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Only treated lots enter; record mass and state before intervention.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Optional raw preservation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preserve`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Optional raw preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation energy where used (`preserve_energy`)

Meter actual carrier and period; prevent shared-room double counting.

- Selected flow: Actual cold or drying energy supply
- Flow property / unit: Energy / kWh
- Amount rule: Meter actual carrier and period; prevent shared-room double counting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Optional raw preservation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preserve`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/kg
  - Basis: per kg Optional raw preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual raw preservative (`preserve_agent`)

Measure salt or other agent actually consumed; never apply a universal recipe.

- Selected flow: Species- and method-qualified preservative (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure salt or other agent actually consumed; never apply a universal recipe.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Optional raw preservation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preserve`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Optional raw preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized raw fur skin (`preserved_skin`)

Measure net mass after actual intervention and state; no fresh-equivalent assumption.

- Selected flow: Preserved undressed furrier-use pelt or pieces (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure net mass after actual intervention and state; no fresh-equivalent assumption.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Optional raw preservation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preserve`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Optional raw preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation reject or spent material (`preserve_residue`)

Record treatment destination; evaporation is not an invented Waste product.

- Selected flow: Actual spent agent or rejected skin for treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record treatment destination; evaporation is not an invented Waste product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Optional raw preservation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preserve`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Optional raw preservation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective handover (`handover`)

#### Inputs

##### Product flows

###### Accepted raw skin entering presentation (`handover_input`)

Use either fresh graded lot or its preserved counterpart, not both.

- Selected flow: Accepted fresh or preserved furrier-use raw skin (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Use either fresh graded lot or its preserved counterpart, not both.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Protective handover output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Protective handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective package when used (`handover_packaging`)

Identify single-use consumption or reusable turns; no packaging if absent.

- Selected flow: Raw-furskin protective packaging
- Flow property / unit: Mass / kg
- Amount rule: Identify single-use consumption or reusable turns; no packaging if absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Protective handover output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Protective handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted raw furskin at actual gate (`accepted_furskin`)

Measure one kg net as sold, excluding packaging and separable free preservative.

- Selected flow: Species/state/gate-qualified raw furskin
- Flow property / unit: Mass / kg
- Amount rule: Measure one kg net as sold, excluding packaging and separable free preservative.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Protective handover output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Node output or mass-share check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg Protective handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual handover reject (`handover_reject`)

Record actual discarded material; marketed downgrade is a Product at its own gate.

- Selected flow: Rejected package or skin for treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record actual discarded material; marketed downgrade is a Product at its own gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg Protective handover output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Broad lot-completeness screen, not an empirical factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg Protective handover output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_source | source and remove | Enumerate earlier farm products at source, then skin and actual saleable terminal products at removal; each has a distinct handover and is counted once. Subdivide independently measured services; for inseparable source burdens use documented physical causality where defensible, otherwise contemporaneous net economic values of actual products with price sensitivity. Neither zero nor whole-animal burden is automatic. | fao-hides-skins |
| a_period | farm or wild route | Link breeding/growth, capture/slaughter, removal, replacement and termination to actual periods. Wild capture has no invented managed husbandry. Each input and output is attributed once. | un-cpc-3-notes |
| a_shared | shared traps, removal tools, cleaning and cold/drying rooms | Identify all consuming nodes and service periods. Prefer measured use; otherwise documented service hours or throughput, assigned once without upstream/foreground duplication. | fao-hides-skins |
| a_state | fresh/preserved; whole/piece | One lot has one marketed state and configuration at its gate. Do not count a pelt and its cuttings twice; allocate treatment only to treated lots. | eu-raw-furskin-heading |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | source | source and actual co-products | event ledger | species; farm_or_wild; legal_id; cohort_or_capture; mass; products; price; period | supplier/capture and sale records | kg; currency; period | each event | actual cohort or season | actual source | link each event and product once | authorization; sales |
| cp_remove | remove | skin, terminal products and loss | removal ledger | event; input; raw_skin; actual_terminal_products; residue; each_destination | scale, sale and treatment tickets | kg | each lot | period | removal site | reconcile all products and waste once | scale; sale; treatment ticket |
| cp_condition | condition | first-prepared skin and water | preparation log | input; water; output; trim; method | scale and meter | kg | each lot | period | preparation site | actual intervention only | meter; scale |
| cp_grade | grade | accepted/downgrade/reject | grade ledger | species; fur_quality; configuration; accepted; downgrade; reject; item_count; destinations | grading and scale | kg; item | each lot | period | grading site | separate grade destinations | grade; sale records |
| cp_preserve | preserve | treated skin and service | treatment log | before; after; state; moisture; salt; energy; room_time; reject | scale and meter | kg; kWh; h | treated lot | period | curing site | reconcile state and use | meter; treatment log |
| cp_handover | handover | net product and package | handover ledger | lot; state; species; configuration; gate; net_mass; package; count; reuse | ticket and scale | kg; item; turn | each handover | period | actual gate | accepted net mass only | signed ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_ref | reference | Net sold mass = measured gross less package and separable free preservative; item count is not mass. | gross; tare; free preservative | kg as sold | fao-hides-skins |
| c_piece | counted items | Observed lot kg/item = measured homogeneous lot net mass / counted items; never reuse across species, grade, state or configuration. | mass; count; qualifiers | observed kg/item | eu-raw-furskin-heading |
| c_balance | each lot | Reconcile material output, residues and moisture/state differences with measured input; investigate gaps, not default yields. | input; output; state | kg ledger | fao-hides-skins |
| c_shared | shared service | Assign metered use or documented service-hour/throughput share once for each actual consumer and period. | burden; use; period | allocated burden | fao-hides-skins |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every lot | Verify species, legality, furrier-use quality, whole/piece composition and undressed state; sheep hide is not inferred to be furskin. | authority and grade/sale record |
| dq_mass | all material | Calibrated mass and destination; no parent pelt and cutting double count. | scale and balance |
| dq_period | source and shared assets | Actual cohort/season, period and consuming node, including replacement or termination. | event and asset ledgers |
| dq_state | preservation | Actual before/after state; no universal fresh-to-preserved conversion. | treatment and mass records |
| dq_uuid | exchange generation | Resolve a concrete compatible platform identity; blank candidate identity is not final exchange permission. | detail and support-row evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | sold lot | Reject tanned, dressed, manufactured or hair-bearing non-furrier goods; verify lawful source and actual furrier-use whole/piece identity. | un-cpc-3-notes;eu-raw-furskin-heading |
| v_balance | each lot | Reconcile source, removed, prepared, accepted, downgrade, waste, treated and sold mass at their measured states. | fao-hides-skins |
| v_route | farm/wild | No farm animal input on wild route; actual co-products and source burden once; no upstream capture/slaughter duplication. | un-cpc-3-notes |
| v_period | shared service | Source event and each shared trap, removal, cleaning or cold/dry service have one period and one attributed consumer share. | fao-hides-skins |
| v_binding | all cards | conditional product inputs require actual concrete selection; uncovered UUIDs need detail confirmation. Mixed raw/dressed count-based candidates cannot bind a raw Mass reference. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species- and route-qualified foreground raw-furskin data package. |
| downstream_use | `secondary_dataset` or `background_dataset` after method and identity review. |
| allowed_use | Raw furrier-suitable product at measured species, configuration, state and gate. |
| excluded_use | Dressed/tanned fur, ordinary hide, non-furrier skin, unknown species or invented item-to-kg conversion. |
| required_metadata | Legal source; species; route; whole/piece; fur grade; mass/count; state; gate; period; allocation. |
| required_quality_disclosure | Completeness, mass, attribution, shared services, conversion uncertainty and unresolved UUIDs. |
| update_trigger | Material route, furrier criterion, preservation, gate, source-rule or platform-identity change. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-notes | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category and exclusion. |
| eu-raw-furskin-heading | official_guidance | https://faolex.fao.org/docs/pdf/eur212388.pdf | Raw fur and whole/part distinction. |
| fao-hides-skins | official_guidance | https://www.fao.org/4/i0523e/i0523e.pdf | First raw-skin handling and preservation. |
