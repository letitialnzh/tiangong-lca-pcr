---
schema_version: 1
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-cattle
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Raw Milk of Cattle

## 1. Scope and Applicability

This PCR applies to raw milk produced by domesticated cattle and delivered from the dairy farm as chilled,
unprocessed milk. It supports foreground data packages representing a full, representative dairy-farm operating
period up to the farm gate. The model covers the whole reporting herd, feed and bedding supply, directly managed
feed production when applicable, enteric fermentation, manure management, milking, cooling, and on-farm storage.

The PCR excludes raw milk of buffalo, sheep, goats, camels, and other animals; pasteurized, sterilized,
homogenized, separated, standardized, concentrated, dried, fermented, flavoured, or otherwise processed milk;
transport after the farm gate; dairy manufacturing; packaging; distribution; retail; use; and end of life.
A concrete data package shall state the cattle production system, geography, reporting period, herd structure,
milk composition, farm-gate condition, and whether feed production and input transport are foreground or linked
upstream.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-cattle |
| classification_refs | CPC 3.0: 02211 Raw milk of cattle (exact) |
| covered_products | Raw whole milk from cattle, including saleable chilled farm milk before heat treatment or dairy processing |
| excluded_products | Raw milk from non-cattle species; separated, standardized, pasteurized, sterilized, homogenized, concentrated, dried, fermented, flavoured, or otherwise processed milk; milk consumed entirely within the farm and not delivered as product |
| representative_product | Chilled raw whole cattle milk ready to leave on-farm storage |
| production_route | Dairy herd management, feed supply, manure management, milking, cooling, and on-farm storage to the farm gate |
| market_state | Unprocessed liquid raw milk at the farm gate, normally chilled and declared by measured fat and true-protein content |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of raw cattle milk ready to leave the dairy farm |
| How much | 1 kg of physical saleable raw cattle milk at the farm gate, with measured fat and true-protein content |
| How well | Raw whole cattle milk meeting the declared farm-gate specification, with measured physical mass, fat content, true-protein content, temperature, and saleable status |
| How long or cycle | One representative reporting year or another declared period covering seasonal variation and a stable herd production cycle |
| reference_flow_link | `raw_cattle_milk` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw milk of cattle `aa8aebbb-724a-417b-8372-2dccd499ce71` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cattle species; raw and unprocessed state; farm-gate geography; production system; reporting period; farm-gate temperature; physical milk mass; fat percentage; true-protein percentage; calculated FPCM mass; saleable milk status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset
metadata, process notes, reference-flow comments, product descriptions, or equivalent fields. Missing required
qualifiers make the reference-flow definition incomplete.

The reference flow and all inventory amounts use 1 kg of physical saleable raw cattle milk at the farm gate. Fat-and-protein-corrected milk (FPCM), corrected to 4.0% fat and 3.3% true protein, is a separately reported comparison basis. Retain measured physical mass and composition and use `calc_fpcm_reporting` to convert the same allocated result between bases; 1 kg of physical milk is not assumed to equal 1 kg FPCM. This PCR uses a physical-mass inventory basis for downstream material inputs, with the IDF FPCM basis retained for comparative reporting. This choice does not establish full conformity with every IDF reporting requirement.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference physical raw-milk flow | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record physical saleable raw-milk mass in kg and normalize to 1 kg physical milk; volume-only records require measured density for the represented milk and temperature. Report FPCM separately using measured composition. |
| `milk_composition` | Milk fat and true protein | Mass fraction | % by mass | Use representative measured fat and true-protein percentages for the same milk mass and period; do not substitute crude protein without a disclosed, justified conversion. |
| `dry_matter_basis` | Feed intake and bedding | Mass | kg dry matter | Preserve as-fed mass and dry-matter fraction in raw records, then calculate kg dry matter; disclose any feed quantity that cannot be converted. |
| `liveweight_basis` | Animals leaving the farm | Mass | kg live weight | Use live weight at farm exit or a documented conversion; carcass mass shall not be inserted as live weight without the conversion basis. |
| `gas_mass_basis` | Direct gaseous emissions | Mass | kg substance | Record each emitted substance separately before impact characterization; do not store CO2-equivalent values as elementary-flow masses. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_farm_gate` | Product system to farm gate | Include dairy herd maintenance and replacements, feed and bedding supply, enteric fermentation, manure collection/storage/treatment, directly managed feed production, input energy and water, milking, cleaning, cooling, refrigerant losses, and on-farm raw-milk storage up to milk ready to leave the farm. | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `boundary_whole_herd` | Reporting herd | Represent lactating and dry cows, replacement animals, calves, culls, mortality, herd inventory change, and animal movements supporting reported milk output; do not model only lactating cows when other herd classes share burdens. | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `boundary_upstream_inputs` | Purchased inputs | Link purchased feed, bedding, replacement animals, fuels, electricity, fertilizers, crop-protection products, cleaning agents, refrigerants, and other material inputs to geographically and technologically appropriate upstream datasets. | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `boundary_feed_land` | Feed production and land | Include directly managed feed-crop and pasture inputs, yields, soil emissions, irrigation, and relevant land-use-change treatment; for externally supplied feed, retain origin and composition records and link upstream burdens without duplicating them on farm. | `idf-dairy-carbon-footprint-2022`; `fao-leap-animal-feed-2016` |
| `boundary_direct_emissions` | Cattle, manure, and managed soils | Calculate enteric CH4, manure-management CH4 and N2O, and relevant managed-soil emissions with methods and factors appropriate to the declared region, animal category, productivity, diet, climate, and manure system; preserve activity data and factor sources. | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `boundary_exclusions` | Downstream life-cycle stages | Exclude transport after the farm gate, dairy processing, packaging, distribution, retail, consumption, and end of life; disclose any study-specific extension separately from the PCR result. | `idf-dairy-carbon-footprint-2022` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A dairy production system with the reporting herd, managed land, and production assets in service at the opening of the reporting period; herd replacement burdens and inventory changes are represented through period records and annualized calculations. |
| starting_condition_role | Establishes a reproducible farm-accounting condition for a biologically continuous dairy system without treating the opening herd as burden-free. |
| product_classification_scope | Raw cattle milk covered by CPC 3.0 code 02211; other animal milk and processed dairy products are outside the category. |
| recursive_input_rule | Raw cattle milk produced and used internally, including milk fed to calves, is recorded as internal use and deducted from saleable farm-gate output rather than linked as an upstream raw-milk dataset. Externally purchased raw cattle milk is a separate product input with an upstream dataset and cannot be netted against output. |
| upstream_dataset_requirement | Every purchased feed, animal, energy carrier, material, and externally provided service crossing the boundary requires a representative upstream dataset or an explicit documented data gap; supplier-specific data are preferred when material. |
| disclosure | Declare farm geography, production system, reporting period, herd classes and inventory change, milk sold and internal use, milk composition, feed origins, manure systems, land management, allocation factors, excluded processes, data gaps, and any non-steady operational change. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd_and_feed_management` | Herd, feeding, housing, and animal management | required | Always | Foreground herd operation and enteric-emission basis | Per 1 kg physical saleable raw milk at farm gate |
| `manure_management` | Manure collection, storage, treatment, and export | required | Always | Foreground manure route and direct-emission basis | Per 1 kg physical saleable raw milk at farm gate |
| `on_farm_feed_production` | Directly managed feed-crop and pasture production | conditional | Include when feed crops or pasture are managed within the reporting farm boundary; otherwise link feed upstream | Foreground feed and managed-soil inventory | Per 1 kg physical saleable raw milk at farm gate |
| `milking_cooling_storage` | Milking, cleaning, cooling, and on-farm storage | required | Always | Foreground delivery of saleable raw milk | Per 1 kg physical saleable raw milk at farm gate |

### Process: Herd, feeding, housing, and animal management (`herd_and_feed_management`)

#### Inputs

##### Product flows

###### Maize silage (`feed_ration_silage`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record forage, concentrate, by-product feed, mineral, and additive quantities consumed by the represented herd,
with origin, animal class, as-fed mass, and dry-matter fraction.

- Selected flow: Maize silage
- Flow property / unit: Mass / kg dry matter
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_records`

###### Grass hay (`feed_ration_hay`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record forage, concentrate, by-product feed, mineral, and additive quantities consumed by the represented herd,
with origin, animal class, as-fed mass, and dry-matter fraction.

- Selected flow: Grass hay
- Flow property / unit: Mass / kg dry matter
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_records`

###### Process water (`herd_resources_water`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record water, electricity, and fuels for drinking, ventilation, lighting, feeding equipment, pumping, and other
herd operations; keep distinct supplied flows in the concrete data package.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_herd_resource_records`

###### Electricity at equipment supply (`herd_resources_electricity`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record water, electricity, and fuels for drinking, ventilation, lighting, feeding equipment, pumping, and other
herd operations; keep distinct supplied flows in the concrete data package.

- Selected flow: Electricity at equipment supply
- Flow property / unit: Energy / kWh
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_herd_resource_records`

###### Diesel fuel (`herd_resources_diesel`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record water, electricity, and fuels for drinking, ventilation, lighting, feeding equipment, pumping, and other
herd operations; keep distinct supplied flows in the concrete data package.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_herd_resource_records`

###### Replacement cattle entering the herd (`replacement_cattle`)

Record purchased or transferred replacement cattle separately from births within the represented herd.

- Selected flow: Live dairy cattle, route-specific
- Flow property / unit: Mass / kg live weight
- Amount rule: Calculate live weight entering from animal movement and weight records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live cattle leaving the dairy farm (`live_cattle_sales`)

Record calves, culled cows, heifers, and other live cattle leaving the farm by animal class and live weight.

- Selected flow: Live cattle, route-specific
- Flow property / unit: Mass / kg live weight
- Amount rule: Calculate total live weight leaving from animal movement and weight records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd_records`

###### Manure transferred to manure management (`manure_internal`)

Record manure transferred internally to each storage or treatment route, including bedding and dilution water.

- Selected flow: Cattle manure, internal transfer
- Flow property / unit: Mass / kg
- Amount rule: Calculate by route from excretion, bedding, and collected dilution-water records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Range: Provisional internal-manure mass-balance QA screen (rescaled from the FPCM screen)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100 * k_period
  - Unit: kg/kg physical saleable raw milk
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Animal mortalities requiring treatment (`animal_mortalities`)

Record animals that die within the farm boundary by class, mass, and treatment route.

- Selected flow: Animal mortality waste, route-specific
- Flow property / unit: Mass / kg
- Amount rule: Sum recorded mortality mass and normalize by physical saleable farm-gate milk mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_herd_records`
- Range: Mortality mass-balance QA screen (rescaled from the FPCM screen)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1 * k_period
  - Unit: kg/kg physical saleable raw milk
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric methane to air (`enteric_methane`)

The applicable calculation method is specified in `calc_enteric_ch4`; retain its activity inputs, factor sources and calculation record.

Calculate CH4 from enteric fermentation for every represented cattle class using consistent activity,
productivity, diet, and region-specific method parameters.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate period enteric CH4 from animal activity and the applicable enteric-emission method and factors; divide the allocated substance mass by the same-period physical saleable farm-gate milk mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd_records`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional enteric-CH4 QA screen (rescaled from the FPCM screen)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1 * k_period
  - Unit: kg CH4/kg physical saleable raw milk
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Manure collection, storage, treatment, and export (`manure_management`)

#### Inputs

##### Product flows

###### Manure received from the represented herd (`manure_received`)

Keep manure quantity, volatile solids, nitrogen, bedding, dilution, storage, treatment, and destination records
consistent with the internal herd output.

- Selected flow: Cattle manure, internal transfer
- Flow property / unit: Mass / kg
- Amount rule: Equal `manure_internal` after route disaggregation; internal transfers cancel in the aggregated system.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Exported manure or recovered product (`exported_manure`)

Record manure, digestate, compost, separated solids, recovered nutrients, or energy products leaving the farm,
with classification as residue, co-product, or waste.

- Selected flow: Route-specific manure or recovered product
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity by product and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manure_records`
- Range: Provisional exported-manure QA screen (rescaled from the FPCM screen)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100 * k_period
  - Unit: kg/kg physical saleable raw milk
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Manure sent to waste treatment or disposal (`manure_waste`)

Record manure classified and managed as waste, its destination, and treatment burdens retained by the dairy system.

- Selected flow: Route-specific manure waste
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced waste quantity by destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Range: Manure-route mass-balance QA screen (rescaled from the FPCM screen)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100 * k_period
  - Unit: kg/kg physical saleable raw milk
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Methane from manure management to air (`manure_methane`)

The applicable calculation method is specified in `calc_manure_ch4`; retain its activity inputs, factor sources and calculation record.

Calculate manure CH4 by animal class, volatile solids, management system, climate, and methane conversion.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg CH4
- Amount rule: Calculate period manure CH4 from volatile solids, methane potential, route shares, conversion factors and applicable recovery or oxidation; divide the allocated substance mass by the same-period physical saleable farm-gate milk mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional manure-CH4 QA screen (rescaled from the FPCM screen)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1 * k_period
  - Unit: kg CH4/kg physical saleable raw milk
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide from manure management to air (`manure_nitrous_oxide`)

The applicable calculation method is specified in `calc_manure_n2o`; retain its activity inputs, factor sources and calculation record.

Calculate direct and applicable indirect N2O without double counting field-application emissions.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate period direct and indirect manure N2O from excreted nitrogen, route shares and applicable emission factors; convert N2O-N to N2O by 44/28 when needed and divide the allocated N2O mass by the same-period physical saleable farm-gate milk mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Sources: `ipcc-2019-livestock-manure`
- Range: Provisional manure-N2O QA screen (rescaled from the FPCM screen)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2 * k_period
  - Unit: kg N2O/kg physical saleable raw milk
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia losses from manure management to air (`manure_ammonia`)

Record or calculate NH3 consistently with the manure nitrogen balance and indirect N2O calculation.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg NH3
- Amount rule: Apply the declared regional method to collected manure nitrogen and management-system records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure_records`
- Sources: `fao-leap-nutrient-flows-2018`
- Range: Provisional ammonia QA screen (rescaled from the FPCM screen)
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1 * k_period
  - Unit: kg NH3/kg physical saleable raw milk
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Directly managed feed-crop and pasture production (`on_farm_feed_production`)

#### Inputs

##### Product flows

###### Maize seed (`feed_crop_inputs_seed`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record seed, fertilizers and nutrient content, manure applied, crop-protection products, fuel, electricity,
irrigation water, and contracted field operations separately in the concrete package.

- Selected flow: Maize seed
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_on_farm_feed_records`

###### Urea fertilizer (`feed_crop_inputs_urea`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record seed, fertilizers and nutrient content, manure applied, crop-protection products, fuel, electricity,
irrigation water, and contracted field operations separately in the concrete package.

- Selected flow: Urea fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_on_farm_feed_records`

###### Diesel fuel (`feed_crop_inputs_diesel`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record seed, fertilizers and nutrient content, manure applied, crop-protection products, fuel, electricity,
irrigation water, and contracted field operations separately in the concrete package.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_on_farm_feed_records`

###### Process water (`feed_crop_inputs_water`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record seed, fertilizers and nutrient content, manure applied, crop-protection products, fuel, electricity,
irrigation water, and contracted field operations separately in the concrete package.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_on_farm_feed_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Maize silage (`on_farm_feed_output_silage`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record usable crop, pasture, forage, or conserved-feed dry matter transferred to herd feeding.

- Selected flow: Maize silage
- Flow property / unit: Mass / kg dry matter
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_on_farm_feed_records`

###### Grass hay (`on_farm_feed_output_hay`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record usable crop, pasture, forage, or conserved-feed dry matter transferred to herd feeding.

- Selected flow: Grass hay
- Flow property / unit: Mass / kg dry matter
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_on_farm_feed_records`

##### Waste flows

##### Elementary flows

###### Nitrous oxide to air (`feed_land_nitrogen_losses_n2o`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Calculate N2O to air and record or calculate NH3 to air and nitrate to water as separate elementary flows in the
concrete package, consistently with nitrogen inputs, crop uptake, grazing, and manure routing.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate only this substance from compatible activity data, an applicable method and the receiving compartment; convert nitrogen bases to substance mass where needed, then normalize using matching-period output and the original allocation rules.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_on_farm_feed_records`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`

###### Ammonia to air (`feed_land_nitrogen_losses_nh3`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Calculate N2O to air and record or calculate NH3 to air and nitrate to water as separate elementary flows in the
concrete package, consistently with nitrogen inputs, crop uptake, grazing, and manure routing.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate only this substance from compatible activity data, an applicable method and the receiving compartment; convert nitrogen bases to substance mass where needed, then normalize using matching-period output and the original allocation rules.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_on_farm_feed_records`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`

###### Nitrate to water (`feed_land_nitrogen_losses_nitrate`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Calculate N2O to air and record or calculate NH3 to air and nitrate to water as separate elementary flows in the
concrete package, consistently with nitrogen inputs, crop uptake, grazing, and manure routing.

- Selected flow: Nitrate to water
- Flow property / unit: Mass / kg NO3
- Amount rule: Calculate only this substance from compatible activity data, an applicable method and the receiving compartment; convert nitrogen bases to substance mass where needed, then normalize using matching-period output and the original allocation rules.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_on_farm_feed_records`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`

### Process: Milking, cleaning, cooling, and on-farm storage (`milking_cooling_storage`)

#### Inputs

##### Product flows

###### Electricity at equipment supply (`milking_resources_electricity`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record electricity, fuel, water, detergents, disinfectants, and refrigerant make-up separately. Directly assign
milking, cooling, and milk-storage resources to milk.

- Selected flow: Electricity at equipment supply
- Flow property / unit: Energy / kWh
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milking_records`

###### Process water (`milking_resources_water`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record electricity, fuel, water, detergents, disinfectants, and refrigerant make-up separately. Directly assign
milking, cooling, and milk-storage resources to milk.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milking_records`

###### Sodium hydroxide cleaning solution (`milking_resources_naoh`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record electricity, fuel, water, detergents, disinfectants, and refrigerant make-up separately. Directly assign
milking, cooling, and milk-storage resources to milk.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg solution
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milking_records`
- Sources: `fao-milking-cleaning`

###### R134a refrigerant (`milking_resources_r134a`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record electricity, fuel, water, detergents, disinfectants, and refrigerant make-up separately. Directly assign
milking, cooling, and milk-storage resources to milk.

- Selected flow: R134a refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milking_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw cattle milk at the farm gate (`raw_cattle_milk`)

The final product is saleable raw whole cattle milk ready to leave on-farm storage. Physical mass and measured
composition are retained alongside the physical-mass-normalized inventory and the separately reported FPCM result.

- Selected flow: Raw milk of cattle `aa8aebbb-724a-417b-8372-2dccd499ce71`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk_output_records`
- Sources: `idf-dairy-carbon-footprint-2022`
- Range: Reference physical-milk output consistency
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg physical saleable raw milk
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Dairy cleaning wastewater (`milking_wastes_wastewater`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record wastewater by treatment route and rejected or discarded milk separately from milk fed internally to animals.

- Selected flow: Dairy cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milk_output_records`

###### Discarded raw cattle milk (`milking_wastes_milk_waste`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record wastewater by treatment route and rejected or discarded milk separately from milk fed internally to animals.

- Selected flow: Discarded raw cattle milk
- Flow property / unit: Mass / kg
- Amount rule: Measure only the actual quantity of this identity under the original collection protocol, retaining raw composition, state and units; normalize using matching-period output and the original allocation rules. Do not duplicate the former aggregate total across components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milk_output_records`

##### Elementary flows

###### 1,1,1,2-tetrafluoroethane to air (`refrigerant_leakage_r134a_air`)

Activate only when this concrete identity is actually used or generated by this process; this is not a default recipe or recommended input. Retain its raw amount, composition, state and actual function under the original collection protocol and attribute it separately to the declared reference flow. Add a separate concrete card for other actual materials; never substitute their quantities here or treat missing records as zero. Aggregate ranges do not establish component defaults and are not inherited.

Record each refrigerant species released from milk-cooling equipment; do not replace mass emissions with
CO2-equivalent values.

- Selected flow: 1,1,1,2-tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate only this substance from compatible activity data, an applicable method and the receiving compartment; convert nitrogen bases to substance mass where needed, then normalize using matching-period output and the original allocation rules.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milking_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Separable farm activities and outputs | Subdivide directly attributable activities before allocation. Assign milking, milk cooling, and milk-storage burdens entirely to milk; separately accounted animal-rearing or exported crop/energy activities do not enter the shared dairy allocation pool. | `idf-dairy-carbon-footprint-2022` |
| `allocation_milk_live_animals` | Shared dairy-herd burdens between milk and live cattle | Apply the IDF 2022 biophysical net-energy method: `AF_milk = (NE_L × M_FPCM) / ((NE_L × M_FPCM) + Σ(NE_G,i × M_liveweight,i))`; use consistent period FPCM and live-weight sales, class-specific net energy for growth when available, and disclose every factor. The remaining fraction is assigned to live animals. | `idf-dairy-carbon-footprint-2022` |
| `allocation_manure` | Manure leaving the farm | Classify manure explicitly. Treat manure with essentially no value at the boundary as a residue using cut-off; if it is a co-product, use disclosed economic allocation; if it is waste, assign its treatment burdens to the dairy system without an avoided-product credit. | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `allocation_internal_flows` | Internal milk, feed, and manure transfers | Cancel internal product transfers only after preserving their quantities and characteristics. Internal raw milk fed to calves reduces saleable output; internally produced feed and manure shall not receive duplicated upstream burdens. | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd_records` | `herd_and_feed_management` | Herd structure, movements, live weight, mortality, and enteric parameters | Animal register and herd-performance records | animal_class; head_count; entry_date; exit_date; exit_reason; live_weight; body_weight; milk_yield; feed_digestibility; gross_energy_intake | Farm register, calibrated scales or documented weight estimation, and herd-system export; raw-record reconciliation: Reconcile opening stock + births + purchases - sales - transfers - deaths = closing stock; aggregate animal-days. Then apply calc_inventory_normalization to the attributable period quantities; retain the unnormalized records. | head; kg live weight; kg milk; MJ/head/day | Continuous events, monthly summary | At least one representative 12-month period; longer averaging when unstable | All cattle supporting reported milk | per 1 kg reference flow | Register reconciliation, scale calibration or method, missing-event log, and system export |
| `cp_feed_records` | `herd_and_feed_management` | Feed ration and bedding | Purchase, mixing, inventory, grazing, and laboratory records | material_id; origin; animal_class; as_fed_mass; dry_matter_fraction; opening_stock; closing_stock; feed_waste; bedding_mass | Weighbridge, invoices, mixer logs, feed analyses, grazing estimate, and stock reconciliation; raw-record reconciliation: Inputs + opening stock - closing stock - losses; convert to dry matter and normalize by physical saleable farm-gate milk mass. Then apply calc_inventory_normalization to the attributable period quantities; retain the unnormalized records. | kg as fed; kg dry matter; % dry matter | Batch or daily, monthly summary | Same representative period as milk and herd | All feed and bedding used by represented herd | per 1 kg reference flow | Calibration, invoices, laboratory certificates, and reconciliation difference |
| `cp_herd_resource_records` | `herd_and_feed_management` | Herd water and housing energy | Meter, invoice, and equipment-operation records | meter_id; carrier; opening_reading; closing_reading; invoice_quantity; equipment_hours; allocation_driver | Sub-meter preferred; otherwise site reconciliation with physical allocation; raw-record reconciliation: Reconcile meters and invoices; preserve distinct carriers. Then apply calc_inventory_normalization to the attributable period quantities; retain the unnormalized records. | kg water; kWh; MJ; kg or L fuel | Monthly | Same representative period as milk | Herd housing and service areas, excluding separately metered milking | per 1 kg reference flow | Meter calibration, invoices, conversion factors, and allocation worksheet |
| `cp_manure_records` | `manure_management` | Manure quantity, composition, route, treatment, export, and emissions | Manure-management and nutrient-balance records | animal_class; volatile_solids; nitrogen_excretion; bedding; dilution_water; management_system; climate; storage_duration; treatment; exported_mass; destination | Records, engineering balance, manure analysis, storage measurement, and method calculation; raw-record reconciliation: Reconcile generated, stored, treated, applied, exported, and disposed manure; calculate by route. Then apply calc_inventory_normalization to the attributable period quantities; retain the unnormalized records. | kg manure; kg volatile solids; kg N; days; kg product | Event or batch, monthly summary | Same period as herd and milk | Every manure route for all represented herd classes | per 1 kg reference flow | Sampling, laboratory results, storage dimensions, receipts, balance closure, and factor provenance |
| `cp_on_farm_feed_records` | `on_farm_feed_production` | Managed crop and pasture inputs, outputs, land, and nutrient losses | Field-operation, harvest, grazing, and land records | field_id; crop_or_pasture; area; seed; fertilizer; nutrient_content; manure_applied; crop_protection; fuel; electricity; irrigation; yield; dry_matter; residue; grazing_days; previous_land_use | Field logs, invoices, calibrated application records, yield measurement, grazing records, and spatial evidence; raw-record reconciliation: Allocate field inputs to harvested or grazed dry matter; retain crop, field, and year. Then apply calc_inventory_normalization to the attributable period quantities; retain the unnormalized records. | ha; kg; kg nutrient; MJ; kWh; kg water; kg dry matter | Each operation and harvest | Crop years supplying feed to milk period | All directly managed feed land and included contracted operations | per 1 kg reference flow | Completeness, calibration, invoices, dry-matter tests, yield reconciliation, and land evidence |
| `cp_milking_records` | `milking_cooling_storage` | Milking, cleaning, cooling, storage, water, energy, chemicals, and refrigerant | Meter, dosing, service, and cleaning-cycle records | electricity; fuel; water; cleaning_agent; dose; cleaning_cycles; refrigerant_type; refrigerant_added; tank_temperature | Sub-meter, invoice, dosing logs, controller, service records, and water balance; raw-record reconciliation: Directly assign measured milking/cooling loads to milk and reconcile with site totals. Then apply calc_inventory_normalization to the attributable period quantities; retain the unnormalized records. | kWh; MJ; kg water; kg chemical; kg refrigerant; °C | Daily or batch, monthly reconciliation | Same period as milk output | All parlours, milk rooms, cooling, and farm storage | per 1 kg reference flow | Calibration, invoices, dosing checks, service certificates, temperature logs, and balance closure |
| `cp_milk_output_records` | `milking_cooling_storage` | Physical milk, composition, internal use, rejected milk, wastewater, and saleable output | Tank, processor receipt, laboratory, disposition, and water-balance records | milk_mass; milk_volume; density; fat_percent; true_protein_percent; temperature; saleable_mass; calf_feed_mass; rejected_mass; wastewater; destination; timestamp | Calibrated tank or weigh record linked to laboratory composition, processor receipt, and water balance; raw-record reconciliation: Reconcile produced = saleable + internal use + rejected + inventory change; calculate FPCM by batch or period. Then apply calc_inventory_normalization to the attributable period quantities; retain the unnormalized records. | kg; L; kg/L; % by mass; °C | Each pickup or batch; representative composition testing | Same period as herd and resource records, including seasonality | All produced milk, every disposition, and related wastewater | per 1 kg reference flow | Tank calibration, laboratory QA, receipts, density method, and mass-balance closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_fpcm` | Physical raw cattle milk | `FPCM (kg) = milk mass (kg) × [0.1226 × fat% + 0.0776 × true protein% + 0.2534]`; apply composition values as percentages, calculate at the most representative batch or period resolution, and sum before normalization. Use percentages such as 4.0, not fractions such as 0.04. For comparative results, sum only the saleable batches matching the physical saleable-milk denominator; retain internal-use and rejected milk separately. | milk_mass; fat_percent; true_protein_percent | kg FPCM | `idf-dairy-carbon-footprint-2022` |
| `calc_saleable_milk_balance` | Milk dispositions | `total physical milk produced = saleable farm-gate milk + internal milk use + rejected milk + closing inventory - opening inventory`; investigate unexplained imbalance and normalize only saleable output. | total_milk; saleable_milk; internal_use; rejected_milk; opening_inventory; closing_inventory | reconciled kg physical milk and kg FPCM | `mass-balance-identity`; `idf-dairy-carbon-footprint-2022` |
| `calc_milk_allocation` | Shared dairy-herd burdens | `AF_milk = (NE_L × M_FPCM) / ((NE_L × M_FPCM) + Σ(NE_G,i × M_liveweight,i))`; `AF_live_animals = 1 - AF_milk`. Use IDF class-specific net-energy values or justified values and directly assign separable activities first. | M_FPCM; animal_class; M_liveweight_i; NE_L; NE_G_i; directly_attributable_burdens | disclosed allocation factors and allocated shared inventory | `idf-dairy-carbon-footprint-2022` |
| `calc_enteric_ch4` | enteric_methane | Use the appropriate IPCC 2019 Refinement tier. Prefer Tier 2 when gross-energy intake, methane conversion, animal class, productivity, and diet data are available; otherwise use the most representative permitted factor and disclose the limitation. | animal_days; animal_class; gross_energy_intake or emission_factor; methane_conversion_factor; productivity; diet | kg CH4 from enteric fermentation | `ipcc-2019-livestock-manure` |
| `calc_manure_ch4` | manure_methane | Calculate manure CH4 from animal population, volatile-solids excretion, maximum methane-producing capacity, management-system fraction, methane conversion, and applicable recovery or oxidation terms. | animal_days; volatile_solids; manure_system_fraction; B0; MCF; recovery; oxidation | kg CH4 from manure management | `ipcc-2019-livestock-manure` |
| `calc_manure_n2o` | manure_nitrous_oxide | Calculate direct and indirect N2O from nitrogen excretion and management-system fractions; keep volatilized and leached nitrogen consistent with NH3, nitrate, and managed-soil calculations. | nitrogen_excretion; manure_system_fraction; direct_EF; volatilization_fraction; leaching_fraction; indirect_EF | kg N2O from manure management | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `calc_inventory_normalization` | All inventory rows | Divide attributable period quantities by the measured physical saleable farm-gate milk mass after applying the declared allocation and reconciling internal transfers. Retain internal-transfer rows for unit-process balances and cancel them only in the aggregated system; preserve totals, period and allocation factors. The denominator must be positive and exclude internal-use and rejected milk. | reporting_period_amount; saleable_physical_milk_mass; internal_flow_flag; allocation_factor | inventory amount per 1 kg physical saleable raw milk | `mass-balance-identity`; `idf-dairy-carbon-footprint-2022` |
| `calc_fpcm_reporting` | Separate comparative results and provisional QA screens | `k_period = saleable_FPCM / saleable_physical_milk_mass`; `result_per_kg_FPCM = result_per_kg_physical_milk / k_period`. Use the same saleable batches, period, system boundary and allocated numerator for both results. Calculate saleable_FPCM by summing batch mass times its composition correction, or an equivalent mass-weighted composition calculation; do not use an unweighted mean of batch percentages. Both masses and k_period must be positive. To retain an original per-FPCM QA interval [L, U] on the physical-mass basis, use [L × k_period, U × k_period]; these remain provisional screens, not default inventory values. Do not apply allocation again during this reporting conversion. | saleable_FPCM; saleable_physical_milk_mass; result_per_kg_physical_milk | k_period; result_per_kg_FPCM; physical-mass QA bounds | `idf-dairy-carbon-footprint-2022`; `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and classification | Confirm cattle species, raw/unprocessed state, CPC 02211 scope, reference-flow UUID, farm-gate location, and saleable status. | Product specification, milk receipt, classification record, and TianGong identity confirmation |
| `dq_temporal` | All foreground records | Use a common representative period of at least 12 months unless a shorter period demonstrably covers seasonality; disclose herd expansion, contraction, disruption, drought, or other non-steady conditions. | Dated herd, milk, feed, resource, field, and manure records plus representativeness statement |
| `dq_completeness` | Farm balances | Reconcile milk dispositions, herd movements, feed inventory, water and energy totals, manure routes, and nitrogen flows; quantify missing coverage and omit no material herd class or manure route silently. | Reconciliation worksheets, closure differences, missing-data log, and corrective actions |
| `dq_measurement` | Metered, weighed, and laboratory data | Retain equipment identity, calibration or verification, sampling method, laboratory method, density conversion, and estimation hierarchy. | Calibration certificates, laboratory QA, sampling records, invoices, and estimation rationale |
| `dq_geography_technology` | Upstream datasets and emission methods | Match geography, production system, feed origin, electricity, fuel, climate, manure system, and animal productivity; disclose proxies. | Dataset metadata, supplier information, factor provenance, and proxy justification |
| `dq_consistency` | Allocation and direct-emission calculations | Use one population and period across FPCM, live-weight outputs, enteric emissions, manure emissions, and allocation; keep directly assigned burdens outside the shared allocation pool. | Calculation workbook, factor version, source references, and independent formula check |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | Product identity | Fail when the reference product is not cattle milk, is processed beyond raw on-farm cooling/storage, lacks the declared farm gate, or does not use the confirmed reference-flow identity. | `idf-dairy-carbon-footprint-2022` |
| `validate_reference_flow` | Functional unit and reference flow | Fail when physical milk mass, fat percentage, true-protein percentage, saleable status, or normalization to exactly 1 kg physical saleable raw milk is missing or inconsistent. The linked final product output must be exactly 1 kg physical milk. | `idf-dairy-carbon-footprint-2022` |
| `validate_fpcm_reporting` | Composition-corrected comparison and QA | Fail when composition or saleable batches do not match the physical-milk denominator, percentages are entered as fractions, k_period is absent or non-positive, conversion multiplies rather than divides the physical-mass result by k_period, allocation is applied twice, or physical-milk and FPCM results are presented as interchangeable. Verify these formulas and evidence separately from the reference-mass consistency check. | `idf-dairy-carbon-footprint-2022`; `mass-balance-identity` |
| `validate_period_herd` | Temporal and herd coverage | Fail when herd classes, animal movements, milk output, feed, manure, and resource records do not share a representative period or opening and closing herd inventories cannot be reconciled. | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `validate_boundary` | Boundary completeness | Fail when material feed supply, directly managed feed production, enteric emissions, manure routes, managed-soil emissions, milking, cooling, water, energy, or milk losses are omitted without an applicability reason and data-gap disclosure. | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `validate_emissions` | Direct emissions | Fail when enteric or manure methods omit region, cattle category, productivity, diet or feed-energy basis, manure system, climate, factor source, or calculation tier needed by the method. | `ipcc-2019-livestock-manure` |
| `validate_allocation` | Co-products and residues | Fail when directly attributable activities are allocated, live-animal outputs are omitted, IDF net-energy allocation inputs or factors are missing, manure classification is undeclared, or fractions do not sum to one within tolerance. | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `validate_internal_flows` | Internal milk, feed, and manure | Fail when internal flows are omitted before reconciliation, counted as both purchased and internally produced, or left in the aggregated inventory without cancellation. | `mass-balance-identity` |
| `validate_quality_disclosure` | Dataset publication readiness | Fail when the package lacks geography, production system, period, herd structure, milk composition, feed origin, manure systems, allocation, source/factor versions, proxy disclosure, important QA-range exceptions, or material data gaps. | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground raw-cattle-milk production data package normalized to 1 kg physical saleable raw milk at the farm gate; FPCM comparison results reported separately |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` for dairy processing, food-product, agricultural, and comparative supply-chain models when scope and quality are compatible |
| allowed_use | Attributional farm-gate inventory, hotspot analysis within the declared farm system, supplier-specific or representative raw-milk input to downstream models, and scenario comparison using the same functional unit and allocation method |
| excluded_use | Direct consumer or nutrition claims; processed-milk representation; non-cattle milk; consequential market-change claims; cross-study ranking with incompatible boundaries, allocation, geography, period, or data quality; use of provisional QA ranges as default inventory |
| required_metadata | PCR id and version state; CPC reference; geography; farm production system; reporting period; herd classes and inventory change; raw-milk and FPCM output; fat and true-protein content; farm-gate temperature; feed origin; manure systems; land management; allocation method and factors; Tiangong identities; source and factor versions |
| required_quality_disclosure | Primary-data coverage by inventory group; measurement and calibration evidence; temporal, geographic, and technological representativeness; mass/energy/nitrogen balance closure; proxies and missing data; emission tier and factors; allocation sensitivity; provisional QA-range exceptions |
| update_trigger | Recalculate and republish when milk composition, herd productivity or structure, feed system, manure management, farm energy supply, land management, geography, reporting period, allocation method, reference identity, or a material source/factor changes enough to affect representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `idf-dairy-carbon-footprint-2022` | standard | International Dairy Federation (2022), *The IDF global Carbon Footprint standard for the dairy sector*, Bulletin 520/2022, DOI: 10.56169/FKRK7166, https://shop.fil-idf.org/products/the-idf-global-carbon-footprint-standard-for-the-dairy-sector (accessed 2026-07-24) | FPCM comparative reporting basis and formula, cradle-to-farm-gate inventory, data quality, milk/live-animal allocation, manure handling, direct assignment, and reporting |
| `fao-leap-large-ruminants-2016` | official_guidance | FAO LEAP Partnership (2016), *Environmental performance of large ruminant supply chains: Guidelines for assessment*, ISBN 978-92-5-109523-2, https://openknowledge.fao.org/handle/20.500.14283/i6494en (accessed 2026-07-24) | Large-ruminant process boundary, whole-herd coverage, feed and manure treatment, and allocation hierarchy |
| `fao-leap-animal-feed-2016` | official_guidance | FAO LEAP Partnership (2016), *Environmental performance of animal feeds supply chains: Guidelines for assessment*, https://www.fao.org/partnerships/leap/resources/publications/en (accessed 2026-07-24) | Feed origin, upstream feed datasets, directly managed feed production, and land-related inventory |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP Partnership (2018), *Nutrient flows and associated environmental impacts in livestock supply chains: Guidelines for quantitative assessment*, https://openknowledge.fao.org/handle/20.500.14283/ca1328en (accessed 2026-07-24) | Manure and managed-land nitrogen balance, ammonia, nitrate, and nutrient-flow consistency |
| `ipcc-2019-livestock-manure` | method_factor | IPCC (2019), *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 4, Chapter 10: Emissions from Livestock and Manure Management, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf (accessed 2026-07-24) | Enteric CH4, manure CH4, manure N2O, animal categories, activity data, tiers, and factor selection |
| `ilcd-units-of-mass` | standard | European Commission Joint Research Centre, ILCD reference unit group *Units of mass*, UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, https://eplca.jrc.ec.europa.eu/LCDN/downloads/ILCD_Format_1.1_Documentation/ILCD_UnitGroupDataSet.html (accessed 2026-07-24) | Reference unit-group identity and kg reference unit |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to milk, feed, herd, and manure reconciliation | Internal-flow cancellation, milk disposition balance, and QA bounds |
| `fao-milking-cleaning` | official_guidance | FAO Milking, milk production hygiene and udder health; cleaning-agent context, actual concentration and quantities from site records, https://www.fao.org/4/t0218e/T0218E03.htm | Conditional identity context; verify actual site use, quantities and applicability separately |
