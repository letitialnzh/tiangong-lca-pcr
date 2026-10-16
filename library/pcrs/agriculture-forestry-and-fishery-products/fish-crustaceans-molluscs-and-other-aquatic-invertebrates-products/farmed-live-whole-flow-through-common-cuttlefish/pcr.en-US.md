---
pcr_id: pcr.farmed-live-whole-flow-through-common-cuttlefish
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Farmed live whole flow-through common cuttlefish

## 1. Scope and Applicability

This methodology defines foreground data production for captive-origin common cuttlefish, Sepia officinalis, following direct hatchling nursery and seawater flow-through growout, through acceptance of whole live never-frozen nonornamental animals by the first physical recipient. It is narrower than the classification leaf. It requires application records for actual delivery activities and does not assert that an experimental culture study demonstrated commercial dispatch, profitability, food-health status, welfare or legal eligibility.

Capaz et al. document Ramalhete captive eggs, live grass-shrimp nursery feed, thawed grass-shrimp growout feed, filtered/decanted seawater and aeration/shading. Their weighed animals returned to tanks; reproduction and research sampling constrain interpretation. No experimental age, body size, sex ratio, feed amount, water flow, tank size, temperature, chemical dose, cost or duration is a PCR default. These source-context facts support route decomposition only (`capaz-cuttlefish-2020`). The collection, custody and accounting requirements below are declared prospective methods (`cuttlefish-accounting-method`), not paper commerce observations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-flow-through-common-cuttlefish |
| classification_refs | cpc:3.0:04462; Farmed cuttle fish and squid, live, fresh or chilled; narrower methodology |
| covered_products | Captive-origin Sepia officinalis following direct hatchling nursery and seawater flow-through growout, delivered whole, live, never frozen and nonornamental |
| excluded_products | Squid; other cuttlefish species; direct wild catch; ornamental animals; fresh-dead, chilled-dead, frozen, dried, salted, smoked, eviscerated or otherwise processed final animals; a research sampling return represented as delivery |
| representative_product | Common cuttlefish Sepia officinalis from the Ramalhete, Faro, Portugal captive-production context |
| production_route | Captive eggs and direct hatchling nursery on live grass shrimp; juvenile/adult flow-through seawater growout on thawed grass shrimp; application-specific independent collection, grading, observed bounded holding or evidenced bypass, protective presentation and receipt |
| market_state | Whole live never-frozen nonornamental animal at the first physical recipient; no source-paper commerce claim |

## 3. Reference Flow

### Functional Unit

| Field | Value |
| --- | --- |
| What | Accepted whole live never-frozen farmed Sepia officinalis at first physical recipient |
| How much | 1 kg net animal wet mass; A is the same positive accepted lot mass in kg |
| How well | Actual species, captive ancestry, whole-body integrity, live and never-frozen condition, nonornamental destination, accepted grade and independent physical receipt |
| How long or cycle | Declared cohort and reporting periods covering inherited reproductive service, egg/nursery, growout, failed periods, cleaning, replacement, closing stocks, actual holding and pre-receipt custody; narrower actual nonbreeding periods require evidence |
| reference_flow_link | `live_receipt_reference` |

### Reference Flow Object

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Whole live never-frozen farmed common cuttlefish at first physical recipient |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; captive ancestry and received stage; actual location and reporting/cohort periods; direct hatchling nursery and flow-through route; live whole never-frozen state; nonornamental use; actual grade and independent count/size observations; net animal wet mass method and uncertainty; excluded carrier/free water and tare; holding active/bypass/unknown evidence; first physical recipient and every pre-receipt leg; reproductive/offspring/broodstock/stock burden ledger |

Required qualifiers must be declared in the actual data package metadata, product description, process notes or equivalent records. Missing qualifiers leave the reference incomplete. Independently establish the real product and supporting identities before final exchange use.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | A = same-lot accepted net live whole animal wet mass in kg, independently measured at physical receipt with calibrated weighing and actual carrier/free-water and package-tare separation; native animal body water remains. Record handling and uncertainty without prescribing stressful research methods; use cp_receipt. A must be positive. |
| live_count_mass | animal transfer and stocks | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain independent counts, size/grade and live-condition observations. If mass is estimated from count, use representative weighed live samples of the same actual lot/state, sampling design and uncertainty; no species-average body mass or paper conversion constant. |
| native_units | all inventory rows | Actual native property | Actual native unit | Measure each exchange in its native property/unit; seawater remains Volume/m3, electricity Energy/kWh, asset service duration h and freight t.km. Preserve native amount before attribution and division by A. Never force all exchanges to Mass or use feed wet mass as nutrient mass. |
| paired_states | internal transfers and stocks | Actual native property | Actual native unit | Match output/input transfer ids, state, quantity, unit, lot, period and inherited burdens. Opening/closing stocks and live/pack/water returns retain same-state links. Differences need observed loss or state-change evidence; nonfinal transfers are never forced to 1 kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual documented received captive eggs, hatchlings, juveniles or broodstock and opening animal/feed/asset stocks with ancestry and inherited burdens; declare which phases occur on site |
| starting_condition_role | Evidence-based foreground truncation with retained upstream reproductive, nursery, growout, feed and logistics services, not an origin-free cut-off |
| product_classification_scope | CPC 3.0 04462 is broader: this PCR covers one captive-origin species, flow-through route and whole-live never-frozen gate only |
| recursive_input_rule | Record same-category received or returned animals by actual stage/state, quantity and inherited burdens; stop tracing at the declared evidenced supplier boundary and link required upstream dataset or explicit reviewed gap, never recurse indefinitely or reset burdens |
| upstream_dataset_requirement | Supplier captive origin, reproductive/nursery service, feed capture/culture and cold-chain, energy/water/material/service and acquisition transport datasets or documented primary evidence with compatible scope |
| disclosure | Actual location, cohort/period, stage coverage, inherited upstream service, full failures and reproductive outputs, stocks, shared assets/service life, holding state, every pre-receipt movement, allocation, missing records and uncertainty |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | foreground_route | Keep source-supported captive production separate from application-proven final collection and physical receipt. The source monitoring loop returns animals and is not a harvest/sale. Research anesthesia, sexing, DNA, tagging and destructive sampling are not production prescriptions. | `capaz-cuttlefish-2020`; `cuttlefish-accounting-method` |
| boundary_phases | managed_culture | Keep all actual reproductive service, eggs, hatchlings, broodstock, failed cohorts, opening/closing stocks and termination in full-cycle attribution. Retained unhatched offspring carry reproductive service; a narrower actual nonbreeding period requires proof and inherited upstream burden. | `cuttlefish-accounting-method` |
| boundary_holding | bounded_holding | Select active only from observed interval/intervention records; bypass requires matched direct grading-to-presentation transfer. Unknown state is a gap and never zero or bypass. Preserve actual before/after live state, inputs and losses. | `cuttlefish-accounting-method` |
| boundary_support | supporting services | Model actual sand filtration, decanting, aeration/shading and shared tanks/filters/pumps/air equipment/feed cold store through measured service and attribution. Enumerate every consuming node and period. Complete services exclude covered components/releases, and component models exclude the complete service. | `capaz-cuttlefish-2020`; `cuttlefish-accounting-method` |
| boundary_gate | delivery | The gate is independent first physical receipt of accepted live whole animals, regardless of payer. Include every prior movement, load/unload, waiting and failed delivery event; record carrier water/package and actual returns separately. Exclude subsequent use or disposal. | `cuttlefish-accounting-method` |
| boundary_fate | all inventory rows | Apply each collection obligation by adding one independent card per actual identified exchange with native property/unit, state, time, destination and evidence. Actual unused state requires evidence; unknown is not zero. Pair internal water/matter/package/animal transfers and stock/return ledgers, identify all intended outputs, actual losses, waste and environmental releases without inventing occurrence. | `cuttlefish-accounting-method` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| water_supply | Seawater preparation and actual effluent management | required | Source-context sand filtration, decanting and aeration; actual effluent routing retained | supporting water service | Declared seawater and effluent volumes |
| feed_preparation | Live and thawed grass-shrimp supply and preparation | required | Live nursery feed and frozen-origin thawed growout feed; actual storage and cleaning | foreground feed preparation | Measured feed in its actual supplied state |
| managed_culture | Captive reproduction, direct hatchling nursery and flow-through growout | required | Actual captive starting condition and all claimed production phases | managed biological production | Measured live whole animals, offspring and stocks |
| final_collection | Independent nonreturn collection from managed culture | required | Application records prove removal toward delivery rather than sampling-return | independent collection | Measured live whole collected animals |
| grading | Actual live-product grade and destination decision | required | Actual grading and destination record for collected lots | grading and sorting | Measured accepted, alternate and returned states |
| bounded_holding | Bounded post-grade live holding | conditional | active only for observed holding with start/end and intervention; bypass requires direct handoff proof; unknown blocks completion | live-state preservation | Measured live whole animals after the bounded interval |
| presentation | Protective live presentation | required | Actual protective arrangement before dispatch, including evidenced reusable containers | packaging and presentation | Measured presented live whole animals plus separate water/package |
| delivery | Every pre-receipt movement and first physical recipient acceptance | required | All internal/external pre-receipt legs regardless of payer or ownership | delivery and handover | 1 kg accepted live whole animal net wet mass |

Each conditional semantic card expands only from observed actual instances. Output/input pairs share transfer ids and the same physical state/native quantity; declared aqueous wastes sent to water_supply remain waste at both interfaces. Carrier water, packaging, animal stocks and returns remain independent of animal reference mass. Conditional service duration is native h, not material mass. If a real service uses another native property/unit, declare that instance with the matching verified property and unit rather than coercing it into this timed-service collection obligation.

### Process: Seawater preparation and actual effluent management (`water_supply`)

Record raw intake and any purchased water separately, the actual filter/decant/aeration train, metering, backwash, water quality and every consuming phase. This node owns intake and treatment; receiving nodes own their measured supplied water. Do not infer universal effluent treatment or pollutant occurrence.

#### Inputs

##### Product flows

###### Actual electricity supplied to water_supply (`water_supply_electricity`)

Conditional metered electricity for this node only; retain meter interval, supply and attribution. If calculated from equipment records, retain measured power/load/runtime, formula, factor and source for each actual instance.

- Selected flow: Actual electricity supplied to water_supply
- Flow property / unit: Energy / kWh
- Amount rule: Actual independently observed kWh for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_supply`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_water_supply_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual non-electric heat supplied to water_supply (`water_supply_heat`)

Conditional each actual purchased heat/steam energy service in native MJ with state, meter/supplier energy quantity, useful heat boundary and event. Retain steam/material mass separately if physically exchanged. Exclude heat covered by a complete service; no purchased heat is presumed.

- Selected flow: Actual non-electric heat supplied to water_supply
- Flow property / unit: Energy / MJ
- Amount rule: Actual independently observed MJ for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_supply`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_water_supply_heat
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual aqueous waste received for site effluent management (`incoming_effluent`)

Conditional matched receipt from feed_preparation, managed_culture, final_collection, grading, bounded_holding, presentation or delivery only when this node actually manages it; expand each transfer separately. Match type as waste in both interfaces when a waste handoff occurs.

- Selected flow: Actual aqueous waste received for site effluent management
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_supply`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_incoming_effluent
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Seawater actually abstracted from the marine environment (`raw_seawater`)

Measure raw marine intake at the environmental boundary; no other node repeats this abstraction. Record source, volume, intake state, season and return destination. Supplied treated water is a separate technosphere transfer.

- Selected flow: Seawater actually abstracted from the marine environment
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_supply`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_raw_seawater
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conditioned seawater supplied to actual route nodes (`conditioned_seawater`)

Measure separate same-state transfers to managed_culture, feed_preparation, final_collection, bounded_holding and presentation when actually supplied; preserve transfer ids and measured volume, never infer demand from source-paper flow or tank size. Source-context filtration/decanting/aeration is not a new abstraction at use.

- Selected flow: Conditioned seawater supplied to actual route nodes
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_supply`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_conditioned_seawater
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual treated or untreated water returned to the environment (`water_environment_return`)

Conditional measured water discharge volume to the actual marine/freshwater/soil destination, with treatment state and linked influent/effluent records. This water volume is distinct from separately quantified substance-specific actual discharge masses and from waste sent off site.

- Selected flow: Carrier water discharged from site water management
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_supply`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_water_environment_return
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Live and thawed grass-shrimp supply and preparation (`feed_preparation`)

Retain supplier species and capture/culture origin, upstream burdens, delivered live or frozen state, storage, thawing and preparation. Never equate offered feed with ingestion. Attribute refrigeration, preparation, cleaning and remnants across all actual feed consumers and periods.

#### Inputs

##### Product flows

###### Live grass shrimp received for hatchling feed (`received_live_shrimp`)

Record actual Palaemonetes varians identity, live state, lot wet mass, counts if used, capture or culture provenance, upstream production/capture, transport and losses. Keep incidental carrier water separate.

- Selected flow: Live grass shrimp received for hatchling feed
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_preparation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_received_live_shrimp
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen grass shrimp received for later thawed feed (`received_frozen_shrimp`)

Record actual shrimp identity, frozen state and net feed wet mass, supplier origin, upstream burdens, cold storage and previous processing. Frozen feed does not make the animal reference frozen.

- Selected flow: Frozen grass shrimp received for later thawed feed
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_preparation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_received_frozen_shrimp
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual purchased or supplied feed-preparation and cleaning water (`feed_water`)

Conditional measured separately identified freshwater or seawater supply, purpose and state. Link seawater supplied by water_supply when applicable; purchased water carries upstream service and is not duplicated as raw abstraction.

- Selected flow: Actual purchased or supplied feed-preparation and cleaning water
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_preparation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_feed_water
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supplied to feed_preparation (`feed_preparation_electricity`)

Conditional metered electricity for this node only; retain meter interval, supply and attribution. If calculated from equipment records, retain measured power/load/runtime, formula, factor and source for each actual instance.

- Selected flow: Actual electricity supplied to feed_preparation
- Flow property / unit: Energy / kWh
- Amount rule: Actual independently observed kWh for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_preparation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_feed_preparation_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual non-electric heat supplied to feed_preparation (`feed_preparation_heat`)

Conditional each actual purchased heat/steam energy service in native MJ with state, meter/supplier energy quantity, useful heat boundary and event. Retain steam/material mass separately if physically exchanged. Exclude heat covered by a complete service; no purchased heat is presumed.

- Selected flow: Actual non-electric heat supplied to feed_preparation
- Flow property / unit: Energy / MJ
- Amount rule: Actual independently observed MJ for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_preparation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_feed_preparation_heat
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Live grass shrimp supplied to direct hatchling nursery (`prepared_live_feed`)

Matched live-feed transfer to managed_culture with mass, state, time and lot; preparation losses and opening/closing feed stocks remain separate.

- Selected flow: Live grass shrimp supplied to direct hatchling nursery
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_preparation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_prepared_live_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thawed grass shrimp supplied to actual culture or holding (`prepared_thawed_feed`)

Matched thawed-state feed transfer to managed_culture and, only if actual feeding occurs, bounded_holding; each separately measured handoff retains state and lot.

- Selected flow: Thawed grass shrimp supplied to actual culture or holding
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_preparation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_prepared_thawed_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual aqueous waste from feed_preparation (`feed_preparation_aqueous_waste`)

Conditional actual water sent to water_supply or an external treatment recipient, with same transfer id, state, quantity and period at both interfaces. Separate entrained constituents; exclude any direct environmental water release reported separately.

- Selected flow: Actual aqueous waste from feed_preparation
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_preparation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_feed_preparation_aqueous_waste
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual water discharged directly from feed_preparation to the environment (`feed_preparation_water_release`)

Conditional actual direct discharge volume, receiving medium, quality, background load and fate only if this node owns the environmental handoff. Exclude water still transferred to another node or treatment, carrier water handed to a recipient, and separately quantified substance-specific actual discharge mass.

- Selected flow: Actual water discharged directly from feed_preparation to the environment
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_preparation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_feed_preparation_water_release
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Captive reproduction, direct hatchling nursery and flow-through growout (`managed_culture`)

Index captive egg supply and reproductive service, direct hatchling nursery on live grass shrimp, and juvenile/adult seawater flow-through growout on thawed grass shrimp. Keep reproduction, viable and failed eggs, broodstock, mortalities, monitoring returns, cleaning, replacement and termination in the ledger. A narrower actual nonbreeding period needs evidence and inherited upstream service.

#### Inputs

##### Product flows

###### Live grass shrimp offered to direct hatchling nursery (`nursery_live_feed`)

Same-state receipt of prepared_live_feed; measure offered feed independently from ingestion, retain feeding phase, rejected/remnant fate and provenance.

- Selected flow: Live grass shrimp offered to direct hatchling nursery
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_nursery_live_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thawed grass shrimp offered during growout or reproductive service (`growout_thawed_feed`)

Same-state receipt of prepared_thawed_feed, separately by phase, cohort and period; do not use source feeding ratios, food cost or experimental duration as inventory defaults.

- Selected flow: Thawed grass shrimp offered during growout or reproductive service
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_growout_thawed_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioned seawater received for captive culture (`culture_seawater`)

Match conditioned_seawater receipt with meter, source, actual treatment, culture phase and period. Record temperature, salinity and oxygen as actual state/quality observations, not exchanged animal mass or prescribed source values.

- Selected flow: Conditioned seawater received for captive culture
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_culture_seawater
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live whole monitored animals returned to culture (`sampling_live_in`)

Conditional pair to sampling_live_out for the same physical animals; independently record returned quantity/state and actual mortality or missing animals. Carry the original burdens, avoid a second animal output or production credit.

- Selected flow: Live whole monitored animals returned to culture
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sampling_live_in
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supplied to managed_culture (`managed_culture_electricity`)

Conditional metered electricity for this node only; retain meter interval, supply and attribution. If calculated from equipment records, retain measured power/load/runtime, formula, factor and source for each actual instance.

- Selected flow: Actual electricity supplied to managed_culture
- Flow property / unit: Energy / kWh
- Amount rule: Actual independently observed kWh for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_managed_culture_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual non-electric heat supplied to managed_culture (`managed_culture_heat`)

Conditional each actual purchased heat/steam energy service in native MJ with state, meter/supplier energy quantity, useful heat boundary and event. Retain steam/material mass separately if physically exchanged. Exclude heat covered by a complete service; no purchased heat is presumed.

- Selected flow: Actual non-electric heat supplied to managed_culture
- Flow property / unit: Energy / MJ
- Amount rule: Actual independently observed MJ for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_managed_culture_heat
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Live whole common cuttlefish handed from culture to final collection (`culture_to_collection`)

Record animals leaving their actual production context toward independent final collection, with stage, live state, net wet mass and counts; measure this transfer independently and include later losses. It is not forced to 1 kg.

- Selected flow: Live whole common cuttlefish handed from culture to final collection
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_culture_to_collection
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual already-managed carrier seawater handed from culture to final collection (`culture_water_to_collection`)

Conditional actual existing culture water accompanying the independent collection event, with state, volume, quality, time and transfer id paired to culture_water_collection_input. It is neither newly supplied water nor a second environmental abstraction; actual new carrier supply has a separate card.

- Selected flow: Actual already-managed carrier seawater handed from culture to final collection
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_culture_water_to_collection
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live whole animals temporarily removed for actual monitoring (`sampling_live_out`)

Conditional same-state monitoring/sampling loop only if actually performed. Record removed mass/count, custody, time and animal condition, with return id; this is not final collection or sale. Research handling prescriptions are excluded.

- Selected flow: Live whole animals temporarily removed for actual monitoring
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_sampling_live_out
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual aqueous waste from managed_culture (`managed_culture_aqueous_waste`)

Conditional actual water sent to water_supply or an external treatment recipient, with same transfer id, state, quantity and period at both interfaces. Separate entrained constituents; exclude any direct environmental water release reported separately.

- Selected flow: Actual aqueous waste from managed_culture
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_managed_culture_aqueous_waste
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual water discharged directly from managed_culture to the environment (`managed_culture_water_release`)

Conditional actual direct discharge volume, receiving medium, quality, background load and fate only if this node owns the environmental handoff. Exclude water still transferred to another node or treatment, carrier water handed to a recipient, and separately quantified substance-specific actual discharge mass.

- Selected flow: Actual water discharged directly from managed_culture to the environment
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_managed_culture`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_managed_culture_water_release
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Independent nonreturn collection from managed culture (`final_collection`)

This responsibility ends the production context for dispatched animals. Source-paper net/bucket weighing returned animals and supplies no harvest or sale record. Identify the actual independent collection event, equipment and carrier water, live condition, incidental matter, losses and handoff to grading; do not prescribe the research interventions.

#### Inputs

##### Product flows

###### Live whole common cuttlefish entering independent final collection (`collection_animals`)

Match culture_to_collection with same lot, live state, mass, count, period and inherited burdens. Final collection is actual nonreturn removal toward dispatch; do not relabel sampling_live_out as this input.

- Selected flow: Live whole common cuttlefish entering independent final collection
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_collection`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_animals
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual already-managed carrier seawater received from culture (`culture_water_collection_input`)

Conditional same-state receipt of culture_water_to_collection with volume, quality, time and transfer id; no new water supply or abstraction is assigned to this existing water. Reconcile later grading transfer, actual aqueous waste and direct discharge separately.

- Selected flow: Actual already-managed carrier seawater received from culture
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_collection`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_culture_water_collection_input
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual conditioned seawater used during independent collection (`collection_carrier_water`)

Conditional measured carrier water paired to conditioned_seawater or other evidenced supplied water; animal native body water stays within animal wet mass.

- Selected flow: Actual conditioned seawater used during independent collection
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_collection`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_carrier_water
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supplied to final_collection (`final_collection_electricity`)

Conditional metered electricity for this node only; retain meter interval, supply and attribution. If calculated from equipment records, retain measured power/load/runtime, formula, factor and source for each actual instance.

- Selected flow: Actual electricity supplied to final_collection
- Flow property / unit: Energy / kWh
- Amount rule: Actual independently observed kWh for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_collection`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_final_collection_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual non-electric heat supplied to final_collection (`final_collection_heat`)

Conditional each actual purchased heat/steam energy service in native MJ with state, meter/supplier energy quantity, useful heat boundary and event. Retain steam/material mass separately if physically exchanged. Exclude heat covered by a complete service; no purchased heat is presumed.

- Selected flow: Actual non-electric heat supplied to final_collection
- Flow property / unit: Energy / MJ
- Amount rule: Actual independently observed MJ for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_collection`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_final_collection_heat
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Collected unsorted live whole common cuttlefish handed to grading (`collected_to_grading`)

Same-state mass/count and live-condition handoff to collected_grading_input, with independent collection event and timestamp. Keep collection losses, incidental matter and carrier water separate.

- Selected flow: Collected unsorted live whole common cuttlefish handed to grading
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_collection`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collected_to_grading
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual carrier seawater accompanying collected animals to grading (`collection_water_to_grading`)

Conditional same-state transfer matched to grading_carrier_water; quantify free water separately from animals and any aqueous waste.

- Selected flow: Actual carrier seawater accompanying collected animals to grading
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_collection`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_water_to_grading
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable live animals returned during final collection (`collection_live_return`)

Conditional actual same-state return to collect_culture_returned_live with measured mass/count, reason, time and carried burdens; the returned part is outside the collected delivery lot.

- Selected flow: Actual viable live animals returned during final collection
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_collection`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collection_live_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual aqueous waste from final_collection (`final_collection_aqueous_waste`)

Conditional actual water sent to water_supply or an external treatment recipient, with same transfer id, state, quantity and period at both interfaces. Separate entrained constituents; exclude any direct environmental water release reported separately.

- Selected flow: Actual aqueous waste from final_collection
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_collection`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_final_collection_aqueous_waste
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual water discharged directly from final_collection to the environment (`final_collection_water_release`)

Conditional actual direct discharge volume, receiving medium, quality, background load and fate only if this node owns the environmental handoff. Exclude water still transferred to another node or treatment, carrier water handed to a recipient, and separately quantified substance-specific actual discharge mass.

- Selected flow: Actual water discharged directly from final_collection to the environment
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_collection`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_final_collection_water_release
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Actual live-product grade and destination decision (`grading`)

Accept the collected live whole state, record actual criteria and every grade/destination: accepted live delivery, other usable output, live return to culture or regrading, and actual waste. Declare zero only with evidence of nonoccurrence; grade thresholds and values are site records.

#### Inputs

##### Product flows

###### Collected unsorted live whole common cuttlefish received for grading (`collected_grading_input`)

Match collected_to_grading. Record actual size/count, live state, physical integrity, acceptance criterion, intended use and destination; grading does not invent killing, trimming or freezing.

- Selected flow: Collected unsorted live whole common cuttlefish received for grading
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_collected_grading_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual live whole holding, presentation or delivery returns received for regrading (`grading_live_returns`)

Conditional return from holding_live_reject, presentation_live_return or delivery_live_return with custody, same-state live quantity, receipt reason and inherited burdens, paired to the originating output. Never silently add a rejected recipient lot to accepted mass.

- Selected flow: Actual live whole holding, presentation or delivery returns received for regrading
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_grading_live_returns
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual carrier seawater received with collected or returned animals (`grading_carrier_water`)

Conditional paired same-state transfer from collection_water_to_grading or carrier_water_return when delivery records show actual return here; retain volume, quality and fate, never count it as animal product.

- Selected flow: Actual carrier seawater received with collected or returned animals
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_grading_carrier_water
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supplied to grading (`grading_electricity`)

Conditional metered electricity for this node only; retain meter interval, supply and attribution. If calculated from equipment records, retain measured power/load/runtime, formula, factor and source for each actual instance.

- Selected flow: Actual electricity supplied to grading
- Flow property / unit: Energy / kWh
- Amount rule: Actual independently observed kWh for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_grading_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual non-electric heat supplied to grading (`grading_heat`)

Conditional each actual purchased heat/steam energy service in native MJ with state, meter/supplier energy quantity, useful heat boundary and event. Retain steam/material mass separately if physically exchanged. Exclude heat covered by a complete service; no purchased heat is presumed.

- Selected flow: Actual non-electric heat supplied to grading
- Flow property / unit: Energy / MJ
- Amount rule: Actual independently observed MJ for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_grading_heat
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted live whole common cuttlefish after grading (`graded_accepted`)

Actual accepted grade handoff either to bounded_holding or directly to presentation when bypass is evidenced. Record grade, live never-frozen state, net animal wet mass, count and transfer id; do not count both paths.

- Selected flow: Accepted live whole common cuttlefish after grading
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_graded_accepted
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable live animals returned from grading to culture (`graded_culture_return`)

Conditional same-state handoff paired to collect_culture_returned_live; record rejected-for-delivery but viable state, quantity, counts, reason and inherited burden. This differs from downgraded sale or waste.

- Selected flow: Actual viable live animals returned from grading to culture
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_graded_culture_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual carrier seawater handed from grading to holding or presentation (`graded_carrier_water`)

Conditional same-state actual water transfer paired to holding_seawater or presentation_carrier_water, with measured volume, quality, lot and time; no carrier continuation is presumed. Actual aqueous waste or direct discharge uses its own card.

- Selected flow: Actual carrier seawater handed from grading to holding or presentation
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_graded_carrier_water
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual aqueous waste from grading (`grading_aqueous_waste`)

Conditional actual water sent to water_supply or an external treatment recipient, with same transfer id, state, quantity and period at both interfaces. Separate entrained constituents; exclude any direct environmental water release reported separately.

- Selected flow: Actual aqueous waste from grading
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_grading_aqueous_waste
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual water discharged directly from grading to the environment (`grading_water_release`)

Conditional actual direct discharge volume, receiving medium, quality, background load and fate only if this node owns the environmental handoff. Exclude water still transferred to another node or treatment, carrier water handed to a recipient, and separately quantified substance-specific actual discharge mass.

- Selected flow: Actual water discharged directly from grading to the environment
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_grading_water_release
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Bounded post-grade live holding (`bounded_holding`)

Record usable live whole animals before and after the distinct interval, actual water, aeration and any actual feeding or other intervention. Include losses, rejects and water fate. This is not compulsory continuation of growout; a recorded bypass transfers the same accepted state directly to presentation.

#### Inputs

##### Product flows

###### Accepted live whole common cuttlefish received after grading (`holding_accepted_input`)

Active-only same-state receipt of graded_accepted with lot, grade, live condition, net animal wet mass and holding start; bypass has no holding inventory and needs direct transfer proof.

- Selected flow: Accepted live whole common cuttlefish received after grading
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bounded_holding`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_accepted_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioned seawater actually supplied during bounded holding (`holding_seawater`)

Active-only matched conditioned_seawater or graded_carrier_water transfer with same actual state, purpose, measured volume, aeration and water quality. Do not infer holding from the source growout tanks.

- Selected flow: Conditioned seawater actually supplied during bounded holding
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bounded_holding`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_seawater
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual thawed grass shrimp offered during bounded holding (`holding_feed`)

Conditional only when records establish actual feeding in this interval, matched to prepared_thawed_feed; measure separately by feed state and lot, retain remnants and upstream burdens.

- Selected flow: Actual thawed grass shrimp offered during bounded holding
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bounded_holding`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_feed
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supplied to bounded_holding (`bounded_holding_electricity`)

Conditional metered electricity for this node only; retain meter interval, supply and attribution. If calculated from equipment records, retain measured power/load/runtime, formula, factor and source for each actual instance.

- Selected flow: Actual electricity supplied to bounded_holding
- Flow property / unit: Energy / kWh
- Amount rule: Actual independently observed kWh for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bounded_holding`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_bounded_holding_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual non-electric heat supplied to bounded_holding (`bounded_holding_heat`)

Conditional each actual purchased heat/steam energy service in native MJ with state, meter/supplier energy quantity, useful heat boundary and event. Retain steam/material mass separately if physically exchanged. Exclude heat covered by a complete service; no purchased heat is presumed.

- Selected flow: Actual non-electric heat supplied to bounded_holding
- Flow property / unit: Energy / MJ
- Amount rule: Actual independently observed MJ for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bounded_holding`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_bounded_holding_heat
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted live whole common cuttlefish after bounded holding (`held_to_presentation`)

Active-only measured handoff to held_presentation_input, with end time, actual preservation intervention, grade, live state and losses. No fixed survival, duration or shelf-life.

- Selected flow: Accepted live whole common cuttlefish after bounded holding
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bounded_holding`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_held_to_presentation
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable live animals rejected after bounded holding (`holding_live_reject`)

Conditional actual live reject handoff to grading_live_returns or collect_culture_returned_live with matching ids, state, quantities and burden; actual dead material is waste instead.

- Selected flow: Actual viable live animals rejected after bounded holding
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bounded_holding`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_holding_live_reject
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual carrier seawater handed from bounded holding to presentation (`held_carrier_water`)

Active-only actual same-state water transfer matched to presentation_carrier_water, with quantity, quality and lot; do not assume all holding water accompanies animals.

- Selected flow: Actual carrier seawater handed from bounded holding to presentation
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bounded_holding`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_held_carrier_water
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual aqueous waste from bounded_holding (`bounded_holding_aqueous_waste`)

Conditional actual water sent to water_supply or an external treatment recipient, with same transfer id, state, quantity and period at both interfaces. Separate entrained constituents; exclude any direct environmental water release reported separately.

- Selected flow: Actual aqueous waste from bounded_holding
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bounded_holding`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_bounded_holding_aqueous_waste
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual water discharged directly from bounded_holding to the environment (`bounded_holding_water_release`)

Conditional actual direct discharge volume, receiving medium, quality, background load and fate only if this node owns the environmental handoff. Exclude water still transferred to another node or treatment, carrier water handed to a recipient, and separately quantified substance-specific actual discharge mass.

- Selected flow: Actual water discharged directly from bounded_holding to the environment
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bounded_holding`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_bounded_holding_water_release
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Protective live presentation (`presentation`)

Identify incoming accepted unheld or held animals, the actual protective presentation and handoff to delivery. Separate carrier water, packaging and animal body mass. Record reusable ownership, service life, return, cleaning, damage and end-of-use. Movement is owned by delivery, not this node.

#### Inputs

##### Product flows

###### Accepted live whole common cuttlefish after grading (`unheld_presentation_input`)

Bypass-only same-state receipt of graded_accepted; actual direct transfer proves bounded_holding bypass. Unknown holding state cannot use this route.

- Selected flow: Accepted live whole common cuttlefish after grading
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_unheld_presentation_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Accepted live whole common cuttlefish after bounded holding (`held_presentation_input`)

Active-only same-state receipt of held_to_presentation with actual lot/state/quantity/time and burden; internal amount is independent of accepted final mass.

- Selected flow: Accepted live whole common cuttlefish after bounded holding
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_held_presentation_input
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual conditioned seawater used for protective live presentation (`presentation_carrier_water`)

Conditional supplied or reused carrier water with identified source/state and paired volume from conditioned_seawater, graded_carrier_water, held_carrier_water or carrier_water_return when that actual state matches; no duplicate raw abstraction. Separate native animal body water.

- Selected flow: Actual conditioned seawater used for protective live presentation
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_carrier_water
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supplied to presentation (`presentation_electricity`)

Conditional metered electricity for this node only; retain meter interval, supply and attribution. If calculated from equipment records, retain measured power/load/runtime, formula, factor and source for each actual instance.

- Selected flow: Actual electricity supplied to presentation
- Flow property / unit: Energy / kWh
- Amount rule: Actual independently observed kWh for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_presentation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual non-electric heat supplied to presentation (`presentation_heat`)

Conditional each actual purchased heat/steam energy service in native MJ with state, meter/supplier energy quantity, useful heat boundary and event. Retain steam/material mass separately if physically exchanged. Exclude heat covered by a complete service; no purchased heat is presumed.

- Selected flow: Actual non-electric heat supplied to presentation
- Flow property / unit: Energy / MJ
- Amount rule: Actual independently observed MJ for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_heat
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Protectively presented live whole common cuttlefish dispatched (`presented_animals`)

Same-state live-animal transfer to delivery_animals with measured net animal mass/count, grade, presentation and custody. Free water and packaging use their own cards; animal mass does not include them.

- Selected flow: Protectively presented live whole common cuttlefish dispatched
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presented_animals
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual carrier seawater dispatched with live animals (`presented_water`)

Conditional same-state separate transfer to delivery_water with measured volume, source and custody; do not merge with animal or package mass.

- Selected flow: Actual carrier seawater dispatched with live animals
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presented_water
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable live animals returned from presentation (`presentation_live_return`)

Conditional paired return to grading_live_returns or collect_culture_returned_live with same-state measured quantity and carried burdens; do not hide rejected mass in final acceptance.

- Selected flow: Actual viable live animals returned from presentation
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_live_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual aqueous waste from presentation (`presentation_aqueous_waste`)

Conditional actual water sent to water_supply or an external treatment recipient, with same transfer id, state, quantity and period at both interfaces. Separate entrained constituents; exclude any direct environmental water release reported separately.

- Selected flow: Actual aqueous waste from presentation
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_aqueous_waste
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual water discharged directly from presentation to the environment (`presentation_water_release`)

Conditional actual direct discharge volume, receiving medium, quality, background load and fate only if this node owns the environmental handoff. Exclude water still transferred to another node or treatment, carrier water handed to a recipient, and separately quantified substance-specific actual discharge mass.

- Selected flow: Actual water discharged directly from presentation to the environment
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_presentation`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_presentation_water_release
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Every pre-receipt movement and first physical recipient acceptance (`delivery`)

Keep actual dispatch and every movement, including loading/unloading and intermediate custody, until the first independent physical recipient. An invoice is insufficient. Record accepted live never-frozen animals and package/water handoffs separately, as well as rejections, returns and losses. Post-receipt use is outside the reference boundary.

#### Inputs

##### Product flows

###### Protectively presented live whole common cuttlefish received for delivery (`delivery_animals`)

Same-state receipt of presented_animals with net animal wet mass, count, grade, state, time, custody and inherited burdens. Record all transport and handling through first physical acceptance regardless of payer.

- Selected flow: Protectively presented live whole common cuttlefish received for delivery
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_animals
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual carrier seawater received for live delivery (`delivery_water`)

Conditional same-state receipt of presented_water; volume is separate from animal wet mass and package tare, retained through actual handoff, return or waste disposition.

- Selected flow: Actual carrier seawater received for live delivery
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_water
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual electricity supplied to delivery (`delivery_electricity`)

Conditional metered electricity for this node only; retain meter interval, supply and attribution. If calculated from equipment records, retain measured power/load/runtime, formula, factor and source for each actual instance.

- Selected flow: Actual electricity supplied to delivery
- Flow property / unit: Energy / kWh
- Amount rule: Actual independently observed kWh for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_electricity
  - Unit: kWh
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual non-electric heat supplied to delivery (`delivery_heat`)

Conditional each actual purchased heat/steam energy service in native MJ with state, meter/supplier energy quantity, useful heat boundary and event. Retain steam/material mass separately if physically exchanged. Exclude heat covered by a complete service; no purchased heat is presumed.

- Selected flow: Actual non-electric heat supplied to delivery
- Flow property / unit: Energy / MJ
- Amount rule: Actual independently observed MJ for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_heat
  - Unit: MJ
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Whole live never-frozen farmed common cuttlefish at first physical recipient (`live_receipt_reference`)

1 kg; accepted positive same-lot net animal wet mass A divided by that same A using cp_receipt; retain native body water, exclude free/carrier water, incidentals and packaging. Recipient acceptance, live state, species, whole body, never-frozen and nonornamental use require actual records.

- Selected flow: Whole live never-frozen farmed common cuttlefish at first physical recipient
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt`
- Sources: `reference-mass-identity`
- Range: Same positive accepted lot A/A identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-mass-identity`

###### Actual carrier seawater handed to first physical recipient (`recipient_carrier_water`)

Conditional measured same-state water handoff, destination and custody; not reference animal mass or post-receipt disposal. Water returned or discharged before receipt is separately routed.

- Selected flow: Actual carrier seawater handed to first physical recipient
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_recipient_carrier_water
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual reusable carrier seawater returned before or at receipt gate (`carrier_water_return`)

Conditional same-state measured return paired to presentation_carrier_water or grading_carrier_water according to actual receiving records, preserving volume, quality, custody and inherited service; no automatic return credit or disposal abstraction.

- Selected flow: Actual reusable carrier seawater returned before or at receipt gate
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_carrier_water_return
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual viable live whole animals rejected and returned before acceptance (`delivery_live_return`)

Conditional actual same-state quantity, live condition, reason and inherited burdens paired to grading_live_returns or collect_culture_returned_live. The returned lot is outside accepted A and retains failed-delivery burdens.

- Selected flow: Actual viable live whole animals rejected and returned before acceptance
- Flow property / unit: Mass / kg
- Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_live_return
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Actual aqueous waste from delivery (`delivery_aqueous_waste`)

Conditional actual water sent to water_supply or an external treatment recipient, with same transfer id, state, quantity and period at both interfaces. Separate entrained constituents; exclude any direct environmental water release reported separately.

- Selected flow: Actual aqueous waste from delivery
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_aqueous_waste
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Actual water discharged directly from delivery to the environment (`delivery_water_release`)

Conditional actual direct discharge volume, receiving medium, quality, background load and fate only if this node owns the environmental handoff. Exclude water still transferred to another node or treatment, carrier water handed to a recipient, and separately quantified substance-specific actual discharge mass.

- Selected flow: Actual water discharged directly from delivery to the environment
- Flow property / unit: Volume / m3
- Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `cuttlefish-accounting-method`
- Range: Provisional unestablished uncertainty; independent observations required
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: U_delivery_water_release
  - Unit: m3
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| attribute_precedence | foreground burdens | First subdivide independently measured events, phases, outputs and services. Then apply documented causal physical attribution to shared production/asset/service burdens using actual occupancy, operating time or metered demand suited to the burden. Keep the rationale and sensitivity; no universal share or source-paper productivity default. | `cuttlefish-accounting-method` |
| attribute_outputs | intended outputs | Enumerate accepted live animals, each actual alternate animal grade, transferred viable offspring or broodstock, usable incidentals and stocks with handoffs. Retained viable offspring and broodstock carry burdens into their next period; unhatched offspring are carried reproductive service, not delivered adult output. Residue and waste are not silently promoted to co-products or given avoided-product credits. | `cuttlefish-accounting-method` |
| attribute_economic | inseparable joint burdens | Only if subdivision and causal physical attribution cannot resolve an actual joint burden, use comparable nonnegative producer-gate net-sales values for the same period/market/state and a positive total denominator, including defensible retained-stock valuations. Exclude taxes, freight beyond the common gate and unrelated receipts consistently. Missing, zero or negative values require a justified alternative with sensitivity; never allocate by profit or silently set negative shares. | `cuttlefish-accounting-method` |
| attribute_periods | cohorts periods and shared services | Index egg/reproductive service, direct hatchling nursery, growout, collection, grades, holding, presentation, delivery, cleaning/changeover, idle and failed periods, asset replacement and termination. Carry opening quantities and inherited burdens to closing stocks and next-period receipts. Shared-asset service life, use and end-of-life use actual evidence and all consumers including other facility outputs, not only successful reference lots. | `cuttlefish-accounting-method` |
| attribute_once | all exchanges | Assign one owner per event, service and physical transfer. Internal output/input pairs are connectors, not two independent burden-bearing acquisitions or final products. Do not duplicate complete services with component fuel/electricity/assets/releases; reconcile all consumer shares and carry failed/rejected/returned-lot burdens before dividing attributed native quantities by accepted A. | `cuttlefish-accounting-method` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_water_supply | water_supply | All actual native flow instances at this node | Primary records and measurements | intake source/volume and water state; sand-filter/decant/aeration actual train and intervals; every supplied-water consumer/transfer/volume/quality; each incoming-effluent transfer and state; treatment/bypass; discharge destination/volume; influent background and effluent constituent concentrations/loads; backwash/sludge; meters; energy and asset consumers/service life; event/transfer/stock id; calibration; native property/unit; formula/factor/source and uncertainty for calculated instances; accepted A link | Meter marine intake, separately meter actual supplied volumes and matched effluent receipts, identify actual treatment and discharge owner. Sample actual influent and discharge volume/concentrations on matched intervals, retain substance/medium and calculate net release only with explicit measured inputs/formula/factor/source and background adjustment. Weigh actual treatment residues; record meter-calibration and shared service consumers. Record native amounts before one attribution and division by A; qualitative literature is not a quantity record. | kg; m3; kWh; MJ; h; t.km as applicable to each actual instance | Each actual event/transfer/phase and documented continuous-meter interval | Full actual cohort/reporting and service periods, including failures, stocks, cleaning and termination | Seawater preparation and actual effluent management and matched handoffs only | per 1 kg reference flow | Calibration and node-specific original logs; matched ids; independent counts/state; asset/period/output shares; per-instance measured inputs/formula/factor/source and uncertainty |
| cp_feed_preparation | feed_preparation | All actual native flow instances at this node | Primary records and measurements | supplier/species/capture-or-culture origin; received live/frozen state and net feed mass; live/frozen/thawed opening/closing stock; cold-store temperature/time and meter intervals; measured before/after thawing mass and drip; prepared live/thawed transfer ids and masses; cleaning water/materials; remnants and destinations; storage/preparation assets and users; event/transfer/stock id; calibration; native property/unit; formula/factor/source and uncertainty for calculated instances; accepted A link | Verify supplier lot/provenance and upstream capture/culture/cold-chain scope, weigh received and actually prepared feed in each state independently, reconcile opening/closing feed stocks and measured remnants/thawing water. Match live/thawed handoffs to phase/consumer; meter actual cold storage/preparation/cleaning services with attribution, without inferring ingestion from offered feed. Record native amounts before one attribution and division by A; qualitative literature is not a quantity record. | kg; m3; kWh; MJ; h; t.km as applicable to each actual instance | Each actual event/transfer/phase and documented continuous-meter interval | Full actual cohort/reporting and service periods, including failures, stocks, cleaning and termination | Live and thawed grass-shrimp supply and preparation and matched handoffs only | per 1 kg reference flow | Calibration and node-specific original logs; matched ids; independent counts/state; asset/period/output shares; per-instance measured inputs/formula/factor/source and uncertainty |
| cp_managed_culture | managed_culture | All actual native flow instances at this node | Primary records and measurements | captive ancestry; received eggs/hatchlings/juveniles/broodstock stage/mass/count; reproductive service, egg batches/viability/incubation; direct hatchling nursery and adult/growout phases; cohort/period; live/thawed feed offered/remnants; supplied water/quality; actual failure/mortality; sampling out/return; closing stocks; independent collection handoff including existing water/incidental matter; cleaning/termination; shared assets/users; event/transfer/stock id; calibration; native property/unit; formula/factor/source and uncertainty for calculated instances; accepted A link | Build phase/cohort stock and reproductive-service ledgers from actual egg, nursery and growout records, with independently measured mass/count/state and inherited burdens. Match actual feed/water and live/monitoring returns; distinguish unhatched retained offspring, transferred viable outputs and actual failures. Measure the nonreturn culture handoff and accompanying existing water/matter separately from new supply, retaining full cleaning, replacement and termination periods. Record native amounts before one attribution and division by A; qualitative literature is not a quantity record. | kg; m3; kWh; MJ; h; t.km as applicable to each actual instance | Each actual event/transfer/phase and documented continuous-meter interval | Full actual cohort/reporting and service periods, including failures, stocks, cleaning and termination | Captive reproduction, direct hatchling nursery and flow-through growout and matched handoffs only | per 1 kg reference flow | Calibration and node-specific original logs; matched ids; independent counts/state; asset/period/output shares; per-instance measured inputs/formula/factor/source and uncertainty |
| cp_final_collection | final_collection | All actual native flow instances at this node | Primary records and measurements | actual nonreturn event/time and production context; received live whole animals with counts/mass and inherited burden; existing carrier water/incidental matter from culture; any new carrier-water supply; actual equipment/energy/service; collected animal handoff; water and matter by usable/returned/waste/environment destination; live returns and collection losses; event/transfer/stock id; calibration; native property/unit; formula/factor/source and uncertainty for calculated instances; accepted A link | Observe the actual independent removal toward dispatch and distinguish it from research sampling-return. Weigh or reconcile same-state animals, existing water and accompanying matter at culture receipt and grading handoff; separately meter any new supplied water. Record actual usable incidentals, returns, losses and direct discharge/waste destinations, with one owner per equipment/handling event. Record native amounts before one attribution and division by A; qualitative literature is not a quantity record. | kg; m3; kWh; MJ; h; t.km as applicable to each actual instance | Each actual event/transfer/phase and documented continuous-meter interval | Full actual cohort/reporting and service periods, including failures, stocks, cleaning and termination | Independent nonreturn collection from managed culture and matched handoffs only | per 1 kg reference flow | Calibration and node-specific original logs; matched ids; independent counts/state; asset/period/output shares; per-instance measured inputs/formula/factor/source and uncertainty |
| cp_grading | grading | All actual native flow instances at this node | Primary records and measurements | collected and returned lot/state/mass/count; actual acceptance/size/grade criteria and measurements; every accepted/other-usable/returned/waste destination and recipient/time; carried-water receipts and handoffs/fates; holding active/bypass/unknown selection; grading materials/energy/equipment; event/transfer/stock id; calibration; native property/unit; formula/factor/source and uncertainty for calculated instances; accepted A link | Independently record actual incoming states and observed grade/destination decisions, then measure each outgoing animal state and water handoff. Match accepted lots to active holding or evidenced direct presentation, viable returns to their receiving node and other usable products to actual physical recipient; record actual waste separately and do not invent universal grade thresholds. Record native amounts before one attribution and division by A; qualitative literature is not a quantity record. | kg; m3; kWh; MJ; h; t.km as applicable to each actual instance | Each actual event/transfer/phase and documented continuous-meter interval | Full actual cohort/reporting and service periods, including failures, stocks, cleaning and termination | Actual live-product grade and destination decision and matched handoffs only | per 1 kg reference flow | Calibration and node-specific original logs; matched ids; independent counts/state; asset/period/output shares; per-instance measured inputs/formula/factor/source and uncertainty |
| cp_bounded_holding | bounded_holding | All actual native flow instances at this node | Primary records and measurements | active/bypass/unknown proof; actual start/end time; incoming/outgoing accepted lot/state/mass/count; intervention type; supplied/carried water volume and quality/aeration; actual feeding if any; energy/carriers/equipment; live rejects/mortality; water handoff/waste/discharge; direct bypass transfer record; event/transfer/stock id; calibration; native property/unit; formula/factor/source and uncertainty for calculated instances; accepted A link | For active intervals observe usable live state before and after, actual bounded start/end, actual water/aeration and any evidenced feeding/intervention. Independently measure outgoing animals/water, rejects/losses and disposition. For bypass retain matched grading-to-presentation transfer proof; unknown cannot become a zero row or bypass. Separate the interval from managed growout. Record native amounts before one attribution and division by A; qualitative literature is not a quantity record. | kg; m3; kWh; MJ; h; t.km as applicable to each actual instance | Each actual event/transfer/phase and documented continuous-meter interval | Full actual cohort/reporting and service periods, including failures, stocks, cleaning and termination | Bounded post-grade live holding and matched handoffs only | per 1 kg reference flow | Calibration and node-specific original logs; matched ids; independent counts/state; asset/period/output shares; per-instance measured inputs/formula/factor/source and uncertainty |
| cp_presentation | presentation | All actual native flow instances at this node | Primary records and measurements | actual accepted unheld/held input selection; live animal lot/state/mass/count; carrier-water source/volume/quality; package material/tare/ownership/new or reused/turns; opening/closing/returned package stock and condition; actual protection arrangement; cleaning/repair/damage/end-of-use; separately dispatched animal/water/package transfer ids; event/transfer/stock id; calibration; native property/unit; formula/factor/source and uncertainty for calculated instances; accepted A link | Verify the actual unheld/held path and actual live protection, separately weigh animals and package tare and meter carrier water, retaining native animal body water. Measure package stock/return/new supply and attributable turns/service life, cleaning/repair and rejects; pair animal, carrier-water and package dispatch to separate delivery receipts. Do not record freight or duplicate movement here. Record native amounts before one attribution and division by A; qualitative literature is not a quantity record. | kg; m3; kWh; MJ; h; t.km as applicable to each actual instance | Each actual event/transfer/phase and documented continuous-meter interval | Full actual cohort/reporting and service periods, including failures, stocks, cleaning and termination | Protective live presentation and matched handoffs only | per 1 kg reference flow | Calibration and node-specific original logs; matched ids; independent counts/state; asset/period/output shares; per-instance measured inputs/formula/factor/source and uncertainty |
| cp_delivery | delivery | All actual native flow instances at this node | Primary records and measurements | dispatch animal/water/package ids and quantities; every pre-receipt leg/time/distance/mode/carrier/payer/custody; actual loaded animal/water/package mass and co-load; loading/unloading/waiting owner; complete-freight versus component scope; fuel/electricity/asset hours; actual recipient and acceptance time/live state/grade/net mass A; side outputs/rejections/returns/water/package destinations; event/transfer/stock id; calibration; native property/unit; formula/factor/source and uncertainty for calculated instances; accepted A link | Reconcile every actual movement and custody record to first independent physical receipt, regardless of payer. Calculate actual t.km from measured loaded mass/distance/co-load, retain carrier water and tare in freight load but outside animal A. Assign loading/unloading/waiting once to complete freight or separately measured component handling. Match actual accepted A through cp_receipt and separately measure every reject, return and water/package handoff. Record native amounts before one attribution and division by A; qualitative literature is not a quantity record. | kg; m3; kWh; MJ; h; t.km as applicable to each actual instance | Each actual event/transfer/phase and documented continuous-meter interval | Full actual cohort/reporting and service periods, including failures, stocks, cleaning and termination | Every pre-receipt movement and first physical recipient acceptance and matched handoffs only | per 1 kg reference flow | Calibration and node-specific original logs; matched ids; independent counts/state; asset/period/output shares; per-instance measured inputs/formula/factor/source and uncertainty |
| cp_receipt | delivery | Accepted reference product mass and physical acceptance | Calibrated weighing and receipt observations | same lot id; recipient; receipt date/time; species; origin; whole/live/never-frozen/nonornamental evidence; actual grade; count; animal net wet mass A; gross/tare/carrier-free-water handling; scale calibration; same-lot sample weights/design/uncertainty if used | Independently weigh accepted whole live animals on a calibrated scale with actual carrier/free-water and package-tare separation, retaining native animal body water; reconcile same-lot independent count/condition and physical recipient acceptance. For sampled count conversion weigh representative live samples of that same lot/state and retain uncertainty. | kg | Each actual accepted lot and receipt event | Same positive accepted lot at physical receipt with complete pre-receipt cohort attribution | First physical recipient; delivery node | per 1 kg reference flow | Calibration; raw net/gross/tare/water method; recipient custody/condition record; independent count/grade; same-lot sample design and uncertainty; positive A |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| reference_identity | live_receipt_reference | A / A = 1; A is the same positive actual accepted net animal wet mass from cp_receipt. | A; cp_receipt | 1 kg reference flow | `reference-mass-identity` |
| period_ledger | all inventory rows | Divide each measured or calculated attributable native quantity by accepted A after one documented event/period/output allocation; keep the native quantity, allocation share, source records and resulting unit per reference. No internal feed or transfer is fixed to final mass. | Native quantity; allocation ledger; A; node protocol; cp_receipt | Native quantity per 1 kg reference flow | `cuttlefish-accounting-method` |
| actual_energy | actual calculated electricity instances | Use measured meter differences or measured equipment power, load and runtime; retain each actual formula, factor, factor source, period and allocation and convert native energy units explicitly before division by A. A research flow/tank setting is not a measured electricity input. | Meter start/end or measured power/load/runtime; formula and factor/source; node protocol; A | Calculated electricity per 1 kg reference flow | `cuttlefish-accounting-method` |
| actual_release | actual calculated release instances | Use actual measured activity/concentration, sampled volume or measured fuel and substance-specific applicable factor; retain per-instance formula, factor/source, medium, background adjustment and uncertainty. Do not infer pollutant identity from feed type or assign generic release defaults. | Measured instance inputs; substance and medium; formula; factor/source; node protocol; A | Calculated identified release per 1 kg reference flow | `cuttlefish-accounting-method` |
| actual_freight | collect_delivery_transport | For each actual component-compatible leg multiply actual carried load mass in tonnes by actual distance in km and apply documented co-load allocation once; retain carrier water/package load and all pre-receipt legs. | Actual load; distance; mode; leg; co-load share; cp_delivery; A | t.km per 1 kg reference flow | `cuttlefish-accounting-method` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | animal and feed lots | Prove actual species, captive ancestry, received stage, live never-frozen final state, nonornamental use and physical custody. Qualitative literature supports route selection only, not collected quantities. | Supplier and cohort ancestry; actual condition, grade and receipt records |
| quantity_quality | all rows | Retain calibration/tare/carrier separation, independently observed counts/grade, paired transfers, stock ledgers and same-lot sampling uncertainty. Independent historic/site reference samples must support empirical guardrails; a current batch maximum cannot validate itself. | Scale/meter logs; transfer/stock ids; sampling design; independent QA dataset |
| coverage_quality | periods nodes and assets | Cover failed and idle periods, full claimed reproduction, mortality, feed preparation/remnants, cleaning/changeover, shared assets and all consumers, actual package turns and all pre-receipt movements. Unknown conditions block completion. | Event ledger; asset/service-life ledger; consumer shares; actual active/bypass proof |
| range_quality | all ranges | Except the final same-lot identity, 0..U_row uncertainty ranges are provisional reasoned placeholders without established finite upper bounds, never measured values, defaults, limits or evidence of zero. Replace with independent actual observations and reviewed uncertainty before final dataset use. | Actual independent records and reviewed quantity/uncertainty derivation |
| binding_quality | all exchange cards and collection obligations | Before final TIDAS exchanges each actual independent supply, waste, release and animal state must have verified concrete flow/property/unit identities; collection obligations are not automatic UUID bindings. | Exact detail/property/unit evidence and methodology review |
| `collect_water_supply_materials` | `water_supply`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual consumables used by water_supply. Conditional separately identified cleaning, monitoring, repair or protective consumables. Retain formulation, function, quantity and upstream burden; exclude separately declared feed, water and packages. No research anesthesia, tagging or DNA procedure is prescribed. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_water_supply` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_water_supply_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_water_supply_service` | `water_supply`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual equipment and shared-asset service used by water_supply. Conditional measured attributable equipment/shared-asset operating or occupied-service time only, with asset identity, consuming nodes, service period, installation, maintenance, replacement, idle/failed periods and end-of-life. This is not a mandatory unit for every provider service: independently declare each other actual provider service with its native property/unit and measured quantity before final exchange binding. Complete purchased service excludes covered component energy, materials, assets and releases; component modelling excludes that complete service. At delivery this timed-service obligation covers only separately evidenced handling/waiting/equipment outside any complete freight scope; loading/unloading already covered by freight cannot recur here. <br> - Flow property / unit: Service duration / h <br> - Amount rule: Actual independently observed h for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_water_supply` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_water_supply_service <br> - Unit: h <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_water_supply_fuel` | `water_supply`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual mass-measured non-electric energy carriers used by water_supply. Conditional each actual liquid/solid fuel carrier measured in its native mass with substance/state, quantity, use, supplier upstream burden and equipment/event. Preserve measured kg and any explicit traceable density/energy conversion inputs and factor/source. Exclude carriers covered by a complete provider service; never put fuels in the consumable-material card. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_water_supply` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_water_supply_fuel <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_water_supply_gaseous_fuel` | `water_supply`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual volume-measured gaseous energy carriers used by water_supply. Conditional each actual gaseous fuel measured in native m3 with substance, temperature/pressure and reference-volume basis, quantity, use, supplier upstream burden and event. Retain measured volume and any conversion factor/source. Exclude complete-service coverage; do not force gas volume into kg or h. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_water_supply` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_water_supply_gaseous_fuel <br> - Unit: m3 <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_water_supply_solid_waste` | `water_supply`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual solid waste from water_supply. Conditional separately identified mortal animals, rejected material, feed remnants, cleaning sludge or damaged consumables, as applicable to this node; retain wet/dry state, destination and treatment responsibility. Usable products and retained stocks are not waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_water_supply` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_water_supply_solid_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_water_supply_releases` | `water_supply`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual identified direct releases from water_supply. Conditional per actual substance and receiving medium only. Distinguish directly measured raw release mass from raw release mass calculated from measured concentration/volume or measured activity and an applicable factor. Raw direct measurements are collected_record; factor/concentration-derived and reference-normalized amounts are calculated_value/calculated_from_collection. Retain substance/species or particle size, air/water/soil compartment, time, measured activity/concentration, sampled volume, formula, factor/source and uncertainty for each instance. Exclude influent background load and releases covered by complete services; broad organic/pollutant labels do not identify emissions. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_water_supply and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_water_supply` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_water_supply_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_feed_opening_stock` | `feed_preparation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Opening feed stock with inherited cold-chain burdens. Conditional period opening stock, separately by live/frozen/thawed state and native wet mass; retain previous quantity, loss and attributed burden. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_feed_preparation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_feed_opening_stock <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_feed_preparation_materials` | `feed_preparation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual consumables used by feed_preparation. Conditional separately identified cleaning, monitoring, repair or protective consumables. Retain formulation, function, quantity and upstream burden; exclude separately declared feed, water and packages. No research anesthesia, tagging or DNA procedure is prescribed. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_feed_preparation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_feed_preparation_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_feed_preparation_service` | `feed_preparation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual equipment and shared-asset service used by feed_preparation. Conditional measured attributable equipment/shared-asset operating or occupied-service time only, with asset identity, consuming nodes, service period, installation, maintenance, replacement, idle/failed periods and end-of-life. This is not a mandatory unit for every provider service: independently declare each other actual provider service with its native property/unit and measured quantity before final exchange binding. Complete purchased service excludes covered component energy, materials, assets and releases; component modelling excludes that complete service. At delivery this timed-service obligation covers only separately evidenced handling/waiting/equipment outside any complete freight scope; loading/unloading already covered by freight cannot recur here. <br> - Flow property / unit: Service duration / h <br> - Amount rule: Actual independently observed h for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_feed_preparation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_feed_preparation_service <br> - Unit: h <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_feed_preparation_fuel` | `feed_preparation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual mass-measured non-electric energy carriers used by feed_preparation. Conditional each actual liquid/solid fuel carrier measured in its native mass with substance/state, quantity, use, supplier upstream burden and equipment/event. Preserve measured kg and any explicit traceable density/energy conversion inputs and factor/source. Exclude carriers covered by a complete provider service; never put fuels in the consumable-material card. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_feed_preparation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_feed_preparation_fuel <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_feed_preparation_gaseous_fuel` | `feed_preparation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual volume-measured gaseous energy carriers used by feed_preparation. Conditional each actual gaseous fuel measured in native m3 with substance, temperature/pressure and reference-volume basis, quantity, use, supplier upstream burden and event. Retain measured volume and any conversion factor/source. Exclude complete-service coverage; do not force gas volume into kg or h. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_feed_preparation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_feed_preparation_gaseous_fuel <br> - Unit: m3 <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_feed_closing_stock` | `feed_preparation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Closing feed stock carrying attributable burdens. Conditional measured stock by same actual live/frozen/thawed state, lot and custody; pair to following period opening stock without second acquisition or burden reset. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_feed_preparation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_feed_closing_stock <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_feed_preparation_solid_waste` | `feed_preparation`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual solid waste from feed_preparation. Conditional separately identified mortal animals, rejected material, feed remnants, cleaning sludge or damaged consumables, as applicable to this node; retain wet/dry state, destination and treatment responsibility. Usable products and retained stocks are not waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_feed_preparation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_feed_preparation_solid_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_feed_preparation_releases` | `feed_preparation`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual identified direct releases from feed_preparation. Conditional per actual substance and receiving medium only. Distinguish directly measured raw release mass from raw release mass calculated from measured concentration/volume or measured activity and an applicable factor. Raw direct measurements are collected_record; factor/concentration-derived and reference-normalized amounts are calculated_value/calculated_from_collection. Retain substance/species or particle size, air/water/soil compartment, time, measured activity/concentration, sampled volume, formula, factor/source and uncertainty for each instance. Exclude influent background load and releases covered by complete services; broad organic/pollutant labels do not identify emissions. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_feed_preparation and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_feed_preparation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_feed_preparation_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_received_captive_animals` | `managed_culture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Received captive eggs, hatchlings, juveniles or broodstock. Record each actual starting material separately with species, stage, live/viable state, actual wet mass and independent counts, captive ancestry and supplier, date, inherited reproductive/nursery/growout burdens and transport. Eggs do not equal delivered adult animal mass. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_received_captive_animals <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_culture_opening_stock` | `managed_culture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Opening captive live-animal and viable-offspring stock. Conditional measured opening eggs, direct hatchlings, juveniles, adults and broodstock by stage and lot, with inherited quantity and burdens. Retained reproductive service follows its offspring and stocks; unhatched eggs are not delivered live-animal output. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_culture_opening_stock <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_culture_returned_live` | `managed_culture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual viable live animals returned to managed culture. Conditional same-state return from final_collection, grading, bounded_holding, presentation or delivery with paired output ids, measured mass, count, live state, time and inherited burdens. A return is not new captive production or a negative loss. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_culture_returned_live <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_culture_matter_return_input` | `managed_culture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual incidental matter returned from final collection to culture. Conditional same-state receipt of collect_collection_matter_return, identity, measured mass, reason, time and inherited burdens; never infer a return or duplicate it as newly purchased material. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_culture_matter_return_input <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_managed_culture_materials` | `managed_culture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual consumables used by managed_culture. Conditional separately identified cleaning, monitoring, repair or protective consumables. Retain formulation, function, quantity and upstream burden; exclude separately declared feed, water and packages. No research anesthesia, tagging or DNA procedure is prescribed. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_managed_culture_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_managed_culture_service` | `managed_culture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual equipment and shared-asset service used by managed_culture. Conditional measured attributable equipment/shared-asset operating or occupied-service time only, with asset identity, consuming nodes, service period, installation, maintenance, replacement, idle/failed periods and end-of-life. This is not a mandatory unit for every provider service: independently declare each other actual provider service with its native property/unit and measured quantity before final exchange binding. Complete purchased service excludes covered component energy, materials, assets and releases; component modelling excludes that complete service. At delivery this timed-service obligation covers only separately evidenced handling/waiting/equipment outside any complete freight scope; loading/unloading already covered by freight cannot recur here. <br> - Flow property / unit: Service duration / h <br> - Amount rule: Actual independently observed h for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_managed_culture_service <br> - Unit: h <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_managed_culture_fuel` | `managed_culture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual mass-measured non-electric energy carriers used by managed_culture. Conditional each actual liquid/solid fuel carrier measured in its native mass with substance/state, quantity, use, supplier upstream burden and equipment/event. Preserve measured kg and any explicit traceable density/energy conversion inputs and factor/source. Exclude carriers covered by a complete provider service; never put fuels in the consumable-material card. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_managed_culture_fuel <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_managed_culture_gaseous_fuel` | `managed_culture`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual volume-measured gaseous energy carriers used by managed_culture. Conditional each actual gaseous fuel measured in native m3 with substance, temperature/pressure and reference-volume basis, quantity, use, supplier upstream burden and event. Retain measured volume and any conversion factor/source. Exclude complete-service coverage; do not force gas volume into kg or h. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_managed_culture_gaseous_fuel <br> - Unit: m3 <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_culture_matter_to_collection` | `managed_culture`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual incidental matter handed with culture animals to final collection. Conditional each actual nonanimal accompanying material with identity/state, measured mass, lot and transfer id paired to collect_culture_matter_collection_input. No incidental occurrence or usable destination is presumed; final collection records usable handoff, actual waste or return. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_culture_matter_to_collection <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_culture_other_products` | `managed_culture`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual viable offspring or other intended captive animal outputs. Conditional independent handoff of viable eggs, hatchlings or broodstock for other actual uses; identify each stage/state, intended use, actual recipient and quantities. They require attribution and are not the adult reference. Unhatched retained offspring remain reproductive-service stock. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_culture_other_products <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_culture_closing_stock` | `managed_culture`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Closing captive live-animal, broodstock and viable-offspring stock. Conditional period closing quantity/state and inherited attributable burdens for each stage and cohort. Pair to next period opening stock. Retained live animals are not an unreported delivered product, zero-burden sink or disposal. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_culture_closing_stock <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_managed_culture_solid_waste` | `managed_culture`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual solid waste from managed_culture. Conditional separately identified mortal animals, rejected material, feed remnants, cleaning sludge or damaged consumables, as applicable to this node; retain wet/dry state, destination and treatment responsibility. Usable products and retained stocks are not waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_managed_culture_solid_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_managed_culture_releases` | `managed_culture`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual identified direct releases from managed_culture. Conditional per actual substance and receiving medium only. Distinguish directly measured raw release mass from raw release mass calculated from measured concentration/volume or measured activity and an applicable factor. Raw direct measurements are collected_record; factor/concentration-derived and reference-normalized amounts are calculated_value/calculated_from_collection. Retain substance/species or particle size, air/water/soil compartment, time, measured activity/concentration, sampled volume, formula, factor/source and uncertainty for each instance. Exclude influent background load and releases covered by complete services; broad organic/pollutant labels do not identify emissions. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_managed_culture and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_managed_culture` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_managed_culture_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_culture_matter_collection_input` | `final_collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual incidental matter received with culture animals. Conditional same-state receipt of each actual collect_culture_matter_to_collection instance, with identity, mass, lot and handoff. Reconcile usable collect_collection_usable_incidentals, actual waste or return by observed destination. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_final_collection` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_culture_matter_collection_input <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_final_collection_materials` | `final_collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual consumables used by final_collection. Conditional separately identified cleaning, monitoring, repair or protective consumables. Retain formulation, function, quantity and upstream burden; exclude separately declared feed, water and packages. No research anesthesia, tagging or DNA procedure is prescribed. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_final_collection` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_final_collection_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_final_collection_service` | `final_collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual equipment and shared-asset service used by final_collection. Conditional measured attributable equipment/shared-asset operating or occupied-service time only, with asset identity, consuming nodes, service period, installation, maintenance, replacement, idle/failed periods and end-of-life. This is not a mandatory unit for every provider service: independently declare each other actual provider service with its native property/unit and measured quantity before final exchange binding. Complete purchased service excludes covered component energy, materials, assets and releases; component modelling excludes that complete service. At delivery this timed-service obligation covers only separately evidenced handling/waiting/equipment outside any complete freight scope; loading/unloading already covered by freight cannot recur here. <br> - Flow property / unit: Service duration / h <br> - Amount rule: Actual independently observed h for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_final_collection` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_final_collection_service <br> - Unit: h <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_final_collection_fuel` | `final_collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual mass-measured non-electric energy carriers used by final_collection. Conditional each actual liquid/solid fuel carrier measured in its native mass with substance/state, quantity, use, supplier upstream burden and equipment/event. Preserve measured kg and any explicit traceable density/energy conversion inputs and factor/source. Exclude carriers covered by a complete provider service; never put fuels in the consumable-material card. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_final_collection` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_final_collection_fuel <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_final_collection_gaseous_fuel` | `final_collection`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual volume-measured gaseous energy carriers used by final_collection. Conditional each actual gaseous fuel measured in native m3 with substance, temperature/pressure and reference-volume basis, quantity, use, supplier upstream burden and event. Retain measured volume and any conversion factor/source. Exclude complete-service coverage; do not force gas volume into kg or h. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_final_collection` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_final_collection_gaseous_fuel <br> - Unit: m3 <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_usable_incidentals` | `final_collection`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual usable incidental material handed to another recipient. Conditional identified nonanimal material with separate intended use and recipient; if no usable handoff exists classify actual rejected matter as waste, not co-product. No occurrence is presumed. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_final_collection` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_usable_incidentals <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_collection_matter_return` | `final_collection`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual incidental matter returned from collection to managed culture. Conditional actual same-state output paired to collect_culture_matter_return_input with identity, measured mass, purpose, time and carried burden; record observed return separately from usable external handoff and waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_final_collection` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_collection_matter_return <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_final_collection_solid_waste` | `final_collection`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual solid waste from final_collection. Conditional separately identified mortal animals, rejected material, feed remnants, cleaning sludge or damaged consumables, as applicable to this node; retain wet/dry state, destination and treatment responsibility. Usable products and retained stocks are not waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_final_collection` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_final_collection_solid_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_final_collection_releases` | `final_collection`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual identified direct releases from final_collection. Conditional per actual substance and receiving medium only. Distinguish directly measured raw release mass from raw release mass calculated from measured concentration/volume or measured activity and an applicable factor. Raw direct measurements are collected_record; factor/concentration-derived and reference-normalized amounts are calculated_value/calculated_from_collection. Retain substance/species or particle size, air/water/soil compartment, time, measured activity/concentration, sampled volume, formula, factor/source and uncertainty for each instance. Exclude influent background load and releases covered by complete services; broad organic/pollutant labels do not identify emissions. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_final_collection and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_final_collection` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_final_collection_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_grading_materials` | `grading`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual consumables used by grading. Conditional separately identified cleaning, monitoring, repair or protective consumables. Retain formulation, function, quantity and upstream burden; exclude separately declared feed, water and packages. No research anesthesia, tagging or DNA procedure is prescribed. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_grading` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_grading_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_grading_service` | `grading`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual equipment and shared-asset service used by grading. Conditional measured attributable equipment/shared-asset operating or occupied-service time only, with asset identity, consuming nodes, service period, installation, maintenance, replacement, idle/failed periods and end-of-life. This is not a mandatory unit for every provider service: independently declare each other actual provider service with its native property/unit and measured quantity before final exchange binding. Complete purchased service excludes covered component energy, materials, assets and releases; component modelling excludes that complete service. At delivery this timed-service obligation covers only separately evidenced handling/waiting/equipment outside any complete freight scope; loading/unloading already covered by freight cannot recur here. <br> - Flow property / unit: Service duration / h <br> - Amount rule: Actual independently observed h for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_grading` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_grading_service <br> - Unit: h <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_grading_fuel` | `grading`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual mass-measured non-electric energy carriers used by grading. Conditional each actual liquid/solid fuel carrier measured in its native mass with substance/state, quantity, use, supplier upstream burden and equipment/event. Preserve measured kg and any explicit traceable density/energy conversion inputs and factor/source. Exclude carriers covered by a complete provider service; never put fuels in the consumable-material card. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_grading` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_grading_fuel <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_grading_gaseous_fuel` | `grading`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual volume-measured gaseous energy carriers used by grading. Conditional each actual gaseous fuel measured in native m3 with substance, temperature/pressure and reference-volume basis, quantity, use, supplier upstream burden and event. Retain measured volume and any conversion factor/source. Exclude complete-service coverage; do not force gas volume into kg or h. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_grading` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_grading_gaseous_fuel <br> - Unit: m3 <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_graded_other_usable` | `grading`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual other usable whole-animal grade handed to its recipient. Conditional downgraded or alternate intended live output with actual grade, use and physical recipient; quantify separately and attribute burdens. Dead/frozen/processed animals cannot be the live reference; retain actual side-output identity rather than relabel it. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_grading` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_graded_other_usable <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_grading_solid_waste` | `grading`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual solid waste from grading. Conditional separately identified mortal animals, rejected material, feed remnants, cleaning sludge or damaged consumables, as applicable to this node; retain wet/dry state, destination and treatment responsibility. Usable products and retained stocks are not waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_grading` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_grading_solid_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_grading_releases` | `grading`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual identified direct releases from grading. Conditional per actual substance and receiving medium only. Distinguish directly measured raw release mass from raw release mass calculated from measured concentration/volume or measured activity and an applicable factor. Raw direct measurements are collected_record; factor/concentration-derived and reference-normalized amounts are calculated_value/calculated_from_collection. Retain substance/species or particle size, air/water/soil compartment, time, measured activity/concentration, sampled volume, formula, factor/source and uncertainty for each instance. Exclude influent background load and releases covered by complete services; broad organic/pollutant labels do not identify emissions. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_grading and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_grading` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_grading_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_bounded_holding_materials` | `bounded_holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual consumables used by bounded_holding. Conditional separately identified cleaning, monitoring, repair or protective consumables. Retain formulation, function, quantity and upstream burden; exclude separately declared feed, water and packages. No research anesthesia, tagging or DNA procedure is prescribed. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_bounded_holding` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_bounded_holding_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_bounded_holding_service` | `bounded_holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual equipment and shared-asset service used by bounded_holding. Conditional measured attributable equipment/shared-asset operating or occupied-service time only, with asset identity, consuming nodes, service period, installation, maintenance, replacement, idle/failed periods and end-of-life. This is not a mandatory unit for every provider service: independently declare each other actual provider service with its native property/unit and measured quantity before final exchange binding. Complete purchased service excludes covered component energy, materials, assets and releases; component modelling excludes that complete service. At delivery this timed-service obligation covers only separately evidenced handling/waiting/equipment outside any complete freight scope; loading/unloading already covered by freight cannot recur here. <br> - Flow property / unit: Service duration / h <br> - Amount rule: Actual independently observed h for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_bounded_holding` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_bounded_holding_service <br> - Unit: h <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_bounded_holding_fuel` | `bounded_holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual mass-measured non-electric energy carriers used by bounded_holding. Conditional each actual liquid/solid fuel carrier measured in its native mass with substance/state, quantity, use, supplier upstream burden and equipment/event. Preserve measured kg and any explicit traceable density/energy conversion inputs and factor/source. Exclude carriers covered by a complete provider service; never put fuels in the consumable-material card. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_bounded_holding` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_bounded_holding_fuel <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_bounded_holding_gaseous_fuel` | `bounded_holding`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual volume-measured gaseous energy carriers used by bounded_holding. Conditional each actual gaseous fuel measured in native m3 with substance, temperature/pressure and reference-volume basis, quantity, use, supplier upstream burden and event. Retain measured volume and any conversion factor/source. Exclude complete-service coverage; do not force gas volume into kg or h. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_bounded_holding` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_bounded_holding_gaseous_fuel <br> - Unit: m3 <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_bounded_holding_solid_waste` | `bounded_holding`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual solid waste from bounded_holding. Conditional separately identified mortal animals, rejected material, feed remnants, cleaning sludge or damaged consumables, as applicable to this node; retain wet/dry state, destination and treatment responsibility. Usable products and retained stocks are not waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_bounded_holding` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_bounded_holding_solid_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_bounded_holding_releases` | `bounded_holding`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual identified direct releases from bounded_holding. Conditional per actual substance and receiving medium only. Distinguish directly measured raw release mass from raw release mass calculated from measured concentration/volume or measured activity and an applicable factor. Raw direct measurements are collected_record; factor/concentration-derived and reference-normalized amounts are calculated_value/calculated_from_collection. Retain substance/species or particle size, air/water/soil compartment, time, measured activity/concentration, sampled volume, formula, factor/source and uncertainty for each instance. Exclude influent background load and releases covered by complete services; broad organic/pollutant labels do not identify emissions. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_bounded_holding and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_bounded_holding` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_bounded_holding_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_package` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual protective containers and presentation materials. Identify each actual package/material and function, new/reusable ownership, measured tare and condition. Apply measured service-life/turn attribution for reusable items; no assumed single-use pack or free reusable asset. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_package <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_package_return` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual reusable protective packages returned for presentation. Conditional paired physical return from delivery with same material/state/quantity, prior burden, condition, cleaning, repair and loss; do not record as new virgin package supply. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_package_return <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_package_opening_stock` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual opening protective-package stock. Conditional same-state measured opening package stock by material, condition and ownership, with inherited service burden and prior closing-stock id; not virgin supply. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_package_opening_stock <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_materials` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual consumables used by presentation. Conditional separately identified cleaning, monitoring, repair or protective consumables. Retain formulation, function, quantity and upstream burden; exclude separately declared feed, water and packages. No research anesthesia, tagging or DNA procedure is prescribed. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_service` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual equipment and shared-asset service used by presentation. Conditional measured attributable equipment/shared-asset operating or occupied-service time only, with asset identity, consuming nodes, service period, installation, maintenance, replacement, idle/failed periods and end-of-life. This is not a mandatory unit for every provider service: independently declare each other actual provider service with its native property/unit and measured quantity before final exchange binding. Complete purchased service excludes covered component energy, materials, assets and releases; component modelling excludes that complete service. At delivery this timed-service obligation covers only separately evidenced handling/waiting/equipment outside any complete freight scope; loading/unloading already covered by freight cannot recur here. <br> - Flow property / unit: Service duration / h <br> - Amount rule: Actual independently observed h for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_service <br> - Unit: h <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_fuel` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual mass-measured non-electric energy carriers used by presentation. Conditional each actual liquid/solid fuel carrier measured in its native mass with substance/state, quantity, use, supplier upstream burden and equipment/event. Preserve measured kg and any explicit traceable density/energy conversion inputs and factor/source. Exclude carriers covered by a complete provider service; never put fuels in the consumable-material card. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_fuel <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_gaseous_fuel` | `presentation`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual volume-measured gaseous energy carriers used by presentation. Conditional each actual gaseous fuel measured in native m3 with substance, temperature/pressure and reference-volume basis, quantity, use, supplier upstream burden and event. Retain measured volume and any conversion factor/source. Exclude complete-service coverage; do not force gas volume into kg or h. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_gaseous_fuel <br> - Unit: m3 <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_package_closing_stock` | `presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual closing protective-package stock. Conditional same-state measured closing package stock, material, condition and ownership paired to next-period collect_package_opening_stock, with service/replacement/termination and inherited burden; do not duplicate in dispatched or returned packages. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_package_closing_stock <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presented_package` | `presentation`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual protective packages dispatched with live animals. Same-state separate transfer to collect_delivery_package, actual material/tare/condition/ownership, reuse and final handoff or return record. Package burden follows the allocated service rather than being counted at both nodes. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presented_package <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_solid_waste` | `presentation`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual solid waste from presentation. Conditional separately identified mortal animals, rejected material, feed remnants, cleaning sludge or damaged consumables, as applicable to this node; retain wet/dry state, destination and treatment responsibility. Usable products and retained stocks are not waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_solid_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_presentation_releases` | `presentation`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual identified direct releases from presentation. Conditional per actual substance and receiving medium only. Distinguish directly measured raw release mass from raw release mass calculated from measured concentration/volume or measured activity and an applicable factor. Raw direct measurements are collected_record; factor/concentration-derived and reference-normalized amounts are calculated_value/calculated_from_collection. Retain substance/species or particle size, air/water/soil compartment, time, measured activity/concentration, sampled volume, formula, factor/source and uncertainty for each instance. Exclude influent background load and releases covered by complete services; broad organic/pollutant labels do not identify emissions. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_presentation and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_presentation` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_presentation_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_package` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual protective packages received for live delivery. Same-state receipt of collect_presented_package with tare/material/reuse/ownership; record physical destination or return separately. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_package <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_transport` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual pre-receipt freight service. Conditional separately identified actual leg using measured load mass including animals, carrier water and package, distance, mode, loading, carrier and co-load share. Internal movement and customer-paid legs remain in scope. Complete freight service excludes covered fuel/electricity/vehicle/releases; component model excludes complete freight. <br> - Flow property / unit: Transport service / t.km <br> - Amount rule: Actual independently observed t.km for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_transport <br> - Unit: t.km <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_fuel` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual fuel for component-modelled pre-receipt movement. Conditional separately identified fuel/state, measured mass or traceable density conversion, mode and leg; retain upstream supply. Exclude legs already covered by complete freight service. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_fuel <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_materials` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual consumables used by delivery. Conditional separately identified cleaning, monitoring, repair or protective consumables. Retain formulation, function, quantity and upstream burden; exclude separately declared feed, water and packages. No research anesthesia, tagging or DNA procedure is prescribed. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_materials <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_service` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual equipment and shared-asset service used by delivery. Conditional measured attributable equipment/shared-asset operating or occupied-service time only, with asset identity, consuming nodes, service period, installation, maintenance, replacement, idle/failed periods and end-of-life. This is not a mandatory unit for every provider service: independently declare each other actual provider service with its native property/unit and measured quantity before final exchange binding. Complete purchased service excludes covered component energy, materials, assets and releases; component modelling excludes that complete service. At delivery this timed-service obligation covers only separately evidenced handling/waiting/equipment outside any complete freight scope; loading/unloading already covered by freight cannot recur here. <br> - Flow property / unit: Service duration / h <br> - Amount rule: Actual independently observed h for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_service <br> - Unit: h <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_gaseous_fuel` | `delivery`; Inputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual volume-measured gaseous energy carriers used by delivery. Conditional each actual gaseous fuel measured in native m3 with substance, temperature/pressure and reference-volume basis, quantity, use, supplier upstream burden and event. Retain measured volume and any conversion factor/source. Exclude complete-service coverage; do not force gas volume into kg or h. <br> - Flow property / unit: Volume / m3 <br> - Amount rule: Actual independently observed m3 for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_gaseous_fuel <br> - Unit: m3 <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_recipient_package` | `delivery`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual protective packages handed to first physical recipient. Conditional same-state package handoff and custody/reuse responsibility; no invented post-receipt disposal burden. Physical returning packages use collect_package_return_output instead. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_recipient_package <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_package_return_output` | `delivery`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual reusable protective packages returned before or at receipt gate. Conditional same-state package return paired to collect_presentation_package_return or next-period stock input, with quantity/material, condition, prior service burden and actual cleaning/repair destination. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_package_return_output <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_other_output` | `delivery`; Outputs; Product flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual alternate usable animal output handed off before acceptance. Conditional actual whole-animal side output with identified live/dead/state, use and physical recipient, separate from accepted reference and waste. Preserve attribution and all failed movement burdens. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_other_output <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_solid_waste` | `delivery`; Outputs; Waste flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual solid waste from delivery. Conditional separately identified mortal animals, rejected material, feed remnants, cleaning sludge or damaged consumables, as applicable to this node; retain wet/dry state, destination and treatment responsibility. Usable products and retained stocks are not waste. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. <br> - Value mode: Foreground record (`foreground_record`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Collected record (`collected_record`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_solid_waste <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `collect_delivery_releases` | `delivery`; Outputs; Elementary flows | Identify each actual physically or chemically specific exchange within this collection scope and add an independent inventory card; this collection scope is not a flow. Establish substance/species, state, flow type, property, native unit, quantity, evidence, normalization, destination and UUID separately for each card. Do not copy an aggregate quantity, common upper bound or UUID onto its members. Determine final direction and product/waste/elementary type from each actual source and fate; the collection scope does not assign a universal exchange type. Collection scope: Actual identified direct releases from delivery. Conditional per actual substance and receiving medium only. Distinguish directly measured raw release mass from raw release mass calculated from measured concentration/volume or measured activity and an applicable factor. Raw direct measurements are collected_record; factor/concentration-derived and reference-normalized amounts are calculated_value/calculated_from_collection. Retain substance/species or particle size, air/water/soil compartment, time, measured activity/concentration, sampled volume, formula, factor/source and uncertainty for each instance. Exclude influent background load and releases covered by complete services; broad organic/pollutant labels do not identify emissions. <br> - Flow property / unit: Mass / kg <br> - Amount rule: Actual independently observed kg for each identified instance; divide the attributed native quantity by accepted A, retaining actual records from cp_delivery and positive same-lot A from cp_receipt. For calculated instances retain actual formula, measured inputs, factor and source before attribution. <br> - Value mode: Calculated value (`calculated_value`) <br> - Specificity: Site-specific (`site_specific`) <br> - Normalization basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Calculated from collection (`calculated_from_collection`) <br> - Collection protocol: `cp_delivery` <br> - Sources: `cuttlefish-accounting-method` <br> - Range: Provisional unestablished uncertainty; independent observations required <br> - Range role: Uncertainty range (`uncertainty_range`) <br> - Lower: 0 <br> - Upper: U_delivery_releases <br> - Unit: kg <br> - Basis: per 1 kg reference flow <br> - Basis kind: Reference flow (`reference_flow`) <br> - Evidence kind: Reasoned estimate (`reasoned_estimate`) | Node collection protocol, original records and individual identity, quantity, range and destination evidence |
| `dq_logistics_water_balance` | logistics, services and water/nutrient balances | Actual payload includes accompanying water, ice, packaging and other cargo. Empty return/repositioning still consumes activity: account for its actual fuel/distance/vehicle service and explicit attribution; zero cargo tonne-kilometres cannot erase that duty. Do not duplicate a complete service and covered fuel, materials, assets or direct releases. Measure external abstraction, supplied water product, internal circulation and actual returned/discharged water separately; never deduct internal recirculation again from external intake. Net nutrient increment/retention is a separate balance diagnostic, never automatically a negative elementary flow, negative emission or avoided burden. | Actual load/vehicle duty records, service scope, same-lot water/substance balance and method evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | live_receipt_reference | Require positive A, one final accepted animal output, matched actual receipt, live/whole/never-frozen species and use proof, animal-body-water retention and free/carrier-water/package exclusion. A/A is the only 1..1 identity. | `reference-mass-identity`; `cuttlefish-accounting-method` |
| validate_route | process map | Require actual independent collection, grading states/destinations, holding active or evidenced bypass, protective presentation and every pre-receipt movement. Sampling-return never satisfies harvest or receipt; unknown state is incomplete. | `cuttlefish-accounting-method` |
| validate_ledger | all inventory rows | Match each physical transfer, stock and return in state/native property/unit/quantity/lot/period and burdens; independently reconcile intended outputs, stocks, feed offered/remnants, mortality, incidentals, aqueous fates and identified releases. Do not fabricate closure by treating body-water changes or unseen emissions as measured. | `cuttlefish-accounting-method` |
| validate_attribution | shared outputs periods and assets | Reconcile all output/period/shared-consumer shares once, carry reproductive/offspring/broodstock and failed-period burdens, retain asset service life/replacement/termination, and justify economic fallback denominator/stock valuation or alternative with sensitivity. | `cuttlefish-accounting-method` |
| validate_evidence | collected calculated and provisional evidence | Require own-node collection protocols and actual record sources; calculated energy/releases need per-instance measured inputs/formula/factor/source. Provisional ranges and qualitative literature do not establish actual quantity, legal/food-health/welfare status, profitability, default feed rate or commercial delivery. | `cuttlefish-accounting-method` |
| `validate_atomic_completion` | all applicable per-flow collection obligations and final exchanges | Final dataset completion and validation require every actual exchange to have an independent atomic card and its own quantity, property/native unit, collection or calculation evidence, range/uncertainty evidence, normalization, actual destination and verified UUID. Unknown identity, activity state, quantity, range evidence or fate blocks completion; it is never zero, a presumed bypass or permission to omit an obligation. Every important concrete flow retains its own range/uncertainty evidence collection duty; a symbolic upper bound is not an empirical range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset produced from actual primary collection and declared calculations |
| downstream_use | After completed methodology review, actual exchange identity verification and quantity/quality validation, a concretely populated process or lifecyclemodel projection may support secondary_dataset or background_dataset use with matching boundary |
| allowed_use | Source-compatible whole-live captive Sepia officinalis route and actual site/period/gate, preserving declared stock/reproductive/service attribution and uncertainty |
| excluded_use | Entire CPC leaf extrapolation; squid or other species; wild direct catch; ornamental, dead or processed reference states; source-paper commerce/profit/food-health/welfare/legal certification; automatic use of provisional amounts or unresolved exchange identities |
| required_metadata | Species/ancestry/starting stage; actual location/cohorts/periods; source and upstream dataset links; product state/grade/use; mass/count/water/tare method; holding state; physical gate/logistics; transfer/stock/return ids; all outputs; service/asset life and consumers; allocation and concrete exchanges |
| required_quality_disclosure | Actual primary record coverage, failed periods and stock carryover; uncertainties/calibrations/sampling; provisional ranges replaced or unresolved; quantified calculation inputs/factors/sources; identity and methodology review; excluded service components; missing states/records |
| update_trigger | Changed species/origin/production mode/feed/water system; changed stage, reproductive attribution, asset life or consumer set; holding/presentation/gate or logistics change; new measurements/factors/identities or material data gaps |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| capaz-cuttlefish-2020 | literature | Capaz et al. (2020), Control of Zootechnology Leads to Improved Cuttlefish (Sepia officinalis, L.) Reproduction Performance up to Pre-industrial Levels, Frontiers in Marine Science 7:112. https://doi.org/10.3389/fmars.2020.00112 ; accessed 2026-10-12 | Culture Methodology and Data and Sample Collection: source-context captive egg/nursery/growout, water/aeration/shading, feed and sampling-return/reproductive scope only; no numeric defaults or commercial receipt evidence |
| cuttlefish-accounting-method | method_factor | Declared prospective captive cuttlefish foreground accounting method, this PCR sections 3–9 | Own-node collection, native-unit/reference normalization, complete phase/output/stock/return/service ledgers, source limits, conditional states, physical recipient gate and attribution; future actual records supply quantities |
| reference-mass-identity | method_factor | Same-positive-lot normalization identity A/A=1, with A independently collected through cp_receipt | Final reference output and 1..1 range only; an accounting identity rather than a survival/yield/default assumption |
