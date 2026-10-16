---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-freshwater-fish-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed freshwater food fish, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides foreground dataset production for aquaculture-origin non-Salmonidae freshwater food fish, delivered whole, unheaded and ungutted at the first producer farm harvest/dispatch handover. Each lot declares actual live, fresh or chilled state. Actual pond, freshwater-cage, flow-through/raceway and RAS configurations are covered through evidenced records; common carp is an illustrative representative, not a recipe for every species.

Exclude wild capture, ornamental fish, non-food seed/feed as final output, Salmonidae, frozen products, head/gut-removed fish and fillets or other independent processing. Purchased seed stays an input; own seed production is included where actual. Historical FAO descriptions support qualitative route examples and supply no current default ration, density, drug, survival or emission factor.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-freshwater-fish-live-fresh-or-chilled |
| classification_refs | CPC 3.0 04212; narrower |
| covered_products | Aquaculture-origin non-Salmonidae freshwater whole food fish; actual live/fresh/chilled first farmgate |
| excluded_products | Wild, ornamental, non-food final seed/feed, Salmonidae, frozen and head/gut-removed or separately processed products |
| representative_product | Farmed common carp for food; actual species and market state determine records |
| production_route | Parent growout; own versus purchased seed by cohort; actual pond/cage/flow-through/RAS technology by unit-stage; harvest and actual pre-gate preservation, then handover |
| market_state | Actual live, fresh or chilled state for each accepted lot; no presumed equivalence between states |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole farmed freshwater food fish at first producer handover |
| How much | 1 kg |
| How well | Non-Salmonidae, human-food, unheaded and ungutted; actual lot state live/fresh/chilled, traceable acceptance and destination |
| How long or cycle | Full actual seed/nursery/grow-out cycle and relevant reporting periods; linked partial harvests, pre-gate holding/chilling, shared-asset service periods and opening/closing stocks |
| reference_flow_link | `farmgate_whole_fish` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole farmed freshwater food fish at first producer handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/family; aquaculture/freshwater context; human-food purpose; cohort and seed origin; actual pond/cage/flow-through/RAS unit-stage; whole unheaded/ungutted form; actual live/fresh/chilled state; first producer gate and geography/date; weighing/tare/drainage method; full cycle/reporting periods; polyculture/integrated co-outputs and allocation; upstream data; water and energy supply |
| Binding |  |

Accepted net wet fish biomass excludes containers, carrier water, ice and rejects. The 1 kg is a reporting normalization definition, not a prescribed individual fish or internal-transfer amount. A final data package must contain every qualifier; unknown state cannot default to live or fresh.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_gate calibrated weighing for accepted whole-fish net wet mass, excluding container/water/ice tare; drainage, repeated sampling, rejects and lot gate must be traceable. |
| `seed_count_mass` | seed and fish stock | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count multiplied by representative individual wet mass of the same cohort/stage; retain distribution and uncertainty, no universal count/kg or fixed 1 kg juvenile quantity. |
| `input_material_basis` | feed; fertilizer; chemical; sludge | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare wet/dry material mass, moisture, elemental N/P and active ingredient; element/substance conversion needs evidenced molecular/specification basis; wet sludge is not dry solids. |
| `water_density` | water rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass using actual density/condition, retain raw m3; distinguish withdrawal, supply, circulation and net consumption. |
| `energy_units` | cn_lv_electricity; electricity_other | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Retain metered kWh; 1 kWh = 3.6 MJ; delivered property and energy unit group must match, fuel mass stays separate from electrical energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual opening culture stock and purchased seed receipt, or documented on-site founders/breeding/nursery; declare cohort route and existing facility condition |
| starting_condition_role | Foreground entry fact, not a justification for zero upstream burden or absent broodstock history |
| product_classification_scope | Narrower whole unheaded/ungutted non-Salmonidae food scope within CPC 04212; routes selected semantically, not from code |
| recursive_input_rule | Same-category purchased seed/stock retains actual mass and supplier-gate upstream data; stop foreground recursion at declared receipt and disclose supplier boundary, no zero burden or duplicate own hatchery |
| upstream_dataset_requirement | Compatible secondary datasets for actual seed/feed/fertilizer/chemical/water/energy/packaging/asset/transport suppliers; disclose geography/year/technology/gate/allocation and gaps |
| disclosure | Selected nodes, cohort/technology topology, production cycles/carried stock, co-output destinations, asset consumers/life, upstream support/exclusions, actual gate state and uncertainty |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | whole foreground system | Include actual aquaculture seed receipt or on-site breeding, managed grow-out, physical harvest and actual producer-controlled preservation/loading through first farm handover; classify whole live/fresh/chilled fish by actual lot state. Independently operated post-gate transport and processing are outside. | `fao-carp-2009`; `fao-freshwater-marketing` |
| `boundary_seed` | own_seed; growout | Parent growout is required. Own breeding/nursery changes topology to founders, nursery inputs and internal juvenile output; purchased seed changes provider/upstream hatchery requirements. The two routes are exclusive for each cohort; mixed farms identify and sum distinct cohorts, without duplicating hatchery burdens. | `fao-carp-2009` |
| `boundary_technology` | growout; farm_services | Declare actual unit-to-technology map under growout. Pond units require natural productivity/fertilizer and sediment records; cages require net/mooring and receiving-water releases; flow-through/raceways require intake/outlet and pumping records; RAS requires makeup/recirculation distinction, filtration media, sludge and treatment energy. One technology per unit-stage interval unless a documented hybrid partitions flows; coexistence across units requires shares and transfer links. | `fao-carp-2009`; `ufifas-ras-fa099` |
| `boundary_upstream` | all external inputs | Include provider production and attributable pre-gate transport for seed, feed, manure/fertilizer, chemicals, energy, packaging and infrastructure; declare inventory start conditions and supporting secondary datasets. Integrated manure has an evidenced burden/attribution decision, never automatic zero. Own seed has internal inputs instead of adding purchased hatchery burden for the same cohort. | `ghg-product-allocation-2011` |
| `boundary_periods` | all selected nodes | Enumerate broodstock/seed phase, nursery and grow-out cycles, partial harvests, fallow/cleaning periods, holding and dispatch intervals, and shared-asset construction, maintenance, replacement and retirement. Opening/closing fish, feed, water and material stocks carry between periods with event links. | `fao-carp-2009`; `ghg-product-allocation-2011` |
| `boundary_water` | farm_services; growout | Keep supplied water, fresh abstraction, recirculation, direct returns, treatment effluent, evaporation and storage changes in one linked water ledger. Assign actual receiving medium and nutrient substance; count each pollutant once across untreated release or wastewater treatment routes. Ecological observations, escape and natural pond production are records, not fabricated elementary identities. | `ufifas-ras-fa099` |
| `boundary_shared` | farm_services | Identify each pump, pond, aerator, raceway, cage/net/mooring, RAS filter, cold unit and tank actually shared by at least two nodes or periods; list all consumers and service periods. Record measured service shares and provider/material/end-of-life burdens once in the central ledger; exclusive assets use direct assignment. | `ghg-product-allocation-2011` |

## 6. Process Inventory Structure

Declare actual culture batches, continuous units or overlapping cohorts; link every input/output, cleaning/changeover/fallow event to cohort, unit and period. growout is the required biological parent; own seed is its production-route delta and pond/cage/flow-through/RAS are its technology deltas. Partition mixed farms by actual unit-stage rather than completing every alternative for one cohort.

farm_services owns one water, power, fuel and asset ledger, with every actual consumer among own_seed, growout, harvest, preservation and dispatch and its period. Other nodes link service shares without repeating totals. Harvest independently owns physical removal and loss classification; preservation owns actual usable-state stabilization; dispatch owns protection/presentation and first producer handover, with independent later distribution outside.

Conditional semantic cards expand to zero, one or multiple concrete exchanges from actual records; each material/substance and UUID needs verification. Provisional finite ranges are site-applicable order-of-magnitude QA screens only, not inventory substitutes; actual records take precedence and out-of-screen observations need explanation. Every internal fish amount is collected, never inherited from final 1 kg.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `own_seed` | On-site breeding and nursery | conditional | Actual on-site seed production; parent growout; mutually exclusive with purchased seed for the same cohort, mixed supply allowed only across identified cohorts | managed biological seed-production delta | per 1 kg reference flow; retain actual node output |
| `growout` | Managed freshwater grow-out | required | Actual pond, freshwater cage, flow-through/raceway or RAS units; alternatives share this required parent | managed biological production parent | per 1 kg reference flow; retain actual node output |
| `farm_services` | Farm services and shared assets | required | Actual utility and infrastructure consumers across selected seed, grow-out, harvest, preservation and dispatch nodes | one attributed utility and asset ledger | per 1 kg reference flow; retain actual node output |
| `harvest` | Physical harvest | required | Actual removal from culture units; partial and complete harvest events declared | biomass removal and loss classification | per 1 kg reference flow; retain actual node output |
| `preservation` | Pre-gate live holding or chilling | conditional | Actual bounded producer-controlled live holding or whole-fish chilling before first handover; bypass if absent | usable-state preservation | per 1 kg reference flow; retain actual node output |
| `dispatch` | Protection, loading and producer handover | required | Actual first farm handover; packaging resources only where used | presentation and reference output | per 1 kg reference flow; retain actual node output |

### Process: On-site breeding and nursery (`own_seed`)

#### Inputs

##### Product flows

#### Outputs

##### Product flows

###### On-site juvenile biomass transferred to grow-out (`own_juvenile_transfer`)

This internal hatchery/nursery hand-off keeps actual species, stage, condition and transferred wet biomass; its matching grow-out input cancels on aggregation and is not final food output.

- Selected flow: On-site juvenile biomass transferred to grow-out
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Actual juvenile wet biomass transferred, measured directly or calculated from representative count and individual wet mass; never fixed at the final reference quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_own_seed`
- Sources: `fao-carp-2009`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Seed mortalities sent to documented waste handling (`seed_mortalities`)

Dead seed crossing the nursery boundary to waste handling is waste, with wet mass, reason and treatment destination; unobserved losses remain an inventory gap rather than a zero.

- Selected flow: Seed mortalities sent to documented waste handling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Measured or count-and-mass estimated dead biomass removed from seed batches, with uncertainty.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_own_seed`
- Sources: `fao-carp-2009`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Managed freshwater grow-out (`growout`)

#### Inputs

##### Product flows

###### Purchased juvenile seed at farm receipt (`purchased_seed`)

Use this role for each purchased seed batch rather than own_juvenile_transfer for the same animals; preserve species, life stage, provider and upstream hatchery burden with actual pre-gate transport.

- Selected flow: Purchased juvenile seed at farm receipt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Measured received juvenile wet biomass or count converted with representative batch wet mass; match mortality and opening-stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_growout`
- Sources: `fao-carp-2009`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### On-site juveniles received by grow-out (`own_seed_receipt`)

Internal receipt is the same actual transfer event as own_juvenile_transfer. Species and stage must match; provider seed burdens are not added to the same internally produced batch.

- Selected flow: On-site juveniles received by grow-out
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Actual received juvenile wet biomass linked one-to-one to the hatchery transfer event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_growout`
- Sources: `fao-carp-2009`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Market-size fish biomass handed to harvest (`grown_stock`)

The managed production hand-off is still live cultured stock, before physical removal. Record species, culture unit, batch, actual wet biomass and partial-harvest stock remaining; growth is a biological gain, not a mass-conservative seed transfer.

- Selected flow: Market-size fish biomass handed to harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Actual biomass made available to each harvest event using linked stock assessment and representative weighing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_growout`
- Sources: `fao-carp-2009`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grow-out mortalities removed to waste treatment (`growout_mortalities`)

Specify cause, wet biomass, removal date and handler; saleable recovered product requires a separate evidenced product role. Escape events are reported in stock/ecological records and are not invented waste or elementary fish flows.

- Selected flow: Grow-out mortalities removed to waste treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Measured mortality biomass with estimated unobserved fraction and destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_growout`
- Sources: `fao-carp-2009`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Farm services and shared assets (`farm_services`)

#### Inputs

##### Product flows

###### Externally supplied treated process water (`treated_water_supply`)

Applicable only to actual purchased treated industrial process-quality water with documented fish-use suitability at delivery. It excludes own freshwater withdrawal, recirculation and wastewater; supplier treatment burden is counted once.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Process Water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: unresolved
- Amount rule: Measured purchased water mass attributable to consuming nodes; volumetric receipts require actual density and temperature evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_farm_services`
- Sources: `ufifas-ras-fa099`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased CN low-voltage grid-average AC electricity (`cn_lv_electricity`)

Applicable only where actual supplier/location/voltage evidence matches CN consumption mix to user, AC below 1 kV. Other electricity configurations use electricity_other; this condition does not restrict fish geography.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Alternating current, CN grid-average consumption mix to user, <1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Binding: fixed
- Amount rule: Metered kWh assigned by node, batch and period; reconcile utility bill and any submeter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ufifas-ras-fa099`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity from other actual supply configurations (`electricity_other`)

For every other purchased or imported electricity country, voltage or supplier mix, specify the actual delivered supply and support property. Self-generated power is tracked through actual fuel/generation records without a second purchased-electricity burden; do not reuse a CN identity or duplicate cn_lv_electricity for the same meter interval.

- Selected flow: Electricity from other actual supply configurations
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- Binding:
- Amount rule: Actual metered electricity attributable to all consuming nodes and pre-gate transfer equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ufifas-ras-fa099`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased useful heat delivered to farm operations (`purchased_useful_heat`)

Include only actual externally supplied useful heat with supplier, heat-carrier/delivery gate, temperature or pressure and measured delivered energy. Attribute to actual seed, grow-out, holding or cleaning consumers; supplier fuel/combustion burden stays upstream and is not duplicated as farm fuel.

- Selected flow: Purchased useful heat delivered to farm operations
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Binding:
- Amount rule: Measured delivered useful heat MJ from metering or verified supplier heat records and node-period attribution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ufifas-ras-fa099`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Waste flows

###### Removed pond-bottom sediment sent to treatment (`culture_sludge_pond_sediment`)

Record only when this specific waste stream is actually removed to its evidenced recipient; in-situ deposition is not collected sludge, and sediment and other solids cannot double own the same mass. Retain source stage/unit/period, removal event, moisture, dry solids and nutrient analysis separately.

- Selected flow: Removed pond-bottom sediment sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Independently measured wet mass of this specific waste stream, retaining dry-solids companion measurement and destination; normalize by final accepted net fish mass, never copy a grouped total or range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_farm_services`

###### Collected recirculating-aquaculture-system sludge sent to treatment (`culture_sludge_ras_sludge`)

Record only when this specific waste stream is actually removed to its evidenced recipient; in-situ deposition is not collected sludge, and sediment and other solids cannot double own the same mass. Retain source stage/unit/period, removal event, moisture, dry solids and nutrient analysis separately.

- Selected flow: Collected recirculating-aquaculture-system sludge sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Independently measured wet mass of this specific waste stream, retaining dry-solids companion measurement and destination; normalize by final accepted net fish mass, never copy a grouped total or range.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_farm_services`

###### Effluent transferred to a wastewater treatment provider (`effluent_to_treatment`)

Only effluent crossing to an actual treatment technosphere belongs here, with provider gate, wet mass and pollutant specifications; reconcile nutrients with the treatment model so releases are not duplicated.

- Selected flow: Effluent transferred to a wastewater treatment provider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Measured wastewater wet mass sent to documented treatment, with destination and paired quality samples.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_farm_services`
- Sources: `ufifas-ras-fa099`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide emitted to unspecified air (`fossil_co2_air`)

Only actual fossil combustion CO2 to unspecified air is represented. Exclude biogenic respiration, purchased carbon dioxide and CO2-equivalent; independently support the fuel-specific carbon/oxidation calculation.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding: fixed
- Amount rule: Measured fossil CO2 or transparent fuel-specific emissions calculation tied to actual_fuels; disclose factor source, fossil share and uncertainty.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_farm_services`
- Sources: `fao-carp-2009`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual water returned to the environment (`direct_water_return`)

Record direct return by actual receiving water compartment; distinguish intake, discharge, evaporation, biomass/product water and storage change. If water is sent to treatment it belongs to effluent_to_treatment instead.

- Selected flow: Actual water returned to the environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Measured direct returned water mass with measured quality and water-ledger reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_farm_services`
- Sources: `ufifas-ras-fa099`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Physical harvest (`harvest`)

#### Inputs

##### Product flows

###### Stock physically received for harvest (`harvest_stock_receipt`)

The harvest node independently removes fish from the production waterbody/unit by actual seine, drain, cage lifting or equivalent method; receipt matches grown_stock event and includes partial harvest context.

- Selected flow: Stock physically received for harvest
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Actual received wet biomass at harvest start, reconciled with remaining stock and removals.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_harvest`
- Sources: `fao-carp-2009`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvested whole food fish transferred to preservation or dispatch (`harvested_whole_transfer`)

Whole unheaded/ungutted harvested fish leaves harvest in actual live/fresh state for pre-gate handling or direct dispatch; this is an internal quantity, not automatically accepted final mass.

- Selected flow: Harvested whole food fish transferred to preservation or dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Actual harvested transferable wet biomass after event-specific loss and rejection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_harvest`
- Sources: `fao-carp-2009`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest rejects requiring waste handling (`harvest_rejects`)

Damaged/dead fish and incidental removed material sent to waste treatment require separate material identities and destinations; stock left in the culture unit is not waste.

- Selected flow: Harvest rejects requiring waste handling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Measured rejected wet material mass by species/material, event and handler.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_harvest`
- Sources: `fao-carp-2009`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Pre-gate live holding or chilling (`preservation`)

#### Inputs

##### Product flows

###### Whole harvested fish entering pre-gate preservation (`preservation_fish`)

Include only actual producer-controlled short live holding or chilling before first farm handover; record incoming usable state, timestamp, lot and wet biomass. Fresh direct handover may bypass this node.

- Selected flow: Whole harvested fish entering pre-gate preservation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Actual incoming fish wet biomass matched to harvested_whole_transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fao-freshwater-marketing`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual purchased ice for whole-fish farm chilling (`aquaculture_ice`)

Only actual chilled lots use supplied suitable ice at the farm; farm-made ice uses water and power in farm_services instead of duplicating purchased ice. Capture-vessel ice identity is not assumed compatible.

- Selected flow: Actual purchased ice for whole-fish farm chilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Measured purchased chilling ice consumed for the lot, separate from remaining ice and meltwater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fao-freshwater-marketing`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual supplied compressed oxygen for live holding (`live_oxygen`)

Only actual live-holding lots with documented supplied compressed oxygen use this role; require purity, pressure, provider and cylinder tare. Aeration electricity is recorded separately and does not imply a purchased oxygen input.

- Selected flow: Actual supplied compressed oxygen for live holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Measured supplied oxygen gas mass consumed from weighed cylinders or verified mass metering.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fao-freshwater-marketing`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Whole preserved fish transferred to dispatch (`preserved_whole_transfer`)

Declare actual stabilized live or chilled state, time, temperature/survival evidence and destination; the head/gut remain intact. No universal time, temperature or shelf-life rule is imposed.

- Selected flow: Whole preserved fish transferred to dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Actual transferable fish wet biomass after handling loss and rejection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fao-freshwater-marketing`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pre-gate holding or chilling losses sent to waste handling (`preservation_losses`)

Dead/unusable fish leaves the node to actual documented waste handling; weight change from drainage is recorded separately from biomass death. Ice melt routes through the water ledger.

- Selected flow: Pre-gate holding or chilling losses sent to waste handling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Measured discarded fish biomass, destination and measured or explained drainage/weight change.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fao-freshwater-marketing`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Protection, loading and producer handover (`dispatch`)

#### Inputs

##### Product flows

###### Whole food fish received for producer handover (`dispatch_fish_receipt`)

Receive the actual harvested or preserved lot once; record the actual live/fresh/chilled presentation before protection/loading and reconcile its origin to one upstream transfer.

- Selected flow: Whole food fish received for producer handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: Actual incoming wet fish biomass, with matched transfer id.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate`
- Sources: `fao-freshwater-marketing`
- Range: Provisional reasoned QA screen only; actual site records take precedence and values outside the screen require explanation, not clipping
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Whole farmed freshwater food fish at first producer handover (`farmgate_whole_fish`)

The actual accepted non-Salmonidae food fish is whole, unheaded and ungutted in recorded live, fresh or chilled state. Handover is the first producer farmgate after included operations, excluding water, ice and package tare.

- Selected flow: Whole farmed freshwater food fish at first producer handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Binding:
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_gate`
- Sources: `pcr-normalization-definition`
- Range: Reference mass method definition in Section 3 and normalize_lot
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `pcr-normalization-definition`

##### Waste flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocate_subdivide` | all intended outputs | First subdivide separately measured species, cohorts, culture units and harvest/handling operations. Enumerate all intended food fish, sold seed/broodstock, other polyculture fish and integrated crop/animal outputs with actual purpose, hand-off and destination before attribution. Internal transfers cancel; no substitution credit is automatic. | `ghg-product-allocation-2011` |
| `allocate_common` | shared inputs and intended co-products | For residual joint burdens use a evidenced causal physical relationship: directly metered consumption, feed uptake/growth requirement or documented service use as appropriate. Wet mass alone is not assumed causal across trophic fish/crops. If causality cannot be supported, disclose economic allocation using contemporaneous gate prices and quantities, with a physical-basis sensitivity and rationale. | `ghg-product-allocation-2011` |
| `allocate_period_assets` | periods; farm_services | Attribute broodstock, pond/cage/RAS assets, replacements, shared power/water and cleaning/fallow events to all documented consumers and service periods using observed service lives and usage records. Connect partial harvests to one opening/closing-stock ledger. Fractions sum to one for each shared burden; remaining/retired stock and stranded burdens are disclosed without double annualization. | `ghg-product-allocation-2011` |
| `allocate_waste` | waste and rejects | Waste disposal burdens remain with the generating activity. A sold purposeful output is classified as a product with an attribution decision, never also waste; unsold/dead fish, sludge and packaging follow actual treatment records. Death/escape/weight-change bookkeeping does not become an accepted reference output. | `ghg-product-allocation-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stock_own_seed` | `own_seed` | founders, seed, internal biomass, mortality, escape and stock | cohort movement and weighing records | species/family; cohort; life stage; supplier/origin; count; sample count and individual wet masses; opening/closing wet stock; births/receipts; transfer id; harvest/removal; growth estimate; mortality/escape; date; scale calibration/tare; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Calibrated wet-biomass weighing with container tare removed and repeated representative individual sampling; reconcile species/cohort movement ledger and paired transfers. Normalize: Attributed actual wet biomass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg; count; kg/individual | Each receipt/transfer/harvest/mortality event; opening/closing each reporting period | Full breeding/nursery and grow-out cycle, all partial harvests and carried stock | Actual hatchery/nursery and culture unit; provider origin recorded | per 1 kg reference flow | Scale certificate, sampling distribution, paired transfer ids, stock residual and uncertainty |
| `cp_stock_growout` | `growout` | founders, seed, internal biomass, mortality, escape and stock | cohort movement and weighing records | species/family; cohort; life stage; supplier/origin; count; sample count and individual wet masses; opening/closing wet stock; births/receipts; transfer id; harvest/removal; growth estimate; mortality/escape; date; scale calibration/tare; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Calibrated wet-biomass weighing with container tare removed and repeated representative individual sampling; reconcile species/cohort movement ledger and paired transfers. Normalize: Attributed actual wet biomass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg; count; kg/individual | Each receipt/transfer/harvest/mortality event; opening/closing each reporting period | Full breeding/nursery and grow-out cycle, all partial harvests and carried stock | Actual hatchery/nursery and culture unit; provider origin recorded | per 1 kg reference flow | Scale certificate, sampling distribution, paired transfer ids, stock residual and uncertainty |
| `cp_stock_harvest` | `harvest` | founders, seed, internal biomass, mortality, escape and stock | cohort movement and weighing records | species/family; cohort; life stage; supplier/origin; count; sample count and individual wet masses; opening/closing wet stock; births/receipts; transfer id; harvest/removal; growth estimate; mortality/escape; date; scale calibration/tare; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Calibrated wet-biomass weighing with container tare removed and repeated representative individual sampling; reconcile species/cohort movement ledger and paired transfers. Normalize: Attributed actual wet biomass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg; count; kg/individual | Each receipt/transfer/harvest/mortality event; opening/closing each reporting period | Full breeding/nursery and grow-out cycle, all partial harvests and carried stock | Actual hatchery/nursery and culture unit; provider origin recorded | per 1 kg reference flow | Scale certificate, sampling distribution, paired transfer ids, stock residual and uncertainty |
| `cp_inputs_own_seed` | `own_seed` | feed, fertilizer/manure, treatments, ancillary physical consumables and upstream input burdens | purchase, issue and stock records | material/species; supplier; ingredient/formulation; moisture/dry matter; active ingredient or N/P composition; receipt/issue/return; opening/closing stock; application event; unit; cohort/unit; provider burden and pre-gate transport ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Reconcile invoices, calibrated scales and issued stock; retain supplier analyses and actual integrated-system attribution decision. Normalize: Attributed actual input mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg product; kg dry matter; kg N/P separately | Each receipt/issue/application event and stock closing | Full seed/grow-out cycle including fallow and cleaning intervals | Actual selected seed/culture/harvest/holding/dispatch units and traced suppliers | per 1 kg reference flow | Invoices, stock reconciliation, formulation/moisture analysis, event linkage and supplier evidence |
| `cp_inputs_growout` | `growout` | feed, fertilizer/manure, treatments, ancillary physical consumables and upstream input burdens | purchase, issue and stock records | material/species; supplier; ingredient/formulation; moisture/dry matter; active ingredient or N/P composition; receipt/issue/return; opening/closing stock; application event; unit; cohort/unit; provider burden and pre-gate transport ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Reconcile invoices, calibrated scales and issued stock; retain supplier analyses and actual integrated-system attribution decision. Normalize: Attributed actual input mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg product; kg dry matter; kg N/P separately | Each receipt/issue/application event and stock closing | Full seed/grow-out cycle including fallow and cleaning intervals | Actual selected seed/culture/harvest/holding/dispatch units and traced suppliers | per 1 kg reference flow | Invoices, stock reconciliation, formulation/moisture analysis, event linkage and supplier evidence |
| `cp_inputs_farm_services` | `farm_services` | feed, fertilizer/manure, treatments, ancillary physical consumables and upstream input burdens | purchase, issue and stock records | material/species; supplier; ingredient/formulation; moisture/dry matter; active ingredient or N/P composition; receipt/issue/return; opening/closing stock; application event; unit; cohort/unit; provider burden and pre-gate transport ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Reconcile invoices, calibrated scales and issued stock; retain supplier analyses and actual integrated-system attribution decision. Normalize: Attributed actual input mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg product; kg dry matter; kg N/P separately | Each receipt/issue/application event and stock closing | Full seed/grow-out cycle including fallow and cleaning intervals | Actual selected seed/culture/harvest/holding/dispatch units and traced suppliers | per 1 kg reference flow | Invoices, stock reconciliation, formulation/moisture analysis, event linkage and supplier evidence |
| `cp_inputs_harvest` | `harvest` | feed, fertilizer/manure, treatments, ancillary physical consumables and upstream input burdens | purchase, issue and stock records | material/species; supplier; ingredient/formulation; moisture/dry matter; active ingredient or N/P composition; receipt/issue/return; opening/closing stock; application event; unit; cohort/unit; provider burden and pre-gate transport ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Reconcile invoices, calibrated scales and issued stock; retain supplier analyses and actual integrated-system attribution decision. Normalize: Attributed actual input mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg product; kg dry matter; kg N/P separately | Each receipt/issue/application event and stock closing | Full seed/grow-out cycle including fallow and cleaning intervals | Actual selected seed/culture/harvest/holding/dispatch units and traced suppliers | per 1 kg reference flow | Invoices, stock reconciliation, formulation/moisture analysis, event linkage and supplier evidence |
| `cp_inputs_preservation` | `preservation` | feed, fertilizer/manure, treatments, ancillary physical consumables and upstream input burdens | purchase, issue and stock records | material/species; supplier; ingredient/formulation; moisture/dry matter; active ingredient or N/P composition; receipt/issue/return; opening/closing stock; application event; unit; cohort/unit; provider burden and pre-gate transport ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Reconcile invoices, calibrated scales and issued stock; retain supplier analyses and actual integrated-system attribution decision. Normalize: Attributed actual input mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg product; kg dry matter; kg N/P separately | Each receipt/issue/application event and stock closing | Full seed/grow-out cycle including fallow and cleaning intervals | Actual selected seed/culture/harvest/holding/dispatch units and traced suppliers | per 1 kg reference flow | Invoices, stock reconciliation, formulation/moisture analysis, event linkage and supplier evidence |
| `cp_inputs_dispatch` | `dispatch` | feed, fertilizer/manure, treatments, ancillary physical consumables and upstream input burdens | purchase, issue and stock records | material/species; supplier; ingredient/formulation; moisture/dry matter; active ingredient or N/P composition; receipt/issue/return; opening/closing stock; application event; unit; cohort/unit; provider burden and pre-gate transport ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Reconcile invoices, calibrated scales and issued stock; retain supplier analyses and actual integrated-system attribution decision. Normalize: Attributed actual input mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg product; kg dry matter; kg N/P separately | Each receipt/issue/application event and stock closing | Full seed/grow-out cycle including fallow and cleaning intervals | Actual selected seed/culture/harvest/holding/dispatch units and traced suppliers | per 1 kg reference flow | Invoices, stock reconciliation, formulation/moisture analysis, event linkage and supplier evidence |
| `cp_outputs_own_seed` | `own_seed` | intended joint outputs and allocation | output ledger and gate sales records | output species/product; purpose; hand-off gate; destination; quantity/unit; date; cohort/period; price/currency; causal consumption links; allocation method/fractions; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh each handed-off output, verify intended product destination and link measured service/feed use or gate-price evidence. Normalize: Attributed output quantities / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg and declared product unit; currency | Each output hand-off; update gate prices for each attribution period | Same full joint-production period as studied fish including other-species/crop harvests | Actual common foreground boundary and all output gates | per 1 kg reference flow | Sales, destination receipts, causal allocation rationale, fractions sum and sensitivity |
| `cp_outputs_growout` | `growout` | intended joint outputs and allocation | output ledger and gate sales records | output species/product; purpose; hand-off gate; destination; quantity/unit; date; cohort/period; price/currency; causal consumption links; allocation method/fractions; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh each handed-off output, verify intended product destination and link measured service/feed use or gate-price evidence. Normalize: Attributed output quantities / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg and declared product unit; currency | Each output hand-off; update gate prices for each attribution period | Same full joint-production period as studied fish including other-species/crop harvests | Actual common foreground boundary and all output gates | per 1 kg reference flow | Sales, destination receipts, causal allocation rationale, fractions sum and sensitivity |
| `cp_outputs_harvest` | `harvest` | intended joint outputs and allocation | output ledger and gate sales records | output species/product; purpose; hand-off gate; destination; quantity/unit; date; cohort/period; price/currency; causal consumption links; allocation method/fractions; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh each handed-off output, verify intended product destination and link measured service/feed use or gate-price evidence. Normalize: Attributed output quantities / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg and declared product unit; currency | Each output hand-off; update gate prices for each attribution period | Same full joint-production period as studied fish including other-species/crop harvests | Actual common foreground boundary and all output gates | per 1 kg reference flow | Sales, destination receipts, causal allocation rationale, fractions sum and sensitivity |
| `cp_water_growout` | `growout` | supplied water, abstraction, circulation and returns | meters and paired water ledger | source/provider; receiving medium; density/temperature; meter id; intake/supply/return/treatment volume or mass; recirculation; evaporation estimate; storage change; quality; unit/node; period; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use calibrated inlet/outlet/supply meters and actual density for volume-to-mass conversion; separately record circulation and receiving compartments. Normalize: Attributed actual water mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg; m3 with density conversion | Continuous/daily meter intervals; each fill/drain/treatment transfer | Full culture and fallow/cleaning cycle plus harvest/holding/loading water events | Actual water source and each consuming/discharging node | per 1 kg reference flow | Calibration, density evidence, quality test and ledger residual; source geography |
| `cp_water_farm_services` | `farm_services` | supplied water, abstraction, circulation and returns | meters and paired water ledger | source/provider; receiving medium; density/temperature; meter id; intake/supply/return/treatment volume or mass; recirculation; evaporation estimate; storage change; quality; unit/node; period; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use calibrated inlet/outlet/supply meters and actual density for volume-to-mass conversion; separately record circulation and receiving compartments. Normalize: Attributed actual water mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg; m3 with density conversion | Continuous/daily meter intervals; each fill/drain/treatment transfer | Full culture and fallow/cleaning cycle plus harvest/holding/loading water events | Actual water source and each consuming/discharging node | per 1 kg reference flow | Calibration, density evidence, quality test and ledger residual; source geography |
| `cp_energy` | farm_services | purchased electricity, useful heat, actual self-generation fuels and pre-gate transfer energy | utility meter, fuel stock and movement records | supplier/country; voltage/mix; node; meter interval; kWh; delivered useful heat MJ, carrier/temperature/pressure/provider; self-generated power separately; fuel grade/provider; density; kg/litre; opening/closing stock; equipment/vehicle; operating hours; trip/load; cohort/period; generation/import split |Reconcile calibrated submeters, bills, fuel purchase and tank balances; record actual vehicle/vessel transfers before gate and share keys. Normalize: Attributed actual kWh, delivered useful heat MJ or fuel kg / accepted gate net fish mass; per 1 kg reference flow | kWh; MJ delivered heat; MJ electricity; kg fuel; litre with density | Daily/continuous meter intervals and each fuel/transfer event | Full production/fallow period and actual pre-gate handling/transfer intervals | All actual consuming nodes, geography and supplier configurations | per 1 kg reference flow | Meter/bill agreement, fuel balance, provider specification and no duplicated generation |
| `cp_assets` | farm_services | shared infrastructure and retired components | asset service ledger | asset/component id; composition/mass; commissioning; observed life; service hours/volume; all consumers and periods; repair/replacement; retirement/handler; construction and end-of-life datasets; share key; uncertainty |Use material invoices/weighing and observed asset logs, list every consumer and period, check one shared-burden owner and direct assignment for exclusive assets. Normalize: Attributed material or waste mass / accepted gate net fish mass; per 1 kg reference flow | kg material; service hour or volume share | Commissioning, each maintenance/replacement/retirement; annual service review | Observed service life spanning relevant seed/grow-out/harvest/holding periods | Actual facility assets and all identified consumer nodes | per 1 kg reference flow | Material register, service logs, retirement receipts, fractions and end-of-life evidence |
| `cp_waste_own_seed` | `own_seed` | sludge, rejects and effluent treatment | waste weighing and handler records | material/species; wet mass; solids/moisture; removal/event; source node/period; handler gate/destination; treatment technology; effluent quality; reusable/sold/waste decision; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh solids/mortalities and meter effluent; collect consignment/handler receipts and check consistency with stock/water/emission ledgers. Normalize: Attributed actual waste mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg wet material; kg solids; kg effluent | Every removal/treatment transfer plus representative quality sampling | Full production period, cleaning/fallow and harvest events | Actual producing node and receiving handler | per 1 kg reference flow | Waste receipts, scale/meter calibration, moisture analysis and treatment evidence |
| `cp_waste_growout` | `growout` | sludge, rejects and effluent treatment | waste weighing and handler records | material/species; wet mass; solids/moisture; removal/event; source node/period; handler gate/destination; treatment technology; effluent quality; reusable/sold/waste decision; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh solids/mortalities and meter effluent; collect consignment/handler receipts and check consistency with stock/water/emission ledgers. Normalize: Attributed actual waste mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg wet material; kg solids; kg effluent | Every removal/treatment transfer plus representative quality sampling | Full production period, cleaning/fallow and harvest events | Actual producing node and receiving handler | per 1 kg reference flow | Waste receipts, scale/meter calibration, moisture analysis and treatment evidence |
| `cp_waste_farm_services` | `farm_services` | sludge, rejects and effluent treatment | waste weighing and handler records | material/species; wet mass; solids/moisture; removal/event; source node/period; handler gate/destination; treatment technology; effluent quality; reusable/sold/waste decision; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh solids/mortalities and meter effluent; collect consignment/handler receipts and check consistency with stock/water/emission ledgers. Normalize: Attributed actual waste mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg wet material; kg solids; kg effluent | Every removal/treatment transfer plus representative quality sampling | Full production period, cleaning/fallow and harvest events | Actual producing node and receiving handler | per 1 kg reference flow | Waste receipts, scale/meter calibration, moisture analysis and treatment evidence |
| `cp_waste_harvest` | `harvest` | sludge, rejects and effluent treatment | waste weighing and handler records | material/species; wet mass; solids/moisture; removal/event; source node/period; handler gate/destination; treatment technology; effluent quality; reusable/sold/waste decision; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh solids/mortalities and meter effluent; collect consignment/handler receipts and check consistency with stock/water/emission ledgers. Normalize: Attributed actual waste mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg wet material; kg solids; kg effluent | Every removal/treatment transfer plus representative quality sampling | Full production period, cleaning/fallow and harvest events | Actual producing node and receiving handler | per 1 kg reference flow | Waste receipts, scale/meter calibration, moisture analysis and treatment evidence |
| `cp_waste_preservation` | `preservation` | sludge, rejects and effluent treatment | waste weighing and handler records | material/species; wet mass; solids/moisture; removal/event; source node/period; handler gate/destination; treatment technology; effluent quality; reusable/sold/waste decision; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh solids/mortalities and meter effluent; collect consignment/handler receipts and check consistency with stock/water/emission ledgers. Normalize: Attributed actual waste mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg wet material; kg solids; kg effluent | Every removal/treatment transfer plus representative quality sampling | Full production period, cleaning/fallow and harvest events | Actual producing node and receiving handler | per 1 kg reference flow | Waste receipts, scale/meter calibration, moisture analysis and treatment evidence |
| `cp_waste_dispatch` | `dispatch` | sludge, rejects and effluent treatment | waste weighing and handler records | material/species; wet mass; solids/moisture; removal/event; source node/period; handler gate/destination; treatment technology; effluent quality; reusable/sold/waste decision; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Weigh solids/mortalities and meter effluent; collect consignment/handler receipts and check consistency with stock/water/emission ledgers. Normalize: Attributed actual waste mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg wet material; kg solids; kg effluent | Every removal/treatment transfer plus representative quality sampling | Full production period, cleaning/fallow and harvest events | Actual producing node and receiving handler | per 1 kg reference flow | Waste receipts, scale/meter calibration, moisture analysis and treatment evidence |
| `cp_emissions_own_seed` | `own_seed` | substance-specific direct releases | monitoring or reviewed model inputs | substance/species; air/water/soil compartment; concentration; discharge mass/volume; nutrient element basis; fuel carbon/oxidation/fossil share; feed/stock/sludge chemistry; leak inventory; model/factor source; time/node; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use paired intake/outlet samples and flow, direct monitoring or reviewed explicit source-specific models; reconcile wastewater treatment and fuel inputs, retaining factor provenance and unknown coverage. Normalize: Attributed actual substance mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg named substance; concentration and flow raw units | Representative flow-weighted sampling each reporting interval; each fuel/leak event | Full production/cleaning/fallow cycle with monitored seasonal variability | Actual emission node and specified receiving compartment | per 1 kg reference flow | Lab results, model/factor audit, detection limits, uncertainty and no duplicated emissions |
| `cp_emissions_growout` | `growout` | substance-specific direct releases | monitoring or reviewed model inputs | substance/species; air/water/soil compartment; concentration; discharge mass/volume; nutrient element basis; fuel carbon/oxidation/fossil share; feed/stock/sludge chemistry; leak inventory; model/factor source; time/node; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use paired intake/outlet samples and flow, direct monitoring or reviewed explicit source-specific models; reconcile wastewater treatment and fuel inputs, retaining factor provenance and unknown coverage. Normalize: Attributed actual substance mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg named substance; concentration and flow raw units | Representative flow-weighted sampling each reporting interval; each fuel/leak event | Full production/cleaning/fallow cycle with monitored seasonal variability | Actual emission node and specified receiving compartment | per 1 kg reference flow | Lab results, model/factor audit, detection limits, uncertainty and no duplicated emissions |
| `cp_emissions_farm_services` | `farm_services` | substance-specific direct releases | monitoring or reviewed model inputs | substance/species; air/water/soil compartment; concentration; discharge mass/volume; nutrient element basis; fuel carbon/oxidation/fossil share; feed/stock/sludge chemistry; leak inventory; model/factor source; time/node; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use paired intake/outlet samples and flow, direct monitoring or reviewed explicit source-specific models; reconcile wastewater treatment and fuel inputs, retaining factor provenance and unknown coverage. Normalize: Attributed actual substance mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg named substance; concentration and flow raw units | Representative flow-weighted sampling each reporting interval; each fuel/leak event | Full production/cleaning/fallow cycle with monitored seasonal variability | Actual emission node and specified receiving compartment | per 1 kg reference flow | Lab results, model/factor audit, detection limits, uncertainty and no duplicated emissions |
| `cp_emissions_harvest` | `harvest` | substance-specific direct releases | monitoring or reviewed model inputs | substance/species; air/water/soil compartment; concentration; discharge mass/volume; nutrient element basis; fuel carbon/oxidation/fossil share; feed/stock/sludge chemistry; leak inventory; model/factor source; time/node; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use paired intake/outlet samples and flow, direct monitoring or reviewed explicit source-specific models; reconcile wastewater treatment and fuel inputs, retaining factor provenance and unknown coverage. Normalize: Attributed actual substance mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg named substance; concentration and flow raw units | Representative flow-weighted sampling each reporting interval; each fuel/leak event | Full production/cleaning/fallow cycle with monitored seasonal variability | Actual emission node and specified receiving compartment | per 1 kg reference flow | Lab results, model/factor audit, detection limits, uncertainty and no duplicated emissions |
| `cp_emissions_preservation` | `preservation` | substance-specific direct releases | monitoring or reviewed model inputs | substance/species; air/water/soil compartment; concentration; discharge mass/volume; nutrient element basis; fuel carbon/oxidation/fossil share; feed/stock/sludge chemistry; leak inventory; model/factor source; time/node; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use paired intake/outlet samples and flow, direct monitoring or reviewed explicit source-specific models; reconcile wastewater treatment and fuel inputs, retaining factor provenance and unknown coverage. Normalize: Attributed actual substance mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg named substance; concentration and flow raw units | Representative flow-weighted sampling each reporting interval; each fuel/leak event | Full production/cleaning/fallow cycle with monitored seasonal variability | Actual emission node and specified receiving compartment | per 1 kg reference flow | Lab results, model/factor audit, detection limits, uncertainty and no duplicated emissions |
| `cp_emissions_dispatch` | `dispatch` | substance-specific direct releases | monitoring or reviewed model inputs | substance/species; air/water/soil compartment; concentration; discharge mass/volume; nutrient element basis; fuel carbon/oxidation/fossil share; feed/stock/sludge chemistry; leak inventory; model/factor source; time/node; uncertainty ; unique original shared-ledger ID; this node actual share; all-beneficiary reconciliation | Use paired intake/outlet samples and flow, direct monitoring or reviewed explicit source-specific models; reconcile wastewater treatment and fuel inputs, retaining factor provenance and unknown coverage. Normalize: Attributed actual substance mass / accepted gate net fish mass; per 1 kg reference flow ; use the same original shared ledger and independently reconcile this node share, never copy another node total or charge the same burden twice. | kg named substance; concentration and flow raw units | Representative flow-weighted sampling each reporting interval; each fuel/leak event | Full production/cleaning/fallow cycle with monitored seasonal variability | Actual emission node and specified receiving compartment | per 1 kg reference flow | Lab results, model/factor audit, detection limits, uncertainty and no duplicated emissions |
| `cp_handling` | preservation | holding, chilling, oxygen, ice and losses | handling event and mass records | lot; actual incoming/outgoing state; timestamps; wet fish mass/tare; live survival or temperature; supplied ice; oxygen purity/pressure/cylinder mass; drainage; death/reject; destination; node water/power link |Record actual pre-gate operation, calibrated fish/ice/cylinder weighing and state observations; connect water/energy ledgers and document bypass when absent. Normalize: Attributed actual resource/loss mass / accepted gate net fish mass; per 1 kg reference flow | kg fish/ice/oxygen; actual temperature; hour | Each holding/chilling lot; state observations over actual interval | Harvest-to-first-handover interval only | Actual producer-controlled handling node | per 1 kg reference flow | Event/timestamp log, calibration, state/survival record and linked loss destination |
| `cp_packaging` | dispatch | packaging and reuse | material and return/reuse ledger | material/component id; wet/dry mass; lot; single/reusable status; reuse count/service period; returns/loss; cleaning water/power/agent links; end-of-use/handler; accepted fish tare |Weigh disposable material and inventory reusable components with observed cycles, returns and cleaning; verify container tare separately from fish biomass. Normalize: Attributed material mass / accepted gate net fish mass; per 1 kg reference flow | kg material; reuse count | Each loading/return/loss and cleaning event | Same gate lots and actual reusable service period | Actual farm loading and returning container boundary | per 1 kg reference flow | Material invoices, component/reuse register, cleaning records and tare evidence |
| `cp_gate` | dispatch | accepted reference lot and gate rejects | calibrated acceptance weighing and handover record | species/family; food use; aquaculture/freshwater origin; whole/head/gut state; actual live/fresh/chilled state; lot/cohort; gate; date; calibrated wet mass; container/water/ice tare; drainage; accepted/rejected mass; destination |Weigh accepted whole fish on a calibrated scale, removing container/water/ice tare; repeat representative sampling and reconcile transfer/acceptance records and rejects. Normalize: Actual accepted lot net mass supports normalization; per 1 kg reference flow | kg net fish; count when sampled | Each first producer handover lot; repeated representative weighing | Full declared production period with lot-specific gate event | Actual first producer farm harvest/dispatch gate | per 1 kg reference flow | Scale certificate, tare and drainage method, repeated sampling, acceptance signatures and destination |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | Divide each actual attributed quantity once by accepted whole-fish net wet mass from the same production boundary, yielding per 1 kg reference flow; the reference product is defined as 1 kg. Internal transfers retain actual amounts and cancel on aggregation; already normalized values are not divided again. | actual amount; allocation fraction; cp_gate | row quantity on same reference basis |  |
| `stock_reconcile` | own_seed; growout; harvest | Reconcile opening stock plus receipts/births and estimated biological growth against transfers/harvest, mortality/escape and closing stock by cohort, retaining residual and uncertainty. Count uses same-stage representative wet mass and actual samples; seed mass conservation does not constrain growth. | cp_stock_own_seed; cp_stock_growout; cp_stock_harvest | cohort transfer quantities and stock residuals |  |
| `resource_reconcile` | farm_services | Reconcile supplied/abstracted/returned/treated/circulated water and storage by meter interval using actual density. Electricity kWh times 3.6 yields MJ; reconcile fuel stock/consumption independently. Attribute utilities by recorded node/period shares summing to one. | cp_water_growout; cp_water_farm_services; cp_energy | water/energy ledgers and node attribution |  |
| `direct_emission_model` | aqueous_nutrient_releases; fossil_co2_air; other_direct_releases | Use measured net concentration and discharge or explicit source-specific balance/factor models for each substance, reconciling feed nutrients, fish retention, removed sludge and actual receiving medium. Fossil CO2 needs actual fuel and independently evidenced carbon/oxidation factors; missing factors are disclosed, never inferred from a UUID. | cp_emissions_own_seed; cp_emissions_growout; cp_emissions_farm_services; cp_emissions_harvest; cp_emissions_preservation; cp_emissions_dispatch; cp_inputs_own_seed; cp_inputs_growout; cp_inputs_farm_services; cp_inputs_harvest; cp_inputs_preservation; cp_inputs_dispatch; cp_stock_own_seed; cp_stock_growout; cp_stock_harvest; cp_energy | substance releases and uncertainty | `ufifas-ras-fa099` |
| `joint_service_attribution` | co-outputs; shared assets; periods | Apply Section 7 subdivision, evidenced physical causality then disclosed economic fallback; attribute asset material/end-of-life burden over observed service periods and actual use to all nodes/periods, checking fraction sums and sensitivity. | cp_outputs_own_seed; cp_outputs_growout; cp_outputs_harvest; cp_assets; cp_energy; cp_water_growout; cp_water_farm_services | single output/period service-attribution ledger | `ghg-product-allocation-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all lots/exchanges | Trace actual species/family, state, gate, route and purpose; final exchanges independently verify flow/support property/unit, conceptual cards are not verified exchanges. | Lot origin, supplier and identity confirmation records |
| `quality_measurement` | all quantities | Record scale/meter calibration, tare/density, wet/dry/nutrient basis, frequency and uncertainty; provisional ranges do not replace collection. | Calibration certificates, lab results and raw records |
| `quality_coverage` | whole foreground system | Cover complete cycle, fallow/cleaning, partial harvest and carried stocks; disclose omissions, estimates, asset services and supplier geography/year mismatches. | Node/period coverage matrix, stock and asset ledgers |
| `quality_attribution` | co-products; shared services | Intended-output destinations, physical causal/economic fallback rationale, all node/period shares, sensitivity and duplicate checks must be auditable. | Output sales/service evidence and fraction ledger |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_seed_founders` | `own_seed`; inputs; product | Identify and separately collect every actual exchange covered by “Broodstock, eggs or early fry entering on-site seed production”; retain all following collection, quantity and normalization obligations: Include only actual external founders for the on-site hatchery/nursery batch, with species, life stage, provider gate and documented use; continuing broodstock is attributed over its observed service period. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured external founder wet biomass from receipts and stock records; reconcile count with batch-specific mean wet mass using cp_stock_own_seed. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_stock_own_seed` Sources: `fao-carp-2009` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_nursery_feed` | `own_seed`; inputs; product | Identify and separately collect every actual exchange covered by “Actual nursery feed materials”; retain all following collection, quantity and normalization obligations: Record each supplied starter feed, live feed or supplementary feed separately by ingredient/product specification and moisture basis at hatchery receipt; do not convert natural pond productivity into purchased feed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured feed issued to the nursery batch, adjusted for inventory and attributable to the accepted fish lot. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_inputs_own_seed` Sources: `fao-carp-2009` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_seed_treatment` | `own_seed`; inputs; product | Identify and separately collect every actual exchange covered by “Actual hatchery treatment products”; retain all following collection, quantity and normalization obligations: Include actual disinfection, spawning or water-conditioning products only when used; collect formulation, active ingredient, supplier and treatment event. This PCR prescribes no chemical or dose. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured formulated-product mass issued to linked seed events; report active ingredient separately without replacing product mass. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_inputs_own_seed` Sources: `fao-carp-2009` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_seed_cooutputs` | `own_seed`; outputs; product | Identify and separately collect every actual exchange covered by “Intended seed-production co-outputs”; retain all following collection, quantity and normalization obligations: Only actual sold juveniles or retired broodstock with independently evidenced intended use and buyer gate are co-products; identify each output, quantity and revenue separately from retained broodstock and deaths. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured intended co-output biomass at its separate hand-off with allocation decision. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_outputs_own_seed` Sources: `fao-carp-2009` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_feed` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Actual purchased grow-out feed materials”; retain all following collection, quantity and normalization obligations: Separate formulated pellets, cereals and other actual supplemental feed at farm receipt by supplier, composition and wet/dry basis. Natural pond food is recorded as biological context, not a purchased product exchange. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured feed issued minus recorded returns and stock change; retain uneaten-feed accounting and calculate observed feed/growth indicator separately. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_inputs_growout` Sources: `fao-carp-2009` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_pond_fertilizer_manure` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Actual pond fertilizer or integrated manure inputs”; retain all following collection, quantity and normalization obligations: Conditional on evidenced pond-productivity management or integration. Each actual manure or fertilizer requires origin, upstream burden, wet/dry mass and nutrient composition; integrated manure is not automatically burden-free. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured product wet/dry mass applied by pond and event; keep product mass separate from kg N and kg P. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_inputs_growout` Sources: `fao-carp-2009` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_growout_treatments` | `growout`; inputs; product | Identify and separately collect every actual exchange covered by “Actual veterinary and water-conditioning products”; retain all following collection, quantity and normalization obligations: Specify each actual formulation, active ingredient, application node and supplier; quarantine, cleaning and disinfection events stay linked to culture units and periods. No universal regimen is imposed. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured formulated-product mass consumed for assigned grow-out units and cleaning events. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_inputs_growout` Sources: `fao-carp-2009` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_polyculture_outputs` | `growout`; outputs; product | Identify and separately collect every actual exchange covered by “Intended polyculture or integrated co-products”; retain all following collection, quantity and normalization obligations: Enumerate each separately intended fish species, crop or animal output at its actual hand-off when the shared foreground system produces it; do not assume integrated outputs exist at every farm. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured quantity of every intended co-product and period, with shared input links and causal or disclosed fallback allocation. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_outputs_growout` Sources: `fao-carp-2009` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_actual_fuels` | `farm_services`; inputs; product | Identify and separately collect every actual exchange covered by “Actual specified farm and pre-gate transfer fuels”; retain all following collection, quantity and normalization obligations: Resolve each fuel product by grade, provider gate and actual pump/generator/vehicle/vessel use; purchased fuel is a product input, not a combustion emission. An inland fishing-vessel diesel identity is not a farm fuel identity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured kg actual fuel consumed after opening/closing inventory reconciliation; litres require evidenced density. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_energy` Sources: `ufifas-ras-fa099` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_shared_asset_materials` | `farm_services`; inputs; product | Identify and separately collect every actual exchange covered by “Attributed pond, pump, cage and RAS infrastructure materials”; retain all following collection, quantity and normalization obligations: Record each actual construction, aerator, tank, pipe, net, filter/media or handling asset component separately with composition, maintenance, service period, consuming nodes and end-of-life; only attributable material equivalents enter this card. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured material stock plus replacements multiplied by documented service/use shares across nodes and periods; retain asset ledger and demolition/waste burden. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_assets` Sources: `ghg-product-allocation-2011` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_supplied_water` | `farm_services`; inputs; product | Identify and separately collect every actual exchange covered by “Other actually supplied water at farm receipt”; retain all following collection, quantity and normalization obligations: For actual purchased municipal potable, provider freshwater or other water not matching treated industrial process-quality water, declare supplier gate, quality/suitability and treatment burden. It is distinct from own abstraction and recirculation, with each supply counted once. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured mass of actual other supplied water by supplier and consuming node; use evidenced density for volumetric receipts. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_farm_services` Sources: `ufifas-ras-fa099` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_ancillary_physical_consumables` | `farm_services`; inputs; product | Identify and separately collect every actual exchange covered by “Actual harvest, killing, handling and cleaning physical consumables”; retain all following collection, quantity and normalization obligations: Enumerate each actually used physical consumable with material/formulation, supplier, use event and consumer: harvest nets/replaceable gear, humane whole-fish killing/handling goods, detergents or disinfectants for units/containers. Exclusive use is directly assigned; goods already counted in treatment, packaging or asset cards are not repeated. Outsourced operations use compatible provider inventories, not kg of generic services. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured actual physical-product mass issued minus returns, linked to selected node and period; count observations require component-specific measured mass. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_inputs_farm_services` Sources: `fao-freshwater-marketing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_freshwater_withdrawal` | `farm_services`; inputs; elementary | Identify and separately collect every actual exchange covered by “Actual freshwater abstracted from the environment”; retain all following collection, quantity and normalization obligations: Each groundwater, river, reservoir or other evidenced freshwater resource is separate with source compartment and location. Intake is not net consumption or circulation; supplied water cannot also be counted as own abstraction. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Metered fresh intake mass; volume-to-mass conversion uses actual density and condition, while recirculation remains a separate physical ledger. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_water_farm_services` Sources: `ufifas-ras-fa099` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_spent_asset_waste` | `farm_services`; outputs; waste | Identify and separately collect every actual exchange covered by “Spent filters, nets and other facility material waste”; retain all following collection, quantity and normalization obligations: Record each removed component and actual handler after allocated service use; reusable stock is not waste and shared retirement burden is counted only once. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured removed component mass attributable through the asset ledger. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_assets` Sources: `fao-carp-2009` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_aqueous_nutrient_releases` | `farm_services`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual nutrient substances released to freshwater”; retain all following collection, quantity and normalization obligations: Resolve each reported dissolved or particulate N/P species and actual receiving water compartment from monitoring or a reviewed nutrient model across actual nursery, grow-out, harvest and holding discharges. Keep source node/unit/period and kg element versus kg substance explicit; record once in this central release ledger, never assign a broad pollutant UUID from a total label. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured/modelled substance masses from paired intake/outlet concentration and discharge records, or transparent feed/stock/sludge balance with uncertainty. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_farm_services` Sources: `ufifas-ras-fa099` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_other_direct_releases` | `farm_services`; outputs; elementary | Identify and separately collect every actual exchange covered by “Other actual noncombustion and combustion releases”; retain all following collection, quantity and normalization obligations: If measured/modelled, resolve pollutant substance, receiving air/water/soil compartment, fossil/biogenic status and particle size where applicable. Pond methane, refrigerant leaks, chemical residues and engine pollutants are not assumed zero or universal exchanges. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Actual per-substance emission masses from facility monitoring or reviewed source-specific models; document coverage and unknowns. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_emissions_farm_services` Sources: `ufifas-ras-fa099` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_harvest_cooutputs` | `harvest`; outputs; product | Identify and separately collect every actual exchange covered by “Intended other harvest outputs”; retain all following collection, quantity and normalization obligations: Each intentionally sold other fish species or off-spec whole fish has its own actual destination and gate; avoid counting the same polyculture output at both grow-out and harvest hand-offs. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured separately handed-off co-output mass, linked to a single allocation output ledger. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_outputs_harvest` Sources: `fao-carp-2009` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_packaging_materials` | `dispatch`; inputs; product | Identify and separately collect every actual exchange covered by “Actual protective packaging and reusable containers”; retain all following collection, quantity and normalization obligations: Enumerate bags, boxes, liners, labels and live tanks as actual material roles at farm loading; use return/reuse/loss and cleaning evidence to attribute stock components. Carrier water and ice are excluded from fish mass. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured disposable material and allocated reusable component mass from packaging ledger. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_packaging` Sources: `fao-freshwater-marketing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_dispatch_rejects` | `dispatch`; outputs; waste | Identify and separately collect every actual exchange covered by “Producer-gate fish and packaging rejects”; retain all following collection, quantity and normalization obligations: Separate rejected whole-fish material from discarded packaging by actual handler and identity; reusable returns are inventory movements. Do not count rejects within accepted reference biomass. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Binding: Amount rule: Measured rejected fish and package masses by material and documented destination. Value mode: Foreground record (`foreground_record`) Specificity: Site-specific (`site_specific`) Normalization basis: per 1 kg reference flow Basis kind: Reference flow (`reference_flow`) Evidence kind: Collected record (`collected_record`) Collection protocol: `cp_gate` Sources: `fao-freshwater-marketing` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_culture_sludge` | `farm_services`; outputs; waste | Identify and independently collect every actual sediment, solid-residue and sludge waste stream; retain source stage/unit/period, removal event, wet mass, dry solids, nutrient analysis and evidenced recipient without double owning the same material. Collect under `cp_waste_farm_services` and normalize to final accepted net fish mass. Establish independent Range evidence and exact UUID for each child; no grouped total, bound or binding is inherited. Any unresolved actual stream, fate, quantity, range evidence or UUID makes the final dataset incomplete and fails validation; unknown is not zero. | per-waste-stream measurements, wet/dry basis, recipient receipts and range/identity verification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference lot | Verify aquaculture origin, non-Salmonidae species family, human-food purpose, freshwater culture context, whole unheaded/ungutted form, actual live/fresh/chilled state and first producer farmgate; incomplete qualifiers prevent finalization. Do not use a reference name to cover a live-only or landing-site fixed UUID. | `un-cpc3-2025` |
| `validate_route` | own_seed; growout | Require current producer cohort and unit-stage evidence for seed origin and technology flags, required parent growout, explicit own/purchased mutual exclusion, documented hybrids/transfers and resources/deltas. A route label or historical FAO numerical value does not establish actual farm topology or performance. | `fao-carp-2009`; `ufifas-ras-fa099` |
| `validate_mass` | all fish and input records | Check calibrated/tared accepted net fish mass and count-to-wet-mass sampling; match each internal transfer once, distinguish biological growth from opening stock, receipt, harvest, mortality, escape and closing stock. Retain explicit uncertainty/residuals; do not force juveniles or harvest input to 1 kg. |  |
| `validate_utilities` | farm_services; growout | Reconcile water, energy and provider ledgers; CN low-voltage identity is conditional, other supply stays distinct. Confirm numerator property/unit, supplied versus abstracted water, species/element nutrient basis and receiving medium; prevent supplier/direct emission and effluent/substance duplication. | `ufifas-ras-fa099` |
| `validate_modes_outputs` | all processes and allocation | Audit batch/continuous interval links, cleaning/changeovers/fallow burdens, intended-output completeness and hand-offs, period and shared-consumer fractions, and single assignment of each harvested lot. Actual no-use/bypass evidence is required for zero conditional resources; missing observation is not zero. | `ghg-product-allocation-2011` |
| `validate_quality` | all exchanges | Every concrete final exchange needs a verified matching flow identity and support property/unit; unresolved cards require later actual-exchange verification. Each provisional Range is a replaceable QA screen, not an allowed limit, default inventory value or medication/performance target. Values outside it trigger explanation and evidence review rather than forced clipping. |  |
| `validate_handling` | harvest; preservation; dispatch | Select actual pre-gate holding/chilling from timestamp, state and operation evidence; verify survival/temperature observations and segregated rejects, drainage, ice and package tare. Exclude independent post-gate distribution, freezing and head/gut-removal processing. | `fao-freshwater-marketing` |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Complete aquaculture food whole-fish supply datasets matching actual species/route/state/geography/year and first farmgate; compatible input to downstream LCA process/lifecycle models |
| excluded_use | Wild or Salmonidae, ornamental or final seed/feed, frozen/fillet/head/gut-removed products, independent post-gate logistics/processing, or treating unverified identities as final exchanges |
| required_metadata | PCR/version reference, species/family/purpose, cohort/seed route/technology topology, gate/actual state, geography/year/full cycle, net mass/tare/drainage, supplier links, co-output allocation and asset-service ledger |
| required_quality_disclosure | Measurement/sampling coverage and uncertainty, mortality/escape/stock residuals, energy/water/emission model factors, supplier match/omissions, provisional ranges/shared-allocation sensitivity and actual exchange identity-verification coverage |
| update_trigger | Material change in species/seed source, technology/water/energy supply, state/gate/form, feed/management, asset life, co-output price/allocation, emission model or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | [UNSD CPC 3.0 explanatory notes, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf); pp. 41–42; retrieved 2026-10-09 | Classification semantics and adjacent exclusions; no farm-performance quantities |
| `fao-carp-2009` | official_guidance | [FAO, Cyprinus carpio, Cultured aquatic species fact sheets, 2009, Peteri](https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_commoncarp.htm); retrieved 2026-10-09 | Qualitative examples of seed/grow-out, natural-food/supplementary-input, polyculture/integration and distinct harvest topology; no historical numerical defaults |
| `ufifas-ras-fa099` | extension_guidance | [UF/IFAS, Fish Health Management Considerations in Recirculating Aquaculture Systems, Part 1, FA099/Cir120](https://ask.ifas.ufl.edu/publication/FA099); retrieved 2026-10-09 | Qualitative RAS/flow-through/pond deltas and actual water-source/filter/solids records; no numerical thresholds as defaults |
| `fao-freshwater-marketing` | extension_guidance | [FAO, Management for freshwater fish culture, Chapter 16: Marketing](https://www.fao.org/fishery/static/FAO_Training/FAO_Training/General/x6709e/x6709e16.htm); retrieved 2026-10-09 | Qualitative actual post-harvest live handling, ice chilling and protective packaging obligations; post-gate transport, head/gut processing and historical ratios excluded |
| `ghg-product-allocation-2011` | standard | [WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, Chapter 9](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf); retrieved 2026-10-09 | Subdivision, causal physical and disclosed economic-fallback allocation rationale; no claim of compliance with the entire GHG standard |
| `pcr-normalization-definition` | method_factor | Internal method definition in this PCR Section 3, reference_net_mass and normalize_lot; not an external source | Defines reporting output as 1 kg and exact 1–1 kg reference Range; no empirical quantity or external factor claim |
