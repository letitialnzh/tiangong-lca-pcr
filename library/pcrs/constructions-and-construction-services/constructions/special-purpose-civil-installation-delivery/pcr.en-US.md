---
pcr_id: pcr.constructions-and-construction-services.constructions.special-purpose-civil-installation-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Special-purpose civil installation delivery

## 1. Scope and Applicability

This method covers actual physical construction, installation and accepted delivery of military engineering works, satellite launching sites, waste dumps/incinerators and nuclear-material processing facilities. The shared object is a special-purpose installation with a delimited site, system interface and functional configuration, not a construction service or a bundle of materials. CPC53290 supplies classification context; routes are not interchangeable technologies. An n.e.c. work must establish exclusion from other construction categories and complete its own real route from project evidence.

Ordinary buildings and standalone roads, bridges/tunnels, ports, waterworks/dams, power/mining/general manufacturing facilities, sewage/water-treatment and recreation works are not new entities under this method. Integral roads/buildings/utilities have explicit interfaces and are counted once; necessary permanent process systems cannot be omitted by relabelling the output a civil shell. Nuclear routes retain the real nuclear-material treatment scope, with reactor generation assigned to power facilities; landfill, incineration and nuclear operations are not merged by the word waste. No default recipe, mass per installation, life, design load, emission or compliance approval is assigned.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.special-purpose-civil-installation-delivery |
| classification_refs | CPC 3.0 53290 — Other civil engineering works |
| covered_products | Accepted forts/blockhouses/bunkers/military ranges and test centres, satellite launching sites, waste dumps/incinerators, nuclear-material treatment/processing installations with measured functional configuration; n.e.c. facilities require separate route evidence |
| excluded_products | Construction services; bulk materials and factory-gate equipment; ordinary buildings; other dedicated construction categories; post-handover operation, maintenance, closure and decommissioning |
| representative_product | One complete special-purpose civil installation with declared route, site, as-built configuration and acceptance scope; no single default technology represents every branch |
| production_route | Actual site/civil works → required containment/protective/thermal/launch/nuclear installation → real inspection and commissioning → delimited physical handover |
| market_state | Fixed installation delivered at the declared acceptance endpoint, not lifetime operating service |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Constructed special-purpose installation performing the declared site function within its actual route and system interface |
| How much | One complete delivered entity; measured site area, lengths/heights, cell volumes and actual capacity are route-specific qualifiers |
| How well | Matches the same as-built specification, operating conditions, component completeness and actual acceptance evidence; regulatory authorization is not inferred |
| How long or cycle | One actual construction-to-declared-handover cycle; no service life or future operating cycles assigned |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete special-purpose civil installation |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | facility identifier/route; site and interfaces; complete system/retained-asset register; measured geometry and actual functional capacity; structure/materials/conditions; construction dates; acceptance and cold/hot/active-test endpoint; upstream/logistics/operation/maintenance/demolition coverage and gaps |

item is the single-count display alias of public Item(s). Every inventory row and collection protocol is attributable per declared reference flow, which is the same one physical entity above. Site area/dimensions/capacity qualify the function; do not infer area, length or mass from count without an independently supported physical relationship, or replace the entity with cost, operating throughput or assumed life. Required qualifiers belong in the data package; absence makes the reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Output is 1 item of the same accepted complete installation; use cp_acceptance. All rows/protocols aggregate per declared reference flow; item and 件 are public Item(s) single-count aliases. |
| volume_state | fresh_concrete; soil_disposal; site_water; washwater; groundwater; fresh_discharge; shield_concrete | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use cp_civil, cp_waste, cp_water and cp_install to retain actual volume state; bank/loose soil, fresh concrete and supply/extraction/discharge water are distinct. Volume-to-mass uses measured/evidenced density at the same state, temperature/moisture/salinity; no default 1000 kg/m3. |
| sheet_area | hdpe_liner; geotextile | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | cp_liner records actual supplied/installed area, thickness, overlap and coupons; area numerator is attributable per declared reference flow. No kg inferred without evidenced areal mass/density. |
| electricity_energy | electricity_lv | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve public Net calorific value and energy unit group; cp_activity records actual CN/<1 kV user conditions. Convert original kWh by 1 kWh=3.6 MJ, never confuse it with diesel mass. |
| asset_share | steel_formwork; crane_share | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_assets uses measured net mass or traceable supplier weighing of the complete same-configuration asset, not facility mass. A separate dimensionless manufacture share requires lifetime-activity evidence and cumulative conservation ≤1. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed actual site, retained/clearance/remediation state and supplier-gate/site interfaces |
| starting_condition_role | Recorded construction start, not a zero-burden assumption for land, existing works or equipment |
| product_classification_scope | Special-purpose fixed installations identified by CPC3.0 53290 context and actual exclusion boundaries |
| recursive_input_rule | Retained/purchased same-category installation modules are real assets with supplier and prior-burden records, not recursively created complete entities |
| upstream_dataset_requirement | Separately link upstream materials/equipment and logistics matching real material/interface/route; disclose gaps |
| disclosure | Route/function/completeness, site geometry, dates/acceptance, embedded components, shared-asset shares, water/releases/land/noise, later stages and unmeasured gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_entity | reference product | The output is the constructed physical installation, including integral permanent equipment/services and real acceptance needed for its declared function. Standalone ordinary buildings, roads, dams/flood schemes, power plants, manufacturing/mining plants, sewage/water-treatment plants and outdoor recreation works remain their own categories. Bound shared interfaces and account for every integral asset once. | `un-cpc-civil-2025` |
| boundary_stage | dataset | The base foreground covers actual supplier-gate-to-site logistics, surveyed site preparation, civil construction, route-specific installation, temporary works, inspection and commissioning through the declared handover. Supplier material/equipment manufacture is linked separately with compatible datasets and explicit gaps. This is not evidence of complete cradle-to-gate or full lifetime coverage. | `un-cpc-civil-2025` |
| boundary_route | all inventory rows | Select the real route before collecting the inventory. The cards are distinct conditional exchanges, not a universal recipe. Reconcile the full as-built functional-system register: landfill cells/liners/leachate; military earth protection/structures/targets/support; launch pad/trench/ground fluid and control systems; incinerator reception/thermal/cleaning/ash/recovery; nuclear processing/containment/shielding/safety. Add one exact atomic row for every actual missing component, batch ingredient, test consumable, packaging, waste and release. A residual n.e.c. work needs its own evidenced route/system closure and exclusion check; this PCR alone does not establish its technical design. | `un-cpc-civil-2025`; `epa-industrial-waste-guide`; `dod-firing-ranges-2025`; `nasa-launch-construction-2018`; `jrc-waste-incineration-2019`; `iaea-ssr4-2017` |
| boundary_embedded | all inventory rows | Record either supplied complete assemblies or their actual on-site fabrication inputs for the same scope; do not count both. Exclude contained steel/lining/filter/controls from separate rows unless genuinely outside the assembly. Record existing foundations and reused equipment with retained-state, repair and prior-burden evidence. Maintain internal versus external material/water interfaces. | `jrc-waste-incineration-2019`; `iaea-ssr4-2017` |
| boundary_tests | acceptance | Declare mechanical/cold/wet/hot/active test stages actually needed and completed. Include actual test fuel, water, electricity, purge substances, trial feed, products, residues and measured releases before the endpoint, adding exact individual rows. Do not assume a launch/firing/active-nuclear/waste-incineration trial occurs or is zero-burden. Necessary unfinished tests prevent complete handover claims; split later regular operation by records. Test results do not establish regulatory approval. | `dod-firing-ranges-2025`; `nasa-launch-water-test-2018`; `iaea-ssr4-2017` |
| boundary_environment | site_support | Separate direct resource extraction, purchased water, waste-liquid transfers and liquid receptor releases. Land transformation/occupation requires measured prior/post land use and actual area/time; noise requires source/receptor, levels, duration/frequency and method, not a fabricated additive mass exchange. Actual pollutants, soil contamination, blasting and marine releases need separate identity/activity evidence. Missing characterization or measurements remain gaps, not zero impacts. | `epa-construction-dust-1995`; `epa-concrete-washout-2012` |
| boundary_later | dataset | Operating waste receipt/incineration, launches, military use and nuclear material processing after handover are separate stages. Maintenance, relining, component replacement, closure, demolition, radioactive decommissioning and destinations are separately modelled only from evidenced schedules and quantities; no default life, waste conversion or recycling credit. Construction commissioning is not hidden in later operation. | `un-cpc-civil-2025`; `iaea-ssr4-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| civil | Site preparation and common civil construction | required | Actual surveyed/retained site and declared civil work packages | foreground construction | per declared reference flow |
| site_support | Logistics, temporary works and construction utilities | required | Actual activities and environmental transfers, not default factors | foreground support | per declared reference flow |
| containment | Waste-dump containment and drainage installation | conditional | Actual dump/cell with engineered containment/drainage; unlined designs require their actual engineered works, never an assumed liner | route construction | per declared reference flow |
| military | Military protective and range systems | conditional | Actual fort/blockhouse/bunker/firing range/test-centre route | route installation | per declared reference flow |
| launch | Satellite-launch civil and permanent ground systems | conditional | Actual satellite launching site with declared ground-support scope | route installation | per declared reference flow |
| thermal | Waste-incineration permanent systems | conditional | Actual waste-incinerator facility with its real furnace/cleaning/recovery technology | route installation | per declared reference flow |
| nuclear | Nuclear-material-processing containment and safety systems | conditional | Actual nuclear-material treatment/processing; reactor generation and ore mining excluded | route installation | per declared reference flow |
| acceptance | Inspection, commissioning and physical handover | required | Actual documented tests and accepted configuration; incomplete test endpoint disclosed | acceptance | per declared reference flow |

### Process: Site preparation and common civil construction (`civil`)

#### Inputs

##### Product flows

###### Fresh ready-mixed Portland-cement concrete before placement (`fresh_concrete`)

Record only actual purchased fresh concrete at the batch-plant gate, before placing, with delivery volume, mix identifier, strength/exposure specification and acceptance tickets. Record transport, pumping, vibrating and curing separately. The placed-concrete identity does not represent this input; site batching requires separate cement, each aggregate, admixture and mixing-water rows instead of counting both routes.

- Selected flow: Fresh ready-mixed Portland-cement concrete before placement
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable atomic exchange amount using cp_civil; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `epa-concrete-washout-2012`

###### Hot rolled rebar steel (`rebar`)

Conditional on actual hot-rolled low-alloy reinforcing steel with C ≤ 0.2%, at the plant production-mix interface. Collect grade certificates and delivered, installed, returned and offcut mass. Other reinforcement grades require a separate identity; reinforcement contained in purchased precast assemblies is not counted again.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_civil; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `un-cpc-civil-2025`

###### gravel 2/32 (`gravel_drainage`)

Use only actual undried 2/32 gravel from a matching wet/dry quarry plant gate. Its use in drainage or a base is conditional on approved project grading and filtration design, not prescribed by this PCR. Keep delivered wet mass and moisture evidence; other sizes, washed state or recycled aggregate require separate rows/identities.

- Selected flow: gravel 2/32 `4f19a2fb-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_civil; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_civil`
- Sources: `epa-industrial-waste-guide`; `epa-msw-landfills`

#### Outputs

##### Waste flows

###### Hardened Portland-cement concrete offcuts sent for treatment (`concrete_debris`)

Record segregated hardened concrete leaving the construction boundary by weighbridge and destination. Retained fill and returned fresh concrete are separate; neither a mixed construction-waste flow nor recycled aggregate product establishes this waste identity.

- Selected flow: Hardened Portland-cement concrete offcuts sent for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_waste; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

###### Non-contaminated excavated mineral soil sent for disposal (`soil_disposal`)

Conditional on actual export for disposal. Collect measured bank/loose volume separately, water content, contamination assessment, waste status and destination. On-site cut-and-fill is an internal transfer, not an exported exchange. Contaminated soil requires its own material/contaminant specification.

- Selected flow: Non-contaminated excavated mineral soil sent for disposal
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable atomic exchange amount using cp_waste; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `un-cpc-civil-2025`

### Process: Logistics, temporary works and construction utilities (`site_support`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Record actual diesel consumption of excavators, compactors, pumps, cranes, generators and attributable delivery/return trucks, disaggregated by equipment and work package. This identity has unspecified grade, formulation, refinery and geographic supply: declare the real supplier, batch, fossil/biogenic fractions and boundary. It represents fuel, not a combustion-service exchange or an emission quantity.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_activity; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_activity`
- Sources:

###### Alternating current (`electricity_lv`)

Only actual CN grid-average consumption supplied to the user at <1 kV uses this identity. Meter construction, liner welding, equipment installation and tests separately by work package. Preserve public Net calorific value/MJ; record kWh and convert exactly by 3.6 MJ/kWh. Other countries, voltages, contractual mixes and generator output need distinct verified identities; do not also count generator output and the fuel used to make it.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual attributable atomic exchange amount using cp_activity; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_activity`
- Sources: `nist-si-energy`

###### Supplied liquid freshwater for construction and acceptance tests (`site_water`)

Collect actual metered freshwater supplied at the declared site delivery interface for curing, dust suppression, washout, pressure testing or deluge tests. Declare source, treatment, supplier and distribution links. A Hong Kong treatment-plant gate flow or a Korean soil-washing case is not generic site supply; do not use water-resource or effluent identities. Quantify internal recirculation separately without counting it as new supply.

- Selected flow: Supplied liquid freshwater for construction and acceptance tests
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable atomic exchange amount using cp_water; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-concrete-washout-2012`; `nasa-launch-water-test-2018`

###### Reusable fabricated steel formwork panel manufacture share (`steel_formwork`)

Include only the attributable manufacture burden of actual reusable fabricated panels. Collect same-configuration net panel mass, asset identifier, prior allocations and evidence for the dimensionless project share. Sum shares across all projects/periods/uses must not exceed one; unknown reuse history or lifetime activity remains a review item. Record present transport, cleaning and repair separately at their actual quantities.

- Selected flow: Reusable fabricated steel formwork panel manufacture share
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net panel kg multiplied by evidenced dimensionless manufacture share; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources:

###### Mobile construction crane manufacture share (`crane_share`)

Use the actual complete crane configuration and measured supplier net mass, excluding transport packaging. Apply only an evidenced lifetime activity/beneficiary share from the cumulative asset register, never a full new manufacture burden reset for each project. Fuel, electricity, travel and maintenance used now are separate actual activities.

- Selected flow: Mobile construction crane manufacture share
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete crane kg multiplied by evidenced dimensionless manufacture share; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources:

##### Elementary flows

###### ground water (`groundwater`)

Conditional on actual direct extraction of fresh groundwater for construction/dewatering/test use within the foreground. This is a Resources from water/renewable material resource, Volume/m3 identity. Record extraction location/country, aquifer, metered volume, use and return; contaminated extracted groundwater and supplied product water are distinct. Assess characterization coverage for the actual geography; extraction is not automatically consumptive use.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable atomic exchange amount using cp_water; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

#### Outputs

##### Waste flows

###### Collected alkaline concrete washout water sent for treatment (`washwater`)

Conditional on contained liquid washout actually exported for treatment. Meter the liquid, retain pH/composition and receiver records, and separately weigh settled concrete solids; the two are not a single exchange. No assumption of a direct water/soil release is allowed. On-site recovered washwater remains internal until it crosses the boundary.

- Selected flow: Collected alkaline concrete washout water sent for treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable atomic exchange amount using cp_waste; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fossil`)

Only evidenced actual fossil CO2 released immediately to external air, unspecified subcompartment, is recorded. Use documented fuel-specific carbon/oxidation evidence or measured release with controls and activity coverage; do not invent a factor from the presence of diesel. Separate biogenic CO2, internal exhaust transfer, soil and delayed releases.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_release; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources:

###### nitrogen monoxide (`no`)

Conditional on separately measured/justified molecular NO, CAS 10102-43-9, immediately emitted to external air, unspecified subcompartment. Total NOx reported as NO2-equivalent cannot establish this molecular quantity. Do not substitute NO2 or N2O.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_release; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources:

###### nitrogen dioxide (`no2`)

Conditional on separately measured/justified molecular NO2, CAS 10102-44-0, immediately emitted to external air, unspecified subcompartment. NOx-as-NO2 is not molecular NO2 and the erroneous N2O4 synonym does not change the substance definition. Record exact species and sampling conditions.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_release; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources:

###### Particulate matter, particle size unspecified (`dust`)

Use only actual external-air particulate release with particle size unspecified, after controls. Collect source operation, weather, soil moisture/silt, receptor boundary and measured or independently justified site-specific release. The historical AP-42 overall TSP construction factor is not a PM2.5/PM10 factor or a default for this category. If size fractions are known, add exact non-overlapping fraction identities instead of double counting this row.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_release; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `epa-construction-dust-1995`

###### Water (`fresh_discharge`)

Only liquid water actually discharged directly to a freshwater receiver uses this Emissions to fresh water, Volume/m3 identity. Meter discharge, record receiver, salinity/composition and treatment; dissolved/particulate pollutants need separate exact species rows. This is not supplied water, a resource, water vapour, seawater return or collected wastewater sent to treatment.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable atomic exchange amount using cp_water; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `nasa-launch-water-test-2018`; `epa-concrete-washout-2012`

### Process: Waste-dump containment and drainage installation (`containment`)

#### Inputs

##### Product flows

###### Clay (`liner_clay`)

Only actual natural clay supplied at a mining-site interface uses this raw-clay identity; document supplier mineralogy, moisture and delivery/transport. Compaction, lift geometry and permeability are separately measured construction conditions, not properties supplied by the UUID. In-situ reused soil and geosynthetic clay liners are distinct routes. The cited historical US guide supplies component examples, not worldwide mandatory thickness/permeability.

- Selected flow: Clay `226972bf-eeed-4ec4-a22e-f227e582ca18`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_liner; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liner`
- Sources: `epa-industrial-waste-guide`; `epa-msw-landfills`

###### HDPE landfill geomembrane sheet (`hdpe_liner`)

Conditional on actual HDPE liner design. Measure supplied, welded/installed, overlap, test coupon, returned and discarded sheet area with thickness, resin grade, seam and inspection records. Area is a genuine input numerator per facility; neither density nor sheet mass is assumed. A 2 mm Korean biopile sheet is not a generic landfill-liner identity.

- Selected flow: HDPE landfill geomembrane sheet
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual attributable atomic exchange amount using cp_liner; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liner`
- Sources: `epa-industrial-waste-guide`; `epa-msw-landfills`

###### Perforated HDPE leachate drainage pipe (`hdpe_pipe`)

Conditional on the real drainage design. Collect net delivered/installed pipe mass and traceable diameter, wall, perforation, resin and chemical-compatibility specification; lengths remain raw geometry. Pumps, geotextiles and drainage media are separate exchanges. Quantify each actual additional liner/drainage component before claiming a complete cell.

- Selected flow: Perforated HDPE leachate drainage pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_liner; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liner`
- Sources: `epa-industrial-waste-guide`; `epa-msw-landfills`

###### Polypropylene nonwoven drainage filter geotextile (`geotextile`)

Only if this actual polymer/form is in the containment design; collect delivered/installed/waste area, areal mass, opening size and test records. Other polymers or geonets need individual identities and rows; this is not an instruction to select a generic geosynthetic mixture.

- Selected flow: Polypropylene nonwoven drainage filter geotextile
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the actual attributable atomic exchange amount using cp_liner; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liner`
- Sources: `epa-industrial-waste-guide`; `epa-msw-landfills`

### Process: Military protective and range systems (`military`)

#### Inputs

##### Product flows

###### Ballistic steel protective plate (`ballistic_plate`)

Only actual ballistic protection plates in firing-range baffles, target protection or a documented protective structure. Record plate alloy/heat treatment, thickness, installed position and accepted grade. Ordinary steel-sheet identity with conflicting Chinese name is not an accepted ballistic grade. Fort/bunker armour and doors require their own real designs; no invented blast load or universal ballistic specification.

- Selected flow: Ballistic steel protective plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `dod-firing-ranges-2025`

###### Installed steel protective bunker door assembly (`protective_door`)

Conditional on a real bunker/fort door in the accepted system register. Collect assembly count, opening dimensions, mass if measured, specification and acceptance records. Include its frame/hinges only once; do not infer this door or military test equipment is required for every firing range.

- Selected flow: Installed steel protective bunker door assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `un-cpc-civil-2025`

###### Installed firing-range extraction fan assembly (`range_fan`)

Only for an actual covered/enclosed firing range requiring this installed extraction system. Record fan configuration, duty and control interface, installation and measured acceptance airflow/control tests; actual filter assemblies are separately recorded. This does not prescribe an indoor range route to every outdoor military work.

- Selected flow: Installed firing-range extraction fan assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `dod-firing-ranges-2025`

### Process: Satellite-launch civil and permanent ground systems (`launch`)

#### Inputs

##### Product flows

###### Fabricated steel launch flame-deflector assembly (`flame_deflector`)

Only for a documented steel-deflector launch-site design. Use supplier net as-built assembly mass or reconciled same-scope BOM, excluding packaging; record actual supports, liners and embedded content. NASA Pad39B is a historical assembly example, not a default material quantity, rocket capacity or life. Site-fabricated plates/weld inputs replace, rather than supplement, the same complete assembly burden.

- Selected flow: Fabricated steel launch flame-deflector assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `nasa-launch-construction-2018`

###### Installed launch-pad water-deluge pump assembly (`deluge_pump`)

Conditional on actual installed deluge design. Record count/model, real pumping duty, pipes/tank interfaces and commissioning tests. Storage reservoirs, water piping and controls outside the assembly need separate rows. Launch water-use figures do not establish construction-test water demand.

- Selected flow: Installed launch-pad water-deluge pump assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `nasa-launch-water-test-2018`

###### Austenitic stainless-steel launch-site fluid pipe (`launch_pipe`)

Conditional on this actual installed alloy/form; specify grade, wall, pressure/temperature and whether it carries test water or a named propellant. Collect supplier net mass and weld/pressure-test records. Actual valves, cryogenic tanks and other service lines are individually added; propellant loading or firing is included only if it occurs within the declared acceptance endpoint, with exact substances and releases.

- Selected flow: Austenitic stainless-steel launch-site fluid pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `nasa-launch-construction-2018`; `nasa-launch-water-test-2018`

### Process: Waste-incineration permanent systems (`thermal`)

#### Inputs

##### Product flows

###### Installed rotary-kiln waste-incinerator assembly (`incinerator`)

Only for actual rotary-kiln technology. Count the accepted supplied assembly and declare steel shell, drive, refractory and burner inclusion from the supplier BOM. Grate/fluidised-bed/other thermal routes require their own exact furnace row. The facility additionally reconciles reception bunker/crane, fire protection, boiler/heat recovery, flue-gas treatment, ash handling, wastewater and stack where present; a furnace alone is not the complete delivered incinerator facility.

- Selected flow: Installed rotary-kiln waste-incinerator assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `jrc-waste-incineration-2019`

###### high alumina refractory brick (`refractory`)

Only actual separately supplied sintered high-alumina brick, Al2O3 >48%, manufactured at 1350–1450 °C, at the plant-gate production-mix interface. Collect grade and supplier route evidence, delivered/installed/offcut mass. Use only the portion not included in a complete furnace assembly; refractory castable, silica and magnesia products need separate exact identities. No universal lining recipe or relining lifetime is imposed.

- Selected flow: high alumina refractory brick `773fbca7-3575-483c-b38d-c017771979b3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `jrc-waste-incineration-2019`

###### Installed waste-incinerator baghouse assembly (`baghouse`)

Conditional on actual bag-filter flue-gas cleaning. Count the supplied assembly with casing/filter/support/motor boundary, real duty and acceptance records; scrubber, ESP, sorbent dosing and stack are separate actual components. Do not select bag filtration as the only possible route or omit actual wet-treatment systems to fit this row.

- Selected flow: Installed waste-incinerator baghouse assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `jrc-waste-incineration-2019`

### Process: Nuclear-material-processing containment and safety systems (`nuclear`)

#### Inputs

##### Product flows

###### Fresh heavyweight cement concrete for nuclear shielding (`shield_concrete`)

Only where the real nuclear fuel-cycle design specifies this concrete. Collect actual aggregate species, mix, density at placement, shielding thickness, openings, QA and delivered/placed volumes; ordinary concrete tickets do not prove shielding performance. Alternative shielding material requires its own row. It is separate from ordinary civil concrete for non-overlapping volumes.

- Selected flow: Fresh heavyweight cement concrete for nuclear shielding
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `iaea-ssr4-2017`

###### Installed stainless-steel nuclear-material glovebox (`glovebox`)

Conditional on an actual glovebox process and containment configuration. Count assembled accepted boxes with supplier material/lining/window/glove/ventilation boundary, leak/containment tests and equipment QA. Not all nuclear-material processing uses gloveboxes; vessels, transfer systems, criticality geometry and ventilation are reconciled from the actual system register, not inferred from this example.

- Selected flow: Installed stainless-steel nuclear-material glovebox
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `iaea-ssr4-2017`

###### Installed HEPA nuclear-facility exhaust filter module (`hepa`)

Only an actual HEPA exhaust module in the approved project design. Record tested filter class, housing, seal/duct interface, number and commissioning acceptance. Other filter/containment technologies and embedded fan/filters are reconciled individually; cold testing does not waive required active commissioning. No regulatory authorization is implied by the LCA row.

- Selected flow: Installed HEPA nuclear-facility exhaust filter module
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable atomic exchange amount using cp_install; evidenced absence is distinct from unmeasured, never assign zero to missing data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_install`
- Sources: `iaea-ssr4-2017`

### Process: Inspection, commissioning and physical handover (`acceptance`)

#### Outputs

##### Product flows

###### Accepted complete special-purpose civil installation (`accepted_installation`)

One physically delimited accepted installation of the declared route and configuration, including permanent systems necessary for the specified delivered function. Geometry/capacity and acceptance endpoint come from as-built records. A waste cell, launch site, bunker or processing plant is not interchangeable merely because each is counted once; identify the exact entity. Missing necessary commissioning or systems prevent a complete delivered-entity claim.

- Selected flow: Accepted complete special-purpose civil installation
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `un-cpc-civil-2025`

## 7. Allocation and Co-product Handling

The attribution requirements below are authored foreground-accounting rules grounded in actual project subdivision and cp_assets records; classification evidence does not establish allocation coefficients. Unknown beneficiaries/activity/lifetime data remain under review with no default shares.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | construction work packages | Use measured physical subdivision before allocation: delivered entity/cell, retained asset, regular-operation output and other project beneficiaries must have separate identifiable records. Shared logistics, test utilities and civil structures use traceable actual meters, work activity and geometric interfaces. Cost alone does not establish physical attribution; unknown shares remain review. |  |
| allocation_assets | steel_formwork; crane_share | Maintain a cross-project/period/reuse asset register. Manufacture share is dimensionless and supported by actual lifetime activity or a justified beneficiary basis; cumulative assigned shares ≤1. Do not reset full burden each project or invent life/uses. Physical net mass/configuration and share are distinct fields. Current fuel, transport, repairs and new consumable replacement are separately attributable; incomplete lifetime evidence blocks a final allocated burden. This is an authored foreground-accounting requirement based on cp_assets, not a CPC classification rule. Where service is expressed on a comparable actual activity basis, the project share is attributable project activity divided by evidenced total same-asset service; retain prior shares and update the common denominator consistently. |  |
| allocation_residues | waste and trial outputs | Do not grant automatic avoided-production or energy-recovery credits. Segregated exported scrap/soil/concrete, returned products and internal reuse have distinct status, quantity and receivers. If saleable commissioning output coexists, subdivide actual activities or document a reasoned physical allocation with complete balances and uncertainty; never substitute operating waste throughput for the construction reference. | `jrc-waste-incineration-2019`; `epa-concrete-washout-2012` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | acceptance | accepted_installation | acceptance register | entity identifier; route; site/interfaces; as-built/measured geometry; structure/material; actual capacity/unit/conditions; retained assets; system completeness; test dates/results/gaps | Reconcile survey, as-built drawings, system/component register and signed handover to the same entity; no assumed geometry/capacity | item | each acceptance milestone and final handover | actual construction through declared handover | same site and all delimited systems | per declared reference flow | calibrated survey; as-built deviations; signed test/acceptance and gaps; per declared reference flow; output 1 item |
| cp_civil | civil | civil atomic inputs | material and geometry ledger | work package; each material specification; delivery/installed/return/waste quantities; mix tickets; strength/exposure specification; bank/fresh state; density/moisture evidence | Reconcile calibrated weighing/volume ledger and as-built geometry with receipts; separately record earthworks, reinforcement, formwork, placing, compaction, curing and actual precast/site-batching route | kg; m3 | each batch/work package | full actual construction period | all civil works and integral interfaces | per declared reference flow | scale/meter calibration, material tickets and balance differences; per declared reference flow; distinguish states and reconcile balances |
| cp_activity | site_support | diesel; electricity_lv | meter and activity ledger | equipment/vehicle ID; process; work period; region/voltage; meter readings; fuel stock/receipts/returns; batch density/LHV/carbon origin; trip/load and supplier interface | Submeter construction/tests; match calibrated fuel weighing/meters to shift/trip logs; cover subcontractors; separate fuel, generator output and supplied user electricity | kg; kWh; MJ | each shift/trip and test | all construction, logistics and declared commissioning | actual equipment, logistics and every route utility | per declared reference flow | meter calibration, supplier conditions, stock balance and attribution evidence; per declared reference flow; attributable by work package without duplication |
| cp_water | site_support | site_water; groundwater; fresh_discharge | separate water ledger | water source/medium; metering interface; start/end volumes; receiver; salinity/temperature/composition; test and recirculation volume; extraction location/aquifer; destination | Meter supply, direct resource extraction, recirculation, contained effluent and receptor discharge separately; reconcile water ledger with stocks/evaporation measured or under review | m3 | each shift and test/discharge | actual construction to handover | supply gates, wells and actual receiver outfalls | per declared reference flow | meter calibration, source/destination records and composition tests; per declared reference flow; each interface counted once |
| cp_assets | site_support | steel_formwork; crane_share | cumulative asset register | asset ID; same-configuration net mass/weighing; physical scope; previous projects/shares; actual current/lifetime activities/beneficiaries; repair/replacement; unproven life | Reconcile complete configuration by traceable weighing/supplier net mass; derive dimensionless manufacture share from cross-project register and check cumulative ≤1; unknown remains review | kg; dimensionless share | each entry/exit/reuse and attribution | current construction and all allocated lifetime records | actual equipment/formwork assets and all beneficiaries | per declared reference flow | net-mass originals, configuration and cumulative-share conservation; per declared reference flow; manufacture share distinct from current energy |
| cp_liner | containment | liner_clay; hdpe_liner; hdpe_pipe; geotextile | liner and drainage CQA ledger | cell ID; geometry/thickness/lifts; material grade/wet mass/area; overlaps/joints; seams/coupons; density/permeability tests; drainage pipes/filter components; loss destination | Record construction and hold-point acceptance against actual project design; reconcile supply/installation/returns/coupons/waste; historical guide does not replace current design/tests | kg; m2; m3 | each batch/panel/lift/hold-point acceptance | entire actual containment installation | actual cell and drainage interfaces | per declared reference flow | material, seam/compaction/permeability test and as-built evidence; per declared reference flow; same-material/state cell reconciliation |
| cp_install | acceptance | route-specific installed assemblies | system and installation ledger | route/work-package/component IDs; complete configuration/BOM scope; net count/weighing/volume; material/grade/state; interfaces; welding/installation; actual cold/wet/hot/active tests; consumables/feed/products/waste/releases | Reconcile supplied, installed and accepted systems individually; calibrated weighing/meters retain same-configuration net mass; avoid assembly/embedded overlap; atomize real test feeds and all additional components | item; kg; m3 | each component and test | route installation through declared acceptance | actual military/launch/incineration/nuclear systems | per declared reference flow | supplier configuration, QA, weld/leak/function tests and signoff; per declared reference flow; full system/test closure |
| cp_waste | civil | soil_disposal; concrete_debris; washwater | segregated waste ledger | atomic material; source process; contamination/waste status; solid/liquid phase; measured amount; moisture/density and volume state; internal reuse/return; receiver/transport/treatment | Separately weigh/meter each material and reconcile transfer notes; never combine solids/liquids; distinguish internal flows, product returns and environmental releases | kg; m3 | each load/transfer | all construction and acceptance | each actual generating operation and external receiver | per declared reference flow | weighing/metering, contamination analysis and receiver evidence; per declared reference flow; reconcile stocks and destinations |
| cp_release | site_support | co2_fossil; no; no2; dust | species and source release evidence | real activity/period; species/CAS; fossil/biogenic origin; medium/submedium; controls; sampling or original factor/applicability; external release; land use/area/time; noise receptor/level/duration | Measure exact external species release or calculate from independently supported site activity/parameters; retain controls/uncertainty; observe land/noise separately without forced mass exchanges; absent data remain gaps | kg; environmental context units | actual emitting activities and representative sampling | all construction and declared tests | actual site sources and external receivers | per declared reference flow | analysis/factor originals, compartment/activity coverage and controls; per declared reference flow; aggregate exact species and non-overlapping scopes separately |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| attribute_entity | all inventory rows | Aggregate each measured attributable atomic exchange within the same accepted entity; output is 1 item with no further division by assumed mass/area/life. Physically subdivide shared interfaces first; unknown stays unknown. | raw ledgers; cp_acceptance; actual interface/attribution records | each atomic quantity per declared reference flow |  |
| convert_energy | electricity_lv | MJ = measured kWh × 3.6; preserve original readings and actual voltage/region. | cp_activity; kWh | MJ | `nist-si-energy` |
| convert_density | fresh_concrete; soil_disposal; diesel; site_water; shield_concrete | Only when a mass/volume conversion is needed and same-state density is evidenced: kg = measured m3 × same-state kg/m3. Retain raw quantity, density method, temperature/moisture/salinity and uncertainty; never guess unknown density. | measured volume; same-state density evidence; relevant collection protocol | traceable converted kg and original m3 |  |
| allocate_manufacture | steel_formwork; crane_share | Attributable manufacture-equivalent kg = measured same-configuration asset net kg × evidenced dimensionless manufacture share; sum across every project/period/reuse for each asset ≤1. Unknown lifetime-activity/beneficiary evidence prevents final shares; current operation is separate. | cp_assets; net mass and cumulative-share records | manufacture-equivalent kg per declared reference flow and unresolved shares |  |
| material_balance | all inventory rows | For the same material/state reconcile receipts + opening stock = installed/consumed + returned + exported waste + closing stock + evidenced loss; do not duplicate internal transfers. Do not add different volume states or solid/liquid phases; explain discrepancies. | same-state ledgers; original measurements/destinations | material balance and discrepancy disclosure | `epa-concrete-washout-2012` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_function | reference product | Actual function, geometry/capacity, configuration and acceptance match the same entity; do not compare bare counts across facility types | cp_acceptance as-built/acceptance originals |
| quality_coverage | all inventory rows | Cover every actual work package/subcontract, permanent system, test and atomic exchange; label occurred, evidenced absent, unknown and gaps | full system/BOM and amount/destination ledgers |
| quality_source | dataset | Historical sources are bounded component/method examples; no design numbers/life transferred; current project standards/authorization independently checked | original sources, scope/date and actual project technical evidence |
| quality_identity | all inventory rows | Match actual material/form/route/geography, reference property/unit and environmental compartment; unresolved identities retain exact rows; official Chinese names agree | verified originals and project qualifiers |
| quality_time | dataset | Use complete actual construction/test period; disclose supply-year/technology representativeness, rework and metering gaps | schedule, shift logs, calibration and correction evidence |
| quality_share | steel_formwork; crane_share | Retain same-configuration net mass and lifetime activity/beneficiary evidence; conserve cumulative shares; no defaults for unknowns | cp_assets cross-project audited register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset | Verify the route, site and complete physical system against the as-built/acceptance register and classification exclusions. Missing required systems/tests must be reported as incomplete; an empty or unrelated route is not a complete facility. | `un-cpc-civil-2025` |
| validate_basis | all inventory rows | Require 1 item output and per-declared-reference-flow inventory/protocol coverage for the exact same accepted installation. Check actual geometry/capacity, volume state, stock/returns/waste and unit conversions. No implicit count-to-mass/area/lifetime conversion or unsupported density. | `un-cpc-civil-2025` |
| validate_identity | all inventory rows | For each selected identity recheck substance/form, route, grade, region/interface, reference property and unit group; elementary compartment/subcompartment and temporal nature must match. Unresolved UUIDs stay specific and registered. Official localized names must agree. Fuel occurrence does not prove emissions, NOx-equivalent does not prove molecular NO/NO2, and untreated effluent transfer is not water emission. | `epa-concrete-washout-2012` |
| validate_closure | dataset | Check mandatory and actual conditional work packages, installed-system/BOM coverage, commissioning records, environmental gaps and cumulative asset shares. Unmeasured rows and omitted significant interfaces are unresolved coverage, never zero. Report checked/skipped scopes and uncertainty; do not assert full cradle-to-gate, lifetime or regulatory/methodology approval. | `iaea-ssr4-2017`; `epa-construction-dust-1995` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground process data package for special-purpose installation construction and declared accepted delivery |
| downstream_use | Construction assessment for matching route/function/configuration and explicitly linked expanded facility lifecycle studies |
| allowed_use | Inventory within verified entity and actual construction/test scope; upstream links and asset attribution under disclosed conditions |
| excluded_use | Bare-count cross-route comparison; default per-installation burden; operating waste-treatment/launch/nuclear-processing factors; automatic lifetime/environmental compliance/methodology approval |
| required_metadata | PCR/entity ID; route/site; measured geometry/actual capacity; permanent-system/BOM boundaries; retained assets; material states/supply interfaces; construction/acceptance dates; actual test endpoint; allocation and stage interfaces |
| required_quality_disclosure | Data sources/measurement/representativeness; unknown identities/amounts; omitted components/tests/upstream/environment and later stages; asset shares and uncertainty; review states follow their metadata |
| update_trigger | Changed function/system/geometry/material/route; rework/test endpoint; identity/source revision; new reliable measurement; asset share/beneficiary change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-civil-2025` | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p282; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Physical construction categories and distinction from construction services; official residual scope, not design requirements. |
| `epa-industrial-waste-guide` | official_guidance | US EPA, Guide for Industrial Waste Management, 2003, Chapter7B pp7B-1–7B-36 and introductory scope ppvii–x; https://www.epa.gov/sites/default/files/2016-03/documents/industrial-waste-guide.pdf | Historical non-hazardous industrial-waste containment component/design/installation examples. Excludes municipal/hazardous/mixed radioactive/mining waste; no copied numerical design criteria or universal liner route. |
| `dod-firing-ranges-2025` | official_guidance | DoD, UFC4-179-02 Small Arms Ranges, 5 March2020, Change1 13 March2025, §§3-8.1,3-10.2–3-11,4-16,4-21.6, pp16,21–22,40,54–55; https://www.wbdg.org/FFC/DOD/UFC/ufc_4_179_02_2020_c1.pdf | Range drainage, protective assemblies and ventilation acceptance examples; not complete bunker/fort design or universal worldwide criteria. |
| `nasa-launch-construction-2018` | official_guidance | NASA, Launch Pad39B Flame Trench Nears Completion, 29 May2018, main construction description; https://www.nasa.gov/humans-in-space/launch-pad-39b-flame-trench-nears-completion/ | Historical steel flame-deflector/trench assembly example; project quantities and mission data are not defaults. |
| `nasa-launch-water-test-2018` | official_guidance | NASA, Successful Water Flow Test at Launch Pad39B, October2018, main test description; https://www.nasa.gov/image-article/successful-water-flow-test-launch-pad-39b/ | Actual deluge-system acceptance-test example; collect project test water/energy, do not transfer operational water quantities. |
| `jrc-waste-incineration-2019` | official_guidance | European Commission JRC, Waste Incineration BREF, 2019, EUR29971 EN, doi:10.2760/761437, §2.2.1.3.2 p25/PDF59 and rotary-kiln discussion pp47–50/PDF81–84; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC118637/jrc118637_wi_bref_2019_published.pdf | Installed reception, refractory-lined thermal and flue-gas system examples; not a construction bill of quantities, mandatory single technology, or operating-emission factor. |
| `iaea-ssr4-2017` | official_guidance | IAEA, Safety of Nuclear Fuel Cycle Facilities, SSR-4, 2017, §1.8 p3, Requirement53 pp82–83 and Requirement54 pp83–89; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf | Fuel-cycle construction QA/as-built and cold/active commissioning; excludes reactors/natural ore processing/waste disposal. Actual authorization and site criteria remain project evidence. |
| `epa-concrete-washout-2012` | official_guidance | US EPA, Concrete Washout, EPA833-F-11-006, February2012, pp1–2; https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Historical construction washout containment, liquid/solid separation and recovery examples; no default pH or discharge factor transferred. |
| `epa-construction-dust-1995` | official_guidance | US EPA, AP-42 §13.2.3 Heavy Construction Operations, January1995 with posted corrections, pp13.2.3-1–2; https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Historical source-operation/weather/control and TSP-factor limitation; no default area/month factor or invented size fraction. |
| `nist-si-energy` | official_guidance | NIST SP811 (2008), Guide to the SI, Appendix B.9, Energy table, kilowatt hour→megajoule; https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9 | Exact unit conversion 1 kWh=3.6 MJ; retained conversion is unaffected by the 2019 base-unit revision; not a fuel heating value or emission factor. |
| `epa-msw-landfills` | official_guidance | US EPA, Municipal Solid Waste Landfills, official overview, composite-liner and leachate-collection description; https://www.epa.gov/landfills/municipal-solid-waste-landfills | Municipal landfill component example, distinct from the industrial-waste guide; actual jurisdiction/design governs. No numerical liner/operating criteria transferred. |
