---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plants-and-parts-of-plants-used-primarily-in-perfumery-in-pharmacy-or-for-insecticidal-e225248a
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Plants and parts of plants used primarily in perfumery, in pharmacy, or for insecticidal, fungicidal or similar purposes

## 1. Scope and Applicability

This PCR covers plants and plant parts whose declared primary purpose is perfumery, pharmacy, insecticidal, fungicidal or a similar specialized use. It covers either managed cultivation or wild collection, followed by harvest, grading and primary conditioning to a producer or collection gate. Every dataset must declare one concrete species or taxon, plant part, intended use, cultivated or wild-collected route, and fresh or primary-dried state. There is no storage within the boundary and no cross-period attribution. It excludes essential-oil extraction, solvent extraction, distillation, formulation, manufacture of medicines, fragrances or pesticides, downstream packaging and transport, storage after the declared gate, and food or beverage crops whose primary market purpose lies outside this category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plants-and-parts-of-plants-used-primarily-in-perfumery-in-pharmacy-or-for-insecticidal-e225248a |
| classification_refs | CPC 3.0: 0 > 01 > 019 > 0193 > 01930 |
| covered_products | Cultivated or wild-collected plants, leaves, flowers, fruits, seeds, bark, wood, stems, roots, rhizomes or other plant parts used primarily for the declared perfumery, pharmacy, insecticidal, fungicidal or similar purpose, fresh or primary-dried at producer or collection gate |
| excluded_products | essential oils, extracts, distillates, formulated medicines, fragrances or pesticides; crops primarily sold for food or beverages; mixtures without declared species, plant part, use, origin route and market state |
| representative_product | Accepted fresh or primary-dried material of one declared taxon and plant part at the declared moisture basis |
| production_route | Managed cultivation is the managed-biological-production parent; wild collection is an alternative production route adding source ecosystem, collection range, resource removal and sustainable-collection records. They are mutually exclusive for the same material quantity and converge at harvest, grading and primary conditioning. Fresh hand-off and primary drying are mutually exclusive technology strata under the conditioning parent. |
| market_state | Fresh or primary-dried, unextracted plant material at producer or collection gate; state must be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted specialty plant material meeting the declared taxon, plant-part, intended-use and quality specification |
| How much | 1,000 kg |
| How well | Declared species or taxon, plant part, intended use, cultivated or wild-collected origin, fresh or primary-dried state, moisture basis, foreign matter and acceptance grade |
| How long or cycle | One cultivated crop cycle or one wild-collection period and the linked conditioning batch or continuous operating interval |
| reference_flow_link | `accepted_specialty_plant` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Plants and parts of plants used primarily in perfumery, in pharmacy, or for insecticidal, fungicidal or similar purposes |
| Reference flow property |  |
| Reference unit group |  |
| Reference unit | kg |
| Required qualifiers | producer or collection gate; species or taxon; plant part; intended use; cultivated or wild-collected route; fresh or primary-dried state; moisture or dry-matter basis; geography; crop year or collection period; lot; grade and destination |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_unresolved_identity` | reference product | mass property compatible with the finally verified reference flow | kg | Reference property and unit-group identities are unresolved; do not invent UUIDs before identity verification. Measure mass at hand-off and report same-lot moisture. |
| `moisture_state_alignment` | all plant-material hand-offs | Mass | kg fresh matter or kg dry matter | Declare and align fresh/dry basis before aggregation; dry mass equals wet mass multiplied by dry-matter fraction. |
| `route_mass_reconciliation` | origin and conditioning nodes | Mass | kg | Balance cultivated or wild-collected input, accepted product, downgraded product, waste, loss and drying moisture separately; never assign the same material quantity to both origin routes. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cultivated route starts with the prepared production site before the current crop cycle; wild route starts with the declared population, ecosystem, collection range and collection period |
| starting_condition_role | foreground entry condition for mutually exclusive origin routes |
| product_classification_scope | CPC 3.0 `01930` |
| recursive_input_rule | When plant material of this category re-enters the boundary, record it as an external product input with a supplying dataset and do not recursively rebuild its production or collection. |
| upstream_dataset_requirement | Every purchased product or service input uses a geographically, technologically and functionally representative upstream dataset or remains explicitly unresolved for foreground selection. |
| disclosure | Declare taxon, plant part, use, cultivated or wild origin, location, cycle/collection period, fresh/dry state, moisture, harvest and conditioning technology, grades, reject/rework routes and every excluded activity. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_origin_route` | all material | Select exactly one of managed cultivation or wild collection for each material quantity. Cultivation includes current-cycle management inputs, land occupation and field emissions; wild collection includes source population, collection range, resource removal, collection inputs and residual state. | `who-gacp-medicinal-plants`; `fairwild-standard` |
| `boundary_independent_harvest` | harvest/capture hand-off | Treat removal of the target plant part from the production site or wild source as an independent node responsibility because its output state, loss and hand-off records differ from growth or source management. | `who-gacp-medicinal-plants`; `fairwild-standard` |
| `boundary_conditioning` | primary conditioning | Include post-harvest cleaning, grading, cutting and primary drying or stabilization needed for producer/collection hand-off. Fresh hand-off has no drying. There is no storage and attribution is single-period; exclude extraction, distillation, formulation and downstream manufacture. | `who-gacp-medicinal-plants`; `who-quality-control-herbal-materials` |
| `boundary_route_delta` | alternative routes and technologies | Managed cultivation is the biological-production parent and wild collection is the alternative production route adding population/ecosystem, collection-range and resource-removal requirements. Conditioning is the parent activity; fresh hand-off and primary drying form an alternative technology route that changes energy, moisture-balance and emission requirements. Collect mutually exclusive strata separately before weighted aggregation. | `who-gacp-medicinal-plants`; `fairwild-standard` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_cultivation` | Managed cultivation | `conditional` | included only for cultivated lots; mutually exclusive with wild_collection for the same material quantity | managed biological production from declared propagation material to harvestable target plant or plant part | declared cultivated area and crop cycle |
| `wild_collection` | Wild collection and resource removal | `conditional` | included only for wild-collected lots; mutually exclusive with managed_cultivation for the same material quantity | independent removal and capture from the declared wild source with collection-period indexing | declared source area or collection unit and collection period |
| `primary_conditioning` | Harvest, grading and primary conditioning | `required` | one declared cultivated or wild-collected input route; fresh hand-off may omit drying | independent harvest/capture hand-off, cleaning, sorting, cutting and optional primary drying or stabilization to the producer or collection gate; the fresh/dried choice is an alternative technology route | 1,000 kg accepted product at declared fresh or primary-dried state |

### Process: Managed cultivation (`managed_cultivation`)

#### Inputs

##### Product flows

###### Species-specific propagation material (`propagation_material`)

Record the actual seed, seedling, cutting, rhizome or other propagation material for the declared cultivated taxon; do not aggregate different propagation states without mass or count conversion.

- Selected flow: Species-specific propagation material
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured quantity established or planted
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared cultivated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources:
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg or items/ha crop cycle
  - Basis: actual propagation material per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Consolidated agricultural nutrient and fertilizer supply (`nutrient_supply`)

Record mineral and organic fertilizers, manure, compost, lime and nutrient amendments once in this consolidated card, preserving each product identity and nutrient analysis.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg, m3, kg N, kg P2O5 or kg K2O as applicable
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: measured supplied products and calculated nutrient contents
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: who-gacp-medicinal-plants
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg product/ha crop cycle
  - Basis: sum of solid supplied products; liquids remain in native volume
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Actual crop-protection products (`crop_protection_inputs`)

Record each formulated herbicide, insecticide, fungicide or biological control product by trade identity, active substance and formulation; actual products are determined from field records.

- Selected flow: Actual formulated crop-protection products
- Flow property / unit: Mass or volume / kg or L product
- Amount rule: measured formulated product and active substance applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_inputs`
- Sources: who-gacp-medicinal-plants
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg or L product/ha crop cycle
  - Basis: total formulated products per treated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Irrigation water supply (`irrigation_water`)

Record water delivered to the field only for irrigated strata; rainfed strata create no exchange.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or calculated water delivered to the cultivated area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per irrigated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_water`
- Sources:
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha crop cycle
  - Basis: zero when rainfed; broad screen for delivered irrigation water
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Cultivation machinery energy supply (`cultivation_energy`)

Record actual fuels, electricity or other carriers used for soil preparation, planting, maintenance, irrigation support and field operations.

- Selected flow: Cultivation machinery fuel or energy supply
- Flow property / unit: Energy or carrier-native property / MJ, kWh, kg or L
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier consumption attributed to the cultivated lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: MJ/ha crop cycle
  - Basis: all cultivation energy carriers converted to MJ for the QA screen
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
##### Waste flows

##### Elementary flows

###### Occupation of agricultural land (`land_occupation`)

Record cultivated area multiplied by occupation duration for the actual crop cycle; distinguish materially different land-use strata.

- Selected flow: agriculture `e1d56d4e-afe3-4b92-bd51-0a21f75e50a8`
- Flow property / unit: Area*time / ha*a
- Binding: Fixed (`fixed`)
- Amount rule: cultivated area multiplied by occupation duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_identity`
- Sources:
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: ha*a/ha crop cycle
  - Basis: occupation duration per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
#### Outputs

##### Product flows

###### Cultivated raw target material transferred internally (`cultivated_raw_material`)

Transfer the declared harvestable species and plant part to the common harvest and conditioning node; exclude standing residues and uncollected loss.

- Selected flow: Cultivated target plant material (internal)
- Flow property / unit: Mass / kg fresh matter
- Amount rule: measured or mass-balanced harvestable material transferred
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cultivated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_identity`
- Sources:
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200000
  - Unit: kg fresh matter/ha crop cycle
  - Basis: harvestable target material transferred from cultivation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
##### Waste flows

##### Elementary flows

###### Direct nitrous oxide to air (`direct_n2o`)

Calculate direct managed-soil N2O from collected nitrogen activity data using the declared IPCC tier and factors.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: calculated direct N2O emitted to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: ipcc-2019-managed-soils
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha crop cycle
  - Basis: direct N2O to air per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Ammonia to air (`ammonia_to_air`)

Record or calculate NH3 volatilization by nitrogen source and application event, retaining the nitrogen or substance basis used.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: measured or calculated NH3 emitted to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: ipcc-2019-managed-soils
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg NH3/ha crop cycle
  - Basis: ammonia mass as NH3 per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Nitrate to receiving water (`nitrate_to_water`)

Record nitrate leaching or runoff by actual receiving-water compartment and preserve whether the reported basis is nitrate or nitrate-nitrogen.

- Selected flow: Nitrate to reported water compartment
- Flow property / unit: Mass / kg NO3 or kg NO3-N
- Amount rule: measured or modelled nitrate loss by compartment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: ipcc-2019-managed-soils
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg NO3/ha crop cycle
  - Basis: nitrate mass after declared substance-basis conversion
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Phosphorus substance to receiving water (`phosphorus_to_water`)

Record the measured or modelled phosphorus species and receiving-water compartment; total P and phosphate are not interchangeable without conversion.

- Selected flow: Reported phosphorus substance to reported water compartment
- Flow property / unit: Mass / kg reported substance
- Amount rule: measured or modelled phosphorus loss by species and compartment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: who-gacp-medicinal-plants
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg reported P substance/ha crop cycle
  - Basis: reported phosphorus substance per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Crop-protection active substances by compartment (`crop_protection_releases`)

Expand this umbrella from application records into concrete active-substance and receiving-compartment exchanges; do not use an unspecified pesticide UUID as a substitute.

- Selected flow: Reported active substance to reported compartment
- Flow property / unit: Mass / kg active substance
- Amount rule: calculated release by active substance and compartment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treated area and crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: who-gacp-medicinal-plants
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg active substance/ha crop cycle
  - Basis: sum of modelled releases without merging compartments
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
### Process: Wild collection and resource removal (`wild_collection`)

#### Inputs

##### Product flows

###### Wild-collection equipment energy supply (`collection_energy`)

Record actual energy carriers used for access, cutting, digging, lifting or collection equipment; manual collection may record zero.

- Selected flow: Collection equipment fuel or energy supply
- Flow property / unit: Energy or carrier-native property / MJ, kWh, kg or L
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier consumption attributed to the collection lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted collection lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: fairwild-standard
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/1000 kg accepted product
  - Basis: all collection energy carriers converted to MJ
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
##### Waste flows

##### Elementary flows

###### Species- and plant-part-specific wild biomass withdrawal (`wild_biomass_withdrawal`)

Record removal from the declared wild population by taxon, plant part, source ecosystem and collection area; do not bind a generic biomass row with an incompatible property.

- Selected flow: Declared wild plant resource withdrawal
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured removed biomass or count from the wild source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per source area and collection period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wild_collection`
- Sources: fairwild-standard
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200000
  - Unit: kg fresh matter/collection unit period
  - Basis: gross target biomass removed from the declared wild source
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
#### Outputs

##### Product flows

###### Wild-collected raw target material transferred internally (`wild_collected_raw_material`)

Transfer only the intended collected species and plant part to conditioning; keep incidental material, source residuals and uncollected biomass separate.

- Selected flow: Wild-collected target plant material (internal)
- Flow property / unit: Mass / kg fresh matter
- Amount rule: measured collected target material transferred
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per source area and collection period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wild_collection`
- Sources: fairwild-standard
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200000
  - Unit: kg fresh matter/collection unit period
  - Basis: target material transferred from wild collection
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
##### Waste flows

###### Incidental material leaving wild collection (`collection_residues`)

Record non-product plant or foreign material removed from the source and discarded outside the source ecosystem; material left in place is not a waste exchange.

- Selected flow: Incidental collection material
- Flow property / unit: Mass / kg
- Amount rule: measured incidental material crossing the node boundary as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted collection lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wild_collection`
- Sources: fairwild-standard
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/1000 kg accepted product
  - Basis: incidental material removed and discarded outside the source
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
##### Elementary flows

### Process: Harvest, grading and primary conditioning (`primary_conditioning`)

#### Inputs

##### Product flows

###### Cultivated or wild-collected raw material (`incoming_raw_material`)

Receive exactly one declared internal route state for each material quantity, preserving species, plant part, origin route, lot and fresh-mass basis.

- Selected flow: Cultivated or wild-collected target material (internal)
- Flow property / unit: Mass / kg fresh matter
- Amount rule: measured internal transfer into conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning batch or continuous operating interval
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass_balance`
- Sources:
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg fresh matter/run or period
  - Basis: incoming target material assigned once to the conditioning run
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Washing or cleaning process water (`process_water`)

Record supplied water used for washing or wet cleaning; a dry-only route creates no exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered or calculated process water supplied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: who-quality-control-herbal-materials
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/1000 kg accepted product
  - Basis: zero for dry-only routes; water supplied to wet conditioning
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Conditioning and drying energy supply (`conditioning_energy`)

Record actual electricity, heat or fuels used for cleaning, cutting, sorting, ventilation, drying and stabilization, including run-linked cleaning and changeover energy.

- Selected flow: Conditioning and drying energy supply
- Flow property / unit: Energy or carrier-native property / MJ, kWh, kg or L
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: measured carrier use assigned to the run or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: who-gacp-medicinal-plants
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: MJ/1000 kg accepted product
  - Basis: all conditioning carriers converted to MJ
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted specialty plant material (`accepted_specialty_plant`)

Record accepted material as an intended output at the producer or collection gate with one concrete species or taxon, plant part, intended use and fresh or primary-dried state.

- Selected flow: Plants or plant parts for declared perfumery, pharmacy, insecticidal, fungicidal or similar use
- Flow property / unit: Mass / kg at declared moisture basis
- Amount rule: measured accepted mass after sorting and conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass_balance`
- Sources: who-gacp-medicinal-plants
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg/reference flow
  - Basis: accepted product reference mass at the declared moisture state
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Downgraded plant material for another use (`downgraded_plant_material`)

Record off-spec material as an intended output only when a documented recipient and beneficial destination exist; otherwise classify it as waste.

- Selected flow: Downgraded plant material with declared destination
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to documented alternate use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning run or period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_destinations`
- Sources: who-quality-control-herbal-materials
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/1000 kg incoming raw material
  - Basis: downgraded mass with documented destination
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
##### Waste flows

###### Conditioning plant residues and rejects (`conditioning_plant_residues`)

Record discarded plant parts, foreign matter and rejected target material by waste destination; do not include downgraded material with a documented product use.

- Selected flow: Plant residues and rejected material
- Flow property / unit: Mass / kg
- Amount rule: measured discarded solid mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning run or period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_destinations`
- Sources: who-quality-control-herbal-materials
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/1000 kg incoming raw material
  - Basis: solid residue and rejected mass leaving as waste
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Wastewater from wet conditioning (`conditioning_wastewater`)

Record wastewater by measured quantity, composition and destination when washing or wet processing occurs; dry-only routes create no exchange.

- Selected flow: Wastewater from plant-material washing or wet conditioning
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured wastewater sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_inputs`
- Sources: who-quality-control-herbal-materials
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/1000 kg accepted product
  - Basis: zero for dry-only routes; wastewater crossing the boundary
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
##### Elementary flows

###### Water vapour to air from primary drying (`water_vapour_to_air`)

Calculate moisture removed during primary drying from incoming and outgoing mass and moisture measurements; fresh hand-off routes record zero.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg water
- Binding: Fixed (`fixed`)
- Amount rule: moisture removed by mass and moisture balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: who-gacp-medicinal-plants
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg water/1000 kg accepted product
  - Basis: zero for fresh hand-off; moisture removed during declared primary drying
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
###### Plant particulate matter to air (`plant_dust_to_air`)

Record measured or modelled plant dust by reported particle-size fraction and receiving air compartment; do not bind an unspecified-particle row when a size fraction is available.

- Selected flow: Plant particulate matter by reported particle-size fraction
- Flow property / unit: Mass / kg particulate matter
- Amount rule: measured or modelled dust release after control
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: who-quality-control-herbal-materials
- Range: Provisional QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/1000 kg accepted product
  - Basis: dust released after declared control equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_route_exclusivity` | cultivated and wild origin | Do not assign the same material quantity to both origin routes; weight strata by actual accepted mass only after each stratum is complete. | `who-gacp-medicinal-plants`; `fairwild-standard` |
| `allocation_mass_balance_first` | accepted, downgraded and waste outputs | Record every output and destination separately and apply mass balance first. Allocate only when multiple economically valuable products share inseparable burdens; report method, price period and sensitivity. | `who-quality-control-herbal-materials` |
| `allocation_rework_and_runs` | batches, continuous periods, rework and changeover | Link inputs, outputs, cleaning and changeover events to one run or operating interval; rework retains producing-node burdens and adds only new operations, preventing shared-run double counting. | `who-gacp-medicinal-plants` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_identity` | `managed_cultivation` | route, taxon, area and internal hand-off | field and crop records | field id; taxon; plant part; crop dates; area; harvestable mass; moisture | field register plus calibrated area and mass records | ha; dates; kg; % | each field and crop cycle | complete crop cycle | all cultivated sites | retain field strata; sum only after route checks | field register, scale and moisture-test evidence |
| `cp_cultivation_inputs` | `managed_cultivation` | propagation, nutrients and crop protection | purchase, issue and application records | product identity; supplier; formulation; active substance or nutrient analysis; quantity; treated area; event | reconcile invoices, stock issues and application logs | kg; L; items; ha | each input and application event | complete crop cycle | all cultivated fields | sum by concrete product and field without double counting | invoice, label, analysis and application log |
| `cp_field_water` | `managed_cultivation` | irrigation water | meter or irrigation record | water source; delivered volume; irrigated area; event | meter reading or engineering calculation with method | m3; ha | each irrigation event | complete crop cycle | all irrigated fields | sum delivered water by field; rainfed strata remain zero | meter calibration or calculation inputs |
| `cp_energy_records` | `all processes` | energy carriers and run-linked cleaning/changeover | meter, fuel and equipment logs | carrier; quantity; energy content; equipment; field/run; cleaning/changeover event | reconcile meters, purchase and operating logs | MJ; kWh; kg; L | each operation or operating interval | complete cycle, collection period or conditioning period | all foreground sites | assign once to the consuming node and convert separately | meter calibration, invoices and operating logs |
| `cp_field_emissions` | `managed_cultivation` | direct field emissions | activity and model records | N inputs; amendment; active substances; application event; soil/climate; receiving compartment; factor/model | collect activity data and apply declared method | kg substance; ha | each event and crop cycle | complete crop cycle | all cultivated fields | calculate by field, substance and compartment then sum | activity records, factor version and model output |
| `cp_wild_collection` | `wild_collection` | population, collection effort, withdrawal and residuals | collector and source-area records | taxon; plant part; ecosystem; source area; permit; collector; dates; gross removal; target output; incidental material; residual condition | verified collection log and field observation | kg; items; ha or declared collection unit | each collection event | complete collection period | all source areas and collectors | retain source-area strata and reconcile gross removal | permit, collector log, geolocation and field inspection |
| `cp_conditioning_mass_balance` | `primary_conditioning` | incoming, accepted, downgraded, waste and loss states | batch or continuous-period records | origin lot; input mass/moisture; accepted grades; downgraded mass/destination; waste mass/destination; output moisture | calibrated weighing and same-lot moisture tests | kg; % | each batch or continuous period | complete conditioning campaign | all conditioning sites | close mass and moisture balance per run before aggregation | scale calibration, lab/test record and destination receipt |
| `cp_conditioning_inputs` | `primary_conditioning` | water and wastewater | meter and discharge records | water source; supplied volume; wastewater mass/volume; composition; destination | metering, tank balance and discharge documentation | m3; kg | each batch or operating interval | complete conditioning campaign | all wet-conditioning sites | balance supplied water, retained moisture and wastewater | meter calibration and discharge receipt |
| `cp_drying_records` | `primary_conditioning` | drying moisture and dust | dryer and environmental records | input/output mass; input/output moisture; run time; controls; dust measurement/model; particle size; air compartment | same-lot moisture balance plus measured or documented emission model | kg water; kg particulate; particle-size fraction | each drying run | complete drying campaign | all drying units | calculate water removed and dust after controls by run | moisture test, run log, control record and emission evidence |
| `cp_reject_destinations` | `primary_conditioning` | downgrade, reject, rework and waste routing | grade and destination records | state; mass; reason; rework loop; recipient; beneficial use or waste destination; receipt | reconcile sorting record with recipient or disposal evidence | kg | each batch or period | complete campaign | all grading sites | each rejected quantity has exactly one path and is excluded from accepted output | grade record, recipient confirmation or waste receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | all plant material | dry mass = wet mass × dry-matter fraction; declare wet or dry basis for every moisture percentage | wet mass; same-lot moisture | kg dry matter | `who-quality-control-herbal-materials` |
| `calc_conditioning_balance` | primary conditioning | incoming mass = accepted + downgraded + solid waste + unrecovered loss + net water removed; report unexplained difference | run-level mass and moisture records | run mass balance and difference | `who-gacp-medicinal-plants` |
| `calc_managed_soil_n2o` | cultivated soil | calculate N2O-N with the declared IPCC tier, nitrogen activity and factors, then multiply by 44/28 for N2O | nitrogen by source; soil/climate; factors | kg N2O | `ipcc-2019-managed-soils` |
| `calc_route_weighting` | multi-origin aggregate | aggregate = accepted-mass-weighted values from complete mutually exclusive strata; never treat a missing stratum as zero | stratum inventories; accepted mass | weighted inventory | `who-gacp-medicinal-plants`; `fairwild-standard` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | every lot | Taxon, plant part, use, origin route, geography, fresh/dry state and moisture basis are complete and non-conflicting. | lot identity, label, permit or supply record |
| `dq_completeness` | all nodes | Cover all sites, collectors, runs, inputs, outputs, rejects and destinations in the collection/crop period and linked conditioning period; quantify missing coverage. | coverage register and mass balance |
| `dq_wild_source` | wild collection | Retain permit, collection range, population/habitat observation, collection intensity and residual condition to support resource-removal and sustainability interpretation. | permit, geospatial record, collection log and inspection |
| `dq_temporal_and_technology` | all routes | Data represent the declared year/period and actual technology; aggregate alternative routes or technologies only after complete stratification. | dated records, equipment records and stratum coverage |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity_gap` | reference flow | Reference UUID, property UUID and unit-group UUID remain blank until one Tiangong Product flow compatible with category, gate, state and mass property is verified; reject similar species, extracts, formulations and generic biomass substitutes. |  |
| `validate_origin_exclusivity` | each material quantity | Declare exactly one cultivated or wild-collected origin route; the two routes must not double count. | `who-gacp-medicinal-plants`; `fairwild-standard` |
| `validate_identity_qualifiers` | reference product | Fail when taxon, plant part, intended use, fresh/dry state, moisture basis, geography or lot is missing; do not merge states without conversion and stratification. | `who-quality-control-herbal-materials` |
| `validate_nutrient_cardinality` | `managed_cultivation` | Permit at most one consolidated nutrient Product-input card; bind only to `flow-set.agricultural-nutrient-supply` version `0.3.0` at set level with no group and no separate N, P, K, manure, lime or amendment card. |  |
| `validate_runs_and_rework` | conditioning runs | Link every input, output, cleaning, changeover, downgrade, rework and discard path to a run/period; exclude rejects from accepted output and prevent shared-burden duplication. | `who-gacp-medicinal-plants` |
| `validate_mass_moisture_balance` | conditioning | Complete mass and moisture balance for each run; fresh routes have zero drying energy and water vapour, and wet routes balance supplied water and wastewater. | `who-quality-control-herbal-materials` |
| `validate_deferred_elementary_identity` | nitrate, phosphorus, crop-protection releases, wild biomass and dust | Before final process exchange, expand each umbrella into verified concrete substance/species, property and receiving/source compartment UUIDs; never auto-bind a broad search candidate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production package with cultivated or wild origin and conditioning route evidence |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | process or lifecycle-model use when taxon, plant part, use, origin route, geography, gate and fresh/dry state match |
| excluded_use | no representation of undeclared species/parts, extracts/oils/formulations, interchange of wild and cultivated origin, or use across moisture states without conversion |
| required_metadata | taxon; plant part; intended use; origin route; geography; crop cycle or collection period; lot/run; fresh/dry state; moisture; grade; harvest and conditioning technology; outputs and destinations |
| required_quality_disclosure | record coverage, measurement and model methods, identity/UUID gaps, strata, mass/moisture-balance difference, wild-source evidence, proxies and uncertainty |
| update_trigger | material change in taxon/part/use, origin route, hand-off state, geography, harvest/conditioning technology, quality rule, emission method or Tiangong identity binding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `who-gacp-medicinal-plants` | `official_guidance` | World Health Organization (2003), WHO guidelines on good agricultural and collection practices (GACP) for medicinal plants, ISBN 92 4 154627 1 | cultivated and collected route, harvest, primary processing, hygiene, records and quality controls |
| `fairwild-standard` | `standard` | FairWild Foundation, FairWild Standard Version 3.0 | wild collection source, collection practice, traceability and sustainable resource-removal records |
| `who-quality-control-herbal-materials` | `official_guidance` | World Health Organization (2011), Quality control methods for herbal materials, ISBN 978 92 4 150073 9 | identity, foreign matter, moisture, sampling and quality evidence |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC (2019), 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11 | managed-soil nitrogen emissions and N2O conversion |
