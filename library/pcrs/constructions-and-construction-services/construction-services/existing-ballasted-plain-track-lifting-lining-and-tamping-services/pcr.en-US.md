---
pcr_id: pcr.existing-ballasted-plain-track-lifting-lining-and-tamping-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing ballasted plain track lifting, lining and tamping services

## 1. Scope and Applicability

This PCR covers one bounded geometry-correction maintenance campaign on a qualified existing ballasted plain railway track. Retained rails and sleepers are lifted and lined to approved target geometry while vibrating tines fill and compact ballast beneath sleepers. Include premeasurement, possession/protection, actual necessary ballast redistribution or top-up, prescribed stability measures, repeats, defect remedies, postmeasurement and authorised maintenance handback. [plasser-tamping-precision; plasser-tamping-control]

Exclude new formation or track laying; rail, sleeper or fastening renewal; turnouts and crossings; slab track; full ballast undercutting, cleaning or replacement; structural defect repair outside the qualified host boundary; electrification/signalling installation; and train transport. Prior defects preventing treatment require an identified separate remedy owner and demonstrated qualified starting condition. Damage caused by this campaign remains attributable to this campaign. A measured geometry result does not confer unrestricted operating speed or whole-line approval.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-ballasted-plain-track-lifting-lining-and-tamping-services |
| classification_refs | CPC 3.0 54212; narrower maintenance subset of General construction services of railways |
| covered_products | Accepted lifting, lining and tamping correction of retained ballasted plain track |
| excluded_products | New railway asset; rail/sleeper renewal; turnout or slab-track treatment; full ballast renewal; train transport |
| representative_product | One metre of accepted treated track centreline at declared maintenance handback |
| production_route | Qualified retained track; approved geometry and possession; cyclic lifting/lining/tine insertion/squeezing/compaction; actual profiling and stability closure; inspected handback |
| market_state | Maintenance service accepted by the track owner under recorded residual restrictions |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted geometry-correction maintenance of existing ballasted plain track |
| How much | 1 m accepted treated track centreline |
| How well | Approved target geometry, ballast support/profile and prescribed stability and defect closure; owner-authorised maintenance handback with actual restrictions |
| How long or cycle | One declared campaign, including all possession windows and repeat passes until its accepted handback; no future maintenance guarantee; shared asset life and reporting periods declared separately |
| reference_flow_link | `accepted_track_geometry_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted lifting, lining and tamping service on existing ballasted plain track |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | Track ID and accepted chainages; gauge; retained rail/sleeper/ballast condition; approved target geometry and tolerances/source; machine/tamping technology; possession windows; actual stability method; postwork test coverage; handback authority/date; residual restrictions and closure responsibility |

Declare every required qualifier in the foreground package. L is the measured union of accepted chainage intervals on each identified track in m. Overlapping passes, failed work and repeat tests do not increase L; parallel tracks have separate IDs. Reject unresolved or zero L. Campaign burdens are divided by L, including unsuccessful work attributable to this accepted campaign. The metre measures treatment service, not newly installed rail.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_length` | reference product | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Measure accepted centreline chainage intervals using cp_acceptance; reconcile calibrated survey units, track ID and handback signature. One reference output is 1 m. |
| `gross_net_tare` | material inputs and custody outputs | Mass | kg | Remove vehicle/container tare from gross weighing; receipts are gross supplied material before outward return netting. Keep moisture basis and actual lot identity. |
| `energy_units` | fuel_gross; electricity | Mass; Energy | kg; kWh | Record actual fuel variant and net material mass, not engine nameplate power. Electricity uses metered imported kWh; any conversion needs a traceable actual unit factor and property chain. |
| `geometry_units` | cp_acceptance | Length; Duration | mm; m; s | Record actual gauge/level/alignment/lift, spatial base length, temperatures in degC and work duration in s with instrument and adopted tolerance source; no universal settings. |
| `transport_units` | mobilisation_transport | mass*distance | kg*km | Use actual cargo kg and loaded km by leg; compatible t*km requires the verified listed factor 1000. Empty returns belong in the provider boundary or explicit vehicle activity, never invented cargo. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing qualified retained plain track with known rail, sleeper and ballast state; actual possession/protection and approved geometry available |
| starting_condition_role | Host asset and retained stock, not purchased new track or ballast input |
| product_classification_scope | Only retained plain-track geometry-correction maintenance within CPC 3.0 54212 |
| recursive_input_rule | An external same-category subcontract is a separately bounded purchased input with owner, treated intervals and upstream scope; exclude its duplicate direct resources; no self-recursive final service |
| upstream_dataset_requirement | Verified actual material/energy/transport/provider datasets at declared gates; disclose included packaging, direct operation, maintenance, tooling and capital |
| disclosure | Campaign/window/period IDs; retained host baseline; supplied and returned lots; failures/rework; stability and protection ownership; full asset life and inventory carry-over; missing evidence |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `retained_host` | track_geometry_correction | Retained track/ballast is not a new material input and earns no avoided replacement credit. Include incremental handling and actual top-up; qualified prestate and accepted poststate are mandatory. | plasser-tamping-precision; plasser-tamping-control |
| `cycle_owner` | track_geometry_correction | One physical forming responsibility owns the interdependent lifting/lining/tine-insertion/squeezing/under-sleeper compaction cycle. There is no independently accepted lifted-track intermediate. Include actual profiling, failed cycles, clean-up, worksite protection, geometry measurement and required stability closure under this responsibility. | plasser-tamping-control |
| `handback_owner` | track_geometry_correction | Actual adopted track-owner criteria govern geometry, stability, temperature, defects, possession and speed restrictions. Required additional stabilisation has an actual operator/resource owner or explicitly bounded provider; it cannot vanish as a future third-party task. Manufacturer description is not operating authority. | plasser-tamping-precision |
| `stock_custody` | material flows | Reconcile opening stock plus gross net-tare receipts against incorporation/use, true outward returns, waste, evidenced releases and retained closing stock per material. Closing stock is not an outward exchange; carry its burden forward. No return is netted then also counted as output. |  |
| `coverage_owner` | all inventory rows | Assign each physical event to this node and one campaign/window/period. Purchased included service excludes duplicate direct resources. Disclose mobilisation, protection, tines/spares, hydraulic make-up/removal, cleaning and complete-life asset coverage; actual absence needs records. |  |
| `period_assets` | shared_asset_service | Enumerate fleet, tines/tooling, survey and protection equipment with all consuming jobs/nodes/periods and life phases manufacture, maintenance/replacement and EOL. Separate directly inventoried fuel and spares from provider/asset coverage. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual machine and auxiliary fuel supplied (`fuel_gross`)

Process / prospective direction / type: `track_geometry_correction` / `inputs` / `product`.

Record each actual diesel or other fuel variant separately for tamping, profiling, direct stabilisation, protection, cleanup and site moves owned here. Gross input precedes true fuel returns, recovered fuel waste or releases. Exclude transport/provider fuel already included elsewhere.

Range evidence need: Need actual fuel variant, metered net-tare deliveries, opening/closing tanks, returns and mode-resolved operation; no nameplate-power or marketing productivity factor.

- Collection subject: Actual machine and auxiliary fuel supplied
- Flow property / unit: Mass / kg
- Amount rule: Gross fuel supplied across the campaign boundary in kg divided by L; actual outward unconsumed returns stay separate. Total opening and closing tank quantities determine burned activity separately. Opening-stock material burden used by this campaign and closing-stock burden carried forward are documented once through the stock-burden bridge, without adding a second opening-draw exchange or subtracting closing stock twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

#### Collection requirement: Actual tamping tine and wear-component supply (`tine_components`)

Process / prospective direction / type: `track_geometry_correction` / `inputs` / `product`.

Identify tine, cutting/wear insert or other actual component separately with material, compatible machine, replacement event and supplier coverage. Do not consume a full machine or all tines by assumption. Exclude components already included in complete-life service.

Range evidence need: Need actual replacement/wear history, part type and attributable service life; condition-dependent tamping does not set universal wear.

- Collection subject: Actual tamping tine and wear-component supply
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare supplied component mass by exact compatible part divided by L; evidence-based shared wear is separately attributable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `plasser-tamping-control`

#### Collection requirement: Other actual campaign replacement parts (`other_spares`)

Process / prospective direction / type: `track_geometry_correction` / `inputs` / `product`.

Conditional requirement for actual hoses, seals or other distinct spare exchanges identified from campaign records; expand each actual part with separate identity and quantity, never combine different materials. Do not duplicate hydraulic fluid, grease, tines or asset/provider maintenance.

Range evidence need: Need actual failure/replacement event, part composition and scope evidence; absence needs maintained event log.

- Collection subject: Other actual campaign replacement parts
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare supply per actual distinct part divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual mobilisation and material transport service (`mobilisation_transport`)

Process / prospective direction / type: `track_geometry_correction` / `inputs` / `product`.

Record distinct road/rail modes, cargo, origin/destination, ballast/spares delivery, machine mobilisation, waste/return legs and included upstream transport. Own the vehicle empty return within provider scope or explicit vehicle activity; no fake cargo tonnes. Rail travel by maintenance equipment is not final train transport product.

Range evidence need: Need actual cargo/machine masses, routes, loaded legs and provider empty-return/fuel/capital coverage; kg*km alone does not prove full mobilisation burden.

- Collection subject: Actual mobilisation and material transport service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual leg cargo_kg multiplied by loaded_distance_km with evidenced campaign share, divided by L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

#### Collection requirement: Actual bounded possession and protection service (`protection_service`)

Process / prospective direction / type: `track_geometry_correction` / `inputs` / `product`.

Conditional provider exchange for actual worksite protection/possession resource provision. Declare package definition, period, personnel/equipment and included energy/capital. For direct provision use actual fuel, electricity, consumables and asset records instead; approval documents alone are not purchased physical service.

Range evidence need: Need actual contract unit, service package, coverage and campaign work windows; no default one package or unit equivalence.

- Collection subject: Actual bounded possession and protection service
- Flow property / unit: Count / item
- Amount rule: Measured actual purchased service quantity with declared provider unit and scope divided by L; item only for a genuinely defined service package.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`

#### Collection requirement: Actual bounded required stability-completion service (`stability_service`)

Process / prospective direction / type: `track_geometry_correction` / `inputs` / `product`.

Only where the actual track-owner method requires external dynamic stabilisation or another explicitly approved stability measure. Declare technology, track intervals, passes and included resource boundary. Direct operation is recorded in energy/material/assets instead. No universal stabiliser or unrestricted-speed inference.

Range evidence need: Need actual approved stability method/contract unit, operator and resource coverage; manufacturer capability supplies no package count.

- Collection subject: Actual bounded required stability-completion service
- Flow property / unit: Count / item
- Amount rule: Measured actual purchased stability service quantity in its verified provider unit divided by L; item only for a defined package.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `plasser-tamping-precision`

#### Collection requirement: Attributed complete-life equipment service (`shared_asset_service`)

Process / prospective direction / type: `track_geometry_correction` / `inputs` / `product`.

Identify each machine, regulator/stabiliser where used, tine/tooling not directly charged, survey/protection equipment and support asset. An item-equivalent means the stated complete life of that specific asset, not a full machine consumed per campaign. Use bounded verified provider service instead where it demonstrably covers the same life phases. Exclude separately inventoried fuel, spares and maintenance.

Range evidence need: Need each asset manufacture/maintenance/replacement/EOL scope, observed and forecast complete-life activity, all consuming jobs/periods, source and sensitivity; missing evidenced denominator blocks finalisation.

- Collection subject: Attributed complete-life equipment service
- Flow property / unit: Count / item
- Amount rule: Per actual asset, complete_life_service_fraction = campaign_activity / complete_life_activity; the resulting item-equivalent fraction divided by L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

#### Collection requirement: Separately supplied actual packaging (`packaging_supply`)

Process / prospective direction / type: `track_geometry_correction` / `inputs` / `product`.

Record actual separately supplied bags, containers or other packaging as distinct exchanges when upstream material service excludes them. Reusable container tare is not ballast/fluid mass; include actual reusable container service where separately owned rather than consume it once.

Range evidence need: Need actual packaging material, ownership, included supplier burden and reuse/return evidence; never add second packaging production already in supplied material.

- Collection subject: Separately supplied actual packaging
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare supply per actual packaging material divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual direct water resource withdrawal (`water_withdrawal`)

Process / prospective direction / type: `track_geometry_correction` / `inputs` / `elementary`.

Only direct resource withdrawals cross the elementary boundary. Specify surface or groundwater location and authority; no duplication of purchased water.

Range evidence need: Need actual abstraction source/medium, meter and conversion evidence; no assumed direct withdrawal.

- Collection subject: Actual direct water resource withdrawal
- Flow property / unit: Mass / kg
- Amount rule: Measured direct abstraction mass from each actual resource/medium divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual outward unused ballast return (`ballast_return`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `product`.

Only unused usable supplied ballast transferred out of campaign custody is a product return. Distinguish displaced retained host ballast, waste and closing stock. Gross receipt input has not been netted by this return; specify burden carried with returning lot.

Range evidence need: Need signed return weight, moisture basis, lot and receiving owner; do not infer a return from unused stock remaining onsite.

- Collection subject: Actual outward unused ballast return
- Flow property / unit: Mass / kg
- Amount rule: Measured net-tare outward returned ballast by original lot divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual outward unconsumed fuel return (`fuel_return`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `product`.

This return is mutually exclusive with burned fuel, retained closing tank inventory, recovered waste and species releases. Preserve actual fuel identity, custody and carried burden; gross fuel input is not reduced then counted again.

Range evidence need: Need actual returned-fuel measurement and original tank/lot ledger; no assumed return fraction.

- Collection subject: Actual outward unconsumed fuel return
- Flow property / unit: Mass / kg
- Amount rule: Measured unconsumed fuel transferred out of campaign custody divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

#### Collection requirement: Actual outward unused supplied-material returns (`other_product_returns`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `product`.

Expand distinct actual unused hydraulic fluid, grease, spares and packaging returns individually. Never sum unlike materials. Closing inventory and whole equipment removal are not consumable returns. Avoid overlap with ballast/fuel return cards.

Range evidence need: Need material-specific return documents, lot identity, condition, receiver and burden carry-over; unknown surplus does not imply outward product.

- Collection subject: Actual outward unused supplied-material returns
- Flow property / unit: Mass / kg
- Amount rule: Measured net-tare outward returns per exact material/part divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual removed ballast and trackside solids waste (`ballast_solid_waste`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `waste`.

Actual surplus unusable ballast, fines or debris leaving custody is distinct from redistributed retained ballast and usable returns. Split materially different or hazardous waste types with receiver and treatment; full ballast replacement is excluded. No unknown balance residual is emitted dust.

Range evidence need: Need actual removed mass, retained/supplied origin, moisture, contamination, receiver and treatment; no universal loss factor.

- Collection subject: Actual removed ballast and trackside solids waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net-tare waste mass by actual composition/moisture and disposal batch divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual packaging waste (`packaging_waste`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `waste`.

Separate actual plastic, metal or fibre packaging into distinct exchanges. Returned reusable containers are custody returns, retained containers closing stock, and never waste by assumption.

Range evidence need: Need actual packaging composition, weights and route; supplier-included upstream packaging is not a second supply burden.

- Collection subject: Actual packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net-tare discarded packaging by material and route divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual recovered spill and cleanup waste (`recovered_spill_waste`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `waste`.

An incident partition distinguishes recovered fluid/waste, actual elementary species releases and retained residue. Absorbent separately supplied when used is recorded under spill_absorbent with its exact material identity. Incident total is not subtracted again after outlet components.

Range evidence need: Need incident mass partition, cleanup inputs, recovered components and receiver evidence; no hypothetical routine spill rate.

- Collection subject: Actual recovered spill and cleanup waste
- Flow property / unit: Mass / kg
- Amount rule: Measured recovered fluid, absorbent and contaminated solids as separately identified waste components divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_incidents`

#### Collection requirement: Actual combustion emission species to air (`exhaust_species`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `elementary`.

Expand CO2, CH4, N2O and other actual reported pollutants individually using engine/fuel/load-specific evidence. Distinguish fossil/biogenic carbon and reported NOx basis; only actual substance identity, particle fraction and air compartment can bind. No aggregate exhaust mass exchange.

Range evidence need: Need actual burned activity, engine/fuel/mode factor source, oxidation/carbon basis, uncertainty and substance/medium; manufacturer power is not activity.

- Collection subject: Actual combustion emission species to air
- Flow property / unit: Mass / kg
- Amount rule: For each verified species, burned_fuel_kg multiplied by applicable species_factor_kg_per_kg, or measured release_kg; divide by L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`

#### Collection requirement: Actual handling dust species and particle fraction to air (`dust_species`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `elementary`.

Separate actual ballast dust species/size fractions and receiving air medium from captured fines waste. Do not equate all handled ballast or mass-balance residual with airborne particulates. Account for actual suppression/capture efficiency without duplicate outlet.

Range evidence need: Need measured species/particle fraction or documented source matched to ballast, moisture, handling and controls; no generic dust loss.

- Collection subject: Actual handling dust species and particle fraction to air
- Flow property / unit: Mass / kg
- Amount rule: Measured airborne species/particle-fraction release or actual supported handling_activity multiplied by matching factor; divide by L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`

#### Collection requirement: Actual uncontained fluid species release to receiving medium (`oil_release_species`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `elementary`.

Expand actual hydraulic/fuel/grease constituents separately for soil, freshwater or air as evidenced. Oil mixture identity does not justify a single elementary substance. Recovered fluid is waste; partition total incident once and do not assume all unrecovered mass reaches water.

Range evidence need: Need incident fluid composition, recovery partition, actual receiving medium and species factors; unknown fate remains data gap.

- Collection subject: Actual uncontained fluid species release to receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-derived uncontained species mass by actual medium divided by L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_incidents`

#### Collection requirement: Actual direct water release to receiving medium (`water_release`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `elementary`.

Record only actual direct discharged or evaporated water, separately by medium and actual contaminant species. Balance purchased/abstracted water, retained host moisture, weather, carry-over and waste-water custody; residual uncertainty is not automatic discharge.

Range evidence need: Need actual water balance, outlet monitoring, medium and any temperature/density/weather evidence; not a standard tamping exchange.

- Collection subject: Actual direct water release to receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Actual measured water mass crossing to identified environment divided by L; collected effluent is a waste stream.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`

#### Collection requirement: Actual removed service-fluid waste (`removed_fluid_waste`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `waste`.

Each physically separate actual waste stream, composition/state and receiver requires its own atomic exchange. This collection requirement is not one combined waste flow; a genuinely unseparated physical mixture may use its own evidenced mixture identity, but separated outlets must never be recombined.

Separate hydraulic waste, lubricants and actual contaminated washwater. Preserve water/solid components and receiving treatment. No duplicate recovered-spill waste, retained oil or provider-included maintenance disposal.

Range evidence need: Need actual drainage/maintenance records, fluid identity, contamination and treatment custody; no assumed annual change per campaign.

- Collection subject: Actual removed service-fluid waste
- Flow property / unit: Mass / kg
- Amount rule: Measured removed fluid waste by exact fluid/contamination stream divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual removed worn parts waste (`wear_parts_waste`)

Process / prospective direction / type: `track_geometry_correction` / `outputs` / `waste`.

Each physically separate actual waste stream, composition/state and receiver requires its own atomic exchange. This collection requirement is not one combined waste flow; a genuinely unseparated physical mixture may use its own evidenced mixture identity, but separated outlets must never be recombined.

Track actual worn tines, inserts, hoses or seals to replacement and receiver. Retain part/composition separation; reused serviceable parts are actual product custody if supplied elsewhere. Do not add complete machine EOL already in asset life service.

Range evidence need: Need replacement-event linkage, material-specific removed mass and actual reuse/recovery/disposal evidence.

- Collection subject: Actual removed worn parts waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net-tare removed component waste by distinct part/material divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| track_geometry_correction | Retained plain-track geometry correction and maintenance handback | required | Qualified retained ballasted plain track and approved work campaign; actual stability and top-up only where prescribed/used | forming responsibility with premeasurement, interdependent cycle, actual profile/stability closure and handback | 1 m accepted treated centreline |

Production mode is a campaign run across indexed possession windows, with cyclic sleeper work, actual idle/setup/changeover and repeats. The pre-form state is retained track with measured geometry faults and declared ballast condition. The post-form state is owner-accepted corrected track at the declared restricted or unrestricted maintenance gate. Failed geometry/support/stability is reworked in this node and retested; unresolved failed intervals never become final output. Removed surplus and wastes leave by actual custody paths. Existing retained ballast redistribution is internal stock movement, not purchase or co-product. Actual external stability providers are recorded once; directly operated stability equipment belongs in this node resource and asset records.

### Process: Retained plain-track geometry correction and maintenance handback (`track_geometry_correction`)

#### Inputs

##### Product flows

###### Supplied natural railway ballast top-up (`ballast_topup`)

Only newly supplied natural railway ballast crosses the purchasing boundary. Retained host ballast handled or redistributed stays internal. Keep rock type, grading, supplier gate, moisture basis and actual accepted track destination.

Range evidence need: Need actual ballast grade/condition, lift deficit and measured receipts over accepted L; manufacturer cycle description supplies no kg/m interval.

- Selected flow: Supplied natural railway ballast top-up
- Flow property / unit: Mass / kg
- Amount rule: Net-tare gross campaign receipts of each actual ballast specification divided by L; no return netting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `plasser-tamping-precision`

###### Imported operating electricity (`electricity`)

Where electric/hybrid equipment, survey instruments or protection devices draw electricity, identify source, meter and charging losses at declared boundary. Separate supplier-included electricity; no assumed electrification.

Range evidence need: Need actual equipment power supply, interval meters and charging boundary; Energy support identity remains to be verified against actual exchange.

- Selected flow: Imported operating electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual metered imported kWh attributable to the campaign divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Supplied hydraulic make-up fluid (`hydraulic_makeup`)

Record actual makeup or campaign maintenance fluid, including caused leaks/remedies where owned. Match removed fluid, recovered spill, species release and retained stock separately. Provider-included lifetime maintenance is not also direct input.

Range evidence need: Need actual fluid specification and issues/returns/leak records; make-up is not automatic full-system replacement.

- Selected flow: Supplied hydraulic make-up fluid
- Flow property / unit: Mass / kg
- Amount rule: Net-tare gross campaign hydraulic-fluid receipts/issues by exact formulation divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Supplied lubricating grease (`grease`)

Grease is distinct from hydraulic oil and engine fuel. Include only the recorded incremental campaign share, with opening/closing stock and actual return/waste disposition.

Range evidence need: Need actual grease identity, weighed issues and maintenance attribution; no generic lubrication percentage.

- Selected flow: Supplied lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare issues by actual grease specification divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Purchased cleaning or dust-control water (`supplied_water`)

Include only water actually supplied for cleanup or dust suppression under this node. Separately identify retained host moisture and weather; water already in purchased service remains provider-owned.

Range evidence need: Need actual water source, use, calibrated meter and any density conversion; not inferred from a dry tamping route.

- Selected flow: Purchased cleaning or dust-control water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased water mass divided by L; volume conversion requires actual density/temperature evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Actual spill-cleanup absorbent supply (`spill_absorbent`)

Only actual cleanup absorbent supplied for a campaign incident is recorded; distinguish absorbent itself from recovered fluid and contaminated host solids. Keep material identity, source and eventual waste custody. Do not duplicate provider-included cleanup supplies.

Range evidence need: Need actual incident, absorbent material and measured issues/stock/return; no routine spill or cleanup consumption assumed.

- Selected flow: Actual spill-cleanup absorbent supply
- Flow property / unit: Mass / kg
- Amount rule: Gross net-tare supplied absorbent mass per actual material divided by L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted lifting, lining and tamping service on existing ballasted plain track (`accepted_track_geometry_service`)

The sole final reference output is actual accepted corrected track centreline at owner-authorised maintenance handback. L aggregates distinct accepted intervals; repeats and failed intervals never increase final output. Retain track/geometry/support/stability/handback qualifiers.

Range evidence need: Exactly 1 m defines the reference, not a statistical process range. Need actual accepted L, survey accuracy, adopted geometry/stability tolerances and authority for every interval; no universal performance range.

- Selected flow: Accepted lifting, lining and tamping service on existing ballasted plain track
- Flow property / unit: Length / m
- Amount rule: 1 m
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `plasser-tamping-precision`; `plasser-tamping-control`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `campaign_share` | all inventory rows | Assign directly attributable quantities to the campaign, then divide campaign totals by measured accepted L. Allocate shared mobilisation/idle/protection by evidenced causal activity across every receiving job/window, with shares summing to one. Document driver and sensitivity rather than assume length describes every shared event. |  |
| `rework_retention` | track_geometry_correction | Retain failed tests, repeated tamping, additional stability, remedy and cleanup burdens in the producing campaign. Unaccepted intervals have no accepted output; disclose their burden destination rather than silently excluding them. No separate output for each pass. |  |
| `asset_life_share` | shared_asset_service | For each asset, calculate its complete-life attributable service fraction from observed history plus justified prospective remaining service/replacement/termination/EOL when in service. Enumerate all consuming jobs/nodes/periods; use evidenced comparable activity units, sum fractions to one, label forecasts, test sensitivity and update. Missing life coverage or denominator blocks finalisation. |  |
| `period_stock` | material flows; shared_asset_service | Assign receipt/use/return/replacement/EOL events to explicit periods and prevent carry-over stock or asset coverage from receiving a second charge. For fuel and other materials, bridge gross boundary exchanges to burden attribution with inherited opening-stock burden actually used and closing-stock burden carried forward, each linked to its source period and recorded once. Neither stock balance is a fictitious outward product flow. Actual return value or waste recovery is not an automatic avoided-product credit; disclose the chosen actual burden handoff. |  |
| `provider_partition` | stability_service; protection_service; mobilisation_transport; shared_asset_service | Retain one owner for each service and its included direct fuel, emissions, tooling, maintenance and capital. Split contracted scope or direct inventory at documented interfaces. Returned material, recovered waste and the maintenance service are not assumed joint sale co-products. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | track_geometry_correction | Accepted length and pre/post geometry/stability/handback | survey and acceptance record | campaign_id; window_id; period_id; track_id; chainage_start_m; chainage_end_m; accepted_flag; gauge_mm; level_mm; alignment_mm; geometry_base_m; target_geometry; actual_lift_mm; tamping_depth_mm; squeezing_duration_s; vibration_frequency_Hz; hydraulic_pressure_Pa; actual_pass_count; machine_setting_source; ballast_condition; support_profile; stability_method; actual_temperature_degC; geometry_tolerance_mm; temperature_limits_degC; tolerance_source; instrument_id; calibration; pretest_id; posttest_id; defect_id; repeat_pass_id; handback_authority; handback_time_utc; restrictions; closure_owner | Measure pre/post geometry with calibrated actual system and adopted spatial bases/tolerances; retain actual tamping depth, squeeze duration, vibration frequency, hydraulic pressure and pass counts with their machine instruction/approved setting source and units, without a universal value; retain approved work/possession and target source. Map distinct accepted intervals, remove overlap, record actual stability evidence/defect closure and signed restricted or unrestricted handback. L is union accepted centreline metres by track, not pass distance. | m; mm; degC; s; Hz; Pa | Every treated interval, failed test, repeat and handback | All campaign windows, setup/repeats/cleanup and linked source periods | Identified track intervals and attributable provider/asset scopes | per reference flow | Traceable calibrated survey, target/tolerance adoption and signed authority; zero or unresolved L blocks dataset |
| cp_materials | track_geometry_correction | Material supply/stock/return/waste and water | weighing, issues and custody ledger | campaign_id; window_id; period_id; event_id; transfer_id; lot_id; material_identity; part_id; supplier_gate; owner; opening_stock_kg; scale_gross_kg; vehicle_container_tare_kg; gross_receipt_kg; issue_kg; incorporation_or_use_kg; return_kg; waste_kg; released_species_kg; closing_stock_kg; moisture_basis; dry_solids_kg; water_kg; measured_volume_m3; density_kg_per_m3; temperature_degC; weather_water_kg; source_medium; destination; treatment_route; included_upstream_scope | Weigh gross less vehicle/container tare; do not net returns. Preserve exact lots, moisture and stock burden history. Pair outward custody with transfer IDs and receiver. Expand each distinct material/part/waste, track host ballast separately, calibrate water meters and document any actual density conversion. Reconcile material-specific opening plus receipts to use/incorporation, returns, waste, evidenced releases and closing stock; flag residual. | kg; m3; kg/m3; degC | Each receipt/issue/return/replacement/waste and period closing stock | All campaign windows, setup/repeats/cleanup and linked source periods | Identified track intervals and attributable provider/asset scopes | per reference flow | Scale/meter certificates, supplier documents and signed custody; retained stock not output; no unexplained residual emission |
| cp_energy | track_geometry_correction | Fuel/electricity, burns and returns | tank and meter records | campaign_id; window_id; period_id; event_id; machine_id; fuel_identity; engine_technology; load_mode; operating_duration_s; idle_duration_s; initial_tank_kg; volume_m3; density_kg_per_m3; temperature_degC; fuel_gross_kg; fuel_return_kg; recovered_fuel_waste_kg; uncontained_fuel_kg; final_tank_kg; meter_start_kWh; meter_end_kWh; charging_losses_kWh; opening_stock_burden; opening_stock_used_kg; closing_stock_carried_burden; stock_burden_source; supplier_scope; uncertainty | Record actual fuel supplied and tanks in net mass with meter/temperature/density conversion evidence when native volume is used; assign complete activity and idle windows to jobs. Gross physical supplied fuel remains the boundary input; separately document opening_stock_used_kg and its inherited material burden and closing_stock_carried_burden, with source-period linkage. Use total opening/closing tank quantities only once in burn_balance. Do not add a second opening-draw physical exchange or deduct closing stock twice; reconcile the stock-burden bridge with actual consumed/returned/waste/released outlets and carried-forward material burden. Derive burn from mutually exclusive outlets, not nameplate power. Meter electricity imports and actual charging scope; provider-inclusive operation is excluded. | kg; m3; kg/m3; degC; kWh; s | Each tank/meter event and operating window | All campaign windows, setup/repeats/cleanup and linked source periods | Identified track intervals and attributable provider/asset scopes | per reference flow | Calibrated tank/meter, receipts and machine log; fuel balance reconciled with incident record; actual fuel/source verified |
| cp_transport | track_geometry_correction | Mobilisation, delivery, returns and waste logistics | leg and provider record | campaign_id; window_id; period_id; leg_id; provider; mode; cargo_identity; cargo_kg; loaded_distance_km; origin; destination; empty_return_scope; service_unit; service_quantity; job_driver; all_job_drivers; included_fuel; included_maintenance; included_capital | Match actual cargo weights to real loaded legs and routes. Calculate cargo_kg * loaded_distance_km and allocate shared leg by evidenced driver across all jobs. Identify self-propelled machine/empty return with explicit provider vehicle activity boundary, not artificial cargo. Include outbound returns and waste transport exactly once, checking upstream gate. | kg; km; kg*km | Every actual mobilisation/delivery/return/waste leg | All campaign windows, setup/repeats/cleanup and linked source periods | Identified track intervals and attributable provider/asset scopes | per reference flow | Transport receipts/routes/weights; provider inclusion evidence; separate leg IDs prevent double attribution |
| cp_services | track_geometry_correction | External protection and required stability completion | contract and service delivery record | campaign_id; window_id; period_id; service_id; provider; service_identity; service_unit; service_quantity; track_intervals; technology; pass_id; stability_approval_source; possession_id; scope_included; scope_excluded; fuel_owner; materials_owner; emissions_owner; capital_owner; acceptance_record | Read actual contract unit and service coverage, delivery/work logs and approved stability criteria. Define any counted service package; use actual provider unit when not an item. Link all prescribed stability/protection events to one owner. Subtract duplicate direct quantities only by documented scope partition; actual approval paperwork is not a measured physical service quantity. | Actual provider unit; item only if defined | Each provider service event and work window | All campaign windows, setup/repeats/cleanup and linked source periods | Identified track intervals and attributable provider/asset scopes | per reference flow | Signed delivery, adopted method, acceptance and full resource-owner matrix; missing required closure is blocker |
| cp_assets | track_geometry_correction | Complete-life shared equipment attribution | asset life and consumer activity ledger | asset_id; campaign_id; window_id; period_id; consumer_job_id; consumer_node_id; activity_unit; campaign_activity; observed_life_activity; forecast_remaining_activity; manufacture_scope; maintenance_scope; replacement_event; termination_scenario; EOL_scope; source; forecast_label; excluded_direct_fuel_spares; provider_coverage; uncertainty; sensitivity; update_date | For each actual asset enumerate all consumers and reporting periods. Use observed complete life for retired assets; for in-service equipment justify remaining service, replacements, termination and EOL scenario with sources and sensitivity. Derive complete_life_activity = observed_life_activity + forecast_remaining_activity in comparable units, campaign fraction = campaign_activity / complete_life_activity. Allocate phase burdens consistently, remove separately recorded fuel/spares, sum all consumer fractions to one. | Actual comparable activity unit; item-equivalent | Each asset life review, replacement/termination and campaign assignment | All campaign windows, setup/repeats/cleanup and linked source periods | Identified track intervals and attributable provider/asset scopes | per reference flow | Asset register, history/forecast source, full consumer ledger and life-scope coverage; no unsupported life default |
| cp_emissions | track_geometry_correction | Species exhaust/dust/water releases | measurement or matched factor calculation | campaign_id; window_id; period_id; event_id; species; receiving_medium; particle_fraction; fossil_biogenic_basis; activity_identity; activity_quantity; activity_unit; measured_release_kg; factor_kg_per_activity_unit; factor_source; engine_mode; ballast_moisture; capture_efficiency; water_input_kg; water_waste_kg; weather_water_kg; retained_host_water_kg; closing_water_kg; uncertainty | Prefer actual calibrated emissions/outlet measurement; otherwise retain applicable official/primary factor source, units, engine/fuel/load or ballast/moisture/control match and uncertainty. Expand exact species/media and size fractions individually. Link burned fuel to cp_energy and dust/water to actual handled material and capture/custody. No residual-as-emission assumption. | kg; actual activity unit | Each reported species/outlet and matching activity window | All campaign windows, setup/repeats/cleanup and linked source periods | Identified track intervals and attributable provider/asset scopes | per reference flow | Measured release or factor applicability record; captured waste and atmospheric species separated; factor/particle/medium gaps block final exchange |
| cp_incidents | track_geometry_correction | Spill partition and recovery | incident and cleanup custody record | campaign_id; window_id; period_id; incident_id; fluid_identity; composition_source; total_spill_kg; recovered_fluid_kg; absorbent_input_kg; contaminated_solids_kg; retained_residue_kg; uncontained_fluid_kg; species; evidenced_actual_constituent_fraction; constituent_fraction_source; constituent_fraction_basis; uncontained_species_kg; receiving_medium; receiver; waste_transfer_id; uncertainty | Map each incident total to mutually exclusive recovered fluid waste, retained residue and uncontained_fluid_kg. Collect evidenced_actual_constituent_fraction, its source and mass basis separately to derive each actual species/medium release; a partial reported species sum is not the whole fluid mass. Record supplied absorbent separately and distinguish its mass from recovered fluid. Link recovered fuel component to fuel burn balance. Do not subtract total spill after subtracting its component outlets; unknown fate remains unresolved. | kg; constituent mass fraction kg/kg | Every actual spill/leak and cleanup transfer | All campaign windows, setup/repeats/cleanup and linked source periods | Identified track intervals and attributable provider/asset scopes | per reference flow | Incident assessment, constituent evidence and waste manifest; no generic leak rate and no duplicated incident component |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `divide_campaign` | ballast_topup; fuel_gross; electricity; hydraulic_makeup; grease; tine_components; other_spares; supplied_water; water_withdrawal; packaging_supply; spill_absorbent; ballast_return; fuel_return; other_product_returns; ballast_solid_waste; removed_fluid_waste; wear_parts_waste; packaging_waste; recovered_spill_waste | For each distinct exchange, amount_per_m = attributable_campaign_amount / L; L = accepted unique centreline length in m from cp_acceptance. Receipt inputs precede return netting; stock burden transfer is documented separately. | Actual campaign quantities; cp_acceptance; cp_materials; cp_energy; cp_incidents | Actual exchange unit per 1 m reference service |  |
| `burn_balance` | fuel_gross; exhaust_species | burned_fuel_kg = initial_tank_kg + fuel_gross_kg - final_tank_kg - fuel_return_kg - recovered_fuel_waste_kg - uncontained_fuel_kg; every outlet is mutually exclusive. Retained incident residue is included in final attributable inventory or a separately recorded unburned outlet. No second total-spill subtraction. | cp_energy; cp_incidents | Burned actual fuel kg per campaign, separately from gross product input |  |
| `leg_activity` | mobilisation_transport | transport_per_m = sum(cargo_kg * loaded_distance_km * evidenced_job_share) / L; shares over all consuming jobs sum to 1; t*km to kg*km requires factor 1000. Empty returns or self-propelled equipment use evidenced provider vehicle boundary. | cp_transport; cp_acceptance | kg*km per 1 m reference service with full leg scope disclosed |  |
| `service_quantity` | protection_service; stability_service | service_per_m = actual_delivered_service_quantity * evidenced_campaign_share / L; service unit and scope must be defined, shares over all consuming jobs sum to 1. | cp_services; cp_acceptance | Actual provider-unit quantity per 1 m reference service |  |
| `complete_life_fraction` | shared_asset_service | asset_fraction_per_m = campaign_activity / (observed_life_activity + forecast_remaining_activity) / L; same activity unit for numerator and denominator; retired life has zero forecast_remaining_activity. Retain each asset fraction separately and full-life phase coverage; all consumers sum to 1 before final normalisation. | cp_assets; cp_acceptance | Item-equivalent of a specific complete-life asset service per 1 m |  |
| `species_release` | exhaust_species; dust_species; water_release | species_per_m = measured_release_kg / L, or actual_activity * applicable_factor_kg_per_activity_unit / L; use only one method per species/event and actual capture partition. No aggregation of different species or receiving media. | cp_emissions; cp_energy; cp_materials; cp_acceptance | kg of actual species/medium per 1 m |  |
| `incident_partition` | recovered_spill_waste; oil_release_species | For each incident, total_spill_kg = recovered_fluid_kg + retained_residue_kg + uncontained_fluid_kg; constituent_release_kg = uncontained_fluid_kg * evidenced_actual_constituent_fraction for its actual medium. Waste quantity includes separately measured absorbent/solids only once. Divide each actual outlet by L. | cp_incidents; cp_energy; cp_acceptance | Distinct actual waste and species outlet kg per 1 m |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `survey_gate` | accepted_track_geometry_service | Track ID/chainage, actual target, spatial base, units, tolerance/temperature source, calibrated survey, pre/post support/stability evidence and signed restrictions must agree. L excludes failed and repeated intervals. | cp_acceptance records and adopted owner criteria |
| `scope_temporal` | all inventory rows | Cover every campaign/window/period including idle/setup/changeover, cleaning, failures, repeats and closure; map every event to node and single owner; enumerate asset life phases and stock carry-over periods. | All event/transfer IDs and period/consumer ledgers |
| `identity_actual` | all inventory rows | Expand conditional requirements into actual distinct material, spare, service, waste and species identities; verify flow/property/unit and provider/substance/medium qualifiers. Energy/Duration support needs actual verification; no inferred absence outside supplied published snapshot. | Supplier/provider/substance documents and identity verification |
| `custody_balance` | material flows; fuel_gross | Gross supply excludes tare and precedes returns. Reconcile stocks and exclusive outlets per identity/moisture; carry closing-stock burden. Track dry solids, water, weather and host moisture separately. Burned fuel differs from gross exchange. | cp_materials; cp_energy; cp_incidents |
| `asset_forecast` | shared_asset_service | Require manufacture/maintenance/replacement/EOL and all consumers/periods; label observed/forecast remaining life, uncertainty, termination and update scenarios. Missing evidence blocks finalisation, rather than requiring observed future retirement. | cp_assets and source-backed sensitivity |
| `quantity_uncertainty` | all inventory rows | No universal quantities adopted. Record instrument/factor uncertainty and actual low/high sensitivity for missing range evidence; source examples, fuel densities and nameplates do not establish general kg/m or kWh/m ranges. | Actual instrument certificates, factors and campaign variability |
| `no_duplicate` | all inventory rows | Cross-check provider/material-included packaging, transport, fuel, spares, maintenance and capital against direct rows and life scopes; stock transfers and incident components count once. | Resource scope matrix, custody ledger and consumer shares |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_complete` | accepted_track_geometry_service | Require qualified prestate, approved targets, calibrated pre/post geometry and support/profile/stability evidence, actual adopted tolerance source, closed campaign defects and authorised handback/restrictions. No unaccepted interval or repeated pass inflates L. | plasser-tamping-precision; plasser-tamping-control |
| `run_complete` | track_geometry_correction | Reconcile every campaign/window, setup/changeover/idle/cleanup, failure, retest and prescribed stability action to an owner and period; accepted output excludes unresolved rejects. |  |
| `material_balance` | material flows | Check net-tare gross receipts and opening/closing stock against mutually exclusive use/incorporation, actual outward returns, waste and evidenced species releases. Dry solids, water, retained host moisture and weather are distinct terms. Investigate residuals; unknown residual is not automatic emission. |  |
| `fuel_balance` | fuel_gross; fuel_return; recovered_spill_waste; exhaust_species; oil_release_species | Separate fuel receipt, opening/closing inventory, return, waste and incident-release fractions to derive burned fuel. Partition each spill total into recovered fluid, retained residue and actual uncontained fluid; derive species/medium releases only from the evidenced uncontained partition. Assign retained residue to closing inventory or its distinct unburned outlet once; do not subtract incident total again. Match factors to fuel/engine/mode and units. |  |
| `assets_complete` | shared_asset_service | Require complete-life phases, all consumers/periods, observed/forecast labels, replacement/termination/EOL scenarios and source/denominator uncertainty; block missing coverage. Exclude direct fuel/spares already recorded and provider-included capital. |  |
| `identity_ranges` | all inventory rows | Verify each actual distinct material/provider/substance and its property/unit before final exchange; no speculative generic UUID, substance or particle fraction. Replace explicit Range evidence needs using actual route records or disclose unbounded uncertainty; checker pass is not quantity or external identity evidence. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground maintenance-service dataset for accepted existing plain-track geometry correction |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching retained ballasted plain-track maintenance route, gate, technology, region and accepted length basis |
| excluded_use | New railway construction; turnout/slab track; full ballast renewal; universal safety/speed or life-extension benefit claims; train transport |
| required_metadata | Reference qualifiers; campaign/window/period and chainages; actual machine/provider; residual restrictions; acceptance source; material custody; shared life/service attribution |
| required_quality_disclosure | Meter/survey accuracy; failed work; stock balances; fuel/emission factors/species; life forecasts/sensitivity; upstream scope; unresolved identities and Range needs |
| update_trigger | Changed machine, ballast/track state, target/handback criteria, provider scope, inventory period, asset life scenario, quantity evidence or flow identity |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations CPC Version 3.0 explanatory notes, 30 June 2025, printed p.284; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 54212 classification repair/restoration and ballast/rail service context; does not supply LCA quantities |
| plasser-tamping-precision | literature | Plasser & Theurer, Tamping technology: Precision; https://www.plassertheurer.com/en/tamping-technology/precision | Interdependent lifting/lining and tamping, geometry measurement and separate dynamic stabilisation capability; no universal handback authority or quantities |
| plasser-tamping-control | literature | Plasser & Theurer, The tamping unit that understands the ballast; https://www.plassertheurer.com/en/pt-research/artikel/the-tamping-unit-that-understands-the-ballast | Physical cycle, under-sleeper filling/compaction, condition-dependent settings and repeats; research examples not generic ranges |
