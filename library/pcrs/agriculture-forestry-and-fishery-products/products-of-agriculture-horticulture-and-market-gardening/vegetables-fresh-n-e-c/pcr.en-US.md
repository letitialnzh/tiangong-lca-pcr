---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetables-fresh-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Vegetables, fresh, n.e.c.

## 1. Scope and Applicability

This PCR applies to whole vegetables sold fresh at the declared farm-gate, packhouse, or equivalent first-market hand-off when the vegetable is not covered by a narrower named CPC 3.0 vegetable category. It is a residual category: the data package must first test the species, cultivar, edible part, and market route against the narrower CPC categories and use this PCR only when none applies.

The concrete data package shall declare the species or cultivar, edible part, production system, geography, crop cycle, harvest condition, and declared hand-off. Open-field, protected-cropping, and mixed-route production may be represented when the route is explicitly qualified. The PCR does not prescribe one crop technology or one vegetable species.

This PCR excludes processed, cooked, frozen, salted, pickled, fermented, dried, powdered, canned, juiced, or otherwise preserved vegetables; seed, planting material, and nursery products; animal feed or waste products; and a vegetable that belongs to a narrower named CPC category. Distribution beyond the declared first-market hand-off is outside the default boundary unless separately declared.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetables-fresh-n-e-c` |
| classification_refs | CPC 3.0:01290; exact residual category reference |
| covered_products | Whole fresh vegetables, n.e.c., that remain outside narrower named CPC vegetable categories; species, cultivar, edible part, route, and market state must be declared |
| excluded_products | Narrower CPC vegetable categories; processed, frozen, salted, pickled, fermented, dried, powdered, canned, juiced, preserved, seed, planting-material, feed, and waste products |
| representative_product | The declared species or cultivar of a whole fresh residual-category vegetable at the first declared market hand-off |
| production_route | Managed crop production followed by harvest; optional primary conditioning, grading or sorting, and packaging or presentation when they occur before the declared hand-off |
| market_state | Fresh, whole, marketable product at the declared farm-gate, packhouse, or equivalent first-market hand-off; storage and distribution qualifiers are required when included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | 1 kg of declared, marketable whole fresh vegetable in the CPC 01290 residual category |
| How much | 1 kg net product at the declared first-market hand-off |
| How well | Species or cultivar, edible part, grade or marketability state, production route, geography, crop cycle, and conditioning or packaging state are declared |
| How long or cycle | One complete crop cycle and the associated harvest campaign, with the reporting period stated |
| reference_flow_link | `reference_fresh_vegetable` output from the last included process |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fresh vegetables `b9e1edf7-c890-448d-99c3-167460588c33` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species or cultivar; edible part; production system; production geography; crop cycle or harvest period; declared hand-off; fresh and whole state; grade or marketability; inclusion or exclusion of conditioning and packaging; storage duration when applicable |
| Binding | fixed |


When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `rule_reference_mass_basis` | reference product and all normalized outputs | Mass | kg | Report the reference product as net fresh mass at the declared hand-off. Record gross mass, package mass, and field or ungraded mass separately when they are used to derive the net reference amount. |
| `rule_water_volume_conversion` | irrigation and conditioning water | Volume or Mass | m3 or kg | Preserve the measured source unit and document density or meter conversion when converting water records to the selected mass or volume basis. |
| `rule_nutrient_basis_declaration` | fertilizer or soil amendment input | Mass of product and declared nutrient basis | kg product and kg nutrient | Record the actual product applied and its declared N, P, K, or organic-nutrient basis; do not infer a product class from the residual vegetable category. |
| `rule_crop_cycle_time_index` | crop production inputs and outputs | Mass, energy, or substance amount | row-specific unit | Index every record to the same crop cycle and reporting period before normalization to 1 kg reference product. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed crop production begins with the declared land parcel or production unit prepared for the crop cycle, plus purchased or transferred inputs entering that unit |
| starting_condition_role | Foreground production boundary for the residual fresh-vegetable category |
| product_classification_scope | CPC 3.0:01290 only after narrower named CPC vegetable categories have been excluded by species, edible part, and route review |
| recursive_input_rule | A same-category vegetable input transferred between foreground units is recorded as a product input with source identity, quantity, state, and transfer boundary; its upstream production is not recursively rebuilt inside the receiving PCR unless explicitly included as a linked dataset |
| upstream_dataset_requirement | Use a declared upstream dataset for seed or planting material, purchased nutrients or amendments, energy, water supply, packaging, and any transferred product input when those activities are outside the foreground boundary |
| disclosure | Declare the starting land or production-unit state, route, species or cultivar, crop cycle, inclusion of conditioning and packaging, and all transfers, losses, and output destinations needed to reconcile the reference product |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `rule_residual_category_gate` | product identity and reference flow | Confirm that no narrower named CPC vegetable category applies before selecting this PCR; retain the species, cultivar, edible part, and route decision in dataset metadata. | `iso-14044-2006` |
| `rule_first_market_handoff` | system boundary | End the default foreground boundary at the declared first-market hand-off of fresh whole product. Include post-harvest conditioning or packaging only when it occurs before that hand-off and is recorded as an included process. | `iso-14040-2006`; `fao-fresh-produce-hygiene-2003` |
| `rule_upstream_input_linkage` | purchased and transferred inputs | Link upstream input datasets at the point where the input crosses the foreground boundary; do not hide an upstream product system inside a local activity record. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_crop_production` | Managed crop production | required | Always included for the declared crop cycle | Produces the standing crop and records crop management inputs and environmental exchanges | Per crop cycle, normalized to 1 kg reference product |
| `p_harvest_capture` | Harvest and field capture | required | Always included for removal of the declared product from the production unit | Separates the harvested fresh vegetable from the standing crop and records harvest operations and field losses | Per harvest campaign, normalized to 1 kg reference product |
| `p_primary_conditioning` | Primary conditioning | conditional | Include when washing, trimming, cooling, cleaning, or another first conditioning step changes the declared product state before hand-off | Converts the harvested state to the declared conditioned state | Per conditioning batch, normalized to 1 kg reference product |
| `p_grading_sorting` | Grading and sorting | conditional | Include when product is classified into two or more grades or destinations before hand-off | Reconciles marketable, secondary, rejected, and loss states | Per grading batch, normalized to 1 kg reference product |
| `p_packaging_presentation` | Packaging and presentation | conditional | Include when packaging, labelling, or presentation is inside the declared boundary before hand-off | Converts the selected product state to the packaged or presented hand-off state | Per packaged batch, normalized to 1 kg reference product |

### Process: Managed crop production (`p_crop_production`)

#### Inputs

##### Product flows

###### Seed or planting material (`crop_seed_or_propagule`)

Seed, transplants, or other planting material crosses the crop-production boundary when supplied to establish the declared crop cycle.

- Selected flow: Declared seed or planting material
- Flow property / unit: Mass / kg
- Amount rule: Actual mass or count converted to mass with the declared material basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-crop-production-guidance-2016`

###### Irrigation water (`crop_irrigation_water`)

Irrigation water is recorded when water is withdrawn or supplied to the crop-production unit for the declared cycle.

- Selected flow: Irrigation water
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Amount rule: Metered or documented irrigation application, including declared source and conveyance losses when inside the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-crop-production-guidance-2016`

###### Agricultural nutrient and fertilizer inputs (`p_crop_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-fertilizer-code-of-conduct-2019`

###### Crop-production electricity (`crop_electricity`)

Electricity is recorded for pumps, protected-cropping equipment, lighting, controls, or other crop-production equipment inside the boundary.

- Selected flow: Electricity supply
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Amount rule: Metered electricity or supplier invoice allocation to the declared crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `iso-14044-2006`

###### Crop-production fuel (`crop_fuel`)

Fuel is recorded for tractors, pumps, heating, or other mobile or stationary crop-production equipment inside the boundary.

- Selected flow: Agricultural fuel supply or `stationary-combustion-fuel`
- Flow property / unit: Mass or Energy / kg or MJ
- Amount rule: Fuel issue, meter, or invoice record allocated to the declared crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `iso-14044-2006`

##### Waste flows

###### Crop-production input packaging waste (`crop_input_packaging_waste`)

Packaging discarded from crop inputs is recorded when it crosses the foreground boundary as a separately managed waste stream.

- Selected flow: Non-hazardous input packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste or supplier-packaging reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-food-loss-waste-2019`

##### Elementary flows

###### Land occupation (`crop_land_occupation`)

Land occupation is recorded for the area and duration used by the declared crop cycle.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Declared occupied area multiplied by the crop-cycle duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_area_yield`
- Sources: `fao-crop-production-guidance-2016`

#### Outputs

##### Product flows

###### Standing crop hand-off (`standing_crop_output`)

The standing crop output is the declared crop state handed to harvest and is not yet the marketable reference flow.

- Selected flow: Declared standing residual-category vegetable crop
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Reconciled field output before harvest losses and downstream conditioning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_area_yield`
- Sources: `fao-crop-production-guidance-2016`

##### Waste flows

###### Uncollected crop residue (`crop_residue_output`)

Crop residue left in the field or removed from the crop-production unit is recorded by destination and treatment when material to the boundary.

- Selected flow: Crop residue or production loss waste
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Field residue and non-harvested biomass from crop-yield reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_area_yield`
- Sources: `fao-food-loss-waste-2019`

##### Elementary flows

###### Soil phosphate loss (`crop_soil_phosphate_loss`)

Phosphate released to soil is recorded when the selected method identifies a loss pathway from crop nutrient management.

- Selected flow: Soil phosphate emission
- Flow property / unit: Mass / kg P
- Amount rule: Apply the declared nutrient-loss method to collected P input and retention records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_inputs`
- Sources: `ipcc-2019-refinement-agriculture`

###### Soil nitrogen loss (`crop_soil_nitrogen_loss`)

Nitrogen released to soil is calculated from the declared nutrient application and site or method factors selected for the dataset.

- Selected flow: Soil nitrogen emission
- Flow property / unit: Mass / kg N
- Amount rule: Apply the declared calculation method to crop-cycle nutrient inputs and retained crop nitrogen
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_inputs`
- Sources: `ipcc-2019-refinement-agriculture`

###### Direct soil nitrous oxide (`crop_direct_n2o`)

Direct soil nitrous oxide is calculated from the applicable nutrient-input method and declared management records.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the selected IPCC-compatible direct-emission factor to the declared N input and document factor selection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_inputs`
- Sources: `ipcc-2019-refinement-agriculture`

###### Field ammonia and nitrogen oxides (`crop_reactive_n_emissions`)

Ammonia and nitrogen-oxide releases are recorded separately when the selected method or site records support them.

- Selected flow: one identified air emission: ammonia (NH3) or a method-reported nitrogen oxide species; generate separate exchanges and retain the reported NOx basis
- Flow property / unit: Mass / kg substance
- Amount rule: Use recorded or method-calculated emissions and retain separate substance identities in the data package
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_inputs`
- Sources: `ipcc-2019-refinement-agriculture`

### Process: Harvest and field capture (`p_harvest_capture`)

#### Inputs

##### Product flows

###### Standing crop for harvest (`harvest_standing_crop_input`)

The standing crop enters harvest as the output state of managed crop production.

- Selected flow: `standing_crop_output`
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Quantity reconciled from crop production to harvest records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_area_yield`
- Sources: `fao-crop-production-guidance-2016`

###### Harvest fuel or service input (`harvest_fuel_input`)

Fuel or a declared harvest service crosses the boundary when machinery or contracted operations remove the product from the field.

- Selected flow: Mobile machinery fuel or harvest service
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Mass or Energy / kg or MJ
- Binding: `parameterized`
- Amount rule: Harvest-operation fuel or service record allocated to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_operations`
- Sources: `iso-14044-2006`

##### Waste flows

###### Harvest damage and field loss (`harvest_field_loss`)

Harvest damage and field loss are recorded when product is not transferred to the next included process.

- Selected flow: Harvest loss waste
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Difference between available standing crop and harvested hand-off, classified by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_operations`
- Sources: `fao-food-loss-waste-2019`

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested fresh vegetable (`harvested_fresh_vegetable`)

Harvested whole fresh vegetables are handed to the next included process or directly to the declared hand-off when no downstream conditioning applies.

- Selected flow: Harvested residual-category fresh vegetable
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed or reconciled harvested mass after field losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_operations`
- Sources: `fao-crop-production-guidance-2016`

##### Waste flows

##### Elementary flows

### Process: Primary conditioning (`p_primary_conditioning`)

#### Inputs

##### Product flows

###### Harvested vegetable for conditioning (`conditioning_harvested_input`)

Harvested product enters conditioning when washing, trimming, cooling, or equivalent first preparation occurs before the declared hand-off.

- Selected flow: `harvested_fresh_vegetable`
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Batch weigh-in reconciled to harvested output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-fresh-produce-hygiene-2003`

###### Conditioning water (`conditioning_water`)

Conditioning water is included when it crosses the boundary for washing, cooling, or cleaning of the fresh vegetable.

- Selected flow: Process water
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Amount rule: Metered or batch-recorded water use, with recirculation and discharge basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-fresh-produce-hygiene-2003`

###### Conditioning electricity (`conditioning_electricity`)

Electricity for pumps, cooling, washing, trimming, or controls is recorded when the conditioning step is included.

- Selected flow: Electricity supply
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Amount rule: Metered or allocated electricity for the conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `iso-14044-2006`

##### Waste flows

###### Conditioning rejects and trimmings (`conditioning_rejects`)

Trimmings, damaged pieces, and rejected material leaving conditioning are recorded by destination.

- Selected flow: Conditioning reject or organic waste
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed reject stream reconciled to conditioning input and output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-food-loss-waste-2019`

###### Conditioning wastewater (`conditioning_wastewater`)

Wastewater is recorded when used water leaves the included conditioning boundary for treatment or discharge.

- Selected flow: Wastewater treatment service or wastewater
- Flow property / unit: Volume / m3
- Amount rule: Discharged or treated volume, with treatment route and pollutant records declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-fresh-produce-hygiene-2003`

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned fresh vegetable (`conditioned_fresh_vegetable`)

Conditioned fresh vegetable is the output after the optional first conditioning step and before grading, packaging, or hand-off.

- Selected flow: Conditioned residual-category fresh vegetable
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Batch output mass after conditioning rejects and losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-fresh-produce-hygiene-2003`

##### Waste flows

##### Elementary flows

### Process: Grading and sorting (`p_grading_sorting`)

#### Inputs

##### Product flows

###### Conditioned or harvested vegetable for grading (`grading_product_input`)

Product enters grading when two or more quality or destination states are created before the declared hand-off.

- Selected flow: `conditioned_fresh_vegetable` or `harvested_fresh_vegetable`
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed batch input and declared pre-grading state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_reconciliation`
- Sources: `fao-food-loss-waste-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable grade output (`marketable_grade_output`)

The selected marketable grade output continues to packaging or becomes the reference flow when no packaging is included.

- Selected flow: Marketable fresh vegetable grade
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed accepted grade output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_reconciliation`
- Sources: `fao-food-loss-waste-2019`

###### Secondary grade or co-product output (`secondary_grade_output`)

Secondary grades or co-products are recorded when intentionally marketed or transferred to a distinct declared destination.

- Selected flow: Secondary fresh vegetable grade or co-product
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed secondary output with destination and market status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_reconciliation`
- Sources: `fao-food-loss-waste-2019`

##### Waste flows

###### Grading rejects (`grading_rejects`)

Rejects not transferred as a marketed product are recorded as waste with their destination and treatment route.

- Selected flow: Grading reject or organic waste
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Difference between grading input and all declared product outputs, reconciled by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_reconciliation`
- Sources: `fao-food-loss-waste-2019`

##### Elementary flows

### Process: Packaging and presentation (`p_packaging_presentation`)

#### Inputs

##### Product flows

###### Marketable vegetable for packaging (`packaging_product_input`)

The marketable output enters packaging when the package or presentation is inside the declared boundary before hand-off.

- Selected flow: `marketable_grade_output` or declared harvested/conditioned output
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed packaged-batch input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-fresh-produce-hygiene-2003`

###### Packaging material (`packaging_material`)

Packaging material is recorded only when packaging is included in the declared product boundary.

- Selected flow: Packaging material, `rigid-container-packaging`, `carton-and-box-packaging`, or `pallet-and-crate-packaging`
- Flow property / unit: Mass / kg
- Amount rule: Actual packaging material mass by material and reuse status, allocated to the packaged batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`

###### Packaging electricity (`packaging_electricity`)

Electricity for packing, labelling, or presentation equipment is recorded when packaging is included.

- Selected flow: Electricity supply
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Amount rule: Metered or allocated electricity for the packaged batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`

##### Waste flows

###### Packaging rejects (`packaging_rejects`)

Damaged or rejected packaging and product-package losses are recorded by material and destination.

- Selected flow: Packaging or packaged-product waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed or reconciled rejects from the packaging batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference fresh vegetable
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-food-loss-waste-2019`

##### Elementary flows

#### Outputs

##### Product flows

###### Reference fresh vegetable (`reference_fresh_vegetable`)

This is the final marketable fresh whole vegetable output at the declared first-market hand-off. If packaging is excluded, the last included process supplies this same reference-flow role without a packaging step.

- Selected flow: Declared CPC 01290 residual fresh vegetable
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Net marketable mass at the declared hand-off, excluding packaging mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference fresh vegetable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `rule_single_output_crop_allocation` | crop production with one declared marketable output | Assign the full crop-cycle inventory to the declared reference product when no intentional co-product or secondary marketed output is reported. | `iso-14044-2006` |
| `rule_grade_output_allocation` | grading, sorting, and multiple marketed grades | Report every intentional marketed grade or co-product. Apply physical mass allocation as the default when outputs have comparable fresh-material function; use an explicitly justified alternative only when mass does not represent the relevant causal relationship. | `iso-14044-2006`; `fao-food-loss-waste-2019` |
| `rule_residue_not_coproduct` | field residue, rejects, and non-marketed losses | Treat residues and rejects as waste or destination-specific material unless they are intentionally marketed or transferred as a declared co-product with its own hand-off. | `fao-food-loss-waste-2019` |
| `rule_shared_input_allocation` | shared machinery, infrastructure, or utilities | Allocate shared records to the declared crop cycle and output set using documented area, time, mass, or activity drivers; retain the driver and contributing outputs. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_area_yield` | `p_crop_production` | area, crop-cycle output, and residue | field and harvest records | area; crop dates; cultivar; harvested mass; field residue; destination | farm records, weighbridge, calibrated measurement, and grower interview | ha, kg, date | every crop cycle | full declared crop cycle | each contributing field or production unit | aggregate by field and crop cycle, then reconcile to reported output | field map, weighbridge record, and crop-cycle log |
| `cp_crop_inputs` | `p_crop_production` | seed, water, nutrient, energy, fuel, and calculated emissions | input and utility records | product identity; amount; nutrient basis; water meter; electricity; fuel; application date; source | invoices, application logs, meters, supplier declarations, and method calculation | kg, m3, kWh, MJ, kg nutrient | each application or meter period | full declared crop cycle | each contributing field or production unit | allocate shared records by documented crop-cycle driver | invoice, meter, application record, and factor-selection note |
| `cp_harvest_operations` | `p_harvest_capture` | harvested output, harvest fuel, and losses | harvest campaign records | operation date; machinery or contractor; fuel or service; harvested mass; damage; field destination | harvest log, fuel issue, contractor record, and weighbridge | kg, L, MJ, date | each harvest event | full harvest campaign | each harvest block or campaign | reconcile standing crop, harvested output, and loss destinations | harvest log, scale record, and contractor invoice |
| `cp_conditioning_records` | `p_primary_conditioning` | conditioning input, water, electricity, rejects, wastewater, and output | batch and utility records | batch id; input mass; water; electricity; reject mass; wastewater; output mass; treatment route | batch sheet, meters, scale, and wastewater record | kg, m3, kWh | each batch | all included conditioning batches | each conditioning line or site | reconcile input to output, rejects, and wastewater by batch | batch sheet, scale calibration, meter record, and treatment receipt |
| `cp_grading_reconciliation` | `p_grading_sorting` | grade outputs, rejects, and grading input | grading and sales records | batch id; input; accepted grade; secondary grade; reject; destination; sale status | grading log, scale, sales record, and destination record | kg, date | each grading batch | all included grading batches | each grading line or site | reconcile input to all product outputs and rejects | grade log, scale record, and destination evidence |
| `cp_packaging_records` | `p_packaging_presentation` | product input, packaging, electricity, rejects, and reference output | packaging and dispatch records | batch id; product input; material and mass; reuse status; electricity; reject; net output; hand-off | packaging bill of materials, scale, meter, and dispatch record | kg, kWh, date | each packaged batch | all included packaging batches | each packaging line or site | report net product separately from packaging mass and reconcile rejects | packaging specification, scale calibration, utility record, and dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `rule_normalize_to_reference_flow` | all inventory rows | `normalized_amount = recorded_or_calculated_amount / net_marketable_reference_mass` | row amount; net marketable reference mass | amount per 1 kg reference fresh vegetable | `iso-14044-2006` |
| `rule_calculate_crop_yield_reconciliation` | crop production and harvest | `standing_crop = harvested_output + field_loss + residue + other_declared_destinations` | field output; harvested mass; losses; residues; destinations | reconciled crop-cycle output set | `fao-crop-production-guidance-2016`; `fao-food-loss-waste-2019` |
| `rule_calculate_nutrient_basis` | fertilizer or soil amendment input | `nutrient_basis = product_mass * declared_nutrient_fraction` for each declared nutrient basis | product mass; supplier or laboratory nutrient fraction | kg N, P, K, or organic nutrient | `fao-fertilizer-code-of-conduct-2019` |
| `rule_calculate_crop_emissions` | crop elementary outputs | Apply the selected IPCC-compatible factor or measured value to the declared nutrient input, soil, climate, and management records; document factor hierarchy and units. | nutrient input; management records; selected factor; measured emissions where available | normalized substance-specific elementary flows | `ipcc-2019-refinement-agriculture` |
| `rule_reconcile_grade_outputs` | grading and sorting | `grading_input = marketable_grade + secondary_grade + reject + unaccounted_loss`; unaccounted loss must be investigated or disclosed | grading input; all declared outputs; reject; loss | complete grade-output reconciliation | `fao-food-loss-waste-2019` |
| `rule_reconcile_packaged_output` | packaging and presentation | `product_input = net_reference_output + packaging-process_product_loss + other_declared_product_destinations` and packaging mass is reported separately | product input; net output; losses; package material | net reference flow and package inventory | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `req_identity_qualifiers` | all datasets | Declare species or cultivar, edible part, production route, geography, crop cycle, fresh state, grade or marketability, and first-market hand-off; document the residual-category decision. | dataset metadata, crop record, and classification review |
| `req_measurement_traceability` | all quantitative rows | Prefer calibrated scales and meters, invoices, application logs, and supplier records; retain conversion factors and allocation drivers. | measurement records, calibration evidence, and supplier documentation |
| `req_temporal_coverage` | crop production and harvest | Cover one complete crop cycle and harvest campaign; explain missing events, atypical weather, or off-season operations. | crop calendar, field log, and reporting-period statement |
| `req_mass_balance_completeness` | crop, conditioning, grading, and packaging | Reconcile inputs, product outputs, co-products, residues, rejects, wastewater, and declared losses; investigate unexplained differences. | batch, grade, weighbridge, and dispatch reconciliations |
| `req_emission_method_disclosure` | calculated elementary flows | State the factor or measurement method, nutrient basis, units, geography, climate or soil assumptions, and uncertainty or replacement plan. | calculation sheet, factor reference, and method note |
| `req_route_and_scope_disclosure` | conditional processes | State whether conditioning, grading, packaging, storage, and distribution are included, and identify the first-market hand-off. | process map, site description, and hand-off record |
| `req_data_update_trigger` | published datasets | Reassess the dataset after changes in cultivar, production technology, nutrient regime, irrigation regime, conditioning line, packaging format, geography, or applicable emission method. | change log and periodic review record |

## 9. Validation Rules

The following checks are normative for every foreground data package using this PCR:

- `rule_validate_residual_category`: reject the package when a narrower named CPC vegetable category applies or when the species or cultivar and edible part are absent.
- `rule_validate_fresh_whole_state`: reject processed, frozen, salted, pickled, fermented, dried, powdered, canned, juiced, preserved, seed, planting-material, feed, or waste products.
- `rule_validate_reference_qualifiers`: require all `Required qualifiers` and require the reference amount to be 1 kg net fresh product at the declared hand-off.
- `rule_validate_process_completeness`: require `p_crop_production` and `p_harvest_capture`; require each conditional process when its inclusion condition is true and do not count an omitted conditional process as an unexplained gap.
- `rule_validate_flow_binding`: accept a parameterized Flow Set binding only when the selected group matches the flow’s direction, type, material role, and process state; leave identity evidence gaps unmapped rather than forcing a fixed UUID.
- `rule_validate_nutrient_disclosure`: when `crop_nutrient_or_amendment` is present, require actual product identity, applied mass, declared nutrient basis, application timing, and upstream dataset or evidence reference.
- `rule_validate_mass_reconciliation`: require crop, conditioning, grading, and packaging balances to close within the declared measurement tolerance; investigate unaccounted mass.
- `rule_validate_allocation`: require all intentional marketed grades or co-products to be listed once and require the selected allocation driver and output set to be disclosed.
- `rule_validate_emission_calculation`: require substance-specific units, factor or measurement method, nutrient basis, and source evidence for every calculated elementary flow.
- `rule_validate_protocol_coverage`: require every collected or calculated row to reference a declared collection protocol and every protocol to identify temporal and site scope.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for a residual fresh-vegetable product category; may be published as a `secondary_dataset` and linked to background supply datasets |
| downstream_use | Construction of product, process, and lifecyclemodel projections for fresh whole vegetables in CPC 01290 when the residual-category gate is satisfied |
| allowed_use | Comparative or attributional LCA when species or cultivar, route, geography, crop cycle, hand-off, inventory basis, and data quality are disclosed |
| excluded_use | Processed or preserved vegetables; seed or planting material; feed or waste products; substitution claims without explicit evidence; extrapolation across unqualified species, route, geography, or market state |
| required_metadata | CPC 3.0:01290; canonical PCR id; species or cultivar; edible part; route; geography; crop cycle; hand-off; included processes; reference amount; reference flow identity; nutrient and irrigation basis; grade and loss destinations; packaging and storage scope |
| required_quality_disclosure | Data origin and period; site or field coverage; measurement and allocation methods; mass-balance status; emission-factor or measurement methods; exclusions; uncertainty or provisional ranges |
| update_trigger | New narrower classification coverage; changed cultivar or production route; material changes in nutrient, irrigation, energy, conditioning, grading, or packaging practice; revised emission methods; material data-quality findings |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14040-2006` | standard | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework, https://www.iso.org/standard/37456.html | PCR boundary framing and life-cycle inventory principles |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | allocation, inventory normalization, data quality, and validation rules |
| `fao-crop-production-guidance-2016` | official_guidance | FAO, Save and Grow in practice: maize, rice, wheat, 2016, https://www.fao.org/3/i4009e/i4009e.pdf | crop-cycle records, field inputs, yield and production-unit evidence |
| `fao-fertilizer-code-of-conduct-2019` | official_guidance | FAO, International Code of Conduct for the Sustainable Use and Management of Fertilizers, 2019, https://openknowledge.fao.org/3/ca5253en/ca5253en.pdf | nutrient-basis declaration and fertilizer record requirements |
| `ipcc-2019-refinement-agriculture` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4: Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | nutrient-related agricultural emission calculation method and factor disclosure |
| `fao-food-loss-waste-2019` | official_guidance | FAO, The State of Food and Agriculture 2019: Moving forward on food loss and waste reduction, https://www.fao.org/3/ca6030en/ca6030en.pdf | loss, reject, residue, destination, and reconciliation rules |
| `fao-fresh-produce-hygiene-2003` | official_guidance | FAO and WHO, Assuring Food Safety and Quality: Guidelines for Strengthening National Food Control Systems, 2003, https://www.fao.org/3/y8705e/y8705e.pdf | fresh-produce conditioning, water, hand-off, and hygiene-related record requirements |
