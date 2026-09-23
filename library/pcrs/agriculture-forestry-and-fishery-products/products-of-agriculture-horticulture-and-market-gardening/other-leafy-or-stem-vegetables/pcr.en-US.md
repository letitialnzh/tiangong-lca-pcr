---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-leafy-or-stem-vegetables
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other leafy or stem vegetables

## 1. Scope and Applicability

This PCR covers cultivation and farm-gate preparation of fresh, unprocessed leafy or stem vegetables classified as CPC 3.0:01219. It covers direct-sown and transplanted annual crops, field or protected cultivation, irrigation, nutrient and crop-protection inputs, harvest, grading, optional washing, cooling, and primary packaging when these occur before farm-gate hand-off. It includes chervil, chard, parsley, purslane, sea kale, rhubarb, sorrel, savory, tarragon, watercress, and other salad vegetables outside lettuce and chicory. Vegetable seed and transplants sold as planting material, spices and aromatic crops classified elsewhere, asparagus, artichokes, cabbages, cauliflower, broccoli, lettuce, chicory, spinach, roots, bulbs, tubers, processed or frozen products, distribution, retail, preparation, and consumption are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-leafy-or-stem-vegetables |
| classification_refs | CPC 3.0:01219 Other leafy or stem vegetables |
| covered_products | Fresh, unprocessed leafy or stem vegetables at farm gate, including chard, parsley, purslane, rhubarb, sorrel, savory, tarragon, watercress, and other salad vegetables outside specified CPC leaves |
| excluded_products | Seeds and transplants sold for planting, spices or aromatic crops classified in CPC 016, asparagus, artichokes, cabbages, cauliflower, broccoli, lettuce, chicory, spinach, roots, bulbs, tubers, and processed, frozen, cooked, dried, or retail-ready products beyond the declared farm gate |
| representative_product | Marketable fresh leafy or stem vegetables, sorted to the declared crop, grade, harvest maturity, trim state, and market route |
| production_route | Direct sowing or transplant establishment, managed crop production, repeated or single harvest, sorting and optional farm-gate washing, cooling, and packaging |
| market_state | Fresh, unprocessed produce at farm gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh other leafy or stem vegetables at farm gate |
| How much | 1,000 kg |
| How well | Fresh, unprocessed, and saleable under the declared crop identity, harvest maturity, grade, trim, washing, and packaging state |
| How long or cycle | One declared crop cycle and harvest period; repeated harvests are aggregated by crop-year and establishment cohort |
| reference_flow_link | other_leafy_stem_vegetables_farm_gate_output |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other leafy or stem vegetables `4dda0ce0-12e0-4cc0-9d3d-f218fa3e6892` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | farm-gate hand-off; production geography; crop identity and botanical name where relevant; production year and crop cycle; field or protected route; harvest period; grade and maturity; trim state; washed or unwashed; packaging state |
| Binding | `fixed` |
| Flow Set |  |
| Flow Set version |  |
| Flow Set group |  |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvested and farm-gate produce | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep harvest-ready, gross harvested, marketable, rejected, and trimmed masses distinct. |
| `field_year_normalization` | crop and field records | Area and mass | ha and kg | Record quantities by field, crop, and cycle before normalizing them to marketable output from the corresponding crop-year. |
| `nutrient_basis` | fertilizer and organic amendment inputs | Mass | kg N, kg P2O5, or kg K2O | Convert product mass using documented nutrient concentration and preserve each nutrient basis separately. |
| `water_volume` | irrigation and wash water | Volume | m3 | Record metered delivered water by source and use; do not substitute rainfall for delivered irrigation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural bed, field, or protected growing area receiving seed, transplants, or an established crop, with prior land use and excluded pre-plant work disclosed |
| starting_condition_role | Beginning of the declared crop cycle and field-year attribution |
| product_classification_scope | Fresh other leafy or stem vegetables under CPC 3.0:01219 through farm-gate hand-off |
| recursive_input_rule | Purchased seed, transplants, and other same-category planting material are distinct upstream product inputs and are linked once rather than recreated inside this PCR. |
| upstream_dataset_requirement | Require upstream datasets for seed or transplants, fertilizers, amendments, crop-protection products, irrigation water, energy, transport services, and packaging when used. |
| disclosure | Declare crop identity, botanical type where relevant, geography, field or protected route, crop cycle, irrigation source, nutrient basis, crop-protection program, harvest schedule, residue fate, washing, cooling, packaging, and farm-gate hand-off. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and cultivation | Include seed or transplant establishment, crop management, harvest, and the represented crop cycle; attribute shared bed preparation to the declared crop and cycle without double counting. | `fao-good-agricultural-practices`; `extension-leafy-vegetable-production` |
| `boundary_farm_gate` | harvest and handling | End at transfer of the declared fresh marketable product at farm gate; include on-farm sorting, trimming, washing, cooling, and primary packaging when performed before transfer. | `usda-ams-fresh-produce`; `codex-fresh-produce-hygiene` |
| `boundary_managed_soils` | field nutrients and residues | Include applicable direct and indirect nitrogen emissions and returned-residue nitrogen with one declared method and prevent double counting between fertilizer, residue, and soil pools. | `ipcc-2019-managed-soils` |
| `boundary_residue_destinations` | crop residues and rejects | Distinguish field return, composting, feed, treatment, and disposal; unspecified residues and downgraded produce are waste until a documented co-product hand-off exists. | `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Crop establishment | required | once per direct-sown or transplanted crop cycle | foreground establishment | established crop area and planting input |
| `field_crop_management` | Field or protected crop management | required | each represented crop cycle and field-year | foreground managed biological production | managed area, input activity, and harvest-ready mass |
| `harvest_and_farm_gate_preparation` | Harvest and farm-gate preparation | required | each represented harvest lot or period | foreground harvest, grading, and hand-off | 1,000 kg marketable fresh product |

### Process: Crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Seed or transplant material (`planting_material_input`)

Record the crop-specific seed lot, seedlings, or transplants that enter the declared field or growing area.

- Selected flow: Seed or transplant material
- Flow property / unit: Mass or number of items / kg or plant
- Amount rule: Record purchased or produced planting units by crop, lot, field, and viability; retain the basis used for normalization.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare established and per 1,000 kg marketable reference product
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `extension-leafy-vegetable-production`
- Range: Provisional planting-density screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 10000
  - Upper: 2000000
  - Unit: plants/ha or viable seeds/ha
  - Basis: broad category range pending crop-specific seed or transplant records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`crop_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare established and per 1,000 kg marketable reference product
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `extension-leafy-vegetable-production`
- Range: Provisional establishment nitrogen screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 150
  - Unit: kg N/ha
  - Basis: establishment application pending soil test and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional establishment phosphorus screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 180
  - Unit: kg P2O5/ha
  - Basis: soil-test-dependent establishment application pending field records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Established crop area (`established_crop_output`)

This internal hand-off records accepted crop area and is not the reference product.

- Selected flow: Established crop area
- Flow property / unit: Area / ha
- Amount rule: Accepted area after emergence, establishment, and replacement losses are reconciled.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per establishment campaign
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Sources: `extension-leafy-vegetable-production`

##### Waste flows

##### Elementary flows

### Process: Field or protected crop management (`field_crop_management`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`field_crop_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-cycle and per 1,000 kg marketable reference product
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`
- Sources: `extension-leafy-vegetable-production`; `ipcc-2019-managed-soils`; `fao-good-agricultural-practices`
- Range: Crop-cycle nitrogen screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg N/ha-cycle
  - Basis: managed crop cycle pending soil test and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop-cycle phosphorus screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg P2O5/ha-cycle
  - Basis: soil-test-dependent crop cycle pending field records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Crop-cycle potassium screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 350
  - Unit: kg K2O/ha-cycle
  - Basis: soil-test-dependent crop cycle pending field records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water_input`)

Record water delivered to the crop separately from precipitation and wash water.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter delivered irrigation by field, source, and irrigation event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-cycle and per 1,000 kg marketable reference product
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-water-efficiency`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12000
  - Unit: m3/ha-cycle
  - Basis: broad crop-cycle range pending meter and source records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel (`mobile_machinery_fuel_input`)

Record diesel or other fuel used by field machinery, harvest equipment, and on-farm transport.

- Selected flow: Diesel fuel
- Flow property / unit: Mass or energy / kg or MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Record fuel purchase, tank, or equipment-hour data and retain the energy or mass conversion used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-cycle and per 1,000 kg marketable reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`
- Sources: `fao-good-agricultural-practices`

###### Crop-protection product (`crop_protection_input`)

Record each crop-protection product and application separately with active ingredient and application area.

- Selected flow: Crop-protection product
- Flow property / unit: Mass / kg product
- Amount rule: Record product mass and active ingredient from label, invoice, or application record; do not infer an active ingredient when the formulation is unknown.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-cycle and per 1,000 kg marketable reference product
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`
- Sources: `fao-good-agricultural-practices`

##### Waste flows

##### Elementary flows

###### Land occupation (`land_occupation`)

Report land occupation for the represented crop area and duration; protected structures must be disclosed separately.

- Selected flow: Occupation, agricultural area
- Flow property / unit: Area-time / m2*a
- Amount rule: Field or protected growing area multiplied by occupied time for the declared cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_cycle_records`
- Sources: `fao-good-agricultural-practices`

###### Water resource withdrawal (`water_resource_withdrawal`)

Report source-water withdrawal when it crosses the environmental boundary and distinguish it from delivered irrigation volume.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Record withdrawal at the source or use the declared source-to-field loss method; do not count precipitation as withdrawal.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-cycle and per 1,000 kg marketable reference product
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-water-efficiency`

#### Outputs

##### Product flows

###### Harvest-ready leafy or stem vegetables (`harvest_ready_output`)

This internal output records the crop mass available to harvest and handling before grade and trim losses.

- Selected flow: Harvest-ready leafy or stem vegetables
- Flow property / unit: Mass / kg
- Amount rule: Record harvest-ready mass from field or lot records before harvest and grading losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable reference product
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `extension-leafy-vegetable-production`

##### Waste flows

###### Field crop residues (`field_residue_output`)

Record non-marketable leaves, stems, roots, and postharvest residues by destination.

- Selected flow: Leafy or stem crop residues
- Flow property / unit: Mass / kg fresh or dry matter
- Amount rule: Weigh or calculate residue mass and declare field return, composting, feed, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-cycle and per 1,000 kg marketable reference product
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`
- Sources: `fao-good-agricultural-practices`; `ipcc-2019-managed-soils`
- Range: Provisional residue screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2500
  - Unit: kg fresh residue/1,000 kg marketable product
  - Basis: broad first-pass crop residue range pending field and destination records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct and indirect soil nitrogen emissions (`soil_nitrogen_emissions`)

Calculate applicable soil emissions from synthetic, organic, and returned-residue nitrogen using one declared method.

- Selected flow: Soil nitrogen emissions
- Flow property / unit: Mass / kg N
- Amount rule: Apply the declared IPCC or accepted regional method to activity data and retain factors and climate or management qualifiers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_cycle_records`
- Sources: `ipcc-2019-managed-soils`

### Process: Harvest and farm-gate preparation (`harvest_and_farm_gate_preparation`)

#### Inputs

##### Product flows

###### Harvest-ready crop input (`harvest_ready_crop_input`)

Record harvested crop entering grading and farm-gate preparation from each field or lot.

- Selected flow: Harvest-ready leafy or stem vegetables
- Flow property / unit: Mass / kg
- Amount rule: Link each harvest lot to field, crop, date, and harvest method; measure gross input before grading and trimming.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `extension-leafy-vegetable-production`

###### Farm-gate wash water (`wash_water_input`)

Record water used for washing or cooling only when the operation occurs before farm-gate transfer.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter or invoice water used for washing and cooling by lot or shift.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Sources: `codex-fresh-produce-hygiene`

###### Primary packaging (`primary_packaging_input`)

Record packaging used before farm-gate hand-off by material and mass.

- Selected flow: Primary packaging material
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Weigh packaging consumed by lot and preserve material composition and reuse status.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Sources: `usda-ams-fresh-produce`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh other leafy or stem vegetables at farm gate (`other_leafy_stem_vegetables_farm_gate_output`)

This is the trimmed, graded, fresh, unprocessed product transferred at the declared farm gate.

- Selected flow: Other leafy or stem vegetables `4dda0ce0-12e0-4cc0-9d3d-f218fa3e6892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Verified scale mass after excluding field, harvest, grading, and trim losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg marketable fresh other leafy or stem vegetables
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handling_records`
- Sources: `usda-ams-fresh-produce`; `codex-fresh-produce-hygiene`

##### Waste flows

###### Rejected and trimmed produce (`rejected_trimmed_output`)

Record rejected, damaged, wilted, undersized, overmature, and trimmed material by destination.

- Selected flow: Rejected and trimmed leafy or stem vegetables
- Flow property / unit: Mass / kg fresh material
- Amount rule: Measure or reconcile reject and trim mass and declare field return, feed, composting, treatment, or disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Sources: `usda-ams-fresh-produce`; `codex-fresh-produce-hygiene`
- Range: Provisional reject and trim screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 400
  - Unit: kg/1,000 kg marketable product
  - Basis: broad first-pass range pending grade, damage, and trim records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_bed_preparation` | establishment and field management | Attribute shared bed or protected-area preparation to the declared crop cycle using documented area, duration, and crop sequence; disclose intercropping or multi-crop use. | `fao-good-agricultural-practices` |
| `allocation_marketable_and_rejects` | harvest and handling | Reconcile harvest-ready or gross harvested mass to marketable product, rejects, and trimmings; treat rejects as waste unless a documented buyer, specification, quantity, and destination establish a co-product. | `usda-ams-fresh-produce` |
| `allocation_secondary_output` | intentional secondary products | For an intentional secondary product, report quantity and hand-off and apply an explicitly justified mass or economic allocation; no default avoided burden applies. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material, establishment nutrients, accepted area | seed or transplant, purchase, application, and field records | crop_identity; botanical_name; lot_id; date; units_or_mass; viability; field_id; area; product_mass; nutrient_concentration; accepted_area | reconcile purchases and applications to each crop and field | plant; kg; ha | each establishment event | complete crop establishment period | every represented field or protected area | sum by crop-field-cycle and preserve replacement losses | invoices, labels, seed certificates, field maps, and acceptance records |
| `cp_field_cycle_records` | `field_crop_management` | nutrients, amendments, fuel, crop protection, land, residues, and emissions activity | field-cycle log, invoice, meter, application, and residue record | field_id; crop_identity; cycle_id; area; date; product_identity; product_mass; nutrient_concentration; amendment_dry_matter; fuel; electricity; irrigation; crop_protection; residue_mass; dry_matter; destination | reconcile all activities to the same crop, field, and cycle | ha; kg; m3; L; kWh | each event and cycle close | full declared crop cycle | every represented field or protected area | sum by field-cycle before reference-flow normalization | invoices, labels, analyses, meters, maps, and disposition receipts |
| `cp_irrigation_records` | `field_crop_management` | irrigation withdrawal and delivered water | meter, pump, source, and irrigation log | field_id; source; date; meter_start; meter_end; delivered_volume; withdrawal_volume; conveyance_loss; method | reconcile source withdrawal to field delivery and retain loss method | m3 | each irrigation event | full declared cycle | every represented irrigated field | sum by field-cycle and separate irrigation from wash water | calibrated meters, pump records, and water permits |
| `cp_harvest_records` | `harvest_and_farm_gate_preparation` | harvest-ready and gross harvested product | harvest log and scale record | field_id; crop_identity; lot_id; harvest_date; harvest_pass; gross_mass; harvest_loss; maturity; grade; trim_state | link each harvest lot to field and date | kg; ha | each harvest lot or pass | complete harvest window | every represented field and lot | sum by field-cycle without merging incompatible crop identities | calibrated scales, lot tickets, and grade records |
| `cp_handling_records` | `harvest_and_farm_gate_preparation` | wash water, packaging, marketable output, rejects, and trim | lot, scale, meter, packaging, and waste records | lot_id; source_field; gross_input; wash_water; cooling_energy; packaging_material; packaging_mass; marketable_mass; grade; trim_state; reject_mass; reject_reason; destination | preserve lot-level mass and utility reconciliation through transfer | kg; m3; kWh | each lot or shift | complete harvest and packing period | every represented handling line | reconcile input, product, rejects, trim, and mass change before aggregation | calibrated scales, meters, grade inspection, and destination receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_equivalent` | fertilizer inputs | Product mass multiplied by documented nutrient fraction equals kg N, P2O5, or K2O; retain each basis separately. | product mass; nutrient concentration; area | nutrient-equivalent input | `extension-leafy-vegetable-production` |
| `calc_irrigation_withdrawal` | irrigation | Withdrawal equals metered or documented source volume; delivered irrigation and conveyance loss are reported separately. | source meter; field meter; loss method | source withdrawal and delivered irrigation | `fao-water-efficiency` |
| `calc_field_cycle_normalization` | cultivation | Divide complete field-cycle quantity by marketable output from the corresponding crop and cycle. | field-cycle quantity; marketable mass | quantity per 1,000 kg reference product |  |
| `calc_product_balance` | harvest and handling | Gross harvested input plus measured mass change equals marketable product plus rejects and trimmings within declared uncertainty. | gross, marketable, reject, trim, and mass-change records | reconciled output quantities | `usda-ams-fresh-produce` |
| `calc_managed_soil_emissions` | soil nitrogen emissions | Apply the declared applicable IPCC or accepted regional equations to synthetic, organic, and returned-residue nitrogen; preserve factors and prevent double counting. | nitrogen activity data; factors; climate and management qualifiers | direct and indirect nitrogen emissions | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve crop identity, botanical name where relevant, market state, grade, maturity, trim, washing, packaging, geography, year, and cycle. | lot specification and field records |
| `dq_cycle_linkage` | establishment and cultivation | Link every field-cycle to one crop identity and disclose crop sequence, replacements, failed area, and termination. | field map, planting record, and production history |
| `dq_water_separation` | irrigation and handling | Separate source withdrawal, delivered irrigation, wash water, and precipitation and retain the measurement method. | meters, pump records, and water log |
| `dq_mass_balance` | harvest and handling | Reconcile harvest-ready, gross, marketable, rejected, and trimmed masses and explain differences. | calibrated scales and lot records |
| `dq_input_completeness` | all foreground inputs | Preserve nutrient basis, irrigation source, fuel and electricity coverage, crop-protection identity, packaging material, and residue destination. | invoices, labels, meters, and logs |
| `dq_method_transparency` | calculations | Record method version, factors, normalization denominator, exclusions, and replacement of provisional estimates. | calculation file and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference product | Use the verified Other leafy or stem vegetables UUID, mass property, mass unit group, kg, and all required qualifiers. |  |
| `validation_cycle_handoffs` | process map | Link crop establishment to each field-cycle and make harvest-ready output equal the harvest input before losses. |  |
| `validation_mass_balance` | harvest and handling | Reconcile marketable output, rejects, trimmings, and mass change to gross harvested input within declared uncertainty. | `usda-ams-fresh-produce` |
| `validation_nutrients_emissions` | field management | Keep N, P2O5, and K2O distinct, document emission factors, and prevent returned-residue nitrogen double counting. | `ipcc-2019-managed-soils` |
| `validation_parameterized_flows` | parameterized rows | Resolve every Flow Set to a compatible concrete UUID before publishing a final process dataset. |  |
| `validation_unmapped_flows` | unmapped rows | Planting material, internal crop and residue states, and rejected produce remain explicit coverage requirements until exact compatible identities are supplied. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground agricultural production dataset for fresh other leafy or stem vegetables at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | crop and supply-chain studies with compatible crop identity, geography, crop cycle, route, market state, and farm-gate boundary |
| excluded_use | seed or transplant production, specified CPC leafy or stem categories, spices and aromatic crops, processed products, distribution beyond farm gate, or comparisons omitting declared crop-cycle activities |
| required_metadata | crop identity; botanical name where relevant; geography; field or protected route; area; cycle and year; planting material; irrigation source; nutrient basis; crop-protection program; harvest and grade; maturity; washing; cooling; packaging; residue fate; farm-gate hand-off |
| required_quality_disclosure | primary-data coverage; meter and scale quality; crop-cycle linkage; mass balance; water separation; data gaps; provisional ranges; emission method; Flow Set resolutions; unmapped identities |
| update_trigger | verified identity, reviewed quantitative evidence, crop-specific product specification, source-method change, or managed-soil method change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | Food and Agriculture Organization of the United Nations, Good Agricultural Practices, https://www.fao.org/3/i6677e/i6677e.pdf | crop establishment, field management, inputs, residue handling, and good-practice boundary |
| `extension-leafy-vegetable-production` | extension_guidance | University of Florida IFAS Extension, Leafy Vegetables, https://edis.ifas.ufl.edu/topic_leafy_vegetables | crop-cycle process decomposition, planting, nutrient records, and harvest data |
| `fao-water-efficiency` | official_guidance | Food and Agriculture Organization of the United Nations, Water efficiency, https://www.fao.org/land-water/water/water-efficiency/en/ | irrigation measurement, source withdrawal, and delivered-water separation |
| `usda-ams-fresh-produce` | official_guidance | United States Department of Agriculture Agricultural Marketing Service, Fresh Fruits and Vegetables, https://www.ams.usda.gov/grades-standards/vegetables | marketable grade, handling, product identity, and mass reconciliation |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius, Codes of Practice, General Principles of Food Hygiene and fresh produce guidance, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | farm-gate handling, washing, packing, and quality disclosure |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil nitrogen emissions and residue nitrogen |
