---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pineapples
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Fresh Pineapples at a Declared Farm or Primary-conditioning Gate

## 1. Scope and Applicability

This PCR guides foreground data package construction for whole fresh pineapples corresponding to CPC 3.0 `01318`, “Pineapples”. It covers managed establishment and production, propagation material, nutrients, irrigation, crop protection, field energy, land occupation, managed-soil emissions, harvest, field delivery, and optional primary conditioning when the declared gate follows washing, sorting, trimming, or short-term cooling.

The default gate is the farm or field-delivery gate. A package may declare a primary-conditioning gate when that operation is represented. It must state plant or ratoon cycle, crop year, variety where material, geography, irrigation and water-source status, maturity or quality class, accepted fraction, losses, and gate. Processed products, retail and consumer use, nursery systems, and logistics beyond the gate are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pineapples` |
| classification_refs | CPC 3.0 `01318`, `Pineapples` |
| covered_products | whole fresh pineapples from a declared plant or ratoon crop at a farm, field-delivery, or optional primary-conditioning gate |
| excluded_products | juice; canned, dried, frozen, fermented, cut, sweetened, or formulated products; retail-ready products; consumer use; nursery propagation as a separate product |
| representative_product | whole fresh pineapple fruit at declared maturity, quality, handling, and farm or primary-conditioning gate |
| production_route | managed pineapple establishment, plant or ratoon production, harvest, field delivery, and optional primary conditioning or cooling |
| market_state | bulk or declared packaged whole fresh pineapple with variety where material, maturity or grade, cycle, geography, and gate recorded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | whole fresh pineapple fruit at the declared farm, field-delivery, or primary-conditioning gate |
| How much | 1 kg |
| How well | variety where material; plant or ratoon cycle; maturity or quality class; geography; crop year; irrigation and water-source status; accepted fraction; handling state; and gate |
| How long or cycle | one declared crop cycle and crop year; disclose planting, ratoon, replant, and productive-duration treatment |
| reference_flow_link | Reference amount and product identity below; product UUID requires foreground binding before publication|

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fresh whole pineapple at the declared gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | whole fresh fruit; variety where material; plant or ratoon cycle; crop year; geography; maturity or quality class; irrigation and water-source status; accepted fraction; handling state; declared gate; and product identity binding status |

All `Required qualifiers` must be declared in the foreground data package. A farm-gate identity must not be inferred from a post-conditioning identity without an explicit gate declaration.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Express the reference flow as net kg of whole fresh pineapple at the declared gate and retain the as-received basis. |
| `cycle_and_yield_basis` | production and output | Mass and time | kg and cycle identifier | Record plant and each ratoon or replant cycle separately; normalize inputs and outputs to the same cycle and accepted-output basis. |
| `nutrient_product_basis` | fertilizer and soil amendments | Mass | kg product and kg nutrient | Record actual products and declared nutrients in one conditional total card; do not infer product mass from nutrient mass. |
| `water_and_energy_basis` | irrigation, withdrawal, fuel, and electricity | Volume, mass, or energy | m3, L, kg, MJ, or kWh | Keep source withdrawal, delivered irrigation, pumping energy, field fuel, and electricity distinct. |
| `output_quality_basis` | harvest, conditioning, and losses | Mass and quality | kg and declared quality basis | Reconcile harvested fruit, accepted fruit, culls, residues, losses, and conditioned output on one declared basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | planting_material_and_declared_pineapple_crop_cycle |
| starting_condition_role | crop_establishment_or_ratoon_cycle_start |
| product_classification_scope | whole fresh pineapples corresponding to CPC 3.0 `01318`; processed and nursery products are outside scope |
| recursive_input_rule | Same-category pineapple used as planting or ratoon material is recorded as propagation input with source, lot, cycle, and upstream disclosure; it is not silently traced as the fresh reference product. |
| upstream_dataset_requirement | Identify or disclose datasets for propagation material, fertilizer and amendments, crop protection, electricity, fuels, water, transport, conditioning, waste treatment, and emission factors. |
| disclosure | Declare cycle, planting and ratoon treatment, geography, variety, crop year, area, yield, quality basis, route, gate, output fates, allocation, and identity evidence gaps. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_establishment_and_maintenance` | field production | Include establishment, soil and field preparation, nutrient and amendment inputs, irrigation, crop protection, field operations, land occupation, and managed-soil emissions through harvest. | `fao-crop-production-methodology`; `fao-pineapple-production-guide`; `ipcc-2019-refinement` |
| `boundary_harvest_and_field_delivery` | harvest and field hand-off | Include harvest, collection, internal handling, and transport to the declared farm or field-delivery hand-off when foreground. | `fao-pineapple-production-guide`; `fao-postharvest-handling` |
| `boundary_primary_conditioning` | optional conditioning | Include washing, sorting, trimming, cooling, conditioning energy, wastewater, and culls only when the gate follows them. | `codex-cxs-182-1993`; `fao-postharvest-handling` |
| `boundary_downstream_exclusion` | downstream conversion and use | Exclude juice, canning, drying, freezing, fermentation, cutting, sweetening, retail, consumer use, and logistics beyond the gate. | `codex-cxs-182-1993`; `iso-14067` |
| `boundary_input_completeness` | all routes | Address propagation material, nutrients, crop protection, water, land, energy, harvest, transport, emissions, output fates, and conditioning inputs with a value, justified zero, or documented exclusion. | `fao-crop-production-methodology`; `ipcc-2019-refinement`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pineapple_crop_production` | Pineapple Crop Establishment and Maintenance | required |  | foreground | cycle inputs and harvested fruit output |
| `pineapple_harvest_and_delivery` | Pineapple Harvest and Field Delivery | required |  | foreground | whole fruit at farm or field-delivery hand-off |
| `pineapple_primary_conditioning` | Pineapple Primary Conditioning and Declared Gate | conditional | include when the gate follows washing, sorting, trimming, packaging, or cooling | foreground | conditioned fruit at selected gate |

### Process: Pineapple Crop Establishment and Maintenance (`pineapple_crop_production`)

#### Inputs

##### Product flows

###### Planting or ratoon propagation material (`propagation_material_input`)

Record slips, crowns, suckers, or retained ratoon material with source and cycle.

- Selected flow: Pineapple propagation material at crop establishment (unmapped)
- Flow property / unit: Mass or count converted to declared mass / kg or count
- Amount rule: measured planting-material count and mass, retaining conversion basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_propagation_and_cycle_records`
- Sources: `fao-pineapple-production-guide`

###### Agricultural nutrient and fertilizer inputs (`pineapple_crop_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `fao-pineapple-production-guide`; `ipcc-2019-refinement`

###### Irrigation water supplied (`irrigation_water_input`)

Record delivered irrigation separately from source withdrawal and pumping energy.

- Selected flow: Irrigation water supplied (unmapped or parameterized)
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Volume / m3
- Amount rule: metered or documented delivered irrigation by field and event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_withdrawal_records`
- Sources: `fao-crop-evapotranspiration-56`; `fao-pineapple-production-guide`

###### Crop-protection products (`crop_protection_input`)

Record product mass, active ingredient, application rate, field, and event without collapsing product mass into active-ingredient mass.

- Selected flow: Crop-protection product (unmapped)
- Flow property / unit: Mass / kg product and kg active ingredient where available
- Amount rule: measured or invoiced product mass by active ingredient and application
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-pineapple-production-guide`

###### Field machinery fuel (`field_machinery_fuel`)

Record fuel type, quantity, machinery or service provider, field operation, and reporting period.

- Selected flow: Mobile machinery fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Amount rule: measured fuel or contractor record by operation and cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `fao-crop-production-methodology`

##### Waste flows

##### Elementary flows

###### Land occupation for pineapple production (`pineapple_land_occupation`)

Record the occupied area and duration represented by the pineapple production cycle.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha-year
- Amount rule: measured area multiplied by represented occupation duration and allocated to cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_and_cycle_records`
- Sources: `fao-crop-production-methodology`

###### Water source withdrawal (`water_source_withdrawal`)

Record source withdrawal separately from irrigation delivered to the crop and retain the source and event basis.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: metered or documented source withdrawal by field, source, and event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_withdrawal_records`
- Sources: `fao-crop-evapotranspiration-56`

##### Outputs

##### Product flows

###### Harvestable pineapple crop output (`harvestable_pineapple_crop`)

Record the crop mass transferred from cultivation to harvest, including grade and harvest timing.

- Selected flow: Whole fresh pineapple crop at harvest hand-off (unmapped)
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled crop mass entering harvest
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`
- Sources: `fao-pineapple-production-guide`; `mass-balance-identity`

##### Waste flows

#### Outputs

##### Elementary flows

###### Direct soil nitrous oxide emission (`direct_soil_n2o_emission`)

Calculate the declared direct soil emission from documented nutrient, residue, and soil-management inputs using one selected factor method.

- Selected flow: Nitrous oxide emission to air (unmapped or parameterized)
- Flow property / unit: Mass / kg N2O or kg N2O-N converted by declared method
- Amount rule: method-calculated emission from fertilizer, amendment, residue, and soil-N inputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-refinement`

### Process: Pineapple Harvest and Field Delivery (`pineapple_harvest_and_delivery`)

#### Inputs

##### Product flows

###### Crop received for harvest (`crop_received_for_harvest`)

Record the crop mass entering harvest operations with the field, lot, quality, and timing metadata needed for reconciliation.

- Selected flow: Whole fresh pineapple crop received for harvest (unmapped)
- Flow property / unit: Mass / kg
- Amount rule: measured crop mass at harvest entry
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`
- Sources: `fao-pineapple-production-guide`

###### Harvest machinery fuel (`harvest_machinery_fuel`)

Record fuel or energy used for harvesting and the associated machinery operation or contracted service.

- Selected flow: Mobile machinery fuel or energy
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Amount rule: measured harvest-operation energy by lot or event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy_records`
- Sources: `fao-pineapple-production-guide`

###### Harvest-to-gate road transport service (`harvest_road_transport`)

Record the transport service from harvest hand-off to the declared gate, including distance, payload, and carrier basis.

- Selected flow: Road freight transport service
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Flow property / unit: Mass-distance / tonne-km or declared service unit
- Amount rule: measured payload, distance, and route for harvest-to-gate movement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_transport_records`
- Sources: `fao-postharvest-handling`

##### Waste flows

##### Outputs

##### Product flows

###### Whole fresh pineapple at farm or field-delivery gate (`fresh_pineapple_farm_gate_output`)

Record accepted fresh pineapple delivered at the declared farm or field-delivery gate and reconcile it with harvest inputs and losses.

- Selected flow: Whole fresh pineapple at declared farm or field-delivery gate (unmapped)
- Flow property / unit: Mass / kg
- Amount rule: net accepted fruit mass by lot with quality basis and gate retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`
- Sources: `codex-cxs-182-1993`; `mass-balance-identity`

##### Waste flows

###### Harvest culls and field losses (`harvest_culls_and_losses`)

Record culls and harvest losses separately from accepted fruit and retain their declared destination or treatment.

- Selected flow: Pineapple culls or harvest loss with declared fate (unmapped)
- Flow property / unit: Mass / kg
- Amount rule: measured cull and loss mass by lot and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`
- Sources: `mass-balance-identity`; `fao-postharvest-handling`

##### Elementary flows

### Process: Pineapple Primary Conditioning and Declared Gate (`pineapple_primary_conditioning`)

#### Inputs

##### Product flows

###### Fruit received for primary conditioning (`fruit_received_for_conditioning`)

Record the fresh fruit lot entering primary conditioning with its gate, quality, and mass basis.

- Selected flow: Whole fresh pineapple received for primary conditioning (unmapped)
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass entering conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_gate_records`
- Sources: `fao-postharvest-handling`

###### Conditioning water (`conditioning_water_input`)

Record water used for washing or primary conditioning separately from source withdrawal and retain the event basis.

- Selected flow: Process water
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-recorded conditioning water by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`
- Sources: `fao-postharvest-handling`

###### Conditioning electricity (`conditioning_electricity_input`)

Record electricity used by primary conditioning equipment and associate it with the conditioned lot or operating period.

- Selected flow: Electricity supply
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Amount rule: meter or equipment record allocated to the fruit lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-postharvest-handling`

##### Waste flows

###### Conditioning culls and wastewater (`conditioning_culls_and_wastewater`)

Record removed fruit, solids, and wastewater from primary conditioning with their declared treatment or discharge route.

- Selected flow: Conditioning cull or wastewater to declared treatment or discharge (unmapped)
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured batch output with treatment or discharge fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_gate_records`
- Sources: `fao-postharvest-handling`; `mass-balance-identity`

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned whole fresh pineapple (`conditioned_pineapple_gate_output`)

Record the accepted whole fresh pineapple after the declared primary-conditioning boundary and retain its quality basis.

- Selected flow: Whole fresh pineapple after declared primary conditioning (unmapped)
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass after conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_gate_records`
- Sources: `codex-cxs-182-1993`; `mass-balance-identity`

##### Waste flows

###### Conditioning loss (`conditioning_loss`)

Reconcile the conditioning input, accepted output, and removed material on the same quality and mass basis.

- Selected flow: Conditioning loss with declared fate (unmapped)
- Flow property / unit: Mass / kg
- Amount rule: input-output reconciliation on the same quality and mass basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh pineapple output at declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_and_gate_records`
- Sources: `mass-balance-identity`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_priority` | crop, harvest, and conditioning | First subdivide plant, ratoon, harvest, field delivery, conditioning, and storage responsibilities when records support separate nodes. | `iso-14044`; `fao-crop-production-methodology` |
| `allocation_plant_and_ratoon_cycles` | shared field and infrastructure burdens | Attribute shared establishment and multi-cycle burdens using declared cycle, duration, and accepted-output bases; disclose sensitivity when incomplete. | `iso-14044`; `fao-pineapple-production-guide` |
| `allocation_fruit_and_nonreference_outputs` | accepted fruit, culls, residues, and losses | Record intended outputs, residues, culls, and waste with separate fates. If subdivision is unavailable, use a declared physical or economic method and disclose the alternative. | `iso-14044`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_propagation_and_cycle_records` | `pineapple_crop_production` | propagation and cycle | planting or ratoon record | material; source; lot; count; mass; date; field; cycle | supplier record, planting log, or survey | count, kg, date | per establishment or cycle | represented crop cycle | field or farm | sum by field and cycle and retain conversion | supplier document, field log |
| `cp_fertilizer_and_amendment_records` | `pineapple_crop_production` | fertilizer and amendment | purchase and application record | product; nutrient; product mass; nutrient mass; date; field | invoice, analysis, log, or applicator record | kg product and kg nutrient | per application | crop cycle | field or farm | sum by product and nutrient and normalize | invoice, label, analysis, log |
| `cp_irrigation_and_withdrawal_records` | `pineapple_crop_production` | irrigation and withdrawal | meter or pumping record | source; meter; readings; volume; pumping energy; date; field | calibrated meter, pumping log, or invoice | m3 and energy | per event or period | irrigation season | field and source | keep withdrawal and delivered irrigation distinct | calibration, readings, invoice |
| `cp_crop_protection_records` | `pineapple_crop_production` | crop protection | application record | product; active ingredient; rate; date; field | farm log, invoice, and label | kg product and kg active ingredient | per application | crop cycle | field or farm | sum by product and active ingredient | label, invoice, log |
| `cp_field_energy_records` | `pineapple_crop_production` | field energy | machine or contractor record | machine; operation; carrier; quantity; date; field | fuel log, meter, telematics, or invoice | L, kg, MJ, or kWh | per operation or period | crop cycle | field and farm | aggregate by operation and normalize | invoice, meter, telematics |
| `cp_land_and_cycle_records` | `pineapple_crop_production` | land and cycle | field record | field; area; planting date; ratoon status; duration; year | field map and production register | ha, date, year | per field and cycle | represented cycle | field or farm | reconcile area and duration before allocation | field map, register |
| `cp_harvest_and_output_records` | `pineapple_harvest_and_delivery` | harvest and outputs | harvest and delivery record | field; lot; date; mass; quality; culls; losses; fate; gate | calibrated scale, harvest log, delivery ticket | kg, date, quality | per event | crop cycle | field to gate | reconcile inputs and outputs by lot | calibration, log, ticket |
| `cp_harvest_energy_records` | `pineapple_harvest_and_delivery` | harvest energy | machine or contractor record | machine; operation; carrier; quantity; mass; period | fuel log, telematics, meter, or invoice | L, kg, MJ, or kWh | per event or period | crop cycle | harvest operation | allocate by harvested mass | invoice, telematics, meter |
| `cp_harvest_transport_records` | `pineapple_harvest_and_delivery` | field delivery | transport record | vehicle; payload; distance; route; date; lot; gate | weighbridge, route log, and invoice | tonne-km or service unit | per movement | crop cycle | harvest to gate | sum payload-distance by lot and route | weighbridge, route record |
| `cp_conditioning_and_gate_records` | `pineapple_primary_conditioning` | fruit, outputs, and gate | conditioning batch record | input; water; electricity; culls; wastewater; output; quality; gate | batch sheet, meters, scale, treatment record | kg, m3, kWh, quality | per batch | conditioning period | conditioning site | reconcile input, output, culls, wastewater, and loss | calibration, batch and treatment records |
| `cp_conditioning_water_records` | `pineapple_primary_conditioning` | conditioning water | meter or batch record | source; meter; batch; volume; date; lot | calibrated meter or batch sheet | m3 | per batch or period | conditioning period | conditioning site | sum by source and batch | calibration, batch record |
| `cp_conditioning_energy_records` | `pineapple_primary_conditioning` | conditioning energy | meter or equipment record | equipment; operation; electricity; period; lot; mass | meter, equipment log, or invoice | kWh or MJ | per batch or period | conditioning period | conditioning site | allocate by lot mass and operation | meter, log, invoice |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | `normalized amount = recorded amount / accepted fresh pineapple output × 1,000 kg` | recorded amount; accepted output; gate and cycle | amount per 1,000 kg accepted output | `mass-balance-identity` |
| `calc_cycle_allocation` | plant and ratoon cycles | Allocate shared field and establishment records by declared cycle duration and accepted output; disclose basis and sensitivity. | area; duration; output; shared input | cycle-attributed input or emission | `iso-14044`; `fao-pineapple-production-guide` |
| `calc_nutrient_basis` | fertilizer and amendments | `nutrient mass = product mass × declared nutrient fraction`; retain product and nutrient separately. | product mass; label or analysis fraction | kg nutrient and kg product | `fao-pineapple-production-guide` |
| `calc_managed_soil_emission` | soil emissions | Apply the selected method tier to nutrient, amendment, residue, and soil inputs; convert N2O-N only when required and disclose the factor. | inputs; factor; conversion | emission by substance and compartment | `ipcc-2019-refinement`; `emep-eea-2023-guidebook` |
| `calc_output_reconciliation` | harvest and conditioning | `input mass = accepted output + culls + residues + measured loss` after aligning the declared basis. | input; output; culls; residues; loss | mass-balance result and discrepancy | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_reference_identity` | reference flow | Confirm gate, product state, property, unit, and identity status; disclose identity evidence gap until verified. | reference-flow metadata and identity review |
| `quality_cycle_completeness` | production cycle | Cover plant and represented ratoon or replant cycles, or document exclusion. | crop-cycle register and field records |
| `quality_input_traceability` | production inputs | Link each input to field, lot, event, date, quantity, and source record. | invoices, labels, meters, logs |
| `quality_water_separation` | irrigation and withdrawal | Verify withdrawal, delivered water, pumping energy, and consumption results are not double counted. | meter reconciliation and source record |
| `quality_output_mass_balance` | harvest and conditioning | Reconcile accepted fruit, culls, residues, wastewater, and losses and explain discrepancies. | scale records and mass-balance worksheet |
| `quality_factor_and_uncertainty` | emissions and external factors | Disclose method tier, factor source, geography, period, uncertainty, and sensitivity. | factor register and calculation review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm one 1 kg reference flow uses whole fresh pineapple at the declared gate, with qualifiers and identity status recorded. | `codex-cxs-182-1993` |
| `validation_cycle_coverage` | process map | Confirm plant, ratoon, replant, and crop-year treatment is explicit and not double counted. | `fao-pineapple-production-guide`; `iso-14044` |
| `validation_input_completeness` | production and harvest | Confirm propagation material, nutrients, crop protection, water, land, energy, transport, and emissions have a value, justified zero, or documented exclusion. | `fao-crop-production-methodology`; `ipcc-2019-refinement` |
| `validation_water_and_energy` | irrigation and conditioning | Confirm withdrawal, delivered water, pumping energy, field fuel, and conditioning electricity remain distinct and have a declared basis. | `fao-crop-evapotranspiration-56`; `fao-postharvest-handling` |
| `validation_mass_balance` | harvest and conditioning | Confirm input, accepted fruit, culls, residues, wastewater, and losses reconcile and each non-reference output has a fate. | `mass-balance-identity` |
| `validation_allocation_and_disclosure` | shared burdens and outputs | Confirm cycle allocation, multi-output treatment, gate, quality, geography, crop year, and sensitivity are disclosed. | `iso-14044`; `iso-14067` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | LCA modelling for whole fresh pineapple at a compatible declared gate, crop cycle, geography, irrigation status, quality, and period |
| excluded_use | processed products; nursery systems; datasets without cycle, gate, quality, water, or output-fate disclosure; downstream logistics or consumer studies outside the boundary |
| required_metadata | canonical PCR id; CPC reference; field or farm scope; variety; plant or ratoon cycle; crop year; geography; irrigation and water source; nutrient and crop-protection basis; yield; accepted and rejected fruit; conditioning status; gate; allocation; factor tier status; protocol coverage |
| required_quality_disclosure | represented cycles and years; primary-record coverage; scale and meter calibration; water treatment; mass-balance tolerance; factor sources and methods; parameterized and unmapped flows; exclusions; uncertainty and sensitivity |
| update_trigger | change in cycle model, variety, route, water source, nutrient or crop-protection practice, yield, conditioning boundary, identity taxonomy, emission method, or representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-182-1993` | standard | Codex Alimentarius CXS 182-1993, Standard for Pineapples | fresh scope, quality descriptors, and processing exclusion |
| `fao-crop-production-methodology` | official_guidance | FAO crop production and farm-data methodology guidance | field records, boundary, input collection, and farm-gate requirements |
| `fao-pineapple-production-guide` | extension_guidance | Pineapple production and crop-management extension guidance | propagation material, plant and ratoon cycles, management, harvest, and yield context |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration | irrigation records and water-balance distinctions |
| `fao-postharvest-handling` | extension_guidance | FAO post-harvest handling guidance for fresh horticultural produce | harvest, field delivery, conditioning, handling, and loss records |
| `ipcc-2019-refinement` | method_factor | 2019 IPCC Refinement to the 2006 IPCC Guidelines | managed-soil and residue emission calculations |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA air pollutant emission inventory guidebook, agricultural chapters | agricultural emission method selection |
| `iso-14044` | standard | ISO 14044, Environmental management — LCA requirements and guidelines | allocation hierarchy, co-product treatment, and validation |
| `iso-14067` | standard | ISO 14067, Greenhouse gases — Carbon footprint of products | product boundary disclosure and quality reporting |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity | harvest and conditioning reconciliation |
