---
pcr_id: pcr.wild-live-eviscerated-scuba-harvested-red-sea-cucumber
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Wild live eviscerated SCUBA-harvested red sea cucumber

## 1. Scope and Applicability

This category covers Alaska wild Apostichopus californicus (historical Parastichopus californicus), collected by boat-supported SCUBA divers by hand in mesh bags, prepared on the vessel by actual poking/evisceration and draining, and physically received alive and raw by the first shore processor. ADFG describes the route; actual lot records must establish eligibility and quantities. The historical report supports process order only, not present rates, laws, viability guarantees or holding limits.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-eviscerated-scuba-harvested-red-sea-cucumber |
| classification_refs | cpc:3.0:04511 (narrower) |
| covered_products | Alaska wild A. californicus, live eviscerated drained raw never-frozen animal at first shore-processor physical receipt |
| excluded_products | Whole final reference; other species; aquaculture; hookah/surface-supplied or non-SCUBA harvest; ornamental; dead/frozen/salted/cooked/dried products; separated skin/muscle products |
| representative_product | Boat-harvested wild red sea cucumber delivered live after vessel evisceration and draining |
| production_route | SCUBA hand collection → vessel primary conditioning → actual sorting → evidenced preservation or bypass → tote presentation → all logistics → first shore physical receipt |
| market_state | Live, eviscerated, drained, raw and never frozen; native skin and muscle remain together |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Eligible animal at first physical shore-processor receipt |
| How much | 1 kg |
| How well | Observed live, eviscerated, raw, drained and never frozen, excluding viscera, free water, tote and rejects |
| How long or cycle | One traceable accepted lot within declared trip, season and shared-asset service periods, including linked failed trips and opening/closing stock |
| reference_flow_link | `received_live_eviscerated` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw live eviscerated drained red sea cucumber at first physical shore-processor receipt |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; wild origin; Alaska location; boat-supported SCUBA; lot/trip/season; actual vessel evisceration; drained-weighing/tare protocol; observed live state at physical receipt; raw never-frozen; skin/muscle unseparated; receiver/time/place; holding intervention or evidenced bypass; reporting/asset periods |

Required qualifiers must appear in foreground package metadata or equivalent traceable records. Define A as the positive accepted net drained eviscerated animal mass at the actual reference gate for the attributable lot/output pool. Only that same-lot reference has A/A=1; internal whole or prepared transfers are measured independently.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | A is weighed at physical shore receipt with calibrated scale, recorded tare and reproducible actual drain method, excluding removed viscera, free water, totes and rejected/non-reference outputs; observe live state separately. Whole intake cannot be converted using a default yield. |
| native_units | all inventory rows | Actual instance property | native unit | Keep each source unit (kg, kWh, h, tkm or item-use); document any measured density or count-to-mass conversion and uncertainty. Never replace an energy/service numerator with animal mass. Every inventory amount and range uses per 1 kg reference flow and its own node protocol. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild marine A. californicus at recorded Alaska capture location before SCUBA removal; trip preparation and attributable upstream supplies included |
| starting_condition_role | Unmanaged natural biological stock, not a purchased seed or farm growout input |
| product_classification_scope | Narrower live wild sea cucumber state within cpc:3.0:04511; no whole-leaf claim |
| recursive_input_rule | Record actual same-category purchased animal inputs separately with species/origin/state and verified upstream data; no recursive wild growth construction or hidden duplication |
| upstream_dataset_requirement | Verified inventories for actual fuels, air supply, water, energy, materials, assets and complete services at declared boundaries; exclude duplicate components |
| disclosure | Location/species/wild origin; observed route; batch/trip/season and asset periods; actual receipt gate; conditional states; all stock, losses, destinations, allocation and gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | product_system | Include Alaska wild A. californicus boat-supported SCUBA hand collection, vessel evisceration/draining, actual sorting, bounded preservation when observed, tote presentation and every logistics leg until first physical shore-processor receipt. Capture removes a whole animal; conditioning makes the reference state. Neither invoices nor vessel ownership ends the boundary. | adfg-dive-sea-cucumber; adfg-walker-dive-fisheries-2006 |
| physical_transfer | all_nodes | T_CC whole animals and T_CM incidental matter pair capture to condition; T_CS prepared animals and T_SM residual incidental matter pair condition to sort; T_SH pairs sort to active hold, then T_HP to present; proven bypass T_SP pairs sort directly to present; T_PD pairs present to deliver. Each identifier has one physical quantity/state/time and paired output/input. Keep lot opening/closing stock and leakage reconciliation; unknown branch is a gap, not bypass. |  |
| period_assets | all_nodes | Use trip/lot batches inside a declared reporting season; enumerate active, failed and no-accepted-output trips, maintenance/cleanup, opening/closing animal stock, tote cycles, vessel/dive/compressor/holding assets, replacement and retirement periods. Link each event and asset to all consuming nodes and service periods; absence of a claimed intervention needs records. Do not prescribe asset lifetimes. |  |
| fate_boundary | all_nodes | Track actual intended animal grades and useful by-products separately at every node. Discarded viscera/body fluid, animal mortality, incidental matter and cleanup require actual destination: treatment waste or identified direct environmental return/release. Returned carrier water is separate from pollutants; purchased water is separate from abstraction. No avoided-burden, restoration or natural-feeding credit is implied. |  |
| outside_gate | downstream | Exclude shore-processor holding and muscle/skin separation after first physical receipt, cooking, drying, freezing and later distribution/use. Existing wild stock growth has no invented aquaculture feed/seed burden; actual purchased same-category animal inputs need separate verified upstream datasets and must not masquerade as this wild-capture reference. | adfg-dive-sea-cucumber |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| capture | Boat-supported SCUBA hand capture | required | Every included lot | Wild seabed to whole collected animal; independent of later preparation | per 1 kg reference flow |
| condition | Vessel primary evisceration and draining | required | Every included lot undergoes documented poking/evisceration and draining | Collected whole animal to raw live eviscerated drained animal | per 1 kg reference flow |
| sort | Sorting into actual destinations | required | Every included lot | Prepared lot to eligible grade, alternative destinations and discarded matter | per 1 kg reference flow |
| hold | Bounded preservation intervention | conditional | Actual recorded cooling, aeration or managed holding before physical receipt; record bypass only when absence is evidenced | Sorted usable animals to post-intervention usable animals | per 1 kg reference flow |
| present | Reusable tote presentation | required | Every included lot is presented for the selected recipient | Eligible loose animal to identified tote lot; transport is a separate node | per 1 kg reference flow |
| deliver | All pre-receipt logistics and physical shore receipt | required | Every actual movement up to first physical shore-processor receipt | Presented lot to physically received eligible lot | per 1 kg reference flow |

Production mode is trip/lot batch capture, with seasonal and asset-service pools. Logs link every transfer, cleanup, changeover, failed batch and stock event to a node and period. No mandatory storage is inserted merely for elapsed transit time. Each applicable Section 8 collection obligation becomes zero, one or multiple actual exchanges with its own identity, unit, amount, fate and U bound; unknown actual activity cannot be set to zero.

### Process:  Boat-supported SCUBA hand capture (`capture`)

#### Inputs

##### Product flows

###### Supplied compressed SCUBA breathing air (`scuba_air`)

Purchased filled-cylinder air is a product supply; own compression uses measured electricity/fuel instead of duplicate purchased air production. No hookah branch or oxygen addition is presumed.

- Selected flow: Supplied compressed SCUBA breathing air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual supplied breathing-air mass / A; actual fill electricity belongs to collect_capture_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_capture`
- Range: Evidence-gap interval; U_scuba_air must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_scuba_air
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Wild red sea cucumber removal from marine stock (`wild_removal`)

Natural resource removal is recorded once as whole living animal mass. It is not a purchased aquaculture animal and does not justify an ecosystem credit.

- Selected flow: Wild red sea cucumber removal from marine stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual whole animals removed from marine stock / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_capture`
- Sources: `adfg-dive-sea-cucumber`
- Range: Evidence-gap interval; U_wild_removal must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_wild_removal
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Whole raw live red sea cucumber at vessel conditioning handoff (`whole_catch`)

Transfer T_CC: whole animal, before evisceration; retain observed live status, time, lot and drained surface-water weighing method. Pair the same quantity with condition_whole.

- Selected flow: Whole raw live red sea cucumber at vessel conditioning handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_CC whole-animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_capture`
- Sources: `adfg-walker-dive-fisheries-2006`
- Range: Evidence-gap interval; U_whole_catch must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_whole_catch
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

### Process:  Vessel primary evisceration and draining (`condition`)

#### Inputs

##### Product flows

###### Whole raw live red sea cucumber received for evisceration (`condition_whole`)

Receive T_CC with the same whole-animal mass/state/time ledger as whole_catch. Do not equate whole intake to final drained eviscerated mass.

- Selected flow: Whole raw live red sea cucumber received for evisceration
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_CC whole-animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condition`
- Sources: `adfg-walker-dive-fisheries-2006`
- Range: Evidence-gap interval; U_condition_whole must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_condition_whole
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Direct seawater abstraction for actual vessel conditioning/cleanup (`condition_seawater_abstraction`)

Only when directly abstracted from the marine environment, record actual source/site, intake volume and time, metering or validated flow-time method, density/temperature/salinity for any mass conversion, and destination balance. This is separate from supplied product water and incidental entrained water. Reconcile returned carrier water, retained/evaporated water, collected treatment effluent and separately identified pollutants without duplicate water or pollutant mass. Unknown abstraction is a gap; no abstraction is evidenced, not assumed.

- Selected flow: Direct seawater abstraction for actual vessel conditioning/cleanup
- Flow property / unit: Volume / m3
- Amount rule: Measured actual directly abstracted seawater volume / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condition`
- Range: Evidence-gap interval; U_condition_seawater_abstraction must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_condition_seawater_abstraction
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Raw live eviscerated drained red sea cucumber for sorting (`conditioned_catch`)

Transfer T_CS after actual poking/evisceration and draining, before muscle/skin separation. Pair with sort_intake at the same animal mass and observed state.

- Selected flow: Raw live eviscerated drained red sea cucumber for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_CS drained eviscerated animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condition`
- Sources: `adfg-walker-dive-fisheries-2006`
- Range: Evidence-gap interval; U_conditioned_catch must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_conditioned_catch
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Directly returned carrier seawater (`condition_water_return`)

Record separately the actual returned carrier-water mass and marine receiving site; exclude viscera, animal mass and pollutant substances. Water not collected or added is not invented as an input.

- Selected flow: Directly returned carrier seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual directly returned carrier-water mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condition`
- Range: Evidence-gap interval; U_condition_water_return must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_condition_water_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process:  Sorting into actual destinations (`sort`)

#### Inputs

##### Product flows

###### Raw live eviscerated drained red sea cucumber received for sorting (`sort_intake`)

Receive T_CS with its same prepared-animal state and mass; any further draining and viability change is recorded here.

- Selected flow: Raw live eviscerated drained red sea cucumber received for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_CS drained eviscerated animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sort`
- Range: Evidence-gap interval; U_sort_intake must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_sort_intake
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

###### Direct seawater abstraction for actual sorting/cleanup (`sort_seawater_abstraction`)

Only when directly abstracted from the marine environment, record actual source/site, intake volume and time, metering or validated flow-time method, density/temperature/salinity for any mass conversion, and destination balance. This is separate from supplied product water and incidental entrained water. Reconcile returned carrier water, retained/evaporated water, collected treatment effluent and separately identified pollutants without duplicate water or pollutant mass. Unknown abstraction is a gap; no abstraction is evidenced, not assumed.

- Selected flow: Direct seawater abstraction for actual sorting/cleanup
- Flow property / unit: Volume / m3
- Amount rule: Measured actual directly abstracted seawater volume / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sort`
- Range: Evidence-gap interval; U_sort_seawater_abstraction must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_sort_seawater_abstraction
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Eligible live eviscerated drained animals to preservation (`sorted_to_hold`)

Transfer T_SH only when hold is active, paired with hold_intake; report actual quality criterion and live assessment.

- Selected flow: Eligible live eviscerated drained animals to preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_SH eligible animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sort`
- Range: Evidence-gap interval; U_sorted_to_hold must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_sorted_to_hold
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Eligible live eviscerated drained animals bypassing preservation (`sorted_bypass`)

Transfer T_SP only with evidenced absence of bounded holding, paired with present_bypass. Unknown holding state cannot select this output.

- Selected flow: Eligible live eviscerated drained animals bypassing preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_SP bypass animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sort`
- Range: Evidence-gap interval; U_sorted_bypass must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_sorted_bypass
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

### Process:  Bounded preservation intervention (`hold`)

#### Inputs

##### Product flows

###### Eligible live eviscerated drained animals entering preservation (`hold_intake`)

Receive T_SH only for documented active intervention; preserve source lot, pre-intervention viability and time.

- Selected flow: Eligible live eviscerated drained animals entering preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_SH eligible animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hold`
- Range: Evidence-gap interval; U_hold_intake must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_hold_intake
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Direct seawater abstraction for actual bounded preservation (`hold_seawater_abstraction`)

Only when directly abstracted from the marine environment, record actual source/site, intake volume and time, metering or validated flow-time method, density/temperature/salinity for any mass conversion, and destination balance. This is separate from supplied product water and incidental entrained water. Reconcile returned carrier water, retained/evaporated water, collected treatment effluent and separately identified pollutants without duplicate water or pollutant mass. Unknown abstraction is a gap; no abstraction is evidenced, not assumed.

- Selected flow: Direct seawater abstraction for actual bounded preservation
- Flow property / unit: Volume / m3
- Amount rule: Measured actual directly abstracted seawater volume / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hold`
- Range: Evidence-gap interval; U_hold_seawater_abstraction must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_hold_seawater_abstraction
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Post-intervention live eviscerated drained animals for presentation (`held_to_present`)

Transfer T_HP, paired with present_held at the same observed live eviscerated state and net drained animal mass after intervention.

- Selected flow: Post-intervention live eviscerated drained animals for presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_HP post-intervention animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hold`
- Range: Evidence-gap interval; U_held_to_present must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_held_to_present
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

### Process:  Reusable tote presentation (`present`)

#### Inputs

##### Product flows

###### Post-intervention live eviscerated drained animals received for presentation (`present_held`)

Receive T_HP paired with held_to_present; do not also receive T_SP for the same lot.

- Selected flow: Post-intervention live eviscerated drained animals received for presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_HP post-intervention animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_present`
- Range: Evidence-gap interval; U_present_held must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_present_held
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Unheld live eviscerated drained animals received for presentation (`present_bypass`)

Receive T_SP paired with sorted_bypass only when absence of bounded preservation is evidenced.

- Selected flow: Unheld live eviscerated drained animals received for presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_SP bypass animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_present`
- Range: Evidence-gap interval; U_present_bypass must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_present_bypass
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Direct seawater abstraction for actual tote preparation/cleaning (`present_seawater_abstraction`)

Only when directly abstracted from the marine environment, record actual source/site, intake volume and time, metering or validated flow-time method, density/temperature/salinity for any mass conversion, and destination balance. This is separate from supplied product water and incidental entrained water. Reconcile returned carrier water, retained/evaporated water, collected treatment effluent and separately identified pollutants without duplicate water or pollutant mass. Unknown abstraction is a gap; no abstraction is evidenced, not assumed.

- Selected flow: Direct seawater abstraction for actual tote preparation/cleaning
- Flow property / unit: Volume / m3
- Amount rule: Measured actual directly abstracted seawater volume / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_present`
- Range: Evidence-gap interval; U_present_seawater_abstraction must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_present_seawater_abstraction
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Tote-presented live eviscerated drained red sea cucumber lot (`presented_lot`)

Transfer T_PD to deliver_intake with identical net animal mass, tote IDs, live/eviscerated/raw/never-frozen state and time; tote mass remains separately inventoried.

- Selected flow: Tote-presented live eviscerated drained red sea cucumber lot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_PD net drained animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_present`
- Sources: `adfg-walker-dive-fisheries-2006`
- Range: Evidence-gap interval; U_presented_lot must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_presented_lot
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

### Process:  All pre-receipt logistics and physical shore receipt (`deliver`)

#### Inputs

##### Product flows

###### Tote-presented live eviscerated drained red sea cucumber for delivery (`deliver_intake`)

Receive T_PD at identical net animal mass/state; first physical receipt has not occurred merely because ownership or invoice changed.

- Selected flow: Tote-presented live eviscerated drained red sea cucumber for delivery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured T_PD net drained animal mass / A
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_deliver`
- Range: Evidence-gap interval; U_deliver_intake must be established for each actual instance; not an empirical range, universal cap or substitute for collection
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: U_deliver_intake
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Raw live eviscerated drained red sea cucumber at first physical shore-processor receipt (`received_live_eviscerated`)

Actual reference output: accepted net drained animal mass A at physical receipt, observed alive, eviscerated, raw and never frozen; before skin/muscle separation. Exclude viscera, free water, tote and all rejected/other-destination animals.

Calculated from the same measured accepted mass: A/A = 1 kg per 1 kg reference flow, using `cp_deliver`; the normalized quantity is not a raw weighing record.

- Selected flow: Raw live eviscerated drained red sea cucumber at first physical shore-processor receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_deliver`
- Sources: `adfg-dive-sea-cucumber`; `mass-balance-identity`
- Range: Same-lot reference identity A/A=1
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivision | intended_outputs | First subdivide directly measured node, leg and lot burdens. For inseparable shared capture/conditioning burdens among animal grades, assign by measured same-state animal mass; never compare whole intake with eviscerated output without the measured material balance. Useful viscera or other unlike products require an explicit justified causal rule; if unavailable use documented contemporaneous net revenue shares at the actual handoff and test sensitivity against mass attribution where physically meaningful. No output is presumed valuable. |  |
| period_attribution | reporting_season | Carry actual failed trips/batches, mortality, unsuccessful delivery, idle capacity, stock and cleanup through the declared season/service pool. Assign direct events to their lots; allocate unavoidable common trip/season burdens to supported intended outputs, with open stock carrying attributable burden forward. Do not divide zero-output periods by zero or drop them; link them to the supported service period and test that linkage. Reconcile opening plus additions minus outputs/losses equals closing stock by state. |  |
| shared_service | assets_and_services | List vessel, deck, bags, SCUBA cylinders, compressor, holding equipment, scales and totes with all consuming nodes and periods. Attribute measured operating burden by logged use, load or causal service, and embodied/replacement/retirement burden by evidenced total service throughput with explicit remaining-life assumptions and sensitivity. One asset/event owner reconciles shares to 100%; complete purchased service excludes its component fuel/electricity/assets/releases. Do not double count reusable tote manufacture at return. |  |
| no_credit | waste_and_returns | Assign waste handling and actual releases to their generating lot/service; reusable returns are service loops. No substitution credit for live returns, recovered viscera, discarded organic material or seawater is allowed by this PCR. Report allocation method, denominator and counterfactual sensitivity separately from observed exchanges. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_capture | capture | Boat-supported SCUBA hand capture | Primary node/lot/period ledger | SCUBA cylinder/fill ID; purchased filled-air versus own-compression boundary; compressor meter/fuel and fill interval; dive/failed-dive log; whole T_CC live animal weight; T_CM incidental matter; vessel trip legs; row/instance; lot/trip/season; asset/service period; opening/closing stock; allocated shares; U observations | Reconcile purchased breathing-air invoices/cylinder fills against own compressor energy to exclude duplicate air-production burdens; weigh T_CC whole animals before conditioning separately from T_CM; record all successful and failed SCUBA dives and vessel activity. Use calibrated node measurements and native-unit meters/supplier records; retain each chemical identity, carbon origin, receiving medium, factor provenance and uncertainty; reconcile paired handoffs without duplicating quantities/burdens. | kg; m3; kWh; h; tkm; item; item-use | Every lot/event/transfer; meter each operational interval | Full reporting trip/season and relevant asset life; opening to closing stock including failed periods | Boat-supported SCUBA hand capture | per 1 kg reference flow | Calibration/tare/drain logs; paired signatures; actual receipt/live inspection; invoices/meters; stock and asset ledgers; factor provenance/uncertainty; discrepancy closure |
| cp_condition | condition | Vessel primary evisceration and draining | Primary node/lot/period ledger | T_CC whole-animal intake; actual evisceration start/end and method; pre/post drain mass; T_CS prepared animal; removed viscera/body-fluid/free-water measurements; T_SM incidental remainder; direct abstraction volume/density; each treatment/direct-release destination; row/instance; lot/trip/season; asset/service period; opening/closing stock; allocated shares; U observations | Observe actual evisceration and measure whole input, eviscerated output, removed viscera/body fluid and free water across the same event; retain drain procedure/time rather than a default yield; close water/animal/incidental balances by fate. Use calibrated node measurements and native-unit meters/supplier records; retain each chemical identity, carbon origin, receiving medium, factor provenance and uncertainty; reconcile paired handoffs without duplicating quantities/burdens. | kg; m3; kWh; h; tkm; item; item-use | Every lot/event/transfer; meter each operational interval | Full reporting trip/season and relevant asset life; opening to closing stock including failed periods | Vessel primary evisceration and draining | per 1 kg reference flow | Calibration/tare/drain logs; paired signatures; actual receipt/live inspection; invoices/meters; stock and asset ledgers; factor provenance/uncertainty; discrepancy closure |
| cp_sort | sort | Sorting into actual destinations | Primary node/lot/period ledger | T_CS and T_SM receipts; actual grade/viability criteria; each grade/alternate-output quantity and receiver; active-hold proof with T_SH or evidenced absence with T_SP; residual incidental fate; actual abstraction volume/density; row/instance; lot/trip/season; asset/service period; opening/closing stock; allocated shares; U observations | Observe and weigh each declared grade and destination with its actual receiver/stock entry; record actual holding activation or proof of no intervention before assigning T_SH/T_SP; separate incidental organisms/substrate/water from animal grades. Use calibrated node measurements and native-unit meters/supplier records; retain each chemical identity, carbon origin, receiving medium, factor provenance and uncertainty; reconcile paired handoffs without duplicating quantities/burdens. | kg; m3; kWh; h; tkm; item; item-use | Every lot/event/transfer; meter each operational interval | Full reporting trip/season and relevant asset life; opening to closing stock including failed periods | Sorting into actual destinations | per 1 kg reference flow | Calibration/tare/drain logs; paired signatures; actual receipt/live inspection; invoices/meters; stock and asset ledgers; factor provenance/uncertainty; discrepancy closure |
| cp_hold | hold | Bounded preservation intervention | Primary node/lot/period ledger | Actual intervention purpose/type/location; T_SH receipt time/viability; intervention start/end and meter intervals; actual cooling/aeration/water/material inputs; T_HP exit live status and drain weight; mortality/alternative destinations/open stock; actual abstraction volume/density; row/instance; lot/trip/season; asset/service period; opening/closing stock; allocated shares; U observations | Record intervention purpose and exact start/end, actual services and viability before/after; reconcile T_SH to T_HP plus alternative stock/output/mortality/water, including failed batches. Transit elapsed time alone is not a holding event. Use calibrated node measurements and native-unit meters/supplier records; retain each chemical identity, carbon origin, receiving medium, factor provenance and uncertainty; reconcile paired handoffs without duplicating quantities/burdens. | kg; m3; kWh; h; tkm; item; item-use | Every lot/event/transfer; meter each operational interval | Full reporting trip/season and relevant asset life; opening to closing stock including failed periods | Bounded preservation intervention | per 1 kg reference flow | Calibration/tare/drain logs; paired signatures; actual receipt/live inspection; invoices/meters; stock and asset ledgers; factor provenance/uncertainty; discrepancy closure |
| cp_present | present | Reusable tote presentation | Primary node/lot/period ledger | T_HP or T_SP receipt and branch evidence; tote ID/material/tare; lifetime use/throughput and return/breakage/replacement log; actual cleaning water/chemical/energy and treatment fate; T_PD animal net mass; actual abstraction volume/density; row/instance; lot/trip/season; asset/service period; opening/closing stock; allocated shares; U observations | Use individually identified tote use/return/cleaning records to attribute demonstrated lifetime service; weigh animals independently of tare and free water; reconcile T_PD and alternate lot/tote destinations. Use calibrated node measurements and native-unit meters/supplier records; retain each chemical identity, carbon origin, receiving medium, factor provenance and uncertainty; reconcile paired handoffs without duplicating quantities/burdens. | kg; m3; kWh; h; tkm; item; item-use | Every lot/event/transfer; meter each operational interval | Full reporting trip/season and relevant asset life; opening to closing stock including failed periods | Reusable tote presentation | per 1 kg reference flow | Calibration/tare/drain logs; paired signatures; actual receipt/live inspection; invoices/meters; stock and asset ledgers; factor provenance/uncertainty; discrepancy closure |
| cp_deliver | deliver | All pre-receipt logistics and physical shore receipt | Primary node/lot/period ledger | T_PD receipt; every sea/road/tender/transfer/unloading leg before first physical shore receipt, load/distance/empty legs and service boundary; receiver/time/place signature; calibrated scale, tote tare and reproducible actual drainage at receipt; observed live/eviscerated/raw/never-frozen state; positive accepted net animal mass A; refused/other-destination/open stock; tote return; row/instance; lot/trip/season; asset/service period; opening/closing stock; allocated shares; U observations | Collect signed actual first shore-processor physical receipt, route and live-state observations; weigh positive A after the documented actual drain procedure and tote tare, separating rejected/different-destination lots. Include all earlier physical logistics regardless invoice or payer and verify complete-service component exclusions. Use calibrated node measurements and native-unit meters/supplier records; retain each chemical identity, carbon origin, receiving medium, factor provenance and uncertainty; reconcile paired handoffs without duplicating quantities/burdens. | kg; m3; kWh; h; tkm; item; item-use | Every lot/event/transfer; meter each operational interval | Full reporting trip/season and relevant asset life; opening to closing stock including failed periods | All pre-receipt logistics and physical shore receipt | per 1 kg reference flow | Calibration/tare/drain logs; paired signatures; actual receipt/live inspection; invoices/meters; stock and asset ledgers; factor provenance/uncertainty; discrepancy closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalise_lot | all inventory rows | For each row/instance divide its attributable measured native-unit quantity by positive A from cp_deliver; final accepted animal mass divided by itself is 1. Preserve native numerator units and independent internal transfer amounts. | attributable quantity; A; cp_deliver | quantity per 1 kg reference flow | mass-balance-identity |
| balance_and_attribution | all inventory rows | Reconcile animal whole/eviscerated states and separately all water, incidental matter and removed viscera; opening stock plus receipts equals intended outputs plus waste/direct returns/releases plus closing stock, allowing only documented measurement uncertainty. Allocate period/assets by declared causal service or supported output shares before division by A. | node ledgers; stock; transfers; service shares | closed balances and attributable quantities | mass-balance-identity |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceable_state | all_nodes | Keep whole/eviscerated, raw/frozen, live/dead and actual handoff state distinct; all source method limitations remain disclosed. | Lot ledger and observations at each node |
| complete_period | all_nodes | Include unsuccessful batches, stocks, returns and all service/asset periods; materiality exclusions require quantified justification and sensitivity. | Closed reporting pool with asset/event ownership |
| uncertainty | all_rows | Replace symbolic U with observed instance-specific bounds and uncertainty; no universal yield, holding time or release factor is supplied. Unknown actual quantity/activity/fate stays incomplete. | Raw repeated measurements, factor provenance and declared gaps |
| `collect_capture_fuels` | `capture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual vessel and compressor fuels. Conditional umbrella: instantiate each observed fuel with grade and supplier boundary; no fuel is assumed. Include searching, failed dives, travel and air filling allocated to this node, excluding fuel already inside a complete service. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Attributed consumed mass of each fuel / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_capture` <br> - Range: Evidence-gap interval; U_capture_fuels must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_capture_fuels <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_supplies` | `capture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Capture electricity, consumables and shared asset service. Instantiate each actual electricity supply (kWh), oil/material (kg), mesh bag/dive/vessel/compressor replacement (kg) or measured asset-service share. Asset service is native service-hours; document lifetime throughput and all consumers rather than imposing a lifetime. <br> - Flow property / unit: Actual instance property / kg; kWh; h <br> - Amount rule: Each attributable native-unit exchange / A; exclude components included in a complete supplied service <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_capture` <br> - Range: Evidence-gap interval; U_capture_supplies must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_capture_supplies <br> - Unit: kg; kWh; h <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_incidental_removal` | `capture`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Incidental marine matter carried with collection. Record actual co-collected substrate, attached organisms and entrained seawater separately by material, with the removed and returned quantities. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual mass of each incidental constituent removed / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_capture` <br> - Range: Evidence-gap interval; U_incidental_removal must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_incidental_removal <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_other_products` | `capture`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended capture destinations. Instantiate each intended whole-animal lot or retained useful catch sent elsewhere with its own identity/state and named receiver or open-stock record; do not call intended resale waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured mass of each alternative intended output / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_capture` <br> - Range: Evidence-gap interval; U_capture_other_products must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_capture_other_products <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_incidental_transfer` | `capture`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Incidental matter transferred with whole catch. Transfer T_CM: separately measured actual material and free-water instances accompany T_CC to collect_condition_incidental; not part of animal mass. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured T_CM mass by constituent / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_capture` <br> - Range: Evidence-gap interval; U_capture_incidental_transfer must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_capture_incidental_transfer <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_discard` | `capture`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Capture discarded animals and operational waste. Instantiate only actual discarded/dead animal matter and gear/cleanup wastes with treatment receiver; reusable, sold or returned-live items have separate actual destinations. Record whole versus eviscerated state. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured discarded mass by waste and destination / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_capture` <br> - Range: Evidence-gap interval; U_capture_discard must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_capture_discard <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_air_releases` | `capture`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Capture fuel-related and other direct air releases. Instantiate each measured or factor-calculated substance and air compartment. CO2 fossil and CO2 biogenic require separate carbon inventories; NOx species/basis, particles by size and refrigerants by chemical remain distinct. Factors need named method/version, fuel quantity and uncertainty; no default factors. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual mass of each released substance / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_capture` <br> - Range: Evidence-gap interval; U_capture_air_releases must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_capture_air_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_condition_supplies` | `condition`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual evisceration and cleaning supplies. Instantiate actual knives/replacement, cleaning agent and supplied water as kg and electricity as kWh. Product-supplied water is distinct from direct environmental abstraction, which requires its own environmental-medium instance. No mandatory washing is inferred. <br> - Flow property / unit: Actual instance property / kg; kWh <br> - Amount rule: Each actual attributable supply in its native unit / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_condition` <br> - Range: Evidence-gap interval; U_condition_supplies must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_condition_supplies <br> - Unit: kg; kWh <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_condition_incidental` | `condition`; Inputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Incidental matter received with whole catch. Receive each T_CM constituent at the recorded mass; capture and conditioning records must agree. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured T_CM mass by constituent / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_condition` <br> - Range: Evidence-gap interval; U_condition_incidental must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_condition_incidental <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_condition_other_products` | `condition`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended conditioning products. Instantiate every actual intended alternative animal or retained viscera/by-product sold or transferred for use, separately from discarded viscera; state, quantity and receiver are mandatory. No such output is presumed. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual mass of each intended alternative output / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_condition` <br> - Range: Evidence-gap interval; U_condition_other_products must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_condition_other_products <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_condition_incidental_transfer` | `condition`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Incidental matter passed to sorting. Transfer T_SM carries only recorded residual T_CM constituents; pair collect_sort_incidental by the same material/state/quantity, subtracting constituents already returned or treated here. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured T_SM residual incidental mass / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_condition` <br> - Range: Evidence-gap interval; U_condition_incidental_transfer must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_condition_incidental_transfer <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_condition_treatment_waste` | `condition`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Removed viscera, discarded animals and collected effluent to treatment. Instantiate each actual solid or liquid waste and treatment receiver; record wet/dry composition, animal state and retained free water. A treatment handoff cannot also be direct marine release. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual collected waste mass by material and fate / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_condition` <br> - Range: Evidence-gap interval; U_condition_treatment_waste must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_condition_treatment_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_condition_marine_releases` | `condition`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual substances directly released during evisceration. Only for actual direct release: instantiate every identified substance from viscera/body fluid or other discharge to marine water, with chemical identity, wet/dry basis, measured concentration/volume and receiving medium. Organic matter is not automatically biogenic CO2; unknown composition remains a data gap rather than a generic pollutant UUID. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured or documented calculated mass of each marine-water substance / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_condition` <br> - Range: Evidence-gap interval; U_condition_marine_releases must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_condition_marine_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_supplies` | `sort`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting electricity, water and consumables. Instantiate actual electricity in kWh and supplied water/materials in kg; ownership of shared vessel/deck service follows the asset ledger. <br> - Flow property / unit: Actual instance property / kg; kWh <br> - Amount rule: Each measured attributable native-unit supply / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_sort` <br> - Range: Evidence-gap interval; U_sort_supplies must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_sort_supplies <br> - Unit: kg; kWh <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_incidental` | `sort`; Inputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Incidental matter received for separation. Receive T_SM separately from animal mass, retaining constituents and transfer evidence. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured T_SM residual incidental mass / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_sort` <br> - Range: Evidence-gap interval; U_sort_incidental must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_sort_incidental <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_other_products` | `sort`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended sorted grades and destinations. Instantiate every downgraded but intended sale/use grade, returned useful lot or open stock with independent quantity/state and receiver. These outputs are distinct from discarded or dead waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured mass of each intended grade/destination / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_sort` <br> - Range: Evidence-gap interval; U_sort_other_products must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_sort_other_products <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_discard` | `sort`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Sorted discarded animals, separated matter and cleaning waste. Instantiate actual wastes by material and treatment fate, retaining whole/eviscerated state, incidental substrate and cleanup quantities. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual waste mass by material and fate / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_sort` <br> - Range: Evidence-gap interval; U_sort_discard must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_sort_discard <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_returns` | `sort`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Direct environmental returns from sorting. Instantiate actual live incidental-organism return, substrate return, carrier seawater and each chemical pollutant to the named marine site separately. Exclude treated waste and do not assign benefits to returned organisms. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Each actual returned material or released substance mass / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_sort` <br> - Range: Evidence-gap interval; U_sort_returns must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_sort_returns <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_supplies` | `hold`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual preservation energy, water and materials. Instantiate actual cooling/aeration electricity in kWh and supplied water, ice or materials in kg only when observed. Identify shared equipment/service hours and chemical-specific refrigerant makeup; no holding time or ice recipe is prescribed. <br> - Flow property / unit: Actual instance property / kg; kWh; h <br> - Amount rule: Each measured attributable intervention supply / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_hold` <br> - Range: Evidence-gap interval; U_hold_supplies must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_hold_supplies <br> - Unit: kg; kWh; h <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_other_products` | `hold`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended preservation outputs and open stock. Instantiate alternative intended sale/use lots and viable retained stock by actual state, date, receiver or inventory record; loss of reference eligibility does not alone make waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual mass of each alternative intended lot or stock / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_hold` <br> - Range: Evidence-gap interval; U_hold_other_products must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_hold_other_products <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_waste` | `hold`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Preservation discarded animals and collected wastewater. Instantiate actual dead/discarded animal matter, spent materials and collected effluent routed to treatment by receiver; disclose failed holding batches. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual waste mass by material and treatment / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_hold` <br> - Range: Evidence-gap interval; U_hold_waste must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_hold_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_releases` | `hold`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Preservation direct environmental releases. Instantiate each actual refrigerant by chemical to air and each pollutant to marine water; record returned carrier water separately from chemical mass. Exclude quantities sent to treatment. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual mass of each released constituent / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_hold` <br> - Range: Evidence-gap interval; U_hold_releases must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_hold_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_tote_service` | `present`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Reusable tote service and presentation consumables. Instantiate tote service as actual item-use events, replacement/material supply in kg and labels/closures in kg. Divide manufacturing/replacement burdens by demonstrated lifetime uses or throughput with returns, breakage and open assets; do not charge a whole new tote on every trip. <br> - Flow property / unit: Actual instance property / item-use; kg <br> - Amount rule: Each attributable tote use or consumed presentation material / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_present` <br> - Range: Evidence-gap interval; U_tote_service must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_tote_service <br> - Unit: item-use; kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_present_cleanup` | `present`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual tote preparation and cleaning supplies. Instantiate actual supplied water and cleaning chemicals in kg and energy in kWh; return-trip cleaning belongs once to the service-period ledger. <br> - Flow property / unit: Actual instance property / kg; kWh <br> - Amount rule: Each attributable native-unit cleaning supply / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_present` <br> - Range: Evidence-gap interval; U_present_cleanup must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_present_cleanup <br> - Unit: kg; kWh <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_present_other_products` | `present`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended presentation outputs and reusable returns. Instantiate alternative sale/use lots, retained animal stock and returned reusable totes separately with identities, native units and receivers. Tote returns are service-loop movements, not an additional sea cucumber output. <br> - Flow property / unit: Actual instance property / kg; item <br> - Amount rule: Each actual intended animal mass or reusable item movement / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_present` <br> - Range: Evidence-gap interval; U_present_other_products must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_present_other_products <br> - Unit: kg; item <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_present_waste` | `present`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Presentation discarded animals, packaging and cleaning effluent. Instantiate only actual discarded animal, broken tote, packaging and collected cleaning wastewater, each with treatment fate; reusable returns are excluded. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual discarded mass by material and fate / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_present` <br> - Range: Evidence-gap interval; U_present_waste must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_present_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_present_releases` | `present`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual presentation direct water and chemical releases. Instantiate directly returned carrier seawater and every identified pollutant by receiving medium separately; no untreated-release default is assigned. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Each actual directly released constituent mass / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_present` <br> - Range: Evidence-gap interval; U_present_releases must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_present_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_service` | `deliver`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Complete pre-receipt transport and handling services. For purchased complete services instantiate each actual sea/road/handling leg, distance, load and native billed unit (tkm or h). Include tender, transfer, unloading and empty return attribution where actual. Components inside the service are not separately charged. <br> - Flow property / unit: Actual instance property / tkm; h <br> - Amount rule: Each attributable actual leg service / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_deliver` <br> - Range: Evidence-gap interval; U_delivery_service must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_delivery_service <br> - Unit: tkm; h <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_components` | `deliver`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Own-operated delivery fuel, energy and asset service. Only for own-operated or explicitly excluded service components: instantiate actual fuel kg, electricity kWh and asset-service h, including empty travel and failed delivery. Shared vessel fuel is partitioned with capture, never repeated. <br> - Flow property / unit: Actual instance property / kg; kWh; h <br> - Amount rule: Each actual attributable component in its native unit / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_deliver` <br> - Range: Evidence-gap interval; U_delivery_components must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_delivery_components <br> - Unit: kg; kWh; h <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_other_products` | `deliver`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended delivered or retained lots and tote returns. Instantiate each actual non-reference intended sale/use lot, viable refused/redestined lot, open animal stock and reusable tote return with own state, quantity, receiver and date. Loss of reference eligibility alone is not disposal. <br> - Flow property / unit: Actual instance property / kg; item <br> - Amount rule: Each actual intended animal mass or reusable item return / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_deliver` <br> - Range: Evidence-gap interval; U_delivery_other_products must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_delivery_other_products <br> - Unit: kg; item <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_waste` | `deliver`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Delivery discarded animals and logistics waste. Instantiate actual mortality/discard and damaged packaging or cleanup wastes by receiver, separating treated effluent. Failed delivery burdens remain in the reporting pool. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual discarded mass by material and fate / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_deliver` <br> - Range: Evidence-gap interval; U_delivery_waste must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_delivery_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_releases` | `deliver`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Own-operated delivery direct environmental releases. Instantiate each own-operation chemical/particle emission to its medium, separating fossil/biogenic carbon and returned carrier water from pollutants. Exclude releases already included in complete-service background inventory. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual mass of each released substance / A <br> - Value mode: `foreground_record` <br> - Specificity: `site_specific` <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `collected_record` <br> - Collection protocol: `cp_deliver` <br> - Range: Evidence-gap interval; U_delivery_releases must be established for each actual instance; not an empirical range, universal cap or substitute for collection <br> - Range role: `qa_guardrail` <br> - Lower: 0 <br> - Upper: U_delivery_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: `reference_flow` <br> - Evidence kind: `reasoned_estimate` | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| eligible_reference | reference_output | Verify A>0, species and wild Alaska SCUBA origin, observed live status at actual first physical shore-processor receipt, eviscerated raw never-frozen state, scale/tare/drain method and pre-separation gate. Any dead, whole, frozen or skin/muscle-only output is ineligible for A, though its burdens and fate remain accounted. | adfg-dive-sea-cucumber |
| reconcile_transfers | all_nodes | Reconcile every paired transfer by lot, state, time and quantity; prove the holding activation/bypass state, account for incidental matter and free water, enumerate all intended destinations and distinguish treatment from direct release. Reject unexplained mass losses and duplicate final/internal exchanges. Unknown actual conditions remain incomplete rather than zero. |  |
| complete_reporting_pool | season_and_assets | Reconcile all trip/season inputs, failed batches, mortality, stocks, shared assets, tote cycles, replacement/retirement and cleanup with output allocation and sensitivity. Each complete service has a documented component-exclusion map; shares reconcile and no discarded material earns a credit. |  |
| identities_and_ranges | all_rows | Verify each final exchange concrete flow/property/unit against actual identity and role. Umbrella rows must expand into actual instances; no inferred top-hit identity or generic pollutant match. Symbolic 0..U intervals explicitly lack empirical bounds; collect row/instance-specific observations and uncertainty before final data production. Checker pass does not establish identity verification or publication readiness. |  |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Foreground package, process and lifecyclemodel projections for the same live eviscerated wild SCUBA route/gate |
| allowed_use | Evidence-matched Alaska wild A. californicus live eviscerated drained raw never-frozen supply at first physical shore receipt |
| excluded_use | Whole-animal final mass, farm production, hookah route, processed skin/muscle, downstream post-receipt operations or unsupported current legal/environmental claims |
| required_metadata | All reference qualifiers; reporting/asset periods; physical receipt record; upstream boundaries; output/stock/fate ledger; allocation/service exclusion map |
| required_quality_disclosure | Observed eligibility; exact upstream identities; range/evidence gaps; representativeness; failed periods; balances; uncertainty and allocation/lifetime sensitivity |
| update_trigger | Change of species/origin/SCUBA technology, evisceration method, actual receipt gate/state, holding/logistics route, service boundary, asset utilization or supported evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| adfg-dive-sea-cucumber | official_guidance | Alaska Department of Fish and Game, Commercial Sea Cucumber Dive Fisheries. https://www.adfg.alaska.gov/index.cfm?adfg=CommercialByFisheryDive.seacucumber | Species, hand/SCUBA mesh-bag route and eviscerated-live shore delivery; no numerical defaults or legal advice |
| adfg-walker-dive-fisheries-2006 | literature | Walker S., Hoyt Z., Pritchett M. 2006. Report to the Board of Fisheries, miscellaneous dive fisheries. Fishery Management Report 06-01, pp. 8–9. https://www.adfg.alaska.gov/FedAidpdfs/Fmr06-01.pdf | Historical mesh-bag/vessel, poking/draining, drained-weight/tote sequence and downstream separation exclusion; no historical limits, rates or holding durations adopted |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, p. 52. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Narrower classification context and exclusions only; no product inventory rates |
| mass-balance-identity | method_factor | Conservation accounting and same-lot normalization identity, explicitly defined in this PCR; no external empirical factor | Physical reconciliation and final A/A=1 identity only |
