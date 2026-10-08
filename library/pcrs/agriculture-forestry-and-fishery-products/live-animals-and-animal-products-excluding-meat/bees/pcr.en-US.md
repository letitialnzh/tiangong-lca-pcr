---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---
# Living bees

## 1. Scope and Applicability

This PCR covers viable living bees as goods at a documented producer handover: managed whole colonies, nucleus colonies, worker packages and individually sold queens, plus evidenced lawful live capture. The UN CPC examples include several *Apis* species but do not restrict the class to *Apis*. For other bee taxa, species-specific husbandry or capture evidence and a viable product state are mandatory. Honey, wax, royal jelly, pollen, dead bees, hive hardware and pollination services are not the reference product. A live-bee biomass result is not a proxy for pollination capacity or colony strength.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees |
| classification_refs | CPC 3.0 02196 — Bees |
| covered_products | Living bees of documented species in whole-colony, nucleus, worker-package or queen-only configurations at actual producer handover; lawful live-capture output when evidenced. |
| excluded_products | Honey, wax, royal jelly, pollen, dead bees, hive hardware, pollination services, downstream transport and buyer management. |
| representative_product | Measured viable living-bee biomass with a declared sale configuration; queen-only by count separately disclosed. |
| production_route | Managed colony/queen propagation, optional independent live capture, viability grading, ventilated presentation and handover. |
| market_state | Living, viable, unprocessed bees; queen status, workers, brood, strength, package and gate declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Viable living bees delivered as a good; results are stratified by species and sale configuration. |
| How much | 1 kg measured living-bee biomass, excluding hive, comb, syrup and container. Queen-only count requires a separately measured lot-specific count-to-mass bridge or remains a count result outside this mass comparison. |
| How well | Species, queen condition, worker/brood status, colony strength and live acceptance state disclosed; equal kg does not mean equivalent colony or pollination function. |
| How long or cycle | The actual breeding, capture, grading and producer-handover periods, with reusable assets allocated over their service periods. |
| reference_flow_link | Broad multi-configuration/multi-gate living-bee reference is intentionally UUID-unresolved. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Living bees, configuration and gate qualified (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; managed or lawful capture route; whole colony/nucleus/worker package/queen-only; queen, worker and brood status; count or colony strength; actual gate; non-bee packaging mass |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| live_mass | living-bee reference | Mass | kg | Measure or derive bee-only live biomass at handover; subtract containers, hive, comb and feed; retain lot weighing evidence. |
| configuration_count | every live lot | Number of items | item or colony | Record queen count, colony count and worker-package composition separately; do not convert count to mass without measured lot-specific bridge. |
| temporal_link | all phases | time | day or reporting period | Link donor colony, split, capture, grading and handover events to actual periods; never count the same bees at two output gates. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased or opening managed colony/queen, or evidenced lawful wild source; identify species and status. |
| starting_condition_role | Recursive same-category live-bee inputs retain their upstream burden; opening owned stock is a disclosed starting inventory. |
| product_classification_scope | CPC 3.0 02196 living bees; listed Apis are examples, other taxa require specific route evidence. |
| recursive_input_rule | When an acquired live-bee input is itself the reference category, import its upstream dataset once and do not treat internal transfers as new production. |
| upstream_dataset_requirement | Require source, species/configuration, gate and upstream burden for purchased bees and separately purchased feed, packaging and services. |
| disclosure | Report route, species, configuration, queen/brood/worker condition, authorization for capture, bee-only mass, count bridge, co-output handovers, periods and shared assets. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_scope | all routes | Include managed propagation or lawful live capture only when operated, then distinct grading and packaging nodes when the goods are assessed/presented before producer handover. | un-cpc-3;fao-value-bees |
| b_route | managed parent and capture | Queen rearing, nucleus splitting and worker-package shaking are managed-production variants only when they change brood/queen inputs, split accounting or validation. Wild capture is an independent route, not a managed variant; do not infer one route's inventory from another. | fao-value-bees;fao-queen-rearing |
| b_gate | handover | Stop at the actual producer gate. Include pre-gate presentation, feed and losses; exclude buyer installation and downstream distribution. Farm-gate and capture-site outputs are distinct. | fao-practical-bees |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| colony | Managed colony and queen propagation | conditional | Managed breeding or sale-source apiary actually operated | Parent managed-biological node; queen-rearing, nucleus and package-production deltas are evidenced separately | kg viable propagated living bees |
| capture | Lawful live capture | conditional | Actual capture with species and jurisdictional authorization | Independent capture from wild or feral source; collected live state handed to grading, loss/release separated | kg viable captured living bees |
| grade | Viability grading and destination sorting | required | Incoming living bees are assessed for declared sale configuration | Accepted, downgraded and nonviable states each get a destination | kg incoming living bees |
| present | Ventilated presentation and producer handover | required | Live sale lot is packaged or presented before actual gate | Packaging and pre-gate feed only; hand over viable bees, not downstream transport | kg bee-only living biomass at gate |

Managed queen rearing, colony division and worker-package production share the biological parent but differ in queen/brood input, removal of workers, acceptance tests and output composition; route cohorts may coexist and must be separately recorded. Capture is independent of propagation and requires lawful source and a measured capture-to-grading hand-off. Grading maps incoming bees to accepted, downgraded or waste states. Presentation maps each accepted configuration to one actual producer gate; farm and non-farm mass output cards are mutually exclusive per lot. The queen-count card is the alternative final output only when a queen-only sale lacks a measured count-to-mass bridge. If that bridge exists, queen count is supporting metadata for one mass output, not a second Product exchange. Multi-season colony assets, queens and shared hives must carry period and consumer links.

The configuration-neutral live-state and mixed-material waste cards are conditional foreground expansion slots. A concrete dataset separates species, sale configuration and waste material/destination into their own exchanges. No one UUID represents all variants of an umbrella card.

### Process: Managed colony and queen propagation (`colony`)

#### Inputs

##### Product flows

###### Acquired live breeding bees (`acquired_live`)

Purchased queen, nucleus or colony enters with its upstream burden; opening owned stock is disclosed separately.

- Selected flow: Living bees, configuration-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received living-bee biomass; count and configuration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_stock`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplemental bee feed (`supplemental_feed`)

Record purchased syrup or substitute feed actually supplied; natural floral forage is not a purchased Product exchange.

- Selected flow: Supplemental bee feed (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued feed less stock change and losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied process water (`supplied_water`)

Record supplied water for apiary care or cleaning when crossing the foreground boundary; natural forage water is not assumed purchased.

- Selected flow: Supplied water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered or logged supplied water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hive and frame service (`hive_service`)

Record amortized hive and frame manufacture or repair used by managed production; exclude a sold hive as bee biomass.

- Selected flow: Hive and frame equipment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: asset and repair burden allocated by service period and use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Viable daughter colonies or queens (`viable_daughter`)

Record only viable live states transferred to grading; distinguish queen-only, nucleus, worker package and whole-colony routes.

- Selected flow: Living propagated bees (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured living-bee biomass at propagation hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_stock`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditional independent honey or wax outputs (`separate_honey_wax`)

This is a conditional foreground expansion slot, not one exchange or one fixed UUID. If honey and wax are both independently recovered and handed over, create separate concrete Product exchanges with their own mass, identity, gate and attribution. Apply each product's own method.

- Selected flow: Honey or wax, to be split into distinct foreground exchanges (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: separately measure honey mass and wax mass at their distinct handovers, if any
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Colony mortality and unusable residues (`colony_loss`)

Dead bees and unsaleable comb are losses or waste, not viable live products; expand them into distinct concrete waste exchanges by material, destination and treatment.

- Selected flow: Dead bees and unusable residue (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured loss mass and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Lawful live capture (`capture`)

#### Inputs

##### Product flows

###### Live-capture equipment and consumables (`capture_material`)

Include traps or containers actually consumed or amortized for an evidenced lawful capture event.

- Selected flow: Live-capture materials (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: recorded material and asset use per event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Captured viable live bees (`captured_viable`)

A capture node exists only with species, authorization, location, source colony, collected live state and hand-off evidence; releases are logged, not saleable output.

- Selected flow: Captured living bees (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured live biomass accepted from capture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Capture mortality (`capture_mortality`)

Record dead bees and incidental non-bee material separately; no invented live production from capture loss.

- Selected flow: Capture mortality (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured dead-bee mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Viability grading and destination sorting (`grade`)

#### Inputs

##### Product flows

###### Incoming live states for grading (`incoming_live`)

Identify source node and configuration before viability, queen status and strength assessment.

- Selected flow: Living bees entering grading (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured incoming living-bee biomass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_stock`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted live-bee grade (`accepted_live`)

Accept viable bees against declared configuration and condition; hand accepted lot to presentation.

- Selected flow: Accepted living bees (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured accepted living-bee biomass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded viable live-bee grade (`downgraded_live`)

If still viable and independently handed over or rerouted, record a distinct downgraded live state; do not double count as accepted grade.

- Selected flow: Downgraded living bees (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured downgraded live biomass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Nonviable grading rejects (`grade_reject`)

Rejects with no viable live-bee destination are waste or losses with their actual disposal route.

- Selected flow: Nonviable bee rejects (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Ventilated presentation and producer handover (`present`)

#### Inputs

##### Product flows

###### Graded live bees for presentation (`graded_live`)

Bring accepted or explicitly downgraded viable lots into configuration-specific presentation, with no second production credit.

- Selected flow: Graded living bees (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured input living-bee biomass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ventilated package materials (`ventilated_package`)

Include disposable screened box, cage or liner only when supplied; reusable hives or boxes use service-period attribution.

- Selected flow: Ventilated packaging (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: recorded packaging mass or reusable service share
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_package`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed supplied before handover (`travel_feed`)

Record syrup or other feed placed in a package before producer handover; downstream transport and buyer feeding are outside boundary.

- Selected flow: Package feed (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured feed placed before gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_package`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Farm-gate live-bee biomass (`farm_live_mass`)

Only an unprocessed living-bee mass lot at an actual managed-apiary farm gate can use the confirmed farm-gate identity; exclude container, comb and syrup mass.

- Selected flow: Bees, living, unprocessed, farm gate `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: measured living-bee biomass at farm gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other-gate live-bee handover (`other_live_gate`)

Capture-site and other non-farm producer handovers remain separately identified and unbound; do not count the same lot again at farm gate.

- Selected flow: Living bees, declared non-farm gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured living-bee biomass at actual handover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Queen-only live-bee units (`queen_count`)

Count independently sold viable queens only when the lot lacks a measured count-to-mass bridge and is therefore outside the kg reference result. If a bridge exists, record queen count as metadata on exactly one mass output instead of a second Product exchange. Do not infer queen mass from colony or package weights.

- Selected flow: Living queen bees, individual (UUID unresolved)
- Flow property / unit: Number of items / item
- Amount rule: count accepted queen individuals; mass bridge separately measured
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: item/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Package rejects and pre-gate mortality (`package_reject`)

This card is a conditional foreground expansion slot: record damaged package materials and dead bees as distinct concrete waste exchanges with their destinations. It cannot take one shared fixed UUID; viability failure blocks live output.

- Selected flow: Packaging reject and bee mortality (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg living bees received or produced by this process; queen-only card is a count supplement
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_losses`
- Range: Provisional completeness QA screen, not a default amount or emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg
  - Basis: per kg living bees received or produced by this process; investigation trigger only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_avoid | all nodes | Separate independent output processes or records first. Internal split, graded transfer and package handover of the same bees are one lineage, not three final product credits. | fao-value-bees |
| a_outputs | propagation and grading | Declare each actual independently handed-over live queen, colony, nucleus, worker package, honey, wax or service; treat mortality and unusable residues as waste. Do not allocate a pollination-service burden without an evidenced service output. | fao-value-bees |
| a_choice | true joint production | When separation is impossible, document a PCR-specific physical causal attribution if supported; otherwise document economic allocation with contemporaneous value evidence and sensitivity. No universal honey/live-bee split is prescribed. | fao-value-bees |
| a_period | shared colony and assets | Index breeder establishment, queen rearing, splits, feeding, capture, grading and handover by reporting period. Allocate shared hive, frame and equipment service to consuming nodes and periods using recorded use/occupation, with one owner for each burden. | fao-practical-bees |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_live_stock | colony;grade | live bees | lot weigh/count | species;configuration;queen_count;worker_status;brood;live_mass;date;origin | weigh lot and document counts | kg;item | each lot | full production period | all source and grading lots | sum by lot and avoid internal double count | scale record;lot identity |
| cp_feed | colony | supplemental feed | issue ledger | feed_type;received;issued;stock_change;loss | weigh purchased feed and reconcile stores | kg | each issue | full production period | all managed colonies | net issue by period | purchase and stock logs |
| cp_utilities | colony | water | meter log | meter_start;meter_end;use_node;date | meter or supplier bill with node split | kg | at least monthly | full production period | all managed apiaries | meter delta by node | meter or bill |
| cp_assets | colony;capture | hives frames traps | asset register | asset_id;mass;service_period;consumer_node;use_share | record acquisition, repair and service | kg;day | at purchase and annually | asset service periods | all shared assets | allocate recorded service once | invoice;asset log |
| cp_outputs | colony | independent co-output | handover record | product_type;mass;recipient;gate;date | weigh and receipt | kg | each handover | full production period | all independent outputs | sum distinct output lots | weigh ticket;receipt |
| cp_losses | colony;capture;grade;present | mortality and waste | loss log | lot;material_class;mass;destination;date | weigh loss by class | kg | each loss event | full production period | all nodes | sum once by class and destination | disposal record |
| cp_capture | capture | lawful live capture | event record | species;permit;location;source;captured_live_mass;released_mass;dead_mass;date | weigh and inspect at capture hand-off | kg | each event | capture periods | all lawful events | event mass balance | permit;field log |
| cp_grade | grade;present | accepted and downgraded bees | grade record | lot;species;configuration;queen_status;strength;accepted_mass;downgraded_mass;reject_mass | inspect and weigh each destination | kg | each lot | full production period | all graded lots | reconcile destination masses | inspection sheet;scale record |
| cp_package | present | package materials and feed | packaging issue | lot;container_type;container_mass;reuse_share;feed_mass;date | weigh and log materials | kg | each lot | full production period | all presentation lots | sum material by lot, reusable share once | issue log;asset record |
| cp_handover | present | live goods by gate | handover certificate | lot;species;configuration;gate;bee_mass;queen_count;count_mass_bridge;buyer;date | weigh bee-only mass, inspect viability, count and sign receipt | kg;item | each handover | full production period | all delivered lots | one final gate per lot | scale certificate;receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_bee_mass | reference and handover | Living-bee biomass = lot gross weight minus container, hive/comb and feed; queen lots require their own measured mass. | cp_handover;cp_package | kg bee-only live mass | fao-value-bees |
| c_balance | grading and capture | Incoming live mass = accepted + downgraded + dead + released + recorded stock change; stage transfers are not repeated final output. | cp_capture;cp_grade;cp_losses | lot mass-balance difference | fao-value-bees |
| c_shared | shared assets | Asset burden × recorded node-period use share; shares for one asset sum to no more than 1. | cp_assets | node-period asset burden | fao-practical-bees |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_species | all lots | Record species and route limits that cannot be extrapolated to other bee taxa. | species identification and route log |
| q_mass | handover lots | Retain bee-only weighing, package subtraction and queen count-to-mass bridge; absent bridge means queen count only. | weighing and handover certificate |
| q_period | cross-period colonies and assets | Link each source, propagation, split, capture, grade, handover and shared asset to period and node. | event and asset logs |
| q_complete | outputs and losses | Close accepted, downgraded, dead, released and stock change by lot; record independent co-products and destinations. | lot balance and receipt |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | every delivered lot | Reject missing species, viable state, sale configuration, queen/brood/worker status, actual producer gate or separation of bee-only biomass from hive/feed/package mass. | un-cpc-3 |
| v_count | queen-only sale | A queen-by-count lot without measured lot-specific mass is reported only as count and is not pooled with kg biomass comparison; no colony-strength equivalence is inferred. | fao-queen-rearing |
| v_route | managed and capture | Require managed parent plus variant-specific route delta evidence, or lawful capture authorization and capture-to-grading mass balance. Reject assumed non-Apis husbandry by analogy alone. | un-cpc-3;fao-value-bees |
| v_balance | all phases | Reconcile incoming, accepted, downgraded, dead, released and final live states by lot and gate; trace co-products, periods and shared assets once; no duplicate final live output. | fao-value-bees |
| v_binding | flow identities | A UUID supports only an exact card. The platform farm-gate Mass bee product must not bind queen count, capture-site handover or broad reference. | un-cpc-3 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground living-bee production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Species-, configuration- and gate-matched living-bee goods with declared measurement and allocation. |
| excluded_use | Pollination service, honey methodology, hive hardware, dead-bee goods, cross-configuration functional equivalence and unsupported count-to-mass conversion. |
| required_metadata | CPC and PCR identity; species; configuration; queen/worker/brood status; count and strength; bee-only mass; route and legal capture evidence; gate; reporting period; shared assets. |
| required_quality_disclosure | Lot measurement and count bridge, acceptance/loss reconciliation, source and co-output handovers, period attribution, concrete exchange resolution and unresolved UUIDs. |
| update_trigger | Change in species, sale configuration, capture law/route, producer gate, major management method, allocation or identity evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official living-bee classification scope. |
| fao-practical-bees | handbook | https://www.fao.org/4/x0083e/X0083E06.htm | Apiary equipment, full and nucleus colonies, worker packages and pre-handover care. |
| fao-value-bees | handbook | https://www.fao.org/4/w0076e/w0076e19.htm | Live bee package, queen and colony production; live presentation. |
| fao-queen-rearing | handbook | https://www.fao.org/4/t0104e/T0104E0e.htm | Managed queen rearing and queen condition. |
