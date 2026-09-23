---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-dry
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Broad beans and horse beans, dry

## 1. Scope and Applicability

This PCR covers mature dry *Vicia faba* grain marketed as broad, faba, field, or horse bean at the farm gate. It includes cool-season field production, mature harvest, necessary pre-drying, threshing, cleaning, conditional moisture-controlled drying, and grading. It excludes green beans and pods, other dry-pulse species, planting seed sold under a seed specification, cover-crop biomass without dry-grain harvest, and all post-gate transport or processing.

Declare winter/spring sowing, rainfed/irrigated management, manual/mechanical harvest, threshing arrangement, natural/mechanical drying, target moisture, grade, crop cycle, site and reporting period. Alternative routes are deltas from their parent activity and may coexist only as separately measured lots or documented shares.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-dry |
| classification_refs | CPC 3.0 `01702` Broad beans and horse beans, dry |
| covered_products | mature dry *Vicia faba* grain sold as broad, faba, field, or horse bean |
| excluded_products | green/fresh beans; planting seed sold as seed; other dry pulses; forage, silage, cover crop or green manure; processed bean fractions |
| representative_product | cleaned and graded mature dry *Vicia faba* grain |
| production_route | managed cool-season field production, mature harvest, threshing/cleaning, conditional drying and grading; route deltas are declared from their parent node |
| market_state | harvested grain, unprocessed, at `Production mix, at farm gate`, with moisture, grade and intended food/feed market declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | cleaned, graded, mature dry *Vicia faba* grain accepted at farm gate |
| How much | 1,000 kg net grain mass |
| How well | declared moisture and market grade; excludes foreign matter, straw/hulls, shattering loss, downgraded grain, rejects and seed sold for planting |
| How long or cycle | one declared crop cycle and linked conditioning lots |
| reference_flow_link | accepted output of `farm_gate_grading` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Broad beans and horse beans, dry `b9ccab43-8330-44f4-b125-456e97ec6e87` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | *Vicia faba* identity; mature dry grain; production geography; winter/spring crop; rainfed/irrigated; harvest, threshing and drying route; wet-basis moisture; grade; market; accepted, downgraded, rejected, residue and loss quantities; crop cycle; farm-gate hand-off |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net grain mass at measured farm-gate moisture; exclude packaging, foreign matter, residues, downgraded grain and rejects. |
| `moisture_conversion` | grain before/after drying | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and % wet basis | Preserve dry matter: `dry matter = wet mass × (1 − moisture fraction)`; convert only from paired mass and moisture observations. |
| `nutrient_products` | all mineral/organic fertilizers and nutrient-bearing amendments | product mass and analysis | kg product and kg nutrient | Collect each product and analysis separately, but use one consolidated nutrient-supply Product-input card per process. |
| `area_yield` | field production | area and accepted grain mass | ha and kg | Calculate yield from cultivated area and accepted grain in the same crop cycle; disclose failed area. |
| `energy_identity` | all energy uses | carrier-specific property | original unit plus MJ or kWh | Preserve carrier, original quantity and conversion basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field and purchased or retained planting material entering the declared crop cycle |
| starting_condition_role | foreground agricultural start; preceding crop, land occupation and retained-seed origin disclosed when material |
| product_classification_scope | mature dry *Vicia faba* grain represented by CPC 3.0 `01702` |
| recursive_input_rule | retained grain used for sowing is an input from a separately described prior-cycle or seed dataset, not current-cycle reference output |
| upstream_dataset_requirement | supplier/region-specific datasets for planting material, nutrients, crop protection, water and energy; actual identities retained |
| disclosure | site, season, cultivar class, prior crop, sowing, irrigation, management, harvest state, pre-drying, threshing, cleaning, drying, grading, moisture, destinations and hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | full route | Include field establishment and management through accepted graded dry grain, including route-specific pre-drying, threshing, cleaning, drying and grading. | `vce-faba-bean-2024`; `fao-grain-postharvest` |
| `boundary_identity` | reference output | Count only mature dry *Vicia faba* grain; exclude green harvest, planting-seed certification, other pulses and downstream processing. | `vce-faba-bean-2024`; `feedipedia-faba-bean` |
| `boundary_harvest_node` | harvest | Keep harvest distinct because standing crop becomes collected material and creates shattering, field-residue and hand-off records before conditioning. | `fao-predrying` |
| `boundary_conditioning_states` | post-harvest | Record harvested material, clean grain, stabilized grain, residues, removed water, rejects and losses at their actual hand-offs. | `fao-grain-postharvest` |
| `boundary_residue_destination` | residues | Separate returned, removed, burned and discarded residues in soil-emission calculations and prevent double counting. | `ipcc-2019-managed-soils` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_field_production` | Managed faba bean production | `required` | always | biological-production parent with winter/spring and rainfed/irrigated route delta records | crop cycle and cultivated hectare |
| `mature_crop_harvest` | Mature harvest and pre-drying | `required` | always; pre-drying may be zero | independent capture parent with manual, windrow and combine technology delta records | kg standing crop entering harvest |
| `threshing_cleaning` | Threshing and cleaning | `required` | may be physically integrated with harvest but quantitatively distinct | primary conditioning to clean grain | kg collected material |
| `moisture_stabilization` | Moisture-controlled drying | `conditional` | grain above declared gate moisture or active drying/aeration | preservation to stable moisture | kg clean grain entering drying |
| `farm_gate_grading` | Grading and hand-off | `required` | always | sorting to accepted, downgraded, rework and reject states | kg conditioned grain |

Crop production is indexed by cycle; harvest and conditioning by lot/run. Meter alternative routes or weight them by accepted output. Assign shared cleaning, idle and changeover burdens once.

### Process: Managed faba bean production (`managed_field_production`)

#### Inputs

##### Product flows

###### Planting material (`planting_material`)

Record purchased seed or retained mature grain actually sown.

- Selected flow: *Vicia faba* planting material
- Flow property / unit: Mass / kg
- Amount rule: measured mass sown, net of unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Range: Provisional sowing-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 600
  - Unit: kg
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated nutrient products (`nutrient_products`)

This sole nutrient card covers every mineral fertilizer, organic fertilizer, lime and nutrient-bearing amendment. Raw records retain actual products and analyses for concrete UUID resolution.

- Selected flow: agricultural nutrient supply products
- Flow property / unit: Mass / kg product, with nutrient analysis
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: sum product masses after retaining individual product records; zero when none
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Range: Provisional nutrient-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg product
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

Record withdrawal or delivered water only for irrigated lots, preserving source and conveyance boundary.

- Selected flow: irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: measured withdrawal or delivered volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field treatment products (`field_treatment_products`)

Record formulated crop-protection products and non-nutrient inoculants by product and concentration.

- Selected flow: crop-protection and non-nutrient inoculation products
- Flow property / unit: Mass or volume / kg or L formulated product
- Amount rule: measured formulated-product amount applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Range: Provisional treatment-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg or L formulated product
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy (`field_energy`)

Record fuels and electricity for soil preparation, sowing, irrigation pumping and crop management.

- Selected flow: field-operation energy carriers
- Flow property / unit: Energy / MJ and kWh, preserving carrier quantity
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: carrier-specific metered or invoiced use allocated to crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ energy-equivalent
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standing mature crop (`standing_mature_crop`)

Hand the mature crop to harvest; it is not accepted dry grain.

- Selected flow: standing mature *Vicia faba* crop
- Flow property / unit: Mass / kg above-ground harvested fraction
- Amount rule: harvested material plus measured field/shattering losses, moisture state declared
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot`
- Range: Source-supported yield plausibility screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 111
  - Upper: 909
  - Unit: m2 cultivated area
  - Basis: area implied by 1.1–9 t/ha reported dry-seed yield per 1,000 kg accepted grain, before losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `feedipedia-faba-bean`

##### Waste flows

##### Elementary flows

###### Managed-soil emissions (`managed_soil_emissions`)

Calculate substance- and compartment-specific emissions from nutrient inputs, residue N, deposition, leaching, lime and urea using the declared national or IPCC method.

- Selected flow: managed-soil emissions by substance and compartment
- Flow property / unit: Mass / kg substance
- Amount rule: method calculation from collected field and residue records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_field_cycle`
- Sources: `ipcc-2019-managed-soils`
- Range: Provisional aggregate soil-emission screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg reported substances
  - Basis: per 1,000 kg accepted dry grain; substances remain separate before screening
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Mature harvest and pre-drying (`mature_crop_harvest`)

#### Inputs

##### Product flows

###### Harvest energy (`harvest_energy`)

Record fuels/electricity for cutting, pulling, windrowing, combining, pickup and movement to conditioning.

- Selected flow: harvest energy carriers
- Flow property / unit: Energy / MJ and kWh, preserving carrier quantity
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: carrier-specific use assigned to lot/period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`
- Range: Provisional harvest-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ energy-equivalent
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected harvest material (`collected_harvest_material`)

Record collected pods/plants or combine material as the intended output and record its pre-drying state at the conditioning hand-off.

- Selected flow: collected mature faba bean harvest material
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with moisture and included plant fractions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`
- Sources: `fao-grain-postharvest`; `fao-predrying`
- Range: Provisional collected-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 6000
  - Unit: kg wet harvested material
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Valuable field residues (`field_residue_product`)

Record removed straw/stems as co-product only with a beneficial destination and positive value; returned residues stay in residue management.

- Selected flow: faba bean field residues with beneficial destination
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured/calculated removed dry matter by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot`
- Sources: `vce-faba-bean-2024`; `ipcc-2019-managed-soils`
- Range: Provisional removed-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg dry matter
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shattering and harvest loss (`harvest_grain_loss`)

Record grain lost by shattering, pickup or harvest operation; never include it in accepted/downgraded output.

- Selected flow: faba bean grain lost during harvest
- Flow property / unit: Mass / kg
- Amount rule: measured loss sample or lot mass-balance estimate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot`
- Sources: `fao-predrying`; `feedipedia-faba-bean`
- Range: Provisional harvest-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg grain
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Threshing and cleaning (`threshing_cleaning`)

#### Inputs

##### Product flows

###### Conditioning energy (`conditioning_energy`)

Record fuels/electricity for threshing, shelling, winnowing, screening and material movement.

- Selected flow: conditioning energy carriers
- Flow property / unit: Energy / MJ and kWh, preserving carrier quantity
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: carrier use metered/allocated to lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional conditioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: MJ energy-equivalent
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned grain (`cleaned_grain`)

Record threshed/cleaned grain as the intended output with incoming moisture; send it to drying when above target, otherwise to grading.

- Selected flow: cleaned mature faba bean grain
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass after foreign matter removal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `fao-grain-postharvest`
- Range: Provisional clean-grain screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1800
  - Unit: kg at incoming moisture
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Valuable straw and hulls (`conditioning_residue_product`)

Record separated straw/hulls as co-product only with beneficial destination and positive value.

- Selected flow: faba bean straw and pod hulls with beneficial destination
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured/moisture-corrected mass by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional residue-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4000
  - Unit: kg dry matter
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cleaning rejects (`conditioning_rejects`)

Record contaminated straw/hulls, soil, stones, foreign matter and unrecovered grain by class and destination.

- Selected flow: discarded threshing and cleaning residues
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional conditioning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg residues
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Moisture-controlled drying (`moisture_stabilization`)

#### Inputs

##### Product flows

###### Drying energy (`drying_energy`)

Record fuels/electricity/purchased heat for drying or aeration; natural drying records zero purchased energy plus time/weather.

- Selected flow: drying and aeration energy carriers
- Flow property / unit: Energy / MJ and kWh, preserving carrier quantity
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: carrier use metered to lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_lot`
- Range: Provisional drying-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ energy-equivalent
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized grain (`stabilized_grain`)

Record grain handed to grading after natural/mechanical drying with paired mass and moisture.

- Selected flow: moisture-stabilized mature faba bean grain
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass verified by dry-matter balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_lot`
- Sources: `fao-grain-postharvest`; `feedipedia-faba-bean`
- Range: Source-supported moisture screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 14
  - Unit: percent moisture, wet basis
  - Basis: stabilized grain lot; above 12% requires aeration/destination justification and above 14% explicit non-storage hand-off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-grain-postharvest`; `feedipedia-faba-bean`

##### Waste flows

###### Drying loss (`drying_loss`)

Record spilled, mould-, heat- or pest-damaged grain; exclude calculated water removal.

- Selected flow: grain rejected during drying
- Flow property / unit: Mass / kg
- Amount rule: measured loss plus reconciled unexplained dry-matter loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_lot`
- Range: Provisional drying-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg grain dry-matter equivalent
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Removed water (`removed_water`)

Calculate water removed from paired mass/moisture and keep it separate from dry-matter loss.

- Selected flow: water to air from grain drying
- Flow property / unit: Mass / kg
- Amount rule: incoming water mass minus outgoing water mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_lot`
- Sources: `fao-grain-drying`
- Range: Provisional removed-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg water
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grading and hand-off (`farm_gate_grading`)

#### Inputs

##### Product flows

###### Grading energy (`grading_energy`)

Record electricity/fuel for screens, separators, conveyors and handling, including shared cleaning once.

- Selected flow: grading energy carriers
- Flow property / unit: Energy / MJ and kWh, preserving carrier quantity
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: carrier use assigned to grading lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_lot`
- Range: Provisional grading-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ energy-equivalent
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dry grain (`accepted_dry_grain`)

The intended reference output is accepted grain at declared grade, moisture and farm-gate hand-off.

- Selected flow: Broad beans and horse beans, dry `b9ccab43-8330-44f4-b125-456e97ec6e87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: 1,000 kg net accepted grain
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Range: Reference-output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: one reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

###### Downgraded grain (`downgraded_grain`)

Record damaged, split, undersized or off-grade grain as co-product only with sale/beneficial destination; exclude it from accepted output.

- Selected flow: downgraded mature faba bean grain by grade and destination
- Flow property / unit: Mass / kg
- Amount rule: measured net mass at each beneficial hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_lot`
- Range: Provisional downgraded-grain screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg grain
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading rejects (`grading_rejects`)

Record off-spec grain without beneficial destination and foreign material as waste. Rework loops to cleaning or grading and is counted only at final hand-off.

- Selected flow: grading rejects and discarded off-spec grain
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass net of documented rework return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted dry grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_lot`
- Range: Provisional grading-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg rejects
  - Basis: per 1,000 kg accepted dry grain
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_output_classification` | all outputs | Assign each quantity once to accepted product, valuable co-product, field-returned residue, rework, downgraded product, waste or loss at one hand-off. | `ipcc-2019-managed-soils` |
| `allocation_residue_default` | straw/stems/leaves/hulls | Field-returned material has no co-product allocation; removed material is a co-product only with beneficial destination and positive value, otherwise waste. | `vce-faba-bean-2024`; `ipcc-2019-managed-soils` |
| `allocation_economic_precedence` | independently valuable co-products | Use economic allocation with contemporaneous farm-gate values; otherwise single-output treatment. Report mass-allocation sensitivity when values are unavailable, unstable, or based on fewer than three representative transactions. |  |
| `allocation_rework` | damaged/off-spec grain | Retain burdens through re-cleaning/re-grading, count loop energy once, and classify material only at final hand-off. |  |
| `allocation_route_period` | mixed routes/shared runs | Attribute field burdens by crop cycle and post-harvest burdens by metered lot or throughput share; assign shared cleaning/changeover once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle` | `managed_field_production` | inputs, area and emission drivers | field log/invoice/meter | crop; field; dates; area; seed; each nutrient product/analysis; treatments; water; carriers; lime/urea; prior crop | reconcile logs, invoices, meters and maps | native units, kg, L, m3, MJ, kWh, ha | each operation | crop cycle | each field/route | retain product rows; sum like identities; allocate shared use by documented driver | invoices, calibration, map, application/meter log |
| `cp_harvest_lot` | `mature_crop_harvest` | crop, collected state, residues and losses | ticket/sample/log | lot; maturity; route; pre-drying; masses; moisture; fractions; shatter; residue dry matter/destination; energy | scales plus representative loss sampling | kg, %, kg DM, MJ, kWh | field/lot | harvest period | field/route | reconcile standing, collected, residue and loss; weight routes by accepted output | calibration, sample design, log |
| `cp_conditioning_lot` | `threshing_cleaning` | clean grain, residues, rejects and energy | batch/meter/scale | lot; route; mass/moisture; residue mass/moisture/destination/value; rejects; energy/changeover | calibrated instruments and destination records | kg, %, kg DM, MJ, kWh | lot/run | campaign | line/site | close wet/dry mass balance; assign shared burdens once | calibration, batch sheet, receipt |
| `cp_drying_lot` | `moisture_stabilization` | stable grain, energy, water and loss | dryer/meter/moisture log | lot; technology; paired mass/moisture; duration; temperature; airflow; carriers; losses | calibrated mass/moisture and energy records | kg, %, MJ, kWh, h, °C | lot | campaign | drying route | preserve dry matter; calculate water; assign energy/loss | calibration, dryer/meter/inspection log |
| `cp_grading_lot` | `farm_gate_grading` | accepted, downgraded, rework and rejects | grading/scale/sales record | lot; incoming mass/moisture; criteria; each output mass/destination/value; rework; energy; date | scale/sorter reconciled to destination | kg, %, currency/kg, MJ, kWh | lot | reporting period | grading site | accepted + downgraded + rejects = input − measured loss; rework only at final hand-off | calibration, ticket, invoice, receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_dry_matter` | moisture conversion | `dry matter = wet mass × (1 − wet-basis moisture fraction)`; normalized wet mass = dry matter / (1 − target fraction) | paired mass/moisture | dry matter and normalized mass | `fao-grain-drying` |
| `calc_removed_water` | drying | incoming water minus outgoing water; do not count as dry-matter loss | paired mass/moisture | kg water | `fao-grain-drying` |
| `calc_accepted_yield` | field/reference | accepted net grain divided by cultivated area; disclose failed area and moisture | output, area, moisture | kg/ha |  |
| `calc_residue_n` | returned residue | selected national method or IPCC Equation 11.6, separating above/below ground and removed/burned fractions | yield, residue DM/N, destination fractions | kg residue N returned | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | post-harvest lots | incoming dry matter = accepted + downgraded + valuable residue + final waste/loss dry matter; investigate residual | all states/moisture | closure error/flag |  |
| `calc_route_mix` | route alternatives | sum(route result × accepted-output share); enter shared burdens once | route inventories/shares | production mix |  |
| `calc_economic_allocation` | valuable outputs | output value / sum independently valuable output values on same period/moisture basis | masses/prices/moisture | allocation fractions |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | grain | Demonstrate *Vicia faba*, mature dry-grain purpose, market name, grade and non-seed hand-off. | crop/lot/specification/invoice |
| `dq_temporal` | route | Link one representative crop cycle to its post-harvest lots; justify averaging and retain failed crops. | dated records |
| `dq_measurement` | mass/moisture/energy/water | Use calibrated instruments or documented invoices/meters; retain basis, uncertainty and substitutions. | calibration and raw records |
| `dq_completeness` | output states | Reconcile accepted, downgraded, reworked, residue, waste, shattering, handling and removed-water states. | node balances/receipts |
| `dq_route_specificity` | alternatives | Keep winter/spring, rainfed/irrigated, manual/mechanical and natural/mechanical drying records separate before mixing. | route-coded records |
| `dq_flow_identity` | parameterized/unmapped rows | Resolve every emitted Product exchange and substance/compartment-specific elementary exchange to verified UUIDs before TIDAS publication. | resolution record |
| `dq_range_review` | quantitative rows | Use ranges only as QA screens; investigate exceptions and retain foreground values. | QA note/raw record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference output | Require the stated product/property/unit-group UUIDs, 1,000 kg, mature dry *Vicia faba*, moisture, grade and farm-gate hand-off. |  |
| `validate_scope` | package | Reject green beans, planting seed sold as seed, other pulse species, downstream processing or post-gate transport in the reference output. |  |
| `validate_processes` | graph | Require field production, harvest, threshing/cleaning and grading; require drying when moisture exceeds target or active drying/aeration occurs. | `fao-grain-postharvest`; `fao-predrying` |
| `validate_route_delta` | alternatives | Name parent and real topology/inventory/calculation/data/validation delta; require shares for coexisting routes and forbid unqualified merging of mutually exclusive routes. |  |
| `validate_mode_indexing` | cycles/lots/runs | Link inputs, outputs, cleaning and changeover to cycles/lots/periods; prevent duplicate shared-run burdens. |  |
| `validate_nutrient_cardinality` | each process | At most one nutrient Product-input card, bound only to `flow-set.agricultural-nutrient-supply@0.3.0` without group; retain actual products separately. |  |
| `validate_output_states` | all output nodes | Give every accepted, downgraded, reworked, valuable residue, returned residue, waste and loss one class and hand-off; rejected material cannot be accepted output. |  |
| `validate_allocation` | multi-output nodes | Require explicit single-output/economic decision, values and period; require mass sensitivity when values are weak and prevent double hand-offs. |  |
| `validate_moisture` | drying/final grain | Require paired mass/moisture, dry-matter preservation, separate removed water and investigation of unexplained loss. | `fao-grain-drying` |
| `validate_rework` | rejects | Point rework to cleaning or grading, retain prior burdens, count loop energy once and record final destination. |  |
| `validate_ranges` | Flow Cards | Require exactly one complete Range per quantitative card and exact EN/ZH/structured agreement of label, role, bounds, unit, basis, basis kind, evidence kind and source ids. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for mature dry *Vicia faba* grain at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness review |
| allowed_use | farm-gate footprints and supply-chain models for unprocessed dry broad/faba/horse bean grain with declared moisture, grade and route |
| excluded_use | green beans; planting seed; other pulses; processed ingredients; undisclosed generic pulse proxy |
| required_metadata | identity; geography; crop cycle; season route; irrigation; prior crop; harvest/threshing/drying/grading; moisture; grade; market; route shares; destinations; allocation; hand-off |
| required_quality_disclosure | age/coverage; primary share; calibration; substitutions; range exceptions; mass balance; residue destinations; emission method; allocation/sensitivity; unresolved identities |
| update_trigger | material change in cultivar, route, input regime, yield/climate, technology, moisture/grade, destination/value, allocation/emission method, or data older than five years |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `vce-faba-bean-2024` | `extension_guidance` | Virginia Cooperative Extension, *Faba Bean: A Multipurpose Specialty Crop for the Mid-Atlantic USA*, SPES-590, https://www.pubs.ext.vt.edu/SPES/spes-590/spes-590.html | identity, green/dry distinction, cool-season production, residue return |
| `fao-grain-postharvest` | `official_guidance` | FAO, *Agricultural engineering in development: Grain and post-harvest systems*, https://www.fao.org/4/T0522E/T0522E03.htm | harvest, pre-drying, threshing, cleaning, drying and about 14% storage moisture |
| `fao-predrying` | `official_guidance` | FAO, *Agricultural engineering in development: Pre-drying*, https://www.fao.org/4/T0522E/T0522E06.htm | pre-drying boundary, route conditions and field-delay losses |
| `fao-grain-drying` | `handbook` | FAO, *Farm structures in tropical climates: Grain drying*, https://www.fao.org/4/s1250e/S1250E0u.htm | wet-basis moisture, dry-matter conversion and drying controls |
| `feedipedia-faba-bean` | `handbook` | Feedipedia (INRAE, CIRAD, AFZ and FAO), *Faba bean (Vicia faba)*, https://feedipedia.review.fao.org/node/4926 | identity, maturity, 1.1–9 t/ha yield span, shattering/splitting and 12% storage moisture |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, *2019 Refinement, Volume 4, Chapter 11*, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil emissions, N-fixing pulse residue N and destination double-counting prevention |
