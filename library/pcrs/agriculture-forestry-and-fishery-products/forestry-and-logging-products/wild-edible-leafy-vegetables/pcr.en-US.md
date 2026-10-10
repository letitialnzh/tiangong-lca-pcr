---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-leafy-vegetables
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Fresh raw wild edible leafy vegetables

## 1. Scope and Applicability

This PCR covers fresh raw leaves and declared edible leafy shoots gathered from untended terrestrial sources, at the actual primary gatherer or preparer handover. Species, intended part, food-use eligibility, wild origin and acceptance conditions must be demonstrated for each lot. A commercial “wild” label alone is insufficient. Material intentionally grown or managed as an agricultural crop is outside this boundary.

This is a narrow leafy-vegetable methodology, not a catch-all for miscellaneous wild food. Exclude nuts, mushrooms, truffles, berries, roots, tubers, saps, gums, insects, animal products, aquatic algae, medicinal-only, spice-only and ornamental goods, cultivated leaves, and cooked, blanched, dried, frozen, fermented or extracted products. Verify that each intended species/part is not covered by a more explicit classification. Raw describes market state, not ready-to-eat safety: declare any required later preparation for safe use; it remains outside this fresh-primary boundary. Do not transfer a historical ethnobotanical example into a universal species acceptance or safety assertion.

The foreground package requires real trip, lot, site, species/part, handling and acceptance records. Optional operations may be bypassed according to actual records, but final acceptance always occurs. Unknown operations, origins, losses or acceptance status are gaps, never zero or an inactive default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-leafy-vegetables |
| classification_refs | cpc:3.0:03239; narrower fresh wild leafy-vegetable scope only |
| covered_products | Net accepted fresh raw leaves and declared edible leafy shoots from untended terrestrial sources, with demonstrated species/part food-use eligibility |
| excluded_products | Intentionally cultivated or agriculturally managed material; other explicitly classified wild food; roots, tubers, saps, gums, insects, animal products, aquatic algae, medicinal-only, spice-only and ornamental material; cooked, blanched, dried, frozen, fermented or extracted goods |
| representative_product | A species-qualified lot of fresh raw untended leafy vegetables accepted at its actual primary gatherer/preparer gate |
| production_route | Actual gathering or already gathered receipt; actual transfer; conditional trimming, cleaning and grading; conditional fresh holding/cooling; packaging when used and mandatory primary acceptance |
| market_state | Fresh raw, species/part/grade-qualified net accepted leafy material, not an automatic ready-to-eat claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh raw wild edible leafy vegetables accepted at primary handover |
| How much | 1 kg net accepted product, excluding packaging, attached soil and nonaccepted parts |
| How well | Declared eligible species and leafy parts, untended origin, grade, actual moisture/surface-water state, acceptance and subsequent safe-use conditions |
| How long or cycle | Declared collection campaign and trip/lot chain, preparation and holding intervals, opening/closing stocks and actual primary dispatch; asset service/replacement periods separately linked |
| reference_flow_link | `leafy_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh raw wild edible leafy vegetables at primary handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; declared edible leafy parts; food-use eligibility and required later preparation; untended origin evidence; source site and season; collection/preparation/holding dates; accepted grade and net/tare method; moisture/surface-water state; actual primary handover gate; actual operations and bypasses; subsequent receiver boundary |

The reference product name and linked real output represent one accepted lot state. Other grades, internal transfers, rejects and stock are not additional reference outputs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted net fresh mass using cp_reference on a calibrated scale, excluding tare, attached soil and nonaccepted parts; preserve the declared species/parts and moisture state. |
| `fresh_mass_balance` | fresh leafy transfers and residues | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile actual incoming fresh mass, intended outputs, rejects, returned foreign matter, measured moisture/substance loss and stock change without assuming a generic trimming yield. Surface water is declared rather than silently converted to dry matter. |
| `actual_service_units` | energy and service umbrellas | Actual independently verified property | actual compatible unit | Preserve each actual carrier/service numerator and its own unit, factor basis and provider scope. Resolve required support identities before concrete exchange production; do not add incompatible services or infer transport from labor hours. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untended terrestrial source and actual gathering campaign, or already gathered received fresh leafy lot with supplier gate and upstream burdens |
| starting_condition_role | Natural-source removal owned once by the actual gatherer; received-product input retains independently supplied upstream responsibility |
| product_classification_scope | Only species/parts demonstrably eligible as wild fresh leafy vegetables not assigned to a more explicit class; CPC 03239 mapping is narrower |
| recursive_input_rule | Record a same-category already gathered input at its real supplier gate and link the supplier foreground/upstream dataset; stop recursive expansion at that declared interface without dropping or duplicating prior burdens. Internal rework is a linked transfer, not another purchased product or natural removal. |
| upstream_dataset_requirement | Require provider/state-compatible datasets for already gathered material, energy, water, materials, equipment and actual services; disclose proxies, gaps and inclusive services |
| disclosure | Source/site/season/species/parts and wild-origin evidence; own versus received portions; operations and bypasses; all intended outputs and recipients; stock periods; shared asset consumers; rejection, return and environmental release destinations; true acceptance and safe-use conditions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_wild_eligibility` | source and product scope | Require untended origin, species/part eligibility and n.e.c. review against more explicit classes. Exclude managed cultivation and nonleafy or processed states; raw acceptance is not ready-to-eat certification. | `unsd-cpc-03239`; `fao-wild-plant-foods` |
| `boundary_removal_once` | gather | Own natural-source removal and gathering together for each physically removed portion, independent from later cleaning and grading. Do not add a duplicate harvest/removal node or natural-source input for already gathered purchased portions. No automatic growth or carbon credit arises from wild origin. | `unsd-cpc-03239` |
| `boundary_handling_gates` | all nodes | Gathering yields raw material; conditioning declares prepared grades and rejects; holding protects a usable fresh state; handover protects/presents and accepts net fresh product. Record actual input/output states and recipients at each interface; bypass only with records. Downstream retail distribution, cooking and consumption are excluded. | `fao-wild-plant-foods`; `fao-fresh-storage` |
| `boundary_assets_periods_sites` | all nodes | Enumerate all contributing sites, trips including unsuccessful trips, reporting seasons, opening/closing stock, asset installation/service/replacement/termination periods and shared consumers. Include attributable actual work, access, transfer, cleaning and assets once within the common boundary, with provider and period evidence. | |
| `boundary_routes_exits` | rejects, returns and ancillary outputs | Link each off-spec state to its producing node and actual resort/return, sold downgrade, treatment or direct environmental return. Preserve previous burdens on loops and add only incremental work. Nonaccepted material cannot count as reference output; unknown balances are gaps. | |
| `boundary_optional_inputs` | actual water and emissions | Supplied cleaning water is a product; actual direct abstraction needs a correctly typed separate concrete exchange. Wastewater to treatment is waste; direct discharge requires identified substances and compartments. Do not infer refrigerant, evaporation or pollutants from an unexplained difference. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `gather` | Gathering and source receipt | `conditional` | Actual untended gathering or receipt of already gathered product occurs | source-to-collected-lot interface | per 1 kg reference flow |
| `condition` | Primary trimming, cleaning and grading | `conditional` | Actual trimming, cleaning or grade separation occurs | raw-to-declared-prepared-grade interface | per 1 kg reference flow |
| `hold` | Fresh holding and cooling | `conditional` | Actual fresh holding or cooling occurs before primary handover | fresh-state protection and stock responsibility | per 1 kg reference flow |
| `handover` | Packaging and primary acceptance | `required` | Every reference lot requires primary acceptance; packaging only when actually used | net accepted reference product handover | per 1 kg reference flow |

Collection campaigns contain traceable trip/lot batches; conditioning, holding and handover are traceable batches or explicitly declared continuous reporting intervals. Link cleaning/changeover, inputs, outputs, grades and every return to those intervals. An actual bought-in lot can enter receipt without own-gathering; an accepted raw lot can bypass conditioning or holding. Count each accepted physical portion once as final reference output; repeated inspection or handover-node visits during rework are recorded without adding another final output. Returned eligible lots link handover or hold back to condition/hold with original lot identifiers; stock at period end is not yet sold output.

Each node has one common energy, material or service umbrella rather than speculative carrier lists. An umbrella can expand into zero, one or multiple independently verified concrete exchanges only from actual records. Preserve native measurement, provider boundary and composition. The service-duration screen below covers recorded task hours only, not every concrete service unit or a conversion factor. Ranges other than the reference 1-to-1 normalization are broad provisional reasoned screening estimates, not measured evidence, defaults, acceptance ceilings or yields. Values outside them trigger investigation, not clipping; record verified absence as zero, unknown as missing.

### Process: Gathering and source receipt (`gather`)

#### Inputs

##### Product flows

###### Already gathered wild leafy material received (`gather_purchased`)

Actual purchased or supplied already gathered leafy lot, with species, parts, untended-source evidence, net/foreign-matter mass, supplier gate and upstream dataset. No second natural-source removal for the same portion.

- Selected flow: Already gathered wild leafy material received
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual energy supply (`gather_energy`)

One conditional umbrella for electricity and fuels actually used at this node. Preserve each carrier, provider, native meter/unit and conversion evidence; never add delivered energy to fuel energy for the same inclusive service.

- Selected flow: Actual energy supply
- Flow property / unit: Energy / MJ
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual operating and hygiene materials (`gather_materials`)

One umbrella for actual cleaning agents, consumables and attributable tool replacement materials. Identify each material and reuse/end-of-use status; do not assume fertilizer or pesticide application to an untended source.

- Selected flow: Actual operating and hygiene materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual attributable operations and asset services (`gather_services`)

One umbrella for actual contracted work, collector transfer and shared tools, vehicles or facilities attributable to this node. Record service duration, actual native quantities and provider boundary; hours are a collected task ledger, not a universal proxy for transport or capital manufacture. Resolve every concrete service property/unit separately and avoid inclusive-service duplication.

- Selected flow: Actual attributable operations and asset services
- Flow property / unit: Duration / h
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No additional routine flow is prescribed; record an actually required concrete exchange with the correct type and measurement evidence.

##### Elementary flows

###### Wild leafy biomass removed from the natural source (`gather_natural_leafy`)

Actual own-gathered leaves or declared leafy shoots crossing the environment-to-foreground boundary, including attributable removed portions later rejected. Record fresh moisture/parts/source site; exclude attached mineral soil, untouched standing vegetation and already gathered purchased feed. Land title does not determine this physical interface.

- Selected flow: Wild leafy biomass removed from the natural source
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Incidental source soil carried out with own-gathered leaves (`gather_incidental_soil`)

Conditional actual attached mineral foreign matter carried from the natural source into the foreground with own-gathered leaves. Measure the actual composition and wet mass separately from leafy biomass; exclude merely disturbed or unremoved soil. Foreign matter arriving inside purchased already gathered lots remains in the supplier/product ledger, without a second natural removal. Link each soil portion's true source and later returned or waste destination; unknown composition has no assumed sand/mining identity.

- Selected flow: Incidental source soil carried out with own-gathered leaves
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Collected raw wild leafy lot (`gather_collected`)

Measured raw lot sent to actual conditioning, holding or handover. Identify accepted target species/parts and attached foreign matter separately; capture lot/trip links, unsuccessful trips and transfer condition.

- Selected flow: Collected raw wild leafy lot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended goods leaving gathering (`gather_other_goods`)

Only actual intended distinct goods sold or transferred at a documented exit; enumerate identity, quantity and destination. Internal leafy transfers are not independently sold goods, and the reference scope is not enlarged.

- Selected flow: Other intended goods leaving gathering
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Gathering rejects sent to waste management (`gather_discard`)

Actual removed wrong parts, damaged material, litter or consumable waste transferred to a waste recipient. Declare each origin and destination; never treat an intended sold grade or physically returned source material as this waste.

- Selected flow: Gathering rejects sent to waste management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Removed leafy biomass physically returned to the source (`gather_returned_biomass`)

Only material previously removed and actually returned directly to the declared natural source, measured separately from untouched vegetation. No automatic avoided-waste, sequestration or biogenic-carbon credit.

- Selected flow: Removed leafy biomass physically returned to the source
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual identified direct emissions (`gather_direct_emissions`)

Conditional umbrella only for a measured or transparently estimated named substance and receiving compartment arising inside this node, including proven water-to-air loss or refrigerant leakage when relevant. Unknown mass imbalance is a gap, not invented evaporation; exclude wastewater to treatment and upstream/inclusive-service emissions. Preserve species, factor basis and evidence before resolving concrete exchanges.

- Selected flow: Actual identified direct emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gather`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary trimming, cleaning and grading (`condition`)

#### Inputs

##### Product flows

###### Raw wild leafy lot entering conditioning (`condition_feed`)

Measured gathered, purchased or returned lot entering trimming/cleaning/grading; record species, edible parts and incoming foreign matter. Rework carries its previous burdens and receives only new incremental work.

- Selected flow: Raw wild leafy lot entering conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied cleaning water (`condition_water`)

Only actual washing or hygiene water supplied as a product input. Identify provider, water quality, actual mass or evidenced volume-to-mass conversion; washing is not universally required. Direct abstraction, if real, needs its own correctly typed concrete exchange rather than relabelling this supply.

- Selected flow: Actual supplied cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual energy supply (`condition_energy`)

One conditional umbrella for electricity and fuels actually used at this node. Preserve each carrier, provider, native meter/unit and conversion evidence; never add delivered energy to fuel energy for the same inclusive service.

- Selected flow: Actual energy supply
- Flow property / unit: Energy / MJ
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual operating and hygiene materials (`condition_materials`)

One umbrella for actual cleaning agents, consumables and attributable tool replacement materials. Identify each material and reuse/end-of-use status; do not assume fertilizer or pesticide application to an untended source.

- Selected flow: Actual operating and hygiene materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual attributable operations and asset services (`condition_services`)

One umbrella for actual contracted work, collector transfer and shared tools, vehicles or facilities attributable to this node. Record service duration, actual native quantities and provider boundary; hours are a collected task ledger, not a universal proxy for transport or capital manufacture. Resolve every concrete service property/unit separately and avoid inclusive-service duplication.

- Selected flow: Actual attributable operations and asset services
- Flow property / unit: Duration / h
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No additional routine flow is prescribed; record an actually required concrete exchange with the correct type and measurement evidence.

##### Elementary flows

No additional routine flow is prescribed; record an actually required concrete exchange with the correct type and measurement evidence.

#### Outputs

##### Product flows

###### Prepared fresh raw accepted leafy grade (`condition_prepared`)

Declared target species/parts after actual trimming/cleaning and sorting, sent fresh to holding or acceptance. Declare each grade boundary, wet surface condition, associated handoff and measured net mass; no cooking, blanching, drying or extract state.

- Selected flow: Prepared fresh raw accepted leafy grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended grades and recovered goods (`condition_other_grades`)

Actual lower grade or separately intended usable goods at the conditioning exit; document the genuine recipient and part/species eligibility. Pending resort material remains an internal loop, never both an exit and accepted final output.

- Selected flow: Other intended grades and recovered goods
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Trimmings and rejects sent to waste management (`condition_solid_waste`)

Actual nonaccepted parts, spoilage, foreign matter and spent consumables, separated by actual waste destination. Keep edible intended goods, internal rework and directly returned soil outside this waste total.

- Selected flow: Trimmings and rejects sent to waste management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual effluent sent to wastewater treatment (`condition_wastewater`)

Only actual used water sent to a technosphere treatment receiver, with solids/contaminants and route declared. Reuse water is an internal transfer; direct environmental discharge requires separately resolved substances and compartments.

- Selected flow: Actual effluent sent to wastewater treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Attached source soil physically returned to the environment (`condition_returned_soil`)

Actual separately measured attached soil returned directly to its documented source/receiving environment. Identify composition and location before concrete identity; not mineral extraction, a generic pollutant, or an assumed quantity. Soil disposed to treatment belongs in solid waste instead.

- Selected flow: Attached source soil physically returned to the environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual identified direct emissions (`condition_direct_emissions`)

Conditional umbrella only for a measured or transparently estimated named substance and receiving compartment arising inside this node, including proven water-to-air loss or refrigerant leakage when relevant. Unknown mass imbalance is a gap, not invented evaporation; exclude wastewater to treatment and upstream/inclusive-service emissions. Preserve species, factor basis and evidence before resolving concrete exchanges.

- Selected flow: Actual identified direct emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_condition`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Fresh holding and cooling (`hold`)

#### Inputs

##### Product flows

###### Fresh raw leafy material entering holding (`hold_feed`)

Measured eligible fresh lot from gathering or conditioning; retain source, grade, acceptance status, opening-stock age and moisture condition. No assumption that ungraded stock is accepted final reference product.

- Selected flow: Fresh raw leafy material entering holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual energy supply (`hold_energy`)

One conditional umbrella for electricity and fuels actually used at this node. Preserve each carrier, provider, native meter/unit and conversion evidence; never add delivered energy to fuel energy for the same inclusive service.

- Selected flow: Actual energy supply
- Flow property / unit: Energy / MJ
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual operating and hygiene materials (`hold_materials`)

One umbrella for actual cleaning agents, consumables and attributable tool replacement materials. Identify each material and reuse/end-of-use status; do not assume fertilizer or pesticide application to an untended source.

- Selected flow: Actual operating and hygiene materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual attributable operations and asset services (`hold_services`)

One umbrella for actual contracted work, collector transfer and shared tools, vehicles or facilities attributable to this node. Record service duration, actual native quantities and provider boundary; hours are a collected task ledger, not a universal proxy for transport or capital manufacture. Resolve every concrete service property/unit separately and avoid inclusive-service duplication.

- Selected flow: Actual attributable operations and asset services
- Flow property / unit: Duration / h
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No additional routine flow is prescribed; record an actually required concrete exchange with the correct type and measurement evidence.

##### Elementary flows

No additional routine flow is prescribed; record an actually required concrete exchange with the correct type and measurement evidence.

#### Outputs

##### Product flows

###### Fresh raw leafy lot after holding (`hold_fresh`)

Measured still-fresh declared usable grade sent to primary acceptance. Record actual shade/cooling intervention, time, temperature and dispatch state without imposing universal shelf-life or setpoints; freezing or deliberate drying exits this PCR scope.

- Selected flow: Fresh raw leafy lot after holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended goods leaving fresh holding (`hold_other_goods`)

Actual intended lower-grade goods handed to their documented receiver; explicitly record state and downstream safe-use conditions. An internal transfer of the target lot is not another independent product exit.

- Selected flow: Other intended goods leaving fresh holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Holding rejects and spent materials sent to waste management (`hold_spoilage`)

Actual spoilage, rejected leaves, used hygiene materials or damaged containers delivered to declared waste recipients. Keep unresolved acceptance and unknown water loss as data gaps, not assumed waste masses.

- Selected flow: Holding rejects and spent materials sent to waste management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual identified direct emissions (`hold_direct_emissions`)

Conditional umbrella only for a measured or transparently estimated named substance and receiving compartment arising inside this node, including proven water-to-air loss or refrigerant leakage when relevant. Unknown mass imbalance is a gap, not invented evaporation; exclude wastewater to treatment and upstream/inclusive-service emissions. Preserve species, factor basis and evidence before resolving concrete exchanges.

- Selected flow: Actual identified direct emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging and primary acceptance (`handover`)

#### Inputs

##### Product flows

###### Fresh raw leafy lot entering final acceptance (`handover_feed`)

Measured fresh lot from actual upstream nodes, including direct bypass and returned eligible lots. Match species, parts, source, grade, wet condition and chain of custody to final acceptance.

- Selected flow: Fresh raw leafy lot entering final acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual packaging and presentation materials (`handover_packaging`)

One umbrella for actual protective containers, labels and hygiene/presentation consumables; identify material, tare, reusable asset ID, trips, losses and end-of-use receiver. Exclude package mass from reference product and do not assume single-use packaging.

- Selected flow: Actual packaging and presentation materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual energy supply (`handover_energy`)

One conditional umbrella for electricity and fuels actually used at this node. Preserve each carrier, provider, native meter/unit and conversion evidence; never add delivered energy to fuel energy for the same inclusive service.

- Selected flow: Actual energy supply
- Flow property / unit: Energy / MJ
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual attributable operations and asset services (`handover_services`)

One umbrella for actual contracted work, collector transfer and shared tools, vehicles or facilities attributable to this node. Record service duration, actual native quantities and provider boundary; hours are a collected task ledger, not a universal proxy for transport or capital manufacture. Resolve every concrete service property/unit separately and avoid inclusive-service duplication.

- Selected flow: Actual attributable operations and asset services
- Flow property / unit: Duration / h
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No additional routine flow is prescribed; record an actually required concrete exchange with the correct type and measurement evidence.

##### Elementary flows

No additional routine flow is prescribed; record an actually required concrete exchange with the correct type and measurement evidence.

#### Outputs

##### Product flows

###### Fresh raw wild edible leafy vegetables at primary handover (`leafy_handover`)

The actual accepted net reference output: declared eligible wild species and leafy parts at primary gatherer/preparer handover. Exclude tare, attached soil and nonaccepted parts; raw market state does not assert ready-to-eat safety. Record required later safe-use processing and receiver boundary.

- Selected flow: Fresh raw wild edible leafy vegetables at primary handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference`
- Range: Reference normalization only, not an empirical yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Other intended goods leaving primary handover (`handover_other_goods`)

Actual separately intended other grades or goods sold at final acceptance, with own recipient and burden share. Enumerate the output set; target accepted grade transferred internally is not sold twice.

- Selected flow: Other intended goods leaving primary handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Final rejects and packaging waste (`handover_rejects`)

Actual nonaccepted product, labels or damaged packaging exiting to waste management; identify origin and destination. Eligible returned leaves link back to conditioning or holding with original lot burdens, not reference output.

- Selected flow: Final rejects and packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual identified direct emissions (`handover_direct_emissions`)

Conditional umbrella only for a measured or transparently estimated named substance and receiving compartment arising inside this node, including proven water-to-air loss or refrigerant leakage when relevant. Unknown mass imbalance is a gap, not invented evaporation; exclude wastewater to treatment and upstream/inclusive-service emissions. Preserve species, factor basis and evidence before resolving concrete exchanges.

- Selected flow: Actual identified direct emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Recorded attributable amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Range: Broad provisional non-enforcing screening estimate; replace with reviewed records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_output_sets` | all intended outputs | Enumerate target leafy grades and all actual distinct intended sold or usable goods with their true handoffs. Use measured subdivision and direct burden tracing first. If shared burdens remain, document a causally justified physical split; if none is defensible, use disclosed period- and gate-matched economic values with sensitivity and reasons. Do not mix methods without precedence or apply automatic substitution credits. | |
| `allocation_shared_trips_assets` | trips and shared assets | Attribute collectors' successful and unsuccessful campaign trips, transfer vehicles, tools, containers and cooling/storage to identified consumers and periods using observed service use or a documented causal driver. Resolve idle capacity and failed-trip burdens explicitly. Service invoices that include energy/materials/asset use exclude their duplicate standalone entries. | |
| `allocation_period_sites_stock` | seasons, sites and stocks | Link gathering dates, conditioning/holding intervals, stock movements and asset service/replacement/termination to reporting periods; use measured site quantities and actual burden contributions, not an unweighted mean. Carry attributable stock burdens across periods, attribute remaining failed-trip/service burden to the evidenced campaign output set and disclose no-output periods separately. Never assign the same record twice or silently omit contributors. | |
| `allocation_rework_rejects` | returned lots and waste | Rework retains original burdens and adds only measured incremental operations. Actual sold downgrade is an intended output at its real exit; waste carries relevant handling/treatment under disclosed boundary; direct source returns have no automatic credit. Rejects and unaccepted stock never enlarge accepted reference mass. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | `handover` | net accepted reference mass and eligibility | acceptance and weighing record | lot ID; species; edible parts; food-use eligibility and later safe-use conditions; wild-origin evidence; source site/season; gate; gross; tare; attached soil; excluded parts; accepted net kg; moisture/surface water; recipient | Weigh accepted net fresh leafy product on a calibrated scale; reconcile same lot, part/grade acceptance and documented tare/foreign matter; retain species and source identification evidence. | kg | each accepted lot and dispatch | declared season with actual dispatch dates and stock carryover | each actual contributing source and acceptance site | per 1 kg reference flow | scale calibration; tare checks; acceptance and species/source records; chain of custody |
| `cp_gather` | `gather` | removal, receipt, work and every exit | trip/source/receipt and quantity ledger | site; season; trip/lot ID; successful and unsuccessful trips; collector hours; wild-origin evidence; species/parts; own and purchased portions; natural removal fresh kg; supplier gate/upstream dataset; attached foreign matter; incidental soil composition/wet kg and own-gathered versus purchased origin; true soil source and returned/waste destination; collected kg; returned biomass; intended other goods/receiver; waste recipient; energy/material/provider/native units; assets/consumers/service period; named emission/substance/compartment/activity/factor/basis | Weigh own collected and received portions, separate attached soil wet mass by true origin/composition, and actual exits; record complete trip work and absence evidence, provider and meter/invoice records, shared-asset use and independently measured or transparent substance-specific activity-factor emissions. Do not estimate removed biomass from a crop yield. | kg; MJ; h; actual verified native units | each trip, receipt, exit and service event | complete declared gathering campaign including no-output trips and asset service periods | all source sites and receiving nodes | per 1 kg reference flow | trip completeness; scale/meter checks; supplier records; allocation ledger; factor provenance and compartment evidence |
| `cp_condition` | `condition` | trim/clean/grade inputs and exits | lot preparation and grade ledger | incoming and returned lot IDs; species/parts; input/prepared/other-grade fresh kg; gross/net/foreign matter; supplied water mass or volume/density; energy/material/provider/native units; grade thresholds; actual recipient; solid rejects; wastewater route/quality; returned soil composition/site/mass; task hours/assets; named emissions/substance/compartment/activity/factor/basis; cleaning/changeover | Weigh actual preparation and grade states and residues, meter actual supplies and preserve return links; document washing performed or bypass, water conversion and treatment receiver. Measure separately returned source soil; record only identified actual emissions. | kg; MJ; h; actual verified native units | each preparation batch, grade exit, return and cleaning event | declared preparation periods and retained lot dates | each preparation site linked to source lots | per 1 kg reference flow | scale/meter calibration; grade/recipient records; water density evidence; reject/effluent tickets; return and factor records |
| `cp_hold` | `hold` | fresh protection, stock and service inputs/exits | storage and intervention ledger | lot/site/source/grade IDs; opening/closing stocks and dates; received/dispatched fresh kg; time/temperature/intervention; acceptance state; other goods/recipient; spoilage/waste destination; energy/material/provider/native units; task/asset use and consumer shares; actual leakage/substance/compartment/activity/factor/basis | Reconcile physical fresh stocks with dated receipt/dispatch and intervention records; record actual cooling/shade/service use and spoilage with recipients, and only identified measured or substance-specific estimated leakage/emissions. Preserve actual usable states, not an assumed shelf life. | kg; MJ; h; actual verified native units | each stock movement, intervention and loss plus reconciled reporting interval | all occupied and attributable idle service periods and stock carryover | each actual fresh-holding site and shared facility | per 1 kg reference flow | stock counts; calibrated weighing/meters; dated time/temperature logs; recipient tickets; service and factor evidence |
| `cp_handover` | `handover` | packaging, acceptance, ancillary exits and direct emissions | final dispatch/return and service ledger | upstream/returned lot ID; input fresh kg; packaging type/material/tare/reuse ID/trips/loss/end-of-use; accepted lot link cp_reference; other intended output identity/state/recipient/value; reject/waste or internal return; actual energy/provider/native units; service and asset consumers/period; named emissions/substance/compartment/activity/factor/basis | Reconcile actual final dispatch and packaging records with net acceptance, measured rejects and each true recipient; document reusable container cycles and returns. Retain real task/service/asset evidence and only identified actual direct emissions; exclude downstream distribution. | kg; MJ; h; actual verified native units | each acceptance, dispatch, return and packaging service event | complete declared primary handover period and reusable asset service life evidence | each primary acceptance site and all contributing upstream lots | per 1 kg reference flow | acceptance link; tare/reuse ledgers; invoices/meters; actual recipients; loop and factor evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_normalization` | all inventory rows | Divide each attributable measured exchange in its compatible actual unit by the corresponding accepted net fresh kg; reference output equals 1 kg. Preserve separate species/grade/provider units and the documented output-set attribution decision. | cp_reference; cp_gather; cp_condition; cp_hold; cp_handover; documented attribution and stock links | exchange amount per 1 kg reference flow | |
| `stock_and_mass_reconciliation` | all physical leafy lots and residues | Reconcile opening plus incoming with closing plus intended exits, rejects, actual returns and independently evidenced water/substance losses on the declared fresh-state basis; disclose residual difference and investigate rather than invent an emission or yield. | actual dated fresh masses; foreign matter; surface-water state; actual loss measurements; lot links | lot/period mass reconciliation and quantified gap | |
| `shared_use_attribution` | shared work and assets | Trace direct work first, then partition shared measured service according to disclosed causal use and complete consumer-period shares. Record failed trips, idle occupancy, stock carryover and replacement/end-of-use once; no universal lifetime factor. | source trip and provider/service records; asset IDs; consumers; period links; attribution rationale | documented complete burden shares | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_origin` | every leafy lot | Demonstrate species/edible parts, n.e.c. eligibility, untended source and safe-use/acceptance conditions. Exclude or separately report uncertain or intentionally managed lots, never pool them into a wild reference. | species/part evidence; source management and chain-of-custody records; explicit classification review |
| `quality_measurement` | reference and flows | Retain calibrated net weighing, tare/foreign matter checks and moisture state; separate carrier/service units and their verified support. Range screens cannot replace measurements. | scale/meter evidence; actual conversion/factor provenance; cp_reference and node ledgers |
| `quality_sites_periods` | aggregated campaigns | Enumerate sites, lots, trips including unsuccessful ones, actual temporal phases and stocks; aggregate measured numerator and accepted output contributions, with exclusions and representativeness rationale disclosed. | contributing-site register; complete trip/period ledger; source-linked numerator/denominator audit |
| `quality_routes_coverage` | bypasses, rework and losses | Declare real process activation and every output destination, failure, internal loop and stock position. Measure each physical handoff for reconciliation, but do not count the same portion as independent final output at both an intermediate and final handoff; unknown loss, use or destination remains an explicit data gap. | dispatch/return records; waste/recipient evidence; quantity reconciliation and gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Check real leafy_handover output, 1 kg normalization, calibrated accepted net basis and complete species/part/origin/grade/gate/safe-use qualifiers. Do not count packaging, soil, unaccepted parts or stock as accepted reference mass. | |
| `validate_route` | process map | Check actual gathering/receipt, conditioning, fresh holding and acceptance states and explicit bypasses; final acceptance is mandatory. All rejected states require their producing node, loop or recipient; never count pending rework as accepted. | |
| `validate_balance_emissions` | inventory | Reconcile actual physical balances and distinguish intended goods, waste to treatment, physical environmental returns and identified direct substances/compartments. Unsupported evaporation, soil pollutant or crop growth credits fail review. | |
| `validate_attribution` | sites, outputs, periods and assets | Verify complete campaign sites/trips including unsuccessful ones, output handoffs, reporting periods, stock carryover and shared consumers; ensure complete causal shares and precedence, no omitted or double-counted records, inclusive services or sold transfers. | |
| `validate_units_identity` | concrete exchanges | Every concrete exchange requires verified identity and compatible property/unit/provider/state/destination. Preserve native energy/service units, evidenced conversions and disclosure of unresolved support; semantic umbrellas are not fixed dataset exchanges. | |
| `validate_ranges` | every card | Every card carries a Range. Except reference normalization, the present broad reasoned screens are provisional and non-enforcing; they do not substitute zero for unknown, cap measured values or provide publication-ready empirical yields. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground collection/preparation data package for an evidenced fresh raw wild leafy scope |
| downstream_use | secondary_dataset; background_dataset, only with disclosed quality and resolved concrete exchanges |
| allowed_use | Actual same-scope fresh primary leafy products with compatible species/parts, wild origin, state, period and handover |
| excluded_use | Generic miscellaneous wild foods; intentionally cultivated leaves; processed goods; ready-to-eat safety claims; downstream retail distribution/cooking; unsupported scope extrapolation or carbon credits |
| required_metadata | PCR identity; reference and all qualifiers; source/species/part/site/season chain; actual route and bypasses; all intended outputs/recipients; upstream datasets; accepted net method; stock and asset periods; allocation decisions; source evidence and concrete identities |
| required_quality_disclosure | Completeness and exclusions by contributing site/trip/period; unknown masses/emissions/acceptance; provisional Range status; measured/provider coverage; proxy and identity/support gaps; sensitivity and actual sampling/representativeness |
| update_trigger | Changed species/parts, source management, market state, handling/gate, service/provider or allocation; new measurement/conversion evidence or verified concrete flow identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-03239` | `official_guidance` | UNSD, CPC 3.0 subclass 03239: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03239 ; accessed 2026-10-09 | Untended gathering versus intentional management/cultivation and n.e.c. boundary, not a universal species acceptance or numeric inventory |
| `fao-wild-plant-foods` | `official_guidance` | FAO, Use and potential of wild plants in farm households: https://www.fao.org/4/w8801e/w8801e04.htm ; accessed 2026-10-09 | Distinct gathered leafy vegetables and plant-use/part diversity; raw versus later-prepared food distinction; no historic quantity/safety default |
| `fao-fresh-storage` | `official_guidance` | FAO, Food security, nutrition and health, fresh storage and distinct processing methods: https://www.fao.org/4/W6864E/w6864e06.htm ; accessed 2026-10-09 | Fresh handling/storage versus processed state; no universal shelf-life, setpoint, nutrient percentage or process yield |
