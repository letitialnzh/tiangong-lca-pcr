---
pcr_id: pcr.existing-exposed-cast-iron-local-water-main-full-circle-repair-clamp-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing exposed cast-iron local water-main full-circle repair-clamp installation services

## 1. Scope and Applicability

This PCR covers one bounded repair intervention on one qualified localised hole or pinhole in an already exposed, secured existing cast-iron local potable-water main. A compatible factory-made single-section stainless full-circle gasketed clamp is installed after utility-authorised isolation and depressurisation. Incremental cleaning, compatible lubrication, positioning, staged tightening and retightening, required pressure/leak verification and hygienic closure form the service through signed repair acceptance. The existing main is retained.

The representative route uses an actually approved SS1-type single-section assembly with its actual standard SBR gasket unless another actual compatible compound is specified. The Romac sources illustrate that route; they do not prescribe a brand, universal torque, pressure, repairable defect size or every-SKU potable certification. Actual current approved regional instructions, utility requirements and site conditions govern. The Ontario 2020 procedure is a dated official technical example; its webpage update date does not establish universal or current project law. Do not apply an exception for maintained-flow repair sleeves automatically to this depressurised route.

Exclude new pipelines and laterals, sewers/gas/steam, long-distance mains, pipe replacement, live-pressure installation, tapping or outlet connections, coupling separated pipe ends, sheared/unsupported structural breaks, whole trench excavation and reinstatement, water distribution operation and subsequent maintenance. Required closure tests must be completed or supplied through an explicitly bounded provider whose actual resources/results are included before the final gate; an unowned future test cannot produce accepted output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-exposed-cast-iron-local-water-main-full-circle-repair-clamp-installation-services |
| classification_refs | CPC 3.0 54251; narrower candidate subset; acceptance remains separate |
| covered_products | Accepted single-defect local potable cast-iron main clamp installation repairs in the declared exposed, secured, depressurised route |
| excluded_products | New main; pipe-section replacement; live-pressure/tapped clamp; pipe coupling; structural separated-end repair; trenching/reinstatement; operation |
| representative_product | Actual suitable single-section stainless full-circle clamp with compatible SBR gasket, approved OD/range/defect overlap and potable documentation |
| production_route | Qualified retained host preparation handoff followed by clamp integration, actual required mechanical/hygiene verification and signed bounded repair handback |
| market_state | Completed accepted repair service at the declared release gate; retained host is neither sold anew nor credited as avoided replacement |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted single-defect full-circle clamp repair installation on an existing exposed cast-iron local potable-water main |
| How much | 1 item, one accepted uniquely identified final single-defect repair intervention |
| How well | Unique repair and defect IDs; local potable-water main function; retained cast-iron OD, condition and supported defect extent; actual single-section clamp SKU/range/length/gasket and potable certification; authorised isolation/depressurisation; contamination classification and adopted authority/instruction editions; actual torque/retorque, pressure/leak and hygiene criteria/results/providers; gate and handback owners; reporting/job/asset periods. |
| How long or cycle | One work-order repair cycle including failed attempts, retightening/retest and required hygienic closure before acceptance; index jobs/reporting periods and complete asset lives; no universal extension of main life |
| reference_flow_link | `accepted_repair` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted single-defect full-circle clamp repair installation on an existing exposed cast-iron local potable-water main |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Unique repair and defect IDs; local potable-water main function; retained cast-iron OD, condition and supported defect extent; actual single-section clamp SKU/range/length/gasket and potable certification; authorised isolation/depressurisation; contamination classification and adopted authority/instruction editions; actual torque/retorque, pressure/leak and hygiene criteria/results/providers; gate and handback owners; reporting/job/asset periods. |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_repair_count` | `accepted_repair`; reference flow | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count unique signed final repair IDs N; N must be positive. Bolts, clamp sections, attempts and main length are not accepted interventions; retain failed/repeated burdens over N. |
| `measure_transfer` | `qualified_host`; `host_to_install`; `retained_host` | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Pair one qualified retained-host handoff per unique defect ID and transfer ID; repeated preparation is a loop, not extra host manufacture or final accepted count. |
| `measure_physical` | Material, water, fuel, residual and freight rows | Actual verified exchange property | Actual verified exchange unit | Use calibrated net contents after tare, gross before outward returns; actual density/state/temperature for volume-to-mass and actual load/distance for freight. Do not infer mass from count, nominal pipe diameter, shell gauge or design envelope. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing exposed secured cast-iron local potable-water main with identified local defect; utility-authorised isolation/depressurisation, access and contamination preconditions declared |
| starting_condition_role | Retained host state only; no new upstream main production burden; incremental preparation and job-caused remedies remain included |
| product_classification_scope | Bounded repair subset of local pipeline construction services; excavation belongs separate trenching responsibility |
| recursive_input_rule | Do not recursively replace this repair service with a whole-main production dataset. Same-category purchased repair support requires a non-overlapping bounded gate and actual provider evidence. |
| upstream_dataset_requirement | Actual complete clamp assembly and separately supplied consumables/services/resources at real supplier gate; complete-life assets and actual transport included once; included packaging/components/services excluded from duplicate rows |
| disclosure | Name utility, access/trench-dewatering owner, preparation and installation providers, closure/test provider, reinstatement owner and authorised utility handback owner; identify job/event/reporting periods and excluded interfaces. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_host` | `prepare_host` | Accept exposed secured retained cast iron only after actual OD/defect/condition and clamp compatibility review; clean dirt/corrosion from the intended seal area without inventing new pipe input. Job-caused damage/remedy belongs its actual owner and blocks handoff until resolved. | `romac-install-2024`; `romac-submittal-2024` |
| `boundary_interfaces` | Both nodes and external interfaces | Whole excavation/reinstatement remain with declared corridor/trench owner. Incremental protection and hygiene needed during repair, including continued dewatering where required, must have actual resource owner; purchased bounded support included only once. No invented excavation node. | `un-cpc3-2025`; `ontario-watermain-2020` |
| `boundary_components` | `install_accept` | Retained qualified host and supplied complete clamp/gasket assembly have different roles. Count shell, bolts, gasket, factory lubricant/coating and packaging already within the assembly dataset once; record only actual separate replacement or additional supplies. No clamp as coupling or tapped outlet. | `romac-install-2024`; `romac-submittal-2024` |
| `boundary_mechanical` | `install_accept` | Verify actual size/range, flat clean gasket tails, defect centring, suitable lubricant, prescribed staged uniform torque and retorque using actual current SKU instructions; actual pressure/leak criterion and pre-concealment test passed before repair release. | `romac-install-2024` |
| `boundary_hygiene` | `install_accept` | Utility declares adopted authority/edition, contamination classification, permitted disinfection/flushing/sampling/neutralisation and release criteria/providers. Include all actual mandatory tests/results/resources before signed bounded acceptance; actual further utility return-to-service responsibility explicit. A permitted sampling waiver requires documented applicability, not assumed clean water or pressurised-sleeve exemption. | `ontario-watermain-2020` |
| `boundary_baseline` | Retained main; operational water; repair cycle | Old-main manufacture and pre-start operational leakage are outside this incremental repair boundary; no avoided replacement or avoided water-loss credit. Incremental drain/flush/test water and job releases after start are accounted. |  |
| `boundary_periods` | Assets, stocks, jobs and service providers | Index preparation, installation, cleaning, retest and acceptance events by job/node/period. Include attributable complete-life tool/pump/protection resource manufacture, maintenance, replacements and EOL, excluding separately inventoried operation and bundled resources. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual separately supplied cleaning and protection consumables (`prep_supplies`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Record actual cleaner, brushes consumed, cloths and protective disposables separately at their supplier gate and real net contents; retain actual product/chemical identity, approval and packaging boundary. Include actual unbundled cleanup/containment liners, absorbents and protective disposables used in preparation; do not infer these from waste output alone. Reusable containment equipment belongs to prep_assets.

- Collection subject: Actual separately supplied cleaning and protection consumables
- Flow property / unit: Mass / kg
- Amount rule: Gross actual supplied material mass after tare before outward returns per N; opening/closing stock and carried burden reconcile.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_materials`

Range evidence need: Actual lot mass, receipt/issue records, tare and scope are required; no kg per repair default or assumed solvent.

#### Collection requirement: Actual fuel supplied to preparation equipment (`prep_fuel`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Specify the actual fuel, equipment and supply owner. Upstream fuel supply includes all nonreturned fuel, including unburned waste and actual loss. Use S_fuel with exclusive actual outlets, or deduct only the matching usable outward return once under the declared consumed-supply convention. Burned fuel is a separate combustion activity, never a substitute for upstream supply.

- Collection subject: Actual fuel supplied to preparation equipment
- Flow property / unit: Mass / kg
- Amount rule: Upstream product amount = S_fuel/N, or (S_fuel-unburned_return_kg)/N under the declared matched-usable-return convention. Retain supply burdens of nonreturned unburned waste and loss; calculate burned activity separately with calc_fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_p_utilities`

Range evidence need: Actual fuel records and outlet reconciliation required; no default fuel type, density, consumption or carbon factor.

#### Collection requirement: Attributed complete-life preparation tools and protection assets (`prep_assets`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Represent the preparation share of actual reusable cleaning tools, pumps and access/protection assets with manufacture, maintenance, replacements and EOL covered across all consumers. Direct operation and provider-included tools are excluded from duplicate life burdens.

- Collection subject: Attributed complete-life preparation tools and protection assets
- Flow property / unit: Count / item
- Amount rule: For each asset, target node service divided by total compatible complete-life service, divided by N, in asset-equivalent item; actual upstream asset dataset scaled once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_p_assets`

Range evidence need: Actual asset IDs, life coverage, compatible service driver and all consumer/period totals required; justified prospective in-service remaining life and uncertainty allowed, no invented lifetime.

#### Collection requirement: Actual non-bundled preparation supply freight (`prep_freight`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Identify each actual mode/provider, cargo and leg for preparation supplies; exclude delivery already included upstream. Empty vehicle trips use actual fuel/service allocation and never fictitious cargo.

- Collection subject: Actual non-bundled preparation supply freight
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual cargo mass kg times loaded-leg km times attributable share, divided by N.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_p_freight`

Range evidence need: Actual net cargo, load sharing, travelled distance, provider boundary and empty return resources required; no straight-line or nominal-load default.

#### Collection requirement: Qualified clean retained host ready for actual repair-clamp installation (`qualified_host`)

Process / prospective direction / type: `prepare_host` / `outputs` / `product`.

One identifiable retained defect site has a clean compatible seal seat and accepted clamp/OD/defect fit; transfer to install_accept records provider, time and transfer ID. No new pipe or completed repair is output here.

- Collection subject: Qualified clean retained host ready for actual repair-clamp installation
- Flow property / unit: Count / item
- Amount rule: Unique qualified transfer IDs per N with paired installation entries; repeat cleaning is a linked internal loop.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_host`
- Sources: `romac-install-2024`

Range evidence need: Actual signed qualification/transfer register required; one host state does not imply one accepted final repair or new-main mass.

#### Collection requirement: Actual outward unused preparation products or unburned fuel returned (`prep_returns`)

Process / prospective direction / type: `prepare_host` / `outputs` / `product`.

Only real outward supplier/custody returns at their actual product state qualify. Keep lot and upstream burden linked to original gross inputs; retained stock is not an output.

- Collection subject: Actual outward unused preparation products or unburned fuel returned
- Flow property / unit: Mass / kg
- Amount rule: Actual outward returned net mass per N, never first netted from the gross input and then counted again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_materials`

Range evidence need: Actual return ticket, recipient, lot/tare and accepted quantity required; no assumed return percentage.

#### Collection requirement: Actual captured cleaning debris and spent preparation consumables (`prep_solid_waste`)

Process / prospective direction / type: `prepare_host` / `outputs` / `waste`.

Separate removed corrosion/dirt, contaminated cloths, packaging and any actual fuel-containing waste by composition, hazard and receiving waste route. Retained pipe is not demolition waste.

- Collection subject: Actual captured cleaning debris and spent preparation consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual net receiver/weighing mass per N; distinguish dry solids, associated water and contaminants without double counting wastewater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_residuals`

Range evidence need: Actual waste manifest, composition/moisture and receiver/treatment evidence required; no default iron scrap or recycling credit.

#### Collection requirement: Actual uncaptured preparation fluid or substance releases to specified medium (`prep_releases`)

Process / prospective direction / type: `prepare_host` / `outputs` / `elementary`.

Separate actual whole uncontained fluid from reported species; each elementary exchange requires actual substance identity and air/water/soil receiver. Captured waste, chemical dose and unexplained residual are not emissions. Whole-fluid mass is retained solely as a physical balance operand; any direct elementary water exchange requires its own actual water identity, receiver, property and verified quantity rather than a generic mixture flow.

- Collection subject: Actual uncaptured preparation fluid or substance releases to specified medium
- Flow property / unit: Mass / kg
- Amount rule: Actual measured species/substance mass kg, or actual concentration on documented mass-per-volume basis times discharged volume, divided by N, separately for each verified substance and receiving medium. Whole-fluid mass belongs only to the separate physical ledger and is never this elementary exchange amount; do not add a species subset as the whole mixture or count the same impact twice.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_p_residuals`
- Sources: `ontario-watermain-2020`

Range evidence need: Actual outlet medium, substance, concentration basis, volume, detection limits and mutually exclusive captured/released balance required; no assumption of zero or dose-to-emission equivalence.

#### Collection requirement: Actual preparation equipment combustion emissions by substance and air receiver (`prep_combustion`)

Process / prospective direction / type: `prepare_host` / `outputs` / `elementary`.

Include actual direct-combustion species emitted to air where fuel is directly modelled; purchased energy or provider datasets with included combustion are not duplicated. Broad pollutant labels remain actual species/size requirements.

- Collection subject: Actual preparation equipment combustion emissions by substance and air receiver
- Flow property / unit: Mass / kg
- Amount rule: Burned fuel kg times actual compatible species-specific factor kg per kg fuel, or actual measured species mass, divided by N.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_p_utilities`

Range evidence need: Actual fuel/equipment/abatement/species factor or measurements and factor scope required; no default CO2/NOx identity or factor.

#### Collection requirement: Qualified clean retained host ready for actual repair-clamp installation (`host_to_install`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Receive the prepare_host state with matching defect/repair/transfer ID and actual compatible clean seal seat. It carries preparation burdens once; retained host manufacture remains outside this repair.

- Collection subject: Qualified clean retained host ready for actual repair-clamp installation
- Flow property / unit: Count / item
- Amount rule: Matched qualified host transfers per N; loops to prepare_host explicitly linked and not new accepted interventions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_host`
- Sources: `romac-install-2024`

Range evidence need: Actual paired handoff record and seal-seat/OD/defect compatibility evidence required; no clamp or pipeline length multiplier.

#### Collection requirement: Actual separately supplied disinfection and neutralisation products (`hygiene_chemicals`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Split actual disinfectant, cleaner and dechlorinating product exchanges by formulation/concentration and provider; use adopted authority and actual pipe/gasket/potable compatibility. Product solution mass differs from active chemical mass and released residual.

- Collection subject: Actual separately supplied disinfection and neutralisation products
- Flow property / unit: Mass / kg
- Amount rule: Gross net formulation mass per N before returns; concentration/active-mass conversion only with actual solution basis and actual density/state where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`
- Sources: `ontario-watermain-2020`

Range evidence need: Actual authority-approved chemical/formulation, lot/stock, concentration and required treatment records required; Ontario example concentrations are not universal repair doses.

#### Collection requirement: Actual fuel supplied for installation and closure equipment (`install_fuel`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Specify fuel/equipment/owner and use the same explicit upstream supply convention as calc_fuel. Keep nonreturned unburned waste and loss in upstream supply. Usable outward returns, captured waste and whole uncontained fuel are disjoint from burned activity; only matched usable returns may reduce supply once.

- Collection subject: Actual fuel supplied for installation and closure equipment
- Flow property / unit: Mass / kg
- Amount rule: Upstream product amount = S_fuel/N, or (S_fuel-unburned_return_kg)/N under the declared matched-usable-return convention. Retain supply burdens of nonreturned unburned waste and loss; calculate burned activity separately with calc_fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_i_utilities`

Range evidence need: Actual fuel purchase/issue/stock/burned allocation, return/waste/release and provider scope required; no default fuel/density or empty-vehicle cargo.

#### Collection requirement: Attributed complete-life torque testing pumping and hygiene assets (`install_assets`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Actual reusable torque wrench, test pump, sampling/backflow/protection apparatus share includes compatible full-life manufacture/maintenance/replacements/EOL. Exclude directly modelled fuel/electricity and provider-bundled assets from double burden.

- Collection subject: Attributed complete-life torque testing pumping and hygiene assets
- Flow property / unit: Count / item
- Amount rule: Target node compatible service divided by complete-life compatible service across all nodes/jobs/periods, divided by N, as asset-equivalent item.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_i_assets`

Range evidence need: Actual calibration/asset IDs, service driver, all consumers and life coverage plus prospective scenario/uncertainty for in-service assets required; no default lifetime.

#### Collection requirement: Actual non-bundled clamp and closure supply freight (`install_freight`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Actual loaded legs for clamp/consumables/sample transfers have real cargo/mode/distance. Provider/included transport is not recharged; staff/service or empty travel uses its actual service/fuel boundary.

- Collection subject: Actual non-bundled clamp and closure supply freight
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual cargo kg times leg km times target share divided by N; reference kg*km and verified t*km factor only where applicable.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_i_freight`

Range evidence need: Actual weighed cargo/package boundary, loading, travelled distance and shared-leg allocation required; no count-to-mass or nominal load.

#### Collection requirement: Actual separately purchased bounded mechanical hygienic testing and protection support (`closure_provider`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Each concrete Count exchange is one actually counted bounded provider-service event with its own service ID, declared completed activity/gate and provider reference flow/property/unit compatible with Count/item. Activities may include utility protection/dewatering, pressure/leak testing, hygiene, sampling/laboratory or neutralisation. Declare actual included resources/results and exclude them from duplicate direct cards. A provider whose actual reference flow/property uses another physical unit requires its own matching concrete exchange/property/unit; it cannot silently fit this Count card.

- Collection subject: Actual separately purchased bounded mechanical hygienic testing and protection support
- Flow property / unit: Count / item
- Amount rule: Actual number of completed bounded provider-service events at the declared matching Count/item reference, divided by N. One event and its bundled activities count once; actual resources/results must cover every required pre-gate closure responsibility.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_closure`
- Sources: `ontario-watermain-2020`; `romac-install-2024`

Range evidence need: Actual counted event IDs, provider gate/reference property and unit, contract, primary resources and passed criteria required. Arbitrary provider units or paper-only future tests cannot substitute for a counted completed event.

#### Collection requirement: Actual separately supplied installation cleanup containment and sampling consumables (`install_consumables`)

Process / prospective direction / type: `install_accept` / `inputs` / `product`.

Conditionally include actual unbundled absorbents, spill containment liners, cleaning cloths, protective disposables, sample bottles/reagents and other consumed installation/test/cleanup supplies. Split by actual material/formulation/provider; exclude only supplies demonstrably included in another input or bounded provider package. Reusable apparatus belongs to assets.

- Collection subject: Actual separately supplied installation cleanup containment and sampling consumables
- Flow property / unit: Mass / kg
- Amount rule: Gross actual supplied net material mass kg after tare before real outward returns per N; reconcile final retained destinations, stocks and separately logged waste/releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`

Range evidence need: Actual material/SKU, supplier/package scope, net mass/tare and custody/stock records required; no presumption provider included these supplies or universal dose.

#### Collection requirement: Actual outward returned unused formulations or unburned fuel (`install_returns`)

Process / prospective direction / type: `install_accept` / `outputs` / `product`.

Only actual outward custody transfers of unused lubricant, disinfection/neutralisation formulations, other mass-based consumables or unburned fuel at their actual product state qualify. Excludes complete-clamp returns, which have a separate Count card. Retain lot and original gross-input burden bridge; closing retained stock is not output.

- Collection subject: Actual outward returned unused formulations or unburned fuel
- Flow property / unit: Mass / kg
- Amount rule: Actual net returned formulation/material/fuel mass kg per N; inputs remain gross and the same return is never first netted and then counted again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`

Range evidence need: Actual mass-based return ticket, recipient acceptance/state, net weight/tare and lot/burden evidence required; no return fraction or clamp count-to-mass default.

#### Collection requirement: Actual rejected clamp and spent installation or sampling wastes (`install_solid_waste`)

Process / prospective direction / type: `install_accept` / `outputs` / `waste`.

Actual failed/replaced clamps, separate spent parts, packaging, contaminated disposables, sample wastes and captured fuel-containing waste are split by composition/hazard/receiver. Do not count retained pipe as new demolition waste or duplicate provider-treated waste.

- Collection subject: Actual rejected clamp and spent installation or sampling wastes
- Flow property / unit: Mass / kg
- Amount rule: Actual net waste mass per N including failed attempts and retests; moisture/dry solids/fluids separately reconciled.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_residuals`

Range evidence need: Actual manifests, weights, composition/moisture, treatment destination and reject disposition required; no default scrap yield or avoided steel credit.

#### Collection requirement: Actual uncontained installation or closure releases by substance and receiver (`install_releases`)

Process / prospective direction / type: `install_accept` / `outputs` / `elementary`.

Record whole uncontained fluid in physical balance, then actual elementary species to actual air/water/soil receiver. Discharged residual disinfectant differs from dosed solution/active chlorine; reaction, retention, capture and neutralisation require actual evidence. Whole-fluid mass is retained solely as a physical balance operand; any direct elementary water exchange requires its own actual water identity, receiver, property and verified quantity rather than a generic mixture flow.

- Collection subject: Actual uncontained installation or closure releases by substance and receiver
- Flow property / unit: Mass / kg
- Amount rule: Actual measured species/substance mass kg, or actual concentration on documented mass-per-volume basis times discharged volume, divided by N, separately for each verified substance and receiving medium. Whole-fluid mass belongs only to the separate physical ledger and is never this elementary exchange amount; do not add a species subset as the whole mixture or count the same impact twice.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_i_residuals`
- Sources: `ontario-watermain-2020`

Range evidence need: Actual outlet/receiver/species, concentration basis, detection limits, volume/state, reaction/neutralisation and collection records required; no unexplained-residual emission or automatic zero.

#### Collection requirement: Actual installation and closure combustion emissions by substance to air (`install_combustion`)

Process / prospective direction / type: `install_accept` / `outputs` / `elementary`.

Direct fuel combustion emissions require actual fuel/equipment/substance/abatement and receiver; provider/purchased-energy included emissions are excluded from direct duplication.

- Collection subject: Actual installation and closure combustion emissions by substance to air
- Flow property / unit: Mass / kg
- Amount rule: Burned fuel kg times compatible actual species factor kg per kg fuel, or measured species mass, divided by N.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_i_utilities`

Range evidence need: Actual fuel/equipment/factor or measured species evidence and physical burned/outlet balance required; no broad pollutant near-match UUID or default factor.

## 6. Process Inventory Structure

Discrete work-order interventions are the production mode. `prepare_host` owns cleaning/qualification and residuals through a recorded qualified-host transfer; `install_accept` owns clamp integration on that retained host, retightening, repeated testing and required hygienic closure through acceptance. Transfer IDs pair both sides without multiplying repairs or upstream host burden. Cleaning, torque, testing, sampling and authorisation are embedded responsibilities unless an actual independently bounded purchased service is evidenced. A failed preparation returns within `prepare_host`; a failed clamp/test returns within `install_accept` or to preparation with an explicit linked transfer. Replaced failed clamps leave only as actual returned product or waste; no accepted intervention arises from them.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_host` | Prepare and qualify retained exposed host | required | Every intervention at declared start | Independent cleaning/qualification responsibility; retained host to clean compatible seal-seat handoff | Unique qualified defect handoffs; final burden normalized over accepted repair count N |
| `install_accept` | Install clamp and complete repair acceptance | required | Qualified host and actual compatible factory clamp | Assembly/integration, torque, mechanical and hygienic closure; signed repair handback | Accepted unique intervention count N |


### Process: Prepare and qualify retained exposed host (`prepare_host`)

#### Inputs

##### Product flows

###### Retained exposed secured cast-iron local potable-main defect at repair start (`retained_host`)

State/interface flow for the already existing host, not a purchase or new-main manufacture. Actual localised defect, OD, condition, security, isolation/depressurisation and access/contamination responsibility must qualify the start.

- Selected flow: Retained exposed secured cast-iron local potable-main defect at repair start
- Flow property / unit: Count / item
- Amount rule: Unique actual defect-host entries linked to repair and work-order IDs, divided by accepted count N; no host-production upstream burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_host`
- Sources: `romac-install-2024`

Range evidence need: Actual defect/host register and eligibility records establish the unique event count; there is no default pipeline length, clamp count or defect density.

###### Actual supplied preparation and hygienic-access water (`prep_water`)

Supplied water used for host cleaning and included hygienic protection crosses at the actual supply gate. Utility-owned drainage after start is separately measured from added water; do not charge pre-start operational leakage.

- Selected flow: Actual supplied preparation and hygienic-access water
- Flow property / unit: Mass / kg
- Amount rule: Measured supplied water mass per N; actual metered volume times evidenced density at measured state/temperature only when mass is unavailable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_water`
- Sources: `ontario-watermain-2020`

Range evidence need: Actual meter/scale, water quality, density/temperature for conversion and provider boundaries are required; no fixed flush volume.

###### Actual purchased electricity for preparation equipment (`prep_power`)

Record actual preparation/cleaning/pumping equipment electricity at the real supplier/connection gate when separately supplied; provider-included electricity is not charged again.

- Selected flow: Actual purchased electricity for preparation equipment
- Flow property / unit: Energy / kWh
- Amount rule: Meter difference after actual multiplier and node allocation divided by N.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_p_utilities`

Range evidence need: Actual electricity source, meter periods, equipment/consumer scope and verified concrete exchange support required; no assumed duration or kWh per repair.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Actual collected preparation wastewater sent to treatment (`prep_wastewater`)

Collected cleaning/drainage fluids delivered to an actual sewer/treatment receiver are waste transfers, including their actual contamination and water content; no direct-release row for the same captured fluid.

- Selected flow: Actual collected preparation wastewater sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual transferred whole-fluid net mass per N; actual metered volume requires recorded density/temperature/state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_residuals`
- Sources: `ontario-watermain-2020`

Range evidence need: Actual receiver, fluid quantity, sampling and route evidence required; contaminant sum is not whole-fluid quantity.

##### Elementary flows

### Process: Install clamp and complete repair acceptance (`install_accept`)

#### Inputs

##### Product flows

###### Actual complete single-section stainless full-circle repair-clamp assembly with compatible gasket (`complete_clamp`)

Actual factory clamp assembly with shell/bolts/armour/gasket and included coatings/packaging crosses supplier gate once. Record SKU, certified size/range, overlap/defect suitability and actual potable documentation; SBR is the cited standard compound, not assumed EPDM.

- Selected flow: Actual complete single-section stainless full-circle repair-clamp assembly with compatible gasket
- Flow property / unit: Count / item
- Amount rule: Gross actual complete supplied assembly count per N before outward returns; separate actual replacement parts only if outside the bundled assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`
- Sources: `romac-submittal-2024`; `romac-ss1`

Range evidence need: Actual SKU count, approved BOM/supplier gate and package scope required; site/PDF shell-gauge discrepancy prevents default composition/mass; NSF61/372 upon request is not proof for every SKU.

###### Actual separately supplied approved gasket lubricant (`gasket_lubricant`)

Use actual gasket/pipe/potable-compatible lubricant required for the rough iron seal seat; record actual formulation/approval and exclude factory-included lubricant already covered by assembly upstream.

- Selected flow: Actual separately supplied approved gasket lubricant
- Flow property / unit: Mass / kg
- Amount rule: Gross supplied net lubricant mass per N before real outward returns; include actual repeated application and failure resources.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`
- Sources: `romac-install-2024`

Range evidence need: Actual product/SDS, potable and gasket compatibility, net pack mass/stock and application records required; no standard lubricant or dose.

###### Actual supplied pressure-test flushing and hygienic closure water (`test_flush_water`)

Include actual separately supplied water for pressure/leak testing, flushing, disinfection and sampling displacement through the declared gate. Separately record post-start drained main water as host-content contribution, not a second purchased-water input.

- Selected flow: Actual supplied pressure-test flushing and hygienic closure water
- Flow property / unit: Mass / kg
- Amount rule: Measured supplied net water mass per N; volume-to-mass only with actual density/temperature/state; retain repeat-test and repeat-flush quantities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_water`
- Sources: `ontario-watermain-2020`; `romac-install-2024`

Range evidence need: Actual meters, source/quality, test/flush records, drains, custody and provider bundle scope required; no nominal pipe volume or automatic flushing exemption.

###### Actual purchased electricity for clamp installation and testing (`install_power`)

Include actual non-bundled powered fastening, pumping, test and hygiene equipment electricity; manual torque creates no fictional electrical use.

- Selected flow: Actual purchased electricity for clamp installation and testing
- Flow property / unit: Energy / kWh
- Amount rule: Meter difference times actual multiplier and target node share divided by N.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_i_utilities`

Range evidence need: Actual connection/provider, meters, operating periods and verified exchange support required; no duration-to-energy conversion without actual power evidence.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted single-defect full-circle clamp repair installation on an existing exposed cast-iron local potable-water main (`accepted_repair`)

Only a unique final intervention with approved fit, flat clean gasket, actual staged torque/retorque, passed mechanical/hygienic criteria, closed defects and signed bounded repair release counts. Explicit authorised reinstatement/utility return-to-service owners remain in handback metadata. N unique accepted final repair IDs divided by N equals 1 item; N positive. Rejected clamp/test, repeated attempts, bolts and clamp sections add no accepted output.

- Selected flow: Accepted single-defect full-circle clamp repair installation on an existing exposed cast-iron local potable-water main
- Flow property / unit: Count / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_host`
- Sources: `romac-install-2024`; `ontario-watermain-2020`

Range evidence need: Actual signed acceptance register and actual required closure results/providers establish N and the exact reference; no numerical performance/life range is imposed.

###### Actual outward accepted unused complete-clamp assembly returns (`clamp_returns`)

Only complete unused assemblies actually transferred outward and accepted by their recipient as products count. Disaggregate actual SKU and quantity; match original gross complete_clamp inputs and burden custody. Retained stock and discarded/rejected used clamps are not unused complete-clamp product returns.

- Selected flow: Actual outward accepted unused complete-clamp assembly returns
- Flow property / unit: Count / item
- Amount rule: Actual accepted outward complete-assembly count per SKU divided by N; no netting from the gross clamp input followed by another output charge. If downstream actually needs mass, use only actual matching measured SKU net mass kg/item and a separately documented conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_clamp_returns`

Range evidence need: Actual return ticket, recipient acceptance, SKU, intact state and counted assemblies required; no default clamp mass/BOM/shell gauge or count-to-mass conversion.

##### Waste flows

###### Actual collected testing flushing and disinfection wastewater to treatment (`install_wastewater`)

Actual collected whole fluid transferred to identified sewer/treatment receiver remains waste, with actual contaminants/residual disinfectant/neutralisation state; direct releases of the same fluid are excluded.

- Selected flow: Actual collected testing flushing and disinfection wastewater to treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual transferred whole-fluid mass per N; metered volume converted only with actual density/temperature/state; constituent mass is a separate composition record.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_residuals`
- Sources: `ontario-watermain-2020`

Range evidence need: Actual transfer volume/mass, receiver, water/chemical balance, neutralisation and sampling required; no assumption all dose is wastewater chlorine.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_repair` | All repair-cycle resources | Attribute directly to unique repair ID where possible; setup, failed clamps, cleaning, retorque and repeated tests remain over accepted N. Do not create co-products, accepted counts or displacement credit from rejected work or recovered waste. |  |
| `allocation_shared` | Shared crews, equipment and bounded providers | Identify all consuming jobs/nodes/periods and physical service driver; use measured driver shares that sum to the declared total. Reconcile shared-run setup, travel/empty return, hygiene and cleanup once. Purchased-provider bundles exclude duplicate direct resources. |  |
| `allocation_asset_life` | `prep_assets`; `install_assets` | Allocate complete-life burdens by evidenced target service divided by total compatible life service across all jobs/nodes/periods. Observed completed life or justified prospective in-service remaining service/replacement/termination/EOL scenario with uncertainty and updates is required; missing denominator or life coverage blocks finalisation. No default lifetime or future observed retirement requirement. |  |
| `allocation_stock` | Supplies, returns and retained stock | Gross input exchanges precede actual outward returns. Closing retained stock is a balance with carried-forward upstream burden, never an outward exchange. Opening stock brings its evidenced carried-in burden; purchase receipt/internal issue are alternative boundaries, not duplicates. Keep separate SKU-count and material-mass ledgers. Reconcile receipt or issue against final retained installation/destinations, real outward returns, captured waste, actual releases and closing stock. Final retained destinations exclude separately logged losses/outlets; dosed/used activity is intermediate, not another additive outlet. Reconcile upstream burden on that same custody basis. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Record actual foreground exchanges and provider resources at the declared boundaries. Protocols are node-specific; every field name below is literal and remains unchanged in translation. Units shown cover collected operands, not universal physical factors. Actual provider/service unit and concrete exchange support must be checked before downstream exchange production. Preserve unknown actual identities and failed balances as incomplete evidence, not zero.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_p_host` | `prepare_host` | retained/qualified host and accepted repair state | inspection_and_acceptance_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; transfer_id; pipe_OD_mm; host_condition; defect_extent_mm; pipe_material; local_main_function; isolation_record; depressurisation_record; hygiene_authority_edition; contamination_class; clamp_SKU; gasket_compound; potable_document; torque_instruction_edition; torque_values_units; retorque_times; pressure_test_criterion_units; pressure_test_result; hygiene_criteria; sample_result; closure_owner; reinstatement_owner; utility_release_owner; acceptance_status; acceptance_signature; gate_time | Verify actual utility-authorised starting condition, qualified handoffs and final release against approved current product and adopted-authority instructions; pair transfer IDs and deduplicate unique final accepted repair IDs. Retain failed/repeated event links. | item | Every defect, transfer, attempt and final gate | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Signed inspection, actual SKU/approval/torque/pressure/hygiene results and explicit owners; no paper-only future closure |
| `cp_p_materials` | `prepare_host` | supplies returns stock and upstream burden custody | lot_custody_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; lot_id; product_identity; formulation; concentration_value; concentration_basis; SKU; quantity_count; gross_mass_kg; tare_kg; net_mass_kg; volume_L; density_kg_per_L; temperature_C; physical_state; opening_stock_count; closing_stock_count; receipts_count; final_retained_count; outward_returns_count; discarded_count; opening_stock_kg; opening_burden_reference; receipts_kg; issues_kg; dosed_activity_kg; final_retained_destination_kg; outward_returns_kg; waste_kg; whole_release_kg; closing_stock_kg; closing_burden_reference; receiver; return_acceptance; upstream_gate | Weigh actual net contents after tare before real outward returns; retain actual count per clamp SKU. Reconcile receipt or issue boundary, opening burden and closing carried burden; match real return tickets. Actual chemical formulation/concentration/compatibility needed before concrete exchanges. | kg; item; L | Every lot, issue, return, use and period stock closure | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibrated weights, SKU/BOM and actual pack mass; custody and stock/burden bridge; no webpage-gauge-derived mass |
| `cp_p_water` | `prepare_host` | supplied water and post-start host-content drainage | water_meter_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; source_id; water_quality; meter_id; meter_start; meter_end; meter_multiplier; meter_unit; supplied_volume_m3; supplied_mass_kg; density_kg_per_m3; temperature_C; physical_state; post_start_drained_mass_kg; rain_contribution_kg; retained_host_moisture_kg; waste_fluid_mass_kg; direct_fluid_release_kg; returned_water_kg; retained_water_kg; measurement_uncertainty | Read source/use meters or scales for each preparation/test/flush/disinfection event; keep supplied water separate from actual post-start drained host contents and evidenced weather/moisture. Reconcile fluid receivers and provider bundles. | kg; m3 | Every water use/drain/test/retest event | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibrated meters, actual density for mass conversion, quality/source and outlet records; pre-start leakage excluded |
| `cp_p_utilities` | `prepare_host` | electricity fuel and direct combustion | meter_and_fuel_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; energy_source; equipment_id; meter_start_kWh; meter_end_kWh; meter_multiplier; node_share; fuel_identity; gross_fuel_kg; fuel_volume_L; density_kg_per_L; temperature_C; physical_state; opening_fuel_kg; closing_fuel_kg; unburned_return_kg; captured_unburned_waste_kg; whole_uncontained_fuel_kg; incident_total_spill_kg; burned_fuel_kg; fuel_boundary_choice; substance; emission_factor_kg_per_kg_fuel; factor_source; factor_scope; abatement; measured_emission_kg; receiver_medium | Meter actual energy by node/event and reconcile fuel stock, gross/consumed boundary and mutually exclusive unburned outlets. Incident total spill audits its partitions only. Direct combustion uses actual compatible factor or species measurement; included provider/energy emissions are excluded. | kWh; kg; L | Every meter/fuel interval and emission basis | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibration, fuel density/state, stock/outlet logs, actual factor applicability and species/receiver evidence |
| `cp_p_assets` | `prepare_host` | complete-life assets and shared-node attribution | asset_life_service_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; asset_id; manufacture_burden_reference; maintenance_events; replacement_events; termination_scenario; EOL_burden_reference; operation_exclusions; service_driver_unit; target_node_service; all_consumers; consumer_periods; observed_life_service; prospective_remaining_service; complete_life_service; scenario_source; forecast_observed_labels; uncertainty; sensitivity; update_date | For each reusable asset enumerate all node/job/period consumers and manufacture/maintenance/replacements/EOL coverage. Scale by measured compatible target service share; observed completed lives or justified prospective in-service remaining-life scenarios, labelled forecast/observed, are permitted. | item; actual compatible service-driver unit | Every asset service event, period and scenario update | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Complete-life boundary/denominator evidence and share reconciliation; missing coverage or denominator blocks finalisation |
| `cp_p_freight` | `prepare_host` | actual non-bundled freight and shared trip responsibility | transport_leg_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; consignment_id; leg_id; mode; vehicle_provider; cargo_mass_kg; cargo_tare_kg; loaded_distance_km; target_share; all_consumers; empty_leg_km; empty_leg_fuel_kg; actual_service_scope; included_delivery; measured_uncertainty | Use actual cargo net mass and travelled loaded-leg distance for each mode/leg; allocate shared loads with declared physical driver and total-consumer reconciliation. Empty/staff service legs use actual fuel/bounded provider service once. | kg; km; kg*km | Every loaded and empty leg | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Dispatch/weighing/distance/provider records; no fake cargo, nominal capacity or duplicate bundled delivery |
| `cp_p_residuals` | `prepare_host` | solid waste collected fluid and direct releases | outlet_and_receiver_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; outlet_id; material_or_substance; receiver; receiver_medium; capture_state; waste_route; gross_mass_kg; tare_kg; net_mass_kg; dry_solids_kg; associated_water_kg; whole_fluid_mass_kg; volume_m3; density_kg_per_m3; temperature_C; physical_state; concentration_value; concentration_basis; concentration_kg_per_m3; measured_species_kg; detection_limit; reaction_retention_kg; neutralisation_record; incident_id; incident_total_kg; exclusive_partition_id | Identify each captured waste transfer or uncontained direct outlet and receiver; weigh whole fluids/solids and analyse actual species on stated basis. Record actual treatment/neutralisation and detection limits; unclosed balances require investigation, not fictional emissions. | kg; m3; kg/m3 | Every waste transfer, release, sample and incident | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Waste tickets, sample chain of custody, species/medium and exclusive whole-fluid partitions; same mass never both waste and emission |
| `cp_i_host` | `install_accept` | retained/qualified host and accepted repair state | inspection_and_acceptance_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; transfer_id; pipe_OD_mm; host_condition; defect_extent_mm; pipe_material; local_main_function; isolation_record; depressurisation_record; hygiene_authority_edition; contamination_class; clamp_SKU; gasket_compound; potable_document; torque_instruction_edition; torque_values_units; retorque_times; pressure_test_criterion_units; pressure_test_result; hygiene_criteria; sample_result; closure_owner; reinstatement_owner; utility_release_owner; acceptance_status; acceptance_signature; gate_time | Verify actual utility-authorised starting condition, qualified handoffs and final release against approved current product and adopted-authority instructions; pair transfer IDs and deduplicate unique final accepted repair IDs. Retain failed/repeated event links. | item | Every defect, transfer, attempt and final gate | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Signed inspection, actual SKU/approval/torque/pressure/hygiene results and explicit owners; no paper-only future closure |
| `cp_i_materials` | `install_accept` | supplies returns stock and upstream burden custody | lot_custody_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; lot_id; product_identity; formulation; concentration_value; concentration_basis; SKU; quantity_count; gross_mass_kg; tare_kg; net_mass_kg; volume_L; density_kg_per_L; temperature_C; physical_state; opening_stock_count; closing_stock_count; receipts_count; final_retained_count; outward_returns_count; discarded_count; opening_stock_kg; opening_burden_reference; receipts_kg; issues_kg; dosed_activity_kg; final_retained_destination_kg; outward_returns_kg; waste_kg; whole_release_kg; closing_stock_kg; closing_burden_reference; receiver; return_acceptance; upstream_gate | Weigh actual net contents after tare before real outward returns; retain actual count per clamp SKU. Reconcile receipt or issue boundary, opening burden and closing carried burden; match real return tickets. Actual chemical formulation/concentration/compatibility needed before concrete exchanges. | kg; item; L | Every lot, issue, return, use and period stock closure | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibrated weights, SKU/BOM and actual pack mass; custody and stock/burden bridge; no webpage-gauge-derived mass |
| `cp_i_water` | `install_accept` | supplied water and post-start host-content drainage | water_meter_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; source_id; water_quality; meter_id; meter_start; meter_end; meter_multiplier; meter_unit; supplied_volume_m3; supplied_mass_kg; density_kg_per_m3; temperature_C; physical_state; post_start_drained_mass_kg; rain_contribution_kg; retained_host_moisture_kg; waste_fluid_mass_kg; direct_fluid_release_kg; returned_water_kg; retained_water_kg; measurement_uncertainty | Read source/use meters or scales for each preparation/test/flush/disinfection event; keep supplied water separate from actual post-start drained host contents and evidenced weather/moisture. Reconcile fluid receivers and provider bundles. | kg; m3 | Every water use/drain/test/retest event | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibrated meters, actual density for mass conversion, quality/source and outlet records; pre-start leakage excluded |
| `cp_i_utilities` | `install_accept` | electricity fuel and direct combustion | meter_and_fuel_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; energy_source; equipment_id; meter_start_kWh; meter_end_kWh; meter_multiplier; node_share; fuel_identity; gross_fuel_kg; fuel_volume_L; density_kg_per_L; temperature_C; physical_state; opening_fuel_kg; closing_fuel_kg; unburned_return_kg; captured_unburned_waste_kg; whole_uncontained_fuel_kg; incident_total_spill_kg; burned_fuel_kg; fuel_boundary_choice; substance; emission_factor_kg_per_kg_fuel; factor_source; factor_scope; abatement; measured_emission_kg; receiver_medium | Meter actual energy by node/event and reconcile fuel stock, gross/consumed boundary and mutually exclusive unburned outlets. Incident total spill audits its partitions only. Direct combustion uses actual compatible factor or species measurement; included provider/energy emissions are excluded. | kWh; kg; L | Every meter/fuel interval and emission basis | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibration, fuel density/state, stock/outlet logs, actual factor applicability and species/receiver evidence |
| `cp_i_assets` | `install_accept` | complete-life assets and shared-node attribution | asset_life_service_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; asset_id; manufacture_burden_reference; maintenance_events; replacement_events; termination_scenario; EOL_burden_reference; operation_exclusions; service_driver_unit; target_node_service; all_consumers; consumer_periods; observed_life_service; prospective_remaining_service; complete_life_service; scenario_source; forecast_observed_labels; uncertainty; sensitivity; update_date | For each reusable asset enumerate all node/job/period consumers and manufacture/maintenance/replacements/EOL coverage. Scale by measured compatible target service share; observed completed lives or justified prospective in-service remaining-life scenarios, labelled forecast/observed, are permitted. | item; actual compatible service-driver unit | Every asset service event, period and scenario update | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Complete-life boundary/denominator evidence and share reconciliation; missing coverage or denominator blocks finalisation |
| `cp_i_freight` | `install_accept` | actual non-bundled freight and shared trip responsibility | transport_leg_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; consignment_id; leg_id; mode; vehicle_provider; cargo_mass_kg; cargo_tare_kg; loaded_distance_km; target_share; all_consumers; empty_leg_km; empty_leg_fuel_kg; actual_service_scope; included_delivery; measured_uncertainty | Use actual cargo net mass and travelled loaded-leg distance for each mode/leg; allocate shared loads with declared physical driver and total-consumer reconciliation. Empty/staff service legs use actual fuel/bounded provider service once. | kg; km; kg*km | Every loaded and empty leg | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Dispatch/weighing/distance/provider records; no fake cargo, nominal capacity or duplicate bundled delivery |
| `cp_i_residuals` | `install_accept` | solid waste collected fluid and direct releases | outlet_and_receiver_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; outlet_id; material_or_substance; receiver; receiver_medium; capture_state; waste_route; gross_mass_kg; tare_kg; net_mass_kg; dry_solids_kg; associated_water_kg; whole_fluid_mass_kg; volume_m3; density_kg_per_m3; temperature_C; physical_state; concentration_value; concentration_basis; concentration_kg_per_m3; measured_species_kg; detection_limit; reaction_retention_kg; neutralisation_record; incident_id; incident_total_kg; exclusive_partition_id | Identify each captured waste transfer or uncontained direct outlet and receiver; weigh whole fluids/solids and analyse actual species on stated basis. Record actual treatment/neutralisation and detection limits; unclosed balances require investigation, not fictional emissions. | kg; m3; kg/m3 | Every waste transfer, release, sample and incident | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Waste tickets, sample chain of custody, species/medium and exclusive whole-fluid partitions; same mass never both waste and emission |
| `cp_i_closure` | `install_accept` | bounded provider hygiene testing protection and repair closure | bounded_service_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; service_id; actual_reference_unit; service_quantity; service_event_id; provider_flow_property; provider_reference_unit; event_gate; adopted_authority_edition; classification_record; activity_scope; direct_resource_exclusions; included_water_kg; included_chemicals_kg; included_energy_units; included_assets; included_travel; pressure_result; flushing_result; disinfectant_result; sampling_requirement; sample_chain_of_custody; laboratory_result; neutralisation_result; release_criterion; criterion_pass; provider_signature; gate_time; utility_return_to_service_owner | Verify actual counted bounded provider-service event with matching Count/item reference/property/unit and primary activity/results for mandatory mechanical/hygienic closure, including any utility-owned protection/dewatering and sampling/lab resource coverage. Confirm completed required criteria before accepted_repair; record later authorised utility/reinstatement interfaces. | item; actual bundled resource units | Every bounded service, sample, result and release | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Actual contract/gate/reference, primary resource evidence and criterion pass; excluded direct resources reconcile; no unowned future test |
| `cp_i_clamp_returns` | `install_accept` | outward accepted complete-assembly product returns | counted_product_return_record | repair_id; work_order_id; event_id; period_id; provider_id; accepted_count_N; lot_id; clamp_SKU; gross_received_count; returned_count; return_ticket; recipient; recipient_acceptance; intact_product_state; transfer_time; matched_SKU_net_mass_kg_per_item; mass_conversion_need | Count actual intact outward assemblies by SKU and match recipient acceptance/custody ticket and original gross receipt; do not convert to mass unless downstream requires it and actual matching SKU net mass is measured. | item; kg/item only for actual evidenced downstream conversion | Every outward complete-assembly return | Declared repair work-order cycle and stock period | Actual repair site/supplier/return recipient | per reference flow | Counted return ticket, SKU/intact state and recipient acceptance; no stock output, default mass or gauge-derived BOM |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | All inventory rows | For each row q_ref = attributed actual quantity / N, with original physical row unit retained. N is unique accepted final repair count and must be positive; internal transfer quantities retain their distinct event register. | Node-specific protocols and cp_i_host; actual attributed row quantity and accepted_count_N | Row physical units per 1 item accepted repair |  |
| `calc_mass` | `prep_supplies`; `prep_water`; `prep_fuel`; `prep_returns`; `prep_solid_waste`; `prep_wastewater`; `gasket_lubricant`; `hygiene_chemicals`; `test_flush_water`; `install_fuel`; `install_consumables`; `install_returns`; `install_solid_waste`; `install_wastewater` | Net contents kg = gross kg - tare kg. Where measured volume is used, mass kg = volume m3 * actual density kg/m3, or volume L * actual density kg/L; record actual temperature and state. Product count to mass requires actual SKU mass kg/item. Gross receipt/issue precedes outward returns. | Applicable node cp_materials, cp_water, cp_utilities or cp_residuals; actual raw weight, volume, density, temperature, state and SKU net mass | Actual physical net mass kg, separately normalized over N |  |
| `calc_power` | `prep_power`; `install_power` | Attributed electricity kWh = (meter_end_kWh - meter_start_kWh) * meter_multiplier * node_share; divide by N. Actual shares reconcile to whole metered consumer scope. | cp_p_utilities; cp_i_utilities; actual meters/multiplier/node_share/N | kWh per accepted repair |  |
| `calc_freight` | `prep_freight`; `install_freight` | Freight kg*km = sum(cargo_mass_kg * loaded_distance_km * target_share); divide by N. Cargo tare removed. Verified 1 t*km = 1000 kg*km only when actual exchange uses that supported unit. Empty legs use actual separate service/fuel resources without cargo invention. | cp_p_freight; cp_i_freight; cargo mass, leg distance, target shares and accepted_count_N | kg*km per accepted repair |  |
| `calc_assets` | `prep_assets`; `install_assets` | Asset-equivalent item = target_node_service / complete_life_service, then divide by N. Complete_life_service = observed_life_service + evidenced prospective_remaining_service for in-service scenarios; use same compatible driver units and coverage, all consumers and periods. Scale actual complete-life upstream burden with this fraction once. | cp_p_assets; cp_i_assets; compatible target and complete-life service; forecast/observed labels; full-life burden coverage; accepted_count_N | Asset-equivalent item and attributed complete-life burden per repair |  |
| `calc_fuel` | `prep_fuel`; `install_fuel`; `prep_combustion`; `install_combustion` | S_fuel = opening_fuel_kg + gross_fuel_kg - closing_fuel_kg; gross_fuel_kg is external net fuel content before return deduction, excluding container/vehicle tare. burned_fuel_kg = S_fuel - unburned_return_kg - captured_unburned_waste_kg - whole_uncontained_fuel_kg on the same bounded tank/event scope, with exclusive final outlets; incident total spill is audit only. Upstream fuel input is S_fuel/N with actual outlets, OR (S_fuel-unburned_return_kg)/N under the declared matched-usable-return convention without a second return credit. Both supply views retain all nonreturned unburned waste/loss burdens. Use burned_fuel_kg only for matching combustion activity and never as the sole upstream supply. | cp_p_utilities; cp_i_utilities; stock/gross/exclusive outlets and boundary choice | Upstream fuel supply kg per N and separate actual burned activity kg |  |
| `calc_combustion` | `prep_combustion`; `install_combustion` | Emission kg = burned_fuel_kg * applicable emission_factor_kg_per_kg_fuel, or actual measured_emission_kg, separately for verified substance/receiver; divide by N. Factor source and fuel/equipment/abatement/basis must match. | cp_p_utilities; cp_i_utilities; actual burned fuel, species/factor/source or measured emission | Species kg per accepted repair to actual air receiver |  |
| `calc_releases` | `prep_releases`; `install_releases` | Species kg = actual concentration_kg_per_m3 * discharged volume_m3, or measured_species_kg; divide by N. Record concentration basis/unit conversion evidence. Whole-fluid mass kg = actual volume_m3 * actual density_kg_per_m3 when not weighed; species sum is not whole-fluid mass. Dose, retained/reaction/captured/neutralised quantities remain separate evidence, never assumed emitted. | cp_p_residuals; cp_i_residuals; concentration/basis, discharged volume, density/temperature/state, species and medium | Actual species kg per repair and separate whole-fluid physical balance |  |
| `calc_stock_bridge` | `prep_supplies`; `prep_returns`; `complete_clamp`; `gasket_lubricant`; `hygiene_chemicals`; `install_consumables`; `install_returns`; `clamp_returns` | Maintain separate Count/item SKU ledgers and Mass/kg material/formulation ledgers at one chosen receipt OR issue boundary. Opening stock + actual receipts/issues = final retained installation/destinations + real outward returns + captured waste + actual whole release + closing stock. Final retained destinations exclude separately logged losses/outlets; dosed/used activity is intermediate and never another additive final outlet. Match opening carried-in upstream burden and receipt burden to actual use, returns/dispositions and closing carried-forward burden using actual compatible lot data. Never count receipt and internal issue together. | cp_p_materials; cp_i_materials; cp_i_clamp_returns; actual separate SKU count fields (opening_stock_count, receipts_count, final_retained_count, outward_returns_count, discarded_count, closing_stock_count) and material mass fields; lot custody and opening/closing burden references | Physical stock and upstream-burden bridge without fake closing-stock output |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_route` | Host, assembly and reference output | Actual main/OD/defect/clamp/gasket/potable approval and gate qualification required; site and PDF gauge conflict is resolved by actual SKU documentation, not an inferred BOM. | cp_p_host; cp_i_host; cp_i_materials; actual manufacturer/utility approval |
| `quality_closure` | Accepted repair and bounded closure provider | Actual adopted authority and product editions, responsibility and mechanical/hygienic criteria/results required; documented non-applicability for any omitted test; future unowned test blocks final count. | cp_i_host; cp_i_closure; approved procedure/results/owners |
| `quality_completeness` | Every inventory row | Collect all attempts, returns, stocks, actual waste/release outlets and provider resources from start to gate. Distinguish unknown from zero with detection limits and balance discrepancy investigation. | All node-specific protocols; custody, calibrated meter and receiver evidence |
| `quality_assets` | Shared assets/jobs/periods | Complete-life service and burden coverage, all consumers, prospective scenario sources/uncertainty and update policy required; unsupported denominator or replacement/termination/EOL gap blocks finalisation. | cp_p_assets; cp_i_assets; full-life and all-consumer records |
| `quality_identity` | Concrete downstream exchanges | Resolve actual supplier/provider/material/waste/substance and support identities before final TIDAS exchange; candidate semantic umbrella does not permit a near-match or invented UUID. | Actual foreground identities and independent detail/support verification |
| `quality_periods` | Work orders, loops, stocks and shared providers | Declare start/end, node/event/period links and service ownership; reconcile shared setup/cleaning/travel and changing stock burdens without repeat attribution. | Every CP work_order_id/event_id/period_id/provider_id; consumer totals and stock bridge |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_qualification` | `prepare_host`; `host_to_install` | Reject unqualified host, unsupported defect/OD/clamp fit, missing authorised isolation/depressurisation or unresolved job-caused damage; retain clean seat and transfer evidence. | `romac-install-2024`; `romac-submittal-2024` |
| `validate_assembly` | `install_accept` | Require distinct retained host and actual complete clamp component roles, flat clean gasket, centring, actual instruction-compliant torque/retorque and passed pre-concealment mechanical criterion; no coupling/tapping/separated ends. | `romac-install-2024` |
| `validate_hygiene` | `accepted_repair`; `closure_provider` | Require actual adopted-authority contamination classification, hygiene/flushing/sampling/neutralisation criteria/results and actual responsible providers; complete all actual required closure before final output. Record applicable waiver evidence and authorised reinstatement/utility handback interfaces. | `ontario-watermain-2020` |
| `validate_count_reject` | Reference count, work-order runs and loops | N counts only unique signed accepted final repairs; rejected attempts/clamps/tests and repeated preparation/retorque/retest retain burdens and explicit node-linked rework/return/waste paths. No failed attempt adds final count. |  |
| `validate_resources` | Shared assets/providers, stocks and all periods | Reconcile all consumers/periods, complete-life assets and prospective scenario evidence, direct versus bundled operation, freight/empty service, stock quantities/upstream-burden bridge and no repeated allocation. Missing life coverage or denominator blocks finalisation. |  |
| `validate_outlets` | Materials, water, fuel, waste and elementary releases | Gross before real returns; stock is not outward flow. Fuel outlets exclusive and whole uncontained fluid measured separately from species; total spill audit only. Chemical dose is not release and unclosed residual is not automatic emission; actual waste receiver/substance/medium and balance evidence required. |  |
| `validate_candidate` | Foreground package and downstream exchange production | Require all applicable protocols/qualifiers, actual units/conversion operands/uncertainty and verified concrete final exchanges before production. A candidate/check pass does not prove SKU potable approval, quantity truth, authority compliance or UUID verification. |  |
| `validate_fuel_supply` | prep_fuel; install_fuel; prep_combustion; install_combustion | Reconcile S_fuel, usable returns, nonreturned unburned waste/loss and burned activity separately. A nonreturned spill or fuel waste retains its upstream supply burden even when it emits no combustion CO2; no burned-only upstream input or duplicate return deduction is allowed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset; downstream process/lifecyclemodel projection of the foreground repair package |
| allowed_use | Declared single-defect exposed cast-iron local potable-main clamp repair subset with matching route/quality/gate qualifiers |
| excluded_use | Whole pipeline construction/operation; live-pressure or tapping/coupling route; pipe replacement; unsupported life or watertightness equivalence; unaccepted work |
| required_metadata | Unique repair and defect IDs; local potable-water main function; retained cast-iron OD, condition and supported defect extent; actual single-section clamp SKU/range/length/gasket and potable certification; authorised isolation/depressurisation; contamination classification and adopted authority/instruction editions; actual torque/retorque, pressure/leak and hygiene criteria/results/providers; gate and handback owners; reporting/job/asset periods. |
| required_quality_disclosure | Providers/interfaces, actual closure criteria/results, uncertainty, missing identities, measured versus calculated records, reject loops, stock/burden bridges, asset-life scenarios, temporal/geographical/technology coverage and excluded services |
| update_trigger | Changed approved clamp/gasket/potable documents, host/defect/pressure, adopted hygiene authority, provider/boundary, evidence, asset scenario, supply mix or release criterion |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN CPC3 explanatory notes 30 June 2025, printed p286; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Local main repair subset and trenching exclusion |
| romac-ss1 | handbook | Romac SS1 official product page; https://www.romac.com/ss1 | Full-circle cast-iron-compatible single-section route; actual size/pressure/certification applicability; no universal BOM |
| romac-install-2024 | handbook | Romac document10-9-0036, 20 November 2024, pp1-2; https://www.romac.net/Installation-Instructions/SS123-install.pdf | Cleaning/lubricant, centring/gasket seating, staged torque/retorque, leak test before backfill and no coupling |
| romac-submittal-2024 | handbook | Romac document10-8-0014, 3 December 2024, p1; https://www.romac.net/Submittals/CLAMPS/ss1-2-3-sub.pdf | Factory assembly, SBR standard gasket and upon-request NSF61/372; actual BOM/edition confirmation |
| ontario-watermain-2020 | official_guidance | Ontario 2020 Watermain disinfection procedure, August2020, preface and sections2-3; https://www.ontario.ca/page/water-main-disinfection-procedure | Dated technical example of utility contamination classification, hygiene/flushing/sampling/dechlorination, repair records and authorised return-to-service responsibilities; actual adopted authority governs |

These sources support the stated classification, product route, technical instructions and hygiene/gate responsibilities. The generic normalization, physical-accounting, freight, fuel, stock/burden and complete-life allocation equations are this PCR's declared methods supported by the node-specific foreground collection protocols; they are not equations published by UN, Romac or Ontario.
