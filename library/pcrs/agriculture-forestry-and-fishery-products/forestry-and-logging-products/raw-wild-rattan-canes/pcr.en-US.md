---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.raw-wild-rattan-canes
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Fresh raw wild rattan canes

## 1. Scope and Applicability

This PCR produces a foreground inventory for fresh mature round rattan stems collected from untended forest and delivered at the actual primary collector dispatch. Backward tracing begins from that accepted physical output, not from a classification-wide list of plant materials. Loose leaf-sheath/thorn removal and actual cut-to-length are permitted only while the epidermis remains intact. Species, dimensions, source origin, moisture and treatment history must be evidenced.

Exclude plantation/cultivated cane, deliberately dried/seasoned cane, oil/heat curing, fumigation, epidermis scraping, peeling, splitting, bent/fabricated/woven goods and furniture. Bamboo, reeds, straw and other stuffing/padding materials are not this product. Historical route descriptions support possible operations, not universal quantities, current access legality or sustainable-harvest claims.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.raw-wild-rattan-canes |
| classification_refs | CPC 3.0 03252; narrower proposed semantic coverage |
| covered_products | Mature wild round fresh rattan stems with intact epidermis and declared actual sheath removal/length preparation at primary collector dispatch |
| excluded_products | Cultivated stems; dried, cured, fumigated, skin-scraped, peeled or split stems; manufactured goods; other plant materials |
| representative_product | Fresh raw wild rattan canes, epidermis intact |
| production_route | Wild stem harvest/removal; actual primary sheath/length preparation; grade acceptance; conditional fresh holding; bundling and collector dispatch |
| market_state | Fresh round stem feedstock, not processed cane or plaited goods |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted fresh round wild rattan stem feedstock with intact epidermis at actual primary collector dispatch |
| How much | 1 kg net accepted fresh stem mass, excluding ties, packaging, foreign matter and removed sheath |
| How well | Declared species, mature-source evidence, buyer acceptance, diameter/usable length, moisture, intact skin and actual defects |
| How long or cycle | Declared collection campaign and reporting period; actual harvest/preparation/holding/dispatch dates and stock carryover; no assumed rotation or shelf life |
| reference_flow_link | `rattan_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh raw wild rattan canes, epidermis intact |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Botanical species/mix; untended forest source and location; maturity evidence; stem/epidermis/sheath condition; diameter and usable length class; buyer grade and defects; fresh moisture method/time/basis; harvest and dispatch dates; actual collector handover location/recipient; net mass and tare method; treatment history; lot and contributing sites; attribution period |

Declare every required qualifier in foreground metadata or equivalent package notes. A missing qualifier is a data gap, not an average default. Net fresh mass is not dry mass, bundle gross mass, linear length or a claim of functional equivalence between grades.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted net fresh stem mass with calibrated weighing and recorded tare under cp_dispatch; normalize attributable lot exchanges to per 1 kg reference flow. |
| `fresh_basis` | all stem transfers | Mass | kg | Keep contemporaneous fresh mass and moisture observations; do not substitute dry or gross quantities. Reconcile measured mass change, sheath/stem removals, stocks and losses without forcing every transfer to equal the final reference. |
| `count_length_conversion` | count, length or bundle source records | Mass | kg | Link source counts/lengths to measured same-lot accepted net mass under cp_dispatch; never assume a per-cane or per-metre weight or divide by nominal bundle count. |
| `native_exchange_units` | conditional material, energy, service and release cards | Each concrete verified property | native unit | Retain actual substance/carrier/service unit and documented conversion; do not sum unlike numerator units or force energy and transport into kg. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Mature rattan in a declared untended forest source; alternatively a traced collected lot whose own source removal and upstream collection are independently evidenced once |
| starting_condition_role | Source interface for own harvest, or an explicit purchased-product recursion cut with matched upstream collection coverage |
| product_classification_scope | Fresh round wild rattan stems only; not the entire 03252 class or cultivated/processed cane |
| recursive_input_rule | A purchased collected/prepared same-category input is a product transfer with matched upstream data, not a second current-site natural removal; disclose upstream cut, coverage, identity and losses |
| upstream_dataset_requirement | Matching species/origin/fresh-state/gate and quantity-basis supplier collection data plus actual input, energy, transport and asset support datasets; gaps prevent finalization |
| disclosure | Sites and source units, reporting periods/campaigns, actual optional operations/bypasses, ownership and handovers, stocks/returns, shared assets, other outputs, allocation and exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `wild_source_ownership` | source and harvest | Own harvesting includes stem resource removal and capture in one node, independent of later sheath/length preparation. Do not duplicate removal in a second node, invent cultivation, or record purchased cane as an elementary input. | fao-rattan-resource; fao-thailand-rattan-route |
| `state_limit` | every lot and handoff | Epidermis remains intact; document sheath removal separately. Scraping the epidermis, curing, chemical preservation, fumigation, deliberate drying or splitting triggers an excluded-state exit, not relabelling into accepted fresh cane. | fao-rattan-glossary; fao-rattan-resource |
| `actual_route` | preparation, grading, holding, dispatch | Trace actual transfers backward from dispatched net mass; preparation/holding may bypass with evidence. Same physical fresh product need not acquire a new identity at each internal node. Actual gate compatibility still requires source/handover evidence. | fao-thailand-rattan-route |
| `loss_and_destinations` | all material movements | Separate accepted grades, separately sold lower grades, rework loops, incidental natural residues returned at source, managed discard and measured direct releases; record every real destination and stock difference. | fao-rattan-resource |
| `site_period_assets` | common boundary | Enumerate contributing source sites, collector units, collection/holding/dispatch periods and shared tools, vehicles or shelter services. Attribute each measured contribution once; disclose replacements, opening/closing stocks and missing coverage. | |
| `dispatch_cut` | final handover | Include actual collector-side loading/bundling and in-bound transfers; exclude downstream transport, processing beyond the expressly permitted sheath/thorn removal and cut-to-length, manufacturing, retail use and disposal. Packaging is not net stem reference mass. | fao-thailand-rattan-route |
| `boundary_direct_release_coverage` | `wild_harvest`; `primary_prepare`; `grade_accept`; `fresh_hold`; `collector_dispatch` | Reconcile on-site combustion, actual applications and fugitive releases/leaks at every activated node through unique activity-substance-receiving-medium records in cp_direct_release_wild_harvest; cp_direct_release_primary_prepare; cp_direct_release_grade_accept; cp_direct_release_fresh_hold; cp_direct_release_collector_dispatch. Upstream production of purchased fuel or chemicals does not replace emissions from their use on site; verify coverage and avoid double counting the same activity inside a supplier service. Evidence must support non-activity; missing data are not zero. This obligation does not expand the existing product gate or downstream-use boundary and does not presume combustion, fertilization, chemicals or equipment occur. |  |

Select the route from actual incoming state and ownership. Qualified purchased harvested, extracted, prepared or graded feed may enter at its real receiving node; completed upstream operations are not mandatory foreground operations and standing stock or biological resources must not be charged again. Receiving cards record actual material, grade, wet/dry basis, receipt gate, upstream dataset and process coverage; add the actual receiving exchange if none exists. Bypass does not remove upstream burdens; actual operations cannot be skipped and final reference product, quality and gate remain unchanged.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wild_harvest` | Wild forest removal and harvesting | conditional | Own removal/harvest occurs in the declared untended forest source. Purchased collected stems enter the actual receiving node with verified wild origin and matched upstream removal/harvest coverage; no second natural removal. | Fresh collected round stems handed to primary handling; harvest owns removal, not conditioning. | per 1 kg reference flow; actual internal quantities |
| `primary_prepare` | Primary sheath removal and length preparation | `conditional` | Actual loose sheath/thorn removal or cut-to-length is performed without epidermis removal. | Prepared fresh round stems handed to grading; bypass when already qualified. | per 1 kg reference flow; actual internal quantities |
| `grade_accept` | Grade and destination acceptance | `required` | Every lot has declared buyer acceptance and grade/destination records. | Accepted stems, lower-grade sale, off-spec return or discard are distinguished. | per 1 kg reference flow; actual internal quantities |
| `fresh_hold` | Fresh protective holding | `conditional` | Actual bounded holding/protection occurs without deliberate drying, curing or chemical treatment. | Same fresh epidermis-intact accepted stem handed to dispatch; no shelf-life claim. | per 1 kg reference flow; actual internal quantities |
| `collector_dispatch` | Bundling and primary collector dispatch | `required` | Actual handover is documented; bundling/ties only when used. | 1 kg net accepted fresh cane at true collector dispatch; downstream processing/haul excluded. | per 1 kg reference flow; actual internal quantities |

Collection and handling use declared lot/campaign mode, not an assumed continuous factory. Every actual run, cleanup, tool replacement or changeover has a site, period and lot attribution key. Shared burdens are recorded once across consuming nodes. Grading returns link to primary_prepare; later off-spec fresh lots may return to grade_accept, with retained burden and no duplicate final sale. Unknown destination or treatment history prevents acceptance.

Internal rattan product-transfer amounts are net stem mass; actual attached sheath, incidental vegetation or soil travels in a separately linked physical-input/transfer ledger under cp_harvest and cp_prepare. That ledger identifies material and source compartment, records incoming and transferred attached quantities, and reconciles each later natural return or managed discard independently from stem removal. Purchased attached material inherits its supplier product record rather than causing a second current-site natural withdrawal.

Common inputs, energy and services remain one conditional umbrella per node. Concrete substances, carriers, destination and unit are supplied by actual records and verified before final exchange creation. A service with zero actual use stays zero; no washing, cooling, chemicals or motor fuel is invented merely because a card exists. Direct-release umbrellas require substance and receiving medium before binding. Non-reference provisional Range blocks below are broad author screening notes, non-default and non-enforcing, not published allowed ranges or evidence that a flow occurs.

### Process: Wild forest removal and harvesting (`wild_harvest`)

Node `wild_harvest` must complete the direct-release coverage reconciliation in `cp_direct_release_wild_harvest`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Fresh collected round stems handed to primary handling; harvest owns removal, not conditioning.

#### Inputs

##### Product flows

###### Actual material, energy and service inputs (`wild_harvest_supplies`)

Conditional umbrella: record zero, one or multiple verified concrete exchanges actually used, including tools/shared-asset services and attributable in-bound transfer. Preserve each exchange's own property/unit; labour time is an attribution observation, not an invented product exchange.

- Selected flow: Actual material, energy and service inputs
- Flow property / unit: Each verified concrete exchange property / native unit
- Amount rule: Record actual attributable lot quantity and normalize with cp_harvest and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

##### Elementary flows

###### Actual attached natural sheath and incidental material (`harvest_attached_natural_material`)

Conditional physical-input ledger for actual leaf sheaths, incidental vegetation or soil removed with the stem from the environment. Record substance/material and source compartment separately and transfer its attached quantity to preparation when present; never include it in net stem removal or accepted reference mass. Its later return/discard must reconcile to this input; no soil or other incidental material is assumed if absent.

- Selected flow: Actual attached natural sheath and incidental material
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_harvest and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Wild rattan stem biomass removed from untended forest (`wild_rattan_removal`)

Own-source stem removal at the environment/technosphere interface, including attributable discarded stem portions on the declared fresh basis. Retained standing plants are not purchased products; mature-source evidence is required. Attached sheath/foreign material is separately reconciled, not included blindly in accepted net stem mass.

- Selected flow: Wild rattan stem biomass removed from untended forest
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_harvest and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Fresh collected wild round rattan stems (`harvested_rattan`)

Fresh cut round stems, with actual sheath/thorn/usable-length condition declared, transferred to preparation or directly to grading when already qualified. Measure actual quantity; it is not automatically 1 kg merely because it feeds the final reference.

- Selected flow: Fresh collected wild round rattan stems
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_harvest and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual discarded material and packaging (`wild_harvest_discard`)

Conditional umbrella for actual off-site discarded cane/sheath/foreign matter or used packaging, with receiving treatment and legal waste classification from records. No automatic conversion of forest residues into managed waste. Rework/downgrade is not discard.

- Selected flow: Actual discarded material and packaging
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_harvest and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual natural plant residues returned to forest (`harvest_residue_return`)

Record plant fractions actually left/returned at source and environmental destination. Distinguish stem biomass, sheath and incidental vegetation; do not assert chemical identity or carbon credit from their aggregate mass.

- Selected flow: Actual natural plant residues returned to forest
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_harvest and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual substance-specific direct releases (`wild_harvest_direct_releases`)

Conditional umbrella: identify each real pollutant/substance, receiving compartment and amount basis before concrete exchange binding; include measured water-vapour loss only when demonstrated. Exclude upstream fuel emissions already owned by supplying datasets; no biomass-removal-as-emission shortcut.

- Selected flow: Actual substance-specific direct releases
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_harvest and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Primary sheath removal and length preparation (`primary_prepare`)

Node `primary_prepare` must complete the direct-release coverage reconciliation in `cp_direct_release_primary_prepare`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Prepared fresh round stems handed to grading; bypass when already qualified.

#### Inputs

##### Product flows

###### Fresh collected wild round rattan stems (`prepare_feed`)

Reconcile the harvest handoff or a separately evidenced purchased collected lot. For purchased feed, bring matching upstream collection data once; never also record its forest removal in the current collector inventory.

- Selected flow: Fresh collected wild round rattan stems
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_prepare and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual material, energy and service inputs (`primary_prepare_supplies`)

Conditional umbrella: record zero, one or multiple verified concrete exchanges actually used, including tools/shared-asset services and attributable in-bound transfer. Preserve each exchange's own property/unit; labour time is an attribution observation, not an invented product exchange.

- Selected flow: Actual material, energy and service inputs
- Flow property / unit: Each verified concrete exchange property / native unit
- Amount rule: Record actual attributable lot quantity and normalize with cp_prepare and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh raw wild rattan canes, epidermis intact (`prepared_rattan`)

Loose leaf sheaths/thorns removed and length prepared only when actually done; silicified epidermis remains intact. Epidermis scraping, deliberate drying, oil/heat curing, fumigation or chemical preservation leaves this PCR scope; the expressly permitted sheath/thorn removal and cut-to-length do not. Transfer same fresh physical product to grade acceptance.

- Selected flow: Fresh raw wild rattan canes, epidermis intact
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_prepare and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual discarded material and packaging (`primary_prepare_discard`)

Conditional umbrella for actual off-site discarded cane/sheath/foreign matter or used packaging, with receiving treatment and legal waste classification from records. No automatic conversion of forest residues into managed waste. Rework/downgrade is not discard.

- Selected flow: Actual discarded material and packaging
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_prepare and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual natural sheath and stem residues returned to environment (`prepare_residue_return`)

Record actual sheath and cut stem fractions with destination; material transferred to a product buyer or waste manager is not an elementary return. Do not double count the harvest return.

- Selected flow: Actual natural sheath and stem residues returned to environment
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_prepare and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual substance-specific direct releases (`primary_prepare_direct_releases`)

Conditional umbrella: identify each real pollutant/substance, receiving compartment and amount basis before concrete exchange binding; include measured water-vapour loss only when demonstrated. Exclude upstream fuel emissions already owned by supplying datasets; no biomass-removal-as-emission shortcut.

- Selected flow: Actual substance-specific direct releases
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_prepare and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Grade and destination acceptance (`grade_accept`)

Node `grade_accept` must complete the direct-release coverage reconciliation in `cp_direct_release_grade_accept`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Accepted stems, lower-grade sale, off-spec return or discard are distinguished.

#### Inputs

##### Product flows

###### Fresh raw wild rattan canes, epidermis intact (`grade_feed`)

Received fresh round stems with epidermis intact, including eligible harvest bypass and properly linked returned lots. Record species, dimensions, moisture and actual defects; the gate is an internal acceptance decision, not a new market identity.

- Selected flow: Fresh raw wild rattan canes, epidermis intact
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_grade and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual material, energy and service inputs (`grade_accept_supplies`)

Conditional umbrella: record zero, one or multiple verified concrete exchanges actually used, including tools/shared-asset services and attributable in-bound transfer. Preserve each exchange's own property/unit; labour time is an attribution observation, not an invented product exchange.

- Selected flow: Actual material, energy and service inputs
- Flow property / unit: Each verified concrete exchange property / native unit
- Amount rule: Record actual attributable lot quantity and normalize with cp_grade and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh raw wild rattan canes, epidermis intact (`accepted_rattan`)

Accepted declared grade sent to fresh holding or directly to dispatch; all accepted grades remain separately tagged and measured. Do not invent a universal diameter, length or defect threshold.

- Selected flow: Fresh raw wild rattan canes, epidermis intact
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_grade and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual lower-grade sale or rework-return stems (`rattan_other_destination`)

Conditional umbrella: enumerate each real grade/destination, buyer handoff or return to primary_prepare. Rework is an internal loop, not a second final sale; deliberate processing outside the permitted state is a separately declared boundary exit, not accepted reference output.

- Selected flow: Actual lower-grade sale or rework-return stems
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_grade and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual discarded material and packaging (`grade_accept_discard`)

Conditional umbrella for actual off-site discarded cane/sheath/foreign matter or used packaging, with receiving treatment and legal waste classification from records. No automatic conversion of forest residues into managed waste. Rework/downgrade is not discard.

- Selected flow: Actual discarded material and packaging
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_grade and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Fresh protective holding (`fresh_hold`)

Node `fresh_hold` must complete the direct-release coverage reconciliation in `cp_direct_release_fresh_hold`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

Same fresh epidermis-intact accepted stem handed to dispatch; no shelf-life claim.

#### Inputs

##### Product flows

###### Fresh raw wild rattan canes, epidermis intact (`hold_feed`)

Measure accepted incoming fresh stems linked to the same lot/grade; holding does not by itself change product identity.

- Selected flow: Fresh raw wild rattan canes, epidermis intact
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_hold and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hold`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual material, energy and service inputs (`fresh_hold_supplies`)

Conditional umbrella: record zero, one or multiple verified concrete exchanges actually used, including tools/shared-asset services and attributable in-bound transfer. Preserve each exchange's own property/unit; labour time is an attribution observation, not an invented product exchange.

- Selected flow: Actual material, energy and service inputs
- Flow property / unit: Each verified concrete exchange property / native unit
- Amount rule: Record actual attributable lot quantity and normalize with cp_hold and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hold`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh raw wild rattan canes, epidermis intact (`held_rattan`)

Same fresh epidermis-intact round stems handed to dispatch after actual protected holding. Any intentional seasoning, submerged chemical treatment, fumigation or curing is excluded; report elapsed time and moisture change without assuming preservation effectiveness.

- Selected flow: Fresh raw wild rattan canes, epidermis intact
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_hold and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hold`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual discarded material and packaging (`fresh_hold_discard`)

Conditional umbrella for actual off-site discarded cane/sheath/foreign matter or used packaging, with receiving treatment and legal waste classification from records. No automatic conversion of forest residues into managed waste. Rework/downgrade is not discard.

- Selected flow: Actual discarded material and packaging
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_hold and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hold`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual substance-specific direct releases (`fresh_hold_direct_releases`)

Conditional umbrella: identify each real pollutant/substance, receiving compartment and amount basis before concrete exchange binding; include measured water-vapour loss only when demonstrated. Exclude upstream fuel emissions already owned by supplying datasets; no biomass-removal-as-emission shortcut.

- Selected flow: Actual substance-specific direct releases
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_hold and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hold`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Bundling and primary collector dispatch (`collector_dispatch`)

Node `collector_dispatch` must complete the direct-release coverage reconciliation in `cp_direct_release_collector_dispatch`. Expand each actual substance/medium into an output elementary exchange at this node with a measured or evidence-calculated amount; link existing emission cards to the same event record rather than duplicating them. Distinguish non-occurrence, verified upstream-service coverage and missing evidence; an empty elementary-flow group does not satisfy this requirement.

1 kg net accepted fresh cane at true collector dispatch; downstream processing/haul excluded.

#### Inputs

##### Product flows

###### Fresh raw wild rattan canes, epidermis intact (`dispatch_feed`)

Reconcile accepted feed from grade_accept or fresh_hold and any eligible internal return. Final dispatched quantity excludes unresolved rejects, and input quantity remains measured rather than fixed to the reference.

- Selected flow: Fresh raw wild rattan canes, epidermis intact
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_dispatch and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual material, energy and service inputs (`collector_dispatch_supplies`)

Conditional umbrella: record zero, one or multiple verified concrete exchanges actually used, including tools/shared-asset services and attributable in-bound transfer. Preserve each exchange's own property/unit; labour time is an attribution observation, not an invented product exchange.

- Selected flow: Actual material, energy and service inputs
- Flow property / unit: Each verified concrete exchange property / native unit
- Amount rule: Record actual attributable lot quantity and normalize with cp_dispatch and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh raw wild rattan canes, epidermis intact (`rattan_dispatch`)

Actual accepted net fresh stem mass at primary collector dispatch; skin intact and buyer/source qualifiers declared. The same product identity may be used at compatible internal transfers; actual dispatch location/handover is independently evidenced, not inferred from the process name.

- Selected flow: Fresh raw wild rattan canes, epidermis intact
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Declared reference-output normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: (R/R) × 1 kg = 1 kg for matched positive accepted net final mass R; normalization identity only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

Reference normalization identity: Let R > 0 kg be the actual accepted net final product mass measured under the linked collection protocol for the same lot, boundary and period, excluding packaging, rejects and other products. Its normalized reference output is (R/R) × 1 kg = 1 kg. The 1..1 interval verifies that identity; it does not describe yield or uncertainty in the underlying measurement of R. Retain those measurements and their uncertainty independently.

##### Waste flows

###### Actual discarded material and packaging (`collector_dispatch_discard`)

Conditional umbrella for actual off-site discarded cane/sheath/foreign matter or used packaging, with receiving treatment and legal waste classification from records. No automatic conversion of forest residues into managed waste. Rework/downgrade is not discard.

- Selected flow: Actual discarded material and packaging
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_dispatch and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual substance-specific direct releases (`collector_dispatch_direct_releases`)

Conditional umbrella: identify each real pollutant/substance, receiving compartment and amount basis before concrete exchange binding; include measured water-vapour loss only when demonstrated. Exclude upstream fuel emissions already owned by supplying datasets; no biomass-removal-as-emission shortcut.

- Selected flow: Actual substance-specific direct releases
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable lot quantity and normalize with cp_dispatch and measured net dispatch mass under cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- Range: Provisional non-enforcing screen, not a default or allowed threshold
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow; screen each concrete exchange separately, never sum unlike substances/units
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_precedence` | reference grade and other intended outputs | First subdivide independently measured activity. Attribute any remaining common collector burden to actual marketed fresh stem grades by contemporaneous net fresh mass only when the physical service relationship is supported; otherwise document the evidenced causal basis and sensitivity before finalization. No automatic credit for sheaths, trimmings or forest residues. | |
| `rework_burdens` | rejected, returned and downgraded lots | Retain previously incurred burden on linked returned lots and add actual repeat handling once. A return is not a fresh removal or a final dispatched output. Excluded processed-state exits and lower-grade sales retain explicit burden and handoff decisions. | |
| `shared_asset_periods` | tools, vehicles, shelter and services | Identify all consuming nodes/lots and service periods; use measured use/time/load or evidenced capacity share. Record asset service life, replacement and termination evidence without a universal lifetime. Prevent counting an already inclusive service and its component energy/asset burdens twice. | |
| `stocks_sites` | campaigns, periods and sites | Reconcile opening/closing stocks and inter-period transfers with their retained burdens. Aggregate site-level attributable quantities and accepted net mass under the same reference boundary, not unweighted per-site averages; disclose exclusions and representativeness. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_harvest` | wild_harvest | resource removal, collected stems, residues, actual inputs/releases | source and lot logs | lot; species; source unit/location; wild origin; maturity; removal/stem/sheath mass; date; actual tools/services; natural return; discard destination; substance/medium; asset/use keys | Source inspection and traceable calibrated weighing, input meters/invoices and actual destination observations; document uncertainty of source stem mass separately from accepted dispatch mass | kg and each concrete native unit | each collection lot/event | collection campaign and reporting period | every forest source and collector unit | per 1 kg reference flow | source/species proof, calibrated scale/tare records, transfer and destination receipts; no legality claim solely from historical source |
| `cp_prepare` | primary_prepare | received/prepared stems, sheath/length removal and rejects | preparation lot record | lot; supplier/harvest link; incoming/outgoing mass; actual sheath and epidermis state; cuts; return; supplies; emissions; site/date; services | Weigh actual transfers/removals; inspect skin before/after; retain upstream identity/treatment declaration for bought feed; record actual meters and disposal | kg and each concrete native unit | each operated lot/event | actual preparation dates and stock periods | preparation units and matched suppliers | per 1 kg reference flow | before/after skin observations, same-lot weighing and upstream coverage reconciliation |
| `cp_grade` | grade_accept | grade acceptance, lower grades, returns and waste | acceptance and destination register | lot; species; diameter/length class; moisture; defects; grade criterion; accepted mass; other grade/destination mass; recipient; loop link; date | Inspect to declared buyer criteria and weigh each real grade/destination; record zero outputs explicitly when no alternate destination exists | kg and each concrete native unit | each lot and grade decision | grading dates and reporting periods | contributing grading/collector units | per 1 kg reference flow | acceptance proof and output-set balance with no universal grade threshold |
| `cp_hold` | fresh_hold | actual fresh holding, input/outgoing stocks, rejects/releases | holding interval and stock record | lot; site; opening/closing/in-out mass; time; moisture method/time; protection; actual inputs/services; direct substance/medium; rejects | Record actual bounded holding interval, contemporaneous weighing/moisture and real protective inputs; do not invent water or refrigerant use | kg and each concrete native unit | each lot/holding interval | actual holding dates including inter-period stocks | every actual holding unit | per 1 kg reference flow | lot-linked stock balance, fresh-state and treatment-history evidence, actual meter/use records |
| `cp_dispatch` | collector_dispatch | accepted net reference mass, packaging, handover and common attribution | calibrated weighing and dispatch register | lot; botanical species; source and skin/sheath state; grade; moisture basis/time; diameter/length; count/bundle/length if recorded; net accepted fresh mass; tare; packaging/reuse; recipient/location/date; period/site; input and reject quantities; shared assets and consuming nodes | Weigh accepted fresh stems on a calibrated scale with recorded tare excluding all packaging and foreign matter; reconcile actual buyer acceptance, source lot, treatment state and true primary collector handover | kg and each concrete native unit | each dispatch lot and attribution event | collection-to-dispatch period with stock carryover | all contributing collector and source units | per 1 kg reference flow | calibration/tare, acceptance/dispatch receipts, state photos/inspection, same-lot unit conversion and complete output/asset register |
| `cp_direct_release_wild_harvest` | `wild_harvest` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_primary_prepare` | `primary_prepare` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_grade_accept` | `grade_accept` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_fresh_hold` | `fresh_hold` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |
| `cp_direct_release_collector_dispatch` | `collector_dispatch` | Per-node actual direct releases and coverage decisions | Activity, measurement and method-evidence ledger | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | Match this node's input/application/equipment logs to release events. Determine each substance/medium amount by measurement or an applicable evidenced method and factor; retain factor provenance, unit conversions, abatement scope and uncertainty, without subtracting control twice when already included. Reconcile existing emission cards and contractor services once; create concrete output elementary exchanges for uncovered events and retain UUID verification evidence. Missing method, amount or identity prevents claiming a complete data package. | kg per substance/medium; retain native activity units | Each event and lot/reporting-period reconciliation | Periods matched to node activity and final reference lots | Actual activity sites; one owner for each shared event | per 1 kg reference flow | Meter/test evidence; activity records; original method/factor source; service scope; deduplication and coverage matrix |

All protocol aggregation cells use the common per 1 kg reference flow basis. The calculation rules below define the measured dispatch denominator and retained native numerator units; the protocol-specific site/lot/period, treatment-state and destination records remain mandatory. No internal return enters final accepted mass, no bought-feed removal is duplicated, and stocks are not repeatedly reported as outputs. Accompanying packaging, ties and reusable supports are separately counted/tared, tracked to actual handover/return/reject destinations and reuse cycles, and excluded from net stem mass; collector packaging does not include downstream distribution.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_to_reference` | all inventory rows | Sum attributable real exchange quantities by substance/carrier/service and divide by measured accepted net fresh dispatch mass in kg; retain numerator units and produce per 1 kg reference flow. | cp_harvest; cp_prepare; cp_grade; cp_hold; cp_dispatch | attributed quantities per 1 kg reference flow | |
| `transfer_balance` | stem and residue transfers | Reconcile opening stock plus actual receipts against accepted transfers, separate other outputs, measured residue/foreign matter, losses and closing stock on comparable contemporaneous moisture bases; unexplained difference remains a disclosed data gap, not a fabricated emission. | all lot and destination registers | linked reconciled material balances | |
| `site_aggregation` | multi-site and period package | Sum site/period attributable burdens and matching net accepted fresh mass after deduplicating transfer/asset records; do not average separately normalized site values without matching mass weights. | site/period ledgers; accepted dispatch register | common-boundary aggregate and contributor disclosure | |
| `calculate_direct_release_ledger` | `wild_harvest`; `primary_prepare`; `grade_accept`; `fresh_hold`; `collector_dispatch` | For each unique event, substance and medium, obtain raw release E from measurement or the cited applicable method using activity A and a compatible factor EF; use E = A * EF only for a genuinely simple-factor method, after checking units and abatement scope. Do not add different substances/media; retain an unallocated raw-release ledger. Divide attributed burden totals once by matched positive final reference quantity R; do not renormalize final-reference intensities or allocate a shared event twice. Unexplained material residuals are not automatically emissions and missing factors are not zero. | cp_direct_release_wild_harvest; cp_direct_release_primary_prepare; cp_direct_release_grade_accept; cp_direct_release_fresh_hold; cp_direct_release_collector_dispatch; existing emission cards; supplier coverage; reference quantity | Node/substance/medium-specific raw and attributed amounts and unresolved gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `rattan_identity` | every included lot | Prove botanical rattan, wild untended origin, maturity, round fresh stem, intact epidermis and actual sheath/length preparation. Trade name, permit or HS label alone does not prove this physical boundary. | source inspection, supplier/harvest trace and treatment records |
| `fresh_measurement` | quantities and conversions | Same-lot calibrated net fresh mass and contemporaneous moisture; disclose method uncertainty and conversion coverage; no borrowed dry/fresh factor or per-cane weight. | calibration, tare, scales and moisture records |
| `complete_contributors` | sites, periods and shared assets | Enumerate actual contributors, collection/preparation/hold/dispatch phases, opening/closing stocks, replacements and termination; keep unique attribution keys and evidence for every included share. | linked site/period/asset ledger and representativeness decision |
| `output_routes` | grades, returns and discarded material | Every grade, rework loop and boundary exit has a true destination, handoff, quantity and burden decision; unused optional routes have evidence of absence. | buyer acceptance, transfer and disposal/return records |
| `exchange_identity` | every final concrete exchange | Verify exact flow UUID, support property/unit and applicability to material state/origin/compartment before final data production; aggregate umbrellas are not final exchanges. | concrete identity and compatibility evidence held with foreground package |
| `dq_range_units_evidence` | concrete exchanges in variable-unit cards | Establish any quantitative screen only after identifying its concrete exchange, reference property, explicit comparison unit and denominator, applicability, reviewed evidence and derivation. Preserve a unit conversion record that converts value and both bounds consistently; test the same physical quantity identically in equivalent units. Keep unresolved screens explicit and do not use them as amounts or completeness evidence. | linked collection protocols; property/unit and conversion records; compatible evidence and derivation; unresolved-screen register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_gate` | reference output | Confirm rattan_dispatch is the actual accepted product output, equals 1 kg net fresh stem reference, and has matching species/source/state/grade/moisture/actual gate qualifiers; packaging and rejects cannot enter reference mass. | fao-rattan-glossary; fao-rattan-resource |
| `origin_state` | every included lot | Reject cultivated, intentionally dried/cured/fumigated/skin-scraped/split goods and unknown state/origin. A flow UUID or buyer label cannot replace source-state proof. | fao-rattan-glossary |
| `quantity_relationship` | every inventory row | Confirm per 1 kg reference flow basis, native numerator-unit integrity, linked collection/normalization and measured internal transfer quantities; no assumed count-to-mass or dry-to-fresh conversion. | |
| `route_reconciliation` | process map, outputs and rejects | Check every actual optional activation/bypass, grade/destination, return and waste path; match transfer pairs and do not count internal returns as final outputs or repeat natural removal for purchased feed. | |
| `multi_axis_attribution` | sites, periods, modes and assets | Check unique site/lot/run/period keys and asset consumers, changeover/cleanup linkages, stock carryover and output attribution; no omitted contributor or duplicated common burden. | |
| `identity_and_evidence` | final exchanges and ranges | Require concrete verified identities and supports for final exchanges; preserve per-card Range evidence tiers. Reasoned screens are non-default/non-enforcing and cannot replace measured values or qualify a dataset for publication. | |
| `validate_direct_release_coverage` | `wild_harvest`; `primary_prepare`; `grade_accept`; `fresh_hold`; `collector_dispatch` | For every activated node, reconcile its activity list against cp_direct_release_wild_harvest; cp_direct_release_primary_prepare; cp_direct_release_grade_accept; cp_direct_release_fresh_hold; cp_direct_release_collector_dispatch: each relevant event must have quantified concrete elementary exchanges, evidenced upstream-service coverage, or evidenced absence of the activity. Missing/unknown is not zero and blocks data-package completeness. Check each actual substance/medium amount, method/factor units, concrete UUID and existing-card/service coverage for omissions or duplication; empty groups, purchased-electricity upstream emissions or another node's single CO2 card do not replace this node's on-site reconciliation. Shared-asset services must not create duplicate physical release events. |  |

- Reconcile required/conditional activation and upstream coverage against incoming state at each node; purchased completed-state feed must not duplicate growth, harvest or preparation. Equal classification does not replace state and gate matching.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground collection package and its process/lifecycle projections |
| downstream_use | secondary_dataset or background_dataset only after actual boundary, quantity, identity and quality review |
| allowed_use | Matching wild fresh round epidermis-intact rattan feedstock at documented primary collector gate and compatible declared grades |
| excluded_use | Plantation or treated/dried/peeled/split cane; furniture/plaited goods; all vegetable materials; unsupported functional substitution or sustainability/carbon-credit claims |
| required_metadata | Species/source, state/skin/sheath, dimensions/grade/moisture, true gate/date/recipient, net fresh mass, site/period contributors, optional-route states, stocks/returns, attribution and exact exchange identities |
| required_quality_disclosure | Measurement uncertainty, source/temporal/site coverage, actual output set, exclusions, missing evidence, shared-asset decisions and any provisional range limitations |
| update_trigger | Changed origin/species/state/skin treatment, grade or gate, actual route, material quantities, contributors, asset attribution, identities/supports or stronger range/method evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-rattan-resource` | `official_guidance` | FAO species profiles, rattan resource and uses; https://www.fao.org/4/y2783e/y2783e05.htm ; accessed 2026-10-09 | Botanical stem identity, wild versus cultivated supply, sheath removal versus downstream cane derivatives; not numeric defaults |
| `fao-rattan-glossary` | `official_guidance` | FAO Rattan glossary; https://www.fao.org/4/Y5232E/y5232e04.htm ; accessed 2026-10-09 | Fresh raw state, distinct epidermis removal/drying/curing/fumigation processing; not treatment recipes or thresholds |
| `fao-thailand-rattan-route` | `official_guidance` | FAO historical Thailand country report, rattan collection; https://www.fao.org/4/X2649E/X2649E06.htm ; accessed 2026-10-09 | Possible wild collection, sheath removal, length preparation and trader handover without pre-factory treatment; not current law, yields or universal geography |
| `unsd-cpc3-notes` | `official_guidance` | UNSD CPC3.0 explanatory notes, printed p40; https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf ; accessed 2026-10-09 | Classification membership only, not full-scope semantic equivalence |
| `wco-hs2022-rattan` | `official_guidance` | WCO HS2022 chapter14, 1401.20 rattans; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0214_2022e.pdf?la=en ; accessed 2026-10-09 | Rattan class within vegetable plaiting materials; no physical-state or inventory defaults |
