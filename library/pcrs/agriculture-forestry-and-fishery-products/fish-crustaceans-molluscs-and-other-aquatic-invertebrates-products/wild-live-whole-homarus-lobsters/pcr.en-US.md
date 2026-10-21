---
pcr_id: pcr.wild-live-whole-homarus-lobsters
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wild live whole Homarus lobsters at first producer handover

## 1. Scope and Applicability

This PCR covers wild-caught marine Homarus spp., actually living whole food bodies in their native shell at the first producer handover. Actual missing appendages and shell/molt state are disclosed, not reconstructed. The methodology is for foreground data production with complete capture-trip, physical destination and bounded live-handling accounting. No fixed country, species, gear, holding duration or temperature is presumed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.wild-live-whole-homarus-lobsters` |
| classification_refs | CPC 3.0:04331; narrower |
| covered_products | Wild marine Homarus spp. living whole native-shell bodies accepted for food at first producer gate, actual body/appendage/molt condition. |
| excluded_products | Panulirus, Palinurus, Jasus, Nephrops, crayfish; farmed, fattened or induced-molt output; dead fresh/chilled bodies, detached claws/tails/meat, frozen/cooked/preserved output; seed/broodstock/ornamental use; post-first-gate resale. |
| representative_product | An actually living wild Homarus food lot, native shell, actual recorded condition, at its producing fishery first handover. |
| production_route | Wild marine capture parent with actual trap/pot, net or other evidenced technology delta; actual grading and bounded producer care/presentation event graph, not aquaculture. |
| market_state | Actually living, whole native-shell food body; accepted actual grade, shell/molt and appendage condition. Nonfreezing cooling does not replace the living requirement. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actual whole living Homarus in native shell at first producer food handover |
| How much | 1 kg net native-body mass |
| How well | Currently viable, own Homarus identity, actual shell/appendages, actual food acceptance; exclude accessory/free-water/ice mass. |
| How long or cycle | Declared trip/campaign and relevant holding/asset service periods, from preparation through attributable return/maintenance and first food handover; no universal cycle or shelf life. |
| reference_flow_link | `live_homarus_food_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Actual whole living Homarus in native shell at first producer food handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Homarus species; wild origin and actual marine source; capture gear and trip/lot; live condition and handling timeline; actual shell/molt and appendage condition; destination grade and food-use acceptance evidence; net-body weighing method; first producer gate/place/time; actual service and period boundaries. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net-body weighing of the actual living accepted lot under cp_handover_mass; subtract measured external tare/free water/ice/bands/packaging without subtracting native shell or natural retained body fluids. Count-to-mass conversion requires actual species/condition-matched measured sample, not universal individual weight. |
| energy_units | energy inventory | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain measured electricity and its supply identity; 1 kWh = 3.6 MJ. Fuel uses actual supplied mass and supported calorific/carbon evidence, not an invented universal kg-to-energy ratio. |
| physical_mass | physical ledger | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 t = 1000 kg; 1 g = 0.001 kg. Preserve wet/as-supplied, stock and material boundaries; unknown density/dry-matter or gas reference conditions are not silently converted. Match paired transfers at the same boundary and exclude recirculation throughput. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented wild marine Homarus capture context and responsible preparation/gear/bait supply, not purchased producer-gate bodies or farm seed. |
| starting_condition_role | Foreground removal from natural stock, with upstream supplied inputs and actual service responsibilities. |
| product_classification_scope | CPC 3.0:04331; narrower: wild live whole food Homarus only |
| recursive_input_rule | Purchased whole Homarus already past its first producer gate is resale and outside this capture PCR. Internal own-capture passes retain paired identities and burdens, not a recursively purchased final product. Purchased/own bait is a separate input purpose with its actual upstream dataset. |
| upstream_dataset_requirement | Actual bait/fuel/electricity/material/asset and service supplies must have matching origin/state/provider/unit, explicit embedded burden scope and current evidence. |
| disclosure | Declare actual lot/event graph, species/source, shell/live condition, gate, trip and return boundary, periods, services/asset users, grade/destination set, water/bait stocks and every evidence gap. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_and_responsibility` | foreground boundary | Own actual wild capture through producer-responsible grading, bounded live maintenance/presentation and first food handover. Include responsible departure, bait/gear supply, capture, transfer and attributable return, idle, cleaning and asset service even after an at-sea gate; do not extend product handling beyond that gate. Purchased post-first-gate Homarus resale and merchant holding are excluded. | `noaa-american-lobster` |
| `state_graph` | all actual passes | Capture produces viable pending-grade animals; mandatory destination grading establishes actual food acceptance. Live maintenance and presentation may occur before or after grading and may repeat only with distinct event/pass ids and paired transfers. Pre-grade passes stay pending; post-grade condition changes require reinspection. Handover accepts only currently live, graded food lots, independent of the name of the last node. Unknown sequence/state is a gap, not a bypass. |  |
| `technology_delta` | capture | Declare actual capture parent gear. Trap/pot, net or other evidenced gear differ in deployment/haul equipment, energy, bait requirement, loss and bycatch/habitat/entanglement observations. Do not prescribe bait for unbaited gear. Different gear can coexist only on disjoint recorded events or responsibilities, not double-count the same animals. No universal impact, gear life or efficiency conclusion follows from a route label. | `noaa-american-lobster` |
| `water_and_service_boundary` | all nodes | Collect external supply, new self-abstraction and paired internal transfer separately; in-node recirculation is throughput, not a new exchange. Reconcile stock, measured discharge/treatment, product/accessory-carried free water, actual evaporation and ice melt without treating natural body fluid as external free water. Pure services use actual invoiced units in the auxiliary ledger and must resolve exact property/unit before final dataset exchanges; no fictional kg of service. Register inclusive scope and exclude embedded fuel/water/material or upstream emissions from duplicate direct rows. |  |
| `native_body_and_care` | all live states | Native shell, tissue and naturally retained body fluid define actual body mass; record species, molt/shell and missing-appendage condition without reconstructing absent parts. Bands, ice, free water and containers remain separate physical fates. Maintenance has no intended biomass production, fattening or induced molt; no immersion, feed or direct ice contact is universally required. Actual food-use authorization and live condition apply to the real place/time and cannot be inferred from a generic species page. |  |

## 6. Process Inventory Structure

Process-map order is a responsibility listing, not mandatory chronology. Declare actual production_mode: discrete capture-trip/lot batches, and continuous shared holding runs only where actually operated, with explicit run/period start and end. Record actual trip/lot/pass/event/transfer and shared holding run or service period; cleaning, changeover and no-output periods retain their owning campaign. Conditional nodes apply only when actually performed before gate. Every real cross-node handoff pairs actual state/mass, with one owner of shared quantities. Pure outsourced services, reusable-asset use and inventories that do not cross a material boundary remain explicit auxiliary ledgers in their actual units, with concrete exchange completion required before final dataset use.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Wild capture and retrieval | required | Every included lot has an owned wild-capture responsibility; no purchased first-gate lobster resale. | foreground responsible activity | captured_live_unsorted; other actual intended catches |
| `grade` | Live condition and destination grading | required | Every final food lot has documented actual condition and destination acceptance. | foreground responsible activity | graded_live_food; actual alternative products and rejection destinations |
| `live_maintenance` | Bounded producer live maintenance | conditional | Actual producer-responsible live maintenance or nonfreezing cooling occurs before the gate, before or after grading as recorded; never deliberate grow-out, fattening or induced molt. | foreground responsible activity | maintained_live; mortality, actual alternative products and releases |
| `presentation` | Live restraint and protective presentation | conditional | Actual banding, protective containers or disposable packaging are applied under producer responsibility before handover. | foreground responsible activity | presented_live; packaging rejects and separately handed materials |
| `handover` | First producer food handover | required | Actual first transfer out of the producing fishery after final live-food acceptance; sea, quay or other actual producer gate. | foreground responsible activity | live_homarus_food_handover |

### Process: Wild capture and retrieval (`capture`)

Remove actual wild marine Homarus and incidental catch from the documented waterbody. Capture is independent from natural prior growth and subsequent grading or live maintenance. Include voyage departure, deployment, retrieval, producer-responsible transfer and attributable return to base, even after an at-sea product gate.

#### Inputs

##### Product flows

###### Actual CN low-voltage grid-average electricity consumed (`capture_cn_low_voltage_electricity`)

Only actual CN grid-average AC below 1 kV supplied to user; meter attributable consumption in MJ or convert kWh with energy_units. Other geography/voltage, renewable contracts and onboard generation do not use this card.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN low-voltage grid-average electricity consumed `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: From actual raw records in cp_capture_energy, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_energy`
- Range: Provisional replaceable energy screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual other externally supplied electricity (`capture_other_electricity`)

When used, preserve the actual external provider, geography, voltage, technology and consumption boundary; identify each supply separately. Exclude already represented CN grid consumption and own-generation energy double counting.

- Selected flow: Actual other externally supplied electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: From actual raw records in cp_capture_energy, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_energy`
- Range: Provisional replaceable energy screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased treated industrial process water (`capture_treated_industrial_water`)

Only actual supplied treated industrial process water matching that technical role. It is not raw seawater, drinking-water certification, recirculation throughput or internal transfer.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual purchased treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual other externally supplied or internally transferred water (`capture_other_water_receipt`)

Expand actual external water by source/treatment/provider, or pair a measured internal-water transfer using the same id and boundary mass. Exclude treated-industrial supply, own abstraction and repeated in-node recirculation.

- Selected flow: Actual other externally supplied or internally transferred water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased capture or landing preservation ice (`capture_capture_ice`)

Only actual purchased capture/landing ice matching its supply role, including indirect cooling when documented safe and appropriate for the declared live product. No compulsory direct ice contact, dry-ice substitution or duplicate own ice manufacture.

- Selected flow: Actual purchased capture or landing preservation ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Wild Homarus biomass actually removed from the marine environment (`wild_homarus_removed`)

Measure all target animals removed by the documented capture event, including subsequently returned, dead or rejected individuals; do not infer removal solely from final sales. Natural prior growth carries no fabricated farm feed or hatchery exchange.

- Selected flow: Wild Homarus biomass actually removed from the marine environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Sources: `noaa-american-lobster`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual directly abstracted marine or other environmental water (`capture_self_abstracted_water`)

Identify actual freshwater/seawater source, location and new intake meter. Count new abstraction once; recirculation and paired product-water receipt are not abstraction. Do not mandate freshwater on a seawater route.

- Selected flow: Actual directly abstracted marine or other environmental water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Separately measured liquid water (`capture_free_water_ice_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture_mass`

###### Separately measured solid water ice (`capture_free_water_ice_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture_mass`



###### Captured whole living Homarus pending destination grading (`captured_live_unsorted`)

Weigh the actual viable catch passed to grade, live_maintenance or presentation before grading. Retain native shell, tissue and natural body fluid, actual appendage/shell condition, transfer id and pending acceptance; this is an intermediate, never fixed to the final 1 kg.

- Selected flow: Captured whole living Homarus pending destination grading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Sources: `noaa-american-lobster`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual water transferred to a different foreground node (`capture_internal_water_transfer`)

Record a real cross-node transfer with paired other_water_receipt, actual mass and source. Exclude in-node pump throughput and any water already included in a separate carrier-water transfer; not a sale, disposal or new abstraction.

- Selected flow: Actual water transferred to a different foreground node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual wastewater sent to an external treatment boundary (`capture_wastewater_treatment`)

Identify measured water mass, relevant composition and treatment receiver, including actual melted ice or wash/holding water only once. Environmental discharge, product-carried water and internal transfer are separate fates.

- Selected flow: Actual wastewater sent to an external treatment boundary
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual live catch returned to its marine environment (`live_catch_return`)

Identify target and incidental species, viability, location and release event; environmental return is not a sale, waste shipment or negative production credit.

- Selected flow: Actual live catch returned to its marine environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Sources: `dfo-at-sea-lobster-catch`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead catch released to the marine environment (`dead_catch_discard`)

Only evidenced actual environmental destination, with species, mass and applicable authorization/history; not also treatment waste or live return. Record environmental concerns separately, without universal harmless-discard claims.

- Selected flow: Actual dead catch released to the marine environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Sources: `dfo-at-sea-lobster-catch`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual water discharged to its environmental receiving medium (`capture_water_environment_discharge`)

Specify actual marine/fresh receiving medium, destination, intake versus return and measured discharge. Retain species/substance-specific pollutant loads in direct_other_emissions; do not also classify this same water as treatment waste.

- Selected flow: Actual water discharged to its environmental receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual evidenced evaporative water to air (`capture_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Include only a measured or independently supported actual evaporation estimate with receiving air and uncertainty; not an arbitrary plug for missing water balance.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual direct fossil carbon dioxide to unspecified air (`capture_fossil_co2_air`)

Only direct fossil CO2 in the confirmed air compartment; measure or calculate from actual compatible fuel carbon and oxidation evidence under direct_emissions. Not a universal fuel factor, upstream duplicate or biogenic lobster respiration.

- Selected flow: Actual direct fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Live condition and destination grading (`grade`)

Receive the actual live pending-grade state from capture or an earlier maintenance/presentation pass. Inspect species, body and shell condition, appendages, viability and applicable food-use acceptance; split accepted food, independently intended alternatives, live releases, dead material and waste. Grade acceptance is not an invented universal size, legal or safety threshold.

#### Inputs

##### Product flows

###### Actual viable whole Homarus received at this node (`grade_live_receipt`)

Use actual preceding pass and paired transfer id, species, shell/appendage condition and pending-grade or accepted state. Only handover receipt requires current final food acceptance; no equality with the final reference quantity is assumed for internal receipts.

- Selected flow: Actual viable whole Homarus received at this node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual CN low-voltage grid-average electricity consumed (`grade_cn_low_voltage_electricity`)

Only actual CN grid-average AC below 1 kV supplied to user; meter attributable consumption in MJ or convert kWh with energy_units. Other geography/voltage, renewable contracts and onboard generation do not use this card.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN low-voltage grid-average electricity consumed `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: From actual raw records in cp_grade_energy, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_energy`
- Range: Provisional replaceable energy screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual other externally supplied electricity (`grade_other_electricity`)

When used, preserve the actual external provider, geography, voltage, technology and consumption boundary; identify each supply separately. Exclude already represented CN grid consumption and own-generation energy double counting.

- Selected flow: Actual other externally supplied electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: From actual raw records in cp_grade_energy, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_energy`
- Range: Provisional replaceable energy screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased treated industrial process water (`grade_treated_industrial_water`)

Only actual supplied treated industrial process water matching that technical role. It is not raw seawater, drinking-water certification, recirculation throughput or internal transfer.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual purchased treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual other externally supplied or internally transferred water (`grade_other_water_receipt`)

Expand actual external water by source/treatment/provider, or pair a measured internal-water transfer using the same id and boundary mass. Exclude treated-industrial supply, own abstraction and repeated in-node recirculation.

- Selected flow: Actual other externally supplied or internally transferred water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased capture or landing preservation ice (`grade_capture_ice`)

Only actual purchased capture/landing ice matching its supply role, including indirect cooling when documented safe and appropriate for the declared live product. No compulsory direct ice contact, dry-ice substitution or duplicate own ice manufacture.

- Selected flow: Actual purchased capture or landing preservation ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual directly abstracted marine or other environmental water (`grade_self_abstracted_water`)

Identify actual freshwater/seawater source, location and new intake meter. Count new abstraction once; recirculation and paired product-water receipt are not abstraction. Do not mandate freshwater on a seawater route.

- Selected flow: Actual directly abstracted marine or other environmental water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Separately measured liquid water (`grade_free_water_ice_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_mass`

###### Separately measured solid water ice (`grade_free_water_ice_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade_mass`



###### Graded living Homarus accepted for food (`graded_live_food`)

Measure real outgoing native-body mass and actual destination. A grade output is accepted for declared food use; maintenance/presentation retain the incoming pending or accepted state until actual grading/reinspection. Pair internal transfers, preserve event order and never assume internal feed equals final mass.

- Selected flow: Graded living Homarus accepted for food
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual water transferred to a different foreground node (`grade_internal_water_transfer`)

Record a real cross-node transfer with paired other_water_receipt, actual mass and source. Exclude in-node pump throughput and any water already included in a separate carrier-water transfer; not a sale, disposal or new abstraction.

- Selected flow: Actual water transferred to a different foreground node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual wastewater sent to an external treatment boundary (`grade_wastewater_treatment`)

Identify measured water mass, relevant composition and treatment receiver, including actual melted ice or wash/holding water only once. Environmental discharge, product-carried water and internal transfer are separate fates.

- Selected flow: Actual wastewater sent to an external treatment boundary
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual live environmental escape or authorized return (`grade_live_environment_return`)

Record only actual identified viable organisms, source/receiving waterbody and event; distinguish escape from deliberate return and from paired internal transfer. No assumed routine release or credit.

- Selected flow: Actual live environmental escape or authorized return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead-body material entering the marine environment (`grade_dead_environment_destination`)

Only an actual documented environmental fate with body identity, mass, event and receiving medium; record applicable authorization and concerns, not a prescribed disposal route. Exclude material already handed to a product or treatment receiver and never count this as a live return.

- Selected flow: Actual dead-body material entering the marine environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual water discharged to its environmental receiving medium (`grade_water_environment_discharge`)

Specify actual marine/fresh receiving medium, destination, intake versus return and measured discharge. Retain species/substance-specific pollutant loads in direct_other_emissions; do not also classify this same water as treatment waste.

- Selected flow: Actual water discharged to its environmental receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual evidenced evaporative water to air (`grade_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Include only a measured or independently supported actual evaporation estimate with receiving air and uncertainty; not an arbitrary plug for missing water balance.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual direct fossil carbon dioxide to unspecified air (`grade_fossil_co2_air`)

Only direct fossil CO2 in the confirmed air compartment; measure or calculate from actual compatible fuel carbon and oxidation evidence under direct_emissions. Not a universal fuel factor, upstream duplicate or biogenic lobster respiration.

- Selected flow: Actual direct fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grade_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Bounded producer live maintenance (`live_maintenance`)

Receive a viable lot in its actual pending-grade or accepted state; preserve that same state through the documented holding pass. Record actual water/oxygen/cooling/care, mortality and live escapes/releases, not compulsory immersion, feeding or direct ice contact. A naturally occurring condition change requires recorded reinspection, not a claim of managed biological production.

#### Inputs

##### Product flows

###### Actual viable whole Homarus received at this node (`live_maintenance_live_receipt`)

Use actual preceding pass and paired transfer id, species, shell/appendage condition and pending-grade or accepted state. Only handover receipt requires current final food acceptance; no equality with the final reference quantity is assumed for internal receipts.

- Selected flow: Actual viable whole Homarus received at this node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual CN low-voltage grid-average electricity consumed (`live_maintenance_cn_low_voltage_electricity`)

Only actual CN grid-average AC below 1 kV supplied to user; meter attributable consumption in MJ or convert kWh with energy_units. Other geography/voltage, renewable contracts and onboard generation do not use this card.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN low-voltage grid-average electricity consumed `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: From actual raw records in cp_live_maintenance_energy, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_energy`
- Range: Provisional replaceable energy screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual other externally supplied electricity (`live_maintenance_other_electricity`)

When used, preserve the actual external provider, geography, voltage, technology and consumption boundary; identify each supply separately. Exclude already represented CN grid consumption and own-generation energy double counting.

- Selected flow: Actual other externally supplied electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: From actual raw records in cp_live_maintenance_energy, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_energy`
- Range: Provisional replaceable energy screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased treated industrial process water (`live_maintenance_treated_industrial_water`)

Only actual supplied treated industrial process water matching that technical role. It is not raw seawater, drinking-water certification, recirculation throughput or internal transfer.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual purchased treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual other externally supplied or internally transferred water (`live_maintenance_other_water_receipt`)

Expand actual external water by source/treatment/provider, or pair a measured internal-water transfer using the same id and boundary mass. Exclude treated-industrial supply, own abstraction and repeated in-node recirculation.

- Selected flow: Actual other externally supplied or internally transferred water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased capture or landing preservation ice (`live_maintenance_capture_ice`)

Only actual purchased capture/landing ice matching its supply role, including indirect cooling when documented safe and appropriate for the declared live product. No compulsory direct ice contact, dry-ice substitution or duplicate own ice manufacture.

- Selected flow: Actual purchased capture or landing preservation ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual externally supplied oxygen for the recorded live-maintenance system (`live_maintenance_oxygen`)

Only actual delivered oxygen when the real system uses it; identify purity, gas/liquid/compressed state, supplier delivery and measured mass or supported reference-condition conversion. Air pumping is not purchased pure oxygen and industrial factory oxygen alone does not prove this identity.

- Selected flow: Actual externally supplied oxygen for the recorded live-maintenance system
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual directly abstracted marine or other environmental water (`live_maintenance_self_abstracted_water`)

Identify actual freshwater/seawater source, location and new intake meter. Count new abstraction once; recirculation and paired product-water receipt are not abstraction. Do not mandate freshwater on a seawater route.

- Selected flow: Actual directly abstracted marine or other environmental water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Separately measured liquid water (`live_maintenance_free_water_ice_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_maintenance_mass`

###### Separately measured solid water ice (`live_maintenance_free_water_ice_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_maintenance_mass`



###### Still-living Homarus after actual maintenance pass (`maintained_live`)

Measure real outgoing native-body mass and actual destination. A grade output is accepted for declared food use; maintenance/presentation retain the incoming pending or accepted state until actual grading/reinspection. Pair internal transfers, preserve event order and never assume internal feed equals final mass.

- Selected flow: Still-living Homarus after actual maintenance pass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual water transferred to a different foreground node (`live_maintenance_internal_water_transfer`)

Record a real cross-node transfer with paired other_water_receipt, actual mass and source. Exclude in-node pump throughput and any water already included in a separate carrier-water transfer; not a sale, disposal or new abstraction.

- Selected flow: Actual water transferred to a different foreground node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual wastewater sent to an external treatment boundary (`live_maintenance_wastewater_treatment`)

Identify measured water mass, relevant composition and treatment receiver, including actual melted ice or wash/holding water only once. Environmental discharge, product-carried water and internal transfer are separate fates.

- Selected flow: Actual wastewater sent to an external treatment boundary
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual live environmental escape or authorized return (`live_maintenance_live_environment_return`)

Record only actual identified viable organisms, source/receiving waterbody and event; distinguish escape from deliberate return and from paired internal transfer. No assumed routine release or credit.

- Selected flow: Actual live environmental escape or authorized return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead-body material entering the marine environment (`live_maintenance_dead_environment_destination`)

Only an actual documented environmental fate with body identity, mass, event and receiving medium; record applicable authorization and concerns, not a prescribed disposal route. Exclude material already handed to a product or treatment receiver and never count this as a live return.

- Selected flow: Actual dead-body material entering the marine environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual water discharged to its environmental receiving medium (`live_maintenance_water_environment_discharge`)

Specify actual marine/fresh receiving medium, destination, intake versus return and measured discharge. Retain species/substance-specific pollutant loads in direct_other_emissions; do not also classify this same water as treatment waste.

- Selected flow: Actual water discharged to its environmental receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual evidenced evaporative water to air (`live_maintenance_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Include only a measured or independently supported actual evaporation estimate with receiving air and uncertainty; not an arbitrary plug for missing water balance.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual direct fossil carbon dioxide to unspecified air (`live_maintenance_fossil_co2_air`)

Only direct fossil CO2 in the confirmed air compartment; measure or calculate from actual compatible fuel carbon and oxidation evidence under direct_emissions. Not a universal fuel factor, upstream duplicate or biogenic lobster respiration.

- Selected flow: Actual direct fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_live_maintenance_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Live restraint and protective presentation (`presentation`)

Receive the actual viable pending-grade or accepted lobster state. Apply only recorded claw restraint/protection and hand the resulting still-live lot to its actual next node or handover. Keep bands, free water, ice and packaging outside native-body reference mass. Distribution after the gate is excluded; protective handling is not itself a transport service.

#### Inputs

##### Product flows

###### Actual viable whole Homarus received at this node (`presentation_live_receipt`)

Use actual preceding pass and paired transfer id, species, shell/appendage condition and pending-grade or accepted state. Only handover receipt requires current final food acceptance; no equality with the final reference quantity is assumed for internal receipts.

- Selected flow: Actual viable whole Homarus received at this node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual CN low-voltage grid-average electricity consumed (`presentation_cn_low_voltage_electricity`)

Only actual CN grid-average AC below 1 kV supplied to user; meter attributable consumption in MJ or convert kWh with energy_units. Other geography/voltage, renewable contracts and onboard generation do not use this card.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN low-voltage grid-average electricity consumed `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: From actual raw records in cp_presentation_energy, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_energy`
- Range: Provisional replaceable energy screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual other externally supplied electricity (`presentation_other_electricity`)

When used, preserve the actual external provider, geography, voltage, technology and consumption boundary; identify each supply separately. Exclude already represented CN grid consumption and own-generation energy double counting.

- Selected flow: Actual other externally supplied electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: From actual raw records in cp_presentation_energy, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_energy`
- Range: Provisional replaceable energy screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased treated industrial process water (`presentation_treated_industrial_water`)

Only actual supplied treated industrial process water matching that technical role. It is not raw seawater, drinking-water certification, recirculation throughput or internal transfer.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual purchased treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual other externally supplied or internally transferred water (`presentation_other_water_receipt`)

Expand actual external water by source/treatment/provider, or pair a measured internal-water transfer using the same id and boundary mass. Exclude treated-industrial supply, own abstraction and repeated in-node recirculation.

- Selected flow: Actual other externally supplied or internally transferred water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased capture or landing preservation ice (`presentation_capture_ice`)

Only actual purchased capture/landing ice matching its supply role, including indirect cooling when documented safe and appropriate for the declared live product. No compulsory direct ice contact, dry-ice substitution or duplicate own ice manufacture.

- Selected flow: Actual purchased capture or landing preservation ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual directly abstracted marine or other environmental water (`presentation_self_abstracted_water`)

Identify actual freshwater/seawater source, location and new intake meter. Count new abstraction once; recirculation and paired product-water receipt are not abstraction. Do not mandate freshwater on a seawater route.

- Selected flow: Actual directly abstracted marine or other environmental water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Separately measured liquid water (`presentation_free_water_ice_transfer_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation_mass`

###### Separately measured solid water ice (`presentation_free_water_ice_transfer_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation_mass`



###### Still-living Homarus after actual protective presentation (`presented_live`)

Measure real outgoing native-body mass and actual destination. A grade output is accepted for declared food use; maintenance/presentation retain the incoming pending or accepted state until actual grading/reinspection. Pair internal transfers, preserve event order and never assume internal feed equals final mass.

- Selected flow: Still-living Homarus after actual protective presentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual water transferred to a different foreground node (`presentation_internal_water_transfer`)

Record a real cross-node transfer with paired other_water_receipt, actual mass and source. Exclude in-node pump throughput and any water already included in a separate carrier-water transfer; not a sale, disposal or new abstraction.

- Selected flow: Actual water transferred to a different foreground node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual wastewater sent to an external treatment boundary (`presentation_wastewater_treatment`)

Identify measured water mass, relevant composition and treatment receiver, including actual melted ice or wash/holding water only once. Environmental discharge, product-carried water and internal transfer are separate fates.

- Selected flow: Actual wastewater sent to an external treatment boundary
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual live environmental escape or authorized return (`presentation_live_environment_return`)

Record only actual identified viable organisms, source/receiving waterbody and event; distinguish escape from deliberate return and from paired internal transfer. No assumed routine release or credit.

- Selected flow: Actual live environmental escape or authorized return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead-body material entering the marine environment (`presentation_dead_environment_destination`)

Only an actual documented environmental fate with body identity, mass, event and receiving medium; record applicable authorization and concerns, not a prescribed disposal route. Exclude material already handed to a product or treatment receiver and never count this as a live return.

- Selected flow: Actual dead-body material entering the marine environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual water discharged to its environmental receiving medium (`presentation_water_environment_discharge`)

Specify actual marine/fresh receiving medium, destination, intake versus return and measured discharge. Retain species/substance-specific pollutant loads in direct_other_emissions; do not also classify this same water as treatment waste.

- Selected flow: Actual water discharged to its environmental receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual evidenced evaporative water to air (`presentation_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Include only a measured or independently supported actual evaporation estimate with receiving air and uncertainty; not an arbitrary plug for missing water balance.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual direct fossil carbon dioxide to unspecified air (`presentation_fossil_co2_air`)

Only direct fossil CO2 in the confirmed air compartment; measure or calculate from actual compatible fuel carbon and oxidation evidence under direct_emissions. Not a universal fuel factor, upstream duplicate or biogenic lobster respiration.

- Selected flow: Actual direct fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_presentation_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: First producer food handover (`handover`)

Receive the real final live lot from the last actual activity, not an assumed fixed sequence. Verify continued viability and current food acceptance; weigh net native body and record the actual handover. No pending-grade, unknown or dead body enters the final denominator. Later merchant storage or distribution is outside this node.

#### Inputs

##### Product flows

###### Actual viable whole Homarus received at this node (`handover_live_receipt`)

Use actual preceding pass and paired transfer id, species, shell/appendage condition and pending-grade or accepted state. Only handover receipt requires current final food acceptance; no equality with the final reference quantity is assumed for internal receipts.

- Selected flow: Actual viable whole Homarus received at this node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual CN low-voltage grid-average electricity consumed (`handover_cn_low_voltage_electricity`)

Only actual CN grid-average AC below 1 kV supplied to user; meter attributable consumption in MJ or convert kWh with energy_units. Other geography/voltage, renewable contracts and onboard generation do not use this card.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Actual CN low-voltage grid-average electricity consumed `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Binding: `fixed`
- Amount rule: From actual raw records in cp_handover_energy, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_energy`
- Range: Provisional replaceable energy screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual other externally supplied electricity (`handover_other_electricity`)

When used, preserve the actual external provider, geography, voltage, technology and consumption boundary; identify each supply separately. Exclude already represented CN grid consumption and own-generation energy double counting.

- Selected flow: Actual other externally supplied electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: From actual raw records in cp_handover_energy, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_energy`
- Range: Provisional replaceable energy screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased treated industrial process water (`handover_treated_industrial_water`)

Only actual supplied treated industrial process water matching that technical role. It is not raw seawater, drinking-water certification, recirculation throughput or internal transfer.

Conditional identity: only actual externally purchased treated industrial process water matching this UUID may use this binding. Supply specification and site evidence must establish quality/salinity suitability for the precise animal-contact, carrier, washing or ice-making use. Do not assume an industrial-water supply; abstraction, freshwater/seawater, other grades and internal circulation require their own independently verified identities and quantities.

- Selected flow: Actual purchased treated industrial process water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual other externally supplied or internally transferred water (`handover_other_water_receipt`)

Expand actual external water by source/treatment/provider, or pair a measured internal-water transfer using the same id and boundary mass. Exclude treated-industrial supply, own abstraction and repeated in-node recirculation.

- Selected flow: Actual other externally supplied or internally transferred water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual purchased capture or landing preservation ice (`handover_capture_ice`)

Only actual purchased capture/landing ice matching its supply role, including indirect cooling when documented safe and appropriate for the declared live product. No compulsory direct ice contact, dry-ice substitution or duplicate own ice manufacture.

- Selected flow: Actual purchased capture or landing preservation ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable physical mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual directly abstracted marine or other environmental water (`handover_self_abstracted_water`)

Identify actual freshwater/seawater source, location and new intake meter. Count new abstraction once; recirculation and paired product-water receipt are not abstraction. Do not mandate freshwater on a seawater route.

- Selected flow: Actual directly abstracted marine or other environmental water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Separately measured liquid water (`free_water_ice_handover_water`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured liquid water
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover_mass`

###### Separately measured solid water ice (`free_water_ice_handover_ice`)

Record only this material’s separately measured mass at the declared process handoff, using paired transfer IDs and the same lot and period. Do not copy a combined water/ice total to this card; carrier or protection use does not change net animal reference mass.

- Selected flow: Separately measured solid water ice
- Flow property / unit: Mass / kg
- Amount rule: Independently measure this material’s mass and normalize to actual accepted final net reference output; any measurement conversion requires actual density and phase evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover_mass`



###### Actual whole living Homarus in native shell at first producer food handover (`live_homarus_food_handover`)

The final output is the actually living whole Homarus in native shell accepted for food at the first producer gate, measured with actual shell/appendage condition. Include native shell/tissue/natural retained body fluid; exclude bands, free water, ice, containers and labels. Count this lot at one final gate only.

- Selected flow: Actual whole living Homarus in native shell at first producer food handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_handover_mass`
- Sources: `mass-balance-identity`
- Range: Exact reference normalization identity
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `mass-balance-identity`

###### Actual water transferred to a different foreground node (`handover_internal_water_transfer`)

Record a real cross-node transfer with paired other_water_receipt, actual mass and source. Exclude in-node pump throughput and any water already included in a separate carrier-water transfer; not a sale, disposal or new abstraction.

- Selected flow: Actual water transferred to a different foreground node
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Actual wastewater sent to an external treatment boundary (`handover_wastewater_treatment`)

Identify measured water mass, relevant composition and treatment receiver, including actual melted ice or wash/holding water only once. Environmental discharge, product-carried water and internal transfer are separate fates.

- Selected flow: Actual wastewater sent to an external treatment boundary
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Actual live environmental escape or authorized return (`handover_live_environment_return`)

Record only actual identified viable organisms, source/receiving waterbody and event; distinguish escape from deliberate return and from paired internal transfer. No assumed routine release or credit.

- Selected flow: Actual live environmental escape or authorized return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual dead-body material entering the marine environment (`handover_dead_environment_destination`)

Only an actual documented environmental fate with body identity, mass, event and receiving medium; record applicable authorization and concerns, not a prescribed disposal route. Exclude material already handed to a product or treatment receiver and never count this as a live return.

- Selected flow: Actual dead-body material entering the marine environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual water discharged to its environmental receiving medium (`handover_water_environment_discharge`)

Specify actual marine/fresh receiving medium, destination, intake versus return and measured discharge. Retain species/substance-specific pollutant loads in direct_other_emissions; do not also classify this same water as treatment waste.

- Selected flow: Actual water discharged to its environmental receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual evidenced evaporative water to air (`handover_water_evaporation`)

The bound identity represents emissions to air, unspecified. Where actual evidence identifies a more specific air subcompartment, verify and select the corresponding identity before finalizing the dataset. Include only a measured or independently supported actual evaporation estimate with receiving air and uncertainty; not an arbitrary plug for missing water balance.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable water screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Actual direct fossil carbon dioxide to unspecified air (`handover_fossil_co2_air`)

Only direct fossil CO2 in the confirmed air compartment; measure or calculate from actual compatible fuel carbon and oxidation evidence under direct_emissions. Not a universal fuel factor, upstream duplicate or biogenic lobster respiration.

- Selected flow: Actual direct fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Binding: `fixed`
- Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover_mass`
- Range: Provisional replaceable environmental mass screening, not an empirical/default quantity
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `physical_then_lca` | all inventory rows | Retain an unallocated actual physical ledger of inputs, products, paired transfers, stocks and losses. Assign shared resource-event/node/period ownership once, then normalize by positive accepted final native-body kg. Separately label the single-output LCA view, apply the relevant output attribution once, retain the original physical ledger and full allocation matrix. Never shrink physical partitions by economic shares, check an allocated mass against an unallocated closure or allocate an already attributed intermediate again. |  |
| `allocation_precedence` | actual intended outputs | Enumerate concrete accepted live grades and any other independently intended catch/bait/dead-food output with recipient and handoff; exclude disposal, live return, packaging accompaniment and internal recirculation from automatic coproduct treatment. First subdivide independently measured activity; then use evidenced causal physical consumption for inseparable joint resources; if not supported, use same-boundary same-period positive realized-value shares and disclose price basis and sensitivity. Missing value/causality is a data gap, not a default mass share or substitution credit. |  |
| `period_matrix` | trips, holding periods and assets | Index preparation, deployment, soak/retrieval, transfer, post-gate return, idle/cleaning, seasonal holding, acquisition, replacement and retirement. Link each actual event and output to a trip/lot/period; retain failed/no-output-period burdens in the campaign with relevant outputs, never divide by zero or drop failed trips. Assign actual asset service over its documented users/periods using evidenced time/use basis; no universal lifetime and no reset of full manufacture every trip. |  |
| `secondary_bait_attribution` | purchased_secondary_bait; own_bait_receipt | For actual secondary bait retain origin and the supplier declared prior-system burden inherited at its recovery handoff, plus nonembedded recovery/preparation/storage/delivery once. If the supplier documents an allocated valuable byproduct, inherit that allocation; if its justified waste-cutoff starts at recovery, disclose that boundary and include all recovery onward burdens. Do not add full original-fish burdens again or silently grant zero-burden residues. Competing cutoff interpretations are separate sensitivity scenarios, not simultaneous credits. Own-caught bait retains its own capture attribution once. | `fishres-secondary-lobster-bait-2025` |
| `shared_owner` | shared vessel, equipment, facility or service | Maintain a resource scope register covering actual capture, grade, live_maintenance, presentation and handover consumers and service periods. Shared vessel/hauler/gear, holding tank/cold room, reusable crates and outsourced inclusive services have one owning event and a documented causal time/use/space matrix. Exclude already embedded service resources and other periods shares; allocated reusable-asset manufacturing mass is not physical disposable packaging handed to the buyer. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture_mass` | `capture` | actual native-body/material/water/biomass fates | calibrated measurements, invoices, transfer/stock/event records and supplier primary evidence | trip; lot; event; pass; transfer; period; owner; species/substance/material; live/shell/appendage and pending/accepted state; actual destination; raw amount and original unit; opening/closing stock; tare; supplier scope; service actual invoiced quantity/unit; asset users/use/replacement/retirement; timestamps; grade/food acceptance; missingness and uncertainty; actual technology/setup; actual provider/source and geographic boundary; cleaning/changeover/idle/failed-event linkage; actual water phase/new intake/recirculation/transfer/fates; quantity conversion evidence; gear specification; set/haul/soak/effort and location; bait origin, received/deployed/unspent/recovered/reused/waste/released stocks; incident/bycatch/gear-loss evidence | Weigh actual body/material receipts, transfers, stocks and fates using calibrated suitable scales/meters. Conversions require actual density, matched sample or gas-condition evidence. Live/shell/grade/acceptance fields are categorical. Preserve raw node quantities and auxiliary service/asset units separately. Close unallocated physical node/pass stocks and transfers, assign shared resource responsibility once and divide attributable physical quantities by positive final accepted native-body kg for the per-reference physical view; retain a separate section 7 once-attributed single-output LCA view and complete matrix. | kg | Every actual event/transfer and meter interval; reconcile each trip/run and period closure | Complete declared trip/campaign, including return/idle/cleaning and unsuccessful periods plus actual asset service history | Only actual capture node responsibility and declared supplier/service boundary | per 1 kg reference flow | Calibration and meter scope; original receipts and transfer/stock reconciliation; state/acceptance and independent quantitative evidence; signed resource/period/service allocation and uncertainty |
| `cp_capture_energy` | `capture` | actual node energy supplies | calibrated measurements, invoices, transfer/stock/event records and supplier primary evidence | trip; lot; event; pass; transfer; period; owner; species/substance/material; live/shell/appendage and pending/accepted state; actual destination; raw amount and original unit; opening/closing stock; tare; supplier scope; service actual invoiced quantity/unit; asset users/use/replacement/retirement; timestamps; grade/food acceptance; missingness and uncertainty; actual technology/setup; actual provider/source and geographic boundary; cleaning/changeover/idle/failed-event linkage; actual water phase/new intake/recirculation/transfer/fates; quantity conversion evidence; gear specification; set/haul/soak/effort and location; bait origin, received/deployed/unspent/recovered/reused/waste/released stocks; incident/bycatch/gear-loss evidence | Read attributable actual meter/supplier energy records with supply identity; retain original kWh/MJ and convert only under energy_units; fuels belong in mass records. Auxiliary service/asset units and categorical state fields remain separate. Retain raw quantities, close physical node/pass ledgers and assign shared resource responsibility once before dividing by positive final accepted native-body kg for the per-reference physical view; keep the separate section 7 single-output LCA attribution and complete matrix. | MJ | Every actual event/transfer and meter interval; reconcile each trip/run and period closure | Complete declared trip/campaign, including return/idle/cleaning and unsuccessful periods plus actual asset service history | Only actual capture node responsibility and declared supplier/service boundary | per 1 kg reference flow | Calibration and meter scope; original receipts and transfer/stock reconciliation; state/acceptance and independent quantitative evidence; signed resource/period/service allocation and uncertainty |
| `cp_grade_mass` | `grade` | actual native-body/material/water/biomass fates | calibrated measurements, invoices, transfer/stock/event records and supplier primary evidence | trip; lot; event; pass; transfer; period; owner; species/substance/material; live/shell/appendage and pending/accepted state; actual destination; raw amount and original unit; opening/closing stock; tare; supplier scope; service actual invoiced quantity/unit; asset users/use/replacement/retirement; timestamps; grade/food acceptance; missingness and uncertainty; actual technology/setup; actual provider/source and geographic boundary; cleaning/changeover/idle/failed-event linkage; actual water phase/new intake/recirculation/transfer/fates; quantity conversion evidence; actual grade criteria and food-use evidence; each accepted/rejected/pending destination; reinspection after condition change | Weigh actual body/material receipts, transfers, stocks and fates using calibrated suitable scales/meters. Conversions require actual density, matched sample or gas-condition evidence. Live/shell/grade/acceptance fields are categorical. Preserve raw node quantities and auxiliary service/asset units separately. Close unallocated physical node/pass stocks and transfers, assign shared resource responsibility once and divide attributable physical quantities by positive final accepted native-body kg for the per-reference physical view; retain a separate section 7 once-attributed single-output LCA view and complete matrix. | kg | Every actual event/transfer and meter interval; reconcile each trip/run and period closure | Complete declared trip/campaign, including return/idle/cleaning and unsuccessful periods plus actual asset service history | Only actual grade node responsibility and declared supplier/service boundary | per 1 kg reference flow | Calibration and meter scope; original receipts and transfer/stock reconciliation; state/acceptance and independent quantitative evidence; signed resource/period/service allocation and uncertainty |
| `cp_grade_energy` | `grade` | actual node energy supplies | calibrated measurements, invoices, transfer/stock/event records and supplier primary evidence | trip; lot; event; pass; transfer; period; owner; species/substance/material; live/shell/appendage and pending/accepted state; actual destination; raw amount and original unit; opening/closing stock; tare; supplier scope; service actual invoiced quantity/unit; asset users/use/replacement/retirement; timestamps; grade/food acceptance; missingness and uncertainty; actual technology/setup; actual provider/source and geographic boundary; cleaning/changeover/idle/failed-event linkage; actual water phase/new intake/recirculation/transfer/fates; quantity conversion evidence; actual grade criteria and food-use evidence; each accepted/rejected/pending destination; reinspection after condition change | Read attributable actual meter/supplier energy records with supply identity; retain original kWh/MJ and convert only under energy_units; fuels belong in mass records. Auxiliary service/asset units and categorical state fields remain separate. Retain raw quantities, close physical node/pass ledgers and assign shared resource responsibility once before dividing by positive final accepted native-body kg for the per-reference physical view; keep the separate section 7 single-output LCA attribution and complete matrix. | MJ | Every actual event/transfer and meter interval; reconcile each trip/run and period closure | Complete declared trip/campaign, including return/idle/cleaning and unsuccessful periods plus actual asset service history | Only actual grade node responsibility and declared supplier/service boundary | per 1 kg reference flow | Calibration and meter scope; original receipts and transfer/stock reconciliation; state/acceptance and independent quantitative evidence; signed resource/period/service allocation and uncertainty |
| `cp_live_maintenance_mass` | `live_maintenance` | actual native-body/material/water/biomass fates | calibrated measurements, invoices, transfer/stock/event records and supplier primary evidence | trip; lot; event; pass; transfer; period; owner; species/substance/material; live/shell/appendage and pending/accepted state; actual destination; raw amount and original unit; opening/closing stock; tare; supplier scope; service actual invoiced quantity/unit; asset users/use/replacement/retirement; timestamps; grade/food acceptance; missingness and uncertainty; actual technology/setup; actual provider/source and geographic boundary; cleaning/changeover/idle/failed-event linkage; actual water phase/new intake/recirculation/transfer/fates; quantity conversion evidence; actual hold duration and water/air/temperature/oxygen care conditions; actual feeding if any; viability and body-condition changes | Weigh actual body/material receipts, transfers, stocks and fates using calibrated suitable scales/meters. Conversions require actual density, matched sample or gas-condition evidence. Live/shell/grade/acceptance fields are categorical. Preserve raw node quantities and auxiliary service/asset units separately. Close unallocated physical node/pass stocks and transfers, assign shared resource responsibility once and divide attributable physical quantities by positive final accepted native-body kg for the per-reference physical view; retain a separate section 7 once-attributed single-output LCA view and complete matrix. | kg | Every actual event/transfer and meter interval; reconcile each trip/run and period closure | Complete declared trip/campaign, including return/idle/cleaning and unsuccessful periods plus actual asset service history | Only actual live_maintenance node responsibility and declared supplier/service boundary | per 1 kg reference flow | Calibration and meter scope; original receipts and transfer/stock reconciliation; state/acceptance and independent quantitative evidence; signed resource/period/service allocation and uncertainty |
| `cp_live_maintenance_energy` | `live_maintenance` | actual node energy supplies | calibrated measurements, invoices, transfer/stock/event records and supplier primary evidence | trip; lot; event; pass; transfer; period; owner; species/substance/material; live/shell/appendage and pending/accepted state; actual destination; raw amount and original unit; opening/closing stock; tare; supplier scope; service actual invoiced quantity/unit; asset users/use/replacement/retirement; timestamps; grade/food acceptance; missingness and uncertainty; actual technology/setup; actual provider/source and geographic boundary; cleaning/changeover/idle/failed-event linkage; actual water phase/new intake/recirculation/transfer/fates; quantity conversion evidence; actual hold duration and water/air/temperature/oxygen care conditions; actual feeding if any; viability and body-condition changes | Read attributable actual meter/supplier energy records with supply identity; retain original kWh/MJ and convert only under energy_units; fuels belong in mass records. Auxiliary service/asset units and categorical state fields remain separate. Retain raw quantities, close physical node/pass ledgers and assign shared resource responsibility once before dividing by positive final accepted native-body kg for the per-reference physical view; keep the separate section 7 single-output LCA attribution and complete matrix. | MJ | Every actual event/transfer and meter interval; reconcile each trip/run and period closure | Complete declared trip/campaign, including return/idle/cleaning and unsuccessful periods plus actual asset service history | Only actual live_maintenance node responsibility and declared supplier/service boundary | per 1 kg reference flow | Calibration and meter scope; original receipts and transfer/stock reconciliation; state/acceptance and independent quantitative evidence; signed resource/period/service allocation and uncertainty |
| `cp_presentation_mass` | `presentation` | actual native-body/material/water/biomass fates | calibrated measurements, invoices, transfer/stock/event records and supplier primary evidence | trip; lot; event; pass; transfer; period; owner; species/substance/material; live/shell/appendage and pending/accepted state; actual destination; raw amount and original unit; opening/closing stock; tare; supplier scope; service actual invoiced quantity/unit; asset users/use/replacement/retirement; timestamps; grade/food acceptance; missingness and uncertainty; actual technology/setup; actual provider/source and geographic boundary; cleaning/changeover/idle/failed-event linkage; actual water phase/new intake/recirculation/transfer/fates; quantity conversion evidence; actual band and packaging material/use/removed/stock; body versus accessory tare; actual recipient | Weigh actual body/material receipts, transfers, stocks and fates using calibrated suitable scales/meters. Conversions require actual density, matched sample or gas-condition evidence. Live/shell/grade/acceptance fields are categorical. Preserve raw node quantities and auxiliary service/asset units separately. Close unallocated physical node/pass stocks and transfers, assign shared resource responsibility once and divide attributable physical quantities by positive final accepted native-body kg for the per-reference physical view; retain a separate section 7 once-attributed single-output LCA view and complete matrix. | kg | Every actual event/transfer and meter interval; reconcile each trip/run and period closure | Complete declared trip/campaign, including return/idle/cleaning and unsuccessful periods plus actual asset service history | Only actual presentation node responsibility and declared supplier/service boundary | per 1 kg reference flow | Calibration and meter scope; original receipts and transfer/stock reconciliation; state/acceptance and independent quantitative evidence; signed resource/period/service allocation and uncertainty |
| `cp_presentation_energy` | `presentation` | actual node energy supplies | calibrated measurements, invoices, transfer/stock/event records and supplier primary evidence | trip; lot; event; pass; transfer; period; owner; species/substance/material; live/shell/appendage and pending/accepted state; actual destination; raw amount and original unit; opening/closing stock; tare; supplier scope; service actual invoiced quantity/unit; asset users/use/replacement/retirement; timestamps; grade/food acceptance; missingness and uncertainty; actual technology/setup; actual provider/source and geographic boundary; cleaning/changeover/idle/failed-event linkage; actual water phase/new intake/recirculation/transfer/fates; quantity conversion evidence; actual band and packaging material/use/removed/stock; body versus accessory tare; actual recipient | Read attributable actual meter/supplier energy records with supply identity; retain original kWh/MJ and convert only under energy_units; fuels belong in mass records. Auxiliary service/asset units and categorical state fields remain separate. Retain raw quantities, close physical node/pass ledgers and assign shared resource responsibility once before dividing by positive final accepted native-body kg for the per-reference physical view; keep the separate section 7 single-output LCA attribution and complete matrix. | MJ | Every actual event/transfer and meter interval; reconcile each trip/run and period closure | Complete declared trip/campaign, including return/idle/cleaning and unsuccessful periods plus actual asset service history | Only actual presentation node responsibility and declared supplier/service boundary | per 1 kg reference flow | Calibration and meter scope; original receipts and transfer/stock reconciliation; state/acceptance and independent quantitative evidence; signed resource/period/service allocation and uncertainty |
| `cp_handover_mass` | `handover` | actual native-body/material/water/biomass fates | calibrated measurements, invoices, transfer/stock/event records and supplier primary evidence | trip; lot; event; pass; transfer; period; owner; species/substance/material; live/shell/appendage and pending/accepted state; actual destination; raw amount and original unit; opening/closing stock; tare; supplier scope; service actual invoiced quantity/unit; asset users/use/replacement/retirement; timestamps; grade/food acceptance; missingness and uncertainty; actual technology/setup; actual provider/source and geographic boundary; cleaning/changeover/idle/failed-event linkage; actual water phase/new intake/recirculation/transfer/fates; quantity conversion evidence; actual final gate/place/time/recipient; current live and food acceptance; calibrated gross/body/accessory/free-water/ice tare | Weigh actual body/material receipts, transfers, stocks and fates using calibrated suitable scales/meters. Conversions require actual density, matched sample or gas-condition evidence. Live/shell/grade/acceptance fields are categorical. Preserve raw node quantities and auxiliary service/asset units separately. Close unallocated physical node/pass stocks and transfers, assign shared resource responsibility once and divide attributable physical quantities by positive final accepted native-body kg for the per-reference physical view; retain a separate section 7 once-attributed single-output LCA view and complete matrix. | kg | Every actual event/transfer and meter interval; reconcile each trip/run and period closure | Complete declared trip/campaign, including return/idle/cleaning and unsuccessful periods plus actual asset service history | Only actual handover node responsibility and declared supplier/service boundary | per 1 kg reference flow | Calibration and meter scope; original receipts and transfer/stock reconciliation; state/acceptance and independent quantitative evidence; signed resource/period/service allocation and uncertainty |
| `cp_handover_energy` | `handover` | actual node energy supplies | calibrated measurements, invoices, transfer/stock/event records and supplier primary evidence | trip; lot; event; pass; transfer; period; owner; species/substance/material; live/shell/appendage and pending/accepted state; actual destination; raw amount and original unit; opening/closing stock; tare; supplier scope; service actual invoiced quantity/unit; asset users/use/replacement/retirement; timestamps; grade/food acceptance; missingness and uncertainty; actual technology/setup; actual provider/source and geographic boundary; cleaning/changeover/idle/failed-event linkage; actual water phase/new intake/recirculation/transfer/fates; quantity conversion evidence; actual final gate/place/time/recipient; current live and food acceptance; calibrated gross/body/accessory/free-water/ice tare | Read attributable actual meter/supplier energy records with supply identity; retain original kWh/MJ and convert only under energy_units; fuels belong in mass records. Auxiliary service/asset units and categorical state fields remain separate. Retain raw quantities, close physical node/pass ledgers and assign shared resource responsibility once before dividing by positive final accepted native-body kg for the per-reference physical view; keep the separate section 7 single-output LCA attribution and complete matrix. | MJ | Every actual event/transfer and meter interval; reconcile each trip/run and period closure | Complete declared trip/campaign, including return/idle/cleaning and unsuccessful periods plus actual asset service history | Only actual handover node responsibility and declared supplier/service boundary | per 1 kg reference flow | Calibration and meter scope; original receipts and transfer/stock reconciliation; state/acceptance and independent quantitative evidence; signed resource/period/service allocation and uncertainty |
| `cp_capture_services` | `capture` | actual pure purchased services and attributed asset service | original invoices, supplier primary inventory, asset-use and scope register | actual service functional unit and billed quantity; exact provider and service state; inclusive resources; event/lot/period; asset id and users; lifetime/use/replacement/retirement evidence; attribution matrix; underlying material/energy units; uncertainty | Retain the real invoiced unit, never substitute kg of service. Reconcile included scope with physical rows, record every actual asset-service consumer/period and inherited burden once; resolve exact service property/unit and independent quantitative guardrail before concrete exchange generation. | actual invoiced functional unit; underlying asset activity units kept separately | every actual service/asset-use event and period closure | complete declared campaign and actual service history | actual capture services and resource scope | Retain actual service quantities and allocation matrix; labelled physical activity and separate once-attributed LCA view per 1 kg reference flow. | invoice, supplier scope, usage history, unit/support verification and signed attribution |
| `cp_capture_reusable_accessories` | `capture` | actual reusable crate/container physical stock and handoff ledger | calibrated physical weighing and paired return/transfer/stock records | container id/material; opening stock; received; actual filled/empty transfer; return; loss; treatment; closing stock; physical kg; event/period/owner; separately attributed manufacture/use | Track actual physical reusable-container receipt, forward handoff and return across each real node/gate at actual mass. Distinguish those stock transfers from per-use manufacturing attribution in the services/asset ledger; final data package must instantiate actual physical exchanges or explicit stock/handoff subledger, without treating full returnable container mass as disposable packaging or animal mass. | kg | each actual receipt/return/handoff and stock closure | complete campaign, including actual post-gate container return obligations | actual capture container physical boundary | per 1 kg reference flow | paired container ids, weighing/tare evidence and independent stock closure |
| `cp_grade_services` | `grade` | actual pure purchased services and attributed asset service | original invoices, supplier primary inventory, asset-use and scope register | actual service functional unit and billed quantity; exact provider and service state; inclusive resources; event/lot/period; asset id and users; lifetime/use/replacement/retirement evidence; attribution matrix; underlying material/energy units; uncertainty | Retain the real invoiced unit, never substitute kg of service. Reconcile included scope with physical rows, record every actual asset-service consumer/period and inherited burden once; resolve exact service property/unit and independent quantitative guardrail before concrete exchange generation. | actual invoiced functional unit; underlying asset activity units kept separately | every actual service/asset-use event and period closure | complete declared campaign and actual service history | actual grade services and resource scope | Retain actual service quantities and allocation matrix; labelled physical activity and separate once-attributed LCA view per 1 kg reference flow. | invoice, supplier scope, usage history, unit/support verification and signed attribution |
| `cp_grade_reusable_accessories` | `grade` | actual reusable crate/container physical stock and handoff ledger | calibrated physical weighing and paired return/transfer/stock records | container id/material; opening stock; received; actual filled/empty transfer; return; loss; treatment; closing stock; physical kg; event/period/owner; separately attributed manufacture/use | Track actual physical reusable-container receipt, forward handoff and return across each real node/gate at actual mass. Distinguish those stock transfers from per-use manufacturing attribution in the services/asset ledger; final data package must instantiate actual physical exchanges or explicit stock/handoff subledger, without treating full returnable container mass as disposable packaging or animal mass. | kg | each actual receipt/return/handoff and stock closure | complete campaign, including actual post-gate container return obligations | actual grade container physical boundary | per 1 kg reference flow | paired container ids, weighing/tare evidence and independent stock closure |
| `cp_live_maintenance_services` | `live_maintenance` | actual pure purchased services and attributed asset service | original invoices, supplier primary inventory, asset-use and scope register | actual service functional unit and billed quantity; exact provider and service state; inclusive resources; event/lot/period; asset id and users; lifetime/use/replacement/retirement evidence; attribution matrix; underlying material/energy units; uncertainty | Retain the real invoiced unit, never substitute kg of service. Reconcile included scope with physical rows, record every actual asset-service consumer/period and inherited burden once; resolve exact service property/unit and independent quantitative guardrail before concrete exchange generation. | actual invoiced functional unit; underlying asset activity units kept separately | every actual service/asset-use event and period closure | complete declared campaign and actual service history | actual live_maintenance services and resource scope | Retain actual service quantities and allocation matrix; labelled physical activity and separate once-attributed LCA view per 1 kg reference flow. | invoice, supplier scope, usage history, unit/support verification and signed attribution |
| `cp_live_maintenance_reusable_accessories` | `live_maintenance` | actual reusable crate/container physical stock and handoff ledger | calibrated physical weighing and paired return/transfer/stock records | container id/material; opening stock; received; actual filled/empty transfer; return; loss; treatment; closing stock; physical kg; event/period/owner; separately attributed manufacture/use | Track actual physical reusable-container receipt, forward handoff and return across each real node/gate at actual mass. Distinguish those stock transfers from per-use manufacturing attribution in the services/asset ledger; final data package must instantiate actual physical exchanges or explicit stock/handoff subledger, without treating full returnable container mass as disposable packaging or animal mass. | kg | each actual receipt/return/handoff and stock closure | complete campaign, including actual post-gate container return obligations | actual live_maintenance container physical boundary | per 1 kg reference flow | paired container ids, weighing/tare evidence and independent stock closure |
| `cp_presentation_services` | `presentation` | actual pure purchased services and attributed asset service | original invoices, supplier primary inventory, asset-use and scope register | actual service functional unit and billed quantity; exact provider and service state; inclusive resources; event/lot/period; asset id and users; lifetime/use/replacement/retirement evidence; attribution matrix; underlying material/energy units; uncertainty | Retain the real invoiced unit, never substitute kg of service. Reconcile included scope with physical rows, record every actual asset-service consumer/period and inherited burden once; resolve exact service property/unit and independent quantitative guardrail before concrete exchange generation. | actual invoiced functional unit; underlying asset activity units kept separately | every actual service/asset-use event and period closure | complete declared campaign and actual service history | actual presentation services and resource scope | Retain actual service quantities and allocation matrix; labelled physical activity and separate once-attributed LCA view per 1 kg reference flow. | invoice, supplier scope, usage history, unit/support verification and signed attribution |
| `cp_presentation_reusable_accessories` | `presentation` | actual reusable crate/container physical stock and handoff ledger | calibrated physical weighing and paired return/transfer/stock records | container id/material; opening stock; received; actual filled/empty transfer; return; loss; treatment; closing stock; physical kg; event/period/owner; separately attributed manufacture/use | Track actual physical reusable-container receipt, forward handoff and return across each real node/gate at actual mass. Distinguish those stock transfers from per-use manufacturing attribution in the services/asset ledger; final data package must instantiate actual physical exchanges or explicit stock/handoff subledger, without treating full returnable container mass as disposable packaging or animal mass. | kg | each actual receipt/return/handoff and stock closure | complete campaign, including actual post-gate container return obligations | actual presentation container physical boundary | per 1 kg reference flow | paired container ids, weighing/tare evidence and independent stock closure |
| `cp_handover_services` | `handover` | actual pure purchased services and attributed asset service | original invoices, supplier primary inventory, asset-use and scope register | actual service functional unit and billed quantity; exact provider and service state; inclusive resources; event/lot/period; asset id and users; lifetime/use/replacement/retirement evidence; attribution matrix; underlying material/energy units; uncertainty | Retain the real invoiced unit, never substitute kg of service. Reconcile included scope with physical rows, record every actual asset-service consumer/period and inherited burden once; resolve exact service property/unit and independent quantitative guardrail before concrete exchange generation. | actual invoiced functional unit; underlying asset activity units kept separately | every actual service/asset-use event and period closure | complete declared campaign and actual service history | actual handover services and resource scope | Retain actual service quantities and allocation matrix; labelled physical activity and separate once-attributed LCA view per 1 kg reference flow. | invoice, supplier scope, usage history, unit/support verification and signed attribution |
| `cp_handover_reusable_accessories` | `handover` | actual reusable crate/container physical stock and handoff ledger | calibrated physical weighing and paired return/transfer/stock records | container id/material; opening stock; received; actual filled/empty transfer; return; loss; treatment; closing stock; physical kg; event/period/owner; separately attributed manufacture/use | Track actual physical reusable-container receipt, forward handoff and return across each real node/gate at actual mass. Distinguish those stock transfers from per-use manufacturing attribution in the services/asset ledger; final data package must instantiate actual physical exchanges or explicit stock/handoff subledger, without treating full returnable container mass as disposable packaging or animal mass. | kg | each actual receipt/return/handoff and stock closure | complete campaign, including actual post-gate container return obligations | actual handover container physical boundary | per 1 kg reference flow | paired container ids, weighing/tare evidence and independent stock closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_normalization | all inventory rows | First close the unallocated actual physical node/pass stock and transfer ledger, assign shared resource ownership once, then divide attributable raw physical quantities by positive final accepted native-body kg for the physical per-reference view. Separately apply section 7 output attribution once for the labelled single-output LCA view, retaining original quantities and full matrix; physical partitions are never multiplied by economic shares. | actual raw quantity; accepted final native-body kg; event ownership; output matrix | physical per-reference amount; separately labelled single-output LCA amount |  |
| stock_closure | each actual node/pass | Opening stock + actual receipts = actual products/transfers + waste + environmental fates + closing stock, on consistent material boundaries. Keep native body, bait, accessories, water/ice and gear streams separate; document actual transformations and water carried with material without repeating component mass. No missing-balance plug or reconstruction of absent limbs. | actual receipts; stocks; outputs; paired transfer ids; transformations | unallocated reconciled quantities | `mass-balance-identity` |
| direct_emissions | actual direct emissions | Use measured emission mass or actual compatible consumed fuel × documented substance-specific factor with consistent factor units, compartment and carbon/oxidation basis; retain factor provenance and uncertainty. Refrigerant charge/recovery/leak records reconcile actual substance. No universal factors, upstream duplicate, or fossil identity for biogenic respiration. | actual fuel/emission/leak records; compatible independent factors and units | substance-specific direct mass |  |
| count_mass_conversion | actual item-count material records | Actual item count × measured same-material/specification/state item mass, or a documented representative sample with uncertainty; no universal lobster, packaging, band or asset weight. Keep accessory tare separate from native body. | count; matched item mass/sample; uncertainty | actual physical kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_state | each lot/pass | Actual species/source/wild status, body/shell/appendage state, live condition, grade, food acceptance and actual chronology are mandatory; pending or unknown cannot default to final. | capture and inspection log; transfer/pass graph; competent actual acceptance evidence |
| quantitative_independence | every amount/range | Preserve original units, calibration, conversions, period coverage and uncertainty. Replace provisional screening with independent compatible evidence before calling numerical QA complete; no own-batch maximum or guessed zero. | raw measured records; independent campaigns/supplier study; documented unit and scope comparison |
| completeness_and_burdens | each event and actual service | Complete all physical fates, no-output resources, own/secondary bait, return/idle, shared assets and service-inclusive boundaries. Missing concrete service units/support or flow identity means incomplete final inventory, not a silently omitted exchange. | stock/transfer closure; asset-service ledgers; supplier scope; resource/period/output matrices |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_purchased_primary_bait` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual externally supplied primary bait”; retain all following collection, quantity and normalization obligations: Only actual bait-requiring gear: weigh supplied bait by actual species/material and supplier first-use boundary; include bait capture/production, conditioning and delivery in its upstream dataset. Do not treat bought bait as free environmental biomass. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `dfo-at-sea-lobster-catch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_purchased_secondary_bait` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual supplied processing-residual or secondary-material bait”; retain all following collection, quantity and normalization obligations: When actually used, identify processing-residual origin, prior-system handoff, recovery/preparation, storage and transport. Record the supplier burden boundary under secondary_bait_attribution; no automatic zero burden, avoided-catch credit, prototype recipe or catch-performance factor. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `fishres-secondary-lobster-bait-2025` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_own_bait_receipt` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual internally supplied bait from separately accounted own catch”; retain all following collection, quantity and normalization obligations: Pair a separately owned bait-capture or retained-bycatch output with this receipt using transfer and event ids. Carry its assigned upstream burden; do not count the same own-catch biomass twice or call it purchased bait. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `dfo-at-sea-lobster-catch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_marine_fuel` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual directly consumed marine or site combustion fuel”; retain all following collection, quantity and normalization obligations: Only the fuel actually burned under this node responsibility, expanded by grade, composition and delivery boundary. Use calibrated mass or density-supported volume conversion; onboard electricity generation fuel is here, not also purchased grid electricity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_operating_materials` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual node operating consumables and replacement materials”; retain all following collection, quantity and normalization obligations: Expand real lubricants, cleaners, filters, repairs or replacement components by material, purpose and supplier boundary. Exclude bait, separately recorded fuel/water/ice, packaging/bands and supplier-inclusive material. Supplier-only service without material transfer stays in the service ledger in its actual unit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_incidental_biomass_removed` | `capture`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual nontarget organisms removed with the catch”; retain all following collection, quantity and normalization obligations: Expand by observed species/group and actual mass when nontarget organisms cross the capture boundary; reconcile kept products, internal bait, live returns and dead discards once. Mere presence near traps is not removal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `dfo-at-sea-lobster-catch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_intended_catch` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Other actual independently intended catch products”; retain all following collection, quantity and normalization obligations: Expand by concrete species, live/dead state, intended use and accepted handoff, including actual saleable nonreference catch only with evidence. A retained incidental animal is not automatically a coproduct. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `dfo-at-sea-lobster-catch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_retained_bait_transfer` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Actual retained catch transferred for own bait use”; retain all following collection, quantity and normalization obligations: Record each retained target or incidental species actually handed to a separate bait use with a paired recipient, or opening/closing bait stock. For immediate same-node reuse retain the internal ledger, do not create a second external input/removal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `dfo-at-sea-lobster-catch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_external_handoff` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Actual recovered or unused bait handed to an external user”; retain all following collection, quantity and normalization obligations: Identify actual accepted material, recipient and commercial or reuse purpose. Internal recovery remains stock/loop evidence rather than an external coproduct. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `dfo-at-sea-lobster-catch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_free_water_ice_transfer` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Actual free water or ice physically accompanying the live transfer”; retain all following collection, quantity and normalization obligations: Only when physically transferred with the viable body or container, separate from natural retained body fluid. Identify liquid/solid state, actual measured mass and paired recipient other_water_receipt; receiver records ice as that actual phase without a second purchased-ice input. In-node retained stock and external discharge are separate fates. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_treatment_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual unspent or recovered bait sent to treatment”; retain all following collection, quantity and normalization obligations: Weigh actual unusable bait shipped to the recorded waste recipient, distinct from closing stock, intended external sale, recovered reuse and environmental loss. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `dfo-at-sea-lobster-catch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_operating_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating material sent to treatment”; retain all following collection, quantity and normalization obligations: Expand used filters, lubricant, cleaner residues, damaged components and discarded container material by identity and actual waste recipient. Exclude independently recorded biomass/bait/water waste and environmental gear loss; no duplicate spent-material output in another node. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_bait_environment_release` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual bait material released to water”; retain all following collection, quantity and normalization obligations: Quantify evidenced consumed/leached/dispersed or deliberately released bait by actual material and receiving water; avoid treating unknown bait disappearance as a measured emission or counting original bait and decomposition products twice. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `dfo-at-sea-lobster-catch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_direct_other_emissions` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other substance-specific direct emissions or leakage”; retain all following collection, quantity and normalization obligations: Expand each actual pollutant, refrigerant, biogenic respiratory gas or leaked material by substance/species, medium, method, factor provenance and actual event. Broad pollutant labels cannot acquire a fixed identity; neither zero nor a generic factor is inferred from missing records. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_carried_accessories_receipt` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Actual disposable accessories received from a preceding pass”; retain all following collection, quantity and normalization obligations: Only real bands or disposable packaging carried from an earlier presentation pass, with paired transfer id and actual material mass; no second purchase or new body mass. Preserve receipt/removal/closing stock/forward handoff for the actual node order. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_marine_fuel` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Actual directly consumed marine or site combustion fuel”; retain all following collection, quantity and normalization obligations: Only the fuel actually burned under this node responsibility, expanded by grade, composition and delivery boundary. Use calibrated mass or density-supported volume conversion; onboard electricity generation fuel is here, not also purchased grid electricity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_operating_materials` | `grade`; inputs; product | Identify and separately collect every actual exchange covered by “Actual node operating consumables and replacement materials”; retain all following collection, quantity and normalization obligations: Expand real lubricants, cleaners, filters, repairs or replacement components by material, purpose and supplier boundary. Exclude bait, separately recorded fuel/water/ice, packaging/bands and supplier-inclusive material. Supplier-only service without material transfer stays in the service ledger in its actual unit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_carried_accessories_transfer` | `grade`; outputs; product | Identify and separately collect every actual exchange covered by “Actual disposable accessories passed to the next handling node”; retain all following collection, quantity and normalization obligations: Pair the actual next recipient and measured physical mass, including continued attached bands; record removal to actual treatment separately. No upstream manufacturing attribution or economic coproduct is inferred from this internal transfer. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_free_water_ice_transfer` | `grade`; outputs; product | Identify and separately collect every actual exchange covered by “Actual free water or ice physically accompanying the live transfer”; retain all following collection, quantity and normalization obligations: Only when physically transferred with the viable body or container, separate from natural retained body fluid. Identify liquid/solid state, actual measured mass and paired recipient other_water_receipt; receiver records ice as that actual phase without a second purchased-ice input. In-node retained stock and external discharge are separate fates. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_operating_waste` | `grade`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating material sent to treatment”; retain all following collection, quantity and normalization obligations: Expand used filters, lubricant, cleaner residues, damaged components and discarded container material by identity and actual waste recipient. Exclude independently recorded biomass/bait/water waste and environmental gear loss; no duplicate spent-material output in another node. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_grade_direct_other_emissions` | `grade`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other substance-specific direct emissions or leakage”; retain all following collection, quantity and normalization obligations: Expand each actual pollutant, refrigerant, biogenic respiratory gas or leaked material by substance/species, medium, method, factor provenance and actual event. Broad pollutant labels cannot acquire a fixed identity; neither zero nor a generic factor is inferred from missing records. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_grade_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_maintenance_carried_accessories_receipt` | `live_maintenance`; inputs; product | Identify and separately collect every actual exchange covered by “Actual disposable accessories received from a preceding pass”; retain all following collection, quantity and normalization obligations: Only real bands or disposable packaging carried from an earlier presentation pass, with paired transfer id and actual material mass; no second purchase or new body mass. Preserve receipt/removal/closing stock/forward handoff for the actual node order. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_maintenance_marine_fuel` | `live_maintenance`; inputs; product | Identify and separately collect every actual exchange covered by “Actual directly consumed marine or site combustion fuel”; retain all following collection, quantity and normalization obligations: Only the fuel actually burned under this node responsibility, expanded by grade, composition and delivery boundary. Use calibrated mass or density-supported volume conversion; onboard electricity generation fuel is here, not also purchased grid electricity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_maintenance_operating_materials` | `live_maintenance`; inputs; product | Identify and separately collect every actual exchange covered by “Actual node operating consumables and replacement materials”; retain all following collection, quantity and normalization obligations: Expand real lubricants, cleaners, filters, repairs or replacement components by material, purpose and supplier boundary. Exclude bait, separately recorded fuel/water/ice, packaging/bands and supplier-inclusive material. Supplier-only service without material transfer stays in the service ledger in its actual unit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_maintenance_care_feed` | `live_maintenance`; inputs; product | Identify and separately collect every actual exchange covered by “Actual bounded-maintenance care feed if supplied”; retain all following collection, quantity and normalization obligations: Not required by this PCR. Include only actually supplied care material within bounded maintenance with no intentional biomass-production/fattening route; retain identity, amount and its uneaten/waste/environmental fate. If records demonstrate grow-out, this product route is excluded rather than relabelled maintenance. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_maintenance_carried_accessories_transfer` | `live_maintenance`; outputs; product | Identify and separately collect every actual exchange covered by “Actual disposable accessories passed to the next handling node”; retain all following collection, quantity and normalization obligations: Pair the actual next recipient and measured physical mass, including continued attached bands; record removal to actual treatment separately. No upstream manufacturing attribution or economic coproduct is inferred from this internal transfer. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_maintenance_free_water_ice_transfer` | `live_maintenance`; outputs; product | Identify and separately collect every actual exchange covered by “Actual free water or ice physically accompanying the live transfer”; retain all following collection, quantity and normalization obligations: Only when physically transferred with the viable body or container, separate from natural retained body fluid. Identify liquid/solid state, actual measured mass and paired recipient other_water_receipt; receiver records ice as that actual phase without a second purchased-ice input. In-node retained stock and external discharge are separate fates. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_maintenance_operating_waste` | `live_maintenance`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating material sent to treatment”; retain all following collection, quantity and normalization obligations: Expand used filters, lubricant, cleaner residues, damaged components and discarded container material by identity and actual waste recipient. Exclude independently recorded biomass/bait/water waste and environmental gear loss; no duplicate spent-material output in another node. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_maintenance_feed_waste` | `live_maintenance`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual uneaten care feed sent to treatment”; retain all following collection, quantity and normalization obligations: Record actual separate treatment fate and receiver, distinct from stock and material in wastewater; if feed is already part of measured treatment-water composition do not repeat its physical mass in both balance streams. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_maintenance_direct_other_emissions` | `live_maintenance`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other substance-specific direct emissions or leakage”; retain all following collection, quantity and normalization obligations: Expand each actual pollutant, refrigerant, biogenic respiratory gas or leaked material by substance/species, medium, method, factor provenance and actual event. Broad pollutant labels cannot acquire a fixed identity; neither zero nor a generic factor is inferred from missing records. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_live_maintenance_feed_environment` | `live_maintenance`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual care feed or metabolic material released to environmental water”; retain all following collection, quantity and normalization obligations: Quantify only evidenced actual material identity, water medium and event, including excreta when relevant. Distinguish feed-derived material and native-body loss, retain basis and prevent repetition in measured effluent composition. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_restraint_material` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual disposable claw restraints or protective bands”; retain all following collection, quantity and normalization obligations: Only when actually applied; identify material and measured item mass or documented count-to-mass conversion. These are accessory material, not lobster native body. Reusable restraint service remains in the separate asset ledger. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_disposable_protective_pack` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual disposable live-lobster protective packaging”; retain all following collection, quantity and normalization obligations: Record actual liners, pads, cartons, labels and containers by concrete material, dryness and supplier boundary. Distinguish disposable physical supply from reusable-container manufacturing attribution and from cooling media. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_carried_accessories_receipt` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual disposable accessories received from a preceding pass”; retain all following collection, quantity and normalization obligations: Only real bands or disposable packaging carried from an earlier presentation pass, with paired transfer id and actual material mass; no second purchase or new body mass. Preserve receipt/removal/closing stock/forward handoff for the actual node order. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_marine_fuel` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual directly consumed marine or site combustion fuel”; retain all following collection, quantity and normalization obligations: Only the fuel actually burned under this node responsibility, expanded by grade, composition and delivery boundary. Use calibrated mass or density-supported volume conversion; onboard electricity generation fuel is here, not also purchased grid electricity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_operating_materials` | `presentation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual node operating consumables and replacement materials”; retain all following collection, quantity and normalization obligations: Expand real lubricants, cleaners, filters, repairs or replacement components by material, purpose and supplier boundary. Exclude bait, separately recorded fuel/water/ice, packaging/bands and supplier-inclusive material. Supplier-only service without material transfer stays in the service ledger in its actual unit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presented_accessories_transfer` | `presentation`; outputs; product | Identify and separately collect every actual exchange covered by “Actual disposable packaging and restraints accompanying the live lot”; retain all following collection, quantity and normalization obligations: Measure physical disposable material passed to the next internal node with a paired accessory transfer id. Keep it separate from lobster mass; do not manufacture a second sale allocation just for a protective accessory. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_free_water_ice_transfer` | `presentation`; outputs; product | Identify and separately collect every actual exchange covered by “Actual free water or ice physically accompanying the live transfer”; retain all following collection, quantity and normalization obligations: Only when physically transferred with the viable body or container, separate from natural retained body fluid. Identify liquid/solid state, actual measured mass and paired recipient other_water_receipt; receiver records ice as that actual phase without a second purchased-ice input. In-node retained stock and external discharge are separate fates. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_operating_waste` | `presentation`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating material sent to treatment”; retain all following collection, quantity and normalization obligations: Expand used filters, lubricant, cleaner residues, damaged components and discarded container material by identity and actual waste recipient. Exclude independently recorded biomass/bait/water waste and environmental gear loss; no duplicate spent-material output in another node. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_presentation_direct_other_emissions` | `presentation`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other substance-specific direct emissions or leakage”; retain all following collection, quantity and normalization obligations: Expand each actual pollutant, refrigerant, biogenic respiratory gas or leaked material by substance/species, medium, method, factor provenance and actual event. Broad pollutant labels cannot acquire a fixed identity; neither zero nor a generic factor is inferred from missing records. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_accessories_receipt` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual disposable accessories received with the final lot”; retain all following collection, quantity and normalization obligations: Pair the preceding physical packaging/band transfer and record unchanged or removed material; no duplicate upstream purchase. If no such material exists, do not invent it. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_marine_fuel` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual directly consumed marine or site combustion fuel”; retain all following collection, quantity and normalization obligations: Only the fuel actually burned under this node responsibility, expanded by grade, composition and delivery boundary. Use calibrated mass or density-supported volume conversion; onboard electricity generation fuel is here, not also purchased grid electricity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_operating_materials` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual node operating consumables and replacement materials”; retain all following collection, quantity and normalization obligations: Expand real lubricants, cleaners, filters, repairs or replacement components by material, purpose and supplier boundary. Exclude bait, separately recorded fuel/water/ice, packaging/bands and supplier-inclusive material. Supplier-only service without material transfer stays in the service ledger in its actual unit. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_accessories_handover` | `handover`; outputs; product | Identify and separately collect every actual exchange covered by “Actual disposable accessories physically handed across the gate”; retain all following collection, quantity and normalization obligations: Record disposable packaging, restraints and any other actual accessory material crossing the first gate, excluding reusable-asset manufacturing equivalent mass. These are physical accompaniment, not native-body denominator or an automatic economic coproduct. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_free_water_ice_handover` | `handover`; outputs; product | Identify and separately collect every actual exchange covered by “Actual free water or ice physically handed across the first gate”; retain all following collection, quantity and normalization obligations: Record only actual accessory-carried liquid water or ice accompanying the lot at first handover, by phase and measured mass. Pair its upstream receipt and exclude it from lobster native-body mass, wastewater and an automatic independent coproduct allocation. Natural retained body fluid remains in the body, not this card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_operating_waste` | `handover`; outputs; waste | Identify and separately collect every actual exchange covered by “Actual spent operating material sent to treatment”; retain all following collection, quantity and normalization obligations: Expand used filters, lubricant, cleaner residues, damaged components and discarded container material by identity and actual waste recipient. Exclude independently recorded biomass/bait/water waste and environmental gear loss; no duplicate spent-material output in another node. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_direct_other_emissions` | `handover`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual other substance-specific direct emissions or leakage”; retain all following collection, quantity and normalization obligations: Expand each actual pollutant, refrigerant, biogenic respiratory gas or leaked material by substance/species, medium, method, factor provenance and actual event. Broad pollutant labels cannot acquire a fixed identity; neither zero nor a generic factor is inferred from missing records. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover_mass` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_biomass_waste` | `capture`; outputs; waste | Individually identify and independently measure the actual exchanges within “Actual catch residues or mortality handed to treatment”; all collection and conversion obligations apply: Record concrete dead/rejected bodies or detached tissue and actual treatment destination; do not force actual accepted saleable output into waste, and do not duplicate environmental discards. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `dfo-at-sea-lobster-catch` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_lost_capture_gear` | `capture`; outputs; elementary | Individually identify and independently measure the actual exchanges within “Actual lost trap, line or other capture material to environment”; all collection and conversion obligations apply: Expand by observed material, loss event, location and unrecovered mass; separate retrieved waste and planned replacement. Record ghost-fishing or entanglement observations in the incident ledger, not as invented biomass quantities. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_capture_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture_mass` Sources: `dfo-at-sea-lobster-catch` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_grade_alternative_product` | `grade`; outputs; product | Individually identify and independently measure the actual exchanges within “Actual independently accepted alternative lobster or catch product”; all collection and conversion obligations apply: Expand actual nonreference outputs by species, body/state, quality, intended use, recipient and handoff. This may include an actually accepted downgraded live grade or separately accepted dead-food body, never part of the live reference. Mere rejection without accepted use is not a coproduct. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_grade_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_grade_body_waste` | `grade`; outputs; waste | Individually identify and independently measure the actual exchanges within “Actual rejected bodies or detached tissue sent to treatment”; all collection and conversion obligations apply: Identify mortality, condition rejection and detached tissue with event id, physical mass and treatment handoff; pending inspection remains identified stock, not automatically waste. Exclude bodies already sold or environmentally released. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_grade_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_grade_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_live_maintenance_alternative_product` | `live_maintenance`; outputs; product | Individually identify and independently measure the actual exchanges within “Actual independently accepted alternative lobster or catch product”; all collection and conversion obligations apply: Expand actual nonreference outputs by species, body/state, quality, intended use, recipient and handoff. This may include an actually accepted downgraded live grade or separately accepted dead-food body, never part of the live reference. Mere rejection without accepted use is not a coproduct. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_live_maintenance_body_waste` | `live_maintenance`; outputs; waste | Individually identify and independently measure the actual exchanges within “Actual rejected bodies or detached tissue sent to treatment”; all collection and conversion obligations apply: Identify mortality, condition rejection and detached tissue with event id, physical mass and treatment handoff; pending inspection remains identified stock, not automatically waste. Exclude bodies already sold or environmentally released. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_live_maintenance_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_live_maintenance_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_presentation_alternative_product` | `presentation`; outputs; product | Individually identify and independently measure the actual exchanges within “Actual independently accepted alternative lobster or catch product”; all collection and conversion obligations apply: Expand actual nonreference outputs by species, body/state, quality, intended use, recipient and handoff. This may include an actually accepted downgraded live grade or separately accepted dead-food body, never part of the live reference. Mere rejection without accepted use is not a coproduct. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_presentation_body_waste` | `presentation`; outputs; waste | Individually identify and independently measure the actual exchanges within “Actual rejected bodies or detached tissue sent to treatment”; all collection and conversion obligations apply: Identify mortality, condition rejection and detached tissue with event id, physical mass and treatment handoff; pending inspection remains identified stock, not automatically waste. Exclude bodies already sold or environmentally released. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_presentation_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_presentation_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_handover_alternative_product` | `handover`; outputs; product | Individually identify and independently measure the actual exchanges within “Actual independently accepted alternative lobster or catch product”; all collection and conversion obligations apply: Expand actual nonreference outputs by species, body/state, quality, intended use, recipient and handoff. This may include an actually accepted downgraded live grade or separately accepted dead-food body, never part of the live reference. Mere rejection without accepted use is not a coproduct. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |
| `dq_complete_handover_body_waste` | `handover`; outputs; waste | Individually identify and independently measure the actual exchanges within “Actual rejected bodies or detached tissue sent to treatment”; all collection and conversion obligations apply: Identify mortality, condition rejection and detached tissue with event id, physical mass and treatment handoff; pending inspection remains identified stock, not automatically waste. Exclude bodies already sold or environmentally released. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Amount rule: From actual raw records in cp_handover_mass, retain the unallocated physical receipts/transfers/stocks/fates, assign shared event/node/period ownership once and divide by positive final accepted native-body kg under section 8. Separately apply section 7 once to the labelled single-output LCA view; retain the physical ledger and allocation matrix. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover_mass` Every actual child requires its own quantity, native unit, normalization, destination, UUID and Range evidence; no grouped total, bound or binding is inherited. Any unresolved applicable child makes the final dataset incomplete and fails validation; unknown is not zero. | per-flow original records under linked protocols and identity, fate and range evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity_scope` | reference and actual products | Require wild marine Homarus species, actual native-shell living whole food body, actual appendage/molt condition, source and first producer gate. Exclude spiny/rock lobster, Nephrops, crayfish, farming/fattening, detached parts, dead/frozen/cooked reference and nonfood seed/broodstock/ornamental use. Each concrete final exchange requires verified identity and supports. | `cpc3-wild-homarus` |
| `closure_and_sequence` | all node passes | Reconcile native-body and incidental biomass separately from water/ice/accessories and gear/bait, including opening/closing stocks, accepted alternatives, waste, live returns, actual mortality and environmental loss. Match transfer/pass ids and state history, never fixed 1 kg for upstream feed. Check actual grade before final food handover and reinspection after condition changes; unknown balance or sequence blocks quantitative completeness. |  |
| `quantity_and_ranges` | every active concrete exchange | Collect actual quantities before normalization; zeros require actual inactive role or measured zero, never missing data. Provisional reasoned ranges are screening hypotheses, not default amounts, empirical QA or legal acceptance. Evaluate each expanded identity and pass independently against external/supplier or independent campaign evidence with documented units, bounds and uncertainty; investigate values outside the provisional range without truncation. Never use a batch maximum to validate itself. |  |
| `attribution_and_route` | all resource and output owners | Check gear-event exclusivity/current evidence, actual production mode and periods, complete intended outputs/handoffs, period and shared allocation matrices, secondary bait inheritance and inclusive-service scope. Retain the unallocated physical ledger and one labelled single-output LCA derivation; no duplicate catch, fuel, internal water, own bait, resource ownership or second output share. |  |
| `trace_and_safety` | completed data package | Retain actual authority/market acceptance requirements and evidence appropriate to place/time without converting NOAA regional guidance into a global legal rule. Record viability, handling conditions and current release; cold maintenance does not resurrect dead bodies or reverse unsafe history. Complete protocol, identity, support, measurement and uncertainty evidence is required; checker success alone does not establish product safety or complete inventory. |  |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground wild live whole Homarus producer data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared actual wild species/gear/gate live-food scope with complete quantities and verified concrete downstream identities. |
| excluded_use | Universal global lobster average; farmed/fattened/spiny/Nephrops/crayfish proxy without review; dead/parts/frozen/cooked products; proof of safety/sustainability; automatic ecosystem or avoided-bait credit. |
| required_metadata | Species, wild source, capture technology, event/lot/pass graph, actual live/shell/appendages, grade/food acceptance, first producer gate, periods/return, net-body method, intended outputs, service and asset scope, allocation matrices and actual concrete flow/support identities. |
| required_quality_disclosure | Unallocated physical and separate LCA views; calibration, completeness, quantitative/identity gaps, provisional ranges and uncertainty; supplier/secondary-bait inheritance and inclusive-service evidence. |
| update_trigger | Changed species/gear/gate/product condition, handling chronology, food requirements, bait origin, supplier scope, service/asset users, quantitative evidence or verified identities. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc3-wild-homarus` | official_guidance | UN, CPC Ver.3.0 explanatory notes, 30 June 2025, printed p.47. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification boundary only; wider live/fresh/chilled Homarus leaf, not amounts or gate rules. |
| `noaa-american-lobster` | official_guidance | NOAA Fisheries, American Lobster. https://www.fisheries.noaa.gov/species/american-lobster | American-lobster live-market and actual capture-gear examples only; no global legal thresholds or impact factors. |
| `dfo-at-sea-lobster-catch` | official_guidance | Fisheries and Oceans Canada, at-sea catch technical report 2890. https://waves-vagues.dfo-mpo.gc.ca/library-bibliotheque/342236.pdf | Conditional bait origin, incidental catch and event collection roles; no numerical defaults imported. |
| `fishres-secondary-lobster-bait-2025` | literature | An alternative bait for the American lobster fishery composed of fishery by-products to reduce reliance on forage fish. Fisheries Research 286 (2025), 107389. https://doi.org/10.1016/j.fishres.2025.107389 | Existence of actual fishery-byproduct bait route only; no prototype recipe, relative catch or environmental credit. |
| `mass-balance-identity` | method_factor | Mass conservation and dimensional normalization; declared physical method in this PCR sections 4 and 8. | Exact reference quantity and mass accounting identity, not an external empirical dataset. |
