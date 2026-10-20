---
pcr_id: pcr.construction-services.existing-local-low-voltage-unarmoured-multicore-cable-resin-cast-straight-joint-repair-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing local low-voltage unarmoured multicore cable resin-cast straight-joint repair services

## 1. Scope and Applicability

This PCR covers a bounded repair service on existing exposed, qualified unarmoured and unshielded polymeric-insulated multicore local low-voltage electricity-distribution cable ends using approved compression connectors and a preproportioned two-part polyurethane resin-cast mould system within the actual approved rating, no higher than 1 kV. Work begins with authorised isolation, proving dead and continued safe control. The owner must qualify slack, conductor/insulation compatibility and environment before cutback, preparation, crimping, mould sealing, pouch mixing/pouring and protection through full required cured-state verification, actual electrical acceptance and signed handover.

The fully cured acceptance gate is this PCR subset; it does not claim that every product prohibits earlier energisation specifically authorised by its own applicable instructions. Energisation and backfill interfaces require explicit owner authorisation. The repair excludes new cable inserts, new routes, trenching, building fittings/circuits, telecommunications, long-distance/high-voltage works, armoured/shielded/lead/oil-paper cables, branch joints, shear-bolt connectors, shrink-only or re-enterable gel joints, hazardous-area systems and later operation. CPC 3.0 54252 includes repair of local electricity cables; this semantic boundary is narrower than that classification. [un-cpc3-2025; 3m-90na-issue3]

The printed manufacturer document is 90-NA-X with Resin470W, Issue3, despite its URL saying92NA. It is route evidence, not a complete site instruction. The current 470W web link redirects to Resin470; the dated2012 Resin470 formulation values and 4GS immediate-energisation marketing cannot be transferred to 470W or to this acceptance gate. Actual delivered kit/connector instructions and competent owner criteria control. [3m-90na-issue3; 3m-resins-page]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-local-low-voltage-unarmoured-multicore-cable-resin-cast-straight-joint-repair-services |
| classification_refs | CPC 3.0 54252; proposed narrower relation |
| covered_products | One final accepted compression-connected, fully cured polyurethane resin-cast straight-joint repair of the declared existing local LV multicore cable |
| excluded_products | New cable/route/trench; building fitting; telecom; long-distance or HV; armoured/shielded/lead/oil-paper; branch/shear-bolt/shrink-only/gel joints; hazardous-area works; subsequent operation |
| representative_product | Declared exposed existing unarmoured/unshielded polymeric multicore local electricity cable, actual approved ≤1 kV kit, compatible compression connectors and factory-paired casting pouch |
| production_route | Isolate/prove dead and qualify retained ends; cut back/prepare; compress all actual cores; seal mould; mix/pour actual paired polyurethane system; protect/cure; test/close defects; sign acceptance |
| market_state | Completed bounded joint repair service at full required cured-state/electrical handover; existing cable host retained |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One unique complete accepted multicore straight-joint repair |
| How much | 1 item; N/N for actual positive N unique final accepted joint IDs |
| How well | Declared cable/core/CSA/material/insulation/diameter/voltage and site environment; approved compression connector/die/crimp and kit/resin/mould; full required cured-state and applicable electrical results; signed owner acceptance |
| How long or cycle | One actual repair campaign from controlled isolation/access through preparation, joining/casting, cure protection, tests, defects and signed handover; calendar periods and shared-asset life phases indexed separately; no claimed operating life |
| reference_flow_link | `accepted_joint` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fully cured accepted local LV multicore compression resin-cast straight-joint repair service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | Joint/site ID; local network function; cable/conductor/cores/CSA/insulation/diameter/rating; retained-end qualification and slack; kit/pouch/connector/die/lot; actual cure conditions/state; electrical method/threshold/results; isolation authority; accepted IDs; completed period; energisation/backfill authorisations; kit representation; provider/asset/waste boundaries |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_count | accepted_joint | Count | item | Use actual positive N unique final accepted joint IDs and N/N = 1 item. Repeats, all cores, connectors, pouch counts and metres never add reference outputs. |
| native_ledgers | joint_kit; separate_connectors; kit_components; supplementary_materials; count_returns; mass_returns | Actual native Count or Mass | item; kg | Preserve separate SKU count and material/pack net-mass ledgers. Count-to-mass requires actual same-SKU unit net mass and scope; volume-to-mass requires actual measured volume/unit/density/state/temperature/source. Record actual discarded counts; mixed-waste kg cannot solve count balance. Gross means net of tare before outward returns. |
| carrier_units | repair_electricity; job_fuel; job_water; freight; provider_service; shared_assets | Actual Energy; Mass; Mass*distance; Time | kWh; kg; t*km; h | Preserve actual carrier and service units. Explicit traced conversions only. Hours, cycles, callouts and item are distinct; pricing never selects a unit. Whole-fluid balance and substance emissions are nonadditive views. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing exposed qualified isolated/proved-dead cable ends and retained local network; no new cable insert or trench needed; actual slack/compatibility and controlled work access |
| starting_condition_role | Retained host interface with incremental repair burdens and removed materials explicitly attributed |
| product_classification_scope | Narrower repair-service subset of CPC3.0 54252; classification is context, not an instruction to duplicate PCRs |
| recursive_input_rule | Purchased independently completed repair service within the same category carries its upstream scope once; internal repeated attempts are events in this job, not recursive purchases or extra accepted outputs |
| upstream_dataset_requirement | Actual compatible kit OR disaggregated component datasets; real separately supplied consumables, utilities, transport/provider and complete-life shared assets with exact declared coverage and exclusions |
| disclosure | Existing cable condition and qualified interfaces; physical route and full cured-state gate; all actual events and periods; rejected attempts; gross/consumed-only choice; stocks/tare/returns; one kit representation; provider/direct/asset scopes; actual waste/release fate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | joint_repair | Keep one integrated responsibility from authorised isolation/access to signed accepted fully cured joint. Retained cable ends, new compatible compression connectors and actual mould/resin protection have distinct component roles; stripping, mixing, casting, waiting and testing do not create independent manufacturing nodes. Actual current approved instructions govern. | 3m-90na-issue3 |
| boundary_gate | accepted_joint | Document preparation, connector/die/crimp compliance, seals, actual lot/pouch mixing and fill, temperature/moisture/cure conditions and full required cured-state criterion. Actual continuity/protective-conductor, insulation and other owner-required tests pass and defects close before acceptance. Catalogue type-test values are not field test defaults. Earlier product-authorised energisation is outside this fully cured handover subset, not universally prohibited. | 3m-90na-issue3 |
| boundary_kit | joint_kit; separate_connectors; kit_components; supplementary_materials | Choose complete-kit upstream once or actual disaggregated external components with all bundled overlaps excluded. Keep physical chamber/net-pack ledgers in either mode. Existing cable manufacture and avoided cable/outage/loss credits are excluded; actual preparation/protection/test/cleanup materials and provider-paid resources remain included. |  |
| boundary_fates | joint_repair | Include job-caused removal, failed crimp/fill/cure/retest, retained or wasted resin/packaging, actual spill recovery and waste handling. Installed/retained material destinations exclude separately logged waste/releases; intermediate dosed quantity is not another final outlet. No household-waste assumption or certification-based zero emission. | 3m-90na-issue3 |
| boundary_periods_assets | shared_assets; provider_service | Index mobilisation, isolation/preparation, joining/casting, cure/protection, acceptance/rework and demobilisation events by actual calendar period. Shared crimpers/dies, meters and temporary plant require all job/node/period consumers and complete manufacture/maintenance/replacement/end-of-life scope; existing host retention does not make the current repair burden-free. Provider, rental, direct operation and asset/spare scopes have one owner each. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Externally supplied resin-system and mould components in component mode (`kit_components`)

Process / prospective direction / type: `joint_repair` / `inputs` / `product`.

Use only the disaggregated upstream mode for individually supplied actual approved paired resin/hardener pouches, moulds, caps and other kit components. Instantiate distinct concrete component exchanges by identity; never add these to a whole-kit purchase. Keep the delivered paired system intact for mixing under its actual instruction, without assigning a recipe or partial-pouch ratio. Net contents, chamber and package subledgers reconcile to resin retained in the accepted joint, closing stock, actual returns, waste and actual releases. Supply attribution includes actual same-scope opening stock plus new net-of-tare receipts minus carried closing stock and its upstream burden; actual return treatment follows the declared inventory view.

- Collection subject: Externally supplied resin-system and mould components in component mode
- Flow property / unit: Mass / kg
- Amount rule: Actual matched component net kg stock-adjusted job-attributable supply per accepted N, using cp_materials and the declared return view.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `3m-90na-issue3`; `3m-resins-page`

Range evidence need: Actual net component/pack evidence and observed consumption are needed; the 2012 Resin470 numbers cannot set 470W composition, density, pot life, cure time or a consumption range.

#### Collection requirement: Actual incremental preparation, protection and test consumables (`supplementary_materials`)

Process / prospective direction / type: `joint_repair` / `inputs` / `product`.

Instantiate each actual separately supplied tape, abrasive, cleaner, wipe, absorber, glove, containment sheet or test consumable by composition and function. Include provider-paid real consumption and cleanup/rework. Exclude items inside the chosen kit dataset; absence needs actual records rather than compulsory hypothetical supplies. Water is separately owned. Used or dosed mass is an intermediate activity, not an additive final material destination. Supply attribution includes actual same-scope opening stock plus new net-of-tare receipts minus carried closing stock and its upstream burden; actual return treatment follows the declared inventory view.

- Collection subject: Actual incremental preparation, protection and test consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual separately supplied material net kg stock-adjusted job-attributable supply per accepted N, using cp_materials and the declared return view.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Job-specific actual products, net/tare measurements, compatibility and independent comparable-use evidence are required; unknown use is not zero.

#### Collection requirement: Actual fuel supplied for direct repair plant operation (`job_fuel`)

Process / prospective direction / type: `joint_repair` / `inputs` / `product`.

Instantiate each actual fuel identity for owned direct plant and site vehicles inside the declared job boundary. Use a gross-input ledger net of tare before return netting with separately logged actual final nonburned outlets. Burned fuel determines operation emissions; purchase amount is not automatically burned fuel. Omit this direct coverage when a genuine provider exchange already covers it. Supply attribution includes actual same-scope opening stock plus new net-of-tare receipts minus carried closing stock and its upstream burden; actual return treatment follows the declared inventory view.

- Collection subject: Actual fuel supplied for direct repair plant operation
- Flow property / unit: Mass / kg
- Amount rule: Actual stock-adjusted job-attributable fuel net kg supply per accepted N, using cp_fuel and the declared return view.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`

Range evidence need: Actual fuel identity, weighed net receipts or traceable volume/density/state/temperature, stocks and equipment duty are needed; no generic fuel rate.

#### Collection requirement: Actual purchased transport of repair materials and wastes (`freight`)

Process / prospective direction / type: `joint_repair` / `inputs` / `product`.

Use only a purchased service with compatible tonne-kilometre reference; record actual payload, legs, empty-return treatment, packaging and scope. For direct vehicle operation instead record its actual fuel, electricity, assets and related resources, excluding overlapping purchased freight. Passenger or callout hours cannot be relabelled tonne-kilometres.

- Collection subject: Actual purchased transport of repair materials and wastes
- Flow property / unit: Mass*distance / t*km
- Amount rule: Actual compatible purchased carrier t*km attributed per accepted N, using cp_freight.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_freight`

Range evidence need: Actual freight activity and carrier dataset scope are needed; no assumed distance, payload or return factor.

#### Collection requirement: Actual bounded purchased repair support service measured in hours (`provider_service`)

Process / prospective direction / type: `joint_repair` / `inputs` / `product`.

Instantiate only genuine separately purchased support with an actual time reference and completed resource/result scope, such as an approved isolation or electrical testing provider when applicable. Verify whether personnel, travel, tools, electricity, consumables and waste management are included. A price or callout alone does not establish hours. If the actual service uses another property/unit, resolve and declare that actual concrete exchange rather than convert it to this time card; any uncovered resources remain owned by their physical cards.

- Collection subject: Actual bounded purchased repair support service measured in hours
- Flow property / unit: Time / h
- Amount rule: Actual compatible completed purchased support hours attributed per accepted N, using cp_provider.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_provider`

Range evidence need: Actual contract, time ledger, result and included/excluded resource scope are needed; generic hourly labour is not evidence of a completed tested joint.

#### Collection requirement: Attributed complete-life service of shared repair tools and temporary plant (`shared_assets`)

Process / prospective direction / type: `joint_repair` / `inputs` / `product`.

Record actual compatible measured use hours for reusable crimpers/dies, test instruments, barriers, temporary protection and plant when hours are the causal driver. Enumerate every consuming job/node/period. Supply manufacture, maintenance, replacement and end-of-life scope for each asset over completed observed life or observed history plus justified remaining service, replacement/termination and disposal scenario. Another driver requires its actual property/unit and evidence; this card does not convert cycles to hours. Exclude direct operation and any tools/spares already inside provider/rental coverage.

- Collection subject: Attributed complete-life service of shared repair tools and temporary plant
- Flow property / unit: Time / h
- Amount rule: Actual compatible causal asset service hours attributed per accepted N with complete-life scope, using cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: Actual full-life burden, complete consumer denominator, remaining-life evidence and uncertainty/sensitivity/update plan are required; missing scope or denominator blocks the final dataset.

#### Collection requirement: Actual reusable kit or connector items returned outside the repair boundary (`count_returns`)

Process / prospective direction / type: `joint_repair` / `outputs` / `product`.

Record real outward returned unused kit/connector SKUs matching the native count receipts, with receiver, state and custody. Internal issue or closing stock is not a return exchange. By identical SKU, opening attributable count plus external received count reconciles to disjoint final_used_SKU_count, discarded_count, outward_return_count and closing_carried_count. Used/dosed activity is not another final outlet. Opened kits require a documented kit-to-component transformation ledger linked to actual source kit counts and component physical fates; never reconstruct whole-kit equivalents from component mass. Discarded count cannot be inferred from mixed contaminated waste kg. In consumed-only inventory retain the physical custody ledger without a duplicate return exchange or credit.

- Collection subject: Actual reusable kit or connector items returned outside the repair boundary
- Flow property / unit: Count / item
- Amount rule: Actual matched outward returned SKU count attributed per accepted N, using cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Actual count/custody records and state-specific upstream burden treatment are required; no assumed unused-kit return rate.

#### Collection requirement: Actual unused materials returned outside the repair boundary (`mass_returns`)

Process / prospective direction / type: `joint_repair` / `outputs` / `product`.

Record actual compatible net material mass returned externally, including separately purchased material residues where the receiver accepts that state. Keep each identity and packaging tare separate. Matched opening/gross receipt/closing stocks retain upstream burden and reconcile without duplicate external issue or fictitious negative purchase. In complete-kit mode contained component returns are physical custody subledgers and require explicit compatible upstream kit scope treatment rather than duplicate material credits. In consumed-only inventory retain the physical custody ledger without a duplicate return exchange or credit.

- Collection subject: Actual unused materials returned outside the repair boundary
- Flow property / unit: Mass / kg
- Amount rule: Actual outward returned net material kg attributed per accepted N, using cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Actual receiver, identity, state, tare and custody records are needed; no resin recovery credit from a remaining pouch.

#### Collection requirement: Actual nonburned fuel returned outside the job boundary (`fuel_returns`)

Process / prospective direction / type: `joint_repair` / `outputs` / `product`.

Record actual net fuel returned to an external receiver with identity, state and custody. Opening/closing retained fuel is stock, not an outward return. Recovered spill is a return only if actually accepted at that final destination; otherwise assign actual waste or retained stock once. In consumed-only inventory retain the physical custody ledger without a duplicate return exchange or credit.

- Collection subject: Actual nonburned fuel returned outside the job boundary
- Flow property / unit: Mass / kg
- Amount rule: Actual outward returned fuel net kg attributed per accepted N, using cp_fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`

Range evidence need: Actual fuel identity, weighed/validly converted net quantity, receiver and custody evidence are needed; no assumed recovered-fuel credit.

#### Collection requirement: Actual unused water returned outside the job boundary (`water_returns`)

Process / prospective direction / type: `joint_repair` / `outputs` / `product`.

Record actual compatible unused water physically returned to an external receiver with identity and custody. Retained water is closing stock; contaminated water collected for treatment belongs to wastewater rather than a reusable return. In consumed-only inventory retain the physical custody ledger without a duplicate return exchange or credit.

- Collection subject: Actual unused water returned outside the job boundary
- Flow property / unit: Mass / kg
- Amount rule: Actual unused water outward return net kg attributed per accepted N, using cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`

Range evidence need: Actual returned net water kg and receiver/state evidence are required; no assumed return from an unused supply.

#### Collection requirement: Actual removed conductor, insulation and jacket waste (`cable_cuttings`)

Process / prospective direction / type: `joint_repair` / `outputs` / `waste`.

Track cutback and removed old-joint materials from the retained cable as separate material-specific fractions when physically segregated; otherwise record actual mixed composition. These are existing-host removals, not newly purchased cable manufacture. Receiving recovery/disposal routes, transport and treatment scope are explicit without avoided-production credit.

- Collection subject: Actual removed conductor, insulation and jacket waste
- Flow property / unit: Mass / kg
- Amount rule: Actual receiver-specific net removed-material kg attributed per accepted N, using cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: Actual cut lengths/weights, material composition and receiver records are required; do not infer conductor kg from CSA alone or credit scrap value as production.

#### Collection requirement: Actual resin residues, contaminated consumables and package waste (`resin_pack_waste`)

Process / prospective direction / type: `joint_repair` / `outputs` / `waste`.

Instantiate actual cured/uncured resin residues, empty paired pouch/guard bag, discarded mould offcuts, cleaning/absorber wastes and other kit/consumable packaging by state, contamination and receiver. Package tare is not net resin. Keep retained mould and cured resin in the accepted joint out of waste. Reject-fill removal and cure failure waste remain tied to their producing repair attempt. Source household-waste language does not establish the legal or technical destination of this actual waste.

- Collection subject: Actual resin residues, contaminated consumables and package waste
- Flow property / unit: Mass / kg
- Amount rule: Actual separately reconciled residue and package net kg attributed per accepted N, using cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `3m-90na-issue3`

Range evidence need: Actual cured state, component/pack masses, contamination, destination and treatment evidence are required; no universal household-waste route.

#### Collection requirement: Actual nonburned fuel waste transferred to a receiver (`fuel_waste`)

Process / prospective direction / type: `joint_repair` / `outputs` / `waste`.

Record actual nonburned fuel waste net mass and contamination/state accepted by its real receiver, including recovered spills only when this is their final destination. Absorber mass remains separately identified in resin_pack_waste and cannot be counted twice with contained fuel. Whole uncontained fuel is a physical fate audit; only actual released species/media enter elementary exchanges.

- Collection subject: Actual nonburned fuel waste transferred to a receiver
- Flow property / unit: Mass / kg
- Amount rule: Actual nonburned fuel waste net kg attributed per accepted N, using cp_fuel.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`

Range evidence need: Actual net fuel fraction, contamination, receiver/treatment and spill fate evidence are needed; no universal whole-oil elementary identity.

#### Collection requirement: Actual substance-specific routine and incident releases (`actual_releases`)

Process / prospective direction / type: `joint_repair` / `outputs` / `elementary`.

Instantiate actual substance/species and receiving air, water or soil compartment, with particle size where relevant, for direct operation and actual cleaners/resin/handling incidents. Use measured results or valid composition, fate and factor calculations with applicability evidence. Routine fuel releases and incident releases have distinct event owners. Do not report whole spilled resin/fuel mixtures as generic elementary flows or use balance residuals as emissions. Whole-fluid and species views are nonadditive. Low VOC, room-temperature cure, REACH compliance or an SDS composition is neither an emission factor nor proof of zero emissions.

- Collection subject: Actual substance-specific routine and incident releases
- Flow property / unit: Mass / kg
- Amount rule: Actual supported species-and-medium kg attributed per accepted N, using cp_releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`
- Sources: `3m-90na-issue3`; `3m-resins-page`

Range evidence need: Actual species/media, measured releases or valid formulation/fate/factor and uncertainty evidence are required; unidentified mixtures and generic VOC/NOx matches are unresolved.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| joint_repair | Integrated compression joining, resin casting and accepted repair | required | Every in-scope repair | Integrated repair assembly and protection with owner handover; finite paired-pouch mixing batches and actual joint attempts indexed inside the job | 1 item accepted joint repair |

Production is discrete job/attempt and finite manufacturer-paired pouch batches. Link kit lot, opening/mixing/fill/cure times, cleaning/changeover, all actual cores and tests to the joint/attempt ID and calendar period. Capture shared site setup once over actual accepted N using causal event drivers. A failed crimp, voided fill, cure defect or electrical failure loops back to the appropriate preparation/joining/casting/test step of joint_repair with all new resources retained. Removed material takes the actual return/waste/release path; an unresolved or abandoned joint has no accepted output. No independent cable/resin manufacture, test-only or cure-wait node is implied.

Empty flow groups mean no mandatory exchange is prescribed; actual applicable exchanges must be instantiated from their real identity, property/unit and evidence. An unknown resource or fate is a data gap, never a zero. Conditional semantic families may require several separately resolved exchanges at dataset production.

### Process: Integrated compression joining, resin casting and accepted repair (`joint_repair`)

#### Inputs

##### Product flows

###### Actual complete approved resin-cast straight-joint kit (`joint_kit`)

Only complete-kit upstream mode uses this input. Declare the actual SKU, delivered components and excluded connectors. The paired polyurethane resin/hardener pouch, mould, cap, tape, abrasive and gloves inside that kit remain physical subledgers rather than second purchased exchanges. Connector qualification and each actual included component must be evidenced. Supply attribution includes actual same-scope opening stock plus new net-of-tare receipts minus carried closing stock and its upstream burden; actual return treatment follows the declared inventory view.

- Selected flow: Actual complete approved resin-cast straight-joint kit
- Flow property / unit: Count / item
- Amount rule: Actual native SKU stock-adjusted job-attributable kit supply per accepted N, using cp_materials and the declared return view.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `3m-90na-issue3`

Range evidence need: Actual compatible kit specification, approved cable dimensions, receipts, net package contents and independent representative kit-use records are needed; source selection tables are compatibility envelopes, not universal consumption.

###### Separately supplied approved compression conductor connectors (`separate_connectors`)

Record each actual connector SKU and conductor compatibility, CSA, core identity including protective conductor where present, die and crimp criteria. This input covers only connectors excluded from the kit dataset or supplied separately in component mode; any connector already inside a chosen kit dataset cannot be purchased twice. Failed connectors remain consumed and traceable. Supply attribution includes actual same-scope opening stock plus new net-of-tare receipts minus carried closing stock and its upstream burden; actual return treatment follows the declared inventory view.

- Selected flow: Separately supplied approved compression conductor connectors
- Flow property / unit: Count / item
- Amount rule: Actual native SKU stock-adjusted job-attributable connector supply per accepted N, using cp_materials and the declared return view.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `3m-90na-issue3`

Range evidence need: Actual connector approvals, SKU counts and observed accepted/failed uses across comparable joints are required; no one-connector-per-joint or universal crimp count.

###### Actual electricity supplied to the repair job (`repair_electricity`)

Meter actual crimping, testing, charging, lighting, cure protection and other electrically powered job support where used, including repeats. A manual tool or ambient cure does not establish zero job electricity. Keep grid, generator and provider electricity boundaries distinct; battery charging losses belong once at the observed supply boundary.

- Selected flow: Actual electricity supplied to the repair job
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable metered supply kWh per accepted N, using cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

Range evidence need: Actual meter/charging records and representative job duty are required; no default tool power-times-hours or cure-energy assumption.

###### Actual water supplied for preparation, cleanup or test support (`job_water`)

Record real water receipts and consumption at this job, including rinsing, containment and test support when approved and actually used. Distinguish incorporated/retained water, closing stock, true return, collected wastewater and verified evaporation or release; neither wet waste total nor a resin-casting route supplies water quantity. Supply attribution includes actual same-scope opening stock plus new net-of-tare receipts minus carried closing stock and its upstream burden; actual return treatment follows the declared inventory view.

- Selected flow: Actual water supplied for preparation, cleanup or test support
- Flow property / unit: Mass / kg
- Amount rule: Actual stock-adjusted job-attributable water net kg supply per accepted N, using cp_water and the declared return view.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`

Range evidence need: Measured actual use and fate records are needed; no mandatory water washing or unsupported volume-to-mass conversion.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fully cured accepted local LV multicore compression resin-cast straight-joint repair service (`accepted_joint`)

One item is one uniquely identified complete multicore straight joint after the actual required full cured-state, electrical and signed repair acceptance gate. N is the positive count of unique final accepted joint IDs; the reference is N/N = 1 item. All cores/connectors, pouches, crimps, attempts, retests and incomplete or rejected joints are excluded from N. Include their attributed burdens. Count does not establish equal cable size, service life or electrical performance across configurations.

- Selected flow: Fully cured accepted local LV multicore compression resin-cast straight-joint repair service
- Flow property / unit: Count / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `3m-90na-issue3`

Range evidence need: This is an exact normalization definition, not an empirical yield range. Actual accepted IDs and gate evidence are mandatory; representative configurations and observed rework are needed for comparative datasets.

##### Waste flows

###### Actual collected wastewater or recovered liquid waste (`wastewater`)

Record only real collected liquid crossing to a receiver, retaining cleaner/resin contamination and treatment identity. Recovered spills use their actual final return, waste or retained-stock destination once; total spill volume is an audit event, not an additional output. Uncontained fluid belongs to physical fate reconciliation; elementary substance quantities are a separate nonadditive view.

- Selected flow: Actual collected wastewater or recovered liquid waste
- Flow property / unit: Mass / kg
- Amount rule: Actual collected liquid waste net kg attributed per accepted N, using cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`

Range evidence need: Measured quantity, composition and receiver evidence are required; zero requires documented actual absence, not room-temperature cure.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_joint | joint_repair | No intended co-product is created. Attribute all actual attempts, cutback, mixing/pour cleanup, protection and tests to the actual positive final accepted N in the bounded comparable campaign. Discarded or abandoned jobs retain burdens; if N is zero the campaign cannot supply this accepted-reference dataset. Scrap sale is not a repair co-product or avoided-production credit. |  |
| allocation_events | joint_repair | Assign each finite pouch batch, changeover, isolation/setup and cleanup event a unique owner and period. Direct joint events use their actual IDs; shared events use recorded causal use shares across every consuming joint, including failed attempts. Report uncertainty and rejected paths; never count the same event both directly and in a shared pool. |  |
| allocation_assets | shared_assets | For each actual asset use a compatible causal measured driver across all jobs/nodes/periods. Attribute full-life manufacture, maintenance, replacement and disposal burden by the target driver divided by the complete full-life driver. Use completed observed life or observed history plus justified remaining-service/replacement/termination/EOL scenario, source, uncertainty, sensitivity and update trigger. Missing denominator or coverage blocks final dataset. Period totals reconcile once; do not allocate full manufacture anew every reporting year. |  |
| allocation_overlap | joint_repair | Select gross-with-outlet or consumed-only inventory treatment explicitly and consistently. Gross input is net of tare before return netting; stocks preserve upstream burden. A consumed-only view cannot also claim the same return output credit. Count and mass physical subledgers, whole-fluid and species views, component and kit scopes, freight and direct vehicles, provider and physical resources, asset/spares/rental scopes are mutually reconciled rather than added twice. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | joint_repair | Unique complete accepted joint | foreground_record | joint_id; attempt_id; period_id; cable_id; network_function; conductor_material; cores; CSA_mm2; cable_diameter_mm; insulation; rated_voltage_V; retained_end_slack; isolation_authority; prove_dead_result; connector_SKU; die_id; crimp_pattern; kit_SKU; pouch_lot; mixing_time; fill_time; cure_conditions; full_cured_state_criterion; cure_result; test_method; test_threshold; calibration; test_results; defect_closure; acceptance_time; acceptance_signature; accepted_joint_count_N; energisation_authority; backfill_authority | Verify owner isolation/compatibility and actual delivered instructions. Link every core and attempt to one joint; retain actual required cured-state and electrical results and signed final accepted IDs. N is positive unique accepted IDs; no attempt is counted twice. | item; recorded numeric units and categorical attributes | Each actual receipt, issue, attempt, event and acceptance; reconcile campaign close | Entire bounded campaign and actual linked asset-life/service periods | Declared repair site and actual supplier/provider/receiver scopes | per reference flow | Signed tests, cure evidence, actual kit/connector instructions and calibration; no catalogue field-test defaults |
| cp_materials | joint_repair | Actual kit/component/consumable receipts, states and returns | foreground_record | joint_id; attempt_id; batch_id; period_id; material_id; SKU; kit_mode; included_scope; excluded_scope; opening_attributable_count; gross_received_count; final_used_SKU_count; discarded_count; outward_return_count; closing_carried_count; opening_attributable_net_kg; gross_received_net_kg; package_tare_kg; net_chamber_A_kg; net_chamber_B_kg; used_intermediate_kg; installed_retained_net_kg; discarded_net_kg; outward_return_net_kg; closing_carried_net_kg; actual_released_net_kg; unit_net_mass_kg; quantity_volume; volume_unit; density_kg_per_volume_unit; density_state; density_temperature; density_source; receiver; custody; upstream_burden_carry; event_share; accepted_joint_count_N; attribution_scope; inventory_view; transformation_id; opened_kit_count_audit; transformation_component_ids; component_net_kg; transformation_component_fates | Record actual matched SKU native counts and weighed net mass with package tare separate. Gross input is before returns. Reconcile opening plus external gross receipts to closing carried stock, disjoint final used-SKU count, actual discarded count, outward returns and appropriate final mass destinations. Do not add internal issues or intermediate dosing as external exchanges; pair whole-kit/component scopes and retain their physical subledgers. Count-mass or volume-mass conversions require actual matching evidence. final_used_SKU_count excludes separately logged discarded_count; a failed used kit/connector has one declared native count final fate, not two. Job-attributable supply is same-scope opening attributable stock plus external net-of-tare gross receipts minus closing carried stock, with upstream burden carry. Gross-with-outlets retains actual outward exits; consumed-only also excludes corresponding actual returned supply once and has no duplicate return credit. Native final_used_SKU_count and discarded_count are disjoint final SKU states, not dosed/consumed activity. Count discarded only for an actual whole SKU assigned that final state; separate packaging/resin mass fates never fabricate whole-kit discarded count. Internal dosing is nonadditive. Opened-kit count is an audit activity linked by transformation_id to actual original SKU counts, component identities/net mass and final fates. Component physical records never imply invented whole-kit count equivalence; final_used_SKU_count, discarded_count, outward_return_count and closing_carried_count are disjoint final source-SKU states. | item; kg; declared actual volume unit | Each actual receipt, issue, attempt, event and acceptance; reconcile campaign close | Entire bounded campaign and actual linked asset-life/service periods | Declared repair site and actual supplier/provider/receiver scopes | per reference flow | Calibrated scale, receipts/labels, same-SKU unit mass, lot/chamber/net-pack evidence and return custody. Installed/retained excludes separate waste/releases. Retained spill is closing stock; recovered spill takes its final fate once |
| cp_energy | joint_repair | Actual electricity and compatible use shares | foreground_record | joint_id; attempt_id; period_id; equipment_id; supply_boundary; meter_start_kWh; meter_end_kWh; charging_loss_kWh; included_scope; excluded_scope; event_share; accepted_joint_count_N | Meter actual supply; difference readings with traceable charging-loss ownership. Reconcile direct and shared duty and exclude provider/generator overlap before attribution. | kWh | Each actual receipt, issue, attempt, event and acceptance; reconcile campaign close | Entire bounded campaign and actual linked asset-life/service periods | Declared repair site and actual supplier/provider/receiver scopes | per reference flow | Meter calibration and all consumer shares sum to the observed event scope; documented absence for unused electricity |
| cp_fuel | joint_repair | Fuel gross input, stocks, burned quantity and fates | foreground_record | joint_id; attempt_id; period_id; equipment_id; fuel_identity; opening_attributable_net_kg; gross_received_net_kg; closing_carried_net_kg; outward_return_net_kg; nonburned_waste_net_kg; nonburned_release_net_kg; other_nonburned_final_net_kg; total_spill_audit_kg; recovered_spill_final_destination; retained_spill_in_closing_kg; quantity_volume; volume_unit; density_kg_per_volume_unit; density_state; density_temperature; density_source; package_tare_kg; included_scope; event_share; accepted_joint_count_N; receiver; custody; treatment_scope; contamination; absorber_fuel_fraction_kg; attribution_scope; inventory_view; upstream_burden_carry | Weigh net receipts and stocks or use actual traced conversion evidence. Burned kg equals opening plus gross receipts minus closing and mutually exclusive nonburned final outlets. Total spills are audit-only; recovered spills enter their final fate once and retained spills are already closing stock. Link actual burned fuel and device to species calculations, without treating whole fuel loss as generic elementary emission. Job-attributable supply is same-scope opening attributable stock plus external net-of-tare gross receipts minus closing carried stock, with upstream burden carry. Gross-with-outlets retains actual outward exits; consumed-only also excludes corresponding actual returned supply once and has no duplicate return credit. | kg; actual volume unit when evidenced | Each actual receipt, issue, attempt, event and acceptance; reconcile campaign close | Entire bounded campaign and actual linked asset-life/service periods | Declared repair site and actual supplier/provider/receiver scopes | per reference flow | Receipt/stock/fate reconciliation with same period/boundary; direct plant scope and conversion evidence |
| cp_water | joint_repair | Water and recovered liquid fates | foreground_record | joint_id; attempt_id; period_id; water_identity; opening_attributable_net_kg; gross_received_net_kg; closing_carried_net_kg; installed_retained_net_kg; outward_return_net_kg; collected_liquid_waste_net_kg; actual_evaporation_net_kg; uncontained_liquid_net_kg; composition; receiver; treatment_scope; spill_event_id; recovered_spill_destination; event_share; accepted_joint_count_N; custody; attribution_scope; inventory_view; upstream_burden_carry | Measure actual net receipts and final liquid fates; maintain whole-fluid balance and separately attributed substance releases as nonadditive views. Track contaminated liquid receiver and avoid adding recovered liquid both as a spill and as waste. Job-attributable supply is same-scope opening attributable stock plus external net-of-tare gross receipts minus closing carried stock, with upstream burden carry. Gross-with-outlets retains actual outward exits; consumed-only also excludes corresponding actual returned supply once and has no duplicate return credit. | kg | Each actual receipt, issue, attempt, event and acceptance; reconcile campaign close | Entire bounded campaign and actual linked asset-life/service periods | Declared repair site and actual supplier/provider/receiver scopes | per reference flow | Water meter/scale and receiver record; actual absence statement where unused; unresolved fate retained |
| cp_freight | joint_repair | Actual purchased tonne-kilometre service | foreground_record | joint_id; period_id; carrier; leg_id; payload_net_t; distance_km; empty_return_scope; included_scope; excluded_scope; carrier_service_tkm; event_share; accepted_joint_count_N | Use measured payload and actual leg route or verified compatible carrier service activity. Compare payload times distance with declared carrier treatment. Reconcile all consumers and direct vehicle scope. | t*km; t; km | Each actual receipt, issue, attempt, event and acceptance; reconcile campaign close | Entire bounded campaign and actual linked asset-life/service periods | Declared repair site and actual supplier/provider/receiver scopes | per reference flow | Waybills, leg records and transport dataset reference/scope; no double ownership |
| cp_provider | joint_repair | Completed actual time-reference support | foreground_record | joint_id; period_id; provider_id; service_identity; actual_reference_property; actual_reference_unit; completed_hours; time_records; completed_results; included_scope; excluded_scope; event_share; accepted_joint_count_N | Verify true purchased service identity and hour reference, actual hours and completed support results. Map included/excluded physical resources and asset/travel/waste scope; retain uncovered resources on physical cards. | h | Each actual receipt, issue, attempt, event and acceptance; reconcile campaign close | Entire bounded campaign and actual linked asset-life/service periods | Declared repair site and actual supplier/provider/receiver scopes | per reference flow | Contract, timesheets and isolation/test results; mismatch in actual service unit requires actual matching exchange |
| cp_assets | joint_repair | Complete-life shared asset and all consumers | foreground_record | asset_id; asset_identity; lifetime_phase; period_id; consuming_job_id; consuming_node_id; measured_driver_unit; target_driver_h; complete_life_driver_h; manufacture_scope; maintenance_scope; replacement_scope; EOL_scope; direct_operation_exclusions; provider_rental_exclusions; observed_history; remaining_service_evidence; replacement_scenario; termination_scenario; EOL_scenario; burden_source; burden_uncertainty; sensitivity; update_trigger; accepted_joint_count_N | Compile all jobs/nodes/periods and causal compatible hour use, full-life component burden and complete denominator. Completed observed life or observed history plus justified remaining-life scenarios must cover manufacture through EOL. Attribute once, with direct operation/provider/rental/spare exclusions. | h; actual upstream burden units | Each actual receipt, issue, attempt, event and acceptance; reconcile campaign close | Entire bounded campaign and actual linked asset-life/service periods | Declared repair site and actual supplier/provider/receiver scopes | per reference flow | Asset records, full consumer ledger, scenario sources and uncertainty/sensitivity; missing coverage or denominator blocks final dataset |
| cp_waste | joint_repair | Actual removed materials, residues and package fates | foreground_record | joint_id; attempt_id; batch_id; period_id; waste_identity; origin_material; cure_state; contamination; fraction_net_kg; package_tare_kg; discarded_SKU_count; receiver; custody; transport_scope; treatment_scope; event_share; accepted_joint_count_N | Weigh actual segregated fractions or traceable mixed composition, separating host cuttings, cured/uncured resin, packaging and contaminated consumables. Pair discarded counts with materials ledger. Link each failed attempt to actual receiver and avoid duplicate packaging tare or retained mould/resin. | kg; item for native discarded-count audit | Each actual receipt, issue, attempt, event and acceptance; reconcile campaign close | Entire bounded campaign and actual linked asset-life/service periods | Declared repair site and actual supplier/provider/receiver scopes | per reference flow | Weigh tickets, actual composition/cure-state, receiver acceptance and legal route; no universal household-waste assumption |
| cp_releases | joint_repair | Actual species/media, routine and incident emissions | foreground_record | joint_id; attempt_id; period_id; event_id; event_owner; routine_or_incident; substance_species; particle_size; receiving_medium; measured_species_kg; measurement_method; actual_activity; activity_unit; factor_kg_per_activity_unit; factor_source; factor_applicability; formulation_component_kg; component_fraction; fate_fraction; temperature_state; whole_fluid_audit_kg; calculation_basis; uncertainty; event_share; accepted_joint_count_N | Use actual species measurements or valid activity-times-factor or actual component composition-times-fate calculations; keep evidence and units for all operands. Distinguish incident ownership and whole-fluid physical balance from partial-species view. Never calculate release from unexplained balance residual. | kg; actual matching activity units | Each actual receipt, issue, attempt, event and acceptance; reconcile campaign close | Entire bounded campaign and actual linked asset-life/service periods | Declared repair site and actual supplier/provider/receiver scopes | per reference flow | Instrument evidence or current applicable source/fate evidence with uncertainty; SDS content alone is not emission fraction or zero proof |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| material_intake | joint_kit; separate_connectors; kit_components; supplementary_materials | For each actual SKU and one chosen upstream representation, job-attributable supply in its native item or kg = opening attributable stock plus gross external receipts net of tare minus closing carried stock, with matched units, scope and upstream burden carry. In gross-with-outlets mode input per reference = this supply times event_share / accepted_joint_count_N and actual outward exits remain separate. Consumed-only mode additionally excludes the corresponding actual returned supply once before attribution and omits duplicate return output credit. Waste and releases remain burden-bearing fates. Kit component physical subledgers do not imply fabricated whole-kit count equivalence. | cp_materials; gross_received_count; gross_received_net_kg; event_share; accepted_joint_count_N; opening_attributable_count; closing_carried_count; opening_attributable_net_kg; closing_carried_net_kg; inventory_view; outward_return_count; outward_return_net_kg; upstream_burden_carry | Actual SKU input item or kg per reference |  |
| count_return | count_returns | Returned item per reference = outward_return_count times event_share / accepted_joint_count_N. Native count audit by SKU: opening_attributable_count plus gross_received_count equals final_used_SKU_count plus discarded_count plus outward_return_count plus closing_carried_count. No count inferred from waste kg. | cp_materials; opening_attributable_count; gross_received_count; final_used_SKU_count; discarded_count; outward_return_count; closing_carried_count; event_share; accepted_joint_count_N | Actual matched outward return item per reference |  |
| mass_return | mass_returns | Returned kg per reference = outward_return_net_kg times event_share / accepted_joint_count_N. Mass audit by actual material: opening_attributable_net_kg plus gross_received_net_kg equals closing_carried_net_kg plus installed_retained_net_kg plus discarded_net_kg plus outward_return_net_kg plus actual_released_net_kg; destinations mutually exclusive and used_intermediate_kg nonadditive. Kit physical subledgers reconcile without duplicate purchases. | cp_materials; opening_attributable_net_kg; gross_received_net_kg; closing_carried_net_kg; installed_retained_net_kg; discarded_net_kg; outward_return_net_kg; actual_released_net_kg; event_share; accepted_joint_count_N | Actual outward material kg per reference and physical reconciliation |  |
| energy_attribution | repair_electricity | Electricity kWh per reference = actual same-boundary metered kWh plus only additional not-already-metered charging_loss_kWh, attributed by event_share / accepted_joint_count_N. Metered kWh is meter_end_kWh minus meter_start_kWh. | cp_energy; meter_start_kWh; meter_end_kWh; charging_loss_kWh; event_share; accepted_joint_count_N | Attributed supply kWh per reference |  |
| fuel_input | job_fuel | Job-attributable fuel supply kg = opening attributable stock plus gross receipts net of tare minus closing carried stock, with same identity/scope and upstream burden carry. Gross-with-outlets input per reference = this supply times event_share / accepted_joint_count_N, retaining actual outward outlets. Consumed-only input additionally excludes corresponding actual returned fuel once and omits duplicate return credit. Burned kg audit = opening_attributable_net_kg plus gross_received_net_kg minus closing_carried_net_kg minus outward_return_net_kg minus nonburned_waste_net_kg minus nonburned_release_net_kg minus other_nonburned_final_net_kg. Nonburned outlets are mutually exclusive; total_spill_audit_kg is not subtracted again. Recovered spills take final destination once; retained spills already belong to closing. Carry stocks/upstream burdens across the same scope. | cp_fuel; opening_attributable_net_kg; gross_received_net_kg; closing_carried_net_kg; outward_return_net_kg; nonburned_waste_net_kg; nonburned_release_net_kg; other_nonburned_final_net_kg; event_share; accepted_joint_count_N; inventory_view | Gross fuel input kg per reference and actual burned kg audit |  |
| water_input | job_water | Job-attributable water supply kg = opening attributable stock plus gross receipts net of tare minus closing carried stock, with same identity/scope and upstream burden carry. Gross-with-outlets input per reference = this supply times event_share / accepted_joint_count_N with actual outward outlets separate. Consumed-only input additionally excludes corresponding actual returned water once and omits duplicate return credit. Whole-water audit: opening_attributable_net_kg plus gross_received_net_kg equals closing_carried_net_kg plus installed_retained_net_kg plus outward_return_net_kg plus collected_liquid_waste_net_kg plus actual_evaporation_net_kg plus uncontained_liquid_net_kg, using exclusive final fates. Unknown balance is a gap. | cp_water; opening_attributable_net_kg; gross_received_net_kg; closing_carried_net_kg; installed_retained_net_kg; outward_return_net_kg; collected_liquid_waste_net_kg; actual_evaporation_net_kg; uncontained_liquid_net_kg; event_share; accepted_joint_count_N; inventory_view | Gross actual water kg per reference and fate audit |  |
| freight_attribution | freight | Compatible purchased t*km per reference = actual carrier_service_tkm times event_share / accepted_joint_count_N; compare each actual payload_net_t times distance_km with its compatible leg/service treatment, including declared empty-return scope. | cp_freight; carrier_service_tkm; payload_net_t; distance_km; event_share; accepted_joint_count_N | Actual purchased freight t*km per reference |  |
| provider_attribution | provider_service | Compatible completed purchased support h per reference = completed_hours times event_share / accepted_joint_count_N; use only actual matching Time/h service and completed resources/results, with scope exclusions. | cp_provider; completed_hours; event_share; accepted_joint_count_N | Compatible purchased support h per reference |  |
| asset_attribution | shared_assets | Compatible asset service h per reference = target_driver_h / accepted_joint_count_N. Its full-life upstream burden share = target_driver_h / complete_life_driver_h applied to compatible manufacture, maintenance, replacement and EOL burden_source with exclusions. Complete denominator includes all jobs/nodes/periods and justified remaining service; do not add burden again as a second direct exchange. | cp_assets; target_driver_h; complete_life_driver_h; burden_source; accepted_joint_count_N | Actual compatible asset h per reference and disclosed upstream burden share |  |
| waste_attribution | cable_cuttings; resin_pack_waste | Actual fraction kg per reference = fraction_net_kg times event_share / accepted_joint_count_N, separately for actual host cuttings, resin cure-state/contamination and packaging fractions. Packaging tare is a material fraction once, not net resin. Link discarded_SKU_count to native count audit without conversion from mixed kg. | cp_waste; fraction_net_kg; event_share; accepted_joint_count_N | Actual receiver-specific waste kg per reference |  |
| liquid_waste | wastewater | Actual collected liquid kg per reference = collected_liquid_waste_net_kg times event_share / accepted_joint_count_N; match actual identity, contamination, receiver and exclusive final fate without duplicate spill output. | cp_water; collected_liquid_waste_net_kg; event_share; accepted_joint_count_N | Actual collected liquid waste kg per reference |  |
| release_attribution | actual_releases | For each actual substance/species and receiving medium select one supported basis: measured_species_kg, or actual_activity times factor_kg_per_activity_unit with matching activity_unit and applicability, or formulation_component_kg times component_fraction times fate_fraction. Attributed species kg per reference = selected supported species kg times event_share / accepted_joint_count_N. Keep whole_fluid_audit_kg nonadditive, routine/incident ownership distinct and uncertainty explicit; missing factor/fate is not zero. | cp_releases; measured_species_kg; actual_activity; factor_kg_per_activity_unit; formulation_component_kg; component_fraction; fate_fraction; event_share; accepted_joint_count_N | Actual species-and-medium kg per reference |  |
| fuel_return | fuel_returns | Actual returned fuel kg per reference = outward_return_net_kg times event_share / accepted_joint_count_N; closing stock and actual recovered-spill destination remain exclusive. | cp_fuel; outward_return_net_kg; event_share; accepted_joint_count_N | Actual returned fuel kg per reference |  |
| fuel_waste_attribution | fuel_waste | Actual nonburned fuel waste kg per reference = nonburned_waste_net_kg times event_share / accepted_joint_count_N; reconcile final recovered-spill destination and absorber/fuel fraction once. | cp_fuel; nonburned_waste_net_kg; event_share; accepted_joint_count_N | Actual nonburned fuel waste kg per reference |  |
| water_return | water_returns | Actual unused returned water kg per reference = outward_return_net_kg times event_share / accepted_joint_count_N, excluding closing stock and collected contaminated wastewater. | cp_water; outward_return_net_kg; event_share; accepted_joint_count_N | Actual returned water kg per reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_gate | accepted_joint | Actual current owner/kit/connector instructions and cable compatibility control. No universal voltage, time, insulation-resistance, cure or service-life default; full required cured-state/electrical acceptance is evidenced. | Actual delivered instructions, calibration, lot/cure conditions, test and handover records |
| quality_scope | joint_repair | Cover every actual period, attempt, pouch batch, shared event and resource including real provider-paid consumption; trace absence, uncertainty and unresolved gaps. Compare configurations explicitly rather than equating every counted joint. | Complete accepted/rejected ID ledger, dated scope and uncertainty review |
| quality_balances | joint_repair | Reconcile native Count and Mass ledgers, package tare/chambers, actual stock burden carry, exclusive installed/return/waste/release destinations and chosen upstream representation. Unknown is not zero; residual is not emission. | Receipts, stock/scale records, actual discarded counts, receiver/custody and species evidence |
| quality_life | shared_assets; provider_service | Complete all consumers, compatible denominator, manufacture/maintenance/replacement/EOL scope and prospective remaining-life sources/uncertainty/sensitivity/update. Provider actual unit and bounded results/resources are verified. Missing material scope blocks final dataset. | Full-life asset register, scenario records, supplier scope/contracts and service evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_route | joint_repair | Reject incompatible local function, cable/connector/kit, missing isolation authority or exposure/slack and any excluded new-insert/trench/armour/shield/branch/shear-bolt/shrink-only/gel route. Actual approved ≤1 kV rating controls; no live-work permission is implied. | un-cpc3-2025; 3m-90na-issue3 |
| validation_gate | accepted_joint | Require actual preparation/crimp/seal/fill/lot/cure evidence, full required cured-state criterion, applicable calibrated electrical tests, defects closed and signed owner handover. Type-test numbers are not universal field settings. N is positive unique accepted joints only; incomplete/rejected/repeated attempts cannot inflate it. | 3m-90na-issue3 |
| validation_burden | joint_repair | Verify all actual campaign phases/periods and finite pouch batches, rejected states/rework loops, cleanup/changeover and shared-event ownership. Every failed attempt has a linked repair/waste/return/retained/release path and all burdens stay attributed. N=0 cannot yield an accepted-reference dataset. |  |
| validation_balance | joint_repair | Check one upstream kit mode and every bundled exclusion, native count including actual discarded count, net chamber/pack/material stocks and exclusive final fates. Gross net-of-tare input precedes return netting. Consumed-only and gross-with-outlet treatments cannot give duplicate return credit. Verify actual factor/volume conversion evidence; unknown/residual does not become zero or an elementary flow. |  |
| validation_life | shared_assets; provider_service; freight | Require complete-life asset scope and all jobs/nodes/periods with compatible measured denominator and justified remaining-service/replacement/termination/EOL scenario where prospective. Missing denominator/coverage or unresolved service property/unit/results blocks final dataset. Cross-check direct operation, spares, tools, rental/provider and freight for overlaps. |  |
| validation_identity_range | joint_repair | Resolve each actual concrete exchange with correct identity/state/gate/property/unit before final dataset production. Conditional actual identities require foreground evidence. Range evidence needs stay visible until representative independent evidence is supplied; structural check does not establish UUID verification, quantitative plausibility or publication readiness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground completed cable-joint repair service data package with downstream process/lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset after actual identity, quantity, scope and review gaps are resolved |
| allowed_use | Declared compatible existing local LV unarmoured/unshielded multicore compression resin-cast fully cured straight-joint repair under its actual service conditions |
| excluded_use | Unqualified cable sizes/conditions or different gates; new cable/route/trench; operation-life benefits; branch/armour/shield/shear-bolt/shrink-only/gel or building/telecom/HV work |
| required_metadata | All reference qualifiers; actual joint/attempt/batch/period IDs; N; geography/time; gate and testing criteria; current actual instructions; kit mode/scope; native ledgers; provider/transport/asset coverage and destinations |
| required_quality_disclosure | Measured versus calculated quantities; evidence needs/unknowns; rework completeness; physical balances and fate; identity status; full-life denominator/scenario source/uncertainty/sensitivity/update; allocation and representation exclusions |
| update_trigger | Actual kit/resin/connector or cable/route change; acceptance criterion/gate change; significant job/rework/resource change; corrected identities/fates; new asset-life/consumer or provider scope evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version3.0 explanatory notes,30June2025, printed286–287,54252. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Local electricity cable repair classification scope and exclusions; no numerical inventory factor |
| 3m-90na-issue3 | handbook | 3M Scotchcast Resin Kit90-NA-X Series, Inline Joint Kit with Resin470W, Issue3, undated printed3pages. Printed90NA identity differs from92NA URL. https://multimedia.3m.com/mws/media/2536250O/scotchcast-92na-resin-joints-data-sheet.pdf?fn=scotchcast-92na-resin-joints-ds.pdf | Multicore nonshielded polymeric LV kit, compression subset, mould/paired pouch/kit contents; compatibility and current actual instruction need; catalogue tests and waste claims not universal field defaults |
| 3m-resins-page | handbook | 3M UK low-voltage resins and joints page and linked Resin470 product page, accessed16October2026. https://www.3m.co.uk/3M/en_GB/electrical-construction-maintenance-uk/solutions/low-voltage-resins-and-joints/ ; https://www.3m.co.uk/3M/en_GB/p/d/b00042792/ | Polyurethane casting family and product-identity caution:470W link redirects470,2012 linked470 TDS is not transferable470W quantitative evidence;4GS earlier-energisation marketing belongs to another product |
