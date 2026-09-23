---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.asparagus
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Asparagus

## 1. Scope and Applicability

This PCR covers commercial production of fresh, unprocessed asparagus spears from establishment of a perennial stand through annual field management, harvest, grading, trimming, optional washing and packaging, and hand-off at the farm gate. Establishment burdens shall be linked to the productive years of the same stand. Nursery planting material sold as a product, processed asparagus, distribution beyond the farm gate, retail, cooking, and consumption are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.asparagus |
| classification_refs | CPC 3.0:01211 Asparagus |
| covered_products | Fresh, unprocessed green, white, or purple asparagus spears at farm gate |
| excluded_products | Asparagus seed, crowns or transplants sold as planting material, and canned, frozen, pickled, dried, cooked, or otherwise processed asparagus |
| representative_product | Marketable fresh asparagus spears, trimmed and graded for the declared market |
| production_route | Perennial stand establishment, annual managed production, repeated spear harvest, and farm-gate preparation |
| market_state | Fresh, unprocessed produce at farm gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh asparagus spears at farm gate |
| How much | 1,000 kg |
| How well | Fresh, unprocessed, and saleable under declared grade, colour, size, trimming, and defect criteria |
| How long or cycle | One declared harvest year, with establishment attributed across the declared productive stand life |
| reference_flow_link | `asparagus_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Asparagus `3a8d74d8-77a2-4242-b9d3-c0d1b2141b81` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | farm-gate hand-off; production geography; production year and stand age; colour route (green/white/purple); harvest period; grade and size criteria; trimming state; washed or unwashed; packaging state |
| Binding | `fixed` |
| Flow Set |  |
| Flow Set version |  |
| Flow Set group |  |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvested and farm-gate asparagus | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep gross harvested, marketable fresh, rejected fresh, and dry residue masses distinct. |
| `area_normalization` | establishment and field-year records | Area and mass | ha and kg | Record quantities by field and year before normalizing them to marketable output from the corresponding stand and year. |
| `nutrient_basis` | fertilizer inputs | Mass | kg N, kg P2O5, or kg K2O | Convert product mass only from documented nutrient concentration and preserve each nutrient basis. |
| `planting_material_count` | crowns and transplants | Number of items | plant | Record viable units; do not infer mass from count without a documented conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural field receiving crowns or transplants, with prior land use and excluded pre-plant operations disclosed |
| starting_condition_role | Beginning of perennial stand establishment and productive-life attribution |
| product_classification_scope | Fresh asparagus under CPC 3.0:01211 through farm-gate hand-off |
| recursive_input_rule | Purchased asparagus planting material is a distinct upstream product input and is linked once rather than recreated inside this PCR. |
| upstream_dataset_requirement | Require upstream datasets for planting material, fertilizers, amendments, crop-protection products, irrigation water, energy, and packaging when used. |
| disclosure | Declare prior land use, establishment year, stand age, productive-life assumption, irrigation system, nutrient basis, residue fate, harvest and grading method, washing, cooling, and packaging. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_stand` | establishment and productive years | Include establishment and represented productive years; attribute establishment burdens using the declared stand life and output without double-counting replacement planting. | `osu-asparagus-production`; `uc-asparagus-production` |
| `boundary_farm_gate` | harvest and handling | End at transfer of marketable fresh asparagus at farm gate; include on-farm grading, trimming, washing, cooling, and packaging when performed before transfer. | `penn-state-asparagus-production`; `umn-asparagus-harvest` |
| `boundary_field_emissions` | managed soil and residues | Include applicable direct and indirect nitrogen emissions and returned-residue nitrogen using one declared method, avoiding double counting. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | fern and rejected material | Distinguish field return, feed, composting, treatment, productive use, and disposal; an unspecified residue is not a co-product. | `umn-asparagus-harvest`; `ipcc-2019-managed-soils` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | Perennial stand establishment | required | once per established stand | foreground establishment | established productive area |
| `annual_field_management` | Annual asparagus field management | required | each represented production year | foreground managed biological production | managed hectare-year and harvest-ready spear mass |
| `harvest_and_farm_gate_preparation` | Harvest and farm-gate preparation | required | each represented harvest year | foreground harvest, grading, and hand-off | 1,000 kg marketable fresh asparagus |

### Process: Perennial stand establishment (`stand_establishment`)

#### Inputs

##### Product flows

###### Asparagus crowns or transplants (`planting_material_input`)

Record viable crowns or transplants entering the field separately from seed and later replacement plants.

- Selected flow: Asparagus crowns or transplants
- Flow property / unit: Number of items / plant
- Amount rule: Count viable planting units by type and field.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare established; converted to 1,000 kg marketable asparagus using same-stand lifetime output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `osu-asparagus-production`; `penn-state-asparagus-production`
- Range: Source-supported planting density
  - Range role: Typical range (`typical_range`)
  - Lower: 14800
  - Upper: 34600
  - Unit: plants/ha
  - Basis: viable planting units per established hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `osu-asparagus-production`; `penn-state-asparagus-production`

###### Agricultural nutrient and fertilizer inputs (`stand_establishment_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare established; converted to 1,000 kg marketable asparagus using same-stand lifetime output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `osu-asparagus-production`; `uc-ipm-asparagus-fertilization`
- Range: Establishment nitrogen screen
  - Range role: Typical range (`typical_range`)
  - Lower: 34
  - Upper: 224
  - Unit: kg N/ha
  - Basis: establishment-year field
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `osu-asparagus-production`; `uc-ipm-asparagus-fertilization`

- Range: Soil-test-dependent phosphorus screen
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 224
  - Unit: kg P2O5/ha
  - Basis: establishment field
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `osu-asparagus-production`

- Range: Provisional establishment potassium screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 300
  - Unit: kg K2O/ha
  - Basis: broad first-pass establishment field range pending soil-test and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Record delivered establishment irrigation separately from rainfall and annual irrigation.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter delivered water by field and source.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare established
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `uc-ipm-asparagus-irrigation`
- Range: Provisional establishment irrigation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 15240
  - Unit: m3/ha established
  - Basis: broad first-pass establishment water range pending field-meter records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Established productive asparagus stand (`established_stand_output`)

This internal hand-off records accepted productive area and is not the reference product.

- Selected flow: Established productive asparagus stand
- Flow property / unit: Area / ha
- Amount rule: Accepted area after failed plants and replacements are reconciled.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per establishment campaign
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Sources: `osu-asparagus-production`

##### Waste flows

##### Elementary flows

### Process: Annual asparagus field management (`annual_field_management`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`annual_field_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-year; converted to 1,000 kg marketable asparagus using same field-year output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_year_records`
- Sources: `osu-asparagus-production`; `uc-ipm-asparagus-fertilization`
- Range: Established-stand nitrogen screen
  - Range role: Typical range (`typical_range`)
  - Lower: 78
  - Upper: 168
  - Unit: kg N/ha-year
  - Basis: productive field-year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `osu-asparagus-production`; `uc-ipm-asparagus-fertilization`

- Range: Provisional annual phosphorus screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 300
  - Unit: kg P2O5/ha-year
  - Basis: broad first-pass productive field-year range pending soil-test and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional annual potassium screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg K2O/ha-year
  - Basis: broad first-pass productive field-year range pending soil-test and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Annual irrigation water (`annual_irrigation_water`)

Record delivered water separately from rainfall, with source and irrigation technology declared.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter delivered irrigation water by field-year.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-year; converted to 1,000 kg marketable asparagus using same field-year output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_year_records`
- Sources: `uc-ipm-asparagus-irrigation`
- Range: Regional annual irrigation screen
  - Range role: Typical range (`typical_range`)
  - Lower: 4570
  - Upper: 15240
  - Unit: m3/ha-year
  - Basis: annual applied irrigation across documented production regions
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `uc-ipm-asparagus-irrigation`

###### Purchased field electricity (`field_electricity_input`)

Record purchased electricity for irrigation and field operations separately from water volume and fuel.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter or allocate electricity to the field-year without counting pumping twice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-year; converted to 1,000 kg marketable asparagus using same field-year output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_year_records`
- Sources:
- Range: Provisional electricity screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh/ha-year
  - Basis: broad first-pass range dependent on irrigation lift and mechanization
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvest-ready asparagus spears in field (`harvest_ready_spears_output`)

This internal hand-off is fresh spear mass ready for harvest, before farm-gate grading and trimming.

- Selected flow: Harvest-ready asparagus spears in field
- Flow property / unit: Mass / kg fresh spears
- Amount rule: Gross harvested mass plus separately measured field losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-year; converted to 1,000 kg marketable asparagus using same field-year output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Sources: `osu-asparagus-production`; `uc-small-farms-asparagus`
- Range: Productive-year yield screen
  - Range role: Typical range (`typical_range`)
  - Lower: 560
  - Upper: 4480
  - Unit: kg fresh spears/ha-year
  - Basis: early through mature productive years
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `osu-asparagus-production`; `uc-small-farms-asparagus`

##### Waste flows

###### Senesced fern and asparagus field residue (`fern_residue_output`)

Record physical residue mass by destination, distinguishing field incorporation, removal, burning, composting, and other treatment.

- Selected flow: Senesced asparagus fern and field residue
- Flow property / unit: Mass / kg dry matter
- Amount rule: Measure or estimate dry matter and nitrogen content by destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed hectare-year
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_year_records`
- Sources: `umn-asparagus-harvest`; `ipcc-2019-managed-soils`
- Range: Provisional fern-residue screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 15000
  - Unit: kg dry matter/ha-year
  - Basis: broad first-pass senesced-biomass range pending dry-matter and destination records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_n2o_air_output`)

Calculate direct N2O from synthetic and organic nitrogen and returned residue nitrogen as a separate atmospheric output.

- Selected flow: Nitrous oxide to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the declared applicable IPCC or accepted regional method and preserve N2O-N to N2O conversion.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1,000 kg marketable asparagus; nitrogen input is the calculation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_year_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Method screening interval for managed-soil N2O
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg N2O/ha-year
  - Basis: non-negative first-pass interval pending site-specific nitrogen activity and factor selection
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and farm-gate preparation (`harvest_and_farm_gate_preparation`)

#### Inputs

##### Product flows

###### Harvest-ready asparagus spears (`harvest_ready_spears_input`)

Use the internal hand-off from the same field-year and reconcile it to product and losses.

- Selected flow: Harvest-ready asparagus spears in field
- Flow property / unit: Mass / kg fresh spears
- Amount rule: Equal the corresponding `harvest_ready_spears_output` before harvest losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Sources: `osu-asparagus-production`; `umn-asparagus-harvest`

###### Washing water (`washing_water_input`)

Include make-up water only when washing occurs before farm-gate transfer.

- Selected flow: Washing water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter make-up and recirculated water and retain wastewater linkage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable asparagus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Sources:
- Range: Provisional washing-water screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/1,000 kg marketable asparagus
  - Basis: broad first-pass make-up and recirculated water range pending handling-meter records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary packaging (`primary_packaging_input`)

Record flexible bands, sleeves, and bags supplied with the product by material; record rigid trays and crates separately.

- Selected flow: Flexible primary packaging for fresh asparagus
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Measure packaging issued to transferred product and identify returnable packaging separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable asparagus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Sources: `penn-state-asparagus-production`
- Range: Provisional flexible-packaging screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg marketable asparagus
  - Basis: broad first-pass flexible-packaging quantity pending material records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rigid primary packaging (`rigid_packaging_input`)

Record rigid trays and crates supplied with the product by material and return cycle.

- Selected flow: Rigid primary packaging for fresh asparagus
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- Amount rule: Measure packaging issued to transferred product, and record returnable-container turns separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable asparagus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Sources: `penn-state-asparagus-production`
- Range: Provisional rigid-packaging screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1,000 kg marketable asparagus
  - Basis: broad first-pass rigid-packaging quantity pending material and return-cycle records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh asparagus at farm gate (`asparagus_farm_gate_output`)

This is trimmed, graded, fresh, unprocessed asparagus transferred at the declared farm gate.

- Selected flow: Asparagus `3a8d74d8-77a2-4242-b9d3-c0d1b2141b81`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Verified scale mass after excluding harvest, trim, and reject losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg marketable fresh asparagus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_handling_records`
- Sources: `penn-state-asparagus-production`; `osu-asparagus-production`

##### Waste flows

###### Rejected and trimmed asparagus (`rejected_asparagus_output`)

Record rejected spears and trimmings by physical state and destination.

- Selected flow: Rejected and trimmed fresh asparagus material
- Flow property / unit: Mass / kg fresh material
- Amount rule: Measure reject and trim mass and declare field return, feed, composting, treatment, or disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable asparagus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling_records`
- Sources: `osu-asparagus-production`
- Range: Provisional reject screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg marketable asparagus
  - Basis: broad first-pass range pending grade and trim records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_establishment_over_life` | stand establishment | Attribute establishment burdens across actual represented productive years and marketable output; disclose lifetime, failed area, replacement, and early termination without double counting. | `osu-asparagus-production`; `uc-asparagus-production` |
| `allocation_market_and_rejects` | harvest preparation | Reconcile incoming spear mass to marketable asparagus and rejected or trimmed material; treat rejects as waste unless a documented product specification, buyer, quantity, and destination establish a co-product. | `osu-asparagus-production` |
| `allocation_secondary_output` | valorized residue | For an intentional secondary product, report quantity and hand-off and apply an explicitly justified allocation or substitution method; no default economic value or avoided burden applies. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `stand_establishment` | planting material, nutrients, water, and accepted area | field, purchase, application, and meter records | field_id; date; planting_material_type; units_planted; failed_units; product_mass; nutrient_concentration; irrigation_volume; established_area | reconcile purchases and applications to each establishment field | plant; kg; m3; ha | each operation | complete establishment campaign | every represented field | sum by field and preserve failures and replacements | invoices, labels, meters, field maps, and acceptance records |
| `cp_field_year_records` | `annual_field_management` | nutrients, water, electricity, residues, and emission activity | field-year log, invoice, meter, and application record | field_id; year; stand_age; area; product_identity; product_mass; nutrient_concentration; irrigation_volume; electricity; residue_mass; dry_matter; residue_nitrogen; destination | reconcile all records to the same field-year | ha; kg; kg nutrient; m3; kWh | each event and annual close | full year including postharvest fern management | every represented productive field | sum by field-year before reference-flow normalization | invoices, labels, analyses, meters, and disposition records |
| `cp_harvest_records` | `harvest_and_farm_gate_preparation` | harvest-ready and gross harvested spears | harvest log and scale record | field_id; harvest_date; harvest_pass; gross_mass; field_loss; harvest_method; area | link every harvest lot to field and date | kg; ha | each harvest pass | complete harvest window | every represented field | sum by field-year without merging stand ages before normalization | calibrated scales and harvest tickets |
| `cp_handling_records` | `harvest_and_farm_gate_preparation` | water, packaging, marketable output, and rejects | lot, scale, meter, packaging, and waste records | lot_id; source_field; gross_input; wash_water; packaging_material; packaging_mass; marketable_mass; grade; colour; trim_state; reject_mass; reject_reason; destination | preserve lot-level mass and utility reconciliation through transfer | kg; m3 | each lot or shift | complete harvest and packing period | every represented handling line | reconcile input, product, rejects, and mass change before aggregation | calibrated scales, meters, grade inspection, and destination receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_establishment_attribution` | establishment | Divide establishment quantity by attributed lifetime marketable output of the same stand and update expected years with actual years. | establishment quantity; cohort; productive-life assumption; annual output | establishment burden per kg marketable asparagus | `osu-asparagus-production`; `uc-asparagus-production` |
| `calc_nutrient_equivalent` | fertilizer inputs | Product mass multiplied by documented nutrient fraction equals kg N, P2O5, or K2O. | product mass; nutrient concentration; area | nutrient-equivalent input | `uc-ipm-asparagus-fertilization`; `osu-asparagus-production` |
| `calc_field_normalization` | annual inputs | Divide complete field-year quantity by marketable output from the corresponding field-year. | field-year quantity; marketable mass | quantity per 1,000 kg reference product |  |
| `calc_product_balance` | harvest and handling | Gross harvested mass plus or minus measured mass change equals marketable product plus rejects and trimmings. | gross, marketable, reject, trim, and mass-change records | reconciled output quantities |  |
| `calc_managed_soil_emissions` | managed-soil nitrogen emissions | Apply the declared applicable IPCC or accepted regional equations to synthetic, organic, and returned-residue nitrogen; preserve conversions and prevent double counting. | nitrogen activity data; factors; climate and management qualifiers | direct and indirect nitrogen emissions | `ipcc-2019-managed-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve farm-gate state, colour route, grade, size, trim, washing, packaging, geography, production year, and stand age. | lot specification and field records |
| `dq_period_linkage` | establishment and annual management | Link every field-year to one establishment cohort and disclose replacements, abandonment, productive years, and termination. | field map, planting record, and production history |
| `dq_mass_balance` | harvest and handling | Reconcile harvest-ready, gross, marketable, rejected, and trimmed masses and explain differences. | calibrated scales and lot records |
| `dq_input_completeness` | all foreground inputs | Preserve nutrient basis, irrigation source, electricity coverage, packaging material, and residue destination for every represented field or lot. | invoices, labels, meters, and logs |
| `dq_method_transparency` | calculations | Record method version, factors, productive-life denominator, exclusions, and replacement of provisional estimates. | calculation file and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference product | Use the verified Asparagus UUID, mass property, mass unit group, kg, and all required qualifiers. |  |
| `validation_handoffs` | process map | Link establishment to each field-year and make harvest-ready output equal its harvest input before losses. |  |
| `validation_mass_balance` | harvest and handling | Reconcile marketable output, rejects, trimmings, and mass change to gross harvested input within declared uncertainty. |  |
| `validation_nutrients_emissions` | annual management | Keep N, P2O5, and K2O distinct, document emission factors, and prevent returned-residue nitrogen double counting. | `ipcc-2019-managed-soils` |
| `validation_parameterized_flows` | parameterized rows | Resolve every Flow Set to a compatible concrete UUID before publishing a final process dataset. |  |
| `validation_unmapped_flows` | unmapped rows | Planting material, internal stand and spear states, fern residue, and rejects remain explicit coverage requirements until exact compatible identities are supplied. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground agricultural production dataset for fresh asparagus at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | fresh-asparagus crop and supply-chain studies with compatible geography, stand age, product state, and route |
| excluded_use | nursery planting material, processed asparagus, post-farm distribution, or comparisons omitting perennial establishment |
| required_metadata | geography; field area; establishment cohort; stand age; year; productive-life assumption; colour route; harvest and grade; irrigation; nutrient basis; residue fate; washing; cooling; packaging; farm-gate hand-off |
| required_quality_disclosure | primary-data coverage; scale and meter quality; lifetime attribution; mass balance; data gaps; provisional ranges; emission method; Flow Set resolutions; unmapped identities |
| update_trigger | verified identity, reviewed quantitative evidence, product specification, lifetime attribution, or managed-soil method changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `osu-asparagus-production` | extension_guidance | Oklahoma State University Extension, Asparagus Production, HLA-6018, https://extension.okstate.edu/fact-sheets/asparagus-production | stand life, establishment, planting density, nutrients, harvest, yield, and rejects |
| `uc-ipm-asparagus-irrigation` | extension_guidance | University of California Statewide IPM Program, Asparagus: Irrigation, https://ipm.ucanr.edu/agriculture/asparagus/irrigation/ | irrigation systems and annual applied-water range |
| `uc-ipm-asparagus-fertilization` | extension_guidance | University of California Statewide IPM Program, Asparagus: Fertilization, UC ANR Publication 3435, https://ipm.ucanr.edu/agriculture/asparagus/fertilization/ | establishment and maintenance nutrient ranges |
| `uc-asparagus-production` | extension_guidance | University of California ANR, Asparagus Production in California, Publication 7234, https://anrcatalog.ucanr.edu/pdf/7234.pdf | perennial production route and establishment boundary |
| `uc-small-farms-asparagus` | extension_guidance | University of California Small Farms Network, Asparagus, https://ucanr.edu/program/uc-small-farms-network/asparagus | production-year yield progression |
| `penn-state-asparagus-production` | extension_guidance | Penn State Extension, Asparagus Production, https://extension.psu.edu/asparagus-production | fresh market state, planting density, grade, and packaging |
| `umn-asparagus-harvest` | extension_guidance | University of Minnesota Extension, Harvesting Asparagus, https://extension.umn.edu/agriculture/specialty-crops/vegetable-farming/harvesting-asparagus | harvest boundary and postharvest fern management |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil nitrogen emissions and residue nitrogen |
