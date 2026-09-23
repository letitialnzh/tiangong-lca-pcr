---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fruits-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other fruits, n.e.c.

## 1. Scope and Applicability

This PCR covers cultivated fruit crops that are not assigned to a more specific fruit category and are reported as
whole, fresh fruit at a declared farm-gate or first declared hand-off. It is intentionally crop-neutral: the data
package must identify the actual fruit species or botanical group, cultivar or variety group, production system, and
market state. The route may be open-field, orchard, vine, shrub, protected cultivation, or another managed horticultural
system supported by the site record.

The default foreground boundary runs from the managed production site and attributable establishment phase through
harvest, optional primary conditioning, grading or destination sorting, optional pre-gate cooling or short storage,
and optional packaging to the declared gate. Retail, consumer use, downstream distribution, processing into juice,
pulp, dried fruit, preserves or other ingredients, wild collection, nursery production, and unrelated infrastructure
are excluded unless explicitly declared as a separate study scope. A product-specific route can omit conditional nodes,
but it must record the omission and the actual hand-off state.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fruits-n-e-c |
| classification_refs | CPC 3.0 / 01359 |
| covered_products | Cultivated fresh whole fruits not covered by a more specific fruit PCR; the actual species or botanical group must be declared. |
| excluded_products | Wild-collected fruit; nursery or planting material; fruit processed into juice, pulp, puree, dried, preserved, fermented or otherwise transformed products; retail and consumer stages. |
| representative_product | Marketable fresh whole fruit of the declared species or botanical group at the declared farm-gate or first hand-off. |
| production_route | Managed annual or perennial horticultural production; harvest; optional primary conditioning; grading or destination sorting; optional cooling/storage; optional packaging; declared gate hand-off. |
| market_state | Fresh whole fruit, with maturity, grade, moisture or dry-matter basis where relevant, and destination state declared. |

The CPC leaf is a classification reference, not a substitute for product identity. A data package that combines
different fruit species or routes must disclose the mixture and use a documented product- or mass-based aggregation
method; it must not silently transfer a species-specific factor from another fruit.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole fruit of the declared species or botanical group at the declared gate. |
| How much | 1 kg net marketable fruit. |
| How well | Fruit species or botanical group; cultivar or variety group; maturity; grade or destination; moisture or dry-matter basis when material; and fresh, whole, unprocessed state. |
| How long or cycle | One complete annual crop cycle or one declared production phase for a perennial crop, including the allocated establishment phase where applicable, and all harvest lots included in the gate output. |
| reference_flow_link | One declared marketable fresh-fruit product flow; identity intentionally unresolved in this draft. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Marketable fresh whole fruit of the declared species or botanical group [unmapped; UUID intentionally blank] |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200c9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | species or botanical group; cultivar or variety group; annual or perennial route; production system; site and geography; crop year or reporting period; establishment phase treatment; harvest maturity; net marketable mass; grade and destination states; field, conditioning, storage and packaging scope; reject, residue, rework and recovery fates; irrigation and energy; fertilizer product and nutrient basis; allocation basis; gate and hand-off. |
| Binding | Product identity remains unmapped; mass flow property and mass unit group are fixed to the saved platform index. |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata,
process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing qualifiers
make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | product, co-product and waste masses | Mass | kg | Record net mass at the stated process state and reconcile harvested, conditioned, graded, marketable, downgraded, rejected, recovered, residual and documented-loss quantities without mixing tare or inconsistent moisture bases. |
| `measurement_02` | fertilizer and soil-amendment inputs | Product mass and nutrient basis | kg product; kg N; kg P2O5; kg K2O | Record only products actually used. Keep formulation or amendment mass separate from declared nutrient mass and retain the label, plan or laboratory basis used for conversion. |
| `measurement_03` | irrigation, withdrawal and conditioning water | Volume or mass | m3 or kg | Keep delivered irrigation, source withdrawal, process or washing water, recirculation, discharge and retained solids separate; document meter readings and any conversion. |
| `measurement_04` | fuel, electricity, cooling and packaging | Activity-specific property | L, kg, MJ, kWh, item or kg | Preserve the original activity unit and carrier or material identity. Convert only with a documented factor and allocate shared equipment, storage or packaging once. |
| `measurement_05` | area, time and perennial establishment | Area-time or duration | ha·year, ha·crop cycle, day or h | State the crop phase and use area-time or duration to allocate establishment, perennial plantings, shared structures and storage burdens to the represented output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed cultivated fruit site and declared crop cycle or perennial production phase, with attributable establishment inputs included where applicable. |
| starting_condition_role | Start of foreground managed biological production before the fruit crop receives site-specific management inputs. |
| product_classification_scope | Cultivated fresh whole fruit within the semantic category Other fruits, n.e.c.; CPC 3.0 / 01359 is a mapping reference only. |
| recursive_input_rule | Stop same-category recursion at a declared purchased planting input, fertilizer or amendment, crop-protection product, utility, packaging material, or treatment service; link a suitable upstream dataset instead of expanding the same category recursively. |
| upstream_dataset_requirement | Provide suitable background datasets for purchased inputs, energy and water supply, packaging, waste or wastewater treatment, and any outsourced service crossing the declared boundary. |
| disclosure | Declare species or botanical group, cultivar or variety group, annual or perennial phase, production system, site, period, gate, route nodes used, output grades and destinations, all actual inputs, water and energy, storage and packaging, losses and residues, allocation, aggregation, and unresolved identities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | foreground start | Start at the managed cultivated fruit site and the declared crop cycle or perennial production phase; include attributable establishment inputs when the represented phase depends on them. | `fao-good-farming-practices`; `iso-14044-2006` |
| `boundary_02` | production and harvest | Include site preparation and management, actual planting material, fertilizer or amendments, crop protection, irrigation, land occupation, field energy, harvest and the hand-off to the first declared post-harvest node. | `fao-fruit-vegetable-production-practices-2024`; `fao-quality-safety-fresh-fruits-2004` |
| `boundary_03` | post-harvest route | Include primary cleaning or washing, drying, grading, sorting, cooling, short storage and packaging only when each activity occurs before the declared gate; keep distribution and logistics outside unless separately declared. | `fao-postharvest-handling-fruits`; `fao-packinghouse-operations-1986` |
| `boundary_04` | recursive inputs and services | Treat purchased materials, utilities, packaging and treatment services as upstream inputs. Do not recurse into another fruit PCR or invent a product identity when the input remains unresolved. | `iso-14044-2006` |
| `boundary_05` | losses, residues and rejects | Keep field losses, culls, downgraded fruit, rejected fruit, wash solids, packaging waste and residuals in the foreground until a documented recovery, co-product, treatment or disposal hand-off is recorded. | `fao-postharvest-handling-fruits`; `mass-balance-identity` |

The managed biological production node is separate from harvesting and conditioning: production creates the crop and
the intended fruit state, harvesting removes and hands off the collected output, and conditioning or grading changes
the post-harvest state. Annual crops and perennial crops must be distinguished. For perennial crops, establishment,
productive phases, replacement, termination and any shared asset or structure allocation are period-indexed rather
than silently assigned to a single harvest.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fruit_site_establishment_and_crop_cycle` | Managed fruit site establishment and crop cycle | required | all cultivated routes | foreground biological production | per 1 kg marketable gate output |
| `fruit_harvest_and_field_handoff` | Fruit harvest and field hand-off | required | fruit is removed from the managed site and transferred to the next node or gate | harvest and collected-output hand-off | per 1 kg harvested fruit and per 1 kg marketable gate output |
| `fruit_primary_conditioning` | Primary fruit conditioning | conditional | cleaning, washing, brushing, drying, sanitation or other raw-to-prepared conditioning occurs before the gate | first post-harvest preparation | per 1 kg conditioned fruit |
| `fruit_grading_and_destination_sorting` | Fruit grading and destination sorting | conditional | incoming fruit is classified into two or more declared quality or destination states before the gate | quality and destination separation | per 1 kg graded fruit |
| `fruit_cold_storage_and_stabilization` | Fruit cold storage and stabilization | conditional | pre-cooling, refrigeration, controlled storage or another stabilization intervention occurs before the gate | preservation and storage | per 1 kg stored fruit and storage day |
| `fruit_packaging_and_gate_handoff` | Fruit packaging and gate hand-off | conditional | packaging or presentation is applied inside the declared boundary before the gate | protected product hand-off | per 1 kg packed gate output |
| `fruit_reject_rework_and_residue_routing` | Fruit reject, rework and residue routing | conditional | rejected, downgraded, recovered or residual material receives a declared route before leaving the boundary | off-spec and residual routing | per 1 kg marketable gate output |

The production mode is seasonal and campaign-based. Each annual crop cycle, perennial phase, harvest campaign,
conditioning batch, storage lot and packaging run is indexed. A packhouse that operates continuously must still link
its shared utilities and changeovers to the fruit campaign or lot; it must not assign a full continuous-run burden to
one fruit output without a documented attribution basis.

### Process: Managed fruit site establishment and crop cycle (`fruit_site_establishment_and_crop_cycle`)

#### Inputs

##### Product flows

###### Planting material used for the declared route (`planting_material_input`)
Record actual seed, seedling, grafted plant, vine, shrub, tree or replacement material by block and establishment event.

- Selected flow: Actual fruit-crop planting material [unmapped]
- Flow property / unit: Count or mass / plant, seed, item or kg
- Amount rule: Purchased, propagated or planted quantity by block, variety group and event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`

###### Agricultural nutrient and fertilizer inputs (`fruit_site_establishment_and_crop_cycle_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_and_amendment_records`
- Sources: `fao-fruit-vegetable-production-practices-2024`

###### Irrigation water delivered to the crop (`irrigation_water_input`)
Record delivered irrigation or fertigation separately from natural-resource withdrawal, with source, block and return flow.

- Selected flow: Irrigation water supply [parameterized]
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or calculated delivered water by block, source and crop period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-good-farming-practices`

###### Electricity supplied to site operations (`site_electricity_input`)
Record pumps, protected cultivation, fans, controls and other included site electricity and allocate shared meters once.

- Selected flow: Electricity supply for fruit production [parameterized]
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter or invoice quantity allocated to the represented crop phase and output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `fao-good-farming-practices`

###### Fuel for field and mobile machinery (`site_mobile_fuel_input`)
Record tractors, sprayers, mowers, pumps and other mobile machinery. Do not count the same activity again in a contractor service.

- Selected flow: Mobile machinery fuel [parameterized]
- Flow property / unit: Fuel or energy / L, kg or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Fuel receipt, tank record, machine-hour calculation or contractor activity by operation and block
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `fao-good-farming-practices`

###### Crop-protection formulations actually used (`crop_protection_input`)
Record each named formulation or biological control product actually applied, including active substance and harvest interval.

- Selected flow: Actual crop-protection formulation [unmapped]
- Flow property / unit: Mass or volume / kg formulation, kg active substance or L
- Amount rule: Purchase and application records by product, event and block
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-fruit-vegetable-production-practices-2024`; `fao-quality-safety-fresh-fruits-2004`

##### Elementary flows

###### Cultivated land occupation (`land_occupation`)
Record productive area and occupation time. Land transformation is separate and is not inferred from occupation.

- Selected flow: Land occupation
- Flow property / unit: Area-time / ha·year or ha·crop cycle
- Amount rule: Productive area multiplied by applicable crop phase duration and allocated to marketable output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_cycle_records`
- Sources: `fao-good-farming-practices`

###### Natural-resource water withdrawal (`water_resource_withdrawal`)
Record source withdrawal separately from delivered irrigation, with source, return flow and consumption basis.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Source-meter or permit record reconciled to delivery and declared return or consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-good-farming-practices`; `mass-balance-identity`

#### Outputs

##### Product flows

###### Fruit grown and available for harvest (`grown_fruit_output`)
Record the intended fruit state before harvest; it becomes the reference output only after all downstream reconciliation.

- Selected flow: Fresh whole fruit of the declared species or botanical group [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated crop-cycle output reconciled to harvest and loss records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_cycle_records`
- Sources: `mass-balance-identity`

##### Waste flows

###### Field residues and unharvested fruit (`field_residue_output`)
Distinguish soil-returned residue, collected recovery, intended co-product and discarded waste by actual fate.

- Selected flow: Field residue or unharvested fruit [unmapped]
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: Measured, sampled or documented quantity by block, phase and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_cycle_records`
- Sources: `mass-balance-identity`

##### Elementary flows

###### Nitrous oxide from managed soils (`soil_nitrous_oxide_emission`)
Record N2O only after nutrient basis, residue fate, receiving medium and one selected method are declared.

- Selected flow: Nitrous oxide to air; reported substance and receiving medium declared
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply one selected IPCC-compatible method to nutrient inputs, residues and indirect pathways
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_and_field_emission_records`
- Sources: `ipcc-2019-refinement-afolu`

###### Ammonia from managed nutrient inputs (`soil_ammonia_emission`)
Record NH3 only when the selected method or measurement supports its receiving medium; do not infer identity from a fertilizer label.

- Selected flow: Ammonia to air; reported substance and receiving medium declared
- Flow property / unit: Mass / kg NH3
- Amount rule: Use documented nutrient input and the selected method or measured emission record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_and_field_emission_records`
- Sources: `ipcc-2019-refinement-afolu`

###### Nitrogen oxides from field activity (`nitrogen_oxides_emission`)
Keep nitrogen oxides separate from N2O and record the reported substance and receiving medium.

- Selected flow: Nitrogen oxides to air; reported substance and receiving medium declared
- Flow property / unit: Mass / kg NOx or reported species
- Amount rule: Use measured or selected method output from declared fuel and nitrogen activity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_and_field_emission_records`
- Sources: `ipcc-2019-refinement-afolu`

###### Nitrate or phosphate release pathway (`nutrient_release_pathway`)
Record a nutrient release only when the receiving compartment and pathway are evidenced. The actual nitrate or phosphate
group is selected during foreground generation; this card remains a single conditional pathway requirement.

- Selected flow: one identified nitrate or phosphate species to one evidenced receiving compartment; create separate foreground exchanges when both occur
- Flow property / unit: Mass / kg emitted species; retain kg N or kg P as a separate calculation basis
- Amount rule: Calculate or measure runoff, drainage or soil pathway from documented nutrient inputs and receiving medium
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_and_field_emission_records`
- Sources: `fao-good-farming-practices`; `mass-balance-identity`

### Process: Fruit harvest and field hand-off (`fruit_harvest_and_field_handoff`)

Harvest is independent because it removes the crop from managed production and creates the collected raw-fruit state handed to conditioning, storage or the gate.

#### Inputs

##### Product flows

###### Fruit available for the harvest campaign (`harvest_fruit_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Fresh whole fruit of the declared species or botanical group [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Crop-cycle output received into each harvest campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot_records`

###### Harvest fuel or machinery energy (`harvest_mobile_fuel_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Mobile harvest machinery fuel [parameterized]
- Flow property / unit: Fuel or energy / L, kg or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Harvest-operation fuel record or allocated contractor activity by campaign and lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `fao-good-farming-practices`

#### Outputs

##### Product flows

###### Harvested raw fruit handed off (`harvested_fruit_output`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Fresh whole fruit of the declared species or botanical group [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed harvested fruit by lot at the declared hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot_records`

##### Waste flows

###### Harvest losses and incidental material (`harvest_losses`)
Distinguish dropped, damaged or unharvestable fruit from material intentionally collected for another destination.

- Selected flow: Harvest loss or incidental fruit stream [unmapped]
- Flow property / unit: Mass / kg wet fruit or material
- Amount rule: Weighed, sampled or documented harvest loss by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot_records`
- Sources: `mass-balance-identity`

### Process: Primary fruit conditioning (`fruit_primary_conditioning`)

This conditional node covers cleaning, washing, brushing, drying, sanitation or another raw-to-prepared change before the gate.

#### Inputs

##### Product flows

###### Harvested raw fruit received (`conditioning_fruit_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Fresh whole harvested fruit [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipt into the conditioning batch or line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

###### Conditioning water (`conditioning_water_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Process or washing water [parameterized]
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Batch or line meter allocated to the represented fruit lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-postharvest-handling-fruits`; `fao-quality-safety-fresh-fruits-2004`

###### Conditioning electricity (`conditioning_electricity_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Conditioning electricity supply [parameterized]
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter, invoice or equipment allocation by lot, shift or throughput
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-postharvest-handling-fruits`

###### Conditioning agents actually used (`conditioning_agent_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Actual conditioning agent [unmapped]
- Flow property / unit: Mass or volume / kg or L
- Amount rule: Named product issue or application record by batch and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-quality-safety-fresh-fruits-2004`

#### Outputs

##### Product flows

###### Prepared fruit handed off (`conditioned_fruit_output`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Prepared fresh whole fruit [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed conditioned output by batch and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

##### Waste flows

###### Conditioning rejects and trim (`conditioning_rejects`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Conditioning reject or trim stream [unmapped]
- Flow property / unit: Mass / kg wet fruit or material
- Amount rule: Weighed reject and trim mass by batch, lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-postharvest-handling-fruits`; `mass-balance-identity`

###### Wash water and wash solids (`conditioning_wastewater`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Wash wastewater and wash solids [unmapped]
- Flow property / unit: Volume and mass / m3 and kg
- Amount rule: Batch record reconciled to supplied water, recirculation, retained solids and discharge
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-quality-safety-fresh-fruits-2004`; `mass-balance-identity`

### Process: Fruit grading and destination sorting (`fruit_grading_and_destination_sorting`)

Grading classifies incoming fruit into declared quality or destination states. Every state needs a hand-off and mass reconciliation.

#### Inputs

##### Product flows

###### Prepared fruit received for grading (`grading_fruit_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Prepared fresh whole fruit [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed intake by grading batch, lot and source hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg graded fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_and_destination_records`

#### Outputs

##### Product flows

###### Marketable fresh fruit at declared grade (`marketable_fresh_fruit_output`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Marketable fresh whole fruit [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted output by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_and_destination_records`
- Sources: `fao-packinghouse-operations-1986`; `fao-postharvest-handling-fruits`

###### Downgraded fruit for a declared use (`downgraded_fruit_coproduct`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Downgraded fruit for declared processing, feed or other use [unmapped]
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Weighed downgraded output by lot, grade and recipient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_and_destination_records`
- Sources: `fao-packinghouse-operations-1986`; `iso-14044-2006`

##### Waste flows

###### Culls and rejected fruit (`grading_culls_and_rejects`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Grading cull or rejected fruit stream [unmapped]
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Weighed rejected mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg graded fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_and_destination_records`
- Sources: `fao-postharvest-handling-fruits`; `mass-balance-identity`

###### Foreign matter removed during sorting (`grading_foreign_matter`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Foreign matter from fruit sorting [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Measured or documented foreign-matter mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg graded fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_and_destination_records`
- Sources: `fao-packinghouse-operations-1986`; `mass-balance-identity`

### Process: Fruit cold storage and stabilization (`fruit_cold_storage_and_stabilization`)

This conditional node applies to pre-cooling, refrigeration or controlled storage inside the declared boundary. Storage after the gate is excluded.

#### Inputs

##### Product flows

###### Graded fruit entering stabilization (`storage_fruit_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Graded marketable fresh fruit [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed input to cold storage by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg stored fruit and storage day
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

###### Electricity for cold storage (`storage_electricity_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Cold-storage electricity supply [parameterized]
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter, invoice or equipment allocation by storage lot and duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg stored fruit and storage day
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`
- Sources: `fao-postharvest-handling-fruits`

###### Stabilization material actually used (`stabilization_material_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Actual stabilization material [unmapped]
- Flow property / unit: Mass or volume / kg or L
- Amount rule: Supplier, maintenance or storage-operation record by lot and duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg stored fruit and storage day
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

#### Outputs

##### Product flows

###### Stabilized fruit dispatched (`stabilized_fruit_output`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Stabilized marketable fresh fruit [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched output after the declared stabilization period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg dispatched gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

##### Waste flows

###### Storage losses and rejected fruit (`storage_losses`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Storage loss or rejected fruit stream [unmapped]
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Opening stock plus receipts minus dispatches and documented rejection by lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg stored fruit
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`
- Sources: `fao-postharvest-handling-fruits`; `mass-balance-identity`

### Process: Fruit packaging and gate hand-off (`fruit_packaging_and_gate_handoff`)

This conditional node applies when fruit is enclosed, protected, labelled or presented before the declared gate. Distribution remains outside this node.

#### Inputs

##### Product flows

###### Fruit received for packaging (`packaging_fruit_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Marketable fresh whole fruit [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: Weighed lot received for packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packed gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Flexible packaging, liners or films (`flexible_packaging_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Flexible packaging for fresh fruit [parameterized]
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Issued packaging mass or item count by lot, capacity, tare, reuse and loss status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packed gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling-fruits`

###### Cartons, boxes or paperboard packaging (`carton_box_packaging_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Carton and box packaging for fresh fruit [parameterized]
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- Amount rule: Supplier specification and issued quantity by lot, with tare, capacity and losses retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packed gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling-fruits`

###### Pallets, crates or reusable handling packaging (`pallet_crate_packaging_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Pallet and crate packaging for fresh fruit [parameterized]
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Asset record allocated by capacity, service life, reuse, return route and lot throughput
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packed gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling-fruits`; `iso-14044-2006`

###### Packaging-line electricity (`packaging_electricity_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Packaging-line electricity supply [parameterized]
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter, invoice or run-time allocation by packaging lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packed gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-packinghouse-operations-1986`

#### Outputs

##### Product flows

###### Packed fresh fruit at the declared gate (`packed_fresh_fruit_output`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Packed or presented fresh whole fruit [unmapped]
- Flow property / unit: Net fruit mass / kg
- Amount rule: Weighed net fruit output at the declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

###### Packaging rejects and material waste (`packaging_waste`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Packaging waste [unmapped]
- Flow property / unit: Mass / kg packaging
- Amount rule: Issued packaging minus used or returned packaging, reconciled to lot records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packed gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling-fruits`; `mass-balance-identity`

### Process: Fruit reject, rework and residue routing (`fruit_reject_rework_and_residue_routing`)

This conditional process makes every rejected state explicit: rework upstream, downgrade, recovery, treatment or disposal. Rework cannot be counted as both reject and accepted output.

#### Inputs

##### Product flows

###### Rejected, downgraded or residual fruit received (`reject_rework_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Rejected, downgraded or residual fruit [unmapped]
- Flow property / unit: Mass / kg wet fruit or material
- Amount rule: Weighed input by producing node, lot, state and destination decision
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_rework_residue_records`
- Sources: `mass-balance-identity`

###### Waste or wastewater treatment service (`waste_treatment_service_input`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Waste or wastewater treatment service [parameterized]
- Flow property / unit: Treatment service / kg, m3 or service unit
- Binding: `parameterized`
- Flow Set: `flow-set.waste-treatment-service`
- Flow Set version: `0.2.0`
- Flow Set group: `wastewater-treatment-service`
- Amount rule: Treatment receipt or service record allocated to the residual or wastewater stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_rework_residue_records`
- Sources: `fao-quality-safety-fresh-fruits-2004`

#### Outputs

##### Product flows

###### Reworked fruit returned upstream (`reworked_fruit_return`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Reworked fruit returned upstream [unmapped]
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Weighed rework return linked to source lot and receiving process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_rework_residue_records`
- Sources: `mass-balance-identity`

###### Declared processing, feed or other fruit co-product (`routed_fruit_coproduct`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Fruit co-product for declared use [unmapped]
- Flow property / unit: Mass / kg wet fruit or material
- Amount rule: Weighed transferred mass by destination, recipient and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_rework_residue_records`
- Sources: `iso-14044-2006`; `mass-balance-identity`

###### Recovered organic material with a documented function (`recovered_organic_material`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Recovered organic material [unmapped]
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: Weighed recovered mass with moisture basis, destination and function
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_rework_residue_records`
- Sources: `iso-14044-2006`; `mass-balance-identity`

##### Waste flows

###### Residual organic waste leaving the boundary (`residual_organic_waste`)
Record this flow as a separate foreground exchange; retain its actual quantity, lot or process state, and destination or gate evidence.

- Selected flow: Residual organic waste [unmapped]
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: Measured residual after documented product, co-product, recovery and rework routing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject_rework_residue_records`
- Sources: `mass-balance-identity`; `fao-quality-safety-fresh-fruits-2004`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | annual and perennial phases | Allocate establishment, perennial plants, structures and shared phases by documented area-time, plant-year, crop-cycle, throughput or another justified physical basis, with period indexing disclosed. | `iso-14044-2006`; `fao-good-farming-practices` |
| `allocation_02` | shared farm, packhouse and campaign resources | Attribute shared meters, machinery, storage, conditioning lines and changeovers once using measured activity, run-time, throughput or area; retain batch linkage. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_03` | marketable and downgraded fruit | Treat marketable fresh fruit as reference output. Treat downgraded or recovered fruit as co-product only when function, destination, quantity, state and hand-off are documented. | `iso-14044-2006`; `fao-packinghouse-operations-1986` |
| `allocation_04` | rework, returns and rejects | Keep burden on off-spec material until its declared rework, downgrade, recovery, treatment or disposal hand-off; never count rework as both reject and accepted output. | `mass-balance-identity`; `iso-14044-2006` |
| `allocation_05` | recovery and substitution | Do not claim avoided production from a destination label alone; require recipient, function, comparable product, quantity, quality, fate and attribution method. | `iso-14044-2006` |

The PCR does not force one allocation method for every route. The dataset must select and justify one method for each
genuine multi-output boundary, apply it consistently, and disclose sensitivity where material. In a single-output route,
culls and residues remain loss or waste unless their intended function is evidenced.

## 8. Foreground Data Collection, Calculation, and Quality Rules

The first dataset is produced from primary records. Annual crops are linked to their crop cycle and harvest campaign;
perennial crops link establishment, productive phases, replacement and termination events to the reporting period.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site_cycle_records` | `fruit_site_establishment_and_crop_cycle` | site, area, cycle, phase, output and residues | block register and field log | site; block; species/group; cultivar; system; area; phase; dates; yield; residue; fate | record review and cycle reconciliation | ha; date; year; kg | monthly and cycle close | complete crop cycle or perennial phase | each block | aggregate by block and phase; allocate shared records once | signed logs, block map and yield record |
| `cp_establishment_records` | `fruit_site_establishment_and_crop_cycle` | planting and establishment | nursery invoice, planting log and asset register | material; variety; quantity; date; block; replacement; asset; service life | invoice and register reconciliation | item; kg; date; year | each event | establishment and allocated phases | block and asset | reconcile purchased, planted, replaced and surviving material | supplier record and planting log |
| `cp_nutrient_and_amendment_records` | `fruit_site_establishment_and_crop_cycle` | fertilizer and amendments | purchase, label, plan, application log and laboratory result | product; quantity; moisture; N; P2O5; K2O; date; block; area | document review and nutrient calculation | kg product; kg nutrient | each application | complete cycle or phase | each block | sum actual products and calculate nutrients once | invoice, label, plan or lab result |
| `cp_crop_protection_records` | `fruit_site_establishment_and_crop_cycle` | crop protection | purchase and application record | product; formulation; active; quantity; date; block; area | record reconciliation | kg; L; date | each application | complete cycle or phase | each block | sum by named formulation and active substance | label, invoice and application log |
| `cp_irrigation_records` | `fruit_site_establishment_and_crop_cycle` | irrigation and withdrawal | meter, pump, permit and irrigation log | source; meter; block; method; delivered; withdrawn; return; date | meter review and water-balance calculation | m3; date | event or monthly | complete cycle or phase | source and block | reconcile withdrawal, delivery, return and consumption | calibrated meter and worksheet |
| `cp_energy_and_fuel_records` | `fruit_site_establishment_and_crop_cycle`, `fruit_harvest_and_field_handoff` | site and harvest energy | utility bill, fuel receipt, tank log or contractor record | carrier; equipment; operation; quantity; hours; date; block; campaign | invoice, meter and operation-log review | kWh; L; kg; MJ; h | monthly and campaign | complete cycle and harvest | site, block and equipment | allocate by use, hours, area or throughput; prevent duplicate inclusion | invoice, meter and allocation worksheet |
| `cp_nutrient_and_field_emission_records` | `fruit_site_establishment_and_crop_cycle` | nutrient and elementary flows | nutrient plan, tests, emission worksheet and factor record | N/P; residue; soil; climate; pathway; medium; factor; method; period | method calculation and evidence review | kg nutrient; kg substance | application and cycle close | complete cycle or phase | block and receiving compartment | apply one selected method and de-duplicate pathways | worksheet and factor reference |
| `cp_harvest_lot_records` | `fruit_harvest_and_field_handoff` | harvested output and loss | harvest ticket, scale and lot record | lot; block; date; species/group; cultivar; maturity; harvested; loss; destination; hand-off | scale reconciliation and lot review | kg; date; lot | each lot | all harvests | block and harvest operation | reconcile output to harvested, lost and transferred amounts | calibrated scale and traceability record |
| `cp_conditioning_records` | `fruit_primary_conditioning` | raw input, prepared output, water, energy, agents, rejects and wastewater | batch sheet, meter, sanitation and discharge record | batch; lot; input; output; water; recirculation; agent; energy; reject; solids; discharge; date | batch mass balance and document review | kg; m3; kWh; L | batch or shift | all included conditioning | line, site and lot | reconcile intake to output, rejects, solids, water and wastewater | batch sheet, scale, meter and discharge record |
| `cp_grading_and_destination_records` | `fruit_grading_and_destination_sorting` | grade, marketable output, co-product, cull and foreign matter | grading sheet, scale and recipient record | input; grade; maturity; accepted; downgraded; cull; foreign matter; recipient; destination; date | weighed grade reconciliation | kg; date; lot | each lot or run | all included grading | line, site and lot | enumerate destinations and reconcile to input | scale, grade sheet and receipt |
| `cp_storage_records` | `fruit_cold_storage_and_stabilization` | storage input, output, duration, energy, material and loss | cold-room log, logger, inventory and dispatch record | lot; mode; temperature; start; end; input; output; loss; reject; energy; material | logger and inventory reconciliation | kg; kWh; day; °C | each lot and day | declared storage period | cold room and gate | reconcile opening stock, receipts, dispatch and loss | logger, inventory and dispatch ticket |
| `cp_packaging_records` | `fruit_packaging_and_gate_handoff` | product, packaging, energy and waste | package specification, issue record, asset register and dispatch ticket | lot; format; material; tare; item; capacity; reuse; return; loss; energy; net fruit; date | package issue and net-output reconciliation | kg; item; kWh; date | lot, campaign or dispatch | all included packaging | line, site and lot | allocate reusable assets over service life and reconcile used, returned and waste | package specification and issue record |
| `cp_reject_rework_residue_records` | `fruit_reject_rework_and_residue_routing` | rejected, downgraded, recovered, reworked and residual material | reject log, rework ticket, recipient, treatment and disposal record | source; lot; state; wet/dry mass; moisture; destination; recipient; function; treatment; date; return link | weigh and destination review with graph reconciliation | kg; m3; date | each event and period close | all included routing | source node, site and recipient | one declared route per source stream; prevent double counting | scale, ticket, receipt or treatment record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | all inventory rows | `normalized amount = amount × 1,000 kg / net marketable gate output`; retain the original process-output or storage-duration basis. | raw amount; net marketable gate output; basis | normalized amount | `mass-balance-identity` |
| `calc_02` | fertilizer and amendments | `nutrient amount = product mass × declared nutrient fraction`, or documented laboratory result; retain product and nutrient bases separately. | product mass; composition or result | product and nutrient amounts | `fao-fruit-vegetable-production-practices-2024` |
| `calc_03` | irrigation, withdrawal, conditioning and wastewater | Reconcile source withdrawal, delivery, recirculation, evaporation or consumption, retained solids and discharge; do not count one meter twice. | meters; batch records; return and discharge | water and wastewater amounts | `fao-good-farming-practices`; `mass-balance-identity` |
| `calc_04` | annual and perennial phases | Allocate establishment, assets and shared phases by declared area-time, plant-year, crop-cycle, throughput or other physical basis and link each item to its period or phase. | area; duration; phase; assets; output | period-attributed inventory | `iso-14044-2006` |
| `calc_05` | harvest through reject routing | Reconcile input to marketable output, co-product, culls, residues, rework, storage loss, packaging waste, wastewater solids and documented loss, with moisture and tare explicit. | lot weights; destination; moisture; tare | mass-balance result | `mass-balance-identity`; `fao-postharvest-handling-fruits` |
| `calc_06` | nutrient and fuel elementary flows | Apply one selected method or measured result to documented nutrient, residue, fuel, receiving medium and period data; do not duplicate pathways. | records; factors; method; medium | elementary-flow amounts | `ipcc-2019-refinement-afolu` |
| `calc_07` | reusable packaging and shared assets | `allocated asset = asset mass or service × represented throughput / documented service throughput`, with reuse, return and loss disclosed. | asset; service life; throughput; loss | allocated input | `fao-postharvest-handling-fruits`; `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | all datasets | Declare species or botanical group, cultivar or variety group, production system, site, geography, annual or perennial phase, period, gate and route nodes. | block register and dataset metadata |
| `quality_02` | measured and converted quantities | Prefer calibrated scales and meters, invoices, labels, logs, loggers, receipts and transparent worksheets; retain units, tare, moisture and factors. | primary records and calculation worksheet |
| `quality_03` | cycle, harvest, storage and multi-period routes | Cover the complete declared cycle or phase, all harvest lots, establishment or replacement events, storage periods and included runs; identify gaps. | cycle checklist, lot register and period index |
| `quality_04` | products, co-products, rejects, residues and waste | Reconcile each source stream to one accepted product, co-product, rework, residual, wastewater, packaging waste or documented loss hand-off. | mass balance, grade sheet and destination receipt |
| `quality_05` | nutrient, water and emission rows | Disclose product and nutrient basis, water source and balance, selected emission method, factors, receiving medium, residue fate and unresolved pathways. | nutrient plan, meters, worksheet and source reference |
| `quality_06` | aggregation and publication | Disclose single-site or aggregated scope, shared-resource attribution, collected versus calculated or estimated fields, primary-record share and unresolved identities. | aggregation worksheet and quality note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference flow and metadata | Reject missing species/group, product state, gate, mass basis, maturity or grade, cycle or phase, or other required qualifier; verify product, mass property and unit-group identity before final publication. | `fao-quality-safety-fresh-fruits-2004`; `mass-balance-identity` |
| `validation_02` | boundary and process map | Require managed production, harvest hand-off and declared gate; require explicit inclusion or exclusion of conditioning, grading, storage, packaging and reject routing. | `fao-fruit-vegetable-production-practices-2024`; `fao-postharvest-handling-fruits` |
| `validation_03` | Flow Set rows | Resolve every parameterized row at foreground generation using Flow Set id, version, group, structural coordinate, property, unit, geography, receiving medium or intended use and a verified final UUID. | `mass-balance-identity` |
| `validation_04` | production and post-harvest outputs | Reconcile crop-cycle output, harvested fruit, grades, marketable fruit, co-product, culls, storage loss, residues, rework, wastewater solids, packaging waste and loss; reject double counting. | `mass-balance-identity`; `fao-packinghouse-operations-1986` |
| `validation_05` | multi-output and rejected states | Enumerate every intended output and hand-off; reject recovery credit without function, destination, quantity, quality and attribution decision; require a path for every rejected state. | `iso-14044-2006`; `fao-postharvest-handling-fruits` |
| `validation_06` | periods, storage and campaigns | Link inputs, assets, outputs, replacements, termination events, storage duration, batches and changeovers to the declared period or phase; prevent double attribution. | `iso-14044-2006`; `mass-balance-identity` |
| `validation_07` | nutrient, water and elementary flows | Check actual products and nutrient basis, irrigation versus withdrawal, water balance, receiving media and one emissions method; prevent duplicate nitrogen or water pathways. | `ipcc-2019-refinement-afolu`; `fao-good-farming-practices` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after review, identity resolution and release controls |
| downstream_use | Foreground agricultural and first-hand-off modelling for cultivated fresh whole fruit in the Other fruits, n.e.c. category, with downstream process or lifecyclemodel construction. |
| allowed_use | Studies preserving fruit identity, route, geography, cycle or phase, gate, maturity and grade, nutrient and water bases, storage and packaging scope, destinations, allocation and quality disclosure. |
| excluded_use | Processed fruit, wild-collected fruit, nursery material, retail or consumer stages, unqualified regional substitution, or use without gate, phase and output-fate information. |
| required_metadata | PCR id; CPC reference; species/group; variety group; geography; system; phase; dates; gate; maturity; grade; inputs; nutrient and water basis; crop protection; harvest; conditioning; storage; packaging; destinations; reference amount and unit; allocation; identity status. |
| required_quality_disclosure | Site and period coverage; collected, calculated and estimated fields; primary-record share; meter and scale evidence; water and mass balance; allocation; reuse; emissions method; Flow Set resolutions; unresolved identity findings. |
| update_trigger | Material change in route, production system, phase allocation, irrigation, nutrient or protection practice, conditioning, storage, packaging, reject or recovery route, gate, emissions method or required qualifier. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-fruit-vegetable-production-practices-2024` | official_guidance | FAO, Production practices to increase yield, quality and safety of fruits and vegetables, 2024, <https://www.fao.org/plant-production-protection/news-and-events/news/news-detail/fao-provides-new-guidelines-to-maximize-crop-yields-and-improve-food-safety/en/> | managed production, integrated pest management, water fitness, sanitation and input records |
| `fao-good-farming-practices` | official_guidance | FAO, Good Farming Practices, <https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/good-farming-practices/en/> | soil and nutrient management, irrigation stewardship, land and cycle disclosure |
| `fao-postharvest-handling-fruits` | extension_guidance | FAO/Inpho, Post-harvest handling of fruits, <https://www.fao.org/fileadmin/templates/inpho/documents/AE618e.pdf> | post-harvest sequence, grading, handling, cooling, storage and packaging |
| `fao-packinghouse-operations-1986` | extension_guidance | FAO, Improvement of Post-Harvest Fresh Fruits and Vegetables Handling: Packinghouse Operations, <https://www.fao.org/4/x5403e/x5403e05.htm> | reception, sorting, cleaning, grading, packing, supplier traceability and waste handling |
| `fao-quality-safety-fresh-fruits-2004` | official_guidance | FAO, Improving the quality and safety of fresh fruits and vegetables: a practical approach, <https://www.fao.org/4/y5488e/y5488e0d.htm> | water, fertilizer, crop protection, hygiene, treatment and quality evidence |
| `ipcc-2019-refinement-afolu` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 AFOLU, <https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html> | managed-soil nitrogen, residue and fuel-related elementary-flow methods |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, <https://www.iso.org/standard/38498.html> | system boundary, allocation, co-product function, data quality and attribution disclosure |
| `mass-balance-identity` | method_factor | Declared crop-cycle, lot, water, output, reject, residue and packaging mass-balance reconciliation method | normalization, loss, co-product, reject, wastewater, packaging and double-counting checks |
