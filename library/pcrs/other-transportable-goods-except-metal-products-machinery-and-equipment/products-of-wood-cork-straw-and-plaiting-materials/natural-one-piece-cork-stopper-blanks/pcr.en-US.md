---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.natural-one-piece-cork-stopper-blanks
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Natural one-piece cork stopper blanks, punched and dry-sized

## 1. Scope and Applicability

This PCR covers only cylindrical one-piece natural Quercus suber cork stopper blanks made from purchased boiled, stabilized planks by strip cutting, hollow-tube punching, dry dimensional sizing and grading, delivered unwashed, uncolmated and uncoated to a downstream finisher. They are completed manufactured intermediates before semi-finishing; bottling performance and food-contact compliance are not established. JRC separates manufacturing from washing/colmation/coating and final treatment; the Spanish case distinguishes punching from turning. Sources: `jrc-cork-chain-2017`, `spanish-natural-stopper-2022`.

Agglomerated stoppers require granulate production, measured formulation, binder and curing data; technical stoppers with natural discs additionally require disc manufacture and bonding. Boards require density, dimensions, use, binder/self-bonding and board thermal-treatment boundaries and cannot use this method. Exclude turned stoppers, multi-piece bonded stoppers, colmated stoppers, agglomerated/micro-agglomerated stoppers, bar-top assemblies, finished coated bottle closures and agglomerated boards. No generic adhesive, coating, washing recipe or packaging atmosphere is prescribed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.natural-one-piece-cork-stopper-blanks |
| classification_refs | CPC 3.0 31922; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unwashed uncoated punched and dry-sized one-piece natural cork stopper blanks |
| excluded_products | Turned, agglomerated, disc-bonded, colmated/coated finished stoppers and cork boards |
| representative_product | Cylindrical Quercus suber one-piece blank; dimensions and grade declared from actual order |
| production_route | Purchased boiled stabilized planks → strip cutting → hollow-tube punching → dry sizing → grading → handover; low-voltage user supply and dry dust extraction |
| market_state | Manufactured intermediate before semi-finishing; unwashed, uncolmated, unprinted, uncoated; at factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply natural one-piece cork stopper blanks for downstream finishing |
| How much | 1 kg accepted net stopper-blank mass excluding delivery packaging |
| How well | Delivered to declared order dimensions, grade, moisture and acceptance records; no claimed equivalent bottling performance |
| How long or cycle | One production and factory-gate handover cycle; no closure service-life claim |
| reference_flow_link | `stopper_out` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Articles of natural cork, agglomerated cork and articles thereof `9dee16fe-f882-489f-9b63-3c0ee5148e02` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Quercus suber; unbonded one piece; input boiled and stabilized; punched; unwashed/uncolmated/unprinted/uncoated; dimensions and grade; accepted moisture and wet/dry basis; net mass; packaging; delivery to finisher; supply voltage; site and period |

Declare every required qualifier in foreground metadata, process notes or reference-flow comments. The broad UUID identifies only this physical subset; compatibility with a manufactured-article description does not establish bottling readiness or any provider background process covering this intermediate gate.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is total accepted net as-delivered blank mass for the same period and route, excluding packaging; use calibrated scales, tare and lot moisture records. Normalize every row per 1 kg reference flow. |
| moisture_balance | plank_in; stopper_out; offcut_out; dust_out; vapour_out | Mass | kg | Measure wet mass m and wet-basis water fraction w separately; dry solids m×(1−w), water mass m×w; dry cork mass equals dry solids multiplied by the measured cork fraction, excluding abrasive/binder contamination; convert dry-basis moisture u by w=u/(1+u). Density or count cannot replace net mass; packaging is outside the cork balance. |
| electricity_units | electricity_in | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter electricity delivered to the user; 1 kWh=3.6 MJ. The property name follows the database energy chain, not a fuel heating value or delivered heat basis. Verify voltage below 1 kV and supplier loss boundary. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Boiled stabilized selected unbonded Quercus suber planks received at manufacturer; moisture, thickness, quality grade, supplier and inbound transport declared |
| starting_condition_role | Foreground starting point; not burden-free bark |
| product_classification_scope | Punched one-piece blanks within natural articles of 31922; incoming planks and outgoing offcuts are adjacent categories, not reference articles |
| recursive_input_rule | If same-category blanks are purchased for further sizing, distinguish prior supplier production from added processing; do not recursively expand the same site record. The provider route must still satisfy these qualifiers |
| upstream_dataset_requirement | Link bark origin/management, stripping, forest handling, stabilization, boiling and heat supply, water reuse/discharge, post-boil stabilization/selection and plank delivery; missing scope is an upstream coverage gap and bars complete cradle-to-gate claims |
| disclosure | Foreground from received planks to accepted blank handover; washing/disinfection, colmation, bonding, coating, bottling, use and end of life are outside this gate; measure packaging and disclose period stocks and co-products |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_start | all inventory rows | Retain bark and boiling upstream burdens. Prepared-plank background must match treatment, moisture, heat, water and effluent boundaries. If supplier data end at raw bark, add boiling/stabilization; do not count the same boiling twice. | jrc-cork-chain-2017; spanish-natural-stopper-2022 |
| sb_route | conversion | Include receipt, strip cutting, punching, dry sizing, grading, extraction and pack-out only. No foreground boiler, steam, combustion, granulation/bonding or washing/coating; a facility performing them needs an expanded, evidenced atomic inventory and cannot conceal them inside this route. | jrc-cork-chain-2017; spanish-natural-stopper-2022 |
| sb_stages | conversion | Aggregate conversion and handover into one foreground unit while retaining separate stage mass, electricity and loss ledgers. Actual internal transfers must agree at both ends and are not extra external outputs; only one accepted reference output is allowed. |  |
| sb_chemicals | conversion | Do not substitute generic glue or coating for unknown formulations. Actual wash chemicals, colmation agents, silicone, paraffin, ink or preserving gas are outside this route and require actual substances, concentration/wet-dry basis and doses for a separate assessment. Purchased belt binder and box glue stay in their manufactured-consumable backgrounds, not invented foreground dosing. | jrc-cork-chain-2017; spanish-natural-stopper-2022 |
| sb_carbon | all inventory rows | Keep separate physical dry-cork, water and biogenic-carbon ledgers. Absence of site combustion does not permit deleting biogenic CO2 from LCI: retain upstream heat-source biogenic/fossil emissions and any actual foreground oxidation, resolving correct species and compartment, regardless of GHG reporting convention. Stocked carbon is not automatically negative emission or permanent storage. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| conversion | Plank receipt, strip cutting/punching, dry sizing/grading and handover | required | This one declared route | foreground production | 1 kg accepted net blanks |

Stage records follow receipt → cutting → punching → sizing → grading → pack-out. Packaging leaves with blanks without inventing a second product output. There are 13 atomic rows; no foreground wash effluent or combustion emissions. Conditional packaging rows require actual presence/absence and quantity. Maintenance consumables, incoming packaging residues, abnormal contamination and actual additional emissions cannot be omitted: add specific atomic rows and identities after physical screening before completing a dataset, rather than fabricated generic rows.

### Process: Natural one-piece blank manufacture and handover (`conversion`)

#### Inputs

##### Product flows

###### Prepared natural cork planks (`plank_in`)

Purchased Quercus suber planks: boiled, stabilized, selected and unbonded, delivered to this gate. Record wet mass and matched moisture; confirm upstream heat, water, effluent, bark stripping and transport coverage.

- Selected flow: Natural cork, debacked or roughly squared, or in blocks, plates, sheets or strip, crushed, granulated or ground cork, waste cork `e03a0a0b-6dd8-4190-8204-3210fa9b51f4`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period actual exchange total / accepted net blank mass Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-cork-chain-2017`; `spanish-natural-stopper-2022`

###### Low-voltage electricity (`electricity_in`)

Meter the supplied consumption mix below 1 kV for cutting, punching, sizing, sorting, extraction and packing. Source geography is CN and the gate is grid-average supply to the user; verify actual site/provider region, year, mix, voltage and delivery/loss boundary before background use. Convert metered kWh to native MJ; the database Net calorific value label is an electrical-energy chain, not heat or fuel.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: unit group `93a60a57-a3c8-11da-a746-0800200c9a66`; Net calorific value, used as electrical energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Same-period actual exchange total / accepted net blank mass Q; electricity numerator in MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-cork-chain-2017`; `spanish-natural-stopper-2022`

###### Coated abrasive belt for dry cork sizing (`abrasive_in`)

Actual whole manufactured coated belt for dry cork sizing, not bulk alumina, industrial diamond or a presumed paper sheet. Record supplier article, grit species, backing and binder, dimensions, new mass, stock and replacement count; keep all components in the purchased mixture background without duplicate foreground component inputs. The broad belt Product/Mass/kg has no fixed grit/backing recipe or metal-only route; source production mix at plant CN requires actual provider geography, year and gate compatibility. Unknown actual formulation and quantity remain collection requirements, not inferred defaults.

- Selected flow: Abrasive belt `8240432e-9d1c-43e0-aa76-70e9905b2895`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period actual exchange total / accepted net blank mass Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_abrasive`
- Sources: `jrc-cork-chain-2017`; `spanish-natural-stopper-2022`

###### Polyethylene film bag (`film_in`)

Conditional: only the actual unsupported, non-self-adhesive, non-laminated PE film used to contain blanks. Record polymer grade/CAS9002-88-4, composition and mass, bag conversion and seal method; resolve a different whole packaging identity if backing, adhesive or laminate is actually present. No SO2 atmosphere, paraffin or silicone is assumed. Raw names/CAS/comment establish PE film despite conflicting CPC29220 luggage classification; source classification clarification and actual supplier grade/geography/year/gate compatibility remain pending, not claimed resolved.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period actual exchange total / accepted net blank mass Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-cork-chain-2017`; `spanish-natural-stopper-2022`

###### Corrugated paperboard shipping box (`carton_in`)

Conditional: weigh actual complete corrugated shipping boxes and record flute, fibre composition, printing, closure, supplier and stock-adjusted quantity. This source identifies a completed at-plant technology-mix box with 16.6% primary and 83.4% recycled fibre; these are conditional source-compatibility limits requiring the actual supplier fraction basis and manufacturing gate to match, never a default box recipe, recycled-content credit or foreground glue dose. If actual composition/state differs or remains unverified, resolve compatible whole-box data before dataset use; no paperboard feedstock or unsupported optical-assembly/folding-carton substitution.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period actual exchange total / accepted net blank mass Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-cork-chain-2017`; `spanish-natural-stopper-2022`

#### Outputs

##### Product flows

###### Accepted natural one-piece stopper blanks (`stopper_out`)

Exactly one reference output: accepted cylindrical single-piece natural cork blanks after dry sizing and grading, before washing, colmation, printing or coating; net cork mass excludes delivery packaging. The broad manufactured-article identity is restricted to this subset, not a ready-to-bottle closure.

- Selected flow: Articles of natural cork, agglomerated cork and articles thereof `9dee16fe-f882-489f-9b63-3c0ee5148e02`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-cork-chain-2017`; `spanish-natural-stopper-2022`

###### Unbonded cork cutting offcuts for external granulation (`offcut_out`)

Keep stripped edges, perforated strip remnants and rejected natural cork pieces in a separately weighed unbonded coarse offcut stream for the identified external granulator. Product status requires documented applicable by-product/product compliance, customer grade/contamination specifications and acceptance, and actual economic function; payment alone does not establish a Product flow. If the stream remains waste, change type and resolve a compatible Waste identity before dataset use. No foreground grinding, densimetric grading, binder or agglomeration. Record outgoing gate, wet mass, moisture, grade and stocks separately from purchased boiled/stabilized planks despite shared broad UUID; do not equate either exchange or create a self-referential provider loop.

- Selected flow: Natural cork, debacked or roughly squared, or in blocks, plates, sheets or strip, crushed, granulated or ground cork, waste cork `e03a0a0b-6dd8-4190-8204-3210fa9b51f4`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period actual exchange total / accepted net blank mass Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-cork-chain-2017`; `spanish-natural-stopper-2022`

##### Waste flows

###### Captured cork sizing dust (`dust_out`)

Weigh actual separately captured cork sanding/dry-sizing dust with abrasive contamination, component dry masses/carbon, moisture, ownership and the identified external fuel-use or granulation receiver. The source Waste identity specifically covers stopper sanding/finishing dust for those receiver routes; verify actual acceptance/contamination and receiving treatment/provider scope, not clean cork or an arbitrary disposal stream. Current waste status must be documented; payment alone cannot change it to Product, and a demonstrated economic co-product requires a compatible type/identity before use. Concordant cork name/comment/route support the physical locator despite CPC39283 wood-waste classification; supplier/source classification clarification remains unresolved. No free burdens or avoided-fuel credit.

- Selected flow: Cork dust `95c2482d-304b-4e57-8509-03b7a602d5f1`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period actual exchange total / accepted net blank mass Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-cork-chain-2017`; `spanish-natural-stopper-2022`

###### Spent cork-sizing abrasive belt (`abrasive_out`)

Actual removed whole cork-sizing belt after use, including remaining abrasive grains, backing, binder and adhering cork/moisture. Weigh dispatched mass, reconcile new belt consumption, component wear into collected dust/outdoor particles, attached cork and stocks, and document contamination and receiver treatment/provider compatibility. The broad surface-finishing Spent abrasive waste/Mass/kg has no metal-only or loose-powder restriction; do not substitute metal-finishing polishing waste, unused belts or clean cork dust. Account adhering cork and its water once in the separate cork/component ledgers; no default waste fraction or treatment credit.

- Selected flow: Spent abrasive waste `f0a52dd6-0027-4033-9068-f293526f958f`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period actual exchange total / accepted net blank mass Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_abrasive`
- Sources:

##### Elementary flows

###### Released particles no larger than 2.5 micrometres (`pm25_out`)

Outdoor air, unspecified subcompartment: emitted PM2.5 after controls, including measured fugitive emissions. Workplace captured dust is not an environmental emission. Record sampling cut-size and cork/abrasive fraction; no wood-sector factor is transferred.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period actual exchange total / accepted net blank mass Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources:

###### Released particles above 2.5 through 10 micrometres (`pmcoarse_out`)

Outdoor air, unspecified: the disjoint PM2.5–PM10 interval. Use matched PM10 minus PM2.5 measurements only when sampling bases agree and subtraction is nonnegative; do not add cumulative PM10 to this row.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period actual exchange total / accepted net blank mass Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources:

###### Released particles above 10 micrometres (`pmover10_out`)

Outdoor air, unspecified: particles above PM10. A total-minus-PM10 result requires identical method coverage of larger particles; TSP is not automatically total emitted particulate matter. Preserve an explicit measurement gap if a method misses this interval.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period actual exchange total / accepted net blank mass Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources:

###### Cork moisture evaporated to outdoor air (`vapour_out`)

Water species CAS 7732-18-5, air unspecified; not water discharge or supplied steam. Calculate evaporation from matched water-content and stock records for lots with net moisture loss. Moisture gain requires a separately characterized air-water input, not a negative emission or invented drying amount.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Same-period net evaporated water mass from the water balance / accepted net blank mass Q.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| alloc_separate | conversion | First avoid allocation by stage metering or defensible unit subdivision. Keep physical process/stock/water/carbon ledgers separate from allocated environmental-burden accounts; trace plank cost/burdens to output grades and sold offcuts. | spanish-natural-stopper-2022 |
| alloc_basis | conversion | When allocation cannot be avoided, assess physical causality and use measured physical relationships where valid; otherwise use economic shares from same-period factory-gate quantity×unit price, recording all outputs with economic function, currency, price window and sensitivity. Never default to case quantities or allocation percentages. | spanish-natural-stopper-2022 |
| alloc_physical | all inventory rows | Apply allocation shares to burdens, never to physical co-product outputs. Divide reference-product burdens by Q; offcut/dust physical rows retain actual total amounts/Q and cannot disappear into yield or negative inputs. Record only actual external net exchanges once for internal reuse. |  |
| alloc_residues | offcut_out; dust_out | Outputs with payment revenue and economic function participate in the selected allocation; waste without economic function gains no share merely from recyclability, and treatment-burden ownership must be transparent. dust_out is currently a waste exchange; if records establish an economic co-product, change flow type and resolve a compatible identity before rechecking. Document applicable by-product/product or waste status and customer acceptance specifications separately; payment alone does not establish Product status or compatible treatment. Do not combine economic allocation with undeclared fuel-substitution credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | conversion | Planks, blanks, offcuts, dust, water and carbon | weighing_and_lot_records | lot; species; thickness; grade; wet mass; wet-basis moisture and method; dry-cork carbon fraction; cork share in mixed dry solids; cork-associated versus non-cork water; opening/closing stocks; stage transfers; adhering dust; transport distance/mode; receiver; ownership; revenue/prices; accepted Q | Calibrated batch weighing with tare; representative documented moisture method that distinguishes water from other volatiles; documented dry-carbon assay. Match lots at each stage and reconcile weighing tickets, acceptance and stocks; no generic moisture or carbon fraction. Aggregation requirement: Same-period physical total for each row / accepted net blank mass Q; per 1 kg reference flow | kg; fraction | Each lot and monthly stock reconciliation | Complete consecutive 12 months or justified complete production season including downtime/abnormal events | Declared site and this one punching route | per 1 kg reference flow | Scale calibration; water/carbon tests; lot and two-end transfer records; supplier upstream coverage; receiver records |
| cp_energy | conversion | Low-voltage electricity | meter_records | start/end meter; kWh; voltage; supplier; meter boundary; stage/other-product submetering; extraction/idle/packing; period | Verify user-side meters against invoices for consumption electricity below 1 kV; meter shared equipment or document causal apportionment and reconciliation. Aggregation requirement: Same-period attributable kWh × 3.6 / Q; per 1 kg reference flow | kWh; MJ | Each shift and invoice cycle | Same period as cp_material | This route meters, extraction and packing | per 1 kg reference flow | Meter checks, invoices, supplier and loss boundary |
| cp_abrasive | conversion | New and spent belts | maintenance_records | supplier article; grit/backing/binder; dimensions; unit mass; stock; replacement count; wear; adhering cork; spent-belt receiver | Retain article specification and weighing; reconcile consumption through stocks and replacement logs, weigh spent belts and adhering cork and establish abrasive-wear destinations. Aggregation requirement: Same-period row mass / Q; per 1 kg reference flow | kg; count | Each replacement and stock period | Same period as cp_material | Dry sizing equipment | per 1 kg reference flow | Actual article/formulation records; weighing; receiver treatment records |
| cp_pack | conversion | Film and shipping boxes | packing_records | packaging presence/absence; PE grade/composition; film unit mass; box composition/mass; closure method; counts; period; delivery recipient | Reconcile purchases/issues; sample tare-corrected component masses against pack-out/shipping counts and stock; do not transfer finished-closure case packaging amounts or atmosphere. Aggregation requirement: Same-period component mass actually consumed / Q; per 1 kg reference flow | kg; count | Each packaging lot and issue period | Same period as cp_material | Factory-gate pack-out at this boundary | per 1 kg reference flow | Supplier material/composition; weighing; shipping/stock records |
| cp_air | conversion | Outdoor particulate emissions in three disjoint size intervals | sampling_and_operating_records | outlet/fugitive source; size cut; method/detection limit; concentration; wet/dry/T/P basis; air volume; control state; operating hours; cork/abrasive composition; sampling period | Post-control size-resolved sampling and air-volume metering covering operating states and fugitives; integrate concentration×volume at common wet/dry/T/P basis. Below-detection results retain upper bounds/uncertainty; unsampled intervals remain gaps; captured mass is not emitted mass. Aggregation requirement: Same-period released total in each disjoint interval / Q; per 1 kg reference flow | kg; mg/m3; m3; h | Representative states and after control changes, with continuous operating-hour records | Corresponding cp_material period, with extrapolation coverage disclosed | Actual outdoor releases; air subcompartment unspecified | per 1 kg reference flow | Sampling reports, flow checks, detection limits, controls/operating records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | Divide each same-period physical row total by Q; fix the reference row at 1 kg. Divide allocated burdens by Q separately; never alter physical quantities using burden shares. | row total; Q; linked collection protocol | exchange per 1 kg reference flow |  |
| electricity_conversion | electricity_in | E_MJ=3.6×E_kWh at the same user-side meter boundary. | E_kWh; cp_energy | E_MJ |  |
| water_reconciliation | vapour_out | Use cork-associated water consistently, accounting separately for non-cork or abrasive-borne water. Net evaporated cork water = incoming plank water + opening cork-stock water − water in blanks/offcuts/captured dust/cork adhering to spent belts − closing cork-stock water − water carried by released cork particles where actually measured. Keep particle-associated water separate from water vapour and non-cork/abrasive water; no water fraction is invented for a dry-particle measurement. First verify absence of other water exchanges and non-water volatile losses. Do not clamp negative results to zero; investigate moisture gain/other exchanges and add characterization. | wet mass; wet-basis moisture; stock water; cp_material | evaporated kg water |  |
| pm_intervals | pm25_out; pmcoarse_out; pmover10_out | For one matched sampling system, fine=PM2.5, coarse=PM10−PM2.5, larger=comparable total particles−PM10; differences require complete method coverage and nonnegative values. mg×10^-6=kg; concentration×same-basis volume gives mass. Cumulative PM10/total are reconciliation quantities, not extra LCI emissions. | size-resolved concentrations; air volume; operating hours; cp_air | three disjoint emitted masses |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_route | conversion | Verify boiled stabilized incoming Quercus suber, unbonded one-piece punching without washing/coating and handover to finishing; align supplier/order/site boundaries. | supplier/order/acceptance records |
| dq_balance | all inventory rows | Physical dry-cork/water/biogenic-carbon balances include period stocks, actual output grades, offcuts, captured dust, wear composition, adhering dust and releases; compare residuals with instrument uncertainty and explain, without invented yield/tolerance. | cp_material; cp_abrasive; cp_air |
| dq_background | all inventory rows | Identity success is not complete background data: check state/unit/supply boundary/geography/time/losses for every provider link and disclose unresolved UUIDs/source classification defects. | provider scope evidence |
| dq_screen | conversion | Screen actual maintenance oil, cleaning agents, input packaging residues, additional consumables and abnormal emissions; add atomic exchanges/collection where present and do not claim dataset completeness with remaining gaps. | site screening and maintenance records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_reference | stopper_out | Check exactly one reference output, 1 kg net mass, Q and all qualifiers defining this subset of the broad UUID; do not add a packaging-stage output with the same reference UUID. |  |
| val_denominator | all inventory rows | EN/ZH reference, all 13 inventory bases, collection aggregation and calculations use per 1 kg accepted net blanks; align unit conversion and time windows. |  |
| val_route | conversion | Do not merge agglomerated stoppers, turning, disc bonding, boards or finished-closure washing/coating into this route; disclose missing purchased-plank upstream boiling heat/water/effluent. | jrc-cork-chain-2017; spanish-natural-stopper-2022 |
| val_air | pm25_out; pmcoarse_out; pmover10_out; vapour_out | Check elementary species, air/unspecified subcompartment, Mass/kg, disjoint size intervals and sampling coverage. Workplace dust, captured waste and water-compartment vapour cannot stand in for outdoor releases; actual biogenic CO2 cannot be deleted for reporting convention. |  |
| val_completeness | all inventory rows | Report specific unresolved/skipped scope for missing consumable identity, background chains, emission measurements or unexplained balances; do not claim complete LCI or cradle-to-gate. Method is available for independent review; actual site data still require collection. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific punched natural one-piece blank manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Background input to downstream finishing for this same unwashed/uncoated gate; assemble a bounded product system when complete upstream evidence supports it |
| excluded_use | Ready-to-bottle closures, all CPC31922, agglomerated boards/stoppers, unknown adhesive/coating recipes or unverified negative-carbon/compliance claims |
| required_metadata | Species, one-piece identity, boiled/stabilized input, size/grade, net wet mass/moisture basis, site/period, operations, packaging/voltage, suppliers/receivers, upstream/downstream gate, allocation |
| required_quality_disclosure | Measured share; stock/mass/water/carbon balances; PM sampling/detection limits; unresolved UUID/source metadata defects; background matching, missing scope and allocation sensitivity |
| update_trigger | Changes to provider boiling heat/boundary, voltage, punching/extraction, blank grade/moisture, belt recipe, packaging, by-product status or handover state |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-cork-chain-2017 | official_guidance | European Commission JRC: Non-harmonised food contact materials in the EU, JRC104198 (2017), printed pp.172–173; https://publications.jrc.ec.europa.eu/repository/handle/JRC104198 | Manufacturing versus washing/colmation/coating gate; plank preparation versus granulation. Official summary of an earlier industry code, not contemporary certification or quantitative factors |
| spanish-natural-stopper-2022 | literature | Environmental Impact Analysis of Natural Cork Stopper Manufacturing (2022), §§2.1–2.5.3, 3.1; DOI 10.3390/agriculture12050636; https://www.mdpi.com/2077-0472/12/5/636 | Spanish case punching/turning, sizing/grading versus later treatment, offcuts and economic-allocation example. Qualitative process/allocation rationale only; no transferred sizes, quantities, material recipes or bag atmosphere |
