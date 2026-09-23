---
schema_version: 1
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oilseeds-n-e-c
language: en-US
status: scaffold
content_maturity: empty_scaffold
translation_status: canonical
sync_with: pcr.zh-CN.md
---
# Other oilseeds, n.e.c.

## 1. Scope and Applicability
This PCR defines foreground rules for one named residual oilseed species within CPC 01449, from managed production to the declared gate. Each dataset shall declare exactly one species, intended use, moisture basis, grade and gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oilseeds-n-e-c |
| classification_system | CPC |
| classification_version | 3.0 |
| classification_code | 01449 |
| classification_title | Other oilseeds, n.e.c. |
| included_products | One named residual oilseed species classified in CPC 01449, such as castor bean, crambe seed or hempseed, delivered as harvested or conditioned grain. |
| excluded_products | Oilseeds with separate CPC leaves; seed produced and certified specifically for sowing; extracted oil; press cake or meal; foods and manufactured products. |
| representative_product | Conditioned grain of one declared residual oilseed species at the farm or conditioning gate. |
| production_route | Species-specific managed production, harvest, seed extraction, optional drying and cleaning, grading, optional packaging and storage. |
| market_state | Harvested or conditioned oilseed grain with declared species, intended use, moisture, purity or grade, and gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| what | Provision of one declared CPC 01449 oilseed species at the stated farm or conditioning gate. |
| how_much | 1 kg net oilseed mass at declared moisture. |
| how_well | Named species, intended use, moisture basis, grade or purity, route and gate are mandatory. |
| how_long_or_cycle | One crop cycle and associated conditioning lot, normalized to accepted product. |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| reference_amount | 1 kg |
| reference_product_flow | Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6` |
| reference_flow_property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| reference_unit_group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| reference_unit | kg |
| required_qualifiers | one named species; intended use; moisture basis; grade or purity; production and conditioning route; declared gate |

## 4. Measurement and Unit Rules

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| net_mass | Reference product and mass flows | Mass | kg | Use net mass and retain gross mass, tare and scale evidence. |
| moisture | Seed and residue mass | Mass and moisture fraction | kg and % wet basis or dry basis | State the moisture convention and convert only from measured moisture. |
| field_normalization | Field inputs | Area and mass | ha and kg | Preserve field records, then normalize with accepted product from the same crop cycle. |
| energy | Machinery, drying and storage | Energy, volume or mass | kWh, MJ, L or kg | Preserve the recorded carrier and unit before conversion. |

## 5. System Boundary

The boundary begins with planting material and foreground-controlled field preparation. It includes managed production, harvest, species-specific threshing or seed extraction, optional drying, aeration and cleaning, grading, foreground packaging, storage and load-out to the declared gate. It excludes planting-seed certification, oil extraction, refining, meal manufacture, downstream transport and use. Alternative production or conditioning technologies require separate route declarations; inactive conditional nodes carry no exchanges.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | planting material entering the declared crop cycle |
| starting_condition_role | Start of foreground managed biological production for one named residual oilseed species. |
| product_classification_scope | CPC 01449 only; separately classified oilseeds are outside scope. |
| recursive_input_rule | Purchased CPC 01449 oilseed used as an input remains a separately recorded product input with species, state and supplier dataset. |
| upstream_dataset_requirement | Link supplier datasets for planting material and purchased inputs or disclose source, geography and quality. |
| disclosure | Species, cultivar where known, intended use, field mode, harvest/extraction technology, moisture, grade, gate, co-products, rejects, rework and shared-asset attribution. |

## 6. Process Inventory Structure

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| managed_production | Managed crop production | required | Always included. | Cultivate the declared named residual oilseed species and record field operations. | Harvestable crop standing in the declared field or protected system. |
| harvest_and_extraction | Harvest and seed extraction | required | Always included; threshing, pod opening or fruit dehulling follows the species route. | Collect the crop and separate oilseed grain from field biomass. | Gross harvested seed-bearing material. |
| drying_and_conditioning | Drying and primary conditioning | conditional | Include when drying, aeration, cleaning or stabilization occurs before hand-off. | Reach the declared safe moisture and remove foreign matter. | Conditioned oilseed mass at declared moisture. |
| grading_packaging_and_storage | Grading, packaging and storage | conditional | Include foreground-controlled grading, bagging, bulk storage or load-out. | Release one declared grade and use route at the stated gate. | Net reference product at the declared gate. |


### Process: Managed crop production (`managed_production`)

#### Inputs

##### Product flows

###### Planting material (`planting_material`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select species- and cultivar-specific planting material flow
- Flow property / unit: kg
- Amount rule: Measured planting material used for the declared field area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
- Normalization basis: per crop cycle, normalized by accepted oilseed output
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg product
  - Basis: per crop cycle, normalized by accepted oilseed output
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated fertilizer and nutrient products (`nutrient_products`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Flow property / unit: kg product and kg nutrient
- Amount rule: Record each physical fertilizer or amendment once with composition; expand to verified exchanges during dataset production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
- Normalization basis: per crop cycle, normalized by accepted oilseed output
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg product/kg product
  - Basis: per crop cycle, normalized by accepted oilseed output
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: m3
- Amount rule: Metered irrigation water; zero for rainfed production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route Specific (`route_specific`)
- Normalization basis: per crop cycle, normalized by accepted oilseed output
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/kg product
  - Basis: per crop cycle, normalized by accepted oilseed output
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop protection inputs (`crop_protection_inputs`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select named active product flow
- Flow property / unit: kg or L
- Amount rule: Measured products applied; retain active ingredient and formulation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
- Normalization basis: per crop cycle, normalized by accepted oilseed output
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_field`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg product
  - Basis: per crop cycle, normalized by accepted oilseed output
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy carriers (`field_energy`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: L, kg, MJ or kWh
- Amount rule: Measured energy for cultivation and field operations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
- Normalization basis: per crop cycle, normalized by accepted oilseed output
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: L diesel-equivalent/kg product
  - Basis: per crop cycle, normalized by accepted oilseed output
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Standing harvestable crop (`standing_crop`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select species-specific intermediate product if separately modelled
- Flow property / unit: kg
- Amount rule: Calculated harvestable crop mass transferred to harvest.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site Specific (`site_specific`)
- Normalization basis: harvestable mass at field maturity
- Basis kind: `process_output`
- Evidence kind: Calculated From Collection (`calculated_from_collection`)
- Collection protocol: `cp_yield`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg accepted product
  - Basis: harvestable mass at field maturity
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None.

##### Elementary flows

###### Direct soil nitrous oxide (`soil_n2o_emission`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select exact N2O-to-air identity after method and medium are declared
- Flow property / unit: kg N2O
- Amount rule: Calculate from recorded N inputs using the declared regional method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route Specific (`route_specific`)
- Normalization basis: per crop cycle, normalized by accepted oilseed output
- Basis kind: `crop_cycle`
- Evidence kind: Calculated From Collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg N2O/kg product
  - Basis: per crop cycle, normalized by accepted oilseed output
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate loss to water (`nitrate_loss_to_water`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select exact nitrate species and receiving medium
- Flow property / unit: kg nitrate-N
- Amount rule: Calculate only with a declared applicable method and receiving medium.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route Specific (`route_specific`)
- Normalization basis: per crop cycle, normalized by accepted oilseed output
- Basis kind: `crop_cycle`
- Evidence kind: Calculated From Collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg nitrate-N/kg product
  - Basis: per crop cycle, normalized by accepted oilseed output
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and seed extraction (`harvest_and_extraction`)

#### Inputs

##### Product flows

###### Standing harvestable crop input (`standing_crop_input`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select species-specific intermediate product if separately modelled
- Flow property / unit: kg
- Amount rule: Transfer the measured harvestable crop from managed production.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site Specific (`site_specific`)
- Normalization basis: gross harvestable crop entering harvest
- Basis kind: `process_output`
- Evidence kind: Calculated From Collection (`calculated_from_collection`)
- Collection protocol: `cp_yield`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg accepted product
  - Basis: gross harvestable crop entering harvest
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest machinery energy (`harvest_energy`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: L, kg, MJ or kWh
- Amount rule: Measured harvest, threshing or extraction energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology Specific (`technology_specific`)
- Normalization basis: per harvested lot
- Basis kind: `crop_cycle`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: L diesel-equivalent/kg product
  - Basis: per harvested lot
  - Basis kind: `crop_cycle`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Raw extracted oilseed grain (`raw_oilseed_grain`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: kg
- Amount rule: Measured raw grain after species-specific extraction and before conditioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
- Normalization basis: gross raw seed at measured moisture
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg accepted product
  - Basis: gross raw seed at measured moisture
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest and extraction residue (`harvest_residue`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select route-specific stalk, hull, pod or mixed biomass fate flow
- Flow property / unit: kg
- Amount rule: Measure separated residue by fate; saleable co-products require separate output records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route Specific (`route_specific`)
- Normalization basis: per harvested lot
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4
  - Unit: kg/kg raw seed
  - Basis: per harvested lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field and handling losses (`harvest_losses`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select route-specific biological residue or loss flow
- Flow property / unit: kg
- Amount rule: Survey uncollected and handling losses without treating them as saleable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
- Normalization basis: per harvested lot
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg raw seed
  - Basis: per harvested lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

None.

### Process: Drying and primary conditioning (`drying_and_conditioning`)

#### Inputs

##### Product flows

###### Raw oilseed input (`raw_oilseed_input`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: kg
- Amount rule: Transfer measured raw seed at incoming moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
- Normalization basis: incoming conditioning lot
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg conditioned seed
  - Basis: incoming conditioning lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning energy (`conditioning_energy`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: kWh, MJ, L or kg
- Amount rule: Metered electricity and thermal fuel by lot; expand each actual carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology Specific (`technology_specific`)
- Normalization basis: per conditioned lot
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh-equivalent/kg conditioned seed
  - Basis: per conditioned lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning water (`cleaning_water`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Flow property / unit: kg or m3
- Amount rule: Metered water only when wet cleaning occurs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route Specific (`route_specific`)
- Normalization basis: per conditioned lot
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: L/kg conditioned seed
  - Basis: per conditioned lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Conditioned oilseed grain (`conditioned_oilseed`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: kg
- Amount rule: Measured conditioned seed at declared moisture and purity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
- Normalization basis: conditioned lot output
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg/kg raw seed
  - Basis: conditioned lot output
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cleaning rejects and foreign matter (`cleaning_rejects`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select route-specific reject or organic residue flow
- Flow property / unit: kg
- Amount rule: Measure stones, chaff, broken seed and foreign matter by fate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
- Normalization basis: per conditioned lot
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg raw seed
  - Basis: per conditioned lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Dust from dry handling (`dust_release`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select exact particulate identity and receiving air compartment
- Flow property / unit: kg
- Amount rule: Measure or calculate released dust after capture; do not use a generic particulate UUID.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology Specific (`technology_specific`)
- Normalization basis: per conditioned lot
- Basis kind: `process_output`
- Evidence kind: Calculated From Collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg conditioned seed
  - Basis: per conditioned lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grading, packaging and storage (`grading_packaging_and_storage`)

#### Inputs

##### Product flows

###### Conditioned oilseed input (`conditioned_oilseed_input`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: kg
- Amount rule: Transfer conditioned seed to grading, storage or load-out.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
- Normalization basis: incoming finalization lot
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_final`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg product
  - Basis: incoming finalization lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Flow property / unit: kg or item
- Amount rule: Record actual bags, liners or labels; zero for bulk delivery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
- Normalization basis: per final product lot
- Basis kind: `reference_flow`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg product
  - Basis: per final product lot
  - Basis kind: `reference_flow`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage and load-out energy (`storage_energy`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: kWh
- Amount rule: Metered or allocated energy for ventilation, handling and load-out.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
- Normalization basis: per final product lot
- Basis kind: `reference_flow`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg product
  - Basis: per final product lot
  - Basis kind: `reference_flow`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Declared other oilseed at gate (`reference_product`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: kg
- Amount rule: Net accepted mass for one declared species, use, moisture, grade and gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: `reference_flow`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_final`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg product
  - Basis: reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded saleable oilseed (`downgraded_oilseed`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Other oilseeds, n.e.c. `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- Flow property / unit: kg
- Amount rule: Measure separately when a lower grade remains a saleable oilseed output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product Specific (`product_specific`)
- Normalization basis: per grading lot
- Basis kind: `process_output`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_final`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg graded input
  - Basis: per grading lot
  - Basis kind: `process_output`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Final rejects and packaging waste (`final_rejects`)

This card records the real physical flow for this process role; model it by the declared batch or crop cycle only when the route is active.

- Selected flow: Select actual reject or packaging waste fate flow
- Flow property / unit: kg
- Amount rule: Measure off-spec seed and packaging waste separately by fate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site Specific (`site_specific`)
- Normalization basis: per final product lot
- Basis kind: `reference_flow`
- Evidence kind: Collected Record (`collected_record`)
- Collection protocol: `cp_final`
- Range: Provisional screening interval; actual foreground records determine the amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg product
  - Basis: per final product lot
  - Basis kind: `reference_flow`
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

None.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_assignment | all nodes | Directly assign measurable species-, field-, batch-, grade- and use-specific inputs. | mass-balance-identity |
| multi_output | saleable seed grades and species-specific co-products | Record every intended output separately; allocate shared burdens by mass at the declared moisture basis unless reviewed economic evidence supports another rule. | mass-balance-identity |
| residue_fate | stalks, hulls, pods and rejects | Treat as a co-product only with an independent saleable destination and reference flow; otherwise record residue or waste and fate. | mass-balance-identity |
| shared_assets | shared machinery, drying and storage | Attribute once by measured hours, energy or throughput and prevent duplication between field and conditioning nodes. | mass-balance-identity |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All ranges are provisional QA screens, not default inventory values or compliance limits.

### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_field | managed_production | field inputs | primary activity record | species, field area, planting, product IDs, nutrient composition, water and protection products | field log, invoices and meters | ha; kg; m3; L | each operation | complete crop cycle | declared field or protected unit | sum by product and field-cycle; each nutrient product once | invoices, labels, calibrated meters |
| cp_energy | all processes | energy carriers | meter or allocation record | carrier, quantity, unit, equipment, hours and process | meter, fuel ticket or equipment log | kWh; MJ; L; kg | each operation or batch | complete crop cycle and conditioning lots | named field and facility | sum by carrier and assign once to process | meter calibration, invoices, machine logs |
| cp_yield | managed_production | crop yield | weighing and survey record | standing estimate, harvested mass, area and loss | calibrated scale and field survey | kg; ha | each harvest lot | complete harvest window | field and lot | reconcile standing, harvested and field-loss mass | scale certificate and survey sheet |
| cp_emissions | managed_production | soil emissions | calculation input record | N inputs, species, medium, soil and method factors | nutrient ledger and declared method | kg N; kg emission | each crop cycle | all managed periods | field | calculate separately by species and receiving medium | nutrient ledger and method sheet |
| cp_harvest | harvest_and_extraction | seed and residues | lot mass record | gross crop, raw seed, residues, losses, technology and destination | calibrated weighing and lot log | kg | each lot | complete harvest window | field and lot | mass reconcile all outputs and stock change | scale certificate and lot tickets |
| cp_conditioning | drying_and_conditioning | moisture, product and rejects | batch record | incoming and outgoing mass, moisture, foreign matter, dust, water and route | scale, moisture test, meter and batch log | kg; %; m3 | each batch | all conditioning batches | conditioning line and batch | dry-matter and wet-mass reconciliation by batch | scale and moisture calibration, batch sheet |
| cp_packaging | grading_packaging_and_storage | packaging | material issue record | material type, mass, count, reuse and product lot | warehouse issue and packaging log | kg; item | each lot | all packed lots | packing line and lot | sum virgin and reused materials separately | invoice, issue ticket, count check |
| cp_final | grading_packaging_and_storage | grades and reference product | final lot record | species, use, moisture, grade, accepted, downgraded, rejected and stock change | calibrated scale, grade test and dispatch ticket | kg; % | each lot | all released lots | facility, store and lot | reconcile incoming with grades, rejects and stock change | scale certificate, lab or grade report, dispatch ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inputs | Divide same-cycle or same-batch input by net accepted product at the declared gate. | activity records and product mass | inventory per kg reference product |  |
| moisture_balance | drying | Conserve dry matter; calculate removed water from measured incoming and outgoing moisture and check losses. | incoming/outgoing mass and moisture | dry-matter discrepancy | mass-balance-identity |
| lot_balance | harvest and conditioning | Input plus stock decrease equals products, residues, wastes, releases and stock increase. | all measured lot flows | mass discrepancy | mass-balance-identity |
| nutrient_expand | nutrient inputs | Emit each physical product exchange once and retain composition for analytical N/P/K; do not duplicate compound products. | product ID, mass and composition | concrete product exchanges and nutrient ledger |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference product | Species, use, moisture, grade, route and gate shall all be populated. | lot and dispatch records |
| dq_mass | all processes | Calibrate scales and reconcile field, harvest, conditioning and final-lot balances. | calibration certificates and balance sheet |
| dq_route | conditional processes | Activate only conditioning, packaging and storage routes that actually occur. | operation and batch logs |
| dq_binding | all exchanges | After Flow Set expansion, each final exchange requires a verified UUID and selection evidence. | flow identity audit |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_other | product identity | Confirm the named species belongs in CPC 01449 and has no separate oilseed CPC leaf. | unsd-cpc-30 |
| validate_reference | reference flow | Check 1 kg net mass and mandatory species, use, moisture, grade and gate qualifiers. | mass-balance-identity |
| validate_balance | each lot | Reconcile inputs, outputs, losses, stock and moisture change without double-counting transfers. | mass-balance-identity |
| validate_ranges | every card | Investigate observations outside screens, but do not reject supported real measurements solely for exceeding a provisional interval. |  |
| validate_sets | parameterized inputs | Check current Flow Set version, group constraint and concrete UUID evidence; allow at most one nutrient card per process. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | species-, field- and batch-specific other-oilseed foreground data package |
| downstream_use | `secondary_dataset`; may serve as `background_dataset` after geography, technology and time matching |
| allowed_use | modelling one named CPC 01449 oilseed from production to the declared gate |
| excluded_use | other CPC oilseeds, sowing seed, oil, meal or multi-species averages |
| required_metadata | species, use, moisture, grade, geography, cycle, production technology, conditioning route, gate and allocation |
| required_quality_disclosure | weighing and moisture checks, Flow Set expansion, unresolved identities, provisional ranges and gaps |
| update_trigger | change in species, use, technology, moisture, grade, gate, allocation or method factor |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-30 | official_guidance | United Nations Statistics Division, CPC Version 3.0, https://unstats.un.org/unsd/classifications/Econ/cpc | category boundary and residual-category decision |
| fao-grain-storage | official_guidance | FAO, Grain storage techniques, https://www.fao.org/4/s1250e/S1250E0u.htm | drying, cleaning, storage and moisture-record route |
| mass-balance-identity | method_factor | Conservation relation for mass inputs, outputs, losses and stock change | batch and moisture mass reconciliation |
