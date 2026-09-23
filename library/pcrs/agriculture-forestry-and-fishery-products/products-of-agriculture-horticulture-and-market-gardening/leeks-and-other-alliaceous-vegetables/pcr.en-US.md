---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.leeks-and-other-alliaceous-vegetables
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Leeks and other alliaceous vegetables

## 1. Scope and Applicability

This PCR covers fresh, marketable leeks and other edible alliaceous vegetables produced in open-field or protected cultivation and delivered at a declared farm or packhouse gate. The foreground starts with accepted planting material and the production plot, includes cultivation, harvest, and any declared conditioning or delivery operation, and ends at the declared product gate. It is intended for a foreground data package that represents one crop cycle and a defined species or product mix.

The PCR applies to leeks, garlic, shallots, scallions, spring onions, chives, Welsh onions, and other fresh edible *Allium* vegetables that are not classified as onions under the separate onion category. It may be used for a mixed allium lot only when the species or cultivar mix, harvest state, and mass basis are disclosed. It does not prescribe a single cultivation technology, irrigation source, nutrient product, crop-protection programme, or packing format.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.leeks-and-other-alliaceous-vegetables |
| classification_refs | CPC 3.0 01254 — Leeks and other alliaceous vegetables |
| covered_products | Fresh leeks and other edible *Allium* vegetables, whole or trimmed, sold in a fresh market state |
| excluded_products | Onions in CPC 01253; seeds and planting material sold as such; dried, frozen, canned, pickled, juiced, or otherwise processed allium products; prepared meals and downstream retail use |
| representative_product | Fresh marketable leek at the declared farm or packhouse gate |
| production_route | Seed, set, bulb, or transplant establishment followed by field or protected cultivation, harvest, optional conditioning, and delivery to the declared gate |
| market_state | Fresh, edible, marketable product at the declared moisture, trimming, grading, and packing state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh, marketable leeks or other edible alliaceous vegetables at the declared farm or packhouse gate |
| How much | 1 kg as sold at the declared moisture and preparation state |
| How well | Declared species or cultivar, fresh market state, trim and grade, moisture basis, and product-gate condition |
| How long or cycle | One crop cycle from planting-material receipt through harvest and any included conditioning or delivery operation |
| reference_flow_link | Reference amount and product flow below; final product identity is resolved during foreground data generation |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fresh leek or other alliaceous vegetable `<ce835a83-4945-40f9-b6c7-edfe84933a16>` |
| Reference flow property | Mass `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| Reference unit group | Units of mass `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| Reference unit | kg |
| Required qualifiers | selected species or cultivar; fresh market state; trim and grade; moisture basis; declared farm or packhouse gate; product mix where applicable |

Binding: `fixed`

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass  | kg | Report the reference product as as-sold mass at the declared moisture and preparation state. Do not replace the reference mass with dry matter, edible portion, or item count. |
| `nutrient_product_and_basis` | fertilizer and soil-amendment inputs | Mass  | kg product; kg N, P, K, or organic nutrient basis | Record the applied product mass and its declared nutrient basis separately. A nutrient mass is a calculation qualifier and does not replace the product input amount. |
| `moisture_conversion` | harvest, rejects, and conditioned product | Mass  | kg | When records use different moisture bases, convert all compared masses using measured moisture before applying mass balance and normalizing to the reference flow. |

## 5. System Boundary

The foreground system begins with accepted planting material and the production plot and ends at the declared farm, packhouse, or downstream delivery gate. It includes directly controlled field operations and the nutrient, water, energy, crop-protection, land, and transport services that cross the boundary. Upstream production of purchased inputs is linked as separate datasets where required by the study.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | accepted planting material and prepared production plot |
| starting_condition_role | foreground cultivation start with disclosed source material, field, and crop cycle |
| product_classification_scope | fresh leeks and other edible alliaceous vegetables within CPC 01254 |
| recursive_input_rule | same-category planting material is recorded as an explicit product input with source and treatment disclosure; its upstream production is not recursively included |
| upstream_dataset_requirement | declare planting-material source, species or cultivar, material type, treatment, and any linked upstream dataset |
| disclosure | declare field location, crop cycle, species or cultivar, cultivation route, irrigation and nutrient basis, crop-protection route, declared gate, and market-quality basis |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_gate` | foreground system boundary | Include cultivation, harvest, and directly controlled handling up to the declared farm or packhouse gate. Include conditioning or delivery processes only when the declared gate and responsible operator require them. | `iso-14044-2006`; `unece-ffv-21-leeks-2023` |
| `boundary_purchased_inputs` | purchased planting material and inputs | Represent planting material, fertilizer or soil amendments, crop-protection products, water, energy, packaging, and transport as foreground inputs when they cross the declared boundary; link their upstream production separately. | `iso-14044-2006` |
| `boundary_nutrient_emissions` | nutrient-related elementary outputs | Include direct and indirect nutrient-related emissions when they are calculated from recorded nutrient applications and declared receiving media. Preserve reported substance, medium, factor basis, and uncertainty. | `ipcc-2019-refinement-vol4-ch11` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| field_preparation_and_establishment | Field preparation and establishment | required |  | foreground cultivation | per 1 kg fresh marketable allium product |
| crop_growth_and_protection | Crop growth and protection | required |  | foreground cultivation | per 1 kg fresh marketable allium product |
| harvest_and_field_handling | Harvest and field handling | required |  | foreground harvest | per 1 kg fresh marketable allium product |
| post_harvest_conditioning | Post-harvest conditioning | conditional | Include when washing, trimming, sorting, cooling, or packaging is controlled or required before the declared gate. | foreground conditioning | per 1 kg conditioned allium product |
| delivery_to_declared_gate | Delivery to declared gate | conditional | Include when the declared gate is downstream of the farm or packhouse and the route is controlled or reported. | foreground delivery | per 1 kg product delivered to the declared gate |

### Process: Field preparation and establishment (`field_preparation_and_establishment`)

#### Inputs

##### Product flows

###### Planting material used for establishment (`planting_material`)

Seed, sets, bulbs, cloves, or transplants used to establish the allium crop are recorded as product inputs. The actual material type, species or cultivar, lot, treatment, and mass are required for later identity resolution.

- Selected flow: Allium planting material (seed, set, bulb, clove, or transplant; evidence gap)
- Flow property / unit: Mass / kg as supplied
- Amount rule: measured material issued to the crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_planting_material_records`
- Sources:
- Range: Provisional planting-material screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.25
  - Unit: kg material/kg product
  - Basis: planting material mass per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery fuel for preparation and planting (`establishment_fuel`)

Fuel used by tractors and other mobile equipment for soil preparation, bed formation, planting, and establishment crosses the foreground boundary as a mobile-machinery energy input.

- Selected flow: Mobile machinery fuel supplying field preparation and planting
- Flow property / unit: Energy or fuel mass / MJ or kg fuel
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: recorded fuel or equipment energy use allocated to the crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_fuel_records`
- Sources:
- Range: Provisional establishment-fuel screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: MJ/kg product
  - Basis: fuel energy per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Occupied cultivation land (`cultivation_land_occupation`)

The field area and occupation duration required for the crop cycle are recorded as an elementary resource input. The card remains function-level until the location, land-use classification, and property are confirmed.

- Selected flow: Land occupation for allium cultivation
- Flow property / unit: Area-time / m2*year
- Amount rule: measured cultivated area multiplied by the declared occupation duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_area_records`
- Sources: `mass-balance-identity`
- Range: Provisional land-occupation screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 30
  - Unit: m2*year/kg product
  - Basis: occupied cultivation area-time per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Crop growth and protection (`crop_growth_and_protection`)

#### Inputs

##### Product flows

###### Irrigation water supplied to the crop (`irrigation_water`)

Irrigation water is recorded when water is delivered to the crop or irrigation system as a product input. Rainfall is reported separately as a site condition when it is needed to explain irrigation demand.

- Selected flow: Irrigation water supplied to the allium crop
- Flow property / unit: Volume or mass / m3 or kg water
- Binding: parameterized
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated irrigation water delivered to the crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources:
- Range: Provisional irrigation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,200
  - Unit: L/kg product
  - Basis: irrigation water delivered per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`crop_growth_and_protection_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_product_records`
- Sources:
- Range: Provisional nitrogen-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.08
  - Unit: kg N/kg product
  - Basis: applied nitrogen per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional phosphorus-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.04
  - Unit: kg P/kg product
  - Basis: applied phosphorus per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional potassium-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.12
  - Unit: kg K/kg product
  - Basis: applied potassium per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Provisional organic-nutrient screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg organic nutrient basis/kg product
  - Basis: declared organic nutrient basis per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product applied to the crop (`crop_protection_product`)

Herbicide, fungicide, insecticide, biocontrol, or other crop-protection product is recorded when it is applied within the foreground crop cycle. The actual formulation and active ingredient are retained for later identity and emission modelling.

- Selected flow: Crop-protection product applied to the allium crop
- Flow property / unit: Mass / kg product as applied
- Amount rule: measured product mass from application records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources:
- Range: Provisional crop-protection screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.03
  - Unit: kg product/kg product
  - Basis: formulated crop-protection product per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for irrigation and field utilities (`irrigation_electricity`)

Electricity used for pumping irrigation water or operating field utilities is recorded when it crosses the foreground boundary as purchased or on-site generated energy.

- Selected flow: Electricity supplying irrigation and field utilities
- Flow property / unit: Energy / kWh
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: meter or equipment-level electricity use allocated to the crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_energy_records`
- Sources:
- Range: Provisional irrigation-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kWh/kg product
  - Basis: irrigation and field utility electricity per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Ammonia released to air from nutrient application (`ammonia_to_air`)

Ammonia released to air is recorded when estimated from applied nitrogen and the declared volatilisation method. The receiving medium and reported substance must be retained for final identity resolution.

- Selected flow: Ammonia to ambient air from nutrient application
- Flow property / unit: Mass / kg reported substance
- Amount rule: calculated from applied nitrogen, volatilisation factor, and reported receiving medium
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_emission_calculations`
- Sources: `ipcc-2019-refinement-vol4-ch11`
- Range: Provisional ammonia-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg reported substance/kg product
  - Basis: calculated ammonia release per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide released to air from managed soil (`nitrous_oxide_to_air`)

Direct and indirect nitrous oxide emissions from managed soil are calculated from the applied nitrogen pathways and the selected method tier. The factor basis, soil or climate stratification, and receiving medium are disclosed.

- Selected flow: Nitrous oxide to ambient air from managed soil
- Flow property / unit: Mass / kg reported substance
- Amount rule: calculated from applied nitrogen, direct or indirect pathway factor, and declared method tier
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_emission_calculations`
- Sources: `ipcc-2019-refinement-vol4-ch11`
- Range: Provisional nitrous-oxide screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg reported substance/kg product
  - Basis: calculated nitrous oxide release per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate released to water (`nitrate_to_water`)

Nitrate loss to water is recorded when runoff, drainage, or leaching is included in the declared model and can be calculated from applied nitrogen and the site pathway.

- Selected flow: Nitrate to receiving water from managed soil
- Flow property / unit: Mass / kg reported substance
- Amount rule: calculated from applied nitrogen, site loss pathway, and reported receiving medium
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_emission_calculations`
- Sources: `ipcc-2019-refinement-vol4-ch11`
- Range: Provisional nitrate-to-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg reported substance/kg product
  - Basis: calculated nitrate loss per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate released to soil (`nitrate_to_soil`)

Nitrate released to soil is recorded when the selected elementary-flow identity represents soil receiving media and the site model reports the retained or lost nitrogen pathway.

- Selected flow: Nitrate to soil from managed allium cultivation
- Flow property / unit: Mass / kg reported substance
- Amount rule: calculated from applied nitrogen and the declared soil receiving pathway
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_emission_calculations`
- Sources: `ipcc-2019-refinement-vol4-ch11`
- Range: Provisional nitrate-to-soil screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg reported substance/kg product
  - Basis: calculated nitrate release per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate released to water (`phosphate_to_water`)

Phosphate loss to water is recorded when a site nutrient-loss model or measured runoff and drainage record supports the reported receiving medium.

- Selected flow: Phosphate to receiving water from managed soil
- Flow property / unit: Mass / kg reported substance
- Amount rule: calculated from applied phosphorus, site loss pathway, and reported receiving medium
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_emission_calculations`
- Sources: `ipcc-2019-refinement-vol4-ch11`
- Range: Provisional phosphate-to-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.03
  - Unit: kg reported substance/kg product
  - Basis: calculated phosphate loss per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate released to soil (`phosphate_to_soil`)

Phosphate release to soil is recorded when the declared elementary-flow identity and site model distinguish a soil receiving pathway from the nutrient input itself.

- Selected flow: Phosphate to soil from managed allium cultivation
- Flow property / unit: Mass / kg reported substance
- Amount rule: calculated from applied phosphorus and the declared soil receiving pathway
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_emission_calculations`
- Sources: `ipcc-2019-refinement-vol4-ch11`
- Range: Provisional phosphate-to-soil screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg reported substance/kg product
  - Basis: calculated phosphate release per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and field handling (`harvest_and_field_handling`)

#### Inputs

##### Product flows

###### Field machinery fuel for harvest and primary handling (`harvest_fuel`)

Fuel used for lifting, cutting, topping, digging, field collection, and primary handling is recorded as a mobile-machinery energy input allocated to the harvested crop.

- Selected flow: Mobile machinery fuel supplying harvest and field handling
- Flow property / unit: Energy or fuel mass / MJ or kg fuel
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: recorded fuel or equipment energy use allocated to the crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_fuel_records`
- Sources:
- Range: Provisional harvest-fuel screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: MJ/kg product
  - Basis: harvest and field-handling fuel energy per reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Nonmarketable harvest rejects (`harvest_rejects`)

Damaged, undersized, overmature, soil-contaminated, or otherwise nonmarketable allium material removed during harvest or field sorting is recorded as a waste output when it leaves the product route.

- Selected flow: Nonmarketable fresh allium harvest rejects
- Flow property / unit: Mass / kg wet material
- Amount rule: weighed rejects by harvest lot at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested allium crop or per reference product mass, with the chosen basis disclosed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_reject_records`
- Sources:
- Range: Provisional harvest-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg reject/kg harvested crop
  - Basis: nonmarketable harvest rejects as a mass fraction of harvested crop
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Removed field residue from harvest (`removed_field_residue`)

Allium tops, roots, soil-attached material, or other crop residue removed from the field or harvest line is recorded as a waste output only when it physically crosses the declared foreground boundary. Residues left on the field are disclosed as a management condition rather than forced into this row.

- Selected flow: Removed allium crop residue from harvest
- Flow property / unit: Mass / kg wet material
- Amount rule: measured removed residue mass by harvest lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg harvested allium crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_removed_residue_records`
- Sources:
- Range: Provisional removed-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.6
  - Unit: kg residue/kg harvested crop
  - Basis: removed residue mass fraction of harvested crop
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh marketable allium product at the field gate (`marketable_field_product`)

Marketable fresh product leaving harvest and field handling is weighed at the declared moisture, trimming, and quality basis. The species or cultivar and lot mix remain explicit for final product-flow identity resolution.

- Selected flow: Fresh marketable leek or other alliaceous vegetable at field gate
- Flow property / unit: Mass / kg as sold
- Amount rule: weighed marketable product after field sorting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg fresh marketable allium product at the declared field gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_marketable_harvest_records`
- Sources:
- Range: Provisional marketable-yield screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg marketable product/kg harvested crop
  - Basis: marketable product fraction after harvest sorting
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Post-harvest conditioning (`post_harvest_conditioning`)

#### Inputs

##### Product flows

###### Water for washing or de-soiling (`conditioning_water`)

Water used for washing, de-soiling, or other controlled conditioning is recorded when the declared gate includes the operation. Water quality, reuse, and discharge route are disclosed in the data package.

- Selected flow: Process water for washing or de-soiling fresh allium product
- Flow property / unit: Volume or mass / m3 or kg water
- Binding: parameterized
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered water use assigned to the conditioning lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned allium product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`
- Sources:
- Range: Provisional conditioning-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L/kg conditioned product
  - Basis: washing and de-soiling water per conditioned product mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for conditioning and cooling (`conditioning_electricity`)

Electricity used for washing equipment, sorting, forced-air cooling, or short-term controlled holding is recorded when the operation is inside the declared boundary.

- Selected flow: Electricity supplying allium conditioning and cooling
- Flow property / unit: Energy / kWh
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: metered or equipment-level electricity use assigned to the conditioning lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned allium product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources:
- Range: Provisional conditioning-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kWh/kg conditioned product
  - Basis: conditioning and cooling electricity per conditioned product mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging material used for the declared gate (`conditioning_packaging`)

Packaging material, reusable crates, liners, or other containment is recorded when packaging is controlled or required before the declared gate. The actual form, material, reuse count, and supplier are required before selecting a concrete product flow.

- Selected flow: Actual packaging or reusable containment for fresh allium product
- Flow property / unit: Mass / kg packaging material
- Amount rule: measured packaging issued to the conditioning lot, with reusable packaging amortized over documented uses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned allium product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_packaging_records`
- Sources:
- Range: Provisional packaging-material screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg packaging/kg conditioned product
  - Basis: packaging material mass per conditioned product mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned fresh allium product (`conditioned_product`)

Fresh product leaving washing, trimming, sorting, cooling, or packing is weighed at the declared product state. The product output remains unmapped until species, preparation, grade, moisture, and gate are fixed.

- Selected flow: Conditioned fresh leek or other alliaceous vegetable at packhouse gate
- Flow property / unit: Mass / kg as sold
- Amount rule: weighed conditioned product dispatched from the operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned allium product at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioned_output_records`
- Sources:
- Range: Provisional conditioned-output screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.6
  - Upper: 1
  - Unit: kg conditioned product/kg product entering conditioning
  - Basis: conditioned product yield after washing, trimming, sorting, cooling, and packing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Trimming and sorting rejects (`conditioning_rejects`)

Trim, damaged material, soil, and off-grade product removed during conditioning are recorded as waste outputs when they leave the product route. The destination and treatment are recorded separately if they cross a further boundary.

- Selected flow: Trimming and sorting rejects from fresh allium conditioning
- Flow property / unit: Mass / kg wet material
- Amount rule: weighed rejects generated by the conditioning lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg product entering conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_reject_records`
- Sources:
- Range: Provisional conditioning-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg reject/kg product entering conditioning
  - Basis: conditioning reject fraction of incoming product mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Delivery to declared gate (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Road freight service to the declared gate (`delivery_transport`)

Road freight used to move fresh allium product from the farm or packhouse to a declared downstream gate is recorded only when the route and responsibility are inside scope. Distance, payload, vehicle or service type, temperature control, and return-leg treatment are disclosed.

- Selected flow: Road freight transport service for fresh allium product
- Flow property / unit: Transport service / t*km
- Binding: parameterized
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: route-specific tonne-kilometres from shipment records and declared payload
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg product delivered to the declared gate
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery_transport_records`
- Sources:
- Range: Provisional delivery-distance screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: t*km/1,000 kg product
  - Basis: road freight service per shipment mass to the declared gate
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh allium product delivered to the declared gate (`delivered_product`)

Product dispatched at the declared downstream gate is weighed and reconciled with the shipment record. This output is a product-flow identity requiring the declared species or mix, product state, and gate before resolution.

- Selected flow: Fresh leek or other alliaceous vegetable delivered to the declared gate
- Flow property / unit: Mass / kg as sold
- Amount rule: dispatched product mass after route-specific losses, if any
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg product delivered to the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery_output_records`
- Sources:
- Range: Provisional delivered-output screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.9
  - Upper: 1
  - Unit: kg delivered product/kg dispatched product
  - Basis: delivered product after documented transport losses
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_lots` | separate species, cultivars, or product routes | Subdivide field, harvest, conditioning, and delivery records by species, cultivar, product state, or destination whenever separate records are available before applying allocation. | `iso-14044-2006` |
| `allocation_shared_operations` | shared operations for multiple allium products | If a field or conditioning operation serves multiple products and cannot be subdivided, allocate shared inputs by harvested or dispatched mass at the declared moisture basis and disclose the allocation key. | `iso-14044-2006` |
| `allocation_residue_status` | rejects and residues | Treat nonmarketable rejects and removed residues as waste outputs unless a documented sale or useful co-product route exists. If a useful co-product is reported, disclose its identity, destination, quantity, and allocation method. | `iso-14044-2006`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | field_preparation_and_establishment | Planting material | seed, set, bulb, clove, or transplant lot record | species or cultivar; material type; lot id; treatment; mass; moisture basis; supplier | supplier record plus calibrated weighing at field issue | kg as supplied | per lot and crop cycle | crop cycle | production field | sum issued lots and normalize to declared product output | lot traceability, supplier documentation, and scale calibration |
| `cp_establishment_fuel_records` | field_preparation_and_establishment | Field machinery fuel for preparation and planting | machinery fuel log or equipment record | equipment; operation; fuel type; quantity; field; date; allocation basis | fuel log, meter, or verified equipment estimate | L, kg, or MJ | per operation | crop cycle | production field | allocate operations to the crop cycle and normalize to product output | fuel record reconciliation and equipment calibration |
| `cp_land_area_records` | field_preparation_and_establishment | Occupied cultivation land | field register and crop plan | field id; area; land-use class; occupation dates; crop cycle; product allocation | field map, farm register, and crop-cycle record | m2 and year | per field and crop cycle | crop cycle | production field | multiply area by occupation duration and allocate by product output | field boundary record and crop plan |
| `cp_irrigation_records` | crop_growth_and_protection | Irrigation water supplied to the crop | irrigation meter or water-balance record | source; meter start and end; delivery date; irrigation event; rainfall or balance inputs; field | calibrated meter or documented FAO-56 water-balance calculation | m3 or kg water | per irrigation event | crop cycle | production field | sum delivered water and normalize to product output | meter calibration, event log, and weather or balance inputs |
| `cp_nutrient_product_records` | crop_growth_and_protection | Fertilizer or soil-amendment nutrient inputs | application log and product label or analysis | product name; supplier; lot; product mass; N/P/K or organic analysis; application date; field; method | weigh product and retain label or laboratory analysis | kg product and kg nutrient | per application | crop cycle | production field | sum product and nutrient masses by nutrient basis and normalize to product output | application log, label or analysis, and scale record |
| `cp_crop_protection_records` | crop_growth_and_protection | Crop-protection product | spray or treatment log | product; formulation; active ingredient; lot; dose; area; date; field; dilution; method | application log and calibrated equipment record | kg product or active ingredient | per application | crop cycle | production field | sum applied product and retain active-ingredient basis | product label, application log, and equipment calibration |
| `cp_irrigation_energy_records` | crop_growth_and_protection | Electricity for irrigation and field utilities | electricity meter or equipment log | meter or equipment; kWh; operation; date; field; allocation basis | meter record or verified equipment estimate | kWh | per operation or billing period | crop cycle | production field | allocate pumping and field utility electricity to the crop cycle | meter record and allocation reconciliation |
| `cp_nutrient_emission_calculations` | crop_growth_and_protection | Nutrient-related elementary outputs | nutrient emission worksheet linked to application records | nutrient input; factor or model tier; pathway; receiving medium; reported substance; climate or soil stratum; uncertainty | documented calculation using nutrient records and selected method | kg reported substance | per application or crop cycle | crop cycle | production field and receiving medium | calculate each pathway, retain factors, and normalize to product output | factor source, worksheet review, and input reconciliation |
| `cp_harvest_fuel_records` | harvest_and_field_handling | Field machinery fuel for harvest and primary handling | machinery fuel log or equipment record | equipment; operation; fuel type; quantity; field; date; allocation basis | fuel log, meter, or verified equipment estimate | L, kg, or MJ | per harvest operation | crop cycle | production field | allocate harvest operations to harvested product output | fuel record reconciliation and equipment calibration |
| `cp_harvest_reject_records` | harvest_and_field_handling | Nonmarketable harvest rejects | harvest sorting or reject record | harvest lot; reject reason; mass; moisture basis; destination; date | weigh rejects at harvest or field sorting | kg wet material | per harvest lot | crop cycle | production field | sum rejects and normalize to harvested or marketable output using declared basis | calibrated scale and lot reconciliation |
| `cp_removed_residue_records` | harvest_and_field_handling | Removed field residue from harvest | residue removal or transfer record | harvest lot; residue type; mass; moisture basis; removal route; date | weigh removed residue at the boundary | kg wet material | per removal event | crop cycle | production field | sum only residue that physically crosses the boundary | scale record and destination receipt |
| `cp_marketable_harvest_records` | harvest_and_field_handling | Fresh marketable allium product at the field gate | harvest and dispatch record | species or cultivar; lot; mass; moisture basis; trim; grade; date; gate | calibrated weighing after field sorting | kg as sold | per harvest lot | crop cycle | production field | sum marketable lots at the declared gate and moisture basis | scale calibration, grade record, and lot traceability |
| `cp_conditioning_water_records` | post_harvest_conditioning | Water for washing or de-soiling | conditioning water meter and lot record | meter; lot; water source; use; reuse; quantity; date; discharge route | calibrated meter and lot allocation | m3 or kg water | per conditioning lot | product shelf or dispatch period | packhouse or conditioning facility | sum allocated water and normalize to conditioned product output | meter calibration and lot reconciliation |
| `cp_conditioning_energy_records` | post_harvest_conditioning | Electricity for conditioning and cooling | energy meter or equipment record | equipment; lot; kWh; operation; temperature or holding time; date | meter record and equipment allocation | kWh | per conditioning lot or billing period | product shelf or dispatch period | packhouse or conditioning facility | allocate conditioning energy to conditioned product output | meter record, equipment log, and allocation reconciliation |
| `cp_conditioning_packaging_records` | post_harvest_conditioning | Packaging material used for the declared gate | packaging issue and reuse record | package form; material; supplier; mass; lot; reuse count; loss; date | weigh packaging and document reuse or return | kg packaging material | per lot and dispatch period | product shelf or dispatch period | packhouse or conditioning facility | amortize reusable packaging over documented uses and normalize to output | packaging specification, scale record, and reuse log |
| `cp_conditioned_output_records` | post_harvest_conditioning | Conditioned fresh allium product | conditioning dispatch record | species or cultivar; lot; input mass; output mass; moisture; trim; grade; package; date | calibrated weighing at conditioning exit | kg as sold | per conditioning lot | product shelf or dispatch period | packhouse or conditioning facility | sum conditioned output and reconcile to input, rejects, and packaging losses | scale calibration, lot traceability, and dispatch record |
| `cp_conditioning_reject_records` | post_harvest_conditioning | Trimming and sorting rejects | conditioning reject record | lot; reject type; mass; moisture; destination; date | weigh rejects at the conditioning boundary | kg wet material | per conditioning lot | product shelf or dispatch period | packhouse or conditioning facility | sum rejects and normalize to incoming product or conditioned output | calibrated scale and destination record |
| `cp_delivery_transport_records` | delivery_to_declared_gate | Road freight service to the declared gate | shipment and carrier record | origin; destination; date; product mass; distance; vehicle or service; temperature control; payload; return leg | shipment record with route distance and payload calculation | t*km | per shipment | dispatch period | declared route | calculate tonne-kilometres and normalize to delivered product | carrier record, route evidence, and payload reconciliation |
| `cp_delivery_output_records` | delivery_to_declared_gate | Fresh allium product delivered to the declared gate | receiving or delivery record | species or mix; shipment id; dispatched mass; received mass; moisture; losses; date; gate | calibrated weighing at dispatch and receipt | kg as sold | per shipment | dispatch period | declared delivery route and gate | reconcile dispatched, received, and documented loss masses | dispatch and receiving records, scale calibration, and loss log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass_to_reference_flow` | all product and waste mass rows | Convert each recorded mass to the declared moisture basis, then divide by the mass of the relevant process output and scale to 1 kg reference product. | harvest, conditioning, and delivery records | kg per reference product | `mass-balance-identity` |
| `calculate_nutrient_basis` | fertilizer and soil-amendment inputs | nutrient mass = applied product mass × declared nutrient fraction; retain product mass and each nutrient basis as separate reported values. | `cp_nutrient_product_records` | kg N, P, K, or organic nutrient basis per reference product | `mass-balance-identity` |
| `calculate_irrigation_requirement` | irrigation water supplied to the crop | Determine crop water requirement from site weather, soil, crop stage, effective rainfall, and irrigation efficiency; report metered delivery where available and document the balance when calculated. | `cp_irrigation_records` | m3 water per reference product | `fao-56-crop-evapotranspiration` |
| `calculate_nutrient_emissions` | nutrient-related elementary outputs | Apply the selected IPCC or site method factor to the recorded nutrient input and pathway, retain the receiving medium and reported substance, and document direct versus indirect pathways. | `cp_nutrient_product_records`; `cp_nutrient_emission_calculations` | kg reported substance per reference product | `ipcc-2019-refinement-vol4-ch11` |
| `allocate_shared_operations` | shared field, conditioning, or delivery operations | Allocate shared input quantities by measured product mass at the declared moisture basis after subdivision has been exhausted. | field, conditioning, and delivery operation records | allocated input per reference product | `iso-14044-2006` |
| `amortize_reusable_packaging` | reusable crates and containment | reusable packaging amount = issued packaging mass × attributable use share; use a documented number of cycles and loss or replacement record. | `cp_conditioning_packaging_records` | kg packaging per conditioned product | `iso-14044-2006` |
| `reconcile_gate_mass_balance` | field, conditioning, and delivery outputs | At each declared gate, reconcile incoming mass with marketable output, rejects, removed residues, and documented moisture or transport losses. | harvest, conditioning, and delivery records | gate mass-balance check | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference flow and product outputs | Species or cultivar, product mix, market state, trimming, grade, moisture basis, and declared gate must be explicit. | lot and product specification records |
| `dq_input_traceability` | planting material, nutrients, crop protection, packaging, water, and energy | Inputs must be traceable to a field, lot, application or use event, date, and supplier or source where applicable. | purchase, application, meter, and lot records |
| `dq_mass_reconciliation` | harvest, conditioning, and delivery | Product, rejects, residues, and documented losses must reconcile after moisture conversion; unexplained differences remain a data-quality finding. | calibrated scales and reconciliation worksheet |
| `dq_nutrient_method` | nutrient inputs and emissions | Nutrient analysis, factor source, pathway, receiving medium, and method tier must be disclosed; estimated factors must be separated from measured emissions. | nutrient labels or laboratory analysis and reviewed calculation worksheet |
| `dq_water_energy` | irrigation and conditioning utilities | Water and energy records must identify meter or calculation basis, temporal coverage, allocation basis, and calibration or reconciliation evidence. | meter logs, utility bills, and calculation records |
| `dq_conditional_process_scope` | post-harvest conditioning and delivery | Conditional processes may be included only when the declared gate and operator responsibility are documented. | gate statement, contract, dispatch, or carrier records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_qualifiers` | reference flow | Reject a data package that omits species or cultivar, fresh market state, trim or grade, moisture basis, or declared gate. | `unece-ffv-21-leeks-2023` |
| `validate_mass_balance` | process gates | Check that input, marketable output, rejects, removed residues, and documented losses reconcile after moisture conversion at each included gate. | `mass-balance-identity` |
| `validate_nutrient_basis_and_pathways` | nutrient inputs and elementary outputs | Check that fertilizer or amendment product mass is separate from N/P/K or organic nutrient basis and that every calculated emission states its pathway, factor basis, receiving medium, and reported substance. | `ipcc-2019-refinement-vol4-ch11` |
| `validate_conditional_processes` | post-harvest conditioning and delivery | Check that every conditional process is supported by a declared gate and operator responsibility and that omitted conditional processes are disclosed when they are known to occur outside scope. | `iso-14044-2006` |
| `validate_allocation_disclosure` | shared operations and mixed allium lots | Check that separate records were subdivided where available, otherwise the mass-based allocation key and moisture basis are stated. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Fresh leek or other alliaceous vegetable production with matching species or product mix, cultivation route, geography, crop cycle, product state, declared gate, and data-quality disclosure |
| excluded_use | Onions in CPC 01253; planting-material datasets; processed allium foods; datasets that omit product state or gate; direct comparison of lots with incompatible moisture or grade bases |
| required_metadata | reference flow; species or cultivar; product mix; geography; crop cycle; planting-material type; irrigation and nutrient basis; crop-protection route; harvest and conditioning state; declared gate; allocation key; DQR |
| required_quality_disclosure | identity and lot traceability, collected versus calculated values, nutrient factors and pathways, moisture conversions, mass-balance results, conditional process inclusion, and evidence gap flow identities |
| update_trigger | change in covered product boundary, cultivation route, nutrient or irrigation method, product state, packaging or delivery gate, allocation rule, or reviewed identity and source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14044-2006` | standard | https://www.iso.org/standard/38498.html | foreground boundary, allocation, data-quality, and shared-operation rules |
| `iso-14067-2018` | standard | https://www.iso.org/standard/71206.html | product carbon-footprint reporting context and dataset disclosure |
| `fao-56-crop-evapotranspiration` | official_guidance | https://www.fao.org/4/X0490E/X0490E00.htm | site water-balance, crop evapotranspiration, and irrigation data collection |
| `ipcc-2019-refinement-vol4-ch11` | method_factor | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | direct and indirect managed-soil N2O pathways and nutrient-emission calculation disclosure |
| `unece-ffv-21-leeks-2023` | official_guidance | https://unece.org/sites/default/files/2024-03/FFV-21_Leeks_2023_e.pdf | fresh leek market-quality, grading, condition, and product-state qualifiers |
| `mass-balance-identity` | method_factor | PCR method identity: conserve mass across each included field, conditioning, and delivery gate after moisture conversion. | normalization, allocation, and gate reconciliation |
