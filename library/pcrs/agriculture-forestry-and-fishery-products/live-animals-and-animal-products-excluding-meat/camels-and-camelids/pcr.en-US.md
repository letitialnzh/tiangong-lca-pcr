---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.camels-and-camelids
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Live camels and camelids at farm gate

## 1. Scope and Applicability

This PCR covers live dromedary and Bactrian camels and live South American camelids within CPC 02121, from admitted breeding or replacement animals through managed reproduction, birth, rearing, grazing or browsing, supplementation, watering, health management, shelter, manure routing, selection, weighing and transfer at the producing farm gate. It excludes other ruminants, meat, raw milk, fibre or hair, hides, services, slaughter and post-transfer transport as reference products.

Species group and route are mandatory because pastoral/mobile, mixed/agropastoral and housed/semi-intensive systems have different feed, movement, water, shelter, manure and output requirements. These routes may coexist only when separately recorded before transparent aggregation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.camels-and-camelids |
| classification_refs | CPC 3.0: 02121 Camels and camelids |
| covered_products | Live dromedary and Bactrian camels, llamas, alpacas and other South American camelids transferred at the producing farm gate for breeding, replacement, meat, milk, fibre or mixed purposes while the product remains a live animal. |
| excluded_products | Other ruminants; meat or carcasses; milk, fibre or hair and hides as reference products; semen or embryos; separately supplied services; slaughter and post-farm transport. |
| representative_product | Live camel or other camelid weighed immediately before farm-gate transfer. |
| production_route | Parent activity: managed biological production. Declared alternatives are pastoral/mobile, mixed/agropastoral and housed/semi-intensive; route deltas concern movement, browse and feed, water, shelter, manure, energy and conditional outputs. |
| market_state | Alive and fit for declared transfer, with species group, class, purpose, sex where material, route, live-weight basis, geography and period declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Live camels and camelids at the producing farm gate before downstream transport or slaughter. |
| How much | 1 kg live weight. |
| How well | Species group, animal class and purpose, sex where material, route, fitness and weighing basis are declared. |
| How long or cycle | One cohort or reporting period linking entries, biological phases, outputs, losses and shared assets without duplicate attribution. |
| reference_flow_link | `live_camelid_reference_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Camels and camelids `d5b8e5ed-dfcc-4755-a7fb-d51316970d8b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species group; animal class and purpose; sex where material; genotype where material; production route; feed and browse regime; live-weight convention and scale point; geography; farm-gate transfer; cohort or reporting period |

The broad fixed identity requires every qualifier above; it cannot substitute for camel milk, fibre, meat or a service.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_weight` | reference animals | Mass | kg | Weigh immediately before transfer and retain scale point, calibration, individual/lot basis and any fasting or gut-fill convention. |
| `count_to_mass` | entries, births, deaths and transfers | Mass | kg | Preserve head, species and class; convert only with measured weights or a documented matching-class mean. |
| `feed_dry_matter` | forage, browse, concentrates and supplements | Mass | kg dry matter and kg as-fed | Preserve as-fed mass and dry-matter fraction; identify the reviewed method for unmeasured intake. |
| `water_basis` | supplied water | Mass or volume | kg or m3 | Separate managed supply from rainfall or unmanaged access and disclose meter coverage or estimation. |
| `emission_basis` | CH4, N2O and NH3 | Mass of named compound in final exchanges | kg CH4; kg N2O; kg NH3 | Retain raw N-basis records; before final normalization convert kg N2O-N to kg N2O by 44/28 and kg NH3-N to kg NH3 by 17/14. Values already expressed as compound mass are not converted again. The final fixed-UUID exchange uses the mass of its named compound, never the N-basis amount. Keep raw species and elemental bases explicit; carbon-equivalent quantities do not replace CH4 mass. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Breeding or replacement animals and purchased feed, water, energy, health products and other managed inputs entering the producer boundary. |
| starting_condition_role | These inputs initiate managed biological production; reproduction, rearing, producer-controlled movement, feeding, watering, shelter, manure handling, weighing and hand-off remain inside. |
| product_classification_scope | Live camels and camelids in CPC 02121; milk, fibre, manure, meat, hides and services retain separate identities. |
| recursive_input_rule | Incoming animals from another producer are upstream Product inputs with supplier datasets; do not recreate their earlier production within the receiving herd. |
| upstream_dataset_requirement | Require supplier datasets for incoming animals, purchased feed and health inputs, energy, supplied water and included inbound transport; unresolved identities require foreground verification. |
| disclosure | Declare species, class, purpose, route and mobility, feed/browse and water regimes, breeding/replacement, manure pathways, conditional milk/fibre, shared assets and periods, geography, weighing and hand-off. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `managed_boundary` | all routes | Include managed reproduction, birth, rearing, feed/browse, water, health, shelter, manure, selection, weighing and hand-off; exclude slaughter and downstream transport. | `fao-gleam`; `fao-ruminant-lca-2013` |
| `species_route_resolution` | camel and South American camelid routes | Declare the managed-production parent and species/route delta; preserve route-specific movement, feed, water, shelter, manure, energy and output records. | `fao-gleam`; `ipcc-2019-livestock-manure` |
| `period_linkage` | biological phases and periods | Index animals, inputs, outputs, losses, replacement and assets to the causing phase and period; disclose partial-cycle coverage. | `fao-ruminant-lca-2013` |
| `shared_asset_boundary` | watering, shelter, fencing, handling, vehicles and manure systems | List assets, consumers and service periods, choose a documented driver and count each burden once. | `fao-ruminant-lca-2013` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_camelid_production` | Managed camelid production and farm-gate transfer | required | Always; route-specific and milk/fibre activities only when present. | Managed biological production, route resolution, output selection, weighing and hand-off. | 1 kg live weight, supported by head, animal-day, distance, cohort and period records. |

### Process: Managed camelid production and farm-gate transfer (`managed_camelid_production`)

#### Inputs

##### Product flows

###### Incoming breeding and replacement animals (`incoming_animals`)

Record live animals admitted from outside the represented herd history, without duplicating animals born and retained inside the cohort.
Denominator and scope requirements：per kg reference live weight and period

- Selected flow: Live incoming camel or camelid by actual species/class (UUID unresolved)
- Flow property / unit: Mass / kg live weight; head retained
- Amount rule: Record species, class, origin, entry, purpose, head and live weight; attribute burden over actual service/output periods.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd_events`
- Sources: `fao-ruminant-lca-2013`
- Range: Incoming-animal QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg incoming live weight/kg reference live weight
  - Basis: broad replaceable screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed, forage and browse (`feed_browse`)

Record managed feed, forage, browse and supplements by actual source, state, species group and biological phase.
Denominator and scope requirements：per kg reference live weight

- Selected flow: Actual feed, forage or browse identity (UUID unresolved)
- Flow property / unit: Mass / kg dry matter and kg as-fed
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_movement`
- Sources: `ipcc-2019-livestock-manure`; `fao-ruminant-lca-2013`
QA scope for this card: the intake range below screens only separately recorded biological intake on its stated unit and denominator, reconstructed under calc_feed_supply_and_intake. It does not bound or substitute for the supplied-feed exchange, which retains in-boundary uneaten losses and their production burden. Do not compare feed supply with intake bounds or subtract losses merely to fit a range. A supply-specific range requires separate evidence; missing intake/loss records leave this intake QA unassessed, not passing.

- Range: Feed-intake QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 80
  - Unit: kg dry matter/kg reference live weight
  - Basis: broad replaceable screen, not a ration; QA variable is recorded biological intake only, not the supplied-feed inventory amount
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Animal-health products (`health_products`)

Record medicines, vaccines, disinfectants and other health products that cross the foreground boundary.
Denominator and scope requirements：per kg reference live weight

- Selected flow: Health product by actual formulation (UUID unresolved)
- Flow property / unit: Mass, volume or dose / kg, L or dose
- Amount rule: Record formulation, administered/discarded quantity, species/class, date and purpose; zero when unused.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_health_inputs`
- Sources: `fao-gleam`
- Range: Health-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg or L product/kg reference live weight
  - Basis: broad conditional screen, not a dose
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water (`supplied_water`)

Record managed drinking and service water supplied to the represented animals and activities.
Denominator and scope requirements：per kg reference live weight

- Selected flow: Supplied process water
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Meter or estimate documented supply by use, species, location and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_transport`
- Range: Water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/kg reference live weight
  - Basis: broad arid-to-housed route screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity at the equipment supply point (`energy_supply_electricity`)

**Collection scope and applicability for energy_supply.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record purchased electricity, fuels, heat and other energy carriers by actual use and reporting period.
Denominator and scope requirements：per kg reference live weight

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Electricity at the equipment supply point
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_water_energy_transport` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_transport`
- Sources: `fao-agricultural-energy`

###### Diesel fuel supplied to equipment (`energy_supply_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel supplied to equipment
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_water_energy_transport` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_transport`
- Sources: `fao-agricultural-energy`

###### Purchased heat at the process inlet (`energy_supply_heat`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Purchased heat at the process inlet
- Flow property / unit: Energy / MJ
- Amount rule: Collect raw quantities for this identity under `cp_water_energy_transport` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_transport`
- Sources: `fao-agricultural-energy`

###### Included inbound transport (`inbound_transport`)

Record freight transport for material inputs only when that service lies inside the declared foreground boundary.
Denominator and scope requirements：per kg reference live weight

- Selected flow: Inbound road-freight service by vehicle/cargo
- Flow property / unit: Goods transport / t*km
- Amount rule: Multiply transported tonnes by included one-way kilometres; retain vehicle, cargo, load and route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_energy_transport`
- Range: Transport QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: t*km/kg reference live weight
  - Basis: broad conditional screen
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live camel or camelid reference output (`live_camelid_reference_output`)

Record live animal mass at the producing-farm handover, retaining species group, class, route and weighing evidence.
Denominator and scope requirements：1 kg live weight at farm gate

Raw reference-output records: Record accepted live weight and head by species, class, route, lot, weighing point and transfer date; normalize to 1 kg. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

- Selected flow: Camels and camelids `d5b8e5ed-dfcc-4755-a7fb-d51316970d8b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd_events`
- Sources: `fao-gleam`
- Range: Reference normalization
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg reference live weight
  - Basis: one normalized result
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Camel milk co-product (`camel_milk`)

Record camel milk only when it is independently intended and transferred; this card is inapplicable to South American camelid routes. Record warm or chilled state, temperature and actual gate separately for each lot. This broad card has no fixed UUID: a chilled farm-gate identity is eligible only for an actually chilled, gate-matched lot after identity confirmation. Never infer cooling from a UUID; include measured pre-handover cooling inputs and losses only when cooling actually occurs.
Denominator and scope requirements：per kg reference live weight and period

- Selected flow: Raw camel milk, handover state and gate qualified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record transferred mass, species, period, composition and hand-off; inapplicable to South American camelid routes and milk consumed internally.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_losses`
- Sources: `fao-gleam`
- Range: Camel-milk QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg milk/kg reference live weight
  - Basis: broad conditional screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fibre or hair co-product (`fibre_hair`)

Record fibre or hair only when it is independently intended and transferred in a declared species- and state-specific form.
Denominator and scope requirements：per kg reference live weight and period

- Selected flow: Camelid fibre or hair by species and state (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record recovered mass, species, group, method, moisture/greasy basis, grade and hand-off; inapplicable where not intended.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_losses`
- Sources: `fao-gleam`
- Range: Fibre/hair QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg fibre or hair/kg reference live weight
  - Basis: broad conditional screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Exported manure (`exported_manure`)

Record manure as a Product output only when it is intentionally transferred to an identified recipient.
Denominator and scope requirements：per kg reference live weight and period

- Selected flow: Exported camelid manure by managed state (UUID unresolved)
- Flow property / unit: Mass / kg wet mass plus dry matter or nutrient content
- Amount rule: Record mass, moisture, nitrogen where available, species, state, destination and date; do not duplicate deposition or waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_emissions`
- Sources: `fao-leap-nutrient-flows-2018`
- Range: Manure-export QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg wet manure/kg reference live weight
  - Basis: broad conditional screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mortalities and unusable material (`mortality_waste`)

Record animal mortalities and unusable material as destination-specific waste rather than intended output.
Denominator and scope requirements：per kg reference live weight

- Selected flow: Camelid mortality waste by treatment route (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record head, species/class, mass, date, cause where known and treatment/destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outputs_losses`
- Sources: `fao-gleam`
- Range: Mortality QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg mortality/kg reference live weight
  - Basis: broad replaceable screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric methane to air (`enteric_ch4`)

Calculate biogenic methane released to air from enteric fermentation by species group, class and phase.
Denominator and scope requirements：per kg reference live weight

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Amount rule: Calculate by species/category and period from population, feed/gross energy and reviewed factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_emissions`
- Sources: `ipcc-2019-livestock-manure`
- Range: Enteric-CH4 QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg CH4/kg reference live weight
  - Basis: broad result screen, not a factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure methane to air (`manure_ch4`)

Calculate biogenic methane released to air from managed manure pathways separately from enteric methane.
Denominator and scope requirements：per kg reference live weight

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Amount rule: Calculate by species, volatile solids, pathway, climate and storage; keep separate from enteric CH4.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_emissions`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- Range: Manure-CH4 QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg CH4/kg reference live weight
  - Basis: broad result screen, not a factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct nitrous oxide to air (`direct_n2o`)

Calculate direct nitrous oxide released to air from manure management and deposited excreta within the boundary.
Denominator and scope requirements：per kg reference live weight

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- Amount rule: Calculate by species/class, nitrogen excretion, period and manure/deposition pathway; retain basis conversion.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_emissions`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- Range: Direct-N2O QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg N2O/kg reference live weight
  - Basis: broad result screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Indirect nitrous oxide to air (`indirect_n2o`)

Calculate indirect nitrous oxide only from documented volatilization or leaching and runoff precursors.
Denominator and scope requirements：per kg reference live weight

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- Amount rule: Calculate only for documented volatilization or leaching/runoff precursors; do not duplicate direct N2O.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_emissions`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- Range: Indirect-N2O QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg N2O/kg reference live weight
  - Basis: broad result screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`ammonia_air`)

Calculate ammonia released to air from the represented manure-nitrogen pathways while preserving the molecular basis.
Denominator and scope requirements：per kg reference live weight

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3
- Amount rule: Calculate by manure nitrogen pathway and reviewed factors; preserve basis and precursor linkage.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_emissions`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: Ammonia QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg NH3/kg reference live weight
  - Basis: broad result screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `complete_outputs` | animals, camel milk, fibre/hair and exported manure | Enumerate intended outputs and hand-offs; milk is camel-only and fibre follows actual species/state. Mortalities and untransferred residues are loss/waste. | `fao-ruminant-lca-2013`; `fao-leap-nutrient-flows-2018` |
| `partition_first` | species, routes, activities, periods and outputs | Directly assign measured feed, water, movement, manure, energy and output burdens before residual allocation. | `fao-ruminant-lca-2013` |
| `residual_allocation` | inseparable joint outputs | Use representative farm-gate economic value unless reviewed physical causation is demonstrated; disclose prices, currency, period and sensitivity. | `fao-ruminant-lca-2013` |
| `period_attribution` | breeding/replacement animals and long-lived assets | Link events to phases/periods, attribute over actual service and prohibit later duplicate attribution. | `fao-ruminant-lca-2013` |
| `shared_asset_attribution` | shared watering, shelter, handling, vehicles and manure assets | Enumerate consumers and periods; prefer metering, then operating hours, animal-days or live-weight-time; count once. | `fao-ruminant-lca-2013` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd_events` | managed_camelid_production | entries, births, class changes, transfers, deaths and reference output | herd, weight and transfer records | id; species; class; sex; purpose; event; date; head; weight; scale; origin/destination | calibrated weighing linked to herd records; Raw aggregation requirements: reconcile opening + entries + births = closing + transfers + deaths; normalize transferred mass. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg | each event | complete cohort/period | all represented groups | per reference flow | calibration, signed transfer, reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed_movement` | managed_camelid_production | feed, browse, grazing and managed movement | invoice, ration, land and movement log | identity; source; as-fed; dry matter; class; parcel; distance; duration; refusals | weigh supply; declare method for unmeasured intake; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | kg; animal-days; km | event/period | all phases | group, land and shelter | per reference flow | invoice, analysis, land/movement logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_health_inputs` | managed_camelid_production | health inputs | treatment and purchase record | product; formulation; dose; quantity; species/class; date; purpose; discard | reconcile treatments, purchases and stock; Raw aggregation requirements: sum by formulation. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | dose; kg; L | treatment | full period | all groups | per reference flow | signed log, invoice, stock balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_water_energy_transport` | managed_camelid_production | water, energy and transport | meter, invoice, fuel and trip logs | source/carrier; quantity; activity; cargo; mass; distance; vehicle; date | meters, invoices, tanks and route records; Raw aggregation requirements: direct assignment, otherwise documented driver. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | m3; kg; L; kWh; MJ; t*km | month/trip/event | full period | all relevant activities | per reference flow | calibration, invoice, trip and allocation records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_outputs_losses` | managed_camelid_production | milk, fibre, mortality and other outputs/losses | output, transfer, mortality and waste records | identity; species; mass; basis; class; date; destination; cause; fate | weigh/meter; matching-class estimate only for mortality; Raw aggregation requirements: aggregate by identity and hand-off; separate internal use, product and waste. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; L; head | event | full period | all groups/gates | per reference flow | scale/meter, transfer and loss logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure_emissions` | managed_camelid_production | manure pathways and emissions | population, feed, excretion, pathway and climate records | species/class; animal-days; feed/energy; N; pathway; storage; climate; tier; factors | records plus declared reviewed equations; Raw aggregation requirements: calculate by species/class/period/pathway and reconcile material. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg manure; kg CH4; kg N2O; kg NH3 | month/phase | all phases/pathways | deposition, collection, storage, application, export | per reference flow | source records, worksheet, factor provenance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed_supply_and_intake` | `managed_camelid_production` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `managed_camelid_production` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_output` | all rows | attributable period amount / accepted farm-gate live weight; preserve raw species/route records. | amount; transferred live weight | amount/kg reference | `fao-ruminant-lca-2013` |
| `herd_balance` | herd events | opening + entries + births = closing + transfers + deaths; class transitions are linked, not new animals. | events | reconciled head balance | `fao-ruminant-lca-2013` |
| `dry_matter` | feed/browse | as-fed mass × measured/supplier dry-matter fraction; declare method for unmeasured intake. | as-fed; fraction; land records | kg dry matter | `ipcc-2019-livestock-manure` |
| `enteric_methane` | enteric CH4 | Apply declared tier by species/category and period; retain activity and factors. | category; animal-days; feed/energy; factors | kg CH4 | `ipcc-2019-livestock-manure` |
| `manure_emissions` | manure CH4, N2O and NH3 | Apply the declared reviewed equations by animal category, excretion and manure pathway. Retain raw N-basis records; before final normalization convert kg N2O-N to kg N2O by 44/28 and kg NH3-N to kg NH3 by 17/14. Values already expressed as compound mass are not converted again. The final fixed-UUID exchange uses the mass of its named compound, never the N-basis amount. | category; excretion/N; pathway; climate; factors | kg CH4, N2O, NH3 | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `transport_service` | included transport | tonnes × included one-way km. | cargo mass; distance | t*km | `fao-ruminant-lca-2013` |
| `calc_feed_supply_and_intake` | `feed_browse` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `direct_n2o`; `indirect_n2o` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `ipcc-2019-livestock-manure`; `ipcc-managed-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_gate` | reference output | Declare species, class/purpose, route, geography, period, weighing and transfer. | herd, scale, transfer and metadata records |
| `route_specificity` | all rows | Separate materially different pastoral/mobile, mixed and housed routes. | route, movement, feed, water, shelter and aggregation records |
| `temporal_completeness` | herd/assets | Cover material phases/events or disclose missing phases and supplier datasets. | herd calendar and event records |
| `output_reconciliation` | outputs/losses | Reconcile animals, applicable milk/fibre, manure, deaths, closing stock and internal use. | output, inventory, mortality and waste records |
| `manure_balance` | nutrients/emissions | Reconcile deposition, storage, treatment, application, export and waste. | pathway balance and transfer records |
| `shared_traceability` | shared assets | Retain consumers, periods, measurements, driver and single-count evidence. | meters, logs and attribution worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference output | Reject meat, milk, fibre, skin, service or slaughtered identities; require fixed live-animal UUID, species/route qualifiers and farm-gate live-weight basis. | `fao-gleam` |
| `validate_route` | route variants | Require one species/route or transparent aggregation and matching feed, movement, water, shelter, manure, energy and output records. | `fao-gleam`; `ipcc-2019-livestock-manure` |
| `validate_periods` | multi-period production | Reconcile stocks/events by species and period and reject duplicate animal, replacement or asset burdens. | `fao-ruminant-lca-2013` |
| `validate_outputs` | reference/co-products | Require complete outputs/losses, hand-offs, partitioning and residual method; reject camel milk on South American camelid routes and duplicate hand-offs. | `fao-ruminant-lca-2013`; `fao-leap-nutrient-flows-2018` |
| `validate_shared_assets` | shared assets | Require at least two consumers/periods, a service boundary, one driver and no duplicate burden. | `fao-ruminant-lca-2013` |
| `validate_emissions` | enteric/manure rows | Require category, activity, pathway, tier, factor provenance, species/basis and reconciliation; factors are inputs, not observed amounts. | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `validate_flow_identity` | water, energy, transport | Concrete publication requires one verified UUID matching set/group, property, unit, geography and use; unresolved cards cannot carry fixed UUIDs. |  |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `ipcc-2019-livestock-manure`; `ipcc-managed-soils-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-level package for managed live camel/camelid production and transfer. |
| downstream_use | `secondary_dataset`; `background_dataset` after identity, route, allocation, temporal and geography review. |
| allowed_use | Farm-gate inventories matching species, class, purpose, route, geography, period and live-weight basis; input to downstream animal-product models. |
| excluded_use | Meat, milk-only or fibre-only reference products, other ruminants, services, slaughter or post-transfer transport without separate datasets. |
| required_metadata | CPC; species; class/purpose; sex/genotype where material; route/mobility; feed/browse; water; manure; geography; period; shared assets; weighing; transfer gate. |
| required_quality_disclosure | Coverage, missing phases, estimation, aggregation, allocation/prices, shared drivers, emission method/factors, unresolved identities and Range overrides. |
| update_trigger | Changed boundary/gate; new species/route evidence; compatible UUID; revised livestock/manure method; or reviewed evidence replacing provisional ranges. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-gleam` | official_guidance | FAO, *Global Livestock Environmental Assessment Model*. <https://www.fao.org/gleam> (retrieved 2026-09-29). | system coverage, routes, inventory and outputs |
| `fao-ruminant-lca-2013` | official_guidance | FAO, *Greenhouse gas emissions from ruminant supply chains — A global life cycle assessment*, 2013. <https://www.fao.org/docrep/018/i3461e/i3461e.pdf> (retrieved 2026-09-29). | boundary, route, periods, allocation and collection |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP, *Nutrient flows and associated environmental impacts in livestock supply chains*, 2018. <https://openknowledge.fao.org/handle/20.500.14283/ca1328en> (retrieved 2026-09-29). | manure, nutrient, ammonia and pathway rules |
| `ipcc-2019-livestock-manure` | method_factor | IPCC, *2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*. <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf> (retrieved 2026-09-29). | category, feed, CH4, N2O, methods and factors |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed supply versus intake and waste burden, not animal parameters. Applying this accounting principle to the declared taxon is this PCR's methodological choice; no pig diet or emission factor is transferred. |
| `ipcc-managed-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Direct/indirect nitrogen pathways and coordination of manure storage with managed-soil emissions; select applicable species and management evidence. |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
