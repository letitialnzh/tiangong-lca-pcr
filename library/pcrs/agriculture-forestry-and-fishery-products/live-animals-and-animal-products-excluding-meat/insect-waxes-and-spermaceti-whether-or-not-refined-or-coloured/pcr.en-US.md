---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.insect-waxes-and-spermaceti-whether-or-not-refined-or-coloured
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Insect waxes and spermaceti, whether or not refined or coloured

## 1. Scope and Applicability

This source-qualified method covers beeswax, other insect wax and spermaceti sold as wax, raw, refined or coloured. The source routes are mutually exclusive for a concrete lot; a species-free average or synthetic mixture is not representative. A spermaceti route is instantiated only for demonstrably lawful, traceable, pre-existing source material and its actual upstream burden. No contemporary whale capture or legal entitlement is assumed. Vegetable, mineral and synthetic wax, degras, candles, creams, wax foundations and other manufactured articles are excluded.

The insect route collects actual comb/cappings or another documented insect secretion independently from source production. Honey is a co-product only for a real bee source with actual honey output, never for other insects or spermaceti. The lawful-source spermaceti route starts from documented existing material and actual recovery; it does not reuse hive processes. First melting/separation and cleaning precede optional further refining or colouring. Grade and protect wax to actual production or first-refining handover; downstream formulations and distribution are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.insect-waxes-and-spermaceti-whether-or-not-refined-or-coloured |
| classification_refs | CPC 3.0 02960, animal-wax component of HS 1521.90 |
| covered_products | Source-qualified insect wax and lawful-source spermaceti as wax, raw, refined or coloured. |
| excluded_products | Vegetable/mineral/synthetic wax, degras, formulations and manufactured articles. |
| representative_product | One identified source and declared sold wax state at its actual handover. |
| production_route | Insect collection or lawful existing spermaceti-material recovery; first conditioning, optional treatment, grading, presentation. |
| market_state | Net wax with source, raw/refined/coloured state, purity/grade, colourant, moisture/impurities and gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Identified insect wax or lawful-source spermaceti in its declared sold state, not an aggregate of sources. |
| How much | 1 kg net sold wax excluding package and separately removable foreign material. |
| How well | Declare species/source, lawful provenance where relevant, treatment, colour, purity/grade, moisture/impurities and gate. |
| How long or cycle | Attribute source, collection, conditioning, treatment and shared service to actual lots and periods once. |
| reference_flow_link | `sold_wax` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Source-, state- and gate-qualified insect wax or spermaceti |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | insect species or lawful spermaceti source; route; raw/refined/coloured state; colourant; purity/grade; moisture/impurities; net/tare; gate; period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | sale lot | Mass | kg | Determine net wax from calibrated gross and package tare; exclude separable foreign matter and disclose retained impurities. |
| m_state | each process state | Mass | kg | Measure before/after separation and optional treatment; account for added colourant and removed material without generic yield. |
| m_balance | each source-qualified lot | Mass | kg | Reconcile source material, additions, wax grades, residues and stock change. |
| m_period | source and shared services | Time | period | Assign source, collection and shared asset events to actual periods without duplicate annualization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified insect production source or lawful pre-existing spermaceti-bearing material at actual collection/recovery interface. |
| starting_condition_role | Compatible upstream dataset carries colony/insect production or legal spermaceti-source burden to this interface; foreground collection does not recount upstream production. |
| product_classification_scope | Animal wax of CPC 02960, not vegetable wax or a manufactured wax article. |
| recursive_input_rule | Purchased same-category wax keeps its upstream burden and enters only the applicable later node, never a fictitious new harvest. |
| upstream_dataset_requirement | Route-, source-, real-output- and period-qualified burden; legal chain for spermaceti; actual honey output only for bee operations. |
| disclosure | Wax source, lawful acquisition, source handoff, real co-products, collection and processing route, state, quality, gate, periods and shared assets. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | source route | Instantiate one route per lot. Spermaceti requires lawful traceable existing input and compatible burden, never hypothetical new capture. Honey applies only to actual bee production. | un-cpc-3-notes;fao-beeswax |
| b_collect | collection | Record comb/cappings/other insect secretion collection or lawful spermaceti-material recovery distinctly from source production and later melting. | fao-beeswax;fao-beekeeping |
| b_condition | first separation | Include actual melting, separation and cleaning to first prepared wax with measured service and residues; no default recipe. | fao-beeswax;fao-beekeeping |
| b_treat | optional treatment | Include performed refining or colouring with before/after mass, input and residual; raw lots bypass. | un-cpc-3-notes;fao-beeswax |
| b_gate | grade and handover | Sort accepted, saleable downgrade and rejects; protect wax to actual production or first-refining handover; exclude formulation and freight. | un-cpc-3-notes |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| collect | Source-qualified wax-material collection | required | newly sourced wax-bearing material | Independent collection/recovery and first handoff. | kg collected material |
| condition | First wax separation and conditioning | required | collected raw material | First melting, separation and cleaning to prepared wax. | kg first-prepared wax |
| treat | Optional refining or colouring | conditional | refined or coloured sold state | Actual material treatment with distinct before/after state. | kg treated wax |
| grade | Wax grade and destination sorting | required | prepared or treated wax | Separate accepted, saleable downgrade and waste reject. | kg saleable graded wax |
| handover | Protective presentation and handover | required | saleable wax | Pack once and hand off at declared gate. | kg net sold wax |

The source ledger records only real independent outputs: honey only when bee honey is harvested; other insects and spermaceti have no presumed honey or capture co-products. The upstream source stops at wax-bearing-material handoff; foreground collection begins there. Melting tanks, filters, energy, storage and packages are allocated by actual consuming node and period once. A raw lot bypasses optional treatment. Each saleable grade has one destination; waste is not a product.
### Process: Source-qualified wax-material collection (`collect`)

#### Inputs

##### Product flows

###### Insect-origin wax-bearing material (`insect_source`)

Actual comb, cappings or other documented insect secretion; never spermaceti.

- Selected flow: Insect-source wax-bearing material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual insect-origin wax-bearing material and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg collected material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collect`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg collected material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Lawfully acquired, traceable existing spermaceti-bearing material (`sperm_source`)

Use only lawful traceable pre-existing material with a marketable Product role and upstream burden, never a hypothetical new capture. Legally Waste material uses the separate card, not both.

- Selected flow: Lawful-source spermaceti-bearing material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual lawfully acquired spermaceti-bearing material and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg collected material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collect`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg collected material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Lawfully recoverable spermaceti-bearing Waste (`sperm_waste`)

Use only when documented existing material is legally Waste and recovery is permitted; no Product input is also booked for the same material.

- Selected flow: Lawful-source recoverable spermaceti-bearing Waste (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh lawful Waste input; retain legal status, upstream burden and terminal alternative.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg collected material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collect`
- Range: Conditional Waste-input ledger QA, not a recovery yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg collected material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Collected wax-bearing material (`collected`)

Hand off source-qualified collected material to first separation once.

- Selected flow: Source-qualified collected wax-bearing material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual collected wax-bearing material and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg collected material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collect`
- Range: Measured normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg collected material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Collection rejects (`collect_reject`)

Non-saleable incidental debris follows an actual waste destination; no invented honey or whale output.

- Selected flow: Non-saleable source-specific collection residue (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual collection rejects and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg collected material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg collected material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: First wax separation and conditioning (`condition`)

#### Inputs

##### Product flows

###### Collected material for first separation (`condition_in`)

Link to source collection; no repeat colony or stock burden.

- Selected flow: Source-qualified collected wax-bearing material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual collected material for first separation and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg first-prepared wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg first-prepared wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning energy (`energy`)

Meter actual carrier used in melting or separation; no default heat recipe.

- Selected flow: Actual energy carrier for first wax separation (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Measure actual conditioning energy and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg first-prepared wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: MJ/kg
  - Basis: per kg first-prepared wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditional wash or cleaning water (`wash_water`)

Record water supplied as a Product input when actual on-site washing or aqueous cleaning occurs; dry separation has no water input. Identify the source and account for wastewater or evaporation by its actual destination and receiving medium.

- Selected flow: Actual water supplied for first wax cleaning (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Meter water crossing the conditioning boundary by source and batch; do not infer a default washing rate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg first-prepared wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Conditional water-input ledger QA, not a wash recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg first-prepared wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-prepared wax (`prepared`)

Weigh wax after first separation and cleaning, before optional refining or colouring.

- Selected flow: Source-qualified first-prepared wax (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual first-prepared wax and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg first-prepared wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Measured normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg first-prepared wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Separation residue (`separation_reject`)

Record filter solids and other non-saleable residue by treatment destination.

- Selected flow: Non-saleable first-separation residue (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual separation residue and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg first-prepared wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg first-prepared wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Optional refining or colouring (`treat`)

#### Inputs

##### Product flows

###### Wax entering optional treatment (`treat_in`)

Only refined or coloured lots enter; raw lots bypass this node.

- Selected flow: Source-qualified first-prepared wax (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual wax entering optional treatment and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg treated wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual refining aid or colourant (`additive`)

Measure actual material and retained colourant; no addition for untreated lots.

- Selected flow: Material-specific refining aid or wax colourant (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual refining aid or colourant and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg treated wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined or coloured wax (`treated`)

Hand off measured treated wax with purity and colour state.

- Selected flow: Source-qualified refined or coloured wax (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual refined or coloured wax and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treat`
- Range: Measured normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg treated wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Treatment residue (`treat_reject`)

Spent aid and nonmarketable residue follow actual waste destination.

- Selected flow: Non-saleable refining or colouring residue (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual treatment residue and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg treated wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Wax grade and destination sorting (`grade`)

#### Inputs

##### Product flows

###### Wax entering grade (`grade_in`)

Receive one physical lot from raw prepared or treated wax, never both.

- Selected flow: Source- and state-qualified wax before grade (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual wax entering grade and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable graded wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg saleable graded wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable accepted or downgraded grade (`saleable`)

Record each accepted and independently marketed downgraded grade at one destination.

- Selected flow: Source-, state- and grade-qualified saleable wax (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual saleable accepted or downgraded grade and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable graded wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Range: Measured normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg saleable graded wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Rejected wax (`grade_reject`)

Non-saleable rejected wax follows actual waste handling, not a second product.

- Selected flow: Non-saleable rejected wax (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual rejected wax and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable graded wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg saleable graded wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective presentation and handover (`handover`)

#### Inputs

##### Product flows

###### Saleable wax before packing (`handover_in`)

Receive one source-, state- and grade-qualified lot from sorting.

- Selected flow: Source-, state- and grade-qualified saleable wax (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual saleable wax before packing and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net sold wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg net sold wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective packaging (`package`)

Count actual consumed material or measured reusable package service, not later freight.

- Selected flow: Actual protective wax package or reusable service (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure actual protective packaging and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net sold wax
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional nonnegative ledger QA, not a yield or recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/kg
  - Basis: per kg net sold wax
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net wax at actual gate (`sold_wax`)

One reference role instantiated by real source, sold state and gate; no broad fixed UUID is assumed.

- Selected flow: Source-, state- and gate-qualified insect wax or spermaceti
- Flow property / unit: Mass / kg
- Amount rule: Measure actual net wax at actual gate and link lot, source, state and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference wax
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Measured normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per 1 kg net reference wax
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_source | actual source output set | Enumerate wax and each real independently marketed output at its own handoff. Honey is a co-product only for actual bee honey. Prefer supported causal physical attribution; if unavailable, disclose period-specific economic allocation and sensitivity. Never assign wax automatic zero or whole-source burden. | fao-beeswax;fao-beekeeping |
| a_sperm | lawful spermaceti source | Require legal chain, compatible upstream burden, real other outputs and justified treatment of pre-existing material and terminal alternative. No new capture or fictional co-product. | un-cpc-3-notes |
| a_state | process and grades | Attribute actual wax states and disjoint saleable grades once. Colourant addition or purification does not make another original-wax output; waste is not marketed wax. | fao-beeswax |
| a_period | source phases and shared services | Index colony/source, collection, melting, filtration, storage and packaging periods; allocate shared tanks/filters/energy and package services by observed throughput/time across actual consumers once. Record replacement/termination. | fao-beeswax |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_collect | collect | source and collected material | source ledger | source/species, legal chain, route, material mass, real outputs, event, period | source ticket and calibrated scale | kg;period | each lot | source and collection periods | supplier and collection site | exclusive route; once per lot | tickets, calibration, legal chain |
| cp_condition | condition | material, energy, conditional wash water and prepared wax | separation ledger | lot, mass in/out, method, carrier, energy, water source/input, wastewater or evaporation destination, purity, moisture | scale, meter and assay | kg;MJ | each lot | conditioning period | facility | before/after and water balance by source | scale, meter, assay |
| cp_treat | treat | optional refining or colouring | treatment ledger | lot, input/output mass, added material, colour, purity, rejects | batch sheet, scale and assay | kg | each treated lot | treatment period | facility | once; raw bypass | sheet and assay |
| cp_grade | grade | accepted, downgrade and reject | grade ledger | source, state, grade, mass, destination | grade ticket and scale | kg | each lot | grade period | facility | disjoint grades | grade and reject tickets |
| cp_handover | handover | wax, package and gate | dispatch ledger | source, state, colourant, purity, moisture, gross, tare, net, package reuse, gate | dispatch ticket and scale | kg | each sale lot | handover period | facility | one net sale per lot | ticket and calibration |
| cp_residue | collect;condition;treat;grade | waste | treatment ledger | lot, type, mass, destination, period | scale and transfer record | kg | each event | relevant period | origin site | once per material/destination | transfer record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | sold lot | Net sold wax = gross mass - package tare - separately removable foreign matter; disclose retained moisture and impurity. | cp_handover | kg net sold wax |  |
| c_balance | source to handover | Source material plus actual additions = saleable wax, residues, measured removals and stock change within observed uncertainty. No universal wax yield. | cp_collect;cp_condition;cp_treat;cp_grade;cp_handover;cp_residue | kg balance residual | fao-beeswax |
| c_period | source and shared service | Attribute source phase and each shared tank, filter, energy, storage or package use once to consuming lots/periods. | cp_collect;cp_condition;cp_treat;cp_handover | burden/kg wax | fao-beeswax |
| c_norm | final exchange | Divide attributable exchange by positive net mass of the same source/state/gate lot. | cp_handover | unit/kg wax |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | each lot | Prove source/species, legal status of spermaceti, state, grade, colourant, purity and gate. | source/legal, batch, dispatch records |
| q_mass | each lot | Calibrate net/tare and before/after mass; assay impurity/moisture. | scale, assay, balance |
| q_allocation | source and shared service | Record real output set, periods, driver and nonduplicated asset service. | source-output and service-period ledgers |
| q_uuid | final exchange | Confirm exact source/state/role/gate and property/unit support before concrete exchange. | verified identity evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference lot | Reject vegetable/mineral/synthetic wax, degras, articles and source-free averages; require source and sold raw/refined/coloured state. | un-cpc-3-notes |
| v_route | source | Require mutually exclusive insect or lawful existing spermaceti source and upstream burden; no fictitious whale capture or non-bee honey. | fao-beeswax;fao-beekeeping |
| v_balance | lot | Reconcile collected material, additions, prepared/treated wax, grades, rejects and net mass; investigate residual. | fao-beeswax |
| v_allocation | source and shared services | Reject automatic zero/full wax burden, duplicate honey/wax or shared-asset period. | fao-beeswax |
| v_identity | concrete exchange | Verify flow type, direction, source, state, gate, Mass property and unit group; beeswax-only flow cannot identify the broad reference. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Source-, route-, grade-, state- and gate-qualified animal-wax foreground dataset. |
| downstream_use | Candidate secondary_dataset or background_dataset only after concrete identities, review and publication. |
| allowed_use | Same-source/state wax comparison or measured state conversion. |
| excluded_use | Cross-source proxy, fictitious capture, unsupported honey, downstream articles or universal yield. |
| required_metadata | Source/species, legal chain, route, state, colourant, purity, moisture, net mass, gate, periods and real outputs. |
| required_quality_disclosure | Co-product/period attribution, balance, rejects, shared-service driver and unresolved UUIDs. |
| update_trigger | Exact platform flow verification, changed legal/source route, measured method evidence or classification. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-notes` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | wax scope and sold states |
| `fao-beeswax` | official_guidance | [FAO beeswax production/refining](https://www.fao.org/4/i0842e/i0842e12.pdf) | bee route and separation |
| `fao-beekeeping` | official_guidance | [FAO beekeeping wax products](https://www.fao.org/4/w0076e/w0076e12.htm) | comb/cappings and honey context |
