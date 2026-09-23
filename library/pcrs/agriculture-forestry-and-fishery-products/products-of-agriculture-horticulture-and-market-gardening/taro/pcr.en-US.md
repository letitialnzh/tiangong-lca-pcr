---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.taro
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fresh taro corms and cormels at farm gate

## 1. Scope and Applicability

This PCR covers cultivated *Colocasia esculenta* corms and cormels delivered fresh and unprocessed at farm gate. It includes vegetative establishment, upland or wetland cultivation, lifting, field trimming, optional washing, and grading. It excludes *Xanthosoma* yautia/tannia, other aroids, leaves as reference product, processed taro, curing, extended storage, and downstream packing or transport.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.taro |
| classification_refs | CPC 3.0: 01550 Taro |
| covered_products | Fresh edible *Colocasia esculenta* main corms and lateral cormels, including declared dasheen and eddoe market types |
| excluded_products | *Xanthosoma* yautia/tannia; giant taro; taro leaves as reference product; cooked, dried, milled, peeled or otherwise processed taro |
| representative_product | Sound whole fresh taro corms or cormels meeting the declared grade |
| production_route | Managed upland or wetland cultivation, lifting, field conditioning and grading; each dataset declares its water-management route |
| market_state | Fresh, unprocessed produce in bulk at farm gate, with washing state and soil tolerance declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted whole fresh taro corms or cormels at farm gate |
| How much | 1,000 kg net fresh mass |
| How well | Declared cultivar/type, corm/cormel class, grade, damage tolerance, soil tolerance and washing state |
| How long or cycle | One identified crop cycle and its linked harvest and gate lots |
| reference_flow_link | `taro_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Taro `e510909a-6352-44e7-b616-336d7fd10549` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | *Colocasia esculenta* identity; cultivar/type; corm/cormel class; upland/wetland route; fresh-mass basis; grade; washing state; farm-gate location; crop-cycle and lot identifiers |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_fresh_mass` | taro streams | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net fresh mass at the stated node; exclude containers and loose soil and report washing state. |
| `field_area` | production and harvest | Area | ha | Record cultivated and harvested hectares separately and link field, harvest and gate lots before normalization. |
| `nutrient_basis` | nutrients | Mass of nutrient | kg N, kg P2O5, kg K2O | Record product mass and nutrient content; do not mix elemental and oxide conventions. |
| `water_route` | water | Volume | m3 | Separate managed water from effective rainfall and disclose wetland flooding duration. |
| `gate_balance` | conditioning | Mass | kg | Reconcile received = accepted + downgraded + rejected + debris + explained discrepancy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared land plus declared healthy corms, cormels, suckers, headsetts or acclimatized plants ready for establishment. |
| starting_condition_role | The crop cycle begins when planting material and managed inputs enter the field; purchased inputs link to upstream datasets. |
| product_classification_scope | Whole fresh *Colocasia esculenta* corms and cormels independent of classification code. |
| recursive_input_rule | Retained taro propagules transfer from an identified prior lot or nursery once; do not create a self-referential reference-product loop. |
| upstream_dataset_requirement | Link planting material, amendments, fertilizers, crop protection, fuel, energy and supplied water to compatible upstream datasets; disclose unresolved identities. |
| disclosure | Declare cultivar/type, propagule form and origin, upland/wetland route, crop cycle, harvest method, conditioning steps, grade states, co-products and rejected destinations. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `fresh_farm_gate` | output boundary | Stop at accepted whole fresh corms/cormels ready for farm-gate dispatch; exclude curing, extended storage, processing, retail packing and downstream transport. | `fao-edible-aroids`; `uf-ifas-root-crops` |
| `route_separation` | cultivation | Model upland and wetland cultivation as alternative routes under one managed-production parent; do not average water or field emissions without documented representative shares. | `fao-qdp-taro`; `icar-water-2022` |
| `harvest_handoff` | lifting | Separate standing crop from lifted corms so damage, unlifted material and residues are captured before conditioning. | `fao-edible-aroids` |
| `conditioning_handoff` | trimming and washing | Create a conditioning node and record water, debris, wastewater, rejects and prepared output; washing is conditional. | `uf-ifas-root-crops` |
| `grade_destinations` | grading | Declare accepted, downgraded-edible and rejected states and hand-offs; rejected material cannot enter reference output. | `fao-edible-aroids` |
| `single_cycle_attribution` | time | Attribute records to one crop cycle; no storage carry-over is inside the declared farm-gate boundary. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field` | Taro establishment and managed production | required | always | managed biological production with an upland/wetland route delta and standing-crop hand-off | per ha crop cycle |
| `harvest` | Corm and cormel lifting | required | always | remove edible underground organs and identify residues and losses | per ha harvested field |
| `condition` | Primary conditioning and grading | required | always; washing input conditional | trim, optionally wash, grade and transfer accepted fresh taro | per 1,000 kg accepted output |

### Process: Taro establishment and managed production (`field`)

#### Inputs

##### Product flows

###### Vegetative planting material (`planting_material`)

Healthy vegetative propagules cross into the managed field at establishment.

- Selected flow: Taro planting material
- Flow property / unit: Mass / kg
- Amount rule: Measured planted fresh mass; record propagule form and count separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha established taro crop in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Sources: `tnau-taro-guide`; `fao-qdp-taro`
- Range: Regional planting-material examples
  - Range role: Typical range (`typical_range`)
  - Lower: 700
  - Upper: 1200
  - Unit: kg/ha
  - Basis: planting-material fresh mass per ha established crop in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `tnau-taro-guide`; `tnau-colocasia-lecture`

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
- Normalization basis: per ha managed field in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Sources: `tnau-taro-guide`; `icar-taro-bulletin`; `fao-qdp-taro`
- Range: Aggregate as-applied nutrient-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg product/ha
  - Basis: aggregate as-applied product mass per ha managed field in one crop cycle; retain nutrient analyses separately
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `tnau-taro-guide`; `icar-taro-bulletin`; `fao-qdp-taro`

###### Managed irrigation water (`irrigation_water`)

Managed irrigation crosses the field boundary only when supplied by the operator.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Metered or calculated managed water delivered; rainfall is excluded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per ha managed field in one crop cycle; zero allowed for rainfed production
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Sources: `icar-water-2022`; `fao-qdp-taro`
- Range: Upland water-budget QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6280
  - Unit: m3/ha
  - Basis: managed irrigation per ha crop cycle; the cited upper comparison is total water requirement including effective rainfall
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `icar-water-2022`

###### Field fuel (`field_fuel`)

Fuel used by cultivation and water-management equipment crosses the field boundary.

- Selected flow: Field machinery fuel
- Flow property / unit: Volume / L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Fuel tickets or equipment hours multiplied by measured consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per ha managed field in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_cycle`
- Range: Provisional field-fuel screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 300
  - Unit: L/ha
  - Basis: broad replaceable estimate per ha managed field in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mature standing taro crop (`standing_crop`)

The managed-production node hands the harvestable standing crop to the lifting node.

- Selected flow: Mature standing taro crop
- Flow property / unit: Mass / kg
- Amount rule: Harvested mass plus sampled unlifted and damaged mass attributed to the field
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested field in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot`
- Sources: `fao-edible-aroids`; `icar-water-2022`
- Range: Reported taro yield context
  - Range role: Typical range (`typical_range`)
  - Lower: 4000
  - Upper: 21080
  - Unit: kg/ha
  - Basis: harvestable fresh corm/cormel mass per ha crop cycle in cited contexts
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-edible-aroids`; `icar-water-2022`

##### Waste flows

##### Elementary flows

###### Direct soil nitrous oxide (`direct_soil_n2o`)

Direct managed-soil N2O is calculated from recorded nitrogen inputs and the declared method.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O-N
- Amount rule: Applicable nitrogen input multiplied by selected direct-emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg applicable nitrogen input in the field cycle
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_field_cycle`
- Sources: `ipcc-2019-soils`
- Range: Aggregated IPCC EF1 uncertainty interval
  - Range role: Allowed range (`allowed_range`)
  - Lower: 0.002
  - Upper: 0.018
  - Unit: kg N2O-N/kg N input
  - Basis: direct N2O-N per kg applicable nitrogen input under aggregated Tier 1
  - Basis kind: N input (`n_input`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2019-soils`

### Process: Corm and cormel lifting (`harvest`)

#### Inputs

##### Product flows

###### Mature standing crop received (`standing_crop_input`)

The lifting node receives the field-specific standing crop without changing its measurement basis.

- Selected flow: Mature standing taro crop
- Flow property / unit: Mass / kg
- Amount rule: Equal to linked `standing_crop` output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested field in one crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot`
- Range: Standing-crop linkage range
  - Range role: Typical range (`typical_range`)
  - Lower: 4000
  - Upper: 21080
  - Unit: kg/ha
  - Basis: linked fresh corm/cormel mass per ha crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-edible-aroids`; `icar-water-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Lifted fresh corms and cormels (`harvested_corms`)

Lifted fresh corms and cormels leave harvest for farm-gate conditioning.

- Selected flow: Lifted fresh taro corms and cormels
- Flow property / unit: Mass / kg
- Amount rule: Calibrated mass before trimming or washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested field
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`
- Sources: `fao-edible-aroids`
- Range: Reported fresh harvest context
  - Range role: Typical range (`typical_range`)
  - Lower: 4000
  - Upper: 21080
  - Unit: kg/ha
  - Basis: lifted fresh corm/cormel mass per ha harvested field
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-edible-aroids`; `icar-water-2022`

##### Waste flows

###### Field residues and harvest loss (`harvest_loss`)

Incidental plant material and unlifted or damaged corm tissue are recorded separately from intended output.

- Selected flow: Taro residues and harvest loss
- Flow property / unit: Mass / kg
- Amount rule: Measured or sampled leaves, petioles, roots and unmarketable/unlifted corm tissue by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg mature standing corm/cormel mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`
- Sources: `fao-edible-aroids`
- Range: Provisional residue-and-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg/t
  - Basis: wet residues and harvest loss per 1,000 kg mature standing corm/cormel mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Field conditioning and grading (`condition`)

#### Inputs

##### Product flows

###### Lifted taro received (`harvested_corms_input`)

The conditioning node receives and weighs every linked harvest lot before trimming or grading.

- Selected flow: Lifted fresh taro corms and cormels
- Flow property / unit: Mass / kg
- Amount rule: Calibrated received mass linked to harvest lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate taro
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional received-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1400
  - Unit: kg/t
  - Basis: lifted fresh taro received per 1,000 kg accepted output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Washing water (`wash_water`)

Washing water enters only when the declared conditioning route includes washing.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Amount rule: Metered washing water; zero for dry-brushed or unwashed routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate taro
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional washing-water screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg/t
  - Basis: washing water per 1,000 kg accepted output; inactive washing route equals zero
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted farm-gate taro (`taro_gate_output`)

Accepted whole fresh taro is the intended output and reference product after grade separation.

- Selected flow: Taro `e510909a-6352-44e7-b616-336d7fd10549`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: Fixed reference amount of accepted net fresh taro
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate taro
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg/t
  - Basis: accepted fresh taro per 1,000 kg reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded edible taro (`downgraded_taro`)

Edible lower-grade taro is a separate intended output with a declared non-reference market hand-off.

- Selected flow: Downgraded fresh taro
- Flow property / unit: Mass / kg
- Amount rule: Measured downgraded fresh mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg received lifted taro
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional downgrade screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg/t
  - Basis: downgraded edible taro per 1,000 kg received lifted taro
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Conditioning rejects and debris (`conditioning_rejects`)

Rejected corms, removed soil and trimming debris leave through declared return, recovery or disposal paths.

- Selected flow: Rejected taro, removed soil and trimming debris
- Flow property / unit: Mass / kg
- Amount rule: Measured separated mass by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg received lifted taro
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lot`
- Sources: `fao-edible-aroids`
- Range: Provisional reject-and-debris screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/t
  - Basis: rejected taro, soil and trimming debris per 1,000 kg received lifted taro
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Washing wastewater (`wash_wastewater`)

Wastewater leaves only when washing occurs and is reconciled to supplied water.

- Selected flow: Taro washing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or water balance; zero when washing is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted farm-gate taro
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lot`
- Range: Provisional wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg/t
  - Basis: wastewater per 1,000 kg accepted output; inactive washing route equals zero
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide_routes` | upland and wetland production | Subdivide water-management routes before allocation; do not hide different flooding, irrigation or emission profiles. | `iso-14044` |
| `intended_outputs` | marketed leaves, planting material or other intentional outputs | Record every intended output and hand-off. Prefer subdivision; otherwise use a documented causal physical relation or contemporaneous farm-gate economic shares with sensitivity analysis. | `iso-14044` |
| `grade_outputs` | accepted and downgraded edible taro | Retain separate masses, grades, destinations and revenues; allocate shared burdens only after feasible subdivision. | `iso-14044` |
| `reject_routing` | rejected or returned material | Keep prior burdens with rejects until declared boundary exit; if material is returned upstream to the managed field, link that loop explicitly, otherwise record recovery or disposal without unverified avoided-product credit. | `iso-14044` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Ranges are source-context examples or broad provisional QA screens; foreground records determine exchanges. Conditional washing and irrigation ranges impose no amount when inactive.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle` | `field` | establishment, nutrients, water, fuel and emissions | field register, invoices, meter, method worksheet | field_id, cycle_id, route, area_ha, propagule_type, propagule_kg, input_kg, nutrient_fraction, water_m3, rainfall_mm, flooding_days, fuel_L, N_input_kg, emission_factor | reconcile dated applications, invoices and meters; retain route and nutrient basis | mixed | each operation | full crop cycle | each field/route | sum by field-cycle and route; calculate nutrients and emissions once | invoices, meters, logs, factor citation |
| `cp_harvest_lot` | `harvest` | standing crop, lifted product, residues and loss | harvest ticket and sample plots | field_id, cycle_id, lot_id, area_ha, lifted_kg, unlifted_kg, damaged_kg, residue_kg | calibrated scales and representative plots | kg, ha | each harvest | all harvests | each field/lot | reconcile standing, lifted and loss states before gate linkage | calibration and plot design |
| `cp_conditioning_lot` | `condition` | received, water, grades and rejects | receiving, water, grade and dispatch ticket | lot_id, harvest_lot, received_kg, water_kg, accepted_kg, downgraded_kg, rejected_kg, wastewater_kg, debris_kg, destination | calibrated scales and water meter; timestamped grade records | kg | each lot | receipt to dispatch | each gate lot | reconcile all input/output states; aggregate only like grades/routes | calibration, tickets, reject reason, destination |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_normalization` | all exchanges | Allocated exchange per 1,000 kg reference = allocated cycle or lot exchange / accepted fresh mass × 1,000. | linked cycle, lot, accepted mass and allocation share | reference-normalized exchange | `mass-balance-identity` |
| `nutrient_conversion` | fertilizer nutrients | Nutrient kg = product kg × declared nutrient fraction, preserving N, P2O5 and K2O conventions. | invoice, analysis and application records | kg nutrient by cycle |  |
| `direct_n2o` | managed soil | N2O-N = applicable N × selected EF1; N2O = N2O-N × 44/28 when an N2O-mass flow is used. | nitrogen, route and factor | kg N2O-N and N2O | `ipcc-2019-soils` |
| `harvest_balance` | harvest | Standing corm mass = lifted + sampled unlifted and damaged mass; disclose sampling uncertainty. | field and harvest records | standing crop and loss | `mass-balance-identity` |
| `gate_reconciliation` | conditioning | discrepancy = received − accepted − downgraded − rejects/debris; reconcile wastewater separately to supplied water. | conditioning records | lot discrepancy | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `botanical_identity` | reference product | Confirm *Colocasia esculenta* and distinguish it from *Xanthosoma* and other aroids. | cultivar/supplier record or inspection |
| `route_identity` | field | State upland or wetland route, flooding days, irrigation and rainfall separately. | field and water records |
| `lot_traceability` | product streams | Link field, cycle, harvest lot and conditioning lot through every grade and reject. | linked tickets |
| `mass_completeness` | harvest/conditioning | Explain discrepancies and quantify losses, debris and rejects with destinations. | scales and sampling evidence |
| `range_context` | ranges | Preserve source geography/technology; use ranges for QA and replace provisional estimates with reviewed evidence. | QA worksheet and source review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_identity` | reference flow | Require the verified generic Taro Product flow, Mass and kg at fresh farm gate; reject regional branded or processed substitutes. |  |
| `route_validation` | field | Require upland or wetland route per field-cycle, or documented shares; validate water and emission treatment against it. | `fao-qdp-taro`; `icar-water-2022` |
| `range_validation` | all flow cards | Check role, bounds, unit, denominator, basis kind, evidence and sources; provisional ranges are replaceable screens. |  |
| `harvest_validation` | lifting | Reconcile standing crop, lifted corms, loss and residues and require every state hand-off. | `fao-edible-aroids` |
| `grade_validation` | conditioning | Reconcile received, accepted, downgraded, rejects/debris and discrepancy; rejected material cannot be accepted output. | `mass-balance-identity` |
| `coproduct_validation` | non-reference intended outputs | Require identity, amount, destination and allocation method for marketed leaves, planting material or other outputs. | `iso-14044` |
| `reject_path_validation` | off-grade/rejected material | Link downgrade, return, recovery or disposal to its producing node without double credit. | `iso-14044` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for whole fresh taro corms/cormels at farm gate |
| downstream_use | `secondary_dataset`, `background_dataset` in process or lifecyclemodel assembly after review |
| allowed_use | Declared *Colocasia esculenta* identity, geography, crop cycle, upland/wetland route, grade and conditioning state |
| excluded_use | Other aroids; leaves as reference product; processed taro; curing, extended storage, retail packing or unspecified route |
| required_metadata | botanical identity, cultivar/type, corm/cormel class, cycle ids, propagule origin, route, dates, washing state, grade, accepted mass, co-products and allocation |
| required_quality_disclosure | measurement coverage, water balance, nutrient convention, emission method, mass balances, reject paths, provisional ranges, sampling and allocation uncertainty |
| update_trigger | change in cultivar/type, water route, propagule system, harvest/conditioning technology, grade, co-product treatment, emission method or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-edible-aroids` | `official_guidance` | https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Edible_aroids.pdf | Identity, duration, regional yield, lifting and handling |
| `fao-qdp-taro` | `official_guidance` | https://www.fao.org/4/i1195e/i1195e00.pdf | Planting material, field management, nutrients and irrigation |
| `tnau-taro-guide` | `extension_guidance` | https://www.agritech.tnau.ac.in/pdf/HORTICULTURE.pdf | Regional planting, amendment and fertilizer examples |
| `tnau-colocasia-lecture` | `extension_guidance` | https://eagri.org/eagri50/HORT281/lec25.html | Regional planting-material quantity |
| `icar-taro-bulletin` | `handbook` | https://www.ctcri.org/public/publications/2025-01/3.taro_.pdf | Regional nutrient and amendment examples |
| `icar-water-2022` | `literature` | https://agris.fao.org/search/en/records/67598e52c7a957febdfc0df2 | Upland water requirement and cormel yield |
| `uf-ifas-root-crops` | `extension_guidance` | https://ask.ifas.ufl.edu/publication/CV300 | Route identity, lifting, washing and sorting |
| `ipcc-2019-soils` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil N2O method and EF1 range |
| `iso-14044` | `standard` | ISO 14044:2006, https://www.iso.org/standard/38498.html | Allocation hierarchy |
| `mass-balance-identity` | `method_factor` | Conservation of mass for linked foreground nodes | Normalization and reconciliation |
