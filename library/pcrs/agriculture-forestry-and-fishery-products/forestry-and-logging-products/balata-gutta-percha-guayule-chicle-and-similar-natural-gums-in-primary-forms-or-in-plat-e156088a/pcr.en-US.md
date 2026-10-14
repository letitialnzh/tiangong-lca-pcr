---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.balata-gutta-percha-guayule-chicle-and-similar-natural-gums-in-primary-forms-or-in-plat-e156088a
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Balata, gutta-percha, guayule, chicle and similar natural gums in primary forms or in plates, sheets or strip

## 1. Scope and Applicability

This PCR covers foreground data packages for non-wood natural gums and trans-polyisoprene or related natural gum materials sold in primary forms, blocks, plates, sheets, or strip. It applies to balata, gutta-percha, guayule gum or resin/rubber fractions, chicle, and similar natural gums when the declared product is an unvulcanized primary material rather than a formulated rubber, chewing gum, dental article, adhesive, or finished product.

The foreground boundary normally starts with the declared source stand, plantation, tapping campaign, harvested leaves, shrub biomass, or purchased raw latex/gum lot, and ends with the saleable primary gum at the producer gate. Dataset authors must disclose the botanical source or supplier source category, route, product form, moisture or dry matter basis, and whether resin separation, deresination, solvent extraction, boiling, or sheet/strip forming is included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.balata-gutta-percha-guayule-chicle-and-similar-natural-gums-in-primary-forms-or-in-plat-e156088a |
| classification_refs | CPC 3.0:03211 exact - Balata, gutta-percha, guayule, chicle and similar natural gums in primary forms or in plates, sheets or strip |
| covered_products | Balata; gutta-percha; guayule natural gum, resin, or rubber fraction sold as primary gum material; chicle; similar natural plant gums sold in primary forms, blocks, plates, sheets, or strip |
| excluded_products | Natural rubber from Hevea when classified as CPC 01950; synthetic rubber and factice; vulcanized or compounded rubber goods; formulated chewing gum base; dental gutta-percha points or devices; adhesives, coatings, and finished articles |
| representative_product | 1 kg saleable dry-basis natural gum primary material at producer gate |
| production_route | Tapping, leaf/shrub harvest, or raw lot receipt; concentration/coagulation or extraction; impurity removal; drying, pressing, block forming, sheet forming, or strip cutting; packaging for dispatch |
| market_state | Unvulcanized primary material, usually baled, blocked, sheeted, plated, stripped, or otherwise simply prepared for industrial conversion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable balata, gutta-percha, guayule, chicle, or similar natural gum primary material |
| How much | 1 kg net product mass |
| How well | Product meets the declared commercial grade, product form, moisture or dry matter basis, and impurity specification |
| How long or cycle | One foreground production batch, tapping campaign, extraction campaign, or annualized campaign normalized to the reference amount |
| reference_flow_link | `packaged_product_at_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Balata, gutta-percha, guayule, chicle and similar natural gums in primary forms or in plates, sheets or strip `907d7b5c-ed6f-43a2-82f8-e1f91e30a37b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group 93a60a57-a4c8-11da-a746-0800200c9a66 |
| Reference unit | kg |
| Required qualifiers | gum type; botanical or supplier source category; source system; product form; moisture or dry matter basis; resin separation or purification state; production route; geographic origin; allocation method for co-products |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Retain complete raw batch, herd, process-transfer and co-product quantities on their original collection bases. For each exchange, establish actual route, period and co-product attribution, then calculate attributed raw quantity × 1 kg / matching-period final accepted product mass on the same boundary. Record actual stage outputs, losses, yields and allocation; never fix intermediate transfers to the final 1 kg or infer zero losses from missing data.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and saleable co-products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference flow as net saleable product mass excluding reusable pallets, drums, or returnable containers. |
| `dry_matter_basis` | Gum, latex, leaf, shrub biomass, residue, and product outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg dry matter and kg as received | Record moisture or total solids whenever a wet input, latex, coagulum, or dried product is converted to the 1 kg reference product. |
| `product_form_reporting` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare whether the reference product is block, plate, sheet, strip, crumb, resin fraction, rubber fraction, or another primary form. |
| `energy_unit_consistency` | Electricity, steam, fuel, and process heat | Energy | kWh or MJ | Convert plant energy meters, fuel invoices, and boiler records to kWh or MJ and state whether values are final energy, fuel lower heating value, or delivered heat. |
| `route_specific_yield_check` | Tapping, leaf extraction, and guayule extraction processes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Compare foreground yields against route-specific evidence or documented campaign records; large deviations require source species, moisture basis, and loss disclosure. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | `declared_source_stand_or_raw_gum_lot` |
| starting_condition_role | Boundary anchor for the first foreground collection or raw material receipt record. |
| product_classification_scope | CPC 3.0:03211 natural gums and similar plant gum primary forms only. |
| recursive_input_rule | If an input is itself CPC 03211 primary natural gum, model it as a purchased raw gum input with an upstream dataset; do not recursively reopen this PCR inside the same foreground process. |
| upstream_dataset_requirement | Use an upstream dataset for purchased latex, crude gum, harvested leaf, shrub biomass, solvent, packaging, electricity, fuel, water, or transport services that cross into the foreground boundary. |
| disclosure | Disclose source species or supplier source category, source system, harvesting or tapping route, purchased raw lot share, product form, moisture basis, purification state, co-product treatment, and any excluded establishment, land management, or long-distance transport activities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_declared_source_or_raw_lot | all foreground data packages | Begin foreground modelling at the declared source stand or raw gum lot, use upstream datasets for each purchased input crossing the boundary, and do not recursively reopen this PCR for a purchased CPC 03211 gum input. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `source_harvest_or_raw_lot_receipt` | Source harvest, tapping, or raw lot receipt | required | Include for all datasets; use raw lot receipt when the producer buys crude gum, latex, leaves, or shrub biomass. | Establishes source identity and incoming material amount. | kg incoming raw material and kg dry matter per 1 kg reference product |
| `primary_concentration_or_extraction` | Primary concentration, coagulation, boiling, or extraction | required | Include the route used for chicle boiling, balata/gutta softening, guayule aqueous or solvent extraction, or comparable natural gum recovery. | Converts raw latex, crude gum, leaves, or shrub biomass into concentrated or separated gum. | kg intermediate gum per 1 kg reference product |
| `purification_forming_and_drying` | Purification, drying, pressing, and forming | required | Include when the product is dried, pressed, blocked, sheeted, plated, stripped, or purified before sale. | Produces the declared primary product form. | kg saleable product per 1 kg reference product |
| `packaging_storage_and_dispatch` | Packaging, storage, and dispatch preparation | required | Include packaging and on-site storage needed to deliver the product at producer gate. | Records packaging, storage losses, and product dispatch state. | kg packaged saleable product per 1 kg reference product |

### Process: Source harvest, tapping, or raw lot receipt (`source_harvest_or_raw_lot_receipt`)

#### Inputs

##### Product flows

###### Source stand, tree, shrub, latex, leaf, or raw gum lot (`source_material_input`)

The incoming material is recorded according to the declared route. It may be tapped latex, crude gum, harvested leaves, guayule shrub biomass, or a purchased raw gum lot.

- Selected flow: Natural gum source material
- Flow property / unit: Mass / kg
- Amount rule: measured incoming mass and dry matter or total solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_records`
- Sources: `fao-nwfp-6-chicle`; `fao-nwfp-6-balata`; `fao-nwfp-6-gutta-percha`; `dehghanizadeh-2021-guayule-resin`
- Range: Initial source-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 100
  - Unit: kg dry matter
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity at equipment supply (`field_collection_energy_electricity`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Fuel, electricity, or animal/mechanical collection services are included when directly used for tapping, shrub harvest, leaf collection, in-field chopping, or raw lot receiving.

- Selected flow: Electricity at equipment supply
- Flow property / unit: Energy / kWh
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Diesel fuel (`field_collection_energy_diesel`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Fuel, electricity, or animal/mechanical collection services are included when directly used for tapping, shrub harvest, leaf collection, in-field chopping, or raw lot receiving.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

##### Waste flows

###### Uncollected or rejected source biomass (`rejected_source_biomass`)

Rejected bark, leaves, twigs, shrub material, or contaminated raw gum is recorded when it leaves the foreground system as waste or is returned to the source area.

- Selected flow: Biogenic plant residue
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured or calculated rejected biomass after source collection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:
- Range: Initial rejected biomass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg dry matter
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Source-area land occupation disclosure (`source_area_occupation`)

Land occupation is reported when the foreground dataset represents plantation or managed source-area operation rather than only purchased raw lot receipt.

- Selected flow: Land occupation, forestry or perennial shrub production
- Flow property / unit: Area-time / m2a
- Amount rule: annualized productive source area allocated to harvested source material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source_area_records`
- Sources:
- Range: Initial source-area occupation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: m2a
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Raw gum, latex, leaves, or shrub biomass for processing (`raw_material_to_processing`)

The measured collected or received material is transferred to the primary concentration or extraction process.

- Selected flow: Raw natural gum material
- Flow property / unit: Mass / kg as received and kg dry matter
- Amount rule: measured transferred mass after source collection or receipt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per source collection or receipt process output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_records`
- Sources:
- Range: Initial raw material transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 100
  - Unit: kg dry matter
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Primary concentration, coagulation, boiling, or extraction (`primary_concentration_or_extraction`)

#### Inputs

##### Product flows

###### Raw material charged to recovery (`raw_material_charged`)

Raw latex, crude gum, leaves, shrub biomass, or purchased raw gum is charged to the recovery route.

- Selected flow: Raw natural gum material
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured raw material charged to the concentration, boiling, coagulation, or extraction equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material_records`
- Sources:
- Range: Initial charged raw material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 100
  - Unit: kg dry matter
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water (`process_water_input`)

Process water is included when used for boiling, hot-water softening, washing, aqueous extraction, slurry handling, or cooling that crosses the foreground boundary.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water consumption net of internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:
- Range: Initial process water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Acetone solvent (`separation_aid_input_acetone`)

Activate only where the actual route and site records establish this identity. This is not a mandatory input, default recipe, treatment or dosage recommendation. Record formulation and concentration for supplier products without double counting formulation mass and active ingredient. Other actual identities require separate cards; missing records are not zero.These solvent cards apply only to documented guayule solvent extraction, not other gums, aqueous-only extraction or boiling routes.

Solvents, acids, salts, alkalis, filter aids, or other separation aids are included only when used in the declared route.

- Selected flow: Acetone solvent
- Flow property / unit: Mass / kg
- Amount rule: Collect only the actual quantity of this identity, retaining supplier composition, state, unit and use records; apply the original process attribution and reference-flow basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_material_records`
- Sources: `dehghanizadeh-2021-guayule-resin`; `usda-guayule-extraction-2019`

###### Cyclohexane solvent (`separation_aid_input_cyclohexane`)

Activate only where the actual route and site records establish this identity. This is not a mandatory input, default recipe, treatment or dosage recommendation. Record formulation and concentration for supplier products without double counting formulation mass and active ingredient. Other actual identities require separate cards; missing records are not zero.These solvent cards apply only to documented guayule solvent extraction, not other gums, aqueous-only extraction or boiling routes.

Solvents, acids, salts, alkalis, filter aids, or other separation aids are included only when used in the declared route.

- Selected flow: Cyclohexane solvent
- Flow property / unit: Mass / kg
- Amount rule: Collect only the actual quantity of this identity, retaining supplier composition, state, unit and use records; apply the original process attribution and reference-flow basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_material_records`
- Sources: `dehghanizadeh-2021-guayule-resin`; `usda-guayule-extraction-2019`

###### Process heat and electricity (`recovery_energy_input`)

Energy for boiling, extraction, agitation, centrifugation, evaporation, solvent recovery, and pumps is included in the recovery process.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured energy use or calculated equipment energy allocated to the recovery campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `dehghanizadeh-2021-guayule-resin`
- Range: Initial recovery energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 100
  - Unit: MJ
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Concentrated or separated gum intermediate (`gum_intermediate_output`)

The intermediate gum, coagulum, rubber fraction, resin fraction, or crude gutta fraction is recorded before final drying and forming.

- Selected flow: Natural gum intermediate
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured intermediate output, including moisture or solids basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per recovery process output

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_records`
- Sources:
- Range: Initial gum intermediate output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 10
  - Unit: kg dry matter
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wastewater from washing or boiling (`recovery_wastewater`)

Wastewater is recorded when water leaves the recovery process for treatment, discharge, or off-site disposal.

- Selected flow: Process wastewater
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: measured discharge or water-balance residual after recirculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`
- Sources:
- Range: Initial wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bagasse, spent leaves, resinous residue, or extraction solids (`recovery_solid_residue`)

Solid residues from leaf extraction, shrub extraction, filtering, or crude gum cleaning are recorded by dry matter and disposal or beneficial-use route.

- Selected flow: Biogenic extraction residue
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured residue generation and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `dehghanizadeh-2021-guayule-resin`
- Range: Initial recovery residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg dry matter
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Evaporated water from concentration (`evaporated_water`)

Water evaporated during boiling, concentration, or drying is reported as a water-balance output when material.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from water balance and moisture measurements
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_quality_records`
- Sources:
- Range: Initial evaporated water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Purification, drying, pressing, and forming (`purification_forming_and_drying`)

#### Inputs

##### Product flows

###### Gum intermediate for final forming (`gum_intermediate_input`)

The intermediate gum material is fed to final drying, purification, pressing, block forming, sheet forming, or strip cutting.

- Selected flow: Natural gum intermediate
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured intermediate input to final finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_records`
- Sources:
- Range: Initial gum intermediate input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 10
  - Unit: kg dry matter
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing energy (`finishing_energy_input`)

Energy for drying, pressing, rolling, cutting, cooling, and ventilation is included.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured energy use for final finishing or allocated equipment energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Initial finishing energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 50
  - Unit: MJ
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable primary natural gum product (`saleable_primary_gum_product`)

The reference product is the saleable primary natural gum in the declared form and quality state.

- Selected flow: Balata, gutta-percha, guayule, chicle and similar natural gums in primary forms or in plates, sheets or strip `907d7b5c-ed6f-43a2-82f8-e1f91e30a37b`
- Flow property / unit: Mass / kg
- Amount rule: Measure accepted net gum mass entering packaging and storage, retain actual handling losses, and normalize by matching-period final delivered output; do not fix this intermediate transfer to 1 kg.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: reference flow

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_product_quality_records`
- Sources:

##### Waste flows

###### Off-grade gum and trimming waste (`off_grade_gum_waste`)

Off-grade gum, trimmings, fines, contaminated gum, or rejected sheets are recorded by fate.

- Selected flow: Off-grade natural gum waste
- Flow property / unit: Mass / kg
- Amount rule: measured rejected product and declared recycling, rework, energy recovery, or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:
- Range: Initial off-grade gum screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Packaging, storage, and dispatch preparation (`packaging_storage_and_dispatch`)

#### Inputs

##### Product flows

###### Wooden crate (`primary_packaging_input_wood_crate`)

**Collection scope and applicability for primary_packaging_input.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Packaging is included when bags, liners, cartons, drums, straps, labels, or non-returnable pallets are supplied with the saleable product.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Wooden crate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per declared reference flow

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-package-identities`

###### Corrugated fibreboard box (`primary_packaging_input_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per declared reference flow

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-package-identities`

###### Polyethylene wrapping film (`primary_packaging_input_pe_film`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per declared reference flow

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-package-identities`

###### Storage and handling energy (`storage_handling_energy`)

Energy for warehouses, drying rooms, ventilation, forklifts, conveyors, and handling equipment is included when used before producer-gate dispatch.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured or allocated storage and handling energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw collection or process basis: per 1 kg saleable reference product

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Initial storage and handling energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ
  - Basis: per 1 kg saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged product at producer gate (`packaged_product_at_gate`)

The packaged saleable primary gum product is ready for dispatch at the producer gate.

- Selected flow: Balata, gutta-percha, guayule, chicle and similar natural gums in primary forms or in plates, sheets or strip `907d7b5c-ed6f-43a2-82f8-e1f91e30a37b`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
Raw collection or process basis: reference flow

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_product_quality_records`
- Sources:
- Range: Packaged product identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

If the foreground process produces only the declared primary gum product and internal residues are discarded, no allocation is required. If guayule rubber, guayule resin, bagasse, purified gutta fraction, resinous fraction, fuel residue, or another co-product leaves the system with economic value, allocate shared collection, extraction, and finishing burdens by dry mass as the default physical allocation. Use economic allocation only when the co-products have materially different functions and sale prices are documented for the same campaign. Internal rework is not a co-product; record it as a loop or yield loss. Residues used internally for process heat displace purchased energy only when measured and disclosed.

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_material_records` | `source_harvest_or_raw_lot_receipt` | source material input and raw material transfer | harvest, tapping, receiving, or purchase record | species_or_source_category; source_system; lot_id; as_received_mass; moisture_or_solids; source_location; harvest_or_receipt_date | weighbridge, batch sheet, receiving note, tapping log, or harvest record; original activity aggregation: sum lots and convert to dry matter where required | kg and percent moisture or solids | each lot or campaign | representative production year or declared campaign | source area, supplier lot, or receiving site | per declared reference flow | calibrated scale records, supplier certificates, moisture tests, and lot traceability |
| `cp_source_area_records` | `source_harvest_or_raw_lot_receipt` | source area occupation | land management or source-area record | productive_area; source_system; harvestable_area_share; campaign_duration; yield_to_processing | land register, plantation block record, concession record, or supplier declaration; original activity aggregation: allocate source area to harvested dry matter or purchased raw lot | ha, m2a, kg dry matter | annual or campaign | representative production year | source stand, plantation block, or declared supplier source | per declared reference flow | source map, land record, management plan, or supplier statement |
| `cp_energy_records` | all processes | fuel, electricity, steam, and process heat | meter, invoice, boiler log, fuel issue, or equipment-hour record | energy_carrier; quantity; unit; meter_scope; allocation_basis; process_id; date | meter reading, invoice reconciliation, or equipment-hour calculation; original activity aggregation: allocate shared energy by metered sub-process first, then runtime, mass throughput, or dry product output | kWh, MJ, kg fuel, L fuel | monthly or campaign | representative production year or campaign | plant, field crew, extraction line, finishing line, or storage area | per declared reference flow | meter calibration, invoice, fuel log, and allocation worksheet |
| `cp_water_records` | `primary_concentration_or_extraction` | process water and wastewater | water meter, batch water sheet, or wastewater record | make_up_water; recycled_water; discharge_volume; treatment_route; process_id; date | meter reading or water balance; original activity aggregation: net make-up water plus discharge water balance per reference product | kg or m3 | batch, monthly, or campaign | representative production year or campaign | extraction, boiling, washing, cooling, and effluent treatment systems | per declared reference flow | meter records, wastewater manifest, treatment logs, and water-balance reconciliation |
| `cp_auxiliary_material_records` | `primary_concentration_or_extraction` | solvent, coagulant, and process aid | purchase, issue, or batch recipe record | material_name; concentration_or_grade; quantity_issued; recovered_quantity; loss_quantity; supplier; process_id | inventory issue, recipe sheet, or solvent recovery log; original activity aggregation: net consumed material equals issued minus recovered/reused stock | kg | each batch or campaign | representative production year or campaign | extraction or purification line | per declared reference flow | purchase record, SDS, batch sheet, and recovery log |
| `cp_product_quality_records` | `primary_concentration_or_extraction`; `purification_forming_and_drying`; `packaging_storage_and_dispatch` | intermediate and final product quality | production, laboratory, and finished-goods record | product_form; gum_type; moisture_or_solids; impurity_content; net_product_mass; off_grade_mass; lot_id | batch sheet, lab test, finished-goods record; original activity aggregation: sum conforming net product and normalize all flows to 1 kg reference product | kg, percent moisture or solids | each lot | representative production year or campaign | production line and finished-goods warehouse | per declared reference flow | lab report, certificate of analysis, scale record, and finished-goods ledger |
| `cp_residue_records` | all processes | rejected biomass, bagasse, spent leaves, wastewater sludge, off-grade gum, and packaging waste | waste, residue, or by-product record | residue_type; quantity; moisture_or_solids; fate; sale_or_disposal_route; internal_reuse_flag | waste manifest, residue collection record, by-product sales note, or internal reuse log; original activity aggregation: sum by fate; convert to dry matter where relevant; link valuable co-products to allocation rule | kg and percent moisture or solids | batch, monthly, or campaign | representative production year or campaign | field, extraction, finishing, storage, and waste handling areas | per declared reference flow | waste manifest, by-product invoice, disposal ticket, and internal reuse record |
| `cp_packaging_records` | `packaging_storage_and_dispatch` | primary packaging input | packaging issue or bill of materials record | packaging_material; unit_mass; units_used; reusable_flag; supplier; product_lot | packaging BOM, warehouse issue, or supplier record; original activity aggregation: sum non-returnable packaging per net product mass | kg | lot or monthly | representative production year or campaign | packaging area and finished-goods warehouse | per declared reference flow | packaging BOM, supplier specification, and stock issue record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | row amount per kg reference product = campaign row amount / conforming net saleable product mass | row amount; conforming product mass from `cp_product_quality_records` | normalized inventory amount per 1 kg reference product |  |
| `convert_to_dry_matter` | source material, residues, and intermediate products | dry matter mass = as-received mass * (1 - moisture fraction) or as-received mass * solids fraction | as_received_mass; moisture_or_solids | kg dry matter |  |
| `water_balance_check` | process water and wastewater | wastewater or evaporated water is reconciled from make-up water, recycled water, product moisture change, and measured discharge | make_up_water; recycled_water; product moisture; discharge_volume | water balance and unreconciled loss |  |
| `co_product_allocation` | processes with saleable co-products | allocate shared burdens by dry mass unless documented campaign prices justify economic allocation | shared process burdens; dry mass of saleable co-products; prices when used | allocation factors by co-product | `iso-14044-2006` |
| `guayule_fraction_check` | guayule routes | compare declared resin/rubber fraction yields with cited guayule resin and rubber extraction literature; deviations require explanation | dry shrub input; resin fraction; rubber fraction; bagasse | QA flag or accepted route-specific yield | `dehghanizadeh-2021-guayule-resin` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Declare gum type, botanical or supplier source category, product form, purification state, and moisture or dry matter basis. | finished-goods record, certificate of analysis, supplier declaration, or product specification |
| `dq_source_traceability` | source material | Trace source material to source stand, plantation block, supplier lot, or purchased raw gum lot. | harvest log, tapping record, supplier certificate, receiving note, or concession/management record |
| `dq_mass_balance` | source material, intermediate, final product, and residues | The dry-matter mass balance from source input to final product, co-products, residues, and losses must be reconcilable for each campaign. | batch sheets, lab moisture tests, product ledger, and residue records |
| `dq_energy_water_boundary` | energy and water | Energy and water records must distinguish field collection, recovery/extraction, finishing, and storage where material; allocation assumptions must be documented. | meters, invoices, boiler logs, water balance, and allocation worksheet |
| `dq_co_product_allocation` | co-products and residues | Co-product allocation must use dry mass by default or documented economic allocation with same-campaign prices. | co-product mass records, by-product sales invoices, and allocation calculation |
| `dq_temporal_representativeness` | foreground dataset | Use at least one representative annual cycle or a declared production campaign; seasonal tapping or harvest campaigns must be identified. | production calendar, campaign records, and data coverage statement |

## 9. Validation Rules

- The dataset is invalid if it omits the required product qualifiers, especially gum type, product form, moisture basis, source system, and production route.
- The reference flow must be 1 kg net saleable product mass. Packaging and reusable containers are not part of the reference product mass.
- The dry-matter mass balance must reconcile source material, product, co-products, residues, and moisture losses. Unreconciled dry-matter loss above 5 percent of source dry matter requires explanation.
- Purchased raw gum, latex, leaves, shrub biomass, solvents, process aids, packaging, electricity, fuels, and transport services must be linked to upstream datasets when they cross the foreground boundary.
- Chicle routes must disclose tapping interval assumptions and whether tree damage or stand management activities are included.
- Gutta-percha routes must disclose whether material comes from tapping, leaves, prunings, crude blocks, or purchased raw material.
- Guayule routes must disclose aqueous or solvent extraction, resin/rubber separation state, bagasse treatment, and solvent recovery where applicable.
- Balata routes must disclose whether downstream gutta/resin separation is included or excluded.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Modelling producer-gate primary natural gum materials in foreground product systems when the declared gum type, form, source system, route, and moisture basis match. |
| excluded_use | Finished chewing gum, vulcanized rubber products, synthetic rubber, dental devices, formulated adhesives or coatings, and natural rubber CPC 01950 unless separately mapped. |
| required_metadata | gum type; botanical or supplier source category; CPC reference; product form; moisture or dry matter basis; source system; production route; location; time period; allocation method; co-product treatment; upstream dataset links |
| required_quality_disclosure | source traceability level, dry-matter mass balance closure, energy and water allocation basis, solvent recovery treatment, residue fate, co-product allocation, and unresolved UUID or unit support gaps |
| update_trigger | Update when reviewed Tiangong UUIDs, source-specific yield evidence, solvent/extraction technology evidence, CPC mapping, or forestry/non-wood forest product review changes the rule. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, code 03211 | Product category identity and classification reference |
| `fao-nwfp-6-chicle` | handbook | FAO Non-Wood Forest Products 6, Chicle profile, Pl@ntUse mirror, https://plantuse.plantnet.org/en/Chicle_%28FAO%2C_NWFP_6%29 | Chicle source identity, tapping/collection route, boiling and block-forming process evidence |
| `fao-nwfp-6-balata` | handbook | FAO Non-Wood Forest Products 6, Balata profile, Pl@ntUse mirror, https://plantuse.plantnet.org/en/Balata_%28FAO%2C_NWFP_6%29 | Balata source identity, tapping yield context, and downstream separation boundary |
| `fao-nwfp-6-gutta-percha` | handbook | FAO Non-Wood Forest Products 6, Gutta-percha profile, Pl@ntUse mirror, https://plantuse.plantnet.org/en/Gutta_percha_%28FAO%2C_NWFP_6%29 | Gutta-percha source routes, leaf/pruning harvest, hot-water softening, storage, and purification context |
| `dehghanizadeh-2021-guayule-resin` | literature | Dehghanizadeh et al. 2021, "Guayule (Parthenium argentatum) resin: A review of chemistry, extraction techniques, and applications", Industrial Crops and Products 165, 113410, https://doi.org/10.1016/j.indcrop.2021.113410 | Guayule extraction routes, rubber/resin/bagasse co-products, and route-specific yield QA |
| `szczepanowska-akhmedov-2023-polyisoprenes` | literature | Szczepanowska and Akhmedov 2023, "Gutta percha, natural rubber and balata-chemical characterization of polyisoprenes in the context of cultural heritage", Heritage Science 11, 125, https://doi.org/10.1186/s40494-023-00954-z | Material identity and distinction among gutta-percha, balata, and natural rubber polyisoprenes |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines | Allocation hierarchy, data quality, and LCA reporting basis |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `usda-guayule-extraction-2019` | literature | USDA guayule study, extraction methods; solvent-route identity example only, not a commercial consumption factor, https://www.ars.usda.gov/ARSUserFiles/20200500/Pubs%202020/LuoAbdel%20ICP2019.pdf | Conditional identity context; verify actual site use, quantities and applicability separately |
