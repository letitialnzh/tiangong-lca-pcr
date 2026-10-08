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
| reference_flow_link | `release:viable_embryo` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Viable animal embryo at collection or production-lab release (UUID unresolved). |
| Reference flow property | Count of embryos (UUID unresolved). |
| Reference unit group | Embryo count unit group (UUID unresolved). |
| Reference unit | embryo |
| Required qualifiers | Species; donor; route; batch; stage; grade; fresh/chilled/frozen state; container; gate; reporting period. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `count` | reference product | Count (UUID unresolved) | embryo | Count each accepted embryo once, not each container, oocyte or transfer attempt. |
| `yield` | route transitions | Count | embryo, oocyte | Reconcile raw collection/retrieval, preparation, grading, preservation, reject and release counts by donor and route. |
| `media` | fluids and consumables | Mass or calibrated volume | kg, L | Convert volume to mass only with documented composition and density. |
| `period` | donor and shared services | Time and count | donor-day, h, embryo | Align input, output and asset service periods; retain failed attempts. |

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

- Selected flow: Donor feed (UUID unresolved)
- Flow property / unit: Mass / kg dry matter
- Amount rule: Sum observed intake over donor-days linked to actual embryo lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per released embryo
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_donor`
- Range: Provisional donor-feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg dry matter per released embryo
  - Basis: donor-period intake divided by linked released embryos
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Donor water (`donor_water`)

Meter drinking and care water, resolving its actual source and use from records.

- Selected flow: Donor water supply (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Sum observed donor-period supply.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per released embryo
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Donor manure to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record collection mass and actual destination by period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per donor service period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

### Process: Embryo collection or oocyte retrieval (`recovery`)

#### Inputs

##### Product flows

###### Recovery medium (`recovery_medium`)

Record actual collection or aspiration medium and its lot-specific composition.

- Selected flow: Embryo or oocyte recovery medium (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure issued and returned medium per event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per recovery event
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Raw in-vivo collected embryos (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count recovered embryos, including later rejects, by donor event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per in-vivo recovery event
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Retrieved animal oocytes (UUID unresolved)
- Flow property / unit: Count / oocyte
- Amount rule: Count retrieved oocytes, including immature material, by donor event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per in-vitro retrieval event
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Raw in-vivo collected embryos (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count received embryos against recovery-event output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Retrieved animal oocytes (UUID unresolved)
- Flow property / unit: Count / oocyte
- Amount rule: Count received oocytes against retrieval-event output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Embryo laboratory media (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Sum lot-specific issued medium less unused returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per prepared embryo
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Species-matched fertilising semen (UUID unresolved)
- Flow property / unit: Dose count or calibrated volume / dose or mL
- Amount rule: Record source lot and used quantity, net of returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per in-vitro preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Prepared animal embryos before grading (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count assessable embryos by donor, route and lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Spent embryo laboratory media to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh or measure media sent to treatment by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Prepared animal embryos before grading (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count receipts against preparation output and all grade destinations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per graded lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Grade-accepted viable animal embryos (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count by developmental stage, grade, donor and next destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per graded lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Downgraded viable animal embryos (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count separately handed-over lower grade by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per graded lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Rejected embryo or oocyte material to treatment (UUID unresolved)
- Flow property / unit: Count / item
- Amount rule: Count by reason, retained test sample and treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per graded lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Grade-accepted viable animal embryos (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count receipts against grading's accepted handoff.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preserved lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Preservation energy supply (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Meter energy over actual intervention and storage period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted preserved embryo
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Liquid nitrogen supply (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Reconcile deliveries, inventory and boil-off by tank service period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted frozen embryo
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Chilled or frozen viable embryos before packing (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count post-intervention accepted embryos by state, grade and lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preserved lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Non-viable embryos after preservation to treatment (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count post-intervention rejects by reason and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preserved lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Viable animal embryos before final packing (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count stage-, route- and state-matched receipts against prior-node handoffs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per release lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Embryo protective packaging (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure new materials and uniquely attributed reusable-container service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per released embryo
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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

- Selected flow: Viable animal embryo at laboratory release (UUID unresolved)
- Flow property / unit: Count / embryo
- Amount rule: Count signed quality-released embryos by route, state and grade.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 released viable embryo
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
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
| `subdivide` | all lots | Subdivide by species, donor, in-vivo/in-vitro route, final state and grade before any residual allocation; include failed attempts. | `woah-invivo-2024`; `woah-invitro-2024` |
| `destinations` | graded output | Accepted reference-grade embryos, independently sold downgraded embryos, held states and treatment rejects require distinct actual handoffs. | `woah-invivo-2024`; `woah-invitro-2024` |
| `periods` | donor and laboratory | Attribute feed, donor events, collection, culture, storage and replacement/cull to observed service periods and lot outputs once; do not double-allocate across years. | `woah-invivo-2024`; `woah-invitro-2024` |
| `assets` | shared facilities | Assign measured service hours/occupancy of rooms, incubators, tanks and reusable containers to all consuming nodes and periods once; disclose residual physical/economic split and sensitivity. | `woah-invivo-2024`; `woah-invitro-2024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_donor` | `donor` | feed, water, manure, donor service | husbandry ledger | donor_id, species, period, donor_days, feed_DM, water_kg, manure_kg, replacement, room_hours | weigh, meter, event log | day, kg, h | daily/event | full linked donor period | all donors | sum by donor-period and lot | dated signed ledger |
| `cp_recovery` | `recovery` | medium and raw embryo/oocyte | event register | event_id, donor_id, route, medium_kg, raw_embryo_count, oocyte_count, losses, room_hours | issue sheet, count, weigh | kg, item, h | event | all attempts | collection unit | reconcile each event | chain of custody |
| `cp_lab` | `preparation` | media, semen, prepared embryos, spent media | laboratory batch log | lot_id, route, media_kg, semen_lot, dose_count, retrieved_count, fertilised_count, prepared_count, waste_kg, incubator_hours | issue and assay log | kg, dose, item, h | lot | all batches | laboratory | route-specific balance | assay and lot record |
| `cp_grade` | `grading` | accepted, downgraded, held, rejected | grade register | lot_id, stage, grade, accepted, downgraded, held, rejected, destination | qualified examination | item | lot | all assessed material | laboratory | reconcile all destinations | signed grade sheet |
| `cp_preserve` | `preservation` | energy, nitrogen, stable count, rejects | cold-chain log | lot_id, state, kWh, nitrogen_kg, storage_days, tank_hours, pre_count, accepted, rejected | meter, stock balance, logger | kWh, kg, day, item | lot/day | full intervention and storage | cold room/tank | route-specific count and occupancy | logger and QC |
| `cp_release` | `release` | container and released embryo | release ledger | lot_id, route, stage, grade, state, new_package_kg, reuse_cycles, released, gate_time | issue count and QA sign-off | kg, embryo | lot | every handover | laboratory gate | count signed releases | label and signed receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `count_balance` | recovery through release | Reconcile route-specific raw embryo or oocyte, prepared, graded, downgraded, held, rejected, preserved and released counts; retain failed events. | `cp_recovery`, `cp_lab`, `cp_grade`, `cp_preserve`, `cp_release` | lot-level count balance | `woah-invivo-2024`; `woah-invitro-2024` |
| `donor_intensity` | donor service | Divide attributable same-period donor burden by linked released embryos after real independent-output treatment. | `cp_donor`, `cp_recovery`, `cp_release` | donor burden per embryo | `woah-invivo-2024`; `woah-invitro-2024` |
| `route_intensity` | laboratory and preservation | Divide actual route/state media, semen, energy, cryogen and storage burden by same-route/state accepted count, retaining zero-output lots. | `cp_lab`, `cp_preserve`, `cp_release` | route inventory per embryo | `woah-invivo-2024`; `woah-invitro-2024` |
| `shared_service` | shared infrastructure | Assign each asset's observed service over all consuming nodes and periods once; reconciled shares equal total service. | `cp_donor`, `cp_recovery`, `cp_lab`, `cp_preserve`, `cp_release` | unique attributed service burden | `woah-invivo-2024`; `woah-invitro-2024` |

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
