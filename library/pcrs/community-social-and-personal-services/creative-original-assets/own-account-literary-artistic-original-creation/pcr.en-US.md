---
pcr_id: pcr.community-social-and-personal-services.creative-original-assets.own-account-literary-artistic-original-creation
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account literary and artistic original creation

## 1. Scope and Applicability

This PCR covers creation of completed own-account book manuscripts, original musical scores and other eligible artistic originals excluding performing artists, painters and sculptors. The original is an identified expression intended for prospective sale without an existing contract or known buyer. It is not its later copies, a recording master or a generic writing-service hour. The real work may be fixed digitally or physically; no medium or genre is imposed. Source: `un-cpc-creative-originals`.

Commissioned creation services, performer outputs, paintings/sculptures, separately classified film/TV/radio and sound-recording originals, software/data/design/brand/research/exploration originals and licence-only transactions are outside the reference category. Artistic works not explicitly named in the classification require documented creator/output eligibility; the label “art” alone does not establish applicability. For a revised original disclose the baseline and whether the dataset covers its full creation or only incremental revision. Sources: `un-cpc-creative-originals`; `usco-composition`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.community-social-and-personal-services.creative-original-assets.own-account-literary-artistic-original-creation |
| classification_refs | CPC 3.0 96330; classification context only, not an accepted mapping |
| covered_products | Own-account book manuscripts, original musical scores and other eligible nonperforming artistic originals, with a completed identifiable expression |
| excluded_products | Commissioned writing/composition services; performer outputs; paintings and sculptures; sound-recording masters; film/TV/radio programme masters; copies/downloads; software, data, design, brand, R&D and exploration originals |
| representative_product | One identified complete own-account original of the declared genre/version; a manuscript or score is an example, not an average for all art |
| production_route | Project conception and source research → original drafting/composing/creating → actual revisions → expression fixation and verification → accepted original preservation and one initial handover when applicable |
| market_state | Completed original available for prospective sale/reuse, created without a prior contract or known buyer; medium and rights conditions declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared original literary, musical or eligible artistic expression for subsequent reproduction or exploitation |
| How much | One complete identified original; not one printed copy, licence or download |
| How well | Completeness and readability/playability or genre-specific acceptance criteria evidenced by the actual creator/recipient record; no universal aesthetic or legal approval |
| How long or cycle | One declared creation interval ending when both acceptance of this original/version and its actual initial handover are complete, using the later actual date. If no initial handover applies, retain documented applicability and end at acceptance. Include attributable preservation/support between the two dates; no default asset life or later use duration. |
| reference_flow_link | `creative_original_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed own-account creative original |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | original identifier; genre and intended function; creator and own-account provenance; version/date; expression medium and file or physical-object inventory; complete scope; acceptance criteria; first creation versus revision; source provenance and reuse permissions; rights and intended exploitation conditions; sites and creation interval; initial handover boundary |

The unit alias item means exactly one Item(s) of the verified Units of items group; no kilogram or byte conversion defines the creative work. Declare every qualifier and actual completion evidence. Multiple files, backups and formats can embody one original; the medium mass is a separate input.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One completed original is the count basis; cp_original verifies the same version/completeness throughout all stages. Revenue, licences, users, pages and GB are descriptors, never substitute reference amounts. |
| `electricity_energy` | all electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public Net calorific value property; 1 kWh = 3.6 MJ exactly. Measured job/storage/transfer attribution precedes conversion; network volume is not energy. |
| `apparatus_mass` | apparatus inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Actual device mass supports upstream manufacture attribution only. It does not redefine the item reference or imply a default device/configuration/lifetime. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented own-account project initiation and actual source/previous-original baseline |
| starting_condition_role | Separates creation of this expression from upstream originals, general unrelated activity and later exploitation |
| product_classification_scope | Own-account creative original; exclude agreed-buyer commissioned creation and separately classified original assets |
| recursive_input_rule | Identify reused earlier originals once with their upstream dataset and declared attribution; do not recreate their historical creative work within this project |
| upstream_dataset_requirement | Compatible electricity, actual apparatus manufacture, stationery manufacture, earlier originals and supplier editing datasets; waste treatment separately linked |
| disclosure | Creator/project/version; real sites and dates; own-account intention; analog/digital route; supplier and apparatus coverage; shared-resource attribution; actual missing stages and downstream exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_creation` | all creation stages | Include project-specific research, drafts, composing/notation, eligible artistic creation, revision, trials and rejected drafts, fixation, integrity/content verification, preservation and attributable support through completion of both acceptance and actual initial original handover, including the intervening period. The real medium governs processes; no mandatory printing, recording or datacenter. | `un-cpc-creative-originals`; `usco-fixation` |
| `boundary_distinct_outputs` | original versus exploitation | Keep composition separate from the derived sound-recording master; separate later publication/printing, consumer copies/downloads, broadcast, public performance and ongoing archive/use beyond the declared initial-handover boundary. Preservation/storage and support necessary to complete that initial handover remain included through the later actual acceptance/handover date; concurrent downstream exploitation remains separately scoped. Original creation is charged once, with explicit downstream reuse attribution, never fully to every copy. | `un-cpc-creative-originals`; `usco-composition` |
| `boundary_upstream` | utilities apparatus suppliers | This is a declared original-creation foreground boundary. Compatible upstream inputs are needed before a cradle-to-gate claim. Include supporting workstation/cloud/storage/network and room utilities on their actual measured boundaries. Expand provider inventories into atomic exchanges or use one specific supplier delivery dataset; never both. |  |
| `boundary_extensions` | actual route completeness | Add a separate atomic row for each actual ink, pigment, film, photographic paper, substrate, adhesive, display, storage device, instrument, cooling utility, fuel, transport or waste not represented here. Record each chemical and environmental medium separately. No automatic onsite combustion emission arises from purchased electricity. Missing material exchanges make the dataset incomplete; zero requires absence evidence. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `conception` | Conception and project-specific source research | required | Actual project preparation; no prescribed research method | foreground creation or support | per declared reference flow |
| `creation` | Original composition, drafting and revision | required | The actual author/composer/eligible artist route, including unsuccessful drafts | foreground creation or support | per declared reference flow |
| `fixation` | Fixation, verification and original completion | required | One complete version with original acceptance and retained primary expression | foreground creation or support | per declared reference flow |
| `apparatus` | Attributable creation apparatus | conditional | Actual devices used in the declared creation interval; no assumed studio or datacenter | foreground creation or support | per declared reference flow |

### Process: Conception and project-specific source research (`conception`)

#### Inputs

##### Product flows

###### Alternating current (`conception_electricity_lv`)

Only measured CN grid-average user supply below 1 kV; identify its meter and site.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity for this stage in kWh × 3.6 MJ/kWh; cp_energy separates actual creation jobs, supporting storage and initial original handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1`

###### Alternating current (`conception_electricity_mv`)

Only measured CN grid-average user supply at 1–35 kV; no duplicate low-voltage delivery.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity for this stage in kWh × 3.6 MJ/kWh; cp_energy separates actual creation jobs, supporting storage and initial original handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1`

###### Alternating current (`conception_electricity_site`)

Actual other grid, voltage or non-grid electricity. Match a separate supplier identity; do not force a CN UUID.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity for this stage in kWh × 3.6 MJ/kWh; cp_energy separates actual creation jobs, supporting storage and initial original handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1`

##### Waste flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

##### Elementary flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

#### Outputs

##### Product flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

##### Waste flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

##### Elementary flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

### Process: Original composition, drafting and revision (`creation`)

#### Inputs

##### Product flows

###### Alternating current (`creation_electricity_lv`)

Only measured CN grid-average user supply below 1 kV; identify its meter and site.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity for this stage in kWh × 3.6 MJ/kWh; cp_energy_creation separates actual creation jobs, supporting storage and initial original handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_creation`
- Sources: `gsf-sci-1-1`

###### Alternating current (`creation_electricity_mv`)

Only measured CN grid-average user supply at 1–35 kV; no duplicate low-voltage delivery.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity for this stage in kWh × 3.6 MJ/kWh; cp_energy_creation separates actual creation jobs, supporting storage and initial original handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_creation`
- Sources: `gsf-sci-1-1`

###### Alternating current (`creation_electricity_site`)

Actual other grid, voltage or non-grid electricity. Match a separate supplier identity; do not force a CN UUID.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity for this stage in kWh × 3.6 MJ/kWh; cp_energy_creation separates actual creation jobs, supporting storage and initial original handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_creation`
- Sources: `gsf-sci-1-1`

###### Uncoated printing, writing and packaging paper (`draft_paper`)

Only actual uncoated writing/printing stock used for drafts or the original; collect fibre, recycled content, grammage, finishing and supplier. Coated or photographic stock needs its own row.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed paper consumption attributable to this original, including failed drafts; reconcile retained original paper and scrap without inventing yield.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wood-cased graphite pencil (`graphite_pencil`)

Only actually consumed pencil stock during drafting; pencil formulation and casing are supplier-specific. Not a selector for pens or pigments.

- Selected flow: Wood-cased graphite pencil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured consumed pencil mass from issue, return and stock records; record reusable remainder separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Previously completed creative original (`prior_original_input`)

Only an actual reused original expression with provenance and use permission; factual sources consulted are not automatically an acquired original exchange.

- Selected flow: Previously completed creative original
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Declared attributable share of the identified prior original from cp_original_inputs, with compatible upstream dataset; a licence price is not its amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_original_inputs`
- Sources: `un-cpc-creative-originals`

##### Waste flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

##### Elementary flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

#### Outputs

##### Product flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

##### Waste flows

###### Waste paper (`sorted_paper_waste`)

Only separately collected actual paper discard transferred to an identified recycler. The selected unspecified-paper Waste flow supplies the physical waste identity and Mass basis, not a sorted secondary-product sale or treatment inventory. Retain actual paper grade, contamination, sorting and recipient. Mixed refuse, contaminated photographic paper or a commercially transferred secondary-paper product requires a distinct row/identity and documented disposition.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh actual transferred paper waste for this original; retain recycling handover and confidentiality-destruction boundary. No assumed recycling credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Elementary flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

### Process: Fixation, verification and original completion (`fixation`)

#### Inputs

##### Product flows

###### Alternating current (`fixation_electricity_lv`)

Only measured CN grid-average user supply below 1 kV; identify its meter and site.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity for this stage in kWh × 3.6 MJ/kWh; cp_energy_fixation separates actual creation jobs, supporting storage and initial original handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fixation`
- Sources: `gsf-sci-1-1`

###### Alternating current (`fixation_electricity_mv`)

Only measured CN grid-average user supply at 1–35 kV; no duplicate low-voltage delivery.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity for this stage in kWh × 3.6 MJ/kWh; cp_energy_fixation separates actual creation jobs, supporting storage and initial original handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fixation`
- Sources: `gsf-sci-1-1`

###### Alternating current (`fixation_electricity_site`)

Actual other grid, voltage or non-grid electricity. Match a separate supplier identity; do not force a CN UUID.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable electricity for this stage in kWh × 3.6 MJ/kWh; cp_energy_fixation separates actual creation jobs, supporting storage and initial original handover.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fixation`
- Sources: `gsf-sci-1-1`

###### Manuscript copyediting delivery (`external_copyedit`)

Only an actual purchased copyediting delivery for the identified own-account manuscript. The author original remains own-account; not a commissioned writing reference product.

- Selected flow: Manuscript copyediting delivery
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual accepted copyedited manuscript delivery count assigned to this original from supplier records; supplier boundary states included electricity and apparatus to prevent duplicate expansion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copyedit`
- Sources:

##### Waste flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

##### Elementary flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

#### Outputs

##### Product flows

###### Completed original (`creative_original_output`)

One accepted own-account original, with identified version, completeness and expression medium; variants and backups do not multiply original count.

- Selected flow: Completed own-account creative original
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_original`
- Sources: `un-cpc-creative-originals`; `usco-fixation`

##### Waste flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

##### Elementary flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

### Process: Attributable creation apparatus (`apparatus`)

#### Inputs

##### Product flows

###### Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks (`portable_computer`)

Only an actual complete portable computer weighing not more than 10 kg; identify configuration, excluding separate displays.

- Selected flow: Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks `c4cb6070-944d-41be-a231-a0a2b9477174`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Equipment manufacturing input in kg per declared reference flow = measured net device mass in kg × evidenced dimensionless manufacturing share / actual accepted-original count covered by that share. Collect all three quantities through cp_apparatus for the same device, project pool and lifetime ledger. Direct assignment to this one original has one actual accepted output; division of a shared pool requires demonstrated equivalent beneficiaries and its real positive output count, never assumed equal originals.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apparatus`
- Sources: `gsf-sci-1-1`

###### Digital cameras (`still_camera`)

Only an actual still-image digital camera used for the eligible original; exclude TV/video/web cameras and declare body/lens/battery configuration.

- Selected flow: Digital cameras `9e283879-4269-4280-9b6e-8f09891ec5ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Equipment manufacturing input in kg per declared reference flow = measured net device mass in kg × evidenced dimensionless manufacturing share / actual accepted-original count covered by that share. Collect all three quantities through cp_apparatus for the same device, project pool and lifetime ledger. Direct assignment to this one original has one actual accepted output; division of a shared pool requires demonstrated equivalent beneficiaries and its real positive output count, never assumed equal originals.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apparatus`
- Sources:

###### Acoustic upright piano (`upright_piano`)

Only an actual acoustic upright piano used in original composing or checking; no public performance or sound-recording master is represented.

- Selected flow: Acoustic upright piano
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Equipment manufacturing input in kg per declared reference flow = measured net device mass in kg × evidenced dimensionless manufacturing share / actual accepted-original count covered by that share. Collect all three quantities through cp_apparatus for the same device, project pool and lifetime ledger. Direct assignment to this one original has one actual accepted output; division of a shared pool requires demonstrated equivalent beneficiaries and its real positive output count, never assumed equal originals.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apparatus`
- Sources:

###### Rack-mounted creation server computer (`creation_server`)

Only an actual configured rack-mounted server attributed to creation, storage or initial handover; not an assumed datacenter.

- Selected flow: Rack-mounted creation server computer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Equipment manufacturing input in kg per declared reference flow = measured net device mass in kg × evidenced dimensionless manufacturing share / actual accepted-original count covered by that share. Collect all three quantities through cp_apparatus for the same device, project pool and lifetime ledger. Direct assignment to this one original has one actual accepted output; division of a shared pool requires demonstrated equivalent beneficiaries and its real positive output count, never assumed equal originals.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_apparatus`
- Sources: `gsf-sci-1-1`

##### Waste flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

##### Elementary flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

#### Outputs

##### Product flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

##### Waste flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

##### Elementary flows

No mandatory exchange is asserted in this group. Include actually occurring exchanges as separate evidenced atomic rows; missing observations are not zero.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | projects and versions | Subdivide records by project/version before allocation; include unsuccessful trials belonging to the accepted original. Reconcile shared workstation and room-meter totals with documented job/reservation or measured-use keys, including idle/overhead and unassigned use. Do not allocate by sale price, royalties, users or assumed downloads. |  |
| `allocation_apparatus` | apparatus | Use measured configuration-specific net apparatus mass and evidenced reservation time/capacity shares under cp_apparatus. Actual installation, configuration and use records are always required. A justified expected lifetime/service denominator is permitted when supported by explicit evidence, sensitivity analysis and subsequent reconciliation of the persistent asset ledger; it must be positive and cumulative assigned fractions must not exceed one. A single observed period cannot replace the lifetime denominator, and unknown denominator or attribution relations require review; for non-computing apparatus use project-documented service-use attribution and sensitivity, not a default life. Provider datasets containing hardware must not be charged again. |  |
| `allocation_originals` | joint and reused originals | Document whether variants express one original or are distinct completed works. Split shared work using evidenced creative activity; when attribution is unsupported retain a joint-output dataset and unresolved allocation. A reused original enters with its explicit upstream share; rights are metadata, not material mass or an avoided-emission credit. |  |
| `allocation_share_definition` | apparatus manufacturing inputs | For an actual computing resource pool, its dimensionless manufacturing share is time_share × capacity_share: time_share is pool reserved/use time divided by evidenced actual lifetime/cumulative service time or justified expected lifetime; capacity_share is pool-reserved capacity divided by total available capacity. The recorded share and accepted-original count must cover the identical pool and interval. Use consistent time units and strictly positive denominators, and bound each share between zero and one. For non-computing equipment use only an evidenced causal service-use share and retain unsupported attribution for review. These symbols allocate upstream manufacture; they do not convert the creative original to mass. | |
| `allocation_asset_conservation` | apparatus and reusable assets | Maintain one lifetime manufacturing ledger for each asset across all projects and periods. The denominator must cover evidenced actual lifetime/cumulative service or a justified expected life, with sensitivity and later reconciliation. Cumulative attributed manufacture shares must never exceed one; do not reset full manufacture at each project or observation period. Period-only allocation distributes only the previously justified manufacture share for that period, not the entire asset. Unknown lifetime or ledger coverage requires review. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_original` | fixation | creative_original_output | acceptance_record | original id; genre/function; creator; own-account intention; version; media inventory; hashes or physical identification; completeness; acceptance record; source permissions; rights; project dates; revision baseline; actual acceptance date; actual initial-handover date or documented inapplicability; attributable interval resources | Check the retained expression against actual completion/acceptance and provenance records; count one original, not pages, file renditions or copies. Declare complete creation or incremental revision scope. | item | at original acceptance and initial-handover closure; original counted once | full applicable project through the later actual acceptance/initial-handover date; if handover is inapplicable, document that and use acceptance | all creators and contributing sites | per declared reference flow | signed completion record; file/object inventory; provenance and own-account records |
| `cp_energy` | conception | conception_electricity_lv; conception_electricity_mv; conception_electricity_site | meter_record | original id; stage; site; grid; voltage; meter; interval; kWh; measured job/reservation key; idle and facility overhead; provider scope; initial handover records; actual acceptance date; actual initial-handover date or documented inapplicability; attributable interval resources | Use calibrated submeter readings or verifiable provider/job energy records; reconcile shared meters to real project activity and supporting storage/network. Do not derive kWh from GB, revenue or generic energy coefficients.; include actual device reservation/use, energy and support needed between acceptance and initial handover under the declared scope; This protocol covers conception only. Reconcile all three stage-specific protocols to the same source meter/provider totals; assign each actual interval and shared overhead once, including failed work and attributable initial-handover support. | kWh | each meter/job interval | full applicable project through the later actual acceptance/initial-handover date; if handover is inapplicable, document that and use acceptance | all actual workplaces/providers | per declared reference flow | meter calibration; job ledger; provider resource/overhead reconciliation |
| `cp_energy_creation` | creation | creation_electricity_lv; creation_electricity_mv; creation_electricity_site | meter_record | original id; stage; site; grid; voltage; meter; interval; kWh; measured job/reservation key; idle and facility overhead; provider scope; initial handover records; actual acceptance date; actual initial-handover date or documented inapplicability; attributable interval resources | Use calibrated submeter readings or verifiable provider/job energy records; reconcile shared meters to real project activity and supporting storage/network. Do not derive kWh from GB, revenue or generic energy coefficients.; include actual device reservation/use, energy and support needed between acceptance and initial handover under the declared scope; This protocol covers creation only. Reconcile all three stage-specific protocols to the same source meter/provider totals; assign each actual interval and shared overhead once, including failed work and attributable initial-handover support. | kWh | each meter/job interval | full applicable project through the later actual acceptance/initial-handover date; if handover is inapplicable, document that and use acceptance | all actual workplaces/providers | per declared reference flow | meter calibration; job ledger; provider resource/overhead reconciliation |
| `cp_energy_fixation` | fixation | fixation_electricity_lv; fixation_electricity_mv; fixation_electricity_site | meter_record | original id; stage; site; grid; voltage; meter; interval; kWh; measured job/reservation key; idle and facility overhead; provider scope; initial handover records; actual acceptance date; actual initial-handover date or documented inapplicability; attributable interval resources | Use calibrated submeter readings or verifiable provider/job energy records; reconcile shared meters to real project activity and supporting storage/network. Do not derive kWh from GB, revenue or generic energy coefficients.; include actual device reservation/use, energy and support needed between acceptance and initial handover under the declared scope; This protocol covers fixation only. Reconcile all three stage-specific protocols to the same source meter/provider totals; assign each actual interval and shared overhead once, including failed work and attributable initial-handover support. | kWh | each meter/job interval | full applicable project through the later actual acceptance/initial-handover date; if handover is inapplicable, document that and use acceptance | all actual workplaces/providers | per declared reference flow | meter calibration; job ledger; provider resource/overhead reconciliation |
| `cp_material` | creation | draft_paper; graphite_pencil; sorted_paper_waste | mass_stock_record | original id; material specification; supplier; issue/return/stock mass; retained-original mass; measured discard mass; waste segregation and destination; actual acceptance date; actual initial-handover date or documented inapplicability; attributable interval resources | Weigh actual material issues, returns and discards using calibrated scales and reconcile opening/closing stock. Retain paper grade and pencil formulation, no assumed composition or loss rate. | kg | each issue/return/discard | full applicable project through the later actual acceptance/initial-handover date; if handover is inapplicable, document that and use acceptance | actual material use sites | per declared reference flow | weighing and supplier records; stock reconciliation; waste handover |
| `cp_original_inputs` | creation | prior_original_input | supplier_delivery_record | original id; supplier; prior-work id/version; upstream share; permissions; copyediting delivery unit; acceptance; included electricity/apparatus; supplier dataset boundary; actual acceptance date; actual initial-handover date or documented inapplicability; attributable interval resources | Verify the actual acquired earlier expression, its exact identity/version, permissions and upstream dataset boundary. Collect the documented attributable share of the identified prior original under its card; preserve the reference item unit and upstream allocation evidence. A licence price or royalty is not an exchange amount. | item | each acquisition/delivery | full applicable project through the later actual acceptance/initial-handover date; if handover is inapplicable, document that and use acceptance | actual creator/suppliers | per declared reference flow | acceptance; upstream dataset; permissions; attribution ledger |
| `cp_copyedit` | fixation | external_copyedit | supplier_delivery_record | original id; supplier; prior-work id/version; upstream share; permissions; copyediting delivery unit; acceptance; included electricity/apparatus; supplier dataset boundary; actual acceptance date; actual initial-handover date or documented inapplicability; attributable interval resources | Verify the actual accepted manuscript copyediting delivery and its upstream boundary. Count accepted delivery units assigned to this original; retain included supplier electricity and apparatus to prevent duplicate expansion. Contract value and royalties are not delivery counts. | item | each acquisition/delivery | full applicable project through the later actual acceptance/initial-handover date; if handover is inapplicable, document that and use acceptance | actual creator/suppliers | per declared reference flow | acceptance; upstream dataset; permissions; attribution ledger |
| `cp_apparatus` | apparatus | portable_computer; still_camera; upright_piano; creation_server | equipment_use_record | device id; configuration; measured net device mass in kg; weighing/supplier provenance; dimensionless manufacturing share; share pool and interval; actual accepted-original count in item; original identity and equivalence/independent attribution evidence; project reservation/use time; actual lifetime/cumulative service or justified expected-life denominator and evidence; reserved and total capacity; shared users; lifetime cumulative allocated shares; prior-period manufacturing share; life sensitivity; later reconciliation; upstream coverage; actual acceptance date; actual initial-handover date or documented inapplicability; attributable interval resources | Use calibrated weighing or traceable supplier net-mass records for the actual complete configuration. Record real reservation/use intervals and installed-life basis; Measured net device mass is the actual complete configured device mass in kg; manufacturing share is dimensionless; actual accepted-original count is measured in item from the same pool acceptance ledger. Non-computing use shares require project activity records and sensitivity. No invented device weight or life.; include actual device reservation/use, energy and support needed between acceptance and initial handover under the declared scope | kg | each device and project interval | full applicable project through the later actual acceptance/initial-handover date; if handover is inapplicable, document that and use acceptance | real creator and provider apparatus | per declared reference flow | configuration/weighing provenance; lifetime evidence and sensitivity; share/count scope reconciliation; cumulative manufacturing-share ledger; reservation reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_unit` | all electricity rows | MJ = attributable measured kWh × 3.6; attribution is established from primary activity records before conversion. | cp_energy; cp_energy_creation; cp_energy_fixation | MJ per declared reference flow |  |
| `apparatus_share` | portable_computer; still_camera; upright_piano; creation_server | Equipment manufacturing input (kg per declared reference flow) = measured net device mass (kg) × evidenced manufacturing share (dimensionless) / actual accepted-original count (item) covered by that share. The numerator describes upstream device manufacture attributed to the pool, not mass of the original. Record device identity, share scope and the actual positive output count through cp_apparatus. Sum separate device contributions without duplicating manufacture contained in supplier datasets; shared-count division requires demonstrated equivalent original beneficiaries, otherwise attribute independently or retain joint-output allocation for review. | cp_apparatus; measured net device mass; dimensionless manufacturing share; actual accepted-original count | kg per declared reference flow |  |
| `original_basis` | all inventory rows | Record actual attributable exchanges directly per declared reference flow. Split joint-original project records with a documented allocation before normalization; do not count backups, file formats or reprint editions as extra accepted originals. | cp_original; cp_energy; cp_energy_creation; cp_energy_fixation; cp_material; cp_original_inputs; cp_copyedit; cp_apparatus | one original reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | reference original | Declare genre, intended expression/function, version, completeness, medium and actual own-account provenance; no default page count, notation length, physical mass, aesthetic score or protection term. | cp_original; actual rights and acceptance records |
| `quality_coverage` | all stages | Cover all participating sites and relevant providers through the later actual acceptance/initial-handover date, including failed drafts, rework and attributable storage/support between the dates. Disclose meter/provider granularity, room utility scope and equipment/supplier gaps; absence of measurement is not zero. | project ledger; cp_energy; cp_energy_creation; cp_energy_fixation; supplier inventories |
| `quality_representative` | dataset reuse | A particular manuscript, score or other original is not an industry-average creative work. Comparisons need compatible genre/function, completeness, medium and boundary. Declare actual dates, geography, activity, apparatus, uncertainty and update conditions. | actual project profile and coverage disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_original` | creative_original_output | Verify one complete own-account original and its exact version/medium, acceptance, intended function and source/reuse conditions. Reject a licence, commissioned writing service, printed publication, recording master or download as this reference. No count establishes artistic equivalence across genres. | `un-cpc-creative-originals` |
| `validate_resources` | all inventory rows | Check reference-output count, per-original denominator, meter coverage and 3.6 MJ/kWh conversion; verify each electricity country/voltage, apparatus property/configuration and supplier service unit. Reconcile creation jobs, paper stocks/discards and device shares. GB, file count and invoice money do not establish electricity. |  |
| `validate_complete` | dataset claim | Retain uncertainty when identities, actual exchanges, provider coverage, allocation or acceptance evidence remain missing. Applicable identity gaps and missing material stages prohibit a complete dataset claim; no independent review or legal/compliance approval is implied by structural checks. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Original-creation foreground dataset for one identified own-account creative expression |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Original-production input with explicit upstream/reuse attribution and compatible creative function/version/medium; comparison only for equivalent declared reference scope |
| excluded_use | Per-download/publication/broadcast/use impact without separate stages; universal original average; legal rights approval; artistic quality certification; complete cradle-to-gate without required upstream evidence |
| required_metadata | All reference qualifiers; project sites and dates; actual analog/digital operations; supplier/device identities and boundaries; initial handover; allocation keys; conditional and added rows; downstream exclusions |
| required_quality_disclosure | Measured versus estimated data; missing exchanges/identities; grid/voltage; original/revision scope; apparatus-life/use uncertainty; supplier overlaps; completeness and representativeness limitations |
| update_trigger | A materially changed original/version or creation route, supplier/energy/apparatus boundary, revised reuse attribution or corrected acceptance/resource evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-creative-originals` | official_guidance | UNSD, CPC Version 3.0, subclass 96330, Explanatory note, inclusion bullets, own-account note and exclusions. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/96330 | Own-account original boundary; no energy, material or lifetime factor |
| `usco-composition` | official_guidance | U.S. Copyright Office, Musical Compositions and Sound Recordings, main content paragraphs. https://www.copyright.gov/register/pa-sr.html | Composition and sound recording are distinct works; terminology evidence only, no legal approval |
| `usco-fixation` | official_guidance | U.S. Copyright Office, What is Copyright?, Original Works and Fixed Works. https://www.copyright.gov/what-is-copyright/index.html | Identifiable retained expression rather than a mere idea; U.S. source not a universal legal requirement or protection-duration default |
| `gsf-sci-1-1` | standard | Green Software Foundation, Software Carbon Intensity Specification 1.1.0, Energy and Embodied emissions. https://sci.greensoftware.foundation/ | Computing energy includes provisioned resources; device time/resource attribution adapted only for actual computing in this creation interval. Not an original-art PCR, SCI score, universal non-computing allocation or default lifetime |
