---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mushrooms-farmed
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Fresh Farmed Mushrooms at the Declared Gate

## 1. Scope and Applicability

This PCR guides foreground data-package construction for commercially farmed, fresh, whole or trimmed edible mushrooms from receipt or preparation of growing substrate through inoculation, incubation, fruiting, repeated cropping, harvest, grading, optional washing or cooling, primary packaging, and hand-off at a declared farm or pack-house gate. It applies to indoor rooms, tunnels, shelves, bags, blocks, beds, and log-based cultivation when species, route, substrate, campaign, and gate state are declared. Cultivated button, oyster, shiitake, enoki, wood ear, and other edible species are covered; the species or species group must always be identified.

The PCR includes substrate feedstocks, casing or covering materials, spawn, water, climate-control utilities, sanitation inputs, harvest handling, packaging, and the fate of spent mushroom substrate when those activities occur before the declared gate. Substrate preparation and spawn mixing may be on site or represented by compatible upstream datasets. Fertilizer or soil-amendment products are recorded by one conditional input card only when the actual route uses such a product outside its declared substrate recipe.

Wild gathering and forest harvesting are excluded. Spawn production, culture propagation, production of substrate ingredients, and packaging manufacture are upstream unless separately represented. Dried, canned, frozen, pickled, powdered, extracted, cooked, preserved, or otherwise processed mushroom products are excluded, as are retail, food service, consumer storage, and consumption. Transport after the declared gate is excluded; transport to the gate is included only through the conditional transport process.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mushrooms-farmed |
| classification_refs | CPC 3.0:01271 Mushrooms, farmed |
| covered_products | Fresh, whole or trimmed, cultivated edible mushrooms transferred at the declared farm or pack-house gate |
| excluded_products | Wild or gathered mushrooms; spawn and cultures; substrate ingredients and growing media as products; dried, canned, frozen, pickled, powdered, extracted, cooked, preserved, or otherwise processed products; post-gate distribution and use |
| representative_product | Marketable fresh farmed mushrooms meeting declared species, maturity, size, trim, cleanliness, grade, moisture condition, and packaging state |
| production_route | Substrate preparation or receipt, conditioning, inoculation with spawn, incubation, fruiting and repeated cropping, harvest, grading, optional washing or cooling, primary packaging, and gate hand-off |
| market_state | Fresh edible mushrooms at the declared farm or pack-house gate, loose or in declared primary packaging, with species and product condition stated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh farmed mushrooms at the declared farm or pack-house gate |
| How much | 1,000 kg net accepted fresh mushrooms |
| How well | Edible fresh mushrooms with declared species or species group, strain or cultivar where relevant, maturity, fruit-body condition, size and grade, trimming, cleanliness, moisture condition, washing or cooling state, packaging state, and gate |
| How long or cycle | One declared substrate or log campaign from substrate receipt or preparation through the final harvest flush; log routes also disclose production-year attribution and log age |
| reference_flow_link | `mushrooms_farmed_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fresh farmed mushrooms at the declared gate `793ef502-67bc-4a8c-a2aa-79159500fa9b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; mushroom species or species group; strain or cultivar where relevant; substrate or log route; substrate recipe and moisture basis; spawn source and lot; conditioning, pasteurisation, or sterilisation method; inoculation date; incubation and fruiting climate regime; casing or covering use; campaign and flush dates; accepted and downgraded output; maturity, size, trim, cleanliness, and grade; washing and cooling state; packaging state; spent-substrate and reject fate; declared gate |
| Binding | `fixed` |

When constructing a foreground data package, all `Required qualifiers` must be declared in metadata, process notes, the reference-flow comment, product description, or an equivalent field. Other unmapped product and process-flow identities must be resolved during foreground data generation before a final TIDAS process dataset is published.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_fresh_mushroom_mass` | accepted mushrooms and harvest reconciliation | Mass | kg | Express the reference as net accepted fresh mushroom mass at the declared gate; weigh marketable, downgraded, trim, contamination, and spoiled material separately. |
| `species_moisture_basis` | reference output, substrate, and yield records | Mass and moisture content | kg fresh; mass fraction water | Keep fresh-basis output and measured moisture separate; do not transfer an Agaricus-specific assumption to another species or route. |
| `batch_cycle_normalization` | substrate batches, rooms, bags, blocks, beds, and log campaigns | Mass and time | kg and campaign or production year | Trace every input and output to a substrate batch and campaign, then normalize to accepted output from that campaign. |
| `substrate_mass_balance` | substrate preparation, inoculation, and spent substrate | Mass | kg wet and kg dry matter where available | Record feedstock, water, spawn, casing, conditioned substrate, spent substrate, rejects, and unexplained loss on a consistent basis. |
| `energy_metering_basis` | conditioning, incubation, fruiting, cooling, and handling | Energy or fuel carrier | kWh, MJ, L, or kg | Preserve measured carrier, equipment or room, period, and conversion factor; do not infer climate-control energy from yield alone. |
| `water_balance_basis` | substrate water, humidification, crop watering, washing, and discharge | Volume and mass | m3 and kg | Record source withdrawal, delivered process water, recirculated water, wash water, and discharged wastewater separately when used. |
| `packaging_reuse_basis` | crates, trays, bags, films, cartons, and lidding | Mass, item count, and cycles | kg, item, and reuse cycle | Record packaging mass or count with capacity, reuse cycles, return rate, and loss or disposal route. |
| `transport_service_basis` | purchased transport to the declared gate | Transport service | t*km | Record product mass, route distance, vehicle or service type, load factor where available, temperature requirement, and return treatment. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased spawn and substrate ingredients, or ready conditioned substrate and spawn, entering the declared operation; on-site preparation starts with recorded feedstocks and utilities, while prior building, land, and infrastructure work is disclosed separately |
| starting_condition_role | Beginning of the declared substrate or log campaign and foreground production accounting |
| product_classification_scope | Fresh farmed edible mushrooms under CPC 3.0:01271 through the declared farm or pack-house gate |
| recursive_input_rule | Fresh farmed mushrooms in the same category are never recursive inputs. Spawn, cultures, substrate, casing, and packaging are upstream products or services linked once; internal conditioned or colonized substrate transfers are recorded once within the foreground batch. |
| upstream_dataset_requirement | Require compatible upstream datasets for spawn or culture, substrate feedstocks and casing, water supply, electricity and fuels, sanitation products, packaging, purchased transport, and waste or wastewater treatment when used. |
| disclosure | Declare geography, species and strain, facility and route, substrate recipe and moisture, conditioning method, spawn lot and rate, inoculation date, incubation and fruiting climate controls, casing or covering, flush dates, accepted and rejected mass, water and energy, washing, cooling, packaging, spent-substrate and wastewater fate, and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_farmed_campaign` | substrate preparation, inoculation, incubation, fruiting, cropping, and harvest | Include the cultivation campaign from substrate receipt or preparation through final harvest flush, including conditioning, spawn, climate control, water, sanitation, harvest, and primary gate preparation when before the declared gate. | `fao-make-money-growing-mushrooms-2010`; `robinson-2018-mushroom-lca` |
| `boundary_substrate_and_casing` | substrate ingredients, casing, supplements, and covering | Include actual substrate and casing crossing the boundary with recipe, wet or dry basis, and source; by-products receive no automatic burden-free or avoided-product credit. | `fao-make-money-growing-mushrooms-2010`; `robinson-2018-mushroom-lca` |
| `boundary_wild_and_processed_exclusion` | product identity and downstream use | Restrict the product to cultivated fresh mushrooms. Wild mushrooms, spawn, and processed or preserved products remain separate categories. | `usda-ams-mushroom-grade-standard` |
| `boundary_spent_substrate_fate` | spent substrate, contaminated substrate, and rejects | Record spent substrate and contaminated batches with destination, transport, treatment, and recipient use. Compost, soil-amendment, feed, or other credits require recipient and allocation or substitution evidence. | `robinson-2018-mushroom-lca`; `iso-14044-2006` |
| `boundary_declared_gate` | grading, washing, cooling, packaging, and transport | End the default boundary at the declared farm or pack-house gate. Include grading, trimming, washing, cooling, and primary packaging only before hand-off; use the conditional transport process only when inside the boundary. | `usda-ams-mushroom-grade-standard`; `robinson-2018-mushroom-lca` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `substrate_preparation_and_conditioning` | Mushroom substrate preparation and conditioning | required | every route that prepares, mixes, wets, pasteurises, or sterilises substrate; use receipt when ready conditioned substrate is purchased | foreground substrate preparation | batch mass, moisture, conditioning time, and utilities |
| `inoculation_and_incubation` | Spawn inoculation and incubation | required | every substrate or log campaign | foreground inoculation and mycelial growth | inoculated mass, spawn lot, room days, and utilities |
| `fruiting_and_cropping` | Fruiting, climate control, and repeated cropping | required | every fruiting campaign and harvest flush | foreground biological production | room days, water, energy, flush dates, and crop output |
| `harvest_grading_and_primary_packaging` | Harvest, grading, and primary packaging | required | every harvest campaign and declared gate | foreground harvest, conditioning, packaging, and hand-off | 1,000 kg accepted fresh mushrooms |
| `purchased_transport_to_gate` | Purchased transport to the declared gate | conditional | when purchased transport crosses the boundary before the declared gate | foreground delivery service | tonne-kilometres for declared mass |
### Process: Mushroom substrate preparation and conditioning (`substrate_preparation_and_conditioning`)

#### Inputs

##### Product flows

###### Flow: Bulk substrate feedstock (`bulk_substrate_feedstock_input`)

Record each agricultural residue, wood-based material, compost or manure ingredient, and other feedstock entering the batch. Keep material identity, supplier, moisture, and co-product or waste status explicit.

- Selected flow: Mushroom substrate feedstock
- Flow property / unit: Mass / kg wet and kg dry matter where available
- Amount rule: Weigh or document every feedstock by batch and retain moisture, recipe fraction, supplier, and source status.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_substrate_batch_records`
- Range: Provisional wet feedstock screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1,500
  - Upper: 12,000
  - Unit: kg wet feedstock per 1,000 kg accepted fresh mushrooms
  - Basis: broad first-pass range pending species, recipe, moisture, and yield records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `fao-make-money-growing-mushrooms-2010`; `robinson-2018-mushroom-lca`

###### Flow: Substrate conditioning water (`substrate_conditioning_water`)

Record water added to mix, wet, pasteurise, sterilise, or otherwise condition the substrate.

- Selected flow: Water supplied for substrate preparation
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum metered or documented water added to the batch and conditioning equipment; separate process water from cooling, recirculation, and discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_substrate_batch_records`
- Range: Substrate-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 8
  - Unit: m3 per 1,000 kg accepted fresh mushrooms
  - Basis: batch wetting and conditioning water pending measured balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `fao-make-money-growing-mushrooms-2010`

###### Flow: Substrate conditioning electricity (`substrate_conditioning_electricity`)

Record electricity used by mixing, pumping, pasteurisation, sterilisation, ventilation, or other conditioning equipment.

- Selected flow: Electricity supplied for substrate conditioning
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter batch, equipment, or production-line electricity and allocate it to the represented batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_substrate_energy_records`
- Range: Conditioning-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 500
  - Unit: kWh per 1,000 kg accepted fresh mushrooms
  - Basis: mixing, pumping, and electric conditioning pending meter records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `robinson-2018-mushroom-lca`

###### Flow: Substrate conditioning fuel or heat (`substrate_conditioning_fuel`)

Record fuel or externally supplied heat used to pasteurise, sterilise, or condition substrate.

- Selected flow: Fuel or process heat supplied for substrate conditioning
- Flow property / unit: Energy or mass / MJ, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: Record each fuel or heat carrier by batch, equipment, and measured consumption; retain the carrier and conversion basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_substrate_energy_records`
- Range: Conditioning-fuel QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3,000
  - Unit: MJ per 1,000 kg accepted fresh mushrooms
  - Basis: steam, hot-water, or direct-heat conditioning pending records
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `robinson-2018-mushroom-lca`

###### Agricultural nutrient and fertilizer inputs (`substrate_preparation_and_conditioning_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_amendment_records`
- Sources:
- Range: Conditional amendment screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg product per 1,000 kg accepted fresh mushrooms
  - Basis: optional product outside the substrate recipe pending actual route records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Substrate bag, block, tray, or support material (`substrate_container_material_input`)

Record bags, sleeves, trays, racks, plugs, or other supports entering the process. Reusable supports require service life and loss rate.

- Selected flow: Substrate container or support material
- Flow property / unit: Mass or item / kg or item
- Amount rule: Record purchased or issued mass or item count by batch, capacity, reuse cycles, return rate, and loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_container_material_records`
- Range: Support-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg material per 1,000 kg accepted fresh mushrooms
  - Basis: single-use or reusable support pending mass and cycle records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Flow: Substrate preparation residual (`substrate_preparation_residual_waste`)

Record screened-out feedstock, spoiled ingredients, sludge, damaged bags, and other residual material leaving preparation, with destination.

- Selected flow: Substrate preparation residual
- Flow property / unit: Mass / kg wet and dry matter where available
- Amount rule: Reconcile feedstock and water with conditioned batch, residuals, and documented losses by batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_substrate_batch_records`
- Range: Residual QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: percent of recorded feedstock mass
  - Basis: batch-level substrate reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Flow: Conditioned substrate batch (`conditioned_substrate_batch_output`)

Record accepted wet or dry-matter mass after mixing and conditioning and before inoculation. This is an internal hand-off when both stages are foreground.

- Selected flow: Conditioned mushroom substrate
- Flow property / unit: Mass / kg wet and dry matter where available
- Amount rule: Weigh the accepted batch and reconcile it to feedstock and water records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_substrate_batch_records`
- Range: Conditioned-substrate yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,500
  - Upper: 12,000
  - Unit: kg conditioned substrate per 1,000 kg accepted fresh mushrooms
  - Basis: accepted conditioned batch to final fresh output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Flow: Ammonia released during substrate conditioning (`substrate_conditioning_ammonia_emission`)

Record ammonia only when measured or calculated by a declared method; report receiving medium and substance basis. This row is conditional for manure-containing or composting routes.

- Selected flow: Ammonia to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: Collect or calculate ammonia from the declared method, receiving medium, substance, and batch allocation; omit when the route has no supported release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_substrate_batch_records`
- Sources: `robinson-2018-mushroom-lca`

### Process: Spawn inoculation and incubation (`inoculation_and_incubation`)

#### Inputs

##### Product flows

###### Flow: Conditioned substrate for inoculation (`conditioned_substrate_input`)

Record conditioned substrate or log material entering inoculation and link it to the substrate batch without duplicating its burden.

- Selected flow: Conditioned mushroom substrate or log material
- Flow property / unit: Mass or item / kg or item
- Amount rule: Record accepted inoculation input by batch, log lot, moisture basis, and facility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inoculation_records`

###### Flow: Mushroom spawn inoculum (`spawn_inoculum_input`)

Record purchased or internally supplied spawn by species, strain, lot, carrier, and inoculation rate. Spawn production remains upstream unless separately scoped.

- Selected flow: Mushroom spawn or inoculum
- Flow property / unit: Mass or item / kg or item
- Amount rule: Record spawn quantity and lot added to each batch and retain supplier or upstream dataset identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inoculation_records`
- Range: Provisional spawn-rate screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 25
  - Unit: percent of conditioned substrate mass or route-declared basis
  - Basis: species and route-specific spawn addition pending records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `fao-make-money-growing-mushrooms-2010`

###### Flow: Incubation water or humidification supply (`incubation_water_input`)

Record water supplied for incubation-room humidification, moisture maintenance, or handling.

- Selected flow: Water supplied for incubation
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum metered or documented water supplied to incubation rooms and distinguish humidification, cleaning, and recirculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incubation_climate_records`

###### Flow: Incubation electricity (`incubation_electricity`)

Record electricity for ventilation, pumps, humidification, sensors, and incubation climate control.

- Selected flow: Electricity supplied for incubation
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter or allocate electricity by room and incubation days.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incubation_climate_records`
- Range: Incubation-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10
  - Upper: 600
  - Unit: kWh per 1,000 kg accepted fresh mushrooms
  - Basis: incubation-room utilities pending meters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `robinson-2018-mushroom-lca`

###### Flow: Incubation fuel or heat (`incubation_fuel`)

Record fuel or externally supplied heat used to maintain incubation temperature.

- Selected flow: Fuel or process heat supplied for incubation
- Flow property / unit: Energy or mass / MJ, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: Record measured carrier consumption by room and incubation period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incubation_climate_records`

##### Waste flows

###### Flow: Failed or contaminated incubation batch (`incubation_contaminated_batch_waste`)

Record failed, contaminated, or discarded bags, blocks, logs, and substrate leaving incubation, with treatment or disposal route.

- Selected flow: Failed or contaminated incubation material
- Flow property / unit: Mass or item / kg or item
- Amount rule: Reconcile inoculated input, accepted colonized output, and failed material by batch.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_incubation_climate_records`
- Range: Contamination-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: percent of inoculated substrate or log input
  - Basis: campaign batch reconciliation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Flow: Colonized substrate or log material (`colonized_substrate_output`)

Record accepted colonized material transferred to fruiting, including batch, species, and colonization status.

- Selected flow: Colonized mushroom substrate or log material
- Flow property / unit: Mass or item / kg or item
- Amount rule: Weigh or count accepted material after incubation and reconcile failed batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incubation_climate_records`

##### Waste flows

##### Elementary flows
+
###### Flow: Carbon dioxide released during incubation (`incubation_carbon_dioxide_emission`)

Record carbon dioxide vented from incubation rooms only where measured or calculated using a declared gas balance and receiving-medium basis.

- Selected flow: Carbon dioxide to ambient air
- Flow property / unit: Mass / kg CO2
- Amount rule: Calculate or collect carbon dioxide from gas, ventilation, or room records; do not infer it from yield alone.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_incubation_climate_records`

### Process: Fruiting, climate control, and repeated cropping (`fruiting_and_cropping`)

#### Inputs

##### Product flows

###### Flow: Colonized substrate for fruiting (`colonized_substrate_input`)

Record colonized substrate, block, bed, or log entering fruiting and link it to incubation without duplicating the burden.

- Selected flow: Colonized mushroom substrate or log material
- Flow property / unit: Mass or item / kg or item
- Amount rule: Record accepted fruiting input by batch, room, species, and route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fruiting_climate_records`

###### Flow: Casing or covering material (`casing_or_covering_material_input`)

Record peat, soil, coir, vermiculite, paper, plastic cover, or other casing when the route uses it; omit when unused.

- Selected flow: Mushroom casing or covering material
- Flow property / unit: Mass or item / kg or item
- Amount rule: Record casing or covering by batch, moisture, recipe, and application surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fruiting_climate_records`
- Range: Conditional casing screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5,000
  - Unit: kg wet casing or covering per 1,000 kg accepted fresh mushrooms
  - Basis: route-specific casing pending recipe and application records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Fruiting water and humidification supply (`fruiting_water_input`)

Record water supplied for fruiting, humidification, misting, or watering of the fruiting medium, with source and recirculation state.

- Selected flow: Water supplied for fruiting and humidification
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum metered or documented water by room and flush, separating withdrawal, recirculation, and discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fruiting_climate_records`
- Range: Fruiting-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 15
  - Unit: m3 per 1,000 kg accepted fresh mushrooms
  - Basis: humidification, misting, and medium water pending records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Fruiting climate-control electricity (`fruiting_electricity`)

Record electricity for ventilation, refrigeration, humidification, lighting where used, pumps, monitoring, and other fruiting-room services.

- Selected flow: Electricity supplied for fruiting and climate control
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter or allocate electricity by room, campaign, and occupied room days.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fruiting_climate_records`
- Range: Fruiting-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 2,000
  - Unit: kWh per 1,000 kg accepted fresh mushrooms
  - Basis: room climate control pending meters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `robinson-2018-mushroom-lca`

###### Flow: Fruiting climate-control fuel or heat (`fruiting_fuel`)

Record fuel or heat used to maintain fruiting-room temperature when it crosses the boundary.

- Selected flow: Fuel or process heat supplied for fruiting
- Flow property / unit: Energy or mass / MJ, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `stationary-combustion-fuel`
- Amount rule: Record measured carrier use by room and campaign and preserve conversion basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fruiting_climate_records`

###### Flow: Cleaning or sanitation product (`cleaning_sanitation_product_input`)

Record cleaning, disinfection, and sanitation products used in rooms or equipment when they cross the boundary. Identify active substance and use concentration where relevant.

- Selected flow: Cleaning or sanitation product
- Flow property / unit: Mass or volume / kg or L product
- Amount rule: Record issued product and prepared solution by room, equipment, concentration, and campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fruiting_climate_records`

##### Waste flows

##### Elementary flows

###### Flow: Growing facility area occupation (`growing_facility_area_occupation`)

Record occupied growing-room or production-facility area only when operational occupation is included. Building construction remains outside this PCR unless separately modelled.

- Selected flow: Occupation of mushroom production area
- Flow property / unit: Area-time / m2*a
- Amount rule: Multiply campaign-attributable area by occupied time and disclose shared-area allocation basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_area_records`
- Range: Facility-area QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 500
  - Unit: m2*a per 1,000 kg accepted fresh mushrooms
  - Basis: occupied growing and service area attributable to campaign
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Flow: Fresh mushroom crop before grading (`fresh_mushroom_crop_output`)

Record all harvested fresh mushrooms before grading, distinguishing marketable, downgraded, rejected, and lost material.

- Selected flow: Fresh farmed mushroom crop
- Flow property / unit: Mass / kg fresh mushrooms
- Amount rule: Weigh each flush and reconcile species, room, batch, grade, and harvest date.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cropping_records`
- Range: Crop-output QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 20,000
  - Unit: kg fresh crop per 1,000 kg accepted gate output
  - Basis: harvested crop before grading and losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `robinson-2018-mushroom-lca`

##### Waste flows

###### Flow: Spent mushroom substrate (`spent_mushroom_substrate_output`)

Record substrate, casing, and residual medium leaving final harvest, with wet mass, moisture or dry matter, contamination status, destination, and recipient use.

- Selected flow: Spent mushroom substrate
- Flow property / unit: Mass / kg wet and dry matter where available
- Amount rule: Weigh or document spent substrate after the final flush and link it to its campaign and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cropping_records`
- Range: Spent-substrate QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 12,000
  - Unit: kg wet spent substrate per 1,000 kg accepted fresh mushrooms
  - Basis: final post-cropping medium
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `robinson-2018-mushroom-lca`

###### Flow: Crop loss or contaminated fruiting material (`fruiting_loss_waste`)

Record spoiled mushrooms, contaminated blocks, unharvested fruit bodies, and other crop losses with destination and treatment.

- Selected flow: Mushroom crop loss or contaminated fruiting material
- Flow property / unit: Mass / kg fresh or wet material
- Amount rule: Reconcile fruiting input, harvested crop, spent substrate, and crop loss by room and campaign.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cropping_records`
- Range: Fruiting-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: percent of harvested and rejected fresh crop mass
  - Basis: flush and campaign reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Flow: Carbon dioxide released during fruiting (`fruiting_carbon_dioxide_emission`)

Record carbon dioxide vented from fruiting rooms when measured or calculated with a declared gas-balance method and receiving medium.

- Selected flow: Carbon dioxide to ambient air
- Flow property / unit: Mass / kg CO2
- Amount rule: Calculate or collect carbon dioxide from gas, ventilation, or room records; disclose method and avoid double counting supplied gas.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fruiting_climate_records`
+
### Process: Harvest, grading, and primary packaging (`harvest_grading_and_primary_packaging`)

#### Inputs

##### Product flows

###### Flow: Reusable harvest crate or pallet function (`harvest_crate_or_pallet_input`)

Record reusable crates, pallets, bins, or harvest containers used before the gate, including capacity, turns, return rate, and loss.

- Selected flow: Reusable crate or pallet packaging function
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: Record container service and allocate manufacture, reuse, return, and loss by documented service life.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`

###### Flow: Rigid primary packaging (`rigid_primary_packaging_input`)

Record trays, punnets, tubs, clamshells, or other rigid primary packaging applied before the gate; omit when sold loose.

- Selected flow: Rigid primary packaging function
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- Amount rule: Record package type, mass or count, fill capacity, and campaign allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Flow: Flexible primary packaging or lidding (`flexible_primary_packaging_input`)

Record films, bags, wraps, lidding, labels, or other flexible materials applied before the gate; omit when unused.

- Selected flow: Flexible primary packaging function
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Amount rule: Record film or bag mass or item count by package type, fill capacity, and campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Flow: Harvest washing water (`harvest_washing_water`)

Record water used to wash mushrooms or equipment during harvest and grading only when washing occurs before the gate. State washed or unwashed product.

- Selected flow: Water supplied for mushroom washing
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Sum metered or documented washing water, separating product-contact water, equipment cleaning, recirculation, and wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_water_records`
- Range: Washing-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3 per 1,000 kg accepted fresh mushrooms
  - Basis: optional product washing and equipment cleaning
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Harvest and cooling electricity (`harvest_cooling_electricity`)

Record electricity used by harvest handling, grading, cold rooms, cooling, weighing, and packing before the gate.

- Selected flow: Electricity supplied for harvest handling and cooling
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Meter or allocate electricity by campaign, cold room, and accepted throughput.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Range: Harvest and cooling electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh per 1,000 kg accepted fresh mushrooms
  - Basis: grading, cooling, and packing equipment pending meters
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `robinson-2018-mushroom-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Flow: Accepted fresh mushrooms at the declared gate (`marketable_fresh_mushroom_output`)

Record net mushrooms accepted for sale after grading, trimming, optional washing or cooling, and included primary packaging.

- Selected flow: Fresh farmed mushrooms at declared gate
- Flow property / unit: Mass / kg fresh mushrooms
- Amount rule: Weigh accepted output by species, lot, grade, and gate state; this amount defines the 1,000 kg normalization.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Sources: `usda-ams-mushroom-grade-standard`

###### Flow: Downgraded mushrooms diverted to another use (`downgraded_mushroom_product_output`)

Record mushrooms leaving grading for a documented food, feed, compost, or other recipient. Unspecified material remains reject or waste.

- Selected flow: Downgraded farmed mushrooms for documented secondary use
- Flow property / unit: Mass / kg fresh mushrooms
- Amount rule: Weigh downgraded output by destination and retain recipient, quality, and allocation information.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_grade_records`
- Range: Downgraded-output QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: percent of mushrooms entering grading
  - Basis: grade and destination reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `usda-ams-mushroom-grade-standard`

##### Waste flows

###### Flow: Trimmings, rejects, and grading waste (`grading_reject_waste`)

Record trim, casing fragments, spoiled mushrooms, foreign material, and other rejected material with destination.

- Selected flow: Mushroom grading rejects and trimmings
- Flow property / unit: Mass / kg wet material
- Amount rule: Weigh or calculate rejected and trimmed material and reconcile it to pre-grading harvest mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_grade_records`
- Range: Grading-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: percent of mushrooms entering grading
  - Basis: pre-grading to accepted-output reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources: `usda-ams-mushroom-grade-standard`

###### Flow: Discarded packaging material (`packaging_waste_output`)

Record damaged, contaminated, single-use, or discarded packaging leaving packing, with material and destination.

- Selected flow: Discarded mushroom packaging
- Flow property / unit: Mass / kg material
- Amount rule: Reconcile issued packaging, filled packages, reusable returns, and discarded packaging by campaign.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`

###### Flow: Harvest and grading wastewater (`harvest_wastewater_output`)

Record wastewater leaving washing, equipment cleaning, or grading when water crosses the boundary. State volume, treatment, and destination.

- Selected flow: Mushroom harvest and grading wastewater
- Flow property / unit: Volume and mass / m3 and kg where measured
- Amount rule: Derive wastewater from discharge meters or a documented water balance and reconcile supplied, recirculated, and retained water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms from the same campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wash_water_records`
- Range: Wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3 per 1,000 kg accepted fresh mushrooms
  - Basis: supplied washing and cleaning water less retention or recirculation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Purchased transport to the declared gate (`purchased_transport_to_gate`)

#### Inputs

##### Product flows

###### Flow: Road freight service to the declared gate (`road_transport_to_gate`)

Include this conditional row when purchased transport carries mushrooms or included packaging before the gate. Record route, distance, temperature, shipment mass, and service provider.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / t*km
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- Amount rule: Calculate tonne-kilometres from transported mass and route distance, retaining load, temperature, and return assumptions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Range: Transport-service QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: t*km per 1,000 kg accepted fresh mushrooms
  - Basis: declared route and transported mass
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Flow: Fresh mushrooms delivered to the declared gate (`delivered_mushroom_output`)

Record accepted product mass handed over after included transport. Product identity requires foreground binding before publication.

- Selected flow: Fresh farmed mushrooms delivered at declared gate
- Flow property / unit: Mass / kg fresh mushrooms
- Amount rule: Reconcile shipped and received accepted mass, temperature, package state, and delivery losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted fresh mushrooms at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport_records`

##### Waste flows

##### Elementary flows
+
## 7. Allocation and Co-product Handling

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_process_subdivision_first` | shared substrate, rooms, utilities, and packing | Subdivide activities and collect separate batch records wherever practical; allocate only genuinely shared activities after physical separation is no longer feasible. | `iso-14044-2006` |
| `allocation_mushroom_and_spent_substrate` | marketable mushrooms and spent substrate | Treat marketable mushrooms as the reference product. Treat spent substrate as waste unless intentionally transferred to a documented recipient as a product or co-product. A saleable secondary product requires a declared physical or economic basis, sensitivity, and recipient evidence. | `robinson-2018-mushroom-lca`; `iso-14044-2006` |
| `allocation_multiple_flushes` | successive flushes from one campaign | Attribute shared substrate, incubation, and room burdens to all flushes from the same campaign and aggregate by accepted output. | `robinson-2018-mushroom-lca` |
| `allocation_downgraded_mushrooms` | downgraded mushrooms and grading rejects | Classify downgraded mushrooms as a co-product only with a documented recipient and intended use. Material without a recipient or with disposal treatment remains waste and receives no avoided-product credit. | `iso-14044-2006`; `usda-ams-mushroom-grade-standard` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_substrate_batch_records` | `substrate_preparation_and_conditioning` | feedstock, water, residual, conditioned substrate, ammonia | batch log and supplier record | batch_id; species; feedstock; supplier; wet_mass; dry_matter; moisture; water_added; conditioning_method; time; temperature; residual_mass; destination | weigh ingredients and batch; retain recipe, moisture test, and conditioning log | kg, %, m3, h, °C | every batch | full campaign | each substrate line or site | aggregate by batch and join to campaign | calibrated scale; moisture method; batch sign-off |
| `cp_nutrient_amendment_records` | `substrate_preparation_and_conditioning` | conditional amendment | invoice and application log | product_name; product_mass; nutrient_content; purpose; application_date; batch_id; supplier | verify invoice, label or specification, and application | kg product; kg nutrient | each application | full campaign | each site and batch | allocate only to receiving batches | label or specification; application record |
| `cp_container_material_records` | `substrate_preparation_and_conditioning` | bags, blocks, trays, supports | purchasing and issue record | material; mass_or_count; capacity; reuse_cycles; return_rate; losses; batch_id | reconcile purchase, issue, return, and loss | kg or item | each batch and return cycle | full campaign | each site or line | allocate by capacity and service life | specification; inventory; return log |
| `cp_substrate_energy_records` | `substrate_preparation_and_conditioning` | conditioning electricity and fuel or heat | meter, fuel log, or invoice | meter_id; carrier; equipment; batch_id; energy; fuel_volume; conversion_factor | read dedicated meter or allocate shared utility by run | kWh, MJ, L, kg | every run and monthly reconciliation | full campaign | each conditioning unit | allocate by measured run or operating time | meter calibration; fuel delivery; conversion record |
| `cp_inoculation_records` | `inoculation_and_incubation` | conditioned substrate and spawn | inoculation log | batch_id; species; strain; spawn_lot; spawn_mass; substrate_mass; inoculation_date; room; accepted_units | record mass or count at inoculation and retain lot | kg or item | every batch | full campaign | each inoculation room | aggregate by batch and spawn lot | lot traceability; scale check |
| `cp_incubation_climate_records` | `inoculation_and_incubation` | incubation water, energy, output, contamination, CO2 | room log and meter | room_id; batch_id; start; end; temperature; humidity; ventilation; water; electricity; fuel; CO2; accepted_units; failed_units | daily room record with meter reconciliation | °C, %, m3, kWh, MJ, kg, item | daily and monthly reconciliation | full campaign | each incubation room | aggregate by room days and batch | calibrated sensors; meter; batch release |
| `cp_fruiting_climate_records` | `fruiting_and_cropping` | colonized input, casing, water, energy, sanitation, area, CO2 | room log, issue record, and meter | room_id; batch_id; species; casing_mass; water; electricity; fuel; sanitation_product; room_area; occupied_time; temperature; humidity; CO2; flush_dates | combine room log, issue records, and meters | kg, m3, kWh, MJ, L, m2, h, °C, % | daily or per flush | full campaign | each fruiting room and site | aggregate by room, batch, and flush | sensor calibration; issue record; allocation log |
| `cp_facility_area_records` | `fruiting_and_cropping` | facility area occupation | facility register and schedule | room_id; usable_area; service_area; occupied_start; occupied_end; shared_use; allocation_basis | verify area and occupied period against schedule | m2 and days or years | each campaign | full campaign | each site | allocate area-time to campaign | facility measurement; schedule |
| `cp_cropping_records` | `fruiting_and_cropping` | crop, spent substrate, crop loss | harvest and campaign-close log | batch_id; room_id; species; flush; harvest_date; fresh_mass; spent_substrate_mass; moisture; loss_mass; contamination; destination | weigh each flush and final substrate | kg and % moisture | each flush and final close | full campaign | each room and batch | sum flushes after grade reconciliation | scale check; harvest ticket; destination |
| `cp_packaging_records` | `harvest_grading_and_primary_packaging` | crates, packaging, packaging waste | issue and packing record | package_type; mass_or_count; capacity; filled_units; reuse_cycles; returns; damaged_units; waste_mass; destination | reconcile issue, filled units, returns, and waste | kg or item | each packing run and monthly reconciliation | full campaign | each pack-house or gate | allocate by accepted mass and type | specification; inventory; waste ticket |
| `cp_wash_water_records` | `harvest_grading_and_primary_packaging` | washing water and wastewater | meter, balance, and treatment record | water_source; supplied_volume; recirculated_volume; discharge_volume; product_washed; cleaning_use; treatment; destination | meter supply and discharge or validate water balance | m3 and kg where measured | each wash run and monthly reconciliation | full campaign | each wash or pack line | aggregate by run and accepted mass | meter or balance; treatment receipt |
| `cp_harvest_grade_records` | `harvest_grading_and_primary_packaging` | accepted, downgraded, rejects, cooling electricity | harvest ticket, grade log, and meter | batch_id; species; harvest_mass; accepted_mass; downgraded_mass; reject_mass; grade; size; maturity; trim; cooling_energy; gate_date | weigh pre- and post-grading outputs and link meters | kg, grade, size, kWh | each harvest and packing run | full campaign | each pack-house or gate | aggregate by batch, species, grade, and gate | calibrated scale; grade record; cold-room meter |
| `cp_transport_records` | `purchased_transport_to_gate` | road transport and delivered output | shipment record and invoice | shipment_id; origin; destination; distance; product_mass; package_mass; vehicle; temperature; load; return; received_mass; loss | verify shipment, route, service, and receipt | t, km, t*km, °C, kg | every shipment | full campaign | declared route to gate | sum t*km and reconcile received mass | carrier record; route evidence; receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass_normalization` | all process amounts | Normalize as `recorded amount / accepted fresh mushroom mass at declared gate * 1,000 kg`. | batch and campaign records; accepted gate mass | amount per 1,000 kg accepted fresh mushrooms |  |
| `calc_substrate_dry_matter` | substrate, casing, spawn, and spent substrate | Calculate dry matter as `wet mass * (1 - measured water fraction)` and preserve method. | wet mass; measured moisture | wet and dry-matter mass | `robinson-2018-mushroom-lca` |
| `calc_spawn_and_substrate_rates` | inoculation | Calculate spawn rate as `spawn mass or count / accepted conditioned substrate mass or declared unit basis`. | spawn and substrate records | route-specific inoculation rate | `fao-make-money-growing-mushrooms-2010` |
| `calc_shared_room_utilities` | incubation and fruiting utilities | Allocate shared meters by measured batch run, room days, occupied area-time, or documented physical basis; retain sensitivity. | meter; schedule; batch or area-time | campaign utility amount | `iso-14044-2006` |
| `calc_water_balance` | substrate, fruiting, washing, and wastewater | Reconcile source withdrawal and recycled water against retention, declared evaporation method, and discharge; disclose difference. | supply; recirculation; discharge; retention | process water and wastewater | `fao-make-money-growing-mushrooms-2010` |
| `calc_flush_yield_aggregation` | fruiting output and reference flow | Sum accepted, downgraded, rejected, and lost mass across flushes from one campaign before normalization. | flush and grade records | campaign output by destination and grade | `robinson-2018-mushroom-lca`; `usda-ams-mushroom-grade-standard` |
| `calc_substrate_and_residue_reconciliation` | substrate, colonized material, spent substrate, and residuals | Reconcile feedstock, water, internal transfers, spent substrate, rejects, and documented loss on the chosen basis; investigate unexplained loss. | batch, moisture, and close records | mass-balance difference | `robinson-2018-mushroom-lca` |
| `calc_emission_from_declared_method` | ammonia and carbon-dioxide outputs | Apply one declared gas-balance or factor method to recorded substrate, room, carrier, or ventilation data; record receiving medium and prevent duplicate accounting. | gas or ventilation data; method; allocation | substance-specific elementary output | `robinson-2018-mushroom-lca` |
| `calc_packaging_reuse_service` | reusable containers | Allocate as `container mass / documented service cycles * campaign service` adjusted for returns and losses. | package mass; cycles; returns; losses | campaign packaging service | `iso-14044-2006` |
| `calc_transport_service` | transport to gate | Calculate as `transported mass in tonnes * route distance in km` and reconcile shipment and receipt loss. | mass; route; distance; carrier record | t*km and delivered mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_route` | product, species, substrate, spawn, and gate | Identify species or group, strain where relevant, route, facility type, and gate; preserve identity evidence gap gaps until binding. | `fao-make-money-growing-mushrooms-2010`; `usda-ams-mushroom-grade-standard` |
| `dq_batch_traceability` | all batch and room records | Link substrate, spawn, rooms, flushes, packaging, rejects, spent substrate, and transport to a common campaign identifier. | `robinson-2018-mushroom-lca` |
| `dq_moisture_and_mass_basis` | substrate, casing, crop, and spent substrate | State wet or dry basis, measure moisture where material, and retain method and sampling record. | `robinson-2018-mushroom-lca` |
| `dq_metered_water_and_energy` | water, electricity, fuel, and heat | Prefer dedicated meters or primary records; document shared-utility allocation, meter status, and conversion factors. | `robinson-2018-mushroom-lca` |
| `dq_climate_and_flush_coverage` | incubation and fruiting | Cover every room and campaign day or declare gaps; retain climate, ventilation, CO2 where used, and flush dates. | `fao-make-money-growing-mushrooms-2010`; `robinson-2018-mushroom-lca` |
| `dq_substrate_and_residue_balance` | feedstock, conditioned material, spent substrate, and rejects | Reconcile major substrate and residue streams and disclose unexplained difference, contamination, recipient, treatment, and transport. | `robinson-2018-mushroom-lca`; `iso-14044-2006` |
| `dq_grade_and_gate_state` | accepted, downgraded, rejected, washed, cooled, and packaged output | Retain grade, size, maturity, trim, cleanliness, wash and cooling state, package state, and gate for each lot. | `usda-ams-mushroom-grade-standard` |
| `dq_packaging_and_transport` | primary packaging and purchased transport | Record package mass or count, reuse cycles and losses, route and service, and boundary position. | `iso-14044-2006` |
| `dq_method_and_factor_disclosure` | calculated emissions, allocation, conversions, and upstream datasets | State method, factor, version, allocation basis, source, period, and sensitivity for every non-measured result. | `iso-14044-2006`; `robinson-2018-mushroom-lca` |
| `dq_unmapped_identity_disclosure` | reference flow and unmapped cards | Report evidence gap product, substrate, spawn, casing, residue, reject, wastewater, and internal-state identities; resolve required identities before final publication. |  |

## 9. Validation Rules

### Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Require declared species, route, gate, qualifiers, and compatible concrete product, mass property, and mass unit-group identity before final publication; this draft requires foreground identity binding. |  |
| `validation_campaign_reconciliation` | all campaigns | Check substrate, spawn, room, flush, accepted, downgraded, reject, spent-substrate, and transport records share identifiers and reconcile to reference mass. | `robinson-2018-mushroom-lca` |
| `validation_moisture_basis` | fresh mushrooms, substrate, casing, and spent substrate | Reject mixed wet and dry amounts without documented measured conversion and moisture basis. | `robinson-2018-mushroom-lca` |
| `validation_route_conditionals` | casing, fertilizer or soil amendment, washing, packaging, and transport | Include each conditional exchange only when its route condition is true and retain omission evidence when unused. | `fao-make-money-growing-mushrooms-2010`; `usda-ams-mushroom-grade-standard` |
| `validation_parameterized_flows` | parameterized rows | Resolve every Flow Set group to a compatible concrete UUID, property, unit group, geography, and intended use during foreground generation before publication. |  |
| `validation_unmapped_flows` | unmapped rows | Keep evidence gap substrate, spawn, casing, internal material, spent substrate, rejects, wastewater, and product-output identities explicit; do not force a product-output Flow Set match. |  |
| `validation_emission_reporting` | ammonia and carbon-dioxide rows | Require receiving medium, reported substance, method, amount basis, and duplicate-pathway check for every elementary emission. | `robinson-2018-mushroom-lca` |
| `validation_spent_substrate_destination` | spent and contaminated substrate | Require destination, recipient or treatment, mass, moisture basis, and transport evidence; apply credit only under the allocation or substitution rule. | `robinson-2018-mushroom-lca`; `iso-14044-2006` |
| `validation_allocation_disclosure` | shared activities and secondary outputs | Require process subdivision evidence or allocation basis, shared-utility allocation, sensitivity, and recipient evidence for any co-product claim. | `iso-14044-2006` |
| `validation_grade_and_gate` | accepted output and primary packaging | Confirm species, freshness, maturity, size or grade, trim, cleanliness, wash and cooling state, packaging, and gate for each accepted lot. | `usda-ams-mushroom-grade-standard` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground cultivation and gate-preparation dataset for fresh farmed edible mushrooms |
| downstream_use | `secondary_dataset`; `background_dataset` after review, identity resolution, and publication |
| allowed_use | Fresh cultivated mushrooms with compatible species, route, substrate, geography, campaign, moisture basis, product state, gate, and packaging or washing conditions |
| excluded_use | Wild gathered mushrooms; spawn or substrate production; dried, frozen, canned, pickled, powdered, extracted, cooked, or preserved products; retail, consumption, or comparisons that omit route and gate |
| required_metadata | species or group; strain or cultivar; geography; route and facility; substrate recipe and moisture; spawn lot; conditioning; inoculation; incubation and fruiting climate; flush dates; accepted and downgraded output; rejects; spent-substrate fate; water; energy; washing; cooling; packaging; transport; gate |
| required_quality_disclosure | primary-record coverage; batch and room traceability; wet or dry basis; moisture method; meter and allocation quality; flush and grade reconciliation; substrate and spent-substrate balance; emission and allocation methods; upstream identities; provisional ranges; Flow Set resolutions; unmapped identities |
| update_trigger | verified identity; reviewed substrate, yield, water, or energy evidence; species or route change; revised grade or gate practice; emission or allocation method change; or a new spent-substrate treatment route |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-make-money-growing-mushrooms-2010` | official_guidance | FAO, *Make money by growing mushrooms*, https://www.fao.org/4/i0522e/i0522e00.htm (retrieved 2026-09-14) | substrate ingredients and moisture, pasteurisation or sterilisation, spawn inoculation, process decomposition, and collection fields |
| `robinson-2018-mushroom-lca` | literature | Robinson et al., *A life cycle assessment of Agaricus bisporus mushroom production in the USA*, International Journal of Life Cycle Assessment (2018), https://doi.org/10.1007/s11367-018-1456-6 (retrieved 2026-09-14) | cradle-to-gate decomposition, substrate and casing, room utilities, yield and spent-substrate accounting, emission context, and ranges |
| `usda-ams-mushroom-grade-standard` | official_guidance | USDA Agricultural Marketing Service, *Mushrooms Grades and Standards*, https://www.ams.usda.gov/grades-standards/mushrooms-grades-and-standards (retrieved 2026-09-14) | fresh-market identity, maturity, size, defects, grade, trimming, and gate-quality checks |
| `iso-14044-2006` | standard | ISO, *ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines*, https://www.iso.org/standard/38498.html (retrieved 2026-09-14) | process subdivision, allocation hierarchy, co-product and substitution disclosure, and data-quality rules |
