---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fibre-crops-raw-n-e-c
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Other fibre crops, raw, n.e.c.

## 1. Scope and Applicability

This PCR applies to one explicitly named raw fibre crop or product within CPC 01929, from managed cultivation and harvest or first extraction through the selected first raw-fibre preparation handoff. Covered examples include raw or retted flax and true hemp, coir, abaca, esparto, aloe, pineapple leaf, bowstring hemp, caroa, ramie, African hemp, typha and yucca fibre. Each data package shall declare one species, fibre-bearing plant part, preparation state, grade, moisture and handoff.

Cotton and the jute/kenaf class are excluded, as are spinning, yarn, fabric, finished-product manufacture and retail packaging. First preparation may conditionally include retting, decortication, washing, drying, scutching, cleaning and grading; later textile processing shall not be included. Select once either farm/raw harvest handoff or the first prepared-raw-fibre handoff. Perennial routes shall link establishment and productive periods.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fibre-crops-raw-n-e-c |
| classification_refs | CPC 3.0:01929 |
| covered_products | One named-species raw or retted fibre-crop product at a declared harvest, extraction or first-preparation state |
| excluded_products | Cotton; jute/kenaf class; yarn, fabric, finished goods, blended fibres and downstream manufacture |
| representative_product | 1 kg of single-species raw fibre at declared moisture, retting/preparation state and grade |
| production_route | Managed cultivation → harvest/first extraction → optional retting, decortication, washing, drying, scutching, cleaning and grading → raw-fibre handoff |
| market_state | Bulk raw fibre material, not spun or made into fabric |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One raw fibre product of a declared species, plant part and preparation state |
| How much | 1 kg net product |
| How well | Declare species, variety when known, fibre-bearing part, raw/retted state, preparation route, grade, impurities and moisture |
| How long or cycle | One identified lot and its crop cycle; perennial routes include or attribute establishment |
| reference_flow_link | Verified product-flow object below |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other fibre crops, raw, n.e.c. `99b99c66-1c44-40db-bb8e-2d5ec022aa28` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group (UUID not confirmed) |
| Reference unit | kg |
| Required qualifiers | Botanical species; fibre-bearing part; raw or retted state; preparation route; moisture; grade; impurities; geography; crop cycle; farm or first-preparation gate |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-balance products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass; compare lots on one moisture basis and use measured lot moisture for conversions |
| `moisture_state` | raw, retted and dried fibre states | water mass fraction | % wet basis | Sample at each handoff and declare method; do not replace measurement with a category default |
| `transport_service` | off-site transfer | mass-distance | t·km | Multiply net load by loaded distance; disclose empty return and own-account fuel without duplication |
| `land_time` | annual and perennial crop periods | area-time | ha·year | Record area and time separately for establishment and productive periods |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare field state before establishment or at the selected productive-period start, including perennial stand age |
| starting_condition_role | Raw fibre-crop producer |
| product_classification_scope | One named raw fibre product within CPC 01929; no aggregation across species, cotton or the jute/kenaf class |
| recursive_input_rule | Record retained propagation material once as an internal transfer; do not recursively count it as both upstream product and the same foreground output |
| upstream_dataset_requirement | Purchased propagation, nutrients, protection products, water, energy, transport and treatment require verified datasets for actual products or services |
| disclosure | Declare species, plant part, route, site, period, moisture, retting and preparation state, grade, handoff, residue destinations and attribution choices |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_boundary` | complete route | Cultivation, harvest/extraction and first preparation are separate responsibility nodes; include only selected preparation operations | `unsd-cpc-v3-2025` |
| `gate_exclusivity` | reference product | Choose farm handoff or first-preparation handoff once; do not count intermediate material again as reference output |  |
| `route_alternatives` | production and preparation | Rainfed/irrigated, manual/mechanical harvest, dew/water/enzyme retting and ambient/mechanical drying are explicit route choices, not unevidenced averages | `fao-natural-fibres-2009` |
| `period_boundary` | perennial crops and shared assets | Apply explicit multi-period attribution: link establishment, production, renewal and termination to reporting periods; attribute shared equipment once by recorded service and period |  |
| `material_state_handoff` | all nodes | At every handoff record input/output state, moisture, mass, destination and responsible party, linked by lot balance |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_production` | Managed fibre-crop production | required | Declare annual or perennial route and production periods | managed biological production | crop area, period and harvest-ready biomass |
| `harvest_extraction` | Harvest and primary extraction | required | Declare cutting, pulling, stripping or recovery route by plant part | harvest/capture | collected raw-material lot |
| `primary_fibre_preparation` | First fibre preparation and grading | conditional | Include when first retting, decortication, washing, drying, scutching, cleaning or grading precedes the selected gate | treatment, stabilization and grading | accepted prepared raw fibre |

### Process: Managed fibre-crop production (`crop_production`)

#### Inputs

##### Product flows

###### Seed, planting stock or vegetative propagation material (`propagation_material`)

Record the identified seed, seedling, sucker, rhizome, cutting or planting stock entering the crop system. Retained material is recorded only when transferred across the declared foreground boundary.

- Selected flow: Crop-specific propagation material; UUID unresolved until species and form are known
- Flow property / unit: Mass / kg, or count when the verified flow supports count
- Amount rule: Measured purchase or transfer quantity by species, lot and planting area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product, retaining crop-cycle linkage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_propagation`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: Per 1 kg reference product, retaining crop-cycle linkage; conditional routes impose zero only when inactive
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient amendments (`fertilizer_nutrient_inputs`)

Use this single card for every mineral fertilizer, organic fertilizer and nutrient amendment applied in crop production. Foreground records retain each product, nutrient composition, field, date and dose.

- Selected flow: Fertilizer and nutrient-supply products actually applied
- Binding: parameterized
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set version: 0.3.0
- Flow property / unit: Product-specific property and native unit
- Amount rule: Measured product mass and nutrient composition by application
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg reference product with field and crop period retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrients`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg products/kg reference product
  - Basis: Per 1 kg reference product with field and crop period retained; conditional routes impose zero only when inactive
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_inputs`)

Record only formulated products or active ingredients actually applied, preserving representation, treated area, date and target.

- Selected flow: Crop-protection products identified from application records; UUID unresolved
- Flow property / unit: Mass / kg or product-native unit
- Amount rule: Measured or invoiced quantity by application
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: Per 1 kg reference product; conditional routes impose zero only when inactive
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Record water supplied for irrigation by source. Rainfall is site context and is not a supplied product exchange.

- Selected flow: Irrigation water actually supplied
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: irrigation-water
- Flow property / unit: Volume / m3
- Amount rule: Metered or otherwise documented withdrawal by field and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per hectare crop cycle, subsequently normalized to reference product
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha crop cycle
  - Basis: Per hectare crop cycle, subsequently normalized to reference product; conditional routes impose zero only when inactive
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-production energy carriers and utilities (`crop_energy`)

Record electricity and fuels used for land preparation, planting, management and pumping. Preserve each carrier and native unit.

- Selected flow: Energy carriers and utilities used in crop production
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow property / unit: Carrier-specific property and unit
- Amount rule: Metered electricity and fuel purchase or equipment-use records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg reference product with operation retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh-equivalent/kg reference product
  - Basis: Per 1 kg reference product with operation retained; conditional routes impose zero only when inactive
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No preset flow in this category; add only when foreground records demonstrate it.

##### Elementary flows

###### Agricultural land occupation (`crop_land_occupation`)

Record occupied area and time for the declared annual or perennial production period.

- Selected flow: Occupation, agricultural land; elementary identity unresolved
- Flow property / unit: Area-time / ha·year
- Amount rule: Measured cultivated area multiplied by occupied time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per crop cycle before yield normalization
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_area_period`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.00001
  - Upper: 1
  - Unit: ha·year/kg harvest-ready biomass
  - Basis: Per crop cycle before yield normalization; conditional routes impose zero only when inactive
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvest-ready fibre-crop biomass (`harvest_ready_biomass`)

This intermediate is the identified plant or plant part released by managed production to harvest; it is not yet the raw-fibre reference product.

- Selected flow: Species-specific harvest-ready fibre-crop biomass; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured or reconciled field output at declared moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per crop-production process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg raw fibre product
  - Basis: Per crop-production process output; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Crop-production losses removed from the field (`field_losses`)

Record failed or removed biomass as waste only when it crosses the field boundary to a declared waste destination.

- Selected flow: Species-specific field biomass waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured removed mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg harvest-ready biomass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg harvest-ready biomass
  - Basis: Per 1 kg harvest-ready biomass; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct soil nitrous oxide (`soil_nitrous_oxide`)

Calculate direct soil N2O from recorded nitrogen inputs with the declared IPCC tier or a justified local method.

- Selected flow: Nitrous oxide to air; UUID unresolved pending compartment confirmation
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply declared emission factor and convert N2O-N to N2O where required
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per nitrogen input, normalized to reference product
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrients`
- Sources: `ipcc-2019-refinement-v4-ch11`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg N2O/kg N applied
  - Basis: Per nitrogen input, normalized to reference product; conditional routes impose zero only when inactive
  - Basis kind: Nitrogen input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and primary extraction (`harvest_extraction`)

#### Inputs

##### Product flows

###### Harvest-ready fibre-crop biomass input (`harvest_ready_input`)

Record the production-node output entering cutting, pulling, leaf stripping, fruit-husk recovery or the applicable extraction route.

- Selected flow: Species-specific harvest-ready fibre-crop biomass; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Transferred lot mass at the measured moisture state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per harvest process input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg raw fibre product
  - Basis: Per harvest process input; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and extraction energy (`harvest_energy`)

Record energy for cutting, pulling, stripping, field decortication or other selected harvest equipment.

- Selected flow: Energy carriers used by harvest and extraction equipment
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow property / unit: Carrier-specific property and unit
- Amount rule: Fuel and electricity records by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg raw collected material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh-equivalent/kg collected material
  - Basis: Per 1 kg raw collected material; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No preset flow in this category; add only when foreground records demonstrate it.

##### Elementary flows

No preset flow in this category; add only when foreground records demonstrate it.

#### Outputs

##### Product flows

###### Raw collected fibre material (`raw_collected_fibre_material`)

Record the species-specific stem, leaf, bast, husk or separated fibre state handed to primary preparation.

- Selected flow: Species- and state-specific raw fibre material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted lot mass and moisture at handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per harvest process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1
  - Unit: kg/kg harvest input
  - Basis: Per harvest process output; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended harvest products (`harvest_coproducts`)

Record seed, woody core, leaves or other material as a product only when it has an intended use and documented handoff.

- Selected flow: Product-specific intended co-product; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by product state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg raw collected fibre material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_destinations`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg raw collected fibre material
  - Basis: Per 1 kg raw collected fibre material; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest residues sent to waste management (`harvest_residues`)

Record incidental biomass as waste when its destination is disposal or treatment; material returned to soil is disclosed separately and not duplicated.

- Selected flow: Fibre-crop harvest residue waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured residue mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg raw collected fibre material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg raw collected fibre material
  - Basis: Per 1 kg raw collected fibre material; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No preset flow in this category; add only when foreground records demonstrate it.

### Process: First fibre preparation and grading (`primary_fibre_preparation`)

#### Inputs

##### Product flows

###### Raw collected fibre material input (`raw_material_input`)

Record the exact raw or retted state entering the declared first preparation route.

- Selected flow: Species- and state-specific raw fibre material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass and moisture by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per primary-preparation input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg prepared raw fibre
  - Basis: Per primary-preparation input; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retting and washing process water (`process_water`)

Record supplied water only when water retting, washing or rinsing is performed; keep source and operation identifiable.

- Selected flow: Process water supplied for retting or washing
- Binding: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: process-water
- Flow property / unit: Volume / m3
- Amount rule: Metered or documented supplied volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared raw fibre
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary fibre-preparation energy (`conditioning_energy`)

Record energy for retting control, decortication, drying, scutching, cleaning and grading as actually performed.

- Selected flow: Energy carriers and utilities used in primary fibre preparation
- Binding: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow property / unit: Carrier-specific property and unit
- Amount rule: Metered electricity, fuel and purchased heat by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg prepared raw fibre
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh-equivalent/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Transport from harvest site to first preparation (`raw_material_transport`)

Record third-party freight when raw material moves between sites; own-account fuel is recorded once under the operating node.

- Selected flow: Freight transport service for raw fibre-crop material
- Binding: parameterized
- Flow Set: flow-set.transport-service
- Flow Set version: 0.2.0
- Flow Set group: road-freight-transport
- Flow property / unit: Mass-distance / t·km
- Amount rule: Net transported mass multiplied by loaded route distance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per transported raw-material lot
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: t·km/t raw material
  - Basis: Per transported raw-material lot; conditional routes impose zero only when inactive
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater treatment service (`wastewater_treatment`)

Record treatment service only for wastewater transferred to an external treatment provider.

- Selected flow: Wastewater treatment service selected for the actual route
- Binding: parameterized
- Flow Set: flow-set.waste-treatment-service
- Flow Set version: 0.2.0
- Flow Set group: wastewater-treatment-service
- Flow property / unit: Volume / m3
- Amount rule: Measured discharged volume accepted by treatment provider
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per 1 kg prepared raw fibre
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No preset flow in this category; add only when foreground records demonstrate it.

##### Elementary flows

No preset flow in this category; add only when foreground records demonstrate it.

#### Outputs

##### Product flows

###### Prepared raw fibre reference product (`reference_raw_fibre`)

This intended output is the selected single-species raw or retted fibre at the first preparation handoff. It excludes yarn, fabric and finished fibre goods.

- Selected flow: Other fibre crops, raw, n.e.c. `99b99c66-1c44-40db-bb8e-2d5ec022aa28`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net accepted product at declared moisture, preparation state and grade
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_conditioning_mass`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/reference flow
  - Basis: PCR reference flow; conditional routes impose zero only when inactive
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended preparation co-products (`fibre_coproducts`)

Record shives, woody core, tow, seed or other outputs as co-products only when intended use and handoff are documented.

- Selected flow: Product-specific co-product; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured output by state, grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg prepared raw fibre
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_destinations`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected fibre and preparation residues (`conditioning_rejects`)

Record rejected fibre, dirt and unusable residues by measured mass and destination; downgraded saleable material remains a product.

- Selected flow: Preparation residue waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured reject and residue mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared raw fibre
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retting or washing wastewater (`conditioning_wastewater`)

Record wastewater volume and receiving route when wet processing occurs. Do not infer discharge where no wet route is selected.

- Selected flow: Process wastewater; UUID unresolved until composition and destination are known
- Flow property / unit: Volume / m3
- Amount rule: Metered or water-balance discharge by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared raw fibre when wet route applies
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre when wet route applies; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No preset flow in this category; add only when foreground records demonstrate it.


## 7. Allocation and Co-product Handling

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `mass_balance_first` | all processes | First reconcile inputs, accepted product, co-products, residues, waste and measured moisture change by lot |  |
| `coproduct_attribution` | intended co-products | Prefer subdivision. If allocation remains necessary, declare physical or economic method, data period and sensitivity for the study goal | `iso-14044-2006` |
| `residue_classification` | residues and rejects | Only material with intended use and documented handoff is a co-product; waste, soil return and unowned loss receive no product output quantity |  |
| `multi_period_attribution` | perennial establishment and shared assets | Attribute using evidenced productive years, service or lifetime output, recording replacement and termination; no burden may be counted in multiple periods |  |
| `shared_asset_attribution` | assets serving multiple nodes | List consuming nodes and periods and attribute once using recorded machine hours, mass processed or other causal service |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_propagation` | `crop_production` | propagation material | records | supplier invoices; lot and planting logs | direct record with traceable source | kg or count | each planting event | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_nutrients` | `crop_production` | fertilizer and nutrients | records | product invoices; nutrient analysis; field application log | direct record with traceable source | kg product and kg nutrient | each application | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_crop_protection` | `crop_production` | crop protection | records | application log; formulation and active ingredient | direct record with traceable source | kg or L | each application | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_irrigation` | `crop_production` | irrigation water | records | meter reading or documented withdrawal | direct record with traceable source | m3 | each irrigation period | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_energy` | `all processes` | energy carriers | records | meters; invoices; equipment and fuel logs | direct record with traceable source | native carrier unit | monthly and by operation | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_area_period` | `crop_production` | area and period | records | georeferenced field register; establishment and productive dates | direct record with traceable source | ha and days | each crop period | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_harvest_mass` | `harvest_extraction` | harvest mass | records | calibrated scale; lot moisture sample | direct record with traceable source | kg and % wet basis | each harvest lot | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_output_destinations` | `harvest and preparation` | intended outputs | records | dispatch note; buyer or internal transfer record | direct record with traceable source | kg | each output lot | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_residues` | `all processes` | residues and waste | records | scale ticket; destination and fate record | direct record with traceable source | kg | each transfer | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_conditioning_mass` | `primary_fibre_preparation` | received and prepared fibre | records | calibrated scales; moisture and grade sample | direct record with traceable source | kg and % wet basis | each lot | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_conditioning_water` | `primary_fibre_preparation` | process water | records | meter reading and source record | direct record with traceable source | m3 | each batch or day | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_transport` | `primary_fibre_preparation` | transport service | records | dispatch mass; loaded route distance; vehicle record | direct record with traceable source | t and km | each trip | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |
| `cp_wastewater` | `primary_fibre_preparation` | wastewater | records | discharge meter or water balance; destination receipt | direct record with traceable source | m3 | each batch or day | representative declared period | all included sites and lots | sum by process and normalize through accepted output | calibration, invoice, log or receipt retained |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | process exchange ÷ accepted net reference-product mass from the same lot | exchange amount; lot links; accepted reference mass | amount per kg reference product |  |
| `moisture_conversion` | fibre states | dry matter = wet mass × (1 − wet-basis moisture); paired lot measurements only | wet mass; moisture fraction | comparable mass state |  |
| `transport_work` | freight | t·km = net tonnes loaded × loaded route kilometres | dispatch mass; route distance | transport service |  |
| `soil_n2o` | managed soil | calculate N2O-N from N inputs with declared IPCC tier and convert to N2O by 44/28 | N inputs; emission factors | kg N2O | `ipcc-2019-refinement-v4-ch11` |
| `lot_mass_balance` | harvest and preparation | input = accepted product + co-products + residues/waste + stock change + measured moisture change | lot masses; moisture; stock | reconciliation result |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | reference product | Species, plant part, state, grade and gate are compatible with the fixed product UUID | lot specification and flow detail verification |
| `coverage_quality` | foreground inventory | Cover all sites, fields, lots and actual operations in the declared period; quantify missing records | completeness ledger |
| `measurement_quality` | mass, moisture, water and energy | Record meter, calibration, sampling method, unit conversion and outlier treatment | calibration and sampling records |
| `temporal_quality` | annual/perennial route | Data period matches crop cycle and identifies establishment, production, renewal and termination | dated crop and asset records |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fixed UUID, Mass property and kg unit must match the named raw fibre product and declared gate | error |
| `validate_gate_once` | route | Farm and first-preparation handoffs cannot both be reference outputs | error |
| `validate_ranges` | every flow card | Check nonnegative bounds, lower ≤ upper and process-consistent denominator; inactive conditional routes impose no positive amount | error |
| `validate_flow_sets` | parameterized inputs | At most one set-only nutrient card per process; water, energy, transport and treatment must match cited versions and groups | error |
| `validate_balance` | harvest and preparation | Balance input, products, co-products, residues, waste and stock change on declared moisture basis | error |
| `validate_outputs` | intended outputs and rejects | Every intended output has a handoff; downgraded, rejected, recovered or waste states have explicit non-duplicated destinations | error |
| `validate_period_assets` | perennial and shared infrastructure | Periods and consuming nodes are complete; establishment and shared-asset burdens are attributed once | error |
| `validate_route_delta` | alternative routes | Each alternative declares parent activity and real topology, inventory, calculation or validation delta; mutually exclusive routes are not averaged | error |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one named raw fibre product |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product systems compatible in species, plant part, state, route, geography and gate |
| excluded_use | Unqualified proxy for other species, cotton, jute/kenaf, blended fibre, yarn, fabric or finished goods |
| required_metadata | Species; plant part; raw/retted state; preparation technology; moisture; grade; impurities; site; period; gate; allocation |
| required_quality_disclosure | Coverage, measurement and calibration, out-of-range values, missing records, route proxies, co-product and multi-period attribution |
| update_trigger | Material change in product state, route, gate, technology, species scope, fixed UUID compatibility or key evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure and explanatory notes, 2025 | CPC 01929 product scope and examples |
| `fao-natural-fibres-2009` | official_guidance | FAO and Common Fund for Commodities, Proceedings of the Symposium on Natural Fibres, 2009 | natural-fibre crop routes, primary preparation and market states |
| `ipcc-2019-refinement-v4-ch11` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils | managed-soil N2O calculation |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and transparency |
