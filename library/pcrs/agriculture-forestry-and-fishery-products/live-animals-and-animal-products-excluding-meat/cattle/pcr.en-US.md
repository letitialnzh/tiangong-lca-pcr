---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.cattle
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cattle

## 1. Scope and Applicability

This PCR defines foreground data production for live domestic cattle of genus *Bos* transferred at the producing farm gate. It covers cattle managed for beef, dairy, breeding, replacement, or mixed purposes and includes admitted breeding or replacement stock, managed reproduction where present, calf rearing, grazing or housed feeding, health management, water and energy use, manure handling, selection, live-weight measurement, and farm-gate transfer.

It excludes buffalo, bison and other bovines; meat and carcasses; raw milk, hides, semen and embryos as reference products; separately sold husbandry or veterinary services; slaughter, dressing, slaughterhouse receipt; and transport after farm-gate transfer. Milk, breeding stock, culled animals, and exported manure are co-products only when independently intended and transferred. Mortalities and unusable manure are losses or wastes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.cattle` |
| classification_refs | CPC 3.0 `02111`, `Cattle` |
| covered_products | live domestic cattle of genus *Bos* managed for beef, dairy, breeding, replacement, or mixed purposes and transferred alive at the producing farm gate |
| excluded_products | buffalo, bison and other bovines; cattle meat or carcasses; raw milk; hides; semen or embryos; separately sold husbandry or veterinary services; animals after slaughterhouse receipt |
| representative_product | live cattle, weighed immediately before ownership or operational control transfer at the producing farm gate |
| production_route | managed cattle production parent with grazing or pastoral, mixed, dairy-linked, and housed or feedlot variants; each variant declares its feed, manure, infrastructure, and emissions requirement delta |
| market_state | live animal at farm gate with declared class, sex where material, route, live-weight basis, geography, health or market status, and cohort or reporting period |

The route variants may coexist within a farm or reporting portfolio, but their records must remain separable whenever topology, feed sourcing, manure routing, infrastructure use, emissions calculation, or handover differs.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | live domestic cattle at the producing farm gate |
| How much | 1 kg live weight |
| How well | declared animal class, sex where material, production purpose and route, breed or genetic line where material, live-weight measurement basis, health or market status, geography, and farm-gate condition |
| How long or cycle | declared cohort or complete reporting period covering the attributed breeding, rearing, growing, finishing, manure, and shared-infrastructure service periods |
| reference_flow_link | `live_cattle_reference_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live cattle at producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal class; sex where material; production purpose; grazing, mixed, dairy-linked, housed or feedlot route; breed or genetic line where material; weighed or measured live-weight basis; geography; farm-gate handover; cohort or reporting period; included lifecycle phases |

No compatible Product flow has been verified for this farm-gate mass identity, so its product-flow UUID remains blank. The independently confirmed Mass property and Mass unit-group support identities are recorded above; they do not establish a product-flow binding. Head count is retained only as a parallel activity datum and must not replace the mass reference property.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_mass` | reference product | Mass | kg | Normalize the reference output to 1 kg live animal mass measured immediately before the producing-farm handover. Record scale, timing, gut-fill or shrink convention, and whether weight is individual or cohort-derived. |
| `count_to_mass` | animal counts | Mass | kg | Count records require measured cohort or representative individual weights, sampling method, and class before conversion to live mass. |
| `feed_basis` | forage, concentrate, supplements, and milk replacer | Mass | kg as-fed and kg dry matter | Preserve as-fed quantity and moisture or dry-matter basis; do not compare or aggregate wet and dry bases without recorded conversion evidence. |
| `water_basis` | drinking and service water | Volume or mass | m3 or kg | Separate animal drinking water from cleaning, cooling, and manure-management water and preserve source and measurement method. |
| `energy_basis` | electricity, heat, and fuel carriers | Energy or carrier quantity | kWh, MJ, L, or kg | Retain the carrier-specific quantity before conversion and allocate shared meters using documented service evidence. |
| `gas_species_basis` | enteric and manure emissions | Pollutant mass | kg species | Report CH4, N2O, NH3 and other species separately; retain activity data, factor tier, climate or manure-system category, and molecular conversion basis. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

The default foreground boundary begins when breeding or replacement animals, feed and forage, and other managed inputs enter the declared cattle system. It includes managed reproduction where present; gestation, calving and calf rearing where present; grazing, mixed, dairy-linked, housed or feedlot growing and finishing; animal health; directly controlled inbound movements; drinking and service water; purchased and on-site energy; manure collection, storage, treatment or use under farm control; animal selection; live-weight measurement; and transfer at the producing farm gate.

Post-transfer transport, slaughter, dressing, hide removal, meat processing, and downstream milk processing are outside the reference-product gate. Upstream feed, veterinary product, purchased animal, electricity, fuel and transport-service production are represented by linked supplier datasets unless controlled and explicitly included in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | admitted breeding or replacement cattle and the declared cohort or herd phase at the start of the reporting period |
| starting_condition_role | biological starting stock whose prior production burdens require a supplier dataset or an explicit multi-period attribution decision |
| product_classification_scope | CPC 3.0 `02111`, live cattle; the scope does not recurse through meat, milk, hide, semen, embryo, or service categories |
| recursive_input_rule | purchased or internally transferred live cattle within this category are recorded as starting-stock or intermediate biological inputs with origin, class, mass, prior phase and burden treatment; they are not silently recreated as the finished farm-gate reference output |
| upstream_dataset_requirement | supplier or preceding-phase dataset for admitted animals and purchased feed, health products, energy and services, or an explicit disclosed cutoff and reason where a compatible dataset is unavailable |
| disclosure | declare route variant, animal classes and phases, herd/cohort transitions, feed system, grazing and housing periods, manure systems, shared assets, intended co-products and handovers, mortalities, live-weight method, geography, reporting period, and unresolved flow identities |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_managed_parent` | all route variants | Use one managed cattle-production parent and declare the grazing/pastoral, mixed, dairy-linked, housed or feedlot delta in process topology, inventory categories, calculation, validation and current records. | `fao-leap-large-ruminants-2016` |
| `b_handover` | reference output | End at live cattle weighed immediately before ownership or operational control transfer at the producing farm gate; exclude slaughterhouse receipt and post-transfer transport. | `fao-leap-large-ruminants-2016` |
| `b_periods` | breeding, gestation, calf, growing, finishing and culling phases | Index inputs, outputs, events, replacement and termination by phase and reporting period, and carry starting-stock burdens exactly once. | `fao-leap-large-ruminants-2016` |
| `b_manure` | manure | Include collection, storage, treatment and land use under farm control; record exported manure at its actual handover and link off-farm treatment without duplicating upstream manure burdens. | `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure` |
| `b_shared_assets` | housing, milking or feeding systems, pasture, water, energy and manure infrastructure | Name every cattle class, product node and service period consuming a shared asset; attribute the burden once using measured service before a fallback basis. | `fao-leap-large-ruminants-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd_production` | Herd Production and Rearing | required | route-specific reproduction phases may be not applicable only with purchased starting stock and supplier burden disclosure | managed biological production with an explicit alternative biological route delta | live cattle mass transferred to farm-gate selection |
| `manure_management` | Manure Collection, Storage, Treatment, and Use | required | record the actual manure pathways; zero on-farm storage or treatment requires evidence and an explicit handover | controlled residue management | manure mass or volatile solids and nitrogen handled by pathway |
| `farm_gate_transfer` | Selection, Weighing, and Farm-gate Transfer | required |  | reference-product gate | measured live cattle mass transferred at farm gate |

### Process: Herd Production and Rearing (`herd_production`)

#### Inputs

##### Product flows

###### Breeding, replacement, or purchased young cattle (`starting_cattle_input`)

Record every animal entering the managed system with origin, class, age or phase, count, live mass, intended role, prior burden treatment, and admission date.

Denominator and scope requirements：per 1,000 kg farm-gate live cattle output and by admitted cohort

Raw quantity and calculation requirements: measured admitted live mass and count by cohort and phase Original collection denominator kind: process_output.

- Selected flow: Live cattle starting stock
- Flow property / unit: Mass and parallel count / kg and head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animal_events`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional starting-stock screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg admitted live mass/kg farm-gate live output
  - Basis: broad route-dependent screen; zero is permitted for fully home-born cohorts
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed, forage, supplements, and milk replacer (`feed_and_forage_input`)

Record every consumed or issued feed product by identity, source, as-fed mass, dry matter, composition, cattle class and feeding period; grazing intake may be calculated from measured pasture and animal records.

Denominator and scope requirements：per 1,000 kg farm-gate live cattle output and by cohort-period

Raw quantity and calculation requirements: measured net feed issued or calculated intake by feed identity, cohort and phase Original collection denominator kind: process_output.

- Selected flow: Cattle feed and forage products
- Flow property / unit: Mass / kg as-fed and kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_and_grazing`
- Sources: `fao-leap-large-ruminants-2016`; `ipcc-2019-livestock-manure`
- Range: Provisional feed dry-matter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 50
  - Unit: kg dry matter/kg farm-gate live output
  - Basis: broad multi-route and multi-period screen; replace with cohort feed and pasture records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drinking and husbandry water (`herd_water_input`)

This conditional umbrella card covers supplied drinking, cleaning and cooling water. Foreground records determine concrete water exchanges and keep service water distinct from ambient rainfall.

Denominator and scope requirements：per 1,000 kg farm-gate live cattle output

Raw quantity and calculation requirements: measured or calculated supplied water by purpose, source, cattle class and period Original collection denominator kind: process_output.

- Selected flow: Process water supply
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`
- Range: Provisional herd water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 100
  - Unit: m3/1,000 kg farm-gate live output
  - Basis: broad drinking and husbandry-water screen across cattle routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Herd-production energy carriers (`herd_energy_input`)

Record carrier-specific electricity, heat and fuels used for feeding, ventilation, cooling, milking when shared with the cattle system, fencing, pasture management and mobile machinery.

Denominator and scope requirements：per 1,000 kg farm-gate live cattle output

Raw quantity and calculation requirements: meter, invoice or equipment log by carrier, consuming node and service period Original collection denominator kind: process_output.

- Selected flow: Energy supply for herd production
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L, or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_infrastructure`
- Range: Provisional herd-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh-equivalent/1,000 kg farm-gate live output
  - Basis: broad screen spanning pasture to housed routes; retain concrete carriers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Veterinary and animal-health products (`animal_health_input`)

Record medicines, vaccines, disinfectants and other health products actually used; veterinary services are recorded separately from physical products and are not the cattle reference product.

Denominator and scope requirements：per treated cohort and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: treatment and purchase records by product, dose, animal class and event Original collection denominator kind: process_output.

- Selected flow: Veterinary and animal-health products
- Flow property / unit: Mass, volume, dose, or item / native unit with product identity
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_health_records`
- Range: Provisional health-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: treatment events/1,000 kg farm-gate live output
  - Basis: broad event-count screen; concrete product quantities remain mandatory
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Controlled inbound cattle and feed transport (`inbound_transport_input`)

Include only movements under foreground control between admitted animals or feed origin and the farm; supplier-delivered transport already represented upstream must not be counted again.

Denominator and scope requirements：per 1,000 kg farm-gate live cattle output

Raw quantity and calculation requirements: shipment mass in tonnes multiplied by controlled loaded distance; preserve animal and feed movements separately Original collection denominator kind: transport_service.

- Selected flow: Inbound road freight transport service
- Flow property / unit: Transport service / tonne-kilometre
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Range: Provisional inbound transport screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: tkm/1,000 kg farm-gate live output
  - Basis: broad route screen; zero is valid when no controlled inbound transport occurs
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed. Imported manure, bedding waste or residues must be added as separate foreground cards with origin and fate when actually used.

##### Elementary flows

No default elementary input is prescribed. Grazing land occupation, water withdrawal, or other elementary resources must be added only after the site scope and exact elementary-flow identity are established.

#### Outputs

##### Product flows

###### Live cattle intended output transferred to farm-gate selection (`live_cattle_to_gate`)

This internal output carries eligible live cattle from herd production to selection and weighing with cohort, class, count and measured live mass preserved.

Denominator and scope requirements：per production cohort before gate selection

Raw quantity and calculation requirements: measured live mass and count entering farm-gate selection Original collection denominator kind: process_output.

- Selected flow: Live cattle before farm-gate selection
- Flow property / unit: Mass and parallel count / kg and head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animal_events`
- Range: Herd-to-gate live-mass balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg transferred live mass/kg live cattle available for selection
  - Basis: transfer fraction constrained by cohort mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Independently intended cattle-system co-products (`intended_coproducts`)

Record milk, breeding animals, culled animals or other intended outputs only when separately intended and transferred, with a distinct handover, quantity and destination. This umbrella row is expanded into concrete exchanges from foreground records.

Denominator and scope requirements：per herd reporting period and per 1,000 kg reference output after attribution

Raw quantity and calculation requirements: measured amount at each independently documented handover Original collection denominator kind: process_output.

- Selected flow: Independently intended cattle-system co-product
- Flow property / unit: Product-specific property and unit
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outputs_and_allocation`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional intended-output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg product-equivalent/kg farm-gate live output
  - Basis: deliberately broad cross-product screen; do not aggregate unlike products without an attribution worksheet
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cattle mortalities and unusable biological losses (`cattle_mortalities`)

Record deaths and unusable biological losses by animal class, count, estimated or measured mass, cause, date and disposal or recovery path; they are not automatic co-products.

Denominator and scope requirements：per cohort and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: measured or calculated mortality mass with fate and count retained Original collection denominator kind: process_output.

- Selected flow: Cattle mortality waste
- Flow property / unit: Mass and count / kg and head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animal_events`
- Range: Mortality mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg mortality/kg starting and born live mass
  - Basis: mortality fraction bounded by cattle cohort live-mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Manure transferred to management (`manure_to_management`)

Record excreted manure entering each collection, pasture deposition, storage, treatment or direct-use pathway with animal class, period, volatile solids, nitrogen basis and bedding included separately where possible.

Denominator and scope requirements：per manure pathway and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: measured manure or calculated excretion by animal population, intake, digestibility and period Original collection denominator kind: process_output.

- Selected flow: Cattle manure requiring management
- Flow property / unit: Mass, volatile solids, and nitrogen / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_and_emissions`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: Provisional manure wet-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg wet manure/kg farm-gate live output
  - Basis: broad system and moisture-dependent screen; volatile-solids and nitrogen calculations control emissions
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric methane to air (`enteric_methane_air`)

Calculate methane by cattle category, diet, intake or energy basis, production phase, factor tier, geography and reporting period; use the verified biogenic-methane identity for emissions to unspecified air.

Denominator and scope requirements：per cohort-period and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: IPCC-consistent calculation from collected animal-category and feed activity data or measured farm evidence Original collection denominator kind: process_output.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
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
  - Upper: 1000
  - Unit: kg CH4/1,000 kg farm-gate live output
  - Basis: broad cross-route QA screen; not an IPCC default factor or universal inventory amount
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Manure Collection, Storage, Treatment, and Use (`manure_management`)

#### Inputs

##### Product flows

###### Manure-management energy carriers (`manure_energy_input`)

Record energy for scraping, pumping, separation, storage, aeration, treatment and land application under farm control.

Denominator and scope requirements：per kg manure handled and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: carrier-specific meter, invoice or equipment log assigned to manure pathways Original collection denominator kind: process_output.

- Selected flow: Energy supply for manure management
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L, or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_infrastructure`
- Range: Provisional manure-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kWh-equivalent/1,000 kg farm-gate live output
  - Basis: broad screen from passive deposition to mechanically managed systems
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure-management water (`manure_water_input`)

Record wash, dilution and treatment water separately from drinking water and rainfall.

Denominator and scope requirements：per kg manure handled and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: metered or calculated supplied water by manure pathway Original collection denominator kind: process_output.

- Selected flow: Process water supply
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`
- Range: Provisional manure-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: m3/1,000 kg farm-gate live output
  - Basis: broad system-dependent QA screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Manure received from herd production (`manure_received`)

This internal waste input must reconcile with manure transferred from herd production by pathway and period.

Denominator and scope requirements：per manure pathway and reporting period

Raw quantity and calculation requirements: equal to manure transferred into each declared pathway after documented pasture deposition and stock changes Original collection denominator kind: process_output.

- Selected flow: Cattle manure requiring management
- Flow property / unit: Mass, volatile solids, and nitrogen / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_and_emissions`
- Range: Manure transfer reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg received/kg manure transferred to management
  - Basis: internal transfer fraction after separately recorded pasture deposition and stock change
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

No default elementary input is prescribed. Add land, water or material elementary inputs only for the actual manure pathway and verified identity.

#### Outputs

##### Product flows

###### Exported manure or recovered nutrient product (`exported_manure_product`)

Treat manure as a product only when it is intentionally recovered and transferred with a measured quantity, composition, recipient, handover and upstream burden treatment.

Denominator and scope requirements：per manure pathway and per 1,000 kg farm-gate live output after attribution

Raw quantity and calculation requirements: measured exported mass with dry matter, nitrogen and other declared nutrient content Original collection denominator kind: process_output.

- Selected flow: Exported cattle manure or recovered nutrient product
- Flow property / unit: Mass and nutrient content / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outputs_and_allocation`
- Sources: `fao-leap-nutrient-flows-2018`
- Range: Exported-manure mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg exported manure/kg manure available after storage losses
  - Basis: recovered export fraction bounded by manure pathway mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Unusable manure and treatment residues (`unusable_manure_waste`)

Record manure, sludge, bedding residue or treatment residue not intentionally transferred as a product, including actual fate and treatment destination.

Denominator and scope requirements：per manure pathway and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: measured or reconciled waste mass by pathway and destination Original collection denominator kind: process_output.

- Selected flow: Unusable cattle manure and treatment residue
- Flow property / unit: Mass / kg wet and dry basis
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_and_emissions`
- Range: Residue mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg residue/kg manure received
  - Basis: residual fraction after products, field use, emissions and stock change are documented
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

###### Manure methane to air (`manure_methane_air`)

Calculate methane by manure management system, volatile solids, temperature or climate, storage duration, methane recovery and reporting period.

Denominator and scope requirements：per manure pathway and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: IPCC-consistent calculation from collected animal and manure-system activity data, adjusted for measured recovery where applicable Original collection denominator kind: process_output.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_and_emissions`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional manure-methane screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg CH4/1,000 kg farm-gate live output
  - Basis: broad pathway QA screen; not a universal emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct and indirect nitrous oxide to air (`manure_nitrous_oxide_air`)

Calculate N2O by nitrogen excretion, manure pathway, field deposition or application, volatilization and leaching assumptions, keeping direct and indirect components traceable.

Denominator and scope requirements：per manure pathway and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: IPCC-consistent calculation from collected nitrogen and manure-pathway activity data Original collection denominator kind: n_input.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_and_emissions`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional manure-N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/1,000 kg farm-gate live output
  - Basis: broad pathway QA screen; not a universal emission factor
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia and other reported nitrogen losses to air or water (`manure_nitrogen_losses`)

Record NH3, NOx, nitrate, nitrogen runoff and other reported nitrogen species separately by receiving medium before final identity binding.

Denominator and scope requirements：per manure pathway and per 1,000 kg farm-gate live output

Raw quantity and calculation requirements: measured amount or method calculation with species, elemental basis, receiving medium and pathway retained Original collection denominator kind: n_input.

- Selected flow: Reported nitrogen loss species from cattle manure
- Flow property / unit: Mass of named species or nitrogen / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_and_emissions`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: Nitrogen-loss balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg N in reported losses/kg manure N available
  - Basis: summed nitrogen-loss fraction must not exceed available manure nitrogen after exported and retained nitrogen
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

### Process: Selection, Weighing, and Farm-gate Transfer (`farm_gate_transfer`)

#### Inputs

##### Product flows

###### Live cattle entering selection and weighing (`live_cattle_gate_input`)

Carry cattle from herd production with unchanged cohort, class and traceability; record selection outcome and measured pre-transfer live mass.

Denominator and scope requirements：per transfer lot

Raw quantity and calculation requirements: measured input live mass and count by transfer lot Original collection denominator kind: process_output.

- Selected flow: Live cattle before farm-gate selection
- Flow property / unit: Mass and parallel count / kg and head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_transfer`
- Range: Gate-input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg cattle entering selection/kg farm-gate reference output
  - Basis: broad selection and short holding-loss screen; investigate values outside the range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Farm-gate handling energy (`gate_energy_input`)

Record electricity or fuel for short holding, handling, weighing and loading before the handover; exclude transport after transfer.

Denominator and scope requirements：per 1,000 kg farm-gate live cattle output

Raw quantity and calculation requirements: meter, invoice or equipment runtime assigned to gate operations Original collection denominator kind: reference_flow.

- Selected flow: Energy supply for farm-gate handling
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L, or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_infrastructure`
- Range: Provisional gate-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh-equivalent/1,000 kg farm-gate live output
  - Basis: broad handling and weighing screen excluding post-transfer transport
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Farm-gate handling water (`gate_water_input`)

Record supplied water for animal drinking during short holding and gate cleaning, separated by purpose.

Denominator and scope requirements：per 1,000 kg farm-gate live cattle output

Raw quantity and calculation requirements: metered or calculated supplied water during gate operations Original collection denominator kind: reference_flow.

- Selected flow: Process water supply
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`
- Range: Provisional gate-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg farm-gate live output
  - Basis: broad short-holding and cleaning screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Live cattle reference product (`live_cattle_reference_output`)

This is the reference product: live cattle measured immediately before farm-gate ownership or control transfer. Post-transfer vehicle movement is excluded.

Raw reference-output records: measured accepted transfer mass on the declared live-weight basis Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Live cattle at producing farm gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_transfer`
- Range: Reference product normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference flow
  - Basis: normalized accepted farm-gate live cattle output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Gate rejects, deaths, and measured live-mass loss (`gate_rejects_and_losses`)

Record rejected animals, deaths and any measured short-holding mass loss separately from accepted product, with fate and reason.

Denominator and scope requirements：per transfer lot and per kg reference output

Raw quantity and calculation requirements: input live mass minus accepted reference output and separately documented retained or returned cattle, reconciled with measured loss Original collection denominator kind: reference_flow.

- Selected flow: Gate cattle rejects and biological losses
- Flow property / unit: Mass and count / kg and head
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_transfer`
- Range: Gate mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject and loss/kg live cattle entering selection
  - Basis: transfer-lot mass balance excluding retained or returned live cattle
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

No default elementary output is prescribed. Add direct emissions from gate equipment only when the actual carrier and emission species are recorded and not already represented by the energy supplier dataset.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_output_hierarchy` | live cattle, milk, breeding stock, culled animals and exported manure | Partition directly measured product-specific records first. Enumerate each intended output and handover. If indivisible burdens remain, use an explicit PCR-specific physical causal relation; use economic allocation only when physical causality is not defensible, and disclose prices, period and sensitivity. | `fao-leap-large-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `a_residue_status` | manure, mortalities and biological losses | Treat exported manure as a co-product only with intentional recovery and a documented transfer; treat mortalities and unusable manure as waste or loss. Do not convert a residue to a product merely to obtain a credit. | `fao-leap-nutrient-flows-2018` |
| `a_multi_period` | breeding stock, replacement animals, calves, growing and finishing phases | Index starting stock, births, purchases, sales, deaths, culls and ending stock by cohort-period. Attribute prior and current-period burdens once, reconcile stock change, and document replacement or termination treatment. | `fao-leap-large-ruminants-2016` |
| `a_shared_infrastructure` | shared housing, milking, feeding, pasture, water, energy and manure assets | Identify all consuming nodes and service periods; allocate measured service directly, then equipment hours, animal-days, live-mass-days or another documented causal driver. Fractions must sum to one and the shared burden must be counted once. | `fao-leap-large-ruminants-2016` |
| `a_route_separation` | coexisting grazing, mixed, dairy-linked, housed and feedlot variants | Keep route-specific feed, manure, infrastructure and emissions records separate. A portfolio average may be published only with production-weighted route shares and no duplicate animals or periods. | `fao-leap-large-ruminants-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal_events` | `herd_production` | starting stock, births, transfers, deaths, culls and cattle sent to gate | herd register, movement record, scale ticket, veterinary mortality record | animal or cohort id; class; sex; purpose; breed; event; date; count; live mass; origin; destination; phase | electronic herd register and calibrated scale or documented representative weighing; Raw aggregation requirements: reconcile beginning stock + births + purchases = transfers + deaths + culls + ending stock by class and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head and kg | each event | complete cohort and reporting period | named farm, herd and cohort | per reference flow | movement documents, scale calibration, signed herd register; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed_and_grazing` | `herd_production` | feed, forage and grazing intake | purchase, ration, feed issue, pasture and residue records | feed identity; source; as-fed mass; dry matter; nutrient or energy composition; leftovers; pasture area and period; cattle class | invoices, feed inventory, ration logs, pasture records and documented intake calculation; Raw aggregation requirements: net issued feed or calculated intake by feed, class and period; preserve conversion basis. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg as-fed, kg dry matter, ha-day | daily issue or period summary | all feeding and grazing phases | feed store, pasture parcel, housing group and cohort | per reference flow | supplier specification, moisture result, inventory reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_water_records` | `herd_production`; `manure_management`; `farm_gate_transfer` | drinking, cleaning, cooling and manure water | meter, tank, pump runtime and allocation record | source; purpose; opening and closing reads; volume; runtime; shared users; period | calibrated meter or documented pump/runtime calculation; Raw aggregation requirements: sum by purpose and allocate shared readings once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | m3 or kg | daily, monthly or batch | complete reporting period | source, process and consuming node | per reference flow | meter calibration, bill and allocation worksheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_energy_and_infrastructure` | `herd_production`; `manure_management`; `farm_gate_transfer` | energy and shared assets | meter, invoice, fuel, equipment and asset register | carrier; quantity; meter; equipment; service; users; operating hours; asset life; service period; allocation driver | submeter, invoice, tank record, runtime log and asset register; Raw aggregation requirements: direct meter assignment first; allocate residual shared amount once by documented causal driver. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kWh, MJ, L, kg, hours | monthly and each major operation | full reporting and asset service period | process, herd group and shared farm system | per reference flow | invoices, meter calibration, equipment log, allocation worksheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_health_records` | `herd_production` | animal-health products and interventions | medicine register, purchase and treatment record | product; active substance; dose; unit; animal class; count; date; reason; withdrawal status | farm treatment register and supplier record; Raw aggregation requirements: sum product quantity by identity and class; retain services separately. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | native product unit and event | each treatment | complete reporting period | herd, cohort and treatment group | per reference flow | invoice, veterinarian or treatment record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_transport_records` | `herd_production` | controlled inbound cattle and feed movements | shipment and route record | cargo; mass; origin; destination; mode; vehicle; loaded distance; empty return convention; control boundary | weigh ticket, delivery record and route log; Raw aggregation requirements: sum tonnes multiplied by loaded kilometres by cargo and mode. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | t, km, tkm | each trip | complete reporting period | controlled inbound route | per reference flow | manifest, scale ticket and route evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure_and_emissions` | `herd_production`; `manure_management` | excretion, manure pathways, methane and nitrogen losses | animal, feed, manure, storage, treatment, recovery and application record | animal category; population; days; intake; digestibility; volatile solids; nitrogen; system; storage days; climate; recovery; export; application; factor tier | measurements plus IPCC-consistent calculation from collected activity data; Raw aggregation requirements: calculate by category-pathway-period; reconcile manure and nitrogen transfers; aggregate after retaining components. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg manure, kg VS, kg N, kg gas species | monthly or management event | every animal phase and manure pathway | barn, pasture, storage, treatment and field pathway | per reference flow | laboratory or supplier data, logs, factor table and calculation workbook; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_outputs_and_allocation` | `herd_production`; `manure_management` | intended outputs, handovers and attribution | sales, milk, breeding, cull, manure export and allocation record | product; quantity; property; handover; recipient; date; direct burden; shared pool; allocation driver; price if used | invoice, meter, scale and allocation worksheet; Raw aggregation requirements: direct assignment first; allocate only residual pools; shares sum to one. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | product-specific | each handover and reporting-period close | complete period | all product nodes and recipients | per reference flow | signed handover, measured quantity, reviewed worksheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_gate_transfer` | `farm_gate_transfer` | selection, pre-transfer weighing and handover | selection list, calibrated scale ticket, health or market document and transfer record | lot; animal class; sex; route; count; live mass; weighing time; scale; gut-fill or shrink convention; accept/reject; retained; destination; handover time | calibrated scale and signed transfer record; Raw aggregation requirements: reconcile input, accepted output, retained or returned cattle, rejects, deaths and measured loss. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg and head | each transfer lot | full gate operation | producing farm gate | per reference flow | scale calibration, signed ticket and transfer document; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_normalize_reference` | all inventory rows | normalized amount = attributed process amount / accepted farm-gate live cattle mass on the declared weighing basis. | attributed amount; accepted live mass | amount per 1 kg reference output | `reference-definition` |
| `c_herd_balance` | animal events | beginning animals + births + purchases = cattle sent to gate + other sales + deaths + culls + ending animals, separately by class and period; reconcile parallel live mass without mixing count and mass. | animal-event counts and weights | cohort-period balance and residual | `mass-balance-identity` |
| `c_feed_dry_matter` | feed and forage | dry-matter intake = as-fed net intake multiplied by measured or supplier dry-matter fraction; retain each feed identity. | gross issue; leftovers; dry-matter fraction | kg dry matter by feed and class | `fao-leap-large-ruminants-2016` |
| `c_enteric_ch4` | enteric methane | Apply the selected IPCC tier to collected category, population, days, intake or energy and diet records; sum category-period CH4 only after preserving inputs and factors. | animal categories; population-days; feed or energy data; selected factors | kg CH4 by category-period | `ipcc-2019-livestock-manure` |
| `c_manure_emissions` | manure methane and nitrogen emissions | Calculate by manure system, volatile solids, nitrogen, climate, storage and recovery; keep direct N2O, indirect N2O, NH3 and other species separate and avoid double counting exported nitrogen. | VS; N; system shares; time; climate; recovery; export; factors | kg named gas or loss species by pathway-period | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `c_transport_service` | controlled inbound transport | transport service = actual cargo mass in tonnes × loaded distance; include empty return only when not represented in provider data. | cargo mass; distance; mode; return convention | tonne-kilometres | `mass-balance-identity` |
| `c_shared_attribution` | shared resources and assets | attributed amount = shared pool × documented service fraction; all consumer fractions for the service period sum to one. | shared total; consumers; service periods; allocation driver | amount by process, product and period | `mass-balance-identity` |
| `c_gate_balance` | transfer lot | cattle entering selection = accepted output + retained or returned cattle + rejects + deaths + measured live-mass change on one consistent weighing basis. | gate input and output records | transfer-lot balance and residual | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference and all final exchanges | Confirm the concrete flow type, direction, product or substance identity, farm or process gate, property, unit and support references before dataset release. | platform detail-read and support-reference review |
| `dq_route` | every represented route | Declare the managed parent and the route delta in feed, topology, manure, infrastructure, calculation and validation; do not merge incompatible route records. | route description, housing/grazing records, process map |
| `dq_period` | animal phases and shared assets | Cover the full attributed cohort or reporting period and link opening stock, replacements, births, events, outputs, termination and asset service periods. | herd register, calendar and allocation worksheet |
| `dq_completeness` | foreground inventory | Include or justify not applicable for starting animals, feed, water, energy, health products, transport under control, intended outputs, mortalities, manure pathways and direct emissions. | completeness matrix and source records |
| `dq_mass_and_nitrogen` | cattle and manure | Reconcile animal count/live mass and manure or nitrogen transfers without treating an unmeasured stock change as a sale or emission. | balances, scale records and calculation workbook |
| `dq_attribution` | multi-output and shared systems | Retain direct assignments, shared pools, drivers, fractions and sensitivities; demonstrate that each burden, output and handover is counted once. | reviewed allocation worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference_gate` | reference output | Reject a package unless 1 kg represents live *Bos* cattle weighed immediately before producing-farm ownership or control transfer with all required qualifiers; count alone is not acceptable. | `reference-definition` |
| `v_route_delta` | grazing, mixed, dairy-linked, housed and feedlot variants | Require the managed parent and current evidence for changed topology, feed, manure, infrastructure, calculation or validation; reject label-only variants and unexplained aggregation of mutually exclusive periods. | `fao-leap-large-ruminants-2016` |
| `v_output_status` | every product, residue and loss | Require one classification as intended output, residue or waste and one actual handover or fate; milk, breeding stock, culls and exported manure are not automatic co-products. | `fao-leap-large-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `v_period_attribution` | all cohort phases and replacements | Require phase and period indexing, opening and ending stock, replacement and termination treatment, and no duplicate attribution of prior-period or starting-stock burdens. | `fao-leap-large-ruminants-2016` |
| `v_shared_infrastructure` | assets or services used by multiple nodes, products or periods | Require all consumers and service periods, one evidence-backed attribution decision, fractions summing to one, and no duplicate burden across milk, cattle, manure or other products. | `fao-leap-large-ruminants-2016` |
| `v_manure_and_emissions` | manure and direct emissions | Require animal category, manure pathway, VS and N basis, selected factor tier, climate or storage conditions, recovery and species-specific outputs; reject generic gas or nitrogen labels in final exchanges. | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `v_flow_binding` | all final exchanges | Expand unresolved conditional flow identities from actual records and verify every concrete UUID, property and unit. Keep unresolved identities blank; do not bind raw milk, veterinary service, buffalo, goat, beef, count-only ox or another near match as the live-cattle mass reference. | `reference-definition` |
| `v_mass_balance` | herd, manure and gate records | Investigate animal, live-mass, manure and nitrogen balance residuals and disclose measurement uncertainty before secondary or background use. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground cattle-production package that may become a `secondary_dataset` or `background_dataset` only after identity and methodology review |
| downstream_use | input to downstream livestock, slaughter, food, leather, manure-use and agricultural lifecycle models beginning after the producing-farm gate |
| allowed_use | live domestic *Bos* cattle on a declared mass, route, cohort-period and producing-farm-gate basis with complete attribution and quality disclosure |
| excluded_use | buffalo or other bovines; meat, milk, hides, semen, embryos or services as the reference product; slaughterhouse-gate animals; count-only reference flows; unresolved or approximate UUID substitution |
| required_metadata | cattle class; sex where material; purpose; breed where material; route variant; live-weight basis; geography; farm-gate handover; cohort and reporting period; phases; feed basis; manure systems; co-product handovers; shared assets; factor tiers |
| required_quality_disclosure | record coverage, route and period representativeness, balance residuals, direct and shared attribution, provisional ranges, unresolved identities, factor sources and omissions |
| update_trigger | changed route or gate, revised animal/feed/manure records, allocation or period treatment change, new emissions method, or a newly verified compatible reference identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-large-ruminants-2016` | official_guidance | FAO LEAP, *Environmental performance of large ruminant supply chains*, 2016, https://openknowledge.fao.org/handle/20.500.14283/i6494en | Cattle supply-chain boundary, process decomposition, animal phases, feed records, co-products and allocation. |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP, *Nutrient flows and associated environmental impacts in livestock supply chains*, 2018, https://openknowledge.fao.org/handle/20.500.14283/ca1328en | Manure and nutrient pathways, intended recovery, nitrogen balances and loss reporting. |
| `ipcc-2019-livestock-manure` | method_factor | IPCC, *2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Animal categories, activity records, enteric methane and manure methane and nitrogen-emission calculations. |
| `mass-balance-identity` | method_factor | Conservation-of-mass and conservation-of-nitrogen identities applied to measured foreground records. | Herd, transfer, manure, nitrogen, allocation-share and gate reconciliation. |
| `reference-definition` | method_factor | This PCR's 1 kg live-cattle producing-farm-gate reference definition and arithmetic normalization. | Reference normalization and gate validation. |
