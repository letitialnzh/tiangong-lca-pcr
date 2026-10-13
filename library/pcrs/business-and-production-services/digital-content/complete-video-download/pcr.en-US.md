---
pcr_id: pcr.business-and-production-services.digital-content.complete-video-download
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Complete film and video download delivery


## 1. Scope and Applicability

This PCR covers films and other recorded video delivered as electronic files that can be downloaded and stored locally. It covers complete movies, episodes and other bounded recordings, without a default genre, duration, codec, resolution, file size or commercial model. Purchase, rental and subscription downloads qualify only when the actual local-copy and permitted-use conditions are defined. Streams, live broadcast, audio-only downloads, software, physical video media, original creation and bare network-access services are separate outputs. [un-cpc3-video; apple-video-download]

The material method need is rendition-specific shared preparation/storage attribution, complete local-delivery acceptance and separation of original-creation reuse from repeated transfers. Original production is an upstream layer with an explicit reuse share, not repeated foreground filming for each download. Video quality and soundtrack/subtitle completeness define comparable products; one byte, user, licence or sale is not the functional unit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.digital-content.complete-video-download |
| classification_refs | CPC 3.0: 84331 Films and other video downloads |
| covered_products | Complete locally stored downloadable film/video recordings with declared rendition and access conditions |
| excluded_products | Streaming; broadcast/channel originals; original film-making; audio/software downloads; physical media; generic telecom services |
| representative_product | One complete identified movie rendition delivered to an authorized local device; an episode or other recording uses its own declared complete content |
| production_route | Receive original master; prepare/validate downloadable version; store/cache; transfer; locally store and verify. Owned and outsourced stages use declared interfaces |
| market_state | One accepted electronic video download with declared rights, expiry and compatibility; neither transfer of the original IP asset nor perpetual ownership is presumed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver one specified complete film/video recording as a locally stored downloadable copy |
| How much | One complete accepted delivery; 1 item |
| How well | Declared edition, duration, video resolution/frame rate/codec, audio tracks, subtitle tracks, byte manifest, integrity result and permitted playback compatibility; actual producer criteria |
| How long or cycle | One completed transfer and local-receipt cycle; actual preparation/storage allocation period and access/expiry conditions are separate qualifiers. Later playback and post-receipt retention are outside this gate |
| reference_flow_link | reference_download |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete verified video download |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | title and original ID; edition/rendition ID; complete content manifest; duration; codec/container; resolution/frame rate; audio/subtitle tracks; bytes and integrity evidence; authorized device/compatibility; rights/expiry and territorial conditions; completed delivery ID; origin/cache/network/local-device boundary; preparation/storage period; reuse/allocation ledger; failed/retry work; sites and supply conditions |

Display unit item means exactly the public unit Item(s); Chinese 件 is the same count unit. Segments are reconciled to the one complete manifest. Required qualifiers must appear in dataset metadata and acceptance records. Count does not establish equivalent quality, convert to kg, or confer legal approval.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count only complete verified local deliveries with cp_delivery; partial transfer attempts remain inputs, not outputs. |
| energy_unit | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve the public Net calorific value property and Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` unit group; meter kWh, never infer it from bytes, price or media duration. |
| activity_metadata | collection activity | separate count/capacity/time records | item; byte; s | Record actual byte sizes, reserved time and measured resource shares separately. One downloaded item requires its complete declared rendition, not a fixed byte-to-count factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of the identified existing master through completion of the specified locally stored copy |
| starting_condition_role | Download-production/delivery foreground gate with upstream original-creation linkage |
| product_classification_scope | Downloadable recorded video content; no genre-specific route assumption |
| recursive_input_rule | Record a reused downloadable rendition as one identified upstream version with its conserved burden share. Stop at its upstream dataset; do not multiply the original by requests, copies or licences |
| upstream_dataset_requirement | Original creation, matched electricity, actual equipment production/end-of-life and provider storage/transfer inventories with explicit interfaces; unknowns remain incomplete |
| disclosure | Original reuse and rendering period; retention/cache/replicas; origin and receiving device; network segments; provider cooling/asset coverage; failures; excluded playback/post-receipt storage; missing upstream layers |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_delivery | all stages | Include actual master ingestion, rendition preparation/acceptance, packaging, object retention/cache, authorization, transfer, local writing and integrity checks up to accepted receipt. Include failed work, partial transfers and retries. Later playback, long-term local retention and deletion belong to a separately stated use/end-of-life scenario. | un-cpc3-video; apple-video-download |
| boundary_original | source_original | Separate original filming/editing and reusable assets from download operations. A linked original inventory must disclose its creation scope and allocation across actual exploitation routes. This gate alone is not cradle-to-gate; omitted original creation may not be labelled zero. | un-cpc3-video |
| boundary_infrastructure | supporting infrastructure | Map origin, cache, backbone/access, router and receiving device interfaces. Include attributable reserved/idle capacity, cooling, backup, failover and monitoring in owned measurements or specified supplier inventories. If a site uses water, fuel, a refrigerant, a consumable or produces waste/direct releases, add each actually identified atomic exchange with measured amount and medium; do not infer absence from a digital output or invent manufacturing emissions. | gsf-sci110 |
| boundary_provider | owned/provider stages | Purchased jobs must identify accepted technical delivery and embedded scope. Electricity/equipment already embedded in a provider inventory may not be added as owned inputs. Missing provider electricity, cooling, network or device production is a data gap, not a reason to omit the actual route. | gsf-sci110 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preparation | Version preparation and acceptance | required | All deliveries; owned or specified outsourced interface; exact transformations are route-specific | download production and delivery | per declared reference flow |
| storage | Download-object storage | required | All deliveries; owned or specified outsourced interface; exact transformations are route-specific | download production and delivery | per declared reference flow |
| network | Network transfer | required | All deliveries; owned or specified outsourced interface; exact transformations are route-specific | download production and delivery | per declared reference flow |
| receipt | Local receipt and integrity verification | required | All deliveries; owned or specified outsourced interface; exact transformations are route-specific | download production and delivery | per declared reference flow |
| assets | Owned supporting equipment | conditional | Owned devices outside provider-inclusive inventories | download production and delivery | per declared reference flow |

Each stage uses disjoint energy/provider pools. Conditional rows are instantiated only for the actual route; absence requires evidence. No universal elementary emission is prescribed for purchased-electricity digital operations. Upstream generation emissions stay in the electricity inventory. Empty waste/elementary subsections do not establish site completeness.

### Process: Version preparation and acceptance (`preparation`)

#### Inputs

##### Product flows

###### Identified film or video original master (`source_original`)

An identified source master is an upstream input, with content/rights provenance and a conserved share of its creation inventory. Receiving a master is distinct from filming, editing or producing that original. A zero licence price never means zero upstream burden.

- Selected flow: Identified film or video original master
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Record the allocated fraction of one identified original attributable to the declared reference flow using cp_source; retain the full cross-channel reuse ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Sources: `un-cpc3-video`

###### Alternating current (`preparation_electricity_cn`)

Only actual CN grid-average user supply below 1 kV, outside provider-inclusive inventories. Attribute stage metering, reserved idle capacity and actual supporting cooling; no default data-centre location, PUE or energy per byte.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Attributable metered kWh for the declared reference flow, recorded under cp_energy; include failed attempts and retries.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### Purchased alternating current at the declared supply point (`preparation_electricity_other`)

Applies only to actual supply outside the CN below-1-kV identity above. Declare region, voltage, supplier and period; resolve a matching identity before a complete dataset is claimed. These two electricity rows are mutually exclusive for the same supply segment.

- Selected flow: Purchased alternating current at the declared supply point
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Attributable metered kWh for the declared reference flow under cp_energy, with disjoint supply segments.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### Version-specific video encoding job (`encoding_job`)

Conditional purchased job, only where the actual provider creates the declared downloadable rendition. Acceptance, packaging, checksum preparation and permitted decryption requirements are captured; transcoding, DRM and subtitle processing are not universal compulsory steps. Provider inventory replaces matching local energy/equipment.

- Selected flow: Version-specific video encoding job
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Allocated accepted provider job share for the declared reference flow using cp_provider; record reruns and version reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_provider`
- Sources: `gsf-sci110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Download-object storage (`storage`)

#### Inputs

##### Product flows

###### Alternating current (`storage_electricity_cn`)

Only actual CN grid-average user supply below 1 kV, outside provider-inclusive inventories. Attribute stage metering, reserved idle capacity and actual supporting cooling; no default data-centre location, PUE or energy per byte.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Attributable metered kWh for the declared reference flow, recorded under cp_energy; include failed attempts and retries.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### Purchased alternating current at the declared supply point (`storage_electricity_other`)

Applies only to actual supply outside the CN below-1-kV identity above. Declare region, voltage, supplier and period; resolve a matching identity before a complete dataset is claimed. These two electricity rows are mutually exclusive for the same supply segment.

- Selected flow: Purchased alternating current at the declared supply point
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Attributable metered kWh for the declared reference flow under cp_energy, with disjoint supply segments.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### Version-specific object-storage reservation (`storage_reservation`)

Conditional purchased reservation with one defined object set, region, replicas, backup, retention period and contracted capacity. It is a specified technosphere delivery, not bytes of electricity. Provider inventory must identify whether cooling and hardware are included.

- Selected flow: Version-specific object-storage reservation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Allocated fraction of one contracted reservation attributable to the declared reference flow using cp_provider; preserve actual byte-hours as supporting activity metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_provider`
- Sources: `gsf-sci110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Network transfer (`network`)

#### Inputs

##### Product flows

###### Alternating current (`network_electricity_cn`)

Only actual CN grid-average user supply below 1 kV, outside provider-inclusive inventories. Attribute stage metering, reserved idle capacity and actual supporting cooling; no default data-centre location, PUE or energy per byte.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Attributable metered kWh for the declared reference flow, recorded under cp_energy; include failed attempts and retries.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### Purchased alternating current at the declared supply point (`network_electricity_other`)

Applies only to actual supply outside the CN below-1-kV identity above. Declare region, voltage, supplier and period; resolve a matching identity before a complete dataset is claimed. These two electricity rows are mutually exclusive for the same supply segment.

- Selected flow: Purchased alternating current at the declared supply point
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Attributable metered kWh for the declared reference flow under cp_energy, with disjoint supply segments.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### Specified-route video file transfer job (`network_transfer`)

Purchased network/CDN transfer job from the declared origin or cache to the declared recipient. Keep backbone, access network and customer router scopes explicit. Count one defined delivery job; preserve actual bytes, cache hits, transport retries and failed work separately.

- Selected flow: Specified-route video file transfer job
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable accepted transfer-job share for the declared reference flow under cp_provider; do not convert GB directly to kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_provider`
- Sources: `gsf-sci110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Local receipt and integrity verification (`receipt`)

#### Inputs

##### Product flows

###### Alternating current (`receipt_electricity_cn`)

Only actual CN grid-average user supply below 1 kV, outside provider-inclusive inventories. Attribute stage metering, reserved idle capacity and actual supporting cooling; no default data-centre location, PUE or energy per byte.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Attributable metered kWh for the declared reference flow, recorded under cp_energy; include failed attempts and retries.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

###### Purchased alternating current at the declared supply point (`receipt_electricity_other`)

Applies only to actual supply outside the CN below-1-kV identity above. Declare region, voltage, supplier and period; resolve a matching identity before a complete dataset is claimed. These two electricity rows are mutually exclusive for the same supply segment.

- Selected flow: Purchased alternating current at the declared supply point
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Attributable metered kWh for the declared reference flow under cp_energy, with disjoint supply segments.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete verified video download (`reference_download`)

One complete declared video object/package stored on the local device and verified against acceptance evidence; segments, partial files and extra copies within one package are not additional accepted outputs.

- Selected flow: Complete verified video download
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Collection protocol: `cp_delivery`
- Sources: `un-cpc3-video`; `apple-video-download`

##### Waste flows

##### Elementary flows

### Process: Owned supporting equipment (`assets`)

#### Inputs

##### Product flows

###### Configured video-delivery server (`server_hardware`)

Conditional attributable owned device fraction outside provider-inclusive inventories. Identify the actual device configuration; account for production and end-of-life upstream, using documented reserved time, resource share and actual expected installed life. No default lifetime or device mass is prescribed.

- Selected flow: Configured video-delivery server
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Record the attributable fraction of one identified device for the declared reference flow using cp_device.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_device`
- Sources: `gsf-sci110`

###### Configured network router (`router_hardware`)

Conditional attributable owned device fraction outside provider-inclusive inventories. Identify the actual device configuration; account for production and end-of-life upstream, using documented reserved time, resource share and actual expected installed life. No default lifetime or device mass is prescribed.

- Selected flow: Configured network router
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Record the attributable fraction of one identified device for the declared reference flow using cp_device.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_device`
- Sources: `gsf-sci110`

###### Configured download-receiving computer (`receiver_hardware`)

Conditional attributable owned device fraction outside provider-inclusive inventories. Identify the actual device configuration; account for production and end-of-life upstream, using documented reserved time, resource share and actual expected installed life. No default lifetime or device mass is prescribed.

- Selected flow: Configured download-receiving computer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Record the attributable fraction of one identified device for the declared reference flow using cp_device.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_device`
- Sources: `gsf-sci110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | energy and providers | Prefer job/stage subdivision and direct metering. For shared facilities use a documented causal allocation based on measured or reserved resources/time, validated against total meters. Retain unused/idle support shares and reconcile residuals. Bytes, duration, users or revenue alone are not measured electricity. | gsf-sci110 |
| allocation_reuse | original and prepared rendition | Maintain one conserved original/rendition ledger across downloads, streams, broadcast and other uses. Subdivide separable rendition work first. For a genuinely shared undivided workload, document the finite supported beneficiaries and shares; allocate the download-route pool across complete comparable deliveries, including failed work in the numerator. Prospective delivery counts need a labelled scenario, later reconciliation and sensitivity. No arbitrary default exploitation life or download count. | un-cpc3-video; gsf-sci110 |
| allocation_devices | owned devices | Use device-specific reserved-time fraction of expected installed life multiplied by the resource fraction, with actual configuration and upstream inventory. Evidence must support both fractions and life; revalidate replacement/retirement. Split unlike hardware configurations and preserve device-unit properties. | gsf-sci110 |
| allocation_outputs | multiple products and failures | Do not average unequal renditions without declaring a measured representative mix. Bundled episodes reconcile individual manifests and shared overhead; failed/aborted copies do not add accepted outputs. Revenue allocation requires separate justified sensitivity and never turns currency into product count. | un-cpc3-video |

For one rendition and allocation period, subdivide disjoint pools before normalization. Let N be the actual complete accepted delivery count, strictly greater than zero. Attributable metered electricity E, purchased job share J and device share H in that pool enter one delivery as E/N, J/N and H/N, preserving their respective kWh and item numerator units. Original inventory burden B enters only through the evidenced download-route share s, giving B × s/N per delivery; reconcile shares across all channels and remaining beneficiaries. Shared prepared-rendition work is allocated once in the same way. A separately metered individual delivery uses its own record without division by another pool’s N. Separate unlike renditions into pools or document the actual representative mix; never mix periods or repeat provider-inclusive activities.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | receipt | reference_download | acceptance log | title; version; complete byte/track manifest; duration; download ID; device; completion; hash/integrity; rights/expiry; failed/retry IDs | Match producer manifest and client completion/integrity evidence; verify compatibility/permitted playback without counting playback as delivery work | item | each delivery | actual delivery cycle and allocation period | origin/cache to identified local device | per declared reference flow | signed manifest; logs; rejected attempts; rights evidence |
| cp_source | preparation | source_original | source and reuse ledger | original ID/version; provenance; creation inventory; channel shares; beneficiaries; measured/prospective deliveries; revisions | Inspect source acceptance/provenance and scoped upstream inventory; reconcile all beneficiaries and conserve original/rendition burden once | item | each original/rendition and reconciliation | actual preparation/reuse period | declared origin and upstream creator | per declared reference flow | source manifests; allocation and missing-data ledger |
| cp_energy | preparation; storage; network; receipt | electricity | meter and job log | stage; region; voltage; meter start/end; kWh; reserved time/resources; cooling scope; retries; pool totals; delivery count | Calibrated submeter or integrated measured power trace; time-align jobs/storage/network/receipt; document causal shares and reconcile full supply meters including idle support | kWh | each job and storage interval | complete preparation/storage/delivery pool period | each owned supply point; provider interfaces excluded | per declared reference flow | calibration; meter coverage; share/residual balance; supply invoice |
| cp_provider | preparation; storage; network | purchased technical delivery | provider primary records | job/reservation ID; accepted scope; byte manifest; actual byte-hours; cache/replicas; network path; failures; included power/cooling/hardware; allocated job count | Read actual contract, acceptance and supplier activity inventory; keep one technical job/reservation identity with explicit included scope; reconcile provider and owned interfaces | item | each accepted job/reservation and reporting interval | matching allocation period | actual provider locations and delivery interfaces | per declared reference flow | contract; acceptance; activity records; boundary statement; gaps |
| cp_device | assets | device share | asset and reservation register | device ID/configuration; production/end-of-life inventory; reserved time; resource share; expected installed life; retirement; provider coverage | Inspect asset register and measured/reserved workload; substantiate device-life estimate and resource fractions; exclude already provider-accounted devices | item | each device and actual usage period | actual installed life and reserved interval | declared servers, routers and receiving computers | per declared reference flow | configuration; supplier LCI; life/share evidence; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_delivery | all inventory rows | Sum nonduplicated attributable exchange quantities for the one declared complete delivery after original/rendition/provider/device allocation; output is exactly 1 item. Keep numerator units and failed work, while reconciling allocated totals to the original meters and finite reuse pools. | cp_delivery; cp_source; cp_energy; cp_provider; cp_device | per declared reference flow | un-cpc3-video; gsf-sci110 |
| calculate_metrics | qualifiers | Reconcile segments/bytes/tracks to the complete rendition manifest and accepted local object. Byte/time records characterize storage/transfer workload, not a direct energy or quality conversion. | cp_delivery; cp_provider | accepted completeness and activity records | un-cpc3-video; apple-video-download |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_product | reference_download | Bind edition/rendition, duration, quality, sound/subtitle tracks, device, integrity and rights conditions. Do not compare incompatible content as equal counted items. | cp_delivery; apple-video-download |
| quality_period | all processes | Cover actual preparation and storage pools, transfer attempts and local receipt, matching sites/periods and regional supply. Missing telemetry remains explicit. | cp_energy; cp_provider |
| quality_allocation | all inputs | Disclose measured versus prospective counts, reserved versus used shares, expected device life, original exploitation boundaries, residuals and sensitivity. No universal energy/GB, retention, loss or lifetime value. | cp_source; cp_energy; cp_device |
| quality_identity | all inputs | Verify each actual flow reference property/unit, configuration, region and supplier scope; blank identities and missing upstream inventories remain gaps. | cp_provider; cp_device; supplier originals |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_download | Require the complete declared locally stored rendition and one accepted delivery record. Reject streamed-only sessions, segmented partials, original rights transfers and byte/user/revenue units substituted for the product. | un-cpc3-video; apple-video-download |
| validate_basis | all inventory rows | Require the same per declared reference flow denominator in both languages, linked protocols and preserved numerator units. Each stage pool and accepted-output count must reconcile. Reject kg only when used to replace the complete-video reference output or item denominator; evidenced native mass/kg inputs, wastes and direct emissions remain valid numerators per the same accepted item. Arbitrary bytes-to-energy conversions fail. | gsf-sci110 |
| validate_scope | all processes | Require origin, cache, network, local-receipt, owned/provider electricity/cooling/equipment and source-original scopes. A missing actual route, direct exchange or upstream dataset makes dataset coverage incomplete. Conditional absence requires evidence. | gsf-sci110; un-cpc3-video |
| validate_conservation | allocation | Reconcile reuse and shared-resource ledgers across all beneficiaries. Reject double-counted provider/owned power or hardware and the full original burden repeated per download. Unknown original shares cannot be silently zeroed. | gsf-sci110 |
| validate_claim | dataset | Report checks performed/skipped, coverage, identity gaps, allocation uncertainties and upstream exclusions. Candidate methodology and structural checks do not establish scientific approval, legal rights, complete lifecycle coverage or an SCI-conformant score. | un-cpc3-video; gsf-sci110 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground inventory for one complete video download with separately linked source and infrastructure layers |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Evidence-complete rendition/site/period-specific download input or comparison with equivalent complete delivery quality and declared upstream scope |
| excluded_use | Generic impact per GB/user/license; equal-quality assumption across unlike films/renditions; perpetual-rights or compliance claims; full cradle-to-gate claims with missing source/provider/device layers |
| required_metadata | All reference qualifiers, actual route/period, source/reuse ledger, job/provider interfaces, supply conditions, metering, complete delivery/failed work, hardware and upstream scope |
| required_quality_disclosure | Meter and count uncertainty; storage/cache/replica coverage; incomplete network/provider/source layers; unresolved identities; prospective reuse/device-life sensitivity |
| update_trigger | Changed rendition/quality/rights, file manifest, sites/supply, caching/storage period, network path, provider scopes, equipment, original allocation or measured delivery performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-video | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.441, 84331–84332; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Downloadable locally stored video versus streaming; classification only, no LCA quantity or coefficient |
| apple-video-download | handbook | Apple Support, Download and stream shows, movies, sports, and events from your Apple TV subscription and Apple TV channels, 118239; Download sections and Limits for downloads; https://support.apple.com/en-us/118239 | Real local-download route and device/expiry restrictions; provider-specific example only, no universal retention period or file size |
| gsf-sci110 | standard | Green Software Foundation, Software Carbon Intensity Specification 1.1.0; Energy, Embodied emissions and Software boundary; https://sci.greensoftware.foundation/ | Computing energy, supporting infrastructure and reserved-time/resource attribution principles only; no full video LCA approval or default coefficients |
