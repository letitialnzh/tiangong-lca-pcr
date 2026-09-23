---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.figs
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Figs

## 1. Scope and Applicability

This PCR applies to fresh, unprocessed figs (*Ficus carica* L.) produced in a perennial orchard and transferred at the farm gate. The declared product is whole fruit in the harvested market state, without drying, cooking, freezing, juicing, canning, or other transformation. The scope covers orchard establishment or renewal when it contributes to the reporting period, annual orchard management, harvest, and the farm-gate handover of saleable fresh figs.

The farm-gate boundary ends when the harvested fresh figs are available for transfer at the producing farm. Washing, grading, packing for downstream distribution, on-farm drying, storage after handover, and transport beyond the farm gate are outside this PCR unless a study explicitly extends the boundary. Harvest containers that are required to present or transfer the product at the declared gate are included as conditional foreground inputs; their downstream transport and packaging disposal are not.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.figs` |
| classification_refs | CPC 3.0 / 01315 / Figs |
| covered_products | Fresh whole figs of *Ficus carica* L., including common, Smyrna, San Pedro, and other cultivated fig varieties when sold fresh at the farm gate |
| excluded_products | Dried or partially dried figs; frozen, canned, cooked, fermented, juiced, pureed, or otherwise processed figs; nursery stock; leaves, wood, caprifigs, and products transferred after downstream packing, storage, or transport |
| representative_product | Fresh ripe figs, whole, unwashed and unprocessed, at farm gate |
| production_route | Perennial orchard establishment or renewal; orchard management; optional irrigation, nutrient and plant-protection applications; hand or mechanized harvest; farm-gate aggregation |
| market_state | Fresh, unprocessed, whole fruit at farm gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh, unprocessed whole figs transferred at the producing farm gate |
| How much | 1 kg saleable fresh figs at farm gate |
| How well | Fruit meets the declared fresh market specification and is intact, sound, clean, fresh in appearance, and free from abnormal external moisture, foreign smell, or taste; the dataset must disclose any local quality class or buyer specification |
| How long or cycle | One reporting year or complete harvest season, including all crops harvested from the declared orchard blocks during that period |
| reference_flow_link | `fresh_figs_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Figs `f80297fb-fa6f-46e4-8da8-49f2fdcdab34` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; variety or cultivar; fresh market state; production geography; orchard age and productive status; reporting year or harvest season; irrigation status; yield basis; farm-gate condition |

When constructing a foreground data package, the required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data package field. A fresh-fig product UUID is resolved during foreground data generation; this candidate does not assign a fixed UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | reference product and saleable output | Mass | kg | Report the reference flow and saleable fresh-fig output on an as-transferred farm-gate mass basis. Do not substitute dry mass, edible portion, or processed-product mass. |
| `measurement_area_time` | orchard land occupation | Area-time | m2*a or ha*a | Report occupied orchard area and occupation time for the reporting period. Annualize establishment or renewal inputs over the documented productive service life before normalization to the reference flow. |
| `measurement_nutrient_basis` | fertilizer and soil-amendment total | Mass | kg product and kg nutrient | Record the actual product or amendment mass and, where available, nutrient basis separately for N, P2O5, K2O, and organic matter. Do not infer a fertilizer identity from a nutrient total. |
| `measurement_water_basis` | irrigation water | Volume or mass | m3 or kg | Report metered or calculated irrigation water delivered to the orchard block. Disclose whether the record is gross delivery, net crop use, or a modelled soil-water balance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The reporting period starts with the declared orchard blocks, their existing productive trees, and the site condition recorded at the beginning of the period. New planting or replanting is included only when it occurs in the declared orchard blocks and contributes to the product system. |
| starting_condition_role | Existing perennial orchard capital is represented through annualized establishment or renewal records when available; pre-existing land occupation remains an annual foreground resource record. |
| product_classification_scope | CPC 01315 / fresh, unprocessed figs; classification is a mapping reference and does not expand the product boundary to dried or processed fig products. |
| recursive_input_rule | Fresh figs of the same product category are not used as a production input. If a same-category product flow is introduced by a special scenario, record it as an upstream product dataset and disclose the recursion break rather than treating it as a new foreground crop. |
| upstream_dataset_requirement | Inputs such as nursery stock, fertilizer or soil amendments, plant-protection products, fuel, electricity, irrigation water, and harvest containers require an upstream dataset or a declared site-specific identity before final process publication. |
| disclosure | Declare orchard blocks, cultivated area, tree age or establishment year, variety, production geography, irrigation regime, nutrient and plant-protection applications, harvest season, saleable yield, culls, and the exact point at which the product is transferred at the farm gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_farm_orchard` | foreground system boundary | Include orchard establishment or renewal, land occupation, orchard management, harvest, and all direct inputs and emissions needed to produce fresh figs up to the declared farm-gate transfer. | `iso-14044-2006`; `fao-good-agricultural-practices-figs-2008` |
| `boundary_annualize_perennial_assets` | perennial orchard establishment | Annualize planting or renewal inputs over a documented productive service life when the activity supports multiple reporting years; retain the unannualized record for auditability. | `iso-14044-2006`; `fao-good-agricultural-practices-figs-2008` |
| `boundary_exclude_downstream_fresh_handling` | downstream handling | Exclude downstream washing, grading, packing, storage, transport, drying, and processing after the declared farm-gate transfer. | `unece-ffv-17-fresh-figs-2017`; `iso-14067-2018` |
| `boundary_disclose_starting_condition` | dataset disclosure | Declare the starting orchard condition, productive status, reporting period, and any new planting or replanting so that perennial stock and land occupation are not hidden. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment_and_renewal` | Orchard establishment and renewal | conditional | Include when new orchard blocks, replanting, tree replacement, or establishment inputs occur in the reporting period; otherwise retain the declared zero-activity condition. | Annualized perennial production asset | per 1 kg fresh figs at farm gate |
| `orchard_management` | Orchard management | required | Include orchard land occupation, irrigation, nutrient and soil-amendment application, plant protection, machinery or fuel use, and associated field emissions for all producing blocks. | Crop production | per 1 kg fresh figs at farm gate |
| `harvest_and_farm_gate` | Harvest and farm-gate handover | required | Include harvest, in-field collection, cull accounting, and any container required to transfer the unprocessed fresh product at the declared farm gate. | Product output and gate transfer | per 1 kg saleable fresh figs at farm gate |

### Process: Orchard establishment and renewal (`orchard_establishment_and_renewal`)

#### Inputs

##### Product flows

###### Planting stock for new or renewed orchard blocks (`planting_stock`)

Planting stock is recorded only when trees are planted, replaced, or the orchard is renewed during the reporting period. Existing trees are not recreated as a recurring annual input.

- Selected flow: Fig nursery tree or other documented planting stock
- Flow property / unit: Mass or item count / kg or item
- Amount rule: Actual planting-stock quantity, annualized over the documented productive service life when it supports more than one reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_establishment`
- Sources:

##### Waste flows

##### Elementary flows

###### Annualized orchard land occupation (`orchard_land_occupation`)

The producing orchard area is an elementary resource input for the period in which it is occupied by fig trees and used to produce the reference product.

- Selected flow: Land occupation for perennial orchard
- Flow property / unit: Area-time / m2*a or ha*a
- Amount rule: Declared occupied orchard area multiplied by reporting-period occupation time; annualized establishment area is added when applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_establishment`
- Sources: `iso-14044-2006`; `fao-good-agricultural-practices-figs-2008`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Orchard management (`orchard_management`)

#### Inputs

##### Product flows

###### Irrigation water delivered to fig orchard blocks (`irrigation_water`)

Irrigation water is recorded when supplemental or full irrigation is delivered to the producing orchard blocks. Rainfall is not recorded as a product input; water withdrawal may be disclosed separately when required by the study.

- Selected flow: Irrigation water supplied to orchard
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered delivered irrigation water; when metering is unavailable, calculate from a documented soil-water balance, irrigation schedule, or flow-rate and duration record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56-1998`; `fao-good-agricultural-practices-figs-2008`

###### Agricultural nutrient and fertilizer inputs (`orchard_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_amendment_records`
- Sources: `fao-good-agricultural-practices-figs-2008`; `ipcc-2019-managed-soils-n2o`

###### Crop-protection products applied to orchard blocks (`crop_protection_products`)

Record approved insecticides, fungicides, herbicides, acaricides, nematicides, or other plant-protection products when applied to the producing orchard blocks. Omit the row only when the farm records confirm no application during the reporting period.

- Selected flow: Crop-protection product, actual formulation recorded by the farm
- Flow property / unit: Mass / kg product or L product
- Amount rule: Actual formulation mass or volume per orchard block and application event, with active ingredient and concentration when available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-good-agricultural-practices-figs-2008`

###### Mobile machinery fuel for orchard operations (`mobile_machinery_fuel`)

Record fuel or equivalent mobile machinery energy used for tillage, mowing, pruning, nutrient application, plant protection, irrigation support, or other in-boundary orchard operations.

- Selected flow: Mobile machinery fuel or fuel service
- Flow property / unit: Mass, volume, or energy / kg, L, or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Fuel issued to orchard machinery or calculated from equipment, operating time, and documented fuel rate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machinery_fuel_records`
- Sources: `fao-good-agricultural-practices-figs-2008`

##### Waste flows

###### Pruning and plant residues removed from orchard blocks (`pruning_and_plant_residues_removed`)

Record pruning wood, leaves, caprifigs, or other plant residues removed from the orchard boundary. Residues retained in the orchard are described in the dataset notes and are not recorded as exported waste.

- Selected flow: Orchard pruning and plant residue waste
- Flow property / unit: Mass / kg wet or dry residue, with moisture basis disclosed
- Amount rule: Weighed or estimated residue removed from each orchard block and sent to the declared treatment or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `fao-good-agricultural-practices-figs-2008`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Ammonia volatilization from managed orchard soils (`ammonia_emission`)

Include ammonia emitted from nutrient applications or other managed-soil sources when the selected calculation method requires it and the relevant activity data are present.

- Selected flow: Ammonia emission to air from managed orchard soil
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate from declared nitrogen inputs and the selected documented emission-factor or Tier method; do not report a default amount when no nitrogen activity record exists
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soil_emission_calculation`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Direct nitrous oxide from managed orchard soils (`direct_nitrous_oxide_emission`)

Include direct soil N2O from human-induced nitrogen additions or other managed-soil sources covered by the selected IPCC-compatible method.

- Selected flow: Direct nitrous oxide emission to air from managed orchard soil
- Flow property / unit: Mass / kg N2O-N or kg N2O, with conversion basis disclosed
- Amount rule: Apply the selected documented method to synthetic and organic nutrient inputs, crop-residue nitrogen, and other included N sources; disclose the tier and factors used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soil_emission_calculation`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Nitrate leaching or runoff from managed orchard soils (`nitrate_leaching`)

Include nitrate lost through leaching or runoff when the selected method and site evidence indicate that this pathway is relevant.

- Selected flow: Nitrate emission to water from managed orchard soil
- Flow property / unit: Mass / kg NO3-N or kg NO3, with conversion basis disclosed
- Amount rule: Calculate from nitrogen input records and the selected documented leaching or runoff method; disclose if the pathway is not modelled because site evidence shows it is not applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_soil_emission_calculation`
- Sources: `ipcc-2019-managed-soils-n2o`

### Process: Harvest and farm-gate handover (`harvest_and_farm_gate`)

#### Inputs

##### Product flows

###### Harvest containers required for farm-gate transfer (`harvest_containers_or_tools`)

Record containers or crates that cross the declared farm-gate process as part of handing over fresh figs. Reusable containers are recorded with the allocated use or service life; tools that remain farm capital are disclosed but not counted as a consumable flow unless the study requires capital goods.

- Selected flow: Crate, pallet, or reusable container used for fresh-fig farm-gate transfer
- Flow property / unit: Mass or item count / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Actual container units and mass, adjusted for documented reuse cycles and loss rate, only when the container is required at the declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg fresh figs at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_container_records`
- Sources: `unece-ffv-17-fresh-figs-2017`

##### Waste flows

###### Harvest culls and field loss (`harvest_culls_and_field_loss`)

Record fruit rejected before farm-gate transfer because of damage, over-ripeness, disease, or other documented quality reasons. Product that is sold as fresh figs remains in the reference output; culls are not co-products unless a separate market is documented.

- Selected flow: Fresh-fig harvest cull or field-loss waste
- Flow property / unit: Mass / kg fresh fruit
- Amount rule: Weigh or calculate harvested fruit rejected before farm-gate transfer, with the disposition route and moisture basis disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg saleable fresh figs at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_yield_and_culls`
- Sources: `unece-ffv-17-fresh-figs-2017`; `iso-14044-2006`

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable fresh figs transferred at farm gate (`fresh_figs_farm_gate`)

This is the reference product output: whole, fresh, unprocessed figs transferred at the producing farm gate in the declared market state.

- Selected flow: Fresh figs, whole, at farm gate
- Flow property / unit: Mass / kg
- Amount rule: Weighed saleable fresh figs transferred at the gate; reconcile to harvest records and declared culls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Reference flow of 1 kg saleable fresh figs at farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_yield_and_culls`
- Sources: `unece-ffv-17-fresh-figs-2017`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_unnecessary` | orchard and harvest processes | Do not allocate burdens when the process can be subdivided into separately measured orchard blocks, operations, or product outputs without material loss of information. | `iso-14044-2006` |
| `allocation_same_category_outputs` | multiple fresh-fig outputs | Treat fresh figs from different varieties, harvest windows, or market classes as the same reference-product category unless the dataset declares a distinct product specification; aggregate their measured burdens before normalization. | `unece-ffv-17-fresh-figs-2017`; `iso-14044-2006` |
| `allocation_marketed_coproducts` | documented co-products | If a separate marketable co-product shares orchard or harvest operations, first subdivide where possible; otherwise allocate remaining shared burdens by economic value using reporting-period quantities and farm-gate prices, and disclose the allocation sensitivity. | `iso-14044-2006` |
| `allocation_culls_not_coproducts` | culls and field loss | Treat unmarketed culls, field loss, and residues without a documented market as waste or retained field material, not as co-products receiving an avoided burden. | `iso-14044-2006`; `unece-ffv-17-fresh-figs-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment` | `orchard_establishment_and_renewal` | planting_stock; orchard_land_occupation | orchard register and site map | block_id; area; tree_count; planting_year; renewal_area; planting_stock; productive_life; land tenure | farm register, map, invoices, and field verification | ha; item; year | annual and event-based | reporting year plus documented productive service life | each declared orchard block | annualize each block's establishment or renewal record, then sum blocks | signed register, map, invoice, and agronomist or farm-manager review |
| `cp_irrigation_records` | `orchard_management` | irrigation_water | irrigation log or meter record | block_id; date; source; delivery volume; meter reading; irrigation method; rainfall note | meter readout, pump log, or documented water-balance calculation | m3 or kg | event-based, aggregated monthly | complete harvest season and reporting year | each irrigated orchard block | sum delivered water by block and reporting period; retain gross/net basis | meter calibration or flow-rate evidence and operator sign-off |
| `cp_nutrient_amendment_records` | `orchard_management` | fertilizer_soil_amendment | input invoice and application log | product_name; supplier; product_mass; N; P2O5; K2O; organic_matter; date; block_id; application_method | invoice, label or certificate, and application record | kg product; kg nutrient | event-based | reporting year | each applied orchard block | sum actual products and separately sum declared nutrient bases | invoice, product label, soil or plant analysis, and application log |
| `cp_crop_protection_records` | `orchard_management` | crop_protection_products | plant-protection log | product_name; formulation; active_ingredient; dose; volume or mass; date; block_id; target | farm spray log, invoice, and product label | kg or L product | event-based | reporting year | each treated orchard block | sum by formulation and application event; retain active-ingredient detail | approved-use record, invoice, label, and operator sign-off |
| `cp_machinery_fuel_records` | `orchard_management` | mobile_machinery_fuel | fuel issue record or machinery log | equipment_id; fuel_type; volume or mass; operating_hours; operation; date; block_id | fuel ledger, tank meter, supplier invoice, or equipment record | L, kg, or MJ | event-based and monthly | reporting year | orchard operations within boundary | assign fuel to orchard blocks by direct issue or documented activity share | invoice or meter record and equipment log |
| `cp_residue_records` | `orchard_management` | pruning_and_plant_residues_removed | residue log | block_id; residue_type; mass; moisture_basis; removal_date; treatment_route | weigh ticket, contractor record, or documented estimate | kg wet or dry | event-based | reporting year | declared orchard blocks | sum only residues removed from the boundary; disclose retained residues separately | weigh ticket, contractor record, or field estimate with method |
| `cp_soil_emission_calculation` | `orchard_management` | ammonia_emission; direct_nitrous_oxide_emission; nitrate_leaching | method worksheet | N inputs; residue N; soil and climate variables where required; method tier; factors; pathway assumptions | calculation using documented method and site records | kg NH3; kg N2O-N or N2O; kg NO3-N or NO3 | annual calculation | reporting year | each relevant orchard block or documented regional factor | calculate each pathway from the same declared activity data and retain pathway separation | signed worksheet, factor citation, and independent calculation check |
| `cp_harvest_container_records` | `harvest_and_farm_gate` | harvest_containers_or_tools | container inventory | container_type; units; mass; reuse_cycles; loss_rate; gate_use; season | inventory and purchase/repair records | item or kg | seasonal | harvest season | harvest and gate-transfer operations | allocate reusable container burden to the documented use cycles and product throughput | inventory count, purchase record, and reuse declaration |
| `cp_harvest_yield_and_culls` | `harvest_and_farm_gate` | fresh_figs_farm_gate; harvest_culls_and_field_loss | harvest and dispatch record | block_id; harvest_date; gross harvest; saleable mass; cull mass; loss reason; gate date; product qualifiers | weighed harvest and dispatch records reconciled to sales or transfer notes | kg fresh fruit | event-based and seasonal | complete harvest season | each declared orchard block and gate transfer | sum saleable output and culls; reconcile gross harvest to all documented destinations | scale record, dispatch note, buyer or receiving record, and reconciliation check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_annualized_orchard_establishment` | `planting_stock`; `orchard_land_occupation` | Annualized amount = documented establishment or renewal amount / documented productive service life in years; apply separately by orchard block and reporting year. | block establishment record; renewal record; productive service life | annualized planting-stock amount and orchard occupation | `iso-14044-2006`; `fao-good-agricultural-practices-figs-2008` |
| `calc_irrigation_from_water_balance` | `irrigation_water` | Use delivered meter records where available. Otherwise calculate irrigation delivery from documented flow rate × operating time, or from a documented soil-water balance using local climate, soil, crop, and management data; disclose the basis selected. | meter records; flow rate; operating time; soil-water balance; weather and crop data | irrigation water per reference flow | `fao-crop-evapotranspiration-56-1998` |
| `calc_nutrient_basis` | `fertilizer_soil_amendment` | For each actual product, retain product mass and declared nutrient basis. Sum nutrient inputs by element or nutrient form without back-calculating an unrecorded formulation. | product mass; label or certificate; N; P2O5; K2O; organic matter | product mass and nutrient totals | `fao-good-agricultural-practices-figs-2008`; `ipcc-2019-managed-soils-n2o` |
| `calc_managed_soil_emissions` | `ammonia_emission`; `direct_nitrous_oxide_emission`; `nitrate_leaching` | Apply the selected documented tier or emission-factor method to the declared nitrogen activity data. Keep direct, volatilization, and leaching/runoff pathways separate and report the conversion basis. | nutrient N; residue N; soil and climate data where required; selected factors; pathway assumptions | pathway-specific elementary flows | `ipcc-2019-managed-soils-n2o` |
| `calc_harvest_output_and_culls` | `fresh_figs_farm_gate`; `harvest_culls_and_field_loss` | Gross harvested mass = saleable farm-gate mass + culls + documented field loss or other destinations. Normalize all inputs and outputs to 1 kg saleable fresh figs at farm gate. | gross harvest; saleable mass; cull mass; field-loss estimate; destination records | saleable output and cull/waste amounts | `unece-ffv-17-fresh-figs-2017`; `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all product and input rows | Declare species, variety or cultivar, farm geography, market state, and the identity or evidence gap status of every flow used in the foreground package. | farm product specification, input label, and identity-resolution record |
| `dq_activity_records` | all collected activity rows | Prefer measured records, invoices, meters, weigh tickets, or supplier records; retain the original record reference and explain every estimate or missing value. | primary farm records and documented estimation method |
| `dq_temporal_completeness` | all processes | Cover the complete reporting year or harvest season and disclose atypical weather, crop failure, replanting, or missing months. | seasonal production summary and exception log |
| `dq_spatial_representativeness` | orchard and field emissions | Separate orchard blocks when management, soil, irrigation, or yield differs materially; do not mix unrelated farms without a documented aggregation rule. | block register, map, soil or climate record, and aggregation note |
| `dq_mass_reconciliation` | harvest and farm gate | Reconcile gross harvest, saleable output, culls, and other destinations within the precision of the weighing and estimation methods. | scale records, dispatch notes, and reconciliation worksheet |
| `dq_disclosure` | published foreground dataset | Disclose boundary, starting orchard condition, allocation, flow binding status, source methods, missing data, and all site-specific assumptions. | completed dataset metadata and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference flow | Reject a final dataset unless the reference amount is 1 kg fresh figs at farm gate, all required qualifiers are present, and the evidence gap product identity has been resolved to a verified foreground flow. | `unece-ffv-17-fresh-figs-2017`; `iso-14044-2006` |
| `validation_boundary_start` | system boundary | Check that the dataset declares orchard starting condition, productive status, reporting period, and the inclusion or exclusion of establishment and renewal activities. | `iso-14044-2006` |
| `validation_input_basis` | nutrient, water, fuel, plant protection, and container rows | Check that each included input has a site record, stated unit and property, normalization basis, collection protocol, and identity status; nutrient cards must retain actual product and nutrient basis. | `fao-good-agricultural-practices-figs-2008`; `fao-crop-evapotranspiration-56-1998` |
| `validation_flow_binding` | parameterized and evidence gap flows | Accept only an applicable Flow Set group at version 0.2.0 or a later verified concrete UUID during foreground-data generation; do not substitute a nearby product, direction, or flow type to force a match. | `iso-14044-2006` |
| `validation_emission_pathways` | managed-soil elementary outputs | Check that nitrogen activity data, method tier or factors, conversion basis, and pathway assumptions are present for every reported ammonia, N2O, or nitrate flow, and that omitted pathways are explicitly justified. | `ipcc-2019-managed-soils-n2o` |
| `validation_yield_reconciliation` | harvest and farm-gate process | Check that gross harvest, saleable fresh figs, culls, field loss, and other destinations reconcile before normalization; reject unexplained negative or double-counted outputs. | `unece-ffv-17-fresh-figs-2017`; `iso-14044-2006` |
| `validation_downstream_boundary` | farm-gate output | Check that washing, grading, packing for downstream distribution, storage, transport, drying, and processing after the declared gate are not silently included. | `unece-ffv-17-fresh-figs-2017`; `iso-14067-2018` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` for farm-gate fresh-fig production; `background_dataset` only when the declared geography, season, market state, and boundary are suitable for the receiving study |
| downstream_use | Foreground process inventory and lifecyclemodel projections for fresh, unprocessed figs at farm gate; partial farm-gate carbon-footprint studies when impact-method assumptions are declared |
| allowed_use | Comparative or attributional LCA of fresh figs, orchard management scenarios, irrigation or nutrient-management scenarios, and supply-chain studies that add downstream handling explicitly |
| excluded_use | Dried or processed fig products; nursery-stock datasets; generic fruit datasets without fresh-fig qualifiers; studies that assume post-farm-gate packaging, storage, transport, or processing is already included |
| required_metadata | PCR id and version; species and variety; farm geography; orchard block area and age; reporting year or harvest season; irrigation regime; nutrient and plant-protection records; yield and cull reconciliation; farm-gate definition; flow identities and Flow Set bindings |
| required_quality_disclosure | Data coverage, measurement and estimation methods, missing data, annualization of perennial orchard inputs, emission method tier, allocation, uncertainty or sensitivity, and all identity evidence gaps before foreground completion |
| update_trigger | New PCR version; change in farm-gate definition; material change in orchard system, irrigation, nutrient, plant-protection, harvest, or allocation method; or evidence that the fresh-fig market state or boundary has changed |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unece-ffv-17-fresh-figs-2017` | standard | https://unece.org/fileadmin/DAM/trade/agr/standard/fresh/FFV-Std/English/17_FreshFigs.pdf | Fresh-fig identity, fresh market state, quality qualifiers, and exclusion of industrial processing |
| `fao-good-agricultural-practices-figs-2008` | official_guidance | https://www.fao.org/input/download/report/700/al31_41e.pdf | Fig orchard establishment, irrigation, fertilization, plant protection, pruning, and harvest activity decomposition; dried-fig-specific post-harvest guidance is not imported into this fresh farm-gate boundary |
| `uc-ipm-cultural-tips-growing-fig` | extension_guidance | https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-fig/ | Site-specific nature of irrigation, nitrogen management, ripeness, and harvest records |
| `fao-crop-evapotranspiration-56-1998` | handbook | https://www.fao.org/4/X0490E/x0490e00.htm | Irrigation calculation, soil-water balance, climate and crop data, and local-data preference |
| `ipcc-2019-managed-soils-n2o` | method_factor | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Nitrogen-input activity data and direct, volatilization, leaching, and runoff pathways for managed-soil emissions |
| `iso-14044-2006` | standard | https://committee.iso.org/standard/38498.html | LCA goal and scope, inventory, allocation, reporting, and review principles |
| `iso-14067-2018` | standard | https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100271.pdf | Partial product carbon-footprint boundary and farm-gate reporting context |
