---
pcr_id: pcr.business-and-production-services.research-and-development-services.own-account-research-development-original
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Own-account research and development original


## 1. Scope and Applicability

This PCR covers own-account creation of scientific original knowledge intended for sale without a contract or known buyer at production inception: documented ideas, plans, blueprints or formulas for inventions, products and processes (un-cpc3-originals). It encompasses actual laboratory, computational, field, survey and mixed research routes, not just digital document preparation. Identify the novel question, evidence route and original completion gate. A physical prototype may support the original, but the knowledge asset is the reference output. A patent is neither necessary nor proof of scientific validity.

Exclude commissioned research-service outputs, routine testing, design concepts without a research knowledge objective, mineral exploration results, software originals as standalone software products, general-purpose data products, brands/franchises, literary/artistic originals, broadcasts and downloads. Software and data integral to an identified scientific result stay in its package, with no duplicate standalone output. A downstream industrial design original belongs to its own boundary. Resolve mixed research/design classification from the actual deliverable, not its file extension. Count is a declared production unit, not evidence that unrelated originals perform equivalent functions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.research-and-development-services.own-account-research-development-original |
| classification_refs | CPC 3.0 81400 |
| covered_products | Own-account versioned scientific knowledge originals for inventions, products or processes; intended sale with no contracted or known buyer at inception |
| excluded_products | Commissioned R&D services; CPC 83920 design originals; software/data/download/broadcast products; exploration, artistic and brand assets |
| representative_product | Own-account research and development original package |
| production_route | Question and hypothesis → actual investigation and iterations → evidence evaluation → complete versioned original package; specific experiments and supporting infrastructure declared |
| market_state | Completed original available for intended sale or licensing of its identified knowledge; actual rights and restrictions declared, no assumed license duration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Create one identifiable scientific original knowledge package, not perform an unspecified research hour |
| How much | One complete original package of one declared version |
| How well | Document research objective, originality evidence, investigated uncertainty, methods, datasets/specimens, verification results, limitations, integrity and reuse conditions; no claim of patent, safety or methodology approval |
| How long or cycle | One actual creation cycle from project inception through documented completion; dates measured, no generic lifetime or later-use duration |
| reference_flow_link | reference_product_original |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Own-account research and development original package |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | project and original ID; version/content inventory; own-account inception and intended sale; field and research objective; actual route and scale; completeness acceptance; evidence and reproducibility limits; geography/sites; creation dates; rights/reuse restrictions; storage and completion cutoff; upstream/reuse allocation; device and provider scope |

Required qualifiers must accompany the dataset metadata, process notes or reference-flow description. The completed original is not counted once per patent, claim, user, copy or download.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | item is the unit display alias of public Item(s), with factor 1. Record one complete declared original using cp_original; do not infer knowledge mass, rights quantity or original count from money or bytes. |
| energy_interface | all electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | cp_energy records measured kWh; use 1 kWh = 3.6 MJ at the identical energy interface. Preserve the public reference property, geography and voltage. GB, CPU hours and network traffic do not themselves measure electricity. |
| same_original_basis | all inventory rows | Original package count | item | All inventory and collection results use per declared reference flow for this one version. Retain raw kg, MJ and device/service item amounts as numerators; no mass conversion of the knowledge output. |

Mass property `93a60a56-a3c8-11da-a746-0800200b9a66` references mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, with reference kg. Net calorific value references energy unit group `93a60a57-a3c8-11da-a746-0800200c9a66`, with reference MJ. These units concern specific input/output exchanges, not the intellectual original quantity.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual project inception with existing knowledge, specimens and facilities identified; earlier reused original burdens are not assumed zero |
| starting_condition_role | Foreground collection boundary with linked upstream supplies |
| product_classification_scope | CPC 3.0 81400 |
| recursive_input_rule | Track reused or purchased research originals once with a matching upstream inventory and an explicit beneficiary ledger; in-house expanded work replaces the corresponding purchased exchange |
| upstream_dataset_requirement | Actual supplied state, region/year, device configuration, reagent purity, provider work scope and treatment technology; quantify missing layers before a complete lifecycle claim |
| disclosure | Project start/end, actual methods, failed branches, reused knowledge, make/buy boundaries, materiality and unknown inventories; foreground-only is not complete cradle-to-gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_creation | all processes | Include hypothesis/planning, investigation including failed trials, evidence evaluation, original documentation and attributable facilities through completion. Travel, heating, cooling, instruments, prototypes and consumables actually used must be screened and instantiated as specific exchanges; salaries are not physical flows. | un-cpc3-originals; oecd-frascati-2015; gsf-sci-1-1-0 |
| boundary_routes | investigation | Require an actual method-to-inventory register for every laboratory, pilot, field, survey and computing route. Expand each material, energy carrier, treatment and supported elementary release individually. Listed conditional rows are concrete route entries, not an exhaustive universal experimental recipe; absent route evidence blocks completeness. | oecd-frascati-2015 |
| boundary_research_end | prototypes and pilot plants | Keep research trials resolving uncertainty inside the creation cycle. Separate later routine manufacture and commercial operation; subdivide mixed-use pilot operation and physical products rather than assigning all plant burdens to knowledge. | oecd-frascati-2015 |
| boundary_distribution | original reuse and delivery | Keep reproduction/downloads, later hosting/network delivery, license administration and use of the invention separate from original creation. Declare any initial transfer cutoff explicitly. Reuse must carry the original burden ledger without charging its full creation inventory to every copy. | un-cpc3-originals |
| boundary_provider | owned and purchased computing | Separate owned measured utilities and device inventory from complete purchased computing services; record actual provider workload, storage and traffic and its documented inventory. A provider service replaces embedded electricity/hardware; missing provider layers stay unknown. | gsf-sci-1-1-0 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| conception | Research question, hypothesis and plan | required | All originals | foreground creation | per declared reference flow |
| investigation | Actual investigation and iterations | required | Actual method, including theory, experiments or research data acquisition | foreground creation | per declared reference flow |
| evaluation | Research evidence evaluation | required | All originals; no requirement for a successful invention | foreground creation | per declared reference flow |
| consolidation | Documented original completion | required | All originals | reference output | per declared reference flow |
| infrastructure | Supporting device embodied inventories | conditional | Actual owned devices not included in purchased services | upstream allocated input | per declared reference flow |

These stages are workload subdivisions, not four additional originals. Internal evidence and draft transfers cancel when consolidating the project. Any unsupported chemistry, site-water discharge, fuel combustion, cooling leakage or prototype route remains a mandatory inventory-expansion question when actually present; do not import generic manufacturing emissions. A theoretical or social-science original need not consume nitrogen or laboratory water.

### Process: Research planning (`conception`)

#### Inputs

##### Product flows

###### Alternating current (`conception_electricity`)

Meter literature analysis, hypothesis formulation and research planning attributable to this original. This UUID applies only to CN grid-average consumption delivered below 1 kV; other regions or interfaces require their own identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1-0`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Investigation (`investigation`)

#### Inputs

##### Product flows

###### Alternating current (`investigation_electricity`)

Record actual experiment, simulation, research data acquisition and failed/repeated run electricity. Apply this UUID only to CN grid-average user supply below 1 kV; do not substitute power-station output.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1-0`

###### Deionised water (`laboratory_water`)

Conditional: purchased pure water produced by ion exchange or reverse osmosis actually used in an experimental route. Record measured mass; on-site purification instead requires raw-water, purification and reject inventories and must replace this purchased-water boundary.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount per declared reference flow; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `oecd-frascati-2015`

###### Liquid Nitrogen (`cryogenic_nitrogen`)

Conditional: actual cryogenic experiment or specimen preservation using liquid nitrogen of purity at least 99.9%, from liquid-air fractionation matching the declared supply. Record consumption including attributable storage loss; gaseous nitrogen is a different purchased identity.

- Selected flow: Liquid Nitrogen `dd17be27-229a-4236-ae93-29835cf7e1a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount per declared reference flow; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `oecd-frascati-2015`

###### Polypropylene centrifuge tube, 15 mL (`pp_tube`)

Conditional: this exact consumable is actually used. Weigh its polymer mass; volume is the tube capacity, not a conversion to polymer mass. Record cap material separately if different, and instantiate every other actual reagent, specimen, vessel or prototype component as its own atomic exchange.

- Selected flow: Polypropylene centrifuge tube, 15 mL
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount per declared reference flow; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `oecd-frascati-2015`

###### Tensile-test research report (`tensile_report`)

Conditional: an external provider delivers one scoped tensile-test report used to resolve a declared research question. Specify test method, specimen identity, run count and report completeness. A complete provider inventory replaces its embedded power and material rows; ordinary factory acceptance testing is not this exchange.

- Selected flow: Tensile-test research report
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `oecd-frascati-2015`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Used polypropylene centrifuge tube, 15 mL (`pp_tube_waste`)

Conditional: this actual discarded tube leaves the research site. Record measured mass, contamination, residual chemical identity and receiving treatment. Do not label contaminated laboratory polymer as clean recycling feedstock; retained specimens remain stock, not waste.

- Selected flow: Used polypropylene centrifuge tube, 15 mL
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount per declared reference flow; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `oecd-frascati-2015`

##### Elementary flows

###### dinitrogen (`nitrogen_air`)

Conditional: documented molecular nitrogen release to air, unspecified subcompartment, during the represented observation period. Use measured venting or a nitrogen stock balance that separates retained, transferred and released nitrogen. This is neither atmospheric resource extraction nor long-term release nor NO, NO2 or N2O.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable amount per declared reference flow; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `oecd-frascati-2015`

### Process: Evaluation (`evaluation`)

#### Inputs

##### Product flows

###### Alternating current (`evaluation_electricity`)

Meter reproducibility checks, analysis and validation of the research results. Use this identity only for CN grid-average user supply below 1 kV, and separate this meter pool from investigation.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1-0`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Original completion (`consolidation`)

#### Inputs

##### Product flows

###### Alternating current (`consolidation_electricity`)

Meter documentation, final integrity checks and storage through the declared original completion gate. CN grid-average user supply below 1 kV only; perpetual hosting and later downloads are separate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1-0`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Own-account research and development original package (`reference_product_original`)

One complete versioned scientific original: its identified knowledge content, supporting evidence and reuse conditions constitute the declared package. Copies, patents, claims, download events and prospective licensees do not create additional originals.

- Selected flow: Own-account research and development original package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_original`
- Sources: `un-cpc3-originals`

##### Waste flows

##### Elementary flows

### Process: Supporting hardware (`infrastructure`)

#### Inputs

##### Product flows

###### Research computing server (`server_hardware`)

Conditional: this specific owned server supports original creation and its embodied inventory is not already in a purchased service. Bind model, hardware configuration and provider dataset; allocate its device inventory by evidenced time and reserved resource shares. Other workstation, instrument, building or network assets require separate specific rows.

- Selected flow: Research computing server
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Measured attributable amount per declared reference flow; cp_asset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `gsf-sci-1-1-0`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all shared research inputs | First separate project operations and outputs with actual meters, bookings and material issue records. Do not use revenue, patent counts or hoped-for users as default physical shares. Record causal driver and unassigned residual; unknown shared burdens are not zero. | un-cpc3-originals; oecd-frascati-2015; gsf-sci-1-1-0 |
| allocation_compute | shared computing facilities | Use actual measured energy and explainable job/resource/time attribution, including reserved idle capacity and cooling boundary. Energy attribution requires validation against facility meters; storage/traffic metrics are allocation evidence, not universal kWh coefficients. | gsf-sci-1-1-0 |
| allocation_device | server_hardware | Attribute the specific device inventory using reserved time relative to evidenced installed life and reserved resource share. Collect actual device, life and capacity records; no assumed server lifespan. Apply only outside a provider inventory containing the same asset. | gsf-sci-1-1-0 |
| allocation_original | knowledge reuse, failed branches and pilot products | Keep all attributable failed/repeated trials in the bounded original project. Trace reused knowledge and jointly produced originals with a conserved beneficiary ledger; no dilution by unlimited future licenses. Subdivide commercial pilot products and research use using actual physical operation records; unresolved joint attribution needs review. | oecd-frascati-2015; un-cpc3-originals |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_original | consolidation | reference output | acceptance_record | project; original ID; version; content manifest; complete package count; dates; inception buyer/contract facts; intended sale; rights and limitations | Inspect original research records and completion checklist, deduplicate content identity and verify own-account inception and package integrity | item | At completion | Entire creation cycle | All producing sites and partners | per declared reference flow | Signed content manifest and original records, without claiming scientific approval |
| cp_energy | conception; investigation; evaluation; consolidation | electricity | meter_record | stage; meter; timestamps; region; voltage; kWh; attributable workload; idle/cooling boundary; provider inclusions | Calibrated submeters or verified telemetry reconciled to actual facility meter; disclose causal workload allocation and meter coverage | kWh | Each run and project period | Entire creation cycle, including failed trials | Owned facilities; purchased provider separately | per declared reference flow | Calibration, facility reconciliation, workload ledger and missing-time disclosure |
| cp_material | investigation | individual material input | issue_record | specific chemical/material; CAS/composition; state/purity; mass; stock changes; method/run; supplier; loss | Weigh or use traceable mass issue/return records; measure density for volume-to-mass conversion at recorded conditions; link every actual route reagent and specimen | kg | Each experiment and stock reconciliation | All trials and storage within gate | Actual laboratories, field and pilot sites | per declared reference flow | Balances, supply certificates, method/BOM and stock reconciliation |
| cp_service | investigation | external tensile-test report | provider_record | provider; test method; specimens; run count; complete report; utility/material/hardware scope; project assignment | Inspect actual order and report; obtain a matching provider inventory with declared report unit and scope | item | Each delivery | Project creation cycle | Actual provider | per declared reference flow | Provider report and inventory; embedded-flow exclusion ledger |
| cp_waste | investigation | individual waste output | transfer_record | waste identity; polymer mass; contaminant identities; retained stocks; shipment; receiving route | Measure segregated waste and reconcile manifests; record constituent/residual substances and actual off-site treatment, not assumed clean recovery | kg | Each transfer | All project wastes and final stock | Actual site and receiving treatment | per declared reference flow | Weighing and waste manifests; contamination assessment |
| cp_emission | investigation | dinitrogen to air | measurement_record | nitrogen inlet; stock; recovery; transfer; vent; chemical identity; period; air subcompartment | Measure actual vent release or reconcile nitrogen mass balance with measured stocks, retained and transferred amounts; disclose uncertainty and verify immediate air compartment | kg | Each run and stock period | Represented observation period | Actual experimental site | per declared reference flow | Vent or stock records; compartment and chemical check |
| cp_asset | infrastructure | specific server input | asset_record | server model/configuration; upstream inventory; reserved time; installed life; reserved/total capacity; provider duplication check | Inspect asset registers and reservation logs; justify actual installed-life estimate and device dataset match; retain sensitivity for life and capacity assumptions | item | Each asset and project period | Creation cycle and documented asset life | Actual owned server | per declared reference flow | Asset evidence, capacity logs, inventory completeness and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_energy | all electricity rows | Multiply attributable recorded kWh by 3.6 to obtain MJ; retain the same interface and declared original basis. | cp_energy; kWh | MJ | gsf-sci-1-1-0 |
| calculate_project_amount | all inventory rows | Sum only nonduplicated exchange amounts attributable to the one declared original; project subdivision and shared shares must be documented first. The reference output is exactly one complete item. | cp_original; stage records; beneficiary ledger | per declared reference flow | un-cpc3-originals; oecd-frascati-2015; gsf-sci-1-1-0 |
| calculate_nitrogen_release | nitrogen_air | Reconcile actual nitrogen input and opening stock against closing stock, recovered/transferred nitrogen and measured release. Investigate unexplained balance residual instead of declaring it all emitted. | cp_material; cp_emission | kg per declared reference flow | oecd-frascati-2015 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | reference output | Bind actual content/version, own-account inception, completeness and reuse restrictions; count alone does not establish comparable knowledge quality. | cp_original; un-cpc3-originals |
| quality_routes | investigation | Every actual research method maps to complete route-specific atomic inputs, outputs, waste and substantiated releases; distinguish absent from unknown. | method logs; cp_material; cp_waste; cp_emission |
| quality_time | all processes | Use the entire declared creation period including failed trials and site/provider changes; quantify missing periods and disclose representativeness. | dated project and meter records |
| quality_upstream | all inputs | Verify supplier inventories, physical properties, units, regional/temporal matches and hardware scopes; unresolved identity is a candidate gap, not an available approved dataset. | direct identity checks; supplier evidence |
| quality_uncertainty | allocation and quantities | Report meter uncertainty, project attribution residuals, device life sensitivity, reused-original provenance and scope exclusions; no generic yield or energy benchmark. | measured and allocation evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_original | reference_product_original | Reject duplicate copies/claims/downloads counted as new originals or a commissioned service relabelled as own-account. Verify required qualifiers and one complete version. | un-cpc3-originals |
| validate_measurement | all inventory rows | Require consistent per declared reference flow in both languages, linked raw records, numerator units and documented energy conversion. No invented knowledge mass or traffic-to-kWh relationship. | gsf-sci-1-1-0 |
| validate_routes | investigation | Fail dataset completeness when an actual route has unexplained materials, wastes, water fate, direct emissions or trial boundaries. Do not treat conditional absence as a zero without evidence. | oecd-frascati-2015 |
| validate_double_count | shared assets and providers | Reconcile provider/owned scope, stage pools and original beneficiary shares; reject the same electricity, device, purchased report or original creation burden counted twice. | gsf-sci-1-1-0; un-cpc3-originals |
| validate_identity | UUID-bearing and unresolved rows | Verify public flow substance, supply route, reference property, unit group and elementary subcompartment. Blank identities and missing supplier layers must remain explicit; they prevent complete usable dataset claims until resolved. | un-cpc3-originals; oecd-frascati-2015; gsf-sci-1-1-0 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Original-creation foreground inventory for one complete identified scientific knowledge package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | After evidence completion, traceable upstream original input to research, design or product models with explicit reuse attribution |
| excluded_use | Generic impact per patent, money, user or download; approved scientific or legal status; complete lifecycle claim from foreground alone; comparisons of nonequivalent knowledge assets |
| required_metadata | Required reference qualifiers; process/route register; actual sites and periods; all exchange units and collection records; upstream/provider versions and scope; reuse and asset allocation ledger |
| required_quality_disclosure | Unknown identities, missing routes/layers, measurement uncertainty, attribution residuals, device life sensitivity and limited knowledge comparability |
| update_trigger | New original version or knowledge scope; research route change; new provider/device; revised completion cutoff, reuse ledger or measured records |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-originals | official_guidance | UNSD CPC 3.0 explanatory notes, 81400 and 83920: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/81400 ; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/83920 | Economic product boundary, own-account inception and scientific/design distinction; no quantitative LCA factors |
| oecd-frascati-2015 | official_guidance | OECD Frascati Manual 2015, DOI 10.1787/9789264239012-en; §§2.5–2.8, 2.32–2.36, 2.49–2.54 and Table 2.3; printed pp.44–45, 51–52, 60–62 (PDF pp.46–47, 53–54, 62–64) | Research activity, uncertainty, prototypes and pilot/commercial split; statistical definitions are not LCA allocation factors or measured consumptions |
| gsf-sci-1-1-0 | standard | Green Software Foundation, Software Carbon Intensity specification 1.1.0, sections Energy, Embodied emissions, Software boundary, Quantification method: https://sci.greensoftware.foundation/ | Computing energy and asset attribution only; transfer of measured workload principles, not the SCI carbon score as full original LCA |
