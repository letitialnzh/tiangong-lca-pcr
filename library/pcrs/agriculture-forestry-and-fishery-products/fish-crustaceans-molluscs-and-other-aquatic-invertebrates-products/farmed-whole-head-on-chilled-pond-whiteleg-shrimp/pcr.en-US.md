---
pcr_id: pcr.farmed-whole-head-on-chilled-pond-whiteleg-shrimp
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed whole head-on chilled pond whiteleg shrimp

## 1. Scope and Applicability

This PCR covers Peru Tumbes semi-intensive coastal brackish earthen-pond Penaeus vannamei grown from purchased hatchery postlarvae and actually harvested by outlet bag-net draining, with actual whole-product washing followed by independent grading/sorting and ice-water killing/chilling, delivered as raw head-on shell-on never-frozen chilled whole shrimp at first processor physical acceptance before deheading or freezing. FAO 2009 supports a general technical route; FAO 2025 corroborates the local industry without proving each farm operation. Actual farm and handoff records establish eligibility. This is a product-system methodological boundary with no prescribed density, feed conversion ratio, yield, crop duration, temperature threshold, additive/drug or dose.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-whole-head-on-chilled-pond-whiteleg-shrimp |
| classification_refs | CPC 3.0:04362 |
| covered_products | Penaeus vannamei (whiteleg shrimp; synonym Litopenaeus vannamei), Peru Tumbes semi-intensive coastal brackish earthen ponds, purchased hatchery postlarvae, actual outlet bag-net draining harvest, whole raw head-on shell-on never-frozen chilled lot at first processor receipt. |
| excluded_products | Wild shrimp, other species, freshwater, intensive tank/biofloc/raceway routes, separately operated nursery foreground, live final product, headless, peeled, gutted, cooked, frozen or ornamental shrimp; downstream processing and export/retail. |
| representative_product | One accepted whole raw chilled pond whiteleg shrimp lot, with head, organs and native shell retained. |
| production_route | Purchased hatchery postlarvae → pond preparation/stocking/growout → outlet bag-net draining harvest → actual washing/sorting → ice-water killing/chilling → actual packaging if used → first processor physical receipt. |
| market_state | Dead raw whole head-on shell-on chilled and never frozen before first processor receipt; package is a separate carrier, not reference mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted whole raw head-on shell-on chilled pond whiteleg shrimp at first processor physical receipt before deheading/freezing. |
| How much | 1 kg accepted net whole product excluding free ice/water and packaging tare. |
| How well | Declare species, hatchery batch, semi-intensive brackish earthen-pond site, actual harvest method, head/shell retention, never-frozen state, actual grade/lot acceptance and first-recipient gate; this PCR sets no food safety or grade threshold. |
| How long or cycle | Link preparation/fallow, stocking, growout, harvest, between-crop cleaning, chilling/holding, transport and receipt dates; include failed crops and asset installation, repair, replacement and termination over declared reporting periods. |
| reference_flow_link | `accepted_whole_shrimp` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted raw whole head-on shell-on never-frozen chilled whiteleg shrimp at first processor physical receipt |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Penaeus vannamei/synonym; Peru Tumbes farm/site and brackish source; semi-intensive earthen-pond mode; purchased hatchery postlarval batch/stage; actual outlet bag-net draining harvest evidence; crop/reporting periods and failed cycles; whole raw dead head-on shell-on never-frozen chilled state; actual size/grade; accepted net mass/free-ice-water/tare method; actual wash/sort sequence and chilling records; packaging activation/custody/reuse; actual first processor receipt location/date before deheading/freezing; upstream dataset and service ownership; allocation and exclusions. |

Declare every required qualifier in foreground package metadata or equivalent fields; any missing qualifier makes the reference definition incomplete. The denominator is kg whole shrimp, not count, edible flesh, iced box gross weight or headed-shrimp mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Use calibrated same-lot receipt weighing; A = accepted net whole-shrimp mass after free ice/water and packaging tare correction. Retain head, organs and native shell; do not convert to edible flesh or live body weight. |
| `native_instances` | all inventory rows | Actual instance property | native unit | Use each actual instance's verified property and native unit; count-to-mass, volume-to-mass, nutrient/active-to-product or energy conversions need matched measured composition/density/individual mass or documented supplier factors. Do not sum incompatible units. |
| `biological_reconciliation` | pond and harvest transfers | Mass | kg | Reconcile seed counts, growth, mortality, escapes, standing biomass estimates, harvested mass, grades and final accepted mass without imposing input-output body-mass equality. Water, feed, sludge and live/chilled shrimp use their own declared basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased hatchery postlarvae physically received for stocking, existing coastal brackish earthen pond and declared prior land/pond history; source-batch and preparation records required. |
| starting_condition_role | Foreground entry, not a zero-burden origin: seed carries hatchery, transport and prior biological production upstream; pond land/assets carry declared history and period attribution. |
| product_classification_scope | One species/route/state/gate semantic subset; broader external leaf does not authorize another shrimp species or live/frozen state. |
| recursive_input_rule | A same-species shrimp input is still an evidenced seed or transfer lot with its own prior gate; attach the upstream dataset once and terminate recursion at the disclosed acquisition boundary. Do not reuse this final-product PCR as a zero-burden hatchery. |
| upstream_dataset_requirement | Identify provider, geography, technology, period, gate, property/unit, background coverage and exclusions for seed, feeds, management materials, energy, water, ice, capital, packaging and external services; unresolved upstream coverage prevents finalization. |
| disclosure | Disclose farm/crops/failed duty, route eligibility, actual operation sequence and optional packaging bypass, product handoffs, resource sources, releases/fates, capital life/history, service ownership, allocation evidence, unmeasured quantities and unresolved identities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_route` | route | Require foreground proof of hatchery seed, Tumbes brackish semi-intensive earthen-pond mode and actual outlet bag-net drain harvest. FAO's global technical description and Peru corroboration alone do not prove any farm's harvest configuration. | `fao-whiteleg-shrimp-2009`; `fao-peru-shrimp-2025` |
| `b_nodes` | foreground | Separate managed production, physical harvest, whole-product washing, grading, killing/chilling, conditional packaging and delivery/receipt responsibilities. Match all physical transfers; require whole-product washing before independent grading/sorting, with early visual removal of incidental material owned by harvest. Another node ordering requires methodology review. No deheading, peeling, cooking or freezing is included before reference receipt. | `fao-whiteleg-shrimp-2009` |
| `b_periods` | crop_and_assets | Include preparation/fallow, seed receipt/stocking, all growout and harvest attempts, crop failures, idle/cleaning/changeover, actual holding and delivery over declared periods. Include land occupation/history, pond/levee, pumps, aerators, nets, chill equipment, boxes and vehicles with installation, service life, maintenance, replacement and termination ownership. |  |
| `b_services` | ownership | For each node/period, choose full supplier service or separately owned materials/fuels/electricity/assets/direct releases for that same activity; prohibit overlap. Shared pumps, generators, chill facilities, boxes and vehicles must identify all consumers and use once-only attribution. Onsite electricity already represented by fuel/assets/releases is an internal transfer. |  |
| `b_fates` | environment | Classify every intended sale product, downgraded lot, returned product, mortality, escape, incidental animal, sludge, wastewater and discarded material by actual fate. Direct measured/modelled pollutant substance/basis/medium is elementary; treatment transfer is waste with treatment upstream/downstream ownership. Never turn biomass disposal into automatic elemental emissions, burden-free input or ecological credit. |  |
| `b_gate` | reference_gate | End at first processor physical acceptance before deheading/freezing; include all actual transport and cold-chain through that gate, regardless of producer/buyer/service-provider legal ownership; declare the model owner and supplier-service coverage to avoid duplicates. A farm dispatch invoice alone is not physical acceptance evidence. Packaging bypass transfers chilled product directly; one final accepted output only. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pond` | Pond preparation and semi-intensive growout | required | Within this eligible route | Purchased hatchery postlarvae to standing harvest-ready live whole shrimp in coastal brackish earthen ponds; preparation, fallow, stocking, growout, mortality and crop termination are crop-indexed. | per 1 kg reference flow |
| `harvest` | Outlet bag-net draining harvest | required | Within this eligible route | Standing pond stock to collected live whole shrimp at wash handoff; drainage and physical removal are independently metered, without repeating growout. | per 1 kg reference flow |
| `wash` | Actual whole-product washing | required | Within this eligible route | Collected whole shrimp to washed whole shrimp at sorter; record actual washing-before-independent-grading sequence and wash-water ownership. | per 1 kg reference flow |
| `sort` | Whole-product grading and destination sorting | required | Within this eligible route | Washed whole shrimp to selected chilled-channel lot and each other sale-grade/destination or waste output; no invented grade thresholds. | per 1 kg reference flow |
| `chill` | Ice-water killing, chilling and holding | required | Within this eligible route | Selected whole shrimp to raw dead head-on shell-on never-frozen chilled whole shrimp; include holding and ice top-ups only before dispatch; receipt owns transit cold-chain and transit top-ups. | per 1 kg reference flow |
| `pack` | Actual package loading and presentation | conditional | Include only when the producer loads an actual protective container before dispatch | Chilled whole shrimp to container-protected same product at dispatch; bulk/unpacked physical handoff bypasses this node. | per 1 kg reference flow |
| `receipt` | Delivery and first processor physical receipt | required | Within this eligible route | Measured chilled dispatch lot, packaged or bulk, to accepted net whole shrimp at first processor receipt before deheading or freezing; include actual transit. | per 1 kg reference flow |

Production mode is indexed by pond crop and actual harvest/handling batches, including preparation, fallow, cleaning/changeover, failed and nonproductive duty. This eligible route requires whole-product washing before independent grading/sorting; early visual incidental-material removal belongs to harvest, and another order needs review. A shared event requires one event id and one burden owner. Match node inputs, outputs and fates through transfer ids. Packaging is conditional: when inactive, chilled output passes directly to delivery; unknown activation is not an inactive default.

### Process: Pond preparation and semi-intensive growout (`pond`)

Purchased hatchery postlarvae to standing harvest-ready live whole shrimp in coastal brackish earthen ponds; preparation, fallow, stocking, growout, mortality and crop termination are crop-indexed.

#### Inputs

##### Product flows

###### Purchased hatchery whiteleg shrimp postlarvae received at farm before stocking (`hatchery_postlarvae`)

Record the actual hatchery batch, postlarval stage and physically received count, separately from purchased/dispatched, stocked and dead/lost counts. Retain received seed that dies before stocking and declare upstream transport-loss ownership; never model only stocking survivors. Attach hatchery and seed-delivery upstream datasets once. Count is primary; any kg conversion needs this received batch's representative measured mean individual mass.

- Selected flow: Purchased hatchery whiteleg shrimp postlarvae received at farm before stocking
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pond`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_hatchery_postlarvae
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual formulated shrimp feed delivered to pond (`formulated_feed`)

Instantiate each supplier formulation, lot, moisture basis and feed delivery; record inventory changes and losses. Natural pond food is not a purchased feed exchange and does not cancel feed or fertilization burdens.

- Selected flow: Actual formulated shrimp feed delivered to pond
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pond`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_formulated_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

##### Elementary flows

#### Outputs

##### Product flows

###### Live whole whiteleg shrimp standing stock at harvest handoff (`standing_pond_shrimp`)

Estimate standing harvest-ready biomass from documented sampling and reconciliation; pair transfer id with harvest input. Biological growth precludes forcing postlarval body mass plus feed into equal harvested shrimp mass.

- Selected flow: Live whole whiteleg shrimp standing stock at harvest handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pond`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_standing_pond_shrimp
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual pond effluent transferred to treatment (`pond_effluent_to_treatment`)

Only effluent crossing to a treatment provider is waste here; retain volume, salinity and pollutant loads. Direct environmental discharge belongs to actual release instances, with identified medium and species/basis.

- Selected flow: Actual pond effluent transferred to treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pond`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pond_effluent_to_treatment
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide from actual node-owned combustion to air (`pond_fossil_co2`)

Conditional on separately owned direct fossil-fuel combustion, including generators and this node's incoming-material logistics; product delivery combustion belongs exclusively to receipt: use measured fuel carbon or applicable verified factor and oxidation basis; exclude supplier-service included releases and biogenic carbon. No fixed factor is prescribed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pond`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pond_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Outlet bag-net draining harvest (`harvest`)

Standing pond stock to collected live whole shrimp at wash handoff; drainage and physical removal are independently metered, without repeating growout.

#### Inputs

##### Product flows

###### Live whole whiteleg shrimp standing stock at harvest handoff (`harvest_stock`)

Pair the pond transfer estimate with harvest-event observations and crop id; it is an internal transfer, not another purchased seed burden.

- Selected flow: Live whole whiteleg shrimp standing stock at harvest handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_harvest`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_stock
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

##### Elementary flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

#### Outputs

##### Product flows

###### Collected live whole whiteleg shrimp at washing handoff (`collected_live_shrimp`)

Measure actual outlet bag-net collected stock net of carried water and incidental material; preserve catch event and internal transfer id.

- Selected flow: Collected live whole whiteleg shrimp at washing handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_harvest`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collected_live_shrimp
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from actual node-owned combustion to air (`harvest_fossil_co2`)

Conditional on separately owned direct fossil-fuel combustion, including generators and this node's incoming-material logistics; product delivery combustion belongs exclusively to receipt: use measured fuel carbon or applicable verified factor and oxidation basis; exclude supplier-service included releases and biogenic carbon. No fixed factor is prescribed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_harvest`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Actual whole-product washing (`wash`)

Collected whole shrimp to washed whole shrimp at sorter; record actual washing-before-independent-grading sequence and wash-water ownership.

#### Inputs

##### Product flows

###### Collected live whole whiteleg shrimp at washing handoff (`wash_feed`)

Use matched harvest transfer id and measured wet whole-shrimp mass with declared free-water correction.

- Selected flow: Collected live whole whiteleg shrimp at washing handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_wash`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wash`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_wash_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied washing-water instances (`wash_water`)

Record each purchased or internally treated supply and actual use; retain quality/salinity/provider state. For direct untreated abstraction instead use raw-water card and separately owned pumping; no duplicate supplier service.

- Selected flow: Actual supplied washing-water instances
- Flow property / unit: Volume / m3
- Amount rule: Collect each actual instance amount for this row with `cp_wash`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wash`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_instance
  - Unit: m3
  - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

##### Elementary flows

#### Outputs

##### Product flows

###### Washed whole whiteleg shrimp at grading handoff (`washed_whole_shrimp`)

Record washed whole product mass and transfer id; washing is independent of removal from pond and does not include heading, peeling or cooking.

- Selected flow: Washed whole whiteleg shrimp at grading handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_wash`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wash`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_washed_whole_shrimp
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from actual node-owned combustion to air (`wash_fossil_co2`)

Conditional on separately owned direct fossil-fuel combustion, including generators and this node's incoming-material logistics; product delivery combustion belongs exclusively to receipt: use measured fuel carbon or applicable verified factor and oxidation basis; exclude supplier-service included releases and biogenic carbon. No fixed factor is prescribed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_wash`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wash`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_wash_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Whole-product grading and destination sorting (`sort`)

Washed whole shrimp to selected chilled-channel lot and each other sale-grade/destination or waste output; no invented grade thresholds.

#### Inputs

##### Product flows

###### Washed whole whiteleg shrimp at grading handoff (`sort_feed`)

Match washing transfer and prove independent grading/sorting follows whole-product washing; combined physical work may use shared event ids without duplicate burdens.

- Selected flow: Washed whole whiteleg shrimp at grading handoff
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_sort`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

##### Elementary flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

#### Outputs

##### Product flows

###### Selected whole whiteleg shrimp lot for ice-water killing and chilling (`selected_chill_lot`)

Weigh the selected lot and retain actual size/quality/destination descriptors, recipient and transfer to chilling; no universal grade threshold.

- Selected flow: Selected whole whiteleg shrimp lot for ice-water killing and chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_sort`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_selected_chill_lot
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from actual node-owned combustion to air (`sort_fossil_co2`)

Conditional on separately owned direct fossil-fuel combustion, including generators and this node's incoming-material logistics; product delivery combustion belongs exclusively to receipt: use measured fuel carbon or applicable verified factor and oxidation basis; exclude supplier-service included releases and biogenic carbon. No fixed factor is prescribed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_sort`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sort`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sort_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Ice-water killing, chilling and holding (`chill`)

Selected whole shrimp to raw dead head-on shell-on never-frozen chilled whole shrimp; include holding and ice top-ups only before dispatch; receipt owns transit cold-chain and transit top-ups.

#### Inputs

##### Product flows

###### Selected whole whiteleg shrimp lot for ice-water killing and chilling (`chill_feed`)

Use sorting transfer and actual received whole-shrimp mass; retain stage ordering and any pre-intervention holding.

- Selected flow: Selected whole whiteleg shrimp lot for ice-water killing and chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_chill`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_chill_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied ice for pond whiteleg shrimp chilling (`chill_ice`)

Record actual ice provider, manufacture/delivery boundary, mass and pre-dispatch top-ups; transit top-ups belong to receipt; bought full ice service includes its manufacturing burdens. Onsite manufacture instead owns water, fuel/electricity, assets and releases once; internally transferred ice adds no second background burden.

- Selected flow: Actual supplied ice for pond whiteleg shrimp chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_chill`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_chill_ice
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied ice-bath water instances (`chill_water`)

Record bath filling and renewal independently of ice and product body mass, quality/salinity and provider; direct abstraction uses raw-water card.

- Selected flow: Actual supplied ice-bath water instances
- Flow property / unit: Volume / m3
- Amount rule: Collect each actual instance amount for this row with `cp_chill`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_instance
  - Unit: m3
  - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

##### Elementary flows

#### Outputs

##### Product flows

###### Raw whole head-on shell-on never-frozen chilled whiteleg shrimp at dispatch preparation (`chilled_whole_shrimp`)

Record dead chilled state and net whole-shrimp mass excluding free ice/water; transfer to packaging when active, otherwise directly to dispatch/receipt. This is an intermediate, not a second final reference.

- Selected flow: Raw whole head-on shell-on never-frozen chilled whiteleg shrimp at dispatch preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_chill`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_chilled_whole_shrimp
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from actual node-owned combustion to air (`chill_fossil_co2`)

Conditional on separately owned direct fossil-fuel combustion, including generators and this node's incoming-material logistics; product delivery combustion belongs exclusively to receipt: use measured fuel carbon or applicable verified factor and oxidation basis; exclude supplier-service included releases and biogenic carbon. No fixed factor is prescribed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_chill`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chill`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_chill_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Actual package loading and presentation (`pack`)

Chilled whole shrimp to container-protected same product at dispatch; bulk/unpacked physical handoff bypasses this node.

#### Inputs

##### Product flows

###### Raw whole head-on shell-on never-frozen chilled whiteleg shrimp at dispatch preparation (`pack_feed`)

Matched chilled transfer enters only when an actual package-loading event occurs; keep product net mass separate from free ice and container tare.

- Selected flow: Raw whole head-on shell-on never-frozen chilled whiteleg shrimp at dispatch preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_pack`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pack_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

##### Elementary flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

#### Outputs

##### Product flows

###### Container-protected raw whole head-on shell-on never-frozen chilled whiteleg shrimp at dispatch (`pack_dispatch`)

Record net shrimp mass and package custody separately; hand off to actual transport. Packaged presentation is not an alternative final reference or edible-mass conversion.

- Selected flow: Container-protected raw whole head-on shell-on never-frozen chilled whiteleg shrimp at dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_pack`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pack_dispatch
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from actual node-owned combustion to air (`pack_fossil_co2`)

Conditional on separately owned direct fossil-fuel combustion, including generators and this node's incoming-material logistics; product delivery combustion belongs exclusively to receipt: use measured fuel carbon or applicable verified factor and oxidation basis; exclude supplier-service included releases and biogenic carbon. No fixed factor is prescribed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_pack`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_pack_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Delivery and first processor physical receipt (`receipt`)

Measured chilled dispatch lot, packaged or bulk, to accepted net whole shrimp at first processor receipt before deheading or freezing; include actual transit.

#### Inputs

##### Product flows

###### Actual chilled whole whiteleg shrimp dispatch lot (`receipt_dispatch`)

Pair either container-protected pack output or unpacked chill output, using exactly one physical lot transfer and measured dispatch mass; never count both paths.

- Selected flow: Actual chilled whole whiteleg shrimp dispatch lot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_receipt`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

##### Elementary flows

No separately declared crossing of this type; any actual occurrence requires concrete identity, quantity and ownership coverage and must not be omitted.

#### Outputs

##### Product flows

###### Accepted raw whole head-on shell-on never-frozen chilled whiteleg shrimp at first processor physical receipt (`accepted_whole_shrimp`)

One final reference at first processor receipt before deheading/freezing; accepted net mass includes head, organs and native shell, excludes free ice/water and packaging tare. Rejected/returned quantities are separate, never accepted mass.

- Selected flow: Accepted raw whole head-on shell-on never-frozen chilled whiteleg shrimp at first processor physical receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt`
- Sources: `same-lot-normalization`
- Range: Same accepted-lot normalization identity
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `same-lot-normalization`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from actual node-owned combustion to air (`receipt_fossil_co2`)

Conditional on separately owned direct fossil-fuel combustion, including generators and this node's incoming-material logistics; product delivery combustion belongs exclusively to receipt: use measured fuel carbon or applicable verified factor and oxidation basis; exclude supplier-service included releases and biogenic carbon. No fixed factor is prescribed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: Fixed (`fixed`)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect each actual instance amount for this row with `cp_receipt`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt`
- Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_receipt_fossil_co2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_direct` | all_outputs | First subdivide by measured crop, operation, grade, destination and exclusive equipment/service. Assign seed/feed/pond management to its crop, washing/sorting/chilling to actually treated lots and transport to actually carried lots; identify every sale product and handoff before residual allocation. |  |
| `a_residual` | joint_shrimp_lots | For inseparable residual burdens of one pond crop or joint sorting event, allocate across intended shrimp sale lots by measured whole wet mass at a common pre-divergence handoff, excluding free water/ice and tare. Retain grade/state-specific masses and justify biomass production/handling causality; test realized first-sale revenue shares as sensitivity when grades differ materially in price. Do not use final accepted mass to disguise omitted other products. |  |
| `a_failure` | periods | Include nonproductive/failed crop and maintenance duty in the declared reporting-window pond burden pool; attribute to the same pond's intended sale output over that window using the residual rule. Disclose failure timing and reasons. If no intended sale output exists, retain an unnormalized failed-operation record and widen only an evidenced reporting window; never divide by zero or delete failed duty. |  |
| `a_assets` | shared_assets | For shared infrastructure enumerate pond, harvest, wash, sort, chill, pack and receipt consumers actually using each asset over its service periods. Prefer meters for energy/water; use measured pump hydraulic work or equipment-hours for residual operation, occupied pond-area-time for pond land/levees, and loaded tonne-kilometres with assigned empty/return travel for vehicle services. Allocate capital/repair using documented actual lifetime service shares, including replacement/termination; once-only ledger reconciles all shares. |  |
| `a_waste` | losses | Retain mortality, rejected/discarded biomass and associated treatment within the responsible crop/node burden pool; assign actual treatment once. Other intended products remain products; no automatic substitution/ecological credits. Receipt rejection/return fate keeps its original burden ownership; no default zero-burden replacement. Reprocessing or return-to-upstream loops are outside this declared route; an actual loop requires methodology review before inclusion. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Every protocol collects actual native-unit quantities before attribution under section 7 and division by the same accepted receipt mass A. Do not sum incompatible units or divide a failed-only period by zero. Each protocol owns exactly its named process; repeated methods preserve single ownership of shared events.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pond` | `pond` | Pond preparation and semi-intensive growout inputs, transfers, services, residues and releases | event, meter, invoice, sampling, asset and acceptance records | hatchery batch/stage and separate purchased/dispatched, received, stocked, dead/lost counts; representative sampled received-batch mean individual mass; seed transport/provider gate and upstream loss ownership; feed formulation/lot/moisture/stock changes; fertilizer/chemical product and active/nutrient content; water source/volume/salinity; pond land area/history; stocking/growth/sampling/mortality/escape/standing biomass; sludge/effluent destination; node/crop/event/date/site and reporting-window ids; transfer/custody; each actual instance property/unit/substance/provider; direct utility/fuel and full-service coverage flags; meter/invoice/asset id, service-life/replacement/maintenance and consumer-period shares; actual pollutant/substance/basis/medium, model factor/source and uncertainty; native measured amount, attributable share and receipt denominator A | Collect physical lot/event observations with calibrated scales/meters, representative biological/water samples, matched invoices and signed custody/acceptance records; for unmeasured releases use documented models/factors applicable to the actual activity, substance and receiving medium (species-specific when biological), retaining factor provenance, chemistry/medium and uncertainty. Match quantities to this process and actual timing; reconcile upstream service and asset coverage before attribution. | kg; m3; count; kWh or actual native unit | each crop/event/lot; meter interval; each replacement and receipt | all declared periods, crop failures, preparation/idle and delivery until accepted receipt | named farm/pond and this node's actual asset/provider/recipient | per 1 kg reference flow | calibration; traceable lots; sample design; signed receipt; service/asset ledger; reconciliation and uncertainty |
| `cp_harvest` | `harvest` | Outlet bag-net draining harvest inputs, transfers, services, residues and releases | event, meter, invoice, sampling, asset and acceptance records | pond/crop and outlet bag-net drain method proof; drainage tide/pump duty; event start/end; standing estimate; collected shrimp net mass; carried water/incidental material/losses and fate; transfer id; node/crop/event/date/site and reporting-window ids; transfer/custody; each actual instance property/unit/substance/provider; direct utility/fuel and full-service coverage flags; meter/invoice/asset id, service-life/replacement/maintenance and consumer-period shares; actual pollutant/substance/basis/medium, model factor/source and uncertainty; native measured amount, attributable share and receipt denominator A | Collect physical lot/event observations with calibrated scales/meters, representative biological/water samples, matched invoices and signed custody/acceptance records; for unmeasured releases use documented models/factors applicable to the actual activity, substance and receiving medium (species-specific when biological), retaining factor provenance, chemistry/medium and uncertainty. Match quantities to this process and actual timing; reconcile upstream service and asset coverage before attribution. | kg; m3; count; kWh or actual native unit | each crop/event/lot; meter interval; each replacement and receipt | all declared periods, crop failures, preparation/idle and delivery until accepted receipt | named farm/pond and this node's actual asset/provider/recipient | per 1 kg reference flow | calibration; traceable lots; sample design; signed receipt; service/asset ledger; reconciliation and uncertainty |
| `cp_wash` | `wash` | Actual whole-product washing inputs, transfers, services, residues and releases | event, meter, invoice, sampling, asset and acceptance records | harvest lot/transfer; actual wash position in sequence; incoming and washed whole mass; wash source/provider/volume/renewals; corrections for free water; rejects and wastewater load/destination; node/crop/event/date/site and reporting-window ids; transfer/custody; each actual instance property/unit/substance/provider; direct utility/fuel and full-service coverage flags; meter/invoice/asset id, service-life/replacement/maintenance and consumer-period shares; actual pollutant/substance/basis/medium, model factor/source and uncertainty; native measured amount, attributable share and receipt denominator A | Collect physical lot/event observations with calibrated scales/meters, representative biological/water samples, matched invoices and signed custody/acceptance records; for unmeasured releases use documented models/factors applicable to the actual activity, substance and receiving medium (species-specific when biological), retaining factor provenance, chemistry/medium and uncertainty. Match quantities to this process and actual timing; reconcile upstream service and asset coverage before attribution. | kg; m3; count; kWh or actual native unit | each crop/event/lot; meter interval; each replacement and receipt | all declared periods, crop failures, preparation/idle and delivery until accepted receipt | named farm/pond and this node's actual asset/provider/recipient | per 1 kg reference flow | calibration; traceable lots; sample design; signed receipt; service/asset ledger; reconciliation and uncertainty |
| `cp_sort` | `sort` | Whole-product grading and destination sorting inputs, transfers, services, residues and releases | event, meter, invoice, sampling, asset and acceptance records | wash lot/transfer and actual event order; incoming whole mass; every selected and other intended sale lot's species/state/size/quality/mass/recipient/handoff; prices/revenue for sensitivity; rejected fraction/fate; node/crop/event/date/site and reporting-window ids; transfer/custody; each actual instance property/unit/substance/provider; direct utility/fuel and full-service coverage flags; meter/invoice/asset id, service-life/replacement/maintenance and consumer-period shares; actual pollutant/substance/basis/medium, model factor/source and uncertainty; native measured amount, attributable share and receipt denominator A | Collect physical lot/event observations with calibrated scales/meters, representative biological/water samples, matched invoices and signed custody/acceptance records; for unmeasured releases use documented models/factors applicable to the actual activity, substance and receiving medium (species-specific when biological), retaining factor provenance, chemistry/medium and uncertainty. Match quantities to this process and actual timing; reconcile upstream service and asset coverage before attribution. | kg; m3; count; kWh or actual native unit | each crop/event/lot; meter interval; each replacement and receipt | all declared periods, crop failures, preparation/idle and delivery until accepted receipt | named farm/pond and this node's actual asset/provider/recipient | per 1 kg reference flow | calibration; traceable lots; sample design; signed receipt; service/asset ledger; reconciliation and uncertainty |
| `cp_chill` | `chill` | Ice-water killing, chilling and holding inputs, transfers, services, residues and releases | event, meter, invoice, sampling, asset and acceptance records | selected lot/transfer; pre/post live/dead state and head/shell/never-frozen evidence; bath water/ice provider and pre-dispatch amounts/top-ups; time and recorded actual temperature; actual additives/refrigerant and active basis; holding energy; spent bath and rejects/destinations; node/crop/event/date/site and reporting-window ids; transfer/custody; each actual instance property/unit/substance/provider; direct utility/fuel and full-service coverage flags; meter/invoice/asset id, service-life/replacement/maintenance and consumer-period shares; actual pollutant/substance/basis/medium, model factor/source and uncertainty; native measured amount, attributable share and receipt denominator A | Collect physical lot/event observations with calibrated scales/meters, representative biological/water samples, matched invoices and signed custody/acceptance records; for unmeasured releases use documented models/factors applicable to the actual activity, substance and receiving medium (species-specific when biological), retaining factor provenance, chemistry/medium and uncertainty. Match quantities to this process and actual timing; reconcile upstream service and asset coverage before attribution. | kg; m3; count; kWh or actual native unit | each crop/event/lot; meter interval; each replacement and receipt | all declared periods, crop failures, preparation/idle and delivery until accepted receipt | named farm/pond and this node's actual asset/provider/recipient | per 1 kg reference flow | calibration; traceable lots; sample design; signed receipt; service/asset ledger; reconciliation and uncertainty |
| `cp_pack` | `pack` | Actual package loading and presentation inputs, transfers, services, residues and releases | event, meter, invoice, sampling, asset and acceptance records | activation proof or explicit bypass; incoming net shrimp mass; actual material/count and tare; box custody/reuse/replacement/cleaning owner/returns; container-protected dispatch transfer and reject/end-of-use fate; node/crop/event/date/site and reporting-window ids; transfer/custody; each actual instance property/unit/substance/provider; direct utility/fuel and full-service coverage flags; meter/invoice/asset id, service-life/replacement/maintenance and consumer-period shares; actual pollutant/substance/basis/medium, model factor/source and uncertainty; native measured amount, attributable share and receipt denominator A | Collect physical lot/event observations with calibrated scales/meters, representative biological/water samples, matched invoices and signed custody/acceptance records; for unmeasured releases use documented models/factors applicable to the actual activity, substance and receiving medium (species-specific when biological), retaining factor provenance, chemistry/medium and uncertainty. Match quantities to this process and actual timing; reconcile upstream service and asset coverage before attribution. | kg; m3; count; kWh or actual native unit | each crop/event/lot; meter interval; each replacement and receipt | all declared periods, crop failures, preparation/idle and delivery until accepted receipt | named farm/pond and this node's actual asset/provider/recipient | per 1 kg reference flow | calibration; traceable lots; sample design; signed receipt; service/asset ledger; reconciliation and uncertainty |
| `cp_receipt` | `receipt` | Delivery and first processor physical receipt inputs, transfers, services, residues and releases | event, meter, invoice, sampling, asset and acceptance records | exactly one dispatch transfer; route/distance/load/empty return and actual transit cold-chain duty and each ice/water/coolant/refrigerant top-up instance; first processor physical receipt place/time before processing; calibrated gross mass, free ice/water and packaging tare; accepted net whole-shrimp mass A; acceptance/rejection/returned lot and destinations; node/crop/event/date/site and reporting-window ids; transfer/custody; each actual instance property/unit/substance/provider; direct utility/fuel and full-service coverage flags; meter/invoice/asset id, service-life/replacement/maintenance and consumer-period shares; actual pollutant/substance/basis/medium, model factor/source and uncertainty; native measured amount, attributable share and receipt denominator A | Collect physical lot/event observations with calibrated scales/meters, representative biological/water samples, matched invoices and signed custody/acceptance records; for unmeasured releases use documented models/factors applicable to the actual activity, substance and receiving medium (species-specific when biological), retaining factor provenance, chemistry/medium and uncertainty. Match quantities to this process and actual timing; reconcile upstream service and asset coverage before attribution. | kg; m3; count; kWh or actual native unit | each crop/event/lot; meter interval; each replacement and receipt | all declared periods, crop failures, preparation/idle and delivery until accepted receipt | named farm/pond and this node's actual asset/provider/recipient | per 1 kg reference flow | calibration; traceable lots; sample design; signed receipt; service/asset ledger; reconciliation and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | Divide each once-attributed actual native-unit exchange by accepted net whole-shrimp receipt mass A from cp_receipt; keep product transfers and other-sale outputs independently measured. For the final accepted lot A/A = 1 kg per 1 kg reference flow. | native instance amount; attribution shares; A; cp_receipt | per 1 kg reference flow | `same-lot-normalization` |
| `seed_conversion` | `hatchery_postlarvae` | When a kg exchange is required, multiply actual received postlarval count by that received batch's representative measured mean individual mass in kg; retain separate purchased/dispatched, received, stocked and dead/lost counts, sample statistics and stage. Seed that dies after receipt before stocking remains an input with separately recorded fate; upstream transport losses retain declared upstream ownership. No generic seed weight, survivor-only input or seed-to-harvest mass equality is allowed. | actual received count; measured received-batch mean individual mass; cp_pond | seed mass with count and uncertainty |  |
| `release_loads` | all inventory rows | Derive each actual unmeasured release only from a stated chemical basis and measured activity with a documented applicable factor/model, or concentration and actual water volume; state background versus direct ownership. Keep each pollutant/medium separate and exclude separately listed fossil CO2 from other-release totals. | measured activity or concentration/volume; factor provenance; node protocol | actual substance-specific release in native unit |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all cards | Require concrete actual-instance flow/property/unit compatibility and upstream gate/provider scope; unresolved cards remain review gaps, not implicit generic identities. | detail evidence; supplier records; unresolved register |
| `dq_quantity` | all amounts | Use real records or transparent model inputs; retain measurement resolution, sampling design, wet/dry/free-water basis, node/period coverage and uncertainty. Zero requires evidenced non-activation or measured zero, not missing data. | calibration; raw event tables; model and reconciliation |
| `dq_temporal` | crops_and_assets | Cover productive and failed crops and their shared idle/preparation duty, full relevant asset periods and termination; no unrecorded service-life or crop extrapolation. | crop timeline; asset and consumer ledger |
| `dq_source` | source_applicability | FAO 2009 provides route examples, not current local practice shares or numeric defaults; Peru 2025 corroborates location/industry, not each harvest detail. Obtain farm records for actual configuration and current quantities. | source-date assessment; farm route record |
| `collect_pond_management_materials` | `pond`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pond preparation, fertilization and health-management material instances. Conditional umbrella: each actual lime, fertilizer, disinfectant, probiotic or other material requires its own formulation, purpose, supplier, amount, product/active/nutrient basis and verified identity. No material or dose is prescribed. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_utilities_services_assets` | `pond`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual node-owned utility, fuel, equipment and external service instances. Conditional umbrella: instantiate each actual purchased electricity/provider, fuel grade, pump/aerator or other equipment, repair/capital replacement, input-material logistics/treatment/contract service in its independently verified native unit. Full background service and separately modelled direct operation are exclusive. Onsite electricity is an internal transfer when its fuels/assets/releases are modelled. Include idle, failed and shared duty allocated once; only the receipt node owns product delivery vehicle and cold-chain operation; other nodes' logistics are limited to their own incoming materials. Inputs already explicit in this node are excluded from this collection obligation. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_raw_water` | `pond`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual untreated coastal brackish-water abstraction instances. Conditional when the farm directly abstracts; identify estuary/sea/groundwater source and actual volume independently, water exchange and replenishment. Supplier-treated water belongs to services as a product input; do not count the same volume twice. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: m3 <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_land` | `pond`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pond land occupation and transformation instances. Record occupied pond/levee/supporting land area and period, and actual land transformation history with prior habitat and timing; distinguish inherited occupation from new conversion. Do not infer mangrove conversion, restoration credit or zero land burden. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_residues_mortalities` | `pond`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Removed pond mortalities, sludge and residue instances. Separate mortality, sludge, unused feed and each removed residue by measured wet/dry basis and destination. In-pond decomposition or escaped animals is a fate record, not this waste transfer or automatically an elementary emission. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pond_other_releases` | `pond`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other actual node-owned environmental release instances excluding separately listed fossil carbon dioxide. Conditional umbrella for separately owned actual combustion pollutants, biological/pond emissions including actual biogenic carbon dioxide, nutrient effluent, direct wastewater, refrigerant leakage, spillage and other releases as applicable to this node. Identify each substance/species, chemical reporting basis and receiving air/water/soil medium; keep independent measured/modelled amount and native unit. Exclude this node's fossil CO2 card and any supplier-service included releases. Product-delivery releases belong exclusively to receipt; other nodes' logistics releases are limited to their incoming materials. Dissolved nutrient loads are not total effluent volume; biomass waste is not automatically an elementary emission. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_pond`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_pond` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_utilities_services_assets` | `harvest`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual node-owned utility, fuel, equipment and external service instances. Conditional umbrella: instantiate each actual purchased electricity/provider, fuel grade, pump/aerator or other equipment, repair/capital replacement, input-material logistics/treatment/contract service in its independently verified native unit. Full background service and separately modelled direct operation are exclusive. Onsite electricity is an internal transfer when its fuels/assets/releases are modelled. Include idle, failed and shared duty allocated once; only the receipt node owns product delivery vehicle and cold-chain operation; other nodes' logistics are limited to their own incoming materials. Inputs already explicit in this node are excluded from this collection obligation. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_harvest`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_harvest` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_rejects` | `harvest`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Harvest incidental material and rejected biomass instances. Separate non-target animals, debris, damaged shrimp and disposed biomass by destination; any intended sale output must instead be a distinct product with its own handoff and attribution. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_harvest`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_harvest` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_other_releases` | `harvest`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other actual node-owned environmental release instances excluding separately listed fossil carbon dioxide. Conditional umbrella for separately owned actual combustion pollutants, biological/pond emissions including actual biogenic carbon dioxide, nutrient effluent, direct wastewater, refrigerant leakage, spillage and other releases as applicable to this node. Identify each substance/species, chemical reporting basis and receiving air/water/soil medium; keep independent measured/modelled amount and native unit. Exclude this node's fossil CO2 card and any supplier-service included releases. Product-delivery releases belong exclusively to receipt; other nodes' logistics releases are limited to their incoming materials. Dissolved nutrient loads are not total effluent volume; biomass waste is not automatically an elementary emission. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_harvest`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_harvest` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_wash_utilities_services_assets` | `wash`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual node-owned utility, fuel, equipment and external service instances. Conditional umbrella: instantiate each actual purchased electricity/provider, fuel grade, pump/aerator or other equipment, repair/capital replacement, input-material logistics/treatment/contract service in its independently verified native unit. Full background service and separately modelled direct operation are exclusive. Onsite electricity is an internal transfer when its fuels/assets/releases are modelled. Include idle, failed and shared duty allocated once; only the receipt node owns product delivery vehicle and cold-chain operation; other nodes' logistics are limited to their own incoming materials. Inputs already explicit in this node are excluded from this collection obligation. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_wash`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_wash` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_wash_raw_water` | `wash`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual direct untreated washing-water abstraction instances. Conditional direct abstraction only; identify water source and volume; exclude quantities already represented by supplied wash water. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Collect each actual instance amount for this row with `cp_wash`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_wash` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: m3 <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_wash_waste` | `wash`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual washing wastewater and solid reject instances. Separate effluent to treatment, removed debris and rejected whole shrimp by phase, measurement basis and destination; direct discharge belongs to actual release cards. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_wash`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_wash` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_wash_other_releases` | `wash`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other actual node-owned environmental release instances excluding separately listed fossil carbon dioxide. Conditional umbrella for separately owned actual combustion pollutants, biological/pond emissions including actual biogenic carbon dioxide, nutrient effluent, direct wastewater, refrigerant leakage, spillage and other releases as applicable to this node. Identify each substance/species, chemical reporting basis and receiving air/water/soil medium; keep independent measured/modelled amount and native unit. Exclude this node's fossil CO2 card and any supplier-service included releases. Product-delivery releases belong exclusively to receipt; other nodes' logistics releases are limited to their incoming materials. Dissolved nutrient loads are not total effluent volume; biomass waste is not automatically an elementary emission. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_wash`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_wash` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_utilities_services_assets` | `sort`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual node-owned utility, fuel, equipment and external service instances. Conditional umbrella: instantiate each actual purchased electricity/provider, fuel grade, pump/aerator or other equipment, repair/capital replacement, input-material logistics/treatment/contract service in its independently verified native unit. Full background service and separately modelled direct operation are exclusive. Onsite electricity is an internal transfer when its fuels/assets/releases are modelled. Include idle, failed and shared duty allocated once; only the receipt node owns product delivery vehicle and cold-chain operation; other nodes' logistics are limited to their own incoming materials. Inputs already explicit in this node are excluded from this collection obligation. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_sort`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_other_sale_lots` | `sort`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended sale-grade or destination shrimp lots. Conditional umbrella: enumerate every other intended sale lot with species, live/dead/chilled state, size grade, own mass, market destination and physical handoff; never aggregate them into reference shrimp or waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Collect each actual instance amount for this row with `cp_sort`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_rejects` | `sort`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Sorting rejected whole shrimp and incidental waste instances. Record each disposed or treatment-bound fraction separately from downgraded sale lots, with custody and destination; do not infer avoided production credit. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_sort`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_other_releases` | `sort`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other actual node-owned environmental release instances excluding separately listed fossil carbon dioxide. Conditional umbrella for separately owned actual combustion pollutants, biological/pond emissions including actual biogenic carbon dioxide, nutrient effluent, direct wastewater, refrigerant leakage, spillage and other releases as applicable to this node. Identify each substance/species, chemical reporting basis and receiving air/water/soil medium; keep independent measured/modelled amount and native unit. Exclude this node's fossil CO2 card and any supplier-service included releases. Product-delivery releases belong exclusively to receipt; other nodes' logistics releases are limited to their incoming materials. Dissolved nutrient loads are not total effluent volume; biomass waste is not automatically an elementary emission. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_sort`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_sort` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_chill_materials` | `chill`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual chilling additives, cleaning agents and refrigerant recharge instances. Conditional each actual material separately: formulation or refrigerant substance, purpose, delivered amount and active/product basis. This is an inventory requirement, not chemical, dose, temperature or safety advice. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_chill`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_chill` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_chill_utilities_services_assets` | `chill`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual node-owned utility, fuel, equipment and external service instances. Conditional umbrella: instantiate each actual purchased electricity/provider, fuel grade, pump/aerator or other equipment, repair/capital replacement, input-material logistics/treatment/contract service in its independently verified native unit. Full background service and separately modelled direct operation are exclusive. Onsite electricity is an internal transfer when its fuels/assets/releases are modelled. Include idle, failed and shared duty allocated once; only the receipt node owns product delivery vehicle and cold-chain operation; other nodes' logistics are limited to their own incoming materials. Inputs already explicit in this node are excluded from this collection obligation. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_chill`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_chill` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_chill_raw_water` | `chill`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual direct untreated ice-bath water abstraction instances. Conditional direct abstraction only; identify source, volume and owning pump; supplied-water quantities excluded. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Collect each actual instance amount for this row with `cp_chill`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_chill` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: m3 <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_chill_waste` | `chill`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual chilling waste transferred to treatment or disposal. Only actual waste transferred to treatment or disposal belongs here: separately record spent bath, meltwater and discarded whole-product losses by phase, quantity basis and actual recipient/destination. Direct carrier-water discharge belongs to the water balance and its actual pollutant substances/receiving medium belong to owned release cards; neither is automatically a waste transfer. Do not treat dilution as pollutant removal or discarded biomass as automatic elementary emissions. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_chill`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_chill` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_chill_other_releases` | `chill`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other actual node-owned environmental release instances excluding separately listed fossil carbon dioxide. Conditional umbrella for separately owned actual combustion pollutants, biological/pond emissions including actual biogenic carbon dioxide, nutrient effluent, direct wastewater, refrigerant leakage, spillage and other releases as applicable to this node. Identify each substance/species, chemical reporting basis and receiving air/water/soil medium; keep independent measured/modelled amount and native unit. Exclude this node's fossil CO2 card and any supplier-service included releases. Product-delivery releases belong exclusively to receipt; other nodes' logistics releases are limited to their incoming materials. Dissolved nutrient loads are not total effluent volume; biomass waste is not automatically an elementary emission. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_chill`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_chill` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pack_materials` | `pack`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual protective packaging and reusable container service instances. Record each insulation box, liner, label and returnable container in actual material/count/service units; record reuse trips, replacement, washing owner, losses and end-of-use. Packaging never changes the reference species or body state. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_pack`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_pack` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pack_utilities_services_assets` | `pack`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual node-owned utility, fuel, equipment and external service instances. Conditional umbrella: instantiate each actual purchased electricity/provider, fuel grade, pump/aerator or other equipment, repair/capital replacement, input-material logistics/treatment/contract service in its independently verified native unit. Full background service and separately modelled direct operation are exclusive. Onsite electricity is an internal transfer when its fuels/assets/releases are modelled. Include idle, failed and shared duty allocated once; only the receipt node owns product delivery vehicle and cold-chain operation; other nodes' logistics are limited to their own incoming materials. Inputs already explicit in this node are excluded from this collection obligation. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_pack`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_pack` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pack_waste` | `pack`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual packaging rejects and end-of-use material instances. Separate damaged single-use materials, retired reusable boxes and product losses, by treatment destination; a returned usable box is a custody record rather than waste. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_pack`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_pack` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_pack_other_releases` | `pack`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other actual node-owned environmental release instances excluding separately listed fossil carbon dioxide. Conditional umbrella for separately owned actual combustion pollutants, biological/pond emissions including actual biogenic carbon dioxide, nutrient effluent, direct wastewater, refrigerant leakage, spillage and other releases as applicable to this node. Identify each substance/species, chemical reporting basis and receiving air/water/soil medium; keep independent measured/modelled amount and native unit. Exclude this node's fossil CO2 card and any supplier-service included releases. Product-delivery releases belong exclusively to receipt; other nodes' logistics releases are limited to their incoming materials. Dissolved nutrient loads are not total effluent volume; biomass waste is not automatically an elementary emission. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_pack`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_pack` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_coldchain_materials` | `receipt`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual transit ice top-ups and cold-chain material instances. Conditional umbrella: separately record actual transit ice/water top-ups, coolant or refrigerant recharge, and other delivered cold-chain materials by substance/formulation, provider, native quantity and verified property/unit. Only receipt owns product-transit top-ups; pre-dispatch chilling inputs stay with chill. Do not add materials already included in a full cold-chain service. Free ice/water never enters accepted product mass. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_receipt`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_utilities_services_assets` | `receipt`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual node-owned utility, fuel, equipment and external service instances. Conditional umbrella: instantiate each actual purchased electricity/provider, fuel grade, pump/aerator or other equipment, repair/capital replacement, input-material logistics/treatment/contract service in its independently verified native unit. Full background service and separately modelled direct operation are exclusive. Onsite electricity is an internal transfer when its fuels/assets/releases are modelled. Include idle, failed and shared duty allocated once; only the receipt node owns product delivery vehicle and cold-chain operation; other nodes' logistics are limited to their own incoming materials. Inputs already explicit in this node are excluded from this collection obligation. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_receipt`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_returned_lots` | `receipt`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual returned or diverted intended shrimp product lots. Conditional still-intended product only: record actual state, destination, custody and fate outside reference acceptance; no automatic recovery, sale, or zero burden. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Collect each actual instance amount for this row with `cp_receipt`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_waste` | `receipt`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual transit or receipt waste transferred to treatment or disposal. Only actual treatment/disposal transfers belong here: record discarded rejected shrimp, transferred meltwater and damaged materials separately with quantity basis and actual recipient/destination. Direct carrier water stays in the water balance and actual pollutant substance/basis/medium in receipt release cards; meltwater is not automatically waste. Do not relabel returned saleable lots as waste. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_receipt`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_receipt_other_releases` | `receipt`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other actual node-owned environmental release instances excluding separately listed fossil carbon dioxide. Conditional umbrella for separately owned actual combustion pollutants, biological/pond emissions including actual biogenic carbon dioxide, nutrient effluent, direct wastewater, refrigerant leakage, spillage and other releases as applicable to this node. Identify each substance/species, chemical reporting basis and receiving air/water/soil medium; keep independent measured/modelled amount and native unit. Exclude this node's fossil CO2 card and any supplier-service included releases. Product-delivery releases belong exclusively to receipt; other nodes' logistics releases are limited to their incoming materials. Dissolved nutrient loads are not total effluent volume; biomass waste is not automatically an elementary emission. <br> - Flow property / unit: Actual instance property / native unit <br> - Amount rule: Collect each actual instance amount for this row with `cp_receipt`, attribute once under section 7, and divide by the same accepted net receipt mass A; retain its native unit and measurement/model evidence. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_receipt` <br> - Range: Provisional unresolved evidence marker; independent upper bound required; no empirical range, default or hard limit <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_instance <br> - Unit: native unit <br> - Basis: per 1 kg reference flow; each actual instance has an independent U_instance, never mixed-unit totals <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | eligibility | Check species/synonym, actual hatchery postlarvae and semi-intensive Tumbes brackish earthen-pond/outlet bag-net route against records; another route or final state requires another methodology or explicit review. |  |
| `v_reference` | reference | Require one accepted_whole_shrimp final output, matching reference name and same-lot denominator A > 0 at first processor receipt; free ice/water and tare excluded, head/organs/shell included, never frozen and before deheading/freezing documented. |  |
| `v_transfer` | node_links | Reconcile every node transfer id, crop/event/date, state and own quantity. Check washing-before-independent-grading order and packaging activation or bypass; early incidental removal remains harvest-owned. Do not impose seed/live/chilled/final mass equality; explain losses, other grades, rejection/returns and measurement uncertainty. |  |
| `v_ownership` | completeness | Review all crop phases including failed/nonproductive duty, utilities/materials, land/history, assets/replacement, service coverage and direct combustion/leakage/discharge by node. Check every shared consumer, period and burden ledger for omissions/duplicates; exclude separately listed fossil CO2 from other-release instances. |  |
| `v_native` | quantity_and_identity | Each applicable collection obligation expands into zero, one or multiple actual native-unit instances with independent identity, verified support and quantity evidence. A missing actual substance/provider/gate/property/unit is unresolved, never a generic fixed UUID; final TIDAS exchanges require concrete verified identities. |  |
| `v_ranges` | range_evidence | All 0..U_row/U_instance ranges below are provisional unresolved evidence markers with independently determined upper bounds, not empirical ranges, zero defaults or hard validation limits. For multi-formulation or multi-lot rows, each actual formulation/lot independently owns its U_row upper bound, including U_formulated_feed; there is no shared cap or mixed-identity total. Replace with reviewed data; exact 1..1 applies only to same accepted-lot A/A normalization. | `same-lot-normalization` |
| `v_disclosure` | finalization | Disclose performed/skipped checks, uncertainty, source age/applicability, unresolved quantities/identities, output allocation rationale/sensitivity and all qualifiers. Checker pass does not verify UUID detail or prove publication readiness; unresolved reference/support identities block final concrete datasets. |  |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after independent review and completed concrete bindings. |
| downstream_use | Foreground aquaculture package and downstream process/lifecyclemodel projections of this species/route/state/gate. |
| allowed_use | Traceable accepted chilled whole-shrimp lots whose route, upstream coverage, quantities and attribution match this PCR. |
| excluded_use | No proxy for other species, wild/live/frozen/headless/peeled products or intensive/freshwater systems; no food safety, residue, legal compliance, carbon-neutrality or biodiversity claim. |
| required_metadata | All reference qualifiers; provider/gates; farm/pond/crop and reporting dates; complete process/transfer map; native exchanges; upstream service scope; land/asset life; allocation and quantitative evidence. |
| required_quality_disclosure | Failed crop inclusion, meter/sampling coverage, uncertain biomass/fates, missing ranges, unresolved bindings, selected/sensitive allocation, source age and performed/skipped checks. |
| update_trigger | Changed species, source or seed stage, pond/harvest mode, feed/management, land/assets, product state/gate, service ownership, source evidence, quantity evidence or allocation. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-whiteleg-shrimp-2009` | official_guidance | FAO 2009. Briggs M. Penaeus vannamei. Cultured aquatic species fact sheets. https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_whitelegshrimp.htm; retrieved 2026-10-12 | Technical context for hatchery seed, semi-intensive ponds, outlet bag-net harvest and wash/sort/ice-water killing/insulated delivery; no proof of every local farm practice or quantity defaults. |
| `fao-peru-shrimp-2025` | official_guidance | FAO 2025-06-03. Boosting biosecurity in Peru’s shrimp farming industry for sustainable livelihoods. https://www.fao.org/in-action/kofap/news-and-events/news/detail/Boosting-biosecurity-in-Peru-s-shrimp-farming-industry-for-sustainable-livelihoods-/en; retrieved 2026-10-12 | Corroboration of Tumbes whiteleg shrimp and semi-intensive industry location; not evidence of a particular harvest, wash or handling configuration. |
| `same-lot-normalization` | method_factor | This PCR sections 4 and 8: accepted net mass A > 0, exact same-lot normalization identity A/A = 1. | Only final reference output 1..1; no evidence for any nonfinal amount or yield. |
