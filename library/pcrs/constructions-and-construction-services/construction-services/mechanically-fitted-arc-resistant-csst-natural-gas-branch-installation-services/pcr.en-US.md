---
pcr_id: pcr.constructions-and-construction-services.construction-services.mechanically-fitted-arc-resistant-csst-natural-gas-branch-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mechanically fitted arc-resistant CSST natural-gas branch rough-in installation services

## 1. Scope and Applicability

This PCR covers first indoor rough-in installation of one actual designed natural-gas branch using black arc-resistant jacketed CSST and its compatible manufacturer mechanical fittings. It ends at isolated capped, pressure-tested and inspected handover before concealment. The route is routing/cutting/end preparation, mechanical assembly, supports/strike protection, applicable bonding interface, testing, correction/retest and signed transfer. Manufacturer-specific numerical design and test instructions are selected for the actual configuration and jurisdiction, not generalized here. [omegaflex-tracpipe-2026]

Exclude live fuel-gas introduction, purging, appliance connection/combustion/commissioning, line-pressure regulator commissioning, external distribution, underground/direct-burial work, yellow-jacket intermix, LPG, medical gases and heating/ventilation equipment installation. The accepted starting host and authorized design are prerequisites; new branch-attributable alterations, protection and bonding work cannot disappear behind those prerequisites. UN CPC 54640 covers gas-conducting installations; the proposed category is narrower and does not claim whole-leaf coverage. [un-cpc3-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.mechanically-fitted-arc-resistant-csst-natural-gas-branch-installation-services |
| classification_refs | cpc:3.0:54640; proposed narrower boundary |
| covered_products | First indoor mechanically fitted black arc-resistant CSST natural-gas branch rough-in installation, isolated and capped at handover |
| excluded_products | Live gas/purge/appliance commissioning; external/underground network; LPG/medical gas; yellow-jacket mixed systems; heating or ventilation installation; regulator commissioning |
| representative_product | One declared complete branch from specified upstream isolation boundary to specified capped outlet, using actual TracPipe AP or equivalent evidenced compatible AR system |
| production_route | Accepted design/host; route/cut; mechanically fit; support/protect; complete applicable bonding interface; isolate/cap; pressure-test and inspect; correct/retest; hand over |
| market_state | Signed accepted rough-in installation service before concealment; no operating appliance or ready-to-use gas service claim |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted isolated pressure-tested indoor natural-gas CSST branch rough-in installation service |
| How much | 1 complete declared circuit; 1 item |
| How well | Actual approved design/gas/pressure/capacity; compatible system and fitting revision; undamaged supported protected installation; verified applicable bonding; accepted authorized pressure test/rough-in inspection with outlets capped and fuel gas absent |
| How long or cycle | One initial installation and all corrections/retests through signed rough-in handover. Reusable provision is separately linked to its manufacture/provision, use/upkeep, replacement and termination periods; no building operating lifetime or later gas commissioning |
| reference_flow_link | `accepted_branch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted isolated pressure-tested indoor natural-gas CSST branch rough-in installation service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | branch id/endpoints; actual indoor route/segment lengths/diameters; manufacturer/system/jacket/fitting revisions; design gas/pressure/capacity; applicable jurisdiction and approved design; support/protection/bonding scope; host alterations; installer qualifications; test medium/protocol/conditions/results; inspection and handover date; custody and remaining commissioning owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Only one complete uniquely identified accepted branch is 1 item. Metres, fittings, outlets and repeated tests are configuration/activity evidence, not additional reference outputs; do not compare different branch configurations as equivalent without disclosure. |
| composite_mass | jacketed_csst | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep jacketed finished composite mass distinct from bare steel and packaging. Actual diameter-specific mass per length or calibrated composite weighing is required; length alone does not establish kg. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Approved actual indoor route/design and accepted host; upstream source isolated from fuel gas, downstream appliances absent/disconnected; supplied compatible system components at declared supply gates |
| starting_condition_role | Host/design/isolation prerequisites with documented ownership; unchanged building stock excluded, new installation-attributable modification included |
| product_classification_scope | Gas-conducting branch rough-in service within CPC54640; excludes heating/ventilation and later operational work |
| recursive_input_rule | Do not recurse into the same installation service for internal branch handoffs or corrections. Purchased subcontract work has declared scope and one upstream burden owner. |
| upstream_dataset_requirement | Actual finished jacketed CSST, fittings, support/protection/bonding and consumables with supplier manufacturing/packaging coverage; actual tool/test/transport provision and electricity; unresolved identities resolved before final exchange production |
| disclosure | Actual design, host, route, supplied states, material custody, test and bonding scope, provider exclusions, shared assets/periods and remaining commissioning responsibilities |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| rough_in_gate | all processes | End only after authorized accessible rough-in inspection and pressure test, applicable verified bonding and protection, closed defects, capped isolation and signed custody. No fuel gas, purge or appliance connection is credited. | omegaflex-tracpipe-2026 |
| complete_provision | all processes | Include actual component manufacture/supply, embedded cutting/fitting losses, protection/bonding work, correction/retest, consumables, water, energy, logistics and bounded reusable asset production/maintenance/termination coverage once. Record provider-included packaging/services and uncovered shares. | omegaflex-tracpipe-2026 |
| shared_scope | all processes | Link shared access and tools to branch_assembly and rough_in_test consumers and service periods; gauges/compressor may also serve later jobs. Document complete service/capital-cycle coverage and removal owner. Do not invent lifetime operation or reuse counts. | omegaflex-tracpipe-2026 |
| medium_convention | rough_in_test | Actual authorized medium and supply convention are mandatory: ambient_air_intake is a conditional elementary input for onsite compression; test_medium is conditional external product supply. Never count the same medium under both conventions. Pair either input with actual release, retained/recovered stock, waste or real product-return custody; compressor provision/energy counted once. | omegaflex-tracpipe-2026 |
| asset_periods | assembly_provision; test_provision | Separately index actual asset manufacture/provision, job use/upkeep, later service jobs/periods, replacement and termination/removal. Link branch_assembly and rough_in_test activity and the accepted output to its initial job period. Declare each phase owner and allocated burden; unknown replacement/terminal coverage blocks final dataset completion. | omegaflex-tracpipe-2026 |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual manufacturer-compatible mechanical fittings and end caps (`compatible_fittings`)

Process / prospective direction / type: `branch_assembly` / `inputs` / `product`.

Declare zero, one or multiple actual fittings, transitions, termination mounts and caps individually by part number and connection role. Temporary debris closures and pressure-test caps have explicit provision and removal ownership; do not charge a reusable cap as permanently consumed.

- Collection subject: Actual manufacturer-compatible mechanical fittings and end caps
- Flow property / unit: Mass / kg
- Amount rule: Actual issued mass of each compatible component, with supplier mass or calibrated weighing and separately recorded reuse or return.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Require actual bill of materials, fitting family, mass per part and returned quantities; no universal fitting count, mass or torque is an inventory default.

#### Collection requirement: Actual installed supports and strike-protection components (`support_protection`)

Process / prospective direction / type: `branch_assembly` / `inputs` / `product`.

Record size-compatible supports, listed strike plates, sleeves or conduit where the actual route and approved instructions require them. Structural members providing support are disclosed as host conditions; new branch-attributable alterations and protection are included.

- Collection subject: Actual installed supports and strike-protection components
- Flow property / unit: Mass / kg
- Amount rule: Actual material mass by component and route location, excluding unchanged host building stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Actual route geometry, threatened locations, support type and applicable fitting/system instructions establish quantities; no generic spacing or protection length is imposed.

#### Collection requirement: Actual branch-attributable bonding components (`bonding_materials`)

Process / prospective direction / type: `branch_assembly` / `inputs` / `product`.

Conditional actual clamps, conductors and connectors required at the branch bonding interface. A qualified assessment records existing verified interface coverage or new work and provider ownership. Arc-resistant jacketing is not a blanket exemption from bonding.

- Collection subject: Actual branch-attributable bonding components
- Flow property / unit: Mass / kg
- Amount rule: Record actual new branch-attributable component masses; substantiate zero new material with the accepted existing interface and applicable requirements.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Obtain actual jurisdiction/system requirements, qualified bonding record, conductor and clamp identities/lengths/masses; no universal conductor quantity or exemption.

#### Collection requirement: Actual pipe-thread sealant, repair and installation consumables (`assembly_consumables`)

Process / prospective direction / type: `branch_assembly` / `inputs` / `product`.

Conditional actual pipe-thread sealant, approved jacket repair tape, cutter blade/wheel wear, cleaning and protective consumables are separated by composition and purpose. Follow the chosen fitting instructions: sealant for a pipe-thread connection does not imply sealant on its CSST sealing seat. Gross issue is the input convention for consumables also: a real usable return is recorded once in usable_returns, and retained stock is only the carried-forward balance.

- Collection subject: Actual pipe-thread sealant, repair and installation consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual gross issued mass by material and task, including corrections; keep consumed/worn amounts, outward usable returns and retained stock as separate dispositions, with reusable tool provision allocated by documented use.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Collect exact fitting-specific procedure, formulation receipts/use or measured wear, actual repair incidence and retained stock; no assumed sealant dose or loss fraction.

#### Collection requirement: Bounded assembly tools, access and logistics provision (`assembly_provision`)

Process / prospective direction / type: `branch_assembly` / `inputs` / `product`.

Actual documented service packages provide cutting/hand tools, shared access, delivery and worker/material transport. Each package declares its actual physical drivers, consumers, service period, capital provision, maintenance and termination/removal coverage. Separate uncovered tool production or transport legs; do not convert kilometres or tool-hours into an invented item equivalence.

- Collection subject: Bounded assembly tools, access and logistics provision
- Flow property / unit: Number of items / item
- Amount rule: Actual provider service quantity in its documented counted package, or separately resolve physical exchanges in their supported units; include only allocated assembly share.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Require provider bill/scope, asset service life and complete job/consumer log, actual loaded/empty legs and masses/distances or activity evidence; no default lifetime or freight factor.

#### Collection requirement: Actual usable component returns crossing custody (`usable_returns`)

Process / prospective direction / type: `branch_assembly` / `outputs` / `product`.

Only physical usable tubing/components returned to a supplier or other declared custodian cross this output boundary. Retained closing stock is a balance with carried-forward burden, not an outward product exchange. This includes real usable consumable returns from gross issues, not only piping components.

- Collection subject: Actual usable component returns crossing custody
- Flow property / unit: Mass / kg
- Amount rule: Actual gross outward return mass by item and custodian; retain gross receipts/issues without netting and counting the return again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Need return receipts and actual composition, condition, mass and custody; no assumed resale, recovered-product substitution or return rate.

#### Collection requirement: Actual segregated installation offcuts, rejects and packaging waste (`assembly_waste`)

Process / prospective direction / type: `branch_assembly` / `outputs` / `waste`.

Separate CSST composite offcuts, removed defects, spent consumables and supplier packaging by real composition, waste status and receiving contractor. Reworked components remain within branch_assembly; offsite treatment is outside the installation handoff unless explicitly included once.

- Collection subject: Actual segregated installation offcuts, rejects and packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Actual dispatched waste masses linked to their installation/correction origin and destination, reconciled with receipts, installed stock and returns.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Require measured or documented masses, actual segregation, custody and treatment coverage; no generic scrap rate or recycling credit.

#### Collection requirement: Actual characterized installation releases to the environment (`assembly_releases`)

Process / prospective direction / type: `branch_assembly` / `outputs` / `elementary`.

Conditional individual substances and receiving media are required only for actual measured or defensibly modelled direct releases. Do not classify solid offcuts as emissions or infer methane from the natural-gas design designation of a pre-gas isolated branch.

- Collection subject: Actual characterized installation releases to the environment
- Flow property / unit: Mass / kg
- Amount rule: Actual substance-specific released mass by receiving medium and documented measurement/model, with zero supported by task records when no release occurs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Identify actual substance/species, medium, method detection limit and uncertainty before quantification/binding; no generic VOC, dust or methane default.

#### Collection requirement: Actual externally supplied authorized pressure-test medium (`test_medium`)

Process / prospective direction / type: `rough_in_test` / `inputs` / `product`.

Conditional externally supplied authorized pressure-test medium enters as a product at the actual supplier gate. Record actual composition and cylinder/compressor service coverage. When compression occurs onsite from ambient air, use ambient_air_intake instead of this product input for the same medium, with compressor provision/energy once. Do not assume which authorized medium is used.

- Collection subject: Actual externally supplied authorized pressure-test medium
- Flow property / unit: Mass / kg
- Amount rule: Actual gross supplied test-medium mass issued at the declared gate for all cycles/retests, separately reconciling actual outward usable return, provider-internal residual, retained stock, waste and substance-specific release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Need approved test protocol, isolated volume, absolute pressure, temperature, composition and real-gas/conversion method or meter evidence; no universal pressure, duration or gas mass.

#### Collection requirement: Bounded testing instruments, compressor, drying consumables and access provision (`test_provision`)

Process / prospective direction / type: `rough_in_test` / `inputs` / `product`.

Actual testing service packages cover calibrated gauges/test apparatus, compressor where used, temporary caps handling, drying consumables, transport/access and their declared reusable production, maintenance and end-of-service shares. Shared access/tools link to assembly consumers with one burden owner.

- Collection subject: Bounded testing instruments, compressor, drying consumables and access provision
- Flow property / unit: Number of items / item
- Amount rule: Actual provider package quantity with physical activity and complete scope, attributing only test share; separately resolve uncovered material/service exchanges and their supported units.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Need calibration certificates, service/consumer periods, actual operation/standby, drying consumption and provider coverage; no invented compressor power, cap lifetime or service equivalence.

#### Collection requirement: Actual ambient-air intake for onsite test-medium compression (`ambient_air_intake`)

Process / prospective direction / type: `rough_in_test` / `inputs` / `elementary`.

Conditional atmospheric intake applies only when actual authorized test medium is onsite compressed ambient air. Identify actual intake substance/composition and environment convention; record it at the atmospheric boundary, with compressor service/energy in test_provision/test_electricity once. Do not simultaneously record the same medium as supplied test_medium.

- Collection subject: Actual ambient-air intake for onsite test-medium compression
- Flow property / unit: Mass / kg
- Amount rule: Actual substance-specific atmospheric mass intake from traceable meter or validated composition/state/volume calculation for all actual cycles; pair with test_releases, retention/recovery and custody balance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Actual authorized onsite-air use, composition, intake conditions, isolated volume, conversion and metering uncertainty are required; no universal atmospheric-air factor, pressure or mass.

#### Collection requirement: Actual usable test medium or test material returned across custody (`test_usable_returns`)

Process / prospective direction / type: `rough_in_test` / `outputs` / `product`.

Conditional real outward transfer of reusable medium or usable solution/material to a named custodian is a product return with quantity, quality and carried burden declared. Provider-internal cylinder residual covered within the supplied service is not another outward exchange; retained onsite stock is a balance, not output. No avoided production or invented recovered co-product credit.

- Collection subject: Actual usable test medium or test material returned across custody
- Flow property / unit: Mass / kg
- Amount rule: Actual gross physically returned mass by medium/material and receiver; keep gross test-material inputs and count outward return only once with declared remaining burden/custody.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Need actual signed return/custody receipts, condition/composition, mass and supplied-service coverage; no assumed return percentage or product credit.

#### Collection requirement: Actual test-cleaning residues, washwater and discarded consumables (`test_waste`)

Process / prospective direction / type: `rough_in_test` / `outputs` / `waste`.

Actual collected rinse/washwater, leak-check residue, wipes and rejected test consumables leave for named waste custody. Separate wastewater sent to treatment from direct environmental releases, and permanent installed stock from waste.

- Collection subject: Actual test-cleaning residues, washwater and discarded consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual collected dispatched mass by composition and destination, including corrective cycles; retained residues remain closing stock until disposition.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Need collection/weighing or wastewater volume/density and composition records with receiver evidence; no default washwater composition or discharge fate.

#### Collection requirement: Actual characterized test-medium or cleaning releases to the environment (`test_releases`)

Process / prospective direction / type: `rough_in_test` / `outputs` / `elementary`.

Declare actual released test-medium substances and receiving compartments or retained/recovered medium after depressurization. Supplied compressed medium is paired with its real disposition; never use generic gas labels or assume fuel-gas methane in this pre-gas boundary.

- Collection subject: Actual characterized test-medium or cleaning releases to the environment
- Flow property / unit: Mass / kg
- Amount rule: Actual substance-specific release mass from metering or validated input/retention/recovery balance; separately quantify actual cleaning substance releases only where evidenced.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Require actual medium composition, vent/receiver route, residual/recovered quantities, conditions and uncertainty; compressed ambient-air intake/discharge requires an explicit elementary-flow convention, not an invented supplied-gas identity.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| branch_assembly | Route, mechanically fit, support and protect the branch | required | Always; conditional material/service exchanges follow actual work | Assemble independent jacketed tubing, fittings/caps, supports/protection and applicable bonding; output unaccepted isolated branch to rough_in_test; receive failed branches for correction | Actual unique assembled branches by transfer id |
| rough_in_test | Isolated rough-in pressure test, corrections and handover | required | Always; all failed cycles and retests remain attributable | Receive assembled branch; isolate/cap, pressure-test/inspect, route failures back to branch_assembly; output accepted branch only after signed gate | 1 item accepted complete branch |

Branch cutting, jacket stripping and fitting-seat formation remain embedded assembly operations; no independent fabricated-member handoff is evidenced. No separate gas production, chemical reaction, energy-conversion or recovery node is assumed. Rejected/damaged tubing is repaired/replaced only under actual compatible procedures; failed test states never count as final output. Internal correction-loop transfer ids retain quantities and burdens without new branch credit.

### Process: Route, mechanically fit, support and protect the branch (`branch_assembly`)

#### Inputs

##### Product flows

###### Actual black arc-resistant jacketed CSST at supplier handover (`jacketed_csst`)

Finished manufacturer-qualified jacketed corrugated stainless steel tubing enters the installation boundary, recorded by actual product revision, diameter, length and composite mass. Do not substitute bare stainless steel tube or discard the jacket burden.

- Selected flow: Actual black arc-resistant jacketed CSST at supplier handover
- Flow property / unit: Mass / kg
- Amount rule: Actual gross issued mass attributable to the reference branch, retaining separate unused stock and outward returns.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Collect supplier or measured composite mass per length for the actual diameter/jacket, issued length, installation offcuts and batch variation; the guide has no universal kg per branch.

###### Actual assembly tool charging or direct electricity (`assembly_electricity`)

Conditional electricity for powered installation tools and actual charging crosses the boundary separately where not already covered by provider provision. Geography, supplier mix and voltage/use state follow actual metering and invoices.

- Selected flow: Actual assembly tool charging or direct electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual metered or traceably allocated assembly electricity including charging losses; substantiate manual-only zero and provider coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Obtain meter/charger records, charge-state change, actual job allocation and provider scope; no assumed kWh per branch and Energy support must be resolved for final exchanges.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled isolated capped CSST branch awaiting rough-in test (`assembled_branch`)

Internal handoff to rough_in_test preserves the actual branch identifier, endpoints and installed configuration. This is an unaccepted intermediate with no gas introduction, not the reference output or a separately sold appliance-ready system.

- Selected flow: Assembled isolated capped CSST branch awaiting rough-in test
- Flow property / unit: Number of items / item
- Amount rule: Actual number of identifiable branch handoffs; exclude repeated correction-loop transfers from new completed branch credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_gate`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Use actual transfer and defect records; do not force intermediate counts to accepted-output counts when a branch is rejected or carried unfinished.

##### Waste flows

##### Elementary flows

### Process: Isolated rough-in pressure test, corrections and handover (`rough_in_test`)

#### Inputs

##### Product flows

###### Assembled isolated capped CSST branch awaiting rough-in test (`test_branch`)

Internal receipt from assembled_branch uses the same transfer and branch identifiers, state and count. Failed tests route the branch back to branch_assembly for documented correction and retest; no new upstream branch supply is invented on each loop.

- Selected flow: Assembled isolated capped CSST branch awaiting rough-in test
- Flow property / unit: Number of items / item
- Amount rule: Actual received branch count by unique handoff identifier, reconciled with assembly output and unaccepted work in progress.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_gate`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Actual paired custody/transfer and defect logs are required; accepted final counts are not a substitute for intermediate tracking.

###### Actual non-corrosive leak-check solution (`leak_solution`)

Record the actual compatible leak-check formulation at its purchased or prepared concentration. Distinguish purchased diluted product from separately mixed water/stock; count each preparation ingredient once.

- Selected flow: Actual non-corrosive leak-check solution
- Flow property / unit: Mass / kg
- Amount rule: Actual gross issued formulation mass by batch and test/correction cycle; separately record consumed amount, real outward usable return and retained closing stock without double netting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Require supplier composition/concentration and gross issue/stock records or weighed use; guide recommendation establishes compatibility, not kg per test.

###### Actual rinse and test-cleanup water (`rinse_water`)

Water used to rinse leak-check solution and clean the actual work enters at its provider/supply gate. Drying consumables are separately identified within test provision/material records; no water requirement is silently dropped from the rinse/dry procedure.

- Selected flow: Actual rinse and test-cleanup water
- Flow property / unit: Mass / kg
- Amount rule: Actual gross supplied water mass or traceable volume with state-specific density, excluding already included solution dilution water; reconcile use, real outward returns if any and retained stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Collect metered/weighed water, actual temperature/density conversion and task-specific use; no assumed rinse volume.

###### Actual test compressor or instrument electricity (`test_electricity`)

Conditional electricity for actual test apparatus/compressor and charging is separately measured when outside a provider package. Include repeated tests and standby attributable to this branch.

- Selected flow: Actual test compressor or instrument electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual metered or documented allocated test electricity, with provider-included portions excluded from duplicate upstream charging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Require actual test-cycle meter/activity evidence and equipment load with uncertainty if estimated; no generic kWh and final Energy support remains to verify.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted isolated pressure-tested indoor natural-gas CSST branch rough-in installation service (`accepted_branch`)

The actual complete branch has compatible undamaged assembly, supports/protection, applicable verified bonding, isolated capped outlets, passed authorized pressure testing and accessible rough-in inspection before concealment. Signed handover assigns the later gas introduction, purging, appliance connection and commissioning to a named responsible scope outside this gate.

- Selected flow: Accepted isolated pressure-tested indoor natural-gas CSST branch rough-in installation service
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_gate`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: One complete qualified circuit is a reference definition, not an empirical efficiency range. Actual signed branch register, configuration and accepted/rejected counts are required; pressure, duration and capacity remain actual design/test facts.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| one_service_output | all processes | One intended service output only; offcuts, usable returns and waste are not assumed co-products. Retain all correction/retest burdens with the eventual accepted branch; unresolved failures remain unfinished/rejected, not accepted. No avoided steel/gas production, recycling or operating savings credit. | omegaflex-tracpipe-2026 |
| shared_attribution | assembly_provision; test_provision; electricity | Use actual asset/service scope and complete consumer/activity logs to attribute burdens by causal time/use, transport activity or directly metered electricity for the declared service period. Reconcile allocated shares to the source total across both nodes and other jobs; apply once, never add a second component burden already included in a provider package. | omegaflex-tracpipe-2026 |
| custody_balance | material and residual rows | Reconcile opening stock plus gross receipts with installed stock, actual outward usable returns, dispatched waste, measured consumption/releases and retained closing stock. Closing stock carries declared burden forward and is not an outward exchange. Never net a return then count it again. Document treatment and reusable cap/cylinder custody without invented recovery credits. | omegaflex-tracpipe-2026 |
| period_attribution | assembly_provision; test_provision | For each actual asset identify provision/manufacture period, each use/upkeep period and consumer, replacement event and termination/removal duty. Assign production and terminal shares with actual complete service-life/use evidence, separately charge job use and upkeep, and reconcile all periods/consumers to source totals. Record provider-covered phases; do not charge full production again on each job, shift an unowned terminal duty out of the ledger or double count a replacement. The accepted first branch cycle remains the product denominator; no universal lifetime or annualization. | omegaflex-tracpipe-2026 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_assembly_materials | branch_assembly | Components, consumables, usable returns and waste | Material issue/stock/custody record | branch_id; part_id; system_revision; diameter; gross_receipt; opening_stock; issued_length; composite_mass; installed_mass; return_mass; waste_mass; closing_stock; receiver; provider_coverage | Trace actual approved bill of materials and batch/supplier masses; calibrate weighing; pair gross issues with installation/offcuts/returns/retained stock. Normalize actual gross lot-attributable inputs and separately record real outward usable returns and retained-stock carried-forward burden. Consumption is a disposition, never a second net-input convention. | kg; m; item | Each issue, installation, correction and outward transfer | Initial receipt through final branch handover including corrections | Actual branch site, supplier and receiver | per reference flow | Bills, calibrated scales or traceable part masses; composition and custody; separate packaging coverage; balance residual and uncertainty |
| cp_assembly_resources | branch_assembly | Shared tools/access/logistics, energy and characterized releases | Meter, task and provider activity log | branch_id; task_id; asset_id; service_scope; consumer_id; service_period; provision_period; use_period; upkeep_period; replacement_event; terminal_period; phase_owner; phase_burden; attribution_decision; use_time; life_activity; maintenance; removal_owner; meter_start; meter_end; supplier; load; distance; empty_leg; substance; medium; released_mass; uncertainty | Measure job electricity and physical service use; retain complete all-consumer and period totals; link manufacture/provision, use/upkeep, replacement and termination to actual periods and responsible owners; allocate causal share to branch_assembly without double counting test or supplier coverage; collect actual release method and medium. | kWh; item; kg; h; km | Each task, charge, transport leg and release event | Declared provider service period and complete installation cycle | Actual branch and provider operations | per reference flow | Meters/activity logs, supplier scope, complete consumer allocation, actual lifetime/service evidence and release detection/uncertainty |
| cp_assembly_gate | branch_assembly | Untested internal branch transfer and corrections | Branch/configuration transfer register | branch_id; transfer_id; endpoints; segment_length; diameter; fitting_revision; support_protection; bonding_record; qualified_installer; defect_id; transfer_count; custody_time | Record unique isolated capped assembly and actual configuration; pair transfer_id with test receipt; carry failures/corrections and unfinished stock; reconcile each eventual accepted branch without counting repeated loops as new production. | item; m | Each initial handoff and correction loop | Assembly through completed test handover | One actual declared indoor branch | per reference flow | Approved design, part compatibility, installer qualification, route photos, applicable bonding acceptance and paired signed transfers |
| cp_test_materials | rough_in_test | Medium, leak solution, rinse water, wastes and releases | Test material/custody and physical balance log | branch_id; cycle_id; medium_identity; composition; source_gate; isolated_volume; volume_unit; absolute_pressure; pressure_unit; temperature; temperature_unit; meter; delivered_mass; solution_id; concentration; rinse_mass; residual_mass; recovered_mass; waste_mass; substance; receiving_medium; receiver; outward_product_return; provider_internal_residual; retained_stock; intake_convention; uncertainty | Meter or validate actual medium mass from documented conditions and composition; retain all cycles, leaks/corrections and disposition; measure solution/rinse and actual residues; distinguish supplied versus ambient_air_intake elementary input versus test_medium external product input; pair real outward test_usable_returns and retained stock/provider-internal residual separately from environmental and waste custody; normalize complete attributable cycle quantities to this accepted reference branch. Retain the actual protocol volume, absolute-pressure and temperature units with each measured value and every state conversion; document gauge-to-absolute and temperature-scale conversion when applicable. | kg; actual volume_unit; actual absolute pressure_unit; actual temperature_unit | Each test, retest, rinse, collection and release | First test preparation through final depressurization/cleanup and custody | Actual branch, supply and receiver | per reference flow | Authorized test protocol; calibration; density/state/model evidence; composition/SDS; complete mass/disposition balance and uncertainty |
| cp_test_resources | rough_in_test | Test apparatus, drying, access and electricity | Provider service, calibration and meter log | branch_id; cycle_id; asset_id; calibration; service_scope; consumer_id; service_period; provision_period; use_period; upkeep_period; replacement_event; terminal_period; phase_owner; phase_burden; attribution_decision; use_time; life_activity; maintenance; drying_material; removal_owner; electricity; supplier; transport_leg; uncertainty | Read actual test instruments/compressor energy and drying consumption; retain manufacture/provision, use/upkeep, replacement and terminal period/event ownership and shared consumer totals, separate included service electricity/materials and allocate actual rough_in_test share once. | item; kWh; kg; h; km | Each setup/test/retest/cleanup and shared-service statement | Complete testing cycle and declared provider service period | Actual site, provider and other documented consumers | per reference flow | Calibration/service invoices, metered activity, complete allocation reconciliation and scope/drying/removal evidence |
| cp_test_gate | rough_in_test | Internal receipt, test acceptance and final output | Signed test, inspection and custody register | branch_id; transfer_id; received_count; design_gas; design_pressure; design_capacity; jurisdiction; fitting_revision; medium; test_protocol; test_pressure; pressure_unit; test_duration; duration_unit; result; defect_id; retest_id; inspection; bonding; capped_isolated; accepted_count; commissioning_owner | Match receipt to assembled_branch; verify actual qualified installation, isolation/caps, approved test conditions, accessible inspection and applicable bonding. Close failures through branch_assembly and retest; count each complete qualified accepted circuit once and assign later commissioning to a named external scope. Retain the actual authorized protocol pressure and duration units with the measured test settings/results; do not infer a pressure or time default. | item; actual pressure_unit; actual duration_unit | Each receipt/test/retest and final signed handover | Initial test receipt through final rough-in acceptance | One specified complete indoor branch | per reference flow | Approved design/jurisdiction and current applicable guide, qualified installer, calibration, test/inspection signatures, closed defect chain and custody |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| reference_attribution | all inventory rows | Record actual attributable exchange quantity per reference flow. For a pooled job retain accepted branch identifiers and a causal allocation supported by actual configuration/activity; do not divide blindly among unequal circuits. | actual exchanges; unique accepted branch register; cp_assembly_gate; cp_test_gate; allocation evidence | exchange quantity per qualified reference circuit | omegaflex-tracpipe-2026 |
| material_reconciliation | material and residual rows | Reconcile opening stock plus gross receipts against installed material, outward returns, dispatched waste, actual consumed/released quantity and retained stock; investigate residual against measurement uncertainty. Do not add internal transfers to external receipts. | cp_assembly_materials; cp_test_materials | audited material disposition and carried-forward burden | omegaflex-tracpipe-2026 |
| test_medium_balance | test_medium; ambient_air_intake; test_usable_returns; test_releases | Use traceable actual meter mass or justified conditions/composition conversion; reconcile medium input/intake with retained, recovered, waste-custody and substance-specific environmental disposition for every cycle. Retain absolute pressure and actual state evidence, not a universal ideal-gas factor. | cp_test_materials; actual authorized medium and conversion method | actual medium mass and disposition by substance/compartment | omegaflex-tracpipe-2026 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_configuration | all rows | Declare actual material/service identity, supplier/state and units; actual test medium and release species/compartments; resolve concrete UUID and support before final process exchanges. | Part records, provider scopes, composition and verified detail/support rows |
| full_cycle | all processes | Include all initial installation, failed tests, corrections/retests, cleanup, logistics and reusable provision/removal responsibilities; unfinished work is explicitly reconciled. | Dated task/defect/custody log and complete consumer totals |
| measurement_uncertainty | all rows | Report calibration/resolution, sampling, supplier mass variability, stock/balance residual, allocated shares and state conversion uncertainty. Missing evidence is a gap, not a numerical zero or arbitrary range. | Meter/scale certificates, bills, physical balances and documented uncertainty |
| version_jurisdiction | rough_in gate | Use actual current applicable system/fitting instructions and qualified approved jurisdiction design; July2026 guide examples do not establish universal pressure, duration, spacing or capacity. | Dated guide/revision, approved plans, qualification, actual protocol/inspection and bonding record |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| accepted_gate | accepted_branch | Reject accepted credit unless the complete declared branch is isolated/capped and pre-gas, compatible and undamaged, supported/protected, applicable bonding verified, authorized test and accessible inspection passed, defects/retests closed and signed handover recorded. | omegaflex-tracpipe-2026 |
| transfer_rework | assembled_branch; test_branch | Pair internal transfer quantities and ids; link every failed pressure test to correction in branch_assembly and subsequent retest. No failed branch, duplicate loop or unfinished stock may inflate accepted output. | omegaflex-tracpipe-2026 |
| inventory_coverage | all inventory rows | Check every conditional card against actual tasks; expand umbrella materials/providers/substances into real exchanges. Gross materials, returns, closing stock, waste/washwater, medium disposition, energy and tool/transport scope reconcile once with uncertainty; blank evidence is not zero. | omegaflex-tracpipe-2026 |
| bonding_test_specificity | all processes | Require actual jurisdiction/system/fitting-specific protection, bonding and test evidence. AR jacket does not waive applicable bonding; no generic numerical pressure/time/support spacing, methane leakage, sealant dose or actual operational performance is inferred. | omegaflex-tracpipe-2026 |
| scope_classification | reference product | Use only the declared narrower gas-conducting rough-in category; no heat/ventilation installation, live-gas commissioning or full CPC54640 coverage assertion. | un-cpc3-2025 |
| period_completeness | assembly_provision; test_provision | Verify manufacture/provision-use/upkeep-replacement-termination period links and ownership, causal allocation across actual jobs/consumers, complete phase totals and no double attribution. Missing service-life/replacement/terminal evidence blocks finalization and cannot be hidden behind initial branch handover. | omegaflex-tracpipe-2026 |
| medium_typing | test_medium; ambient_air_intake; test_usable_returns; test_releases | Choose actual evidenced external product supply or onsite atmospheric elementary intake for each medium quantity, with compressor service/energy once. Pair disposition and substance/medium identity; real usable product returns have custody and burden evidence, whereas provider-internal cylinder residual is no second output. | omegaflex-tracpipe-2026 |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections after concrete exchange verification |
| allowed_use | Declared indoor AR-CSST natural-gas branch rough-in configuration at isolated accepted gate with complete measured provision and scope |
| excluded_use | Live gas supply/purge/appliance commissioning; underground/external networks; yellow-jacket mixed systems; heating/ventilation equipment; whole-building operational gas performance; unconstrained per-metre comparison |
| required_metadata | All required reference qualifiers, route and component IDs, supply/host boundaries, actual jurisdiction/version, test/inspection/bonding acceptance, custody, provider/shared allocation and physical denominator |
| required_quality_disclosure | Measured versus allocated/modelled quantities, source coverage, conditional-card omissions with evidence, uncertainty/balance residuals, unresolved identities/supports and remaining commissioning scope |
| update_trigger | Changed route/configuration/system or fitting instruction, jurisdiction/design/test protocol, supply identity, service coverage, actual evidence or verified UUID |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version3.0 explanatory notes, 30June2025, printed295: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Gas-fitting installation category and heating/ventilation exclusions; narrower semantic boundary |
| omegaflex-tracpipe-2026 | handbook | OmegaFlex, TracPipe System Flexible Gas Piping Design Guide & Installation Instructions, FGP-001US07/26 July2026, cover/brand update and sections1.0,4.1-4.4,4.10,5.1-5.3,6.0-6.1: https://tracpipe.com/wp-content/uploads/FGP-001US-DI-USA-Guide-Rev-0425-with-LINKS-1.pdf | Qualified compatible assembly, cutting/fitting/protection/bonding, rough-in pressure-test/inspection, correction, compatible leak solution and rinse/dry; actual version is July2026 despite retained URL filename |
