---
pcr_id: pcr.rotary-installed-ungrouted-steel-helical-foundation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rotary-installed ungrouted steel helical foundation installation services

## 1. Scope and Applicability

This PCR covers first installation of an engineered ungrouted steel helical foundation for new construction by rotary insertion with thrust subordinate to rotation, bolted lead/extension assembly and approved separately supplied steel load-transfer caps/adapters. It ends at the accepted foundation-to-superstructure steel interface ready to receive the separately owned structure. Actual project design, qualified installation, utilities clearance, termination and required testing govern. [chance-helical-installation-2017]

Exclude impact, vibratory or push installation; grouted screw-displacement piles and micropiles; ground-anchor tiebacks; underpinning or jacking an existing structure; concrete footings, grade beams and excavation contracts; factory pile manufacture; the subsequent superstructure and operation. New enabling access or interface work attributable to the installation must be included with an explicit owner or recorded as an unresolved route-fit gap. Substantial excavation/concrete or incompatible site remediation requires a separately governed package, not silent omission. CPC 54512 is broader than this rotary route. [un-cpc3-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.rotary-installed-ungrouted-steel-helical-foundation-services |
| classification_refs | CPC 3.0 54512 Foundation services; proposed narrower relation |
| covered_products | Accepted rotary-installed ungrouted steel helical foundation installation at an approved steel cap/adapter interface for new construction |
| excluded_products | Driven/pushed/vibrated piles; grouted piles; anchors; existing-building underpinning; concrete footing/grade-beam works; complete building; factory pile supply alone |
| representative_product | One actual engineered installation contract group with a declared pile schedule and load-transfer interfaces |
| production_route | Factory-fabricated/coated lead and extensions received → rotary insertion and bolted assembly → steel cap integration → conditional engineer-specified load test/rework → accepted interface |
| market_state | Installed construction service at signed foundation interface handover, not factory steel or completed superstructure |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted specified ungrouted rotary-installed steel helical foundation installation service at its steel load-transfer interface |
| How much | 1 item of one actual accepted contract group, not one hypothetical pile |
| How well | Approved design/location/angle/lead/extension/cap configuration, project torque/depth termination and any required load-displacement test acceptance; defects closed |
| How long or cycle | One actual installation campaign from mobilization through interface handover; retain dates across reporting periods and complete-life shared-asset attribution, not a universal building service life |
| reference_flow_link | `accepted_foundation_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted ungrouted rotary-installed steel helical foundation service at steel cap interface |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | contract/site/group ID; approved engineer/manufacturer document revision; installer qualification; pile locations, count, angles, helix/shaft/lead/extension/connection schedule; actual depth and calibrated torque histories; caps and load duty; test activation and load-displacement evidence; failed/reaction pile dispositions; signed interface acceptance date; supplier/service coverage and attribution period |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One accepted contract group is one reference item. Pile count, steel kg, depth m and load kN are configuration attributes; do not convert them to equivalent foundation service with a generic factor. |
| gross_material | lead_sections, extension_sections, coupling_bolts, steel_caps, cap_bolts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual component gross receipt/issue mass, retained stock and outward returns by part/lot. If measured by count, use actual part-specific traceable mass; no uniform pile mass. |
| native_energy | installation_electricity, test_electricity | Energy | kWh | Retain measured electrical energy in native kWh. A complete Energy support identity must be verified before concrete exchange delivery; a verified energy unit group alone is insufficient. |
| project_measurement | installed_pile_assembly, accepted_foundation_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Record actual torque Nm, depth m, angle degrees, rpm and advance m/revolution where instructed; test load kN, displacement mm and hold duration s with calibrated instruments, tolerances and acceptance document revisions. These are quality/raw fields, not interchangeable exchange amounts. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified new-construction site with ground/utility conditions and engineered pile schedule declared; supplied prefabricated coated steel sections at supplier gate; enabling access condition and owner documented |
| starting_condition_role | Ground is retained environmental starting stock, not a purchased material or automatically exported soil. Previously built access is starting infrastructure only to the extent actually present and outside this contract. |
| product_classification_scope | A bounded rotary ungrouted steel helical foundation installation within broader foundation services |
| recursive_input_rule | If the same-category installation service is subcontracted, use one bounded provider package for its physical work and upstream coverage; remove overlapping local inventories and keep its actual output/gate distinct from supplied components. |
| upstream_dataset_requirement | Actual supplied fabricated/coated lead, extension, cap and hardware datasets at the declared gate; actual fuel/electricity/freight; complete-life owned asset production, maintenance and end-of-life or verified provider coverage. No duplicated steel forming/galvanizing. |
| disclosure | Site baseline; access/enabling ownership; provider gates; all failed/remedial/reaction piles; conditional tests; actual emissions/waste destinations; gross material reconciliation; period and shared-asset matrix |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| rotary_boundary | all processes | Include mobilization, supplied components and actual logistics, rotary drive/thrust, extension joining, all attributable failed/reaction/remedial positions, cap integration, specified tests and defect closure. No grouting or concrete footing burden may be hidden inside this route. | chance-helical-installation-2017 |
| enabling_owner | rotary_install | Record actual temporary access, utility protection and obstruction handling resources with an explicit physical owner. Reusable mats enter asset attribution; consumed materials, freight, energy and actual removed material require concrete exchanges. If actual work cannot be represented, stop foreground finalization and extend the inventory under review. Do not declare needed work pre-existing. | chance-helical-installation-2017 |
| ground_and_waste | rotary_install | Rotary displacement does not imply exported spoil. Record actual removed obstruction/soil only with measured identity, custody and destination; retained ground is not a waste output or avoided-disposal credit. Returned reusable sections, discarded steel and elementary releases have different owners. | chance-helical-installation-2017 |
| asset_periods | all processes | Identify rotary carrier, torque head, drive adapters, access mats, cap tools, test jack/pump and reaction equipment. Track commissioning, use across this and other jobs/reporting periods, maintenance, replacement and end-of-life; allocate complete-life burdens to actual service with one matrix and one event owner. Missing lifetime/coverage evidence remains a blocker, never zero capital burden. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Complete-life share of actual reusable rotary carrier machine (`rotary_carrier_asset`)

Process / prospective direction / type: `rotary_install` / `inputs` / `product`.

The distinct carrier is a reusable capital product, not installed foundation steel. Its production, maintenance/replacement and end-of-life share covers this node and separately records other jobs/periods. Range evidence need: Require actual asset identity, commissioning/retirement, same-duty life-service denominator, logged node use and other consumer matrix; no assumed lifetime or one whole carrier per contract.

- Collection subject: Complete-life share of actual reusable rotary carrier machine
- Flow property / unit: Number of items / item
- Amount rule: Fractional actual asset item representing the recorded node service share of complete-life service; operating fuel/electricity accounted separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_install_assets`

#### Collection requirement: Complete-life share of actual reusable rotary torque head and matched drive adapter (`rotary_head_asset`)

Process / prospective direction / type: `rotary_install` / `inputs` / `product`.

Record the actual torque head and adapter as distinct assets where separately supplied; one card covers one actual configured supplied assembly only. Do not sum unrelated tooling identities into that assembly. Range evidence need: Obtain actual assembly bill, torque capacity/calibration, component replacement history and complete-life service evidence; separate mismatched lifetimes rather than inventing one ratio.

- Collection subject: Complete-life share of actual reusable rotary torque head and matched drive adapter
- Flow property / unit: Number of items / item
- Amount rule: Actual fractional item share for the configured head/adapter assembly, with separate rows required if their supply and lifetimes differ.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_install_assets`

#### Collection requirement: Complete-life share of actual reusable temporary access mat (`temporary_access_mats_asset`)

Process / prospective direction / type: `rotary_install` / `inputs` / `product`.

Conditional on actual reusable access mats installed for this group. Record each distinct mat specification as its own exchange, actual placement/removal work and energy, not free pre-existing access. Range evidence need: Actual mat count/specification, rental or owned coverage, occupation/load-duty records, production/maintenance/end-of-life and other period use are required; consumed aggregate/access works trigger reviewed inventory extension.

- Collection subject: Complete-life share of actual reusable temporary access mat
- Flow property / unit: Number of items / item
- Amount rule: Fractional item share of actual matched mat type by loaded use and complete-life service, including installation/removal attributable resources.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_install_assets`

#### Collection requirement: Actual freight service for installation components and equipment (`installation_freight`)

Process / prospective direction / type: `rotary_install` / `inputs` / `product`.

Record actual inbound, intersite and attributable equipment mobilization legs by payload/vehicle/supplier gate; product and freight dataset coverage must not overlap. Returns and waste haul legs retain their own event/destination attribution. Range evidence need: Collect tickets, route distances, payloads, loaded/empty allocation and supplier freight coverage per leg; no generic distance or mass substitution and Transport support remains independently required.

- Collection subject: Actual freight service for installation components and equipment
- Flow property / unit: Transport / t*km
- Amount rule: Measured tonne-kilometres from actual payload tonnes and loaded route km, with actual empty-leg method disclosed; split actual incompatible freight services.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_logistics`

#### Collection requirement: Actual usable lead sections returned across the installation boundary (`lead_returns`)

Process / prospective direction / type: `rotary_install` / `outputs` / `product`.

Only real outward custody transfer of usable uninstalled or extracted/requalified lead sections is a return. A section retained on site is closing stock; a failed unusable section is waste. Range evidence need: Require outward receipt, condition/requalification, exact part mass and receiving owner; no assumed return percentage and no input netting followed by duplicate export.

- Collection subject: Actual usable lead sections returned across the installation boundary
- Flow property / unit: Mass / kg
- Amount rule: Measured gross outward returned lead mass by lot and condition; retain gross supply input and reconcile burdens without automatic displacement credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`

#### Collection requirement: Actual usable extension sections returned across the installation boundary (`extension_returns`)

Process / prospective direction / type: `rotary_install` / `outputs` / `product`.

Usable extension returns preserve actual model, custody, condition and carried burden; removed test/reaction sections require documented reuse qualification. Range evidence need: Actual receiving custody receipts, extraction/inspection results, component mass and stock closure establish the return amount; no universal recovery fraction.

- Collection subject: Actual usable extension sections returned across the installation boundary
- Flow property / unit: Mass / kg
- Amount rule: Actual measured outward returned extension mass by supply lot; retained stock is only a stock balance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`

#### Collection requirement: Actual discarded steel pile sections and cutting scrap to documented waste receiver (`installation_steel_waste`)

Process / prospective direction / type: `rotary_install` / `outputs` / `waste`.

Damaged leads/extensions, unrecoverable reaction/failed sections and actual trimming chips are waste only where discarded. Separate actual grade/coating/contamination and destination streams; do not aggregate materially different wastes or treat scrap as accepted foundation output. Range evidence need: Obtain weighed consignment, actual cut lengths/part weights where used, contamination and treatment evidence; no default scrap fraction or avoided virgin-steel credit.

- Collection subject: Actual discarded steel pile sections and cutting scrap to documented waste receiver
- Flow property / unit: Mass / kg
- Amount rule: Measured actual discarded steel stream mass by failed pile/cut event and receiver, with separate identities when grade/condition/destination differ.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_waste`

#### Collection requirement: Actual discarded timber dunnage from supplied helical components (`timber_packaging_waste`)

Process / prospective direction / type: `rotary_install` / `outputs` / `waste`.

Conditional on actual discarded timber packaging; supplier-included packaging upstream is not procured a second time. Returned reusable dunnage is a custody/stock record and needs its own concrete exchange if it exits. Range evidence need: Actual packaging bill, mass, return/reuse records and waste receipt must establish the interval; no generic packaging allowance.

- Collection subject: Actual discarded timber dunnage from supplied helical components
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed waste timber mass by treatment and receiver; split treated/untreated or contaminated identities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_waste`

#### Collection requirement: Actual combustion particulate matter smaller than 2.5 micrometres emitted to air (`installation_pm25`)

Process / prospective direction / type: `rotary_install` / `outputs` / `elementary`.

Conditional on actual documented PM2.5 combustion release. Do not equate PM10, total dust, black carbon or ground disturbance to PM2.5; other measured substances need separately identified exchanges. Range evidence need: Require actual exhaust measurement or an accepted exact equipment/duty factor, fraction definition, activity and uncertainty; generic diesel smoke or road-dust data cannot bound this row.

- Collection subject: Actual combustion particulate matter smaller than 2.5 micrometres emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Actual measured PM2.5 mass or validated equipment/duty-specific factor times recorded activity, retaining particle fraction and air medium.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_install_emissions`

#### Collection requirement: Complete-life share of actual reusable steel-cap installation tool (`cap_tool_asset`)

Process / prospective direction / type: `cap_accept` / `inputs` / `product`.

The card represents one actual independently supplied reusable tool specification; each materially different tool/lifetime is a separate exchange. Match joining duty and actual coverage to its complete-life service records. Range evidence need: Collect tool identity, use/commission/retirement and replacement evidence, other jobs/periods and actual provider capital coverage; no whole tool consumed per group or assumed lifetime.

- Collection subject: Complete-life share of actual reusable steel-cap installation tool
- Flow property / unit: Number of items / item
- Amount rule: Actual fractional tool item from this node use divided by same-duty complete-life service, including maintenance/replacement/end-of-life coverage.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_assets`

#### Collection requirement: Complete-life share of actual reusable load-test jack and pump assembly (`test_equipment_asset`)

Process / prospective direction / type: `cap_accept` / `inputs` / `product`.

Conditional on engineer-required load testing. This is one supplied jack/pump assembly only where documented; independent jack/pump, beam and reaction apparatus have separately recorded assets and lifetimes, never an anonymous equipment sum. Reaction piles themselves are in rotary_install materials/work. Range evidence need: Require actual load plan, calibrated jack/pump assembly bill, reaction apparatus identities and coverage, service-life use/maintenance/end-of-life records; no assumed tests or universal load/hold time.

- Collection subject: Complete-life share of actual reusable load-test jack and pump assembly
- Flow property / unit: Number of items / item
- Amount rule: Actual fractional assembly item from logged test/retest use and actual complete-life service; separately add actual reaction frame/beam asset exchanges where used.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_assets`

#### Collection requirement: Complete-life share of actual reusable load-test reaction frame or beam (`test_reaction_frame_asset`)

Process / prospective direction / type: `cap_accept` / `inputs` / `product`.

Conditional on actual test plan using a separately supplied reaction frame/beam; identify each configured asset separately from the jack/pump and installed reaction piles. Retain erection/removal resources and actual counterweight logistics if used. Range evidence need: Collect actual frame/beam bill, test configuration, duty/service history, maintenance, replacements and end-of-life plus other jobs/periods; no assumption that jack coverage includes the reaction system.

- Collection subject: Complete-life share of actual reusable load-test reaction frame or beam
- Flow property / unit: Number of items / item
- Amount rule: Actual fractional configured frame/beam item from attributable test/retest service and documented complete-life denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_assets`

#### Collection requirement: Actual usable steel load-transfer caps returned across the boundary (`cap_returns`)

Process / prospective direction / type: `cap_accept` / `outputs` / `product`.

Only actual outward usable cap/adapter custody transfers are returns; closing retained stock stays in the balance. Rejected unusable caps go to typed waste. Range evidence need: Require receiving receipt, exact condition/design identity, part weight and stock ledger closure; no assumed reusable fraction or automatic avoided-production credit.

- Collection subject: Actual usable steel load-transfer caps returned across the boundary
- Flow property / unit: Mass / kg
- Amount rule: Measured gross outward returned usable cap mass, preserving gross receipt and actual component identity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap_materials`

#### Collection requirement: Actual discarded steel cap and connection-hardware waste (`cap_steel_waste`)

Process / prospective direction / type: `cap_accept` / `outputs` / `waste`.

Actual unusable rejected caps/bolts or cut remnants go to documented waste receivers, split by actual grade/coating/contamination and destination. They remain attributable to the accepted group. Range evidence need: Collect consignment weights, item identities and rejected-state dispositions, including repeated cap attempts; no default scrap rate or recycling substitution credit.

- Collection subject: Actual discarded steel cap and connection-hardware waste
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed discarded matched steel waste stream mass by cap/defect event and receiver; no duplicate counting with installation scrap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap_waste`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rotary_install | Rotary insertion and bolted extension assembly | required | Actual designed rotary ungrouted pile installation | Assembly and integration of lead/extension/coupling components into installed pile assemblies; embedded actual enabling/obstruction work | Actual installed assemblies by pile and purpose, transferred to cap_accept; all failed/reaction work attributable per final reference flow |
| cap_accept | Steel cap integration and conditional test acceptance | required | Actual approved steel cap/interface connection; load tests only when engineer specifies or directs them | Assembly and integration of installed pile and steel cap/hardware into accepted load-transfer interface | 1 item accepted foundation contract group; test and rework resources included before handover |


The installed-pile handoff is a physical assembled state with pile/transfer IDs and actual count, depth and torque evidence. It is internal, not another sold service. Conditional load tests are embedded actions of cap_accept; a document receipt or inspection alone is not a separate production node. Failed/reaction piles return to rotary_install for extraction/reinstallation, with costs and burdens retained by the same contract group.

### Process: Rotary insertion and bolted extension assembly (`rotary_install`)

#### Inputs

##### Product flows

###### Actual fabricated galvanized steel helical pile lead sections (`lead_sections`)

Factory-fabricated/coated leads enter at their actual supply gate, separately by approved model, helix/shaft configuration and coating. Include permanent, failed, replacement and reaction-test positions; supplier-included couplings/bolts stay in that bill. Range evidence need: Obtain part-specific supplier weights or calibrated weighed lots and actual gross receipts for the declared pile schedule, including failed/test leads; no universal lead kg or helix-count conversion.

- Selected flow: Actual fabricated galvanized steel helical pile lead sections
- Flow property / unit: Mass / kg
- Amount rule: Measured gross received/issued lead mass allocated to this reference group; retain opening/closing stock and actual outward return ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`
- Sources: `chance-helical-installation-2017`



###### Actual fabricated galvanized steel helical pile extension sections (`extension_sections`)

Actual extension sections and their integral couplings are supplied products; their extra depth and failed attempts belong to the job. Do not add a second forging/galvanizing burden. Range evidence need: Collect extension lengths, shaft/wall/model-specific masses, actual count, gross receipts and returns; project depth alone cannot determine kg and example guide dimensions are not current universal specifications.

- Selected flow: Actual fabricated galvanized steel helical pile extension sections
- Flow property / unit: Mass / kg
- Amount rule: Actual gross extension-section supply mass by model/lot and job issues, including replacement and reaction piles.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`
- Sources: `chance-helical-installation-2017`



###### Actual separately supplied helical extension coupling bolts (`coupling_bolts`)

Only separately supplied bolts not already in extension supply enter this exchange, split by actual grade/size/coating identity. Range evidence need: Actual bolt bill of supply, package mass/count and verified part mass must establish the interval and included-component check; no generic bolt allowance.

- Selected flow: Actual separately supplied helical extension coupling bolts
- Flow property / unit: Mass / kg
- Amount rule: Gross separately supplied bolt mass attributable to the actual installation group; zero when already supplier-included.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`
- Sources: `chance-helical-installation-2017`



###### Actual diesel fuel supplied to rotary installation plant (`installation_diesel`)

Fuel covers actual mobilization, insertion, standby, extraction, remedial and reaction-pile work owned by this node. Provider-included fuel is excluded from a second local charge. Range evidence need: Use full-campaign tank/meter opening, receipts, issues and closing records, equipment duty and allocation uncertainty; no generic litres/pile or energy factor.

- Selected flow: Actual diesel fuel supplied to rotary installation plant
- Flow property / unit: Mass / kg
- Amount rule: Actual consumed diesel mass: actual opening plus receipts minus closing, usable outward fuel returns/transfers and separately recorded unburned spills/losses; allocate combustion and other dispositions by event to this group.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_energy`



###### Actual grid electricity for electrically powered installation equipment (`installation_electricity`)

Conditional on actual electrically powered rotary equipment, charging or other installation demand; electricity retains native energy measurement and actual supply mix. Range evidence need: Collect calibrated meter intervals, charging coverage, standby and allocation records under actual equipment duty; no fixed kWh per pile and no Count substitute for Energy.

- Selected flow: Actual grid electricity for electrically powered installation equipment
- Flow property / unit: Energy / kWh
- Amount rule: Metered kWh attributable to this group/node when active, with charging and losses boundary documented.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_energy`



###### Actual separately consumed hydraulic make-up oil (`hydraulic_topup`)

Conditional on measured make-up oil consumed during this node; circulating equipment fill is not automatically consumed and lifetime maintenance oil must not be charged again. Range evidence need: Record actual grade, mass additions, recoveries, maintenance owner and leak incidents; no permanently consumed oil per operating hour assumption.

- Selected flow: Actual separately consumed hydraulic make-up oil
- Flow property / unit: Mass / kg
- Amount rule: Actual separate oil issues less evidenced usable stock reconciliation; identify product grade and the reason for consumption.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_energy`



##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual rotary-installed bolted steel helical pile assembly at cap integration handoff (`installed_pile_assembly`)

Physical internal transfer identifies actual pile position, lead/extensions, depth, angle, torque and disposition. Permanent and reaction/test assemblies are separately tagged; failed/unaccepted attempts never inflate final accepted service count. Range evidence need: Collect actual as-installed schedule, transfer acceptance, failed/reaction counts and design termination records; the group reference of one service does not prescribe pile count.

- Selected flow: Actual rotary-installed bolted steel helical pile assembly at cap integration handoff
- Flow property / unit: Number of items / item
- Amount rule: Actual number of installed assemblies transferred by pile ID and purpose; not fixed to one and not sold again as a final service.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_records`
- Sources: `chance-helical-installation-2017`



##### Waste flows

###### Actual separately removed spent hydraulic oil to authorized receiver (`spent_hydraulic_oil`)

Conditional on actual maintenance oil removal owned by this job; circulating fill is not a waste output and complete-life maintenance must not be counted again. Record actual formulation/contamination and receiver. Range evidence need: Obtain oil removal/receiver weights, maintenance event owner, grade and contamination; reconcile retained fluid, top-ups, recovered oil and actual spills without an assumed loss rate.

- Selected flow: Actual separately removed spent hydraulic oil to authorized receiver
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of this actual removed spent-oil stream; no automatic equality to top-up mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_waste`



###### Actual discarded mineral obstruction removed from a pile location (`removed_obstruction`)

Conditional incidental removal approved within this route, with exact actual mineral/soil identity and custody. Different contaminated soils, rock, buried construction waste or reusable recovered material require separate correctly typed exchanges or route-fit review. Range evidence need: Collect obstruction event/location, approval, actual composition/contamination, weighbridge or measured volume with actual bulk-density evidence, receiver and enabling resources; no universal spoil yield.

- Selected flow: Actual discarded mineral obstruction removed from a pile location
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed discarded matched mineral stream to its documented receiver; zero where rotary displacement retains ground and no removal occurred.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_waste`



##### Elementary flows

###### Actual fossil carbon dioxide from on-site installation combustion to air (`installation_fossil_co2`)

Conditional on actual on-site fossil fuel combustion owned by this node; identify carbon dioxide and air medium, exclude upstream fuel-production emissions already in supplier data. Range evidence need: Obtain actual fuel mass/carbon content and combustion/retention evidence or calibrated exhaust measurement; no default carbon content, factor or inferred biogenic share.

- Selected flow: Actual fossil carbon dioxide from on-site installation combustion to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated actual fossil CO2 using fuel composition/oxidation evidence and documented carbon balance, per group.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_install_emissions`



### Process: Steel cap integration and conditional test acceptance (`cap_accept`)

#### Inputs

##### Product flows

###### Actual rotary-installed bolted steel helical pile assembly at cap integration handoff (`installed_pile_feed`)

Counterpart internal handoff to installed_pile_assembly uses the same transfer/pile IDs, purpose and actual amount; its upstream burden passes once into the final group. Range evidence need: Reconcile actual paired transfer counts/IDs and withheld failed positions; obtain configuration, depth, torque and reaction purpose evidence, not an assumed one-pile service.

- Selected flow: Actual rotary-installed bolted steel helical pile assembly at cap integration handoff
- Flow property / unit: Number of items / item
- Amount rule: Actual accepted-for-integration assembly count by transfer ID; no reference-based fixed feed count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap_records`
- Sources: `chance-helical-installation-2017`



###### Actual separately supplied approved steel load-transfer cap or adapter (`steel_caps`)

Approved supplied steel cap/adapter connects the installed pile to the specified new-structure load interface. Record exact supplied configuration and coating; do not include a concrete cap or grade beam. Range evidence need: Require actual approved drawing, bill, part count/mass or weighing, gross receipts, rejected parts and returns; no generic kg/cap or assumed load capacity.

- Selected flow: Actual separately supplied approved steel load-transfer cap or adapter
- Flow property / unit: Mass / kg
- Amount rule: Gross actual supplied cap/adapter mass by design and lot, including rejects/replacements; returns and closing stock recorded separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap_materials`
- Sources: `chance-helical-installation-2017`



###### Actual separately supplied steel cap connection bolts (`cap_bolts`)

Conditional on actual separately supplied cap bolts/fasteners not already part of the cap package; distinct grade/coating specifications require separate exchanges. Range evidence need: Collect exact approved fastening bill, supplied inclusion check, part mass/count and replacement/stock records; no generic hardware percentage.

- Selected flow: Actual separately supplied steel cap connection bolts
- Flow property / unit: Mass / kg
- Amount rule: Gross separately supplied connection-bolt mass by actual component bill and installation group.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap_materials`



###### Actual manufacturer-approved galvanized-surface repair coating (`field_repair_coating`)

Conditional on actual approved field-cut/damaged galvanized surface repair; exact supplied formulation/state is required. Factory coating is already in component supply, not repeated here. Other actual preparation/repair consumables require separately identified exchanges. Range evidence need: Obtain actual approved product/TDS, repair area and issued/applied/waste measurements, wet/dry or volatile content evidence where needed; no universal zinc fraction, repair dose or wet-to-dry factor.

- Selected flow: Actual manufacturer-approved galvanized-surface repair coating
- Flow property / unit: Mass / kg
- Amount rule: Actual gross separately issued wet repair-product mass with application, residue, returns and closing stock reconciled.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap_materials`



###### Actual diesel fuel for cap integration and load-testing equipment (`cap_test_diesel`)

Conditional actual diesel covers cap work, test/retest and reaction-system removal owned by this node; it excludes already charged rotary-install fuel and provider-included demand. Range evidence need: Require tank/meter mass or volume with actual density/temperature, full test campaign and standby records and cross-node reconciliation; no fixed testing fuel.

- Selected flow: Actual diesel fuel for cap integration and load-testing equipment
- Flow property / unit: Mass / kg
- Amount rule: Actual consumed diesel mass: actual opening plus receipts minus closing, usable outward returns/transfers and separately recorded unburned spills/losses; cap/test events alone own combustion demand.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap_energy`



###### Actual grid electricity for cap tooling and load-test apparatus (`test_electricity`)

Conditional actual electricity powers cap tools and test jack/pump/data apparatus under actual method, including retests; supplier/provider electricity must not be counted again. Range evidence need: Obtain meter/calibration, time intervals, auxiliary/standby and provider coverage, actual test plan and duty; no kWh/test default or unsupported Energy identity.

- Selected flow: Actual grid electricity for cap tooling and load-test apparatus
- Flow property / unit: Energy / kWh
- Amount rule: Actual metered kWh attributable to cap/test node and reference group, preserving native energy unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap_energy`



##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted ungrouted rotary-installed steel helical foundation service at steel cap interface (`accepted_foundation_service`)

The intended output is one actual contract group after approved pile/cap installation, documented torque/depth and required tests/retests pass with closed dispositions. It ends before separately owned superstructure. Range evidence need: Collect signed contract-group acceptance and complete pile/configuration/torque/depth/cap/test evidence; one item defines the reference and supplies no universal pile count, load capacity, steel kg or service life.

- Selected flow: Accepted ungrouted rotary-installed steel helical foundation service at steel cap interface
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap_records`
- Sources: `chance-helical-installation-2017`



##### Waste flows

###### Actual waste residue of the supplied approved galvanized-surface repair coating (`repair_coating_waste`)

Conditional on actual repair-product residue sent to a documented waste receiver. Preserve actual formulation/wet state, container-tare and hazardous status; packaging and other cleaning products need separate concrete exchanges. Range evidence need: Actual issued/applied/residual product weights, container tare, supplied formulation and waste receipt are required; capture actual volatile species/medium separately if released, not as missing unexplained mass.

- Selected flow: Actual waste residue of the supplied approved galvanized-surface repair coating
- Flow property / unit: Mass / kg
- Amount rule: Measured actual coating-residue mass excluding measured reusable returns and closing stock; no assumed wet-to-dry conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap_waste`



##### Elementary flows

###### Actual fossil carbon dioxide from cap and test combustion to air (`cap_fossil_co2`)

Conditional on actual fossil combustion in cap/test equipment, with air medium and node-specific ownership; upstream energy-production emissions remain in supplier datasets. Range evidence need: Require exact fuel amount/composition/oxidation or calibrated exhaust measurements and uncertainty; no arbitrary CO2 factor or double count of rotary-install events.

- Selected flow: Actual fossil carbon dioxide from cap and test combustion to air
- Flow property / unit: Mass / kg
- Amount rule: Actual measured CO2 or fuel-composition carbon-balance result for this node, including retests.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cap_emissions`



## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_service | accepted_foundation_service | The accepted group is the intended final output; no co-product from rejected steel, retained ground or temporary reaction piles is assumed. Use actual separate contract groups and resources when several products are delivered. |  |
| rework_retention | all processes | Failed depth/torque, damaged sections, misalignment, unacceptable cap or load test retain all attempts, additional sections, energy, relocation, extraction, reaction-pile work and retests in the accepted group. Link loop/event IDs and final reuse/return/waste disposition; unresolved failures cannot be accepted outputs. | chance-helical-installation-2017 |
| gross_stock_return | all material rows | Reconcile opening stock plus gross receipts with installed/consumed material, actual outward usable returns, measured waste/loss and closing retained stock by actual identity. Do not net returns in inputs then export them again. Closing stock is carried forward with its declared burden, not an outward exchange; actual reused components retain their prior allocation history. Gross receipts/issues mean material totals before returns or outward transfers are deducted, with vehicle/container tare already removed; they never mean gross loaded vehicle weight. Where gross_kg and tare_kg are recorded, subtract tare to obtain material mass entering the physical balance. Keep genuine outward flows and retained stock distinct.|  |
| shared_complete_life | asset rows | For each distinct asset use documented physical service during this job/node divided by actual complete-life service of the same unit and duty; apply that share to production, maintenance/replacement and end-of-life without duplicating operating fuel. Index every other consuming job/node/reporting period and reconcile total shares. If using a bounded provider service, document actual capital and operating coverage and remove the overlapping local rows.  For an asset whose life is completed, use observed full-life history. For an in-service asset, an evidenced prospective remaining-service, replacement, termination and end-of-life scenario is allowed; label forecasts separately from observed facts, record the denominator/source, uncertainty and sensitivity, and update when actual use, replacement or retirement changes. Do not fabricate a future retirement_date or assume an arbitrary default life; only missing evidenced complete-life coverage or denominator blocks finalization.|  |
| period_events | all processes | Declare mobilization/start, each installation/test/rework event, acceptance and stock close/open periods, plus asset commissioning/replacements/retirement. Assign each event once; reconcile carried-forward stock and remaining asset burden between periods without resetting lifetime at year end. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_install_materials | rotary_install | Leads/extensions/separate bolts and actual outward usable returns | Part/lot stock and custody ledger | contract_id; period_id; pile_id; purpose; part_id; model; grade; coating; opening_kg; gross_receipts_kg; gross_issues_kg; installed_kg; outward_returns_kg; waste_kg; closing_kg; unit_mass_kg; weighing_uncertainty_kg; receipt_id | Weigh by calibrated scales or traceable part-specific supplier masses; pair counts to model and supply bill. Reconcile opening plus gross receipts to installation, actual outward returns, waste and retained closing stock without netting twice; include reaction/failed/remedial positions. | kg; part count; actual length m | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Matched part/lot counts, calibration and supplier inclusion evidence; investigate residual beyond actual measured uncertainty; retain stock burden carry-forward, no fixed loss or range. |
| cp_install_energy | rotary_install | Actual installation diesel/electricity/hydraulic top-up | Meter/tank/maintenance event record | contract_id; period_id; event_id; equipment_id; purpose; fuel_grade; fuel_kg; fuel_opening_kg; fuel_receipts_kg; fuel_closing_kg; fuel_returns_kg; fuel_transfer_out_kg; unburned_spill_kg; spill_disposition; fuel_volume_L; fuel_density_kg_per_L; density_temperature_C; electricity_kWh; oil_grade; oil_added_kg; oil_recovered_kg; operating_h; standby_h; provider_coverage; measurement_uncertainty | Measure full-job fuel/energy/oil with calibrated meters and tank balances. Compute actual consumed fuel from opening plus receipts minus closing, actual usable outward fuel returns/transfers and unburned spills/losses; link those dispositions without adding a duplicate generic product-return exchange. Combustion CO2 uses only actual burned fuel, not returned/transferred/spilled fuel; when volume converts to kg use actual batch density and temperature. Separate carrier and other-node event IDs; include idle/extraction/reaction work, avoid provider/lifetime-maintenance duplication. | kg; L; kg/L; degC; kWh; h | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Complete opening/receipt/closing balances, density evidence and meter calibration; actual duty/activity and supply mix; independently verify Energy support before final exchanges; no assumed fuel/oil factors. |
| cp_install_assets | rotary_install | Carrier/head/adapter/access-mat complete-life asset shares | Asset-life and consumer-period matrix | contract_id; asset_id; supplied_assembly_id; component_id; node_id; period_id; job_id; commissioning_date; use_h; mat_loaded_use_days; lifetime_same_duty_h; lifetime_same_duty_days; maintenance_event_id; replacement_event_id; retirement_date; production_coverage; end_of_life_coverage; share_uncertainty | Identify each supplied asset; partition its actual same-duty service across nodes/jobs/periods and divide job-node use by its evidenced complete-life denominator. Use hours for carrier/head/tool duty or actual loaded occupation days for mats without treating h/days as product exchange units; fractional asset item carries capital share. Separate components with independent lifetime. | item; h; days | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Actual life/service logs, remaining-life/replacement/retirement evidence and complete-life burden scope; sum all consumer shares without double ownership. Missing evidenced complete-life denominator/coverage blocks final asset attribution; an in-service prospective scenario may provide remaining service and end-of-life coverage, without invented observed retirement. |
| cp_install_logistics | rotary_install | Actual component/equipment freight for both nodes | Leg/payload/gate transport record | contract_id; leg_id; period_id; consuming_node; physical_exchange_owner_node; custody_event_id; origin; destination; carrier_mode; payload_kg; loaded_distance_km; empty_distance_km; return_leg; supplier_included_gate; equipment_mobilization; uncertainty | Record each actual inbound/inter-site/return/waste leg once, including cap/test supplies, usable component/fuel returns and waste-receiver legs of both nodes. This freight row and cp_install_logistics in rotary_install are the single physical exchange owner; consuming_node tags cap_accept demand without a second local exchange. Pair custody_event_id and leg_id to the appropriate return/waste record; use actual payload tonnes times loaded kilometres and documented actual empty-leg/provider method. Partition by destination node without a second local freight row; treat incompatible freight identities separately. | t*km; kg; km | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Tickets/routes/payload and supplier gate evidence; actual empty/shared-load allocation; verify complete compatible Transport support chain before exchange delivery, no default distance or credit. |
| cp_install_records | rotary_install | Installed assembly handoff and every attempt | Pile/transfer/as-built/defect record | contract_id; pile_id; purpose; attempt_id; transfer_id; design_revision; manufacturer_revision; lead_id; extension_ids; bolt_ids; position_coordinates_m; angle_deg; depth_m; torque_Nm; torque_sampling_depth_m; rotation_rpm; advance_m_per_rev; shaft_torque_limit_Nm; required_min_effective_torque_Nm; specified_min_depth_m; effective_torque_rule; instrument_id; calibration_date; specified_tolerance; acceptance_source; disposition; event_date | Record each actual permanent/failed/reaction pile and attempt using current approved engineer/manufacturer procedures. Log calibrated installation torque history/depth/angle and instructed rotation/advance with actual units, tolerances and document clauses. Confirm engineer-authorized deviations and pair physical transfer to cap_accept; use project termination criteria, not guide example settings or torque-capacity factors. | item; m; deg; Nm; rpm; m/rev | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Authorized installer and instrument calibration; full torque/depth record and approved departures; actual pile count/configuration and rejected dispositions; transfer counterpart agreement and location traceability. |
| cp_install_waste | rotary_install | Steel/timber/spent oil/incidental mineral waste exits | Typed waste consignment and incident ledger | contract_id; event_id; pile_id; period_id; waste_identity; grade; coating; contamination; waste_status; gross_kg; tare_kg; net_kg; volume_m3; actual_bulk_density_kg_per_m3; destination; receiver_id; custody_receipt; treatment_coverage; spill_id; uncertainty | Weigh each actual separately identified stream and retain receiver/custody evidence; volume-based mineral mass needs measured actual bulk density. Distinguish real usable return, stock, waste and incident release; no automatic ground spoil. Record removal/enabling fuel and equipment once. | kg; m3; kg/m3 | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Weighbridge/tare/calibration, waste classification and receiver receipts; life-maintenance ownership for spent oil; actual obstruction approval; unresolved material/destination triggers route-fit/inventory extension. |
| cp_install_emissions | rotary_install | Actual fossil CO2 and PM2.5 plus separately identified actual releases | Measured emission or specific factor/composition model | contract_id; event_id; period_id; equipment_id; fuel_kg; carbon_mass_fraction; oxidation_fraction; retained_carbon_kg; species; medium; particle_fraction; measured_release_kg; factor_value; factor_unit; factor_source; activity_value; activity_unit; uncertainty | Use calibrated measurements or actual fuel carbon/oxidation balance for fossil CO2, with carbon-to-CO2 molecular conversion source retained. PM2.5 requires a matching measured particle fraction or exact equipment/duty factor and actual activity. Every other actual substance/medium or spill constituent needs a distinct concrete exchange; do not substitute aggregate NOx/VOC/dust. | kg; actual factor/activity units | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Retain source/chemistry/calibration, fossil/biogenic basis, fraction/medium and uncertainty; assess exhaust and incident completeness explicitly. Supplier upstream emissions and local direct releases have separate owners; no unverified default factor. |
| cp_cap_materials | cap_accept | Actual caps/bolts/repair coating and usable cap returns | Approved bill and stock/custody ledger | contract_id; period_id; pile_id; cap_id; drawing_revision; bolt_id; supplier_included_components; coating_product; product_revision; opening_kg; gross_receipts_kg; gross_issues_kg; installed_or_applied_kg; returns_kg; waste_kg; closing_kg; volatile_fraction; repair_area_m2; uncertainty | Collect actual approved steel interface bill and separate supplied masses. Weigh actual approved galvanized-surface repair product only if instructed and used, with wet/applied/residue/volatile evidence. Reconcile gross supply, outward returns and carried stock by identity; no duplicated factory coating or package bolts. | kg; m2; actual supplied composition units | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Approved drawings/product instructions, actual part masses/calibration, supply bill and return receipts; separate material variants. No universal cap weight, dose, solids or volatile fraction. |
| cp_cap_energy | cap_accept | Actual cap/test diesel and electricity | Meter/tank/event energy ledger | contract_id; period_id; event_id; equipment_id; pile_id; test_id; test_required; fuel_grade; fuel_kg; fuel_opening_kg; fuel_receipts_kg; fuel_closing_kg; fuel_returns_kg; fuel_transfer_out_kg; unburned_spill_kg; spill_disposition; fuel_volume_L; fuel_density_kg_per_L; density_temperature_C; electricity_kWh; operating_h; standby_h; provider_coverage; uncertainty | Measure actual cap work, tests and retests by event. Actual consumed fuel equals opening plus receipts minus closing, usable outward returns/transfers and separately recorded unburned spills/losses. Link custody/incidents once and use only actual burned fuel for combustion emissions; retain meter/tank balances and actual density/temperature if fuel supplied volumetrically. Include auxiliaries and reaction-system handling, reconcile with rotary_install event ownership and provider coverage. | kg; L; kg/L; degC; kWh; h | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Calibration/density and complete test-event/activity logs; no mandatory test quantity, generic fuel factor or energy-to-count conversion; verify actual Energy identity chain. |
| cp_cap_assets | cap_accept | Tool/jack-pump/reaction-frame complete-life shares | Asset-life and consuming-job/period matrix | contract_id; asset_id; supplied_assembly_id; component_id; node_id; job_id; period_id; commissioning_date; use_h; lifetime_same_duty_h; maintenance_event_id; replacement_event_id; retirement_date; production_coverage; end_of_life_coverage; share_uncertainty | Record each actual cap tool, test jack/pump and reaction frame/beam independently unless supplied as one documented assembly with compatible life. Attribute actual node service divided by complete-life same-duty service, including test/retest erection/removal; reaction-pile steel/work stays with rotary_install and is not charged again as frame production. | item; h | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Actual assembly/calibration/service logs, other consumer periods/jobs, replacements and retirement evidence; capital/operating provider coverage reconciled; unresolved evidenced life denominator or complete-life coverage blocks final attribution; in-service prospective scenarios are explicitly allowed with uncertainty and updates. |
| cp_cap_records | cap_accept | Paired pile feed and accepted contract interface | Physical handoff, cap joining, test and acceptance record | contract_id; period_id; pile_id; transfer_id; purpose; cap_id; connection_method; fastening_torque_Nm; specified_tolerance; test_required; test_plan_revision; load_acceptance_limit_value; load_acceptance_limit_unit; displacement_acceptance_limit_value; displacement_acceptance_limit_unit; hold_acceptance_limit_value; hold_acceptance_limit_unit; criterion_clause; test_id; reaction_pile_ids; load_kN; displacement_mm; hold_s; instrument_id; calibration_date; acceptance_source; defect_id; retest_id; disposition; accepted_group_count; signed_handover_date | Pair actual installed pile feeds to rotary_install outputs. Record approved cap/adapter connection and actual fastening criteria; perform load tests only per actual engineer plan, recording calibrated load/displacement/hold time and exact criteria. Close every failed/reaction/retest disposition and obtain signed foundation-interface acceptance before declaring one final service item. | item; Nm; kN; mm; s | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Qualified installer, actual instrument/tolerance/source evidence and engineer approvals; zero unresolved defective accepted positions; matched transfer IDs and accepted count; no generic capacity or universal test settings. |
| cp_cap_waste | cap_accept | Actual steel and coating waste exits | Typed waste consignment/residue ledger | contract_id; period_id; event_id; pile_id; waste_identity; supplied_coating_product; grade; coating; contamination; wet_state; gross_kg; tare_kg; net_kg; receiver_id; destination; treatment_coverage; custody_receipt; uncertainty | Weigh separate actual steel and wet coating-residue streams; distinguish usable returns and closing stock. Reconcile applied/retained/waste and actual volatile releases using actual supplied formulation; add distinct packaging/cleaning waste identities when present. | kg | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Actual classified consignment/tare and receiver evidence; matched cap/repair events; no assumed scrap or wet/dry factors, no duplicate installation waste and no silent unidentified release. |
| cp_cap_emissions | cap_accept | Actual cap/test fossil CO2 and other separately typed releases | Emission measurement or exact fuel-composition model | contract_id; period_id; event_id; equipment_id; test_id; fuel_kg; carbon_mass_fraction; oxidation_fraction; retained_carbon_kg; species; medium; measured_release_kg; actual_factor_source; activity; uncertainty | Use actual fuel carbon/oxidation with retained-carbon and molecular conversion evidence or calibrated exhaust measurement. Identify every additional actual repair-coating volatile species/medium and test-combustion pollutant as a distinct exchange before finalization; no generic VOC/wet-paint-water emission identity. | kg; actual composition/activity units | Each receipt/issue/use/transfer/test/rework/exit event and period close as applicable | Complete actual contract campaign including mobilization, failed/reaction piles, retests and acceptance; link earlier/later stock and asset-life periods | Actual site, supplying lot/provider and named equipment/event; no unrelated job mixing | per reference flow | Actual composition/measurement and factor compatibility, air/soil/water medium, uncertainty, campaign completeness and cross-node ownership; upstream fuel emissions are separate. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| event_normalization | all inventory rows | Sum actual uniquely owned event quantities attributable to the accepted contract group; report per reference flow. Internal transfers cancel at the group boundary, and physical feed counts remain actual. | Contract/event/period IDs; cp_install_records; cp_cap_records; relevant node protocol | Actual exchange amount per reference flow |  |
| direct_release_calculation | installation_fossil_co2, installation_pm25, cap_fossil_co2 | Use actual measured release kg as raw input or a documented source-specific model. For CO2, calculate oxidized fossil carbon from actual burned fuel mass and measured/source-supported carbon composition with retained/unoxidized carbon treated once; multiply by the documented CO2-to-carbon molecular-mass ratio with its source and units retained. For PM2.5, multiply an exact equipment/duty/particle-fraction factor by actual matched activity; convert only with documented unit factors. Sum uniquely owned release events per reference flow; propagate instrument, composition/factor and activity uncertainty without a universal emission factor. | Node emission and fuel protocols; actual measurement/composition/factor source; actual unit-conversion evidence | Actual substance-specific emitted kg per reference flow and uncertainty interval |  |
| component_balance | lead_sections, extension_sections, coupling_bolts, steel_caps, cap_bolts | Opening stock plus gross receipts equals installed/consumed plus actual outward usable returns plus measured waste/loss plus closing stock for the same identity. Actual differences require investigation using measured uncertainty; do not create a balancing invented exchange. | Node material and waste protocols; actual gross receipts and closing stock | Reconciled physical stock/custody balance and declared carried-forward burden |  |
| asset_service_share | rotary_carrier_asset, rotary_head_asset, temporary_access_mats_asset, cap_tool_asset, test_equipment_asset, test_reaction_frame_asset | Actual node same-duty service divided by documented complete-life same-duty service gives fractional asset item; apply to actual complete-life capital/maintenance/end-of-life burden with one consumer-period matrix. Keep fuel/energy separate and resolve missing life/terminal evidence before finalization. | cp_install_assets; cp_cap_assets; actual asset lifecycle and consumer records | Asset-specific fractional item and complete-life attributable burden per reference flow |  |
| freight_measurement | installation_freight | Actual payload kg divided by 1000 gives tonnes; multiply actual loaded route km to obtain t*km, with separately documented empty/shared-leg allocation and supplier gate coverage. | cp_install_logistics; actual leg/provider records | Actual tonne-kilometres per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_gate | all cards | Actual identity, supply state, use, custody/waste status and elementary medium/fraction must match a verified concrete flow and independently verified property/unit chain before TIDAS exchange delivery. Candidate unresolved cards are not final exchange UUIDs. | Exact supplier/product/receiver records; platform detail/property/unitgroup chain; named unresolved manifest entries |
| range_and_uncertainty | all cards | Obtain each card-specific missing Range evidence from actual approved configuration and complete campaign records; derive a traceable empirical or measurement uncertainty interval only for the stated gate and denominator. One reference item is a definition, not a physical intensity bound. | Actual minima/maxima or uncertainty method, instrument/specification evidence, sample/event coverage and exclusions; no illustrative guide values used as defaults |
| period_completeness | all processes | Include failed/remedial/reaction positions, temporary access, mobilization, all supply/exit legs, standby, retests and actual emissions. Record each event once across periods; reconcile opening/closing stock and complete-life assets to other jobs. | Event coverage ledger, consumer-period matrix, receipts, handover and exception register |
| project_gate | accepted_foundation_service | Current actual engineer/manufacturer instructions and approved deviations govern torque/depth/angle/cap/test limits. Record all measurement units, calibrated instruments, specified tolerances and exact acceptance source. | As-built pile schedule; torque history; approved cap/connection bill; test activation/load-displacement evidence; signed defect closure and interface handover |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_and_gate | accepted_foundation_service | Confirm rotary insertion with subordinate thrust, no grout and approved steel cap interface for new construction. Required torque/depth and conditional load test criteria must be satisfied under actual current approved instructions; do not claim superstructure or building acceptance. | chance-helical-installation-2017; un-cpc3-2025 |
| transfer_and_reference | installed_pile_assembly, installed_pile_feed, accepted_foundation_service | Reconcile paired physical transfer IDs/count/configuration/purpose; preserve actual feed amount and count exactly one accepted group output as 1 item. Failed/reaction assemblies cannot masquerade as accepted service quantity. | chance-helical-installation-2017 |
| reject_closure | all processes | Every failure/rejected section/cap/test has a linked rework/replacement/return/waste disposition and retained burden. Missing closure or reaction/remedial resources blocks final foreground acceptance. | chance-helical-installation-2017 |
| custody_balance | all material and waste rows | Check gross receipts, actual outward returns, installed/consumed/waste/loss and carried closing stock by exact identity, period and custody. No net-return/double-output, retained-stock export or unsupported recycling credit. |  |
| asset_and_period | asset rows | Check each shared asset against all consuming nodes/jobs/periods and commissioning/maintenance/replacement/retirement evidence. Capital, operation and end-of-life coverage must sum once; unresolved life denominators/terminal coverage/provider overlap block final exchange production. |  |
| release_and_range | all cards | Review every card-specific Range need and actual emission/waste completeness; verify native physical units and actual species/medium/fraction before concrete exchange binding. Unknown flow or support UUID and unknown actual bounds remain declared gaps, never fabricated near-matches. |  |
| enabling_complete | rotary_install | Actual access/utility-protection/obstruction work has explicit material, equipment, energy, freight and exit owners. Required unrepresented work or out-of-route substantial excavation/concrete remediation blocks route finalization pending reviewed inventory extension. | chance-helical-installation-2017 |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation data package with process and lifecyclemodel projections for the declared accepted contract group |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual matching rotary ungrouted steel helical foundation installation at an approved steel cap interface, with configuration/gate and complete campaign resources disclosed |
| excluded_use | Generic foundation average; driven/grouted/underpinning piles; complete building; another load duty, geology, configuration or lifetime claimed equivalent without evidence; final TIDAS exchanges with unresolved identity |
| required_metadata | Contract/site/group and dates; engineer/manufacturer revisions; utilities and access baseline; qualified installer; as-built pile/cap schedule; torque/depth/angle criteria; actual test plan/results; provider gates; stock and rejected/reaction dispositions; asset/period matrix |
| required_quality_disclosure | Actual measurement and uncertainty/Range coverage; missing exact flow/support identities; conditional activation and enabling exclusions; complete-life asset and logistics coverage; data periods; defect closure; candidate limitations |
| update_trigger | Changed ground/design/component/supply state, cap interface, termination/test acceptance or approved instructions; actual changed enabling scope, provider coverage, shared asset life/period data or resolved identity/Range evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| chance-helical-installation-2017 | handbook | Hubbell CHANCE Helical Piles Installation Instructions, Part C3031833, Revision A 11/17, pp1–8. https://hubbellcdn.com/installationmanuals/TD04203E_Helical%20Piles%20Inst%20Sheet.pdf | Rotary installation, component interfaces, torque/depth records, approved changes, conditional tests, reaction piles and cap handover; example numbers are not universal current defaults |
| un-cpc3-2025 | official_guidance | United Nations CPC Version 3.0 explanatory notes, 30 June 2025, class 54512 and adjacent 54511. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Foundation service classification and narrower rotary boundary; excludes excavation and concrete work |
