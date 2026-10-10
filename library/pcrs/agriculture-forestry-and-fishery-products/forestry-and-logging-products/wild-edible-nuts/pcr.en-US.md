---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-nuts
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---
# Wild raw in-shell edible nuts

## 1. Scope and Applicability

This method covers edible nuts gathered from untended natural sources, not intentionally grown, and dispatched raw in-shell at a declared gatherer or primary producer handover. Species, natural source and actual operations establish eligibility; a forest address does not prove wild origin. It covers collection, attributable pre-gate transfer and actual simple outer pod/husk separation, cleaning, grading, drying/storage and packaging. Each is activated only when owned and actually performed. Evidence: `unsd-cpc3-wild-nuts`; `fao-nwfp-food-handling`.

Cultivated orchards, plantation nut production, seedling propagation, fertilization, irrigation and growing operations are excluded. Kernel shelling, roasting, salting, extraction, oil pressing, prepared foods, downstream wholesale/export manufacture, retail transport, consumption and consumer end-of-life are excluded. Removing an outer fruit/pod/cone is not removing the nut's hard shell. No instruction certifies food safety or encourages consumption of unidentified nuts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-nuts |
| classification_refs | CPC 3.0 03231; partial raw in-shell scope |
| covered_products | Actual species-qualified raw in-shell wild edible nuts from untended sources; simple pre-handover preparation only |
| excluded_products | Intentionally grown nuts; shelled kernels; roasted/salted/prepared nuts; oil; mixed-source lots without traceable wild contributions |
| representative_product | One declared wild species and grade of raw in-shell nuts at primary handover |
| production_route | Untended source gathering -> actual transfer -> conditional outer pod/husk removal and grading -> conditional drying/storage -> qualified packaging/handover |
| market_state | Raw in-shell, as received, at the actual declared primary gate; not a universal commodity blend |

The broad wild-nut classification note establishes origin, not all market-form equivalence. This in-shell method is narrower than the full leaf; no claim is made that shelled-kernel forms are covered. Historical Brazil-nut and pine examples support possible operations, not present universal yields, seasons, losses or prices.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One actual species-qualified accepted raw in-shell wild edible nut lot at primary producer handover |
| How much | 1 kg net as-received in-shell nuts |
| How well | Declared species, wild untended source, grade, hard-shell inclusion, outer pod/husk exclusion, moisture and edible identity/acceptance evidence |
| How long or cycle | Named gathering campaign, source-site season, reporting period and actual pre-gate storage dates; opening/closing stocks and asset replacement/termination events linked |
| reference_flow_link | `wild_nuts_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw in-shell wild edible nuts at primary producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; wild untended origin proof; source habitat/site; gatherer campaign and season; raw in-shell state; hard-shell inclusion; outer pod/husk exclusion; moisture and its basis; grade; net/gross/tare records; edible identity and acceptance record; actual source/operation ownership; actual primary gate; storage dates; allocation and stock treatment |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Net accepted as-received in-shell mass is weighed using cp_handover; packaging and foreign matter excluded, hard shell included. All rows use per 1 kg reference flow. |
| `form_mass_bridge` | natural_nut_removal, gathered_nut_material, conditioning_nut_feed, conditioned_in_shell_nuts, preservation_nut_feed, preserved_in_shell_nuts | Mass | kg | Measure incoming/outgoing forms separately; pair same-lot water, solids and stock records. Dry resource mass cannot replace wet in-shell product mass without measured conversion; no universal shell/husk yield. |
| `energy_units` | collection_energy, conditioning_energy, preservation_energy, handover_energy | Energy | MJ | Preserve actual carrier amount and energy basis; electricity kWh may convert by exact 3.6 MJ/kWh, fuels/heat require recorded matching net/gross basis. Native service hours and transport tonne-kilometres are not energy. |
| `package_tare` | packaging_materials, wild_nuts_handover | Mass | kg | Subtract weighed packaging tare; item-count packaging requires measured mass per actual item/configuration. Container return is stock movement, not nut product mass. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual untended natural source at collection, or verified already-gathered wild material at its actual upstream handoff with prior burden and mass state declared |
| starting_condition_role | Natural resource removal owned by included collection, or attributable technosphere feed when collection is upstream; exclusive per physical portion |
| product_classification_scope | Raw in-shell primary wild-nut scope; no cultivated or kernel-processing recursion |
| recursive_input_rule | Already gathered same-category inputs retain actual supplier state/source/gate and upstream burden once. Do not add a second natural removal ledger or reset their prior burdens. |
| upstream_dataset_requirement | Actual supplier/service inputs need compatible verified concrete identities and supporting upstream datasets; missing identity/source/quantity is disclosed, not replaced by a convenient cultivated nut dataset. |
| disclosure | Enumerate source sites, lots, campaigns, owned operations, bypasses, gates, stock periods, shared assets/consumers, secondary destinations and all omissions. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `wild_source_eligibility` | source lots | Require evidence that nuts were untended and gathered, not intentionally grown; intentional cultivation inputs are outside this method. | unsd-cpc3-wild-nuts |
| `removal_owner` | collection, transfer | Collection combines removal and capture responsibility as one node, independent of later conditioning; assign each source portion to included natural removal or an upstream gathered product, never both. Uncollected habitat biomass is not a produced waste. | fao-nwfp-food-handling |
| `actual_route_gate` | all processes | Include only actual owned pre-gate operations. Prepared or purchased inputs may bypass collection/conditioning/preservation; final acceptance is required. Declare the actual gate and record each intermediate handoff. | fao-nwfp-food-handling |
| `state_exclusions` | conditioning, handover | Outer pod/husk removal may leave raw in-shell nuts; kernel shelling/roasting/manufacture and downstream distribution remain excluded. No inferred gate/state equivalence. | fao-nwfp-food-handling |
| `site_period_scope` | source and shared assets | Enumerate each contributing site/campaign/period and common-boundary linkage. Attribute shared access/tools/storage to actual consumers and periods once; no forest area, lifetime or annual yield default. | |

## 6. Process Inventory Structure

Collection/campaign mode is explicitly lot based. Index every row by source site, lot, campaign, event date and reporting period. Conditionals may have actual zero, one or multiple concrete exchanges; umbrellas never imply a generic UUID. Collection intended nut-bearing material and incidental discards, conditioning usable grade/other goods/waste states, preservation usable state/spoilage/water loss, and handover accepted grades/rejects remain distinct with named recipients. Re-sort loops return measured material to conditioning and retain added burdens; no loop is a new final output. For every active node record named on-site pollutant emission quantities/factors and receiving compartments in its protocol, separately from water vapour; reconcile owner and inclusive service boundary. Record actual on-site retention separately from product dispatch or off-site waste.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `collection` | Wild gathering and resource removal | conditional | When gathering is foreground-owned at an untended source | Source-to-collected-material capture; no growing node | per 1 kg reference flow |
| `transfer` | Pre-gate transfer | conditional | When an actual pre-gate transfer responsibility is owned | Collection or purchased feed to handling arrival | per 1 kg reference flow |
| `conditioning` | Outer pod/husk conditioning and grading | conditional | When actual simple separation/cleaning/grading occurs | Collected form to raw cleaned in-shell grades | per 1 kg reference flow |
| `preservation` | Pre-gate drying and storage | conditional | When actual drying/storage occurs before handover | Usable feed to recorded stabilized usable state | per 1 kg reference flow |
| `handover` | Qualification, packaging and primary handover | required | Every declared accepted reference lot | Accepted net raw in-shell output; packaging conditional | per 1 kg reference flow |

### Process: Wild gathering and resource removal (`collection`)

#### Inputs

##### Product flows

###### Energy used for actual gathering equipment (`collection_energy`)

Conditional single umbrella for actual fuel, electricity or supplied heat. Human walking and labour do not imply diesel or metabolic energy exchanges. Identify each actual energy carrier and its conversion evidence; inclusive contracted-service energy is not repeated.

- Selected flow: Energy used for actual gathering equipment
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable amount from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Attributed gathering tools and shared access service (`collection_tools_service`)

Record actual tool/access service in native service hours with named provider/asset, consuming campaigns and periods; material supplies require separate actual mass records. No universal tool lifetime or assumed forest-management burden.

- Selected flow: Attributed gathering tools and shared access service
- Flow property / unit: Service time / h
- Amount rule: Measured attributable amount from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Wild nut biomass removed from the untended source (`natural_nut_removal`)

Record only actual collected nut-bearing material at the natural source interface, with species, source habitat, shell/pod state and dry/wet mass bridge. Not whole tree biomass, plantation growth or automatic biogenic uptake. Already gathered purchased portions enter transfer as products instead; do not repeat their resource removal.

- Selected flow: Wild nut biomass removed from the untended source
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Gathered wild nut material at collection handoff (`gathered_nut_material`)

Measured actual intended gathered pods/cones/husks or in-shell nuts handed to transfer; declare form and accompanying matter. Not fixed to final 1 kg; no generic Brazil-nut or pine yield.

- Selected flow: Gathered wild nut material at collection handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Collected incidental or rejected material sent to waste (`collection_discard`)

Only actual collected material discarded across the collection boundary is waste. Uncollected fallen fruit left in the habitat is not a technosphere waste output. Retained-on-site collected residues need quantity/destination disclosure, no disposal credit.

- Selected flow: Collected incidental or rejected material sent to waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct operational emissions (`collection_direct_emissions`)

Conditional actual on-site equipment combustion or handling emissions require each named substance, particle size/speciation where relevant, receiving medium/compartment and measured amount or an explicitly justified activity factor. Inclusive services and upstream fuel emissions are not duplicated. No generic pollutant UUID or assumed emission merely because fuel is possible.

- Selected flow: Actual direct operational emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_collection
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collection`
- Range: Provisional broad order-of-magnitude QA screen; not an emission factor or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Pre-gate transfer (`transfer`)

#### Inputs

##### Product flows

###### Gathered wild nut material entering pre-gate transfer (`transfer_nut_feed`)

Match measured collection handoff or verified purchased already-gathered wild material; record supplier natural-source proof and prior burden. Each portion owns either included resource removal or attributed upstream product, never both.

- Selected flow: Gathered wild nut material entering pre-gate transfer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_transfer
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Pre-gate transport service (`transfer_service`)

Conditional actual motorized transport in tonne-kilometres with modes, distances, payload, return load and ownership. Walking or manual carrying is disclosed but not assigned fictional diesel. Inclusive service and foreground vehicle fuel/exhaust alternatives are exclusive.

- Selected flow: Pre-gate transport service
- Flow property / unit: Transport performance / t km
- Amount rule: Measured attributable amount from cp_transfer
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: t km
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Wild nut material at primary handling arrival (`transferred_nut_material`)

Actual arrived lot before outer pod/husk separation or acceptance; reconcile arrival, loss, retention and moisture against departure. No automatic loss factor or final-reference substitution.

- Selected flow: Wild nut material at primary handling arrival
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_transfer
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Pre-gate transfer spoilage sent to waste (`transfer_spoilage`)

Link actual spoiled or damaged material to the transfer segment and waste receiver. Downgraded saleable nuts are products at their true handoff, not this waste; retain their attributable burdens.

- Selected flow: Pre-gate transfer spoilage sent to waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_transfer
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Outer pod/husk conditioning and grading (`conditioning`)

#### Inputs

##### Product flows

###### Collected nut material entering primary conditioning (`conditioning_nut_feed`)

Measured incoming pods/cones/outer husks or dirty in-shell nuts. Outer pod/husk removal is not shell cracking; kernel shelling is outside this scope. Bypass when already compatible and no operation occurs.

- Selected flow: Collected nut material entering primary conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Energy used in primary conditioning (`conditioning_energy`)

Single conditional umbrella for actual equipment fuel, electricity and heat, not service hours or nutritive energy. Record carrier properties and recorded conversions; avoid repeated inclusive supplier-service burdens.

- Selected flow: Energy used in primary conditioning
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable amount from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other primary conditioning material supplies (`conditioning_supplies`)

Conditional actual cleaning and maintenance materials by formulated product mass; declare substances and use, no default sanitizing recipe. Actual zero or multiple exchanges follow records, not one invented generic product UUID.

- Selected flow: Other primary conditioning material supplies
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Supplied cleaning water (`supplied_cleaning_water`)

Only actual water delivered as a technosphere product for pre-gate cleaning; identify source, provider and grade. Water counted here cannot also be direct environmental abstraction for the same quantity.

- Selected flow: Supplied cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Direct environmental water abstraction for cleaning (`direct_cleaning_water`)

Conditional actual source-specific freshwater withdrawal with source compartment and measured quantity; not a supplier product or net consumption by default. Supply and direct abstraction are exclusive for the same portion.

- Selected flow: Direct environmental water abstraction for cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Cleaned graded raw in-shell wild nuts (`conditioned_in_shell_nuts`)

Measure usable in-shell output at drying/storage or acceptance handoff, retaining true species, grade and moisture. Still raw and not roasted, shelled kernels, oil or prepared foods. Separate each compatible grade's actual record.

- Selected flow: Cleaned graded raw in-shell wild nuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other actually intended goods from conditioning (`conditioning_other_goods`)

Conditional downgrade edible nut grades, outer pod/husk goods or non-food saleable materials require actual intended use and buyer handoff. Not automatic coproducts, accepted reference nuts or disposal-credit substitutes. Kernels produced by excluded shelling are outside this method.

- Selected flow: Other actually intended goods from conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Conditioning rejects and unwanted outer material (`conditioning_rejects`)

Actual unwanted removed pod/husk/foreign matter or rejected nuts crossing a waste boundary. Record receiver/treatment or on-site retention separately; the hard shell included in accepted in-shell output is not a removed waste. Re-sort returns remain internal until exit.

- Selected flow: Conditioning rejects and unwanted outer material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Cleaning wastewater delivered for treatment (`conditioning_wastewater`)

Conditional actual discharged wastewater as a waste-to-treatment service boundary with quantity, receiver and pollutant analysis. Separate direct releases by named substances/medium, no broad organic emission binding or water-vapour substitution.

- Selected flow: Cleaning wastewater delivered for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct operational emissions (`conditioning_direct_emissions`)

Conditional actual on-site equipment combustion or handling emissions require each named substance, particle size/speciation where relevant, receiving medium/compartment and measured amount or an explicitly justified activity factor. Inclusive services and upstream fuel emissions are not duplicated. No generic pollutant UUID or assumed emission merely because fuel is possible.

- Selected flow: Actual direct operational emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_conditioning
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning`
- Range: Provisional broad order-of-magnitude QA screen; not an emission factor or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Pre-gate drying and storage (`preservation`)

#### Inputs

##### Product flows

###### Usable raw in-shell nuts entering drying or storage (`preservation_nut_feed`)

Actual usable feed state and moisture measured before a declared pre-gate preservation intervention; no universal intervention, moisture target or storage lifetime. Accepted product can bypass this node when no intervention occurs.

- Selected flow: Usable raw in-shell nuts entering drying or storage
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Energy for actual drying and storage (`preservation_energy`)

Single conditional energy umbrella records actual fuel/electricity/heat, including attributable ventilation where present; air drying without powered service does not imply purchased energy. Native warehouse service hours remain separate.

- Selected flow: Energy for actual drying and storage
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable amount from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Attributed pre-gate preservation and storage service (`preservation_service`)

Native service hours attributed to actual lot and storage dates with shared asset/period ledger; do not add energy already inside an inclusive service. Actual preservatives/fumigants need separately identified product and emission records; none is assumed.

- Selected flow: Attributed pre-gate preservation and storage service
- Flow property / unit: Service time / h
- Amount rule: Measured attributable amount from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: h
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Raw in-shell wild nuts after declared preservation (`preserved_in_shell_nuts`)

Measured usable state at acceptance handoff after actual drying/storage; reconcile same lot water and solids with feed, losses and stocks. No generic wet-to-dry conversion, safe shelf-life claim or kernel equivalence.

- Selected flow: Raw in-shell wild nuts after declared preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Spoiled or rejected nuts from preservation (`preservation_rejects`)

Actual rejected state linked to drying/storage lot and destination; measured re-sort returns to conditioning retain added burdens and are not counted as new accepted output. Saleable downgraded goods use a product role and true recipient.

- Selected flow: Spoiled or rejected nuts from preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Water vapour emitted to air unspecified (`drying_water_vapour`)

Conditional actual evaporated water established by matched lot moisture/stock balance or measurement, only when the receiving compartment is explicitly air unspecified. Known specific air compartments need their own verified identity. Not wastewater, volatilized organic substances or unexplained mass loss.

- Selected flow: Water vapour emitted to air unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual direct operational emissions (`preservation_direct_emissions`)

Conditional actual on-site equipment combustion or handling emissions require each named substance, particle size/speciation where relevant, receiving medium/compartment and measured amount or an explicitly justified activity factor. Inclusive services and upstream fuel emissions are not duplicated. No generic pollutant UUID or assumed emission merely because fuel is possible.

- Selected flow: Actual direct operational emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_preservation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservation`
- Range: Provisional broad order-of-magnitude QA screen; not an emission factor or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Qualification, packaging and primary handover (`handover`)

#### Inputs

##### Product flows

###### Raw in-shell wild nuts entering final acceptance (`handover_nut_feed`)

Measure actual incoming state from collection, conditioning or preservation, or attributed already-gathered verified wild source. All chosen routes converge here; the feed amount is measured and not forced to 1 kg.

- Selected flow: Raw in-shell wild nuts entering final acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Packaging and presentation materials (`packaging_materials`)

Single conditional umbrella for actual sacks/containers/labels, by material mass excluding nuts; distinguish single-use, returnable and owned reused containers and actual service cycles. Packaging is outside reference net nut mass; reusable returns are stocks, not automatic waste.

- Selected flow: Packaging and presentation materials
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Energy for qualification and packaging equipment (`handover_energy`)

Single conditional energy umbrella only for actual pre-handover equipment fuel/electricity/heat. No retail transport or food preparation energy; inclusive service and directly recorded energy are not added twice.

- Selected flow: Energy for qualification and packaging equipment
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable amount from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Raw in-shell wild edible nuts at primary producer handover (`wild_nuts_handover`)

One accepted actual species/grade/state lot at the declared gatherer or primary producer gate. Net as-received in-shell mass includes its hard shell, excludes outer pod/husk and transport packaging/foreign matter. Edible identity/acceptance records are required, not food-safety advice or certification.

- Selected flow: Raw in-shell wild edible nuts at primary producer handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Reference normalization identity
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `collected_record`

###### Other accepted wild nut grades at their handover (`handover_other_grades`)

Conditional actual intended separately accepted grades or different dispatch lots; enumerate recipient, state and mass per output, not interchangeable reference quality. Do not double count conditioning's already-dispatched goods.

- Selected flow: Other accepted wild nut grades at their handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Acceptance and packaging rejects sent to waste (`handover_rejects`)

Actual off-spec nut/foreign matter and discarded packaging quantities kept separate by material and destination. Re-sort loops return measured quantities to conditioning; package reuse returns are not waste. Accepted mass excludes unresolved rejects.

- Selected flow: Acceptance and packaging rejects sent to waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Provisional broad order-of-magnitude QA screen; not a yield or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual direct operational emissions (`handover_direct_emissions`)

Conditional actual on-site equipment combustion or handling emissions require each named substance, particle size/speciation where relevant, receiving medium/compartment and measured amount or an explicitly justified activity factor. Inclusive services and upstream fuel emissions are not duplicated. No generic pollutant UUID or assumed emission merely because fuel is possible.

- Selected flow: Actual direct operational emissions
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount from cp_handover
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Range: Provisional broad order-of-magnitude QA screen; not an emission factor or default
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `output_ownership` | all outputs | Enumerate every intended accepted grade and actual other good with mass, quality, use and recipient handoff. Discards, retained residue and saleable goods are not interchangeable; no automatic coproduct or avoided-treatment credit. | |
| `allocation_precedence` | multiple intended goods | Subdivide separately measured operations first. Where inseparable shared burdens remain, use an evidenced physical causal driver; otherwise document a reviewed period-specific economic share with actual prices and sensitivity. One burden receives one method and shares sum to the allocated total; no universal nut/husk ratio. | |
| `period_site_attribution` | campaigns, stocks and shared assets | Reconcile each site's matching campaign inputs/accepted output, opening/closing stocks and transfers before mass-weighted aggregation of compatible species/state/gate. Do not average unrelated sites or seasons. Enumerate tool/access/store consumers and use measured hours/payload/activity as causal driver; asset service/renewal/termination burden goes to actual recorded periods once, no assumed lifetime. | |
| `reject_loop_burden` | conditioning, preservation, handover | Keep rejection/spoilage burden with its actual originating lot; measured returns to conditioning receive only additional operation burdens. Count an accepted lot once at handover, not at intermediate transfers or every re-sort pass. Downgraded goods and waste each retain their explicit burden decision. | |
| `inclusive_service` | transport and shared services | Inclusive contracted service and foreground energy/emission/asset inventories are alternative representations of the same responsibility; document one choice and exclusions. Human labour is not an inferred material/energy flow. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_collection | collection |natural removal, actual energy/tools, gathered material and incidental discards; direct operational emissions | field lot ledger |site; habitat; untended proof; species; season; dates; pod/shell state; dry/wet masses; resource owner; tool hours; energy carriers; recipient; incidental destinations; named pollutant/substance; particle size/speciation; receiving medium/compartment; actual equipment activity; measurement or justified activity-factor evidence; inclusive service exclusions |Weigh actual collected material; retain paired moisture test and source observation; meter or invoice real equipment/service activity; do not estimate tree growth from nut dispatch; record actual direct emissions by named substance/medium, measured amounts or actual activity with justified factors; separate evaporated water and inclusive-service emissions | kg; MJ; h | each collection lot and actual activity | named campaign/reporting period | each contributing untended source | per 1 kg reference flow | calibrated scale; source witness record; moisture sampling; owned activity boundary |
| cp_transfer | transfer | feed, actual transport and spoilage | movement ledger | lot; sender/receiver; gate; wild proof; departure/arrival mass; dates; route; mode; distance; payload/return load; inclusive service boundary; losses/destination | Match dispatch and arrival weighing; obtain actual transport activity and service invoice with supplier upstream burden and source proof | kg; t km | each segment/lot | actual dates and reporting period | source-to-declared primary gate only | per 1 kg reference flow | matched movement IDs; weighing; route/payload evidence; no repeated prior burden |
| cp_conditioning | conditioning |feed, supplies/energy/water, usable grades, other goods, residue and wastewater; direct operational emissions | operation/grade ledger |lot; incoming form/moisture; outer pod/husk removal; cleaning method; supplies; meters; water source/provider; usable grades/mass; reject/retained material; re-sort; wastewater receiver/pollutants; named pollutant/substance; particle size/speciation; receiving medium/compartment; actual equipment activity; measurement or justified activity-factor evidence; inclusive service exclusions |Measure each actual incoming and outgoing state, supply/meter quantities and destinations; paired same-lot mass/water records distinguish hard shell from outer pod; sample wastewater when discharged; record actual direct emissions by named substance/medium, measured amounts or actual activity with justified factors; separate evaporated water and inclusive-service emissions | kg; MJ | each actual handling/grade lot | actual operation dates | each declared handling site | per 1 kg reference flow | calibrated weighing/meters; grade acceptance; recipient evidence; mass/water reconciliation |
| cp_preservation | preservation |feed, actual energy/service, stabilized output, rejects and water vapour; direct operational emissions | drying/storage lot ledger |lot; pre/post water and solids; temperature if relevant; dates; opening/closing stocks; actual energy; service hours/consumers; usable output; spoilage; re-sort; receiving air compartment; named pollutant/substance; particle size/speciation; receiving medium/compartment; actual equipment activity; measurement or justified activity-factor evidence; inclusive service exclusions |Weigh and sample matched pre/post lots; meter real services; reconcile water change separately from spoilage/stock transfers; measure or calculate only evidenced evaporation; record actual direct emissions by named substance/medium, measured amounts or actual activity with justified factors; separate evaporated water and inclusive-service emissions | kg; MJ; h | each intervention and stock reconciliation | actual drying/storage dates and cross-period movements | each pre-gate store/drying site | per 1 kg reference flow | moisture method; paired scale records; stock ledger; intervention record; explicit air compartment |
| cp_handover | handover |measured feed, package material/energy, accepted reference/other grades and rejects; direct operational emissions | acceptance/dispatch ledger |species; source proof; campaign/lot; grade; edible identity/acceptance; gate; raw in-shell state; net/gross/tare; moisture; outer pod exclusion; packaging material/reuse cycles; energy; other recipients; rejected quantities/destinations; named pollutant/substance; particle size/speciation; receiving medium/compartment; actual equipment activity; measurement or justified activity-factor evidence; inclusive service exclusions |Weigh accepted raw in-shell nuts on a calibrated scale excluding transport packaging and foreign matter; retain acceptance and source chain; weigh each packaging material and actual other output separately; record actual direct emissions by named substance/medium, measured amounts or actual activity with justified factors; separate evaporated water and inclusive-service emissions | kg; MJ | each accepted handover lot and package cycle | actual dispatch date and reporting period | actual gatherer or primary producer gate | per 1 kg reference flow | calibrated weighing/tare; aligned acceptance record; identity/source proof; package reuse and reject records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_reconciliation` | physical material records | Same-boundary incoming material plus opening stock and actual added water/material must reconcile with separately measured usable/other-good/waste outputs, evidenced water loss and closing stock. Explain residual discrepancy; never treat all mass loss as evaporation. | matched forms and moisture; stocks; weighed outputs and destinations | reconciled lot ledger and discrepancy evidence | |
| `record_normalization` | collected exchange records | Divide each actual physical campaign/lot quantity by the matching accepted net in-shell kilograms for the physical ledger per 1 kg reference flow. Keep all measured inputs, intermediates, other goods, wastes and stocks in that ledger without economic-share scaling. Separately apply the documented allocation decision to shared burdens, then divide the burden attributed to the reference product by its matching accepted mass. Label physical-ledger and allocated-burden results distinctly; allocation must not change measured yields or erase co-output mass. A missing accepted denominator is a gap. | owned quantities; matched accepted mass; allocation and period/site records | separately labelled normalized physical ledger and allocated burden | |
| `resource_bridge` | natural_nut_removal | Retain measured natural-source nut-bearing form mass and paired water/solids conversion when elementary support uses dry matter; do not set dry biomass resource equal to wet dispatch. | matched resource state; paired moisture; quantity | evidenced source mass basis | |
| `water_loss` | drying_water_vapour | Derive only actual evaporated water from matched pre/post water, added water, stock movements and water leaving other paths; prove receiving air compartment. No whole mass-loss or universal drying factor. | moisture and weighed lot records; water/waste paths; stock ledger | actual evaporated water | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `source_form_quality` | every nut-bearing lot | Declare wild untended proof, species, edible identity and acceptance criterion, raw in-shell state, hard shell included, outer pod/husk excluded and moisture basis; unverified/unknown source is a gap, not default wild status or food advice. | source observations and supplier chain; actual acceptance/test record |
| `campaign_site_coverage` | aggregated foreground | Enumerate contributors, dates, reporting periods, sampling/omission decisions and comparable gate/state. Reconcile every site ledger before compatible output-mass weighting. Include unused/failed campaign activity when attributable, never successful-lot-only bias. | site/campaign contribution table and sampling rationale |
| `stock_assets` | assets and cross-period material | Match opening/closing balances, source/destination transfers, asset service periods, replacement/termination events and actual consumers; unresolved period ownership blocks final attribution. | stock/asset/use ledger and reconciliation |
| `measurement_identity` | concrete exchange production | Identify actual supplies, services, wastes and elementary substances/receiving compartments with verified property/unit. No generic umbrella UUID, invented pollution factor or automatic emission from a common name. | concrete identity detail evidence; primary measurements or reviewed factors |
| `provisional_ranges` | non-reference Range blocks | Broad candidate-only QA estimates use 0 lower to permit actual non-occurrence. Mass screens of 20 kg cover uncertain pod/foreign-matter forms, repeated measured intermediates and deliberately broad substance-specific emission screening (not combustion stoichiometry); 10 kg cover loss paths and ancillary materials; packaging 5 kg flags large returnable-container attribution. Energy 100 MJ, service 20/100 h and transport 100 t km deliberately flag unusually intense small-output campaigns. These order-of-magnitude author screens are not FAO quantities, plausible yield guarantees, defaults or admissible maxima. Values outside require reviewed scope/evidence, never clipping, zero replacement or automatic rejection; replace with matched empirical intervals. | reasoned_estimate; no external numerical source claimed |
| `reference_range` | wild_nuts_handover | The 1..1 kg range is the declared normalization identity, not collection yield, required dispatch size or physical input-output equality. | cp_handover accepted denominator |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Check real accepted output at declared gate, net in-shell kg, species/grade/source/moisture and matching reference link/name; upstream/intermediate mass must not be fixed to 1 kg. | |
| `validate_route` | source and operations | Validate untended gathered source, actual active/bypassed nodes and their handoffs; exclude cultivated inputs and kernel processing. One source portion has one resource/upstream owner. | unsd-cpc3-wild-nuts |
| `validate_mass_destinations` | all material records | Reconcile actual shell/pod/water/stock states and every usable grade, other good, waste or retained residue; prevent unknown mass loss from becoming water vapour and rejects from becoming accepted reference. | |
| `validate_campaign_allocation` | campaigns/sites/periods/shared assets | Check contributor completeness, compatible weighted aggregation, actual campaign/changeover records and allocation precedence/shares. Replacement/termination and return/re-sort events have one owner; repeated service/energy/stock burdens fail. | |
| `validate_identities` | concrete exchanges | Confirm exact flow type, state/gate, wild origin where relevant, property/unit and elementary compartment. Resolve each umbrella from actual records; verification and quantity evidence remain separate. Missing identity or unsupported conversion stays a gap. | |
| `validate_ranges` | every card | Check Range basis/unit/evidence alignment and measured zero/positive occurrence; provisional screens trigger evidence review, not a default quantity. Record performed/skipped checks and remaining uncertainty. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package; downstream secondary_dataset or background_dataset only within declared compatible scope |
| downstream_use | Dataset/process/lifecyclemodel representation of actual untended-source raw in-shell primary supply |
| allowed_use | Same species/state/grade/source eligibility, moisture basis, actual gate and route with disclosed representativeness |
| excluded_use | Cultivated nuts; shelled/processed foods; universal nut mixes/yields; unverified edible identity; safety certification; avoided-product credits; undisclosed stage or source substitution |
| required_metadata | Source/site/campaign/lot; species; wild proof; state/shell/husk/moisture/grade; actual gate/route; temporal/geographic scope; protocols; allocation and contributors; stock/assets; concrete identities |
| required_quality_disclosure | Measurements and tests; primary source provenance; unverified identities; provisional ranges; omissions/sampling; stocks/reject destinations; uncertainty; performed/skipped validation |
| update_trigger | New species/source/form/gate, actual route or supplier change, refined measurements or UUID evidence, asset/stock attribution change or revised classification/method evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-wild-nuts | official_guidance | United Nations Statistics Division CPC 3.0 03231, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03231 | Untended gathered wild origin and intentional-growing exclusion; no numerical factors |
| fao-nwfp-food-handling | handbook | FAO, International trade in non-wood forest products: An overview, III Food products, https://www.fao.org/4/x5326e/x5326e05.htm | Natural nut collection, pod/cone handling, cleaning and distinct raw in-shell/shelled markets; historical quantities/prices/seasons not adopted |
