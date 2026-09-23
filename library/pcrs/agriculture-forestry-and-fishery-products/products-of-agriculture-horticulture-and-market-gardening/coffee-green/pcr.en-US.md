---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.coffee-green
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.zh-CN.md
---

# Coffee, green

## 1. Scope and Applicability

This PCR guides foreground data package construction for green coffee produced from cultivated coffee trees and transferred at the declared farm gate, first conditioning mill, or green-coffee warehouse gate. It covers perennial coffee production, cherry harvest, wet, honey or dry primary processing, drying and stabilization, hulling, cleaning, grading, sorting, storage when it occurs before the gate, and documented routing of pulp, mucilage, parchment, husk, wastewater, defects, rejects and losses.

The route applies to Arabica, Robusta and other cultivated coffee species or cultivar groups when the species or group, geography, production system, processing method and gate are declared. Roasted coffee, ground coffee, decaffeinated coffee, instant or soluble coffee, coffee beverages, nursery production, retail packaging, consumer use, spent coffee grounds and post-gate distribution are excluded. Wild collection and land-use change require a separate scope decision.

Wet, honey or semi-washed, and dry or natural processing are alternative route states within this PCR. The data package must identify the route actually used; it must not combine cherry, parchment and green-bean quantities without a lot-level mass balance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.coffee-green` |
| classification_refs | CPC 3.0 `01610`, `Coffee, green` |
| covered_products | cultivated coffee transferred as green, unroasted coffee after the declared first conditioning route |
| excluded_products | fresh coffee cherries without green-coffee conditioning; dry parchment or dry cherry when no green-coffee hand-off is declared; roasted, ground, decaffeinated, soluble or beverage products; nursery material; wild-collected coffee; retail and consumer products |
| representative_product | graded green coffee beans at declared moisture basis and gate |
| production_route | perennial coffee production, cherry harvest, wet/honey/dry processing, drying, hulling, cleaning and grading |
| market_state | green, unroasted coffee in bulk or declared handling packaging at the farm, first mill or warehouse gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | green, unroasted coffee at the declared gate |
| How much | 1 kg |
| How well | species or cultivar group, processing method, green-bean moisture basis, grade, defect criterion, geography, production system and gate declared |
| How long or cycle | one declared crop year and processing campaign; perennial establishment, replacement and termination phases annualized and indexed to the represented crop years |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | coffee species or cultivar group; geography; production system and certification status; orchard or farm block; crop year; processing route; fresh-cherry, parchment and green-bean moisture basis; grade and defect criterion; drying or stabilization state; gate; storage duration when included; residue, reject and wastewater fate |

The reference flow is net green coffee at the declared gate. Tare, foreign matter, packaging, parchment, husk and other non-green-coffee materials are excluded from the reference amount and recorded separately. A foreground package must declare the required qualifiers in dataset metadata, process notes, the reference-flow comment, product description or an equivalent data-package field.

| Attribute | Screening reference | Evidence |
| --- | --- | --- |
| Green-bean moisture | 8-13 percent wet basis; replace with lot measurement | `fao-green-coffee-processing-africa` |
| Processing route | wet/washed, honey/semi-washed, or dry/natural; one route per lot or explicitly separated lot set | `fao-arabica-coffee-manual-lao`; `fao-green-coffee-processing-africa` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | reference product and all coffee states | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record cherry, parchment, husk, pulp, wet-mill input, dry-mill input, green coffee, rejects and residues with a declared as-received or dry-matter basis. Do not mix moisture bases in one mass balance. |
| `measurement_02` | reference product quality | Mass and moisture | kg; percent wet basis | Measure or declare green-bean moisture, grade, defect criterion and sample or lot basis. The screening moisture interval is a QA reference, not a universal fixed value. |
| `measurement_03` | fertilizer, soil amendments and direct nitrogen flows | Product mass and nutrient basis | kg product; kg N | Record formulated product or amendment mass separately from nutrient mass. If emissions are calculated, retain the nutrient basis, application event and selected method. |
| `measurement_04` | irrigation, wet processing and wastewater | Volume or mass | m3 or kg | Keep irrigation delivery, source withdrawal, process water, recirculation, discharge, retained solids and wastewater treatment separate. Preserve meter readings and conversion factors. |
| `measurement_05` | fuel, electricity and drying energy | Carrier-specific property | L, kg, MJ or kWh | Preserve carrier, equipment, operation, run or batch and original unit. Convert only with a documented factor and allocate shared equipment once. |
| `measurement_06` | crop year, perennial phases and processing batches | Area-time, duration and batch identity | ha·year, day, h or batch id | Link establishment, replacement, productive phase, harvest lot, processing run, changeover, storage period and termination events to one declared period or batch. |

## 5. System Boundary

The default foreground boundary starts with the managed coffee production object and its declared crop year or perennial phase. It includes establishment and replacement when attributable to the represented output; soil and nutrient management; irrigation; crop protection; field energy; harvest; primary processing; drying; stabilization; hulling; cleaning; grading; sorting; and storage before the declared gate. Upstream production of fertilizers, crop-protection products, energy, water supply, treatment services and packaging uses background datasets unless the study declares them as foreground.

The boundary ends at green coffee at the declared farm, first mill or warehouse gate. Roasting, grinding, decaffeination, soluble coffee, beverage preparation, retail, consumer use and post-gate distribution are downstream. A dry or natural route may bypass pulping and washing, but it still declares whole-cherry drying, hulling and the associated residue states. A wet or honey route records pulping, fermentation or mucilage removal, washing where used, drying and wastewater treatment or discharge.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | established_orchard_or_coffee_stand_and_declared_crop_year |
| starting_condition_role | perennial_biological_production_condition |
| product_classification_scope | CPC 3.0 `01610`, Coffee, green; unroasted green coffee at the declared gate |
| recursive_input_rule | Coffee in the same product category entering a processing or blending boundary is recorded as a separately identified lot and is not recursively traced into another coffee PCR; purchased coffee used only for blending is outside the default single-origin route and requires explicit scope review |
| upstream_dataset_requirement | Use reviewed upstream datasets for planting material, nutrients, crop protection, water supply, energy, treatment, packaging and transport services when they cross the declared foreground boundary |
| disclosure | Declare farm or mill identity, block or supplier scope, crop year, species or cultivar group, production system, processing route, cherry-to-green mass balance, moisture basis, grade, gate, storage duration, intended outputs, residues, rejects, wastewater and allocation decisions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | managed production | Include the managed coffee stand, crop-year management, actual inputs, field emissions, harvest and the hand-off to primary processing; include establishment, replacement and termination when they are attributable to the declared perennial production period. | `fao-good-farming-practices`; `iso-14044-2006` |
| `boundary_02` | primary processing | Include the route actually used: wet/washed, honey/semi-washed or dry/natural. Identify raw cherry, intermediate parchment or dry cherry, prepared green coffee, water, energy, rejects and wastewater or dry-processing residues. | `fao-arabica-coffee-manual-lao`; `fao-green-coffee-processing-africa` |
| `boundary_03` | drying and storage | Include drying and stabilization before the gate. Record drying technology, weather or energy service, moisture measurements, storage duration and re-wetting, mould or quality-loss events when material. | `fao-ota-coffee-code`; `fao-green-coffee-processing-africa` |
| `boundary_04` | recursive inputs and services | Treat purchased coffee, materials, utilities and treatment services as separately identified upstream inputs. Do not recurse into another green-coffee PCR or invent a fixed identity for an unresolved route-specific exchange. | `iso-14044-2006` |
| `boundary_05` | losses, residues and rejects | Keep cherries lost in the field, pulp, mucilage, parchment, husk, wastewater solids, defects, broken beans, rejected lots and storage losses in the foreground until a documented co-product, recovery, treatment or disposal hand-off is recorded. | `fao-green-coffee-processing-africa`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| coffee_plantation_production | Managed coffee production | required | cultivated coffee route | foreground biological production | per 1 kg green coffee at gate |
| coffee_harvest_and_collection | Coffee cherry harvest and collection | required | coffee cherries are removed from the managed stand and transferred to processing | harvest and collected-output hand-off | per 1 kg harvested cherry and per 1 kg green coffee |
| coffee_primary_processing_and_drying | Primary coffee conditioning, processing and drying | required | green coffee is produced through wet, honey or dry processing before the declared gate | primary conditioning and stabilization | per 1 kg green coffee |
| coffee_hulling_and_grading | Hulling, cleaning and grading | required | parchment, dry cherry or another intermediate is converted to graded green coffee before the gate | prepared-output separation | per 1 kg graded green coffee |
| coffee_storage_and_gate_handoff | Green coffee storage and gate hand-off | conditional | storage or warehouse handling occurs before the declared gate | stabilization, storage and hand-off | per 1 kg green coffee and storage day |

### Process: Managed coffee production (`coffee_plantation_production`)

#### Inputs

##### Product flows

###### Coffee planting material and replacement plants (`coffee_planting_material`)

Record seedlings, cuttings, grafted plants, replacement plants and associated establishment materials by block and event. This row is not a default amount; it is annualized only when the represented phase depends on establishment or replacement.

- Selected flow: coffee planting material [unmapped]
- Flow property / unit: Count or mass / plant, item or kg
- Amount rule: purchased, propagated, planted, replaced and surviving quantity by block and crop phase
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_perennial_phase_records`
- Sources: `fao-good-farming-practices`; `iso-14044-2006`

###### Agricultural nutrient and fertilizer inputs (`coffee_plantation_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_nutrient_records`
- Sources: `fao-good-farming-practices`; `ipcc-2019-refinement-afolu`
- Range: Provisional nutrient-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg product/kg green coffee at gate
  - Basis: broad first-pass farm-input interval; replace with field application records and nutrient balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water delivered to the coffee stand (`coffee_irrigation_water`)

Record delivered irrigation separately from natural-resource withdrawal and rainfall. A verified rain-fed route records a justified zero with source and block evidence.

- Selected flow: Irrigation water supply [parameterized]
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or evidenced delivered water by source, block and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_water_records`
- Range: Provisional irrigation screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/t green coffee
  - Basis: broad first-pass delivered irrigation interval; replace with meter records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`coffee_crop_protection`)

Record named products and active substances used for insects, disease, weeds or other declared crop-protection functions.

- Selected flow: Named crop-protection product or active substance [unmapped]
- Flow property / unit: Mass or volume / kg product or L product
- Amount rule: measured application by product, active substance, date and block
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_crop_protection_records`
- Sources: `fao-good-farming-practices`

###### Field fuel and electricity (`coffee_field_energy`)

Record fuel and electricity for pumping, field machinery, shade or cover management, nutrient application and other included operations.

- Selected flow: Field energy supply [parameterized]
- Flow property / unit: Energy or carrier mass / kWh, MJ, L or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured fuel and electricity by operation, block and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_energy_records`
- Range: Provisional field-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh-equivalent/kg green coffee
  - Basis: broad first-pass field energy interval; replace with operation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Coffee stand land occupation (`coffee_land_occupation`)

Record occupied area, crop phase, shade or intercrop condition and crop year. Land transformation is separate and is not inferred from occupation.

- Selected flow: Agricultural land occupation for coffee [unmapped]
- Flow property / unit: Area-time / ha·year
- Amount rule: measured block area and declared crop phase or productive-year allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_perennial_phase_records`
- Sources: `fao-good-farming-practices`; `iso-14044-2006`

#### Outputs

##### Product flows

###### Coffee cherries available for harvest (`coffee_cherry_crop_output`)

Record coffee cherry production by block, cultivar group, crop year and moisture basis before harvest losses and processing. This is an intermediate output, not the PCR reference flow.

- Selected flow: Coffee cherries, harvested (fresh) `d1d6496d-2d4e-4ccc-b529-aa50bc82da44`
- Binding: `fixed`
- Flow property / unit: Mass / kg fresh cherries
- Amount rule: weighed or transparently estimated crop output by block and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_harvest_lot_records`
- Range: Provisional cherry-to-green screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 0.35
  - Unit: kg green coffee/kg fresh cherry
  - Basis: broad first-pass process-yield interval; replace with lot mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residues and unharvested cherries (`coffee_field_residues`)

Record fallen, damaged, unharvested or otherwise incidental coffee material and its fate. Do not treat a destination label as a co-product claim.

- Selected flow: Coffee field residue or loss [unmapped]
- Flow property / unit: Mass / kg fresh or dry matter
- Amount rule: weighed or calculated difference between crop output, harvested lots and documented field fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_harvest_lot_records`
- Range: Mass-balance screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg residue or loss/kg crop output
  - Basis: crop-output mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

###### Managed-soil and crop-residue emissions (`coffee_field_emissions`)

Record calculated or measured emissions by substance, receiving medium, nutrient or residue source and crop year. Do not duplicate an emission pathway across two methods.

- Selected flow: Managed-soil and crop-residue elementary flows [unmapped]
- Flow property / unit: Mass / kg substance
- Amount rule: selected method applied to collected nutrient, residue, soil and climate records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_emission_records`
- Sources: `ipcc-2019-refinement-afolu`
- Range: Provisional managed-emission screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg substance/kg green coffee at gate
  - Basis: broad first-pass aggregate elementary-flow interval; replace with substance-specific calculation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Coffee cherry harvest and collection (`coffee_harvest_and_collection`)

#### Inputs

##### Product flows

###### Coffee cherries available for collection (`coffee_cherry_harvest_input`)

Record the cherry lot received from the declared coffee stand and retain block, crop year, maturity and moisture information.

- Selected flow: Coffee cherries, harvested (fresh) `d1d6496d-2d4e-4ccc-b529-aa50bc82da44`
- Binding: `fixed`
- Flow property / unit: Mass / kg fresh cherries
- Amount rule: weighed lot input linked to block and harvest date
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_harvest_lot_records`
- Range: Provisional fresh-cherry input screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 2.9
  - Upper: 20
  - Unit: kg fresh cherries/kg green coffee at gate
  - Basis: broad inverse of the provisional cherry-to-green process-yield interval; replace with lot mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest fuel and services (`coffee_harvest_energy`)

Record fuel, electricity, hired harvesting service and field-to-mill handling energy included in the foreground boundary.

- Selected flow: Harvest energy or service [unmapped]
- Flow property / unit: Energy, carrier or service / MJ, kWh, L, kg or service unit
- Amount rule: measured or supplier-recorded quantity by harvest lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_energy_records`
- Range: Provisional harvest-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh-equivalent/kg green coffee
  - Basis: broad first-pass harvest and field-handling interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvested coffee cherry handed to processing (`coffee_harvested_cherry_output`)

Record the collected lot handed to wet or dry processing, including recipient, hand-off time and route state.

- Selected flow: Coffee cherries, harvested (fresh) `d1d6496d-2d4e-4ccc-b529-aa50bc82da44`
- Binding: `fixed`
- Flow property / unit: Mass / kg fresh cherries
- Amount rule: scale ticket or reconciled lot mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_harvest_lot_records`
- Range: Provisional harvested-cherry hand-off interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 2.9
  - Upper: 20
  - Unit: kg fresh cherries/kg green coffee at gate
  - Basis: broad inverse of the provisional cherry-to-green process-yield interval; reconcile to the receiving lot
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest losses and incidental material (`coffee_harvest_losses`)

Record uncollected cherries, damaged material, foreign matter and harvest losses separately from processing residues.

- Selected flow: Harvest loss or incidental material [unmapped]
- Flow property / unit: Mass / kg fresh matter
- Amount rule: measured or mass-balance difference with documented fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_harvest_lot_records`
- Range: Harvest-loss screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg loss/kg harvested-cherry availability
  - Basis: harvest mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

### Process: Primary coffee processing and drying (`coffee_primary_processing_and_drying`)

The processing mode is batch-indexed. The route must identify the raw input state, the prepared or stabilized state and the hand-off. Wet processing may include pulping, fermentation, mucilage removal and washing; honey processing retains part of the mucilage during drying; dry processing dries whole cherries before hulling.

#### Inputs

##### Product flows

###### Raw coffee lot received (`coffee_raw_lot_input`)

Record fresh cherries, wet parchment or another raw lot state at the beginning of the declared primary-conditioning run. Do not mix routes or moisture bases within one run.

- Selected flow: Raw coffee lot [unmapped]
- Flow property / unit: Mass / kg as received
- Amount rule: weighed lot input by processing route and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_processing_batch_records`

###### Process water (`coffee_process_water`)

Record pulping, washing, fermentation, sanitation and other process water separately from irrigation and source withdrawal. Waterless dry processing records zero only with route evidence.

- Selected flow: Process water [parameterized]
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter, batch record or supplier record by processing stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_processing_batch_records`
- Range: Provisional process-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/t green coffee
  - Basis: broad wet-to-dry route interval; replace with batch meter records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Processing and drying energy (`coffee_processing_energy`)

Record electricity, fuel, mechanical energy and drying heat by batch, run, machine and processing stage.

- Selected flow: Processing and drying energy [parameterized]
- Flow property / unit: Energy or carrier mass / kWh, MJ, L or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, fuel receipt, equipment log or supplier service record allocated to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_energy_records`
- Range: Provisional processing-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh-equivalent/kg green coffee
  - Basis: broad first-pass wet/dry processing and drying interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared and stabilized coffee intermediate (`coffee_stabilized_intermediate`)

Record dry parchment, dry cherry, or another stabilized intermediate after the declared drying intervention. This prepared intermediate is an intended output state of primary conditioning, but it is not the reference product until hulling, cleaning and grading produce green coffee.

- Selected flow: Dry parchment or dry coffee cherry [unmapped]
- Flow property / unit: Mass / kg at declared moisture basis
- Amount rule: weighed output by batch and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_processing_batch_records`
- Sources: `fao-arabica-coffee-manual-lao`; `fao-green-coffee-processing-africa`
- Range: Provisional stabilized-intermediate screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 6
  - Unit: kg dry intermediate/kg green coffee at gate
  - Basis: broad first-pass parchment or dry-cherry conversion interval; replace with route-specific batch mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Declared coffee co-product or recovered material (`coffee_processing_coproduct`)

Record pulp, mucilage, compost feedstock, animal-feed material or another intended output only when it has a defined function, recipient, quantity, quality, destination and hand-off. Otherwise record it as residue or waste.

- Selected flow: Coffee processing co-product or recovered material [unmapped]
- Flow property / unit: Mass / kg wet or dry matter
- Amount rule: weighed transferred output by recipient, destination and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_residue_destination_records`
- Sources: `iso-14044-2006`; `mass-balance-identity`
- Range: Provisional declared-co-product screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg co-product/kg green coffee at gate
  - Basis: broad as-received wet or dry co-product interval; replace with destination-specific weighing
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pulp, mucilage, parchment, husk and dry-processing residues (`coffee_processing_residues`)

Record each residue state and route separately. Do not merge wet pulp, mucilage, parchment and dry husk when their moisture, treatment or destination differs.

- Selected flow: Coffee processing residue [unmapped]
- Flow property / unit: Mass / kg wet or dry matter
- Amount rule: measured residual after product and documented co-product routing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_residue_destination_records`
- Range: Residue mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg residue/kg raw coffee input
  - Basis: lot mass balance after green coffee and documented co-product outputs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Processing wastewater and treatment outputs (`coffee_processing_wastewater`)

Record wastewater volume, pollutant or solids basis, treatment service, discharge medium and destination. A dry route records no process wastewater only when the batch route supports that conclusion.

- Selected flow: Coffee-processing wastewater or treatment service [unmapped]
- Flow property / unit: Volume, mass or treatment service / m3, kg or service unit
- Amount rule: meter, treatment receipt, discharge record or calculated batch water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_wastewater_records`
- Sources: `fao-green-coffee-processing-africa`; `mass-balance-identity`
- Range: Provisional process-wastewater screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/t green coffee at gate
  - Basis: broad wet-to-dry route interval; replace with batch meter or treatment records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Hulling, cleaning and grading (`coffee_hulling_and_grading`)

The dry-mill node receives dry parchment, dry cherry or another declared intermediate and produces one or more green-coffee quality or destination states. It must distinguish accepted green coffee, downgraded or separately sold coffee, rework, defects and waste.

#### Inputs

##### Product flows

###### Dried coffee intermediate (`coffee_dry_mill_input`)

Record dry parchment, dry cherry or another declared intermediate received by the dry mill and link it to the preceding processing batch.

- Selected flow: Dry parchment or dry coffee cherry [unmapped]
- Flow property / unit: Mass / kg at declared moisture basis
- Amount rule: weighed batch input linked to primary-processing output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_processing_batch_records`

###### Dry-mill energy and services (`coffee_dry_mill_energy`)

Record hulling, cleaning, sorting and grading energy or service use by dry-mill batch.

- Selected flow: Hulling, cleaning and grading energy or service [parameterized]
- Flow property / unit: Energy or carrier mass / kWh, MJ, L or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, fuel receipt or machine service record allocated to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_energy_records`
- Range: Provisional dry-mill energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh-equivalent/kg green coffee at gate
  - Basis: broad first-pass hulling, cleaning and grading interval; replace with meter or service records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted green coffee at declared grade (`coffee_green_reference_output`)

Record net accepted green coffee by lot, grade, moisture, defect criterion, destination and gate. This is the PCR reference output.

- Selected flow: Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a`
- Flow property / unit: Mass / kg
- Amount rule: weighed accepted green coffee output at declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_grade_lot_records`
- Range: Green-bean moisture QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 8
  - Upper: 13
  - Unit: percent wet basis
  - Basis: green-bean moisture screening interval; replace with lot measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-green-coffee-processing-africa`

###### Downgraded or separately sold coffee output (`coffee_downgraded_coproduct`)

Record downgraded, secondary-grade or separately sold green coffee as a distinct intended output only when it has an independent hand-off and declared function. Do not count it as both accepted reference output and co-product.

- Selected flow: Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: weighed output by grade, recipient and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_grade_lot_records`
- Range: Provisional downgraded-output screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg downgraded coffee/kg green coffee at gate
  - Basis: broad first-pass accepted-grade sorting interval; replace with grade-lot mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Defective beans, foreign matter and hulling waste (`coffee_dry_mill_rejects`)

Record defects, broken beans, parchment, husk, stones, dust and other rejected states with their actual destination or treatment.

- Selected flow: Dry-mill rejects and waste [unmapped]
- Flow property / unit: Mass / kg wet or dry matter
- Amount rule: weighed reject stream or mass-balance difference by batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_residue_destination_records`
- Range: Dry-mill reject screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg rejects/kg dried intermediate input
  - Basis: dry-mill lot mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

### Process: Green coffee storage and gate hand-off (`coffee_storage_and_gate_handoff`)

Include this process only when storage, conditioning warehouse handling or packaging occurs before the declared gate. Storage duration, warehouse conditions and quality loss are batch- or lot-indexed; post-gate transport is excluded.

#### Inputs

##### Product flows

###### Green coffee entering storage (`coffee_storage_input`)

Record the accepted green-coffee lot entering storage with its moisture basis, lot identity and declared storage start.

- Selected flow: Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: weighed lot entering storage with moisture and gate status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_storage_records`
- Range: Provisional storage-input screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg accepted green coffee/kg green coffee at gate
  - Basis: gate output plus a broad storage-loss allowance; replace with lot opening and dispatch records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage energy and handling materials (`coffee_storage_services`)

Record electricity, handling services and packaging materials attributable to the lot and storage duration.

- Selected flow: Storage electricity, handling service or packaging [unmapped]
- Flow property / unit: Energy, mass or service / kWh, kg or service unit
- Amount rule: meter, invoice, handling record or packaging record allocated by lot and storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg green coffee at gate and storage day
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coffee_storage_records`
- Range: Provisional storage-service screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh-equivalent/kg green coffee/storage day
  - Basis: broad first-pass storage electricity and handling interval; replace with lot- and duration-allocated records
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Green coffee dispatched at declared gate (`coffee_gate_output`)

Record the net green-coffee lot dispatched at the declared gate after storage reconciliation.

- Selected flow: Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a`
- Flow property / unit: Mass / kg
- Amount rule: weighed lot dispatched at declared gate, net of tare and documented storage loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_storage_records`

##### Waste flows

###### Storage loss and rejected coffee (`coffee_storage_losses`)

Record mould-affected, rejected or otherwise lost green coffee and its documented destination.

- Selected flow: Storage loss, mould-affected or rejected green coffee [unmapped]
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled loss with moisture and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg green coffee at gate
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coffee_storage_records`
- Range: Storage-loss screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg loss/kg green coffee entering storage
  - Basis: storage lot mass balance
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | perennial coffee production | Allocate establishment, replacement, shade or support systems and shared production phases by documented area-time, plant-year, crop-year, throughput or another justified physical basis. Disclose the represented phases and prevent double attribution across crop years. | `iso-14044-2006`; `fao-good-farming-practices` |
| `allocation_02` | shared farm, wet mill and dry mill resources | Attribute shared meters, machinery, water, storage, operators, cleaning and changeover burdens once using measured activity, run time, batch throughput, lot mass or documented service. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_03` | green coffee and intended co-products | Treat accepted green coffee as the reference output. Apply one documented PCR-specific allocation decision at each genuine multi-output boundary; use physical properties, economic allocation or another justified method consistently and disclose sensitivity when material. | `iso-14044-2006` |
| `allocation_04` | pulp, mucilage, parchment, husk, residues and rejects | Treat a stream as a co-product or recovered material only when function, recipient, quantity, quality, destination and hand-off are documented. Otherwise retain its burden as residue or waste through treatment or disposal. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_05` | rework, downgrade and storage loss | Keep burden on off-spec, reworked, downgraded or storage-loss material until its next declared hand-off; never count a lot as both accepted green coffee and reject, co-product or loss. | `mass-balance-identity` |

The PCR does not force one universal allocation method. The dataset must select and justify one method for each genuine multi-output boundary and apply it consistently. Avoided-production credit is not allowed from a destination label alone; it requires a documented recipient, function, comparable product, quantity, quality and attribution decision.

## 8. Foreground Data Collection, Calculation, and Quality Rules

The first dataset is produced from primary records. Coffee farms and mills must link perennial production phases to crop years, harvested lots to processing batches, and processing batches to green-coffee grades and residue destinations.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coffee_perennial_phase_records` | `coffee_plantation_production` | block, establishment, replacement, productive phase and termination | block register and farm log | block; area; species; cultivar; planting; replacement; shade; phase; dates; crop year | register review and phase reconciliation | ha; plant; date; year | annual and event-based | complete declared perennial phase | each block | allocate phase records once to represented crop years and output | block map, planting record and farm register |
| `cp_coffee_nutrient_records` | `coffee_plantation_production` | fertilizer and amendment | purchase, label, application log and soil record | product; quantity; nutrient; date; block; area; purpose | invoice, label and application reconciliation | kg; L; date | each application | complete crop year | block | sum actual products and calculate nutrients once | invoice, label and field log |
| `cp_coffee_crop_protection_records` | `coffee_plantation_production` | crop protection | purchase and application record | product; active; formulation; quantity; date; block; area | record reconciliation | kg; L; date | each application | complete crop year | block | sum by named product and active substance | label, invoice and application log |
| `cp_coffee_water_records` | `coffee_plantation_production`, `coffee_primary_processing_and_drying` | irrigation, process water, withdrawal and discharge | meter, pump, permit, batch and discharge record | source; meter; stage; block; batch; delivered; withdrawn; return; discharge; date | meter review and water balance | m3; date | event or monthly | complete crop year and all included batches | source, block and mill | reconcile delivery, use, recirculation and discharge once | calibrated meter and water worksheet |
| `cp_coffee_energy_records` | all included processes | fuel, electricity, drying and handling energy | invoice, meter, fuel receipt, machine log or service record | carrier; equipment; process; batch; operation; quantity; date | invoice, meter and run-log review | L; kg; MJ; kWh; h | monthly and batch | complete crop year and all included runs | farm, mill, warehouse and equipment | allocate shared energy by run, lot mass or documented service | invoice, meter and allocation worksheet |
| `cp_coffee_emission_records` | `coffee_plantation_production` | managed-soil, residue and combustion emissions | nutrient, residue, fuel and calculation record | nutrient; residue; climate; soil; pathway; medium; fuel; factor; method | method calculation and evidence review | kg input; kg substance | event and crop-year close | complete crop year | block and receiving medium | apply one selected method and de-duplicate pathways | worksheet and factor reference |
| `cp_coffee_harvest_lot_records` | `coffee_harvest_and_collection` | harvested cherry and field loss | harvest ticket, scale and lot register | lot; block; date; maturity; harvested; loss; moisture; recipient; route | scale reconciliation and lot review | kg; percent; date; lot | every lot | all harvests in the crop year | block and harvest operation | reconcile available, harvested, lost and transferred mass | calibrated scale and lot traceability |
| `cp_coffee_processing_batch_records` | `coffee_primary_processing_and_drying`, `coffee_hulling_and_grading` | route, batch, intermediate and prepared output | batch sheet, scale and mill log | batch; route; input; stage; water; energy; moisture; output; reject; date | batch mass balance and route review | kg; m3; kWh; percent; date | batch or shift | all included processing runs | wet mill, dry mill and lot | link each input to one batch and reconcile all output states | batch sheet, scale and moisture record |
| `cp_coffee_grade_lot_records` | `coffee_hulling_and_grading` | accepted, downgraded, rework and reject states | grading sheet, scale and recipient record | lot; grade; moisture; defect; accepted; downgraded; rework; reject; recipient; date | weighed grade reconciliation | kg; percent; date | lot or run | all included grading | dry mill and recipient | enumerate each destination and prevent double counting | grade sheet, scale and destination receipt |
| `cp_coffee_residue_destination_records` | `coffee_primary_processing_and_drying`, `coffee_hulling_and_grading` | pulp, mucilage, parchment, husk, wastewater solids and waste | residue log, treatment receipt and recipient record | stream; wet/dry basis; quantity; treatment; recipient; function; destination; date | residue mass balance and hand-off review | kg; m3; date | batch and hand-off | all included batches | mill and destination | reconcile raw input to product, co-product, residue, treatment and loss | scale, treatment receipt and destination record |
| `cp_coffee_wastewater_records` | `coffee_primary_processing_and_drying` | wastewater and treatment | meter, lab result, discharge or treatment record | volume; solids; pollutant; treatment; medium; date; batch | meter, lab and treatment review | m3; kg; date | batch or discharge | all included wet-processing batches | mill and receiving medium | apply one discharge or treatment pathway per stream | meter, lab result and receipt |
| `cp_coffee_storage_records` | `coffee_storage_and_gate_handoff` | storage, moisture, handling and loss | warehouse lot, meter, inventory and dispatch record | lot; opening; closing; moisture; days; energy; packaging; loss; gate; date | inventory and moisture reconciliation | kg; percent; day; kWh; date | lot and dispatch | all included storage periods | warehouse and lot | reconcile opening mass, dispatch, loss and closing balance | inventory, moisture and dispatch records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | perennial production | annualized phase burden = attributable establishment, replacement or termination burden × represented phase share / declared allocation basis | phase records; area-time or plant-year; crop-year output | annualized production input | `iso-14044-2006`; `mass-balance-identity` |
| `calc_02` | production and processing normalization | normalized amount = collected amount ÷ net accepted green coffee at the same declared moisture and gate basis | collected amount; accepted green coffee; moisture basis; gate | per-kg reference-flow amount | `mass-balance-identity` |
| `calc_03` | coffee route mass balance | raw coffee input = accepted green coffee + documented co-products + residues + rejects + wastewater solids + losses, after moisture-basis reconciliation | batch input; all output states; moisture and dry-matter records | reconciled batch output | `mass-balance-identity`; `fao-green-coffee-processing-africa` |
| `calc_04` | nutrient and soil emissions | apply one selected factor or method to documented nutrient, residue, soil, climate, pathway and receiving-medium records; do not duplicate the same pathway | nutrient and residue records; method and factor | elementary-flow amount | `ipcc-2019-refinement-afolu` |
| `calc_05` | shared batch or campaign resources | allocate shared energy, water, labor, storage and changeover records once by measured run, lot mass, throughput or documented service | shared record; run; batch; lot; allocation basis | process and lot amount | `iso-14044-2006`; `mass-balance-identity` |
| `calc_06` | storage | storage loss = opening lot mass − dispatched lot mass − documented retained or transferred material, after tare and moisture-basis reconciliation | opening; dispatch; transfer; loss; moisture | storage loss | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | identity and gate | Declare species or cultivar group, geography, production system, farm or mill scope, crop year, processing route, gate, green-bean moisture basis and grade. | block register, mill record and dataset metadata |
| `quality_02` | mass and moisture | Prefer calibrated scales, meters, lot tickets, moisture measurements, invoices and treatment records; retain tare, units, dry-matter basis and conversion factors. | primary records and calculation worksheet |
| `quality_03` | crop years and batches | Cover the complete declared crop year and all included harvest, wet-mill, dry-mill and storage batches; identify missing lots and periods. | crop-year checklist, lot register and batch index |
| `quality_04` | output and residue completeness | Reconcile coffee cherry, parchment, dry cherry, green coffee, grade states, pulp, mucilage, husk, parchment, wastewater, defects, rejects, storage loss and documented destinations. | lot mass balance, grade sheet and destination receipt |
| `quality_05` | allocation | Document each multi-output boundary, selected allocation method, physical or economic basis, co-product function and sensitivity where material. | allocation worksheet and recipient evidence |
| `quality_06` | publication | Disclose collected, calculated and estimated values, primary-record share, unresolved flow identities, water and emission methods, route, gate and update triggers. | quality statement and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference flow and metadata | Reject missing species or cultivar group, geography, crop year, processing route, moisture basis, grade, gate or mass property; verify the Coffee, green flow identity before final publication. | `fao-arabica-coffee-manual-lao`; `mass-balance-identity` |
| `validation_02` | process map and route | Require managed production, harvest hand-off, selected wet/honey/dry route, drying or stabilization state, hulling/grading hand-off and explicit gate. | `fao-arabica-coffee-manual-lao`; `fao-green-coffee-processing-africa` |
| `validation_03` | batch and mass balance | Reconcile every included lot from raw cherry or intermediate through green coffee, intended co-products, residues, wastewater, rejects and loss; reject mixed moisture bases or double counting. | `fao-green-coffee-processing-africa`; `mass-balance-identity` |
| `validation_04` | multi-output boundaries | Enumerate every intended output and hand-off; reject co-product or avoided-production credit without function, recipient, quantity, quality, destination and allocation decision. | `iso-14044-2006` |
| `validation_05` | processing and drying | Check wet, honey or dry route consistency, drying records, moisture measurement, storage condition, re-wetting or mould event and route-specific water use. | `fao-ota-coffee-code`; `fao-green-coffee-processing-africa` |
| `validation_06` | periods, storage and campaigns | Link establishment, replacement, termination, crop year, harvest lot, processing batch, changeover, storage duration and dispatch to one period or phase; prevent double attribution. | `iso-14044-2006`; `mass-balance-identity` |
| `validation_07` | nutrient, water and elementary flows | Verify product versus nutrient basis, irrigation versus withdrawal, process water versus wastewater, receiving medium and one selected emissions method; prevent duplicate nitrogen or water pathways. | `ipcc-2019-refinement-afolu`; `fao-good-farming-practices` |
| `validation_08` | rejects and residues | Require a declared fate for pulp, mucilage, parchment, husk, defects, broken beans, foreign matter, wastewater solids, storage loss and rejected lots; a destination label alone is insufficient. | `fao-green-coffee-processing-africa`; `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after review, identity resolution and release controls |
| downstream_use | Foreground agricultural and first-conditioning modelling for cultivated green coffee, with downstream process or lifecyclemodel construction. |
| allowed_use | Studies preserving coffee identity, species or cultivar group, geography, crop year, processing route, moisture basis, gate, grade, output fate, allocation and quality disclosure. |
| excluded_use | Roasted, ground, decaffeinated, soluble or beverage coffee; wild collection; unqualified regional substitution; use without cherry-to-green mass balance, gate or moisture information. |
| required_metadata | PCR id; CPC reference; species or cultivar group; geography; farm/mill scope; crop year; production system; processing route; intermediate states; moisture; grade; gate; storage; inputs; outputs; residues; wastewater; allocation; reference amount and unit; identity status. |
| required_quality_disclosure | Site and period coverage; collected, calculated and estimated fields; primary-record share; scale, meter and moisture evidence; lot mass balance; water and emissions methods; allocation; Flow Set resolution; unresolved identities. |
| update_trigger | Material change in coffee species or route, production system, nutrient or crop-protection practice, processing technology, drying, water, energy, grade, storage, residue or wastewater route, gate, identity or required qualifier. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-arabica-coffee-manual-lao` | handbook | FAO, Arabica coffee manual for Lao PDR, <https://www.fao.org/4/ae939e/ae939e08.htm> | wet, honey and dry processing sequence; drying, storage and green-coffee hand-off |
| `fao-green-coffee-processing-africa` | handbook | FAO, Post Harvest Handling and Processing of Green Coffee in African Countries, <https://www.fao.org/4/x6939e/X6939e03.htm> | processing states, drying, hulling, grading, defects and route-specific residues |
| `fao-ota-coffee-code` | official_guidance | FAO/WHO, Draft Code of Practice for the Prevention of Ochratoxin A in Coffee, <https://www.fao.org/fileadmin/user_upload/agns/pdf/coffee/guidelines_final_en.pdf> | drying, storage, moisture and mould-risk quality controls |
| `fao-good-farming-practices` | official_guidance | FAO, Good Farming Practices, <https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/good-farming-practices/en/> | managed production, soil, nutrient, irrigation and crop-protection record requirements |
| `ipcc-2019-refinement-afolu` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 AFOLU, <https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html> | managed-soil, residue and fuel-related elementary-flow methods |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, <https://committee.iso.org/standard/38498.html> | system boundary, allocation, co-product function, data quality and attribution disclosure |
| `mass-balance-identity` | method_factor | Declared crop-year, lot, moisture, product, co-product, residue, wastewater and loss reconciliation method | normalization, output completeness and double-counting checks |
