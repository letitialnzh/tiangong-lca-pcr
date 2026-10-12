---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-berries
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild edible berries — fresh whole primary handover

## 1. Scope and Applicability

This record covers species-qualified fresh whole edible berries gathered from untended terrestrial sources and accepted at a named primary gatherer/preparer handover. Gathering, preparation and storage responsibilities are product-specific foreground collection requirements, not a cultivation model. A commercially named wild berry may be deliberately managed; origin evidence, not the sales label, determines eligibility. The category does not include crop-managed lowbush blueberries, intentionally cultivated berries, dried/frozen goods, jam, juice, pulp, cooked or chemically preserved food, or retail delivery.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-berries` |
| classification_refs | cpc:3.0:03234 |
| covered_products | Untended gathered fresh whole edible berries, species and fresh accepted state declared. |
| excluded_products | Managed/cultivated berries; processed, frozen or dried berries; non-edible or ornamental goods; other wild-food categories; packaging, stems/leaves and foreign matter in reference mass. |
| representative_product | Species-qualified fresh whole untended berries at actual primary handover. |
| production_route | Owned gathering or attributable purchased gathered feed; actual transfer; conditional debris removal/washing/grading; conditional fresh holding/cooling; presentation and acceptance. |
| market_state | Fresh whole accepted edible berries, loose or protected packaging, with net mass separate from tare. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply accepted fresh whole wild edible berries at the declared actual primary handover. |
| How much | 1 kg |
| How well | Declared edible species, untended origin, maturity/grade and fresh state; no foreign matter, stems/leaves or package tare in accepted net mass. |
| How long or cycle | One defined collection-season and accepted lot; actual trip, preparation, holding and handover periods and stocks are linked. |
| reference_flow_link | `berries_primary_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted fresh whole wild berries at primary handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species and food-use eligibility; untended-source management evidence; contributing source site/season/lot; fresh whole state; maturity/grade; moisture basis; foreign-matter exclusions; net/tare method; actual gate/time; active operations and stock boundary. |

The reference links to the real accepted final product card. It is not a guarantee that every edible species is safe without later processing; the declared recipient and intended use must support acceptance. Product identities are resolved to the actual species/state/gate before a final dataset exchange is constructed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Accepted net mass is measured using cp_handover on a calibrated scale, gross minus documented container tare, excluded stems/leaves/foreign matter and other goods. Match the same lot, grade, fresh moisture basis and acceptance record; all inventory is per 1 kg reference flow. |
| `actual_units` | variable materials, energy and service exchanges | Actual measured property | Recorded unit | Retain concrete numerator units; do not sum fuel mass, electricity energy, water mass and time/transport services into an artificial common kg. Apply only documented compatible conversion; reference normalization does not change a numerator dimension. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untended standing source berries for owned removal, or actual purchased already gathered fresh berry lots with retained upstream evidence. |
| starting_condition_role | Natural-source removal interface or purchased technosphere feed, assigned once per physical portion. |
| product_classification_scope | Fresh whole primary state narrower than CPC 03234; classification does not define route or product identity. |
| recursive_input_rule | Same-category purchased input is a measured product input retaining an upstream dataset and previous gate; no recursive regeneration or duplicate gathering/removal. |
| upstream_dataset_requirement | Upstream package or reviewed disclosed substitute for purchased berries, utilities, materials and services, with gate and covered operations stated; missing coverage remains a gap. |
| disclosure | Declare collection ownership, species, untended evidence, sites/seasons/trips, preparation/cooling, gate, stocks, joint output and shared service scope, exclusions and unmeasured losses. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_untended` | source eligibility | Prove untended gathering with species, source site and management history; exclude intentionally managed/cultivated berry production even when marketed as wild. Land tenure or collection permission alone does not prove untended origin. | `unsd-cpc3-wild-berries`; `umaine-managed-wild-blueberries` |
| `boundary_owned_removal` | gather and purchased feed | One portion has one removal owner: owned source collection records natural input and gathering burden once; purchased already gathered berries retain the upstream package and bypass source removal. Harvest and resource removal share gather, not duplicate operations. |  |
| `boundary_route` | foreground activities | Activate only operations actually performed before the named primary gate. Collection, transfer, initial preparation, fresh holding and presentation are separate responsibilities; bypassed nodes cannot acquire invented inputs. Jam, juice, pulp, drying, freezing, cooking, retail logistics and customer processing are outside this fresh whole scope. | `fao-food-storage` |
| `boundary_period_sites` | source season and reporting boundary | Declare collection-season, trip/run, preparation and holding periods with opening/closing berry and container stocks, every source site, transfer and gate timestamp. Include attributable unsuccessful trips and changeover/cleaning events; retain noncontributing-trip evidence rather than exclude failures automatically. |  |
| `boundary_services` | shared assets and primary gate | Identify tools, containers, vehicles and cold rooms, owner/service period and every consuming node/lot. Attribute once using observed service drivers; retain replacement/retirement and return-loop records. Do not combine full service datasets and their covered utilities. Packaging ends at real primary handover; later distribution is excluded. |  |
| `boundary_fresh_state` | conditioning and holding | Declare washing/debris removal, accepted species and grades, fresh-state before/after, holding time/temperature and recipients from actual records. No universal washing, chilling, storage-life or yield default. Chemical preservation or any transformed food state is outside this record. | `fao-food-storage` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `gather` | Gathering and natural removal | `conditional` | Actual untended source collection occurs; purchased already gathered feed bypasses removal. | Untended berries on plants -> collected fresh whole berries with incidental material -> transfer or primary acceptance. | per 1 kg reference flow |
| `transfer` | Collection-area transfer | `conditional` | An actual owned or attributable pre-gate transfer occurs. | Received fresh collected berries -> same state at preparation or acceptance point. | per 1 kg reference flow |
| `condition` | Initial cleaning and grade sorting | `conditional` | Actual debris removal, washing or classification occurs; no mandatory washing inferred. | Raw whole fresh berries -> accepted fresh whole grade, intended other grades and actual rejects. | per 1 kg reference flow |
| `hold` | Fresh holding or cooling | `conditional` | Actual pre-handover holding/cooling intervention occurs. | Usable fresh whole berries -> retained fresh whole state -> acceptance. | per 1 kg reference flow |
| `handover` | Presentation and primary acceptance | `required` | Every reference lot has a real primary acceptance and declared handover gate; loose handover is permitted. | Fresh whole eligible berries before packing -> net accepted reference output and separately handed-over intended other goods. | per 1 kg reference flow |

The production mode is trip/lot-based gathering plus declared preparation runs and holding periods, not assumed continuous cropping. Link transfers, cleaning, changeovers and returns by trip/run/lot id. Actual bypass retains the physical trajectory to handover. Common-input cards are conditional umbrellas, not fixed aggregate flows. Common-input quantitative screens remain unresolved until each concrete exchange has an explicit comparison unit, denominator and reviewed evidence. All non-reference Ranges below are deliberately broad provisional reasoned screens: they are not observed defaults, enforced ceilings, substitutes for missing records or physical yield claims. Zero requires an evidenced absent activity; unknown stays missing.

### Process: Gathering and natural removal (`gather`)

#### Inputs

##### Product flows

###### Gathering energy, materials and attributable services (`gather_common_inputs`)

One conditional umbrella covers actual fuel/electricity, picking containers/tools, access and attributable equipment or collector service. Record concrete provider, material, property/unit and service scope; do not also count inclusive outsourced service components.

- Selected flow: Gathering energy, materials and attributable services
- Flow property / unit: Actual recorded property / recorded unit
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gather`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

No separate exchange is assumed; record any actual additional boundary crossing with its identity and measurement evidence.

##### Elementary flows

###### Untended berries removed from the natural source (`gather_natural_berries`)

Record actual species-qualified berry biomass crossing the natural-source boundary once for owned removal. No land-title test, automatic carbon uptake credit or second natural removal for purchased already gathered feed. Attached stems/leaves are identified separately in the collection ledger.

- Selected flow: Untended berries removed from the natural source
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gather`
- Sources: `unsd-cpc3-wild-berries`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual incidental non-berry natural material removed (`gather_incidental_natural`)

Conditionally record only actual physically removed leaves/stems, soil or other natural foreign matter during owned removal, with measured composition and mass separate from berry biomass. Already purchased attached matter is received with product feed, not removed from the environment again. Material left on plants or undisturbed ground never crosses this removal boundary.

- Selected flow: Actual incidental non-berry natural material removed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gather`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Fresh whole wild berries as collected (`gather_collected_berries`)

Species/origin-qualified fresh whole collected berries, including measured incidental matter only if identified separately, pass to transfer, conditioning, holding or handover. This internal handoff is not a second final product.

- Selected flow: Fresh whole wild berries as collected
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gather`
- Sources: `unsd-cpc3-wild-berries`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Collection rejects and incidental residues to actual management (`gather_residues`)

This waste card covers only actually removed berries, stems/leaves or foreign matter delivered to an external technosphere waste-management recipient, with wet mass, composition and treatment destination. Direct return to the natural environment belongs separately to gather_returned_natural, never duplicated for the same portion. Material left on plants or undisturbed ground is neither removal nor collection waste.

- Selected flow: Collection rejects and incidental residues to actual management
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gather`
- Sources: `unsd-cpc3-wild-berries`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual removed material returned directly to the environment (`gather_returned_natural`)

Only actual removed berry or incidental material physically returned to a documented receiving natural compartment is recorded here, with composition, mass, location and timing; do not infer a pollutant or emission UUID. The same portion has one destination: direct return here or external technosphere waste management, never both. Uncollected material remaining on the plant/ground is neither removal nor return.

- Selected flow: Actual removed material returned directly to the environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gather`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual gathering direct emissions (`gather_direct_emissions`)

Only separately owned actual emissions from equipment or operations: report named substance/particle class, receiving compartment, activity and supported factor or measurement. No unspecified berry biomass or unknown loss as pollutant; avoid inclusive service and upstream combustion duplication.

- Selected flow: Actual gathering direct emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gather`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Collection-area transfer (`transfer`)

#### Inputs

##### Product flows

###### Transferred fresh berries (`transfer_feed`)

Record each actual internal or purchased input once, source lot, state, net/gross/foreign matter and previous gate. Purchased feed carries an upstream dataset; do not repeat gathering or pair it with a second natural-resource input for the same portion.

- Selected flow: Transferred fresh berries
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Transfer energy, materials and services (`transfer_common_inputs`)

One conditional common-input umbrella: actual utilities, supplied water, materials, equipment and services are disaggregated only in the concrete ledger. Retain real unit, provider and duty. Record packaging mass, reusable container ownership, turns, losses and cleaning when applicable; a complete outsourced service excludes its already covered inputs.

- Selected flow: Transfer energy, materials and services
- Flow property / unit: Actual recorded property / recorded unit
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

No separate exchange is assumed; record any actual additional boundary crossing with its identity and measurement evidence.

##### Elementary flows

No separate exchange is assumed; record any actual additional boundary crossing with its identity and measurement evidence.

#### Outputs

##### Product flows

###### Fresh whole berries at transfer destination (`transfer_berries`)

Measure actual fresh whole berries reaching the next active node or handover; record species/grade and moisture basis. Preserve measured internal quantities instead of setting each intermediate to the 1 kg final reference.

- Selected flow: Fresh whole berries at transfer destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual rejects, spilled juice, residues and spent materials (`transfer_waste`)

Record actual damaged/spoiled berries, leaves/stems/foreign matter, caught juice, spent packaging or wastewater by origin, composition and recipient treatment. Distinguish intended other goods from disposal and liquid discharge from air emissions. No universal loss factor; recovered internal material re-enters its actual node with accumulated burden.

- Selected flow: Actual rejects, spilled juice, residues and spent materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual transfer direct emissions (`transfer_direct_emissions`)

Conditional actual separately owned named emissions, including equipment exhaust, refrigerant leakage or water to air only when independently evidenced and identified. Record substance, compartment, activity/factor or direct measurement. Unknown mass imbalance or mixed leaked juice is not a water-vapour identity. Do not duplicate inclusive services or upstream inventories.

- Selected flow: Actual transfer direct emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Initial cleaning and grade sorting (`condition`)

#### Inputs

##### Product flows

###### Raw fresh berries received for initial conditioning (`condition_feed`)

Record each actual internal or purchased input once, source lot, state, net/gross/foreign matter and previous gate. Purchased feed carries an upstream dataset; do not repeat gathering or pair it with a second natural-resource input for the same portion.

- Selected flow: Raw fresh berries received for initial conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condition`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Cleaning and grading energy, materials and services (`condition_common_inputs`)

One conditional common-input umbrella: actual utilities, supplied water, materials, equipment and services are disaggregated only in the concrete ledger. Retain real unit, provider and duty. Record packaging mass, reusable container ownership, turns, losses and cleaning when applicable; a complete outsourced service excludes its already covered inputs.

- Selected flow: Cleaning and grading energy, materials and services
- Flow property / unit: Actual recorded property / recorded unit
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condition`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

No separate exchange is assumed; record any actual additional boundary crossing with its identity and measurement evidence.

##### Elementary flows

No separate exchange is assumed; record any actual additional boundary crossing with its identity and measurement evidence.

#### Outputs

##### Product flows

###### Conditioned accepted fresh whole wild berries (`condition_berries`)

Measure actual fresh whole berries reaching the next active node or handover; record species/grade and moisture basis. Preserve measured internal quantities instead of setting each intermediate to the 1 kg final reference.

- Selected flow: Conditioned accepted fresh whole wild berries
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condition`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Intended other-grade berries at their actual handoff (`condition_other_goods`)

Only goods intentionally accepted for another grade or declared downstream use with a documented recipient. Their fresh or damaged state and gate differ from the reference as recorded. An internal downgrade subsequently delivered at handover is one product trajectory, not two final outputs; disposal is waste.

- Selected flow: Intended other-grade berries at their actual handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condition`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual rejects, spilled juice, residues and spent materials (`condition_waste`)

Record actual damaged/spoiled berries, leaves/stems/foreign matter, caught juice, spent packaging or wastewater by origin, composition and recipient treatment. Distinguish intended other goods from disposal and liquid discharge from air emissions. No universal loss factor; recovered internal material re-enters its actual node with accumulated burden.

- Selected flow: Actual rejects, spilled juice, residues and spent materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condition`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual condition direct emissions (`condition_direct_emissions`)

Conditional actual separately owned named emissions, including equipment exhaust, refrigerant leakage or water to air only when independently evidenced and identified. Record substance, compartment, activity/factor or direct measurement. Unknown mass imbalance or mixed leaked juice is not a water-vapour identity. Do not duplicate inclusive services or upstream inventories.

- Selected flow: Actual condition direct emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condition`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Fresh holding or cooling (`hold`)

#### Inputs

##### Product flows

###### Fresh whole berries received for holding (`hold_feed`)

Record each actual internal or purchased input once, source lot, state, net/gross/foreign matter and previous gate. Purchased feed carries an upstream dataset; do not repeat gathering or pair it with a second natural-resource input for the same portion.

- Selected flow: Fresh whole berries received for holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hold`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fresh-holding energy, materials and services (`hold_common_inputs`)

One conditional common-input umbrella: actual utilities, supplied water, materials, equipment and services are disaggregated only in the concrete ledger. Retain real unit, provider and duty. Record packaging mass, reusable container ownership, turns, losses and cleaning when applicable; a complete outsourced service excludes its already covered inputs.

- Selected flow: Fresh-holding energy, materials and services
- Flow property / unit: Actual recorded property / recorded unit
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hold`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

No separate exchange is assumed; record any actual additional boundary crossing with its identity and measurement evidence.

##### Elementary flows

No separate exchange is assumed; record any actual additional boundary crossing with its identity and measurement evidence.

#### Outputs

##### Product flows

###### Fresh whole berries after holding (`hold_berries`)

Measure actual fresh whole berries reaching the next active node or handover; record species/grade and moisture basis. Preserve measured internal quantities instead of setting each intermediate to the 1 kg final reference.

- Selected flow: Fresh whole berries after holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hold`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual rejects, spilled juice, residues and spent materials (`hold_waste`)

Record actual damaged/spoiled berries, leaves/stems/foreign matter, caught juice, spent packaging or wastewater by origin, composition and recipient treatment. Distinguish intended other goods from disposal and liquid discharge from air emissions. No universal loss factor; recovered internal material re-enters its actual node with accumulated burden.

- Selected flow: Actual rejects, spilled juice, residues and spent materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hold`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual hold direct emissions (`hold_direct_emissions`)

Conditional actual separately owned named emissions, including equipment exhaust, refrigerant leakage or water to air only when independently evidenced and identified. Record substance, compartment, activity/factor or direct measurement. Unknown mass imbalance or mixed leaked juice is not a water-vapour identity. Do not duplicate inclusive services or upstream inventories.

- Selected flow: Actual hold direct emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hold`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Presentation and primary acceptance (`handover`)

#### Inputs

##### Product flows

###### Fresh whole berries received for primary acceptance (`handover_feed`)

Record each actual internal or purchased input once, source lot, state, net/gross/foreign matter and previous gate. Purchased feed carries an upstream dataset; do not repeat gathering or pair it with a second natural-resource input for the same portion.

- Selected flow: Fresh whole berries received for primary acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Packaging and acceptance energy, materials and services (`handover_common_inputs`)

One conditional common-input umbrella: actual utilities, supplied water, materials, equipment and services are disaggregated only in the concrete ledger. Retain real unit, provider and duty. Record packaging mass, reusable container ownership, turns, losses and cleaning when applicable; a complete outsourced service excludes its already covered inputs.

- Selected flow: Packaging and acceptance energy, materials and services
- Flow property / unit: Actual recorded property / recorded unit
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
Range evidence requirement: No numerical bound is prescribed until the concrete exchange, reference property, comparison unit and normalization denominator are identified. Retain the linked protocol’s measured quantities. If a quantitative QA screen is established, document its applicable material/service, route and period, reviewed evidence and derivation; express values and both bounds in the same explicit unit and denominator. Convert both bounds together with the value when units change. Until that evidence exists, quantitative range screening is unavailable and is disclosed as a gap; a missing screen does not supply a default or prove completeness.

##### Waste flows

No separate exchange is assumed; record any actual additional boundary crossing with its identity and measurement evidence.

##### Elementary flows

No separate exchange is assumed; record any actual additional boundary crossing with its identity and measurement evidence.

#### Outputs

##### Product flows

###### Intended other-grade berries at their actual handoff (`handover_other_goods`)

Only goods intentionally accepted for another grade or declared downstream use with a documented recipient. Their fresh or damaged state and gate differ from the reference as recorded. An internal downgrade subsequently delivered at handover is one product trajectory, not two final outputs; disposal is waste.

- Selected flow: Intended other-grade berries at their actual handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Accepted fresh whole wild berries at primary handover (`berries_primary_handover`)

The sole final reference lot: net accepted fresh whole berries from a proved untended source, at the named actual primary handover. Exclude stems/leaves/foreign matter, packaging and other grades. Acceptance record and calibrated gross/tare weighings determine the real denominator.

- Selected flow: Accepted fresh whole wild berries at primary handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handover`
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

###### Actual rejects, spilled juice, residues and spent materials (`handover_waste`)

Record actual damaged/spoiled berries, leaves/stems/foreign matter, caught juice, spent packaging or wastewater by origin, composition and recipient treatment. Distinguish intended other goods from disposal and liquid discharge from air emissions. No universal loss factor; recovered internal material re-enters its actual node with accumulated burden.

- Selected flow: Actual rejects, spilled juice, residues and spent materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual handover direct emissions (`handover_direct_emissions`)

Conditional actual separately owned named emissions, including equipment exhaust, refrigerant leakage or water to air only when independently evidenced and identified. Record substance, compartment, activity/factor or direct measurement. Unknown mass imbalance or mixed leaked juice is not a water-vapour identity. Do not duplicate inclusive services or upstream inventories.

- Selected flow: Actual handover direct emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity from the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Provisional non-enforcing reasoned screening estimate
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocate_outputs` | all intended outputs | First separate independently measured operations and their intended output handoffs. For inseparable joint gathering, assign documented causal collector-time/service shares where evidenced; otherwise use measured fresh berry mass shares only for comparable fresh goods at the same actual split. Incomparable states require explicit reviewed method and sensitivity, not automatic mass or revenue allocation. Disposal residues receive no assumed sale/substitution credit. |  |
| `allocate_shared` | shared trips, infrastructure and periods | Record all consumers and real service period; prioritize measured trip/time, container-turn or occupied cold-room capacity-time drivers for attributable shared service. Preserve unsuccessful attributable trip burden and opening/closing stocks through the correct season. Reconcile all shares to the original whole once; no equal-site averages without contribution evidence. |  |
| `allocate_rejects` | condition, hold and handover | Link every damaged, leaking, spoiled or off-grade state to its producing node and actual return, re-sort, intended other-grade sale or disposal recipient. Internal recirculation retains accumulated burden and additional work, never credits a second output. Fresh intended other goods have one ultimate handoff; unresolved rejects cannot enter accepted net reference mass. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_gather` | `gather` | all actual node exchanges | measured linked ledger | species; source sites; management history; season; trip/run id and time; successful/unsuccessful effort; removed berry mass; separate incidental non-berry natural material composition/mass and removal origin; directly returned natural compartment/location/time/mass; external waste recipient; collected mass; rejects/return destination; actual inputs/provider/unit; named emissions/compartment/activity/factor; equipment/service scope | Trace source observations and management declaration independently of sales label; calibrated lot weighing and timed trip logs, invoices, meter/service records and actual named-substance emission measurement or activity-factor evidence. | kg and actual exchange units | each trip/lot/run and event | complete declared season and holding period, including stocks and unsuccessful trips | every actual contributor site and node | per 1 kg reference flow | calibration, origin/acceptance evidence, timestamps, service scope, contributor and destination reconciliations |
| `cp_transfer` | `transfer` | all actual node exchanges | measured linked ledger | incoming/outgoing lot and fresh state; source/recipient node; distance/time/loading; gross/tare/foreign matter; caught juice/spill and destination; inputs/service boundaries; named emissions and activity/factors | Weigh dispatch/receipt on calibrated scales, link trip/load logs and route scope; meter actual inputs or retain supplier service evidence. Record real spills and separately owned exhaust, never inclusive service duplication. | kg and actual exchange units | each trip/lot/run and event | complete declared season and holding period, including stocks and unsuccessful trips | every actual contributor site and node | per 1 kg reference flow | calibration, origin/acceptance evidence, timestamps, service scope, contributor and destination reconciliations |
| `cp_condition` | `condition` | all actual node exchanges | measured linked ledger | incoming fresh lot; cleaning/washing active status; maturity/grade rules; accepted grade, intended other goods/recipient; stems/leaves/foreign matter; damaged berries; caught juice/wastewater destination; re-sort/return origin; supplied inputs; named substance/compartment/activity/factor | Calibrated before/after net weighing plus actual grade acceptance records; separately weigh foreign matter, other goods, rejects and liquids. Link washing meters, cleaning/run changeovers, supplier services and actual direct-emission evidence. | kg and actual exchange units | each trip/lot/run and event | complete declared season and holding period, including stocks and unsuccessful trips | every actual contributor site and node | per 1 kg reference flow | calibration, origin/acceptance evidence, timestamps, service scope, contributor and destination reconciliations |
| `cp_hold` | `hold` | all actual node exchanges | measured linked ledger | lot; before/after fresh state; time/temperature; opening/closing stocks; occupied capacity-time; energy/material/services; spoiled/damaged berries, liquid and destination; measured moisture change; refrigerant/substance/compartment and activity/factor | Use stock/lot records and calibrated receipt/exit weighings with actual holding logs and metered or evidenced shared service drivers. Identify moisture change independently; use refrigerant balances or named direct measurement/activity-factor evidence when real. | kg and actual exchange units | each trip/lot/run and event | complete declared season and holding period, including stocks and unsuccessful trips | every actual contributor site and node | per 1 kg reference flow | calibration, origin/acceptance evidence, timestamps, service scope, contributor and destination reconciliations |
| `cp_handover` | `handover` | all actual node exchanges | measured linked ledger | species; eligibility; untended origin; accepted lot/grade/fresh moisture; primary gate/time; gross mass; measured container tare; excluded stems/leaves/foreign matter; other-goods mass/recipient; accepted net mass; packaging material/mass/reuse turns/losses/cleaning; returns and waste destination; actual utilities/service; named emissions/compartment/activity/factor | Weigh the accepted fresh whole lot on a calibrated scale, subtract documented tare and excluded parts, reconcile the same species/grade/lot with the actual acceptance record. Record packaging/reuse and separate other-goods handoffs, returns, waste and actual direct-emission evidence. | kg and actual exchange units | each trip/lot/run and event | complete declared season and holding period, including stocks and unsuccessful trips | every actual contributor site and node | per 1 kg reference flow | calibration, origin/acceptance evidence, timestamps, service scope, contributor and destination reconciliations |

Retain a linked common site/season/trip/lot/asset ledger: enumerate every contributor, opening/closing stocks, unsuccessful trip and actual changeover, asset owner/life/service period/replacement/retirement, every consumer and allocation driver. Keep excluded sites and periods with the reason and evidence. This ledger supports the node protocols without inventing another exchange or equal-weight site mean.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_observed` | all inventory rows | Divide the attributable actual exchange in its own unit by the accepted net final berry mass in kg; report per 1 kg reference flow. The final reference output is 1 kg; measure every internal transfer independently. | cp_gather; cp_transfer; cp_condition; cp_hold; cp_handover | reference-normalized exchange |  |
| `reconcile_node_mass` | all actual material nodes | Reconcile measured received material and opening stock against actual outgoing berries, independently classified other goods/rejects/liquids/foreign matter, identified moisture change and closing stock. Do not force the residual to evaporation or an emission. | cp_gather; cp_transfer; cp_condition; cp_hold; cp_handover | physical ledger and explicit unresolved imbalance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_origin` | all berry lots | Verify edible species/intended use and untended source independently of commercial wild name; reject managed/cultivated origin from this scope. | source observation, management history and linked lot acceptance |
| `quality_completeness` | nodes, sites and periods | Account for active/bypassed nodes, purchased-feed burden, all contributors, unsuccessful trips, stock transitions, other goods, rework/rejects and service coverage; gaps remain explicit, not zero. | complete linked protocols and physical/financial service reconciliation |
| `quality_identity_units` | each concrete exchange | Resolve actual identity and compatible property/unit/provider/gate/compartment; no generic service-kg or automatic water-vapour match. Disclose provisional screens, factor sources and uncertainty. | verified identity/support records and measurement/factor provenance |
| `quality_representativeness` | aggregated sites/seasons | Use actual accepted-mass/source-service contribution weighting under comparable declared species/grade/gate and period scope; disclose exclusions and sensitivity. Do not generalize a limited sample to every wild species. | contributor roster, weighted source ledger and coverage statement |
| `dq_range_units_evidence` | concrete exchanges in variable-unit cards | Establish any quantitative screen only after identifying its concrete exchange, reference property, explicit comparison unit and denominator, applicability, reviewed evidence and derivation. Preserve a unit conversion record that converts value and both bounds consistently; test the same physical quantity identically in equivalent units. Keep unresolved screens explicit and do not use them as amounts or completeness evidence. | linked collection protocols; property/unit and conversion records; compatible evidence and derivation; unresolved-screen register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_origin` | source and reference | Require species/edible eligibility, untended-origin management evidence, site/season/lot, actual primary gate and declared maturity/grade/moisture. Marketing wild, forest location or legal access alone is insufficient; unknown origin remains a gap. | `unsd-cpc3-wild-berries`; `umaine-managed-wild-blueberries` |
| `validate_mass` | all inventory rows | Use the same accepted net final lot denominator for every row; reference output is 1 kg, excluded tare/debris and other goods stay separate. Reconcile feed, berries, rejects, caught juice, identified moisture change and stocks per node; unexplained difference stays a data gap, not zero or invented water vapour. |  |
| `validate_route_handoffs` | processes and grade outputs | Evidence each active/bypassed process and every output destination. Preserve actual intermediate mass and map re-sort/return loops without repeated final goods. Reject processed or frozen reference states, and declare actual conditions rather than infer a universal fresh-holding regime. |  |
| `validate_attribution` | trip, site, period and infrastructure | Check complete contributor roster and species/season/gate compatibility, source contribution weights, unsuccessful trips, changeovers, asset periods, stocks, replacements and all output shares. Sum allocated records to the original measured total; document exclusions and representativeness limitations. |  |
| `validate_exchanges` | all concrete exchanges | Resolve actual material/service/substance, flow type, gate/provider/destination, property and unit before producing final exchanges. Verify fixed UUID details and support rows; semantic umbrellas are not concrete UUIDs. Preserve inclusive service boundaries and specific direct-emission evidence. |  |
| `validate_ranges` | all provisional screens | Every Range except the 1..1 reference normalization is a broad provisional reasoned screening interval, not observations, substitute defaults, limits or a rejection threshold. Values outside trigger evidence review, never clipping. Zero requires documented inactive/absent exchange; unknown is missing. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species/route/gate-qualified foreground data package for fresh whole wild berries. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Primary fresh berry supply inputs at the stated gate and actual comparable species/grade/origin, with downstream food processing modelled separately. |
| excluded_use | Cultivated/managed wild-labelled berry proxy; universal food safety, freezing/drying/juice/jam inventory; automatic natural carbon credit or gate-equivalent retail product. |
| required_metadata | Species, food-use eligibility, source management/origin, sites/seasons/trips/lots, fresh grade/maturity/moisture, actual gate, net/tare, active node ledger, stocks, upstream scope and attribution. |
| required_quality_disclosure | Identity and unit gaps, coverage/exclusions, unsuccessful trips and missing records, losses/unknown imbalance, joint-output method, asset and site weights, provisional Range and factor uncertainty. |
| update_trigger | Change in origin management, species/state/grade/gate, preparation/holding/service regime, contributors/season/assets, allocation evidence or identity/measurement support. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-wild-berries` | `official_guidance` | https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | CPC 3.0 03234 explanation: untended gathering, not intentional crop management; no numerical defaults. |
| `umaine-managed-wild-blueberries` | `extension_guidance` | https://extension.umaine.edu/blueberries/about/ | Commercial wild label may describe managed pruning/crop cycles; eligibility distinction only, not wild gathering quantities. |
| `fao-food-storage` | `official_guidance` | https://www.fao.org/4/W6864E/w6864e06.htm | Fresh perishability and processing-state distinction; actual holding/handling protocols are declared here, no source example shelf-life, loss or temperature transferred. |
