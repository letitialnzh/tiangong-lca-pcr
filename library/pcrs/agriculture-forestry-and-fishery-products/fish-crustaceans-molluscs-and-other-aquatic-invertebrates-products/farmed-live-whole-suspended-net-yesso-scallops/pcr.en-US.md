---
pcr_id: pcr.farmed-live-whole-suspended-net-yesso-scallops
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed live whole suspended-net Yesso scallops

## 1. Scope and Applicability

This PCR covers Japanese production of Patinopecten yessoensis from purchased wild-collected spat through suspended-net nursery and growout, craft/winch harvest and local live delivery to the first farmer physical recipient. The product is accepted alive, whole and in its native shells before shucking. Chilling is permitted only while the accepted product remains alive. Pearl or lantern nets define the selected culture technology; bottom sowing, dredging, ear-hanging with drilled shells, hatchery-origin spat, adult wild capture and other scallop species are excluded. Dead whole, shucked, frozen and canned references require another scope. FAO supports the route distinction and need for prompt careful handling, not universal operating parameters (`fao-yesso-scallop-2009`).

Actual independent gentle shell cleaning and packaging are conditional operations. Record their occurrence; absence routes the same measured lot directly to the next node. They do not change the final reference identity. No shell removal, flesh separation, kill step or default food-safety guarantee belongs here. Site records establish live acceptance, the recipient and the physical gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-suspended-net-yesso-scallops |
| classification_refs | CPC 3.0 04442; narrower selected route within farmed scallops, live, fresh or chilled |
| covered_products | Japanese farmed Patinopecten yessoensis, accepted live and whole in native shells from purchased wild-collected spat and suspended-net culture |
| excluded_products | Other species; hatchery spat; ear-hung or bottom-grown scallops; wild adult capture; dead, shucked, frozen or canned outputs |
| representative_product | Live whole Yesso scallops at first farmer physical recipient acceptance |
| production_route | Purchased wild spat; suspended-net nursery and growout; craft/winch harvest; actual conditional cleaning; sorting; actual conditional packaging; live preservation and local delivery |
| market_state | Live whole native-shell product, including chilled-live lots only with live acceptance evidence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted live whole Patinopecten yessoensis at the first farmer physical recipient before shucking |
| How much | 1 kg accepted net whole live product; soft body and native shells included; free carrier water, ice, packaging and tare excluded |
| How well | Declared species, purchased wild-spat origin, suspended-net route, actual grade and live acceptance evidence; no universal survival or safety claim |
| How long or cycle | Actual cohort from purchased spat receipt through nursery, growout, harvest and live delivery; link all calendar periods, carryover stocks, failed cycles and asset service periods |
| reference_flow_link | `live_scallops_receipt` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live whole Yesso scallops at first farmer physical recipient acceptance |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Patinopecten yessoensis; Japan and farm/site; wild-collected purchased spat source; suspended pearl/lantern net route without ear-hanging or bottom lays; cohort and reporting periods; actual cleaning/packaging state; grade/output set; first recipient and physical acceptance gate/time; live condition evidence; body plus native shells net mass basis; carrier water/ice/tare exclusion; delivery conditions; attribution and upstream coverage |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Weigh accepted live whole scallops on a calibrated scale; retain raw gross, tare, free water/ice and accepted net mass records under cp_live_receipt. Native shells remain product. Every inventory basis is per 1 kg reference flow. |
| `count_mass` | spat and cohort transfers | Mass | kg | Preserve raw counts and contemporaneous species/cohort/size-specific weighed samples; retain the actual sample-derived count-to-mass conversion and uncertainty. No universal animal-count conversion or juvenile-to-final mass equality is permitted. |
| `native_units` | support and emission instances | Actual exchange-specific property | native unit | Retain fuel mass or volume/density records, electricity energy, transport tkm, equipment h or other real service unit, and chemical active-substance basis independently. Verify actual support identities before exchange creation. Convert only with recorded factors and units; never sum unlike units. |
| `substance_basis` | environmental releases | Mass | kg | Identify actual substance, chemical basis and receiving medium. Separate fossil combustion CO2 from biological respiration and shell/body carbon; nutrient mass is not whole-animal wet mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased live wild-collected Yesso scallop spat received at the Japanese farm for suspended-net nursery |
| starting_condition_role | Burden-bearing upstream biological input, not burden-free natural biomass |
| product_classification_scope | Farmed scallops; the selected species, origin, net technology, live native-shell state and physical gate constrain applicability |
| recursive_input_rule | Record same-category spat or live transfers as explicit burden-bearing inputs at their actual entry gate; retain upstream coverage and transfer ids rather than recursively inventing another foreground seed-collection node |
| upstream_dataset_requirement | Supplier evidence must cover wild spat collection, collector gear, nursery before purchase, energy, handling and transport up to the declared receipt; expose missing stages and prevent overlap with farm-owned nursery |
| disclosure | Declare site, source, cohort dates, actual net phases, carryover/failed cycles, cleaning and packaging activation, output destinations, live gate, included logistics, shared assets and evidence gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | culture and harvest | Separate managed net nursery/growout from craft/winch removal: nursery and growout produce an in-net harvest-ready cohort; harvest removes and hands over collected whole live scallops. Shell drilling, bottom lays and adult capture are outside this route. | fao-yesso-scallop-2009 |
| `boundary_handling` | cleaning, sorting, packaging and delivery | Cleaning is actual gentle first shell preparation, sorting assigns declared accepted/secondary/rejected destinations, packaging protects a live lot when present, and preservation/delivery maintains that live state through physical acceptance. Record bypass handoffs when a conditional node is absent; no artificial zero-operation product or duplicated final exchange. | fao-yesso-scallop-2009 |
| `boundary_food_water` | nursery and growout | Natural food and ambient water-column exposure are environmental context, not a purchased feed exchange, pumped-water abstraction or avoided nutrient burden. Include actual sourced management inputs and real environmental releases; require distinct evidence for any ecosystem-effect study outside this inventory. | fao-yesso-scallop-2009 |
| `boundary_ownership` | all nodes | Assign each craft, winch, longline, net, float, shore facility, washing unit, package pool and delivery asset to its real consuming nodes and periods. A supplier-inclusive service and its included fuel, power, direct emissions or capital are alternative representations of the same burden. Each physical event has one accountable owner. | |
| `boundary_self_generation` | on-site electricity | When actual on-site generation is represented by its fuel, equipment and direct emissions, generated electricity is an internal energy transfer: do not add purchased-grid upstream burdens for that same electricity. Assign the generator event and substance/medium emission instances to its actual emitting node and allocate measured duty to consumers once. Cleaning, sorting and packaging release cards instantiate actual direct releases only when present; a service input never substitutes for an unrecorded directly owned emission. | |
| `boundary_periods` | cohorts and infrastructure | Enumerate spat receipt, nursery, growout, harvest, handling and delivery periods. Carry opening/closing stocks and their attributed burdens between periods once; include failed cohorts, maintenance and nonproductive service in the accountable ledger without assigning them twice. No default cycle or asset lifetime applies. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `net_culture` | Suspended-net nursery and growout | required | | Cohort production from purchased wild spat to harvest-ready in-net stock; batch/cohort mode indexed by net, site and period | Measured harvest-ready whole live stock; normalized per 1 kg reference flow |
| `craft_harvest` | Craft and winch harvest | required | | Independent removal from net culture to collected live lot, distinct from later shell preparation | Measured collected live lot; normalized per 1 kg reference flow |
| `shell_cleaning` | First gentle shell cleaning | conditional | Actual independent washing or gentle shell preparation occurs before sorting | Collected to cleaned whole live state without shucking | Measured cleaned live lot; normalized per 1 kg reference flow |
| `live_sorting` | Live grade and destination sorting | required | | Separate accepted reference-channel grades, other intended grades and rejects; no fabricated numeric grade thresholds | Measured output set; normalized per 1 kg reference flow |
| `live_packaging` | Live product packaging and presentation | conditional | Actual protective package/presentation operation occurs before delivery | Sorted live to protected/presented live lot; logistics owned by live_delivery | Measured protected live lot excluding package mass; normalized per 1 kg reference flow |
| `live_delivery` | Live preservation and local delivery | required | | Bounded chilling/protection and logistics from ready live lot to live recipient acceptance; actual conditions recorded | 1 kg accepted net live whole product |

Each umbrella below expands only into actual exchanges. Its `U_instance` is independently evidenced and approved for that row instance and native unit, never inherited from a mixed-unit parent. A provisional 0..U bound is an unresolved evidence need, not an empirical typical value, default amount, allowed limit or permission to substitute zero. Product transfer counterparts share transfer ids and carry burdens once. Direct-support alternatives, wastes and releases are conditional on actual occurrence.

### Process: Suspended-net nursery and growout (`net_culture`)

#### Inputs

##### Product flows

###### Purchased wild-collected spat (`wild_spat_input`)

Live purchased Patinopecten yessoensis spat crosses the farm receipt gate. Its upstream collection and pre-purchase nursery burdens accompany the measured input.

- Selected flow: Purchased wild-collected Yesso scallop spat at farm receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured received spat mass; retain counts and same-cohort weighed sample conversion under cp_net_culture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_net_culture`
- Range: Provisional unresolved spat evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_wild_spat_input
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve this upper bound from matched cohort evidence before use
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvest-ready in-net live cohort (`culture_live_transfer`)

This is the measured live stock handed from net culture to craft harvest, not another final sale.

- Selected flow: Harvest-ready whole live Yesso scallops in suspended nets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured attributable live cohort transfer under cp_net_culture; preserve actual mass rather than fixing it to final receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_net_culture`
- Range: Provisional unresolved transfer evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_culture_live_transfer
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve matched cohort upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct culture fossil combustion CO2 (`culture_fossil_co2`)

Only actual farm-owned fossil combustion emissions to air belong here; exclude respiration and provider-inclusive service emissions.

- Selected flow: Carbon dioxide, fossil, to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate actual owned fossil-fuel CO2 from fuel records and a documented applicable factor under cp_net_culture; no default factor supplied.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_net_culture`
- Range: Provisional unresolved fossil CO2 evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_culture_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve actual fuel/factor upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Craft and winch harvest (`craft_harvest`)

#### Inputs

##### Product flows

###### Live in-net stock received for removal (`harvest_stock_input`)

The counterpart of culture_live_transfer identifies the same physical cohort and internal burden handoff.

- Selected flow: Harvest-ready whole live Yesso scallops in suspended nets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured received in-net stock under cp_craft_harvest; reconcile transfer id with culture_live_transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_craft_harvest`
- Range: Provisional unresolved harvest-feed evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_harvest_stock_input
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve actual transfer upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Collected whole live scallops (`harvest_live_transfer`)

Live collected scallops leave the craft for actual shell cleaning or bypass directly to sorting.

- Selected flow: Collected whole live Yesso scallops after suspended-net harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure collected live lot under cp_craft_harvest; link actual next-node receipt and bypass state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_craft_harvest`
- Range: Provisional unresolved collected-live evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_harvest_live_transfer
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve collected lot upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct harvest fossil combustion CO2 (`harvest_fossil_co2`)

Only separately owned fossil combustion to air is represented; supplier-inclusive harvest service already carries its emissions.

- Selected flow: Carbon dioxide, fossil, to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate actual owned fossil-fuel CO2 using retained applicable fuel/factor records under cp_craft_harvest.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_craft_harvest`
- Range: Provisional unresolved harvest CO2 evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_harvest_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve fuel/factor upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: First gentle shell cleaning (`shell_cleaning`)

#### Inputs

##### Product flows

###### Collected live lot entering cleaning (`cleaning_live_input`)

Activate only for an actual bounded first cleaning operation; preserve the raw collected state and transfer id.

- Selected flow: Collected whole live Yesso scallops after suspended-net harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure actual cleaning receipt under cp_shell_cleaning; reconcile harvest_live_transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shell_cleaning`
- Range: Provisional unresolved cleaning-feed evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_cleaning_live_input
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve received lot upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned whole live lot (`cleaning_live_transfer`)

Gentle cleaning prepares the same live native-shell product for sorting without shucking.

- Selected flow: Gently shell-cleaned whole live Yesso scallops
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh cleaned live transfer under cp_shell_cleaning; preserve sorting receipt and transfer id.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shell_cleaning`
- Range: Provisional unresolved cleaned-live evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_cleaning_live_transfer
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve cleaned transfer upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Live grade and destination sorting (`live_sorting`)

#### Inputs

##### Product flows

###### Live lot entering grade/destination selection (`sorting_live_input`)

Receive the measured cleaned lot when cleaning occurs, otherwise the collected harvest lot; record which real incoming state and transfer id applies.

- Selected flow: Whole live Yesso scallops at sorting receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh actual incoming lot under cp_live_sorting with cleaning activation and predecessor id.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_sorting`
- Range: Provisional unresolved sorting-feed evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_sorting_live_input
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve actual received state upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Sorted live reference-channel grade (`sorting_live_transfer`)

Enumerate each actual accepted grade and hand it to packaging when present or directly to live delivery. A grade label alone cannot create additional product mass.

- Selected flow: Sorted whole live Yesso scallops for declared live recipient channel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh each real reference-channel grade under cp_live_sorting with its actual next handoff; aggregate only equivalent declared outputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_sorting`
- Range: Provisional unresolved sorted-live evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_sorting_live_transfer_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve each grade upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Live product packaging and presentation (`live_packaging`)

#### Inputs

##### Product flows

###### Sorted live lot entering actual packaging (`packaging_live_input`)

Activate only for actual protective packaging or presentation; the incoming live grade remains identifiable.

- Selected flow: Sorted whole live Yesso scallops for declared live recipient channel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh actual packaging receipt under cp_live_packaging and reconcile sorting_live_transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_packaging`
- Range: Provisional unresolved packaging-feed evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_packaging_live_input
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve actual live input upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Protected/presented live lot (`packaging_live_transfer`)

Hand the actual packaged live lot to live_delivery. Measure product separately from all package, ice and carrier water.

- Selected flow: Whole live Yesso scallops after presentation before delivery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh net live product transfer under cp_live_packaging; retain package ownership and actual delivery receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_packaging`
- Range: Provisional unresolved protected-live evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_packaging_live_transfer
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve product transfer upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Live preservation and local delivery (`live_delivery`)

#### Inputs

##### Product flows

###### Ready live lot entering preservation/delivery (`delivery_live_input`)

Receive protected live product when packaging occurs or sorted live product when bypassed. Preserve the actual state, transfer id and net live mass.

- Selected flow: Actual ready whole live Yesso scallop lot before live delivery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure received net live lot under cp_live_receipt with packaging activation and preceding transfer id.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_receipt`
- Range: Provisional unresolved ready-live evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_delivery_live_input
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve actual dispatch upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted whole live reference product (`live_scallops_receipt`)

The only final reference output is the lot accepted alive by the first farmer physical recipient, before shucking. Supplier dispatch alone does not prove live acceptance.

- Selected flow: Live whole Yesso scallops at first farmer physical recipient acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_receipt`
- Range: Reference normalization identity from the same accepted-mass record, not observed yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow; accepted net mass divided by that same accepted net mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

###### Direct delivery fossil combustion CO2 (`delivery_fossil_co2`)

Record actual directly owned fossil fuel combustion only; exclude cooling-provider or haulier emissions already inside inclusive services.

- Selected flow: Carbon dioxide, fossil, to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate owned fossil CO2 using actual fuel and applicable documented factors under cp_live_receipt.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_receipt`
- Range: Provisional unresolved delivery CO2 evidence need
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: U_delivery_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow; independently approve fuel/factor upper bound
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | all nodes | First assign independently recorded operations and supplies directly to their real cohorts, grades, nodes and destinations. Do not allocate an inclusive service again through fuel, electricity, emissions or capital. Preserve complete intended-output and waste sets before selecting attribution. | |
| `allocation_outputs` | multiple intended outputs | Enumerate actual accepted live grades and any secondary intended destination with mass, state and physical handoff. Directly attributable burdens stay with that output. For the residual inseparable burden of intentional sale grades of the same species and whole-live function, allocate by each grade's accepted net whole-live mass at its own declared handoff. Record why the outputs have equivalent function/state and retain allocation sensitivity. Internal stock returns and waste are excluded from this intended-sale denominator. Actual outputs with different functions or states require a separately reviewed causal attribution method before finalization. Waste treatment stays attributable to the responsible production, without an assumed co-product credit. | |
| `allocation_periods` | cohorts and reporting periods | Link each input, cleaning/changeover, failed batch, maintenance event, transfer and output to its cohort and nursery/growout/harvest/handling period. Carry stock and burdens forward once. Reconcile opening and closing inventory and avoid allocating a carried stock's full historical burden anew in each year. | |
| `allocation_assets` | shared assets/services | List actual consumers and periods for longlines, nets, floats, craft/winch, shore equipment, cold handling and reusable crates. Subdivide measured duty first; allocate residual shared service with evidenced activity/duty records and an explicit denominator. Reconcile allocated shares to the owned total; document replacement, retirement and nonproductive duty without inventing lifetime, occupancy or reuse counts. | |
| `allocation_no_credit` | natural food, shells and losses | Natural feeding, ambient water, native shells, nutrient uptake and biological carbon do not create default avoided burdens or storage credits. Whole live shell mass is already in the product reference. Escapes and uncollected mortality are ledger losses until any separately quantified environmental release is established. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_net_culture | net_culture | Purchased spat; culture stock, support, wastes and releases | Supplier, cohort, net, asset and environmental ledger | species; wild origin; supplier/upstream coverage; receipt/transfer ids; date; count; sample count/mass/size; opening/closing stock; deaths/escapes/removals; nursery/growout phase; net/asset id; support unit/quantity; service inclusions; release substance/medium/factor; upper-bound evidence |Weigh receipts/transfers on calibrated scales; retain representative same-cohort count/mass sampling; inventory nets and stocks; meter/invoice actual support; document substance-specific monitoring/models and exclusive service ownership; Attribute each owned event once to the cohort/output set; divide attributed amount by accepted net live receipt mass; per 1 kg reference flow | kg; count; actual native unit separately | Each receipt, transfer, support/replacement/loss event and monitoring period | Full cohort plus opening/closing carryover and failed/nonproductive periods | Japanese farm and declared source suppliers, nets and environmental media | per 1 kg reference flow | Calibration; sampling design; supplier coverage; stock reconciliation; factors; uncertainty; asset/period shares |
| cp_craft_harvest | craft_harvest | In-net receipt; craft/winch support; collected live and incidental outputs | Harvest-trip and transfer ledger | cohort; net; trip; craft/winch id; date/time; live stock receipt; collected mass/count sample; damage/incidental material; loss; support quantity/unit; provider coverage; fuel/factor; receiving medium; next-node id; upper-bound evidence |Weigh incoming/collected/waste lots; pair culture transfer; retain trip logs, measured fuel/power or service invoices, asset duty and substance-specific emissions evidence; Reconcile each trip and output set; allocate owned trip duty once; divide attributed amounts by accepted net receipt mass; per 1 kg reference flow | kg; count; actual native unit separately | Each harvest trip and outgoing handoff | Entire attributable harvest campaign, including unsuccessful trips | Declared farm nets and harvest craft | per 1 kg reference flow | Scales; trip records; transfer matching; waste destination; duty shares; emission-factor provenance |
| cp_shell_cleaning | shell_cleaning | Actual cleaning input, water, support, prepared lot, waste and releases | Cleaning-run and outfall records | activation; run; collected transfer id; live input/output mass; aid identity; water source; withdrawal/supply/recirculation; units/density; support; service coverage; rejects; effluent destination; substance/concentration/flow/medium; fuel/leakage activity and factor; upper-bound evidence |Document real operation or bypass; weigh live lots and solids; meter supplied/directly abstracted water separately; sample actual outfall or retain treatment transfer records; record aid/factor and actual node-owned combustion/leakage evidence; Attribute each run to its lots; reconcile supply/return and treatment/direct-release ownership; divide by accepted net receipt mass; per 1 kg reference flow | kg; m3; concentration and native support units separately | Each cleaning run and relevant sampling/service event | All actual cleaning runs for reference cohorts | Actual farm/shore cleaning facility and discharge/treatment handoff | per 1 kg reference flow | Calibration; water conversion; chemistry; treatment receipts; outfall and fuel/leakage method; live condition and transfer records |
| cp_live_sorting | live_sorting | Incoming live state, support, grade/destination output set, rejects and actual direct releases | Sorting-run and destination ledger | cleaning activation; predecessor id; run/date; received mass/count sample; actual grade criteria; accepted grade mass; secondary intended output/state/destination; reject/waste mass; return stock; support units; release substance/medium/fuel or leakage activity/factor; attribution evidence; upper-bound evidence |Weigh each destination output and actual waste; retain grade/live checks, sale/transfer records, support allocation and actual node-owned release measurement/models; do not merge saleable secondary grades with waste; Reconcile full output/return/loss set to the incoming lot; assign direct burdens and disclose shared-output method; divide by accepted net receipt mass; per 1 kg reference flow | kg; count; native support units separately | Every sorting lot, destination and support/release event | Complete sorting campaign of each reference cohort | Declared grading point, outgoing destinations and actual release media | per 1 kg reference flow | Scale records; destination evidence; grade criteria; attribution decision; stock return match; actual release and factor evidence |
| cp_live_packaging | live_packaging | Actual packaging input, package/support, protected lot, rejects and actual direct releases | Package-run and reusable-pool ledger | activation; run; live input/output; package material/count/sample mass; new/replacement quantities; reusable opening/closing/return/loss; support unit; service inclusions; release substance/medium/fuel or leakage activity/factor; waste destination; delivery transfer id; upper-bound evidence |Record operation or bypass; weigh net live product separately from tare/ice; measure package item masses and actual pool movements; record material/service invoices, discard destinations and actual node-owned release measurement/models; Assign new/replacement package and shared service once by evidenced use; exclude package tare from product; divide by accepted net receipt mass; per 1 kg reference flow | kg; count; native service units separately | Every package run, return, replacement, disposal and actual release event | All package service periods attributable to cohorts, including carryover | Actual packing point, declared reusable pool and actual release media | per 1 kg reference flow | Sample/calibration records; pool reconciliation; reuse evidence; transfer and waste receipts; actual release and factor evidence |
| cp_live_receipt | live_delivery | Ready live input, preservation/transport, final acceptance, rejects and releases | Dispatch, condition, transport and recipient acceptance ledger | predecessor/package state; lot/cohort; dispatch/arrival/acceptance time; recipient/gate; live-condition method/result; gross/tare/free water/ice; accepted net live mass; rejects/destinations; actual temperature/exposure/duration; coolant/energy/fuel quantity/unit; distance/payload/empty legs; service inclusions; asset duty; release substance/medium/factor; upper-bound evidence |Weigh accepted live whole product on a calibrated scale, excluding carrier water, ice, transport packaging and tare; reconcile dispatch and same-lot recipient physical acceptance with live-condition evidence; retain actual handling/transport and direct-release measurements/models; Sum accepted net live mass for equivalent declared lots as denominator; attribute support/losses once and divide by that accepted mass; per 1 kg reference flow | kg; time; temperature; tkm; h; fuel/energy and other native units separately | Each dispatch, live-condition observation, acceptance/rejection and support event | Full preservation/holding/delivery interval through first physical acceptance | Actual local delivery route, holding points and first farmer physical recipient | per 1 kg reference flow | Calibrated scale and tare records; signed receipt/gate; live checks; condition logs; payload/distance; exclusive service coverage; factor and uncertainty evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_collected` | all inventory rows | Retain actual raw numerator units and evidenced attribution; divide each attributed cohort/lot amount by the same accepted net live receipt mass in kg. Final reference output divides that accepted mass by itself. Do not force internal transfers or biological spat mass to equal final output. | Attributed raw quantity; accepted net live receipt mass; node-specific protocol | Native numerator quantity per 1 kg reference flow | |
| `sample_conversion` | wild_spat_input and cohort transfers | Where counts are original records, retain weighed same-cohort samples and apply their measured mean individual mass to matched counts, with size/date coverage and uncertainty; no universal conversion supplied. | Raw count; sample count; sample net mass; matching cohort/date/size | Traceable whole-live mass estimate and uncertainty | |
| `cohort_reconciliation` | net_culture | Reconcile opening stock, receipts, internal transfers, harvest, returns, intended removals, mortality, escapes and closing stock by cohort/count, with observed growth and sampling uncertainty. Biological growth prevents a simple equality of input and output wet masses. Ledger movements are not automatically environmental exchanges. | Cohort and stock records; sample evidence; event dates | Reconciled cohort history and explicit unexplained gaps | |
| `release_calculation` | actual release instances | Retain actual substance, compartment and chemical basis; apply documented measured flow/concentration or applicable activity/factor model with units and uncertainty; use exclusive direct/provider ownership and avoid whole-waste/constituent duplication. No factor is prescribed by this PCR. | Actual activity/monitoring; documented factor/method; compartment; service coverage | Substance-specific release per 1 kg reference flow | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_scope` | product and inputs | Verify species, purchased wild-spat origin, Japanese site, net route and exact live whole first-recipient state; declare each required qualifier. | Supplier records, net plans, live checks and acceptance gate evidence |
| `quality_complete` | cohorts and periods | Retain complete stock, loss, failed-cycle, asset replacement and period records; disclose missing upstream phases, unresolved identities, unmatched quantities and attribution decisions. | Cohort/period ledger and completeness report |
| `quality_ranges` | every amount and instance | Replace provisional unresolved U bounds with independently supported instance-specific values before applying a QA interval; retain status, basis, evidence and uncertainty. Never interpret 0..U as empirical evidence or a default amount. | Reviewed foreground distributions or applicable external evidence per actual row instance |
| `quality_units` | each exchange | Preserve native units and same-reference denominator; resolve actual flow/property/unit supports and convert counts, water volumes, fuels and chemistry only with retained conversion evidence. | Calibration, samples, unit/support and conversion evidence |
| `quality_live` | preservation and acceptance | Demonstrate actual viable handling and live physical acceptance. Declare temperature/exposure/duration and toxin/health monitoring evidence relevant to the actual lot; this PCR supplies no safe threshold or compliance guarantee. | Condition and recipient acceptance records; applicable monitoring documentation |
| `collect_culture_support` | `net_culture`; Inputs; Product flows: Net-culture management and support instances | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual net/rope/float replacement, cleaning materials, maintenance, craft fuel/power or supplier services into separate native-unit exchanges with net/cohort/period owners. No artificial feed or ambient-water input is created. Actual medicinal use requires product and active-substance records, never a prophylactic default. Flow property / unit: Actual instance property / native unit; Amount rule: Measured attributable instance quantity under cp_net_culture; select provider-inclusive service or its separately owned material, fuel, power and asset components exclusively.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_net_culture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved support instance evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_culture_support_instance Unit: native unit of the individual instance Basis: per 1 kg reference flow; independently approve each instance upper bound; do not aggregate unlike units Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_net_culture`;  |
| `collect_culture_waste` | `net_culture`; Outputs; Waste flows: Collected culture waste instances | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record actually recovered mortalities, removed fouling/predators and discarded gear by material and treatment destination. Uncollected deaths or escapes stay in the cohort ledger and require separately characterized release evidence; they are not automatically whole-animal elementary flows. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Weighed outgoing waste instance under cp_net_culture with destination and treatment ownership.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_net_culture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved waste instance evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_culture_waste_instance Unit: kg Basis: per 1 kg reference flow; independently approve each recovered material upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_net_culture`;  |
| `collect_culture_release` | `net_culture`; Outputs; Elementary flows: Actual biological or management releases | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand supported excretion, biodeposition, respiration, medicine/residue or actual non-CO2 combustion releases by substance, basis and receiving compartment. Exclude fossil CO2 separately recorded in culture_fossil_co2. Natural-food uptake does not establish an avoided burden; shell carbon is not a permanent storage credit. Avoid counting a whole discarded material and its included substances as two releases. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Measured or explicitly modelled substance-specific release under cp_net_culture; retain evidence, factors, uncertainty and receiving medium.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_net_culture` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved release instance evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_culture_release_instance Unit: kg of actual substance on its declared basis Basis: per 1 kg reference flow; independently approve each substance and medium upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_net_culture`;  |
| `collect_harvest_support` | `craft_harvest`; Inputs; Product flows: Craft and winch support instances | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Separate actual fuel, power, equipment use, lubricant and complete harvest-service alternatives in native units. Harvest owns the removal trip; culture maintenance trips are not counted again. Flow property / unit: Actual instance property / native unit; Amount rule: Measured attributable harvest support instance under cp_craft_harvest; retain trip and asset-period ownership.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_craft_harvest` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved harvest support evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_harvest_support_instance Unit: native unit of the individual instance Basis: per 1 kg reference flow; independently approve each instance upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_craft_harvest`;  |
| `collect_harvest_waste` | `craft_harvest`; Outputs; Waste flows: Recovered incidental or damaged harvest material | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Collected non-target material, recovered broken/dead scallops and actual discarded gear are separate waste instances with treatment handoffs; uncollected loss remains separately recorded. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Weigh each actually collected waste destination under cp_craft_harvest.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_craft_harvest` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved harvest waste evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_harvest_waste_instance Unit: kg Basis: per 1 kg reference flow; independently approve each material upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_craft_harvest`;  |
| `collect_harvest_other_release` | `craft_harvest`; Outputs; Elementary flows: Other actual direct harvest release | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual combustion pollutants or leakage by identified substance and medium; a generic NOx/SOx/particulate label is not an exact flow identity. Exclude fossil CO2 already recorded in harvest_fossil_co2 and releases already included in provider-inclusive harvest services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Retain substance-specific measured/modelled release, fuel basis and factors under cp_craft_harvest; exclude CO2 already recorded above.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_craft_harvest` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved other release evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_harvest_other_release_instance Unit: kg of actual substance Basis: per 1 kg reference flow; independently approve substance/medium instance upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_craft_harvest`;  |
| `collect_cleaning_water` | `shell_cleaning`; Inputs; Product flows: Actual sourced cleaning water | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Purchased water is a product input. Any actual direct seawater abstraction must instead be instantiated as an elementary resource input with its actual medium and support; never record both for the same water. Passive net exposure is excluded. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Meter actual supplied water under cp_shell_cleaning with source, density/conversion and recirculation records; count only net externally supplied volume/mass.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_shell_cleaning` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved water evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_cleaning_water Unit: kg Basis: per 1 kg reference flow; independently approve actual supply upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_shell_cleaning`;  |
| `collect_cleaning_support` | `shell_cleaning`; Inputs; Product flows: Actual cleaning support instances | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual cleaning aids, power, equipment or inclusive service in native units; identify aid chemistry and residue where used. Do not assume a disinfectant or depuration treatment. Flow property / unit: Actual instance property / native unit; Amount rule: Measure each attributed instance under cp_shell_cleaning with exclusive provider/direct ownership.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_shell_cleaning` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved cleaning support evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_cleaning_support_instance Unit: native unit of the individual instance Basis: per 1 kg reference flow; independently approve each instance upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_shell_cleaning`;  |
| `collect_cleaning_abstraction` | `shell_cleaning`; Inputs; Elementary flows: Actual direct cleaning-water abstraction | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Use only when water is actually withdrawn directly from the environment; declare fresh/seawater and waterbody. This is an alternative to purchased water for the same supply. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Meter actual direct withdrawal under cp_shell_cleaning; retain mass/volume conversion and exclude passive sea exposure.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_shell_cleaning` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved abstraction evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_cleaning_abstraction Unit: kg Basis: per 1 kg reference flow; independently approve waterbody/supply upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_shell_cleaning`;  |
| `collect_cleaning_waste` | `shell_cleaning`; Outputs; Waste flows: Collected cleaning waste and treatment effluent | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Separate collected solids, dead/rejected scallops and wastewater sent to treatment into actual destination instances. A wastewater service may include treatment emissions; do not duplicate them as direct discharge. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Weigh/meter each outgoing treatment-bound material under cp_shell_cleaning and retain destination.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_shell_cleaning` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved cleaning waste evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_cleaning_waste_instance Unit: kg Basis: per 1 kg reference flow; independently approve each destination instance upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_shell_cleaning`;  |
| `collect_cleaning_release` | `shell_cleaning`; Outputs; Elementary flows: Actual direct cleaning release | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate only actual direct releases. Direct outfall requires measured water return and individually identified pollutants on declared substance bases and receiving water. Actual node-owned generator combustion or leakage requires its own substance/air instance, including fossil CO2 if present; exclude provider-inclusive releases. Material sent to treatment is owned by cleaning_waste instead. Do not require a release where none occurs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Use actual outfall flow/concentration or node-owned fuel/leakage activity and applicable factors under cp_shell_cleaning; retain justified background adjustments and expand each independently characterized substance/medium release.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_shell_cleaning` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved cleaning discharge evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_cleaning_release_instance Unit: kg of actual substance or returned water Basis: per 1 kg reference flow; independently approve each substance/medium instance upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_shell_cleaning`;  |
| `collect_sorting_support` | `live_sorting`; Inputs; Product flows: Actual sorting support | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual grading power, equipment use or inclusive sorting service; cleaning belongs to its own node when independent. Flow property / unit: Actual instance property / native unit; Amount rule: Measure each attributable instance under cp_live_sorting with event/period owner.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_live_sorting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved sorting support evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sorting_support_instance Unit: native unit of the individual instance Basis: per 1 kg reference flow; independently approve each instance upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_live_sorting`;  |
| `collect_sorting_other_product` | `live_sorting`; Outputs; Product flows: Other intentional grade or destination output | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record only real intended secondary products, including downgraded live grades or separate processing destinations, at their distinct handoff. They are not the reference output and require explicit attribution; no automatic shell co-product exists while shells remain on live product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Weigh each actual intended output under cp_live_sorting and retain state, destination and attribution evidence; zero instances if absent.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_live_sorting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved secondary-product evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sorting_other_product_instance Unit: kg Basis: per 1 kg reference flow; independently approve each intended output upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_live_sorting`;  |
| `collect_sorting_waste` | `live_sorting`; Outputs; Waste flows: Rejected non-product sorting material | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Record broken/dead or otherwise discarded scallops and incidental material as actual waste, separated from saleable downgraded output and from stock returned alive to culture. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Weigh each rejected waste destination under cp_live_sorting; retain any live stock-return ledger movement separately.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_live_sorting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved sorting-reject evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sorting_waste_instance Unit: kg Basis: per 1 kg reference flow; independently approve each actual waste upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_live_sorting`;  |
| `collect_sorting_release` | `live_sorting`; Outputs; Elementary flows: Actual direct sorting release | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate only actual node-owned generator combustion, refrigerant leakage or other direct releases by substance and receiving medium. Include fossil CO2 as a separate actual instance if present; no separate fixed CO2 card exists at this node. Exclude provider-inclusive releases, and instantiate nothing when no direct release occurs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Record actual node-owned measured/modelled substance release under cp_live_sorting with fuel/leakage activity, factor, chemical basis and receiving-medium evidence.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_live_sorting` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved sorting release evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_sorting_release_instance Unit: kg of actual substance Basis: per 1 kg reference flow; independently approve each substance/medium upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_live_sorting`;  |
| `collect_packaging_support` | `live_packaging`; Inputs; Product flows: Actual package and packaging-support instances | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand boxes, liners, labels, reusable crates, cleaning and operation services separately in their real units. Record package material, item mass, reuse/return count, loss and end-of-use handoff; native shells are product, not packaging. Exclude logistics owned by live_delivery. Flow property / unit: Actual instance property / native unit; Amount rule: Measure actual new/replacement package and attributed service instances under cp_live_packaging; preserve count-to-mass samples and exclusive ownership.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_live_packaging` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved packaging-instance evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_packaging_support_instance Unit: native unit of the individual instance Basis: per 1 kg reference flow; independently approve each material/service upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_live_packaging`;  |
| `collect_packaging_waste` | `live_packaging`; Outputs; Waste flows: Actual package or product rejects | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Separate package trim, damaged package and discarded product instances with actual treatment destinations; returned reusable crates remain stock movements until disposal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Weigh each actual discarded material under cp_live_packaging; reconcile reusable stock without treating every return as new waste.; Value mode: Foreground record (`foreground_record`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_live_packaging` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved package-waste evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_packaging_waste_instance Unit: kg Basis: per 1 kg reference flow; independently approve each discarded material upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_live_packaging`;  |
| `collect_packaging_release` | `live_packaging`; Outputs; Elementary flows: Actual direct packaging release | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Instantiate only actual node-owned generator combustion, refrigerant leakage or other direct releases by substance and receiving medium. Include fossil CO2 as a separate actual instance if present; no separate fixed CO2 card exists at this node. Exclude provider-inclusive releases, and instantiate nothing when no direct release occurs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Record actual node-owned measured/modelled substance release under cp_live_packaging with fuel/leakage activity, factor, chemical basis and receiving-medium evidence.; Value mode: Calculated value (`calculated_value`); Specificity: Site-specific (`site_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_live_packaging` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved packaging release evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_packaging_release_instance Unit: kg of actual substance Basis: per 1 kg reference flow; independently approve each substance/medium upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_live_packaging`;  |
| `collect_delivery_support` | `live_delivery`; Inputs; Product flows: Actual live-preservation and transport instances | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual cooling energy, coolant/ice, protection, holding and delivery services into native-unit instances. Retain tkm or vehicle/equipment h where applicable, payload, distance, empty legs and service coverage. Direct fuel/power/assets and an inclusive delivery service are exclusive alternatives. No universal safe time or temperature is prescribed. Flow property / unit: Actual instance property / native unit; Amount rule: Measure each real support instance under cp_live_receipt and attribute to the same accepted lot; retained conditions must support live acceptance.; Value mode: Foreground record (`foreground_record`); Specificity: Route-specific (`route_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_live_receipt` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved delivery support evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_delivery_support_instance Unit: native unit of the individual instance Basis: per 1 kg reference flow; independently approve each support instance upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_live_receipt`;  |
| `collect_delivery_waste` | `live_delivery`; Outputs; Waste flows: Delivery mortalities, rejects and consumable waste | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Separate actual dead/rejected animals, used consumables and treatment-bound meltwater by destination. Rejected live intended outputs must be explicitly reclassified and attributed rather than hidden as reference acceptance or assumed waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Weigh/meter each actual waste destination under cp_live_receipt; retain rejection cause and any alternate intended destination.; Value mode: Foreground record (`foreground_record`); Specificity: Route-specific (`route_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Collected record (`collected_record`); Collection protocol: `cp_live_receipt` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved delivery loss evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_delivery_waste_instance Unit: kg Basis: per 1 kg reference flow; independently approve each actual waste upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_live_receipt`;  |
| `collect_delivery_other_release` | `live_delivery`; Outputs; Elementary flows: Other actual delivery release | Add a separate inventory exchange for each actual physical or chemical flow; determine its identity, flow type, composition/state, native property/unit, provider or receiving medium/destination. Preserve actual unallocated quantities, raw records and normalization under the collection duties below. This requirement is not a collection exchange, an assumed zero, or permission to copy aggregate amounts, ranges or UUIDs onto its components. Expand actual refrigerant leakage, combustion pollutants or direct water returns by substance and receiving medium. Exclude fossil CO2 already owned by delivery_fossil_co2 and provider-inclusive releases. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Amount rule: Record measured/modelled actual substance releases under cp_live_receipt with factor, chemical basis and compartment evidence.; Value mode: Calculated value (`calculated_value`); Specificity: Route-specific (`route_specific`); Normalization basis: per 1 kg reference flow; Basis kind: Reference flow (`reference_flow`); Evidence kind: Calculated from collection (`calculated_from_collection`); Collection protocol: `cp_live_receipt` Range-evidence collection duty (not an established interval and never copied onto each concrete exchange): Range: Provisional unresolved delivery release evidence need Range role: QA guardrail (`qa_guardrail`) Lower: 0 Upper: U_delivery_other_release_instance Unit: kg of actual substance Basis: per 1 kg reference flow; independently approve each substance/medium upper bound Basis kind: Reference flow (`reference_flow`) Evidence kind: Reasoned estimate (`reasoned_estimate`) | Raw measured/activity, composition, transfer/destination, supplier scope and independent range evidence; `cp_live_receipt`;  |
| `transport_cargo_scope` | any applicable pre-gate transport, return trip and shared transport service | Collect actual load and distance in the transport service native unit; load includes accompanying water, ice and containers and is not replaced by net reference animal/fish mass. Record actual fuel/service burdens and attribution for loaded, empty-return and zero-output periods. Inclusive transport-service scope excludes duplicate owned fuel, electricity, assets and direct releases; retain return and reusable-container responsibility. | Actual cargo, distance, trip, container and provider-scope records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference and inventory | Match actual flow type, substance/product state, destination, geography, property/unit and gate before concrete UUID binding; all unresolved actual rows and support gaps remain explicit. The final reference link addresses live_scallops_receipt only. | |
| `validate_mass_live` | final reference | Require 1 kg accepted net whole live body-plus-native-shell product with calibrated mass, excluded tare/free water/ice and same-lot live recipient acceptance. Dead, shucked or unknown-state receipt fails this scope. | |
| `validate_handoffs` | all process nodes | Verify exact predecessor and destination transfer ids and quantities; cleaning/packaging activation or bypass must be known. Check accepted grades, secondary intended outputs, returned stock, rejects, waste and losses separately; no two final outputs represent the same physical mass. | |
| `validate_period_mode` | batch/cohort and asset ledgers | Verify cohort/run/phase and reporting-period indices, opening/closing stocks, failed/nonproductive duty, maintenance/changeovers and replacement/retirement. Each carried burden and shared event is owned once. | |
| `validate_attribution` | multiple outputs and shared infrastructure | Check complete intended outputs, consumer-node/period lists, declared attribution decision and evidence. Direct assignment precedes residual allocation; shares reconcile to owned totals and supplier-inclusive/direct components do not overlap. Unknown allocation or lifetime evidence remains a finalization gap. | |
| `validate_environment` | losses and releases | Do not infer kg elementary emissions from whole escaped/dead animals, natural food or ambient exposure. Require actual substance/medium/basis for biological, cleaning and combustion releases, distinguish fossil CO2, and avoid treatment/direct-discharge duplication. No default nutrient, shell-carbon or avoided-product credit. | |
| `validate_ranges` | all actual exchanges | Every actual instance needs its own range basis/status and independently approved upper-bound evidence; no mixed-unit parent bound or unexplained default zero. The 1..1 final interval is normalization only, not survival or yield evidence. | |
| `validate_atomic_completion` | all applicable collection requirements and concrete inventory exchanges | Resolve every applicable section-8 collection requirement into individual physical/chemical exchanges with their own quantities, native units, composition/state, range basis or explicit uncertainty evidence, raw records, normalization, actual destinations/receiving media and verified compatible UUIDs. Any unresolved applicable requirement makes the final dataset incomplete and validation fails; unknown is not zero. Never copy aggregate amounts onto components or duplicate inclusive services with owned fuel/electricity/direct releases. Internal transfers are not fixed to the final 1 kg. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual data, methodology and identity review |
| downstream_use | Burden-bearing live whole Japanese suspended-net Yesso scallop supply at the declared first-recipient gate for downstream process or lifecyclemodel construction |
| allowed_use | Matching species, purchased wild-spat origin, net technology, live native-shell state, location/time and gate, with actual boundary and quality disclosures |
| excluded_use | Other species/routes, hatchery spat, ear-hanging, bottom culture, wild adults, dead/shucked/frozen product, food-safety certification, ecosystem-credit or permanent shell-carbon claims |
| required_metadata | PCR id/version; species; site/geography; source/upstream coverage; cohort and periods; production mode; actual conditional operations; output/grade destinations; reference mass/live gate; support units and ownership; allocation and shared assets |
| required_quality_disclosure | Measurement/sampling uncertainty; live condition and handling coverage; unresolved identities/supports/ranges; upstream and cohort gaps; release models; output/period/asset attribution and sensitivity |
| update_trigger | Change in species/source, net technology, gate/live state, handling, output set, quantitative evidence, release method, service coverage, asset life/ownership or attribution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-yesso-scallop-2009 | official_guidance | FAO. 2009. Patinopecten yessoensis. Cultured aquatic species fact sheets. Text by Helm, M.; edited by Crespi, V. and New, M. https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_yessoscallop.htm ; retrieved 2026-10-12 | Qualitative wild-spat/net nursery/growout, separate harvest and prompt live handling context. Selected boundary is narrower; no source numeric parameter, outdated production share, disputed sex description, default factor or environmental credit adopted. |
