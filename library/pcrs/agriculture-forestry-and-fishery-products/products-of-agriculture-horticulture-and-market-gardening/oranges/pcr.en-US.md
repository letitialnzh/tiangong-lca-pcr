---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.oranges
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Oranges

## 1. Scope and Applicability

This PCR covers fresh whole oranges produced in a managed citrus orchard from the declared establishment or crop-cycle starting condition through harvest and the declared farm-gate condition. The product may be sold loose or receive sorting, washing, or temporary farm-gate protection when those operations are included in the foreground record. Cultivar, rootstock, orchard age, production route, region, maturity, grade, and accepted-yield basis must be declared.

It excludes orange juice, concentrate, oils, dried or candied fruit, retail distribution, consumer use, and downstream processing. It also excludes transport after the declared farm gate unless transport is explicitly included as a separate foreground process.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.oranges |
| classification_refs | CPC 3.0:01323 |
| covered_products | Fresh whole oranges from managed citrus orchard production |
| excluded_products | Juice, concentrate, essential oil, dried or preserved oranges, retail or consumer-ready products, and post-farm-gate transport |
| representative_product | Fresh whole oranges accepted at the declared farm gate |
| production_route | Perennial citrus orchard establishment, cultivation, harvest, and optional farm-gate sorting or packing |
| market_state | Fresh, whole, accepted farm-gate oranges with declared maturity and grade |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh whole oranges accepted at farm gate |
| How much | 1 kg accepted oranges |
| How well | Actual cultivar or variety where known, rootstock or orchard route, maturity, grade, moisture condition, and accepted farm-gate quality |
| How long or cycle | One declared production year or crop cycle; orchard establishment and productive life are disclosed |
| reference_flow_link | `reference_flow_oranges_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fresh whole oranges at farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | orange cultivar or variety; rootstock where known; region; orchard age and production route; production-year or crop-cycle basis; maturity and grade; accepted yield; farm-gate condition; rejects and co-products; post-harvest destination |

The reference product identity requires foreground binding before publication. This does not change the semantic reference flow or the product boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and product-output normalization | Mass | kg | Normalize the inventory to 1 kg of accepted whole oranges at the declared farm gate. |
| `perennial_time_basis` | orchard establishment and productive cultivation | Area-time and accepted output | ha year; kg | Disclose productive life and allocate establishment, replacement, and non-bearing inputs over the declared productive period and accepted yield. |
| `nutrient_product_and_basis` | fertilizer and soil-amendment input | Product mass and nutrient basis | kg product; kg N, P2O5, or K2O | Record each actual product and its applied product mass; retain the product analysis and calculate nutrient mass without replacing product mass. |
| `water_measurement_basis` | irrigation and source withdrawal | Volume | m3 | Prefer meter or delivery records, distinguish irrigation applied from source withdrawal, and disclose the water-balance method when direct measurement is unavailable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed orchard land or the declared establishment event enters the production system; when establishment is excluded, the existing orchard is declared as the starting condition |
| starting_condition_role | Foreground perennial agricultural production start with orchard age, land history, and establishment allocation disclosed |
| product_classification_scope | CPC 3.0:01323 fresh whole oranges |
| recursive_input_rule | Record purchased or transferred same-category planting material only when it crosses the foreground boundary; self-propagated material requires origin and allocation disclosure rather than recursive substitution |
| upstream_dataset_requirement | Use upstream datasets for nursery material, fertilizer, soil amendments, crop protection, energy, packaging, and contracted services when they are not foreground operations |
| disclosure | Declare cultivar or variety, route, orchard age, establishment inclusion, productive life, crop-cycle or orchard-year basis, accepted yield, farm-gate condition, and rejected-fruit destination |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_condition` | all processes | Start at the declared orchard-establishment or production-year condition and include foreground inputs, resource use, emissions, harvest, and accepted farm-gate orange output; exclude retail, consumer use, and downstream processing. | `fao-good-agricultural-practices`, `codex-fresh-fruits-vegetables-cxc-53` |
| `boundary_perennial_disclosure` | establishment and cultivation | Declare orchard age, productive life, replacement or replanting, and whether establishment is included; do not combine annual and perennial time bases without an allocation calculation. | `fao-good-agricultural-practices` |
| `boundary_recursive_input` | planting material | Record the actual crossing point of purchased or transferred planting material; disclose self-propagation and parent-stock allocation when the material is produced within the foreground system. | `fao-good-agricultural-practices` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p01323_orchard_establishment` | Citrus orchard establishment and renewal | conditional | Include when planting, grafting, site preparation, replacement, or establishment inputs contribute to the declared production period. | establishment and perennial time-basis node | per established area allocated to accepted orchard-year output |
| `p01323_orchard_cultivation` | Orange orchard cultivation | required | Include field and orchard management during the declared production year or crop cycle. | managed biological production node | per orchard-year and 1 kg accepted oranges |
| `p01323_harvest_farm_gate` | Orange harvest and farm-gate handling | required | Include harvest, on-farm sorting or washing, temporary protection, and optional farm-gate packing when present. | harvest and delivery node | per harvested and accepted orange mass |

### Process: Citrus orchard establishment and renewal (`p01323_orchard_establishment`)

#### Inputs

##### Product flows

###### Planting or grafting material supplied (`orange_planting_material_input`)

Record nursery trees, rootstocks, grafts, or other planting material crossing into orchard establishment. Declare whether the material is purchased, transferred, or self-propagated and retain the count-to-mass or item-basis conversion used.

- Selected flow: Orange planting or grafting material for orchard establishment
- Flow property / unit: Mass or item count / kg or item
- Amount rule: measured number and type of plants by block and establishment year; calculate mass only when required by the selected dataset representation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per established area allocated to 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-good-agricultural-practices`

###### Agricultural nutrient and fertilizer inputs (`p01323_orchard_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established area allocated to 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-good-agricultural-practices`; `ipcc-2019-refinement-agriculture`

##### Waste flows

###### Establishment and renewal residues to declared destination (`orange_establishment_residue`)

Record removed vegetation, failed plants, rootstock residues, and renewal biomass leaving the establishment process. Retained mulch or compost must be identified as an internal destination rather than counted as exported waste.

- Selected flow: Citrus establishment biomass residue to declared destination
- Flow property / unit: Mass / kg as received or kg dry matter
- Amount rule: measured or calculated residue mass by block and event
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established area allocated to 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-good-agricultural-practices`

##### Elementary flows

###### Orchard land occupation during establishment (`orange_establishment_land_occupation`)

Record the area and duration occupied while the orchard is established, including non-bearing years when they are part of the declared system boundary.

- Selected flow: Land occupation for citrus orchard production
- Flow property / unit: Area-time / m2*a or ha year
- Amount rule: orchard area multiplied by disclosed occupation duration and allocated over accepted orange output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established area allocated to 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-good-agricultural-practices`

#### Outputs

##### Product flows

###### Established orchard capacity transferred to cultivation (`orange_established_orchard_capacity`)

Record this internal hand-off only when establishment is modelled as a separate process. It is not saleable orange product and must not be counted as a second product output.

- Selected flow: Established citrus orchard production capacity
- Flow property / unit: Area or production capacity / ha or orchard-year
- Amount rule: documented establishment completion and productive-period allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: linked to declared orchard-year accepted orange output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-good-agricultural-practices`

##### Waste flows

##### Elementary flows

### Process: Orange orchard cultivation (`p01323_orchard_cultivation`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`p01323_orchard_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-good-agricultural-practices`; `ipcc-2019-refinement-agriculture`

###### Irrigation water applied (`orange_irrigation_water_input`)

Record irrigation delivered to the orchard and distinguish it from source withdrawal and rainfall. State the measurement or water-balance method.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: meter, delivery record, or documented water balance for the orchard block
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-good-agricultural-practices`

###### Mobile machinery fuel and field energy (`orange_cultivation_energy_input`)

Record fuel or mobile machinery energy used for orchard operations, including mowing, spraying, pruning, and field transport when crossing the foreground boundary.

- Selected flow: Mobile agricultural machinery fuel or energy supply
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: fuel issue records, machine-hour records with documented fuel factor, or contractor invoice allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-good-agricultural-practices`

###### Crop-protection formulation applied (`orange_crop_protection_input`)

Record the actual formulated crop-protection products applied, including product name, active ingredient, rate, treated area, and application event.

- Selected flow: Orange orchard crop-protection formulation
- Flow property / unit: Product mass / kg product
- Amount rule: product invoice, spray log, or contractor record reconciled to treated area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per orchard-year and 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-good-agricultural-practices`

##### Waste flows

###### Pruning and orchard residues to declared destination (`orange_pruning_residue`)

Record prunings, removed branches, and other orchard residues leaving the foreground system. State whether they are mulched, burned, composted, treated, or removed.

- Selected flow: Citrus orchard residue to declared destination
- Flow property / unit: Mass / kg as received or kg dry matter
- Amount rule: weighed residue, volume-to-mass conversion, or documented fraction of pruning records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-good-agricultural-practices`

##### Elementary flows

###### Orchard land occupation during productive year (`orange_cultivation_land_occupation`)

Record occupied orchard area and the productive-year duration used for normalization.

- Selected flow: Land occupation for citrus orchard production
- Flow property / unit: Area-time / m2*a or ha year
- Amount rule: mapped orchard area multiplied by productive-year duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-good-agricultural-practices`

#### Outputs

##### Elementary flows

###### Direct nitrous oxide emissions from managed orchard soil (`orange_soil_n2o_emission`)

Record direct managed-soil emissions calculated from applied nitrogen and the declared emission method; retain the applied nutrient basis separately.

- Selected flow: Nitrous oxide emission to air from managed orchard soil
- Flow property / unit: Mass / kg N2O or kg N2O-N
- Amount rule: calculate from collected nitrogen input and the declared emissions method, or use site measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `ipcc-2019-refinement-agriculture`

###### Nitrogen runoff or leaching from orchard soil (`orange_nitrogen_water_emission`)

Record reported nitrate or other nitrogen losses to the receiving water or soil compartment when the data package calculates them from a nutrient and water balance.

- Selected flow: Reported nitrogen emission from managed orchard soil to the declared receiving compartment
- Flow property / unit: Mass of reported nitrogen species / kg substance or kg N
- Amount rule: site measurement or method calculation from collected nutrient and water-balance records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per orchard-year and 1 kg accepted oranges
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `ipcc-2019-refinement-agriculture`

### Process: Orange harvest and farm-gate handling (`p01323_harvest_farm_gate`)

#### Inputs

##### Product flows

###### Harvest energy and field transport service (`orange_harvest_energy_input`)

Record harvest machinery fuel, electricity, or contracted harvest energy crossing the foreground boundary. Separate post-farm-gate transport from this card.

- Selected flow: Harvest energy supply or mobile machinery fuel
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: harvest log, fuel issue record, machine-hour factor, or contractor allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested and accepted orange mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_harvest_records`
- Sources: `fao-good-agricultural-practices`

###### Farm-gate packaging function (`orange_packaging_input`)

Record crates, cartons, pallets, or other packaging only when it crosses the declared farm-gate handling boundary. State reuse, return, and loss assumptions.

- Selected flow: Farm-gate packaging function
- Flow property / unit: Mass or packaging unit / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: packaging issue records divided by accepted orange output, with reuse cycles documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per harvested and accepted orange mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_harvest_records`
- Sources: `codex-fresh-fruits-vegetables-cxc-53`

##### Waste flows

###### Harvest rejects and fruit losses to declared destination (`orange_harvest_rejects`)

Record oranges rejected during harvest, sorting, washing, or farm-gate inspection and identify whether they are sold into another product route, fed, composted, treated, or discarded.

- Selected flow: Rejected or lost oranges to declared destination
- Flow property / unit: Mass / kg
- Amount rule: weigh rejects or calculate from harvested, accepted, and destination quantities
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested and accepted orange mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_harvest_records`
- Sources: `codex-fresh-fruits-vegetables-cxc-53`

##### Product flows

###### Accepted fresh oranges at farm gate (`orange_farm_gate_product`)

Record the accepted whole-orange output that meets the declared farm-gate maturity, grade, and quality qualifiers. This is the sole reference product output.

- Selected flow: Fresh whole oranges at farm gate
- Flow property / unit: Mass / kg
- Amount rule: weigh accepted output after harvest and any included farm-gate handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted oranges at farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_harvest_records`
- Sources: `fao-good-agricultural-practices`, `codex-fresh-fruits-vegetables-cxc-53`

#### Outputs

##### Elementary flows

###### Farm-gate handling emissions (`orange_farm_gate_emissions`)

Record direct emissions from optional washing, handling, or on-farm combustion only when those activities are inside the declared boundary; retain the receiving medium and pollutant identity.

- Selected flow: Farm-gate handling emission to the declared receiving compartment
- Flow property / unit: Mass of reported substance / kg substance
- Amount rule: site measurement or method calculation from the handling activity record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested and accepted orange mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_harvest_records`
- Sources: `fao-good-agricultural-practices`, `ipcc-2019-refinement-agriculture`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_output` | orchard cultivation and harvest | Normalize all inputs and emissions to accepted orange output. Report harvested but rejected fruit separately and do not silently include it in the reference product. | `codex-fresh-fruits-vegetables-cxc-53` |
| `allocation_establishment_over_life` | orchard establishment and renewal | Allocate establishment and renewal burdens over the disclosed productive life and accepted yield; disclose the allocation period and replacement events. | `fao-good-agricultural-practices` |
| `allocation_co_products` | rejected fruit and secondary routes | If rejected fruit or another co-product has a separately documented market route, apply a documented physical or economic allocation rule and report the chosen basis; otherwise assign the declared destination treatment without claiming a second reference product. | `fao-good-agricultural-practices` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_01323_establishment_records` | `p01323_orchard_establishment` | planting, nutrients, residues, land, orchard capacity | nursery records, planting logs, block maps, renewal records | block; cultivar; rootstock; plant count; product; product mass; nutrient analysis; area; year; residue destination | reconcile invoices, field logs, maps, and measured or documented conversions | kg, item, kg nutrient, ha year | each establishment or renewal event | full establishment and disclosed allocation period | orchard block | aggregate by block and allocate over productive life and accepted output | signed logs, invoices, maps, product analyses |
| `cp_01323_cultivation_records` | `p01323_orchard_cultivation` | nutrients, irrigation, fuel, crop protection, residues, emissions | input invoices, spray logs, meter records, machine records, soil or water balance | block; date; product; quantity; nutrient basis; irrigation volume; fuel; machine hours; treated area; residue mass; emission method | monthly or event-level reconciliation to block area and orchard-year output | kg product, kg nutrient, m3, MJ, kg residue | each event, aggregated monthly | one production year or declared crop cycle | orchard block and site | sum events, preserve product and nutrient bases, normalize to accepted output | meter checks, invoices, spray records, factor documentation, mass balance |
| `cp_01323_harvest_records` | `p01323_harvest_farm_gate` | harvest energy, packaging, rejects, emissions, accepted product | harvest tickets, weighbridge records, packing records, destination records | date; block; harvested mass; accepted mass; reject mass; destination; fuel or energy; package type; package mass; reuse cycles | reconcile harvest and destination masses to farm-gate product totals | kg, MJ, kg packaging, item | each harvest lot | full harvest season and declared farm-gate period | orchard and handling point | aggregate lots and preserve separate accepted, rejected, and co-product routes | calibrated scales, lot tickets, package issue records, destination receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_output_normalization` | all quantitative rows | Divide the annual or crop-cycle inventory amount by accepted whole-orange mass at farm gate and report per 1 kg accepted output. | accepted mass; row amount | normalized row value | `mass-balance-identity` |
| `calc_establishment_allocation` | establishment rows | Allocate establishment and renewal amount by declared productive-life years and accepted yield, preserving the disclosed allocation period. | establishment amount; productive life; accepted yield | allocated orchard-year amount | `fao-good-agricultural-practices` |
| `calc_nutrient_basis` | nutrient input rows | Retain product mass and calculate nutrient mass from product analysis and applied product quantity; do not replace the product input with nutrient mass. | product quantity; product analysis | product mass and nutrient mass | `ipcc-2019-refinement-agriculture` |
| `calc_reject_mass_balance` | harvest rejects and product output | Check harvested mass against accepted output, rejects, co-products, and recorded stock change; explain any evidence gap difference. | harvested; accepted; reject; co-product; stock change | reconciled mass balance | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | product, route, and inputs | Identify cultivar or variety where known, orchard route, farm-gate condition, input products, and reject destinations. | product description, invoices, lot records |
| `quality_measurement` | mass, water, energy, and area-time rows | Use calibrated scales or meters where available; document conversions, factors, and uncertainty when direct measurement is unavailable. | calibration record, meter log, factor note |
| `quality_temporal` | all processes | Cover the complete declared production year or crop cycle and disclose missing events, exceptional weather, replanting, or off-season operations. | annual production log and gap note |
| `quality_completeness` | inventory and emissions | Reconcile purchased inputs, field records, harvest mass, accepted product, rejects, co-products, and destinations before normalization. | input reconciliation and mass balance |
| `quality_disclosure` | dataset metadata | State the starting condition, orchard age, productive-life allocation, region, yield basis, farm-gate boundary, and identity evidence gaps. | dataset metadata and process notes |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | reference flow | Reject a data package that omits cultivar or variety where known, route, orchard age or production-year basis, maturity, grade, farm-gate condition, accepted yield, or reject destination. | `codex-fresh-fruits-vegetables-cxc-53` |
| `validation_mass_balance` | harvest and farm-gate handling | Check harvested mass against accepted product, rejects, co-products, stock change, and documented measurement uncertainty; investigate unexplained imbalance. | `mass-balance-identity` |
| `validation_nutrient_and_water_basis` | cultivation | Confirm fertilizer product mass versus nutrient mass, irrigation applied versus source withdrawal, and the associated measurement or calculation method. | `ipcc-2019-refinement-agriculture`, `fao-good-agricultural-practices` |
| `validation_perennial_allocation` | establishment and cultivation | Confirm productive-life allocation and prevent double counting of establishment, renewal, or orchard capacity across production years. | `fao-good-agricultural-practices` |
| `validation_identity_evidence` | reference and unmapped flows | Preserve identity evidence gaps as explicit foreground-resolution requirements; do not substitute a nearby citrus or product flow merely to populate a UUID. | `tidas-flow-identity-policy` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset when the completed package passes its stated quality checks |
| downstream_use | Foreground orange-orchard process datasets, farm-gate orange supply-chain models, and lifecycle models using fresh whole oranges as an input |
| allowed_use | Regional or site-specific modelling when cultivar, route, time basis, yield, farm-gate condition, allocation, and data quality disclosure are retained |
| excluded_use | Juice, concentrate, oil, dried fruit, retail distribution, consumer use, and routes whose product identity or boundary is not disclosed |
| required_metadata | cultivar or variety; rootstock where known; region; orchard age; establishment inclusion; productive life; production-year or crop-cycle basis; accepted yield; maturity; grade; farm-gate condition; reject destinationss |
| required_quality_disclosure | temporal coverage, site scope, measurement and conversion method, nutrient and water basis, mass-balance result, allocation rule, and missing-data treatment |
| update_trigger | new orchard route, cultivar or market state; revised productive-life or yield evidence; changed Flow Set taxonomy; resolved reference identity; or material change in boundary or allocation method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO good agricultural practices guidance | orchard management, records, and farm-gate production data |
| `codex-fresh-fruits-vegetables-cxc-53` | official_guidance | Codex guidance for fresh fruits and vegetables | product quality, handling, and farm-gate quality descriptors |
| `ipcc-2019-refinement-agriculture` | method_factor | IPCC 2019 Refinement, Volume 4 agriculture methods | managed-soil and nutrient-related emission calculations |
| `mass-balance-identity` | method_factor | conservation-of-mass method identity | harvest, reject, co-product, and accepted-output reconciliation |
| `tidas-flow-identity-policy` | official_guidance | repository flow-identity policy | semantic preservation and explicit coverage finding |
