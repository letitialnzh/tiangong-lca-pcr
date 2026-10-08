---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.mules-and-hinnies
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mules and hinnies

## 1. Scope and Applicability

This PCR covers a living mule or hinny at its actual breeder, rearer or seller-producer handover. A mule is offspring of a horse mare and donkey jack; a hinny is offspring of a donkey jenny and horse stallion. The maternal species changes gestation, nursing, maternal feed, water and manure activity, so these are distinct managed-production routes. The routes are mutually exclusive per offspring but may coexist as separately tracked cohorts. Record verified parent species and sex, hybrid type, age/class, head count, measured live mass and real gate. Parent horses and asses are not the reference good. Exclude slaughter, meat, carcasses and delivered draft or transport service. Purchased hybrid young stock retains upstream burden. FAO equine guidance establishes these parentage and husbandry distinctions (`fao-equine-1994`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.mules-and-hinnies` |
| classification_refs | CPC 3.0 `02133`, Mules and hinnies |
| covered_products | Living horse–ass hybrid mule or hinny at observed producer handover |
| excluded_products | Parent horse or ass, carcass, meat, slaughter and work service |
| representative_product | Accepted live hybrid with declared type and class, measured in kg live mass |
| production_route | Parent management and mating → foaling/nursing → optional growth → independent live selection/handover; or purchased hybrid young stock → growth → handover |
| market_state | Living and unprocessed; type, class, count, live mass, condition and gate stated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living mule or hinny of declared type at actual producer handover |
| How much | 1 kg weighed accepted live mass, reconciled with animal count |
| How well | Verified mare/jack or jenny/stallion parentage, type, age/class and condition |
| How long or cycle | State breeding, gestation, nursing, growth and handover periods actually included; no universal cycle length |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Living mules and hinnies at actual producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | mule or hinny; verified parent species/sex; age/class; count; measured live mass; condition; actual gate; production period |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | reference and live transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh live animals at each real gate and reconcile lot mass with identified head count. |
| `stock_balance` | each hybrid route | Mass and count | kg; head | Reconcile opening, birth/purchase, transfers, deaths, sales and closing stock by period; do not double-count a transfer. |
| `parent_service` | parent cohorts | animal-days and resource quantities | head-day; kg | Assign actual gestation/nursing to mare or jenny and allocate sire/shared-parent service by recorded use. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

Include upstream purchased animals, feed, forage, water, bedding, electricity, fuel, care materials and services where used, together with parental management, mating, gestation, foaling, nursing, hybrid growth, manure handling, selection and actual live handover. Declare grazing rather than treating it as purchased feed. Attribute shared stables, water infrastructure and equipment once across nodes and periods. Saleable parent culls or manure are independent products only with actual handover; otherwise stock change, residue or waste. Do not claim a hybrid breeding-parent output or universal infertility outcome. Mating/gestation is managed biological production; birth and surviving-foal transfer are independent because they establish a live output with a measured handoff, while final selection is an independent acceptance gate (`fao-equine-1994`).

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Opening parent and hybrid stock by species/type, age/class, ownership, count, mass and period; identify purchased stock and first foreground stage. |
| starting_condition_role | Declared foreground start, not zero-burden acquisition. |
| product_classification_scope | Living horse–ass hybrids only; parent animals keep their own upstream identities. |
| recursive_input_rule | Purchased mule/hinny young stock carries one upstream dataset to its purchase gate; do not recursively count earlier growth twice. |
| upstream_dataset_requirement | Purchased animals, feed, materials, utilities and services need compatible upstream datasets or disclosed gaps. |
| disclosure | Maternal route, actual gate, periods, animal ledger, upstream coverage, co-products and shared-asset attribution. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_identity` | all routes | Only living horse–ass hybrids enter the reference output; horse, ass and work-service identities cannot substitute. | `fao-equine-1994` |
| `boundary_maternal_route` | breeding | Record mare × jack or jenny × stallion as mutually exclusive per offspring, with actual maternal inputs and periods. | `fao-equine-1994` |
| `boundary_gate` | handover | End at observed live acceptance and exclude downstream work, transport service and slaughter. | `fao-equine-1994` |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `parents` | Manage parents and mate species-identified pair | conditional | Foreground breeding | Maternal gestation and sire service, split by route | per kg surviving hybrid young leaving birth stage |
| `birth` | Foal, nurse and transfer live hybrid young | conditional | Foreground birth/nursing | Independent live birth and acceptance, losses distinguished | per kg surviving hybrid young transferred |
| `growth` | Rear hybrid young | conditional | Foreground growth, including purchased stock | Managed growth, resources and manure | per kg living hybrid leaving growth |
| `handover` | Select, weigh and hand over living hybrid | required | Every route | Independent acceptance and true producer gate | per kg accepted live hybrid at gate |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

The `parents` managed-biological node has two evidenced alternatives: mare gestation/nursing for mules versus jenny gestation/nursing for hinnies. This changes maternal activity, ration, manure, period and cohort checks, not just a route label. Different cohorts can coexist at a site but never within one offspring. Birth/transfer and final acceptance are independent collection nodes with distinct live-state handoffs and possible loss. Assign shared stable, pasture, water systems and equipment by actual animal-days, area-time or metered use over the relevant periods; do not book one asset at multiple nodes. Parent culls and independently sold manure are conditional co-products, while deaths and disposed manure are not.

### Process: Manage parents and mate species-identified pair (`parents`)

#### Inputs

##### Product flows

###### Parent animal or mating service acquired (`parent_input`)

Document horse/ass species, sex, ownership and upstream burden; neither parent is the hybrid product.

Denominator and scope requirements：per kg surviving hybrid young leaving birth stage

Raw quantity and calculation requirements: recorded acquisition or service attributable to hybrid cohort Original collection denominator kind: process_output.

- Selected flow: Parent animal or mating service by actual species (UUID unresolved)
- Flow property / unit: Mass or service / kg or declared service unit
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Provisional non-negative acquisition screen, not a default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg surviving young; service separately
  - Basis: per kg surviving hybrid young leaving birth stage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Maternal and sire feed (`parent_feed`)

Separate mare from jenny gestation/nursing records and attribute shared sire care by actual service.

Denominator and scope requirements：per kg surviving hybrid young leaving birth stage

Raw quantity and calculation requirements: delivered feed less stock change and loss by parent cohort and period Original collection denominator kind: process_output.

- Selected flow: Equine feed and forage by actual material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Range: Provisional feed completeness screen, not a ration factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg surviving young
  - Basis: per kg surviving hybrid young leaving birth stage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Parent water supply (`parent_water`)

Meter or record drinking and care water by actual use and parent cohort.

Denominator and scope requirements：per kg surviving hybrid young leaving birth stage

Raw quantity and calculation requirements: measured water by use and period Original collection denominator kind: process_output.

- Selected flow: Supplied water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional water completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg surviving young
  - Basis: per kg surviving hybrid young leaving birth stage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Parent housing and care energy (`parent_energy`)

Record only actually consumed electricity and fuel by carrier, meter and service period; select concrete carrier later.

Denominator and scope requirements：per kg surviving hybrid young leaving birth stage

Raw quantity and calculation requirements: metered or invoiced energy attributed to parent cohort Original collection denominator kind: process_output.

- Selected flow: Energy supply (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional energy completeness screen, not an energy default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/kg surviving young
  - Basis: per kg surviving hybrid young leaving birth stage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Maternal care transferred to birth stage (`maternal_service`)

Carry measured gestation and nursing service once to the appropriate mule or hinny cohort; no parent animal sale is implied.

Denominator and scope requirements：per kg surviving hybrid young leaving birth stage

Raw quantity and calculation requirements: actual maternal animal-days and resource attribution Original collection denominator kind: process_output.

- Selected flow: Internal maternal animal service (UUID unresolved)
- Flow property / unit: Service / head-day
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Provisional service-accounting screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: head-day/kg surviving young
  - Basis: per kg surviving hybrid young leaving birth stage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Parent manure to actual handling (`parent_manure`)

Record actual manure management path; manure independently sold is a product, not this waste.

Denominator and scope requirements：per kg surviving hybrid young leaving birth stage

Raw quantity and calculation requirements: measured or documented path-specific mass Original collection denominator kind: process_output.

- Selected flow: Equine manure to documented handling (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional manure completeness screen, not a species factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg surviving young
  - Basis: per kg surviving hybrid young leaving birth stage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Parent enteric methane to air (`parent_enteric_ch4`)

Calculate only when parent animal-days, productivity and compatible equine method are documented; specify methane substance and air destination. This is not a fixed species factor.

Denominator and scope requirements：per kg surviving hybrid young leaving birth stage

Raw quantity and calculation requirements: documented parent animal activity × compatible route-specific enteric factor Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative investigation screen, not an emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg surviving young
  - Basis: per kg surviving hybrid young leaving birth stage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Parent manure methane to air (`parent_manure_ch4`)

Calculate methane only for documented parent manure pathway, animal activity and climate; keep enteric and manure methane separate.

Denominator and scope requirements：per kg surviving hybrid young leaving birth stage

Raw quantity and calculation requirements: documented parent manure activity × compatible path-specific CH4 method Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative investigation screen, not an emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg surviving young
  - Basis: per kg surviving hybrid young leaving birth stage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Parent manure nitrous oxide to air (`parent_manure_n2o`)

Calculate only for observed manure nitrogen and management path, avoiding duplicate emissions in an upstream treatment dataset.

Denominator and scope requirements：per kg surviving hybrid young leaving birth stage

Raw quantity and calculation requirements: observed manure nitrogen × climate/path-compatible N2O method Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative investigation screen, not an emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg surviving young
  - Basis: per kg surviving hybrid young leaving birth stage
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Foal, nurse and transfer live hybrid young (`birth`)

#### Inputs

##### Product flows

###### Foaling and nursing materials (`birth_supplies`)

Only actual bedding, veterinary and other consumed supplies are included; route and period are recorded.

Denominator and scope requirements：per kg surviving hybrid young transferred

Raw quantity and calculation requirements: consumed material from issue records Original collection denominator kind: process_output.

- Selected flow: Foaling and nursing supplies by actual material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supplies`
- Range: Provisional material completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg surviving young
  - Basis: per kg surviving hybrid young transferred
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Surviving live hybrid young (`young_output`)

Weigh actual live mule or hinny young at transfer to growth or direct handover; losses are separate.

Denominator and scope requirements：per kg surviving hybrid young transferred

Raw quantity and calculation requirements: measured surviving live mass at transfer Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Living mule or hinny young at internal transfer (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Live output mass identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg surviving young
  - Basis: per kg surviving hybrid young transferred
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Foaling mortality or disposal (`birth_waste`)

Only observed non-live disposal is waste; surviving young remain product or stock.

Denominator and scope requirements：per kg surviving hybrid young transferred

Raw quantity and calculation requirements: observed disposed mass by destination Original collection denominator kind: process_output.

- Selected flow: Foaling loss to actual disposal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Range: Provisional loss investigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg surviving young
  - Basis: per kg surviving hybrid young transferred
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Rear hybrid young (`growth`)

#### Inputs

##### Product flows

###### Living hybrid entering rearing (`growth_stock`)

Internal or purchased young enter once; purchased stock retains its upstream dataset and measured mass.

Denominator and scope requirements：per kg living hybrid leaving growth

Raw quantity and calculation requirements: weighed incoming live mass Original collection denominator kind: process_output.

- Selected flow: Living mule or hinny young at growth entry (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Provisional stock-reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg living hybrid
  - Basis: per kg living hybrid leaving growth
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hybrid growth feed (`growth_feed`)

Record hybrid-cohort ration and forage separately from parent feed, with inventory and loss adjustment.

Denominator and scope requirements：per kg living hybrid leaving growth

Raw quantity and calculation requirements: delivered feed less stock change and measured loss Original collection denominator kind: process_output.

- Selected flow: Equine feed and forage by actual material (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Range: Provisional feed completeness screen, not a ration factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg living hybrid
  - Basis: per kg living hybrid leaving growth
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hybrid growth water (`growth_water`)

Meter or record drinking and care water by actual use.

Denominator and scope requirements：per kg living hybrid leaving growth

Raw quantity and calculation requirements: measured water by cohort and use Original collection denominator kind: process_output.

- Selected flow: Supplied water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional water completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg living hybrid
  - Basis: per kg living hybrid leaving growth
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hybrid growth housing energy (`growth_energy`)

Meter or invoice actual electricity and fuel by carrier and service; allocate shared equipment only once.

Denominator and scope requirements：per kg living hybrid leaving growth

Raw quantity and calculation requirements: measured energy by carrier and growth cohort Original collection denominator kind: process_output.

- Selected flow: Energy supply (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional energy completeness screen, not an energy default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ/kg living hybrid
  - Basis: per kg living hybrid leaving growth
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living hybrid leaving growth (`grown_hybrid`)

Weigh actual live mass at transfer to selection; this is not automatically external farm gate.

Denominator and scope requirements：per kg living hybrid leaving growth

Raw quantity and calculation requirements: weighed living hybrid mass at transfer Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Living mule or hinny at internal growth transfer (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Live output mass identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg living hybrid
  - Basis: per kg living hybrid leaving growth
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Growth manure to actual handling (`growth_manure`)

Separate actual management paths from independent manure sale; no generic equine factor is imposed.

Denominator and scope requirements：per kg living hybrid leaving growth

Raw quantity and calculation requirements: measured or documented path-specific mass Original collection denominator kind: process_output.

- Selected flow: Equine manure to documented handling (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional manure completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg/kg living hybrid
  - Basis: per kg living hybrid leaving growth
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Hybrid growth enteric methane to air (`growth_enteric_ch4`)

Calculate only for recorded hybrid animal activity and a compatible equine method; do not treat the parent species as the hybrid flow identity.

Denominator and scope requirements：per kg living hybrid leaving growth

Raw quantity and calculation requirements: hybrid animal activity × compatible route-specific enteric factor Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative investigation screen, not an emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg living hybrid
  - Basis: per kg living hybrid leaving growth
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hybrid growth manure methane to air (`growth_manure_ch4`)

Calculate only for observed hybrid manure management, climate and pathway; do not duplicate external treatment.

Denominator and scope requirements：per kg living hybrid leaving growth

Raw quantity and calculation requirements: documented hybrid manure activity × compatible path-specific CH4 method Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative investigation screen, not an emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg living hybrid
  - Basis: per kg living hybrid leaving growth
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hybrid growth manure nitrous oxide to air (`growth_manure_n2o`)

Calculate for observed manure nitrogen and real management path, without double counting external treatment.

Denominator and scope requirements：per kg living hybrid leaving growth

Raw quantity and calculation requirements: observed manure nitrogen × climate/path-compatible N2O method Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative investigation screen, not an emission factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg living hybrid
  - Basis: per kg living hybrid leaving growth
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Select, weigh and hand over living hybrid (`handover`)

#### Inputs

##### Product flows

###### Living hybrid entering selection (`handover_stock`)

Carry previous breeding or growth burden once; rejected living animals remain stock.

Denominator and scope requirements：per kg accepted live hybrid at gate

Raw quantity and calculation requirements: weighed incoming live mass Original collection denominator kind: process_output.

- Selected flow: Living mule or hinny before handover (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Provisional selection-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg accepted live hybrid
  - Basis: per kg accepted live hybrid at gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted living mule or hinny at farm gate (`live_hybrid_handover`)

The confirmed CPC 02133 Product/Mass identity applies only to observed unprocessed living hybrids at matching farm gate; other gates remain unbound.

Denominator and scope requirements：per kg accepted live hybrid at farm gate

Raw quantity and calculation requirements: measured accepted live mass at matching farm gate Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Mules and hinnies, production mix at farm gate, live animal unprocessed `e80a7596-d6b5-4958-9370-05f2834def0e`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animals`
- Range: Accepted live output mass identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg accepted live hybrid
  - Basis: per kg accepted live hybrid at farm gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Handover mortality to disposal (`handover_waste`)

Record only observed non-live loss with actual destination; living rejected stock is not waste.

Denominator and scope requirements：per kg accepted live hybrid at gate

Raw quantity and calculation requirements: weighed disposed mass Original collection denominator kind: process_output.

- Selected flow: Hybrid mortality to actual disposal (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Range: Provisional loss investigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg accepted live hybrid
  - Basis: per kg accepted live hybrid at gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Living mules and hinnies at actual producer handover for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `young_output`, `grown_hybrid`, `live_hybrid_handover` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `young_output`, `grown_hybrid`, `live_hybrid_handover`

Required product-instance qualifiers: mule or hinny; verified parent species/sex; age/class; count; measured live mass; condition; actual gate; production period

- Selected flow: Living mules and hinnies at actual producer handover for actual producer-handover linkage
- Flow property / unit: Mass / kg
- Amount rule: Use measured accepted same-lot quantity reconciled to the linked source rows; normalize once to the declared reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`

- Range: Exact identity-reconciliation check after normalization, not a production-yield default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Declared reference quantity; input and output are the same accepted physical goods under the same handover ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living mules and hinnies at actual producer handover (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `young_output`, `grown_hybrid`, `live_hybrid_handover`

Required product-instance qualifiers: mule or hinny; verified parent species/sex; age/class; count; measured live mass; condition; actual gate; production period

- Selected flow: Living mules and hinnies at actual producer handover
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_handover`

- Range: Exact identity-reconciliation check after normalization, not a production-yield default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: Declared reference quantity; input and output are the same accepted physical goods under the same handover ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_parents` | mare, jenny, jack, stallion | Assign actual maternal gestation/nursing to its offspring route; share sire care by documented service and period, not by assumed equal head count. | `fao-equine-1994` |
| `alloc_outputs` | independent culls or sold manure | First subdivide actual handovers; if inseparable, disclose complete product set and justified physical-causality or economic basis consistently; no product credit to death or waste. | `fao-equine-1994` |
| `alloc_assets` | shared stable, water system, pasture equipment | Index consuming nodes and service periods; assign each burden once by observed animal-days, area-time or metered use appropriate to the asset. | `fao-equine-1994` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | parents, birth, growth, handover | parent, birth, transfers and accepted live output | identified animal ledger and weigh tickets | dam/sire species and sex; hybrid ID/type; age/class; count; kg; event date; gate | animal ID and calibrated live scale; Raw aggregation requirements: reconcile stock events, sum accepted kg by gate. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head; kg; date | each event | all included periods | each site/cohort | per reference flow | breeding register, scale and sale ticket; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_feed` | parents, growth | feed and forage | invoice and issue ledger | type, delivery, stock, loss, parent or hybrid cohort, date | invoice and weighed issue; Raw aggregation requirements: delivery minus stock change and loss. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each issue | all included periods | each site | per reference flow | invoices and store balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utilities` | parents, growth | water and energy | meter/invoice | water, electricity/fuel carrier, cohort and meter period | meter and billing record; Raw aggregation requirements: sum by carrier, allocate shared service once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; MJ | monthly | all included periods | each site | per reference flow | calibrated meter/bill; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_supplies` | birth | foaling materials | care/material ledger | material, mass, cohort, date | weighed material issue; Raw aggregation requirements: sum consumed material. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each event | foaling and nursing periods | each site | per reference flow | inventory and care record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | parents, growth | managed manure | handling ledger | mass or activity basis, period, treatment and destination | weighed path or documented estimate; Raw aggregation requirements: sum once per path. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each handling event | all included periods | each site | per reference flow | treatment/recipient receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_waste` | birth, handover | death or disposal | incident log | animal ID, mass, cause, destination, date | observation and weighing; Raw aggregation requirements: sum disposed mass by destination. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | each event | all included periods | each site | per reference flow | veterinary and disposal evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stock` | hybrid type and period | opening + births/purchases − transfers/sales/deaths = closing in heads; separately reconcile each weighed gate mass | IDs, events, head, kg, date | stock balance and accepted reference kg | `fao-equine-1994` |
| `calc_maternal` | parent phase | attribute measured maternal animal-days and resources to documented offspring cohort by mare or jenny route; sire service by actual use | parents, events, resources, periods | route-specific parent burden | `fao-equine-1994` |
| `calc_manure` | manure path | sum measured mass; any model uses observed animal activity and documented climate/path-specific method rather than a universal hybrid factor | animal-days, measured mass, path | manure by path | `ipcc-livestock-2019` |
| `calc_normalize` | all nodes | attributable recorded amount divided by measured node output kg; link each transfer once to accepted reference kg | records, output kg, shares | quantity per kg accepted hybrid | `fao-equine-1994` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_parentage` | hybrid route | Verify dam and sire species/sex; uncertain parentage blocks exact mule/hinny route assignment. | breeding register |
| `dq_mass_gate` | reference | Live weighed mass, head count and actual producer gate reconcile. | calibrated scale and transaction |
| `dq_period` | all phases | Dated inputs, assets, outputs, replacements and closing stock link to reporting periods. | animal and resource logs |
| `dq_destination` | manure, deaths, culls | Product handover and waste destination must be distinct. | recipient/disposal evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_parentage` | all routes | Require species/sex evidence and one maternal route per hybrid; a hinny cannot be recorded as mare-borne. | `fao-equine-1994` |
| `validate_stock` | all periods | Check head and mass ledger, live accepted output, losses and closing stock without duplicate transfers or mixed gates. | `fao-equine-1994` |
| `validate_allocation` | co-products and assets | Require complete actual handover product set and period/service attribution; no double parent or infrastructure burden. | `fao-equine-1994` |
| `validate_factor` | modeled manure/emissions | IPCC Mules/Asses categories require compatible animal activity, productivity, climate and manure path; never apply one generic factor to all hybrids. | `ipcc-livestock-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for a living mule or hinny at producer handover |
| downstream_use | `secondary_dataset` or `background_dataset` after gate/UUID resolution; process and lifecyclemodel projection |
| allowed_use | Declared hybrid type, maternal route, class, period, live mass and matching gate |
| excluded_use | Parent animal, work service, slaughter/meat, assumed head weight or unverified gate/UUID as concrete exchange |
| required_metadata | parent species/sex; hybrid type; cohort; count; weighed live mass; age/class; gate; periods; upstream burden; attribution |
| required_quality_disclosure | parentage, scale/stock balance, maternal route, manure path, shared allocation and unresolved identity |
| update_trigger | New verified route, measured performance change, handover change or confirmed platform flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-equine-1994` | official_guidance | FAO, *A Manual for the Primary Animal Health Care Worker*, Chapter 5, https://www.fao.org/4/t0690e/t0690e07.htm | parentage, gestation/foaling, husbandry and route boundary |
| `ipcc-livestock-2019` | official_guidance | IPCC 2019 Refinement, Volume 4 Chapter 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | pathway-specific manure method applicability, not a universal factor |
