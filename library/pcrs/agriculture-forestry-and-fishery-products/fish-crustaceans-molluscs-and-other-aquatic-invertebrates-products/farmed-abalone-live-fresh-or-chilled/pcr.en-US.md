---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-abalone-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed abalone, live, fresh or chilled

## 1. Scope and Applicability

This methodology covers only whole shell-on animals as live, fresh or chilled reference products. Shucked or tissue-only fresh/chilled reference products are outside its present process methodology; collecting extra data under section 8 does not bring them into scope. The classification relationship is narrower. This is a method-coverage restriction, not a claim that raw shucking necessarily makes a product otherwise prepared or preserved.

This PCR guides foreground data package construction for farmed abalone (Haliotis spp.) placed on the market as live, fresh, or chilled product. It covers declared seed or juvenile supply, optional on-site hatchery and nursery activity, grow-out in land-based tanks or raceways, suspended or cage systems, or declared sea-ranch grow-out, harvest, grading, live holding, chilling, packaging, and delivery to the declared gate.

Excluded products are wild abalone, frozen, smoked, dried, salted, brined, cooked, canned, otherwise prepared or preserved abalone, abalone seed sold as a separate aquaculture input, generic mollusc products without abalone identity, and shell or meat by-products with a separate non-food reference flow.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-abalone-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04412`, `Farmed abalone, live, fresh or chilled`; mapping_type: narrower; whole/in-shell method subset |
| covered_products | whole in-shell reference products only: farmed Haliotis spp. sold live, fresh, or chilled, whole shell-on form, from aquaculture production systems |
| excluded_products | shucked or tissue-only fresh/chilled reference products; wild abalone; frozen, smoked, dried, salted, brined, cooked, canned, prepared, or preserved abalone; aquaculture seed sold as seed; shell waste or shell products; non-abalone molluscs |
| representative_product | whole in-shell animal: live or chilled farmed abalone at declared market size and declared product form |
| production_route | hatchery or purchased juvenile input, nursery where relevant, grow-out husbandry, harvest, grading, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled abalone with declared species, product form, culture system, size grade, whole shell-on state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | whole in-shell farmed abalone as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared species or hybrid, product form, live/fresh/chilled state, whole shell-on basis, size grade, harvest and holding condition, and culture system |
| How long or cycle | one production batch, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | `declared_gate_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed abalone accepted at the declared final physical gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or hybrid; culture system; seed or juvenile source; product state; whole shell-on basis; size grade; moisture or drainage basis; geography and declared gate; holding or chilling duration; feed regime; permit or certification status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass is the primary reference basis. Count records may be used only when mean individual mass and product form are retained so the foreground package can convert count to kg product.

Declare one actual final physical gate_release, one actual species/form/state and acceptance specification per dataset. Pack-out and actual pre-gate delivery are measured intermediate handoffs. Select one evidenced path to the gate; unknown delivery is not bypass. Q is positive same-lot/matched-population accepted net animal mass independently weighed on a calibrated scale at that gate, excluding package tare/free water/ice/rejects while retaining native shell/tissues/moisture in the declared form. Only final declared_gate_reference normalizes to 1 kg; measure all earlier quantities independently.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg farmed abalone in the declared live, fresh, or chilled product form. |
| `product_form_mass_basis` | whole in-shell live, fresh, chilled or drained product records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use independently measured net whole-animal mass including its native exoskeleton/shell and tissues, excluding free water/ice and packaging tare. Record drainage/temperature and matched physical state; convert only with measured same-lot drainage evidence. Shucked or tissue-only mass is not an admissible reference basis. |
| `count_to_mass_conversion` | stocking, mortality, grading, and sales count records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count-based records must include mean individual mass, size grade, and sampling method before normalization to kg reference product. |
| `water_volume_or_mass` | seawater intake, process water, live holding water, and wastewater | Mass or volume | kg or m3 | Preserve the original measured unit and conversion basis. For flow-through or open-water systems, distinguish pumped water from ambient water passing through the culture site. |
| `feed_mass_basis` | macroalgae, seaweed, formulated feed, and mixed feed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Feed inputs must state wet mass, dry mass, or as-fed mass. Convert between wet and dry basis only when measured moisture or supplier data are available. |
| `energy_inventory` | pumping, aeration, filtration, lighting, chilling, live holding, and delivery energy | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, or energy carrier units before normalizing to the reference flow. |
| `feed_marine_fraction` | formulated feed containing fishmeal, fish oil, or other marine ingredients | Mass fraction | kg/kg feed | Declare feed composition or supplier formulation when marine ingredient dependency or ASC feed-efficiency indicators are used. |

Key product attributes are foreground qualifiers recorded alongside the mass reference flow:

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species or hybrid | scientific and common name | required for all datasets |
| Culture system | land-based raceway, RAS, suspended cage, sea ranch, or other declared system | required for system boundary and water discharge interpretation |
| Product form | whole shell-on live, fresh or chilled only | required for mass-basis interpretation |
| Size grade | shell length, count per kg, or market grade | required when count or grade records are used |
| Feed regime | macroalgae, formulated feed, mixed feed, or natural feed at sea-ranch site | required for feed inventory and source disclosure |

## 5. System Boundary

The default boundary covers foreground-controlled farmed abalone production to the declared farm, harvest, packhouse, or delivery gate:

1. Seed or juvenile sourcing, including on-site hatchery and nursery activity when controlled by the reporting operator, or purchased juvenile disclosure when supplied by another hatchery.
2. Grow-out husbandry, including culture units, stocking, feed, water movement, aeration, filtration, biofouling control, mortality management, predator or escape controls, and directly controlled maintenance.
3. Harvest, grading, purging or depuration when performed, live holding, chilling, packaging, and declared gate release.
4. Delivery to the declared gate when the reference product is delivered rather than farm-gate product.

Capital goods, infrastructure construction, and long-term habitat modification are included only when the declared data package scope requires them. Feed and seed upstream datasets are linked as upstream inputs unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_seed_or_juvenile_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04412`, `Farmed abalone, live, fresh or chilled` |
| recursive_input_rule | farmed abalone seed or juveniles used to produce market abalone are recorded as declared seed or juvenile starting condition with supplier or hatchery disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | seed or juvenile supplier dataset, on-site hatchery records, or documented source, species, batch, mass or count, size, health status, and certification or permit evidence |
| disclosure | disclose species or hybrid, culture system, stocking batch, feed regime, water source and discharge route, grow-out duration, mortalities, harvest and holding conditions, product form, packaging state, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| seed_supply_hatchery_and_nursery | Seed Supply, Hatchery, and Nursery | required | purchased seed or on-site hatchery path must be declared | actual process responsibility before final gate | per 1 kg reference flow |
| growout_husbandry | Grow-out Husbandry | required |  | actual process responsibility before final gate | per 1 kg reference flow |
| harvest_grading_and_live_holding | Harvest, Grading, and Live Holding | required |  | actual process responsibility before final gate | per 1 kg reference flow |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond the farm or packhouse gate | actual process responsibility before final gate | per 1 kg reference flow |
| gate_release | Declared final physical handoff and acceptance | required | one actual final gate and evidenced route per dataset | unique final reference | per 1 kg reference flow |

### Process: Seed Supply, Hatchery, and Nursery (`seed_supply_hatchery_and_nursery`)

#### Inputs

##### Product flows

###### Independent exchange: Abalone `7b973a02-b45b-4f5a-a640-a9b5ae65584b` (`seed_or_juvenile_abalone_input`)

Only actual purchased aquaculture seedling-stage juvenile abalone: measure net live mass in kg, retaining auxiliary counts and same-lot representative individual mass/sampling uncertainty. Binding applies only where actual seedling stage, production supply gate and purpose match this identity; it never covers broodstock, eggs, larvae or adults. Retain hatchery supply/receipt/transport and prior-loss burdens; stocked survivors are separate.

- Selected flow: Abalone `7b973a02-b45b-4f5a-a640-a9b5ae65584b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_stocking_records`
- Sources: `fao-abalone-breeding-1990`, `ca-dfg-culture-of-abalone`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_seed_or_juvenile_abalone_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Actual purchased electricity for this node (`hatchery_nursery_electricity`)

This row covers electricity for pumps, aeration, filtration, lighting, algal feed culture, temperature control, and water treatment in on-site hatchery or nursery operations.

- Selected flow: Actual purchased electricity for this node
- Flow property / unit: Energy / kWh
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records_seed_supply_hatchery_and_nursery`
- Sources: `asc-farm-standard-2025`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_hatchery_nursery_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Actual live juvenile abalone seedlings at this node (`stocked_juvenile_abalone`)

This output carries the declared seed or juvenile stock into grow-out. Net live kg is this card's native quantity; counts, shell length/grade and same-lot representative individual mass are auxiliary evidence. Declare actual species, seed source/stage, supply technology and gate separately. A longline-farm spat identity cannot cover all seed sources, and internal transfers do not automatically inherit external supplier UUIDs. A mass ratio across nursery growth is not count survival.

- Selected flow: Actual live juvenile abalone seedlings at this node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_seed_stocking_records`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_stocked_juvenile_abalone
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Grow-out Husbandry (`growout_husbandry`)

#### Inputs

##### Product flows

###### Independent exchange: Actual live juvenile abalone seedlings at this node (`stocked_juvenile_transfer_to_growout`)

This row transfers stocked juveniles into the declared grow-out culture system. Net live kg is this card's native quantity; counts, shell length/grade and same-lot representative individual mass are auxiliary evidence. Declare actual species, seed source/stage, supply technology and gate separately. A longline-farm spat identity cannot cover all seed sources, and internal transfers do not automatically inherit external supplier UUIDs. A mass ratio across nursery growth is not count survival.

- Selected flow: Actual live juvenile abalone seedlings at this node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_seed_stocking_records_growout_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_stocked_juvenile_transfer_to_growout
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Actual purchased electricity for this node (`growout_electricity`)

This row covers electricity for pumping, aeration, filtration, lighting, sensors, automatic feeding, and culture-unit operation.

- Selected flow: Actual purchased electricity for this node
- Flow property / unit: Energy / kWh
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records_growout_husbandry`
- Sources: `asc-abalone-standard-2012`, `asc-farm-standard-2025`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816` (`growout_fuel_and_workboat_energy`)

This row covers diesel or other fuel for workboats, forklifts, generators, farm vehicles, or directly controlled maintenance activity. Record actual diesel material use only outside complete-service coverage. Other fuels/electricity need separate cards; MJ, litres or tonne-kilometre records cannot be relabelled as kg. Litres-to-kg requires same-supply measured/documented density and temperature evidence; MJ conversion also requires heating value/basis/factor evidence. Complete freight and its covered fuel/assets/direct releases cannot recur.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_transport_records_growout_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_fuel_and_workboat_energy
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Compound pelleted abalone growout feed (`compound_pelleted_growout_feed`)

Conditional concrete card only for actual compound pellets; occurrence is not presumed and fish-fry-feed identity is not used for abalone feed. Other actual formulations/forms and every macroalga still need independent cards and quantities/ranges/UUIDs.

- Selected flow: Compound pelleted abalone growout feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Only when actually used, independently retain its formulation/lot, as-fed quantity, measured moisture, opening/purchases/closing stocks, actual offered/uneaten feed and loss; divide attributable quantity by Q. Never copy total feed, macroalgae quantity or their ranges.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_records`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_compound_pelleted_growout_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed abalone live harvest-size biomass (`harvest_size_farmed_abalone`)

This row records the grow-out output before final grading, live holding, chilling, or pack-out losses. Retain actual species, form, live/fresh/chilled state, grade, recipient and physical handoff separately. This node is an actual intermediate output, not final reference. Rejects, losses, stocks, grades and delivery may change quantities; never presume yield 1 or constrain all saleable off-grade products by the selected reference subset mass.

- Selected flow: Farmed abalone live harvest-size biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_records_growout_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_size_farmed_abalone
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Independent exchange: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048` (`direct_carbon_dioxide_from_fuel_combustion`)

This row is included only when the foreground farm directly burns fuel and the process dataset does not already carry combustion emissions. This is actual fossil CO2 output to air, never a resource input. Quantify only the fossil-carbon fraction of actual owned combustion; biogenic CO2 and other gases/particles/leaks require independent cards with actual fuel, compatible factors, source/units/oxidation and uncertainty. Exclude emissions covered by a complete service.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_transport_records_growout_husbandry`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_direct_carbon_dioxide_from_fuel_combustion
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest, Grading, and Live Holding (`harvest_grading_and_live_holding`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed abalone animal lot in its actual species, form and state (`harvested_abalone_input_to_packout`)

This row transfers harvest-size abalone into grading, purging, live holding, chilling, and pack-out. Retain actual species, form, live/fresh/chilled state, grade, recipient and physical handoff separately. This node is an actual intermediate output, not final reference. Rejects, losses, stocks, grades and delivery may change quantities; never presume yield 1 or constrain all saleable off-grade products by the selected reference subset mass.

- Selected flow: Farmed abalone animal lot in its actual species, form and state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_records_harvest_grading_and_live_holding`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvested_abalone_input_to_packout
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Actual purchased electricity for this node (`packout_electricity`)

This row covers electricity for live holding, chilling, pumps, aeration, grading equipment, weighing, and packing.

- Selected flow: Actual purchased electricity for this node
- Flow property / unit: Energy / kWh
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records_harvest_grading_and_live_holding`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_packout_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed abalone animal lot in its actual species, form and state (`marketable_farmed_abalone_reference_product`)

This row is an actual intermediate animal-product handoff, not the final reference output. Only declared_gate_reference at gate_release is the final accepted reference product. Retain actual species, form, live/fresh/chilled state, grade, recipient and physical handoff separately. Rejects, losses, stocks, grades and delivery may change quantities; never presume yield 1 or constrain all saleable off-grade products by the selected reference subset mass.

- Selected flow: Farmed abalone animal lot in its actual species, form and state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_records_harvest_grading_and_live_holding`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_marketable_farmed_abalone_reference_product
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Farmed abalone actual independently saleable off-grade product (`saleable_offgrade_abalone_coproduct`)

Use this row only when off-grade live, fresh, or chilled abalone remains saleable as a separate grade within the same product family. Retain actual species, form, live/fresh/chilled state, grade, recipient and physical handoff separately. This node is an actual intermediate output, not final reference. Rejects, losses, stocks, grades and delivery may change quantities; never presume yield 1 or constrain all saleable off-grade products by the selected reference subset mass.

- Selected flow: Farmed abalone actual independently saleable off-grade product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_records_harvest_grading_and_live_holding`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_saleable_offgrade_abalone_coproduct
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Independent exchange: Collected abalone postharvest wastewater sent to actual treatment (`packout_wastewater`)

One wastewater stream actually generated here and transferred for treatment, with composition, actual receiver and treatment ownership. A secondary/tertiary-treatment identity cannot substitute untreated aquaculture/washing wastewater. Direct discharge needs separate actual carrier water and substance/medium records and cannot also be treatment waste. Mass/volume conversion requires density and temperature/salinity evidence.

- Selected flow: Collected abalone postharvest wastewater sent to actual treatment
- Flow property / unit: Volume / m3
- Amount rule: Retain this node's independently measured/evidenced calculated native quantity q, same-lot transfers, losses and stocks; attribute under section 7 and divide by the same positive final-gate accepted net mass Q. Preserve original batch/per-1000-kg and stage denominators, recovering raw quantity using measured stage output S; never fix an internal amount to 1 kg or equate it to final Q.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_intake_and_discharge_records_harvest_grading_and_live_holding`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_packout_wastewater
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Actual pre-gate delivery (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed abalone actual packed delivery input (`product_transferred_to_controlled_delivery`)

Independent actual pre-gate delivery exchange; payer/invoice does not establish gate. Proven bypass creates no invented delivery, unknown route is not bypass, and full service cannot overlap component fuel/releases.

- Selected flow: Farmed abalone actual packed delivery input
- Flow property / unit: Mass / kg
- Amount rule: Only for evidenced delivery before the actual reference gate, independently record this native quantity, actual losses/state/source and receiver transfers and complete-service scope; divide attributable amount by Q, never fix to 1 kg; fuel litres require measured/documented density for kg conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_actual_delivery`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_product_transferred_to_controlled_delivery
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independent exchange: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816` (`delivery_diesel`)

Independent actual pre-gate delivery exchange; payer/invoice does not establish gate. Proven bypass creates no invented delivery, unknown route is not bypass, and full service cannot overlap component fuel/releases.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Only for evidenced delivery before the actual reference gate, independently record this native quantity, actual losses/state/source and receiver transfers and complete-service scope; divide attributable amount by Q, never fix to 1 kg; fuel litres require measured/documented density for kg conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_actual_delivery`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_diesel
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed abalone actual post-delivery lot (`delivered_farmed_abalone`)

Independent actual pre-gate delivery exchange; payer/invoice does not establish gate. Proven bypass creates no invented delivery, unknown route is not bypass, and full service cannot overlap component fuel/releases.

- Selected flow: Farmed abalone actual post-delivery lot
- Flow property / unit: Mass / kg
- Amount rule: Only for evidenced delivery before the actual reference gate, independently record this native quantity, actual losses/state/source and receiver transfers and complete-service scope; divide attributable amount by Q, never fix to 1 kg; fuel litres require measured/documented density for kg conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_actual_delivery`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivered_farmed_abalone
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Declared final physical handoff (`gate_release`)

#### Inputs

##### Product flows

###### Independent exchange: Farmed abalone actual arriving lot at the final gate (`gate_arriving_product`)

Declare one actual final physical gate_release, one actual species/form/state and acceptance specification per dataset. Pack-out and actual pre-gate delivery are measured intermediate handoffs. Select one evidenced path to the gate; unknown delivery is not bypass. Q is positive same-lot/matched-population accepted net animal mass independently weighed on a calibrated scale at that gate, excluding package tare/free water/ice/rejects while retaining native shell/tissues/moisture in the declared form. Only final declared_gate_reference normalizes to 1 kg; measure all earlier quantities independently.

- Selected flow: Farmed abalone actual arriving lot at the final gate
- Flow property / unit: Mass / kg
- Amount rule: Independently record actual arriving net animal mass q before acceptance and pair with the real pack-out or delivery output; attribute and divide by Q, retaining rejects/losses/stocks, never fixed to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_release`
- Range: Unestablished independent quantity uncertainty; not a default or truncation threshold
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_gate_arriving_product
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independent exchange: Farmed abalone accepted at the declared final physical gate (`declared_gate_reference`)

Declare one actual final physical gate_release, one actual species/form/state and acceptance specification per dataset. Pack-out and actual pre-gate delivery are measured intermediate handoffs. Select one evidenced path to the gate; unknown delivery is not bypass. Q is positive same-lot/matched-population accepted net animal mass independently weighed on a calibrated scale at that gate, excluding package tare/free water/ice/rejects while retaining native shell/tissues/moisture in the declared form. Only final declared_gate_reference normalizes to 1 kg; measure all earlier quantities independently.

- Selected flow: Farmed abalone accepted at the declared final physical gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gate_release`
- Range: Same-positive-accepted-net-mass Q/Q identity; not yield
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `pcr-gate-accounting-method`

##### Waste flows

##### Elementary flows


## 7. Allocation and Co-product Handling

Avoid allocation where batch records can partition burdens by culture unit, harvest lot, grade, product form, or destination. Separate whole shell-on live, fresh, chilled, size-grade, and off-grade products by measured mass before applying allocation.

When a single foreground batch produces several saleable abalone grades within CPC 04412, allocate shared grow-out, harvest, holding, and pack-out burdens by declared product mass unless a reviewed market-value rule is documented. Shells, mortalities, wastewater, sludge, biofouling residue, and broken or dead product are waste or treatment outputs unless they are sold with a separate product dataset and reference flow.

If the same site grows other species or co-products in the same system, allocate shared energy, water, feed preparation, and maintenance records by measured culture-unit service, biomass-time, or product mass in that order of preference. The selected allocation basis must be disclosed.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_stocking_records` | `seed_supply_hatchery_and_nursery` | seed or juvenile abalone input and stocked juvenile output | hatchery transfer, supplier invoice, stocking log, health certificate | species; batch id; supplier or hatchery; count; mean mass; total mass; size grade; health status; transfer date ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | supplier records, hatchery logs, stocking count, sampling and weighing ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | item and kg | each stocking event | complete production batch or reporting year | supplier, hatchery, nursery, and grow-out unit | per 1 kg reference flow | signed transfer records, sampling sheet, weighing record, health or permit evidence |
| `cp_feed_records` | `growout_husbandry` | macroalgae, seaweed, and formulated feed | feed issue log, supplier invoice, feed formulation, leftover record | feed product; wet/dry/as-fed basis; moisture; quantity issued; leftovers; feed source; marine ingredient fraction when relevant ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | feed inventory, supplier declarations, farm feeding logs ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kg | each feed issue or batch summary | full grow-out period | grow-out unit or farm | per 1 kg reference flow | feed purchase records, supplier formulation, stock movement logs |
| `cp_water_intake_and_discharge_records_seed_supply_hatchery_and_nursery` | `seed_supply_hatchery_and_nursery` | water intake, pumped seawater, live holding water, wastewater, and discharge | meter readings, pump logs, discharge permits, water-quality records | intake volume; make-up water; recirculated volume; discharge volume; water source; discharge route; treatment; salinity where relevant ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | meter, pump runtime calculation, permit report, or water management log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | m3 or kg | daily, batch, or reporting period | process-specific operation period | hatchery, grow-out, live holding, packhouse, and discharge point | per 1 kg reference flow | meter calibration, permit report, water-quality monitoring record |
| `cp_water_intake_and_discharge_records_growout_husbandry` | `growout_husbandry` | water intake, pumped seawater, live holding water, wastewater, and discharge | meter readings, pump logs, discharge permits, water-quality records | intake volume; make-up water; recirculated volume; discharge volume; water source; discharge route; treatment; salinity where relevant ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | meter, pump runtime calculation, permit report, or water management log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | m3 or kg | daily, batch, or reporting period | process-specific operation period | hatchery, grow-out, live holding, packhouse, and discharge point | per 1 kg reference flow | meter calibration, permit report, water-quality monitoring record |
| `cp_water_intake_and_discharge_records_harvest_grading_and_live_holding` | `harvest_grading_and_live_holding` | water intake, pumped seawater, live holding water, wastewater, and discharge | meter readings, pump logs, discharge permits, water-quality records | intake volume; make-up water; recirculated volume; discharge volume; water source; discharge route; treatment; salinity where relevant ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | meter, pump runtime calculation, permit report, or water management log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | m3 or kg | daily, batch, or reporting period | process-specific operation period | hatchery, grow-out, live holding, packhouse, and discharge point | per 1 kg reference flow | meter calibration, permit report, water-quality monitoring record |
| `cp_energy_records_seed_supply_hatchery_and_nursery` | `seed_supply_hatchery_and_nursery` | electricity and non-fuel energy | meter reading, utility bill, submeter, equipment log | electricity use; meter id; process allocation; operating hours; chilling or pumping service ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | utility bill, submeter, runtime allocation ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kWh or MJ | monthly or batch | reporting period and production batch overlap | farm, hatchery, grow-out unit, or packhouse | per 1 kg reference flow | utility bill, submeter records, allocation worksheet |
| `cp_energy_records_growout_husbandry` | `growout_husbandry` | electricity and non-fuel energy | meter reading, utility bill, submeter, equipment log | electricity use; meter id; process allocation; operating hours; chilling or pumping service ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | utility bill, submeter, runtime allocation ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kWh or MJ | monthly or batch | reporting period and production batch overlap | farm, hatchery, grow-out unit, or packhouse | per 1 kg reference flow | utility bill, submeter records, allocation worksheet |
| `cp_energy_records_harvest_grading_and_live_holding` | `harvest_grading_and_live_holding` | electricity and non-fuel energy | meter reading, utility bill, submeter, equipment log | electricity use; meter id; process allocation; operating hours; chilling or pumping service ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | utility bill, submeter, runtime allocation ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kWh or MJ | monthly or batch | reporting period and production batch overlap | farm, hatchery, grow-out unit, or packhouse | per 1 kg reference flow | utility bill, submeter records, allocation worksheet |
| `cp_fuel_and_transport_records_growout_husbandry` | `growout_husbandry` | diesel, vessel fuel, vehicle fuel, and delivery energy | fuel purchase, tank drawdown, vessel log, delivery log | fuel type; quantity; route; vehicle or vessel; distance; load; process purpose ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | fuel invoice, tank gauge, vehicle or vessel log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | L, kg, MJ, or tonne-km | each trip or reporting period | grow-out, harvest, or delivery period | directly controlled routes and equipment | per 1 kg reference flow | fuel invoice, odometer or vessel log, delivery manifest |
| `cp_fuel_and_transport_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | diesel, vessel fuel, vehicle fuel, and delivery energy | fuel purchase, tank drawdown, vessel log, delivery log | fuel type; quantity; route; vehicle or vessel; distance; load; process purpose ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | fuel invoice, tank gauge, vehicle or vessel log ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | L, kg, MJ, or tonne-km | each trip or reporting period | grow-out, harvest, or delivery period | directly controlled routes and equipment | per 1 kg reference flow | fuel invoice, odometer or vessel log, delivery manifest |
| `cp_mortality_and_residue_records_seed_supply_hatchery_and_nursery` | `seed_supply_hatchery_and_nursery` | mortalities, shells, residues, rejects, and biofouling | mortality log, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell or organic residue category ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | farm log, weighing, waste contractor record ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | item and kg | event, batch, or reporting period | full production batch or pack-out period | hatchery, grow-out unit, packhouse, waste handling route | per 1 kg reference flow | signed waste record, farm mortality log, mass balance |
| `cp_mortality_and_residue_records_growout_husbandry` | `growout_husbandry` | mortalities, shells, residues, rejects, and biofouling | mortality log, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell or organic residue category ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | farm log, weighing, waste contractor record ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | item and kg | event, batch, or reporting period | full production batch or pack-out period | hatchery, grow-out unit, packhouse, waste handling route | per 1 kg reference flow | signed waste record, farm mortality log, mass balance |
| `cp_mortality_and_residue_records_harvest_grading_and_live_holding` | `harvest_grading_and_live_holding` | mortalities, shells, residues, rejects, and biofouling | mortality log, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell or organic residue category ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | farm log, weighing, waste contractor record ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | item and kg | event, batch, or reporting period | full production batch or pack-out period | hatchery, grow-out unit, packhouse, waste handling route | per 1 kg reference flow | signed waste record, farm mortality log, mass balance |
| `cp_harvest_and_product_records_growout_husbandry` | `growout_husbandry` | harvest-size product, marketable reference product, and off-grade product | harvest log, grading sheet, sales invoice, pack-out record | harvest date; culture unit; product form; live/fresh/chilled state; whole shell-on basis; grade; count; mass; destination ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | harvest weighing, grader records, packhouse records, invoice ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kg and item | each harvest or pack-out batch | declared production batch or reporting period | harvest area, packhouse, and declared gate | per 1 kg reference flow | calibrated scale record, sales invoice, batch reconciliation |
| `cp_harvest_and_product_records_harvest_grading_and_live_holding` | `harvest_grading_and_live_holding` | harvest-size product, marketable reference product, and off-grade product | harvest log, grading sheet, sales invoice, pack-out record | harvest date; culture unit; product form; live/fresh/chilled state; whole shell-on basis; grade; count; mass; destination ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence  ; measured opening and closing pack-out stocks; dated harvested receipts and onward transfers; separate off-grade sale, reject and other animal-loss masses; independently evidenced signed net animal mass change; species, lot, product state, net whole-animal weighing basis and stock burden carry-over | harvest weighing, grader records, packhouse records, invoice ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q.  ; reconcile the same period and traced lots using net whole in-shell animal mass, independently weighing stocks and each destination. Carry stock and its accumulated burden between periods; do not record it as new harvest. Record actual signed biological/native-body-water mass change only with independent measurement or a documented material-balance method and uncertainty, never a balancing residual. | kg and item | each harvest or pack-out batch | declared production batch or reporting period | harvest area, packhouse, and declared gate | per 1 kg reference flow | calibrated scale record, sales invoice, batch reconciliation |
| `cp_packaging_records` | `harvest_grading_and_live_holding` | boxes, liners, bags, labels, ice packs, and pallets | packaging issue log, purchase invoice, bill of materials | packaging item; material; item count; tare mass; capacity; reuse rate; destination ; actual node, original batch/per-1000-kg/stage basis, each own native quantity q/unit, stage output S, same-lot positive final-gate accepted net mass Q, stocks/losses/fates, independent range evidence | warehouse issue record, bill of materials, supplier invoice ; collect only this node's actual events; preserve the original denominator, recovering raw quantity from stage records using independently measured S before Q normalization; never assume stage output equals Q. | kg and item | each pack-out batch or reporting period | pack-out period | packhouse and delivery preparation | per 1 kg reference flow | supplier specification, packaging issue sheet, scale record |
| `cp_seed_stocking_records_growout_husbandry` | `growout_husbandry` | seed or juvenile abalone input and stocked juvenile output | hatchery transfer, supplier invoice, stocking log, health certificate | species; batch id; supplier or hatchery; count; mean mass; total mass; size grade; health status; transfer date | supplier records, hatchery logs, stocking count, sampling and weighing ; collect this node's independent receipt/transfer records and pair with the sender without duplicating production burden. | item and kg | each stocking event | complete production batch or reporting year | supplier, hatchery, nursery, and grow-out unit | per 1 kg reference flow | signed transfer records, sampling sheet, weighing record, health or permit evidence |
| `cp_actual_delivery` | `delivery_to_declared_gate` | actual pre-gate delivery and loss | original meters, weights, stocks and physical handoff records | node/lot/actual species/state/form; each native q/unit; raw batch/per-1000-kg/stage S; same-lot positive Q; actual route/recipient/time; gross/tare/water-ice/rejects; losses/stocks/fates; actual payload/distance/empty returns; service scope; independent range/conversion evidence | Measure each actual exchange only at this node; independently weigh calibrated products and pair to sender; collect acceptance Q independently at the same actual final gate, retaining original denominators and all fates without duplicate reject deduction | kg; kWh; m3; actual native units | each event and meter period | complete actual batch/period including failures, cleanup, stocks and asset service | `delivery_to_declared_gate` | per 1 kg reference flow | calibration, original records, actual source/fate, service scope, independent range/conversion evidence |
| `cp_gate_release` | `gate_release` | unique final acceptance, rejects and loss | original meters, weights, stocks and physical handoff records | node/lot/actual species/state/form; each native q/unit; raw batch/per-1000-kg/stage S; same-lot positive Q; actual route/recipient/time; gross/tare/water-ice/rejects; losses/stocks/fates; actual payload/distance/empty returns; service scope; independent range/conversion evidence | Measure each actual exchange only at this node; independently weigh calibrated products and pair to sender; collect acceptance Q independently at the same actual final gate, retaining original denominators and all fates without duplicate reject deduction | kg; kWh; m3; actual native units | each event and meter period | complete actual batch/period including failures, cleanup, stocks and asset service | `gate_release` | per 1 kg reference flow | calibration, original records, actual source/fate, service scope, independent range/conversion evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all foreground rows | Actual attributable native quantity q divided by same-lot positive actual final-gate accepted net mass Q. Preserve original batch, per-1000-kg and stage-S bases using explicit same_gate_normalization conversion; Q is not a presumed pack-out or delivery output. | q; Q; cp_gate_release; own-node records | native unit per 1 kg reference flow | `pcr-gate-accounting-method` |
| `calculate_stocking_survival` | seed_supply_hatchery_and_nursery and growout_husbandry | survival_to_harvest = harvested_count / stocked_count, with count-to-mass conversion retained separately. | stocked_count; harvested_count; mortality_count | survival indicator and QA check | `mass-balance-identity` |
| `calculate_feed_conversion_indicator` | growout_husbandry | feed_conversion_indicator = net_feed_mass / harvest_size_abalone_mass on the declared feed mass basis. Do not compare wet and dry feed without conversion evidence. | feed_mass; moisture basis; harvest_size_abalone_mass | feed mass per kg harvest-size abalone | `asc-farm-standard-2025` |
| `reconcile_packout_mass` | harvest_grading_and_live_holding | opening_packout_stock + harvested_input_mass + evidenced_net_animal_mass_change = measured_packout_onward_mass + offgrade_saleable_mass + reject_mass + measured_local_animal_loss + closing_packout_stock. | opening_packout_stock; harvested_input_mass; evidenced_net_animal_mass_change; measured_packout_onward_mass; offgrade_saleable_mass; reject_mass; measured_local_animal_loss; closing_packout_stock | pack-out mass balance | `mass-balance-identity` |
| `calculate_controlled_discharge` | water intake and discharge rows | Prefer measured discharge at the external boundary. When metering is incomplete, estimate discharge only from a complete matched-period balance with evidence for all material terms: external water inflows and precipitation entering the controlled system, less evaporation, water exported with product/waste, other external removals and change in stored water. Internal recirculation crosses no external boundary and cancels on both sides; do not subtract it again from intake. Mass/volume conversion requires actual temperature, salinity and density evidence. Missing terms or a negative closure residual are not an emission, uptake or zero. Distinguish controlled discharge from uncontrolled ambient sea-water exchange. | intake; discharge; recirculated volume; retained water | discharge volume by process | `mass-balance-identity` |
| `calculate_delivery_transport_service` | delivery_to_declared_gate | For each actual route leg, multiply the mass in tonnes of the consignment actually carried by that leg distance in km, then normalize to matched final reference-product output. The load includes carrier water, ice and packaging actually transported and is not the net reference-product mass. For shared loads use a justified mass, occupied-volume or other causal attribution key. Record empty-return, cooling, oxygenation and holding coverage; zero payload on an empty return does not imply zero transport burden. Do not double-count a transport service that covers the same fuel/direct emissions already modelled explicitly. | delivered mass; controlled distance | tonne-kilometres | `mass-balance-identity` |
| `same_gate_normalization` | all inventory rows | Divide measured attributable native quantity q by positive same-lot final-gate accepted net animal mass Q for each exchange per 1 kg. Per 1000 kg = 1000×q/Q; only an original per-1000-kg value for the same Q/form/population converts exactly by /1000. For an amount per stage output S, recover its numerator using independently measured S before division by Q. Preserve native quantities, stage yields, losses/stocks and measurement conversions. Only final Q/Q=1; internal outputs are never fixed to 1. | q; stage S; Q; cp_gate_release; own-node records | native unit per 1 kg reference flow | `pcr-gate-accounting-method` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_scope` | all datasets | Declare CPC code, species or hybrid, culture system, seed source, product form, geography, and declared gate. | dataset metadata, stocking records, product description, permit or certification evidence |
| `mass_basis_consistency` | reference product, seed, harvest, pack-out, and rejects | Keep whole shell-on live, fresh, chilled, drained, wet, and dry bases separate unless measured conversion evidence exists. | scale records, product specifications, moisture or drainage evidence |
| `feed_and_water_disclosure` | grow-out and hatchery rows | Retain feed type, feed basis, water source, water discharge route, and water quality monitoring where applicable. | feed logs, supplier data, water meter, discharge permit, monitoring report |
| `mortality_and_residue_completeness` | seed, grow-out, and pack-out rows | Record mortalities, rejects, shell residue, biofouling residue, and fate by batch or reporting period. | mortality log, reject sheet, waste manifest, recovery record |
| `allocation_transparency` | multi-grade or multi-species systems | State the partitioning or allocation basis before publishing a secondary or background dataset. | allocation worksheet, grade mass records, culture-unit records |
| `temporal_representativeness` | all foreground rows | Cover a complete production batch, harvest lot, or representative reporting period; disclose partial-cycle datasets. | production calendar, stocking and harvest dates, reporting-period records |
| `dq_atomic_completion` | every process and inventory-completion obligation | These are mandatory per-identity collection obligations, not exchanges, default inputs or emissions. Create separate cards and independent measurements for each actual substance, product, waste stream, emitted substance and receiving medium; retain native units, original batch/stage output, final-gate reference output, attribution/allocation and range/uncertainty evidence. Normalize original totals using matched final output; stage-normalized data require measured stage output to recover the numerator, never an assumption that stage and final output coincide. Do not copy a family total, mixed-unit range, default estimate or one UUID onto children. Unknown is not zero. Purchased materials are product inputs; only direct natural-resource abstraction is an elementary input. Determine the direction/type of mortality/managed waste, direct releases and useful co-products separately from actual fate. | per-flow coverage ledger, measurements/sampling, allocation, original/final outputs, identity and fate records |
| `dq_complete_hatchery_nursery_water` | `seed_supply_hatchery_and_nursery`; Hatchery and nursery water | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row covers metered process water, seawater, or recirculation make-up water used in on-site hatchery and nursery operations. ; Flow property / unit: Mass or volume / kg or m3 ; Amount rule: measured water intake, make-up water, or recirculation replacement volume ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per 1,000 kg marketable abalone output or per stocking batch before normalization ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_water_intake_and_discharge_records_seed_supply_hatchery_and_nursery` ; Sources: `fao-abalone-breeding-1990` ; Range: Provisional hatchery and nursery water screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 1000 ; Unit: m3/1,000 kg marketable abalone ; Basis: broad first-pass pumped or supplied water for seed production relative to marketable output ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_hatchery_mortalities_and_biofouling_residue` | `seed_supply_hatchery_and_nursery`; Hatchery mortalities and biofouling residue | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records eggs, larvae, juveniles, biofouling, algal residue, shell fragments, or other organic residue removed from on-site hatchery and nursery systems. ; Flow property / unit: Mass / kg ; Amount rule: measured or estimated residue and mortality mass with declared fate ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per stocked juvenile batch and per 1,000 kg marketable output after normalization ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_mortality_and_residue_records_seed_supply_hatchery_and_nursery` ; Range: Provisional hatchery residue screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 1 ; Unit: kg residue/kg stocked juvenile live mass ; Basis: broad first-pass residue or mortality mass relative to stocked juvenile live mass ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_macroalgae_or_seaweed_feed` | `growout_husbandry`; Macroalgae or seaweed feed | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records kelp, Laminaria, Gracilaria, or other macroalgae feed supplied to the abalone culture units. ; Flow property / unit: Mass / kg wet or dry basis declared ; Amount rule: measured feed issued to culture units, with wet or dry basis and leftovers recorded where material ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per 1,000 kg harvest-size abalone output ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_feed_records` ; Sources: `seafood-watch-abalone-worldwide-2022`, `fao-abalone-breeding-1990` ; Range: Provisional macroalgae feed screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 30000 ; Unit: kg wet macroalgae/1,000 kg marketable abalone ; Basis: broad first-pass wet macroalgae feed issued per marketable output ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_formulated_aquaculture_feed` | `growout_husbandry`; Formulated aquaculture feed | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row is used when formulated pellets or mixed feed supplement or replace macroalgae feed. ; Flow property / unit: Mass / kg as-fed or dry basis declared ; Amount rule: measured feed issued by product and batch, with supplier formulation or feed class retained ; Value mode: Foreground record (`foreground_record`) ; Specificity: Product-specific (`product_specific`) ; Normalization basis: per 1,000 kg harvest-size abalone output ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_feed_records` ; Sources: `asc-farm-standard-2025`, `seafood-watch-abalone-worldwide-2022` ; Range: Provisional formulated feed screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 5000 ; Unit: kg formulated feed/1,000 kg marketable abalone ; Basis: broad first-pass formulated feed issued per marketable output ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_growout_water_movement_or_makeup` | `growout_husbandry`; Grow-out water movement or make-up water | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records pumped seawater, make-up water, or supplied water for land-based or recirculating grow-out systems. For open sea-ranch or cage systems, record only foreground-controlled pumping, flushing, or supplied water. ; Flow property / unit: Mass or volume / kg or m3 ; Amount rule: metered intake, pumped volume, or make-up water volume with system type declared ; Value mode: Foreground record (`foreground_record`) ; Specificity: Technology-specific (`technology_specific`) ; Normalization basis: per 1,000 kg harvest-size abalone output ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_water_intake_and_discharge_records_growout_husbandry` ; Sources: `asc-farm-standard-2025` ; Range: Provisional grow-out water screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 100000 ; Unit: m3/1,000 kg marketable abalone ; Basis: broad first-pass pumped or supplied water use across RAS, raceway, and flow-through systems ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_growout_mortalities_and_shell_residue` | `growout_husbandry`; Grow-out mortalities and shell residue | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records mortalities, shells, broken product, predator-damaged animals, and organic residues removed during grow-out. ; Flow property / unit: Mass / kg ; Amount rule: measured mortality count, mortality mass, shell residue, and disposal or recovery route ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per grow-out batch and per 1,000 kg marketable output after normalization ; Basis kind: Process output (`process_output`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_mortality_and_residue_records_growout_husbandry` ; Sources: `asc-farm-standard-2025` ; Range: Provisional mortality and residue screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 2 ; Unit: kg mortality or residue/kg marketable abalone ; Basis: broad first-pass mortality and residue mass relative to marketable output ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_growout_wastewater_or_discharge` | `growout_husbandry`; Grow-out wastewater or discharged culture water | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records discharged water, sludge, settled solids, or wastewater treatment outputs when the farm has a point-source discharge or controlled water treatment process. ; Flow property / unit: Volume or mass / m3 or kg ; Amount rule: measured discharge volume or calculated from the complete external water balance required by calculate_controlled_discharge ; Value mode: Calculated value (`calculated_value`) ; Specificity: Technology-specific (`technology_specific`) ; Normalization basis: per 1,000 kg harvest-size abalone output ; Basis kind: Process output (`process_output`) ; Evidence kind: Calculated from collection (`calculated_from_collection`) ; Collection protocol: `cp_water_intake_and_discharge_records_growout_husbandry` ; Sources: `asc-farm-standard-2025` ; Range: Provisional grow-out discharge screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 100000 ; Unit: m3/1,000 kg marketable abalone ; Basis: broad first-pass controlled discharge across RAS, raceway, and flow-through systems ; Basis kind: Process output (`process_output`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_live_holding_and_chilling_water` | `harvest_grading_and_live_holding`; Live holding and chilling water | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records water, seawater, ice melt, or live holding system water used after harvest. ; Flow property / unit: Mass or volume / kg or m3 ; Amount rule: measured water or ice use for purging, depuration, live holding, chilling, and cleaning ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per 1,000 kg reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_water_intake_and_discharge_records_harvest_grading_and_live_holding` ; Range: Provisional holding and chilling water screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 2000 ; Unit: m3/1,000 kg reference product ; Basis: broad first-pass live holding, purging, and chilling water per reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_packaging_materials` | `harvest_grading_and_live_holding`; Packaging materials | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records bags, boxes, liners, insulated containers, gel ice packs, labels, and pallets that cross the foreground boundary with the product. ; Flow property / unit: Mass or item count / kg or item ; Amount rule: measured packaging item count and material mass; include capacity or tare mass for count records ; Value mode: Foreground record (`foreground_record`) ; Specificity: Product-specific (`product_specific`) ; Normalization basis: per 1,000 kg reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_packaging_records` ; Range: Provisional packaging screening estimate ; Diagnostic role: reasoned screening estimate only; not a default, empirical limit or completion threshold ; Lower: 0 ; Upper: 500 ; Unit: kg packaging/1,000 kg reference product ; Basis: broad first-pass packaging material mass per reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Reasoned estimate (`reasoned_estimate`) | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_complete_offgrade_damaged_or_dead_product_packout` | `harvest_grading_and_live_holding`; Off-grade, damaged, or dead product at pack-out | Fulfil these collection responsibilities separately for each actual constituent; family screening bounds are not child defaults or automatic cut-offs: This row records non-marketable product, pack-out mortalities, broken shells, residues from whole-animal handling, and rejected animals. ; Flow property / unit: Mass / kg ; Amount rule: measured reject mass by fate and reason ; Value mode: Foreground record (`foreground_record`) ; Specificity: Site-specific (`site_specific`) ; Normalization basis: per 1,000 kg reference product ; Basis kind: Reference flow (`reference_flow`) ; Evidence kind: Collected record (`collected_record`) ; Collection protocol: `cp_mortality_and_residue_records_harvest_grading_and_live_holding` ; Same-stage animal-only reject-fraction diagnostic: 0 <= r <= 1 applies only to the actual incoming animal mass on the same physical-state basis, without added water, packaging, sediment or foreign matter. It does not cap mixed residues or amounts per final Q. Independently collect actual per-stream range evidence. | actual records, independent identities and quantities, range/uncertainty evidence |
| `dq_range_seed_or_juvenile_abalone_input` | `seed_supply_hatchery_and_nursery`; `seed_or_juvenile_abalone_input` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional seed input screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0.01 ;   - Upper: 2 ;   - Unit: kg seed or juvenile live mass/kg marketable abalone ;   - Basis: broad first-pass seed or juvenile mass input relative to marketable output ;   - Basis kind: Process output (`process_output`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_hatchery_nursery_electricity` | `seed_supply_hatchery_and_nursery`; `hatchery_nursery_electricity` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional hatchery electricity screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 5000 ;   - Unit: kWh/1,000 kg marketable abalone ;   - Basis: broad first-pass on-site hatchery and nursery electricity relative to marketable output ;   - Basis kind: Process output (`process_output`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_stocked_juvenile_abalone` | `seed_supply_hatchery_and_nursery`; `stocked_juvenile_abalone` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off: No mass-survival cap across nursery growth, universal pack-out-input/final-output cap or internal 1..1 identity is asserted. Independently measure stage S, actual losses/stocks and final Q; only the actual final gate Q/Q equals 1. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_stocked_juvenile_transfer_to_growout` | `growout_husbandry`; `stocked_juvenile_transfer_to_growout` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional stocked juvenile transfer estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0.01 ;   - Upper: 2 ;   - Unit: kg stocked juveniles/kg marketable abalone ;   - Basis: broad first-pass stocked juvenile mass per marketable output ;   - Basis kind: Process output (`process_output`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_growout_electricity` | `growout_husbandry`; `growout_electricity` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional grow-out electricity screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 50000 ;   - Unit: kWh/1,000 kg marketable abalone ;   - Basis: broad first-pass electricity demand across low-energy sea-ranch and energy-intensive land-based systems ;   - Basis kind: Process output (`process_output`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_growout_fuel_and_workboat_energy` | `growout_husbandry`; `growout_fuel_and_workboat_energy` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional grow-out fuel screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 1000 ;   - Unit: L diesel-equivalent/1,000 kg marketable abalone ;   - Basis: broad first-pass directly controlled fuel use per marketable output ;   - Basis kind: Fuel inventory (`fuel_inventory`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_direct_carbon_dioxide_from_fuel_combustion` | `growout_husbandry`; `direct_carbon_dioxide_from_fuel_combustion` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional direct CO2 screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 3000 ;   - Unit: kg CO2/1,000 kg marketable abalone ;   - Basis: broad first-pass direct fuel combustion CO2 per marketable output ;   - Basis kind: Fuel inventory (`fuel_inventory`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_harvest_size_farmed_abalone` | `growout_husbandry`; `harvest_size_farmed_abalone` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Grow-out harvest mass-balance QA guardrail ;   - Range role: QA guardrail (`qa_guardrail`) ;   - Lower: 0 ;   - Upper: 1 ;   - Unit: kg/kg total live abalone biomass before harvest adjustment ;   - Basis: harvested market-size fraction of available biomass in the declared batch ;   - Basis kind: Process output (`process_output`) ;   - Evidence kind: Method formula (`method_formula`) ;   - Sources: `mass-balance-identity` ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_harvested_abalone_input_to_packout` | `harvest_grading_and_live_holding`; `harvested_abalone_input_to_packout` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off: No mass-survival cap across nursery growth, universal pack-out-input/final-output cap or internal 1..1 identity is asserted. Independently measure stage S, actual losses/stocks and final Q; only the actual final gate Q/Q equals 1. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_packout_electricity` | `harvest_grading_and_live_holding`; `packout_electricity` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional pack-out electricity screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 5000 ;   - Unit: kWh/1,000 kg reference product ;   - Basis: broad first-pass harvest, holding, chilling, and pack-out electricity per reference product ;   - Basis kind: Reference flow (`reference_flow`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_packout_wastewater` | `harvest_grading_and_live_holding`; `packout_wastewater` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional pack-out wastewater screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 2000 ;   - Unit: m3/1,000 kg reference product ;   - Basis: broad first-pass wastewater from live holding, purging, cleaning, and chilling per reference product ;   - Basis kind: Reference flow (`reference_flow`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_marketable_farmed_abalone_reference_product` | `harvest_grading_and_live_holding`; `marketable_farmed_abalone_reference_product` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off: No mass-survival cap across nursery growth, universal pack-out-input/final-output cap or internal 1..1 identity is asserted. Independently measure stage S, actual losses/stocks and final Q; only the actual final gate Q/Q equals 1. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_range_saleable_offgrade_abalone_coproduct` | `harvest_grading_and_live_holding`; `saleable_offgrade_abalone_coproduct` | Independently collect this flow's own range/uncertainty evidence. The following declared-basis reasoned screening context is not a final-Q range or a mandatory cut-off:  ; - Range: Provisional off-grade product screening estimate ;   - Range role: Default estimate (`default_estimate`) ;   - Lower: 0 ;   - Upper: 1 ;   - Unit: kg off-grade saleable product/kg reference product ;   - Basis: broad first-pass off-grade saleable abalone mass relative to reference product ;   - Basis kind: Reference flow (`reference_flow`) ;   - Evidence kind: Reasoned estimate (`reasoned_estimate`) ;  ;  Retain original denominator S and units. Divide by 1000 exactly only when the original per-1000-kg basis is the same final Q/form/population; otherwise recover the numerator from raw quantity or measured S before Q conversion. Volume/fuel-energy conversion separately requires density/temperature/pressure/heating-value evidence, never relabelling. If an original ratio is a same-state measured biomass subset/available total, 0..1 applies only to that raw diagnostic ratio, not an exchange per Q. | Same-lot original records, stage output and independent range/conversion evidence |
| `dq_stage_coverage` | `seed_supply_hatchery_and_nursery` | Independently collect and add cards for actual owned hatchery/nursery parental stock, eggs, larvae, settlement/spat and every production stage, each actual microalga/feed/medium/material/water/chemical/asset/waste/release. A juvenile/seed card cannot cover parents or all life stages. Retain supplier/ancestry, controlled production, opening/closing/failed batches and next-generation/transfer burdens. Filter-feeding or evidenced no intentional growout feed cannot erase owned hatchery/nursery food or parental resources. | Own-node stage ledger, independent quantity/unit/range, original sources and fates |
| `dq_actual_delivery_completion` | `delivery_to_declared_gate`; `gate_release` | Add independent cards for each actual pre-gate leg, complete service or owned fuel/electricity/asset/cooling/top-up water-ice/gas, every substance release, loss/reject and water/package/cargo fate. Actual payload includes accompanying water, ice and packaging; empty returns retain actual fuel/vehicle service with explicit attribution despite zero cargo. Do not overlap complete services and covered components. Independently prove actual final-gate positive Q/state/recipient/time and exactly one evidenced path; unknown is never presumed bypass. | Route/service scope, actual payload, meters/calibrated weights, physical custody/acceptance and fates |
| `dq_actual_water_and_emissions` | all nodes | Measure external natural abstraction, supplied water product, internal circulation and actual return/discharge separately; never deduct internal recirculation again from external intake. Generated wastewater/solid waste is actual output. Direct releases are individual substance/chemical-basis/actual-medium outputs, never resource inputs. Net nutrient increment/retention is only a separate balance diagnostic, never automatically a negative elementary flow or avoided burden. Actual wastewater origin/treatment state must match; do not substitute an arbitrary treatment-stage UUID. | Actual water/substance balances, sources/fates, treatment scope and substance factors/sampling evidence |
| `dq_actual_amount_modes_and_form` | all actual cards and product forms | Set amount evidence mode from the actual method: direct measurement uses foreground_record/collected_record; calculated amounts use calculated_value/calculated_from_collection with measured inputs, formula, factors/units/sources and uncertainty. Candidate templates do not replace actual records. Every reference must remain a whole in-shell animal; a live reference must also be alive. Shucked meat or tissue-only reference products are outside this method, even if a yield is measured. Never substitute their mass for whole-animal Q or enlarge scope through collection obligations. | Original measurement/calculation evidence, actual same-lot state/form, measurements and physical fates |
| `dq_packout_mass_closure` | `harvest_grading_and_live_holding` | Use reconcile_packout_mass for the same reporting period, traced lot/species and declared whole-animal product form. Opening and closing stocks are required measured fields, not defaults; retain their accumulated burdens across periods. Onward product, off-grade sale, rejects and other animal losses must be mutually exclusive: a death or loss already included in rejects is not deducted again. evidenced_net_animal_mass_change is signed, separately evidenced physical change of the animals, not an unexplained residual or a second receipt/loss. Keep free carrier water, ice and packaging in separate ledgers; exclude them from net animal weights, and do not subtract their drainage again as animal loss. The shorter zero-stock equation applies only when zero opening and closing stocks and no additional animal mass change are evidenced; unknown is never zero. | Dated net animal weighings, opening/closing stock ledger, disjoint destinations, independent physical-change evidence and burden carry-over records |

## 9. Validation Rules

A foreground data package conforms to this PCR only when:

- the reference product is normalized to 1 kg farmed abalone in a declared live, fresh, or chilled product form;
- species or hybrid, culture system, seed or juvenile source, product state, product form, size grade, geography, declared gate, holding duration, and feed regime are declared;
- seed or juvenile input, feed, water, energy, fuel, mortality or residue, harvest, pack-out, and packaging records are either present or explicitly marked not applicable with a reason;
- count records include mean individual mass or another transparent conversion to kg;
- feed records distinguish macroalgae, formulated feed, and mixed feed, and keep wet, dry, and as-fed bases separate;
- water rows distinguish pumped or supplied water from ambient open-water exchange;
- pack-out mass balance reconciles harvested input, reference product, saleable off-grade product, rejects, and holding losses;
- same-site multi-species or multi-grade allocation is documented before the dataset is used as a background or secondary dataset.

Final data-package validation must read back dq_atomic_completion and every dq_complete_ requirement. Every applicable obligation must have concrete exchanges with independent quantities, units, sources, normalization, range/uncertainty, fate and verified UUIDs. Use not_applicable only for evidenced absence. Unknown identities, missing quantities, unclassified fates or unfulfilled obligations block final data-package completion. Static PCR checking is not a substitute for this validation.

Final datasets have exactly one actual gate_release and one declared_gate_reference. Every actual exchange and applicable dq_complete_/dq_stage_/dq_actual_/dq_range_ obligation must have independent atomic cards, own quantity/native unit, actual collection/calculation and range/uncertainty evidence, same-final-Q normalization, fate and verified UUID. Unknown identity, activity/route/gate, quantity, range evidence or fate blocks completion and validation, never zero, assumed bypass or disclosure-only omission. Static PCR checking does not establish actual dataset completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_form_scope` | market-size product transfers and final reference | Every market-size animal transfer and final reference product must retain its actual whole in-shell form. Raw shucked or tissue-only fresh/chilled final references are outside this methodology. No measured yield or section-8 completion claim enlarges this boundary. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production package that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | use as farmed abalone input to seafood processing, food service, retail, cold-chain, or regional food-product lifecycle models |
| allowed_use | whole in-shell methodology only: farmed abalone live, fresh, or chilled datasets with declared species, culture system, product form, gate, feed regime, and quality disclosures |
| excluded_use | raw shucked/tissue-only reference products outside this methodology; wild abalone, frozen/smoked/dried/salted/brined/prepared abalone, generic mollusc datasets, and datasets lacking product-form or culture-system disclosure |
| required_metadata | canonical PCR id; CPC code; species or hybrid; culture system; seed source; product form; whole shell-on basis; size grade; geography; declared gate; holding or chilling duration; feed regime; data period; allocation basis |
| required_quality_disclosure | missing UUIDs; unresolved seawater or habitat flow identities; feed wet/dry conversion; water discharge route; mortality completeness; pack-out mass balance; partial-cycle or proxy data use |
| update_trigger | revise when CPC mapping changes, Tiangong abalone, seawater, feed, discharge, or habitat flow identities are updated, ASC or equivalent aquaculture standards change, or reviewed foreground abalone datasets provide better ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-abalone-breeding-1990` | handbook | <https://www.fao.org/4/ab731e/ab731e00.htm> | abalone biology, hatchery, nursery, grow-out stages, feeding, water quality, and production-cycle context |
| `ca-dfg-culture-of-abalone` | official_guidance | <https://nrm.dfg.ca.gov/FileHandler.ashx?DocumentID=34422> | hatchery, nursery, grow-out system options, transfer timing, and market-size process decomposition |
| `asc-abalone-standard-2012` | standard | <https://asc-aqua.org/wp-content/uploads/2023/07/ASC-Abalone-Standard_v1.0.pdf> | abalone aquaculture issue areas, energy, feed, biosecurity, ecosystem effects, waste management, and scope context |
| `asc-farm-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | current ASC grow-out scope, eligible Haliotis species, water quality, feed efficiency, traceability, animal health, and data requirements |
| `seafood-watch-abalone-worldwide-2022` | official_guidance | <https://www.seafoodwatch.org/globalassets/sfw-data-blocks/reports/a/seafood-watch-abalone-worldwide-27815.pdf> | abalone production phases, culture systems, feed patterns, chemical use context, source-of-stock, disease, and data-quality gaps |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for stocking, grow-out, pack-out, discharge, transport-service, and reference-flow normalization. | QA guardrails, survival, yield, pack-out reconciliation, and normalization rules |
| `pcr-gate-accounting-method` | method_factor | Declared prospective final-gate, independent-stage measurement and normalization method in this PCR sections 3–9; not external empirical ranges | Unique final Q/Q, native q/Q, original batch/per-1000-kg/stage-S conversion and atomic completion duties |
