---
pcr_id: pcr.business-and-production-services.design-assets.own-account-design-original
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Own-account design original

## 1. Scope and Applicability

This PCR covers own-account original industrial product, aesthetic and graphic design concepts, produced as identifiable intellectual-property assets for intended sale or licensing (un-cpc3-design-originals). Cover their actual creation cycle, including unsuccessful iterations, physical mockups when used, and the versioned original package. The asset is the design concept; paper, files and prototypes are its carriers or development aids. No file format, registration, revenue or license count proves originality or environmental equivalence.

Exclude commissioned design services as the final product, scientific research originals, mineral exploration results, executable software originals, standalone data, brands/franchises, literary/artistic originals, digital copies/downloads and broadcast programmes. Graphic design intended as a reusable design concept differs from a standalone artistic work. Embedded source files and data integral to the design are part of the package; separate software/data products require their own boundary. Mixed scientific R&D and design projects require a deliverable ledger separating knowledge creation from design-concept development; do not duplicate their shared work.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.design-assets.own-account-design-original |
| classification_refs | CPC 3.0 83920 |
| covered_products | Own-account original industrial, aesthetic and graphic design concept assets |
| excluded_products | Commissioned services; research, exploration, software, data, artistic, brand, download and broadcast products |
| representative_product | Own-account design original package |
| production_route | Actual brief → concepts and iterations → applicable mockups/proofs → verification → versioned original completion; route and resources specified |
| market_state | Complete original asset ready for intended sale/licensing; rights and reuse restrictions actually documented |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Create one identified reusable original design concept asset |
| How much | One complete declared original package of one version |
| How well | Declare design objective, product/application, technical/aesthetic/graphic specification, content inventory, originality basis, verification results, unresolved limitations and rights; no safety or legal approval inferred |
| How long or cycle | One actual creation cycle through recorded completion and initial handoff cutoff; no assumed useful life or license duration |
| reference_flow_link | reference_product_original |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Own-account design original package |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | original/project ID; version and package contents; own-account status; design/application type and objective; intended sale/licensing; actual production route; completeness and verification; quality limitations; rights/reuse restrictions; creation dates and cutoff; geography/voltage; shared resource and inherited-original allocation; upstream completeness |

Required qualifiers must accompany the dataset. One package count is a production reference, not a claim that unrelated designs have equivalent utility. Downloads, licenses, file count, bytes, users and prices are not conversions to this reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | item is the factor-1 display alias of public Item(s); cp_original records one complete version. No physical mass is imputed to the design. |
| energy_unit | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | cp_energy collects measured kWh; 1 kWh = 3.6 MJ preserves the identical supply interface. Traffic volume or reservation time alone is not measured electricity. |
| same_reference | all inventory rows | Original package count | item | Inventory amounts and collection aggregates are per declared reference flow. Retain each exchange numerator in its stated unit; do not convert the original into kg or the network into kWh. |

Mass `93a60a56-a3c8-11da-a746-0800200b9a66` references kg unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` references MJ unit group `93a60a57-a3c8-11da-a746-0800200c9a66`.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual own-account design project inception; identify existing designs, tools, research and facilities |
| starting_condition_role | Foreground creation with explicit linked upstream supplies |
| product_classification_scope | CPC 3.0 83920 |
| recursive_input_rule | Record reused original once with its upstream burden and beneficiary ledger; expanded in-house creation replaces the corresponding purchased exchange |
| upstream_dataset_requirement | Actual supplied material state, equipment configuration, region/year, provider scope and waste treatment; unknown layers remain disclosed |
| disclosure | Actual design route, rejected iterations, make/buy split, stocks, cutoff, resource ownership and missing inventories; foreground-only is not complete cradle-to-gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| creation | all processes | Include attributable brief formation, concept development, physical/digital iteration, verification, documentation, version archiving and initial handoff through the defined cutoff. The Double Diamond informs decomposition; it is not a compulsory fixed sequence or energy recipe. | un-cpc3-design-originals; design-council-double-diamond |
| actual_routes | development and verification | Build a route-to-exchange register from actual project records. The PLA and UV proof rows are conditional examples, not the category boundary. Machining, other polymers, drawing media, travel, heating/cooling, water and cleaning must be expanded as individual exchanges when present. Salaries and sale rights are not physical exchanges. | design-council-double-diamond |
| later_use | asset and copies | Separate later manufacturing of designed goods, replication/download, operational use, long-term hosting, network delivery and license administration. Declare initial archive/transfer scope; retain creation burden once in the original ledger, never its entire inventory for every copy. | un-cpc3-design-originals |
| providers | owned and external resources | Owned utilities and hardware are collected separately. A complete purchased rendering, storage or validation service substitutes for its embedded utility/device rows; record actual scoped delivery and provider inventory. Missing provider layers block completeness. | gsf-sci-1-1-0 |
| elementary | direct releases | No direct elementary release is assumed for electronic concept creation. Screen actual printing, mockup, solvent, refrigerant and fuel operations; add each evidenced substance with origin, environmental compartment and state. Utility and hardware upstream emissions stay in upstream datasets. Technical water and waste are not elementary-resource flows. | design-council-double-diamond |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| brief | Brief and design objective | required | All originals | foreground creation | per declared reference flow |
| development | Concept development and iteration | required | All originals; physical/digital route declared | foreground creation | per declared reference flow |
| mockup | Physical mockup fabrication | conditional | Physical mockups actually made | foreground creation | per declared reference flow |
| proof | UV printed proof creation | conditional | In-house UV printed proofs actually made | foreground creation | per declared reference flow |
| verification | Design verification | required | All originals; actual internal/external checks declared | foreground creation | per declared reference flow |
| mastering | Original completion and initial handoff | required | All originals | foreground creation | per declared reference flow |
| support | Shared design infrastructure | conditional | Shared equipment/facilities used | foreground creation | per declared reference flow |

### Process: Brief and design objective (`brief`)

#### Inputs

##### Product flows

###### Alternating current (`brief_electricity`)

Only for measured CN grid-average user supply below 1 kV supporting project definition; other geography/voltage requires its own verified row.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity using cp_energy.
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

### Process: Concept development and iteration (`development`)

#### Inputs

##### Product flows

###### Alternating current (`development_electricity`)

CN below 1 kV only; actual sketching, CAD, graphic editing, rendering and iterative development, including rejected alternatives.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1-0`

###### paper, woodfree, uncoated (`sketch_paper`)

Conditional on actual uncoated woodfree paper used for sketches or paper converting mockups; coated paper and printed proof services need separate identities.

- Selected flow: paper, woodfree, uncoated `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured paper consumption using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `design-council-double-diamond`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Discarded uncoated woodfree sketch paper (`sketch_paper_waste`)

Conditional on discarded sketch sheets crossing to a documented receiver; disclose coatings, contamination, moisture and treatment.

- Selected flow: Discarded uncoated woodfree sketch paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed outgoing paper using cp_material; no assumed recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `design-council-double-diamond`

##### Elementary flows

### Process: Physical mockup fabrication (`mockup`)

#### Inputs

##### Product flows

###### Polylactic acid printing filament (`pla_filament`)

Conditional on actual PLA filament mockup printing. Record polymer origin, grade, pigment/additives, diameter and supplier conversion inventory; bulk PLA resin is not filament.

- Selected flow: Polylactic acid printing filament
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured filament consumption using cp_material, including supports and failed prints.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `design-council-double-diamond`

###### Alternating current (`mockup_electricity`)

Only actual CN below 1 kV mockup production supply; metering includes machine startup and idle attributable to this job.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity using cp_energy.
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

###### Discarded polylactic acid mockup and printing supports (`pla_scrap`)

One PLA waste stream only when discarded. Declare additives, receiver and treatment; retained mockups are project stocks, separately reconciled.

- Selected flow: Discarded polylactic acid mockup and printing supports
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed outgoing PLA waste using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `design-council-double-diamond`

##### Elementary flows

### Process: UV printed proof creation (`proof`)

#### Inputs

##### Product flows

###### Ink (`uv_ink`)

Only actual UV-curing ink for in-house proof creation; specify formulation, color, curing route and safety data. Do not use this identity for ordinary inkjet ink. Add measured curing utilities and supported releases separately.

- Selected flow: Ink `7627af63-d2c2-4245-906f-023847c7739f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured consumed UV ink using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `design-council-double-diamond`

###### Alternating current (`proof_electricity`)

Only actual CN grid-average user supply below 1 kV for proof printing and UV curing; no presumed energy factor.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1-0`

###### paper, woodfree, uncoated (`proof_paper`)

Conditional on this exact substrate used in UV printed proofs; verify supplier coating and curing compatibility; do not substitute this paper for other media.

- Selected flow: paper, woodfree, uncoated `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured paper consumption using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `design-council-double-diamond`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Discarded UV-ink printed woodfree paper proof (`proof_waste`)

Conditional on actual discard; document cured ink composition, moisture, contamination, receiver and waste classification. Retained proofs are reconciled as stock.

- Selected flow: Discarded UV-ink printed woodfree paper proof
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed outgoing proof using cp_material; no automatic recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `design-council-double-diamond`

##### Elementary flows

### Process: Design verification (`verification`)

Record actual checks and acceptance against the declared design objective; internal verification electricity is included in the development meter ledger and tagged to this process without duplication. External dimensional inspection is one conditional purchased input.

#### Inputs

##### Product flows

###### Dimensional inspection report for design mockup (`dimensional_report`)

Conditional on purchased dimensional verification; one scoped report with object, tolerances, method and acceptance. Other outsourced work needs separate atomic deliverables.

- Selected flow: Dimensional inspection report for design mockup
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable accepted report count using cp_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service`
- Sources: `design-council-double-diamond`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Original completion and initial handoff (`mastering`)

#### Inputs

##### Product flows

###### Alternating current (`mastering_electricity`)

Only CN below 1 kV electricity for actual finalization, integrity checks, version archive and initial handoff through declared completion cutoff.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity using cp_energy.
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

###### Own-account design original package (`reference_product_original`)

A complete original concept asset, not each document, licensing transaction, printed copy or download.

- Selected flow: Own-account design original package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_original`
- Sources: `un-cpc3-design-originals`

##### Waste flows

##### Elementary flows

### Process: Shared design infrastructure (`support`)

#### Inputs

##### Product flows

###### Assembled ADP system unit (`design_computer`)

Conditional on actual configured unpackaged system units used for this project. Preserve Mass: weigh the identified unit; attribute its embodied inventory by observed reservation and evidenced device life. Displays and peripherals are separate; a matching hardware inventory is required.

- Selected flow: Assembled ADP system unit `65153264-5c6b-406f-b113-7d5ad591591b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured hardware mass using cp_device; record allocation evidence and no assumed lifetime.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_device`
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
| allocation_project | iterations and multiple originals | Assign directly traceable tasks and supplies to their original first. Retain rejected alternatives supporting the completed design. Split independently delivered originals by measured causal work/resource records; reconcile shares to the whole pool. Count division is allowed only for demonstrated equivalent beneficiaries, not assumed equal designs or sale prices. An abandoned project without an output must be separately disclosed rather than silently removed. | un-cpc3-design-originals; design-council-double-diamond |
| allocation_shared | electricity and infrastructure | Meter each job where possible. For shared supplies use a documented reservation/operation/idle ledger and measured load attribution; reconcile to facility meters. Do not turn CPU hours, stored GB or transferred GB into electricity without a measured device/provider relationship. Device inventory shares require observed reserved time/resources and evidenced device service life, with sensitivity and residual disclosure. | gsf-sci-1-1-0 |
| allocation_inherited | reused design and research | Identify prior originals and purchased evidence; keep a source-to-beneficiary burden ledger. Separate additional version work from inherited work. A copy is not another original and no unsubstantiated lifetime copy count is a denominator. Retained prototype stock, sold physical prototypes and waste transfers require separate quantities and downstream boundaries; no automatic avoided-product credit. | un-cpc3-design-originals |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_original | mastering | reference output | acceptance_record | original ID; project; version; content list; acceptance; rights; dates; own-account status | Inspect versioned master, design brief, verification results and signed completeness record; count the complete package once. | item | At completion and each new version | Full actual creation cycle | All project sites and providers | per declared reference flow | Content integrity; acceptance and rights evidence |
| cp_energy | brief; development; mockup; proof; mastering | electricity | meter_record | meter ID; kWh; timestamps; site; voltage; stage/job; idle; share; uncertainty | Read calibrated plug/submeters and facility bills; reconcile job records and shared attributable load, including actual supporting cooling and transfer through cutoff. Separate provider-owned power. | kWh | Each job and metering interval | Complete creation cycle | Actual owned supply interfaces | per declared reference flow | Calibration; meter reconciliation; allocation ledger |
| cp_material | development; mockup; proof | material and separate waste rows | weighing_record | row; batch; grade; composition; mass; opening/closing stock; receipts; waste destination | Weigh each material and separate waste stream on calibrated scales; reconcile consumption and stock with sketches, proofs, retained models, failed trials and receiver tickets. | kg | Each batch and waste dispatch | Full creation including failures | Declared actual route | per declared reference flow | Scale calibration; supplier grade; stock balance; receiver evidence |
| cp_service | verification | purchased dimensional report | delivery_record | report ID; mockup; method; tolerance; test date; acceptance; provider inventory; included resources | Inspect accepted dimensional report and provider inventory; allocate its actual scoped work to the declared original and exclude already included utilities. | item | Each delivery | Actual verification period | Declared provider and object | per declared reference flow | Acceptance; object identity; provider completeness |
| cp_device | support | configured system unit | asset_record | asset/configuration ID; measured net mass; reserved time; capacity share; device life evidence; upstream scope | Weigh the configured unpackaged unit or obtain traceable measured mass for that configuration; reconcile device reservation and service-life records with project logs and upstream hardware inventory. | kg | Each asset and project interval | Actual project and equipment service periods | Used configured equipment only | per declared reference flow | Mass traceability; reservation records; life sensitivity; separate peripherals |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_energy | all electricity rows | Multiply attributable measured kWh by 3.6 to obtain MJ at the identical interface and original basis. | cp_energy; kWh | MJ | gsf-sci-1-1-0 |
| calculate_original_inventory | all inventory rows | Sum the nonduplicated exchange amounts already attributed to the one declared original. Retain original numerator units; the accepted reference output is exactly 1 item. Establish shared-resource shares before aggregation and reconcile all stage pools. | cp_original; stage records; attribution ledger | per declared reference flow | un-cpc3-design-originals; design-council-double-diamond; gsf-sci-1-1-0 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_original | reference output | Bind the actual design objective, original/version, completeness, validation limitations and reuse rights. Related designs are not comparable solely by item count. | cp_original; un-cpc3-design-originals |
| quality_route | all processes | Map every actual route to atomic supplies, stocks, waste and supported direct releases; distinguish absent, measured zero and unknown. Do not omit physical design work merely because the final asset is digital. | cp_material; project route register; design-council-double-diamond |
| quality_time | project resources | Use complete actual dates, failed iterations and site/provider changes. Quantify missing periods and representativeness; no default energy, yield, recipe or life. | cp_energy; cp_original |
| quality_identity | upstream and selected flows | Match state, substance, composition, supply route, geography, reference property and unit group; record uncertainty, device allocation sensitivity and unresolved identities. | cp_device; supplier evidence; public identities |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_original | reference_product_original | Verify own-account design-concept asset, one complete version and all qualifiers; reject commissioned service, research result, software product or each license/copy counted as the original. | un-cpc3-design-originals |
| validate_units | all inventory rows | Require linked protocols, identical per declared reference flow basis in both languages and traceable numerator units. Never infer design mass or traffic-to-energy conversion. | gsf-sci-1-1-0 |
| validate_completeness | actual design routes | Incomplete route registers, unknown provider layers, unresolved physical supplies or unsupported direct releases block dataset completeness. A conditionally absent row needs occurrence evidence; mandatory internal design verification cannot be replaced by omitting the optional purchased report. | design-council-double-diamond |
| validate_attribution | shared and inherited resources | Reconcile project stage pools, supplier/owned interfaces, asset allocation and beneficiary ledgers. Reject duplicated original burden, device inventory or electricity and unproven price allocation. | un-cpc3-design-originals; gsf-sci-1-1-0 |
| validate_identity | selected flows | Recheck actual public identity, reference property and unit group; for elementary exchanges match origin and environmental subcompartment. Blank identities remain explicit candidate gaps and prevent a complete usable dataset claim until resolved. | un-cpc3-design-originals |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared original creation inventory with transparent upstream links and reuse ledger; comparison only for equivalent objectives, specification, rights and boundaries |
| excluded_use | Standalone downloads, software operation, broadcast, research or service inventories; complete cradle-to-gate without all upstream layers; legal, safety or environmental superiority approval |
| required_metadata | Original/project ID; version; design type and objective; own-account scope; actual route; rights; acceptance; geography; dates; units; allocation; cutoff; upstream identities |
| required_quality_disclosure | Unknown suppliers/identities; missing periods; omitted routes; instrument uncertainty; shared allocation and inherited burden sensitivity; representativeness limits |
| update_trigger | New original version or changed route, specification, provider, device allocation, supply region or boundary; preserve prior version ledger |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-design-originals | official_guidance | UNSD, CPC Version 3.0, 83920 Design originals — https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/83920 | Explanatory note: own-account industrial/aesthetic/graphic concept assets intended for sale/licensing; classification only, no inventory values |
| design-council-double-diamond | official_guidance | Design Council, The Double Diamond — https://www.designcouncil.org.uk/our-resources/the-double-diamond/ | Discover/define/develop/deliver and iterative testing, page headings and process graphic; process framing only, no compulsory factory route, recipe or factor |
| gsf-sci-1-1-0 | standard | Green Software Foundation, Software Carbon Intensity Specification 1.1.0 — https://sci.greensoftware.foundation/ | Energy, Embodied emissions and Software boundary sections inform computing interfaces and measured allocation; software-carbon scope only, not a complete multi-impact design PCR or default factor |
