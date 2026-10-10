---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.lac-resins-balsams-natural-gums-and-other-resins-n-e-c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Primary natural tree exudate gums, resins, balsams and crude lac

## 1. Scope and Applicability

This PCR covers named primary tree/woody-plant exudate natural gums, resins, balsams, gum-resins and oleoresins, and crude insect-secreted lac, from declared host-production context or existing natural host stands to the actual producer dispatch gate. Simple evidenced primary collection, cleaning, grading or drying is included before that gate; an unconditioned lot may bypass preparation. Identify each actual product, biological source, state and quality. A category anchor is not one pure substance or an assertion that these goods are interchangeable. Plant natural exudation or tapping and lac natural collection or intentional host inoculation are distinct conditional source operations. [fao-plant-exudate-production; fao-lac-primary-states]

Excluded are rubber-like primary gums in CPC 03211, natural rubber, synthetic/chemically modified resins, seed/seaweed/microbial-extracted gums, formulated coatings, industrial distilled/fractionated rosin and turpentine, extracted/refined shellac, and dissolved/purified/spray-dried functional formulations beyond this primary scope. These are PCR scope exclusions, not a claim that the entire CPC 03219 leaf excludes all refined lac or resin forms. The CPC label has no detailed explanatory note; this reviewed primary-only category is a narrower partial methodology, not proven exact coverage. [unsd-cpc-natural-resins]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.lac-resins-balsams-natural-gums-and-other-resins-n-e-c |
| classification_refs | cpc:3.0:03219; narrower primary-only scope |
| covered_products | Identified primary woody-plant natural exudate gums, resins, balsams, gum-resins and oleoresins; crude lac with declared sticklac or mechanically cleaned unextracted state |
| excluded_products | Rubber-like gums; natural rubber; synthetic/modified resins; extracted seed/seaweed/microbial gums; industrially extracted/refined shellac; distilled rosin/turpentine; finished formulations |
| representative_product | One named and qualified primary gum, resin, balsam or crude lac lot at its actual producer dispatch gate, never a generic pure-resin proxy |
| production_route | Actual managed or natural host context; plant tapping/natural exudate collection OR lac-insect collection with evidenced inoculation; actual optional simple preparation; producer dispatch |
| market_state | Actual primary as-received product with recorded form, grade, water, volatile constituents and incidental impurities; packaging excluded from product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actual named qualified primary natural gum, resin, balsam or crude lac at producer dispatch |
| How much | 1 kg net as-received product excluding packaging |
| How well | Actual biological identity, host, origin, form, grade, water/volatile/impurity basis and declared primary dispatch gate |
| How long or cycle | Declared tapping/collection season or lac inoculation-to-harvest cycle and dispatch accounting period; separately link host establishment, maintenance, recovery and replacement periods |
| reference_flow_link | `primary_product_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Named primary natural gum resin balsam or crude lac at producer dispatch |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | named product identity; biological producer and host species; lac strain when applicable; origin/site; managed or natural context; tapping/natural collection/inoculation route; actual primary form and grade; water basis and method; volatile/impurity basis; collection cycle and dispatch period; net/tare basis; exact producer gate; actual preparation; allocation and inventory movements |

Each foreground package instantiates this category anchor as one actual qualified product, not a mixture of unlike identities. The reference is the single `primary_product_dispatch` output. All upstream primary material transfers remain measured quantities; raw sticklac containing attached material cannot be treated as 1 kg pure resin. The final unit is as-received mass, not dry-polymer mass or an assumed moisture standard. Do not silently select a default product or route when identity, gate or state is unknown.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Obtain accepted net dispatch mass by calibrated weighing or traceable matched gross-minus-tare records, excluding packaging; use cp_producer_dispatch. Report all inventory per 1 kg reference flow. |
| `material_state_bridge` | collected_exudate; collected_lac; raw_primary_material; prepared_primary_material; dispatch_product_received | Mass | kg | Preserve raw wet/net/gross measurements, matched water test and impurity records; derive dry-matter or other state bridges only from the same identified lot with uncertainty. No universal fresh-to-dry, sticklac-to-resin or species conversion. |
| `volatile_water_separation` | evaporated_water; natural_volatile_emissions | Mass | kg | Distinguish specific water loss, natural volatile loss, removed impurities, accepted product and residual stock; loss-on-drying alone cannot establish water or one emitted substance. |
| `carrier_units` | energy carrier rows and variable material roles | Actual carrier property | actual recorded unit | Retain each concrete carrier/material identity and original units; aggregate only equivalent quantities after explicit traceable conversions. Record supplied energy versus fuel and combustion burdens without overlap. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual existing natural host stand, attributable managed host establishment/maintenance context, or purchased identified primary material with its supplier boundary |
| starting_condition_role | Declared upstream host-production or supplied-primary-material context, not a zero-burden assumption |
| product_classification_scope | Reviewed primary-only partial CPC 03219 methodology; excluded refinement and other gum classes require their own methodology |
| recursive_input_rule | Record purchased or retained same-category primary material/broodlac by actual supplier or prior cycle and handoff; stop recursion at that declared interface and attach its upstream dataset or a disclosed unresolved gap |
| upstream_dataset_requirement | Concrete verified background datasets for supplied materials, carriers, water, treatment and purchased primary inputs; attributable host-production history where material |
| disclosure | Source/host and rights; management history and land use; route activation; start/end dates and gate; stock and internal-transfer boundaries; actual conditioning; excluded refining; allocation, infrastructure and upstream gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `source_selection` | plant_collection; lac_collection | Select exactly the evidenced source for each material lot; a blended dataset must retain separately traceable source contributions, not assume each kg passed through both routes. Collection removes material from its biological context and is separately recorded from host management and later preparation. | fao-plant-exudate-production; fao-lac-primary-states |
| `primary_gate` | all processes | Include actual attributable operations before producer dispatch only. Simple raw-to-prepared state changes do not imply extraction or refining. Raw lac, mechanically cleaned unextracted lac and extracted shellac are not interchangeable states. | fao-lac-primary-states; fao-gum-primary-handling |
| `host_period_boundary` | host_management | Declare host establishment, productive seasons, maintenance, replacement/termination and actual land occupation/transformation. Link host state to collection by plot/host/cycle, not an invented saleable host-material exchange. | fao-gum-primary-handling |
| `inventory_interface` | all internal transfers | Match each material handoff to source/receiving records with state, mass and period; consolidate internal transfers only at package aggregation. Purchased supplied water is not simultaneously direct environmental abstraction; treatment transfer is not direct environmental discharge. | |
| `operational_emissions` | energy and host material roles | For actual on-site combustion or chemical application, enumerate attributable direct emissions by concrete substance, medium and method; do not omit them, invent generic gas factors, or duplicate combustion already included in an energy service dataset. | |
| `shared_asset_boundary` | host_management; primary_preparation; producer_dispatch | Record shared roads, tools, pumps, grading equipment and stores by consuming node and service period; include attributable establishment/maintenance or disclose exclusions and materiality, without duplicate shared totals. | |
| `biological_source_handoff` | `host_management`; `plant_collection`; `lac_collection`; `primary_preparation`; `producer_dispatch` | Use cp_biological_source_plant_collection; cp_biological_source_lac_collection to link every measured collected lot to its host/source, collection output card and first receiving node. Biologically secreted material is not simply manufactured from tools, fuel or inoculation broodlac; do not force crude-product mass closure against these auxiliary inputs. Own-source formation/removal records are source-explicit physical ledgers, not fabricated purchased products, unverified generic elementary flows or automatic carbon uptake. Purchased primary material uses its supplier receipt once, without a second current-site source removal. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `host_management` | Managed host production and maintenance | `conditional` | Actual establishment or management of hosts for plant exudate or lac production; otherwise record existing natural host context without invented cultivation. | managed biological production | per 1 kg reference flow; retain raw plot/cycle/lot basis in collection records |
| `plant_collection` | Plant exudate tapping or natural collection | `conditional` | Plant-origin exudate lot; disclose tapping or natural exudation and exclude lac-insect route for that same material. | harvest capture | per 1 kg reference flow; retain raw plot/cycle/lot basis in collection records |
| `lac_collection` | Lac host inoculation and crude lac harvest | `conditional` | Lac-insect secretion lot; deliberate inoculation only when evidenced; natural lac collection bypasses inoculation. | harvest capture | per 1 kg reference flow; retain raw plot/cycle/lot basis in collection records |
| `primary_preparation` | Primary cleaning grading and preparation | `conditional` | Actual simple pre-dispatch cleaning, sorting or drying; bypass unchanged material when no operation occurs; industrial refining is excluded. | primary conditioning and grading | per 1 kg reference flow; retain raw plot/cycle/lot basis in collection records |
| `producer_dispatch` | Producer storage protection and dispatch | `required` | Every accepted reference lot; packaging and storage only to the extent actually performed. | producer handover | per 1 kg reference flow; retain raw plot/cycle/lot basis in collection records |

Production uses actual seasonal/cycle and lot records, not a universal continuous process. Plant collection and lac collection are alternative source responsibilities for a single product lot. Host management and preparation apply only under their recorded conditions; bypass records carry identity and mass directly to producer dispatch. Rework returns to its originating preparation node with its existing burdens; accepted and off-spec grades, waste, stock and emissions have distinct destinations. Energy and variable-input cards are record-driven umbrellas: expand actual exchanges, not guessed fixed identities or mandatory recipes.

### Process: Managed host production and maintenance (`host_management`)

#### Inputs

##### Product flows

###### Host maintenance materials (`host_inputs`)

Declared nursery plants, fertilizers, protection chemicals and consumables used to maintain actual host plots; expand from records into concrete material exchanges with separate units, formulation and nutrient/active-ingredient basis. Natural unmanaged collection does not inherit cultivation burdens.

- Selected flow: Host maintenance materials
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_host_management; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_host_management`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Host management energy carriers (`host_energy`)

Actual fuels, purchased electricity and supplied heat for establishment and maintenance only; preserve carrier, native units and metering period before justified conversion. Do not duplicate shared pump or equipment energy at collection.

- Selected flow: Host management energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Attributed measured quantity from cp_host_management; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_host_management`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied host irrigation water (`host_water`)

Purchased or supplied irrigation water if used; disclose source and avoid adding an elementary abstraction for the same supplied water.

- Selected flow: Supplied host irrigation water
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_host_management; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_host_management`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No exchange is invented for an unobserved class; actual applicable exchanges require evidenced identities, destinations and measurement.

##### Elementary flows

###### Direct host irrigation water abstraction (`host_direct_water`)

Only actual directly abstracted environmental water enters here, with source resource/compartment, location, permitted quantity and withdrawal versus consumption/release basis. A product-supplied water exchange uses host_water instead; exclude duplicate supplied-water amounts. No universal groundwater/surface-water identity is inferred.

- Selected flow: Direct host irrigation water abstraction
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_host_management; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_host_management`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Occupied host production land (`host_land_occupation`)

Record managed host area multiplied by attributable occupancy time and share; disclose land class, previous use and actual transformation separately, never assume wild collection has zero ecological burden.

- Selected flow: Occupied host production land
- Flow property / unit: Area-time / m2*a
- Amount rule: Attributed measured quantity from cp_host_management; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_host_management`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m2*a
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Actual saleable host management goods (`host_other_goods`)

When management produces independently transferred host wood or other evidenced goods, expand the actual named product, state and receiver here. Unharvested hosts remain production context; retained residues are not invented saleable outputs. Apply host-period and multi-output attribution.

- Selected flow: Actual saleable host management goods
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_host_management; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_host_management`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


No exchange is invented for an unobserved class; actual applicable exchanges require evidenced identities, destinations and measurement.

##### Waste flows

###### Host maintenance wastes (`host_management_waste`)

Spent chemical containers and nonsaleable maintenance residues leaving for identified treatment; materials retained on plot are not waste exports.

- Selected flow: Host maintenance wastes
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_host_management; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_host_management`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual on-site combustion substances to air (`host_management_combustion_air`)

Where recorded fuel is burned inside this node, produce separate air exchanges for measured or method-supported individual substances and carbon origin, using the same fuel accounting. This umbrella has no one compound identity; purchased electricity/heat never creates invented local exhaust.

- Selected flow: Actual on-site combustion substances to air
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_host_management; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_host_management`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Plant exudate tapping or natural collection (`plant_collection`)

This plant-collection node records measured collected quantities and biological origin through `cp_biological_source_plant_collection`, linked one-to-one to its actual output card and downstream receipt lot. Keep attached bark/twigs, water and other incidental impurities in separately identified supporting ledgers on measured state bases, not all as newly formed exudate; retain unknown components as gaps. Broodlac and lac-insect inoculation belong only to the distinct lac_collection route.

#### Inputs

##### Product flows

###### Plant tapping and collection materials (`tapping_materials`)

Actual collection vessels, tool replacement shares and permitted stimulants when tapping occurs; naturally exuded material collection does not automatically use stimulants. Record formulations and quantities separately within this material-role card.

- Selected flow: Plant tapping and collection materials
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_plant_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plant_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `fao-tapping-route`; `fao-plant-exudate-production`

###### Plant collection energy carriers (`plant_collection_energy`)

Meter attributable collection and in-boundary site movement energy; manual collection may have verified zero purchased energy, not an assumed universal zero.

- Selected flow: Plant collection energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Attributed measured quantity from cp_plant_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plant_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No exchange is invented for an unobserved class; actual applicable exchanges require evidenced identities, destinations and measurement.

##### Elementary flows

No exchange is invented for an unobserved class; actual applicable exchanges require evidenced identities, destinations and measurement.

#### Outputs

##### Product flows

###### Collected named plant exudate before conditioning (`collected_exudate`)

Weigh actual gum, resin, balsam, gum-resin or oleoresin with its measured water, volatile and incidental impurity state at collection handoff. This is an internal transfer, not an additional final reference product.

- Selected flow: Collected named plant exudate before conditioning
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_plant_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plant_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `fao-tapping-route`; `fao-plant-exudate-production`

##### Waste flows

###### Discarded tapping and collection residues (`plant_collection_waste`)

Record discarded containers or contaminated collected solids by actual waste type and recipient; distinguish on-tree uncollected exudate from collected waste.

- Selected flow: Discarded tapping and collection residues
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_plant_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plant_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual on-site combustion substances to air (`plant_collection_combustion_air`)

Where recorded fuel is burned inside this node, produce separate air exchanges for measured or method-supported individual substances and carbon origin, using the same fuel accounting. This umbrella has no one compound identity; purchased electricity/heat never creates invented local exhaust.

- Selected flow: Actual on-site combustion substances to air
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_plant_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plant_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Lac host inoculation and crude lac harvest (`lac_collection`)

This collection node records measured collected quantities and biological origin through `cp_biological_source_lac_collection`, linked one-to-one to its actual output card and downstream receipt lot. Keep broodlac, attached twigs/insect matter, water and other impurities in separately identified supporting ledgers on measured state bases, not all as newly formed resin; retain unknown components as gaps.

#### Inputs

##### Product flows

###### Broodlac used for deliberate host inoculation (`broodlac`)

Record actual transferred broodlac with viable insect strain, host material and wet/net basis only for intentional inoculation; natural lac collection has no invented broodlac input. Retained or purchased broodlac is a tracked biological input, not free resin production.

- Selected flow: Broodlac used for deliberate host inoculation
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_lac_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lac_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `fao-lac-primary-states`

###### Lac host inoculation and harvest materials (`lac_collection_materials`)

Actual tying, collection and harvest consumables excluding broodlac already recorded; link use to inoculation and harvest phases of the same host/cycle.

- Selected flow: Lac host inoculation and harvest materials
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_lac_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lac_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Lac inoculation and harvest energy carriers (`lac_collection_energy`)

Actual energy for host access, inoculation, cutting/scraping and internal movement, attributed to the observed lac cycle; do not count host maintenance energy twice.

- Selected flow: Lac inoculation and harvest energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Attributed measured quantity from cp_lac_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lac_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No exchange is invented for an unobserved class; actual applicable exchanges require evidenced identities, destinations and measurement.

##### Elementary flows

No exchange is invented for an unobserved class; actual applicable exchanges require evidenced identities, destinations and measurement.

#### Outputs

##### Product flows

###### Actual retained broodlac and harvest coproduct goods (`lac_other_goods`)

Separately enumerate viable broodlac retained/transferred to another cycle and saleable harvested host wood or other evidenced goods with their actual state and handoff. Record stock versus sale versus internal next-cycle use; no generic resin UUID or automatic coproduct credit. Discarded branches remain lac_harvest_waste.

- Selected flow: Actual retained broodlac and harvest coproduct goods
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_lac_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lac_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Collected crude lac before conditioning (`collected_lac`)

Measure actual sticklac or other explicitly documented crude lac state including attached twig/bark/insect matter; never relabel this quantity as extracted shellac or pure resin.

- Selected flow: Collected crude lac before conditioning
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_lac_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lac_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `fao-lac-primary-states`

##### Waste flows

###### Lac harvest discarded host residues (`lac_harvest_waste`)

Record off-spec harvested material or branch residues exiting as waste. Branches sold as fuel or other goods become separately identified co-products, not this waste card.

- Selected flow: Lac harvest discarded host residues
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_lac_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lac_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual on-site combustion substances to air (`lac_collection_combustion_air`)

Where recorded fuel is burned inside this node, produce separate air exchanges for measured or method-supported individual substances and carbon origin, using the same fuel accounting. This umbrella has no one compound identity; purchased electricity/heat never creates invented local exhaust.

- Selected flow: Actual on-site combustion substances to air
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_lac_collection; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lac_collection`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary cleaning grading and preparation (`primary_preparation`)

#### Inputs

##### Product flows

###### Received collected primary gum resin or lac (`raw_primary_material`)

Match the active source output by lot and state, including external purchased primary material with upstream burden. Track opening/closing stock and any returned material; do not fix the raw feed to 1 kg.

- Selected flow: Received collected primary gum resin or lac
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary preparation energy carriers (`preparation_energy`)

Actual energy for evidenced simple cleaning, screening, sorting, drying and storage before dispatch; no mandatory heated drying, extraction or universal recipe.

- Selected flow: Primary preparation energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary preparation supplied water (`preparation_water`)

Only actual water used for supported primary cleaning; record source and contact use. Lac conversion involving resin extraction or refining is outside this primary handover scope.

- Selected flow: Primary preparation supplied water
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary preparation consumable materials (`preparation_materials`)

Actual cleaning and maintenance consumables only; preserve concrete identities and avoid embedding extraction solvents, reactive modification or blended finished formulations.

- Selected flow: Primary preparation consumable materials
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No exchange is invented for an unobserved class; actual applicable exchanges require evidenced identities, destinations and measurement.

##### Elementary flows

###### Direct primary preparation water abstraction (`preparation_direct_water`)

If primary cleaning directly abstracts environmental water, identify the actual resource compartment/location and measured withdrawal here; supplied water uses preparation_water instead. Keep source-specific consumption and return records and never count one quantity under both cards.

- Selected flow: Direct primary preparation water abstraction
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


No exchange is invented for an unobserved class; actual applicable exchanges require evidenced identities, destinations and measurement.

#### Outputs

##### Product flows

###### Prepared named primary gum resin or lac for dispatch (`prepared_primary_material`)

Actual accepted primary product in its declared form after actual cleaning/drying or unchanged on bypass. Preserve sticklac versus mechanically cleaned unextracted lac distinctions. Transfer to dispatch, not a second sale.

- Selected flow: Prepared named primary gum resin or lac for dispatch
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other accepted grade or coproduct goods (`other_grade_products`)

Enumerate independently sold off-reference grades or recoverable primary material from preparation by actual name, quality, quantity and receiver; host-management and lac-harvest goods are recorded at their own originating output cards, not relocated here. Do not force all families into a fixed resin identity.

- Selected flow: Other accepted grade or coproduct goods
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Removed impurities and rejected primary solids (`preparation_solid_waste`)

Weigh separated bark, soil, twig or contaminated gum/resin/lac classified as waste at treatment handover. Retained rework stays linked internally with its existing burdens.

- Selected flow: Removed impurities and rejected primary solids
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary preparation wastewater transferred for treatment (`preparation_wastewater`)

Measure actual wastewater leaving to treatment, including suspended solids and organic load where tested; treated effluent to nature is a separate elementary discharge, not this waste transfer.

- Selected flow: Primary preparation wastewater transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Evaporated moisture to air (`evaporated_water`)

Obtain water loss from matched water-specific measurements or closure with uncertainty. Loss on drying may include natural volatile oils and cannot automatically be called water. The fixed water-vapour identity below applies only when the declared receiving compartment is air, unspecified; a known more-specific receiving compartment requires its own compatible verified identity, not silent use of this default.

- Selected flow: Water vapour, emissions to air unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Measured natural volatile constituents to air (`natural_volatile_emissions`)

When volatile loss occurs, enumerate actual measured constituent identity and air compartment separately under this conditional role. A total mass loss or generic VOC label cannot supply one fixed compound UUID.

- Selected flow: Measured natural volatile constituents to air
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual on-site combustion substances to air (`primary_preparation_combustion_air`)

Where recorded fuel is burned inside this node, produce separate air exchanges for measured or method-supported individual substances and carbon origin, using the same fuel accounting. This umbrella has no one compound identity; purchased electricity/heat never creates invented local exhaust.

- Selected flow: Actual on-site combustion substances to air
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_primary_preparation; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_preparation`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Producer storage protection and dispatch (`producer_dispatch`)

#### Inputs

##### Product flows

###### Accepted primary product received for producer dispatch (`dispatch_product_received`)

Trace actual accepted product from preparation, or the declared source on a no-conditioning bypass; preserve state and inventory changes. Its measured receipt is not fixed to the final reference quantity.

- Selected flow: Accepted primary product received for producer dispatch
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_producer_dispatch; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_producer_dispatch`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Producer dispatch protection and packaging materials (`dispatch_packaging`)

Actual sacks, liners or containers protecting the named primary product; identify material, tare, new/reused status, number of actual uses and final destination. Exclude packaging from product net mass.

- Selected flow: Producer dispatch protection and packaging materials
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_producer_dispatch; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_producer_dispatch`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Producer storage and dispatch energy carriers (`dispatch_energy`)

Actual in-boundary storage, weighing and handling energy. Customer transport, distribution and product use begin after the declared producer dispatch gate and are excluded.

- Selected flow: Producer storage and dispatch energy carriers
- Flow property / unit: Energy / MJ
- Amount rule: Attributed measured quantity from cp_producer_dispatch; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_producer_dispatch`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No exchange is invented for an unobserved class; actual applicable exchanges require evidenced identities, destinations and measurement.

##### Elementary flows

No exchange is invented for an unobserved class; actual applicable exchanges require evidenced identities, destinations and measurement.

#### Outputs

##### Product flows

###### Named primary natural gum resin balsam or crude lac at producer dispatch (`primary_product_dispatch`)

The sole final reference output is actual qualified primary product in its declared lot-specific form and measured water/volatile/impurity state. Do not aggregate incompatible species, grades or forms as an interchangeable pure chemical.

- Selected flow: Named primary natural gum resin balsam or crude lac at producer dispatch
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_producer_dispatch`
- Range: Exact normalized reference quantity, not an empirical yield interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Producer dispatch damaged packaging and rejected solids (`dispatch_waste`)

Enumerate actual damaged packaging and final rejected product separately by waste identity and treatment recipient under this variable-role card; keep returns/rework internal and exclude rejected mass from accepted reference output.

- Selected flow: Producer dispatch damaged packaging and rejected solids
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_producer_dispatch; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_producer_dispatch`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual on-site combustion substances to air (`producer_dispatch_combustion_air`)

Where recorded fuel is burned inside this node, produce separate air exchanges for measured or method-supported individual substances and carbon origin, using the same fuel accounting. This umbrella has no one compound identity; purchased electricity/heat never creates invented local exhaust.

- Selected flow: Actual on-site combustion substances to air
- Flow property / unit: Mass / kg
- Amount rule: Attributed measured quantity from cp_producer_dispatch; normalize once to matched accepted net dispatch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_producer_dispatch`
- Range: Replaceable provisional broad QA screen; not a default or mandatory limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivision_first` | all intended output grades and host coproducts | Prefer measured process/lot subdivision. Enumerate actual primary product grades, saleable host wood and retained/sold broodlac with quantity, quality, boundary and receiver. Grade outputs that leave independently are products; discarded material is waste, not an automatic coproduct credit. | |
| `common_host_burdens` | shared host production and seasonal outputs | Attribute remaining common host/asset burdens using documented causal service, area-time or use records where defensible. If inseparable products lack a defensible physical relation, use contemporaneous site-gate economic shares with price/quantity evidence and sensitivity; never prescribe one mass split or price for all gums, resins and lac. | |
| `period_attribution` | establishment; productive seasons; replacement and shared assets | Link establishment and maintenance to actual productive and nonproductive periods, host replacement and termination, and future output expectations with sensitivity. A harvest may not carry both its full establishment cost and a second annualized copy. No universal host lifetime, gum yield or lac cycle is prescribed. | |
| `rework_retention` | primary_preparation; producer_dispatch | Keep internal rework/returns with their originating burdens and record repeated energy/material use; net final accepted output excludes rejects and stock retained for a later period. Record waste treatment responsibility explicitly; do not assume substitution credits. | |
| `common_service_once` | shared roads pumps tools stores and changeovers | Register all consuming nodes and periods, meter/subdivide where possible and distribute the one common total using evidenced services. Attribute campaign cleaning and changeovers once to actual lots; compatible output totals reconcile to the denominator before reference normalization. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_host_management` | host_management | management inputs land and shared assets | host/plot and period ledger | host species; plot; management status; area; land class; establishment and replacement dates; input identities/formulations; native quantity/unit; water source; productive periods; all outputs; shared use; emissions method; attribution evidence; linked dispatch net mass | Trace actual plot/cycle activity records, calibration, invoices and land-use history; retain original area/cycle/service bases and convert their attributed totals exactly once to the net accepted dispatch denominator. Record actual direct abstraction/transformation separately where applicable. | actual native units; normalized card units | each event and reporting period | complete establishment and attributable productive periods | declared host plots and services | per 1 kg reference flow | traceability; allocation ledger; independent total reconciliation |
| `cp_plant_collection` | plant_collection | plant exudate collection and direct emissions | collection lot record | botanical identity; natural/tapped method; dates; collected gross/tare/net mass; water/impurity state; stimulus formulation; native inputs/energy units; losses; destination; emissions substances/medium/method; linked dispatch mass; source_handoff_key; matched_output_receipt_rows; own_or_purchased; component_basis | Weigh and identify each collected lot and reconcile tools, materials, fuel and retained stock; preserve raw collection-unit and seasonal data, apply evidenced allocation then divide by matched accepted dispatch net mass exactly once. Retain unallocated source and collected-material physical ledgers under cp_biological_source_plant_collection; burden attribution must not reduce those physical quantities. | actual native units; normalized card units | each tapping/collection event and lot | complete declared season and dispatch lots | declared source sites | per 1 kg reference flow | scales; source/lot logs; raw-to-final reconciliation |
| `cp_lac_collection` | lac_collection | inoculation harvest broodlac and residues | host/cycle and harvest record | lac insect strain; host species/plot; natural or inoculated status; broodlac identity/mass; inoculation and harvest dates; twig/impurity basis; wet/net mass; surviving/retained brood; energy/materials; destination; emissions; dispatch link; source_handoff_key; matched_output_receipt_rows; own_or_purchased; component_basis | Identify actual host/cycle and weigh crude harvest plus broodlac separately; natural collection records zero inoculation only with evidence. Retain raw host/cycle bases and attribute quantities then normalize exactly once to linked net accepted dispatch mass. Retain unallocated source and collected-material physical ledgers under cp_biological_source_lac_collection; burden attribution must not reduce those physical quantities. | actual native units; normalized card units | each inoculation and harvest lot | full recorded inoculation-to-harvest cycle or natural collection period | declared hosts/sites | per 1 kg reference flow | brood and harvest reconciliation; scales; cycle linkage |
| `cp_primary_preparation` | primary_preparation | raw/prepared material grades wastes water and volatile losses | preparation lot ledger | incoming state/mass; process and bypass flags; incoming/outgoing water and impurity tests; retained volatile constituents; opening/closing stocks; accepted grades; rework; solids; wastewater; energy/material native units; emissions substance/air; actual treatment recipient; dispatch mass | Weigh inputs, outputs and stock; meter actual supplies and separate water-specific versus other volatile tests. Preserve raw preparation batch balances and uncertainty; allocate shared operations and normalize totals once to matched net accepted dispatch mass. Unexplained loss remains a gap. | actual native units; normalized card units | each preparation run and changeover | whole declared preparation and storage period | declared producer preparation site | per 1 kg reference flow | mass/water/volatile/impurity closure; tests; meter records; waste tickets |
| `cp_producer_dispatch` | producer_dispatch | accepted reference output packaging receipts and rejects | lot dispatch acceptance ledger | named identity/form/grade; source lot; preparation/bypass; gross; tare; accepted net mass; water/volatile/impurity method and result; receipts; opening/closing stocks; other outputs; reject destination; packaging new/reuse records; native energy units; gate/date; attribution; emissions | Calibrated weighing or matched traceable gross-minus-tare acceptance records; exclude packaging and rejected mass. Preserve original lot totals and carrier units, reconcile receipts plus opening stock against all dispatches, losses and closing stock, and normalize attributed totals exactly once to accepted net reference-product mass. | actual native units; kg accepted product; normalized card units | each dispatch and accounting period | complete declared dispatch period matched to source cycle | actual producer dispatch gate | per 1 kg reference flow | calibrated scales; matched tare/gate/grade records; stock closure; packaging reuse evidence |
| `cp_biological_source_plant_collection` | `plant_collection` | Biological source to collected material and first receipt | Linked source, harvest and receipt record | handoff_key; host/source_id; own_or_purchased; managed_or_natural; lot/cycle/date; output_row_id; receiving_process/row; gross/tare/net_mass; water/volatile/impurity_basis; attached_bark/twigs; opening/closing_collected_stock; source_formation/removal_evidence; losses; uncertainty | Use source/host surveys, collection weighing and matched receipts to record actual primary material removed. Report total biological formation only from independent observations or an applicable model, never by forcing a product-balance residual. Distinguish the collected plant exudate from attached bark/twigs, water and other impurities, retaining uncertainty; broodlac and inoculation records apply only to lac_collection. Uncollected hosts and exudates remain source context or separate stock ledgers, not extra external products. | kg on matched wet/dry/component bases | Each lot and collection cycle | Matched source cycle, preparation and dispatch periods | Actual host/source and receiving node | per 1 kg reference flow | Calibrated weights; matched source and receipt; component tests; gap register |
| `cp_biological_source_lac_collection` | `lac_collection` | Biological source to collected material and first receipt | Linked source, harvest and receipt record | handoff_key; host/source_id; own_or_purchased; managed_or_natural; lot/cycle/date; output_row_id; receiving_process/row; gross/tare/net_mass; water/volatile/impurity_basis; broodlac_in/out; attached_twigs/insect_matter; opening/closing_collected_stock; source_formation/removal_evidence; losses; uncertainty | Use source/host surveys, collection weighing and matched receipts to record actual primary material removed. Report total biological formation only from independent observations or an applicable model, never by forcing a product-balance residual. Distinguish pre-existing broodlac, newly formed material and attachments in harvested lots, retaining uncertainty. Uncollected hosts and exudates remain source context or separate stock ledgers, not extra external products. | kg on matched wet/dry/component bases | Each lot and collection cycle | Matched source cycle, preparation and dispatch periods | Actual host/source and receiving node | per 1 kg reference flow | Calibrated weights; matched source and receipt; component tests; gap register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_recorded_totals` | all inventory rows | Preserve raw quantity, original unit and plot/cycle/batch/service basis. Establish attributable totals and convert compatible numerator units with recorded factors, then divide once by the matched accepted net dispatch mass in kg. A quantity already per 1 kg reference flow is not divided again. Preserve all actual intermediates and nonreference products; the accepted final output alone becomes 1 kg. | linked collection protocols; allocation evidence; matched dispatch denominator | actual exchange quantities per 1 kg reference flow | |
| `reconcile_material_states` | Post-collection preparation, transfers and dispatch | Use measured collected material from the source-handoff ledger or purchased primary material as the first material receipt. Reconcile receipts, added water and opening stock against accepted product, other products, solid waste, transferred wastewater, measured water/volatile releases and closing stock on matched wet/dry/component bases. Biological formation has its own boundary; auxiliary inputs do not replace collected feed and source removal must not be counted twice on aggregation. Retain uncertainty and residuals, not invented pure-polymer closure, zero differences or carbon uptake; cancel internal transfers once at whole-package aggregation. | cp_biological_source_plant_collection; cp_biological_source_lac_collection; matched preparation/dispatch measurements and component tests | reconciled mass and component balance with gaps |  |
| `carbon_and_emission_evidence` | host carbon and direct air emissions | Record actual carbon origin and method-supported substance-specific emissions for actual activity. Use measured composition or applicable independently cited methods when calculating retained/exported carbon; do not apply a universal carbon fraction, automatically net host uptake against product carbon, or credit indefinite storage. Attach factors and provenance to the concrete dataset when used. | actual activity; component analysis; cited applicable factors | disclosed substance/medium emissions and carbon basis | |

### Data Quality Requirements

Provisional numeric QA screens on nonreference cards are subjective order-of-magnitude prompts, not FAO measured ranges: zero admits only evidenced inactive/no-exchange cases; kg upper screens of 5 or 10 test unusually large auxiliary/waste quantities relative to the 1 kg product, and 20 tests gross raw material, attached host matter, wet losses and stock-heavy ratios. The 100 kg water screen and 10,000 kg host-water screen flag increasingly water-intensive records, while 100 MJ energy and 30 kg combustion-emission screens flag energy/factor or unit issues. The 10,000 m2*a land screen flags very low-output or long-lived host attribution. These chosen magnitudes are deliberately loose and not proven universal envelopes. Any out-of-screen actual observation triggers evidence, boundary, allocation and unit review with the valid observation retained: do not clip values, reject a qualified product or force closure to meet a screen. The final output's [1,1] interval is instead the exact normalization identity supported by accepted net dispatch records; it is not a measured yield estimate.

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | all concrete exchanges | Resolve actual biological/material identity, flow type, state, destination and property/unit before dataset publication; a broad category or carrier role is not a fixed UUID. | concrete flow detail and support verification; lot records |
| `measurement_quality` | primary product and transfers | Preserve calibrated net measurement, water/volatile/impurity method and uncertainty; no universal grade/moisture/yield conversion. | matched raw records and test methods |
| `coverage_quality` | all nodes | Record zero/not-applicable with actual evidence; unknown quantities or routes remain gaps, not zeros. Provisional ranges below are replaceable QA screens, never observed values or mandatory limits. | reconciliation; completeness ledger; actual process activation |
| `period_asset_quality` | hosts and shared services | Cover relevant host phases, cycles, stock changes, asset consumers and replacement/termination assumptions with sensitivity. | period/asset attribution and independent totals |
| `scope_quality` | downstream consumers | Disclose primary-only partial classification coverage, actual gate/form/grade and upstream exclusions; not valid for refined shellac or chemical proxy datasets. | scope and gate metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_reference` | primary_product_dispatch | Require one qualified final product output of 1 kg net as-received reference product excluding packaging; its name, link, mass property/unit and qualifiers align with section 3. Intermediate/raw receipts remain measured, not fixed. | |
| `validate_source_route` | source and host nodes | Verify each lot's actual plant or lac source, management and inoculation activation plus primary-preparation bypass/operation records; do not apply all alternatives or unknown-state defaults. | fao-plant-exudate-production; fao-lac-primary-states |
| `validate_balance` | all material handoffs | Reconcile wet/net/dry/component quantities, water, natural volatile loss, impurities, other grades, waste, retained brood/rework and stock; disclose residuals and measurement uncertainty. Never label all loss as water or waste as sold product. | |
| `validate_attribution` | periods grades infrastructure and campaigns | Require complete intended output and service consumers plus period/phase boundaries, replacement/termination, causal subdivision or evidenced residual allocation, and no duplicate host, shared-asset, cleaning, stock or returned-material burdens. | |
| `validate_normalization` | all amounts and collection protocols | Require a matched accepted dispatch denominator, documented raw bases and conversions, and exactly-once attribution/normalization. All amounts and protocol reporting use per 1 kg reference flow. Range screens are not default values or evidence that the mass balance is satisfied. | |
| `validate_identity_emissions` | concrete exchanges and direct emissions | Verify actual fixed identities and support units before final dataset publication; expand variable roles into concrete materials/substances and destinations. Species-resolved air emissions and explicit fuel/service combustion scope prevent invented or duplicated exhaust. | |
| `validate_scope_state` | reference product and downstream use | Reject interchange of primary gum/resin/lac with rubber, industrial rosin/turpentine, extracted shellac or finished formulation; primary-only methodology does not imply exact whole-leaf coverage. No automatic sequestration or storage credit. | unsd-cpc-natural-resins; fao-lac-primary-states |
| `validate_biological_source_handoff` | `host_management`; `plant_collection`; `lac_collection`; `primary_preparation`; `producer_dispatch` | Each collected output lot requires an explicit source and matched downstream receipt; purchased lots must not be recounted as own-site collection. Reconcile raw collected quantities with physical handoffs, not all biological output against auxiliary inputs. Do not invent formation, resource flows or CO2 uptake from unexplained residuals. Unknown source or handoff blocks a complete data package; absent evidence for total formation or uncollected stock must not be represented as a closed source balance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for one actual named and qualified primary exudate or crude lac product at producer dispatch |
| downstream_use | secondary_dataset; background_dataset for the declared matching primary product supply |
| allowed_use | Actual biological source, primary state, gate, grade and measurement-compatible product supply; traceable aggregated lots with disclosed shares |
| excluded_use | Whole CPC leaf automatic substitution; generic pure resin; extracted/refined shellac; rubber; manufactured formulations; delivered end use; unqualified species/state mixing |
| required_metadata | Identity/host/strain; origin; route and management; primary form/grade; water/volatile/impurity and net basis; periods and gate; stock; intended outputs; allocation; shared assets; unit conversions; upstream datasets |
| required_quality_disclosure | Coverage gaps, unresolved identities, calibration/tests, component balance residuals, temporal representativeness, allocation assumptions, replaceable reasoned ranges and scope exclusions |
| update_trigger | Changed biological origin, production/primary-preparation route, product form or quality, gate, management period, supplier data, component measurement or allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-natural-resins` | `official_guidance` | UNSD CPC 3.0 subclass 03219, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03219 ; accessed 2026-10-08 | Classification title/context; no detailed note and no universal primary-only inclusion claim |
| `fao-plant-exudate-production` | `official_guidance` | FAO Chapter VIII Non-wood forest products, https://www.fao.org/4/t0122e/t0122e0d.htm ; accessed 2026-10-08 | Plant natural exudation/tapping and distinct gum/resin identities |
| `fao-tapping-route` | `official_guidance` | FAO Sustainable utilization of gum and resin by improved tapping technique in some species, https://www.fao.org/4/y4496e/Y4496E29.htm ; accessed 2026-10-08 | Conditional tapping/stimulant practices, not a universal chemical recipe or amount |
| `fao-lac-primary-states` | `official_guidance` | FAO International trade in non-wood forest products: IX Insect products, https://www.fao.org/4/x5326e/x5326e0c.htm ; accessed 2026-10-08 | Natural versus inoculated lac sources; crude sticklac, cleaned seedlac and extracted shellac distinction |
| `fao-gum-primary-handling` | `official_guidance` | FAO Microfinance and forest-based small-scale enterprises: gum arabic, https://www.fao.org/4/a0226e/a0226e10.htm ; accessed 2026-10-08 | Gum host care, cleaning/grade and packaging example; no extrapolation of season, grade threshold or output factors to other products |
