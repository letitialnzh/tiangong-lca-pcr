---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.almonds-in-shell
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Almonds, in shell

## 1. Scope and Applicability

This PCR guides a foreground data package for almonds produced in managed perennial orchards and transferred as accepted in-shell almonds at the declared farm, huller, or first-conditioning gate. It covers orchard establishment and replacement, immature and productive orchard management, harvest and collection, hulling, drying where used, cleaning, grading, and the optional bulk or packaged hand-off included in the declared gate.

It applies to conventional, integrated, organic, rain-fed, and irrigated routes when the route, cultivar group, geography, orchard age, and gate are disclosed. It excludes nursery production, almond shelling, kernel processing, roasting, blanching, almond oil, flour, beverages, confectionery, retail, consumer use, off-gate transport and storage, and packaging end-of-life. Hulling is included because the reference product is the nut with the shell but without the outer hull; shelling is excluded because it produces the separate shelled-almond category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.almonds-in-shell` |
| classification_refs | CPC 3.0 `01371`, Almonds, in shell |
| covered_products | Whole or graded almonds with the shell retained, transferred at the declared orchard, huller, or first-conditioning gate |
| excluded_products | Almond kernels or shelled almonds; roasted, blanched, salted, milled, oiled, beverage, confectionery, and other processed almond products; nursery material and downstream logistics |
| representative_product | Accepted, cleaned, dried as required, and graded almonds in shell at the declared gate |
| production_route | Perennial almond-orchard establishment and management, harvest and collection, hulling, drying, cleaning, grading, and declared hand-off |
| market_state | In-shell almonds with cultivar or cultivar group, shell type, size or grade, moisture convention, quality status, geography, crop year, and gate declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted almonds in shell at the declared gate |
| How much | 1,000 kg net accepted almonds in shell |
| How well | Cultivar or cultivar group; hard, semi-soft, soft, or paper shell type; size or grade; kernel and shell quality; moisture basis; accepted and rejected mass; crop year; geography; and gate |
| How long or cycle | One declared crop year within the orchard productive life; establishment, immature years, replacements, and removal are allocated over the declared orchard-life basis |
| reference_flow_link | Accepted output from `almond_hulling_drying_and_grading` at the declared gate |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Almonds, in shell `774866bc-5c13-4def-a264-05a61a532a3e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or cultivar group; shell type; production country, region, and climate; orchard age and productive status; crop year or averaging period; orchard area; irrigation status and water source; harvest and hulling status; size or grade; moisture basis; accepted and rejected mass; almond-hull fate; gate; packaging state |
| Binding | `fixed` |

The required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Net product mass excludes container tare. A shelled-kernel output must not be used as the reference product for this PCR.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` | kg | Express the reference as net accepted almonds in shell at the declared gate and exclude container tare. |
| `yield_and_output_basis` | orchard yield and hulling outputs | Mass and area | kg and ha | Record harvested crop, accepted in-shell almonds, almond hulls, rejects, and measured losses for the same orchard-year or declared aggregation period before normalization. |
| `moisture_basis` | harvested, dried, stored, and accepted almonds | Mass and moisture fraction | kg and declared fraction | Preserve as-received mass and moisture. Convert only with measured moisture and a transparent dry-matter or water-mass equation. |
| `shell_and_kernel_quality` | accepted in-shell almonds | declared quality properties | declared unit | Retain shell type, size or grade, shell defects, kernel defect basis, foreign material, and well-dried status as attributes; do not substitute a universal grade default. |
| `orchard_life_allocation_basis` | establishment, replacement, and immature-orchard inputs | area, time, or mass activity property | ha, orchard-year, or kg product | Allocate perennial establishment and replacement inputs over the declared orchard life and accepted in-shell output basis; disclose non-bearing years and replacement events. |
| `nutrient_product_and_n_basis` | nutrient and soil-amendment inputs | product and nutrient mass | kg product and kg N, P2O5, or K2O | Record formulated product mass and documented nutrient content separately. Nitrogen emission calculations use declared kg N. |
| `water_basis` | irrigation and withdrawal | volume or mass | m3 or kg | Distinguish delivered irrigation water, natural-resource withdrawal, drainage or consumption indicators, and water quality evidence. |
| `energy_inventory` | orchard, harvest, drying, and grading | mass, volume, or energy | kg, L, MJ, or kWh | Preserve carrier, unit, operation, equipment, period, and conversion basis. |
| `packaging_quantity` | optional gate packaging | mass or item count | kg, g, or item | Record packaging material mass or item count with package capacity and lot assignment when packaging is inside the declared gate. |

## 5. System Boundary

The foreground boundary runs from the declared orchard starting condition through orchard management, harvest and collection, hulling, drying where used, cleaning, grading, and the declared hand-off of accepted almonds in shell. Upstream production of planting material, fertilizers, crop-protection products, supplied water, energy carriers, machinery services, and packaging uses representative background datasets. Shelling, kernel processing, roasting, retail packaging, off-gate transport, storage, and use are outside the default boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | orchard site before or at establishment, with planting material and purchased management inputs crossing the foreground boundary; prior land use and existing orchard history are disclosed |
| starting_condition_role | start of managed perennial almond production and orchard asset accounting |
| product_classification_scope | CPC 3.0 `01371`, Almonds, in shell; shelled almonds and processed almond products are outside this PCR |
| recursive_input_rule | Same-category planting material or retained almonds crossing the boundary are recorded as upstream inputs and are not recursively expanded into another in-shell product output. Internal hand-offs between orchard, harvest, and hulling remain process links and are not additional market outputs. |
| upstream_dataset_requirement | Use representative upstream datasets for nursery trees, nutrient products, crop protection, irrigation supply, fuel, electricity, drying energy, packaging, machinery services, and waste treatment when these inputs cross the boundary. |
| disclosure | cultivar and shell type; orchard block and site; establishment year, orchard age, productive life, and replacements; land history; soil and climate; irrigation source and quality; nutrient and crop-protection records; harvest timing and mass; hulling, drying, grading, accepted output, hulls, rejects, losses, fate, and gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_to_accepted_in_shell` | all conforming datasets | Include establishment, immature years, productive orchard management, harvest, collection, hulling, drying where used, cleaning, grading, and the declared accepted in-shell hand-off. | `fao-crop-production-methodology`; `usda-almonds-in-shell-grade-2013` |
| `boundary_perennial_orchard_disclosure` | establishment and replacement | Allocate establishment, immature years, replacement trees, and removal over the declared orchard-life and accepted-output basis; disclose the life, non-bearing years, and replacement events. | `iso-14067`; `fao-crop-production-methodology` |
| `boundary_hulling_not_shelling` | hulling and downstream processing | Include removal of the outer hull and preparation of the retained-shell nut. Exclude shelling, kernel separation, kernel processing, and shelling co-products because they belong to a downstream shelled-almond route. | `usda-almond-commercial-storage`; `usda-almonds-in-shell-grade-2013` |
| `boundary_input_completeness` | orchard and conditioning | Provide a collected value, justified zero, or documented exclusion for planting material, nutrients, irrigation, crop protection, land, fuel, electricity, drying, hulling, grading, packaging, direct emissions, and waste treatment when in scope. | `almond-board-irrigation-continuum`; `ipcc-2019-managed-soils-n2o` |
| `boundary_quality_and_fate` | all outputs | Separate accepted in-shell almonds, almond hulls, downgraded or rejected almonds, foreign material, dust, and unexplained loss by measured mass and declared fate. | `usda-almonds-in-shell-grade-2013`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `almond_orchard_establishment_and_management` | Almond orchard establishment and management | required |  | foreground | orchard-year inputs and accepted output basis |
| `almond_harvest_and_collection` | Almond harvest and collection | required |  | foreground | harvested almond crop before hulling |
| `almond_hulling_drying_and_grading` | Almond hulling, drying, and grading | required | include the operations needed to produce accepted almonds in shell at the declared gate | foreground | 1,000 kg accepted almonds in shell |

### Process: Almond Orchard Establishment and Management (`almond_orchard_establishment_and_management`)

#### Inputs

##### Product flows

###### Orchard planting material and support inputs (`orchard_planting_material`)

Record nursery trees, grafted planting material, support materials, and attributable irrigation-system materials crossing the orchard boundary. Retained orchard assets and replacements are linked to the declared orchard life.

- Selected flow: almond nursery trees and orchard support materials
- Flow property / unit: declared property / item, kg, or unit
- Amount rule: measured quantity by orchard block and establishment or replacement event, annualized over accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_almond_orchard_lifecycle_records`
- Sources: `fao-crop-production-methodology`; `iso-14067`

###### Agricultural nutrient and fertilizer inputs (`almond_orchard_establishment_and_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_orchard_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `almond-board-water-quality`

###### Irrigation water supplied (`orchard_irrigation_water`)

Record delivered irrigation by source and orchard block. A verified rain-fed route records a justified zero with supporting evidence.

- Selected flow: Irrigation water supplied to the orchard
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or evidenced delivered irrigation by source, block, and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_irrigation_records`
- Sources: `almond-board-irrigation-continuum`; `almond-board-water-quality`

###### Orchard fuel and electricity (`orchard_energy_input`)

Record energy for pumping, nutrient application, mowing, pruning, orchard-floor management, and other field operations. Keep fuel separate from electricity.

- Selected flow: Energy supply for orchard operations; expand the foreground records into electricity and mobile-machinery fuel exchanges
- Flow property / unit: Mass or energy / kg, L, MJ, or kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Group selection: deferred until foreground records identify electricity or mobile-machinery fuel
- Amount rule: measured or supplier-recorded energy by operation and orchard block
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_energy_records`
- Sources: `fao-crop-production-methodology`

###### Crop-protection products (`orchard_crop_protection`)

Record named formulations and active ingredients used for insects, diseases, weeds, or hull-split protection.

- Selected flow: named crop-protection product or active substance
- Flow property / unit: Mass / kg product or active substance
- Amount rule: measured application by product, active ingredient, date, and block
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_orchard_input_records`
- Sources: `ucipm-almond-hull-split`

##### Waste flows

###### Orchard pruning and replacement residues (`orchard_residue_output`)

Record pruning, removed-tree, and replacement residues by mass, moisture, block, period, and destination. Do not treat all residue as a co-product without an evidenced hand-off.

- Selected flow: almond orchard biomass residue
- Flow property / unit: Mass / kg dry matter or as received
- Amount rule: weighed or transparently estimated residue by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_orchard_lifecycle_records`
- Sources: `mass-balance-identity`

##### Elementary flows

###### Orchard land occupation (`orchard_land_occupation`)

Record planted area and orchard occupation for each block and crop year. Land transformation is separate and is not inferred from occupation.

- Selected flow: Agricultural land occupation for the almond orchard
- Flow property / unit: Area-time / ha·orchard year
- Amount rule: block area multiplied by declared occupation period and allocated to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_almond_orchard_lifecycle_records`
- Sources: `fao-crop-production-methodology`

#### Outputs

##### Product flows

###### Managed almond orchard production hand-off (`managed_almond_orchard_output`)

Pass the orchard-year production context to harvest as an internal process link. It is not an additional market product.

- Selected flow: managed almond orchard production output
- Flow property / unit: Mass / kg harvested crop basis
- Amount rule: declared orchard-year production basis linked to the harvest record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: orchard-year hand-off
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_almond_harvest_records`
- Sources: `mass-balance-identity`

##### Waste flows

Record only orchard material leaving the declared boundary as waste or unmanaged residue. Productive crop remains an internal hand-off until harvest.

##### Elementary flows

###### Nutrient-related field emissions (`orchard_field_emissions`)

Calculate direct and indirect nutrient- and residue-related emissions from the same activity records and method tier used for nutrient accounting.

- Selected flow: Nutrient- and residue-related elementary emissions to air, water, or soil; expand by reported pollutant and receiving medium during foreground-data generation
- Flow property / unit: Mass / kg substance
- Group selection: deferred until foreground records identify the pollutant and receiving medium
- Amount rule: selected geographically applicable method applied to collected nutrient and residue records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_almond_orchard_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`

### Process: Almond Harvest and Collection (`almond_harvest_and_collection`)

#### Inputs

##### Product flows

###### Managed orchard production entering harvest (`managed_orchard_output_input`)

Receive the orchard-year production context and link it to the collected crop. Do not duplicate orchard inputs at the harvest node.

- Selected flow: managed almond orchard production output
- Flow property / unit: Mass / kg harvested crop basis
- Amount rule: linked orchard-year harvested volume before hulling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: harvest process output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_almond_harvest_records`
- Sources: `mass-balance-identity`

###### Harvest and collection energy (`harvest_energy_input`)

Record tree shaking, sweeping, pickup, field transport, and loading energy or contracted services not already included in orchard management.

- Selected flow: Harvest mobile-machinery fuel
- Flow property / unit: Mass, energy, or service unit / kg, L, MJ, kWh, or declared service unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: measured or supplier-recorded harvest activity by block and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested almond crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_harvest_records`
- Sources: `ucipm-almond-hull-split`

###### Contracted harvest service (`harvest_contracted_service`)

Record a contracted harvesting service when it crosses the boundary and is not represented by foreground fuel or electricity records. This service remains unmapped until a compatible service identity is evidenced; do not force it into an energy group.

- Selected flow: contracted harvest service
- Flow property / unit: Declared service unit / service unit
- Amount rule: supplier-recorded service quantity by block and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested almond crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_harvest_records`
- Sources: `mass-balance-identity`

##### Waste flows

###### Field harvest losses and orchard-floor residues (`harvest_loss_output`)

Record nuts left in the orchard, damaged crop, and other harvest losses by measured or justified estimate and destination.

- Selected flow: almond harvest loss or orchard-floor residue
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled loss by block and harvest pass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested almond crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_harvest_records`
- Sources: `ucipm-almond-hull-split`; `mass-balance-identity`

#### Outputs

##### Product flows

###### Harvested almond crop before hulling (`harvested_almond_crop`)

Record the crop received for hulling with harvest date, moisture, outer-hull condition, orchard block, and mass. This is an intermediate state, not the accepted reference product.

- Selected flow: harvested almonds with hull before hulling
- Flow property / unit: Mass / kg as received
- Amount rule: calibrated weighing at harvest or receiving point, with moisture and hull condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: harvest process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_harvest_records`
- Sources: `usda-almond-commercial-storage`; `mass-balance-identity`

##### Waste flows

Record harvest material discarded before hulling separately from crop sent to the conditioning node.

##### Elementary flows

Record direct harvest emissions only when they occur within the declared boundary and are not already represented by an energy or service dataset.

### Process: Almond Hulling, Drying, and Grading (`almond_hulling_drying_and_grading`)

#### Inputs

##### Product flows

###### Harvested almond crop entering hulling (`conditioning_almond_input`)

Receive the harvested crop and record incoming mass, moisture, hull condition, receiving date, and source blocks.

- Selected flow: harvested almonds with hull before hulling
- Flow property / unit: Mass / kg as received
- Amount rule: receiving-scale mass reconciled to harvest tickets
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_conditioning_records`
- Sources: `usda-almond-commercial-storage`; `mass-balance-identity`

###### Conditioning energy and water (`conditioning_energy_and_water`)

Record electricity, fuel, and any process water used for hulling, conveying, drying, cleaning, and grading. Drying is recorded only when it occurs in the declared route.

- Selected flow: Conditioning energy supply; expand the foreground records into electricity or stationary-combustion fuel exchanges
- Flow property / unit: Energy or mass / kWh, MJ, L, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Group selection: deferred until foreground records identify electricity or stationary-combustion fuel
- Amount rule: meter, fuel, or supplier record by campaign and product throughput
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_conditioning_records`
- Sources: `usda-almond-commercial-storage`

###### Conditioning process water (`conditioning_process_water`)

Record process water used for washing, cooling, or other conditioning operations when it occurs in the declared route.

- Selected flow: Process water supplied to almond conditioning
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: metered or supplier-recorded process water by campaign and product throughput
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_conditioning_records`
- Sources: `usda-almond-commercial-storage`

##### Waste flows

Record recovered or reused hull-derived material only when it enters the node from another declared process as a separately identified input. Ordinary hull output is recorded below as a co-product.

##### Elementary flows

Record conditioning emissions, wastewater, dust, or other elementary flows only when supported by site records and an identity-verified flow.

#### Outputs

##### Product flows

###### Accepted almonds in shell (`accepted_almonds_in_shell`)

Record accepted, cleaned, dried as required, and graded in-shell almonds. The shell remains attached to the kernel; this node does not shell the almond.

- Selected flow: Almonds, in shell `774866bc-5c13-4def-a264-05a61a532a3e`
- Flow property / unit: Mass / kg
- Amount rule: calibrated net accepted mass after hulling, drying, cleaning, and grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_conditioning_records`
- Sources: `usda-almonds-in-shell-grade-2013`
- Range: Reference output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: quantitative reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Almond hull co-product (`almond_hull_co_product`)

Record almond hulls as an intended co-product only when they cross the boundary with a documented hand-off or use. If discarded, use a waste identity and fate instead.

- Selected flow: Almond hulls `5f0a0004-6949-4658-ad23-3d0088c89c4d`
- Flow property / unit: Mass / kg as received or dry matter
- Amount rule: measured hull mass by campaign and source block, with moisture and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_conditioning_records`
- Sources: `mass-balance-identity`

##### Waste flows

###### Hulling and grading rejects (`hulling_and_grading_rejects`)

Record empty shells, broken or defective nuts, foreign material, dust, and rejected almonds by material and destination. Do not merge these with the marketed hull co-product.

- Selected flow: almond hulling or grading reject
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted almonds in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_almond_conditioning_records`
- Sources: `usda-almonds-in-shell-grade-2013`; `mass-balance-identity`

##### Elementary flows

Record dust, wastewater, and direct conditioning emissions only when the route and identity are documented. Do not infer an emission from a generic hulling operation.

## 7. Allocation and Co-product Handling

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | orchard, harvest, and conditioning | First avoid allocation by subdividing orchard blocks, harvest passes, hulling campaigns, grades, and destinations when records permit. | `iso-14044-2006` |
| `allocation_perennial_time` | establishment, immature years, replacements, and removal | Allocate perennial-orchard burdens over the declared orchard life and accepted in-shell output using the declared area, period, and yield basis. Disclose non-bearing years and replacement events. | `iso-14067`; `fao-crop-production-methodology` |
| `allocation_hull_co_product` | accepted in-shell almonds and marketed almond hulls | When hulls are an intended output with a documented hand-off, use mass allocation after subdivision. Economic allocation requires representative prices and a mass-allocation sensitivity. If hulls are waste, retain treatment burdens with the almond route and assign no product credit. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_rejects_and_losses` | rejects, broken nuts, dust, and field losses | Assign collection and treatment burdens to the producing process; do not count rejected or lost material as accepted output. Model recovery as a co-product only after its destination and hand-off are evidenced. | `usda-almonds-in-shell-grade-2013`; `iso-14044-2006` |
| `allocation_no_double_counting_internal_links` | orchard, harvest, and hulling links | Internal hand-offs transfer mass balance only. They are not additional market products and must not duplicate upstream burdens. | `iso-14044-2006` |

The PCR-specific default is subdivision followed by mass allocation for a documented almond-hull co-product. The dataset must state whether hulls are sold, fed, composted, burned, land-applied, or discarded, and disclose sensitivity to the allocation choice.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_almond_orchard_lifecycle_records` | `almond_orchard_establishment_and_management` | establishment, replacement, removal, and land | orchard asset and land record | block; area; cultivar; planting year; orchard age; productive life; trees; supports; irrigation assets; prior land use; replacement; removal; fate | GIS, asset register, invoices, field records | ha, item, kg, year | establishment, replacement, and annual update | declared orchard life and crop year | each orchard block | annualize attributable inputs over accepted output | maps, invoices, asset register, replacement records |
| `cp_almond_orchard_input_records` | `almond_orchard_establishment_and_management` | nutrients, crop protection, and field emissions | purchase and application record | product; formulation; nutrient or active ingredient; mass; date; block; purpose; method | invoice, label, application log, agronomist record | kg product, kg nutrient, kg active ingredient | each application | complete crop year | each orchard block | sum by product and nutrient or active ingredient | invoice, label, application log |
| `cp_almond_irrigation_records` | `almond_orchard_establishment_and_management` | irrigation and withdrawal | meter and pumping record | source; meter; reading; volume; pumping energy; date; block; rain-fed flag; water quality | calibrated meter, pump log, invoice, water analysis | m3, kg, kWh, MJ | event or month | irrigation season and crop year | block and water source | sum by source and normalize to accepted output | meter calibration, readings, invoice, water analysis |
| `cp_almond_energy_records` | `almond_orchard_establishment_and_management` | orchard and harvest energy | fuel, electricity, and contractor record | operation; machine; carrier; amount; date; block; service provider | fuel log, telematics, meter, invoice | L, kg, kWh, MJ, service unit | operation or billing interval | complete crop year | orchard block and contractor | allocate by operation and normalize to accepted output | invoice, meter, equipment log |
| `cp_almond_harvest_records` | `almond_harvest_and_collection` | harvested crop and losses | harvest ticket and receiving record | block; cultivar; harvest pass; date; gross mass; moisture; hull condition; rejected mass; loss; destination | calibrated scale and harvest log | kg and moisture fraction | each harvest pass | full crop year | each block and receiving point | reconcile harvested crop, losses, and receiving mass | scale calibration, tickets, moisture record |
| `cp_almond_conditioning_records` | `almond_hulling_drying_and_grading` | accepted output, hulls, rejects, energy, water, and packaging | campaign, batch, and grade record | input mass; moisture; hulling date; drying energy; water; grade; accepted mass; hull mass; reject mass; fate; package | receiving scale, batch sheet, meters, grade record, dispatch record | kg, moisture fraction, kWh, MJ, m3, item | batch or campaign | crop year and declared gate period | huller or conditioning facility | reconcile input to accepted, hull, reject, and loss outputs | calibrated scales, meter records, grade certificates, dispatch and fate records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_accepted_yield` | orchard and reference product | accepted in-shell mass / represented orchard area, with accepted fraction reported separately | `cp_almond_harvest_records`; `cp_almond_conditioning_records` | kg accepted almonds/ha and accepted fraction | `mass-balance-identity` |
| `annualize_almond_orchard_life` | establishment and replacement inputs | attributable lifecycle input / declared lifetime accepted in-shell output using age-specific records or a documented yield curve | `cp_almond_orchard_lifecycle_records`; `cp_almond_harvest_records` | annualized input per kg reference product | `iso-14067`; `fao-crop-production-methodology` |
| `calculate_irrigation_and_withdrawal` | irrigation | source-specific delivered irrigation and withdrawal / accepted output; report consumption or footprint separately | `cp_almond_irrigation_records`; `cp_almond_harvest_records` | m3/kg reference product and source-specific withdrawal | `almond-board-irrigation-continuum`; `almond-board-water-quality` |
| `calculate_direct_soil_emissions` | nutrient and residue emissions | apply the selected IPCC method tier to declared nutrient and residue records and convert N2O-N to N2O by 44/28 where applicable | `cp_almond_orchard_input_records`; declared factors | kg emissions/kg reference product | `ipcc-2019-managed-soils-n2o` |
| `reconcile_almond_outputs` | harvest and conditioning | accepted in-shell almonds + marketed hulls + rejects + measured losses = declared conditioning inputs within the stated tolerance | `cp_almond_harvest_records`; `cp_almond_conditioning_records` | mass balance and unexplained residual | `mass-balance-identity` |
| `allocate_hull_co_product` | marketed hulls | apply subdivision and mass allocation only after the hull output and destination are evidenced | `cp_almond_conditioning_records` | allocated burdens for accepted almonds and hulls | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference and outputs | Declare the verified reference flow UUID, cultivar, shell type, geography, orchard block or contributing sites, crop year, gate, moisture, grade, and packaging state. | dataset metadata, orchard and grade records |
| `dq_temporal_representativeness` | perennial production | Cover a complete crop year and disclose orchard age, productive status, establishment, replacements, and reporting period. Use a documented multi-year average when claiming multi-year representativeness. | dated orchard, harvest, and asset records |
| `dq_site_aggregation` | multiple blocks or sites | Identify every contributing block or facility, link its inputs and outputs to the common boundary, disclose weights and representativeness, and prevent double counting. | site register, block records, aggregation workbook |
| `dq_mass_balance` | harvest and conditioning | Reconcile received crop, accepted almonds, hulls, rejects, and losses; retain tare, moisture basis, scale calibration, and residual explanation. | scale records, moisture tests, batch and fate records |
| `dq_input_completeness` | orchard and conditioning | Quantify or justify zero or exclusion for planting material, nutrients, irrigation, crop protection, fuel, electricity, drying, hulling, grading, packaging, direct emissions, and waste treatment when in scope. | ledgers, labels, meters, invoices, logs |
| `dq_quality_attributes` | accepted in-shell output | Retain shell type, size or grade, moisture, kernel defect basis, foreign material, and well-dried or equivalent quality evidence. | grade certificate, inspection, moisture and lot records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm one 1,000 kg reference flow uses `774866bc-5c13-4def-a264-05a61a532a3e`, Mass, kg, and all required qualifiers. | `usda-almonds-in-shell-grade-2013` |
| `validation_scope_and_handoff` | process map | Confirm orchard management, independent harvest and collection, hulling, drying where used, cleaning, grading, and the declared gate are represented without shelling or kernel processing. | `usda-almond-commercial-storage`; `usda-almonds-in-shell-grade-2013` |
| `validation_perennial_periods` | orchard lifecycle | Confirm establishment, immature years, productive years, replacement events, termination or removal, and annualization are declared and not double counted. | `iso-14067`; `fao-crop-production-methodology` |
| `validation_site_aggregation` | multiple sites or blocks | Confirm every contributing block has a boundary, evidence link, weight, and representativeness decision; reject an aggregate with omitted or duplicated contributors. | `mass-balance-identity` |
| `validation_outputs_and_attribution` | accepted almonds and hulls | Confirm intended outputs and hand-offs are complete, marketed hulls use the declared allocation rule, and hulls or rejects are not counted at two hand-offs. | `iso-14044-2006`; `mass-balance-identity` |
| `validation_mass_balance` | harvest and conditioning | Confirm accepted almonds, hulls, rejects, and losses reconcile to declared input mass within the stated tolerance and every non-reference output has a fate. | `usda-almonds-in-shell-grade-2013`; `mass-balance-identity` |
| `validation_nitrogen_and_water` | nutrient, emissions, and water | Confirm product mass differs from nutrient mass, emission factors and units are declared, and delivered irrigation is not confused with natural withdrawal or consumption. | `ipcc-2019-managed-soils-n2o`; `almond-board-water-quality` |
| `validation_quality_attributes` | accepted output | Confirm shell type, size or grade, moisture, defect basis, foreign material, and well-dried or equivalent quality evidence are present. | `usda-almonds-in-shell-grade-2013` |
| `validation_completeness` | data package | Confirm each required input and output category has a value, justified zero, or documented exclusion, and unresolved identity findings are visible. | `fao-crop-production-methodology`; `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Farm- or huller-gate in-shell almond supply matching the declared cultivar or shell type, geography, orchard-age profile, crop year or averaging period, conditioning route, grade, moisture, and gate |
| excluded_use | Shelled almonds; kernels; roasted, blanched, salted, milled, oiled, beverage, confectionery, or other processed almond products; nursery production; shelling; retail and consumer use |
| required_metadata | verified reference flow and property/unit identities; contributing orchards and facilities; cultivar and shell type; geography; orchard age and life; irrigation; nutrient and crop-protection basis; harvest and hulling records; accepted, hull, reject, and loss basis; moisture; grade; gate; Flow Set selections and final UUID resolution; allocation; protocol coverage |
| required_quality_disclosure | crop years; primary-record coverage; site aggregation and weights; mass-balance tolerance; scale and meter calibration; water source; factors; hull destination; exclusions; uncertainty and sensitivity |
| update_trigger | material change in cultivar or shell type, orchard route, irrigation source, age model, yield, hulling or drying technology, grade basis, hull destination, gate, background datasets, emission method, or representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-almonds-in-shell-grade-2013` | official_guidance | USDA AMS, United States Standards for Grades of Almonds in the Shell, <https://www.ams.usda.gov/sites/default/files/media/Almonds_in_the_Shell_Standard%5B1%5D.pdf> | in-shell identity, shell type, grade, defects, foreign material, and quality attributes |
| `usda-almond-commercial-storage` | handbook | USDA ARS, Commercial Storage — Almond section, <https://www.ars.usda.gov/is/np/CommercialStorage/CommercialStorage.pdf> | hull separation, drying and storage state, and distinction between hull, shell, and kernel |
| `almond-board-irrigation-continuum` | extension_guidance | Almond Board of California, Almond Irrigation Improvement Continuum, <https://www.almonds.com/sites/default/files/2020-02/Almond-Irrigation-Improvement-Continuum.pdf> | irrigation scheduling, applied water, and system performance |
| `almond-board-water-quality` | extension_guidance | Almond Board of California, Orchard Water Supply and Quality, <https://www.almonds.org/almond-industry/orchard-management/water-and-irrigation/water-supply-and-quality> | water source, salinity, nitrate, leaching, and runoff disclosure |
| `ucipm-almond-hull-split` | official_guidance | UC IPM, Almond Pest Management Guidelines: Identify Hull Split, <https://ipm.ucanr.edu/agriculture/almond/identify-hull-split/> | harvest timing, hull split, harvest passes, and pest exposure |
| `fao-crop-production-methodology` | official_guidance | FAO crop production and farm data collection guidance | orchard process completeness and production boundary |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil N2O calculation |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Requirements and guidelines | allocation hierarchy, subdivision, and co-product treatment |
| `iso-14067` | standard | ISO 14067, Greenhouse gases — Carbon footprint of products | perennial-life allocation and product-footprint disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity | output reconciliation, site aggregation, and no-double-counting checks |
