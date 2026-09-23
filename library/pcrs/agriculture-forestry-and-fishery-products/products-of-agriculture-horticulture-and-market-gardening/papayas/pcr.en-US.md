---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.papayas
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Papayas

## 1. Scope and Applicability

This PCR covers fresh whole papayas produced in managed open-field or protected cultivation and delivered at the declared farm gate or first packing-site gate. It starts with the declared production cycle and covers planting-material receipt, crop establishment, crop management, irrigation, nutrient and soil-amendment use, crop protection, harvesting, optional on-farm sorting or washing, and primary packing when these activities occur before the declared gate. It is applicable to papayas sold whole and fresh, including cultivar, size, grade, maturity, and production-route differences that are disclosed in the foreground data package.

It excludes the manufacture of planting material, fertilizers, soil amendments, crop-protection products, fuels, electricity, packaging, transport, storage, retail, consumer use, processing into pulp or juice, and waste treatment beyond the declared gate. Those activities are represented as upstream or downstream datasets when they cross the boundary. Papaya seeds or seedlings are not treated as papaya fruit output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.papayas |
| classification_refs | CPC 3.0:01317 |
| covered_products | Fresh whole papayas from managed cultivation, including farm-gate or first-packing-site presentation before processing |
| excluded_products | Dried, frozen, canned, pulped, juiced, fermented, or otherwise processed papaya; papaya planting material; papaya waste sold as a separate product |
| representative_product | Marketable fresh whole papaya at the declared farm or first packing-site gate |
| production_route | Open-field or protected cultivation followed by harvest and optional primary sorting, washing, cooling, and packing |
| market_state | Fresh, whole, marketable product at a declared gate; cultivar, grade, maturity, and packing state are required qualifiers |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole papaya delivered at the declared farm or first packing-site gate |
| How much | 1 kg of marketable fresh whole papaya |
| How well | Whole fruit meeting the declared cultivar or product identity, maturity, grade, size, trim, washing, cooling, and packaging qualifiers |
| How long or cycle | One declared production cycle and harvest campaign, with all harvest lots linked to the same field or protected unit and gate |
| reference_flow_link | fresh whole papaya at the declared gate; product-flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh whole papaya at farm or first packing-site gate `5f8859fd-4690-4c28-afbe-c4846a84da32` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Papaya identity and cultivar; production country or region; open-field or protected route; field or protected-unit identifier; cycle and harvest dates; planted area; irrigation source and method; nutrient and soil-amendment product and nutrient basis; crop-protection programme; harvested mass; marketable grade and maturity; rejects and residue fate; washing; cooling; packaging; declared gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvested fruit and gate output | Mass | kg | Keep harvested gross mass, marketable papaya, downgraded or rejected fruit, trimming, and field residue as separate quantities. |
| `area_and_cycle_normalization` | establishment and crop management | Area and mass | ha and kg | Record each field or protected unit, planted area, cycle dates, and harvest campaign before normalizing inputs and outputs to marketable product. |
| `nutrient_equivalent_basis` | fertilizer and soil-amendment inputs | Product mass and nutrient mass | kg product, kg N, kg P2O5, or kg K2O | Record the actual product and declared nutrient concentration; preserve whether the model is based on product mass or nutrient equivalent. |
| `irrigation_volume` | irrigation and water withdrawal | Volume | m3 | Distinguish water withdrawn at the source from water delivered to the crop and record rainfall separately when it is modelled. |
| `multiple_harvest_reconciliation` | successive harvests | Mass | kg | Aggregate harvest lots only after linking them to the same field or protected unit, cycle, cultivar, grade, and declared gate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared production plot or protected growing unit receiving papaya seed or seedling material, with prior land use and pre-establishment work disclosed |
| starting_condition_role | Beginning of the declared papaya production cycle |
| product_classification_scope | Fresh whole papayas under CPC 3.0:01317 through the declared farm or first packing-site gate |
| recursive_input_rule | Purchased papaya seed or seedlings are upstream product inputs linked once; they are not recreated as an additional papaya fruit cycle inside this PCR. |
| upstream_dataset_requirement | Use compatible upstream datasets for seed or seedlings, fertilizers and amendments, crop-protection products, irrigation water, energy, packaging, transport, and waste treatment whenever they are used before the declared gate. |
| disclosure | Declare cultivar or product identity, geography, route, field or protected-unit area, cycle dates, irrigation source and method, nutrient basis, crop-protection programme, harvest lots, grade and maturity, washing, cooling, packing, reject destination, residue fate, and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and crop management | Include inputs and direct cultivation exchanges from the declared starting condition through the represented harvest campaign, and allocate them to marketable output from the same declared cycle. | `fao-papaya-production-guidance` |
| `boundary_declared_gate` | harvest and gate handling | End at the declared farm or first packing-site gate; include sorting, trimming, washing, cooling, and primary packaging only when they occur before that hand-off. | `codex-cxc-53-2003` |
| `boundary_soil_emissions` | managed soil and residues | Apply one declared method to nitrogen emissions and avoid double counting fertilizer, amendment, and returned-residue nitrogen. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | field residue and rejects | Record field residue and postharvest rejects by destination; an unspecified reject or residue is not a co-product. | `fao-papaya-production-guidance` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `papaya_crop_establishment` | Papaya crop establishment | required | every represented crop cycle | foreground establishment | planted area, planting-material quantity, and cycle |
| `papaya_crop_management` | Papaya crop management | required | every represented crop cycle | foreground managed biological production | field or protected-unit cycle and marketable output |
| `papaya_harvest` | Papaya harvest and field handling | required | every represented harvest campaign | foreground harvest and field segregation | gross harvest, marketable output, rejects, and residue |
| `papaya_gate_preparation` | Papaya gate preparation and hand-off | conditional | only when sorting, washing, cooling, or primary packing occurs before the declared gate | foreground gate handling | 1,000 kg marketable fresh papaya |

### Process: Papaya crop establishment (`papaya_crop_establishment`)

#### Inputs

##### Product flows

###### Papaya planting material (`papaya_planting_material`)

Record seed, seedling, or grafted planting material entering the declared field or protected unit. Identify the material type and do not treat it as marketable papaya fruit.

- Selected flow: Papaya seed or seedling planting material
- Flow property / unit: Number of items or mass / seedling or kg
- Amount rule: Count or weigh planting material by cultivar, field or protected unit, and cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare or protected unit, then per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_establishment_records`
- Sources: `fao-papaya-production-guidance`

###### Agricultural nutrient and fertilizer inputs (`papaya_crop_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-papaya-production-guidance`
- Range: Provisional establishment nutrient screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 600
  - Unit: kg product/ha or protected-unit cycle
  - Basis: broad screening interval pending product invoices, soil tests, and nutrient declarations
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Land occupation for papaya production (`papaya_land_occupation`)

Record the occupied cultivated area and duration for the declared papaya cycle; distinguish annualized productive occupation from land transformation.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*year
- Amount rule: Planted area multiplied by the occupied fraction of the year represented by the cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_papaya_establishment_records`
- Sources: `fao-papaya-production-guidance`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Papaya crop management (`papaya_crop_management`)

#### Inputs

##### Product flows

###### Crop-cycle irrigation water (`papaya_irrigation_water`)

Record water delivered to the crop by source and irrigation technology, excluding rainfall unless the study explicitly models rainfall as a withdrawal.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter or document delivered irrigation by field or protected unit and cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-irrigation-drainage-paper-56`
- Range: Provisional irrigation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20,000
  - Unit: m3/ha or protected-unit cycle
  - Basis: broad interval dependent on climate, soil, cultivar, crop age, and irrigation technology
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-cycle mobile machinery fuel (`papaya_mobile_fuel`)

Record fuel used by tractors, pumps, sprayers, mowers, and other mobile or field machinery that crosses the cultivation boundary.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Energy or mass / MJ or kg fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Meter, invoice, or equipment log allocated to the papaya field or protected unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-papaya-production-guidance`

###### Crop-protection products (`papaya_crop_protection`)

Record only crop-protection products actually applied, retaining active ingredient, formulation, application rate, and target treatment. The product identity requires foreground binding before publication.

- Selected flow: Papaya crop-protection products
- Flow property / unit: Mass / kg product or kg active ingredient
- Amount rule: Product mass and declared active-ingredient mass by application event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-papaya-production-guidance`

##### Waste flows

##### Elementary flows

###### Crop production water withdrawal (`papaya_water_withdrawal`)

Record source withdrawal when it is distinct from water delivered to the crop and disclose the source type and return or loss treatment.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Source withdrawal meter or documented abstraction volume, reconciled to irrigation delivery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-irrigation-drainage-paper-56`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Managed-soil nitrogen emissions (`papaya_soil_nitrogen_emissions`)

Calculate direct and indirect managed-soil nitrogen emissions from the declared fertilizer, amendment, and returned-residue nitrogen basis using one declared method.

- Selected flow: Managed-soil nitrogen emissions
- Flow property / unit: Mass / kg N or kg N2O-N
- Amount rule: Apply the declared method factor to the documented nitrogen input and retained residue basis; do not duplicate an emission already supplied by an upstream dataset.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `ipcc-2019-managed-soils`

### Process: Papaya harvest and field handling (`papaya_harvest`)

#### Inputs

##### Product flows

###### Harvest containers or field crates (`papaya_harvest_containers`)

Record reusable or single-use harvest containers entering the harvest operation and distinguish reusable service cycles from consumed packaging material.

- Selected flow: Harvest container or crate function
- Flow property / unit: Mass or item-service / kg or container-use
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Count container uses and record material mass when a consumed container crosses the boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_harvest_records`
- Sources: `codex-cxc-53-2003`

##### Waste flows

###### Harvest rejects (`papaya_harvest_rejects`)

Record fruit rejected at harvest or field sorting and identify whether it is left in the field, composted, fed, sold into another product route, or sent to waste treatment.

- Selected flow: Papaya harvest rejects
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Weigh or reconcile rejected fruit by lot and destination; do not credit it as a co-product without a documented receiving route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_harvest_records`
- Sources: `fao-papaya-production-guidance`

##### Elementary flows

###### Field residue (`papaya_field_residue`)

Record non-marketable plant material and fruit residue remaining in or removed from the field, with destination and treatment disclosed.

- Selected flow: Papaya field residue
- Flow property / unit: Mass / kg dry matter or wet biomass
- Amount rule: Weigh, estimate from documented biomass sampling, or calculate from harvested and marketable balances by field and cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_papaya_harvest_records`
- Sources: `fao-papaya-production-guidance`

#### Outputs

##### Product flows

###### Gross harvested papaya (`papaya_gross_harvest`)

Record gross harvested fresh papaya before grading, rejection, trimming, washing, cooling, or primary packing.

- Selected flow: Fresh whole papaya, gross harvested
- Flow property / unit: Mass / kg
- Amount rule: Weigh every harvest lot at the field or harvest-station entry point.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_harvest_records`
- Sources: `fao-papaya-production-guidance`

##### Waste flows

##### Elementary flows

### Process: Papaya gate preparation and hand-off (`papaya_gate_preparation`)

#### Inputs

##### Product flows

###### Gross harvested papaya received for gate preparation (`papaya_gate_input`)

When preparation occurs before the declared gate, reconcile the harvested lot entering sorting, washing, cooling, or primary packing to the harvest process output.

- Selected flow: Fresh whole papaya, gross harvested
- Flow property / unit: Mass / kg
- Amount rule: Reconcile receiving weights to the originating harvest lot and declared gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per gate-preparation campaign and per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_gate_records`
- Sources: `codex-cxc-53-2003`

###### Conditional gate washing water (`papaya_washing_water`)

Record water only when papayas are washed before the declared gate, including the treatment or discharge destination of the used water.

- Selected flow: Process water for papaya washing
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter or batch record for water entering the washing operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable output washed before the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_gate_records`
- Sources: `codex-cxc-53-2003`

###### Conditional primary packaging (`papaya_primary_packaging`)

Record only primary packaging applied before the declared gate, including material, mass, reusable cycles, and packaging loss.

- Selected flow: Primary packaging function for fresh papaya
- Flow property / unit: Mass or item-service / kg or package-use
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- Amount rule: Count packages and record consumed material mass per marketable output lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable output packed before the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_gate_records`
- Sources: `codex-cxc-53-2003`

##### Waste flows

###### Gate preparation wastewater or wash loss (`papaya_gate_wastewater`)

Record wastewater or wash-related product loss generated before the declared gate and link it to the treatment or discharge route.

- Selected flow: Papaya gate-preparation wastewater or wash loss
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Measure or reconcile wastewater and wash loss from the gate-preparation batch balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable output washed before the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_papaya_gate_records`
- Sources: `codex-cxc-53-2003`

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh whole papaya at the declared gate (`papaya_marketable_output`)

Record the accepted marketable output after the declared grading, optional washing, cooling, and primary packing steps.

- Selected flow: Fresh whole papaya at farm or first packing-site gate
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted lot weights after grade, maturity, and presentation decisions at the declared gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: reference flow of 1 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_gate_records`
- Sources: `codex-cxc-53-2003`

##### Waste flows

###### Gate rejects and packaging loss (`papaya_gate_rejects`)

Record downgraded fruit, trimming, damaged fruit, and packaging loss rejected before the declared gate and identify each destination.

- Selected flow: Papaya gate rejects and packaging loss
- Flow property / unit: Mass / kg wet fruit or kg packaging
- Amount rule: Reconcile received mass, accepted output, rejects, and measured process loss for each gate-preparation lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_papaya_gate_records`
- Sources: `codex-cxc-53-2003`

##### Elementary flows

## 7. Allocation and Co-product Handling

- `allocation_marketable_output`: Allocate crop-cycle inputs and direct cultivation exchanges to marketable fresh papaya using marketable mass as the primary output basis. `source_ids`: `iso-14044-2006`.
- `allocation_rejects`: Treat field and gate rejects as waste unless a documented receiving route creates a separately specified co-product. Do not assign avoided-product credit within this PCR. `source_ids`: `iso-14044-2006`, `fao-papaya-production-guidance`.
- `allocation_reusable_containers`: Model reusable harvest containers and crates by recorded service cycles; assign their production burden across documented uses and retain consumed packaging as a separate input. `source_ids`: `iso-14044-2006`, `codex-cxc-53-2003`.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_papaya_establishment_records` | `papaya_crop_establishment` | planting material and occupied area | field establishment record | cultivar; material type; supplier; quantity; field or protected-unit id; planted area; cycle start | supplier record, planting log, and area register | seedling, kg, ha | each cycle | full declared crop cycle | each represented field or protected unit | reconcile planted quantity and area to the same cycle | purchase record, planting log, and field map |
| `cp_papaya_input_records` | `papaya_crop_management` | water, fuel, nutrient products, crop protection, and emissions basis | input and application record | product; formulation; nutrient or active ingredient; quantity; source; application date; irrigation meter; fuel meter; field id | invoice review, meter reading, application log, and source register | kg product, kg nutrient, m3, MJ, kg fuel | each application or meter period | full declared cycle | each represented field or protected unit | sum applications and meter periods after field and cycle reconciliation | invoices, meters, calibration checks, and application records |
| `cp_papaya_harvest_records` | `papaya_harvest` | containers, harvest, rejects, and residue | harvest lot and residue record | lot id; date; field id; gross mass; grade; reject mass; residue mass; container use; destination | calibrated scale, lot sheet, container log, and residue estimate | kg and container-use | each harvest lot | full harvest campaign | each harvest lot | aggregate only lots sharing field, cycle, cultivar, grade, and gate | scale check, lot reconciliation, and destination evidence |
| `cp_papaya_gate_records` | `papaya_gate_preparation` | receiving, washing, packaging, output, and gate rejects | packing or gate batch record | batch id; received mass; wash water; wash loss; packaging type and mass; cooling; accepted mass; reject mass; destination; gate | batch sheet, water meter, packaging issue record, and scale | kg, m3, package-use | each gate batch | full period before declared hand-off | each declared farm or first packing-site gate | reconcile batch input to accepted output and separately identified losses | scale and meter checks, packaging records, and destination records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_marketable_normalization` | all processes | Normalize each collected quantity to the accepted marketable papaya mass at the declared gate: `quantity / marketable_gate_mass`. | field, cycle, lot, and gate records | quantity per kg or 1,000 kg marketable papaya | `iso-14044-2006` |
| `calc_nutrient_equivalent` | fertilizer and soil amendments | `product_mass × declared nutrient fraction`; retain product mass and nutrient-equivalent result as separate fields. | product invoice, formulation, and declared N/P2O5/K2O fraction | product mass and nutrient mass | `fao-papaya-production-guidance` |
| `calc_soil_nitrogen_emissions` | managed soil emissions | Apply one selected IPCC-compatible factor method to documented nitrogen inputs and returned residue nitrogen, with no duplicate upstream emission. | nutrient records, residue basis, method factor | declared soil-emission flows | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest and gate preparation | `gross harvested mass = marketable output + rejects + residue or process loss`, with any documented stock change shown separately. | harvest lots, gate batches, reject and residue records | reconciled mass-balance check | `codex-cxc-53-2003` |
| `calc_reusable_container_burden` | harvest containers and crates | Divide container production burden by documented service cycles and assign the used-cycle share to the represented papaya output. | container mass, material, expected or observed service cycles | container burden per declared output | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all product and input flows | Declare cultivar, material or product identity, field or protected-unit id, gate, and identity evidence gap status where no fixed or parameterized binding exists. | source records, labels, invoices, and dataset metadata |
| `quality_measurement` | mass, water, fuel, nutrient, and packaging rows | Use calibrated scales or meters where available; otherwise document the estimation method, conversion factor, and uncertainty. | calibration record, meter log, or estimation worksheet |
| `quality_temporal` | all processes | Cover the complete declared production cycle and harvest campaign, and disclose missing periods or substituted records. | cycle calendar, lot register, and data-quality note |
| `quality_completeness` | inventory and emissions | Reconcile field inputs, harvest, accepted output, rejects, residue, water, nutrient basis, and packaging to the declared gate. | mass balance, application log, and gate batch reconciliation |
| `quality_disclosure` | dataset package | Preserve all required qualifiers, boundary decisions, allocation choice, Flow Set bindings, and identity evidence gap coverage in dataset metadata. | dataset metadata and PCR conformance checklist |

## 9. Validation Rules

- `validation_identity`: The dataset must identify papaya cultivar or product category, field or protected unit, production route, cycle, declared gate, and all evidence gap input or output identities. `source_ids`: `fao-papaya-production-guidance`.
- `validation_mass_balance`: For every harvest and gate batch, gross harvested or received mass must reconcile to marketable output, rejects, residue, wastewater or wash loss, packaging loss, and any disclosed stock change. `source_ids`: `codex-cxc-53-2003`.
- `validation_normalization`: Every normalized inventory value must use the same declared marketable gate mass and must not mix farm-gate and first-packing-site outputs. `source_ids`: `iso-14044-2006`.
- `validation_nutrient_emissions`: Nutrient-equivalent inputs and managed-soil emissions must identify their basis and use one non-duplicative calculation method. `source_ids`: `ipcc-2019-managed-soils`.
- `validation_temporal`: The dataset must cover the represented production cycle and harvest campaign or explicitly disclose missing records and substitutions. `source_ids`: `fao-papaya-production-guidance`.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh whole papaya |
| downstream_use | Secondary dataset for farm-to-gate LCA and background dataset input to product-system models when the declared gate and qualifiers match |
| allowed_use | Comparative or attributional modelling of fresh whole papaya when cultivar, geography, route, cycle, gate, marketable output, and inventory completeness are compatible |
| excluded_use | Processed papaya products; generic fruit substitution; transport, retail, consumer, or end-of-life claims beyond the declared gate; datasets with unreported rejects or residue fate |
| required_metadata | Papaya identity and cultivar, geography, route, field or protected-unit id, cycle dates, area, irrigation source, nutrient and crop-protection basis, harvest and grade, washing, cooling, packaging, reject and residue destinations, declared gate, reference mass, Flow Set bindings, and identity evidence gap coverage |
| required_quality_disclosure | Measurement basis, collection period, completeness, mass-balance result, allocation rule, provisional ranges, data substitutions, uncertainty, and evidence gap UUID or flow identities |
| update_trigger | Change in cultivation route, irrigation system, nutrient or crop-protection programme, harvest or gate handling, packaging, accepted product definition, method factors, or resolved identity mappings |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-papaya-production-guidance` | extension_guidance | FAO crop-production and good-agricultural-practice guidance for tropical fruit production | production-route decomposition, planting, crop management, harvest records, residue handling, and data collection |
| `fao-irrigation-drainage-paper-56` | handbook | FAO Irrigation and drainage paper 56, *Crop evapotranspiration* | irrigation measurement and water-delivery distinction |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, managed soils and nitrogen emissions | managed-soil nitrogen calculation and non-duplication rule |
| `codex-cxc-53-2003` | official_guidance | Codex Alimentarius CXC 53-2003, Code of hygienic practice for fresh fruits and vegetables | harvest, washing, packing, hygiene, batch reconciliation, and gate handling |
| `iso-14044-2006` | standard | ISO 14044:2006, environmental management—life cycle assessment—requirements and guidelines | normalization, allocation, reusable-container treatment, and validation principles |
