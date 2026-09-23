---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cassava
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fresh cassava roots at farm gate

## 1. Scope and Applicability

This PCR covers cultivated cassava (*Manihot esculenta*) storage roots delivered whole, fresh and unprocessed at the farm gate. Stem-cutting establishment, managed field growth, root lifting, and on-farm grading before the gate are foreground responsibilities. The production mix must retain the observed cultivar, edible/industrial-use class, region, field cycle and sale route. The reference excludes dried chips, flour, starch, fermented foods, peeled or waxed roots, and downstream transport or factory processing. Stem cuttings are planting inputs or separately declared intentional outputs, never root mass. Rapid deterioration and mechanical injury make harvest-to-gate time and reject mass mandatory lot observations [fao-fresh-root-handling].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cassava` |
| classification_refs | CPC 3.0 `01520` Cassava; classification is a mapping context, not the PCR identity |
| covered_products | Whole fresh cassava storage roots produced by field cultivation |
| excluded_products | Cassava chips, flour, starch, peeled, fermented, waxed or dried roots; stems and leaves as reference product |
| representative_product | Whole fresh cassava roots in the declared farm-gate market class |
| production_route | Vegetative stem-cutting establishment → field growth → root lifting → farm-gate fresh-root grading |
| market_state | Fresh, unprocessed produce; Production mix, at farm gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole fresh cassava storage roots accepted at farm gate |
| How much | 1 kg net fresh mass |
| How well | Declared cultivar and fresh-root market class, with damaged/rejected roots excluded |
| How long or cycle | Observed planting-to-lifting crop cycle and harvest-to-gate interval; attribute inputs from every calendar period crossed by that cycle once |
| reference_flow_link | `marketable_roots` output of `gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net accepted fresh roots |
| Reference product flow | Cassava `98eeec70-fa0d-41c5-967f-6b6dd000b5f7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar; geography; planting and lifting dates; crop-cycle duration; fresh-root use/market class; harvest-to-gate elapsed time; acceptance and reject criteria; moisture or water status where measured |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_fresh_mass` | reference and all root streams | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh whole roots on a consistent fresh-mass basis; exclude soil and containers, and disclose tare and moisture observations. |
| `area_to_reference` | field and harvest activities | Area | ha | Divide cycle totals by accepted farm-gate fresh-root mass; do not equate gross lifted yield to reference yield. |
| `lot_balance` | gate sorting | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile received = accepted + downgraded + rejected + measured mass discrepancy; record every category at one lot gate. |
| `cutting_count` | planting material | Count | pieces | Count live stem pieces; retain piece mass only as a separate measured conversion if used in LCA exchanges. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Land and a declared purchased or retained healthy stem-cutting stock at planting; record previous crop, retained-stem source and field age. |
| starting_condition_role | The crop cycle begins at material establishment; upstream production of purchased cuttings and other products is linked as background. |
| product_classification_scope | Whole fresh cassava roots, independent of CPC code. |
| recursive_input_rule | Retained stems from this or a prior cassava cycle are a documented internal transfer; link the producing cycle once, with no self-referential product loop. |
| upstream_dataset_requirement | Link purchased cuttings, fertilizers, crop protection, energy and supplied water to suitable upstream datasets; disclose unresolved identity. |
| disclosure | Declare crop cycle, land/irrigation regime, stem source, harvest and grade states, time to gate, and any intentional stem co-product. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `fresh_root_gate` | output boundary | Stop at whole fresh accepted roots weighed at farm gate. Include only measured in-boundary short holding and sorting. Exclude industrial drying, starch extraction, chipping, waxing and downstream transport. | `fao-fresh-root-handling` |
| `cutting_origin` | crop establishment | Treat vegetative stem pieces as planting material, track purchased versus retained supply and avoid duplicating upstream stem-production burdens. | `iita-cassava-agronomy` |
| `harvest_separation` | root lifting | Keep the lifting event separate from field management to reconcile lifted roots, unlifted losses, leaves and stems. | `fao-cassava-cultivation` |
| `grade_states` | farm-gate sorting | Distinguish accepted reference roots, downgraded usable roots and discarded roots; record each destination and harvest-to-grade delay. | `fao-fresh-root-handling` |
| `period_link` | multi-period cycle | Attribute each input and output to its crop cycle and calendar reporting period once; carry field establishment across year boundaries when needed. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field` | Cassava establishment and field growth | required | always | vegetative establishment, management and standing crop hand-off | per ha crop cycle |
| `harvest` | Root lifting and stem disposition | required | always | remove roots from standing crop and separate stems/residues | per ha harvested crop |
| `gate` | Fresh-root grading and farm-gate transfer | required | always | separate accepted, downgraded and rejected fresh roots | per tonne received roots |

### Process: Cassava establishment and field growth (`field`)

#### Inputs

##### Product flows

###### Planting stem cuttings (`stem_cuttings`)

Count sound planted stem pieces from purchased or retained material.

- Selected flow: Cassava stem cuttings
- Flow property / unit: pieces
- Amount rule: Count sound planted stem pieces from purchased or retained material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha established crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_register`
- Range: Regional planting-density example at one cutting per plant; replace with field records
  - Range role: Typical range (`typical_range`)
  - Lower: 10000
  - Upper: 15000
  - Unit: pieces/ha
  - Basis: per ha established crop; regional 10,000–15,000 plants/ha example converted at one cutting per plant; replace with field records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-cassava-cultivation`

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
- Normalization basis: per ha crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_register`
- Sources:
- Range: Consolidated nutrient-product QA screen; actual material and moisture govern
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg product/ha
  - Basis: sum of separately recorded mineral fertilizer, organic fertilizer, lime and nutrient-bearing amendment product masses per hectare crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product (`crop_protection`)

Record formulation and applied product mass by operation.

- Selected flow: Crop protection product
- Flow property / unit: kg
- Amount rule: Record formulation and applied product mass by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_register`
- Range: Provisional QA screen for product mass, not active ingredient
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg/ha
  - Basis: per ha crop cycle; Provisional QA screen for product mass, not active ingredient
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied irrigation water (`irrigation_water`)

Record metered or documented supplied irrigation volume; do not count rainfall as a purchased product.

- Selected flow: Irrigation water
- Flow property / unit: m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: Record metered or documented supplied irrigation volume; do not count rainfall as a purchased product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_register`
- Range: Provisional QA screen; zero applies when no irrigation occurs
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha
  - Basis: per ha crop cycle; Provisional QA screen; zero applies when no irrigation occurs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery liquid fuel (`field_fuel`)

Record actual fuel volume for land preparation, planting and field management.

- Selected flow: Mobile machinery fuel, actual liquid carrier
- Flow property / unit: L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Record actual fuel volume for land preparation, planting and field management
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_register`
- Range: Provisional QA screen for liquid fuels only
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: L/ha
  - Basis: per ha crop cycle; Provisional QA screen for liquid fuels only
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field electricity (`field_electricity`)

Record metered electricity for irrigation or field operation, excluding downstream processing.

- Selected flow: Electricity
- Flow property / unit: kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Record metered electricity for irrigation or field operation, excluding downstream processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_register`
- Range: Provisional QA screen; zero where no powered equipment is used
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kWh/ha
  - Basis: per ha crop cycle; Provisional QA screen; zero where no powered equipment is used
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standing cassava crop handed to harvest (`standing_crop`)

Record the cultivated area and maturity/harvest event; do not count this internal hand-off as an extra market product.

- Selected flow: Standing cassava crop
- Flow property / unit: ha
- Amount rule: Record the cultivated area and maturity/harvest event; do not count this internal hand-off as an extra market product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_register`
- Range: Identity of area transfer from field to harvest
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: ha/ha
  - Basis: per ha harvested crop; Identity of area transfer from field to harvest
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct soil nitrous oxide (`soil_n2o`)

Measure or calculate direct soil N2O from recorded N inputs and crop residues with an explicitly selected local or IPCC method.

- Selected flow: Nitrous oxide to air
- Flow property / unit: kg
- Amount rule: Measure or calculate direct soil N2O from recorded N inputs and crop residues with an explicitly selected local or IPCC method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_register`
- Sources: `ipcc-2019-soils`
- Range: Provisional screening only; not an IPCC emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg N2O/ha
  - Basis: per ha crop cycle; Provisional screening only; not an IPCC emission factor
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Root lifting and stem disposition (`harvest`)

#### Inputs

##### Product flows

###### Standing crop received (`standing_crop_input`)

Link to the same area and harvest event transferred by field production.

- Selected flow: Standing cassava crop
- Flow property / unit: ha
- Amount rule: Link to the same area and harvest event transferred by field production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_register`
- Range: Identity of area transfer to harvest
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: ha/ha
  - Basis: per ha harvested crop; Identity of area transfer to harvest
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Root lifting fuel (`harvest_fuel`)

Record actual liquid fuel used for mechanical lifting and loading when used.

- Selected flow: Mobile machinery fuel, actual liquid carrier
- Flow property / unit: L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: Record actual liquid fuel used for mechanical lifting and loading when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_register`
- Range: Provisional QA screen, conditional on mechanized route
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: L/ha
  - Basis: per ha harvested crop; Provisional QA screen, conditional on mechanized route
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Lifted fresh cassava roots (`lifted_roots`)

Weigh all lifted fresh roots as an intended output before gate sorting, including roots later rejected.

- Selected flow: Fresh cassava roots after lifting
- Flow property / unit: kg
- Amount rule: Weigh all lifted fresh roots as an intended output before gate sorting, including roots later rejected
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_register`
- Range: Broad provisional harvest QA screen; marketable yield is separately reconciled
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/ha
  - Basis: per ha harvested crop; Broad provisional harvest QA screen; marketable yield is separately reconciled
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retained planting stems (`retained_stems`)

Record weighed stems intentionally retained for the next crop as an internal transfer; marketed stems become a separate intended co-product.

- Selected flow: Cassava planting stems
- Flow property / unit: kg
- Amount rule: Record weighed stems intentionally retained for the next crop as an internal transfer; marketed stems become a separate intended co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_register`
- Range: Provisional QA screen; conditional on stem retention
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg/ha
  - Basis: per ha harvested crop; Provisional QA screen; conditional on stem retention
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Marketed planting stems as co-product (`marketed_stems`)

Weigh stems intentionally marketed as a co-product and record separate purchaser and price.

- Selected flow: Cassava planting stems
- Flow property / unit: kg
- Amount rule: Weigh stems intentionally marketed as a co-product and record separate purchaser and price
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_register`
- Range: Provisional QA screen; applies only where stems are marketed
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30000
  - Unit: kg/ha
  - Basis: per ha harvested crop; Provisional QA screen; applies only where stems are marketed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Leaves and uncollected stems left in field (`field_residue`)

Estimate or weigh nonmarket leaves and stems returned to field; do not count retained planting stems twice.

- Selected flow: Cassava field residues
- Flow property / unit: kg
- Amount rule: Estimate or weigh nonmarket leaves and stems returned to field; do not count retained planting stems twice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_register`
- Range: Provisional QA screen for wet field residue
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: kg/ha
  - Basis: per ha harvested crop; Provisional QA screen for wet field residue
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unlifted or broken roots left in field (`unlifted_loss`)

Estimate root loss in sampling plots separately from weighed lifted roots.

- Selected flow: Uncollected cassava root loss
- Flow property / unit: kg
- Amount rule: Estimate root loss in sampling plots separately from weighed lifted roots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_register`
- Range: Provisional QA screen for uncollected fresh root loss
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg/ha
  - Basis: per ha harvested crop; Provisional QA screen for uncollected fresh root loss
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Fresh-root grading and farm-gate transfer (`gate`)

#### Inputs

##### Product flows

###### Fresh lifted roots received for gate grading (`received_roots`)

Link measured mass to lifted_roots in the same lot; log lifting and grading times.

- Selected flow: Fresh cassava roots after lifting
- Flow property / unit: kg
- Amount rule: Link measured mass to lifted_roots in the same lot; log lifting and grading times
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_lot`
- Range: Provisional QA screen; must reconcile with harvest transfer
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/ha
  - Basis: per ha harvested crop; Provisional QA screen; must reconcile with harvest transfer
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Farm-gate grading electricity (`gate_electricity`)

Record metered electricity only where sorting, weighing or short holding uses power.

- Selected flow: Electricity
- Flow property / unit: kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: Record metered electricity only where sorting, weighing or short holding uses power
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne fresh roots received
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_lot`
- Range: Provisional QA screen conditional on powered handling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh/t
  - Basis: per tonne fresh roots received; Provisional QA screen conditional on powered handling
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh cassava roots at farm gate (`marketable_roots`)

Weigh accepted whole fresh roots at farm gate, with stated cultivar, use class, condition and time since lifting.

- Selected flow: Cassava `98eeec70-fa0d-41c5-967f-6b6dd000b5f7`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh accepted whole fresh roots at farm gate, with stated cultivar, use class, condition and time since lifting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per ha harvested crop
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_lot`
- Range: Broad provisional yield QA screen; actual accepted fresh-root mass governs
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg/ha
  - Basis: per ha harvested crop; broad provisional yield QA screen; actual accepted fresh-root mass governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded but usable fresh roots (`downgraded_roots`)

Weigh downgraded roots separately only when sold or handed off as an intended usable fresh-root class.

- Selected flow: Fresh cassava roots, downgraded
- Flow property / unit: kg
- Amount rule: Weigh downgraded roots separately only when sold or handed off as an intended usable fresh-root class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne fresh roots received
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_lot`
- Range: Physical partition QA screen; conditional on a downgraded market route
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/t
  - Basis: per tonne fresh roots received; Physical partition QA screen; conditional on a downgraded market route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected damaged or deteriorated roots (`rejected_roots`)

Weigh broken, spoiled or otherwise rejected roots and document destination; never relabel as marketable reference product.

- Selected flow: Rejected cassava roots
- Flow property / unit: kg
- Amount rule: Weigh broken, spoiled or otherwise rejected roots and document destination; never relabel as marketable reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne fresh roots received
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_lot`
- Range: Physical partition QA screen; not a permitted rejection rate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/t
  - Basis: per tonne fresh roots received; Physical partition QA screen; not a permitted rejection rate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_root_output` | accepted and downgraded fresh-root grades | Where both grades are sold as fresh cassava, retain their masses and values separately. Subdivide grade-specific sorting burdens first; shared upstream burdens follow the declared study allocation method. | `iso-14044` |
| `stem_coproduct` | intentionally marketed stems or leaves | Treat sold planting stems or leaves as separate intended outputs, not as root yield or waste. Avoid allocation through process subdivision where possible; otherwise use a documented causal physical relationship or, where none is defensible, farm-gate economic shares from contemporaneous quantity and price records. Run a sensitivity check. | `iso-14044` |
| `residue_burden` | discarded roots and field residues | Keep cultivation and harvest burdens with the crop system; document field return, disposal and any later recovery separately. Do not give an unverified avoided-product credit. | `iso-14044` |
| `period_attribution` | crop cycles crossing reporting years | Assign planting and management inputs to the identified harvest cycle once, track date and phase, and never allocate the same retained stem stock or asset burden to two cycles. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Every range in section 6 is a source-specific example or a deliberately broad provisional QA screen. It supplies no default exchange value or universal compliance limit; measured foreground records determine amounts. When a conditional route is absent, its amount is zero and the range does not imply use.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_register` | `field` | planting and management exchanges, standing area, direct soil N2O | field register, invoices, meter logs | field_id, cycle_id, planting_date, stem_origin, planted_pieces, material_product, product_mass, water_m3, fuel_L, electricity_kWh, N_input, residue_return, area_ha | reconcile invoices, application logs and meters with field operations; record selected N2O method | mixed | each operation | full planting-to-lifting cycle | each field | sum by field-cycle, divide by accepted root kg only after lot linkage | purchase invoices, field log, meter readings, method worksheet |
| `cp_harvest_register` | `harvest` | lifted roots, stems, residues and root loss | harvest and sample-plot logs | field_id, cycle_id, lifting_time, lifted_root_kg, retained_stem_kg, marketed_stem_kg, residue_kg, unlifted_sample_kg, fuel_L | calibrated scale and representative loss plots | kg, L, ha | each lifting event | all harvest lots | each field/harvest | reconcile harvested and unharvested fractions; avoid stem double count | scale tickets, plot design, machine log |
| `cp_gate_lot` | `gate` | fresh-root grade and elapsed time | receiving, grade and dispatch tickets | lot_id, harvest_time, receipt_time, dispatch_time, received_kg, accepted_kg, downgraded_kg, rejected_kg, grade, destination, electricity_kWh | calibrated in/out scales, visible quality checks and timestamped tickets | kg, h, kWh | each gate lot | harvest-to-dispatch | each farm gate | reconcile received and all departures by lot; combine only like market classes | scale calibration, tickets, reject reason and photos |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_normalization` | all exchanges | Exchange per kg reference = allocated cycle/lot exchange ÷ accepted fresh-root kg; use a documented allocation share when intended co-products exist. | linked cycle, lot masses and allocation share | kg-reference-normalized exchange |  |
| `gate_mass_reconciliation` | gate | discrepancy = received fresh-root kg − accepted kg − downgraded kg − rejected kg; investigate unmeasured loss or scale mismatch. | gate ticket masses | mass discrepancy |  |
| `cycle_period_linkage` | all processes | Join operation and harvest records by field/cycle and classify each by calendar period; do not duplicate a record in combined reporting. | field_id, cycle_id, dates | one cycle inventory and period trace |  |
| `soil_n2o_method` | soil emission | Select documented jurisdictional or IPCC 2019 managed-soils method and recorded nitrogen inputs; disclose factor, unit and direct/indirect scope. | fertilizer N, residue N, soil and method data | kg N2O by route | `ipcc-2019-soils` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `lot_identity` | all root streams | Use stable field, crop-cycle and lot ids across lifting, sorting and dispatch. | linked tickets |
| `root_condition` | reference product | Report cultivar, use class, damage/rejection rules, and measured time from lifting to gate. | grade sheets and timestamps |
| `mass_completeness` | harvest and gate | Explain nonzero gate discrepancy, unlifted losses and destinations of rejected roots; quantify missing observations. | weighbridge and sampling records |
| `temporal_completeness` | crop cycle | Include establishment across reporting periods and any retained-stem transfer exactly once. | dated field register |
| `source_compatibility` | upstream flows | Record region, technology and unit compatibility of linked backgrounds; list unresolved identities. | data package metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_identity` | reference flow | Require the verified cassava Product flow, Mass property and kg at the specified farm gate; reject chips, flour, starch and waxed roots as reference substitutes. |  |
| `range_review` | all flow cards | Verify each range's basis, units and evidence; treat reasoned bounds as provisional QA prompts, not hard inventory defaults. |  |
| `balance_check` | root streams | Match lifted and gate-received lots; reconcile accepted, downgraded, rejected and recorded discrepancy without double counting. |  |
| `time_to_gate` | quality | Require lifting and gate times and reject/damage criteria for each lot because fresh roots deteriorate quickly. | `fao-fresh-root-handling` |
| `coproduct_check` | stems and grades | Require intentional-output identity, hand-off, allocation shares and no double credit or double burden. | `iso-14044` |
| `period_check` | multi-period crops | Verify every planting, management, harvest and retained-stem record is assigned to one cycle and attributed once. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for whole fresh cassava roots at farm gate |
| downstream_use | `secondary_dataset`, `background_dataset` in process or lifecyclemodel assembly after review |
| allowed_use | Declared cultivar/market class, geography and crop/handling regime with compatible farm-gate boundary |
| excluded_use | Processed cassava, default planting stems, storage beyond measured farm-gate handling, unspecified fresh-root quality |
| required_metadata | crop cycle, location, cultivar, stem source, planting and harvest dates, lot grade, fresh-root use class, accepted mass and co-product method |
| required_quality_disclosure | metering and sampling coverage, gate mass balance, damage/reject fraction, time to gate, ranges used only for QA, source and allocation uncertainty |
| update_trigger | material change in cultivar, route, market class, handling time, input regime, allocation practice or source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-cassava-cultivation` | `official_guidance` | https://www.fao.org/4/x5032e/x5032e01.htm | Vegetative propagation, regional planting population and harvesting |
| `iita-cassava-agronomy` | `literature` | https://cgspace.cgiar.org/items/e78b8dc2-da35-4306-9eeb-bae56727242a | Stem-cutting health, field management and root production |
| `fao-fresh-root-handling` | `official_guidance` | https://www.fao.org/4/x5415e/x5415e04.htm | Root damage and rapid physiological deterioration after harvest |
| `fao-global-cassava-strategy` | `official_guidance` | https://www.fao.org/4/j1255e/j1255e04.htm | Context-specific fresh-root yield examples |
| `ipcc-2019-soils` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Selection and disclosure of soil N2O calculation method |
| `iso-14044` | `standard` | ISO 14044:2006, https://www.iso.org/standard/38498.html | Allocation hierarchy and study disclosure |
