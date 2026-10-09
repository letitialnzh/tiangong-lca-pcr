---
pcr_id: pcr.business-and-production-services.brand-assets.registered-trademark-franchise-original
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Own-account registered trademark and franchise original


## 1. Scope and Applicability

This PCR covers own-account original trademarks and franchises: legally registered ownership of an identified brand name, produced with intent to benefit from allowing others to use it (un-cpc3-trademarks). Cover actual registered word, graphic and other signs, and original distribution, production/processing or business-format franchise assets. The asset is distinct from each license. Use one complete package with specified version, registration scope and system content as production reference; rights value, revenue, users, downloads, filing counts and invented physical mass are not reference quantities.

Exclude licensing services, R&D leading to the marked product/concept, marketing-channel advice and routine rights administration; also separate software, data, design, artistic originals and copies/broadcast products. Graphic-design and R&D originals can be actual inputs but cannot substitute for ownership and franchise-system formation methodology. Registration establishes identity; environmental burdens arise from actual activities, not the legal right itself. Define the formation period from real records and include unsuccessful attempts, rework and attributable initial brand establishment. Later routine operations, promotion, licensing support and franchisee goods production have separate boundaries. A registration button press alone cannot represent complete asset formation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.brand-assets.registered-trademark-franchise-original |
| classification_refs | CPC 3.0 83960 |
| covered_products | Own-account registered original trademarks and franchise assets; actual registered signs and franchise types |
| excluded_products | Licensing, rights administration, channel advice, R&D services; separate design/software/data/art originals and copies |
| representative_product | Registered trademark and franchise original asset package |
| production_route | Actual asset definition/clearance → sign/brand and applicable franchise-system formation → registration/dossier → version completion/initial handoff; actual iterations and outsourcing recorded |
| market_state | Complete versioned original with legally registered ownership for stated benefit-from-others-use intent; no environmental or compliance approval inferred |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Form one identifiable original trademark or franchise asset |
| How much | One completed asset package of specified version and registration scope |
| How well | Declare owner, sign, territories/classes, registration evidence, originality provenance, complete content, franchise type and know-how/manual conditions, use/reuse rights and limitations |
| How long or cycle | One actual formation cycle through registration and initial handoff cutoff; no default commercial life or license duration |
| reference_flow_link | reference_product_original |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Registered trademark and franchise original asset package |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | asset/project ID; version and complete content inventory; own-account and others-use intent; registered owner/sign/territories/goods-services classes/status evidence; franchise type and system contents; original/inherited provenance; rights and reuse restrictions; formation dates/cutoff; iteration and failure attribution; actual geography/voltage; facility/outsourcing/initial delivery boundary; upstream completeness |


Required qualifiers accompany the dataset. One item counts the declared complete asset package; item is the factor-1 alias of public Item(s). It does not establish functional equivalence across brands, class portfolios or franchise systems. Several filings may belong to one package; filing count cannot replace output count.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_asset accepts one complete specified version against content and registration evidence; item is the factor-1 display alias of Item(s). |
| same_reference | all inventory rows | Asset package count | item | Every exchange and collection aggregate is per declared reference flow; retain actual numerator units, with no monetary, license, byte or mass conversion of the asset. |
| energy_unit | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | cp_energy collects actual kWh; 1 kWh = 3.6 MJ preserves the supply interface. Reserved time or network GB alone cannot be treated as electricity. |
| hardware_mass | portable_computer_share | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_hardware verifies the same complete configuration with a calibrated scale or traceable net-mass records, excluding transport packaging; price cannot establish equipment share. |


Mass references kg unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; Net calorific value references MJ unit group `93a60a57-a3c8-11da-a746-0800200c9a66`. Number of items is not interchangeable with either physical quantity.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual original-asset formation project inception; declare inherited brand/design/R&D, tools/equipment and stocks |
| starting_condition_role | Foreground asset formation with explicit upstream supplies |
| product_classification_scope | CPC 3.0 83960 |
| recursive_input_rule | Link inherited trademark/franchise original once with its upstream burden and beneficiary ledger; expanded in-house burden replaces the same input exchange |
| upstream_dataset_requirement | Actual supply state, region/year, device configuration, supplier delivery/included scope and waste receiver/treatment; missing layers are not zero |
| disclosure | Asset contents, registration scope, formation-period activity attribution, failed attempts, make/buy scope, initial storage/transfer and facility omissions; foreground boundary is not complete cradle-to-gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| formation | all processes | Include actual specification/clearance, sign and brand establishment, applicable franchise-system know-how formation, registration, version assembly and initial handoff. Project, registration and acceptance originals define the cutoff; electronic filing alone is not a default boundary. | un-cpc3-trademarks; wipo-franchise-2019 |
| routes | all actual routes | Build a complete activity-to-exchange ledger. Paper, manual/campaign delivery and portable computing rows are conditional concrete rows, not a narrowed category. Actual printing, other sign media, tests, travel, heating/cooling, water, servers, premises and outsourced technosphere deliveries require separate applicable atomic rows; unexpanded operations prohibit completeness. | un-cpc3-trademarks; wipo-franchise-2019 |
| later_activities | asset and later use | Separate subsequent licensing/rights administration, routine promotion, franchisee training/support, copying/downloads, long-term hosting, outlet operation, marked-goods manufacture and consumption. Initial handoff declares actual storage/network activity; network GB is not converted to default kWh. Preserve original formation burden once. | un-cpc3-trademarks; wipo-franchise-2019 |
| provider_scope | owned and provider resources | An actual scoped purchased delivery is one technosphere service product; obtain activity and upstream evidence. Do not duplicate embedded utility/device/production in owned rows. Fees or report counts without supplier inventory cannot establish complete upstream environmental results. | gsf-sci-1-1-0 |
| direct_releases | elementary flows | Do not presume direct releases in electronic asset formation. Screen actual combustion, printing, material processing, refrigerant leakage and wastewater operations; instantiate substance, fossil/biogenic origin, compartment/subcompartment, state and quantity only with measurement or reliable factor evidence. Separate technosphere water/waste from resource water; utility/device upstream emissions remain upstream. | gsf-sci-1-1-0 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| definition | Asset specification and clearance | required | All assets; external clearance only when purchased | foreground asset formation | per declared reference flow |
| development | Brand and franchise asset formation | required | All assets; actual identity, campaign and franchise-system route declared | foreground asset formation | per declared reference flow |
| registration | Ownership registration and dossier | required | Actual legal ownership registration; paper route conditional | foreground asset formation | per declared reference flow |
| completion | Asset completion and initial handoff | required | All assets through specified version and cutoff | foreground asset formation | per declared reference flow |
| support | Shared computing infrastructure | conditional | Owned equipment used in creation; provider-owned hardware stays in provider scope | foreground asset formation | per declared reference flow |


### Process: Asset specification and clearance (`definition`)

#### Inputs

##### Product flows

###### Alternating current (`definition_electricity`)

Only for actual CN grid-average user supply below 1 kV for this stage. Meter workstation, initial storage/transfer and attributable cooling as applicable; prevent duplicate shared-meter entries. Other location or voltage needs a different verified exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity converted from kWh to MJ per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1-0`

###### Trademark clearance search report (`clearance_report`)

Conditional purchased report for the declared sign, goods/services classes and territories. It is one delivered report with provider scope, not a guarantee of registrability or a royalty payment.

- Selected flow: Trademark clearance search report
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count actual scoped reports attributable per declared reference flow; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `un-cpc3-trademarks`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Brand and franchise asset formation (`development`)

#### Inputs

##### Product flows

###### Alternating current (`development_electricity`)

Only for actual CN grid-average user supply below 1 kV for this stage. Meter workstation, initial storage/transfer and attributable cooling as applicable; prevent duplicate shared-meter entries. Other location or voltage needs a different verified exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity converted from kWh to MJ per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1-0`

###### Original graphic identity design package (`design_original_input`)

Conditional separately acquired or previously created graphic original used to form the brand. Specify creator, version and reuse share. In-house design expanded here replaces this exchange. Word, sound or other marks do not require graphic design.

- Selected flow: Original graphic identity design package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Recorded original-package share per declared reference flow; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `un-cpc3-trademarks`

###### Brand-establishment campaign production delivery (`campaign_delivery`)

Conditional actual outsourced campaign production delivery during original formation, with exact media, content, acceptance and embedded production scope. Later routine promotion is separately bounded. Distribution, travel or venue operation omitted by the supplier must be separate actual atomic exchanges.

- Selected flow: Brand-establishment campaign production delivery
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable delivered campaign fraction per declared reference flow; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `un-cpc3-trademarks`

###### Franchise operating manual preparation delivery (`manual_delivery`)

Conditional outsourced preparation of the identified versioned operating manual for a business-format franchise. A distribution or processing franchise declares its actual know-how/system specification instead; the manual is not universal. In-house preparation belongs in development electricity and actual resource rows.

- Selected flow: Franchise operating manual preparation delivery
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual accepted manual-delivery share per declared reference flow; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `wipo-franchise-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Ownership registration and dossier (`registration`)

#### Inputs

##### Product flows

###### Alternating current (`registration_electricity`)

Only for actual CN grid-average user supply below 1 kV for this stage. Meter workstation, initial storage/transfer and attributable cooling as applicable; prevent duplicate shared-meter entries. Other location or voltage needs a different verified exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity converted from kWh to MJ per declared reference flow; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1-0`

###### Trademark ownership registration examination service (`registration_examination`)

Actual delivered examination of one recorded filing in its authority, territory and goods/services classes, including unsuccessful filings attributable to this formation cycle. Fees are not exchange quantities. Retain underlying authority/supplier activity evidence; registration certificate establishes asset identity, not environmental completeness.

- Selected flow: Trademark ownership registration examination service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Count actual examined filings per declared reference flow; cp_services.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `un-cpc3-trademarks`

###### paper, woodfree, uncoated (`dossier_paper`)

Conditional uncoated woodfree paper supplied as a dossier insert/converting input. Measure net consumed mass and stock change; printed documents, coated paper or finished stationery are separate identities. Every actual ink/printing service must be added separately.

- Selected flow: paper, woodfree, uncoated `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net consumed paper per declared reference flow; cp_paper.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paper`
- Sources: `un-cpc3-trademarks`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Discarded unprinted uncoated woodfree paper offcuts (`unprinted_paper_scrap`)

Conditional offcuts from actual paper preparation, with no ink, adhesive or confidential printed content. Weigh and record receiver/treatment; printed or contaminated waste is a different row. Waste-paper identity is not inferred from paper-input identity.

- Selected flow: Discarded unprinted uncoated woodfree paper offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transferred offcuts per declared reference flow; cp_paper.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paper`
- Sources: `un-cpc3-trademarks`

##### Elementary flows

### Process: Asset completion and initial handoff (`completion`)

#### Inputs

##### Product flows

###### Alternating current (`completion_electricity`)

Only for actual CN grid-average user supply below 1 kV for this stage. Meter workstation, initial storage/transfer and attributable cooling as applicable; prevent duplicate shared-meter entries. Other location or voltage needs a different verified exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity converted from kWh to MJ per declared reference flow; cp_energy.
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

###### Registered trademark and franchise original asset package (`reference_product_original`)

One complete own-account original asset with legally registered brand ownership and the declared franchise/system content when applicable. Record ownership, covered territory/classes, package inventory and version; files, registrations or licensees are not additional asset output counts.

- Selected flow: Registered trademark and franchise original asset package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `un-cpc3-trademarks`; `wipo-franchise-2019`

##### Waste flows

##### Elementary flows

### Process: Shared computing infrastructure (`support`)

#### Inputs

##### Product flows

###### Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks (`portable_computer_share`)

Conditional complete owned portable computer of the verified manufactured, at-plant identity and measured configuration mass not exceeding 10 kg. Allocate actual embodied manufacture using documented device time/resource share and supported useful allocation interval; no default mass or life. Include supply transport and retirement separately when within study scope. Server and peripheral identities are separate.

- Selected flow: Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks `c4cb6070-944d-41be-a231-a0a2b9477174`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net device mass multiplied by evidenced attributed equipment fraction per declared reference flow; cp_hardware.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware`
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
| shared_activity | shared formation activities | First subdivide by project/stage job records, assigning failed attempts and rework. For inseparable shared resources use explainable physical workload/time/occupancy evidence, reconciling full-period totals and all beneficiaries; no invented price or royalty allocation. This is a foreground collection requirement, not a numeric share prescribed by CPC/WIPO. | gsf-sci-1-1-0 |
| asset_lineage | inherited originals and co-products | Record versions, burden provenance and all beneficiary assets for inherited design/R&D/brand originals; shares must be auditable and cannot exceed source burden. Multiple registration territories are not automatically multiple products; only independently accepted deliverables are co-products. Any necessary economic allocation requires a separate justified sensitivity study, with no default price weights. | un-cpc3-trademarks |
| copies | licenses and copies | Do not charge the complete original burden again to every license, download or franchisee. Downstream attribution separately declares actual use/reuse basis, period, scope and uncertainty; projected future users are not this production output. No default avoided-burden credit for paper scrap. | un-cpc3-trademarks |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_asset | completion | reference_product_original | acceptance ledger | asset/project ID; version; contents; owner/sign/territories/classes; registration originals; own-account; handoff/cutoff; franchise content; failed attempts | Accept each package against registration originals and complete contents, checking same project/version; files, registrations or licenses are not output count | item | each acceptance | complete actual formation cycle | owner and actual participating sites | per declared reference flow | originals, content hashes, acceptance and change ledger |
| cp_energy | definition; development; registration; completion | electricity rows | meter and job records | site/region; voltage; stage/job ID; times; measured kWh; cooling/storage/transfer scope; master meter; attribution basis | Use calibrated meters, workstation measurements or provider measured electricity; reconcile all attributed shares against jobs. Reservation alone does not replace measured electricity | kWh | each metering period and job | same complete formation period and initial handoff | actual sites and stated provider interfaces | per declared reference flow | calibration, master-meter reconciliation, allocation residuals and uncertainty |
| cp_services | definition; development; registration | specific purchased deliveries | delivery and provider activity | report/campaign/manual/design/filing ID; version; scope; acceptance; attributed fraction; embedded energy/hardware; supplier upstream; duplicates | Verify each scoped actual delivery and supplier primary activity; count/attribute each service type separately, with no environmental quantity inferred from fees | item | each delivery | complete formation cycle including failed examination | actual provider/authority boundary | per declared reference flow | contract delivery specification, originals, supplier inventory and upstream gaps |
| cp_paper | registration | dossier_paper; unprinted_paper_scrap | material and handoff weighing | paper type/state; opening/closing stocks; withdrawals; consumed kg; unprinted offcuts kg; receiver/treatment; other contaminated paper | Verify actual paper and insert/converting state; separately measure consumption and clean offcuts using calibrated scales or traceable net-mass records; instantiate other ink/waste separately | kg | each batch and stock period | same formation period | actual dossier preparation and waste handoff | per declared reference flow | weighing, stocks/bills and receiver/treatment evidence |
| cp_hardware | support | portable_computer_share | equipment mass and usage ledger | device ID/configuration; calibrated net mass kg; use; actual occupied/reserved job time; available resources; evidenced installed service life or justified projected service life; cumulative manufacture-share ledger; all beneficiary jobs | Weigh the same complete configuration or read traceable net-mass records, excluding packaging, verifying at most 10 kg; derive equipment share from time/resources and evidenced allocation interval, reconciling all jobs | kg | device changes and each job period | formation and equipment allocation periods separately declared | owned equipment; provider embedded hardware excluded from duplicate entry | per declared reference flow | weighing, configuration, hardware production dataset, interval evidence and share reconciliation |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| meter_conversion | definition_electricity; development_electricity; registration_electricity; completion_electricity | Multiply measured attributable kWh per declared reference flow by 3.6 MJ/kWh. Retain master-meter/load records; do not duplicate cooling or premises electricity. | cp_energy | MJ per declared reference flow | gsf-sci-1-1-0 |
| equipment_share | portable_computer_share | Multiply measured same-configuration net mass by evidenced time share and resource share to obtain attributable kg per declared reference flow. Device ledger supports interval and resource share without duplicates; do not copy SCI example lifetime or treat carbon factors as mass. | cp_hardware | equipment kg per declared reference flow | gsf-sci-1-1-0 |
| equipment_life_conservation | portable_computer_share | The allocation interval for manufacture must cover evidenced installed service life, or a justified projected life with sensitivity and later reconciliation. Reconcile cumulative manufacture shares across all projects and periods to the same device inventory; total shares must not exceed one. Do not reset full manufacture burden at each project/year. Unknown life or resource evidence requires review. | cp_hardware | auditable cumulative equipment allocation | gsf-sci-1-1-0 |
| delivered_scope | clearance_report; design_original_input; campaign_delivery; manual_delivery; registration_examination | For each scoped delivery separately record actual count and evidenced attribution fraction, aggregating per declared reference flow; unlike service counts never become one exchange. | cp_services | each service item per declared reference flow | un-cpc3-trademarks |
| paper_records | dossier_paper; unprinted_paper_scrap | Reconcile consumption with net withdrawals/stocks and offcuts with handoff weights separately, each per declared reference flow; reconcile document carriers, losses and returns without an invented loss rate. | cp_paper | each paper exchange kg per declared reference flow | un-cpc3-trademarks |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| asset_identity | reference_product_original | Match registration evidence and complete contents to same version; an application draft without registered ownership is not the target finished asset. No health, commercial-success or compliance approval inferred. | cp_asset |
| complete_routes | all processes | Reconcile every actual activity route with atomic exchanges; explicitly flag missing supplier, facility, transport, physical-production or elementary-flow evidence, not zero. | cp_energy; cp_services; cp_paper; cp_hardware |
| representation | dataset | Declare actual year, region, project type, stage coverage, excluded layers and uncertainty; one asset does not represent the entire brand/franchise sector. | project and provider originals |
| rights_reuse | inherited assets and deliveries | Disclose use/reuse conditions and copyright/confidentiality limits; license share cannot prove environmental equivalence. Sensitive primary ledgers may remain with owner but must be reviewable. | cp_asset; cp_services |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_integrity | reference_product_original | Verify one complete registered asset version/contents/ownership and all qualifiers; reference-product name must equal finished-output row. Unresolved identity and scientific review cannot be represented as approval. | un-cpc3-trademarks |
| inventory_completeness | all inventory rows | Verify each single exchange, direction, type, property, unit, condition and protocol, retaining bilingual row_id. CN low-voltage electricity requires actual matching interface; check device mass and paper state; public Number of items cannot be rewritten as Mass. | gsf-sci-1-1-0 |
| no_double_count | activities and original ledger | Reconcile shared electricity, equipment share, embedded provider scope, failures and inherited originals; separate later licensing, copying or goods production from original-asset production. | un-cpc3-trademarks; gsf-sci-1-1-0 |
| bounded_claim | completeness claims | Retain gaps and review when actual routes are unexpanded, supplier upstream is missing, identities/conditions mismatch or measurement relationships are unproved; prohibit complete cradle-to-gate claims. Actual direct releases require substance/origin/compartment evidence, neither assumed zero nor invented mandatory emissions. | un-cpc3-trademarks; wipo-franchise-2019 |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Declared original trademark/franchise formation foreground dataset with explicit upstream layers |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Specific asset-formation input where contents/version/registration scope and use conditions match; downstream separately justifies use attribution |
| excluded_use | Unmatched brand comparisons; repeated original burden per license/download; application-only treated as finished; franchise goods/outlet operation footprints; complete cradle-to-gate with missing layers |
| required_metadata | All reference qualifiers; actual formation period/cutoff; route/activity/exchange ledger; original provenance/reuse; collection protocols and supplier interfaces; registration/acceptance originals |
| required_quality_disclosure | Coverage/gaps, unresolved identities, measurement/allocation uncertainty, supplier layers, representativeness, rights limits, release screening and facility/delivery exclusions |
| update_trigger | Changed asset version, registered territory/classes/owner, franchise content, actual formation route, supplier, grid, equipment or reuse evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-trademarks | official_guidance | UNSD, CPC3.0 subclass83960, explanatory inclusion/note/exclusions; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/83960 | Own-account registered ownership identity and exclusions; no LCA quantities or approval |
| wipo-franchise-2019 | official_guidance | WIPO, In Good Company: Managing Intellectual Property Issues in Franchising (2019), publication1035, printed pp11–12 (PDF13–14); https://www.wipo.int/edocs/pubdocs/en/sme/1035/wipo_pub_1035.pdf | Historical conceptual franchise types and business-format manual/control conditions; no monetary/lifetime/current-law conclusions adopted |
| gsf-sci-1-1-0 | standard | Green Software Foundation, Software Carbon Intensity Specification1.1.0, Energy and Embodied emissions; https://sci.greensoftware.foundation/ | Actual computing energy and hardware time/resource attribution only; no default numbers or whole-asset LCA claim |
