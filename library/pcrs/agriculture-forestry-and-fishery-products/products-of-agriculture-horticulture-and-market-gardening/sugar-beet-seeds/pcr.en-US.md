---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-beet-seeds
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Sugar beet seeds

## 1. Scope and Applicability

This PCR covers production of cleaned and size-graded sugar beet (Beta vulgaris subsp. vulgaris var. altissima) reproductive material that is suitable for sowing and handed off at the farm gate. It covers either a direct-seeded seed-to-seed route or a steckling production and transplant route; parent establishment, vernalization or overwintering, isolation, parent-line management, pollination, harvest, stabilization, threshing, dry cleaning, size grading, lot testing and release are included.

Commercial root production and buyer planting are excluded. Washing, polishing, dehulling beyond ordinary dry cleaning, priming, coating, pelleting and chemical seed treatment are downstream and excluded. A dataset may not claim these treated states under this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-beet-seeds |
| classification_refs | CPC 3.0: 01803 Sugar beet seeds |
| covered_products | Uncoated, unpelleted, unprimed and chemically untreated cleaned, size-graded sugar beet reproductive material suitable for sowing |
| excluded_products | Sugar beet roots; fodder beet or vegetable beet seed; buyer planting services; washed, polished, primed, coated, pelleted or chemically treated seed |
| representative_product | Cleaned seed-grade sugar beet seed |
| production_route | Managed biological seed production by one declared direct-seeded or steckling/transplant route, followed by pollination, harvest, field stabilization, threshing, dry cleaning, size grading and lot release |
| market_state | Seed-grade, cleaned for sowing; dry, size-graded, untreated and traceable by lot |

The managed-production parent is sugar beet reproductive production. The direct-seeded route carries parents across overwintering in the production field; the steckling route produces, selects, vernalizes and transplants roots before reproductive production. These routes change topology, period records and transfer flows and are mutually exclusive within one foreground package. Supplemental forced-air stabilization and equipment configuration are technology choices under the harvest or conditioning parent activities and may coexist only when separately metered.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cleaned, size-graded sugar beet seed suitable for sowing |
| How much | 1,000 kg |
| How well | Lot passes the declared varietal identity, analytical purity, germination/viability, moisture and seed-health acceptance criteria |
| How long or cycle | One complete seed-production campaign, including every establishment/vernalization and reproductive phase attributed to the released lot |
| reference_flow_link | Accepted output of `grading_lot_release`; all phase and run records reconcile to the released lot |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Sugar beet seeds `7c8b5317-9f13-48cd-847c-f6d1f5248d54` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar and parent-line identity; direct-seeded or steckling route; production geography and crop years; vernalization method; isolation and pollination controls; lot id; harvest and stabilization route; moisture basis; size grade; purity and germination/viability result; untreated/uncoated/unpelleted state; farm-gate hand-off |
| Binding | Fixed (`fixed`) |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net accepted seed mass at the declared moisture basis; exclude packaging and test samples not returned to the lot. |
| `seed_count_conversion` | counts of parents or seed units | Count and Mass | item and kg | Preserve measured counts; any count-to-mass conversion shall use lot-specific thousand-unit mass and retain the measurement record. |
| `phase_normalization` | all establishment and reproductive flows | applicable measured property | stated row unit | Normalize after linking every phase and crop year to the released lot; do not annualize or duplicate first-period burdens. |
| `lot_mass_reconciliation` | harvest through lot release | Mass | kg | Reconcile received mass to accepted, downgraded, rejected, sampled, residue and loss states at every node. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Acquired parent seed or selected steckling material with declared genetic identity enters one specified seed-production route |
| starting_condition_role | Upstream propagation input to the foreground seed campaign |
| product_classification_scope | Sugar beet reproductive material produced for sowing; excludes commercial root production and downstream enhanced or treated seed states |
| recursive_input_rule | Purchased sugar beet parent seed in the same category is an upstream product input with supplier dataset or disclosed proxy; it is not expanded recursively inside the same foreground campaign |
| upstream_dataset_requirement | Require geography, crop year, parent-line identity, treatment state, quantity and supplier dataset or proxy disclosure for purchased propagation material |
| disclosure | Declare route, periods, parent arrangement, isolation control, pollination responsibility, harvest/stabilization method, conditioning technology, lot tests, grades and every reject destination |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_seed_state` | product hand-off | End at untreated, uncoated, unpelleted cleaned and size-graded sowing seed; exclude washing, polishing, priming, coating, pelleting and chemical treatment. | `imanishi-et-al-2019` |
| `boundary_route_choice` | parent establishment | Select exactly one direct-seeded or steckling route and include its complete establishment, vernalization and transfer records. | `cfia-sugar-beet-biology` |
| `boundary_pollination_identity` | reproductive production | Include isolation, parent-line placement, flowering synchronization, off-type removal and male-parent disposition needed to preserve the intended cross. | `cfia-sugar-beet-biology`; `usda-aphis-sugar-beet-seed-production` |
| `boundary_harvest_independence` | harvest | Model harvest separately because standing crop becomes dry collected material and field residues and shattering losses require an independent hand-off. | `usda-aphis-sugar-beet-seed-production` |
| `boundary_stabilization` | stabilization | Declare the usable pre-intervention state, field or supplemental drying input, stable dry state and losses before threshing. | `usda-aphis-sugar-beet-seed-production` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `parent_establishment_vernalization` | Parent establishment and vernalization route delta | required | Use exactly one declared route: direct-seeded overwintering or steckling production/transplanting. | Managed biological production with biological route delta, first period | Established and vernalized male and female parent population entering reproductive production |
| `reproductive_seed_production` | Reproductive seed production and pollination | required | After the declared parent route has produced vernalized parents. | Managed biological production, reproductive period | Mature female seed-bearing crop ready for harvest |
| `harvest_field_stabilization` | Harvest, swathing and field stabilization technology delta | required | When the female seed crop has reached the declared harvest maturity. | Harvest and preservation/stabilization with technology delta | Dry harvested seed-bearing material delivered to threshing |
| `threshing_primary_cleaning` | Threshing and primary dry cleaning | required | For every harvested lot before size grading. | Primary conditioning | Cleaned unsized seed lot delivered to grading |
| `grading_lot_release` | Size grading, testing and lot release | required | For every cleaned lot placed on the market as sowing seed. | Grading, sorting and batch release | 1,000 kg accepted cleaned seed-grade sugar beet seed at farm gate |

Production is campaign/batch based. Every input, output, cleaning event and changeover shall carry campaign, field, crop-year, parent-line and seed-lot keys. Field production, harvest, conditioning and grading runs may aggregate only lots with equivalent route and quality state.

### Process: Parent establishment and vernalization route delta (`parent_establishment_vernalization`)

#### Inputs

##### Product flows

###### Parent seed or steckling propagation material (`parent_propagation_material`)

Record this flow at the parent phase boundary and preserve lot, period and destination linkage.

- Selected flow: Sugar beet parent propagation material
- Flow property / unit: Mass / kg
- Amount rule: Measured mass and count of parent seed, roots or stecklings entering the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parent_phase`
- Sources: `cfia-sugar-beet-biology`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg
  - Basis: per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated agricultural nutrient supply (`parent_nutrient_supply`)

Record this flow at the parent phase boundary and preserve lot, period and destination linkage.

- Selected flow: Agricultural nutrient supply functions
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum the mass of all mineral fertilizers, organic fertilizers, lime and nutrient-bearing amendments used in this process; retain concrete exchanges in foreground records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parent_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: broad provisional total supplied product mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`parent_irrigation_water`)

Record this flow at the parent phase boundary and preserve lot, period and destination linkage.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Measured irrigation water supplied during parent establishment, overwintering and vernalization management
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parent_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3
  - Basis: broad provisional irrigation volume per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop protection products (`parent_crop_protection`)

Record this flow at the parent phase boundary and preserve lot, period and destination linkage.

- Selected flow: Crop protection products
- Flow property / unit: Mass / kg
- Amount rule: Measured active products and formulated products applied to the parent phase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parent_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: broad provisional supplied product mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field-operation fuel (`parent_field_fuel`)

Record this flow at the parent phase boundary and preserve lot, period and destination linkage.

- Selected flow: Agricultural machinery fuel
- Flow property / unit: Volume / L
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Measured fuel consumed for land preparation, sowing or planting, rouging, lifting, storage handling and transplanting attributable to this phase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parent_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L
  - Basis: broad provisional fuel volume per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Controlled-vernalization electricity (`vernalization_electricity`)

Record this flow at the parent phase boundary and preserve lot, period and destination linkage.

- Selected flow: Electricity
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered electricity for cold storage or controlled vernalization; record zero for field-overwintered direct-seeded production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parent_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh
  - Basis: broad provisional electricity use per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reportable flow is prescribed for this coordinate.

##### Elementary flows

No separately reportable flow is prescribed for this coordinate.

#### Outputs

##### Product flows

###### Established vernalized parent population (`vernalized_parent_population`)

Record this flow at the parent phase boundary and preserve lot, period and destination linkage.

- Selected flow: Vernalized sugar beet parent plants
- Flow property / unit: Count / item
- Amount rule: Calculated mass or count transferred to reproductive production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parent_phase`
- Sources: `cfia-sugar-beet-biology`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1000000
  - Unit: plants
  - Basis: broad provisional parent-plant count per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected or off-type parent material (`parent_phase_rejects`)

Record this flow at the parent phase boundary and preserve lot, period and destination linkage.

- Selected flow: Rejected sugar beet parent material
- Flow property / unit: Mass / kg
- Amount rule: Measured parent material rejected during selection, winter survival assessment or transplant preparation, by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parent_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: broad provisional reject mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Parent-phase crop residues (`parent_phase_residues`)

Record this flow at the parent phase boundary and preserve lot, period and destination linkage.

- Selected flow: Sugar beet crop residues
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated residues leaving the field or managed on site, by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parent_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg
  - Basis: broad provisional residue mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct managed-soil emissions (`parent_managed_soil_emissions`)

Record this flow at the parent phase boundary and preserve lot, period and destination linkage.

- Selected flow: Reported managed-soil emission substances to their receiving media
- Flow property / unit: Mass / kg
- Amount rule: Calculate each reported substance separately from nutrient, residue and field records; never use a generic pollutant identity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parent_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: broad provisional aggregate screening mass; concrete dataset retains substances separately per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Reproductive seed production and pollination (`reproductive_seed_production`)

#### Inputs

##### Product flows

###### Vernalized male and female parent population (`reproductive_parent_population`)

Record this flow at the reproductive phase boundary and preserve lot, period and destination linkage.

- Selected flow: Vernalized sugar beet parent plants
- Flow property / unit: Count / item
- Amount rule: Transfer the same parent population output from the first phase, preserving parent-line and route identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reproductive_phase`
- Sources: `cfia-sugar-beet-biology`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1000000
  - Unit: plants
  - Basis: broad provisional parent-plant count per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consolidated agricultural nutrient supply (`reproductive_nutrient_supply`)

Record this flow at the reproductive phase boundary and preserve lot, period and destination linkage.

- Selected flow: Agricultural nutrient supply functions
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum the mass of all mineral fertilizers, organic fertilizers, lime and nutrient-bearing amendments used in this process; retain concrete exchanges in foreground records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reproductive_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: broad provisional total supplied product mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`reproductive_irrigation_water`)

Record this flow at the reproductive phase boundary and preserve lot, period and destination linkage.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Measured irrigation water supplied during reproductive growth and pollination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reproductive_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3
  - Basis: broad provisional irrigation volume per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop protection products (`reproductive_crop_protection`)

Record this flow at the reproductive phase boundary and preserve lot, period and destination linkage.

- Selected flow: Crop protection products
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated products applied during reproductive production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reproductive_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: broad provisional supplied product mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Reproductive-field operation fuel (`reproductive_field_fuel`)

Record this flow at the reproductive phase boundary and preserve lot, period and destination linkage.

- Selected flow: Agricultural machinery fuel
- Flow property / unit: Volume / L
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Measured fuel for field operations, isolation maintenance, rouging, synchronization and male-row removal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reproductive_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: L
  - Basis: broad provisional fuel volume per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reportable flow is prescribed for this coordinate.

##### Elementary flows

No separately reportable flow is prescribed for this coordinate.

#### Outputs

##### Product flows

###### Mature female seed-bearing crop (`mature_seed_crop`)

Record this flow at the reproductive phase boundary and preserve lot, period and destination linkage.

- Selected flow: Mature sugar beet seed crop
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated seed-bearing female crop transferred to harvest
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reproductive_phase`
- Sources: `usda-aphis-sugar-beet-seed-production`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 8000
  - Unit: kg
  - Basis: broad provisional mature seed-bearing crop mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Removed male pollinator biomass (`removed_pollinator_biomass`)

Record this flow at the reproductive phase boundary and preserve lot, period and destination linkage.

- Selected flow: Sugar beet pollinator biomass
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated male-parent biomass removed after pollination, with on-field, recovered or waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reproductive_phase`
- Sources: `cfia-sugar-beet-biology`, `usda-aphis-sugar-beet-seed-production`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg
  - Basis: broad provisional pollinator biomass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-type, failed and lost reproductive plants (`reproductive_offtypes_losses`)

Record this flow at the reproductive phase boundary and preserve lot, period and destination linkage.

- Selected flow: Rejected reproductive sugar beet plants
- Flow property / unit: Mass / kg
- Amount rule: Measured plants removed or lost before harvest, by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reproductive_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: broad provisional reject and loss mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct managed-soil emissions (`reproductive_managed_soil_emissions`)

Record this flow at the reproductive phase boundary and preserve lot, period and destination linkage.

- Selected flow: Reported managed-soil emission substances to their receiving media
- Flow property / unit: Mass / kg
- Amount rule: Calculate each reported substance separately from nutrient, residue and field records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reproductive_phase`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: broad provisional aggregate screening mass; concrete dataset retains substances separately per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest, swathing and field stabilization technology delta (`harvest_field_stabilization`)

#### Inputs

##### Product flows

###### Standing mature female seed crop (`standing_mature_seed_crop`)

Record this flow at the harvest boundary and preserve lot, period and destination linkage.

- Selected flow: Mature sugar beet seed crop
- Flow property / unit: Mass / kg
- Amount rule: Transfer the mature female seed crop from reproductive production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `usda-aphis-sugar-beet-seed-production`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 8000
  - Unit: kg
  - Basis: broad provisional crop mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Swathing and harvest fuel (`harvest_fuel`)

Record this flow at the harvest boundary and preserve lot, period and destination linkage.

- Selected flow: Agricultural machinery fuel
- Flow property / unit: Volume / L
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Measured fuel consumed for swathing, windrow handling and combine harvest
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: L
  - Basis: broad provisional fuel volume per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplemental stabilization energy (`stabilization_energy`)

Record this flow at the harvest boundary and preserve lot, period and destination linkage.

- Selected flow: Electricity or fuel for forced air or supplemental drying
- Flow property / unit: Energy / kWh
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Measured energy used only when field drying alone does not meet the declared stable hand-off condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kWh
  - Basis: broad provisional energy use per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reportable flow is prescribed for this coordinate.

##### Elementary flows

No separately reportable flow is prescribed for this coordinate.

#### Outputs

##### Product flows

###### Dry harvested seed-bearing material (`dry_harvested_seed_material`)

Record this flow at the harvest boundary and preserve lot, period and destination linkage.

- Selected flow: Dry harvested sugar beet seed-bearing material
- Flow property / unit: Mass / kg
- Amount rule: Measured dry material delivered to threshing, preserving lot and parent identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `usda-aphis-sugar-beet-seed-production`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 6000
  - Unit: kg
  - Basis: broad provisional harvested material mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvested stalk and field residue (`harvest_field_residue`)

Record this flow at the harvest boundary and preserve lot, period and destination linkage.

- Selected flow: Sugar beet seed-crop residue
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated non-seed biomass retained on field, recovered or discarded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg
  - Basis: broad provisional field-residue mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shattered and uncollected seed (`shattered_lost_seed`)

Record this flow at the harvest boundary and preserve lot, period and destination linkage.

- Selected flow: Lost sugar beet seed
- Flow property / unit: Mass / kg
- Amount rule: Calculate seed loss from field observations, yield reconciliation or collection trials
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: broad provisional shattered seed loss per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No separately reportable flow is prescribed for this coordinate.

### Process: Threshing and primary dry cleaning (`threshing_primary_cleaning`)

#### Inputs

##### Product flows

###### Dry harvested seed-bearing material (`harvested_material_to_thresher`)

Record this flow at the conditioning boundary and preserve lot, period and destination linkage.

- Selected flow: Dry harvested sugar beet seed-bearing material
- Flow property / unit: Mass / kg
- Amount rule: Measured material received from harvest with lot identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 6000
  - Unit: kg
  - Basis: broad provisional received mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Threshing and cleaning electricity (`threshing_cleaning_electricity`)

Record this flow at the conditioning boundary and preserve lot, period and destination linkage.

- Selected flow: Electricity
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered electricity for threshing, conveying, aspiration and dry cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kWh
  - Basis: broad provisional electricity use per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Threshing and cleaning fuel (`threshing_cleaning_fuel`)

Record this flow at the conditioning boundary and preserve lot, period and destination linkage.

- Selected flow: Stationary or mobile equipment fuel
- Flow property / unit: Volume / L
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Measured fuel when threshing or cleaning is fuel driven
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: L
  - Basis: broad provisional fuel volume per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reportable flow is prescribed for this coordinate.

##### Elementary flows

No separately reportable flow is prescribed for this coordinate.

#### Outputs

##### Product flows

###### Cleaned unsized sugar beet seed (`cleaned_unsized_seed`)

Record this flow at the conditioning boundary and preserve lot, period and destination linkage.

- Selected flow: Cleaned unsized sugar beet seed
- Flow property / unit: Mass / kg
- Amount rule: Measured cleaned seed lot transferred to size grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: broad provisional cleaned-seed mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Threshing chaff and stalk fragments (`threshing_chaff`)

Record this flow at the conditioning boundary and preserve lot, period and destination linkage.

- Selected flow: Sugar beet seed-crop chaff
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated separated plant material by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4000
  - Unit: kg
  - Basis: broad provisional chaff mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separated foreign matter (`cleaning_foreign_matter`)

Record this flow at the conditioning boundary and preserve lot, period and destination linkage.

- Selected flow: Foreign matter from seed cleaning
- Flow property / unit: Mass / kg
- Amount rule: Measured material removed by screens and aspiration, by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: broad provisional foreign-matter mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured conditioning dust (`conditioning_dust_release`)

Record this flow at the conditioning boundary and preserve lot, period and destination linkage.

- Selected flow: Particulate matter to air, size fraction to be reported
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated uncaptured dust released to air; retain the reported particle-size identity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: broad provisional uncaptured dust mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Size grading, testing and lot release (`grading_lot_release`)

#### Inputs

##### Product flows

###### Cleaned unsized seed lot (`cleaned_seed_to_grading`)

Record this flow at the lot release boundary and preserve lot, period and destination linkage.

- Selected flow: Cleaned unsized sugar beet seed
- Flow property / unit: Mass / kg
- Amount rule: Measured cleaned seed received for grading under the same lot identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_release`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: broad provisional received mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grading and testing electricity (`grading_electricity`)

Record this flow at the lot release boundary and preserve lot, period and destination linkage.

- Selected flow: Electricity
- Flow property / unit: Mass / kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Metered electricity for conveying, sizing, gravity separation and testing attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_release`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: broad provisional electricity use per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reportable flow is prescribed for this coordinate.

##### Elementary flows

No separately reportable flow is prescribed for this coordinate.

#### Outputs

##### Product flows

###### Accepted cleaned seed-grade sugar beet seed, intended output (`accepted_seed_grade_sugar_beet_seed`)

Record this flow at the lot release boundary and preserve lot, period and destination linkage.

- Selected flow: Sugar beet seeds `7c8b5317-9f13-48cd-847c-f6d1f5248d54`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Exactly 1,000 kg accepted lot mass at the declared farm-gate hand-off
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_lot_release`
- Sources: `oecd-sugar-fodder-beet-seed-scheme`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded viable seed co-product (`downgraded_viable_seed`)

Record this flow at the lot release boundary and preserve lot, period and destination linkage.

- Selected flow: Downgraded sugar beet seed
- Flow property / unit: Mass / kg
- Amount rule: Measured seed that remains viable but does not enter the accepted reference lot; declare destination and whether it is an intended co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_release`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: broad provisional downgraded seed mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected damaged, off-type or non-viable seed (`rejected_damaged_offtype_seed`)

Record this flow at the lot release boundary and preserve lot, period and destination linkage.

- Selected flow: Rejected sugar beet seed
- Flow property / unit: Mass / kg
- Amount rule: Measured seed rejected by identity, damage, purity, germination or viability criteria, by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_release`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: broad provisional rejected seed mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Consumed or discarded lot-test samples (`lot_test_samples_consumed`)

Record this flow at the lot release boundary and preserve lot, period and destination linkage.

- Selected flow: Sugar beet seed test samples
- Flow property / unit: Mass / kg
- Amount rule: Measured sample mass not returned to the accepted lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_release`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: broad provisional destructive sample mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grading and changeover residue (`grading_changeover_residue`)

Record this flow at the lot release boundary and preserve lot, period and destination linkage.

- Selected flow: Seed grading residue
- Flow property / unit: Mass / kg
- Amount rule: Measured retained material and cleanout residue from lot changeover, by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_release`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: broad provisional cleanout residue per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured grading dust (`grading_dust_release`)

Record this flow at the lot release boundary and preserve lot, period and destination linkage.

- Selected flow: Particulate matter to air, size fraction to be reported
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated uncaptured dust released to air during grading
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cleaned seed-grade sugar beet seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_release`
- Range: Provisional or method QA interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: broad provisional uncaptured dust mass per 1,000 kg accepted reference seed output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_phase_linkage` | multi-period campaign | Attribute first-period establishment/vernalization and second-period reproductive burdens once to the resulting lot using traceable field and crop-year links; do not duplicate burdens across annual datasets. | `cfia-sugar-beet-biology` |
| `allocation_parent_routes` | route alternatives | Direct-seeded and steckling routes are mutually exclusive. Do not average both unless a production-weighted aggregate reports each route separately before aggregation. | `cfia-sugar-beet-biology` |
| `allocation_intended_outputs` | accepted and downgraded seed | Treat accepted seed and any intentionally marketed downgraded viable seed as the complete intended output set. Prefer physical mass allocation when subdivision cannot avoid shared burdens; disclose prices and sensitivity if economic allocation is used. | |
| `allocation_residue_waste` | parent biomass, field residue, chaff and rejects | Treat material without intended product hand-off as residue or waste; do not assign avoided burden without a documented recovery function and destination. | |
| `allocation_rework` | re-cleaned or re-graded seed | Return rework to the producing lot, retain its processing burdens once, and exclude it from accepted output until it passes release criteria. | |
| `allocation_batch_shared` | shared runs and changeovers | Allocate metered run inputs by causal record or processed mass and assign changeover residues to the affected runs once; never count a shared run at two nodes. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_parent_phase` | parent_establishment_vernalization | all parent-phase inputs and outputs | field, store and invoice records | route; field; crop year; parent line; quantities; dates; cold-store meter; rejects; destinations | reconcile field logs, purchase records, meters and transfer counts | row unit | each operation and transfer | entire first phase | all supplying fields and stores | sum by route and released lot; no cross-route averaging before disclosure | invoices, field logs, cold-store records, transfer and selection records |
| `cp_reproductive_phase` | reproductive_seed_production | pollination-phase inputs and outputs | field and parent-line records | parent rows; isolation; flowering; applications; water; fuel; removals; mature crop; emissions data | reconcile mapped field operations and parent-line inspections | row unit | each operation and inspection | entire reproductive phase | all production fields | sum by lot and parent line; preserve male/female dispositions | field map, isolation inspection, application log and crop estimate |
| `cp_harvest` | harvest_field_stabilization | harvest, energy, collected material and loss | harvest tickets, meters and field observations | dates; crop mass; fuel; electricity; moisture; drying duration; residues; shattering | weigh transferred material and reconcile field observations | row unit | each field and harvest run | harvest through stable hand-off | all fields and drying locations | mass-weight by lot after separate route reporting | weigh tickets, meter logs, moisture tests and loss checks |
| `cp_conditioning` | threshing_primary_cleaning | received material, energy and separated states | run and meter records | lot; run; received mass; energy; cleaned mass; chaff; foreign matter; dust control | weigh run inputs/outputs and read meters | row unit | each conditioning run | entire conditioning campaign | all conditioning equipment | reconcile by run then aggregate equivalent lots | calibrated scales, meter records and cleanout log |
| `cp_lot_release` | grading_lot_release | grade states, energy, tests and release | lot, test and release records | lot; size fractions; mass; purity; germination; viability; moisture; test sample; rejects; destination; meter | weigh every grade and link accredited or declared test results | row unit | each grading run and released lot | grading through farm-gate release | all grading and test locations | accepted output is only released conforming mass; other states remain separate | scale calibration, test report, release certificate and traceability record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | row quantity / accepted released lot mass × 1,000 kg | measured row quantity; accepted lot mass | normalized row amount | `mass-balance-identity` |
| `calc_phase_attribution` | first and reproductive periods | sum uniquely linked operations across all phases of the lot before normalization | field id; crop year; route; lot id; quantities | full-campaign inventory | `cfia-sugar-beet-biology` |
| `calc_mass_balance` | each material node | received mass = accepted transfers + downgraded + rejected + residue + samples + measured/calculated loss, within uncertainty | node mass records | closure and unexplained difference | `mass-balance-identity` |
| `calc_managed_soil_emissions` | field phases | apply the declared current method separately to recorded nutrient and residue inputs; retain substance and receiving medium | nutrient and residue records; method factors | substance-specific elementary flows | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference lot | Preserve cultivar, parent lines, lot id, untreated state and certification/acceptance status. | lot certificate and release record |
| `dq_route_period` | full campaign | Trace every field, crop year, vernalization/overwintering event and transfer to one route and released lot. | field map, transfer record and campaign ledger |
| `dq_pollination` | reproductive phase | Record isolation control, parent ratio/placement, flowering synchronization, off-type removal and male-parent disposition. | inspection and parent-line records |
| `dq_measurement` | mass and energy | Use calibrated scales and meters or document estimation method and uncertainty. | calibration and meter evidence |
| `dq_completeness` | all nodes | Reconcile all accepted, downgraded, rejected, residue, loss and rework states; explain material balance gaps. | node reconciliation |
| `dq_representativeness` | aggregation | Disclose geography, crop years, route shares, technology shares and excluded sites. | aggregation workbook and dataset metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The flow UUID, mass property, unit group, 1,000 kg amount, market state and required qualifiers shall all be present and consistent. | |
| `validate_route_exclusivity` | parent production | Exactly one direct-seeded or steckling route shall be declared per foreground package, with all required phases linked. | `cfia-sugar-beet-biology` |
| `validate_period_once` | multi-period attribution | Each establishment, vernalization, reproductive and termination event shall be attributed once and only once to released outputs. | |
| `validate_isolation_pollination` | reproductive production | Verify isolation evidence, parent identity, flowering/pollination management and male-parent disposition before accepting varietal-identity claims. | `oecd-sugar-fodder-beet-seed-scheme`; `usda-aphis-sugar-beet-seed-production` |
| `validate_batch_changeover` | conditioning and grading | Runs, shared energy, cleaning and changeover residues shall carry run and lot keys and shall not be double counted. | |
| `validate_output_states` | grading | Accepted, downgraded viable, rejected, sample and residue states shall have distinct quantities and hand-offs; rejected material cannot enter the reference output. | |
| `validate_rework_loop` | re-cleaning or re-grading | Every rework loop shall return to a named node, retain prior burdens and close before release. | |
| `validate_treatment_exclusion` | product state | Reject a dataset that includes polishing, washing, priming, coating, pelleting or chemical seed treatment while claiming this reference state. | `imanishi-et-al-2019` |
| `validate_mass_balance` | all material nodes | Investigate unexplained mass-balance differences and disclose accepted uncertainty before use as secondary or background data. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Production of sowing seed inputs for sugar beet cultivation models and supply-chain inventories |
| allowed_use | Untreated cleaned and size-graded sugar beet seed with route, geography, periods and lot-quality state matching the study |
| excluded_use | Commercial root production; buyer planting; fodder/vegetable beet seed; polished, washed, primed, coated, pelleted or chemically treated commercial seed |
| required_metadata | Required qualifiers; process geography; field and crop years; route and phase linkage; parent-line and isolation controls; production mode; lot id; moisture basis; grades; tests; reject destinations; allocation method |
| required_quality_disclosure | Primary-data share, metering and scale coverage, route/site aggregation, mass-balance closure, provisional-range replacements, emission method and unresolved flow identities |
| update_trigger | Change in parent route, vernalization practice, isolation or pollination control, harvest/stabilization route, conditioning technology, acceptance specification, treatment state, allocation method or representative crop years |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cfia-sugar-beet-biology` | official_guidance | Canadian Food Inspection Agency, The Biology of Beta vulgaris L. (Sugar Beet), <https://inspection.canada.ca/en/plant-varieties/plants-novel-traits/applicants/directive-94-08/biology-documents/beta-vulgaris> | Biennial lifecycle, vernalization, direct-seeded and steckling routes, parent disposition |
| `usda-aphis-sugar-beet-seed-production` | official_guidance | USDA APHIS, sugar beet environmental impact statement, <https://www.aphis.usda.gov/sites/default/files/03_32301p_feis_std.pdf> | Hybrid parent management, isolation, male-row removal, swathing, field drying and combine harvest |
| `oecd-sugar-fodder-beet-seed-scheme` | standard | OECD Schemes for the Varietal Certification of Sugar Beet and Fodder Beet Seed, <https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/seeds/Seed%20scheme%20rules%20and%20regulations.pdf/_jcr_content/renditions/original./Seed%20scheme%20rules%20and%20regulations.pdf> | Varietal certification, lot identity and official control |
| `imanishi-et-al-2019` | literature | Imanishi et al. (2019), The biochemistry underpinning industrial seed technology and mechanical processing of sugar beet, DOI 10.1007/s00425-019-03257-5 | Boundary between cleaning/sizing and downstream washing, polishing, priming, coating and pelleting |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied at each foreground node | Reference normalization and material reconciliation |
