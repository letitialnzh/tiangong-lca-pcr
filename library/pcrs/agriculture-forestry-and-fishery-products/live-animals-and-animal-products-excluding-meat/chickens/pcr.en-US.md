---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.chickens
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Live chickens at producing farm gate

## 1. Scope and Applicability

This PCR produces foreground data for live domestic chickens handed over at the producing farm gate. It covers broiler, breeder, replacement and layer birds when transferred alive, including purchased starting birds, managed rearing or laying periods, feed, water, housing, litter and manure management, animal health, mortality, selection, live weighing and farm-gate handover. Free-range and housed systems are route variants of managed chicken production; record their distinct land access, feed sourcing, housing, litter, energy and manure pathways.

Hatching eggs, fresh table eggs, meat and carcasses are separate reference products. Eggs or manure become co-products here only when independently intended and transferred from the same declared system. Mortalities, rejected eggs and unusable litter are losses or wastes. Slaughter, dressing, off-farm processing and post-transfer transport are outside this farm-gate boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.chickens` |
| classification_refs | CPC 3.0 `02151`, Chickens |
| covered_products | live chickens transferred from a producing farm, including broiler, breeder, replacement, layer and spent birds when alive |
| excluded_products | hatching or table eggs as reference products; chicken meat, carcasses and slaughter output; birds after post-farm transport; other poultry species |
| representative_product | live chicken weighed just before ownership or operational control transfers at the producing farm gate |
| production_route | managed flock production parent with broiler, breeder or layer purpose and housed or free-range implementation; each route declares changed feed, housing, litter, manure, energy, duration and validation requirements |
| market_state | live unprocessed chicken with declared purpose, class, age or phase, health or market condition, geographic origin and farm-gate handover |

Route variants may coexist within one enterprise, but their flock, housing, feed, manure and output records must remain separable. A layer route that also reports eggs must declare whether the egg burden is attributed here or in a separate egg dataset; one egg output is never counted in both.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | live chicken at the producing farm gate |
| How much | 1 kg measured live weight |
| How well | purpose and class; breed or genetic line where material; rearing or laying route; age or phase; health and market state; geography; scale and gut-fill or shrink convention |
| How long or cycle | declared flock cohort and reporting period, covering attributed replacement, brooding, growing or laying, selection and handover phases |
| reference_flow_link | `live_chicken_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live chicken at producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | live weight; head count; purpose and class; route; cohort and reporting period; farm-gate handover; geography; mortality; breeding or replacement phase; egg co-output decision |

The generic reference flow UUID remains unresolved. A farm-live candidate uses Number of items rather than Mass, another Mass candidate is China-specific, and a third is feed-grade at plant. Head count is mandatory supporting activity data but does not substitute for the 1 kg Mass reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_mass` | reference output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Sum weighed live birds crossing the farm gate; preserve weigh date, sampling, class and shrink convention before normalizing to 1 kg. |
| `bird_count_mass` | bird admission, mortality and sale | Mass and count | kg and head | Link head counts to measured or sampled class-specific live mass; never convert count using a universal weight. |
| `feed_dry_matter` | feed and litter | Mass | kg as-fed and kg dry matter | Preserve moisture, issued quantity, returns and stock change; convert as-fed to dry matter only from recorded composition. |
| `water_and_energy` | supplied water and energy | Volume or Mass; energy or carrier quantity | m3 or kg; kWh, MJ, L or kg | Keep water function, energy carrier and original unit separate before any conversion or shared-meter allocation. |
| `species_emissions` | manure-system emissions | Substance mass | kg CH4, kg N2O, kg NH3 | Calculate each species separately from declared flock category, manure path, activity data and method tier; do not collapse them into a generic gas mass. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |

## 5. System Boundary

Foreground starts with admitted chicks, pullets or other starting birds and the declared housing and land state. It includes controlled breeding or brooding when present, growing or laying, feed and water provision, animal health, ventilation and heat, controlled manure and litter handling, flock selection and live weighing through the producing-farm gate. Feed production, purchased-bird rearing, supplied energy, medicines and off-farm services require linked upstream datasets unless actually operated within the declared foreground. Directly controlled inbound movement is included only if not already in supplier delivery.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | admitted flock by class, age, live mass, head count, source and opening period, with declared housing and litter state |
| starting_condition_role | biological starting stock and shared housing state whose prior burdens must be linked or explicitly attributed by period |
| product_classification_scope | CPC 3.0 `02151`, live chickens; eggs, meat and other poultry are separate categories |
| recursive_input_rule | purchased or internally transferred live chickens are starting-stock inputs with source, mass, count, phase, date and prior burden; they are not silently recreated as farm-gate output |
| upstream_dataset_requirement | supplier or prior-phase datasets for birds, feed, bedding, health products, energy and services; any missing compatible dataset requires a disclosed gap and replacement plan |
| disclosure | flock purpose and class, route, site, housing and range access, feed basis, manure path, mortality, egg output, shared assets, phase and period, live-weight method, output handovers and unresolved identities |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_managed_flock` | all routes | Model one managed flock parent; declare broiler, breeder, layer, housed or free-range changes in topology, feed, housing, litter, manure, energy, duration and validation from actual route records. | `fao-leap-poultry-2016` |
| `b_farm_gate` | live chicken reference | Stop at live-weight measurement and transfer at the producing farm gate; exclude slaughter, dressing and downstream transport. | `fao-leap-poultry-2016` |
| `b_phase_links` | replacement, brooding, growing, laying and spent-bird phases | Link admission, inputs, shared assets, mortality, eggs and live-bird output to cohort and period; attribute opening-stock burdens once. | `fao-leap-poultry-2016` |
| `b_manure_route` | manure and litter | Include controlled collection, storage, treatment and land use; record exported product or waste at actual handover and exclude off-farm treatment from the farm foreground unless controlled. | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `b_shared_housing` | poultry house, range, water, energy and manure facilities | Identify all flock classes and service periods consuming each shared asset, including egg and live-bird nodes; assign its burden once on measured service. | `fao-leap-poultry-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `flock_production` | Flock husbandry and farm-gate handover | required | Declare actual broiler, breeder, layer, free-range or housed route and output set. | Managed biological production, manure responsibility, output selection and live-weight gate. | kg live chicken handed over, with head count and cohort-period reconciliation |

### Process: Flock husbandry and farm-gate handover (`flock_production`)

#### Inputs

##### Product flows

###### Admitted chicks, pullets or other live starting birds (`starting_birds`)

Record all birds admitted from an earlier phase or supplier, with class, origin, count, measured or sampled live mass, date and inherited burden.

Denominator and scope requirements：per kg live chicken at farm gate, with cohort-period index

- Selected flow: Live starting chickens
- Flow property / unit: Mass and supporting count / kg and head
- Amount rule: admitted live mass and count by flock and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bird_events`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional admitted-bird mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg admitted live mass/kg live reference output
  - Basis: broad first-pass screen; zero is possible for fully farm-born cohorts
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased feed ingredients and complete rations (`feed_input`)

Include feed issued to the flock, including pasture or scavenged intake when estimated from recorded access and performance; preserve product identity, as-fed mass, dry matter and diet phase.

Denominator and scope requirements：per kg live chicken at farm gate and allocated cohort-period

- Selected flow: Poultry feed products by actual formulation
- Flow property / unit: Mass / kg as-fed and kg dry matter
- Amount rule: net feed issued plus measured or modelled range intake by flock phase
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_records`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional feed dry-matter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 40
  - Unit: kg dry matter/kg live reference output
  - Basis: broad broiler-to-breeder/layer period screen, replaced by actual diet records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied drinking and husbandry water (`water_input`)

Record supplied drinking, cleaning and cooling water by purpose and source. This conditional umbrella is expanded to concrete exchanges from foreground use records.

Denominator and scope requirements：per kg live chicken at farm gate

- Selected flow: Water supply for flock operations
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: metered or estimated withdrawal by function, flock and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Sources: `fao-leap-water-livestock-2019`
- Range: Provisional supplied-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg live reference output
  - Basis: broad water-use screen; retain actual purpose and source
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, heating and other energy carriers (`energy_input`)

Keep electricity, gas, biomass and liquid fuels separate by carrier and use; ventilation, heating, feeding and manure equipment can have different service periods.

Denominator and scope requirements：per kg live chicken at farm gate

- Selected flow: Energy supply for flock operations
- Flow property / unit: Energy or carrier quantity / kWh, MJ, kg or L
- Amount rule: meter, invoice or equipment log by carrier and service period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh-equivalent/kg live reference output
  - Basis: broad first-pass route screen, not a carrier conversion rule
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bedding, litter amendments and health products (`husbandry_material_input`)

Inventory each bedding, disinfectant, vaccine, medicine and other physical husbandry product separately in the concrete dataset; do not equate a dose with mass.

Denominator and scope requirements：per kg live chicken at farm gate

- Selected flow: Route-specific bedding and animal-health products
- Flow property / unit: Mass, volume, dose or item / original product unit
- Amount rule: measured purchase, use and stock change by item and flock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_health`
- Range: Provisional material-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg physical material/kg live reference output
  - Basis: broad material screen; discrete doses remain in their original unit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Controlled inbound freight service (`inbound_transport`)

Record only an actual road-freight inbound service under farm control for birds, feed or materials. Supplier-delivered logistics already included upstream is excluded. A non-road service needs its own verified exchange outside this road-group card.

Denominator and scope requirements：per kg live chicken at farm gate

- Selected flow: Inbound road freight service
- Flow property / unit: Goods transport / t*km
- Amount rule: delivered mass multiplied by controlled road distance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inbound_transport`
- Range: Provisional inbound transport screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: t*km/kg live reference output
  - Basis: broad route screen; zero when all inbound transport is supplier-delivered
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No purchased waste input is assumed. Any imported manure or litter substrate is a separately identified product or waste input with origin, treatment status and contamination evidence, and requires a documented route decision before inclusion.

##### Elementary flows

Record direct land occupation or water abstraction only when measured under the foreground boundary; these are not inferred from access to a range or from purchased water.

#### Outputs

##### Product flows

###### Live chickens handed over at farm gate (`live_chicken_output`)

Record only birds alive at the point of transfer. Reconcile sold or transferred mass and count with admission, growth and mortality records.

Raw reference-output records: measured kg live chicken handed over by class and cohort Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Live chicken at producing farm gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bird_events`
- Sources: `fao-leap-poultry-2016`
- Range: Reference mass identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference output
  - Basis: definition of the 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-poultry-2016`

###### Independently transferred hatching or table eggs (`egg_coproduct`)

Include only eggs that leave the same managed system as intended products. Record egg class, shell-on mass, count and farm-gate handover; a separately modelled egg PCR must receive the attributed burden once.

Denominator and scope requirements：per kg live chicken output and declared output set

- Selected flow: Hatching or table eggs by actual product identity
- Flow property / unit: Mass and count / kg shell-on and item
- Amount rule: measured saleable eggs handed over by category and cohort-period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_handover`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional egg co-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg eggs/kg live reference output
  - Basis: broad layer-lifetime screen; zero for non-laying routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure or litter intentionally exported as product (`manure_product`)

Count as a product only if an identified buyer or receiving process accepts it for a documented beneficial use. Otherwise use the waste card.

Denominator and scope requirements：per kg live chicken output

- Selected flow: Chicken manure or litter product by actual state
- Flow property / unit: Mass / kg wet and kg dry matter
- Amount rule: measured transferred mass and composition at product handover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_records`
- Sources: `fao-leap-nutrient-flows-2018`
- Range: Provisional exported-manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg wet manure or litter/kg live reference output
  - Basis: broad route screen with state and moisture declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dead birds and non-saleable carcasses (`mortality_waste`)

Record deaths, count and recovered mass by phase, and route to on-farm treatment or off-farm handover. Do not add dead birds to live reference output.

Denominator and scope requirements：per kg live chicken output

- Selected flow: Poultry mortality waste by actual disposal route
- Flow property / unit: Mass and count / kg and head
- Amount rule: measured or class-weight-estimated dead-bird mass by event
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bird_events`
- Range: Provisional mortality screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg dead-bird mass/kg live reference output
  - Basis: broad cohort screen, replaced by actual deaths and class mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unusable manure, litter and rejected egg residues (`residual_waste`)

Identify treatment, destination and moisture for each residue. Avoid reporting the same manure stream as both product and waste.

Denominator and scope requirements：per kg live chicken output

- Selected flow: Poultry litter, manure or egg residue waste by state
- Flow property / unit: Mass / kg wet and kg dry matter
- Amount rule: measured mass after deduction of separately transferred product streams
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Sources: `fao-leap-nutrient-flows-2018`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg wet residue/kg live reference output
  - Basis: broad route screen; retain moisture and disposal route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Biogenic methane from controlled manure pathway (`manure_methane_air`)

Include only where the declared manure system and method generate CH4. Do not infer an enteric methane pathway for poultry.

Denominator and scope requirements：per kg live chicken output

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: manure-system-specific CH4 calculated from measured volatile solids and documented factor tier
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional manure-methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg CH4/kg live reference output
  - Basis: broad conditional screen; actual value uses declared manure path and factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide from controlled manure management (`manure_n2o_air`)

Calculate direct and attributable indirect N2O by the documented manure and nitrogen pathway; avoid duplicating downstream land application emissions.

Denominator and scope requirements：per kg live chicken output

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: pathway-specific N2O from measured manure nitrogen and documented factor tier
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional manure-nitrous-oxide screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg N2O/kg live reference output
  - Basis: broad conditional screen; actual value uses N pathway and factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia from controlled manure and litter (`manure_nh3_air`)

Record ammonia as NH3 species mass to air where a declared housing, storage or treatment pathway emits it.

Denominator and scope requirements：per kg live chicken output

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: pathway-specific NH3 from measured manure nitrogen and documented method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: Provisional manure-ammonia screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg NH3/kg live reference output
  - Basis: broad conditional screen; actual value uses recorded N and method
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_output_set` | live birds, eggs and exported manure | Enumerate every independently intended output and actual handover. Keep losses and waste outside the intended output set; separate hatching from table eggs and product manure from residue. | `fao-leap-poultry-2016`; `fao-leap-nutrient-flows-2018` |
| `a_physical_then_economic` | unavoidable shared output burdens | First separate measured process or phase burdens. Where a remaining shared burden cannot be subdivided physically, declare a documented physical causal basis if credible; otherwise use period-specific economic shares with disclosed prices and sensitivity. Never credit a co-product and allocate the same burden again. | `fao-leap-poultry-2016` |
| `a_phase` | breeder, broiler, layer and replacement periods | Attribute starting stock, replacement, rearing, laying, culling and termination burdens to their actual cohorts and outputs. State the period decision explicitly, including an opening-stock reconciliation and no duplicate allocation to a separate egg PCR. | `fao-leap-poultry-2016` |
| `a_shared_assets` | housing, equipment, water, energy and manure systems | Enumerate all consuming flock classes, output nodes and service periods. Allocate each asset once using recorded occupied area-time, equipment hours, meter use or another measured service basis; disclose a fallback and test total assigned share equals 100%. | `fao-leap-poultry-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bird_events` | `flock_production` | admitted birds, deaths and live handover | flock log and weighbridge record | event date, class, purpose, head count, weight, scale, phase, supplier or destination | direct counts and calibrated scale or documented sample; Raw aggregation requirements: sum by class-period; estimate missing class mass only from sampled birds. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each event | full declared cohort and reporting period | each house, flock and farm gate | per reference flow | signed transfer records, scale calibration and flock reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed_records` | `flock_production` | feed and range intake | inventory, ration and range log | product, batch, as-fed mass, dry matter, issued, returned, stock change, flock, access period | invoices, bin scale and ration or range intake calculation; Raw aggregation requirements: net intake by feed identity and phase, then allocated once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kg dry matter | delivery and feeding period | all active flock phases | each ration and flock | per reference flow | invoices, recipe, moisture assay and stock reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_water_energy` | `flock_production` | supplied water and energy | meter and invoice | purpose, source, meter, carrier, amount, unit, period, users | read meter or validated invoice; record allocation key; Raw aggregation requirements: assign by measured service and reconcile to bill. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | m3; kg; kWh; MJ; L | meter interval | full cohort period | every source, house and shared utility | per reference flow | meter reading, bill and shared-use schedule; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_materials_health` | `flock_production` | bedding and animal-health products | use and treatment register | item, dose or mass, unit, batch, treated birds, date, stocks | physical stock and treatment records; Raw aggregation requirements: net use by product and phase. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; L; dose; item | use event | full cohort period | each flock and storage area | per reference flow | stock count, treatment log and invoice; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_inbound_transport` | `flock_production` | controlled freight | trip record | cargo identity, mass, origin, destination, mode, distance, provider, delivery terms | route and delivery docket; Raw aggregation requirements: mass times distance, excluding supplier-included legs. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | t; km; t*km | each trip | full cohort period | controlled inbound legs | per reference flow | delivery note, route evidence and invoice; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_output_handover` | `flock_production` | eggs and other intended output | egg grading and transfer record | output class, shell-on mass, count, grade, rejects, date, buyer | scale, count and dispatch docket; Raw aggregation requirements: saleable mass by category-period; exclude rejects. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; item | each collection and dispatch | relevant laying periods | each layer flock and handover | per reference flow | grading log, scale and receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure_records` | `flock_production` | manure, litter, waste and species emissions | manure path and treatment log | flock class, housing, bedding, N, volatile solids, wet and dry mass, storage, export, treatment, factor tier | sampling, weighing, log and documented factor method; Raw aggregation requirements: close wet/dry mass and nitrogen balance, then calculate pathway species. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; kg N; kg VS; kg species | each removal and method period | all housing and storage periods | each manure pathway and receiving destination | per reference flow | sample result, removal ticket, factor version and balance; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_live_mass` | reference output | Sum measured transferred live mass by cohort; where batch weight is sampled, multiply class count by documented sample mean and disclose uncertainty. | event mass, head count, class and scale record | kg live chicken and head per cohort | `fao-leap-poultry-2016` |
| `c_feed_net` | feed | Net issued = opening stock + purchases - closing stock - returns; convert to dry matter with measured composition and assign by flock phase. | stock, invoice, recipe, moisture, flock period | kg as-fed and kg dry matter by feed identity | `fao-leap-poultry-2016` |
| `c_mortality` | deaths | Sum weighed carcasses or count times sampled phase-specific carcass mass; never add to live output. | death events, count, weight sample | kg mortality waste by phase | `fao-leap-poultry-2016` |
| `c_manure_species` | manure CH4, N2O and NH3 | Calculate species by declared manure system and appropriate IPCC or nutrient-flow method from measured VS and N; document factors and molecular conversion. | pathway, VS, N, temperature or storage conditions, factors | kg CH4, kg N2O, kg NH3 separately | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `c_alloc_reconcile` | multiple outputs and shared assets | Assign measured phase-specific burdens first; allocate remaining shared burdens by documented causal or disclosed economic basis and reconcile all output and period shares to one. | output masses, prices, service hours, occupied area-time, period | attributed burden by output and period | `fao-leap-poultry-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | flock and outputs | Preserve species, flock purpose, production route, class, phase, output category and actual handover gate. | flock register, transfer docket, housing and range log |
| `dq_temporal` | all flows | Cover the declared cohort and reporting period, including replacement, mortality, laying and culling where relevant; reconcile opening and closing stock. | dated event logs and cohort reconciliation |
| `dq_completeness` | feed, water, energy, manure, outputs | Explain missing records and zero-value flows; reconcile purchase, use, stock, output and residue balances. | invoices, meters, feed stocks and manure tickets |
| `dq_factors` | calculated emissions | Identify flock class, manure system, method tier, factor source and version, and species conversion. | factor sheet and activity-to-emission calculation |
| `dq_allocation` | co-products and shared assets | Preserve output handovers, shared users, service periods, basis and share sum. | allocation worksheet and dispatch records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference_gate` | reference output | Require live state, kg Mass, head count, purpose, class, cohort and producing-farm gate; reject meat or post-slaughter output and a Number-of-items-only reference. | `fao-leap-poultry-2016` |
| `v_route_delta` | alternative routes | Require the managed parent plus evidence for any housed, free-range, broiler, breeder or layer difference in topology, feed, manure, energy, periods or output set; do not accept a route label alone. | `fao-leap-poultry-2016` |
| `v_balance` | flock and residues | Reconcile admitted, born, sold, retained and dead head counts; reconcile feed and manure mass or nutrient paths within disclosed measurement uncertainty. | `fao-leap-poultry-2016`; `fao-leap-nutrient-flows-2018` |
| `v_output_once` | eggs, manure and live birds | Require unique handover and role for every output; prevent eggs or manure from appearing as both product and waste or in two PCR datasets with the same burden. | `fao-leap-poultry-2016` |
| `v_period_shared` | periods and shared assets | Require opening stock, phase links, asset users, service periods and shares summing to one; reject double attribution between egg and live-bird outputs. | `fao-leap-poultry-2016` |
| `v_emissions` | CH4, N2O and NH3 | Validate species, receiving medium, poultry category and documented manure pathway and factor; zero or omit methane when no generating pathway exists. | `ipcc-2019-livestock-manure` |
| `v_unresolved_uuid` | concrete exchanges | Replace every unresolved or unresolved flow with a detail-verified compatible UUID, retaining the flow identity verification evidence and selection evidence, before emitting TIDAS exchanges. | `fao-leap-poultry-2016` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground farm-gate live-chicken production package |
| downstream_use | `secondary_dataset` or `background_dataset` after route, output and identity review; process or lifecyclemodel projection |
| allowed_use | declared chicken purpose, geography, route, flock periods, output set, allocation and live-weight convention matching the consuming study |
| excluded_use | eggs as reference product; meat or slaughter output; other poultry; unreviewed generic conversion of head count to kg; cross-route substitution without matching husbandry |
| required_metadata | site, geography, time, flock purpose and class, route, housing and range access, phase, mortality, feed basis, manure path, output handovers, mass method, source and conditional flow identities identity resolution |
| required_quality_disclosure | data coverage, measured versus estimated amounts, factor tier, allocation, shared-asset basis, missing suppliers, provisional Range use and unresolved flow UUIDs |
| update_trigger | change in flock purpose, route, output set, manure system, reference-flow identity, major factor or data quality beyond declared coverage |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-poultry-2016` | official_guidance | FAO LEAP, Greenhouse gas emissions and fossil energy use from poultry supply chains (2016), https://openknowledge.fao.org/handle/20.500.14283/i6421en | poultry route, boundary, phases, output attribution and data records |
| `ipcc-2019-livestock-manure` | official_guidance | IPCC 2019 Refinement, Vol. 4, Ch. 10, Emissions from Livestock and Manure Management, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | poultry category and manure-pathway emission calculations |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP, Nutrient flows and associated environmental impacts in livestock supply chains (2018), https://openknowledge.fao.org/handle/20.500.14283/ca1328en | manure nitrogen and nutrient-flow reporting |
| `fao-leap-water-livestock-2019` | official_guidance | FAO LEAP, Water use in livestock production systems and supply chains (2019), https://www.fao.org/partnerships/leap/resources/publications/ | supplied-water source and use distinction |
