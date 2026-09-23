---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.watermelons
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Watermelons

## 1. Scope and Applicability

This PCR covers commercial production of fresh, unprocessed watermelons from field preparation and planting through managed crop production, harvest, grading, optional washing, and farm-gate hand-off. It covers open-field and protected cultivation when the declared foreground records identify the route. Watermelon seed or transplants sold as planting material, processed or cut watermelon, cold storage after farm-gate transfer, distribution, retail, and consumption are excluded. Crop residues remain within the system only when they are returned to soil or leave the farm as a declared residue or co-product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.watermelons |
| classification_refs | CPC 3.0:01221 Watermelons |
| covered_products | Fresh, whole, unprocessed watermelons produced for sale at the farm gate |
| excluded_products | Watermelon seed or transplants sold for planting, processed, cut, juiced, frozen, dried, or otherwise transformed watermelon, and post-farm-gate logistics |
| representative_product | Marketable whole watermelons, graded for declared size and quality and handed over at the farm gate |
| production_route | Annual seeded or transplanted watermelon cultivation, managed field production, harvest, grading, and farm-gate preparation |
| market_state | Fresh whole produce at farm gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole watermelon at farm gate |
| How much | 1,000 kg |
| How well | Whole, fresh, unprocessed fruit meeting the declared cultivar, maturity, size, appearance, defect, and marketable-grade criteria |
| How long or cycle | One declared production cycle from planting through the final harvest of the crop, with the production year and harvest window reported |
| reference_flow_link | `watermelon_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Watermelons; production mix, at farm gate; fresh, unprocessed whole fruit `8979956d-8091-4c35-af7a-1ec80529bad3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | farm-gate hand-off; production geography; production year and crop cycle; cultivar or seed type; irrigated or rainfed route; fruit maturity and harvest window; size and grade criteria; whole or damaged state; washed or unwashed; packaging state |
| Binding | `fixed` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvested and farm-gate watermelon | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep gross harvested fruit, marketable fruit, rejected fruit, and field residue masses distinct before normalizing to the reference flow. |
| `area_and_cycle_normalization` | field production records | Area and mass | ha and kg | Record each field and crop cycle separately, then normalize all inputs and outputs to marketable farm-gate watermelon. |
| `nutrient_basis` | fertilizer inputs | Mass | kg N, kg P2O5, or kg K2O | Convert product quantities only from documented nutrient concentrations and retain the reported nutrient basis. |
| `irrigation_volume` | irrigation water | Volume | m3 | Record metered or otherwise documented delivered irrigation by field and crop cycle; keep rainfall separate from irrigation withdrawals. |
| `seed_count_or_mass` | seed or transplant inputs | Number or mass | seed units or kg | Record the supplier-declared seed or transplant quantity and type; do not infer seed mass from count without a documented conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural field receiving watermelon seed or transplants, with prior land use, field preparation, and excluded pre-plant operations disclosed |
| starting_condition_role | Beginning of the declared annual watermelon crop cycle |
| product_classification_scope | Fresh whole watermelons under CPC 3.0:01221 through farm-gate hand-off |
| recursive_input_rule | Purchased watermelon seed or transplants are distinct upstream product inputs and are linked once rather than recreated as an internal watermelon production process. |
| upstream_dataset_requirement | Require upstream datasets for seed or transplants, fertilizers, amendments, crop-protection products, irrigation water, energy, field machinery services, and packaging when used. |
| disclosure | Declare production geography, prior land use, crop cycle dates, cultivar or seed type, irrigation regime, nutrient basis, crop-protection program, field emissions method, residue fate, harvest and grading method, washing, and packaging. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_annual_crop_cycle` | field preparation through final harvest | Include field preparation, planting, crop management, and all harvests of the declared annual crop cycle; allocate shared field operations to the reported crop using documented field records. | `fao-crop-production-framework`; `usda-watermelon-production-guidance` |
| `boundary_farm_gate` | harvest and preparation | End the foreground boundary when marketable whole watermelon is transferred at the farm gate; include on-farm grading, trimming of damaged fruit, washing, cooling, and primary packaging only when they occur before transfer. | `usda-watermelon-production-guidance`; `fao-postharvest-handling` |
| `boundary_managed_soils` | fertilizer, amendment, and residue flows | Include direct and indirect managed-soil emissions attributable to applied nutrients and returned residues under one declared calculation method, without double counting emissions represented by an upstream dataset. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | rejected fruit and crop residues | Record field return, composting, feed, treatment, disposal, or another declared destination for each residue stream; an unreported destination remains a data-quality gap and is not an automatic co-product. | `fao-crop-residue-management`; `fao-postharvest-handling` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_preparation_and_planting` | Field preparation and planting | required | once for each declared crop cycle | foreground field establishment | planted area and seed or transplant quantity |
| `watermelon_field_management` | Watermelon field management | required | throughout the declared crop cycle | foreground managed biological production | managed hectare-cycle and crop input records |
| `harvest_and_farm_gate_preparation` | Harvest and farm-gate preparation | required | each harvest and final farm-gate hand-off | foreground harvest, grading, and hand-off | 1,000 kg marketable whole watermelon |

### Process: Field preparation and planting (`field_preparation_and_planting`)

#### Inputs

##### Product flows

###### Watermelon seed or transplants (`planting_material_input`)

Watermelon seed or transplants enter the field as the planting material for the declared annual crop cycle. Record purchased planting material once and keep it separate from the resulting crop output.

- Selected flow: Watermelon seed or transplants
- Flow property / unit: Number of items or mass / seed units or kg
- Amount rule: Record supplier quantity and planting material type by field and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare and per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_planting_records`
- Sources: `usda-watermelon-production-guidance`
- Range: Provisional planting-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 8
  - Unit: kg seed or 1000 transplants/ha
  - Basis: broad first-pass annual watermelon planting rate pending supplier and field records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field preparation fuel or machinery service (`field_preparation_energy`)

Record diesel, electricity, or contracted machinery service used for bed preparation, tillage, laying mulch, and planting when these activities cross the foreground boundary. Report the selected energy carrier or service separately.

- Selected flow: Field preparation fuel or machinery service
- Flow property / unit: Mass, energy, or service / kg, kWh, or hectare-service
- Amount rule: Use fuel receipts, machinery logs, meter records, or supplier service records by field and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planted hectare and per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_operation_records`
- Sources: `usda-watermelon-production-guidance`

##### Waste flows

##### Elementary flows

###### Occupied agricultural soil (`field_occupation`)

Record the field area and occupation duration for the declared crop cycle when land occupation is represented as an elementary input. Do not treat ordinary field occupation as a product input.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Field area multiplied by the declared crop-cycle occupation period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_operation_records`

#### Outputs

##### Product flows

###### Prepared planted field (`planted_field_output`)

This internal hand-off records the accepted planted area entering managed watermelon production and is not the reference product.

- Selected flow: Prepared planted watermelon field
- Flow property / unit: Area / ha
- Amount rule: Accepted planted area after planting completion and recorded failures.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per planting campaign
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_planting_records`

##### Waste flows

##### Elementary flows

### Process: Watermelon field management (`watermelon_field_management`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`watermelon_field_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_records`
- Sources: `usda-watermelon-production-guidance`
- Range: Provisional nitrogen application screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg N/ha
  - Basis: broad first-pass annual watermelon crop-cycle range pending soil tests and fertilizer records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus application screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: kg P2O5/ha
  - Basis: broad first-pass crop-cycle range pending soil tests and fertilizer records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional potassium application screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 350
  - Unit: kg K2O/ha
  - Basis: broad first-pass crop-cycle range pending soil tests and fertilizer records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water_input`)

Record irrigation water delivered to the watermelon field separately from rainfall and from water used in any post-harvest washing.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter delivered irrigation by field, source, and crop cycle; document estimation where meters are unavailable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Provisional irrigation water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 9000
  - Unit: m3/ha
  - Basis: broad first-pass irrigated or rainfed crop-cycle range pending field water records and climate assessment
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_input`)

Record herbicides, insecticides, fungicides, and other crop-protection products used in the declared cycle as separate product inputs with active ingredient or formulation information.

- Selected flow: Crop-protection product
- Flow property / unit: Mass / kg product or kg active ingredient
- Amount rule: Product quantity from application records, with formulation and active ingredient retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `usda-watermelon-production-guidance`
- Range: Provisional crop-protection product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg product/ha
  - Basis: broad first-pass crop-cycle range pending product labels and application records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field-operation fuel or electricity (`field_operation_energy`)

Record fuel and electricity consumed by irrigation pumps, field machinery, and other crop-management operations. Keep each carrier and operation identifiable.

- Selected flow: Field-operation fuel or electricity
- Flow property / unit: Mass or energy / kg fuel or kWh
- Amount rule: Use fuel receipts, machinery logs, pump meters, or service records by field and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_operation_records`
- Sources: `usda-watermelon-production-guidance`

##### Waste flows

#### Outputs

##### Product flows

###### Harvest-ready watermelon crop (`harvest_ready_crop_output`)

Record the crop output entering harvest operations before grading. This intermediate output must remain distinct from marketable farm-gate watermelon and rejected fruit.

- Selected flow: Harvest-ready watermelon crop
- Flow property / unit: Mass / kg
- Amount rule: Weigh or estimate total harvested crop entering harvest and grading, by field and harvest date.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`

##### Waste flows

###### Field crop residues (`field_residue_output`)

Record vines, leaves, roots, and other crop residues remaining after harvest and declare whether they are returned to soil, removed, composted, treated, or disposed.

- Selected flow: Watermelon crop residues
- Flow property / unit: Mass / kg wet residue
- Amount rule: Measure or document the residue amount and destination by field; use a documented dry-matter conversion when applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle and per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `fao-crop-residue-management`

##### Elementary flows

###### Managed-soil nitrogen emissions (`managed_soil_nitrogen_emissions`)

Calculate direct and indirect nitrogen emissions from fertilizer and relevant returned residues using the declared soil-emission method. Do not enter the same emissions both as a calculated foreground result and as an additional generic estimate.

- Selected flow: Managed-soil nitrogen emissions
- Flow property / unit: Mass / kg N compound
- Amount rule: Apply the declared nitrogen-emission method to documented nutrient inputs and returned residues, with emission factors and climate or soil parameters retained.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertilizer_records`
- Sources: `ipcc-2019-managed-soils`

### Process: Harvest and farm-gate preparation (`harvest_and_farm_gate_preparation`)

#### Inputs

##### Product flows

###### Harvest and handling energy (`harvest_handling_energy`)

Record energy used for harvesting, field collection, grading, washing, cooling, and primary packing when those operations occur before farm-gate transfer.

- Selected flow: Harvest and handling fuel or electricity
- Flow property / unit: Mass or energy / kg fuel or kWh
- Amount rule: Use equipment logs, meter readings, or supplier records for operations assigned to the crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate watermelon
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_handling_records`
- Sources: `fao-postharvest-handling`

###### Primary packaging (`primary_packaging_input`)

Record primary packaging that crosses the foreground boundary before farm-gate hand-off. Loose produce should be recorded as zero packaging only when this state is explicitly declared.

- Selected flow: Primary packaging material
- Flow property / unit: Mass / kg packaging
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Weigh or obtain supplier mass for crates, pallets, cartons, or other packaging assigned to marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate watermelon
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-postharvest-handling`

##### Waste flows

###### Rejected or damaged watermelon (`rejected_fruit_output`)

Record fruit rejected during harvest or grading and identify its destination. Rejected fruit is a waste flow unless a documented productive use meets the co-product rule.

- Selected flow: Rejected or damaged watermelon
- Flow property / unit: Mass / kg
- Amount rule: Weigh or estimate rejected fruit separately from marketable output and retain the destination record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate watermelon
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `fao-postharvest-handling`

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable whole watermelon at farm gate (`watermelon_farm_gate_output`)

This is the PCR reference product flow. Record the marketable mass after grading and any included on-farm washing, cooling, and primary packing.

- Selected flow: Watermelons; production mix, at farm gate; fresh, unprocessed whole fruit `8979956d-8091-4c35-af7a-1ec80529bad3`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Weigh marketable whole watermelon at farm-gate transfer after the declared quality and grading checks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg marketable farm-gate watermelon
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_crop_fields` | field operations assigned to one crop | Assign field operations directly to watermelon when the operation serves only the declared crop cycle; document any shared operation before applying an allocation method. | `fao-crop-production-framework` |
| `allocation_multiple_outputs` | marketable fruit and any documented productive residue use | Report marketable watermelon as the reference output. If a residue or other output has a documented productive use and leaves the boundary as a product, apply a declared physical or economic allocation method consistently across the shared process and disclose the allocation basis. | `fao-crop-residue-management` |
| `allocation_rejects_and_losses` | damaged fruit and crop residues without productive use | Treat rejected fruit and residues as waste or loss according to their declared destination. Do not allocate burdens to a waste stream as a co-product without evidence of productive use and a defined hand-off. | `fao-postharvest-handling` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_records` | `field_preparation_and_planting` | `planting_material_input`, `planted_field_output` | planting and field register | field_id; area; planting date; seed_or_transplant_type; supplier quantity; failures; replants | supplier records and field log reconciliation | seed units, kg, ha | each crop cycle | full declared crop cycle | each field or homogeneous block | aggregate by field, then normalize to marketable output | supplier invoice plus signed field register or equivalent |
| `cp_field_operation_records` | `field_preparation_and_planting`, `watermelon_field_management` | `field_preparation_energy`, `field_occupation`, `field_operation_energy` | machinery, pump, and field register | field_id; operation; date; equipment; fuel or electricity; hours; area | meter, fuel receipt, machinery log, or service record | kg, kWh, h, ha | each operation | full declared crop cycle | each field or equipment group | assign shared operations by documented area or time basis | meter calibration, receipt, or service record |
| `cp_fertilizer_records` | `watermelon_field_management` | fertilizer and managed-soil emissions | nutrient application register | field_id; product; formulation; nutrient concentration; amount; date; application method; soil or climate inputs | fertilizer invoice and application log | kg product, kg nutrient | each application | full declared crop cycle | each field | sum by nutrient basis and field before normalization | invoice, label, soil test, and application record |
| `cp_irrigation_records` | `watermelon_field_management` | `irrigation_water_input` | irrigation register | field_id; source; date; meter start and end; estimated volume; rainfall context | meter or documented water-balance estimate | m3 | each irrigation event or weekly | full declared crop cycle | each field and source | sum delivered volume by field and source | meter record, pump log, or water allocation record |
| `cp_crop_protection_records` | `watermelon_field_management` | `crop_protection_input` | crop-protection application register | field_id; product; formulation; active ingredient; dose; area; date; target | product label, invoice, and application log | kg product, kg active ingredient, ha | each application | full declared crop cycle | each field | sum by product and active ingredient | label, invoice, and application record |
| `cp_harvest_records` | `watermelon_field_management`, `harvest_and_farm_gate_preparation` | `harvest_ready_crop_output`, `field_residue_output`, `rejected_fruit_output`, `watermelon_farm_gate_output` | harvest and grading register | field_id; harvest date; gross harvested; marketable; rejected; residue; destination; grade; transfer weight | scale tickets and harvest or grading log | kg | each harvest | final harvest window and full crop cycle | each field, lot, or harvest block | reconcile gross mass to marketable, rejected, and declared residue destinations | calibrated scale, ticket, and destination record |
| `cp_residue_records` | `watermelon_field_management` | `field_residue_output` | residue destination record | field_id; residue type; wet or dry basis; amount; destination; date | field measurement and destination confirmation | kg | each residue event | full declared crop cycle | each field | aggregate by destination and dry-matter basis where used | weigh record, compost or feed receipt, or field-return log |
| `cp_harvest_handling_records` | `harvest_and_farm_gate_preparation` | `harvest_handling_energy` | handling and packing register | lot_id; operation; date; energy carrier; quantity; marketable mass | meter, equipment log, or service record | kg, kWh, h | each lot or operation | final harvest window | packing or handling site | assign energy to marketable mass and declare shared-service allocation | meter or service record |
| `cp_packaging_records` | `harvest_and_farm_gate_preparation` | `primary_packaging_input` | packaging register | lot_id; material; reusable or single-use; unit count; unit mass; losses; reuse cycles | supplier specification and count or weight record | kg, item | each lot | final harvest window | packing site | sum packaging mass and document reuse allocation | supplier specification and packing record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | `normalized amount = field or lot amount × 1,000 kg / marketable farm-gate watermelon mass` | field or lot record; marketable mass | amount per 1,000 kg reference flow |  |
| `calc_nutrient_mass` | fertilizer inputs | `nutrient mass = product mass × declared nutrient concentration` | product mass; label or supplier concentration | kg N, kg P2O5, or kg K2O | `usda-watermelon-production-guidance` |
| `calc_land_occupation` | field occupation | `occupation = field area × declared crop-cycle occupation duration` | field area; planting and final harvest dates | m2*a or declared area-time unit |  |
| `calc_managed_soil_emissions` | managed-soil nitrogen emissions | Apply one declared IPCC-compatible method to documented nutrient inputs and returned residues; retain factors and assumptions with the dataset. | nutrient inputs; residue return; soil and climate parameters | elementary nitrogen emissions per reference flow | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest and grading | `gross harvested = marketable + rejected + documented other destinations`, subject to scale precision and declared estimation uncertainty | harvest, grading, and destination records | reconciled crop output and loss record | `fao-postharvest-handling` |
| `calc_reusable_packaging` | reusable primary packaging | Allocate packaging manufacture and loss to the declared number of use cycles using supplier or operator records; do not apply reuse credit without a documented cycle count. | packaging mass; use cycles; loss rate | packaging mass per reference flow | `fao-postharvest-handling` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference and output flows | Declare cultivar or seed type, production geography, crop-cycle dates, harvest window, whole-fruit state, grade, and farm-gate hand-off. | product and field register |
| `dq_mass_reconciliation` | harvest, rejects, residues, and reference output | Reconcile gross harvested mass to marketable output, rejected fruit, residues, and other declared destinations within the stated scale or estimation uncertainty. | scale tickets and destination records |
| `dq_input_completeness` | all product and elementary inputs | Account for seed or transplants, fertilizer nutrients, irrigation, crop-protection products, field energy, land occupation, soil emissions, and included handling inputs; disclose unavailable records. | input registers and completeness checklist |
| `dq_temporal_geographic_scope` | all foreground records | Cover the complete declared crop cycle and identify field, production geography, production year, irrigation regime, and any protected-cultivation route. | field register and production metadata |
| `dq_residue_destination` | crop residues and rejected fruit | Retain a destination and quantity for each residue stream; identify field return, feed, composting, treatment, disposal, or other documented use. | residue and destination records |
| `dq_uncertainty_disclosure` | estimated or calculated values | Mark estimates, conversion factors, and missing measurements, and state the effect on the normalized reference flow. | calculation sheet and quality review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Reference amount is 1,000 kg mass of whole, marketable watermelon at farm gate and carries all required qualifiers. |  |
| `validate_cycle_completeness` | process map and records | Field preparation, planting, managed production, harvest, and farm-gate hand-off are present for the declared annual crop cycle, with conditional operations explicitly marked. | `fao-crop-production-framework` |
| `validate_mass_balance` | harvest and grading | Gross harvested, marketable, rejected, residue, and other destination masses are reconciled and do not double count the reference output. | `fao-postharvest-handling` |
| `validate_nutrient_and_water_basis` | fertilizer and irrigation | Fertilizer inputs retain nutrient basis and concentration evidence; irrigation volume identifies source and field and is not conflated with rainfall. | `fao-crop-evapotranspiration-56` |
| `validate_residue_and_loss_fate` | rejected fruit and residues | Every non-marketable stream has a declared destination or an explicit data-quality finding; waste is not treated as a co-product without documented productive use. | `fao-crop-residue-management` |
| `validate_boundary_disclosure` | dataset metadata | Prior land use, crop cycle, production geography, irrigation regime, soil-emission method, residue fate, and all included farm-gate operations are disclosed. | `fao-crop-production-framework`; `ipcc-2019-managed-soils` |
| `validate_normalization` | all inventory rows | All amounts can be traced to field, crop-cycle, harvest, or lot records and normalize to 1,000 kg marketable farm-gate output. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Primary foreground agricultural production dataset for fresh whole watermelon at farm gate |
| downstream_use | `secondary_dataset`; may supply a `background_dataset` when the documented farm-gate product and quality qualifiers match |
| allowed_use | LCA modelling of fresh whole watermelon production through the declared farm-gate hand-off and included on-farm preparation |
| excluded_use | Processed or cut watermelon, seed or transplant production, post-farm-gate storage and distribution, retail, consumption, or unreported crop routes |
| required_metadata | production geography; production year; crop-cycle dates; cultivar or seed type; field area; irrigated or rainfed route; farm-gate state; grade; washing and packaging state; residue destinations |
| required_quality_disclosure | mass reconciliation; input completeness; nutrient and irrigation basis; soil-emission method; residue and reject fate; estimated values; temporal and geographic coverage |
| update_trigger | material change in cultivation route, irrigation or nutrient practice, crop-protection regime, farm-gate preparation, packaging, classification scope, or evidence supporting quantitative rules |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-crop-production-framework` | official_guidance | FAO crop production and resource-management guidance. https://www.fao.org/land-water/databases-and-software/crop-information/en/ | annual crop-cycle boundary, field records, and allocation requirements |
| `usda-watermelon-production-guidance` | extension_guidance | USDA and extension production guidance for watermelon planting, nutrient management, field operations, and harvest records. https://extension.uga.edu/publications/detail.html?number=C1101 | planting, nutrient management, field operations, and harvest records |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration*. https://www.fao.org/4/X0490E/X0490E00.htm | crop water-balance and irrigation-record methods |
| `ipcc-2019-managed-soils` | method_factor | 2019 IPCC Refinement, Agriculture, Forestry and Other Land Use, managed-soils methodology. https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil nitrogen-emission method |
| `fao-crop-residue-management` | official_guidance | FAO crop-residue and soil-management guidance. https://www.fao.org/3/y2779e/y2779e00.htm | residue return and destination disclosure |
| `fao-postharvest-handling` | official_guidance | FAO post-harvest handling guidance. https://www.fao.org/4/ac301e/ac301e00.htm | grading, loss recording, packaging, and farm-gate preparation |
