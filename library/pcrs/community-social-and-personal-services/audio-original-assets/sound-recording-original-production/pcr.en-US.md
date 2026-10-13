---
pcr_id: pcr.community-social-and-personal-services.audio-original-assets.sound-recording-original-production
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Sound recording original production

## 1. Scope and Applicability

Production of original recordings of sounds, words and music in digital or analogue form, from a defined project and existing inputs through acceptance and initial delivery of the complete identified recorded asset. Cover studio, location, speech, musical and environmental-sound recording, including actual editing, mixing, synthesis or mastering when part of the agreed deliverable. Declare whether the original is raw recorded material, an approved mix or a mastered recording; the complete original may be a defined set, not just one file. Neither a universal mastering stage nor a particular sample rate is imposed. [Source: `un-cpc-sound-originals`]

Exclude a live performance without a recording, a script alone, mere recording labour without an original asset as output, physical-media mass replication, subsequent downloads/streaming, broadcast transmission, standalone software/data assets and rights transactions without production. An original recording commissioned for radio may also be a radio original: use the same production inventory once for the identical asset, with transparent shared/component boundaries. Radio editorial assembly beyond the source recording is additional work; classification or whole-IP sale does not create another production event. [Source: `un-cpc-radio-originals`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.community-social-and-personal-services.audio-original-assets.sound-recording-original-production |
| classification_refs | CPC 3.0 96113 |
| covered_products | Identified original sound, speech and music recordings in digital or analogue form; all actually used production routes |
| excluded_products | Unrecorded script/live event; replication/download/broadcast operation; service labour alone; rights resale alone |
| representative_product | Accepted complete digital recorded-sound original with declared production stage, version and component set |
| production_route | Project preparation → actual capture or recorded-sound creation → actual editing/mixing/mastering as applicable → verify complete asset and initial delivery |
| market_state | Reusable original recording held or transferred with documented rights and technical acceptance, without inferred legal approval |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Create and initially deliver one complete identified recorded-sound original |
| How much | One accepted original with exact duration, production stage, channels and component hierarchy declared |
| How well | Actual commissioning specification and verified completeness, playable original embodiment, provenance and permitted reuse; no invented quality grade |
| How long or cycle | Complete creation cycle including retries and acceptance delivery; future reuse period disclosed without assumed asset lifetime |
| reference_flow_link | `accepted_original` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete sound recording original |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | original/project ID; version; title and sound/speech/music class; raw/mixed/mastered stage; complete take/song/album/library scope and component hierarchy; exact duration; digital/analogue route; encoding/sample rate/bit depth/channels or analogue tape format/speed/tracks; native versus converted format; actual acceptance specification/result/date; initial delivery and backup scope/cutoff; provenance; permitted reuse/rights; creation sites/period; owned/provider coverage; electricity region/voltage |

item is the singular-count alias of public Item(s), and Chinese 件 is the same unit. Declare all qualifiers in the data package. Rights, revenue, listener counts, bytes and carrier mass do not replace the original count. A set's components are identified so that the set and each component are not counted as independent full outputs simultaneously.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `original_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count complete accepted originals with cp_acceptance; internal takes, replicas and subsequent uses do not increase output. |
| `electricity_unit` | prep_electricity; capture_electricity; finish_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the verified public energy property; measured kWh × 3.6 gives MJ without changing the reference denominator. |
| `carrier_unit` | blank_tape; discarded_tape | Mass | kg | Collect physical tape separately through cp_carrier; length requires actual supplier linear mass or traceable weighing, not recorded duration. |
| `service_unit` | recording_service; mastering_service; hosted_storage | Time | h | Measure the specified provider activity and reconcile its inventory; session or capacity-time alone is not energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Defined recording project with existing source inputs and installed facilities; neither inputs nor facilities are assumed burden-free |
| starting_condition_role | foreground_start |
| product_classification_scope | Recorded-sound original creation and initial acceptance delivery; classification does not establish another original identity |
| recursive_input_rule | Versioned pre-existing recordings enter with declared upstream production shares; internal capture is foreground; parent and component shares must reconcile |
| upstream_dataset_requirement | Verified electricity, carrier, source-original, service, travel and equipment-production inventories; disclose omissions |
| disclosure | Stage/component hierarchy; actual operations/sites/time; owner/provider split; facility support; backup/delivery cutoff; downstream exclusions; upstream gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_creation` | Include actual preparation, recording/creation, retries, processing, technical checks, pre-acceptance storage and initial agreed delivery. Select operations from the real route; not all recordings require a mixed or mastered version. | un-cpc-sound-originals |
| `boundary_stage` | Declare the accepted stage and supporting components. For music, tracking, approved mix and mastered mix are distinct handoffs; carry prior burdens forward once rather than repeatedly treating them as new independent creations. | academy-delivery-2025 |
| `boundary_downstream` | Record actual acceptance and completion of the first agreed delivery separately; creation ends only when both are complete. Retain attributable storage, support, services and equipment activity between those endpoints. Separate ongoing preservation after that boundary, later media replication, downloads, streaming, transmission and listening. Initial delivery network activity, physical carriers and shipping actually used must be recorded; no default network-energy coefficient. |  |
| `boundary_actual` | Screen actual facility utilities, fuels, releases, consumables, equipment, travel and wastes. Add one specific row for each present exchange omitted here; no assumed generator/refrigerant emissions. Electricity supplier emissions are upstream. Missing upstream inventories prevent a complete cradle-to-gate claim. |  |

## 6. Process Inventory Structure

These cards describe common individual exchanges, conditional where stated. No elementary release is presumed from electrical recording. An actual release needs measured species, fossil/biogenic source, receiving compartment and a separately verified elementary identity; retain the screen even when none occurs. Record real additional equipment, physical delivery drives, packaging and routes as separate exchanges in the dataset; the example cards are not a zero-burden exemption.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare | Define and prepare recording project | required | Actual project operations; row conditions apply | foreground_production | per declared reference flow |
| capture | Capture or create recorded sounds | required | Actual digital/analogue route; existing component provenance retained | foreground_production | per declared reference flow |
| finish | Process, verify and initially deliver complete original | required | Actual processing only; mastering conditional on accepted stage | foreground_production | per declared reference flow |

### Process: Define and prepare recording project (`prepare`)

#### Inputs

##### Product flows

###### Alternating current (`prep_electricity`)

Meter attributable preparation, audition and project-support electricity. This UUID applies only to CN grid-average user supply below 1 kV. Other supply needs a specific verified flow and the same measured accounting.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

### Process: Capture or create recorded sounds (`capture`)

#### Inputs

##### Product flows

###### Alternating current (`capture_electricity`)

Meter recording, monitoring, recorder charging and actual studio ventilation/support. Apply the same CN below-1-kV condition; exclude provider-covered energy to avoid duplication.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Unrecorded analogue magnetic audio tape (`blank_tape`)

Conditional on actual analogue capture or mix print. Identify tape grade, backing, coating, width and length from supplier records; weigh issued/returned tape. This is the physical carrier, not the intellectual original; no assumed tape formulation.

- Selected flow: Unrecorded analogue magnetic audio tape
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_carrier.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carrier`
- Sources:

###### Condenser microphone (`microphone_share`)

Conditional on actual use of an owned condenser microphone; identify model and manufacturing dataset. Attribute supported production share by recorded utilization. Other microphone types require separate rows; service-included devices are not counted twice.

- Selected flow: Condenser microphone
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_equipment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_equipment`
- Sources:

###### Configured audio recorder (`recorder_share`)

Conditional on a separate owned recording machine. Declare digital/analogue model, channels, recording medium and configuration. Its manufacturing share is based on actual utilization, not its nameplate power or an invented lifetime.

- Selected flow: Configured audio recorder
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_equipment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_equipment`
- Sources:

###### Location sound recording session service (`recording_service`)

Conditional on outsourced capture. Specify session, crew, devices, travel and deliverable; obtain supplier inventory and actual session hours. If the provider delivers a pre-existing original instead, use source_original, not both for the same burden.

- Selected flow: Location sound recording session service
- Flow property / unit: Time / h
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_service.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources:

###### Existing identified sound recording original (`source_original`)

Conditional on an externally produced existing recording used in the new original. Declare source version, permitted reuse and consumed production share. Newly captured internal takes remain foreground operations, not duplicate upstream inputs; licence payments are metadata.

- Selected flow: Existing identified sound recording original
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Passenger transport by petrol passenger car (`location_travel`)

Conditional on actual production travel by this route. Retain trip distance, passengers and project share; do not double count provider travel. Another mode requires its own specific exchange.

- Selected flow: Passenger transport by petrol passenger car
- Flow property / unit: Passenger transport / person*km
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_travel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_travel`
- Sources:

### Process: Process, verify and initially deliver complete original (`finish`)

#### Inputs

##### Product flows

###### Alternating current (`finish_electricity`)

Meter editing, mixing, actual mastering, verification, pre-acceptance backups and operator-side delivery. Apply the same CN below-1-kV condition. Record actual processing hours and support; no conversion from track duration or GB to electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Configured audio production computer workstation (`workstation_share`)

Attribute workstation manufacturing used across all project stages once here, with actual configuration and supported utilization denominator. DAW processing and synthesis are logged as actual operations; no default workstation or service life.

- Selected flow: Configured audio production computer workstation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_equipment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_equipment`
- Sources:

###### Sound recording mastering session service (`mastering_service`)

Conditional on outsourced mastering actually required for the declared accepted stage. Fix deliverable format, channels, version and provider scope; collect real session hours and provider inventory. A raw-recording original does not require invented mastering.

- Selected flow: Sound recording mastering session service
- Flow property / unit: Time / h
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_service.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources:

###### Managed audio-project storage service (`hosted_storage`)

Conditional on contracted project storage through acceptance and initial delivery. Fix capacity, region, redundancy and retention, reconcile capacity-time with supplier inventory and its actual service-hours interface. Post-acceptance archival operation is separate; GB is not kWh.

- Selected flow: Managed audio-project storage service
- Flow property / unit: Time / h
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_service.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete sound recording original (`accepted_original`)

One complete accepted original at the declared stage and version, including its defined components and initial delivery package. A take, song, album or sound library counts as one only when it is the explicitly complete accepted asset. Files, channels, stems and safety copies do not increase the count.

- Selected flow: Accepted complete sound recording original
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc-sound-originals`

##### Waste flows

###### Discarded analogue magnetic audio tape (`discarded_tape`)

Conditional on actual discarded tape from production; weigh this segregated stream and retain composition and treatment evidence. Recorded tape delivered as original embodiment is not waste. Do not claim automatic recycling credits.

- Selected flow: Discarded analogue magnetic audio tape
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_carrier.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carrier`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_shared` | Subdivide jobs first. Attribute shared meters using actual measured device power/occupancy and task logs; explain standby, ventilation and support shares and reconcile all assignments. Supplier storage/network inventory uses actual capacity-time/transfers and service scope, not price or universal kWh/GB. |  |
| `allocate_original` | Prefer subdivision of jointly produced originals; otherwise justify physical shared-work fractions and sensitivity. Failed takes/revisions belong to the accepted asset. Keep component/set, raw/mix/master and radio/sound overlap burdens traceable and counted once; rights or royalty sales are not co-products. |  |
| `allocate_equipment` | Attribute real equipment manufacturing with a persistent asset ledger across all projects and periods. Measured project use is only the numerator; the denominator must cover supported actual lifetime/cumulative service activity or a justified expected lifetime, with sensitivity and subsequent reconciliation. Cumulative allocated manufacturing fractions across every project and period must not exceed 1, and must never reset at a new project or observation window. An observed-period method distributes only the already attributed manufacturing fraction of that period, not a whole asset inventory in every period. Unknown lifetime, denominator or period share requires explicit review; no default life or mass. Avoid service/rental/equipment duplication and automatic waste credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | finish | accepted_original | Original acceptance ledger | ID; version; stage; hierarchy; duration; encoding/analogue format; acceptance result; delivery; rights | Inspect complete original, components, playback and actual agreed technical/rights records; reconcile replicas and earlier stage IDs | item | every accepted original | full creation and rework to initial delivery | all operator/provider sites | per declared reference flow | original checksum or analogue carrier ID; signed acceptance; component ledger |
| cp_energy | prepare; capture; finish | electricity | Meter and job records | meter; timestamps; kWh; task; site; voltage; power profile; standby/support; provider coverage | Submeter jobs or reconcile interval meters with measured device power and occupancy logs; convert measured kWh to MJ | MJ | each session and processing/delivery interval | all project work including failed takes and backup | all included sites | per declared reference flow | calibrated meters; job logs; assigned-total reconciliation |
| cp_carrier | capture; finish | blank_tape; discarded_tape | Carrier balance | grade; backing/coating; width; length; kg issued/returned/retained/discarded; treatment | Weigh actual tape or use verified grade-specific measured linear mass; reconcile embodied delivered tape separately from waste | kg | each issue/return/discard | full declared analogue work | operator and relevant providers | per declared reference flow | calibrated weighing; supplier specifications; stock/treatment ledger |
| cp_equipment | capture; finish | microphone_share; recorder_share; workstation_share | Asset utilization | asset ID; model; configuration; production inventory; actual task hours; supported lifetime/cumulative service activity; justified expected lifetime; period share; prior cumulative fractions; assigned fraction; remaining fraction; sensitivity; subsequent reconciliation; actual acceptance timestamp; actual first-delivery completion timestamp; attributable activity between those endpoints | Link real assets to manufacturing inventories and task logs; verify lifetime/service denominator and persistent cross-project/cross-period ledger. Distribute only an already attributed period share in observation-only accounting; reconcile cumulative fractions at most 1. Unknown denominator/share requires review, no default lifespan | item | each project and asset update | Full project activity through both actual acceptance and first agreed delivery completion, ending at the later recorded endpoint; do not assume coincidence | owned equipment at included sites | per declared reference flow | persistent asset ledger; lifetime/period-share evidence; cumulative share conservation; sensitivity; subsequent reconciliation |
| cp_service | capture; finish | recording_service; mastering_service; hosted_storage | Provider activity ledger | provider; session/service h; capacity; region; redundancy; delivery; energy/equipment/travel coverage; actual acceptance timestamp; actual first-delivery completion timestamp; attributable activity between those endpoints | Obtain session/storage activity and supplier inventory; reconcile capacity-time and service-hour definition and avoid owned/provider overlap | h | each supplier delivery/interval | Full project activity through both actual acceptance and first agreed delivery completion, ending at the later recorded endpoint; do not assume coincidence | declared providers/sites | per declared reference flow | supplier environmental inventory; activity ledger; scope reconciliation |
| cp_asset | capture | source_original | Source-asset provenance | source ID/version; stage; components; rights; upstream burden; share | Verify original provenance, allowed reuse and production inventory; document attributable share separately from royalties | item | each source component | actual source production represented by upstream inventory | identified source producers | per declared reference flow | upstream dataset; rights record; parent/component reconciliation |
| cp_travel | capture | location_travel | Journey records | car route; petrol; km; passengers; purpose; provider coverage | Read actual journeys and project occupancy share; reconcile passenger-distance and exclude duplicate supplier transport | person*km | each journey | full actual production travel | production locations | per declared reference flow | trip logs; route and passenger records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_conversion` | prep_electricity; capture_electricity; finish_electricity | MJ = attributable measured kWh × 3.6; preserve the original denominator. | cp_energy; measured kWh | MJ per declared reference flow |  |
| `original_normalization` | all inventory rows | For homogeneous originals of identical declared scope divide each attributable total by actual accepted count. Assign unlike assets by project first and report separately. Reference output is exactly 1 item. | cp_acceptance; attributable totals | exchange amount per declared reference flow |  |
| `provider_reconciliation` | recording_service; mastering_service; hosted_storage | Reconcile actual specified activity with provider inventory; duration/capacity alone cannot determine energy. | cp_service; provider inventory | service amount per declared reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_original` | accepted_original | Fix stage, complete hierarchy, version and actual acceptance specification. For music, apply delivery guidance only if adopted; speech/environmental originals use their actual specification. | cp_acceptance; academy-delivery-2025 |
| `quality_format` | accepted_original | Record native and delivered resolution/format, channel layout and metadata provenance; converted files do not imply newly created content or better source resolution. LOC preferences are preservation guidance, not universal commissioning requirements. | cp_acceptance; loc-audio-formats |
| `quality_activity` | all inventory rows | Reconcile complete operations, material stocks, support, equipment and suppliers; disclose missing measurements/upstream inventories with uncertainty, never as zero. Verify equipment cumulative shares across all projects/periods, lifetime/service denominator and subsequent updates; unsubstantiated denominator or period share remains under review. | cp_energy; cp_carrier; cp_equipment; cp_service |
| `quality_representative` | accepted_original | Declare genre, route, duration, stage, component reuse and population represented. One count cannot justify comparison between unlike originals. | cp_acceptance |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_reference` | Require all qualifiers, one complete accepted recorded asset and 1 item linked to accepted_original; reject unrecorded scripts, uses, fees and replicas as original output. | un-cpc-sound-originals |
| `validate_overlap` | Verify stage/set/component and radio/sound relationships. A reused existing original has a traced upstream share; common production cannot be counted anew for another classification or rights sale. | un-cpc-radio-originals |
| `validate_coverage` | Check each actual route, retry, backup, initial delivery and support activity; screen releases and retain atomic additions. Reconcile operator/provider attribution and disclose missing identities and upstream burdens before any complete lifecycle claim. Reject resetting a whole asset manufacturing inventory per project/period or cumulative asset shares above 1; require review for unsupported lifetime, denominator or period share. |  |
| `validate_units` | Preserve original count, physical carrier mass, electrical MJ, provider hours and passenger-distance. Inspect public identity route/property/unit, not just names; never map GB directly to kWh or rewrite public properties. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | original_asset_production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Traced recorded-original input to declared radio, audiovisual, replication, download or listening scenarios with explicit reuse allocation |
| excluded_use | Complete listening/broadcast/download footprint without downstream processes; count-only comparison; legal or methodology approval |
| required_metadata | All reference qualifiers; stage/set/component lineage; actual route; sites/period; operator/provider/upstream coverage; dataset versions; actual allocation basis |
| required_quality_disclosure | Measurement and identity gaps; upstream completeness; equipment denominator uncertainty; excluded operations; allocation sensitivity and source limits |
| update_trigger | New original/stage/version/scope; changed recording/processing/delivery route, equipment, supply or acceptance conditions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-sound-originals | official_guidance | UNSD CPC 3.0 subclass 96113 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/96113 | Sound/word/music digital or analogue original scope; no environmental factors |
| un-cpc-radio-originals | official_guidance | UNSD CPC 3.0 subclass 84611 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84611 | Recorded-radio overlap; no classification-based duplication |
| academy-delivery-2025 | handbook | Recording Academy P&E Wing, Delivery Recommendations for Recorded Music Projects, 2025, printed pp.4–8 (PDF pp.6–10). https://naras.a.bigcontent.io/v1/static/PE_Guidebook_241016 | Music master/component/stage and analogue/digital delivery distinctions, recommendations only where adopted; no default energy or archive life |
| loc-audio-formats | official_guidance | Library of Congress Recommended Formats Statement, IV Audio Works, ii A/C, current web statement. https://www.loc.gov/preservation/resources/rfs/audio.html | Media-independent native/delivered format and metadata descriptors; preservation preferences only |
