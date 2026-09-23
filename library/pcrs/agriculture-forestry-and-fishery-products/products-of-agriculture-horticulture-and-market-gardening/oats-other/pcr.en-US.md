---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.oats-other
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---
# Non-seed Oats Grain at a Declared Farm or Primary-conditioning Gate
## 1. Scope and Applicability
This PCR guides foreground data package construction for non-seed oats grain corresponding to CPC 3.0 `01172`, “Oats, other”. It covers oats grown for food, feed, or industrial use when the intended end use is declared, from crop production through harvest and, when selected, post-harvest primary drying, cleaning, grading, and short-term storage to a declared farm or primary-conditioning gate.
This PCR does not cover oats seed for sowing, breeder or certified seed, flour, malt, starch, ethanol, other processed oats products, retail products, or downstream food, feed, or industrial conversion. The word “other” in the CPC leaf is treated as a coverage label, not as a product identity: the data package must state the intended end-use class and physical product state.
The default declared gate is either (a) farm gate at harvest or (b) the gate after post-harvest primary conditioning. The selected gate, moisture basis, cleaning status, grade or quality descriptors, geography, crop year, and packaging or bulk state are mandatory qualifiers.
## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.oats-other` |
| classification_refs | CPC 3.0 `01172`, `Oats, other` |
| covered_products | non-seed oats grain grown for declared food, feed, or industrial use, at harvest farm gate or after declared primary conditioning |
| excluded_products | oats seed for sowing; breeder, foundation, registered, or certified seed; flour; malt; starch; ethanol; other processed oats products; retail-ready products |
| representative_product | whole non-seed oats grain at the declared moisture basis and declared farm or primary-conditioning gate |
| production_route | annual oats crop production, harvest, and optional post-harvest primary drying, cleaning, grading, and short-term storage |
| market_state | bulk or packaged non-seed oats grain with end use, quality descriptors, moisture basis, and declared gate recorded |
## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | non-seed oats grain at the declared farm or primary-conditioning gate |
| How much | 1 kg |
| How well | declared end use (food, feed, or industrial), oats class or variety where material, moisture basis, grade or quality descriptors, cleaning status, geography, crop year, and gate |
| How long or cycle | one declared crop cycle and harvest year; storage duration is declared separately when the gate is after storage |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tempered oats grain `04f2dc00-d9b9-456f-b3d1-7d6c33055ecc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Binding | fixed |
| Required qualifiers | non-seed end use; food/feed/industrial declaration; oats class or variety where material; moisture basis; quality or grade descriptors; cleaning/drying status; geography; crop year; declared gate; bulk or packaging state |
When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. The generic Tiangong oats identity is constrained by this PCR's non-seed product boundary; it must not be used to imply that the dataset is oats seed for sowing.
## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference flow as net kg of non-seed oats grain at the selected declared gate, with the moisture basis stated. |
| `moisture_basis` | harvested and conditioned grain | Mass and moisture content | kg and percent | Record as-is mass and moisture basis; if dry-matter normalization is used, retain the measured moisture result and the conversion rule. |
| `nitrogen_input_basis` | fertilizer and nitrogen emissions | Mass | kg product and kg N | Record fertilizer product mass and nutrient content separately; nitrogen emission calculations use kg N input. |
| `water_basis` | irrigation and withdrawal | Volume or mass | m3 or kg | Distinguish source-specific withdrawal, delivered irrigation, consumption, and any water-footprint result; do not merge them into one flow. |
| `energy_inventory` | field fuel, electricity, and grain drying | Mass, volume, or energy | kg, L, MJ, or kWh | Record fuel or energy type, activity, period, unit, and conversion basis before normalization. |
| `output_reconciliation` | harvest, conditioning, screenings, residues, and losses | Mass | kg | Reconcile harvested grain, accepted grain, screenings, residue, and measured loss on a common moisture basis before normalizing to the reference flow. |
## 5. System Boundary
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_production` | field production | Include declared seed-for-sowing input, land occupation, soil preparation, sowing, fertilization, irrigation where applicable, crop protection, field operations, and direct field emissions through harvest. | `ipcc-2019-managed-soils-n2o`; `fao-crop-evapotranspiration-56` |
| `boundary_harvest` | harvest and field hand-off | Include harvesting, threshing or combining, field-side collection, and transport to the declared farm or primary-conditioning hand-off when these activities are in the foreground data package. | `fao-grain-postharvest-systems-1998`; `fao-oats-postharvest-operations-1999` |
| `boundary_primary_conditioning` | post-harvest route | Include primary drying, cleaning, grading, dust or screenings handling, and short-term storage only when the declared gate is after those operations. | `fao-oats-postharvest-operations-1999`; `fao-grain-postharvest-systems-1998` |
| `boundary_downstream_exclusion` | downstream processing | Exclude milling, malting, starch or ethanol conversion, food or feed formulation, retail, and consumer use; represent these as downstream datasets. | `fao-oats-postharvest-operations-1999`; `usda-oats-standards-2020` |
| `boundary_input_completeness` | all foreground routes | Address fertilizer, irrigation, crop protection, field energy, electricity, land, harvest energy, drying energy, cleaning losses, residues, and direct emissions with a value, justified zero, or documented exclusion. | `ipcc-2019-managed-soils-n2o`; `fao-oats-postharvest-operations-1999` |
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | seed_for_sowing_input_and_declared_crop_cycle |
| starting_condition_role | crop_establishment_condition |
| product_classification_scope | non-seed oats grain corresponding to CPC 3.0 `01172`, `Oats, other`; oats seed for sowing is an upstream input and is not the reference product |
| recursive_input_rule | a same-category oats flow used as a crop-establishment input is recorded as seed-for-sowing input with source, lot, amount, and upstream seed-dataset disclosure; it must not be silently traced as the non-seed reference product |
| upstream_dataset_requirement | seed-for-sowing, fertilizer, crop-protection products, energy, water supply, transport, drying, waste treatment, and other upstream inputs use identified datasets or declared supplier records |
| disclosure | declare end use, oats class or variety where material, crop cycle, geography, crop year, seed-for-sowing source, irrigation status, moisture basis, harvest and conditioning route, gate, quality descriptors, and every non-reference output fate |
## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| oats_crop_production | Oats Crop Production | required |  | foreground | harvested oats grain and associated residues |
| harvest_and_field_delivery | Harvest and Field Delivery | required |  | foreground | harvested grain at farm or conditioning hand-off |
| primary_conditioning | Primary Drying, Cleaning, and Grading | conditional | include when the declared gate is after primary drying, cleaning, grading, or short-term storage | foreground | conditioned oats grain at declared gate |
| storage_and_declared_gate | Storage and Declared Gate Handoff | conditional | include when storage or a delivery hand-off materially changes the declared reference flow | foreground | declared oats grain at selected gate |
### Process: Oats Crop Production (`oats_crop_production`)
#### Inputs
##### Product flows
###### Seed for sowing used in the oats crop (`seed_for_sowing_input`)
Seed for sowing is an upstream crop-establishment input, not the reference product. Record its source and lot identity and do not label the resulting non-seed grain dataset as oats seed for sowing.
- Selected flow: Oats ``- Flow property / unit: Mass / kg
- Amount rule: measured seed-for-sowing mass per field or crop lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested oats grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_input_records`
###### Agricultural nutrient and fertilizer inputs (`oats_crop_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested oats grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Irrigation water supplied as a product input (`irrigation_water_input`)
Irrigation water is recorded as delivered water input when irrigation occurs. Source, withdrawal, delivery, and consumption are kept distinct.
- Selected flow: Irrigation water `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: metered irrigation water volume converted to mass where required
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested oats grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
###### Field machinery fuel (`field_machinery_fuel`)
Field machinery fuel is recorded by operation and crop lot before normalization.
- Selected flow: Diesel, burned in agricultural machinery `57e0b1a3-2d05-46b2-b61b-cf7b5b167c6f`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: measured fuel quantity by field operation, with fuel type and unit retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested oats grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
###### Crop protection product (`crop_protection_product_input`)
Crop-protection products are recorded by formulated product or active ingredient according to the available primary record; the selected representation must be declared.
- Selected flow: Crop protection product
- Flow property / unit: Mass / kg
- Amount rule: measured formulated-product or active-ingredient mass by application
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvested oats grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
##### Waste flows
No waste input is assumed. Reused organic materials, recycled water, or other waste-derived inputs are recorded separately when they cross the foreground boundary.
##### Elementary flows
###### Land occupation (`land_occupation`)
Record land occupation from field area and crop duration; verify the exact elementary-flow UUID before exchange publication.
- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha a
- Amount rule: measured field area multiplied by declared crop duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per reference output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`
###### Irrigation water withdrawal (`water_withdrawal`)
Water withdrawal is recorded as an elementary flow only for the source-specific withdrawal that supports the delivered irrigation-water record.
- Selected flow: water `419682fe-60fb-4b43-be89-bf2824b51104`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: calculated from source-specific metered withdrawal records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested oats grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
#### Outputs
##### Product flows
###### Harvested non-seed oats grain (`harvested_oats_grain`)
Harvested oats grain is the output handed to the farm-gate or primary-conditioning route. It remains a non-seed grain process output; the fixed reference UUID is used only where the declared product state matches the verified primary-conditioning flow.
- Selected flow: harvested non-seed oats grain at the field hand-off
- Flow property / unit: Mass / kg
- Amount rule: measured harvested grain mass with moisture basis and harvest lot retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process output before primary conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`
- Range: Harvest-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg harvested-grain process output
  - Basis: process quantitative reference
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
###### Oats straw or field residue (`oats_straw_or_field_residue`)
Straw or other field residue is recorded when it is removed, sold, transferred, incorporated, burned, or otherwise crosses the foreground boundary. Field residue that remains in place is recorded through its declared fate rather than as a product output.
- Selected flow: Oats straw `bcaf0254-cdd3-43d1-823a-2f69df3801d8`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass crossing the boundary and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested oats grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`
##### Waste flows
No waste input is assumed. Harvest loss, damaged grain, and other material leaving the field route are recorded as waste only when a waste boundary crossing and fate are documented.
##### Elementary flows
Direct field emissions other than the rows above are added only when supported by the selected method and confirmed elementary-flow identity.
###### Direct soil nitrous oxide emission (`direct_soil_n2o_emission`)
Direct soil N₂O is calculated from declared nitrogen inputs and the selected IPCC tier or locally justified method.
- Selected flow: nitrous oxide, emissions to air unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: apply the selected method factor to accounted N inputs and convert N₂O-N to N₂O where applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested oats grain at the selected gate
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertilizer_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`
###### Direct ammonia emission (`direct_ammonia_emission`)
Direct ammonia is recorded when required by the selected method, local evidence, or study goal.
- Selected flow: ammonia, emissions to air unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass / kg N or kg substance
- Amount rule: calculated from accounted N inputs and the selected pathway method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested oats grain at the selected gate
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertilizer_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`
###### Direct nitrate emission (`direct_nitrate_emission`)
Direct nitrate is recorded when required by the selected method, local evidence, or study goal.
- Selected flow: nitrate, emissions to fresh water `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass / kg N or kg substance
- Amount rule: calculated from accounted N inputs and the selected pathway method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested oats grain at the selected gate
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertilizer_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`
### Process: Harvest and Field Delivery (`harvest_and_field_delivery`)
#### Inputs
##### Product flows
###### Standing or harvested oats crop received for harvest (`oats_crop_received_for_harvest`)
The harvest node receives the oats crop from the production route and records harvested grain and residue outcomes separately.
- Selected flow: oats grain or standing crop material received for harvest 04f2dc00-d9b9-456f-b3d1-7d6c33055ecc
- Flow property / unit: Mass / kg
- Amount rule: measured crop or grain mass entering the harvest and field-delivery operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest event and per reference output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`
###### Harvest fuel and electricity (`harvest_energy_input`)
Harvest fuel and electricity are recorded by machine or operation when they are separately measurable.
- Selected flow: Harvest energy carrier
- Flow property / unit: Energy / MJ or kWh
- Amount rule: measured or supplier-recorded harvest energy by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg harvested oats grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy_records`
###### Harvest or field-delivery transport service (`harvest_transport_service`)
Route-specific freight or internal handling is recorded when grain crosses the harvest-to-gate hand-off boundary.
- Selected flow: Grain freight or handling service
- Flow property / unit: Mass-distance / kg*km or t*km
- Amount rule: measured transported mass, distance, mode, and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg grain at the declared hand-off
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy_records`
##### Waste flows
Harvest losses are recorded only when they leave the harvest boundary and their fate is known.
##### Elementary flows
Record dust or direct combustion emissions only when supported by the selected method and confirmed flow identity.
#### Outputs
##### Product flows
###### Grain delivered to farm or primary-conditioning hand-off (`grain_at_handoff`)
The hand-off output is the measured grain mass transferred to the selected gate route, with moisture basis and lot identity retained.
- Selected flow: harvested non-seed oats grain at the field or conditioning hand-off
- Flow property / unit: Mass / kg
- Amount rule: measured grain mass at the harvest or conditioning hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`
##### Waste flows
**Harvest and field-delivery loss (`harvest_field_delivery_loss`)**
Harvest and field-delivery loss is recorded when measured grain or foreign material leaves the foreground route without becoming a reference product output.
- Selected flow: Rejects `e6d6aa78-105e-4acc-a84b-46f68765a1cc`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: measured loss mass and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested oats grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`
##### Elementary flows
No additional elementary flow is required without a confirmed method and identity.
### Process: Primary Drying, Cleaning, and Grading (`primary_conditioning`)
#### Inputs
##### Product flows
###### Harvested oats grain entering primary conditioning (`grain_to_primary_conditioning`)
This input is used only when the declared gate is after primary drying, cleaning, grading, or short-term storage.
- Selected flow: oats grain received for primary conditioning 04f2dc00-d9b9-456f-b3d1-7d6c33055ecc
- Flow property / unit: Mass / kg
- Amount rule: measured grain mass entering the conditioning batch with moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch and per declared output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`
###### Conditioning energy (`conditioning_energy_input`)
Drying, cleaning, grading, and conveying energy is recorded by campaign or line where it crosses the conditioning boundary.
- Selected flow: Conditioning energy carrier
- Flow property / unit: Energy / MJ or kWh
- Amount rule: metered or supplier-recorded energy allocated to the conditioning campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conditioned oats grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-oats-postharvest-operations-1999`
##### Waste flows
**Conditioning screenings and rejected grain (`conditioning_screenings_and_rejects`)**
Screenings, foreign material, rejected grain, and off-grade material are recorded by stream and fate; do not count them as accepted reference product.
- Selected flow: Rejects `e6d6aa78-105e-4acc-a84b-46f68765a1cc`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: measured batch mass and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grain entering primary conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_reject_records`
- Sources: `fao-oats-postharvest-operations-1999`; `usda-oats-standards-2020`
#### Outputs
##### Product flows
###### Conditioned non-seed oats grain (`conditioned_oats_grain`)
Conditioned oats grain is the accepted reference output when the declared gate is after primary conditioning.
- Selected flow: Oats, other `04f2dc00-d9b9-456f-b3d1-7d6c33055ecc`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: measured accepted grain output with moisture basis and quality descriptors
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioned_output_records`
- Sources: `fao-oats-postharvest-operations-1999`; `usda-oats-standards-2020`
- Range: Accepted-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference output
  - Basis: quantitative reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`
##### Waste flows
All conditioning rejects, screenings, damaged grain, and packaging or handling waste are assigned a measured fate in the data package.
##### Elementary flows
Record conditioning energy emissions only when the energy record, factor selection, and elementary-flow identity are confirmed.
###### Conditioning dust to air (`conditioning_dust_to_air`)
Dust emissions are recorded only when measured or calculated under a declared method and with a confirmed elementary-flow identity.
- Selected flow: Grain dust, emissions to air
- Flow property / unit: Mass / kg
- Amount rule: measured dust-collector mass or method-calculated emission
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conditioned oats grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_reject_records`
### Process: Storage and Declared Gate Handoff (`storage_and_declared_gate`)
#### Inputs
##### Product flows
###### Conditioned grain entering declared storage or handoff (`grain_to_declared_storage`)
This process is conditional and is included when the selected gate follows storage or a delivery hand-off.
- Selected flow: Oats, other `04f2dc00-d9b9-456f-b3d1-7d6c33055ecc`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: measured grain mass entering storage or declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per storage period and per reference output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_handoff_records`
###### Storage or handoff energy (`storage_handoff_energy`)
Storage electricity, aeration, or other energy is recorded only for the declared storage or handoff period.
- Selected flow: Storage or handoff energy carrier
- Flow property / unit: Energy / MJ or kWh
- Amount rule: metered or supplier-recorded energy by storage period and grain mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grain and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_handoff_records`
###### Transport packaging (`transport_packaging_input`)
Packaging is recorded only when the declared gate uses bags, liners, or another transport-packaging state rather than bulk grain.
- Selected flow: Transport packaging material
- Binding: parameterized
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass or item count converted to mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg grain at the declared packaged gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
##### Waste flows
**Storage loss or damaged grain (`storage_loss_or_damaged_grain`)
Storage loss is recorded by lot, period, mass, damage category, and fate whenever storage is included.
- Selected flow: Rejects `e6d6aa78-105e-4acc-a84b-46f68765a1cc`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: measured inventory reconciliation or disposal mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grain entering storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_handoff_records`
##### Elementary flows
No storage elementary flow is added without a confirmed identity and method.
#### Outputs
##### Product flows
###### Declared-gate non-seed oats grain (`declared_gate_oats_grain`)
The declared-gate output is the reference product when the selected gate includes storage or a downstream hand-off.
- Selected flow: Oats, other `04f2dc00-d9b9-456f-b3d1-7d6c33055ecc`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: measured grain mass at the declared gate, with moisture basis and quality descriptors
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_gate_output_records`
##### Waste flows
Any damaged or rejected material not already recorded in the storage-loss row is recorded with its own fate.
##### Elementary flows
Energy-related emissions are calculated only from confirmed energy records and declared factors.
## 7. Allocation and Co-product Handling
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | crop, harvest, and conditioning processes | First avoid allocation by subdividing crop operations, harvest, drying, cleaning, grading, storage, and waste-handling responsibilities wherever records support separate process nodes. | `iso-14044-2006` |
| `allocation_grain_and_residue` | oats grain and removed straw or residue | Treat residue left in the field according to its declared fate. When straw or another residue is removed or sold and subdivision is not possible, use an explicitly declared physical or economic allocation method and disclose sensitivity. | `iso-14044-2006`; `fao-oats-postharvest-operations-1999` |
| `allocation_screenings_and_rejects` | screenings, damaged grain, and off-grade material | Record accepted grain, screenings, rejects, and losses as separate outputs with fates. Do not assign rejected material to the reference product without an explicit rework or allocation decision. | `fao-oats-postharvest-operations-1999`; `usda-oats-standards-2020` |
| `allocation_substitution` | residue or by-product use | Use substitution only when the displaced product, route, market, and evidence are declared; do not infer a displacement credit from a product label or generic residue name. | `iso-14044-2006` |
## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_input_records` | `oats_crop_production` | seed for sowing input | seed purchase or receiving record | lot; variety; supplier; source; treatment; mass; moisture basis; date; field | weighbridge, calibrated scale, invoice, or supplier record | kg | per seed lot | crop cycle | production field or farm | sum seed mass by field and crop lot | scale calibration, invoice, supplier record |
| `cp_fertilizer_input_records` | `oats_crop_production` | fertilizer inputs | purchase and application record | product; nutrient; product mass; nutrient mass; date; field; application method | invoice, nutrient analysis, farm log, or applicator record | kg product and kg nutrient | per application | crop cycle | production field or farm | sum by product and nutrient and normalize to declared output | invoice, nutrient analysis, application log |
| `cp_irrigation_records` | `oats_crop_production` | irrigation and withdrawal | meter or pumping record | source; meter; readings; volume; pumping energy; date; field | calibrated meter, pumping log, or invoice | m3, kg, and energy unit | per event or period | irrigation season | field and water source | sum by source and distinguish withdrawal from delivery | meter calibration, readings, invoice |
| `cp_field_energy_records` | `oats_crop_production` | field machinery fuel | field operation energy record | operation; machine; fuel or electricity type; quantity; field; date | fuel log, invoice, telematics, or meter | L, kg, MJ, or kWh | per field operation | crop cycle | production field or farm | sum by operation and normalize to selected gate output | invoice, machine log, telematics |
| `cp_crop_protection_records` | `oats_crop_production` | crop protection product | application record | product; active ingredient; formulation; mass; date; field; application method | spray log, product label, or applicator record | kg product or kg active ingredient | per application | crop cycle | production field or farm | sum by product or active substance and normalize to output | label, log, applicator record |
| `cp_land_and_output_records` | `oats_crop_production` | land, harvest, and outputs | field and harvest record | field; area; crop duration; harvest date; gross grain; residue; fate; moisture; quality | GIS or field record plus calibrated scale and dispatch records | ha, crop duration, kg, percent | per harvest and annual reconciliation | crop year | production field or farm | reconcile field outputs before normalization | field map, scale calibration, harvest ticket |
| `cp_harvest_and_output_records` | `harvest_and_field_delivery` | harvested grain and harvest energy | harvest and delivery record | field; machine; operation; grain mass; residue; loss; moisture; energy; date; hand-off | calibrated scale, harvest log, telematics, and delivery ticket | kg, percent, L, MJ, or kWh | per harvest event | crop cycle | field to gate hand-off | sum by lot and declared hand-off | scale ticket, machine record, delivery record |
| `cp_harvest_energy_records` | `harvest_and_field_delivery` | harvest energy | machine or contractor record | machine; fuel or electricity; quantity; harvested mass; period | contractor invoice, fuel log, telematics, or meter | kg, L, MJ, or kWh | per harvest event or period | crop cycle | harvest operation | allocate by harvested mass and declared operation | invoice, telematics, meter |
| `cp_residue_and_fate_records` | `harvest_and_field_delivery` | residue and loss fates | residue or loss record | stream; mass; moisture; fate; destination; date; field or lot | scale ticket, baling record, field log, disposal or transfer record | kg | per event or campaign | crop cycle | field and hand-off | sum by stream and fate; do not merge with accepted grain | scale ticket, fate record, field log |
| `cp_conditioning_energy_records` | `primary_conditioning` | drying, cleaning, and grading energy | facility energy record | line; energy type; quantity; period; batch; input and output mass | meter, utility bill, equipment log, or supplier record | kWh, MJ, kg, or L | per batch or campaign | conditioning campaign | facility and line | allocate to batch and normalize to accepted output | meter, bill, equipment log |
| `cp_conditioning_reject_records` | `primary_conditioning` | screenings, rejects, and dust | conditioning reject record | batch; stream; mass; moisture; quality; fate; dust collector mass | calibrated scale, reject log, dust record, or contractor record | kg and percent | per batch or campaign | conditioning campaign | facility and line | sum by stream and fate and reconcile to batch input | scale, reject log, fate record |
| `cp_conditioned_output_records` | `primary_conditioning` | conditioned reference output | conditioning output record | batch; accepted mass; moisture; grade; quality; cleaning status; gate | calibrated scale and quality test record | kg and percent | per batch | conditioning campaign | facility and declared gate | sum accepted batches at declared basis | scale calibration, quality test, dispatch record |
| `cp_storage_and_handoff_records` | `storage_and_declared_gate` | storage energy and loss | storage inventory record | lot; opening mass; closing mass; moisture; duration; energy; losses; fate | inventory reconciliation, meter, utility bill, or storage log | kg, percent, days, MJ, or kWh | per lot or storage period | declared storage duration | storage site | reconcile mass and allocate energy by lot and duration | inventory record, meter, bill |
| `cp_packaging_records` | `storage_and_declared_gate` | transport packaging | packaging issue or dispatch record | packaging type; item count; mass; capacity; lot; gate; date | packaging inventory, packing log, or supplier record | item and kg | per packaged lot | declared gate period | declared gate or packing site | sum packaging mass or convert item count using recorded capacity and mass | inventory record, packing log, supplier record |
| `cp_declared_gate_output_records` | `storage_and_declared_gate` | declared-gate output | dispatch or gate record | lot; gate; date; mass; moisture; quality; packaging or bulk state | weighbridge, scale, dispatch, or receiving record | kg and percent | per shipment or gate event | declared gate period | declared gate | sum output lots and preserve gate identity | scale ticket, dispatch record, quality record |
### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_declared_gate` | all foreground flows | recorded flow amount / accepted non-seed oats grain mass at the selected declared gate * reference amount | all applicable protocols; declared gate output | amount per 1 kg reference product | `mass-balance-identity` |
| `convert_moisture_basis` | grain mass comparisons | dry-matter mass = as-is mass * (1 - moisture fraction); retain both as-is and converted values and the measured moisture basis | harvest and conditioning mass; moisture records | comparable mass basis | `fao-oats-postharvest-operations-1999`; `usda-oats-standards-2020` |
| `calculate_water_withdrawal` | irrigation | source-specific metered withdrawal converted to the declared unit and normalized to selected gate output; report delivery and consumption separately | `cp_irrigation_records`; `cp_declared_gate_output_records` | withdrawal per reference output | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_n2o` | fertilizer N and direct N2O | apply the selected IPCC tier and factor to accounted N input and convert N2O-N to N2O where applicable; disclose factor selection | `cp_fertilizer_input_records`; selected method factor | direct soil N2O per reference output | `ipcc-2019-managed-soils-n2o` |
| `reconcile_harvest_outputs` | harvest and field delivery | harvested grain + residue removed + measured loss + field-return or unmeasured remainder = declared harvest input on a common moisture basis; explain any residual | `cp_land_and_output_records`; `cp_harvest_and_output_records`; `cp_residue_and_fate_records` | mass-balance reconciliation | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | primary conditioning | conditioned accepted grain + screenings + rejects + dust or measured loss = conditioning input on a common moisture basis; explain residual | `cp_conditioning_reject_records`; `cp_conditioned_output_records` | conditioning yield and loss reconciliation | `fao-oats-postharvest-operations-1999`; `mass-balance-identity` |
| `allocate_storage_energy` | storage | storage energy is allocated by recorded lot mass and declared storage duration; avoid allocation when a dedicated meter exists | `cp_storage_and_handoff_records` | storage energy per reference output | `iso-14044-2006` |
### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_non_seed_identity` | reference product | Declare that the product is non-seed oats grain and state food, feed, or industrial end use; do not use seed quality claims as a substitute. | product metadata, contract, quality record, or dispatch record |
| `dq_gate_and_moisture` | reference flow and outputs | Record the selected gate, as-is mass, moisture basis, and any dry-matter conversion for every reconciled output stream. | scale, moisture test, dispatch, and calculation records |
| `dq_temporal_coverage` | crop production and harvest | Cover the declared crop cycle and harvest year; disclose whether the dataset is a single year, multi-year average, or scenario. | dated farm, harvest, and input records |
| `dq_input_completeness` | field and conditioning inventory | Quantify or justify zero/exclusion for seed-for-sowing, fertilizer, irrigation, crop protection, land, field energy, harvest energy, drying energy, storage energy, and direct emissions. | ledgers, invoices, logs, meters, and method declaration |
| `dq_output_fate` | residues, screenings, rejects, and losses | Record every non-reference output, its mass basis, boundary crossing, destination, and fate; evidence gap fates block finalization. | scale records, field logs, disposal, transfer, or sales records |
| `dq_quality_descriptor` | grain identity | Record quality or grade descriptors relevant to the intended end use, without turning them into universal acceptance thresholds. | official grade test, buyer specification, or local quality record |
| `dq_uuid_identity` | flow and elementary-flow references | Every fixed UUID must be traceable to a confirmed identity record; rows without a fixed UUID use a compatible parameterized Flow Set or remain unbound rather than being silently replaced by a generic UUID. | local identity record and review metadata |
## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_non_seed_boundary` | product identity | Confirm that the reference product is non-seed oats grain and that seed for sowing, flour, malt, starch, ethanol, and downstream products are excluded or separately modelled. | `usda-oats-standards-2020`; `fao-oats-postharvest-operations-1999` |
| `validation_reference_flow` | reference flow | Confirm one 1 kg reference flow uses the verified Tempered oats grain identity, mass property, kg unit, declared end use, moisture basis, quality descriptors, geography, crop year, and gate. | `usda-oats-standards-2020` |
| `validation_process_completeness` | process map and inventory | Confirm crop production, harvest, and the applicable primary-conditioning or storage processes are present or explicitly excluded by the declared gate. | `fao-grain-postharvest-systems-1998`; `fao-oats-postharvest-operations-1999` |
| `validation_nitrogen` | fertilizer and emissions | Confirm product mass differs from kg N, factor selection is declared, N2O-N conversion is transparent, and other nitrogen pathways are addressed or justified. | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | irrigation | Confirm withdrawal, delivered irrigation, consumption, and water-footprint results are distinguished and not double counted. | `fao-crop-evapotranspiration-56` |
| `validation_moisture_and_mass_balance` | harvest and conditioning | Confirm mass reconciliation uses a common moisture basis and that accepted grain, residues, screenings, rejects, and losses have declared fates. | `fao-oats-postharvest-operations-1999`; `mass-balance-identity` |
| `validation_allocation` | co-products and residues | Confirm subdivision was considered first, any allocation method is declared, substitution has an evidenced displaced product, and sensitivity is reported when material. | `iso-14044-2006` |
| `validation_uuid_review` | identity references | Confirm every fixed UUID and receiving compartment; resolve each parameterized Flow Set at foreground data generation before creating a final TIDAS exchange. |  |
## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream food, feed, industrial, grain-trading, or LCA data construction when the declared non-seed end use, geography, crop year, moisture basis, quality descriptors, production route, and gate match the dataset metadata |
| excluded_use | oats seed for sowing; flour; malt; starch; ethanol; processed foods or feeds; datasets with an incompatible gate or evidence gap material loss/fate records |
| required_metadata | reference flow; non-seed end use; oats class or variety where material; geography; crop cycle and year; seed-for-sowing source; irrigation status; fertilizer and crop-protection records; moisture basis; quality descriptors; harvest and conditioning route; declared gate; residue and reject fates; allocation; data-quality disclosure |
| required_quality_disclosure | primary-record coverage; temporal and geographic representativeness; moisture and mass-balance treatment; selected factors; identity coverage and unmapped-flow disclosure; omitted inputs; allocation and sensitivity; module checklist result |
| update_trigger | material change in route, gate, moisture or quality representation, end-use scope, fertilizer or crop-protection practice, irrigation, harvest or conditioning technology, storage duration, factor source, identity binding, or evidence status |
## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-oats-postharvest-operations-1999` | official_guidance | FAO INPhO, *WHEAT: Post-harvest Operations*, <https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_WHEAT.pdf> | oats harvest, drying, cleaning, storage, loss, and primary-conditioning process decomposition |
| `fao-grain-postharvest-systems-1998` | official_guidance | FAO, *Agricultural engineering in development — Grain and post-harvest systems*, <https://www.fao.org/4/t0522e/T0522E03.htm> | harvest-to-storage sequence and declared post-harvest hand-offs |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration*, <https://www.fao.org/4/X0490E/X0490E00.htm> | irrigation and crop-water data collection and water distinctions |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil N2O method selection, activity data, and factor disclosure |
| `usda-oats-standards-2020` | official_guidance | USDA Agricultural Marketing Service, *United States Standards for Oats*, <https://www.ams.usda.gov/sites/default/files/media/OatsStandards.pdf> | oats grain quality, moisture and grade descriptors, and separation from seed-specific scope |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, <https://www.iso.org/standard/38498.html> | allocation hierarchy, LCA scope, inventory, reporting, and data-quality disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity. | harvest, conditioning, storage, and output reconciliation |
