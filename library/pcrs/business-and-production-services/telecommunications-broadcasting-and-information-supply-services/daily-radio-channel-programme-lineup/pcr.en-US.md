---
pcr_id: pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.daily-radio-channel-programme-lineup
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Daily radio channel programme line-up

## 1. Scope and Applicability

Applies to a station's complete daily assembly of programmes, live broadcasts and continuity content handed to another distributor. Covers recorded, live and mixed line-ups; one short episode cannot substitute for the daily assembly. Official classification distinguishes this object from original broadcast assets and broadcasting services (`unsd-cpc3-2025`, p.444). Delivery comprises actual audio or mutually accepted programme references and live handoff interfaces, schedule and technical metadata; abstract scheduling consultancy alone is outside scope.

Count one complete daily delivery, not mass, revenue, licence price or audience. Stratify language, advertising variants, genres, airtime, repeat-content share and handoff specification; technical differences do not automatically establish environmental superiority.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.daily-radio-channel-programme-lineup |
| classification_refs | CPC 3.0 84621 — Radio channel programmes |
| covered_products | Complete recorded, live and mixed station daily radio line-ups for distribution by others |
| excluded_products | Individual broadcast original masters; sound-recording originals; listener audio downloads or streaming; transmission and subscriber distribution services; equipment manufacture; scheduling consultancy |
| representative_product | Accepted daily radio channel programme line-up |
| production_route | Programme receipt and checking → scheduling and continuity → conditional live contribution → delivery checking and handoff |
| market_state | Complete accepted daily line-up identified by station, date, version and recipient |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide another distributor with the assembled programming of one complete station broadcast day |
| How much | 1 complete daily line-up containing all scheduled programming |
| How well | Order, timing, available asset references, live interfaces, audio and metadata meet the recipient’s recorded acceptance specification |
| How long or cycle | One station broadcast day with declared timestamps and time zone; record actual airtime without assuming 24 hours; disclose repeats and retention separately |
| reference_flow_link | reference_product_daily_lineup |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted daily radio channel programme line-up |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | station and editorial service; date, time zone, timestamps and actual airtime; language; line-up version and asset list; recorded/live share; advertising variant; format, sample rate, channels and loudness policy; rights and reuse scope; handoff point and recipient acceptance; production/distribution separation; geography and voltage; retention and shared allocation; equipment and original-asset boundary |

item denotes the same single-count unit as public Item(s). Only a complete accepted daily line-up is one item; retransmitting the same version does not add another line-up. Required qualifiers belong in the data package; rights define permissible delivery and are not physical quality or mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use cp_delivery to collect identity and timing of one complete accepted daily line-up; every inventory row is per declared reference flow. Actual duration qualifies delivery and is not converted to mass. |
| `electricity_unit` | ingest_electricity, schedule_electricity, live_electricity, handoff_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public primary property and energy unit group 93a60a57-a3c8-11da-a746-0800200c9a66; multiply measured meter kWh by 3.6 to obtain MJ. GB, CPU-hours and audio seconds are not energy. |
| `service_count` | source_programme_master, hosted_playout_day, contribution_link_day | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Separately define one approved audio programme master, one specified daily hosted playout package and one daily contribution-link delivery package. Verify against contracts and activity records; price and data traffic alone cannot establish the amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified programme masters with usage rights or actual live contributions available at the compiler’s receiving interface |
| starting_condition_role | Foreground production input; new original creation is a separate upstream module even when supplied internally |
| product_classification_scope | Complete daily radio channel programme assemblies for distribution by others |
| recursive_input_rule | For re-editing an existing line-up, count its actual input and incremental assembly once without recursively rebuilding the original day |
| upstream_dataset_requirement | Representative datasets for source content, purchased electricity, outsourced hosting and contribution links; declare whether equipment and facility manufacture is included |
| disclosure | Foreground receipt/checking through complete daily handoff; missing upstream and capital equipment prevents a complete cradle-to-gate claim; disclose measured energy, source-asset boundaries, allocation, storage, unmeasured activities and exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_delivery` | daily assembly | Include receipt, asset checking, scheduling, continuity, required storage, actual live mixing, acceptance and handoff to the distributor, including failed handoff retries and actual rework energy. | `unsd-cpc3-2025`; `ebu-radio-workflow-2023` |
| `sb_separate_distribution` | downstream | Model FM/DAB transmission, listener-network distribution, playback and terminal manufacture beyond the handoff separately; split combined operations using recorded interfaces. | `unsd-cpc3-2025`; `ebu-radio-workflow-2023` |
| `sb_actual_resources` | facilities and supporting activities | Include measured or explainably attributable workstation, server, playout, storage and cooling electricity and production-support lighting. Equipment/facility manufacture, commuting and long-term archives are excluded by default and disclosed. Actual attributable on-site combustion, refrigerant leakage, consumables or equipment replacement require separately collected atomic extensions; no emissions are presumed without evidence. | `ebu-radio-workflow-2023` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `programme_ingest` | Programme receipt and checking | required | All deliveries; file/live receipt follows actual route | foreground production | 1 item complete daily line-up |
| `lineup_assembly` | Daily scheduling and continuity | required | All approved programmes and continuity | foreground production | 1 item complete daily line-up |
| `live_contribution` | Live contribution production and mixing | conditional | Only actual foreground live operation | foreground production | 1 item complete daily line-up |
| `delivery_handoff` | Acceptance, storage and handoff | required | Complete daily assembly handed to others | foreground production | 1 item complete daily line-up |

### Process: Programme receipt and checking (`programme_ingest`)

#### Inputs

##### Product flows

###### Approved audio programme master (`source_programme_master`)

Include when recorded content is used; record each concrete master and version separately, not rights fees as production burden. Internally produced live content is not also a purchased master.

- Selected flow: Approved audio programme master
- Flow property / unit: Number of items / item
- Amount rule: Attributed shares of actual programme masters; per declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

###### Alternating current (`ingest_electricity`)

Record measured electricity for this operation and attributable support equipment under cp_energy. This UUID applies only to CN grid-average consumption mix delivered to the user at <1 kV; other geography or voltage requires separately verified matching identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable operation kWh converted to MJ under electricity_unit; per declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

### Process: Daily scheduling and continuity (`lineup_assembly`)

#### Inputs

##### Product flows

###### Alternating current (`schedule_electricity`)

Record measured electricity for this operation and attributable support equipment under cp_energy. This UUID applies only to CN grid-average consumption mix delivered to the user at <1 kV; other geography or voltage requires separately verified matching identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable operation kWh converted to MJ under electricity_unit; per declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

### Process: Live contribution production and mixing (`live_contribution`)

#### Inputs

##### Product flows

###### Alternating current (`live_electricity`)

Record measured electricity for this operation and attributable support equipment under cp_energy. This UUID applies only to CN grid-average consumption mix delivered to the user at <1 kV; other geography or voltage requires separately verified matching identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable operation kWh converted to MJ under electricity_unit; per declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

This operation handles actual live continuity and mixing. Complex field recording, reporting, travel or event production belongs in a separate original-contribution module with linked inventory; live content is not presumed to consist entirely of workstation audio.

### Process: Acceptance, storage and handoff (`delivery_handoff`)

#### Inputs

##### Product flows

###### Alternating current (`handoff_electricity`)

Record measured electricity for this operation and attributable support equipment under cp_energy. This UUID applies only to CN grid-average consumption mix delivered to the user at <1 kV; other geography or voltage requires separately verified matching identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable operation kWh converted to MJ under electricity_unit; per declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

###### Daily hosted playout delivery package (`hosted_playout_day`)

Include one specified service only for outsourced storage and playout; the contract identifies audio version, duration, redundancy and system boundary. Do not add local electricity, cooling or hardware burdens already included by the supplier; internal operation does not use this row.

- Selected flow: Daily hosted playout delivery package
- Flow property / unit: Number of items / item
- Amount rule: Record attributed count of actually delivered contractual packages; per declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

###### Daily contribution-link handoff package (`contribution_link_day`)

Include only an actual outsourced contribution link carrying line-up or live signal to the distributor interface; this is one specified link service excluding the audience network. Supplier primary activity evidence is required; transmitted GB is not directly converted to kWh.

- Selected flow: Daily contribution-link handoff package
- Flow property / unit: Number of items / item
- Amount rule: Record attributed count of actually delivered contractual link packages; per declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

#### Outputs

##### Product flows

###### Accepted daily radio channel programme line-up (`reference_product_daily_lineup`)

Unique output of the complete accepted daily line-up. Retain the schedule, asset references, live interfaces and acceptance record; delivery retries do not add output.

- Selected flow: Accepted daily radio channel programme line-up
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

No direct elementary emission or physical waste is presumed in this inventory: deleting an audio file is not a material waste flow, and power-station emissions belong upstream of purchased electricity. Actual on-site combustion, refrigerant losses or discarded consumables must be separately added and verified under sb_actual_resources when constructing a concrete data package; a manufacturing emission inventory is not imposed without evidence.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_metering` | shared equipment | Prefer separate meters and tasks; attribute shared-meter energy using measured task power and run time, not sale price or audience. cp_energy records active, idle, retained storage, cooling and other users; allocation must reconcile the measured total. Allocate idle energy using recorded reserved-use time and report sensitivity. |  |
| `alloc_original_reuse` | source_programme_master | Keep original-creation inventory separately. cp_assets defines the evidenced, non-overlapping reuse set and daily attribution weights summing to one; equivalent complete uses may share equally across evidenced uses without assumed count or lifetime. Excerpt attribution requires evidence connecting duration to creation effort; unproven attribution remains review. Rights transactions do not eliminate content burdens, nor justify adding full creation cost on every play. |  |
| `alloc_variants` | line-up variants and retries | Separate incremental tasks for language, advertising and regional variants with independently delivered outputs. Allocate shared assembly by documented actual task relationships; master, schedule and acceptance receipt are not three co-products. Attribute failed retries to the delivered line-up. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | delivery_handoff | reference product | acceptance record | station; schedule version; date; time zone; start/end; actual airtime; asset completeness; recipient; acceptance | Reconcile each daily schedule with asset list, checksums and handoff logs; count only complete accepted versions | item | each complete handoff | complete assembly and handoff period | compiler and handoff interface | per declared reference flow | recipient acceptance and completeness records |
| cp_energy | programme_ingest; lineup_assembly; live_contribution; delivery_handoff | electricity | meter and job record | meter start/end kWh; equipment; task; active/idle time; geography; voltage; cooling; retention; shared weights | Use verified meters and measured equipment power with task logs; remove overlaps and include rework and attributable supporting energy | kWh | each operation or time interval | assembly preparation, handoff and required retention period | declared sites and internally operated equipment | per declared reference flow | calibration, complete meter balance and shared-task ledger |
| cp_assets | programme_ingest | source programme | asset and upstream inventory record | each master ID/version; original-creation inventory; reuse set; daily attribution share; duration; rights | Reconcile actual programme asset list with separate original inventory; retain evidence for complete and excerpt use | item | each master and line-up | creation and reuse period relevant to the line-up | actual source creator and compiler | per declared reference flow | original inventory and non-duplicate attribution audit |
| cp_services | delivery_handoff | external service | contract delivery and supplier primary data | specific package ID; service type; schedule; duration; capacity; traffic; supplier energy; hardware boundary; shared attribution; receipt | Separately verify actual hosting and link packages against receipts and supplier inventories; traffic checks capacity without default energy conversion | item | each contractual package | complete contracted service period | declared actual suppliers | per declared reference flow | service boundary, supplier primary records and non-duplicate electricity ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `energy_conversion` | ingest_electricity, schedule_electricity, live_electricity, handoff_electricity | Per declared reference flow, multiply measured attributable kWh by 3.6 to obtain MJ; four operation amounts must not overlap and their sum reconciles attributable meter totals. | cp_energy | MJ per declared reference flow |  |
| `asset_attribution` | source_programme_master | Per declared reference flow, record each concrete master’s evidenced attribution share and link its separate creation inventory; weights over the complete reuse set must sum to one, retaining excerpt-relationship evidence. | cp_assets | master shares per declared reference flow |  |
| `service_attribution` | hosted_playout_day, contribution_link_day | Per declared reference flow, use actual package counts and evidenced shared fractions; link matching supplier inventories without a default GB-to-energy factor. | cp_services | contract package shares per declared reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference_product_daily_lineup | Complete identifiable daily delivery with actual duration, recorded/live mix, version and reuse rights; an episode cannot stand for the day. | cp_delivery; unsd-cpc3-2025 |
| `dq_technical` | audio and handoff | Record recipient acceptance of format, integrity and loudness policy. Verify declared EBU strategy against its declared edition only when adopted, not as a universal mandate. | cp_delivery; ebu-radio-workflow-2023 |
| `dq_representative` | all inventory rows | One day represents that case; a channel-representative value requires declared-period coverage of weekdays, weekends, repeats and live differences with daily distributions. No default energy is supplied. | cp_delivery; cp_energy |
| `dq_missing` | all inventory rows | Missing meters, absent supplier inventories, unproven reuse shares and unresolved identities remain explicit gaps, not zero. | cp_assets; cp_services; cp_energy |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference` | reference product | Confirm one complete daily output, count unit, actual times, acceptance and every qualifier; other delivery objects are inapplicable. | `unsd-cpc3-2025` |
| `vr_energy` | electricity rows | Check meter totals and attribution, 3.6 conversion, voltage and geography; do not recount electricity already included in supplier services. |  |
| `vr_originals` | source assets and services | Check original inventories and reuse weights, interface boundaries, actual contract-package units and primary activity records; counting cannot replace supplier physical inventory. Unproven shares require review. |  |
| `vr_completeness` | whole dataset | Check every required and actual conditional activity. Expose gaps and default exclusions; absent upstream or equipment manufacture prevents a complete lifecycle claim. Add elementary flows only for evidenced direct occurrences with verified identity and compartment, not inferred site emissions from grid generation. | `ebu-radio-workflow-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for a complete daily channel line-up |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | channel-delivery modelling with matching boundary and technical configuration; linking to separate distribution/playback modules |
| excluded_use | proxy for one original work, download, listener-hour, transmission coverage, software or hardware manufacture; complete lifecycle claims without linked evidence |
| required_metadata | all reference qualifiers, process coverage, geography, voltage, measured supply, source and service datasets, reuse sets, attribution methods, conditional activities and handoff acceptance |
| required_quality_disclosure | meter uncertainty, sampling representativeness, missing supplier evidence, unresolved identities, equipment boundary, original-reuse and idle-allocation sensitivity |
| update_trigger | changes in schedule/version, recorded/live mix, supplier, system/electricity conditions, retention, original reuse set or handoff specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed p.444. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Daily assembly versus original-asset and broadcast-service boundaries; no measurement coefficients |
| ebu-radio-workflow-2023 | official_guidance | European Broadcasting Union, Tech 3401, November 2023, §2 Figure 4 p.7; §§3–4 pp.8–10. https://tech.ebu.ch/docs/tech/tech3401.pdf | Production/distribution interfaces and loudness metadata; not energy or universal audio-threshold evidence |
