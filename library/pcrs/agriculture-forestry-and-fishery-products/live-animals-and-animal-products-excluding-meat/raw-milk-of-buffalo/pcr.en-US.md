---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-buffalo
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw milk of buffalo

## 1. Scope and Applicability

This PCR governs foreground data packages for unprocessed buffalo milk at the producing dairy farm gate, whether handed over warm or chilled by that farm. Declare buffalo species, farm, herd/lactation period, raw state, temperature, fat/protein or solids, and accepted/rejected mass. Exclude milk from cattle or goats, pasteurization, standardization, consumer packaging, independent cooling centres and post-handover transport. Live buffalo are a separate product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-buffalo` |
| classification_refs | CPC 3.0 `02212`, Raw milk of buffalo |
| covered_products | unprocessed buffalo milk, warm or farm-chilled, at producing farm gate |
| excluded_products | other species' milk, processed milk, milk from independent cooling centre |
| representative_product | accepted raw buffalo milk at its declared final farm-gate state |
| production_route | managed buffalo dairy herd → milking capture → first conditioning → optional farm cooling |
| market_state | warm or farm-chilled raw milk, with temperature and composition declared |

Pasture and housed routes are deltas of the managed biological herd parent. They may coexist in the same farm, but require separately evidenced feed, energy, manure and animal-period data. Direct warm handover and farm-chilled handover are mutually exclusive per batch.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | accepted raw buffalo milk at the producing farm gate |
| How much | 1 kg net mass |
| How well | raw; state, temperature, species, fat/protein or solids, acceptance/rejection declared |
| How long or cycle | reporting period covering lactation, dry, replacement, birth and culling phases |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw milk of buffalo, warm or farm-chilled, producing farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | buffalo species; raw state; farm gate; warm or chilled; handover temperature; fat/protein or solids; accepted and rejected mass; herd and lactation period |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

The confirmed chilled-only UUID is confined to the explicitly chilled output card; it does not represent this broad warm-or-chilled reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_reference` | accepted final milk | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize one final warm or chilled handover to 1 kg net accepted milk; do not double count an internal warm transfer. |
| `m_composition` | milk quality | fat/protein or solids mass fraction | % or g/kg | Retain sampling time, analytical basis and wet-mass denominator; do not assume standardization. |
| `m_feed` | feed | mass and dry matter | kg | Keep as-fed and dry-matter amounts distinct with measured moisture conversion. |
| `m_emission` | direct emissions | named pollutant mass | kg CH4, N2O or NH3 | Keep pollutant, air medium, pathway and factor tier distinct. |
| `m_energy` | utilities | native carrier amount | kWh, MJ, L or kg | Retain carrier and shared-meter attribution before optional energy conversion. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

The boundary begins with declared opening buffalo stock and purchased replacements with preceding burden. Managed herd production covers feed, water, housing, enteric and manure pathways. Independent milking captures gross raw milk; first farm conditioning strains and accepts it. Optional cooling preserves already usable raw milk before farm handover; it is not pasteurization. Shared housing, pumps, parlour, tank and meters are attributed once among consuming nodes and periods.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | opening buffalo herd by class, lactation state, origin and prior burden; purchased replacements separately declared |
| starting_condition_role | multi-period biological stock supporting milk, reproduction and eventual live-animal transfer |
| product_classification_scope | CPC 3.0 `02212` raw milk of buffalo |
| recursive_input_rule | purchased same-category milk retains supplier origin and upstream burden, never relabelled as farm-produced reference output |
| upstream_dataset_requirement | supplier evidence for feed, replacements, energy, water and hygiene inputs or disclosed gaps |
| disclosure | herd/route/period, milk state and temperature, losses, manure pathways, independent co-products, shared assets and unresolved identities |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_farm_gate` | final milk | Include producing-farm activities only; independent cooling, post-gate haulage, pasteurization and packaging are excluded. | `fao-large-ruminants-2016` |
| `b_capture` | milk stages | Distinguish biological milk production, physical milking capture, first raw-milk conditioning and optional cooling by handoff state. | `fao-large-ruminants-2016` |
| `b_route` | pasture/housed variants | Parent is managed buffalo herd. Record route deltas for feed origin, manure deposition versus storage, housing energy and corresponding checks; variants may coexist. | `fao-large-ruminants-2016`; `ipcc-livestock-2019` |
| `b_manure` | excreta | Distinguish pasture deposition, collection, storage, on-farm return and independent export with N and volatile solids by pathway. | `ipcc-livestock-2019` |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd` | Managed Buffalo Dairy Herd | required | all herd and replacement phases | managed biological production; manure | gross milk produced and animal-period |
| `milking` | Milking and Capture | required | every milk-producing route | independent harvest and capture | gross captured milk |
| `conditioning` | First Farm Milk Conditioning | required | after capture | straining, acceptance and rejection | accepted warm milk |
| `cooling` | Farm-Controlled Milk Cooling | conditional | producing farm cools before gate | preservation of usable raw milk | accepted chilled milk |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

### Process: Managed Buffalo Dairy Herd (`herd`)

#### Inputs

##### Product flows

###### Feed and forage (`feed`)

Record purchased feed and grazed forage by buffalo class and period; distinguish as-fed and dry matter.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Measured feed issue and estimated pasture intake by documented method Original collection denominator kind: process_output.

- Selected flow: Buffalo feed and forage
- Flow property / unit: Mass / kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `fao-large-ruminants-2016`
- Range: Provisional feed and forage screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg dry matter/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied herd water (`water`)

Record supplied drinking and husbandry water by source; exclude unmanaged precipitation.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Metered water by source and animal class Original collection denominator kind: process_output.

- Selected flow: Supplied water for buffalo herd
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional supplied herd water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Herd management energy (`herd_energy`)

Separate electricity and fuels for housing, pumping, feeding and manure equipment by carrier.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Meter and invoice quantities allocated by service period Original collection denominator kind: process_output.

- Selected flow: Energy supply for buffalo herd
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional herd management energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kWh-equivalent/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reported flow of this type.

##### Elementary flows

No separately reported flow of this type.

#### Outputs

##### Product flows

###### Transferred calves and culled buffalo (`animals`)

Only independently transferred live animals are co-products; retained replacements are internal.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Measured transfer live mass by class and period Original collection denominator kind: process_output.

- Selected flow: Live buffalo calves and culls
- Flow property / unit: Mass / kg live weight
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `fao-large-ruminants-2016`
- Range: Provisional transferred calves and culled buffalo screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg live mass/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Independently transferred usable manure (`manure_export`)

Usable manure is an intended output only with independent transfer and quality evidence.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Transferred mass, dry matter and nitrogen quality Original collection denominator kind: process_output.

- Selected flow: Usable buffalo manure at transfer
- Flow property / unit: Mass / kg wet and dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional independently transferred usable manure screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg wet manure/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Residual manure for treatment (`manure_residue`)

Separate unusable residue from manure product and pasture deposition; record actual destination.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Residual collected manure mass by management pathway Original collection denominator kind: process_output.

- Selected flow: Buffalo manure residue
- Flow property / unit: Mass / kg wet matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional residual manure for treatment screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg wet manure/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Enteric methane to air (`enteric_ch4`)

Calculate biogenic CH4 for buffalo class and period; do not merge manure CH4.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Buffalo activity multiplied by compatible enteric factor Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_herd`
- Sources: `ipcc-livestock-2019`
- Range: Provisional enteric methane to air screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg CH4/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure methane to air (`manure_ch4`)

Calculate biogenic CH4 from volatile solids and recorded buffalo manure management, separate from enteric CH4.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Pathway-specific manure volatile solids multiplied by compatible methane factor Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg CH4
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional manure methane screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg CH4/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure nitrous oxide to air (`manure_n2o`)

Track manure nitrogen and management pathway; coordinate with managed-soil reporting.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Pathway-specific direct and applicable indirect N2O Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional manure nitrous oxide to air screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg N2O/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure ammonia to air (`manure_nh3`)

Track volatilized NH3 separately from N2O and nitrogen lost by other pathways.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Calculated NH3 from pathway-specific nitrogen volatilization Original collection denominator kind: process_output.

- Selected flow: Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional manure ammonia to air screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg NH3/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Milking and Capture (`milking`)

#### Inputs

##### Product flows

###### Milking equipment energy (`milking_energy`)

Measure energy for milking and capture apart from herd management and cooling.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Metered service energy by carrier Original collection denominator kind: process_output.

- Selected flow: Energy supplied to milking
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional milking equipment energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh-equivalent/kg gross milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reported flow of this type.

##### Elementary flows

No separately reported flow of this type.

#### Outputs

##### Product flows

###### Gross captured raw milk (`gross_milk`)

Milk at the independent capture handoff is internal and precedes acceptance.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Measured gross mass by milking batch Original collection denominator kind: process_output.

- Selected flow: Gross warm raw buffalo milk at milking handoff
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk`
- Range: Provisional gross captured raw milk screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg gross/kg final accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reported flow of this type.

##### Elementary flows

No separately reported flow of this type.

### Process: First Farm Milk Conditioning (`conditioning`)

#### Inputs

##### Product flows

###### Cleaning and first-conditioning water (`cleaning_water`)

Record purchased or supplied water for straining and hygiene, not wastewater.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Metered supply by batch and cleaning event Original collection denominator kind: process_output.

- Selected flow: Process water for farm milk handling
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional cleaning and first-conditioning water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg accepted milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reported flow of this type.

##### Elementary flows

No separately reported flow of this type.

#### Outputs

##### Product flows

###### Accepted warm raw milk (`warm_milk`)

After straining and acceptance, this is direct farm-gate handover or internal feed to cooling, never both final outputs.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Gross captured mass less rejection and conditioning loss Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Accepted warm raw buffalo milk
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk`
- Range: Provisional accepted warm raw milk screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg accepted/kg gross
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected milk and straining residues (`conditioning_reject`)

Classify rejected milk and filter residue by amount, cause and destination.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Measured rejected milk and separately recorded solid residue Original collection denominator kind: process_output.

- Selected flow: Rejected raw buffalo milk and first-conditioning residue
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk`
- Range: Provisional rejected milk and straining residues screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg rejected milk/kg gross
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No separately reported flow of this type.

### Process: Farm-Controlled Milk Cooling (`cooling`)

#### Inputs

##### Product flows

###### Farm cooling energy (`cooling_energy`)

Record refrigeration electricity and backup fuel only when cooling is under producing-farm control.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Metered cooling energy by carrier and batch Original collection denominator kind: process_output.

- Selected flow: Energy supply for farm milk cooling
- Flow property / unit: Energy or carrier quantity / kWh, MJ, L or kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional farm cooling energy screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh-equivalent/kg chilled milk
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately reported flow of this type.

##### Elementary flows

No separately reported flow of this type.

#### Outputs

##### Product flows

###### Accepted chilled raw milk at farm gate (`chilled_milk`)

Only chilled raw buffalo milk produced and transferred by this farm uses the confirmed chilled-only identity.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Measured accepted chilled mass at final farm handover Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Raw milk of buffalo, chilled, at farm gate `790fcd48-b398-4049-898a-f9535f08f97b`
- Flow property / unit: Mass / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk`
- Range: Provisional accepted chilled raw milk at farm gate screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg chilled/kg warm into cooling
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cooling loss and rejected chilled milk (`cooling_reject`)

Record leakage, spillage or rejected batches by actual destination, not as saleable chilled milk.

Denominator and scope requirements：per kg accepted final milk with herd-period or batch strata retained

Raw quantity and calculation requirements: Measured cooling loss and rejected chilled mass Original collection denominator kind: process_output.

- Selected flow: Raw milk lost or rejected during cooling
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milk`
- Range: Provisional cooling loss and rejected chilled milk screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg lost/kg warm into cooling
  - Basis: broad first-pass completeness screen, not a universal factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No separately reported flow of this type.

### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Raw milk of buffalo, warm or farm-chilled, producing farm gate for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `warm_milk`, `chilled_milk` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `warm_milk`, `chilled_milk`

Required product-instance qualifiers: buffalo species; raw state; farm gate; warm or chilled; handover temperature; fat/protein or solids; accepted and rejected mass; herd and lactation period

- Selected flow: Raw milk of buffalo, warm or farm-chilled, producing farm gate for actual producer-handover linkage
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

###### Raw milk of buffalo, warm or farm-chilled, producing farm gate (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `warm_milk`, `chilled_milk`

Required product-instance qualifiers: buffalo species; raw state; farm gate; warm or chilled; handover temperature; fat/protein or solids; accepted and rejected mass; herd and lactation period

- Selected flow: Raw milk of buffalo, warm or farm-chilled, producing farm gate
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
| `a_outputs` | milk, live buffalo/calf transfer and usable manure | Separate output-specific operations first. For residual milk/live-animal herd burdens, use documented buffalo class-period energy requirements for milk production and live growth as biophysical allocation drivers; shares sum to one. Disclose price-based sensitivity separately. Treat exported usable manure with an explicit documented burden decision, never automatic avoided-product credit. No credit for retained replacements, rejects or untransferred manure, and no double counting with a live-buffalo PCR. | `fao-large-ruminants-2016` |
| `a_period` | lactation, dry, replacement, birth and culling phases | Link inputs, herd assets, milk and animal events to animal class-periods. Opening and replacement burdens, retirement and transfers enter exactly once. | `fao-large-ruminants-2016` |
| `a_shared` | housing, pump, parlour, tank and utility meter | Name every consuming node and service period; allocate one total using measured service hours, throughput or a defended causal driver, with fractions summing to one. | `fao-large-ruminants-2016` |
| `a_residue` | rejected milk, residual manure | Reconcile physical mass and actual treatment; residues and waste receive no independent product credit. | `ipcc-livestock-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `herd` | feed, live transfers and enteric CH4 | herd/feed ledger | class, head-days, feed and moisture, grazing estimate, births, replacements, culls, origins | farm records and scales; Raw aggregation requirements: stratify by class and period. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head-day, kg | event and daily | full reporting period | producing farm | per reference flow | herd roll-forward and weigh tickets; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | `herd` | manure outputs, CH4, N2O and NH3 | manure ledger | excreted N, volatile solids, pathway fractions, mass, N quality, transfers | inventory, sampling and pathway model; Raw aggregation requirements: reconcile pathways without duplicate soil burden. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, kg N, kg VS | event and monthly | full reporting period | producing farm | per reference flow | storage and transfer records; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_utilities` | `herd`; `milking`; `conditioning`; `cooling` | water and energy | meter/invoice | source, carrier, quantity, asset, node, service time, period | meter and allocation log; Raw aggregation requirements: attribute shared meters exactly once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | m3, kWh, MJ, L, kg | monthly and batch | full reporting period | producing farm | per reference flow | calibration and invoices; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_milk` | `milking`; `conditioning`; `cooling` | milk outputs and rejects | batch ledger | gross/accepted/rejected/lost mass, state, temperature, composition, gate | calibrated tank and sample; Raw aggregation requirements: sum mutually exclusive final warm/chilled handovers. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, °C, % | batch | full reporting period | producing farm | per reference flow | milk balance and acceptance tickets; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_milk_balance` | milk stages | gross captured = accepted warm + conditioning rejection/loss; warm into cooling = chilled accepted + cooling rejection/loss; final reference = direct warm + chilled once | batch masses | net accepted kg | |
| `c_feed` | herd feed | dry matter = as-fed mass × sampled dry-matter fraction; document pasture estimation separately | feed and moisture | kg dry matter | `fao-large-ruminants-2016` |
| `c_enteric` | CH4 | buffalo class-period activity × compatible tier factor; keep enteric and manure pathways apart | head-days, intake, factor | kg CH4 | `ipcc-livestock-2019` |
| `c_manure_ch4` | manure CH4 | volatile solids × management pathway share × compatible methane conversion and potential factors | VS and pathway ledger | kg biogenic CH4 | `ipcc-livestock-2019` |
| `c_manure` | N2O and NH3 | excreted N × pathway fraction × species-specific factor, with managed-soil interface reconciliation | N/pathway ledger | kg N2O and NH3 separately | `ipcc-livestock-2019` |
| `c_shared` | shared assets | measured total × documented service fraction for node-period; fractions sum to one | meter and service log | attributed utility/burden | `fao-large-ruminants-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_identity` | final milk | Verify buffalo species, raw state, farm gate, warm/chilled state and temperature. | batch and handover record |
| `q_period` | herd | Cover lactation, dry and replacement classes, births and culls; reconcile opening/closing stock. | herd ledger |
| `q_balance` | milk and manure | Reconcile milk stages and manure fractions to documented tolerance. | batch and pathway balance |
| `q_emission` | direct emissions | Preserve substance, medium, buffalo class, manure pathway and factor tier. | factor/activity sheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | final milk | One final handover state per batch; normalize 1 kg accepted mass. Chilled-only UUID cannot stand for broad warm-or-chilled reference. | |
| `v_route` | pasture/housed route | Require feed, manure, energy and animal-period evidence for each route delta; a route label alone is insufficient. | `fao-large-ruminants-2016` |
| `v_outputs` | milk, live animals, manure | Require explicit independent handover and attribution for each co-product; neither residue nor internal transfer is credited twice. | `fao-large-ruminants-2016` |
| `v_period` | herd phases | Opening and replacement burdens, birth, milk and cull events have one class-period attribution. | |
| `v_shared` | shared infrastructure | Housing, pump, parlour, tank and meter fractions sum to one across herd, milking, conditioning and cooling in each service period. | |
| `v_balance` | milk/manure | Gross, accepted and rejected milk and manure pathway balances reconcile; direct warm and chilled outputs do not overlap. | |
| `v_uuid` | identity | Fixed UUID requires exact type, property, state, gate and medium; unresolved identity stays blank. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground raw buffalo milk production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` only after relevant review |
| allowed_use | unprocessed buffalo milk at producing farm gate with declared warm/chilled state |
| excluded_use | other species, processed milk, independent cooling, post-gate transport |
| required_metadata | herd classes and period, route, farm, accepted/rejected batches, composition, temperature, manure and live-animal handovers, allocation and shared assets |
| required_quality_disclosure | activity coverage, reasoned-estimate screens, factor tier and uncertainty, balances and unresolved identities |
| update_trigger | changed herd/feeding route, cooling ownership, state, co-product attribution, factor method or verified identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-large-ruminants-2016` | official_guidance | FAO LEAP, Environmental performance of large ruminant supply chains, 2016, https://openknowledge.fao.org/handle/20.500.14283/i6494en | herd phases, boundary, feed, outputs and allocation |
| `ipcc-livestock-2019` | method_factor | IPCC, 2019 Refinement, Volume 4 Chapter 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | buffalo emission and manure pathways |
