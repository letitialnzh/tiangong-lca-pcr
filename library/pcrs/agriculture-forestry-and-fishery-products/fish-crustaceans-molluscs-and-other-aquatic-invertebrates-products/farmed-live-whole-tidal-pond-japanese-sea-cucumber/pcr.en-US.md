---
pcr_id: pcr.farmed-live-whole-tidal-pond-japanese-sea-cucumber
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed live whole tidal-pond Japanese sea cucumber

## 1. Scope and Applicability

This PCR governs foreground data production for Apostichopus japonicus raised from received hatchery juveniles in Shandong tidal seawater pond monoculture, collected by boat-supported divers using hands or rakes and net bags, and supplied whole, live, raw and never frozen to the first physical farm-product recipient. Native body contents remain; no evisceration is included. The FAO northern-China chapter supports the species/hatchery/pond context; MARA guidance identifies management questions to investigate; the Qingdao field report independently describes a pond collection and sorting route. None is a measured inventory for every farm.

Exclude wild harvest, open seabed ranching, southern seasonal cage growout, polyculture, ornamental animals, eviscerated animals, extracted tissues, frozen, cooked, dried, smoked, salted or brined products. A processing buyer may receive the whole live product, but that buyer's subsequent conversion is outside the reference. No production, environmental, food-safety, legal, welfare, nutrition, survival or profitability guarantee is made. Actual species, juvenile origin, monoculture, product state and physical receipt require primary lot records.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-tidal-pond-japanese-sea-cucumber |
| classification_refs | CPC 3.0 04512; narrower candidate relation |
| covered_products | Whole live raw never-frozen Apostichopus japonicus from hatchery-juvenile-origin Shandong tidal seawater pond monoculture |
| excluded_products | Wild, ranching, cage, polyculture, ornamental, eviscerated, tissue-separated, frozen and otherwise processed products |
| representative_product | Whole live pond Japanese sea cucumber at first physical farm-product receipt |
| production_route | Received hatchery juveniles; actual onfarm nursery when present; pond production and food management; boat/diver hand-rake net-bag collection; sorting; actual bounded live holding or direct bypass; presentation; all pre-receipt logistics |
| market_state | Whole live raw never-frozen; native body contents retained; free carrier water, incidental sediment and packaging excluded from product net mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole live Apostichopus japonicus meeting the declared route and state at first physical farm-product receipt |
| How much | 1 kg net whole live animal mass |
| How well | Identity, live status, native body retained, raw never-frozen state and actual recipient acceptance documented; no inferred grade threshold |
| How long or cycle | Actual juvenile cohort and pond seasons through receipt; disclose preparatory, nursery, active growth, summer/winter low-activity, harvest, failed and incomplete periods and asset service periods |
| reference_flow_link | `recipient_live_whole` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole live pond Japanese sea cucumber at first physical farm-product receipt |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Apostichopus japonicus; hatchery juvenile supplier and lot; Shandong farm and pond; monoculture; actual nursery phases; tidal water exchange and actual pumping; food pathway; cohort and reporting periods; boat/diver hand-rake net-bag collection; whole native body retained; live/raw/never-frozen evidence; grades and destinations; actual holding or bypass; presentation; first physical recipient/location/time; net weighing method and carrier-water exclusion |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `whole_live_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh whole live animals on a calibrated scale with documented removal of free carrier water and container tare; keep native body contents. Record live/state observations at receipt and same-lot accepted net mass A in cp_receipt. Whole, gutted, drained-after-evisceration and dry masses are not interchangeable. |
| `native_quantity` | all inventory rows | Actual flow property | actual native unit | Preserve measured kg, m3, kWh, MJ, item counts, animal counts, hours and tonne-km; record supplier-specific density, net mass and load evidence for conversions. Juvenile counts require the same lot's count and sampled mass; do not infer adult yield or use standard survival, feed or water factors. |
| `chemical_basis` | fertilizer, feed, treatment and emission instances | Actual substance basis | kg substance or stated nutrient/carbon basis | Keep product mass separate from nutrient mass, active ingredient and chemical species. Record test or supplier composition and explicit conversion; nitrogen as N is not ammonia mass, phosphorus as P is not phosphate mass, and fossil/biogenic carbon remain separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received living hatchery juveniles with upstream nursery history and supplier burdens; identified pond opening stock, food/sediment/water conditions and asset history |
| starting_condition_role | Foreground entry and period-accounting boundary; excludes no upstream burden merely because entry is juvenile purchase |
| product_classification_scope | Narrow whole-live hatchery-juvenile-origin tidal-pond route within farmed sea cucumbers; no whole-leaf equivalence |
| recursive_input_rule | Juveniles or returned live animals of the same species remain identified inputs/transfers with cohort and period lineage; do not recurse into this adult receipt reference or create a second final output |
| upstream_dataset_requirement | Include compatible hatchery/nursery, delivered supplies, energy, assets and services; document geography, technology, state, coverage and gaps. An upstream complete service and its already included components cannot both be charged. |
| disclosure | Actual nursery location/phases, pond dates and food pathway, managed water exchange, opening/closing stock, returns, mortality, failed batches, pond preparation, infrastructure, all pre-receipt logistics and all intended destinations |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_route` | foreground_scope | Establish actual hatchery-juvenile-origin tidal pond monoculture and whole live state from primary records. FAO context does not prove a farm's practices; MARA guidance is a candidate management checklist, not evidence that all listed interventions occur or numerical PCR defaults. | fao-northern-mariculture; mara-pond-management-2020 |
| `b_pond` | pond | Include pond preparation, actual onfarm nursery as separately indexed phases, stocking and restocking, managed food production, supplementary feeds actually used, water exchange, actual aeration/pumping/shading/treatment, cleanup and mortality. Pond detritus/diatoms are not automatically manufactured feed inputs or burden-free purchased products; record actual managed fertilizer/feed/substrate inputs and their sediment/water fates. | mara-pond-management-2020 |
| `b_capture` | harvest | Harvest is independent removal from the managed standing stock; growth is not counted again. Record boat/diver hand-rake/net-bag services, collected live animals, incidental sediment/water/organisms, losses and return destinations. Managed pond material accompanies animals as internal T_PI, not a second environmental abstraction; genuinely new external material requires distinct source-boundary evidence. Do not import source productivity or crew-size numbers. | qingdao-pond-harvest-2023 |
| `b_gate` | presentation; receipt | Presentation and logistics have separate nodes. Include every physical movement, actual holding and protective service before the first recipient physically receives the lot, irrespective of owner, payer, invoice or contractual transfer. A recipient's subsequent processing is excluded. | |
| `b_hold` | hold | Activate only with records of a bounded live-preserving intervention, its purpose, place and start/end times; ordinary elapsed time alone does not establish a holding node. Unknown actual state is a data gap, never an inactive default. | |
| `b_handoffs` | internal_transfers | Pair each physical handoff using one transfer id, live state, lot/time, native quantity and one owner: T_PH animals and T_PI managed pond water/sediment to harvest; T_HS collected animals and T_IS incidental material harvest to sort; T_SD sort direct to presentation; T_SH sort to hold; T_HP hold to presentation; T_PR presented lot to receipt. Returns R_HP harvest to pond and R_SP sort to pond pair with pond_returns; any other actual live return is individually registered in that pair. Closing standing stock is a ledger state, not an extra delivered exchange. | |
| `b_environment` | all_nodes | Distinguish delivered water products from elementary seawater abstraction; record tidal and pumped volumes and energy separately. Returned carrier water has its own volume row; each pollutant requires individual substance, nutrient/carbon basis, measured or supported concentration, receiving medium and fate. Do not label the entire water volume as a pollutant or count shipped wastewater as direct release. Actual onfarm treatment has its own service/components and treatment inlet/outlet/removed-solids records; provider treatment is linked to the shipped waste. | |
| `b_assets` | all_nodes | Include actual pond/sluice/substrate, nursery, boat/dive equipment, pumps, holding equipment, containers and logistics asset shares, maintenance, replacement and terminal cleanup. Enumerate consuming nodes and periods; derive service lives/utilization from records with rationale and sensitivity. No universal life, free infrastructure or environmental credit. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pond | Managed pond production and actual nursery phases | required | Selected route | Biological growth; cohort/pond/phase and seasonal-period ledger | Actual standing-stock handoff to harvest; not fixed at 1 kg |
| harvest | Boat/diver hand-rake net-bag collection | required | Selected route | Independent stock removal; trip/event indexed | Actual collected animal and incidental-material handoffs to sort |
| sort | Whole-live sorting and destination assignment | required | Selected route | Grade/destination separation; event and lot indexed | Actual direct/holding/return/alternate/waste quantities |
| hold | Bounded live-preserving holding | conditional | Observed intervention with start/end and service records before presentation | Live stabilization; bounded lot episode | Actual held live lot handoff; no default duration or shelf-life |
| presentation | Whole-live protective presentation | required | Actual presentation, including measured minimal unpackaged handoff if used | Packaging/container and product interface; event indexed | Presented whole-live lot to logistics |
| receipt | Pre-receipt logistics and first physical receipt | required | All actual movements before receipt, including zero-distance farm handoff | Logistics and recipient acceptance; route/lot indexed | 1 kg accepted net whole-live animals |

Production mode is cohort-batch biological pond production with repeated partial harvest events. Actual nursery and seasonal phases, continuous water/service metering, cleanup and changeover events remain linked to their real cohort, run/event and period; no artificial fixed cycle length is prescribed.

Inventory applicability is determined per actual instance. Every applicable Section 8 collection obligation expands into zero, one or multiple separately identified actual exchanges, each with its own unit, quantity, destination and supporting records. Unknown applicability cannot be assigned zero. Each intended alternate product has a distinct instance/output and receiving gate even if it is a lower-value live grade or a processing destination. The whole-live reference never includes that destination's processing.

All card amounts and ranges use the same actual accepted reference denominator A from cp_receipt after the allocation rules. Internal transfers retain measured quantities and are not forced to 1 kg. A positive denominator and complete cohort/period attribution are required; failed-only periods with no receipt remain in the period ledger pending justified attribution. Each U_row,instance is an unestablished symbolic upper-bound placeholder for that row and instance; this provisional reasoned estimate requires independent foreground observations and uncertainty evidence before a reviewed bound can be supplied; 0..U is not an empirical range, operating limit or invitation to set an active flow to zero. No numeric production default is supplied. Product stock growth is not constrained by a false juvenile-mass equals adult-mass balance.

### Process: Managed pond production and actual nursery phases (`pond`)

#### Inputs

##### Product flows

###### Received hatchery Japanese sea cucumber juveniles (`pond_juveniles`)

Living hatchery Apostichopus japonicus juveniles at farm entry, with actual upstream nursery coverage, cohort/count/net mass and transport records; upstream production is supplied, actual onfarm nursery remains in this node's phase ledger.

- Selected flow: Received hatchery Japanese sea cucumber juveniles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pond_juveniles,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Returned living pond animals (`pond_returns`)

Pair actual live returns R_HP from harvest and R_SP from sort, and any separately registered later-node return, by transfer id, source node, state, quantity and return time; retained for continued production, never mortality/waste by default.

- Selected flow: Returned living pond animals
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pond_returns,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delivered pond or nursery water product (`pond_supplied_water`)

Water supplied across the technosphere boundary for actual nursery, pond management or cleaning, distinct from direct environmental seawater; identify provider and upstream coverage.

- Selected flow: Delivered pond or nursery water product
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pond_supplied_water,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct environmental seawater abstraction (`pond_seawater`)

Record actual incoming tidal/pumped seawater by intake medium/location/event/volume; tidal exchange does not prove zero pumping. Record rainfall separately where material to balance; do not manufacture a water-product supply.

- Selected flow: Direct environmental seawater abstraction
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pond_seawater,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Living standing-stock handoff to harvest (`pond_to_harvest`)

T_PH: actual whole live animals removed from the managed cohort for this harvest event, matching harvest_stock; record count and net mass without equating juvenile and adult biomass.

- Selected flow: Living standing-stock handoff to harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pond_to_harvest,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Living closing pond stock ledger (`pond_closing_stock`)

Opening/closing live stock, returned undersize, cohort growth and carryover by phase/period; this is a state-accounting output, not an extra external exchange or credit. Carry attributable burdens once into later periods.

- Selected flow: Living closing pond stock ledger
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pond_closing_stock,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Pond carrier-water return to environment (`pond_return_water`)

Actual outgoing seawater volume with outlet medium/location/time and treatment status; keep carrier volume separate from pollutant loads, sediment and exported wastewater.

- Selected flow: Pond carrier-water return to environment
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pond_return_water,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Boat/diver hand-rake net-bag collection (`harvest`)

#### Inputs

##### Product flows

###### Living pond stock received for collection (`harvest_stock`)

T_PH matches pond_to_harvest with the same cohort/event, live state and measured quantity; production burdens enter once.

- Selected flow: Living pond stock received for collection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_stock,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected whole live pond sea cucumbers (`harvest_to_sort`)

T_HS: net whole live animals at the collection-to-sort handoff, before destination grading, paired with sort_animals; free water and sediment are separate.

- Selected flow: Collected whole live pond sea cucumbers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_to_sort,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live collection returns to pond (`harvest_live_returns`)

R_HP paired with pond_returns for actual animals deliberately returned alive for continued production, with mass/count and destination pond; not waste or final receipt.

- Selected flow: Live collection returns to pond
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_live_returns,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Collection carrier-water return (`harvest_return_water`)

Carrier seawater actually released from collection with receiving marine location/volume; exclude water carried onward in T_IS and separate pollutant loads.

- Selected flow: Collection carrier-water return
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_return_water,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Whole-live sorting and destination assignment (`sort`)

#### Inputs

##### Product flows

###### Collected whole live animals received for sorting (`sort_animals`)

T_HS pairs with harvest_to_sort before grading; preserve same-lot net animal mass/count/state, separate from incidental material.

- Selected flow: Collected whole live animals received for sorting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_sort; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_animals,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sorted whole live animals bypassing holding (`sort_direct`)

T_SD: actual sorted whole live lot routed directly to presentation, paired with presentation_direct. Declare bypass evidence, quantity and time; do not infer bypass from missing records.

- Selected flow: Sorted whole live animals bypassing holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_sort; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_direct,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorted whole live animals sent to bounded holding (`sort_to_hold`)

T_SH: actual live lot sent to observed bounded holding, paired with hold_animals; retains own measured mass/count rather than the final reference amount.

- Selected flow: Sorted whole live animals sent to bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_sort; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_to_hold,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorted undersize live returns for continued pond growth (`sort_live_returns`)

R_SP paired with pond_returns, actual returned live grade with source lot, net quantity and destination pond; include rehandling and future period burdens once.

- Selected flow: Sorted undersize live returns for continued pond growth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_sort; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_live_returns,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Sorting carrier-water return (`sort_return_water`)

Actual carrier seawater released at sorting by receiving medium/location and volume; exclude shipped effluent and separately report constituent loads.

- Selected flow: Sorting carrier-water return
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_sort; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_return_water,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Bounded live-preserving holding (`hold`)

#### Inputs

##### Product flows

###### Whole live animals entering bounded holding (`hold_animals`)

T_SH pairs with sort_to_hold, with same net live quantity and bounded intervention episode; unknown activation is unresolved, not zero.

- Selected flow: Whole live animals entering bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_hold; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_hold_animals,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied holding water (`hold_supplied_water`)

Water product actually delivered for the holding intervention, including supplier coverage; distinct from elemental intake and free water excluded from reference mass.

- Selected flow: Actual supplied holding water
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_hold; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_hold_supplied_water,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct environmental holding seawater intake (`hold_seawater`)

Actual intake volume, source medium/location and pumping record during the bounded intervention; do not presume seawater or a water system was used.

- Selected flow: Direct environmental holding seawater intake
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_hold; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_hold_seawater,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Whole live animals leaving bounded holding (`hold_to_presentation`)

T_HP pairs with presentation_held, actual live state/net quantity and end time; do not assume all incoming animals survive or that mass remains unchanged.

- Selected flow: Whole live animals leaving bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_hold; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_hold_to_presentation,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Holding carrier-water return (`hold_return_water`)

Actual return-water volume after any observed treatment, with medium/location and episode; exclude exported wastewater and pollutant masses.

- Selected flow: Holding carrier-water return
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_hold; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hold`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_hold_return_water,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Whole-live protective presentation (`presentation`)

#### Inputs

##### Product flows

###### Sorted direct whole live lot (`presentation_direct`)

T_SD matches sort_direct without an invented holding step; same lot, live state and native measured quantity.

- Selected flow: Sorted direct whole live lot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_direct,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Whole live lot after bounded holding (`presentation_held`)

T_HP matches hold_to_presentation only when actual holding occurred; preserve actual live state, quantity and timestamp.

- Selected flow: Whole live lot after bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_held,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied protective or cleaning water (`presentation_water`)

Actual supplied carrier/cleaning water product with provider and quantity; any direct abstraction is a separately expanded elementary intake instance, never hidden as supplied water.

- Selected flow: Actual supplied protective or cleaning water
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_water,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Direct environmental presentation seawater intake (`presentation_seawater`)

Actual direct seawater intake for protective presentation or cleaning, by source medium/location, volume and pumping record; separate from delivered water products.

- Selected flow: Direct environmental presentation seawater intake
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_seawater,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Presented whole live lot ready for physical receipt logistics (`presentation_to_receipt`)

T_PR pairs with receipt_animals: whole live raw never-frozen animals with actual protective presentation, net animal quantity, separate package/carrier water quantities and dispatch state.

- Selected flow: Presented whole live lot ready for physical receipt logistics
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_to_receipt,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Presentation carrier-water return (`presentation_return_water`)

Actual free water released before dispatch or after cleaning with medium/location/volume; water still carried in the presented lot is separately disclosed and excluded from animal mass.

- Selected flow: Presentation carrier-water return
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_return_water,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Pre-receipt logistics and first physical receipt (`receipt`)

#### Inputs

##### Product flows

###### Presented whole live lot entering pre-receipt logistics (`receipt_animals`)

T_PR matches presentation_to_receipt and retains measured dispatch mass/state; the final received amount may differ because actual loss/rejection must be reconciled.

- Selected flow: Presented whole live lot entering pre-receipt logistics
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_receipt; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_receipt_animals,instance
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Whole live pond Japanese sea cucumber at first physical farm-product receipt (`recipient_live_whole`)

Actual accepted whole live raw never-frozen Apostichopus japonicus at the first physical recipient gate, with native body retained; accepted net same-lot animal mass A excludes free carrier water, incidental matter and packaging.

- Selected flow: Whole live pond Japanese sea cucumber at first physical farm-product receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt`
- Range: Same-lot accepted reference identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

###### Logistics carrier-water return before receipt (`receipt_return_water`)

Actual carrier water released before the physical gate, with event/volume/receiving medium; any retained water at receipt is disclosed separately from A.

- Selected flow: Logistics carrier-water return before receipt
- Flow property / unit: Volume / m3
- Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_receipt; divide by accepted same-lot A after period/output attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt`
- Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_receipt_return_water,instance
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_subdivision` | all_nodes | First subdivide independently metered cohort, pond, phase, trip, grade, intervention, package and route services. Each physical event has one owner and no duplicate upstream/component burden. Internal T/R transfers carry attributed burdens once, not allocation credit or additional final product. | |
| `a_outputs` | all_intended_outputs | Enumerate every actual intended output and receiver at each node, including alternate whole-live grades, continued-growth returns and beneficial recovered material. Apply subdivision first; for inseparable same-species live grades at one gate, use measured net live mass shares with rationale. For materially different juvenile/other outputs, justify a causal service-use basis; if unavailable, document an economic allocation using same-period actual quantities/prices and sensitivity. Do not extend live-mass allocation automatically to sediment, carrier water, mortality or unrelated materials; no substitution credit. | |
| `a_periods` | pond; all_nodes | Link preparation, upstream and actual onfarm nursery, stocking/restocking, growth, low-activity seasons, repeated harvests, failed batches, open stock and cleanup to cohort/pond/phase/period. Attribute actual shared pond operating burdens by evidenced occupied pond-area-time to cohorts, then intended output attribution; disclose causal limitations and sensitivity to biomass-time if relevant. Preserve closing/opening burden continuity and actual ending/termination events; do not divide all historical burdens by one successful harvest or erase failed periods. | |
| `a_assets` | shared_infrastructure | Maintain one asset/service register identifying pond/sluice/substrate, nursery equipment, boat/dive gear, pumps, work area, holding system, containers and vehicles actually used, all consuming nodes/periods, acquisition/replacement/disposal and service/utilization records. Use metered use first, documented service-hours/trips/area-time as causal alternatives; derive service life from evidence and test uncertainty. Reusable-container washing/repair/replacement belongs to actual uses. Missing life or utilization remains a gap, not an arbitrary standard life. | |
| `a_losses` | mortality; waste; failed_batches | Include mortality, rejected unusable animals, actual treatment and disposal, empty returns and failed services in the supplying cohort or service period. Live returns retain burden/stock lineage rather than receiving waste treatment; only actual recovery or dispatch changes destination. Report unknown mortality/open stock and unsupported attribution as incomplete data. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pond | pond | Juveniles, food, materials, water, services, stock, returns, wastes and releases | Supplier/pond/cohort/phase/asset and environmental ledger | Supplier lot/species/origin; upstream nursery coverage; onfarm nursery phase; stocking/restocking count/net mass; pond area and dates; opening/closing stock; T_PH/T_PI/R ids; feed/fertilizer product/nutrient/moisture; actual treatment/substrate; intake/outlet volume and paired substance concentrations/basis; tidal/pump/aeration logs; energy; assets/service life/use; mortality/removal/fate; complete-service coverage | Reconcile supplier receipts and cohort counts with calibrated net weighing and documented sampling; meter actual water/energy or document event-based flow measurement and uncertainty; inspect actual food/management records; pair intake/outlet samples with flow events and chemical basis; retain sediment/stock fate, failed and cleanup records and actual onfarm nursery phases | kg; m3; count; kWh; MJ; h; actual service unit | Each receipt, transfer, intervention and loss; time-resolved water/energy; period stock reconciliation | Complete cohort history and linked seasons, including incomplete/failed periods and asset service periods | Identified Shandong farm, pond and any actual onfarm nursery site | per 1 kg reference flow | Species/origin records; calibration; sampling/flow uncertainty; supplier coverage; stock/event/asset and fate audit trail |
| cp_harvest | harvest | Stock/incidentals, collection services, transfers, returns, alternative products, waste and releases | Trip/diver/event and transfer ledger | Cohort/pond/trip; T_PH/T_PI/T_HS/T_IS/R_HP; start/end; whole-live count/net mass; managed T_PI versus genuinely new external incidental water/sediment/organisms and source boundary; boat/dive/rake/bag/energy/services; utilization and replacements; alternate receivers; loss/fate; substance/medium/carbon basis | Match pond removal to calibrated net animal weighing and separately measured incidental quantities; pair dispatch and sorting receipt for each transfer; reconcile boat/dive service or component coverage, returns, alternate deliveries and actual waste/release records | kg; m3; count; h; kWh; MJ; actual service unit | Each collection trip/event, transfer and loss | All selected and failed harvest services within cohort periods | Actual collection pond, boat and unloading location | per 1 kg reference flow | Paired transfer sheets; calibration; dive/boat logs; destination and coverage evidence |
| cp_sort | sort | Incoming animals/incidentals, grade destinations, services, waste and releases | Sorting lot/destination ledger | T_HS/T_IS/T_SD/T_SH/R_SP; lot/time/live status; actual grade criterion and net mass/count; carrier/incidentals; direct/hold activation; alternate gate/receiver; services/cleanup; mortality/waste/fate; substance/medium/basis | Weigh actual grades with calibrated tare and free-water exclusion; match incoming incidental material to actual recovery/waste/release fates; pair every outgoing T/R with its receiving node, document actual holding or bypass and retain alternate recipient evidence | kg; m3; count; kWh; MJ; h; actual service unit | Each sorting lot and destination split | All sorting events and failed lots linked to production periods | Actual farm sorting location | per 1 kg reference flow | Grade/receiver records; paired T/R sheets; calibration; actual fate and service records |
| cp_hold | hold | Incoming/outgoing live animals, water, intervention services, alternative outputs, wastes and releases | Bounded intervention episode ledger | T_SH/T_HP and any R id; purpose/site/start/end; live status/count/net mass; actual water/intake/outlet/substance basis; energy/aeration/cooling/materials; equipment service periods; mortality and alternate gate/fate; treatment inlet/outlet/solids | Confirm observed intervention and actual duration; calibrate net animal weighing at both handoffs; meter actual service/water, sample actual constituents with basis and fate, retain episode mortality and component/complete-service coverage; missing activation remains unresolved | kg; m3; count; h; kWh; MJ; actual service unit | Every episode, handoff, actual intervention and loss | Complete actual episode including failure/cleanup; no assumed shelf-life | Actual pre-receipt holding location | per 1 kg reference flow | Intervention/time and live-state records; paired transfers; calibration; water/service and treatment evidence |
| cp_presentation | presentation | Direct/held lot, packaging/water/services, dispatch, alternate outputs, waste and releases | Presentation/container-cycle ledger | T_SD/T_HP/T_PR; lot/live state/net animal mass; actual package/carrier-water mass/volume; container id/ownership/reuse trips; washing/repair/replacement; supplies/services; direct intake if any; alternative gate and waste/release fate | Pair direct or held receipt to actual presented dispatch; calibrated animal/container tare and free-water records; record actual protective form or affirmative unpackaged handoff; track reusable container cycles and actual cleaning/water/asset shares, waste and substance/medium evidence | kg; m3; count; h; kWh; MJ; actual service unit | Each presented lot and container/service cycle | All presentation and cleanup cycles attributable to selected and failed lots | Actual presentation and cleaning location | per 1 kg reference flow | Transfer/dispatch records; tare/calibration; package specifications; reuse/cleanup/fate trail |
| cp_receipt | receipt | Incoming presented lot, logistics, accepted reference, alternate outputs, waste and releases | Route/first-physical-receipt ledger | T_PR; lot/species/cohort; route/loading/dispatch and physical receipt location/time/custody; live/raw/never-frozen/native-body evidence; calibrated gross/tare/free-water/incidentals and accepted net mass A; rejected/diverted live quantities; distance/load/empty return; all operators/payers; protective service coverage; mortality/waste/release substance/medium/basis | Trace the physical lot to the first actual recipient; verify state and acceptance independently of invoices. Weigh accepted whole live animals on calibrated scales excluding free water, packaging and incidentals; record A, all pre-receipt movement/services and actual loss/diversion/fate with paired dispatch/receipt records | kg; m3; count; tonne-km; km; kWh; MJ; h; actual service unit | Each shipment/handoff, acceptance, diversion and loss | Complete pre-receipt route including failed attempts and actual protective services | Every actual pre-receipt location through identified first recipient | per 1 kg reference flow | Signed physical custody/acceptance; scale calibration/tare; live/state and route evidence; complete-service coverage and fate records |

Protocol aggregation detail (the table retains the explicit common reference basis):

- cp_pond: Attribute once by cohort/phase/period/output; report each actual native quantity per 1 kg reference flow using cp_receipt accepted net mass A; closing stock carries burdens forward
- cp_harvest: Retain native T/R quantities; assign trip/service shares once; per 1 kg reference flow using A
- cp_sort: Reconcile separately animal and incidental quantities; retain transfer measures and attribution; per 1 kg reference flow using A
- cp_hold: Assign episode/asset shares once to actual outputs; retain measured transfers; per 1 kg reference flow using A
- cp_presentation: Separate animal/product from package and carrier water; share reusable services once; per 1 kg reference flow using A
- cp_receipt: Accepted reference output is 1 kg; each attributable native input/output per 1 kg reference flow using accepted net same-lot mass A; no invoice denominator

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_receipt` | all inventory rows | Divide each attributable native quantity by accepted same-lot net whole-live mass A in kg after period/output allocation; final same-lot animal output is A / A = 1 kg per 1 kg reference flow. Keep internal quantities measured. | Node-specific protocols; cp_receipt; allocation ledger; A | Native quantity per 1 kg reference flow | |
| `transfer_reconcile` | all physical transfers | Pair each T/R sender and receiver with identical transfer id, lot, state and original measured quantity; separately document any measured time-dependent water/mass change or loss between distinct events instead of forcing equality to final A. | All node protocols; paired records | Transfer and fate reconciliation | |
| `water_load` | actual water pollutant instances | Calculate each substance load from its actual sampled concentration and corresponding measured carrier volume with explicit unit and chemical-basis conversions; disclose background intake, net attribution and retained sediment separately, actual onfarm treatment inlet/outlet and provider treatment coverage. Do not sum carbon/nutrient equivalents as distinct physical substances. | Node water/constituent records; conversion and treatment evidence | Individual substance/medium load and uncertainty | |
| `service_share` | actual shared services/assets | Allocate actual event/period service burden once using evidenced meter or causal use shares and documented service life, replacement and termination; reconcile all consumer shares to the actual total and retain sensitivity. | Node and shared asset registers; allocation ledger | Attributable service burden by node/period/output | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | Whole-live reference | Establish actual species/hatchery origin, tidal pond monoculture, whole native body, live/raw/never-frozen state and first physical receipt; unknown eligibility remains a gap | Primary cohort, state, weigh and physical custody records |
| dq_complete | All nodes and periods | Cover actual food/management, nursery, seasonal/open/failed cohorts, intended alternate destinations, returns, stock, mortality, cleanup, water/sediment pathways, assets and every pre-receipt service; no default unknown-to-zero | Node/period/output/asset register and reconciliation |
| dq_quantities | Every card instance | Replace symbolic U_row,instance with reviewed foreground uncertainty/range evidence; no source guide rates, yields, conversion or duration defaults. Preserve units and document calibration, sampling, composition and conversion uncertainty | Actual records, measured uncertainty and reviewed bounds |
| dq_sources | Boundary and modelling | Separate FAO taxonomy/pond context, MARA candidate duties and original Qingdao field-observed harvest/sorting evidence from primary inventory; no source establishes all-farm operations or actual receipt | Source-role record and independent primary records |
| dq_binding | Every actual exchange | Resolve a verified concrete flow/property/unit identity for each final exchange; collection obligations require actual instance expansion and individual verification | Detail/support evidence and unresolved-identity register |
| `collect_pond_food_inputs` | `pond`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual supplementary food supplies. Conditional umbrella for each actually supplied feed/seaweed/raw ingredient; preserve formulation, product mass, moisture and supplier gate. Naturally available pond sediment/detritus is not automatically a purchased feed exchange. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_food_inputs,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_fertilizer_inputs` | `pond`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pond food-cultivation fertilizer supplies. Each actual fertilizer product used to manage pond primary food production, with product/nutrient composition and application records; do not copy guidance rates. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_fertilizer_inputs,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_management_materials` | `pond`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pond management materials. Conditional instances of supplied settlement substrate, treatment/cleaning materials, shade or other consumables; identify role and composition. Reusable substrate/assets use actual service shares, not repeated full purchases. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_management_materials,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_services` | `pond`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual nursery and pond operating/asset services. Conditional umbrella for actual energy, pumping/aeration, nursery equipment, pond/sluice/substrate infrastructure, maintenance, cleanup and treatment service components. Expand actual exchanges individually; complete upstream services exclude their already covered components and releases. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_services,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_incidental_to_harvest` | `pond`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Managed pond material transferred with animal removal. T_PI pairs with collect_harvest_incidental_in for actual managed carrier water, sediment or incidental organisms accompanying removal; record each component's native quantity and stock fate. Internal transfer carries existing burdens once, not a second seawater abstraction or useful coproduct claim. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_incidental_to_harvest,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_alternate_products` | `pond`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended live pond destinations. Separate actual live juvenile/stock transfers or other intended products by destination/grade/period and handoff; exclude amounts already assigned to T_PH and retain upstream burdens. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_alternate_products,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_wastes` | `pond`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pond/nursery wastes to management. Separate mortality carcasses, removed sediment/algae, spent consumables and exported wastewater by material, wet/dry state and actual receiver/treatment. Unrecovered pond mortality has a fate ledger and attributable burdens; never invent removal or zero mortality. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_wastes,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_water_pollutants` | `pond`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual individual pond water/sediment releases. Conditional umbrella expanded per evidenced substance, chemical species, N/P/carbon basis and receiving water or sediment; use paired intake/outlet evidence and fate, with background attribution disclosed. Sediment retained in the pond is stock, not an assumed discharge. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_water_pollutants,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_air_releases` | `pond`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual individual pond operating air releases. Each evidenced combustion, treatment or biological air release by substance and fossil/biogenic carbon basis; do not infer methane/N2O from an unspecified factor or duplicate upstream energy/treatment releases. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_pond; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_pond_air_releases,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_incidental_in` | `harvest`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Managed pond material received with stock for collection. T_PI: actual managed pond water/sediment/incidental organisms physically accompanying animal removal, paired with collect_pond_incidental_to_harvest; this internal handoff is not new environmental resource abstraction and does not repeat pond intake burdens. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_harvest` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_incidental_in,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_services` | `harvest`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual boat/diver collection services and components. Boat, dive/air supply, hand-rake/net-bag use, actual energy, replacement, maintenance and cleanup; record complete purchased service or separately metered component exchanges with no double counting and actual trip shares. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_harvest` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_services,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_external_incidental_in` | `harvest`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Genuinely new environmental material entering collection. Conditional only where source-boundary records prove additional water/sediment/organisms enter from outside the already managed pond system during collection. Identify source medium/location/event and actual quantity; exclude T_PI and all already recorded pond intake or retained stock. Confirm absence when none occurs. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_harvest` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_external_incidental_in,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_incidental_to_sort` | `harvest`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Incidental material physically carried to sorting. T_IS pairs with collect_sort_incidental, preserving each material's quantity/state; a physical internal transfer does not make incidental sediment/water a useful product. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_harvest` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_incidental_to_sort,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_alternate_products` | `harvest`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended collection-stage products. Each actual intended live grade, direct alternate recipient or other beneficial output has its own instance and gate; exclude T_HS and R_HP. Confirm state and destination rather than calling downgrade waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_harvest` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_alternate_products,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_wastes` | `harvest`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Collection-stage wastes to actual management. Actual dead/damaged unusable animals, discarded equipment or captured incidental material sent as waste; record material/quantity and receiver. Deliberate live return and alternative sale are product outputs. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_harvest` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_wastes,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_releases` | `harvest`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Individual collection-stage environmental releases. Each actual evidenced air/water/sediment release, including on-site fuel use if outside complete service coverage, by substance and medium; distinguish fossil/biogenic carbon and actual unrecovered loss fate. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_harvest; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_harvest` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_releases,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_incidental` | `sort`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Incidental material received with harvested animals. T_IS matches collect_harvest_incidental_to_sort, each actual sediment/water/organism instance; include this material in sorting fate reconciliation, not animal product mass. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_sort; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_incidental,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_services` | `sort`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting and cleanup services. Record actual sorting equipment, supplies, energy, calibration, shared work area and cleanup/treatment components, identified separately from harvest and holding services. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_sort; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_services,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_alternate_products` | `sort`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended sorted grades and destinations. Each actual intended grade/destination including whole-live sale to a processing buyer is a separate output with acceptance/handoff evidence and attribution; exclude reference-bound transfers and returns. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_sort; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_alternate_products,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_wastes` | `sort`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting wastes and exported effluent. Dead/unusable animals, incidental sediment/organisms, spent supplies and wastewater actually sent to management, separate by state/quantity/receiver. No beneficial live output is labelled waste merely because downgraded. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_sort; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_wastes,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_releases` | `sort`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Individual sorting and cleanup releases. Actual individual substances to air/water/sediment from sorting, cleanup and actual onfarm treatment, with chemical/N/P/carbon basis; do not duplicate carrier volume or service-covered emissions. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_sort; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_releases,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_services` | `hold`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual bounded holding services and supplies. Individually record actual tanks, energy, aeration/oxygen, cooling, cleaning/treatment and replacement shares, duration and utilization. No mandatory holding technology, duration, temperature or shelf-life is prescribed. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_hold; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_hold` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_hold_services,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_alternate_products` | `hold`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended live holding destinations. Each actual alternate grade/recipient or registered pond-return instance has its own measured output/handoff; any actual pond return pairs with pond_returns under its own R id. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_hold; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_hold` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_hold_alternate_products,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_wastes` | `hold`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Holding mortality, spent supplies and exported effluent. Individually record actual carcasses, rejected unusable animals, spent materials, treatment solids and shipped wastewater with receiver/fate; retain mortality/failed-episode burdens. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_hold; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_hold` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_hold_wastes,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_hold_releases` | `hold`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Individual holding and treatment releases. Each actual evidenced chemical species to air/water/sediment, measured or calculated with explicit factor and carbon/nutrient basis; no assumed universal excretion or mortality factor. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_hold; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_hold` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_hold_releases,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_materials` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual protective presentation materials and container service. Each actual bag, net, tote, label or protective material is an instance; record single-use vs reusable ownership, trips, washing, repair and replacement. Unpackaged handoff requires affirmative evidence, not an assumed packaging zero. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_materials,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_services` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual presentation operating services. Actual energy, work-area/asset use, washing and cleanup/treatment service components with lot and reusable-container attribution; distribution is owned by receipt node. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_services,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_alternate_products` | `presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended presentation-stage destinations. Individually record actual alternate live grades, recipients and recoverable beneficial materials with state/quantity/gate; do not call them rejects/waste without fate evidence. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_alternate_products,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_wastes` | `presentation`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual presentation wastes and exported wastewater. Actual unusable animals, damaged disposable packaging, spent cleaning materials and shipped wastewater by receiver/fate; reusable containers in continued service are assets, not disposed after every lot. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_wastes,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_releases` | `presentation`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Individual presentation/cleanup releases. Each actual evidenced constituent or air release with substance, medium and fossil/biogenic or nutrient basis; excludes carrier-water volume and complete-service releases already included. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_presentation; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_releases,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_services` | `receipt`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pre-receipt logistics and protective services. All actual movement, loading/unloading, transport energy/vehicles and protective services until physical recipient custody, including buyer-operated trips. Record tonne-km or actual native service, route, load, empty return and shares; complete transport excludes covered fuel/assets/releases. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_receipt; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_receipt_services,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_alternate_products` | `receipt`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended pre-receipt or acceptance destinations. Every actual live diversion, alternate buyer/grade or returned-live destination has its own quantity, state, recipient and attribution. Actual pond returns pair with pond_returns by unique R id; neither resale nor downgrade is automatically waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_receipt; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_receipt_alternate_products,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_wastes` | `receipt`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual logistics mortality/reject and protective-material wastes. Record actual dead/unusable animals, packaging waste, cleanup solids and exported wastewater before receipt by receiver/fate; do not omit failed trips or treat an invoice as physical acceptance. <br> - Flow property / unit: Actual native property / actual native unit <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_receipt; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_receipt_wastes,instance <br> - Unit: actual native unit <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_releases` | `receipt`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Individual pre-receipt logistics releases. Each actual direct substance/medium-specific emission or loss fate outside complete-service coverage, with fossil/biogenic carbon distinguished; actual carrier water is separately quantified. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg <br> - Amount rule: Use the actual measured attributable native quantity per 1 kg reference flow from cp_receipt; divide by accepted same-lot A after period/output attribution. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional symbolic evidence gap; U is unestablished and requires independent observations and uncertainty evidence; not a measured QA guardrail, empirical rate or operational limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_receipt_releases,instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_eligibility` | reference_product | Fail eligibility when species/origin/route, whole native body, live/raw/never-frozen state or actual first physical receipt is unsupported; eviscerated/dried/frozen and cage/polyculture routes are outside scope. | fao-northern-mariculture |
| `v_mass` | reference_product; all_rows | Check cp_receipt A is positive calibrated accepted net whole-live animal mass; recipient_live_whole is the linked final output at 1 kg. All rows retain native units and per 1 kg reference basis; juveniles, internal transfers and carrier water cannot be set to final A by assumption. | |
| `v_nodes` | process_map | Check all required nodes and actual conditional instances, exact T/R pairs, holding/bypass evidence, animal and incidental fate balances, intended grades/receivers, and no duplicate final output. Unknown holding is incomplete. | qingdao-pond-harvest-2023 |
| `v_food_water` | pond; all_water_rows | Check actual nursery/food/fertilizer/substrate/treatment inputs, tidal/pump/water balances, sediment retention/removal and actual individual chemical/medium releases. No guidance numeric defaults or invented manufactured detritus feed; separate carrier return, shipped wastewater and actual treatment. | mara-pond-management-2020 |
| `v_periods_assets` | all_nodes | Check cohort/phase/run/period completeness, failed services, open stock, replacements/termination, shared asset consumers and service-life evidence/sensitivity; each event and burden is attributed once with no environmental credit. | |
| `v_evidence` | inventory; identities | Every actual card instance needs quantity, own-node protocol, applicable range evidence/remaining gap, property/unit, fate and verified identity before final exchange publication. A candidate structural pass does not resolve UUIDs or prove empirical completeness or publication readiness. | |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground collection package; after complete review usable as secondary_dataset or background_dataset |
| downstream_use | Downstream LCA process/lifecyclemodel projections for the declared whole-live farm product receipt; recipient conversion model starts after this gate |
| allowed_use | Exact declared species, origin, farm route/state, period and first physical recipient with compatible attribution and upstream coverage |
| excluded_use | Whole CPC leaf equivalence, wild/cage/ranching/polyculture proxies, eviscerated/frozen/dried product, guaranteed sale/quality, environmental benefit claims or unverified final exchange identities |
| required_metadata | PCR/version; species/origin; farm/pond/cohorts/phases/periods; food/water pathways; actual harvest/sort/holding-or-bypass/presentation/logistics; first custody and net mass; all intended outputs/stock/returns; upstream coverage; allocation/assets and service life; units and verified identities |
| required_quality_disclosure | Primary completeness, failed/open stock and uncertainty, sampling/conversion/bounds, source roles, actual treatment/release fate, exclusions and unresolved data/identity/attribution gaps |
| update_trigger | Change of species/origin, nursery/pond/food/water route, collection/preservation/presentation/logistics or recipient gate, state, allocation/service life, supplier data, actual emission/fate evidence or identity verification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-northern-mariculture | official_guidance | FAO, northern China mariculture chapter, The future of mariculture: a regional approach for responsible development in the Asia-Pacific region, https://www.fao.org/4/i0202e/i0202e13.pdf ; retrieved 2026-10-12 | Species/hatchery context and Shandong pond route; historical advice is not foreground fact or numerical default |
| mara-pond-management-2020 | official_guidance | MARA Fisheries Bureau, Sea cucumber pond production management guidance, 2020-08-02; https://yyj.moa.gov.cn/gzdt/202008/t20200804_6349837.htm ; attachment https://faolex.fao.org/docs/pdf/chn197172.pdf ; retrieved 2026-10-12 | Candidate pond, food, water and seasonal-management questions only; actual use must be collected; no dosage, density, health or legal prescription |
| qingdao-pond-harvest-2023 | literature | Kang Xiaohuan, Qingdao Morning News original field report, 2023-05-05, republished at https://news.iqilu.com/shandong/shandonggedi/20230505/5419937.shtml ; retrieved 2026-10-12 | Field-observed boat/diver rake/net-bag pond collection, sorting and farm buyer context; not an audited inventory or proof of any application lot's receipt |
