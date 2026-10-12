---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.forage-products-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Forage products, n.e.c.

## 1. Scope and Applicability

This PCR applies to one explicitly named crop or forage product produced for forage within CPC 01919, including forage beet, carrot, turnip or sorghum, clover, kale, lupines, sainfoin, vetches, hay or forage rutabaga. The boundary begins with crop establishment and managed production, includes harvest, and may extend through the first wilting, drying, chopping, baling, pelleting, cleaning or grading handoff.

Exclude maize forage, alfalfa, cereal straw or husks, crops not grown for forage, compound or formulated feed, grazing services and feed manufacture after first conditioning. Each foreground package represents one named product and one declared handoff state.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.forage-products-n-e-c |
| classification_refs | CPC 3.0: 01919 (Forage products, n.e.c.); mapping relation: narrower |
| covered_products | One explicitly named crop or product produced for forage at harvest or first-conditioning handoff |
| excluded_products | Maize forage; alfalfa; cereal straw and husks; non-forage crops; compound/formulated feed; grazing service; later feed manufacture |
| representative_product | One named forage product at declared moisture or dry-matter state |
| production_route | establishment and managed production → harvest/capture → optional first conditioning → handoff |
| market_state | fresh harvested forage or declared wilted, dried, chopped, baled, pelleted, cleaned or graded first-conditioned forage |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One named forage product at the selected handoff gate |
| How much | 1 kg net product |
| How well | Declare species/product, plant part, form, grade, moisture or dry matter, and conditioning state |
| How long or cycle | Declared field and crop period; retain period linkage for perennial or multi-period inputs |
| reference_flow_link | harvested_forage; conditioned_forage |
| reference_flow_selection | exactly_one_declared_terminal_output |
| reference_selection_required | actual_route; declared_gate; product_state; output_row_id |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Named forage product (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/product; plant part; harvested form; moisture or dry matter; grade; crop period; production system; conditioning state; handoff gate |

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Normalize only the selected terminal output to the reference quantity; earlier outputs remain measured internal transfers when later processes are included. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass (UUID unresolved) | kg | Use net mass after tare and declare the moisture or dry-matter basis. |
| `moisture_conversion` | fresh, wilted and dried products | Mass | kg | Convert wet and dry basis only with paired moisture, test method and formula. |
| `area_time` | land occupation | Area*time | m2·year | Calculate from field area and actual occupation duration and normalize by output from the same crop period. |
| `transport_work` | road freight | Transport work | t·km | Multiply net transported tonnes by loaded kilometres and disclose empty-return treatment separately. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The named forage crop on a declared field at establishment or the beginning of the reporting crop period |
| starting_condition_role | Foreground start for crop production; upstream inputs use separate datasets |
| product_classification_scope | One named CPC 01919 forage product without crossing excluded neighbouring classes |
| recursive_input_rule | When same-category forage enters establishment or conditioning, record it as a delivered upstream product dataset distinguished by source, state and gate; do not recursively rebuild the same product system |
| upstream_dataset_requirement | Seed, fertilizer, crop protection, energy, water and service inputs use independent upstream datasets appropriate to their supply boundary |
| disclosure | Declare species/product, field, crop period, production system, harvest method, moisture, form, grade, first-conditioning operations and selected gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_named_product | Product scope | Model one named forage species/product and plant part at one declared state and gate. Exclude maize forage, alfalfa, cereal straw or husks, crops not grown for forage, compound feed and grazing services. | unsd-cpc-01919 |
| boundary_gate_choice | Reference gate | Select either harvest handoff or the first declared conditioning handoff. If conditioning is selected, harvested forage is an intermediate and only the conditioned product is the reference output. | fao-grassland-forage |
| boundary_conditional_conditioning | Primary conditioning | Include only operations actually performed before the selected gate; identify the raw input state, conditioned output state, service inputs, residues and rejects. | fao-grassland-forage |
| boundary_periods_assets | Periods and shared assets | Retain establishment, annual or multi-year crop periods and shared machinery or facility use; attribute each burden once to its actual consuming node and period. | iso-14044-allocation |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| forage_crop_production | Managed forage crop establishment and production | required | Always included for cultivated forage; field operations end at the harvest-ready crop handoff. | Establish and manage the named forage crop and report the harvest-ready biomass. | Measured harvest-ready forage mass by field and crop period. |
| forage_harvest | Forage harvest and field capture | required | Included for mowing, cutting, lifting or other removal from the production context. | Separate harvest responsibility and reconcile collected product, field residue and loss. | Net named forage product leaving harvest. |
| primary_forage_conditioning | Optional first forage conditioning | conditional | Include only when wilting, drying, chopping, baling, pelleting, cleaning or grading occurs before the selected gate. | Transform the harvested forage into one declared first-conditioned state without including feed formulation. | Net conditioned forage at the declared moisture, form and grade. |

### Process: Managed forage crop establishment and production (`forage_crop_production`)

Establish and manage the named forage crop and report the harvest-ready biomass.

#### Inputs

##### Product flows

###### Seed or propagation material (`propagation_material`)

Record seed, crowns, cuttings or other planting material transferred into the named forage crop.

- Selected flow: Named-crop propagation material; UUID unresolved until species and form are known
- Flow property / unit: Mass / kg or verified count unit
- Amount rule: Measured purchased or internally transferred planting material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg reference forage, retaining field and crop-period linkage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_propagation`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference forage
  - Basis: Broad screening interval for planting material normalized to reference forage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient amendments (`nutrient_inputs`)

Use this single card for every mineral fertilizer, organic fertilizer and nutrient amendment applied in this process; retain each actual product and nutrient grade in foreground records.

- Selected flow: Actual fertilizer and nutrient-supply products expanded from field records
- Flow property / unit: Product-specific property and native unit
- Amount rule: Measured mass by actual product, composition, field, date and crop period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per field and crop period, then normalized to 1 kg reference forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrients`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg product/kg reference forage
  - Basis: Broad screening interval for total nutrient products
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop protection products (`crop_protection_inputs`)

Record only products actually applied, with trade product, active ingredient, treated area and date.

- Selected flow: Actual crop-protection product; UUID unresolved until product identity is known
- Flow property / unit: Product-specific property and native unit
- Amount rule: Applied amount reconciled to purchase and application logs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg reference forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg product/kg reference forage
  - Basis: Broad screening interval for applied crop-protection products
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Record water supplied for irrigation; rainfall is contextual information and is not a product-flow input.

- Selected flow: Irrigation water selected from the actual source record
- Flow property / unit: Volume / m3 preferred
- Amount rule: Metered or supplier-recorded irrigation volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per hectare and crop period, normalized to reference forage output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 15000
  - Unit: m3/ha·crop period
  - Basis: Irrigation-volume screening interval
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy carriers and utilities (`production_energy`)

Record actual electricity and fuels used for cultivation, irrigation pumping and field operations.

- Selected flow: Energy carriers actually consumed in forage production
- Flow property / unit: Carrier-specific property and native unit
- Amount rule: Metered electricity and reconciled fuel consumption by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per crop period, normalized to 1 kg reference forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_energy`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 3
  - Unit: kWh-equivalent/kg reference forage
  - Basis: Broad production-energy screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Agricultural land occupation (`land_occupation`)

Calculate occupied area and time for the declared crop period.

- Selected flow: Agricultural land occupation elementary flow; UUID unresolved
- Flow property / unit: Area*time / m2·year
- Amount rule: Field area multiplied by occupation duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per crop period and normalized reference output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_history`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 1000
  - Unit: m2·year/kg reference forage
  - Basis: Broad area-time screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Land transformation (`land_transformation`)

Record only evidenced land-cover conversion attributable to the declared production system.

- Selected flow: Land transformation elementary flow by prior and new cover; UUID unresolved
- Flow property / unit: Area / m2
- Amount rule: Mapped transformed area allocated once over the declared attribution period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference forage over declared attribution period.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_history`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: m2/kg reference forage
  - Basis: Broad land-transformation screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvest-ready forage biomass (`harvest_ready_forage`)

Record the named crop and plant part at the handoff to harvest, without also counting it as the final reference product.

- Selected flow: Named harvest-ready forage biomass; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured net harvest-ready mass at recorded moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per field and crop period.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 100
  - Unit: kg/m2 crop area
  - Basis: Broad route screen for harvest-ready biomass yield
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Removed weeds and non-target biomass (`production_residue_removed`)

Record biomass removed from the field and classify its actual destination.

- Selected flow: Removed non-target biomass; UUID unresolved
- Flow property / unit: Mass / kg dry matter preferred
- Amount rule: Measured or sampled removed biomass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg harvest-ready forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg harvest-ready forage
  - Basis: Broad residue screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct soil nitrous oxide (`soil_n2o`)

Calculate direct N2O only with the selected inventory method and documented nitrogen activity data.

- Selected flow: Nitrous oxide to air; UUID unresolved pending exact compartment verification
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculated from collected nitrogen inputs and the declared method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrients`
- Sources: `ipcc-2019-managed-soils`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg N2O/kg reference forage
  - Basis: Broad method-output QA screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Forage harvest and field capture (`forage_harvest`)

Separate harvest responsibility and reconcile collected product, field residue and loss.

#### Inputs

##### Product flows

###### Harvest-ready forage batch (`harvest_ready_batch`)

Transfer the production output into harvest under the same species, field, crop-period and lot identity.

- Selected flow: Named harvest-ready forage biomass; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Inter-process transferred net mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per harvest lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 1000000
  - Unit: kg/harvest lot
  - Basis: Lot-size screening interval
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest machinery energy (`harvest_energy`)

Record electricity or fuel consumed by mowing, cutting, lifting, gathering or baling performed within harvest.

- Selected flow: Energy carriers actually consumed by harvest equipment
- Flow property / unit: Carrier-specific property and native unit
- Amount rule: Metered or reconciled energy by harvest operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg harvested forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh-equivalent/kg harvested forage
  - Basis: Broad harvest-energy screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested named forage product (`harvested_forage`)

Record this intended output as the accepted named forage at the harvest gate, or as an intermediate when primary conditioning is the selected gate.

- Selected flow: Named harvested forage product; UUID unresolved
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Measured net accepted mass at declared moisture

- Amount rule: 1 kg when selected as reference output; otherwise use measured internal-transfer quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per harvest lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg harvest-ready batch
  - Basis: Harvest mass-balance QA range
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Lower-grade saleable forage (`lower_grade_forage`)

Record this intended output separately only when the lower grade has an evidenced intended use and handoff.

- Selected flow: Named lower-grade forage product; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per harvest lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_disposition`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg harvest-ready batch
  - Basis: Mass-fraction QA guardrail
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest rejects and field loss (`harvest_rejects`)

Record rejected, dropped or spoiled material and its retained, recovered or discarded destination.

- Selected flow: Harvest reject or loss material; UUID unresolved
- Flow property / unit: Mass / kg dry matter preferred
- Amount rule: Measured or sampled mass by exclusive destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg harvest-ready batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_disposition`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg harvest-ready batch
  - Basis: Mass-fraction QA guardrail
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Forage crop residue returned to soil (`residue_to_soil`)

Record crop biomass deliberately left or returned to the field, without treating it as a saleable product.

- Selected flow: Biogenic crop residue to soil; UUID unresolved
- Flow property / unit: Mass / kg dry matter
- Amount rule: Sampled dry matter partitioned to the field destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg harvested forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg dry matter/kg harvested forage
  - Basis: Broad residue-return screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Optional first forage conditioning (`primary_forage_conditioning`)

Transform the harvested forage into one declared first-conditioned state without including feed formulation.

#### Inputs

##### Product flows

###### Raw harvested forage batch (`raw_forage_batch`)

Receive the harvested product with species, plant part, moisture, form and lot identity preserved.

- Selected flow: Named harvested forage product; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured receiving mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 1000000
  - Unit: kg/conditioning batch
  - Basis: Batch-size screening interval
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning process water (`conditioning_water`)

Record fresh water used for cleaning, wetting or other declared conditioning; exclude recirculated water from fresh input.

- Selected flow: Process water selected from the actual source record
- Flow property / unit: Volume / m3 preferred
- Amount rule: Metered fresh water by conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg conditioned forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/t conditioned forage
  - Basis: Broad process-water screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning energy carriers and utilities (`conditioning_energy`)

Record energy for wilting support, drying, chopping, baling, pelleting, cleaning or grading that actually occurs.

- Selected flow: Energy carriers actually consumed in first conditioning
- Flow property / unit: Carrier-specific property and native unit
- Amount rule: Metered or reconciled consumption by equipment and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg conditioned forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh-equivalent/kg conditioned forage
  - Basis: Broad conditioning-energy screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field-to-conditioner road transport service (`field_transport`)

Record purchased road freight only when field-to-conditioner transport is inside the selected boundary; avoid duplicate own-account fuel.

- Selected flow: Road freight transport service resolved from route records
- Flow property / unit: Transport work / t·km
- Amount rule: Net transported tonnes multiplied by loaded kilometres
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: Per raw forage lot.

- Normalization basis: per declared reference flow
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: t·km/t raw forage
  - Basis: Loaded road-distance screen
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### External wastewater treatment service (`wastewater_treatment`)

Record an external treatment service only for wastewater transferred to a documented provider.

- Selected flow: Wastewater treatment service resolved from provider and route records
- Flow property / unit: Volume / m3 or provider-native service unit
- Amount rule: Treated quantity reconciled to generated wastewater and invoice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: Per 1 kg conditioned forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/t conditioned forage
  - Basis: Treatment-service QA screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-conditioned reference forage (`conditioned_forage`)

Record this intended output as one named forage product at the declared moisture, form, grade and primary-conditioning gate.

- Selected flow: Named first-conditioned forage product; UUID unresolved
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Measured net accepted mass at declared moisture

- Amount rule: 1 kg when selected as reference output; otherwise use measured internal-transfer quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg raw forage input
  - Basis: Conditioning mass-balance QA range
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Lower-grade conditioned forage (`conditioned_lower_grade`)

Report this intended output as a lower grade separately from rejected or waste material.

- Selected flow: Named lower-grade conditioned forage; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_disposition`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg raw forage input
  - Basis: Mass-fraction QA guardrail
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Conditioning rejects and losses (`conditioning_rejects`)

Record contaminants, spoiled biomass, fines and off-spec material by exclusive destination.

- Selected flow: Conditioning reject material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg raw forage input.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_disposition`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg raw forage input
  - Basis: Mass-fraction QA guardrail
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning wastewater (`conditioning_wastewater`)

Record generated wastewater separately from the purchased treatment service and identify its destination.

- Selected flow: Forage-conditioning wastewater; UUID unresolved
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: Metered or calculated generated quantity by batch and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg conditioned forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/t conditioned forage
  - Basis: Wastewater QA screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Conditioning dust to air (`conditioning_dust`)

Record only measured or method-calculated particulate emissions, preserving size fraction and receiving compartment.

- Selected flow: Particulate matter to air by verified size fraction; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured or method-calculated emitted particulate mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg conditioned forage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_energy`

- Range: Provisional route-screening interval; replace with product-, site- and technology-specific evidence before reviewed or active use
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg conditioned forage
  - Basis: Broad particulate-emission screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_outputs | Multiple intended outputs | Use subdivision first. If shared burdens remain, use a documented causal physical relation where defensible; otherwise document the selected allocation basis and sensitivity. Waste and field residue without intended product function receive no co-product allocation. | iso-14044-allocation |
| allocation_periods | Establishment and productive periods | Attribute establishment or multi-year burdens across declared productive outputs using recorded production history or an explicit forecast, and prevent duplicate attribution to each year. | iso-14044-allocation |
| allocation_rejects | Lower grades, rejects and rework | Trace each lot to accepted product, lower grade, rework, recovery, soil return or discard. Count accepted material at its final handoff and include rework inputs once. | iso-14044-allocation |
| allocation_shared_assets | Shared fields, machinery and conditioning assets | Prefer metered use or operating time; otherwise use a documented physical driver. Enumerate consuming nodes and periods and prevent duplicate burdens. | iso-14044-allocation |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_propagation | forage_crop_production | propagation_material | supplier or transfer record | species, variety, form, amount, date, field, source | Reconcile invoices and internal transfers; Raw aggregation and attribution: sum by product, field and crop period | kg or count | each planting | all establishment events | declared field | per declared reference flow | invoice, lot and unit checks |
| cp_nutrients | forage_crop_production | nutrient_inputs; soil_n2o | application log and invoice | product, mass, nutrient grade, N form, field, date, crop period | Reconcile purchases, application logs and composition; Raw aggregation and attribution: retain each product under one consolidated card and calculate nutrients | kg product and kg nutrient | each application | all crop periods | declared fields | per declared reference flow | invoice, application calibration and method record |
| cp_crop_protection | forage_crop_production | crop_protection_inputs | application and supplier record | product, active ingredient, amount, area, date, target | Reconcile applied quantity with purchases; Raw aggregation and attribution: sum actual applications by lot and period | kg product | each application | all crop periods | declared fields | per declared reference flow | label, invoice and operator log |
| cp_irrigation | forage_crop_production | irrigation_water | meter or supplier record | source, volume, date, area, field, crop period | Read calibrated meter or reconcile invoices; Raw aggregation and attribution: sum by field and period; normalize to output | m3 | each event or billing period | each crop period | field and water source | per declared reference flow | meter calibration and invoice |
| cp_production_energy | forage_crop_production | production_energy | meter, receipt and equipment log | carrier, amount, unit, operation, date, field, shared use | Reconcile energy and operating records; Raw aggregation and attribution: sum by carrier; allocate shared use by measured operation | native carrier unit | each operation | each crop period | site and equipment | per declared reference flow | meter, invoice and equipment log |
| cp_land_history | forage_crop_production | land_occupation; land_transformation | field and geospatial record | boundary, area, dates, prior cover, crop period | Reconcile maps with dated land evidence; Raw aggregation and attribution: calculate area-time and allocate transformation once | ha, ha·year | each crop period and conversion | full attribution period | declared fields | per declared reference flow | map, register and dated evidence |
| cp_harvest_lot | forage_crop_production; forage_harvest | harvest_ready_forage; harvest_ready_batch; harvested_forage | lot and scale record | species, plant part, field, dates, gross, tare, net, moisture, destination | Weigh each lot and match handoffs; Raw aggregation and attribution: reconcile inter-process transfers without duplicate final output | kg and moisture | each lot | each harvest | field and receiving node | per declared reference flow | scale calibration, lot and moisture record |
| cp_residues | forage_crop_production; forage_harvest | production_residue_removed; residue_to_soil | sample and disposition record | biomass type, wet/dry mass, field, period, destination | Sample or weigh and document destination; Raw aggregation and attribution: partition among soil return, intended output and removal | kg dry matter | each crop period | all included periods | field and residue type | per declared reference flow | sampling, dry-matter and destination evidence |
| cp_harvest_energy | forage_harvest | harvest_energy | fuel, meter and machinery log | carrier, amount, equipment, operation, field, lot | Reconcile consumption to harvest lots; Raw aggregation and attribution: sum by carrier and normalize to accepted output | native carrier unit | each operation | each harvest | equipment and field | per declared reference flow | invoice, meter and machinery log |
| cp_grade_disposition | forage_harvest; primary_forage_conditioning | lower_grade_forage; harvest_rejects; conditioned_lower_grade; conditioning_rejects | grade, scale and destination record | identity, grade, mass, moisture, intended use, destination, lot | Inspect and weigh each grade and destination; Raw aggregation and attribution: mutually exclusive accepted, lower grade, rework and waste partition | kg | each lot | each harvest or conditioning campaign | lot and handoff | per declared reference flow | grade sheet, scale and disposition evidence |
| cp_conditioning_batch | primary_forage_conditioning | raw_forage_batch; conditioned_forage | receiving and output lot record | input/output mass, moisture, species, form, grade, route, lot | Match intake and output lots and measure moisture; Raw aggregation and attribution: reconcile products, rejects, removed water and loss | kg and moisture | each batch | included operations | conditioning site | per declared reference flow | calibrated scale, moisture and lot balance |
| cp_conditioning_water | primary_forage_conditioning | conditioning_water | meter or batch record | source, fresh volume, recirculation, batch, date | Meter or reconcile tank and supplier records; Raw aggregation and attribution: separate fresh from recirculated water | m3 | each batch | wet-conditioning periods | conditioning site | per declared reference flow | meter/tank calibration and batch log |
| cp_conditioning_energy | primary_forage_conditioning | conditioning_energy; conditioning_dust | meter, fuel and equipment log | carrier, amount, equipment, operation, batch, time, dust measurement | Reconcile measured energy and any emission method to batch; Raw aggregation and attribution: sum by carrier and operation; preserve particulate fraction | native carrier unit and kg dust | each batch | conditioning campaign | site and equipment | per declared reference flow | meter, invoice, equipment and sampling record |
| cp_transport | primary_forage_conditioning | field_transport | waybill and route record | mass, origin, destination, loaded distance, vehicle, return trip | Reconcile route and mass to lot; Raw aggregation and attribution: tonnes multiplied by loaded kilometres | t, km and t·km | each transfer | included field-to-site routes | route and lot | per declared reference flow | waybill, route and scale record |
| cp_wastewater | primary_forage_conditioning | wastewater_treatment; conditioning_wastewater | meter, discharge and provider record | volume, batch, operation, destination, provider, route | Meter or reconcile generated and treated quantities; Raw aggregation and attribution: reconcile generation, reuse, discharge and treatment | m3 | each batch or billing period | wet-conditioning periods | site and provider | per declared reference flow | meter, invoice and treatment evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_reference | All processes | Divide each process exchange by net reference-product mass at the selected gate while retaining crop-period and lot linkage. | Process amount, net reference mass, gate, crop period and lot | Exchange per 1 kg reference forage | mass-balance-identity |
| convert_dry_matter | Fresh, wilted and dried forage | Dry matter = measured wet mass × (1 − moisture fraction on wet basis); inverse conversion requires the target moisture. | Wet mass, moisture test and basis | Dry mass or converted product mass | fao-grassland-forage |
| calculate_n2o | Direct soil N2O | Apply the declared IPCC managed-soils equation and factor to collected N activity data; convert N2O-N to N2O when required by the method. | N inputs, factor, tier, soil and climate fields | kg direct N2O per reference flow | ipcc-2019-managed-soils |
| reconcile_lot | Harvest and conditioning | On one moisture basis, input equals intended outputs plus lower grades, rejects, residues, removed water and measured loss. | Lot masses, grades, moisture and destinations | Reconciled mutually exclusive lot balance | mass-balance-identity |
| road_transport_work | Field-to-conditioner transport | Transport work = net transported tonnes × loaded route kilometres; apply return treatment only when evidenced. | Net mass, loaded distance and return record | t·km by lot | iso-14044-allocation |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_gate | Reference product | Record one species/product, plant part, form, moisture/dry matter, grade, crop period, production system and exclusive gate. | Lot identity, product description and reviewed flow evidence |
| period_coverage | Production periods | Include establishment and productive periods when relevant and retain period-specific yield and attribution records. | Field register, planting/harvest dates and yield history |
| input_completeness | All process inputs | Reconcile propagation material, one consolidated nutrient-card detail, protection products, water, energy, transport and treatment inputs to primary records. | Invoices, logs, meters and concrete flow identity verification|
| output_reconciliation | All outputs | Partition accepted product, lower grades, rejects, residues, wastewater and losses into mutually exclusive destinations. | Scale, grade, moisture and disposition records |
| range_replacement | Provisional ranges | Use reasoned ranges only for screening and replace them with product-, region-, technology- and gate-specific evidence before reviewed or active use. | Reviewed records or external quantitative evidence |
| unresolved_identity | UUID-bearing flows | Retain blank UUIDs until one exact product, property, unit group and context are confirmed; do not substitute compound feed, alfalfa or grazing-service identities. | Identity lookup and detail-read audit record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | Reference product | Require one named forage species/product, plant part or harvested portion, form, moisture or dry-matter state, crop period, grade and selected gate. | unsd-cpc-01919 |
| validate_exclusions | Category boundary | Reject maize forage, alfalfa, cereal straw/husks, non-forage crops, compound feed, mixtures and grazing-service inventories. | unsd-cpc-01919 |
| validate_gate | Process graph | Require one exclusive reference gate and reconcile every inter-process handoff without counting the same material as both intermediate and final product. | fao-grassland-forage |
| validate_mass_moisture | Harvest and conditioning lots | Reconcile inputs, products, lower grades, residues, wastewater, removed moisture and losses on a consistent moisture or dry-matter basis; investigate output above input. | mass-balance-identity |
| validate_flow_identitys | Product inputs | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| validate_periods | Crop periods | Reconcile establishment and productive periods and ensure shared assets and multi-period burdens are attributed once. | iso-14044-allocation |
| validate_destinations | Grades, rejects and residues | Require mutually exclusive intended-product, lower-grade, rework, recovery, soil-return and waste destinations; do not count rejects as accepted product. | iso-14044-allocation |
| validate_n2o | Direct soil N2O | Require documented nitrogen activity data, selected IPCC equation, factor and tier; keep direct and indirect pathways separate and avoid double counting. | ipcc-2019-managed-soils |
| validate_conditioning | Conditional conditioning routes | Confirm each declared wilting, drying, chopping, baling, pelleting, cleaning or grading operation occurred and has inputs, output state, losses and handoff recorded; omit inactive routes. | fao-grassland-forage |
| validate_ranges | All inventory cards | Check each Range against its amount rule, unit, denominator and route condition. Treat reasoned estimates as replaceable screening values before reviewed or active use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Primary foreground production and first-handoff dataset for one named forage product |
| downstream_use | secondary_dataset for foreground process packages and lifecyclemodel projections; background_dataset only when boundary and representativeness are suitable |
| allowed_use | One named CPC 01919 forage at declared site, crop period, production system, moisture/dry matter, form and gate |
| excluded_use | Average of all forage; maize forage; alfalfa; straw/husks; compound feed; grazing service; later feed manufacture |
| required_metadata | species/product; plant part; variety when known; field and geography; crop period; production and harvest route; moisture/dry matter; form and grade; gate; input records; conditioning operations; attribution method |
| required_quality_disclosure | UUID gaps; measurement and source coverage; period attribution; Range evidence tier; moisture and mass balance; shared-asset allocation; emission method; site and year representativeness |
| update_trigger | New product or route; changed gate, form or moisture state; new verified reference identity; updated crop-period, attribution, emission or conditioning evidence; replacement of provisional Ranges with reviewed evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-01919 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, code 01919, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope and named examples |
| fao-grassland-forage | handbook | FAO, Grassland Index and forage conservation resources, https://www.fao.org/4/x7660e/x7660e00.htm | Forage production, harvest and first-conservation route structure; moisture and dry-matter reporting prompts |
| ipcc-2019-managed-soils | official_guidance | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct N2O calculation and nitrogen activity data |
| iso-14044-allocation | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | Subdivision, co-product attribution and shared burden decisions |
| mass-balance-identity | method_factor | Physical mass-balance identity on a consistent moisture basis | Lot reconciliation and QA; not a product-specific yield factor |
