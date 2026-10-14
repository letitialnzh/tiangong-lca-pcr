---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.embryos
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Animal embryos for breeding

## 1. Scope and Applicability

This PCR covers viable animal embryos released as breeding material at an embryo collection or production-laboratory gate. In-vivo collection and in-vitro production are separate routes. Species, donor, developmental stage, grade, fresh/chilled/frozen state and handover must be declared. Insect eggs, larvae and chrysalides, unfertilised oocytes sold as such, semen as final product, recipient preparation and embryo-transfer service are excluded. International-trade sanitary controls apply only when the destination and species require them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.embryos |
| classification_refs | CPC 3.0 `02420` |
| covered_products | Quality-accepted viable animal embryos produced in vivo or in vitro. |
| excluded_products | Insect immature stages; unfertilised oocytes; semen; non-viable rejects; transfer and recipient services. |
| representative_product | One viable graded embryo protected for release at the laboratory gate. |
| production_route | Managed donor period → independent embryo collection or oocyte retrieval → first laboratory preparation, including fertilisation/culture only for in-vitro route → grading → optional preservation → protective release. |
| market_state | Fresh, chilled or frozen; species, route, grade, container and gate disclosed. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One quality-accepted viable animal embryo for breeding at laboratory release. |
| How much | 1 released embryo; reconcile all recovered/retrieved, prepared, graded, preserved and rejected items. |
| How well | Declared species, donor, in-vivo/in-vitro route, developmental stage, viability grade, sanitary treatment and preservation state. |
| How long or cycle | One recovery-to-release lot; attribute donor and shared laboratory/storage burdens over actual service periods. |
| reference_flow_link | `viable_embryo` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Viable animal embryo at collection or production-lab release |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Species; donor; route; batch; stage; grade; fresh/chilled/frozen state; container; gate; reporting period. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count each accepted embryo once; one item is one viable graded embryo, not a container, oocyte or transfer attempt. |
| `yield` | route transitions | Count | embryo, oocyte | Reconcile raw collection/retrieval, preparation, grading, preservation, reject and release counts by donor and route. |
| `media` | fluids and consumables | Mass or calibrated volume | kg, L | Convert volume to mass only with documented composition and density. |
| `period` | donor and shared services | Time and count | donor-day, h, embryo | Align input, output and asset service periods; retain failed attempts. |
| `accepted_item_count` | reference product and its output card | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | The machine unit item is the local representation of the confirmed unit-group reference unit Item(s), with multiplier 1. One item means one quality-accepted viable embryo of the declared species, state, grade and release specification. Preserve native embryo counts in collection records. This count representation does not equate containers, volume, sperm count, oocytes or treatment attempts to accepted goods, and does not establish equivalence across species, states or dose specifications. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified managed donor entering a reproductive service period, with purchased semen where actually used and upstream feed, media, energy, cryogen and packaging. |
| starting_condition_role | Managed donor production and embryo-goods preparation, not recipient pregnancy or transfer service. |
| product_classification_scope | CPC 3.0 `02420`, viable animal embryos only. |
| recursive_input_rule | Purchased embryos of the same category remain traced upstream goods and are never counted as newly produced on site. |
| upstream_dataset_requirement | Species- and route-compatible feed, semen, media, utilities, treatment and capital-service datasets when actually used. |
| disclosure | Donor, period, route, grade, preservation, gate, rejects, shared assets and attribution. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | all routes | End at quality release in a protected container at the collection/production laboratory; exclude recipient management, transfer, pregnancy and onward distribution. | `un-cpc-3`; `woah-invivo-2024`; `woah-invitro-2024` |
| `route_delta` | managed donor and laboratory | In-vivo recovery yields already fertilised embryos; in-vitro retrieval yields oocytes, then requires semen, fertilisation and culture. The routes differ in topology, media, energy, yield and testing; use one route per lot or partition a mixed facility. | `woah-invivo-2024`; `woah-invitro-2024` |
| `interfaces` | biological production through grading | Record donor management separately from recovery/retrieval, raw material separately from first washing/culture, then accepted, independently downgraded, held and rejected states with handoffs. | `woah-invivo-2024`; `woah-invitro-2024` |
| `state` | optional preservation | Fresh lots bypass preservation; chilled/frozen lots record actual utilities, cryogen, losses and time. Package usable product separately and exclude post-gate logistics. | `woah-invivo-2024`; `woah-invitro-2024` |
| `shared` | facilities and periods | Record donor phases, collection room, laboratory, incubator, refrigerator/tank and reusable container consumers and service periods once. | `woah-invivo-2024`; `woah-invitro-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `donor` | Managed donor service | required | observed reproductive period | Husbandry inputs, residues and donor handoff | donor-days per linked released embryo |
| `recovery` | Embryo collection or oocyte retrieval | required | one route per lot | Independent removal of intended raw material from donor context | recovered embryo or oocyte count |
| `preparation` | First preparation or in-vitro production | required | route-specific steps | Raw-to-prepared embryo handoff, with in-vitro fertilisation/culture only when selected | prepared embryo count |
| `grading` | Grade and destination sorting | required | every prepared lot | Accepted, downgraded, held and rejected states | count by grade and destination |
| `preservation` | Optional stabilization | conditional | actual chilling/freezing | Usable pre/post state, utilities and losses | post-preservation accepted count |
| `release` | Protective packing and laboratory release | required | every saleable lot | Final quality-accepted product and container handoff | 1 released embryo |

### Process: Managed donor service (`donor`)

#### Inputs

##### Product flows

###### Donor feed (`donor_feed`)

Measure species-specific feed for the donor's attributable service period.

Denominator and scope requirements：per released embryo

Raw quantity and calculation requirements: Use separate feed-supply, intake and loss ledgers under calc_feed_supply_and_intake. The quantity carrying feed-production burden includes in-boundary refusals, spoilage and uneaten feed; it is not reduced to animal intake. Retain source, species/cohort, phase and original mass/moisture basis. Calculate the final contribution with inventory_reference_normalization and stage_throughput_linkage exactly once. Original collection denominator kind: reference_flow.

- Selected flow: Donor feed (UUID unresolved)
- Flow property / unit: Mass / kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
QA scope for this card: the intake range below screens only separately recorded biological intake on its stated unit and denominator, reconstructed under calc_feed_supply_and_intake. It does not bound or substitute for the supplied-feed exchange, which retains in-boundary uneaten losses and their production burden. Do not compare feed supply with intake bounds or subtract losses merely to fit a range. A supply-specific range requires separate evidence; missing intake/loss records leave this intake QA unassessed, not passing.

- Range: Provisional donor-feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg dry matter per released embryo
  - Basis: donor-period intake divided by linked released embryos; QA variable is recorded biological intake only, not the supplied-feed inventory amount
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Donor water (`donor_water`)

Meter drinking and care water, resolving its actual source and use from records.

Denominator and scope requirements：per released embryo

Raw quantity and calculation requirements: Sum observed donor-period supply. Original collection denominator kind: reference_flow.

- Selected flow: Donor water supply (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Range: Provisional donor-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per released embryo
  - Basis: donor-period supply divided by linked released embryos
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Donor manure to treatment (`donor_manure`)

Classify as waste only when not independently handed over as useful material.

Denominator and scope requirements：per donor service period

Raw quantity and calculation requirements: Record collection mass and actual destination by period. Original collection denominator kind: process_output.

- Selected flow: Donor manure to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_donor`
- Range: Provisional manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg per donor period
  - Basis: collected manure sent to treatment
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric biogenic methane to air (`review_donor_enteric_ch4`)

Only for an applicable digestive pathway of the actual managed species and class; derive emissions from documented animal activity/intake and a justified method. Do not substitute a cattle factor for an uncharacterised species. Applies only to the operated `donor` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Methane, biogenic, to air (UUID unresolved)
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Manure biogenic methane to air (`review_donor_manure_ch4`)

Calculate actual atmospheric release by manure system, climate, residence time and volatile-solids activity. Reconcile captured, destroyed or oxidised methane; produced methane is not automatically emitted methane. Applies only to the operated `donor` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Methane, biogenic, to air (UUID unresolved)
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Direct manure nitrous oxide to air (`review_donor_direct_n2o`)

Use the actual manure-management nitrogen pathway. Keep storage/treatment distinct from field application and grazing deposition, which require a managed-soil method and an explicitly assigned inventory responsibility. Applies only to the operated `donor` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Indirect manure nitrogen-derived nitrous oxide to air (`review_donor_indirect_n2o`)

Calculate attributable indirect N2O from documented manure N volatilisation/deposition and leaching/runoff pathways where applicable. Keep separate from direct N2O and reconcile any nitrogen-fate calculation already included downstream or in the chosen background/impact model. Applies only to the operated `donor` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-ipcc-livestock-2019`

###### Manure ammonia to air (`review_donor_nh3`)

Use actual species, housing/storage conditions and a justified nitrogen-flow method. Track total N and ammoniacal N by stage; a generic volatilised-N estimate is not automatically NH3 because it may include other nitrogen species. Applies only to the operated `donor` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Ammonia to air (UUID unresolved)
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-eea-manure-2023`

### Process: Embryo collection or oocyte retrieval (`recovery`)

#### Inputs

##### Product flows

###### Recovery medium (`recovery_medium`)

Record actual collection or aspiration medium and its lot-specific composition.

Denominator and scope requirements：per recovery event

Raw quantity and calculation requirements: Measure issued and returned medium per event. Original collection denominator kind: process_output.

- Selected flow: Embryo or oocyte recovery medium (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Range: Provisional recovery-medium screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg per event
  - Basis: issued medium in the documented event
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw in-vivo embryos (`raw_invivo_embryos`)

This internal handoff applies only to in-vivo collection, before laboratory washing and grading.

Denominator and scope requirements：per in-vivo recovery event

Raw quantity and calculation requirements: Count recovered embryos, including later rejects, by donor event. Original collection denominator kind: process_output.

- Selected flow: Raw in-vivo collected embryos (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Range: Provisional embryo-recovery count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: embryo per event
  - Basis: collected count in one donor event
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retrieved oocytes (`retrieved_oocytes`)

This internal handoff applies only to in-vitro production; oocytes are not the reference product.

Denominator and scope requirements：per in-vitro retrieval event

Raw quantity and calculation requirements: Count retrieved oocytes, including immature material, by donor event. Original collection denominator kind: process_output.

- Selected flow: Retrieved animal oocytes (UUID unresolved)
- Flow property / unit: Count / oocyte
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery`
- Range: Provisional oocyte-retrieval count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: oocyte per event
  - Basis: retrieved count in one donor event
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: First preparation or in-vitro production (`preparation`)

#### Inputs

##### Product flows

###### Raw in-vivo embryos received (`raw_invivo_input`)

Only in-vivo lots receive recovered embryos from the recovery node; retain donor and event identity.

Denominator and scope requirements：per preparation lot

Raw quantity and calculation requirements: Count received embryos against recovery-event output. Original collection denominator kind: process_output.

- Selected flow: Raw in-vivo collected embryos (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lab`
- Range: Provisional raw in-vivo input count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: embryo per lot
  - Basis: in-vivo embryos actually received for preparation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retrieved oocytes received (`retrieved_oocytes_input`)

Only in-vitro lots receive retrieved oocytes, before fertilisation and culture.

Denominator and scope requirements：per preparation lot

Raw quantity and calculation requirements: Count received oocytes against retrieval-event output. Original collection denominator kind: process_output.

- Selected flow: Retrieved animal oocytes (UUID unresolved)
- Flow property / unit: Count / oocyte
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lab`
- Range: Provisional oocyte input count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: oocyte per lot
  - Basis: oocytes actually received for in-vitro preparation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Laboratory media (`lab_media`)

Record washing, fertilisation and culture media only when actually used in the selected route.

Denominator and scope requirements：per prepared embryo

Raw quantity and calculation requirements: Sum lot-specific issued medium less unused returns. Original collection denominator kind: process_output.

- Selected flow: Embryo laboratory media (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lab`
- Range: Provisional laboratory-media screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg per prepared embryo
  - Basis: issued media divided by prepared embryos
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fertilising semen (`ivf_semen`)

Only an in-vitro lot that uses semen records it as upstream input, not final embryo output.

Denominator and scope requirements：per in-vitro preparation lot

Raw quantity and calculation requirements: Record source lot and used quantity, net of returns. Original collection denominator kind: process_output.

- Selected flow: Species-matched fertilising semen (UUID unresolved)
- Flow property / unit: Dose count or calibrated volume / dose or mL
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lab`
- Range: Provisional semen-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: dose per in-vitro lot
  - Basis: actual fertilising semen used in the lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared embryos (`prepared_embryos`)

Hand route-identified assessable embryos to grading; failed fertilisation or washing is a loss, not output.

Denominator and scope requirements：per preparation lot

Raw quantity and calculation requirements: Count assessable embryos by donor, route and lot. Original collection denominator kind: process_output.

- Selected flow: Prepared animal embryos before grading (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lab`
- Range: Provisional prepared-count screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: embryo per lot
  - Basis: prepared count in a route-specific lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent laboratory media (`spent_media`)

Record spent medium and biological losses by actual treatment destination.

Denominator and scope requirements：per preparation lot

Raw quantity and calculation requirements: Weigh or measure media sent to treatment by lot. Original collection denominator kind: process_output.

- Selected flow: Spent embryo laboratory media to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lab`
- Range: Provisional spent-media screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg per lot
  - Basis: spent media from one observed lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Grade and destination sorting (`grading`)

#### Inputs

##### Product flows

###### Prepared embryos received (`prepared_embryos_input`)

Receive assessable embryos from first preparation with donor, route and lot preserved.

Denominator and scope requirements：per graded lot

Raw quantity and calculation requirements: Count receipts against preparation output and all grade destinations. Original collection denominator kind: process_output.

- Selected flow: Prepared animal embryos before grading (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional prepared input count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: embryo per lot
  - Basis: prepared embryos actually received for grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted viable embryos (`accepted_embryos`)

Hand only grade-accepted viable embryos to fresh packing or preservation.

Denominator and scope requirements：per graded lot

Raw quantity and calculation requirements: Count by developmental stage, grade, donor and next destination. Original collection denominator kind: process_output.

- Selected flow: Grade-accepted viable animal embryos (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional accepted-count screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: embryo per lot
  - Basis: accepted count in one graded lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded viable embryos (`downgraded_embryos`)

Product only if a lower-grade viable embryo has an actual separate handover; otherwise record hold or rejection.

Denominator and scope requirements：per graded lot

Raw quantity and calculation requirements: Count separately handed-over lower grade by destination. Original collection denominator kind: process_output.

- Selected flow: Downgraded viable animal embryos (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional downgrade screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: embryo per lot
  - Basis: separately handed-over downgraded count
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected reproductive material (`rejected_material`)

Non-viable embryos and failed oocytes are rejects, not reference output.

Denominator and scope requirements：per graded lot

Raw quantity and calculation requirements: Count by reason, retained test sample and treatment destination. Original collection denominator kind: process_output.

- Selected flow: Rejected embryo or oocyte material to treatment (UUID unresolved)
- Flow property / unit: Count / item
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grade`
- Range: Provisional rejection screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: item per lot
  - Basis: rejects from one graded lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Optional stabilization (`preservation`)

#### Inputs

##### Product flows

###### Accepted embryos entering preservation (`accepted_embryos_input`)

Only chilled or frozen lots receive grade-accepted viable embryos here; fresh lots bypass this node.

Denominator and scope requirements：per preserved lot

Raw quantity and calculation requirements: Count receipts against grading's accepted handoff. Original collection denominator kind: process_output.

- Selected flow: Grade-accepted viable animal embryos (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional preservation input count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: embryo per lot
  - Basis: accepted embryos actually entering intervention
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation energy (`preservation_energy`)

Only actual chilled or frozen lots use this node; fresh lots bypass it.

Denominator and scope requirements：per accepted preserved embryo

Raw quantity and calculation requirements: Meter energy over actual intervention and storage period. Original collection denominator kind: process_output.

- Selected flow: Preservation energy supply (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional preservation-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kWh per accepted preserved embryo
  - Basis: measured energy divided by accepted post-preservation count
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cryogenic nitrogen (`nitrogen`)

Record liquid nitrogen only for routes and tanks that actually use it.

Denominator and scope requirements：per accepted frozen embryo

Raw quantity and calculation requirements: Reconcile deliveries, inventory and boil-off by tank service period. Original collection denominator kind: process_output.

- Selected flow: Liquid nitrogen supply (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional cryogen screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg per accepted frozen embryo
  - Basis: tank-period consumption divided by linked accepted embryos
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized viable embryos (`stabilized_embryos`)

Count viable embryos after intervention, not merely those entering storage.

Denominator and scope requirements：per preserved lot

Raw quantity and calculation requirements: Count post-intervention accepted embryos by state, grade and lot. Original collection denominator kind: process_output.

- Selected flow: Chilled or frozen viable embryos before packing (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional preserved-count screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: embryo per lot
  - Basis: accepted count after observed intervention
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation rejects (`preservation_rejects`)

Identify failed viability, contamination or packing damage and actual destination.

Denominator and scope requirements：per preserved lot

Raw quantity and calculation requirements: Count post-intervention rejects by reason and destination. Original collection denominator kind: process_output.

- Selected flow: Non-viable embryos after preservation to treatment (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preserve`
- Range: Provisional preservation-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: embryo per lot
  - Basis: rejected count after observed intervention
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Protective packing and laboratory release (`release`)

#### Inputs

##### Product flows

###### Viable embryos entering packing (`pack_input_embryos`)

Receive accepted fresh embryos directly from grading or viable chilled/frozen embryos from preservation, never both for the same item.

Denominator and scope requirements：per release lot

Raw quantity and calculation requirements: Count stage-, route- and state-matched receipts against prior-node handoffs. Original collection denominator kind: process_output.

- Selected flow: Viable animal embryos before final packing (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Range: Provisional packing input count
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: embryo per lot
  - Basis: viable embryos actually received for packing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective containers (`container`)

Record actual straw, vial or ampoule and its new or reusable status; distinguish product enclosure from post-gate shipping.

Denominator and scope requirements：per released embryo

Raw quantity and calculation requirements: Measure new materials and uniquely attributed reusable-container service. Original collection denominator kind: reference_flow.

- Selected flow: Embryo protective packaging (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Range: Provisional packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg per released embryo
  - Basis: new and attributed reusable packaging over released embryos
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released viable embryo (`viable_embryo`)

This is the sole reference product; no transfer or pregnancy outcome is implied.

Raw reference-output records: Count signed quality-released embryos by route, state and grade. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

The machine unit item is the local representation of the confirmed unit-group reference unit Item(s), with multiplier 1. One item means one quality-accepted viable embryo of the declared species, state, grade and release specification. Preserve native embryo counts in collection records. This count representation does not equate containers, volume, sperm count, oocytes or treatment attempts to accepted goods, and does not establish equivalence across species, states or dose specifications.

Denominator and scope requirements：per reference flow

- Selected flow: Viable animal embryo at collection or production-lab release
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Range: Reference-count identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: embryo per reference flow
  - Basis: exactly one signed quality-accepted embryo
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `un-cpc-3`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide` | all lots | Subdivide by species, donor, in-vivo/in-vitro route, final state and grade before any residual allocation; include failed attempts. | `review-fao-pig-lca-2018` |
| `destinations` | graded output | Accepted reference-grade embryos, independently sold downgraded embryos, held states and treatment rejects require distinct actual handoffs. | `woah-invivo-2024`; `woah-invitro-2024` |
| `periods` | donor and laboratory | Attribute feed, donor events, collection, culture, storage and replacement/cull to observed service periods and lot outputs once; do not double-allocate across years. | `review-fao-pig-lca-2018` |
| `assets` | shared facilities | Assign measured service hours/occupancy of rooms, incubators, tanks and reusable containers to all consuming nodes and periods once; disclose residual physical/economic split and sensitivity. | `review-fao-pig-lca-2018` |
| `allocation_method_basis` | Residual joint burdens and shared service | Apply the general LCA hierarchy: examine subdivision or an appropriately justified system expansion before residual allocation; then prefer a supported physical causal relationship, and justify an economic basis when physical attribution is not established. The donor-day, occupancy or throughput driver is a PCR modelling choice requiring case-specific evidence and sensitivity, not a requirement of sanitary guidance. Include failed attempts and losses in the service period; do not select only successful outputs or introduce hypothetical substitution credits. | `review-fao-pig-lca-2018` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_donor` | `donor` | feed, water, manure, donor service | husbandry ledger | donor_id, species, period, donor_days, feed_DM, water_kg, manure_kg, replacement, room_hours | weigh, meter, event log; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | day, kg, h | daily/event | full linked donor period | all donors | per reference flow | dated signed ledger; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_recovery` | `recovery` | medium and raw embryo/oocyte | event register | event_id, donor_id, route, medium_kg, raw_embryo_count, oocyte_count, losses, room_hours | issue sheet, count, weigh; Raw aggregation requirements: reconcile each event. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, item, h | event | all attempts | collection unit | per reference flow | chain of custody; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_lab` | `preparation` | media, semen, prepared embryos, spent media | laboratory batch log | lot_id, route, media_kg, semen_lot, dose_count, retrieved_count, fertilised_count, prepared_count, waste_kg, incubator_hours | issue and assay log; Raw aggregation requirements: route-specific balance. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, dose, item, h | lot | all batches | laboratory | per reference flow | assay and lot record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_grade` | `grading` | accepted, downgraded, held, rejected | grade register | lot_id, stage, grade, accepted, downgraded, held, rejected, destination | qualified examination; Raw aggregation requirements: reconcile all destinations. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | item | lot | all assessed material | laboratory | per reference flow | signed grade sheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_preserve` | `preservation` | energy, nitrogen, stable count, rejects | cold-chain log | lot_id, state, kWh, nitrogen_kg, storage_days, tank_hours, pre_count, accepted, rejected | meter, stock balance, logger; Raw aggregation requirements: route-specific count and occupancy. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kWh, kg, day, item | lot/day | full intervention and storage | cold room/tank | per reference flow | logger and QC; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_release` | `release` | container and released embryo | release ledger | lot_id, route, stage, grade, state, new_package_kg, reuse_cycles, released, gate_time | issue count and QA sign-off; Raw aggregation requirements: count signed releases. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, embryo | lot | every handover | laboratory gate | per reference flow | label and signed receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_pathway_emissions` | `donor` | pathway-specific gases and manure N/C | herd, feed, manure, field and method ledger | species/class; animal-days; intake/DM/digestibility; volatile solids; manure N/TAN; system shares; climate; storage time; fertiliser N; grazing; volatilisation/leaching; methane recovery; factor source/unit; final accepted output ; collected manure wet mass; dry matter; destination| collect primary activity by node and period, document parameter applicability, retain each pathway worksheet and any linked treatment/pasture dataset  Retain raw totals and normalize attributed quantities once to the measured accepted final reference output.| animal-day; kg DM; kg VS; kg N; kg CH4; kg N2O; kg NH3 | each operating period and management change | complete represented cohort and service period | actual operated nodes only | per reference flow | meter/analysis records, nitrogen cascade, method and factor evidence, no-duplication ledger |
| `cp_feed_supply_and_intake` | `donor` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `donor` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `count_balance` | recovery through release | Reconcile route-specific raw embryo or oocyte, prepared, graded, downgraded, held, rejected, preserved and released counts; retain failed events. | `cp_recovery`, `cp_lab`, `cp_grade`, `cp_preserve`, `cp_release` | lot-level count balance | `woah-invivo-2024`; `woah-invitro-2024` |
| `donor_intensity` | donor service | Divide attributable same-period donor burden by linked released embryos after real independent-output treatment. | `cp_donor`, `cp_recovery`, `cp_release` | donor burden per embryo | `woah-invivo-2024`; `woah-invitro-2024` |
| `route_intensity` | laboratory and preservation | Divide actual route/state media, semen, energy, cryogen and storage burden by same-route/state accepted count, retaining zero-output lots. | `cp_lab`, `cp_preserve`, `cp_release` | route inventory per embryo | `woah-invivo-2024`; `woah-invitro-2024` |
| `shared_service` | shared infrastructure | Assign each asset's observed service over all consuming nodes and periods once; reconciled shares equal total service. | `cp_donor`, `cp_recovery`, `cp_lab`, `cp_preserve`, `cp_release` | unique attributed service burden | `woah-invivo-2024`; `woah-invitro-2024` |
| `calc_pathway_emissions` | `donor` | Use species- and management-compatible methods and retain disaggregated pathway totals. Convert N2O-N to N2O by 44/28 and NH3-N to NH3 by 17/14 exactly once; already molecular masses are not reconverted. Check methane against the documented available-carbon/methane-potential balance and nitrogen losses against each stage's available N. Indirect formation from previously volatilised N is a downstream transformation, not a second source-stage N loss. Attribute and normalize once; do not duplicate linked treatment or fate-model emissions.  Use matched raw-period quantities before allocation for physical screens: CH4 mass × 12/16 must not exceed the carbon available to the represented pathway; source-stage NH3 mass × 14/17 plus direct N2O mass × 28/44 and other source N losses must not exceed that stage's available N, after accounting for stocks and transfers. Bound each indirect N2O-N calculation by its documented volatilised or leached N precursor, not by subtracting that downstream transformation again from the source ledger. These are conservation checks, not emission factors or an empirical per-product range.| `cp_pathway_emissions` | kg named compound per final reference flow | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `donor_feed` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `review-fao-pig-lca-2018` |
| `calc_manure_n2o_coverage` | `review_donor_direct_n2o`; `review_donor_indirect_n2o` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | released product | Preserve species, donor, route, developmental stage, grade, state, container and gate. | grade sheet and signed release |
| `completeness` | all attempts | Include failed retrieval/culture, samples, downgrade, rejection, utilities and packaging. | reconciled event and lot registers |
| `temporal` | donor and assets | Link service, replacement, room/incubator/tank use and released embryos to observed periods. | dated husbandry and asset logs |
| `comparability` | route and state | Retain separate in-vivo/in-vitro and fresh/chilled/frozen denominators; no universal success factor. | route-specific release criteria and ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference` | final product | Require viable animal embryo, species, route, stage, grade, state and signed release; an anatomical structure cannot substitute for the product flow. | `un-cpc-3`; `woah-invivo-2024`; `woah-invitro-2024` |
| `route` | each lot | Resolve one in-vivo or in-vitro path and only actual fertilisation/culture, preservation and trade controls. | `woah-invivo-2024`; `woah-invitro-2024` |
| `balance` | every interface | Reconcile raw, prepared, graded, downgraded, preserved, rejected and released counts plus media and packages. | `woah-invivo-2024`; `woah-invitro-2024` |
| `attribution` | periods/assets | Verify donor and failed-event periods, every shared consumer, unique burden ownership and independent lower-grade handover. | `woah-invivo-2024`; `woah-invitro-2024` |
| `v_pathway_emission_coverage` | `donor` | Require a pathway coverage ledger for enteric CH4 where biologically applicable, manure CH4, direct/indirect N2O, NH3 and relevant field emissions. Every pathway needs a measured/calculated value, a named linked process with matching coverage, or supported inapplicability; absent data cannot become zero. Keep wild life before capture outside managed husbandry, assess actual managed holding separately, and retain species-specific evidence. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `review-fao-pig-lca-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground breeding-embryo production package, not recipient-transfer service. |
| downstream_use | `secondary_dataset`; `background_dataset` only with verified concrete identities and representativeness. |
| allowed_use | Species-, route-, stage-, quality-, state- and gate-matched embryo assessment. |
| excluded_use | Insect immature stages, oocytes, semen, embryo transfer, pregnancy and unmatched routes. |
| required_metadata | CPC reference, donor, periods, route, stage, grade, all counts, state, gate and allocation. |
| required_quality_disclosure | Missing UUIDs, failed-lot coverage, route yield, assays, media/cryogen metering, shared-asset attribution and gaps. |
| update_trigger | Exact reference-flow identity, species/route method change or stronger quantitative evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | standard | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Embryo product identity and insect exclusion |
| `woah-invivo-2024` | standard | https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2023/chapitre_coll_embryo_equid.pdf | In-vivo collection, washing, grading, storage and traceability |
| `woah-invitro-2024` | standard | https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2023/chapitre_coll_embryo_invitro.pdf | Oocyte retrieval, in-vitro laboratory route and traceability |
| `review-fao-pig-lca-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains: Guidelines for assessment, section 11.2.2 and Appendix 2.13](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed-loss accounting and general LCA allocation hierarchy; extension to other taxa or reproductive products is this PCR's explicit methodological choice, not a pig parameter transfer |
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | Species and pathway applicability; CH4 and N2O method selection, not universal emission factors |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 nitrogen-flow method; verify actual species, management and geographical applicability before adopting parameters |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Managed-soil direct and indirect nitrogen pathways and boundary reconciliation |
