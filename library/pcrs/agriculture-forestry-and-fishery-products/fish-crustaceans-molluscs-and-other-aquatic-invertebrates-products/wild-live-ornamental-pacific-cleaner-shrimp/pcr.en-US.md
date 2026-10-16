---
pcr_id: pcr.wild-live-ornamental-pacific-cleaner-shrimp
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild live ornamental Pacific cleaner shrimp

## 1. Scope and Applicability

This PCR covers wild, whole, live, never-frozen Pacific cleaner shrimp (Lysmata amboinensis) collected from reefs in the Trincomalee, Sri Lanka context by the actual documented hand-net, SCUBA-diver and boat branch, through first local ornamental buyer physical custody. Apply only where primary trip records confirm species, wild origin, capture location, hand net, SCUBA and actual boat service for the selected lot. The field study documents community gear and actual species commerce, but does not assign this species to a particular gear/boat combination; its evidence alone cannot establish application eligibility [priyashadi-ornamental-trincomalee-2023].

Capture, live sorting, actual bounded holding or evidenced bypass, carrier-seawater/protective presentation and every physical movement before first buyer receipt are separate responsibilities. Holding is conditional on observed bounded intervention, with actual start/end, inputs and before/after live states. Unknown holding state remains a data gap. No compulsory acclimation, oxygen, salinity, temperature, holding duration, diagnostic threshold, parasite-removal, castration or disease-free procedure is prescribed.

Exclude farmed animals, ornamental fish, other species as the reference product, food products, dead reference animals, frozen/processed products and downstream buyer/exporter operations after first physical receipt. Record other intended catch/grades as separate outputs rather than broadening the reference. No wild growth, natural feeding, habitat benefit, environmental credit, animal-health, safety, legality or welfare claim is inferred.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-ornamental-pacific-cleaner-shrimp |
| classification_refs | cpc:3.0:04912; narrower |
| covered_products | Wild whole live ornamental Lysmata amboinensis from the trip-confirmed Trincomalee hand-net SCUBA boat branch, at first local ornamental buyer physical receipt |
| excluded_products | Aquaculture; ornamental fish; other reference species; dead, food, frozen or processed reference animals; post-receipt exporter/retailer operations |
| representative_product | Pacific cleaner shrimp, Lysmata amboinensis, with native appendages and actual commercial size/condition |
| production_route | Wild reef capture; live grade/destination sorting; observed bounded holding or evidenced bypass; carrier-seawater/protective presentation; all pre-receipt movements |
| market_state | Whole live never-frozen ornamental animals; animal count/size/condition retained independently of carrier water and packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole live ornamental Pacific cleaner shrimp at first local buyer physical receipt |
| How much | 1 kg accepted net animal wet mass |
| How well | Confirmed Lysmata amboinensis; wild origin; live with native body/appendages; actual accepted commercial size and condition; never frozen; ornamental destination |
| How long or cycle | Declared trip/lot and receipt interval, linked to reporting periods including failed trips, open stock, container reuse, asset service, cleaning, replacement and closure |
| reference_flow_link | `buyer_live_shrimp` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole live ornamental Pacific cleaner shrimp at first local buyer physical receipt |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; wild origin; reef/capture location; trip and lot; actual hand-net SCUBA boat route; whole live native body and appendages; never frozen; commercial count; commercial size and condition; measured same-lot animal mass basis; actual holding state and evidence; carrier-water and packaging separation; first local ornamental buyer physical custody place and time; reporting period and stock linkage |

A dataset must declare every required qualifier. Commercial per-individual/count records are retained; they never supply a species-wide standard animal mass. Receipt requires physical custody evidence, independently of contract, invoice, payment or payer.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Measure accepted net whole live animal wet mass A for the actual received lot using cp_logistics, with water, container, package and incidentals independently excluded and actual live/count/condition records retained. A must be positive. |
| `animal_count_mass` | all animal rows | Mass | kg | Preserve native commercial animal counts and size/condition. Any count-to-mass conversion uses representative measured animals from the same lot, recorded sample count, net mass, timing and uncertainty; no generic animal mass or other-lot conversion. |
| `water_package_separation` | all inventory rows | Actual instance property | Actual native unit | Measure animals, managed carrier water, incidentals and packages independently; do not use gross transport mass as animal mass or infer water from animal count. Preserve supplied service, energy and material native units. |
| `transfer_identity` | all inventory rows | Actual instance property | Actual native unit | Every internal physical transfer has one id, owner, state, quantity and unit, reproduced exactly in output and paired input. Branch choice never fixes internal feed to 1 kg. |
| `release_basis` | direct return and emission instances | Actual substance property | Actual native unit | Identify each pollutant and receiving medium before binding. Distinguish direct seawater return from pollutant quantity, organism return from waste, product water supply from abstraction, treatment from discharge, and fossil from biogenic carbon. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual wild reef capture context and documented boat/diver trip, including attributable upstream inputs and shared assets |
| starting_condition_role | Foreground source-to-collected responsibility; natural growth is not a managed production stage or credited feed |
| product_classification_scope | A narrower wild live ornamental crustacean subset of CPC 3.0 04912; not whole-leaf coverage |
| recursive_input_rule | Purchased or returned same-category live animals and retained opening stock must preserve verified wild origin, inherited upstream burden, quantity and state; unresolved ancestry cannot be reset to zero or recaptured as a new environmental removal |
| upstream_dataset_requirement | Verified concrete input identities and appropriate upstream datasets for actual supplies, energy, diving/boat/logistics services, equipment/container service and treatment; disclose exclusions and substitutions |
| disclosure | Trip/species/route proof; ownership-independent receipt gate; holding active/bypass/unknown evidence; animal/water/package separation; every intended output/stock/waste/return; reporting periods and shared-burden ledger |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | capture | Community methods and species commerce are route evidence; application trip records must establish the selected hand-net SCUBA boat route for this species. Capture removes animals from wild context independently of sorting and preservation; no managed growout stage. | priyashadi-ornamental-trincomalee-2023 |
| `boundary_receipt` | logistics | Include all actual physical movement, handling and intermediate custody before first local ornamental buyer physical receipt, regardless payer/operator. An invoice, sale or contract is not the physical gate. Exclude actual post-receipt buyer operation. | |
| `boundary_holding` | holding | Activate only observed bounded live holding with start/end, usable live state before/after and measured inputs/outputs. Otherwise require evidenced bypass; unknown state blocks finalization rather than selecting bypass. | |
| `boundary_destinations` | all inventory rows | Enumerate every intended species/grade/resale/retained output with its own output instance and handoff, distinguish mortality/waste from downgraded commercial product, and observe incidental material entering sorting. | |
| `boundary_periods` | all processes | Include trip, sorting/holding/presentation batch, leg and reporting-period records; failed/no-output trips, opening/closing live stock, mortality, cleanup, shared services, infrastructure, container replacement and actual termination burdens remain attributable. | |
| `boundary_services` | all processes | A complete purchased service excludes duplicated constituent energy, assets and direct releases. For foreground-operated service record constituents and direct releases; treatment is modelled only when actual, with full subinventory or one complete service and never both. | |
| `boundary_water` | all water and release rows | Pair managed-water transfers, record new direct intake separately from purchased supply, and distinguish intended reuse, waste to treatment and actual direct return. Each actual treatment instance inside a node has separately identified material/service inputs, treatment outputs and substance-specific releases. | |
| `boundary_shared` | shared assets/services | Identify boat, diving/net/container equipment, holding/presentation site and vehicles actually shared among nodes/outputs/periods; record consumer list, acquisition, use, maintenance, replacement, service life, closure and one owner ledger. No universal lifetime. | |
| `boundary_classification` | reference product | Retain wild origin, ornamental purpose and live crustacean state; fish and farmed ornamentals are excluded. The narrower boundary does not cover all aquatic ornamental organisms. | un-cpc3-2025 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Wild reef capture | required | Trip records confirm hand-net SCUBA boat collection of wild Lysmata amboinensis | capture responsibility | recorded trip and retained unsorted live catch |
| `sorting` | Live grade and destination sorting | required | Every retained catch is reconciled by actual condition and destination | grading responsibility | recorded sorted live animals |
| `holding` | Bounded live holding | conditional | Actual start/end and intervention records establish bounded live holding; otherwise an evidenced bypass is required | preservation responsibility | recorded live animals leaving actual holding |
| `presentation` | Carrier-seawater and protective presentation | required | Actual animal, carrier-water and container states are recorded | presentation responsibility | recorded presented live animals |
| `logistics` | All movements through first physical local buyer receipt | required | Include every actual pre-receipt leg and intermediate transfer regardless operator or payer | delivery responsibility | 1 kg accepted net whole live animal mass at first local ornamental buyer physical receipt |

Trips are indexed batches; sorting, holding (if active), presentation and delivery legs retain their own event ids and reporting periods. Actual transfer records link nodes. T-CS-A/W/I link capture to sorting. T-SH-A/W link sorting to active holding; T-HP-A/W link holding to presentation. T-SP-A/W link sorting directly to presentation only for evidenced bypass. T-PL-A/W/P link presentation to logistics. Each alternate output remaining inside the foreground adds its own named paired input instance in the receiving node; external outputs record their actual recipient. Transfer events do not create duplicate purchases, abstractions or upstream burdens.

### Process: Wild reef capture (`capture`)

#### Inputs

##### Product flows

##### Elementary flows

###### Wild Pacific cleaner shrimp removed from the reef (`wild_shrimp_removal`)

Measure whole animal wet mass of all target animals actually removed from the wild context, including retained catch, collection mortality and animals subsequently released; retain actual count, species and site. Reconcile target live returns separately under collect_capture_direct_returns without netting away their actual capture activity. This is the source-to-collected boundary, not aquaculture feed or a purchased live-animal supply.

- Selected flow: Wild Pacific cleaner shrimp removed from the reef
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual wild_shrimp_removal quantity; cp_capture; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Unestablished instance-specific uncertainty; U_wild_shrimp_removal requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_wild_shrimp_removal
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Direct seawater intake for actual collection carrier water (`capture_seawater_intake`)

Record new seawater abstracted directly from the environment, its location and net quantity. Do not classify purchased water or managed water already circulating in the foreground as a second abstraction.

- Selected flow: Sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual capture_seawater_intake quantity; cp_capture; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Unestablished instance-specific uncertainty; U_capture_seawater_intake requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_capture_seawater_intake
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Outputs

##### Product flows

###### Unsorted live Pacific cleaner shrimp at capture-to-sorting handoff (`unsorted_live_shrimp`)

Measure live whole animal mass/count excluding seawater and incidentals. Transfer T-CS-A records exact state, quantity, trip, time and custody; sorting_live_input is its paired input. Capture is independent of later sorting, holding and presentation, and no wild growth inventory is invented.

- Selected flow: Unsorted live Pacific cleaner shrimp at capture-to-sorting handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual unsorted_live_shrimp quantity; cp_capture; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Unestablished instance-specific uncertainty; U_unsorted_live_shrimp requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_unsorted_live_shrimp
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Managed carrier seawater at capture-to-sorting handoff (`capture_carrier_water`)

Measure carrier seawater separately from animals. Transfer T-CS-W has one quantity/state and pairs with sorting_water_input; water remains managed technosphere material at this internal transfer.

- Selected flow: Managed carrier seawater at capture-to-sorting handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual capture_carrier_water quantity; cp_capture; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture`
- Range: Unestablished instance-specific uncertainty; U_capture_carrier_water requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_capture_carrier_water
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

##### Elementary flows

### Process: Live grade and destination sorting (`sorting`)

#### Inputs

##### Product flows

###### Unsorted live Pacific cleaner shrimp received for sorting (`sorting_live_input`)

Receive exactly T-CS-A from unsorted_live_shrimp, preserving the same species, live state, trip, animal quantity/count and custody; exclude water, package and incidentals.

- Selected flow: Unsorted live Pacific cleaner shrimp received for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual sorting_live_input quantity; cp_sorting; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unestablished instance-specific uncertainty; U_sorting_live_input requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorting_live_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Managed capture seawater received for sorting (`sorting_water_input`)

Receive exactly T-CS-W from capture_carrier_water. Record managed carrier-water quantity separately; this is not a new environmental abstraction.

- Selected flow: Managed capture seawater received for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual sorting_water_input quantity; cp_sorting; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unestablished instance-specific uncertainty; U_sorting_water_input requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorting_water_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Outputs

##### Product flows

###### Sorted live Pacific cleaner shrimp for holding or presentation (`sorted_live_shrimp`)

Record the main selected live grade and each commercial size/condition. Actual holding active: transfer T-SH-A pairs with holding_live_input; evidenced holding bypass: T-SP-A pairs with presentation_live_input. Select one destination per physical lot; no fixed internal mass or health threshold.

- Selected flow: Sorted live Pacific cleaner shrimp for holding or presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual sorted_live_shrimp quantity; cp_sorting; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unestablished instance-specific uncertainty; U_sorted_live_shrimp requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorted_live_shrimp
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Managed sorted carrier seawater for holding or presentation (`sorted_carrier_water`)

Actual holding active: transfer T-SH-W pairs with holding_water_input; evidenced bypass: T-SP-W pairs with presentation_water_input. Measure the actual quantity/state for the selected branch and account for separated water independently.

- Selected flow: Managed sorted carrier seawater for holding or presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual sorted_carrier_water quantity; cp_sorting; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting`
- Range: Unestablished instance-specific uncertainty; U_sorted_carrier_water requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorted_carrier_water
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

##### Elementary flows

### Process: Bounded live holding (`holding`)

#### Inputs

##### Product flows

###### Sorted live Pacific cleaner shrimp entering bounded holding (`holding_live_input`)

When holding is actually active, receive exactly T-SH-A from sorted_live_shrimp, preserving measured animal mass/count and sorted grade. Unknown actual intervention is an unresolved state; it is not the bypass.

- Selected flow: Sorted live Pacific cleaner shrimp entering bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual holding_live_input quantity; cp_holding; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unestablished instance-specific uncertainty; U_holding_live_input requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_live_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Managed seawater entering bounded holding (`holding_water_input`)

When holding is active, receive exactly T-SH-W from sorted_carrier_water. Track existing water, added water, changes and outgoing water separately; never re-abstract this internal transfer.

- Selected flow: Managed seawater entering bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual holding_water_input quantity; cp_holding; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unestablished instance-specific uncertainty; U_holding_water_input requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_water_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

###### New direct seawater abstraction for actual holding (`holding_seawater_intake`)

Record only newly abstracted seawater from the environment during active holding, with site, quantity and intervention time. Existing managed carrier water and purchased water are excluded from abstraction.

- Selected flow: Sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual holding_seawater_intake quantity; cp_holding; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unestablished instance-specific uncertainty; U_holding_seawater_intake requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_seawater_intake
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Outputs

##### Product flows

###### Live Pacific cleaner shrimp leaving bounded holding (`held_live_shrimp`)

Measure live whole animals after the actual bounded intervention, preserving observed condition/size/count. Transfer T-HP-A pairs with presentation_live_input. Record the usable live state before and after; no survival guarantee or animal-health procedure is implied.

- Selected flow: Live Pacific cleaner shrimp leaving bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual held_live_shrimp quantity; cp_holding; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unestablished instance-specific uncertainty; U_held_live_shrimp requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_held_live_shrimp
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Managed seawater leaving bounded holding (`held_carrier_water`)

Measure transfer T-HP-W paired with presentation_water_input independently from animal mass; identify reused water, actual composition/state and any separately discarded quantity.

- Selected flow: Managed seawater leaving bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual held_carrier_water quantity; cp_holding; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Range: Unestablished instance-specific uncertainty; U_held_carrier_water requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_held_carrier_water
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

##### Elementary flows

### Process: Carrier-seawater and protective presentation (`presentation`)

#### Inputs

##### Product flows

###### Sorted or held live Pacific cleaner shrimp received for presentation (`presentation_live_input`)

Receive exactly T-SP-A from sorted_live_shrimp when bypass is evidenced, or T-HP-A from held_live_shrimp when holding is active. Preserve the chosen transfer id, live grade, animal mass/count and single custody event; never receive both for the same animals.

- Selected flow: Sorted or held live Pacific cleaner shrimp received for presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual presentation_live_input quantity; cp_presentation; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished instance-specific uncertainty; U_presentation_live_input requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_live_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Managed carrier seawater received for presentation (`presentation_water_input`)

Receive exactly T-SP-W or T-HP-W according to the actual holding branch, with the paired upstream state/quantity. This managed seawater is not new environmental intake.

- Selected flow: Managed carrier seawater received for presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual presentation_water_input quantity; cp_presentation; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished instance-specific uncertainty; U_presentation_water_input requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_water_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

###### New direct seawater intake for presentation (`presentation_seawater_intake`)

Record only actual new environmental seawater intake and intake location; exclude managed internal seawater and purchased seawater. Carrier-water amount is independent of animal reference mass.

- Selected flow: Sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual presentation_seawater_intake quantity; cp_presentation; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished instance-specific uncertainty; U_presentation_seawater_intake requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_seawater_intake
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Outputs

##### Product flows

###### Presented live Pacific cleaner shrimp handed to pre-receipt logistics (`presented_live_shrimp`)

Measure whole live animal mass/count, size and condition after presentation, excluding carrier seawater and package. Transfer T-PL-A pairs with logistics_live_input. Presentation ends at protective-state handoff; subsequent distribution is separately recorded in logistics.

- Selected flow: Presented live Pacific cleaner shrimp handed to pre-receipt logistics
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual presented_live_shrimp quantity; cp_presentation; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished instance-specific uncertainty; U_presented_live_shrimp requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presented_live_shrimp
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Presentation carrier seawater handed to logistics (`presented_carrier_water`)

Measure carrier seawater transfer T-PL-W paired with logistics_water_input, with composition/state and quantity independent of animal mass.

- Selected flow: Presentation carrier seawater handed to logistics
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual presented_carrier_water quantity; cp_presentation; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Unestablished instance-specific uncertainty; U_presented_carrier_water requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presented_carrier_water
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

##### Elementary flows

### Process: All movements through first physical local buyer receipt (`logistics`)

#### Inputs

##### Product flows

###### Presented live Pacific cleaner shrimp received into pre-receipt logistics (`logistics_live_input`)

Receive exactly T-PL-A, preserving the same whole live animal state, count, measured mass and custody; include every actual onward leg up to first local buyer physical receipt.

- Selected flow: Presented live Pacific cleaner shrimp received into pre-receipt logistics
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual logistics_live_input quantity; cp_logistics; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_logistics`
- Range: Unestablished instance-specific uncertainty; U_logistics_live_input requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_logistics_live_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Presentation carrier seawater received into logistics (`logistics_water_input`)

Receive exactly T-PL-W and preserve the managed-water quantity/state. Subsequent actual replenishment requires its own purchased-water or direct-intake instance; do not re-abstract existing water.

- Selected flow: Presentation carrier seawater received into logistics
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual logistics_water_input quantity; cp_logistics; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_logistics`
- Range: Unestablished instance-specific uncertainty; U_logistics_water_input requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_logistics_water_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

###### New direct seawater intake during actual pre-receipt logistics (`logistics_seawater_intake`)

Instantiate each actual new direct environmental seawater intake during a leg, with location and measured quantity. Purchased replenishment water is a product input under collect_logistics_operations; managed transfers are never new intake.

- Selected flow: Sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual logistics_seawater_intake quantity; cp_logistics; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_logistics`
- Range: Unestablished instance-specific uncertainty; U_logistics_seawater_intake requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_logistics_seawater_intake
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Outputs

##### Product flows

###### Whole live ornamental Pacific cleaner shrimp at first local buyer physical receipt (`buyer_live_shrimp`)

1 kg; calculate same-lot accepted net animal wet mass A / A = 1 kg under same_lot_reference, using cp_logistics. A must be positive and measured separately from carrier seawater, packaging and incidentals, with actual commercial count, size/condition and first physical custody record. This card is the single final reference output; an invoice or contract alone is not receipt.

- Selected flow: Whole live ornamental Pacific cleaner shrimp at first local buyer physical receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_logistics`
- Sources: `same-lot-reference-identity`
- Range: Same-lot reference identity
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `same-lot-reference-identity`


###### Carrier seawater physically accompanying receipt or retained for reuse (`buyer_carrier_water`)

Measure actual water accompanying buyer receipt separately from animals, or each intended reuse handoff with transfer identity and destination. Returned water is not automatically a sold co-product; document whether a custody accompaniment or independently intended output. Waste and direct return quantities are separate.

- Selected flow: Carrier seawater physically accompanying receipt or retained for reuse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual buyer_carrier_water quantity; cp_logistics; allocated to the declared reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_logistics`
- Range: Unestablished instance-specific uncertainty; U_buyer_carrier_water requires independent observations, not a universal cap or empirical default
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_buyer_carrier_water
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | all processes | First subdivide independently measured capture, sorting, holding, presentation and logistics events and directly assign dedicated resources. Apply only one owner for each transfer/shared service; physical internal transfers carry no duplicated burden. | |
| `allocation_outputs` | mixed catch and grade outputs | Enumerate the full actual intended output set, including other species, lower commercial grades, resale, live retained/returned stock and independently intended container/water reuse. Separate product accompaniment from an independent product. After subdivision use measured causal service demand (boat/diver time, holding occupancy-time or leg payload-distance) when supported; document its physical rationale. | |
| `allocation_fallback` | inseparable shared output burden | When causal demand cannot be supported, use documented nonnegative comparable producer-gate net-sales-value shares across the actual intended outputs, using actual commercial counts/prices and sales records with a positive total-value denominator. Net sales value means comparable sales proceeds after documented sales adjustments, not profit. Explicitly value unsold/retained stock on an evidenced comparable producer-gate basis and disclose uncertainty. Zero, negative or unavailable output values or a nonpositive denominator require a separately justified alternative allocation and sensitivity; compare a measured animal-mass alternative. If neither physical nor value-based attribution can be evidenced, retain an unresolved burden rather than zero. No substitution/avoided-product credit. | |
| `allocation_periods` | periods and stock | Link acquisition, operation, failed/no-output trips, opening/closing live stock, mortality/replacement, cleanup, maintenance and termination to trip/batch/leg/reporting period. Carry inherited burden with retained/returned stock to the next period exactly once. Include failed-trip burden in the relevant period's actual intended output pool with declared rationale and sensitivity; a period with no accepted output remains an unresolved carried burden, never divide by zero. | |
| `allocation_assets` | shared infrastructure and reuse | Maintain one asset/service ledger naming all consuming nodes and periods. Allocate boat/diving/net service by evidenced use, holding capacity by occupied service-time, presentation equipment and container service by recorded use/turns, and transport by actual leg demand. Record acquisition, replacement, maintenance, actual or justified service-life evidence, idle/failed use and closure; test alternatives when service-life evidence is incomplete, with no standard lifetime imposed. Reusable containers are not new full purchases at every transfer. | |
| `allocation_losses` | mortality, returns and treatment | Actual losses retain their prior resource burden; assign their handling to the causal event and reporting pool, preserve any actual replacement activity, and never reclassify resale/downgrade as waste. Waste receiver service and direct release are mutually distinguished, with upstream waste and foreground treatment counted once. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | Capture resources, wild removal, retained animals, water, incidentals, alternate catch and losses/releases | Trip log, measurement, service and asset record | trip; species; wild site; SCUBA; hand net; boat; event; row/instance; transfer id; animal count and size/condition; net animal wet mass; water; incidentals; fuel/service/native unit; substance/medium/carbon basis; recipient; asset/use/period; failed trip; uncertainty | Confirm species/route with primary trip records; measure animal/water/incidentals separately with calibrated mass equipment and traceable counts; reconcile all destinations and paired transfers; use actual supplier/asset service records and substance-specific measured emission evidence; computed actual releases require their own declared formula, factor/source, measured components and uncertainty with calculated_value/calculated_from_collection rather than measured-release metadata | kg; count and each instance native unit retained separately | Each trip, transfer, input and release event | Entire trip plus attributable acquisition/service/reporting periods, including failed trips | Actual reef, boat, diver and receiving sorting site | per 1 kg reference flow | Species/gear/boat proof; calibrated/tared weighing; count reconciliation; paired transfers; invoices/service scope; asset ledger; explicit gaps and uncertainty |
| `cp_sorting` | `sorting` | Sorting received animals/water/incidentals, inputs, selected and alternate destinations, waste and returns | Lot destination ledger and measurement | lot/trip; incoming transfer id/state/quantity; instance; count; size/condition; net animal mass; water/incidentals; destination; holding active/bypass evidence; supply/native unit; treatment receiver; substance/medium; stock; period | Match T-CS-A/W/I; measure each animal grade and water/material stream independently; observe incidentals entering sorting; document condition/destination without diagnostic prescriptions; match T-SH or T-SP branch and every alternate handoff | kg; count and each instance native unit retained separately | Every received lot, sorting event and output | Full sorting batch, cleaning and reporting-period stock changes | Actual sorting location and its actual recipients | per 1 kg reference flow | Destination/custody ledger; animal-water-package separation; calibrated measurements; holding-state proof; waste and direct-return distinction |
| `cp_holding` | `holding` | Active bounded holding animals/water, intervention inputs, resulting live/alternate stock and losses | Intervention log, measurement and asset service record | lot; active/bypass/unknown; start/end; before/after live state; T-SH/T-HP; animal count/size/condition/mass; water balance; actual inputs/native units; waste receiver; pollutant/medium/carbon; tank/container use; period/stock/failed batch | Require observed bounded intervention; match T-SH-A/W and T-HP-A/W; measure animal and water changes separately; record only actual resources, services and releases; if bypassed retain evidence without inventing holding inputs or outcomes | kg; duration and each actual instance native unit retained separately | Each actual intervention and transfer | Actual intervention interval and attributable equipment/reporting periods | Actual holding site only when active | per 1 kg reference flow | Time/state records; input invoices/meters; calibrated measurements; separate waste/return records; reuse/service ledger and uncertainty |
| `cp_presentation` | `presentation` | Animals, water, protective materials, presented outputs, alternate products, waste and releases | Presentation batch, package and custody record | lot; actual branch; T-SP/T-HP; animal count/condition/mass; managed/new/purchased water; package material/native unit; single-use/reuse; T-PL; recipient; inputs; waste/treatment; direct substances/medium; service periods | Match actual branch inputs; measure animal mass excluding water/package; measure water and each package separately; document roles, reuse and actual protective state; pair T-PL-A/W/P and each alternate handoff | kg; count and each instance native unit retained separately | Each presentation batch, acquisition/use and transfer | Batch, cleanup, container/service and reporting periods | Actual presentation location and logistics handoff | per 1 kg reference flow | Branch proof; calibrated/tared masses; package identity/reuse and transfer ledger; waste receiver and release records |
| `cp_logistics` | `logistics` | Every pre-receipt movement, resources, animal reference, water/package custody, alternate output and loss | Leg, weighing, commercial and physical custody record | lot/trip; T-PL; all legs/operators/payers; distance; payload; time; empty return; actual service/native unit; animal species/count/size/condition; same-lot sampled count and net mass; accepted net mass A; water/package/incidentals tare; buyer/place/time/custody; loss/stock; treatment; pollutant/medium/carbon; asset/period | Match T-PL-A/W/P; follow every physical leg to first local ornamental buyer custody; use calibrated weighing or traceable same-lot net-animal weighing records independently excluding water/package/incidentals, preserving sample counts/uncertainty and commercial records; verify live condition and positive A at physical receipt; record complete service scope and distinct waste/return/alternate destinations | kg; count and each leg/input/output instance native unit retained separately | Every leg, transfer, receipt, failed movement and loss | From presentation handoff through first physical receipt plus attributable service/reporting periods | Actual route, intermediate locations and first buyer receipt site | per 1 kg reference flow | Calibrated/tared same-lot animal mass; count/grade reconciliation; timestamped custody rather than invoice only; complete leg manifest; service exclusions; stock/asset ledger and uncertainty |

Any computed direct release in any node follows the instance-specific formula/factor/source and measured-component requirement in its direct-release card, with calculated_value/calculated_from_collection; only measured releases retain foreground_record/collected_record. No generic fixed emission factor is supplied.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `same_lot_reference` | buyer_live_shrimp | Same-lot accepted animal mass A / A = 1 kg; require positive A, identical lot and independent animal-water-package separation. | A; cp_logistics | 1 kg reference flow | same-lot-reference-identity |

All non-reference amounts use actual measured native quantities attributable to the declared lot/period, divided by positive accepted animal mass A to express per 1 kg reference flow, without changing numerator property/unit. Count-to-mass estimates retain same-lot representative sample count/mass and uncertainty; no universal standard mass. Symbolic U_row is an unestablished row/instance-specific upper uncertainty bound needing independent observations. It supplies neither a numeric default nor an empirical typical interval and cannot excuse missing actual records.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | reference and actual instances | Confirm species, wild origin, ornamental/live state, trip-specific hand-net SCUBA boat route, exact input/output identity and native property/unit before final exchange binding. | Species/trip proof and verified identity details; explicit unresolved gaps |
| `quality_balance` | physical handoffs | Match each named transfer output/input quantity/state/unit exactly; reconcile animal counts and independently measured mass, water, incidentals, package, alternate products, live stock, mortality and returns. | Paired custody records and node balances |
| `quality_state` | holding and receipt | Demonstrate actual bounded holding or evidenced bypass, and first physical buyer custody with live accepted animals; unknown state or invoice-only evidence is incomplete. | Intervention/bypass and physical receipt records |
| `quality_periods` | all processes | Cover complete trip/batch/leg/reporting periods, including failed/no-output events, opening/closing stock, acquisition, reuse, shared asset service, cleaning, maintenance, replacement and closure; reconcile one owner ledger. | Period and asset/service ledgers, attribution rationale and sensitivity |
| `quality_ranges` | every flow card | Establish each actual amount from records separately from symbolic uncertainty. Replace U_row with independently supported site/instance evidence before claiming bounded empirical uncertainty; preserve uncertainty for sample mass and allocation. | Measurements, sample representativeness and evidence tier disclosure |
| `quality_sources` | claims | Literature supports qualitative route/community commerce only; never infer species-specific gear assignment, health procedures, castration, disease guarantee or numerical operating defaults from it. | Source passages and application evidence |
| `collect_capture_operations` | `capture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual boat, diver, net and ancillary supplies or services. For each actual boat fuel, purchased diving-air/compressor service, net, collection container, cleaning supply, energy or complete service, instantiate a separate exchange with its actual material/service identity, property and native unit. Use trip activity and shared-service attribution; a complete service excludes duplicated constituent fuel, electricity, assets and releases. Record each actual opening, received or returned managed live-stock input as its own concrete animal instance with species, wild-origin evidence, live state, Mass/kg and count, receipt/custody, inherited burden and a transfer id paired to the prior closing-stock or return output record. It is not a new wild abstraction; purchased/returned stock alone does not prove this PCR's species-specific capture route or permit bypassing upstream evidence. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_capture_operations quantity; cp_capture; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Unestablished instance-specific uncertainty; U_capture_operations requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_operations <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_other_resources` | `capture`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other wild organisms and substrate actually removed from the reef. Instantiate each actually removed non-reference organism or substrate resource separately with identity, medium/location, count where relevant and measured native quantity. Reconcile incidental removals and other intended catches with collect_capture_incidentals, collect_capture_other_products, mortality and actual returns; do not merge their resource quantities into target shrimp mass or assume every incidental is intended product. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_capture_other_resources quantity; cp_capture; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Unestablished instance-specific uncertainty; U_capture_other_resources requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_other_resources <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_incidentals` | `capture`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Incidentally collected reef organisms or substrate to sorting. Record each actually collected organism/substrate instance with identity, count where relevant and wet mass. Transfer T-CS-I pairs with collect_sorting_incidental_input. This transfer does not declare incidental organisms intended commercial products. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured actual collect_capture_incidentals quantity; cp_capture; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Unestablished instance-specific uncertainty; U_capture_incidentals requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_incidentals <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_other_products` | `capture`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended live catch or retained return stock leaving capture. Instantiate each actual intended non-reference species, lower condition commercial product, or retained live stock output separately with identity, condition, measured mass/count, destination and physical handoff. Goods routed to sorting must have their own paired sorting input/output instance; external destinations end at the recorded handoff. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_capture_other_products quantity; cp_capture; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Unestablished instance-specific uncertainty; U_capture_other_products requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_other_products <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_mortality_waste` | `capture`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Capture mortality and discarded materials sent to actual waste receiver. Record each dead animal or damaged supply waste separately, with mass, destination, handoff and upstream activity. Capture losses are not live product; return to environment is reported under collect_capture_direct_returns instead. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured actual collect_capture_mortality_waste quantity; cp_capture; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Unestablished instance-specific uncertainty; U_capture_mortality_waste requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_mortality_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_capture_direct_returns` | `capture`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual direct returns and substance-specific releases from capture. Instantiate actually released target shrimp and incidental organisms, returned carrier seawater, or direct pollutants separately by identity and environmental medium. Reconcile target releases with wild_shrimp_removal, retained catch and mortality. Distinguish unaltered seawater return from pollutant mass; combustion pollutants require individual substance and fossil/biogenic carbon basis. A complete service owns its releases once. For a measured release instance retain foreground_record/collected_record. Any computed actual release instance must instead declare calculated_value/calculated_from_collection, its own formula, factor and source, measured component inputs and uncertainty under this node's protocol; no generic fixed factor is supplied. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_capture_direct_returns quantity; cp_capture; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_capture` <br> - Range: Unestablished instance-specific uncertainty; U_capture_direct_returns requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_capture_direct_returns <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_incidental_input` | `sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Collected reef incidentals received for sorting. Receive each T-CS-I organism/substrate instance with the same quantity/state as collect_capture_incidentals, then record its actual destination. Do not silently discard incidentals before the sorting balance. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured actual collect_sorting_incidental_input quantity; cp_sorting; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished instance-specific uncertainty; U_sorting_incidental_input requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_incidental_input <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_operations` | `sorting`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting supplies, energy, assets and services. Instantiate each actual sorting input with native unit and identity, including measured replacement/cleaning resources and allocated equipment/container service. Do not assume electricity or a consumable where absent. Record each actual opening, received or returned managed live-stock input as its own concrete animal instance with species, wild-origin evidence, live state, Mass/kg and count, receipt/custody, inherited burden and a transfer id paired to the prior closing-stock or return output record. It is not a new wild abstraction; purchased/returned stock alone does not prove this PCR's species-specific capture route or permit bypassing upstream evidence. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_sorting_operations quantity; cp_sorting; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished instance-specific uncertainty; U_sorting_operations requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_operations <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_alternate_products` | `sorting`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other species, lower commercial grades and retained live stock from sorting. Instantiate every intended alternate species/grade, resale product and live retained/returned stock separately, with actual count, measured animal mass, condition, destination and physical handoff. Match incoming other-product instances if capture routed them here; a downgrade or resale is not waste. Retained stock enters the period ledger. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_sorting_alternate_products quantity; cp_sorting; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished instance-specific uncertainty; U_sorting_alternate_products requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_alternate_products <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_waste` | `sorting`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Sorting mortality, rejected solids and wastewater sent to treatment. Instantiate dead animals, genuinely discarded substrate/materials, and carrier wastewater separately with measured mass and actual receiver. Wastewater sent to treatment is a waste exchange, not direct discharge; no wastewater quantity is inferred from animal mass. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured actual collect_sorting_waste quantity; cp_sorting; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished instance-specific uncertainty; U_sorting_waste requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorting_direct_returns` | `sorting`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Sorting direct organism/water returns and individual pollutant releases. Record actual direct organism/substrate returns, returned seawater and each pollutant separately with receiving medium and composition/substance basis. A returned water volume or mass is not pollutant mass; tissue carbon, biogenic carbon and fossil carbon remain separate. For a measured release instance retain foreground_record/collected_record. Any computed actual release instance must instead declare calculated_value/calculated_from_collection, its own formula, factor and source, measured component inputs and uncertainty under this node's protocol; no generic fixed factor is supplied. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_sorting_direct_returns quantity; cp_sorting; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sorting` <br> - Range: Unestablished instance-specific uncertainty; U_sorting_direct_returns requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorting_direct_returns <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_supplies` | `holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual holding water supply, energy, materials, assets or services. Instantiate only observed bounded-intervention inputs separately: purchased seawater, actual energy/aeration or supplied gas, materials, cleaning and allocated tank/container service, each with its actual identity/native unit. Direct new seawater belongs in holding_seawater_intake. No dose, temperature, salinity, oxygen, feed or duration is prescribed. Record each actual opening, received or returned managed live-stock input as its own concrete animal instance with species, wild-origin evidence, live state, Mass/kg and count, receipt/custody, inherited burden and a transfer id paired to the prior closing-stock or return output record. It is not a new wild abstraction; purchased/returned stock alone does not prove this PCR's species-specific capture route or permit bypassing upstream evidence. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_holding_supplies quantity; cp_holding; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unestablished instance-specific uncertainty; U_holding_supplies requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_supplies <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_alternate_products` | `holding`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Alternate commercial live grades and retained stock leaving holding. Instantiate each actual intended lower grade, resale animal, other product and retained/returned live stock separately with quantity/count, state, destination and physical handoff. Retained live stock is linked to closing/opening period inventory. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_holding_alternate_products quantity; cp_holding; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unestablished instance-specific uncertainty; U_holding_alternate_products requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_alternate_products <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_waste` | `holding`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Holding mortality, spent materials and wastewater sent to actual treatment. Record each mortality, spent material and wastewater treatment transfer separately with measured mass and receiver, distinguishing residues and rejected product from intended live output; link failed batches to the reporting period. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured actual collect_holding_waste quantity; cp_holding; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unestablished instance-specific uncertainty; U_holding_waste requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_holding_direct_returns` | `holding`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Holding direct water returns and individual environmental releases. Instantiate actual direct carrier-water return separately from each pollutant or organism release, identifying substance, medium and fossil/biogenic basis where relevant. Treatment output is reported only if actual treatment is inside the foreground, with its own recorded inputs, outputs and releases and no duplicated purchased treatment service. For a measured release instance retain foreground_record/collected_record. Any computed actual release instance must instead declare calculated_value/calculated_from_collection, its own formula, factor and source, measured component inputs and uncertainty under this node's protocol; no generic fixed factor is supplied. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_holding_direct_returns quantity; cp_holding; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_holding` <br> - Range: Unestablished instance-specific uncertainty; U_holding_direct_returns requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_holding_direct_returns <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_materials` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual protective packaging, water supply and presentation resources. Instantiate actual bags, closures, boxes, reusable containers, purchased seawater, supplied gas, cleaning resources, energy and equipment/service separately in native units. Declare material role, single-use/reuse, acquisition, replacement and container destination. Do not presume a material, gas or dosing practice. Record each actual opening, received or returned managed live-stock input as its own concrete animal instance with species, wild-origin evidence, live state, Mass/kg and count, receipt/custody, inherited burden and a transfer id paired to the prior closing-stock or return output record. It is not a new wild abstraction; purchased/returned stock alone does not prove this PCR's species-specific capture route or permit bypassing upstream evidence. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_presentation_materials quantity; cp_presentation; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished instance-specific uncertainty; U_presentation_materials requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_materials <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presented_packages` | `presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Protective containers and packaging handed to logistics. Instantiate each package/container transfer T-PL-P with actual material identity, native unit, reusable status and quantity, paired with collect_logistics_package_input. Package mass is not animal reference mass. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_presented_packages quantity; cp_presentation; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished instance-specific uncertainty; U_presented_packages requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presented_packages <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_alternate_products` | `presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Alternate live commercial grades and reusable/retained stock leaving presentation. Instantiate every intended alternate animal species/grade, resale output, retained live stock, and reusable container sent to another actual consumer separately, with measured quantity and physical handoff. Record internal downstream inputs when such outputs remain inside the foreground. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_presentation_alternate_products quantity; cp_presentation; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished instance-specific uncertainty; U_presentation_alternate_products requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_alternate_products <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_waste` | `presentation`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Presentation mortality, rejected packaging and wastewater to treatment. Instantiate actual dead animals, discarded packaging/materials and wastewater separately with measured mass, reuse-versus-waste decision and receiver. No default reject fraction, treatment or disposal pathway. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured actual collect_presentation_waste quantity; cp_presentation; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished instance-specific uncertainty; U_presentation_waste requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_direct_returns` | `presentation`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Presentation direct water returns and individual substance releases. Record directly returned seawater separately from actual pollutant emissions, each with substance/medium, quantity and origin; report no fictitious environmental credit for water return or packaging reuse. For a measured release instance retain foreground_record/collected_record. Any computed actual release instance must instead declare calculated_value/calculated_from_collection, its own formula, factor and source, measured component inputs and uncertainty under this node's protocol; no generic fixed factor is supplied. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_presentation_direct_returns quantity; cp_presentation; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Unestablished instance-specific uncertainty; U_presentation_direct_returns requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_direct_returns <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_logistics_package_input` | `logistics`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Presentation packaging received into logistics. Receive exactly each T-PL-P package/container instance with the same native property, unit, material, reuse state and quantity as collect_presented_packages. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_logistics_package_input quantity; cp_logistics; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_logistics` <br> - Range: Unestablished instance-specific uncertainty; U_logistics_package_input requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_logistics_package_input <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_logistics_operations` | `logistics`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual transport, handling, replenishment, cleaning and shared services. Instantiate every actual pre-receipt leg/service in its native unit using distance, payload, time, empty return and custody evidence; include buyer-operated or buyer-paid movement before physical receipt. Separately record actual replenishment materials, energy, assets and cleaning where not included in a complete service. Exclude duplicated component fuel, assets and releases of complete transport service. Record each actual opening, received or returned managed live-stock input as its own concrete animal instance with species, wild-origin evidence, live state, Mass/kg and count, receipt/custody, inherited burden and a transfer id paired to the prior closing-stock or return output record. It is not a new wild abstraction; purchased/returned stock alone does not prove this PCR's species-specific capture route or permit bypassing upstream evidence. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_logistics_operations quantity; cp_logistics; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_logistics` <br> - Range: Unestablished instance-specific uncertainty; U_logistics_operations requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_logistics_operations <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_buyer_packages` | `logistics`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Packaging at buyer receipt and reusable-container returns. Instantiate each actual packaging custody handoff and intended reusable container return separately with quantity/material/native unit and recipient. Apply use/service-period allocation, loss and replacement evidence; no assumed lifetime or end-of-life beyond this gate. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_buyer_packages quantity; cp_logistics; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_logistics` <br> - Range: Unestablished instance-specific uncertainty; U_buyer_packages requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_buyer_packages <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_logistics_alternate_products` | `logistics`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended live grades, resale outputs and retained stock before receipt. Instantiate every alternate live grade/species, resale, returned live lot or retained stock separately with count, measured mass, condition, actual destination and physical custody event. Do not count the same animal at buyer_live_shrimp and an alternate handoff; open stock remains in the period ledger. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_logistics_alternate_products quantity; cp_logistics; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_logistics` <br> - Range: Unestablished instance-specific uncertainty; U_logistics_alternate_products requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_logistics_alternate_products <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_logistics_waste` | `logistics`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Pre-receipt mortality, damaged materials and wastewater to actual receiver. Instantiate each actual dead animal, discarded packaging/material and wastewater treatment transfer separately with mass, leg/event and receiver. Include failed and no-reference-output movements in period burden allocation; no automatic mortality replacement is zero burden. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Measured actual collect_logistics_waste quantity; cp_logistics; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_logistics` <br> - Range: Unestablished instance-specific uncertainty; U_logistics_waste requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_logistics_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_logistics_direct_returns` | `logistics`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Direct returns and individual emissions before buyer receipt. Instantiate actual organism/water returns and each direct pollutant separately with substance, receiving medium, native unit and fossil/biogenic carbon basis. Do not duplicate service-provider fuel emissions when already included in a complete transport service. For a measured release instance retain foreground_record/collected_record. Any computed actual release instance must instead declare calculated_value/calculated_from_collection, its own formula, factor and source, measured component inputs and uncertainty under this node's protocol; no generic fixed factor is supplied. <br> - Flow property / unit: Actual instance property / actual native unit <br> - Amount rule: Measured actual collect_logistics_direct_returns quantity; cp_logistics; allocated to the declared reference basis <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_logistics` <br> - Range: Unestablished instance-specific uncertainty; U_logistics_direct_returns requires independent observations, not a universal cap or empirical default <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_logistics_direct_returns <br> - Unit: instance native unit <br> - Basis: per 1 kg reference flow; each actual instance retains its native property and unit <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Reject reference animals lacking species/wild/live/ornamental/never-frozen proof, actual selected trip route or first physical local buyer gate. Retain commercial counts and condition independently from kg. | priyashadi-ornamental-trincomalee-2023; un-cpc3-2025 |
| `validate_measurement` | reference and inventory | Require positive accepted same-lot net animal mass A, final A / A = 1 kg, independent water/package/incidentals exclusion, calibrated or traceable mass evidence and native-unit preservation for every instance. No standard shrimp mass. | same-lot-reference-identity |
| `validate_transfers` | process map | Require T-CS-A/W/I, the actual T-SH plus T-HP or evidenced T-SP branch, and T-PL-A/W/P; compare paired quantity/state/unit/owner and every intended alternate handoff, stock and loss. No duplicate final animals or re-abstracted water. | |
| `validate_conditional` | holding | Active requires observed bounded intervention and complete own-node records; bypass requires evidence. Unknown does not equal inactive; missing actual state blocks finalization. | |
| `validate_outputs` | all processes | Enumerate every intended species/grade/resale/stock output separately, distinguish downgrade from waste and incidentals from intended catch, and reconcile mortality, treatment versus direct release and substance/medium/carbon basis. | |
| `validate_attribution` | allocation | Check subdivision, supported causal service demand then documented nonnegative comparable producer-gate net-sales-value fallback (not profit), positive denominator, explicit retained-stock values and exceptional-value justified alternative plus animal-mass sensitivity, all failed periods/stock carryover and shared infrastructure/service life rationale; every event/asset has one owner and no duplicate complete-service constituents. Unsupported attribution stays unresolved. | |
| `validate_coverage` | data package | Missing quantity/identity/holding/receipt/range/period evidence is explicit incomplete coverage. Candidate guidance does not establish verified final exchanges or publication readiness; report performed/skipped checks and gaps. | |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package with process and lifecyclemodel projections; secondary_dataset or background_dataset only after completed evidence/identity/quality review |
| downstream_use | Wild live ornamental Pacific cleaner shrimp supply through the exact first local buyer physical receipt gate |
| allowed_use | Evidence-matched species, route, state, geography, periods, intended outputs and handoff; retain count/size/condition alongside animal-mass reference |
| excluded_use | Whole CPC-leaf substitution; farmed/food/dead/frozen/other-species products; post-receipt operations; health/safety/welfare/legal or avoided-impact claims |
| required_metadata | Required qualifiers; trip/lot/period; native amount/unit; holding state; physical gate; actual process instances; transfer/stock/shared-asset ledger; source and attribution scope |
| required_quality_disclosure | Identity gaps; actual amount versus symbolic uncertainty; same-lot mass sampling; failed periods; conditional-state evidence; service scope; asset/service life and allocation sensitivity; performed/skipped validation |
| update_trigger | Changed route, species/origin/state/gate, input identities, measured amount/sample evidence, holding/presentation practice, output set, shared asset service or reporting-period stock treatment |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| priyashadi-ornamental-trincomalee-2023 | literature | Priyashadi, Deepananda and Jayasinghe (2023), Davao Research Journal 14(2):103–115, doi:10.59120/drj.v14i2.117; https://davaoresearchjournal.ph/index.php/main/article/download/117/117/419 ; methods/results pp104–107 and 110–111 | Qualitative Trincomalee wild reef ornamental collection, surveyed community gear and boat alternatives, actual Lysmata amboinensis commercial catch and local-buyer/exporter chain; not species-specific gear assignment, numerical defaults or health instructions |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes (30 June 2025), printed p53; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Wild live ornamental aquatic animal scope and exclusions for fish/farmed origin; narrower crustacean subset |
| same-lot-reference-identity | method_factor | Same-lot normalization identity: positive accepted net animal mass A divided by itself, with animal-water-package separation and physical receipt records | Final 1 kg reference identity only; no empirical flow rates, universal animal mass or operating ranges |
