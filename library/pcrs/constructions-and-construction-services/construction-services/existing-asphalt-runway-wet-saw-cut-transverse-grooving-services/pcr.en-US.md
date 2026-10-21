---
pcr_id: pcr.existing-asphalt-runway-wet-saw-cut-transverse-grooving-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing asphalt runway wet saw-cut transverse grooving services

## 1. Scope and Applicability

This PCR covers wet diamond-saw cutting of transverse rectangular grooves in a qualified existing asphalt runway, with integrated continuous slurry collection, continuous cleanup, attributable setup/control-strip work, actual job-induced defect remediation and accepted maintenance handback. It applies where the actual project adopts FAA AC 150/5370-10H Item P-621 rectangular geometry and testing, with documented project choices. It excludes concrete, plastic-formed or trapezoidal grooves, diamond grinding, major pre-existing pavement rehabilitation, manufacture of a new runway or asphalt layer, drainage and lighting installation, chemical surfacing, and subsequent aircraft or airport operation. Groove acceptance alone does not warrant a friction coefficient, service life or all-weather safety.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-asphalt-runway-wet-saw-cut-transverse-grooving-services |
| classification_refs | CPC 3.0 54213; narrower |
| covered_products | Incremental accepted rectangular transverse wet saw grooving of existing sound asphalt runway |
| excluded_products | New pavement; concrete or trapezoidal grooves; grinding; major prior repairs; airport operations |
| representative_product | Accepted grooved clean asphalt footprint at signed airside maintenance handback |
| production_route | Qualified retained asphalt → wet diamond saw grooves with continuous vacuum recovery and cleanup → zone-tested accepted surface |
| market_state | Site-specific completed construction alteration service; no standalone new pavement asset |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted rectangular transverse wet saw grooving service on existing asphalt runway |
| How much | 1 m2 accepted unique grooved plan-view footprint |
| How well | Declared project-adopted P-621 groove geometry, zone-test acceptance, cleanliness and remedy completion |
| How long or cycle | One bounded possession and grooving campaign including attributable control strip, work windows and rework; no lifetime performance promise |
| reference_flow_link | `accepted_grooving` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted rectangular transverse wet saw grooving service on existing asphalt runway |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | Runway/site and coordinates; qualified retained asphalt condition; possession dates; groove orientation/width/depth/spacing and adopted unit system; exclusion zones; machine/head/run identifiers; zone samples and acceptance; slurry destination; damage remedy; accepted footprint and signed handback |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_area` | `accepted_grooving` | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Survey A as the union of accepted grooved plan-view polygons, excluding omitted edge/light/joint zones, unresolved rejects and untreated gaps. Count repeated passes once. The output amount is exactly 1 m2 per reference flow; all attributable campaign quantities divide by positive A. |
| `groove_geometry` | `accepted_grooving` | Length | mm | Record the adopted project unit system and exact specification. P-621 SI nominal width 6 mm (+2/-0), depth 6 mm (±2), spacing 38 mm (-3/+0), transverse perpendicular orientation; retain actual zone acceptance distributions and alignment criteria instead of using nominal dimensions as resource factors. The printed nominal SI spacing 38 mm (-3/+0) and separately printed acceptance minimum 34 mm are distinct source clauses with an arithmetic discrepancy; retain both verbatim and obtain the adopted project criterion hierarchy/resolution from the responsible engineer before acceptance. Do not silently equate rounded SI/inch clauses or invent a universal corrected limit. |
| `quantity_custody` | `fuel_supply`, `diamond_blades`, `lubricant_supply`, `remedy_materials`, `packaging_supply`, `unused_returns` | Mass | kg | Measure product gross issue quantity before outward return netting with vehicle/container tare removed. Record true outward returns, retained closing stocks and consumed/transformed or released amounts by identity. Volume-to-mass needs actual product density at declared temperature; no assumed water or fuel density. |
| `freight_units` | `freight_service` | mass*distance | kg*km | Use net cargo kg times actual route-leg km; conversion from listed t*km uses factor 1000 kg*km per t*km. Do not confuse vehicle distance with cargo transport service. |
| `energy_units` | `electricity_supply` | Energy | kWh | Retain measured electrical kWh and actual supply boundary. Do not substitute heating-value energy for generic electrical Energy identity; fuel mass and electrical energy remain separate physical quantities. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing sound stable asphalt runway at authorized airside possession; pre-existing bumps, depressed, badly cracked/spalled or defective zones already repaired by declared owner and accepted for grooving. |
| starting_condition_role | Retained host interface; not a newly supplied complete runway or burden-free incremental work. |
| product_classification_scope | Narrow runway alteration service within CPC 3.0 54213, independent of classification-derived identity. |
| recursive_input_rule | A separately purchased same-category grooving service is recorded at its actual accepted area and supply gate with upstream dataset; do not recursively invent retained-runway manufacture or duplicate subcontractor resources. |
| upstream_dataset_requirement | Actual supplied water, fuels, blades, lubricant, repair products, electricity, transport, packaging, distinct asset service and external treatment use verified compatible upstream/downstream datasets and declared boundary coverage. |
| disclosure | Incoming substrate/condition and prior-repair owner; project adopted P-621 and unit system; campaign/work-window limits; setup/control-strip inclusion; actual remedy responsibility; assets/coverage, supply and receiver gates; omitted areas, weather and stock carry-forward. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `retained_host` | `groove_finish` | Retain the existing asphalt host without a new whole-runway upstream charge or avoided-replacement credit. Include incremental possession, guides, control strip, wet cutting, capture, cleanup, transport and job-induced remedies. Prior major rehabilitation is separately bounded with explicit responsibility. | `faa-p621-2018` |
| `continuous_capture` | `groove_finish` | Use actual wet diamond-saw cutting with integrated continuous slurry vacuum and continuous cleanup. Account water supply and actual approved residual disposition. No routine slurry entry to airport storm sewer; freezing conditions that prevent immediate debris removal/water drainage preclude this route. | `faa-p621-2018` |
| `equipment_blades` | `diamond_blades` | Record machine/head and blade configuration appropriate to asphalt hardness, one-pass groove capability, depth/alignment control and uniform blade wear/diameter. P-621 minimum 0.5 m multi-groove pass capability is equipment qualification, not area productivity or water consumption. | `faa-p621-2018` |
| `airside_gate` | `accepted_grooving` | End only after measured geometry/zone acceptance, continuous cleanup complete, residual custody documented, directed damage remedies accepted and signed maintenance handback. Later airport/aircraft operation and friction/service-life claims are outside this output. | `faa-p621-2018` |
| `campaign_asset_boundary` | `capital_service` | Index campaign possession/work windows, setup/control-strip/rework, manufacturing and service periods of every actual asset, maintenance, replacements and end of life. Saw/vacuum/cleaner/tanker/generator/metrology and actual access/protection/containment/remedy equipment, including bounded provider physical resources, shared with other jobs require complete-life attribution and explicit exclusion of direct fuel, electricity and tool rows from their capital coverage. |  |
| `actual_exchange_expansion` | all inventory rows | Conditional material/service/substance cards are foreground collection obligations. Expand each into distinct actual identity/gate/provider/receiver/property exchange; never bind or add unlike products, wastes, or species together. Record substantiated absence; unknown activity is not zero. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual supplied engine fuel grade at equipment supply gate (`fuel_supply`)

Process / prospective direction / type: `groove_finish` / `inputs` / `product`.

Conditional on combustion equipment. Resolve each actual fuel grade as a distinct exchange; never sum unlike fuels. Include saw, vacuum, cleaning, setup and remedy demand once. Include actual combustion-powered access, protection and remedy equipment and bounded provider resources once. Range evidence need: Fuel grade, engine load and elapsed work records are required; FAA production-rate blanks and groove tolerances do not establish fuel consumption.

- Collection subject: Actual supplied engine fuel grade at equipment supply gate
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare fuel issues into campaign custody divided by A; derive burned fuel separately from returns, retained stock, collected waste and partitioned releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`
- Sources: `faa-p621-2018`

#### Collection requirement: Actual compatible diamond saw blades or cutting segments supplied for asphalt grooving (`diamond_blades`)

Process / prospective direction / type: `groove_finish` / `inputs` / `product`.

Identify the complete supplied blade versus replacement segment, bond/material, diameter and compatible cutting head. Keep distinct supplied identities separate. New/worn blade mixing and unequal wear must satisfy the adopted P-621 requirements; direct tool supply is excluded from capital maintenance coverage to avoid duplication. Range evidence need: Actual supplied mass, wear, replacement and usable remaining-service records are needed; minimum cutting-head width is not a blade-use factor.

- Collection subject: Actual compatible diamond saw blades or cutting segments supplied for asphalt grooving
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare blade or segment supply attributable to the campaign divided by A; include starting usable tool stock transfer with disclosed burden, returns and closing stock balance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `faa-p621-2018`

#### Collection requirement: Actual cargo-specific campaign freight service (`freight_service`)

Process / prospective direction / type: `groove_finish` / `inputs` / `product`.

Include mobilization/demobilization, water/fuel/tool delivery and residual collection where outside supplier or receiver datasets. Empty vehicle movement is documented with actual vehicle service records rather than fictitious cargo mass; avoid charging vehicle fuel both here and directly. Range evidence need: Actual cargo, leg distance, vehicle loading and provider boundaries are required; no default distance or return-load factor is available.

- Collection subject: Actual cargo-specific campaign freight service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual attributable net cargo kg multiplied by route-leg km, separately for each mode/provider, divided by A.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

#### Collection requirement: Complete-life service share of each actual grooving campaign asset (`capital_service`)

Process / prospective direction / type: `groove_finish` / `inputs` / `product`.

Enumerate saw, integrated vacuum, external recovery/tanker/cleaner, generator when present, and measurement instruments, plus actual access, protection, containment and job-induced remedy equipment when used. Bounded third-party provider physical resources are included once with documented coverage, rather than treating approval paperwork as physical supply. Assets used in several work periods/jobs have complete manufacture, maintenance, replacements and end-of-life coverage; separate direct fuel/electricity and diamond-tool rows are excluded from capital coverage. Range evidence need: Measured service history plus evidenced remaining-service/replacement/termination/EOL scenarios and sensitivity are needed for in-service assets; observed completed life applies to retired assets. Unknown life denominators block finalization.

- Collection subject: Complete-life service share of each actual grooving campaign asset
- Flow property / unit: Number of items / item
- Amount rule: For each separately identified asset, attributable campaign service divided by evidenced complete-life service, then divided by A, as asset-equivalent item.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

#### Collection requirement: Actual separately supplied campaign packaging material (`packaging_supply`)

Process / prospective direction / type: `groove_finish` / `inputs` / `product`.

Conditional on actual packaging entering custody. Supplier-included packaging already represented upstream is retained in the physical balance without a second upstream supply burden; additional purchased packaging is separately charged. Pallets/containers used as durable assets follow complete-life service treatment. Range evidence need: Actual packaging composition, net mass, reuse, true return and stock records are required; no universal packaging proportion is justified.

- Collection subject: Actual separately supplied campaign packaging material
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare supplied packaging material divided by A, separately by material and custody gate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual separately supplied spill cleanup or containment consumable (`cleanup_consumables`)

Process / prospective direction / type: `groove_finish` / `inputs` / `product`.

Conditional on actual supplied absorbent, wipe or containment product used for campaign spills/cleanup. Identify each actual product, composition, state, supplier and use separately; do not sum unlike consumables. Supplier/provider included products are accounted once. Used contaminated products leave through composition-specific spent_fluids waste exchanges, with captured fluid counted only once. Range evidence need: Actual spill/cleanup event, supplied product records, net mass and contaminated receiver route are needed; no routine consumption, spill frequency, formulation or generic range is assumed.

- Collection subject: Actual separately supplied spill cleanup or containment consumable
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare issue of each actual cleanup consumable divided by A, with opening-stock burden transfer, true outward returns and retained closing-stock balance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual water abstracted from the identified environmental resource (`abstracted_water`)

Process / prospective direction / type: `groove_finish` / `inputs` / `elementary`.

Conditional on direct withdrawal from a declared surface-water or groundwater source. Purchased water belongs to supplied_water; internal recycling is not a new abstraction exchange. Range evidence need: Require abstraction meter, permitted source and uncertainty records; no abstraction fraction can be inferred from supplied-water or captured-slurry quantities.

- Collection subject: Actual water abstracted from the identified environmental resource
- Flow property / unit: Volume / m3
- Amount rule: Metered actual direct environmental abstraction divided by A, separately by resource and location.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

#### Collection requirement: Actual unused supplied product returned outward from campaign custody (`unused_returns`)

Process / prospective direction / type: `groove_finish` / `outputs` / `product`.

Conditional on documented physical transfer to supplier or other holder. Preserve fuel grade, blade configuration, lubricant formulation, remedy material and packaging identities separately, with matching gross input basis. Closing stock retained in custody is a carried-forward balance, not an outward exchange. No avoided-production credit is implied. Range evidence need: Actual return notes and scales define quantities; no assumed return rate or heterogeneous combined total is permitted.

- Collection subject: Actual unused supplied product returned outward from campaign custody
- Flow property / unit: Mass / kg
- Amount rule: Actual outward net-tare unused quantity of each distinct supplied product divided by A; never an already netted return.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual spent diamond blade or segment waste at receiver gate (`spent_blades`)

Process / prospective direction / type: `groove_finish` / `outputs` / `waste`.

Reconcile supplied tool, remaining usable stock, returned product, wear transferred to slurry or air, and collected spent tool. Steel carrier and abrasive composition require actual evidence. A reusable tool retained for future jobs is stock, not waste. Range evidence need: Actual spent-tool weighing, replacement and wear evidence is needed; do not infer waste equals supplied mass or assume full retirement each campaign.

- Collection subject: Actual spent diamond blade or segment waste at receiver gate
- Flow property / unit: Mass / kg
- Amount rule: Actual net spent tool mass leaving custody divided by A, separately by complete blade or segment and receiver.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`
- Sources: `faa-p621-2018`

#### Collection requirement: Actual segregated campaign packaging waste (`packaging_waste`)

Process / prospective direction / type: `groove_finish` / `outputs` / `waste`.

Conditional on discarded packaging. Distinguish real reusable product returns from waste and retained packaging; no combined paper/plastic/wood waste identity or automatic recovery credit. Range evidence need: Actual composition, tare-corrected receiver tickets and return/stock balance are needed; no generic waste fraction is justified.

- Collection subject: Actual segregated campaign packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Net outward discarded mass by packaging material and receiver divided by A.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

#### Collection requirement: Actual collected waste fuel, lubricant or contaminated cleanup consumable to documented receiver (`spent_fluids`)

Process / prospective direction / type: `groove_finish` / `outputs` / `waste`.

Conditional on fuel draining, oil change or recovered spill collection. Resolve fuel and lubricant wastes as distinct exchanges; align with gross issues, retained stocks, usable outward returns and actual released fraction. The total spill is partitioned between collected and released mass and never subtracted again. Contaminated absorbents, wipes or containment products require their actual contaminated composition and receiver as distinct waste exchanges; do not combine their gross contaminated mass with duplicate separately counted absorbed fluid mass. Range evidence need: Require incident/oil-change records, net mass, composition and receiver acceptance; no assumed waste fraction applies.

- Collection subject: Actual collected waste fuel, lubricant or contaminated cleanup consumable to documented receiver
- Flow property / unit: Mass / kg
- Amount rule: Net outward collected waste quantity by actual formulation, contamination and receiver divided by A.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

#### Collection requirement: Actual separately identified combustion substance released to air (`combustion_emissions`)

Process / prospective direction / type: `groove_finish` / `outputs` / `elementary`.

Conditional on actual on-site combustion. Each substance and receiving-air compartment must be identified before UUID binding; NOx, VOC or particulate umbrellas are not fixed substances. Purchased electricity or freight datasets do not duplicate their upstream exhaust here. Range evidence need: Obtain engine/fuel and operating condition-specific measurement or documented applicable factor with uncertainty; no general emissions factor or speciation split is supplied.

- Collection subject: Actual separately identified combustion substance released to air
- Flow property / unit: Mass / kg
- Amount rule: For each actual engine/fuel/species, burned activity multiplied by applicable documented species factor or measured species mass, divided by A.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`

#### Collection requirement: Actual separately characterized fugitive cutting particle release to air (`fugitive_particles`)

Process / prospective direction / type: `groove_finish` / `outputs` / `elementary`.

Conditional on observed or substantiated escape despite wet cutting and vacuum collection. Captured fines belong in slurry; blade wear in recovered solids is not also air emission. Unknown balance residual is investigated rather than assigned to dust. Range evidence need: Require task-specific release measurement and particle-size/composition evidence; no dry-cutting or assumed removal-efficiency factor transfers automatically.

- Collection subject: Actual separately characterized fugitive cutting particle release to air
- Flow property / unit: Mass / kg
- Amount rule: Measured actual escaped mass by substance/particle size and air compartment divided by A.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `faa-p621-2018`

#### Collection requirement: Actual separately identified liquid or substance release to documented environment (`liquid_release`)

Process / prospective direction / type: `groove_finish` / `outputs` / `elementary`.

Conditional on evidenced environmental release, including actual water discharge/evaporation or fuel/lubricant incident. Distinct substances and media require separate exchanges; water volume may convert to mass only with evidenced density/temperature. Storm-sewer slurry entry is prohibited under adopted P-621 and cannot be a routine modeled disposal route. Range evidence need: Actual incident, authorized outlet or measured evaporation records, density when needed, and medium/species evidence are required; no unclosed water balance is an automatic emission.

- Collection subject: Actual separately identified liquid or substance release to documented environment
- Flow property / unit: Mass / kg
- Amount rule: Measured actual released mass by substance and receiving medium divided by A, separate from collected incident waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `faa-p621-2018`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `groove_finish` | Coupled wet saw grooving and slurry recovery | `required` | Qualified existing asphalt and approved work possession | Surface finishing from retained sound asphalt to accepted clean grooved area; cutting and recovery are physically coupled | 1 m2 accepted unique footprint |

The campaign consists of recorded daily work windows and passes. Setup, guide lines, off-traffic control strip, cutting, integrated capture, cleanup, zone measurement and actual damage remedies share one responsibility. A cut surface awaiting slurry removal or acceptance is work in progress. It is never an independently handed-over product. No additional node is created solely for documents or testing.

### Process: Coupled wet saw grooving and slurry recovery (`groove_finish`)

#### Inputs

##### Product flows

###### Purchased grooving and cleanup water at site supply gate (`supplied_water`)

Record the actual potable or process-water grade and provider separately. Tank/container tare is excluded; do not substitute environmental abstraction for purchased supply. Range evidence need: The reviewed sources do not provide a site-independent numerical water-consumption range; obtain meter uncertainty and campaign distributions by machine, asphalt, groove geometry and recovery circuit before setting limits.

- Selected flow: Purchased grooving and cleanup water at site supply gate
- Flow property / unit: Volume / m3
- Amount rule: Gross metered external purchased water entering this campaign divided by accepted footprint A; exclude internal recirculation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `faa-p621-2018`

###### Actual purchased electricity at grooving equipment connection (`electricity_supply`)

Conditional on external electrical supply, with actual voltage/provider/mix and connection gate declared. A generator fuel input already covering delivered power does not also acquire a purchased-electricity input. Cover actual access/protection/remedy equipment and bounded provider resources when powered, with ownership and overlap disclosed. Range evidence need: Obtain actual submeter accuracy, work-window loads and uncertainty; no published resource prior applies to the unspecified powered equipment.

- Selected flow: Actual purchased electricity at grooving equipment connection
- Flow property / unit: Energy / kWh
- Amount rule: Separately metered purchased electricity for attributable campaign activities divided by A.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `faa-p621-2018`

###### Actual supplied equipment lubricant formulation (`lubricant_supply`)

Conditional on attributable lubrication. Resolve each formulation and supplied state independently; recoverable oil, retained inventory and accidental release are separate outlets. Supplier-included machine lubricant must not be charged twice. Range evidence need: Obtain product instructions and measured replenishment/change/return records for the actual equipment; no generic oil factor is justified.

- Selected flow: Actual supplied equipment lubricant formulation
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare actual lubricant formulation issued to campaign custody divided by A. Opening-stock burden transfer and retained closing-stock carryforward follow custody_and_stocks.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Actual separately identified material supplied for job-induced damage remedy (`remedy_materials`)

Conditional on directed job-induced damage remedy. Each actual asphalt repair mixture, binder, sealant or other distinct product becomes its own verified exchange; the card is a collection obligation and never a blended generic material total. Prior major repair is outside this service with explicit owner and incoming soundness gate. Range evidence need: Only actual approved remedy and measured lot records can establish supply; no assumed defect rate or repair recipe is prescribed.

- Selected flow: Actual separately identified material supplied for job-induced damage remedy
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare supply of each actual repair material for job-induced defects divided by A; retain identity-specific outlets and stocks.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `faa-p621-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted rectangular transverse wet saw grooving service on existing asphalt runway (`accepted_grooving`)

Measure accepted unique plan-view grooved footprint A using georeferenced boundaries and signed zone acceptance; exclusions, rejected areas and unfinished areas do not enter A. Repeated passes cannot increase the footprint. The control strip outside the traffic area has assigned burdens and is not an invented saleable co-product. Range evidence need: The exact 1 m2 quantity defines the reference and is not an empirical yield range. Actual campaign A and measurement uncertainty require surveyed boundaries and acceptance records; no minimum campaign size is asserted.

- Selected flow: Accepted rectangular transverse wet saw grooving service on existing asphalt runway
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `faa-p621-2018`

##### Waste flows

###### Captured wet asphalt grooving slurry to documented waste receiver (`captured_slurry`)

Continuous integrated recovery produces an actual mixture of cutting fines and water. Declare asphalt/binder/aggregate character, blade-wear contamination, wet state and approved treatment destination. Settled dry solids and separated wastewater leaving by distinct routes become separate actual exchanges instead of duplicate wet-slurry quantities. No presumed storm-sewer discharge or recycling credit. Range evidence need: Weigh/tare and sample actual wet mass and dry solids; geometry is a cross-check and cannot replace actual density/moisture/composition or prescribe a universal waste rate.

- Selected flow: Captured wet asphalt grooving slurry to documented waste receiver
- Flow property / unit: Mass / kg
- Amount rule: Net wet slurry mass physically leaving to each identified receiver divided by A; report water and dry solids components and stock separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`
- Sources: `faa-p621-2018`

###### Actual segregated debris from job-induced asphalt damage remedy (`remedy_debris`)

Conditional on directed repair attributable to this campaign, linked to the originating groove_finish work window and final remedy acceptance. Do not relabel it as a rejected new runway product or mix it silently with measured cutting slurry. Range evidence need: Actual damage extent, removed debris tickets and retained/reused quantities are required; no generic reject proportion is available.

- Selected flow: Actual segregated debris from job-induced asphalt damage remedy
- Flow property / unit: Mass / kg
- Amount rule: Net outward actual removed remedy debris by composition and receiver divided by A.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`
- Sources: `faa-p621-2018`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `campaign_attribution` | all inventory rows | Attribute direct campaign records to the accepted footprint A. Setup, approved control strip, machine alignment, cleaning, stoppages and rework retain burdens even when their areas are not accepted saleable output. For mixed work orders, separately meter where feasible, otherwise document causal machine-time/service evidence and sensitivity; price is not a default allocation key. |  |
| `run_attribution` | `groove_finish` | Link every issue, water/energy demand, waste collection, changeover, blade replacement and remedy to machine/head/day/run and work window. Shared setup/cleaning is assigned once to its actual beneficiary runs before campaign summation. Accepted polygons are deduplicated across passes and runs. |  |
| `asset_complete_life` | `capital_service` | For each asset enumerate all jobs/nodes/reporting periods and complete manufacture, maintenance, replacement and EOL coverage. Use actual campaign service divided by complete-life service with consistent driver, before dividing by A; observed history for completed lives, justified prospective remaining-service/replacement/termination/EOL scenario for in-service assets. Label observed/forecast components, sensitivity, denominator evidence and update triggers; missing coverage or denominator blocks finalization. |  |
| `no_duplicate_burden` | all inventory rows | Retained host is not a newly produced asset. Machine fuel/electricity, diamond blades, lubrication, freight and treatment are owned once: disclose supplier/dataset inclusions and remove overlaps from capital or bundled services. No avoided construction/recycling credit or co-product allocation is assumed. |  |
| `reject_retention` | `groove_finish` | Off-spec geometry, uncleared slurry and damaged pavement remain WIP/reject until directed remedy and acceptance. Rework loops to groove_finish retain all original and repeat burdens; discarded material leaves as identified waste. Unresolved/abandoned zones contribute burdens but never accepted footprint. | `faa-p621-2018` |
| `custody_and_stocks` | all inventory rows | Gross net-tare material/fuel issue is not reduced by outward returns if those returns are outputs. Transfer opening-stock physical quantity and its unconsumed upstream burden from the prior custody/period ledger exactly once; charge newly issued products at their actual supply gate. Attribute used/transformed quantities and actual outward returns/waste/releases without recharging the transferred opening stock. Retained closing-stock physical quantity and its unconsumed upstream burden carry forward to the next period/custody ledger; they do not create outward exchanges. State how the normalized campaign inventory and stock transfers preserve total upstream burden across periods, without losing opening-stock burden or charging closing stock again. Product returns, collected waste and actual environmental release are mutually exclusive outlets; incident spill total is partitioned and not subtracted twice. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `groove_finish` | Accepted area and geometry | Foreground measured/logged records | site_id; runway_coordinates; campaign_id; work_window; machine_id; head_id; pass_id; polygon_vertices_m; excluded_polygon_vertices_m; accepted_polygon_vertices_m; rejected_polygon_vertices_m; control_strip_area_m2; groove_width_mm; groove_depth_mm; groove_spacing_mm; orientation_deg; alignment_deviation_mm; alignment_length_m; edge_clearance_m; light_clearance_mm; joint_clearance_mm; zone_id; test_time; instrument_range_mm; instrument_resolution_mm; adopted_unit_system; specification_revision; acceptance_signature; handback_time | Survey plan-view polygon union A, omitted zones and separately identified control strip; retain adopted P-621 geometry and alignment values, original unit-system samples and signed zone acceptance. P-621 SI alignment ±38 mm over 23 m with realignment every 150 m; retain printed nominal SI spacing 38 mm (-3/+0) and separately printed minimum acceptance spacing 34 mm as distinct clauses; obtain documented adopted project hierarchy/resolution of this discrepancy before accepting spacing. Do not silently harmonize rounded SI/inch values. Zone distributions apply under that declared criterion. Width/depth instruments range ≥12 mm and resolution ≤0.13 mm; spacing range ≥80 mm and resolution ≤0.5 mm. Record actual equivalent inch criteria if adopted, without interchanging rounded thresholds. | m2; mm; m; degree | Every pass spot check and adopted zone-testing frequency; each final acceptance | Entire campaign plus attributable setup/control strip/rework and stock handover | Declared runway, machines/heads, work windows and supply/receiver gates | per reference flow | Calibrated survey and gauges; five zones and five consecutive grooves/head with ≥3 rounds/day; P-621 depth/width distribution ≥90% at least 5 mm, ≥60% at least 6 mm, ≤10% beyond 8 mm under adopted SI system; retain exact specified threshold conventions and corrective adjustments, edge/light/joint exclusions and signatures. Do not turn instrument resolution into permission to widen tolerances. |
| `cp_water` | `groove_finish` | Purchased/abstracted water, internal reuse and water balance | Foreground measured/logged records | water_source; provider; water_grade; meter_id; meter_start_m3; meter_end_m3; tank_open_m3; tank_close_m3; reused_m3; slurry_water_kg; host_moisture_kg; weather_water_kg; release_water_kg; density_kg_m3; density_temperature_C | Meter actual external purchased and abstracted quantities separately; track internal recycling, tanks, wet/dry slurry analysis, evidenced host moisture/weather and actual water release/evaporation. Divide external entries by A; use actual density/temperature only where mass-volume conversion is required. | m3; kg; kg/m3; degC | Each fill/withdrawal/work window and campaign closure | Entire campaign plus attributable setup/control strip/rework and stock handover | Declared runway, machines/heads, work windows and supply/receiver gates | per reference flow | Meter calibration, tank checks, source/permit/provider documents, paired wet/dry sample and water closure; investigate residuals instead of assuming emission. |
| `cp_fuel` | `groove_finish` | Fuel issues, burned activity and outlets | Foreground measured/logged records | fuel_grade; equipment_id; issue_gross_kg; container_tare_kg; opening_stock_kg; opening_stock_upstream_burden; closing_stock_upstream_burden; outward_return_kg; closing_stock_kg; waste_collected_kg; total_spill_kg; spill_collected_kg; spill_released_kg; density_kg_m3; temperature_C; operating_hours | By actual grade derive net-tare gross issues and physical stock balance, transfer opening stock with its unconsumed upstream burden exactly once, and carry retained closing stock with remaining burden to the next custody/period ledger; do not recharge prior stock or lose its burden. Burned kg = opening + issues - closing - usable outward returns - collected waste - actual environmental release; collected spill appears once within waste and released spill once within release. Total spill is an audit partition, not another subtraction. Normalize input/output and burned activity separately by A. | kg; kg/m3; degC; h | Each issue, work window, return and incident | Entire campaign plus attributable setup/control strip/rework and stock handover | Declared runway, machines/heads, work windows and supply/receiver gates | per reference flow | Scale/delivery density evidence; grade and equipment compatibility; mutually exclusive custody outlets and balance uncertainty; no net-input plus duplicated return. |
| `cp_energy` | `groove_finish` | Externally purchased electricity | Foreground measured/logged records | provider; connection_id; meter_id; voltage_V; meter_start_kWh; meter_end_kWh; work_window; equipment_id; generator_boundary; overlap_dataset | Submeter attributable external electrical demand and assign shared-load periods with actual time/load evidence before division by A; identify generator supplied energy already charged through fuel. | kWh; V | Each work window and attributable setup/cleanup | Entire campaign plus attributable setup/control strip/rework and stock handover | Declared runway, machines/heads, work windows and supply/receiver gates | per reference flow | Meter calibration, supplier boundary, load attribution and zero duplicate generator-fuel charge; retain uncertainty and actual supply qualifiers. |
| `cp_materials` | `groove_finish` | Distinct supplied tools, lubricant, repair materials, packaging and unused returns | Foreground measured/logged records | product_id; formulation; supplier; lot_id; supplied_gross_kg; tare_kg; opening_stock_kg; opening_stock_upstream_burden; closing_stock_upstream_burden; outward_return_kg; closing_stock_kg; incorporated_or_used_kg; waste_kg; released_kg; blade_diameter_mm; blade_wear_mm; replacement_time; damage_zone_id; supplier_included_coverage | Record gross net-tare issue, opening physical stock and unconsumed upstream-burden transfer, true outward returns and retained closing physical stock with its carried-forward unconsumed upstream burden for each concrete identity. Preserve cross-period ledger ownership once; no recharge of opening stock or missing opening-stock burden. Include actual distinct absorbents/wipes/containment when used and their contaminated waste composition. Reconcile use, tool wear, waste/release and remedy incorporation. Retain approved compatible blade/remedy instructions and no duplicate bundled packaging/lubrication charge; divide each distinct exchange by A. | kg; mm | Each receipt/issue/replacement/return, remedy and closure | Entire campaign plus attributable setup/control strip/rework and stock handover | Declared runway, machines/heads, work windows and supply/receiver gates | per reference flow | Lot/scale/tare evidence, supplier composition and custody tickets; blade uniformity and job-induced remedy linkage; retained-stock burden carried forward, not emitted as output. |
| `cp_transport` | `groove_finish` | Actual freight legs and coverage | Foreground measured/logged records | cargo_identity; mode; provider; leg_id; origin; destination; net_cargo_kg; distance_km; loaded_trip; empty_vehicle_distance_km; vehicle_service_record; supplier_included_coverage; fuel_overlap | For each mode/provider leg multiply actual net cargo kg by actual km, allocate only documented campaign cargo and divide by A; retain empty-leg vehicle records and explicit model/dataset boundary, without inventing tonnes for an empty vehicle. | kg; km; kg*km | Every delivery/mobilization/demobilization/collection leg | Entire campaign plus attributable setup/control strip/rework and stock handover | Declared runway, machines/heads, work windows and supply/receiver gates | per reference flow | Bills, maps/odometer and loading records; verify kg*km chain and t*km factor 1000; provider inclusions prevent direct vehicle-fuel duplication. |
| `cp_assets` | `groove_finish` | Complete-life asset service and shared consumers | Foreground measured/logged records | asset_id; asset_type; manufacture_dataset; maintenance_dataset; replacement_dataset; eol_dataset; coverage_exclusions; consumer_job; consumer_node; reporting_period; observed_service; campaign_service; forecast_remaining_service; service_driver_unit; replacement_scenario; termination_scenario; eol_scenario; uncertainty; sensitivity; update_date | Enumerate every saw/vacuum/tanker/cleaner/generator/metrology asset and actual access/protection/containment/remedy equipment actually used, including bounded third-party provider resources once, complete-life burden coverage and all consumers/periods. Compute campaign service/complete-life service for each asset, then divide by A; service driver must match numerator/denominator. Retired assets use observed full history; operating assets use observed history plus justified remaining service and replacement/termination/EOL scenarios. | item; actual documented driver unit | Each asset/work window and lifecycle scenario update | Entire campaign plus attributable setup/control strip/rework and stock handover | Declared runway, machines/heads, work windows and supply/receiver gates | per reference flow | Coverage matrix excludes direct blades, fuel, electricity, lubrication, transport already charged. Denominator source, observed/forecast labels, uncertainty/sensitivity and update triggers required; missing evidence blocks finalization. |
| `cp_residuals` | `groove_finish` | Slurry, spent tools, packaging, fluids and remedy debris | Foreground measured/logged records | residual_identity; composition; receiver; waste_code; wet_gross_kg; tare_kg; dry_solids_kg; water_kg; opening_residual_stock_kg; closing_residual_stock_kg; removed_asphalt_dry_kg; blade_wear_kg; spill_collected_kg; damage_zone_id; transfer_time; treatment_coverage | Weigh net outgoing residual by concrete identity and receiver; paired dry-solids/water samples distinguish wet slurry, dewatered fines and separated water without duplicating components. Link spent blade/wear and actual remedy debris, plus contaminated cleanup consumables as distinct composition/receiver exchanges with absorbed fluid counted only once; all retained residual stock remains closure balance. Match approved waste disposition records and include required treatment once. | kg | Each collection/transfer/sample and closure | Entire campaign plus attributable setup/control strip/rework and stock handover | Declared runway, machines/heads, work windows and supply/receiver gates | per reference flow | Calibrated weigh/tare, representativeness and dry-solids method, receiver acceptance and custody, retained-host moisture and fines/tool reconciliation; no default density or recovery credit. |
| `cp_emissions` | `groove_finish` | Identified engine species, fugitive particles and actual environmental release | Foreground measured/logged records | equipment_id; fuel_grade; burned_fuel_kg; substance; particle_size_um; receiving_medium; compartment; measured_release_kg; factor_value; factor_unit; factor_source; factor_applicability; factor_uncertainty; total_spill_kg; collected_spill_kg; released_spill_kg; water_density_kg_m3; temperature_C | For each actual substance/medium use measured release or burned fuel times documented applicable species factor with matching units. Record method, engine/load/fuel and uncertainty; air particles require size/composition. Incidents partition total into collected and released; actual water discharge/evaporation needs outlet/measurement and density where converted. Divide actual species mass by A. | kg; um; declared factor unit; kg/m3; degC | Each applicable work window/test and each incident | Entire campaign plus attributable setup/control strip/rework and stock handover | Declared runway, machines/heads, work windows and supply/receiver gates | per reference flow | Method/factor provenance and applicability; species/compartment resolution; no residual-as-emission, generic NOx/VOC identity or duplication of supplier electricity/freight emissions. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `campaign_normalization` | all inventory rows | Each distinct attributable campaign exchange quantity divided by positive accepted polygon-union A gives its quantity per 1 m2. Reference service is exactly 1 m2. Repeated passes do not enlarge A; failed/abandoned-zone and control-strip burdens remain assigned with disclosed causality. | cp_acceptance; relevant row protocol; distinct campaign exchange quantity; A | Distinct reference-normalized exchange |  |
| `burned_fuel_balance` | `fuel_supply`, `combustion_emissions`, `spent_fluids`, `unused_returns`, `liquid_release` | By actual grade burned fuel = opening stock + gross net-tare issues - closing stock - usable outward returns - collected waste - actual release. Total spill partitions into collected and released portions and is not another subtraction. | cp_fuel; cp_materials; cp_residuals; cp_emissions | Burned fuel kg for applicable factors; separate gross input and outlets per reference flow |  |
| `asset_share` | `capital_service` | Asset-equivalent share = campaign service divided by complete-life service; reference quantity = share divided by A. Use same physical driver and complete life across all jobs/periods, observed plus justified forecast when operating; include complete coverage and exclude direct rows. | cp_assets; cp_acceptance | item of each concrete asset-equivalent per reference flow |  |
| `cargo_leg_service` | `freight_service` | For each actual provider/mode sum net cargo kg times leg km then divide by A; convert t*km using factor 1000 only. Empty-leg service follows documented actual vehicle dataset boundary. | cp_transport; cp_acceptance | kg*km by actual freight identity per reference flow |  |
| `combustion_species` | `combustion_emissions` | For each actual engine/fuel/species, species kg = burned fuel kg times applicable factor kg species/kg fuel, or actual measured species kg; divide by A. Other factor units require evidenced compatible activity conversion before use, not an assumed heating value. | cp_fuel; cp_emissions; cp_acceptance | kg of each identified species/air compartment per reference flow |  |
| `wet_residual_closure` | `captured_slurry`, `spent_blades`, `liquid_release`, `fugitive_particles` | Net wet slurry = measured water + dry solids for the same outgoing lot. Reconcile removed host dry material and blade wear with captured solids, actual escaped particles and residual stock; water balance separately tracks external supply, host moisture, weather, slurry, stock and actual release/evaporation. Unknown residual remains investigation. | cp_water; cp_materials; cp_residuals; cp_emissions | Distinct mass/water closures and flagged uncertainty; no invented emission |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_actual_route` | `groove_finish` | Complete possession and actual equipment/head/day/pass lineage with qualified asphalt and adopted geometry; no presumed quantities from CPC or payment rate. | cp_acceptance; approved method; incoming condition and handback records |
| `dq_complete_campaign` | all inventory rows | Cover setup/control strip, productive cutting, continuous recovery/cleanup, idle windows, changeovers, replacements, job-induced repair and final disposal without unsupported zeros. | All linked CPs; stock and period reconciliation |
| `dq_uncertainty` | all inventory rows | Keep meter/scale/survey/sample error, temporal variability, attribution and scenario uncertainty; obtain comparable empirical ranges before final limits. Exact 1 m2 is reference definition, not observed yield. | Calibration certificates, paired samples, actual run data, scenario sensitivity |
| `dq_asset_evidence` | `capital_service` | Document all service periods/consumers, complete-life sources and justified forecast components; no universal life assumption, duplicate direct tool coverage or observed future retirement requirement. | cp_assets coverage matrix and denominator/scenario evidence |
| `dq_final_binding` | all inventory rows | Resolve each concrete identity/support chain before final TIDAS exchange; disclose unresolved card identities/quantity evidence and prohibit conceptual umbrella binding. | Verified identity evidence and row-addressable manifest metadata |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `check_scope_start` | `groove_finish` | Verify retained existing asphalt scope, incoming soundness, explicit owner of prior repair, current project adoption, approved method/guides/control strip, possession dates and actual weather suitability. Do not import the new-pavement 30-day cure clause as a universal waiting rule for existing qualified asphalt. | `faa-p621-2018` |
| `check_geometry_zone` | `accepted_grooving` | Check documented project resolution/criterion hierarchy for the printed nominal spacing 38 mm (-3/+0) versus separately printed 34 mm minimum acceptance; retain both original clauses without universal correction or silent SI/inch equivalence. Check project-adopted P-621 geometry/alignment, omitted edge/light/joint zones and actual signed sampling results. P-621 uses five widthwise zones, five consecutive grooves near middle blade of every head, each machine/day, at least three measurement rounds/day. Record selected-unit instrument range/resolution and actual acceptance/adjustment thresholds; surface variability can require more tests. | `faa-p621-2018` |
| `check_unique_area` | `accepted_grooving` | Require positive accepted polygon-union A, excluded zones and accepted/rejected/WIP reconciliation, not blade length, void cross section, summed multiple passes or control-strip co-product. Reference/output property is Area, amount 1 m2, support chain verified independently; service UUID unresolved blocks final exchange binding. |  |
| `check_custody_balance` | all inventory rows | Reconcile opening-stock physical quantity/upstream-burden transfer and retained closing-stock carryforward across periods exactly once, then reconcile net-tare gross issues plus opening stocks against outward usable returns, closing stocks, transformation/consumption, collected waste and evidenced release per distinct identity. Burned fuel derives from mutually exclusive outlets. Slurry wet mass, dry solids, water and blade wear reconcile with actual removed asphalt and moisture/weather terms; unknown residual is investigated, not automatic emission. |  |
| `check_asset_and_runs` | `capital_service` | Require indexed manufacture/service/maintenance/replacement/EOL phases, all consuming jobs/periods, justified complete-life denominator and observed/forecast labels, scenario sensitivity and updates. Confirm no shared run, blade, fuel, electricity or capital charge appears twice. Missing scenario evidence or ownership blocks completion. |  |
| `check_reject_and_cleanup` | `groove_finish` | Require every off-spec/damaged zone linked to repeat work or documented exit, all attributable remedies and final handback, continuous cleanup, approved residual receiver and no assumed sewer disposal. Rejected/unfinished surface is not accepted output. | `faa-p621-2018` |
| `check_identity_range` | all inventory rows | Verify actual exchange identity, state, gate, direction, provider/receiver, species and medium plus property/unit before final UUID binding. Require row-applicable CP/calculation and either justified range or explicit evidence need; no universal resource/defect/lifetime/emission factor from technical groove specification. Unknown quantities remain disclosed blockers. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground incremental construction-alteration service package for accepted existing-asphalt grooving footprint |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Runway alteration service with same retained asphalt, wet rectangular transverse saw route, adopted geometry, campaign and acceptance gate; downstream process/lifecyclemodel projection |
| excluded_use | New pavement asset production, other substrate/groove technology, complete airport operation, friction coefficient or service-life guarantee, avoided replacement credit |
| required_metadata | Site/runway coordinates; retained-host qualification/prior-repair owner; actual contract/unit system; campaign/run/head/weather; footprint/exclusions; measured geometry and acceptance; product/provider/receiver gates; supply/stock/waste balances; equipment and complete-life scenarios |
| required_quality_disclosure | Unresolved identities, missing range evidence, meter/scale/survey uncertainty, actual variability, CP coverage, allocation assumptions, observed versus forecast asset life, emission factors and species, residual destinations, excluded/unfinished zones |
| update_trigger | Changed geometry/substrate, route, provider/receiver, energy supply, equipment/blades, defect route, asset scenario, contract, acceptance or material evidence; resolve flow identities before final exchange publication |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | `official_guidance` | United Nations CPC Version 3.0 explanatory notes, 30 June 2025, printed p284; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope of runway construction, repair and alteration |
| `faa-p621-2018` | `official_guidance` | FAA AC 150/5370-10H, 21 December 2018, errata updated 19 August 2020, Item P-621 printed pp537–540; https://www.faa.gov/documentLibrary/media/Advisory_Circular/150-5370-10H.pdf | Adopted rectangular geometry, existing-pavement qualification, wet saw equipment, continuous capture/cleanup, control strip, damage remedy, zone testing and accepted area |
