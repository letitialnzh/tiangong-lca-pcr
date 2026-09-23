---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-cane
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Sugar cane

## 1. Scope and Applicability

This PCR governs foreground production of accepted mature sugarcane stalks at the platform-declared agricultural-field hand-off. It includes plant-cane establishment, every represented ratoon period, field management, manual or mechanical harvest, green-cane or pre-harvest-burn disclosure, field conditioning, residues, losses and the carried stubble responsibility. It excludes transport beyond that hand-off and all crushing, juice extraction, clarification, evaporation, sugar, molasses and ethanol manufacture.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-cane |
| classification_refs | CPC 3.0: 01802 Sugar cane |
| covered_products | Mature harvested sugarcane stalks of Saccharum officinarum or declared commercial sugarcane hybrids, accepted at the agricultural-field hand-off |
| excluded_products | Sucrose or processed sugar; juice; syrup; molasses; ethanol; bagasse; planting material sold as seed cane; transport and processing after the field hand-off |
| representative_product | Accepted mature harvested cane stalk, not processed sucrose |
| production_route | The platform flow declares no route. The PCR requires managed plant-cane and/or ratoon production plus manual or mechanical harvest; green-cane and pre-harvest-burn routes are mutually exclusive for one field-lot event. |
| market_state | Fresh mature stalks, topped and stripped of excessive leaf/trash and gross adhering soil, at the exact platform gate `Natural mix, at agricultural fields`; moisture, variety, burn status, harvest method and acceptance condition declared |

The managed biological production parent is field_production. Plant cane and ratoon cane coexist across a declared crop series but are mutually exclusive period identities. Manual/mechanical and green/pre-burn alternatives are attached to harvest; each changed topology, input, emission, residue route and data requirement must be recorded for the chosen route.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted mature harvested sugarcane stalks at the exact platform gate `Natural mix, at agricultural fields` |
| How much | 1 kg |
| How well | Meets declared lot acceptance for variety or hybrid, maturity, moisture, burn status, harvest method, tops/leaves, foreign matter, damage and gross adhering soil |
| How long or cycle | One identified plant-cane or ratoon harvest period within a declared complete crop series; shared establishment burdens attributed across actual accepted outputs |
| reference_flow_link | accepted_sugarcane_stalks |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Saccharum officinarum `d56c6f6a-8f2e-4351-8362-18a710ac31f0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact gate `Natural mix, at agricultural fields`; no platform treatment route declared; fresh mature stalk; species or hybrid; plant-cane or ratoon period; crop-series identifier; green or pre-burn harvest; manual or mechanical harvest; moisture basis; tops/leaves and foreign matter condition; acceptance grade; geography and harvest date |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference stalks | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net fresh mass at the declared field hand-off; do not substitute sucrose, dry matter or factory-received mass. |
| `moisture_alignment` | stalk, tops, trash and loss mass balance | Mass with moisture basis | kg | Declare wet or dry basis and convert compared masses to a common basis using paired samples. |
| `nutrient_product_basis` | consolidated nutrient supply | Actual product mass and nutrient analysis | kg product; kg nutrient | Collect every actual product once; calculate nutrient inputs from retained analyses without separate PCR fertilizer cards. |
| `period_normalization` | plant and ratoon periods | Mass, area and period identifiers | kg; ha; period | Normalize period-specific records to accepted output and amortize shared establishment only across the actual declared harvest series. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Plant-cane field before establishment, or viable ratoon stubble carried from the identified preceding harvest period |
| starting_condition_role | Initial field condition or cross-period intermediate; never a burden-free untracked input |
| product_classification_scope | CPC 3.0: 01802 Sugar cane |
| recursive_input_rule | Purchased cane used as planting material is an input with an upstream dataset; retained stubble is linked once from the preceding harvest and is not recursively represented as accepted market cane |
| upstream_dataset_requirement | Require upstream datasets for purchased planting cane, products and energy; require origin, quantity, quality and hand-off consistency |
| disclosure | Declare geography, field, crop-series and period ids, plant/ratoon status, establishment and termination, irrigation, nutrient and protection management, harvest technology, green/pre-burn status, residue routes, hand-off, output set and allocation |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_handoff` | whole route | End at accepted harvested stalks at the agricultural-field hand-off; exclude all post-hand-off transport and factory conversion. | `fao-sugarcane-water-2012` |
| `boundary_period_series` | plant cane and ratoons | Enumerate plant establishment, every represented ratoon and final termination; link stubble and shared burdens once across periods. | `fao-sugarcane-water-2012` |
| `boundary_harvest_routes` | harvest | Declare manual or mechanical technology and exactly one green-cane or pre-harvest-burn state for each field-lot event; report changed energy, emissions, loss, trash and stubble effects. | `sra-harvest-manual-2014`; `fao-cane-environment-1997` |
| `boundary_residue_exclusivity` | tops, leaves, trash and stubble | Assign each residue fraction once to retention, intended removal, burning, recovery, disposal or cross-period stubble; preserve dry matter and nitrogen bases. | `ipcc-managed-soils-2019` |
| `boundary_conditioning` | field conditioning | Include topping, leaf/trash separation, gross-soil removal and loading needed for the field hand-off; exclude crushing and juice or sugar processing. | `sra-harvest-manual-2014` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Plant-cane establishment and ratoon field production | required | from field preparation or declared carry-in stubble through mature standing cane | managed biological production parent; period-indexed plant/ratoon route | 1 kg accepted reference product |
| `harvest` | Sugarcane harvest | required | manual or mechanical; exactly one of green-cane or pre-harvest-burn route per field-lot | harvest/capture parent with alternative technology and biological route delta for stalks, trash, stubble and loss | 1 kg accepted reference product |
| `field_conditioning` | Primary field conditioning and agricultural-field hand-off | required | topping, leaf/trash removal, gross-soil removal and loading before the declared hand-off | primary conditioning from raw collected stalks to accepted prepared stalks; factory processing excluded | 1 kg accepted reference product |

### Process: Plant-cane establishment and ratoon field production (`field_production`)

#### Inputs

##### Product flows

###### Planting cane for plant-cane establishment (`planting_cane`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Planting cane setts or billets
- Flow property / unit: Mass / kg
- Amount rule: measured fresh mass of viable planting material entering the plant-cane field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Sources: `fao-sugarcane-water-2012`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg
  - Basis: planting material per kg accepted cane over the declared crop series
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Consolidated agricultural nutrient supply (`agricultural_nutrient_supply`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Actual mineral fertilizers, organic fertilizers, lime and nutrient-bearing amendments
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: sum measured actual product masses while retaining product identity, nutrient analysis, application date and field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `ipcc-managed-soils-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: total nutrient-supplying products per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Crop-protection products (`crop_protection_inputs`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Crop-protection products
- Flow property / unit: Mass / kg
- Amount rule: measured formulated product applied to the represented field and crop period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `sra-weed-manual-2021`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.005
  - Unit: kg
  - Basis: formulated product per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Field-operation energy carriers (`field_energy_supply`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Actual fuel or electricity used by field operations
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered or invoiced carrier use allocated once to the field and crop period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operation_energy`
- Sources:
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: MJ
  - Basis: broad screening energy per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Waste flows

None for this process and direction.

##### Elementary flows

###### Irrigation water withdrawal (`irrigation_water_withdrawal`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Water withdrawal by declared source compartment
- Flow property / unit: Volume / m3
- Amount rule: measured delivered irrigation water, corrected for documented conveyance boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation`
- Sources: `fao-sugarcane-water-2012`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3
  - Basis: irrigation withdrawal per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Agricultural land occupation (`land_occupation`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area*time / m2*a
- Amount rule: cultivated area multiplied by the represented plant-cane or ratoon period and normalized to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_cycle`
- Sources: `fao-sugarcane-water-2012`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0001
  - Upper: 0.02
  - Unit: m2*a
  - Basis: occupied land per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


#### Outputs

##### Product flows

###### Mature standing cane transferred to harvest (`mature_standing_cane`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Mature standing sugarcane crop
- Flow property / unit: Mass / kg
- Amount rule: estimated or measured mature stalk mass available to the linked harvest event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Sources: `fao-sugarcane-water-2012`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg
  - Basis: standing stalk mass per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Waste flows

###### Field growth loss and failed biomass (`field_growth_loss`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Failed or unharvestable cane biomass
- Flow property / unit: Mass / kg
- Amount rule: measured or sampled biomass not transferred to harvest, with destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Sources:
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: broad failed-biomass screen per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Elementary flows

###### Direct managed-soil nitrous oxide (`managed_soil_n2o`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Nitrous oxide to air from managed soil
- Flow property / unit: Mass / kg
- Amount rule: calculate from field-specific nitrogen inputs and the declared IPCC tier without embedding a default factor in this PCR
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-managed-soils-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.001
  - Unit: kg
  - Basis: direct N2O screening range per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Nitrogen loss by leaching and runoff (`nitrogen_leaching_runoff`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Reported nitrogen substance to water or off-field compartment
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured nitrogen sources, site conditions and the declared method while preserving substance and compartment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-managed-soils-2019`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg N
  - Basis: nitrogen-loss screening range per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


### Process: Sugarcane harvest (`harvest`)

#### Inputs

##### Product flows

###### Mature standing cane entering harvest (`standing_cane_input`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Mature standing sugarcane crop
- Flow property / unit: Mass / kg
- Amount rule: linked output mass from field production for the same field, crop period and harvest event
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot`
- Sources: `mass-balance-identity`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg
  - Basis: standing stalk input per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Harvest energy carriers (`harvest_energy_supply`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Actual fuel or electricity used in manual-support or mechanical harvest
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered or invoiced energy linked to the field-lot and harvest route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operation_energy`
- Sources: `sra-harvest-manual-2014`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: MJ
  - Basis: harvest energy per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Waste flows

None for this process and direction.

##### Elementary flows

None for this process and direction.

#### Outputs

##### Product flows

###### Intended output: collected cane stalks (`collected_cane_stalks`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Harvested cane stalks before field conditioning
- Flow property / unit: Mass / kg
- Amount rule: weighed collected stalk mass transferred to field conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`
- Sources: `sra-harvest-manual-2014`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg
  - Basis: collected stalks per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Intended tops or trash output (`intended_harvest_residue_output`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Separated sugarcane tops or trash with an intended use
- Flow property / unit: Mass / kg
- Amount rule: measured dry- or wet-basis mass leaving the field as an independently intended output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_routes`
- Sources: `fao-cane-environment-1997`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: intended residue output per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Intended output: cross-period ratoon stubble (`ratoon_stubble_carry_forward`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Viable sugarcane stubble retained for ratoon regrowth
- Flow property / unit: Area / ha
- Amount rule: record the field area whose viable stubble is deliberately retained after harvest
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Sources: `fao-sugarcane-water-2012`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: ha
  - Basis: retained ratoon area per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Waste flows

###### Harvest field loss and damaged cane (`harvest_field_loss`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Cane left, lost or damaged during harvest
- Flow property / unit: Mass / kg
- Amount rule: sample or reconcile material not entering collected stalk output and record its destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`
- Sources: `sra-harvest-manual-2014`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: harvest loss per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Retained or discarded tops and trash (`retained_or_discarded_trash`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Sugarcane tops and trash without an independently intended use
- Flow property / unit: Mass / kg dry matter
- Amount rule: measure or estimate dry matter and assign exactly one route: soil return, removal, burning, recovery or disposal
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_routes`
- Sources: `ipcc-managed-soils-2019`; `fao-cane-environment-1997`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry matter
  - Basis: non-product trash per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Elementary flows

###### Pre-harvest burn emissions (`preharvest_burn_emissions`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Declared pollutant species to air from pre-harvest burning
- Flow property / unit: Mass / kg
- Amount rule: zero for green-cane harvest; otherwise calculate each reported species from burned dry matter and the declared method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_routes`
- Sources: `ipcc-managed-soils-2019`; `fao-cane-environment-1997`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: all-species screening amount per kg accepted cane; each exchange remains species-specific
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


### Process: Primary field conditioning and agricultural-field hand-off (`field_conditioning`)

#### Inputs

##### Product flows

###### Collected cane entering field conditioning (`collected_cane_input`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Harvested cane stalks before field conditioning
- Flow property / unit: Mass / kg
- Amount rule: linked collected-stalk mass for the same field-lot and harvest event
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `mass-balance-identity`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg
  - Basis: conditioning inlet per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Field-conditioning energy carriers (`conditioning_energy_supply`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Actual fuel or electricity used for topping, leaf removal and loading
- Flow property / unit: Energy / MJ
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: metered or invoiced energy linked to the conditioning lot and pass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operation_energy`
- Sources: `sra-harvest-manual-2014`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: MJ
  - Basis: conditioning energy per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Waste flows

None for this process and direction.

##### Elementary flows

None for this process and direction.

#### Outputs

##### Product flows

###### Accepted mature sugarcane stalks at agricultural fields (`accepted_sugarcane_stalks`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Saccharum officinarum `d56c6f6a-8f2e-4351-8362-18a710ac31f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Binding: `fixed`
- Amount rule: exactly 1 kg accepted mature cane stalk meeting the declared lot qualifiers
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: reference-flow identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Conditioning residue with an intended use (`conditioned_residue_coproduct`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Separated tops, leaves or cane pieces with an independently intended destination
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving conditioning as a declared co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `fao-cane-environment-1997`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: conditioning co-product per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Waste flows

###### Off-spec or rejected cane (`offspec_cane`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Damaged, contaminated or otherwise rejected cane
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected mass assigned to rework, downgrade, recovery or disposal without accepted-output duplication
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `mass-balance-identity`
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: rejected cane per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Removed soil and non-product trash (`removed_soil_and_trash`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Excess adhering soil and trash removed before hand-off
- Flow property / unit: Mass / kg
- Amount rule: weighed or sampled removed material with its destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources:
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: removed soil and trash per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


##### Elementary flows

###### Conditioning dust to air (`conditioning_dust`)

Record this flow for the linked field, crop period, harvest event or lot and retain its state and destination.

- Selected flow: Reported particulate matter to air by measured size fraction
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated fugitive particulate mass, retaining particle-size identity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted mature sugarcane stalk at the agricultural-field hand-off
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lot`
- Sources:
- Range: Complete quantitative QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg
  - Basis: broad dust screening range per kg accepted cane
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_period_series` | plant cane and ratoons | Assign period-specific inputs directly. Amortize establishment, long-lived field preparation and termination across actual accepted output of the declared crop series; do not apply a universal ratoon count and do not allocate shared burdens again within each period. | `fao-sugarcane-water-2012` |
| `allocation_outputs` | stalks and intended residue outputs | Enumerate every independently intended output and its hand-off. Use a documented physical relation when causal; otherwise use disclosed economic allocation. Residues without intended product status remain residue or waste and receive no avoided-burden credit by default. | `mass-balance-identity` |
| `allocation_routes` | field-lots and harvest events | Link inputs, outputs, cleaning, changeover and shared machine operation to one field-lot event and allocate shared burdens once by measured operating time, area or throughput. | `mass-balance-identity` |
| `allocation_rework_reject` | off-spec cane and returned material | Retain prior burdens on reworked or downgraded cane, add only incremental operations, and count it once at its final exclusive destination; rejects cannot also be accepted output. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle` | `field_production` | crop series, land, planting, standing cane, failed biomass and stubble | field register; scale; survey | field; crop_series; period; plant_or_ratoon; area; establishment; termination; input_mass; output_mass; moisture | reconcile field register, harvest scale and area survey | ha; kg; % | each event and period | complete declared crop series | each field | retain period records; aggregate accepted outputs only after shared-burden attribution | field map; dated register; calibrated scale; crop-series linkage |
| `cp_field_inputs` | `field_production` | nutrient and crop-protection products | invoice; application log; analysis | field; period; product; amount; formulation; nutrient_analysis; date; treated_area | reconcile invoices and application records; retain every product once | kg; L; kg nutrient | each application | each plant or ratoon period | each field | sum by actual product and period; normalize after period attribution | invoice; label; analysis; applicator log |
| `cp_irrigation` | `field_production` | irrigation withdrawal | meter; pump log | source_compartment; delivered_volume; conveyance_boundary; field; period | calibrated meter or documented pump calculation | m3 | each irrigation | each represented period | each field and source | sum delivered water by source and period | meter calibration; pump curve; log |
| `cp_operation_energy` | `all` | fuel and electricity | invoice; meter; machine log | process; field_lot; period; route; carrier; amount; runtime; shared_operation | reconcile meter or invoice with machine hours | L; kg; kWh; MJ | each operation | establishment through hand-off | each field-lot and machine | convert with documented factor and allocate shared use once | invoice; meter calibration; hour log |
| `cp_field_emissions` | `field_production` | managed-soil and nitrogen losses | calculation record | N_by_source; residue_N; lime; urea; field_conditions; tier; factors; compartments | apply declared current method to collected field inputs | kg N; kg emission | each period | each plant or ratoon period | each field | calculate by field-period before aggregation | method version; factor provenance; calculation sheet |
| `cp_harvest_lot` | `harvest` | stalks, loss, technology and burn state | scale; harvester monitor; sampling log | field_lot; date; manual_or_mechanical; green_or_burnt; standing_mass; collected_mass; loss_mass; moisture; damage | weigh collected cane and use representative before/after or field-loss sampling | kg; % | each field-lot event | each harvest period | each field-lot | moisture-align and close inputs and outputs | scale calibration; sampling plan; route declaration |
| `cp_residue_routes` | `harvest` | tops, trash, burn and stubble | quadrant sample; scale; route log | field_lot; fraction; wet_mass; dry_matter; N_content; retained; removed; burned; intended_use; disposal; stubble_area | representative sampling and exclusive destination reconciliation | kg; kg dry matter; ha | each harvest event | each harvest period | each field-lot | assign every fraction to exactly one destination | sampling plan; laboratory result; destination receipt; burn record |
| `cp_conditioning_lot` | `field_conditioning` | inlet, accepted stalks, co-products, rejects, removed material and dust | scale; lot log; sample | lot; pass; inlet_mass; accepted_mass; coproduct_mass; reject_mass; removed_mass; moisture; destination; dust_measurement | weigh each inlet and outlet; sample moisture and foreign matter | kg; % | each lot and pass | harvest to field hand-off | each lot | sum passes without duplicating returned material; moisture-align mass balance | scale calibration; lot identity; acceptance record; destination evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_period_attribution` | shared establishment and termination | burden_to_period = shared_burden × accepted_period_mass / total_accepted_mass_in_declared_series; use another causal relation only when documented | shared burdens; accepted mass by period | period-attributed burden | `fao-sugarcane-water-2012` |
| `calc_mass_closure` | harvest and conditioning | moisture-aligned inputs = accepted output + intended outputs + retained material + losses + rejects + other exits ± measured stock change | all inlet and outlet masses; moisture | mass-closure residual | `mass-balance-identity` |
| `calc_residue_exclusivity` | tops, trash and stubble | total sampled residue = retained + intended removal + burned + recovered/disposed + stubble category, with mutually exclusive fractions | residue dry matter; destinations; N content | residue mass and N by route | `ipcc-managed-soils-2019` |
| `calc_soil_emissions` | managed-soil emissions | apply the declared current IPCC or accepted regional tier to collected nutrient products, crop-residue routes, lime, urea and site conditions; preserve gas and compartment identity | field input and residue records; factors | species-specific emissions | `ipcc-managed-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Retain platform UUID, species or hybrid, agricultural-field hand-off, maturity, moisture, burn state, harvest method and acceptance condition. | flow record; lot acceptance |
| `dq_periods` | crop series | Cover establishment, every included ratoon, final termination and every accepted harvest; identify missing or partial periods. | field register; crop-series reconciliation |
| `dq_routes` | harvest and residues | Require mutually exclusive green/pre-burn state and exclusive residue destinations with mass and dry-matter evidence. | harvest log; sampling; destination records |
| `dq_completeness` | all processes | Report primary-data coverage, missing data, provisional estimates, scale and meter calibration, mass closure and Range exceptions. | coverage table; calibration; QA report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require the stated product, Mass-property and Mass-unit-group UUIDs, 1 kg amount and all required qualifiers; reject a sucrose or processed-sugar interpretation. |  |
| `validate_period_series` | plant and ratoon periods | Require crop-series and period ids, establishment and termination boundaries, accepted output by period and one disclosed attribution of every shared burden; block missing or double-attributed periods. | `fao-sugarcane-water-2012` |
| `validate_route_delta` | harvest alternatives | Require parent harvest activity, manual/mechanical state and exactly one green/pre-burn state for each event, plus current evidence for changed inputs, emissions, loss, residue and stubble requirements. | `sra-harvest-manual-2014`; `fao-cane-environment-1997` |
| `validate_nutrient_cardinality` | each process | Allow at most one consolidated mineral-fertilizer, organic-fertilizer, lime and nutrient-bearing-amendment Product-input card per process; it must bind only to flow-set.agricultural-nutrient-supply version 0.3.0 without a group. Separate N, P, K, manure, compost, lime or amendment cards are prohibited. |  |
| `validate_output_routes` | stalks, residue, stubble, loss and rejects | Require one exclusive hand-off or destination for every state and an explicit allocation decision for every independently intended output; prevent the same residue or cane from occupying two states. | `ipcc-managed-soils-2019`; `mass-balance-identity` |
| `validate_rework` | off-spec material | Link every rejected state to rework, downgrade, recovery or disposal; retain prior burdens, add incremental work once and exclude it from accepted output until resolved. | `mass-balance-identity` |
| `validate_runs` | field-lots, events and passes | Link inputs, outputs, cleaning, changeover and shared operations to one period, event or pass and assign shared burdens once. | `mass-balance-identity` |
| `validate_ranges` | all Flow Cards | Require exactly one complete Range for every quantitative Flow Card, with lower, upper, unit, basis, basis kind, evidence kind and Sources field aligned in English, Chinese and structured output. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for accepted mature harvested sugarcane stalks at the agricultural-field hand-off |
| downstream_use | secondary_dataset; background_dataset after representativeness review |
| allowed_use | LCA and footprint studies requiring fresh mature cane stalks at the declared agricultural-field hand-off |
| excluded_use | sucrose, processed sugar, juice, syrup, molasses, ethanol, bagasse, seed cane, post-field transport or undisclosed factory processing |
| required_metadata | geography; crop year; field and crop-series ids; plant/ratoon period; species or hybrid; establishment and termination; irrigation; management; green/pre-burn and manual/mechanical harvest; moisture; acceptance; residues; stubble; output destinations; allocation |
| required_quality_disclosure | primary-data coverage by period; calibration; sampling; missing data; provisional ranges; route evidence; moisture-aligned mass closure; factor versions; period and output attribution; Range exceptions |
| update_trigger | material change in platform identity, field hand-off, crop-series design, plant/ratoon mix, establishment, irrigation, nutrient Flow Set, harvest/burn technology, conditioning, residue destination, output status, allocation or emission method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sugarcane-water-2012` | `official_guidance` | FAO, Crop yield response to water, Chapter 3.4 Herbaceous crops, https://www.fao.org/4/i2800e/i2800e07.pdf | plant cane, ratoons, crop duration, harvest route, stalk state and field production boundary |
| `fao-cane-environment-1997` | `official_guidance` | FAO, Cane, sugar and the environment, https://www.fao.org/4/x4988e/x4988e01.htm | green-cane harvest, burning distinction and residue destinations |
| `sra-harvest-manual-2014` | `extension_guidance` | Sugar Research Australia, Harvesting Best Practice Manual, https://sugarresearch.com.au/wp-content/uploads/2017/02/Harvesting-Best-Practice-Manual-FINAL-LR.pdf | manual/mechanical operation records, green/burnt route deltas, loss, trash, quality and ratoon effects |
| `sra-weed-manual-2021` | `extension_guidance` | Sugar Research Australia, Weed Management Manual, https://sugarresearch.com.au/wp-content/uploads/2024/08/Weed-Management-Manual_2021_Web_F.pdf | plant/ratoon weed-management route and crop-protection record requirements |
| `ipcc-managed-soils-2019` | `method_factor` | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil emissions; fertilizer, lime, urea and mutually exclusive residue route calculations |
| `mass-balance-identity` | `method_factor` | Mass-conservation and single-counting identity | process linkage, closure, co-product, period and rework checks |
