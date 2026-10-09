---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.buffalo
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Buffalo

## 1. Scope and Applicability

This PCR governs foreground data packages for live buffalo transferred before slaughter at the producing farm gate. It covers managed buffalo kept for meat, milk, breeding, replacement, draught, or mixed purposes, including herd establishment, reproduction where present, calf rearing, grazing or housed feeding, wallowing or cooling where used, animal health, water and energy use, manure handling, selection, weighing, and farm-gate handover.

The reference category excludes cattle, buffalo meat or carcasses, raw buffalo milk, hides, semen, embryos, independently sold husbandry or veterinary services, slaughter, dressing, and post-handover transport. Milk and exported manure are separately intended products only when they have a measured independent handover. Mortalities and unusable manure remain losses or wastes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.buffalo` |
| classification_refs | CPC 3.0 `02112`, `Buffalo` |
| covered_products | live buffalo managed for meat, milk, breeding, replacement, draught, or mixed purposes and transferred alive at the producing farm gate |
| excluded_products | cattle; meat or carcasses; raw milk as reference product; hides; semen or embryos; separately sold services; animals after slaughterhouse receipt |
| representative_product | live buffalo weighed immediately before ownership or operational-control transfer at the producing farm gate |
| production_route | managed buffalo production with declared pastoral or mixed, dairy-linked, and housed or semi-intensive variants; route deltas cover feed supply, mobility, cooling or wallowing, manure pathways, infrastructure, and emissions calculations |
| market_state | live, unprocessed animal at farm gate with declared animal class, sex where material, production purpose, route, live-weight basis, geography, health or market status, and cohort or reporting period |

Pastoral or mixed, dairy-linked, and housed or semi-intensive variants may coexist, but their animals, periods, inputs, manure pathways, infrastructure use, and outputs must remain traceable whenever their modelling requirements differ.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | live buffalo at the producing farm gate |
| How much | 1 kg live weight |
| How well | declared animal class, sex where material, purpose, production route, breed or type where material, measured live-weight basis, health or market condition, geography, and farm-gate state |
| How long or cycle | declared cohort or reporting period covering the attributed reproduction, rearing, growth, manure, and shared-infrastructure service phases |
| reference_flow_link | `buffalo_reference_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Buffalo `d9cae6eb-5ff2-46f0-9114-14d4444262c1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal class; sex where material; production purpose; pastoral or mixed, dairy-linked, housed or semi-intensive route; breed or type where material; measured live-weight basis and timing; geography; farm-gate handover; cohort or reporting period; included lifecycle phases |
| Binding | Fixed (`fixed`) |

Head count is collected as supporting activity data and never substitutes for the mass reference property.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_mass` | reference buffalo | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize accepted output to 1 kg live mass measured immediately before farm-gate handover. Preserve scale identity, calibration, weighing time, individual or cohort basis, and gut-fill or shrink convention. |
| `animal_count_link` | animal event records | Mass and count | kg and head | Every count-to-mass conversion requires animal class, measured or sampled weight, sampling method, date, and cohort. |
| `feed_dry_matter` | feed, browse, forage, and supplements | Mass | kg as-fed and kg dry matter | Retain as-fed mass and moisture or dry-matter conversion; never aggregate wet and dry quantities without the recorded conversion basis. |
| `water_purpose` | drinking, cleaning, cooling, and wallowing water | Volume or mass | m3 or kg | Separate supplied drinking water from service, cooling, and wallowing water and preserve source, purpose, and measurement method. |
| `energy_carrier` | electricity and fuels | Energy or carrier quantity | kWh, MJ, L, or kg | Retain carrier-specific quantities and assign shared meters only once with documented service evidence. |
| `emission_species` | enteric and manure emissions | Pollutant mass | kg species | Keep CH4, N2O, NH3, and other species separate and retain receiving medium, activity data, factor tier, and molecular conversion basis. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

The foreground boundary begins with admitted breeding, replacement, or young buffalo and the declared opening herd state. It includes reproduction and calving when present, calf rearing, grazing or housed feeding, controlled animal movements, health management, supplied water, cooling or wallowing under management, energy, manure collection and treatment under farm control, live-animal selection, weighing, and handover. Upstream production of purchased feed, animals, health products, energy, and services is represented through supplier datasets unless explicitly controlled within the foreground package.

The boundary ends when the live buffalo is weighed immediately before ownership or operational-control transfer at the producing farm gate. Slaughter, dressing, downstream lairage, processing, and post-transfer transport are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | opening buffalo herd plus admitted breeding, replacement, or young animals at the start of the declared cohort or reporting period |
| starting_condition_role | biological starting stock whose earlier burdens require a preceding-phase or supplier dataset, or an explicit period-attribution decision |
| product_classification_scope | CPC 3.0 `02112`, live buffalo; meat, milk, hides, reproductive material, and services do not recurse into this reference category |
| recursive_input_rule | a buffalo entering from this same category is recorded as starting stock or an intermediate biological transfer with origin, class, live mass, prior phase, and burden treatment; it is not recreated as a new reference output |
| upstream_dataset_requirement | supplier or preceding-phase datasets for admitted animals and purchased feed, health products, energy, and services, or a disclosed justified cutoff where no compatible upstream dataset exists |
| disclosure | route, animal classes and periods, grazing and housing pattern, feed and browse system, managed mobility, cooling or wallowing, manure pathways, shared assets, co-products and handovers, mortalities, live-weight method, geography, and unresolved identities |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_managed_buffalo_route` | all production variants | Use one managed buffalo-production parent; declare each pastoral or mixed, dairy-linked, or housed route delta in topology, inventory categories, calculation, evidence, and validation. | `fao-leap-large-ruminants-2016`; `fao-gleam` |
| `b_gate` | reference output | End at live buffalo weighed immediately before the producing-farm handover; exclude slaughterhouse receipt and post-handover transport. | `fao-leap-large-ruminants-2016` |
| `b_period_linkage` | breeding, gestation, calf, growing, finishing, culling, and replacement phases | Index animals, inputs, outputs, replacements, deaths, and termination events by cohort and period, and attribute opening-stock burdens exactly once. | `fao-leap-large-ruminants-2016` |
| `b_manure_pathway` | excreta and manure | Include deposition, collection, storage, treatment, recovery, export, and land use under farm control; retain each pathway and handover without duplicating burdens. | `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure` |
| `b_shared_services` | housing, pasture, milking, cooling or wallowing, water, energy, and manure assets | Identify every consuming animal group, product node, and service period; assign each shared burden once using measured service before a documented fallback driver. | `fao-leap-large-ruminants-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `buffalo_production` | Buffalo Herd Production | required | reproduction may be omitted only for purchased starting stock with preceding-phase burden disclosure | managed biological production, including alternative route deltas | live mass released for farm-gate selection |
| `manure_management` | Manure and Nutrient Management | required | zero controlled collection or treatment requires documented direct deposition or immediate handover | residue and nutrient pathway management | manure dry matter, volatile solids, and nitrogen handled by pathway |
| `farm_gate_handover` | Selection, Weighing, and Farm-gate Handover | required |  | reference-product gate | accepted live buffalo mass transferred |

### Process: Buffalo Herd Production (`buffalo_production`)

#### Inputs

##### Product flows

###### Admitted breeding, replacement, or young buffalo (`incoming_buffalo`)

Record each entering animal or cohort with origin, class, purpose, count, live mass, admission date, and treatment of prior burdens.

Denominator and scope requirements：per 1,000 kg farm-gate live buffalo output and by cohort-period

Raw quantity and calculation requirements: measured admitted live mass and count by animal class and cohort Original collection denominator kind: process_output.

- Selected flow: Incoming live buffalo starting stock
- Flow property / unit: Mass and parallel count / kg and head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_buffalo_events`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional admitted-stock screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg admitted live mass/kg farm-gate live output
  - Basis: broad route-dependent check; zero is possible for a wholly home-born cohort
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed, browse, forage, and supplements (`feed_and_browse`)

Record each feed identity and source with as-fed mass, dry matter, composition, animal group, and period. Grazed or browsed intake may be calculated only from documented foreground observations and a stated method.

Denominator and scope requirements：per 1,000 kg farm-gate live buffalo output and by cohort-period

Raw quantity and calculation requirements: measured net issue plus calculated pasture or browse intake by feed, class, and period Original collection denominator kind: process_output.

- Selected flow: Buffalo feed, browse, forage, and supplement products
- Flow property / unit: Mass / kg as-fed and kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_grazing_and_browse`
- Sources: `fao-leap-large-ruminants-2016`; `ipcc-2019-livestock-manure`
- Range: Provisional feed dry-matter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 60
  - Unit: kg dry matter/kg farm-gate live output
  - Basis: broad multi-period screen requiring replacement by cohort feed and grazing records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied drinking, service, cooling, and wallowing water (`buffalo_water`)

This umbrella card covers supplied water crossing the system boundary. Foreground records select concrete exchanges and distinguish drinking, cleaning, cooling, and wallowing from rainfall or unmanaged surface water.

Denominator and scope requirements：per 1,000 kg farm-gate live buffalo output

Raw quantity and calculation requirements: metered or calculated supplied water by source, purpose, animal group, and period Original collection denominator kind: process_output.

- Selected flow: Water supplied to buffalo production
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cooling`
- Range: Provisional total supplied-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 150
  - Unit: m3/1,000 kg farm-gate live output
  - Basis: broad screen spanning pastoral to cooled housed systems
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Herd-production energy carriers (`herd_energy`)

Record carrier-specific electricity, heat, and fuels used for pumping, cooling, milking where shared, feeding, lighting, housing, fencing, and mobile machinery.

Denominator and scope requirements：per 1,000 kg farm-gate live buffalo output

Raw quantity and calculation requirements: meter, invoice, fuel, or runtime record by carrier, consuming node, and period Original collection denominator kind: process_output.

- Selected flow: Energy supply for buffalo production
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L, or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_assets`
- Range: Provisional production-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6000
  - Unit: kWh-equivalent/1,000 kg farm-gate live output
  - Basis: broad route screen; retain actual carrier quantities
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Animal-health and husbandry materials (`health_materials`)

Record vaccines, medicines, disinfectants, bedding, and other physical materials by identity and event. Separately sold services do not become the reference product.

Denominator and scope requirements：per treated cohort and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: purchase and use record by product, dose, animal class, and event Original collection denominator kind: process_output.

- Selected flow: Buffalo health and husbandry materials
- Flow property / unit: Product-specific mass, volume, dose, or item / native unit
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_health_and_husbandry`
- Range: Provisional intervention-count screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: intervention events/1,000 kg farm-gate live output
  - Basis: event-count screen only; concrete material quantities remain required
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Controlled inbound animal and feed transport (`controlled_inbound_transport`)

Include only inbound movements controlled by the foreground operator. Supplier-delivered transport already represented upstream must not be counted again.

Denominator and scope requirements：per 1,000 kg farm-gate live buffalo output

Raw quantity and calculation requirements: loaded tonnes multiplied by controlled distance, separated for animals and feed Original collection denominator kind: transport_service.

- Selected flow: Inbound road freight transport service
- Flow property / unit: Transport service / tonne-kilometre
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_transport`
- Range: Provisional controlled-transport screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: tkm/1,000 kg farm-gate live output
  - Basis: broad screen for explicitly controlled inbound movements
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

No default elementary input is prescribed. Add land occupation or water abstraction only when the actual elementary identity and receiving or source compartment are verified.

#### Outputs

##### Product flows

###### Live buffalo released to gate selection (`buffalo_to_gate`)

Carry live buffalo to the handover process with unchanged animal class, cohort, route, count, mass, and burden traceability.

Denominator and scope requirements：per production cohort

Raw quantity and calculation requirements: measured live mass and count released by animal class and transfer lot Original collection denominator kind: process_output.

- Selected flow: Live buffalo before gate selection
- Flow property / unit: Mass and parallel count / kg and head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_buffalo_events`
- Range: Herd-to-gate reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg released/kg accepted farm-gate output
  - Basis: broad selection and short-term loss screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently transferred raw buffalo milk (`raw_buffalo_milk`)

Include this conditional co-product only when raw buffalo milk is intentionally collected and transferred independently with measured quantity and handover. Otherwise omit the exchange. Record warm or chilled state, temperature and actual gate separately for each lot. This broad card has no fixed UUID: a chilled farm-gate identity is eligible only for an actually chilled, gate-matched lot after identity confirmation. Never infer cooling from a UUID; include measured pre-handover cooling inputs and losses only when cooling actually occurs.

Denominator and scope requirements：per reporting period and per 1,000 kg farm-gate live buffalo output after attribution

Raw quantity and calculation requirements: measured saleable raw milk mass at its farm-gate handover Original collection denominator kind: process_output.

- Selected flow: Raw buffalo milk, handover state and gate qualified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outputs_and_attribution`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional independent-milk screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg raw milk/kg farm-gate live buffalo output
  - Basis: broad dairy-linked route screen; zero is required when milk is not independently transferred
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mortalities and unusable biological material (`buffalo_mortalities`)

Record deaths and unusable biological material with class, mass or count, date, cause where known, and management destination; do not classify them as co-products.

Denominator and scope requirements：per cohort-period and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: measured or documented mortality mass and count by class and destination Original collection denominator kind: process_output.

- Selected flow: Buffalo mortalities and biological waste
- Flow property / unit: Mass and count / kg and head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_buffalo_events`
- Range: Provisional mortality screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg mortality/kg opening, born, and admitted live mass
  - Basis: biological mass-balance bound
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-large-ruminants-2016`

##### Elementary flows

###### Enteric methane to air (`enteric_methane`)

Calculate enteric methane by buffalo category, feed intake, diet quality, production phase, and selected IPCC tier; do not apply one universal buffalo factor.

Denominator and scope requirements：per cohort-period and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: IPCC-consistent calculation from collected animal and feed activity data Original collection denominator kind: process_output.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_manure`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional enteric-methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg CH4/1,000 kg farm-gate live output
  - Basis: broad QA screen, not a universal emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Manure and Nutrient Management (`manure_management`)

#### Inputs

##### Product flows

###### Manure transferred from managed animals (`manure_received`)

Record manure reaching each controlled pathway separately from direct grazing deposition, with wet mass, dry matter, volatile solids, nitrogen, animal category, and period.

Denominator and scope requirements：per manure pathway and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: measured or calculated transfer by pathway and period Original collection denominator kind: process_output.

- Selected flow: Buffalo manure received for management
- Flow property / unit: Mass and composition / kg wet, kg dry matter, kg volatile solids, and kg N
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_manure`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: Manure-transfer reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg received/kg excreta generated
  - Basis: controlled-pathway fraction after direct deposition and stock change
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-large-ruminants-2016`

###### Water for manure operations (`manure_water`)

Record supplied dilution, cleaning, flushing, and treatment water separately from manure moisture and rainfall.

Denominator and scope requirements：per tonne manure received and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: metered or calculated supplied water by manure pathway Original collection denominator kind: process_output.

- Selected flow: Process water supply
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cooling`
- Range: Provisional manure-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/t manure received
  - Basis: broad pathway screen excluding manure moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy for manure handling and treatment (`manure_energy`)

Record actual carrier quantities for collection, pumping, aeration, separation, treatment, and application under farm control.

Denominator and scope requirements：per tonne manure received and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: metered, invoiced, or runtime-derived carrier quantity by pathway and period Original collection denominator kind: process_output.

- Selected flow: Energy supply for manure management
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L, or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_assets`
- Range: Provisional manure-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh-equivalent/t manure received
  - Basis: broad technology screen retaining actual carrier identities
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Exported manure or recovered nutrient product (`exported_manure`)

Treat manure as a product only when it is intentionally recovered and transferred with measured quantity, composition, recipient, gate, and attribution treatment.

Denominator and scope requirements：per manure pathway and per 1,000 kg farm-gate live output after attribution

Raw quantity and calculation requirements: measured transferred mass with dry matter, nitrogen, and other declared nutrient content Original collection denominator kind: process_output.

- Selected flow: Exported buffalo manure or recovered nutrient product
- Flow property / unit: Mass and nutrient content / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outputs_and_attribution`
- Sources: `fao-leap-nutrient-flows-2018`
- Range: Exported-manure mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg exported manure/kg manure available after storage losses
  - Basis: recovered export fraction bounded by pathway mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-large-ruminants-2016`

##### Waste flows

###### Unusable manure and treatment residues (`manure_residue_waste`)

Record manure, sludge, bedding residue, or treatment residue not intentionally transferred as product, including actual destination.

Denominator and scope requirements：per manure pathway and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: measured or reconciled waste mass by pathway and destination Original collection denominator kind: process_output.

- Selected flow: Unusable buffalo manure and treatment residue
- Flow property / unit: Mass / kg wet and dry basis
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_manure`
- Range: Residue mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg residue/kg manure received
  - Basis: residual fraction after transfers, field use, emissions, and stock change
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-large-ruminants-2016`

##### Elementary flows

###### Manure methane to air (`manure_methane`)

Calculate methane by manure system, volatile solids, climate, storage duration, treatment, and measured recovery.

Denominator and scope requirements：per pathway and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: IPCC-consistent calculation from collected category and manure-pathway data Original collection denominator kind: process_output.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_manure`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional manure-methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kg CH4/1,000 kg farm-gate live output
  - Basis: broad pathway screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct and indirect nitrous oxide to air (`manure_nitrous_oxide`)

Calculate direct and indirect N2O separately from nitrogen excretion, pathway, deposition or application, volatilization, and leaching assumptions.

Denominator and scope requirements：per pathway and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: IPCC-consistent calculation from collected nitrogen and pathway data Original collection denominator kind: n_input.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_manure`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional manure-N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/1,000 kg farm-gate live output
  - Basis: broad pathway screen, not a universal factor
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`manure_ammonia`)

Calculate ammonia using nitrogen excretion, manure pathway, housing, storage, application, and volatilization basis; retain NH3 mass and nitrogen-equivalent conversions separately.

Denominator and scope requirements：per pathway and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: method calculation from collected nitrogen and manure-pathway records Original collection denominator kind: n_input.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_manure`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: Nitrogen-balance ammonia guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg N in NH3/kg manure N available
  - Basis: ammonia nitrogen cannot exceed available manure nitrogen after other reconciled pathways
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-large-ruminants-2016`

### Process: Selection, Weighing, and Farm-gate Handover (`farm_gate_handover`)

#### Inputs

##### Product flows

###### Live buffalo entering gate operations (`gate_buffalo_input`)

Carry animals from production with their cohort, class, route, count, mass, and attribution lineage unchanged.

Denominator and scope requirements：per transfer lot

Raw quantity and calculation requirements: measured input mass and count by transfer lot Original collection denominator kind: process_output.

- Selected flow: Live buffalo entering farm-gate selection
- Flow property / unit: Mass and parallel count / kg and head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_handover`
- Range: Gate-input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg entering gate/kg accepted reference output
  - Basis: broad rejection and short-holding loss screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy for holding, weighing, and loading (`gate_energy`)

Record actual carrier use before handover; exclude energy for post-transfer vehicle movement.

Denominator and scope requirements：per 1,000 kg accepted reference output

Raw quantity and calculation requirements: meter, invoice, or equipment-runtime record assigned to gate operations Original collection denominator kind: reference_flow.

- Selected flow: Energy supply for farm-gate operations
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L, or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_assets`
- Range: Provisional gate-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh-equivalent/1,000 kg accepted output
  - Basis: pre-handover handling only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water for short holding and cleaning (`gate_water`)

Record supplied drinking and cleaning water used before handover and distinguish purpose.

Denominator and scope requirements：per 1,000 kg accepted reference output

Raw quantity and calculation requirements: metered or calculated supplied water during gate operations Original collection denominator kind: reference_flow.

- Selected flow: Process water supply
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cooling`
- Range: Provisional gate-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg accepted output
  - Basis: short holding and cleaning before handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Live buffalo reference product (`buffalo_reference_output`)

This is the accepted live buffalo mass measured immediately before ownership or operational-control transfer at the producing farm gate.

Raw reference-output records: measured accepted transfer mass on the declared live-weight basis Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Buffalo `d9cae6eb-5ff2-46f0-9114-14d4444262c1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_handover`
- Range: Reference normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference flow
  - Basis: normalized accepted live buffalo output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-large-ruminants-2016`

##### Waste flows

###### Rejected animals, deaths, and gate mass losses (`gate_rejects`)

Record rejected or returned animals, deaths, and measured short-holding mass loss separately, including reason and destination.

Denominator and scope requirements：per transfer lot and per kg reference output

Raw quantity and calculation requirements: reconcile gate input against accepted output, returned or retained animals, deaths, and measured mass loss Original collection denominator kind: reference_flow.

- Selected flow: Buffalo gate rejects and biological losses
- Flow property / unit: Mass and count / kg and head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_handover`
- Range: Gate mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject and loss/kg gate input
  - Basis: transfer-lot mass balance after returned and retained animals
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-large-ruminants-2016`

##### Elementary flows

No default elementary output is prescribed. Add direct equipment emissions only when not already represented by the energy supplier dataset and when the actual species and medium are verified.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_output_precedence` | live buffalo, independently transferred milk, breeding or cull animals, draught service, and exported manure | Enumerate every intended output and its handover. Partition directly measured product-specific records first; use an explicit physical causal relation for indivisible burdens, and economic allocation only when physical causality is not defensible, with prices, period, and sensitivity disclosed. | `fao-leap-large-ruminants-2016`; `fao-ruminant-lca-2013` |
| `a_milk_condition` | raw buffalo milk | Create the milk co-product exchange only for intentionally collected and independently transferred raw milk. Milk suckled by calves or discarded remains within herd production and is not an external co-product. | `fao-leap-large-ruminants-2016` |
| `a_residue_status` | manure, mortalities, and losses | Recognize exported manure only with intentional recovery and a documented transfer. Mortalities and unusable residues remain waste or loss and do not receive an avoided-product credit by default. | `fao-leap-nutrient-flows-2018` |
| `a_multi_period` | breeding stock, replacements, births, growth, culls, deaths, and ending stock | Reconcile opening stock, additions, transfers, deaths, culls, and ending stock by class and period; attribute prior and current-period burdens once and document replacement and termination treatment. | `fao-leap-large-ruminants-2016` |
| `a_shared_assets` | shared pasture, housing, milking, cooling or wallowing, water, energy, and manure infrastructure | Name all consuming nodes and service periods. Assign direct measured service first, then a documented causal driver such as animal-days, live-mass-days, runtime, or throughput; fractions sum to one and burdens are counted once. | `fao-leap-large-ruminants-2016` |
| `a_route_portfolio` | coexisting pastoral or mixed, dairy-linked, and housed routes | Keep route-specific animals, periods, feed, mobility, water, manure, infrastructure, and emissions records separate. Aggregate only with production-weighted route shares and no duplicated animals or periods. | `fao-gleam`; `fao-ruminant-lca-2013` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_buffalo_events` | `buffalo_production`; `farm_gate_handover` | opening stock, births, purchases, transfers, deaths, culls, and accepted output | herd register, movement record, and scale ticket | animal or cohort id; class; sex; purpose; route; event; date; count; live mass; origin; destination; phase | herd register plus calibrated weighing or documented representative sampling; Raw aggregation requirements: reconcile stock and movements by class-period before normalization. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head and kg | each event | complete cohort and reporting period | named farm, herd, and cohort | per reference flow | signed records, movement documents, scale calibration; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed_grazing_and_browse` | `buffalo_production` | feed, forage, browse, and grazing intake | invoices, ration logs, feed inventory, and pasture or browse records | feed identity; source; as-fed mass; dry matter; composition; leftovers; area; stocking time; animal class | measured issue and inventory reconciliation plus documented intake calculation; Raw aggregation requirements: calculate net intake by feed-class-period and preserve conversion basis. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg as-fed, kg dry matter, ha-day | daily issue or period summary | all feeding phases | store, paddock, range, housing group, and cohort | per reference flow | invoice, supplier specification, moisture result, grazing evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_water_and_cooling` | all processes | drinking, cleaning, cooling, wallowing, and manure water | meter, tank, pump, and allocation records | source; purpose; reads; volume; runtime; users; period | calibrated meter or documented pump/runtime calculation; Raw aggregation requirements: aggregate by purpose; allocate shared supply once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | m3 or kg | daily, monthly, or batch | full reporting period | source, process, and consumer | per reference flow | calibration, bill, runtime log, allocation worksheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_energy_and_assets` | all processes | energy carriers and shared assets | meter, invoice, fuel, runtime, and asset register | carrier; quantity; equipment; service; users; hours; service period; allocation driver | submeter, invoice, tank record, runtime log, and asset register; Raw aggregation requirements: direct assignment first; allocate residual shared amount once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kWh, MJ, L, kg, hours | monthly and major operation | full reporting and asset service period | process and consuming group | per reference flow | invoice, calibration, equipment log, allocation worksheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_health_and_husbandry` | `buffalo_production` | physical health and husbandry materials | medicine, treatment, purchase, and issue records | product; substance; dose; unit; animal class; count; date; purpose | farm register and supplier record; Raw aggregation requirements: sum by product identity and class; retain service costs separately. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | native product unit and event | each use | complete reporting period | herd and treatment group | per reference flow | invoice, treatment record, veterinarian evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_controlled_transport` | `buffalo_production` | controlled inbound animals and feed | shipment, route, and scale records | cargo; mass; origin; destination; mode; loaded distance; control status | manifest, weigh ticket, and route log; Raw aggregation requirements: sum loaded tonnes multiplied by kilometres by cargo and mode. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | t, km, tkm | each trip | full reporting period | controlled inbound route | per reference flow | manifest, route evidence, scale ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_emissions_and_manure` | `buffalo_production`; `manure_management` | enteric emissions, excretion, manure pathways, methane, nitrous oxide, and ammonia | animal, feed, manure, storage, treatment, recovery, application, and factor records | category; population; days; intake; digestibility; volatile solids; nitrogen; pathway; storage; climate; recovery; export; application; factor tier | measurements plus IPCC-consistent calculation from collected activity data; Raw aggregation requirements: calculate by category-pathway-period; reconcile carbon and nitrogen transfers before aggregation. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg manure, kg VS, kg N, kg gas species | monthly or pathway event | every animal phase and manure pathway | pasture, housing, storage, treatment, and field pathway | per reference flow | laboratory or supplier data, logs, factor table, calculation workbook; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_outputs_and_attribution` | `buffalo_production`; `manure_management` | milk, exported manure, and other intended outputs | sales, transfer, composition, and price records | identity; quantity; quality; handover; recipient; period; price; allocation driver | measured transfer and signed commercial or internal record; Raw aggregation requirements: aggregate by output and handover; retain partitioning and allocation worksheet. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg and declared composition | each handover | full reporting period | product node and recipient | per reference flow | scale or meter calibration, invoice, composition result, signed transfer; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_gate_handover` | `farm_gate_handover` | gate input, accepted reference output, returned animals, rejects, deaths, and losses | lot register and scale ticket | lot; class; route; input count and mass; output count and mass; returned or retained animals; rejection; loss; time; scale | calibrated scale and lot reconciliation; Raw aggregation requirements: accepted mass is reference output; reconcile all other outcomes before normalization. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg and head | each lot | every transfer lot | producing-farm gate | per reference flow | scale certificate, signed transfer, reconciliation sheet; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_reference_normalization` | all inventory | reported amount × (1 kg accepted buffalo output / accepted output mass in the same attributed system) | attributed inventory; accepted live mass | amount per kg reference flow | `fao-leap-large-ruminants-2016` |
| `c_stock_reconciliation` | buffalo events | opening + births + purchases + internal additions = accepted transfers + other sales + deaths + culls + closing stock, by class and period; reconcile mass and count | event and weighing records | complete class-period stock balance | `fao-leap-large-ruminants-2016` |
| `c_feed_dry_matter` | feed | as-fed mass × measured dry-matter fraction; sum only after preserving feed identity and period | as-fed records; moisture results | kg dry matter by feed and cohort-period | `ipcc-2019-livestock-manure` |
| `c_transport_service` | controlled inbound transport | loaded mass in tonnes × controlled loaded distance in kilometres | shipment mass; distance; cargo and mode | tonne-kilometres by route | `fao-leap-large-ruminants-2016` |
| `c_enteric_methane` | enteric methane | apply the selected IPCC tier by buffalo category and period using collected intake, diet, performance, and population data; preserve tier and factors | animal-days; intake or gross energy; diet; factor tier | kg CH4 by category-period | `ipcc-2019-livestock-manure` |
| `c_manure_emissions` | manure methane, N2O, and NH3 | calculate each gas by category-pathway-period from volatile solids or nitrogen, management system, climate, duration, recovery, and method factors; never merge species | excretion; VS; N; pathway; climate; duration; recovery; factors | kg named gas and component trace | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `c_shared_asset` | shared infrastructure and services | direct measured service first; otherwise shared burden × documented causal-driver share; shares over all consumers and periods sum to one | asset burden; consumers; periods; service or fallback driver | one attributed burden per consumer-period | `fao-leap-large-ruminants-2016` |
| `c_multi_output` | intended outputs | partition separable records; otherwise apply the declared physical relation; if economic allocation is necessary, use contemporaneous prices and report sensitivity | output quantities, properties, handovers, prices, separable records | burden attributed once to each intended output | `fao-leap-large-ruminants-2016`; `fao-ruminant-lca-2013` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all product and waste exchanges | Preserve concrete product identity, state, source or destination, and gate; unresolved semantic identities must be fixed before release of a concrete process dataset. | identity confirmation and supplier or transfer record |
| `dq_live_mass` | reference and animal events | Use calibrated weighing or documented representative sampling; retain timing, class, sample, count, and conversion to live mass. | calibration and weighing record |
| `dq_route` | route variants | Record route by animal group and period, including grazing or housing, mobility, cooling or wallowing, milking, and manure pathway; do not infer route solely from geography. | herd, housing, grazing, water, and manure records |
| `dq_temporal` | biological and shared-asset burdens | Cover complete relevant phases or reconcile opening and closing stock; disclose exclusions and prevent double attribution across periods. | cohort-period balance and attribution worksheet |
| `dq_completeness` | feed, water, energy, health, transport, manure, emissions, and outputs | Reconcile source records to process totals and explain missing months, animal groups, pathways, or intended outputs. | completeness report and exception log |
| `dq_emission_method` | calculated gases | Preserve activity data, factor source and tier, category, pathway, climate, conversions, and calculation version. | calculation workbook and factor table |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `v_reference_identity` | reference flow | Require the fixed buffalo UUID, Mass property and units-of-mass group, 1 kg amount, farm-gate state, and all required qualifiers. | error |
| `v_handover_boundary` | gate operations | Reject slaughter, dressing, slaughterhouse receipt, or post-transfer transport inside the reference process. | error |
| `v_route_delta` | production routes | Require the managed parent plus route-specific topology, feed, water or cooling, mobility, manure, infrastructure, and calculation evidence; a route label alone is insufficient. | error |
| `v_stock_period_balance` | animals and periods | Require class-period count and mass reconciliation, preceding-phase treatment, replacement and termination decisions, and no repeated opening-stock burden. | error |
| `v_output_set` | milk, live animals, manure, and losses | Enumerate intended outputs and handovers, distinguish residue and waste, and require one explicit attribution method with precedence. | error |
| `v_shared_burden` | shared assets and services | Require at least two named consumers or periods, a service boundary, causal driver, allocation shares summing to one, and one-time burden counting. | error |
| `v_manure_nitrogen` | manure pathways and nitrogen losses | Reconcile excreted, retained, exported, applied, volatilized, leached, and stock-change nitrogen without merging species or exceeding available nitrogen. | error |
| `v_flow_binding` | all cards | Resolve every unmapped semantic card to one verified concrete flow before process-dataset release; unresolved cards expand from foreground records using the cited flow identity verification evidence. | error |
| `v_range_use` | provisional ranges | Treat reasoned-estimate ranges only as QA screens; do not substitute them for foreground records or publish them as universal defaults without review. | warning |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground data package for live buffalo at the producing farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after identity, evidence, and review gates pass |
| allowed_use | route-specific process construction, supplier and farm comparison with equivalent boundaries, inventory development, and lifecycle-model assembly |
| excluded_use | buffalo meat, milk, hides, services, slaughter, or post-farm transport as the reference product; comparison across unlike live-weight bases or gates; use of provisional ranges as observations |
| required_metadata | PCR id and version; CPC ref; species or buffalo type; animal class and sex where material; purpose; route; live-weight method; geography; farm-gate definition; cohort and period; phases; feed system; water and cooling or wallowing; manure pathways; co-products and attribution; shared assets; data sources; unresolved identities |
| required_quality_disclosure | coverage and sampling; calibrated measurements; stock, mass, and nitrogen reconciliation; route shares; upstream dataset gaps; factor tier; allocation and sensitivity; provisional ranges; binding evidence; exceptions |
| update_trigger | changed route or gate; new animal class; material feed, water, cooling, manure, energy, or co-product change; improved UUID or quantitative evidence; revised IPCC or LEAP method; failed validation; expired reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-large-ruminants-2016` | official_guidance | FAO LEAP, *Environmental performance of large ruminant supply chains*, 2016, https://openknowledge.fao.org/handle/20.500.14283/i6494en | large-ruminant boundary, route, co-product, period, and data requirements applied to buffalo |
| `fao-gleam` | official_guidance | FAO, *Global Livestock Environmental Assessment Model*, https://www.fao.org/gleam | buffalo production-system coverage and route distinctions |
| `fao-ruminant-lca-2013` | literature | FAO, *Greenhouse gas emissions from ruminant supply chains — A global life cycle assessment*, 2013, https://www.fao.org/docrep/018/i3461e/i3461e.pdf | route typology and attribution context |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP, *Nutrient flows and associated environmental impacts in livestock supply chains*, 2018, https://openknowledge.fao.org/handle/20.500.14283/ca1328en | manure, nutrient, and nitrogen-flow requirements |
| `ipcc-2019-livestock-manure` | method_factor | IPCC, *2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | buffalo category, feed, enteric methane, manure methane, nitrogen, and emission calculation requirements |
