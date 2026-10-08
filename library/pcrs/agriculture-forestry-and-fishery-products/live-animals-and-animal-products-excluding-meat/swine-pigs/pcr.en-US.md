---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.swine-pigs
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Swine / pigs

## 1. Scope and Applicability

This PCR covers live domestic swine managed for breeding or market production and transferred alive at the producing farm gate. It covers managed reproduction when present, farrowing, nursing, nursery and grow-finish phases, feeding, animal health, housing and environmental control, manure handling, live-weight measurement, and the farm-gate transfer attributable to the declared cohort and reporting period.

Exclude wild boar, pork and carcasses, hides, bristles, semen, embryos, separately sold veterinary or husbandry services, slaughter, dressing, post-farm transport, and all activity after slaughterhouse receipt. Backyard, intermediate, and industrial systems may coexist as declared route variants, but their feed sourcing, housing and energy, manure pathway, infrastructure, and data shall remain separately identifiable.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.swine-pigs` |
| classification_refs | `CPC 3.0: 02140`, accepted exact classification edge documented by `docs/adr/cpc-02140.md` |
| covered_products | Live domestic swine/pigs for breeding or market production, transferred alive at the producing farm gate |
| excluded_products | Wild boar; pork, carcasses, skins and bristles; semen and embryos; separately sold husbandry or veterinary services; animals after slaughterhouse receipt |
| representative_product | Live market pig measured by live-weight mass immediately before farm-gate transfer |
| production_route | Managed swine production, with conditional breeding/gestation/farrowing and required nursery/grow-finish and manure-management responsibilities |
| market_state | Live animal at the producing farm gate, before post-farm transport or slaughter |

The managed-production parent is swine husbandry through live-animal transfer. Backyard, intermediate, and industrial variants are alternative implementations: they may coexist within a reporting organization only when inventories and allocation drivers remain route-specific; otherwise select one route. Route deltas shall identify changes in feed origin, housing/environmental control, energy, manure pathway, shared assets, phase topology, and data quality, supported by current foreground evidence and the FAO LEAP pig guidance.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Live domestic swine/pig transferred at the producing farm gate |
| How much | 1 kg live weight immediately before ownership or control transfer |
| How well | Declare animal class, sex where material, breed/genotype where known, production system, health/market eligibility, weighing basis, and geography |
| How long or cycle | One declared cohort or production batch; breeding-herd and shared-asset burdens are linked across their stated service periods |
| reference_flow_link | `live_pig_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live domestic swine at producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Animal class; sex where material; breed/genotype where known; backyard, intermediate, or industrial route; live-weight measurement basis; geography; cohort and reporting period; farm-gate handover; intended output set; allocation method |
| Binding | Omit the unresolved reference product binding; independently confirmed Mass support UUIDs do not identify the product |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_live_weight` | reference animal and all live-animal transfers | Mass | kg live weight | Use calibrated scale records immediately before the declared handover. Head count is a parallel activity datum and shall not replace mass. |
| `convert_group_weight` | group weighing | Mass; count | kg; head | Divide the measured net group mass only for per-head checks; preserve total cohort mass and tare records. |
| `measure_feed` | feed inputs | Mass; dry matter where reported | kg as-fed; kg dry matter | Record each feed/formulation as supplied, moisture or dry-matter basis, and supplier/source; do not combine unlike feeds without composition records. |
| `measure_water_energy` | water and energy inputs | Volume or mass; carrier-specific energy | m3 or kg; kWh or MJ | Preserve measured water volume and each energy carrier; document conversions and meter allocation. |
| `measure_manure` | manure routes | Mass or volume; dry matter; N and volatile solids when used | kg or m3; kg DM; kg N; kg VS | Record manure state, storage/treatment route, destination, and the analytical or calculated basis used for emissions and exported nutrients. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Breeding/replacement animals and admitted piglets enter in their measured live state; feed, water, energy, veterinary products, and other managed inputs enter at the farm boundary |
| starting_condition_role | Managed biological production from admitted animals and inputs through live-pig farm-gate transfer |
| product_classification_scope | Live domestic swine before slaughter; meat, carcass, service, germplasm, and post-farm transport systems are outside scope |
| recursive_input_rule | Purchased or transferred live swine of the same category are recorded as upstream Product inputs with their actual class, live weight, origin, and gate; they shall not be represented by the reference output of the receiving process without a distinct upstream dataset. |
| upstream_dataset_requirement | Match animal class, live-weight basis, production system, origin, geography, period, and handover gate; feed datasets shall match formulation or ingredient identity and delivery state. |
| disclosure | Declare route variant, cohort phases, reporting period, animal movements, mortality, intended outputs, manure destinations, shared infrastructure, attribution choices, and unresolved identities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_farm_gate` | all datasets | Include managed production through live-weight measurement and transfer at the producing farm gate; exclude post-transfer transport, slaughter, dressing, and processing. | `fao-leap-pig-2018` |
| `boundary_managed_phases` | production cohort | Link breeding/gestation/farrowing when present, nursing, nursery, grow-finish, health, housing, and manure responsibilities to the declared cohort and reporting period. | `fao-leap-pig-2018`; `ipcc-2019-livestock-manure` |
| `boundary_route_variant` | backyard, intermediate, or industrial route | Identify route-specific topology and inventory deltas for feed origin, housing and environmental control, energy, manure pathway, infrastructure, and data collection; do not average mutually exclusive routes without transparent weighting. | `fao-leap-pig-2018` |
| `boundary_periods` | breeding herd, pig cohort, and shared assets | Index breeding cycle, nursing, nursery, grow-finish, manure service period, and infrastructure service period; assign each input, output, loss, and event once. | `fao-leap-pig-2018` |
| `boundary_shared_assets` | housing, ventilation, feeding, water, storage, and manure assets | Identify all consuming nodes and service periods and allocate by measured occupancy, live-weight-days, throughput, metered use, or another documented causal driver without duplicate burdens. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeding_farrowing` | Breeding, gestation, farrowing, and nursing | conditional | Include when the reporting system produces piglets or maintains breeding animals attributable to the reference cohort. | Managed biological reproduction and piglet handover | kg live piglet transferred to nursery and declared breeding-cycle records |
| `nursery_grow_finish` | Nursery and grow-finish production | required | Always include for live market pigs; a piglet-only dataset may terminate at its declared producing-farm gate. | Managed growth with documented route delta for alternative technology and farm-gate transfer | 1 kg live pig at farm gate |
| `manure_management` | Manure collection, storage, treatment, use, and export | required | Include all manure generated inside the represented animal phases; route-specific operations may be zero but shall be declared. | Manure responsibility and direct emissions | kg or m3 manure by state and reporting period |

### Process: Breeding, gestation, farrowing, and nursing (`breeding_farrowing`)

#### Inputs

##### Product flows

###### Breeding and replacement swine (`breeding_stock_input`)
Record admitted breeding and replacement animals by class, source, live weight, and gate; UUID unresolved.
- Selected flow: Live breeding or replacement swine (UUID unresolved)
- Flow property / unit: Mass / kg live weight
- Amount rule: Record net live weight and head count at admission and allocate only the attributable breeding service to represented piglets.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live piglet transferred from the breeding phase
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeding_records`
- Range: Provisional replacement-stock allocation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg admitted breeding-stock live weight/kg live piglet output
  - Basis: broad screening interval; replace with herd inventory and breeding-period attribution records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed supplied to breeding and nursing animals (`breeding_feed_input`)
Keep each feed product or formulation distinct with as-fed and composition records; UUID unresolved.
- Selected flow: Route-specific swine feed product (UUID unresolved)
- Flow property / unit: Mass / kg as-fed
- Amount rule: Record delivered and consumed feed by formulation, animal class, and period; reconcile opening stock, purchases, closing stock, and losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg live piglet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_records`
- Range: Provisional breeding-feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 20
  - Unit: kg as-fed/kg live piglet output
  - Basis: broad replaceable screen across breeding systems; not a feed recommendation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water supplied to breeding and nursing (`breeding_water_input`)
Include drinking, cooling, and cleaning water supplied as product input; retain use category in foreground records.
- Selected flow: Process water supply
- Flow property / unit: Volume / m3
- Amount rule: Record metered or estimated supplied water by use category and breeding period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live piglet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_records`
- Range: Provisional breeding-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.002
  - Upper: 0.2
  - Unit: m3/kg live piglet output
  - Basis: broad replaceable screen including drinking and managed service water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy supplied to breeding and nursing (`breeding_energy_input`)
Record electricity and fuels separately for housing, ventilation, heating, feeding, and other managed operations.
- Selected flow: Energy carrier supply for breeding and nursing
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Record carrier-specific metered or invoiced consumption and allocate shared meters by a documented causal driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg live piglet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_energy_records`
- Range: Provisional breeding-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh-equivalent/kg live piglet output
  - Basis: broad replaceable screen across backyard, intermediate, and industrial systems
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live piglets transferred to nursery or sold (`live_piglet_output`)
Piglets are intended outputs only when independently transferred to another process or customer; UUID unresolved.
- Selected flow: Live piglet at producing-phase handover (UUID unresolved)
- Flow property / unit: Mass / kg live weight
- Amount rule: Record accepted live weight and head count at transfer, with age/class and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per breeding cohort and per kg live piglet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_animal_transfer`
- Range: Live-weight mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg accepted piglet output/kg total measured live-animal outputs
  - Basis: output share constrained by measured live-animal mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Culled or independently transferred breeding animals (`breeding_animal_output`)
Treat a breeding animal as an intended co-product only when it has a separate measured handover; otherwise retain its termination event in period attribution. UUID unresolved.
- Selected flow: Culled or transferred breeding swine at actual live handover (UUID unresolved)
- Flow property / unit: Mass / kg live weight
- Amount rule: Record live weight, head count, class, transfer date, and destination; do not combine with piglet output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per breeding cohort and per kg total intended live-animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_animal_transfer`
- Range: Intended live-output mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg breeding-animal output/kg total intended live-animal output
  - Basis: share constrained by measured live-animal output mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Breeding-phase mortalities (`breeding_mortality_waste`)
Record dead animals as waste/loss unless a lawful, independently intended product handover is evidenced; UUID unresolved.
- Selected flow: Swine mortality waste at actual destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record mortality count, measured or estimated mass, date, cause category where available, storage, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live piglet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_health_mortality_records`
- Range: Provisional mortality screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg mortality/kg live piglet output
  - Basis: broad replaceable screen; not an acceptable-performance threshold
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Nursery and grow-finish production (`nursery_grow_finish`)

#### Inputs

##### Product flows

###### Admitted live piglets (`piglet_input`)
Record the actual live class and gate; same-category recursive inputs require a distinct upstream dataset. UUID unresolved.
- Selected flow: Live piglet admitted to nursery or grow-finish (UUID unresolved)
- Flow property / unit: Mass / kg live weight
- Amount rule: Record net live weight, head count, source, and admission date for each cohort.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg live market pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_animal_transfer`
- Range: Provisional admitted-piglet screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 1.2
  - Unit: kg admitted piglet live weight/kg live market pig output
  - Basis: broad replaceable cohort mass-balance screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed supplied to nursery and grow-finish animals (`grow_finish_feed_input`)
Keep each feed product or formulation distinct and retain dry-matter, nutrient, and supplier data; UUID unresolved.
- Selected flow: Route-specific swine feed product (UUID unresolved)
- Flow property / unit: Mass / kg as-fed
- Amount rule: Calculate feed consumed from delivery, stock, return, and loss records by formulation and cohort.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg live market pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_records`
- Range: Provisional grow-finish feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 8
  - Unit: kg as-fed/kg live market pig output
  - Basis: broad replaceable screen; not a universal feed-conversion factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Veterinary and health-management products (`health_product_input`)
Record actual vaccine, medicine, disinfectant, and other health-product formulations separately; UUID unresolved.
- Selected flow: Actual veterinary or health-management product (UUID unresolved)
- Flow property / unit: Mass, volume, or dose / recorded unit
- Amount rule: Record product identity, active ingredient where applicable, quantity, batch, purpose, and administration or use date.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live market pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_health_mortality_records`
- Range: Provisional health-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg or L product-equivalent/kg live market pig output
  - Basis: broad identity and quantity screen; preserve actual formulation and unit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water supplied to nursery and grow-finish (`grow_finish_water_input`)
Include drinking, cooling, and cleaning water and retain the use category.
- Selected flow: Process water supply
- Flow property / unit: Volume / m3
- Amount rule: Record metered or estimated supplied water by cohort, building, and use category.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live market pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_records`
- Range: Provisional grow-finish water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.002
  - Upper: 0.1
  - Unit: m3/kg live market pig output
  - Basis: broad replaceable screen including drinking and managed service water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy supplied to nursery and grow-finish (`grow_finish_energy_input`)
Record electricity and fuel carriers separately for housing, ventilation, heating, feeding, and handling.
- Selected flow: Energy carrier supply for nursery and grow-finish
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Record carrier-specific consumption and allocate shared meters by documented occupancy, live-weight-days, or metered use.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg live market pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_energy_records`
- Range: Provisional grow-finish energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh-equivalent/kg live market pig output
  - Basis: broad replaceable screen across route variants
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Inbound road transport inside the declared foreground (`inbound_transport_service`)
Include only supplier-to-farm or inter-site inbound movement controlled by and inside the declared foreground boundary; exclude post-transfer transport.
- Selected flow: Road freight transport service for inbound animals, feed, or managed inputs
- Flow property / unit: Goods transport / t*km
- Amount rule: Calculate payload mass times loaded distance for each included inbound movement; report zero if all inbound transport is upstream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg live market pig output
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Range: Provisional inbound-transport screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: t*km/kg live market pig output
  - Basis: broad replaceable screen for foreground-controlled inbound movement only
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live pigs at farm gate (`live_pig_output`)
This is the reference output; no compatible platform Product flow has been verified.
- Selected flow: Live domestic swine at producing farm gate
- Flow property / unit: Mass / kg live weight
- Amount rule: Record calibrated net live weight immediately before transfer and normalize all exchanges to 1 kg accepted live output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg live pig at the producing farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_animal_transfer`
- Range: Reference normalization constraint
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg live weight
  - Basis: normalized reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Nursery and grow-finish mortalities (`grow_finish_mortality_waste`)
Record dead animals as waste/loss unless a lawful independently intended product handover is evidenced; UUID unresolved.
- Selected flow: Swine mortality waste at actual destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record mortality count, mass, date, cause category where available, storage, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live market pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_health_mortality_records`
- Range: Provisional grow-finish mortality screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg mortality/kg live market pig output
  - Basis: broad replaceable screen; not an acceptable-performance threshold
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric methane to air (`enteric_methane_output`)
Calculate only from declared animal categories, feed intake/digestibility, population or live-weight-days, and an accepted method; use the verified biogenic-methane identity for emissions to unspecified air.
- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Amount rule: Calculate by declared IPCC-compatible category and retained activity data; do not treat an IPCC factor as a direct measured farm flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live market pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_animal_emission_records`
- Sources: `ipcc-2019-livestock-manure`
- Range: Non-negative calculation constraint
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0
  - Upper: 1
  - Unit: kg CH4/kg live market pig output
  - Basis: broad non-negative calculation screen; result must be replaced by category-specific activity data and method parameters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Manure collection, storage, treatment, use, and export (`manure_management`)

#### Inputs

##### Product flows

###### Manure-management energy (`manure_energy_input`)
Record energy for collection, pumping, aeration, separation, treatment, and on-farm handling by carrier.
- Selected flow: Energy carrier supply for manure management
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Record carrier-specific consumption and allocate shared meters to manure operations using documented run time, throughput, or submeter data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg live pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Range: Provisional manure-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh-equivalent/kg live pig output
  - Basis: broad replaceable screen across storage and treatment routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure-management water (`manure_water_input`)
Include process or cleaning water added to the manure system; do not double count animal drinking water.
- Selected flow: Process water supply for manure management
- Flow property / unit: Volume / m3
- Amount rule: Record metered or estimated water added by operation and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_records`
- Range: Provisional manure-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg live pig output
  - Basis: broad replaceable screen for water added to manure handling
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Manure transferred from animal housing (`manure_waste_input`)
Transfer manure from represented animal phases once, preserving state, dry matter, nitrogen, volatile solids, and storage origin; UUID unresolved.
- Selected flow: Swine manure at housing-to-management transfer (UUID unresolved)
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Reconcile manure generated, collected, bedding additions, storage change, treatment, export, field use, and loss.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Range: Provisional collected-manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg fresh-manure-equivalent/kg live pig output
  - Basis: broad replaceable screen; preserve actual state and water additions
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Exported manure or manure product (`exported_manure_output`)
Treat manure as an intended co-product only when quality, quantity, ownership transfer, and destination are independently documented; UUID unresolved.
- Selected flow: Exported swine manure or manure-derived product at actual state (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record transferred wet mass, dry matter, nitrogen, treatment state, recipient, and handover date.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg live pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_records`
- Range: Manure-output mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg exported manure/kg manure entering management
  - Basis: exported mass share of manure-management input after documented transformations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Unusable manure and treatment residues (`manure_residue_waste`)
Record material with no independently intended handover as waste at its actual destination; UUID unresolved.
- Selected flow: Manure residue or treatment waste at actual destination (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record mass, state, dry matter, nutrient content where available, and destination; do not label loss or disposal as co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_records`
- Range: Residue mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg residue/kg manure entering management
  - Basis: waste share constrained by manure mass balance and recorded transformations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

###### Manure-management methane to air (`manure_methane_output`)
Calculate by manure-management system, animal category, volatile solids, climate, and retained method parameters; use the verified biogenic-methane identity for emissions to unspecified air.
- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Amount rule: Apply an IPCC-compatible method to collected animal and manure-system activity data; retain parameters and system shares.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_manure_records`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional methane calculation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg CH4/kg live pig output
  - Basis: broad non-negative screen; not an IPCC default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure-management nitrous oxide to air (`manure_nitrous_oxide_output`)
Calculate direct and included indirect N2O consistently from nitrogen excretion and declared manure pathways; use the verified nitrous-oxide identity for emissions to unspecified air.
- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- Amount rule: Apply the declared IPCC-compatible method and prevent duplicate assignment between manure management and land application.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_manure_records`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- Range: Provisional nitrous-oxide calculation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg N2O/kg live pig output
  - Basis: broad non-negative screen; not an IPCC default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air from manure management (`manure_ammonia_output`)
Calculate only when nitrogen-flow records and a declared volatilization method support the result; use the verified ammonia identity for emissions to unspecified air.
- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3
- Amount rule: Calculate from collected nitrogen flow, manure pathway, and declared method; reconcile nitrogen remaining in exported manure and residues.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_manure_records`
- Sources: `fao-leap-nutrient-flows-2018`
- Range: Provisional ammonia calculation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg NH3/kg live pig output
  - Basis: broad non-negative screen; replace with route-specific nitrogen-flow evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_output_set` | all intended outputs | Enumerate live market pigs, independently transferred piglets, breeding animals, culled animals, and exported manure. Mortalities and unusable manure remain losses/waste unless an evidenced intended handover changes their role. | `fao-leap-pig-2018` |
| `allocation_physical_first` | multi-output process | First subdivide measured phase-specific inputs and emissions. For remaining inseparable burdens, use a documented causal physical driver such as live-weight gain, live-weight-days, nutrient content, or measured service; economic allocation requires justification and sensitivity disclosure. | `fao-leap-pig-2018` |
| `allocation_period` | breeding herd and cohort phases | Link breeding, nursing, nursery, grow-finish, replacement, culling, and termination events to declared periods and outputs; record carryover and prevent double attribution between cohorts. | `fao-leap-pig-2018` |
| `allocation_shared_infrastructure` | shared buildings and equipment | Enumerate consuming nodes and service periods; allocate each asset once by measured occupancy, live-weight-days, throughput, run time, or metered use and retain the selected driver's evidence. |  |
| `allocation_manure` | exported manure | Record the selected attribution or substitution treatment, destination, mass, dry matter and nutrient content. Do not apply both allocated burdens and an avoided-product credit to the same output unless the study method explicitly requires and discloses both. | `fao-leap-nutrient-flows-2018` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_breeding_records` | `breeding_farrowing` | breeding stock, reproduction, piglet output | herd register and scale record | animal class; head; live weight; entry/exit; mating; farrowing; weaning; culling; period | reconcile herd register with calibrated scale and event logs | head; kg live weight; date | each event; monthly reconciliation | full breeding cycle represented | all supplying breeding units | assign events and stock changes once to declared cohorts | scale calibration; inventory reconciliation; exception log |
| `cp_feed_records` | `breeding_farrowing`; `nursery_grow_finish` | feed inputs | invoice, formulation and stock record | product/formulation; supplier; as-fed mass; moisture/DM; composition; opening/closing stock; losses; cohort | mass balance by formulation and phase | kg as-fed; kg DM | each delivery; monthly stocktake | full cohort/reporting period | all feed stores and animal units | deliveries + opening stock - closing stock - documented losses | invoices; formulation sheets; stock reconciliation |
| `cp_water_energy_records` | `breeding_farrowing`; `nursery_grow_finish` | water and energy inputs | meter, invoice and equipment log | meter id; carrier; reading; use category; building; dates; allocation driver | direct submeter preferred; otherwise documented causal allocation | m3; kWh; MJ; carrier unit | monthly or finer | full represented period | all animal buildings and shared utilities | difference readings, convert units, allocate once | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_health_mortality_records` | `breeding_farrowing`; `nursery_grow_finish` | health products and mortalities | treatment and mortality register | product; active ingredient; amount/dose; animal group; date; mortality head/mass; cause; destination | event record reconciled to stock and herd counts | recorded product unit; head; kg | each event | full cohort/reporting period | all represented animal units | sum by product and cohort; reconcile mortality once | medicine register; stock record; disposal receipt |
| `cp_live_animal_transfer` | `breeding_farrowing`; `nursery_grow_finish` | admitted and transferred live animals | calibrated scale and transfer record | animal class; sex; head; gross/tare/net live weight; timestamp; origin/destination; gate | calibrated individual or group weighing immediately before handover | kg live weight; head | every transfer | complete cohort | every included farm gate and internal phase handover | sum net accepted mass; retain head count separately | calibration certificate; signed transfer record; rejected-animal log |
| `cp_transport_records` | `nursery_grow_finish` | foreground-controlled inbound transport | dispatch and route record | payload; origin; destination; loaded distance; mode; ownership/control | payload-distance calculation for in-boundary legs only | t; km; t*km | every included trip | full cohort/reporting period | all controlled inbound legs | sum payload × loaded distance; exclude post-transfer legs | dispatch ticket; route record; boundary justification |
| `cp_animal_emission_records` | `nursery_grow_finish` | enteric emissions | animal activity and feed record | animal category; head-days or live-weight-days; intake; digestibility; method parameters | apply declared IPCC-compatible method to collected activity | head-day; kg DM; kg CH4 | phase and reporting period | full cohort | all represented animals | calculate by category then normalize to accepted live output | method version; parameter provenance; category reconciliation |
| `cp_manure_records` | `manure_management` | manure, treatment, export and emissions | manure-system log and analysis | animal category; excretion basis; mass/volume; DM; N; VS; system share; storage time; treatment; export; destination; water/energy | mass and nutrient balance plus declared emission method | kg; m3; kg DM; kg N; kg VS; kWh | monthly and each transfer | full reporting period and storage carryover | all manure systems serving represented animals | reconcile opening + inflow - closing - outputs - losses; allocate once | sampling/analysis; storage measurement; transfer receipt; method worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all exchanges | normalized amount = attributable exchange / accepted farm-gate live weight | attributable exchange; calibrated accepted live weight | exchange per kg live pig | `mass-balance-identity` |
| `calc_feed_consumed` | feed | consumed = opening stock + deliveries - closing stock - documented returns/losses | formulation-specific stock and delivery records | kg as-fed and kg DM by phase |  |
| `calc_transport_service` | included inbound transport | sum(payload tonnes × loaded km) for foreground-controlled inbound legs only | payload; loaded distance; boundary decision | t*km |  |
| `calc_live_weight_days` | phase and shared burdens | sum live weight × days by animal class and phase; do not overlap phase dates | dated herd inventory and weights | kg live-weight-days |  |
| `calc_manure_emissions` | methane and nitrous oxide | apply declared IPCC-compatible category and manure-system equations to collected activity; retain all parameters | category; population/time; intake/excretion; VS; N; system shares; climate; factors | kg CH4 and kg N2O | `ipcc-2019-livestock-manure` |
| `calc_nitrogen_balance` | manure route | N input/excretion = N retained/exported + N in residues + quantified N losses ± storage change | feed/animal and manure N records; export analysis; method parameters | kg N by route | `fao-leap-nutrient-flows-2018` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_gate` | reference output | Retain animal class, route, live-weight basis, producing-farm gate, timestamp, origin/destination, and signed transfer; no feed-grade, count-only, at-plant, meat, or carcass substitute. | scale and transfer records; unresolved UUID review note |
| `dq_route_phase` | route variants and periods | Identify backyard/intermediate/industrial route, all represented phases and sites, and phase dates; justify any aggregation and preserve weights. | route declaration; herd and facility records |
| `dq_completeness` | inventory | Reconcile animals, feed, water/energy meters, mortalities, manure, intended outputs, and stock/storage changes over the same period. | signed reconciliation and exception log |
| `dq_method_parameters` | calculated emissions and allocation | Retain method version, every factor and parameter, source, units, conversions, allocation driver, and sensitivity case. | calculation workbook and source references |
| `dq_shared_assets` | infrastructure | List each shared asset, consuming nodes, service period, and selected causal driver; demonstrate the burden is assigned once. | asset register; meter/run-time/occupancy evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail if the output is not live domestic swine weighed by mass at the producing farm gate, or if either rejected candidate UUID is used. | error |
| `validate_reference_uuid` | reference binding | Keep the reference Product-flow UUID empty until one compatible product identity is detail-confirmed. Independently confirmed Mass property and unit-group UUIDs are support references only; unresolved product identity blocks active/publication readiness. | error |
| `validate_route_delta` | route variants | Fail if backyard, intermediate, or industrial routes are combined without route-specific topology, inventory categories, calculation/validation deltas, current evidence, and transparent weights. | error |
| `validate_phase_period` | phases and reporting periods | Fail when breeding, nursing, nursery, grow-finish, manure, replacement, culling, or asset service periods are relevant but unindexed, overlap without explanation, or are attributed twice. | error |
| `validate_output_roles` | intended outputs, residues, and waste | Fail unless every live output and exported manure handover is recorded and mortalities/unusable manure are distinguished from intended products. | error |
| `validate_shared_assets` | shared infrastructure | Fail unless each shared asset names at least two consuming nodes or periods, its service boundary and driver, and a no-double-counting check. | error |
| `validate_flow_identity` | unresolved Product inputs | Determine the actual energy carrier, water supply and any foreground-controlled inbound transport from records; final generated exchanges require compatible verified concrete UUIDs. | error |
| `validate_emission_identity` | elementary outputs | Fail fixed binding unless substance, receiving compartment, flow property, unit group, and support references are detail-confirmed; broad pollutant labels remain unresolved. | error |
| `validate_ranges` | all important flows | Require an evidence-backed range or clearly replaceable `reasoned_estimate` range with role, bounds, unit, basis, and evidence kind. | error |
| `validate_mass_n_balance` | animals and manure | Investigate unexplained animal mass, manure mass, or nitrogen imbalance; record storage change and transformations rather than forcing closure. | error |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground swine-production data package normalized to live weight at the producing farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | LCA process and lifecycle-model construction for a declared live-swine class, route, geography, cohort, period, and farm-gate boundary |
| excluded_use | Pork/carcass modelling; slaughterhouse or post-farm transport; generic use across undeclared routes; substitution for count-based, feed-grade, or at-plant flows |
| required_metadata | Animal class; sex where material; breed/genotype; route; geography; cohort and dates; phase/site coverage; live-weight method; output set; manure route; allocation; actual flow selections; UUID resolution status |
| required_quality_disclosure | Coverage and reconciliation; foreground versus modelled values; reasoned-estimate replacements; method/factor versions; shared-asset treatment; unresolved identities and excluded operations |
| update_trigger | Change in reference identity/gate, production route, feed or manure system, output set, allocation, emission method, flow identity evidence, verified UUID, or material data-quality evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-pig-2018` | `official_guidance` | FAO LEAP, *Environmental performance of pig supply chains: Guidelines for assessment* (2018), https://openknowledge.fao.org/handle/20.500.14283/i8686en | Pig-system boundary, route variants, process decomposition, foreground records, output and allocation rules |
| `fao-leap-nutrient-flows-2018` | `official_guidance` | FAO LEAP, *Nutrient flows and associated environmental impacts in livestock supply chains* (2018), https://openknowledge.fao.org/handle/20.500.14283/ca1328en | Manure nutrient-flow balance, exported manure, ammonia and nitrogen-loss accounting |
| `ipcc-2019-livestock-manure` | `method_factor` | IPCC, *2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Animal categories, feed/activity inputs, enteric methane and manure CH4/N2O method requirements; not direct farm inventory amounts |
| `mass-balance-identity` | `standard` | Conservation-of-mass identity applied to measured animal and manure transfers | Reference normalization and output/residue QA constraints |
