---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds-including-bouquets-wreaths-floral-baskets-and-similar-articles
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Cut flowers and flower buds including bouquets, wreaths, floral baskets and similar articles

## 1. Scope and Applicability

This PCR covers fresh cut flowers or buds and floral articles assembled from them at producer or assembly hand-off. Each dataset shall declare one species/cultivar composition and one presentation: loose stems/buds, bouquet, wreath, floral basket, or another described article. Loose material and assembled articles shall not be one mixed physical reference item.

The route includes managed cultivation, cutting, hydration and conditioning, grading, cooling, presentation and, when declared, assembly. Declare field or protected cultivation, crop period, harvest maturity, grade, hydration and temperature state, preservative treatment, accessories and packaging. Exclude rooted live plants, planting material, artificial flowers, downstream retail display and consumer use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds-including-bouquets-wreaths-floral-baskets-and-similar-articles |
| classification_refs | CPC 3.0: 01962 |
| covered_products | Fresh cut flowers/buds as loose stems or one declared bouquet, wreath, floral basket or similar article |
| excluded_products | Rooted live plants; planting material; artificial flowers; undeclared mixed presentations; retail display; consumer use |
| representative_product | One fresh floral product of declared composition, grade and presentation at producer or assembly hand-off |
| production_route | Field or protected cultivation, cutting, conditioning, grading, cooling and presentation; assembly is conditional |
| market_state | Fresh and marketable; loose or assembled form, hydration, temperature, treatment, accessories and packaging declared |

Field and protected routes, loose and assembled forms, and materially different preservation technologies remain separate strata unless weighting is reproducible.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One declared fresh cut-flower or bud product in one loose or assembled presentation |
| How much | 1 kg net fresh floral product; count may be additional with measured lot-mass conversion |
| How well | Meets declared composition, grade, maturity, freshness, damage, stem-length and presentation criteria |
| How long or cycle | One declared crop cycle and harvest/assembly lot through hand-off |
| reference_flow_link | Unresolved; the sole exact-class result is a narrow dyed-flower factory route |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fresh cut flowers/buds or declared floral article (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/cultivar composition; presentation; field/protected route; maturity; grade; stem length; net floral mass; hydration; temperature; treatment; accessories; packaging; gate; geography; lot; period |

The dyed-flower UUID `487c493e-53fd-46a5-ae32-51c3ecc2bb7e` shall not substitute for this generic reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net fresh floral material at the declared hand-off and time. |
| `count_conversion` | count records | Mass and count | kg and count | Convert with representative measured lot mass and retain sampling evidence. |
| `article_reconciliation` | assembled articles | Mass | kg | Reconcile floral material, accessories, water/media and packaging separately. |
| `hydration_temperature_basis` | all presentations | Mass and temperature | kg and deg C | Declare hydration, drainage and temperature at weighing. |
| `accepted_yield` | process nodes | Mass | kg | Reconcile accepted, downgrade, rework, returns, residues and measured mass change. |

## 5. System Boundary

The boundary starts with burden-carrying propagation material and cultivation inputs. It includes managed cultivation, harvest, hydration/conditioning, grading, cooling, optional assembly, packaging and hand-off. Shared infrastructure is attributed over service life and use. Distribution after hand-off, retail display and consumer care are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Species/cultivar-specific propagation material entering a declared field or protected system |
| starting_condition_role | Burden-carrying biological input; retained mother stock receives period attribution |
| product_classification_scope | One CPC 01962 presentation and declared species/cultivar composition per dataset |
| recursive_input_rule | Purchased same-category cut material used in an article requires a compatible upstream dataset |
| upstream_dataset_requirement | Compatible composition, presentation, route, geography, quality, gate and verified final identity |
| disclosure | System, crop cycle, lot, composition, presentation, hydration, temperature, treatment, grade, accessories, packaging, rejects, rework and hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_single_presentation` | all datasets | Model one loose or assembled presentation and prohibit incompatible mixed physical references. | `fao-postharvest-cut-flowers` |
| `boundary_cultivation` | `managed_cultivation` | Include propagation, water, nutrients, crop protection, energy and attributable shared infrastructure. | `fao-postharvest-cut-flowers` |
| `boundary_conditioning` | `harvest_conditioning` | Include cutting, rapid hydration, preservative treatment and conditioning actually performed. | `ncsu-cut-flower-postharvest` |
| `boundary_cold_chain` | `grading_cooling` | Include grading, cooling and controlled holding through hand-off; disclose time and temperature. | `fao-postharvest-cut-flowers` |
| `boundary_assembly` | `article_assembly` | Include every floral component, accessory, joining input and assembly loss for article routes. | `mass-balance-identity` |
| `boundary_packaging` | `presentation_handoff` | Include packaging crossing hand-off and exclude later distribution. | `ncsu-cut-flower-postharvest` |
| `boundary_route_separation` | alternative routes | Keep cultivation, preservation and presentation routes separate until weighting is reproducible. | `fao-postharvest-cut-flowers` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_cultivation` | Managed flower cultivation | `required` | Always; field or protected route declared | Managed biological production | kg harvested floral material |
| `harvest_conditioning` | Cutting, hydration and conditioning | `required` | Always; preservative may be zero | Harvest and conditioning | kg conditioned material |
| `grading_cooling` | Grading, sorting and cooling | `required` | Always; active cooling may be zero with evidence | Grading and preservation | kg accepted material |
| `article_assembly` | Floral-article assembly | `conditional` | Only for assembled presentation | Assembly and formulation | kg assembled article |
| `presentation_handoff` | Packaging and hand-off | `required` | Always | Presentation and reference output | 1 kg reference product |

### Process: Managed flower cultivation (`managed_cultivation`)

#### Inputs

##### Product flows

###### Propagation material (`propagation_material`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Declared species/form propagation stock; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure purchased and burden-attributed retained stock by crop cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg harvested material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Range: Provisional stock screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg harvested material
  - Basis: stock attributed per kg harvested output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`cultivation_water`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Irrigation water selected from foreground source
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter delivery or calculate from verified delivery rate and time; disclose rainfall separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Range: Provisional irrigation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/kg harvested material
  - Basis: delivered water per kg harvested output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient supply (`cultivation_nutrients`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Actual mineral, organic and other nutrient products
- Flow property / unit: Mass / kg or compatible nutrient property/unit
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Record every nutrient product in this single process card and retain composition; no group is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Range: Provisional nutrient-product screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg harvested material
  - Basis: nutrient products per kg harvested output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Actual formulations; UUIDs unresolved until identities are known
- Flow property / unit: Mass / kg
- Amount rule: Measure formulation, concentration, application and treated area; zero when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Range: Provisional protection-product screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg harvested material
  - Basis: formulated product per kg harvested output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cultivation energy (`cultivation_energy`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Carrier-specific fuel, electricity or heat from records
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Attribute pumping, machinery, lighting, heating, ventilation and cooling by cycle and area-time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg harvested material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Range: Provisional cultivation-energy screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ/kg harvested material
  - Basis: energy per kg harvested output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvested flowers and buds (`harvested_output`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Internal species/cultivar-specific harvested floral material
- Flow property / unit: Mass / kg
- Amount rule: Weigh salable and later-rejected harvested material at cutting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Range: Harvest-output reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: harvested mass before later rejects per kg accepted product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Crop residues and rejects (`cultivation_residues`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Material- and destination-specific residue; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure prunings, spent plants and rejects by destination; exclude retained/reworked material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional residue screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg harvested material
  - Basis: residue leaving cultivation per kg output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct emissions (`cultivation_emissions`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Substance- and compartment-specific elementary flows; UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected activity and a declared factor method; do not aggregate identities.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Range: Provisional emission screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg harvested material
  - Basis: screening sum only; final exchanges remain specific
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cutting, hydration and conditioning (`harvest_conditioning`)

#### Inputs

##### Product flows

###### Harvested floral input (`harvested_input`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Internal harvested floral material
- Flow property / unit: Mass / kg
- Amount rule: Measure lot transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg conditioned output
  - Basis: input per kg conditioned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water (`conditioning_water`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Process water selected from foreground source
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter hydration, washing and solution make-up water; record recirculation and discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional water screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg conditioned output
  - Basis: supplied water per kg output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservative ingredients (`conditioning_ingredients`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Actual sugar, acidifier, biocide or preservative ingredients; UUIDs unresolved until formulation is known
- Flow property / unit: Mass / kg
- Amount rule: Measure each ingredient and concentration; zero when only water is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional preservative screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg conditioned output
  - Basis: ingredients per kg output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conditioned floral material (`conditioned_output`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Internal conditioned floral material
- Flow property / unit: Mass / kg
- Amount rule: Measure after declared drainage and hydration stabilization.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Output equality
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg conditioned output
  - Basis: quantitative reference output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Conditioning wastewater and trim (`conditioning_waste`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Wastewater and biological trim by destination; UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure discharge and trim separately; exclude recirculation and rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional conditioning-waste screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg conditioned output
  - Basis: discharged solution and trim per kg output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grading, sorting and cooling (`grading_cooling`)

#### Inputs

##### Product flows

###### Conditioned input (`conditioned_input`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Internal conditioned floral material
- Flow property / unit: Mass / kg
- Amount rule: Measure lot input and retain grade and temperature state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg accepted output
  - Basis: input per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling energy (`cooling_energy`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Electricity or other energy from records
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Attribute precooling, cold-room and grading energy by meter, run or justified area-time share.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Range: Provisional cooling-energy screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: MJ/kg accepted output
  - Basis: energy per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted graded floral material (`graded_output`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Internal accepted grade
- Flow property / unit: Mass / kg
- Amount rule: Measure each accepted grade and destination; keep downgrade streams distinct.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Range: Output equality
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg accepted output
  - Basis: quantitative reference output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Downgrades and rejects (`grading_rejects`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Destination-specific downgrade or biological waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure downgrade, rework, return and discard separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional grade-loss screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg accepted output
  - Basis: downgrade and discard per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Floral-article assembly (`article_assembly`)

#### Inputs

##### Product flows

###### Floral components (`floral_components`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Internal or purchased species-specific floral components; purchased components require upstream datasets
- Flow property / unit: Mass / kg
- Amount rule: Measure each component by species/cultivar, source lot and accepted mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled floral output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Range: Floral-content screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg net floral output
  - Basis: incoming floral mass per kg accepted net floral output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Accessories and joining inputs (`assembly_accessories`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Actual ribbon, wire, frame, basket, foam or holder; UUIDs unresolved until materials are known
- Flow property / unit: Mass / kg
- Amount rule: Measure each material, reuse status and hand-off inclusion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled floral output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Range: Provisional accessory screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg net floral output
  - Basis: accessories per kg net floral output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted assembled article (`assembled_output`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Internal declared bouquet, wreath, basket or similar article
- Flow property / unit: Mass / kg
- Amount rule: Measure net floral mass and separately reconcile non-floral components.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net floral output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly`
- Range: Output equality
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg net floral output
  - Basis: quantitative reference output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Assembly trim and rejects (`assembly_rejects`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Material- and destination-specific waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Record trim, rejected assemblies, rework and recovered accessories separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional assembly-loss screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg accepted assembled output
  - Basis: boundary-exiting trim and rejects per kg output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging and hand-off (`presentation_handoff`)

#### Inputs

##### Product flows

###### Accepted floral product (`presentation_input`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Internal accepted loose or assembled floral product
- Flow property / unit: Mass / kg
- Amount rule: Measure net floral input and reconcile handling loss and hydration change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handoff`
- Range: Handoff-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: input per kg handed-off product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging and presentation materials (`packaging_materials`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Actual sleeve, wrap, carton, crate, pallet or rigid container
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: Measure materials crossing hand-off; record returnable assets with reuse attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handoff`
- Range: Provisional packaging screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: packaging per kg handed-off product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased waste treatment (`waste_treatment_service`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Treatment service selected for actual waste route
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.waste-treatment-service`
- Flow Set version: `0.2.0`
- Amount rule: Record purchased treatment only for boundary exits and prevent duplicate waste-output burdens.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Range: Provisional treatment screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg treated/kg reference product
  - Basis: purchased treatment per kg product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Reference floral product (`reference_product`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Fresh cut flowers/buds or declared article; UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net floral product on declared hydration, temperature and component basis.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Reference-flow equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: declared reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Handoff rejects and packaging losses (`handoff_rejects`)

This card records the declared flow role and quantity at this process node.

- Selected flow: Material- and destination-specific waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure rejected flowers, damaged articles and packaging loss; separate return/rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Range: Provisional handoff-loss screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: rejects and loss per kg product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all processes | Prefer direct metering and subdivision by crop, lot, grade and presentation. | `mass-balance-identity` |
| `allocation_multi_period` | perennial stock and protected systems | Attribute establishment, mother-stock and infrastructure over documented productive periods and usable outputs. | `mass-balance-identity` |
| `allocation_shared_assets` | shared irrigation, greenhouse, cooling and assembly assets | Allocate by causal driver such as area-time, meter share, runtime or throughput. | `mass-balance-identity` |
| `allocation_grades` | saleable grades | Treat separately marketed grades as co-products; allocate only after subdivision is exhausted. | `mass-balance-identity` |
| `allocation_rework` | reject and rework loops | Return rework burdens to the accepting node and prevent double counting. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation` | `managed_cultivation` | stock, inputs and output | farm logs, meters, invoices, scales | composition; route; area; dates; product; amount; output | reconcile cycle and harvest records | kg, m3, m2, date | each event/cycle | complete cycle | all plots/structures | sum compatible crop-route strata | invoices, calibrated meters/scales, lot links |
| `cp_energy` | all energy nodes | energy and shared assets | meters, invoices, equipment logs | carrier; quantity; meter; runtime; power; area-time; life/utilization | meter, fuel balance or verified calculation | MJ, kWh, h | batch/month | full period | all included assets | direct meter then causal allocation | calibration, invoice and asset register |
| `cp_emissions` | `managed_cultivation` | direct emissions | calculation record | activity; substance; factor; method; compartment | apply declared method to collected activity | kg | each cycle | complete cycle | all included sites | calculate by substance/compartment | factor source and worksheet |
| `cp_conditioning` | `harvest_conditioning` | input/output, water, ingredients | scales, meters, batch sheet | lot; masses; water; ingredients; concentration; time; temperature; drainage | measure each lot | kg, m3, h, deg C | each lot | all lots | all conditioning sites | sum compatible lots | checks and signed batch sheet |
| `cp_grading` | `grading_cooling` | grades, rejects, holding | scales and temperature logs | input; grade output; reject; time; temperature | weigh states and log temperature | kg, h, deg C | each lot | all lots | all grading and cooling sites | sum by grade/route | scale check and temperature record |
| `cp_assembly` | `article_assembly` | components, accessories, rework, output | bill and scales | identities; masses; output; trim; reject; rework | reconcile each batch | kg, count | each batch | all article batches | all assembly sites | identical specifications only | controlled bill, scale checks, lot links |
| `cp_handoff` | `presentation_handoff` | product and packaging | scales, packing list, release | mass; count; packaging; water/media; temperature; grade; time | reconcile packing and release | kg, count, deg C | each lot | all hand-offs | all presentation hand-off sites | mass-weight within compatible strata | scale check and release approval |
| `cp_waste` | all nodes | rejects, wastewater, treatment | scales, meters, manifests, rework logs | material; amount; origin; destination; treatment; rework | reconcile node balance and destination | kg, m3 | event/month | full period | all exits and loops | sum by material/destination | manifests and trace records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | all rows | compatible stratum total divided by accepted net floral mass | attributed quantity; reference mass | amount per kg reference product | `mass-balance-identity` |
| `calc_count_mass` | count records | measured representative lot mass divided by count | lot mass; count; sampling | kg per stem/item | `mass-balance-identity` |
| `calc_net_floral_mass` | articles | gross mass minus measured non-floral components and excluded free water | gross; accessories; packaging; water | net floral mass | `mass-balance-identity` |
| `calc_yield` | each node | input plus gain equals accepted, downgrade, rework, waste and measured change | state masses | yield and residual | `mass-balance-identity` |
| `calc_shared_service` | shared assets | measured service times causal share; shares sum to one | service total; driver | attributed service | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference and purchased floral components | Retain composition, presentation, lot, grade, maturity, hydration, temperature, treatment and gate. | lot labels and release records |
| `dq_temporal` | all processes | Cover one complete crop cycle and every included harvest/assembly lot; disclose extrapolation. | dated logs and coverage reconciliation |
| `dq_measurement` | mass, water, energy, temperature | Use checked instruments and state timing, net/gross and wet/drained basis. | calibration/check records and logs |
| `dq_completeness` | all inventory | Reconcile nodes, rejects/rework and quantitatively justify exclusions. | process balance and checklist |
| `dq_route` | alternative routes | Keep routes separate and document weighting before aggregation. | route inventory and production weights |
| `dq_uuid` | final exchanges | Resolve every exchange to one compatible confirmed UUID; retain Flow Set selection evidence. | identity evidence package |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail if composition, presentation, grade, hydration/temperature, gate or UUID-resolution state is absent. | `fao-postharvest-cut-flowers` |
| `validate_presentation_separation` | all datasets | Fail if loose and assembled forms are combined without separate inventories and reproducible weighting. | `mass-balance-identity` |
| `validate_process_topology` | process map | Require cultivation, conditioning, grading/cooling and hand-off; assembly only for article routes. | `ncsu-cut-flower-postharvest` |
| `validate_nutrient_binding` | `cultivation_nutrients` | Require exactly one set-level nutrient card in cultivation, no group and no fixed UUID. |  |
| `validate_flow_sets` | parameterized cards | Require current set/version, permitted group where required and concrete selection evidence at generation. |  |
| `validate_mass_balance` | every node | Investigate residual after hydration/moisture, rework and storage changes; do not hide it in output. | `mass-balance-identity` |
| `validate_ranges` | every flow card | Require complete range fields, lower not above upper, compatible basis and conditional application. |  |
| `validate_no_double_count` | all nodes | Prevent rework, return, cooling, energy and infrastructure from being counted twice. | `mass-balance-identity` |
| `validate_bilingual_projection` | PCR package | Require matching process, row, rule and range semantics in both languages and projection. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground package for one declared fresh floral product |
| downstream_use | `secondary_dataset`; `background_dataset` after identity and quality review |
| allowed_use | LCA when composition, presentation, route, geography, technology, quality, hydration/temperature and gate are compatible |
| excluded_use | Generic substitution across loose/assembled forms, climates, systems, preservation routes or quality states without evidence |
| required_metadata | composition; presentation; route; geography; period; maturity/grade; hydration; temperature; treatment; accessories; packaging; gate; allocation; Flow Set selections; UUID evidence |
| required_quality_disclosure | coverage; measurement basis; range exceptions; residuals; rejects/rework; shared attribution; unresolved identities; route weighting |
| update_trigger | Changed composition, presentation, system, technology, gate, yield/input pattern, Flow Set version, reference UUID or material evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-postharvest-cut-flowers` | official_guidance | FAO, Small-Scale Postharvest Handling Practices, https://www.fao.org/4/ae075e/ae075e13.htm | living-product boundary, water-loss and temperature control, route separation |
| `ncsu-cut-flower-postharvest` | extension_guidance | NC State Extension, Postharvest Information – Cut Flowers, https://cutflowers.ces.ncsu.edu/cutflowers-postharvest/ | cutting, hydration, preservatives, grading, packaging and cold storage |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity for foreground reconciliation | normalization, components, yield, rework and shared-service calculations |
