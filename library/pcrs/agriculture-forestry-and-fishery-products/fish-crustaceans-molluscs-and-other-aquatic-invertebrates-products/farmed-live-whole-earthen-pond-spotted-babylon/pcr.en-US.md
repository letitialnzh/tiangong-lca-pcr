---
pcr_id: pcr.farmed-live-whole-earthen-pond-spotted-babylon
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed live whole earthen-pond spotted Babylon

## 1. Scope and Applicability

This PCR defines foreground data production for Thai sand-bottom seawater earthen-pond monoculture of spotted Babylon, Babylonia areolata, grown from purchased hatchery juveniles and fed actual fresh low-value fish, then trap-harvested and delivered live and whole to the first physical recipient of the farmer's product. The Petchaburi research pilot documents this eligible route, including pumping, aeration, initial juvenile size selection and traps for sampling and harvesting. It explicitly reports no growout grading. It does not demonstrate present universal commercial practice, a current profitable operation, or the handling of any particular delivered lot. Actual postharvest sorting, live holding and presentation must be evidenced by the foreground producer. No pilot FCR, yield, survival, dimensions, size, crop duration or financial default is adopted because reported body/table values are inconsistent and are not foreground records.

Exclude wild collection, other species, polyculture, recirculating or flow-through concrete/canvas-tank growout, shell removal, cooking, freezing, edible-meat references and operations after first physical receipt. An actual onfarm nursery must be declared within receipt-to-stocking responsibility; a cost-table nursery asset is not evidence that it occurred. Live holding is a recorded intervention only; live market context does not imply washing, immersion, depuration, cooling temperature or a safe shelf life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-earthen-pond-spotted-babylon |
| classification_refs | cpc:3.0:04492 |
| covered_products | Live whole Babylonia areolata including its native shell from the declared Thai sand-bottom seawater earthen-pond monoculture route |
| excluded_products | Wild snails; other species; abalone, bivalves and cephalopods; other culture systems; polyculture; processed, shell-removed or dead final references |
| representative_product | Live whole farmed spotted Babylon at first physical recipient of the farmer's product acceptance |
| production_route | Purchased hatchery juvenile receipt and initial selection; pond preparation and managed growout with fresh fish feed; trap harvest; actual conditional postharvest sorting and live holding; actual presentation and physical delivery |
| market_state | Live whole animals with natural shell; the historical FAO live channel supports this eligible state, not present sales volumes or a specific farm gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Live whole Babylonia areolata accepted at first physical recipient of the farmer's product |
| How much | 1 kg accepted net whole-animal mass, including natural shell and excluding free water, sand, container tare and rejects |
| How well | Declared species, Thai pond origin, live state, whole natural-shell condition and actual grade/destination accepted by the physical recipient; no invented size or quality threshold |
| How long or cycle | Identified crop cohort and complete receipt-to-acceptance period; link pond establishment, between-crop preparation, growout, harvest, holding, delivery, failures and asset service periods |
| reference_flow_link | `accepted_live_whole` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Live whole Babylonia areolata accepted at first physical recipient of the farmer's product |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Babylonia areolata identity; Thai site and pond id; sand-bottom seawater earthen-pond monoculture; purchased hatchery seed and actual receipt; fresh fish feed identity/state; crop and period; trap harvest; actual sorting/holding/presentation branch; live whole natural-shell condition; accepted net mass and tare exclusions; physical recipient and acceptance date; upstream seed/feed and transport coverage; shared-asset attribution; land history and unresolved data gaps |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_mass` | reference product | Mass | kg | Measure A as the accepted net live whole-animal mass for the same lot using cp_presentation_delivery; exclude free water, sand, boxes and refused animals, retain native shell. A must be positive. |
| `whole_mass_basis` | all inventory rows | Actual row property | native row unit | Normalize each attributed physical quantity to per 1 kg reference flow using the same accepted mass A. Internal whole-animal transfers retain their actual mass and cannot be set to 1 kg. |
| `count_conversion` | seed_received, standing_stock, harvest_stock_in | Mass | kg | Retain count, sampled whole-animal mass, sample design and uncertainty for any count-to-mass conversion; no literature default count/kg, shell-to-meat conversion or species substitution. |
| `native_unit_basis` | all inventory rows | Actual instance property | native instance unit | Retain original electricity kWh, fuel mass or supported density conversion, water m3, transport t km and service/land units. Pollutant species, chemical basis, medium and any conversion must be explicit; kg N is not kg ammonia and kg P is not kg phosphate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased hatchery juveniles physically received at the identified Thai farm, with actual receipt quantity, supplier and transport history |
| starting_condition_role | Foreground collection anchor, not a cut-off of hatchery, nursery or seed-delivery burdens |
| product_classification_scope | This semantic species, culture route, live whole state and first physical-recipient gate are narrower than CPC 3.0 other farmed molluscs |
| recursive_input_rule | Same-category seed or returned live lots are separate identified inputs with quantity, origin, prior burdens and period linkage; no self-loop to the final reference or automatic burden-free seed |
| upstream_dataset_requirement | Link actual received seed, fish feed, bait, utilities, materials, assets and services to suitable upstream datasets or separately collected primary activity; retain gaps explicitly rather than omitting burden |
| disclosure | Declare site, cohort, operations and bypasses, historical-pilot applicability, actual nursery responsibility, upstream coverage, failure events, land history, receiving media, asset/service ownership and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | pond_growout, trap_harvest | Preserve earthen-pond monoculture managed-production responsibility separately from removal of standing stock by traps. Harvest output is collected whole live animals, not pond biomass, edible meat or water-filled gross catch. | naca-babylon-pond-2005 |
| `boundary_actual_nodes` | postharvest_sort, live_hold, presentation_delivery | Sorting activates only for actual grade/destination separation; live holding only for an evidenced bounded intervention with before/after usable live states. Presentation declares the actual product/container interface. Record one actual branch and each physical handoff; no mandatory growout grading, wash or depuration. | naca-babylon-pond-2005; fao-fish-feed-2009 |
| `boundary_gate` | presentation_delivery | Include all physical delivery and protection until first physical acceptance regardless payer or ownership; deduplicate the actual provider service scope. Record recipient, place, date and acceptance; remote invoicing, export or restaurant retail does not define this gate. | |
| `boundary_management` | pond_growout | Include pond preparation, sand/fence/pump/blower provision, water and feed management, actual seed receipt including subsequent pre-stocking mortality, any actual onfarm nursery, maintenance, replacement, losses and failed or terminated crops. | naca-babylon-pond-2005 |
| `boundary_fates` | all processes | Enumerate intended outputs, retained or returned live stock, losses and actual treatment/release fates. Separate technosphere waste transfer, direct carrier-water balance and substance-specific elementary releases; no automatic waste label, zero burden or credit. | |
| `boundary_period_assets` | all processes | Record establishment and land history, preparation, crop, harvest, handling and delivery periods; list shared pond/reservoir/pump/blower, traps, storage and vehicles, every consuming node/pond and service period. One owner allocates shared burdens, including failures; no duplicate provider burdens. | naca-babylon-pond-2005 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pond_growout | Pond preparation, seed receipt and managed growout | required | | Managed biological production; crop-batch mode with preparation, receipt-to-stocking, growout and failure periods | Actual live standing stock transferred to harvest |
| trap_harvest | Trap harvest from pond standing stock | required | | Independent removal and collected-output responsibility; indexed harvest events | Actual collected live whole snails |
| postharvest_sort | Actual postharvest grade/destination sorting | conditional | Actual sorting creates at least two declared grade or destination states | Distinct target, alternate grade, returned stock and rejected/waste handoffs; no growout grading assumed | Actual target and other output masses |
| live_hold | Actual bounded live holding intervention | conditional | Actual intervention preserves a usable live lot before presentation and its before/after state, duty and owner are evidenced | Live-state preservation with actual losses and bypass if absent | Actual surviving live whole output |
| presentation_delivery | Protective presentation and physical first-recipient delivery | required | | Presentation records actual container or unpackaged interface; separately indexed delivery duty through acceptance | 1 kg accepted live whole reference output |

Crop lots are batch-indexed. Preparation, cleanout, water exchange, feed storage, nursery where actual, sampling, harvest runs and asset replacement events have distinct event/period ids. Sampling animals returned alive remain in stock; removed samples have an explicit destination. There is no fixed common numeric cap for any material, fuel, service, species or pollutant instance.

Each applicable Section 8 collection obligation creates zero, one or multiple actual exchanges only from records, preserving its stated direction, flow type, substance/material/service identity, native property and unit. Where different actual properties occur, instantiate them separately with verified support identities. For each row and instance i, U_row,i is a quantity in its declared native unit per 1 kg reference flow. It is an unresolved evidence need, not an empirical upper bound, default value or hard admissibility limit. Establish independent bounds from that row's records and uncertainty before final dataset use. A zero amount requires evidence of absence or an inactive node; missing evidence is not zero. Only the same-lot accepted output has the exact identity A/A = 1.

### Process: Pond preparation, seed receipt and managed growout (`pond_growout`)

#### Inputs

##### Product flows

###### Purchased live hatchery juveniles received (`seed_received`)

Receive and weigh the entire supplier lot, including juveniles subsequently lost before stocking. Count and sampled whole-animal mass must reconcile; stocked survivors are a separate management field. Upstream hatchery/nursery and seed transport follow actual received quantity.

- Selected flow: Live Babylonia areolata hatchery juveniles at farm receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond_growout`
- Sources: `naca-babylon-pond-2005`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_seed_received,i
  - Unit: kg
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ice actually purchased for feed storage (`feed_storage_ice`)

Record only actual purchased ice mass for feed storage. This is not ice for the live snail reference. If ice is produced onfarm, do not report purchased ice: attribute its electricity, actual supplied/direct-source water, assets and releases to their corresponding growout cards, with one production-duty owner and no duplicate service burden.

- Selected flow: Ice used to store fresh fish feed at the farm
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond_growout`
- Sources: `naca-babylon-pond-2005`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_feed_storage_ice,i
  - Unit: kg
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Metered electricity for pond duty (`growout_electricity`)

Meter or allocate measured electricity by equipment duty and crop period. Identify supplier mix and losses; separate purchased ice or full service energy from direct farm use.

- Selected flow: Electricity supplied to pond aeration, pumping, feed storage and actual onfarm ice production
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond_growout`
- Sources: `naca-babylon-pond-2005`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_electricity,i
  - Unit: kWh
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct seawater abstraction (`seawater_abstraction`)

Meter intake, replacement and exchange water by source and date. Distinguish direct abstraction from any supplied technosphere water; include pumping energy separately and no default exchange rate.

- Selected flow: Seawater abstracted from the actual canal source
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond_growout`
- Sources: `naca-babylon-pond-2005`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_seawater_abstraction,i
  - Unit: m3
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Live standing stock handed to trap harvest (`standing_stock`)

Transfer actual whole-animal stock mass or a disclosed sampling estimate to harvest with pond/crop/transfer id. Distinguish standing stock, trap collection and accepted mass; this internal quantity is never fixed to the final reference.

- Selected flow: Live whole Babylonia areolata standing stock in the pond at harvest responsibility transfer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond_growout`
- Sources: `naca-babylon-pond-2005`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_standing_stock,i
  - Unit: kg
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual pond wastewater sent to treatment (`pond_wastewater_treatment`)

Record only actual treatment-bound water volume, composition, solids/nutrient basis and handler. Reconcile carrier volume with pond water balance; separate treatment transfers from direct outfall and avoid repeated treatment releases.

- Selected flow: Pond wastewater transferred to an identified treatment service
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond_growout`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pond_wastewater_treatment,i
  - Unit: m3
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Trap harvest (`trap_harvest`)

#### Inputs

##### Product flows

###### Standing-stock transfer received for harvest (`harvest_stock_in`)

Pair with standing_stock using the same transfer id and actual stock mass; retain uncertainty rather than setting internal feed to 1 kg.

- Selected flow: Live whole Babylonia areolata standing stock in the pond at harvest responsibility transfer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_trap_harvest.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trap_harvest`
- Sources: `naca-babylon-pond-2005`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_stock_in,i
  - Unit: kg
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Trap-collected live whole snails (`collected_live_snails`)

Weigh collected whole animals excluding free seawater, sand and traps. Transfer to sorting if active, otherwise live holding or presentation using actual transfer ids. Record uncollected survivors separately from dead or escaped stock.

- Selected flow: Live whole Babylonia areolata collected from earthen ponds
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_trap_harvest.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trap_harvest`
- Sources: `naca-babylon-pond-2005`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collected_live_snails,i
  - Unit: kg
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Actual postharvest sorting (`postharvest_sort`)

#### Inputs

##### Product flows

###### Collected live snails received for sorting (`sort_snails_in`)

Receive the actual collected transfer mass. Activate only if sorting produces at least two declared grade/destination states; the pilot's initial seed selection is not growout grading or proof of this postharvest step.

- Selected flow: Live whole Babylonia areolata collected from earthen ponds
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_postharvest_sort.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_sort`
- Sources: `naca-babylon-pond-2005`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_snails_in,i
  - Unit: kg
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Target live whole grade transferred onward (`sorted_target`)

Transfer target grade to live hold or presentation with measured quantity, grade declaration and transfer id, not a fixed final mass.

- Selected flow: Actual target live whole Babylonia areolata grade after sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_postharvest_sort.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_sort`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorted_target,i
  - Unit: kg
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual sorting wastewater sent to treatment (`sort_wastewater_treatment`)

Record actual treatment-bound rinse/other water volume and composition by handler; keep direct returns separate and do not repeat provider releases.

- Selected flow: Sorting wastewater transferred to an identified treatment service
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_postharvest_sort.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_sort`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_wastewater_treatment,i
  - Unit: m3
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Actual live holding (`live_hold`)

#### Inputs

##### Product flows

###### Live whole lot entering actual holding (`hold_snails_in`)

Receive sort target or unsorted harvest lot with actual transfer mass and id; identify actual live condition, holding start/end and responsible operator.

- Selected flow: Actual live whole Babylonia areolata lot before holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_live_hold.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_hold`
- Sources: `fao-fish-feed-2009`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_hold_snails_in,i
  - Unit: kg
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Live whole lot released from holding (`held_live_snails`)

Weigh surviving usable live animals and transfer to presentation; reconcile condition, mass change, mortality, refusals and handoff against entry lot.

- Selected flow: Actual live whole Babylonia areolata lot after holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_live_hold.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_hold`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_held_live_snails,i
  - Unit: kg
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual holding wastewater sent to treatment (`hold_wastewater_treatment`)

Record actual treatment transfer volume and composition by handler; no direct outfall or repeated provider emissions in this row.

- Selected flow: Holding wastewater transferred to an identified treatment service
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_live_hold.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_hold`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_hold_wastewater_treatment,i
  - Unit: m3
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Presentation and physical first-recipient delivery (`presentation_delivery`)

#### Inputs

##### Product flows

###### Live whole lot entering presentation (`presentation_snails_in`)

Receive the actual held, sorted or directly harvested lot using one recorded branch, quantity and transfer id. No duplicate input for bypassed operations.

- Selected flow: Actual live whole Babylonia areolata lot before presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_presentation_delivery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation_delivery`
- Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_snails_in,i
  - Unit: kg
  - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted live whole spotted Babylon at first physical recipient of the farmer's product (`accepted_live_whole`)

This is the actual reference output. A is accepted net whole-animal mass including native shell, excluding free water, sand, boxes and rejected animals. Reconcile physical receipt, living condition, species/origin and same-lot weighing; never edible-meat equivalent.

- Selected flow: Live whole Babylonia areolata accepted at first physical recipient of the farmer's product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_presentation_delivery`
- Sources: `same-lot-mass-identity`
- Range: Same-lot accepted mass identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `same-lot-mass-identity`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_output_set` | all processes | Enumerate target live snails, alternate intended grades, any other independently intended products, returned/retained live stock, rejects and wastes with their handoffs. Monoculture does not guarantee one sale grade. A material becomes a co-product only with actual intended use/recipient evidence; mortality, sludge, bycatch or returnable packaging is not automatically a valuable product. | |
| `allocate_precedence` | all processes | First subdivide measured duties by actual lot/node/output. For residual joint burdens of comparable whole live grades, use measured whole-animal mass at the common separation gate when it represents the causal physical relationship; document rationale. If output functions differ and a causal physical relation is unavailable, use contemporaneous actual revenue shares with currency/date and price sensitivity. Disclose alternatives and sensitivity; do not apply universal economic shares, substitution credits or low-value-feed zero burden. | fao-fish-feed-2009 |
| `allocate_periods` | pond_growout, trap_harvest, live_hold, presentation_delivery | Link establishment, preparation, successful/failed crops, partial harvests, carry-over stock, holding, delivery and replacement/termination events to real periods. Record opening/closing stock and remaining service capacity. Attribute failure and idle duty to the service/output system that caused it; no selective deletion of unsuccessful periods or arbitrary annual crop count. | |
| `allocate_shared` | all processes | Maintain one asset/service ledger for pond/reservoir/pump/blower, feed cold storage, traps, sorting/holding facilities and vehicles. Enumerate all nodes, ponds, crops and periods served. Submeter first, otherwise use evidenced causal duty such as metered volume and head, operating hours and load, area-time or payload-distance; record denominator, shares, rationale and sensitivity. Asset provision/replacement is apportioned over evidenced service capacity without universal lifetime. Shares reconcile once to the complete shared burden. | |
| `allocate_no_duplicate` | all processes | Paired internal transfers share one transfer id and actual amount; do not credit/charge their upstream burden twice. Complete purchased services include provider fuel/assets/releases; use either the complete service or its foreground component inventory. Count feed drawn for bait, animal lots and returnable containers once. Keep rejected/returned lot duties until actual fate, with no invented avoided impact. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pond_growout | pond_growout | Every growout row and concrete instance | Receipt, crop, meter, stock, waste, land, asset and environmental records | site; pond; cohort; dates; row and instance; supplier/species/state; receipt kg/count; pre-stocking mortality; stocking survivors; feed/bait-stock ledger; water in/out/storage; electricity; fuel; material/replacement mass; land state/area/time; asset consumers/service periods; sample design; pollutant substance/basis/medium/concentration and flow; waste handler; failures; transfer ids; A | Weigh receipt/feed/waste on calibrated scales; reconcile invoices, count samples and stock; meter water/energy or retain evidenced duty allocation; trace asset/land records; sample representative inflow/outflow and retain laboratory basis/limits or justified model | Actual instance kg, m3, kWh, land/service native units | Each receipt, feed/event and meter period; complete crop and failure closeout | Establishment and previous land history where relevant; receipt, preparation, growout, failure, maintenance and service periods | Identified Thai ponds and shared farm assets, including other consumers | per 1 kg reference flow | Scale/meter calibration, invoices, logs, laboratory/model method, non-detects, ownership/service ledger, stock and water reconciliation, uncertainty and missingness |
| cp_trap_harvest | trap_harvest | Every harvest row and concrete instance | Trap-event, weighing, bait, duty and fate records | pond; cohort; event/date; incoming stock estimate; transfer ids; collected live kg; bait identity/mass/source; trap/sampling duty; incidental outputs; rejected/dead/uncollected/escaped stock; waste and release fate; recipients; A | Weigh actual collected animals net of free water/sand/traps; reconcile stock sampling with collection; measure bait and owned/purchased harvest duty; record all removal and retained/returned fates | Actual instance kg and native equipment/service units | Each sampling/harvest event and final stock closure | All harvest events attributable to selected crop including failed attempts | Identified pond and harvest operator | per 1 kg reference flow | Calibration, event log, sample uncertainty, bait ledger, service specification and complete fate reconciliation |
| cp_postharvest_sort | postharvest_sort | Every sorting row and concrete instance | Actual grade/destination separation and support records | activation evidence; incoming transfer; grade labels; target/alternate/returned/rejected kg; recipient/period; material/energy/supplied and direct water where actual; intake/return/treatment volumes; substance/basis/medium/concentration; waste fate; A | Observe actual separation and weigh every output state on calibrated scales; trace handoff, support duty, any real rinse, direct water balance, treatment and substance-specific releases; record bypass when absent | Actual instance kg and native utility/service units | Each actual sorting event | Harvest-to-next-handoff period for selected lots | Identified sorting operator and location | per 1 kg reference flow | Scale records, grade/destination ledger, activation/bypass evidence, input-output reconciliation and uncertainty |
| cp_live_hold | live_hold | Every holding row and concrete instance | Actual live-state intervention, meter and fate records | activation; incoming lot kg/live condition; start/end; operator; actual technique; water/energy/material duty; surviving kg; mortality/refusal; waste/treatment; substance/basis/medium; transfer ids; A | Observe and document bounded intervention; weigh entering and surviving animals; meter actual support and direct water; assay or model actual releases with method; keep bypass and failed intervention records | Actual instance kg, m3, kWh and native service units | Each holding event and meter/sample period | Actual lot entry to exit including mortality and failures | Identified holding operator/location | per 1 kg reference flow | Live-condition and time logs, calibrated weighing/meters, laboratory/model basis, duty ownership, water/mass/fate reconciliation |
| cp_presentation_delivery | presentation_delivery | Every presentation/delivery row and accepted reference | Tare, dispatch, route, physical receipt and acceptance records | source transfer; lot/species/origin; actual package/reuse/owner; gross kg; free-water/sand/tare/reject kg; accepted net live whole mass A; physical recipient/place/date; live condition; actual payload/distance/load/empty return; support duty; refusals and fates; shared service periods | Use calibrated same-lot net whole-animal weighing and physical acceptance records; reconcile dispatch, tare and live condition; inspect actual presentation, packaging returns and pre-acceptance physical route regardless payer or ownership; retain support and release evidence | kg for A and materials; t km for transport; other actual native units | Each dispatch, physical receipt, refusal and container return; meter/service period | Presentation through first physical acceptance and attributable pre-receipt failures | Identified farm, delivery operator and first physical recipient | per 1 kg reference flow | Calibration, paired dispatch/receipt, live-state evidence, tare/contaminant subtraction, route records, ownership/return ledger and complete refusal/mortality accounting |

Each node protocol aggregates to the same reference: first attribute the measured native quantity once by the stated output, period and shared-duty rules, then divide by the same positive accepted net mass A. Pair actual internal transfers without fixing them to 1 kg; the accepted_live_whole output alone gives A/A = 1. Preserve alternate output shares, water and fate reconciliation, and container returns in the underlying node records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| gate_mass_identity | accepted_live_whole | A = accepted same-lot net live whole-animal kg; A/A = 1 kg per 1 kg reference flow | accepted gross mass; excluded free water, sand, tare and refusals; cp_presentation_delivery | accepted reference mass identity | same-lot-mass-identity |
| instance_attribution | all inventory rows | Each actual instance quantity is attributed once to its node, output and period using recorded shares, then divided by the same positive A; retain native numerator units and uncertainty | node protocol; actual quantities; shared/output/period ledger; A | per 1 kg reference flow instance quantities | |
| stock_fate_reconciliation | pond_growout, trap_harvest, postharvest_sort, live_hold, presentation_delivery | Reconcile opening stock, actual received/transferred animals, surviving closing stock, intended outputs, mortalities and other removals on compatible measured count/mass bases; growth is separately evidenced and not an assumed conservation of wet mass | each node protocol; transfer ids; count and whole-mass samples; growth/stock/fate records | complete stock and fate reconciliation with uncertainty | |
| pollutant_water_basis | collect_pond_pollutant_releases, collect_sort_pollutant_releases, collect_hold_environment | Use actual concentration and corresponding water volume/time with species/basis conversion evidence and inlet/background, storage or treatment terms as applicable; report direct release and treatment transfer separately | node protocol; paired samples; measured water; laboratory basis; justified model | named substance/medium release inventory and uncertainty | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity_gate | accepted_live_whole | Species, pond route, whole native shell and actual live state must match physical recipient acceptance; a literature live channel or invoice cannot prove a delivered lot | Seed/origin records; same-lot physical receipt; weighing and live-state evidence |
| dq_complete_periods | all processes | Complete preparation-to-acceptance activity and failure/idle periods, land history, shared consumer/service denominators, replacement and stock terms; no selective successful-crop data | Node/event ledger, land/assets and failure records, complete period boundaries |
| dq_measurement | all inventory rows | Preserve native units and each concrete instance's property/support identity, calibration, sample basis, detection limits, pollutant medium and conversion uncertainty | Calibrations; assays/model; raw units; density/count and species conversion evidence |
| dq_ranges | all inventory rows | Replace each independent symbolic U_row,i with reviewed record-backed bounds or retain the quantity gap; no common empirical cap, invented pilot defaults, automatic zero or publication-critical provisional limit | Row/instance range evidence and missingness report |
| dq_sources | all processes | Historical pilot supports an eligible route only; do not reuse conflicting numerical or economic values as present production defaults. Feed fish and bait retain origin/allocation evidence | Foreground applicability comparison and upstream source/burden records |
| dq_bindings | all inventory rows | Actual exchanges require verified concrete flow/property/unit identities. Collection-scope names do not supply a UUID or make a final dataset complete | Concrete instance detail and support verification, unresolved identity register |
| `collect_fresh_fish_feed` | `pond_growout`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual fresh fish feed by species and supplied state. Record each fish species, whole fish or frame state, purchased mass, storage loss and delivered ration independently. Identify fishing/farming and processing origin and burden allocation; low value or the word trash does not establish zero-burden waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Sources: `naca-babylon-pond-2005`; `fao-fish-feed-2009` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_fresh_fish_feed,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_fuels` | `pond_growout`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Fuel or lubricant consumed by identified pond equipment. Instantiate each fuel or lubricant separately with formulation, biogenic fraction and conversion evidence for any volume records; link engine operation and maintenance to crop periods. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Sources: `naca-babylon-pond-2005` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_fuels,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_materials_assets` | `pond_growout`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pond, reservoir, sand, fence, pipe, pump and blower material or asset provision. Instantiate material and replacement masses separately. Record existing versus new assets, construction, maintenance, service life evidence, pond area and land history. Shared pump/reservoir/blower ownership apportions all consuming ponds and periods, including failed crops. Include actual feed-storage/ice-production assets when operated here and allocate their shared duty once. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Sources: `naca-babylon-pond-2005` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_materials_assets,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_management_services` | `pond_growout`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual purchased pond preparation, seed transport, nursery or management service. Use separate concrete service instances and native units. Declare any actual onfarm nursery responsibility with receipt-to-stocking inputs, mortality and outputs. No nursery is inferred merely from investment tables. A purchased complete service excludes repeated provider fuel, assets and releases. <br> - Flow property / unit: Actual service property / native service unit <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Sources: `naca-babylon-pond-2005` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_management_services,i <br> - Unit: native service unit <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_supplied_water` | `pond_growout`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual supplied water by source, quality and intended farm use. Record actual purchased/supplied utility water separately from environmental intake, including actual onfarm ice production where present. Identify freshwater/seawater quality, supplier and treatment; do not infer seawater ice or repeat provider pumping/treatment. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_supplied_water,i <br> - Unit: m3 <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_land_use` | `pond_growout`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual land occupation or transformation by land state. Instantiate actual occupation area-time and any transformation area separately, with previous land state, establishment date, evidence and attribution over real service periods. Existing ponds do not erase historical transformation; disclose unavailable history and avoid invented factors. <br> - Flow property / unit: Actual land property / native land unit <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_land_use,i <br> - Unit: native land unit <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_other_direct_water` | `pond_growout`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual water abstracted directly from a separately identified utility source. Only actual direct environmental abstraction for management, feed storage or onfarm ice duty from an evidenced source. Identify source and quantity; canal seawater already in seawater_abstraction is excluded from this collection obligation. No water demand or source is assumed. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_other_direct_water,i <br> - Unit: m3 <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_other_products` | `pond_growout`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual separately sold biological or recovered-material output. Enumerate each intended output and physical recipient, quality and burden attribution. Do not invent sea bass or polyculture outputs from inconsistent economic footnotes; an actual polyculture route is outside this PCR. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Sources: `naca-babylon-pond-2005` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_other_products,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_waste` | `pond_growout`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual removed pond waste by composition and treatment destination. Instantiate pre-stocking and growout mortalities, recovered feed leftovers, sludge, damaged net/plastic, used oil and other removed wastes separately. Record wet/dry basis, water content, handler and treatment; retained sediment is not simultaneously a waste transfer and release. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Sources: `naca-babylon-pond-2005` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_waste,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_water_return` | `pond_growout`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Water returned directly to the identified receiving water. Record direct outfall volume and medium separately from evaporation, seepage and storage change. Treatment-bound water belongs to pond_wastewater_treatment. Carrier water alone is not pollutant mass or an avoided impact credit. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Sources: `naca-babylon-pond-2005` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_water_return,i <br> - Unit: m3 <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_pollutant_releases` | `pond_growout`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual named pollutant released to a declared water, soil or air compartment. Create each substance/medium instance from actual measurement or a justified model: nitrogen species and as-N basis, phosphorus species and as-P basis, organic substance, sediment or metal as actually reported. Pair inflow/outflow loads and stock terms; do not equate total ammonia-N with ammonia mass, or label total carrier water wastewater pollution. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Sources: `naca-babylon-pond-2005` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_pollutant_releases,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_air_releases` | `pond_growout`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual named gas or particle released to air by pond duty. Separate fossil CO2 and biogenic CO2 when actual, other gases and particle sizes with factor/measurement and receiving air compartment. Include biological pond gas only with site method evidence. Generic unknown CO2 cannot inherit a fossil-only UUID; no blanket zero or speculative factor. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_pond_growout. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond_growout` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_air_releases,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_bait` | `trap_harvest`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual bait placed in harvest traps. Record bait identity, actual purchased or transferred quantity and leftovers separately from growout feed. If the same feed stock is drawn, reconcile one stock ledger and attribute consumption once; no universal bait ratio. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_trap_harvest. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_trap_harvest` <br> - Sources: `naca-babylon-pond-2005` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_bait,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_services_assets` | `trap_harvest`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual trap material provision or complete harvest service. Instantiate traps/materials, replacements, energy and complete purchased services with actual native properties. Keep sampling versus harvest duty and shared periods separate; owned equipment emissions belong in collect_harvest_releases, while complete services carry their own upstream burdens. <br> - Flow property / unit: Actual instance property / native instance unit <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_trap_harvest. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_trap_harvest` <br> - Sources: `naca-babylon-pond-2005` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_services_assets,i <br> - Unit: native instance unit <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_other_intended` | `trap_harvest`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual independently marketed incidental harvest output. Enumerate actual intended output identity, handoff and attribution; no generic bycatch product or sale assumption. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_trap_harvest. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_trap_harvest` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_other_intended,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_reject_waste` | `trap_harvest`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual harvest waste by composition and destination. Record damaged/dead animals, recovered bait, sand and non-target material actually removed for disposal; returned live organisms, escaped animals and material retained in pond are separate fate records, not fictitious transferred wastes. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_trap_harvest. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_trap_harvest` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_reject_waste,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_releases` | `trap_harvest`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual named harvest pollutant and receiving compartment. Instantiate actual direct fuel emissions, fossil/biogenic CO2 separately, gases/particles, spills and any measured release by substance/medium; record lost gear and escape/habitat observations without invented elementary factors or credits. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_trap_harvest. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_trap_harvest` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_releases,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_support` | `postharvest_sort`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting material, utility or complete service. Record actual sorting equipment/material, electricity, supplied water and complete services, with origin and ownership. Direct environmental water belongs to collect_sort_direct_water and actual outputs to separate return/treatment/pollutant cards. No wash, depuration or prescribed size thresholds are assumed. <br> - Flow property / unit: Actual instance property / native instance unit <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_postharvest_sort. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_postharvest_sort` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_support,i <br> - Unit: native instance unit <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_direct_water` | `postharvest_sort`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Water abstracted directly for actual sorting intervention by source. Conditional on actual direct environmental intake during observed sorting/rinse. Record source, meter and period; supplied water remains collect_sort_support. No wash is presumed. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_postharvest_sort. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_postharvest_sort` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_direct_water,i <br> - Unit: m3 <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sorted_other_grades` | `postharvest_sort`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual independently marketed or retained live whole snail grade. Instantiate each downgraded or alternate grade and actual recipient or carry-over stock. A live returned growout lot is an internal transfer with reopening period and burdens, not a second final reference. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_postharvest_sort. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_postharvest_sort` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sorted_other_grades,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_rejects` | `postharvest_sort`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual postharvest sorting waste by composition and destination. Separate dead/rejected unsaleable animals, sand, debris and package waste; any actual treatment-bound rinse water belongs only to sort_wastewater_treatment. Document each destination and no automatic credit. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_postharvest_sort. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_postharvest_sort` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_rejects,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_water_return` | `postharvest_sort`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Water returned directly from actual sorting to a declared water body. Measure actual direct return volume and receiving water separately from storage, evaporation and treatment transfer; carrier water is not pollutant mass. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_postharvest_sort. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_postharvest_sort` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_water_return,i <br> - Unit: m3 <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_pollutant_releases` | `postharvest_sort`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual named sorting pollutant and receiving compartment. Conditional on actual measured/modelled direct releases: establish substance, nutrient/species basis, medium, volume and method. Include actual direct combustion gases with fossil/biogenic CO2 separated; no generic organic/water UUID or automatic zero. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_postharvest_sort. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_postharvest_sort` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_pollutant_releases,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_support` | `live_hold`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual live holding material, supplied water, energy or complete service. Only record an observed bounded intervention with actual supplied water/aeration/cooling/supplies where used, native quantities and ownership. Do not prescribe immersion, temperature, depuration, disinfection or shelf life. Direct water input uses collect_hold_direct_water; actual returns, treatment and pollutants use their separate output cards. <br> - Flow property / unit: Actual instance property / native instance unit <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_live_hold. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_live_hold` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_hold_support,i <br> - Unit: native instance unit <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_direct_water` | `live_hold`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Water abstracted directly for actual live holding by source. Record only actual direct environmental water intake by source, meter and period; supplied water remains collect_hold_support. No water demand is inferred from the live market state. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_live_hold. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_live_hold` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_hold_direct_water,i <br> - Unit: m3 <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_other_live_products` | `live_hold`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual separately intended alternate live whole lot released from holding. Enumerate each actual alternate live grade/destination and physical handoff to presentation, another recipient or carry-over stock. Returned viable lots remain stock with actual further duty; do not silently classify them as waste or duplicate held_live_snails or the final accepted output. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_live_hold. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_live_hold` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_hold_other_live_products,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_waste` | `live_hold`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual live holding waste by composition and treatment destination. Record dead or rejected animals and spent solid materials separately by destination; treatment-bound water belongs only to hold_wastewater_treatment. No mortality is silently removed from accepted-product normalization. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_live_hold. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_live_hold` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_hold_waste,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_water_return` | `live_hold`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Water returned directly from actual live holding to a declared water body. Measure actual return volume, receiving medium and storage/evaporation terms, keeping named pollutant masses in collect_hold_environment and treatment transfers separate. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_live_hold. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_live_hold` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_hold_water_return,i <br> - Unit: m3 <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_environment` | `live_hold`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual named holding release to declared receiving medium. Instantiate actual pollutant substance/medium, fossil and biogenic CO2, and biological releases only with method evidence. Direct water intake and return have their own volume cards; preserve the water balance, never a virtual rinse. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_live_hold. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_live_hold` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_hold_environment,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_materials` | `presentation_delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual container, liner, restraint, label or reusable presentation asset. Instantiate actual materials and tare; record single-use versus returnable ownership, actual reuse cycles, washing/replacement duty and recipient/end-of-use handoff. Unpackaged transfer is explicit zero packaging activity, not zero upstream product burden. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_presentation_delivery. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation_delivery` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_materials,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_service` | `presentation_delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual complete pre-acceptance transport or delivery service. Record actual complete purchased transport duty, payload, route, distance, load factor, empty return and live protection through first physical receipt, regardless payer or owner. Delivery is separate from packaging. Self-operated fuel/assets belong to collect_delivery_owned_inputs with releases in collect_delivery_releases. Invoice location or payment never ends physical responsibility; deduplicate by documented service scope. <br> - Flow property / unit: Transport service / t km <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_presentation_delivery. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation_delivery` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_service,i <br> - Unit: t km <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_owned_inputs` | `presentation_delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual self-operated pre-acceptance fuel, asset, utility or protection input. Instantiate actual fuels/lubricants by mass, electricity by energy, vehicle/container material or asset service, and protection supplies separately in native units through physical acceptance regardless payer/owner. Purchased complete collect_delivery_service excludes the same provider component inputs; direct releases use collect_delivery_releases. <br> - Flow property / unit: Actual instance property / native instance unit <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_presentation_delivery. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation_delivery` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_owned_inputs,i <br> - Unit: native instance unit <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_other_products` | `presentation_delivery`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual separately accepted alternate live lot or recoverable package product. Enumerate each separately intended output, recipient and attribution. Returned reusable packaging is an asset return, not automatically a saleable co-product; alternate lots are not duplicated as accepted_live_whole. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_presentation_delivery. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation_delivery` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_other_products,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_rejects` | `presentation_delivery`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pre-receipt delivery waste by composition and destination. Record mortality, refusals, material damage and waste fates before reference acceptance; returned live lots remain stock with actual onward burden. Do not label all refusals waste or allocate their burdens away by assumption. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_presentation_delivery. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation_delivery` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_rejects,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_releases` | `presentation_delivery`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual named pre-receipt transport or presentation pollutant and medium. Instantiate direct operated fuel releases including separate fossil/biogenic CO2, other gases/particles, leaks and water/pollutant releases where actual. Purchased complete services already carry provider releases and must not repeat them. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Actual attributable quantity for each concrete instance per 1 kg reference flow; retain native units and actual internal quantities; cp_presentation_delivery. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation_delivery` <br> - Range: Independent provisional row/instance bound; U is an unresolved quantity, not an empirical limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_releases,i <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independently establish this concrete row/instance bound from its own records <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope_gate` | accepted_live_whole | Reject wrong species, wild/polyculture/other growout route, processed/dead final state or missing first physical-recipient gate, accepted A or tare exclusions. Native shell belongs in whole mass; edible meat cannot substitute. | naca-babylon-pond-2005 |
| `validate_node_states` | all processes | Check crop-batch mode and complete event/period links; require standing-stock-to-collected-output harvest handoff. Activated sorting declares target plus every alternate/returned/rejected state and handoff. Activated holding declares observed before/after live state and actual intervention/losses; presentation declares product/package interface and separately evidenced delivery. Bypass requires actual records. | |
| `validate_balance_fates` | all processes | Check actual receipt including pre-stocking mortality, whole-animal transfer/stock reconciliation, feed/bait-stock balance, water balance, complete intended outputs, waste handlers and direct release media. Uncollected or escaped stock is not automatically a waste exchange; treatment transfers cannot duplicate releases. | |
| `validate_attribution` | all processes | Reconcile each output, shared asset/service and period allocation denominator to one complete burden including failures, idle periods, replacement and carry-over; require causal rationale and sensitivity. Complete purchased service and provider components cannot both be counted. | |
| `validate_amount_range` | all inventory rows | Check same-lot positive A and per 1 kg reference flow quantities, actual internal transfers, independent native-unit instance bounds and uncertainty. Only accepted_live_whole has exact 1..1 identity; symbolic upper quantities remain unresolved evidence needs, not validated empirical limits. | same-lot-mass-identity |
| `validate_identity_evidence` | all inventory rows | Concrete dataset exchanges require exact verified flow/property/unit support. Candidate methodology may preserve registered unresolved semantic cards; this does not establish dataset completeness, active methodology or publication readiness. Unknown CO2 source, nutrient basis or pollutant medium must remain unresolved. | |
| `validate_source_limits` | all processes | Require current foreground route/gate evidence; no claimed universal commercial profitability, no copied inconsistent pilot numbers or growout-grading assumption, and no zero-burden fish feed solely because it is low value. | naca-babylon-pond-2005; fao-fish-feed-2009 |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground collection package supporting process/lifecyclemodel projections and qualified secondary_dataset or background_dataset use after actual completion |
| downstream_use | Inventory of live whole pond-farmed Babylonia areolata to first physical recipient of the farmer's product, with upstream seed/feed/material/service links and declared uncertainty |
| allowed_use | Same species, eligible sand-bottom seawater earthen-pond monoculture, live whole state and physical gate, with explicit geography/period/technology representativeness assessment |
| excluded_use | Universal Thai production averages; wild, polyculture or other growout systems; edible meat; processed/dead final products; export/restaurant-retail inventories; claims of food safety, welfare, legality or present profitability |
| required_metadata | Site/pond/crop/period; species/seed origin and receipt; actual feed/bait; growout and harvest methods; actual nursery/sort/hold/presentation; recipient/gate and A; land/assets/shared duties; intended outputs and allocation; waste/release fates; concrete identity supports |
| required_quality_disclosure | Pilot applicability limits; quantitative evidence and unresolved U bounds; completeness, missing records, failure/idle periods, upstream coverage, allocation alternatives, water/pollutant basis, measurement/model uncertainty and unresolved UUIDs |
| update_trigger | Changed species/route/feed/seed supply, live state/gate, site/land history, intervention, outputs, service ownership, period/asset attribution, quantity evidence or concrete flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| naca-babylon-pond-2005 | literature | Kritsanapuntu S., Chaitanawisuti N., Santhaweesuk W., Natsukari Y. (2005). Large-scale growout of spotted Babylon, Babylonia areolata in earthen ponds: Pilot monoculture operation. Aquaculture Asia 10(3), 39–43. https://library.enaca.org/AquacultureAsia/Articles/July-Sept-2005/July-Sept-2005.pdf | Historical Petchaburi sand-bottom seawater earthen-pond route, purchased seed and initial selection, no growout grading, fresh fish feed, pumping/aeration, feed-storage ice, actual traps for sampling and harvesting in Table 2; no numerical or commercial-universality default |
| fao-fish-feed-2009 | official_guidance | Hasan M.R. and Halwart M. (eds) (2009). Fish as feed inputs for aquaculture: practices, sustainability and implications. FAO Fisheries and Aquaculture Technical Paper 518, section 5.5, pp. 108–109. https://www.fao.org/docrep/012/i1140e/i1140e.pdf | Qualitative historical Babylonia areolata farming/live-market and fresh fish feed context; fish feed can originate in human-food markets and is not inherently zero-burden waste; no quantitative or exact gate claim |
| unsd-cpc-3-2025 | official_guidance | United Nations Statistics Division. CPC Version 3.0 explanatory notes, 30 June 2025, subclass 04492, printed p. 52. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Broader farmed other-mollusc classification context only, not canonical PCR identity or production facts |
| same-lot-mass-identity | method_factor | This PCR, accepted_mass measurement rule, cp_presentation_delivery collection protocol and gate_mass_identity calculation; same-lot accepted net mass identity | Exact final reference A/A = 1 only; no empirical inventory factor or bound |
