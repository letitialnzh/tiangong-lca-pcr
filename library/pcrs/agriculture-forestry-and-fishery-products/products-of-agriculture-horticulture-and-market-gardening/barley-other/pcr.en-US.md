---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-other
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Non-seed Barley Grain at a Declared Farm or Primary-conditioning Gate

## 1. Scope and Applicability

This PCR guides foreground data package construction for non-seed barley grain corresponding to CPC 3.0 `01152`, “Barley, other”. It covers barley grown for a declared food, feed, malting, or other industrial use from crop production through harvest and, when selected, post-harvest primary drying, cleaning, grading, and short-term storage to a declared farm or primary-conditioning gate.

This PCR does not cover barley seed for sowing, breeder or certified seed, malt, flour, starch, ethanol, brewed products, formulated food or feed, retail products, or other downstream processing. A downstream use may be declared for the grain, but malting, food processing, feed formulation, and other conversion activities are separate datasets. The word “other” in the CPC leaf is a coverage label, not a product identity: the data package must state the intended end-use class and physical product state.

The default declared gate is either (a) farm gate at harvest, matching the verified unprocessed barley reference flow, or (b) the gate after primary drying, cleaning, grading, or short-term storage. The selected gate, moisture basis, cleaning status, quality descriptors, geography, crop year, and bulk or packaging state are mandatory qualifiers. A post-conditioning output must be reverified against the declared product state; the farm-gate fixed UUID must not be reused merely because the material is still called barley grain.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-other` |
| classification_refs | CPC 3.0 `01152`, `Barley, other` |
| covered_products | non-seed barley grain for a declared food, feed, malting, or other industrial use, at harvest farm gate or after declared primary conditioning |
| excluded_products | barley seed for sowing; breeder, foundation, registered, or certified seed; malt; flour; starch; ethanol; brewed products; formulated foods or feeds; retail-ready products |
| representative_product | whole non-seed barley grain at the declared moisture basis and declared farm or primary-conditioning gate |
| production_route | annual barley crop production, harvest, and optional post-harvest primary drying, cleaning, grading, and short-term storage |
| market_state | bulk or packaged non-seed barley grain with intended use, quality descriptors, moisture basis, and declared gate recorded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | non-seed barley grain at the declared farm or primary-conditioning gate |
| How much | 1 kg |
| How well | declared end use; barley type or variety where material; moisture basis; grade or quality descriptors; cleaning and drying status; geography; crop year; and gate |
| How long or cycle | one declared crop cycle and harvest year; storage duration is declared separately when the gate is after storage |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Barley, other `7054f7a2-d70f-4b45-8fd9-7e6f314aa5a9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Binding | fixed |
| Required qualifiers | non-seed end use; intended food, feed, malting, or other industrial use; barley type or variety where material; moisture basis; quality descriptors; cleaning and drying status; geography; crop year; declared gate; bulk or packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. The fixed reference UUID is valid only for the verified farm-gate, harvested-grain, unprocessed state. When the selected gate follows primary conditioning or storage, reverify the receiving flow identity and retain unmapped coverage if no exact fixed UUID or applicable Flow Set exists.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference flow as net kg of non-seed barley grain at the selected declared gate, with the moisture basis stated. |
| `moisture_basis` | harvested and conditioned grain | Mass and moisture content | kg and percent | Record as-is mass and moisture basis; if dry-matter normalization is used, retain the measured moisture result and the conversion rule. |
| `nitrogen_input_basis` | fertilizer and nitrogen emissions | Mass | kg product and kg N | Record fertilizer product mass and nutrient content separately; nitrogen emission calculations use the declared kg N input basis. |
| `water_basis` | irrigation and withdrawal | Volume or mass | m3 or kg | Distinguish source-specific withdrawal, delivered irrigation, consumption, and any water-footprint result; do not merge them into one flow. |
| `energy_inventory` | field fuel, electricity, harvest, and grain drying | Mass, volume, or energy | kg, L, MJ, or kWh | Record carrier, activity, period, unit, and conversion basis before normalization. |
| `output_reconciliation` | harvest, conditioning, screenings, residues, and losses | Mass | kg | Reconcile harvested grain, accepted grain, screenings, residue, and measured loss on a common moisture basis before normalizing to the reference flow. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_production` | field production | Include declared seed-for-sowing input, land occupation, soil preparation, sowing, fertilization, irrigation where applicable, crop protection, field operations, and direct field emissions through harvest. | `ipcc-2019-managed-soils-n2o`; `fao-crop-evapotranspiration-56` |
| `boundary_harvest` | harvest and field hand-off | Include harvesting, threshing or combining, field-side collection, and transport to the declared farm or primary-conditioning hand-off when these activities are in the foreground package. | `fao-grain-postharvest-systems-1998` |
| `boundary_primary_conditioning` | post-harvest route | Include primary drying, cleaning, grading, dust or screenings handling, and short-term storage only when the declared gate is after those operations. | `fao-grain-postharvest-systems-1998`; `usda-barley-grain-standards` |
| `boundary_downstream_exclusion` | downstream processing | Exclude malting, milling, starch or ethanol conversion, brewing, food or feed formulation, retail, and consumer use; represent these as downstream datasets. | `usda-barley-grain-standards`; `fao-grain-postharvest-systems-1998` |
| `boundary_input_completeness` | all foreground routes | Address fertilizer, irrigation, crop protection, field energy, electricity, land, harvest energy, drying energy, cleaning losses, residues, storage where included, and direct emissions with a value, justified zero, or documented exclusion. | `ipcc-2019-managed-soils-n2o`; `fao-grain-postharvest-systems-1998` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | seed_for_sowing_input_and_declared_crop_cycle |
| starting_condition_role | crop_establishment_condition |
| product_classification_scope | non-seed barley grain corresponding to CPC 3.0 `01152`, `Barley, other`; barley seed for sowing is an upstream input and is not the reference product |
| recursive_input_rule | a same-category barley flow used as a crop-establishment input is recorded as seed-for-sowing input with source, lot, amount, and upstream seed-dataset disclosure; it must not be silently traced as the non-seed reference product |
| upstream_dataset_requirement | seed-for-sowing, fertilizer, crop-protection products, energy, water supply, transport, drying, waste treatment, and other upstream inputs use identified datasets or declared supplier records |
| disclosure | declare end use, barley type or variety where material, crop cycle, geography, crop year, seed-for-sowing source, irrigation status, moisture basis, harvest and conditioning route, gate, quality descriptors, and every non-reference output fate |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `barley_crop_production` | Barley Crop Production | required |  | foreground | harvested barley grain and associated residues |
| `barley_harvest_and_delivery` | Barley Harvest and Field Delivery | required |  | foreground | harvested grain at farm or primary-conditioning hand-off |
| `barley_primary_conditioning` | Primary Drying, Cleaning, and Grading | conditional | include when the declared gate is after primary drying, cleaning, grading, or short-term storage | foreground | conditioned barley grain at declared gate |
| `barley_storage_and_dispatch` | Storage and Declared Gate Dispatch | conditional | include when storage or dispatch materially changes the declared reference flow | foreground | declared barley grain at selected gate |

### Process: Barley Crop Production (`barley_crop_production`)

#### Inputs

##### Product flows

###### Seed for sowing used in the barley crop (`seed_for_sowing_input`)

Seed for sowing is an upstream crop-establishment input, not the reference product. Record source, lot, treatment, and variety where material.

- Selected flow: Barley seed for sowing `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: measured seed-for-sowing mass per field or crop lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_input_records`

###### Agricultural nutrient and fertilizer inputs (`barley_crop_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_input_records`
- Sources:

###### Irrigation water supplied as a product input (`irrigation_water_input`)

Irrigation water is recorded as delivered water when irrigation occurs. Source, withdrawal, delivery, and consumption remain distinct.

- Selected flow: Irrigation water
- Binding: parameterized
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: metered irrigation water volume converted to the declared unit where required
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`

###### Field mechanical power or fuel (`field_energy_input`)

Record field energy by operation before normalization. Use the carrier-specific background process or foreground record selected by the data package.

- Selected flow: Field mechanical power or energy carrier
- Flow property / unit: Energy / MJ or kWh
- Amount rule: measured or supplier-recorded energy by field operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg harvested barley grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`

###### Crop protection product (`crop_protection_product_input`)

Record crop-protection products by formulated product or active substance according to the primary record. No generic material-input Flow Set is used; retain this row as unmapped coverage until a compatible identity is confirmed.

- Selected flow: named crop-protection product or active substance from the primary record
- Flow property / unit: Mass / kg
- Amount rule: measured formulated-product or active-substance mass by application
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg harvested barley grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`

##### Waste flows

No waste input is assumed. Reused organic materials, recycled water, or other waste-derived inputs are recorded separately when they cross the foreground boundary and their identities and fates are documented.

##### Elementary flows

###### Land occupation (`land_occupation`)

Record the cultivated area and crop-cycle occupation basis for the barley field.

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

Record source-specific withdrawal separately from delivered irrigation water.

- Selected flow: source-specific water withdrawal
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: calculated from source-specific metered withdrawal records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`

#### Outputs

##### Product flows

###### Harvested non-seed barley grain (`harvested_barley_grain`)

Harvested barley grain is the output handed to the farm-gate or primary-conditioning route. It remains a non-seed grain process output.

- Selected flow: harvested non-seed barley grain at the field hand-off
- Flow property / unit: Mass / kg
- Amount rule: measured harvested grain mass with moisture basis and harvest-lot identity retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process output before primary conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

###### Barley straw or field residue (`barley_straw_or_field_residue`)

Record straw or other field residue when it is removed, sold, transferred, incorporated, burned, or otherwise crosses the foreground boundary. Residue left in place is recorded through its declared fate.

- Selected flow: named barley straw or field-residue identity from the primary record
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass crossing the boundary and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley grain at the selected gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`

##### Waste flows

Harvest loss, damaged grain, and other material leaving the field route are recorded as waste only when the boundary crossing and fate are documented. No product-output Flow Set is used as a fallback.

##### Elementary flows

Direct field emissions other than the rows above are added only when supported by the selected method and a confirmed elementary-flow identity.

###### Direct soil nitrous oxide emission (`direct_soil_n2o_emission`)

Direct soil N₂O is calculated from declared nitrogen inputs and the selected method or tier. Confirm the receiving compartment and flow identity before a final exchange is created.

- Selected flow: direct nitrous oxide emission to air
- Flow property / unit: Mass / kg
- Amount rule: apply the selected method to accounted N inputs and disclose any N₂O-N to N₂O conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley grain at the selected gate
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertilizer_input_records`

### Process: Barley Harvest and Field Delivery (`barley_harvest_and_delivery`)

#### Inputs

##### Product flows

###### Barley crop received for harvest (`barley_crop_received_for_harvest`)

The harvest node receives the barley crop from production and records grain and residue outcomes separately.

- Selected flow: barley crop or harvested grain material received for harvest
- Flow property / unit: Mass / kg
- Amount rule: measured crop or grain mass entering the harvest and field-delivery operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest event and per reference output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

###### Harvest energy (`harvest_energy_input`)

Record fuel, electricity, or other energy used by the harvest operation.

- Selected flow: harvest mechanical power or energy carrier
- Flow property / unit: Energy / MJ or kWh
- Amount rule: measured or supplier-recorded harvest energy by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg harvested barley grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy_records`

###### Harvest or field-delivery transport service (`harvest_transport_service`)

Route-specific freight or internal handling is recorded when grain crosses the harvest-to-gate hand-off.

- Selected flow: grain freight or handling service
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

#### Outputs

##### Product flows

###### Grain delivered to farm or primary-conditioning hand-off (`barley_at_handoff`)

The hand-off output is the measured grain mass transferred to the selected gate route, with moisture basis and lot identity retained.

- Selected flow: harvested non-seed barley grain at the field or conditioning hand-off
- Flow property / unit: Mass / kg
- Amount rule: measured grain mass at the harvest or conditioning hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

##### Waste flows

###### Harvest and field-delivery loss (`harvest_field_delivery_loss`)

Record measured grain or foreign-material loss with its declared fate. No fixed waste UUID is assumed.

- Selected flow: measured harvest or field-delivery loss with declared fate
- Flow property / unit: Mass / kg
- Amount rule: measured loss mass and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested barley grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`

### Process: Primary Drying, Cleaning, and Grading (`barley_primary_conditioning`)

#### Inputs

##### Product flows

###### Harvested barley grain entering primary conditioning (`grain_to_primary_conditioning`)

Use this input only when the declared gate is after primary drying, cleaning, grading, or short-term storage. The farm-gate fixed UUID is not reused unless the declared state is verified as identical.

- Selected flow: harvested barley grain received for primary conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured grain mass entering the conditioning batch with moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning batch and per declared output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

###### Conditioning process heat (`conditioning_process_heat`)

Record drying or conditioning heat by carrier and batch when the conditioning node is included.

- Selected flow: process heat for drying or conditioning
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `purchased-process-heat`
- Flow property / unit: Energy / MJ or kWh
- Amount rule: metered or supplier-recorded energy allocated to the conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conditioned barley grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`

###### Conditioning mechanical power (`conditioning_mechanical_power`)

Record electricity or other mechanical power used for cleaning, grading, and conveying.

- Selected flow: mechanical power for cleaning, grading, or conveying
- Flow property / unit: Energy / MJ or kWh
- Amount rule: metered or supplier-recorded energy allocated to the conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conditioned barley grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`

###### Conditioning water (`conditioning_water_input`)

Record process water only when it is actually used and its role is documented.

- Selected flow: conditioning process water
- Binding: parameterized
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: metered or batch-recorded water input by conditioning campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned barley grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`

###### Cleaning auxiliary material (`cleaning_auxiliary_input`)

Record a named cleaning auxiliary or treatment input when used. No generic material-input Flow Set is used; retain unmapped coverage until a compatible identity is confirmed.

- Selected flow: named cleaning auxiliary from the batch record
- Flow property / unit: Mass / kg
- Amount rule: measured auxiliary mass per conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned barley grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_auxiliary_records`

##### Waste flows

###### Conditioning screenings and rejected grain (`conditioning_screenings_and_rejects`)

Screenings, foreign material, rejected grain, and off-grade material are recorded by stream and fate; do not count them as accepted reference product. The stream remains unmapped unless an exact identity or applicable Flow Set is confirmed.

- Selected flow: measured conditioning screening or reject with declared fate
- Flow property / unit: Mass / kg
- Amount rule: measured batch mass and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grain entering primary conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_reject_records`

#### Outputs

##### Product flows

###### Conditioned non-seed barley grain (`conditioned_barley_grain`)

Conditioned barley grain is the accepted reference output when the declared gate is after primary conditioning. Bind it only after exact product-state verification; otherwise retain an unmapped output record.

- Selected flow: conditioned non-seed barley grain at declared gate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted grain output with moisture basis and quality descriptors
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioned_output_records`

##### Waste flows

All conditioning rejects, screenings, damaged grain, and packaging or handling waste are assigned a measured fate in the data package.

##### Elementary flows

Record conditioning energy emissions only when the energy record, factor selection, and elementary-flow identity are confirmed.

###### Conditioning dust to air (`conditioning_dust_to_air`)

Record dust only when measured or calculated under a declared method and with a confirmed receiving compartment and elementary-flow identity. Otherwise retain unmapped coverage.

- Selected flow: grain dust emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured dust-collector mass or method-calculated emission
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conditioned barley grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_reject_records`

### Process: Storage and Declared Gate Dispatch (`barley_storage_and_dispatch`)

#### Inputs

##### Product flows

###### Grain entering declared storage or dispatch (`grain_to_declared_storage`)

This process is conditional and is included when the selected gate follows storage or a delivery hand-off.

- Selected flow: non-seed barley grain entering declared storage or dispatch
- Flow property / unit: Mass / kg
- Amount rule: measured grain mass entering storage or dispatch, with moisture basis and lot identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per storage period and per reference output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_handoff_records`

###### Storage or dispatch energy (`storage_dispatch_energy`)

Record storage electricity, aeration, and other energy by lot and storage period.

- Selected flow: storage electricity, aeration, or other energy carrier
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / MJ or kWh
- Amount rule: metered or supplier-recorded energy by storage period and grain mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grain and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_handoff_records`

###### Dispatch transport service (`dispatch_transport_service`)

Record the declared transport or internal handling service from storage to the selected gate.

- Selected flow: freight transport service from storage or declared gate
- Flow property / unit: Mass-distance / kg*km or t*km
- Amount rule: measured mass, distance, mode, and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg barley at the declared gate
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_gate_output_records`

###### Transport packaging (`transport_packaging_input`)

Packaging is recorded only when the declared gate uses bags, liners, or another transport-packaging state rather than bulk grain.

- Selected flow: transport-packaging function
- Binding: parameterized
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass or item count converted to mass using the recorded packaging record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg barley at the declared packaged gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

###### Storage loss or damaged grain (`storage_loss_or_damaged_grain`)

Record storage loss by lot, period, mass, damage category, and fate whenever storage is included. The loss remains unmapped unless an exact identity or applicable Flow Set is confirmed.

- Selected flow: measured storage loss or damaged grain with declared fate
- Flow property / unit: Mass / kg
- Amount rule: measured inventory reconciliation or disposal mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grain entering storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_handoff_records`

#### Outputs

##### Product flows

###### Declared-gate non-seed barley grain (`declared_gate_barley_grain`)

The declared-gate output is the reference product when the selected gate includes storage or dispatch. Bind only after exact product-state verification.

- Selected flow: non-seed barley grain at declared gate
- Flow property / unit: Mass / kg
- Amount rule: measured grain mass at the declared gate, with moisture basis, quality descriptors, and bulk or packaging state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_gate_output_records`

##### Waste flows

Any damaged or rejected material not already recorded in the storage-loss row is recorded with its own measured fate.

##### Elementary flows

Energy-related emissions are calculated only from confirmed energy records and declared factors.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_priority` | crop, harvest, conditioning, storage, and dispatch processes | First avoid allocation by subdividing crop operations, harvest, drying, cleaning, grading, storage, and waste handling wherever records support separate process nodes. | `iso-14044-2006` |
| `allocation_grain_and_residue` | barley grain and removed straw or residue | Treat residue left in the field according to its declared fate. When straw or another residue is removed or sold and subdivision is not possible, use an explicitly declared physical or economic allocation method and disclose sensitivity. | `iso-14044-2006`; `fao-grain-postharvest-systems-1998` |
| `allocation_screenings_and_rejects` | screenings, damaged grain, and off-grade material | Record accepted grain, screenings, rejects, and losses as separate outputs with fates. Do not assign rejected material to the reference product without an explicit rework or allocation decision. | `fao-grain-postharvest-systems-1998`; `usda-barley-grain-standards` |
| `allocation_substitution` | residue or by-product use | Use substitution only when the displaced product, route, market, and evidence are declared; do not infer a displacement credit from a product label or generic residue name. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_input_records` | `barley_crop_production` | seed for sowing input | seed purchase or receiving record | lot; variety; supplier; source; treatment; mass; moisture basis; date; field | weighbridge, calibrated scale, invoice, or supplier record | kg | per seed lot | crop cycle | production field or farm | sum seed mass by field and crop lot | scale calibration, invoice, supplier record |
| `cp_fertilizer_input_records` | `barley_crop_production` | fertilizer inputs | purchase and application record | product; nutrient; product mass; nutrient mass; date; field; application method | invoice, nutrient analysis, farm log, or applicator record | kg product and kg nutrient | per application | crop cycle | production field or farm | sum by product and nutrient and normalize to declared output | invoice, nutrient analysis, application log |
| `cp_irrigation_records` | `barley_crop_production` | irrigation and withdrawal | meter or pumping record | source; meter; readings; volume; pumping energy; date; field | calibrated meter, pumping log, or invoice | m3, kg, and energy unit | per event or period | irrigation season | field and water source | sum by source and distinguish withdrawal from delivery | meter calibration, readings, invoice |
| `cp_field_energy_records` | `barley_crop_production` | field energy | field operation energy record | operation; machine; energy carrier; quantity; field; date | fuel log, invoice, telematics, or meter | L, kg, MJ, or kWh | per field operation | crop cycle | production field or farm | sum by operation and normalize to selected gate output | invoice, machine log, telematics |
| `cp_crop_protection_records` | `barley_crop_production` | crop protection | application record | product; active substance; formulation; mass; date; field; application method | spray log, product label, or applicator record | kg product or kg active substance | per application | crop cycle | production field or farm | sum by product or active substance and normalize to output | label, log, applicator record |
| `cp_land_and_output_records` | `barley_crop_production` | land, harvest, and outputs | field and harvest record | field; area; crop duration; harvest date; gross grain; residue; fate; moisture; quality | field record plus calibrated scale and dispatch records | ha, crop duration, kg, percent | per harvest and annual reconciliation | crop year | production field or farm | reconcile field outputs before normalization | field map, scale calibration, harvest ticket |
| `cp_harvest_and_output_records` | `barley_harvest_and_delivery` | harvested grain and harvest energy | harvest and delivery record | field; machine; operation; grain mass; residue; loss; moisture; energy; date; hand-off | calibrated scale, harvest log, telematics, and delivery ticket | kg, percent, L, MJ, or kWh | per harvest event | crop cycle | field to gate hand-off | sum by lot and declared hand-off | scale ticket, machine record, delivery record |
| `cp_harvest_energy_records` | `barley_harvest_and_delivery` | harvest energy | machine or contractor record | machine; energy carrier; quantity; harvested mass; period | contractor invoice, fuel log, telematics, or meter | kg, L, MJ, or kWh | per harvest event or period | crop cycle | harvest operation | allocate by harvested mass and declared operation | invoice, telematics, meter |
| `cp_residue_and_fate_records` | `barley_harvest_and_delivery` | residue and loss fates | residue or loss record | stream; mass; moisture; fate; destination; date; field or lot | scale ticket, field log, disposal, transfer, or sales record | kg | per event or campaign | crop cycle | field and hand-off | sum by stream and fate; do not merge with accepted grain | scale ticket, fate record, field log |
| `cp_conditioning_energy_records` | `barley_primary_conditioning` | drying, cleaning, and grading energy | facility energy record | line; energy type; quantity; period; batch; input and output mass | meter, utility bill, equipment log, or supplier record | kWh, MJ, kg, or L | per batch or campaign | conditioning campaign | facility and line | allocate to batch and normalize to accepted output | meter, bill, equipment log |
| `cp_conditioning_water_records` | `barley_primary_conditioning` | conditioning water | batch water record | batch; source; volume; use; date; input and output mass | meter, batch sheet, or utility record | m3 or kg | per batch or campaign | conditioning campaign | facility and line | sum by source and use | meter, batch sheet, utility record |
| `cp_conditioning_auxiliary_records` | `barley_primary_conditioning` | cleaning auxiliary | batch input record | product; identity; mass; purpose; batch; date | batch sheet, invoice, label, or supplier record | kg | per batch | conditioning campaign | facility and line | sum by named input and batch | invoice, label, batch record |
| `cp_conditioning_reject_records` | `barley_primary_conditioning` | screenings, rejects, and dust | conditioning reject record | batch; stream; mass; moisture; quality; fate; dust-collector mass | calibrated scale, reject log, dust record, or contractor record | kg and percent | per batch or campaign | conditioning campaign | facility and line | sum by stream and fate and reconcile to batch input | scale, reject log, fate record |
| `cp_conditioned_output_records` | `barley_primary_conditioning` | conditioned reference output | conditioning output record | batch; accepted mass; moisture; grade; quality; cleaning status; gate | calibrated scale and quality test record | kg and percent | per batch | conditioning campaign | facility and declared gate | sum accepted batches at declared basis | scale calibration, quality test, dispatch record |
| `cp_storage_and_handoff_records` | `barley_storage_and_dispatch` | storage energy and loss | storage inventory record | lot; opening mass; closing mass; moisture; duration; energy; losses; fate | inventory reconciliation, meter, utility bill, or storage log | kg, percent, days, MJ, or kWh | per lot or storage period | declared storage duration | storage site | reconcile mass and allocate energy by lot and duration | inventory record, meter, bill |
| `cp_packaging_records` | `barley_storage_and_dispatch` | transport packaging | packaging issue or dispatch record | packaging type; item count; mass; capacity; lot; gate; date | packaging inventory, packing log, or supplier record | item and kg | per packaged lot | declared gate period | declared gate or packing site | sum packaging mass or convert item count using recorded capacity and mass | inventory record, packing log, supplier record |
| `cp_declared_gate_output_records` | `barley_storage_and_dispatch` | declared-gate output | dispatch or gate record | lot; gate; date; mass; moisture; quality; packaging or bulk state | weighbridge, scale, dispatch, or receiving record | kg and percent | per shipment or gate event | declared gate period | declared gate | sum output lots and preserve gate identity | scale ticket, dispatch record, quality record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_declared_gate` | all foreground flows | recorded flow amount / accepted non-seed barley grain mass at the selected declared gate * reference amount | all applicable protocols; declared gate output | amount per 1 kg reference product | `mass-balance-identity` |
| `convert_moisture_basis` | grain mass comparisons | dry-matter mass = as-is mass * (1 - moisture fraction); retain both as-is and converted values and the measured moisture basis | harvest and conditioning mass; moisture records | comparable mass basis | `fao-grain-postharvest-systems-1998`; `usda-barley-grain-standards` |
| `calculate_water_withdrawal` | irrigation | source-specific metered withdrawal converted to the declared unit and normalized to selected gate output; report delivery and consumption separately | `cp_irrigation_records`; `cp_declared_gate_output_records` | withdrawal per reference output | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_n2o` | fertilizer N and direct N2O | apply the selected IPCC tier and factor to accounted N input and convert N2O-N to N2O where applicable; disclose factor selection | `cp_fertilizer_input_records`; selected method factor | direct soil N2O per reference output | `ipcc-2019-managed-soils-n2o` |
| `reconcile_harvest_outputs` | harvest and field delivery | harvested grain + residue removed + measured loss + field-return or explained remainder = declared harvest input on a common moisture basis | `cp_land_and_output_records`; `cp_harvest_and_output_records`; `cp_residue_and_fate_records` | mass-balance reconciliation | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | primary conditioning | accepted grain + screenings + rejects + dust or measured loss = conditioning input on a common moisture basis; explain residual | `cp_conditioning_reject_records`; `cp_conditioned_output_records` | conditioning yield and loss reconciliation | `fao-grain-postharvest-systems-1998`; `mass-balance-identity` |
| `allocate_storage_energy` | storage | storage energy is allocated by recorded lot mass and declared storage duration; avoid allocation when a dedicated meter exists | `cp_storage_and_handoff_records` | storage energy per reference output | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_non_seed_identity` | reference product | Declare that the product is non-seed barley grain and state the intended end-use class; do not use seed quality claims as a substitute. | product metadata, contract, quality record, or dispatch record |
| `dq_gate_and_moisture` | reference flow and outputs | Record the selected gate, as-is mass, moisture basis, and any dry-matter conversion for every reconciled output stream. | scale, moisture test, dispatch, and calculation records |
| `dq_temporal_coverage` | crop production and harvest | Cover the declared crop cycle and harvest year; disclose whether the dataset is a single year, multi-year average, or scenario. | dated farm, harvest, and input records |
| `dq_input_completeness` | field and conditioning inventory | Quantify or justify zero or exclusion for seed-for-sowing, fertilizer, irrigation, crop protection, land, field energy, harvest energy, drying energy, storage energy, and direct emissions. | ledgers, invoices, logs, meters, and method declaration |
| `dq_output_fate` | residues, screenings, rejects, and losses | Record every non-reference output, its mass basis, boundary crossing, destination, and fate; evidence gap fates block finalization. | scale records, field logs, disposal, transfer, or sales records |
| `dq_quality_descriptor` | grain identity | Record quality or grade descriptors relevant to the intended end use, without turning them into universal acceptance thresholds. | official grade test, buyer specification, or local quality record |
| `dq_uuid_identity` | flow and elementary-flow references | Every fixed UUID must be traceable to a confirmed identity record; rows without a fixed UUID use a compatible parameterized Flow Set or remain unbound rather than being silently replaced by a generic UUID. | local identity record and review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_non_seed_boundary` | product identity | Confirm that the reference product is non-seed barley grain and that seed for sowing, malt, flour, starch, ethanol, brewed products, and downstream food or feed processing are excluded or separately modelled. | `usda-barley-grain-standards`; `fao-grain-postharvest-systems-1998` |
| `validation_reference_flow` | reference flow | Confirm one 1 kg reference flow uses the verified `Barley, other` identity, mass property, kg unit, declared end use, moisture basis, quality descriptors, geography, crop year, and gate. | `usda-barley-grain-standards` |
| `validation_process_completeness` | process map and inventory | Confirm crop production, harvest, and the applicable primary-conditioning or storage processes are present or explicitly excluded by the declared gate. | `fao-grain-postharvest-systems-1998` |
| `validation_nitrogen` | fertilizer and emissions | Confirm product mass differs from kg N, factor selection is declared, N2O-N conversion is transparent, and other nitrogen pathways are addressed or justified. | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | irrigation | Confirm withdrawal, delivered irrigation, consumption, and water-footprint results are distinguished and not double counted. | `fao-crop-evapotranspiration-56` |
| `validation_moisture_and_mass_balance` | harvest and conditioning | Confirm mass reconciliation uses a common moisture basis and that accepted grain, residues, screenings, rejects, and losses have declared fates. | `fao-grain-postharvest-systems-1998`; `mass-balance-identity` |
| `validation_allocation` | co-products and residues | Confirm subdivision was considered first, any allocation method is declared, substitution has an evidenced displaced product, and sensitivity is reported when material. | `iso-14044-2006` |
| `validation_uuid_review` | identity references | Confirm every fixed UUID and receiving compartment; resolve each parameterized Flow Set at foreground data generation before creating a final TIDAS exchange. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream grain-trading, food, feed, malting, industrial, or LCA data construction when the declared non-seed end use, geography, crop year, moisture basis, quality descriptors, production route, and gate match the dataset metadata |
| excluded_use | barley seed for sowing; malt; flour; starch; ethanol; brewed products; processed foods or feeds; datasets with an incompatible gate or evidence gap material loss or fate records |
| required_metadata | reference flow; non-seed end use; barley type or variety where material; geography; crop cycle and year; seed-for-sowing source; irrigation status; fertilizer and crop-protection records; moisture basis; quality descriptors; harvest and conditioning route; declared gate; residue and reject fates; allocation; data-quality disclosure |
| required_quality_disclosure | primary-record coverage; temporal and geographic representativeness; moisture and mass-balance treatment; selected factors; identity coverage and unmapped-flow disclosure; omitted inputs; allocation and sensitivity; module checklist result |
| update_trigger | material change in route, gate, moisture or quality representation, end-use scope, fertilizer or crop-protection practice, irrigation, harvest or conditioning technology, storage duration, factor source, identity binding, or evidence status |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-barley-01152` | official_guidance | United Nations Statistics Division, CPC 3.0, `01152 Barley, other`, <https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/01152> | classification boundary and exact CPC leaf identity |
| `fao-grain-postharvest-systems-1998` | official_guidance | FAO, *Agricultural engineering in development — Grain and post-harvest systems*, <https://www.fao.org/4/t0522e/T0522E03.htm> | harvest-to-storage sequence, drying, cleaning, handling, losses, and declared post-harvest hand-offs |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration*, <https://www.fao.org/4/X0490E/X0490E00.htm> | irrigation and crop-water data collection and water distinctions |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil N2O method selection, activity data, and factor disclosure |
| `usda-barley-grain-standards` | official_guidance | USDA Agricultural Marketing Service, *Barley Standards*, <https://www.ams.usda.gov/grades-standards/barley-grades-and-standards> | barley grain quality, grade descriptors, and separation from seed-specific scope |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, <https://www.iso.org/standard/38498.html> | allocation hierarchy, LCA scope, inventory, reporting, and data-quality disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity. | harvest, conditioning, storage, and output reconciliation |
