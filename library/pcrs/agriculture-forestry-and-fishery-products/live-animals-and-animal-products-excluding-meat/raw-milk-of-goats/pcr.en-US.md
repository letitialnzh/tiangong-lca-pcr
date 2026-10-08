---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-goats
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw milk of goats

## 1. Scope and Applicability

This rule covers unprocessed goat milk accepted at the producing dairy farm gate, either warm after first farm conditioning or cooled by that farm. It covers managed lactating goats and replacements, feed and water, enteric and manure pathways, milking capture, first straining and quality acceptance, and conditional farm cooling. Grazing and housed management are alternative implementations of the same herd node: record grazed feed and pasture manure for the former; delivered feed and collected manure for the latter; mixed systems report both without duplicating animal-days. Exclude independent collection/cooling centres, post-gate transport, pasteurization, standardization, and consumer packaging. Do not silently substitute sheep, cow or buffalo milk.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-goats` |
| classification_refs | CPC 3.0 `02292` |
| covered_products | Warm raw goat milk and farm-chilled raw goat milk transferred at the producing farm gate |
| excluded_products | Other species' milk; processed milk; milk from independent collection or cooling centres |
| representative_product | As-collected accepted unprocessed goat milk |
| production_route | Managed goat herd → separate milking capture → first farm conditioning → optional farm cooling; grazing, housed or mixed herd management documented |
| market_state | Unprocessed liquid milk, warm or farm-chilled, at producing farm handover |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted raw goat milk at the producing farm gate |
| How much | 1 kg as-collected accepted milk |
| How well | Goat species, raw/unprocessed state, temperature, fat/protein or solids, rejection and sampling basis declared |
| How long or cycle | Defined reporting period spanning lactation and replacement phases; disclose herd-period attribution |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw milk of goats at producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | goat species; farm identifier; lactation and replacement period; herd route; accepted and rejected mass; warm or farm-chilled state; milk temperature; fat/protein or solids; transfer gate |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

The broad warm-or-chilled reference has no verified single flow UUID. The chilled-specific identity applies only to `chilled_milk`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_mass` | reference milk | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventories to measured accepted milk; subtract rejected or lost milk once. |
| `milk_quality` | accepted milk | measured fat/protein or solids | reported concentration basis | Retain the sampled composition and temperature with the exact lot or period; do not silently standardize milk mass. |
| `period_link` | herd and milk | Mass and time | kg, days | Link animal-days, feed, replacement and manure records to the milk reporting period before normalization. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Goats already in or entering the managed herd, with purchased replacement animals and feed explicitly identified |
| starting_condition_role | Foreground herd production beginning at recorded herd entry and feed purchase/grazing boundary |
| product_classification_scope | Raw goat milk only; live-goat and independently transferred manure outputs retain distinct identities |
| recursive_input_rule | A same-category purchased raw goat milk input needs an upstream dataset and separate mass balance, never a second copy of this foreground milk output. |
| upstream_dataset_requirement | Supply verified upstream datasets for purchased replacements, feed, utilities and other purchased inputs; no duplicate replacement-goat burden when a live-goat PCR dataset already carries it. |
| disclosure | Farm gate, grazing/housed share, herd and lactation period, feed origin, manure destinations, milk temperature and rejects, shared equipment and output attribution |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `farm_gate` | all routes | End at producing farm transfer of accepted raw milk; independent collection/cooling and later processing are excluded. | `fao-small-ruminant-2016` |
| `separate_capture` | milking | Milk removal is its own measured handoff from managed herd to raw collected milk; do not book milking services again in herd inventory. | `fao-small-ruminant-2016` |
| `conditional_cooling` | cooling | Farm cooling applies only to milk actually cooled before gate; warm milk bypasses this node. | `fao-small-ruminant-2016` |
| `route_delta` | herd | Grazing/housed/mixed modes change feed source, manure location and energy or housing records; animal-days remain one herd ledger. | `fao-small-ruminant-2016` |
| `phase_boundary` | herd | Record lactation, dry/replacement and culling events by period; carry multi-period burdens to outputs once. | `fao-small-ruminant-2016` |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd` | Managed goat herd | required | Lactating and replacement goats under farm management | Biological production of milk potential; feed, water, animal and manure responsibility | animal-days and accepted milk period |
| `milking` | Milking capture | required | Each accepted or rejected milking lot | Independent removal from herd and collected-liquid handoff | gross captured milk kg |
| `conditioning` | First farm milk conditioning | required | Straining, first quality test and acceptance at producing farm | Raw collected to accepted warm state and rejects | accepted warm milk kg |
| `cooling` | Farm milk cooling | conditional | Producing farm cools milk before gate | Warm accepted to stabilized chilled state | chilled accepted milk kg |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

The herd node's intended milk potential transfers once to milking; measured gross milk is recorded at milking, not also as a separate sale. Grazed biomass and housed feed are mutually resolved by site records. Kids/culls and usable exported manure are independently transferred co-products only when documented, whereas residual manure and rejected milk remain waste or internal handling, not invented sales.

### Process: Managed goat herd (`herd`)

#### Inputs

##### Product flows

###### Feed, forage and grazed biomass (`feed`)

Record purchased feed and actual grazed biomass by dry matter and origin; distinguish purchased input from farm-grown feed already inside this foreground boundary.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Feed ledger plus measured or documented grazing intake, assigned by animal-days. Original collection denominator kind: reference_flow.

- Selected flow: Goat feed and forage
- Flow property / unit: Mass / kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional feed completeness screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg dry matter
  - Basis: per kg accepted milk; replace with herd records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied herd water (`herd_water`)

Record drinking and managed cleaning water crossing the herd boundary; direct rainfall is not this Product input.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Meter or delivery record allocated to herd use, excluding milking and conditioning meters. Original collection denominator kind: reference_flow.

- Selected flow: Supplied herd water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional herd water completeness screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per kg accepted milk; replace with meters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased replacement goats (`replacements`)

Include only animals entering the dairy herd from outside; use a verified upstream live-goat burden once.

Denominator and scope requirements：per kg accepted milk over attributed periods

Raw quantity and calculation requirements: Recorded entering live mass assigned across actual productive periods. Original collection denominator kind: reference_flow.

- Selected flow: Purchased replacement goats
- Flow property / unit: Mass / kg live weight
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional replacement screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg live weight
  - Basis: per kg accepted milk; replace with herd register
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Independently transferred kids and culled goats (`live_goats`)

Count only documented animal handovers; retained replacements are internal transfers, not sold outputs.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Weighed or sampled transfer mass by animal class and handover date. Original collection denominator kind: reference_flow.

- Selected flow: Live goat kids and culled goats
- Flow property / unit: Mass / kg live weight
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Range: Provisional live-animal transfer screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg live weight
  - Basis: per kg accepted milk; replace with handover records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently exported usable manure (`manure_export`)

Count only manure with a documented useful recipient; manure remaining on pasture or handled as waste is not this co-product.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Weighed export mass and moisture by recipient and date. Original collection denominator kind: reference_flow.

- Selected flow: Usable goat manure for independent transfer
- Flow property / unit: Mass / kg wet mass
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional exported-manure screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg wet mass
  - Basis: per kg accepted milk; replace with manure ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Residual manure requiring management (`manure_residue`)

Record collected or deposited manure not independently transferred as product, including pasture deposition by location.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Manure balance by housing, storage, land application and pasture deposition; avoid duplicate entry with exported manure. Original collection denominator kind: reference_flow.

- Selected flow: Residual goat manure
- Flow property / unit: Mass / kg wet mass
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Range: Provisional residual-manure screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg wet mass
  - Basis: per kg accepted milk; replace with balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric biogenic methane to air (`enteric_ch4`)

Calculate goat enteric methane from the evidenced herd method and animal-days, separately from manure methane.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Apply declared IPCC enteric method to goat classes and animal-days; disclose factor and climate assumptions. Original collection denominator kind: reference_flow.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional enteric methane screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; replace with calculated value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure biogenic methane to air (`manure_ch4`)

Calculate methane from manure actually assigned to each management pathway, including pasture deposition as relevant.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Apply declared IPCC manure pathway method, not the enteric result a second time. Original collection denominator kind: reference_flow.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional manure methane screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; replace with calculated value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure nitrous oxide to air (`manure_n2o`)

Calculate direct manure-system nitrous oxide by goat nitrogen and pathway; indirect effects remain separately declared.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Use declared IPCC manure nitrogen and pathway method with documented volatilization and leaching boundary. Original collection denominator kind: reference_flow.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional manure nitrous oxide screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg accepted milk; replace with calculated value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure ammonia to air (`manure_nh3`)

Record ammonia volatilization from the actual manure pathway only where the selected method provides it.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Calculate from collected manure nitrogen and selected volatilization factor; retain factor evidence. Original collection denominator kind: reference_flow.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `ipcc-livestock-2019`
- Range: Provisional manure ammonia screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg accepted milk; replace with calculated value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Milking capture (`milking`)

#### Inputs

##### Product flows

###### Milking energy (`milking_energy`)

Include measured electricity or fuel used by milking equipment, not cooling energy.

Denominator and scope requirements：per kg gross captured milk

Raw quantity and calculation requirements: Meter or fuel log assigned to milking shift. Original collection denominator kind: process_output.

- Selected flow: Milking equipment energy
- Flow property / unit: Energy / kWh equivalent
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milking`
- Range: Provisional milking energy screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh equivalent
  - Basis: per kg gross captured milk; replace with meter data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross captured raw goat milk (`gross_milk`)

Milk removed from goats is measured before first straining and acceptance; this internal handoff is not a farm-gate sale.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Sum calibrated milking lot masses, including later rejected portions. Original collection denominator kind: reference_flow.

- Selected flow: Gross captured raw goat milk
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milking`
- Range: Gross-to-accepted mass reconciliation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; replace with lot balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: First farm milk conditioning (`conditioning`)

#### Inputs

##### Product flows

###### First-conditioning water (`conditioning_water`)

Conditional umbrella: record only actual supplied water crossing for straining, equipment hygiene and first farm quality preparation, excluding herd drinking water. Resolve the concrete water function from site records.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Assigned meter or batch cleaning record. Original collection denominator kind: reference_flow.

- Selected flow: First-conditioning water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional first-conditioning water screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per kg accepted milk; replace with meter data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted warm raw goat milk (`warm_milk`)

This milk is ready for farm-gate handover warm, or for the optional farm cooling node; a cooled lot must not also be sold warm.

Denominator and scope requirements：per kg accepted milk at farm gate

Raw quantity and calculation requirements: Gross milk less first-conditioning rejects; record warm gate transfers and cooling transfers separately. Original collection denominator kind: reference_flow.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Accepted warm raw goat milk
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Warm milk reconciliation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; warm-only or cooling-bound lot
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### First-conditioning rejected milk and residues (`conditioning_reject`)

Record rejected or spilled milk and retained straining residues with documented treatment; do not assign them accepted milk status.

Denominator and scope requirements：per kg accepted milk

Raw quantity and calculation requirements: Measure rejected milk mass and separately describe residue destination. Original collection denominator kind: reference_flow.

- Selected flow: Rejected raw goat milk and straining residues
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Range: Provisional conditioning reject screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; replace with reject log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Farm milk cooling (`cooling`)

#### Inputs

##### Product flows

###### Farm cooling energy (`cooling_energy`)

Include only energy used by cooling equipment controlled by the producing farm before gate.

Denominator and scope requirements：per kg farm-chilled accepted milk

Raw quantity and calculation requirements: Cooling meter or assigned equipment log, with shared tank service allocated once. Original collection denominator kind: process_output.

- Selected flow: Farm cooling energy
- Flow property / unit: Energy / kWh equivalent
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Range: Provisional farm cooling energy screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh equivalent
  - Basis: per kg farm-chilled milk; replace with meter data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted chilled raw goat milk at farm gate (`chilled_milk`)

This is the cooled portion accepted and transferred at the producing farm gate, not milk cooled later by a collection centre.

Denominator and scope requirements：per kg accepted milk at farm gate

Raw quantity and calculation requirements: Measure cooled accepted mass at gate after any cooling reject or spill. Original collection denominator kind: reference_flow.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Raw goat milk, chilled, farm gate `2c001731-6bd5-4e32-b3cf-15f4c67d4038`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Range: Chilled milk reconciliation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg accepted milk at farm gate; replace with gate log
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cooling loss and rejected chilled milk (`cooling_reject`)

Record milk spilled or rejected during farm-controlled cooling; do not count it as accepted chilled output.

Denominator and scope requirements：per kg accepted milk at farm gate

Raw quantity and calculation requirements: Incoming warm milk less accepted chilled milk, with rejection reason and destination. Original collection denominator kind: reference_flow.

- Selected flow: Cooling loss and rejected raw goat milk
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling`
- Range: Provisional cooling reject screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg accepted milk; replace with tank balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Raw milk of goats at producing farm gate for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `warm_milk`, `chilled_milk` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `warm_milk`, `chilled_milk`

Required product-instance qualifiers: goat species; farm identifier; lactation and replacement period; herd route; accepted and rejected mass; warm or farm-chilled state; milk temperature; fat/protein or solids; transfer gate

- Selected flow: Raw milk of goats at producing farm gate for actual producer-handover linkage
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

###### Raw milk of goats at producing farm gate (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `warm_milk`, `chilled_milk`

Required product-instance qualifiers: goat species; farm identifier; lactation and replacement period; herd route; accepted and rejected mass; warm or farm-chilled state; milk temperature; fat/protein or solids; transfer gate

- Selected flow: Raw milk of goats at producing farm gate
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
| `output_set` | herd and gate | Enumerate accepted milk, independently handed-over kids/culls and usable exported manure; residual manure, mortality and rejected milk are not automatically co-products. Record each handover once. | `fao-small-ruminant-2016` |
| `allocation_order` | multi-output herd | Prefer physical subdivision of independently metered activities. For inseparable herd burdens, document and apply a consistent biophysical allocation supported by herd energy/feed and milk/live-growth data; if not feasible, disclose and justify another reviewed allocation basis. Do not silently use zero burden for kids or exported manure. | `fao-small-ruminant-2016` |
| `period_attribution` | herd lifecycle | Index lactation, dry/replacement and culling phases; assign multi-period feed, replacement and capital burdens to actual service and output periods once, with no second allocation through live-goat upstream data. | `fao-small-ruminant-2016` |
| `shared_assets` | milking and cooling | Inventory shared buildings, water/energy meters, tanks and equipment by consuming node and service period; assign service share using measured use or documented capacity-time, never duplicate full asset burden. | `fao-small-ruminant-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `herd` | feed, water, replacement and animal outputs | herd and purchase ledger | goat class; head; animal-days; lactation phase; feed dry matter; grazing estimate; water; purchase and transfer live mass | farm logs, scale, invoices and meter; Raw aggregation requirements: Sum by goat class and phase; attribute once to milk and other outputs. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, head, days | daily and event | full milk reporting period and replacement phase | producing herd | per reference flow | signed ledger, scale and invoices; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | `herd` | exported and residual manure | manure pathway ledger | housing/pasture shares; collection; storage; export mass; moisture; recipient | weighbridge, farm log and pathway inspection; Raw aggregation requirements: Reconcile total manure by mutually exclusive destination. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, days | daily and event | full reporting period | herd pasture and housing | per reference flow | transfer receipts and pathway record; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_emissions` | `herd` | air emissions | method worksheet | animal-days; feed energy; nitrogen; manure pathway; factor; climate | calculate from `cp_herd` and `cp_manure` under declared IPCC method; Raw aggregation requirements: Sum distinct enteric and manure terms once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg | reporting period | same herd period | emitting farm | per reference flow | factor citation and calculation worksheet; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_milking` | `milking` | gross milk and energy | batch meter log | goat herd; milk kg; milking time; meter; rejected later | calibrated milk scale and energy meter; Raw aggregation requirements: Sum gross lot mass and assigned milking energy. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, kWh | each milking | full reporting period | producing farm | per reference flow | calibration, shift log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_conditioning` | `conditioning` | accepted warm milk, rejects and water | lot quality and cleaning log | gross kg; straining loss; rejected kg; temperature; fat/protein or solids; water | scale, sample and water meter; Raw aggregation requirements: Gross = accepted warm + reject/loss; transfer warm to gate or cooling once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, concentration | each lot | full reporting period | producing farm | per reference flow | test sheet and reject disposition; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_cooling` | `cooling` | chilled milk and energy | farm cooling log | incoming warm kg; outgoing chilled kg; temperature; energy; time; losses | calibrated tank and energy meter; Raw aggregation requirements: Incoming warm = chilled accepted + cooling loss; never duplicate warm sale. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, kWh, temperature | each chilled lot | only farm-controlled cooling periods | producing farm | per reference flow | tank log and transfer receipt; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `milk_balance` | milk lots | Gross captured milk = accepted warm milk + first-conditioning rejects; accepted warm milk = warm gate transfer + cooling input; cooling input = chilled gate transfer + cooling loss. | `cp_milking`, `cp_conditioning`, `cp_cooling` | accepted reference kg and losses | `fao-small-ruminant-2016` |
| `herd_intensity` | herd inputs | Period assigned quantity / accepted milk kg after documented output and period attribution. | `cp_herd`, `cp_manure`, `cp_conditioning` | reference-normalized herd inventory | `fao-small-ruminant-2016` |
| `enteric_and_manure` | air emissions | Calculate distinct goat enteric methane and manure CH4/N2O under declared IPCC pathway and factor set; ammonia only with documented volatilization method. | `cp_emissions` | kg of each substance to air | `ipcc-livestock-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `species_route` | herd | Prove goat species, actual grazing/housed shares and goat-class animal-days; do not import cow or sheep coefficients without justified adaptation. | herd register, grazing and housing records |
| `mass_balance` | milk | Link accepted, rejected and cooling transfers by lot; retain temperature and quality sample basis. | signed batch balance and laboratory sheet |
| `phase_match` | allocation | Align animal, feed, manure, replacement and asset records with actual lactation and reporting period. | dated herd and asset ledger |
| `identity_gap` | UUIDs | Resolve broad reference and every unbound output/management identity before active/publication use. | flow detail and support-row confirmation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_check` | reference | Confirm goat raw milk is warm or cooled by the producing farm; reject independent-centre or processed milk as this reference. | `fao-small-ruminant-2016` |
| `route_check` | herd | Verify grazing, housed or mixed route against feed origin, manure location and animal-days; no route label without changed records. | `fao-small-ruminant-2016` |
| `balance_check` | milk | Require lot balance and distinct warm/chilled gate destinations; zero double booking across conditioning and cooling. | `fao-small-ruminant-2016` |
| `output_check` | co-products | Require documented live-goat and manure handovers, method precedence and shared-period attribution; no burden counted twice. | `fao-small-ruminant-2016` |
| `identity_check` | flow cards | Check exact substance, medium, property, state and gate for fixed UUIDs; expand unresolved inputs from actual records, and leave unverified identities unresolved. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate goat milk data package; process and lifecyclemodel projections follow it. |
| downstream_use | Reviewed secondary or background dataset only after all identity and evidence gates close. |
| allowed_use | Unprocessed goat milk supply at a declared producing farm gate and temperature state. |
| excluded_use | Other species, pasteurized or standardized dairy, independent collection/cooling and post-gate transport. |
| required_metadata | Farm and herd; period; goat class; grazing/housed route; accepted and rejected milk; warm/chilled lot gate; composition; temperature; co-product destinations; allocation. |
| required_quality_disclosure | Measured versus calculated inputs, IPCC factors, missing meters, provisional ranges, unresolved UUIDs and shared-asset attribution. |
| update_trigger | Material route, milk state, herd management, factor, output mix, gate, identity or quality evidence changes. |

## 11. Data Sources

| source_id | type | citation | use |
| --- | --- | --- | --- |
| `cpc-3-2025` | `official_guidance` | UN Statistics Division, CPC Version 3.0 Explanatory Notes (2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification product scope |
| `fao-small-ruminant-2016` | `official_guidance` | FAO LEAP, Greenhouse gas emissions and fossil energy use from small ruminant supply chains (2016), https://www.fao.org/partnerships/leap/resources/publications/ | Farm route, boundary, allocation and reporting questions |
| `fao-small-ruminant-dairy` | `official_guidance` | FAO, Small ruminants: dairy production and products, https://www.fao.org/dairy-production-products/dairy/small-ruminants/en | Goat milk production context |
| `ipcc-livestock-2019` | `method_factor` | IPCC, 2019 Refinement, Volume 4 Chapter 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | Enteric and manure emission calculation methods |
