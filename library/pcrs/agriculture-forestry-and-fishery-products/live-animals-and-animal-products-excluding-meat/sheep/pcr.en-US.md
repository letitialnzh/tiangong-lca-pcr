---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.sheep
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Live sheep at farm gate

## 1. Scope and Applicability

This PCR covers live domestic sheep managed for meat, wool, milk, breeding, replacement, or mixed purposes and transferred alive at the producing farm gate. The managed biological-production boundary includes admitted breeding or replacement stock, mating and gestation where present, lambing, lamb rearing, grazing or housed feeding, animal health, shearing as flock management, water and energy use, manure routing, selection or finishing, live-weight measurement, and transfer of control.

The reference product excludes goats and other ruminants, sheep meat and carcasses, raw milk, greasy wool or fleece as a separately sold reference product, skins, animal-husbandry or veterinary services sold separately, post-farm transport, and animals after slaughterhouse receipt. Extensive grazing or transhumant, mixed, and housed or intensive routes may coexist in one reporting system only when records preserve their separate feed, movement, infrastructure, manure, and emission requirements; otherwise choose one declared route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.sheep |
| classification_refs | CPC 3.0: 02122 Sheep |
| covered_products | Live domestic sheep transferred at the producing farm gate, including meat, wool, milk, breeding, replacement, cull, or mixed-purpose animal classes when the reference output remains a live animal. |
| excluded_products | Goats and other ruminants; meat or carcasses; raw milk; greasy wool or fleece as a separate reference product; skins; semen or embryos; husbandry or veterinary services; slaughter and post-farm transport. |
| representative_product | Live domestic sheep weighed immediately before farm-gate transfer. |
| production_route | Parent activity: managed biological production. Declared variants are extensive grazing or transhumant, mixed grazing-housed, and housed or intensive production; route deltas affect feed sources, movement, housing and shared infrastructure, manure routing, energy, and emission calculations. |
| market_state | Alive, fit for the declared purpose and transfer, with animal class, sex where material, production system, live-weight basis, geography, and reporting or cohort period declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Live domestic sheep at the producing farm gate, before post-farm transport or slaughter. |
| How much | 1 kg live weight. |
| How well | Animal class and purpose, sex where material, production system, health or fitness status relevant to transfer, and live-weight measurement basis are declared. |
| How long or cycle | One declared cohort or reporting period that links breeding/replacement, rearing, transfer, mortalities, co-products, and shared assets without double attribution. |
| reference_flow_link | `live_sheep_reference_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live domestic sheep at producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal class and purpose; sex where material; breed or genotype where material; production-system route; grazing or housing regime; live-weight measurement basis and scale point; geography; farm-gate transfer point; cohort or reporting period |

The reference product-flow UUID remains blank because no compatible mass-based live-sheep Product flow at the producing farm gate has been confirmed. Independently confirmed Mass property and Mass unit-group support identities are recorded above; they do not establish a product-flow binding. Head count may be retained as an activity datum, but it cannot replace measured live-weight mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_weight_mass` | reference live sheep | Mass | kg | Use live weight measured immediately before ownership or control transfer at the producing farm gate. Record the scale point, fasting or gut-fill convention if applied, and whether mass is individual or lot total. |
| `headcount_to_mass` | animal counts, entries, births, deaths, and transfers | Mass | kg | Count records require animal class and measured or sampled mean live weight before conversion to kg; retain count and conversion evidence. |
| `feed_mass_basis` | grazed forage, conserved forage, concentrates, by-products, supplements, and milk replacer | Mass | kg dry matter and kg as-fed | Preserve as-fed quantity and measured or supplier dry-matter fraction; do not combine wet and dry feed records without conversion evidence. |
| `water_measurement_basis` | supplied drinking and service water | Mass or volume | kg or m3 | Record metered or estimated supplied water separately from rainfall and unmanaged surface water; disclose the estimation method when no meter is used. |
| `gas_species_basis` | methane and nitrous oxide outputs | Mass of named compound in final exchanges | kg CH4; kg N2O | Retain raw N-basis records; before final normalization convert kg N2O-N to kg N2O by 44/28. Values already expressed as compound mass are not converted again. The final fixed-UUID exchange uses the mass of its named compound, never the N-basis amount. Keep raw species and elemental bases explicit; carbon-equivalent quantities do not replace CH4 mass. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Breeding or replacement sheep admitted to the represented flock, together with purchased feed, forage, water, energy, health products, and other managed inputs crossing the farm boundary. |
| starting_condition_role | The admitted flock and managed inputs start the foreground managed biological-production responsibility; births, growth, health management, grazing or housing, shearing, manure handling, and selection or finishing remain inside it. |
| product_classification_scope | Live sheep corresponding to CPC 3.0 02122; milk, wool, manure, meat, skins, and services remain separately classified outputs or activities. |
| recursive_input_rule | Live sheep admitted from another producer are recorded as upstream live-sheep Product inputs with their own supplier dataset; do not recursively recreate their pre-transfer production inside the receiving farm process. |
| upstream_dataset_requirement | Require supplier datasets for purchased or transferred live sheep, feed and forage, health products, energy carriers, supplied water, and inbound transport where material; unresolved flow identities remain semantic until a verified concrete UUID is selected. |
| disclosure | Declare animal classes and purpose, route variant, grazing and housing regime, feed boundary, breeding/replacement treatment, manure pathways, shearing and milk treatment, shared assets and service periods, reporting/cohort period, geography, weighing point, and farm-gate transfer. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `managed_flock_boundary` | all sheep-production routes | Include managed reproduction where present, births, rearing, grazing or housed feeding, animal health, shearing as flock management, water and energy, enteric emissions, manure routing, selection or finishing, and farm-gate weighing. Exclude slaughter, skinning, carcass handling, and post-farm transport. | `fao-leap-small-ruminants-2016` |
| `alternative_route_declaration` | extensive, transhumant, mixed, and housed or intensive routes | Identify the parent managed-biological-production activity and declare the selected route. Preserve route-specific feed, movement, housing, infrastructure, manure, energy, and calculation records; do not blend mutually exclusive routes unless separately measured and aggregated transparently. | `fao-leap-small-ruminants-2016` |
| `period_and_phase_linkage` | breeding, gestation, lambing, rearing, finishing, culling, and transfer | Index inputs, outputs, mortalities, replacement events, and shared assets to the cohort or reporting period and biological phase that caused them. Disclose partial-cycle coverage. | `fao-leap-small-ruminants-2016` |
| `shared_infrastructure_boundary` | housing, fencing, water systems, vehicles, handling and shearing facilities used by multiple groups or periods | Identify the shared asset, consuming animal groups or process activities, service period, and selected attribution driver. Count each service burden once. | `fao-leap-small-ruminants-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_sheep_production` | Managed flock production and farm-gate transfer | required | Always required for live sheep at farm gate. Breeding, milk, wool, grazing, housing, and manure subroutes are included only when present and recorded. | Foreground managed biological production with an explicitly declared alternative biological route delta, including output selection, weighing, and transfer. | 1 kg live sheep at the producing farm gate; retain animal-head, animal-day, cohort, and reporting-period records. |

### Process: Managed flock production and farm-gate transfer (`managed_sheep_production`)

#### Inputs

##### Product flows

###### Breeding and replacement sheep (`breeding_replacement_sheep`)

Record live sheep entering the represented flock from outside the foreground history. Retained animals born inside the same represented cohort are internal and must not be counted again as purchased inputs.

Denominator and scope requirements：per kg live sheep at farm gate and declared cohort or reporting period

- Selected flow: Live breeding or replacement sheep (UUID unresolved)
- Flow property / unit: Mass / kg live weight; item count retained in parallel
- Amount rule: Record admitted head count, animal class, origin, entry date, and measured live weight; allocate entry burden across the actual service period or represented offspring and outputs.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_flock_events`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional replacement-stock screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg admitted live weight/kg reference live weight
  - Basis: broad replaceable screen across self-replacing and purchased-replacement systems
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed and forage supply (`feed_forage_supply`)

Record each feed source actually entering the flock diet, including grazed forage where its managed production is in scope, conserved forage, concentrates, by-products, supplements, and milk replacer. No generic feed UUID is assigned.

Denominator and scope requirements：per kg live sheep at farm gate

- Selected flow: Sheep feed and forage by actual product identity (UUID unresolved)
- Flow property / unit: Mass / kg dry matter and kg as-fed
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using reconciled feed-supply records that retain in-boundary losses and their production burden.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_and_grazing`
- Sources: `fao-leap-small-ruminants-2016`; `ipcc-2019-livestock-manure`
QA scope for this card: the intake range below screens only separately recorded biological intake on its stated unit and denominator, reconstructed under calc_feed_supply_and_intake. It does not bound or substitute for the supplied-feed exchange, which retains in-boundary uneaten losses and their production burden. Do not compare feed supply with intake bounds or subtract losses merely to fit a range. A supply-specific range requires separate evidence; missing intake/loss records leave this intake QA unassessed, not passing.

- Range: Provisional lifetime feed-intake screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 30
  - Unit: kg feed dry matter/kg reference live weight
  - Basis: broad replaceable screen spanning animal class, route, growth period, pasture accounting, and co-product systems; not a default ration; QA variable is recorded biological intake only, not the supplied-feed inventory amount
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Veterinary and flock-health products (`flock_health_products`)

Record actual vaccines, medicines, disinfectants, mineral treatments, and other purchased health products by formulation and use. Veterinary services sold separately are not the reference product.

Denominator and scope requirements：per kg live sheep at farm gate

- Selected flow: Veterinary and flock-health product by actual formulation (UUID unresolved)
- Flow property / unit: Mass, volume, or dose / kg, L, or dose
- Amount rule: Record product, active ingredient or formulation, dose, treated animal class, date, and discarded quantity; report zero when unused.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_health_products`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional flock-health product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg or L formulated product/kg reference live weight
  - Basis: broad conditional screen; replace with treatment and purchase records and do not interpret as a recommended dose
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water (`supplied_water`)

Record drinking, cleaning, cooling, and other supplied water crossing the farm process boundary. Rainfall and unmanaged surface water are site conditions, not Product inputs.

Denominator and scope requirements：per kg live sheep at farm gate

- Selected flow: Supplied process water
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Record metered supply or a documented estimate by use, animal class, and period; retain water source and discharge or manure pathway.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_transport`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional supplied-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m3/kg reference live weight
  - Basis: broad replaceable screen for drinking and managed service water across climates and routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity at the equipment supply point (`energy_supply_electricity`)

**Collection scope and applicability for energy_supply.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record purchased or on-site electricity, fuels, heat, and other carriers used for housing, water supply, feeding, shearing, manure handling, weighing, and directly controlled flock movement.
Denominator and scope requirements：per kg live sheep at farm gate

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
- Sources: `fao-leap-small-ruminants-2016`; `fao-agricultural-energy`

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
- Sources: `fao-leap-small-ruminants-2016`; `fao-agricultural-energy`

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
- Sources: `fao-leap-small-ruminants-2016`; `fao-agricultural-energy`

###### Inbound transport service (`inbound_transport_service`)

Include freight or animal transport only when the inbound movement occurs inside the declared foreground responsibility. Post-transfer transport of the reference sheep is excluded.

Denominator and scope requirements：per kg live sheep at farm gate

- Selected flow: Inbound road-freight transport service by actual mode
- Flow property / unit: Goods transport / t*km
- Amount rule: Calculate transported mass multiplied by one-way controlled distance for each included inbound movement; retain cargo, load factor, and route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_energy_transport`
- Range: Provisional inbound-transport screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: t*km/kg reference live weight
  - Basis: broad conditional screen for included road movements; zero is valid when no inbound movement is in foreground scope
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live sheep reference output (`live_sheep_reference_output`)

Record live sheep weighed immediately before ownership or control transfer at the producing farm gate. The platform identity remains unresolved and no meat, fleece, milk, service, goat, or skin near-match is substituted.

Denominator and scope requirements：1 kg live sheep at farm gate

Raw reference-output records: Record accepted live weight and head count by animal class, sex where material, route, lot, weighing point, and transfer date; normalize to 1 kg. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

- Selected flow: Live domestic sheep at producing farm gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_flock_events`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Reference normalization check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg reference live weight
  - Basis: normalized reference output for one conforming dataset result
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wool or fleece co-product (`wool_coproduct`)

Record wool or fleece only when it is independently intended, measured, and transferred. Routine shearing residue without a product hand-off is not an intended co-product.

Denominator and scope requirements：per kg live sheep reference output and reporting period

- Selected flow: Shorn wool, greasy, including fleece-washed shorn wool `bc0047e4-c6e8-4758-b86e-887af8a1f176`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record shorn mass, moisture or greasy basis, animal group, grade, and hand-off; report not applicable when wool is not an intended transferred product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_losses`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional wool-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg greasy wool/kg reference live weight
  - Basis: broad conditional screen across hair, meat, milk, and wool systems; replace with shearing records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Milk co-product (`milk_coproduct`)

Record sheep milk only when it is intentionally recovered, measured, and transferred. Milk consumed by lambs remains internal biological production and is not a separate output. Record warm or chilled state, temperature and actual gate separately for each lot. This broad card has no fixed UUID: a chilled farm-gate identity is eligible only for an actually chilled, gate-matched lot after identity confirmation. Never infer cooling from a UUID; include measured pre-handover cooling inputs and losses only when cooling actually occurs.

Denominator and scope requirements：per kg live sheep reference output and reporting period

- Selected flow: Raw sheep milk, handover state and gate qualified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record saleable milk mass, production period, composition or solids basis where relevant, and transfer point; report not applicable outside milking systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_losses`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional milk-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg raw milk/kg reference live weight
  - Basis: broad conditional screen across non-dairy and dairy-linked flocks; replace with milk collection records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Exported manure co-product (`exported_manure_coproduct`)

Record manure as a Product output only when it is independently intended, measured, and transferred for use. Manure retained on pasture, stored for own use, or discarded remains inside the nutrient and emission accounting or is a waste.

Denominator and scope requirements：per kg live sheep reference output and reporting period

- Selected flow: Exported sheep manure by actual managed state (UUID unresolved)
- Flow property / unit: Mass / kg wet mass and kg dry matter or nutrient content
- Amount rule: Record exported mass, dry matter, nitrogen content where available, storage state, destination, and date; prevent the same manure from also appearing as waste or land-deposited nutrients.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_and_emissions`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: Provisional exported-manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg wet manure/kg reference live weight
  - Basis: broad conditional screen; replace with transfer weights and moisture records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mortalities and unusable animal material (`mortality_waste`)

Record dead animals and unusable animal material by mass and fate. They are losses or waste, not co-products unless a separately documented product hand-off exists.

Denominator and scope requirements：per kg live sheep at farm gate

- Selected flow: Sheep mortality waste by actual treatment route (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record head count, estimated or measured live/dead mass, animal class, date, cause where known, and treatment or disposal route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outputs_and_losses`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional mortality-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg mortality waste/kg reference live weight
  - Basis: broad replaceable screen requiring investigation when losses approach output mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric methane to air (`enteric_methane_air`)

Calculate methane from animal-category, feed-intake or gross-energy, and method records using the declared IPCC tier or another reviewed method. Use the verified biogenic-methane identity for emissions to unspecified air.

Denominator and scope requirements：per kg live sheep at farm gate

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Amount rule: Calculate by animal class and period from collected population and feed or gross-energy records; retain method tier and factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_and_emissions`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional enteric-methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg CH4/kg reference live weight
  - Basis: broad replaceable screen, not an IPCC default factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure-management methane to air (`manure_methane_air`)

Calculate methane by animal class, volatile-solids basis, manure-management pathway, climate, and storage period. Keep this separate from enteric methane.

Denominator and scope requirements：per kg live sheep at farm gate

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Amount rule: Calculate from collected animal, feed, excretion, and manure-pathway records using the declared reviewed method and factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_and_emissions`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- Range: Provisional manure-methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg CH4/kg reference live weight
  - Basis: broad replaceable screen, not an IPCC default factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct nitrous oxide from manure to air (`manure_direct_n2o_air`)

Calculate direct nitrous oxide from nitrogen excretion and the declared manure-management or deposition pathway. Preserve whether records and factors use N2O or N2O-N.

Denominator and scope requirements：per kg live sheep at farm gate

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- Amount rule: Calculate by manure pathway and period from collected animal population, feed nitrogen, excretion, and management records; retain species-basis conversion.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_and_emissions`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- Range: Provisional direct-N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg N2O/kg reference live weight
  - Basis: broad replaceable screen after conversion to N2O mass; not an IPCC default factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Indirect manure nitrogen-derived nitrous oxide to air (`review_managed_sheep_production_indirect_n2o`)

Calculate attributable indirect N2O from documented manure N volatilisation/deposition and leaching/runoff pathways where applicable. Keep separate from direct N2O and reconcile any nitrogen-fate calculation already included downstream or in the chosen background/impact model. Applies only to the operated `managed_sheep_production` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Nitrous oxide to air (UUID unresolved)
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `ipcc-2019-livestock-manure`

###### Manure ammonia to air (`review_managed_sheep_production_nh3`)

Use actual species, housing/storage conditions and a justified nitrogen-flow method. Track total N and ammoniacal N by stage; a generic volatilised-N estimate is not automatically NH3 because it may include other nitrogen species. Applies only to the operated `managed_sheep_production` node; preserve its existing route and period conditions. A dataset must resolve actual activity, method applicability and an evidence-based range or physical bound for this pathway before treating the inventory as complete. Missing evidence is not zero or not_applicable. A verified substance/origin/compartment UUID is still required for a final bound exchange.

- Selected flow: Ammonia to air (UUID unresolved)
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate the pathway total for this node and period, apply the existing allocation and stage_throughput_linkage, then inventory_reference_normalization exactly once to the measured final accepted reference output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pathway_emissions`
- Sources: `review-eea-manure-2023`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_set_completeness` | live sheep, wool, milk, breeding or cull stock, and exported manure | Enumerate every independently intended and transferred output with its hand-off. Mortalities, unusable manure, and untransferred residues remain loss or waste. Do not count one output at two hand-offs. | `fao-leap-small-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `direct_partition_before_allocation` | separable animal groups, activities, routes, products, and periods | Partition burdens using animal-group, process, meter, feed, land, manure-pathway, and period records before allocating shared burdens. | `fao-leap-small-ruminants-2016` |
| `economic_allocation_for_joint_products` | inseparable live sheep, milk, wool, and other intended products | After direct partitioning, use representative farm-gate economic value over the declared period for remaining joint burdens unless a reviewed physical relationship demonstrably represents causation. State prices, period, currency, and sensitivity. | `fao-leap-small-ruminants-2016` |
| `multi_period_attribution` | breeding stock, replacements, long-lived flock assets, and outputs spanning periods | Link entry, birth, replacement, culling, death, and output events to biological phases and reporting periods. Allocate long-lived animal and asset burdens over actual service or productive periods; do not attribute them again in a later cohort. | `fao-leap-small-ruminants-2016` |
| `shared_infrastructure_attribution` | housing, fencing, water, handling, shearing, vehicles, and manure systems shared by groups or periods | Identify every consuming group or activity and service period. Prefer metered or activity-specific use, then animal-days or live-weight-time; document the driver and count each burden once. | `fao-leap-small-ruminants-2016` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock_events` | managed_sheep_production | animal entries, births, phase transfers, sales, culls, and reference output | flock register, weigh record, sale or transfer record | animal or lot id; class; sex; purpose; breed where material; event; date; head count; live weight; scale point; origin or destination | calibrated individual or lot weighing linked to flock records; Raw aggregation requirements: reconcile opening stock + entries + births = closing stock + transfers + sales + deaths, then normalize transferred live weight. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head and kg live weight | each event | complete cohort or representative reporting period | all represented flock groups and farm-gate transfer point | per reference flow | scale calibration, signed transfer, flock-register reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed_and_grazing` | managed_sheep_production | feed and forage input | feed invoice, ration, pasture and grazing log, stock movement | feed identity; source; as-fed mass; dry matter; animal class; grazing area and duration; refusals | weigh supplied feed; derive pasture intake with a declared reviewed method when direct measurement is unavailable; Raw aggregation requirements: Use calc_feed_supply_and_intake to distinguish supplied feed carrying production burden, actual intake and losses; preserve all native stock and period records, then normalize the attributable quantity once to accepted final output. | kg as-fed and kg dry matter | feed event or period | all biological phases in the cohort or reporting period | flock group, pasture parcel, and housing unit | per reference flow | invoices, scale records, feed analysis, pasture and movement logs; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_health_products` | managed_sheep_production | veterinary and flock-health products | treatment register and purchase record | product; formulation or active ingredient; dose; quantity; animal class; date; reason; discard | treatment log reconciled to purchases and stock; Raw aggregation requirements: sum actual administered and discarded quantities by formulation. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | dose, kg, or L | each treatment | complete cohort or reporting period | all represented flock groups | per reference flow | signed treatment register, invoice, stock reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_water_energy_transport` | managed_sheep_production | supplied water, energy carriers, and included inbound transport | meter, invoice, fuel and trip log | water source and quantity; energy carrier and quantity; meter id; activity; cargo; mass; distance; vehicle; date | meters, invoices, tank records, odometer or route records; Raw aggregation requirements: assign directly where metered; otherwise allocate by documented operating hours, animal-days, or live-weight-time. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | m3, kg, L, kWh, MJ, and t*km | monthly, trip, or event | complete cohort or reporting period | farm, grazing support, housing, handling, manure, and included movement activities | per reference flow | calibration, invoice, meter photo, trip manifest, allocation worksheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_outputs_and_losses` | managed_sheep_production | wool, milk, manure export, mortalities, and other output or loss | shearing, milk, manure transfer, mortality, and waste records | output identity; mass; wet/dry or composition basis; animal group; date; destination; loss cause; fate | weigh or meter each output; estimate mortality mass from recorded live weight or documented class average; Raw aggregation requirements: sum by output identity and hand-off; distinguish intended product, internal use, residue, and waste. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, L, and head | each output or loss event | complete cohort or reporting period | all represented flock groups and output gates | per reference flow | scale or meter records, invoice, transfer document, mortality and waste log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure_and_emissions` | managed_sheep_production | manure routing, enteric CH4, manure CH4, and direct N2O | animal population, feed, excretion, manure-pathway and climate records | animal class; head or animal-days; live weight; feed or gross energy; nitrogen intake; manure pathway; storage duration; climate; method tier; factors | collect flock and manure records and calculate with the declared reviewed method; Raw aggregation requirements: calculate by class, phase, and manure pathway, then aggregate without duplicating deposited, stored, applied, or exported manure. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg CH4, kg N2O or kg N2O-N, and kg manure | monthly or phase | all biological phases and manure pathways | grazing parcels, housing, storage, treatment, application, and export points | per reference flow | source records, method worksheet, factor provenance, independent pathway reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_pathway_emissions` | `managed_sheep_production` | pathway-specific gases and manure N/C | herd, feed, manure, field and method ledger | species/class; animal-days; intake/DM/digestibility; volatile solids; manure N/TAN; system shares; climate; storage time; fertiliser N; grazing; volatilisation/leaching; methane recovery; factor source/unit; final accepted output ; collected manure wet mass; dry matter; destination| collect primary activity by node and period, document parameter applicability, retain each pathway worksheet and any linked treatment/pasture dataset  Retain raw totals and normalize attributed quantities once to the measured accepted final reference output.| animal-day; kg DM; kg VS; kg N; kg CH4; kg N2O; kg NH3 | each operating period and management change | complete represented cohort and service period | actual operated nodes only | per reference flow | meter/analysis records, nitrogen cascade, method and factor evidence, no-duplication ledger |
| `cp_feed_supply_and_intake` | `managed_sheep_production` | Feed supply, intake and loss | stock, receipt, issue and loss ledger | feed identity/source; cohort/phase; period; opening/closing stock; receipts; on-site provision; unused returns/transfers; uneaten/spoiled mass and destination; as-fed/DM; actual intake; burden owner; accepted final output | Reconcile matched stock, scales, ration/forage estimates and disposal records under calc_feed_supply_and_intake. Keep raw totals and stage denominators; assign production and treatment burden once, then normalize to accepted final output. | kg as-fed; kg DM | each issue and period close | complete represented cohort/period | actual operated feeding nodes | per reference flow | stock and supplier records; moisture evidence; loss and no-duplication reconciliation |
| `cp_manure_n2o_coverage` | `managed_sheep_production` | Direct and indirect manure/soil N2O coverage | pathway N ledger and method worksheet | species/class; period; excreted N; stage stocks/transfers; system shares; volatilised NH3-N/NOx-N; leached/runoff N; application/grazing N; factor source, unit and applicability; direct/indirect components; receiving medium; linked process and assigned card; accepted final output | Retain raw stage N and component calculations under calc_manure_n2o_coverage, matched to actual operation and existing manure protocols. Document unsupported or inapplicable paths and coverage boundaries; normalize attributable N2O once. | kg N; kg N2O | each reporting period and management change | complete represented management period | actual operated and explicitly linked nodes | per reference flow | N balance, factor unit/applicability, component-to-card and no-duplication worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_live_weight` | all inventory rows | normalized amount = period amount / farm-gate transferred live-weight mass. Preserve raw period and animal-class records. | period amount; transferred live-weight mass | amount per kg reference live weight | `fao-leap-small-ruminants-2016` |
| `reconcile_flock_balance` | flock events | opening head + entries + births = closing head + live transfers + live sales + mortalities, with class changes linked rather than treated as new animals. | flock-event records | head-count reconciliation and exceptions | `fao-leap-small-ruminants-2016` |
| `calculate_feed_dry_matter` | feed and forage | dry-matter amount = as-fed amount multiplied by measured or supplier dry-matter fraction; pasture intake uses the declared reviewed estimation method. | as-fed mass; dry-matter fraction; pasture records | kg feed dry matter | `fao-leap-small-ruminants-2016` |
| `calculate_enteric_methane` | enteric methane | Apply the declared IPCC tier or reviewed method by sheep category and period; preserve activity data and factor provenance. | animal category; population or animal-days; feed or gross energy; factors | kg CH4 | `ipcc-2019-livestock-manure` |
| `calculate_manure_emissions` | manure methane and direct nitrous oxide | Apply the declared reviewed equations by animal category, excretion and manure pathway. Retain raw N-basis records; before final normalization convert kg N2O-N to kg N2O by 44/28. Values already expressed as compound mass are not converted again. The final fixed-UUID exchange uses the mass of its named compound, never the N-basis amount. | animal records; feed nitrogen or excretion; manure pathway; climate; factors | kg CH4 and kg N2O | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `calculate_transport_service` | included inbound road transport | transport service = transported mass in tonnes multiplied by one-way included distance in kilometres. | cargo mass; distance | t*km | `fao-leap-small-ruminants-2016` |
| `calc_pathway_emissions` | `managed_sheep_production` | Use species- and management-compatible methods and retain disaggregated pathway totals. Convert N2O-N to N2O by 44/28 and NH3-N to NH3 by 17/14 exactly once; already molecular masses are not reconverted. Check methane against the documented available-carbon/methane-potential balance and nitrogen losses against each stage's available N. Indirect formation from previously volatilised N is a downstream transformation, not a second source-stage N loss. Attribute and normalize once; do not duplicate linked treatment or fate-model emissions.  Use matched raw-period quantities before allocation for physical screens: CH4 mass × 12/16 must not exceed the carbon available to the represented pathway; source-stage NH3 mass × 14/17 plus direct N2O mass × 28/44 and other source N losses must not exceed that stage's available N, after accounting for stocks and transfers. Bound each indirect N2O-N calculation by its documented volatilised or leached N precursor, not by subtracting that downstream transformation again from the source ledger. These are conservation checks, not emission factors or an empirical per-product range.| `cp_pathway_emissions` | kg named compound per final reference flow | `ipcc-2019-livestock-manure`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `feed_forage_supply` | Feed supply used by the represented operation = opening feed stock + receipts + on-site feed entering the operation - closing feed stock - documented unused returns or transfers out. Retain in-boundary spoilage, refusals and discarded leftovers in that supply. Actual intake = that supply - measured uneaten/discarded losses, after matching moisture/DM and period; use intake only for nutrition/metabolism. Opening stock retains its prior burden and is not another purchase. Trace any unused return or transfer and its burden destination; no automatic substitution credit. Attribute production once, through either the purchased-feed dataset or the represented on-site crop/collection node, never both for the same feed. Include actual waste treatment and manure contributions once, not as a second feed-production burden. | `cp_feed_supply_and_intake` | separate feed supply, intake and loss quantities, in matched as-fed/DM units | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `manure_direct_n2o_air`; `review_managed_sheep_production_indirect_n2o` | For each actual manure stage, calculate direct N2O, volatilisation/deposition-derived indirect N2O, and applicable leaching/runoff-derived indirect N2O separately with documented species/system activity and factor basis. Convert N2O-N to molecular N2O by 44/28 once; do not reconvert molecular masses. Retain component worksheets. Where an existing N2O card covers both direct and indirect emissions, report their non-overlapping sum; where separate direct/indirect cards exist, assign each component once to its matching card and never also report the sum. Pasture deposition and land application use the managed-soil method, not a manure-storage factor. Assign foreground versus linked treatment/pasture coverage explicitly; a manure export does not erase earlier emissions, and already covered downstream emissions are not repeated. Account for stock, transfers and previous N losses in the nitrogen cascade; indirect N2O is a downstream transformation of its precursor, not a second source-stage N loss. Normalize attributed molecular masses once to the accepted reference output. Document inapplicability; absent pathway data are not zero. | `cp_manure_n2o_coverage` | kg molecular N2O by pathway and assigned existing card | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_gate` | reference output | Declare animal class and purpose, route, geography, cohort or period, weighing point, live-weight convention, and farm-gate transfer. | flock register, scale record, transfer document, dataset metadata |
| `route_specificity` | all inputs and outputs | Keep extensive or transhumant, mixed, and housed or intensive route records separate where their feed, movement, infrastructure, manure, or emission requirements differ. | route description, grazing and housing records, aggregation worksheet |
| `temporal_completeness` | flock and asset records | Cover all material biological phases and events contributing to the declared output; disclose partial-cycle data and upstream datasets. | flock calendar, event register, replacement and culling records |
| `output_and_loss_completeness` | all output categories | Reconcile live sheep, wool, milk, exported manure, mortalities, closing stock, and internal uses; explain every omitted conditional output. | output, transfer, inventory, mortality, and waste records |
| `manure_pathway_consistency` | nutrient and emission rows | Reconcile pasture deposition, housing collection, storage, treatment, application, export, and waste so the same manure or nitrogen is not assigned twice. | manure pathway worksheet, land application and transfer records |
| `shared_burden_traceability` | shared infrastructure and services | Retain consuming groups, service periods, measurements, allocation driver, and evidence that the burden was counted once. | meters, operating logs, animal-day or live-weight-time worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference output | Reject a dataset that substitutes sheep meat, wool, milk, skin, goat, or a service identity for live sheep, or that omits the farm-gate live-weight basis. A concrete dataset must resolve one compatible platform UUID before publication. | `fao-leap-small-ruminants-2016` |
| `validate_route_resolution` | alternative route variants | Require one declared route or a transparent aggregation of separately recorded routes. Confirm that feed, movement, housing, infrastructure, manure, energy, and emission records match the declared route delta. | `fao-leap-small-ruminants-2016` |
| `validate_period_linkage` | multi-period flock production | Require opening and closing stock, entries, births, transfers, sales, culls, mortalities, and output events to reconcile by class and period; prevent replacement, breeding, asset, or output burdens from being attributed in two periods. | `fao-leap-small-ruminants-2016` |
| `validate_output_attribution` | live sheep and conditional co-products | Require complete intended-output and loss sets, each hand-off, direct partitioning evidence, and one disclosed residual allocation method. Prevent wool, milk, manure, cull stock, or breeding stock from being counted at two hand-offs. | `fao-leap-small-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `validate_shared_infrastructure` | shared housing, fencing, water, handling, shearing, vehicles, and manure systems | Require at least two consuming groups, activities, or periods, a service boundary, a documented attribution driver, and evidence that the same shared burden is not duplicated. | `fao-leap-small-ruminants-2016` |
| `validate_manure_and_emissions` | enteric and manure emission rows | Require animal category, activity data, manure pathway, method tier, factor provenance, gas species and basis, and pathway reconciliation. Reject use of IPCC factors as measured farm inventory amounts. | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `validate_flow_identity_resolution` | unresolved water, energy, and transport cards | Require foreground generation to select one verified concrete UUID consistent with the actual product or carrier, property, unit, geography, and use; unresolved cards may not carry a fixed UUID. |  |
| `v_pathway_emission_coverage` | `managed_sheep_production` | Require a pathway coverage ledger for enteric CH4 where biologically applicable, manure CH4, direct/indirect N2O, NH3 and relevant field emissions. Every pathway needs a measured/calculated value, a named linked process with matching coverage, or supported inapplicability; absent data cannot become zero. Keep wild life before capture outside managed husbandry, assess actual managed holding separately, and retain species-specific evidence. | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | Actual operated nodes and linked services | Record responsibility for on-site fuel combustion and refrigerant leakage when applicable: either quantified foreground emissions or a named linked process explicitly covering them, never merely a fuel-supply or electricity-production input. Assess special-taxon biological and residue emissions using species/route evidence, without a generic livestock factor. Identify any unresolved pathway and withhold a completeness claim; document supported absence and prevent duplicate upstream/downstream accounting. | |
| `v_feed_supply_intake_separation` | All feed inputs | Reject an upstream feed inventory reduced by in-boundary refusal, spoilage or discarded leftovers without retaining their production burden. Reconcile supply, intake, stock, transfers and loss destinations under calc_feed_supply_and_intake. Do not reuse intake as supplied feed, assume zero-burden on-site feed or grant automatic avoided-product credits. | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | Applicable manure and managed-soil N pathways | Require explicit direct and indirect pathway coverage, stage N balances and molecular-mass conversion. Map each component to an existing N2O card or an explicitly covering linked process once under calc_manure_n2o_coverage. Missing indirect-pathway evidence prevents a completeness claim; no default zero or duplicate aggregate-plus-components. | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-level data package for live sheep production and transfer. |
| downstream_use | `secondary_dataset`; `background_dataset` after review of identity, allocation, temporal completeness, and geographic and route representativeness. |
| allowed_use | Farm-gate inventories for live sheep with matching animal class, purpose, production route, geography, period, and live-weight basis; inputs to downstream transport, slaughter, meat, wool, milk, or breeding models. |
| excluded_use | Sheep meat or carcass production, wool-only or milk-only reference products, goats, veterinary or husbandry services, slaughterhouse operations, or post-farm transport without separate processes. |
| required_metadata | CPC reference; animal class and purpose; sex where material; breed or genotype where material; route; grazing or housing regime; feed basis; manure pathways; geography; cohort or reporting period; shared-asset treatment; weighing point; live-weight convention; farm-gate transfer. |
| required_quality_disclosure | Unresolved reference UUID; foreground coverage; missing phases; estimation methods; route aggregation; allocation and price basis; shared-infrastructure drivers; manure and emission method tiers and factor provenance; Range overrides. |
| update_trigger | New compatible reference-flow identity; revised CPC boundary; changed farm-gate convention; material new route or co-product evidence; revised livestock or manure method; or reviewed evidence replacing provisional ranges. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-small-ruminants-2016` | official_guidance | FAO LEAP, *Greenhouse gas emissions and fossil energy use from small ruminant supply chains*, 2016. <https://openknowledge.fao.org/handle/20.500.14283/i6434en> (retrieved 2026-09-29). | sheep supply-chain boundary, route and process decomposition, foreground records, allocation, output and period requirements |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP, *Nutrient flows and associated environmental impacts in livestock supply chains*, 2018. <https://openknowledge.fao.org/handle/20.500.14283/ca1328en> (retrieved 2026-09-29). | manure and nutrient pathways, exported manure distinction, pathway reconciliation and quality requirements |
| `ipcc-2019-livestock-manure` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*. <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf> (retrieved 2026-09-29). | animal-category, feed, enteric methane, manure methane, direct nitrous oxide, method-tier, factor-provenance, and species-basis rules |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 nitrogen-flow method; verify actual species, management and geographical applicability before adopting parameters |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | Managed-soil direct and indirect nitrogen pathways and boundary reconciliation |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | Feed supply versus intake and waste burden, not animal parameters. Applying this accounting principle to the declared taxon is this PCR's methodological choice; no pig diet or emission factor is transferred. |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
