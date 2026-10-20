---
pcr_id: pcr.farmed-whole-chilled-sea-cage-gilthead-seabream
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed whole chilled sea-cage gilthead seabream

## 1. Scope and Applicability

This PCR covers Greek Mediterranean marine net-cage growout of purchased hatchery juveniles of Sparus aurata, crowding and dip-net removal, actual ice-water killing/chilling, grade/destination sorting and actual presentation, ending with acceptance by the first physical recipient of the farmer’s product of whole chilled fish. Head, guts and native body remain; the product is raw and has never been frozen. Cage growout and crowd/dip-net harvest are distinct responsibilities: growth produces standing live biomass, physical removal produces collected live fish, and killing/chilling produces the chilled state. FAO documents the eligible route; producer sources corroborate a Greek whole-round fresh market, not any particular farm's operating conditions.

Exclude pond, lagoon, land-tank, wild-capture, vacuum-pump harvest, other species, live final delivery, gutted/scaled/gilled forms, fillets, cooked products, frozen/thawed products and post-recipient distribution/retail. Other actual technologies require a boundary review rather than a presumed equivalence. This is an inventory methodology, not a welfare, food-safety or current regulatory-compliance recommendation. No prescribed CO2 addition, temperature, fasting duration, shelf life, stocking density, growth duration, feed conversion ratio or survival is adopted.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-whole-chilled-sea-cage-gilthead-seabream |
| classification_refs | cpc:3.0:04292; narrower than Other farmed fish, live, fresh or chilled |
| covered_products | Greek marine net-cage farmed Sparus aurata, whole head-on ungutted raw never-frozen chilled at acceptance by the first physical recipient of the farmer’s product |
| excluded_products | Other taxa; excluded cultivation/harvest routes; live final fish; gutted, filleted, frozen, thawed, cooked fish; post-gate retail |
| representative_product | One lot of whole chilled sea-cage gilthead seabream accepted net of ice, water and tare |
| production_route | Purchased hatchery juveniles; receipt/stocking; marine cages; crowd/dip-net harvest; actual ice-water kill/chill; grade/destination sorting; actual optional packaging; delivery to first physical recipient |
| market_state | Whole round fresh/chilled, with native head and viscera retained; never frozen |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted whole farmed Sparus aurata in the declared chilled state at the first physical recipient of the farmer’s product |
| How much | 1 kg accepted net fish |
| How well | Whole, head-on, ungutted, raw, never frozen; actual condition and acceptance evidence, excluding ice, free water, packaging and tare |
| How long or cycle | Actual juvenile receipt, cage cohort growout, partial harvests, chilling/sorting runs and delivery periods; include preparation, failed duty, idle support, replacements and terminal events attributable to those cohorts |
| reference_flow_link | `accepted_chilled_seabream` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole ungutted head-on raw never-frozen chilled farmed Sparus aurata at acceptance by the first physical recipient of the farmer’s product |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Sparus aurata; hatchery juvenile origin and receipt state; Greece/site; marine cage and cohort; crowd/dip-net event; actual ice-water intervention and temperature history; whole head/guts retained; never-frozen evidence; grade; actual package or bypass; first physical recipient/location/time; net-mass exclusions; reporting periods; upstream/foreground ownership |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_net_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine accepted net fish A by calibrated weighing and subtract measured ice, free water and tare at the same lot/gate; all rows use per 1 kg reference flow, based on actual attributable quantity divided by A. A must be positive. |
| juvenile_count_mass | received_juveniles; stocked_juveniles; growout_seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep observed count and mass independently. Convert count only with representative same-batch sampled individual mass and uncertainty; pre-stocking deaths are received but not stocked survivors. |
| native_carriers | all inventory rows | Actual row property | kg; kWh; t*km | Retain each material/substance native mass, metered electricity and transport load-distance. Record energy factors, density, active content and service scope before any physical conversion; do not confuse formulated product, elemental nutrient or active substance basis. |
| internal_handoffs | all inventory rows | Actual row property | actual native unit | Pair transfer ids and actual quantities; never force an internal fish transfer to 1 kg. All normalization denominators refer to the same final accepted lot A. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased hatchery-reared live Sparus aurata juveniles physically received by the Greek marine-cage farm, with supplier nursery and transport scope declared |
| starting_condition_role | Upstream-complete biological input; receipt/stocking loss remains foreground; growout starts from surviving stocked fish |
| product_classification_scope | Semantic species/state/route/gate boundary above; CPC mapping is context, not production truth |
| recursive_input_rule | If the same category is purchased or transferred, retain actual state/gate and independently upstream-complete dataset; stop recursive foreground expansion at the declared supplier boundary without granting zero burden |
| upstream_dataset_requirement | Juvenile hatchery/nursery, feed, supplied materials/ice/energy, infrastructure and purchased services require compatible upstream datasets; disclose gaps and transport scope |
| disclosure | Declare cage/cohort/location, receiving gate, all periods/phases, transfers, support consumers, actual optional operations, input ownership, output destinations, exclusions and unresolved environmental/identity evidence |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all processes | Separate managed cage growout, crowd/dip-net harvest and ice-water state change. Do not infer vacuum harvest, universal washing, mandatory gas addition or zero cage support energy. | fao-seabream-2009 |
| boundary_gate | first_receipt | End at first physical-recipient acceptance, which can be at farm or a farmer-served receiving site; an invoice or remote title transfer alone does not establish the gate. Include all actual transport/holding before that physical gate regardless of farmer or buyer responsibility; reconcile service scope and ownership to prevent omission or repetition. | |
| boundary_periods | cage_growout; shared_support | Link receipt, stocked cohort, growth, partial harvest, preparation/cleaning/changeover, idle/failed duty, replacement and decommissioning to actual periods. Closing live stock carries attributable burden forward; do not discard failed-cohort burdens or reassign them twice. | |
| boundary_pack | sort_destination; pack_present; first_receipt | Record actual packaging activation. Direct sorting-to-delivery bypass and packaged delivery preserve the same whole chilled final reference; measure the actual transfer once. Packaging is protection/presentation; distribution is owned by first_receipt. | |
| boundary_support | shared_support | One ledger owns vessels, cages, moorings, nets, tubs, feeders, pumps, cold facilities and actual utilities/services. Enumerate consuming nodes/cohorts/periods; exclude included fuel/assets/releases when a complete service is purchased. | |
| boundary_fates | all processes | Separate intended sale outputs, retained live stock, collected waste to actual treatment, direct resource intake and substance-specific environmental releases. Record actual destination/medium and treatment ownership; carrier water is not automatically waste or pollutant. | fao-seabream-2009 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receive_stock | Juvenile receipt and cage stocking | required |  | foreground juvenile receipt and stocking | received and stocked juvenile mass |
| cage_growout | Marine net-cage growout | required |  | managed biological production | live harvest-ready biomass by cohort |
| crowd_harvest | Crowding and dip-net harvest | required |  | physical removal from cage | collected live whole fish |
| kill_chill | Ice-water killing and chilling | required |  | preservation and state transformation | whole chilled never-frozen fish |
| sort_destination | Grade and destination sorting | required |  | grade/destination classification | all declared accepted and other intended grade outputs |
| pack_present | Actual packaging and presentation | conditional | actual packaging or reusable-container presentation occurs before first physical receipt, regardless of operator; record burden ownership and exclude repeated service burdens | product protection/presentation, excluding distribution | whole chilled fish in actual presentation |
| first_receipt | Pre-receipt delivery and first physical-recipient acceptance | required |  | pre-gate logistics and final handover | accepted net whole chilled fish A |
| shared_support | Shared vessels, utilities and infrastructure | required |  | single burden owner for shared duties | actual node/cohort/period duty shares |

All node inventories use the same accepted-lot basis. Production is cage-cohort batch production with actual partial-harvest and operation-run indexing; concurrent cohorts and shared reporting periods remain separately traceable. Support is supplied once through the ledger, not duplicated as identical inputs at every consuming node. Each applicable Section 8 collection obligation must be instantiated independently for each actual material, service, destination or pollutant. A symbolic upper U_row_instance is an unresolved quantity in that instance's native unit; it is neither a unit nor an empirical default/cap. Zero requires evidence of absence, not missing records.

### Process: Juvenile receipt and cage stocking (`receive_stock`)

#### Inputs

##### Product flows

###### Purchased live Sparus aurata juveniles at farm receipt (`received_juveniles`)

Hatchery-origin live juveniles at receipt, including later pre-stocking deaths; retain count and measured mass, upstream hatchery/nursery and supplied transport boundary.

- Selected flow: Purchased live Sparus aurata juveniles at farm receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable received_juveniles instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receive_stock`
- Range: Provisional unresolved evidence bound for each received_juveniles instance; replace U_received_juveniles_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_received_juveniles_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

##### Elementary flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

#### Outputs

##### Product flows

###### Live Sparus aurata juveniles stocked into marine cages (`stocked_juveniles`)

Surviving stocked fish passed to cage growout; pair transfer id and actual net mass with growout input, not the final reference quantity.

- Selected flow: Live Sparus aurata juveniles stocked into marine cages
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable stocked_juveniles instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receive_stock`
- Range: Provisional unresolved evidence bound for each stocked_juveniles instance; replace U_stocked_juveniles_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_stocked_juveniles_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

### Process: Marine net-cage growout (`cage_growout`)

#### Inputs

##### Product flows

###### Live Sparus aurata juveniles stocked into marine cages (`growout_seed`)

Paired same-cohort input from stocked_juveniles, with count/mass uncertainty retained.

- Selected flow: Live Sparus aurata juveniles stocked into marine cages
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable growout_seed instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cage_growout`
- Range: Provisional unresolved evidence bound for each growout_seed instance; replace U_growout_seed_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_seed_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual formulated growout feed supplied to cages (`formulated_feed`)

One concrete exchange per formulation/supplier instance, as-fed mass and composition; reconcile offered feed, stock changes and returned feed without a default feed conversion ratio.

- Selected flow: Actual formulated growout feed supplied to cages
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable formulated_feed instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cage_growout`
- Range: Provisional unresolved evidence bound for each formulated_feed instance; replace U_formulated_feed_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_formulated_feed_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

##### Elementary flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

#### Outputs

##### Product flows

###### Live whole Sparus aurata biomass released for harvest (`harvest_ready`)

Measured same-cohort live biomass handed to crowd_harvest at each harvest event; include partial harvests and closing live stocks separately.

- Selected flow: Live whole Sparus aurata biomass released for harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable harvest_ready instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cage_growout`
- Range: Provisional unresolved evidence bound for each harvest_ready instance; replace U_harvest_ready_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_ready_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual growout fish escapes to marine environment (`growout_escapes`)

Actual growout escape event, mass and count with uncertainty; distinguish from collected mortalities and harvest-event escapes; disclose uncharacterized ecological effects.

- Selected flow: Actual growout fish escapes to marine environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable growout_escapes instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cage_growout`
- Range: Provisional unresolved evidence bound for each growout_escapes instance; replace U_growout_escapes_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_escapes_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Crowding and dip-net harvest (`crowd_harvest`)

#### Inputs

##### Product flows

###### Live whole Sparus aurata biomass released for harvest (`harvest_biomass`)

Same event and mass as harvest_ready after documented stock correction; crowding and dip-net removal begin here.

- Selected flow: Live whole Sparus aurata biomass released for harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable harvest_biomass instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crowd_harvest`
- Range: Provisional unresolved evidence bound for each harvest_biomass instance; replace U_harvest_biomass_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_harvest_biomass_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

##### Elementary flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

#### Outputs

##### Product flows

###### Dip-net collected live whole Sparus aurata (`collected_live_fish`)

Actual net fish sent directly into ice-water killing/chilling, excluding incidental water, gear and mortalities.

- Selected flow: Dip-net collected live whole Sparus aurata
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable collected_live_fish instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crowd_harvest`
- Range: Provisional unresolved evidence bound for each collected_live_fish instance; replace U_collected_live_fish_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collected_live_fish_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual escaped farmed fish to marine environment (`fish_escape`)

Record actual uncontained escape mass and count with uncertainty and event; disclose ecological effects qualitatively where no supported characterization exists; no avoided-product credit.

- Selected flow: Actual escaped farmed fish to marine environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable fish_escape instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crowd_harvest`
- Range: Provisional unresolved evidence bound for each fish_escape instance; replace U_fish_escape_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_fish_escape_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Ice-water killing and chilling (`kill_chill`)

#### Inputs

##### Product flows

###### Dip-net collected live whole Sparus aurata (`chill_live_fish`)

Paired collected_live_fish transfer into the actual ice-water operation.

- Selected flow: Dip-net collected live whole Sparus aurata
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable chill_live_fish instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_kill_chill`
- Range: Provisional unresolved evidence bound for each chill_live_fish instance; replace U_chill_live_fish_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_chill_live_fish_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ice supplied for farmed-fish killing and chilling (`chilling_ice`)

Actual delivered ice and water-source/production boundary; do not substitute a capture-fishery ice identity or repeat electricity already included in purchased ice.

- Selected flow: Ice supplied for farmed-fish killing and chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable chilling_ice instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_kill_chill`
- Range: Provisional unresolved evidence bound for each chilling_ice instance; replace U_chilling_ice_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_chilling_ice_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water supplied for the actual ice-water bath (`chilling_water`)

Separate supplied water instances by source; measure volume and density where converting to mass; actual seawater abstraction belongs to an elementary input instance when directly abstracted.

- Selected flow: Water supplied for the actual ice-water bath
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable chilling_water instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_kill_chill`
- Range: Provisional unresolved evidence bound for each chilling_water instance; replace U_chilling_water_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_chilling_water_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

##### Elementary flows

###### Directly abstracted seawater for chilling (`direct_chill_water`)

Conditional direct marine water intake not supplied as a purchased product; same physical water must not also appear in chilling_water.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable direct_chill_water instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_kill_chill`
- Range: Provisional unresolved evidence bound for each direct_chill_water instance; replace U_direct_chill_water_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_direct_chill_water_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


#### Outputs

##### Product flows

###### Whole ungutted head-on raw never-frozen chilled Sparus aurata after chilling (`chilled_fish`)

Actual net fish after intervention goes to sorting; retain measured condition, native body parts and transfer id.

- Selected flow: Whole ungutted head-on raw never-frozen chilled Sparus aurata after chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable chilled_fish instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_kill_chill`
- Range: Provisional unresolved evidence bound for each chilled_fish instance; replace U_chilled_fish_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_chilled_fish_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Grade and destination sorting (`sort_destination`)

#### Inputs

##### Product flows

###### Whole ungutted head-on raw never-frozen chilled Sparus aurata after chilling (`sorting_fish`)

Paired chilled_fish input; preserve lot, state and actual incoming net mass.

- Selected flow: Whole ungutted head-on raw never-frozen chilled Sparus aurata after chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable sorting_fish instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort_destination`
- Range: Provisional unresolved evidence bound for each sorting_fish instance; replace U_sorting_fish_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sorting_fish_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

##### Elementary flows

#### Outputs

##### Product flows

###### Selected whole chilled Sparus aurata for declared reference channel (`selected_chilled_fish`)

Actual selected grade to packaging when active or directly to delivery when bypassed; does not become 1 kg before final recipient acceptance.

- Selected flow: Selected whole chilled Sparus aurata for declared reference channel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable selected_chilled_fish instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sort_destination`
- Range: Provisional unresolved evidence bound for each selected_chilled_fish instance; replace U_selected_chilled_fish_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_selected_chilled_fish_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Actual packaging and presentation (`pack_present`)

#### Inputs

##### Product flows

###### Selected whole chilled Sparus aurata for declared reference channel (`packing_fish`)

Same selected_chilled_fish lot only when packaging active; retain actual transfer mass.

- Selected flow: Selected whole chilled Sparus aurata for declared reference channel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable packing_fish instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_present`
- Range: Provisional unresolved evidence bound for each packing_fish instance; replace U_packing_fish_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_packing_fish_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

##### Elementary flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

#### Outputs

##### Product flows

###### Whole chilled Sparus aurata in actual presentation for dispatch (`presented_chilled_fish`)

One instance per actual intended whole-chilled-fish grade/destination, including damaged fish actually sold as a separate grade, with real recipient and net mass; declared-channel fish proceeds to first_receipt. Keep packaging material ledger separate from fish mass and preserve unprocessed whole condition.

- Selected flow: Whole chilled Sparus aurata in actual presentation for dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable presented_chilled_fish instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_present`
- Range: Provisional unresolved evidence bound for each presented_chilled_fish instance; replace U_presented_chilled_fish_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presented_chilled_fish_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Pre-receipt delivery and first physical-recipient acceptance (`first_receipt`)

#### Inputs

##### Product flows

###### Whole chilled Sparus aurata dispatched along the actual presentation path (`delivery_fish`)

Receive presented_chilled_fish when pack active or selected_chilled_fish when bypassed, never both for one lot; measure actual net input and trace transfers.

- Selected flow: Whole chilled Sparus aurata dispatched along the actual presentation path
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable delivery_fish instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_first_receipt`
- Range: Provisional unresolved evidence bound for each delivery_fish instance; replace U_delivery_fish_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_fish_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual ice supplied for pre-receipt holding and delivery (`delivery_topup_ice`)

Conditional actual newly supplied top-up ice by source/leg, distinct from residual packing ice; retain scope of purchased freight/cold services to avoid duplicate ice or ice-production energy.

- Selected flow: Actual ice supplied for pre-receipt holding and delivery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable delivery_topup_ice instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_first_receipt`
- Range: Provisional unresolved evidence bound for each delivery_topup_ice instance; replace U_delivery_topup_ice_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_topup_ice_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

##### Elementary flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

#### Outputs

##### Product flows

###### Whole ungutted head-on raw never-frozen chilled farmed Sparus aurata at acceptance by the first physical recipient of the farmer’s product (`accepted_chilled_seabream`)

The actual reference output: same-lot accepted net fish A excluding ice, free water, packaging and tare, first physical recipient identified; final amount A/A = 1 kg.

- Selected flow: Whole ungutted head-on raw never-frozen chilled farmed Sparus aurata at acceptance by the first physical recipient of the farmer’s product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_first_receipt`
- Range: Same-lot accepted net fish identity A/A
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

### Process: Shared vessels, utilities and infrastructure (`shared_support`)

#### Inputs

##### Product flows

###### Actual purchased electricity for farm and cold operations (`support_electricity`)

Meter each voltage/provider supply and node/cohort/period share, including pumps, feeders, chilling, cold storage and actual cleaning; no blanket zero-energy assumption.

- Selected flow: Actual purchased electricity for farm and cold operations
- Flow property / unit: Electrical energy / kWh
- Amount rule: Actual attributable support_electricity instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared_support`
- Range: Provisional unresolved evidence bound for each support_electricity instance; replace U_support_electricity_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_support_electricity_instance
  - Unit: kWh
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

##### Elementary flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

#### Outputs

##### Product flows

No default exchange; record a real instance only if it crosses this node's boundary under the declared route and ownership.

##### Waste flows

##### Elementary flows

###### Carbon dioxide, fossil, to air from actual owned combustion (`support_fossil_co2`)

Conditional fossil carbon fraction only; derive from actual fuel composition or measured emissions, excluding emissions inside purchased complete services.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable support_fossil_co2 instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared_support`
- Range: Provisional unresolved evidence bound for each support_fossil_co2 instance; replace U_support_fossil_co2_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_support_fossil_co2_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carbon dioxide, biogenic, to air from actual owned combustion (`support_biogenic_co2`)

Conditional biogenic carbon fraction separately from fossil; no assumption that unknown carbon origin is fossil or that biogenic CO2 is physically zero.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual attributable support_biogenic_co2 instance quantity divided by accepted net fish A; retain raw native quantity and instance identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared_support`
- Range: Provisional unresolved evidence bound for each support_biogenic_co2 instance; replace U_support_biogenic_co2_instance from reviewed foreground evidence
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_support_biogenic_co2_instance
  - Unit: kg
  - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| attribution_output_set | all processes | Enumerate each accepted reference grade, other marketed grade/live sale, closing live stock and any actual intended recovery output with net quantity and physical handoff. Mortalities, unsold rejects and collected residues are wastes unless an evidenced intended product function and actual recipient justify another classification; no automatic substitution credit. | |
| attribution_precedence | cage_growout; sort_destination | First subdivide measured cohort/event/grade-specific duties. For irreducible same-species whole-fish joint growout or sorting burdens use actual net fish mass of all intended outputs at the common separation gate; carry grade-specific post-separation duty directly. Explain why mass represents physical production and test economic allocation when value differences materially change conclusions; disclose data and sensitivity, never choose retrospectively for a preferred result. | |
| attribution_period | cage_growout; shared_support | Index phases and periods, opening/closing live stock and partial harvests. Attribute measured use to cohorts; carry work-in-progress burden once into subsequent harvests. Use evidenced service-life and actual duty records for replacements/assets, including downtime, failed cycles and termination; no universal lifetime, survival or cycle yield. | |
| attribution_shared | shared_support | List every consuming node, cohort and period for each vessel, cage/net/mooring, tub, cold store or contracted service. Prefer meters and direct duty; otherwise use documented causal operating-hour, capacity-time or material-use shares. Reconcile shares to one owned burden, disclose idle/failed-duty assignment and sensitivity to a plausible alternative. | |
| attribution_no_duplicate | all processes | Pair physical transfers without a second upstream burden. Purchased complete services replace their included fuels/utilities/assets/direct releases; purchased ice includes its own production energy. Route each final lot through packaging or bypass once and do not count identical handoffs as separate sales. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_receive_stock | receive_stock | Actual juvenile receipt and cage stocking exchanges and instance-specific fates | Measured logs, supplier/transfer records and documented calculation inputs | hatchery; species; batch; receipt and stocking dates; received count/mass; sampled individual mass; surviving stocked count/mass; transport; pre-stocking deaths; destination; row/instance id; native quantity; attributable share; accepted lot A | Reconcile hatchery delivery to counted receipt and independently measured or sampled mass; record losses before stocking, cage transfer ids and upstream transport. Establish independent U_row_instance and uncertainty from retained evidence. | kg; count; kWh; t*km as applicable | Each input/output event and support meter interval | Entire attributable cohort/run and preparation through gate, including failed/idle duty | Actual juvenile receipt and cage stocking location and its consuming cohorts | per 1 kg reference flow | Calibrated instruments; dated lot-linked logs; supplier scope; destination receipts; method and uncertainty audit |
| cp_cage_growout | cage_growout | Actual marine net-cage growout exchanges and instance-specific fates | Measured logs, supplier/transfer records and documented calculation inputs | cage/cohort; stocking; biomass; each feed formulation and lot; offered/returned feed; management substance and active content; mortalities; escapes; excretion model; cage cleaning; harvests; closing stock; row/instance id; native quantity; attributable share; accepted lot A | Maintain cage-cohort daily feed and health logs, biomass sampling and mortality/escape records; reconcile opening and closing stocks and every partial harvest; estimate each nutrient substance using measured composition and documented retention/fate. Establish independent U_row_instance and uncertainty from retained evidence. | kg; count; kWh; t*km as applicable | Each input/output event and support meter interval | Entire attributable cohort/run and preparation through gate, including failed/idle duty | Actual marine net-cage growout location and its consuming cohorts | per 1 kg reference flow | Calibrated instruments; dated lot-linked logs; supplier scope; destination receipts; method and uncertainty audit |
| cp_crowd_harvest | crowd_harvest | Actual crowding and dip-net harvest exchanges and instance-specific fates | Measured logs, supplier/transfer records and documented calculation inputs | cage/cohort; harvest event; pre-harvest withdrawal; crowd and dip-net duty; incoming biomass; collected fish mass; incidental material; deaths; escapes; transfer id; row/instance id; native quantity; attributable share; accepted lot A | Weigh collected fish net of carrier water and gear; link the crowd/dip-net event to cage biomass removed, mortality, incidental material and transfer into chilling. Establish independent U_row_instance and uncertainty from retained evidence. | kg; count; kWh; t*km as applicable | Each input/output event and support meter interval | Entire attributable cohort/run and preparation through gate, including failed/idle duty | Actual crowding and dip-net harvest location and its consuming cohorts | per 1 kg reference flow | Calibrated instruments; dated lot-linked logs; supplier scope; destination receipts; method and uncertainty audit |
| cp_kill_chill | kill_chill | Actual ice-water killing and chilling exchanges and instance-specific fates | Measured logs, supplier/transfer records and documented calculation inputs | harvest lot; live fish net mass; ice source and mass; water source and volume; actual added gas/substance; tub; times; measured temperatures; chilled fish mass; drained water; rejects; gas fate; row/instance id; native quantity; attributable share; accepted lot A | Record actual ice-water intervention, inputs, before/after temperatures and lot mass; separate fish from ice, free water and tubs; determine water treatment/release destination and any actual gas addition/release without prescribing a welfare method. Establish independent U_row_instance and uncertainty from retained evidence. | kg; count; kWh; t*km as applicable | Each input/output event and support meter interval | Entire attributable cohort/run and preparation through gate, including failed/idle duty | Actual ice-water killing and chilling location and its consuming cohorts | per 1 kg reference flow | Calibrated instruments; dated lot-linked logs; supplier scope; destination receipts; method and uncertainty audit |
| cp_sort_destination | sort_destination | Actual grade and destination sorting exchanges and instance-specific fates | Measured logs, supplier/transfer records and documented calculation inputs | incoming chilled lot; net mass; actual grade criteria; accepted grade; each other sale grade/destination; rejects; buyer/transfer; cleaning if actual; row/instance id; native quantity; attributable share; accepted lot A | Weigh every actual grade and rejected fraction independently, retain criteria and destinations, and reconcile incoming mass; record washing only if it occurred and its own inputs/fates. Establish independent U_row_instance and uncertainty from retained evidence. | kg; count; kWh; t*km as applicable | Each input/output event and support meter interval | Entire attributable cohort/run and preparation through gate, including failed/idle duty | Actual grade and destination sorting location and its consuming cohorts | per 1 kg reference flow | Calibrated instruments; dated lot-linked logs; supplier scope; destination receipts; method and uncertainty audit |
| cp_pack_present | pack_present | Actual packaging and presentation exchanges and instance-specific fates | Measured logs, supplier/transfer records and documented calculation inputs | fish lot; input/output net mass; package material and tare; new/reused status; rotations; losses; ice at pack; actual package rejects; each intended sale grade/destination and recipient; melt/carrier-water quantity; treatment recipient or release medium; next handoff; row/instance id; native quantity; attributable share; accepted lot A | Observe actual container/liner/label use and weigh tare; reconcile net fish and packaging separately; attribute reusable items by evidenced rotations and record loss and end-of-use ownership. Establish independent U_row_instance and uncertainty from retained evidence. | kg; count; kWh; t*km as applicable | Each input/output event and support meter interval | Entire attributable cohort/run and preparation through gate, including failed/idle duty | Actual packaging and presentation location and its consuming cohorts | per 1 kg reference flow | Calibrated instruments; dated lot-linked logs; supplier scope; destination receipts; method and uncertainty audit |
| cp_first_receipt | first_receipt | Actual pre-receipt delivery and first physical-recipient acceptance exchanges and instance-specific fates | Measured logs, supplier/transfer records and documented calculation inputs | lot; direct sort or package path; departure/receipt time and location; carrier/distance/load; actual temperature record; gross mass; ice/free water/tare; accepted net mass A; rejected/returned fish and fate; actual resale grade/destination/recipient/net mass; top-up ice and residual packing ice; melt/carrier-water quantity and treatment/release destination; recipient signature; row/instance id; native quantity; attributable share; accepted lot A | Match dispatch and physical receipt by lot; weigh accepted whole fish net of free water, ice and tare on calibrated equipment; identify recipient and rejected returns; include all actual pre-receipt transport and cold holding regardless of farmer/buyer responsibility, once by actual service scope. Establish independent U_row_instance and uncertainty from retained evidence. | kg; count; kWh; t*km as applicable | Each input/output event and support meter interval | Entire attributable cohort/run and preparation through gate, including failed/idle duty | Actual pre-receipt delivery and first physical-recipient acceptance location and its consuming cohorts | per 1 kg reference flow | Calibrated instruments; dated lot-linked logs; supplier scope; destination receipts; method and uncertainty audit |
| cp_shared_support | shared_support | Actual shared vessels, utilities and infrastructure exchanges and instance-specific fates | Measured logs, supplier/transfer records and documented calculation inputs | asset/service id; vessel/cage/mooring/net/tub/cold store; consuming node and cohort; period; meter/fuel; fuel origin; material replacements; service completeness; duty hours; waste; direct pollutant substance/medium; decommissioning; row/instance id; native quantity; attributable share; accepted lot A | Meter or reconcile purchase-stock-use for each carrier and asset; log node/cohort/period duty and idle/failed duty; allocate one support ledger to consumers; retain complete-service scope and measured or documented emission method. Establish independent U_row_instance and uncertainty from retained evidence. | kg; count; kWh; t*km; actual native service unit as applicable | Each input/output event and support meter interval | Entire attributable cohort/run and preparation through gate, including failed/idle duty | Actual shared vessels, utilities and infrastructure location and its consuming cohorts | per 1 kg reference flow | Calibrated instruments; dated lot-linked logs; supplier scope; destination receipts; method and uncertainty audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_normalization | all inventory rows | For each actual row instance, divide the attributable native quantity by the same positive accepted net fish A; retain raw quantities and attribution ledger. The accepted final same-lot fish amount is A/A = 1 kg. | Native quantity; share ledger; accepted net fish A; cp_first_receipt | Native row-unit quantity per 1 kg reference flow | |
| transfer_balance | all inventory rows | Reconcile paired transfers by event, lot, actual state and net quantity. Opening stock plus received/produced quantities equals intended outputs, remaining stock, recorded losses and separately evidenced fate terms within uncertainty; biological growth and nutrient flows require composition evidence, not a simple fish-mass-only equation. | Stock/transfer logs; composition; fate records; uncertainty | Reconciliation and unexplained residual | |
| conversion_evidence | all inventory rows | Count times representative same-batch mean individual mass yields fish mass; volume times measured source-appropriate density yields water mass; nutrient/active quantities use measured composition. Keep originals, conversion factor, temperature/basis and uncertainty; no generic species size or feed factor. | Counts; samples; measured volume/density; formulation and composition | Traceable physical-unit conversions | |
| release_accounting | collect_marine_nutrient_release; collect_chill_direct_releases; collect_actual_sort_water_release; support_fossil_co2; support_biogenic_co2; collect_support_other_releases | Derive each substance and medium from measurement or documented composition/fate model. Separate fossil and biogenic carbon, dissolved and gaseous fates, collected treatment transfers and direct releases; do not infer an elementary UUID or factor from an aggregate label. | Substance-specific records; fuel/carbon origin; retention and treatment data; model boundary | Substance/medium-specific releases and uncertainty | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity_gate | reference and all transfers | Establish species, origin, actual route, state, whole body, never-frozen history and first physical receipt; current market representation alone is insufficient. | Hatchery/site logs; harvest/chilling records; signed physical receipt |
| dq_quantity | all inventory rows | Keep row-instance native unit, independent range evidence, positive accepted net A, conversion sample coverage and uncertainty. Provisional U quantities are evidence gaps and do not certify empirical plausibility. | Raw weighed/metered records; calibration; reviewable upper-bound derivation |
| dq_complete_fates | all processes | Enumerate intended sale grades, mortalities, escapes, leftovers, water intake/return, cleaning, actual additives, refrigerants, treatment and uncharacterized ecological pathways. Absence needs a documented check. | Output/destination ledger; substance analysis; missing-data register |
| dq_attribution | shared_support; cage_growout | Trace each shared consumer/period, failed duty, stock carryover, asset replacement and service scope; reconcile to totals without duplicated burdens. | Duty ledger; stock roll-forward; supplier scope and sensitivity |
| dq_binding | all inventory rows | Verify concrete identities/property/unit support for actual exchanges; collection obligations require actual-instance verification. Unresolved identities block concrete publication. | Retained detail evidence and actual-instance semantic review |
| `collect_seed_transport` | `receive_stock`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Juvenile delivery transport service. Actual juvenile transport not already included in the purchased juvenile dataset; link load, distance and delivery conditions. <br> - Flow property / unit: Transport work / t*km <br> - Amount rule: Actual attributable collect_seed_transport instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receive_stock` <br> - Range: Provisional unresolved evidence bound for each collect_seed_transport instance; replace U_seed_transport_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_seed_transport_instance <br> - Unit: t*km <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_stocking_losses` | `receive_stock`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Pre-stocking mortalities and receipt residues to actual treatment. Separate each dead-fish, packaging or residue instance and actual treatment destination; record loss and not a sold co-product by default. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_stocking_losses instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_receive_stock` <br> - Range: Provisional unresolved evidence bound for each collect_stocking_losses instance; replace U_stocking_losses_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_stocking_losses_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_management_inputs` | `cage_growout`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual farm management substances. Conditional each actual disinfectant, medicine, oxygen or cleaning substance with formulation and active basis; no presumed treatment or dosage. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_management_inputs instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_cage_growout` <br> - Range: Provisional unresolved evidence bound for each collect_management_inputs instance; replace U_management_inputs_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_management_inputs_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_other_outputs` | `cage_growout`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended sale outputs from cage production. Conditional independently identified live sale or other intentionally marketed output; retain species/state, recipient, net mass and attribution; do not invent a sale outlet for losses. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_growout_other_outputs instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_cage_growout` <br> - Range: Provisional unresolved evidence bound for each collect_growout_other_outputs instance; replace U_growout_other_outputs_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_other_outputs_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_growout_collected_waste` | `cage_growout`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Collected growout mortalities, feed residues and net-cleaning residues to treatment. Each actual collected material and treatment destination separately; uncollected marine releases are not a treatment transfer. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_growout_collected_waste instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_cage_growout` <br> - Range: Provisional unresolved evidence bound for each collect_growout_collected_waste instance; replace U_growout_collected_waste_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_growout_collected_waste_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_marine_nutrient_release` | `cage_growout`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual nutrient and organic-substance releases to seawater. Conditional one exchange per established substance/species and marine receiving medium, with N/P/organic basis, feed composition, retention and release pathway; do not turn total water or unspecified organic matter into a fixed pollutant. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_marine_nutrient_release instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_cage_growout` <br> - Range: Provisional unresolved evidence bound for each collect_marine_nutrient_release instance; replace U_marine_nutrient_release_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_marine_nutrient_release_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_harvest_collected_loss` | `crowd_harvest`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Collected harvest deaths and incidental residues to treatment. Record each collected target loss/non-target residue and actual treatment; retain failed harvest duty even when collected product is zero. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_harvest_collected_loss instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_crowd_harvest` <br> - Range: Provisional unresolved evidence bound for each collect_harvest_collected_loss instance; replace U_harvest_collected_loss_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_harvest_collected_loss_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_chill_added_substances` | `kill_chill`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual gas or other substance added to the chilling bath. Conditional actual substance/formulation, including CO2 only if observed; no mandatory CO2 addition and no welfare claim; preserve origin and dissolved/released fractions. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_chill_added_substances instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_kill_chill` <br> - Range: Provisional unresolved evidence bound for each collect_chill_added_substances instance; replace U_chill_added_substances_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_chill_added_substances_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_chill_treatment_transfers` | `kill_chill`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Chilling rejects and used bath liquid transferred to treatment. Separate fish rejects from each used-liquid treatment transfer by destination; include treatment burden only once; not the same quantity as direct release. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_chill_treatment_transfers instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_kill_chill` <br> - Range: Provisional unresolved evidence bound for each collect_chill_treatment_transfers instance; replace U_chill_treatment_transfers_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_chill_treatment_transfers_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_chill_direct_releases` | `kill_chill`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual bath carrier water and substance releases to identified environment. Each actual carrier-water or established pollutant/gas instance and receiving medium separately; water balance is not automatically a waste or pollutant. Carbon dioxide requires origin-specific fossil/biogenic separation where known, otherwise unresolved. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_chill_direct_releases instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_kill_chill` <br> - Range: Provisional unresolved evidence bound for each collect_chill_direct_releases instance; replace U_chill_direct_releases_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_chill_direct_releases_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_actual_sort_wash_inputs` | `sort_destination`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual supplied sorting wash water and cleaning agents. Conditional only if actual washing occurs: one exchange per supplied water or agent instance; water-source and active/formulated substance basis required; direct abstraction is separate. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_actual_sort_wash_inputs instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sort_destination` <br> - Range: Provisional unresolved evidence bound for each collect_actual_sort_wash_inputs instance; replace U_actual_sort_wash_inputs_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_actual_sort_wash_inputs_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_actual_sort_water_intake` | `sort_destination`; Inputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual direct water abstraction for sorting wash. Conditional each actual water-resource intake by source; do not also enter the same water as a supplied product. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_actual_sort_water_intake instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sort_destination` <br> - Range: Provisional unresolved evidence bound for each collect_actual_sort_water_intake instance; replace U_actual_sort_water_intake_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_actual_sort_water_intake_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_other_sale_grades` | `sort_destination`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended whole-fish sale grades and destinations. One actual grade/destination instance each, with state, recipient and handoff; downgraded sale fish remain intended outputs, not waste. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_other_sale_grades instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sort_destination` <br> - Range: Provisional unresolved evidence bound for each collect_other_sale_grades instance; replace U_other_sale_grades_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_other_sale_grades_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_sort_rejects` | `sort_destination`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Unsold sorting rejects and actual cleaning residues to treatment. Reject material and fate established independently from sale grades; conditional actual wash water/agents are recorded at this node with own input and substance/destination instances. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_sort_rejects instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sort_destination` <br> - Range: Provisional unresolved evidence bound for each collect_sort_rejects instance; replace U_sort_rejects_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_sort_rejects_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_actual_sort_water_release` | `sort_destination`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual sorting carrier water and substance releases. Conditional each actual carrier water or independently established pollutant instance and medium; treatment-bound liquid instead remains collect_sort_rejects waste; no automatic pollution identity for water balance. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_actual_sort_water_release instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_sort_destination` <br> - Range: Provisional unresolved evidence bound for each collect_actual_sort_water_release instance; replace U_actual_sort_water_release_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_actual_sort_water_release_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_packing_materials` | `pack_present`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual protective containers, liners, labels and packing ice. Conditional each material/ice instance separately; record tare, reuse cycles and source; reweigh fish excluding all presentation materials and water. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_packing_materials instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pack_present` <br> - Range: Provisional unresolved evidence bound for each collect_packing_materials instance; replace U_packing_materials_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_packing_materials_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_packing_rejects` | `pack_present`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Packaging rejects, unsold fish rejects and actual used carrier water to treatment. Separate each rejected package/unsold fish or actually treatment-bound meltwater instance and destination; actually sold fish grades belong to presented_chilled_fish instead. Reusable returns remain service stock and are not disposal at every turn. Do not also count treated carrier water as a direct environmental release. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_packing_rejects instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pack_present` <br> - Range: Provisional unresolved evidence bound for each collect_packing_rejects instance; replace U_packing_rejects_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_packing_rejects_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_packing_carrier_release` | `pack_present`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual packing ice-melt carrier water and substance releases. Conditional each actual melt/carrier-water or established pollutant instance released from packaging to its observed receiving medium; do not prescribe discharge, call plain water pollution, or repeat treatment-bound liquid in collect_packing_rejects. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_packing_carrier_release instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_pack_present` <br> - Range: Provisional unresolved evidence bound for each collect_packing_carrier_release instance; replace U_packing_carrier_release_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_packing_carrier_release_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_freight` | `first_receipt`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual refrigerated fish delivery service before first receipt. Each actual carrier/load/leg instance, including cold duty scope; include only service not represented in shared_support own-operation fuels/assets/releases. <br> - Flow property / unit: Transport work / t*km <br> - Amount rule: Actual attributable collect_delivery_freight instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_first_receipt` <br> - Range: Provisional unresolved evidence bound for each collect_delivery_freight instance; replace U_delivery_freight_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_freight_instance <br> - Unit: t*km <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_resale` | `first_receipt`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Other intended pre-gate whole-fish resale outputs. Conditional each actual redirected or rejected-then-resold lot with real species/state, recipient, net mass and handoff; exclude it from accepted_chilled_seabream and waste, assign its attributable duty and distinguish any out-of-scope state. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_delivery_resale instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_first_receipt` <br> - Range: Provisional unresolved evidence bound for each collect_delivery_resale instance; replace U_delivery_resale_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_resale_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_rejects` | `first_receipt`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Pre-gate lost/rejected fish, presentation residues and used carrier water to actual treatment. Retain refusal, return, re-routing and actual treatment fate by instance, including actual treatment-bound meltwater. Successful resale belongs to collect_delivery_resale, not this waste card or accepted reference output. Treatment-bound liquid is not also a direct release. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_delivery_rejects instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_first_receipt` <br> - Range: Provisional unresolved evidence bound for each collect_delivery_rejects instance; replace U_delivery_rejects_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_rejects_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_carrier_release` | `first_receipt`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual delivery ice-melt carrier water and substance releases. Conditional each actual carrier-water or established pollutant release before physical receipt, with actual leg/holding event and receiving medium; no mandatory discharge or pollutant assumption. Used liquid transferred to treatment remains collect_delivery_rejects instead. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_delivery_carrier_release instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_first_receipt` <br> - Range: Provisional unresolved evidence bound for each collect_delivery_carrier_release instance; replace U_delivery_carrier_release_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_carrier_release_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_support_fuels` | `shared_support`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual vessel, vehicle and stationary fuels by carrier. One exchange per actual fuel/carrier and fossil/biogenic blend instance, with mass, energy content and supplier upstream scope; own operations only. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_support_fuels instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_shared_support` <br> - Range: Provisional unresolved evidence bound for each collect_support_fuels instance; replace U_support_fuels_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_support_fuels_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_support_assets` | `shared_support`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual attributable cage, net, mooring, vessel and equipment material supply. Each actual asset-material supply/replacement instance in native mass, with evidenced service life, consuming nodes, idle/failed duty, maintenance and terminal fate; no universal lifetime. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_support_assets instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_shared_support` <br> - Range: Provisional unresolved evidence bound for each collect_support_assets instance; replace U_support_assets_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_support_assets_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_complete_support_services` | `shared_support`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual complete contracted farm support service. Conditional each purchased complete service uses its evidenced native service property and unit, such as operating hours, work or actual serviced quantity; instantiate separately, never force all services into mass. Establish included fuel, utilities, assets, maintenance and emissions to exclude those same burdens from own-operation rows. <br> - Flow property / unit: Actual service property / actual native service unit <br> - Amount rule: Actual attributable collect_complete_support_services instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_shared_support` <br> - Range: Provisional unresolved evidence bound for each collect_complete_support_services instance; replace U_complete_support_services_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_complete_support_services_instance <br> - Unit: actual native service unit <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_support_waste` | `shared_support`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual maintenance and decommissioning wastes to treatment. Each oil, net, equipment, cleaning-liquid or other waste instance and destination separately; document recycling responsibility without unsupported displacement credits. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_support_waste instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_shared_support` <br> - Range: Provisional unresolved evidence bound for each collect_support_waste instance; replace U_support_waste_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_support_waste_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_support_other_releases` | `shared_support`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual other pollutant and refrigerant releases to established media. One actual identified substance/species/particle-size/refrigerant instance and receiving medium; use measured or justified model with factor boundary and uncertainty, not an unspecified air-emission UUID. <br> - Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg <br> - Amount rule: Actual attributable collect_support_other_releases instance quantity divided by accepted net fish A; retain raw native quantity and instance identity. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_shared_support` <br> - Range: Provisional unresolved evidence bound for each collect_support_other_releases instance; replace U_support_other_releases_instance from reviewed foreground evidence <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_support_other_releases_instance <br> - Unit: kg <br> - Basis: per 1 kg reference flow; independent instance bound, not a common cross-instance cap <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_chilled_seabream | Require positive accepted net A, correct same-lot reference link/name, 1 kg final amount, all qualifiers and ice/water/tare exclusions; verify actual physical recipient and never-frozen condition. | |
| validate_route | all processes | Check all required nodes, cage-cohort production mode, independent harvest/chilling, actual packaging activation/bypass and complete ordered handoffs. Do not infer washing, universal CO2, zero support energy or another harvest method. | fao-seabream-2009 |
| validate_instances | all inventory rows | Match all actual instances to native units, independent U evidence, node-owned protocol and actual material/substance/destination/medium; unexplained absent data or invented numeric caps fail data completeness. | |
| validate_outputs | all processes | Check every intended grade/live sale and its handoff, unsold reject/treatment fate and direct release; do not count closing stock or one product twice at different gates. | |
| validate_period_support | shared_support; cage_growout | Reconcile cohort/run/period attribution, opening/closing stock, cleaning/changeovers, replacements/termination and idle/failed duty. Shares sum to the owned burden and purchased complete service scope excludes repeated inputs/releases. | |
| validate_environment | all elementary flows | Require exact pollutant or resource identity, basis and receiving medium; fossil and biogenic CO2 separated where known; unknown origin remains unresolved. Carrier water is not automatically pollution, treatment transfer is not a direct release, and uncharacterized escape/habitat effects remain disclosed. | |
| validate_projection | all processes | Align bilingual row/rule/protocol ids, actual state/property/unit/ranges, verified fixed identities and canonical projection. Report performed/skipped checks, identity gaps, unsupported factors and uncertainty; a structural pass does not establish external identity or publication readiness. | |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after concrete foreground evidence and identity review |
| downstream_use | Foreground data package, process and lifecyclemodel projections of declared whole chilled fish supply |
| allowed_use | Matching species/route/state/gate and reporting period with disclosed representativeness |
| excluded_use | Other taxa/routes; live final product; gutted/filleted/cooked/frozen/thawed fish; edible-meat conversion; retail supply; welfare/safety/compliance certification |
| required_metadata | Required qualifiers; cohort/run/period; site; first physical recipient; actual net-mass method; all upstream boundaries; outputs/fates; support/period attribution; actual optional operations |
| required_quality_disclosure | Source applicability, historical route limitations, foreground coverage, provisional U evidence, identity gaps, uncertainty, allocation sensitivity and uncharacterized ecological effects |
| update_trigger | Species/route/gate/state, feed formulation, chilling method, actual packaging, support/service ownership, representative period, source or identity evidence materially changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-seabream-2009 | official_guidance | Colloca F.; Cerasi S. FAO 2009. Sparus aurata cultured-species fact sheet. https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_giltheadseabr.htm | Qualitative purchased-juvenile marine-cage route, crowd/dip-net harvest, ice-water intervention and environmental pathways. Historical numerical husbandry values and CO2 welfare assertion are not adopted. |
| avramar-whole-fish | extension_guidance | AVRAMAR Products. https://avramar.eu/products/ | Producer representation of Greek Sparus aurata whole-round fresh fish; not a particular farm's foreground proof or universal operating practice. |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; semantic PCR is narrower than 04292. |
