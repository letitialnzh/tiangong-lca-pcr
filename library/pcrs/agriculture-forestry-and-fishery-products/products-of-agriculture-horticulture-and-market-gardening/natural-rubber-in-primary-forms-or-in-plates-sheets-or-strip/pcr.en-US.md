---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.natural-rubber-in-primary-forms-or-in-plates-sheets-or-strip
language: en-US
status: scaffold
sync_with: pcr.zh-CN.md
---

# Natural rubber in primary forms or in plates, sheets or strip

## 1. Scope and Applicability

This PCR covers natural rubber from managed rubber-tree production and latex tapping through one declared primary-processing route and its primary-processing hand-off. The permitted terminal forms are latex concentrate, ribbed smoked sheet or another declared sheet grade, crepe rubber, and technically specified rubber (TSR) or another declared block/granular primary form. Each dataset selects exactly one terminal form and route; these physically different products must not be averaged into one reference state. Synthetic rubber, rubber compounded with fillers or curatives, vulcanized rubber, reclaimed rubber, and finished rubber articles are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.natural-rubber-in-primary-forms-or-in-plates-sheets-or-strip |
| classification_refs | CPC 3.0: 01950 Natural rubber in primary forms or in plates, sheets or strip |
| covered_products | Declared natural-rubber latex concentrate, RSS or other sheet grade, crepe rubber, TSR/block/granular rubber at primary-processing hand-off |
| excluded_products | Synthetic rubber; natural/synthetic mixtures; compounded or vulcanized rubber; reclaimed rubber; adhesives; tyres, gloves and other finished articles |
| representative_product | One declared commercial natural-rubber form produced through one traceable route |
| production_route | Managed perennial rubber-tree production and tapping followed by exactly one of latex concentration, sheet/RSS, crepe, or TSR/block processing |
| market_state | Declared liquid or dry primary form, grade, dry-rubber-content or as-received basis, preservation state and primary-processing gate |

Route alternatives are mutually exclusive at the reference-flow level. Separate route inventories may coexist in one reporting package only as separately quantified datasets; aggregation requires conversion to the same physical form, grade and mass basis and is prohibited for a generic mixed-form reference product.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One declared natural-rubber primary form meeting its stated commercial grade at primary-processing hand-off |
| How much | 1 kg on the declared dry-rubber or as-received mass basis |
| How well | Route, form, grade, dry-rubber content or moisture, preservative/coagulant state, accepted-lot status and gate are declared |
| How long or cycle | Declared reporting period covering plantation attribution, tapping rounds and the processing batch or campaign producing the reference amount |
| reference_flow_link | Exactly one terminal output: `latex_concentrate_reference`, `sheet_rss_reference`, `crepe_reference`, or `tsr_block_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | natural-rubber species or clone where known; terminal form and route; commercial grade; liquid/dry state; dry-rubber-content or moisture basis; preservation or coagulation chemistry; batch/campaign; geography; hand-off gate |
| Binding | `fixed` |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether the 1 kg reference is dry-rubber mass or as-received mass. Do not combine the two bases without recorded dry-rubber content and an explicit conversion. |
| `dry_rubber_conversion` | field latex, concentrate and wet coagulum | Mass and measured dry-rubber content | kg | dry-rubber mass = as-received mass × dry-rubber mass fraction; retain test method, sampling time and batch. |
| `route_mass_balance` | every tapping and processing batch | Mass | kg | Reconcile accepted rubber, water, removed serum or moisture, off-grade rubber, retained rework and losses on one consistent basis. |
| `period_attribution` | establishment and productive years | Mass | kg | Attribute establishment, immature years, replacement and end-of-life burdens once over accepted output of the declared productive period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed rubber-tree stand with clone/species, age or productive phase, establishment carry-in and land-management history declared |
| starting_condition_role | Perennial biological production stock; establishment and replacement burdens are included or linked and attributed over the productive period |
| product_classification_scope | Natural rubber at primary-processing hand-off in one declared latex concentrate, sheet/RSS, crepe or TSR/block form |
| recursive_input_rule | Internally transferred field latex, coagulum or off-grade rubber retains upstream burdens and is not represented by a zero-burden loop; purchased same-category material requires a compatible upstream dataset |
| upstream_dataset_requirement | Purchased nutrients, water, energy, chemicals, packaging and transport services require compatible upstream datasets; Flow Sets expand to verified UUIDs from foreground records |
| disclosure | Declare plantation phase, tapping system and rounds, route, terminal form, grade, dry-rubber/moisture basis, chemistry, energy source, batch/campaign, reject/rework destination and gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_plantation` | `plantation_management` | Include managed tree establishment attribution, maintenance, nutrient and water supply, energy, pest/weed management and productive latex formation. | `fao-rubber-products-classification` |
| `boundary_tapping` | `latex_tapping_collection` | Include tapping, cup collection, field preservation when used, collection losses and delivery of measured field latex to primary processing. | `rubber-board-natural-rubber-forms` |
| `boundary_single_route` | terminal processing | Include exactly one terminal route for the reference product. Other route nodes are inactive and contribute zero burden. | `rubber-board-natural-rubber-forms` |
| `boundary_latex_concentrate` | `latex_concentration` | Include preservation, separation/concentration, stabilization, storage and accepted concentrate hand-off; do not include downstream compounding or product manufacture. | `rubber-board-natural-rubber-forms` |
| `boundary_sheet_rss` | `sheet_rss_processing` | Include straining, controlled coagulation, rolling/forming, drying or smoking, grading and sheet hand-off. | `rubber-board-natural-rubber-forms` |
| `boundary_crepe` | `crepe_processing` | Include coagulum preparation, washing, repeated milling/creping, drying, grading and crepe hand-off. | `rubber-board-natural-rubber-forms` |
| `boundary_tsr_block` | `tsr_block_processing` | Include feedstock sorting, size reduction, washing, drying, baling/block forming, grading and block hand-off. | `rubber-board-natural-rubber-forms` |
| `boundary_exclusions` | downstream system | Exclude synthetic polymer manufacture, natural/synthetic blending, compounding, vulcanization, conversion into finished articles and use/end-of-life. | `fao-rubber-products-classification` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `plantation_management` | Managed perennial rubber-tree production | `required` | Always; declare any alternative technology or biological production route delta | Managed biological production and multi-period attribution | kg dry rubber in collected field latex |
| `latex_tapping_collection` | Latex tapping, preservation and collection | `required` | Always; record tapping rounds in batch mode | Harvest/capture and primary conditioning | kg dry rubber in field latex delivered to processing |
| `latex_concentration` | Latex concentration and stabilization | `conditional` | Batch mode; only for latex-concentrate reference form | Material treatment and stabilization | 1 kg declared latex concentrate |
| `sheet_rss_processing` | Sheet forming, drying or smoking and grading | `conditional` | Batch mode; only for RSS or another declared sheet reference form | Coagulation, forming, preservation and grading | 1 kg accepted sheet/RSS |
| `crepe_processing` | Crepe preparation, milling, drying and grading | `conditional` | Batch mode; only for crepe reference form | Treatment, forming and grading | 1 kg accepted crepe rubber |
| `tsr_block_processing` | TSR/block preparation, drying, baling and grading | `conditional` | Batch mode; only for TSR/block/granular reference form | Treatment, forming and grading | 1 kg accepted TSR/block rubber |

### Process: Managed perennial rubber-tree production (`plantation_management`)

#### Inputs

##### Product flows

###### Consolidated fertilizer and nutrient supply (`plantation_nutrients`)

Record all mineral fertilizers, organic fertilizers and nutrient amendments in this one process-level card; retain product and nutrient composition in foreground records.

- Selected flow: Actual fertilizer and nutrient products
- Flow property / unit: Mass / kg or compatible nutrient property/unit
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Measured quantities attributed to the productive period
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg dry rubber delivered in field latex
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_plantation_period`
- Range: Provisional nutrient-input screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1
  - Unit: kg product/kg dry rubber
  - Basis: total fertilizer and amendment products attributed per kg dry rubber
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Plantation water supply (`plantation_water`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual supplied water product
- Flow property / unit: Volume / m3 or Mass / kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Amount rule: Measured supplied irrigation or nursery water; rainfall is not a product input
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg dry rubber delivered in field latex
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plantation_period`
- Range: Provisional supplied-water screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: m3/kg dry rubber
  - Basis: supplied water only
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Plantation energy supply (`plantation_energy`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual energy carriers and utilities
- Flow property / unit: Carrier-appropriate energy or mass unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered or invoiced energy attributed to plantation operations
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg dry rubber delivered in field latex
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_plantation_period`
- Range: Provisional energy screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg dry rubber
  - Basis: purchased energy attributed to plantation operations
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No generic waste identity is prescribed. Add a separately identified waste exchange only when foreground records establish the material, state, destination and treatment route.

##### Elementary flows

Add substance-specific land occupation/transformation, water-resource and direct-emission exchanges only from measured or modelled site records with receiving compartment and verified UUID.

#### Outputs

##### Product flows

###### Dry rubber contained in harvest-ready latex (`plantation_latex_output`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg dry rubber
- Binding: `fixed`
- Amount rule: Calculated from latex mass and tested dry-rubber content
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: process output
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_latex_batches`
- Range: Output identity range
  - Range role: `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: kg dry rubber
  - Basis: per kg dry rubber process output
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `reference-normalization-definition`

##### Waste flows

No generic waste output is prescribed.

##### Elementary flows

No generic elementary output is prescribed.

### Process: Latex tapping, preservation and collection (`latex_tapping_collection`)

#### Inputs

##### Product flows

###### Plantation latex transfer (`field_latex_input`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg dry rubber
- Binding: `fixed`
- Amount rule: Burden-carrying internal transfer from plantation production
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg dry rubber delivered to primary processing
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_latex_batches`
- Range: Internal transfer reconciliation
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1.2
  - Unit: kg dry rubber/kg delivered dry rubber
  - Basis: collected dry rubber before documented collection loss
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Aqueous ammonia for field-latex preservation (`field_latex_ammonia`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024`
- Flow property / unit: Mass / kg solution
- Binding: `fixed`
- Amount rule: Measured solution mass and concentration; zero when the declared route does not use ammonia
- Value mode: `foreground_record`
- Specificity: `route_specific`
- Normalization basis: per kg dry rubber delivered to primary processing
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_latex_batches`
- Range: Provisional preservation screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.1
  - Unit: kg solution/kg dry rubber
  - Basis: applies only when aqueous ammonia is used
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Latex collection transport service (`latex_collection_transport`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual transport service
- Flow property / unit: Transport work / tkm or compatible service unit
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Amount rule: Wet latex mass × measured route distance by mode
- Value mode: `calculated_value`
- Specificity: `route_specific`
- Normalization basis: per kg dry rubber delivered
- Basis kind: `transport_service`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_latex_batches`
- Range: Provisional collection-distance screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 2
  - Unit: tkm/kg dry rubber
  - Basis: wet-latex transport work normalized to dry rubber
  - Basis kind: `transport_service`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No generic waste identity is prescribed; rejected coagulum is either retained as a burden-carrying input to a declared dry-rubber route or recorded with its actual destination.

##### Elementary flows

No generic elementary input is prescribed.

#### Outputs

##### Product flows

###### Collected field latex delivered to processing (`collected_field_latex`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg dry rubber
- Binding: `fixed`
- Amount rule: Wet latex mass × batch dry-rubber mass fraction
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per kg dry rubber delivered
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_latex_batches`
- Range: Dry-rubber transfer identity
  - Range role: `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: kg dry rubber
  - Basis: per kg dry rubber delivered to the selected terminal route
  - Basis kind: `process_output`
  - Evidence kind: `method_formula`
  - Sources: `reference-normalization-definition`

##### Waste flows

No generic waste output is prescribed.

##### Elementary flows

No generic elementary output is prescribed.

### Process: Latex concentration and stabilization (`latex_concentration`)

#### Inputs

##### Product flows

###### Field latex for concentration (`latex_concentrate_feed`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg dry rubber
- Binding: `fixed`
- Amount rule: Burden-carrying dry-rubber mass in accepted field latex
- Value mode: `calculated_value`
- Specificity: `route_specific`
- Normalization basis: per kg dry rubber in accepted concentrate
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_processing_batch`
- Range: Provisional dry-rubber yield screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1.15
  - Unit: kg feed dry rubber/kg accepted dry rubber
  - Basis: excludes serum water mass
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Aqueous ammonia for concentrate stabilization (`concentrate_ammonia`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024`
- Flow property / unit: Mass / kg solution
- Binding: `fixed`
- Amount rule: Measured solution mass and concentration in the concentrate batch
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per kg accepted concentrate on declared basis
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_processing_batch`
- Range: Provisional stabilization screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.1
  - Unit: kg solution/kg dry rubber
  - Basis: actual solution concentration must be retained
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Concentration water supply (`concentrate_water`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual process-water product
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Amount rule: Metered water crossing the process boundary
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg accepted concentrate
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_processing_batch`
- Range: Provisional process-water screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg dry rubber
  - Basis: supplied process water
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Concentration energy supply (`concentrate_energy`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual energy carriers and utilities
- Flow property / unit: Carrier-appropriate unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered energy for concentration, pumping and storage
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per kg accepted concentrate
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_processing_batch`
- Range: Provisional energy screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg dry rubber
  - Basis: total purchased energy
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No generic waste identity is prescribed. Serum and wastewater require measured composition and actual treatment destination before exchange creation.

##### Elementary flows

No generic elementary input is prescribed.

#### Outputs

##### Product flows

###### Accepted latex concentrate (`latex_concentrate_reference`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Exactly 1 kg accepted concentrate on the declared dry-rubber or as-received basis
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Sources: `reference-normalization-definition`
- Range: Exact reference amount
  - Range role: `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: declared latex-concentrate reference basis
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `reference-normalization-definition`

##### Waste flows

No generic waste output is prescribed.

##### Elementary flows

No generic elementary output is prescribed.

### Process: Sheet forming, drying or smoking and grading (`sheet_rss_processing`)

#### Inputs

##### Product flows

###### Field latex for sheet production (`sheet_latex_feed`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg dry rubber
- Binding: `fixed`
- Amount rule: Dry-rubber mass in field latex entering coagulation
- Value mode: `calculated_value`
- Specificity: `route_specific`
- Normalization basis: per kg accepted dry sheet
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_processing_batch`
- Range: Provisional dry-rubber yield screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1.2
  - Unit: kg feed dry rubber/kg accepted sheet
  - Basis: dry-rubber mass balance
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Formic acid coagulant (`sheet_formic_acid`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Formic acid `b2fe4c3e-d4e6-40be-93ee-e47d512b8309`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Measured acid product mass and concentration; zero when another verified coagulant is declared
- Value mode: `foreground_record`
- Specificity: `route_specific`
- Normalization basis: per kg accepted dry sheet
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_processing_batch`
- Range: Provisional coagulant screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.05
  - Unit: kg product/kg dry sheet
  - Basis: actual acid concentration must be retained
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Sheet-route water supply (`sheet_water`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual process-water product
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Amount rule: Metered dilution, washing and cleaning water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg accepted dry sheet
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_processing_batch`
- Range: Provisional water screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.2
  - Unit: m3/kg dry sheet
  - Basis: supplied process water
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Sheet drying or smoking energy (`sheet_energy`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual energy carriers and utilities
- Flow property / unit: Carrier-appropriate unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered or calculated energy by declared air-dried, smoke-dried or other route
- Value mode: `calculated_value`
- Specificity: `technology_specific`
- Normalization basis: per kg accepted dry sheet
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_processing_batch`
- Range: Provisional drying-energy screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg dry sheet
  - Basis: purchased or produced energy used for drying/smoking
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No generic waste identity is prescribed. Coagulation serum, wash water and off-grade sheet require actual identities and destinations.

##### Elementary flows

No generic elementary input is prescribed.

#### Outputs

##### Product flows

###### Accepted sheet or RSS (`sheet_rss_reference`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Exactly 1 kg accepted sheet of the declared grade and moisture basis
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Sources: `reference-normalization-definition`
- Range: Exact reference amount
  - Range role: `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: declared sheet/RSS form and grade
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `reference-normalization-definition`

##### Waste flows

No generic waste output is prescribed.

##### Elementary flows

No generic elementary output is prescribed.

### Process: Crepe preparation, milling, drying and grading (`crepe_processing`)

#### Inputs

##### Product flows

###### Natural-rubber feedstock for crepe route (`crepe_feed`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg dry rubber
- Binding: `fixed`
- Amount rule: Dry-rubber mass in declared latex or coagulum feedstock
- Value mode: `calculated_value`
- Specificity: `route_specific`
- Normalization basis: per kg accepted dry crepe
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_processing_batch`
- Range: Provisional feed-yield screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1.25
  - Unit: kg feed dry rubber/kg accepted crepe
  - Basis: dry-rubber mass balance
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Crepe-route water supply (`crepe_water`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual process-water product
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Amount rule: Metered washing and milling water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg accepted dry crepe
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_processing_batch`
- Range: Provisional water screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.5
  - Unit: m3/kg dry crepe
  - Basis: supplied process water
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Crepe milling and drying energy (`crepe_energy`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual energy carriers and utilities
- Flow property / unit: Carrier-appropriate unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered energy for milling and drying
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per kg accepted dry crepe
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_processing_batch`
- Range: Provisional energy screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg dry crepe
  - Basis: total purchased energy
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No generic waste identity is prescribed. Wash water, contaminants and off-grade crepe require actual identities and destinations.

##### Elementary flows

No generic elementary input is prescribed.

#### Outputs

##### Product flows

###### Accepted crepe rubber (`crepe_reference`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Exactly 1 kg accepted crepe rubber of declared grade and moisture basis
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Sources: `reference-normalization-definition`
- Range: Exact reference amount
  - Range role: `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: declared crepe form and grade
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `reference-normalization-definition`

##### Waste flows

No generic waste output is prescribed.

##### Elementary flows

No generic elementary output is prescribed.

### Process: TSR/block preparation, drying, baling and grading (`tsr_block_processing`)

#### Inputs

##### Product flows

###### Natural-rubber feedstock for TSR/block route (`tsr_feed`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg dry rubber
- Binding: `fixed`
- Amount rule: Dry-rubber mass of separately recorded latex, cup lump or coagulum feedstock
- Value mode: `calculated_value`
- Specificity: `route_specific`
- Normalization basis: per kg accepted TSR/block rubber
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_processing_batch`
- Range: Provisional feed-yield screen
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1.3
  - Unit: kg feed dry rubber/kg accepted TSR
  - Basis: dry-rubber mass balance
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### TSR-route water supply (`tsr_water`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual process-water product
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Amount rule: Metered feedstock washing and cleaning water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per kg accepted TSR/block rubber
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_processing_batch`
- Range: Provisional water screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.5
  - Unit: m3/kg dry rubber
  - Basis: supplied process water
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### TSR size-reduction and drying energy (`tsr_energy`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual energy carriers and utilities
- Flow property / unit: Carrier-appropriate unit
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Amount rule: Metered energy for size reduction, washing, drying, pressing and baling
- Value mode: `foreground_record`
- Specificity: `technology_specific`
- Normalization basis: per kg accepted TSR/block rubber
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_processing_batch`
- Range: Provisional energy screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg dry rubber
  - Basis: total purchased energy
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Primary packaging for TSR/block rubber (`tsr_packaging`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Actual packaging products
- Flow property / unit: Mass / kg or item count
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Amount rule: Measured packaging supplied with accepted blocks; exclude reusable packaging returned outside the product system after recording its reuse rule
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per kg accepted TSR/block rubber
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_processing_batch`
- Range: Provisional packaging screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 0.1
  - Unit: kg packaging/kg dry rubber
  - Basis: packaging crossing the hand-off gate
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No generic waste identity is prescribed. Wash water, contaminants, off-grade blocks and packaging rejects require actual identities and destinations.

##### Elementary flows

No generic elementary input is prescribed.

#### Outputs

##### Product flows

###### Accepted TSR/block rubber (`tsr_block_reference`)

Record this item when the foreground process actually uses, produces or transfers it, retaining the declared route, state, batch and hand-off.

- Selected flow: Natural Rubber `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- Flow property / unit: Mass / kg
- Binding: `fixed`
- Amount rule: Exactly 1 kg accepted TSR/block/granular rubber of declared grade and moisture basis
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Sources: `reference-normalization-definition`
- Range: Exact reference amount
  - Range role: `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: declared TSR/block form and grade
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `reference-normalization-definition`

##### Waste flows

No generic waste output is prescribed.

##### Elementary flows

No generic elementary output is prescribed.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_perennial_period` | plantation establishment and replacement | Attribute establishment, immature years, replacements and terminal operations over the declared productive period and accepted dry-rubber output; disclose lifetime and yield basis and prevent double annualization. |  |
| `allocation_route_separation` | alternative terminal routes | Keep latex concentrate, sheet/RSS, crepe and TSR/block inventories separate. Do not allocate or average across forms merely because they share CPC 01950. | `rubber-board-natural-rubber-forms` |
| `allocation_internal_rubber` | field latex, coagulum, off-grade and rework | Carry prior burdens with all internal rubber transfers. Reworked material returns to the consuming batch once; downgraded sold rubber is a separately quantified product and never accepted reference output. |  |
| `allocation_serum_residues` | serum, wastewater and separated non-rubber material | Treat as residue or waste unless evidence establishes an intended co-product with a distinct function and measurable quantity; document any allocation driver before use. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_plantation_period` | `plantation_management` | perennial inputs and accepted latex output | farm log, invoice, asset and yield record | stand area; clone/species; phase; establishment inputs; nutrient products; supplied water; energy; replacements; dry-rubber output | reconcile farm records and calibrated meters/scales | native units and kg dry rubber | monthly and annual | complete declared productive period | each plantation and route | attribute period burdens once to dry-rubber output | record completeness, calibration and period reconciliation |
| `cp_latex_batches` | `latex_tapping_collection` | tapping, preservation, collection and latex transfer | tapping-round and batch log | date; plot; wet latex mass; dry-rubber test; preservative product/concentration; coagulum; loss; distance and mode | batch weighing, sampling and route log | kg, fraction, km, tkm | every tapping round/batch | all rounds supplying reported output | plot and collection route | aggregate dry-rubber mass without losing batch identity | scale/test calibration and signed transfer record |
| `cp_processing_batch` | conditional terminal route | feedstock, chemicals, water, energy, outputs and rejects | batch sheet, meter, invoice and laboratory certificate | route; feedstock state; wet/dry mass; DRC/moisture; chemicals/concentrations; water; energy; grade; accepted/rework/reject mass; packaging | direct measurement and batch mass balance | native units and kg | every batch/campaign | all batches producing reference output | each processing facility and technology | aggregate only identical terminal form, grade and basis | meter calibration, laboratory method and closed batch balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_rubber` | latex and wet coagulum | dry-rubber mass = as-received mass × dry-rubber mass fraction | measured mass; representative DRC test | kg dry rubber | `reference-normalization-definition` |
| `calc_reference_normalization` | all inventory rows | normalized amount = attributed amount ÷ accepted reference-product mass on the same basis | attributed amount; accepted mass; basis conversion | amount per kg reference flow | `reference-normalization-definition` |
| `calc_transport` | collection transport | tkm = transported wet mass in tonnes × actual distance in km; normalize by accepted reference mass | wet mass; distance; mode; accepted output | tkm/kg reference flow |  |
| `calc_period_burden` | plantation multi-period inputs | sum phase-specific burden × attribution share ÷ accepted output over corresponding productive period | phase records; service life; output; attribution driver | burden/kg dry rubber |  |
| `calc_batch_balance` | each processing batch | input dry rubber = accepted dry rubber + off-grade/rework dry rubber + measured dry-rubber loss | feed and output mass/DRC | reconciled batch balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference flow and every rubber transfer | Declare form, route, grade, basis, chemistry, gate and UUID compatibility; never substitute synthetic or compounded rubber. | product certificate, batch record and identity audit |
| `dq_route_completeness` | process map | Exactly one terminal route is active; inactive routes have no exchanges or burden. | route declaration and process graph |
| `dq_mass_basis` | liquid and wet materials | Retain as-received mass, DRC/moisture, test method and sampling time; conversions are reproducible. | laboratory certificate and calculation record |
| `dq_temporal` | plantation and processing | Cover establishment attribution, all tapping rounds and every processing batch contributing to output. | period and batch completeness report |
| `dq_mass_balance` | tapping and processing | Reconcile rubber mass by batch; investigate differences beyond the declared site tolerance. | signed mass-balance record |
| `dq_binding` | all inventory cards | Parameterized cards resolve to verified concrete UUIDs at foreground generation; fixed UUIDs retain detail-read evidence and matching role/property. | Flow Set expansion record or detail audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Require Natural Rubber UUID, Mass property/unit group and every required qualifier; reject synthetic, blended, compounded, vulcanized, reclaimed or finished-rubber products. | `fao-rubber-products-classification` |
| `validate_one_terminal_form` | process map and reference link | Exactly one of latex concentrate, sheet/RSS, crepe or TSR/block terminal nodes supplies the reference flow. | `rubber-board-natural-rubber-forms` |
| `validate_basis_conversion` | wet and dry states | Require measured DRC/moisture and explicit conversion before combining or comparing mass bases. | `reference-normalization-definition` |
| `validate_nutrient_cardinality` | plantation inputs | At most one fertilizer/nutrient Product-input card is present in the process and it binds set-level `flow-set.agricultural-nutrient-supply` version `0.3.0` without group. |  |
| `validate_fixed_bindings` | fixed cards | Natural Rubber, Formic acid and Aqueous ammonia use only their detail-confirmed UUIDs and compatible Mass property; do not infer quantity evidence from identity verification. |  |
| `validate_rework_reject` | off-grade or rejected rubber | Declare rework, downgrade/recovery or discard destination; count retained rework once and exclude all nonaccepted rubber from reference output. |  |
| `validate_period_attribution` | plantation burdens | Require phase, productive life, accepted yield and attribution evidence; fail omitted or duplicated establishment burden. |  |
| `validate_batch_balance` | each terminal route | Reconcile feed dry rubber to accepted, rework/off-grade and loss; keep batches and routes traceable. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for one declared natural-rubber primary form at primary-processing hand-off |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and geography, time, grade and technology matching |
| allowed_use | Upstream natural-rubber supply for LCA where terminal form, grade, mass basis and gate match |
| excluded_use | Generic mixture of forms; synthetic/blended/compounded/vulcanized/reclaimed rubber; finished rubber articles; downstream conversion without added processes |
| required_metadata | species/clone where known; plantation phase; tapping system; route; form; grade; DRC/moisture; chemistry; batch/campaign; geography; gate; reject/rework destination |
| required_quality_disclosure | route and period coverage; mass-basis conversion; provisional ranges; meter/test quality; mass-balance closure; Flow Set expansion; fixed-identity evidence |
| update_trigger | Change in product form, grade, mass basis, route topology, preservation/coagulation technology, gate, reference UUID, Flow Set version or classification scope |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-rubber-products-classification` | `official_guidance` | Food and Agriculture Organization of the United Nations, rubber-products classification material, https://www.fao.org/4/x2613e/x2613e2w.htm | Category boundary including natural latex, sheets/crepes and technically specified primary forms; exclusion of downstream rubber products |
| `rubber-board-natural-rubber-forms` | `official_guidance` | Rubber Board, natural-rubber grades and forms guidance, https://www.rubberboard.gov.in/rbfilereader?fileid=1013 | Distinct latex concentrate, RSS, TSR and related market forms; route and grade declaration |
| `reference-normalization-definition` | `method_factor` | This PCR's 1 kg declared-form normalization, DRC conversion and rubber-mass balance | Reference amount, exact-output ranges and calculation formulas |
