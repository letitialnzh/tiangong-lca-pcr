---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.goats
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Live goats at farm gate

## 1. Scope and Applicability

This PCR covers live domestic goats and kids managed for meat, milk, fibre, breeding, replacement, or mixed purposes and transferred alive at the producing farm gate. It applies from admitted breeding or replacement animals through reproduction where present, kid rearing, grazing or browse and supplementary or housed feeding, animal health, optional milking or fibre collection, water and energy use, enteric emissions, manure routing, selection or finishing, live-weight measurement, and transfer of ownership or control.

The reference product excludes sheep and other ruminants; goat meat or carcasses; raw goat milk, mohair, cashmere, skins, semen, and embryos as separate reference products; separately sold husbandry or veterinary services; post-farm transport; and animals after slaughterhouse receipt. Extensive or transhumant, mixed or agropastoral, and housed or semi-intensive routes are alternative implementations of the parent managed-biological-production activity. A dataset shall select one route, or keep route-specific records separate before transparent aggregation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.goats |
| classification_refs | CPC 3.0: 02123 Goats |
| covered_products | Live domestic goats and kids transferred at the producing farm gate, including meat, dairy, fibre, breeding, replacement, cull, or mixed-purpose animal classes when the reference output remains a live animal. |
| excluded_products | Sheep and other ruminants; meat and carcasses; raw milk, mohair, cashmere, skins, semen, and embryos as separate reference products; separately sold husbandry or veterinary services; slaughter and post-farm transport. |
| representative_product | A live domestic goat weighed immediately before farm-gate transfer. |
| production_route | Parent activity: managed biological production. Route variants are extensive or transhumant grazing and browse, mixed or agropastoral management, and housed or semi-intensive production. Their feed sourcing, movement, shelter, shared infrastructure, manure pathways, energy use, milking or fibre collection, and calculation requirements remain route-specific. |
| market_state | Alive and fit for the declared transfer purpose, with species or goat type, animal class, sex where material, production purpose, route, live-weight basis, geography, and reporting cohort declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Live domestic goats at the producing farm gate, before post-farm transport or slaughter. |
| How much | 1 kg live weight. |
| How well | Goat type, animal class and purpose, sex where material, production route, health or fitness state relevant to transfer, and live-weight measurement basis are declared. |
| How long or cycle | One declared cohort or reporting period linking breeding or replacement, rearing, mortalities, intended co-products, shared assets, and transfers without double attribution. |
| reference_flow_link | `live_goat_reference_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live domestic goat at producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | goat species or type; animal class and purpose; sex where material; breed or genotype where material; production-system route; grazing, browse, transhumance, or housing regime; live-weight measurement basis and scale point; geography; farm-gate handover; cohort or reporting period |

The reference-product UUID remains blank. Confirmed platform candidates are restricted to slaughter-ready, slaughter-weight, or marginal-extensive goats and therefore do not represent this broad category. Head count is activity data only and cannot replace live-weight mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_weight` | reference live goat | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure live weight immediately before transfer at the producing farm gate. Retain scale point, date, individual or lot basis, and any fasting or gut-fill convention. |
| `count_mass_conversion` | births, entries, mortalities, and transfers recorded by head | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert count to mass only with animal-class-specific measured or sampled mean live weight; retain both count and conversion evidence. |
| `feed_dry_matter` | grazed browse and forage, conserved feed, concentrates, by-products, supplements, and milk replacer | Mass | kg dry matter and kg as-fed | Retain as-fed amount and measured or supplier dry-matter fraction. Do not aggregate wet and dry feed records without conversion evidence. |
| `water_separation` | drinking and service water | Mass or volume | kg or m3 | Distinguish supplied water from rainfall and unmanaged surface water and disclose metering or estimation method. |
| `gas_species_basis` | methane, nitrous oxide, and ammonia | Mass | kg CH4, kg N2O or kg N2O-N, and kg NH3 or kg NH3-N | Preserve the named substance and elemental or molecular basis; any conversion shall be explicit and reproducible. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. Compute normalized amount = attributable amount * declared reference quantity / measured accepted reference-output quantity. Apply normalization once only; never divide an already normalized value again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Breeding or replacement goats admitted to the represented herd, plus purchased or transferred feed, forage, water, energy, health products, and other managed inputs entering the producing farm. |
| starting_condition_role | The admitted herd and external management inputs start the foreground managed-biological-production responsibility; reproduction, kidding, rearing, grazing or housing, health management, milking or fibre collection when present, manure handling, selection, weighing, and transfer remain inside it. |
| product_classification_scope | Live goats corresponding to CPC 3.0 02123. Milk, fibre, manure, skins, meat, and services remain separately classified outputs or activities. |
| recursive_input_rule | Live goats obtained from another producer are recorded as upstream Product inputs supported by a supplier dataset; their pre-transfer production shall not be recreated recursively in the receiving farm process. |
| upstream_dataset_requirement | Require supplier datasets for external live goats, feed and forage, health products, supplied water, energy carriers, and inbound transport where material. Select concrete flow UUIDs during foreground generation only after identity, state, provider, and destination are known. |
| disclosure | Declare goat type, animal classes and purpose, route variant, grazing or housing regime, feed boundary, breeding and replacement treatment, milk and fibre handovers, manure pathways, shared assets and service periods, cohort or reporting period, geography, weighing point, and farm-gate handover. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `managed_goat_boundary` | all covered routes | Include managed reproduction where present, kidding and kid rearing, grazing or housed feeding, animal health, water and energy, enteric emissions, manure routing, optional milking or fibre collection, selection or finishing, and farm-gate weighing. Exclude slaughter, carcass handling, and post-farm transport. | `fao-leap-small-ruminants-2016`; `fao-gleam` |
| `route_delta_separation` | extensive or transhumant, mixed or agropastoral, and housed or semi-intensive routes | Identify the parent managed-biological-production activity and selected route. Preserve the route deltas in feed or browse, movement, housing and shared assets, manure routing, energy, co-product handling, calculation, and validation. Do not blend mutually exclusive routes before separate calculation. | `fao-leap-small-ruminants-2016`; `fao-ruminant-lca-2013` |
| `phase_and_period_linkage` | breeding, gestation, kidding, rearing, lactation or fibre phases, finishing, culling, and transfer | Link inputs, assets, animal events, mortalities, intended outputs, and manure to the biological phase and reporting period that caused them. Disclose partial-cycle coverage and replacement treatment. | `fao-leap-small-ruminants-2016` |
| `shared_asset_boundary` | housing, fencing, water systems, vehicles, handling, milking, and fibre-collection facilities used by multiple groups or periods | Identify the asset or service, every consuming node or animal group, relevant service period, allocation driver, and evidence. Count the burden once across all consumers. | `fao-leap-small-ruminants-2016` |
| `farm_gate_handover` | reference live-goat output | End the foreground responsibility when the animal is weighed and ownership or control transfers at the producing farm gate; later loading and transport are excluded unless explicitly moved inside the declared foreground boundary. | `fao-leap-small-ruminants-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_goat_herd` | Managed goat herd production and farm-gate transfer | required | Always required. Reproduction, transhumance, housing, milking, fibre collection, and manure subroutes are represented only when present and separately recorded. | Foreground managed biological production that preserves route, phase, intended-output, and shared-infrastructure attribution through farm-gate transfer. | 1 kg live goat at farm gate; retain animal-head, animal-day, cohort, phase, and reporting-period records. |

### Process: Managed goat herd production and farm-gate transfer (`managed_goat_herd`)

#### Inputs

##### Product flows

###### Breeding and replacement goats (`breeding_replacement_goats`)

Record live goats obtained from outside the represented herd history. Animals born and retained inside the represented cohort are internal and shall not be counted again as purchased inputs.

Denominator and scope requirements：per kg live goat at farm gate over the declared cohort or reporting period

- Selected flow: Live breeding or replacement goats (UUID unresolved)
- Flow property / unit: Mass / kg live weight; head count retained
- Amount rule: Calculate admitted live weight from class-specific entry weights and assign the upstream burden over the actual service period or represented outputs.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goat_events_weights`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional external-replacement screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg admitted live weight/kg reference live weight
  - Basis: broad replaceable screen covering self-replacing and externally replenished herds
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed, forage, and browse supply (`feed_forage_browse`)

Record every managed diet source crossing the accounting boundary, including grazed forage or browse when its production is in scope, conserved feed, concentrates, by-products, supplements, and milk replacer. The umbrella remains unbound until actual feed identities are known.

Denominator and scope requirements：per kg live goat at farm gate and declared herd period

- Selected flow: Feed, forage, browse, and supplements (UUID unresolved)
- Flow property / unit: Mass / kg dry matter and kg as-fed
- Amount rule: Sum intake or supplied feed by source and phase after converting as-fed records to dry matter; subtract documented refusals only when separately measured and routed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_and_grazing`
- Sources: `fao-leap-small-ruminants-2016`; `ipcc-2019-livestock-manure`
- Range: Provisional dry-matter supply screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 40
  - Unit: kg dry matter/kg reference live weight
  - Basis: broad replaceable whole-route screen across short finishing and breeding-linked systems
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Veterinary and herd-health products (`herd_health_products`)

Record medicines, vaccines, disinfectants, mineral treatments, and other health products that cross the farm boundary. Retain the formulation and administration basis needed for later exact flow selection.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Veterinary and goat-health products (UUID unresolved)
- Flow property / unit: Product-specific property / declared unit
- Amount rule: Record purchased or administered quantity by product, active ingredient or formulation, animal class, and phase; do not combine unlike products into one final exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_health_inputs`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional health-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg product/kg reference live weight
  - Basis: broad replaceable aggregate screening range; final exchanges remain product-specific
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied drinking and service water (`supplied_water`)

Record water supplied for drinking, cleaning, cooling, and other managed uses. Rainfall and unmanaged surface water are disclosed separately and are not automatically treated as supplied Product inputs.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Water supplied for goat production
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Sum metered or documented supplied water by use and phase; disclose estimation where direct measurement is unavailable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional supplied-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 200
  - Unit: L/kg reference live weight
  - Basis: broad replaceable screen across grazing, hot-climate, housed, cleaning, and cooling conditions
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy supply (`energy_supply`)

Record purchased electricity, fuels, heat, or other energy carriers used for housing, lighting, pumping, milking, fibre collection, feeding, manure handling, and weighing. Foreground records determine the actual carrier.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Energy carriers and utilities for goat production
- Flow property / unit: Energy or carrier-specific property / MJ, kWh, or carrier unit
- Amount rule: Record each carrier separately by use, meter, invoice, or fuel log; retain conversion factors and do not collapse unlike carriers before final exchange selection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional direct-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg reference live weight
  - Basis: broad replaceable screen across extensive and mechanized housed routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inbound freight transport service (`inbound_freight_transport`)

Record freight service for feed, bedding, health products, fuel, and other purchased materials only when transport is inside the declared foreground boundary. Animal movement by a distinct livestock service remains unbound unless exactly verified.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Road freight transport service for inbound materials
- Flow property / unit: Goods transport / t*km
- Amount rule: Calculate tonne-kilometres from transported mass and route distance for material deliveries included in the foreground boundary.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inbound_transport`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional inbound-freight screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: t*km/kg reference live weight
  - Basis: broad replaceable screen for local through remote purchased inputs
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No Waste-flow input is required by default. Record imported manure, bedding waste, or other wastes only when accepted for treatment inside the declared boundary and select a destination-compatible identity.

##### Elementary flows

No elementary input is prescribed by default. Land occupation, water withdrawal, and other resource exchanges shall be added only when their compartments, properties, and calculation methods are explicitly supported.

#### Outputs

##### Product flows

###### Live goat reference output (`live_goat_reference_output`)

Record the live animal mass weighed immediately before the farm-gate transfer of ownership or control. The semantic identity stays unbound until a broad farm-gate goat Product flow is verified.

Denominator and scope requirements：1 kg live goat at the producing farm gate

Raw reference-output records: Exactly 1 kg of measured live weight after normalization; retain the measured lot or individual mass before normalization. Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

- Selected flow: Live domestic goat at producing farm gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goat_events_weights`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Reference normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference flow
  - Basis: normalized reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-small-ruminants-2016`

###### Raw goat milk co-product (`raw_goat_milk_coproduct`)

Record raw goat milk only when it is intentionally collected and transferred independently. Milk consumed by kids or discarded is not this co-product. Record warm or chilled state, temperature and actual gate separately for each lot. This broad card has no fixed UUID: a chilled farm-gate identity is eligible only for an actually chilled, gate-matched lot after identity confirmation. Never infer cooling from a UUID; include measured pre-handover cooling inputs and losses only when cooling actually occurs.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Raw goat milk, handover state and gate qualified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record transferred raw milk mass by herd phase and reporting period, net of milk consumed internally or discarded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intended_outputs`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional transferred-milk screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg milk/kg reference live weight
  - Basis: broad replaceable screen spanning non-dairy and dairy-linked herds
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fibre co-product (`fibre_coproduct`)

Record mohair, cashmere, or other goat fibre only when intentionally collected and transferred as an independent output. Retain fibre type, cleaning state, moisture basis, and handover point for later identity resolution.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Goat fibre at farm gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measure transferred fibre by type and condition; do not combine greasy, washed, or dehaired states without a documented conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intended_outputs`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional transferred-fibre screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg fibre/kg reference live weight
  - Basis: broad replaceable screen spanning non-fibre and fibre-producing herds
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Exported manure co-product (`exported_manure_coproduct`)

Record manure as a Product output only when it is intentionally transferred for use and has a documented recipient. Manure retained on site is an internal stock; unusable or discarded manure is Waste flow.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Exported goat manure or manure-derived soil amendment (UUID unresolved)
- Flow property / unit: Mass / kg fresh matter and kg dry matter; nutrient content retained
- Amount rule: Record transferred mass, moisture or dry matter, nitrogen content, treatment state, recipient, and handover; exclude internally returned manure.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_pathways`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: Provisional exported-manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg fresh manure/kg reference live weight
  - Basis: broad replaceable screen across direct deposition, storage, treatment, and export routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mortalities and unusable animal material (`mortality_waste`)

Record goats that die before the reference handover and unusable animal material by mass and destination. Animals intentionally transferred alive as cull stock remain intended Product outputs, not waste.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Goat mortalities and unusable animal material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured carcass weight or head count times class-specific measured mean mass; record destination and treatment route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goat_events_weights`
- Sources: `fao-leap-small-ruminants-2016`
- Range: Provisional mortality-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg mortality/kg reference live weight
  - Basis: broad replaceable screen that triggers investigation of severe losses or cohort mismatch
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric biogenic methane to air (`enteric_methane_air`)

Calculate methane generated by enteric fermentation for the represented goat classes, diet, route, and period. Preserve CH4 mass and emission-factor tier.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Methane, biogenic, to unspecified air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: Calculate from animal population and phase, feed or energy intake, and the documented IPCC or country-specific method; normalize after cohort calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_drivers`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional enteric-methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg CH4/kg reference live weight
  - Basis: broad replaceable screen; source method determines the calculated value, not this interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure-management biogenic methane to air (`manure_methane_air`)

Calculate methane from manure deposited on pasture or managed in collection, storage, treatment, and use pathways. Keep this amount distinct from enteric methane.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Methane, biogenic, to unspecified air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: Calculate by animal class, volatile-solids production, pathway share, climate, storage duration, methane conversion factor, and recovery where present.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_pathways`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- Range: Provisional manure-methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg CH4/kg reference live weight
  - Basis: broad replaceable screen; pathway calculation remains authoritative
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct and indirect nitrous oxide to air (`manure_nitrous_oxide_air`)

Calculate N2O from managed manure and deposited excreta, retaining direct and indirect pathways and the N2O or N2O-N basis.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Nitrous oxide to unspecified air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: Calculate nitrogen excretion by animal class and phase, allocate it to manure pathways, apply documented direct and indirect factors, and convert N2O-N to N2O where needed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_pathways`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- Range: Provisional nitrous-oxide screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg N2O/kg reference live weight
  - Basis: broad replaceable screen; pathway calculation remains authoritative
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`manure_ammonia_air`)

Calculate ammonia volatilization from housing, grazing deposition, collection, storage, treatment, and application pathways included in the foreground boundary.

Denominator and scope requirements：per kg live goat at farm gate

- Selected flow: Ammonia to unspecified air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: Calculate nitrogen entering each pathway, apply documented NH3-N volatilization factors, and convert NH3-N to NH3 where required; prevent overlap with nitrogen exported in manure.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_pathways`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: Provisional ammonia screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg NH3/kg reference live weight
  - Basis: broad replaceable screen; pathway calculation remains authoritative
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide_before_allocation` | separable herd groups, phases, and activities | Use separate records for animal classes, route variants, milking, fibre collection, manure treatment, and transfer when independently measurable before applying allocation. | `fao-leap-small-ruminants-2016` |
| `complete_intended_output_set` | live goats, milk, fibre, breeding or cull animals, and exported manure | Enumerate every independently intended output and its handover. Classify retained manure as internal, exported manure with a recipient as Product flow, and mortalities or unusable material as Waste flow. | `fao-leap-small-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `output_attribution_decision` | multi-output process instances | When subdivision does not remove joint burdens, document one PCR-specific attribution method, its output quantities and prices or other drivers, period, evidence, and sensitivity. Apply it consistently to all intended outputs. | `fao-leap-small-ruminants-2016` |
| `multi_period_attribution` | breeding animals, replacements, shared assets, and outputs spanning periods | Assign burdens to the actual service, biological, or reporting periods using recorded events and service duration. Record replacement and termination decisions and prevent carry-over burdens from appearing in two periods. | `fao-leap-small-ruminants-2016` |
| `shared_infrastructure_attribution` | housing, fencing, water, handling, milking, fibre, transport, and manure assets shared by groups or periods | Enumerate all consumers and service periods, choose and evidence a physical service driver where possible, and reconcile allocated shares to the total asset or service burden exactly once. | `fao-leap-small-ruminants-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_goat_events_weights` | `managed_goat_herd` | goat entries, births, class changes, deaths, and transfers | herd event register and scale record | animal id or lot; goat type; class; sex; purpose; event; date; measured weight; scale id; origin or destination | reconcile herd register with calibrated individual or lot weighing; Raw aggregation requirements: sum measured mass by event and class; convert counts only with class-specific sampled weights. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg live weight | each event and transfer | complete cohort or declared reporting period | every represented herd group and farm unit | per reference flow | scale calibration; event ledger reconciliation; mortality destination evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed_and_grazing` | `managed_goat_herd` | feed, forage, browse, grazing, and transhumance | purchase, ration, pasture, and movement records | feed identity; as-fed mass; dry-matter fraction; refused mass; pasture or browse area; animal-days; route and dates | invoices and scales for purchased feed; ration logs; pasture and movement records for grazing; Raw aggregation requirements: convert each source to dry matter, assign by class and phase, then normalize to reference mass. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg as-fed; kg dry matter; ha; animal-day | each delivery or ration; daily or periodic grazing record | all feeding phases in the period | every represented feeding area, route, and herd group | per reference flow | supplier analysis or sampled dry matter; stock balance; route log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_health_inputs` | `managed_goat_herd` | veterinary and herd-health products | medicine, vaccine, disinfection, and treatment log | product; formulation or active ingredient; amount; unit; animal class; administration date; purpose | purchase reconciliation and treatment register; Raw aggregation requirements: retain distinct products and aggregate only identical formulation and unit. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | product-specific | each purchase and administration | complete reporting period | every represented herd group and farm unit | per reference flow | invoice; batch id; treatment record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_water_energy` | `managed_goat_herd` | supplied water and energy | meter, invoice, fuel, and use log | source or carrier; quantity; unit; meter period; use; animal group; shared users | meter reading, invoice, tank or fuel log, and documented estimate where necessary; Raw aggregation requirements: subtract unrelated uses; attribute shared totals to identified consumers and periods once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; m3; kWh; MJ; carrier unit | meter or delivery interval | complete reporting period with opening and closing readings | every represented meter, supply point, herd group, and shared user | per reference flow | meter id and reading; invoice; conversion factor; allocation reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_inbound_transport` | `managed_goat_herd` | inbound material freight | delivery and route record | material; transported mass; origin; destination; distance; mode; load share | supplier document, dispatch record, and evidenced route distance; Raw aggregation requirements: sum mass times distance by route and mode. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | t; km; t*km | each included delivery | complete reporting period | every included origin-to-farm route | per reference flow | invoice or dispatch note; distance source; load-share evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_intended_outputs` | `managed_goat_herd` | milk, fibre, exported manure, and other intended outputs | output measurement and handover record | output identity; state; quantity; unit; date; recipient; moisture or dry matter where relevant; price or physical allocation driver | calibrated meter or scale linked to a recipient handover; Raw aggregation requirements: aggregate identical output state and handover; retain outputs separately before attribution. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg and output-specific quality unit | each collection or transfer | complete reporting period and relevant phase | every represented herd group, collection point, and recipient handover | per reference flow | calibration; sales or transfer record; quality or composition result; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure_pathways` | `managed_goat_herd` | manure generation, deposition, storage, treatment, export, and emissions | manure and nitrogen pathway record | class and animal-days; feed intake; digestibility; excretion basis; pathway share; climate; storage duration; treatment; recovery; export; nitrogen content | herd records plus documented IPCC or country method and measured transfers; Raw aggregation requirements: reconcile pathway shares to 100 percent; calculate gases by pathway and subtract documented recovery or export consistently. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg volatile solids; kg N; kg manure; kg CH4; kg N2O; kg NH3 | monthly or each management change | all manure generated in the reporting period | every represented herd group, deposition area, storage, treatment, and export route | per reference flow | method tier; factor source; laboratory result where available; pathway balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_emission_drivers` | `managed_goat_herd` | enteric methane | animal, diet, and emission-method record | class; animal-days; body weight; feed intake or gross energy; diet; digestibility; emission factor; tier | herd and feed records with documented IPCC or country method; Raw aggregation requirements: calculate per class and phase, sum period emissions, then normalize. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | animal-day; kg dry matter; MJ; kg CH4 | monthly or phase change | every represented class and phase | every represented herd group and feeding route | per reference flow | factor source; calculation workbook; herd and feed reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_live_weight` | reference output | reference mass = sum of measured eligible farm-gate live weights; normalized exchange = reference mass/reference mass | transfer weights; eligibility; handover date | 1 kg live goat reference output | `fao-leap-small-ruminants-2016` |
| `calc_feed_dry_matter` | feed and forage | dry matter = sum(as-fed mass × measured or supplier dry-matter fraction) − documented refusal dry matter | feed deliveries; rations; dry-matter fractions; refusals | kg dry matter by source and phase | `fao-leap-small-ruminants-2016`; `ipcc-2019-livestock-manure` |
| `calc_transport_service` | included inbound freight | For a measured delivery, t*km = this consignment's delivered tonnes × its included route kilometres; do not multiply by its share of the vehicle load again. Only when starting from a documented whole-vehicle transport total may the measured consignment share be applied once to that total. Reconcile included legs and normalize the attributable service once. | consignment delivered mass; included distance; or whole-vehicle transport total with measured consignment share | attributable t*km by route and mode | `fao-leap-small-ruminants-2016` |
| `calc_enteric_methane` | enteric methane | apply the documented IPCC or country method by goat class and phase using population and feed or energy drivers; sum before normalization | animal-days; class; feed or gross energy; digestibility; selected factors | kg CH4 | `ipcc-2019-livestock-manure` |
| `calc_manure_emissions` | manure CH4, N2O, and NH3 | assign excreta to reconciled pathways; apply pathway-specific volatile-solids and nitrogen methods; subtract recovery and transferred nutrients consistently; convert molecular basis explicitly | animal-days; intake; excretion; pathway shares; climate; duration; treatment; export; factors | kg CH4; kg N2O; kg NH3; pathway balance | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `calc_multi_output_shares` | joint live-goat, milk, fibre, and manure outputs | attribution share = selected driver for one intended output/sum of the same driver for all intended outputs; shares shall sum to 1 | complete output set; quantities; qualities; prices or physical drivers; period | documented output shares | `fao-leap-small-ruminants-2016` |
| `calc_shared_asset_shares` | shared infrastructure | asset share = evidenced service driver for one consumer-period/sum of the same driver for all consumer-periods; allocated burdens shall reconcile to the asset total | asset burden; consuming nodes; service periods; driver | allocated shared burden by node and period | `fao-leap-small-ruminants-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_gate` | reference product and intended outputs | Preserve goat type, animal class, purpose, route, product state, property, handover, and recipient where relevant; unresolved semantic identities shall not be assigned a convenient UUID. | transfer and output records plus confirmed flow detail at foreground generation |
| `dq_temporal_completeness` | herd, feed, outputs, manure, and assets | Cover the declared cohort or reporting period and document opening herd, entries, births, exits, mortalities, closing herd, replacements, and partial-cycle treatment. | reconciled herd and period balance |
| `dq_route_separation` | alternative production routes | Preserve route-specific feed, movement, shelter, energy, manure, output, and infrastructure records until route results are calculated. | route register and separate activity totals |
| `dq_mass_and_output_balance` | animal and intended-output records | Reconcile live-animal mass events and enumerate all independently intended outputs before attribution; investigate unexplained gaps. | herd event balance and output handover ledger |
| `dq_manure_balance` | manure and nitrogen pathways | Reconcile pathway shares to 100 percent and prevent nitrogen exported in manure from also being emitted or internally applied. | pathway worksheet and nitrogen balance |
| `dq_shared_asset_reconciliation` | shared infrastructure | Identify every consuming node and period, retain the driver and service boundary, and reconcile shares to the total burden once. | asset register and allocation worksheet |
| `dq_uncertainty_disclosure` | modelled and calculated values | Disclose method tier, factor geography and year, estimation method, missing records, substitutions, and the effect of provisional QA ranges. | calculation file, factor citation, and data-quality statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_gate` | reference live-goat exchange | Require exactly 1 kg normalized live weight, the producing-farm gate, all required qualifiers, and no slaughter or post-farm activity in the reference exchange. Reject the narrow platform candidates for broad-reference use. | `fao-leap-small-ruminants-2016` |
| `validate_route_delta` | selected production route | Require one named parent managed-biological-production activity and evidence for every route delta in topology, inventory, calculation, data, or validation; preserve mutually exclusive route records until separate results exist. | `fao-leap-small-ruminants-2016`; `fao-ruminant-lca-2013` |
| `validate_period_balance` | cohort and reporting periods | Opening herd + births + entries − deaths − transfers shall reconcile to closing herd by class, subject to documented classification changes; replacements, terminations, and carry-over burdens shall occur in one period treatment only. | `fao-leap-small-ruminants-2016` |
| `validate_output_attribution` | multi-output instances | Require a complete intended-output list, each handover, one explicit attribution decision with evidence, shares summing to 1, and sensitivity where economic or another variable driver is used. | `fao-leap-small-ruminants-2016` |
| `validate_residue_waste_distinction` | manure, mortalities, discarded milk, and fibre | Require intended transferred products, retained internal materials, residues, losses, and Waste flows to be distinguished by destination and evidence. | `fao-leap-small-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `validate_emission_basis` | CH4, N2O, and NH3 | Require named substance, molecular or elemental basis, method tier, factor source, complete animal and manure pathway drivers, and explicit basis conversion. | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `validate_shared_infrastructure` | shared assets and services | Require two or more consumers or periods, service boundary, driver, evidence, shares reconciling to the total, and no duplicate process or period burden. | `fao-leap-small-ruminants-2016` |
| `validate_flow_binding` | all final exchanges | unresolved cards shall resolve one compatible concrete UUID from actual foreground records; every unbound card requires exact identity confirmation. UUID selection shall not change direction, type, state, route, provider, or handover to force a match. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for live-goat managed biological production and farm-gate transfer. |
| downstream_use | May support a unit-process dataset and a linked lifecycle model; after review it may be used as a secondary or background dataset only for a matching goat type, route, gate, geography, period, and co-product treatment. |
| allowed_use | Comparative or accounting studies that preserve the declared functional unit, product boundary, route, feed and manure scope, output attribution, period treatment, and data-quality disclosure. |
| excluded_use | Direct substitution for sheep or other ruminants; goat meat, milk, fibre, skins, or services as the reference product; slaughterhouse-gate or post-farm systems; or a materially different route without adaptation. |
| required_metadata | Goat species or type; animal classes and purpose; sex where material; production route; geography; cohort and reporting period; grazing, browse, housing, feed, water, energy, health, manure, milk and fibre treatment; live-weight basis; farm-gate handover; allocation and shared-asset decisions; flow UUID evidence. |
| required_quality_disclosure | Foreground coverage, weighing evidence, feed dry-matter conversion, route separation, herd and output balance, manure pathway balance, factor tier and geography, shared-asset reconciliation, missing data, substitutions, uncertainty, and unresolved identities. |
| update_trigger | New exact broad-reference UUID; changed classification boundary; revised livestock or manure method; new source-backed range; changed flow identity verification evidence; material route evidence; or recurring validation failure. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-small-ruminants-2016` | official_guidance | FAO LEAP, *Greenhouse gas emissions and fossil energy use from small ruminant supply chains*, 2016. https://openknowledge.fao.org/handle/20.500.14283/i6434en | Small-ruminant boundary, route decomposition, feed and herd records, intended outputs, attribution, period treatment, and quality checks. |
| `fao-gleam` | official_guidance | FAO, *Global Livestock Environmental Assessment Model*. https://www.fao.org/gleam | Goat production-system coverage and livestock route context. |
| `fao-ruminant-lca-2013` | official_guidance | FAO, *Greenhouse gas emissions from ruminant supply chains — A global life cycle assessment*, 2013. https://www.fao.org/docrep/018/i3461e/i3461e.pdf | Ruminant route typology, system boundaries, and attribution context. |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP, *Nutrient flows and associated environmental impacts in livestock supply chains*, 2018. https://openknowledge.fao.org/handle/20.500.14283/ca1328en | Manure and nitrogen pathways, product or waste distinction, and NH3 and N2O accounting. |
| `ipcc-2019-livestock-manure` | method_factor | IPCC, *2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Goat class, feed and energy drivers, enteric methane, manure methane, direct and indirect N2O, and required activity data. |
