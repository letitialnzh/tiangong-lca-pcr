---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.guinea-fowls
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Guinea fowls

## 1. Scope and Applicability

This PCR covers live domestic guinea fowl, including producer-hatchery keets and older live birds at the producing farm gate. Record actual age/class, head count, sampled live mass, flock, route and gate. Exclude chicken, guinea-fowl meat, slaughter, shell eggs as the reference product, and post-gate handling. A surrogate-hen or outsourced hatchery route is a purchased predecessor, not an unrecorded on-farm incubation claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.guinea-fowls` |
| classification_refs | CPC 3.0 `02155`, Guinea fowls |
| covered_products | living guinea-fowl keets at producer hatchery gate and older live guinea fowl at producing farm gate |
| excluded_products | guinea-fowl eggs as reference; dead birds; meat, carcasses and slaughter products |
| representative_product | one declared live guinea-fowl route and producer handover |
| production_route | breeder egg supply when integrated, then incubation/keet selection; or sourced keets followed by brooding/growth and live capture |
| market_state | live, unprocessed; age, gate and condition declared |

Managed biological production is the parent activity. Hatchery and rearing alternatives change the starting biological object (egg or keet), process topology, energy/feed categories, count balance and validation. They are mutually exclusive final reference routes for one bird, although integrated stages may coexist as internal transfers. Free-range and housed rearing may coexist within a flock; actual feed source, water, housing energy, predator/mortality and manure-placement records determine that delta, not a generic default.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | live guinea fowl at producing hatchery or farm gate |
| How much | 1 kg measured net live weight |
| How well | live, saleable; keet or older bird; head count and sampled mass by age/class |
| How long or cycle | hatch batch or rearing cohort with breeder, replacement and shared-asset periods linked |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live guinea fowls at producer hatchery or farm gate, route and age declared |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Numida meleagris; hatchery keet or older farm bird; gate; age/class; head count; live-weight sample; cohort; mortality; breeder/keet origin; sex if relevant; free-range or housed mode |

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

The farm-gate product UUID is not a valid stand-in for the broad hatchery-or-farm reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live` | saleable birds | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Multiply counted birds by representative sampled live mass within age/class and gate strata; retain weigh-slip reconciliation. |
| `m_eggs` | eggs and hatch outcomes | number and mass | eggs, kg | Keep accepted, rejected, hatched, nonviable and transferred counts distinct; convert only with sampled egg mass. |
| `m_feed` | feed | as-fed and dry-matter mass | kg | Record measured moisture and grazing/forage estimate separately from purchased feed. |
| `m_manure` | manure emissions | named pollutant mass | kg CH4, N2O or NH3 | Keep pollutant, air medium, deposition/storage path, period and method tier distinct. |
| `inventory_reference_normalization` | all inventory rows | Actual flow property | exchange unit per reference flow | The inventory and collection aggregation fields below express final amounts per declared reference flow. Keep all raw collection records, original denominator qualifiers, route/period strata, unit conversions and allocation requirements. For each flow, first obtain its attributable amount in its own numerator unit using the existing rules; then divide by the measured accepted reference-output quantity of the same scope and multiply by the declared reference quantity. Do not mix species, states, gates or incompatible routes; count transfers and shared burdens once. A missing, zero or untraceable accepted-output denominator is a blocking data-quality issue. Keep provisional QA ranges on their explicitly stated bases; they are not conversion factors or production defaults. These are final foreground-package contributions, not replacements for stage quantitative references or stage-native unit-process datasets. Retain stage records separately. Compute normalized amount = attributable raw amount * declared reference quantity / measured accepted final reference-output quantity. Apply normalization exactly once. |
| `stage_throughput_linkage` | stage records and final package contributions | Actual flow property and its stated raw basis | retain native numerator and stage denominator units | Keep the original lot, event, cohort, period and stage denominators with their units. Reconstruct the attributable numerator A with measured stage quantity Q_stage and documented attribution before final normalization. If a quoted amount a_B corresponds to an explicit stage basis B_stage (for example, 1000 kg), use A = a_B * Q_stage / B_stage. If r_stage is already an intensity in exchange-unit per stage-unit, instead use A = r_stage * Q_stage, with no second division by B_stage. A raw attributable total is used directly. Final contribution = A * declared reference quantity / measured accepted final output. Convert compatible units explicitly and apply each attribution/allocation share exactly once; never treat a quoted amount or intensity as a raw total. Link stage transfers, losses, rejects, stocks, shared services and allocation to the same actual route, period and final-output stratum. For a 1000 kg basis retain 1000 kg explicitly. Do not assume unit yield, equal fresh/dried mass, equal head mass, equal dose quality or interchangeable gates. Missing links, unsupported unit conversion, zero denominators and untraceable allocation block dataset production. Stage-native datasets retain their own stage reference; package contributions are a separate projection. |

## 5. System Boundary

The hatchery route begins with accepted guinea-fowl hatching eggs bearing upstream breeding burden and includes incubation, hatch-pull/selection, loss handling and keet dispatch. When breeding is integrated, record its flock-year feed, water, housing, eggs, culls and manure separately; do not also attach a purchased-egg burden. The older-bird route begins with received keets and their supplier or internal hatchery burden, includes brooding/growth, feed, supplied water, housing, health, mortality, litter/manure and independent live capture at farm handover. Capture is distinct from growth because the standing flock is counted, weighed and classified into saleable live birds versus capture losses. Slaughter, meat processing and post-gate freight are outside scope. Independently transferred breeder eggs, culls and usable manure require explicit intended-output classification; unsold rejects and mortality remain waste. Attribute shared incubator, house, heating and water equipment by consuming node and service period exactly once.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | hatching eggs received by hatchery, or keets received by grow-out farm; opening breeder flock only if integrated |
| starting_condition_role | purchased or internally transferred biological starting stock carrying preceding burden |
| product_classification_scope | CPC 3.0 `02155`, living guinea fowl |
| recursive_input_rule | same-category incoming live keets retain their predecessor burden and are not counted as another final sale |
| upstream_dataset_requirement | source datasets for hatching eggs/keets, feed, energy, water, litter, health supplies and off-site treatment or disclose gaps |
| disclosure | producer gate, keet/older route, count/mass, breeder and flock periods, free-range/housed shares, mortality, losses, manure fate, allocation and unresolved UUID |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_product` | final live output | Include live Numida meleagris at declared producer hatchery or farm gate, not meat or eggs. | `unsd-cpc-2025`; `fao-poultry-species` |
| `b_hatch` | hatchery | Include accepted eggs, incubation, hatch outcome and live keet dispatch; outsource or surrogate incubation as an upstream burden if not operated. | `fao-small-poultry` |
| `b_growth` | older live birds | Include received keets, actual range/housing management, feeding, water, health, manure/mortality and live capture. | `fao-small-poultry`; `fao-guinea-field-study`; `ipcc-livestock-2019` |
| `b_exclude` | producer gate | Exclude slaughter, meat processing and transport after handover. | `fao-leap-poultry-2016` |
| `reference_handover_linkage` | actual reference-product boundary | Record reference_handover as the same physical producer handover already represented by its source rows. It must not extend the gate or insert new processing, capture, storage, transport, service or capital burdens. For a unit-process projection, keep the actually operated stage references; the handover record may be a boundary interface in the resulting foreground package, not an invented standalone operation. Select one actual qualified route/output stratum; trace matching source and input as internal transfers and expose the accepted reference product once. If the source already ended at this gate, partition its existing handover responsibility without counting it again. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder` | Integrated guinea-fowl breeder flock | conditional | enterprise owns breeder stage | biological reproduction, flock-year attribution | accepted eggs and marketed culls per breeder period |
| `hatchery` | Incubation and keet selection | conditional | producer hatches keets or integrates predecessor | managed development and hatch-pull capture | saleable live keets per hatch batch |
| `growout` | Keet brooding and growth | conditional | older live-bird final route | managed biological growth and manure | standing flock by age/cohort |
| `capture` | Live capture and farm dispatch | conditional | older live-bird final route | separate harvest/capture and final handover | saleable bird head count and live mass |
| `reference_handover` | Actual producer reference-product handover | required | One actual declared route, state and producer gate per foreground package | Record the existing physical boundary handover once; linkage/accounting responsibility, not additional treatment or distribution | 1 kg accepted product at the declared handover |

### Process: Integrated guinea-fowl breeder flock (`breeder`)

#### Inputs

##### Product flows

###### Breeder feed and forage (`breeder_feed`)

Record purchased feed and managed forage by breeder class and period; distinguish dry matter.

Denominator and scope requirements：per kg accepted hatching eggs

Raw quantity and calculation requirements: issued ration and documented forage intake Original collection denominator kind: process_output.

- Selected flow: Guinea-fowl breeder feed and forage
- Flow property / unit: Mass / kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder`
- Range: Provisional breeder-feed screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg dry matter/kg accepted eggs
  - Basis: broad first-pass check, replace with flock records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder supplied water (`breeder_water`)

Record actual drinking and husbandry water; functional group is determined from use records.

Denominator and scope requirements：per kg accepted hatching eggs

Raw quantity and calculation requirements: metered or reported supplied water by use Original collection denominator kind: process_output.

- Selected flow: Supplied water for breeder guinea fowl
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder`
- Range: Provisional breeder-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/kg accepted eggs
  - Basis: broad first-pass check, resolve use from records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder housing energy (`breeder_energy`)

Record actual lighting and heating carriers for managed breeder housing, with shared meters attributed by period.

Denominator and scope requirements：per kg accepted hatching eggs

Raw quantity and calculation requirements: metered or documented capacity-time allocation Original collection denominator kind: process_output.

- Selected flow: Energy supplied to guinea-fowl breeder housing
- Flow property / unit: Energy / kWh, MJ or native fuel unit
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder`
- Range: Provisional breeder-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh-equivalent/kg accepted eggs
  - Basis: broad initial screen, not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Selected hatching eggs (`breeder_eggs`)

Eggs meeting the declared incubation acceptance criteria are passed once to the hatchery; independently marketed eggs are co-products.

Denominator and scope requirements：per breeder period

Raw quantity and calculation requirements: accepted egg count times sampled mass Original collection denominator kind: process_output.

- Selected flow: Fresh guinea-fowl hatching eggs
- Flow property / unit: Mass / kg, with count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder`
- Range: Egg acceptance count balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: accepted egg/collected egg
  - Basis: no more accepted than collected eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `count-balance-identity`

###### Independently marketed breeder culls (`breeder_culls`)

Only live spent breeders separately transferred at their producing farm gate are intended co-products.

Denominator and scope requirements：per breeder period

Raw quantity and calculation requirements: transferred live count times sampled live mass Original collection denominator kind: process_output.

- Selected flow: Live spent guinea-fowl breeders at farm gate
- Flow property / unit: Mass / kg, with count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder`
- Range: Breeder cull count constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: marketed live cull/opening plus added breeder birds
  - Basis: marketed culls cannot exceed available flock after documented additions
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `count-balance-identity`

###### Breeder manure exported as usable product (`breeder_manure_export`)

Conditional intended output only when usable manure is independently weighed and transferred; unsold litter remains waste.

Denominator and scope requirements：per breeder period

Raw quantity and calculation requirements: independently transferred wet mass with moisture and destination Original collection denominator kind: process_output.

- Selected flow: Usable breeder manure at farm handover
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder`
- Range: Provisional exported-manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg accepted eggs
  - Basis: broad initial screen; require independent transfer evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Breeder egg rejects (`breeder_rejects`)

Record unsuitable/broken eggs and their fate; do not report them as accepted hatchery inputs.

Denominator and scope requirements：per breeder period

Raw quantity and calculation requirements: rejected count times sampled mass or weighed mass Original collection denominator kind: process_output.

- Selected flow: Rejected guinea-fowl eggs
- Flow property / unit: Mass / kg, with count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder`
- Range: Egg rejection count balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: rejected egg/collected egg
  - Basis: no more rejected than collected eggs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `count-balance-identity`

###### Breeder mortality and manure residue (`breeder_residues`)

Record dead breeders and removed litter/manure by material and treatment fate; independently sold usable manure is a separate output.

Denominator and scope requirements：per breeder period

Raw quantity and calculation requirements: weighed residue and count-derived carcass mass Original collection denominator kind: process_output.

- Selected flow: Breeder carcasses and litter/manure residues
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder`
- Range: Provisional breeder-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg accepted eggs
  - Basis: broad preliminary screen, distinguish actual manure sales
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Breeder manure methane to air (`breeder_ch4`)

Count biogenic CH4 from identified breeder manure storage only, not fuel combustion.

Denominator and scope requirements：per kg accepted hatching eggs

Raw quantity and calculation requirements: volatile solids by pathway and compatible CH4 factor Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional breeder CH4 review bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg CH4/kg accepted eggs
  - Basis: broad initial screen, not an emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder manure nitrous oxide to air (`breeder_n2o`)

Calculate direct N2O only from the breeder manure path, keeping it separate from grow-out manure.

Denominator and scope requirements：per kg accepted hatching eggs

Raw quantity and calculation requirements: period-specific excreted N and management factor calculation Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional N2O review bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/kg accepted eggs
  - Basis: broad initial screening, not a factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Breeder manure ammonia to air (`breeder_nh3`)

Record NH3 to air only for a compatible nitrogen volatilization pathway and period.

Denominator and scope requirements：per kg accepted hatching eggs

Raw quantity and calculation requirements: manure nitrogen and pathway-specific volatilization calculation Original collection denominator kind: process_output.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_breeder_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional breeder NH3 review bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg NH3/kg accepted eggs
  - Basis: broad initial screen, not an emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Incubation and keet selection (`hatchery`)

#### Inputs

##### Product flows

###### Hatching eggs received (`hatching_eggs`)

Whether purchased or internally transferred, accepted guinea-fowl eggs enter with their complete breeder burden once.

Denominator and scope requirements：per kg saleable hatchery-gate live keets

Raw quantity and calculation requirements: accepted receipt count times sampled egg mass Original collection denominator kind: process_output.

- Selected flow: Fresh guinea-fowl hatching eggs received
- Flow property / unit: Mass / kg, with count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hatchery`
- Range: Provisional egg-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg saleable keets
  - Basis: broad initial screen, replace with hatch ledger
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Incubation energy (`incubation_energy`)

Meter actual electricity and fuels for egg storage, incubation and hatch-pull under this producer's control.

Denominator and scope requirements：per kg saleable hatchery-gate live keets

Raw quantity and calculation requirements: meter readings and documented shared-service shares Original collection denominator kind: process_output.

- Selected flow: Incubation energy carriers
- Flow property / unit: Energy / kWh, MJ or native fuel unit
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hatchery`
- Range: Provisional incubation-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh-equivalent/kg saleable keets
  - Basis: broad initial screen, not a default factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable hatchery-gate keets (`hatchery_keets`)

Count and sample-weigh healthy live keets at producer hatchery dispatch, not at a later farm gate.

Denominator and scope requirements：per hatch batch, then 1 kg final keet route output

Raw quantity and calculation requirements: saleable keet count times representative live mass Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Live guinea-fowl keets at producer hatchery gate
- Flow property / unit: Mass / kg, with count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hatchery`
- Range: Hatch count constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: saleable keet/accepted egg
  - Basis: no more than one saleable keet per accepted egg
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `count-balance-identity`

##### Waste flows

###### Hatch losses (`hatch_losses`)

Classify unhatched eggs, shells and non-saleable/dead keets by actual destination; marketed birds are excluded from this row.

Denominator and scope requirements：per hatch batch

Raw quantity and calculation requirements: weighed or count-derived residual mass Original collection denominator kind: process_output.

- Selected flow: Guinea-fowl hatch residues and losses
- Flow property / unit: Mass / kg, with count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hatchery`
- Range: Provisional hatch-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg accepted egg and hatch biomass
  - Basis: provisional material fraction, verify detailed fate balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Keet brooding and growth (`growout`)

#### Inputs

##### Product flows

###### Keets received for grow-out (`received_keets`)

Retain supplier or integrated hatchery identity, age, count, mass and upstream burden; no second final keet sale.

Denominator and scope requirements：per kg farm-gate saleable live guinea fowl

Raw quantity and calculation requirements: receipt count times sampled live mass Original collection denominator kind: process_output.

- Selected flow: Live guinea-fowl keets received
- Flow property / unit: Mass / kg, with count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Range: Provisional keet-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg farm-gate live bird
  - Basis: broad initial screen, replace with receiving records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out feed and forage (`growout_feed`)

Separate purchased ration from measured or defensibly estimated free-range forage; record moisture and bird phase.

Denominator and scope requirements：per kg farm-gate saleable live guinea fowl

Raw quantity and calculation requirements: issued feed minus returns plus declared forage intake method Original collection denominator kind: process_output.

- Selected flow: Guinea-fowl grow-out feed and forage
- Flow property / unit: Mass / kg dry matter
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Range: Provisional feed-conversion screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg dry matter/kg saleable live bird
  - Basis: broad initial screen, not a species factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied grow-out water (`growout_water`)

Record supplied drinking and cleaning water by use. Ground precipitation is not an automatically purchased Product input.

Denominator and scope requirements：per kg farm-gate saleable live guinea fowl

Raw quantity and calculation requirements: metered or recorded supplied water by function Original collection denominator kind: process_output.

- Selected flow: Supplied water for guinea-fowl grow-out
- Flow property / unit: Volume / m3
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Range: Provisional supplied-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3/kg saleable live bird
  - Basis: broad initial screen, select function from records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Housing energy (`growout_energy`)

Include heating, brooding, ventilation and lighting carriers only for actual controlled facilities, with shared meters apportioned.

Denominator and scope requirements：per kg farm-gate saleable live guinea fowl

Raw quantity and calculation requirements: metered or attributed carrier consumption Original collection denominator kind: process_output.

- Selected flow: Grow-out and brooding energy carriers
- Flow property / unit: Energy / kWh, MJ or native fuel unit
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Range: Provisional housing-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh-equivalent/kg saleable live bird
  - Basis: broad initial screen, not a route default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standing flock for capture (`standing_flock`)

The live flock is an internal grow-out handoff, not a second farm-gate product sale.

Denominator and scope requirements：per grow-out cohort

Raw quantity and calculation requirements: standing count times sampled live mass Original collection denominator kind: process_output.

- Selected flow: Standing live guinea-fowl flock
- Flow property / unit: Mass / kg, with count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Range: Survival count constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: standing bird/received keet
  - Basis: reconcile additions, deaths and transfers
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `count-balance-identity`

###### Grow-out manure exported as usable product (`growout_manure_export`)

Conditional intended output only for weighed manure leaving the farm as usable material; do not also include it in waste.

Denominator and scope requirements：per grow-out cohort

Raw quantity and calculation requirements: weighed export with moisture, recipient and gate Original collection denominator kind: process_output.

- Selected flow: Usable guinea-fowl grow-out manure at farm handover
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Range: Provisional exported-manure screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg saleable live bird
  - Basis: broad initial screen; require independent transfer evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mortalities and litter (`growout_residues`)

Record dead birds and removed litter/manure separately by material and fate; exported usable manure is a co-product only with transfer evidence.

Denominator and scope requirements：per grow-out cohort

Raw quantity and calculation requirements: weighed residues and counted deaths times sampled mass Original collection denominator kind: process_output.

- Selected flow: Guinea-fowl mortality and litter/manure residues
- Flow property / unit: Mass / kg
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_growout`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg saleable live bird
  - Basis: broad first-pass check, distinguish sold manure
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Grow-out manure methane to air (`growout_ch4`)

Calculate biogenic CH4 only for documented grow-out manure storage, not an assumed universal route.

Denominator and scope requirements：per kg farm-gate saleable live guinea fowl

Raw quantity and calculation requirements: pathway volatile solids and compatible CH4 factor calculation Original collection denominator kind: process_output.

- Selected flow: Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional CH4 review bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg CH4/kg saleable live bird
  - Basis: broad initial screen, not an emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Manure nitrous oxide to air (`growout_n2o`)

Calculate direct N2O for non-overlapping stored-litter or range-deposition pathways from actual flock nitrogen.

Denominator and scope requirements：per kg farm-gate saleable live guinea fowl

Raw quantity and calculation requirements: pathway-specific excreted N and factor calculation Original collection denominator kind: process_output.

- Selected flow: Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional N2O review bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/kg saleable live bird
  - Basis: broad initial screening, not an emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out manure ammonia to air (`growout_nh3`)

Record NH3 to air only for the modelled litter or range pathway with a compatible volatilization basis.

Denominator and scope requirements：per kg farm-gate saleable live guinea fowl

Raw quantity and calculation requirements: pathway nitrogen and NH3 volatilization calculation Original collection denominator kind: process_output.

- Selected flow: Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manure`
- Sources: `ipcc-livestock-2019`
- Range: Provisional NH3 review bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg NH3/kg saleable live bird
  - Basis: broad initial screen, not an emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Live capture and farm dispatch (`capture`)

#### Inputs

##### Product flows

###### Standing flock received (`capture_flock`)

Take the standing managed flock and its prior burden into capture once.

Denominator and scope requirements：per farm-gate capture batch

Raw quantity and calculation requirements: counted flock and sampled live mass Original collection denominator kind: process_output.

- Selected flow: Standing guinea-fowl flock entering capture
- Flow property / unit: Mass / kg, with count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Capture count balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: captured bird/standing bird
  - Basis: capture outcome fraction cannot exceed standing flock
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `count-balance-identity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Farm-gate live guinea fowl (`farm_live_guinea_fowl`)

Only unprocessed saleable live birds dispatched at the producing farm gate use this exact confirmed identity.

Denominator and scope requirements：per capture batch, then 1 kg final farm route output

Raw quantity and calculation requirements: saleable head count times representative live mass Original collection denominator kind: process_output.

Producer-handover linkage: Only when selected as the actual terminal source for this route, this state/gate-specific row supplies the same accepted physical goods to reference_handover_input. In that case it is an internal handover record, not a second external reference sale; otherwise retain its original intermediate role. Retain its exact identity and original route condition. Choose the actual terminal source, not all successive transfers; match the same lot and compatible species/state/gate evidence. A narrower fixed gate or species is never broadened. The handover interface adds no processing, transport, yield assumption or repeated handling burden.

- Selected flow: Guinea fowls, live unprocessed, production mix at farm gate `cf28b5aa-56c1-46b7-9ec5-b91d3daaf2d3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: Fixed (`fixed`)
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Saleable capture count constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: saleable bird/standing bird
  - Basis: no more saleable birds than standing birds
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `count-balance-identity`

##### Waste flows

###### Capture rejects and losses (`capture_losses`)

Record injured, dead or otherwise non-saleable birds after capture with destination; do not use the final Product UUID.

Denominator and scope requirements：per capture batch

Raw quantity and calculation requirements: observed rejects times sampled mass or direct weighing Original collection denominator kind: process_output.

- Selected flow: Guinea-fowl live-capture rejects and losses
- Flow property / unit: Mass / kg, with count
- Amount rule: Calculate the attributable final-package exchange under inventory_reference_normalization and stage_throughput_linkage using the matched raw records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_capture`
- Range: Capture loss count constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: rejected bird/standing bird
  - Basis: capture reject fraction of standing flock
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `count-balance-identity`

##### Elementary flows

### Process: Actual producer reference-product handover (`reference_handover`)

Instantiate one foreground reference from the actual handed-over lot, with all required qualifiers. The category may cover alternative states and producer gates, but each package has one declared species/state/gate/grade stratum and one measured accepted reference-output denominator. Do not pool incompatible states or claim equal service from equal mass. Route-specific source rows and reference_handover describe the same physical boundary event; their linked internal transfer is not another sale or another physical operation.

#### Inputs

##### Product flows

###### Live guinea fowls at producer hatchery or farm gate, route and age declared for actual producer-handover linkage (`reference_handover_input`)

This input matches the accepted goods represented by `hatchery_keets`, `farm_live_guinea_fowl` under their unchanged route conditions. It is an internal source-to-handover linkage, not a newly purchased same-category good and not extra production. The matching source and input cancel at the package boundary.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `hatchery_keets`, `farm_live_guinea_fowl`

Required product-instance qualifiers: Numida meleagris; hatchery keet or older farm bird; gate; age/class; head count; live-weight sample; cohort; mortality; breeder/keet origin; sex if relevant; free-range or housed mode

- Selected flow: Live guinea fowls at producer hatchery or farm gate, route and age declared for actual producer-handover linkage
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

###### Live guinea fowls at producer hatchery or farm gate, route and age declared (`reference_product_handover`)

This is the actual accepted reference product at the declared producer boundary, measured under cp_reference_handover. It is the sole external reference output; instantiate its real identity from the lot, not a broad fixed UUID.

The actual route/state/gate is selected from foreground handover evidence; retain every required qualifier. Use the actual terminal source for the same accepted physical lot, not every successive stage transfer. Fixed source identities apply only to their exact species/state/gate; use an unbound compatible source role for other covered routes and resolve the actual foreground exchange before final dataset creation.

Selected source/interface rows: `hatchery_keets`, `farm_live_guinea_fowl`

Required product-instance qualifiers: Numida meleagris; hatchery keet or older farm bird; gate; age/class; head count; live-weight sample; cohort; mortality; breeder/keet origin; sex if relevant; free-range or housed mode

- Selected flow: Live guinea fowls at producer hatchery or farm gate, route and age declared
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
| `a_output_set` | breeder, hatchery, grow-out | Identify accepted eggs at breeder handover, saleable keets at hatchery gate, older live birds at farm gate, and only actually sold culls or manure as independent intended outputs. Rejects, mortality, shells and unsold litter are waste or loss, not free co-products. | `fao-small-poultry`; `fao-leap-poultry-2016` |
| `a_method` | genuinely independent co-products | Prefer demonstrated physical causality; otherwise declare a single period-specific mass or economic allocation with output evidence and sensitivity. A transferred egg/keet is not also a final live-bird sale when integrated. | `fao-leap-poultry-2016` |
| `a_period` | breeder, hatch and growth phases | Link breeder replacement, egg production, hatch batches, keet cohorts, culls and shared assets to their actual periods. Opening/closing stock and mortality are reconciled, and burden is assigned once across periods. | `fao-leap-poultry-2016` |
| `a_shared` | incubator, house, heat, meter, water equipment | Enumerate breeder, hatchery and grow-out users and service periods; allocate by metered use or documented capacity-time and sum shares to the single original ledger. | `fao-leap-poultry-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_breeder` | `breeder` | feed, water, energy, eggs, culls, manure and rejects | breeder ledger | opening/closing flock; feed; water/energy meters; egg count/mass; reject reason; culls; manure export/fate; period | husbandry logs, meters, count and scale; Raw aggregation requirements: sum by period; reconcile eggs, culls and exported manure once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head, eggs, kg, m3, kWh | daily/period | full breeder period | integrated breeder | per reference flow | signed flock, egg and transfer balance; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_breeder_manure` | `breeder` | breeder CH4, N2O, NH3 | breeder manure record | bird-period; volatile solids; excreted N; storage/range deposition shares; factor tier | manure/farm logs and pathway method; Raw aggregation requirements: calculate distinct pathway emissions once. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, fraction | period | full breeder and manure period | integrated breeder | per reference flow | factor and pathway evidence; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_hatchery` | `hatchery` | eggs, energy, keets, losses | hatch batch | egg source/count/mass; setting; energy meters; hatch, reject and loss counts; keet sample weight | receipt, incubation and dispatch logs; Raw aggregation requirements: count balance and count × sampled mass. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | eggs, head, kg, kWh | batch | receipt through hatchery gate | producer hatchery | per reference flow | signed hatch balance and meter readings; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_growout` | `growout` | keets, feed, water, energy, standing flock, manure export and residues | growth cohort | keet source/count/mass; ration/moisture; forage method; water/energy; mortality; litter/manure mass/export/fate; count | receipts, daily logs, scales, meters; Raw aggregation requirements: reconcile stock; sum inputs by route/period and distinguish exported manure. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head, kg, m3, kWh | daily/cohort | full brooding/growth period | producing farm | per reference flow | invoices, scales and stock reconciliation; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_manure` | `growout` | grow-out CH4, N2O, NH3 | manure pathway | bird-period, volatile solids, N excretion, storage and range shares, factor tier | farm logs and pathway calculation; Raw aggregation requirements: model non-overlapping direct pathways. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | kg, fraction | cohort/period | full manure period | producing farm | per reference flow | factor and destination log; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_capture` | `capture` | standing, saleable and loss birds | farm dispatch | standing/saleable/reject counts, sampled weight, age, dispatch time and gate | direct count and sampled scale; Raw aggregation requirements: count × sampled mass, one final dispatch. Apply the existing route, period, conversion and allocation rules; retain raw totals and the measured accepted reference-output denominator for the same scope. Perform final normalization exactly once; do not divide an already normalized amount again. | head, kg | each dispatch | capture through farm gate | producing farm | per reference flow | weigh and signed delivery slips; traceable numerator, accepted reference-output denominator and normalization worksheet |
| `cp_reference_handover` | `reference_handover` | accepted product and matched internal source transfer | producer handover ledger | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | Measure accepted net product at the same actual gate; reconcile the listed state/gate-specific source rows and the linked input with this single physical output. Keep rejects, stock changes and other sales separate. No additional handling or transport is imputed. | kg; native source quantities | each actual handover | matched source and handover periods | declared producer gate only | per reference flow | traceable acceptance record, same-lot source-to-output ledger, calibrated quantity method and normalization worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_live_mass` | final bird outputs | saleable heads × representative mean live mass by age/class and route | counts and sampled weights | kg live guinea fowl | `count-balance-identity` |
| `c_hatch` | hatch batch | accepted eggs = saleable keets + non-saleable keets + unhatched eggs + documented other outcomes, in counts | receipt and hatch log | reconciled hatch yield and losses | `count-balance-identity` |
| `c_cohort` | grow-out | opening keets + receipts − mortality − final transfer = closing heads, with other transfers separately identified | cohort ledger | reconciled head balance | `count-balance-identity` |
| `c_manure` | direct CH4, N2O, NH3 | apply declared non-overlapping manure volatile-solids and N pathways with compatible factor tier | bird-period, volatile solids, excreted N, pathway shares | kg CH4, N2O and NH3 to air | `ipcc-livestock-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_identity` | reference | species, age/class, live condition, producer gate, count and mass are explicit | dispatch and sample record |
| `q_predecessor` | eggs and keets | source and preceding burden are traceable; outsourcing or surrogate incubation is not counted as on-farm work | supplier dataset and receipt |
| `q_stock` | breeder and grow-out | reconcile opening stock, births/hatches, receipts, mortality, culls, transfers and closing stock by period | signed stock ledger |
| `q_route` | free-range or housed | actual mode, forage method, housing energy, mortality and manure deposition/storage are recorded, not assumed | flock/field/house logs |
| `q_outputs` | co-products and waste | document independently marketed eggs/culls/manure and each rejected material's fate | sales and treatment transfer |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_gate` | reference and final output | Reject unidentified hatchery/farm mixture; do not use farm-gate fixed UUID for a keet at hatchery gate. | `unsd-cpc-2025` |
| `v_egg` | integrated breeder and hatchery | Reconcile egg receipt, hatch, rejects and losses; no more than one saleable keet per accepted egg. | `count-balance-identity` |
| `v_stock` | grow-out and capture | Reconcile keet receipts, mortality, standing flock, capture losses and saleable dispatch with count/mass evidence. | `count-balance-identity` |
| `v_deltas` | range/housed routes | Check actual feed, water, housing energy, free-range placement and mortality evidence for each claimed route; no imported route defaults. | `fao-guinea-field-study` |
| `v_attribution` | intended outputs, periods and shared assets | Require real output gates, declared allocation basis, breeder/hatch/cohort periods and one shared-asset ledger; prohibit duplicate internal keet burden. | `fao-leap-poultry-2016` |
| `v_emission` | manure CH4, N2O and NH3 | Confirm exact substance, air medium, non-overlapping storage/range pathways, factor tier and period before using each fixed identity. | `ipcc-livestock-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | producer-gate live guinea-fowl foreground data package |
| downstream_use | secondary_dataset and background_dataset for process and lifecyclemodel |
| allowed_use | declared hatchery-keet or older-farm-bird route with recorded count, mass and preceding burden |
| excluded_use | meat, slaughter, eggs as reference, unidentified mixed gate or outsourced hatchery as on-farm operation |
| required_metadata | producer, species, gate, age/class, head count, sampled mass, flock/batch, predecessor, range/housing mode, mortality, manure and shared periods |
| required_quality_disclosure | coverage, sampling, predecessor gaps, co-product allocation, manure method, unbound reference/keets and concrete flow identity resolution |
| update_trigger | change in route, predecessor, breed/flock system, mortality, housing, manure, co-output or material data gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | species/product classification |
| `fao-poultry-species` | official_guidance | [FAO poultry species](https://www.fao.org/poultry-production-products/production/poultry-species/) | guinea-fowl biological identity |
| `fao-small-poultry` | extension_guidance | [FAO small-scale poultry production](https://www.fao.org/4/y5169e/y5169e03.htm) | eggs, keets and smallholder route roles |
| `fao-guinea-field-study` | literature | [FAO AGRIS guinea-fowl field study](https://agris.fao.org/search/en/providers/122397/records/67484ec07625988a371a0b9c) | conditional range/housed and mortality evidence |
| `fao-leap-poultry-2016` | official_guidance | [FAO LEAP poultry supply-chain guidance](https://openknowledge.fao.org/handle/20.500.14283/i6421en) | boundary, output and period attribution |
| `ipcc-livestock-2019` | method_factor | [IPCC 2019 Refinement Volume 4 Chapter 10](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | manure CH4 and N2O pathways; NH3 pathway disclosure |
| `count-balance-identity` | method_factor | Bird and egg count conservation at declared handover | count and transfer checks |
