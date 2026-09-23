---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plums-and-sloes"
language: "en-US"
status: candidate
sync_with: "pcr.zh-CN.md"
content_maturity: authored_methodology
translation_status: aligned
---

# Fresh Plums and Sloes at Orchard Gate

## 1. Scope and Applicability

This PCR guides foreground data package construction for fresh whole plums and sloes from managed perennial orchards or managed sloe stands, delivered at the declared orchard gate. It covers attributable establishment and removal, perennial cultivation, harvest, field handling, grade separation, and optional primary conditioning or presentation when those activities are inside the declared boundary.

Conventional, integrated, organic, rain-fed, irrigated, high-density, and low-density routes are included when the route, production system, geography, certification status, and gate are declared. Nursery trees as a traded product, processed or preserved fruit, juice, spirits, dried fruit, retail-ready products, distribution, retail, consumption, and unmanaged wild gathering are excluded unless a separate boundary is declared.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plums-and-sloes` |
| classification_refs | CPC 3.0 `01346`, `Plums and sloes` |
| covered_products | fresh whole plums and sloes from declared *Prunus* cultivars or managed sloe stands at orchard gate |
| excluded_products | nursery trees; juice, wine, spirits, or other processed fruit; dried or preserved fruit; retail-ready products; distribution, retail, consumption; unmanaged wild gathering |
| representative_product | marketable fresh plums or sloes, cultivar or cultivar mix declared, delivered whole at the orchard gate |
| production_route | perennial establishment, annual cultivation, harvest, grade separation, and optional primary conditioning or presentation |
| market_state | fresh, whole, unprocessed fruit with maturity, grade, moisture, packaging state, and intended destination declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | fresh whole plums or sloes at the declared orchard gate |
| How much | 1 kg net accepted fruit |
| How well | species or cultivar, production system, maturity, marketability criterion, grade, moisture state, geography, and packaging state declared |
| How long or cycle | one declared harvest year or multi-year averaging period; establishment, replacement, and removal annualized over declared productive life |
| reference_flow_link | Reference amount and semantic product flow below; final dataset identity is resolved in the foreground data package |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fresh whole plums or sloes at orchard gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and cultivar or cultivar mix; production system and certification status; orchard or managed-stand age and productive-life assumption; harvest year or averaging period; rain-fed or irrigated status; geography; maturity and marketability criterion; grade or destination; orchard-gate location; bulk, crate, or package state |

The reference amount is net accepted fresh fruit at the declared gate. Industrial-grade fruit, downgraded fruit, culls, field losses, and conditioning rejects are separate outputs with mass and evidenced destination or fate.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and accepted fruit | Mass | kg | Express the reference flow as net kg of accepted fresh fruit at the gate and exclude reusable-container tare. |
| `yield_basis` | harvest, grades, losses, and normalized inputs | Mass and area | kg and ha | Record harvested, accepted, downgraded, processing, culled, and lost fruit for the same period before normalization. |
| `nutrient_basis` | fertilizer, soil amendments, and nutrient emissions | Mass | kg product and kg nutrient | Record each actual product and nutrient content; calculate nitrogen emissions from kg N and preserve product basis separately. |
| `water_basis` | irrigation and withdrawal | Volume or mass | m3 or kg | Distinguish delivered irrigation product input from elementary resource withdrawal and separately calculated consumption. |
| `energy_basis` | machinery, pumping, and handling | Mass, volume, or energy | kg, L, MJ, or kWh | Preserve fuel or electricity type, meter or invoice basis, conversion factor, operation, and reporting period. |
| `moisture_and_grade` | fruit outputs | Mass and moisture | kg and % | Retain maturity, grade, moisture, and destination whenever they affect marketability or allocation. |
| `perennial_annualization` | establishment, replacement, and removal | Declared property | declared unit | Allocate attributable lifecycle burdens over declared productive-life accepted output and disclose lifetime and juvenile period. |

## 5. System Boundary

The default foreground boundary starts with the declared orchard or managed-stand production condition and ends at accepted fresh whole plums or sloes at the orchard gate. It includes establishment and removal, soil and floor management, nutrient and crop-protection applications, irrigation, machinery and field energy, land occupation, harvest, on-orchard movement, grade separation, and explicitly included primary conditioning or presentation. Upstream production of planting materials, fertilizers, soil amendments, crop protection, energy, water supply, packaging, transport service, and waste treatment requires linked background datasets when used. Packing-house operations, long-term storage, distribution, retail, consumption, and processing are outside the default boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | established_orchard_or_managed_sloe_stand |
| starting_condition_role | perennial_biological_production_condition |
| product_classification_scope | fresh whole plums and sloes corresponding to CPC 3.0 `01346`; processed fruit and unmanaged wild gathering excluded |
| recursive_input_rule | Same-category fruit entering a declared process is a separate product input with origin, purpose, state, and quantity; it is not merged with fruit produced inside the boundary. |
| upstream_dataset_requirement | Planting stock, nutrient products, crop protection, energy, water supply, packaging, transport, and waste treatment require representative upstream datasets or a documented exclusion. |
| disclosure | Species/cultivar, managed-stand or orchard status, geography, production system, age, productive life, harvest period, yield, grade and marketability rule, irrigation status, gate, and package state. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_system` | orchard and managed sloe production | Include attributable establishment, replacement, productive years, and removal, or document why a representative single-period boundary is appropriate. | `source_foreground_records` |
| `boundary_orchard_gate` | reference product | End the default boundary at accepted fresh whole fruit at the declared gate; conditioning, storage, packing, and distribution after that point require explicit downstream processes. | `unece-ffv-29-plums-2020`; `usda-plum-grade-standards-7cfr51` |
| `boundary_input_completeness` | cultivation and harvest | Address nutrient products, crop protection, irrigation and withdrawal, land, fuel, electricity, establishment materials, losses, direct emissions, and fates with a value, justified zero, or documented exclusion. | `ipcc-2019-soils-n2o`; `fao-56-crop-evapotranspiration-1998`; `source_foreground_records` |
| `boundary_grade_separation` | all fruit outputs | Separate accepted, downgraded, processing, culled, and lost fruit by measured mass and declared destination or fate. | `unece-ffv-29-plums-2020`; `usda-plum-grade-standards-7cfr51`; `source_foreground_records` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment_and_removal` | Orchard establishment, replacement, and removal | conditional | include when establishment, replanting, replacement, or removal is attributable to the declared period | foreground | attributable lifecycle inputs per 1 kg accepted fruit |
| `orchard_cultivation_and_protection` | Orchard cultivation and crop protection | required | include for every managed orchard or managed sloe stand | foreground | one harvest year or declared averaging period per 1 kg accepted fruit |
| `harvest_and_field_collection` | Harvest and field collection | required | include for every route delivering fruit to the gate hand-off | foreground | harvested and separated fruit outputs per 1 kg accepted fruit |
| `primary_conditioning_and_gate_handoff` | Primary conditioning and orchard-gate hand-off | conditional | include only when washing, cooling, sorting, grading, crates, or another preparation step is inside the declared gate | foreground | accepted fruit after the declared conditioning step per 1 kg |

### Process: Orchard establishment, replacement, and removal (`orchard_establishment_and_removal`)

#### Inputs

##### Product flows

###### Planting stock and support materials (`establishment_materials`)

Planting stock, support materials, guards, and attributable irrigation infrastructure cross the boundary when installed, replaced, or removed for the declared orchard or managed stand.

- Selected flow: site-specific planting stock, support materials, guards, and irrigation infrastructure
- Flow property / unit: Mass or declared material property / kg or declared unit
- Amount rule: measured installation, replacement, and removal quantities annualized over lifetime accepted fruit output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_lifecycle_records`
- Sources: `source_foreground_records`

##### Waste flows

###### Removed orchard materials (`establishment_removal_waste`)

Discarded biomass and support materials leaving establishment or removal are recorded by material and fate.

- Selected flow: orchard removal biomass and discarded support materials, destination declared
- Flow property / unit: Mass / kg
- Amount rule: measured mass by material and destination, annualized over lifetime accepted fruit output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_lifecycle_records`
- Sources: `source_foreground_records`

##### Elementary flows

###### Orchard land occupation (`establishment_land_occupation`)

The orchard or managed stand occupies land during attributable establishment, production, replacement, and removal.

- Selected flow: land occupation for perennial fruit production
- Flow property / unit: Area-time / ha·year
- Amount rule: declared producing area multiplied by attributable occupation period and annualized to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_lifecycle_records`
- Sources: `source_foreground_records`

#### Outputs

##### Product flows

###### Established orchard production condition (`established_orchard_condition`)

The process hands an established orchard or managed sloe stand to annual cultivation as a production condition, not a market product.

- Selected flow: established orchard or managed sloe stand condition
- Flow property / unit: Declared condition / not applicable
- Amount rule: condition declared; no independent product quantity
- Value mode: Not applicable (`not_applicable`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_lifecycle_records`
- Sources: `source_foreground_records`

##### Waste flows

##### Elementary flows

### Process: Orchard cultivation and crop protection (`orchard_cultivation_and_protection`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`orchard_cultivation_and_protection_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `source_foreground_records`; `ipcc-2019-soils-n2o`

###### Irrigation water (`irrigation_water`)

Delivered irrigation water crosses the boundary when applied; a verified rain-fed route records a justified zero.

- Selected flow: delivered irrigation water by source
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow set: `flow-set.water-use`
- Flow set version: `0.2.0`
- Flow set group: `irrigation-water`
- Amount rule: metered or otherwise evidenced delivered water by field and source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `source_foreground_records`; `fao-56-crop-evapotranspiration-1998`

###### Crop-protection products (`crop_protection_products`)

Named crop-protection products and active ingredients are recorded when applied to the orchard or managed stand.

- Selected flow: actual crop-protection product and active ingredient, identity and formulation declared
- Flow property / unit: Mass / kg product and kg active ingredient
- Amount rule: measured application by product, active ingredient, field, and event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `source_foreground_records`

###### Mobile machinery fuel (`mobile_machinery_fuel`)

Fuel or equivalent energy for cultivation, pruning, spraying, nutrient application, irrigation support, and harvest support crosses the boundary as an operation input.

- Selected flow: fuel or energy for mobile agricultural machinery
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Binding: `parameterized`
- Flow set: `flow-set.energy-supply`
- Flow set version: `0.2.0`
- Flow set group: `mobile-machinery-fuel`
- Amount rule: measured fuel, meter, or machine-energy record by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_energy_records`
- Sources: `source_foreground_records`

###### Purchased electricity (`purchased_electricity`)

Electricity for pumping or in-boundary cultivation equipment is included when consumed before the gate.

- Selected flow: purchased electricity
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow set: `flow-set.energy-supply`
- Flow set version: `0.2.0`
- Flow set group: `electricity-supply`
- Amount rule: meter or invoice electricity assigned to the declared orchard and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_energy_records`
- Sources: `source_foreground_records`

##### Waste flows

##### Elementary flows

###### Water-resource withdrawal (`irrigation_withdrawal`)

Source abstraction is recorded separately from delivered irrigation product input when the study represents withdrawal.

- Selected flow: water resource withdrawal by source
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: measured or evidenced source withdrawal, distinct from delivered irrigation water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `source_foreground_records`; `fao-56-crop-evapotranspiration-1998`

#### Outputs

##### Product flows

###### Standing crop handed to harvest (`standing_fruit_for_harvest`)

Cultivation hands the fruit state to harvest and reconciles it to measured harvested and non-harvested quantities.

- Selected flow: fresh plums or sloes on the cultivated orchard hand-off
- Flow property / unit: Mass / kg
- Amount rule: calculate from harvest records and the declared orchard production balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_and_harvest_records`
- Sources: `source_foreground_records`

##### Waste flows

##### Elementary flows

###### Direct nitrous oxide to air (`direct_n2o_air`)

Direct managed-soil nitrous oxide is calculated when the declared method represents emissions from nitrogen inputs.

- Selected flow: nitrous oxide emission to air from managed orchard soil
- Flow property / unit: Mass / kg N2O or kg N2O-N
- Amount rule: calculate from declared nitrogen inputs and selected emission method, retaining N2O-N and conversion basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `ipcc-2019-soils-n2o`; `source_foreground_records`

###### Ammonia to air (`ammonia_air`)

Ammonia volatilization is recorded when relevant nutrient inputs and the receiving medium are represented.

- Selected flow: ammonia emission to air from soil or applied nutrient products
- Flow property / unit: Mass / kg NH3-N or kg NH3
- Amount rule: calculate from nitrogen input and application method using the selected emission method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `ipcc-2019-soils-n2o`; `source_foreground_records`

###### Nitrate and phosphate losses (`nutrient_losses_to_water_or_soil`)

Nitrate and phosphate losses are recorded as separate substances and receiving media when runoff, drainage, or leaching is included; a generic nutrient label cannot determine the medium.

- Selected flow: one reported nitrate or phosphate species to one evidenced receiving medium; create separate foreground exchanges by substance and compartment
- Flow property / unit: Mass / kg released substance; retain kg N or kg P as a separate calculation basis
- Amount rule: measured or calculated nutrient loss using the declared soil, drainage, runoff, and nutrient-management method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `ipcc-2019-soils-n2o`; `source_foreground_records`

### Process: Harvest and field collection (`harvest_and_field_collection`)

#### Inputs

##### Product flows

###### Fruit presented for harvest (`fruit_presented_for_harvest`)

Fruit crosses from cultivation into harvest as the declared harvest-ready orchard output.

- Selected flow: fresh plums or sloes presented for harvest
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass before grade and destination separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_harvest_records`
- Sources: `source_foreground_records`

###### Harvest machinery fuel (`harvest_fuel`)

Harvest fuel or equivalent machinery energy is recorded for picking, loading, and on-orchard movement inside the boundary.

- Selected flow: fuel or energy for harvest machinery
- Flow property / unit: Mass, volume, or energy / kg, L, MJ, or kWh
- Binding: `parameterized`
- Flow set: `flow-set.energy-supply`
- Flow set version: `0.2.0`
- Flow set group: `mobile-machinery-fuel`
- Amount rule: measured fuel or machine-energy record by harvest operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_energy_records`
- Sources: `source_foreground_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fresh fruit (`accepted_fresh_fruit`)

Accepted fresh fruit is the reference product output after the declared harvest and grade decision.

- Selected flow: fresh whole plums or sloes accepted for the orchard-gate product
- Flow property / unit: Mass / kg
- Amount rule: net measured accepted mass; normalize the reference amount to 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_yield_and_harvest_records`
- Sources: `unece-ffv-29-plums-2020`; `usda-plum-grade-standards-7cfr51`

###### Downgraded or processing fruit (`downgraded_processing_fruit`)

Fruit not meeting the fresh-market criterion but retained for processing or another declared destination is a separate co-product.

- Selected flow: downgraded, industrial-grade, or processing-destination plums or sloes
- Flow property / unit: Mass / kg
- Amount rule: measured mass by grade and destination, reconciled to harvested mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_and_harvest_records`
- Sources: `source_foreground_records`; `unece-ffv-29-plums-2020`

##### Waste flows

###### Culls and field losses (`harvest_culls_and_losses`)

Culls, bruised fruit, dropped fruit, and other non-product losses are recorded by measured destination and fate.

- Selected flow: culls, damaged fruit, dropped fruit, and uncollected biomass, destination declared
- Flow property / unit: Mass / kg fresh matter
- Amount rule: measured or reconciled mass by loss route and fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_and_harvest_records`
- Sources: `source_foreground_records`

##### Elementary flows

### Process: Primary conditioning and orchard-gate hand-off (`primary_conditioning_and_gate_handoff`)

#### Inputs

##### Product flows

###### Harvested fruit for conditioning (`conditioning_fruit_input`)

Harvested fruit enters conditioning, sorting, or presentation only when that step is inside the declared boundary.

- Selected flow: harvested fresh plums or sloes entering the declared conditioning step
- Flow property / unit: Mass / kg
- Amount rule: measured conditioning intake, reconciled to harvest outputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `source_foreground_records`

###### Conditioning water (`conditioning_water`)

Water for washing or primary conditioning is included only when the step is within the boundary.

- Selected flow: process water for washing or primary conditioning
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow set: `flow-set.water-use`
- Flow set version: `0.2.0`
- Flow set group: `process-water`
- Amount rule: metered or otherwise evidenced water by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `source_foreground_records`

###### Conditioning electricity (`conditioning_electricity`)

Electricity for in-boundary washing, sorting, cooling, or presentation is included when declared.

- Selected flow: purchased electricity for primary conditioning or presentation
- Flow property / unit: Energy / kWh or MJ
- Binding: `parameterized`
- Flow set: `flow-set.energy-supply`
- Flow set version: `0.2.0`
- Flow set group: `electricity-supply`
- Amount rule: meter or invoice electricity assigned to the activity and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `source_foreground_records`

###### Crates or packaging materials (`conditioning_packaging_materials`)

Crates, containers, pallets, and packaging materials are recorded when they protect or present fruit before the declared gate; reuse and tare are declared.

- Selected flow: actual crate, container, pallet, or packaging material used at the gate
- Flow property / unit: Mass or count / kg or declared unit
- Binding: `parameterized`
- Flow set: `flow-set.packaging-function`
- Flow set version: `0.2.0`
- Flow set group: `pallet-and-crate-packaging`
- Amount rule: measured material mass or count, including reuse cycles and tare treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `source_foreground_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned accepted fruit at gate (`conditioned_accepted_fruit`)

The process hands the declared fresh product state to the gate after included conditioning, grade separation, or presentation.

- Selected flow: accepted fresh whole plums or sloes after the declared conditioning step
- Flow property / unit: Mass / kg
- Amount rule: net measured accepted output; normalize to 1 kg reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `unece-ffv-29-plums-2020`; `usda-plum-grade-standards-7cfr51`

##### Waste flows

###### Conditioning rejects and wastewater (`conditioning_rejects_and_wastewater`)

Rejected fruit, wash residues, and wastewater leaving conditioning are recorded by material and destination.

- Selected flow: rejected fruit, wash residues, and wastewater from primary conditioning
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured or reconciled output by material and treatment or discharge route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `source_foreground_records`

###### Packaging rejects (`packaging_rejects`)

Damaged or discarded packaging is separate from fruit waste when packaging is included.

- Selected flow: rejected or discarded crate and packaging material
- Flow property / unit: Mass / kg
- Amount rule: measured packaging rejects by material and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `source_foreground_records`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_output` | accepted fresh fruit | Use net accepted fresh fruit as the reference output; do not allocate it from gross harvested mass. | `unece-ffv-29-plums-2020`; `source_foreground_records` |
| `allocation_grade_outputs` | accepted, downgraded, processing, and cull outputs | Measure and separate every intended grade or destination. If shared burdens cannot be split directly, use the declared physical mass basis; use another basis only with product-specific evidence and disclosure. | `source_foreground_records` |
| `allocation_residues_losses` | culls, residues, and wastes | Do not allocate burdens to a residue or waste with no intended product function. Record recovered or sold co-products separately and apply the declared attribution method consistently. | `source_foreground_records` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_lifecycle_records` | `orchard_establishment_and_removal` | establishment_materials; establishment_removal_waste; establishment_land_occupation; established_orchard_condition | planting, asset, and removal records | block area; planting year; tree or stand count; material; installation; replacement; removal; productive life; juvenile years; fate | reconcile invoices, maps, work orders, and removal records to the block | kg; count; ha; year | each event, reconciled annually | declared productive life and reporting year | each orchard block or managed stand | annualize attributable quantities over lifetime accepted output | invoices, maps, work orders, signed block records |
| `cp_orchard_input_records` | `orchard_cultivation_and_protection` | nutrient_products; crop_protection_products; direct_n2o_air; ammonia_air; nutrient_losses_to_water_or_soil | input and application log | product; formulation; amount; nutrient or active ingredient; date; field; method; soil or weather condition when used | collect invoices, application logs, nutrient plans, and stock reconciliation | kg product; kg nutrient; kg active ingredient | each application, reconciled monthly or annually | one harvest year or declared averaging period | each orchard block or managed stand | aggregate by actual product and nutrient or substance, then normalize | invoices, labels, logs, nutrient plan |
| `cp_irrigation_records` | `orchard_cultivation_and_protection` | irrigation_water; irrigation_withdrawal | water meter and source record | source; meter readings; delivered volume; withdrawal volume; field; date; rain-fed declaration | read meters or retain supplier records; document justified zero for verified rain-fed production | m3 or kg | each event, reconciled monthly | one harvest year or declared averaging period | each source and block | sum delivered irrigation separately from source withdrawal | meter calibration, invoices, permits, field logs |
| `cp_orchard_energy_records` | `orchard_cultivation_and_protection;harvest_and_field_collection` | mobile_machinery_fuel; purchased_electricity; harvest_fuel | fuel, machine, and electricity records | fuel type; quantity; meter or invoice; operation; machine; date; block; electricity allocation | retain fuel tickets, machine logs, meters, and allocation method | L; kg; MJ; kWh | each transaction or operation, reconciled monthly | one harvest year or declared averaging period | each block, fleet, or facility | assign shared energy by measured use or documented hours | invoices, meters, machine hours, worksheet |
| `cp_yield_and_harvest_records` | `orchard_cultivation_and_protection;harvest_and_field_collection` | standing_fruit_for_harvest; fruit_presented_for_harvest; accepted_fresh_fruit; downgraded_processing_fruit; harvest_culls_and_losses | harvest and weighbridge records | species; cultivar; block; date; gross and tare mass; grade; destination; rejected or lost mass; moisture or maturity where relevant | weigh each lot or use documented sampling and reconciliation | kg fresh fruit | each lot, aggregated by period | one harvest year or declared averaging period | each block, lot, and destination | reconcile gross harvest to accepted, downgraded, cull, and loss outputs | weighbridge tickets, grade sheets, sales records, mass-balance check |
| `cp_conditioning_and_packaging_records` | `primary_conditioning_and_gate_handoff` | conditioning_fruit_input; conditioning_water; conditioning_electricity; conditioning_packaging_materials; conditioned_accepted_fruit; conditioning_rejects_and_wastewater; packaging_rejects | conditioning, packing, and hand-off records | intake and output mass; water; electricity; package material; tare; reuse cycles; rejects; destination; hand-off date | collect batch sheets, meters, packaging invoices, and dispatch records only for included operations | kg; m3; kWh; count | each batch or dispatch, reconciled by period | declared harvest and conditioning period | each line, block, or gate facility | reconcile intake, accepted output, rejects, wastewater, and packaging; remove reusable tare | batch records, meters, package specifications, dispatch records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all quantitative rows | normalized amount = period amount / net accepted reference fruit mass | period amount; net accepted fruit mass | amount per 1 kg reference product | `source_foreground_records` |
| `calc_perennial_annualization` | establishment_materials; establishment_removal_waste; establishment_land_occupation | annualized amount = attributable lifecycle amount / declared productive-life accepted output | lifecycle amount; productive life; lifetime accepted output | annualized amount per kg accepted fruit | `source_foreground_records` |
| `calc_nutrient_content` | nutrient_products; direct_n2o_air; ammonia_air; nutrient_losses_to_water_or_soil | nutrient amount = product amount × declared nutrient fraction; preserve product and nutrient bases | product amount; nutrient fraction; application event | kg nutrient and emission inputs | `ipcc-2019-soils-n2o`; `source_foreground_records` |
| `calc_mass_balance` | fruit outputs and conditioning rejects | harvested input = accepted + downgraded/processing + culls + measured or justified losses after tare and moisture reconciliation | harvested mass; output masses; tare; declared basis | reconciled output set and residual loss | `source_foreground_records` |
| `calc_shared_energy_allocation` | purchased_electricity; mobile_machinery_fuel; harvest_fuel | assign shared records using measured operation use or documented machine-hours; do not use output price without a justified decision | shared record; operation use; allocation basis | process-level energy amount | `source_foreground_records` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_qualifiers` | reference product and every grade output | Declare species/cultivar, production system, geography, harvest period, maturity, grade, destination, gate, and package state; semantic identities without UUIDs remain explicit for later foreground resolution. | dataset metadata; lot records; product description |
| `dq_mass_reconciliation` | harvest and conditioning | Accepted, downgraded, processing, cull, reject, and loss masses reconcile to measured inputs within a documented tolerance or explain the residual. | weighbridge tickets; batch sheets; worksheet |
| `dq_input_completeness` | cultivation and harvest | Provide records or justified zeros for nutrients, crop protection, irrigation and withdrawal, land, energy, establishment materials, and direct emissions or disclose an exclusion. | invoices; meters; logs; field plan; exclusion statement |
| `dq_temporal_and_site_coverage` | all collected records | Cover the declared period and identify every contributing block, managed stand, conditioning line, or shared facility. | time-stamped records; block and facility registers |
| `dq_method_and_conversion` | calculated values and emissions | Preserve unit conversions, nutrient fractions, N2O-N versus N2O basis, moisture basis, annualization assumptions, and allocation decisions. | calculation worksheet; source method; review sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Accept only a 1 kg net accepted fresh-fruit reference flow with required qualifiers; do not use gross harvest or a processing output as the reference flow. | `unece-ffv-29-plums-2020`; `source_foreground_records` |
| `validation_process_completeness` | process map | Require cultivation, harvest, and every activated establishment or conditioning node to declare boundary, inputs, outputs, collection protocols, and hand-off. | `source_foreground_records` |
| `validation_identity_coverage` | flow identities | Accept semantic identity evidence gaps only when flow type, direction, material or substance, receiving medium where applicable, and destination are declared; do not substitute a nearby product flow. | `source_foreground_records` |
| `validation_mass_balance` | fruit outputs and losses | Fail when harvested fruit cannot be reconciled to accepted, downgraded, processing, cull, reject, and loss outputs or tare is included in net reference mass. | `source_foreground_records` |
| `validation_emission_basis` | nutrient emissions | Check nitrogen inputs, receiving media, N2O-N or substance basis, and selected emission method before accepting calculated emissions. | `ipcc-2019-soils-n2o`; `source_foreground_records` |
| `validation_boundary_disclosure` | dataset metadata | Fail when starting condition, orchard gate, productive-life treatment, included conditioning or packaging, downstream exclusions, or quality limitations are not disclosed. | `unece-ffv-29-plums-2020`; `source_foreground_records` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only when explicitly qualified for background use |
| downstream_use | foreground production of fresh whole plums or sloes at orchard gate; process and lifecyclemodel construction with route, geography, and grade qualifiers |
| allowed_use | orchard-gate fresh-fruit studies whose product state, route, boundary, reference mass, period, and quality disclosure match this PCR |
| excluded_use | processed, dried, preserved, retail-ready, or distribution stages; unmanaged wild gathering; datasets lacking mass balance or boundary disclosure |
| required_metadata | PCR id and version; species/cultivar; geography; production system; orchard/stand age and productive life; harvest period; yield and grade basis; irrigation status; gate; package state; included processes; allocation method; flow identity status |
| required_quality_disclosure | temporal and site coverage; input completeness; measurement and conversion methods; mass-balance result; emission methods; exclusions; representativeness limits |
| update_trigger | change in product boundary, grade definition, production route, annualization method, flow-set taxonomy, emission method, or material evidence affecting a required rule |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unece-ffv-29-plums-2020` | standard | UNECE FFV-29, Plums, International Standards for Fruit and Vegetables: https://unece.org/trade/wp7/FFV-Standards | fresh-plum identity, quality and marketability distinctions, orchard-gate product definition |
| `usda-plum-grade-standards-7cfr51` | official_guidance | United States Standards for Grades of Fresh Plums and Prunes, 7 CFR Part 51, Subpart O: https://www.law.cornell.edu/cfr/text/7/part-51/subpart-O | grade and quality-separation disclosure |
| `ipcc-2019-soils-n2o` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11: https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O.pdf | nutrient basis and managed-soil emission method |
| `fao-56-crop-evapotranspiration-1998` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration: https://www.fao.org/4/X0490E/X0490E00.htm | irrigation records and water-balance context |
| `source_foreground_records` | dataset | Declared orchard, managed-stand, harvest, conditioning, supplier, meter, invoice, and weighbridge records collected under these PCR protocols | site-specific quantities, identity, mass balance, allocation, and data-quality evidence |
