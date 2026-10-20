---
pcr_id: pcr.constructions-and-construction-services.construction-services.existing-crawlspace-timber-frame-one-and-two-dwelling-house-in-place-hydraulic-elevation-and-permanent-foundation-reconnection-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing crawlspace timber-frame one- and two-dwelling house in-place hydraulic elevation and permanent foundation reconnection services

## 1. Scope and Applicability

This PCR covers the completed service of hydraulically elevating in place a structurally qualified retained timber-frame house originally supported on a crawlspace foundation, containing one or two dwellings, and reconnecting it to its permanent engineered foundation, permanent access and restored utilities. The reference is an accepted intervention on one physical house. A house containing two dwellings contributes one house, not two outputs.

The intervention starts from a named assessed existing house and the actual approved lift, foundation, flood-elevation, access and utility plans. Include disconnection, preparatory removals, necessary groundworks, temporary support and lifting equipment, new or extended foundation and curing, lowering and anchorage, permanent stairs/landing, utility reconnection/testing, damage repair, retests and defect closure. Temporary utilities and temporary access are included when actually used. FEMA's historical physical sequence is route evidence only; obtain current applicable requirements and qualified engineering from the actual project. This PCR gives no operational lifting instructions, universal lifting dimensions, default flood datum, BFE, freeboard or safety factor.

Exclude slab-lift, masonry-only and manufactured/mobile homes; relocation to another site; new houses, reconstruction replacing the retained house, extensions adding a dwelling; temporary elevation without the completed gate; and future floods, insurance, dwelling occupation and later maintenance. Existing house manufacture is retained baseline, not a newly purchased house input or a negative credit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.existing-crawlspace-timber-frame-one-and-two-dwelling-house-in-place-hydraulic-elevation-and-permanent-foundation-reconnection-services |
| classification_refs | CPC 3.0 54111; narrower service scope, classification is not methodology identity |
| covered_products | Accepted retained timber-frame crawlspace house elevation with permanent foundation, access and restored utilities |
| excluded_products | New building; site relocation; slab-lift; masonry-only or mobile home; unfinished temporary elevation; added dwelling |
| representative_product | Accepted in-place elevation and permanent foundation reconnection of retained timber-frame house |
| production_route | Assessed existing house → disconnect and prepare → hydraulic lifting/temporary support → engineered foundation/curing → lower and anchor → permanent access and utilities → inspection/test/defect closure and handover |
| market_state | Completed project-specific construction alteration service at signed owner/required authority acceptance |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted in-place elevation and permanent foundation reconnection of retained timber-frame house |
| How much | 1 accepted unique physical house |
| How well | Approved project-specific structural and flood-elevation requirements; inspected permanent foundation and anchorage; surveyed final elevation; safe permanent egress; completed tested utilities; defects closed and signed handover |
| How long or cycle | One complete intervention from project preparation to final acceptance, including failed attempts and rework |
| reference_flow_link | `accepted_elevation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted in-place elevation and permanent foundation reconnection of retained timber-frame house |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | house_id; dwelling_count; timber_frame_condition; original_crawlspace; structural_assessment; site_id; jurisdiction; permit_id; flood_datum; required_elevation; surveyed_final_elevation; foundation_design; anchorage_inspection; permanent_access; utility_reconnection_tests; defect_closure; acceptance_date; reporting_period |

All required qualifiers must be declared. Record floor-area convention, lift height and actual foundation/utility configurations as comparability descriptors; none converts separate dwellings, lifting cycles, jacks or floor area into accepted house count. N is the positive count of unique finally accepted house IDs in the declared campaign. Rejected or unfinished houses never enter N; their attributable attempts and resources remain in the campaign numerator, with the boundary and any discontinued jobs disclosed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `count_reference` | accepted_elevation | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N > 0 unique accepted physical house IDs; one two-dwelling house counts once. All rows use per reference flow; aggregate job quantities once then divide by N. |
| `native_units` | material and usable-return rows | Actual native property | Actual supplied unit | Preserve Count, Area, Length, Volume and Mass by SKU. Supply and matched usable return share unit and state. Do not force all supplies to Mass. Whole supplied packages exclude repurchase of their included constituents. |
| `conversion_state` | any converted row | Actual compatible property | Actual target unit | Retain native amount/unit and conversion factor/unit/source; for density conversions collect actual SKU, delivered/installed state, density and density_unit, moisture/basis, temperature and temperature_unit. Wet mass, dry solids, loose delivered volume and installed compacted volume are nonadditive views. |
| `fuel_energy` | fuel and electricity | Actual fuel Volume or Mass; actual electricity Energy | m3 or kg; kWh | Upstream fuel supply differs from actual burned fuel used for species calculations. Electricity uses gross metered supply and export/temporary distribution losses with ownership; no price, hours, NCV/GCV or item substitute for Energy. |
| `freight_work` | freight | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | kg*km | Use actual carried mass in kg times actual loaded distance in km per leg, identify empty returns and upstream coverage; never multiply house count by distance as freight mass. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Named retained assessed timber-frame house on crawlspace, prior foundation/utilities/access condition and actual engineered permitted plan |
| starting_condition_role | Retained parent and historical baseline; no purchase of a new house |
| product_classification_scope | Integrated completed in-place house alteration service, narrower than CPC 3.0 54111 |
| recursive_input_rule | Bounded subcontracted tasks may enter once with actual completed physical result and native units; an upstream service matching this same whole accepted intervention cannot recursively replace an unrecorded foreground job |
| upstream_dataset_requirement | Traceable supplier/material/service datasets at actual native units, technology, geography and gate with declared full upstream scope; resolve final exchange UUIDs before final data production |
| disclosure | Retained/removed baseline; project design and applicable law/date; occupancy/temporary utilities; all contributors, stocks, provider boundaries, repair and exit fates; actual acceptance gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `period_boundary` | all work and asset lifecycle phases | The reporting campaign explicitly indexes preparation/disconnect, lift/support, foundation/curing, lowering/anchorage, access/utility restoration and acceptance phases, including their actual reporting periods. Each resource, stock carry, failure, repair, replacement and termination event links to its actual phase/period and one owner; the accepted output links to final acceptance. Cross-period carry is transferred once, not repurchased. Shared asset lifecycle phases span manufacture, all job uses, maintenance, replacement and end of life without an invented calendar lifetime. |  |
| `integrated_gate` | whole service | Own foundation concrete/grout/fill/reinforcement, anchors/connectors, access components and pipe/cable/fittings as required by actual plans. Couple them with retained structure at inspected permanent anchorage, surveyed elevation, safe stairs/landing, restored tested utilities and signed defect-closed acceptance. | fema-house-elevation-1997 |
| `temporary_and_damage` | all work phases | Own disconnect/lifting preparation, beams/jacks/cribbing and other temporary support, temporary stairs/utilities if used, equipment mobilization, curing/testing, actual removed foundation/debris and actual damage repair. Demobilization does not erase these burdens. | fema-house-elevation-1997 |
| `baseline_and_outlets` | retained parent and exits | Retained house and old foundation are not new material purchases. Record actual removed historic materials and their destinations without negative new-purchase quantities. Reusable returned job supplies and stock carry must be distinguished from removed old assets. No avoided-new-house, avoided-flood or recycling credit is assumed. | fema-house-elevation-1997 |
| `provider_ownership` | providers and assets | One resource owner per event across direct contractor, house mover, foundation/access/utility trades, rental and transport/test providers. Inspect provider coverage for fuel/electricity/materials, temporary support assets and full lifecycle burdens; missing physical coverage blocks final data. Shared jack/pump, beams/cribbing, tools and survey/test assets require all consumers/jobs/nodes/periods, not only this project. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Foundation and groundworks supplies in native volume (`volume_materials`)

Process / prospective direction / type: `house_elevation` / `inputs` / `product`.

Actual SKU/state concrete, grout and necessary fill supplied for the permanent foundation and access works; distinguish delivered volume from installed geometry and include waste. Ready-mixed supply includes its constituents. Independently supplied job hydraulic oil/lubricant topups belong here when native-volume supplied, excluding any amount already in provider/asset maintenance scope.

Range evidence need: Collect each delivered concrete/grout/fill SKU and volume ticket, approved foundation geometry, actual overbreak, losses and installed state. Any mass/dry-solids/compacted-volume comparison needs actual density, moisture, state, temperature and units; no universal foundation volume.

- Collection subject: Foundation and groundworks supplies in native volume
- Flow property / unit: Volume / m3
- Amount rule: S_volume / N using the declared physical stock method; actual SKU rows independently.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Permanent and temporary consumable materials in native mass (`mass_materials`)

Process / prospective direction / type: `house_elevation` / `inputs` / `product`.

Actual mass-supplied reinforcement, cementitious or other materials, repair consumables and packaging where separately supplied; independently supplied job hydraulic oil/lubricants belong here when native-mass supplied, excluding provider/asset maintenance-covered amounts; do not repurchase constituents already covered by whole concrete/component packages.

Range evidence need: Collect actual mass-supplied SKU, grade/state, gross/tare, measured opening/closing and return quantities, repair consumption and waste uncertainty. Separate dry mass and wet/contained-fluid views; no universal reinforcement or repair mass.

- Collection subject: Permanent and temporary consumable materials in native mass
- Flow property / unit: Mass / kg
- Amount rule: S_mass / N using the declared physical stock method.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Linear access and utility materials in native length (`length_materials`)

Process / prospective direction / type: `house_elevation` / `inputs` / `product`.

Actual length-supplied timber/sections, pipes, conduits and cables for permanent stairs/landing and restored qualified utilities, including temporary works when consumed.

Range evidence need: Collect actual linear SKU, section/diameter, delivered and cut lengths, joint allowances, unused returns and residual waste. Document actual pipe/cable/access configuration; no generic length per house or unsupported length-to-mass factor.

- Collection subject: Linear access and utility materials in native length
- Flow property / unit: Length / m
- Amount rule: S_length / N using the declared physical stock method; retain each SKU and size.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Sheet and surface materials in native area (`area_materials`)

Process / prospective direction / type: `house_elevation` / `inputs` / `product`.

Actual area-supplied panels/membranes and sheets used in foundation interface, access or damage repair, with thickness/state/SKU declared.

Range evidence need: Collect each sheet/membrane SKU, thickness, delivered area, actual coverage/laps/offcuts and return area under the same convention. Thickness/density-based mass is a separate nonadditive view; no universal area per house.

- Collection subject: Sheet and surface materials in native area
- Flow property / unit: Area / m2
- Amount rule: S_area / N using the declared physical stock method; purchased laps/offcuts remain included.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Discrete anchorage access and utility components in native count (`count_materials`)

Process / prospective direction / type: `house_elevation` / `inputs` / `product`.

Actual item-supplied anchors, connectors, fittings and complete stair/access or utility component packages. Keep package constituents inside supplier scope; reusable rented jacks and retained old house are not new consumable components.

Range evidence need: Collect actual anchorage/fitting/package identity, counts, damaged/returned units and constituent coverage. Count depends on actual engineering and package configuration, not an assumed bolt/jack/stair count per house.

- Collection subject: Discrete anchorage access and utility components in native count
- Flow property / unit: Count / item
- Amount rule: S_count / N using the declared physical stock method; actual SKU and package coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Actual native-unit mobile plant and temporary generation fuel (`fuel_supply`)

Process / prospective direction / type: `house_elevation` / `inputs` / `product`.

Fuel product upstream supply for lifting pumps, vehicles and temporary generators by actual product and delivery state, using its actual native Mass/kg or Volume/m3 without forced conversion.

Range evidence need: Collect each actual fuel identity and native Mass or Volume receipts/stocks, measured burn or fully audited disjoint fates, uncertainty and unknown-loss investigation. Composition/state/temperature-dependent conversion is optional evidenced comparison, not a forced volume basis; no default burn or spill rate.

- Collection subject: Actual native-unit mobile plant and temporary generation fuel
- Flow property / unit: Actual native fuel property / actual native Mass or Volume unit
- Amount rule: S_fuel / N using the declared physical stock method; the audited physical fuel fate method determines burn separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`

#### Collection requirement: Bounded completed subcontractor and test service results (`provider_services`)

Process / prospective direction / type: `house_elevation` / `inputs` / `product`.

Actual house mover, groundworks, foundation, access, plumbing/electrical, inspection/test or temporary utility service results not already decomposed. Record physical completed quantity and matching full upstream coverage; money or labor hours do not establish Count-service equivalence.

Range evidence need: Collect actual physical completed-result quantity, native unit, provider boundary and complete upstream resource coverage. Any observed service bounds require equivalent result/gate; price or labor duration cannot establish a Count-service range.

- Collection subject: Bounded completed subcontractor and test service results
- Flow property / unit: Actual service property / actual native unit
- Amount rule: Actual completed service result / N in its verified native unit; reconcile excluded and included resources once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

#### Collection requirement: Lifecycle complete lifting support and construction asset service (`shared_assets`)

Process / prospective direction / type: `house_elevation` / `inputs` / `product`.

Hydraulic jack/pump, lifting beams/cribbing, tools, survey/test assets and other reusable equipment including provider/rental assets. Allocate full manufacture, maintenance, replacements and end of life over every consumer/job/node/period using a compatible actual driver.

Range evidence need: Collect job_driver and compatible lifetime_driver over all asset consumers, observed history and evidenced remaining use/replacement/termination/EOL, full lifecycle inventory, uncertainty and sensitivity. No default equipment lifetime, hours-to-asset or missing-lifecycle zero.

- Collection subject: Lifecycle complete lifting support and construction asset service
- Flow property / unit: Actual asset or service property / actual matched unit
- Amount rule: Choose asset_equivalent = (job_driver / lifetime_driver) / N with actual asset unit burden OR service_quantity = job_driver / N with matching lifecycle-complete per-driver service burden; never both.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

#### Collection requirement: Actual freight of supplies equipment and removed materials (`freight`)

Process / prospective direction / type: `house_elevation` / `inputs` / `product`.

Each actual leg uses cargo mass and distance; distinguish material, lifting/support equipment mobilization and waste freight, empty returns and subcontractor-covered movements.

Range evidence need: Collect cargo kg and distance km per actual leg, load shares, empty returns and provider coverage, each with uncertainty and actual source. Observed workload bounds must use the same physical route and scope; no assumed delivery distance.

- Collection subject: Actual freight of supplies equipment and removed materials
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual cargo_kg * distance_km over owned legs / N; empty return treatment and shared load allocation disclosed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`

#### Collection requirement: Matched outward return of usable job supplies (`usable_returns`)

Process / prospective direction / type: `house_elevation` / `outputs` / `product`.

Actual outward usable supplies by original SKU, state and unit linked to receipts. Closing stock is carry, not outward return. Historic removed house/foundation material is not returned new purchase.

Range evidence need: Collect actual outward usable-return SKU, matched receipt, state, native unit, quantity and uncertainty under the chosen gross-with-outlets or consumed-only method. Closing carry and historic dismantled objects are excluded; no default return fraction.

- Collection subject: Matched outward return of usable job supplies
- Flow property / unit: Actual matched native property / actual matched native unit
- Amount rule: Return ledger / N; use either gross-with-outlets S or consumed-only S minus matched usable return once, with no further credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

#### Collection requirement: Removed foundation debris repair rejects and consumed work waste (`solid_waste`)

Process / prospective direction / type: `house_elevation` / `outputs` / `waste`.

Actual separate destinations for removed historic foundation/retained fabric, newly purchased waste/offcuts, damaged temporary materials, packaging and rejected repair materials. Hazardous identity, moisture and recovered versus disposed fate are actual records; discarded fuel/fluid is separately tracked.

Range evidence need: Collect actual origin, wet/dry state, net weighings, moisture/basis, recovery/disposal destination and treatment evidence for each removed or rejected material. Reusable historic products require a distinct actual product-output ledger; no universal debris mass or recovery rate.

- Collection subject: Removed foundation debris repair rejects and consumed work waste
- Flow property / unit: Mass / kg
- Amount rule: Actual net waste mass by origin and treatment route / N; retain upstream burden of nonreturned supply waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

#### Collection requirement: Actual curing cleaning utility test and temporary wastewater (`wastewater`)

Process / prospective direction / type: `house_elevation` / `outputs` / `waste`.

Actual collected water to sewer or offsite treatment, with contamination/state and treatment destination. Do not assume all supplied water becomes wastewater; retained water, evaporation and environmental discharge are separately reconciled.

Range evidence need: Collect measured wastewater volume, contamination and receiving treatment destination by event, including meter/ticket uncertainty. Direct environmental discharge requires a separate elementary exit, not this waste-treatment flow; no fixed supply-to-wastewater ratio.

- Collection subject: Actual curing cleaning utility test and temporary wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable wastewater by actual destination / N.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

#### Collection requirement: Recovered fuel hydraulic fluid and contaminated absorbent waste (`contained_fluids`)

Process / prospective direction / type: `house_elevation` / `outputs` / `waste`.

Recovered contained spills, nonburned discarded fuel, drained hydraulic fluids and absorbents to actual treatment. Recovered closing stock is already carry and cannot be counted again here.

Range evidence need: Collect recovered/contained fluid identity and compatible native quantity, contamination, absorbent state and actual destination; reconcile mutually exclusive return/carry/burn/nonburned waste/uncontained loss. Total spill is audit only, recovered closing already closing; no generic fluid-loss fraction.

- Collection subject: Recovered fuel hydraulic fluid and contaminated absorbent waste
- Flow property / unit: Actual fluid or waste property / actual native unit
- Amount rule: Actual nonburned contained waste/fluid exits by identity and compatible native units / N, mutually exclusive with return, burn, uncontained loss and closing carry.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`

#### Collection requirement: Actual identified substance releases to actual receiving medium (`species_release`)

Process / prospective direction / type: `house_elevation` / `outputs` / `elementary`.

Resolve each actual combustion, hydraulic/fuel leak, construction dust or disturbed historical material release by substance/species and receiving air/water/soil medium. Whole-fluid mass and contained waste are nonadditive views, not assumed species emissions.

Range evidence need: Collect actual substance and medium, measured release or actual matched activity with factor basis/source, or whole-fluid release with evidenced composition/fate. Require compatible units and uncertainty without duplicate multipliers; no generic VOC/dust/CO2 or hydraulic-fluid species factor.

- Collection subject: Actual identified substance releases to actual receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Measured species mass OR matched actual burned/activity * valid species EF OR actual whole-fluid release * evidenced composition * fate; divide once by N. Complete species EF is not multiplied again by composition/fate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `house_elevation` | Retained house elevation and permanent reconnection | required | Qualified retained timber-frame crawlspace house; approved project-specific design | Integrated disconnection, lift/support, foundation, anchorage, access, utilities and final acceptance | 1 item accepted service |

### Process: Retained house elevation and permanent reconnection (`house_elevation`)

Where actual records show direct environmental water abstraction or discharge, the producer MUST add distinct house_elevation elementary input/output exchanges in actual medium and native unit with cp_water ownership, measurements and fate reconciliation; neither purchased supply nor wastewater treatment substitutes them. Where dismantled historic objects remain usable and leave as products, the producer MUST add a separate actual product-output ledger by identity/state/native quantity and receiver, with cp_waste origin/transfer evidence; they are neither new-goods usable_returns nor solid_waste. These actual-data expansions inherit normalization, range evidence, concrete identity verification and single ownership requirements; unknown occurrence is a data gap.

The phase ledger identifies preparation/disconnect, lift/temporary support, foundation/curing, lowering/anchorage, access/utilities and final inspection. It records any failed lift, defective foundation/connection or damaged retained fabric as off-spec state linked back to house_elevation for repair/retest; removed material exits to its actual recovery or disposal destination. Unfinished work has no accepted product output. Internal transfers, repeated lifting and installed quantities are activity evidence, not new purchases or extra accepted services.

#### Inputs

##### Product flows

###### Construction curing testing and temporary utility water supplied (`water_supply`)

Meter or trace actual purchased water for foundation curing, utility tests and temporary site/house supply attributable to the job. Distinguish product supply from direct environmental abstraction if actually present.

Range evidence need: Collect meter resolution/calibration, actual curing/test/temporary-use intervals, retained/circulated water and each measured wastewater/environmental fate; any observed bounds use the same supply boundary and unit. No assumed water consumption or supply-to-discharge ratio.

- Selected flow: Construction curing testing and temporary utility water supplied
- Flow property / unit: Volume / m3
- Amount rule: Attributed supplied water / N; trace supply, internal circulation and discharge separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### Gross purchased electricity for lifting construction testing and temporary utilities (`electricity_supply`)

Actual supplier/mix, gross meters/submeters and included temporary dwelling/site distribution losses; record any exports separately and reconcile resource ownership with providers.

Range evidence need: Collect actual gross-import/export meter intervals, supplier/mix, temporary distribution losses and provider attribution uncertainty. Keep Energy support and unit compatibility explicit; no generic electricity per house or net export credit.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: Gross attributable electricity imports / N; no automatic export net credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

#### Outputs

##### Product flows

###### Accepted in-place elevation and permanent foundation reconnection of retained timber-frame house (`accepted_elevation`)

The completed integrated intervention on one retained qualified house at permanent foundation anchorage, surveyed elevation, permanent access and restored tested utilities with closed defects and signed owner/required authority handover.

Range evidence need: The accepted output is exactly 1 item by normalization. Evidence is N unique physical house IDs with full surveyed permanent foundation/access/utility acceptance; do not seek an empirical range around one service or treat unfinished attempts as yield.

- Selected flow: Accepted in-place elevation and permanent foundation reconnection of retained timber-frame house
- Flow property / unit: Count / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_service` | accepted output and rejects | One physical retained house at the integrated gate is one service. No co-product is inferred from dwellings, temporary elevation, salvage or avoided flood damage. Retain preparation, failures, retests and nonreturned waste in numerator; failed/off-spec work loops to the producing house_elevation node or actual exit and cannot enter N. |  |
| `stock_balance` | materials fuel and usable returns | S = attributed_opening + external_net_receipts - carried_closing, with receipts corrected by measured gross/tare. Internal issue or installed activity is not a new purchase. Declare gross-with-outlets S OR consumed-only S minus matched usable outward return once. Keep all nonreturned waste/loss upstream; no extra return credit and no subtraction of historic removed assets. |  |
| `asset_lifecycle` | shared assets and providers | Choose one compatible representation on shared_assets. Lifetime_driver covers ALL consumers/jobs/nodes/periods; use observed completed life OR observed history plus evidenced remaining use, replacements, termination and EOL. Record sources, uncertainty, sensitivity and update trigger. Full manufacture/maintenance/replacement/EOL inventory follows the same denominator; job hours cannot be divided by price or asserted lifetime. Do not combine equivalent-asset and per-driver-service views or divide by N twice. |  |
| `period_attribution` | all phases and assets | Enumerate actual phase/period boundaries and event IDs; link resources, assets, stock carry, replacements and final output once. Preserve period-specific numerator ownership and carry transfers; reconcile lifecycle history and evidenced remainder/termination/EOL. Missing future-life or termination evidence blocks final asset attribution; update after new evidence with no double attribution. |  |
| `recovery_boundary` | removed material and secondary inputs | Document origin and recovery gate for any actual secondary input, inheritance/cutoff method and burden ownership without double-counting previous manufacture. No default recycled content or avoided-disposal credit. This route does not require a secondary purchase; retained parent is baseline and actual recovered exits are separately reported. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `house_elevation` | accepted service | survey and acceptance | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; dwelling_count; timber_frame_condition; original_crawlspace; structural_assessment; permit_id; jurisdiction; flood_datum; required_elevation; surveyed_final_elevation; foundation_design; anchorage_inspection; permanent_access; utility_reconnection_tests; defect_closure; acceptance_date; accepted_flag | Read actual approved design and current local requirements; reconcile unique house IDs to survey, inspection, utility tests and signed acceptance Aggregation detail: Unique accepted houses N; per reference flow; exclude pending/failed house IDs from N | item | every house and final gate | all owned preparation through final closure and stock boundaries | declared project site and attributable provider locations | per reference flow | Survey datum and calibration; design/permit versions; signed inspections and closure |
| `cp_materials` | `house_elevation` | native material stocks and usable returns | stock and delivery | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit; gross_receipt; tare; net_receipt; opening_stock; closing_stock; installed_activity; outward_return; return_match_id; transfer_id; package_scope; stock_method | Reconcile receipts, inventories and dispatch; preserve each native SKU state and matched outward return; separate removed historic material Aggregation detail: Compute each native S then the declared outlet method once / N; do not add installed issue | actual native unit | every receipt issue return and stock boundary | all owned preparation through final closure and stock boundaries | declared project site and attributable provider locations | per reference flow | Supplier tickets; calibrated volume/count/scale records; stock reconciliation |
| `cp_water` | `house_elevation` | water supply wastewater and actual other water fates | meter and disposal | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit; supply_meter_start; supply_meter_end; wastewater_quantity; destination; retained_water; evaporation; direct_discharge; quality; meter_id; abstraction_medium; abstraction_quantity; abstraction_unit; discharge_medium; discharge_quantity; discharge_unit; occurrence_evidence | Meter attributed supply and collect actual discharge/treatment records; reconcile distinct fates without equating supply and wastewater Aggregation detail: Aggregate each owned physical water fate / N; internal recirculation nonadditive | m3 | each meter interval and discharge | all owned preparation through final closure and stock boundaries | declared project site and attributable provider locations | per reference flow | Meter calibration; destination tickets; uncertainty and water balance |
| `cp_fuel` | `house_elevation` | fuel stocks burn recovered fluid and losses | fuel and fluid fate | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit; fuel_identity; fluid_identity; opening_stock; gross_receipt; tare; closing_stock; outward_return; measured_burn; nonburned_waste; uncontained_loss; recovered_to_closing; total_spill_audit; fate_record; uncertainty; unknown_loss_investigation | Measure actual burn directly OR audit complete disjoint native-unit fates; return, nonburned waste, uncontained loss and carry are mutually exclusive. Do not infer burn as an unexplained residual. Track hydraulic fluid separately; total spill is audit only and recovered closing is already closing Aggregation detail: S_fuel/N for supply; actual burn/activity only to cp_emissions; each physical fate once / N | actual compatible fuel/fluid native unit | every refuel burn spill exit and boundary stock | all owned preparation through final closure and stock boundaries | declared project site and attributable provider locations | per reference flow | Fuel tickets/meters and calibrated tank measurements; full reconciliation; investigation of unknown loss |
| `cp_energy` | `house_elevation` | electricity gross supply export and temporary losses | meter and supplier | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; meter_id; supplier_mix; import_start; import_end; export_start; export_end; distribution_losses; allocation_driver; allocation_unit; coverage; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit | Read gross import/export meters and temporary utility shares, identify provider resource coverage and actual energy unit support Aggregation detail: Gross owned imports / N; exports/losses/onsite generation disclosed separately without automatic credit | kWh | each phase meter interval | all owned preparation through final closure and stock boundaries | declared project site and attributable provider locations | per reference flow | Calibrated meter; supplier/mix/gate; ownership evidence |
| `cp_providers` | `house_elevation` | completed bounded service results | provider physical record | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; completed_result; result_quantity; result_property; result_unit; acceptance_record; included_resources; excluded_resources; upstream_scope; dataset_gate; coverage_gap; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit | Verify physical completed result and upstream native-unit coverage; reconcile direct versus provider owned fuel materials assets transport tests and temporary utilities Aggregation detail: Each physically distinct completed bounded service / N once; missing coverage blocks final data | actual service native unit | every service and coverage revision | all owned preparation through final closure and stock boundaries | declared project site and attributable provider locations | per reference flow | Provider inventory/scope statement and signed physical result |
| `cp_assets` | `house_elevation` | shared lifting support tools and survey assets | asset lifecycle and driver | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; asset_id; consumer_job_node_period_ids; job_driver; driver_unit; observed_life_driver; observed_history_driver; evidenced_remaining_driver; lifetime_driver; driver_source; manufacture_inventory; maintenance_inventory; replacement_inventory; eol_inventory; termination_evidence; uncertainty; sensitivity; update_trigger; representation; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit | Match job driver to complete lifecycle driver over all consumers and same unit. Observe entire life or substantiate remaining use, replacements, termination/EOL; cover rental and provider assets Aggregation detail: Choose equivalent asset or lifecycle-complete per-driver service; aggregate once per reference flow | actual asset unit or compatible service driver unit | each asset use and lifecycle update | all consumers/jobs/nodes/periods over complete manufacture/use/maintenance/replacement/EOL lifecycle including evidenced remaining life | declared project site and attributable provider locations | per reference flow | Asset logs; full-life scope; evidenced remainder; maintenance/replacement/EOL sources |
| `cp_transport` | `house_elevation` | owned freight legs | freight manifest | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; leg_id; cargo_id; cargo_kg; distance_km; mass_unit; distance_unit; empty_return; load_share; vehicle_route; provider_coverage; transfer_id; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit | Match actual cargo weighing and route distances by leg; disclose empty-return treatment and movement already covered upstream Aggregation detail: Sum actual cargo_kg * distance_km / N once; empty returns separately evidenced | kg*km | every owned leg | all owned preparation through final closure and stock boundaries | declared project site and attributable provider locations | per reference flow | Manifest; scale; route logs and coverage reconciliation |
| `cp_waste` | `house_elevation` | removed historic material new waste and rejected work exits | waste weigh and destination | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; origin_historic_or_new; material_identity; rejected_state; rework_event_id; recovery_disposal_route; destination; wet_mass; dry_mass_view; moisture; moisture_basis; ticket_id; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; temperature; temperature_unit; reusable_product_identity; reusable_state; usable_native_quantity; usable_native_unit; receiving_party; transfer_id | Trace every removed/rejected state to repair at house_elevation, recovery or disposal; weigh actual destination exits; separate temporary asset return from waste Aggregation detail: Each actual origin/destination mass / N; no rejected work in accepted N | kg | every reject repair and waste exit | all owned preparation through final closure and stock boundaries | declared project site and attributable provider locations | per reference flow | Waste tickets; hazardous identification; repair/exit link and closure |
| `cp_emissions` | `house_elevation` | species medium and matched release activity | measurement or factor | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; substance; receiving_medium; measured_species_mass; measured_mass_unit; activity; activity_unit; activity_source; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; whole_fluid_release; whole_fluid_unit; method_selected; coverage; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit | Use actual species/medium measured mass or compatible activity/species EF or evidenced whole-fluid composition/fate. SDS hazard limits and no-VOC claims are not quantities; whole-fluid physical audit is nonadditive Aggregation detail: Aggregate independently evidenced species-medium mass once / N; no second composition/fate multiplier on complete EF | kg | each measured release or matched activity interval | all owned preparation through final closure and stock boundaries | declared project site and attributable provider locations | per reference flow | Measurement QA or factor/source compatibility; actual burn link; fate and uncertainty evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `stock_balance` | volume_materials; mass_materials; length_materials; area_materials; count_materials; fuel_supply; usable_returns | S = attributed_opening + external_net_receipts - carried_closing; gross-with-outlets S OR consumed-only S minus matched usable outward return once; divide selected quantity once by N. | cp_materials; cp_fuel; cp_acceptance; opening; gross; tare; closing; matched return; N | Native-unit supplied and returned quantities per reference flow |  |
| `fuel_fates` | fuel_supply; contained_fluids; species_release | Use actual measured burn OR complete disjoint audited native-unit fates with uncertainty and unknown-loss investigation. Return, nonburned waste, uncontained loss and carry are exclusive; no unexplained residual inferred burn; total spill audit only. | cp_fuel; actual burn; native fate quantities; uncertainty; investigation | Supply, burn and disjoint fluid fates, each at its own role |  |
| `asset_share` | shared_assets | asset_equivalent = (job_driver / lifetime_driver) / N OR service_quantity = job_driver / N with lifecycle-complete matching per-driver burden; choose one representation. | cp_assets; job_driver; lifetime_driver; full lifecycle inventory; N | Allocated complete asset or service quantity per reference flow |  |
| `freight_work` | freight | Freight workload = sum(cargo_kg * distance_km) / N; empty return scope and loading shares separately evidenced. | cp_transport; cargo_kg; distance_km; load_share; N | Actual freight in kg*km per reference flow |  |
| `species_mass` | species_release | Species-medium amount = measured species mass OR matched activity * complete species EF OR actual whole-fluid release * evidenced composition * fate; divide once by N. Do not apply composition/fate again to a complete species EF. | cp_emissions; cp_fuel; activity; factor; composition; fate; actual species and medium; N | Actual species-medium kg per reference flow |  |
| `direct_aggregation` | all inventory rows | Aggregate each owned numerator over the same campaign; divide once by N to per reference flow. The accepted_elevation output is 1 item. Existing historical parent, internal transfers and duplicated provider resources are not new supply. | all process-owned protocols; unique accepted house IDs; N | One consistent reference-flow inventory |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `gate_quality` | house_elevation | Actual structural qualification, permit/design, local flood datum and requirement, surveyed final elevation, permanent foundation/anchorage, safe access, tested restored utilities and signed defect closure; incomplete gate is a data gap. | cp_acceptance and actual current project authorities |
| `physical_coverage` | all inventory | Complete direct/provider/rental/test/transport/temporary utility resources, native units, stock exits and failed work; no monetary surrogate or zero for unavailable data. | Each protocol and supplier scope reconciliation |
| `conversion_quality` | conversions and emissions | Raw operands, compatible units, state/moisture/temperature units and conversion/composition/fate/factor sources; uncertainty and range evidence per actual role. | cp_materials; cp_fuel; cp_emissions and source documents |
| `temporal_quality` | job and shared assets | Common house/job/site/campaign/batch/event/phase/period IDs; all asset consumers and full-life driver; representativeness of any grouped houses disclosed. | All protocols; asset lifecycle evidence |
| `identity_quality` | final exchanges | Resolve concrete SKU/provider/destination/species UUIDs and support properties/unit groups before final data production. Semantic umbrellas are not fixed exchange identities. | Concrete exchange detail and support confirmation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `acceptance_check` | reference product | Require N > 0 unique accepted physical houses and all declared gate/qualifier evidence. Count one two-dwelling house once; pending elevation, jacks and lift cycles cannot enter N. |  |
| `resource_check` | stock providers shared assets | Check native-unit receipts/opening/closing/matched returns, single stock method, full provider resource coverage and one compatible asset lifecycle allocation across all consumers and periods; no repeated purchase, credit or double normalization. |  |
| `reject_check` | rework and waste | Link failed lift/defective support/foundation/connection/damage to repair/retest at house_elevation or evidenced exit; keep all attempt and nonreturned waste burden; no unfinished service as accepted output. |  |
| `fate_check` | fuel water waste emissions | Check disjoint measured burn/fate records and unknown-loss investigation; actual receiving media/species and compatible factor/composition/fate evidence. Recovered closing is not extra waste, supply is not necessarily burn/discharge, whole-fluid views are nonadditive. |  |
| `period_check` | all phases and assets | Check indexed phase/period/event links, stock carry and final acceptance period; reconcile replacement/termination and lifecycle remainder evidence with one attributable owner and no repeated burden. |  |
| `support_check` | all rows | Require full bilingual semantic/quantity/protocol alignment, valid structured fingerprint and actual exchange/support identity verification. Missing native service/Energy/asset support or incomplete provider coverage prevents final package completion. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Completed retained-house elevation/reconnection service matching declared timber-frame crawlspace scope and actual gate |
| excluded_use | New house construction, relocation, slab lift, mobile homes, unfinished lift, future flood/insurance benefits or operational dwelling energy |
| required_metadata | house_id; dwelling_count; timber_frame_condition; original_crawlspace; structural_assessment; site_id; jurisdiction; permit_id; flood_datum; required_elevation; surveyed_final_elevation; foundation_design; anchorage_inspection; permanent_access; utility_reconnection_tests; defect_closure; acceptance_date; reporting_period; floor_area_convention; lift_height; prior_condition; retained_removed_schedule; temporary_utility_state; provider_scope; stock_method; native_units; asset_lifecycle_method; actual_current_design_sources |
| required_quality_disclosure | Coverage and gaps; actual gate evidence; failed/unfinished work; unresolved exchange/support identities; full provider and shared asset scope; range/conversion/fate uncertainty; historic guide limitation |
| update_trigger | Change in retained-house scope, foundation/lift/access/utility design, applicable local requirements or datum, provider coverage, actual release evidence, shared-asset remaining life/replacement/EOL or acceptance gate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fema-house-elevation-1997 | official_guidance | https://www.govinfo.gov/content/pkg/GOVPUB-HS5_100-PURL-LPS73856/pdf/GOVPUB-HS5_100-PURL-LPS73856.pdf | FEMA Protecting Your Home from Flood Damage, revised 1997 third edition, Region III compilation 2003; PDF pages 19–20 physical house-elevation and crawlspace route. Historical PDF22 regulations are not current-law, default BFE/freeboard or universal design criteria. Actual project plans and foreground records provide current requirements and quantities. |
