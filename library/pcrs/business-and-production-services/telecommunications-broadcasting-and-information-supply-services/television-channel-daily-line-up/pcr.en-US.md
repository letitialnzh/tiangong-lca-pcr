---
pcr_id: pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.television-channel-daily-line-up
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Television channel daily line-up

## 1. Scope and Applicability

Applies to one television channel daily line-up assembled for distribution by others, including its actual acquired programmes, live feeds, advertisements and channel continuity. File, live-feed and mixed handoff routes are covered. A complete daily line-up follows the channel operational day and its declared complete scheduled window; a universal 24-hour transmission is not presumed. See `cpc-tv-lineup-2025`, p. 444. Individual television broadcast originals, film originals, consumer downloads, streamed content, over-air broadcasting and subscriber distribution services are excluded as reference products.

Television-specific picture-format adaptation, audio/video synchronization, audio-track and subtitle availability, QC and final schedule completeness establish a material methodology need. Radio methodology can inform generic metering only; it does not establish television configuration or acceptance. Original-production methodology supports upstream assets, not assembly of a daily channel delivery.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.television-channel-daily-line-up |
| classification_refs | CPC 3.0 84622 |
| covered_products | Complete daily television channel assemblies handed off as files, live feeds or mixed deliveries |
| excluded_products | Individual originals; pure licence transactions; viewer distribution and viewing; equipment manufacture as foreground |
| representative_product | Television channel daily line-up |
| production_route | Asset ingest and reconciliation → scheduling and necessary adaptation → QC → accepted distributor handoff |
| market_state | Versioned complete daily line-up accepted by its receiving distributor, with declared reuse rights and delivery conditions |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete distributable daily television channel line-up to another distributor |
| How much | One complete assembly for one channel and one declared operational day |
| How well | Current contract defines picture format, frame rate, sound tracks, sync, captions, rights and QC acceptance; no universal compliance approval |
| How long or cycle | One declared operational-day window; record start/end, timezone, actual duration and repeats |
| reference_flow_link | reference_product_lineup |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Television channel daily line-up |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | channel; operational day and timezone; schedule revision; complete content/version manifest; picture/audio configuration; captions; reuse rights; handoff endpoint/route; acceptance; equipment and upstream boundary |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | reference product | Number of items | item | item is the display alias of public Item(s); 1 item is one complete channel-day assembly, not one programme, viewer or right. Do not substitute mass. |
| electricity_measurement | electricity_lv; electricity_mv; electricity_other | Energy; UUID rows retain Net calorific value | MJ | Use cp_energy; metered kWh converts by 1 kWh = 3.6 MJ. Network GB, programme duration and price cannot be converted directly into electricity. |

The electricity UUID rows retain reference property Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`, with unit group `93a60a57-a3c8-11da-a746-0800200c9a66` (reference MJ). This is the public identity energy-measurement property and does not imply electricity combustion.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Version-identified programme originals and live feeds acquired for assembly; supplier production boundary disclosed |
| starting_condition_role | foreground_start |
| product_classification_scope | Daily television channel programme assembly for distribution by others |
| recursive_input_rule | For an existing line-up input, record source revision, actual attributable share and included boundary; do not recursively rebuild or duplicate its burdens |
| upstream_dataset_requirement | Link boundary-matched upstream datasets for acquired content, QC, contribution transfer, electricity and included equipment; disclose unavailable data |
| disclosure | Foreground starting point to accepted handoff; do not claim complete cradle-to-gate until upstream and equipment coverage is demonstrated |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_handoff | Include ingest, scheduling, rework, necessary transcoding, synchronization checks, caption-track checks, actual storage and pre-handoff monitoring/playout. Distributor encoding/transmission, viewer devices and viewing follow handoff and are outside this foreground. | cpc-tv-lineup-2025; bbc-file-quality-2020 |
| boundary_route | Do not add transcoding for pass-through assets. Live routes require live monitoring and actual resource records. Preserve differing contractual configurations. | bbc-file-quality-2020 |
| boundary_physical | Do not presume combustion, refrigerant leakage, water or physical waste as inevitable assembly exchanges. Add actual occurrences as separate substance/medium-specific measured rows; grid emissions belong to upstream electricity. | cpc-tv-lineup-2025 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly | Asset ingest and daily assembly | required | all routes | foreground_production | 1 item |
| quality_handoff | Picture/sound checks, adaptation and handoff | required | all routes; transcoding and outsourcing only when present | foreground_production | 1 item |
| utility_support | Metered utility and equipment support | required | actual facility; supply rows depend on meters without duplication | foreground_production | 1 item |

### Process: Asset ingest and daily assembly (`assembly`)

Use job logs, schedule manifests and acceptance records to identify actual operations; electricity is recorded once in utility_support.

#### Inputs

##### Product flows

###### Television broadcast original supplied for channel assembly (`programme_original`)

Record each distinct acquired original and version separately. This is a technical content input, not the price of a licence. Its attributed original-production share follows the disclosed actual reuse plan; do not assign the full original repeatedly to every daily repeat.

- Selected flow: Television broadcast original supplied for channel assembly
- Flow property / unit: Number of items / item
- Amount rule: Collect actual attributable quantity per declared reference flow under cp_content; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_content`
- Sources: `cpc-tv-lineup-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Picture/sound checks, adaptation and handoff (`quality_handoff`)

Use job logs, schedule manifests and acceptance records to identify actual operations; electricity is recorded once in utility_support.

#### Inputs

##### Product flows

###### Television programme file quality-control service (`qc_service`)

Only when external QC is actually purchased; one item is one contractually defined completed QC delivery. Record its file scope, revision and acceptance report; exclude the same vendor electricity from utility rows when already included in this service dataset.

- Selected flow: Television programme file quality-control service
- Flow property / unit: Number of items / item
- Amount rule: Collect actual attributable quantity per declared reference flow under cp_services; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `cpc-tv-lineup-2025`

###### Television channel feed contribution transfer service (`handoff_service`)

Only when external contribution transfer to the accepting distributor is used; one item is one defined completed transfer session. Specify endpoint, feed duration, redundancy and transfer logs. Exclude transmission from distributor to viewers.

- Selected flow: Television channel feed contribution transfer service
- Flow property / unit: Number of items / item
- Amount rule: Collect actual attributable quantity per declared reference flow under cp_services; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `cpc-tv-lineup-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Television channel daily line-up (`reference_product_lineup`)

This output is the complete channel-day assembly accepted by another distributor; cp_acceptance reconciles its window, assets, configuration and revision.

- Selected flow: Television channel daily line-up
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `cpc-tv-lineup-2025`

##### Waste flows

##### Elementary flows

### Process: Metered utility and equipment support (`utility_support`)

Use job logs, schedule manifests and acceptance records to identify actual operations; electricity is recorded once in utility_support.

#### Inputs

##### Product flows

###### Alternating current (`electricity_lv`)

Only for actual CN grid-average customer supply below 1 kV at the documented meter. Includes attributed ingest, scheduling, video adaptation, monitoring, storage, playout-to-handoff and facility support electricity. The voltage is the supply meter voltage, not the workstation adapter voltage.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect actual attributable quantity per declared reference flow under cp_energy; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `cpc-tv-lineup-2025`

###### Alternating current (`electricity_mv`)

Only for actual CN grid-average customer supply at 1–35 kV. Record this instead of low-voltage consumption for the same metered supply; include downstream on-site transformer losses within that measured boundary.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect actual attributable quantity per declared reference flow under cp_energy; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `cpc-tv-lineup-2025`

###### Alternating-current electricity supplied at the site meter (`electricity_other`)

Use only for actual supply outside the two CN grid-average voltage cases. State the actual geography, voltage and supply route and obtain a matching upstream dataset; this unresolved identity must not be replaced with either CN identity without evidence.

- Selected flow: Alternating-current electricity supplied at the site meter
- Flow property / unit: Energy / MJ
- Amount rule: Collect actual attributable quantity per declared reference flow under cp_energy; no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `cpc-tv-lineup-2025`

###### Broadcast playout server (`server_share`)

Only for capital-equipment inclusion declared by the study. One item is the actual complete specified server configuration. Attribute its production dataset using the evidenced whole installed-service or compatible cumulative-service denominator and persistent manufacture-share ledger under allocation_equipment. An observation period distributes only its already justified manufacture fraction; it does not reset the complete server production burden. Unknown service denominator or ledger coverage requires review and prevents a final attributed quantity; no default lifetime. Split monitors, storage arrays and replacement parts as separate configuration-specific exchanges when present.

- Selected flow: Broadcast playout server
- Flow property / unit: Number of items / item
- Amount rule: Actual server count multiplied by the evidenced dimensionless manufacture share attributable to this declared reference flow under allocation_equipment and cp_equipment; unknown share remains under review, with no default quantity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_equipment`
- Sources: `cpc-tv-lineup-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_resource | Prefer separate metering. Attribute shared workstations, servers, storage, monitoring and facility electricity using measured job consumption or log-verified resource occupancy; retain total energy, all occupants, allocation denominator, idle/redundancy treatment and reconciliation. GB is not kWh; do not allocate by assumed price or audience. |  |
| allocation_content | Rights are not physical production quantities. Under cp_content disclose separate original-production datasets, versions and shares attributable under the actual use/reuse plan; an unsupported reuse denominator remains an upstream gap and sensitivity, not a full original-production charge to every repeat delivery. | cpc-tv-lineup-2025 |
| allocation_versions | Include main-version, rework and actual redundant-handoff resources. Multiple channels/languages/configurations use explainable actual resource attribution. Do not count incomplete line-ups as complete output. |  |
| allocation_equipment | Under cp_equipment retain one same-asset manufacture boundary and persistent ledger across every project, period and beneficiary. The share uses actual attributable service activity divided by an evidenced whole installed-service or compatible cumulative-service denominator, with matching activity units; a justified forecast requires sensitivity and later reconciliation. Cumulative assigned manufacture shares must not exceed one. Within an observation period distribute only the manufacture fraction already justified for that period, never the complete asset production burden anew. Unknown denominator, prior shares or ledger coverage requires review and prohibits a final attributed manufacture quantity or complete equipment-coverage claim. These are foreground-accounting controls, not a prescribed numeric life or classification factor. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_content | assembly | programme_original | asset ledger | asset id; version; source; original-production dataset; actual reuse plan; attributed share; rights scope | Reconcile ingest manifests, contracts and actual reuse logs; price is not quantity | item | per asset | same channel day and actual reuse horizon | source and receiving facility | per declared reference flow | complete asset/version manifest and denominator evidence |
| cp_services | quality_handoff | qc_service; handoff_service | supplier record | supplier; delivery definition; session; endpoint; configuration; energy coverage; acceptance | Reconcile contracts, supplier datasets and delivery logs with included boundary | item | per delivery | declared channel day | external QC and contribution link | per declared reference flow | reports and double-count boundary reconciliation |
| cp_energy | utility_support | electricity_lv; electricity_mv; electricity_other | meter record | meter; region; supply voltage; route; start/end readings; jobs and all occupants; idle; storage; cooling; redundancy; unit | Synchronize calibrated meters and job logs; reconcile shared attribution, site losses and supplier-included electricity | MJ | per job and meter interval | complete declared day, preparation and rework | actual workstations, servers and facility meters | per declared reference flow | meter calibration, bills and energy allocation totals |
| cp_equipment | utility_support | server_share | equipment record | persistent asset id; server configuration/count; upstream manufacture boundary; actual attributable service activity and units; evidenced whole installed-service or compatible cumulative-service denominator; all projects/periods/beneficiaries; prior shares; current dimensionless share; justified period manufacture fraction; cumulative assigned/remaining share; forecast sensitivity and later reconciliation | Reconcile the same-asset register and full usage/allocation ledger against the supported total service denominator; cap cumulative manufacture shares at one and period allocations at their previously justified fraction. Unknown denominator or ledger coverage requires review, not an assumed lifetime or reset | item; dimensionless share; actual service activity units | per asset and study period, with cumulative ledger updates | declared channel-day observation plus evidenced whole-service/cumulative-service horizon | capital equipment declared included; all beneficiary periods retained | per declared reference flow | asset identity/configuration, supported denominator, cumulative conservation and period-fraction evidence |
| cp_acceptance | quality_handoff | reference_product_lineup | acceptance record | channel; date; timezone; window; revision; assets; duration; format; sound tracks; captions; rights; gaps; rework; receiver | Reconcile final schedule, files/live feed, acceptance logs and current delivery specification; record completeness | item | per channel day | complete declared day and associated preparation | assembly facility to other-distributor handoff | per declared reference flow | receipt, picture/sound QC and complete-window reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| energy_conversion | electricity_lv; electricity_mv; electricity_other | Express attributable metered energy per declared reference flow; convert kWh to MJ using 3.6, preserve raw records and infer no other conversion from property names. | cp_energy | MJ per declared reference flow |  |
| count_complete | reference_product_lineup | One accepted complete channel day counts as 1 item; duplicate files of the same delivery do not increase reference output. | cp_acceptance | 1 item | cpc-tv-lineup-2025 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_configuration | all inventory rows | Cover all actual routes and required quality configuration; easy excerpts cannot represent the complete channel day. Current contract determines acceptance. | cp_acceptance; bbc-file-quality-2020 |
| quality_energy | electricity_lv; electricity_mv; electricity_other | Use actual contemporaneous geography and supply voltage; disclose shared attribution, unmeasured scope and supplier-included loads. | cp_energy |
| quality_upstream | programme_original; server_share | Disclose original/equipment production coverage and reuse/service-horizon evidence; uncovered is not zero. | cp_content; cp_equipment |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_reference | Reference name matches output row; output is 1 item complete channel day; absent asset manifest, timezone/window, revision, rights or acceptance makes the definition incomplete. | cpc-tv-lineup-2025 |
| validate_inventory | Each row is one exchange; choose actual supply rows without duplication; upstream emissions cannot be direct elementary flows; missing identity or measurement cannot be treated as data. |  |
| validate_boundary | Reconcile asset production, outsourced services, equipment and transfer dataset boundaries and attribution totals; foreground handoff results do not establish full lifecycle coverage or methodology approval. |  |
| validate_equipment | For server_share verify the same configuration, supported whole-service denominator and persistent ledger across all beneficiaries/periods; cumulative manufacture shares must not exceed one and within-period allocations must not exceed the justified period fraction. Reject manufacture reset at each day/project/period. Unknown denominator or prior-share coverage requires review and prevents final equipment attribution and complete equipment-coverage claims. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground channel-day assembly to accepted other-distributor handoff dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Input to configuration/window-matched downstream distribution models; assembly-route comparisons within disclosed boundary |
| excluded_use | Automatic representation of individual originals, broadcast transmission, viewer use, entire lifecycle or licence economic value |
| required_metadata | channel, day, window/timezone, revision, route, picture/audio configuration, rights, acceptance, supply, original/equipment boundary |
| required_quality_disclosure | meter coverage, shared attribution, reuse denominator, missing upstream, unresolved identities, historical technical-evidence limitations |
| update_trigger | configuration, route, supplier, schedule window, supply or actual resource-consumption change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc-tv-lineup-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes (30 June 2025), p. 444. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category and boundary between originals, daily assemblies and broadcasting/distribution; no quantitative factors |
| bbc-file-quality-2020 | standard | BBC, Technical Specification for the Delivery of Television Programmes as AS-11 Files, BBC File v5.1.0 (2020), p. 22, §§3.3–3.5. https://downloads.bbc.co.uk/scotland/commissioning/TechnicalDeliveryStandardsBBCFile.pdf | Historical AS-11 file QC and acceptance example only; not current universal criteria or channel-day energy. Dataset production uses the actual current delivery agreement. |
