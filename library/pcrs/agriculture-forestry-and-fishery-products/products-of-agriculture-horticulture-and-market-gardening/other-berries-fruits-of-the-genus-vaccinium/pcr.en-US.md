---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-berries-fruits-of-the-genus-vaccinium
language: en-US
status: active
sync_with: pcr.zh-CN.md
---

# Other berries; fruits of the genus Vaccinium

## 1. Scope and Applicability
Cultivated fresh or chilled Vaccinium fruit at farm-gate or first conditioning outlet. Includes blueberries, bilberries, cranberries, lingonberries and equivalent cultivated Vaccinium fruit. Excludes processed, frozen-after-freezing, nursery and wild-harvested products.

## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-berries-fruits-of-the-genus-vaccinium` |
| classification_refs | CPC 3.0 / 01355 / exact; mapping relation: narrower |
| covered_products | Cultivated fresh or chilled Vaccinium fruit |
| excluded_products | Processed, frozen, nursery and wild-harvested products |
| representative_product | Saleable cultivated blueberry or cranberry |
| production_route | Managed production; cultivation; harvest; sorting; primary conditioning; outlet |
| market_state | Saleable fruit at declared outlet |

## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Saleable cultivated Vaccinium fruit |
| How much | 1 kg |
| How well | Declared species/cultivar, grade, maturity, state and outlet |
| How long or cycle | One production year or crop cycle; perennial establishment allocation when applicable |
| reference_flow_link | saleable_fruit |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other berries, fruits of the genus Vaccinium `b9b4cf8e-fbb5-46a3-a4ba-0c9c98d46745` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/cultivar; fresh or chilled state; grade; maturity; production year; outlet; fruit mass basis; irrigation status |

This reference UUID denotes the fresh, unprocessed farm-gate product. Verify actual species, product state and handoff before applying the binding. An independent pack-house, further-processed or otherwise incompatible output requires separately verified identity and must not inherit this UUID. Identity verification does not change the actual system boundary or quantity-normalization requirements of this PCR.

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | reference product | Mass | kg | Normalize to saleable fruit mass at outlet; exclude packaging. |
| `measure_fertilizer_n_basis` | fertilizer inputs | Product and nutrient mass | kg product; kg N/P2O5/K2O | Record actual product and supplier-declared nutrient basis; do not infer. |
| `measure_irrigation_water` | irrigation input | Volume or mass | m3 or kg | Use meter/delivery records; convert only with documented density. |
| `measure_perennial_allocation` | perennial establishment | Area, years, yield | ha, year, kg | Allocate establishment over documented productive years and output. |

## 5. System Boundary
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Managed plot and declared establishment status at period start |
| starting_condition_role | Foreground agricultural production starting condition |
| product_classification_scope | Cultivated CPC 01355 Vaccinium fruit; classification is mapping context |
| recursive_input_rule | Stop same-category recursion at a declared product input and require its upstream dataset. |
| upstream_dataset_requirement | Provide upstream datasets for plants, fertilizers, amendments, energy, water, packaging and services crossing the boundary. |
| disclosure | Disclose species/cultivar, system, area, establishment, period, outlet, grade, irrigation, inputs, yield, rejects and allocation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_outlet` | all datasets | Start at managed plot and end at declared farm-gate/first conditioning outlet; disclose post-harvest steps. | `iso-14044-2006` |
| `boundary_recursive_same_category` | recursive product inputs | Stop tracing at same-category declared input and reference its upstream dataset. | `iso-14044-2006` |
| `boundary_establishment_disclosure` | perennial systems | Include establishment only through documented allocation to reporting crop period. | `iso-14044-2006` |

## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_establishment` | Plot establishment | conditional | Perennial plot | managed biological production | site-specific records |
| `p_cultivation` | Cultivation and crop protection | required | All crop-cycle operations | managed biological production | site-specific records |
| `p_harvest` | Harvest and capture | required | Manual or mechanical harvest | harvest capture | site-specific records |
| `p_conditioning` | Sorting and primary conditioning | conditional | Before outlet | grading and conditioning | site-specific records |
| `p_rejects` | Reject routing | conditional | Non-saleable fruit leaves system | reject routing | mass balance |

### Process: Cultivation and crop protection (`p_cultivation`)
#### Inputs
##### Product flows
###### Urea fertilizer (`p_cultivation_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for p_cultivation_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1 kg saleable fruit.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Ammonium sulfate fertilizer (`p_cultivation_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Triple superphosphate fertilizer (`p_cultivation_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Potassium chloride fertilizer (`p_cultivation_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Cattle manure applied as fertilizer (`p_cultivation_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `fao-gap-framework-2003`; `fao-organic-nutrients`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Composted plant residues applied to soil (`p_cultivation_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `fao-gap-framework-2003`; `fao-organic-nutrients`

- Range: Independent availability-ledger check, not a recommended application rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: contemporaneous available quantity of this identity * declared reference quantity / accepted output on the same boundary
  - Unit: kg per declared reference flow
  - Basis: opening stock plus receipts, measured on-site generation or metered supply less closing stock and transfers to other boundaries, all in this card's unit; attribution shares cannot exceed one; unavailable ledgers make this check unavailable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Irrigation water (`cultivation_irrigation_water`)
Record metered or delivery-based irrigation water by plot and season.
- Selected flow: Irrigation water (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Amount rule: meter or delivery record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg saleable fruit.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: `fao-gap-framework-2003`
#### Outputs
##### Product flows
###### Crop output (`cultivation_crop_output`)
Record harvested Vaccinium fruit before sorting from the crop-cycle mass balance.
- Selected flow: Vaccinium fruit (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: harvested mass before sorting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg saleable fruit.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-gap-framework-2003`

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

### Process: Harvest and capture (`p_harvest`)
#### Inputs
##### Product flows
###### Harvest consumables (`harvest_consumables`)
Record actual harvest aids, consumables and field packaging by operation.
- Selected flow: Harvest consumable or field packaging (UUID unresolved; intentionally blank)
- Flow property / unit: Mass or item / kg or item
- Amount rule: equipment log or invoice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg harvested fruit.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `fao-gap-framework-2003`
###### Harvest energy (`harvest_energy`)
Record electricity, fuel and other energy carriers used by harvest equipment or purchased harvest services.
- Selected flow: Harvest energy supply (UUID unresolved; intentionally blank)
- Flow property / unit: Energy or mass / kWh, MJ or kg
- Amount rule: equipment log, meter, contractor record or invoice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg harvested fruit.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Sources: `fao-gap-framework-2003`
#### Outputs
##### Product flows
###### Harvested fruit (`harvested_fruit`)
Use scale or crate records for harvested fruit before sorting.
- Selected flow: Vaccinium fruit (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: scale or crate records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg harvested fruit.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-gap-framework-2003`

### Process: Sorting and primary conditioning (`p_conditioning`)
#### Inputs
##### Product flows
###### Harvested fruit (`conditioning_input_fruit`)
Link receiving weight to the harvest lot entering conditioning.
- Selected flow: Harvested Vaccinium fruit (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: receiving weight
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg saleable fruit.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-gap-framework-2003`
##### Waste flows
#### Outputs
##### Product flows
###### Saleable fruit (`saleable_fruit`)
Use the final weighed saleable fruit at the declared outlet.
- Selected flow: Other berries, fruits of the genus Vaccinium `b9b4cf8e-fbb5-46a3-a4ba-0c9c98d46745`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: graded output at declared outlet

- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg saleable fruit.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-gap-framework-2003`


##### Waste flows

###### Sorting rejects (`conditioning_rejects`)
Record rejected fruit by destination and treatment route.
- Selected flow: Fruit rejects (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: reject weight or mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg saleable fruit.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg saleable fruit
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `fao-gap-framework-2003`
## 7. Allocation and Co-product Handling
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_saleable_reject` | saleable fruit, actual co-products and disposal rejects | Subdivide directly measured operations first. Disposal rejects and retained losses do not receive a co-product share: retain their production and treatment burdens with the producing saleable route. Only an independently intended and transferred product with evidenced function may enter justified joint-product allocation; document quantities, basis and sensitivity once. Do not divert crop burdens by a simple saleable/waste mass split. | `iso-14044-2006` |
| `allocation_perennial_establishment` | perennial establishment | Allocate over documented productive years and annual saleable output; disclose sensitivity. | `iso-14044-2006` |
| `allocation_intercrop_shared_area` | shared plots | Use measured area/time shares or documented physical/economic basis consistently. | `iso-14044-2006` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.

### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_inputs` | `p_cultivation` | inputs | invoices, logs, meters | product; nutrient; amount; water; date; area | record reconciliation; Raw aggregation and attribution: sum by plot/product | kg; kg nutrient; m3 | per operation | full crop cycle | each plot | per declared reference flow | supplier declaration; meter check |
| `cp_harvest_records` | `p_harvest` | harvest energy | logs and invoices | equipment; energy; hours; crates | log/invoice reconciliation; Raw aggregation and attribution: sum by operation | kWh; L; h; kg | per event | harvest season | each line | per declared reference flow | scale ticket; invoice |
| `cp_harvest_mass_balance` | `p_harvest,p_conditioning,p_rejects` | outputs | scale and destination records | input; saleable; reject; loss; destination | lot weighing; Raw aggregation and attribution: input = outputs + loss | kg | per lot | harvest and conditioning | each lot | per declared reference flow | calibrated scale; reconciliation |
| `cp_establishment_records` | `p_establishment` | establishment | land and planting register | area; year; plants; productive years | register and supplier records; Raw aggregation and attribution: allocate by output | ha; year; kg/item | annual | establishment onward | each plot | per declared reference flow | invoice; register |
| `cp_conditioning_records` | `p_conditioning` | utilities | meter and production log | utility; lot; time | meter or documented allocation; Raw aggregation and attribution: allocate by output | kWh; m3; h | lot/month | conditioning period | site | per declared reference flow | meter; log |
| `cp_managed_soil_nitrogen` | `p_cultivation` | direct and indirect soil emissions | nitrogen activity and method ledger | N sources and amounts; amendments; residue N and fate; area; dates; climate; soil; volatilisation; leaching; precursor; factors and units; receiving medium; upstream owner; stocks; accepted output | Reconcile compatible N activity by pathway, retain source worksheets and method applicability, then attribute and normalize once. | kg N; kg compound | application and period close | complete represented plot/season | actual plot | per declared reference flow | activity records; original factor source; precursor balance; uncertainty |
### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_saleable_mass` | all flow rows | Period quantity / saleable fruit mass at outlet. | quantity; saleable mass | per kg saleable fruit | `iso-14040-2006` |
| `calc_establishment_allocation` | `p_establishment` | Establishment burden × reporting share / annual saleable output. | burden; years; output | allocated burden | `iso-14044-2006` |
| `calc_mass_balance` | harvest and conditioning | Reconcile input, saleable output, rejects and loss within scale uncertainty. | lot records | reconciled totals | `fao-gap-framework-2003` |
| `calc_nutrient_basis` | fertilizer and amendments | Product mass × supplier-declared nutrient fraction; retain both values. | product; declaration | product and nutrient mass | `fao-gap-framework-2003` |
| `calc_managed_soil_nitrogen` | `p_cultivation` | Select compatible direct and indirect methods for fertilizer, organic amendments, returned residues and applicable managed-soil sources. Direct N2O-N = sum of eligible N activity times applicable EF1-family factors plus separately applicable sources; indirect N2O-N = volatilised N precursor times EF4 plus leached/runoff N precursor times EF5, where applicable. Convert N2O-N by44/28 once. Quantify NH3 and nitrate with separately justified species-specific loss fractions, not by assigning all NH3+NOx to NH3 or all leached N to nitrate. Convert NH3-N by17/14 and nitrate-N by62/14 once. Keep components, source pools, media, method uncertainty and burden owner distinct; already covered emissions are not repeated. Missing applicable data prevent completeness; do not invent an emission default. | `cp_managed_soil_nitrogen` | molecular emission amounts per declared reference flow | `ipcc-managed-soils-2019`; `mass-balance-identity` |
### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all rows | Declare species/cultivar, state, grade, outlet and route; unresolved identities block review. | lot and supplier records |
| `dq_completeness` | all processes | Cover cycle and reconcile inputs, saleable output, rejects and losses. | protocol records |
| `dq_temporal` | all rows | State reporting period, crop cycle and perennial allocation. | farm register |
| `dq_measurement` | quantitative rows | Prefer calibrated scales/meters and retain assumptions and uncertainty. | calibration records |
| `dq_disclosure` | published datasets | Disclose missing data, estimates, irrigation, amendments, rejects and allocation. | quality statement |

## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | reference flow | Reference amount is 1 kg saleable fruit and matches outlet and mass basis. | `iso-14040-2006` |
| `validation_mass_balance` | harvest and conditioning | Inputs, saleable output, rejects and losses reconcile; unexplained differences are findings. | `fao-gap-framework-2003` |
| `validation_nutrient_declaration` | fertilizer and amendments | Product and nutrient basis trace to supplier or primary records. | `fao-gap-framework-2003` |
| `validation_boundary_disclosure` | all datasets | Check starting condition, outlet, inclusions, recursion, establishment and exclusions. | `iso-14044-2006` |
| `validation_quality_disclosure` | all datasets | Report temporal, geographic, completeness, measurement, estimate and allocation limitations. | `iso-14040-2006` |
| `validation_managed_soil_coverage` | nitrogen inputs, residues and emissions | Require each applicable nitrogen pathway to be quantified under the stated method or covered by a named compatible upstream dataset once. Supported inapplicability is recorded; missing activity, factors, species split, medium or attribution remains a blocking completeness gap. Reject automatic zero or double counting of direct/indirect components. | `ipcc-managed-soils-2019` |

## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset when upstream links are complete |
| downstream_use | Foreground agricultural process and lifecycle-model construction |
| allowed_use | Modelling within declared species/system, outlet, period and allocation scope |
| excluded_use | Processed, frozen, wild, nursery or materially different systems |
| required_metadata | species/cultivar; geography; system; period; outlet; grade; irrigation; inputs; yield; rejects; allocation; upstream links |
| required_quality_disclosure | completeness; representativeness; measurement; estimates; uncertainty; allocation; missing UUID identities |
| update_trigger | Material change in system, irrigation, inputs, outlet, grade, allocation or primary data |

Evidence applicability: cited general farm-record and postharvest frameworks do not supply crop-specific yields, lifetimes, gate cutoffs or LCA allocation defaults. Those are this PCR methodology decisions; qualify them by the actual species, route and period and obtain compatible agronomic evidence before asserting completeness. Provisional author ranges are screening aids, not empirical acceptance limits or substituted measurements.

## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14040-2006` | standard | ISO 14040:2006 | functional-unit and quality framing |
| `iso-14044-2006` | standard | ISO 14044:2006 | boundary, allocation, recursion and validation |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | Generic monitoring and farm-record context only; crop-specific routes, lifetimes, quantitative ranges and LCA allocation are PCR choices requiring separate applicable evidence. |
| `ipcc-managed-soils-2019` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, sections 11.2.1 and 11.2.2 and Tables 11.1/11.3, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Nitrogen activity and direct/indirect N2O methods; no berry-specific yield or universal per-product emission default |
| `mass-balance-identity` | method_factor | Physical conservation of mass and nitrogen, as defined by the stated PCR calculation and precursor ledgers | Conservation constraints only, not measured loss fractions or empirical factors |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
