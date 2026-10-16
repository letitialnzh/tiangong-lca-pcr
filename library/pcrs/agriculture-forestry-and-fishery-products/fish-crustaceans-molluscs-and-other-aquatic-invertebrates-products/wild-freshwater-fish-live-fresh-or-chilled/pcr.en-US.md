---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-freshwater-fish-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild freshwater fish, live, fresh or chilled

## 1. Scope and Applicability

This PCR covers wild freshwater finfish for human consumption, delivered whole and unprocessed as one actual live, fresh or chilled lot at the first landing handover. A dataset declares its species, freshwater habitat and wild-capture origin; an inland brackish or marine fishery is not automatically freshwater. Short preservation does not make the fish farmed. Exclude farmed fish, ornamental fish, seed/bait/nonfood outputs, wild Salmonidae, frozen fish, fillets, separated liver/roe and other processed products. The UN CPC 3.0 notes distinguish the neighbouring farmed, ornamental, nonfood, wild Salmonidae, frozen and specified processed-product categories (`un-cpc3-notes`). Separately, this PCR deliberately selects the narrower boundary of whole unprocessed fish captured from declared freshwater waterbodies and delivered at first landing. The CPC fish-product category does not itself establish that freshwater species must be caught only in freshwater, or that every headed/gutted non-fillet product is excluded.

The route is capture, actual preservation when performed, and first landing presentation/handover. Live maintenance and chilled preservation are mutually exclusive for a reference lot; immediate fresh landing may bypass preservation only with actual records. Unknown state, water origin or handover location is a data gap, not a default route. No cross-species edible service, processing yield, regulatory authorization or universal fishery performance is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-freshwater-fish-live-fresh-or-chilled |
| classification_refs | CPC 3.0 04211; classification context only |
| covered_products | Whole wild freshwater food finfish at first landing, actual live, fresh or chilled state; species and grades separately declared |
| excluded_products | Farmed fish; ornamental and other nonfood fish; wild Salmonidae; marine/brackish fish; frozen fish; fillets; liver/roe and processed outputs |
| representative_product | A whole wild-caught freshwater carp lot landed for human consumption; illustrative rather than a required species |
| production_route | Inland wild capture followed by evidenced live maintenance or chilling, or immediate fresh landing, then first landing handover |
| market_state | One declared actual live, fresh or chilled whole-fish state per dataset reference lot |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole wild freshwater food fish at first landing handover |
| How much | 1 kg |
| How well | Accepted whole unprocessed fish of declared species/grade and one actual live, fresh or chilled state; recorded live viability or actual time-temperature/acceptance observations |
| How long or cycle | Named fishing trip or campaign and landing lot; shared gear and vessel service linked to their actual service periods, replacement and retirement events |
| reference_flow_link | `freshwater_landing_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wild freshwater fish, live, fresh or chilled `71a18b97-ce6e-4a8d-adab-159854459ca8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wild origin; species; freshwater waterbody and capture location; trip/gear; landing time/location; actual live/fresh/chilled state; whole condition; landed grade; net biomass method; accepted lot and first handover; reporting period; actual preservation route |

The same first landing handover is used for every state. Holding on board or at the landing site is inside the boundary; distribution to a processor, consolidator elsewhere, retailer or consumer is outside it. No optional-output selector is needed: `freshwater_landing_product` is always the sole actual final output. Tare or separately drain/weigh water, ice and containers with a documented method that preserves the declared live state.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted net whole-fish biomass on a calibrated scale; exclude carrier water, ice and containers; retain gross, tare and handling records. |
| internal_mass | whole_catch; landing_catch; preserved_whole_lot; dispatch_lot | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure each actual internal lot transfer and reconcile both ends on the same state/time basis. Normalize measured transfers per 1 kg reference flow; do not fix internal transfers to 1 kg. |
| water_mass | supplied_process_water; direct_freshwater_withdrawal; effluent_to_treatment; direct_water_return; dispatch_supplied_water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use mass records; volume-only meters require a recorded water state and density conversion with uncertainty. Keep supply, abstraction, recirculation, treatment and direct return separate. |
| electricity_conversion | cn_low_voltage_electricity; other_capture_electricity; other_preservation_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Record electrical energy in kWh with 3.6 MJ/kWh conversion in Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66. The platform property name does not imply combustion of electricity. |
| combustion_basis | capture_fossil_co2; capture_carbon_monoxide; other_capture_emissions; preservation_fossil_co2; preservation_other_emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain actual pollutant species, receiving medium and factor basis. Do not equate CO2-equivalent, carbon mass, NOx-as-NO2, elemental nutrients or particle fractions without an evidenced conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Wild fish population in a declared natural freshwater waterbody, prior to capture; capture biomass removal and actual resources are recorded |
| starting_condition_role | Natural resource starting context, followed by measured capture; not managed aquaculture or a burden-free fish purchase |
| product_classification_scope | Semantic wild freshwater whole-food-fish category, linked to CPC 3.0 04211 without treating its classification as the route definition |
| recursive_input_rule | If previously landed whole fish are purchased for additional handling, retain supplier capture/landing burdens once and declare the extended gate. Do not relabel that purchase as new local capture or use this first-landing output without matched boundary evidence. |
| upstream_dataset_requirement | Matched supply datasets for fuels, bait, gear, water, electricity, ice, oxygen, materials and assets; origin-enhanced/stocked fisheries disclose and investigate attributable upstream stocking rather than assigning zero automatically |
| disclosure | Species, habitat, wild/stocked provenance, gear and habitat interaction, vessel/manual mode, periods, shared assets, bycatch releases, actual preservation and gate, emissions and water accounting, exclusions and missing impact characterization |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_capture | inland_capture | Include biomass removal, fishing effort, fuel combustion, bait, material/gear replacement, co-catch, actual losses and trip return to first landing. Capture removes natural fish; preservation only stabilizes an already collected product. | fao-inland-fisheries |
| boundary_preservation | landing_preservation | Include actual on-board and landing live maintenance or chilling before handover. Record usable state before and after intervention, its resources, losses and handover to dispatch. Immediate fresh landing can bypass only on evidence. | fao-fish-handling; fao-live-transport |
| boundary_ice | supplied_chilling_ice; supplied_process_water; cn_low_voltage_electricity; other_preservation_energy | For purchased ice include matched supplier production once. For on-site ice include its actual water, energy, equipment and refrigerant burdens here, keep the internal ice production/use ledger and exclude a second purchased-ice burden for that amount. | fao-fish-handling |
| boundary_dispatch | landing_dispatch | Include presentation/packing actually performed before first collector/buyer handover; record pre-pack fish state, package protection roles and reusable-container status. Exclude subsequent distribution, processing and cooking. |  |
| boundary_assets | capture_gear; spent_gear; dispatch_packaging; all processes | Inventory actual shared vessel, tank, ice machine, landing utilities and returnable boxes; record consuming nodes and periods, lifetime/service-use evidence, replacements and retirement. Include attributable upstream asset/service burdens through separately identified concrete exchanges and disclose justified exclusions. |  |
| boundary_environment | all processes | Track retained, released, escaped and dead catch; habitat interactions and lost gear; actual abstraction and discharge; combustion and refrigerant emissions. Species/population and gear-impact records accompany the LCI. A resource-flow exchange alone does not characterize biodiversity, depletion or habitat impact; disclose LCIA method coverage and gaps. | fao-inland-fisheries |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| inland_capture | Inland capture | required | Actual wild freshwater capture, vessel or non-vessel | Remove wild biomass and deliver measured retained whole catch | Measured lot resources per 1 kg reference flow |
| landing_preservation | Actual preservation before landing handover | conditional | Evidenced live maintenance or chilled intervention; bypass only for immediate fresh landing without intervention | Stabilize retained whole fish before the same first landing handover | Measured incoming and outgoing biomass per 1 kg reference flow |
| landing_dispatch | First landing presentation and handover | required | Every reference lot; packaging inputs only when actual packing occurs | Accept the actual whole-fish lot and hand to the first buyer at landing | 1 kg reference flow |

Trips are batch/campaign records. For continuous landing operations, define a closed reporting period and matched lot ledger. Link cleaning, ice production, changeover and standby resources to actual consuming lots/periods. In every card below, a conditional material umbrella is expanded into zero, one or multiple actual concrete exchanges; no semantic umbrella is a final TIDAS identity.

All nonfinal Range blocks are broad provisional author screening estimates, not empirical values or permitted limits. Upper screens deliberately allow low-yield trips, loss-heavy lots and widely varying holding times: 100 kg for biomass/materials, 1,000 kg for fuel/other carrier or pollutant screens, 100,000 kg for water, 10,000 kWh for powered preservation and 10,000 kg for fossil CO2. They do not establish normal practice; investigate outliers and retain actual observations without truncation. Replace them with lot- and route-supported evidence when available. The final 1–1 kg range follows the reference definition (`net-mass-reference-definition`).

### Process: Inland capture (`inland_capture`)

#### Inputs

##### Product flows

###### Diesel for freshwater fishing vessel (`capture_diesel`)

Include only diesel actually burned by the inland fishing vessel, with engine and trip records. Shore or manual fishing may have no vessel fuel.

Conditional identity: this flow represents only actual diesel combustion by a freshwater fishing vessel in the capture role, supported by vessel/engine and freshwater trip records. It does not identify marine-vessel, shore pump, road transport, farm or other diesel use; those require independently matched identities and quantities.

- Selected flow: Diesel for freshwater fishing vessel `5e0406d3-2763-4f93-a921-b3028853c24b`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured diesel consumed, allocated to the reference lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture_energy`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual capture electricity supply (`other_capture_electricity`)

Record purchased electricity for an actual shore-based or electric-vessel capture operation, with supplier geography, voltage and meter. This is electrical energy, independently accounted from fuel mass; the China landing-preservation identity is not automatically a capture match.

- Selected flow: Actual capture electricity supply
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered actual capture electrical energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_capture_energy`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Wild freshwater fish biomass removed from nature (`wild_biomass_removal`)

Record species and freshwater waterbody for organisms removed by capture, including retained catch and measured non-returned losses. Record released organisms separately; no assumption of burden-free purchased fish or farmed stock.

- Selected flow: Wild freshwater fish biomass removed from nature
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured biomass removed from the freshwater population on the stated catch-accounting basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catch`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Retained whole freshwater catch before preservation (`whole_catch`)

Actual retained target-species lot transferred to preservation or directly to landing dispatch. Weigh and identify the same lot at both ends; this is not the final landing product exchange.

- Selected flow: Retained whole freshwater catch before preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured internal retained fish transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catch`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dead catch routed to disposal (`capture_discards`)

Only recorded dead or rejected catch transferred to an evidenced waste recipient. Fish released to the waterbody, viable or dead, require the catch and habitat record rather than an invented disposal exchange.

- Selected flow: Dead catch routed to disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weighed dead or rejected fish sent to the recorded waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catch`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide emitted to air (`capture_fossil_co2`)

Include actual on-vessel combustion emissions, separate from upstream fuel supply. The fixed identity is immediate fossil CO2 to unspecified air, used only where no finer air subcompartment is reported; an actually specified compartment requires independently verified matching identity. Use measured fossil carbon or a traceable engine/fuel-specific factor; disclose oxidation and biogenic fraction, with no default emission factor.

- Selected flow: Fossil carbon dioxide emitted to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured or traceably calculated fossil carbon dioxide mass emitted to air
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carbon monoxide emitted to air (`capture_carbon_monoxide`)

Include carbon monoxide when evidenced by engine test or applicable factor. Preserve actual substance and receiving air compartment; upstream supply must not repeat this emission.

- Selected flow: Carbon monoxide emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured or traceably calculated carbon monoxide mass emitted to air
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Actual preservation before landing handover (`landing_preservation`)

#### Inputs

##### Product flows

###### Whole catch entering preservation (`landing_catch`)

Activate only for actual bounded live maintenance or chilled preservation before first landing handover. Match whole_catch transfer and retain its measured quantity; immediate fresh landing bypasses this process.

- Selected flow: Whole catch entering preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured internal incoming whole-fish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Externally supplied treated process water (`supplied_process_water`)

Conditional on an external treated water supply suitable for actual fish handling, live holding, cleaning or on-site ice making. Keep use-specific metering and supplier quality evidence; no direct freshwater abstraction or repeat recirculation quantity.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Externally supplied treated process water
- Binding: unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured supplied water for all declared uses within preservation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_landing_preservation`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### China low-voltage grid electricity to user (`cn_low_voltage_electricity`)

Use only for an actual Chinese supply below 1 kV with grid-average consumption mix. Meter live aeration, refrigeration, on-site ice and cleaning shares; this card does not impose a Chinese geography on the product category.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: China low-voltage grid electricity to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: fixed
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered actual China low-voltage electricity attributed to this lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_energy`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other actual preservation electricity supply (`other_preservation_electricity`)

For actual non-China electricity or another voltage/provider, expand this card into the real electricity supply using independently matched energy support and kWh. Engine-driven refrigeration fuel is recorded in other_preservation_energy. Do not duplicate the same meter or treat all sites as Chinese.

- Selected flow: Other actual preservation electricity supply
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered actual non-China or alternate-supply preservation electrical energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_energy`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased fish-chilling ice (`supplied_chilling_ice`)

Only the chilled lot branch uses this supplied onboard/landing chilling medium. Record ice mass separately from net fish; supplier production burdens replace on-site ice-production inputs for the same ice quantity.

- Selected flow: Purchased fish-chilling ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured externally supplied chilling ice added to the actual chilled lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased compressed gaseous oxygen (`live_oxygen`)

Conditional on the live branch with actual oxygen dosing. Record supplier, purity, compressed gas state and delivered mass; aeration with air is electricity, not purchased oxygen. Do not use oxygen on a chilled lot.

- Selected flow: Purchased compressed gaseous oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured purchased compressed gaseous oxygen consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Whole fish after actual preservation (`preserved_whole_lot`)

Measured usable live or chilled lot leaving this process for the same landing dispatch gate. Record survival for live fish or time-temperature observations for chilled fish; each lot has only one actual final state.

- Selected flow: Whole fish after actual preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured internal whole-fish transfer after actual preservation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation rejects sent to waste recipient (`landing_losses`)

Record actual dead or rejected material removed from sale and its recipient. Live mortality becomes waste only with a disposal record; actual lawful sale for another purpose is an independently identified co-product instead.

- Selected flow: Preservation rejects sent to waste recipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Weighed rejected fish sent to actual waste recipient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater transferred to treatment (`effluent_to_treatment`)

Only wastewater physically transferred to an actual treatment provider or separately modelled on-site treatment. Record water composition and receiver; direct surface-water discharge belongs in elementary output cards.

- Selected flow: Wastewater transferred to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured wastewater mass delivered to the recorded treatment boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_landing_preservation`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Preservation-engine fossil carbon dioxide to air (`preservation_fossil_co2`)

Conditional on actual fuel-powered refrigeration or on-site ice production. Record this engine's immediate fossil CO2 separately from capture-engine emissions and electricity/ice supplier burdens; use unspecified-air identity only where no finer air subcompartment is reported.

- Selected flow: Preservation-engine fossil carbon dioxide to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured or traceably calculated actual preservation-engine fossil CO2 mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_combustion`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water directly returned to freshwater (`direct_water_return`)

Conditional on an evidenced discharge outlet. Record receiving waterbody, mass and timing separately from pollutant substance masses; wastewater sent to treatment is excluded from this direct return.

- Selected flow: Water directly returned to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured water carrier mass discharged directly to freshwater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_landing_preservation`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: First landing presentation and handover (`landing_dispatch`)

#### Inputs

##### Product flows

###### Whole fish entering landing handover (`dispatch_lot`)

Match preserved_whole_lot when preservation is active or whole_catch for evidenced immediate fresh landing. Declare exactly one incoming source for each lot; do not count both routes or presume missing state is fresh.

- Selected flow: Whole fish entering landing handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual internal whole-fish incoming transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### New externally supplied carrier or cleaning water at dispatch (`dispatch_supplied_water`)

Record only newly supplied treated water suitable for the actual use. Water already received and accounted within preservation is carried in the water ledger, not purchased a second time; carrier water does not enter net fish biomass.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: New externally supplied carrier or cleaning water at dispatch
- Binding: unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured newly supplied dispatch water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_landing_dispatch`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wild freshwater fish, live, fresh or chilled (`freshwater_landing_product`)

Exactly one actual whole-food-fish state at the first landing collector/buyer handover, before transport to a processor or retailer. Weigh accepted net fish biomass excluding water, ice and packaging; no competing final product exchange.

- Selected flow: Wild freshwater fish, live, fresh or chilled `71a18b97-ce6e-4a8d-adab-159854459ca8`
- Binding: fixed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_dispatch`
- Sources: `net-mass-reference-definition`
- Range: Reference quantity by definition
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `net-mass-reference-definition`

##### Waste flows

###### Whole fish rejected at handover (`dispatch_fish_rejects`)

Record fish excluded from the accepted final lot and actual disposal. Distinguish price/grade downgrade sold as product and loss during subsequent distribution, which is outside this gate.

- Selected flow: Whole fish rejected at handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured fish rejected and delivered to waste recipient at this gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch`
- Range: Provisional screening estimate; replace with actual route evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | all processes | Separate species/grade lots and independently metered activities first. Assign directly traceable resource use and quality losses to their actual lot; enumerate every saleable retained species/grade and its first handover. | ghg-product-allocation |
| allocation_residual | shared trip and landing burdens | For indivisible residual burdens use evidenced causal shares when a defensible relation is demonstrated. Otherwise disclose economic shares based on contemporaneous landed species/grade revenue, reporting all output quantities, prices and sensitivity. Shares across consuming outputs sum to one; no universal allocation fraction is supplied. | ghg-product-allocation |
| allocation_losses | all catch and waste | Include resources consumed before mortality/rejection in the successful and other intended outputs' burden accounting. Give no substitution credit to released, escaped or discarded fish. Only actual lawful sales are co-products; internal transfers cancel across nodes and receive no sale credit. |  |
| allocation_period | assets and all processes | Identify construction/service, maintenance/replacement and retirement phases and actual trips/reporting periods. Allocate actual gear, vessel, ice machine, holding-tank and box service by documented usage/lifetime; retain opening/closing stock, replacement and termination evidence. Do not charge the same replacement in multiple periods. |  |
| allocation_shared | shared infrastructure and services | List each actual shared asset/service with all consuming nodes/lots and periods; assign metered use or evidenced service shares once. Record unused/standby and cleaning/changeover treatment. Account once for the same ice supply, fuel combustion, water, tank or container burden across nodes. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_capture_energy | inland_capture | capture_diesel; other_capture_energy; other_capture_electricity | meter and fuel ledger | trip_id; engine; fuel composition; purchases; tank opening/closing; replenishment; actual consumption; alternate energy | Reconcile bunkering/tank records with trip meters; preserve density evidence for volume invoices and actual supply identity. | kg; kWh | each trip | matched campaign | actual vessel or shore operation | per 1 kg reference flow | invoice; meter calibration; trip ledger |
| cp_capture_materials | inland_capture | capture_bait | material ledger | trip_id; bait species/composition; supplier; supplied and unused amount; loss destination | Weigh real bait inputs and residuals; retain matched upstream source. | kg | each trip | matched campaign | actual fishing gear | per 1 kg reference flow | weighing record; invoice; supplier origin |
| cp_catch | inland_capture | wild_biomass_removal; whole_catch; other_retained_sales; capture_discards | catch and landing ledger | trip_id; species; waterbody; gear; caught/retained/released/dead/escaped biomass; target and co-catch grades; transfer and sales destinations | Use calibrated weighed catch/landing records and traceable species/catch logs; state estimates and uncertainty for released/escaped fish; reconcile resource removal and destinations. | kg | each trip and lot | capture through same landing | named freshwater fishery | per 1 kg reference flow | scale calibration; transfer receipts; release observations; species identification |
| `cp_assets_inland_capture` | `inland_capture` | capture_gear; spent_gear; shared assets | asset and service ledger | asset_id; material; acquisition; service life; use hours/cycles; consumers; periods; replacements; retirement; waste destination ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Record actual service and material replacements; match component inventory or upstream asset dataset and documented service attribution. ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each replacement plus period close | actual service periods | all declared consuming nodes | per 1 kg reference flow | asset ledger; service log; waste receipts; lifetime evidence |
| `cp_assets_landing_preservation` | `landing_preservation` | capture_gear; spent_gear; shared assets | asset and service ledger | asset_id; material; acquisition; service life; use hours/cycles; consumers; periods; replacements; retirement; waste destination ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Record actual service and material replacements; match component inventory or upstream asset dataset and documented service attribution. ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each replacement plus period close | actual service periods | all declared consuming nodes | per 1 kg reference flow | asset ledger; service log; waste receipts; lifetime evidence |
| `cp_assets_landing_dispatch` | `landing_dispatch` | capture_gear; spent_gear; shared assets | asset and service ledger | asset_id; material; acquisition; service life; use hours/cycles; consumers; periods; replacements; retirement; waste destination ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Record actual service and material replacements; match component inventory or upstream asset dataset and documented service attribution. ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each replacement plus period close | actual service periods | all declared consuming nodes | per 1 kg reference flow | asset ledger; service log; waste receipts; lifetime evidence |
| cp_combustion | inland_capture | capture_fossil_co2; capture_carbon_monoxide; other_capture_emissions | measurement or factor calculation | trip_id; engine; fuel mass/composition; measured pollutant; medium; factor source/version; factor denominator; oxidation; particle size; uncertainty | Use actual exhaust measurement or traceable applicable engine/fuel factor and recorded activity; report each substance and basis, including missing pollutants and gear-loss substance records. | kg | each applicable engine/trip | matched campaign | actual engines and receiving medium | per 1 kg reference flow | test report or factor source; fuel reconciliation; method suitability |
| cp_preservation | landing_preservation | landing_catch; supplied_chilling_ice; live_oxygen; actual_preservation_materials; preserved_whole_lot; landing_losses | lot handling and material ledger | lot_id; input/output net biomass; actual state; time-temperature or viability; holding duration; ice origin/use; oxygen supplier/purity/mass; materials; rejects/recipient | Weigh matched incoming/outgoing lots and actual preservation inputs; record live and chilled branches separately; keep on-site ice-production ledger and no-intervention proof. | kg | each lot | capture to first landing handover | actual onboard or landing preservation | per 1 kg reference flow | scale calibration; invoices; survival/temperature logs; disposal receipts |
| cp_preservation_energy | landing_preservation | cn_low_voltage_electricity; other_preservation_electricity; other_preservation_energy | energy meter ledger | lot_id; site; geography; supplier; voltage; meter readings; live pumps/aeration; refrigeration; ice production; cleaning; standby; engine fuel | Meter actual utilities and reconcile end uses and shared periods; differentiate purchased ice and its supplier energy from on-site energy. | kWh; kg | each lot or closed period | matched capture/landing campaign | actual supplier and end-use nodes | per 1 kg reference flow | meter calibration; utility bill; allocation reconciliation |
| `cp_water_landing_preservation` | `landing_preservation` | supplied_process_water; dispatch_supplied_water; direct_freshwater_withdrawal; effluent_to_treatment; direct_water_return; direct_discharge_substances | water and discharge ledger | lot_id; water source/quality; supply/withdrawal mass; internal circulation; ice production/melt; carrier water shipped; treatment receipt; direct outlet and receiving body; substance/concentration; refrigerant species/leak ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure each external water path and destinations; volume records retain density/state conversion; derive substance loads from matched monitoring, not assumed wastewater composition; trace actual refrigerant leaks to air. ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each lot and outlet monitoring period | matched boundary period | actual intakes, supply and outlets | per 1 kg reference flow | meter calibration; quality tests; outlet samples; treatment receipts; refrigerant service log |
| `cp_water_landing_dispatch` | `landing_dispatch` | supplied_process_water; dispatch_supplied_water; direct_freshwater_withdrawal; effluent_to_treatment; direct_water_return; direct_discharge_substances | water and discharge ledger | lot_id; water source/quality; supply/withdrawal mass; internal circulation; ice production/melt; carrier water shipped; treatment receipt; direct outlet and receiving body; substance/concentration; refrigerant species/leak ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Measure each external water path and destinations; volume records retain density/state conversion; derive substance loads from matched monitoring, not assumed wastewater composition; trace actual refrigerant leaks to air. ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg | each lot and outlet monitoring period | matched boundary period | actual intakes, supply and outlets | per 1 kg reference flow | meter calibration; quality tests; outlet samples; treatment receipts; refrigerant service log |
| cp_preservation_combustion | landing_preservation | preservation_fossil_co2; preservation_other_emissions | measurement or factor calculation | lot_id; refrigeration/ice engine; fuel mass and fossil carbon; pollutant; air compartment; test/factor source/version/denominator; uncertainty | Use actual preservation-engine tests or an applicable traceable factor with independently measured engine activity; retain substance and basis, no duplication with capture fuel or supplier electricity/ice. | kg | each actual engine/lot | matched landing period | actual preservation engines | per 1 kg reference flow | engine test or factor source; fuel/meter reconciliation |
| cp_dispatch | landing_dispatch | dispatch_lot; dispatch_packaging; freshwater_landing_product; packaging_rejects; dispatch_fish_rejects | accepted handover ledger | lot_id; actual input route/state; species/grade; gross/tare/accepted net fish mass; ice/water/container mass; buyer/gate/time; prices; component mass/reuse; reject destinations | Weigh accepted net whole-fish biomass on a calibrated scale excluding ice, carrier water and packaging; match acceptance and first landing receipt to lot and incoming transfer; weigh actual packaging and rejects. | kg | each handover lot | same trip/landing campaign | first landing handover site | per 1 kg reference flow | scale calibration; acceptance/transfer receipt; actual-state and gate evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_normalization | all inventory rows | Sum the actually attributable measured exchange for the closed lot/campaign and divide by the accepted net final whole-fish biomass of the same scope; report per 1 kg reference flow. Retain original totals and disclosed allocation shares. | matched protocol records; accepted final net biomass; allocation ledger | exchange per 1 kg reference flow | net-mass-reference-definition |
| water_reconciliation | water ledger | Reconcile external supplied water plus direct abstraction and opening water with closing water, shipped carrier water, ice/melt, treatment transfer, direct return and evidenced evaporation/loss. Internal circulation is recorded but not an additional external input. | cp_water_landing_preservation; cp_water_landing_dispatch; cp_preservation; cp_dispatch | closed water ledger and uncertainty |  |
| catch_reconciliation | catch ledger | Reconcile retained target/co-catch, releases, escapes, dead material and opening/closing lot stock with captured organisms on one stated sampling/state basis. Internal transfers match both ends; no artificial 1 kg intermediate yield. | cp_catch; cp_preservation; cp_dispatch | matched biomass ledger with uncertainty |  |
| combustion_calculation | direct emissions | Apply a documented compatible substance-specific measured/factor method to actual fuel activity, preserving carbon source and denominator. Upstream supply and foreground engine emissions are separate datasets and must not overlap. | cp_capture_energy; cp_combustion; cp_preservation_energy; cp_preservation_combustion; actual factor/test record | substance/medium-specific mass per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | reference and catch | Verify wild freshwater food origin, excluded species/product boundaries, declared actual state and same first landing handover. | species/origin logs; actual acceptance and gate records; un-cpc3-notes |
| quality_completeness | all processes | Cover successful and zero/failed trips, all intended co-catch sales, releases, actual wastes, energy/water and material resources; distinguish actual zero from missing information. | closed campaign ledger; missing-data register |
| quality_conditions | preservation and dispatch | Record before/after fish state and actual branch; immediate fresh bypass requires no-intervention evidence; no presumed live-to-chilled equivalence or default oxygen/ice ratio. | lot observations; viability or time-temperature records |
| quality_periods | assets, trips and shared services | Match actual reporting periods and consumers; retain asset/service/replacement/retirement and standby/changeover treatment. | cp_assets_inland_capture; cp_assets_landing_preservation; cp_assets_landing_dispatch; meter allocation ledger |
| quality_environment | resource and emissions | Retain resource-removal and habitat/gear/bycatch evidence, substance/medium emissions and water destinations; disclose methods, uncertainty and unsupported LCIA impacts. | catch observations; engine factors/tests; water monitoring; LCIA scope |
| quality_estimates | all Range blocks | Replace provisional screening estimates with route-specific evidence; an outlier is investigated without changing its measured value to a range endpoint. | range evidence and outlier investigation |
| quality_binding | actual concrete exchanges | Verify actual flow UUID, type, property/unit and supplier/state/medium; semantic umbrella cards require independent actual-exchange identities before TIDAS publication. | identity verification records kept outside PCR content |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_other_capture_energy` | `inland_capture`; inputs; product | Identify and separately collect every actual exchange covered by “Other actual capture fuels”; retain all following collection, quantity and normalization obligations: Conditional umbrella for actual petrol or another liquid/solid fuel. Expand into separately measured materials with matching upstream supply; purchased electricity has its own energy card, and the freshwater-vessel diesel identity is not universal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured actual liquid or solid fuel mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_capture_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_gear` | `inland_capture`; inputs; product | Identify and separately collect every actual exchange covered by “Fishing gear material replacements”; retain all following collection, quantity and normalization obligations: Record actual net, line and other material replacements by composition, service use and consuming periods. The card is a component umbrella, not a universal nylon material. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured replacement material share attributed to this trip and output Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_assets_inland_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_bait` | `inland_capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual fishing bait”; retain all following collection, quantity and normalization obligations: Conditional on baited gear. Record species or material, state and supplier; retain upstream catch or production burdens and bait lost in water. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured bait supplied to actual trips Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_capture_materials` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_retained_sales` | `inland_capture`; outputs; product | Identify and separately collect every actual exchange covered by “Other retained catch actually sold”; retain all following collection, quantity and normalization obligations: Conditional umbrella for each separately sold co-catch species or grade and its actual landing handover; include non-target products in the allocation ledger even if outside this PCR's reference scope. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured saleable co-catch by species and grade Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_catch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spent_gear` | `inland_capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Spent fishing gear sent to waste treatment”; retain all following collection, quantity and normalization obligations: Record composition-specific gear delivered to collection, recycling or disposal. Lost gear is excluded from this treatment quantity and traced separately. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Weighed spent gear share with receiver evidence Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_assets_inland_capture` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_capture_emissions` | `inland_capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other evidenced combustion or gear-loss substances”; retain all following collection, quantity and normalization obligations: Expand the conditional card only from actual substance-resolved records: for example nitrogen dioxide when reported as that substance, or identified lost polymer. Preserve NOx reporting basis and particulate size; do not relabel NOx totals as nitrogen dioxide molecules or use a generic pollution UUID. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured actual substance mass with medium and factor basis retained Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_combustion` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_preservation_energy` | `landing_preservation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual preservation engine fuel”; retain all following collection, quantity and normalization obligations: Conditional on actual engine-driven refrigeration or on-site ice production. Record fuel material, engine and mass separately from electricity and capture diesel. Add measured or traceable substance-specific engine emissions to the concrete inventory without repeating capture emissions. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured actual preservation engine fuel mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_preservation_energy` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_actual_preservation_materials` | `landing_preservation`; inputs; product | Identify and separately collect every actual exchange covered by “Actual cleaning or preservation materials”; retain all following collection, quantity and normalization obligations: Conditional umbrella for actual composition-specific cleaning material or refrigerant replacement/leak makeup. Record legitimate use and destination; no mandatory disinfection regimen or unproved chemical technology. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured actual separately identified material use Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_preservation` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_direct_freshwater_withdrawal` | `landing_preservation`; inputs; elementary | Identify and separately collect every actual exchange covered by “Direct freshwater withdrawal from actual waterbody”; retain all following collection, quantity and normalization obligations: Record only natural water actually abstracted within the foreground boundary, by river/lake/groundwater source and intake. Supplier water already includes its upstream withdrawal; circulation inside a tank is not repeated withdrawal. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Metered directly abstracted freshwater mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_landing_preservation` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_preservation_other_emissions` | `landing_preservation`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual preservation-engine pollutants to air”; retain all following collection, quantity and normalization obligations: Expand separately for actual carbon monoxide and other measured or factor-supported pollutant substances, retaining NOx reporting basis and particulate size. Match the actual preservation engine/fuel/test and receiving air compartment; do not reuse capture activity amounts. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured or traceably calculated pollutant substance mass from the actual preservation engine Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_preservation_combustion` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_direct_discharge_substances` | `landing_preservation`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual substances in direct discharge or refrigerant leakage”; retain all following collection, quantity and normalization obligations: Expand each evidenced pollutant into its substance, receiving medium and measured concentration/load; distinguish phosphorus element from phosphate species and preserve nitrogen basis. Track actual refrigerant species leaked to air separately. No generic effluent pollutant UUID or assumed composition. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured substance-specific direct emission mass Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_landing_preservation` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_packaging` | `landing_dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual landing packaging components”; retain all following collection, quantity and normalization obligations: Conditional on packing before first handover. Separate bags, boxes and returnable containers by material, supplier and reuse cycles; attribute measured replacement/service shares, rather than charging the full reusable container every trip. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured packaging component consumption or attributable reusable-material share Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_dispatch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_packaging_rejects` | `landing_dispatch`; outputs; waste | Identify and separately collect every actual exchange covered by “Packaging waste at landing dispatch”; retain all following collection, quantity and normalization obligations: Record actual damaged or rejected packaging and its destination inside the gate. Packaging retained by the buyer or returnable containers are handover metadata, not invented current-gate waste. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Measured packaging waste sent to actual recipient Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_dispatch` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | Require wild freshwater food species and whole unprocessed actual live/fresh/chilled state; reject excluded farmed, ornamental, Salmonidae, frozen or processed substitutions. | un-cpc3-notes |
| validate_reference | freshwater_landing_product | Require 1 kg accepted net fish and one actual first landing handover. Exclude carrier water, ice and packaging; same reference row applies to every declared state. | net-mass-reference-definition |
| validate_route | process map and transfers | Require one evidenced incoming route at dispatch. Live and chilled preservation are mutually exclusive per reference lot; unknown actual state/operation blocks completion. Check actual transfer masses at both ends and bypass preservation only with immediate-fresh evidence. |  |
| validate_resources | capture and preservation | Require biomass removal, actual vessel/manual mode, complete fuel/gear/bait/utilities and attributable shared assets; no missing resource treated as zero. Separate supplied ice from on-site production and preserve actual supplier/geography/voltage identity. |  |
| validate_environment | elementary and waste cards | Require substance and receiving medium for direct emissions, actual factor/test basis, direct withdrawal/return versus supply/treatment pathways and actual waste recipients. Catch/habitat logs and method-coverage gaps must be disclosed; reject invented universal depletion or pollutant UUIDs. |  |
| validate_outputs | intended output set | Enumerate species/grade sales with handover, quantity and price, distinguish release/residue/waste, apply explicit allocation precedence and verify shares/reconciliation. One sale cannot be reported at multiple handovers; internal transfers have no output credit. |  |
| validate_periods_shared | assets and all processes | Link trips, campaign/continuous-period boundaries, cleaning/changeover, phases, replacement/retirement and all asset consumers; reject duplicate attribution of a common resource or asset across nodes/periods. |  |
| validate_measurement | all inventory rows | Require matched measurement/property/unit, per 1 kg reference flow basis, collection protocol and transparent density/energy or substance conversion where used. No unmeasured universal fish weight, yield, mortality, ice or fuel factor. |  |
| validate_bindings_ranges | all inventory rows | Confirm fixed identities against actual state, gate and support rows; expand conditional umbrellas with verified actual identities. Provisional reasoned ranges only screen records, cannot supply fabricated empirical values or truncate outliers. |  |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for wild freshwater whole-food-fish capture through first landing handover |
| downstream_use | secondary_dataset; background_dataset; flow, process and lifecyclemodel projections only after actual concrete identities and data evidence are complete |
| allowed_use | Declared species/waterbody, actual capture gear and reporting period, one actual live/fresh/chilled state and matched first landing gate; any aggregation preserves disclosed species/state/route shares |
| excluded_use | Aquaculture; marine or brackish fish; ornamental/nonfood and Salmonidae references; processing/retail/cooking; universal fishery performance; equivalent edible service across species/states; claim of complete habitat/biodiversity assessment from resource-flow mapping alone |
| required_metadata | Reference qualifiers; trips/campaign or continuous period; co-catch/loss/release ledger; preservation branch and time/viability records; asset consumers/service periods; actual utility and material supply; gate and accepted net biomass |
| required_quality_disclosure | Data coverage and uncertainty; failed trips; allocation/period assumptions; stocked-source burden investigation; UUID gaps; provisional ranges; exhaust/water methods; actual wastes; excluded capital or direct impacts and LCIA coverage |
| update_trigger | Changed species/origin/waterbody, gear/engine, actual state/gate, preservation mode, supplier/voltage, ice origin, survival/loss, shared-asset attribution, discharge route or new measured evidence |

## 11. Data Sources

All external web sources below were retrieved on 2026-10-09.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes | official_guidance | United Nations, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed pp. 40–41. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification inclusion/exclusion only; no catch quantities or environmental factors |
| fao-inland-fisheries | official_guidance | FAO, Inland Fisheries. https://www.fao.org/inland-fisheries/en/ | Extraction from inland waters and ecosystem context; freshwater restriction is defined separately in this PCR |
| fao-fish-handling | handbook | FAO, The use of ice and chilled seawater on fishing vessels, chapter 4. https://www.fao.org/4/y5013e/y5013e07.htm | Qualitative immediate handling, chilling and ice origin/service roles; marine examples, temperature prescriptions and quantitative ice ratios are not adopted as inland universal factors |
| fao-live-transport | handbook | FAO, Transport of live fish. https://www.fao.org/4/T8389E/T8389E06.htm | Qualitative live maintenance, oxygen/water handling and losses; no historical drug regimen or generic survival factor is adopted |
| net-mass-reference-definition | method_factor | PCR sections 3–4: accepted net whole-fish reference normalization identity. | 1 kg final accepted fish, exact 1–1 kg reference range and actual lot normalization; not an empirical fishery-performance dataset |
| ghg-product-allocation | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard, chapter 9, allocation. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf (retrieved 2026-10-09) | Allocation policy: subdivision, causal physical relation, disclosed economic fallback; no fishery performance factors |
