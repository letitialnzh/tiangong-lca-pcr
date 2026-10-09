---
pcr_id: pcr.business-and-production-services.geological-information-assets.own-account-mineral-exploration-evaluation-information
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Own-account mineral exploration and evaluation information

## 1. Scope and Applicability

This PCR covers creation on own account of identifiable mineral exploration and evaluation information assets for solid minerals, petroleum and natural gas, including initial exploration and distinct subsequent re-evaluation. The owner may retain, sell or license the information. The reference object is original knowledge about a declared deposit/prospect and evaluation stage, not a generic consulting hour, a discovered deposit or a mining licence (un-cpc3-exploration). Include all actual investigation routes, including unsuccessful work, contributing to that original.

Exclude standalone commissioned geological consulting, geophysical or drilling services as reference products; these may be inputs. Exclude routine mining/production drilling, commercial extraction and beneficiation, the natural resource stock, licence/right transactions, generic R&D originals, software originals, generic databases, branding, broadcasts and downloads. Geographical evidence and an interpretation model integrated in the exploration asset are components; independent software/data assets retain distinct inventories. No requirement that the original discovers an economic reserve. A one-item inventory is meaningful only with its scope and quality; unrelated projects are not equivalent.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.geological-information-assets.own-account-mineral-exploration-evaluation-information |
| classification_refs | CPC 3.0 83413 |
| covered_products | Own-account original mineral exploration/evaluation information and separately defined re-evaluation versions |
| excluded_products | Service-only delivery; mineral stocks; extraction output; rights; standalone R&D/software/data originals; copies |
| representative_product | Own-account mineral exploration and evaluation information package |
| production_route | Project definition → actual surveys/sampling/test work → analysis → interpretation/evaluation → original completion; conditional physical methods declared |
| market_state | Complete original retained for own use or made available for sale/licensing, with actual reuse rights and access conditions |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Create original information about mineral occurrence and its evaluation for a declared prospect/project |
| How much | One complete original information package of one declared version and scope |
| How well | Identify geographical extent, commodities, methods, evidence completeness, spatial/depth coverage, evaluation stage, uncertainty, integrity and actual reuse restrictions; no implied reserve or compliance certification |
| How long or cycle | One actual creation/re-evaluation cycle through documented completion; report dates, no assumed economic life |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Own-account mineral exploration and evaluation information package |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | original/project ID; version and file inventory; own-account ownership; prospect coordinates and CRS; area/depth and commodities; solid-mineral or oil/gas route; evaluation stage; start/end dates; actual methods and failed work; sample/assay provenance and uncertainty; acceptance; rights and reuse conditions; delivery/storage cutoff; provider and equipment allocation; upstream completeness |

Declare every required qualifier with the dataset. item is exactly one public Item(s), not one map, hole, mineral tonne, downloaded copy, license or user. One package may contain multiple inseparable files and physical samples; only one original output is counted.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Record exactly one complete version using cp_original; item is Item(s) with factor 1. Do not invent a physical mass or infer output count from revenue, reserves or bytes. |
| same_basis | all inventory rows | Original package count | item | Use per declared reference flow for every row and protocol; keep each exchange numerator in its physical unit. |
| electricity_conversion | all electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public reference property. Convert measured kWh to MJ with 1 kWh = 3.6 MJ. Match the meter boundary; do not convert storage GB, network GB or CPU hours directly into kWh. |
| physical_state | drilling_fluid, tap_water, diesel | Volume or Mass as the specific identity declares | m3 or kg | Retain primary property: drilling fluid Volume/m3, tap water and diesel Mass/kg. A measured volume-to-mass conversion requires actual composition, temperature and measured density; no generic density. |

Mass `93a60a56-a3c8-11da-a746-0800200b9a66` references Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` (kg); Volume `93a60a56-a3c8-22da-a746-0800200c9a66` references Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` (m3); Net calorific value references Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` (MJ). These properties concern exchanges, not information mass.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified project inception or re-evaluation start, existing evidence and actual ownership/supplied state |
| starting_condition_role | Foreground original-asset creation, not resource extraction |
| product_classification_scope | Own-account exploration and evaluation information; geographical/method scope declared |
| recursive_input_rule | Reused prior exploration original is a distinct input with provenance and carried allocated upstream burden. Do not recursively reconstruct or duplicate its original creation in the new version. |
| upstream_dataset_requirement | Require compatible utility/material/equipment/service datasets with supplier, region, year, configuration and boundary. Missing layers remain disclosed cutoffs. |
| disclosure | Full project route, unsuccessful work, make/buy ledger, historical inputs, transport, facilities, closure, initial storage/transfer and exclusions. Foreground-only is not complete cradle-to-gate. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_project | all processes | Include attributable planning, investigation, analysis, interpretation and documentation through original completion, including failed holes and inconclusive tests. Physical transport, camps, heating/cooling and initial delivery actually used require individually measured exchanges, not salaries or financial licence fees. | un-cpc3-exploration; un-sna2008-exploration |
| boundary_route | survey, drilling, analysis | Record the actual route register before using conditional cards. Include geological mapping, geochemical/geophysical work, aerial or marine surveys, drilling and appraisal tests only when performed. Extend cards for every actual fuel, reagent, sample container, well material, waste and supported release; absent required route evidence blocks completeness. | un-sna2008-exploration; jorc2012-reporting |
| boundary_make_buy | all processes | Subdivide direct operation from purchased complete service. Supplier reports are technical inputs, not a second exploration original. Do not add embedded provider fuel/electricity/equipment; lacking supplier inventories remain unknown. Own laboratories require actual assay-specific physical inventories. | jorc2012-reporting |
| boundary_reuse | completion | Separate original creation from later copying, download, licence administration, hosting/network operation and mine development/use. Initial measured packaging/storage/transfer may be included with an explicit cutoff; no presumed lifetime, data centre or GB-to-energy factor. | un-cpc3-exploration |
| boundary_disturbance | infrastructure | Include actual exploration disturbance, restoration and residual obligations attributable to this project; specify area, duration, prior/after land state, hole sealing and water handling. Do not classify exploration pads automatically as commercial mineral extraction land. No mine-closure burden or generic land/emission factor is assumed. | un-sna2008-exploration |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| planning | Project definition and existing-evidence appraisal | required | All originals | foreground creation or allocated support | per declared reference flow |
| survey | Field surveying and sampling | conditional | Actual geological, geochemical, geophysical, aerial or marine survey | foreground creation or allocated support | per declared reference flow |
| drilling | Exploratory drilling and test work | conditional | Actual test drilling, boring, trenching or appraisal tests | foreground creation or allocated support | per declared reference flow |
| analysis | Sample analysis and quality control | conditional | Actual sample preparation and analytical testing | foreground creation or allocated support | per declared reference flow |
| evaluation | Interpretation and evaluation | required | All originals; evaluation depth declared | foreground creation or allocated support | per declared reference flow |
| completion | Original information completion and initial handover | required | All originals | foreground creation or allocated support | per declared reference flow |
| infrastructure | Allocated equipment manufacture and exploration closure | conditional | Attributable equipment and disturbed sites | foreground creation or allocated support | per declared reference flow |

Conditional cards describe specific exchanges, not a universal drilling or assay recipe. Project maps must cover every actual method including petroleum/natural gas geophysics and appraisal, not merely the water-based solid-mineral example. Missing route rows or supplier inventories prevent a complete dataset claim. Internal sample and draft transfers cancel in the consolidated original inventory; retained samples are not market co-products.

### Process: Project definition and existing-evidence appraisal (`planning`)

#### Inputs

##### Product flows

###### Alternating current (`planning_electricity`)

Only actual CN user-side grid supply below 1 kV. Meter attributable project electricity for this stage; a different region, voltage or provider needs a separately compatible identity. Exclude electricity embedded in purchased complete services.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange amount from cp_energy; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-sna2008-exploration`

### Process: Field surveying and sampling (`survey`)

#### Inputs

##### Product flows

###### Alternating current (`survey_electricity`)

Only actual CN user-side grid supply below 1 kV. Meter attributable project electricity for this stage; a different region, voltage or provider needs a separately compatible identity. Exclude electricity embedded in purchased complete services.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange amount from cp_energy; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-sna2008-exploration`

###### Mineral prospect geophysical survey report (`survey_report`)

Conditional purchased report of a specified survey method, area, line spacing and resolution. One provider deliverable, not an unspecified service hour; retain its inventory and avoid repeating its vehicles and electricity in foreground.

- Selected flow: Mineral prospect geophysical survey report
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange amount from cp_services; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `un-sna2008-exploration`

### Process: Exploratory drilling and test work (`drilling`)

#### Inputs

##### Product flows

###### Alternating current (`drilling_electricity`)

Only actual CN user-side grid supply below 1 kV. Meter attributable project electricity for this stage; a different region, voltage or provider needs a separately compatible identity. Exclude electricity embedded in purchased complete services.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange amount from cp_energy; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-sna2008-exploration`

###### Diesel fuel (`diesel`)

Only actual petroleum diesel in project-owned rigs, generators or transport; maintain separate equipment subrecords and allocation to survey/drilling/closure. Declare grade and blend. Biofuel requires its own identity and carbon split. Provider-complete drilling replaces these embedded inputs.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange amount from cp_material; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-sna2008-exploration`

###### Exploration test-drilling completion report (`drilling_service`)

Only purchased test-drilling work with identified holes, depth, diameter, technique, recovery and completion. Physical metres and hours remain supporting raw fields. Supplier boundary must identify mobilisation, drilling, fuel, fluid and closure; do not add duplicate direct rig inventories.

- Selected flow: Exploration test-drilling completion report
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange amount from cp_services; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `un-sna2008-exploration`

###### Tap water (`tap_water`)

Only supplied treated tap water actually used in drilling or sample cutting; no substitution for river abstraction, groundwater or recirculated mud. Primary identity is mass; weigh or use traceable site density with metered volume, not an assumed mud density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange amount from cp_material; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-sna2008-exploration`

###### Water-based Drilling Fluid (`drilling_fluid`)

Only purchased water-based drilling fluid matching the declared formulation and state. Record external make-up volume, stocks and return; internal circulation is not repeated consumption. On-site preparation instead requires separate measured water and every actual additive row.

- Selected flow: Water-based Drilling Fluid `d3d85653-d482-49b8-95cb-facfd757965f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange amount from cp_material; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-sna2008-exploration`

##### Elementary flows

###### river water (`river_abstraction`)

Conditional direct withdrawal from an identified river basin, not purchased water; declare the process extraction country for country-specific characterisation and measure gross intake, separately document return location and quality, distinguish withdrawal from consumption. Do not equate recirculation with abstraction.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange amount from cp_water; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `un-sna2008-exploration`

#### Outputs

##### Waste flows

###### Water-based drilling cutting (`cuttings`)

Only cuttings from water-based drilling actually exported for treatment; declare rock composition, moisture, mud contamination and treatment receiver. Exclude retained core samples and oil-based cuttings. Backfilled cuttings need a separate fate record.

- Selected flow: Water-based drilling cutting `a813d7ec-7db6-4922-be7e-130d41033c6c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange amount from cp_waste; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `un-sna2008-exploration`

###### Spent water-based exploration drilling fluid (`spent_fluid`)

Separate fluid exported as waste after solids separation, only when present; declare dissolved constituents, suspended solids, hazardous constituents and treatment. It is neither river water nor an elementary water release.

- Selected flow: Spent water-based exploration drilling fluid
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange amount from cp_waste; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `un-sna2008-exploration`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only demonstrated direct fossil combustion emissions to unspecified outdoor air at normal release time. Use measured integrated emission or site carbon balance with actual fuel carbon, oxidation and retained carbon; no default factor. Do not apply to land-use carbon, long-term, soil, water or provider emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange amount from cp_emission; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `un-sna2008-exploration`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only independently quantified molecular NO2 emitted to unspecified outdoor air at normal release time by actual combustion. Retain species, subcompartment and time. NO, N2O and total NOx expressed as NO2-equivalent are not this exchange; absence of measurement/factor support is an unknown, not a zero.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange amount from cp_emission; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `un-sna2008-exploration`

### Process: Sample analysis and quality control (`analysis`)

#### Inputs

##### Product flows

###### Alternating current (`analysis_electricity`)

Only actual CN user-side grid supply below 1 kV. Meter attributable project electricity for this stage; a different region, voltage or provider needs a separately compatible identity. Exclude electricity embedded in purchased complete services.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange amount from cp_energy; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jorc2012-reporting`

###### Mineral exploration sample assay report (`assay_report`)

One purchased report for an identified sample batch and named analytical methods, analytes, detection limits and QA/QC. Not groundwater TVOC testing. For own laboratory operation replace the service with actual preparation, assay electricity, reagent, crucible and waste rows specific to the method.

- Selected flow: Mineral exploration sample assay report
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange amount from cp_services; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `jorc2012-reporting`

### Process: Interpretation and evaluation (`evaluation`)

#### Inputs

##### Product flows

###### Alternating current (`evaluation_electricity`)

Only actual CN user-side grid supply below 1 kV. Meter attributable project electricity for this stage; a different region, voltage or provider needs a separately compatible identity. Exclude electricity embedded in purchased complete services.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange amount from cp_energy; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-sna2008-exploration`

### Process: Original information completion and initial handover (`completion`)

#### Inputs

##### Product flows

###### Alternating current (`completion_electricity`)

Only actual CN user-side grid supply below 1 kV. Meter attributable project electricity for this stage; a different region, voltage or provider needs a separately compatible identity. Exclude electricity embedded in purchased complete services.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange amount from cp_energy; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-sna2008-exploration`

#### Outputs

##### Product flows

###### Own-account mineral exploration and evaluation information package (`reference_product`)

One complete versioned original covering the declared project, evidence and evaluation scope, with successful, unsuccessful and inconclusive investigations represented. Its supporting files are components, not additional originals.

- Selected flow: Own-account mineral exploration and evaluation information package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_original`
- Sources: `un-cpc3-exploration`

### Process: Allocated equipment manufacture and exploration closure (`infrastructure`)

#### Inputs

##### Product flows

###### Geological evaluation workstation (`workstation`)

Conditional share of actual workstation manufacture and end-of-life, using configuration and documented project utilisation over measured total use. Do not assign a whole new workstation to every file or charge hardware already inside a computing provider inventory.

- Selected flow: Geological evaluation workstation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange amount from cp_equipment; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equipment`
- Sources: `un-sna2008-exploration`

###### Mineral exploration drilling rig (`drill_rig`)

Conditional allocated embodied inventory of the actual rig configuration, with measured project rig-hours and documented whole-life utilisation; no assumed machine mass or life. Purchased complete drilling must not duplicate rig manufacture.

- Selected flow: Mineral exploration drilling rig
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange amount from cp_equipment; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equipment`
- Sources: `un-sna2008-exploration`

###### Exploration borehole closure and site rehabilitation completion report (`closure_report`)

Conditional actual contracted exploration closure for named holes and pads. Scope and supplier inventory identify plugs, restoration, fuel and waste separately; future mining closure is excluded. On-site closure instead requires its physical exchanges and measured land transitions.

- Selected flow: Exploration borehole closure and site rehabilitation completion report
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual attributable exchange amount from cp_services; sum attributable records per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_services`
- Sources: `un-sna2008-exploration`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_project | all processes | Directly attribute identifiable site, hole, assay, computing and documentation records to the original. Subdivide unrelated mining production and other originals first. For shared work use measured causal utilisation with a documented beneficiary ledger; disclose residuals and test sensitivity when causation is uncertain. No allocation by mineral value, revenue, licence price or presumed discovery success. | un-sna2008-exploration |
| allocation_original | reference_product | An original is created once. Reuse in a new evaluation carries an explicitly documented share of the prior asset inventory; copies and licences do not recreate it. Failed or negative investigations contributing to the defined information belong to that package; abandoned separate projects retain their own burdens, not a zero-success disposal to future mining. | un-cpc3-exploration; un-sna2008-exploration |
| allocation_equipment | infrastructure | Use actual configuration and traceable whole-life utilisation for owned equipment manufacture/end-of-life. Meter shared facility/compute electricity or use a validated site workload allocation, including idle and overhead shares. Do not assume all equipment is new or infer electricity from job duration alone. Treat waste as waste unless a real market product and consistent allocation are demonstrated. | un-sna2008-exploration |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_original | completion | reference_product | acceptance record | project ID; version; ownership; coordinates/CRS; commodities; methods; evidence inventory; acceptance; start/end dates; restrictions | Reconcile signed completion against the content manifest, geospatial extent, evidence provenance and limitations; one accepted original version | item | at completion | full actual creation cycle including failures | all contributing sites and providers | per declared reference flow | traceable originals; calibration; reconciled coverage and allocation; uncertainty |
| cp_energy | all processes | electricity | meter record | meter ID; stage; timestamps; kWh; workload; shared allocation; overhead; region; voltage; provider scope | Use calibrated submeter intervals or validated facility/workload ledger; include stage overhead and initial storage/delivery to the declared cutoff; exclude complete-provider embedded electricity | kWh | each stage and metered interval | full actual creation cycle including failures | all contributing sites and providers | per declared reference flow | traceable originals; calibration; reconciled coverage and allocation; uncertainty |
| cp_material | drilling | diesel; tap_water; drilling_fluid | physical inventory | exchange; grade; composition; stocks; deliveries; returns; consumption; temperature; density; equipment; holes | Reconcile calibrated weighing/volume meters and delivery-stock-return balance; keep kg and m3 separate with site-specific conversions and internal circulation excluded | kg; m3 | each delivery and drilling shift | full actual creation cycle including failures | all contributing sites and providers | per declared reference flow | traceable originals; calibration; reconciled coverage and allocation; uncertainty |
| cp_services | survey; drilling; analysis; infrastructure | purchased report | supplier record | provider; report ID; method; area/holes/samples; depth; detection limit; QA/QC; inventory boundary; embodied utilities; transport; closure | Link accepted specific delivery to primary provider inventory; distinguish fee, report count and measured work extent; verify own-account original ownership | item | each accepted delivery | full actual creation cycle including failures | all contributing sites and providers | per declared reference flow | traceable originals; calibration; reconciled coverage and allocation; uncertainty |
| cp_waste | drilling | cuttings; spent_fluid | waste transfer record | origin; rock phase; fluid formulation; wet mass; solids; moisture; volume; contaminants; destination; manifest; retained samples | Weigh cuttings and meter separated fluid, reconcile recovery/retention/backfill; keep each waste and its treatment separate | kg; m3 | each removal | full actual creation cycle including failures | all contributing sites and providers | per declared reference flow | traceable originals; calibration; reconciled coverage and allocation; uncertainty |
| cp_emission | drilling | fossil_co2; nitrogen_dioxide | measured emission record | source; species; fossil fraction; duration; concentration; exhaust flow; calibration; fuel carbon; oxidation; retained carbon; compartment; time | Integrate species-specific measured mass over actual operation or use documented site carbon balance for fossil CO2. Retain method uncertainty and factor origin if used. NOx equivalent is not molecular NO2; inventory other measured species separately | kg | each operating campaign | full actual creation cycle including failures | all contributing sites and providers | per declared reference flow | traceable originals; calibration; reconciled coverage and allocation; uncertainty |
| cp_water | drilling | river_abstraction | water meter record | river/basin; intake; date; volume; return volume; receiver; water quality; recirculation | Calibrated intake meter and separate return records; establish basin and time, do not replace resource withdrawal with wastewater | m3 | each shift | full actual creation cycle including failures | all contributing sites and providers | per declared reference flow | traceable originals; calibration; reconciled coverage and allocation; uncertainty |
| cp_equipment | infrastructure | workstation; drill_rig | equipment utilisation record | equipment ID; configuration; embodied dataset; project use; total measured lifetime use; repairs; retirement; provider exclusions | Link asset register to logged project and whole-life utilisation; documented share of actual equipment, not invented weight or lifetime; disclose incomplete lifetime records and sensitivity | item | project and asset record update | full actual creation cycle including failures | all contributing sites and providers | per declared reference flow | traceable originals; calibration; reconciled coverage and allocation; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_aggregation | all inventory rows | Sum nonduplicated measured exchange amounts attributable to this one original and express per declared reference flow. Shared measured shares precede consolidation; reference output is 1 item. Preserve each numerator unit. | cp_original; cp_energy; cp_material; cp_services; cp_waste; cp_emission; cp_water; cp_equipment | per declared reference flow | un-cpc3-exploration |
| energy_conversion | all electricity rows | Multiply recorded attributable kWh by 3.6 to express MJ at the same interface. No additional conversion of original count. | cp_energy | MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | reference_product | Original identity and version, own-account nature, geospatial/depth/commodity scope and acceptance must be verifiable. Report unavailable data and uncertainty. | cp_original; un-cpc3-exploration |
| quality_geology | survey; drilling; analysis; evaluation | For solid-mineral routes retain sample representativity/recovery, drill method, assay precision/bias, coordinates, compositing and interpretation confidence; JORC Table 1 is scoped reporting guidance, not LCA approval. Oil/gas needs its actual reservoir/seismic/well evaluation evidence and applicable regime; do not label it JORC certified. | cp_services; jorc2012-reporting |
| quality_inventory | all inventory rows | No default fuel use, composition, assay recipe, lifetime, emission factor, water return or net output. Require actual records, missing layer disclosure and cut-off sensitivity. Historic evidence defines concepts only unless demonstrated representative of the current project. | all collection protocols |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | Require exact one-item output link/name, declared version and qualifiers, provenance and ownership. Candidate unresolved identities are disclosed; they are not verified product providers or methodology approval. | un-cpc3-exploration |
| validate_scope | all processes | Reconcile every actual survey, borehole, test, failed branch, assay, transport, computation, delivery and closure with process coverage and make/buy ledger. Unknown provider/route inventories make lifecycle completeness inconclusive. | un-sna2008-exploration |
| validate_measurement | all inventory rows | Require consistent per declared reference flow, complete protocols, numerator units, energy/density conversions, shared shares and stock balances in both languages. Do not normalize information by kg or money. |  |
| validate_release | all elementary and waste rows | Require demonstrated occurrence and species/physical identity for every elementary or waste exchange. For direct elementary emissions, require medium/submedium and immediate/long-term distinction; require fossil/biogenic origin for carbon emissions. For river-water withdrawal, retain river/basin, intake date and volume, and separate return location, volume and quality. For technosphere waste transfers, retain composition/state, amount, destination and transfer records. Waste fluid is not environmental water. Never silently set unavailable emissions to zero or use total NOx as molecular NO2. Use `cp_emission`, `cp_water` and `cp_waste` for the respective emission, water-withdrawal and waste-transfer evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Original information creation inventory for declared scope; use as an allocated input to a later evaluation or mining study with explicit reuse ledger |
| excluded_use | Reserve valuation/certification; universal per-tonne mining factor; service-hour benchmark; per-copy/download burden without reuse accounting; complete lifecycle claim with unresolved layers |
| required_metadata | All reference qualifiers; geography/year; actual routes; meter/supplier boundaries; stock and allocation ledgers; units; original evidence; provider compatibility |
| required_quality_disclosure | Accepted input; checks performed/skipped; completeness; findings; geology uncertainty; failed work; missing UUID/providers; historical evidence limitations; cutoff sensitivity |
| update_trigger | New version, area/depth/commodity or evaluation stage; changed evidence, route, provider, method, rights or allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-exploration | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp.426–427, 83411–83413. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Own-account information boundary and adjacent services; not LCA factors |
| un-sna2008-exploration | official_guidance | System of National Accounts 2008, §§10.106–10.108, pp.206–207. https://unstats.un.org/unsd/nationalaccount/docs/SNA2008.pdf | Historical conceptual scope: surveys, drilling, enabling transport and re-evaluation. Monetary capital valuation is not physical allocation or a current regulatory instruction. No quantity/lifetime default adopted. |
| jorc2012-reporting | standard | JORC, Australasian Code for Reporting of Exploration Results, Mineral Resources and Ore Reserves, 2012 edition, Table 1 §§1–3, pp.26–29. https://www.jorc.org/docs/JORC_code_2012.pdf | Solid-mineral sampling, assay and reporting quality only within its applicable reporting regime; no oil/gas requirement or LCA recipe/factor. Dataset declares actual reporting standard. |
