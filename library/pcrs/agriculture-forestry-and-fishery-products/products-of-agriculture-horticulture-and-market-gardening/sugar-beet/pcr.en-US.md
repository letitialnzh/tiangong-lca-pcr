---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-beet
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Sugar beet

## 1. Scope and Applicability

This PCR covers fresh, unprocessed first-year sugar-beet storage roots for sugar manufacture at the farm gate. It includes field establishment, managed production, direct field emissions, lifting, topping, dry removal of excess adhering soil, grading, losses and declared residue destinations. It excludes seed, fodder/table beet, post-gate transport, factory washing, slicing, diffusion, juice purification, sugar, pulp and molasses. Each dataset represents coherent rainfed/irrigated, tillage, harvest and conditioning routes or transparently weighted strata.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-beet` |
| classification_refs | `CPC:3.0:01801` Sugar beet |
| covered_products | Fresh first-year `Beta vulgaris` storage roots intended for sugar manufacture |
| excluded_products | Seed, fodder/table beet, sliced roots, juice, sugar, pulp, molasses and factory-conditioned products |
| representative_product | Fresh topped root, substantially free of loose soil, accepted at farm gate |
| production_route | Managed annual field production → lifting → farm primary conditioning → grading |
| market_state | Fresh, unprocessed root; not sliced or diffused |

Managed biological production is the parent. Irrigation, tillage and harvest technology are evidenced deltas; mutually exclusive route records require separate strata.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted fresh unprocessed sugar-beet roots at farm gate |
| How much | 1,000 kg fresh mass |
| How well | Topped; loose soil/trash excluded; contract specification and measured sugar content declared |
| How long or cycle | One annual crop cycle and delivery period |
| reference_flow_link | `b48c1ece-b700-4491-86bb-ff46c0a4768b` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Sugar beet `b48c1ece-b700-4491-86bb-ff46c0a4768b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar; crop year; geography/field; rainfed or irrigated; tillage; harvest and conditioning technology; fresh-mass and tare basis; sugar content/method; grade specification; delivery period |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| MU-01 | roots | Mass | kg | Use calibrated scales; disclose tare and residual soil/foreign-matter correction. |
| MU-02 | area records | Mass, volume, energy | per ha | Normalize with accepted yield from the same field/route stratum. |
| MU-03 | nutrient supply | Product mass and composition | kg product; kg nutrient/ha | One consolidated card retains every actual product mass, dry matter where relevant, nutrient analysis and liming value. |
| MU-04 | irrigation | Volume or mass | m3 or kg | Meter delivery; rainfall is context, not product input. |
| MU-05 | sugar quality | Mass fraction | % fresh mass | Declare sampling and laboratory method; sugar qualifies the root and is not the reference product. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field and planting seed at crop-cycle start |
| starting_condition_role | Foreground annual crop-cycle start |
| product_classification_scope | `CPC:3.0:01801` fresh unprocessed roots |
| recursive_input_rule | Any same-category purchased root is separately traced and cannot be counted again as field production. |
| upstream_dataset_requirement | Seed, energy, irrigation, crop protection and every actual nutrient product require upstream datasets. |
| disclosure | Geography, crop year, field area, cultivar, routes, inputs, yield, quality, losses, residues and hand-off. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| SB-01 | full route | Keep production, harvest, conditioning and grading independently reconcilable. | `fao-sugar-beet-white-sugar-2009` |
| SB-02 | exclusion | Stop at farm gate; exclude every factory sugar-processing operation. | `us-epa-sugarbeet-processing-ap42` |
| SB-03 | harvest | Separate standing, lifted, conditioned, accepted, downgraded, rejected, top and soil/trash states. | `fao-land-management-root-crops` |
| SB-04 | routes | Mutually exclusive route deltas require separate records and transparent weighting. | `fao-crop-yield-water-2012` |
| SB-05 | residues | Field-retained tops are residues; collected tops and marketed downgraded roots require hand-offs and allocation. | `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| field_production | Managed field production | required | every route | Single-period batch production by field/crop cycle; no storage; no replacement | field, crop cycle, operating period or delivery batch |
| harvest_lifting | Root lifting and harvest | required | every route | Independent removal from soil and harvest-state accounting | field, crop cycle, operating period or delivery batch |
| farm_conditioning | Farm primary conditioning | required | every route | Alternative technology route delta: topping completion and dry excess-soil/trash removal | field, crop cycle, operating period or delivery batch |
| grading_handoff | Grading and farm-gate hand-off | required | every route | Accepted, downgraded and rejected destination states | field, crop cycle, operating period or delivery batch |

This is a single-period route with no storage and no replacement events. Batch production is indexed by field/crop cycle, harvest or conditioning period, and delivery batch; shared-machine burdens are assigned once.

### Process: Managed field production (`field_production`)

#### Inputs

##### Product flows

###### Sugar-beet planting seed (`planting_seed`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Sugar-beet planting seed
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Issued seed minus documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare planted
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources:
- Range: Provisional seed-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 10
  - Unit: kg/ha
  - Basis: per hectare planted
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Agricultural nutrient supply from actual foreground products (`agricultural_nutrient_supply`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Agricultural nutrient supply from actual foreground products
- Flow property / unit: Mass or energy as stated / declared unit
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Sum actual mineral fertilizer, organic fertilizer, lime and nutrient-bearing amendment product masses; retain composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare treated
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `uk-nvz-nitrogen-2026`
- Range: Consolidated product-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: kg supplied products/ha
  - Basis: per hectare treated
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Irrigation water delivered to field (`irrigation_water`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Irrigation water delivered to field
- Flow property / unit: Mass or energy as stated / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered volume or verified pump flow × duration; rainfall excluded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare in crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation`
- Sources: `fao-crop-yield-water-2012`
- Range: Rainfed-to-800 mm water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8000000
  - Unit: kg/ha
  - Basis: per hectare in crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-crop-yield-water-2012`

###### Actual crop-protection products (`crop_protection_products`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Actual crop-protection products
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Issued formulated products minus returns, reconciled with application logs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare treated
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources:
- Range: Provisional formulated-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/ha
  - Basis: per hectare treated
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Actual field fuel or electricity carrier (`field_energy`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Actual field fuel or electricity carrier
- Flow property / unit: Mass or energy as stated / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Meter or issue records for establishment and crop care; harvest excluded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare in crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:
- Range: Provisional field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ/ha
  - Basis: per hectare in crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mature standing sugar-beet roots (`standing_mature_roots`)

This independent product is an intended output quantified at the declared process boundary, has an explicit hand-off, and is reconciled with adjacent states.

- Selected flow: Mature standing sugar-beet roots
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Lifted roots plus sampled pre-lifting and unharvested loss; soil and tops excluded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_yield`
- Sources: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`
- Range: Fresh-root yield QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 30000
  - Upper: 80000
  - Unit: kg/ha
  - Basis: per hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`

##### Waste flows

###### Unharvested or pre-lifting lost roots (`field_root_loss`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Unharvested or pre-lifting lost roots
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Representative field sampling scaled to the field
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg standing mature roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_loss`
- Sources: `usda-ers-sugarbeet-harvest-loss-2019`
- Range: Typical-to-screening loss share
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg standing roots
  - Basis: per kg standing mature roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `usda-ers-sugarbeet-harvest-loss-2019`

##### Elementary flows

###### Nitrous oxide to air (`direct_n2o_air`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Declared IPCC tier applied to collected nitrogen inputs and residue N
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare in crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils`
- Range: Managed-soil N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg N2O/ha
  - Basis: per hectare in crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

### Process: Root lifting and harvest (`harvest_lifting`)

#### Inputs

##### Product flows

###### Standing mature roots transferred to harvest (`harvest_root_input`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Standing mature roots transferred to harvest
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Equal standing_mature_roots for the same field and cycle
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg standing roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Internal-transfer identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg standing roots
  - Basis: per kg standing roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Actual harvest fuel or electricity carrier (`harvest_energy`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Actual harvest fuel or electricity carrier
- Flow property / unit: Mass or energy as stated / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered energy assigned once to harvest operating periods
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per hectare harvested
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:
- Range: Provisional harvest-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/ha
  - Basis: per hectare harvested
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Lifted raw sugar-beet roots (`lifted_raw_roots`)

This independent product is an intended output quantified at the declared process boundary, has an explicit hand-off, and is reconciled with adjacent states.

- Selected flow: Lifted raw sugar-beet roots
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Calibrated load mass corrected for tare and separately measured exported soil/trash
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hectare harvested
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_loads`
- Sources: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`
- Range: Lifted-root yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 28000
  - Upper: 80000
  - Unit: kg/ha
  - Basis: per hectare harvested
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`

###### Intentionally collected beet tops (`collected_beet_tops`)

This independent product is an intended output quantified at the declared process boundary, has an explicit hand-off, and is reconciled with adjacent states.

- Selected flow: Intentionally collected beet tops
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Measured collected load; zero when retained on field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per hectare harvested
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources:
- Range: Provisional collected-top screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg fresh tops/ha
  - Basis: per hectare harvested
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

###### Roots lost or damaged during lifting (`harvest_root_reject`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Roots lost or damaged during lifting
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Field sample or load-balance difference with destination recorded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvest root input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_loss`
- Sources: `usda-ers-sugarbeet-harvest-loss-2019`
- Range: Harvest reject/loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg harvest input
  - Basis: per kg harvest root input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Elementary flows

### Process: Farm primary conditioning (`farm_conditioning`)

#### Inputs

##### Product flows

###### Lifted roots transferred to conditioning (`conditioning_root_input`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Lifted roots transferred to conditioning
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Equal lifted_raw_roots for represented loads
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg lifted roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Internal-transfer identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg lifted roots
  - Basis: per kg lifted roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Farm conditioning energy (`conditioning_energy`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Farm conditioning energy
- Flow property / unit: Mass or energy as stated / declared unit
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered or allocated energy for topping completion, dry soil/trash removal and conveying
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1000 kg lifted roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:
- Range: Provisional conditioning-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: MJ/1000 kg lifted roots
  - Basis: per 1000 kg lifted roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Farm-conditioned roots ready for grading (`conditioned_roots`)

This independent product is an intended output quantified at the declared process boundary, has an explicit hand-off, and is reconciled with adjacent states.

- Selected flow: Farm-conditioned roots ready for grading
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Input minus separated tops/trash, rejected roots and measured loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1000 kg lifted roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_balance`
- Sources: `mass-balance-identity`
- Range: Conditioning mass-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 700
  - Upper: 1000
  - Unit: kg/1000 kg lifted roots
  - Basis: per 1000 kg lifted roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

###### Separated organic trash and rejected roots (`conditioning_rejects`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Separated organic trash and rejected roots
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Measured batch mass with field-return, recovery or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1000 kg lifted roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_balance`
- Sources:
- Range: Provisional conditioning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1000 kg lifted roots
  - Basis: per 1000 kg lifted roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Elementary flows

### Process: Grading and farm-gate hand-off (`grading_handoff`)

#### Inputs

##### Product flows

###### Conditioned roots transferred to grading (`grading_root_input`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Conditioned roots transferred to grading
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Equal conditioned_roots assigned to the delivery batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned roots
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Internal-transfer identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg conditioned roots
  - Basis: per kg conditioned roots
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sugar beet `b48c1ece-b700-4491-86bb-ff46c0a4768b` (`accepted_sugar_beet_roots`)

This independent product is an intended output quantified at the declared process boundary, has an explicit hand-off, and is reconciled with adjacent states.

- Selected flow: Sugar beet `b48c1ece-b700-4491-86bb-ff46c0a4768b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Binding: `fixed`
- Amount rule: Calibrated accepted delivery mass after tare and foreign-material correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources:
- Range: Reference-flow identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded roots sent to declared use (`downgraded_roots`)

This independent product is an intended output quantified at the declared process boundary, has an explicit hand-off, and is reconciled with adjacent states.

- Selected flow: Downgraded roots sent to declared use
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Measured downgraded mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grading input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources:
- Range: Provisional downgraded share screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg grading input
  - Basis: per kg grading input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

###### Grading-rejected roots (`grading_rejects`)

This flow is quantified at the declared process boundary and reconciled with adjacent states.

- Selected flow: Grading-rejected roots
- Flow property / unit: Mass or energy as stated / declared unit
- Amount rule: Measured reject mass linked to recovery, field return, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg grading input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources:
- Range: Provisional grading-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg grading input
  - Basis: per kg grading input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| AL-01 | all nodes | Prefer subdivision; assign each field, machine-period and batch burden once. | `mass-balance-identity` |
| AL-02 | roots and tops | Field-retained tops receive no product allocation. Intentionally collected tops use documented economic allocation with mass sensitivity. | `mass-balance-identity` |
| AL-03 | grade states | Subdivide when possible; otherwise economically allocate accepted and marketed downgraded roots. Waste receives no product allocation. | `mass-balance-identity` |
| AL-04 | rejects | Reworked material retains accumulated burden and is counted only at final hand-off. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_field_inputs | field_production | seed, nutrient, protection | invoices/logs | identity; mass; composition; area; date | issue-return/application reconciliation | kg; ha | event | crop cycle | field | sum by product and field | invoices, composition, logs |
| cp_irrigation | field_production | water | meter/pump log | meter; flow; duration; area | meter or flow×duration | m3; kg | event | season | field/source | sum events | calibration/pump test |
| cp_energy | all operating nodes | energy | meter/fuel/machine log | carrier; quantity; period; field/load | direct meter or documented allocation | L; kWh; MJ | period | full cycle | machine/site | assign once | meter and invoice reconciliation |
| cp_field_yield | field_production | roots | load and survey | lifted mass; loss sample; area | calibrated loads plus sampling | kg; ha | field | harvest | field | lifted + scaled loss | scale and sampling plan |
| cp_harvest_loss | field_production; harvest_lifting | loss | survey/balance | mass; area; damage; destination | pre/post harvest sampling | kg; ha | field | harvest | field | scale and reconcile | sample evidence |
| cp_harvest_loads | harvest_lifting | lifted roots | load tickets | gross; tare; field; date; soil correction | calibrated weighing | kg | load | campaign | field/load | corrected sum | scale certificate |
| cp_residues | harvest_lifting | tops | load/destination | mass; basis; destination | calibrated weighing | kg | load | campaign | field/destination | sum hand-offs | ticket/receiver |
| cp_conditioning_balance | farm_conditioning | roots/rejects | batch record | input; output; rejects; destination | calibrated mass balance | kg | batch | campaign | site/field | reconcile states | scales and batch sheet |
| cp_grading | grading_handoff | grades | delivery record | input; accepted; downgraded; reject; sugar; tare | scale and receiving test | kg; % | batch | delivery | batch | reconcile grades | scale, lab, receiver |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| CR-01 | normalization | field amount / same-field accepted mass × 1000 kg | input/emission; accepted mass | per reference flow | `mass-balance-identity` |
| CR-02 | water | metered m3 × density; rainfall excluded | meter/flow; density | kg irrigation | `fao-crop-yield-water-2012` |
| CR-03 | root balance | standing = lifted + field loss; input = accepted + downgraded + rejected + measured loss | linked mass records | reconciled states | `mass-balance-identity` |
| CR-04 | N2O | declared IPCC tier applied to collected N inputs | N records; factors | kg N2O | `ipcc-2019-managed-soils` |
| CR-05 | route aggregation | area-weight area intensities and accepted-mass-weight reference intensities | stratum records | production mix | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| DQ-01 | traceability | Link field, load, batch and delivery identifiers. | registers and tickets |
| DQ-02 | completeness | Cover the full cycle and reconcile all root/residue states. | completeness and balance report |
| DQ-03 | measurement | Use calibrated instruments or disclose method and uncertainty. | calibration and workbook |
| DQ-04 | route | Separate material route differences before weighting. | route register |
| DQ-05 | range maturity | Replace reasoned screens with reviewed evidence before publication-critical use. | review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| VR-01 | reference | Verify UUIDs, 1000 kg accepted roots, qualifiers and exclusions. | `mass-balance-identity` |
| VR-02 | boundary | Reject factory slicing, diffusion, sugar, pulp or molasses within the farm system. | `us-epa-sugarbeet-processing-ap42` |
| VR-03 | nutrients | At most one Product-input nutrient card per process, only set-level flow-set.agricultural-nutrient-supply v0.3.0, no group or separate N/P/K/manure/compost/lime cards. |  |
| VR-04 | routes | Verify parent, evidenced deltas, strata and weighting. | `fao-crop-yield-water-2012` |
| VR-05 | periods | Resolve each record to one field/period/load/batch and count once. | `mass-balance-identity` |
| VR-06 | outputs | Verify every hand-off, residue/waste route and allocation decision. | `mass-balance-identity` |
| VR-07 | rejects | Rejected mass has a destination and never appears in accepted output. | `mass-balance-identity` |
| VR-08 | ranges | Investigate out-of-range values; ranges do not replace foreground records. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` |
| downstream_use | Fresh sugar-beet farm supply and models adding post-gate transport/factory processing |
| allowed_use | Declared regions, crop years and route shares |
| excluded_use | Seed, fodder/table beet, factory gate, sugar, pulp or molasses |
| required_metadata | Reference qualifiers, routes, yield, quality, loss/residue destinations, allocation and evidence |
| required_quality_disclosure | Coverage, calibration, estimates, weighting, mass-balance difference and data gaps |
| update_trigger | Material change in region, route, inputs, yield/quality basis, allocation or representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-yield-water-2012` | official_guidance | FAO, *Crop yield response to water* (2012), https://www.fao.org/4/i2800e/i2800e.pdf | water and route |
| `fao-sugar-beet-white-sugar-2009` | official_guidance | FAO, *Sugar beet: white sugar* (2009), https://www.fao.org/fileadmin/user_upload/tci/docs/AH1-%28eng%29Sugar%20beet%20white%20sugar.pdf | identity, route, yield |
| `fao-land-management-root-crops` | official_guidance | FAO land-management/root-harvest guidance, https://www.fao.org/4/x5648e/x5648e0f.htm | harvest, soil, loss |
| `us-epa-sugarbeet-processing-ap42` | official_guidance | US EPA AP-42 9.10.1.2, https://www.ams.usda.gov/sites/default/files/media/Vinasse.pdf | factory exclusion |
| `usda-ers-sugarbeet-harvest-loss-2019` | dataset | USDA ERS sugarbeet harvest (2019), https://www.ers.usda.gov/data-products/chart-gallery/95396 | loss context |
| `uk-defra-sugar-beet-2024` | dataset | UK Defra, Agriculture in the UK 2024, https://www.gov.uk/government/statistics/agriculture-in-the-united-kingdom-2024/chapter-7-crops | yield/sugar context |
| `uk-nvz-nitrogen-2026` | official_guidance | UK nitrogen fertiliser guidance, https://www.gov.uk/guidance/using-nitrogen-fertilisers-in-nitrate-vulnerable-zones | N check |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil N2O |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to linked foreground records | transfers, balance, allocation |
