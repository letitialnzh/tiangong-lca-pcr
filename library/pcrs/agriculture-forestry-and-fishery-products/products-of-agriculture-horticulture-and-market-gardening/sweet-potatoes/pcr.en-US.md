---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sweet-potatoes
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Sweet potatoes



## 1. Scope and Applicability

This PCR covers managed production, harvest, careful handling, soil removal, grading, and optional curing or storage of fresh harvested *Ipomoea batatas* storage roots delivered at a farm or primary-conditioning hand-off. Declare uncured/cured state, damage grade, soil-removal state, moisture or as-received basis, and hand-off. Planting slips, vines, and roots for planting cannot be the reference product. Starch, chips, flour, puree, noodles, and other processed products are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sweet-potatoes |
| classification_refs | CPC 3.0: 01530 Sweet potatoes |
| covered_products | Fresh harvested *Ipomoea batatas* storage roots, uncured or cured, at farm or primary-conditioning hand-off |
| excluded_products | Planting material as reference product; starch, chips, flour, puree, noodles, and other processed products |
| representative_product | Marketable fresh storage roots on an as-received mass basis |
| production_route | Managed field production is the parent; harvest independently removes roots; primary conditioning removes soil and grades; curing/storage is optional preservation. Each technology route delta is separately declared. |
| market_state | Fresh unprocessed storage roots with curing, damage, soil-removal, moisture-basis, and hand-off state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh harvested *Ipomoea batatas* storage roots |
| How much | 1,000 kg as received |
| How well | Accepted grade with uncured/cured, damage, and soil-removal state declared |
| How long or cycle | One crop cycle and primary conditioning; add curing/storage duration when applicable |
| reference_flow_link | `primary_conditioning` output for uncured route or `curing_storage` output for cured route |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species = *Ipomoea batatas*; storage root; uncured or cured; damage grade; soil-removal state; moisture or as-received basis; farm or primary-conditioning hand-off; crop cycle; storage duration when applicable |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference and internal root states | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record gross as-received mass and separately record soil, rejects, and moisture basis. |
| `water_volume` | Irrigation, washing, wastewater | Volume or Mass with declared density | m3 or kg | Separate supplied, recirculated, and discharged water and report measurement points. |
| `energy_carrier` | Machinery, electricity, heat, storage utilities | Carrier-appropriate property | MJ, kWh, kg, or L | Preserve actual carriers and conversion basis; do not merge mobile fuel, stationary heat, and electricity. |
| `condition_mass_balance` | Harvest, grading, curing, storage | Mass | kg | Reconcile roots in, accepted roots, downgraded roots, rejects, soil/solids, and measured loss per event or lot. |

## 5. System Boundary

The boundary begins with the prepared managed field for the declared crop cycle and includes planting, crop management, harvest, on-farm movement, soil removal, grading, and hand-off. Include curing/storage only for a cured or stored delivery.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed field with prior crop, land preparation, soil, planting-material source, and rainfed/irrigated state declared |
| starting_condition_role | Starting condition for managed biological production |
| product_classification_scope | Fresh *Ipomoea batatas* storage roots under CPC 3.0 01530 |
| recursive_input_rule | Same-category roots entering from outside require an upstream product dataset with state and gate qualifiers; do not recreate them recursively. |
| upstream_dataset_requirement | Planting material, energy, water, nutrients, transport, and treatment services require compatible upstream datasets selected from concrete foreground records. |
| disclosure | Declare cultivar, location, cycle, route, harvest mode, curing/storage, damage, soil removal, moisture basis, and hand-off. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | Field production | Include crop-cycle management inputs, field operations, intended roots, residues, and losses. | `fao-sweet-potato-postharvest` |
| `boundary_harvest` | Harvest | Independently record removal from managed crop to fresh-root hand-off and distinguish soil, vines, damage, and uncollected losses. | `fao-sweet-potato-postharvest` |
| `boundary_conditioning` | Primary conditioning | Include careful handling, soil removal, washing when used, grading, and every grade and residual destination. | `fao-sweet-potato-postharvest` |
| `boundary_curing` | Curing/storage | Include preservation inputs, conditions, duration, and losses only for cured or stored delivery. | `fao-sweet-potato-postharvest` |
| `boundary_processed_exclusion` | Product scope | Exclude processed foods and planting material as reference product. | `fao-sweet-potato-postharvest` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Managed sweet-potato field production | required | Every package / 每个数据包 | Produces managed crop and standing roots / 生产管理作物和田间储藏根 | kg accepted roots / kg 合格根 |
| `harvest_capture` | Harvest and collection | required | Every package / 每个数据包 | Removes roots and hands them to conditioning / 移出储藏根并交接初级整理 | kg accepted roots / kg 合格根 |
| `primary_conditioning` | Soil removal, grading, and primary hand-off | required | Every package / 每个数据包 | Creates accepted, downgraded, rejected, soil, solid, and wastewater states / 形成合格、降级、剔除、土壤、固体和废水状态 | kg accepted roots / kg 合格根 |
| `curing_storage` | Curing and storage | conditional | Only cured or stored hand-off / 仅熟化或储藏后交接 | Preserves roots and creates cured hand-off / 保存储藏根并形成熟化交接 | kg accepted roots / kg 合格根 |

Index each crop cycle, harvest event, conditioning run, and curing/storage lot. Manual/mechanized, rainfed/irrigated, dry/wet soil removal, and progressive/one-time harvest are route deltas requiring separate topology, inventory, calculation, and validation evidence.

### Process: Managed sweet-potato field production (`field_production`)

#### Inputs

##### Product flows

###### Cultivar-specific planting material (`planting_material`)

Sweet-potato slips, vine cuttings, or planting roots crosses the declared process boundary only under the stated condition.

- Selected flow: Sweet-potato slips, vine cuttings, or planting roots
- Flow property / unit: Declared compatible property / kg
- Identity status: unresolved: resolve cultivar and delivered form from supplier records before exchange emission
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient supply (`nutrient_supply`)

Mineral, organic, and amendment products used in the crop cycle crosses the declared process boundary only under the stated condition.

- Selected flow: Mineral, organic, and amendment products used in the crop cycle
- Flow property / unit: Declared compatible property / kg supplied products
- Binding: parameterized
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set version: 0.3.0
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg supplied products
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supply (`irrigation_water`)

Water delivered for irrigation; rainfall remains site context crosses the declared process boundary only under the stated condition.

- Selected flow: Water delivered for irrigation; rainfall remains site context
- Flow property / unit: Declared compatible property / m3
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: irrigation-water
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: m3
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery energy supply (`field_energy`)

Fuel or energy for land preparation and crop management crosses the declared process boundary only under the stated condition.

- Selected flow: Fuel or energy for land preparation and crop management
- Flow property / unit: Declared compatible property / MJ
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow Set group: mobile-machinery-fuel
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Standing storage roots transferred to harvest (`standing_roots_internal`)

Internal harvest-ready root state crosses the declared process boundary only under the stated condition.

- Selected flow: Internal harvest-ready root state
- Flow property / unit: Declared compatible property / kg
- Identity status: internal: foreground graph link only
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: crop cycle (`crop_cycle`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_cycle_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Field residues and uncollected root losses (`field_residue_loss`)

Vines, leaves, damaged or uncollected roots by destination crosses the declared process boundary only under the stated condition.

- Selected flow: Vines, leaves, damaged or uncollected roots by destination
- Flow property / unit: Declared compatible property / kg
- Identity status: internal/deferred: resolve only recorded boundary-exit destinations
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_cycle_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

###### Reported nutrient-related field emissions (`field_emissions`)

Substance- and receiving-medium-specific emissions crosses the declared process boundary only under the stated condition.

- Selected flow: Substance- and receiving-medium-specific emissions
- Flow property / unit: Declared compatible property / kg reported substance
- Identity status: unresolved: broad emissions cannot justify an elementary UUID
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg reported substance
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Harvest and collection (`harvest_capture`)

#### Inputs

##### Product flows

###### Standing roots from field production (`standing_roots_harvest_input`)

Internal root state linked to the crop cycle crosses the declared process boundary only under the stated condition.

- Selected flow: Internal root state linked to the crop cycle
- Flow property / unit: Declared compatible property / kg
- Identity status: internal: paired foreground graph link
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_event_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest machinery energy supply (`harvest_energy`)

Fuel or energy for lifting, collection, and loading crosses the declared process boundary only under the stated condition.

- Selected flow: Fuel or energy for lifting, collection, and loading
- Flow property / unit: Declared compatible property / MJ
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow Set group: mobile-machinery-fuel
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_harvest_event_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: MJ
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### On-farm road movement service (`harvest_transport`)

Separately modelled movement to conditioning crosses the declared process boundary only under the stated condition.

- Selected flow: Separately modelled movement to conditioning
- Flow property / unit: Declared compatible property / tkm
- Binding: parameterized
- Flow Set: flow-set.transport-service
- Flow Set version: 0.2.0
- Flow Set group: road-freight-transport
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: route specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: transport service (`transport_service`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_harvest_event_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: tkm
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Freshly harvested roots transferred to conditioning (`harvested_roots_internal`)

Fresh lifted roots before soil removal and grading crosses the declared process boundary only under the stated condition.

- Selected flow: Fresh lifted roots before soil removal and grading
- Flow property / unit: Declared compatible property / kg
- Identity status: internal: paired foreground graph link
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_event_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Harvest damage and uncollected losses (`harvest_rejects`)

Cut, bruised, broken, or uncollected roots by destination crosses the declared process boundary only under the stated condition.

- Selected flow: Cut, bruised, broken, or uncollected roots by destination
- Flow property / unit: Declared compatible property / kg
- Identity status: internal/deferred: destination determines product, recovery, or waste identity
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_event_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows


### Process: Soil removal, grading, and primary hand-off (`primary_conditioning`)

#### Inputs

##### Product flows

###### Freshly harvested roots from harvest (`harvested_roots_conditioning_input`)

Internal harvested roots with damage and soil state crosses the declared process boundary only under the stated condition.

- Selected flow: Internal harvested roots with damage and soil state
- Flow property / unit: Declared compatible property / kg
- Identity status: internal: paired foreground graph link
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Washing water supply (`conditioning_water`)

Process water when wet cleaning is used crosses the declared process boundary only under the stated condition.

- Selected flow: Process water when wet cleaning is used
- Flow property / unit: Declared compatible property / m3
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: process-water
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity supply (`conditioning_electricity`)

Electricity for washing, conveying, sorting, grading, or drainage crosses the declared process boundary only under the stated condition.

- Selected flow: Electricity for washing, conveying, sorting, grading, or drainage
- Flow property / unit: Declared compatible property / kWh
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow Set group: electricity-supply
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater treatment service (`conditioning_wastewater_treatment`)

External treatment service for discharged wash water crosses the declared process boundary only under the stated condition.

- Selected flow: External treatment service for discharged wash water
- Flow property / unit: Declared compatible property / m3
- Binding: parameterized
- Flow Set: flow-set.waste-treatment-service
- Flow Set version: 0.2.0
- Flow Set group: wastewater-treatment-service
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Accepted uncured fresh sweet-potato roots (`fresh_reference_product`)

Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057` crosses the declared process boundary only under the stated condition.

- Selected flow: Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Identity status: fixed: detail-confirmed CPC 01530 Product flow with Mass at farm gate
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: fixed value (`fixed_value`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Fixed quantitative-reference amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded roots by declared destination (`downgraded_roots`)

Edible immediate-use, feed, rework, or recovery grades crosses the declared process boundary only under the stated condition.

- Selected flow: Edible immediate-use, feed, rework, or recovery grades
- Flow property / unit: Declared compatible property / kg
- Identity status: internal/deferred: resolve external identity only after destination is known
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Conditioning rejects, soil, wash solids, and wastewater (`conditioning_residuals`)

Separated residual states and destinations crosses the declared process boundary only under the stated condition.

- Selected flow: Separated residual states and destinations
- Flow property / unit: Declared compatible property / kg mass-equivalent
- Identity status: internal/deferred: each boundary exit needs its recorded waste identity
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg mass-equivalent
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows


### Process: Curing and storage (`curing_storage`)

#### Inputs

##### Product flows

###### Accepted uncured roots entering curing or storage (`uncured_roots_curing_input`)

Internal accepted state from conditioning crosses the declared process boundary only under the stated condition.

- Selected flow: Internal accepted state from conditioning
- Flow property / unit: Declared compatible property / kg
- Identity status: internal: cured-route foreground link
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: storage duration (`storage_duration`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing_storage_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Curing and storage electricity supply (`curing_electricity`)

Electricity for ventilation, refrigeration, controls, and handling crosses the declared process boundary only under the stated condition.

- Selected flow: Electricity for ventilation, refrigeration, controls, and handling
- Flow property / unit: Declared compatible property / kWh
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow Set group: electricity-supply
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: storage duration (`storage_duration`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_curing_storage_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kWh
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased curing heat supply (`curing_heat`)

Purchased process heat for active curing; passive curing may be zero crosses the declared process boundary only under the stated condition.

- Selected flow: Purchased process heat for active curing; passive curing may be zero
- Flow property / unit: Declared compatible property / MJ
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow Set group: purchased-process-heat
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: process output (`process_output`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_curing_storage_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Accepted cured fresh sweet-potato roots (`cured_reference_product`)

Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057` crosses the declared process boundary only under the stated condition.

- Selected flow: Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Identity status: fixed: detail-confirmed CPC 01530 Product flow with Mass at farm gate
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: fixed value (`fixed_value`)
- Specificity: product specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Fixed quantitative-reference amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`


##### Waste flows

###### Curing and storage rejects (`curing_storage_rejects`)

Decayed, sprouted, chilled, or severely damaged roots crosses the declared process boundary only under the stated condition.

- Selected flow: Decayed, sprouted, chilled, or severely damaged roots
- Flow property / unit: Declared compatible property / kg
- Identity status: internal/deferred: recorded destination determines external identity
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: storage duration (`storage_duration`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing_storage_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

###### Measured evaporative moisture loss to air (`curing_moisture_loss`)

Water loss isolated by inlet/outlet and moisture measurements crosses the declared process boundary only under the stated condition.

- Selected flow: Water loss isolated by inlet/outlet and moisture measurements
- Flow property / unit: Declared compatible property / kg water
- Identity status: unresolved: resolve water-to-air compartment only after separate measurement
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference roots or the stated linked event
- Basis kind: storage duration (`storage_duration`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_curing_storage_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg water
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)



## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | All nodes | Prefer subdivision by crop cycle, harvest event, conditioning run, and storage lot. | `mass-balance-identity` |
| `allocation_rejects` | Rejects, rework, and downgraded roots | Retain original production burdens, add rework burdens once, and exclude rejects from accepted output. | `mass-balance-identity` |
| `allocation_shared_runs` | Shared runs | Allocate only indivisible records by a disclosed physical driver and prove conservation without double counting. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle_records` | `field_production` | all field cards | logs, invoices, meters, field measurements | field, cultivar, cycle, planting material, nutrients, water, energy, roots, residues, losses, emission inputs | reconcile by field and cycle | declared units | each activity | complete cycle | farm and field | normalize after linking harvests | invoices, checks, field sheets, analyses |
| `cp_harvest_event_records` | `harvest_capture` | all harvest cards | scales, equipment, route, loss survey | cycle, event, mode, mass, damage, energy, distance, load, destination | record each event | declared units | each harvest | all linked harvests | field and event | sum without transport/machinery duplication | scale, equipment, hand-off |
| `cp_conditioning_run_records` | `primary_conditioning` | all conditioning cards | run, scale, meters, grade, destination tickets | inlet, soil removal, water, electricity, grades, residuals, wastewater, treatment | mass-balance each run | declared units | each run | all reference runs | site and line | reconcile states and destinations | calibration, grade protocol, tickets |
| `cp_curing_storage_records` | `curing_storage` | all curing/storage cards | lot, temperature/RH, meters, inspection | inlet, conditions, duration, energy, outlet, rejects, moisture | trace loading to hand-off | declared units | each lot and periodic readings | full duration | store and lot | reconcile inlet, accepted, rejects, water loss | sensors, meters, traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all inventory | recorded amount × 1,000 kg / accepted reference-root mass on same basis | amount; reference mass | normalized amount | `mass-balance-identity` |
| `calc_transport_work` | transport | tkm = transported tonnes × loaded kilometres | load; distance | tkm | `mass-balance-identity` |
| `calc_root_mass_balance` | nodes | inlet minus accepted, downgraded, rejected, solids, samples, and separately measured water loss | linked mass records | unexplained difference | `mass-balance-identity` |
| `calc_dry_mass_conversion` | dry-matter comparison | dry mass = as-received mass × (1 − moisture fraction) | mass; moisture | dry mass | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Confirm species, storage-root use, cultivar, curing, damage, soil removal, moisture basis, and hand-off. | lot, inspection, hand-off |
| `dq_traceability` | process graph | Link crop cycles, harvest events, conditioning runs, and storage lots. | stable identifiers |
| `dq_completeness` | inventory | Cover material inputs, water, energy, root states, residues, losses, transport, treatment, and conditional utilities. | completeness reconciliation |
| `dq_route_delta` | alternative routes | Every topology, inventory, calculation, or validation delta needs current records. | route evidence matrix |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail when species, storage-root, curing, damage, soil removal, moisture basis, hand-off, or cycle qualifier is missing. | `fao-sweet-potato-postharvest` |
| `validate_reference_uuid` | reference identity | Require fixed flow `03d4145f-cc49-4e7b-8c45-d6ce90a90057`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. |  |
| `validate_exclusions` | scope | Fail when planting material or any processed product is the reference product. | `fao-sweet-potato-postharvest` |
| `validate_graph_links` | process graph | Require complete cycle, harvest, conditioning, and storage-lot links. |  |
| `validate_rejects` | reject states | Require explicit downgrade, rework, recovery, or discard destinations and exclude rejects from accepted output. | `fao-sweet-potato-postharvest` |
| `validate_mass_balance` | nodes | Report residuals; never label total loss as water-to-air without separate moisture measurement. | `mass-balance-identity` |
| `validate_flow_resolution` | all cards | Expand Flow Sets to concrete UUIDs from foreground records; resolve external deferred cards before exchange emission; keep internal cards as graph links only. |  |
| `validate_curing` | cured route | Require method, temperature, relative humidity, duration, and inlet/outlet state; omit the node for uncured route. | `fao-sweet-potato-postharvest` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for fresh sweet-potato storage roots |
| downstream_use | Generate processes and lifecycle models; secondary or background use when geography, route, state, and quality match |
| allowed_use | Fresh-root routes with compatible identity, cycle, curing, damage, soil removal, moisture basis, and hand-off |
| excluded_use | Planting-material production, processed products, undisclosed curing mixtures, or substitution for another root crop |
| required_metadata | Cultivar, geography, cycle/event/run/lot, route, irrigation, curing conditions, storage duration, damage, soil removal, moisture, hand-off, UUIDs, Flow Set versions, and resolution evidence |
| required_quality_disclosure | Period, coverage, measured/calculated shares, instruments, mass balances, route evidence, allocation, representativeness, and gaps |
| update_trigger | Material change to boundary, identity, Flow Set contract, route, qualifiers, evidence, or unresolved identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sweet-potato-postharvest` | official_guidance | FAO, *Prevention of post-harvest food losses: Sweet potato crop profile*, https://www.fao.org/4/t0073e/T0073E08.htm | Careful harvest, soil removal, damage grading, curing/storage, and boundary |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to linked inlet, output, residual, sample, and measured-moisture records | Normalization, reconciliation, dry-mass conversion, fixed reference amount |
