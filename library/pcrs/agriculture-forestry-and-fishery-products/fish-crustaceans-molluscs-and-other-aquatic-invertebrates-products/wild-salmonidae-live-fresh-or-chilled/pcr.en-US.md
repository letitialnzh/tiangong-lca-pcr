---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-salmonidae-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild Salmonidae, live, fresh or chilled

## 1. Scope and Applicability

This PCR produces foreground data for whole, unheaded and ungutted human-food Salmonidae captured from wild stocks and delivered at first landing or collector handover. Actual marine, brackish or freshwater capture is covered; family identity and wild-capture origin require records independently of market names. Each lot declares exactly one actual live, fresh or chilled state. Habitat, state, species and geography are not inferred from platform availability.

Aquaculture grow-out, ornamental or non-food fish, eggs or juvenile seed as the delivered product, frozen or thawed fish, gutted/head-removed fish, fillets and separately processed roe/liver are excluded. Downstream wholesaling, independent processor handling and distribution after the declared first handover are outside this scope. Hatchery-supported wild catch requires evidence of stock origin and attributable upstream enhancement; it is neither automatically farmed nor burden-free. Capture is a distinct removal responsibility; natural growth before capture is not invented foreground cultivation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-salmonidae-live-fresh-or-chilled |
| classification_refs | CPC 3.0 04221; proposed narrower whole-fish scope |
| covered_products | Wild-captured whole unheaded/ungutted food Salmonidae in actual live, fresh or chilled state at first landing |
| excluded_products | Aquaculture-origin fish; non-Salmonidae fish; ornamental/non-food fish; seed; frozen/thawed fish; gut/head-removed or further processed fish |
| representative_product | A documented whole wild-caught Salmonidae lot, net wet fish mass at first landing |
| production_route | Capture → actual conditional live holding or chilling → landing and handover |
| market_state | Actual live, fresh or chilled, recorded separately for each lot; no functional equivalence between states asserted |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted whole wild-captured food Salmonidae at first landing/collector handover |
| How much | 1 kg net wet complete fish biomass; exclude water, ice and container mass |
| How well | Documented species/family, whole unheaded/ungutted form, wild origin, actual state, habitat and gate acceptance; actual safety/quality requirements from buyer and jurisdiction |
| How long or cycle | Defined trip or shore-capture batch and season; preservation interval, dispatch lot, asset-service periods and any attributable upstream release cohorts are recorded |
| reference_flow_link | `landed_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole wild Salmonidae, live, fresh or chilled at first landing |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Scientific species/family; wild capture and stock origin; actual marine/brackish/freshwater waterbody and geography; gear/vessel or shore mode; trip/batch and season; actual live/fresh/chilled state; whole unheaded/ungutted form; preservation time/temperature; first landing/collector gate; net-mass/tare method; catch composition/discards/mortality; hatchery-enhancement attribution where applicable |
| Binding | |

Declare every qualifier in the foreground package and retain its underlying records. Unknown state or gate is a data gap; do not select an assumed state to complete a reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted complete wet fish with calibrated scales, subtract container tare and separate water/ice; link cp_final. Reference output is exactly 1 kg after normalization. |
| count_conversion | fish and packaging counts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts only using representative measured same-lot individual/empty mass and sampling evidence; no universal fish-count or packaging-count conversion. |
| fuel_mass | fuel inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain measured mass; volume records need actual fuel density and temperature evidence. Distinguish fossil carbon and fuel-grade use. |
| electricity_energy | electricity inputs | Net calorific value energy `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve meter kWh and the verified energy unit group; 1 kWh = 3.6 MJ. Never treat energy as fish mass. |
| water_ledger | water and ice rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record purchased supply, environmental intake, returns, net consumption, ice melt and recirculation separately; convert volume only with documented applicable density. |
| internal_transfer_mass | captured_target_transfer; holding_fish_in; preserved_target_transfer; landing_fish_in | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain actual measured internal fish mass and loss/receiver links; normalize to final accepted lot mass once. Internal transfers are not forced to 1 kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual wild stock at capture location, gear engagement and trip/shore effort; documented upstream attributable support and supplied inputs |
| starting_condition_role | Biological capture context, not a purchased 1 kg fish input or invented cultivation process |
| product_classification_scope | Whole food Salmonidae wild capture at first landing; classification does not imply all marine habitats |
| recursive_input_rule | Same-category purchased fish is separately declared with its true provider gate and upstream dataset; internal catch transfers do not recurse as fresh purchases |
| upstream_dataset_requirement | Actual fuels, water, energy, gear/asset materials, packaging and attributable hatchery-release support require compatible provider datasets and quality/gap disclosure |
| disclosure | Species, stock origin, catch habitat, trip/season/effort, gate/state, support attribution, period/asset service and omitted/unresolved contributions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_capture | capture | Include actual trip mobilization, outbound/return travel, gear deployment/retrieval, retention and first-capture handling; record habitat and effort independently from taxonomy. Natural growth is not foreground farming. | noaa-salmon-fishery-planning |
| boundary_preserve | preserve | Include actual pre-gate live holding or chilling only when performed; record usable state before intervention and stabilized state/time at transfer. Exclude freezing, gutting and filleting. | fao-capture-ice-handling; fao-live-fish-handling |
| boundary_landing | landing | Include first-landing acceptance, protective packaging and producer-owned handling before handover; identify package material/reuse and final state. Later distribution is outside this node. | fao-capture-ice-handling |
| boundary_support | stock_enhancement | Determine release-stock contribution from actual origin evidence and quantify attributable upstream provider burden with documented periods; unknown contribution is a disclosed gap, not zero or invented cultivation. | noaa-pacific-salmon-support |
| boundary_period_assets | all processes | Link trip, holding, landing, seasonal reporting and asset service/replacement/retirement periods; enumerate shared vessel, hold, pumps, landing platform and every consuming node. Include attributable material and service burdens once. | |
| boundary_ecosystem | catch records | Record removed target/non-target biomass, live releases, discard survival/mortality and gear loss with locations and uncertainty. Establish actual destination and material/substance before adding exchanges; do not invent an elementary fish-stock UUID. | noaa-salmon-fishery-planning |
| boundary_full_inventory | all processes | Inventory actual ancillary fuels, energy, water abstraction, treatment agents, wastewater and direct species-specific releases wherever used, including pre-gate cleaning/changeover; umbrella cards require actual concrete exchanges rather than generic default identities. | |

## 6. Process Inventory Structure

The production mode is a trip/shore batch with a defined seasonal reporting period. Index every input, catch output, cleaning/changeover and holding event to its batch and period. Capture produces the retained initial fish independently of preservation. Preservation accepts usable caught fish and hands over the actual maintained live or chilled state. Landing protects/presents that state, verifies acceptance and hands it over; it does not include subsequent distribution.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| capture | Wild-stock capture | required | Actual vessel or shore wild capture | Foreground capture; parent for the preservation/landing chain | Measured retained catch and complete catch ledger |
| preserve | Pre-landing live holding or chilling | conditional | Actual pre-first-gate holding/chilling recorded for the lot | Preservation; follows capture | Actual incoming and outgoing whole-fish mass |
| landing | First landing and dispatch | required | Actual first landing or collector handover | Protective packaging and handover; receives actual selected branch | 1 kg accepted final fish |

All cards use the final reference denominator. Ranges other than the 1–1 kg reference definition are deliberately broad provisional reasoned QA screens, not default inventory factors, regulatory limits or universal allowable values. Their nonnegative finite bounds screen data-entry orders of magnitude across short/long trips, shore/vessel effort, wet/dry packaging and holding alternatives. Zero means evidenced absence only. Actual site/lot records and justified excursions take precedence; unusual values require explanation and replacement of provisional screens with reviewed site evidence. Conditional umbrella cards instantiate zero, one or multiple independently verified exchanges after actual specification is known.

### Process: Wild-stock capture (`capture`)

#### Inputs

##### Product flows

###### Diesel for freshwater fishing vessels (`inland_diesel`)

Only actual freshwater fishing-vessel diesel; fuel specification, trip and freshwater habitat must match. Record burned mass from receipts and tank reconciliation; marine engines and shore equipment use the separate fuel card.

Conditional identity: this flow represents only actual diesel combustion by a freshwater fishing vessel in the capture role, supported by vessel/engine and freshwater trip records. It does not identify marine-vessel, shore pump, road transport, farm or other diesel use; those require independently matched identities and quantities.

- Selected flow: Diesel for freshwater fishing vessels `5e0406d3-2763-4f93-a921-b3028853c24b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Record actual lot quantity using cp_capture, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_capture`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 10 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Attributable hatchery-released juvenile fish biomass (`stock_enhancement`)

Conditional physical wet biomass of actual hatchery-released juvenile fish attributed to the captured stock. Specify species/life stage, provider release gate, measured released kg, cohort, catch-origin contribution and upstream hatchery dataset. Kilograms represent physical released organisms, never a contracted generic service or monetary fee; operation-only support is a declared upstream inventory boundary with its own verified performance unit.

- Selected flow: Attributable hatchery-released juvenile fish biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_enhancement, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_enhancement`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 100 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Supplied treated process water for capture (`capture_supplied_water`)

Conditional externally supplied treated industrial process-quality water with documented fish-contact suitability at actual capture operations. Record purchased input rather than water circulation; upstream treatment is included once.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Supplied treated process water for capture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: unresolved
- Amount rule: Record actual lot quantity using cp_capture_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_capture_water`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 10000 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Whole wild Salmonidae transferred after capture (`captured_target_transfer`)

Actual retained food-fish biomass at gear/deck/shore collection before preservation or direct landing; document species, habitat, live/dead state and transfer gate. Measured internal mass includes eventual pre-gate losses and is not fixed to final reference mass.

- Selected flow: Whole wild Salmonidae transferred after capture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_catch, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_catch`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 20 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Dead unsold catch sent to documented disposal (`dead_capture_discards`)

Only dead unsold target or non-target catch actually routed to a waste recipient; document species, mortality and destination. Live releases and unobserved discard mortality are recorded in the catch ledger with survival evidence, not silently modelled as this waste.

- Selected flow: Dead unsold catch sent to documented disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_catch, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_catch`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 100 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Fossil carbon dioxide to unspecified air (`capture_fossil_co2`)

Only actual fossil combustion CO2 to unspecified air from capture engines. Measure or calculate using actual fuel carbon and validated oxidised fraction/factor; distinguish biogenic CO2 and exclude upstream emissions already in fuel supply.

- Selected flow: Fossil carbon dioxide to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Record actual lot quantity using cp_emissions, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 40 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 40
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Nitrogen oxides expressed as NO2 to air (`capture_nox`)

Conditional engine inventory reported as NOx expressed as NO2 mass to specified air compartment. Retain measured species/basis and engine factor evidence; do not map NO, N2O or unspecified nitrogen to this card.

- Selected flow: Nitrogen oxides expressed as NO2 to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_emissions, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 2 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Specified direct return water from capture (`capture_direct_water_return`)

Conditional actual water returned directly from capture to the environment, with freshwater/marine compartment, waterbody, salinity, returned mass, intake link and recipient. This is not wastewater sent to treatment; maintain volume/mass conversion and distinguish evaporation/consumption.

- Selected flow: Specified direct return water from capture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_capture_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_capture_water`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 10000 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Pre-landing live holding or chilling (`preserve`)

#### Inputs

##### Product flows

###### Whole wild Salmonidae entering preservation (`holding_fish_in`)

Same lot and actual wet fish mass from captured_target_transfer; record usable initial live or fresh state and elapsed time. This is an internal transfer, not another bought catch or final output.

- Selected flow: Whole wild Salmonidae entering preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_preserve, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 20 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Capture-fishery chilling ice (`capture_chilling_ice`)

Conditional actual purchased onboard or landing capture chilling ice before first handover, GLO capture fishery use. Record supplied ice separately from melted water; on-site ice production uses its actual resources rather than adding purchased ice burden.

- Selected flow: Capture-fishery chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Record actual lot quantity using cp_preserve, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 20 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Specified compressed oxygen for live holding (`holding_oxygen`)

Conditional actual live holding oxygen with supplier purity, pressure and mass measurement. Do not add to fresh/chilled dead lots or treat compressed air as oxygen; retain cylinder return and leakage records.

- Selected flow: Specified compressed oxygen for live holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_preserve, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 10 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Supplied treated process water for holding (`holding_supplied_water`)

Conditional externally supplied treated industrial process-quality water, documented suitable for actual live holding or chilling. Separate purchased additions from environmental withdrawal, circulation and drained water.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Supplied treated process water for holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: unresolved
- Amount rule: Record actual lot quantity using cp_preserve_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve_water`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 10000 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN low-voltage purchased AC electricity (`holding_cn_low_voltage`)

Conditional actual CN grid-average consumption mix supplied AC below 1 kV for pumps/chilling/holding, with metered kWh; all other country, voltage or supplier mixes use holding_other_electricity. Exclude self-generated electricity already represented by fuel inputs.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN low-voltage purchased AC electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value energy `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Binding: `fixed`
- Amount rule: Record actual lot quantity using cp_preserve, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 100 kWh require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other specified purchased electricity for holding (`holding_other_electricity`)

Conditional actual non-CN or other voltage/provider purchased electricity with recorded consumption mix and gate. Split concrete identities by supplier; no CN identity may be silently applied.

- Selected flow: Other specified purchased electricity for holding
- Flow property / unit: Net calorific value energy `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Binding:
- Amount rule: Record actual lot quantity using cp_preserve, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 100 kWh require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Whole wild Salmonidae after actual preservation (`preserved_target_transfer`)

Same target lot passed to landing dispatch, with declared actual live/fresh/chilled state, temperature and elapsed holding duration. Weigh wet net fish separately from ice, water and containers; retain measured survival and rejected fish.

- Selected flow: Whole wild Salmonidae after actual preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_preserve, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 20 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Specified holding or chilling wastewater to treatment (`holding_effluent`)

Conditional spent holding water and ice melt actually handed to treatment, with salinity, solids, origin and receiving service. Direct environmental releases require actual substance/medium inventories instead; do not count both wastewater-treatment inventory and its modelled effluent emissions twice.

- Selected flow: Specified holding or chilling wastewater to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_preserve_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve_water`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 10000 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Dead preservation rejects to specified disposal (`holding_dead_rejects`)

Conditional dead fish rejected before landing, attributed to same lot and documented recipient. Reconcile death/state change, retained biomass and destination; sold non-food use belongs to a separate intended output, not automatic waste.

- Selected flow: Dead preservation rejects to specified disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_preserve, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 20 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Specified direct return water from preserve (`preserve_direct_water_return`)

Conditional actual water returned directly from preserve to the environment, with freshwater/marine compartment, waterbody, salinity, returned mass, intake link and recipient. This is not wastewater sent to treatment; maintain volume/mass conversion and distinguish evaporation/consumption.

- Selected flow: Specified direct return water from preserve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_preserve_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve_water`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 10000 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil CO2 from preserve combustion to unspecified air (`preserve_fossil_co2`)

Conditional actual fossil CO2 from preserve fuel combustion to unspecified air; measured emissions or validated actual fuel-carbon/oxidation model. Distinguish upstream supplier and biogenic emissions, and record engine/generator and period attribution independently of capture.

- Selected flow: Fossil CO2 from preserve combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Record actual lot quantity using cp_preserve_utilities, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preserve_utilities`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 40 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 40
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: First landing and dispatch (`landing`)

#### Inputs

##### Product flows

###### Whole wild Salmonidae entering first landing dispatch (`landing_fish_in`)

Measured same-lot transfer from capture when preservation is inactive, or preserved_target_transfer when active. Actual dispatch records select exactly one incoming branch; record net mass before final rejects, never substitute 1 kg.

- Selected flow: Whole wild Salmonidae entering first landing dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_landing, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_landing`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 20 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Supplied treated process water for landing handling (`landing_supplied_water`)

Conditional external treated industrial process-quality water with actual fish-contact/cleaning suitability. Meter pre-handover additions and cleaning by dispatch run; keep provider treatment separate from own treatment.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Supplied treated process water for landing handling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: unresolved
- Amount rule: Record actual lot quantity using cp_landing_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_landing_water`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 10000 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### CN low-voltage purchased AC electricity at landing (`landing_cn_low_voltage`)

Conditional actual CN grid-average consumption mix AC below 1 kV at user for landing scales, handling or washing equipment, metered by run. Other country/voltage/provider and self-generated electricity must be represented separately.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: CN low-voltage purchased AC electricity at landing `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value energy `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Binding: `fixed`
- Amount rule: Record actual lot quantity using cp_landing, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_landing`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 100 kWh require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other specified purchased landing electricity (`landing_other_electricity`)

Conditional actual other country/voltage/provider consumption mix at landing user gate. Separate its metered contribution from the conditional CN card and common hold meters.

- Selected flow: Other specified purchased landing electricity
- Flow property / unit: Net calorific value energy `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Binding:
- Amount rule: Record actual lot quantity using cp_landing, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_landing`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 100 kWh require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Whole wild Salmonidae, live, fresh or chilled at first landing (`landed_reference`)

Accepted complete unheaded and ungutted human-food Salmonidae from actual wild catch, first landing/collector handover after all included handling. Species, stock origin, actual habitat, state, season and gate are mandatory; water, ice and packaging are excluded from net fish mass.

- Selected flow: Whole wild Salmonidae, live, fresh or chilled at first landing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_final`
- Sources: `declared-reference-definition`
- Range: Internal method definition of 1 kg reference
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `declared-reference-definition`

##### Waste flows

###### Specified landing cleaning wastewater to treatment (`landing_effluent`)

Conditional actual landing cleaning/drain water sent to documented treatment service, with salinity and solids. Direct receiving-water releases require substance/compartment evidence and do not use a treatment flow to hide emissions.

- Selected flow: Specified landing cleaning wastewater to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_landing_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_landing_water`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 10000 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Specified direct return water from landing (`landing_direct_water_return`)

Conditional actual water returned directly from landing to the environment, with freshwater/marine compartment, waterbody, salinity, returned mass, intake link and recipient. This is not wastewater sent to treatment; maintain volume/mass conversion and distinguish evaporation/consumption.

- Selected flow: Specified direct return water from landing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Record actual lot quantity using cp_landing_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_landing_water`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 10000 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil CO2 from landing combustion to unspecified air (`landing_fossil_co2`)

Conditional actual fossil CO2 from landing fuel combustion to unspecified air; measured emissions or validated actual fuel-carbon/oxidation model. Distinguish upstream supplier and biogenic emissions, and record engine/generator and period attribution independently of capture.

- Selected flow: Fossil CO2 from landing combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: `fixed`
- Amount rule: Record actual lot quantity using cp_landing_utilities, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_landing_utilities`
- Range: Provisional reasoned QA screen; actual site records prevail, excursions above 40 kg require lot explanation; not a default factor.
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 40
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_output_set | all intended outputs | Enumerate each species/state/purpose and actual handover. Marketed bycatch or non-food output needs intention, destination and receipts; residues, unsold dead catch, live releases and packaging returns are separately classified. Do not create a co-product merely to allocate burden away. | ghg-product-allocation |
| allocation_hierarchy | shared trip outputs | Prefer separately measured trip/gear/holding tasks and subdivision. For indivisible joint capture, document a causal physical attribution if supported; otherwise disclose a justified value-based or other relationship with same-gate period prices and sensitivity. Simple catch mass is not automatically causal for incidental bycatch. | ghg-product-allocation |
| allocation_period | all nodes and periods | Assign successful/unsuccessful trip effort, seasonal cleaning/changeover and replacement/retirement to their actual output/period scope; list release-cohort and asset-service periods and their supported allocation separately. Do not discard unsuccessful effort or count service burdens in multiple periods. | ghg-product-allocation |
| allocation_shared | shared infrastructure | Maintain one asset/service ledger for vessel, hold, pumps and landing platform; enumerate capture/preserve/landing consumers and relevant periods. Allocate by evidenced service/time/causal use and disclose assumptions; material service shares, replacement and cleaning appear once. | ghg-product-allocation |
| allocation_internal | fish transfers | Link captured, preserved and landing transfers to the same lot; transfer exchanges cancel on aggregation. Reconcile retained fish, final accepted mass, purposeful other outputs, pre-gate rejects and live/dead discards; no duplicate capture or final output. | |
| allocation_support | stock_enhancement | Preserve documented provider/release attribution and exclude overlap with supplied-input burdens; uncertain mixed hatchery/wild composition needs uncertainty and sensitivity rather than automatic zero. | noaa-pacific-salmon-support |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_capture | capture | fuel | trip fuel account | trip; habitat; engine; fuel grade; purchases; opening/closing tanks; density; burned mass | Receipts and tank/fuel-meter reconciliation with density evidence; Attributed trip fuel mass per 1 kg reference flow. | kg | Each trip | Complete season including unsuccessful trips | Actual vessel/shore engine | per 1 kg reference flow | Invoices; tank calibration; effort/catch crosscheck |
| cp_assets | capture | shared materials | asset register | asset; composition; installed mass; repair/replacement; commissioning/retirement; service life; consumer nodes; service hours; reporting periods | Asset bills, maintenance logs and observed service use; Attributed material service mass per 1 kg reference flow. | kg | Each asset event and annual service review | Installation through retirement across reporting periods | Vessel; gear; shared hold/pumps/landing assets | per 1 kg reference flow | Bills; maintenance; consumer ledger and no duplicate burden |
| cp_enhancement | capture | stock support | provider and stock account | species; release cohort; stock markers; release biomass; provider scope; contribution evidence; attribution; periods; uncertainty | Provider primary records and catch-origin assessment; gaps require review; Attributed physical released juvenile fish mass per 1 kg reference flow. | kg | Each release cohort and season assessment | Linked release years and captured season | Actual release provider and captured stock | per 1 kg reference flow | Provider inventory; markers; attribution and uncertainty review |
| cp_catch | capture | fish outputs | catch and discard ledger | trip; species; stock; habitat; retained wet mass; marketed outputs; live release count/mass; dead discards; survival; destination; gear loss | Weigh representative catch and landing lots; observer/gear logs and discard survival evidence; Attributed wet fish mass per 1 kg reference flow. | kg | Each haul/shore event and trip | Whole season with all target and non-target catch | Actual capture location and first receivers | per 1 kg reference flow | Scale calibration; species record; observer coverage; mortality uncertainty |
| cp_emissions | capture | direct engine releases | fuel and emission account | fuel mass; fossil carbon; oxidation; engine; pollutant; NO2 basis; compartment; factor/source; uncertainty | Use measured emissions or validated fuel/engine model; retain factor provenance and distinguish upstream; Attributed direct substance mass per 1 kg reference flow. | kg | Each fuel period/engine campaign | Same complete season as fuel ledger | Actual engine and air receiving compartment | per 1 kg reference flow | Fuel balance; factor applicability; measurement uncertainty |
| cp_preserve | preserve | holding inputs and fish | holding-lot ledger | trip/lot; activation; initial/final state; wet fish mass; time/temperature; ice; oxygen purity/pressure/mass; energy kWh; provider/voltage; mortality; recipient | Weigh fish/ice/oxygen; read dedicated meters; record actual holding branch and temperature/time; Attributed measured kg or kWh per 1 kg reference flow. | kg; kWh | Each holding lot and meter interval | All pre-gate holding intervals in season | Actual vessel hold or pre-gate holding site | per 1 kg reference flow | Scale/meter calibration; oxygen invoice; branch and fish balance |
| cp_capture_water | capture | water | node water balance | lot; provider; suitable quality; waterbody/salinity and receiving compartment; intake; purchased kg; circulation; return; consumption; wastewater destination; solids; chemical identity; reported elemental/compound mass basis; dissolved/particulate fraction; concentration and unit; matched discharge volume/flow, sampling time and interval; paired intake-background concentration/load; density and conversion evidence; analytical method; lab QA, detection/quantification limits and uncertainty; actual model/factor provenance, units, applicability and coverage when used | Meter inputs/outputs and match discharge flow/time with representative substance samples; document density and unit conversion, chemical identity, elemental/compound basis and dissolved/particulate fraction. Calculate each actual substance load from matched concentration and discharge volume/interval. Report gross returned load separately from incremental process release; deduct intake background only from matched evidence with an explicit attribution rationale, otherwise disclose the unresolved net-release gap rather than assume zero background. Retain lab QA, detection-limit/non-detect treatment and uncertainty. If modelled, retain actual factor/model source, version, boundary, activity basis, coverage and uncertainty without empirical defaults. Keep direct releases distinct from treatment-bound effluent and avoid duplicate substances in aggregated effluent inventories; attributed water and substance mass per 1 kg reference flow. | kg water; kg substance; recorded concentration/flow/time units with conversion evidence | Each node lot and drainage event | Full season including cleaning/changeover | Actual node water source and recipient | per 1 kg reference flow | Meter calibration; intake/return and substance balances; paired concentration/flow/time and background records; sampling representativeness; chemical/basis/fraction reconciliation; lab QA, blanks/duplicates, detection/quantification limits, non-detect treatment and uncertainty; actual factor/model provenance, applicability and coverage; treatment/direct-route records and no double count |
| cp_preserve_water | preserve | water | node water balance | lot; provider; suitable quality; waterbody/salinity and receiving compartment; intake; purchased kg; circulation; return; consumption; wastewater destination; solids; chemical identity; reported elemental/compound mass basis; dissolved/particulate fraction; concentration and unit; matched discharge volume/flow, sampling time and interval; paired intake-background concentration/load; density and conversion evidence; analytical method; lab QA, detection/quantification limits and uncertainty; actual model/factor provenance, units, applicability and coverage when used | Meter inputs/outputs and match discharge flow/time with representative substance samples; document density and unit conversion, chemical identity, elemental/compound basis and dissolved/particulate fraction. Calculate each actual substance load from matched concentration and discharge volume/interval. Report gross returned load separately from incremental process release; deduct intake background only from matched evidence with an explicit attribution rationale, otherwise disclose the unresolved net-release gap rather than assume zero background. Retain lab QA, detection-limit/non-detect treatment and uncertainty. If modelled, retain actual factor/model source, version, boundary, activity basis, coverage and uncertainty without empirical defaults. Keep direct releases distinct from treatment-bound effluent and avoid duplicate substances in aggregated effluent inventories; attributed water and substance mass per 1 kg reference flow. | kg water; kg substance; recorded concentration/flow/time units with conversion evidence | Each node lot and drainage event | Full season including cleaning/changeover | Actual node water source and recipient | per 1 kg reference flow | Meter calibration; intake/return and substance balances; paired concentration/flow/time and background records; sampling representativeness; chemical/basis/fraction reconciliation; lab QA, blanks/duplicates, detection/quantification limits, non-detect treatment and uncertainty; actual factor/model provenance, applicability and coverage; treatment/direct-route records and no double count |
| cp_landing_water | landing | water | node water balance | lot; provider; suitable quality; waterbody/salinity and receiving compartment; intake; purchased kg; circulation; return; consumption; wastewater destination; solids; chemical identity; reported elemental/compound mass basis; dissolved/particulate fraction; concentration and unit; matched discharge volume/flow, sampling time and interval; paired intake-background concentration/load; density and conversion evidence; analytical method; lab QA, detection/quantification limits and uncertainty; actual model/factor provenance, units, applicability and coverage when used | Meter inputs/outputs and match discharge flow/time with representative substance samples; document density and unit conversion, chemical identity, elemental/compound basis and dissolved/particulate fraction. Calculate each actual substance load from matched concentration and discharge volume/interval. Report gross returned load separately from incremental process release; deduct intake background only from matched evidence with an explicit attribution rationale, otherwise disclose the unresolved net-release gap rather than assume zero background. Retain lab QA, detection-limit/non-detect treatment and uncertainty. If modelled, retain actual factor/model source, version, boundary, activity basis, coverage and uncertainty without empirical defaults. Keep direct releases distinct from treatment-bound effluent and avoid duplicate substances in aggregated effluent inventories; attributed water and substance mass per 1 kg reference flow. | kg water; kg substance; recorded concentration/flow/time units with conversion evidence | Each node lot and drainage event | Full season including cleaning/changeover | Actual node water source and recipient | per 1 kg reference flow | Meter calibration; intake/return and substance balances; paired concentration/flow/time and background records; sampling representativeness; chemical/basis/fraction reconciliation; lab QA, blanks/duplicates, detection/quantification limits, non-detect treatment and uncertainty; actual factor/model provenance, applicability and coverage; treatment/direct-route records and no double count |
| cp_landing | landing | dispatch and packaging | dispatch-run ledger | lot; incoming branch; state; net fish; package material/empty mass/rotations; cleaning; energy kWh/provider/voltage; assets; rejects; output purpose/recipient | Weigh net fish and packaging separately; meters, return/damage and buyer receipts; Attributed kg or kWh per 1 kg reference flow. | kg; kWh | Each dispatch lot and cleaning/changeover | All first-gate lots in season | Actual first landing/collector and package recipient | per 1 kg reference flow | Scale/meter calibration; reuse log; buyer receipts; complete output ledger |
| cp_final | landing | reference fish | accepted-mass protocol | lot; scientific species; origin; habitat; state; gate; gross weighing; container tare; ice/water removed; accepted net wet fish mass; repeated sample; scale calibration | Weigh accepted whole fish on calibrated scale, subtract container tare and exclude ice/water; repeat representative samples and reconcile buyer acceptance; Accepted net fish mass defines 1 kg reference flow. | kg | Each accepted lot and repeated representative sample | Every accepted first-landing lot in declared season | Actual first landing/collector handover | per 1 kg reference flow | Calibration/tare records; repeated samples; acceptance; species/origin |
| cp_preserve_utilities | preserve | fuel/direct exhaust/consumables | utility and ancillary ledger | lot; equipment/generator; fuel grade; mass/density; carbon/oxidation; pollutant/basis/medium; factors; consumable formulation/mass; cleaning; provider; period | Fuel tank/receipts, metered generator records, emission measurements or validated engine models, material bills and cleaning logs; Attributed physical material or substance kg per 1 kg reference flow. | kg | Each lot/engine period/cleaning event | All included pre-gate seasonal operations | Actual preserve equipment and emission compartment | per 1 kg reference flow | Fuel balance; factor/model source; measurement uncertainty; no purchased/generated-energy duplicate |
| cp_landing_utilities | landing | fuel/direct exhaust/consumables | utility and ancillary ledger | lot; equipment/generator; fuel grade; mass/density; carbon/oxidation; pollutant/basis/medium; factors; consumable formulation/mass; cleaning; provider; period | Fuel tank/receipts, metered generator records, emission measurements or validated engine models, material bills and cleaning logs; Attributed physical material or substance kg per 1 kg reference flow. | kg | Each lot/engine period/cleaning event | All included pre-gate seasonal operations | Actual landing equipment and emission compartment | per 1 kg reference flow | Fuel balance; factor/model source; measurement uncertainty; no purchased/generated-energy duplicate |
| cp_capture_ancillary | capture | ancillary material | material and cleaning ledger | trip; actual material/formulation; physical mass; provider; purpose; cleaning/changeover; attribution | Material receipts, weighing and trip cleaning/changeover logs; Attributed physical material kg per 1 kg reference flow. | kg | Each material delivery and cleaning/changeover event | Entire capture season | Actual capture vessel/shore site | per 1 kg reference flow | Material specification; scale/tare; trip attribution |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_mass_attribution | all inventory rows | After documented output/period attribution, divide each applicable lot total by accepted net wet whole-fish kg from cp_final; retain actual internal mass and do not treat transfers as new purchases. | Linked lot records; attribution; cp_final | Exchange quantity per 1 kg reference flow | |
| reference_definition | landed_reference | The declared reference is exactly 1 kg accepted net wet whole fish; the 1–1 kg Range is this internal method definition, not an empirical fish-yield factor. | cp_final | 1 kg reference output | |
| electricity_conversion | electricity inputs | Convert recorded kWh to MJ only when needed, using 3.6 MJ per kWh; preserve quantity and unit evidence. | Meter kWh; provider and voltage | kWh or equivalent MJ | |
| catch_reconciliation | fish outputs and internal transfers | Reconcile target retained biomass, accepted final fish, pre-gate losses, intended other output and discards by lot and state; retain live-release survival/mortality uncertainty separately. | cp_catch; cp_preserve; cp_landing; cp_final | Consistent catch/transfer/dispatch ledger | |
| substance_calculation | capture_fossil_co2; capture_nox | Use actual measured emissions or documented fuel-carbon/engine model with substance basis, compartment, factor provenance and uncertainty; no fixed factor is prescribed. | cp_capture; cp_emissions | Direct pollutant mass | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_gate_state | reference and fish transfers | Scientific Salmonidae identity, wild origin, habitat and actual first gate/state must agree; unknown state is incomplete. | Species/origin documentation and lot acceptance |
| full_coverage | all inventory rows | Represent complete trip/season including unsuccessful effort, maintenance, washing, changeovers, replacement and pre-gate losses; justify exclusions and data gaps. | Matched trip/stock/service/water/meter ledgers |
| scope_match | providers and identities | Match actual material, pollutant, flow type, receiving medium, country/voltage, provider and gate; refine umbrella cards into concrete independently verified identities before final exchanges. | Provider specification; detail verification and quality record |
| range_screen | all cards | Actual records take precedence over provisional reasoned QA ranges; justify excursions, absence and substituted model quantities; assess uncertainty without forcing values within screens. | Site records; reviewed range replacement and sensitivity |
| ecosystem_records | capture | Retain stock status/permit context from current jurisdiction, discard survival, habitat/gear impacts and lost gear evidence; numeric regulations are not supplied here. | Actual dated permits, observer and gear-loss records |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_other_capture_fuel` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Specified marine or shore capture fuels”; retain all following collection, quantity and normalization obligations: Conditional actual marine/brackish vessel or shore engine fuel, identified by grade, fossil/biogenic composition and engine use. Separate each actual fuel; no inland-diesel identity applies automatically. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_capture, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_asset_materials` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Vessel and fishing-gear material service shares”; retain all following collection, quantity and normalization obligations: Conditional actual hull, engine, net, line, trap or shore gear materials and repairs with specified composition. Attribute physical material mass over evidenced lifetime service, trip effort and periods; retain all consuming nodes and do not count the same vessel again in preservation. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_assets, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_assets` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_consumables` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Specified ancillary consumable materials for capture”; retain all following collection, quantity and normalization obligations: Conditional actual capture cleaning/disinfection products, lubricants and other ancillary material inputs, individually specified by composition, physical mass and purpose. Retain wet/formulation/active-substance distinction, provider burden and cleaning/changeover lot; no generic kg service or default dose. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_capture_ancillary, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_capture_ancillary` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_abstracted_water` | `capture`; inputs; elementary | Identify and separately collect every actual exchange covered by “Specified environmental water abstraction”; retain all following collection, quantity and normalization obligations: Conditional freshwater or seawater withdrawal for capture operations, separated by actual waterbody, salinity and resource compartment. Record intake, return and consumption distinctly; natural fish-stock removal remains a separate biological record, not water intake. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_capture_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_capture_water` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_marketed_other_catch` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Other deliberately marketed catch at handover”; retain all following collection, quantity and normalization obligations: Conditional independently intended output for each actual species and state at its own buyer gate. Retain quantity, purpose and proceeds separately; incidental capture alone does not establish a co-product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_catch, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_catch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_direct_water_substances` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Identified direct waterborne substances from capture”; retain all following collection, quantity and normalization obligations: Conditional actual measured/modelled substances released directly with capture return water, instantiated separately by chemical identity, dissolved/particulate or nutrient basis and freshwater/marine receiving medium; record kg of each substance and concentration/flow evidence. Never use an unspecified pollution UUID or duplicate aggregated wastewater treatment releases. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_capture_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_capture_water` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_fuel` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Specified preserve equipment and generator fuels”; retain all following collection, quantity and normalization obligations: Conditional actual purchased fuel by grade, fossil/biogenic composition and equipment purpose for preserve handling, heating or generator. Record fuel mass at this stage; do not reuse freshwater capture-vessel diesel or count generated electricity as a second purchased energy burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_preserve_utilities, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_preserve_utilities` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_consumables` | `preserve`; inputs; product | Identify and separately collect every actual exchange covered by “Specified ancillary consumable materials for preserve”; retain all following collection, quantity and normalization obligations: Conditional actual preserve cleaning/disinfection products, lubricants and other ancillary material inputs, individually specified by composition, physical mass and purpose. Retain wet/formulation/active-substance distinction, provider burden and cleaning/changeover lot; no generic kg service or default dose. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_preserve_utilities, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_preserve_utilities` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_abstracted_water` | `preserve`; inputs; elementary | Identify and separately collect every actual exchange covered by “Specified environmental holding-water abstraction”; retain all following collection, quantity and normalization obligations: Conditional actual freshwater or seawater withdrawn for live holding or chilling, separated by resource waterbody and compartment. Report pumping energy and intake/return ledger; recycled circulation does not create repeated withdrawal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_preserve_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_preserve_water` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_direct_water_substances` | `preserve`; outputs; elementary | Identify and separately collect every actual exchange covered by “Identified direct waterborne substances from preserve”; retain all following collection, quantity and normalization obligations: Conditional actual measured/modelled substances released directly with preserve return water, instantiated separately by chemical identity, dissolved/particulate or nutrient basis and freshwater/marine receiving medium; record kg of each substance and concentration/flow evidence. Never use an unspecified pollution UUID or duplicate aggregated wastewater treatment releases. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_preserve_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_preserve_water` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preserve_other_exhaust` | `preserve`; outputs; elementary | Identify and separately collect every actual exchange covered by “Identified non-CO2 preserve combustion exhaust to air”; retain all following collection, quantity and normalization obligations: Conditional actual preserve combustion pollutants, separately identified by substance, NOx/NO2 reporting basis or particle-size class and air receiving compartment before any concrete exchange is bound. Record actual measured/modelled substance kg, factor and engine evidence; not unspecified generic exhaust. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_preserve_utilities, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_preserve_utilities` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_landing_packaging` | `landing`; inputs; product | Identify and separately collect every actual exchange covered by “Specified first-landing packaging material shares”; retain all following collection, quantity and normalization obligations: Actual protective boxes, liners, labels and reusable containers matched to whole fish state at handover. Specify material, empty mass, observed rotations, damage and recipient; include pre-gate washing resources, replacements and attributable end-of-use once. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_landing, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_landing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_landing_resources` | `landing`; inputs; product | Identify and separately collect every actual exchange covered by “Specified landing handling consumables and asset materials”; retain all following collection, quantity and normalization obligations: Conditional actual landing equipment materials, cleaning agents, consumables and repairs. Separate each actual material and purpose, retaining shared-service consumer/period evidence; record actual gate water/energy under separate concrete exchanges if present. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_landing, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_landing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_landing_fuel` | `landing`; inputs; product | Identify and separately collect every actual exchange covered by “Specified landing equipment and generator fuels”; retain all following collection, quantity and normalization obligations: Conditional actual purchased fuel by grade, fossil/biogenic composition and equipment purpose for landing handling, heating or generator. Record fuel mass at this stage; do not reuse freshwater capture-vessel diesel or count generated electricity as a second purchased energy burden. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_landing_utilities, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_landing_utilities` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_landing_other_products` | `landing`; outputs; product | Identify and separately collect every actual exchange covered by “Other purposeful products at actual landing handover”; retain all following collection, quantity and normalization obligations: Conditional every actual independent species/state/food or non-food intended product with its recipient, wet mass and commercial purpose. Transfers already counted as capture co-products must not appear again as independent output; no fillet/gut/head production occurs within this whole-fish scope. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_landing, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_landing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_landing_reject_waste` | `landing`; outputs; waste | Identify and separately collect every actual exchange covered by “Specified landing fish and packaging rejects”; retain all following collection, quantity and normalization obligations: Conditional actual unsold rejected fish and discarded packaging, split by material, origin and destination. Record buyer rejection before gate, damaged containers and disposal recipient; do not assume zero or count reusable returns as waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_landing, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_landing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_landing_direct_water_substances` | `landing`; outputs; elementary | Identify and separately collect every actual exchange covered by “Identified direct waterborne substances from landing”; retain all following collection, quantity and normalization obligations: Conditional actual measured/modelled substances released directly with landing return water, instantiated separately by chemical identity, dissolved/particulate or nutrient basis and freshwater/marine receiving medium; record kg of each substance and concentration/flow evidence. Never use an unspecified pollution UUID or duplicate aggregated wastewater treatment releases. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_landing_water, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_landing_water` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_landing_other_exhaust` | `landing`; outputs; elementary | Identify and separately collect every actual exchange covered by “Identified non-CO2 landing combustion exhaust to air”; retain all following collection, quantity and normalization obligations: Conditional actual landing combustion pollutants, separately identified by substance, NOx/NO2 reporting basis or particle-size class and air receiving compartment before any concrete exchange is bound. Record actual measured/modelled substance kg, factor and engine evidence; not unspecified generic exhaust. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Record actual lot quantity using cp_landing_utilities, apply documented attribution and divide by final accepted net fish kg; do not use the range to replace records. Value mode: `foreground_record` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `collected_record` Collection protocol: `cp_landing_utilities` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | landed_reference | Require one accepted 1 kg net wet whole-fish reference, correct actual state and first gate, complete qualifiers, calibrated tare method and compatible property/unit. | |
| validate_route | process map | Require capture and landing; activate preservation only from actual lot records. Landing selects capture transfer or preserved transfer exclusively for each lot; unknown intervention/state is incomplete. | |
| validate_balance | fish and waste outputs | Reconcile real internal quantities, all intended output gates, pre-gate mortality/rejects and discard destination/survival; do not fix internal quantities to 1 kg or count outputs twice. | |
| validate_mode_period | all inventory rows | Check trip/season identifiers, complete effort, cleaning/changeover, release cohorts and asset replacement/retirement periods; attribution is explicit and no shared-run/period burden is duplicated. | ghg-product-allocation |
| validate_shared | infrastructure and outputs | Check complete consumer/output ledger and PCR-specific physical/value attribution evidence with sensitivity where needed; no automatic mass allocation or zero support burden. | ghg-product-allocation |
| validate_water_energy | utilities and emissions | Reconcile input/return/consumption/wastewater ledgers and actual electricity/fuel specification; retain pollutant substance and medium. Avoid duplicate purchased/self-generated energy or treatment/direct-emission burdens. | |
| validate_identities | all cards | Resolve each actual final exchange to an independently verified concrete identity and support property/unit; unresolved generic cards remain data gaps. A structural check pass does not establish identity or active/publication readiness. | |
| validate_sources_ranges | all amounts | Keep each measurement protocol and finite Range with correct denominator/evidence; final 1–1 kg is method definition. Other provisional screens cannot supply missing observations, fixed factors or regulatory limits. | |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground collection package projected to secondary_dataset or background_dataset after evidence and identity review |
| downstream_use | Input to food-fish process and lifecyclemodel at compatible first landing gate |
| allowed_use | Documented wild whole-fish lot and actual live/fresh/chilled state, species, habitat, period and gear |
| excluded_use | Aquaculture; ornamental/seed; gutted/fillet/frozen fish; downstream processing/distribution; universal cross-state or cross-fishery equivalence |
| required_metadata | Reference identity/support; species/origin/stock; habitat/geography/gear; first gate/state; trip/season; preservation; provider/asset/release periods; output set and attribution |
| required_quality_disclosure | Record/measurement coverage; unresolved identities or factors; stock-enhancement contribution; discard/gear uncertainty; provisional ranges; allocation sensitivity; excluded burdens |
| update_trigger | Gate/state/species/stock or enhancement change; gear/provider/voltage/material change; season/period change; new emissions or evidence; revised site records or methodology |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| noaa-salmon-fishery-planning | official_guidance | https://www.fisheries.noaa.gov/west-coast/sustainable-fisheries/salmon-life-cycle-and-seasonal-fishery-planning | Qualitative migration, actual catch habitat and seasonal stock context; no transferred biological numbers. |
| noaa-pacific-salmon-support | official_guidance | https://www.fisheries.noaa.gov/species/pacific-salmon-and-steelhead | Qualitative hatchery support of wild stocks; attribution requires actual evidence. |
| fao-capture-ice-handling | official_guidance | https://www.fao.org/4/y5013e/y5013e07.htm | Qualitative capture handling, ice/holding resources, containers and losses; historical numerical examples are not prescribed factors. |
| fao-live-fish-handling | official_guidance | https://www.fao.org/4/v7180e/v7180e08.htm | Qualitative live holding, water/oxygen and handling-quality records; no universal operating settings. |
| ghg-product-allocation | standard | https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Chapter 9 allocation hierarchy and sensitivity only, not whole-standard compliance. |
| un-cpc3-aquatic-notes | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only; whole-fish scope is narrower than 04221 presentations. |
| declared-reference-definition | method_factor | Internal declared reference and normalization convention in this PCR sections 3 and 8 reference_definition; not external empirical evidence | Final 1 kg output and 1–1 kg method-definition Range |
