---
pcr_id: pcr.business-and-production-services.digital-content.musical-audio-download-delivery
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Musical audio download delivery


## 1. Scope and Applicability

This PCR covers delivery of electronic files containing musical audio recordings that can be downloaded and stored on a local device. It covers single tracks and complete albums, lossy and lossless formats, new and existing recordings, owned and outsourced delivery infrastructure. Each dataset binds one defined package and release version. The substantive method need is to separate one-time file preparation from shared storage and repeated transmissions, and verify a completed local copy without multiplying original creation burdens. Sources: `un-cpc3-music`; `bandcamp-formats`.

Exclude live or streamed audio without a delivered local file, non-musical audio and audiobooks, video downloads, broadcast programmes, musical composition/recording originals as the reference output, physical recorded media, software originals, databases and rights/licensing-only transactions. A download entitlement alone is not completed delivery. The core foreground begins with an approved source recording and ends with file acceptance on the receiving device. Original production and hardware manufacture are separately linked upstream layers; subsequent listening and retention are downstream use. This is a delivery inventory, not an asserted complete cradle-to-gate music lifecycle.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.digital-content.musical-audio-download-delivery |
| classification_refs | CPC 3.0: 84321 |
| covered_products | Complete locally stored musical audio file packages; declared track or album configuration |
| excluded_products | Streams; broadcasts; non-musical audio; video; physical media; originals and rights-only sales |
| representative_product | One accepted download of an identified music track; album configurations use the same complete-package method |
| production_route | Approved master → file preparation and acceptance → origin/cache hosting → transfer → local file acceptance |
| market_state | Delivered musical audio file package, version and use conditions declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver a complete usable local copy of the declared musical audio recording package |
| How much | 1 item; one successful complete package delivery |
| How well | Exact release/track list, declared encoding and audio parameters; byte integrity and decode/playability accepted under documented checks |
| How long or cycle | One completed download through local file acceptance; actual preparation and hosting intervals allocated to the observed delivery cohort; no listening lifetime implied |
| reference_flow_link | `accepted_download` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete musical audio download |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | recording/release identifier; track sequence and package configuration; audio duration; codec/container, bitrate mode or sample rate/bit depth as applicable; channel configuration; file manifest, hashes and actual bytes; bundled artwork/metadata; reuse/use conditions; acceptance endpoint and method; cohort period and accepted counts; hosting/cache/backup interval and replicas; network segments and receiver type; provider scope; electricity region/voltage; original/hardware layer linkage |

Declare every qualifier in dataset metadata or equivalent records. item is a display alias for the public unit Item(s), with factor 1, and counts complete delivery packages. It is neither a kg quantity nor a copyright, user or sales unit. One album and one track are different configurations; equal item counts do not establish functional equivalence. Sources: `un-cpc3-music`; `bandcamp-formats`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | accepted_download | Number of items | item | 1 item = one complete accepted download package; cp_acceptance deduplicates retries and log events. Bytes, audio minutes, purchases and rights do not replace delivered-package count. |
| energy_conversion | prepare_electricity; hosting_electricity; network_electricity; receiving_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public electrical-energy property; 1 kWh = 3.6 MJ exactly. Distinguish power in W from energy in kWh; record meter integration interval. Source: nist-si-conversion. |
| scope_units | all inventory rows | Declared exchange property | Declared row unit | Count source masters, provider jobs and hardware only with their actual definitions and attributable shares. Storage bytes and transmission bytes stay activity records; no unproved bytes-to-energy or rights-to-mass conversion is allowed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Approved musical recording master with known version, provenance and use conditions |
| starting_condition_role | Foreground delivery interface; original creation remains a separately identified upstream layer |
| product_classification_scope | Downloadable locally stored musical recordings; classification is descriptive, not an allocation boundary |
| recursive_input_rule | Record acquired already prepared musical files once at the supplier interface; do not repeat their upstream encoding or original creation |
| upstream_dataset_requirement | Obtain compatible recording-production, hardware and provider inventories for linked layers; disclose unavailable layers |
| disclosure | Name endpoints, responsibility, original and hardware linkage, storage period, provider overlap, receiver coverage and downstream exclusions |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_delivery | delivery_system | Include actual file ingestion, format preparation or verification, release QA, origin/cache storage and replicas, transfer attempts and local receipt through integrity acceptance. Splitting sites/providers does not exclude an essential segment; missing data require explicit incomplete coverage. | un-cpc3-music; bandcamp-formats |
| boundary_layers | recording_master; server_hardware; router_hardware; receiving_computer | Core foreground starts after source recording approval. Report recording/performance/composition production separately and link only an evidenced attributable upstream inventory. Hardware production and end-of-life belong in identified asset/provider layers. Do not call foreground electricity alone complete product LCA. | gsf-sci110 |
| boundary_actual | all inventory rows | Instantiate each actual fuel, chemical, cooling water supply, wastewater, solid waste, material, additional device and substantiated elementary emission as a separate atomic row with measured amount and property. There is no mandatory on-site CO2, NOx or water emission for an electrically operated download. Upstream electricity emissions are not direct emissions. Absent exchanges need route evidence; unresolved identities are not cut-offs. | gsf-sci110 |
| boundary_use | post_acceptance | Exclude subsequent offline listening, storage retention after the declared download acceptance, user travel, unrelated platform browsing/streaming, advertising and rights-only transactions from core delivery. A full music-use comparison must separately add matched playback, retention, equipment and original-production scenarios. | un-cpc3-music |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preparation | Source ingestion, file preparation and release QA | required | All downloads; transcoding only if actual format conversion occurs | delivery preparation | one complete accepted download |
| hosting | Origin and cache hosting | required | Actual hosting interval and replicas; owned or provider route | storage | one complete accepted download |
| delivery | Network transfer and local acceptance | required | All actual transfer segments and receiving endpoint | delivery | one complete accepted download |

The cards define distinct exchanges, not universal quantities or a complete site bill of materials. Actual owned operations use metered electricity/device rows; outsourced operations use verified supplier-delivery rows with complete upstream scope. Mixed routes partition disjoint segments. None of these rows authorizes omitting unmatched geography or a receiving device.

### Process: File preparation (`preparation`)

#### Inputs

##### Product flows

###### Alternating current (`prepare_electricity`)

Electricity for ingestion, encoding when required, metadata assembly and release quality checks. Include failed attempts and the attributable shared computing load.

This selected UUID is applicable only to actual CN grid-average user supply below 1 kV. For other electricity regions, voltages or supply routes retain the exchange and verify a matching identity separately; the category remains global. Measure each stage independently and avoid duplicating supplier-inclusive electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### Musical recording digital master (`recording_master`)

Conditional upstream-linked exchange: one identified approved musical recording master, with the evidenced share of its creation burden assigned to this download cohort. A reusable master is not physically recreated for every copy. Retain separate recording-production inventory and beneficiary ledger; a licensing price does not measure its environmental burden. If this layer is unavailable disclose an unlinked upstream layer, never zero creation burden.

- Selected flow: Musical recording digital master
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_master.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_master`
- Sources: `gsf-sci110`

###### Musical audio transcoding job (`transcode_job`)

Conditional: an external provider actually delivers one specified transcoding job for this musical release. Define source/target format, file manifest, job completion and included energy/device scope. Allocate one completed batch job across its actual beneficiaries; do not add owned electricity for an already provider-covered operation. No re-encoding is required for a ready compatible file.

- Selected flow: Musical audio transcoding job
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_provider.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_provider`
- Sources: `gsf-sci110`

###### Computing server (`server_hardware`)

Conditional: attributable production and end-of-life share of one specified owned computing server used in preparation or hosting. Count the actual device configuration and assign its documented reserved-time/resource fraction over evidenced installed life, once across disjoint stages. Do not substitute a generic software service or count one whole server per download.

- Selected flow: Computing server
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_device.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_device`
- Sources: `gsf-sci110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows


### Process: Hosting (`hosting`)

#### Inputs

##### Product flows

###### Alternating current (`hosting_electricity`)

Electricity for the actual origin and cache storage intervals, retrieval and reserved capacity allocated to this release cohort. Include measured cooling and idle scope when attributable, with separate backup/redundancy records. Storage byte-time is an activity driver requiring meter reconciliation; it is not electrical energy.

This selected UUID is applicable only to actual CN grid-average user supply below 1 kV. For other electricity regions, voltages or supply routes retain the exchange and verify a matching identity separately; the category remains global. Measure each stage independently and avoid duplicating supplier-inclusive electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### Musical audio file hosting reservation (`hosting_reservation`)

Conditional outsourced alternative: one supplier-defined hosting reservation for the identified file version, capacity, interval and replica configuration. Obtain its underlying storage activity and energy/device inventory, then attribute the covered portion per delivery. A monetary hosting invoice alone is insufficient. Exclude the same provider-covered burden from owned rows.

- Selected flow: Musical audio file hosting reservation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_provider.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_provider`
- Sources: `gsf-sci110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows


### Process: Download and acceptance (`delivery`)

#### Inputs

##### Product flows

###### Alternating current (`network_electricity`)

Electricity for measured foreground download transport equipment and access network within the declared responsibility boundary. Reconcile session traffic, retries and shared reserved load to the same-period meter or supplier inventory. Do not multiply GB by an invented kWh/GB coefficient; remote provider-covered transport uses transmission_session instead.

This selected UUID is applicable only to actual CN grid-average user supply below 1 kV. For other electricity regions, voltages or supply routes retain the exchange and verify a matching identity separately; the category remains global. Measure each stage independently and avoid duplicating supplier-inclusive electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### IP packet router (`router_hardware`)

Conditional: one specified owned router participates in the transfer boundary. Attribute its device production and end-of-life share using documented capacity reservation, time and installed-life evidence. Actual switches, optical terminals or storage drives are distinct devices requiring their own rows if present; this router is not their proxy.

- Selected flow: IP packet router
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_device.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_device`
- Sources: `gsf-sci110`

###### Musical audio download transmission session (`transmission_session`)

Conditional: an external network provider delivers the specified end-to-end session segment. Bind endpoints, transferred file checksum, useful and retransmitted bytes, connection technology, time and included equipment/energy layers. One successful delivered package can require multiple attempts; provider traffic counts do not define the final accepted output.

- Selected flow: Musical audio download transmission session
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_provider.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_provider`
- Sources: `gsf-sci110`

###### Alternating current (`receiving_electricity`)

Electricity attributable to receiving, writing, decompressing when present and checking the delivered files on the specified local device until acceptance. Use controlled measured sessions or valid device telemetry and disclose sampling. Subsequent offline playback, retention and repeat listening are separate use scenarios.

This selected UUID is applicable only to actual CN grid-average user supply below 1 kV. For other electricity regions, voltages or supply routes retain the exchange and verify a matching identity separately; the category remains global. Measure each stage independently and avoid duplicating supplier-inclusive electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### Receiving computer (`receiving_computer`)

Conditional computer-receiver route: attributable share of one actual receiving computer with declared configuration and measured session use. Other receiving devices remain covered but require their own atomic device identity and evidence; this computer is not a smartphone proxy. Document installed life and reserved resources, without invented device life or mass.

- Selected flow: Receiving computer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_device.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_device`
- Sources: `gsf-sci110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete musical audio download (`accepted_download`)

One accepted delivered file package of the declared musical recording version: one track or one declared complete album, with ordered track list, encoding and integrity checks. Count only a completed local delivery, not a sale, click, stream, partial transfer or duplicate log event. Failed work remains in the input ledger.

- Selected flow: Complete musical audio download
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc3-music`; `bandcamp-formats`

##### Waste flows

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all inventory rows | Separate stages, version cohorts and owned/provider segments before allocation. Use actual workload telemetry and disjoint meter scopes; reconcile the sum of attributed shares and residuals to observed totals. Revenue, licensing value and user numbers are not physical shares. | gsf-sci110 |
| allocation_storage_network | hosting_electricity; network_electricity | Storage capacity-time and transmitted bytes may inform measured causal attribution only with actual reserved load, technology and meter/provider reconciliation. Report idle capacity, replicas, retransmissions and receiver scope. No universal energy-per-GB factor or arbitrary cooling multiplier is prescribed. | gsf-sci110 |
| allocation_device | server_hardware; router_hardware; receiving_computer | For each specified device use its actual documented installed-life, reserved-time and resource-capacity share. Reconcile all beneficiaries and do not double count supplier-covered hardware. Distinct devices and noncomputing materials require their own records; no default life or mass is given. | gsf-sci110 |
| allocation_original | recording_master; transcode_job | Keep original recording creation and reusable encoding work separate from incremental downloads. Use a conserved finite beneficiary ledger for the same master/version across download, stream and physical-release uses. Prefer measured subdivision; closed-cohort allocation must disclose its observation period, excluded beneficiaries and sensitivity. Never divide the full master burden by an invented future sale count or count it once per download. | un-cpc3-music |
| allocation_attempts | accepted_download | Include unsuccessful encoding/transfer effort attributable to the studied delivery cohort in the inputs; normalize to complete accepted local deliveries only. Separate repeated successful downloads as separate delivered copies within the same version cohort, while duplicate log entries never inflate output. | un-cpc3-music |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | delivery | complete output | acceptance_record | release ID; ordered files/tracks; hashes; codec and audio parameters; bytes; duration; endpoint; session IDs; attempts; complete accepted count; rights/use conditions | Reconcile server delivery events with local file manifest/integrity and decode acceptance or documented sampled receiver evidence; deduplicate event IDs and distinguish partial transfers | item | Each delivered package | Declared complete cohort interval | Origin, network and actual receiving endpoints | per declared reference flow | Version manifest; test results; logs; sampling and failures |
| cp_energy | preparation; hosting; delivery | stage electricity | meter_record | meter; start/end; stage/job; kWh; region/voltage; shared reservation; cooling/idle scope; session/storage/traffic logs; allocation shares; provider overlap | Use calibrated meters or verified telemetry integrated over actual disjoint stage intervals; reconcile facility totals and cohort workloads including retries; test receiving-device sessions separately | kWh | Each run and measured interval | Preparation plus actual storage and transfer interval | All measured owned segments and receiver sample | per declared reference flow | Calibration; raw telemetry; period reconciliation; sampling uncertainty |
| cp_master | preparation | upstream master share | source_record | master ID/version; approval; files; provenance/use conditions; creation inventory; benefiting release/use cohorts; allocation shares; cutoff | Inspect approved master and original production inventory; document actual beneficiary subdivision and conserved upstream shares; record unresolved original layer separately | item | Each source/version ledger update | Actual creation and beneficiary reporting horizon | Recording producer and publisher | per declared reference flow | Source manifest; upstream records; allocation/sensitivity ledger |
| cp_provider | preparation; hosting; delivery | specific provider delivery | supplier_record | supplier; scoped job/reservation/session ID; version; interval; capacity/bytes; defined item unit; accepted completion; energy/hardware inventory; beneficiary share | Obtain supplier activity and matched inventory with explicit endpoints and included layers; reconcile billed jobs/reservations/sessions to acceptance and partition owned overlap | item | Each provider delivery and period | Matched preparation/storage/transfer cohort | Actual providers and segments | per declared reference flow | Contract scope; inventory; raw activity; overlap reconciliation |
| cp_device | preparation; delivery | specific hardware share | asset_record | device ID/model/configuration; device count; production/end-of-life inventory; installed-life evidence; reserved time and resources; total capacity; stage beneficiaries | Reconcile actual asset register and supplier device inventory with workload reservation logs; substantiate life and partition device shares across all beneficiaries | item | Each configuration and reservation period | Actual installed life and studied reservation interval | Owned preparation/hosting, network and receiving devices | per declared reference flow | Asset records; device inventories; life evidence; workload shares |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_energy | prepare_electricity; hosting_electricity; network_electricity; receiving_electricity | Convert attributable collected kWh per declared reference flow to MJ by multiplication by 3.6. Preserve the measured physical attribution and disjoint provider scopes. | cp_energy | MJ per declared reference flow | nist-si-conversion |
| calculate_cohort | all inventory rows | Reconcile each measured attributable cohort exchange with the complete accepted-package count in the same release configuration and interval, then divide that attributed amount by the count. Keep failed work in the numerator. Retain pre-normalization totals and the positive denominator. | cp_acceptance; cp_energy; cp_provider; cp_master; cp_device | Exchange per declared reference flow | un-cpc3-music; gsf-sci110 |
| calculate_device | server_hardware; router_hardware; receiving_computer | Derive the attributable device fraction from the recorded reserved-time share of evidenced installed life and reserved-resource share of total capacity; apply it to the actual specified device inventory and reconcile across beneficiaries before cohort normalization. No default life or capacity is assigned. | cp_device; cp_acceptance | Attributable device item share per declared reference flow | gsf-sci110 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | accepted_download | Bind recording version, actual bytes, duration, encoding, track sequence, completeness and lawful/use-condition provenance; approval here is producer acceptance, not scientific or legal certification. | cp_acceptance; cp_master |
| quality_representative | all inventory rows | Declare geography, reporting period, format, network and receiving-device distributions; weighted samples need actual cohort weights. Do not extrapolate one CN meter to a global network. | cp_energy; cp_provider; cp_acceptance |
| quality_complete | all inventory rows | Report unmeasured receivers/providers, unavailable original/device layers, capacity attribution uncertainty and all retry/idle/backup gaps. A missing upstream or transfer layer is incomplete coverage, not a zero exchange. | cp_energy; cp_device; cp_provider; cp_master |
| quality_uncertainty | allocation_original; allocation_device | Retain sensitivity to recorded storage horizon, original beneficiaries, device life, receiver sampling and shared-resource attribution; no default production coefficient is provided. | cp_master; cp_device; cp_energy |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_download | Check 1 item complete accepted package against cp_acceptance, exact product name and all required qualifiers. Reject clicks, rights, revenue, streams, partial files or duplicate events as output. | un-cpc3-music; bandcamp-formats |
| validate_units | all inventory rows | Check count/property/unit compatibility, exact kWh-to-MJ conversion, source-to-unit-group linkage and per-declared-reference-flow denominator. Do not replace a public primary property to force a UUID match; reject unsupported bytes/energy or copyright/mass conversions. | nist-si-conversion |
| validate_overlap | delivery_system | Reconcile disjoint meters/provider layers, device fractions, original beneficiary shares, storage intervals and retries. Verified CN electricity UUIDs require real region/voltage match; all other regions remain in scope and need separately matched identities. | gsf-sci110 |
| validate_coverage | dataset | Check every actual production and delivery stage, added atomic exchanges and unresolved layer disclosure. Require independent applicability and scientific review before approval; structural checks do not certify impact, legal use, audio fidelity or complete lifecycle coverage. | un-cpc3-music; gsf-sci110 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground musical-download delivery inventory, with separately identified upstream original/hardware/provider layers |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | After evidence completion, one matched musical-download input to a declared music-use model with the same package quality and scope |
| excluded_use | Universal impact per song, byte, user or license; full music lifecycle from delivery-only data; streaming/broadcast proxies; unequal album/track comparisons |
| required_metadata | All reference qualifiers; original and version lineage; cohort totals; meter/provider endpoints; hardware fractions; geography/voltage; storage/retry scope; unit conversion; allocations and added exchanges |
| required_quality_disclosure | Unresolved identities and scientific review; original/hardware/provider/receiver gaps; sampling, allocation and temporal uncertainty; scope limitations |
| update_trigger | Changed recording/file version, encoding, package size, quality, supplier, network/device route, geography, storage horizon, acceptance or allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-music | official_guidance | UNSD, CPC Version 3.0, Code 84321, Explanatory note: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84321 | Current official file/local-storage boundary; no LCA coefficients |
| bandcamp-formats | handbook | Bandcamp Help Center, Which audio format should I download?, 12 June 2026: https://get.bandcamp.help/en/articles/15263285-which-audio-format-should-i-download | Current first-party lossy/lossless format and metadata example; no required platform, fidelity threshold or file-size default |
| gsf-sci110 | standard | Green Software Foundation, Software Carbon Intensity Specification 1.1.0; Energy, Embodied emissions, Software boundary and Quantification method: https://sci.greensoftware.foundation/ | Computing scope and device attribution principles adapted with actual foreground evidence; not a claim of complete SCI or music LCA conformance |
| nist-si-conversion | official_guidance | NIST SP 811 (2008), Appendix B.8 K, kilowatt hour: https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8 | Exact 1 kWh = 3.6 MJ only; historical table not used for pre-2019 SI base definitions or production intensities |
