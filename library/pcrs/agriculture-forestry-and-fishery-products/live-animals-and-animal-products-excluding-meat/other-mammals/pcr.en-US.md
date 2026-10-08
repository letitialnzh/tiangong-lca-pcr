---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-mammals
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other mammals, live

## 1. Scope and Applicability

This PCR covers living mammals not separately classified as bovines, other ruminants, equines, swine, rabbits or hares. It is a heterogeneous residual category, not a species-free average or a legal authorization for wild-animal trade. Every concrete lot requires taxonomic species, origin, purpose, conservation and legal status, welfare controls and actual handover gate. Captive breeding/rearing and demonstrably lawful live capture are mutually exclusive lot routes. Classification mention of cetaceans, sirenians, primates or other protected groups never authorizes contemporary capture. Without lawful-source evidence the capture route cannot be used. Dead animals, meat, fur, slaughter and post-gate transport/use are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-mammals` |
| classification_refs | CPC 3.0 `02192`, Other mammals |
| covered_products | Species-resolved living residual-class mammals of lawful captive or lawful live-capture origin |
| excluded_products | Specifically classified live mammals; dead animals; meat/fur; undocumented wildlife trade; post-gate use |
| representative_product | One declared species/class of living mammal, not a cross-species mix |
| production_route | Managed breeding/rearing followed by selection, or separately documented lawful live capture; never fictional breeding on capture route |
| market_state | Alive and unprocessed at real producer/capture handover, with count, mass and condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living mammal of a declared residual-category species at its real handover |
| How much | 1 kg measured live mass, plus individual count |
| How well | Alive, species-resolved, lawful origin and condition established |
| How long or cycle | Actual breeding/rearing cohort and service periods, or documented capture campaign |
| reference_flow_link | `handover` for managed route; `captured_live` for capture route; never both for a lot |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Species-qualified live other mammal at actual gate (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Scientific species; count/class; live condition; mass method; route; origin; protected status; permit; jurisdiction; actual gate; period |

No species-free platform Product flow proves the concrete reference. Final exchanges require exact species/route/gate identity verification.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | Incoming and outgoing animals | Mass | kg | Weigh individuals or validate species/class sampling and reconcile with counts. |
| `count_balance` | Each lot and period | Count | head | Opening + births + purchases + captures − transfers − releases − deaths = closing; identify animals once. |
| `period_index` | Cohorts and assets | Time | days or cycle | Link inputs, outputs, replacements and assets to real benefited periods; do not assume lifespan. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented captive opening/purchased stock and prior burden, or lawful pre-capture campaign context |
| starting_condition_role | Managed biological stock or authorized wild-source context; no fictional lifetime farming on capture route |
| product_classification_scope | CPC 3.0 `02192` after exclusion of more specific live-mammal leaves |
| recursive_input_rule | Link purchased same-category animals once to preceding-gate data; internal rearing/selection transfer is not another final product. |
| upstream_dataset_requirement | Match incoming stock, feed, water, energy and materials to species, supplier, geography, unit and gate. |
| disclosure | Species, lawful source and protected status, permit, welfare, lot/cohort/campaign, asset periods, death/release, outputs and actual gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_identity` | Every lot | Species-level residual classification and lawful origin are prerequisites; CPC examples are not permits. | `un-cpc-2025`; `woah-wildlife-trade-2021` |
| `boundary_managed` | Captive route | Include actual stock, husbandry inputs, care, mortality and pre-gate selection; purchased stock carries upstream burden. | `woah-wildlife-trade-2021` |
| `boundary_capture` | Capture route | Include only authorized campaign, equipment, temporary holding, welfare and capture handover; without legal evidence this route is ineligible. | `woah-wildlife-trade-2021` |
| `boundary_gate` | Both | End at real live handover; exclude post-gate delivery, buyer use, slaughter and corpse processing. | `un-cpc-2025` |
| `boundary_shared` | Shared enclosure/equipment | Record consuming nodes and service periods; charge common burden once. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed` | Managed breeding and rearing | conditional | Lawful species-resolved captive operation | Biological production, stock, feed, welfare, mortality, real co-products | per kg live mammals leaving managed rearing |
| `selection` | Live selection and handover | conditional | Captive route only | Independent health/condition screen, weighing and producer gate | per kg accepted producer-gate live mammal |
| `capture` | Lawful live capture and handover | conditional | Documented authorized campaign only | Independent capture, short holding and actual capture gate; no farm production | per kg accepted capture-gate live mammal |

Managed and capture are mutually exclusive per lot. Selection is separate from growth because acceptance, weighing and handover follow production. Capture removes an animal from a documented lawful source, not from fictional managed stock. Death is loss/waste, not live output; release is documented in the animal ledger, not a sale or waste. Index breeding, rearing, replacement and shared-service periods as well as capture events.

### Process: Managed breeding and rearing (`managed`)

#### Inputs

##### Product flows

###### Purchased living stock (`stock`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Species-qualified live stock (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Species-appropriate feed (`feed`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Feed by actual identity (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied husbandry water (`water`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Water by actual use (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Housing energy (`energy`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Energy by actual carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shared enclosure service (`assets`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Shared asset service (UUID unresolved)
- Flow property / unit: Time / h
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: h/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live animals leaving rearing (`reared`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Species-qualified live animals (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Unit output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Real independent co-products (`other_output`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Co-product by actual identity (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pre-gate animal mortality (`death`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Dead animal material by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Live selection and handover (`selection`)

#### Inputs

##### Product flows

###### Live animals entering selection (`selected_in`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Species-qualified live animals (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live animal at producer handover (`handover`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Species-qualified live mammal at producer gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Unit output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Deaths during selection (`selection_death`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Dead animal material by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Lawful live capture and handover (`capture`)

#### Inputs

##### Product flows

###### Capture and temporary holding energy (`capture_energy`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Energy by actual carrier (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: MJ/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Capture and welfare materials (`capture_materials`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Actual capture consumables (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live animal at lawful capture handover (`captured_live`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Species-qualified live mammal at capture gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Unit output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Capture mortality (`capture_death`)

Record only real exchanges, resolved by species, gate, use and destination.

- Selected flow: Dead animal material by destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual exchange for one process, lot and period; do not double count internal transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animals`
- Range: Broad provisional completeness screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg/kg
  - Basis: per kg live output of this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_outputs` | Managed output set | Enumerate only real independent products and their handovers. Subdivide separable processes; otherwise allocate inseparable burdens by documented handover economic value, disclose prices/period and mass-allocation sensitivity. No hypothetical credit. |  |
| `allocation_capture` | Capture campaign | Attribute actual campaign burdens to lawfully transferred intended outputs; releases are non-sale and mortality follows actual disposal. |  |
| `allocation_periods` | Cohorts and replacements | Attribute inputs and replacement stock to benefited periods with opening/closing reconciliation; internal animal transfer has one burden. |  |
| `allocation_assets` | Shared enclosures/equipment | Allocate by recorded service hours/capacity across consuming nodes and periods; do not double count. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | managed; selection; capture | live stock, handover, mortality | animal ledger | species; ID; count; mass; origin; law/permit; status; gate; date; death; release | weighing and custody/health records | kg; head | each event | full cohort/campaign | site/campaign | unique event sum | scale calibration; permits; vet/transfer records |
| `cp_inputs` | managed; capture | feed, water, energy, material | meter/invoice ledger | identity; carrier; amount; period; node; stock change | invoices, meters and inventory | kg; MJ | each receipt/meter period | full cycle/campaign | site | net use by node/period | invoice; calibration |
| `cp_assets` | managed; selection; capture | shared asset | service log | asset; node; service hours/capacity; period; burden | enclosure/equipment log | h | each service period | full asset window | site/campaign | once by observed use | asset and maintenance records |
| `cp_outputs` | managed | other real intended output | transfer record | identity; quantity; recipient; price; legal basis; date | actual transfer document | kg | each transfer | full cohort | site | by output and period | sales/transfer record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | Accepted live output | Sum measured accepted live kg / 1 kg; retain head count, species and unique gate. | `cp_animals` | reference mass/count |  |
| `calc_balance` | Animal events | Reconcile opening, birth, purchase, capture, transfer, release, death and closing by species/class/period; growth mass is measured, not conserved by assumption. | `cp_animals` | balanced ledger |  |
| `calc_inputs` | Supplies | Net measured supply assigned to node/period / accepted live kg; do not combine captive and capture routes. | `cp_inputs`; `cp_animals` | card intensities |  |
| `calc_shared` | Shared asset | Asset burden × observed node/period share; shares sum to one or unused capacity is disclosed. | `cp_assets` | nonduplicate burden |  |
| `calc_allocation` | Multi-output | After subdivision allocate inseparable burden by documented handover value, with mass sensitivity. | `cp_outputs`; `cp_animals` | output burden |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_law` | Each lot | Species, source, conservation status, permissions and custody chain for exact date/jurisdiction must be established. | taxonomy; permits; custody |
| `dq_gate` | Live output | Alive status, count, measured mass, condition and actual gate must reconcile. | scale; transfer; veterinary records |
| `dq_completeness` | Both routes | Reconcile inputs, outputs, deaths/releases, cohorts and campaign. | ledgers; invoices; discrepancy log |
| `dq_periods` | Shared and multi-period | Link asset/cohort burden once to real service periods. | asset and cohort ledgers |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_classification` | All | Reject species-free, wrong residual classification, undocumented origin or unresolved legal/protected status. | `un-cpc-2025`; `woah-wildlife-trade-2021` |
| `validate_route` | Each lot | Exactly one captive or lawful-capture source; capture cannot claim farm stock, captive route cannot claim wild capture. |  |
| `validate_live` | Final output | Mass, count, live condition and gate reconcile; deaths/releases and post-gate animals cannot inflate output. |  |
| `validate_allocation` | Outputs/periods | Each co-product has real handover; asset/period shares and internal transfers cannot double count. |  |
| `validate_uuid` | Concrete exchanges | Before final exchange, confirm exact flow species, role, gate, property and unit; semantic unresolved cards are not executable UUIDs. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground package for one lawful species/class, route and live gate |
| downstream_use | Compatible secondary_dataset or background_dataset |
| allowed_use | Same species, route, geography, law, class, period and gate after exact identity review |
| excluded_use | Generic mammal mix; unlicensed capture; protected trade without authority; slaughter, meat/fur or post-gate use |
| required_metadata | species; count/mass; route; protected/legal status; permits; site; cohort/campaign; gate; outputs; periods; UUID state |
| required_quality_disclosure | weighing, animal balance, welfare/legal chain, allocation, missing data, shared service and binding gaps |
| update_trigger | species, legal state, route, gate, inventory, allocation or platform identity changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | residual category and exclusions |
| `woah-wildlife-trade-2021` | official_guidance | [WOAH review of wildlife trade](https://www.woah.org/app/uploads/2022/08/a-oie-review-wildlife-trade-march2021.pdf) | legal/welfare/traceability risk questions |
