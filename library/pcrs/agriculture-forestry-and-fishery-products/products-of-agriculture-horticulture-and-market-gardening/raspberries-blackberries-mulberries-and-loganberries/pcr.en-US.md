---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries
language: en-US
status: active
sync_with: pcr.zh-CN.md
---

# Raspberries, blackberries, mulberries and loganberries

## 1. Scope and Applicability

This candidate PCR covers managed production of fresh raspberries, blackberries, mulberries and loganberries from crop management through harvest, primary conditioning, grading and dispatch at the farm-gate or first marketable outlet. It covers open-field, protected and perennial systems when declared. It excludes nursery material, retail, consumer use and processing into frozen, dried, juice, jam or wine products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries |
| classification_refs | CPC 3.0 / 01353; mapping relation: exact |
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
| reference_flow_link | marketable_berries |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raspberries, blackberries, mulberries and loganberries `562e96d5-9c9f-4b90-877c-b2ebf33c87cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar; production system; harvest season; quality grade; marketable yield; outlet condition; allocation basis; crop age or establishment treatment |

This reference UUID denotes the fresh, unprocessed farm-gate product. Verify actual species, product state and handoff before applying the binding. An independent pack-house, further-processed or otherwise incompatible output requires separately verified identity and must not inherit this UUID. Identity verification does not change the actual system boundary or quantity-normalization requirements of this PCR.

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
| `boundary_start_end` | all datasets | Include crop management through dispatch; exclude downstream processing and retail. | `fao-gap-framework-2003` |
| `boundary_perennial` | perennial systems | Disclose establishment and productive-period attribution; do not assign all establishment burdens to one season silently. | `fao-gap-framework-2003` |

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
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
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
- Sources: `fao-gap-framework-2003`
##### Elementary flows
###### Establishment land occupation (`establishment_land`)
Record area, duration and transformation status for the declared stand.
- Selected flow: Cultivated land occupation (UUID unresolved; occupation only)
Land occupation is area multiplied by actual occupied duration. Land transformation, if included, is a separate from/to land-state area event with date, previous use, accounting period and attribution; never give it an area-time quantity or repeat it each crop cycle.
- Flow property / unit: Area-time / ha-year
- Amount rule: site register and area map
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
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
- Sources: `fao-gap-framework-2003`

### Process: Seasonal crop management (`process_crop_management`)
#### Inputs
##### Product flows
###### Urea fertilizer (`process_crop_management_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for process_crop_management_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1 kg marketable fresh berry.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Ammonium sulfate fertilizer (`process_crop_management_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Triple superphosphate fertilizer (`process_crop_management_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Potassium chloride fertilizer (`process_crop_management_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Cattle manure applied as fertilizer (`process_crop_management_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-organic-nutrients`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Composted plant residues applied to soil (`process_crop_management_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `source-ipcc-2019-refinement`; `fao-organic-nutrients`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Irrigation water (`irrigation_water_services`)
Record irrigation water by plot, source, operation and season.
- Selected flow: Irrigation water supply (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Amount rule: meter, delivery, invoice or operation log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
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
- Sources: `fao-gap-framework-2003`
###### Electricity at the equipment supply point (`energy_services_electricity`)

**Collection scope and applicability for energy_services.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record electricity, fuel and other energy carriers used by field operations and purchased services.
Raw activity or stage basis: per 1 kg marketable fresh berry.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Electricity at the equipment supply point
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `fao-agricultural-energy`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kWh per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Diesel fuel supplied to equipment (`energy_services_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel supplied to equipment
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_records`
- Sources: `fao-gap-framework-2003`; `fao-agricultural-energy`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

#### Outputs
##### Elementary flows

###### Nitrous oxide to air, direct managed-soil pathway (`soil_direct_n2o`)
Document applicability and responsibility by site, N source, climate, route and receiving medium. Missing pathway data are not zero; a justified inapplicable pathway is explicitly disclosed.
- Selected flow: Nitrous oxide to air, direct managed-soil pathway (UUID unresolved; chemical and receiving-medium identity required)
- Flow property / unit: Mass / kg N2O
- Amount rule: calculate the named compound from compatible nitrogen activity and the documented pathway method; convert compound-N by 44/28 once, assign upstream/foreground responsibility without duplication, then normalize to accepted reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured nitrogen activity and emissions for the actual plot and reporting period before final normalization.
- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_nitrogen`
- Sources: `ipcc-managed-soils-2019`
- Range: Physical precursor-N conservation check; not an empirical emission-factor range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg compound-N/kg available precursor N
  - Basis: the named pathway and its compatible precursor-N ledger; indirect N2O-N is bounded by its documented deposited/leached precursor, not a second subtraction from the source ledger
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Nitrous oxide to air, indirect deposition/leaching pathways (`soil_indirect_n2o`)
Document applicability and responsibility by site, N source, climate, route and receiving medium. Missing pathway data are not zero; a justified inapplicable pathway is explicitly disclosed.
- Selected flow: Nitrous oxide to air, indirect deposition/leaching pathways (UUID unresolved; chemical and receiving-medium identity required)
- Flow property / unit: Mass / kg N2O
- Amount rule: calculate the named compound from compatible nitrogen activity and the documented pathway method; convert compound-N by 44/28 once, assign upstream/foreground responsibility without duplication, then normalize to accepted reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured nitrogen activity and emissions for the actual plot and reporting period before final normalization.
- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_nitrogen`
- Sources: `ipcc-managed-soils-2019`
- Range: Physical precursor-N conservation check; not an empirical emission-factor range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg compound-N/kg available precursor N
  - Basis: the named pathway and its compatible precursor-N ledger; indirect N2O-N is bounded by its documented deposited/leached precursor, not a second subtraction from the source ledger
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Ammonia to air from the documented nitrogen pathway (`soil_ammonia`)
Document applicability and responsibility by site, N source, climate, route and receiving medium. Missing pathway data are not zero; a justified inapplicable pathway is explicitly disclosed.
- Selected flow: Ammonia to air from the documented nitrogen pathway (UUID unresolved; chemical and receiving-medium identity required)
- Flow property / unit: Mass / kg NH3
- Amount rule: calculate the named compound from compatible nitrogen activity and the documented pathway method; convert compound-N by 17/14 once, assign upstream/foreground responsibility without duplication, then normalize to accepted reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured nitrogen activity and emissions for the actual plot and reporting period before final normalization.
- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_nitrogen`
- Sources: `ipcc-managed-soils-2019`
- Range: Physical precursor-N conservation check; not an empirical emission-factor range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg compound-N/kg available precursor N
  - Basis: the named pathway and its compatible precursor-N ledger; indirect N2O-N is bounded by its documented deposited/leached precursor, not a second subtraction from the source ledger
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Nitrate to water from the documented leaching/runoff pathway (`soil_nitrate`)
Document applicability and responsibility by site, N source, climate, route and receiving medium. Missing pathway data are not zero; a justified inapplicable pathway is explicitly disclosed.
- Selected flow: Nitrate to water from the documented leaching/runoff pathway (UUID unresolved; chemical and receiving-medium identity required)
- Flow property / unit: Mass / kg NO3
- Amount rule: calculate the named compound from compatible nitrogen activity and the documented pathway method; convert compound-N by 62/14 once, assign upstream/foreground responsibility without duplication, then normalize to accepted reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured nitrogen activity and emissions for the actual plot and reporting period before final normalization.
- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_soil_nitrogen`
- Sources: `ipcc-managed-soils-2019`
- Range: Physical precursor-N conservation check; not an empirical emission-factor range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg compound-N/kg available precursor N
  - Basis: the named pathway and its compatible precursor-N ledger; indirect N2O-N is bounded by its documented deposited/leached precursor, not a second subtraction from the source ledger
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

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
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
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
- Sources: `fao-gap-framework-2003`
#### Outputs
##### Product flows
###### Harvested berries (`harvested_berries`)
Weigh harvested berries by species and grade before conditioning.
- Selected flow: Harvested fresh berries (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: lot scale records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
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
- Sources: `fao-gap-framework-2003`
##### Waste flows
###### Harvest losses (`harvest_losses`)
Record field losses or estimates with the destination and estimation method.
- Selected flow: Harvest loss (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: weighed loss or reconciled mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
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
- Sources: `fao-gap-framework-2003`

### Process: Primary conditioning and grading (`process_conditioning_grading`)
#### Inputs
##### Product flows
###### Conditioning water (`conditioning_inputs`)
Record water used for washing or other conditioning operations linked to each lot.
- Selected flow: Conditioning water supply (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Amount rule: receiving, utility and packaging records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
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
- Sources: `fao-gap-framework-2003`
###### Conditioning energy (`conditioning_energy`)
Record electricity, fuel and other energy used for cooling, washing, sorting or packing equipment.
- Selected flow: Conditioning energy supply (UUID unresolved; intentionally blank)
- Flow property / unit: Energy or mass / kWh, MJ or kg
- Amount rule: meter, invoice and lot-linked run log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
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
- Sources: `fao-gap-framework-2003`
###### Wooden crate (`conditioning_packaging_wood_crate`)

**Collection scope and applicability for conditioning_packaging.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record packaging and presentation materials consumed by the conditioning run when applicable.
Raw activity or stage basis: per 1 kg marketable fresh berry.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Wooden crate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-gap-framework-2003`; `fao-package-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Corrugated fibreboard box (`conditioning_packaging_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-gap-framework-2003`; `fao-package-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Polyethylene wrapping film (`conditioning_packaging_pe_film`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-gap-framework-2003`; `fao-package-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

#### Outputs
##### Product flows
###### Marketable berries (`marketable_berries`)
Use final weighed product at the declared farm-gate or first marketable outlet.
- Selected flow: Raspberries, blackberries, mulberries and loganberries `562e96d5-9c9f-4b90-877c-b2ebf33c87cc`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: lot dispatch weight

- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_yield_records`
- Sources: `fao-gap-framework-2003`
##### Waste flows
###### Conditioning rejects (`conditioning_rejects`)
Record grading rejects by destination and treatment route.
- Selected flow: Conditioning reject (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: reject weight or reconciled mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable fresh berry.

- Normalization basis: per declared reference flow
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
- Sources: `fao-gap-framework-2003`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_marketable_rejects` | outputs and rejects | Separate products, rejects and waste by measured mass and destination. If co-products remain, use a documented physical or economic basis and report sensitivity. | `fao-gap-framework-2003` |
| `allocation_multi_period` | perennial systems | Allocate shared establishment and stand-management burdens over the productive period using disclosed yield or time shares. | `fao-gap-framework-2003` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `process_crop_establishment` | inputs and land | field log, invoice, area map | area, age, plants, materials, dates | reconcile field and purchase records; Raw aggregation and attribution: allocate by declared period | kg, ha, year | event/annual | establishment and productive period | each block | per declared reference flow | invoices, maps, review |
| `cp_input_records` | `process_crop_management` | inputs | invoice, meter, application log | product, nutrient content, amount, date, field | primary records and reconciliation; Raw aggregation and attribution: sum by season | kg, kg nutrient, m3, kWh, L | event/monthly | full season | block/site | per declared reference flow | invoices, meters |
| `cp_yield_records` | `process_harvest` | outputs | weigh ticket, harvest log | species, grade, mass, date, block | weigh each lot and outlet; Raw aggregation and attribution: sum lots and grades | kg | each lot | full season | block/outlet | per declared reference flow | calibrated scale |
| `cp_harvest_records` | `process_harvest` | harvest materials | issue/waste log | material, quantity, route | issue and return reconciliation; Raw aggregation and attribution: sum by material | kg | harvest period | full season | harvest operation | per declared reference flow | inventory records |
| `cp_conditioning_records` | `process_conditioning_grading` | conditioning inputs | meter, packing log, invoice | input, amount, lot, energy | lot-linked records; Raw aggregation and attribution: allocate by lot mass | kg, m3, kWh | lot/daily | full season | conditioning unit | per declared reference flow | meters, invoices |
| `cp_reject_records` | `process_reject_routing` | rejects and destinations | grading/destination log | mass, quality, destination, treatment | mass-balance each lot; Raw aggregation and attribution: reconcile all outputs | kg | each lot | full season | site/outlet | per declared reference flow | receipts, balance |
| `cp_emission_calculation` | all relevant processes | elementary exchanges | calculation record | activity, factor, method, uncertainty | apply declared method; Raw aggregation and attribution: calculate then normalize | kg substance or MJ | reporting period | declared period | site/block | per declared reference flow | cited method |
| `cp_managed_soil_nitrogen` | `process_crop_management` | direct and indirect soil emissions | nitrogen activity and method ledger | N sources and amounts; amendments; residue N and fate; area; dates; climate; soil; volatilisation; leaching; precursor; factors and units; receiving medium; upstream owner; stocks; accepted output | Reconcile compatible N activity by pathway, retain source worksheets and method applicability, then attribute and normalize once. | kg N; kg compound | application and period close | complete represented plot/season | actual plot | per declared reference flow | activity records; original factor source; precursor balance; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_marketable` | all rows | inventory amount / marketable fresh berry mass | process amount, marketable mass | per kg | `fao-gap-framework-2003` |
| `calc_nutrient_application` | fertilizer card | product mass × declared nutrient fraction; retain product mass | product mass, nutrient fraction | product and nutrient amounts | `fao-gap-framework-2003` |
| `calc_perennial_share` | establishment | shared burden × declared season/yield share | burden, period, yield | season amount | `fao-gap-framework-2003` |
| `calc_mass_balance` | harvest and routing | harvested = marketable + rejects + losses within declared tolerance | all mass records | reconciled balance | `fao-gap-framework-2003` |
| `calc_managed_soil_nitrogen` | `process_crop_management` | Select compatible direct and indirect methods for fertilizer, organic amendments, returned residues and applicable managed-soil sources. Direct N2O-N = sum of eligible N activity times applicable EF1-family factors plus separately applicable sources; indirect N2O-N = volatilised N precursor times EF4 plus leached/runoff N precursor times EF5, where applicable. Convert N2O-N by44/28 once. Quantify NH3 and nitrate with separately justified species-specific loss fractions, not by assigning all NH3+NOx to NH3 or all leached N to nitrate. Convert NH3-N by17/14 and nitrate-N by62/14 once. Keep components, source pools, media, method uncertainty and burden owner distinct; already covered emissions are not repeated. Missing applicable data prevent completeness; do not invent an emission default. | `cp_managed_soil_nitrogen` | molecular emission amounts per declared reference flow | `ipcc-managed-soils-2019`; `mass-balance-identity` |

Require traceable identity, calibrated weighing, complete season coverage, block scope, lot reconciliation, documented allocation, and explicit missing-data treatment. Disclose representativeness, uncertainty, crop age, yield variability, and unresolved identity.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference flow | Confirm one product flow, mass property and kg unit; unresolved identity remains a review finding. | `fao-gap-framework-2003` |
| `validation_completeness` | foreground package | Required processes and protocols must be present or marked not applicable with justification. | `fao-gap-framework-2003` |
| `validation_mass_balance` | harvest and routing | Check harvested mass against marketable output, rejects and losses; unexplained gaps fail validation. | `fao-gap-framework-2003` |
| `validation_nutrient_basis` | fertilizer and amendments | Check product, nutrient content, amount, date, area and source record; generic unlabeled totals fail. | `fao-gap-framework-2003`, `source-ipcc-2019-refinement` |
| `validation_managed_soil_coverage` | nitrogen inputs, residues and emissions | Require each applicable nitrogen pathway to be quantified under the stated method or covered by a named compatible upstream dataset once. Supported inapplicability is recorded; missing activity, factors, species split, medium or attribution remains a blocking completeness gap. Reject automatic zero or double counting of direct/indirect components. | `ipcc-managed-soils-2019` |

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

Evidence applicability: cited general farm-record and postharvest frameworks do not supply crop-specific yields, lifetimes, gate cutoffs or LCA allocation defaults. Those are this PCR methodology decisions; qualify them by the actual species, route and period and obtain compatible agronomic evidence before asserting completeness. Provisional author ranges are screening aids, not empirical acceptance limits or substituted measurements.

## 11. Data Sources

| source_id | type | Reference | Use |
| --- | --- | --- | --- |
| `source-ipcc-2019-refinement` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines | conditional field-emission and nutrient-related calculation method |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | Generic monitoring and farm-record context only; crop-specific routes, lifetimes, quantitative ranges and LCA allocation are PCR choices requiring separate applicable evidence. |
| `ipcc-managed-soils-2019` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, sections 11.2.1 and 11.2.2 and Tables 11.1/11.3, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Nitrogen activity and direct/indirect N2O methods; no berry-specific yield or universal per-product emission default |
| `mass-balance-identity` | method_factor | Physical conservation of mass and nitrogen, as defined by the stated PCR calculation and precursor ledgers | Conservation constraints only, not measured loss fractions or empirical factors |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
