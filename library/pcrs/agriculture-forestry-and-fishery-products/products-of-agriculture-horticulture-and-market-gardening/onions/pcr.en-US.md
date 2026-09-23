---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.onions
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Onions

## 1. Scope and Applicability

This PCR covers the foreground production of fresh market dry-bulb onions (*Allium cepa* L., Cepa group) from planting-material entry through harvest, field curing, and the declared farm-gate state. It applies to open-field production and to protected cultivation when the same bulb product boundary is documented. The reference product is a whole, mature, firm, sound, clean and sufficiently dry bulb with the variety, colour, grade, size, moisture state, geography and crop-cycle dates declared. Green onions with full leaves, shallots, bulbs grown solely for industrial processing, and downstream transport or retail operations outside the declared farm gate are excluded. On-site sorting, washing, packing, or storage is included only when it crosses the foreground boundary and is declared.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.onions |
| classification_refs | CPC 3.0: 01253 |
| covered_products | Fresh market dry-bulb onions of *Allium cepa* L. Cepa group, including white, yellow, red, pink, brown and other cultivar colours |
| excluded_products | Green onions with full leaves; shallots; onions intended only for industrial processing; off-site distribution, retail and consumer use |
| representative_product | Mature fresh dry-bulb onion, cured and graded at the farm gate |
| production_route | Seed, set or transplant establishment; soil preparation and crop management; irrigation and nutrient management; crop protection; harvest and field curing; conditional on-site conditioning or storage |
| market_state | Whole, firm, sound, clean and sufficiently dry farm-gate bulb with declared cultivar or commercial type, colour, grade, size, moisture, origin, harvest and conditioning state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh market dry-bulb onion delivered at the declared farm-gate state |
| How much | 1,000 kg |
| How well | Mature, whole, firm, sound, clean and sufficiently dry; declared cultivar or commercial type, colour, grade, size and moisture state |
| How long or cycle | One declared onion crop cycle from planting-material entry through harvest and field curing; include conditional conditioning or storage when it crosses the boundary |
| reference_flow_link | Reference product flow below; identity is resolved by the foreground data package |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Marketable fresh dry-bulb onion at farm gate `<9a7c27da-f086-4d97-a251-b1989ad5d312>` |
| Reference flow property | Mass `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| Reference unit group | Mass units `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| Reference unit | kg |
| Required qualifiers | *Allium cepa* bulb; dry-bulb versus green state; cultivar or commercial type; colour; production geography; crop-cycle dates; harvest maturity; field-curing status; moisture or dry-matter basis; grade and size; whether washing, packing or storage is included |
| Binding | `fixed` |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product and marketable output | Mass | kg | Normalize the PCR to 1,000 kg of marketable bulbs at the declared farm-gate state. Weigh after the declared harvest, curing and included conditioning steps. |
| `moisture_state_declaration` | reference product and harvested bulb outputs | Mass and moisture content | kg and mass-% | Declare as-received moisture or dry matter when measured; do not silently convert between as-received and dry-matter mass. |
| `nutrient_product_basis` | fertilizer and soil-amendment input | Product mass and nutrient mass | kg product, kg N, kg P2O5, kg K2O | Record each product actually applied and its documented nutrient basis. Keep product mass separate from nutrient mass and do not count a compound product twice. |
| `irrigation_volume_basis` | irrigation-water input | Volume | m3 | Record delivered irrigation by field and crop cycle from meters or a documented water balance. Keep irrigation delivery separate from source withdrawal and natural rainfall. |
| `land_cycle_basis` | cultivated land occupation | Area-time | ha·crop cycle | Calculate occupation from the declared productive area and the represented onion crop-cycle dates; report land transformation only when it occurs in the represented period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The declared crop cycle starts when seed, sets or transplants, the occupied field or protected unit, and the first operation records enter the foreground system. Existing soil, inherited land history and prior-crop burdens are not silently re-created. |
| starting_condition_role | Foreground production begins at establishment and includes operations, inputs, land occupation, crop emissions, harvest and field curing required to produce the declared farm-gate bulbs. |
| product_classification_scope | Fresh market dry-bulb onions of *Allium cepa* L. Cepa group at farm gate; green onions, shallots and industrial-processing bulbs are outside this product boundary. |
| recursive_input_rule | If onion sets or other same-category planting material are used, record the material as a product input with its source lot and use in the current crop cycle. Do not recursively expand another onion production cycle inside this PCR. |
| upstream_dataset_requirement | Link upstream or background datasets for planting material, fertilizer or soil amendment products, crop-protection products, supplied water, fuels, electricity, packaging and treatment services when they are used. Declare provider, geography, time and technology where available. |
| disclosure | Declare crop form, cultivar or commercial type, colour, production system, geography, field or protected-unit area, crop-cycle dates, planting-material route, irrigation and nutrient records, crop-protection records, harvest and curing state, quality grade, moisture basis, residue destination and any included conditioning, packing or storage. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground production boundary | Include establishment, crop management, harvest and field curing through the declared farm-gate output. Include on-site conditioning or storage only when the operation and its inputs cross the stated boundary. | `codex-cxs-348-onions-2022` |
| `boundary_rule_2` | product inputs and upstream links | Record purchased or retained planting material, applied fertilizer or soil amendments, crop-protection products, supplied irrigation water, fuel, electricity, packaging and treatment services when they cross the foreground boundary; link their upstream burdens as declared background inputs. | `codex-cxc-53-hygiene-fresh-fruit-vegetables-2003` |
| `boundary_rule_3` | land and inherited conditions | Report crop-cycle land occupation. Report land transformation only for a change occurring in the represented period, and disclose inherited soil, land history and prior-crop conditions without inventing a new transformation event. | `ipcc-2019-managed-soils-n2o` |
| `boundary_rule_4` | field emissions and residues | Derive soil-emission rows from the declared nitrogen inputs, residue handling and applicable water-loss pathways. Record residue removal, treatment or disposal only when it crosses the boundary, and prevent duplicate accounting of the same nitrogen pathway. | `ipcc-2019-managed-soils-n2o` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_preparation_and_establishment` | Field preparation and establishment | required | Always included for the declared onion crop cycle | Foreground crop production | Per 1,000 kg reference output; establishment records and productive area |
| `crop_management` | Crop management and input application | required | Always included for the declared onion crop cycle | Foreground crop production | Per 1,000 kg reference output; measured nutrient, water, energy and crop-protection inputs |
| `harvest_and_field_curing` | Harvest and field curing | required | Always included through the declared farm-gate harvest state | Foreground harvest and primary conditioning | Per 1,000 kg reference output; harvested bulbs, culls and residues reconciled by mass |
| `postharvest_conditioning_and_storage` | Postharvest conditioning and storage | conditional | Include when washing, sorting, packing, curing beyond field curing, or storage crosses the foreground boundary | Conditional farm-gate conditioning | Per 1,000 kg reference output; handled mass and declared storage duration |

### Process: Field preparation and establishment (`field_preparation_and_establishment`)

#### Inputs

##### Product flows

###### Onion seed, sets or transplants entering the crop cycle (`planting_material`)

Record the seed, set or transplant lot that enters the declared field or protected unit. Retain the material form, variety or cultivar, lot identity, viable quantity and whether it is purchased or retained.

- Selected flow: Onion seed, set or transplant material
- Flow property / unit: Mass or viable planting count / kg or plant count
- Amount rule: Measured planting-material mass or viable count allocated to the current crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_planting_material_records`
- Sources:

- Range: Provisional planting-material screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 120
  - Unit: kg planting material per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fuel supplied to establishment machinery (`establishment_machinery_fuel`)

Record fuel used for bed or seedbed preparation, planting and establishment operations when the fuel crosses the foreground boundary.

- Selected flow: Mobile agricultural machinery fuel
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Flow property / unit: Energy carrier or mass / MJ or L
- Amount rule: Measured fuel use by establishment operation, allocated to the onion crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_establishment_operation_records`
- Sources:

- Range: Provisional establishment-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 180
  - Unit: MJ per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Waste flows

##### Elementary flows

###### Cultivated land occupation for the onion crop cycle (`cultivated_land_occupation`)

Record the productive field or protected-unit area occupied during the declared onion crop cycle. Distinguish crop occupation from durable infrastructure.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha·crop cycle
- Amount rule: Declared productive area multiplied by the represented crop-cycle duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_and_site_records`
- Sources:

- Range: Provisional land-occupation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 0.50
  - Unit: ha·crop cycle per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Land transformation associated with new cropland (`land_transformation`)

Record land transformation only when the represented period changes land use to establish the onion production area. Do not infer transformation from ordinary annual occupation.

- Selected flow: Land transformation to agricultural production
- Flow property / unit: Area / ha
- Amount rule: Measured or documented transformed area attributed to the current crop-cycle output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_site_records`
- Sources:

- Range: Conditional transformation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: ha per 1,000 kg output
  - Basis: current-period land-use change attributed to the crop output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Crop management and input application (`crop_management`)

#### Inputs

##### Product flows

###### Agricultural nutrient and fertilizer inputs (`crop_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_amendment_records`
- Sources:
- Range: Provisional fertilizer and amendment screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kg product per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water delivered to the onion crop (`irrigation_water`)

Record water delivered to the onion field or protected unit for establishment and crop growth. Separate metered delivery from rainfall, recirculated water and the source withdrawal.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or documented water-balance volume delivered to the crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_withdrawal_records`
- Sources: `fao-crop-water-needs-onion`, `fao-56-crop-evapotranspiration`

- Range: Field irrigation reference interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 3500
  - Upper: 5500
  - Unit: m3/ha per onion crop cycle
  - Basis: one hectare over an onion crop cycle; convert to the PCR reference flow using measured area and output
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-crop-water-needs-onion`

###### Water withdrawn from the declared natural or municipal source (`water_resource_withdrawal`)

Record source-specific water withdrawal separately from the delivered irrigation-water product input, including losses between withdrawal and field delivery when measured or calculated.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Measured or calculated withdrawal from the declared source allocated to the onion crop cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_and_withdrawal_records`
- Sources:

- Range: Provisional source-withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6500
  - Unit: m3/ha per onion crop cycle
  - Basis: one hectare over an onion crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection formulations applied to the crop (`crop_protection_products`)

Record each herbicide, insecticide, fungicide or other crop-protection formulation that is applied to the onion crop cycle. Retain formulation, active substance, application date and treated area.

- Selected flow: Crop-protection formulation for onion production
- Flow property / unit: Mass of formulated product / kg product
- Amount rule: Sum measured formulation mass by product and application event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Sources: `codex-cxs-348-onions-2022`

- Range: Provisional crop-protection screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg formulated product per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied for pumping and field operations (`field_operation_electricity`)

Record electricity crossing the boundary for irrigation pumping, protected-unit operation or other field equipment. Keep purchased electricity distinct from fuel.

- Selected flow: Electricity supply for onion production
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered electricity or documented equipment consumption allocated to the onion crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_management_input_records`
- Sources:

- Range: Provisional field-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kWh per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fuel supplied to crop-management machinery (`crop_management_fuel`)

Record fuel used for cultivation, weed control, spraying and other crop-management operations when it crosses the foreground boundary.

- Selected flow: Mobile agricultural machinery fuel
- Flow property / unit: Energy carrier or mass / MJ or L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Measured fuel use by crop-management operation allocated to the onion crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_management_input_records`
- Sources:

- Range: Provisional crop-management fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: MJ per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct nitrous oxide emissions from managed onion soil (`direct_n2o_emission`)

Calculate direct soil N2O emissions from synthetic and organic nitrogen inputs and any applicable residue or soil-carbon pathways. Report the nitrogen basis and the N2O or N2O-N unit used.

- Selected flow: Nitrous oxide to ambient air from managed onion soil
- Flow property / unit: Mass / kg N2O-N or kg N2O
- Amount rule: Apply the declared IPCC method to collected nitrogen inputs and applicable soil or climate conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_emission_activity_records`
- Sources: `ipcc-2019-managed-soils-n2o`

- Range: IPCC direct N2O-N factor envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.002
  - Upper: 0.019
  - Unit: kg N2O-N per kg N input
  - Basis: per kg applied or otherwise modelled N input
  - Basis kind: N input (`n_input`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-managed-soils-n2o`

###### Ammonia volatilization from nitrogen application (`ammonia_emission`)

Record or calculate ammonia released to ambient air from the declared nitrogen sources using the selected method and site conditions. Do not use a generic ammonia row to conceal the fertilizer or manure basis.

- Selected flow: Ammonia to ambient air from onion crop nitrogen inputs
- Flow property / unit: Mass / kg NH3-N or kg NH3
- Amount rule: Calculate from the nitrogen-input record and the documented volatilization factor or measured emission
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_emission_activity_records`
- Sources: `ipcc-2019-managed-soils-n2o`

- Range: Provisional ammonia screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg NH3-N per kg N input
  - Basis: per kg applied N input
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate leaching or runoff from managed soil (`nitrate_leaching`)

Record nitrate-N or nitrate loss to water when leaching or runoff occurs and the pathway is in scope. Retain the nitrogen source, receiving medium and calculation basis.

- Selected flow: Nitrate to water from onion crop soil
- Flow property / unit: Mass / kg nitrate-N or kg nitrate
- Amount rule: Calculate the site- and climate-relevant leaching or runoff amount from collected nitrogen inputs and documented partitioning factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_emission_activity_records`
- Sources: `ipcc-2019-managed-soils-n2o`

- Range: Provisional nitrate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg nitrate-N per kg N input
  - Basis: per kg applied N input in regions where leaching or runoff occurs
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate runoff from managed soil (`phosphate_runoff`)

Record phosphate-P or phosphate loss to water when runoff or another receiving pathway occurs and the pathway is supported by site records or a documented method.

- Selected flow: Phosphate to water from onion crop soil
- Flow property / unit: Mass / kg phosphate-P or kg phosphate
- Amount rule: Calculate site-specific phosphate loss from collected nutrient inputs, soil test information and documented runoff factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_emission_activity_records`
- Sources:

- Range: Provisional phosphate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg phosphate-P per kg applied P input
  - Basis: per kg applied P input where runoff occurs
  - Basis kind: N input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carbon dioxide from urea or lime application (`urea_lime_co2_emission`)

Record carbon dioxide from urea or lime only when those inputs are present and the selected method attributes a direct application emission to the represented crop cycle.

- Selected flow: Carbon dioxide to ambient air from urea or lime application
- Flow property / unit: Mass / kg CO2
- Amount rule: Calculate from collected urea or lime application amounts using the selected method factor; record zero only when the relevant input is reconciled as absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_emission_activity_records`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Particulate matter from field operations (`field_particulate_emission`)

Record particulate emissions from field operations or soil disturbance only when the represented activity and receiving medium are documented. Keep particle-size or species detail in the foreground data package.

- Selected flow: Particulate matter to ambient air from onion field operations
- Flow property / unit: Mass / kg particulate matter
- Amount rule: Measured or method-calculated particulate amount attributed to the onion crop cycle; retain size or species detail
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_emission_activity_records`
- Sources:

- Range: Provisional particulate screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg particulate matter per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and field curing (`harvest_and_field_curing`)

#### Inputs

##### Product flows

###### Fuel supplied to harvesting equipment (`harvest_machinery_fuel`)

Record fuel used for lifting, topping, windrowing, harvesting and field-curing operations when it crosses the foreground boundary.

- Selected flow: Mobile agricultural machinery fuel
- Flow property / unit: Energy carrier or mass / MJ or L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Measured fuel use by harvest and field-curing operation allocated to the onion crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_cure_records`
- Sources:

- Range: Provisional harvest-fuel screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: MJ per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied for harvest or field curing (`harvest_curing_electricity`)

Record electricity used by powered harvest, ventilation or field-curing equipment when it crosses the foreground boundary.

- Selected flow: Electricity supply for onion harvest or field curing
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered electricity or documented equipment consumption allocated to harvest and field curing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_cure_records`
- Sources:

- Range: Provisional harvest-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kWh per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested onion bulb crop before optional conditioning (`harvested_bulb_crop`)

Record harvested bulbs after field curing and before any optional washing, sorting, packing or storage process included in the foreground boundary. Declare harvest moisture and the destination of the crop.

- Selected flow: Harvested fresh dry-bulb onion crop before conditioning
- Flow property / unit: Mass / kg
- Amount rule: Measured harvested bulb mass with declared moisture and field-curing state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_cure_records`
- Sources: `codex-cxs-348-onions-2022`

- Range: Provisional harvested-bulb screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1800
  - Unit: kg harvested bulbs per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field culls and rejected bulbs (`field_culls_and_rejects`)

Record bulbs rejected during harvest or field curing and declare whether they remain in the field, are fed, composted, treated, or otherwise leave the foreground boundary.

- Selected flow: Nonmarketable onion bulbs and field culls
- Flow property / unit: Mass / kg
- Amount rule: Measured cull mass by destination, reconciled with harvested bulb output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested bulb crop
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_cure_records`
- Sources:

- Range: Provisional field-cull screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg culls per 1,000 kg harvested bulb crop
  - Basis: harvested bulb crop mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Onion tops, skins and other crop residues crossing the boundary (`crop_residues_crossing_boundary`)

Record onion tops, skins and other residues only when they cross the declared boundary or are removed from the field. Declare whether residues are retained, removed, burned, composted, fed or treated.

- Selected flow: Onion crop residues crossing the foreground boundary
- Flow property / unit: Mass / kg wet or dry residue
- Amount rule: Measured or documented residue mass by destination; keep residue handling distinct from marketable bulb output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_cure_records`
- Sources: `ipcc-2019-managed-soils-n2o`

- Range: Provisional residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2500
  - Unit: kg wet or dry residue per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs; moisture state must be declared
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Postharvest conditioning and storage (`postharvest_conditioning_and_storage`)

#### Inputs

##### Product flows

###### Harvested bulb crop entering conditioning or storage (`conditioning_feedstock`)

When postharvest conditioning or storage is included, carry the harvested bulb crop into this process with its mass, moisture, grade and prior field-curing state.

- Selected flow: Harvested fresh dry-bulb onion crop before conditioning
- Flow property / unit: Mass / kg
- Amount rule: Carry the measured output from `harvest_and_field_curing` into the included conditioning or storage operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_and_storage_records`
- Sources:

###### Water supplied for optional washing or cleaning (`conditioning_water`)

Record water used for optional washing or cleaning only when that operation is included in the declared farm-gate boundary.

- Selected flow: Process water for onion conditioning
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Metered or documented water use for washing or cleaning, allocated to handled onion mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_storage_records`
- Sources: `codex-cxc-53-hygiene-fresh-fruit-vegetables-2003`

- Range: Provisional conditioning-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3 per 1,000 kg handled output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied for sorting, ventilation or storage (`conditioning_storage_electricity`)

Record electricity for sorting, ventilation, forced curing or storage when the equipment is inside the declared foreground boundary.

- Selected flow: Electricity supply for onion conditioning or storage
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered electricity or documented equipment consumption allocated to handled onion mass and storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_storage_records`
- Sources:

- Range: Provisional conditioning-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kWh per 1,000 kg handled output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials used inside the declared boundary (`packaging_materials`)

Record packaging materials only when packing is included in the farm-gate boundary. Retain material type, mass, reuse status and destination of discarded packaging.

- Selected flow: Packaging materials for onion dispatch
- Flow property / unit: Mass / kg packaging material
- Amount rule: Measured packaging mass allocated to packed marketable onion output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-cxs-348-onions-2022`

- Range: Provisional packaging screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg packaging per 1,000 kg output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh dry-bulb onion at farm gate (`farm_gate_marketable_onion_bulbs`)

Record the final marketable onion output after all conditioning or storage included in the declared boundary. Declare the quality, size, grade, moisture and storage state that identify the reference product.

- Selected flow: Marketable fresh dry-bulb onion at farm gate
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg reference output after the included harvest, curing, conditioning and storage steps
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `codex-cxs-348-onions-2022`

##### Waste flows

###### Conditioning rejects and storage losses (`conditioning_rejects_and_losses`)

Record bulbs rejected during sorting, packing or storage and declare each destination. Keep marketable output, culls and storage losses in a mass-balance reconciliation.

- Selected flow: Nonmarketable onion bulbs from conditioning or storage
- Flow property / unit: Mass / kg
- Amount rule: Measured rejects and losses by operation and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_storage_records`
- Sources:

- Range: Provisional conditioning-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: kg rejects or losses per 1,000 kg handled input
  - Basis: handled onion mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater from optional washing or cleaning (`conditioning_wastewater`)

Record wastewater generated by included washing or cleaning and declare treatment, discharge or reuse. Do not infer wastewater when no washing or cleaning occurs.

- Selected flow: Wastewater from onion conditioning
- Flow property / unit: Volume / m3
- Amount rule: Metered or calculated wastewater volume from included washing or cleaning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg marketable farm-gate onion bulbs
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_and_storage_records`
- Sources: `codex-cxc-53-hygiene-fresh-fruit-vegetables-2003`

- Range: Provisional conditioning-wastewater screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3 per 1,000 kg handled output
  - Basis: per 1,000 kg marketable farm-gate onion bulbs
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared field and harvest operations | Subdivide operations when separate records exist for onion cultivars, products or destinations. When subdivision is not possible, allocate shared burdens by measured mass of marketable bulbs and co-products at the point of separation. | `iso-14044-2006-allocation` |
| `allocation_rule_2` | culls and crop residues | Treat culls and residues as co-products or wastes according to their documented destination. Do not apply a credit or substitution claim unless the receiving product, displaced function and evidence are explicitly documented. | `iso-14044-2006-allocation` |
| `allocation_rule_3` | conditioning, packing and storage | Allocate shared conditioning, packing and storage inputs by mass of handled output, with storage duration retained when energy depends on time. | `iso-14044-2006-allocation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `field_preparation_and_establishment` | planting material | supplier lot record and planting log | material form; cultivar; lot; purchased or retained; mass or viable count; planting date | reconcile supplier documents with field or protected-unit planting log | kg or count | each lot and planting event | complete crop cycle | each declared field or protected unit | sum by crop cycle and convert to reference-flow basis | lot document; planting log; count or mass check |
| `cp_establishment_operation_records` | `field_preparation_and_establishment` | establishment fuel | fuel log, invoice, meter or contractor record | operation; equipment; fuel type; quantity; date; treated area | collect primary fuel record and allocate by operation | L, kg or MJ | each operation or weekly | complete crop cycle | each declared field or protected unit | sum by operation and allocate to onion output | fuel invoice or meter; equipment record |
| `cp_land_and_site_records` | `field_preparation_and_establishment` | land occupation and transformation | field register, GIS or land-use record | field id; area; land-use history; transformation date; crop-cycle dates | verify area against field register or geospatial record | ha and crop-cycle dates | once per crop cycle and on land-use change | current crop cycle and disclosed prior history | each declared field or protected unit | calculate area-time and flag only current-period transformation | field map; lease or land-use record; dated change evidence |
| `cp_fertilizer_amendment_records` | `crop_management` | fertilizer and soil amendment | invoice, delivery ticket, label, nutrient plan and application log | product; formulation; mass; N/P/K content; application date; field; operator | reconcile purchase and application records with nutrient plan | kg product and kg nutrient | each delivery and application event | complete crop cycle | each declared field or protected unit | sum product mass and nutrient roles without double counting compound products | invoice; label or specification; application log |
| `cp_irrigation_and_withdrawal_records` | `crop_management` | irrigation delivery and source withdrawal | meter, pump log, water balance and source record | source; meter start/end; delivered volume; pumping energy; rainfall; field; date | meter readings or documented ETc/water balance with source separation | m3 | each event or weekly | complete crop cycle | each declared field and water source | sum delivery and withdrawal separately; reconcile losses | meter calibration; pump log; water permit or source record |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | product label, invoice and application log | formulation; active substance; mass or volume; date; field; treated area | reconcile purchase and application records | kg or L product | each application event | complete crop cycle | each declared field or protected unit | sum by named product and application event | label; invoice; application log |
| `cp_crop_management_input_records` | `crop_management` | field fuel and electricity | fuel log, invoice, meter or equipment record | operation; fuel or electricity; quantity; date; field; equipment | collect meter or primary supplier record and allocate by operation | L, kg, MJ or kWh | each operation or weekly | complete crop cycle | each declared field or protected unit | sum by energy carrier and crop cycle | meter or invoice; equipment record |
| `cp_crop_emission_activity_records` | `crop_management` | soil emissions and loss pathways | nutrient, soil, climate, water and residue records | N source and amount; soil and climate class; irrigation; residue; receiving medium; factor choice | calculate from reconciled activity data or retain measured emission record | kg N input; kg N2O-N, NH3-N, nitrate-N or phosphate-P | each application and crop-cycle reconciliation | complete crop cycle | each declared field or protected unit | calculate each pathway once and convert N2O-N to N2O only at reporting stage | nutrient reconciliation; soil or climate record; method worksheet |
| `cp_harvest_and_cure_records` | `harvest_and_field_curing` | harvest energy, harvested bulbs, culls and residues | harvest log, weighbridge, field record and destination record | date; field; harvested mass; moisture; grade; cull mass; residue mass; destination; energy | weigh or document outputs and reconcile with operation records | kg, mass-% moisture, L, kg or MJ | each harvest lot and operation | complete crop cycle | each declared field and harvest lot | sum by lot and reconcile harvested bulbs, culls and residues | scale or weighbridge; moisture test; destination record |
| `cp_conditioning_and_storage_records` | `postharvest_conditioning_and_storage` | conditioning, packing, storage and wastewater | facility log, meter, packing record, storage log and waste record | input and output mass; water; electricity; packaging; duration; temperature; rejects; wastewater; destination | collect facility records and lot-level mass balance | kg, m3, kWh, kg packaging and storage time | each lot and storage campaign | included conditioning or storage period | each included facility and lot | allocate by handled mass and storage duration; reconcile final output and losses | scale; meter; packing specification; storage log; treatment record |
| `cp_packaging_records` | `postharvest_conditioning_and_storage` | packaging materials | packaging invoice, specification and packing log | material; unit mass; quantity; reuse; lot; destination | reconcile packaging specification with packed output | kg material and package count | each packing campaign | included packing period | each included facility | sum material mass and allocate by packed output | supplier specification; packing log; reuse record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | reference normalization | Normalize each collected or calculated value to 1,000 kg of marketable farm-gate onion output: value × 1,000 / declared marketable output mass. | collected output mass; row amount | PCR-basis amount |  |
| `calculation_rule_2` | fertilizer and soil-amendment nutrients | For each applied product, nutrient amount = product mass × documented nutrient fraction. Sum each nutrient role separately and retain product mass as its own record. | product mass; N/P/K fraction; application event | kg product, kg N, kg P2O5 and/or kg K2O |  |
| `calculation_rule_3` | irrigation and source withdrawal | Use meter totals where available. If a water balance is needed, estimate delivered irrigation from ETc and effective rainfall or soil-water balance, then keep source withdrawal and delivery as separate values. | ET0; onion Kc; rainfall; soil-water balance; meter readings | m3 delivered irrigation and m3 source withdrawal | `fao-56-crop-evapotranspiration`, `fao-crop-water-needs-onion` |
| `calculation_rule_4` | direct and indirect nitrogen emissions | Apply the selected IPCC managed-soils method to each documented nitrogen source and pathway. Report N2O-N first and convert to N2O with 44/28 only when the chosen reporting unit requires it. | synthetic and organic N; residue N; climate and soil conditions; volatilization and leaching activity | kg N2O-N, kg N2O, NH3-N and nitrate-N pathway amounts | `ipcc-2019-managed-soils-n2o` |
| `calculation_rule_5` | harvested output and co-products | Reconcile harvested bulbs, marketable output, culls and residues by lot. Allocate shared burdens at the first measured point of separation and retain the destination of each nonmarketable stream. | lot masses; moisture; grade; destination | marketable output, cull and residue amounts | `iso-14044-2006-allocation` |
| `calculation_rule_6` | optional conditioning and storage | For each included lot, final marketable output = conditioning input − rejects − storage losses, with water, packaging, energy and duration allocated to handled mass. | conditioning input; rejects; losses; handled mass; storage duration | final reference output and loss amounts |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_requirement_1` | identity and product state | The dataset must identify *Allium cepa* bulb form, cultivar or commercial type, colour, geography, crop cycle, maturity, moisture, grade, size and included conditioning state. | Codex CXS 348-2022; product description; lot records |
| `quality_requirement_2` | input completeness | Reconcile planting material, nutrient products, crop-protection products, irrigation, source withdrawal, fuel and electricity to field or facility records and explain any missing route. | supplier records; meters; application logs; mass balance |
| `quality_requirement_3` | temporal and geographic representativeness | State the crop year or campaign, field or facility location, production system and the time period represented. | field register; facility register; dated records |
| `quality_requirement_4` | emissions and nutrient calculations | Retain the nitrogen source basis, soil or climate conditions, factor choice, water-loss pathway and conversion units for every calculated emission. | IPCC 2019 Refinement method worksheet; calculation record |
| `quality_requirement_5` | output and co-product reconciliation | Reconcile marketable bulbs, culls, residues, rejects and storage losses by lot, and document the destination of every stream that crosses the boundary. | weighbridge or scale; moisture/grade record; destination record |
| `quality_requirement_6` | disclosure and uncertainty | Disclose measured, calculated and provisional values separately. Replace reasoned screening ranges with site or route evidence before active review when they constrain a publication-critical result. | collection protocols; calculation worksheets; review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference flow | Confirm that the reference amount is 1,000 kg and that product identity, maturity, moisture, grade, size, geography, crop cycle and included conditioning qualifiers are present. | `codex-cxs-348-onions-2022` |
| `validation_rule_2` | process map and inventory | Confirm that every required process has an inventory section and that each flow card has a direction, flow type, amount rule, value mode, specificity, basis kind, evidence kind and collection protocol when required. |  |
| `validation_rule_3` | nutrient and emission completeness | For every applied nutrient product, confirm documented nutrient content and a non-duplicated calculation of direct N2O, volatilization and leaching/runoff pathways when those pathways occur. | `ipcc-2019-managed-soils-n2o` |
| `validation_rule_4` | irrigation and water withdrawal | Confirm that delivered irrigation and source withdrawal are separate, source and field are identified, and any ETc or water-balance estimate retains its assumptions and units. | `fao-56-crop-evapotranspiration`, `fao-crop-water-needs-onion` |
| `validation_rule_5` | output mass balance | Confirm lot-level reconciliation of harvested bulbs, marketable output, culls, residues, conditioning rejects, storage losses and declared destinations. Investigate unexplained negative or excess balances. | `iso-14044-2006-allocation` |
| `validation_rule_6` | quality and hygiene disclosure | Where the farm-gate state is described as fresh market produce, check the declared whole, firm, sound, clean, mature and sufficiently dry state and any applicable hygiene, pesticide-residue and contaminant disclosure. | `codex-cxs-348-onions-2022`, `codex-cxc-53-hygiene-fresh-fruit-vegetables-2003` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground crop-production dataset that may be published as a `secondary_dataset`; an aggregated farm-gate onion dataset may also serve as a `background_dataset` only when its provenance and intended technology are explicit |
| downstream_use | Construction of onion product-system processes and lifecycle models at the declared farm-gate reference flow |
| allowed_use | Comparative or screening LCA for the declared onion form, geography, crop cycle, production system and farm-gate state; aggregation across sites only when the stated representativeness and allocation basis remain valid |
| excluded_use | Green onion or shallot modelling; industrial-processing products; retail or consumer-stage claims; extrapolation to another climate, irrigation regime, cultivar or grade without a documented adjustment |
| required_metadata | PCR id and version; product and crop form; cultivar or commercial type; colour; geography; field or facility; crop-cycle dates; production system; reference amount; moisture, grade and size; included conditioning/storage; source and provider metadata for background inputs |
| required_quality_disclosure | Measured versus calculated values; site and time coverage; input completeness; water and nutrient basis; emission method and factors; output and co-product mass balance; residue and reject destinations; uncertainty or screening-range status |
| update_trigger | New crop year or production system; change in irrigation, nutrient, crop-protection or energy practice; changed market state or conditioning boundary; revised emission method; material change in grade, moisture or allocation basis |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-348-onions-2022` | standard | FAO/WHO Codex Alimentarius, Standard for Onions and Shallots, CXS 348-2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pt/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B348-2022%252FCXS_348e.pdf | Product definition, maturity, quality, size, packaging and market-state qualifiers |
| `codex-cxc-53-hygiene-fresh-fruit-vegetables-2003` | standard | FAO/WHO Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables, CXC 53-2003, https://www.fao.org/fao-who-codexalimentarius/ | Included washing or handling hygiene and dataset disclosure |
| `fao-56-crop-evapotranspiration` | official_guidance | FAO Irrigation and Drainage Paper 56, Chapter 6, Crop evapotranspiration, https://www.fao.org/4/X0490E/x0490e0b.htm | ETc = Kc × ETo method and onion crop-coefficient interpretation |
| `fao-crop-water-needs-onion` | official_guidance | FAO Crop Water Needs manual, onion water-needs tables, https://www.fao.org/4/S2022E/s2022e07.htm | Field-level onion water-need screening interval and irrigation data method |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil N2O, volatilization, leaching/runoff, crop-residue and urea/lime calculation methods |
| `iso-14044-2006-allocation` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | Subdivision, allocation, co-product handling and burden reconciliation |
