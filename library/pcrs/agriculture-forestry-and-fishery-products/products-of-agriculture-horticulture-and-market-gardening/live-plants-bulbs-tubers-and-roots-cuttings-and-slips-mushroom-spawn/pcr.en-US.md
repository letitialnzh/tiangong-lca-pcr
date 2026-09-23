---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.live-plants-bulbs-tubers-and-roots-cuttings-and-slips-mushroom-spawn
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Live plants; bulbs, tubers and roots; cuttings and slips; mushroom spawn

## 1. Scope and Applicability

This PCR covers one living planting-material item at a nursery or propagation hand-off. Each dataset shall represent exactly one species or cultivar and one form: live plant, bulb, tuber, planting root, cutting, slip, or mushroom spawn. The CPC family label shall never be modelled as one mixed physical reference item.

Declare whether delivered mass includes growing container, support, substrate, carrier, attached moisture and presentation materials. Declare plantable quality, viability or establishment criterion, grade, health inspection, phytosanitary state and gate. Exclude cut flowers, edible mushrooms, harvested food roots/tubers, seed, non-plantable rejects and downstream cultivation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.live-plants-bulbs-tubers-and-roots-cuttings-and-slips-mushroom-spawn |
| classification_refs | CPC 3.0: 01961 |
| covered_products | One declared species/cultivar in one planting-material form: live plant, bulb, tuber, planting root, cutting, slip, or mushroom spawn |
| excluded_products | Mixed-form items; cut flowers; edible mushrooms; harvested food roots/tubers; seeds; non-plantable rejects; cultivation after hand-off |
| representative_product | One plantable lot of one declared species/cultivar and form at nursery/propagation hand-off |
| production_route | Species/form-specific propagation, nursery or culture production, optional media/container preparation and hardening, grading, phytosanitary release and presentation |
| market_state | Living, viable and plantable; declared bare-root, containerized, substrate-bearing, carrier-bearing or other as-delivered state |

Alternative routes remain separate species/form and technology strata unless quantities, burdens, quality state and weighting are reproducible.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One declared living planting-material item of one species/cultivar and one form at nursery/propagation hand-off |
| How much | 1 kg as delivered; item count may be additional but requires measured lot-mass conversion |
| How well | Plantable quality meeting declared viability/establishment, grade, health and phytosanitary criteria |
| How long or cycle | One declared propagation batch/campaign and production period through hand-off |
| reference_flow_link | Unresolved; no verified platform flow covers the complete CPC 01961 family without narrowing species/form |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Live planting material of declared species/cultivar and form (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/cultivar; form; route; bare-root/container/substrate/carrier state; component inclusion; net/gross and watering basis; grade; viability/establishment; phytosanitary state; gate; geography; batch/campaign |

Nursery-cane, oil-palm seedling, berry-cutting, sapling and yam-sett UUIDs are prohibited generic substitutes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the as-delivered lot on one declared net/gross and inclusion basis. |
| `item_count_conversion` | count records | Mass and item count | kg and count | Convert count using representative measured lot mass and retain sampling evidence. |
| `container_substrate_reconciliation` | included components | Mass | kg | Reconcile biological material, attached substrate/carrier and included container to reference mass. |
| `water_and_moisture_basis` | all forms | Mass or volume | kg or m3 | Declare watering condition and measurement timing; do not compare incompatible wet/drained states. |
| `quality_yield` | accepted and rejected states | Mass | kg | Reconcile accepted, downgraded, returned and discarded states with grading input and measured changes. |

## 5. System Boundary

The boundary starts with source stock/culture, media and container inputs and includes propagation, managed nursery/culture operation, route-specific conditioning/hardening, grading, phytosanitary examination, and presentation needed for hand-off. Distribution after hand-off and buyer cultivation are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Species/form-specific source stock or culture plus separately recorded media, container and utility inputs |
| starting_condition_role | Upstream burden-carrying propagation source, never a burden-free internal input |
| product_classification_scope | One CPC 01961 species/cultivar and one planting-material form per dataset |
| recursive_input_rule | Purchased same-category material requires a compatible upstream dataset; retained stock carries attributed burdens |
| upstream_dataset_requirement | Exact species/form/state and gate compatibility; verified UUID for every final external exchange |
| disclosure | Species/cultivar, form, source route, batch/campaign, production period, container/substrate/carrier inclusion, hardening, grade, viability/establishment, phytosanitary state, rejects and hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_single_item` | all datasets | Model one species/cultivar and one form; prohibit mixed family-label physical reference items. | `fao-nursery-practice` |
| `boundary_propagation` | `managed_propagation` | Include source-stock establishment, multiplication, water, nutrients, protection, utilities and shared infrastructure. | `fao-nursery-practice` |
| `boundary_media_container` | `media_container_preparation` | Include media mixing and containers when used; declare which masses remain in the delivered item. | `fao-nursery-practice` |
| `boundary_conditioning` | `conditioning_hardening` | Include bounded pre-hand-off hardening, root pruning, acclimation and viability preservation only when performed. | `fao-nursery-practice` |
| `boundary_phytosanitary` | `grading_phytosanitary_release` | Include traceable examination and pest-management controls defining plantable and phytosanitary state. | `ippc-ispm-36` |
| `boundary_packaging` | `presentation_handoff` | Include materials crossing hand-off according to declared inclusion; exclude later distribution. | `fao-nursery-practice` |
| `boundary_route_separation` | alternative routes | Keep topology, inputs, yields, assets and quality gates separate until reproducible weighting exists. | `fao-nursery-practice` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `media_container_preparation` | Growth-media and container preparation | `conditional` | When media/carrier is blended or a growing container is installed | Formulation and blending | kg prepared assembly |
| `managed_propagation` | Managed propagation and biological multiplication | `required` | Always; species/form-specific nursery, vegetative or spawn-culture route | Managed biological production and harvest/capture | kg viable propagated material |
| `conditioning_hardening` | Conditioning, hardening and stabilization | `conditional` | When acclimation, root pruning, moisture adjustment or bounded stabilization occurs before release | Primary conditioning and preservation | kg conditioned material |
| `grading_phytosanitary_release` | Grading and phytosanitary release | `required` | Always; accepted, downgraded, returned and discarded states are recorded | Grading and release | kg released plantable material |
| `presentation_handoff` | Presentation and nursery/propagation hand-off | `required` | Always; zero new packaging is allowed for bare or excluded-reusable-asset hand-off | Packaging/presentation and reference hand-off | 1 kg reference product |

### Process: Growth-media and container preparation (`media_container_preparation`)

#### Inputs

##### Product flows

###### Growth-media, carrier and substrate ingredients (`media_ingredients`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Declared route-specific ingredients; identity unresolved until composition is known
- Flow property / unit: Mass / kg
- Amount rule: Measure each ingredient separately; this umbrella card does not authorize a generic substrate UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg prepared assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_media_container_batch`
- Range: Provisional or reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg prepared assembly
  - Basis: total ingredients per kg prepared output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient amendments (`media_nutrients`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Actual mineral, organic and other nutrient products
- Flow property / unit: Mass / kg or compatible nutrient property/unit
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Measure products and retain nutrient composition; one consolidated card only in this process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_media_container_batch`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg prepared assembly
  - Basis: nutrient products per kg prepared output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water for media preparation (`media_water`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Process water selected from foreground source
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Meter or calculate water added to media/carrier from the batch formula.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_media_container_batch`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg prepared assembly
  - Basis: added water per kg prepared output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared media and container assembly (`prepared_media_container`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Internal prepared media/container assembly
- Flow property / unit: Mass / kg
- Amount rule: Calculate ingredient mass less measured losses; retain formulation and container identifiers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg prepared output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_media_container_batch`
- Range: Provisional or reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.2
  - Unit: kg/kg declared output
  - Basis: mass reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Off-spec media and preparation losses (`media_preparation_waste`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Material-specific waste by destination; identity deferred
- Flow property / unit: Mass / kg
- Amount rule: Measure off-spec media, spills and discarded containers; exclude reworked material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_waste_routes`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg prepared output
  - Basis: waste leaving preparation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Managed propagation and biological multiplication (`managed_propagation`)

#### Inputs

##### Product flows

###### Species- and form-specific propagation source (`propagation_source`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Declared source plant, bulb, tuber, root, cutting, slip, culture or spawn stock; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure purchased stock plus burden-attributed retained stock; declare one species/cultivar and one source form.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg released material
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_propagation_batch`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 5
  - Unit: kg/kg released material
  - Basis: source stock attributed per kg released output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Prepared media/container transfer (`prepared_media_input`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Internal prepared media/container assembly
- Flow property / unit: Mass / kg
- Amount rule: Measure the transfer; record zero for routes without prepared media or included containers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg released material
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_propagation_batch`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg released material
  - Basis: media/container transferred per kg released output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation and culture water (`propagation_water`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Irrigation water selected from foreground source
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Meter delivery or calculate from pump hours and verified flow rate; rainfall is disclosed but not exchanged.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg released material
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_propagation_inputs`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: m3/kg released material
  - Basis: delivered water per kg released output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient amendments (`propagation_nutrients`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Actual mineral, organic and other nutrient products
- Flow property / unit: Mass / kg or compatible nutrient property/unit
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Measure products and retain nutrient composition; one consolidated card only in this process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg released material
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_propagation_inputs`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg released material
  - Basis: nutrient products per kg released output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pest-management and disinfection products (`protection_products`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Actual declared products; UUIDs unresolved until substances and uses are known
- Flow property / unit: Mass / kg
- Amount rule: Measure by substance, concentration, application and target; record zero when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg released material
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_propagation_inputs`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg released material
  - Basis: formulated product use per kg released output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy carriers and electricity (`propagation_energy`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Energy carriers and electricity from meters, invoices and equipment logs
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Attribute carrier-specific energy for pumping, lighting, conditioned space and culture rooms to batch/period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg released material
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_asset_records`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ/kg released material
  - Basis: propagation energy per kg released output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Viable material removed from propagation context (`propagated_material`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Internal species/form-specific viable planting material
- Flow property / unit: Mass / kg
- Amount rule: Measure viable output by batch before conditioning and grading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg released material
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_propagation_batch`
- Range: Provisional or reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg released material
  - Basis: pre-reject output per kg released output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Biological losses and non-viable material (`propagation_rejects`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Species/form-specific material by destination; identity deferred
- Flow property / unit: Mass / kg
- Amount rule: Measure mortality, contaminated cultures, prunings and discarded stock; exclude reworked/retained material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg propagated material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_waste_routes`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg propagated material
  - Basis: losses leaving production
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Reported direct emissions by substance and compartment (`propagation_emissions`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Substance- and compartment-specific elementary flows; UUIDs deferred
- Flow property / unit: Mass / kg
- Amount rule: Calculate only from collected activity and a declared factor method; preserve species and receiving compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg released material
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg released material
  - Basis: screening total only; final exchanges remain specific
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Conditioning, hardening and stabilization (`conditioning_hardening`)

#### Inputs

##### Product flows

###### Propagated material entering conditioning (`propagated_input`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Internal viable material
- Flow property / unit: Mass / kg
- Amount rule: Measure internal transfer by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional or reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg conditioned output
  - Basis: input per kg conditioned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water for conditioning or holding (`conditioning_water`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Process water selected from foreground source
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Measure misting, washing or holding water; record zero when unused.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg conditioned output
  - Basis: water per kg conditioned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning energy (`conditioning_energy`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Energy carriers and electricity from foreground records
- Flow property / unit: Energy / MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Measure ventilation, temperature-control, handling and holding energy; passive routes record zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conditioned material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_asset_records`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: MJ/kg conditioned output
  - Basis: energy per kg conditioned output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned and hardened planting material (`conditioned_material`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Internal species/form-specific conditioned material
- Flow property / unit: Mass / kg
- Amount rule: Measure after the declared hardening/stabilization gate and retain lot identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg propagated input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional or reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg/kg propagated input
  - Basis: conditioned output per kg input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Conditioning rejects and removed matter (`conditioning_rejects`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Material-specific rejects by destination; identity deferred
- Flow property / unit: Mass / kg
- Amount rule: Measure pruning, mortality, drainage/removal loss and discarded matter; retain rework separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg propagated input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_waste_routes`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg propagated input
  - Basis: rejects per kg input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Grading and phytosanitary release (`grading_phytosanitary_release`)

#### Inputs

##### Product flows

###### Material entering release grading (`release_grading_input`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Internal conditioned material, or direct propagated material when conditioning is inactive
- Flow property / unit: Mass / kg
- Amount rule: Measure lot input retaining species/cultivar, form, batch and route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg released material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_release`
- Range: Provisional or reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg released material
  - Basis: grading input per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released plantable grade (`released_plantable_material`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Internal released material of declared species/cultivar and form
- Flow property / unit: Mass / kg
- Amount rule: Measure mass passing declared plantable, viability/establishment, grade and phytosanitary criteria.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg grading input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_release`
- Range: Provisional or reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 1
  - Unit: kg/kg grading input
  - Basis: accepted output fraction
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded or returned living material (`downgraded_returned_material`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Species/form-specific downgraded or returned living material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure by destination; returns retain prior burdens and are not also counted as sold output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grading input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_waste_routes`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg/kg grading input
  - Basis: downgraded/returned material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Non-plantable grading rejects (`grading_waste`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Species/form-specific waste by destination; identity deferred
- Flow property / unit: Mass / kg
- Amount rule: Measure diseased, contaminated, dead or otherwise non-plantable rejects leaving the system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grading input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_waste_routes`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg/kg grading input
  - Basis: waste per kg grading input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Presentation and nursery/propagation hand-off (`presentation_handoff`)

#### Inputs

##### Product flows

###### Released material entering presentation (`released_material_input`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Internal released planting material
- Flow property / unit: Mass / kg
- Amount rule: Measure transfer from release grading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation_handoff`
- Range: Provisional or reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1.2
  - Unit: kg/kg reference product
  - Basis: biological material in delivered item
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protective and presentation materials (`presentation_materials`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Actual packaging, trays, sleeves, boxes, crates or protective materials
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: Measure new materials crossing hand-off; zero for bare hand-off or excluded reusable assets; foreground records select group and UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation_handoff`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: presentation material per delivered kg
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live planting material at declared hand-off (`live_planting_material_reference`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Live planting material of declared species/cultivar and form; UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg on declared as-delivered inclusion and watering/moisture basis.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation_handoff`
- Range: Provisional or reconciliation range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: declared reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Presentation and handling waste (`presentation_waste`)

This card records the identity and quantity requirement for the declared route.

- Selected flow: Material-specific waste by destination; identity deferred
- Flow property / unit: Mass / kg
- Amount rule: Measure damaged packaging, discarded supports and product loss; reusable assets remain assets until discarded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_waste_routes`
- Range: Provisional or reconciliation range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: waste at hand-off
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_reference_product` | all routes | Attribute burdens to accepted declared species/form output; do not average unlike forms without reproducible weights. | `mass-balance-identity` |
| `allocation_rejects_rework` | rejects and returns | Returned material retains accumulated burdens; discarded material is not accepted output; sold downgrade needs declared co-product treatment. | `mass-balance-identity` |
| `allocation_multi_period` | stock, culture banks and assets | Attribute establishment, replacement and period burdens using recorded productive periods and outputs; prevent double attribution. | `mass-balance-identity` |
| `allocation_shared_assets` | greenhouse, irrigation, culture and nursery assets | Use measured service, time, area or documented causal driver consistently across nodes and periods. | `mass-balance-identity` |
| `allocation_included_components` | containers, substrate and carrier | Include crossing components; attribute excluded reusable assets by recorded uses and replacement/loss events. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_media_container_batch` | `media_container_preparation` | ingredients, water, nutrients, output | formulation batch | ingredient/container identities and masses; water; composition; output; losses | recipes, scales and meters | kg; m3 | each batch | all batches | site/formulation | sum and reconcile by formulation | calibration and batch sign-off |
| `cp_propagation_batch` | `managed_propagation` | source and viable output | lot record | species/cultivar; form; source; initial quantity; dates; viable output; mortality | traceability plus mass/count | kg; count | each batch | full production period | site/route | retain lot; count conversion uses measured mass | certificates, scale and lot log |
| `cp_propagation_inputs` | `managed_propagation` | water, nutrients, protection | input/application | identity; composition; quantity; concentration; target; date; water source | invoices, logs, meters | kg; m3 | each event | full batch | production unit | sum actual inputs | invoices and checked logs |
| `cp_energy_asset_records` | all processes | energy/shared assets | meter and asset record | carrier; quantity; factor; period; node; hours/area | meters, invoices, registers | MJ; kWh; h; m2-day | each use/period | full period | site/asset | attribute by documented driver | calibration and reconciliation |
| `cp_conditioning_lot` | `conditioning_hardening` | input, water, energy, output | conditioning lot | input/output; duration; intervention; removed matter | lot, meter and scale | kg; m3; MJ | each lot | all lots | site/route | reconcile lot | release record |
| `cp_grading_release` | `grading_phytosanitary_release` | all grade states | inspection/grading | identity; input; grade; viability; pest examination; phytosanitary action/state; destination | measured grading and inspection | kg; count | each lot | all lots | site | reconcile destinations | inspection/test/traceability |
| `cp_presentation_handoff` | `presentation_handoff` | reference output and materials | dispatch | inclusion flags; materials; net/gross mass; count; destination; time | dispatch and scale | kg; count | each lot | all lots | site | one identity and convention per dataset | dispatch, scale and label |
| `cp_reject_waste_routes` | all processes | rework/reject/waste | disposition | process; state; mass; destination; return node; sale/treatment | mass and disposition record | kg | each event | full period | site | prevent duplicate destination | ticket/receipt/authorization |
| `cp_direct_emissions` | `managed_propagation` | elementary emissions | calculation | activity; substance; factor; basis; compartment; method | approved factor calculation | kg | period | full production period | site/route | substance/compartment specific | method and calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | reference lot | reference kg = measured delivered lot mass under declared inclusion | mass and flags | reference mass | `mass-balance-identity` |
| `calc_count_to_mass` | count records | mass = count × representative measured mean item mass | count; sampled mass | kg | `mass-balance-identity` |
| `calc_batch_yield` | propagation batch | yield = released mass / declared source or batch input | input and released mass | yield ratio | `mass-balance-identity` |
| `calc_grade_balance` | release lot | input = accepted + downgraded + returned + discarded ± measured change | destination masses | balance | `mass-balance-identity` |
| `calc_period_attribution` | multi-period stock/assets | burden × documented output/period driver share | burden, period, driver | attributed burden | `mass-balance-identity` |
| `calc_energy` | energy cards | carrier quantity × declared factor, retaining carrier identity | quantity and factor | MJ | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all lots | Maintain species/cultivar, form, batch and route; reject mixed-form aggregation. | traceability and label |
| `dq_inclusion` | reference mass | State container/substrate/carrier/presentation inclusion, net/gross basis and watering condition. | weighing protocol/specification |
| `dq_plantable_quality` | released output | Document viability/establishment, grade and health criteria and result. | test/inspection/release |
| `dq_phytosanitary` | released output | Retain pest-management traceability, examination, actions and phytosanitary state. | nursery pest-risk records |
| `dq_completeness` | all processes | Cover all active batches, inputs, outputs, rework, downgrade, reject and waste destinations. | reconciled records |
| `dq_temporal` | batches and assets | Align production, inspection, hand-off and attribution periods. | dated records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_single_identity` | reference flow | Fail if species/cultivars or planting-material forms are mixed in one physical item. | `fao-nursery-practice` |
| `validate_reference_uuid` | reference flow | Candidate may retain blank UUID; active/final exchange fails until exact species/form identity is confirmed. |  |
| `validate_inclusion_basis` | reference mass | Fail if component inclusion, net/gross basis or watering condition is missing or inconsistent. | `mass-balance-identity` |
| `validate_plantable_release` | released output | Fail if plantable grade, viability/establishment criterion or phytosanitary state is absent. | `ippc-ispm-36` |
| `validate_flow_sets` | parameterized inputs | Require permitted set/version/group and concrete verified UUID expansion; nutrients remain one set-level no-group card per process. |  |
| `validate_mass_balance` | all transfer nodes | Reconcile accepted, downgraded, returned, waste and measured physical change. | `mass-balance-identity` |
| `validate_rework` | returned material | Require return node and burden history; prohibit simultaneous sale and rework counting. | `mass-balance-identity` |
| `validate_period_assets` | multi-period/shared assets | Require periods, consuming nodes, driver and duplicate-burden check. | `mass-balance-identity` |
| `validate_route_separation` | alternative routes | Fail aggregates lacking reproducible weights and material route records. | `fao-nursery-practice` |
| `validate_bilingual_projection` | PCR record | Require aligned process/row/rule ids, controlled tokens and range meanings. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dataset for one species/cultivar and planting-material form |
| downstream_use | Secondary/background use when identity, gate and inclusion basis match |
| allowed_use | Species/form-specific nursery or propagation modelling at declared hand-off |
| excluded_use | Generic mixed proxy; edible crops, flowers, seeds or downstream cultivation; active use while reference UUID unresolved |
| required_metadata | Identity, form, route, batch, gates, inclusion, net/gross and watering basis, grade, viability, phytosanitary state, geography and route weights |
| required_quality_disclosure | Coverage, measured/calculated quantities, provisional ranges, unresolved identities, allocation drivers, reject destinations and inspection evidence |
| update_trigger | New verified UUID or changed scope, route, inclusion, quality/phytosanitary rule, Flow Set, evidence or foreground performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-nursery-practice` | `official_guidance` | FAO, Nursery practices, https://www.fao.org/4/t0122e/t0122e05.htm | Propagation, media/containers, watering, pruning, grading, hardening and route decomposition |
| `ippc-ispm-36` | `standard` | IPPC, ISPM 36: Integrated measures for plants for planting, https://www.ippc.int/en/publications/integrated-measures-plants-planting/ | Traceability, examination, pest management and phytosanitary release |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass identity applied to foreground records | Reconciliation, calculation and allocation rules |
