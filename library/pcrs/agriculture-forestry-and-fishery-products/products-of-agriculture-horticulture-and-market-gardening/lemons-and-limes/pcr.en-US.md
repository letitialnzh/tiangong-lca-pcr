---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lemons-and-limes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Lemons and limes

## 1. Scope and Applicability

This PCR covers fresh, unprocessed lemons and limes from orchard establishment or the declared productive orchard cycle through cultivation, harvest, optional primary grading, washing or waxing, and hand-off at the declared farm-gate or pack-house gate. It includes orchard inputs, irrigation, crop protection, harvest, primary packaging, and documented residue or reject routing before the gate. It excludes nursery production, processed citrus, retail, consumers, downstream transport, unrelated land conversion, and infrastructure construction. The data package shall declare species, cultivar, geography, orchard age, crop cycle, gate, maturity, grade, handling state, and residue fate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lemons-and-limes |
| classification_refs | CPC 3.0:01322 Lemons and limes |
| covered_products | Fresh, unprocessed lemons and limes at the declared farm-gate or pack-house gate |
| excluded_products | Nursery production; dried, frozen, juiced, canned, preserved or otherwise processed citrus; retail, consumers, downstream transport, unrelated land conversion and infrastructure |
| representative_product | Marketable fresh whole lemon or lime at declared maturity, grade and gate |
| production_route | Orchard establishment or renewal; managed tree and fruit production; irrigation, nutrient, soil-amendment and crop-protection management; harvest; optional grading, washing, waxing and primary packing |
| market_state | Fresh whole fruit in bulk or declared primary packaging at the farm or pack-house gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh lemons and limes at the declared farm-gate or pack-house gate |
| How much | 1,000 kg |
| How well | Fresh and unprocessed; declared species or cultivar, maturity, size or grade, cleanliness, peel condition, washing or waxing and packaging state |
| How long or cycle | One declared production year or orchard crop cycle, including all harvest flushes attributed to that cycle |
| reference_flow_link | `lemons_limes_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh lemons and limes at farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | geography; species and cultivar; orchard route and age; cycle dates; declared gate; maturity, grade and handling state; irrigation; nutrient and crop-protection basis; packaging; residue, reject and wastewater fate |


When constructing a foreground data package, all required qualifiers must be declared in dataset metadata, process notes, reference-flow comments, product description, or an equivalent data-package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvest lots and gate output | Mass | kg | Reconcile harvested fruit, marketable output, rejects, trim, residues and documented loss as separate quantities. |
| `orchard_cycle_normalization` | orchard and crop-cycle records | Area, time and mass | ha, year, kg | Record by orchard block and normalize to marketable output attributed to the same declared cycle. |
| `nutrient_product_basis` | fertilizer and soil amendment | Product mass and nutrient | kg product, kg N, kg P2O5, kg K2O | Record actual product mass and calculate nutrients only from a label, supplier specification, nutrient plan or laboratory result. |
| `water_energy_basis` | irrigation, washing, electricity and fuel | Volume, energy or fuel | m3, kWh, MJ, L | Keep water, electricity and fuel separate and disclose every conversion or shared-equipment allocation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared orchard unit receiving citrus planting material or entering a declared productive cycle; prior land use and excluded infrastructure are disclosed |
| starting_condition_role | Start of orchard establishment, production year or productive crop-cycle accounting |
| product_classification_scope | Fresh lemons and limes under CPC 3.0:01322 through the declared farm-gate or pack-house gate |
| recursive_input_rule | Link purchased planting material once; nursery and propagation remain outside this PCR unless a separate upstream dataset is supplied. Do not recursively expand same-category inputs without evidence. |
| upstream_dataset_requirement | Provide upstream datasets for planting material, nutrients and amendments, crop protection, irrigation water, electricity, fuel, packaging, transport or treatment services when used. |
| disclosure | Declare geography, cultivar, route, orchard age, cycle, irrigation, nutrient and crop-protection program, harvest lots, gate, output reconciliation, handling, packaging, residue and wastewater fate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_orchard_cycle` | establishment and orchard management | Include the declared establishment or productive-cycle renewal, management and inputs that produce the fresh output; exclude unrelated infrastructure. | `fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_farm_gate_conditioning` | harvest and primary conditioning | End at the declared farm or pack-house gate; include grading, washing, waxing and primary packing only when before that gate. | `fao-citrus-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_soil_residue_pathway` | nutrients, soil, residues and rejects | Use one declared nitrogen and residue method; do not double count pathways or claim a residue credit without destination and function evidence. | `ipcc-2019-refinement-afolu`; `fao-citrus-production-guidance` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `citrus_orchard_establishment` | Citrus orchard establishment | required | represented planting, replanting or orchard-unit establishment | foreground orchard establishment | established area and attributed output |
| `managed_citrus_orchard_cycle` | Managed lemon or lime orchard cycle | required | every represented production year or productive cycle | foreground biological production | managed area and harvest |
| `citrus_harvest_and_gate_handling` | Citrus harvest and gate handling | required | represented harvest and declared gate | foreground harvest, conditioning and gate hand-off | 1,000 kg gate output |
| `citrus_residue_and_reject_routing` | Citrus residue and reject routing | conditional | residue, reject, recovery or treatment occurs before the gate | foreground residue and reject fate | measured routed mass |

### Process: Citrus orchard establishment (`citrus_orchard_establishment`)

#### Inputs

##### Product flows

###### Citrus planting material (`planting_material_input`)
Citrus trees, rootstocks or grafted plants cross the establishment boundary as purchased or transferred material.

- Selected flow: Citrus planting material
- Flow property / unit: Count or mass / plant or kg
- Amount rule: Record purchased and planted quantities by orchard block.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources: `fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

###### Agricultural nutrient and fertilizer inputs (`citrus_orchard_establishment_agricultural_nutrient_inputs`)

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
- Sources: `fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

##### Waste flows

##### Elementary flows

###### Orchard land occupation (`establishment_land_occupation`)
The orchard block occupies land during establishment and the burden is allocated to productive cycles.

- Selected flow: Land occupation
- Flow property / unit: Area-time / m2 year
- Amount rule: Orchard area multiplied by the documented establishment allocation period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources: `fao-citrus-production-guidance`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Managed lemon or lime orchard cycle (`managed_citrus_orchard_cycle`)

#### Inputs

##### Product flows

###### Irrigation water (`irrigation_water_input`)
Irrigation water crosses the orchard boundary when used by the represented block.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or supplier-recorded volume allocated to the block.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

###### Electricity for irrigation and equipment (`orchard_electricity_input`)
Purchased electricity used by pumps or orchard equipment is recorded for the represented cycle.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered or invoiced electricity allocated to the block and cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `globalgap-ifa-fruit-vegetables-v6`

###### Mobile machinery fuel (`orchard_fuel_input`)
Fuel used by tractors, sprayers and harvest equipment crosses the boundary when consumed.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or volume / MJ or L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Fuel issue records, tank measurements or invoices allocated to orchard work.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `globalgap-ifa-fruit-vegetables-v6`

###### Agricultural nutrient and fertilizer inputs (`managed_citrus_orchard_cycle_agricultural_nutrient_inputs`)

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
- Sources: `fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

###### Crop-protection product (`crop_protection_input`)
Crop-protection products cross the boundary when purchased or issued for orchard management.

- Selected flow: Crop-protection product
- Flow property / unit: Mass or volume / kg or L
- Amount rule: Record formulated product, active substance when available, date and treated area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `globalgap-ifa-fruit-vegetables-v6`

##### Waste flows

#### Outputs

##### Product flows

###### Fresh lemon or lime orchard output (`orchard_fresh_output`)
Fresh whole lemons or limes leave the managed orchard cycle for harvest handling.

- Selected flow: Fresh lemons and limes
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconcile harvested fruit attributed to the block and cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot_records`
- Sources: `fao-citrus-production-guidance`

##### Waste flows

###### Orchard pruning and field residues (`orchard_field_residue`)
Pruning material, fallen fruit and other orchard residues are recorded with their documented fate.

- Selected flow: Orchard pruning and field residues
- Flow property / unit: Mass / kg wet matter
- Amount rule: Weigh, sample or calculate from the residue management record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

##### Elementary flows

###### Direct soil nitrous oxide (`direct_n2o_emission`)
Record direct soil nitrous oxide when the selected method calculates it from nitrogen inputs.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the selected nitrogen method to documented inputs and disclose the factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_and_amendment_records`
- Sources: `ipcc-2019-refinement-afolu`

###### Soil nitrate loss (`soil_nitrate_loss`)
Record nitrate loss only when supported by the selected nitrogen balance or leaching method.

- Selected flow: Nitrate to soil or water; destination
- Flow property / unit: Mass / kg N or kg nitrate
- Amount rule: Calculate from documented nitrogen balance without duplicating another pathway.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_and_amendment_records`
- Sources: `ipcc-2019-refinement-afolu`

### Process: Citrus harvest and gate handling (`citrus_harvest_and_gate_handling`)

#### Inputs

##### Product flows

###### Conditioning water (`conditioning_water_input`)
Water is recorded for washing, sanitation or optional primary conditioning before the declared gate.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter or record water used for the represented lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `fao-citrus-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6`

###### Primary packaging (`primary_packaging_input`)
Crates, cartons, bags or other primary packaging are included when used before the declared gate.

- Selected flow: Primary packaging
- Flow property / unit: Mass / kg packaging
- Amount rule: Record material and quantity by packaging lot and allocate to packed output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packed gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `fao-citrus-postharvest-guidance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh gate output (`marketable_gate_output`)
Marketable whole fruit leaves at the declared farm-gate or pack-house gate.

- Selected flow: Fresh lemons and limes at declared gate
- Flow property / unit: Mass / kg
- Amount rule: Weigh gate output and reconcile it to harvest, rejects, trim and documented loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg marketable fresh gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot_records`
- Sources: `fao-citrus-postharvest-guidance`

##### Waste flows

###### Cull fruit and trimming waste (`cull_and_trim_waste`)
Rejected, trimmed or handling-loss fruit is recorded as waste with its destination.

- Selected flow: Cull fruit and trimming waste
- Flow property / unit: Mass / kg wet matter
- Amount rule: Weigh or reconcile rejected and trimmed fruit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-citrus-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6`

##### Elementary flows

###### Conditioning wastewater (`conditioning_wastewater`)
Record washing or conditioning wastewater when it leaves the gate-handling process.

- Selected flow: Conditioning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Meter wastewater or calculate from a documented water balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `fao-citrus-postharvest-guidance`

### Process: Citrus residue and reject routing (`citrus_residue_and_reject_routing`)

#### Inputs

##### Product flows
##### Waste flows

###### Residues and rejected fruit (`residue_and_reject_input`)
Documented residues, culls and trim enter this conditional process when their pre-gate fate is modelled.

- Selected flow: Orchard residues and rejected fruit
- Flow property / unit: Mass / kg wet matter
- Amount rule: Transfer separately recorded quantities without double counting product output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-citrus-production-guidance`; `fao-citrus-postharvest-guidance`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered organic material (`recovered_organic_material_output`)
Record compost, mulch, feed or other recovered output only when destination, treatment and function are documented.

- Selected flow: Recovered organic material
- Flow property / unit: Mass / kg wet matter
- Amount rule: Record recovered mass and declare any co-product or substitution claim separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-citrus-production-guidance`

##### Waste flows

###### Residual waste to treatment or disposal (`residual_waste_output`)
Residual waste leaves the conditional routing process when no documented recovery function is assigned.

- Selected flow: Residual waste
- Flow property / unit: Mass / kg wet matter
- Amount rule: Record mass and destination; do not claim a recovery credit without function evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable gate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_records`
- Sources: `fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_orchard_cycles` | establishment and multiple cycles | Allocate shared orchard burdens by documented area-time, tree-year or another justified physical basis and disclose the basis. | `fao-citrus-production-guidance` |
| `allocation_marketable_and_reject_outputs` | harvest and gate handling | Treat marketable fruit as reference output; record downgraded fruit, culls, trim and recovered material separately, and allocate only where a genuine co-product function exists. | `fao-citrus-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6` |
| `allocation_recovered_residue_claim` | recovered residues | Do not claim avoided production unless destination, function, quantity and receiving-system evidence are documented. | `fao-citrus-production-guidance` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `citrus_orchard_establishment` | planting material and area | orchard register and planting log | block_id; species; cultivar; plants; date; area; tree density | document review and field reconciliation | plant, ha, date | each event | establishment and allocated cycles | each block | reconcile purchased, planted and failed plants | supplier lot and field register |
| `cp_irrigation_records` | `managed_citrus_orchard_cycle` | irrigation and withdrawal | meter and pump log | block_id; source; volume; dates; method; allocation | meter readout and allocation review | m3 | event or monthly | full cycle | block and source | sum measured volume and allocate shared meters | calibrated meter |
| `cp_energy_and_fuel_records` | `managed_citrus_orchard_cycle` | electricity and fuel | utility bill and equipment log | equipment; type; quantity; hours; allocation | invoice and log review | kWh, MJ, L | monthly and issue | full cycle | orchard and gate equipment | allocate by hours, area or throughput | invoice or meter |
| `cp_nutrient_and_amendment_records` | `citrus_orchard_establishment`, `managed_citrus_orchard_cycle` | fertilizer and amendments | purchase, application, label and plan | product; mass; N; P2O5; K2O; date; block; area | record review and nutrient balance | kg product and nutrient | application | full cycle | each block | sum actual products and nutrients | label or laboratory result |
| `cp_crop_protection_records` | `managed_citrus_orchard_cycle` | crop protection | spray log and purchase record | product; formulation; active substance; quantity; date; area | record reconciliation | kg or L | application | full cycle | each block | sum product and disclose active substance | label and signed log |
| `cp_harvest_lot_records` | `managed_citrus_orchard_cycle`, `citrus_harvest_and_gate_handling` | harvest and gate output | harvest ticket and scale record | block_id; lot_id; date; species; cultivar; harvested; marketable; grade; rejects | scale reconciliation | kg | each lot | all harvests | block and gate | reconcile harvest, output, rejects and loss | scale and traceability |
| `cp_conditioning_and_packaging_records` | `citrus_harvest_and_gate_handling` | water, energy, packaging and wastewater | pack-house log and invoices | lot_id; water; electricity; material; quantity; wash state; destination | mass balance and document review | m3, kWh, kg | lot or shift | gate period | each gate | allocate utilities and packaging to output | meter and invoice |
| `cp_residue_and_reject_records` | `managed_citrus_orchard_cycle`, `citrus_harvest_and_gate_handling`, `citrus_residue_and_reject_routing` | residues, culls and waste | residue log and destination receipt | source; mass; moisture; destination; treatment; function; date | weighing and destination review | kg wet or dry matter | event or monthly | full cycle | orchard and gate | reconcile source to recovery and residuals | scale and receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_cycle_normalization` | all process rows | `normalized amount = recorded amount / marketable gate output * 1,000 kg`. | block records; dates; gate output | normalized amount | `fao-citrus-production-guidance` |
| `calc_nutrient_basis` | fertilizer and amendment rows | Keep product mass and N, P2O5 and K2O mass separate; calculate only from declared evidence. | product mass; nutrient fractions or result | product and nutrient amount | `globalgap-ifa-fruit-vegetables-v6` |
| `calc_soil_emissions` | soil emission rows | Apply one selected IPCC-compatible nitrogen method to documented inputs and disclose factors and conversions. | N input; factors; qualifiers | elementary-flow amount | `ipcc-2019-refinement-afolu` |
| `calc_mass_reconciliation` | harvest and gate rows | Reconcile harvest, marketable output, rejects, residues, wastewater and documented loss. | lot records; scale; water balance | mass balance | `fao-citrus-postharvest-guidance` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_and_scope` | all datasets | Declare species, cultivar, geography, block, route, orchard age, gate and cycle dates. | orchard and lot registers |
| `quality_measurement_traceability` | measured inputs and outputs | Prefer calibrated meters, scales, invoices, application logs and destination receipts; document shared-record allocation. | primary records and worksheet |
| `quality_temporal_completeness` | full cycle | Cover all harvests and applications and identify missing months, blocks or lots. | cycle completeness checklist |
| `quality_mass_balance` | harvest and handling | Reconcile harvested, marketable, rejected, trimmed, residue, wastewater and documented loss quantities. | lot mass balance |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_qualifiers` | reference flow and dataset | Reject when required species, geography, route, cycle, gate, maturity, grade or handling qualifiers are absent. | `fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6` |
| `validate_cycle_and_output_reconciliation` | cycle and gate output | Check that inputs belong to the declared block and period and that output plus rejects, residues and loss reconcile to harvest. | `fao-citrus-postharvest-guidance` |
| `validate_nutrient_and_emission_basis` | nutrient and emission rows | Check product mass, nutrient basis, factor method and qualifiers; prevent duplicate nitrogen pathways. | `ipcc-2019-refinement-afolu` |
| `validate_gate_and_downstream_exclusion` | boundary and use | Check an explicit gate and exclude retail, consumers, downstream transport and processed citrus. | `globalgap-ifa-fruit-vegetables-v6` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after review and release controls |
| downstream_use | Foreground agricultural modelling for fresh lemons and limes at a declared farm-gate or pack-house gate |
| allowed_use | Use with product, geography, route, cycle, gate, input basis, residue fate and quality qualifiers retained |
| excluded_use | Processed citrus, retail or consumer stages, unqualified regional substitution, or missing gate and cycle scope |
| required_metadata | PCR id; CPC reference; product identity; geography; orchard scope; route; age; cycle dates; gate; grade; inputs; irrigation; residue fate; reference amount and unit |
| required_quality_disclosure | Temporal and site coverage, completeness, primary-record share, allocation, mass reconciliation, factors and identity evidence gaps |
| update_trigger | Change in route, irrigation, nutrient method, cycle allocation, gate handling, packaging or emission method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-citrus-production-guidance` | official_guidance | FAO citrus production and orchard-management guidance | orchard processes, inputs, boundary, and cycle disclosure |
| `fao-citrus-postharvest-guidance` | extension_guidance | FAO citrus post-harvest guidance | harvest, grading, washing, packing, reject, and mass reconciliation |
| `globalgap-ifa-fruit-vegetables-v6` | standard | GLOBALG.A.P. fruit and vegetable assurance requirements | traceability, input, water, nutrient, crop-protection, and quality evidence |
| `ipcc-2019-refinement-afolu` | method_factor | 2019 IPCC Refinement, AFOLU | managed-soil nitrogen methods and emission-pathway disclosure |
