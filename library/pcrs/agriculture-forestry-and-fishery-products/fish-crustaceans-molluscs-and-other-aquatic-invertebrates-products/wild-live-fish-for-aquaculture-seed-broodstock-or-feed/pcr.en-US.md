---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-live-fish-for-aquaculture-seed-broodstock-or-feed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild live fish for aquaculture seed, broodstock or feed

## 1. Scope and Applicability

This PCR covers wild-caught living fish handed over by the first collector for one documented aquaculture purpose: seed, broodstock or live-fish feed. It applies across freshwater, brackish and marine capture areas with actual species and habitat disclosed. Hatched larvae, fry, juveniles and living adults can qualify; no minimum market size is prescribed. CPC is a mapping context, while purpose, wild origin and the handover boundary define this methodology [un-cpc-2025].

Capture, loss separation, bounded viability maintenance and live presentation are distinct responsibilities. Collection from nature does not include the recipient's stocking, reproduction or growout. Temporary recovery does not by itself establish farmed origin. If feeding, managed growth or reproduction actually produces aquaculture fish before the gate, document that boundary and select a farmed methodology rather than retaining this wild reference. This PCR adopts a strict complete cohort ledger as an internal accounting requirement [wild-live-method-2026].

Exclude ornamental fish, fish directly destined for human consumption, research-only fish, recreational bait, dead feed fish, fishmeal/oil, eggs or gametes as final products, and non-fish seeds or live-food organisms. Unhatched eggs cannot be represented by the final living-fish reference. Different species, life stages and purposes are not functionally interchangeable merely because their mass is equal.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-live-fish-for-aquaculture-seed-broodstock-or-feed |
| classification_refs | CPC 3.0 04191; narrower relation |
| covered_products | Wild live fish actually destined for aquaculture seed, broodstock or live-fish feed, with one declared purpose and cohort |
| excluded_products | Ornamental, direct human-consumption, research-only/recreational bait, farm-produced fish, dead/processed feed, unhatched eggs/gametes and non-fish organisms |
| representative_product | A traceable viable wild-caught juvenile seed cohort at first collector handover; not a universal species or size |
| production_route | Wild capture and separation → actual bounded live holding if used → actual collector-controlled pre-gate transfer if used → live presentation/loading and first collector handover |
| market_state | Viable live fish, with count and measured net wet biomass, declared purpose and life stage |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Qualified wild live fish for one declared aquaculture purpose at first collector handover |
| How much | 1 kg net viable-live wet fish biomass, excluding water, gas, cooling material, containers and nonqualifying fish |
| How well | Species and origin verified; seed stage and recipient suitability, broodstock maturity/fitness, or live-fish-feed suitability documented for the selected purpose; actual viability and health records, without a universal survival promise |
| How long or cycle | Declared capture trip/season, holding and transfer entry/exit times, dispatch cohort and reporting periods; trace opening/closing stock and asset service periods across years where applicable |
| reference_flow_link | `handover_live_fish_gate` |

### Reference Flow Object

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wild live fish for declared aquaculture purpose at first collector handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; wild capture origin and waterbody/salinity; capture date/trip/gear; declared seed/broodstock/live-fish-feed purpose; life stage; count and representative weighing method; viable net wet mass; observed mortality and fitness/health; selected holding/transfer stages and duration; cohort/source pooling fractions; collector gate, timestamp and recipient acceptance; reporting period |

The 1 kg denominator is an internally defined normalization, not an externally observed yield or a guarantee of recipient survival. Preserve counts and purpose-specific quality alongside mass [wild-live-method-2026].

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_gate_mass to weigh accepted live fish on calibrated equipment with a documented draining/tare procedure that preserves viability; subtract water, gas, packaging and rejected fish. Record measurement timing, counts and sampling uncertainty. |
| `count_mass` | all fish transfers | Mass | kg | Use representative actual cohort weighing and counts; retain individual/sample mass, sample design, variability and count uncertainty. Never apply universal fish-per-kg, egg-count-to-fish-mass or water-volume-to-fish-mass factors [wild-live-method-2026]. |
| `energy_units` | electricity and thermal energy | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter kWh, convert to MJ with 3.6 MJ/kWh only when compatible with the verified energy group; retain heat/cold and electricity separately. Fuel remains actual material mass plus documented calorific value [wild-live-method-2026]. |
| `substance_basis` | water, chemicals and direct releases | Mass | kg | Convert water volume with actual density; keep salinity and source. Record formulated-product and active-substance mass separately. Direct waterborne emissions require concentration, flow, duration, background, elemental/species basis, units and laboratory QA; never relabel N as nitrate or total phosphorus as phosphate without a justified conversion [wild-live-method-2026]. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Living fish in a named wild habitat immediately before the selected capture activity; no owned hatchery or managed production is assumed |
| starting_condition_role | Natural capture context; record actual removals, habitat/gear interactions and capture effort |
| product_classification_scope | Wild live fish for declared aquaculture seed, broodstock or live-fish feed; narrower than all other nonfood wild live fish |
| recursive_input_rule | For a purchased same-category cohort, retain verified wild-origin and upstream capture/holding burdens through its documented supplier gate; link the upstream dataset once and exclude duplicate upstream operations from owned foreground |
| upstream_dataset_requirement | Supplier materials, electricity, fuels, physical assets and purchased fish require compatible stage/gate datasets with geography, technology, time and allocation disclosure; absent upstream evidence is an explicit gap rather than zero burden |
| disclosure | Declare ownership/gate, actual sequence and omission conditions, capture habitat, trip/cohort pooling, opening/closing stocks, mortality/fates, outsourced activities, shared vessel/tank/oxygen/refrigeration/vehicle consumers and service periods |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_capture` | capture | Capture removes fish from nature and ends at separated viable catch. Record intended catch, retained incidental products, intentional release, dead catch and lost gear independently from subsequent live holding. | fao-cba-2011; wild-live-method-2026 |
| `b_holding` | holding | Include actual bounded recovery/acclimation/health control from viable entry to viable exit. Record duration and biomass trajectory; a managed production interval is ineligible here. Mortality, leftovers, effluent and escapes remain assigned to this stage. | wild-live-method-2026 |
| `b_gate` | transfer; handover | Include actual collector-owned pre-gate transport once with its fuel, live support and losses. Presentation/loading encloses or protects living fish and ends at first collector handover; recipient transport, stocking and farming begin outside. Actual no-package direct loading still requires gate checks. | wild-live-method-2026 |
| `b_assets` | all selected processes | Record vessels, tanks, aeration/oxygen equipment, refrigeration, reusable containers and vehicles, every consuming node and service period, manufacture/replacement/maintenance and terminal fate. Metered operation and asset burdens must not overlap. Actual owned electricity, oxygen, heat/cold or water preparation requires its complete upstream resources and releases with allocated service burden, without duplicate purchased supply. Generic contracted services use a separate provider activity ledger with compatible units; do not fabricate kg exchanges. | wild-live-method-2026 |
| `b_periods` | all selected processes | Link capture trips/seasons, holding batches, transfer runs, dispatch lots, cleaning/changeovers and opening/closing stock to dated reporting periods. Record boundary inventories and carried burdens, asset replacements and retirement once. | wild-live-method-2026 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | Wild capture and live-catch separation | `required` | All selected cohorts originate in documented wild fishing. | Wild habitat to separated viable catch; independent of later viability maintenance. | Actual live mass and counts; per 1 kg reference flow |
| `holding` | Bounded recovery and live holding | `conditional` | Actual pre-handover recovery, acclimation or holding is performed, without aquaculture production. | Viable captured fish to maintained viable fish; record entry/exit and duration. | Actual live mass and counts; per 1 kg reference flow |
| `transfer` | Collector-controlled pre-gate transfer | `conditional` | Actual collector-controlled transport occurs before the declared first handover gate. | Measured live load to received live load within this boundary. | Actual live mass and counts; per 1 kg reference flow |
| `handover` | Live presentation, loading and first collector handover | `required` | Every accepted lot is checked and handed over; packaging is used only when actually present. | Viable live fish to one qualified gate product; recipient distribution and culture are outside. | Actual live mass and counts; per 1 kg reference flow |

Declare capture as trips or shoreline batches, holding as discrete cohorts or continuous occupancy periods, transfer as actual runs, and loading as dispatch lots. Nodes are responsibilities: the actual order of transfer and holding is established by timestamps and links, not inferred from this table. No boat, package, feeding, treatment or transport technology is universally required. Pools preserve source fractions; every physical lot and shared operation has one accounting owner [wild-live-method-2026].

All cards below describe actual stage roles. Material/substance umbrella cards must be split into each observed concrete exchange and compatible identity before final data publication. Each finite Range is an initial, replaceable review screen; outside values trigger documented review and are never clipped. Zero requires documented non-use or no event. The final 1–1 kg range is the normalization identity. Internal live transfers retain measured quantities and counts; normalize their allocated quantities by accepted gate biomass, never set them to the final 1 kg by assumption.

### Process: Wild capture and live-catch separation (`capture`)

#### Inputs

##### Product flows

###### Purchased Chinese grid-average low-voltage AC electricity (`capture_electricity_cn`)

Only actual CN grid-average AC below 1 kV delivered to the user; exclude self-generated power and other electricity.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Purchased Chinese grid-average low-voltage AC electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: `fixed`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other purchased electricity for the actual stage (`capture_electricity_other`)

Actual other geography, voltage, provider or supply mix; mutually exclusive with the compatible CN card for the same electricity.

- Selected flow: Other purchased electricity for the actual stage
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Externally supplied treated process water suitable for fish contact (`capture_supplied_water`)

Only documented externally supplied treated industrial process water with actual fish-contact suitability; no own abstraction, seawater, circulation or supplier treatment duplication.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Externally supplied treated process water suitable for fish contact
- Binding: unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other externally supplied water for the actual stage (`capture_other_supplied_water`)

Actual externally supplied freshwater, brackish water or seawater not fitting the treated-process-water card; provider and salinity distinct.

- Selected flow: Other externally supplied water for the actual stage
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Delivered oxygen for viable-live maintenance (`capture_oxygen`)

Only actual delivered gas, with compression, purity, phase and supplier context. Weigh use or use documented gas-state conversion; aeration electricity is separate.

- Selected flow: Delivered oxygen for viable-live maintenance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Diesel for the actual freshwater fishing vessel (`capture_freshwater_diesel`)

Conditional freshwater fishing-vessel diesel only; do not apply to marine capture, shoreline machinery, holding equipment or vehicles.

Conditional identity: this flow represents only actual diesel combustion by a freshwater fishing vessel in the capture role, supported by vessel/engine and freshwater trip records. It does not identify marine-vessel, shore pump, road transport, farm or other diesel use; those require independently matched identities and quantities.

- Selected flow: Diesel for the actual freshwater fishing vessel `5e0406d3-2763-4f93-a921-b3028853c24b`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No routine exchange in this class; record actual occurrences with concrete identity and evidence.

##### Elementary flows

###### Wild fish biomass removed from the actual habitat (`capture_wild_fish_removal`)

Actual species/habitat-specific removal of target and incidental fish; measure source wet biomass and counts, linking retained viable fish, dead catch, intended co-products and later releases to the same capture events. Retain habitat/gear effects as assessment data. Never use a product identity or assume natural removal equals the final 1 kg.

- Selected flow: Wild fish biomass removed from the actual habitat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

#### Outputs

##### Product flows

###### Separated viable wild fish after capture (`capture_live_catch`)

Measured viable wet biomass and counts by capture cohort, purpose and next selected node; this intermediate is not fixed to 1 kg.

- Selected flow: Separated viable wild fish after capture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Dead fish and nonqualifying rejects sent to actual treatment (`capture_dead_rejects`)

Actual stage mortality/reject wet mass and counts with destination; split non-waste sale into a distinct co-product and keep its attribution. Never include these in viable output.

- Selected flow: Dead fish and nonqualifying rejects sent to actual treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Effluent handed to a treatment provider (`capture_wastewater`)

Actual effluent transfer by destination; do not also count the same transferred pollutants as an environmental release at this stage.

- Selected flow: Effluent handed to a treatment provider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Water discharged directly to the receiving environment (`capture_returned_water`)

Actual direct water return with receiving water body, salinity, thermal condition, volume and density; exclude treatment-provider handoffs.

- Selected flow: Water discharged directly to the receiving environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide from direct combustion to unspecified air (`capture_fossil_co2`)

Only actual direct fossil-fuel combustion to unspecified air; use measured fuel and independently justified carbon/oxidation factors. Exclude supplier emissions, biogenic CO2, respiration and CO2-equivalent.

- Selected flow: Fossil carbon dioxide from direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_capture`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Bounded recovery and live holding (`holding`)

#### Inputs

##### Product flows

###### Purchased Chinese grid-average low-voltage AC electricity (`holding_electricity_cn`)

Only actual CN grid-average AC below 1 kV delivered to the user; exclude self-generated power and other electricity.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Purchased Chinese grid-average low-voltage AC electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: `fixed`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other purchased electricity for the actual stage (`holding_electricity_other`)

Actual other geography, voltage, provider or supply mix; mutually exclusive with the compatible CN card for the same electricity.

- Selected flow: Other purchased electricity for the actual stage
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Externally supplied treated process water suitable for fish contact (`holding_supplied_water`)

Only documented externally supplied treated industrial process water with actual fish-contact suitability; no own abstraction, seawater, circulation or supplier treatment duplication.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Externally supplied treated process water suitable for fish contact
- Binding: unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other externally supplied water for the actual stage (`holding_other_supplied_water`)

Actual externally supplied freshwater, brackish water or seawater not fitting the treated-process-water card; provider and salinity distinct.

- Selected flow: Other externally supplied water for the actual stage
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Delivered oxygen for viable-live maintenance (`holding_oxygen`)

Only actual delivered gas, with compression, purity, phase and supplier context. Weigh use or use documented gas-state conversion; aeration electricity is separate.

- Selected flow: Delivered oxygen for viable-live maintenance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Viable wild fish received into bounded holding (`holding_fish_in`)

Measured linked capture/previous-node live biomass and counts with upstream burden; pooling retains source fractions and previous loss records.

- Selected flow: Viable wild fish received into bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No routine exchange in this class; record actual occurrences with concrete identity and evidence.

##### Elementary flows

#### Outputs

##### Product flows

###### Viable wild fish leaving bounded holding (`holding_live_out`)

Actual viable exit biomass and counts linked to the next node; reconcile holding losses and carryover, never prescribe 1 kg internal transfer.

- Selected flow: Viable wild fish leaving bounded holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Dead fish and nonqualifying rejects sent to actual treatment (`holding_dead_rejects`)

Actual stage mortality/reject wet mass and counts with destination; split non-waste sale into a distinct co-product and keep its attribution. Never include these in viable output.

- Selected flow: Dead fish and nonqualifying rejects sent to actual treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Effluent handed to a treatment provider (`holding_wastewater`)

Actual effluent transfer by destination; do not also count the same transferred pollutants as an environmental release at this stage.

- Selected flow: Effluent handed to a treatment provider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Water discharged directly to the receiving environment (`holding_returned_water`)

Actual direct water return with receiving water body, salinity, thermal condition, volume and density; exclude treatment-provider handoffs.

- Selected flow: Water discharged directly to the receiving environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide from direct combustion to unspecified air (`holding_fossil_co2`)

Only actual direct fossil-fuel combustion to unspecified air; use measured fuel and independently justified carbon/oxidation factors. Exclude supplier emissions, biogenic CO2, respiration and CO2-equivalent.

- Selected flow: Fossil carbon dioxide from direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fish escaping the actual holding enclosure (`holding_escapes`)

Actual escaped fish by species, receiving habitat, event, estimated count and measured individual mass with uncertainty; distinct from documented intentional release.

- Selected flow: Fish escaping the actual holding enclosure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Collector-controlled pre-gate transfer (`transfer`)

#### Inputs

##### Product flows

###### Purchased Chinese grid-average low-voltage AC electricity (`transfer_electricity_cn`)

Only actual CN grid-average AC below 1 kV delivered to the user; exclude self-generated power and other electricity.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Purchased Chinese grid-average low-voltage AC electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: `fixed`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other purchased electricity for the actual stage (`transfer_electricity_other`)

Actual other geography, voltage, provider or supply mix; mutually exclusive with the compatible CN card for the same electricity.

- Selected flow: Other purchased electricity for the actual stage
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Externally supplied treated process water suitable for fish contact (`transfer_supplied_water`)

Only documented externally supplied treated industrial process water with actual fish-contact suitability; no own abstraction, seawater, circulation or supplier treatment duplication.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Externally supplied treated process water suitable for fish contact
- Binding: unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other externally supplied water for the actual stage (`transfer_other_supplied_water`)

Actual externally supplied freshwater, brackish water or seawater not fitting the treated-process-water card; provider and salinity distinct.

- Selected flow: Other externally supplied water for the actual stage
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Delivered oxygen for viable-live maintenance (`transfer_oxygen`)

Only actual delivered gas, with compression, purity, phase and supplier context. Weigh use or use documented gas-state conversion; aeration electricity is separate.

- Selected flow: Delivered oxygen for viable-live maintenance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Viable wild fish loaded for collector-controlled transfer (`transfer_fish_in`)

Actual net live load and count from the previous selected node; retain packaging/water separately and record loading time.

- Selected flow: Viable wild fish loaded for collector-controlled transfer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No routine exchange in this class; record actual occurrences with concrete identity and evidence.

##### Elementary flows

#### Outputs

##### Product flows

###### Viable wild fish received after pre-gate transfer (`transfer_live_out`)

Actual net live received mass and count at the collector's receiving point, with transit losses and receiving time; not recipient post-gate delivery.

- Selected flow: Viable wild fish received after pre-gate transfer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Dead fish and nonqualifying rejects sent to actual treatment (`transfer_dead_rejects`)

Actual stage mortality/reject wet mass and counts with destination; split non-waste sale into a distinct co-product and keep its attribution. Never include these in viable output.

- Selected flow: Dead fish and nonqualifying rejects sent to actual treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Effluent handed to a treatment provider (`transfer_wastewater`)

Actual effluent transfer by destination; do not also count the same transferred pollutants as an environmental release at this stage.

- Selected flow: Effluent handed to a treatment provider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Water discharged directly to the receiving environment (`transfer_returned_water`)

Actual direct water return with receiving water body, salinity, thermal condition, volume and density; exclude treatment-provider handoffs.

- Selected flow: Water discharged directly to the receiving environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide from direct combustion to unspecified air (`transfer_fossil_co2`)

Only actual direct fossil-fuel combustion to unspecified air; use measured fuel and independently justified carbon/oxidation factors. Exclude supplier emissions, biogenic CO2, respiration and CO2-equivalent.

- Selected flow: Fossil carbon dioxide from direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fish escaping during collector-controlled transfer (`transfer_escapes`)

Actual escape events, species, receiving habitat, count and representative individual mass with uncertainty; distinct from dead fish and intentional release. Explicitly document no event rather than assuming zero.

- Selected flow: Fish escaping during collector-controlled transfer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transfer`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

### Process: Live presentation, loading and first collector handover (`handover`)

#### Inputs

##### Product flows

###### Purchased Chinese grid-average low-voltage AC electricity (`handover_electricity_cn`)

Only actual CN grid-average AC below 1 kV delivered to the user; exclude self-generated power and other electricity.

Conditional identity: this binding applies only to actual purchased Chinese grid-average consumption-mix alternating current below 1 kV delivered to this node. Verify geography, voltage, supplier/mix and actual consumption; other regions, voltages, contracted mixes or own generation require independent identities and records. No supply or use is assumed.

- Selected flow: Purchased Chinese grid-average low-voltage AC electricity `50657322-939c-4829-a87b-47c093bfa6a7`
- Binding: `fixed`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other purchased electricity for the actual stage (`handover_electricity_other`)

Actual other geography, voltage, provider or supply mix; mutually exclusive with the compatible CN card for the same electricity.

- Selected flow: Other purchased electricity for the actual stage
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Externally supplied treated process water suitable for fish contact (`handover_supplied_water`)

Only documented externally supplied treated industrial process water with actual fish-contact suitability; no own abstraction, seawater, circulation or supplier treatment duplication.

This is one actual externally supplied water exchange, not an assumed industrial process-water supply. Retain its measured quantity and actual source, treatment, grade, salinity and use. Verify fitness for the actual animal-contact, carrier, washing or ice-making purpose and resolve the exact actual supply identity independently before dataset completion; no industrial-water UUID is inherited.

- Selected flow: Externally supplied treated process water suitable for fish contact
- Binding: unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Other externally supplied water for the actual stage (`handover_other_supplied_water`)

Actual externally supplied freshwater, brackish water or seawater not fitting the treated-process-water card; provider and salinity distinct.

- Selected flow: Other externally supplied water for the actual stage
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Delivered oxygen for viable-live maintenance (`handover_oxygen`)

Only actual delivered gas, with compression, purity, phase and supplier context. Weigh use or use documented gas-state conversion; aeration electricity is separate.

- Selected flow: Delivered oxygen for viable-live maintenance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Viable wild fish before live presentation and loading (`handover_fish_in`)

Measured live fish received from the last selected upstream node; route links must not duplicate direct-capture and held/transferred quantities.

- Selected flow: Viable wild fish before live presentation and loading
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

No routine exchange in this class; record actual occurrences with concrete identity and evidence.

##### Elementary flows

#### Outputs

##### Product flows

###### Wild live fish for declared aquaculture purpose at first collector handover (`handover_live_fish_gate`)

Exactly one purpose-specific qualifying live fish output, excluding dead/rejected fish, water, oxygen and packaging. Count and life-stage/health/fitness evidence accompany actual net wet biomass.

- Selected flow: Wild live fish for declared aquaculture purpose at first collector handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_gate_mass`
- Sources: `wild-live-method-2026`
- Range: Internal normalization identity
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `wild-live-method-2026`

##### Waste flows

###### Dead fish and nonqualifying rejects sent to actual treatment (`handover_dead_rejects`)

Actual stage mortality/reject wet mass and counts with destination; split non-waste sale into a distinct co-product and keep its attribution. Never include these in viable output.

- Selected flow: Dead fish and nonqualifying rejects sent to actual treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Effluent handed to a treatment provider (`handover_wastewater`)

Actual effluent transfer by destination; do not also count the same transferred pollutants as an environmental release at this stage.

- Selected flow: Effluent handed to a treatment provider
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Water discharged directly to the receiving environment (`handover_returned_water`)

Actual direct water return with receiving water body, salinity, thermal condition, volume and density; exclude treatment-provider handoffs.

- Selected flow: Water discharged directly to the receiving environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fossil carbon dioxide from direct combustion to unspecified air (`handover_fossil_co2`)

Only actual direct fossil-fuel combustion to unspecified air; use measured fuel and independently justified carbon/oxidation factors. Exclude supplier emissions, biogenic CO2, respiration and CO2-equivalent.

- Selected flow: Fossil carbon dioxide from direct combustion to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Fish escaping during live loading and handover (`handover_escapes`)

Actual escape events, species, receiving habitat, count and representative individual mass with uncertainty; distinct from dead fish and intentional release. Explicitly document no event rather than assuming zero.

- Selected flow: Fish escaping during live loading and handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `wild-live-method-2026`
- Range: Replaceable provisional author QA screen
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | all retained catch | Enumerate selected seed, broodstock or live-fish-feed output and every other intended retained product, each state, amount, own handover and destination. Keep incidental release, dead fish and waste distinct. Do not count one lot at capture, holding and gate as three sold products. | wild-live-method-2026 |
| `a_precedence` | shared capture and operations | Prefer subdivision/submetering; otherwise justify a causal physical relationship from actual effort or resource use. Mass is not automatically causal between unlike live-fish purposes. Where no defensible physical relationship exists, use documented same-period gate economic values and sensitivity, with currency and price coverage disclosed. | ghg-product-2011 |
| `a_losses` | mortality, rejects, release and escapes | Retain all actual burdens and treatment on the studied output system before any justified co-product allocation. No zero-burden dead product or avoided-wild-removal credit. A marketed secondary output receives an explicit allocation decision rather than silently becoming waste. | wild-live-method-2026 |
| `a_shared` | shared assets, utilities and providers | Enumerate every consumer of each vessel, holding tank, pump, refrigeration unit, vehicle, reusable container or contracted activity over the recorded service period. Use submetering or documented use-hours/occupancy/effort as causally justified; shares sum to the measured burden exactly once, including idle and cleaning shares. | wild-live-method-2026 |
| `a_period` | trips, continuous holding and carryover | Assign trip-specific fuel/catch to that trip and continuous utilities by recorded occupancy and time where justified. Link cleaning/changeovers to actual runs. Carry opening fish and asset burdens forward once, reconcile closing stock and retired assets; do not charge full manufacture or the same retained fish each reporting year. | wild-live-method-2026 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | capture | all actual stage exchanges | meter, log, invoice, sampling, analysis and fate records | cohort/trip/run/period; source/consumer; material/substance; quantity; count; state; timestamps; water source/salinity/flow; concentration/species/background; destination; factors; allocation | Calibrated meters/scales and traceable supplier records; stage-entry/exit live counts and representative weighing; timed flow-weighted analyses; reconcile fuels, assets, cleaning and all fates with provider boundaries | kg; MJ; original kWh/volume/count/time and substance units retained | every batch/run, continuous meters and each loss/cleaning event | full selected trip, holding interval, transfer, dispatch and reporting periods | actual capture/collector locations and named providers | per 1 kg reference flow | calibration; sample design; laboratory blanks/detection/uncertainty; source receipts; consumer/period ledger |
| `cp_holding` | holding | all actual stage exchanges | meter, log, invoice, sampling, analysis and fate records | cohort/trip/run/period; source/consumer; material/substance; quantity; count; state; timestamps; water source/salinity/flow; concentration/species/background; destination; factors; allocation | Calibrated meters/scales and traceable supplier records; stage-entry/exit live counts and representative weighing; timed flow-weighted analyses; reconcile fuels, assets, cleaning and all fates with provider boundaries | kg; MJ; original kWh/volume/count/time and substance units retained | every batch/run, continuous meters and each loss/cleaning event | full selected trip, holding interval, transfer, dispatch and reporting periods | actual capture/collector locations and named providers | per 1 kg reference flow | calibration; sample design; laboratory blanks/detection/uncertainty; source receipts; consumer/period ledger |
| `cp_transfer` | transfer | all actual stage exchanges | meter, log, invoice, sampling, analysis and fate records | cohort/trip/run/period; source/consumer; material/substance; quantity; count; state; timestamps; water source/salinity/flow; concentration/species/background; destination; factors; allocation | Calibrated meters/scales and traceable supplier records; stage-entry/exit live counts and representative weighing; timed flow-weighted analyses; reconcile fuels, assets, cleaning and all fates with provider boundaries | kg; MJ; original kWh/volume/count/time and substance units retained | every batch/run, continuous meters and each loss/cleaning event | full selected trip, holding interval, transfer, dispatch and reporting periods | actual capture/collector locations and named providers | per 1 kg reference flow | calibration; sample design; laboratory blanks/detection/uncertainty; source receipts; consumer/period ledger |
| `cp_handover` | handover | all actual stage exchanges | meter, log, invoice, sampling, analysis and fate records | cohort/trip/run/period; source/consumer; material/substance; quantity; count; state; timestamps; water source/salinity/flow; concentration/species/background; destination; factors; allocation | Calibrated meters/scales and traceable supplier records; stage-entry/exit live counts and representative weighing; timed flow-weighted analyses; reconcile fuels, assets, cleaning and all fates with provider boundaries | kg; MJ; original kWh/volume/count/time and substance units retained | every batch/run, continuous meters and each loss/cleaning event | full selected trip, holding interval, transfer, dispatch and reporting periods | actual capture/collector locations and named providers | per 1 kg reference flow | calibration; sample design; laboratory blanks/detection/uncertainty; source receipts; consumer/period ledger |
| `cp_gate_mass` | handover | accepted net viable-live fish | weighing and acceptance record | species; purpose; life stage; count; sample mass; drained fish mass; tare; viability; rejects; time; recipient; cohort/source fractions | Weigh accepted live fish on a calibrated scale with a documented viability-preserving drainage and tare procedure; representative actual cohort sample weighing for count conversion; exclude packages, water and nonqualifying fish | kg | every dispatch cohort | capture through first handover with opening/closing stocks | actual first collector gate | per 1 kg reference flow | scale calibration; tare/drain method; sample representativeness; counted fish; purpose-specific recipient acceptance |


The provider activity ledger records contract/provider, operation and boundary, functional activity, physical unit, compatible property/unit verification, period, beneficiaries, amount, allocation and whether the dataset already includes utilities/assets. It is auxiliary evidence until a concrete service identity and compatible reference property are verified. It must not be converted to kg merely to populate a flow card [wild-live-method-2026].

Water analyses retain elemental/species units, sample times, flow and duration, background and calibration/laboratory QA. Record detection limits and an explicit non-detect treatment with uncertainty; a non-detect is not automatically zero. Shared effluent has one unique stage/event owner and documented upstream consumer shares, preventing duplicate direct releases. Respiration/excretion are screened as actual biological releases separately from fossil combustion; the absence of a usable factor is a disclosed gap [wild-live-method-2026].

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_cohort` | stage quantities | Divide each attributable actual stage exchange by the same positive accepted net viable-live gate biomass; retain original stage wet mass and counts. Sum source-cohort contributions once after allocations, not before matching periods. | stage records; accepted gate biomass; allocation ledger | amount per 1 kg reference flow | wild-live-method-2026 |
| `count_conversion` | fish counts | Estimate cohort wet mass only from actual representative measured individual/sample wet masses and actual counts; retain sample weighting, variability and uncertainty. No generic count factor. | sample weights; sample design; counts | kg and uncertainty by cohort | wild-live-method-2026 |
| `cohort_reconcile` | live fish | Opening live fish plus captured/received fish equals accepted live handover plus closing live fish, co-products, mortalities, rejects, documented release/escapes and other identified losses; conserve fish counts across all fates, and separately reconcile wet biomass with documented feed uptake, metabolism, respiration, excretion, water-content change and sampling uncertainty. Carry prior burdens with opening/closing stock to its actual terminal fate; these explanations do not permit managed growout inside preservation. | dated cohort/source ledger | reconciled live-fish history | wild-live-method-2026 |
| `waterborne_load` | direct discharge substances | Integrate measured concentration times actual discharge flow and duration, with disclosed background adjustment and exact mass/species conversion; retain negative/uncertain differences for review rather than silently treating removal as a credit. | analytical records; flow; duration; background; units | kg of each named substance to its actual medium | wild-live-method-2026 |
| `combustion_load` | direct fossil emissions | Calculate actual burned fossil fuel carbon times justified oxidation and molecular conversion factors or use compatible measured emissions; retain fuel, factor source and uncertainty without assuming an identity supplies a factor. | fuel records; independently justified factors | kg fossil CO2 and other exact substances | wild-live-method-2026 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_trace` | reference and intermediates | Preserve actual species, wild locality/trip, purpose, life stage and cohort composition across pooling; incomplete origins are not repaired by a generic species name. | Capture and transfer records; recipient acceptance |
| `dq_viability` | gate | Weigh only qualifying live fish; report count, size distribution, actual viability/health and purpose suitability. Seed development, broodstock maturity/fitness and live-feed suitability require distinct recipient evidence. | Calibration/tare/sample records; inspection and dispatch documents |
| `dq_complete` | every selected node | Screen actual fuel, electricity, water sources, oxygen, physical cooling/health/feed/cleaning inputs, products, bycatch, solids, effluent, direct substances, leaks and escapes. Record unused roles explicitly and unknowns as gaps. | Stage balance, meters, invoices, laboratory QA and fate receipts |
| `dq_range` | every card | Replace provisional author screens with actual records or reviewed empirical/source evidence when available. Investigate outliers, never truncate actual data to the screen. | Range review and uncertainty explanation |
| `dq_period` | shared and carried burdens | Reconcile consumer shares, stock and asset events over complete periods; disclose data age, missing seasons and representativeness. | Dated allocation/asset and cohort ledgers |
| `dq_inventory_completion` | all inventory-completion requirements | Create a separate card for every actual physical or chemical exchange, with process, direction, flow type, its own measured quantity, native unit, final-reference normalization, applicability, destination, UUID and independent range evidence. Never copy a family total, a grouped screening range or one UUID onto every child. Use not_applicable only for evidenced absence; unknown is not zero. Any unfulfilled applicable obligation makes the final dataset incomplete and fails validation. | per-flow coverage ledger, raw measurements, identity, fate and range evidence |
| `dq_complete_capture_fuel` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Other stage-specific fuel consumed”; retain all following collection, quantity and normalization obligations: Actual marine/shore equipment or other incompatible capture fuel, excluding the separately recorded freshwater-vessel diesel. Keep fuel identity and measured density when converting volume. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_thermal_energy` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Purchased heat or cold service expressed as measured thermal energy”; retain all following collection, quantity and normalization obligations: Conditional on actual use at this stage. Split actual materials/providers into concrete exchanges; a documented non-use can be zero, missing records cannot. Actual thermal energy only; no kg for a generic service. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_materials` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Actual handling, thermal-control and health materials”; retain all following collection, quantity and normalization obligations: Conditional on actual use at this stage. Split actual materials/providers into concrete exchanges; a documented non-use can be zero, missing records cannot. Identify each salt, disinfectant, authorised health product, lubricant, cleaning material, cooling material or other physical consumable; no mandatory treatment or capture-food ice identity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_gear` | `capture`; inputs; product | Identify and separately collect every actual exchange covered by “Capture gear and vessel physical replacement materials”; retain all following collection, quantity and normalization obligations: Actual nets, traps, lines or replacement materials attributed over observed service trips; retained assets and manufacture are linked through the infrastructure ledger, not charged fully to each trip. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_abstracted_water` | `capture`; inputs; elementary | Identify and separately collect every actual exchange covered by “Water abstracted directly from the declared environment”; retain all following collection, quantity and normalization obligations: Actual withdrawal by water body and salinity; measure external inflow once and retain volume, density, date and location. Internal circulation is an auxiliary activity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_co_products` | `capture`; outputs; product | Identify and separately collect every actual exchange covered by “Other intended retained catch at its own handover”; retain all following collection, quantity and normalization obligations: Enumerate every actually marketed retained catch, species, state, counts/mass, destination and handover; record no such output only with evidence. Incidental release is not a marketed co-product. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_solid_waste` | `capture`; outputs; waste | Identify and separately collect every actual exchange covered by “Spent physical consumables and separated solids for treatment”; retain all following collection, quantity and normalization obligations: Actual cleaning solids, used filters, damaged gear, spilled materials or package rejects; split composition, destination and hazardous status. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_substance_releases` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual substance-specific direct releases and refrigerant leakage”; retain all following collection, quantity and normalization obligations: Conditional concrete umbrella: each actual nitrogen/phosphorus species, health-product residue, exhaust substance/particle class, spilled lubricant, refrigerant or gear material crossing to environment gets its own identity, medium and kg substance basis. Use concentration, flow, duration and background correction for waterborne loads. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_capture_released_catch` | `capture`; outputs; elementary | Identify and separately collect every actual exchange covered by “Live incidental catch returned to the declared habitat”; retain all following collection, quantity and normalization obligations: Record actual retained/released species, counts, wet mass measurement, timing, place and observed condition; no avoided-catch credit or assumed survival after release. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_capture` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_fuel` | `holding`; inputs; product | Identify and separately collect every actual exchange covered by “Other stage-specific fuel consumed”; retain all following collection, quantity and normalization obligations: Actual fuel for this stage equipment or vehicle, with fuel specification, measured use and density when volume is converted. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_holding` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_thermal_energy` | `holding`; inputs; product | Identify and separately collect every actual exchange covered by “Purchased heat or cold service expressed as measured thermal energy”; retain all following collection, quantity and normalization obligations: Conditional on actual use at this stage. Split actual materials/providers into concrete exchanges; a documented non-use can be zero, missing records cannot. Actual thermal energy only; no kg for a generic service. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_holding` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_materials` | `holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual handling, thermal-control and health materials”; retain all following collection, quantity and normalization obligations: Conditional on actual use at this stage. Split actual materials/providers into concrete exchanges; a documented non-use can be zero, missing records cannot. Identify each salt, disinfectant, authorised health product, lubricant, cleaning material, cooling material or other physical consumable; no mandatory treatment or capture-food ice identity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_holding` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_maintenance_feed` | `holding`; inputs; product | Identify and separately collect every actual exchange covered by “Actual maintenance feed during bounded live holding”; retain all following collection, quantity and normalization obligations: Record actual feed identity, wet/dry basis, leftovers, purpose, duration and biomass trajectory. Managed growth or reproduction makes the route ineligible here; do not conceal farming as holding. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_holding` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_abstracted_water` | `holding`; inputs; elementary | Identify and separately collect every actual exchange covered by “Water abstracted directly from the declared environment”; retain all following collection, quantity and normalization obligations: Actual withdrawal by water body and salinity; measure external inflow once and retain volume, density, date and location. Internal circulation is an auxiliary activity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_holding` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_solid_waste` | `holding`; outputs; waste | Identify and separately collect every actual exchange covered by “Spent physical consumables and separated solids for treatment”; retain all following collection, quantity and normalization obligations: Actual leftover maintenance feed, cleaning solids, used filters, damaged gear, spilled materials or package rejects; split composition, destination and hazardous status. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_holding` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_holding_substance_releases` | `holding`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual substance-specific direct releases and refrigerant leakage”; retain all following collection, quantity and normalization obligations: Conditional concrete umbrella: each actual nitrogen/phosphorus species, health-product residue, exhaust substance/particle class, spilled lubricant, refrigerant or gear material crossing to environment gets its own identity, medium and kg substance basis. Use concentration, flow, duration and background correction for waterborne loads. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_holding` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_transfer_fuel` | `transfer`; inputs; product | Identify and separately collect every actual exchange covered by “Other stage-specific fuel consumed”; retain all following collection, quantity and normalization obligations: Actual fuel for this stage equipment or vehicle, with fuel specification, measured use and density when volume is converted. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_transfer` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_transfer_thermal_energy` | `transfer`; inputs; product | Identify and separately collect every actual exchange covered by “Purchased heat or cold service expressed as measured thermal energy”; retain all following collection, quantity and normalization obligations: Conditional on actual use at this stage. Split actual materials/providers into concrete exchanges; a documented non-use can be zero, missing records cannot. Actual thermal energy only; no kg for a generic service. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_transfer` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_transfer_materials` | `transfer`; inputs; product | Identify and separately collect every actual exchange covered by “Actual handling, thermal-control and health materials”; retain all following collection, quantity and normalization obligations: Conditional on actual use at this stage. Split actual materials/providers into concrete exchanges; a documented non-use can be zero, missing records cannot. Identify each salt, disinfectant, authorised health product, lubricant, cleaning material, cooling material or other physical consumable; no mandatory treatment or capture-food ice identity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_transfer` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_transfer_abstracted_water` | `transfer`; inputs; elementary | Identify and separately collect every actual exchange covered by “Water abstracted directly from the declared environment”; retain all following collection, quantity and normalization obligations: Actual withdrawal by water body and salinity; measure external inflow once and retain volume, density, date and location. Internal circulation is an auxiliary activity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_transfer` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_transfer_solid_waste` | `transfer`; outputs; waste | Identify and separately collect every actual exchange covered by “Spent physical consumables and separated solids for treatment”; retain all following collection, quantity and normalization obligations: Actual cleaning solids, used filters, damaged gear, spilled materials or package rejects; split composition, destination and hazardous status. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_transfer` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_transfer_substance_releases` | `transfer`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual substance-specific direct releases and refrigerant leakage”; retain all following collection, quantity and normalization obligations: Conditional concrete umbrella: each actual nitrogen/phosphorus species, health-product residue, exhaust substance/particle class, spilled lubricant, refrigerant or gear material crossing to environment gets its own identity, medium and kg substance basis. Use concentration, flow, duration and background correction for waterborne loads. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_transfer` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_fuel` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Other stage-specific fuel consumed”; retain all following collection, quantity and normalization obligations: Actual fuel for this stage equipment or vehicle, with fuel specification, measured use and density when volume is converted. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_thermal_energy` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Purchased heat or cold service expressed as measured thermal energy”; retain all following collection, quantity and normalization obligations: Conditional on actual use at this stage. Split actual materials/providers into concrete exchanges; a documented non-use can be zero, missing records cannot. Actual thermal energy only; no kg for a generic service. Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_materials` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual handling, thermal-control and health materials”; retain all following collection, quantity and normalization obligations: Conditional on actual use at this stage. Split actual materials/providers into concrete exchanges; a documented non-use can be zero, missing records cannot. Identify each salt, disinfectant, authorised health product, lubricant, cleaning material, cooling material or other physical consumable; no mandatory treatment or capture-food ice identity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_packaging` | `handover`; inputs; product | Identify and separately collect every actual exchange covered by “Actual live-fish containers and protective packaging materials”; retain all following collection, quantity and normalization obligations: Actual single-use bags, boxes, liners or seals; reusable tanks/containers use measured replacement materials and verified use cycles. Water and gas are separate; package mass never enters fish mass. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_abstracted_water` | `handover`; inputs; elementary | Identify and separately collect every actual exchange covered by “Water abstracted directly from the declared environment”; retain all following collection, quantity and normalization obligations: Actual withdrawal by water body and salinity; measure external inflow once and retain volume, density, date and location. Internal circulation is an auxiliary activity. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_solid_waste` | `handover`; outputs; waste | Identify and separately collect every actual exchange covered by “Spent physical consumables and separated solids for treatment”; retain all following collection, quantity and normalization obligations: Actual cleaning solids, used filters, damaged gear, spilled materials or package rejects; split composition, destination and hazardous status. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |
| `dq_complete_handover_substance_releases` | `handover`; outputs; elementary | Identify and separately collect every actual exchange covered by “Actual substance-specific direct releases and refrigerant leakage”; retain all following collection, quantity and normalization obligations: Conditional concrete umbrella: each actual nitrogen/phosphorus species, health-product residue, exhaust substance/particle class, spilled lubricant, refrigerant or gear material crossing to environment gets its own identity, medium and kg substance basis. Use concentration, flow, duration and background correction for waterborne loads. Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg Amount rule: Attributable measured stage quantity divided by the same accepted gate net viable-live wet biomass; retain original quantities, counts, times and attribution evidence. Value mode: `calculated_value` Specificity: `site_specific` Normalization basis: per 1 kg reference flow Basis kind: `reference_flow` Evidence kind: `calculated_from_collection` Collection protocol: `cp_handover` Sources: `wild-live-method-2026` Establish native units, measured quantities, destinations and independent range evidence for each concrete exchange. This completion requirement supplies no child quantity, default or allowed range; establish each child range independently. No actual exchange may be omitted. | per-flow original records under the linked protocol, identity and destination evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | reference | Reject unknown purpose, non-wild origin, non-live state, managed production hidden as holding, excluded products or missing gate identity. Do not equate species, life stages or purposes by kg alone. | un-cpc-2025; wild-live-method-2026 |
| `v_mass` | all inventory rows | Confirm one final 1 kg reference, actual tare/drain procedure and count-to-mass evidence, common denominator and units, measured intermediate quantities, complete mortality/reject exclusion and nonzero accepted biomass. | wild-live-method-2026 |
| `v_route` | process map | Require actual selected order, entry/exit states, separate capture and holding, declared transfer boundary and live handover. Every conditional omission needs evidence; unknown activity is not inactive. | wild-live-method-2026 |
| `v_inventory` | every selected node | Check each material role, source/destination and fate, external versus circulated water, provider treatment versus direct release, substance/media specificity and separate upstream/direct emissions. Missing materially plausible flows are disclosed gaps. | wild-live-method-2026 |
| `v_attribution` | outputs, modes, periods and assets | Check complete intended-output set and handovers, chosen method precedence, consumer shares, batch/continuous runs and changeovers, stock carryover, replacement and terminal events. Fail unexplained double counts or losses. | ghg-product-2011; wild-live-method-2026 |
| `v_identity` | exchange identities | Final exchanges require verified compatible concrete flow/property/unit identity; conditional material umbrellas require actual expansion. Unverified product or support identity remains an explicit data gap and does not establish publication readiness. | wild-live-method-2026 |
| `v_quality` | ranges and evidence | Every amount has basis, condition, protocol/evidence and finite Range. Confirm actual foreground precedence, explain outliers and uncertainty, and do not treat initial author screens or historical husbandry examples as mandatory site performance. | wild-live-method-2026 |
| `validate_inventory_completion` | all concrete exchanges and section 8 completion obligations | Verify each applicable dq_complete obligation has separately measured and identity-verified exchange cards. Check each quantity, native unit, range evidence, normalization, receiving medium, destination and non-duplication. Any unfulfilled actual child exchange, quantity, identity or destination makes the final dataset incomplete and fails validation; unknown cannot be zero. Static PCR checking does not replace this evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Aquaculture-purpose foreground package as upstream live-fish supply to process or lifecyclemodel construction |
| allowed_use | Matching wild origin, species/life stage, declared purpose, capture/holding route, region/time and first collector gate with quality/identity disclosure |
| excluded_use | Food or ornamental fish, farm-produced fish, unhatched eggs, dead/processed feed, recipient farming/transport, unsupported biological equivalence or unresolved concrete exchange publication |
| required_metadata | PCR/version; species/purpose/life stage; wild source/trips/gear; cohort counts and wet mass; gate/recipient; selected routes/durations; geography/time; allocation/co-products; shared assets/periods; upstream datasets and verified exchanges |
| required_quality_disclosure | Sampling/calibration; observed viability, health and purpose fitness; losses/bycatch/releases/escapes; uncertainty; upstream/proxy gaps; provisional ranges; representativeness; checks performed and skipped |
| update_trigger | Changed species/purpose/gate, actual managed production, new capture/holding route, major input/effluent or health change, asset/service/allocation change, new identity evidence or revised authoritative guidance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | UN Statistics Division, CPC 3.0 explanatory notes, 30 June 2025, pp.40–43; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; retrieved 2026-10-09 | Wild/farmed and nonfood/ornamental/food classification boundaries; no numerical inventory default |
| `fao-cba-2011` | official_guidance | FAO, Aquaculture development 6: Use of wild fishery resources for capture-based aquaculture, 2011, abstract, §§3.1.2.2, 3.2.1 and 5.5.1; https://www.fao.org/4/ba0059e/ba0059e.pdf ; retrieved 2026-10-09 | Capture/use distinction, live material purpose, handling/mortality and source traceability as qualitative evidence; strict complete ledgers are this PCR's method |
| `fao-live-handling` | handbook | FAO, Selected aspects of warmwater fish culture, chapter 6, Handling and transport of live fish; https://www.fao.org/4/T8389E/T8389E06.htm ; retrieved 2026-10-09 | Qualitative water/oxygen, size/age and handling considerations only; no universal density, temperature, dose or survival default |
| `ghg-product-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapter 9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; retrieved 2026-10-09 | Allocation precedence and disclosure; no claim of full-standard compliance or automatic avoided-burden credit |
| `wild-live-method-2026` | method_factor | This PCR, §§3–9, wild live aquaculture-purpose fish measurement, boundary and attribution method, 2026 | Internally defined 1 kg normalization, complete cohort/stage/consumer ledgers, measurement/balance protocols and validation; not an external observation or biological performance default |
