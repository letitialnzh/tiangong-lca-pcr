---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.fresh-forest-ornamental-foliage
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fresh forest ornamental foliage

## 1. Scope and Applicability

This PCR covers fresh, flowerless leafy forest plant parts gathered from an untended source and supplied for ornamentation at actual primary collector dispatch. Leafy sprays, leaves, fronds and boughs are included only with declared species and part. The representative material is fresh salal (Gaultheria shallon) foliage; the method is not a default recipe for every forest species. USDA forest-product evidence supports this wild collection context and leafy material identity, not universal grades, harvest volumes or current legal permissions (`usda-ntfp-2018`).

Exclude cultivated foliage, rooted living plants, flowers or flower buds, entire Christmas trees, mosses, lichens, grass-only goods, wreaths, bouquets and arrangements, and deliberately dried, dyed or chemically preserved material. CPC 03249 is broader than this fresh wild-leafy boundary; a narrower relation must not be read as a method for all class members (`unsd-cpc3-2025`).
## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.fresh-forest-ornamental-foliage` |
| classification_refs | CPC 3.0 03249; `narrower` |
| covered_products | Fresh untended-forest ornamental leafy sprays, leaves, fronds and boughs; species/part and accepted grades declared |
| excluded_products | Cultivated, rooted, flowering, moss/lichen/grass-only, composed, dried, dyed or chemically preserved goods; whole Christmas trees |
| representative_product | Fresh salal (Gaultheria shallon) leafy sprays; no fixed species mix |
| production_route | Actual forest gathering/removal; actual primary preparation if performed; grade/destination acceptance; actual protection/holding and primary collector dispatch |
| market_state | Fresh flowerless ornamental parts, loose or simply protected/tied, at documented primary collector handover; net accepted plant mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net accepted fresh flowerless ornamental forest foliage at actual primary collector dispatch |
| How much | 1 kg |
| How well | Declared species/part, accepted grade, freshness and moisture; no universal grade or shelf-life value |
| How long or cycle | One declared dispatch lot traced through gathering, actual handling and holding; report every contributing site and season, opening/closing stocks and actual holding intervals |
| reference_flow_link | `foliage_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh flowerless ornamental forest foliage |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and accepted plant part; untended forest origin and gathering location; ornamental intended use; absence of flowers/buds and roots; accepted grade/buyer specification; fresh state and moisture description; actual trimming and preservation operations including their absence; net-mass and tare method; lot/site/season and actual holding times; actual primary collector handover location and recipient; presentation and returnable-packaging status |

Declare every qualifier in the foreground package. An internal transfer may have the same product identity as dispatch, but the real reference row is only `foliage_handover`; process labels do not define extra sale gates.
## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_dispatch_mass to weigh accepted fresh plant parts on a calibrated scale; subtract actual package tare, free added water and rejects. Keep inherent fresh moisture declared. Never infer kilograms from bunch count or an assumed standard bunch weight. |
| `common_denominator` | all inventory rows | actual exchange property | actual recorded unit | Every inventory amount is per 1 kg reference flow. Collect lot totals and attributed activity quantities, divide by the same accepted net dispatch mass; do not divide by bunch count or an internal node output. Retain unnormalized totals and loss/stock reconciliation. |
| `actual_exchange_units` | energy, material, service and emission umbrellas | applicable property of each actual exchange | actual unit of each exchange | Keep each fuel/electricity/service and each substance quantity separately; convert only with evidenced units, factors and basis. Do not sum unlike service units or pollutant species into a fictitious exchange. Mass support references are not evidence of any product or pollutant UUID. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified untended forest plant source immediately before actual gathering, with location/species/parts evidenced; no managed-growing stage assumed |
| starting_condition_role | Natural source interface; gathered foliage becomes a technosphere product after removal |
| product_classification_scope | Fresh wild leafy subset of CPC 03249, not the complete ornamental-material class |
| recursive_input_rule | If already gathered same-category foliage is actually purchased, replace only its represented upstream gathering with a compatible linked dataset; preserve supplier origin/gate and do not add that gathering again |
| upstream_dataset_requirement | Compatible origin/state/part, boundary and net-mass basis; actual supplies/services require their own background records without duplicate owned activity |
| disclosure | Actual source sites, species/parts, gathered quantities, nodes and bypasses, internal transfers, seasons/stocks, handover, exclusions, returns and uncertainty |

Maintain a separate incidental-matter mass ledger: original source, gathering input foliage_incidental_removal, each batch-linked internal receipt/transfer, opening/closing stocks and actual return/sale/discard destination. Ornamental-part removal and incidental-matter quantities must not overlap. Environmental return outputs must trace to actual removal and node receipt; return cannot exceed the available actual material, and discrepancies require investigation. Incidental matter never contributes to foliage_handover net reference mass.

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `forest_origin` | source | Evidence untended forest origin and real plant part independently of access paperwork; do not convert access documents into cultivation or sustainability proof. The forest route is distinct from cultivated ornamental production. | `usda-ntfp-2018` |
| `actual_route` | foreground | Include actual collection/removal, transfers before handover, preparation if performed, acceptance and actual protective presentation/holding to primary collector dispatch. Do not invent preparation or coolant/water consumption for an absent intervention; retain its actual bypass and acceptance. |  |
| `natural_interface` | resource_and_loss | Separate the natural removed-material input from collected-product output. Material never removed is not an exchange; material removed then returned requires a recorded environmental destination. Distinguish intentional sales, internal transfers, discard and direct release. |  |
| `site_period_assets` | scope_and_attribution | List every source/handling site, lot, reporting season, stock interval, shared asset and consuming node. Apply measured site/period links and a documented service attribution; no universal asset lifetime or annualization value. Prevent gaps and duplicate site/stock/asset totals. |  |
| `end_gate` | dispatch | The actual primary collector handover ends the foreground boundary. A brush-shed or trader receipt is evidence only if it is the declared actual handover; exclude onward wholesale distribution, arrangement, retail and end-of-life. Do not truncate upstream gathering merely to fit a product-flow candidate. |  |

Select the route from actual incoming state and ownership. Qualified purchased harvested, extracted, prepared or graded feed may enter at its real receiving node; completed upstream operations are not mandatory foreground operations and standing stock or biological resources must not be charged again. Receiving cards record actual material, grade, wet/dry basis, receipt gate, upstream dataset and process coverage; add the actual receiving exchange if none exists. Bypass does not remove upstream burdens; actual operations cannot be skipped and final reference product, quality and gate remain unchanged.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `foliage_gather` | Forest gathering and removal | conditional | Only when actually inside the foreground; qualified purchased completed-state feed bypasses completed operations while retaining upstream burdens. | Harvest and resource removal; handover to actual primary handling or acceptance | per 1 kg reference flow |
| `foliage_prepare` | Primary removal of unwanted attached material | conditional | Actual trimming or removal of attached foreign matter occurs before acceptance | Primary conditioning; handover of fresh prepared foliage to acceptance | per 1 kg reference flow |
| `foliage_accept` | Quality and destination acceptance | conditional | Only when actually inside the foreground; qualified purchased completed-state feed bypasses completed operations while retaining upstream burdens. | Grading and sorting; accepted grades to dispatch, other grades to stated buyers or reinspection | per 1 kg reference flow |
| `foliage_dispatch` | Fresh protection, presentation and collector dispatch | required | Actual primary collector handover defines the reference lot | Protection and dispatch; bounded fresh holding only when actual intervention occurs | per 1 kg reference flow |

The route operates as indexed gathering/acceptance/dispatch lots, not a assumed continuous crop. Record actual cleaning, changeover, reinspection and shared-run events against each lot and period. All internal quantities remain measured; the final reference is not copied onto each intermediate. Each non-reference Range below is a broad provisional author screen, non-default and non-enforcing; it is not an emission factor, universal yield or permitted interval, and values outside it trigger investigation rather than replacement or rejection.

### Process: Forest gathering and removal (`foliage_gather`)

Gather declared leafy sprays, leaves, fronds or boughs from the identified forest source. Gathering owns the environment-to-collected-material interface; it is not growing, trimming or grading. Identify plant parts actually removed, unintended attached matter and material left in place separately. Collected foliage goes to actual primary handling or directly to acceptance, without inventing a market sale at that internal transfer.

#### Inputs

##### Product flows

###### Actual operational energy carriers (`foliage_gather_energy`)

One conditional energy umbrella for this node. Expand only the actual fuel, electricity or purchased heat exchanges; retain measured carrier units and traceable energy conversions. Include owned transport energy only here when it lies before dispatch; do not also add an embodied transport service for the same activity.

- Selected flow: Actual operational energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_gather; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_gather`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual operational supplies and services (`foliage_gather_supplies_services`)

One conditional supplies/service umbrella. Record each actual tool consumable, cleaning or protective material, purchased service or attributed shared-asset service separately in its true property/unit. Identify all consumers and periods; record packaging tare and reuse separately where relevant. No obligatory input is inferred from this card.

- Selected flow: Actual operational supplies and services
- Flow property / unit: Actual material or service property / declared native unit
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_gather; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_gather`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

No routine exchange prescribed; actual observed exchanges must still be recorded with concrete identity, direction, unit and evidence.

##### Elementary flows

###### Fresh ornamental plant parts removed from the untended forest source (`forest_foliage_removal`)

Record actual removed fresh plant parts at the environment interface, species/part/source qualified. Distinguish this resource transfer from the harvested technosphere product; reconcile accepted portions, removed rejects and returned portions without counting standing vegetation as purchased foliage.

- Selected flow: Fresh ornamental plant parts removed from the untended forest source
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_gather; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_gather`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual incidental natural matter removed with foliage (`foliage_incidental_removal`)

Record only incidental natural matter actually removed from its source environment during gathering, identifying actual material and source compartment. Exclude ornamental plant parts already counted in forest_foliage_removal. When carried with foliage, link node receipts/transfers through a separate auxiliary mass ledger; do not assume a product or waste status, or enter the environment input again during later preparation.

- Selected flow: Actual incidental natural matter removed with foliage
- Flow property / unit: Mass / kg
- Amount rule: Measure each actual incidental natural material removed using cp_foliage_gather, divided by the same accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_gather`
- Range: Provisional non-default, non-enforcing screen; each actual substance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Fresh flowerless ornamental forest foliage (`gathered_foliage`)

Fresh foliage collected for actual preparation or acceptance; its internal output role does not create a different market identity. Measure net plant-part mass, excluding unrelated attached matter, and keep the actual transfer destination.

- Selected flow: Fresh flowerless ornamental forest foliage
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_gather; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_gather`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual discarded material sent to a recorded waste destination (`foliage_gather_waste`)

Conditional waste umbrella: expand discarded damaged foliage, foreign matter or spent supplies only after actual discard and treatment destination are established. Natural matter returned to its source is not automatically manufactured waste; intended sale is a product, and internal reinspection is a transfer.

- Selected flow: Actual discarded material sent to a recorded waste destination
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_gather; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_gather`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct releases by substance and receiving medium (`foliage_gather_emissions`)

Conditional release umbrella: only measured or method-supported actual substances, receiving air/water/soil compartment and nonoverlapping activity scope become exchanges. Retain water vapor or other mass loss only when evidenced; do not infer pollutant species, atmospheric carbon uptake or an avoided-impact credit from foliage growth.

- Selected flow: Actual direct releases by substance and receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_gather; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_gather`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual natural material returned to the source environment (`foliage_gather_natural_return`)

Record only physically removed material actually returned to the documented source compartment, including species/part and destination. Material never removed stays outside the removed quantity; a delivered waste-treatment stream or sold residue belongs to its different actual route.

- Selected flow: Actual natural material returned to the source environment
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_gather; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_gather`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary removal of unwanted attached material (`foliage_prepare`)

Receive the measured gathered foliage, remove only the actual unwanted attached matter or damaged portions, and transfer usable fresh foliage to acceptance. Record actual equipment, water or cleaning supplies only if used; washing is not prescribed. Preparation does not dry, dye, chemically preserve or compose the foliage. Deliberately sold trim, discarded material and environmentally returned natural portions have different destinations and must not share one waste identity.

#### Inputs

##### Product flows

###### Actual operational energy carriers (`foliage_prepare_energy`)

One conditional energy umbrella for this node. Expand only the actual fuel, electricity or purchased heat exchanges; retain measured carrier units and traceable energy conversions. Include owned transport energy only here when it lies before dispatch; do not also add an embodied transport service for the same activity.

- Selected flow: Actual operational energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_prepare; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_prepare`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual operational supplies and services (`foliage_prepare_supplies_services`)

One conditional supplies/service umbrella. Record each actual tool consumable, cleaning or protective material, purchased service or attributed shared-asset service separately in its true property/unit. Identify all consumers and periods; record packaging tare and reuse separately where relevant. No obligatory input is inferred from this card.

- Selected flow: Actual operational supplies and services
- Flow property / unit: Actual material or service property / declared native unit
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_prepare; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_prepare`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

###### Fresh flowerless ornamental forest foliage (`foliage_prepare_foliage_in`)

Measure the actual fresh foliage accepted from the linked preceding node, including its source, part, grade and moisture description. Link the transfer record; it is not a new purchase unless a real supplier handover occurs. Preserve the same verified identity when the physical product is unchanged.

- Selected flow: Fresh flowerless ornamental forest foliage
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_prepare; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_prepare`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine exchange prescribed; actual observed exchanges must still be recorded with concrete identity, direction, unit and evidence.

##### Elementary flows

No routine exchange prescribed; actual observed exchanges must still be recorded with concrete identity, direction, unit and evidence.

#### Outputs

##### Product flows

###### Fresh flowerless ornamental forest foliage (`prepared_foliage`)

Fresh foliage after actual unwanted-material removal, transferred to acceptance. Trimming that leaves the same fresh ornamental identity does not by itself require a new UUID. Record any genuinely different physical form independently before binding.

- Selected flow: Fresh flowerless ornamental forest foliage
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_prepare; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_prepare`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended plant-part outputs and off-spec return transfers (`foliage_prepare_other_products`)

Conditional destination umbrella. Enumerate each deliberate separate sale and each off-spec reinspection/return by actual state and destination, rather than imposing one concrete UUID. Internal return retains accumulated burdens and is eliminated once when aggregating; separate sales need attribution. Neither rejected transfers nor downstream arranged goods count in the reference output.

- Selected flow: Other intended plant-part outputs and off-spec return transfers
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_prepare; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_prepare`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual discarded material sent to a recorded waste destination (`foliage_prepare_waste`)

Conditional waste umbrella: expand discarded damaged foliage, foreign matter or spent supplies only after actual discard and treatment destination are established. Natural matter returned to its source is not automatically manufactured waste; intended sale is a product, and internal reinspection is a transfer.

- Selected flow: Actual discarded material sent to a recorded waste destination
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_prepare; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_prepare`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct releases by substance and receiving medium (`foliage_prepare_emissions`)

Conditional release umbrella: only measured or method-supported actual substances, receiving air/water/soil compartment and nonoverlapping activity scope become exchanges. Retain water vapor or other mass loss only when evidenced; do not infer pollutant species, atmospheric carbon uptake or an avoided-impact credit from foliage growth.

- Selected flow: Actual direct releases by substance and receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_prepare; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_prepare`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual natural material returned to the source environment (`foliage_prepare_natural_return`)

Record only physically removed material actually returned to the documented source compartment, including species/part and destination. Material never removed stays outside the removed quantity; a delivered waste-treatment stream or sold residue belongs to its different actual route.

- Selected flow: Actual natural material returned to the source environment
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_prepare; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_prepare`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Quality and destination acceptance (`foliage_accept`)

Inspect incoming fresh foliage from gathering or actual preparation by declared species, part, freshness, damage and buyer specification. Enumerate every accepted grade, lower-value sale, off-spec return and discarded fraction with a handover record. The common foliage card can cover several compatible accepted grades only when each grade remains recorded; an incompatible species, part or treated state needs a separate concrete identity. Reinspection returns to this node or actual preparation; it does not create fresh raw material twice.

#### Inputs

##### Product flows

###### Actual operational energy carriers (`foliage_accept_energy`)

One conditional energy umbrella for this node. Expand only the actual fuel, electricity or purchased heat exchanges; retain measured carrier units and traceable energy conversions. Include owned transport energy only here when it lies before dispatch; do not also add an embodied transport service for the same activity.

- Selected flow: Actual operational energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_accept; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_accept`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual operational supplies and services (`foliage_accept_supplies_services`)

One conditional supplies/service umbrella. Record each actual tool consumable, cleaning or protective material, purchased service or attributed shared-asset service separately in its true property/unit. Identify all consumers and periods; record packaging tare and reuse separately where relevant. No obligatory input is inferred from this card.

- Selected flow: Actual operational supplies and services
- Flow property / unit: Actual material or service property / declared native unit
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_accept; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_accept`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

###### Fresh flowerless ornamental forest foliage (`foliage_accept_foliage_in`)

Measure the actual fresh foliage accepted from the linked preceding node, including its source, part, grade and moisture description. Link the transfer record; it is not a new purchase unless a real supplier handover occurs. Preserve the same verified identity when the physical product is unchanged.

- Selected flow: Fresh flowerless ornamental forest foliage
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_accept; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_accept`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine exchange prescribed; actual observed exchanges must still be recorded with concrete identity, direction, unit and evidence.

##### Elementary flows

No routine exchange prescribed; actual observed exchanges must still be recorded with concrete identity, direction, unit and evidence.

#### Outputs

##### Product flows

###### Fresh flowerless ornamental forest foliage (`accepted_foliage`)

Compatible accepted fresh grades transferred to dispatch, with each grade and species/part retained. Measure this internal quantity; losses during dispatch mean it is not automatically equal to the final reference mass.

- Selected flow: Fresh flowerless ornamental forest foliage
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_accept; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_accept`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended plant-part outputs and off-spec return transfers (`foliage_accept_other_products`)

Conditional destination umbrella. Enumerate each deliberate separate sale and each off-spec reinspection/return by actual state and destination, rather than imposing one concrete UUID. Internal return retains accumulated burdens and is eliminated once when aggregating; separate sales need attribution. Neither rejected transfers nor downstream arranged goods count in the reference output.

- Selected flow: Other intended plant-part outputs and off-spec return transfers
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_accept; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_accept`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual discarded material sent to a recorded waste destination (`foliage_accept_waste`)

Conditional waste umbrella: expand discarded damaged foliage, foreign matter or spent supplies only after actual discard and treatment destination are established. Natural matter returned to its source is not automatically manufactured waste; intended sale is a product, and internal reinspection is a transfer.

- Selected flow: Actual discarded material sent to a recorded waste destination
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_accept; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_accept`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct releases by substance and receiving medium (`foliage_accept_emissions`)

Conditional release umbrella: only measured or method-supported actual substances, receiving air/water/soil compartment and nonoverlapping activity scope become exchanges. Retain water vapor or other mass loss only when evidenced; do not infer pollutant species, atmospheric carbon uptake or an avoided-impact credit from foliage growth.

- Selected flow: Actual direct releases by substance and receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_accept; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_accept`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Fresh protection, presentation and collector dispatch (`foliage_dispatch`)

Receive accepted fresh foliage and prepare the actual handover, loose or simply tied/protected. Record any actual shading, cooled holding, moisture-maintenance intervention, ties, wrap, labels or returnable crates without requiring any of them. If preservation occurs, record the before/after usable fresh state, duration, inputs, actual losses and downstream handover here. Passive waiting alone creates no fictitious preservation exchange. Fresh product mass excludes ties, wraps, crate tare, free added water and rejected portions. This node does not compose wreaths or bouquets; downstream distribution after handover is excluded.

#### Inputs

##### Product flows

###### Actual operational energy carriers (`foliage_dispatch_energy`)

One conditional energy umbrella for this node. Expand only the actual fuel, electricity or purchased heat exchanges; retain measured carrier units and traceable energy conversions. Include owned transport energy only here when it lies before dispatch; do not also add an embodied transport service for the same activity.

- Selected flow: Actual operational energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_dispatch; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_dispatch`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual operational supplies and services (`foliage_dispatch_supplies_services`)

One conditional supplies/service umbrella. Record each actual tool consumable, cleaning or protective material, purchased service or attributed shared-asset service separately in its true property/unit. Identify all consumers and periods; record packaging tare and reuse separately where relevant. No obligatory input is inferred from this card.

- Selected flow: Actual operational supplies and services
- Flow property / unit: Actual material or service property / declared native unit
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_dispatch; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_dispatch`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

###### Fresh flowerless ornamental forest foliage (`foliage_dispatch_foliage_in`)

Measure the actual fresh foliage accepted from the linked preceding node, including its source, part, grade and moisture description. Link the transfer record; it is not a new purchase unless a real supplier handover occurs. Preserve the same verified identity when the physical product is unchanged.

- Selected flow: Fresh flowerless ornamental forest foliage
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_dispatch; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_dispatch`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine exchange prescribed; actual observed exchanges must still be recorded with concrete identity, direction, unit and evidence.

##### Elementary flows

No routine exchange prescribed; actual observed exchanges must still be recorded with concrete identity, direction, unit and evidence.

#### Outputs

##### Product flows

###### Fresh flowerless ornamental forest foliage (`foliage_handover`)

The real final reference product: net accepted fresh flowerless ornamental foliage at the declared primary collector handover. Preserve actual origin, species/part, grade, moisture, simple presentation and gate; internal uses of this identity do not create multiple final outputs.

- Selected flow: Fresh flowerless ornamental forest foliage
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch_mass`
- Range: Declared reference-output normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: (R/R) × 1 kg = 1 kg for matched positive accepted net final mass R; normalization identity only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

Reference normalization identity: Let R > 0 kg be the actual accepted net final product mass measured under the linked collection protocol for the same lot, boundary and period, excluding packaging, rejects and other products. Its normalized reference output is (R/R) × 1 kg = 1 kg. The 1..1 interval verifies that identity; it does not describe yield or uncertainty in the underlying measurement of R. Retain those measurements and their uncertainty independently.

###### Other intended plant-part outputs and off-spec return transfers (`foliage_dispatch_other_products`)

Conditional destination umbrella. Enumerate each deliberate separate sale and each off-spec reinspection/return by actual state and destination, rather than imposing one concrete UUID. Internal return retains accumulated burdens and is eliminated once when aggregating; separate sales need attribution. Neither rejected transfers nor downstream arranged goods count in the reference output.

- Selected flow: Other intended plant-part outputs and off-spec return transfers
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_dispatch; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_dispatch`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual discarded material sent to a recorded waste destination (`foliage_dispatch_waste`)

Conditional waste umbrella: expand discarded damaged foliage, foreign matter or spent supplies only after actual discard and treatment destination are established. Natural matter returned to its source is not automatically manufactured waste; intended sale is a product, and internal reinspection is a transfer.

- Selected flow: Actual discarded material sent to a recorded waste destination
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_dispatch; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_dispatch`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual direct releases by substance and receiving medium (`foliage_dispatch_emissions`)

Conditional release umbrella: only measured or method-supported actual substances, receiving air/water/soil compartment and nonoverlapping activity scope become exchanges. Retain water vapor or other mass loss only when evidenced; do not infer pollutant species, atmospheric carbon uptake or an avoided-impact credit from foliage growth.

- Selected flow: Actual direct releases by substance and receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity for each concrete exchange from cp_foliage_dispatch; preserve substance or carrier and actual zero; use attributable quantity divided by accepted net dispatch mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foliage_dispatch`
- Range: Provisional non-default, non-enforcing screen; each actual exchange, not a sum of unlike identities
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg / kg
  - Basis: per 1 kg reference flow; not a replacement value or mandatory bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_attribution` | intended_outputs | Enumerate each intended accepted grade and each separately sold plant-part output, with its real handover and quantity. First separate independently measured activities; for inseparable common gathering/handling of compatible fresh grades, use measured net accepted fresh mass shares only with disclosed moisture/part equivalence. Incompatible products require a documented causal decision; absent evidence blocks finalization, not an automatic mass or price default. |  |
| `reject_burdens` | rejects_and_returns | Discarded, downgraded and internally returned quantities do not enlarge the reference denominator. Retain the burdens of rejects and repeated work, assign deliberate sales explicitly, reconcile loops and eliminate the internal transfer once in aggregation; no automatic avoided-treatment or carbon credit. |  |
| `period_site_sharing` | sites_periods_and_shared_assets | Trace batches and opening/closing stocks across source sites, seasons and actual storage phases. Attribute shared vehicle, tool, holding-space or contracted-service use by evidenced actual service use within declared periods; retain full consumer totals and allocation shares. Aggregate attributable totals divided by total compatible accepted dispatch mass, not an unweighted mean of site intensities. Do not count the same shared run, purchased service or asset twice. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_foliage_gather` | `foliage_gather` | All actual input/output roles; expand concrete exchanges | activity_and_transfer_records | lot; site; season; species/part/state; from/to node; gross/tare/net masses; incidental-matter kind/source/separate receipts-transfers-returns-stock ledger; actual energy/material/service amounts and units; emission substance/medium and method; origin; destinations; returned/rejected quantities; asset consumers/use; opening/closing stocks; start/end; intervention/bypass; handover ids | Measure calibrated lot weights and actual meters/invoices; reconcile transfer ids, destinations, stock intervals and actual activity logs; preserve supplier and substance verification. No missing measurement is a default zero. | kg; MJ; actual supply/service units | Each lot/event and reporting period | Full declared lot and linked prior/next stock periods | Every contributing forest and handling site | per 1 kg reference flow | Calibration, traceable meters/invoices, species/origin/part evidence, destination records, nonduplicated stock and consumer links |
| `cp_foliage_prepare` | `foliage_prepare` | All actual input/output roles; expand concrete exchanges | activity_and_transfer_records | lot; site; season; species/part/state; from/to node; gross/tare/net masses; incidental-matter kind/source/separate receipts-transfers-returns-stock ledger; actual energy/material/service amounts and units; emission substance/medium and method; origin; destinations; returned/rejected quantities; asset consumers/use; opening/closing stocks; start/end; intervention/bypass; handover ids | Measure calibrated lot weights and actual meters/invoices; reconcile transfer ids, destinations, stock intervals and actual activity logs; preserve supplier and substance verification. No missing measurement is a default zero. | kg; MJ; actual supply/service units | Each lot/event and reporting period | Full declared lot and linked prior/next stock periods | Every contributing forest and handling site | per 1 kg reference flow | Calibration, traceable meters/invoices, species/origin/part evidence, destination records, nonduplicated stock and consumer links |
| `cp_foliage_accept` | `foliage_accept` | All actual input/output roles; expand concrete exchanges | activity_and_transfer_records | lot; site; season; species/part/state; from/to node; gross/tare/net masses; incidental-matter kind/source/separate receipts-transfers-returns-stock ledger; actual energy/material/service amounts and units; emission substance/medium and method; origin; destinations; returned/rejected quantities; asset consumers/use; opening/closing stocks; start/end; intervention/bypass; handover ids | Measure calibrated lot weights and actual meters/invoices; reconcile transfer ids, destinations, stock intervals and actual activity logs; preserve supplier and substance verification. No missing measurement is a default zero. | kg; MJ; actual supply/service units | Each lot/event and reporting period | Full declared lot and linked prior/next stock periods | Every contributing forest and handling site | per 1 kg reference flow | Calibration, traceable meters/invoices, species/origin/part evidence, destination records, nonduplicated stock and consumer links |
| `cp_foliage_dispatch` | `foliage_dispatch` | All actual input/output roles; expand concrete exchanges | activity_and_transfer_records | lot; site; season; species/part/state; from/to node; gross/tare/net masses; incidental-matter kind/source/separate receipts-transfers-returns-stock ledger; actual energy/material/service amounts and units; emission substance/medium and method; origin; destinations; returned/rejected quantities; asset consumers/use; opening/closing stocks; start/end; intervention/bypass; handover ids | Measure calibrated lot weights and actual meters/invoices; reconcile transfer ids, destinations, stock intervals and actual activity logs; preserve supplier and substance verification. No missing measurement is a default zero. | kg; MJ; actual supply/service units | Each lot/event and reporting period | Full declared lot and linked prior/next stock periods | Every contributing forest and handling site | per 1 kg reference flow | Calibration, traceable meters/invoices, species/origin/part evidence, destination records, nonduplicated stock and consumer links |
| `cp_dispatch_mass` | `foliage_dispatch` | actual reference product | net_mass_acceptance | lot; species/part; accepted grade; fresh moisture; scale id/calibration; gross/tare; free added water; rejected mass; accepted net fresh dispatch mass; actual collector handover; site/season; bunch count as qualifier only | Weigh accepted fresh plant parts on a calibrated scale; exclude actual packaging tare, free added water and rejects; reconcile buyer acceptance and source lots. Bunch-only invoices require measured representative lot weighing, not an assumed conversion. | kg | Each dispatch lot | All dispatches and linked gathering/holding periods | All origin and handover sites | accepted net fresh dispatch mass; per 1 kg reference flow | Scale calibration, tare checks, moisture description, origin/part and signed dispatch acceptance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_basis` | all inventory rows | For each concrete exchange, divide the attributable lot total by accepted net fresh dispatch mass in kg; preserve original units and activity/attribution evidence. The final reference product remains exactly 1 kg, while internal transfers keep their measured ratios. | cp_dispatch_mass; cp_foliage_gather; cp_foliage_prepare; cp_foliage_accept; cp_foliage_dispatch | actual exchange quantity per 1 kg reference flow |  |
| `lot_reconciliation` | source, node transfers and stocks | Reconcile opening stock plus actual receipts/removal against accepted transfers/dispatch, deliberate other sales, discard, natural return, evidenced physical moisture loss and closing stock. Keep attached foreign matter on its own measured basis. Investigate differences; never insert a residual as an invented emission. | cp_foliage_gather; cp_foliage_prepare; cp_foliage_accept; cp_foliage_dispatch | lot/node/period reconciliation record |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | reference_and_transfers | Verify actual species, plant part, forest origin, ornamental use and state at final gate; paperwork alone or a provider name is insufficient. Compatible internal transfers may retain the same identity. | lot species/part, source-site and acceptance evidence |
| `coverage_quality` | site_and_period | Retain every contributor, lot, return, hold and stock interval, no omitted sites, duplicate transfers or unweighted intensity average; state exclusions and representativeness. | contributor register, period/lot links and aggregation reconciliation |
| `missingness_quality` | conditional_exchanges | Differentiate measured zero, activity absent and missing information. Identify each actual umbrella exchange and verify its UUID/support before final TIDAS use; replace provisional screens only with reviewed evidence, not forced values. | event/missingness register, concrete identity and support evidence |
| `dq_range_units_evidence` | concrete exchanges in variable-unit cards | Establish any quantitative screen only after identifying its concrete exchange, reference property, explicit comparison unit and denominator, applicability, reviewed evidence and derivation. Preserve a unit conversion record that converts value and both bounds consistently; test the same physical quantity identically in equivalent units. Keep unresolved screens explicit and do not use them as amounts or completeness evidence. | linked collection protocols; property/unit and conversion records; compatible evidence and derivation; unresolved-screen register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference_product | Confirm final product is fresh, flowerless, forest-sourced ornamental leafy material; all required qualifiers, actual primary handover, calibrated net-mass protocol and real foliage_handover link are present. Reference amount is exactly 1 kg; intermediate quantities remain measured. |  |
| `validate_coverage` | routes_sites_periods | Check actual node activation/bypasses, every contributing site, season, opening/closing stock, loss and destination. Validate lot mode, cleaning/changeover events, reinspection loops and all accepted/other output handovers; no reject contributes accepted denominator. |  |
| `validate_attribution` | shared_burdens | Check causal or compatible fresh-mass attribution, actual service-use evidence, all consumers/periods and complete allocation shares; no duplicate owned transport/purchased service, shared asset, period or internal transfer burden. |  |
| `validate_exchanges` | inventory_rows | Every actual exchange must have concrete verified identity, actual direction/type/property/unit, observed or method-supported quantity and collection link. A provisional screen is not a value or acceptance threshold; no elementary substance or credit is inferred. Checker success does not verify a UUID. |  |
| `validate_parity` | bilingual_projection | Check corresponding process/direction/type/row_id cards, amount rules, Range metadata, reference identity, rule ids and collection basis in both languages and generated projection. |  |

- Reconcile required/conditional activation and upstream coverage against incoming state at each node; purchased completed-state feed must not duplicate growth, harvest or preparation. Equal classification does not replace state and gate matching.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared fresh wild ornamental leafy product through the verified primary collector gate; linked background use only for compatible source/state/basis |
| excluded_use | Cultivated or transformed/composed goods, other CPC03249 members, post-handover distribution/use/end-of-life, undisclosed species/source or unverified final exchanges |
| required_metadata | species and accepted plant part; untended forest origin and gathering location; ornamental intended use; absence of flowers/buds and roots; accepted grade/buyer specification; fresh state and moisture description; actual trimming and preservation operations including their absence; net-mass and tare method; lot/site/season and actual holding times; actual primary collector handover location and recipient; presentation and returnable-packaging status; reference net mass; source sites/periods; actual nodes; stock and transfer graph; attribution decision; verified concrete identities |
| required_quality_disclosure | Actual coverage, measured versus missing/absent quantities, scale/transfer evidence, origin/part proof, allocation basis, uncertainty and provisional-range status; candidate identity gaps cannot be hidden by a check pass |
| update_trigger | New species/part/origin or actual gate, material treatment, route/node changes, loss/moisture measurement, new sites/periods/shared assets, improved UUID or quantitative evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | [UNSD CPC3.0 explanatory notes, printed p40](https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf) | Broader ornamental plant-part definition, exclusion of flowers/buds; narrower relation only |
| `usda-ntfp-2018` | official_guidance | [USDA Forest Service, SRS-GTR-232 (2018), chapters2 and7, forest floral greens](https://research.fs.usda.gov/treesearch/download/56484.pdf) | Forest leafy ornamental products and collection context; not numeric ranges, current permissions or universal operations |
