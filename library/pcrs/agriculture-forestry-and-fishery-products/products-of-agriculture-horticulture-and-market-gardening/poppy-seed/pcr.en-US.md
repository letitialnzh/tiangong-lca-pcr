---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.poppy-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Poppy seed

## 1. Scope and Applicability

This rule covers annual Papaver somniferum L. production for seed, mature capsule harvest, separation of seed, and any measured ventilation, drying or preliminary cleaning before farm-gate hand-off. The reference product is harvested grain, unprocessed, at farm gate. Food, oil and other end uses are downstream declarations, not changes to this reference flow. Moisture and purity values in European food-seed guidance are conditional regional/use examples, not universal acceptance limits for this category. Exclude oil pressing, deep food cleaning or alkaloid-removal treatment, pharmaceutical extraction, opium production, certified planting-seed grading and off-farm transport. Sources: `eu-poppy-2014`, `usu-seed-poppy`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.poppy-seed` |
| classification_refs | CPC 3.0 01448 (classification locator only) |
| covered_products | Harvested poppy seed separated from mature capsules and handed off unprocessed at farm gate; declare food or oil destination and measured moisture/impurity state |
| excluded_products | Capsule, poppy straw, opium latex, poppy seed oil, alkaloid-reduced food ingredient, certified planting seed |
| representative_product | Net weighed harvested seed |
| production_route | Managed direct-sown crop → distinct mature capsule harvest and seed separation → conditional farm conditioning only when performed; hand and combine harvest use separately recorded energy, loss and seed-damage fields |
| market_state | Production mix, at farm gate; Harvested grain, unprocessed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Unprocessed poppy seed at farm gate |
| How much | 1 kg net seed |
| How well | Declare lot moisture, impurities, damage and intended market; no assumed food grade |
| How long or cycle | One recorded annual crop cycle and linked harvest lot |
| reference_flow_link | Sole reference product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Poppy seed `c49b37e3-df47-4caf-9a6a-2df1a528800a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Papaver somniferum seed; farm gate; unprocessed; lot, moisture, impurities, main destination, harvest and conditioning route |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Net reference seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh at delivered moisture/impurity state; do not include capsule or oil. |
| `field_to_gate` | Field and harvest inputs | Applicable mass, volume or energy | per hectare and per kg | Divide crop-cycle totals by net seed delivered for that cycle; retain area, total yield and conversion factor. |
| `moisture_basis` | Seed and straw | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State wet/dry basis before mass comparison; if drying occurs, record before/after moisture and water loss. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Field ready for sowing with concrete planting seed, fertilizer and other product inputs entering this crop cycle |
| starting_condition_role | Link sowing seed and purchased inputs to upstream product exchanges; disclose prior rotation and land state separately |
| product_classification_scope | Harvested poppy seed, excluding capsule, straw, latex, oil and certified planting seed |
| recursive_input_rule | For retained poppy seed sown in this cycle, record real amount and preceding-cycle origin; do not recursively supply this cycle's reference output to itself |
| upstream_dataset_requirement | Each purchased input needs suitable upstream data; unresolved concrete flow identity remains explicit instead of a generic substitute |
| disclosure | Field, cycle, seed destination, harvest mode, capsule/straw fate, farm conditioning switch, moisture and impurities |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `annual_crop_boundary` | Sowing to farm gate | Include sowing, field management, harvest, seed separation and any performed farm conditioning; separate harvest from cultivation to avoid mixing equipment fuel. This package is limited to its crop cycle without storage. | `usu-seed-poppy` |
| `food_route_condition` | Food-destination lots | Record operations limiting capsule-dust contamination and any needed later cleaning; European food-use advice is conditional, not a universal rule for unprocessed farm-gate seed. | `eu-poppy-2014` |
| `route_delta` | Hand and combine harvest | Parent activity is capsule harvest and seed separation; technology changes energy input, seed-damage and dropped-seed loss records. A lot may have successive operations, but throughput is counted once. | `eu-poppy-2014`; `usu-seed-poppy` |
| `conditioning_only_if_used` | Ventilation, drying, preliminary cleaning | Every raw-seed lot passes through this hand-off node; record before/after moisture, energy, rejected seed, captured capsule dust and other foreign material only when treatment occurs; direct hand-off has zero additional conditioning exchanges. | `eu-poppy-2014` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field` | Managed seed-poppy cultivation | required | All included annual crop cycles | Establish and manage Papaver somniferum for seed, handing mature crop to harvest. | per cultivated hectare and linked crop cycle |
| `harvest` | Capsule harvest and seed release | required | All represented seed harvests | Independently capture mature capsules and release raw seed; track collected straw, dropped seed and broken capsules as distinct physical outputs. | per cultivated hectare and harvest lot |
| `conditioning` | Farm-gate hand-off with conditional primary conditioning and preservation | required | Every raw-seed lot is handed off; ventilation, drying or preliminary cleaning only when performed | Record pre/post moisture, energy, rejected seed, captured capsule dust, other impurities and moisture loss separately when conditioning occurs; no food processing. | per linked raw-seed lot |

### Process: Managed seed-poppy cultivation (`field`)

#### Inputs

##### Product flows

###### Poppy seed for sowing (`sowing_seed`)

Purchased or retained sowing seed entering the crop cycle.

- Selected flow: Poppy seed for sowing
- Flow property / unit: Mass / kg
- Amount rule: Mass actually sown, excluding unsown inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`field_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources:
- Range: Consolidated nutrient-product QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg product/ha
  - Basis: sum of separately recorded mineral fertilizer, organic fertilizer, lime and nutrient-bearing amendment product masses per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Applied irrigation water (`irrigation_water`)

Only supplied irrigation water crosses the foreground product boundary; rainfall is reported separately.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or documented delivered irrigation volume; zero for rain-fed fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop protection product (`crop_protection`)

Record applied active product and formulation without assuming every crop receives treatment.

- Selected flow: Crop protection product
- Flow property / unit: Mass / kg
- Amount rule: Measured formulation mass applied; zero when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery fuel (`field_fuel`)

Count combustion fuel used for soil preparation, sowing and crop management, not harvest fuel.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Fuel use from equipment logs or apportioned run records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: L/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Mature seed-bearing poppy crop (`mature_crop`)

Intermediate standing biomass handed from cultivation to harvest; not the reference seed.

- Selected flow: Mature poppy crop
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced harvestable crop biomass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_harvest`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pre-harvest field vegetation residue (`field_residue`)

Leaves and stems left in the field before harvest are distinct from harvest-stage dropped seeds and broken capsules.

- Selected flow: Field vegetation residue
- Flow property / unit: Mass / kg
- Amount rule: Estimated retained dry or fresh mass with moisture basis declared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_harvest`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct soil nitrous oxide (`soil_n2o`)

Model direct N2O from managed soils using a documented method and recorded nitrogen inputs; resolve a species- and air-medium-specific flow before publishing exchanges.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated direct N2O mass from a stated method, not a generic fertilizer factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-soils`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Capsule harvest and seed release (`harvest`)

#### Inputs

##### Product flows

###### Mature crop entering harvest (`mature_crop_input`)

Transfer the cultivation output into a distinct capsule and seed harvest boundary.

- Selected flow: Mature poppy crop
- Flow property / unit: Mass / kg
- Amount rule: Same measured intermediate mass as field output; no second upstream burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_harvest`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest machinery fuel (`harvest_fuel`)

Record combine or other harvest equipment fuel separately from cultivation fuel.

- Selected flow: Mobile machinery fuel
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Run-linked fuel consumed in harvest and seed separation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest separation electricity (`harvest_electricity`)

If electrically powered seed separation occurs at the farm, meter that input; otherwise record zero.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered or run-allocated electricity at harvest separation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Intended output of raw poppy seed (`raw_seed`)

The intended seed output removed from mature capsules, before any optional farm-gate drying or cleaning.

- Selected flow: Raw poppy seed
- Flow property / unit: Mass / kg
- Amount rule: Weighed raw seed by harvest lot at measured moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_harvest`
- Range: Swiss field-trial seed-yield example; not a universal limit
  - Range role: Typical range (`typical_range`)
  - Lower: 200
  - Upper: 1700
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `agroscope-poppy-2005`

###### Collected capsule and straw co-product (`collected_straw`)

Only if separately collected and sold or transferred for a declared use; otherwise classify as field residue or waste. Never count opium latex as seed.

- Selected flow: Collected poppy capsule and straw
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected dry or fresh biomass with moisture stated; zero when not collected.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_harvest`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Seed dropped during harvest (`dropped_seed`)

Poppy seed lost to the field during capsule capture or seed release; exclude capsule fragments and cleaning rejects. Record field retention as its destination.

- Selected flow: Dropped poppy seed
- Flow property / unit: Mass / kg
- Amount rule: Estimated dropped seed mass from harvest sampling or measured collection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_harvest`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Broken capsule fragments left at harvest (`broken_capsule`)

Nonrecoverable capsule-wall material left in the field during harvest; exclude collected capsule/straw co-product and pre-harvest vegetation residue.

- Selected flow: Broken poppy capsules
- Flow property / unit: Mass / kg
- Amount rule: Measured or sampled capsule-fragment mass left on field, with moisture basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare per crop cycle, then convert to 1 kg net reference seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_harvest`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

None.

### Process: Farm-gate hand-off with conditional primary conditioning and preservation (`conditioning`)

#### Inputs

##### Product flows

###### Raw seed entering farm-gate hand-off (`raw_seed_input`)

Every raw-seed lot enters the farm-gate hand-off; ventilation, drying or preliminary cleaning is recorded only if actually performed.

- Selected flow: Raw poppy seed
- Flow property / unit: Mass / kg
- Amount rule: Linked weighed raw-seed harvest lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned lot, then convert to 1 kg net reference seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying or cleaning electricity (`conditioning_electricity`)

Record ventilation, drying fan or aspirator electricity only if used before farm-gate hand-off.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered conditioning-run electricity; zero for inactive node.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned lot, then convert to 1 kg net reference seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg conditioned seed output
  - Basis: per kg conditioned seed output in an active conditioning run
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying heat fuel (`conditioning_fuel`)

Record a concrete liquid fuel only if thermal drying uses one; other heat carriers need their own specific exchange.

- Selected flow: Stationary combustion fuel
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: Measured liquid-fuel input per conditioned seed; zero if absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned lot, then convert to 1 kg net reference seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: L/kg conditioned seed output
  - Basis: per kg conditioned seed output in an active conditioning run
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Unprocessed poppy seed at farm gate (`farm_gate_seed`)

The reference seed leaves the farm after harvest, with only declared optional farm conditioning. It is not oil, food-ready cleaned seed or certified planting seed.

- Selected flow: Poppy seed `c49b37e3-df47-4caf-9a6a-2df1a528800a`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Net weighed delivered seed at declared moisture and impurity state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned lot, then convert to 1 kg net reference seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_lot`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Seed rejected by farm cleaning (`rejected_seed`)

Only when preliminary cleaning occurs: off-grade poppy seed removed from the accepted lot. Record disposal or separate transfer; do not count it as accepted reference seed.

- Selected flow: Rejected poppy seed
- Flow property / unit: Mass / kg
- Amount rule: Weighed seed-only reject mass, not combined screenings mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned lot, then convert to 1 kg net reference seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Captured capsule-wall dust (`captured_capsule_dust`)

Only when farm cleaning captures capsule-derived dust: record the captured solid waste and its disposal. Fugitive air emissions require a separate substance- and medium-specific exchange.

- Selected flow: Captured poppy capsule dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed captured dust from aspirator/filter or a documented solids balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned lot, then convert to 1 kg net reference seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other removed foreign material (`other_impurities`)

Only when preliminary cleaning removes non-seed, non-capsule foreign solids such as soil or stones; keep identity and disposal separate from seed reject and capsule dust.

- Selected flow: Foreign material removed from seed
- Flow property / unit: Mass / kg
- Amount rule: Weighed separately classified foreign solids.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned lot, then convert to 1 kg net reference seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water evaporated in drying (`drying_water_vapour`)

Only when drying occurs; calculate mass of removed water from before/after seed mass and moisture measurements.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Water mass removed from the conditioned lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned lot, then convert to 1 kg net reference seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional QA screen; actual foreground records determine amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/ha
  - Basis: per cultivated hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_output_default` | Seed-only field | Capsule, straw and residues without separate collection or independent use remain field residue or waste, not invented co-products. | `eu-poppy-2014` |
| `straw_coproduct` | Seed plus saleable capsule/straw | If capsules or straw are separately collected and transferred, record both product masses, moisture, destinations and hand-off points. Assign dedicated operations directly; allocate shared cultivation/harvest burdens by consistent dry mass and disclose choice and sensitivity. Latex is not seed. | `eu-poppy-2014` |
| `run_linkage` | Harvest lot or combined operation | Link each input, output, cleaning and changeover event to a unique run; apportion cross-run shared fuel/electricity once by documented time or throughput, never twice. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All ranges are regional examples or provisional QA screens, not inventory defaults. Out-of-range values require review but may stand with good foreground evidence. Inputs of an inactive conditional node are zero.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | field | sowing seed, N/P/K products, irrigation, crop protection | field operation ledger | field, date, area, product, formulation, net mass, water meter | invoices, application logs, meters | kg, m3, ha | each application | full crop cycle | each field | sum physical products once; compound fertilizer not duplicated | invoices, weighed/metered logs |
| `cp_field_energy` | field | field fuel | equipment log | operation, machine, date, fuel, field | fuel slips and machinery logs | L | each operation | sowing to pre-harvest | each field | assign to actual field work | slips, work hours |
| `cp_field_emissions` | field | soil N2O | nitrogen-balance worksheet | synthetic/organic N, residue N, soil/climate data, method factors | declared IPCC or equivalent method | kg N2O | each cycle | full crop cycle | each field | preserve source terms and unit conversions | versioned method and input records |
| `cp_crop_harvest` | field/harvest | mature crop, raw seed, collected capsule/straw, pre-harvest residue, dropped seed, broken capsules | harvest lot ledger | area, lot, raw seed weight/moisture, collected straw weight, pre-harvest retained residue, sampled dropped-seed mass, broken-capsule mass and separate destinations | scale, separate material samples and balance | kg, ha, % | each lot | harvest period | field/lot | reconcile mature-crop intermediate once; aggregate dropped seed and capsule fragments separately | scale tickets, material samples, destinations |
| `cp_harvest_energy` | harvest | harvest fuel and electricity | equipment run log | run, fuel, metered power, machine | equipment and energy log | L, kWh | each run | harvest period | equipment/run | apportion shared run only once by time/throughput | fuel slip, meter, work hours |
| `cp_conditioning` | conditioning | raw seed, electricity, fuel, rejected seed, captured capsule dust, other foreign solids, evaporated water | farm conditioning run | route switch, before/after mass/moisture, electricity/fuel meters, separately weighed rejected seed/captured dust/other impurities and each destination | weighing, moisture test, meters, separate solid collection | kg, %, kWh, L | each conditioning lot | before farm gate | each conditioning lot | reconcile materials by substance and link raw-seed lot; resolve fugitive dust separately | classified scales, tests, energy receipts, destination tickets |
| `cp_gate_lot` | conditioning | net reference seed | transfer lot ticket | net mass, moisture, impurities, destination, time | weighbridge/calibrated scale and lot testing | kg, % | each delivery lot | farm-gate transfer | each delivery lot | sum net delivered mass as reference denominator | scale ticket, lot ID, test |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `per_kg_gate` | all field, harvest and conditioning exchanges | Assigned crop-cycle exchange total / net kg seed delivered from same cycle; reconcile intermediate transfers without another upstream burden. | exchange total, net delivery, lot linkage | exchange per kg reference seed |  |
| `drying_loss` | conditional drying | Derive evaporated water from before/after net mass and wet-basis moisture; cross-check dry matter against separately removed seed, capsule dust and other solids. | before/after mass, moisture, three separately recorded solid removals | kg water loss and balance gap |  |
| `soil_n2o_method` | managed soils | Apply declared regional/tier factors to all applicable N sources; state direct versus indirect boundary. | N inputs, residue N, method factors | kg N2O | `ipcc-2019-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `lot_identity` | all lots | Trace raw seed, conditioning and net-delivery lots; retain destination, moisture and impurities. | lot IDs, scale and test records |
| `mass_closure` | harvest and conditioning | Reconcile crop, raw seed, collected straw, pre-harvest residue, dropped seed, broken capsules, rejected seed, captured capsule dust, other impurities and water loss item by item on stated moisture bases; never count a material twice across nodes. | substance-specific material balance |
| `conditional_zero` | unused conditioning | No drying, cleaning or stabilization energy and reject exchanges. | operations and transfer logs |
| `source_limit` | food destination | EU advice is conditional quality management for that market, not a reason to exclude other legitimate unprocessed seed. | destination and compliance records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_identity` | reference flow | Match UUID, Mass, kg, farm gate and unprocessed state; never replace with oil, capsule, straw or certified planting seed. |  |
| `route_and_runs` | harvest technology and runs | Declare hand, combine or sequential operations and throughput; link fuel, seed loss and changeover once. | `eu-poppy-2014`; `usu-seed-poppy` |
| `coproduct_decision` | capsule/straw | Require independent transfer for co-product status and disclose actual allocation basis; otherwise use residue/waste. | `eu-poppy-2014` |
| `range_review` | all flow cards | Check bound, unit, denominator, evidence and conditional switch; investigate provisional outliers without replacing real data. |  |
| `moisture_and_contamination` | food destination and drying | Report actual lot moisture and capsule-dust risk; food-guidance numbers are not category-wide acceptance thresholds. | `eu-poppy-2014` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground package for unprocessed poppy seed at farm gate |
| downstream_use | `secondary_dataset` or `background_dataset` in process and lifecyclemodel construction |
| allowed_use | Upstream food or oil route modelling with matching seed state, farm-gate boundary and disclosures |
| excluded_use | Substitute for poppy oil, refined food ingredient, pharmaceutical extraction or certified planting seed |
| required_metadata | Region, season, field, cultivar/destination, harvest method, lot, net mass, moisture, impurity, conditioning and straw fate |
| required_quality_disclosure | Mass balance, operation/energy record coverage, conditioning switch, emission method, co-product allocation and uncertainty |
| update_trigger | Material change to production route, farm-gate seed state, destination, harvest technology or data year |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-poppy-2014` | `official_guidance` | European Commission Recommendation 2014/662/EU, https://eur-lex.europa.eu/eli/reco/2014/662/oj/eng | Food-route harvest and cleaning risks; conditional quality and contamination disclosure, not universal farm-gate thresholds. |
| `usu-seed-poppy` | `extension_guidance` | Utah State University, Seed Poppy in the Garden, https://extension.usu.edu/yardandgarden/research/seed-poppy-in-the-garden | Annual crop, mature capsule harvest, and separation route. |
| `agroscope-poppy-2005` | `literature` | Frick and Hebeisen, Poppy, an alternative plant, Agroscope, 2005, https://www.agrarforschungschweiz.ch/en/2005/01/poppy-an-alternative-plant/ | Regional field-trial seed-yield example of 2–17 dt/ha (200–1700 kg/ha). |
| `ipcc-2019-soils` | `method_factor` | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil N2O method and input completeness. |
