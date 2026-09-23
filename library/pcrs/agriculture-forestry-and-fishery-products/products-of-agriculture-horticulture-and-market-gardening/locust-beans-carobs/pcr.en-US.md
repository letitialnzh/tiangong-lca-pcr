---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.locust-beans-carobs
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Locust beans (carobs)

## 1. Scope and Applicability

This PCR guides a foreground data package for ripe whole carob pods (*Ceratonia siliqua* L.) produced in a managed orchard or managed cultivated grove and transferred at the producing site or first-conditioning gate. The product is the whole pod with pulp and seeds retained. The route covers orchard establishment or tree replacement when attributable to the declared productive period, perennial orchard management, harvest and collection, and conditional primary conditioning such as natural or supplied-air drying, cleaning, sorting, and grading before the declared gate.

It applies to rainfed and irrigated managed production, manual or mechanized harvest, and fresh/as-received or naturally dried whole pods when the market state and moisture basis are declared. A managed cultivated grove may use low-input practice, but it must have a defined area, reporting period, and activity record. Unmanaged wild collection is excluded because it is a resource-removal route rather than the managed biological production route covered here.

Kibbled pods, deseeded pulp, carob seeds as a separated product, locust bean gum, germ meal, flour, powder, syrup, molasses, roasted pods, fermented products, retail packs, downstream storage, transport after the declared gate, and other processed carob products are excluded. Harvest containers and packaging are outside the default boundary unless a study explicitly declares a gate that includes them; such an extension must add the relevant packaging records and identity resolution.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.locust-beans-carobs` |
| classification_refs | CPC 3.0 `01356`, Locust beans (carobs) |
| covered_products | ripe whole carob pods of *Ceratonia siliqua* L., with pulp and seeds retained, transferred as received or after declared primary drying/cleaning/sorting |
| excluded_products | unmanaged wild collection; separated seeds, deseeded pulp, kibbles, gum, germ meal, flour, powder, syrup, molasses, roasted, fermented, preserved, retail, and downstream logistics products |
| representative_product | accepted whole ripe carob pods, normally naturally dried or otherwise stabilized only to the declared primary-gate state, with seeds retained |
| production_route | managed perennial carob orchard or cultivated grove establishment and management, harvest and collection, and conditional primary drying, cleaning, sorting, and grading |
| market_state | accepted whole pods at the producing farm or first-conditioning gate, with species, cultivar or type, crop year, moisture convention, quality or destination grade, and seed-retention status declared |

The term “locust bean” is treated here as the whole carob pod, not as a synonym for the separated seed or locust bean gum. This distinction follows the product terminology and process descriptions in the FAO Feedipedia carob account and the FAO non-wood forest-products chapter (`fao-feedipedia-carob`; `fao-carob-nwfp-chapter7`).

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | accepted whole ripe carob pods with pulp and seeds retained at the declared primary-gate state |
| How much | 1 kg net accepted whole carob pods |
| How well | species; cultivar or cultivar group; managed orchard or cultivated-grove route; fresh/as-received or dried state; moisture basis; quality or destination grade; seed-retention status; accepted, downgraded, rejected, and loss masses; geography; crop year; and declared gate |
| How long or cycle | one declared crop year or complete harvest campaign; perennial establishment, replacement, and non-bearing periods are linked to the documented productive-period basis |
| reference_flow_link | terminal output from `carob_primary_conditioning` when primary conditioning is included, otherwise terminal output from `carob_harvest_and_collection` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Locust beans (carobs), production mix, at farm gate, fresh, unprocessed (`a5e8d701-0314-4eba-a5ba-37ba590d469b`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200c9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | species; cultivar or cultivar group; managed orchard or cultivated-grove status; production geography; orchard age and bearing area; crop year or harvest campaign; irrigation status and water source; nutrient and soil-amendment basis; harvest method; fresh/as-received or dried state; moisture convention; quality or destination grade; seed-retention status; accepted and rejected mass; primary-conditioning inclusion; declared gate |
| Reference identity status | fixed UUIDs reviewed against the exact CPC 01356 product candidate and saved mass-property/unit-group index |

When constructing a foreground data package, the required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Net product mass excludes container tare. A final TIDAS exchange must retain the reviewed product flow, mass-property, and unit-group identities and verify their compatibility with the declared gate and lot evidence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and accepted output | Mass | kg | Express the reference flow as net accepted whole carob-pod mass at the declared gate. Retain the as-received mass and moisture measurement; do not silently substitute seed-only, pulp-only, dry-matter, or processed-product mass. |
| `moisture_basis` | harvested, dried, stored, and accepted pods | Mass and moisture fraction | kg and percent or kg water/kg product | Record lot moisture with method and sampling point. If a dry-mass conversion is made, use the measured moisture fraction and disclose whether the input and output masses are as received or on a dry basis. |
| `orchard_life_annualization` | establishment, replacement, and immature-tree inputs | area, time, or mass activity property | ha, orchard-year, or kg product | Link each establishment or replacement event to the orchard block, productive period, and accepted pod output. Annualize only with a documented productive-period assumption and retain the original event record. |
| `nutrient_product_and_basis` | fertilizer and soil-amendment inputs | product mass and nutrient mass | kg product and kg N, P2O5, K2O, or declared organic basis | Record only products actually used, their product mass, and the declared nutrient or amendment basis. Do not infer a fertilizer type from a nutrient total. |
| `water_energy_unit` | irrigation, direct withdrawal, orchard work, harvest, and conditioning | volume, mass, or energy | m3, kg, L, MJ, or kWh | Preserve the measured activity unit, carrier or source, equipment or operation, period, and any conversion equation. Do not add supplied water to direct withdrawal when they describe the same volume. |
| `whole_pod_identity` | product outputs and same-category process links | declared product state | declared descriptor | Keep pulp and seeds together for this PCR. Separation into seeds, pulp, kibbles, gum, or other products is a downstream transformation and cannot be represented as the whole-pod reference output. |

## 5. System Boundary

The foreground boundary starts with the declared managed carob orchard or cultivated grove and runs through orchard management, harvest, collection, and the primary conditioning needed to reach the declared whole-pod gate. Primary conditioning may include natural or supplied-air drying, cleaning, sorting, and grading when those operations occur before the gate. It ends at transfer of accepted whole pods at the producing site or first-conditioning gate.

Upstream production of nursery stock, fertilizer and soil-amendment products, crop-protection formulations, irrigation supply, fuels, electricity, machinery services, and waste-treatment services uses compatible background datasets when those inputs cross the foreground boundary. Direct resource withdrawals and field or conditioning emissions are foreground exchanges when they are measured or calculated under this PCR.

The boundary excludes unmanaged wild collection, orchard products other than the declared pod outputs, kibbling, milling, seed separation, gum extraction, roasting, syrup or molasses production, retail presentation, transport after the declared gate, downstream storage, consumer use, and packaging end-of-life. Rejected or downgraded material remains inside the balance until its declared hand-off or waste destination is evidenced.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | established or newly established managed carob orchard or cultivated grove at the beginning of the declared crop year, with planting or replacement records and prior land condition disclosed |
| starting_condition_role | start of managed perennial carob production and orchard-asset accounting |
| product_classification_scope | current CPC 3.0 product category `01356`, Locust beans (carobs), semantically limited to whole ripe carob pods with seeds retained at a primary gate |
| recursive_input_rule | Whole carob pods transferred between the production, harvest, and conditioning nodes are internal process links, not additional market outputs. A same-category pod input crossing the external boundary is recorded as an upstream product dataset and is not recursively expanded into another whole-pod production system. |
| upstream_dataset_requirement | Use compatible upstream datasets for nursery stock, nutrient and soil-amendment products, crop-protection formulations, supplied irrigation water, fuels, electricity, machinery services, and waste treatment when these activities are not measured as foreground activity. |
| disclosure | species and cultivar or type; orchard or grove status; block and area; tree age and bearing status; productive-period assumption; crop year; prior land condition; irrigation source and volume; nutrient and soil-amendment records; crop protection; energy; harvest method; raw and accepted pod masses; moisture; grade and destination; reject and loss fate; conditioning operations; and declared gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_orchard_to_pod_gate` | all conforming datasets | Include managed orchard or cultivated-grove production, harvest, collection, and the declared primary conditioning up to transfer of accepted whole pods at the producing or first-conditioning gate. | `fao-feedipedia-carob`; `fao-carob-nwfp-chapter7`; `iso-14044-2006` |
| `boundary_perennial_asset_period` | establishment, replacement, and non-bearing periods | Link establishment, replacement, and immature-tree inputs to the declared productive period and accepted pod output; disclose the annualization horizon, crop-year linkage, and any non-bearing period. | `fao-feedipedia-carob`; `carob-macronutrients-water-2005`; `iso-14044-2006` |
| `boundary_primary_conditioning_only` | drying, cleaning, sorting, and grading | Include only first conditioning needed to reach the declared whole-pod gate. Stop before kibbling, milling, seed separation, gum extraction, roasting, syrup, flour, or other downstream transformation. | `fao-feedipedia-carob`; `carob-drying-characteristics-2016` |
| `boundary_unmanaged_wild_exclusion` | wild or feral-tree harvest | Exclude unmanaged wild collection from this managed-production PCR; if the declared route has no managed production boundary, use a separately reviewed resource-removal methodology. | `fao-carob-nwfp-chapter7` |
| `boundary_direct_exchange_completeness` | resources, nutrients, residues, and emissions | Include measured or method-calculated land occupation, irrigation or direct withdrawal, energy, nutrient-related environmental exchanges, residues, rejects, and losses when they occur within the declared boundary. | `carob-macronutrients-water-2005`; `ipcc-2019-refinement-vol-4`; `iso-14044-2006` |
| `boundary_recursive_product_input` | same-category product inputs | Do not recursively expand a whole-pod product input. Record the external input identity and upstream dataset requirement, or document why no same-category input crossed the boundary. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `carob_orchard_production` | Managed carob orchard or cultivated-grove production | required | include the declared managed bearing area, crop-year management, and attributable establishment or replacement activity | foreground perennial biological production | orchard area, productive period, crop year, and harvestable pod mass |
| `carob_harvest_and_collection` | Carob harvest and collection | required | include removal of ripe pods from the managed production context and their collection into the raw-pod lot | foreground harvest capture and production hand-off | harvested-lot mass before primary conditioning |
| `carob_primary_conditioning` | Carob primary drying, cleaning, sorting, and grading | conditional | include when any drying, cleaning, sorting, or grading occurs before the declared gate; omit only for an explicitly unconditioned hand-off | foreground raw-to-prepared conditioning | accepted, downgraded, rejected, and moisture-loss masses at the declared gate |

### Process: Managed carob orchard or cultivated-grove production (`carob_orchard_production`)

#### Inputs

##### Product flows

###### Carob planting or replacement stock (`carob_planting_and_replacement_stock`)

Record nursery plants, grafted trees, or other planting material only when trees are planted or replaced in the declared managed orchard or cultivated grove. Existing trees are represented through the declared starting condition and productive-period accounting, not as a recurring planting input.

- Selected flow: Carob nursery stock or replacement tree material (UUID unresolved; intentionally blank)
- Flow property / unit: Item count or mass / item or kg
- Amount rule: measured planting or replacement quantity by block and event, linked to the declared productive period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carob_orchard_lifecycle_records`
- Sources: `fao-feedipedia-carob`

###### Agricultural nutrient and fertilizer inputs (`carob_orchard_production_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_orchard_lifecycle_records`
- Sources: `carob-macronutrients-water-2005`

###### Irrigation water supplied (`carob_irrigation_water_input`)

Record delivered irrigation by source and orchard block. Rainfed production records a justified zero only when the route and field records support that condition.

- Selected flow: Irrigation water supply (UUID unresolved; resolve from the actual source and use)
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered, invoiced, or reconciled delivered irrigation volume by source, block, and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_irrigation_records`
- Sources: `carob-macronutrients-water-2005`

###### Crop-protection formulations actually applied (`carob_orchard_crop_protection_input`)

Record each actual formulation, active ingredient or formulation identity when available, application event, applied mass, block, and target. Do not replace a missing formulation identity with a generic pesticide default.

- Selected flow: Actual crop-protection formulation for carob production (UUID unresolved; intentionally blank)
- Flow property / unit: Product mass / kg formulation
- Amount rule: sum measured formulation mass by product, event, block, and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_orchard_lifecycle_records`

###### Orchard fuel and electricity (`carob_orchard_energy_inputs`)

Record energy for irrigation pumping, pruning, mowing, nutrient application, crop protection, access, and other orchard operations. Keep electricity, fuel, and contracted activity records distinguishable.

- Selected flow: Energy supply for managed carob orchard operations (UUID unresolved; resolve from actual carrier)
- Flow property / unit: Energy, mass, or volume / kWh, MJ, L, or kg as recorded
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, invoice, contractor record, or documented equipment calculation by operation, block, and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_orchard_lifecycle_records`

##### Waste flows

###### Orchard pruning and removed biological residues (`carob_orchard_residues`)

Record pruning wood, removed fruit, leaves, or other biological residues only when they leave the field or are managed as a declared waste stream. Material retained and managed in the orchard is disclosed as an in-field residue condition and must not be counted as an off-site waste output.

- Selected flow: Carob orchard biological residue or pruning waste (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg as received or dry matter
- Amount rule: measured or reconciled residue mass by block, event, and declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_orchard_lifecycle_records`

##### Elementary flows

###### Orchard land occupation (`carob_orchard_land_occupation`)

Record the managed orchard or cultivated-grove area and occupation period. Land transformation is not assumed; any land transformation or prior land-use change must be separately evidenced and disclosed.

- Selected flow: Land occupation by managed carob orchard or cultivated grove (UUID unresolved; resolve from site and occupation type)
- Flow property / unit: Area-time / ha*a or m2*a
- Amount rule: declared occupied area multiplied by the crop-year or annualized occupation period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carob_orchard_lifecycle_records`
- Sources: `iso-14044-2006`

###### Direct water withdrawal for orchard use (`carob_orchard_water_withdrawal`)

Record direct withdrawal from a natural resource only when the orchard withdraws the water itself and the same volume is not already represented by an upstream irrigation-supply dataset.

- Selected flow: Water resource withdrawal for carob orchard irrigation (UUID unresolved; resolve source and compartment)
- Flow property / unit: Volume / m3
- Amount rule: measured or reconciled withdrawal volume by source, block, and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_irrigation_records`
- Sources: `carob-macronutrients-water-2005`

##### Outputs

##### Product flows

###### Harvestable ripe pods at the production hand-off (`carob_harvestable_pods_on_tree`)

Record the ripe whole-pod crop available for independent removal from the managed production context. This is an intermediate product hand-off to the harvest process, not a second market output.

- Selected flow: Ripe whole carob pods with seeds retained (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled harvestable pod mass for the block and crop year
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per bearing hectare and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carob_harvest_lot_records`
- Sources: `fao-feedipedia-carob`
- Range: Typical harvestable-pod yield screening range
  - Range role: Typical range (`typical_range`)
  - Lower: 1.7
  - Upper: 7.0
  - Unit: t/ha crop year
  - Basis: bearing managed carob area and one crop year
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-feedipedia-carob`

##### Waste flows

#### Outputs

##### Elementary flows

###### Nitrous oxide released to ambient air (`carob_soil_nitrous_oxide_output`)

Calculate direct and applicable indirect nitrous-oxide emissions from the declared nutrient, amendment, residue, soil, climate, and management records using the selected geographically applicable method tier.

- Selected flow: Nitrous oxide to ambient air (UUID unresolved; resolve pollutant species and medium)
- Flow property / unit: Mass / kg N2O
- Amount rule: method-calculated from declared nitrogen and residue activity data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carob_orchard_lifecycle_records`
- Sources: `ipcc-2019-refinement-vol-4`

###### Ammonia released to ambient air (`carob_soil_ammonia_output`)

Calculate ammonia emissions when required by the selected method for the declared nutrient products, application method, amendment, soil, and climate context.

- Selected flow: Ammonia to ambient air (UUID unresolved; resolve pollutant species and medium)
- Flow property / unit: Mass / kg NH3
- Amount rule: method-calculated from declared nutrient and amendment application records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carob_orchard_lifecycle_records`
- Sources: `ipcc-2019-refinement-vol-4`

###### Nitrate release to the declared receiving medium (`carob_nitrate_release_output`)

Record or calculate nitrate release only when supported by measurement or the selected regional method. The foreground package must declare whether the receiving medium is soil or water before resolving the elementary-flow identity.

- Selected flow: Nitrate pollutant to the declared receiving medium (UUID unresolved; receiving medium required)
- Flow property / unit: Mass / kg nitrate or method-defined nitrogen basis
- Amount rule: measured or method-calculated nitrate release linked to the crop-year nutrient and water-balance records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop year and per 1,000 kg accepted whole carob pods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carob_orchard_lifecycle_records`
- Sources: `ipcc-2019-refinement-vol-4`

### Process: Carob harvest and collection (`carob_harvest_and_collection`)

#### Inputs

##### Product flows

###### Harvestable ripe pods from managed production (`carob_harvestable_pods_input`)

Receive the ripe whole-pod hand-off from managed production. Do not count this process link as an additional market output.

- Selected flow: Ripe whole carob pods with seeds retained (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled input mass by block, harvest lot, and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_harvest_lot_records`

###### Harvest and collection energy (`carob_harvest_energy_input`)

Record fuel or electricity for shaking, beating, collection, nets, conveyors, or other harvest and collection operations. Fully manual harvest records a justified zero with labour and route evidence.

- Selected flow: Energy supply for carob harvest and collection (UUID unresolved; resolve from actual carrier)
- Flow property / unit: Energy, mass, or volume / kWh, MJ, L, or kg as recorded
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: fuel invoice, equipment meter, contractor statement, or documented equipment calculation assigned to the harvest campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carob_harvest_lot_records`

##### Waste flows

###### Uncollected or field-lost pods (`carob_field_loss_and_uncollected_pods`)

Record pods that fall, remain uncollected, or are lost during removal when they are not transferred as an intended product. State whether they remain in the orchard, are collected for another destination, or are otherwise managed.

- Selected flow: Uncollected or field-lost carob pods (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg as received
- Amount rule: measured or reconciled difference between harvestable pod mass, collected raw pods, and other declared destinations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carob_harvest_lot_records`

###### Harvest-damaged or unmarketable pods (`carob_harvest_damaged_or_rejected_pods`)

Record damaged, immature, contaminated, or otherwise unmarketable pods as waste only when they do not leave the boundary as an intended whole-pod product. Declare the destination and do not count them as accepted product.

- Selected flow: Harvest-damaged or unmarketable carob pods (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg as received
- Amount rule: measured rejected mass by harvest lot, reason, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_harvest_lot_records`

##### Elementary flows

#### Outputs

##### Product flows

###### Collected raw whole pods (`carob_collected_raw_pods`)

Record raw whole pods collected from the managed trees before the conditional primary-conditioning hand-off. The seeds remain embedded in the pods.

- Selected flow: Collected raw whole carob pods with seeds retained (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled collected raw-pod mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_harvest_lot_records`

##### Waste flows

##### Elementary flows

### Process: Carob primary drying, cleaning, sorting, and grading (`carob_primary_conditioning`)

#### Inputs

##### Product flows

###### Collected raw pods entering primary conditioning (`carob_collected_raw_pods_input`)

Receive the collected raw-pod lot. Natural air-drying is included when it occurs before the declared gate; supplied-air drying and its energy are recorded separately.

- Selected flow: Collected raw whole carob pods with seeds retained (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: weighed incoming lot mass and moisture at the conditioning entrance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_conditioning_records`

###### Conditioning energy (`carob_conditioning_energy_input`)

Record electricity or fuel for supplied-air drying, fans, conveyors, cleaning, sorting, grading, and short handling inside the declared gate. Natural drying without supplied energy records the documented zero-energy condition.

- Selected flow: Energy supply for carob primary conditioning (UUID unresolved; resolve from actual carrier)
- Flow property / unit: Energy, mass, or volume / kWh, MJ, L, or kg as recorded
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: meter, invoice, equipment record, or documented energy calculation by conditioning campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_conditioning_records`

###### Conditioning process water (`carob_conditioning_process_water_input`)

Record water only when washing or another water-using cleaning step occurs before the declared gate. Dry cleaning records a justified zero with the selected cleaning method.

- Selected flow: Process water for carob cleaning (UUID unresolved; resolve from actual use)
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: meter, delivery record, or reconciled water-use log by conditioning campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_conditioning_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Downgraded or alternate-destination whole pods (`carob_downgraded_whole_pods_output`)

Record a downgraded whole-pod grade as an intended product output only when it is deliberately transferred to a declared destination. If the material is discarded or not transferred as a product, use the reject card instead.

- Selected flow: Downgraded or alternate-destination whole carob pods with seeds retained (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: measured output mass by grade, lot, and declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_conditioning_records`

###### Accepted whole carob pods at the declared gate (`carob_accepted_whole_pods_output`)

Record the terminal accepted whole-pod output. The default market state is naturally dried or otherwise stabilized whole pods, but a route may declare an as-received hand-off when no conditioning is performed. No seed separation occurs in this card.

- Selected flow: Accepted whole ripe carob pods with seeds retained (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: measured net accepted mass at the declared gate, excluding container tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: terminal output scaled to 1,000 kg accepted whole carob pods
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carob_conditioning_records`
- Sources: `carob-drying-characteristics-2016`; `carob-nutritional-characterization-2018`
- Range: Primary-gate moisture screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 8
  - Upper: 15
  - Unit: percent mass basis
  - Basis: accepted whole-pod lot at the declared primary gate; retain measured value and buyer specification
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `carob-drying-characteristics-2016`; `carob-nutritional-characterization-2018`

##### Waste flows

###### Conditioning rejects and foreign material (`carob_conditioning_rejects`)

Record stems, stones, soil, foreign material, damaged pods, and off-spec pods removed during cleaning, sorting, or grading. Declare whether each stream is reworked, sold as an intended product, returned to the field, sent to feed or another destination, treated as waste, or otherwise exits the boundary.

- Selected flow: Carob conditioning rejects and foreign material (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg as received
- Amount rule: measured output mass by reject class, lot, and destination; reconcile with incoming and accepted or downgraded outputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carob_conditioning_records`

##### Elementary flows

###### Water vapour released from drying (`carob_water_vapour_from_drying`)

Calculate water vapour released from the measured input and output moisture balance when drying occurs within the declared boundary. The receiving medium and final elementary-flow identity remain unresolved until the route and identity review are complete.

- Selected flow: Water vapour to the declared receiving medium (UUID unresolved; receiving medium required)
- Flow property / unit: Mass / kg water
- Amount rule: water vapour = incoming lot water mass - accepted and downgraded output water mass - water retained in declared rejects, with any measured process-water addition included
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conditioning campaign and per 1,000 kg accepted whole carob pods
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carob_conditioning_records`
- Sources: `carob-drying-characteristics-2016`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_intended_pod_output` | a process with one deliberately transferred whole-pod product output | Assign the process burdens to the single intended whole-pod output. Treat field loss, rejects, and residues as waste only when their destination is not a deliberately transferred product. | `iso-14044-2006` |
| `allocation_quality_destination_outputs` | conditioning with accepted and downgraded or alternate-destination whole-pod outputs | First subdivide the route when grade-specific operations are independently measured. If common burdens remain shared, allocate them between deliberately transferred whole-pod outputs using mass allocation because the outputs retain the same whole-pod physical identity; use documented economic allocation only when a product-specific study demonstrates that mass does not represent the causal relationship. Report output masses, grade, destination, reference period, and factors. | `iso-14044-2006` |
| `allocation_rejects_not_products` | field losses, harvest rejects, and conditioning rejects | Do not allocate burdens to a rejected or residue stream merely because it has a possible downstream use. Reclassify it as an intended co-product only when it is deliberately transferred with a declared destination and identity, then apply `allocation_quality_destination_outputs` or a separately justified method. | `iso-14044-2006` |
| `allocation_perennial_establishment_and_replacement` | planting, establishment, replacement, and immature-tree activity | Annualize attributable events over the documented productive period and assign the annualized amount to the crop-year output basis. Retain original event mass, date, block, and assumption for audit. | `fao-feedipedia-carob`; `carob-macronutrients-water-2005`; `iso-14044-2006` |
| `allocation_period_and_phase_linkage` | multiple crop years, bearing phases, and replacement events | Link every input, output, establishment event, replacement event, and allocation factor to a declared crop year or life-cycle phase. Never attribute one event to two reporting periods without an explicit reconciliation. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_carob_orchard_lifecycle_records` | `carob_orchard_production` | planting stock, tree replacement, orchard area, nutrients, soil amendments, crop protection, fuel, electricity, residues, and orchard activities | orchard register, block map, planting or replacement invoices, application logs, supplier records, equipment logs, and residue destination records | block_id; species; cultivar_or_type; tree_age; bearing_area_ha; establishment_year; replacement_event; planting_material_quantity; product_name; product_mass; nutrient_basis; application_date; target; fuel; electricity; residue_mass; residue_destination; crop_year | collect event records by block and reconcile with supplier, operator, and equipment records | mixed activity-specific units | each planting, replacement, application, energy event, and residue event; reconciled each crop year | one declared crop year plus productive-period records for annualization | each managed orchard or cultivated-grove block | sum by block and crop year; retain product and nutrient fields before normalization; link annualized events to the declared output basis | invoices, field logs, orchard register, operator confirmation, and completeness reconciliation |
| `cp_carob_irrigation_records` | `carob_orchard_production` | irrigation water, direct water withdrawal, and pumping energy | meter logs, pump records, electricity bills, water bills, permits, source records, and documented water balances | block_id; source_type; rainfed_flag; meter_start; meter_end; irrigation_date; delivered_volume_m3; withdrawal_volume_m3; pump_kwh; source_quality; crop_year | read meters or reconcile invoices and source records to irrigation events and block area | m3 and kWh | each irrigation event or billing period; reconciled each crop year | one declared crop year and irrigation season | each source and orchard block | sum by source, block, and crop year; prevent double counting delivered supply and direct withdrawal | meter or invoice evidence, permit or source checks, and water-balance reconciliation |
| `cp_carob_harvest_lot_records` | `carob_harvest_and_collection` | harvestable pods, collected raw pods, harvest energy, field loss, and harvest rejects | harvest log, scale ticket, block record, contractor statement, lot record, and destination record | block_id; harvest_date; lot_id; harvest_method; harvestable_mass_kg; collected_mass_kg; field_loss_mass_kg; damaged_mass_kg; destination; fuel_quantity; electricity; crop_year | weigh or reconcile each harvest lot and record the removal and collection method | kg pods and activity-specific energy unit | every harvest lot; reconciled each campaign | one harvest campaign and crop year | each managed block and receiving lot | sum harvestable, collected, lost, and rejected masses by block and lot before normalization | calibrated scale or verified ticket, lot traceability, contractor evidence, destination evidence, and mass-balance check |
| `cp_carob_conditioning_records` | `carob_primary_conditioning` | incoming raw pods, drying, cleaning, sorting, grading, process water, accepted pods, downgraded pods, rejects, and water loss | intake ticket, conditioning batch record, moisture test, energy meter, water meter, grade record, reject record, and destination record | campaign_id; lot_id; input_mass_kg; input_moisture; drying_method; drying_start; drying_end; fuel; electricity; process_water_m3; cleaning_method; grade; accepted_mass_kg; downgraded_mass_kg; reject_mass_kg; reject_class; reject_destination; output_moisture; container_tare; gate | record each conditioning batch and reconcile moisture, mass, grade, energy, water, and destination records | kg, percent, m3, kWh, L, or MJ as recorded | each conditioning batch; reconciled each campaign | one declared conditioning campaign and gate | each batch, lot, and declared receiving facility | sum by lot and grade; preserve incoming and output moisture and tare; calculate water loss only after mass and moisture reconciliation | calibrated scale, moisture method, meter records, buyer or grade specification, destination evidence, and batch balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all crop-year, harvest, and conditioning rows | reference-normalized amount = measured or calculated amount x 1 kg / accepted whole-pod mass in kg; reporting tables may scale this to 1,000 kg by multiplying by 1,000 | accepted_whole_pod_mass_kg; process_amount | amount per 1 kg or per 1,000 kg accepted whole carob pods | `iso-14044-2006` |
| `calc_orchard_life_annualization` | establishment, replacement, and immature-tree inputs | annualized event amount = documented event amount / declared productive-period allocation basis; link the annualized amount to the crop year and accepted output basis | event_amount; productive_period; crop_year_link; accepted_output_mass | annualized perennial input amount | `fao-feedipedia-carob`; `carob-macronutrients-water-2005`; `iso-14044-2006` |
| `calc_moisture_mass_conversion` | harvested, dried, accepted, downgraded, and rejected pod masses | dry matter = as_received_mass x (1 - moisture_fraction); water mass = as_received_mass x moisture_fraction; use only measured or declared moisture for the relevant lot | as_received_mass; moisture_fraction; sampling_method | dry-matter mass and water mass by lot | `carob-drying-characteristics-2016`; `carob-nutritional-characterization-2018` |
| `calc_nutrient_product_to_basis` | fertilizer and soil-amendment inputs | nutrient amount = actual product mass x documented nutrient fraction; retain product name, product mass, nutrient basis, and application event | product_mass; documented_nutrient_fraction; nutrient_basis | product and nutrient-basis amounts | `carob-macronutrients-water-2005` |
| `calc_water_energy_reconciliation` | irrigation, direct withdrawal, pumping, harvest, and conditioning energy | reconcile meters, invoices, contractor records, and equipment calculations by block or batch; do not sum duplicate records for the same activity | meter_records; invoices; source_records; equipment_calculation | reconciled water and energy totals | `carob-macronutrients-water-2005` |
| `calc_soil_emissions` | nutrient-related air, soil, and water elementary outputs | apply the selected geographically applicable method tier to declared nutrient, amendment, residue, soil, climate, and water activity data; disclose tier and factors | nutrient_inputs; amendments; residues; soil_parameters; climate_parameters; water_records | method-calculated emission amounts | `ipcc-2019-refinement-vol-4` |
| `calc_conditioning_mass_balance` | harvest and primary conditioning outputs | residual_mass = input_mass - accepted_mass - downgraded_mass - declared reject_mass - other evidenced destination masses; residuals may not be silently assigned to accepted product | input_mass; output_masses; reject_masses; destination_masses | reconciled losses and residuals | `iso-14044-2006` |
| `calc_shared_grade_allocation` | shared conditioning burdens with two or more intended whole-pod outputs | mass allocation factor for grade i = grade i accepted mass / sum of deliberately transferred whole-pod output masses, unless a documented physical subdivision or justified economic method applies | grade_output_masses; method_decision | grade-specific allocated burdens and factors | `iso-14044-2006` |
| `calc_drying_water_vapour` | drying within primary conditioning | water vapour = incoming water mass - accepted output water mass - downgraded output water mass - reject water mass + measured process-water addition, with negative results investigated rather than clipped | incoming_mass; incoming_moisture; output_masses; output_moistures; process_water | water-vapour amount to declared receiving medium | `carob-drying-characteristics-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_qualifiers` | reference flow, product outputs, planting stock, nutrient products, crop protection, and elementary outputs | Declare species, cultivar or type, managed production status, geography, gate, product state, seed-retention status, and identity evidence. Resolve all emitted identities before final TIDAS publication. | dataset metadata, lot records, product documents, and identity review |
| `dq_period_and_phase_linkage` | perennial orchard production | Link crop year, orchard age, bearing phase, establishment, replacement, and termination or abandonment events to the output period; unresolved attribution prevents finalization. | orchard register, block history, productive-period assumption, and annualization worksheet |
| `dq_mass_reconciliation` | harvest and primary conditioning | Harvestable, collected, accepted, downgraded, rejected, field-loss, and water-loss masses must reconcile within documented measurement uncertainty. | scale tickets, moisture tests, batch records, destination records, and reconciliation worksheet |
| `dq_nutrient_basis_traceability` | fertilizer and soil-amendment inputs and related emissions | Reconcile actual product, product mass, declared nutrient or amendment basis, application event, and emission method inputs. Missing product evidence cannot be replaced by a generic default. | supplier label or specification, invoice, application log, and calculation sheet |
| `dq_activity_completeness` | orchard, harvest, and conditioning activities | Cover every declared block, harvest lot, and conditioning batch. A rainfed, manual, or no-water condition must be recorded as a justified zero with route evidence. | block register, operator confirmation, meter or invoice records, and campaign reconciliation |
| `dq_moisture_and_quality` | accepted and downgraded whole-pod outputs | Report measurement method, sample point, moisture convention, grade or destination, seed-retention status, and buyer or local specification. Values outside the screening range require explanation, not automatic rejection. | moisture test, grade specification, lot record, and QA review |
| `dq_flow_set_and_uuid_resolution` | all parameterized or unresolved identity rows | Before final process publication, resolve parameterized Flow Set rows and unmapped identities to compatible concrete flow, property, unit-group, direction, flow-type, geography, and provider or use evidence. | identity resolution record, Flow Set group decision, and final process review |
| `dq_boundary_and_fate_disclosure` | complete foreground dataset | Disclose the declared gate, excluded downstream processing, wild-collection exclusion, conditioning route, reject and residue fate, packaging status, and any route extension. | boundary declaration, process notes, destination records, and downstream-use statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity_and_state` | reference flow and terminal product output | Confirm that the terminal output is a whole ripe carob pod with pulp and seeds retained, expressed as net kg at the declared gate. A separated seed, pulp, gum, flour, or processed product must fail this PCR identity check. | `fao-feedipedia-carob`; `carob-drying-characteristics-2016` |
| `validation_process_and_module_coverage` | process map and inventory | Confirm that managed production, independent harvest and collection, and the applicable primary-conditioning node are represented. Check the selected grading and multi-output obligations for incoming state, every intended output hand-off, and explicit reject or waste states. | `fao-feedipedia-carob`; `fao-carob-nwfp-chapter7` |
| `validation_period_and_phase_linkage` | perennial production and allocation | Confirm that every establishment, replacement, crop-year, bearing phase, output, and allocation event has a declared period or phase and cannot be attributed twice. | `iso-14044-2006` |
| `validation_harvest_and_conditioning_mass_balance` | harvest and primary conditioning | Confirm reconciliation of harvestable, collected, accepted, downgraded, rejected, field-loss, other destination, and moisture-loss masses. Unexplained residuals block finalization. | `iso-14044-2006` |
| `validation_quality_output_attribution` | grading and sorting outputs | Confirm every deliberately transferred grade or destination output has a hand-off, output mass, quality or destination descriptor, and an explicit allocation decision. Rejected material cannot be counted as accepted output. | `iso-14044-2006` |
| `validation_nutrient_emission_linkage` | nutrient inputs and elementary emissions | Confirm that nutrient-related emissions link to actual product and amendment records, residue and soil data, the selected method tier, and the declared receiving medium. | `ipcc-2019-refinement-vol-4` |
| `validation_flow_set_resolution` | parameterized and unmapped inventory rows | Before final TIDAS process publication, resolve each parameterized Flow Set row or unmapped identity to a compatible concrete UUID with property, unit, direction, flow type, geography, and intended-use evidence. |  |
| `validation_boundary_exclusions` | complete foreground dataset | Reject or flag datasets that include kibbling, milling, seed separation, gum, flour, roasting, syrup, downstream storage, transport after the gate, unmanaged wild collection, or packaging end-of-life unless an explicitly reviewed boundary extension is recorded. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | foreground managed-carob orchard, harvest, collection, and first-conditioning process data for downstream process and lifecyclemodel projections |
| allowed_use | modelling whole ripe carob pods with seeds retained at the declared producing or first-conditioning gate when identity, period linkage, mass balance, moisture, grade, and route records are complete |
| excluded_use | modelling unmanaged wild collection, separated seeds or pulp, locust bean gum, flour, powder, syrup, roasting, downstream storage or transport, consumer use, or another fruit category; unresolved identity rows are not final TIDAS exchanges |
| required_metadata | PCR id and lifecycle state; CPC reference; species and cultivar or type; managed orchard or cultivated-grove status; geography; orchard age and area; productive-period basis; crop year; irrigation and nutrient basis; harvest method; raw, accepted, downgraded, rejected, and loss masses; moisture convention; grade and destination; conditioning inclusion; seed-retention status; declared gate |
| required_quality_disclosure | temporal and site coverage; block, lot, and batch aggregation; measurement and calculation methods; missing-data and justified-zero treatment; moisture sampling; parameterized Flow Set decisions; identity evidence gaps; allocation factors; reject and residue fate; and boundary extensions |
| update_trigger | change in product state, cultivar or route, orchard age or productive-period assumption, irrigation or nutrient practice, harvest technology, conditioning technology, grade or destination, Flow Set version, emission method, identity evidence, or applicable product-quality specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-feedipedia-carob` | official_guidance | FAO Feedipedia, “Carob (Ceratonia siliqua)”, https://feedipedia.review.fao.org/node/320 | whole-pod terminology, perennial production context, harvest, air-drying, dry-matter indication, yield screening evidence, and separation of pulp and seeds |
| `fao-carob-nwfp-chapter7` | official_guidance | FAO, Non-Wood Forest Products for Rural Development, Chapter 7, https://www.fao.org/4/Y4351E/y4351e0b.htm | managed and wild route context, harvest context, crop timing, and primary kibbling boundary evidence |
| `carob-drying-characteristics-2016` | literature | Benković et al., “Assessment of Drying Characteristics and Texture in Relation with Micromorphological Traits of Carob Pods and Seeds”, Food Technology and Biotechnology 54(4), 432–440, DOI: 10.17113/ftb.54.04.16.4475 | whole-pod drying behavior, moisture-basis calculation, and primary drying evidence |
| `carob-macronutrients-water-2005` | literature | Correia et al., “The use of macronutrients and water in marginal Mediterranean areas: the case of carob-tree”, Field Crops Research 91(1), 1–6, DOI: 10.1016/j.fcr.2004.05.004 | carob water and nutrient management context and site-specific irrigation or nutrient collection |
| `carob-nutritional-characterization-2018` | literature | Papaefstathiou et al., “Nutritional characterization of carobs and traditional carob products”, Food Science & Nutrition 6, 2151–2161, DOI: 10.1002/fsn3.776 | pod moisture and product-state characterization supporting QA screening |
| `ipcc-2019-refinement-vol-4` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4: Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | selection and disclosure of nutrient-, residue-, soil-, and climate-related emission calculation methods |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | boundary, normalization, allocation, mass reconciliation, and data-quality method rules |
