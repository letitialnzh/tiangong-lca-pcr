---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raspberries, blackberries, mulberries and loganberries

## 1. Scope and Applicability

This candidate PCR covers managed production of fresh raspberries, blackberries, mulberries and loganberries from crop management through harvest, primary conditioning, grading and dispatch at the farm-gate or first marketable outlet. It covers open-field, protected and perennial systems when declared. It excludes nursery material, retail, consumer use and processing into frozen, dried, juice, jam or wine products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries |
| classification_refs | CPC 3.0 / 01353 |
| covered_products | Fresh raspberries, blackberries, mulberries and loganberries |
| excluded_products | Processed products; nursery plants and propagating material |
| representative_product | Marketable fresh berries, with species, cultivar and grade declared |
| production_route | Managed biological production → harvest → primary conditioning → grading/sorting → dispatch |
| market_state | Fresh marketable product at declared outlet condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh berries at the declared outlet |
| How much | 1 kg |
| How well | Species, cultivar, system, season, quality grade, condition and saleable-yield definition declared |
| How long or cycle | One declared production season; perennial establishment and multi-year attribution disclosed |
| reference_flow_link | One declared marketable berry product flow; identity unresolved |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raspberries, blackberries, mulberries and loganberries `562e96d5-9c9f-4b90-877c-b2ebf33c87cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar; production system; harvest season; quality grade; marketable yield; outlet condition; allocation basis; crop age or establishment treatment |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `rule_mass_reference` | reference product | Mass | kg | Normalize results to 1 kg marketable fresh product at the declared outlet. |
| `rule_yield_basis` | yield and inventory | Mass | kg fresh product | Use weighed marketable output; disclose harvested-but-rejected and field-loss amounts separately. |
| `rule_nutrient_basis` | fertilizer and soil amendment | Product mass and nutrient mass where available | kg product; kg nutrient | Record the actual product and N/P/K basis; never substitute an unlabeled generic product. |
| `rule_perennial_attribution` | perennial inputs | Mass, area or time | kg, ha, year | Allocate establishment and shared stand inputs over the declared productive period and disclose the basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Field or protected-production unit ready for the declared season; purchased inputs enter when received by the operator |
| starting_condition_role | Foreground begins with crop-stand management and ends at farm-gate or first marketable outlet |
| product_classification_scope | Fresh raspberries, blackberries, mulberries and loganberries; semantic scope governs inclusion |
| recursive_input_rule | Same-category fruit used as an input is an internal transfer, not a recursively modelled new crop output |
| upstream_dataset_requirement | Use separately documented background datasets for electricity, fuel, fertilizer, amendments, packaging, water supply and purchased services |
| disclosure | Declare land/structure, crop age, season, outlet, yields, losses, irrigation, nutrient products, packaging and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | all datasets | Include crop management through dispatch; exclude downstream processing and retail. | `source-fao-lca-guidance` |
| `boundary_perennial` | perennial systems | Disclose establishment and productive-period attribution; do not assign all establishment burdens to one season silently. | `source-fao-lca-guidance` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `process_crop_establishment` | Crop establishment and stand maintenance | conditional | Include establishment, replacement and multi-year stand management | biological production | area and productive period |
| `process_crop_management` | Seasonal crop management | required | Always | biological production | season and marketable kg |
| `process_harvest` | Harvest and field capture | required | Always | harvest capture | harvested and marketable mass |
| `process_conditioning_grading` | Primary conditioning and grading | conditional | Include washing, cooling, sorting or packing before outlet | primary conditioning | dispatched kg |
| `process_reject_routing` | Reject, loss and co-product routing | conditional | Include non-marketable fruit and co-products | attribution and waste routing | mass balance |

Each process is reported by direction (`Inputs`, `Outputs`) and flow type (`Product flows`, `Waste flows`, `Elementary flows`). Each row is a flow card with `row_id`, selected flow identity, flow property/unit, amount rule, `value_mode`, `specificity`, `basis_kind`, `evidence_kind`, `collection_protocol_id` and `source_ids`.

### Process: Crop establishment and stand maintenance (`process_crop_establishment`)
#### Inputs
##### Product flows
###### Establishment materials (`establishment_inputs`)
Record actual plants, trellis, substrate and replacement materials by block and event.
- Selected flow: Establishment material (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: measured purchase or issue amount allocated over the productive period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `source-fao-lca-guidance`
##### Elementary flows
###### Establishment land occupation (`establishment_land`)
Record area, duration and transformation status for the declared stand.
- Selected flow: Land occupation or transformation (UUID unresolved; intentionally blank)
- Flow property / unit: Area-time / ha-year
- Amount rule: site register and area map
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_records`
- Sources: `source-fao-lca-guidance`

### Process: Seasonal crop management (`process_crop_management`)
#### Inputs
##### Product flows
###### Agricultural nutrient and fertilizer inputs (`process_crop_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `source-fao-lca-guidance`; `source-ipcc-2019-refinement`
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water_services`)
Record irrigation water by plot, source, operation and season.
- Selected flow: Irrigation water supply (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: meter, delivery, invoice or operation log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `source-fao-lca-guidance`
###### Energy services (`energy_services`)
Record electricity, fuel and other energy carriers used by field operations and purchased services.
- Selected flow: Electricity, fuel or energy carrier (UUID unresolved; intentionally blank)
- Flow property / unit: Energy or mass / kWh, MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, delivery, invoice or operation log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `source-fao-lca-guidance`

### Process: Harvest and field capture (`process_harvest`)
#### Inputs
##### Product flows
###### Harvest materials (`harvest_materials`)
Record actual harvest aids and field packaging by harvest period.
- Selected flow: Harvest material (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: issue and return reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `source-fao-lca-guidance`
#### Outputs
##### Product flows
###### Harvested berries (`harvested_berries`)
Weigh harvested berries by species and grade before conditioning.
- Selected flow: Harvested fresh berries (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: lot scale records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_records`
- Sources: `source-fao-lca-guidance`
##### Waste flows
###### Harvest losses (`harvest_losses`)
Record field losses or estimates with the destination and estimation method.
- Selected flow: Harvest loss (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: weighed loss or reconciled mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_records`
- Sources: `source-fao-lca-guidance`

### Process: Primary conditioning and grading (`process_conditioning_grading`)
#### Inputs
##### Product flows
###### Conditioning water (`conditioning_inputs`)
Record water used for washing or other conditioning operations linked to each lot.
- Selected flow: Conditioning water supply (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: receiving, utility and packaging records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `source-fao-lca-guidance`
###### Conditioning energy (`conditioning_energy`)
Record electricity, fuel and other energy used for cooling, washing, sorting or packing equipment.
- Selected flow: Conditioning energy supply (UUID unresolved; intentionally blank)
- Flow property / unit: Energy or mass / kWh, MJ or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, invoice and lot-linked run log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `source-fao-lca-guidance`
###### Conditioning packaging (`conditioning_packaging`)
Record packaging and presentation materials consumed by the conditioning run when applicable.
- Selected flow: Conditioning packaging material (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: invoice, issue record and lot-linked run log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `source-fao-lca-guidance`
#### Outputs
##### Product flows
###### Marketable berries (`marketable_berries`)
Use final weighed product at the declared farm-gate or first marketable outlet.
- Selected flow: Raspberries, blackberries, mulberries and loganberries (UUID bound in reference flow)
- Flow property / unit: Mass / kg
- Amount rule: lot dispatch weight
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_yield_records`
- Sources: `source-fao-lca-guidance`
##### Waste flows
###### Conditioning rejects (`conditioning_rejects`)
Record grading rejects by destination and treatment route.
- Selected flow: Conditioning reject (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: reject weight or reconciled mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg marketable fresh berry
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg marketable berry
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_records`
- Sources: `source-fao-lca-guidance`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_marketable_rejects` | outputs and rejects | Separate products, rejects and waste by measured mass and destination. If co-products remain, use a documented physical or economic basis and report sensitivity. | `source-fao-lca-guidance` |
| `allocation_multi_period` | perennial systems | Allocate shared establishment and stand-management burdens over the productive period using disclosed yield or time shares. | `source-fao-lca-guidance` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `process_crop_establishment` | inputs and land | field log, invoice, area map | area, age, plants, materials, dates | reconcile field and purchase records | kg, ha, year | event/annual | establishment and productive period | each block | allocate by declared period | invoices, maps, review |
| `cp_input_records` | `process_crop_management` | inputs | invoice, meter, application log | product, nutrient content, amount, date, field | primary records and reconciliation | kg, kg nutrient, m3, kWh, L | event/monthly | full season | block/site | sum by season | invoices, meters |
| `cp_yield_records` | `process_harvest` | outputs | weigh ticket, harvest log | species, grade, mass, date, block | weigh each lot and outlet | kg | each lot | full season | block/outlet | sum lots and grades | calibrated scale |
| `cp_harvest_records` | `process_harvest` | harvest materials | issue/waste log | material, quantity, route | issue and return reconciliation | kg | harvest period | full season | harvest operation | sum by material | inventory records |
| `cp_conditioning_records` | `process_conditioning_grading` | conditioning inputs | meter, packing log, invoice | input, amount, lot, energy | lot-linked records | kg, m3, kWh | lot/daily | full season | conditioning unit | allocate by lot mass | meters, invoices |
| `cp_reject_records` | `process_reject_routing` | rejects and destinations | grading/destination log | mass, quality, destination, treatment | mass-balance each lot | kg | each lot | full season | site/outlet | reconcile all outputs | receipts, balance |
| `cp_emission_calculation` | all relevant processes | elementary exchanges | calculation record | activity, factor, method, uncertainty | apply declared method | kg substance or MJ | reporting period | declared period | site/block | calculate then normalize | cited method |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_marketable` | all rows | inventory amount / marketable fresh berry mass | process amount, marketable mass | per kg | `source-fao-lca-guidance` |
| `calc_nutrient_application` | fertilizer card | product mass × declared nutrient fraction; retain product mass | product mass, nutrient fraction | product and nutrient amounts | `source-fao-lca-guidance` |
| `calc_perennial_share` | establishment | shared burden × declared season/yield share | burden, period, yield | season amount | `source-fao-lca-guidance` |
| `calc_mass_balance` | harvest and routing | harvested = marketable + rejects + losses within declared tolerance | all mass records | reconciled balance | `source-fao-lca-guidance` |

Require traceable identity, calibrated weighing, complete season coverage, block scope, lot reconciliation, documented allocation, and explicit missing-data treatment. Disclose representativeness, uncertainty, crop age, yield variability, and unresolved identity.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference flow | Confirm one product flow, mass property and kg unit; unresolved identity remains a review finding. | `source-fao-lca-guidance` |
| `validation_completeness` | foreground package | Required processes and protocols must be present or marked not applicable with justification. | `source-fao-lca-guidance` |
| `validation_mass_balance` | harvest and routing | Check harvested mass against marketable output, rejects and losses; unexplained gaps fail validation. | `source-fao-lca-guidance` |
| `validation_nutrient_basis` | fertilizer and amendments | Check product, nutrient content, amount, date, area and source record; generic unlabeled totals fail. | `source-fao-lca-guidance`, `source-ipcc-2019-refinement` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after completeness and review |
| downstream_use | Fresh berry foreground production and linked product-system modelling |
| allowed_use | Declared fresh berry system, season and outlet |
| excluded_use | Processed products, retail, unspecified systems or undisclosed seasons |
| required_metadata | species, cultivar, geography, age, system, season, outlet, yield, products, allocation, losses |
| required_quality_disclosure | completeness, representativeness, measurement basis, uncertainty and unresolved identities |
| update_trigger | new season, replacement, route/input/outlet change, or corrected mass balance |

## 11. Data Sources

| source_id | type | Reference | Use |
| --- | --- | --- | --- |
| `source-fao-lca-guidance` | official_guidance | FAO environmental performance guidance for food and agriculture | boundary, process map, collection, allocation and quality |
| `source-ipcc-2019-refinement` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines | conditional field-emission and nutrient-related calculation method |
