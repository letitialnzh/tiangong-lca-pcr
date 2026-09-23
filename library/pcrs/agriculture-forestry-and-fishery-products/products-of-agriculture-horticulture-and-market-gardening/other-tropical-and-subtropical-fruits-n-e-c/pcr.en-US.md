---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-tropical-and-subtropical-fruits-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other tropical and subtropical fruits, n.e.c.

## 1. Scope and Applicability

This PCR covers fresh, whole tropical and subtropical fruit products not assigned to a more specific CPC fruit category. It covers annual or perennial production from declared crop-cycle or orchard establishment through harvest and the declared farm-gate condition. The actual fruit, cultivar or species where known, route, maturity, grade, and farm-gate status must be declared.

It excludes bananas, plantains, dates, figs, avocados, mangoes, guavas, mangosteens, citrus, grapes, nuts, processed fruit, retail distribution, and consumer use where a dedicated PCR or downstream dataset applies.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-tropical-and-subtropical-fruits-n-e-c |
| classification_refs | CPC 3.0:01319 |
| covered_products | Fresh whole tropical and subtropical fruits outside a more specific covered CPC category |
| excluded_products | Dedicated fruit categories; dried, canned, frozen, juiced, fermented, retail-packed, and consumer-ready products |
| representative_product | Fresh whole other tropical or subtropical fruit at the declared farm gate |
| production_route | Annual crop or managed perennial orchard/vine production, followed by harvest and optional farm-gate sorting or packing |
| market_state | Fresh, whole, accepted farm-gate product with declared maturity and grade |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh whole other tropical or subtropical fruit accepted at farm gate |
| How much | 1 kg accepted product |
| How well | Actual fruit identity, cultivar or species where known, maturity, grade, moisture condition, and farm-gate quality |
| How long or cycle | One declared crop cycle or production year; perennial establishment and bearing years are disclosed |
| reference_flow_link | `reference_flow_other_tropical_subtropical_fruit` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fresh whole other tropical and subtropical fruit at farm gate `37b99ed4-6904-421e-8d23-11fe386da258` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual fruit identity; cultivar or species where known; annual or perennial route; region; crop-cycle or orchard-year basis; maturity and grade; farm-gate condition; accepted yield; co-products and rejected-fruit destination |

Missing reference-flow UUID is an identity evidence gap condition for later foreground resolution; it does not change the semantic reference flow or product boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and product-output normalization | Mass | kg | Normalize inventory to 1 kg accepted whole fruit at farm gate. |
| `nutrient_product_and_basis` | fertilizer and soil-amendment input | Product mass and nutrient basis | kg product; kg N, P2O5, or K2O | Record actual product and amount, retain product analysis, and calculate nutrient mass without replacing product mass. |
| `perennial_time_basis` | perennial establishment and bearing production | Area-time and crop-cycle records | ha year; kg accepted fruit | Allocate establishment and non-bearing inputs over disclosed productive years and accepted yield. |
| `water_measurement_basis` | irrigation and withdrawal | Volume | m3 | Prefer meter records; otherwise document the local water balance and distinguish applied irrigation from source withdrawal. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed land or established crop/orchard enters the declared crop cycle; when included, establishment starts with planting material and site preparation records |
| starting_condition_role | Foreground agricultural production start; land history and establishment allocation are disclosed |
| product_classification_scope | CPC 3.0:01319 residual fresh tropical and subtropical fruit family with actual fruit identity declared |
| recursive_input_rule | Record same-category planting material only when it crosses the foreground boundary; disclose self-propagation and allocation to avoid recursive product substitution |
| upstream_dataset_requirement | Use upstream datasets for purchased planting material, fertilizer, crop protection, energy, packaging, and transport when not foreground operations |
| disclosure | State annual/perennial route, establishment inclusion, productive life, crop-cycle or orchard-year basis, accepted yield, farm-gate condition, and residue/reject destinations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_condition` | all processes | Start at the declared crop-cycle or orchard-establishment condition and include foreground inputs and emissions through accepted farm-gate fruit; exclude retail, consumer use, and downstream processing. | `fao-good-agricultural-practices`, `codex-fresh-fruits-vegetables-cxc-53` |
| `boundary_route_disclosure` | annual and perennial routes | Declare establishment, non-bearing years, grafting, or stand replacement; do not mix annual and perennial time bases without an allocation rule. | `fao-good-agricultural-practices` |
| `boundary_recursive_input` | planting material | Record purchased or transferred material at its actual crossing point; self-propagated material requires origin and allocation evidence. | `fao-good-agricultural-practices` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p01319_establishment` | Crop or orchard establishment | conditional | Include when planting, grafting, stand establishment, or site preparation contributes to the declared production period. | establishment and time-basis node | per declared area and allocated accepted output |
| `p01319_cultivation` | Crop and orchard cultivation | required | Include field or orchard management during the crop cycle or productive year. | managed biological production node | per crop-cycle/orchard-year and 1 kg accepted fruit |
| `p01319_harvest_farm_gate` | Harvest and farm-gate conditioning | required | Include harvest, on-farm sorting, temporary protection, and optional farm-gate packing. | harvest and delivery node | per harvested and accepted product mass |

### Process: Crop or orchard establishment (`p01319_establishment`)

#### Inputs

##### Product flows

###### Planting or grafting material supplied (`planting_material_input`)
Record purchased, transferred, or nursery-derived plants, cuttings, seeds, rootstocks, or grafted material crossing into establishment; declare self-propagation and parent-stock allocation.

- Selected flow: Planting or grafting material for the declared route
- Flow property / unit: Mass or item count / kg or item
- Amount rule: measured material by area, block, and establishment year; retain count-to-mass conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per established area and allocated to 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01319_establishment_records`
- Sources: `fao-good-agricultural-practices`

###### Agricultural nutrient and fertilizer inputs (`p01319_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established area and allocated to 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01319_establishment_records`
- Sources: `fao-good-agricultural-practices`; `ipcc-2019-refinement-agriculture`

##### Waste flows

###### Establishment residues sent to a declared destination (`establishment_residue_waste`)
Record removed vegetation, failed plants, rootstock residues, and other establishment biomass leaving the process; retained mulch or compost requires a destination note.

- Selected flow: Establishment biomass residue to declared destination
- Flow property / unit: Mass / kg as received or kg dry matter
- Amount rule: measured or calculated residue mass by area and event
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established area and allocated to 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01319_establishment_records`
- Sources: `fao-good-agricultural-practices`

##### Elementary flows

###### Land occupation by the crop or orchard (`establishment_land_occupation`)
Record area and duration occupied for establishment, including non-bearing time for perennial systems.

- Selected flow: Land occupation for tropical or subtropical fruit production
- Flow property / unit: Area-time / m2*a or ha year
- Amount rule: area multiplied by disclosed occupation duration and allocated over accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established area and allocated to 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01319_establishment_records`
- Sources: `fao-good-agricultural-practices`

#### Outputs

##### Product flows

###### Established crop or orchard capacity transferred to cultivation (`established_production_capacity`)
Record this internal hand-off only when establishment is separated from cultivation; do not count it as saleable product.

- Selected flow: Established crop or orchard production capacity
- Flow property / unit: Area or crop-cycle capacity / ha or crop cycle
- Amount rule: documented establishment completion and production-period allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: linked to declared crop-cycle or orchard-year output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01319_establishment_records`
- Sources: `fao-good-agricultural-practices`

##### Waste flows
##### Elementary flows

### Process: Crop and orchard cultivation (`p01319_cultivation`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`p01319_cultivation_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop-cycle or orchard-year and 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01319_cultivation_records`
- Sources: `fao-good-agricultural-practices`; `ipcc-2019-refinement-agriculture`
- Range: Provisional nutrient QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kg product/ha/year
  - Basis: total products in the declared crop cycle or orchard-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`cultivation_irrigation_input`)
Record applied irrigation when it crosses the boundary; rainfed production records zero applied irrigation with a water-balance basis.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: meter, irrigation schedule, or local water balance by block and year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop-cycle or orchard-year and 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01319_cultivation_records`
- Sources: `fao-good-agricultural-practices`
- Range: Provisional irrigation QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15000
  - Unit: m3/ha/year
  - Basis: applied irrigation in one declared production year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy and mobile machinery fuel supplied (`cultivation_energy_input`)
Record electricity, diesel, gasoline, or contractor activity for pumping and crop management when not included upstream.

- Selected flow: Electricity supply and mobile agricultural machinery fuel
- Flow property / unit: Energy or carrier mass / kWh, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, invoice, fuel log, or contractor activity converted without double counting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop-cycle or orchard-year and 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01319_cultivation_records`
- Sources: `fao-good-agricultural-practices`

###### Crop-protection products supplied (`cultivation_crop_protection_input`)
Record each formulation by product, active ingredient where known, event, and treated area.

- Selected flow: Crop-protection formulation for tropical or subtropical fruit production
- Flow property / unit: Mass of formulation / kg
- Amount rule: sum measured formulation mass by product and event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per crop-cycle or orchard-year and 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01319_cultivation_records`
- Sources: `fao-good-agricultural-practices`

##### Waste flows
##### Elementary flows

###### Water resource withdrawal for irrigation (`cultivation_water_withdrawal`)
Record source withdrawal separately from applied irrigation when source and quantity are known.

- Selected flow: Water resource withdrawal for fruit production
- Flow property / unit: Volume / m3
- Amount rule: source meter or documented water balance without duplicating represented irrigation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop-cycle or orchard-year and 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01319_cultivation_records`
- Sources: `fao-good-agricultural-practices`

#### Outputs

##### Product flows

###### Fresh fruit harvested from the crop or orchard (`harvested_fruit_output`)
Record total harvested fruit by actual identity, maturity, and grade before sorting.

- Selected flow: Fresh whole other tropical or subtropical fruit harvested
- Flow property / unit: Mass / kg
- Amount rule: weigh harvested lots before sorting and retain identity and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per crop-cycle or orchard-year and 1 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01319_harvest_records`
- Sources: `codex-fresh-fruits-vegetables-cxc-53`

##### Waste flows

###### Field and crop residues sent to a declared destination (`field_residue_waste`)
Record prunings, dropped fruit, removed plant parts, and other crop residues leaving the field or orchard.

- Selected flow: Crop residue to declared waste, reuse, or treatment destination
- Flow property / unit: Mass / kg as received or kg dry matter
- Amount rule: measured or calculated residue mass and destination by block and year
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop-cycle or orchard-year and 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01319_cultivation_records`
- Sources: `fao-good-agricultural-practices`, `ipcc-2019-refinement-agriculture`

##### Elementary flows

###### Soil and crop-protection emissions (`cultivation_emission_outputs`)
Calculate relevant air and soil emissions from recorded nutrient and crop-protection inputs using the selected factor method.

- Selected flow: Agricultural emissions to air and soil from cultivation
- Flow property / unit: Mass of substance / kg N2O, NH3, nitrate, or other declared substance
- Amount rule: calculate from input records and retain substance, compartment, and factor basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop-cycle or orchard-year and 1 kg accepted fruit
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_01319_cultivation_records`
- Sources: `ipcc-2019-refinement-agriculture`

### Process: Harvest and farm-gate conditioning (`p01319_harvest_farm_gate`)

#### Inputs

##### Product flows

###### Harvest energy and contracted harvest services (`harvest_energy_input`)
Record harvest fuel, electricity, and contracted equipment not already counted in cultivation.

- Selected flow: Electricity supply and mobile agricultural machinery fuel
- Flow property / unit: Energy or carrier mass / kWh, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: harvest log, meter, invoice, fuel record, or contractor activity allocated to harvested and accepted mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot and 1 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01319_harvest_records`
- Sources: `fao-good-agricultural-practices`

###### Farm-gate packaging and protective materials (`farm_gate_packaging_input`)
Record crates, bins, liners, labels, and other materials used before the declared farm gate; reusable packaging needs service-life evidence.

- Selected flow: Farm-gate packaging function
- Flow property / unit: Mass of packaging material / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: weigh or invoice packaging and allocate reusable items over documented uses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per harvested lot and 1 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01319_harvest_records`
- Sources: `codex-fresh-fruits-vegetables-cxc-53`

##### Waste flows

###### Sorted or rejected fruit sent to a declared destination (`sorted_reject_waste`)
Record fruit rejected at sorting and identify composting, feed, processing transfer, disposal, or another destination; do not count it as reference product.

- Selected flow: Rejected fresh fruit to declared destination
- Flow property / unit: Mass / kg
- Amount rule: weigh rejected lots and retain reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested lot and 1 kg accepted fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01319_harvest_records`
- Sources: `codex-fresh-fruits-vegetables-cxc-53`

##### Elementary flows
#### Outputs

##### Product flows

###### Accepted fresh fruit at farm gate (`accepted_farm_gate_fruit_output`)
Record accepted whole fruit transferred at farm gate with actual identity, maturity, grade, and mass. This is the semantic reference product; its platform UUID requires foreground binding before publication.

- Selected flow: Fresh whole other tropical and subtropical fruit at farm gate
- Flow property / unit: Mass / kg
- Amount rule: weigh accepted lots after sorting and reconcile to harvested mass and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted farm-gate fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01319_harvest_records`
- Sources: `codex-fresh-fruits-vegetables-cxc-53`

##### Waste flows
##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_rejected` | harvested, accepted, and rejected fruit | Separate accepted product, rejected fruit, and co-products by measured mass; do not allocate rejected fruit to the reference product unless explicitly defined as an accepted co-product. | `iso-14044-allocation`, `codex-fresh-fruits-vegetables-cxc-53` |
| `allocation_perennial_establishment` | perennial establishment and productive years | Allocate shared establishment inputs over disclosed productive years and accepted output using stand age and productive-year evidence. | `iso-14044-allocation`, `fao-good-agricultural-practices` |
| `allocation_multiple_fruit_products` | shared field, orchard, irrigation, and machinery records | Allocate by measured accepted mass unless a documented physical-causality rule is more appropriate; report the selected basis. | `iso-14044-allocation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_01319_establishment_records` | `p01319_establishment` | planting, nutrient, residue, land | nursery record, field log, area map | identity; count/mass; area; date; residue; destination | invoice review, field log, area reconciliation | kg, item, ha, year | event and establishment year | full establishment | each block | reconcile area and allocated output | signed records, map, invoice, allocation note |
| `cp_01319_cultivation_records` | `p01319_cultivation` | nutrient, irrigation, energy, protection, residues, emissions | invoice, application log, meter, water balance | product; analysis; amount; date; block; source; energy; active ingredient; destination | invoice capture, meter reading, log review, factor calculation | kg, m3, kWh, L, substance mass | each event; cycle/year aggregate | full declared production period | each block/site | sum events and normalize to accepted output | label, calibration, operator log, factor citation |
| `cp_01319_harvest_records` | `p01319_harvest_farm_gate` | harvest, packaging, rejected, accepted fruit | harvest ticket, scale record, packing log, destination record | identity; lot; harvested; accepted; rejects; grade; maturity; packaging; energy; destination | lot weighing and farm-gate reconciliation | kg, kWh, L, item | lot and season | complete harvest season | each lot/farm gate | harvested = accepted + rejects + other destinations | calibrated scale, lot ticket, grade and destination evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01319_reference_normalization` | all processes | `normalized amount = declared process amount / accepted farm-gate fruit mass` | process amount; accepted mass | amount per kg accepted fruit | `iso-14044-allocation` |
| `calc_01319_nutrient_basis` | nutrient and amendment inputs | `nutrient mass = product mass × declared nutrient fraction`; retain product and nutrient results | product mass; label or laboratory analysis | kg product and nutrient basis | `fao-good-agricultural-practices` |
| `calc_01319_perennial_allocation` | establishment and perennial production | Allocate shared establishment amount over disclosed productive years and accepted output; retain source amount | establishment amount; productive years; output | allocated amount per kg fruit | `iso-14044-allocation` |
| `calc_01319_mass_reconciliation` | harvest and conditioning | `harvested mass = accepted mass + rejected mass + declared other destination mass` | lot weights; destinations | reconciled quantities | `codex-fresh-fruits-vegetables-cxc-53` |
| `calc_01319_emission_factor` | cultivation emissions | Apply declared method factor to recorded nutrient/protection basis and retain substance, compartment, factor, and uncertainty | input basis; factor; compartment | elementary emissions | `ipcc-2019-refinement-agriculture` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01319_identity` | product and material inputs | Declare actual fruit identity, route, grade, and material identity where known; keep identity evidence gap explicit. | product description, invoices, labels |
| `dq_01319_temporal` | crop-cycle and orchard-year data | Cover the complete declared cycle or year and disclose missing events, unusual weather, and non-bearing periods. | season log, stand register, exception note |
| `dq_01319_mass_balance` | harvest, accepted, rejected, and co-products | Reconcile lot masses and document differences beyond site QA tolerance. | scale records, lot tickets, destination records |
| `dq_01319_water_energy` | water and energy | Prefer meters and invoices; document calculation basis, source, carrier, and double-counting controls for estimates. | meter, invoice, water balance, fuel log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01319_reference_qualifiers` | reference product | Reject a data package lacking actual fruit identity, route, farm-gate condition, maturity/grade, and accepted-product basis; evidence gap platform UUID is a follow-up identity item, not a reason to change product meaning. | `codex-fresh-fruits-vegetables-cxc-53` |
| `validation_01319_cycle_completeness` | process map and protocols | Check that establishment, cultivation, and harvest are included or explicitly excluded, and that annual/perennial time basis is consistent. | `fao-good-agricultural-practices` |
| `validation_01319_mass_balance` | harvest and waste rows | Check harvested, accepted, rejected, and other destinations before normalizing to 1 kg accepted fruit. | `codex-fresh-fruits-vegetables-cxc-53` |
| `validation_01319_allocation_disclosure` | shared inputs and co-products | Check that shared records, establishment allocation, co-products, and rejected-fruit destinations state a documented allocation basis. | `iso-14044-allocation` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh whole other tropical and subtropical fruit |
| downstream_use | `secondary_dataset` for farm-gate fruit modelling; `background_dataset` only after regional representativeness and identity review |
| allowed_use | Crop-cycle, orchard-year, farm-gate comparison, hotspot screening, and downstream studies preserving declared fruit identity and qualifiers |
| excluded_use | Retail/consumer footprints, processed fruit without a new processing inventory, substitution across unrelated fruit categories, and datasets omitting accepted-product or route basis |
| required_metadata | actual fruit identity; cultivar/species where known; region; route; production period; establishment inclusion; accepted yield; grade/maturity; water source; nutrient basis; reject destination; reference-flow identity status |
| required_quality_disclosure | temporal coverage, site scope, measured versus calculated values, allocation basis, factor source, uncertainty, identity evidence gaps, and omitted processes |
| update_trigger | verified reference-flow identity, Flow Set taxonomy change, material route/allocation change, new regional evidence, or revised farm-gate quality definition |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO good agricultural practices guidance | establishment, nutrients, water, crop protection, and records |
| `ipcc-2019-refinement-agriculture` | method_factor | 2019 IPCC Refinement agriculture emission-factor methods | managed-soil and residue emission calculations |
| `codex-fresh-fruits-vegetables-cxc-53` | official_guidance | Codex CXC 53 Code of Hygienic Practice for Fresh Fruits and Vegetables | harvest, handling, lot identity, and quality |
| `iso-14044-allocation` | standard | ISO 14044 principles for life-cycle allocation and boundary disclosure | allocation and boundary rules |
