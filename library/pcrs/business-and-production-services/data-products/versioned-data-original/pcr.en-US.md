---
status: candidate
pcr_id: pcr.business-and-production-services.data-products.versioned-data-original
language: en-US
sync_with: pcr.zh-CN.md
---

# Versioned data original production

## 1. Scope and Applicability

This PCR covers the production of identified digital information content obtained by accessing and observing phenomena and recording, organizing and storing their information. The output is one complete versioned data original under identified ownership/control, usable as input to productive activities. It covers primary observations and compilation of traceable existing data; the declared actual route determines the foreground inventory. Examples include a scoped weather-observation database and an identified business-record compilation. The object is the information product, including its schema, provenance, documentation and required quality results, rather than a file format or a sale. [un-cpc3-data; w3c-dcat3; noaa-ghcnd]

Exclude database-management software and other software originals, physical storage media, crypto assets, brands/franchises, research or exploration conclusions as separate originals, entertainment/online consumption content, commissioned compilation activity sold solely as a service, downloads and continuing access/hosting services. A research project may produce a data product as a separable output; do not reclassify its entire scientific original as data. A digital file can carry data without its creation constituting a new data original. [un-cpc3-data; w3c-dcat3]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.data-products.versioned-data-original |
| classification_refs | CPC 3.0: 83710 Data |
| covered_products | Versioned productive digital information originals and original databases, with a bounded content manifest |
| excluded_products | Software; physical media; crypto assets; research/design originals; consumption content; compilation services; downloads and hosting |
| representative_product | One identified observation-data database version, with declared variables, population/locations, period, quality flags and reuse conditions; GHCN-Daily demonstrates version citation, not a mandatory weather route |
| production_route | Specify content and collection design; acquire/observe and record; integrate and organize; validate/correct; document and seal one original |
| market_state | Completed digitally stored information original available for declared productive reuse; ownership/control and access restrictions are specified |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Produce a retrievable, documented digital information original for the declared productive purpose |
| How much | One complete original package of the declared content/version; 1 item |
| How well | Actual acceptance specification for variables/schema, coverage, completeness, resolution, quality flags, provenance, integrity and permitted reuse; no invented accuracy threshold |
| How long or cycle | One bounded creation cycle from project inception to the declared sealed-version cutoff; observation coverage is distinct from production duration; no default asset lifetime |
| reference_flow_link | reference_data |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Versioned data original package |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | original ID; version and content manifest; schema/variables; source provenance; population/spatial and temporal coverage; resolution; missingness and quality flags; acceptance and integrity results; ownership/control and reuse rights; production route and sites; creation period and cutoff; upstream-data reuse and provider boundary |

The display unit item is exactly the public count unit Item(s); it is not mass, money, a user or a byte. Required qualifiers belong in the resulting dataset metadata and acceptance evidence. One count without defined content/quality is not a comparable data product. Alternative serializations and duplicate backups of the same content are not additional originals.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Exactly one complete declared original; count by signed content/version manifest with cp_original. No mass conversion, byte normalization or license multiplication. |
| electricity_unit | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public reference property and Units of energy group `93a60a57-a3c8-11da-a746-0800200c9a66`. Meter kWh; convert to MJ with 3.6 MJ/kWh in calculate_energy [nist-si-conversion]. |
| information_metrics | content and allocation metadata | Recorded count/capacity/time in its actual unit | item; byte; s as separately recorded | Record actual bytes, records, reserved time and transmitted data as separate metrics; no universal relation to item quality or electricity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual observation access/collection inception, or receipt of identified existing data, through sealed original completion |
| starting_condition_role | Declared original-creation foreground gate; receipt of existing data does not erase upstream creation |
| product_classification_scope | Productive information content in the CPC Data sense, independently of file format |
| recursive_input_rule | Record each reused source-data version as a distinct input with provenance and a conserved upstream-burden share. Stop at its declared upstream dataset; never recalculate the same observations inside the consuming original |
| upstream_dataset_requirement | Supplier data-creation, grid supply, owned hardware and purchased-job inventories matched to actual scopes; missing links are disclosed rather than set to zero |
| disclosure | Creation/observation periods; source cutoffs and prior versions; owned/provider interfaces; physical collection route; hardware, cooling, storage and network boundaries; exclusions and missing upstream layers |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_cycle | all production stages | Include attributable planning, access, observation/recording, ingestion, organization, validation, corrective reruns, documentation and storage up to original sealing. Record failed runs and discarded records as production activity, without counting them as accepted output. | un-cpc3-data; unece-gsbpm52 |
| boundary_physical | observation | Map every actual field, laboratory, survey, sensor and scanning route. Add separate specific exchanges for actual fuel, transport, each reagent/consumable, water, wastes and documented direct releases. Their absence needs route evidence. Electronic data output does not justify excluding its physical collection. | un-cpc3-data; unece-gsbpm52 |
| boundary_assets | computing and instruments | Include the attributable inventory of identified owned devices outside provider inventories. Hardware production/disposal is an upstream layer, not a local elementary release. Cooling, network and temporary storage inside creation must be metered or supplied by a scoped provider inventory. | gsf-sci110 |
| boundary_after_gate | copies and operations | Post-sealing downloads, user access, long-term hosting, updates and data use are separate processes. Initial creation burdens enter downstream through an explicit reuse ledger, never the full original cost in every download. New content versions include actual incremental work and disclosed reused burdens. | un-cpc3-data; w3c-dcat3 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| planning | Content and collection design | required | All originals; actual design/build workload | original creation | per declared reference flow |
| observation | Acquisition and recording | required | Actual source access and recording; owned physical collection only where used | original creation | per declared reference flow |
| organization | Integration and organization | required | Actual schema mapping, cleaning, indexing and processing; transformations are route-specific | original creation | per declared reference flow |
| validation | Quality and integrity checks | required | Checks against declared acceptance rules; no universal imputation requirement | original creation | per declared reference flow |
| sealing | Documentation and original sealing | required | One complete version manifest and bounded storage cutoff | original creation | per declared reference flow |
| infrastructure | Owned supporting devices | conditional | Owned devices support creation and are outside purchased-provider inventories | original creation | per declared reference flow |

Each row represents one exchange. Process electricity pools are disjoint. Empty waste/elementary subsections mean no universal release is prescribed, not that a real site has zero exchanges. Dataset production must instantiate all documented route exchanges required by boundary_physical; purchased electricity emissions occur in its upstream supply inventory.

### Process: Content and collection design (`planning`)

#### Inputs

##### Product flows

###### Alternating current (`planning_electricity`)

Electricity attributable to planning work, including allocated reserved idle/cooling/storage/network within its measured boundary. Use this UUID only for actual CN grid-average user supply below1 kV. Outside that supply condition keep a separate matching identity unresolved until verified. Meter work and retries with cp_energy; apply calculate_energy; do not duplicate provider-inclusive electricity.

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

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Acquisition and recording (`observation`)

#### Inputs

##### Product flows

###### Alternating current (`observation_electricity`)

Electricity attributable to observation work, including allocated reserved idle/cooling/storage/network within its measured boundary. Use this UUID only for actual CN grid-average user supply below1 kV. Outside that supply condition keep a separate matching identity unresolved until verified. Meter work and retries with cp_energy_observation; apply calculate_energy; do not duplicate provider-inclusive electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy_observation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_observation`
- Sources: `gsf-sci110`

###### Existing observation dataset package (`source_data`)

Conditional: one identified existing observation-data version is acquired, received (including free or open data) or reused in compilation. Bind its manifest, source variables, coverage, quality flags and reuse rights. Count actual scoped packages; carry the justified upstream creation share, rather than copying their bytes as newly observed facts. New primary observations on own account in the current creation cycle instead require the actual observation-route inventory.

- Selected flow: Existing observation dataset package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source`
- Sources: `w3c-dcat3`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Integration and organization (`organization`)

#### Inputs

##### Product flows

###### Alternating current (`organization_electricity`)

Electricity attributable to organization work, including allocated reserved idle/cooling/storage/network within its measured boundary. Use this UUID only for actual CN grid-average user supply below1 kV. Outside that supply condition keep a separate matching identity unresolved until verified. Meter work and retries with cp_energy_organization; apply calculate_energy; do not duplicate provider-inclusive electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy_organization.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_organization`
- Sources: `gsf-sci110`

###### Data-compilation compute job (`compute_job`)

Conditional: an external provider delivers one completed, uniquely scoped compilation job. Record job ID, transformation, dataset version, executed/reserved resources, duration and actual provider inventory scope. Count completed jobs from logs, not billed currency; omitted cooling/hardware/storage/network must be supplied separately. Replace the same embedded energy/device exchanges rather than adding them twice.

- Selected flow: Data-compilation compute job
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

### Process: Quality and integrity checks (`validation`)

#### Inputs

##### Product flows

###### Alternating current (`validation_electricity`)

Electricity attributable to validation work, including allocated reserved idle/cooling/storage/network within its measured boundary. Use this UUID only for actual CN grid-average user supply below1 kV. Outside that supply condition keep a separate matching identity unresolved until verified. Meter work and retries with cp_energy_validation; apply calculate_energy; do not duplicate provider-inclusive electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy_validation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_validation`
- Sources: `gsf-sci110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Documentation and original sealing (`sealing`)

#### Inputs

##### Product flows

###### Alternating current (`sealing_electricity`)

Electricity attributable to sealing work, including allocated reserved idle/cooling/storage/network within its measured boundary. Use this UUID only for actual CN grid-average user supply below1 kV. Outside that supply condition keep a separate matching identity unresolved until verified. Meter work and retries with cp_energy_sealing; apply calculate_energy; do not duplicate provider-inclusive electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy_sealing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_sealing`
- Sources: `gsf-sci110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Versioned data original package (`reference_data`)

Exactly one complete original with declared content and version, accepted against its actual quality specification and sealed manifest. It comprises the information and required documentation, not each duplicate file, sale, download or license. Required content with missing data must retain declared flags; acceptance does not imply legal or scientific approval.

- Selected flow: Versioned data original package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_original`
- Sources: `un-cpc3-data`

##### Waste flows

##### Elementary flows

### Process: Owned supporting devices (`infrastructure`)

#### Inputs

##### Product flows

###### Data-production computing server (`server_hardware`)

Conditional: an identified owned computing server supports creation. Bind actual model, processors, memory, storage and upstream device inventory. Record reserved time, evidenced installed life and capacity share, retaining uncertainty; allocate device inventory using allocation_device. No generic service proxy establishes its identity.

- Selected flow: Data-production computing server
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_device.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_device`
- Sources: `gsf-sci110`

###### Electronic observation data logger (`logger_hardware`)

Conditional: an identified electronic instrument records observations for this original. Bind measured variables, calibrated sensing/recording configuration, location and power interface. Record actual utilization and installed life from site evidence; include individual probe, battery and other actual replaced components as separate exchanges if outside the device inventory.

- Selected flow: Electronic observation data logger
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

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared data projects | Separate project and stage workloads using meters, collection logs and job IDs before allocating. Keep residual unassigned shares and failed work visible. Do not default to revenue, licenses, users or data byte shares without a causal measured relationship. | gsf-sci110; unece-gsbpm52 |
| allocation_compute | shared electricity | Reconcile attributable measured job/storage/network shares to the same facility meter period, including reserved idle and cooling scope. A traffic or storage metric is an attribution driver requiring justification and reconciliation, never a universal kWh conversion. | gsf-sci110 |
| allocation_device | server_hardware; logger_hardware | Use the actual device inventory fraction attributable to the creation cycle. For a reserved computing device, use reserved time divided by evidenced installed life and reserved resource divided by total resource. Noncomputing sensor duty allocation needs its own measured causal utilization evidence. Do not invent life or duplicate provider hardware. | gsf-sci110 |
| allocation_reuse | source_data and joint original versions | Trace upstream source content and retained prior-version work separately from incremental creation. Maintain a conserved beneficiary ledger with an explicit finite output/use scenario when sharing original burdens downstream; report sensitivity to reuse assumptions. Copies never multiply information creation. Joint research/software outputs require actual subdivision; unresolved joint attribution needs review. | un-cpc3-data; w3c-dcat3 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_original | sealing | reference output | acceptance_record | original ID; version; files/checksums; content extent; schema; source rights/control; acceptance criteria/results; coverage; quality flags; completion cutoff; complete count | Inspect original content and producer acceptance records; deduplicate equivalent serializations and bind one complete declared original | item | At version completion | Entire declared creation cycle | All original-producing sites/providers | per declared reference flow | Signed version manifest and reproducible acceptance/integrity results |
| cp_energy | planning | planning_electricity | meter_record | meter ID; start/end; stage/job; region; voltage; kWh; reserved/idle load; cooling, storage and network interface; allocation share; provider overlap | Use calibrated meters or verified telemetry reconciled to facility totals; bind disjoint stage intervals, reruns and shared-load attribution; this protocol covers planning only. Reconcile the five stage-specific protocols against the same meter totals; allocate each interval and shared load once, retaining failed runs. | kWh | Each run and creation interval | Full creation cycle including failed work | Actual owned supply; provider scopes separately | per declared reference flow | Calibration, workload logs, meter reconciliation and gap coverage |
| cp_energy_observation | observation | observation_electricity | meter_record | meter ID; start/end; stage/job; region; voltage; kWh; reserved/idle load; cooling, storage and network interface; allocation share; provider overlap | Use calibrated meters or verified telemetry reconciled to facility totals; bind disjoint stage intervals, reruns and shared-load attribution; this protocol covers observation only. Reconcile the five stage-specific protocols against the same meter totals; allocate each interval and shared load once, retaining failed runs. | kWh | Each run and creation interval | Full creation cycle including failed work | Actual owned supply; provider scopes separately | per declared reference flow | Calibration, workload logs, meter reconciliation and gap coverage |
| cp_energy_organization | organization | organization_electricity | meter_record | meter ID; start/end; stage/job; region; voltage; kWh; reserved/idle load; cooling, storage and network interface; allocation share; provider overlap | Use calibrated meters or verified telemetry reconciled to facility totals; bind disjoint stage intervals, reruns and shared-load attribution; this protocol covers organization only. Reconcile the five stage-specific protocols against the same meter totals; allocate each interval and shared load once, retaining failed runs. | kWh | Each run and creation interval | Full creation cycle including failed work | Actual owned supply; provider scopes separately | per declared reference flow | Calibration, workload logs, meter reconciliation and gap coverage |
| cp_energy_validation | validation | validation_electricity | meter_record | meter ID; start/end; stage/job; region; voltage; kWh; reserved/idle load; cooling, storage and network interface; allocation share; provider overlap | Use calibrated meters or verified telemetry reconciled to facility totals; bind disjoint stage intervals, reruns and shared-load attribution; this protocol covers validation only. Reconcile the five stage-specific protocols against the same meter totals; allocate each interval and shared load once, retaining failed runs. | kWh | Each run and creation interval | Full creation cycle including failed work | Actual owned supply; provider scopes separately | per declared reference flow | Calibration, workload logs, meter reconciliation and gap coverage |
| cp_energy_sealing | sealing | sealing_electricity | meter_record | meter ID; start/end; stage/job; region; voltage; kWh; reserved/idle load; cooling, storage and network interface; allocation share; provider overlap | Use calibrated meters or verified telemetry reconciled to facility totals; bind disjoint stage intervals, reruns and shared-load attribution; this protocol covers sealing only. Reconcile the five stage-specific protocols against the same meter totals; allocate each interval and shared load once, retaining failed runs. | kWh | Each run and creation interval | Full creation cycle including failed work | Actual owned supply; provider scopes separately | per declared reference flow | Calibration, workload logs, meter reconciliation and gap coverage |
| cp_source | observation | existing observation dataset | source_record | source ID/version; package count; variables/coverage; flags; rights; upstream creation inventory; beneficiary shares; received bytes; lineage | Inspect received original and provenance; count defined packages; verify compatibility, rights and upstream burden ledger rather than estimating energy from size | item | Each source version received | All sources of the declared output version | Actual suppliers and receiving site | per declared reference flow | Source manifest, access record, upstream inventory and reuse ledger |
| cp_provider | organization | compilation job | provider_record | job ID; source/output version; complete-job count; transformation; resources/time; provider energy/device/network/storage/cooling boundary | Inspect provider job acceptance logs and matched job inventory; retain retries and scope exclusions, reconcile billed metrics without treating money as quantity | item | Each completed provider job | Declared creation cycle | Actual provider facilities | per declared reference flow | Job manifests, scoped provider inventory and embedded-exchange exclusion ledger |
| cp_device | infrastructure | individual device | asset_record | device model/configuration; upstream inventory; installed life; reserved time; reserved/total resources; actual sensor duty; calibration; replacements; provider inclusion | Inspect device register, configuration, service-life evidence and utilization logs; collect causal shares separately for servers and instruments | item | Each device and project period | Creation cycle and evidenced device life | Actual owned devices | per declared reference flow | Asset records, utilization evidence and life/allocation sensitivity |

For physical observation, retain the actual method, sampling/survey coverage, equipment and calibration, field/laboratory locations, collection period and all individual input/output records. Every added atomic exchange must have a linked protocol with its real property/unit, method, coverage and the same per-original basis. Route omissions block a complete dataset; digital-only compilation requires evidence that observation burdens are in its identified upstream sources.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_energy | planning_electricity; observation_electricity; organization_electricity; validation_electricity; sealing_electricity | Convert attributable metered kWh to MJ by multiplication by 3.6; preserve stage and supply interfaces. | cp_energy; cp_energy_observation; cp_energy_organization; cp_energy_validation; cp_energy_sealing; kWh | MJ | gsf-sci110; nist-si-conversion |
| calculate_original | all inventory rows | Sum nonduplicated attributable exchange quantities for the one declared original after stage/provider/source subdivision; the output is exactly 1 item. Keep numerator units and upstream shares explicit. | cp_original; cp_energy; cp_energy_observation; cp_energy_organization; cp_energy_validation; cp_energy_sealing; cp_source; cp_provider; cp_device | per declared reference flow | un-cpc3-data; gsf-sci110 |
| calculate_metrics | content metadata | Record actual completeness, valid/rejected record counts, byte sizes and coverage against declared specifications. These characterize content and do not transform bytes or records into MJ or new originals. | cp_original; source and validation logs | declared quality and content metrics | w3c-dcat3; unece-gsbpm52; noaa-ghcnd |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_content | reference_data | Bind source lineage, coverage, version, schema, missingness, flags, transformations and rights/control. Preserve observed versus imputed records and checks actually performed; acceptance criteria are producer-specific. | cp_original; cp_source; w3c-dcat3; noaa-ghcnd |
| quality_cycle | all processes | Cover actual sites, collection and production periods, failed jobs, corrections, temporary replicas and sealing storage. Disclose missing meter periods, external source burdens and provider exclusions. | cp_energy; cp_energy_observation; cp_energy_organization; cp_energy_validation; cp_energy_sealing; cp_provider; unece-gsbpm52 |
| quality_identity | all inputs | Recheck public identities, reference properties/groups, supply conditions, actual hardware and upstream versions. Blank UUIDs remain candidate gaps and cannot establish available provider inventories. | cp_device; cp_source; cp_provider |
| quality_uncertainty | allocation and data representativeness | Report workload/meter uncertainty, unknown shares, hardware-life sensitivity, observation coverage limits and reuse scenario sensitivity. No invented benchmark can replace foreground evidence. | cp_energy; cp_energy_observation; cp_energy_organization; cp_energy_validation; cp_energy_sealing; cp_device; source/reuse ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_product | reference_data | Require one complete identified productive information original with actual ownership/control and declared quality evidence. Reject copies, licenses, file-format conversions, mere compilation services, software or consumption content counted as equivalent originals. | un-cpc3-data; w3c-dcat3 |
| validate_basis | all inventory rows | Require consistent per declared reference flow in both languages, linked collection records, count output and numerator-unit preservation. Reject arbitrary mass, bytes-to-kWh or money-to-item conversions. | gsf-sci110; w3c-dcat3 |
| validate_route | observation and processing | Fail dataset completeness if any actual observation route, provider interface, utility, material, waste, direct release or upstream source burden is unknown or omitted. A conditional row may be absent only with route evidence; do not invent emissions to fill empty subsections. | un-cpc3-data; unece-gsbpm52 |
| validate_conservation | shared work and reused content | Reconcile stage meters, provider embedded flows, device shares, joint outputs and the finite reuse ledger. Reject duplicated original costs per copy and unexplained allocation residuals hidden as zero. | gsf-sci110; w3c-dcat3 |
| validate_coverage | dataset claim | List checks performed/skipped, missing physical and upstream layers, identity gaps and uncertainties. Foreground creation alone is not a complete cradle-to-gate or lifecycle result; metadata conformance is not scientific, privacy or legal approval. | un-cpc3-data; w3c-dcat3; gsf-sci110 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Original-creation foreground inventory for one declared complete data product version |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | After evidence completion, traceable upstream data product input with explicit source/reuse allocation and matched content quality |
| excluded_use | Generic impact per byte/user/license/revenue; comparisons of unequal data; full lifecycle claims from foreground alone; approved accuracy or legal status |
| required_metadata | All reference qualifiers; sites and periods; method/route register; source lineage and upstream inventories; provider and owned-asset scopes; meters/units; reuse allocation and sealing cutoff |
| required_quality_disclosure | Identity and route gaps; data coverage/missingness; actual acceptance results; meter/allocation uncertainty; device-life and reuse sensitivity; skipped layers |
| update_trigger | New information/version scope; changed observations, source rights, provider/site/device, quality method, sealing cutoff or measured energy/reuse allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-data | official_guidance | UNSD CPC Version3.0, Code83710, explanatory note inclusion, Notes1–3 and exclusions: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/83710 | Information product, ownership/control and software/media/consumption exclusions; no LCA factors |
| w3c-dcat3 | standard | W3C, Data Catalog Vocabulary (DCAT) Version3, Recommendation22 August2024; §§5,6.6,6.8,9,11,14: https://www.w3.org/TR/2024/REC-vocab-dcat-3-20240822/ | Dataset/distribution distinction, version, rights and quality metadata; DCAT scope alone does not establish CPC applicability |
| unece-gsbpm52 | official_guidance | UNECE, Generic Statistical Business Process Model Version5.2 (May2025, CES endorsed June2025); Collect/Process, paragraphs93–114: https://unece.github.io/GSBPM-5.2/ | Acquisition, integration, validation and route-specific correction; statistical framework, no mandatory imputation or energy coefficients |
| gsf-sci110 | standard | Green Software Foundation, Software Carbon Intensity specification1.1.0; Energy and Embodied emissions: https://sci.greensoftware.foundation/ | Measured computing energy scope and reserved-time/resource device attribution only; no default lifetime or complete data LCA score |
| noaa-ghcnd | dataset | NOAA NCEI GHCN-Daily README Version3.35; header/version citation and §III FORMAT OF DATA FILES, MFLAG/QFLAG/SFLAG; dataset DOI10.7289/V5D21VHZ: https://www.ncei.noaa.gov/pub/data/ghcn/daily/readme.txt | Actual versioned observation database example and source/quality flags; weather-specific metadata only, no producer quantities or generic quality threshold |
| nist-si-conversion | official_guidance | NIST SP811 (2008), Appendix B.8 K, exact kilowatt hour to joule factor: https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8 | 1 kWh = 3.6 × 10^6 J = 3.6 MJ, exact conversion only; historical table, not used for pre-2019 base-unit definitions or production coefficients |
