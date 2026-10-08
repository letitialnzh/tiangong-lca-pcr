---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.geese
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Geese

## 1. Scope and Applicability

This PCR covers living domestic geese of genus *Anser* at a producing hatchery or farm gate, including goslings and older birds. It excludes goose meat, dead birds, shell eggs as reference, slaughter and downstream transport. Breeder operations, egg incubation and rearing are included only when actually operated; upstream purchased goslings or eggs carry their supplier burdens once. Eggs, feathers/down deliberately removed from live birds, culls and exported manure are outputs only on demonstrated independent handover. Record species/breed, age/class, purpose, mass, count, route and gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.geese` |
| classification_refs | CPC 3.0 `02153`, Geese |
| covered_products | Live domestic geese, hatchery-gate goslings and producer-farm-gate older birds |
| excluded_products | Goose meat, dead birds, shell eggs as reference, other poultry, downstream slaughter and processing |
| representative_product | Live domestic goose measured as live mass at its declared producer gate |
| production_route | Managed breeder/egg and incubation stages when operated; managed brooding/growing when farm birds are produced; independent live catching and handover. Pasture/forage and housed production are alternative implementations of managed biological production, changing feed, land, energy and manure records where evidenced. Hatchery-gate gosling and farm-gate older-bird final handovers are mutually exclusive per lot. |
| market_state | Alive, unprocessed, age/class and purpose declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Living domestic goose at the producing hatchery or farm gate |
| How much | 1 kg measured live weight, with bird count and mean mass disclosed |
| How well | Alive and unprocessed, with species/breed, age/class and purpose recorded |
| How long or cycle | Declared flock, hatch batch or growing cycle; breeder and shared-asset periods traced separately |
| reference_flow_link | `live_geese_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live domestic goose, producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/breed; age/class; gosling or older bird; purpose; count; measured mass; hatchery or farm gate; location; cycle |

The confirmed CPC 02153 database candidate is Number of items at plant; it cannot represent this broad Mass-based producer-gate reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | Reference and transferred birds | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh each lot or representative birds of each age/class; multiply reconciled count by measured mean mass. Dead birds are excluded. |
| `bird_count` | Flock movement | Count | birds | Reconcile opening, received/hatched, sold, dead and closing birds; never equate bird count with kg without measurement. |
| `egg_mass_count` | Eggs | Mass and count | kg; eggs | Record egg purpose and destination and weigh exchanged batches. |
| `period_index` | Breeder and shared assets | Service time | days or cycles | Link each input, output, replacement and asset use to its service period before normalization. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Opening live flock, breeder egg or externally supplied gosling at the first operated node, with origin, age, mass, count and carried burden |
| starting_condition_role | Foreground starting stock or upstream Product input, never zero burden by default |
| product_classification_scope | CPC 3.0 `02153`, live domestic geese |
| recursive_input_rule | For live geese received from another producer, use one upstream dataset for the received birds; do not recursively reproduce that same stage or count an internal transfer as new final output. |
| upstream_dataset_requirement | Feed, purchased eggs/goslings, fuels, electricity, water and services require matching upstream identities and datasets. |
| disclosure | Final gate, operated nodes, pasture or housed route, breeder and asset periods, output destinations, mortalities and manure pathway. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_live` | All routes | Include operated breeder, incubation, brooding/rearing and independent live catching only through producer handover; exclude slaughter and downstream distribution. | `un-cpc-2025`; `fao-goose-production`; `fao-leap-poultry-2016` |
| `boundary_gate` | Hatchery or farm route | Hatchery-gate goslings and farm-gate older geese are alternative final gates. Internal hatch-to-rearing transfer passes accumulated burden only once. | `fao-goose-production`; `fao-leap-poultry-2016` |
| `boundary_manure` | Housing or pasture | Record actual storage, grazing, export and treatment destination and pathway-specific emissions; do not assume one universal manure pathway. | `ipcc-livestock-2019` |
| `boundary_shared` | Shared infrastructure | Identify incubators, houses, water/energy systems and catching equipment shared by nodes or periods and attribute each measured burden once. | `fao-leap-poultry-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder` | Manage breeder flock and collect eggs | conditional | Breeder flock operated; otherwise use purchased egg dataset | Managed biological production of hatching eggs with seasonal periods | per kg eligible hatching eggs |
| `hatchery` | Incubate eligible eggs and produce goslings | conditional | Hatchery operated, including hatchery-only final route | Managed incubation; egg handover and hatch losses | per kg live goslings produced |
| `rearing` | Brood and grow live geese | conditional | Farm-gate older-bird route | Managed biological production, with pasture/forage or housed inventory delta | per kg live geese leaving rearing |
| `live_handover` | Catch and hand over live birds | required | Selected hatchery or farm final route | Separate capture of already-produced living birds, not slaughter or downstream transport | per kg accepted live geese |

Breeder seasons, incubation batches and rearing cycles retain separate time indexes and exchange points. A breeder-to-hatchery egg transfer carries breeder burden once; purchased eggs replace this predecessor node for the purchased quantity. Live catching is independent from production because it measures final accepted birds and capture losses at the transfer gate. It does not repeat breeding, incubation or rearing burdens.

### Process: Manage breeder flock and collect eggs (`breeder`)

#### Inputs

##### Product flows

###### Breeder feed and purchased forage (`breeder_feed`)

Include only measured feed crossing the boundary; keep grazed forage and related land management separately evidenced.

Denominator and scope requirements：per kg eligible hatching eggs

Raw quantity and calculation requirements: delivery minus stock change and recorded feed waste Original collection denominator kind: process_output.

- Selected flow: Breeder feed and purchased forage (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Range: Provisional feed completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg eligible hatching eggs
  - Basis: per kg eligible hatching eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder water supply (`breeder_water`)

Measure supplied drinking and cleaning water by use; exclude rainfall on pasture from this Product exchange.

Denominator and scope requirements：per kg eligible hatching eggs

Raw quantity and calculation requirements: metered net supplied water Original collection denominator kind: process_output.

- Selected flow: Supplied water (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional water reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/kg eligible hatching eggs
  - Basis: per kg eligible hatching eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Eligible hatching eggs transferred to hatchery (`hatching_eggs`)

Count and weigh eligible shell eggs at the breeder-to-hatchery or customer handover; separately record sold non-hatching eggs and rejects.

Denominator and scope requirements：per kg eligible hatching eggs

Raw quantity and calculation requirements: weighed eligible hatching eggs Original collection denominator kind: process_output.

- Selected flow: Goose eggs for hatching (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_birds_eggs`
- Range: Eligible egg output normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg eligible hatching eggs
  - Basis: per kg eligible hatching eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-poultry-2016`

###### Independently sold non-hatching eggs (`sold_eggs`)

Record by weighed batch only where sold for another purpose; rejected eggs are waste unless actual sale is evidenced.

Denominator and scope requirements：per kg eligible hatching eggs

Raw quantity and calculation requirements: weighed independently sold eggs Original collection denominator kind: process_output.

- Selected flow: Other goose shell eggs (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_birds_eggs`
- Range: Provisional sold-egg completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg eligible hatching eggs
  - Basis: per kg eligible hatching eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Usable breeder manure exported as product (`breeder_manure_export`)

Include only weighed breeder manure deliberately transferred for use; manure remaining on pasture is not this Product output.

Denominator and scope requirements：per kg eligible hatching eggs

Raw quantity and calculation requirements: weighed usable manure handed to recipient Original collection denominator kind: process_output.

- Selected flow: Exported breeder goose manure (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Range: Provisional breeder manure export screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg eligible hatching eggs
  - Basis: per kg eligible hatching eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected eggs and dead breeder birds (`breeder_losses`)

Record rejected eggs and breeder deaths by measured mass, count and disposal destination; do not turn a loss into a co-product by assumption.

Denominator and scope requirements：per kg eligible hatching eggs

Raw quantity and calculation requirements: measured residue and mortality mass by destination Original collection denominator kind: process_output.

- Selected flow: Breeder residues to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Range: Provisional hatch-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg eligible hatching eggs
  - Basis: per kg eligible hatching eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder manure sent to treatment (`breeder_manure_waste`)

Record manure leaving the breeder node for disposal or treatment by mass and destination; exclude exported usable manure and manure remaining on pasture.

Denominator and scope requirements：per kg eligible hatching eggs

Raw quantity and calculation requirements: measured manure sent to treatment Original collection denominator kind: process_output.

- Selected flow: Breeder goose manure to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Range: Provisional breeder manure waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg eligible hatching eggs
  - Basis: per kg eligible hatching eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Biogenic methane to air from breeder manure (`breeder_manure_ch4_air`)

Calculate only for breeder manure with a recorded housing, storage or grazing pathway and selected IPCC inputs.

Denominator and scope requirements：per kg eligible hatching eggs

Raw quantity and calculation requirements: pathway-specific IPCC calculation from breeder manure activity Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative Biogenic methane to air from breeder manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg eligible hatching eggs
  - Basis: per kg eligible hatching eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide to air from breeder manure (`breeder_manure_n2o_air`)

Calculate for an evidenced breeder manure pathway with appropriate direct or indirect N2O method inputs; avoid double counting pasture-soil emissions.

Denominator and scope requirements：per kg eligible hatching eggs

Raw quantity and calculation requirements: pathway-specific IPCC N2O calculation from collected manure activity Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative Nitrous oxide to air from breeder manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg eligible hatching eggs
  - Basis: per kg eligible hatching eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air from breeder manure (`breeder_manure_nh3_air`)

Include only a measured breeder-manure ammonia release or an independently reviewed pathway factor; the UUID is identity, not an emission factor.

Denominator and scope requirements：per kg eligible hatching eggs

Raw quantity and calculation requirements: measured ammonia release; otherwise require reviewed pathway method before modelling Original collection denominator kind: process_output.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Range: Provisional non-negative Ammonia to air from breeder manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg eligible hatching eggs
  - Basis: per kg eligible hatching eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Incubate eligible eggs and produce goslings (`hatchery`)

#### Inputs

##### Product flows

###### Hatching eggs entering incubation (`incubated_eggs`)

Weigh and count eggs set, identifying internal breeder transfer versus purchased eggs and linking one upstream burden.

Denominator and scope requirements：per kg live goslings produced

Raw quantity and calculation requirements: weighed eggs actually set Original collection denominator kind: process_output.

- Selected flow: Goose eggs for hatching (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_birds_eggs`
- Range: Provisional egg input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg live goslings
  - Basis: per kg live goslings produced
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Incubation energy (`incubator_energy`)

Record metered electricity and fuels by actual carrier and period, including an allocated share of shared utilities.

Denominator and scope requirements：per kg live goslings produced

Raw quantity and calculation requirements: metered carrier consumption Original collection denominator kind: process_output.

- Selected flow: Incubation energy carrier (UUID unresolved)
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional energy reconciliation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/kg live goslings
  - Basis: per kg live goslings produced
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living goslings transferred or sold (`goslings`)

Count and weigh viable living goslings; disclose internal rearing transfer versus hatchery sale, never both as final output.

Denominator and scope requirements：per kg live goslings produced

Raw quantity and calculation requirements: measured live mass and reconciled count Original collection denominator kind: process_output.

- Selected flow: Live goslings at hatchery gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_birds_eggs`
- Range: Gosling output normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg live goslings produced
  - Basis: per kg live goslings produced
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-poultry-2016`

##### Waste flows

###### Shells, unhatched eggs and non-surviving goslings (`hatch_residues`)

Record measured hatch residues, mortality and actual treatment destination, separate from breeder rejects.

Denominator and scope requirements：per kg live goslings produced

Raw quantity and calculation requirements: measured residue and mortality mass by destination Original collection denominator kind: process_output.

- Selected flow: Hatchery residues to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Range: Provisional hatch-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live goslings
  - Basis: per kg live goslings produced
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Brood and grow live geese (`rearing`)

#### Inputs

##### Product flows

###### Live goslings received for rearing (`rearing_goslings`)

Record internal hatch transfer or purchased goslings at one upstream burden, with mass, count, age and origin.

Denominator and scope requirements：per kg live geese leaving rearing

Raw quantity and calculation requirements: measured received mass Original collection denominator kind: process_output.

- Selected flow: Live goslings entering farm (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_birds_eggs`
- Range: Provisional input-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg live geese leaving rearing
  - Basis: per kg live geese leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased feed and forage for growing birds (`rearing_feed`)

Record feed composition, purchased mass, losses and grazed forage separately to reflect actual pasture or housed system.

Denominator and scope requirements：per kg live geese leaving rearing

Raw quantity and calculation requirements: delivered feed minus stock change and recorded waste Original collection denominator kind: process_output.

- Selected flow: Goose feed and purchased forage (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed`
- Range: Provisional feed completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live geese leaving rearing
  - Basis: per kg live geese leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied rearing water (`rearing_water`)

Record drinking and cleaning water by actual supply and purpose; document a separate source if off-grid or untreated.

Denominator and scope requirements：per kg live geese leaving rearing

Raw quantity and calculation requirements: metered water supplied to rearing Original collection denominator kind: process_output.

- Selected flow: Supplied process water (UUID unresolved)
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
  - Upper: 1000
  - Unit: kg/kg live geese leaving rearing
  - Basis: per kg live geese leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Brooding and housing energy (`rearing_energy`)

Record carrier-specific heat, electricity and fuel where used; pasture and housed routes need separate actual records.

Denominator and scope requirements：per kg live geese leaving rearing

Raw quantity and calculation requirements: metered or invoiced carrier consumption Original collection denominator kind: process_output.

- Selected flow: Rearing energy carrier (UUID unresolved)
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional energy completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh/kg live geese leaving rearing
  - Basis: per kg live geese leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Living birds ready for catching (`grown_geese`)

Weigh and count living growing birds and separately classify any breeder culls sold live.

Denominator and scope requirements：per kg live geese leaving rearing

Raw quantity and calculation requirements: measured live mass entering catching Original collection denominator kind: process_output.

- Selected flow: Living domestic geese at rearing exit (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_birds_eggs`
- Range: Rearing output normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg live geese leaving rearing
  - Basis: per kg live geese leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-poultry-2016`

###### Manure deliberately exported as product (`exported_manure`)

Include only usable manure measured and handed to another user; otherwise retain actual on-site or waste pathway.

Denominator and scope requirements：per kg live geese leaving rearing

Raw quantity and calculation requirements: weighed saleable manure removed Original collection denominator kind: process_output.

- Selected flow: Exported goose manure (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Range: Provisional manure export screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live geese leaving rearing
  - Basis: per kg live geese leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mortalities and manure sent to treatment (`rearing_residues`)

Record dead birds and discarded manure by type, mass, date and destination; manure left on pasture is not exported waste.

Denominator and scope requirements：per kg live geese leaving rearing

Raw quantity and calculation requirements: weighed or documented losses by destination Original collection denominator kind: process_output.

- Selected flow: Rearing residues to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Range: Provisional residue completeness screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live geese leaving rearing
  - Basis: per kg live geese leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Methane to air from actual manure management (`manure_ch4_air`)

Derive this only for the recorded storage or grazing pathway and IPCC method inputs; no generic emission factor is prescribed.

Denominator and scope requirements：per kg live geese leaving rearing

Raw quantity and calculation requirements: calculate from collected manure activity and selected pathway factor Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Sources: `ipcc-livestock-2019`
- Range: Non-negative provisional emission screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live geese leaving rearing
  - Basis: per kg live geese leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide to air from rearing manure (`manure_n2o_air`)

Calculate for evidenced rearing manure management with direct or indirect N2O method inputs, excluding any breeder or double-counted grazing-soil share.

Denominator and scope requirements：per kg live geese leaving rearing

Raw quantity and calculation requirements: pathway-specific IPCC N2O calculation from rearing manure activity Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional non-negative Nitrous oxide to air from rearing manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live geese leaving rearing
  - Basis: per kg live geese leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air from rearing manure (`manure_nh3_air`)

Include measured ammonia or a separately reviewed pathway estimate; do not borrow the N2O or CH4 emission factor.

Denominator and scope requirements：per kg live geese leaving rearing

Raw quantity and calculation requirements: measured ammonia release; otherwise require reviewed pathway method before modelling Original collection denominator kind: process_output.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Range: Provisional non-negative Ammonia to air from rearing manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg live geese leaving rearing
  - Basis: per kg live geese leaving rearing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Catch and hand over live birds (`live_handover`)

#### Inputs

##### Product flows

###### Living birds entering capture (`live_birds_to_catch`)

The input is either hatchery goslings or farm birds for one final lot, with earlier burden transferred once.

Denominator and scope requirements：per kg accepted live birds handed over

Raw quantity and calculation requirements: reconciled count times measured mean live mass Original collection denominator kind: reference_flow.

- Selected flow: Living geese entering producer catching (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_birds_eggs`
- Range: Provisional catch mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg accepted live birds
  - Basis: per kg accepted live birds handed over
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted living geese handed to the buyer (`live_geese_handover`)

Measure accepted live weight at the actual producing hatchery or farm gate; disclose count and bird class.

Raw reference-output records: measured accepted live mass Preserve the measured accepted lot quantity and every required qualifier. The amount below is the normalized reference exchange, not an assertion that a physical lot contains only one unit.

Denominator and scope requirements：per reference flow

- Selected flow: Live domestic goose, producer handover
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_birds_eggs`
- Range: Reference mass normalization
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: accepted live mass per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-poultry-2016`

##### Waste flows

###### Birds dying or rejected in capture (`capture_losses`)

Record unsold dead or injured birds by count, mass and destination; saleable live culls remain product if separately transferred.

Denominator and scope requirements：per kg accepted live birds handed over

Raw quantity and calculation requirements: measured unsold bird mass by destination Original collection denominator kind: reference_flow.

- Selected flow: Capture losses to treatment (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_losses_manure`
- Range: Provisional capture-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg accepted live birds
  - Basis: per kg accepted live birds handed over
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | All routes | First subdivide measured breeder, hatchery, rearing and catching operations by their own records. Do not allocate directly attributable burdens. | `fao-leap-poultry-2016` |
| `allocation_outputs` | Eggs, live birds, independently removed feathers/down, exported manure | Enumerate each intended output and handover. Where subdivision is impossible, allocate by documented physical causality; if unavailable, use contemporaneous economic values and disclose prices and sensitivity. Residue and disposal waste receive no product credit without independent use and transfer. | `fao-leap-poultry-2016` |
| `allocation_periods` | Breeder and cohort cycles | Link breeder establishment, laying seasons, hatch batches, rearing cycles, replacements and culls to benefiting cohorts; never assign the same burden to internal transfer and final sale twice. | `fao-goose-production`; `fao-leap-poultry-2016` |
| `allocation_shared` | Shared buildings, incubators and utilities | Attribute one measured burden to consuming nodes and service periods by meter use, capacity-days or documented operating time, with keys and shares retained. | `fao-leap-poultry-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed` | `breeder`, `rearing` | Feed and pasture | invoices, stock and grazing records | opening/closing feed stock; deliveries; forage origin; grazing area/days; flock count | weighbridge, feed ledger and pasture log; Raw aggregation requirements: deliveries less stock change and recorded waste. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; bird-days; ha-days | each receipt and cycle | full breeder or rearing cohort | all houses and pasture | per reference flow | invoices, scales, pasture records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utilities` | `breeder`, `hatchery`, `rearing` | Water and energy | meter and fuel logs | meter start/end; carrier; quantity; node; period | meter read or invoice; allocate shared use by documented key; Raw aggregation requirements: difference readings, convert units, assign once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg water; kWh; MJ | each meter period | all operated nodes and seasons | all meters | per reference flow | meter images and receipts; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_birds_eggs` | all | Eggs, live birds and transfers | egg batch and flock logs | eggs by purpose/count/mass; hatch results; opening/received/sold/dead bird counts; sampled weights; gate | weigh and count each batch; reconcile transfers; Raw aggregation requirements: count balance and class-specific mean mass. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; eggs; birds | every batch/movement | full reported cycle | all producer gates | per reference flow | batch sheets and calibrated scales; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_losses_manure` | all | Mortality, residue and manure pathways | disposal, manure and emissions-monitoring logs | dead mass/count; egg residues; manure storage/grazing/export mass; destination; volatile solids data; measured NH3 if claimed | weigh or sample; retain destination and emission-monitoring records; Raw aggregation requirements: reconcile by origin and destination, calculate pathway emissions only with supported method. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg; bird-days | each event and period | every operated phase | all houses, pasture and treatment | per reference flow | receipts, manure analysis, field and monitoring logs; traceable numerator, accepted reference-output denominator and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_live_mass` | Live transfers | live mass = reconciled count × measured mean mass for same age/class, unless entire lot weighed | count, sampled weights, scales | kg live mass and kg/bird | `fao-leap-poultry-2016` |
| `calc_stock` | Flock records | opening + received + hatched − sold − dead − other removals = closing birds | flock movement records | bird-count reconciliation | `fao-leap-poultry-2016` |
| `calc_eggs` | Breeder output | collected eggs = eligible hatching + sold eggs + rejected eggs + stock change, by mass and count | egg batch records | reconciled egg output | `fao-goose-production` |
| `calc_manure` | Manure pathway | Calculate CH4 and N2O using actual pathway, collected activity and selected IPCC method inputs; report NH3 only if measured or supported by a separately reviewed pathway factor. A flow UUID is never a factor. | manure destination, population, volatile solids, management periods and any NH3 monitor | pathway-specific emissions | `ipcc-livestock-2019` |
| `calc_shared` | Shared services | allocate total service once to each consuming node/period by metered use or recorded capacity-days | asset use, consumers, periods | node burden | `fao-leap-poultry-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Final and internal birds | Preserve species, age/class, purpose, mass, count, condition and gate per lot. | flock and sale records |
| `dq_period` | Breeder, hatch and rearing | Link input, output, cull, replacement and asset to actual periods; disclose incomplete seasons. | dated cohort/asset records |
| `dq_complete` | Feed, utilities, loss and manure | Include every operated node and destination; record omissions and meter coverage. | reconciliations and site diagram |
| `dq_routes` | Pasture versus housed | Support actual feed, land, manure and utility differences with site records rather than route labels. | pasture, house and manure logs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | Final output | Reject a reference without measured kg, reconciled count, age/class and one declared hatchery or farm producer gate; do not use the count/at-plant candidate as a Mass reference. | `un-cpc-2025` |
| `validate_route` | Process map | Require evidence for each operated node and pasture/housed inventory delta; prohibit hatchery and farm final output for the same internal lot. | `fao-goose-production`; `fao-leap-poultry-2016` |
| `validate_outputs` | Co-products and losses | Reconcile live birds, eggs, any separately removed feathers/down, exported manure, mortality and residues by handover; record explicit allocation and prevent duplicate output. | `fao-leap-poultry-2016` |
| `validate_period` | Periods and shared assets | Verify breeder/asset service time, replacements, culls, consuming nodes and attribution keys sum without duplicate burden. | `fao-leap-poultry-2016` |
| `validate_manure` | Manure pathway | Verify actual destination and selected IPCC inputs before calculating emissions. | `ipcc-livestock-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground producer-gate package for living domestic geese |
| downstream_use | `secondary_dataset` or `background_dataset` for reviewed process and lifecyclemodel assembly |
| allowed_use | Evidenced hatchery-gate gosling or farm-gate older-bird route after concrete identity matching |
| excluded_use | Goose meat, slaughter, eggs as reference, count-to-mass inference without weighing, or treating candidate UUID as confirmed |
| required_metadata | Species/breed, age/class, count, kg, purpose, gate, site, periods, route nodes, feed/grazing, manure, output allocation and shared-asset keys |
| required_quality_disclosure | Mass/count reconciliation, record and period gaps, provisional Range exceedances and unresolved UUIDs |
| update_trigger | Changed gate, route, manure management, CPC boundary, UUID evidence or reviewed method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | `official_guidance` | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Live goose category and meat exclusion |
| `fao-goose-production` | `handbook` | [FAO Goose Production](https://www.fao.org/4/y4359e/y4359e00.htm) | Breeder, hatching, brooding and growth route |
| `fao-leap-poultry-2016` | `official_guidance` | [FAO LEAP poultry supply-chain guidance](https://openknowledge.fao.org/handle/20.500.14283/i6421en) | Boundary, inventory, allocation and data quality |
| `ipcc-livestock-2019` | `method_factor` | [2019 IPCC refinement, Vol. 4 Ch. 10](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | Manure pathway calculation method |
