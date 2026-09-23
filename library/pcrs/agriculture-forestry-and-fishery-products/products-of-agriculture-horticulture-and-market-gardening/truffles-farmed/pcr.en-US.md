---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.truffles-farmed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Truffles, farmed

## 1. Scope and Applicability

This PCR covers fresh farmed truffles produced in a managed perennial or woodland-or-orchard symbiosis with inoculated host plants and delivered at the farm gate. The boundary distinguishes host establishment, managed stand production, harvest, and any conditional on-farm preparation needed to meet the declared fresh market state. It applies to rainfed or irrigated stands, single-site or aggregated sites, and production systems that use orchard, plantation, or managed woodland practices.

It excludes wild-collected truffles, nursery-only inoculated host plants sold as planting stock, host-plant timber or fruit products, truffle-derived processed foods, preservation, freezing, drying, packaging supplied after the farm gate, off-farm storage, transport, distribution, retail, and consumer use. A host crop or other product that is intentionally sold as a co-product is recorded separately and handled under the allocation rules in Section 7.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.truffles-farmed |
| classification_refs | CPC 3.0: 01272 Truffles, farmed |
| covered_products | fresh truffles cultivated through a managed host-plant symbiosis and handed over at the farm gate |
| excluded_products | wild-collected truffles; inoculated host plants sold as nursery stock; host timber, fruit, or other co-products; processed, dried, frozen, preserved, packaged, transported, stored, distributed, or prepared truffle products |
| representative_product | fresh farmed truffle, as received at the farm gate |
| production_route | inoculated host establishment, managed perennial or woodland-or-orchard stand, harvest, and conditional farm-gate fresh-product conditioning |
| market_state | fresh whole truffle at farm-gate hand-off, with species or cultivar, maturity, soil adherence, moisture, damage, grading, and conditioning state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | fresh farmed truffle at the farm gate |
| How much | 1 kg as-received fresh truffle |
| How well | whole fresh truffle meeting the declared species or cultivar, maturity, soil-adherence, damage, grading, and conditioning state |
| How long or cycle | one declared production period, including the stand establishment period when the dataset uses a cradle-to-farm-gate perennial basis |
| reference_flow_link | terminal accepted fresh truffle output from `truffle_harvest` when no conditioning is included, otherwise from `truffle_farm_gate_conditioning` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Truffles, farmed `862ab1a6-8876-46bf-8b73-d3f22280449c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | truffle species or cultivar; host-plant species; production geography; stand age and establishment period; reporting period; harvested and accepted mass; maturity and grading; soil adherence or cleaning state; rejected and co-product destinations |
| Binding | fixed |


When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | reference product and accepted fresh truffle outputs | Mass | kg | Report the as-received mass at the farm-gate hand-off. Record soil adherence, visible moisture, and grading state separately; do not silently convert fresh mass to dry mass. |
| `perennial_stand_annualization` | establishment and managed-stand inputs | Mass, volume, energy, or activity-specific property | activity-specific unit | Allocate stand-establishment and shared perennial inputs to the declared reporting period using documented stand age, productive period, replacement events, and output records. Do not apply a universal lifetime or yield. |
| `nutrient_product_and_basis` | fertilizer or soil-amendment input | Product mass and nutrient content | kg product and kg N, kg P2O5, or kg K2O as applicable | Preserve the actual supplied product identity and the declared nutrient basis as separate fields. The single input card may contain more than one nutrient or amendment product without enumerating a universal fertilizer list. |
| `area_to_reference_conversion` | area-based establishment, management, and harvest records | Activity-specific property | ha and kg fresh truffle | Convert same-site, same-period totals by dividing by accepted fresh-truffle output before scaling to the 1 kg reference flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared planting or woodland-orchard site before inoculated host establishment, with planting stock and purchased management inputs crossing the foreground boundary |
| starting_condition_role | start of managed farmed-truffle production |
| product_classification_scope | farmed fresh truffles corresponding to CPC 3.0 code 01272 |
| recursive_input_rule | purchased or retained truffles used as biological inoculum, planting stock, or host-establishment material are upstream inputs and must not loop back to the farmed fresh-truffle reference output; declare the actual inoculation or planting material and its source dataset |
| upstream_dataset_requirement | compatible upstream datasets for inoculated host stock, nursery or propagation inputs, nutrient or soil-amendment products, irrigation supply, fuels, electricity, contracted services, and waste or residue treatment |
| disclosure | species or cultivar; host species and inoculation status; site geography and area; stand age; establishment and productive periods; replacement or mortality events; management regime; irrigation; nutrient or amendment product and nutrient basis; harvest method; yield; grading; soil adherence; reject and residue fate; conditioning boundary; co-product allocation |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_establishment_to_farm_gate` | all conforming datasets | Include inoculated host establishment, managed stand care, harvest, and conditional on-farm preparation performed before the declared farm-gate hand-off. | `iso-14044-2006` |
| `boundary_perennial_time_basis` | multi-year or multi-period stands | Link establishment, replacement, mortality, management, and harvest records to a declared period and prevent the same stand input or output from being attributed twice. | `iso-14044-2006` |
| `boundary_managed_soil_emissions` | nutrient, amendment, residue, and soil-management records | Include direct and indirect managed-soil emissions using a geographically applicable method and the same activity data used for nutrient and residue accounting. | `ipcc-2019-afolu` |
| `boundary_post_farm_gate_exclusion` | downstream activities | Exclude off-farm transport, storage, preservation, processing, packaging supplied after hand-off, distribution, retail, and use unless a study explicitly extends the system boundary. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `truffle_host_establishment` | Inoculated host establishment | required | always for a new or replanted stand; retain the establishment period even when its records are annualized | establish host plants and the truffle symbiosis | planted area, host stock, inoculation or propagation records, establishment years, and replacement records |
| `truffle_stand_management` | Managed perennial or woodland-or-orchard stand management | required | always during the declared production period | maintain the host-symbiosis stand and its soil, water, vegetation, and service inputs | managed area, reporting period, stand age, annual inputs, and productive fresh-truffle output |
| `truffle_harvest` | Fresh truffle harvest | required | whenever truffles are removed from the managed stand | locate, remove, collect, and reconcile fresh truffles and harvest losses | harvested mass, accepted mass, rejected mass, harvest labor or machinery, and soil disturbance records |
| `truffle_farm_gate_conditioning` | Farm-gate fresh-truffle conditioning | conditional | brushing, washing, sorting, grading, cooling, or other preparation occurs before hand-off and is not already included in harvest records | prepare harvested truffles to the declared fresh market state | incoming mass, accepted mass, rejects, water, energy, and conditioning records |

### Process: Inoculated host establishment (`truffle_host_establishment`)

#### Inputs

##### Product flows

###### Inoculated host planting stock (`inoculated_host_stock_input`)

Record the actual host species, inoculation status, nursery or propagation route, quantity planted, and replacement quantity when planting stock crosses the foreground boundary. Keep nursery-stock identity separate from the harvested truffle identity.

- Selected flow: Inoculated host planting stock (identity evidence gap)
- Flow property / unit: Mass or item count / kg or item
- Amount rule: measured planting stock supplied and planted by host species and stand block
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare and converted to 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources:

###### Agricultural nutrient and fertilizer inputs (`truffle_host_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare and converted to 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources:

##### Waste flows

##### Elementary flows

###### Land occupation by establishing stand (`establishment_land_occupation`)

Record the occupied area and duration for the new or replanted managed stand. The land-use identity remains parameterized until the post-authoring identity pass.

- Selected flow: Land occupation, managed perennial or woodland-or-orchard stand
- Flow property / unit: Area-time / m2*a
- Amount rule: planted area multiplied by the declared occupation duration and allocated to the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Sources: `iso-14044-2006`

#### Outputs

##### Product flows

###### Established inoculated host stand (`established_host_stand_output`)

Record the established host stand as an internal hand-off to managed stand management. It is not the reference product and must not be counted as a saleable truffle output.

- Selected flow: Established inoculated host stand (identity evidence gap)
- Flow property / unit: Area or item count / ha or item
- Amount rule: planted and surviving host stock at the declared establishment hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources:

##### Waste flows

###### Establishment mortality or rejected planting stock (`establishment_mortality_waste`)

Record dead, failed, or rejected planting stock and its destination. Do not transfer failed stock into the established stand output.

- Selected flow: Establishment mortality or rejected planting stock (identity evidence gap)
- Flow property / unit: Mass or item count / kg or item
- Amount rule: measured mortality and rejection by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources:

##### Elementary flows

### Process: Managed perennial or woodland-or-orchard stand management (`truffle_stand_management`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`truffle_stand_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare and converted to 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management_records`
- Sources:

###### Irrigation water supplied (`stand_irrigation_water_input`)

Record applied irrigation by block and reporting period. Rainfed production records zero applied irrigation only with a documented water-management basis.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated applied irrigation volume by stand block and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare and converted to 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management_records`
- Sources:

###### Fuel for stand machinery (`stand_machinery_fuel_input`)

Record fuel for mowing, vegetation management, pruning, access, irrigation equipment, and other machinery that crosses the foreground boundary.

- Selected flow: Mobile agricultural machinery fuel
- Flow property / unit: Mass or energy carrier / kg or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: tank records, invoices, contractor records, or equipment activity converted with carrier identity retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare and converted to 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stand_management_records`
- Sources:

###### Purchased electricity for stand services (`stand_electricity_input`)

Record electricity used by pumps, monitoring, frost protection, lighting, or other stand services when it crosses the foreground boundary.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter, invoice, or equipment record by reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare and converted to 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management_records`
- Sources:

##### Waste flows

##### Elementary flows

###### Land transformation for new stand (`stand_land_transformation`)

Record transformation only when the managed stand is established on land whose prior land state changes as part of the declared system boundary. Retain zero with evidence when no transformation occurs.

- Selected flow: Land transformation for managed perennial or woodland-or-orchard stand
- Flow property / unit: Area / m2
- Amount rule: measured transformed area by prior and subsequent land state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management_records`
- Sources: `iso-14044-2006`

#### Outputs

##### Product flows

###### Managed stand hand-off to harvest (`managed_stand_to_harvest`)

Record the managed stand state and the area or block transferred to harvest operations. This is an internal product-flow hand-off, not the reference product.

- Selected flow: Managed inoculated host stand (identity evidence gap)
- Flow property / unit: Area / ha
- Amount rule: managed area and stand block transferred to the harvest period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management_records`
- Sources:

##### Waste flows

###### Pruning and stand residue leaving the boundary (`stand_pruning_residue_waste`)

Record pruning, mortality, and other stand residues by destination. A material intentionally sold or used as a co-product is not a waste and must be recorded under the allocation rule.

- Selected flow: Stand pruning or residue leaving the foreground boundary (identity evidence gap)
- Flow property / unit: Mass / kg wet or dry mass as recorded
- Amount rule: measured residue mass by destination and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stand_management_records`
- Sources:

##### Elementary flows

###### Managed-soil nitrogen emission (`managed_soil_nitrogen_emission`)

Calculate direct or indirect nitrogen-related emissions only from collected nutrient, amendment, residue, and relevant soil-management records. Keep the emission until the method and identity pass are complete.

- Selected flow: Managed-soil nitrogen emission (identity evidence gap)
- Flow property / unit: Mass / kg N or kg substance
- Amount rule: method-calculated from declared nutrient, amendment, residue, and soil activity inputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stand_management_records`
- Sources: `ipcc-2019-afolu`

### Process: Fresh truffle harvest (`truffle_harvest`)

#### Inputs

##### Product flows

###### Harvest service and equipment (`truffle_harvest_service_input`)

Record contracted harvest service, rented equipment, or directly operated harvest activity as a foreground service or activity record. Separate fuel and electricity already recorded in stand management to prevent double counting.

- Selected flow: Fresh truffle harvest service (identity evidence gap)
- Flow property / unit: Mass, time, or service unit / kg, h, or service unit
- Amount rule: measured harvest activity by block and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources:

##### Waste flows

##### Elementary flows

###### Harvest soil disturbance (`harvest_soil_disturbance`)

Record soil displaced or disturbed by harvest only when it crosses the declared environmental boundary or is required by the selected impact method. Do not convert ordinary tool contact into a soil-emission flow without evidence.

- Selected flow: Soil disturbed or removed during truffle harvest (identity evidence gap)
- Flow property / unit: Mass / kg soil
- Amount rule: measured or method-supported disturbed soil associated with the harvest operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources:

#### Outputs

##### Product flows

###### Harvested fresh truffle (`harvested_fresh_truffle_output`)

Record all truffles removed from the stand before sorting, including accepted, downgraded, and rejected mass. The accepted portion is the reference flow when no conditioning process is included.

- Selected flow: Farmed truffle, fresh, harvested (identity evidence gap)
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass by harvest event, maturity, and grading state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal harvest output scaled to 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources:

##### Waste flows

###### Harvest rejects and losses (`harvest_reject_waste`)

Record damaged, immature, contaminated, or otherwise rejected truffles and their destinations. Rejected mass must not be included in accepted reference output.

- Selected flow: Harvested truffle rejects and losses (identity evidence gap)
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass not transferred to accepted product, by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Sources:

##### Elementary flows

### Process: Farm-gate fresh-truffle conditioning (`truffle_farm_gate_conditioning`)

#### Inputs

##### Product flows

###### Harvested fresh truffle for conditioning (`conditioning_truffle_input`)

Record the harvested truffle mass entering brushing, washing, sorting, grading, cooling, or other declared farm-gate preparation. This process is omitted when the harvest record already represents the farm-gate market state.

- Selected flow: Farmed truffle, fresh, harvested (identity evidence gap)
- Flow property / unit: Mass / kg
- Amount rule: measured incoming mass to the conditioning operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

###### Conditioning water or cleaning medium (`conditioning_water_input`)

Record process water or cleaning medium only when it crosses the farm-gate conditioning boundary. Identify whether water is applied, recirculated, discharged, or embedded in an upstream service.

- Selected flow: Process water for fresh-truffle conditioning
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter or batch record for water used in conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fresh truffle at farm gate (`farm_gate_fresh_truffle_output`)

Record the accepted fresh truffle after any included conditioning. Declare the final mass, grading, maturity, soil-adherence, and conditioning state; this is the reference output when this conditional process is used.

- Selected flow: Farmed truffle, fresh, at farm gate (identity evidence gap)
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output after conditioning and grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

##### Waste flows

###### Conditioning rejects and removed soil (`conditioning_reject_waste`)

Record damaged, off-specification, or removed-soil material generated by conditioning and its destination. Separate saleable downgraded product from waste and retain the final moisture basis.

- Selected flow: Conditioning rejects and removed soil (identity evidence gap)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or removed mass by destination and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fresh truffle
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

Apply the following rules in order:

1. `allocation_single_primary_output`: Treat accepted fresh farmed truffle as the primary output. Internal host-stand hand-offs and rejected material are not co-products.
2. `allocation_avoid_subdivision`: Subdivide establishment, stand management, harvest, and conditioning where a separate co-product or service has a distinct measured hand-off. Avoid allocation when a process can be directly assigned.
3. `allocation_co_product_evidence`: If host timber, fruit, prunings, nursery stock, or another product is intentionally sold or transferred as a co-product, declare its quantity, quality, destination, and hand-off evidence. Use a physical-causality allocation where a defensible relationship exists; otherwise use an explicitly justified economic allocation or another ISO 14044-consistent method.
4. `allocation_residue_not_product`: Treat unmarketed mortality, prunings, removed soil, rejects, and losses as waste or elementary flows according to destination unless evidence shows an intentional product or service hand-off.
5. `allocation_period_consistency`: Apply the same allocation choice across the complete declared stand period and reconcile it with replacement, mortality, and output records.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `truffle_host_establishment` | establishment inputs, stand hand-off, mortality, land occupation | planting and nursery record | host species; inoculation status; nursery source; planted items or mass; planted area; establishment date; replacement; mortality; amendment product and nutrient basis | supplier invoices, planting registers, block maps, and field interviews reconciled to planted area | kg, item, ha, m2*a, kg nutrient | each establishment or replacement event | full establishment period and replacement events | each stand block | aggregate by host species, block, and reporting period; retain source records | signed planting records, supplier documents, block map, and survival check |
| `cp_stand_management_records` | `truffle_stand_management` | nutrient or amendment, irrigation, fuel, electricity, soil transformation, soil emissions inputs | stand-period activity record | stand age; area; irrigation meter; product identity; product mass; nutrient basis; fuel; electricity; soil state; residues; management dates | meters, invoices, equipment logs, agronomic records, and method-ready soil or residue inventory | kg product, kg nutrient, m3, kg, MJ, kWh, ha | monthly or per application, reconciled annually | declared reporting period plus linked stand establishment basis | each stand block or contributing site | aggregate by stand block and period after removing duplicates and shared-service double counting | meter or invoice reconciliation, site log, soil plan, and period completeness review |
| `cp_harvest_output_records` | `truffle_harvest` | harvest service, harvested product, rejects, soil disturbance | harvest lot record | harvest date; block; method; labor or service; incoming mass; accepted mass; reject mass; maturity; grade; soil disturbance; destination | weighed lot records and harvest logs reconciled to sales or transfer records | kg, h, service unit | each harvest lot | complete harvest season and declared reporting period | each harvest block | sum lots by block and period; reconcile harvested = accepted + rejected + documented loss | calibrated scale, lot ticket, sales or transfer record, and reject destination |
| `cp_conditioning_records` | `truffle_farm_gate_conditioning` | incoming truffle, water, accepted output, rejects and removed soil | conditioning batch record | batch id; incoming mass; water; energy if applicable; operation; accepted mass; grade; moisture or soil state; rejects; destination | batch sheets, scale records, utility meter, and farm-gate hand-off record | kg, m3, kWh | each conditioning batch | only the included pre-farm-gate conditioning period | conditioning facility or site | aggregate batches and reconcile incoming mass to accepted output and rejects | scale calibration, batch reconciliation, market-state specification, and hand-off record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_scaling` | all inventory rows | `normalized amount = period amount / accepted fresh-truffle output × 1 kg reference flow` | period amount; accepted fresh-truffle output; reference amount | amount per 1 kg accepted fresh truffle | `iso-14044-2006` |
| `calc_perennial_annualization` | establishment and shared stand inputs | Allocate each input to the declared reporting period using documented stand period, establishment period, replacement, and productive output; do not use an unstated universal lifetime. | establishment and stand records; period; output; replacement and mortality | period-attributed inventory amount | `iso-14044-2006` |
| `calc_nutrient_basis` | nutrient or soil-amendment input | `nutrient basis = supplied product mass × declared nutrient fraction`; retain product mass and each declared nutrient basis as separate outputs. | product mass; label, invoice, or supplier nutrient fraction | kg product and kg nutrient basis | `iso-14044-2006` |
| `calc_managed_soil_emissions` | managed-soil nitrogen emission | Apply the selected geographically appropriate method to collected nutrient, amendment, residue, and soil activity records; document factors and avoid counting the same nitrogen source twice. | nutrient basis; residue and soil activity; selected method factors | method-calculated elementary emissions | `ipcc-2019-afolu` |
| `calc_mass_reconciliation` | harvest and conditioning | `incoming mass = accepted output + rejects + documented process loss` for each lot or batch, with moisture and soil state retained. | lot or batch incoming mass; accepted mass; rejects; losses | reconciled mass balance and QA finding | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_boundary` | all datasets | Declare product identity, host species, inoculation status, farm-gate state, boundary processes, and whether conditioning is included. | site description, product specification, and dataset metadata |
| `dq_perennial_time_series` | establishment and stand management | Link multi-year inputs, replacement, mortality, stand age, productive periods, and outputs to an explicit time basis. | stand register, block history, and reporting-period reconciliation |
| `dq_input_reconciliation` | product inputs and services | Reconcile invoices, meters, contractor records, and field logs to the declared blocks and periods; explain missing or zero records. | primary records and reconciliation worksheet |
| `dq_output_mass_balance` | harvest and conditioning | Reconcile harvested, accepted, rejected, and documented loss mass with consistent moisture, soil-adherence, and grading bases. | calibrated scale records, lot tickets, batch sheets, and destination records |
| `dq_emission_method` | elementary emissions | Identify the selected method, geography, factors, activity data, and uncertainty; do not present provisional estimates as measured emissions. | method record, factor reference, and calculation worksheet |
| `dq_identity_evidence` | evidence gap or parameterized flows | Keep identity evidence gaps explicit and replace them with verified or reviewed identities before active or published use. | identity review record and final dataset readback |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | reference flow and terminal outputs | Exactly one terminal accepted fresh-truffle output must be linked to the reference flow; its species or cultivar, market state, mass basis, and farm-gate hand-off must be declared. | `iso-14044-2006` |
| `validation_process_completeness` | process map | A conforming dataset must resolve whether host establishment, stand management, harvest, and conditional conditioning are included, and must not omit an applicable process without a documented reason. | `iso-14044-2006` |
| `validation_period_reconciliation` | perennial production | Every establishment and stand input must be linked to a declared site, block, period, and output basis; replacement and mortality records must not be double counted. | `iso-14044-2006` |
| `validation_mass_balance` | harvest and conditioning | For each harvest lot or conditioning batch, incoming mass must reconcile to accepted product, rejects, and documented loss within the declared measurement tolerance. | `iso-14044-2006` |
| `validation_identity_and_parameterization` | all flow cards | identity evidence gaps must remain explicitly evidence gap or parameterized; an exact fixed identity may be added only after verified identity review and must not change the card's real direction, type, or boundary meaning. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground agricultural production dataset for fresh farmed truffles at the farm gate |
| downstream_use | `secondary_dataset` for process and lifecyclemodel construction; may support `background_dataset` use only after identity, completeness, and quality review |
| allowed_use | farm-gate fresh-truffle footprinting, comparative cultivation studies with declared site and period, and downstream processing studies that use the declared farm-gate market state |
| excluded_use | wild truffle collection; nursery-stock production without a truffle-product hand-off; processed or preserved truffle products; unqualified regional averages; datasets that omit the perennial time basis or accepted-output reconciliation |
| required_metadata | CPC 3.0 code 01272; species or cultivar; host species; inoculation status; site and geography; stand age; establishment and reporting periods; area; management route; inputs and nutrient basis; harvest and conditioning boundary; maturity, grade, soil state, moisture, accepted output, rejects, residues, and co-products |
| required_quality_disclosure | measured versus calculated fields; evidence gap or parameterized identities; method and factors for soil emissions; time and site coverage; data gaps; allocation choice; mass-balance findings; and representativeness limitations |
| update_trigger | new verified reference or input identities; changed host or inoculation route; new stand-management technology; changed farm-gate market state; revised soil-emission method; changed allocation decision; or evidence that the productive-period and output basis is no longer representative |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | functional-unit scaling, boundary definition, time-basis disclosure, allocation hierarchy, and data-quality rules |
| `ipcc-2019-afolu` | official_guidance | IPCC 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4: Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil and residue-related emission method selection and activity-data requirements |
