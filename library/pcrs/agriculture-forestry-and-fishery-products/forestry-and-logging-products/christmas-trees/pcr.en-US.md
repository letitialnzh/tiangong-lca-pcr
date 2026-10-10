---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.christmas-trees
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Managed-grown fresh cut Christmas trees

## 1. Scope and Applicability

This PCR concerns managed-grown fresh cut whole Christmas trees at actual grower dispatch. It works backward from that reference product through the real producer route, including upstream planting-stock supply and the entire producing cohort, not only the cutting year. It does not prescribe a universal species, height, grade, cultivation duration or handling technology. Wild cutting, rooted or potted/replanting trees, artificial/decorated goods and retail, use and end-of-life are outside this scope.

OSU PNW684 establishes a managed multi-year crop whose species, origin and buyer grade affect cultivation; pruning boughs and failed trees require separate accounting. PNW6 establishes harvest and producer-side preparation/dispatch work, including cutting/yarding and conditional shaking or baling. Neither publication supplies PCR inventory defaults. The dispatch boundary is a producer handover, not a mandatory forest-roadside or retail gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.christmas-trees |
| classification_refs | CPC 3.0 03241; proposed narrower scope |
| covered_products | Managed-grown fresh whole cut Christmas trees, declared species and buyer height-grade, with actual primary protective presentation |
| excluded_products | Wild-cut trees; rooted/potted/replanting trees; artificial/decorated goods; isolated boughs as reference goods; deliberately dried/preserved goods; downstream retail/use/disposal |
| representative_product | Accepted net fresh cut whole tree mass at grower dispatch |
| production_route | Nursery supply; establishment and full-cohort cultivation; cut/yard; actual preparation; grade; actual protective holding; presentation/load/dispatch |
| market_state | Fresh whole cut trees; package netting/ties/supports declared separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Managed-grown fresh cut whole Christmas trees accepted at the actual grower dispatch gate |
| How much | 1 kg accepted net fresh tree mass, excluding packaging, supports and foreign matter |
| How well | Actual species/provenance, height measurement convention and buyer grade acceptance are declared; no universal grade or shelf-life claim |
| How long or cycle | Actual multi-year cohort establishment-to-harvest phases plus cut-to-dispatch interval; replacements, failed trees and stocks carried between years are disclosed |
| reference_flow_link | `tree_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh cut Christmas trees `ab8a7694-6ea2-4cce-b535-9358f74c1189` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Managed-grown origin; actual species and provenance; contributing sites/blocks; cohort establishment and harvest dates; height convention and buyer grade; accepted net fresh mass and moisture/state at dispatch; actual tree count and measured count-to-mass relationship if count-based records are used; true dispatch actor/gate; preparation/holding status; packaging exclusion; rejected and co-product destinations |

Declare all required qualifiers in the foreground package. One kilogram is an accounting reference, not a claim that a one-kilogram tree exists. Species/grade lots are not functionally interchangeable by mass alone; retain their actual mix and do not publish a configuration-free per-tree factor.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted fresh dispatch tree lots on a calibrated scale under cp_dispatch; subtract separately measured package/support tare and rejected material. Use only positive accepted net tree mass. |
| fresh_state | planting_stock; standing_crop; grow_bough_goods; harvest_standing_feed; cut_trees; condition_tree_feed; prepared_trees; grade_tree_feed; accepted_grades; downgraded_goods; offspec_return; hold_tree_feed; held_trees; dispatch_tree_feed; tree_dispatch | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve actual fresh mass and measured moisture/state for each biological transfer; do not use a generic dry-matter or count conversion. |
| delivered_energy | grow_energy; harvest_energy; condition_energy; grade_energy; hold_energy; dispatch_energy | Energy | MJ | Only actual energy subexchanges use this rule; native service properties/units remain separate. Preserve original fuel quantity, fuel identity and heating-value convention; distinguish electricity from fuels. Convert electricity using the exact unit equality 1 kWh = 3.6 MJ, not a heat-generation efficiency. |
| material_basis | grow_materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve each fertilizer formulation mass and declared nutrient basis separately, each plant-protection product and active ingredient separately, and purchased water apart from natural abstraction; never sum unlike substances as one concrete flow. |

Count-only invoices are not mass observations. Collect paired actual count, species/height-grade and accepted net mass of the same lot; reconstruct the actual total attributable activity for that lot, then divide by its accepted net mass. If those records do not exist, mass-normalized data production is incomplete. No assumed average tree mass, standard rotation, yield or moisture factor is allowed.

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual managed planted cohort with traceable nursery planting-stock supply, establishment, replacement and annual cultivation history |
| starting_condition_role | Foreground crop production start; nursery supply remains required upstream technosphere coverage |
| product_classification_scope | Narrower managed-grown fresh cut whole-tree portion of CPC 03241, not all origins or presentations |
| recursive_input_rule | Purchased trees of the same category retain supplier upstream datasets and genuine receipt/handling; do not reopen their production in this foreground or count them as own-grown reference without origin disclosure |
| upstream_dataset_requirement | Nursery stock, supplied materials, energy and attributable assets/services require compatible upstream datasets with declared geography, time, state and unit; missing coverage is a gap, never zero |
| disclosure | Actual cohort periods/sites, biological and package stocks, upstream coverage, bypassed optional nodes, actual handovers, shared assets, rejects, co-products, direct releases and exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| bound_cohort | grow; harvest | Include establishment, all cultivation years, replacements and failed-tree burdens attributable to harvested lots; identify remaining living stocks and termination rather than placing all lifetime burdens in one harvest year. | osu-christmas-culture |
| bound_actual_path | all processes | Use the actual graph: grow to harvest; harvest directly to grade or through condition; grade directly to dispatch or through hold. Rework returns link to the originating off-spec lot and actual receiving node. Do not invent bypassed activity or treat transfers as additional final sales. | osu-christmas-harvest |
| bound_gates | dispatch | End at actual producer acceptance/loading handover; include producer-side movement and loading once, exclude carrier distribution/retail/use/end-of-life. Declare any geographically distinct grower handling site and include its connecting transport once. | osu-christmas-harvest |
| bound_direct | grow; all processes | Managed biomass is not a wild whole-tree elementary removal. Record actual environmental abstractions and direct substance releases with receiving media; model biogenic carbon only with an explicit reviewed balance/method, separate stored carbon from sequestration credits and disclose incomplete terms. | |
| bound_assets_sites | all processes | Index every contributing field/block/nursery interface/yard, shared tractor, shed or irrigation service and each consuming node/year. Include attributable upstream asset/services once using observed causal usage and actual service periods; disclose residual unmatched coverage. | |
| bound_optional | condition; hold; dispatch | Actual preparation, fresh holding and package presentation do not automatically create a new tree identity. A distinct physical transformation or incompatible state needs separate identity evidence; attached package mass never enters tree reference mass. | |
| bound_identity_reuse | all own-grown fresh tree transfers | Reusing one compatible flow UUID identifies the physical fresh product only. Preserve actual upstream/downstream process links and measured internal quantities; do not reload a complete farmgate background dataset at every own-grown internal node, count an intermediate transfer as completed dispatch, or count the same lot as a second sale. External purchases retain their actual supplier coverage separately. | |
| `boundary_direct_release_coverage` | `grow`; `harvest`; `condition`; `grade`; `hold`; `dispatch` | Reconcile on-site combustion, actual applications and fugitive releases/leaks at every activated node through unique activity-substance-receiving-medium records in cp_direct_release_grow; cp_direct_release_harvest; cp_direct_release_condition; cp_direct_release_grade; cp_direct_release_hold; cp_direct_release_dispatch. Upstream production of purchased fuel or chemicals does not replace emissions from their use on site; verify coverage and avoid double counting the same activity inside a supplier service. Evidence must support non-activity; missing data are not zero. This obligation does not expand the existing product gate or downstream-use boundary and does not presume combustion, fertilization, chemicals or equipment occur. |  |

Select the route from actual incoming state and ownership. Qualified purchased harvested, extracted, prepared or graded feed may enter at its real receiving node; completed upstream operations are not mandatory foreground operations and standing stock or biological resources must not be charged again. Receiving cards record actual material, grade, wet/dry basis, receipt gate, upstream dataset and process coverage; add the actual receiving exchange if none exists. Bypass does not remove upstream burdens; actual operations cannot be skipped and final reference product, quality and gate remain unchanged.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `grow` | Managed crop establishment and full-cohort cultivation | conditional | Managed cultivation is owned inside the foreground for the represented cohort. Purchased fresh cut trees bypass growth while retaining verified managed-origin and matching upstream cultivation burdens. | managed biological production | per 1 kg reference flow |
| `harvest` | Cutting and yarding | conditional | Actual cutting or yarding occurs inside the foreground. Purchased already cut/yarded trees bypass the corresponding completed operations with matched upstream coverage. | harvest | per 1 kg reference flow |
| `condition` | Primary shaking and preparation | `conditional` | Actual shaking or primary preparation occurs | primary conditioning | per 1 kg reference flow |
| `grade` | Buyer grade and destination determination | `required` | Always within the declared actual route | grading and sorting | per 1 kg reference flow |
| `hold` | Bounded fresh protective holding | `conditional` | Actual protected holding occurs before dispatch | preservation and stabilization | per 1 kg reference flow |
| `dispatch` | Protective presentation and grower dispatch | `required` | Always within the declared actual route | packaging and presentation; producer dispatch | per 1 kg reference flow |

The mode is cohort-based multi-year crop production with lot/campaign-based harvesting and handling, not continuous manufacture. Index every site/cohort/year and every cut/grade/holding/dispatch lot; cleaning, changeover and return events belong to their actual campaign. Independent process responsibilities support loss and burden accounting; they do not require separate sale products or UUIDs. A compatible fresh cut-tree identity may persist across all transfers.

All non-reference card Ranges are provisional author-reasoned QA screens, not measured typical values, mandatory limits, defaults, cut-offs or permission to fabricate a nonzero exchange. Each actual substance/service under an umbrella retains its own amount, unit and destination; never add heterogeneous quantities merely to fill a card. Values outside a screen require investigation but are not automatically rejected. The broad screens intentionally do not certify cultivation yields, dispatch acceptance or carbon balance.

### Process: Managed crop establishment and full-cohort cultivation (`grow`)

Node `grow` must complete the direct-release coverage reconciliation in `cp_direct_release_grow`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Managed standing trees pass to harvest; establishment, replacements and every cultivation year belong to the same cohort. Fertilizers, irrigation, plant protection and training are conditional actual management inputs. Pruning boughs may be independent intended goods, returned residues or waste.

#### Inputs

##### Product flows

###### Supplied planting stock (`planting_stock`)

Nursery seedlings or transplants enter the managed cohort with species/provenance and measured delivery mass; upstream nursery supply is required. They are not harvested Christmas trees.

- Selected flow: Christmas-tree planting stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grow, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grow`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied material and attributable service requirement (`grow_materials`)

Conditional umbrella for actual supplied materials and attributable services. Distinguish water, fertilizers/agents, cleaning supplies, consumed tools and services by substance/function/provider and native property/unit. Shared tractor, shed, irrigation or handling services retain actual consumer node and year; the single shared-service ledger expands concrete exchanges at their true consuming nodes, including grade and dispatch, without adding a compulsory exchange or duplicate full asset charge.

- Selected flow: Supplied material and attributable service requirements
- Flow property / unit: Actual material or service property / native unit
- Amount rule: Measured attributable quantity under cp_grow, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grow`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

###### Actual fuel and electricity requirement (`grow_energy`)

Conditional umbrella: identify each actual fuel or electricity exchange separately and preserve its delivered-energy basis. One card is not one compulsory exchange.

- Selected flow: Fuel and electricity requirements
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable quantity under cp_grow, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grow`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

##### Elementary flows

###### Actual land occupation or transformation interface (`grow_land`)

Conditional umbrella: record actual managed field/yard occupation and any evidenced land transformation with site, prior/new use and time boundaries. Keep occupation (area-time) separate from transformation (area); each final exchange uses its own concrete land-use identity, property and native unit. Do not convert area or area-time to biomass mass, infer transformation from planting alone or assume a standard rotation. Shared land belongs once to actual cohort/period/site consumers.

- Selected flow: Actual land occupation or transformation
- Flow property / unit: Land use / native area or area-time unit
- Amount rule: Actual attributable area or area-time under cp_grow, divided by accepted net dispatch mass; occupation and transformation remain separate native exchanges
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grow`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

###### Actual natural water or other resource uptake (`grow_resources`)

Record actual abstracted environmental water separately from purchased water and method-defined biogenic uptake; no natural whole-tree removal applies to the managed crop.

- Selected flow: Natural resources by actual substance and source
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grow, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grow`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Managed living crop handed to harvest (`standing_crop`)

An internal biological-production interface, not a fresh cut tree sale. Attribute the traced harvested fraction of the standing cohort and separately retain unfinished, failed and replacement stock records.

- Selected flow: Managed living Christmas-tree crop
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grow, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grow`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separately intended pruning bough goods (`grow_bough_goods`)

Only an independently intended and accepted bough product crossing its documented handover is a co-product; enumerate every such grade/destination without assuming a market.

- Selected flow: Pruning bough goods by actual identity
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grow, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grow`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Material actually discarded across the boundary (`grow_waste`)

Conditional umbrella for actual removed material sent to treatment; preserve organic, package and hazardous identities. Returned field residues and intended goods are not automatically waste.

- Selected flow: Discarded material by real destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grow, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grow`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct substance releases and losses (`grow_releases`)

Conditional umbrella: identify each actual substance, water/air/soil receiving medium and mass basis from measurements or an explicitly evidenced model. Separate evaporation from solid residues; do not assume pollutant totals are concrete identities.

- Selected flow: Direct substance releases by receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grow, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grow`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Cutting and yarding (`harvest`)

Node `harvest` must complete the direct-release coverage reconciliation in `cp_direct_release_harvest`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Cutting separates the living managed crop from fresh cut whole trees. Yarding ends at the actual grower handling point; it does not imply a new sale or a wild-resource-removal flow. Keep cut losses, uncropped standing stock and incidental material distinct.

#### Inputs

##### Product flows

###### Living managed crop received for cutting (`harvest_standing_feed`)

Link the same cohort interface to standing_crop; its measurement is not the final one-kilogram reference and must not be counted as a purchased external cut tree.

- Selected flow: Managed living Christmas-tree crop
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_harvest, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied material and attributable service requirement (`harvest_materials`)

Conditional umbrella for actual supplied materials and attributable services. Distinguish water, fertilizers/agents, cleaning supplies, consumed tools and services by substance/function/provider and native property/unit. Shared tractor, shed, irrigation or handling services retain actual consumer node and year; the single shared-service ledger expands concrete exchanges at their true consuming nodes, including grade and dispatch, without adding a compulsory exchange or duplicate full asset charge.

- Selected flow: Supplied material and attributable service requirements
- Flow property / unit: Actual material or service property / native unit
- Amount rule: Measured attributable quantity under cp_harvest, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

###### Actual fuel and electricity requirement (`harvest_energy`)

Conditional umbrella: identify each actual fuel or electricity exchange separately and preserve its delivered-energy basis. One card is not one compulsory exchange.

- Selected flow: Fuel and electricity requirements
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable quantity under cp_harvest, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

##### Elementary flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

#### Outputs

##### Product flows

###### Fresh cut tree transfer to primary handling (`cut_trees`)

Record whole fresh trees after cut/yarding with actual species, lot and provisional grade; excess needles, rejects and attached foreign matter are tracked separately. This is the same fresh material later dispatched, not a second final product.

- Selected flow: Fresh cut Christmas trees `ab8a7694-6ea2-4cce-b535-9358f74c1189`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_harvest, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Material actually discarded across the boundary (`harvest_waste`)

Conditional umbrella for actual removed material sent to treatment; preserve organic, package and hazardous identities. Returned field residues and intended goods are not automatically waste.

- Selected flow: Discarded material by real destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_harvest, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct substance releases and losses (`harvest_releases`)

Conditional umbrella: identify each actual substance, water/air/soil receiving medium and mass basis from measurements or an explicitly evidenced model. Separate evaporation from solid residues; do not assume pollutant totals are concrete identities.

- Selected flow: Direct substance releases by receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_harvest, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Primary shaking and preparation (`condition`)

Node `condition` must complete the direct-release coverage reconciliation in `cp_direct_release_condition`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Fresh cut whole trees enter; actual shaking or basal tidying prepares the same fresh product for grading. Removed needles and trimmings retain their real return, use or disposal destination. If absent, bypass without inventing an intervention or its inputs.

#### Inputs

##### Product flows

###### Fresh trees received for primary preparation (`condition_tree_feed`)

Link actual cut_trees or returned off-spec tree lot; a return retains existing burdens and receives only added handling work.

- Selected flow: Fresh cut Christmas trees `ab8a7694-6ea2-4cce-b535-9358f74c1189`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_condition, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied material and attributable service requirement (`condition_materials`)

Conditional umbrella for actual supplied materials and attributable services. Distinguish water, fertilizers/agents, cleaning supplies, consumed tools and services by substance/function/provider and native property/unit. Shared tractor, shed, irrigation or handling services retain actual consumer node and year; the single shared-service ledger expands concrete exchanges at their true consuming nodes, including grade and dispatch, without adding a compulsory exchange or duplicate full asset charge.

- Selected flow: Supplied material and attributable service requirements
- Flow property / unit: Actual material or service property / native unit
- Amount rule: Measured attributable quantity under cp_condition, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

###### Actual fuel and electricity requirement (`condition_energy`)

Conditional umbrella: identify each actual fuel or electricity exchange separately and preserve its delivered-energy basis. One card is not one compulsory exchange.

- Selected flow: Fuel and electricity requirements
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable quantity under cp_condition, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

##### Elementary flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

#### Outputs

##### Product flows

###### Prepared fresh trees handed to grading (`prepared_trees`)

Link actual prepared tree mass to the next node, retaining fresh whole-tree identity; needles/trim losses and return destinations reconcile with input mass.

- Selected flow: Fresh cut Christmas trees `ab8a7694-6ea2-4cce-b535-9358f74c1189`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_condition, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Material actually discarded across the boundary (`condition_waste`)

Conditional umbrella for actual removed material sent to treatment; preserve organic, package and hazardous identities. Returned field residues and intended goods are not automatically waste.

- Selected flow: Discarded material by real destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_condition, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct substance releases and losses (`condition_releases`)

Conditional umbrella: identify each actual substance, water/air/soil receiving medium and mass basis from measurements or an explicitly evidenced model. Separate evaporation from solid residues; do not assume pollutant totals are concrete identities.

- Selected flow: Direct substance releases by receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_condition, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_condition`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Buyer grade and destination determination (`grade`)

Node `grade` must complete the direct-release coverage reconciliation in `cp_direct_release_grade`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Enumerate each accepted species/height/grade lot, a separately sold downgraded lot, off-spec trees awaiting identified return/rework, and actual discarded material. Buyer acceptance defines the dispatch reference; the PCR imposes no universal grade threshold. Grading is not another physical tree transformation.

#### Inputs

##### Product flows

###### Actual fresh tree lot received for grading (`grade_tree_feed`)

Use prepared_trees when preparation occurred, otherwise cut_trees; retain source identity and do not duplicate bypassed nodes.

- Selected flow: Fresh cut Christmas trees `ab8a7694-6ea2-4cce-b535-9358f74c1189`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grade, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual energy and operation service requirement (`grade_energy`)

Conditional umbrella for actual energy and operation services at this node. Identify fuel/electricity, actual contracted handling and shared asset/service use separately with their own native property/unit and actual period/consumer. Apply delivered_energy only to actual energy subexchanges; services are not converted to MJ. Retain attributed service quantities and ensure the shared ledger charges each consumer once.

- Selected flow: Energy and operation service requirements
- Flow property / unit: Actual energy or service property / native unit
- Amount rule: Measured attributable quantity under cp_grade, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

##### Elementary flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

#### Outputs

##### Product flows

###### Accepted fresh tree grade lots (`accepted_grades`)

Enumerate actual accepted species/height-grade lots to holding or dispatch. Multiple accepted grades are distinct lot records, not necessarily distinct physical UUIDs.

- Selected flow: Fresh cut Christmas trees `ab8a7694-6ea2-4cce-b535-9358f74c1189`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grade, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separately accepted downgraded tree goods (`downgraded_goods`)

Only buyer-accepted independent lower-grade goods count here; identify their true handover and exclude them from the reference lot denominator unless that lower grade is the declared reference.

- Selected flow: Downgraded fresh cut Christmas trees
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grade, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-spec fresh trees with a documented return loop (`offspec_return`)

Temporary internal transfer back to actual condition or sorting activity, not an accepted reference output or a second co-product. Missing destination blocks final inventory.

- Selected flow: Off-spec fresh cut Christmas trees for return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grade, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Material actually discarded across the boundary (`grade_waste`)

Conditional umbrella for actual removed material sent to treatment; preserve organic, package and hazardous identities. Returned field residues and intended goods are not automatically waste.

- Selected flow: Discarded material by real destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_grade, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.


### Process: Bounded fresh protective holding (`hold`)

Node `hold` must complete the direct-release coverage reconciliation in `cp_direct_release_hold`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Accepted fresh trees enter a measured holding interval and leave in the same declared fresh state. Shade, cooling or water inputs are not compulsory: record only actual interventions, depletion, drying loss and rejected trees. This is not intentional drying or a shelf-life guarantee.

#### Inputs

##### Product flows

###### Accepted fresh trees entering protective holding (`hold_tree_feed`)

Receive actual accepted_grades; record lot, time and net mass before any actual preservation intervention.

- Selected flow: Fresh cut Christmas trees `ab8a7694-6ea2-4cce-b535-9358f74c1189`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_hold, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hold`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied material and attributable service requirement (`hold_materials`)

Conditional umbrella for actual supplied materials and attributable services. Distinguish water, fertilizers/agents, cleaning supplies, consumed tools and services by substance/function/provider and native property/unit. Shared tractor, shed, irrigation or handling services retain actual consumer node and year; the single shared-service ledger expands concrete exchanges at their true consuming nodes, including grade and dispatch, without adding a compulsory exchange or duplicate full asset charge.

- Selected flow: Supplied material and attributable service requirements
- Flow property / unit: Actual material or service property / native unit
- Amount rule: Measured attributable quantity under cp_hold, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hold`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

###### Actual fuel and electricity requirement (`hold_energy`)

Conditional umbrella: identify each actual fuel or electricity exchange separately and preserve its delivered-energy basis. One card is not one compulsory exchange.

- Selected flow: Fuel and electricity requirements
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable quantity under cp_hold, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hold`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

##### Elementary flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

#### Outputs

##### Product flows

###### Fresh trees leaving protective holding (`held_trees`)

Preserve the same fresh physical identity with actual elapsed time, mass change and acceptance; no new shelf-life or dried-product claim.

- Selected flow: Fresh cut Christmas trees `ab8a7694-6ea2-4cce-b535-9358f74c1189`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_hold, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hold`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Material actually discarded across the boundary (`hold_waste`)

Conditional umbrella for actual removed material sent to treatment; preserve organic, package and hazardous identities. Returned field residues and intended goods are not automatically waste.

- Selected flow: Discarded material by real destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_hold, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hold`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct substance releases and losses (`hold_releases`)

Conditional umbrella: identify each actual substance, water/air/soil receiving medium and mass basis from measurements or an explicitly evidenced model. Separate evaporation from solid residues; do not assume pollutant totals are concrete identities.

- Selected flow: Direct substance releases by receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_hold, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hold`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Protective presentation and grower dispatch (`dispatch`)

Node `dispatch` must complete the direct-release coverage reconciliation in `cp_direct_release_dispatch`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Accept trees after the actual upstream path; netting, string, tags and supports are recorded only when used. Separate reusable equipment from one-way packaging and net tree mass from package mass. Loading ends at the actual grower dispatch acceptance event; downstream carrier distribution is excluded.

#### Inputs

##### Product flows

###### Accepted fresh trees received for dispatch (`dispatch_tree_feed`)

Receive held_trees if holding occurred, otherwise accepted_grades; actual link and burden path are preserved.

- Selected flow: Fresh cut Christmas trees `ab8a7694-6ea2-4cce-b535-9358f74c1189`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_dispatch, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual protective packaging supplied (`dispatch_packaging`)

Record netting/string/tags/supports separately when used, including reuse and replacement logs; no packaging mass belongs in tree reference mass.

- Selected flow: Packaging materials by real identity
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_dispatch, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual energy and operation service requirement (`dispatch_energy`)

Conditional umbrella for actual energy and operation services at this node. Identify fuel/electricity, actual contracted handling and shared asset/service use separately with their own native property/unit and actual period/consumer. Apply delivered_energy only to actual energy subexchanges; services are not converted to MJ. Retain attributed service quantities and ensure the shared ledger charges each consumer once.

- Selected flow: Energy and operation service requirements
- Flow property / unit: Actual energy or service property / native unit
- Amount rule: Measured attributable quantity under cp_dispatch, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

##### Elementary flows

No additional compulsory exchange; document actual absence or out-of-scope classification rather than inventing a flow.

#### Outputs

##### Product flows

###### Fresh cut trees accepted at actual grower dispatch (`tree_dispatch`)

The sole reference product output: managed-grown fresh whole cut trees, species/height-grade qualified, accepted net mass excluding all packaging/supports at the real grower dispatch gate.

- Selected flow: Fresh cut Christmas trees `ab8a7694-6ea2-4cce-b535-9358f74c1189`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Range: Declared reference-output normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: (R/R) × 1 kg = 1 kg for matched positive accepted net final mass R; normalization identity only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

Reference normalization identity: Let R > 0 kg be the actual accepted net final product mass measured under the linked collection protocol for the same lot, boundary and period, excluding packaging, rejects and other products. Its normalized reference output is (R/R) × 1 kg = 1 kg. The 1..1 interval verifies that identity; it does not describe yield or uncertainty in the underlying measurement of R. Retain those measurements and their uncertainty independently.

###### Packaging accompanying tree handover (`dispatch_package_output`)

Declare packaging handed to the next actor as a separate mass record paired to tree lot; it is neither a second tree output nor automatically a co-product with independent sales value.

- Selected flow: Accompanying packaging by real identity
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_dispatch, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Material actually discarded across the boundary (`dispatch_waste`)

Conditional umbrella for actual removed material sent to treatment; preserve organic, package and hazardous identities. Returned field residues and intended goods are not automatically waste.

- Selected flow: Discarded material by real destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_dispatch, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct substance releases and losses (`dispatch_releases`)

Conditional umbrella: identify each actual substance, water/air/soil receiving medium and mass basis from measurements or an explicitly evidenced model. Separate evaporation from solid residues; do not assume pollutant totals are concrete identities.

- Selected flow: Direct substance releases by receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable quantity under cp_dispatch, divided by accepted net dispatch mass; retain the actual internal quantity before normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Range: Provisional non-default investigation screen; replace with reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow; provisional non-enforcing screen, not a default or a physical acceptance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| alloc_output_set | intended outputs | Enumerate every accepted tree grade, separately intended pruning bough good and independently sold downgraded good with its actual handover. Subdivide directly measured activities first; internal living/tree/package transfers are not additional sale outputs. | |
| alloc_shared_outputs | shared cohort burden | Where subdivision cannot resolve shared tree/bough/grade production, collect the actual causal usage or biological-output relationship, declare and justify a PCR-specific allocation method and retain a sensitivity alternative. Economic allocation requires contemporaneous comparable actual prices and justified failure of physical attribution; no equal shares or universal factors. Missing material evidence blocks finalization. | |
| alloc_years | grow; all periods | Carry establishment and annual inputs/asset usage by actual cohort and year; allocate harvested lots, still-living stock, failed stock and replacements once using the recorded production relationship. Repeated harvests cannot each absorb the same establishment burden, and failed crop burdens cannot vanish. | |
| alloc_assets_runs | all processes | Attribute each shared asset/service and cleaning/changeover event once across its real consuming nodes, sites, years and lots using measured service use. Maintain a ledger of assigned and residual burden; no independent full-charge in every node. | |
| alloc_returns | offspec_return; all rejects | Returns keep prior attributed burdens and acquire actual additional work once. Regrade/retrim losses retain their actual treatment or return route. Rejected material never enters accepted mass or produces an unsupported avoided-product credit. | |
| alloc_sites | contributing sites | Aggregate by summing compatible attributable quantities and dividing by summed accepted net mass, retaining species/grade/cohort mix and site coverage; do not average site intensities without weights or mix uncovered sites into zero burden. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_grow` | `grow` | All actual grow card exchanges, transfers and attributed assets | Calibrated records and indexed activity ledger | site; block; cohort; year; lot; species/provenance; event; actual substance/service; flow state; direction; actual amount/unit; acceptance/destination; linked upstream lot; shared asset period/use; cleanup/changeover; return status; actual tree count; height-grade; net fresh mass; moisture/state; land area; occupation start/end; prior/new land use; transformation evidence; gross/package tare where applicable | Calibrated weighing and paired lot/count measurements; actual meter/fuel/material invoices reconciled with consumption; stock/event records and destination receipts; explicit method/substance/medium records for direct releases; no assumed mass per tree | kg; native area and area-time; original energy/service units retained before justified conversion | Every actual event and lot; cultivation indexed annually within complete cohort | Establishment through each cultivation year, harvest and residual stock closure | Every contributing actual field or grower handling site; retain site boundaries | per 1 kg reference flow | Scale calibration; paired count/net-mass record; buyer acceptance and height-grade convention; traceable site/cohort ledger; consumption/stock reconciliation; actual return/treatment receipts |
| `cp_harvest` | `harvest` | All actual harvest card exchanges, transfers and attributed assets | Calibrated records and indexed activity ledger | site; block; cohort; year; lot; species/provenance; event; actual substance/service; flow state; direction; actual amount/unit; acceptance/destination; linked upstream lot; shared asset period/use; cleanup/changeover; return status; actual tree count; height-grade; net fresh mass; moisture/state; gross/package tare where applicable | Calibrated weighing and paired lot/count measurements; actual meter/fuel/material invoices reconciled with consumption; stock/event records and destination receipts; explicit method/substance/medium records for direct releases; no assumed mass per tree | kg; original energy/service units retained before justified conversion | Every actual event and lot; cultivation indexed annually within complete cohort | Actual campaign and every cut-to-dispatch event including period-crossing stocks | Every contributing actual field or grower handling site; retain site boundaries | per 1 kg reference flow | Scale calibration; paired count/net-mass record; buyer acceptance and height-grade convention; traceable site/cohort ledger; consumption/stock reconciliation; actual return/treatment receipts |
| `cp_condition` | `condition` | All actual condition card exchanges, transfers and attributed assets | Calibrated records and indexed activity ledger | site; block; cohort; year; lot; species/provenance; event; actual substance/service; flow state; direction; actual amount/unit; acceptance/destination; linked upstream lot; shared asset period/use; cleanup/changeover; return status; actual tree count; height-grade; net fresh mass; moisture/state; gross/package tare where applicable | Calibrated weighing and paired lot/count measurements; actual meter/fuel/material invoices reconciled with consumption; stock/event records and destination receipts; explicit method/substance/medium records for direct releases; no assumed mass per tree | kg; original energy/service units retained before justified conversion | Every actual event and lot; cultivation indexed annually within complete cohort | Actual campaign and every cut-to-dispatch event including period-crossing stocks | Every contributing actual field or grower handling site; retain site boundaries | per 1 kg reference flow | Scale calibration; paired count/net-mass record; buyer acceptance and height-grade convention; traceable site/cohort ledger; consumption/stock reconciliation; actual return/treatment receipts |
| `cp_grade` | `grade` | All actual grade card exchanges, transfers and attributed assets | Calibrated records and indexed activity ledger | site; block; cohort; year; lot; species/provenance; event; actual substance/service; flow state; direction; actual amount/unit; acceptance/destination; linked upstream lot; shared asset period/use; cleanup/changeover; return status; actual tree count; height-grade; net fresh mass; moisture/state; gross/package tare where applicable | Calibrated weighing and paired lot/count measurements; actual meter/fuel/material invoices reconciled with consumption; stock/event records and destination receipts; explicit method/substance/medium records for direct releases; no assumed mass per tree | kg; original energy/service units retained before justified conversion | Every actual event and lot; cultivation indexed annually within complete cohort | Actual campaign and every cut-to-dispatch event including period-crossing stocks | Every contributing actual field or grower handling site; retain site boundaries | per 1 kg reference flow | Scale calibration; paired count/net-mass record; buyer acceptance and height-grade convention; traceable site/cohort ledger; consumption/stock reconciliation; actual return/treatment receipts |
| `cp_hold` | `hold` | All actual hold card exchanges, transfers and attributed assets | Calibrated records and indexed activity ledger | site; block; cohort; year; lot; species/provenance; event; actual substance/service; flow state; direction; actual amount/unit; acceptance/destination; linked upstream lot; shared asset period/use; cleanup/changeover; return status; actual tree count; height-grade; net fresh mass; moisture/state; gross/package tare where applicable | Calibrated weighing and paired lot/count measurements; actual meter/fuel/material invoices reconciled with consumption; stock/event records and destination receipts; explicit method/substance/medium records for direct releases; no assumed mass per tree | kg; original energy/service units retained before justified conversion | Every actual event and lot; cultivation indexed annually within complete cohort | Actual campaign and every cut-to-dispatch event including period-crossing stocks | Every contributing actual field or grower handling site; retain site boundaries | per 1 kg reference flow | Scale calibration; paired count/net-mass record; buyer acceptance and height-grade convention; traceable site/cohort ledger; consumption/stock reconciliation; actual return/treatment receipts |
| `cp_dispatch` | `dispatch` | All actual dispatch card exchanges, transfers and attributed assets | Calibrated records and indexed activity ledger | site; block; cohort; year; lot; species/provenance; event; actual substance/service; flow state; direction; actual amount/unit; acceptance/destination; linked upstream lot; shared asset period/use; cleanup/changeover; return status; actual tree count; height-grade; net fresh mass; moisture/state; gross/package tare where applicable | Calibrated weighing and paired lot/count measurements; actual meter/fuel/material invoices reconciled with consumption; stock/event records and destination receipts; explicit method/substance/medium records for direct releases; no assumed mass per tree | kg; original energy/service units retained before justified conversion | Every actual event and lot; cultivation indexed annually within complete cohort | Actual campaign and every cut-to-dispatch event including period-crossing stocks | Every contributing actual field or grower handling site; retain site boundaries | per 1 kg reference flow | Scale calibration; paired count/net-mass record; buyer acceptance and height-grade convention; traceable site/cohort ledger; consumption/stock reconciliation; actual return/treatment receipts |
| `cp_direct_release_grow` | `grow` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_harvest` | `harvest` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_condition` | `condition` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_grade` | `grade` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_hold` | `hold` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_dispatch` | `dispatch` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot_mass | Separate physical-ledger and burden normalization | R is the positive final accepted net fresh cut-tree dispatch mass in kg for the same boundary, lot and period, excluding co-products, internal transfers and unaccepted stocks. Report original material, co-product and transfer totals Q as q_phys = Q/R without a burden-allocation share. Report environmental burdens B as b_ref = B_attributed/R only after one evidenced direct/output/period/asset attribution. Do not divide final-reference intensities again; cancel paired internal transfers only at whole-package aggregation, not as additional final outputs. | unallocated physical totals Q; burdens B and attribution records; matched positive reference mass R | exchange amount per 1 kg reference flow | |
| derive_count_records | count-based source records | Collect paired actual count and accepted net fresh mass for the same species/height-grade lot; reconstruct actual activity totals from source records, then use normalize_lot_mass. A bare count-only invoice is incomplete, not an assumed kilogram conversion. | paired actual count/mass; lot/species/height-grade; original activity records | traced lot activity totals and count-to-mass relationship | |
| reconcile_stocks | each biological and package handover | Reconcile actual input, output, return, remaining stock and loss separately for each state/period; fresh moisture and dry/biogenic terms are not interchangeable. Investigate residuals rather than inventing a balancing release. | indexed masses/counts; actual moisture/state; returns; loss; stock | disclosed reconciliation and unexplained residual | |
| energy_unit_equality | energy cards | Convert measured electricity kWh to MJ by multiplying by 3.6; retain original records and actual fuel heating-value convention separately. This is unit conversion, not electricity-to-heat equivalence. | actual electricity kWh; actual fuel records | delivered-energy quantities with identities retained | |
| attribution_ledger | all shared burdens | Reconcile the total source burden to allocations across actual output/site/cohort/year/asset/lot consumers and a disclosed residual. Record rework added burden separately from carried burden. | original burden; actual usage/output evidence; declared allocation | assigned and residual burdens without duplicates | |
| `calculate_direct_release_ledger` | `grow`; `harvest`; `condition`; `grade`; `hold`; `dispatch` | For each unique event, substance and medium, obtain raw release E from measurement or the cited applicable method using activity A and a compatible factor EF; use E = A * EF only for a genuinely simple-factor method, after checking units and abatement scope. Do not add different substances/media; retain an unallocated raw-release ledger. Divide attributed burden totals once by matched positive final reference quantity R; do not renormalize final-reference intensities or allocate a shared event twice. Unexplained material residuals are not automatically emissions and missing factors are not zero. | cp_direct_release_grow; cp_direct_release_harvest; cp_direct_release_condition; cp_direct_release_grade; cp_direct_release_hold; cp_direct_release_dispatch; existing emission cards; supplier coverage; reference quantity | Node/substance/medium-specific raw and attributed amounts and unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference and all actual exchanges | Prove managed origin and actual fresh species/height-grade state; verify each final concrete UUID and support before dataset use. An umbrella is not a verified exchange. | Source/cohort records; physical descriptions; confirmation evidence |
| dq_cohort | production history | Complete actual cultivation years, failed/replacement stocks and deferred harvests; estimated records require named method and uncertainty, not an invented standard lifetime. | Cohort/year/stock ledger with coverage gaps |
| dq_mass | dispatch and transfers | Exclude package/support tare and rejects; paired actual count/mass when count-based records exist; preserve freshness/moisture changes and material losses. | Calibrated scale and buyer acceptance records |
| dq_sites | contributing units | Enumerate every source block/site and handling yard; disclose represented output and omitted/uncovered shares. Keep incompatible species/grade/state populations separate. | Site-specific source quantities, weights and representativeness review |
| dq_graph | optional nodes and returns | Retain actual event path, bypass state, return links and stock cut-off; unknown handling state or destination blocks finalization. | Event-linked transfer/return receipts |
| dq_ranges | all screens | Replace provisional screens when empirical evidence exists; never use them as fallback amounts, limits, cut-offs or loss factors. | Foreground values and documented outlier investigation |
| dq_environment | actual natural exchanges | Specify substance and medium, original basis and model evidence; no invented nutrient-loss, biogenic credit, water or evaporation quantities. | Measurement/model protocol and complete carbon/water terms |
| `dq_range_units_evidence` | concrete exchanges in variable-unit cards | Establish any quantitative screen only after identifying its concrete exchange, reference property, explicit comparison unit and denominator, applicability, reviewed evidence and derivation. Preserve a unit conversion record that converts value and both bounds consistently; test the same physical quantity identically in equivalent units. Keep unresolved screens explicit and do not use them as amounts or completeness evidence. | linked collection protocols; property/unit and conversion records; compatible evidence and derivation; unresolved-screen register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| valid_reference | tree_dispatch | Reference link identifies the sole actual accepted dispatch product output and 1 kg net fresh mass; all qualifiers and actual support identities are declared and package/reject mass excluded. | |
| valid_cohort | grow; harvest | Check complete cohort/year/failed/replacement and remaining-stock accounting; upstream nursery/material/energy/asset gaps remain disclosed and prevent unsupported zero estimates. | |
| valid_path | all processes | Check actual optional-node bypasses, transfer input/output links, returns and handovers; same fresh product may reuse a compatible verified identity, but living stock/seedlings cannot inherit the cut-tree UUID. | |
| valid_outputs | all outputs | Enumerate accepted grades, downgraded goods, bough goods, off-spec return, field residues and waste with real destination and attribution. Exclude unresolved rejects from reference mass. | |
| valid_attribution | every shared ledger | Reconcile sites, periods, output sets, assets and handling campaigns; check cleaning/changeover events and no repeated full-burden allocation or unsupported substitution credits. | |
| valid_units | all rows | Check actual paired count/mass conversion, one net dispatch denominator, fresh moisture/state and native substance/energy/service units; do not equate per-tree records directly to per-kg values. | |
| valid_bindings | all actual exchanges | Final dataset exchanges require independently verified specific UUIDs/property/unit; unresolved candidate identities and heterogeneous umbrellas cannot be silently accepted or supplied from a screen. | |
| valid_bilingual | all cards | Preserve EN/ZH process/direction/type/row ids, actual meaning, amounts/bases, bindings and Range metadata; regenerate the projection after canonical edits and inspect performed/skipped check coverage. | |
| `validate_direct_release_coverage` | `grow`; `harvest`; `condition`; `grade`; `hold`; `dispatch` | For every activated node, reconcile its activity list against cp_direct_release_grow; cp_direct_release_harvest; cp_direct_release_condition; cp_direct_release_grade; cp_direct_release_hold; cp_direct_release_dispatch: each relevant event must have quantified concrete elementary exchanges, evidenced upstream-service coverage, or evidenced absence of the activity. Missing/unknown is not zero and blocks data-package completeness. Check each actual substance/medium amount, method/factor units, concrete UUID and existing-card/service coverage for omissions or duplication; empty groups, purchased-electricity upstream emissions or another node's single CO2 card do not replace this node's on-site reconciliation. Shared-asset services must not create duplicate physical release events. |  |

- Reconcile required/conditional activation and upstream coverage against incoming state at each node; purchased completed-state feed must not duplicate growth, harvest or preparation. Equal classification does not replace state and gate matching.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for managed-grown fresh cut whole trees |
| downstream_use | secondary_dataset; background_dataset only within the declared compatible producer-gate scope after concrete exchange resolution and review |
| allowed_use | Traceable species/height-grade/cohort/site mix and actual fresh grower-dispatch state; measured net-mass normalization with count descriptors retained |
| excluded_use | Wild trees, replanting/potted trees, artificial/decorated goods, bough-only products, retail/use/end-of-life, generic per-tree claims without measured equivalence, zero-upstream or automatic carbon-credit claims |
| required_metadata | All reference qualifiers; actual process path; cohort/year and site coverage; original quantities/units; current identity confirmations; allocation/asset/run ledger; tree/package/reject/stock boundaries |
| required_quality_disclosure | Data gaps and proxies, measurement/model uncertainty, represented species/grade/site/year shares, unexplained balances, method-specific carbon/water terms and replaced or unresolved provisional screens |
| update_trigger | New species/grade mix, cultivation/harvest/holding technology, dispatch gate, source cohort/site coverage, supplier identity, actual allocation relationship or substantive new evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-christmas | official_guidance | https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf ; 03241 | Classification scope; exclusion of trees for replanting, not inventory defaults |
| osu-christmas-culture | extension_guidance | https://extension.oregonstate.edu/catalog/pnw-684-developing-quality-christmas-trees-pacific-northwest ; PNW684 | Managed multi-year cultivation context, species/height-grade distinction, possible bough goods and failed trees; no transferred numerical factors |
| osu-christmas-harvest | extension_guidance | https://extension.oregonstate.edu/sites/extd8/files/documents/pnw6.pdf ; PNW6 | Actual cut/yard/primary preparation/protection/loading activity evidence; historical regional guidance is not a universal process, legal rule or default |
