---
pcr_id: pcr.business-and-production-services.broadcast-content-originals.radio-programme-original-production
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Radio programme original production

## 1. Scope and Applicability

Creation of original radio content protectable as intellectual property and produced for over-the-air transmission is covered from a defined production brief and existing inputs through acceptance of the complete original. This includes news features, drama, documentary, music programmes, short-form originals and original scripted live-programme packages when they are complete identifiable assets. Recorded audio is representative; a live-script route declares script/cue embodiment and separates later performance and transmission. A source sound recording alone is not automatically the radio original. [Sources: `un-cpc-radio-originals`, `un-cpc-sound-originals`, `ebu-radio-production-2023`]

Exclude standalone sound-recording originals not commissioned as radio originals, television originals, transmission services, channel scheduling alone, licences alone, physical-media manufacture and consumer downloads. Original creation, copies, distribution and audience use are distinct activities; one item does not imply comparable duration or quality.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.broadcast-content-originals.radio-programme-original-production |
| classification_refs | CPC 3.0 84611 |
| covered_products | Complete protectable radio programme original assets intended for over-the-air transmission |
| excluded_products | Standalone source sound recordings; television originals; transmission; downloads; licences without production |
| representative_product | Accepted original recorded radio programme with fixed version and declared duration |
| production_route | Brief/script → create or acquire components → edit/mix or compile original script package → verify and accept |
| market_state | Identified reusable original held or transferred under declared rights; no statutory approval inferred |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Create one complete identified radio programme original |
| How much | One accepted original; exact duration, components and version declared |
| How well | Documented project completeness, editorial and technical acceptance specification; EBU recommendations only where actually adopted |
| How long or cycle | One creation cycle through acceptance including revisions and failed takes; future reuse period declared without assumed life |
| reference_flow_link | `radio_original` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Radio programme original |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | project/original ID; version; complete programme/series/segment scope; title/genre/language; intended over-the-air use; exact duration; audio or script embodiment; sample rate/bit depth/channels/format when audio; acceptance date/specification/results; component provenance; ownership/permitted reuse; creation period/sites; supply region/voltage |

item is the singular-count alias of public Item(s); Chinese 件 denotes the same count, not mass or bytes. Every dataset must declare all required qualifiers. Rights, revenue and audience count are not physical reference quantities.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `original_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count one complete accepted original using cp_acceptance; copies and airings do not increase output. |
| `electricity_unit` | prep_electricity; record_electricity; finish_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve public energy property; convert measured kWh to MJ with 1 kWh = 3.6 MJ. No bytes-to-energy conversion. |
| `service_unit` | recording_service; hosted_storage | Time | h | Hours refer to the specified provider service, not a universal energy coefficient or original duration; fix capacity, crew and coverage. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Defined brief, existing source inputs and installed facilities at project start; inputs are not assumed burden-free |
| starting_condition_role | foreground_start |
| product_classification_scope | Radio programme original creation; CPC is a locator, not the identity hierarchy |
| recursive_input_rule | Existing originals are versioned upstream inputs with declared burden shares; do not re-author recursively or duplicate internal component production |
| upstream_dataset_requirement | Verified electricity, material, source-original, provider, travel and equipment datasets; disclose missing upstream stages |
| disclosure | Sites/time; original hierarchy; owned/provider work; support loads; acceptance storage cutoff; exclusions and upstream gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_creation` | Include actual planning, creation, rework, edit/mix or script compilation, quality checks and acceptance. A live-script route states its real operations rather than inventing recording. | un-cpc-radio-originals; ebu-radio-production-2023 |
| `boundary_downstream` | Separate later transmission/playout, downloads, long-term archive and audience devices; count creation once, with explicit downstream reuse allocation. | ebu-radio-production-2023; un-sna-originals-2008 |
| `boundary_actual` | Screen actual utilities, fuels, consumables, travel, wastes and direct releases at all sites. These cards specify common atomic exchanges, not every project flow. Add separate actual exchanges with verified identities or explicit gaps when present. Do not declare generator fuel or refrigerant loss absent because only electricity is illustrated. A foreground-only dataset cannot claim complete cradle-to-gate coverage. |  |

## 6. Process Inventory Structure

No elementary flow is presumed for electrical audio/script creation. Retain a direct-release screen; actual releases require species, fossil/biogenic source and receiving compartment evidence and their own rows. Supplier electricity emissions are not local direct releases.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare | Plan and prepare script | required | Actual operations; row-specific conditions declared | foreground_production | per declared reference flow |
| create_content | Create and acquire programme components | required | Actual operations; row-specific conditions declared | foreground_production | per declared reference flow |
| finish | Edit, verify and accept original | required | Actual operations; row-specific conditions declared | foreground_production | per declared reference flow |

### Process: Plan and prepare script (`prepare`)

#### Inputs

##### Product flows

###### Alternating current (`prep_electricity`)

Meter attributable planning, script and office-support electricity. Only CN grid-average user supply below 1 kV may use this identity; other supply requires a separately verified identity.

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

###### Uncoated woodfree printing paper (`script_paper`)

Conditional on actual printed scripts; weigh issued and returned paper. Digital-only work needs no paper. Paper bags and coated or recycled paper are separate identities.

- Selected flow: Uncoated woodfree printing paper
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

### Process: Create and acquire programme components (`create_content`)

#### Inputs

##### Product flows

###### Alternating current (`record_electricity`)

Meter attributable recording, monitoring and studio support including ventilation. Only CN grid-average user supply below 1 kV may use this identity. Exclude energy already embodied in contracted services.

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

###### Location sound recording service (`recording_service`)

Conditional on outsourced location recording; specify session, crew, equipment, travel and deliverable coverage; retain provider environmental inventory and actual service hours, not invoice value.

- Selected flow: Location sound recording service
- Flow property / unit: Time / h
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_service.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources:

###### Condenser microphone (`microphone_share`)

Conditional on use of an owned condenser microphone. Attribute actual equipment production using utilization and supported service activity, without a default lifetime. Rented devices already covered by services are not counted again.

- Selected flow: Condenser microphone
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Use the attributable manufacturing fraction of one complete asset from cp_equipment and allocate_equipment as the equipment input per declared reference flow; retain the cumulative cross-project/period ledger and reconcile operation and rental-service coverage separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_equipment`
- Sources:

###### Accepted sound recording original (`source_audio`)

Conditional on an existing external recording incorporated into the programme. Identify version, permitted use and allocated production burden. Newly produced internal components are not added as external inputs; royalties are metadata.

- Selected flow: Accepted sound recording original
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_asset_input.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset_input`
- Sources:

###### Passenger transport by petrol passenger car (`location_travel`)

Conditional on actual location travel by this route; measure passenger distance and project share. Provider-covered travel is not counted again; other vehicle routes require separate specific rows.

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

### Process: Edit, verify and accept original (`finish`)

#### Inputs

##### Product flows

###### Alternating current (`finish_electricity`)

Meter editing, mixing, quality checks, export and operator-owned pre-acceptance storage. Only CN grid-average user supply below 1 kV may use this identity; third-party storage energy embedded in services is not counted again.

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

###### Audio production computer workstation (`workstation_share`)

Attribute actual workstation manufacturing across all three processes once here, using its declared configuration, utilization and supported service denominator; do not convert cost or power to equipment mass.

- Selected flow: Audio production computer workstation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Use the attributable manufacturing fraction of one complete asset from cp_equipment and allocate_equipment as the equipment input per declared reference flow; retain the cumulative cross-project/period ledger and reconcile operation and rental-service coverage separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_equipment`
- Sources:

###### Managed audio-project storage service (`hosted_storage`)

Conditional on contracted pre-acceptance storage at a fixed declared capacity, redundancy and region. Retain actual capacity-time ledger, attributed service hours and supplier inventory; bytes do not imply kWh. Post-acceptance archival use is downstream.

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

###### Radio programme original (`radio_original`)

One complete accepted original at the declared version. A series is one item only if the whole defined series is the complete original. An independently complete segment can be an original. Duplicated files are not additional originals.

- Selected flow: Radio programme original
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc-radio-originals`; `ebu-radio-production-2023`

##### Waste flows

###### Waste uncoated woodfree printing paper (`script_paper_waste`)

Conditional on discarded script paper; weigh this segregated stream and document treatment. It is a waste exchange, not an elementary emission or default recycling credit.

- Selected flow: Waste uncoated woodfree printing paper
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per declared reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_shared` | First subdivide project work and separate providers. Attribute shared metered totals using measured power profiles and recorded job/equipment occupancy; justify idle/support shares and reconcile assigned totals. Storage uses actual capacity-time and provider inventory, not universal kWh/GB. Do not allocate by sales, royalties or audience counts. |  |
| `allocate_original` | For jointly created originals prefer subdivision; otherwise document a physically supported shared-work relationship, fractions and sensitivity. Failed takes/revisions remain with the accepted original. Prevent parent/component double accounting; rights transfer is not new original production. | ebu-radio-production-2023; un-sna-originals-2008 |
| `allocate_equipment` | Attribute real equipment manufacturing with a persistent asset ledger across all projects and periods. Measured project use is only the numerator; the denominator must cover supported actual lifetime/cumulative service activity or a justified expected lifetime, with sensitivity and subsequent reconciliation. Cumulative allocated manufacturing fractions across every project and period must not exceed 1, and must never reset at a new project or observation window. An observed-period method distributes only the already attributed manufacturing fraction of that period, not a whole asset inventory in every period. Unknown lifetime, denominator or period share requires explicit review; no default life or mass. Avoid service/rental/equipment duplication and automatic waste credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | finish | radio_original | Original ledger | ID; version; scope; duration; format; acceptance; rights; components | Inspect accepted audio/script package and actual editorial/technical records; distinguish originals from copies | item | each task and acceptance | complete creation including rework | all declared operator/provider sites | per declared reference flow | traceable logs; calibrated meters where applicable; supplier inventory; reconciliation |
| cp_energy | prepare; create_content; finish | electricity | Meter records | meter; kWh; timestamps; task; site; voltage; power profile; support; allocation | Submeter tasks or reconcile interval meters with measured device power and task logs; convert to MJ, separate supplier coverage | MJ | each task and acceptance | complete creation including rework | all declared operator/provider sites | per declared reference flow | traceable logs; calibrated meters where applicable; supplier inventory; reconciliation |
| cp_material | prepare; finish | script_paper; script_paper_waste | Weighing records | paper grade; issued/returned/waste kg; stock; treatment; project | Weigh actual input/return and segregated waste; reconcile stock and use | kg | each task and acceptance | complete creation including rework | all declared operator/provider sites | per declared reference flow | traceable logs; calibrated meters where applicable; supplier inventory; reconciliation |
| cp_service | create_content; finish | recording_service; hosted_storage | Provider records | provider; session/storage hours; capacity; crew; redundancy; region; deliverable; covered inputs | Obtain actual session or capacity-time logs and provider inventory, identify energy/equipment included | h | each task and acceptance | complete creation including rework | all declared operator/provider sites | per declared reference flow | traceable logs; calibrated meters where applicable; supplier inventory; reconciliation |
| cp_equipment | create_content; finish | microphone_share; workstation_share | Utilization records | persistent asset ID; model; configuration; production inventory; project task use; supported lifetime/cumulative-service denominator and its coverage; expected-life evidence and sensitivity; manufacturing fraction already attributed to the period; current project fraction; prior and cumulative fractions across all projects and periods; service/rental coverage; subsequent reconciliation | Link physical assets and task records to the cross-project/period manufacturing-share ledger; justify the denominator under allocate_equipment. An observation period distributes only its already attributed fraction and cumulative shares must not exceed 1. Unknown denominators or period fractions require review; a new project or period never resets whole-asset manufacture. | item | each task and acceptance | complete creation including rework | all declared operator/provider sites | per declared reference flow | traceable logs; calibrated meters where applicable; supplier inventory; reconciliation |
| cp_asset_input | create_content | source_audio | Asset provenance | source ID/version; component; rights; production burden; reuse share | Verify supplier original-production inventory and declared consumed share; separate fees | item | each task and acceptance | complete creation including rework | all declared operator/provider sites | per declared reference flow | traceable logs; calibrated meters where applicable; supplier inventory; reconciliation |
| cp_travel | create_content | location_travel | Journey logs | vehicle; petrol route; passengers; km; task; provider coverage | Read actual trip records and reconcile passenger distance and project share | person*km | each task and acceptance | complete creation including rework | all declared operator/provider sites | per declared reference flow | traceable logs; calibrated meters where applicable; supplier inventory; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_conversion` | prep_electricity; record_electricity; finish_electricity | MJ = measured attributable kWh × 3.6; preserve the original denominator. | cp_energy; measured kWh | MJ per declared reference flow |  |
| `original_normalization` | all inventory rows | For homogeneous accepted originals with identical declared scope divide each attributable exchange total by actual accepted count. Assign unlike originals by project first and report separately. Output is exactly 1 item per declared reference flow. | cp_acceptance; attributable exchange totals | exchange amount per declared reference flow |  |
| `service_reconciliation` | recording_service; hosted_storage | Reconcile consumed hours for the specified service to supplier activity inventory; time and capacity alone do not establish electrical energy. | cp_service; supplier inventory | service amount per declared reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | radio_original | Fix original version, complete hierarchy, duration and actual commissioning acceptance specification. Loudness/peak targets follow adopted specification, not universal defaults; no inferred legal or EBU approval. | cp_acceptance; ebu-radio-production-2023 |
| `quality_activity` | all inventory rows | Cover complete creation/rework and sites; reconcile meters, stocks, provider and equipment allocation. Missing data are disclosed with uncertainty, not set to zero. | cp_energy; cp_material; cp_service; cp_equipment |
| `quality_representative` | radio_original | Declare genre, format, recorded/live route and source reuse; count alone cannot compare unlike durations/qualities. | cp_acceptance |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_reference` | Require complete accepted original, all qualifiers and exactly 1 item linked to radio_original. Reject airings, downloads or rights payments as original output. | un-cpc-radio-originals; ebu-radio-production-2023 |
| `validate_coverage` | Check creation/rework and owned/provider separation; reject hidden support, storage, travel, consumable or release omissions. Declare identity/upstream gaps and prohibit complete lifecycle claims while missing. |  |
| `validate_units` | Check count and normalization; preserve electricity energy/MJ, equipment count, provider hours and passenger-distance units. Names alone do not establish route, region, property or UUID suitability. |  |
| `validate_equipment_shares` | Verify persistent asset IDs, use numerators, supported lifetime/cumulative-service denominators and already attributed period fractions. Cumulative manufacturing shares across all projects and periods must not exceed 1. Unknown denominators or period fractions require explicit review; one observation window cannot stand for a whole lifetime or reset full manufacture each period. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | original_asset_production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Explicit original-production input to declared broadcast/copy/use scenarios with transparent reuse allocation |
| excluded_use | Unqualified whole-broadcast/listening footprint; count-only comparisons; legal approval |
| required_metadata | Reference qualifiers; source hierarchy; sites/period; route; owned/provider coverage; dataset versions; allocations |
| required_quality_disclosure | Foreground/upstream coverage; identity gaps; measurement/provider support; equipment uncertainty; exclusions and sensitivity |
| update_trigger | New original version/scope/route; changed equipment/site/supply; material allocation or acceptance changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-radio-originals | official_guidance | UNSD CPC 3.0 subclass 84611 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84611 | Original radio content identity and over-the-air intent; no energy factors |
| un-cpc-sound-originals | official_guidance | UNSD CPC 3.0 subclass 96113 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/96113 | Sound-recording overlap and source component distinction |
| ebu-radio-production-2023 | official_guidance | EBU Tech 3401, November 2023, §1.2 p.6, §2 pp.7–8, §4 pp.8–10. https://tech.ebu.ch/docs/tech/tech3401.pdf | Programme hierarchy and production/distribution distinction; recommendations only if actually adopted; no environmental factors |
| un-sna-originals-2008 | official_guidance | UN et al., System of National Accounts 2008, §§10.115–10.116 p.207; §6.208 onwards. https://unstats.un.org/unsd/nationalaccount/docs/SNA2008.pdf | Historical originals/copies distinction only; no monetary allocation or current legal/lifetime claim |
