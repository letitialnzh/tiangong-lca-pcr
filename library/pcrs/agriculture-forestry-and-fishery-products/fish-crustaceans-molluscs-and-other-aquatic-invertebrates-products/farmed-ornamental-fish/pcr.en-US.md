---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-ornamental-fish
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Farmed ornamental fish

## 1. Scope and Applicability

This PCR covers live finfish produced by managed breeding, nursery rearing or grow-out for ornamental sale, in freshwater, brackish or marine culture, through actual farm dispatch. It excludes wild fish merely held or acclimated, food fish, bait or stocking seed sold for another purpose, ornamental non-fish animals, aquatic plants and preserved specimens. Purchased juveniles do not remove upstream production burdens. A farm may breed its own stock, buy juveniles, or combine these evidenced sources without mixing wild-held fish into farmed output.

An illustrative route is pond-grown freshwater livebearers. Species and buyer acceptance determine harvest, handling and grades; this example supplies no universal husbandry schedule, mortality, feed conversion or treatment dose. A mass inventory supports environmental accounting, not equivalence of aquarium service between species or grades.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-ornamental-fish |
| classification_refs | CPC 3.0 04112 — Farmed ornamental fish |
| covered_products | Live freshwater and other finfish from aquaculture intended for ornamental sale at farm dispatch |
| excluded_products | Wild-held fish; food, bait and non-ornamental stocking products; aquatic plants and ornamental non-fish; preserved fish |
| representative_product | Pond-reared live freshwater livebearers of a declared species and sales grade |
| production_route | managed_rearing is the biological parent; pond, flow-through tank and RAS implementations are selected from actual cohort and hydraulic records; farm_harvest, live_conditioning and farm_dispatch complete the route |
| market_state | Live, unprocessed, accepted for ornamental sale at the recorded farm dispatch gate |

For the biological alternative-production module, on-farm breeding adds retained breeders, spawning/nursery activity and period attribution inside managed_rearing; purchased juvenile supply instead requires a supplier nursery/breeding dataset and receiving records. These sources may coexist in separately traceable cohorts. For the alternative-technology module, managed_rearing is the parent: pond use requires actual abstraction, drainage, sediment removal and partial/full harvest records; flow-through tanks require actual inlet/outlet throughput and tank cleaning; RAS adds a return-water/biofilter/solids-removal topology with pumping, aeration, possible heating and treatment start-up. Natural pond food versus purchased or on-site live feed must be disclosed. One physical water circuit cannot simultaneously be modelled as once-through and fully recirculating for the same time interval. Hybrid or sequential systems require separate circuit/phase records, not added parallel default burdens. FA099 supports these qualitative distinctions; current layout, meters, maintenance and water-quality records establish the actual delta.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net live farmed ornamental fish biomass accepted at actual farm dispatch |
| How much | 1 kg |
| How well | Declared species, size/sex/color grade, health/survival acceptance and live unprocessed state; no cross-species service equivalence |
| How long or cycle | Declared breeding, nursery and grow-out phase dates, harvest events, conditioning interval and dispatch lot within the reporting period; retained stock and breeders link adjoining periods |
| reference_flow_link | `farmed_ornamental_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live farmed ornamental fish at farm dispatch `142f4fa7-d47c-4fe0-8d15-751758c17a9c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; farmed origin and seed/broodstock supplier; freshwater/brackish/marine and salinity; breeding/nursery/grow-out phases; pond/tank/RAS hydraulic topology; cohort or continuous production mode; site and geography; reporting dates; harvest method and events; size/sex/color grade; live count and net biomass; survival and mortality; conditioning interval; actual farm dispatch gate |

Declare every qualifier in dataset metadata or traceable lot/process notes. Exclude carrier water, oxygen, bags, boxes and equipment from fish reference biomass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated, humane tared/drained batch weighing at dispatch, excluding free water and packaging; document method and uncertainty in cp_stock_managed_rearing; cp_stock_farm_harvest; cp_stock_live_conditioning; cp_stock_farm_dispatch. |
| `count_conversion` | seed_stock; broodstock; market_ready_stock; harvest_stock; harvested_live_lot; conditioning_stock; graded_live_stock; conditioning_returns; other_live_sales; packing_stock; farmed_ornamental_dispatch | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain counts and grades as auxiliary records. Count-to-mass conversion requires a representative measured same-species/stage/grade lot; record sampling, mean net mass and uncertainty. No universal individual fish weight or count-only kg substitution. |
| `energy_conversion` | all electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve metered kWh and energy support identity; if a downstream representation uses MJ apply 3.6 MJ per kWh once. Fuel mass requires actual fuel calorific evidence before energy conversion. |
| `material_basis` | rearing_feed; harvest_bait; conditioning_feed; rearing_treatments; conditioning_treatments; packing_additives | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record feed as-received and dry matter separately; medicines/additives as formulated product and active ingredient separately with composition. Do not substitute nutrient/active mass for purchased product mass. |
| `water_basis` | all water rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Meter or weigh external water by source; volumetric readings require recorded density/temperature and salinity conversion to kg. Internal recirculation and reused pond water are transfer logs, not repeated fresh supply. |
| `stock_basis` | all fish rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Separate opening/closing fish stock, retained breeders, measured growth, harvest withdrawals, returned juveniles, deaths, escapes and sales by stage. Growth is not purchased fish input; internal transfer amounts are measured and are not fixed to final reference mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Recorded purchased broodstock/juveniles or on-farm breeding/nursery, with opening standing stock and its carried production burdens |
| starting_condition_role | Managed biological production starting condition with explicit supplier or prior-period linkage |
| product_classification_scope | Farmed ornamental live finfish through actual farm dispatch |
| recursive_input_rule | Same-category purchased stock remains an input at its actual life stage and supplier gate; link evidenced upstream breeding/nursery production once; retain missing supplier burdens as disclosed gaps |
| upstream_dataset_requirement | Supplier primary activity or compatible upstream datasets for seed/broodstock, feed/live feed, energy, supplied water, actual materials and capital/replacement items; on-site feed production must include its own materials/energy |
| disclosure | Declare farm topology, species/stages, stock origin, reporting and carried periods, harvest events, shared circuits/assets, treatments, output purposes and all unresolved data/identity gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_managed` | managed_rearing | Include breeding/nursery where on-site, retained broodstock, grow-out, feeding, water supply, pump/aerator/biofilter/heating operation, cleaning, quarantine, actual treatments, mortality and removed solids. Separate source supply from environmental abstraction. | uf-ifas-ras-fa099 |
| `boundary_harvest` | farm_harvest | Harvest removes the measured sale-bound stock from its pond/tank production context. Include actual trap/seine/bait, pump-down, containers and on-farm transport to conditioning, with transport water/oxygen/energy and losses. This responsibility is separate from biological growth and post-harvest stabilization. | uf-ifas-harvest-fa117; uf-ifas-onfarm-transport-fa119 |
| `boundary_conditioning` | live_conditioning | Stabilize the harvested live lot and grade to actual buyer requirements; record accepted, other sold grades, live returns and mortality. Record actual holding feed/water/oxygen/energy and any treatments; no mandatory therapy is inferred from older guidance. | uf-ifas-grading-fa118; uf-ifas-shipping-fa120 |
| `boundary_dispatch` | farm_dispatch | Include actual farm-side preparation/packing and accepted live output handover. Without bags/boxes, record bulk live handover with packaging amounts zero by evidence. Include carrier water and other packing inputs separately; downstream transport, retail/display and aquarium use lie beyond this gate. | uf-ifas-shipping-fa120 |
| `boundary_water` | all nodes | Record external supplied water and natural abstraction once at entry. Log recirculated water, routed internal transfers, evaporation, water sent with fish, treatment outflow and direct discharge to close circuit/period water balances. A wastewater-to-treatment row is a waste exchange; direct environmental release is elementary, with actual receiving compartment and separately monitored substances. | uf-ifas-ras-fa099 |
| `boundary_emissions` | all nodes | Include actual on-site fuel combustion and monitored/reliably modelled substance-specific air emissions with fuel/engine/factor evidence; purchased heat is a supplier service, not duplicate on-site combustion. Direct water releases require real substance/speciation, measured concentrations/flow and receiving medium; total N/P or COD alone does not establish an elementary substance UUID. | |
| `boundary_period_asset` | all nodes | Include or explicitly justify any capital cut-off. Identify ponds/tanks, buildings, pumps, biofilters, nets, graders, vehicles and reusable transport boxes by asset/service period and every consumer. Retain prior-period stock and asset burdens, start-up/cleaning, replacement and termination events, without charging the same item in each node. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| managed_rearing | Managed breeding, nursery and grow-out | required | All farmed lots; on-site breeding and purchased seed selected from origin records | foreground biological production; cohort or continuous circuit/period indexing | Measured sale-bound stock transferred to harvest; retained stock remains in stock ledger |
| farm_harvest | Harvest and on-farm transfer | required | Every marketed lot is removed from its managed production context | foreground harvest and station-internal transport | Measured harvested live lot delivered to conditioning |
| live_conditioning | Live stabilization and embedded grade sorting | required | Record actual intervention or documented immediate handover with zero incremental resource demand | foreground conditioning; actual holding interval | Measured accepted graded live stock; other sales/returns/losses separately recorded |
| farm_dispatch | Farm preparation and dispatch | required | Every final handover; packaging inputs conditional on actual bags/boxes/tanks | foreground delivery at farm gate; distribution excluded | 1 kg final accepted live biomass |

Index every row by cohort, circuit/tank/pond, run or continuous period and event. Link cleaning, changeover, start-up and maintenance to the consumers that require them. Recurring partial harvests do not imply an empty pond or close out year-end standing stock. Detailed material/service cards below are conditional where stated; each actual exchange must be split by concrete identity, supplier or destination before downstream publication. Internal fish and water transfers reconcile across nodes and cancel from the aggregated external inventory.

### Process: Managed breeding, nursery and grow-out (`managed_rearing`)

#### Inputs

##### Product flows

###### Live retained stock returned from conditioning (`returned_live_stock`)

Conditional actual return paired to conditioning_returns, with origin cohort/stage and carried burdens. It is an internal transfer, not purchased seed or a second production credit.

- Selected flow: Live retained stock returned from conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_stock_managed_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_managed_rearing`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased ornamental juveniles at nursery supplier gate (`seed_stock`)

Conditional purchased juveniles: record species/stage, supplier, receipt mass/count and upstream breeding/nursery burdens. On-farm offspring are internal production, not an additional bought-seed exchange.

- Selected flow: Purchased ornamental juveniles at nursery supplier gate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rearing`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased breeding stock attributable to current production (`broodstock`)

Conditional external breeder introduction/replacement: document breeder origin, useful reproductive periods, retained stock, replacement and termination. Allocate purchase burdens across evidenced service periods; existing breeders are opening stock.

- Selected flow: Purchased breeding stock attributable to current production
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rearing`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Externally supplied rearing and cleaning water (`rearing_water`)

Record supplier and actual untreated/municipal/treated process-quality water separately, with salinity and fish suitability. Do not bind an unspecified supply umbrella to one industrial process-water identity.

- Selected flow: Externally supplied rearing and cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_managed_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_managed_rearing`
- Sources: `uf-ifas-ras-fa099`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplier and voltage-specific rearing electricity (`rearing_electricity`)

Meter pumping, aeration, filtration, lighting, heating and cleaning including idle/start-up periods. Split power by geography, supplier/voltage and circuit; CN low-voltage identity cannot cover every farm.

- Selected flow: Actual supplier and voltage-specific rearing electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured attributable kWh from `cp_energy_managed_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_managed_rearing`
- Sources: `uf-ifas-ras-fa099`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased rearing heat service (`rearing_heat`)

Conditional externally supplied heat, measured at the user boundary with supplier technology and losses disclosed. Do not also charge its provider fuel as on-site consumption.

- Selected flow: Purchased rearing heat service
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable MJ from `cp_energy_managed_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_managed_rearing`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sale-bound live ornamental stock transferred to harvest (`market_ready_stock`)

Measured actual sale-bound stock removed for harvest; retained breeders and unharvested fish remain standing stock. This grow-out interface has no verified farm-dispatch product UUID.

- Selected flow: Sale-bound live ornamental stock transferred to harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_stock_managed_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_managed_rearing`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dead rearing fish routed to actual disposal (`rearing_mortality`)

Record measured dead/euthanized biomass, diagnosis/event where available and actual disposal destination. Escapes and retained live culls are stock/event records, not this waste exchange.

- Selected flow: Dead rearing fish routed to actual disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_waste_managed_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_managed_rearing`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rearing wastewater sent to treatment (`rearing_effluent`)

Conditional wastewater delivered to an actual on-site/off-site treatment boundary; record flow/composition and treatment linkage. If treatment is on-site include its inputs and residual outputs; avoid counting treated discharge as untreated discharge.

- Selected flow: Rearing wastewater sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_managed_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_managed_rearing`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Removed aquaculture solids routed to treatment or disposal (`rearing_sludge`)

Measure filter backwash/sludge/pond-cleaning solids with moisture and destination. No fertilizer credit unless actual product quality, buyer and separate output review establish saleable use.

- Selected flow: Removed aquaculture solids routed to treatment or disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_waste_managed_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_managed_rearing`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct rearing water release to actual receiving medium (`rearing_water_release`)

Conditional actual direct environmental water return, with source/receiving compartment and water quantity; identify monitored substances separately. The water carrier is not a generic organic-pollutant identity.

- Selected flow: Direct rearing water release to actual receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_managed_rearing`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_managed_rearing`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and on-farm transfer (`farm_harvest`)

#### Inputs

##### Product flows

###### Live stock withdrawn from managed rearing (`harvest_stock`)

Match actual stock withdrawal to market_ready_stock and the originating circuit/cohort. Repeated partial harvests retain unharvested fish; this internal quantity is not fixed to 1 kg.

- Selected flow: Live stock withdrawn from managed rearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_stock_farm_harvest`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_farm_harvest`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual harvest and on-farm transfer electricity (`harvest_electricity`)

Record pump-down, aeration and electric on-farm transport only where operated; shared meter shares reconcile with rearing/conditioning consumption.

- Selected flow: Actual harvest and on-farm transfer electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured attributable kWh from `cp_energy_farm_harvest`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_farm_harvest`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Externally supplied harvest and on-farm carrier water (`harvest_water`)

External supplier water newly entering this node only; pond/tank water reused for transport is logged as an internal transfer and not another supply input.

- Selected flow: Externally supplied harvest and on-farm carrier water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_farm_harvest`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_farm_harvest`
- Sources: `uf-ifas-onfarm-transport-fa119`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased gaseous oxygen used in on-farm transport (`harvest_oxygen`)

Conditional actual oxygen dosing; record gaseous supply form, purity/provider and kg consumed. Aeration through electricity is not purchased oxygen; cylinder tare and refill quantity remain distinct.

- Selected flow: Purchased gaseous oxygen used in on-farm transport
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_materials_farm_harvest`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_farm_harvest`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested live lot at conditioning receipt (`harvested_live_lot`)

Measured viable fish arriving after removal and on-farm transport; fish returned directly to production remain separately identified in the stock ledger.

- Selected flow: Harvested live lot at conditioning receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_stock_farm_harvest`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_farm_harvest`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest and on-farm transfer dead fish to disposal (`harvest_mortality`)

Measure handling/transfer losses and disposal; alive unmarketable fish are not assumed dead or saleable. Record actual destiny before exchange selection.

- Selected flow: Harvest and on-farm transfer dead fish to disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_waste_farm_harvest`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_farm_harvest`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest carrier or drainage water sent to treatment (`harvest_effluent`)

Conditional actual treatment route; distinguish pump-down pond drainage, carrier water retained into conditioning and water to treatment. Retained transfer water is not wastewater at this boundary.

- Selected flow: Harvest carrier or drainage water sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_farm_harvest`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_farm_harvest`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct harvest water release to receiving medium (`harvest_water_release`)

Conditional direct drainage/release with source, volume/mass and receiving medium; substances released by harvest sediment disturbance require actual evidence, not automatic presumed emissions.

- Selected flow: Direct harvest water release to receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_farm_harvest`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_farm_harvest`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Live stabilization and embedded grading (`live_conditioning`)

#### Inputs

##### Product flows

###### Purchased live holding heat service (`conditioning_heat`)

Conditional external heat at actual holding user boundary, metered MJ and documented supplier/technology; exclude the same supplier fuel from on-site consumption.

- Selected flow: Purchased live holding heat service
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable MJ from `cp_energy_live_conditioning`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_live_conditioning`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvested live lot entering conditioning (`conditioning_stock`)

Match harvested_live_lot mass/count, timing, water and surviving grade at receipt; transferred water is separately logged.

- Selected flow: Harvested live lot entering conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_stock_live_conditioning`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_live_conditioning`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Externally supplied conditioning and cleaning water (`conditioning_water`)

New external supply only, separately identified by provider and water-quality state. Internal pond/carrier/RAS water is not repurchased at this node.

- Selected flow: Externally supplied conditioning and cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_live_conditioning`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_live_conditioning`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual holding and grade-handling electricity (`conditioning_electricity`)

Meter holding pumps/aeration, handling, thermal control and cleaning through the actual interval; record shared circuits without repeating upstream rearing.

- Selected flow: Actual holding and grade-handling electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured attributable kWh from `cp_energy_live_conditioning`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_live_conditioning`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased gaseous oxygen dosed during conditioning (`conditioning_oxygen`)

Conditional oxygen addition, exact supply form/provider and measured kg. No oxygen quantity is inferred solely from a fish count or holding-time assumption.

- Selected flow: Purchased gaseous oxygen dosed during conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_materials_live_conditioning`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_live_conditioning`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted stabilized and graded live ornamental lot (`graded_live_stock`)

Record actual accepted grade and viable net mass after holding/grading, passed to dispatch. This intermediate state is independently unresolved rather than borrowing farm-gate UUID.

- Selected flow: Accepted stabilized and graded live ornamental lot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_stock_live_conditioning`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_live_conditioning`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live keepers returned to managed stock (`conditioning_returns`)

Actual viable under-size/retained breeders returned to origin circuit/cohort; paired input/stock-ledger transfer carries accumulated burden forward, without sales credit or repeated new-seed burden.

- Selected flow: Live keepers returned to managed stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_stock_live_conditioning`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_live_conditioning`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dead or disposed conditioning culls (`conditioning_mortality`)

Measure deaths and actual cull disposal, retaining cause/destination evidence. Keep viable returns and other live sales separate.

- Selected flow: Dead or disposed conditioning culls
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_waste_live_conditioning`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_live_conditioning`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning wastewater sent to treatment (`conditioning_effluent`)

Actual treatment handoff, measured composition/quantity; direct release uses environmental rows instead. On-site treatment operations and outputs must remain in the package.

- Selected flow: Conditioning wastewater sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_live_conditioning`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_live_conditioning`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct conditioning water release to receiving medium (`conditioning_water_release`)

Conditional direct environmental return; measure water mass, receiving compartment and actual substance release separately from wastewater treatment.

- Selected flow: Direct conditioning water release to receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_live_conditioning`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_live_conditioning`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Farm preparation and dispatch (`farm_dispatch`)

#### Inputs

##### Product flows

###### Accepted graded live lot entering farm dispatch (`packing_stock`)

Match graded_live_stock and lot/grade records. The actual mass may exceed final accepted dispatched mass if dispatch losses occur.

- Selected flow: Accepted graded live lot entering farm dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_stock_farm_dispatch`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_farm_dispatch`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Externally supplied live dispatch carrier water (`packing_water`)

Actual newly supplied carrier/cleaning water at dispatch; internally transferred conditioning water is logged, not repeated supply. Water accompanies fish but is excluded from reference biomass.

- Selected flow: Externally supplied live dispatch carrier water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_farm_dispatch`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_farm_dispatch`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased gaseous oxygen added at farm dispatch (`packing_oxygen`)

Conditional measured oxygen filling with verified supply form/purity/provider; kg gas excludes cylinder. Do not treat all oxygen names as interchangeable identities.

- Selected flow: Purchased gaseous oxygen added at farm dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_materials_farm_dispatch`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_farm_dispatch`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual farm dispatch preparation electricity (`packing_electricity`)

Conditional filling/sealing/thermal/cleaning electricity from actual equipment; attributable share excludes upstream pumps already charged to conditioning.

- Selected flow: Actual farm dispatch preparation electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured attributable kWh from `cp_energy_farm_dispatch`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_farm_dispatch`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live farmed ornamental fish at farm dispatch (`farmed_ornamental_dispatch`)

Actual final net live ornamental biomass accepted at the declared farm handover; only this output is the reference. Water and packaging are separate accompanying materials.

- Selected flow: Live farmed ornamental fish at farm dispatch `142f4fa7-d47c-4fe0-8d15-751758c17a9c`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_stock_farm_dispatch`
- Sources: `reference-definition`

- Range: Reference quantity by definition
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-definition`

##### Waste flows

###### Dead or rejected fish disposed before dispatch (`dispatch_mortality`)

Actual pre-gate mortality/culls, measured net biomass and disposal. Destination survival after the handover is outside this reference boundary.

- Selected flow: Dead or rejected fish disposed before dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_waste_farm_dispatch`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_farm_dispatch`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dispatch preparation wastewater sent to treatment (`dispatch_effluent`)

Actual wash/filling overflow to treatment, excluding carrier water shipped to buyer. Water direct to environment requires its own receiving-medium rows.

- Selected flow: Dispatch preparation wastewater sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_farm_dispatch`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_farm_dispatch`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct dispatch preparation water release to receiving medium (`dispatch_water_release`)

Conditional actual direct environmental release; separately record mass and actual receiver, excluding water carried across farm gate as accompanying product medium.

- Selected flow: Direct dispatch preparation water release to receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable kg from `cp_water_farm_dispatch`; apply collected-period attribution per 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_farm_dispatch`

- Range: Replaceable provisional screening estimate; not empirical or compliance limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_precedence` | all nodes | First subdivide traceable species/cohort/grade processes and directly assign identifiable inputs. For remaining shared burdens use a documented causal driver (metered energy, occupied tank-volume-time or recorded service use); where causality cannot be established disclose economic allocation using contemporaneous species/grade sales values and sensitivity. Record chosen method, output set, prices/driver and total-share reconciliation. No universal default fraction or automatic substitution credit. | ghg-product-standard |
| `allocation_outputs` | live_conditioning; farm_dispatch | Enumerate every independently sold species/grade and its actual buyer-purpose/gate. Allocate joint upstream burdens across the complete intended output set before reference normalization. Internal market-ready, harvested and graded stock are transfers, not three credited final products. Deaths/culls/sludge are wastes unless an evidenced independent product review says otherwise; retain their burdens with successful production. | |
| `allocation_stock_period` | managed_rearing; all fish rows | Declare opening/closing nursery/grow-out stocks and breeders, source periods and every partial harvest. Carry accumulated burdens with retained and returned live fish to their next period; disclose recorded growth and stage transitions rather than using a closed-mass assumption for growing biomass. Breeder establishment/replacement burden is apportioned over documented reproductive service periods and offspring, with revision for early termination. No closing-stock sale credit or repeated purchase charge. | |
| `allocation_mode` | all nodes | For batch production link stocking, harvest, cleaning and changeover to cohort. For continuous ponds/circuits link resource meters to bounded periods and harvest events, retaining overlapping age classes and standing stock. Attribute idle/start-up/maintenance and end-of-cycle cleaning with disclosed causal service evidence; reconcile once across all beneficiaries and periods. | |
| `allocation_assets` | all nodes | Maintain a shared asset/service ledger naming pond/tank, building, pump/biofilter, gear, vehicle or reusable box and all consuming nodes/periods. Attribute actual material, replacement, cleaning and operating burdens by documented service use; separate capital material from metered energy. A shared meter total is divided once, never copied at each consumer. Record lifetimes/reuse counts from actual maintenance, replacement and termination evidence, not a universal amortization period. | |
| `allocation_water` | all water rows | Attribute external water and water-system inputs once at source entry; internal reuse/return does not generate another supplier burden. Partition discharged, evaporated, retained, treated and shipped water by recorded destination and period. Treatment inputs and outputs are included once, with actual stage handoffs; no double charge for treatment service plus complete duplicate treatment operation. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols retain raw period/event totals and output attribution separately; the published inventory aggregation is per 1 kg reference flow. Zero values require evidence of the condition's absence. These protocols define measurements; they do not assert that site records already exist.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stock_managed_rearing` | `managed_rearing` | All fish and final net mass | stock and weighing records | site; cohort; species; stage; origin/supplier; opening/closing stock; breeders; actual birth/growth observations; count; sampled mass; transfer/return; grade; mortality; escape; harvest; dispatch date; tare/net mass ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Calibrated humane drained/tared batch weighing; representative same-stage lot sampling when counts require mass conversion; reconcile stock, harvest and sales logs without assuming no growth ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each receipt, transfer, harvest and dispatch; reporting boundaries | Breeding/nursery/grow-out, holding and dispatch dates; adjoining retained-stock periods | Declared farm circuits and lot, supplier linkage | per 1 kg reference flow | Calibration/tare record; sample design and uncertainty; paired transfers; stock reconciliation |
| `cp_stock_farm_harvest` | `farm_harvest` | All fish and final net mass | stock and weighing records | site; cohort; species; stage; origin/supplier; opening/closing stock; breeders; actual birth/growth observations; count; sampled mass; transfer/return; grade; mortality; escape; harvest; dispatch date; tare/net mass ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Calibrated humane drained/tared batch weighing; representative same-stage lot sampling when counts require mass conversion; reconcile stock, harvest and sales logs without assuming no growth ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each receipt, transfer, harvest and dispatch; reporting boundaries | Breeding/nursery/grow-out, holding and dispatch dates; adjoining retained-stock periods | Declared farm circuits and lot, supplier linkage | per 1 kg reference flow | Calibration/tare record; sample design and uncertainty; paired transfers; stock reconciliation |
| `cp_stock_live_conditioning` | `live_conditioning` | All fish and final net mass | stock and weighing records | site; cohort; species; stage; origin/supplier; opening/closing stock; breeders; actual birth/growth observations; count; sampled mass; transfer/return; grade; mortality; escape; harvest; dispatch date; tare/net mass ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Calibrated humane drained/tared batch weighing; representative same-stage lot sampling when counts require mass conversion; reconcile stock, harvest and sales logs without assuming no growth ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each receipt, transfer, harvest and dispatch; reporting boundaries | Breeding/nursery/grow-out, holding and dispatch dates; adjoining retained-stock periods | Declared farm circuits and lot, supplier linkage | per 1 kg reference flow | Calibration/tare record; sample design and uncertainty; paired transfers; stock reconciliation |
| `cp_stock_farm_dispatch` | `farm_dispatch` | All fish and final net mass | stock and weighing records | site; cohort; species; stage; origin/supplier; opening/closing stock; breeders; actual birth/growth observations; count; sampled mass; transfer/return; grade; mortality; escape; harvest; dispatch date; tare/net mass ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Calibrated humane drained/tared batch weighing; representative same-stage lot sampling when counts require mass conversion; reconcile stock, harvest and sales logs without assuming no growth ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each receipt, transfer, harvest and dispatch; reporting boundaries | Breeding/nursery/grow-out, holding and dispatch dates; adjoining retained-stock periods | Declared farm circuits and lot, supplier linkage | per 1 kg reference flow | Calibration/tare record; sample design and uncertainty; paired transfers; stock reconciliation |
| cp_rearing | managed_rearing | Seed/broodstock and feed | receipt and management logs | seed/broodstock supplier; breeding phases; feed/live-feed product/provider; composition; as-received/dry matter; purchases; opening/closing material inventory; feeding; on-site feed inputs; cohort/period | Reconcile supplier primary production records, invoices, receipts and weighed feeding with stock/phase logs; capture actual breeding activity and natural pond-food disclosure | kg | Each receipt/feed event; period stocktake | Whole cohort or bounded continuous period including start-up/cleaning | Actual farm and upstream suppliers | per 1 kg reference flow | Invoice/scale evidence; upstream supplier dataset and gate; feeding inventory reconciliation |
| cp_harvest | farm_harvest | Harvest bait and operations | harvest and internal transport logs | pond/tank/cohort; trap/seine method; harvest events; bait identity/mass; carrier source; equipment; duration; origin/destination; live counts; loss/return | Weigh actual bait, trace each harvest and internal transport; cross-reference cp_energy_managed_rearing; cp_energy_farm_harvest; cp_energy_live_conditioning; cp_energy_farm_dispatch, cp_water_managed_rearing; cp_water_farm_harvest; cp_water_live_conditioning; cp_water_farm_dispatch, cp_materials_managed_rearing; cp_materials_farm_harvest; cp_materials_live_conditioning; cp_materials_farm_dispatch and cp_stock_managed_rearing; cp_stock_farm_harvest; cp_stock_live_conditioning; cp_stock_farm_dispatch | kg | Each harvest and on-farm trip | Harvest event from removal to conditioning receipt | Actual farm internal movements | per 1 kg reference flow | Event log and paired receipt; bait and transport records |
| cp_conditioning | live_conditioning | Holding feed and grade state | feeding and holding records | lot; species; grade; holding dates; feed product/mass; treatment event; accepted/returned/other sold/dead fish | Weigh actual feed and reconcile holding/grade decisions to cp_stock_managed_rearing; cp_stock_farm_harvest; cp_stock_live_conditioning; cp_stock_farm_dispatch and cp_sales_live_conditioning; cp_sales_farm_dispatch; record immediate bypass as zero-resource evidence | kg | Each event and holding-day records | Actual holding interval before dispatch | Declared holding facility/circuit | per 1 kg reference flow | Grade acceptance and live-condition records; feed inventory |
| cp_dispatch | farm_dispatch | Packaging and thermal materials | component and dispatch records | lot; package composition; bag/box/carton/label mass; actual cooling/heating pack; reusable container id/count; shipped/rejected materials; cleaning; handover | Weigh components or use traceable supplier unit mass with actual component count; document reusable material allocation and actual bulk-handover condition | kg | Each dispatch; reusable inventory period | Preparation through actual farm handover | Farm gate and actual package supplier | per 1 kg reference flow | Component supplier records; weights; reuse/loss ledger; dispatch receipt |
| `cp_energy_managed_rearing` | `managed_rearing` | Electricity, fuel and external heat | meter and fuel stock records | node; circuit; meter id; power supplier; voltage; geography; kWh; exact fuel mass; purchased heat MJ; equipment/engine; start-up/idle/cleaning; meter interval; shared consumers ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Submeter or justify logged service allocation; reconcile fuel receipts/opening/closing stock with consumption; retain purchased-heat meter/provider and fuel calorific evidence separately ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kWh; kg; MJ | Meter interval and each fuel event | Whole reporting period including start-up, idle and maintenance | Actual circuit/equipment and suppliers | per 1 kg reference flow | Meter calibration; receipts; shared-meter reconciliation; heating/combustion linkage |
| `cp_energy_farm_harvest` | `farm_harvest` | Electricity, fuel and external heat | meter and fuel stock records | node; circuit; meter id; power supplier; voltage; geography; kWh; exact fuel mass; purchased heat MJ; equipment/engine; start-up/idle/cleaning; meter interval; shared consumers ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Submeter or justify logged service allocation; reconcile fuel receipts/opening/closing stock with consumption; retain purchased-heat meter/provider and fuel calorific evidence separately ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kWh; kg; MJ | Meter interval and each fuel event | Whole reporting period including start-up, idle and maintenance | Actual circuit/equipment and suppliers | per 1 kg reference flow | Meter calibration; receipts; shared-meter reconciliation; heating/combustion linkage |
| `cp_energy_live_conditioning` | `live_conditioning` | Electricity, fuel and external heat | meter and fuel stock records | node; circuit; meter id; power supplier; voltage; geography; kWh; exact fuel mass; purchased heat MJ; equipment/engine; start-up/idle/cleaning; meter interval; shared consumers ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Submeter or justify logged service allocation; reconcile fuel receipts/opening/closing stock with consumption; retain purchased-heat meter/provider and fuel calorific evidence separately ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kWh; kg; MJ | Meter interval and each fuel event | Whole reporting period including start-up, idle and maintenance | Actual circuit/equipment and suppliers | per 1 kg reference flow | Meter calibration; receipts; shared-meter reconciliation; heating/combustion linkage |
| `cp_energy_farm_dispatch` | `farm_dispatch` | Electricity, fuel and external heat | meter and fuel stock records | node; circuit; meter id; power supplier; voltage; geography; kWh; exact fuel mass; purchased heat MJ; equipment/engine; start-up/idle/cleaning; meter interval; shared consumers ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Submeter or justify logged service allocation; reconcile fuel receipts/opening/closing stock with consumption; retain purchased-heat meter/provider and fuel calorific evidence separately ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kWh; kg; MJ | Meter interval and each fuel event | Whole reporting period including start-up, idle and maintenance | Actual circuit/equipment and suppliers | per 1 kg reference flow | Meter calibration; receipts; shared-meter reconciliation; heating/combustion linkage |
| `cp_water_managed_rearing` | `managed_rearing` | Water entry, transfers, treatment and release | water circuit ledger and monitoring | source/supplier; resource and receiver; salinity/density/temperature; intake; makeup; internal return; shipped water; evaporation; closing storage; discharge/overflow; treatment stage; quantity/composition ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Meter/weight source-specific water; convert volumes with recorded density; sample actual outflows; reconcile entry, retained, evaporated, treated, directly returned and shipped water ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Meter interval, transfer and discharge event; period boundaries | Matched circuit and reporting period | Actual farm water circuits and receiving watershed | per 1 kg reference flow | Meter/density evidence; hydraulic layout; receiving-medium record; treatment receipt and water balance |
| `cp_water_farm_harvest` | `farm_harvest` | Water entry, transfers, treatment and release | water circuit ledger and monitoring | source/supplier; resource and receiver; salinity/density/temperature; intake; makeup; internal return; shipped water; evaporation; closing storage; discharge/overflow; treatment stage; quantity/composition ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Meter/weight source-specific water; convert volumes with recorded density; sample actual outflows; reconcile entry, retained, evaporated, treated, directly returned and shipped water ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Meter interval, transfer and discharge event; period boundaries | Matched circuit and reporting period | Actual farm water circuits and receiving watershed | per 1 kg reference flow | Meter/density evidence; hydraulic layout; receiving-medium record; treatment receipt and water balance |
| `cp_water_live_conditioning` | `live_conditioning` | Water entry, transfers, treatment and release | water circuit ledger and monitoring | source/supplier; resource and receiver; salinity/density/temperature; intake; makeup; internal return; shipped water; evaporation; closing storage; discharge/overflow; treatment stage; quantity/composition ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Meter/weight source-specific water; convert volumes with recorded density; sample actual outflows; reconcile entry, retained, evaporated, treated, directly returned and shipped water ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Meter interval, transfer and discharge event; period boundaries | Matched circuit and reporting period | Actual farm water circuits and receiving watershed | per 1 kg reference flow | Meter/density evidence; hydraulic layout; receiving-medium record; treatment receipt and water balance |
| `cp_water_farm_dispatch` | `farm_dispatch` | Water entry, transfers, treatment and release | water circuit ledger and monitoring | source/supplier; resource and receiver; salinity/density/temperature; intake; makeup; internal return; shipped water; evaporation; closing storage; discharge/overflow; treatment stage; quantity/composition ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Meter/weight source-specific water; convert volumes with recorded density; sample actual outflows; reconcile entry, retained, evaporated, treated, directly returned and shipped water ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Meter interval, transfer and discharge event; period boundaries | Matched circuit and reporting period | Actual farm water circuits and receiving watershed | per 1 kg reference flow | Meter/density evidence; hydraulic layout; receiving-medium record; treatment receipt and water balance |
| `cp_materials_managed_rearing` | `managed_rearing` | Oxygen, treatment and cleaning materials | product stock and dosing logs | specific product; supplier/form; oxygen purity/pressure form; cylinder tare/refill; formulated/active mass; dose/use event; actual authorization where relevant; stock changes; residue fate ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or use traceable supplied/dosed records, reconcile purchases/stocks and actual use; retain current relevant local authorization evidence without prescribing a regimen ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each receipt/use/cleaning event | Actual production/holding/dispatch interval | Specific suppliers, nodes and circuits | per 1 kg reference flow | Supplier composition; calibrated dosing/weighing; stock balance and destination proof |
| `cp_materials_farm_harvest` | `farm_harvest` | Oxygen, treatment and cleaning materials | product stock and dosing logs | specific product; supplier/form; oxygen purity/pressure form; cylinder tare/refill; formulated/active mass; dose/use event; actual authorization where relevant; stock changes; residue fate ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or use traceable supplied/dosed records, reconcile purchases/stocks and actual use; retain current relevant local authorization evidence without prescribing a regimen ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each receipt/use/cleaning event | Actual production/holding/dispatch interval | Specific suppliers, nodes and circuits | per 1 kg reference flow | Supplier composition; calibrated dosing/weighing; stock balance and destination proof |
| `cp_materials_live_conditioning` | `live_conditioning` | Oxygen, treatment and cleaning materials | product stock and dosing logs | specific product; supplier/form; oxygen purity/pressure form; cylinder tare/refill; formulated/active mass; dose/use event; actual authorization where relevant; stock changes; residue fate ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or use traceable supplied/dosed records, reconcile purchases/stocks and actual use; retain current relevant local authorization evidence without prescribing a regimen ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each receipt/use/cleaning event | Actual production/holding/dispatch interval | Specific suppliers, nodes and circuits | per 1 kg reference flow | Supplier composition; calibrated dosing/weighing; stock balance and destination proof |
| `cp_materials_farm_dispatch` | `farm_dispatch` | Oxygen, treatment and cleaning materials | product stock and dosing logs | specific product; supplier/form; oxygen purity/pressure form; cylinder tare/refill; formulated/active mass; dose/use event; actual authorization where relevant; stock changes; residue fate ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh or use traceable supplied/dosed records, reconcile purchases/stocks and actual use; retain current relevant local authorization evidence without prescribing a regimen ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each receipt/use/cleaning event | Actual production/holding/dispatch interval | Specific suppliers, nodes and circuits | per 1 kg reference flow | Supplier composition; calibrated dosing/weighing; stock balance and destination proof |
| `cp_assets_managed_rearing` | `managed_rearing` | Capital/replacement and shared gear | material and service ledger | asset id; component/material; mass; consumer nodes; installation; service-periods; life/reuse evidence; replacement; cleaning; retirement; occupancy/use driver; capital cut-off justification ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Record actual construction/replacement material inventory and maintenance; allocate measured service to all consumers/periods and reconcile totals; cross-reference energy instead of duplicating operation ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Installation/replacement/termination and each reporting period | Asset service life and selected beneficiary periods | All actual farm consumers, no undocumented multi-site average | per 1 kg reference flow | Asset supplier/material records; maintenance; allocation sum and cut-off review |
| `cp_assets_farm_harvest` | `farm_harvest` | Capital/replacement and shared gear | material and service ledger | asset id; component/material; mass; consumer nodes; installation; service-periods; life/reuse evidence; replacement; cleaning; retirement; occupancy/use driver; capital cut-off justification ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Record actual construction/replacement material inventory and maintenance; allocate measured service to all consumers/periods and reconcile totals; cross-reference energy instead of duplicating operation ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Installation/replacement/termination and each reporting period | Asset service life and selected beneficiary periods | All actual farm consumers, no undocumented multi-site average | per 1 kg reference flow | Asset supplier/material records; maintenance; allocation sum and cut-off review |
| `cp_assets_live_conditioning` | `live_conditioning` | Capital/replacement and shared gear | material and service ledger | asset id; component/material; mass; consumer nodes; installation; service-periods; life/reuse evidence; replacement; cleaning; retirement; occupancy/use driver; capital cut-off justification ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Record actual construction/replacement material inventory and maintenance; allocate measured service to all consumers/periods and reconcile totals; cross-reference energy instead of duplicating operation ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Installation/replacement/termination and each reporting period | Asset service life and selected beneficiary periods | All actual farm consumers, no undocumented multi-site average | per 1 kg reference flow | Asset supplier/material records; maintenance; allocation sum and cut-off review |
| `cp_assets_farm_dispatch` | `farm_dispatch` | Capital/replacement and shared gear | material and service ledger | asset id; component/material; mass; consumer nodes; installation; service-periods; life/reuse evidence; replacement; cleaning; retirement; occupancy/use driver; capital cut-off justification ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Record actual construction/replacement material inventory and maintenance; allocate measured service to all consumers/periods and reconcile totals; cross-reference energy instead of duplicating operation ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Installation/replacement/termination and each reporting period | Asset service life and selected beneficiary periods | All actual farm consumers, no undocumented multi-site average | per 1 kg reference flow | Asset supplier/material records; maintenance; allocation sum and cut-off review |
| `cp_waste_managed_rearing` | `managed_rearing` | Deaths, culls, sludge and packaging rejects | weighing and destination records | material; lot/event; net/dewatered/wet mass; moisture; waste composition; actual handler/treatment/disposal; purpose; receipt; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh segregated losses/solids/rejects; match handler and disposal/treatment receipt; distinguish viable returns and saleable goods ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each removal/loss/collection and period reconciliation | Matched cohort/event/period | Each actual node and handler | per 1 kg reference flow | Scale/moisture evidence and destination receipt; no presumed credit |
| `cp_waste_farm_harvest` | `farm_harvest` | Deaths, culls, sludge and packaging rejects | weighing and destination records | material; lot/event; net/dewatered/wet mass; moisture; waste composition; actual handler/treatment/disposal; purpose; receipt; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh segregated losses/solids/rejects; match handler and disposal/treatment receipt; distinguish viable returns and saleable goods ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each removal/loss/collection and period reconciliation | Matched cohort/event/period | Each actual node and handler | per 1 kg reference flow | Scale/moisture evidence and destination receipt; no presumed credit |
| `cp_waste_live_conditioning` | `live_conditioning` | Deaths, culls, sludge and packaging rejects | weighing and destination records | material; lot/event; net/dewatered/wet mass; moisture; waste composition; actual handler/treatment/disposal; purpose; receipt; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh segregated losses/solids/rejects; match handler and disposal/treatment receipt; distinguish viable returns and saleable goods ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each removal/loss/collection and period reconciliation | Matched cohort/event/period | Each actual node and handler | per 1 kg reference flow | Scale/moisture evidence and destination receipt; no presumed credit |
| `cp_waste_farm_dispatch` | `farm_dispatch` | Deaths, culls, sludge and packaging rejects | weighing and destination records | material; lot/event; net/dewatered/wet mass; moisture; waste composition; actual handler/treatment/disposal; purpose; receipt; date ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh segregated losses/solids/rejects; match handler and disposal/treatment receipt; distinguish viable returns and saleable goods ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each removal/loss/collection and period reconciliation | Matched cohort/event/period | Each actual node and handler | per 1 kg reference flow | Scale/moisture evidence and destination receipt; no presumed credit |
| `cp_emissions_managed_rearing` | `managed_rearing` | Actual water substances and air emissions | monitoring or documented source model | specific species/substance; elemental/ion basis; concentration; actual discharge mass/flow; receiving medium; fuel/engine; stack; factor/source/version; fossil/biogenic split; period ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Sample representative actual outflow or source-specific air monitoring; calculate loads from matched flow/concentration units; use a documented applicable factor only if measurement is absent, and disclose uncertainty and coverage ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Actual discharge/fuel event and representative monitoring intervals | Matched source and reporting dates | Actual receiving water or air compartment | per 1 kg reference flow | Laboratory method/detection limit; flow matching; source-specific factor justification and incomplete-speciation disclosure |
| `cp_emissions_farm_harvest` | `farm_harvest` | Actual water substances and air emissions | monitoring or documented source model | specific species/substance; elemental/ion basis; concentration; actual discharge mass/flow; receiving medium; fuel/engine; stack; factor/source/version; fossil/biogenic split; period ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Sample representative actual outflow or source-specific air monitoring; calculate loads from matched flow/concentration units; use a documented applicable factor only if measurement is absent, and disclose uncertainty and coverage ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Actual discharge/fuel event and representative monitoring intervals | Matched source and reporting dates | Actual receiving water or air compartment | per 1 kg reference flow | Laboratory method/detection limit; flow matching; source-specific factor justification and incomplete-speciation disclosure |
| `cp_emissions_live_conditioning` | `live_conditioning` | Actual water substances and air emissions | monitoring or documented source model | specific species/substance; elemental/ion basis; concentration; actual discharge mass/flow; receiving medium; fuel/engine; stack; factor/source/version; fossil/biogenic split; period ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Sample representative actual outflow or source-specific air monitoring; calculate loads from matched flow/concentration units; use a documented applicable factor only if measurement is absent, and disclose uncertainty and coverage ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Actual discharge/fuel event and representative monitoring intervals | Matched source and reporting dates | Actual receiving water or air compartment | per 1 kg reference flow | Laboratory method/detection limit; flow matching; source-specific factor justification and incomplete-speciation disclosure |
| `cp_emissions_farm_dispatch` | `farm_dispatch` | Actual water substances and air emissions | monitoring or documented source model | specific species/substance; elemental/ion basis; concentration; actual discharge mass/flow; receiving medium; fuel/engine; stack; factor/source/version; fossil/biogenic split; period ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Sample representative actual outflow or source-specific air monitoring; calculate loads from matched flow/concentration units; use a documented applicable factor only if measurement is absent, and disclose uncertainty and coverage ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Actual discharge/fuel event and representative monitoring intervals | Matched source and reporting dates | Actual receiving water or air compartment | per 1 kg reference flow | Laboratory method/detection limit; flow matching; source-specific factor justification and incomplete-speciation disclosure |
| `cp_sales_live_conditioning` | `live_conditioning` | Independent other live sales | sale and grade records | species; grade; buyer/purpose; actual handover gate; mass/count; price and currency/date; upstream cohort ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Trace buyer receipt, measured output and contemporaneous species/grade prices; distinguish actual independent sale from retained fish ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each independent sale | Matched output and reporting period | Declared farm and actual buyer gate | per 1 kg reference flow | Sales invoice; output measurement; purpose/gate and allocation proof |
| `cp_sales_farm_dispatch` | `farm_dispatch` | Independent other live sales | sale and grade records | species; grade; buyer/purpose; actual handover gate; mass/count; price and currency/date; upstream cohort ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Trace buyer receipt, measured output and contemporaneous species/grade prices; distinguish actual independent sale from retained fish ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | Each independent sale | Matched output and reporting period | Declared farm and actual buyer gate | per 1 kg reference flow | Sales invoice; output measurement; purpose/gate and allocation proof |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `collected_period_attribution` | all inventory rows | Retain measured run/period totals, assign documented direct/shared output and period shares under section 7, then divide the assigned amount by accepted final net live biomass of that output lot in kg; report each exchange per 1 kg reference flow. Reference output is 1 kg by definition. Internal stocks remain measured transfers, with carried burdens rather than output credits. | cp_stock_managed_rearing; cp_stock_farm_harvest; cp_stock_live_conditioning; cp_stock_farm_dispatch; applicable resource protocol; allocation evidence | Quantity per 1 kg reference flow with raw-total audit trail | reference-definition |
| `stock_reconciliation` | all fish rows | Reconcile opening stock plus external arrivals, actual births/growth and internal returns against harvest/sale, deaths/culls, escapes and closing stock by species/stage. Count and biomass ledgers disclose their differing growth/conversion uncertainty; unexplained imbalance requires review. | cp_stock_managed_rearing; cp_stock_farm_harvest; cp_stock_live_conditioning; cp_stock_farm_dispatch; cp_sales_live_conditioning; cp_sales_farm_dispatch; cp_waste_managed_rearing; cp_waste_farm_harvest; cp_waste_live_conditioning; cp_waste_farm_dispatch | Reconciled cohort/period stock and retained burden ledger | |
| `water_reconciliation` | all water rows | Balance external supply and abstraction against evaporation, storage change, direct release, treatment outflow and water shipped across gate. Internal circuit flows cancel; record actual density and routing, and keep substance loads separate from carrier mass. | cp_water_managed_rearing; cp_water_farm_harvest; cp_water_live_conditioning; cp_water_farm_dispatch; cp_energy_managed_rearing; cp_energy_farm_harvest; cp_energy_live_conditioning; cp_energy_farm_dispatch; cp_emissions_managed_rearing; cp_emissions_farm_harvest; cp_emissions_live_conditioning; cp_emissions_farm_dispatch | Reconciled circuit-period water and substance records | |
| `asset_share` | rearing_assets; harvest_gear; packing_materials | Allocate actual asset material and replacement/cleaning burdens over evidenced service periods and consumers using documented use/occupancy; include disposal/replacement once. Reconcile all shares to the attributed total and update after early retirement. | cp_assets_managed_rearing; cp_assets_farm_harvest; cp_assets_live_conditioning; cp_assets_farm_dispatch; cp_dispatch; service/period evidence | Attributed asset quantity per 1 kg reference flow | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | all exchanges | Resolve each actual material/service/substance, property, unit, state/gate, provider/geography and destination independently. Umbrella identities and missing monitoring are explicit gaps, not concrete TIDAS exchanges. | Detail verification and actual supplier/receiver records |
| `temporal_quality` | all nodes | Cover breeding/nursery/grow-out, successive harvests, conditioning, dispatch and retained-stock/asset periods with coherent event ids; record missing and sampled periods. | Cohort/circuit/period ledger |
| `measurement_quality` | all quantities | Calibrated meters/scales, taring and humane fish weighing; count-to-mass sample evidence, unit/density/composition basis and detection limits retained. | Protocol evidence and uncertainty records |
| `completeness_quality` | all resources and losses | Record major feed/live feed, supplied/abstracted water, energy/heat, actual treatments, assets, standing stock, mortality, sludge, emissions and all intended outputs; document zeros, cut-offs and upstream gaps. | Resource/output balance and upstream linkage |
| `screening_quality` | all ranges | Provisional 0-to-broad-upper ranges are replaceable reasoned screening estimates, not empirical performance, compliance limits or substitute values. A value outside the screen triggers evidence review, never clipping or omission. Replace with reviewed site or source evidence where available. | Raw value and reviewer explanation; source or collection evidence |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_rearing_feed` | `managed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Actual prepared or live rearing feed”; retain all following collection, quantity and normalization obligations: Split actual prepared feed, externally sourced live feed and on-site live-feed production by composition/provider. Record delivered/used/residual feed and as-received/dry basis; natural pond food is disclosed, not fabricated purchased feed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_rearing`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_rearing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_rearing_fuel` | `managed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Actual on-site rearing fuel”; retain all following collection, quantity and normalization obligations: Conditional actual boilers/generators: record exact fuel, consumed mass, equipment and calorific evidence; include matched air emission rows. Purchased heat instead requires its separate supplier energy exchange, not an invented fuel. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_energy_managed_rearing`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_energy_managed_rearing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_rearing_treatments` | `managed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Actual rearing, quarantine and circuit-cleaning materials”; retain all following collection, quantity and normalization obligations: Conditional actual salts, disinfectants, veterinary products, filter media or water adjustments: split concrete product/composition and purpose. Record current local authorization where relevant and discharge/residue fate; no prescribed chemical regimen. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_materials_managed_rearing`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_materials_managed_rearing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_rearing_assets` | `managed_rearing`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable rearing asset and replacement materials”; retain all following collection, quantity and normalization obligations: Record actual pond/tank/building/pump/biofilter construction and replacement inventory, service periods and all consumer nodes. This conditional material umbrella is expanded by composition; energy/service burdens remain in their own rows. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_assets_managed_rearing`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_assets_managed_rearing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_rearing_withdrawal` | `managed_rearing`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual natural-source water abstraction”; retain all following collection, quantity and normalization obligations: Conditional direct withdrawal: split groundwater/surface/seawater resource identity and source catchment. Include abstraction/treatment energy in the applicable measured rows; reuse within the same circuit is not a new withdrawal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_water_managed_rearing`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_managed_rearing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_rearing_water_substances` | `managed_rearing`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actually monitored rearing substances to specific water medium”; retain all following collection, quantity and normalization obligations: Conditional substance umbrella: expand measured ammonia/ammonium/nitrate/phosphate or other actual reported species into separate exchanges with element-versus-ion basis and receiving freshwater/marine medium. Missing monitoring remains a gap, not zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_emissions_managed_rearing`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_managed_rearing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_rearing_air_emissions` | `managed_rearing`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual rearing combustion or treatment emissions to air”; retain all following collection, quantity and normalization obligations: Conditional actual sources: expand concrete measured/modelled substances and stack/air compartment, including on-site heating/generation. Identify fuel/engine, factor coverage and biogenic/fossil basis; no universal emission factors. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_emissions_managed_rearing`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_managed_rearing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_bait` | `farm_harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual harvest trap bait”; retain all following collection, quantity and normalization obligations: Conditional baited trapping only: record prepared/live bait used, residual fate and upstream source; do not repeat bait already included in rearing_feed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_harvest`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_harvest` Sources: `uf-ifas-harvest-fa117` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_fuel` | `farm_harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Actual harvest and on-farm transfer fuel”; retain all following collection, quantity and normalization obligations: Conditional fuelled pump/vehicle: exact fuel mass and equipment/event records. Match combustion emissions; downstream delivery transport is outside this card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_energy_farm_harvest`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_energy_farm_harvest` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_gear` | `farm_harvest`; inputs; product | Identify and separately collect every actual exchange covered by “Attributable harvest gear and transport-container materials”; retain all following collection, quantity and normalization obligations: Actual traps/seines/graders or vehicle/container material shares, replacement and reuse. Shared gear costs are attributed once across events/periods, not charged fully per harvest. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_assets_farm_harvest`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_assets_farm_harvest` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_withdrawal` | `farm_harvest`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual natural-source water abstracted for harvest transfer”; retain all following collection, quantity and normalization obligations: Conditional new direct natural withdrawal at this node only, with actual resource/catchment and quantity. Carrier water withdrawn earlier in rearing is a paired internal transfer, not another abstraction. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_water_farm_harvest`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_farm_harvest` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_water_substances` | `farm_harvest`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual harvest substances released to specific water medium”; retain all following collection, quantity and normalization obligations: Expand actual measured species from drainage or carrier-water release using sampling/flow records; do not invent ammonia, hydrogen sulfide or suspended solids from a qualitative hazard description. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_emissions_farm_harvest`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_farm_harvest` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_air_emissions` | `farm_harvest`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual harvest and on-farm vehicle combustion emissions”; retain all following collection, quantity and normalization obligations: Conditional actual fuel burning; expand substance/air compartment using engine-specific monitoring or documented factors, matching harvest_fuel and shared equipment attribution. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_emissions_farm_harvest`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_farm_harvest` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_fuel` | `live_conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Actual on-site live holding or cleaning fuel”; retain all following collection, quantity and normalization obligations: Conditional fuelled holding/cleaning heat or equipment: exact fuel mass, equipment and applicable calorific evidence; include matched actual combustion air emissions. Do not duplicate metered electric heat. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_energy_live_conditioning`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_energy_live_conditioning` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_feed` | `live_conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Actual feed during live conditioning”; retain all following collection, quantity and normalization obligations: Conditional feeding during the recorded holding interval; record actual product/live-food type, quantity and residues; fasting is an actual record, not a compulsory prescription. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_conditioning`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_conditioning` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_treatments` | `live_conditioning`; inputs; product | Identify and separately collect every actual exchange covered by “Actual conditioning and cleaning materials”; retain all following collection, quantity and normalization obligations: Conditional actual formulated treatment/disinfectant/water-adjustment material; record composition, use purpose, current relevant authorization and spent-material fate. No historical drug dose is a PCR default. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_materials_live_conditioning`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_materials_live_conditioning` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_withdrawal` | `live_conditioning`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual natural-source water abstracted for conditioning”; retain all following collection, quantity and normalization obligations: Conditional direct well/surface/marine withdrawal newly entering the conditioning circuit. Identify actual resource, source and quantity; include pumping/treatment without repeating internal returned water. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_water_live_conditioning`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_live_conditioning` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_live_sales` | `live_conditioning`; outputs; product | Identify and separately collect every actual exchange covered by “Actual other species or grades sold at declared handover”; retain all following collection, quantity and normalization obligations: Conditional independent sale: enumerate each species/grade/purpose, buyer, gate, quantity and price. Non-ornamental sale is a co-product requiring its own identity, not ornamental reference output. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_sales_live_conditioning`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_sales_live_conditioning` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_air_emissions` | `live_conditioning`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual live holding combustion or treatment emissions to air”; retain all following collection, quantity and normalization obligations: Conditional actual on-site fuel/treatment source: expand each monitored or evidenced modelled substance with stack/air medium, fossil/biogenic basis and applicable factor. Link to conditioning_fuel or actual treatment records. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_emissions_live_conditioning`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_live_conditioning` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_conditioning_water_substances` | `live_conditioning`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual conditioning substances released to specific water medium”; retain all following collection, quantity and normalization obligations: Expand each measured substance/species and actual fresh/marine receiving compartment; treatment residues need composition and fate, not an undifferentiated medicine emission. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_emissions_live_conditioning`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_live_conditioning` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_packing_materials` | `farm_dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual bags, boxes and reusable dispatch-container materials”; retain all following collection, quantity and normalization obligations: Conditional package components: expand actual polymer bag, insulation box, outer carton, ties/labels or tank materials by composition; record packaging handed over, on-farm rejects, reuse/loss and cleaning separately. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_dispatch`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_dispatch` Sources: `uf-ifas-shipping-fa120` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_packing_additives` | `farm_dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual live-shipping water additives”; retain all following collection, quantity and normalization obligations: Conditional actually used formulated material, with composition/current relevant authorization and final fate. A historical suggestion is not evidence of actual use. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_materials_farm_dispatch`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_materials_farm_dispatch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_packing_thermal_materials` | `farm_dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual dispatch cooling or heating pack materials”; retain all following collection, quantity and normalization obligations: Conditional actual gel/heat packs or other thermal material, composition, mass, reuse and production burden. Do not infer chilling ice or freeze live fish from another product category. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_dispatch`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_dispatch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_withdrawal` | `farm_dispatch`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual natural-source water abstracted for live dispatch”; retain all following collection, quantity and normalization obligations: Conditional new direct water withdrawal for packing/cleaning with actual source/resource and measured mass. Water carried from conditioning is logged as internal transfer and not freshly abstracted again. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_water_farm_dispatch`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_farm_dispatch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_packing_rejects` | `farm_dispatch`; outputs; waste | Identify and separately collect every actual exchange covered by “On-farm rejected dispatch packaging”; retain all following collection, quantity and normalization obligations: Actual damaged/rejected packaging sent to recorded recovery/disposal; packaging leaving with the fish is not on-farm waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_waste_farm_dispatch`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_waste_farm_dispatch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_water_substances` | `farm_dispatch`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual dispatch preparation substances released to specific water medium”; retain all following collection, quantity and normalization obligations: Expand actual measured composition from wash/overflow to concrete substances and receiving medium; unresolved composition is a data gap, never assumed zero. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured attributable kg from `cp_emissions_farm_dispatch`; apply collected-period attribution per 1 kg reference flow Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_farm_dispatch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Require managed farmed origin, ornamental live finfish purpose, species, grade and actual farm dispatch gate; reject wild-holding, food/non-fish or preserved output substitution. | un-cpc30-ornamental |
| `validate_reference` | farmed_ornamental_dispatch | Exactly one final output row links to the reference; 1 kg is net live biomass and count/grade/health qualifiers are present. No intermediary, breeder or water/package mass substitutes for the reference. | reference-definition |
| `validate_route` | managed_rearing | Require current site/circuit evidence for pond/tank/RAS, seed/breeder origin and biological/technology delta. Reject label-only alternatives, incompatible once-through/recirculating claims for the same circuit/time, or absent heating/treatment/solids evidence when actually used. | uf-ifas-ras-fa099 |
| `validate_transfer` | all fish rows | Match internal transfers and returns with lot/time/stage and measured quantities; cancel their aggregate exchanges. Reconcile stock with observed growth and all harvests, losses, returns and retained breeders. | |
| `validate_inventory` | all nodes | Require actual seed/feed upstream burdens, water/source and circuit records, power/fuel/heat, assets, treatment use and losses. Fuel rows require matching actual combustion substances and evidence; direct discharge requires water medium and monitored actual substance/speciation or an explicit data gap. | |
| `validate_mode_period` | all nodes | Verify cohort/continuous indexing, opening/closing and retained stock, breeding and asset phases, cleaning/changeover, replacement/termination and linked period shares; unresolved attribution blocks final dataset production. | |
| `validate_allocation` | all intended outputs and shared consumers | Enumerate all sold species/grades with actual handovers and method evidence. Confirm direct assignment then disclosed causal/economic residual, stock carrying and shared asset/meter shares; no duplicated burden or presumed co-product credit. | |
| `validate_identity` | all flow cards | Fixed UUIDs must match independently verified actual type, property/unit, stage/gate, geography/provider and destination. Final farm-gate UUID does not identify juveniles, breeders or preharvest stock; CN low-voltage identity cannot cover an unspecified power supply, and ambiguous oxygen is unresolved. | |
| `validate_evidence` | all ranges and treatments | Keep provisional estimates distinct from collected amounts and source evidence; zero conditional exchanges require actual absence records. Require relevant current treatment authorization when actual use calls for it; no historic dose/legal statement is endorsed. | |
| `validate_profile` | downstream dataset | Declare all required qualifiers, uncertainty, cut-offs, upstream/identity/monitoring gaps and matched gate/time. Technical checks alone do not verify a concrete exchange, actual farm balance or publication readiness. | |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset; secondary_dataset; background_dataset |
| downstream_use | Foreground farm-production package and its downstream process/lifecyclemodel projections for the declared species, grade, route, period and gate |
| allowed_use | Supply of live farmed ornamental finfish through the recorded farm dispatch, with compatible provider/geography/state and disclosed stock/asset attribution |
| excluded_use | Wild-held fish, food/stocking/bait products, ornamental non-fish, aquarium/retail display use, downstream distribution survival or processing, unsupported species/grade service equivalence, inferred regulatory compliance |
| required_metadata | All reference qualifiers; node/circuit/cohort ids; actual suppliers and receivers; dates/gate; output/stock sets; route deltas; allocation and carried-period/asset ledger; concrete exchange verification |
| required_quality_disclosure | Measurement/calibration and conversion uncertainty; representativeness; cut-offs; upstream gaps; unresolved identities/monitoring/speciation; allocation sensitivity; range evidence status |
| update_trigger | Changed species/grade, breeding/seed supplier, route or circuit, stock/survival, feed, water source/treatment, power/heat/provider, shared asset/replacement, reporting mode or actual handover gate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc30-ornamental | official_guidance | United Nations, CPC Version 3.0 Explanatory Notes, 30 June 2025, p.40: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retrieved 2026-10-09 | Farmed live ornamental finfish category and exclusion context; not process quantities |
| uf-ifas-harvest-fa117 | extension_guidance | UF/IFAS, Harvesting Ornamental Fish From Ponds, FA117: https://ask.ifas.ufl.edu/publication/FA117; retrieved 2026-10-09 | Qualitative harvest responsibility and partial/batch harvest context; no transferred default yields |
| uf-ifas-grading-fa118 | extension_guidance | UF/IFAS, Grading Ornamental Fish, FA118: https://ask.ifas.ufl.edu/publication/FA118; retrieved 2026-10-09 | Qualitative grade, sale/keeper/cull distinction |
| uf-ifas-onfarm-transport-fa119 | extension_guidance | UF/IFAS, On-Farm Transport of Ornamental Fish, FA119: https://ask.ifas.ufl.edu/publication/FA119; retrieved 2026-10-09 | Qualitative internal transfer water, containers and oxygen/transport responsibilities |
| uf-ifas-shipping-fa120 | extension_guidance | UF/IFAS, Preparation of Ornamental Fish for Shipping, FA120: https://ask.ifas.ufl.edu/publication/FA120; retrieved 2026-10-09 | Qualitative holding/packing and actual handover responsibilities only; no prescribed doses, current law or thermal performance factors |
| uf-ifas-ras-fa099 | extension_guidance | UF/IFAS, Fish Health Management Considerations in Recirculating Aquaculture Systems—Part 1, FA099: https://ask.ifas.ufl.edu/publication/FA099; retrieved 2026-10-09 | Qualitative breeding/grow-out/holding and water-reuse/filtration differences; actual site evidence determines concrete topology |
| reference-definition | method_factor | This PCR, sections 3, 4 and 8: declared 1 kg net live farm-dispatch reference | Reference quantity 1–1 kg and normalization definition, not a biological performance range |
| ghg-product-standard | standard | GHG Protocol, Product Life Cycle Accounting and Reporting Standard, chapter 9: https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-10-09 | Method policy for subdivision and causal allocation with economic fallback; no performance factors |
